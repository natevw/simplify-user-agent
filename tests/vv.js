var _ = require("../check-ua.js");

console.log("sortVersion check:", [
  _.sortVersion('1.0.0', '1.0.1') === -1,
  _.sortVersion('1.0.1', '1.0.0') === +1,
  _.sortVersion('1', '1.0.1') === 0,
  _.sortVersion('1.0.1', '1') === 0,
  _.sortVersion('', '1') === -1,
  _.sortVersion('1', '') === +1,
].every(Boolean) ? "okay" : "BAD RESULT!");
  
console.log(" info match check:", [
  _.match({v:'3.2.1',app:'UA'}, {$not:{app:'IE'}}),
  !_.match({v:'3.2.1',app:'UA'}, {$not:{app:'UA'}}),
  _.match({v:'3.2.1',app:'UA'}, {app:'UA'}),
  !_.match({v:'3.2.1',app:'UA'}, {app:'IE'}),
  _.match({v:'3.2.1',app:'UA'}, {app:'UA', $at:'3.2'}),
  !_.match({v:'3.2.1',app:'UA'}, {app:'UA', $at:'3.1'}),
  _.match({v:'3.2.1',app:'UA'}, {$gt:'1.2.3'}),
  _.match({v:'3.2.1',app:'UA'}, {$lt:'3.4.5'}),
  _.match({v:'3.2.1',app:'UA'}, {$any:[{app:'IE'},{app:'UA'}]}),
  _.match({v:'3.2.1',app:'UA'}, {$all:[{app:'UA'},{v:'3.2.1'}]}),
  _.match({v:'3.2.1',app:'UA'}, {$all:[{app:'UA'},{$not:{app:'IE'}}]}),
].every(Boolean) ? "okay" : "BAD RESULT!");
