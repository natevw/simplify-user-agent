module.exports = [{
  id: "Mozilla/4.0 (compatible; MSIE 4.01; Windows 98)",
  est: {browser:"MSIE", version:"4.01", platform:"Windows"},
},{
  id: "NCSA_Mosaic/2.0 (Windows 3.1)",
  est: {browser:"NCSA_Mosaic", version:"2.0", platform:"Windows"},
},{
  id: "Mozilla/1.0 (Win3.1)",
  est: {browser:"Mozilla", version:"1.0"},
},{
  id: "Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)",
  est: {browser:"MSIE", version:"2.0", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.1) Gecko/20020826",
  est: {browser:"Gecko", version:"20020826", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Windows; U; Windows NT 5.1; sv-SE; rv:1.7.5) Gecko/20041108 Firefox/1.0",
  est: {browser:"Firefox", version:"1.0", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.7.2) Gecko/20040825 Camino/0.8.1",
  est: {browser:"Camino", version:"0.8.1", platform:"Macintosh"},
},{
  id: "Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.8.1.8) Gecko/20071008 SeaMonkey/1.0",
  est: {browser:"SeaMonkey", version:"1.0", platform:"Windows"},
},{
  id: "Mozilla/5.0 (compatible; Konqueror/3.2; FreeBSD) (KHTML, like Gecko)",
  est: {browser:"Konqueror", version:"3.2", platform:"BSD"},
},{
  id: "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.51",
  est: {},
},{
  id: "Mozilla/5.0 (Windows NT 6.0; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.51",
  est: {},
},{
  id: "Opera/9.51 (Windows NT 5.1; U; en)",
  est: {browser:"Opera", version:"9.51", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.5",
  est: {browser:"Safari", version:null, platform:"Macintosh"},    // NOTE: Safari pre-3.0 didn't include marketing version
},{
  id: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)",
  est: {browser:"MSIE", version:"8.0", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13",
  est: {browser:"Chrome", $at:"0.2", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
  est: {browser:"Chrome", $at:"97", platform:"Macintosh"},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15",
  est: {browser:"Safari", version:"15.2", platform:"Macintosh"},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:96.0) Gecko/20100101 Firefox/96.0",
  est: {browser:"Firefox", $at:"96", platform:"Macintosh"},
},{
  id: "NetNewsWire (RSS Reader; https://netnewswire.com/)",
  est: {browser:"NetNewsWire", version:null, platform:null},
},{
  // NOTE: for this and a few others following, the developer's intent seems to be for the name to
  // include white space, i.e. that the browser here is "Feed Wrangler" rather than "Feed".
  // afaict this is a clear violation of https://datatracker.ietf.org/doc/html/rfc2616#section-3.8
  // so I'm not particularly inclined to support this — but maybe somehow for pragramatic purposes?
  id: "Feed Wrangler/1.0 (42 subscribers; feed-id=12334; http://example.com; Allow like Gecko)",
  est: {browser:"Feed Wrangler", version:"1.0", platform:null},
},{
  id: "Superfeedr bot/2.0 http://example.com - Make your feeds realtime: get in touch - feed-id:123456",
  est: {browser:"Superfeedr bot", version:"2.0", platform:null},
},{
  id: "Sogou web spider/4.0(+http://www.example.com/docs/help/webmasters.htm#07)",
  est: {browser:"Sogou web spider", version:"4.0", platform:null},
},{
  id: "Go-http-client/1.1",
  est: {browser:"Go-http-client", version:"1.1", platform:null},
},{
  id: "curl/7.77.0",
  est: {browser:"curl", version:"7.77.0", platform:null},
},{
  id: "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.example.com/bot.html)",
  est: {browser:"SemrushBot", $at:"7", platform:null},
},{
  id: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  est: {browser:"Googlebot", version:"2.1", platform:null},
},{
  id: "-",
  est: {browser:"-", version:null, platform:null},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:80.0) Gecko/20100101 Firefox/80.0",
  est: {browser:"Firefox", $at:"80", platform:"Macintosh"},
},{
  id: "python-requests/2.27.1",
  est: {browser:"python-requests", version:"2.27.1", platform:null},
},{
  id: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
  est: {browser:"Safari", platform:"iPhone"},
},{
  id: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
  est: {browser:"Chrome", $at:"83", platform:"Linux"},
},{
  id: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 OPR/82.0.4227.50",
  est: {browser:"OPR", $at:"82", platform:"Windows"},
},{
  id: "Podcasts/1575.1.2 CFNetwork/1240.0.4 Darwin/20.6.0",
  est: {browser:"Podcasts", version:"1575.1.2"},
},{
  id: "Feedbin feed-id:4242 - 42 subscribers",
  est: {/*browser:"Feedbin",*/ version:null, platform:null},
},{
  id: "UniversalFeedParser/5.2.1 +https://code.google.com/p/feedparser/",
  est: {browser:"UniversalFeedParser", version:"5.2.1", platform:null},
},{
  id: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  est: {browser:"Chrome", $at:"97", platform:"Android"},
},{
  id: "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://example.com/robot/)",
  est: {browser:"AhrefsBot", version:"7.0", platform:null},
},{
  id: "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4427.0 Safari/537.36",
  est: {browser:"Chrome", $at:"90", platform:"Windows"},
},{
  id: "ZoominfoBot (zoominfobot at example dot com)",
  est: {browser:"ZoominfoBot", platform:null},
},{
  id: "Mozilla/5.0 (Linux; Android 9; CPH1859) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.98 Mobile Safari/537.36",
  est: {browser:"Chrome", $at:"97", platform:"Android"},
},{
  id: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36 Edg/97.0.1072.76",
  est: {browser:"Edg", $at:"97", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36",
  est: {browser:"Chrome", $at:"35", platform:"Macintosh"},
},{
  id: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0",
  est: {browser:"Firefox", $at:"96", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15 (Applebot/0.1; +http://example.com/go/applebot)",
  est: {browser:"Safari", $at:"13.1", platform:"Macintosh"},
},{
  id: "facebookexternalhit/1.1 (+http://example.com/externalhit_uatext.php)",
  est: {browser:"facebookexternalhit", version:"1.1", platform:null},
},{
  id: "MUCheckTool (unknown version) CFNetwork/1240.0.4 Darwin/20.6.0",
  est: {browser:"MUCheckTool", platform:null},
},{
  id: "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/986368",
  est: {browser:"Chrome", $at:"65", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; PetalBot;+https://example.com/site/petalbot)",
  est: {platform:"Android"},
},{
  id: "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0",
  est: {browser:"Firefox", $at:"91", platform:"Windows"},
},{
  id: "Mozilla/5.0 (compatible; BLEXBot/1.0; +http://example.com/)",
  est: {browser:"BLEXBot", version:"1.0", platform:null},
},{
  id: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
  est: {browser:"Chrome", $at:"72", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
  est: {browser:"Chrome", $at:"72", platform:"Windows"},
},{
  id: "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.500.29 Safari/537.36",
  est: {browser:"Chrome", $at:"79", platform:null},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
  est: {browser:"Chrome", $at:"91", platform:"Macintosh"},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:44.0) Gecko/20100101 Firefox/44.0",
  est: {browser:"Firefox", $at:"44", platform:"Macintosh"},
},{
  id: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:72.0) Gecko/20100101 Firefox/72.0",
  est: {browser:"Firefox", $at:"72", platform:"Linux"},
},{
  id: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",
  est: {browser:"Safari", version:"15.1", platform:"iPhone"},
},{
  id: "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
  est: {browser:"MSIE", version:"6.0", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Linux; U; Android 4.4.2; en-US; HM NOTE 1W Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.0.5.850 U3/0.8.0 Mobile Safari/534.30",
  est: {platform:"Android"},
},{
  id: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/97.0.4691.0 Safari/537.36",
  est: {browser:"HeadlessChrome", $at:"97", platform:"Linux"},
},{
  id: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36",
  est: {browser:"Chrome", $at:"81", platform:"Linux"},
},{
  id: "Mozilla/5.0 zgrab/0.x",
  est: {browser:"zgrab", $at:"0", platform:null},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0",
  est: {browser:"Firefox", $at:"61", platform:"Macintosh"},
},{
  id: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 122.1.3.22.123 (iPhone11,8; iOS 13_2_3; nl_NL; nl-NL; scale=2.00; 1024x768; 12345)",
  est: {platform:"iPhone"},
},{
  id: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
  est: {browser:"Chrome", $at:"66", platform:"Macintosh"},
},{
  id: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
  est: {browser:"Chrome", $at:"60", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 OPR/36.0.2130.32",
  est: {browser:"OPR", $at:"36", platform:"Windows"},
},{
  id: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 Edg/98.0.1108.56",
  est: {browser:"Edg", $at:"98", platform:"Windows"},
},{
  id: "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)",
  est: {browser:"MSIE", version:"9.0", platform:"Windows"},
},{
  id: "Apache-HttpClient/4.5.2 (Java/1.8.0_151)",
  est: {browser:"Apache-HttpClient", version:"4.5.2", platform:null},
},{
  id: "PHP/5.3.80",
  est: {browser:"PHP", $at:"5.3", platform:null},
},{
  id: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
  est: {browser:"Chrome", $at:"94", platform:"Linux"},
},{
  // see https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/ms537503(v=vs.85)
  id: "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko",
  est: {browser:"MSIE", version:"11.0", platform:"Windows"},
},{
  id: "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
  est: {browser:"MSIE", version:"11.0", platform:"Windows"},
},{
  id: "nope",
  est: {browser:"nope", version:null, platform:null}
},{
  id: "(nope)",
  est: {browser:null, version:null, platform:null}
}];
