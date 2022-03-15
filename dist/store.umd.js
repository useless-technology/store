var q=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var W=(a,l,p)=>l in a?q(a,l,{enumerable:!0,configurable:!0,writable:!0,value:p}):a[l]=p,$=(a,l)=>{for(var p in l||(l={}))X.call(l,p)&&W(a,p,l[p]);if(B)for(var p of B(l))Y.call(l,p)&&W(a,p,l[p]);return a},V=(a,l)=>H(a,Q(l));(function(a,l){typeof exports=="object"&&typeof module!="undefined"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(a=typeof globalThis!="undefined"?globalThis:a||self,l(a["@useless/store"]={}))})(this,function(a){"use strict";const l=u=>{if(typeof u!="object"||u===null)return!1;let c=u;for(;Object.getPrototypeOf(c)!==null;)c=Object.getPrototypeOf(c);return Object.getPrototypeOf(u)===c},p=()=>Math.random().toString(36).substring(2,10),F={INIT:`@store/INIT${p()}`,REPLACE:`@store/REPLACE${p()}`};var G=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},I={exports:{}};(function(u,c){(function(v,h){u.exports=h()})(G,function(){function v(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function h(r,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function k(r,e,t){return e&&h(r.prototype,e),t&&h(r,t),r}function b(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function _(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,o)}return t}function d(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_(Object(t),!0).forEach(function(o){b(r,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(t,o))})}return r}function S(r){return function(e){if(Array.isArray(e))return j(e)}(r)||function(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}(r)||A(r)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(r,e){if(r){if(typeof r=="string")return j(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set"?Array.from(r):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(r,e):void 0}}function j(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function L(r){if(typeof Symbol=="undefined"||r[Symbol.iterator]==null){if(Array.isArray(r)||(r=A(r))){var e=0,t=function(){};return{s:t,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(m){throw m},f:t}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i,n=!0,g=!1;return{s:function(){o=r[Symbol.iterator]()},n:function(){var m=o.next();return n=m.done,m},e:function(m){g=!0,i=m},f:function(){try{n||o.return==null||o.return()}finally{if(g)throw i}}}}var s={};s[s.Fatal=0]="Fatal",s[s.Error=0]="Error",s[s.Warn=1]="Warn",s[s.Log=2]="Log",s[s.Info=3]="Info",s[s.Success=3]="Success",s[s.Debug=4]="Debug",s[s.Trace=5]="Trace",s[s.Silent=-1/0]="Silent",s[s.Verbose=1/0]="Verbose";var y={silent:{level:-1},fatal:{level:s.Fatal},error:{level:s.Error},warn:{level:s.Warn},log:{level:s.Log},info:{level:s.Info},success:{level:s.Success},debug:{level:s.Debug},trace:{level:s.Trace},verbose:{level:s.Trace},ready:{level:s.Info},start:{level:s.Info}};function T(r){return e=r,Object.prototype.toString.call(e)==="[object Object]"&&!(!r.message&&!r.args)&&!r.stack;var e}var O=!1,R=[],f=function(){function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};for(var t in v(this,r),this._reporters=e.reporters||[],this._types=e.types||y,this.level=e.level!==void 0?e.level:3,this._defaults=e.defaults||{},this._async=e.async!==void 0?e.async:void 0,this._stdout=e.stdout,this._stderr=e.stderr,this._mockFn=e.mockFn,this._throttle=e.throttle||1e3,this._throttleMin=e.throttleMin||5,this._types){var o=d(d({type:t},this._types[t]),this._defaults);this[t]=this._wrapLogFn(o),this[t].raw=this._wrapLogFn(o,!0)}this._mockFn&&this.mockTypes(),this._lastLogSerialized=void 0,this._lastLog=void 0,this._lastLogTime=void 0,this._lastLogCount=0,this._throttleTimeout=void 0}return k(r,[{key:"create",value:function(e){return new r(Object.assign({reporters:this._reporters,level:this.level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},e))}},{key:"withDefaults",value:function(e){return this.create({defaults:Object.assign({},this._defaults,e)})}},{key:"withTag",value:function(e){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+e:e})}},{key:"addReporter",value:function(e){return this._reporters.push(e),this}},{key:"removeReporter",value:function(e){if(e){var t=this._reporters.indexOf(e);if(t>=0)return this._reporters.splice(t,1)}else this._reporters.splice(0);return this}},{key:"setReporters",value:function(e){return this._reporters=Array.isArray(e)?e:[e],this}},{key:"wrapAll",value:function(){this.wrapConsole(),this.wrapStd()}},{key:"restoreAll",value:function(){this.restoreConsole(),this.restoreStd()}},{key:"wrapConsole",value:function(){for(var e in this._types)console["__"+e]||(console["__"+e]=console[e]),console[e]=this[e].raw}},{key:"restoreConsole",value:function(){for(var e in this._types)console["__"+e]&&(console[e]=console["__"+e],delete console["__"+e])}},{key:"wrapStd",value:function(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log")}},{key:"_wrapStream",value:function(e,t){var o=this;e&&(e.__write||(e.__write=e.write),e.write=function(i){o[t].raw(String(i).trim())})}},{key:"restoreStd",value:function(){this._restoreStream(this.stdout),this._restoreStream(this.stderr)}},{key:"_restoreStream",value:function(e){e&&e.__write&&(e.write=e.__write,delete e.__write)}},{key:"pauseLogs",value:function(){O=!0}},{key:"resumeLogs",value:function(){O=!1;var e,t=L(R.splice(0));try{for(t.s();!(e=t.n()).done;){var o=e.value;o[0]._logFn(o[1],o[2])}}catch(i){t.e(i)}finally{t.f()}}},{key:"mockTypes",value:function(e){if(this._mockFn=e||this._mockFn,typeof this._mockFn=="function")for(var t in this._types)this[t]=this._mockFn(t,this._types[t])||this[t],this[t].raw=this[t]}},{key:"_wrapLogFn",value:function(e,t){var o=this;return function(){for(var i=arguments.length,n=new Array(i),g=0;g<i;g++)n[g]=arguments[g];if(!O)return o._logFn(e,n,t);R.push([o,e,n,t])}}},{key:"_logFn",value:function(e,t,o){var i=this;if(e.level>this.level)return!!this._async&&Promise.resolve(!1);var n=Object.assign({date:new Date,args:[]},e);!o&&t.length===1&&T(t[0])?Object.assign(n,t[0]):n.args=Array.from(t),n.message&&(n.args.unshift(n.message),delete n.message),n.additional&&(Array.isArray(n.additional)||(n.additional=n.additional.split(`
`)),n.args.push(`
`+n.additional.join(`
`)),delete n.additional),n.type=typeof n.type=="string"?n.type.toLowerCase():"",n.tag=typeof n.tag=="string"?n.tag.toLowerCase():"";var g=function(){var N=arguments.length>0&&arguments[0]!==void 0&&arguments[0],P=i._lastLogCount-i._throttleMin;if(i._lastLog&&P>0){var z=S(i._lastLog.args);P>1&&z.push("(repeated ".concat(P," times)")),i._log(d(d({},i._lastLog),{},{args:z})),i._lastLogCount=1}if(N){if(i._lastLog=n,i._async)return i._logAsync(n);i._log(n)}};clearTimeout(this._throttleTimeout);var m=this._lastLogTime?n.date-this._lastLogTime:0;if(this._lastLogTime=n.date,m<this._throttle)try{var x=JSON.stringify([n.type,n.tag,n.args]),U=this._lastLogSerialized===x;if(this._lastLogSerialized=x,U&&(this._lastLogCount++,this._lastLogCount>this._throttleMin))return void(this._throttleTimeout=setTimeout(g,this._throttle))}catch{}g(!0)}},{key:"_log",value:function(e){var t,o=L(this._reporters);try{for(o.s();!(t=o.n()).done;)t.value.log(e,{async:!1,stdout:this.stdout,stderr:this.stderr})}catch(i){o.e(i)}finally{o.f()}}},{key:"_logAsync",value:function(e){var t=this;return Promise.all(this._reporters.map(function(o){return o.log(e,{async:!0,stdout:t.stdout,stderr:t.stderr})}))}},{key:"stdout",get:function(){return this._stdout||console._stdout}},{key:"stderr",get:function(){return this._stderr||console._stderr}}]),r}();f.prototype.add=f.prototype.addReporter,f.prototype.remove=f.prototype.removeReporter,f.prototype.clear=f.prototype.removeReporter,f.prototype.withScope=f.prototype.withTag,f.prototype.mock=f.prototype.mockTypes,f.prototype.pause=f.prototype.pauseLogs,f.prototype.resume=f.prototype.resumeLogs;var C,D=function(){function r(e){v(this,r),this.options=Object.assign({},e),this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}return k(r,[{key:"log",value:function(e){var t=e.level<1?console.__error||console.error:e.level===1&&console.warn?console.__warn||console.warn:console.__log||console.log,o=e.type!=="log"?e.type:"",i=e.tag?e.tag:"",n=this.typeColorMap[e.type]||this.levelColorMap[e.level]||this.defaultColor,g=`
      background: `.concat(n,`;
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `),m="%c".concat([i,o].filter(Boolean).join(":"));typeof e.args[0]=="string"?t.apply(void 0,["".concat(m,"%c ").concat(e.args[0]),g,""].concat(S(e.args.slice(1)))):t.apply(void 0,[m,g].concat(S(e.args)))}}]),r}();return typeof window!="undefined"&&window.consola||((C=new f({reporters:[new D]})).Consola=f,C.LogLevel=s,C.BrowserReporter=D,C)})})(I);var J=I.exports;const w=u=>J.error(new Error(u)),E=(u,c,v)=>{typeof c=="function"&&typeof v=="undefined"&&(v=c,c=void 0),typeof v=="function"&&v(E)(u,c);let h=u,k=c,b=[],_=b,d=!1;const S=()=>{_===b&&(_=[...b])},A=()=>(d&&w("The reducer has already received the state as an argument."),k),j=y=>{typeof y!="function"&&w("`listener` must be a function"),d&&w("call subscribe while dispatching, see caveat-1");let T=!0;return S(),_.push(y),()=>{if(!T)return;d&&w("call unsubscribe while dispatching, see caveat-1"),T=!1,S();const O=_.indexOf(y);_.splice(O,1),b=null}},L=y=>{l(y)||w("Action must be a plain object."),typeof y.type=="undefined"&&w("Action must have a not nil type."),d&&w("Can not dispatch action in the reducer.");try{d=!0,k=h(k,y)}finally{d=!1}return(b=_).forEach(O=>O&&O()),y},s=y=>{typeof y!="function"&&w("`nextReducer` must be a function"),h=y,L({type:F.REPLACE})};return L({type:F.INIT}),{getState:A,subscribe:j,dispatch:L,replaceReducer:s}};var M=(...u)=>u.length===0?c=>c:u.length===1?u[0]:u.reduce((c,v)=>(...h)=>c(v(...h))),K=(...u)=>c=>(...v)=>{const h=c(...v),k={getState:h.getState},b=u.map(d=>d(k)),_=M(...b)(h.dispatch);return V($({},h),{dispatch:_})};a.applyMiddleware=K,a.compose=M,a.createStore=E,Object.defineProperty(a,"__esModule",{value:!0}),a[Symbol.toStringTag]="Module"});