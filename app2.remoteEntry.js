var app2;!function(){"use strict";var n={7902:function(n,e,t){var r={"./RemoteBtn":function(){return Promise.all([t.e(82),t.e(728)]).then((function(){return function(){return t(2502)}}))},"./HoleApp":function(){return Promise.all([t.e(639),t.e(555),t.e(296),t.e(82),t.e(556),t.e(138),t.e(747),t.e(950),t.e(711)]).then((function(){return function(){return t(9711)}}))},"./Othermodule":function(){return Promise.all([t.e(82),t.e(116)]).then((function(){return function(){return t(2116)}}))},"./T":function(){return t.e(913).then((function(){return function(){return t(3913)}}))},"./RichText":function(){return Promise.all([t.e(639),t.e(777),t.e(82),t.e(556),t.e(747),t.e(165)]).then((function(){return function(){return t(6801)}}))},"./Player":function(){return Promise.all([t.e(639),t.e(555),t.e(82),t.e(556),t.e(138),t.e(683)]).then((function(){return function(){return t(4683)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",u=t.S[r];if(u&&u!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return u},init:function(){return o}})}},e={};function t(r){var u=e[r];if(void 0!==u)return u.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=n,t.c=e,t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))},t.u=function(n){return"static/js/"+n+"."+{82:"6e7c5db1",116:"1639976a",137:"004d18b9",138:"a222333e",164:"76f1db21",165:"1a833ba1",296:"c47333a4",416:"8a6a4bbf",530:"74a3c08e",555:"ac62c837",556:"67450003",562:"b0e1c2cf",639:"39bd3773",683:"6582c281",711:"9f0c8294",728:"7ab4e31e",747:"3459017d",777:"3ff83a4a",787:"419af693",791:"f796280b",913:"7714a7c0",950:"d729b177"}[n]+".chunk.js"},t.miniCssF=function(n){return"static/css/"+n+"."+{116:"de2f4732",296:"925cc895",530:"178ae2e8",711:"04612a23",728:"9f60ba1a",777:"d02b6773"}[n]+".chunk.css"},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={},e="app2:";t.l=function(r,u,o,i){if(n[r])n[r].push(u);else{var f,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var d=a[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){f=d;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",e+o),f.src=r),n[r]=[u];var s=function(e,t){f.onerror=f.onload=null,clearTimeout(h);var u=n[r];if(delete n[r],u&&u.forEach((function(n){return n(t)})),e)return e(t)},h=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),c&&document.head.appendChild(f)}}}(),t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},function(){t.S={};var n={},e={};t.I=function(r,u){u||(u=[]);var o=e[r];if(o||(o=e[r]={}),!(u.indexOf(o)>=0)){if(u.push(o),n[r])return n[r];t.o(t.S,r)||(t.S[r]={});var i=t.S[r],f="app2",c=function(n,e,t,r){var u=i[n]=i[n]||{},o=u[e];(!o||!o.loaded&&(!r!=!o.eager?r:f>o.from))&&(u[e]={get:t,from:f,eager:!!r})},a=[];if("default"===r)c("react-dom","18.2.0",(function(){return Promise.all([t.e(164),t.e(416)]).then((function(){return function(){return t(4164)}}))})),c("react","18.2.0",(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}));return a.length?n[r]=Promise.all(a).then((function(){return n[r]=1})):n[r]=1}}}(),t.p="https://taotao9125.github.io/app2/",function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var u=e[r],o=(typeof u)[0];if(r>=t.length)return"u"==o;var i=t[r],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&u!=i)return u<i;r++}},r=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var u=1,o=1;o<n.length;o++)u--,t+="u"==(typeof(f=n[o]))[0]?"-":(u>0?".":"")+(u=2,f);return t}var i=[];for(o=1;o<n.length;o++){var f=n[o];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():r(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},u=function(e,t){if(0 in e){t=n(t);var r=e[0],o=r<0;o&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,d=f<e.length?(typeof e[f])[0]:"";if(i>=t.length||"o"==(l=(typeof(a=t[i]))[0]))return!c||("u"==d?f>r&&!o:""==d!=o);if("u"==l){if(!c||"u"!=d)return!1}else if(c)if(d==l)if(f<=r){if(a!=e[f])return!1}else{if(o?a>e[f]:a<e[f])return!1;a!=e[f]&&(c=!1)}else if("s"!=d&&"n"!=d){if(o||f<=r)return!1;c=!1,f--}else{if(f<=r||l<d!=o)return!1;c=!1}else"s"!=d&&"n"!=d&&(c=!1,f--)}}var s=[],h=s.pop.bind(s);for(i=1;i<e.length;i++){var p=e[i];s.push(1==p?h()|h():2==p?h()&h():p?u(p,t):!h())}return!!h()},o=function(n,t){var r=n[t];return Object.keys(r).reduce((function(n,t){return!n||!r[n].loaded&&e(n,t)?t:n}),0)},i=function(n,e,t,u){return"Unsatisfied version "+t+" from "+(t&&n[e][t].from)+" of shared singleton module "+e+" (required "+r(u)+")"},f=function(n,e,t,r){var u=o(n,t);return a(n[t][u])},c=function(n,e,t,r){var f=o(n,t);return u(r,f)||"undefined"!==typeof console&&console.warn&&console.warn(i(n,t,f,r)),a(n[t][f])},a=function(n){return n.loaded=1,n.get()},l=function(n){return function(e,r,u,o){var i=t.I(e);return i&&i.then?i.then(n.bind(n,e,t.S[e],r,u,o)):n(e,t.S[e],r,u,o)}},d=l((function(n,e,r,u){return e&&t.o(e,r)?f(e,0,r):u()})),s=l((function(n,e,r,u,o){return e&&t.o(e,r)?c(e,0,r,u):o()})),h={},p={8416:function(){return s("default","react",[1,18,2,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},7082:function(){return d("default","react",(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},4556:function(){return d("default","react-dom",(function(){return Promise.all([t.e(164),t.e(416)]).then((function(){return function(){return t(4164)}}))}))},9138:function(){return s("default","react",[,[1,17],[1,16,8],1],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},2747:function(){return s("default","react",[4,18,2,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},1949:function(){return s("default","react-dom",[0,16,9,0],(function(){return Promise.all([t.e(164),t.e(416)]).then((function(){return function(){return t(4164)}}))}))},4819:function(){return s("default","react",[0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},4913:function(){return s("default","react",[0,14,0,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},3410:function(){return s("default","react",[0,15],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},8887:function(){return s("default","react",[0,16,0,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},3637:function(){return s("default","react",[0,16,11,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},8056:function(){return s("default","react",[0,16,9,0],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},2878:function(){return s("default","react",[,[1,17,0,0],[1,16,0,0],[1,15,0,0],[2,0,14,0],1,1,1],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))},7243:function(){return s("default","react-dom",[,[1,18],[1,17],[1,16],1,1],(function(){return Promise.all([t.e(164),t.e(416)]).then((function(){return function(){return t(4164)}}))}))},6737:function(){return s("default","react",[,[1,18],[1,17],[1,16],1,1],(function(){return t.e(791).then((function(){return function(){return t(2791)}}))}))}},m={82:[7082],138:[9138],165:[7243,6737],416:[8416],556:[4556],747:[2747],950:[1949,4819,4913,3410,8887,3637,8056,2878]};t.f.consumes=function(n,e){t.o(m,n)&&m[n].forEach((function(n){if(t.o(h,n))return e.push(h[n]);var r=function(e){h[n]=0,t.m[n]=function(r){delete t.c[n],r.exports=e()}},u=function(e){delete h[n],t.m[n]=function(r){throw delete t.c[n],e}};try{var o=p[n]();o.then?e.push(h[n]=o.then(r).catch(u)):r(o)}catch(i){u(i)}}))},t.f.consumes.consumesIds=Object.keys(p)}(),function(){var n=function(n){return new Promise((function(e,r){var u=t.miniCssF(n),o=t.p+u;if(function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var u=(i=t[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===n||u===e))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var i;if((u=(i=o[r]).getAttribute("data-href"))===n||u===e)return i}}(u,o))return e();!function(n,e,t,r){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onerror=u.onload=function(o){if(u.onerror=u.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),f=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=f,u.parentNode.removeChild(u),r(c)}},u.href=e,document.head.appendChild(u)}(n,o,e,r)}))},e={334:0};t.f.miniCss=function(t,r){e[t]?r.push(e[t]):0!==e[t]&&{116:1,296:1,530:1,711:1,728:1,777:1}[t]&&r.push(e[t]=n(t).then((function(){e[t]=0}),(function(n){throw delete e[t],n})))}}(),function(){var n={334:0};t.f.j=function(e,r){var u=t.o(n,e)?n[e]:void 0;if(0!==u)if(u)r.push(u[2]);else if(/^(138|416|556|747|777|82|950)$/.test(e))n[e]=0;else{var o=new Promise((function(t,r){u=n[e]=[t,r]}));r.push(u[2]=o);var i=t.p+t.u(e),f=new Error;t.l(i,(function(r){if(t.o(n,e)&&(0!==(u=n[e])&&(n[e]=void 0),u)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,u[1](f)}}),"chunk-"+e,e)}};var e=function(e,r){var u,o,i=r[0],f=r[1],c=r[2],a=0;if(i.some((function(e){return 0!==n[e]}))){for(u in f)t.o(f,u)&&(t.m[u]=f[u]);if(c)c(t)}for(e&&e(r);a<i.length;a++)o=i[a],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0},r=self.webpackChunkapp2=self.webpackChunkapp2||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t(7902);app2=r;var u=window.__isZMF__?window.rawWindow:window;u.__ZMF_APP2_WEBPACK_MODULES__=u.__ZMF_APP2_WEBPACK_MODULES__||n,u.__ZMF_APP2_WEBPACK_REQUIRE__=u.__ZMF_APP2_WEBPACK_REQUIRE__||t}();
//# sourceMappingURL=app2.remoteEntry.js.map