var _ = require("../check-ua.js");

console.log("compareVersions check:", [
  _.compareVersions('1.0.0', '1.0.1') === -1,
  _.compareVersions('1.0.1', '1.0.0') === +1,
  _.compareVersions('1', '1.0.1') === 0,
  _.compareVersions('1.0.1', '1') === 0,
  _.compareVersions('', '1') === -1,
  _.compareVersions('1', '') === +1,
].every(Boolean) ? "okay" : "BAD RESULT!");
  
console.log(" browserIsMatch check:", [
  _.browserIsMatch({v:'3.2.1',app:'UA'}, {$not:{app:'IE'}}),
  !_.browserIsMatch({v:'3.2.1',app:'UA'}, {$not:{app:'UA'}}),
  _.browserIsMatch({v:'3.2.1',app:'UA'}, {app:'UA'}),
  !_.browserIsMatch({v:'3.2.1',app:'UA'}, {app:'IE'}),
  _.browserIsMatch({v:'3.2.1',app:'UA'}, {app:'UA', $at:'3.2'}),
  !_.browserIsMatch({v:'3.2.1',app:'UA'}, {app:'UA', $at:'3.1'}),
  _.browserIsMatch({v:'3.2.1',app:'UA'}, {$gt:'1.2.3'}),
  _.browserIsMatch({v:'3.2.1',app:'UA'}, {$lt:'3.4.5'}),
  _.browserIsMatch({v:'3.2.1',app:'UA'}, {$any:[{app:'IE'},{app:'UA'}]}),
  _.browserIsMatch({v:'3.2.1',app:'UA'}, {$all:[{app:'UA'},{v:'3.2.1'}]}),
  _.browserIsMatch({v:'3.2.1',app:'UA'}, {$all:[{app:'UA'},{$not:{app:'IE'}}]}),
].every(Boolean) ? "okay" : "BAD RESULT!");
