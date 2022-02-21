function simplifyUserAgent(rawUA) {
  // expedient [AND pragmatic!] parse of https://datatracker.ietf.org/doc/html/rfc2616#section-14.43
  // [i.e. we support some seemingly-wrong agent behavior around tokens and whitespace, etc.]
  var comments = [];
  // NOTE: HTTP `comment` syntax allows quoted text which can contain parentheses!
  //       For simplicity we won't handle that until/unless necessary in practice.
  rawUA = rawUA.replace(/\s*\((.*?)\)\s*/g, function (_,s) {
    comments.push(s);
    return ' # ';
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
    if (ua.app === '#') ua = {v:-1};
    if (ua.app) {
      appParts.push(ua.app);
    }
    if (ua.v) {
      ua.app = appParts.join(' ');
      appParts = [];
      if (ua.v === -1) delete ua.v;
      return (ua.app) ? ua : null;
    } else {
      return null;
    }
  }).filter(Boolean);
  if (appParts.length) products.push({
    app: appParts.join(' ')
  });
  //console.log("-->", products);
  
  var ua = {};
  if (products.length) {
    ua = products[0];
    // honest strings tend to start with the most specific app, but
    // those faking since e.g. Mozilla/5.0 tend to use the opposite
    if (ua.app !== 'Mozilla' && ua.app !== 'AppleWebKit') products.reverse();
    
    ua = products.pop();
    if (ua.app === 'like Gecko') {
      ua = products.pop();
    }
    if (ua.app === 'Mobile Safari') {
      ua.app = 'Safari';
    }
    if (ua.app === 'Safari') {
      var prev = products.pop() || {};
      if (prev.app === 'Mobile') prev = products.pop() || prev;
      
      if (prev.app === 'Version') ua.v = prev.v;
      else if (ua.v === '537.36' || prev.app === 'Chrome') ua = prev;
      else ua.v = null;   // for Safari before 3.0
    }
  }
  
  if (comments.length) {
    var MM = [
      /(Windows|Macintosh|Android|Linux)/, function (m) { return {os:m[1]}; },
      /^\w*BSD$/, function (m) { return {os:'BSD'}; },
      /^iP.*$/, function (m) { return {os:m[0]}; },
      /^(\w+)\/([0-9.].*)$/, function (m) { return {app:m[1],v:m[2]}; },
      /MSIE ([0-9.]+)/, function (m) { return {app:"MSIE",v:m[1]}; },
      /^rv:([0-9.]+)$/, function (m) { return {v:m[1]}; },
    ];
    
    var xtra = comments[0].split(/;\s*/).map(function (s) {
      for (var i = 0, len = MM.length; i < len; i += 2) {
        var re = MM[i],
            fn = MM[i + 1],
            m = s.match(re);
        if (m) return fn(m);
      }
      //return {'?':s};
    }).filter(Boolean);
    //console.log(xtra);
    
    xtra.forEach(function (d) {
      if (d.os && !ua.os) ua.os = d.os;
      if (d.os === 'Android' && ua.os === 'Linux') ua.os = d.os;
      if (d.app === "Trident") { d.app = "MSIE"; delete d.v; }
      if (d.app && ua.app === 'Mozilla') { ua.app = d.app; ua.v = d.v; }
      if (d.v && ua.app === "MSIE") ua.v = d.v;
    });
  }
  
  return {
    browser: ua.app || null,
    version: ua.v || null,
    platform: ua.os || null
  };
}

if (typeof window === 'undefined') {
  module.exports = simplifyUserAgent;
}
