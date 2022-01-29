# simplify-user-agent: parsing/matching helpers for browser user agent strings

`simplify-user-agent` is a lightweight way to simplify User Agent strings:

i.e. which browser, which version, which operating system is it?

It can also help you specify matching logic based on some simplified checks:

e.g. is the browser "Chrome or Firefox or Internet Explorer after version 8"?


## Example usage

Include the JS you need.

I prefer [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules),
but the older browsers you might be concerned about do not. So classic style it is:

```
<script src="simplify-ua.js"></script>
<script>
  var uaInfo = simplifyUserAgent(navigator.userAgent);
  console.log("Browser:", uaInfo.browser);
  console.log("Version:", uaInfo.version);
  console.log("Platform:", uaInfo.platform);

  if (uaInfo.browser === "Internet Explorer" && uaInfo.version < "9") { // BUG!!
    alert("You're using a fairly old version of IE!");
  }
</script>
```

But there's a bug in that logic, because a version string like "11.0.19042.1266" will
**also** trigger the alert — even though it's newer than the intended IE9. What to do?

To help with this, this project has an additional library for *matching* in simplified form. You can check to see if a browser matches specific criteria:

```
<script src="simplify-ua.js"></script>
<script src="check-ua.js"></script>
<script>
  var ua = simplifyUserAgent(navigator.userAgent);
  if (simplifyUserAgent.browserIsMatch(ua, { $any: [
    {browser: "Internet Explorer", $lt: '11'},
    {browser: "Safari", $lt: '13'},
    {browser: "Opera", os: "Linux"},
  ]}) alert("Please consider upgrading your browser!");
</script>
```

## A friendly reminder

Relying on the user agent — even in a simplified form! — can make your website fragile and prevent it from working properly in future versions of popular browsers and/or current versions of less common browsers.

Here's some resources you might find helpful regarding browser compatibility issues:

* https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
* https://docs.microsoft.com/en-us/archive/msdn-magazine/2011/october/html5-browser-and-feature-detection

Also, if you like this library you might love the new [Navigator.userAgentData](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData) feature.

## Simplification details

When included directly in a page, the `simplify-ua.js` file exposes a global function, `simplifyUserAgent()`:

```
<script src="simplify-ua.js"></script>
<script>
simplifyUserAgent(navigator.userAgent);
</script>
```

When this library is used as a CommonJS package, this function is available as the admittedly somewhat redundant:

```
var simplifyUserAgent = require('simplify-user-agent').simplifyUserAgent;

// …
```

Or using newer syntax:

```
const { simplifyUserAgent } = require('simplify-user-agent');

// … elsewhere in your code …
simplifyUserAgent(someRequest.headers['user-agent']);
```


### `simplifyUserAgent(fullString)`

Takes in a browser string that might look something like `"Mozilla/4.0 (compatible; MSIE 4.01; Windows 98)"` and returns a simplified object:

```
{
  "browser": "Internet Explorer",
  "version": "4.01",
  "platform": "Windows"
}
```

In some ways this is a somewhat silly goal: there are hundreds/thousands of user agents and only a small fraction of those are even "browsers".

There are also philosophical considerations here: what is a "browser"? Are Chrome and Chromium different browsers? What's most important: the rendering engine, the JavaScript engine, the icon? What about iOS, where all browsers are stuck using the same builtin implementation?

The goals here are:

* for "major browsers", we try to return the major branded name by which users know it
* for "somewhat popular browsers", we might return a functionally equivalent brand
* for "everything else", we try to return something somewhat sensible

Some guiding principles are that:

* what broad category would a *somewhat* technical user consider themselves to be using?
* when in doubt, defer to the most reasonable portion(s) of the input user agent string

This does not always lead to a clear decision. Disputes and discussions are welcome in the issue tracker.

**This also means the output *values* of this function are subject to change** even within *minor* release versions. A change of *keys* would be considered breaking, a change of the browser or platform *value* could happen at any time. You should rely on those values only for low-stakes purposes, e.g. displaying a gentle warning for unsupported browsers. That is also the intended usage of the optional browser "matching" helpers below.

## Matching details

When included directly in a page, the `check-ua.js` file hooks up two additional functions `simplifyUserAgent.compareVersions()` and `simplifyUserAgent.browserIsMatch()`.

Note that if you *haven't* included the main `simplifyUserAgent()` function a stub object will be created e.g.:

```
<script src="check-ua.js"></script>
<script>
simplifyUserAgent.compareVersions('1.2.3', '3.2.1');   // → `-1`

simplifyUserAgent();      // TypeError: simplifyUserAgent is not a function!
</script>
```

Please be careful to include `simplify-ua.js` **before** `check-ua.js` when you do use both files together.

When this library is used as a CommonJS package, the functions are available as exports e.g.:

```
var compareVersions = require('simplify-user-agent').compareVersions;
compareVersions('1.2.3', '2.4.6.8');

// OR…   (newer syntax below, using a different export)

const { browserIsMatch } = require('simplify-user-agent');
let someInfo = …, someCriteria = …;
browserIsMatch(someInfo, someCriteria);
```

### `compareVersions(a, b)`

Given two version strings, returns `-1` if the first is less than (version `a` before `b`) and `+1` if the first is greater than (verson `a` after `b`) the second. This returns `0` if the two are *equivalent* (not necessarily equal…).

*Equivalence* to this helper means that a version like `1.1` is considered to match versions like `1.1.1` or `1.1.2.3` as well. This leads to the following examples all being true:

* `compareVersions('1.0.0', '1.1.1') === -1`
* `compareVersions('1.1.1', '1.0.0') === +1`
* `compareVersions('1.1', '1.1.1') === 0`
* `compareVersions('1', '1.1.1') === 0`
* `compareVersions('1.0', '1.1.1') === -1`

This equivalence can be useful when testing more complicated matches.

### `browserIsMatch(infoObject, criteria)`

This function takes an `infoObject` with `"browser"`/`"version"`/`"platform"` keys like returned by `simplifyUserAgent` and a `criteria` structure, and returns `true` if the info meets the given criteria or `false` if not.

The criteria structure can be as simple as a flat object like `{browser:"Chrome"}` or `{platform:"Windows"}` to match strict equality with the provided fields:

```
let info = {browser:"Chrome",version:"42",platform:"Cray"};

let isChrome = browserIsMatch(info, {browser:"Chrome"}),
    isWindows = browserIsMatch(info, {browser:"Windows"});
console.log((isChrome) ? "Something like Chrome" : "Something else");
console.log((isChrome) ? "Running on Windows" : "Running elsewhere");
```

The criteria structure can also be **nested** using three special keys: `$all`, `$any`, and `$not`.

The simplest is the `$not` key, whose value should be a valid criteria object.
It has the effect of inverting the criteria: a mismatch becomes `true` and a match `false`:

```
let criteria = { $not: {platform:"Windows"} };

let info1 = {browser:"Chrome",version:"42",platform:"Cray"},
    info2 = {browser:"Chrome",version:"3.11",platform:"Windows"};
assert( browserIsMatch(info1, criteria) === true );
assert( browserIsMatch(info2, criteria) === false );
```

The `$any` and `$all` keys both expect *arrays* of nested criteria objects.
The are equivalent to logical `OR` and `AND` operations respectively:

```
let info = {browser: "Firefox", version: "96.0.3", platform: "Macintosh"};

browserIsMatch(info, {$any: [
  {browser: "Netscape"},
  {browser: "Opera"},
  {browser: "Firefox"},
]});    // → true

browserIsMatch(info, {$all: [
  {browser: "Firefox"},
  {platform: "Windows"},
]});    // → false
```

And for **version checking**, there are three other special keys: `$at`, `$lt`, `$gt`.
These rely internal on the `compareVersions` equivalance logic.

* `$at` — matches if browser version is equivalent to provided value
* `$lt` — matches if browser version is strictly less than provided value
* `$gt` — matches if browser version is strictly greater than than provided value

The various criteria structures can be nested in all sorts of combinations:

```
let info = {browser: "Firefox", version: "96.0.3", platform: "Macintosh"};

// these are all true
browserIsMatch(info, {$at:'96'});
browserIsMatch(info, {$gt:'96.0.2'});
browserIsMatch(info, {$not:{$lt:'96'}});
browserIsMatch(info, {$any:[
  {browser:"Firefox", $gt:'90.0'},
  {browser:"Internet Explorer", $lt:'12'},
]});
```


## MIT License, etc.

This is a kindler, gentler reboot of https://github.com/natevw/luseragent.

```
© 2013–2022 Nathan Vander Wilt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
