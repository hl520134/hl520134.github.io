if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const n=e=>i(e,d),a={module:{uri:d},exports:f,require:n};s[d]=Promise.all(r.map((e=>a[e]||n(e)))).then((e=>(c(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"324de6ef0e3c68a0c24179e47de4adbc"},{url:"archives/2022/08/index.html",revision:"9d61e1007ca70ac902fc1e47feb35ba0"},{url:"archives/2022/index.html",revision:"0999604bf1a3bd86b80ce2ba2a1d69bb"},{url:"archives/index.html",revision:"7c992def22edb0cfd7a57298e50b5dd9"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"css/index.css",revision:"e8b6189bf34c63dbfc3981659cbf7c79"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"2ca708e53550c30ad9ae20f46cbe70cf"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"undefined/1.html",revision:"0b7b1ce71d4b7f2aeb9099a6cab40932"},{url:"undefined/16107.html",revision:"7059737af3cbffc25884948aa4743296"}],{})}));
//# sourceMappingURL=service-worker.js.map
