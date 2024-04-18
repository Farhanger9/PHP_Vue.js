/*! For license information please see 15109e4f2d2d30aa.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[576],{3216:(t,e,r)=>{r.d(e,{Ay:()=>E});var n=r(2505),o=r.n(n),s=Object.defineProperty,i=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l=(t,e)=>{for(var r in e||(e={}))i.call(e,r)&&u(t,r,e[r]);if(a)for(var r of a(e))c.call(e,r)&&u(t,r,e[r]);return t};const h=t=>void 0===t,f=t=>Array.isArray(t),p=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,d=(t,e,r,n)=>((e=e||{}).indices=!h(e.indices)&&e.indices,e.nullsAsUndefineds=!h(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!h(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!h(e.allowEmptyArrays)&&e.allowEmptyArrays,r=r||new FormData,h(t)||(null===t?e.nullsAsUndefineds||r.append(n,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?r.append(n,t?1:0):r.append(n,t):f(t)?t.length?t.forEach(((t,o)=>{const s=n+"["+(e.indices?o:"")+"]";d(t,e,r,s)})):e.allowEmptyArrays&&r.append(n+"[]",""):(t=>t instanceof Date)(t)?r.append(n,t.toISOString()):!(t=>t===Object(t))(t)||(t=>p(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||p(t)?r.append(n,t):Object.keys(t).forEach((o=>{const s=t[o];if(f(s))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);d(s,e,r,n?n+"["+o+"]":o)}))),r);var y={serialize:d};function m(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach((r=>{e[r]=m(t[r])})),e}function v(t){return Array.isArray(t)?t:[t]}function g(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find((t=>g(t)))}class b{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(l(l({},this.errors),{[t]:v(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some((t=>this.has(t)))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return v(this.errors[t]||[])}only(...t){const e=[];return t.forEach((t=>{const r=this.get(t);r&&e.push(r)})),e}flatten(){return Object.values(this.errors).reduce(((t,e)=>t.concat(e)),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach((r=>{r!==t&&(e[r]=this.errors[r])})),this.set(e)}}class w{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new b,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,m(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach((e=>{this[e]=t[e]}))}data(){return this.keys().reduce(((t,e)=>l(l({},t),{[e]:this[e]})),{})}keys(){return Object.keys(this).filter((t=>!w.ignore.includes(t)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),w.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((t=>!w.ignore.includes(t))).forEach((t=>{this[t]=m(this.originalData[t])}))}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,r={}){return this.startProcessing(),r=l({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===t.toLowerCase()?r.params=l(l({},this.data()),r.params):(r.data=l(l({},this.data()),r.data),g(r.data)&&(r.transformRequest=[t=>y.serialize(t)])),new Promise(((t,e)=>{(w.axios||o()).request(r).then((e=>{this.finishProcessing(),t(e)})).catch((t=>{this.handleErrors(t),e(t)}))}))}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?l({},t.data.errors):t.data.message?{error:t.data.message}:l({},t.data):{error:w.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let r=t;return Object.prototype.hasOwnProperty.call(w.routes,t)&&(r=decodeURI(w.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach((t=>{r=r.replace(`{${t}}`,e[t])})),r}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}w.routes={},w.errorMessage="Something went wrong. Please try again.",w.recentlySuccessfulTimeout=2e3,w.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const E=w},576:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var n=r(3216);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(){s=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,s=Object.create(o.prototype),a=new T(n||[]);return i(s,"_invoke",{value:k(t,r,a)}),s}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function E(){}var O={};h(O,c,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(C([])));x&&x!==r&&n.call(x,c)&&(O=x);var L=E.prototype=b.prototype=Object.create(O);function _(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(s,i,a,c){var u=p(t[s],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==o(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var s;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return s=s?s.then(o,o):o()}})}function k(e,r,n){var o=d;return function(s,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===s)throw i;return{value:t,done:!0}}for(n.method=s,n.arg=i;;){var a=n.delegate;if(a){var c=A(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?v:y,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function A(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var s=p(o,e.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,g;var i=s.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,i=function r(){for(;++s<e.length;)if(n.call(e,s))return r.value=e[s],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return w.prototype=E,i(L,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:w,configurable:!0}),w.displayName=h(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,h(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},_(S.prototype),h(S.prototype,u,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,s){void 0===s&&(s=Promise);var i=new S(f(t,r,n,o),s);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),h(L,l,"Generator"),h(L,c,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var s=o;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,s,i){try{var a=t[s](i),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}const a={middleware:"guest",metaInfo:function(){return{title:this.$t("verify_email")}},data:function(){return{status:"",form:new n.Ay({email:""})}},created:function(){this.$route.query.email&&(this.form.email=this.$route.query.email)},methods:{send:function(){var t,e=this;return(t=s().mark((function t(){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/email/resend");case 2:r=t.sent,n=r.data,e.status=n.status,e.form.reset();case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var s=t.apply(e,r);function a(t){i(s,n,o,a,c,"next",t)}function c(t){i(s,n,o,a,c,"throw",t)}a(void 0)}))})()}}};const c=(0,r(4486).A)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-7 m-auto"},[r("card",{attrs:{title:t.$t("verify_email")}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.send.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[r("alert-success",{attrs:{form:t.form,message:t.status}}),t._v(" "),r("div",{staticClass:"mb-3 row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("email")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"mb-3 row"},[r("div",{staticClass:"col-md-9 ms-md-auto"},[r("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("send_verification_link"))+"\n            ")])],1)])],1)])],1)])}),[],!1,null,null,null).exports}}]);