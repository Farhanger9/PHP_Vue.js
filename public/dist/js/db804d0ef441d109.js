/*! For license information please see db804d0ef441d109.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[583],{3216:(t,r,e)=>{e.d(r,{Ay:()=>_});var o=e(2505),n=e.n(o),s=Object.defineProperty,i=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,u=(t,r,e)=>r in t?s(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,l=(t,r)=>{for(var e in r||(r={}))i.call(r,e)&&u(t,e,r[e]);if(a)for(var e of a(r))c.call(r,e)&&u(t,e,r[e]);return t};const f=t=>void 0===t,h=t=>Array.isArray(t),p=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,d=(t,r,e,o)=>((r=r||{}).indices=!f(r.indices)&&r.indices,r.nullsAsUndefineds=!f(r.nullsAsUndefineds)&&r.nullsAsUndefineds,r.booleansAsIntegers=!f(r.booleansAsIntegers)&&r.booleansAsIntegers,r.allowEmptyArrays=!f(r.allowEmptyArrays)&&r.allowEmptyArrays,e=e||new FormData,f(t)||(null===t?r.nullsAsUndefineds||e.append(o,""):(t=>"boolean"==typeof t)(t)?r.booleansAsIntegers?e.append(o,t?1:0):e.append(o,t):h(t)?t.length?t.forEach(((t,n)=>{const s=o+"["+(r.indices?n:"")+"]";d(t,r,e,s)})):r.allowEmptyArrays&&e.append(o+"[]",""):(t=>t instanceof Date)(t)?e.append(o,t.toISOString()):!(t=>t===Object(t))(t)||(t=>p(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||p(t)?e.append(o,t):Object.keys(t).forEach((n=>{const s=t[n];if(h(s))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);d(s,r,e,o?o+"["+n+"]":n)}))),e);var y={serialize:d};function m(t){if(null===t||"object"!=typeof t)return t;const r=Array.isArray(t)?[]:{};return Object.keys(t).forEach((e=>{r[e]=m(t[e])})),r}function v(t){return Array.isArray(t)?t:[t]}function g(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find((t=>g(t)))}class w{constructor(){this.errors={},this.errors={}}set(t,r){"object"==typeof t?this.errors=t:this.set(l(l({},this.errors),{[t]:v(r)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some((t=>this.has(t)))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return v(this.errors[t]||[])}only(...t){const r=[];return t.forEach((t=>{const e=this.get(t);e&&r.push(e)})),r}flatten(){return Object.values(this.errors).reduce(((t,r)=>t.concat(r)),[])}clear(t){const r={};t&&Object.keys(this.errors).forEach((e=>{e!==t&&(r[e]=this.errors[e])})),this.set(r)}}class b{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new w,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,m(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach((r=>{this[r]=t[r]}))}data(){return this.keys().reduce(((t,r)=>l(l({},t),{[r]:this[r]})),{})}keys(){return Object.keys(this).filter((t=>!b.ignore.includes(t)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),b.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((t=>!b.ignore.includes(t))).forEach((t=>{this[t]=m(this.originalData[t])}))}get(t,r={}){return this.submit("get",t,r)}post(t,r={}){return this.submit("post",t,r)}patch(t,r={}){return this.submit("patch",t,r)}put(t,r={}){return this.submit("put",t,r)}delete(t,r={}){return this.submit("delete",t,r)}submit(t,r,e={}){return this.startProcessing(),e=l({data:{},params:{},url:this.route(r),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},e),"get"===t.toLowerCase()?e.params=l(l({},this.data()),e.params):(e.data=l(l({},this.data()),e.data),g(e.data)&&(e.transformRequest=[t=>y.serialize(t)])),new Promise(((t,r)=>{(b.axios||n()).request(e).then((r=>{this.finishProcessing(),t(r)})).catch((t=>{this.handleErrors(t),r(t)}))}))}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?l({},t.data.errors):t.data.message?{error:t.data.message}:l({},t.data):{error:b.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,r={}){let e=t;return Object.prototype.hasOwnProperty.call(b.routes,t)&&(e=decodeURI(b.routes[t])),"object"!=typeof r&&(r={id:r}),Object.keys(r).forEach((t=>{e=e.replace(`{${t}}`,r[t])})),e}onKeydown(t){const r=t.target;r.name&&this.errors.clear(r.name)}}b.routes={},b.errorMessage="Something went wrong. Please try again.",b.recentlySuccessfulTimeout=2e3,b.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const _=b},1583:(t,r,e)=>{e.r(r),e.d(r,{default:()=>c});var o=e(3216);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function s(){s=function(){return r};var t,r={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function h(t,r,e,o){var n=r&&r.prototype instanceof w?r:w,s=Object.create(n.prototype),a=new I(o||[]);return i(s,"_invoke",{value:A(t,e,a)}),s}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var d="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function w(){}function b(){}function _(){}var E={};f(E,c,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(C([])));j&&j!==e&&o.call(j,c)&&(E=j);var x=_.prototype=w.prototype=Object.create(E);function L(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(s,i,a,c){var u=p(t[s],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var s;i(this,"_invoke",{value:function(t,o){function n(){return new r((function(r,n){e(t,o,r,n)}))}return s=s?s.then(n,n):n()}})}function A(r,e,o){var n=d;return function(s,i){if(n===m)throw Error("Generator is already running");if(n===v){if("throw"===s)throw i;return{value:t,done:!0}}for(o.method=s,o.arg=i;;){var a=o.delegate;if(a){var c=k(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===d)throw n=v,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=m;var u=p(r,e,o);if("normal"===u.type){if(n=o.done?v:y,u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(n=v,o.method="throw",o.arg=u.arg)}}}function k(r,e){var o=e.method,n=r.iterator[o];if(n===t)return e.delegate=null,"throw"===o&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),g;var s=p(n,r.iterator,e.arg);if("throw"===s.type)return e.method="throw",e.arg=s.arg,e.delegate=null,g;var i=s.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var s=-1,i=function e(){for(;++s<r.length;)if(o.call(r,s))return e.value=r[s],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(n(r)+" is not iterable")}return b.prototype=_,i(x,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:b,configurable:!0}),b.displayName=f(_,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},L(S.prototype),f(S.prototype,u,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,o,n,s){void 0===s&&(s=Promise);var i=new S(h(t,e,o,n),s);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),f(x,l,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var o in r)e.push(o);return e.reverse(),function t(){for(;e.length;){var o=e.pop();if(o in r)return t.value=o,t.done=!1,t}return t.done=!0,t}},r.values=C,I.prototype={constructor:I,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!r)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(o,n){return a.type="throw",a.arg=r,e.next=o,n&&(e.method="next",e.arg=t),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=r,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var n=o.arg;T(e)}return n}}throw Error("illegal catch attempt")},delegateYield:function(r,e,o){return this.delegate={iterator:C(r),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=t),g}},r}function i(t,r,e,o,n,s,i){try{var a=t[s](i),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(o,n)}const a={scrollToTop:!1,metaInfo:function(){return{title:this.$t("settings")}},data:function(){return{form:new o.Ay({password:"",password_confirmation:""})}},methods:{update:function(){var t,r=this;return(t=s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.form.patch("/api/settings/password");case 2:r.form.reset();case 3:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(o,n){var s=t.apply(r,e);function a(t){i(s,o,n,a,c,"next",t)}function c(t){i(s,o,n,a,c,"throw",t)}a(void 0)}))})()}}};const c=(0,e(4486).A)(a,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("card",{attrs:{title:t.$t("your_password")}},[e("form",{on:{submit:function(r){return r.preventDefault(),t.update.apply(null,arguments)},keydown:function(r){return t.form.onKeydown(r)}}},[e("alert-success",{attrs:{form:t.form,message:t.$t("password_updated")}}),t._v(" "),e("div",{staticClass:"mb-3 row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("new_password")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(r){r.target.composing||t.$set(t.form,"password",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),e("div",{staticClass:"mb-3 row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-end"},[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.form.password_confirmation},on:{input:function(r){r.target.composing||t.$set(t.form,"password_confirmation",r.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"password_confirmation"}})],1)]),t._v(" "),e("div",{staticClass:"mb-3 row"},[e("div",{staticClass:"col-md-9 ms-md-auto"},[e("v-button",{attrs:{loading:t.form.busy,type:"success"}},[t._v("\n          "+t._s(t.$t("update"))+"\n        ")])],1)])],1)])}),[],!1,null,null,null).exports}}]);