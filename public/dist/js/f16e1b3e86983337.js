/*! For license information please see f16e1b3e86983337.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[550],{3216:(t,e,r)=>{r.d(e,{Ay:()=>E});var n=r(2505),o=r.n(n),i=Object.defineProperty,a=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l=(t,e)=>{for(var r in e||(e={}))a.call(e,r)&&u(t,r,e[r]);if(s)for(var r of s(e))c.call(e,r)&&u(t,r,e[r]);return t};const f=t=>void 0===t,h=t=>Array.isArray(t),p=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,d=(t,e,r,n)=>((e=e||{}).indices=!f(e.indices)&&e.indices,e.nullsAsUndefineds=!f(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!f(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!f(e.allowEmptyArrays)&&e.allowEmptyArrays,r=r||new FormData,f(t)||(null===t?e.nullsAsUndefineds||r.append(n,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?r.append(n,t?1:0):r.append(n,t):h(t)?t.length?t.forEach(((t,o)=>{const i=n+"["+(e.indices?o:"")+"]";d(t,e,r,i)})):e.allowEmptyArrays&&r.append(n+"[]",""):(t=>t instanceof Date)(t)?r.append(n,t.toISOString()):!(t=>t===Object(t))(t)||(t=>p(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||p(t)?r.append(n,t):Object.keys(t).forEach((o=>{const i=t[o];if(h(i))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);d(i,e,r,n?n+"["+o+"]":o)}))),r);var m={serialize:d};function y(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach((r=>{e[r]=y(t[r])})),e}function v(t){return Array.isArray(t)?t:[t]}function g(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find((t=>g(t)))}class w{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(l(l({},this.errors),{[t]:v(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some((t=>this.has(t)))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return v(this.errors[t]||[])}only(...t){const e=[];return t.forEach((t=>{const r=this.get(t);r&&e.push(r)})),e}flatten(){return Object.values(this.errors).reduce(((t,e)=>t.concat(e)),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach((r=>{r!==t&&(e[r]=this.errors[r])})),this.set(e)}}class b{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new w,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,y(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach((e=>{this[e]=t[e]}))}data(){return this.keys().reduce(((t,e)=>l(l({},t),{[e]:this[e]})),{})}keys(){return Object.keys(this).filter((t=>!b.ignore.includes(t)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),b.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((t=>!b.ignore.includes(t))).forEach((t=>{this[t]=y(this.originalData[t])}))}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,r={}){return this.startProcessing(),r=l({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===t.toLowerCase()?r.params=l(l({},this.data()),r.params):(r.data=l(l({},this.data()),r.data),g(r.data)&&(r.transformRequest=[t=>m.serialize(t)])),new Promise(((t,e)=>{(b.axios||o()).request(r).then((e=>{this.finishProcessing(),t(e)})).catch((t=>{this.handleErrors(t),e(t)}))}))}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?l({},t.data.errors):t.data.message?{error:t.data.message}:l({},t.data):{error:b.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let r=t;return Object.prototype.hasOwnProperty.call(b.routes,t)&&(r=decodeURI(b.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach((t=>{r=r.replace(`{${t}}`,e[t])})),r}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}b.routes={},b.errorMessage="Something went wrong. Please try again.",b.recentlySuccessfulTimeout=2e3,b.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const E=b},2069:(t,e,r)=>{r.d(e,{A:()=>l});function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){var n;return n=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==i(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),s=new C(n||[]);return o(a,"_invoke",{value:P(t,r,s)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function w(){}function b(){}function E(){}var x={};f(x,c,(function(){return this}));var _=Object.getPrototypeOf,O=_&&_(_($([])));O&&O!==r&&n.call(O,c)&&(x=O);var j=E.prototype=w.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,s,c){var u=p(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==i(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function P(e,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=S(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?v:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return b.prototype=E,o(j,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:b,configurable:!0}),b.displayName=f(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(k.prototype),f(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),f(j,l,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function s(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function c(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===i(t)&&(r=t,t=""),r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({url:t,title:e,width:600,height:720},r);var a=void 0!==window.screenLeft?window.screenLeft:window.screen.left,s=void 0!==window.screenTop?window.screenTop:window.screen.top,c=window.innerWidth||document.documentElement.clientWidth||window.screen.width,u=window.innerHeight||document.documentElement.clientHeight||window.screen.height;r.left=c/2-r.width/2+a,r.top=u/2-r.height/2+s;var l=Object.keys(r).reduce((function(t,e){return t.push("".concat(e,"=").concat(r[e])),t}),[]).join(","),f=window.open(t,e,l);return window.focus&&f.focus(),f}const u={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=this;return(t=a().mark((function t(){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c("",e.$t("login")),t.next=3,e.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:n=t.sent,r.location.href=n;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))})()},onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}};const l=(0,r(4486).A)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.githubAuth?r("button",{staticClass:"btn btn-dark ms-auto",attrs:{type:"button"},on:{click:t.login}},[t._v("\n  "+t._s(t.$t("login_with"))+"\n  "),r("fa",{attrs:{icon:["fab","github"]}})],1):t._e()}),[],!1,null,null,null).exports},4550:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var n=r(3216);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),s=new C(n||[]);return a(i,"_invoke",{value:P(t,r,s)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function w(){}function b(){}function E(){}var x={};f(x,c,(function(){return this}));var _=Object.getPrototypeOf,O=_&&_(_($([])));O&&O!==r&&n.call(O,c)&&(x=O);var j=E.prototype=w.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(i,a,s,c){var u=p(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,r,n){var o=d;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=S(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?v:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=E,a(j,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:b,configurable:!0}),b.displayName=f(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(k.prototype),f(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),f(j,l,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}const s={components:{LoginWithGithub:r(2069).A},middleware:"guest",metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new n.Ay({name:"",email:"",password:"",password_confirmation:""}),mustVerifyEmail:!1}},methods:{register:function(){var t,e=this;return(t=i().mark((function t(){var r,n,o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/register");case 2:if(r=t.sent,!(n=r.data).status){t.next=8;break}e.mustVerifyEmail=!0,t.next=16;break;case 8:return t.next=10,e.form.post("/api/login");case 10:return o=t.sent,a=o.data.token,e.$store.dispatch("auth/saveToken",{token:a}),t.next=15,e.$store.dispatch("auth/updateUser",{user:n});case 15:e.$router.push({name:"home"});case 16:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))})()}}};const c=(0,r(4486).A)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-7 m-auto"},[t.mustVerifyEmail?r("card",{attrs:{title:t.$t("register")}},[r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.$t("verify_email_address"))+"\n      ")])]):r("card",{attrs:{title:t.$t("register")}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"mb-3 row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("name")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"mb-3 row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("email")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"mb-3 row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("password")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),r("div",{staticClass:"mb-3 row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password_confirmation"}})],1)]),t._v(" "),r("div",{staticClass:"mb-3 row"},[r("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[r("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("register"))+"\n            ")]),t._v(" "),r("login-with-github")],1)])])])],1)])}),[],!1,null,null,null).exports}}]);