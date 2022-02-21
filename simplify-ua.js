function simplifyUserAgent(rawUA) {
  // expedient [AND pragmatic!] parse of https://datatracker.ietf.org/doc/html/rfc2616#section-14.43
  // [i.e. we support some seemingly-wrong agent behavior around tokens and whitespace, etc.]
  var comments = [];
  // NOTE: HTTP `comment` syntax allows quoted text which can contain parentheses!
  //       For simplicity we won't handle that until/unless necessary in practice.
  rawUA = rawUA.replace(/\s*\((.*?)\)\s*/g, function (_,s) {
    comments.push(s);
    return ' ';
  });
  var products = rawUA.split(/\s+/).map(function (s) {
    var a = s.split('/');
    return {app:a[0], v:a[1]};
  });
  //console.log(products, comments);
  
  // this rejoins broken tokens like "Mobile Safari/432.1" or "Feed Wrangler/1.0"
  // while also generally cleaning out any leftover empty parts from split above.
  var appParts = [];
  products = products.map(function (ua) {
    if (ua.app) {
      appParts.push(ua.app);
    }
    if (ua.v) {
      ua.app = appParts.join(' ');
      appParts = [];
      return ua;
    } else {
      return null;
    }
  }).filter(Boolean);
  if (appParts.length) products.push({
    app: appParts.join(' ')
  });
  //console.log("-->", products);
  
  var ua;
  if (products.length > 1) {
    ua = products[products.length - 1];
    if (ua.app === 'Version') {     // TODO: handle other weird Opera strings, distinguish Mobile/Mini?
      ua.app = products[0].app;
    } else if (ua.app === 'Safari') {
      var prev = products[products.length - 2];
      if (prev.app === 'Version') ua.v = prev.v;
      else if (prev.app === 'Chrome') ua = prev;
    }
  } else if (comments.length && (
    (ua = comments[0].match(/rv:([0-9.]+)/)) ||
    (ua = comments[0].match(/MSIE ([0-9.]+)/))
  )) {
    // IE and most Trident wrappers pack *everything* into a comment
    ua = {app:"Internet Explorer", v:ua[1]};
  } else {
    ua = products[0] || {};
  }
  
  // TODO: this could be significantly more clever but works in common cases
  if (comments.length) {
    var parts = comments[0].split(/;\s*/);
    //console.log(parts);
    if (parts[0] === 'compatible' && parts.length > 2) ua.os = parts[2];
    else if (parts[1] === 'Trident/7.0' && (parts = parts[0].split(', ')).length > 2) ua.os = parts[2];
    else if (parts[0] === 'Linux' && parts.length > 2) ua.os = parts[2];
    else ua.os = parts[0];
  }
  if (ua.os) ua.os = ua.os.split(' ')[0];
  
  return {
    browser: ua.app || null,
    version: ua.v || null,
    platform: ua.os || null
  };
}

if (typeof window === 'undefined') {
  module.exports = simplifyUserAgent;
}
