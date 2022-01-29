// 1.0.0 < 1.0.1, but 1 == 1.0.1

function idEstCompare(aVersion, bVersion) {
  function varr(v) { return v.split('.').map(function (s) { return isNaN(s) ? s : +s; }); }

  var aa = varr(aVersion),
      bb = varr(bVersion),
      len = Math.min(aa.length, bb.length);
  for (var idx = 0; idx < len; idx++) {
    var a = aa[idx], b = bb[idx];
    if (a < b) return -1;
    if (a > b) return +1;
  }
  return 0;
}

console.log("Version comparison check:", [
  idEstCompare('1.0.0', '1.0.1') === -1,
  idEstCompare('1.0.1', '1.0.0') === +1,
  idEstCompare('1', '1.0.1') === 0,
  idEstCompare('1.0.1', '1') === 0,
  idEstCompare('', '1') === -1,
  idEstCompare('1', '') === +1,
].every(Boolean) ? "okay" : "BAD RESULT!");

function idEstMatch(object, criteria) {
  var CMP = {$at: 0, $lt: -1, $gt: +1};
  function matches(x) {
    return idEstMatch(object, x);
  }
  
  if ('$not' in criteria) return !matches(criteria.$not);
  else if ('$any' in criteria) return criteria.$any.some(matches);
  else if ('$all' in criteria) return criteria.$all.every(matches);
  else return Object.keys(criteria).every(function (key) {
    if (key in CMP) return idEstCompare(object.v, criteria[key]) === CMP[key];
    else return object[key] === criteria[key];
  });
}

console.log("Match check:", [
  idEstMatch({v:'3.2.1',app:'UA'}, {$not:{app:'IE'}}),
 !idEstMatch({v:'3.2.1',app:'UA'}, {$not:{app:'UA'}}),
  idEstMatch({v:'3.2.1',app:'UA'}, {app:'UA'}),
 !idEstMatch({v:'3.2.1',app:'UA'}, {app:'IE'}),
  idEstMatch({v:'3.2.1',app:'UA'}, {app:'UA', $at:'3.2'}),
 !idEstMatch({v:'3.2.1',app:'UA'}, {app:'UA', $at:'3.1'}),
  idEstMatch({v:'3.2.1',app:'UA'}, {$gt:'1.2.3'}),
  idEstMatch({v:'3.2.1',app:'UA'}, {$lt:'3.4.5'}),
  idEstMatch({v:'3.2.1',app:'UA'}, {$any:[{app:'IE'},{app:'UA'}]}),
  idEstMatch({v:'3.2.1',app:'UA'}, {$all:[{app:'UA'},{v:'3.2.1'}]}),
  idEstMatch({v:'3.2.1',app:'UA'}, {$all:[{app:'UA'},{$not:{app:'IE'}}]}),
].every(Boolean) ? "okay" : "BAD RESULT!");
