(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},oa={};try{oa.__proto__=ma;la=oa.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function x(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function qa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.v=this.h=null}
function ra(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
qa.prototype.s=function(a){this.g=a};
function sa(a,b){a.h={oa:b,aa:!0};a.f=a.l||a.j}
qa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function y(a,b,c){a.f=c;return{value:b}}
qa.prototype.C=function(a){this.f=a};
function ta(a){a.l=2;a.j=3}
function ua(a){a.l=0;a.h=null}
function xa(a){a.v=[a.h];a.l=0;a.j=0}
function ya(a){var b=a.v.splice(0)[0];(b=a.h=a.h||b)?b.aa?a.f=a.l||a.j:void 0!=b.C&&a.j<b.C?(a.f=b.C,a.h=null):a.f=a.j:a.f=4}
function za(a){this.f=new qa;this.g=a}
function Aa(a,b){ra(a.f);var c=a.f.i;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,sa(a.f,g),Ca(a)}a.f.i=null;d.call(a.f,f);return Ca(a)}
function Ca(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,sa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.aa)throw b.oa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ra(a.f);a.f.i?b=Ba(a,a.f.i.next,b,a.f.s):(a.f.s(b),b=Ca(a));return b};
this["throw"]=function(b){ra(a.f);a.f.i?b=Ba(a,a.f.i["throw"],b,a.f.s):(sa(a.f,b),b=Ca(a));return b};
this["return"]=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){var c=new Da(new za(b));pa&&a.prototype&&pa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||pa});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ea});
t("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ja),reject:g(this.j)}};
b.prototype.ja=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.la(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Ba(g):this.l(g)}};
b.prototype.Ba=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.ma(h,g):this.l(g)};
b.prototype.j=function(g){this.s(2,g)};
b.prototype.l=function(g){this.s(1,g)};
b.prototype.s=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.ka();this.v()};
b.prototype.ka=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.H=function(){if(this.m)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.v=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.la=function(g){var h=this.i();g.K(h.resolve,h.reject)};
b.prototype.ma=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(r,q){l=r;m=q});
this.K(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.K=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).K(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).K(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Fa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Fa(this,b,"includes").indexOf(b,c||0)}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&A(h.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:n,o:r}}return{id:l,list:m,index:-1,o:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.o?l.o.value=k:(l.o={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.o),this.f.previous.next=l.o,this.f.previous=l.o,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.o&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.o.previous.next=h.o.next,h.o.next.previous=h.o.previous,h.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).o};
e.prototype.get=function(h){return(h=d(this,h).o)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ka(){}
function Ma(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa=Qa:Sa=Ra;return Sa.apply(null,arguments)}
function Ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function E(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pa=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function H(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ya(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ya,Error);Ya.prototype.name="CustomError";var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ab(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function cb(a,b){var c=Za(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function db(a){return Array.prototype.concat.apply([],arguments)}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ib(a){var b=jb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ob;var pb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},qb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,Bb=/[\x00&<>"']/;
function Cb(a,b){return a<b?-1:a>b?1:0}
;var Db;a:{var Eb=B.navigator;if(Eb){var Fb=Eb.userAgent;if(Fb){Db=Fb;break a}}Db=""}function J(a){return-1!=Db.indexOf(a)}
;function Gb(){}
;function Hb(a){Hb[" "](a);return a}
Hb[" "]=Ka;var Ib=J("Opera"),Jb=J("Trident")||J("MSIE"),Kb=J("Edge"),Lb=J("Gecko")&&!(-1!=Db.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),Mb=-1!=Db.toLowerCase().indexOf("webkit")&&!J("Edge");function Nb(){var a=B.document;return a?a.documentMode:void 0}
var Ob;a:{var Pb="",Qb=function(){var a=Db;if(Lb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kb)return/Edge\/([\d\.]+)/.exec(a);if(Jb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mb)return/WebKit\/(\S+)/.exec(a);if(Ib)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Qb&&(Pb=Qb?Qb[1]:"");if(Jb){var Rb=Nb();if(null!=Rb&&Rb>parseFloat(Pb)){Ob=String(Rb);break a}}Ob=Pb}var Sb=Ob,Tb={},Ub;if(B.document&&Jb){var Vb=Nb();Ub=Vb?Vb:parseInt(Sb,10)||void 0}else Ub=void 0;var Wb=Ub;var Xb=J("Firefox")||J("FxiOS"),Yb=J("iPhone")&&!J("iPod")&&!J("iPad")||J("iPod"),Zb=J("iPad");var $b={},ac=null;var K=window;function bc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=cc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,dc[c])c=dc[c];else{c=String(c);if(!dc[c]){var f=/function\s+([^\(]+)/m.exec(c);dc[c]=f?f[1]:"[Anonymous]"}c=dc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function cc(a,b){b||(b={});b[lc(a)]=!0;var c=a.stack||"",d=a.Qa;d&&!b[lc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=cc(d,b));return c}
function lc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var dc={};function mc(a){this.f=a||{cookie:""}}
p=mc.prototype;p.isEnabled=function(){return navigator.cookieEnabled};
p.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ya;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ba}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=pb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ba:0,path:b,domain:c});return d};
p.isEmpty=function(){return!this.f.cookie};
p.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=pb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var nc=new mc("undefined"==typeof document?null:document);function oc(a,b){this.width=a;this.height=b}
p=oc.prototype;p.clone=function(){return new oc(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.isEmpty=function(){return!(this.width*this.height)};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function pc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=Za(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function qc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function rc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var sc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tc(a){return a?decodeURI(a):a}
function uc(a){return tc(a.match(sc)[3]||null)}
function vc(a){var b=a.match(sc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function wc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)wc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function xc(a){var b=[],c;for(c in a)wc(c,a[c],b);return b.join("&")}
var yc=/#|$/;function zc(a){var b=Ac;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Bc(){var a=[];zc(function(b){a.push(b)});
return a}
var Ac={Ca:"allow-forms",Da:"allow-modals",Ea:"allow-orientation-lock",Fa:"allow-pointer-lock",Ga:"allow-popups",Ha:"allow-popups-to-escape-sandbox",Ia:"allow-presentation",Ja:"allow-same-origin",Ka:"allow-scripts",La:"allow-top-navigation",Ma:"allow-top-navigation-by-user-activation"},Cc=gb(function(){return Bc()});
function Dc(){var a=qc(),b={};I(Cc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ec(){this.h=this.h;this.i=this.i}
Ec.prototype.h=!1;Ec.prototype.dispose=function(){this.h||(this.h=!0,this.I())};
Ec.prototype.I=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Fc={};function Gc(){}
function Hc(a,b){if(b!==Fc)throw Error("Bad secret");this.f=a}
x(Hc,Gc);Hc.prototype.toString=function(){return this.f};new Hc("about:blank",Fc);new Hc("about:invalid#zTSz",Fc);var Ic=(new Date).getTime();function Jc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Kc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,q=0;64>q;q+=4)r[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],F=e[3],bb=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var na=F^v&(w^F);var La=1518500249}else na=v^w^F,La=1859775393;else 60>q?(na=v&w|F&(v|w),La=2400959708):(na=v^w^F,La=3395469782);na=((n<<5|n>>>27)&4294967295)+na+bb+La+r[q]&4294967295;bb=F;F=w;w=(v<<30|v>>>2)&4294967295;v=n;n=na}e[0]=e[0]+n&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+bb&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}r||(r=n.length);q=0;if(0==l)for(;q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)n[r++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,na:function(){for(var n=d(),r="",q=0;q<n.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return r}}}
;function Lc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),Mc(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=Mc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Mc(a){var b=Kc();b.update(a);return b.na().toLowerCase()}
;function Nc(a){var b=Jc(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new mc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new mc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,Lc(Jc(d),
c,a||null)].join(" "):null}return null}
;function Oc(){this.g=[];this.f=-1}
Oc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Oc.prototype.get=function(a){return!!this.g[a]};
function Pc(a){-1==a.f&&(a.f=$a(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Qc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Qc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Rc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Sc(a){B.setTimeout(function(){throw a;},0)}
var Tc;function Uc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=qc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.X;c.X=null;e()}};
return function(e){d.next={X:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Vc(){this.g=this.f=null}
var Xc=new Qc(function(){return new Wc},function(a){a.reset()});
Vc.prototype.add=function(a,b){var c=Xc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Vc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Wc(){this.next=this.scope=this.f=null}
Wc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Wc.prototype.reset=function(){this.next=this.scope=this.f=null};function Yc(a,b){Zc||$c();ad||(Zc(),ad=!0);bd.add(a,b)}
var Zc;function $c(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Zc=function(){a.then(cd)}}else Zc=function(){var b=cd;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!J("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Tc||(Tc=Uc()),Tc(b)):B.setImmediate(b)}}
var ad=!1,bd=new Vc;function cd(){for(var a;a=bd.remove();){try{a.f.call(a.scope)}catch(b){Sc(b)}Rc(Xc,a)}ad=!1}
;function dd(){this.g=-1}
;function ed(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
G(ed,dd);ed.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function fd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
ed.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)fd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){fd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){fd(this,e);f=0;break}}this.h=f;this.j+=b}};
ed.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;fd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var gd="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function hd(){}
hd.prototype.next=function(){throw gd;};
hd.prototype.B=function(){return this};
function id(a){if(a instanceof hd)return a;if("function"==typeof a.B)return a.B(!1);if(Ma(a)){var b=0,c=new hd;c.next=function(){for(;;){if(b>=a.length)throw gd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function jd(a,b){if(Ma(a))try{I(a,b,void 0)}catch(c){if(c!==gd)throw c;}else{a=id(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==gd)throw c;}}}
function kd(a){if(Ma(a))return eb(a);a=id(a);var b=[];jd(a,function(c){b.push(c)});
return b}
;function ld(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ld)for(c=md(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function md(a){nd(a);return a.f.concat()}
p=ld.prototype;p.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||od;nd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function od(a,b){return a===b}
p.isEmpty=function(){return 0==this.g};
p.clear=function(){this.h={};this.i=this.g=this.f.length=0};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&nd(this),!0):!1};
function nd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
p.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
p.forEach=function(a,b){for(var c=md(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
p.clone=function(){return new ld(this)};
p.B=function(a){nd(this);var b=0,c=this.i,d=this,e=new hd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw gd;var f=d.f[b++];return a?f:d.h[f]};
return e};var pd=!Jb||9<=Number(Wb),qd;
if(qd=Jb){var rd;if(Object.prototype.hasOwnProperty.call(Tb,"9"))rd=Tb["9"];else{for(var sd=0,td=pb(String(Sb)).split("."),ud=pb("9").split("."),vd=Math.max(td.length,ud.length),wd=0;0==sd&&wd<vd;wd++){var xd=td[wd]||"",yd=ud[wd]||"";do{var zd=/(\d*)(\D*)(.*)/.exec(xd)||["","","",""],Ad=/(\d*)(\D*)(.*)/.exec(yd)||["","","",""];if(0==zd[0].length&&0==Ad[0].length)break;sd=Cb(0==zd[1].length?0:parseInt(zd[1],10),0==Ad[1].length?0:parseInt(Ad[1],10))||Cb(0==zd[2].length,0==Ad[2].length)||Cb(zd[2],Ad[2]);
xd=zd[3];yd=Ad[3]}while(0==sd)}rd=Tb["9"]=0<=sd}qd=!rd}var Bd=qd,Cd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ka,b),B.removeEventListener("test",Ka,b)}catch(c){}return a}();function Dd(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.g=!1}
Dd.prototype.stopPropagation=function(){this.g=!0};
Dd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Yd(a,b){Dd.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
G(Yd,Dd);var Zd={2:"touch",3:"pen",4:"mouse"};
Yd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(Lb){a:{try{Hb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Zd[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&this.preventDefault()};
Yd.prototype.stopPropagation=function(){Yd.A.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Yd.prototype.preventDefault=function(){Yd.A.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Bd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var $d="closure_listenable_"+(1E6*Math.random()|0),ae=0;function be(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.L=e;this.key=++ae;this.G=this.J=!1}
function ce(a){a.G=!0;a.listener=null;a.f=null;a.src=null;a.L=null}
;function de(a){this.src=a;this.listeners={};this.f=0}
de.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=ee(a,b,d,e);-1<g?(b=a[g],c||(b.J=!1)):(b=new be(b,this.src,f,!!d,e),b.J=c,a.push(b));return b};
de.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ee(e,b,c,d);return-1<b?(ce(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function fe(a,b){var c=b.type;c in a.listeners&&cb(a.listeners[c],b)&&(ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.G&&f.listener==b&&f.capture==!!c&&f.L==d)return e}return-1}
;var ge="closure_lm_"+(1E6*Math.random()|0),he={},ie=0;function je(a,b,c,d,e){if(d&&d.once)ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)je(a,b[f],c,d,e);else c=le(c),a&&a[$d]?a.f.add(String(b),c,!1,D(d)?!!d.capture:!!d,e):me(a,b,c,!1,d,e)}
function me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=ne(a);h||(a[ge]=h=new de(a));c=h.add(b,c,d,g,f);if(!c.f){d=oe();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Cd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ie++}}
function oe(){var a=qe,b=pd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ke(a,b[f],c,d,e);else c=le(c),a&&a[$d]?a.f.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):me(a,b,c,!0,d,e)}
function re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=le(c),a&&a[$d])?a.f.remove(String(b),c,d,e):a&&(a=ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ee(b,c,d,e)),(c=-1<a?b[a]:null)&&se(c))}
function se(a){if("number"!==typeof a&&a&&!a.G){var b=a.src;if(b&&b[$d])fe(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ie--;(c=ne(b))?(fe(c,a),0==c.f&&(c.src=null,b[ge]=null)):ce(a)}}}
function pe(a){return a in he?he[a]:he[a]="on"+a}
function te(a,b,c,d){var e=!0;if(a=ne(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.G&&(f=ue(f,d),e=e&&!1!==f)}return e}
function ue(a,b){var c=a.listener,d=a.L||a.src;a.J&&se(a);return c.call(d,b)}
function qe(a,b){if(a.G)return!0;if(!pd){var c=b||C("window.event"),d=new Yd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.g&&0<=g;g--){d.f=c[g];var h=te(c[g],f,!0,d);e=e&&h}for(g=0;!d.g&&g<c.length;g++)d.f=c[g],h=te(c[g],f,!1,d),e=e&&h}return e}return ue(a,new Yd(b,this))}
function ne(a){a=a[ge];return a instanceof de?a:null}
var ve="__closure_events_fn_"+(1E9*Math.random()>>>0);function le(a){if("function"===typeof a)return a;a[ve]||(a[ve]=function(b){return a.handleEvent(b)});
return a[ve]}
;function we(){Ec.call(this);this.f=new de(this);this.j=this;this.g=null}
G(we,Ec);we.prototype[$d]=!0;we.prototype.addEventListener=function(a,b,c,d){je(this,a,b,c,d)};
we.prototype.removeEventListener=function(a,b,c,d){re(this,a,b,c,d)};
we.prototype.dispatchEvent=function(a){var b=this.g;if(b){var c=[];for(var d=1;b;b=b.g)c.push(b),++d}b=this.j;d=a.type||a;if("string"===typeof a)a=new Dd(a,b);else if(a instanceof Dd)a.target=a.target||b;else{var e=a;a=new Dd(d,b);nb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var g=a.f=c[f];e=xe(g,d,!0,a)&&e}a.g||(g=a.f=b,e=xe(g,d,!0,a)&&e,a.g||(e=xe(g,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)g=a.f=c[f],e=xe(g,d,!1,a)&&e;return e};
we.prototype.I=function(){we.A.I.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ce(d[e]);delete a.listeners[c];a.f--}}this.g=null};
function xe(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.G&&g.capture==c){var h=g.listener,k=g.L||g.src;g.J&&fe(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var ye=B.JSON.stringify;function L(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ka)try{var b=this;a.call(void 0,function(c){ze(b,2,c)},function(c){ze(b,3,c)})}catch(c){ze(this,3,c)}}
function Ae(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Ae.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Be=new Qc(function(){return new Ae},function(a){a.reset()});
function Ce(a,b,c){var d=Be.get();d.g=a;d.onRejected=b;d.context=c;return d}
function De(a){if(a instanceof L)return a;var b=new L(Ka);ze(b,2,a);return b}
function Ee(a){return new L(function(b,c){c(a)})}
function Fe(a,b,c){Ge(a,b,c,null)||Yc(Ta(b,a))}
function He(a){return new L(function(b,c){var d=a.length,e=[];if(d)for(var f=function(l,m){d--;e[l]=m;0==d&&b(e)},g=function(l){c(l)},h=0,k;h<a.length;h++)k=a[h],Fe(k,Ta(f,h),g);
else b(e)})}
L.prototype.then=function(a,b,c){return Ie(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
L.prototype.$goog_Thenable=!0;function Je(a,b){return Ie(a,null,b,void 0)}
L.prototype.cancel=function(a){if(0==this.f){var b=new Ke(a);Yc(function(){Le(this,b)},this)}};
function Le(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Le(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Me(c),Ne(c,e,3,b)))}a.h=null}else ze(a,3,b)}
function Oe(a,b){a.g||2!=a.f&&3!=a.f||Pe(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Ie(a,b,c,d){var e=Ce(null,null,null);e.f=new L(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ke?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Oe(a,e);return e.f}
L.prototype.v=function(a){this.f=0;ze(this,2,a)};
L.prototype.H=function(a){this.f=0;ze(this,3,a)};
function ze(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,Ge(c,a.v,a.H,a)||(a.m=c,a.f=b,a.h=null,Pe(a),3!=b||c instanceof Ke||Qe(a,c)))}
function Ge(a,b,c,d){if(a instanceof L)return Oe(a,Ce(b||Ka,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(D(a))try{var f=a.then;if("function"===typeof f)return Re(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Re(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Pe(a){a.l||(a.l=!0,Yc(a.s,a))}
function Me(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
L.prototype.s=function(){for(var a;a=Me(this);)Ne(this,a,this.f,this.m);this.l=!1};
function Ne(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Se(b,c,d);else try{b.h?b.g.call(b.context):Se(b,c,d)}catch(e){Te.call(null,e)}Rc(Be,b)}
function Se(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Qe(a,b){a.j=!0;Yc(function(){a.j&&Te.call(null,b)})}
var Te=Sc;function Ke(a){Ya.call(this,a)}
G(Ke,Ya);Ke.prototype.name="cancel";function M(a){Ec.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.s=!!a}
G(M,Ec);p=M.prototype;p.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Ue(a,b,c){var d=Ve;if(a=d.g[a]){var e=d.f;(a=ab(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.P(a)}}
p.P=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.l?(this.j.push(a),this.f[a+1]=Ka):(c&&cb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
p.N=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];We(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.P(c)}}return 0!=e}return!1};
function We(a,b,c){Yc(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.g[a];b&&(I(b,this.P,this),delete this.g[a])}else this.f.length=0,this.g={}};
p.I=function(){M.A.I.call(this);this.clear();this.j.length=0};function Xe(a){this.f=a}
Xe.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,ye(b))};
Xe.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Xe.prototype.remove=function(a){this.f.remove(a)};function Ye(a){this.f=a}
G(Ye,Xe);function Ze(a){this.data=a}
function $e(a){return void 0===a||a instanceof Ze?a:new Ze(a)}
Ye.prototype.set=function(a,b){Ye.A.set.call(this,a,$e(b))};
Ye.prototype.g=function(a){a=Ye.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ye.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function af(a){this.f=a}
G(af,Ye);af.prototype.set=function(a,b,c){if(b=$e(b)){if(c){if(c<Date.now()){af.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}af.A.set.call(this,a,b)};
af.prototype.g=function(a){var b=af.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())af.prototype.remove.call(this,a);else return b}};function bf(){}
;function cf(){}
G(cf,bf);cf.prototype.clear=function(){var a=kd(this.B(!0)),b=this;I(a,function(c){b.remove(c)})};function df(a){this.f=a}
G(df,cf);p=df.prototype;p.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
p.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeItem(a)};
p.B=function(a){var b=0,c=this.f,d=new hd;d.next=function(){if(b>=c.length)throw gd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){this.f.clear()};
p.key=function(a){return this.f.key(a)};function ef(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
G(ef,df);function ff(a,b){this.g=a;this.f=null;if(Jb&&!(9<=Number(Wb))){gf||(gf=new ld);this.f=gf.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),gf.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
G(ff,cf);var hf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},gf=null;function jf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return hf[b]})}
p=ff.prototype;p.isAvailable=function(){return!!this.f};
p.set=function(a,b){this.f.setAttribute(jf(a),b);kf(this)};
p.get=function(a){a=this.f.getAttribute(jf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeAttribute(jf(a));kf(this)};
p.B=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new hd;d.next=function(){if(b>=c.length)throw gd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);kf(this)};
function kf(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function lf(a,b){this.g=a;this.f=b+"::"}
G(lf,cf);lf.prototype.set=function(a,b){this.g.set(this.f+a,b)};
lf.prototype.get=function(a){return this.g.get(this.f+a)};
lf.prototype.remove=function(a){this.g.remove(this.f+a)};
lf.prototype.B=function(a){var b=this.g.B(!0),c=this,d=new hd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var mf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",mf);function nf(a){var b=arguments;1<b.length?mf[b[0]]=b[1]:1===b.length&&Object.assign(mf,b[0])}
function N(a,b){return a in mf?mf[a]:b}
;var of=[];function pf(a){of.forEach(function(b){return b(a)})}
function qf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){rf(b),pf(b)}}:a}
function rf(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),nf("ERRORS",b))}
function sf(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),nf("ERRORS",b))}
;var tf=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++tf});var uf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function vf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in uf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
vf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
vf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
vf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var jb=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",jb);var wf=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",wf);
function xf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ib(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function yf(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in jb){var c=jb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?zf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete jb[b]}}))}
var zf=gb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Af(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=xf(a,b,c,d);if(!e){e=++wf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new vf(h);if(!rc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new vf(h);
h.currentTarget=a;return c.call(a,h)};
g=qf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),zf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);jb[e]=[a,b,c,g,d]}}}
;function Bf(a,b){"function"===typeof a&&(a=qf(a));return window.setTimeout(a,b)}
function Cf(a){"function"===typeof a&&(a=qf(a));return window.setInterval(a,250)}
;function Df(a){var b=[];hb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ef(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?fb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};rf(h)}}}return b}
function Ff(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ef(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=xc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Gf={};function Hf(a){return Gf[a]||(Gf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var If={},Jf=[],Ve=new M,Kf={};function Lf(){for(var a=u(Jf),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Mf(a,b){b||(b=document);var c=eb(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):pc(d,b);d=eb(d);return db(c,d)}
function O(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Hf(b)]:a.getAttribute("data-"+b):null;return c}
function Nf(a,b){Ve.N.apply(Ve,arguments)}
;function Of(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function Q(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Pf(a,b,c){Qf||(Qf={},Af(window,"message",Sa(a.i,a)));Qf[c]=b}
Of.prototype.i=function(a){if(a.origin==Q(this,"host")||a.origin==Q(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Qf[b.id])a.s=!0,a.s&&(I(a.m,a.W,a),a.m.length=0),a.ha(b)}};
var Qf=null;function R(a){a=Rf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Sf(a,b){var c=Rf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Rf(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
;function Tf(){}
function Uf(a,b){return Vf(a,0,b)}
;function Wf(){}
x(Wf,Tf);function Vf(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Bf(a,c||0)}
Wf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Wf.f=void 0;Wf.g=function(){Wf.f||(Wf.f=new Wf)};
Wf.g();var Xf=B.ytPubsubPubsubInstance||new M,Yf=B.ytPubsubPubsubSubscribedKeys||{},Zf=B.ytPubsubPubsubTopicToKeys||{},$f=B.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.P;M.prototype.publish=M.prototype.N;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",Xf);E("ytPubsubPubsubTopicToKeys",Zf);E("ytPubsubPubsubIsSynchronous",$f);E("ytPubsubPubsubSubscribedKeys",Yf);var ag=window,S=ag.ytcsi&&ag.ytcsi.now?ag.ytcsi.now:ag.performance&&ag.performance.timing&&ag.performance.now&&ag.performance.timing.navigationStart?function(){return ag.performance.timing.navigationStart+ag.performance.now()}:function(){return(new Date).getTime()};var bg=Sf("initial_gel_batch_timeout",1E3),cg=Math.pow(2,16)-1,dg=null,eg=0,fg=void 0,gg=0,hg=0,ig=0,jg=!0,Qg=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Qg);var Rg=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Rg);function Sg(){window.clearTimeout(gg);window.clearTimeout(hg);hg=0;fg&&fg.isReady()?(Tg(),Qg.clear()):Ug()}
function Ug(){R("web_gel_timeout_cap")&&!hg&&(hg=Bf(Sg,6E4));window.clearTimeout(gg);var a=N("LOGGING_BATCH_TIMEOUT",Sf("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&jg&&(a=bg);gg=Bf(Sg,a)}
function Tg(){for(var a=fg,b=Math.round(S()),c=u(Qg),d=c.next();!d.done;d=c.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=lb({context:Vg(a.f||Wg())});e.events=f;(f=Rg[d])&&Xg(e,d,f);delete Rg[d];Yg(e,b);Zg(a,"log_event",e,{retry:!0,onSuccess:function(){eg=Math.round(S()-b)}});
jg=!1}}
function Yg(a,b){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=N("EVENT_ID",void 0);if(c){var d=N("BATCH_CLIENT_COUNTER",void 0)||0;!d&&R("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*cg/2));d++;d>cg&&(d=1);nf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;dg&&eg&&R("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:dg,roundtripMs:String(eg)});dg=c;eg=0}}
function Xg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var $g=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",$g);function ah(a){var b=bh;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ch(b),dh(b));b.ca_type="image";a&&(b.bid=a);return b}
function ch(a){var b={};b.dt=Ic;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?K:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(b.u_h=K.screen.height,b.u_w=K.screen.width,b.u_ah=K.screen.availHeight,b.u_aw=K.screen.availWidth,b.u_cd=K.screen.colorDepth);
K.navigator&&K.navigator.plugins&&(b.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(b.u_nmime=K.navigator.mimeTypes.length);return b}
function dh(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new oc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new oc(-12245933,-12245933)}k=m;m={};l=new Oc;B.SVGElement&&
B.document.createElementNS&&l.set(0);c=Dc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);B.crypto&&B.crypto.subtle&&l.set(3);B.TextDecoder&&B.TextEncoder&&l.set(4);l=Pc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!K.WebGLRenderingContext,m}
var bh=new function(){var a=window.document;this.f=window;this.g=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Df(ah(a))});var eh="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function fh(){if(!eh)return null;var a=eh();return"open"in a?a:null}
;var gh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},hh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
ih=!1;
function jh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(sc)[1]||null,e=uc(a);d&&e?(d=c,c=a.match(sc),d=d.match(sc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?uc(c)==e&&(Number(c.match(sc)[4]||null)||null)==(Number(a.match(sc)[4]||null)||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in gh)e=N(gh[f]),!e||!c&&uc(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!uc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!uc(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!uc(a))b["X-YouTube-Ad-Signals"]=Df(ah(void 0));return b}
function kh(a){var b=window.location.search,c=uc(a),d=tc(a.match(sc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ef(b),f={};I(hh,function(g){e[g]&&(f[g]=e[g])});
return Ff(a,f||{},!1)}
function lh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=mh(a,b);var d=nh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.T&&b.T.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ea&&0<b.timeout&&(f=Bf(function(){e||(e=!0,window.clearTimeout(f),b.ea.call(b.context||B))},b.timeout))}else oh(a,b)}
function oh(a,b){var c=b.format||"JSON";a=mh(a,b);var d=nh(a,b),e=!1,f=ph(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=qh(a,c,k,b.Ra);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.T&&b.T.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.M&&0<b.timeout){var g=b.M;var h=Bf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function mh(a,b){b.Va&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME",void 0),d=b.Aa;d&&(d[c]&&delete d[c],a=Ff(a,d||{},!0));return a}
function nh(a,b){var c=N("XSRF_FIELD_NAME",void 0),d=N("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=N("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ua||uc(a)&&!b.withCredentials&&uc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ef(e),nb(e,f),e=b.ga&&"JSON"==b.ga?JSON.stringify(e):xc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!ih&&c&&"POST"!=b.method&&
(ih=!0,rf(Error("AJAX request with postData should use POST")));return e}
function qh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,sf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?rh(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=sh(g)})}d&&th(e);
return e}
function th(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===ob){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Xa,createScript:Xa,createScriptURL:Xa})}catch(g){B.console&&B.console.error(g.message)}ob=e}else ob=e}(e=ob)&&e.createHTML(d);a[c]=new Gb}else th(a[b])}}
function rh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function sh(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ph(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&qf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=fh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=kh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=jh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function uh(){for(var a={},b=u(Object.entries(Ef(N("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function vh(){return"INNERTUBE_API_KEY"in mf&&"INNERTUBE_API_VERSION"in mf}
function Wg(){return{innertubeApiKey:N("INNERTUBE_API_KEY",void 0),innertubeApiVersion:N("INNERTUBE_API_VERSION",void 0),pa:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),qa:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),sa:N("INNERTUBE_CONTEXT_HL",void 0),ra:N("INNERTUBE_CONTEXT_GL",void 0),ta:N("INNERTUBE_HOST_OVERRIDE",void 0)||"",va:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ua:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Vg(a){var b={client:{hl:a.sa,gl:a.ra,clientName:a.qa,clientVersion:a.innertubeContextClientVersion,configInfo:a.pa}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=N("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=N("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&R("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);N("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,uh());return b}
function wh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Oa||N("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Na:b=Nc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function xh(a){a=Object.assign({},a);delete a.Authorization;var b=Nc();if(b){var c=new ed;c.update(N("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ma(b);void 0===c&&(c=0);if(!ac){ac={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));$b[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===ac[k]&&(ac[k]=h)}}}c=$b[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function yh(a){a=xh(a);var b=new ed;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function zh(){var a=new ef;(a=a.isAvailable()?new lf(a,"yt.innertube"):null)||(a=new ff("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new af(a):null;this.g=document.domain||window.location.hostname}
zh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ye(b))}catch(f){return}else e=escape(b);b=this.g;nc.set(""+a,e,{ba:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
zh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=nc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
zh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;nc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ah;function Bh(){Ah||(Ah=new zh);return Ah}
function Ch(a,b,c,d){if(d)return null;d=Bh().get("nextId",!0)||1;var e=Bh().get("requests",!0)||{};e[d]={method:a,request:b,authState:xh(c),requestTime:Math.round(S())};Bh().set("nextId",d+1,86400,!0);Bh().set("requests",e,86400,!0);return d}
function Dh(a){var b=Bh().get("requests",!0)||{};delete b[a];Bh().set("requests",b,86400,!0)}
function Eh(a){var b=Bh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=xh(wh(!1));kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),Zg(a,d.method,e,{}));delete b[c]}}Bh().set("requests",b,86400,!0)}}
;function Fh(){}
;var Gh=new we;var Hh=Yb||Zb;function Ih(){var a=/WebKit\/([0-9]+)/.exec(Db);return!!(a&&600<=parseInt(a[1],10))}
function Jh(){var a=/WebKit\/([0-9]+)/.exec(Db);return!!(a&&602<=parseInt(a[1],10))}
;function Kh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
x(Kh,Error);var Lh={},Mh=(Lh.ABORT="Transaction was aborted",Lh.AUTH_INVALID="No user identifier specified.",Lh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Lh.MISSING_OBJECT_STORE="Object store not created.",Lh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Lh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Lh);
function U(a,b,c){b=void 0===b?{}:b;c=void 0===c?Mh[a]:c;Kh.call(this,c,Object.assign(Object.assign({},b),{name:"YtIdbKnownError",type:a}));this.type=a;this.message=c;Object.setPrototypeOf(this,U.prototype)}
x(U,Kh);function Nh(a){U.call(this,"MISSING_OBJECT_STORE",{Wa:a},Mh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Nh.prototype)}
x(Nh,U);function Oh(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
;function Ph(a){if(!a)throw Error();throw a;}
function Qh(a){return a}
function V(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={F:0};f.F<a.length;f={F:f.F},++f.F)Rh(V.resolve(a[f.F]).then(function(g){return function(h){d[g.F]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Qh,e=null!==b&&void 0!==b?b:Ph;return new V(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Sh(c,c,d,f,g)}),c.onRejected.push(function(){Th(c,c,e,f,g)})):"FULFILLED"===c.state.status?Sh(c,c,d,f,g):"REJECTED"===c.state.status&&Th(c,c,e,f,g)})};
function Rh(a,b){a.then(void 0,b)}
function Sh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Uh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Th(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Uh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Uh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Uh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Vh(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Wh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Xh(a){return new L(function(b,c){Wh(a,b,c)})}
function W(a){return new V(function(b,c){Wh(a,b,c)})}
;function Yh(a,b){this.f=a;this.options=b}
p=Yh.prototype;p.add=function(a,b,c){return Zh(this,[a],"readwrite",function(d){return $h(d,a).add(b,c)})};
p.clear=function(a){return Zh(this,[a],"readwrite",function(b){return $h(b,a).clear()})};
p.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Zh(this,[a],"readonly",function(c){return $h(c,a).count(b)})};
function ai(a,b,c){a=a.f.createObjectStore(b,c);return new bi(a)}
p["delete"]=function(a,b){return Zh(this,[a],"readwrite",function(c){return $h(c,a)["delete"](b)})};
p.get=function(a,b){return Zh(this,[a],"readwrite",function(c){return $h(c,a).get(b)})};
function ci(a,b){return Zh(a,["databases"],"readwrite",function(c){c=$h(c,"databases");return W(c.f.put(b,void 0))})}
function Zh(a,b,c,d){a=a.f.transaction(b,void 0===c?"readonly":c);a=new di(a);return ei(a,d)}
function bi(a){this.f=a}
p=bi.prototype;p.add=function(a,b){return W(this.f.add(a,b))};
p.clear=function(){return W(this.f.clear()).then(function(){})};
p.count=function(a){return W(this.f.count(a))};
p["delete"]=function(a){return W(this.f["delete"](a))};
p.get=function(a){return W(this.f.get(a))};
p.index=function(a){return new fi(this.f.index(a))};
p.getName=function(){return this.f.name};
function di(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new L(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?sf(new U("QUOTA_EXCEEDED")):"UnknownError"===e.name&&sf(new U("QUOTA_MAYBE_EXCEEDED")),d(e)):d(new U("ABORT"))})})}
function ei(a,b){var c=new L(function(d,e){Rh(b(a).then(function(f){try{a.commit(),d(f)}catch(g){e(g)}}),e)});
return He([c,a.done]).then(function(d){return u(d).next().value})}
di.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new U("ABORT");};
di.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function $h(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new bi(c),a.g.set(c,d));return d}
function fi(a){this.f=a}
fi.prototype.count=function(a){return W(this.f.count(a))};
fi.prototype.get=function(a){return W(this.f.get(a))};
function gi(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return hi(a).then(function(d){return Vh(d,c)})}
function ii(a,b){this.request=a;this.f=b}
function hi(a){return W(a).then(function(b){return null===b?null:new ii(a,b)})}
ii.prototype["delete"]=function(){return W(this.f["delete"]()).then(function(){})};
ii.prototype.update=function(a){return W(this.f.update(a))};function ji(a,b,c){function d(){n||(n=new Yh(f.result,{closed:m}));return n}
var e=di,f=self.indexedDB.open(a,b),g=c.blocked,h=c.blocking,k=c.za,l=c.upgrade,m=c.closed,n;l&&f.addEventListener("upgradeneeded",function(r){if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var q=d(),v=new e(f.transaction);l(q,r.oldVersion,r.newVersion,v)});
g&&f.addEventListener("blocked",function(){g()});
return Xh(f).then(function(r){h&&r.addEventListener("versionchange",function(){h(d())});
k&&r.addEventListener("close",function(){k()});
return d()})}
function ki(a,b,c){c=void 0===c?{}:c;return ji(a,b,c)}
function li(a,b){b=void 0===b?{}:b;var c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",function(){d()});
return Xh(c).then(function(){})}
;var mi,ni,oi=["getAll","getAllKeys","getKey","openKeyCursor"],pi=["getAll","getAllKeys","getKey","openKeyCursor"];function qi(){return H(this,function b(){var c,d;return z(b,function(e){switch(e.f){case 1:if(Hh&&Ih()&&!Jh()&&!R("ytidb_allow_on_ios_safari_v8_and_v9")||Kb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}ta(e);return y(e,Je(ki("yt-idb-test-do-not-use"),function(){}),5);
case 5:if(d=e.g,!d)return e["return"](!1);case 3:xa(e);if(d)try{d.close()}catch(f){}ya(e);break;case 2:return ua(e),e["return"](!1);case 4:return e["return"](!0)}})})}
function ri(){return void 0!==mi?De(mi):new L(function(a){qi().then(function(b){mi=b;a(b)})})}
function si(){return void 0!==ni?De(ni):ri().then(function(a){if(!a)return!1;var b=u(oi);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(pi);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return ni=a})}
;function ti(a,b){for(var c=u(Object.keys(b.xa)),d=c.next();!d.done;d=c.next())if(d=d.value,!a.f.objectStoreNames.contains(d))return d}
function ui(a,b){this.name=a;this.options=b;this.g=!1}
p=ui.prototype;p.U=function(a,b,c){c=void 0===c?{}:c;return ki(a,b,c)};
p["delete"]=function(a){a=void 0===a?{}:a;return li(this.name,a)};
p.Y=function(){};
p.Z=function(){};
p.open=function(){var a=this;if(!this.f){var b=function(){a.f===e&&(a.f=void 0,a.Z(b))},c={blocking:function(f){f.close()},
closed:b,za:b,upgrade:this.options.upgrade},d=function(){return Je(a.U(a.name,a.options.version,c).then(function(f){if(Xb){var g=ti(f,a.options);if(void 0!==g){if(Xb&&!a.g)return a.g=!0,a["delete"]().then(function(){return d()});
throw new Nh(g);}}return f}),function(f){if(Oh(f))return a.U(a.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0}));
b();throw f;})};
var e=d();this.Y(b);this.f=e}return this.f};function vi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
;var wi;function xi(){function a(b){b.close();wi=void 0}
wi||(wi=Je(ki("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&ai(b,"databases",{keyPath:"actualName"})}}),function(b){return Oh(b)?ki("YtIdbMeta",void 0,{blocking:a}):Ee(b)}));
return wi}
function yi(a){return xi().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return ci(b,a)})})}
function zi(a){return xi().then(function(b){return b["delete"]("databases",a)})}
;function Ai(a){return{actualName:a,publicName:a,userIdentifier:void 0,signedIn:!1}}
function Bi(a){return Ai(a);throw new U("AUTH_INVALID");}
function Ci(a,b,c){vi(a);var d;try{b?d=Ai(a):d=Bi(a)}catch(e){return Ee(e)}return Je(yi(d).then(function(){return c(d)}),function(e){return Je(zi(d.actualName),function(){}).then(function(){return Ee(e)})})}
function Di(){return ri().then(function(a){if(!a)throw new U("IDB_NOT_SUPPORTED");})}
function Ei(a,b,c){c=void 0===c?{}:c;return Di().then(function(){return Ci(a,!1,function(d){return ki(d.actualName,b,c)})})}
function Fi(a,b,c){c=void 0===c?{}:c;return Di().then(function(){return Ci(a,!0,function(d){return ki(d.actualName,b,c)})})}
function Gi(a,b){b=void 0===b?{}:b;vi(a);var c;return Di().then(function(){c=Bi(a);return li(c.actualName,b)}).then(function(){return zi(c.actualName)})}
function Hi(a,b){b=void 0===b?{}:b;vi(a);return Di().then(function(){return li(a,b)}).then(function(){return zi(a)})}
;function Ii(a,b){ui.call(this,a,b);this.options=b;vi(a)}
x(Ii,ui);Ii.prototype.U=function(a,b,c){c=void 0===c?{}:c;return(this.options.ya?Fi:Ei)(a,b,c)};
Ii.prototype.Y=function(a){Gh.f.add("authchanged",a,!0,void 0,void 0)};
Ii.prototype.Z=function(a){Gh.f.remove("authchanged",a,void 0,void 0)};
Ii.prototype["delete"]=function(a){a=void 0===a?{}:a;return(this.options.ya?Hi:Gi)(this.name,a)};function Ji(){V.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
x(Ji,V);Ji.reject=V.reject;Ji.resolve=V.resolve;Ji.all=V.all;var Ki={},Li=function(a,b){var c;return function(){c||(c=new Ii(a,b));return c}}("LogsDataBase",{xa:(Ki.LogsRequestsStore=!0,Ki.sapisid=!0,Ki),
upgrade:function(a,b){1>b&&(ai(a,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),ai(a,"sapisid"))},
version:1});function Mi(a){return H(this,function c(){var d,e,f;return z(c,function(g){if(1==g.f)return y(g,Ni(),2);if(3!=g.f)return d=g.g,y(g,Li().open(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function Oi(){return H(this,function b(){var c,d,e,f,g,h;return z(b,function(k){switch(k.f){case 1:return y(k,Ni(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,S()],f=IDBKeyRange.bound(d,e),y(k,Li().open(),3);case 3:return g=k.g,h=void 0,y(k,Zh(g,["LogsRequestsStore"],"readwrite",function(l){return gi($h(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.f.value&&(h=m.f.value,h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Pi(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Li().open(),2);d=e.g;return e["return"](Zh(d,["LogsRequestsStore"],"readwrite",function(f){var g=$h(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.f.put(h,void 0)).then(function(){return h})})}))})})}
function Qi(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Li().open(),2);d=e.g;return e["return"](Zh(d,["LogsRequestsStore"],"readwrite",function(f){var g=$h(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,W(g.f.put(h,void 0)).then(function(){return h})):Ji.resolve(void 0)})}))})})}
function Ri(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Li().open(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Ni(){return H(this,function b(){var c;return z(b,function(d){if(1==d.f){Fh.f||(Fh.f=new Fh);var e={};var f=Nc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=N("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in mf||(e["X-Origin"]=window.location.origin),R("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in mf&&(e["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));e=De(e);return y(d,e,2)}c=d.g;return d["return"](yh(c))})})}
;var Si=Sf("network_polling_interval",3E4);function Ti(){this.i=0;this.f=Ui();Vi(this);Wi(this)}
function Xi(){Ti.f||(Ti.f=new Ti);return Ti.f}
function Yi(a){a.f!==Ui()&&rf(Error("NetworkStatusManager isOnline does not match window status"));return a.f}
function Zi(a){var b=$i,c=aj;(new L(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
bj(a)}
function Ui(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Wi(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Vi(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function bj(a){a.i||(cj(a),Ui()&&a.g&&a.g())}
function cj(a){a.i=Uf(function(){Ui()?(!1===a.f&&rf(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&rf(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());cj(a)},Si)}
;var dj=Sf("networkless_throttle_timeout")||100,ej=Sf("networkless_retry_attempts")||1,fj=0;function gj(a,b){b=void 0===b?{}:b;hj().then(function(c){var d=Yi(Xi());if(!c||R("networkless_bypass_write")||d&&R("vss_networkless_bypass_write"))oh(a,b);else{var e={url:a,options:b,timestamp:S(),status:"NEW",sendCount:0};Mi(e).then(function(f){e.id=f;f=Xi();Yi(f)&&!R("networkless_always_offline")?ij(e):Zi(f)})["catch"](function(f){ij(e);
rf(f)})}})}
function $i(){var a=this;fj||(fj=Vf(function(){return H(a,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Oi(),2);if(3!=e.f)return d=e.g,d?y(e,ij(d),3):(aj(),e["return"]());fj=0;$i();e.f=0})})},1,dj))}
function aj(){var a=fj;if(!isNaN(a)){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}fj=0}
function ij(a){return H(this,function c(){var d;return z(c,function(e){switch(e.f){case 1:if(!a.id){e.C(2);break}return y(e,Pi(a.id),3);case 3:(d=e.g)?a=d:sf(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=S()-f)){e.C(4);break}sf(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.C(5);break}return y(e,Ri(a.id),5);case 5:return e["return"]();case 4:f=a=jj(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||
void 0===g?void 0:g.u)||void 0===h?0:h.requestTimeMs)f.options.u.requestTimeMs=Math.round(S());(a=f)&&oh(a.url,a.options);e.f=0}})})}
function jj(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return H(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<ej?y(k,Qi(a.id),6):y(k,Ri(a.id),2):k.C(2);2!=k.f&&Zi(Xi());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return H(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?y(k,Ri(a.id),2):k.C(2);d(e,f);k.f=0})})};
return a}
function hj(){return H(this,function b(){return z(b,function(c){return R("networkless_logging")?(2===Sf("networkless_ytidb_version")&&si().then(function(d){return d}),c["return"](ri())):c["return"](!1)})})}
;function kj(a){var b=this;this.f=null;a?this.f=a:vh()&&(this.f=Wg());Uf(function(){Eh(b)},5E3)}
kj.prototype.isReady=function(){!this.f&&vh()&&(this.f=Wg());return!!this.f};
function Zg(a,b,c,d){!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&sf(new Kh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Kh("innertube xhrclient not ready",b,c,d);rf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",u:c,ga:"JSON",M:function(){d.M()},
ea:d.M,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
da:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
Xa:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.ta)&&(g=e);var h=a.f.va||!1,k=wh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ua&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Ff(""+g+e,l||{},!0);hj().then(function(n){if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(R("networkless_gel")&&!n||!R("networkless_gel"))var r=Ch(b,
c,k,h);if(r){var q=f.onSuccess,v=f.da;f.onSuccess=function(w,F){Dh(r);q(w,F)};
c.da=function(w,F){Dh(r);v(w,F)}}}try{R("use_fetch_for_op_xhr")?lh(m,f):R("networkless_gel")&&d.retry?(f.method="POST",gj(m,f)):(f.method="POST",f.u||(f.u={}),oh(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(Dh(r),r=0),sf(Error("An extension is blocking network request."));
else throw w;}r&&Uf(function(){Eh(a)},5E3)})}
;var lj=[{ca:function(a){return"Cannot read property '"+a.key+"'"},
V:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ca:function(a){return"Cannot call '"+a.key+"'"},
V:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function mj(){this.f=[];this.g=[]}
var nj;var oj=new M;var pj=new Set,qj=0,rj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function sj(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Na(this);this.h=0;this.s=!1;this.m=[];this.i=null;this.v=c;this.H={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?vc(a.src):"https://www.youtube.com"),this.g=new Of(b),c||(b=tj(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Na(this.f)),If[this.f.id]=this,window.postMessage){this.i=new M;uj(this);b=Q(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Kf)vj(this,e)}}
p=Y.prototype;p.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
p.wa=function(){return this.f};
p.ha=function(a){this.O(a.event,a)};
p.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);wj(this,a);return this};
function vj(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.v==c[0]&&wj(a,d)}}
p.destroy=function(){this.f.id&&(If[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Qf&&(Qf[this.j]=null);this.g=null;a=this.f;for(var c in jb)jb[c][0]==a&&yf(c);this.l=this.f=null};
p.R=function(){return{}};
function xj(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.W(b):a.m.push(b)}
p.O=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.N(a,c);Nf(this.v+"."+a,c)}};
function tj(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Q(a.g,"title"));(d=Q(a.g,"width"))&&c.setAttribute("width",d);(d=Q(a.g,"height"))&&c.setAttribute("height",d);var h=
a.R();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&I(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(yc);b:{var n=0;for(var r=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+r),!q||61==q||38==q||35==q)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
r-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=Q(a.g,"host")+a.S()+"?"+xc(h);return c}
p.fa=function(){this.f&&this.f.contentWindow?this.W({event:"listening"}):window.clearInterval(this.h)};
function uj(a){Pf(a.g,a,a.j);a.h=Cf(Sa(a.fa,a));Af(a.f,"load",Sa(function(){window.clearInterval(this.h);this.h=Cf(Sa(this.fa,this))},a))}
function wj(a,b){a.H[b]||(a.H[b]=!0,xj(a,"addEventListener",[b]))}
p.W=function(a){a.id=this.j;a.channel="widget";var b=ye(a),c=this.g,d=vc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Ua){if(Ua.name&&"SyntaxError"==Ua.name){if(!(Ua.message&&0<Ua.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Ua;h=void 0===h?{}:h;h.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(R("console_log_js_exceptions")){var n=k,r=[];r.push("Name: "+n.name);r.push("Message: "+n.message);n.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(n.params));r.push("File name: "+n.fileName);r.push("Stacktrace: "+n.stack);window.console.log(r.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=qj)&&0!==k.sampleWeight){var q=void 0,v=k,w=l,F=bc(v),bb=F.message||"Unknown Error",na=F.name||"UnknownError",
La=F.lineNumber||"Not available",Dj=F.fileName||"Not available",Ej=F.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var va=0,ec=0;ec<v.args.length;ec++){var T=v.args[ec],Ha="params."+ec;va+=Ha.length;if(T)if(Array.isArray(T)){for(var Fj=w,Ed=va,rb=0;rb<T.length&&!(T[rb]&&(Ed+=sj(rb,T[rb],Ha,Fj),500<Ed));rb++);va=Ed}else if("object"===typeof T){var fc=void 0,Gj=w,Fd=va;for(fc in T)if(T[fc]&&(Fd+=sj(fc,T[fc],Ha,Gj),500<Fd))break;va=Fd}else w[Ha]=String(JSON.stringify(T)).substring(0,
500),va+=w[Ha].length;else w[Ha]=String(JSON.stringify(T)).substring(0,500),va+=w[Ha].length;if(500<=va)break}else if(v.hasOwnProperty("params")&&v.params){var gc=v.params;if("object"===typeof v.params){var kg=0;for(q in gc)if(gc[q]){var lg="params."+q,mg=String(JSON.stringify(gc[q])).substr(0,500);w[lg]=mg;kg+=lg.length+mg.length;if(500<kg)break}}else w.params=String(JSON.stringify(gc)).substr(0,500)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var Gd={message:bb,name:na,
lineNumber:La,fileName:Dj,stack:Ej,params:w},ng=Number(v.columnNumber);isNaN(ng)||(Gd.lineNumber=Gd.lineNumber+":"+ng);for(var ha,Ia=Gd,og=u(lj),Hd=og.next();!Hd.done;Hd=og.next()){var Id=Hd.value;if(Id.V[Ia.name])for(var pg=u(Id.V[Ia.name]),Jd=pg.next();!Jd.done;Jd=pg.next()){var qg=Jd.value,hc=Ia.message.match(qg.regexp);if(hc){Ia.params["error.original"]=hc[0];for(var Kd=qg.groups,rg={},Va=0;Va<Kd.length;Va++)rg[Kd[Va]]=hc[Va+1],Ia.params["error."+Kd[Va]]=hc[Va+1];Ia.message=Id.ca(rg);break}}}ha=
Ia;window.yterr&&"function"===typeof window.yterr&&window.yterr(ha);if(!(pj.has(ha.message)||0<=ha.stack.indexOf("/YouTubeCenter.js")||0<=ha.stack.indexOf("/mytube.js"))){oj.N("handleError",ha);if(R("kevlar_gel_error_routing")){var ic=void 0,sg=m,P=ha;a:{for(var tg=u(rj),Ld=tg.next();!Ld.done;Ld=tg.next()){var ug=Db;if(ug&&0<=ug.toLowerCase().indexOf(Ld.value.toLowerCase())){var vg=!0;break a}}vg=!1}if(!vg){var sb={stackTrace:P.stack};P.fileName&&(sb.filename=P.fileName);var ia=P.lineNumber&&P.lineNumber.split?
P.lineNumber.split(":"):[];0!==ia.length&&(1!==ia.length||isNaN(Number(ia[0]))?2!==ia.length||isNaN(Number(ia[0]))||isNaN(Number(ia[1]))||(sb.lineNumber=Number(ia[0]),sb.columnNumber=Number(ia[1])):sb.lineNumber=Number(ia[0]));var Hj=P.message,Ij=P.name;nj||(nj=new mj);var wg=nj;a:{for(var xg=u(wg.g),Md=xg.next();!Md.done;Md=xg.next()){var yg=Md.value;if(P.message&&P.message.match(yg.f)){var Nd=yg.weight;break a}}for(var zg=u(wg.f),Od=zg.next();!Od.done;Od=zg.next()){var Ag=Od.value;if(Ag.f(P)){Nd=
Ag.weight;break a}}Nd=1}var Pd={level:"ERROR_LEVEL_UNKNOWN",message:Hj,errorClassName:Ij,sampleWeight:Nd};"ERROR"===sg?Pd.level="ERROR_LEVEL_ERROR":"WARNING"===sg&&(Pd.level="ERROR_LEVEL_WARNNING");var Jj={isObfuscated:!0,browserStackInfo:sb},Wa={pageUrl:window.location.href};N("FEXP_EXPERIMENTS")&&(Wa.experimentIds=N("FEXP_EXPERIMENTS"));Wa.kvPairs=[];var Qd=P.params;if(Qd)for(var Bg=u(Object.keys(Qd)),Rd=Bg.next();!Rd.done;Rd=Bg.next()){var Cg=Rd.value;Wa.kvPairs.push({key:"client."+Cg,value:String(Qd[Cg])})}var Dg=
N("SERVER_NAME",void 0),Eg=N("SERVER_VERSION",void 0);Dg&&Eg&&(Wa.kvPairs.push({key:"server.name",value:Dg}),Wa.kvPairs.push({key:"server.version",value:Eg}));var Kj={errorMetadata:Wa,stackTrace:Jj,logMessage:Pd};ic=void 0===ic?{}:ic;var Fg=kj;N("ytLoggingEventsDefaultDisabled",!1)&&kj==kj&&(Fg=null);var Lj=Fg,X=ic;X=void 0===X?{}:X;var tb={};tb.eventTimeMs=Math.round(X.timestamp||S());tb.clientError=Kj;var Mj=String;if(X.timestamp)var Gg=-1;else{var Hg=C("_lact",window);Gg=null==Hg?-1:Math.max(Date.now()-
Hg,0)}tb.context={lastActivityMs:Mj(Gg)};if(R("log_sequence_info_on_gel_web")&&X.ia){var Nj=tb.context,ub=X.ia;$g[ub]=ub in $g?$g[ub]+1:0;Nj.sequence={index:$g[ub],groupKey:ub};X.Ta&&delete $g[X.ia]}var Oj=tb,jc=X.Sa,Ig=Lj,Sd="";if(jc){var kc=jc,Td={};kc.videoId?Td.videoId=kc.videoId:kc.playlistId&&(Td.playlistId=kc.playlistId);Rg[jc.token]=Td;Sd=jc.token}var Ud=Qg.get(Sd)||[];Qg.set(Sd,Ud);Ud.push(Oj);Ig&&(fg=new Ig);var Pj=Sf("web_logging_max_batch")||100,Jg=S();Ud.length>=Pj?Sg():10<=Jg-ig&&(Ug(),
ig=Jg);Sg()}}var Vd,Ja=ha,vb=Ja.params||{},wa={Aa:{a:"logerror",t:"jserror",type:Ja.name,msg:Ja.message.substr(0,250),line:Ja.lineNumber,level:m,"client.name":vb.name},u:{url:N("PAGE_NAME",window.location.href),file:Ja.fileName},method:"POST"};vb.version&&(wa["client.version"]=vb.version);if(wa.u){Ja.stack&&(wa.u.stack=Ja.stack);for(var Kg=u(Object.keys(vb)),Wd=Kg.next();!Wd.done;Wd=Kg.next()){var Lg=Wd.value;wa.u["client."+Lg]=vb[Lg]}if(Vd=N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var Mg=
u(Object.keys(Vd)),Xd=Mg.next();!Xd.done;Xd=Mg.next()){var Ng=Xd.value;wa.u[Ng]=Vd[Ng]}var Og=N("SERVER_NAME",void 0),Pg=N("SERVER_VERSION",void 0);Og&&Pg&&(wa.u["server.name"]=Og,wa.u["server.version"]=Pg)}oh(N("ECATCHER_REPORT_HOST","")+"/error_204",wa);pj.add(ha.message);qj++}}}}}else throw Ua;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function yj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function zj(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.D={};this.playerInfo={}}
x(Z,Y);p=Z.prototype;p.S=function(){return"/embed/"+Q(this.g,"videoId")};
p.R=function(){var a=Q(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Q(this.g,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
p.ha=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)this.D[c]=a[c];break;case "infoDelivery":Aj(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.D={};Bj(this,a.apiInterface);Aj(this,a);break;default:this.O(b,a)}};
function Aj(a,b){if(D(b))for(var c in b)a.playerInfo[c]=b[c]}
function Bj(a,b){I(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:yj(c)?this[c]=function(){this.playerInfo={};
this.D={};xj(this,c,arguments);return this}:zj(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){xj(this,c,arguments);
return this})},a)}
p.getVideoEmbedCode=function(){var a=parseInt(Q(this.g,"width"),10),b=parseInt(Q(this.g,"height"),10),c=Q(this.g,"host")+this.S();Bb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(qb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(wb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(xb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(yb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(zb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Ab,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
p.getOptions=function(a){return this.D.namespaces?a?this.D[a].options||[]:this.D.namespaces||[]:[]};
p.getOption=function(a,b){if(this.D.namespaces&&a&&b)return this.D[a][b]};
function Cj(a){if("iframe"!=a.tagName.toLowerCase()){var b=O(a,"videoid");b&&(b={videoId:b,width:O(a,"width"),height:O(a,"height")},new Z(a,b))}}
;function Qj(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
x(Qj,Y);Qj.prototype.S=function(){return"/embed/"+Q(this.g,"videoId")};
Qj.prototype.R=function(){return{player:0,thumb_width:Q(this.g,"thumbWidth"),thumb_height:Q(this.g,"thumbHeight"),thumb_align:Q(this.g,"thumbAlign")}};
Qj.prototype.O=function(a,b){Y.prototype.O.call(this,a,b?b.info:void 0)};
function Rj(a){if("iframe"!=a.tagName.toLowerCase()){var b=O(a,"videoid");if(b){b={videoId:b,events:{},width:O(a,"width"),height:O(a,"height"),thumbWidth:O(a,"thumb-width"),thumbHeight:O(a,"thumb-height"),thumbAlign:O(a,"thumb-align")};var c=O(a,"onclick");c&&(b.events.onClick=c);new Qj(a,b)}}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return If[a]});
E("YT.scan",Lf);E("YT.subscribe",function(a,b,c){Ve.subscribe(a,b,c);Kf[a]=!0;for(var d in If)vj(If[d],a)});
E("YT.unsubscribe",function(a,b,c){Ue(a,b,c)});
E("YT.Player",Z);E("YT.Thumbnail",Qj);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.wa;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Jf.push(function(a){a=Mf("player",a);I(a,Cj)});
Jf.push(function(){var a=Mf("thumbnail");I(a,Rj)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Lf();var Sj=B.onYTReady;Sj&&Sj();var Tj=B.onYouTubeIframeAPIReady;Tj&&Tj();var Uj=B.onYouTubePlayerAPIReady;Uj&&Uj();}).call(this);
