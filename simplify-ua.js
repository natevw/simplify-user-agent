function simplifiedUserAgent(rawUA) {
  // expedient parse of http://tools.ietf.org/html/rfc2616#section-14.43
  var products = [],
      comments = [],
      inComment = false;
  rawUA.split(' ').forEach(function (chunk) {
    if (!inComment && chunk[0] === '(') {
      inComment = true;
      comments.push('');
    }
    
    if (inComment) comments[comments.length - 1] += ' ' + chunk;
    else products.push(chunk);
    
    // NOTE: HTTP `comment` syntax allows quoted text which can contain parentheses!
    //       For simplicity we won't handle that until/unless necessary in practice.
    if (chunk[chunk.length-1] === ')') inComment = false;
  });
  comments = comments.map(function (s) { return s.trim().slice(1,-1); });
  products = products.map(function (s) { var a = s.split('/'); return {app:a[0], v:a[1]}; }).filter(function (ua) { return Boolean(ua.v); });
  //console.log(products, comments);
  
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
  } else if (comments.length && (ua = comments[0].match(/MSIE ([0-9.]+)/))) {
    // IE and most Trident wrappers pack *everything* into a comment
    ua = {app:"Internet Explorer", v:ua[1]};
    // TODO: guess name for miscellaneous Trident wrappers
  } else {
    ua = products[0] || {};
    if (ua.app === 'Mozilla') ua.app = "Netscape";
  }
  
  // TODO: this could be significantly more clever but works in common cases
  if (comments.length) {
    var parts = comments[0].split(/;\s*/);
    //console.log(parts);
    if (parts[0] === 'compatible' && parts.length > 2) ua.os = parts[2];
    else if (parts[0] === 'Linux' && parts.length > 2) ua.os = parts[2];
    else ua.os = parts[0];
  }
  if (ua.os) ua.os = ua.os.split(' ')[0];
  if (ua.os && !ua.os.indexOf('iP')) ua.os = 'iOS';
  if (ua.os === 'Macintosh') ua.os = 'macOS';
  
  return ua;
}

if (typeof window === 'undefined') {
  module.exports = simplifiedUserAgent;
}
