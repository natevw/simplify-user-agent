
var dut = require("..");
    exp = require("./eg.js");

function check(result, intent, orig) {
  console.log(orig);
  console.log("Result:", result);
  console.log("Wanted:", intent);
  console.log(dut.browserIsMatch(result, intent) ? "ok." : "FAILED!");
  console.log("--");
}

exp.forEach(function (d) {
  let res = dut.simplifyUserAgent(d.id);
  check(res, d.est, d.id);
});
