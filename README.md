# id-est: simplified browser User Agent helper library

`id-est` is a lightweight way to simplify User Agent strings:

i.e. which browser, which version, which operating system is it?

It can also help you match against certain simple checks:

e.g. browser is Chrome or Firefox or Internet Explorer after version 8.

(but `exempli-gratia` would have been an even weirder name.)

## Example usage

Include the JS you need.

I prefer [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules),
but the older browsers you might be concerned about do not. So classic style it is:

```
<script src="simplify-ua.js"></script>
<script>
  var ua = id_est_simplifyUserAgent(navigator.userAgent);
  console.log("Browser:", ua.app);
  console.log("Version:", ua.v);
  console.log("Platform:", ua.os);

  if (ua.app === "Internet Explorer" && ua.v < "9") { // BUG!!
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
  var ua = id_est_simplifyUserAgent(navigator.userAgent);
  if (id_est_browserIsMatch(ua, { $any: [
    {app: "Internet Explorer", $lt: '11'},
    {app: "Safari", $lt: '13'},
    {app: "Opera", os: "Linux"},
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

The `simplify-ua.js` file provides one function: `id_est_simplifyUserAgent`


## Matching details

The `check-ua.js` file provides two functions: `id_est_compareVersions` and `id_est_browserIsMatch`


## MIT License, etc.

This is a kindler, gentler reboot of https://github.com/natevw/luseragent.

```
© 2013–2022 Nathan Vander Wilt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
