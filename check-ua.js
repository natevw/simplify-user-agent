/* @copyright © 2022 Nathan Vander Wilt — https://github.com/natevw/simplify-user-agent */

(function (exportObject) {
  function compareVersions(aVersion, bVersion) {   // so: 1.0.0 < 1.0.1, but 1 == 1.0.1
    function varr(v) { return v.split('.').map(function (s) { return isNaN(s) ? s : +s; }); }

    var aa = varr(aVersion || ''),
        bb = varr(bVersion || ''),
        len = Math.min(aa.length, bb.length);
    for (var idx = 0; idx < len; idx++) {
      var a = aa[idx], b = bb[idx];
      if (a < b) return -1;
      if (a > b) return +1;
    }
    return 0;
  }

  function browserIsMatch(object, criteria) {
    var CMP = {$at: 0, $lt: -1, $gt: +1};
    function matches(x) {
      return browserIsMatch(object, x);
    }
    
    if ('$not' in criteria) return !matches(criteria.$not);
    else if ('$any' in criteria) return criteria.$any.some(matches);
    else if ('$all' in criteria) return criteria.$all.every(matches);
    else return Object.keys(criteria).every(function (key) {
      if (key in CMP) return compareVersions(object.version, criteria[key]) === CMP[key];
      else return object[key] === criteria[key];
    });
  }

  exportObject.compareVersions = compareVersions;
  exportObject.browserIsMatch = browserIsMatch;
})(
  (typeof window === 'undefined') ? exports :
    (typeof simplifyUserAgent !== 'undefined') ? simplifyUserAgent :
      (window.simplifyUserAgent = {})
);
