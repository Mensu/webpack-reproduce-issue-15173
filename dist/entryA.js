!function(){"use strict";var e,t,r,n={335:function(e,t,r){function n(){return"moduleAB"}r.d(t,{n:function(){return n}})}},o={};function u(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,u),r.exports}u.m=n,u.d=function(e,t){for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,r){return u.f[r](e,t),t}),[]))},u.u=function(e){return{10:"featureAAndHelper",257:"commonAsync",363:"featureAB",516:"featureAOnly"}[e]+".js"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="webpack-reproduce-issue-15173:",u.l=function(r,n,o,i){if(e[r])e[r].push(n);else{var a,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+o){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e}(),function(){var e={938:0};u.f.j=function(t,r){var n=u.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var i=u.p+u.u(t),a=new Error;u.l(i,(function(r){if(u.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}};var t=function(t,r){var n,o,i=r[0],a=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in a)u.o(a,n)&&(u.m[n]=a[n]);c&&c(u)}for(t&&t(r);l<i.length;l++)o=i[l],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkwebpack_reproduce_issue_15173=self.webpackChunkwebpack_reproduce_issue_15173||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),r=u(335),console.log({getModuleAB:r.n,getModuleA:function(){return"moduleA"},getFeatureAIndex:()=>u.e(10).then(u.bind(u,466)).then((e=>e.getFeatureA)),getFeatureAHelper:()=>u.e(10).then(u.bind(u,77)).then((e=>e.getFeatureAHelper)),getFeatureAOnly:()=>u.e(516).then(u.bind(u,466)).then((e=>e.getFeatureA)),getFeatureAB:()=>u.e(363).then(u.bind(u,70)).then((e=>e.getFeatureAB))})}();