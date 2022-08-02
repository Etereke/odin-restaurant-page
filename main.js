(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(492),t.b),l=new URL(t(231),t.b),p=i()(o()),u=s()(d),f=s()(l);p.push([e.id,"@font-face{\n    font-family: skyrim;\n    src: url("+u+");\n}\n\n:root{\n    --content-opaque: rgba(0, 0, 0, 0.788);\n    --border-gray: rgb(82, 82, 82);\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n}\n\n#content{\n    min-height: 100vh;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: 100px 1fr 50px ;\n    grid-template-columns: 1fr 8fr 1fr;\n    gap: 10px;\n    background-image: url("+f+");\n    background-size: cover;\n    font-family: skyrim, sans-serif;\n    color: white;\n}\n\nheader, footer, .content-home{\n    border: 3px solid var(--border-gray);\n    background-color: var(--content-opaque);\n}\nheader{\n    grid-column: 1 / 4;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    font-size: 70px;\n    text-transform: capitalize;\n}\n.navitem{\n    height: 100%;\n    display: flex;\n    padding: 0 10px;\n}\n.navitem > span{\n    align-self: center;\n}\n.navitem:hover{\n    color: rgb(231, 166, 25);\n}\n.active{\n    background-color: rgba(161, 20, 20, 0.39);\n}\nfooter{\n    grid-row: 3 / 4;\n    grid-column: 1 / 4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.content-home{\n    \n    background-color: var(--content-opaque);\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-rows: 100px 1fr 1fr;\n    grid-template-columns: 1fr 1fr;\n    gap: 40px;\n    justify-items: center;\n    padding: 40px;\n}\n\n.content-home > h1{\n    grid-column: 1 / 3;\n    text-align: center;\n}\n\n.paragraph{\n    font-size: 2rem;\n}\n\n.content-home img{\n    max-width: min(80%, 600px);\n    border: 3px solid var(--border-gray);\n    border-radius: 20px;\n}",""]);const m=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},492:(e,n,t)=>{e.exports=t.p+"699b7e36bb5bef941f80.ttf"},231:(e,n,t)=>{e.exports=t.p+"8e0fe99292ee6ba8178c.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"f87beb50a26128f735ac.jpg",g=t.p+"b2c6282acfd1517e5d9f.jpg",v=document.querySelector("#content");v.appendChild(function(e){const n=document.createElement("header"),t=["home","menu","contact"];for(let e of t){let t=document.createElement("div"),r=document.createElement("span");r.textContent=e,t.classList.add("navitem"),"home"===e&&t.classList.add("active"),t.appendChild(r),n.appendChild(t)}return n}()),v.appendChild(function(){const e=document.createElement("div");e.classList.add("content-home");const n=document.createElement("h1");n.textContent="Welcome to the Bannered Mare!",e.appendChild(n);let t=document.createElement("div");t.classList.add("paragraph"),t.textContent="Come inside and warm up by the fire! Serving the best mead in Skyrim, The Bannered Mare is the heart of Whiterun's night-life. You will never suffer from boredom: the city's finest folks spend their nights in our establishment! If you enjoy music, just say the word and Mikael the bard shall sing the best odes and tales you'll hear all around Skyrim. Or if you are proud of your fistfighting, Uthgerd the Unbroken is always looking challengers! And who knows, you might get to chug a drink or two with the legendary Dovahkiin himself...",e.appendChild(t);let r=new Image;r.src=h,r.alt="Bannered Mare Inside",e.appendChild(r),t=document.createElement("div"),t.classList.add("paragraph");const o=document.createElement("h3");o.textContent="Services",t.appendChild(o);const a=document.createElement("ul"),i=["Top-quality mead in every quantity","Fine food","Music by Mikael the bard","Rent a comfy bed for the night"];for(let e of i){const n=document.createElement("li");n.textContent=e,a.appendChild(n)}return t.appendChild(a),e.appendChild(t),r=new Image,r.src=g,r.alt="Bannered Mare Outside",e.appendChild(r),e}()),v.appendChild(function(){const e=document.createElement("footer");let n=document.createElement("span");return n.textContent="Copyright and stuff, 2022",e.appendChild(n),e}())})()})();