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
  _.browserIsMatch({version:'3.2.1',browser:'UA'}, {$not:{browser:'IE'}}),
  !_.browserIsMatch({version:'3.2.1',browser:'UA'}, {$not:{browser:'UA'}}),
  _.browserIsMatch({version:'3.2.1',browser:'UA'}, {browser:'UA'}),
  !_.browserIsMatch({version:'3.2.1',browser:'UA'}, {browser:'IE'}),
  _.browserIsMatch({version:'3.2.1',browser:'UA'}, {browser:'UA', $at:'3.2'}),
  !_.browserIsMatch({version:'3.2.1',browser:'UA'}, {browser:'UA', $at:'3.1'}),
  _.browserIsMatch({version:'3.2.1',browser:'UA'}, {$gt:'1.2.3'}),
  _.browserIsMatch({version:'3.2.1',browser:'UA'}, {$lt:'3.4.5'}),
  _.browserIsMatch({version:'3.2.1',browser:'UA'}, {$any:[{browser:'IE'},{browser:'UA'}]}),
  _.browserIsMatch({version:'3.2.1',browser:'UA'}, {$all:[{browser:'UA'},{version:'3.2.1'}]}),
  _.browserIsMatch({version:'3.2.1',browser:'UA'}, {$all:[{browser:'UA'},{$not:{browser:'IE'}}]}),
  _.browserIsMatch({noversion:true}, {$not:{$at:'86'}}),
  _.browserIsMatch({version:'96.0.3'}, {$at:'96'}),
  _.browserIsMatch({version:'96.0.3'}, {$gt:'96.0.2'}),
  _.browserIsMatch({version:'96.0.3'}, {$not:{$lt:'96'}}),
  _.browserIsMatch({browser:"Firefox", version:'96.0.3'}, {$any:[
    {browser:"Firefox", $gt:'90.0'},
    {browser:"Internet Explorer", $lt:'12'},
  ]}),
].every(Boolean) ? "okay" : "BAD RESULT!");
