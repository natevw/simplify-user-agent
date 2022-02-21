
var dut = require("..");
    exp = require("./eg.js");

function check(result, intent, orig) {
  console.log(orig);
  console.log("Result:", result);
  console.log("Wanted:", intent);
  var ok = dut.browserIsMatch(result, intent);
  console.log(ok ? "ok." : "FAILED!");
  console.log("--");
  return ok;
}

var nTests = 0,
    nOkays = 0;
exp.forEach(function (d) {
  let res = dut.simplifyUserAgent(d.id),
      ok = check(res, d.est, d.id);
  nTests += 1;
  if (ok) nOkays += 1;
});

console.log(`${nOkays}/${nTests} passed`);
process.exit((nOkays === nTests) ? 0 : -1);