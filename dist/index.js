"use strict";(()=>{var jh=null,Gh=null;var _y=null,$h=null,Kh=null,Be=()=>jh,Ks=t=>jh=t,ze=()=>Gh,Hs=t=>Gh=t;var Ws=t=>_y=t,De=()=>$h,Ct=t=>$h=t,X=()=>Kh,Qs=t=>Kh=t;var ge=t=>document.querySelector(`[data-pfc-form="${t}"]`),Hh="",_e=(t,e)=>{let n=t.querySelector("[data-pfc-loader]");n.style.display="flex";let r=t.firstChild;Hh=r.textContent,e&&(r.textContent=e)},O=t=>{let e=t.querySelector("[data-pfc-loader]");e.style.display="none";let n=t.firstChild;n.textContent=Hh},yy=(t,e=null)=>{if(e)return e;switch(t){case"auth/user-not-found":return"User not found. Please check your email or register for an account.";case"auth/wrong-password":return"Incorrect password. Please try again.";case"auth/invalid-email":return"Invalid email address. Please enter a valid email.";case"auth/email-already-in-use":return"Email already in use. Please use a different email or sign in.";case"auth/weak-password":return"Weak password. Please choose a stronger password.";case"auth/too-many-requests":return"Too many unsuccessful login attempts. Try again later.";case"auth/operation-not-allowed":return"This operation is not allowed. Please contact support.";case"auth/user-disabled":return"Your account has been disabled. Please contact support.";case"firestore/permission-denied":return"You have missing or insufficient permissions.";default:return`Firebase error: ${t}`}},Ys=(t,e)=>{let n=document.querySelector(t),r=n.children[1],s=n.children[2];r.innerText=e,n.style.display="flex",setTimeout(()=>{n.classList.add("is-visible")},100),setTimeout(()=>{n.classList.remove("is-visible"),setTimeout(()=>{n.style.display="none"},300)},5e3),s.addEventListener("click",()=>{n.classList.remove("is-visible"),setTimeout(()=>{n.style.display="none"},300)})},C=t=>{if(!t){console.error("Invalid or missing error object:",t),Ys("[data-pfc-error]","An unexpected error occurred.");return}if(t.code){let e=t.code,n=yy(e);Ys("[data-pfc-error]",n)}else Ys("[data-pfc-error]",t)},ye=t=>{Ys("[data-pfc-success]",t)};var Qh=function(t){let e=[],n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Iy=function(t){let e=[],n=0,r=0;for(;n<t.length;){let s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){let i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){let i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{let i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){let i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4,d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Iy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){let i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;let u=s<t.length?n[t.charAt(s)]:64;++s;let h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new wa;let d=i<<2|a>>4;if(r.push(d),u!==64){let f=a<<4&240|u>>2;if(r.push(f),h!==64){let _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},wa=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},wy=function(t){let e=Qh(t);return Yh.encodeByteArray(e,!0)},vr=function(t){return wy(t).replace(/\./g,"")},Ea=function(t){try{return Yh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function vy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Ey=()=>vy().__FIREBASE_DEFAULTS__,Ty=()=>{if(typeof process>"u"||typeof process.env>"u")return;let t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ay=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=t&&Ea(t[1]);return e&&JSON.parse(e)},Xs=()=>{try{return Ey()||Ty()||Ay()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ta=t=>{var e,n;return(n=(e=Xs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ln=t=>{let e=Ta(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Aa=()=>{var t;return(t=Xs())===null||t===void 0?void 0:t.config},ba=t=>{var e;return(e=Xs())===null||e===void 0?void 0:e[`_${t}`]};var Js=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function Zs(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vr(JSON.stringify(n)),vr(JSON.stringify(o)),a].join(".")}function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function by(){var t;let e=(t=Xs())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xh(){let t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ed(){let t=$();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function td(){return!by()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ei(){try{return typeof indexedDB=="object"}catch{return!1}}function nd(){return new Promise((t,e)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}var Sy="FirebaseError",ce=class t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sy,Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,It.prototype.create)}},It=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){let r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ry(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ce(s,a,r)}};function Ry(t,e){return t.replace(Py,(n,r)=>{let s=e[r];return s!=null?String(s):`<${r}?>`})}var Py=/\{\$([^}]+)}/g;function rd(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dt(t,e){if(t===e)return!0;let n=Object.keys(t),r=Object.keys(e);for(let s of n){if(!r.includes(s))return!1;let i=t[s],o=e[s];if(Wh(i)&&Wh(o)){if(!Dt(i,o))return!1}else if(i!==o)return!1}for(let s of r)if(!n.includes(s))return!1;return!0}function Wh(t){return t!==null&&typeof t=="object"}function Vn(t){let e=[];for(let[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mn(t){let e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Un(t){let e=t.indexOf("?");if(!e)return"";let n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sd(t,e){let n=new va(t,e);return n.subscribe.bind(n)}var va=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cy(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ia),s.error===void 0&&(s.error=Ia),s.complete===void 0&&(s.complete=Ia);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Cy(t,e){if(typeof t!="object"||t===null)return!1;for(let n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ia(){}var Jb=4*60*60*1e3;function L(t){return t&&t._delegate?t._delegate:t}var Ie=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var tn="[DEFAULT]";var Sa=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let r=new Js;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;let r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ky(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(n);try{let i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[i,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;let s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);let o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){let r=this.onInitCallbacks.get(n);if(r)for(let s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Dy(t){return t===tn?void 0:t}function ky(t){return t.instantiationMode==="EAGER"}var ti=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new Sa(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};var Ny=[],V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));var xy={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Oy=V.INFO,Ly={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Vy=(t,e,...n)=>{if(e<t.logLevel)return;let r=new Date().toISOString(),s=Ly[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},kt=class{constructor(e){this.name=e,this._logLevel=Oy,this._logHandler=Vy,this._userLogHandler=null,Ny.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}};var My=(t,e)=>e.some(n=>t instanceof n),id,od;function Uy(){return id||(id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fy(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ad=new WeakMap,Pa=new WeakMap,cd=new WeakMap,Ra=new WeakMap,Da=new WeakMap;function qy(t){let e=new Promise((n,r)=>{let s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(tt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ad.set(n,t)}).catch(()=>{}),Da.set(e,t),e}function By(t){if(Pa.has(t))return;let e=new Promise((n,r)=>{let s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pa.set(t,e)}var Ca={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ud(t){Ca=t(Ca)}function zy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let r=t.call(ni(this),e,...n);return cd.set(r,e.sort?e.sort():[e]),tt(r)}:Fy().includes(t)?function(...e){return t.apply(ni(this),e),tt(ad.get(this))}:function(...e){return tt(t.apply(ni(this),e))}}function jy(t){return typeof t=="function"?zy(t):(t instanceof IDBTransaction&&By(t),My(t,Uy())?new Proxy(t,Ca):t)}function tt(t){if(t instanceof IDBRequest)return qy(t);if(Ra.has(t))return Ra.get(t);let e=jy(t);return e!==t&&(Ra.set(t,e),Da.set(e,t)),e}var ni=t=>Da.get(t);function hd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){let o=indexedDB.open(t,e),a=tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(tt(o.result),c.oldVersion,c.newVersion,tt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}var Gy=["get","getKey","getAll","getAllKeys","count"],$y=["put","add","delete","clear"],ka=new Map;function ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,s=$y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gy.includes(n)))return;let i=async function(o,...a){let c=this.transaction(o,s?"readwrite":"readonly"),u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return ka.set(e,i),i}ud(t=>({...t,get:(e,n,r)=>ld(e,n)||t.get(e,n,r),has:(e,n)=>!!ld(e,n)||t.has(e,n)}));var xa=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ky(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function Ky(t){let e=t.getComponent();return e?.type==="VERSION"}var Oa="@firebase/app",dd="0.9.26";var nn=new kt("@firebase/app"),Hy="@firebase/app-compat",Wy="@firebase/analytics-compat",Qy="@firebase/analytics",Yy="@firebase/app-check-compat",Jy="@firebase/app-check",Xy="@firebase/auth",Zy="@firebase/auth-compat",eI="@firebase/database",tI="@firebase/database-compat",nI="@firebase/functions",rI="@firebase/functions-compat",sI="@firebase/installations",iI="@firebase/installations-compat",oI="@firebase/messaging",aI="@firebase/messaging-compat",cI="@firebase/performance",uI="@firebase/performance-compat",lI="@firebase/remote-config",hI="@firebase/remote-config-compat",dI="@firebase/storage",fI="@firebase/storage-compat",mI="@firebase/firestore",pI="@firebase/firestore-compat",gI="firebase",_I="10.7.2";var La="[DEFAULT]",yI={[Oa]:"fire-core",[Hy]:"fire-core-compat",[Qy]:"fire-analytics",[Wy]:"fire-analytics-compat",[Jy]:"fire-app-check",[Yy]:"fire-app-check-compat",[Xy]:"fire-auth",[Zy]:"fire-auth-compat",[eI]:"fire-rtdb",[tI]:"fire-rtdb-compat",[nI]:"fire-fn",[rI]:"fire-fn-compat",[sI]:"fire-iid",[iI]:"fire-iid-compat",[oI]:"fire-fcm",[aI]:"fire-fcm-compat",[cI]:"fire-perf",[uI]:"fire-perf-compat",[lI]:"fire-rc",[hI]:"fire-rc-compat",[dI]:"fire-gcs",[fI]:"fire-gcs-compat",[mI]:"fire-fst",[pI]:"fire-fst-compat","fire-js":"fire-js",[gI]:"fire-js-all"};var ri=new Map,Va=new Map;function II(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function je(t){let e=t.name;if(Va.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,t);for(let n of ri.values())II(n,t);return!0}function wt(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}var wI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nt=new It("app","Firebase",wI);var Ma=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}};var nt=_I;function qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});let r=Object.assign({name:La,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(n||(n=Aa()),!n)throw Nt.create("no-options");let i=ri.get(s);if(i){if(Dt(n,i.options)&&Dt(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}let o=new ti(s);for(let c of Va.values())o.addComponent(c);let a=new Ma(n,r,o);return ri.set(s,a),a}function xt(t=La){let e=ri.get(t);if(!e&&t===La&&Aa())return qa();if(!e)throw Nt.create("no-app",{appName:t});return e}function ue(t,e,n){var r;let s=(r=yI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);let i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){let a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}je(new Ie(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}var vI="firebase-heartbeat-database",EI=1,Er="firebase-heartbeat-store",Na=null;function gd(){return Na||(Na=hd(vI,EI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Er)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),Na}async function TI(t){try{return await(await gd()).transaction(Er).objectStore(Er).get(_d(t))}catch(e){if(e instanceof ce)nn.warn(e.message);else{let n=Nt.create("idb-get",{originalErrorMessage:e?.message});nn.warn(n.message)}}}async function fd(t,e){try{let r=(await gd()).transaction(Er,"readwrite");await r.objectStore(Er).put(e,_d(t)),await r.done}catch(n){if(n instanceof ce)nn.warn(n.message);else{let r=Nt.create("idb-set",{originalErrorMessage:n?.message});nn.warn(r.message)}}}function _d(t){return`${t.name}!${t.options.appId}`}var AI=1024,bI=30*24*60*60*1e3,Ua=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new Fa(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;let s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=md();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{let a=new Date(o.date).valueOf();return Date.now()-a<=bI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let n=md(),{heartbeatsToSend:r,unsentEntries:s}=SI(this._heartbeatsCache.heartbeats),i=vr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}};function md(){return new Date().toISOString().substring(0,10)}function SI(t,e=AI){let n=[],r=t.slice();for(let s of t){let i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Fa=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ei()?nd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await TI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){let s=await this.read();return fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){let s=await this.read();return fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}};function pd(t){return vr(JSON.stringify({version:2,heartbeats:t})).length}function RI(t){je(new Ie("platform-logger",e=>new xa(e),"PRIVATE")),je(new Ie("heartbeat",e=>new Ua(e),"PRIVATE")),ue(Oa,dd,t),ue(Oa,dd,"esm2017"),ue("fire-js","")}RI("");var PI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qe={},v,cc=cc||{},k=PI||self;function _i(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CI(t){return Object.prototype.hasOwnProperty.call(t,Ba)&&t[Ba]||(t[Ba]=++DI)}var Ba="closure_uid_"+(1e9*Math.random()>>>0),DI=0;function kI(t,e,n){return t.call.apply(t.bind,arguments)}function NI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function we(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?we=kI:we=NI,we.apply(null,arguments)}function si(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function oe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ot(){this.s=this.s,this.o=this.o}var xI=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),xI!=0)&&CI(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Dd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function uc(t){let e=t.length;if(0<e){let n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function yd(t,e){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(_i(r)){let s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var OI=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{let n=()=>{};k.addEventListener("test",n,e),k.removeEventListener("test",n,e)}catch{}return t}();function Pr(t){return/^[\s\xa0]*$/.test(t)}function yi(){var t=k.navigator;return t&&(t=t.userAgent)?t:""}function rt(t){return yi().indexOf(t)!=-1}function lc(t){return lc[" "](t),t}lc[" "]=function(){};function LI(t,e){var n=Tw;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var VI=rt("Opera"),zn=rt("Trident")||rt("MSIE"),kd=rt("Edge"),Ka=kd||zn,Nd=rt("Gecko")&&!(yi().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge"))&&!(rt("Trident")||rt("MSIE"))&&!rt("Edge"),MI=yi().toLowerCase().indexOf("webkit")!=-1&&!rt("Edge");function xd(){var t=k.document;return t?t.documentMode:void 0}var Ha;e:{if(ii="",oi=function(){var t=yi();if(Nd)return/rv:([^\);]+)(\)|;)/.exec(t);if(kd)return/Edge\/([\d\.]+)/.exec(t);if(zn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MI)return/WebKit\/(\S+)/.exec(t);if(VI)return/(?:Version)[ \/]?(\S+)/.exec(t)}(),oi&&(ii=oi?oi[1]:""),zn&&(ai=xd(),ai!=null&&ai>parseFloat(ii))){Ha=String(ai);break e}Ha=ii}var ii,oi,ai,Wa;k.document&&zn?(za=xd(),Wa=za||parseInt(Ha,10)||void 0):Wa=void 0;var za,UI=Wa;function Cr(t,e){if(ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nd){e:{try{lc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Cr.$.h.call(this)}}oe(Cr,ve);var FI={2:"touch",3:"pen",4:"mouse"};Cr.prototype.h=function(){Cr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mr="closure_listenable_"+(1e6*Math.random()|0),qI=0;function BI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++qI,this.fa=this.ia=!1}function Ii(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function hc(t,e,n){for(let r in t)e.call(n,t[r],r,t)}function zI(t,e){for(let n in t)e.call(void 0,t[n],n,t)}function Od(t){let e={};for(let n in t)e[n]=t[n];return e}var Id="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ld(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Id.length;i++)n=Id[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wi(t){this.src=t,this.g={},this.h=0}wi.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ya(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new BI(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Qa(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Dd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ii(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ya(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var dc="closure_lm_"+(1e6*Math.random()|0),ja={};function Vd(t,e,n,r,s){if(r&&r.once)return Ud(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vd(t,e[i],n,r,s);return null}return n=pc(n),t&&t[Mr]?t.O(e,n,Vr(r)?!!r.capture:!!r,s):Md(t,e,n,!1,r,s)}function Md(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Vr(s)?!!s.capture:!!s,a=mc(t);if(a||(t[dc]=a=new wi(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=jI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)OI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(qd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jI(){function t(n){return e.call(t.src,t.listener,n)}let e=GI;return t}function Ud(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ud(t,e[i],n,r,s);return null}return n=pc(n),t&&t[Mr]?t.P(e,n,Vr(r)?!!r.capture:!!r,s):Md(t,e,n,!0,r,s)}function Fd(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Fd(t,e[i],n,r,s);else r=Vr(r)?!!r.capture:!!r,n=pc(n),t&&t[Mr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ya(i,n,r,s),-1<n&&(Ii(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=mc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ya(e,n,r,s)),(n=-1<t?e[t]:null)&&fc(n))}function fc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Mr])Qa(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(qd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mc(e))?(Qa(n,t),n.h==0&&(n.src=null,e[dc]=null)):Ii(t)}}}function qd(t){return t in ja?ja[t]:ja[t]="on"+t}function GI(t,e){if(t.fa)t=!0;else{e=new Cr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&fc(t),t=n.call(r,e)}return t}function mc(t){return t=t[dc],t instanceof wi?t:null}var Ga="__closure_events_fn_"+(1e9*Math.random()>>>0);function pc(t){return typeof t=="function"?t:(t[Ga]||(t[Ga]=function(e){return t.handleEvent(e)}),t[Ga])}function ie(){Ot.call(this),this.i=new wi(this),this.S=this,this.J=null}oe(ie,Ot);ie.prototype[Mr]=!0;ie.prototype.removeEventListener=function(t,e,n,r){Fd(this,t,e,n,r)};function he(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ve(e,t);else if(e instanceof ve)e.target=e.target||t;else{var s=e;e=new ve(r,t),Ld(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ci(o,r,!0,e)&&s}if(o=e.g=t,s=ci(o,r,!0,e)&&s,s=ci(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ci(o,r,!1,e)&&s}ie.prototype.N=function(){if(ie.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ii(n[r]);delete t.g[e],t.h--}}this.J=null};ie.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ie.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ci(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Qa(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var gc=k.JSON.stringify,Ja=class{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}};function $I(){var t=_c;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Xa=class{constructor(){this.h=this.g=null}add(e,n){let r=Bd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}},Bd=new Ja(()=>new Za,t=>t.reset()),Za=class{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}};function KI(t){var e=1;t=t.split(":");let n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function HI(t){k.setTimeout(()=>{throw t},0)}var Dr,kr=!1,_c=new Xa,zd=()=>{let t=k.Promise.resolve(void 0);Dr=()=>{t.then(WI)}},WI=()=>{for(var t;t=$I();){try{t.h.call(t.g)}catch(n){HI(n)}var e=Bd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kr=!1};function vi(t,e){ie.call(this),this.h=t||1,this.g=e||k,this.j=we(this.qb,this),this.l=Date.now()}oe(vi,ie);v=vi.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),he(this,"tick"),this.ga&&(yc(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}v.N=function(){vi.$.N.call(this),yc(this),delete this.g};function Ic(t,e,n){if(typeof t=="function")n&&(t=we(t,n));else if(t&&typeof t.handleEvent=="function")t=we(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(t,e||0)}function jd(t){t.g=Ic(()=>{t.g=null,t.i&&(t.i=!1,jd(t))},t.j);let e=t.h;t.h=null,t.m.apply(null,e)}var ec=class extends Ot{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jd(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function Nr(t){Ot.call(this),this.h=t,this.g={}}oe(Nr,Ot);var wd=[];function Gd(t,e,n,r){Array.isArray(n)||(n&&(wd[0]=n.toString()),n=wd);for(var s=0;s<n.length;s++){var i=Vd(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function $d(t){hc(t.g,function(e,n){this.g.hasOwnProperty(n)&&fc(e)},t),t.g={}}Nr.prototype.N=function(){Nr.$.N.call(this),$d(this)};Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ei(){this.g=!0}Ei.prototype.Ea=function(){this.g=!1};function QI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function YI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function qn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XI(t,n)+(r?" "+r:"")})}function JI(t,e){t.info(function(){return"TIMEOUT: "+e})}Ei.prototype.info=function(){};function XI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return gc(n)}catch{return e}}var an={},vd=null;function Ti(){return vd=vd||new ie}an.Ta="serverreachability";function Kd(t){ve.call(this,an.Ta,t)}oe(Kd,ve);function xr(t){let e=Ti();he(e,new Kd(e))}an.STAT_EVENT="statevent";function Hd(t,e){ve.call(this,an.STAT_EVENT,t),this.stat=e}oe(Hd,ve);function Re(t){let e=Ti();he(e,new Hd(e,t))}an.Ua="timingevent";function Wd(t,e){ve.call(this,an.Ua,t),this.size=e}oe(Wd,ve);function Ur(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){t()},e)}var Ai={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Qd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wc(){}wc.prototype.h=null;function Ed(t){return t.h||(t.h=t.i())}function Yd(){}var Fr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vc(){ve.call(this,"d")}oe(vc,ve);function Ec(){ve.call(this,"c")}oe(Ec,ve);var tc;function bi(){}oe(bi,wc);bi.prototype.g=function(){return new XMLHttpRequest};bi.prototype.i=function(){return{}};tc=new bi;function qr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Nr(this),this.P=ZI,t=Ka?125:void 0,this.V=new vi(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Jd}function Jd(){this.i=null,this.g="",this.h=!1}var ZI=45e3,Xd={},nc={};v=qr.prototype;v.setTimeout=function(t){this.P=t};function rc(t,e,n){t.L=1,t.A=Ri(Et(e)),t.u=n,t.S=!0,Zd(t,null)}function Zd(t,e){t.G=Date.now(),Br(t),t.B=Et(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),cf(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Jd,t.g=Cf(t.l,n?e:null,!t.u),0<t.O&&(t.M=new ec(we(t.Pa,t,t.g),t.O)),Gd(t.U,t.g,"readystatechange",t.nb),e=t.I?Od(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),xr(),QI(t.j,t.v,t.B,t.m,t.W,t.u)}v.nb=function(t){t=t.target;let e=this.M;e&&st(t)==3?e.l():this.Pa(t)};v.Pa=function(t){try{if(t==this.g)e:{let l=st(this.g);var e=this.g.Ia();let h=this.g.da();if(!(3>l)&&(l!=3||Ka||this.g&&(this.h.h||this.g.ja()||Sd(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?xr(3):xr(2)),Si(this);var n=this.g.da();this.ca=n;t:if(ef(this)){var r=Sd(this.g);t="";var s=r.length,i=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),Rr(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YI(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var u=a;break t}}u=null}if(n=u)qn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,n);else{this.i=!1,this.s=3,Re(12),rn(this),Rr(this);break e}}this.S?(tf(this,l,o),Ka&&this.i&&l==3&&(Gd(this.U,this.V,"tick",this.mb),this.V.start())):(qn(this.j,this.m,o,null),sc(this,o)),l==4&&rn(this),this.i&&!this.J&&(l==4?bf(this.l,this):(this.i=!1,Br(this)))}else ww(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),rn(this),Rr(this)}}}catch{}finally{}};function ef(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function tf(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=ew(t,n),s==nc){e==4&&(t.s=4,Re(14),r=!1),qn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Xd){t.s=4,Re(15),qn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qn(t.j,t.m,s,null),sc(t,s);ef(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Re(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pc(e),e.M=!0,Re(11))):(qn(t.j,t.m,n,"[Invalid Chunked Response]"),rn(t),Rr(t))}v.mb=function(){if(this.g){var t=st(this.g),e=this.g.ja();this.o<e.length&&(Si(this),tf(this,t,e),this.i&&t!=4&&Br(this))}};function ew(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?nc:(n=Number(e.substring(n,r)),isNaN(n)?Xd:(r+=1,r+n>e.length?nc:(e=e.slice(r,r+n),t.o=r+n,e)))}v.cancel=function(){this.J=!0,rn(this)};function Br(t){t.Y=Date.now()+t.P,nf(t,t.P)}function nf(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ur(we(t.lb,t),e)}function Si(t){t.C&&(k.clearTimeout(t.C),t.C=null)}v.lb=function(){this.C=null;let t=Date.now();0<=t-this.Y?(JI(this.j,this.B),this.L!=2&&(xr(),Re(17)),rn(this),this.s=2,Rr(this)):nf(this,this.Y-t)};function Rr(t){t.l.H==0||t.J||bf(t.l,t)}function rn(t){Si(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,yc(t.V),$d(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function sc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ic(n.i,t))){if(!t.K&&ic(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)fi(n),Di(n);else break e;Rc(n),Re(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ur(we(n.ib,n),6e3));if(1>=hf(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else sn(n,11)}else if((t.K||n.g==t)&&fi(n),!Pr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];let l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));let h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));let d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let f=t.g;if(f){let _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Tc(i,i.h),i.h=null))}if(r.F){let y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,j(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Pf(r,r.J?r.pa:null,r.Y),o.K){df(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Si(a),Br(a)),r.g=o}else Tf(r);0<n.j.length&&ki(n)}else u[0]!="stop"&&u[0]!="close"||sn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?sn(n,7):Sc(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}xr(4)}catch{}}function tw(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_i(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nw(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_i(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(let r in t)e[n++]=r;return e}}}function rf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_i(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nw(t),r=tw(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var sf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function on(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof on){this.h=t.h,hi(this,t.j),this.s=t.s,this.g=t.g,di(this,t.m),this.l=t.l;var e=t.i,n=new Or;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Td(this,n),this.o=t.o}else t&&(e=String(t).match(sf))?(this.h=!1,hi(this,e[1]||"",!0),this.s=br(e[2]||""),this.g=br(e[3]||"",!0),di(this,e[4]),this.l=br(e[5]||"",!0),Td(this,e[6]||"",!0),this.o=br(e[7]||"")):(this.h=!1,this.i=new Or(null,this.h))}on.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sr(e,Ad,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Sr(e,Ad,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Sr(n,n.charAt(0)=="/"?ow:iw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sr(n,cw)),t.join("")};function Et(t){return new on(t)}function hi(t,e,n){t.j=n?br(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function di(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Td(t,e,n){e instanceof Or?(t.i=e,uw(t.i,t.h)):(n||(e=Sr(e,aw)),t.i=new Or(e,t.h))}function j(t,e,n){t.i.set(e,n)}function Ri(t){return j(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function br(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ad=/[#\/\?@]/g,iw=/[#\?:]/g,ow=/[#\?]/g,aw=/[#\?@]/g,cw=/#/g;function Or(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Lt(t){t.g||(t.g=new Map,t.h=0,t.i&&rw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}v=Or.prototype;v.add=function(t,e){Lt(this),this.i=null,t=jn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function of(t,e){Lt(t),e=jn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function af(t,e){return Lt(t),e=jn(t,e),t.g.has(e)}v.forEach=function(t,e){Lt(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};v.ta=function(){Lt(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){let s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};v.Z=function(t){Lt(this);let e=[];if(typeof t=="string")af(this,t)&&(e=e.concat(this.g.get(jn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};v.set=function(t,e){return Lt(this),this.i=null,t=jn(this,t),af(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};v.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cf(t,e,n){of(t,e),0<n.length&&(t.i=null,t.g.set(jn(t,e),uc(n)),t.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];let i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function jn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uw(t,e){e&&!t.j&&(Lt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(of(this,r),cf(this,s,n))},t)),t.j=e}var lw=class{constructor(t,e){this.g=t,this.map=e}};function uf(t){this.l=t||hw,k.PerformanceNavigationTiming?(t=k.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hw=10;function lf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hf(t){return t.h?1:t.g?t.g.size:0}function ic(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tc(t,e){t.g?t.g.add(e):t.h=e}function df(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uf.prototype.cancel=function(){if(this.i=ff(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let t of this.g.values())t.cancel();this.g.clear()}};function ff(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(let n of t.g.values())e=e.concat(n.F);return e}return uc(t.i)}var dw=class{stringify(t){return k.JSON.stringify(t,void 0)}parse(t){return k.JSON.parse(t,void 0)}};function fw(){this.g=new dw}function mw(t,e,n){let r=n||"";try{rf(t,function(s,i){let o=s;Vr(s)&&(o=gc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function pw(t,e){let n=new Ei;if(k.Image){let r=new Image;r.onload=si(ui,n,r,"TestLoadImage: loaded",!0,e),r.onerror=si(ui,n,r,"TestLoadImage: error",!1,e),r.onabort=si(ui,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=si(ui,n,r,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ui(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function zr(t){this.l=t.ec||null,this.j=t.ob||!1}oe(zr,wc);zr.prototype.g=function(){return new Pi(this.l,this.j)};zr.prototype.i=function(t){return function(){return t}}({});function Pi(t,e){ie.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ac,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(Pi,ie);var Ac=0;v=Pi.prototype;v.open=function(t,e){if(this.readyState!=Ac)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Lr(this)};v.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||k).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=Ac};v.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Lr(this)),this.g&&(this.readyState=3,Lr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}v.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jr(this):Lr(this),this.readyState==3&&mf(this)}};v.Za=function(t){this.g&&(this.response=this.responseText=t,jr(this))};v.Ya=function(t){this.g&&(this.response=t,jr(this))};v.ka=function(){this.g&&jr(this)};function jr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Lr(t)}v.setRequestHeader=function(t,e){this.v.append(t,e)};v.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Lr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gw=k.JSON.parse;function K(t){ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pf,this.L=this.M=!1}oe(K,ie);var pf="",_w=/^https?$/i,yw=["POST","PUT"];v=K.prototype;v.Oa=function(t){this.M=t};v.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tc.g(),this.C=this.u?Ed(this.u):Ed(tc),this.g.onreadystatechange=we(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){bd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(let i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=k.FormData&&t instanceof k.FormData,!(0<=Dd(yw,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yf(this),0<this.B&&((this.L=Iw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=we(this.ua,this)):this.A=Ic(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){bd(this,i)}};function Iw(t){return zn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}v.ua=function(){typeof cc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function bd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gf(t),Ci(t)}function gf(t){t.F||(t.F=!0,he(t,"complete"),he(t,"error"))}v.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,he(this,"complete"),he(this,"abort"),Ci(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ci(this,!0)),K.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?_f(this):this.kb())};v.kb=function(){_f(this)};function _f(t){if(t.h&&typeof cc<"u"&&(!t.C[1]||st(t)!=4||t.da()!=2)){if(t.v&&st(t)==4)Ic(t.La,0,t);else if(he(t,"readystatechange"),st(t)==4){t.h=!1;try{let o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(sf)[1]||null;!s&&k.self&&k.self.location&&(s=k.self.location.protocol.slice(0,-1)),r=!_w.test(s?s.toLowerCase():"")}n=r}if(n)he(t,"complete"),he(t,"success");else{t.m=6;try{var i=2<st(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",gf(t)}}finally{Ci(t)}}}}function Ci(t,e){if(t.g){yf(t);let n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||he(t,"ready");try{n.onreadystatechange=r}catch{}}}function yf(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(k.clearTimeout(t.A),t.A=null)}v.isActive=function(){return!!this.g};function st(t){return t.g?t.g.readyState:0}v.da=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gw(e)}};function Sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ww(t){let e={};t=(t.g&&2<=st(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Pr(t[r]))continue;var n=KI(t[r]);let s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();let i=e[s]||[];e[s]=i,i.push(n)}zI(e,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function If(t){let e="";return hc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=If(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):j(t,e,n))}function Tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wf(t){this.Ga=0,this.j=[],this.l=new Ei,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Tr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Tr("baseRetryDelayMs",5e3,t),this.hb=Tr("retryDelaySeedMs",1e4,t),this.eb=Tr("forwardChannelMaxRetries",2,t),this.xa=Tr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new uf(t&&t.concurrentRequestLimit),this.Ja=new fw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=wf.prototype;v.ra=8;v.H=1;function Sc(t){if(vf(t),t.H==3){var e=t.W++,n=Et(t.I);if(j(n,"SID",t.K),j(n,"RID",e),j(n,"TYPE","terminate"),Gr(t,n),e=new qr(t,t.l,e),e.L=2,e.A=Ri(Et(n)),n=!1,k.navigator&&k.navigator.sendBeacon)try{n=k.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&k.Image&&(new Image().src=e.A,n=!0),n||(e.g=Cf(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Br(e)}Rf(t)}function Di(t){t.g&&(Pc(t),t.g.cancel(),t.g=null)}function vf(t){Di(t),t.u&&(k.clearTimeout(t.u),t.u=null),fi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&k.clearTimeout(t.m),t.m=null)}function ki(t){if(!lf(t.i)&&!t.m){t.m=!0;var e=t.Na;Dr||zd(),kr||(Dr(),kr=!0),_c.add(e,t),t.C=0}}function vw(t,e){return hf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ur(we(t.Na,t,e),Sf(t,t.C)),t.C++,!0)}v.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;let s=new qr(this,this.l,t),i=this.s;if(this.U&&(i?(i=Od(i),Ld(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ef(this,s,e),n=Et(this.I),j(n,"RID",t),j(n,"CVER",22),this.F&&j(n,"X-HTTP-Session-Id",this.F),Gr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(If(i)))+"&"+e:this.o&&bc(n,this.o,i)),Tc(this.i,s),this.bb&&j(n,"TYPE","init"),this.P?(j(n,"$req",e),j(n,"SID","null"),s.aa=!0,rc(s,n,null)):rc(s,n,e),this.H=2}}else this.H==3&&(t?Rd(this,t):this.j.length==0||lf(this.i)||Rd(this))};function Rd(t,e){var n;e?n=e.m:n=t.W++;let r=Et(t.I);j(r,"SID",t.K),j(r,"RID",n),j(r,"AID",t.V),Gr(t,r),t.o&&t.s&&bc(r,t.o,t.s),n=new qr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ef(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Tc(t.i,n),rc(n,r,e)}function Gr(t,e){t.na&&hc(t.na,function(n,r){j(e,r,n)}),t.h&&rf({},function(n,r){j(e,r,n)})}function Ef(t,e,n){n=Math.min(t.j.length,n);var r=t.h?we(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){let o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g,l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{mw(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Tf(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Dr||zd(),kr||(Dr(),kr=!0),_c.add(e,t),t.A=0}}function Rc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ur(we(t.Ma,t),Sf(t,t.A)),t.A++,!0)}v.Ma=function(){if(this.u=null,Af(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ur(we(this.jb,this),t)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Re(10),Di(this),Af(this))};function Pc(t){t.B!=null&&(k.clearTimeout(t.B),t.B=null)}function Af(t){t.g=new qr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Et(t.wa);j(e,"RID","rpc"),j(e,"SID",t.K),j(e,"AID",t.V),j(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&j(e,"TO",t.qa),j(e,"TYPE","xmlhttp"),Gr(t,e),t.o&&t.s&&bc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ri(Et(e)),n.u=null,n.S=!0,Zd(n,t)}v.ib=function(){this.v!=null&&(this.v=null,Di(this),Rc(this),Re(19))};function fi(t){t.v!=null&&(k.clearTimeout(t.v),t.v=null)}function bf(t,e){var n=null;if(t.g==e){fi(t),Pc(t),t.g=null;var r=2}else if(ic(t.i,e))n=e.F,df(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ti(),he(r,new Wd(r,n)),ki(t)}else Tf(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&vw(t,e)||r==2&&Rc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:sn(t,5);break;case 4:sn(t,10);break;case 3:sn(t,6);break;default:sn(t,2)}}}function Sf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function sn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=we(t.pb,t);n||(n=new on("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||hi(n,"https"),Ri(n)),pw(n.toString(),r)}else Re(2);t.H=0,t.h&&t.h.za(e),Rf(t),vf(t)}v.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Re(2)):(this.l.info("Failed to ping google.com"),Re(1))};function Rf(t){if(t.H=0,t.ma=[],t.h){let e=ff(t.i);(e.length!=0||t.j.length!=0)&&(yd(t.ma,e),yd(t.ma,t.j),t.i.i.length=0,uc(t.j),t.j.length=0),t.h.ya()}}function Pf(t,e,n){var r=n instanceof on?Et(n):new on(n);if(r.g!="")e&&(r.g=e+"."+r.g),di(r,r.m);else{var s=k.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new on(null);r&&hi(i,r),e&&(i.g=e),s&&di(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&j(r,n,e),j(r,"VER",t.ra),Gr(t,r),r}function Cf(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new K(new zr({ob:n})):new K(t.va),e.Oa(t.J),e}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Df(){}v=Df.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function mi(){if(zn&&!(10<=Number(UI)))throw Error("Environmental error: no available transport.")}mi.prototype.g=function(t,e){return new Ne(t,e)};function Ne(t,e){ie.call(this),this.g=new wf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gn(this)}oe(Ne,ie);Ne.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Re(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Pf(t,null,t.Y),ki(t)};Ne.prototype.close=function(){Sc(this.g)};Ne.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gc(t),t=n);e.j.push(new lw(e.fb++,t)),e.H==3&&ki(e)};Ne.prototype.N=function(){this.g.h=null,delete this.j,Sc(this.g),delete this.g,Ne.$.N.call(this)};function kf(t){vc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(let n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}oe(kf,vc);function Nf(){Ec.call(this),this.status=1}oe(Nf,Ec);function Gn(t){this.g=t}oe(Gn,Df);Gn.prototype.Ba=function(){he(this.g,"a")};Gn.prototype.Aa=function(t){he(this.g,new kf(t))};Gn.prototype.za=function(t){he(this.g,new Nf)};Gn.prototype.ya=function(){he(this.g,"b")};function Ew(){this.blockSize=-1}function We(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(We,Ew);We.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $a(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}We.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)$a(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){$a(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){$a(this,r),s=0;break}}this.h=s,this.i+=e};We.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function z(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Tw={};function Cc(t){return-128<=t&&128>t?LI(t,function(e){return new z([e|0],0>e?-1:0)}):new z([t|0],0>t?-1:0)}function it(t){if(isNaN(t)||!isFinite(t))return Bn;if(0>t)return le(it(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=oc;return new z(e,0)}function xf(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return le(xf(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=it(Math.pow(e,8)),r=Bn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=it(Math.pow(e,i)),r=r.R(i).add(it(o))):(r=r.R(n),r=r.add(it(o)))}return r}var oc=4294967296,Bn=Cc(0),ac=Cc(1),Pd=Cc(16777216);v=z.prototype;v.ea=function(){if(Ge(this))return-le(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:oc+r)*e,e*=oc}return t};v.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vt(this))return"0";if(Ge(this))return"-"+le(this).toString(t);for(var e=it(Math.pow(t,6)),n=this,r="";;){var s=gi(n,e).g;n=pi(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,vt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};v.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ge(t){return t.h==-1}v.X=function(t){return t=pi(this,t),Ge(t)?-1:vt(t)?0:1};function le(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new z(n,~t.h).add(ac)}v.abs=function(){return Ge(this)?le(this):this};v.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new z(n,n[n.length-1]&-2147483648?-1:0)};function pi(t,e){return t.add(le(e))}v.R=function(t){if(vt(this)||vt(t))return Bn;if(Ge(this))return Ge(t)?le(this).R(le(t)):le(le(this).R(t));if(Ge(t))return le(this.R(le(t)));if(0>this.X(Pd)&&0>t.X(Pd))return it(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,li(n,2*r+2*s),n[2*r+2*s+1]+=i*c,li(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,li(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,li(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new z(n,0)};function li(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ar(t,e){this.g=t,this.h=e}function gi(t,e){if(vt(e))throw Error("division by zero");if(vt(t))return new Ar(Bn,Bn);if(Ge(t))return e=gi(le(t),e),new Ar(le(e.g),le(e.h));if(Ge(e))return e=gi(t,le(e)),new Ar(le(e.g),e.h);if(30<t.g.length){if(Ge(t)||Ge(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ac,r=e;0>=r.X(t);)n=Cd(n),r=Cd(r);var s=Fn(n,1),i=Fn(r,1);for(r=Fn(r,2),n=Fn(n,2);!vt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Fn(r,1),n=Fn(n,1)}return e=pi(t,s.R(e)),new Ar(s,e)}for(s=Bn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=it(n),o=i.R(e);Ge(o)||0<o.X(t);)n-=r,i=it(n),o=i.R(e);vt(i)&&(i=ac),s=s.add(i),t=pi(t,o)}return new Ar(s,t)}v.gb=function(t){return gi(this,t).h};v.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new z(n,this.h&t.h)};v.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new z(n,this.h|t.h)};v.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new z(n,this.h^t.h)};function Cd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new z(n,t.h)}function Fn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new z(s,t.h)}mi.prototype.createWebChannel=mi.prototype.g;Ne.prototype.send=Ne.prototype.u;Ne.prototype.open=Ne.prototype.m;Ne.prototype.close=Ne.prototype.close;Ai.NO_ERROR=0;Ai.TIMEOUT=8;Ai.HTTP_ERROR=6;Qd.COMPLETE="complete";Yd.EventType=Fr;Fr.OPEN="a";Fr.CLOSE="b";Fr.ERROR="c";Fr.MESSAGE="d";ie.prototype.listen=ie.prototype.O;K.prototype.listenOnce=K.prototype.P;K.prototype.getLastError=K.prototype.Sa;K.prototype.getLastErrorCode=K.prototype.Ia;K.prototype.getStatus=K.prototype.da;K.prototype.getResponseJson=K.prototype.Wa;K.prototype.getResponseText=K.prototype.ja;K.prototype.send=K.prototype.ha;K.prototype.setWithCredentials=K.prototype.Oa;We.prototype.digest=We.prototype.l;We.prototype.reset=We.prototype.reset;We.prototype.update=We.prototype.j;z.prototype.add=z.prototype.add;z.prototype.multiply=z.prototype.R;z.prototype.modulo=z.prototype.gb;z.prototype.compare=z.prototype.X;z.prototype.toNumber=z.prototype.ea;z.prototype.toString=z.prototype.toString;z.prototype.getBits=z.prototype.D;z.fromNumber=it;z.fromString=xf;var Of=Qe.createWebChannelTransport=function(){return new mi},Lf=Qe.getStatEventTarget=function(){return Ti()},Ni=Qe.ErrorCode=Ai,Vf=Qe.EventType=Qd,Mf=Qe.Event=an,Dc=Qe.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},mS=Qe.FetchXmlHttpFactory=zr,$r=Qe.WebChannel=Yd,Uf=Qe.XhrIo=K,Ff=Qe.Md5=We,cn=Qe.Integer=z;var qf="@firebase/firestore";var ae=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");var dr="10.7.2";var fn=new kt("@firebase/firestore");function Kr(){return fn.logLevel}function E(t,...e){if(fn.logLevel<=V.DEBUG){let n=e.map(gl);fn.debug(`Firestore (${dr}): ${t}`,...n)}}function ut(t,...e){if(fn.logLevel<=V.ERROR){let n=e.map(gl);fn.error(`Firestore (${dr}): ${t}`,...n)}}function Jn(t,...e){if(fn.logLevel<=V.WARN){let n=e.map(gl);fn.warn(`Firestore (${dr}): ${t}`,...n)}}function gl(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}function R(t="Unexpected state"){let e=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+t;throw ut(e),new Error(e)}function B(t,e){t||R()}function N(t,e){return t}var m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},I=class extends ce{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var xe=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};var Mi=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Oc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ae.UNAUTHENTICATED))}shutdown(){}},Lc=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},Vc=class{constructor(e){this.t=e,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i,s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve(),i=new xe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xe,e.enqueueRetryable(()=>s(this.currentUser))};let o=()=>{let c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){let c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xe)}},0),o()}getToken(){let e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new Mi(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new ae(e)}},Mc=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},Uc=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Mc(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Fc=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},qc=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){let r=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);let o=i.token!==this.R;return this.R=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};let s=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){let i=this.A.getImmediate({optional:!0});i?s(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new Fc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function Aw(t){let e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}var Ui=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let s=Aw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}};function q(t,e){return t<e?-1:t>e?1:0}function Xn(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}var de=class t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return t.fromMillis(Date.now())}static fromDate(e){return t.fromMillis(e.getTime())}static fromMillis(e){let n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var D=class t{constructor(e){this.timestamp=e}static fromTimestamp(e){return new t(e)}static min(){return new t(new de(0,0))}static max(){return new t(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Fi=class t{constructor(e,n,r){n===void 0?n=0:n>e.length&&R(),r===void 0?r=e.length-n:r>e.length-n&&R(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return t.comparator(this,e)===0}child(e){let n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){let r=Math.min(e.length,n.length);for(let s=0;s<r;s++){let i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}},G=class t extends Fi{construct(e,n,r){return new t(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let n=[];for(let r of e){if(r.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new t(n)}static emptyPath(){return new t([])}},bw=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Oe=class t extends Fi{construct(e,n,r){return new t(e,n,r)}static isValidIdentifier(e){return bw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new t(["__name__"])}static fromServerFormat(e){let n=[],r="",s=0,i=()=>{if(r.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""},o=!1;for(;s<e.length;){let a=e[s];if(a==="\\"){if(s+1===e.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new t(n)}static emptyPath(){return new t([])}};var A=class t{constructor(e){this.path=e}static fromPath(e){return new t(G.fromString(e))}static fromName(e){return new t(G.fromString(e).popFirst(5))}static empty(){return new t(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&G.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return G.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new t(new G(e.slice()))}};var Bc=class{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}};Bc.UNKNOWN_ID=-1;function Sw(t,e){let n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=D.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new mn(s,A.empty(),e)}function Rw(t){return new mn(t.readTime,t.key,-1)}var mn=class t{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new t(D.min(),A.empty(),-1)}static max(){return new t(D.max(),A.empty(),-1)}};function Pw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=A.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}var Cw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",zc=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function gs(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Cw)throw t;E("LocalStore","Unexpectedly lost primary lease")}var g=class t{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{let n=e();return n instanceof t?n:t.resolve(n)}catch(n){return t.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):t.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):t.reject(n)}static resolve(e){return new t((n,r)=>{n(e)})}static reject(e){return new t((n,r)=>{r(e)})}static waitFor(e){return new t((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=t.resolve(!1);for(let r of e)n=n.next(s=>s?t.resolve(s):r());return n}static forEach(e,n){let r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new t((r,s)=>{let i=e.length,o=new Array(i),a=0;for(let c=0;c<i;c++){let u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new t((r,s)=>{let i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}};var jc=class t{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new xe,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new dn(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{let s=_l(r.target.error);this.V.reject(new dn(e,s))}}static open(e,n,r,s){try{return new t(n,e.transaction(s,r))}catch(i){throw new dn(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(E("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let n=this.transaction.objectStore(e);return new $c(n)}},qi=class t{constructor(e,n,r){this.name=e,this.version=n,this.p=r,t.S($())===12.2&&ut("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return E("SimpleDb","Removing database:",e),un(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ei())return!1;if(t.C())return!0;let e=$(),n=t.S(e),r=0<n&&n<10,s=t.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){let n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){let n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(E("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{let s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{let o=i.target.result;n(o)},s.onblocked=()=>{r(new dn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{let o=i.target.error;o.name==="VersionError"?r(new I(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new I(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new dn(e,o))},s.onupgradeneeded=i=>{E("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);let o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{E("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){let i=n==="readonly",o=0;for(;;){++o;try{this.db=await this.O(e);let a=jc.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),g.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){let c=a,u=c.name!=="FirebaseError"&&o<3;if(E("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}},Gc=class{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return un(this.k.delete())}},dn=class extends I{constructor(e,n){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}};function _s(t){return t.name==="IndexedDbTransactionError"}var $c=class{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(E("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(E("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),un(r)}add(e){return E("SimpleDb","ADD",this.store.name,e,e),un(this.store.add(e))}get(e){return un(this.store.get(e)).next(n=>(n===void 0&&(n=null),E("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return E("SimpleDb","DELETE",this.store.name,e),un(this.store.delete(e))}count(){return E("SimpleDb","COUNT",this.store.name),un(this.store.count())}W(e,n){let r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){let i=s.getAll(r.range);return new g((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{let i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){let r=this.store.getAll(e,n===null?void 0:n);return new g((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){E("SimpleDb","DELETE ALL",this.store.name);let r=this.options(e,n);r.J=!1;let s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);let s=this.cursor(r);return this.G(s,n)}Z(e){let n=this.cursor({});return new g((r,s)=>{n.onerror=i=>{let o=_l(i.target.error);s(o)},n.onsuccess=i=>{let o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){let r=[];return new g((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{let a=o.target.result;if(!a)return void s();let c=new Gc(a),u=n(a.primaryKey,a.value,c);if(u instanceof g){let l=u.catch(h=>(c.done(),g.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>g.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){let r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}};function un(t){return new g((e,n)=>{t.onsuccess=r=>{let s=r.target.result;e(s)},t.onerror=r=>{let s=_l(r.target.error);n(s)}})}var Bf=!1;function _l(t){let e=qi.S($());if(e>=12.2&&e<13){let n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){let r=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Bf||(Bf=!0,setTimeout(()=>{throw r},0)),r}}return t}var es=class{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}};es._e=-1;function ys(t){return t==null}function ts(t){return t===0&&1/t==-1/0}function Dw(t){return typeof t=="number"&&Number.isInteger(t)&&!ts(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}var kw=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],AS=[...kw,"documentOverlays"],Nw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xw=Nw,bS=[...xw,"indexConfiguration","indexState","indexEntries"];function zf(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vn(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _m(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}var W=class t{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){let s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){let e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wn(this.root,e,this.comparator,!0)}},Wn=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},at=class t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??t.RED,this.left=s??t.EMPTY,this.right=i??t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this,i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();let e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}};at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Te=class t{constructor(e){this.comparator=e,this.data=new W(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bi(this.data.getIterator())}getIteratorFrom(e){return new Bi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof t)||this.size!==e.size)return!1;let n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){let s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(n=>{e.push(n)}),e}toString(){let e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){let n=new t(this.comparator);return n.data=e,n}},Bi=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Ke=class t{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new t([])}unionWith(e){let n=new Te(Oe.comparator);for(let r of this.fields)n=n.add(r);for(let r of e)n=n.add(r);return new t(n.toArray())}covers(e){for(let n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,(n,r)=>n.isEqual(r))}};var zi=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Ce=class t{constructor(e){this.binaryString=e}static fromBase64String(e){let n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zi("Invalid base64 string: "+i):i}}(e);return new t(n)}static fromUint8Array(e){let n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){let r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ce.EMPTY_BYTE_STRING=new Ce("");var Ow=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(t){if(B(!!t),typeof t=="string"){let e=0,n=Ow.exec(t);if(B(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}let r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ft(t){return typeof t=="string"?Ce.fromBase64String(t):Ce.fromUint8Array(t)}function yl(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Il(t){let e=t.mapValue.fields.__previous_value__;return yl(e)?Il(e):e}function ns(t){let e=Ut(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}var Kc=class{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}},ji=class t{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new t("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}};var xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yl(t)?4:ym(t)?9007199254740991:10:R()}function lt(t,e){if(t===e)return!0;let n=pn(t);if(n!==pn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ns(t).isEqual(ns(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;let o=Ut(s.timestampValue),a=Ut(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ft(s.bytesValue).isEqual(Ft(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return H(s.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return H(s.integerValue)===H(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){let o=H(s.doubleValue),a=H(i.doubleValue);return o===a?ts(o)===ts(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Xn(t.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:return function(s,i){let o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(zf(o)!==zf(a))return!1;for(let c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!lt(o[c],a[c])))return!1;return!0}(t,e);default:return R()}}function rs(t,e){return(t.values||[]).find(n=>lt(n,e))!==void 0}function Zn(t,e){if(t===e)return 0;let n=pn(t),r=pn(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(i,o){let a=H(i.integerValue||i.doubleValue),c=H(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return jf(t.timestampValue,e.timestampValue);case 4:return jf(ns(t),ns(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(i,o){let a=Ft(i),c=Ft(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){let a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){let l=q(a[u],c[u]);if(l!==0)return l}return q(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){let a=q(H(i.latitude),H(o.latitude));return a!==0?a:q(H(i.longitude),H(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){let a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){let l=Zn(a[u],c[u]);if(l)return l}return q(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===xi.mapValue&&o===xi.mapValue)return 0;if(i===xi.mapValue)return 1;if(o===xi.mapValue)return-1;let a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){let d=q(c[h],l[h]);if(d!==0)return d;let f=Zn(a[c[h]],u[l[h]]);if(f!==0)return f}return q(c.length,l.length)}(t.mapValue,e.mapValue);default:throw R()}}function jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);let n=Ut(t),r=Ut(e),s=q(n.seconds,r.seconds);return s!==0?s:q(n.nanos,r.nanos)}function er(t){return Hc(t)}function Hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){let r=Ut(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ft(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return A.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(let i of n.values||[])s?s=!1:r+=",",r+=Hc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){let r=Object.keys(n.fields||{}).sort(),s="{",i=!0;for(let o of r)i?i=!1:s+=",",s+=`${o}:${Hc(n.fields[o])}`;return s+"}"}(t.mapValue):R()}function Gf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function wl(t){return!!t&&"arrayValue"in t}function $f(t){return!!t&&"nullValue"in t}function Kf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Li(t){return!!t&&"mapValue"in t}function Qr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return vn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qr(r)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ym(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var ke=class t{constructor(e){this.value=e}static empty(){return new t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Li(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(n)}setAll(e){let n=Oe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){let c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qr(o):s.push(a.lastSegment())});let i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){let n=this.field(e.popLast());Li(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Li(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vn(n,(s,i)=>e[s]=i);for(let s of r)delete e[s]}clone(){return new t(Qr(this.value))}};function Im(t){let e=[];return vn(t.fields,(n,r)=>{let s=new Oe([n]);if(Li(r)){let i=Im(r.mapValue).fields;if(i.length===0)e.push(s);else for(let o of i)e.push(s.child(o))}else e.push(s)}),new Ke(e)}var Ve=class t{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new t(e,0,D.min(),D.min(),D.min(),ke.empty(),0)}static newFoundDocument(e,n,r,s){return new t(e,1,n,D.min(),r,s,0)}static newNoDocument(e,n){return new t(e,2,n,D.min(),D.min(),ke.empty(),0)}static newUnknownDocument(e,n){return new t(e,3,n,D.min(),D.min(),ke.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var tr=class{constructor(e,n){this.position=e,this.inclusive=n}};function Hf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){let i=e[s],o=t.position[s];if(i.field.isKeyField()?r=A.comparator(A.fromName(o.referenceValue),n.key):r=Zn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lt(t.position[n],e.position[n]))return!1;return!0}var gn=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function Lw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}var Gi=class{},te=class t extends Gi{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Yc(e,n,r):n==="array-contains"?new Zc(e,r):n==="in"?new eu(e,r):n==="not-in"?new tu(e,r):n==="array-contains-any"?new nu(e,r):new t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Jc(e,r):new Xc(e,r)}matches(e){let n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zn(n,this.value)):n!==null&&pn(this.value)===pn(n)&&this.matchesComparison(Zn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Ye=class t extends Gi{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new t(e,n)}matches(e){return wm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}};function wm(t){return t.op==="and"}function vm(t){return Vw(t)&&wm(t)}function Vw(t){for(let e of t.filters)if(e instanceof Ye)return!1;return!0}function Qc(t){if(t instanceof te)return t.field.canonicalString()+t.op.toString()+er(t.value);if(vm(t))return t.filters.map(e=>Qc(e)).join(",");{let e=t.filters.map(n=>Qc(n)).join(",");return`${t.op}(${e})`}}function Em(t,e){return t instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&lt(r.value,s.value)}(t,e):t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Em(o,s.filters[a]),!0):!1}(t,e):void R()}function Tm(t){return t instanceof te?function(n){return`${n.field.canonicalString()} ${n.op} ${er(n.value)}`}(t):t instanceof Ye?function(n){return n.op.toString()+" {"+n.getFilters().map(Tm).join(" ,")+"}"}(t):"Filter"}var Yc=class extends te{constructor(e,n,r){super(e,n,r),this.key=A.fromName(r.referenceValue)}matches(e){let n=A.comparator(e.key,this.key);return this.matchesComparison(n)}},Jc=class extends te{constructor(e,n){super(e,"in",n),this.keys=Am("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}},Xc=class extends te{constructor(e,n){super(e,"not-in",n),this.keys=Am("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}};function Am(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>A.fromName(r.referenceValue))}var Zc=class extends te{constructor(e,n){super(e,"array-contains",n)}matches(e){let n=e.data.field(this.field);return wl(n)&&rs(n.arrayValue,this.value)}},eu=class extends te{constructor(e,n){super(e,"in",n)}matches(e){let n=e.data.field(this.field);return n!==null&&rs(this.value.arrayValue,n)}},tu=class extends te{constructor(e,n){super(e,"not-in",n)}matches(e){if(rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let n=e.data.field(this.field);return n!==null&&!rs(this.value.arrayValue,n)}},nu=class extends te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){let n=e.data.field(this.field);return!(!wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rs(this.value.arrayValue,r))}};var ru=class{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}};function Qf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ru(t,e,n,r,s,i,o)}function vl(t){let e=N(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ys(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>er(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>er(r)).join(",")),e.ce=n}return e.ce}function El(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Em(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wf(t.startAt,e.startAt)&&Wf(t.endAt,e.endAt)}function su(t){return A.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}var qt=class{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}};function Mw(t,e,n,r,s,i,o,a){return new qt(t,e,n,r,s,i,o,a)}function Tl(t){return new qt(t)}function Yf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bm(t){return t.collectionGroup!==null}function Yr(t){let e=N(t);if(e.le===null){e.le=[];let n=new Set;for(let i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Te(Oe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new gn(i,r))}),n.has(Oe.keyField().canonicalString())||e.le.push(new gn(Oe.keyField(),r))}return e.le}function ct(t){let e=N(t);return e.he||(e.he=Uw(e,Yr(t))),e.he}function Uw(t,e){if(t.limitType==="F")return Qf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{let i=s.dir==="desc"?"asc":"desc";return new gn(s.field,i)});let n=t.endAt?new tr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tr(t.startAt.position,t.startAt.inclusive):null;return Qf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function iu(t,e){let n=t.filters.concat([e]);return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $i(t,e,n){return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yo(t,e){return El(ct(t),ct(e))&&t.limitType===e.limitType}function Sm(t){return`${vl(ct(t))}|lt:${t.limitType}`}function $n(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Tm(s)).join(", ")}]`),ys(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>er(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>er(s)).join(",")),`Target(${r})`}(ct(t))}; limitType=${t.limitType})`}function Io(t,e){return e.isFoundDocument()&&function(r,s){let i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):A.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(let i of Yr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(let i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){let u=Hf(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Yr(r),s)||r.endAt&&!function(o,a,c){let u=Hf(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Yr(r),s))}(t,e)}function Fw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rm(t){return(e,n)=>{let r=!1;for(let s of Yr(t)){let i=qw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qw(t,e,n){let r=t.field.isKeyField()?A.comparator(e.key,n.key):function(i,o,a){let c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Zn(c,u):R()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}var Bt=class{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){let n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(let[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){let r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){let n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vn(this.inner,(n,r)=>{for(let[s,i]of r)e(s,i)})}isEmpty(){return _m(this.inner)}size(){return this.innerSize}};var Bw=new W(A.comparator);function Tt(){return Bw}var Pm=new W(A.comparator);function Wr(...t){let e=Pm;for(let n of t)e=e.insert(n.key,n);return e}function Cm(t){let e=Pm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ln(){return Jr()}function Dm(){return Jr()}function Jr(){return new Bt(t=>t.toString(),(t,e)=>t.isEqual(e))}var zw=new W(A.comparator),jw=new Te(A.comparator);function M(...t){let e=jw;for(let n of t)e=e.add(n);return e}var Gw=new Te(q);function $w(){return Gw}function km(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ts(e)?"-0":e}}function Nm(t){return{integerValue:""+t}}function Kw(t,e){return Dw(e)?Nm(e):km(t,e)}var nr=class{constructor(){this._=void 0}};function Hw(t,e,n){return t instanceof rr?function(s,i){let o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yl(i)&&(i=Il(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof zt?Om(t,e):t instanceof _n?Lm(t,e):function(s,i){let o=xm(s,i),a=Jf(o)+Jf(s.Ie);return Wc(o)&&Wc(s.Ie)?Nm(a):km(s.serializer,a)}(t,e)}function Ww(t,e,n){return t instanceof zt?Om(t,e):t instanceof _n?Lm(t,e):n}function xm(t,e){return t instanceof sr?function(r){return Wc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}var rr=class extends nr{},zt=class extends nr{constructor(e){super(),this.elements=e}};function Om(t,e){let n=Vm(e);for(let r of t.elements)n.some(s=>lt(s,r))||n.push(r);return{arrayValue:{values:n}}}var _n=class extends nr{constructor(e){super(),this.elements=e}};function Lm(t,e){let n=Vm(e);for(let r of t.elements)n=n.filter(s=>!lt(s,r));return{arrayValue:{values:n}}}var sr=class extends nr{constructor(e,n){super(),this.serializer=e,this.Ie=n}};function Jf(t){return H(t.integerValue||t.doubleValue)}function Vm(t){return wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}var ou=class{constructor(e,n){this.field=e,this.transform=n}};function Qw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof zt&&s instanceof zt||r instanceof _n&&s instanceof _n?Xn(r.elements,s.elements,lt):r instanceof sr&&s instanceof sr?lt(r.Ie,s.Ie):r instanceof rr&&s instanceof rr}(t.transform,e.transform)}var au=class{constructor(e,n){this.version=e,this.transformResults=n}},$e=class t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new t}static exists(e){return new t(void 0,e)}static updateTime(e){return new t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Vi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}var ir=class{};function Mm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ss(t.key,$e.none()):new yn(t.key,t.data,$e.none());{let n=t.data,r=ke.empty(),s=new Te(Oe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ht(t.key,r,new Ke(s.toArray()),$e.none())}}function Yw(t,e,n){t instanceof yn?function(s,i,o){let a=s.value.clone(),c=Zf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ht?function(s,i,o){if(!Vi(s.precondition,i))return void i.convertToUnknownDocument(o.version);let a=Zf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Um(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xr(t,e,n,r){return t instanceof yn?function(i,o,a,c){if(!Vi(i.precondition,o))return a;let u=i.value.clone(),l=em(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ht?function(i,o,a,c){if(!Vi(i.precondition,o))return a;let u=em(i.fieldTransforms,c,o),l=o.data;return l.setAll(Um(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Vi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Jw(t,e){let n=null;for(let r of t.fieldTransforms){let s=e.data.field(r.field),i=xm(r.transform,s||null);i!=null&&(n===null&&(n=ke.empty()),n.set(r.field,i))}return n||null}function Xf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xn(r,s,(i,o)=>Qw(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}var yn=class extends ir{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}},ht=class extends ir{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function Um(t){let e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=t.data.field(n);e.set(n,r)}}),e}function Zf(t,e,n){let r=new Map;B(t.length===n.length);for(let s=0;s<n.length;s++){let i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Ww(o,a,n[s]))}return r}function em(t,e,n){let r=new Map;for(let s of t){let i=s.transform,o=n.data.field(s.field);r.set(s.field,Hw(i,o,e))}return r}var ss=class extends ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Ki=class extends ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var cu=class{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){let r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){let i=this.mutations[s];i.key.isEqual(e.key)&&Yw(i,e,r[s])}}applyToLocalView(e,n){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xr(r,e,n,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(n=Xr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){let r=Dm();return this.mutations.forEach(s=>{let i=e.get(s.key),o=i.overlayedDocument,a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;let c=Mm(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(D.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),M())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,(n,r)=>Xf(n,r))&&Xn(this.baseMutations,e.baseMutations,(n,r)=>Xf(n,r))}},uu=class t{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){B(e.mutations.length===r.length);let s=function(){return zw}(),i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new t(e,n,r,s)}};var lu=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var hu=class{constructor(e,n){this.count=e,this.unchangedNames=n}};var Z,F;function Fm(t){switch(t){default:return R();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function qm(t){if(t===void 0)return ut("GRPC error has no .code"),m.UNKNOWN;switch(t){case Z.OK:return m.OK;case Z.CANCELLED:return m.CANCELLED;case Z.UNKNOWN:return m.UNKNOWN;case Z.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case Z.INTERNAL:return m.INTERNAL;case Z.UNAVAILABLE:return m.UNAVAILABLE;case Z.UNAUTHENTICATED:return m.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case Z.NOT_FOUND:return m.NOT_FOUND;case Z.ALREADY_EXISTS:return m.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return m.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case Z.ABORTED:return m.ABORTED;case Z.OUT_OF_RANGE:return m.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return m.UNIMPLEMENTED;case Z.DATA_LOSS:return m.DATA_LOSS;default:return R()}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";var tm=null;function Xw(){return new TextEncoder}var Zw=new cn([4294967295,4294967295],0);function nm(t){let e=Xw().encode(t),n=new Ff;return n.update(e),new Uint8Array(n.digest())}function rm(t){let e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cn([n,r],0),new cn([s,i],0)]}var du=class t{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hn(`Invalid padding: ${n}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hn(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=cn.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(cn.fromNumber(r)));return s.compare(Zw)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let n=nm(e),[r,s]=rm(n);for(let i=0;i<this.hashCount;i++){let o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){let s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new t(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;let n=nm(e),[r,s]=rm(n);for(let i=0;i<this.hashCount;i++){let o=this.de(r,s,i);this.Re(o)}}Re(e){let n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}},hn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Hi=class t{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){let s=new Map;return s.set(e,is.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new t(D.min(),s,new W(q),Tt(),M())}},is=class t{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new t(r,n,M(),M(),M())}};var Qn=class{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}},Wi=class{constructor(e,n){this.targetId=e,this.fe=n}},Qi=class{constructor(e,n,r=Ce.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}},Yi=class{constructor(){this.ge=0,this.pe=im(),this.ye=Ce.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=M(),n=M(),r=M();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:R()}}),new is(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=im()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,B(this.ge>=0)}Be(){this.Se=!0,this.we=!0}},fu=class{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tt(),this.Qe=sm(),this.Ke=new W(q)}$e(e){for(let n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(let n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{let r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:R()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){let n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){let i=s.target;if(su(i))if(r===0){let o=new A(i.path);this.We(n,o,Ve.newNoDocument(o,D.min()))}else B(r===1);else{let o=this.Ze(n);if(o!==r){let a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);let u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}tm?.tt(function(l,h,d,f,_){var y,p,w,b,S,P;let x={localCacheCount:l,existenceFilterCount:h.count,databaseId:d.database,projectId:d.projectId},U=h.unchangedNames;return U&&(x.bloomFilter={applied:_===0,hashCount:(y=U?.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(b=(w=(p=U?.bits)===null||p===void 0?void 0:p.bitmap)===null||w===void 0?void 0:w.length)!==null&&b!==void 0?b:0,padding:(P=(S=U?.bits)===null||S===void 0?void 0:S.padding)!==null&&P!==void 0?P:0,mightContain:be=>{var Se;return(Se=f?.mightContain(be))!==null&&Se!==void 0&&Se}}),x}(o,e.fe,this.Le.nt(),a,c))}}}}Xe(e){let n=e.fe.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n,o,a;try{o=Ft(r).toUint8Array()}catch(c){if(c instanceof zi)return Jn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new du(o,s,i)}catch(c){return Jn(c instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){let r=this.Le.getRemoteKeysForTarget(n),s=0;return r.forEach(i=>{let o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){let n=new Map;this.ke.forEach((i,o)=>{let a=this.Ye(o);if(a){if(i.current&&su(a.target)){let c=new A(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Ve.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=M();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{let u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));let s=new Hi(e,n,this.Ke,this.qe,r);return this.qe=Tt(),this.Qe=sm(),this.Ke=new W(q),s}Ue(e,n){if(!this.je(e))return;let r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;let s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){let n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Yi,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Te(q),this.Qe=this.Qe.insert(e,n)),n}je(e){let n=this.Ye(e)!==null;return n||E("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){let n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Yi),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}};function sm(){return new W(A.comparator)}function im(){return new W(A.comparator)}var ev=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nv=(()=>({and:"AND",or:"OR"}))(),mu=class{constructor(e,n){this.databaseId=e,this.useProto3Json=n}};function pu(t,e){return t.useProto3Json||ys(e)?e:{value:e}}function Ji(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rv(t,e){return Ji(t,e.toTimestamp())}function Le(t){return B(!!t),D.fromTimestamp(function(n){let r=Ut(n);return new de(r.seconds,r.nanos)}(t))}function Al(t,e){return gu(t,e).canonicalString()}function gu(t,e){let n=function(s){return new G(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zm(t){let e=G.fromString(t);return B(Wm(e)),e}function Xi(t,e){return Al(t.databaseId,e.path)}function Zr(t,e){let n=zm(e);if(n.get(1)!==t.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new A(Gm(n))}function jm(t,e){return Al(t.databaseId,e)}function sv(t){let e=zm(t);return e.length===4?G.emptyPath():Gm(e)}function _u(t){return new G(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gm(t){return B(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function om(t,e,n){return{name:Xi(t,e),fields:n.value.mapValue.fields}}function iv(t,e){return"found"in e?function(r,s){B(!!s.found),s.found.name,s.found.updateTime;let i=Zr(r,s.found.name),o=Le(s.found.updateTime),a=s.found.createTime?Le(s.found.createTime):D.min(),c=new ke({mapValue:{fields:s.found.fields}});return Ve.newFoundDocument(i,o,a,c)}(t,e):"missing"in e?function(r,s){B(!!s.missing),B(!!s.readTime);let i=Zr(r,s.missing),o=Le(s.readTime);return Ve.newNoDocument(i,o)}(t,e):R()}function ov(t,e){let n;if("targetChange"in e){e.targetChange;let r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(B(l===void 0||typeof l=="string"),Ce.fromBase64String(l||"")):(B(l===void 0||l instanceof Uint8Array),Ce.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){let l=u.code===void 0?m.UNKNOWN:qm(u.code);return new I(l,u.message||"")}(o);n=new Qi(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let s=Zr(t,r.document.name),i=Le(r.document.updateTime),o=r.document.createTime?Le(r.document.createTime):D.min(),a=new ke({mapValue:{fields:r.document.fields}}),c=Ve.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Qn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let s=Zr(t,r.document),i=r.readTime?Le(r.readTime):D.min(),o=Ve.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Qn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let s=Zr(t,r.document),i=r.removedTargetIds||[];n=new Qn([],i,s,null)}else{if(!("filter"in e))return R();{e.filter;let r=e.filter;r.targetId;let{count:s=0,unchangedNames:i}=r,o=new hu(s,i),a=r.targetId;n=new Wi(a,o)}}return n}function $m(t,e){let n;if(e instanceof yn)n={update:om(t,e.key,e.value)};else if(e instanceof ss)n={delete:Xi(t,e.key)};else if(e instanceof ht)n={update:om(t,e.key,e.data),updateMask:pv(e.fieldMask)};else{if(!(e instanceof Ki))return R();n={verify:Xi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){let a=o.transform;if(a instanceof rr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _n)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw R()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:R()}(t,e.precondition)),n}function av(t,e){return t&&t.length>0?(B(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Le(s.updateTime):Le(i);return o.isEqual(D.min())&&(o=Le(i)),new au(o,s.transformResults||[])}(n,e))):[]}function cv(t,e){return{documents:[jm(t,e.path)]}}function uv(t,e){let n={structuredQuery:{}},r=e.path,s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jm(t,s);let i=function(u){if(u.length!==0)return Hm(Ye.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);let o=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:Kn(d.field),direction:dv(d.dir)}}(l))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);let a=pu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:s}}function lv(t){let e=sv(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,s=null;if(r>0){B(r===1);let l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(h){let d=Km(h);return d instanceof Ye&&vm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new gn(Hn(_.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ys(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){let d=!!h.before,f=h.values||[];return new tr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){let d=!h.before,f=h.values||[];return new tr(f,d)}(n.endAt)),Mw(e,s,o,i,a,"F",c,u)}function hv(t,e){let n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Km(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":let r=Hn(n.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":let s=Hn(n.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=Hn(n.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=Hn(n.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(t):t.fieldFilter!==void 0?function(n){return te.create(Hn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ye.create(n.compositeFilter.filters.map(r=>Km(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return R()}}(n.compositeFilter.op))}(t):R()}function dv(t){return ev[t]}function fv(t){return tv[t]}function mv(t){return nv[t]}function Kn(t){return{fieldPath:t.canonicalString()}}function Hn(t){return Oe.fromServerFormat(t.fieldPath)}function Hm(t){return t instanceof te?function(n){if(n.op==="=="){if(Kf(n.value))return{unaryFilter:{field:Kn(n.field),op:"IS_NAN"}};if($f(n.value))return{unaryFilter:{field:Kn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kf(n.value))return{unaryFilter:{field:Kn(n.field),op:"IS_NOT_NAN"}};if($f(n.value))return{unaryFilter:{field:Kn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(n.field),op:fv(n.op),value:n.value}}}(t):t instanceof Ye?function(n){let r=n.getFilters().map(s=>Hm(s));return r.length===1?r[0]:{compositeFilter:{op:mv(n.op),filters:r}}}(t):R()}function pv(t){let e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}var os=class t{constructor(e,n,r,s,i=D.min(),o=D.min(),a=Ce.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var yu=class{constructor(e){this.ct=e}};function gv(t){let e=lv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$i(e,e.limit,"L"):e}var Zi=class{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(H(e.integerValue));else if("doubleValue"in e){let r=H(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),ts(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Ft(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){let r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?ym(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):R()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){let r=e.fields||{};this.Et(n,55);for(let s of Object.keys(r))this.Rt(s,n),this.It(r[s],n)}wt(e,n){let r=e.values||[];this.Et(n,50);for(let s of r)this.It(s,n)}gt(e,n){this.Et(n,37),A.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}};Zi.bt=new Zi;var Iu=class{constructor(){this._n=new wu}addToCollectionParentIndex(e,n){return this._n.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return g.resolve()}deleteFieldIndex(e,n){return g.resolve()}deleteAllFieldIndexes(e){return g.resolve()}createTargetIndexes(e,n){return g.resolve()}getDocumentsMatchingTarget(e,n){return g.resolve(null)}getIndexType(e,n){return g.resolve(0)}getFieldIndexes(e,n){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,n){return g.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,n){return g.resolve(mn.min())}updateCollectionGroup(e,n,r){return g.resolve()}updateIndexEntries(e,n){return g.resolve()}},wu=class{constructor(){this.index={}}add(e){let n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Te(G.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){let n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Te(G.comparator)).toArray()}};var RS=new Uint8Array(0);var ot=class t{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(41943040,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);var as=class t{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new t(0)}static Bn(){return new t(-1)}};var vu=class{constructor(){this.changes=new Bt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();let r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Eu=class{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}};var Tu=class{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xr(r.mutation,s,Ke.empty(),de.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,M()).next(()=>r))}getLocalViewOfDocuments(e,n,r=M()){let s=ln();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Wr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){let r=ln();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,M()))}populateOverlays(e,n,r){let s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tt(),o=Jr(),a=function(){return Jr()}();return n.forEach((c,u)=>{let l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof ht)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Xr(l.mutation,u,l.mutation.getFieldMask(),de.now())):o.set(u.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Eu(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){let r=Jr(),s=new W((o,a)=>o-a),i=M();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(let a of o)a.keys().forEach(c=>{let u=n.get(c);if(u===null)return;let l=r.get(c)||Ke.empty();l=a.applyToLocalView(u,l),r.set(c,l);let h=(s.get(a.batchId)||M()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{let o=[],a=s.getReverseIterator();for(;a.hasNext();){let c=a.getNext(),u=c.key,l=c.value,h=Dm();l.forEach(d=>{if(!i.has(d)){let f=Mm(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return A.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{let o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):g.resolve(ln()),a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,M())).next(l=>({batchId:a,changes:Cm(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new A(n)).next(r=>{let s=Wr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){let i=n.collectionGroup,o=Wr();return this.indexManager.getCollectionParents(e,i).next(a=>g.forEach(a,c=>{let u=function(h,d){return new qt(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{let l=u.getKey();o.get(l)===null&&(o=o.insert(l,Ve.newInvalidDocument(l)))});let a=Wr();return o.forEach((c,u)=>{let l=i.get(c);l!==void 0&&Xr(l.mutation,u,Ke.empty(),de.now()),Io(n,u)&&(a=a.insert(c,u))}),a})}};var Au=class{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return g.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Le(s.createTime)}}(n)),g.resolve()}getNamedQuery(e,n){return g.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:gv(s.bundledQuery),readTime:Le(s.readTime)}}(n)),g.resolve()}};var bu=class{constructor(){this.overlays=new W(A.comparator),this.hr=new Map}getOverlay(e,n){return g.resolve(this.overlays.get(n))}getOverlays(e,n){let r=ln();return g.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),g.resolve()}removeOverlaysForBatchId(e,n,r){let s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),g.resolve()}getOverlaysForCollection(e,n,r){let s=ln(),i=n.length+1,o=new A(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){let c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return g.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new W((u,l)=>u-l),o=this.overlays.getIterator();for(;o.hasNext();){let u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=ln(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}let a=ln(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return g.resolve(a)}ht(e,n,r){let s=this.overlays.get(r.key);if(s!==null){let o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lu(n,r));let i=this.hr.get(n);i===void 0&&(i=M(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}};var cs=class{constructor(){this.Pr=new Te(ee.Ir),this.Tr=new Te(ee.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){let r=new ee(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ee(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){let n=new A(new G([])),r=new ee(n,e),s=new ee(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let n=new A(new G([])),r=new ee(n,e),s=new ee(n,e+1),i=M();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){let n=new ee(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}},ee=class{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return A.comparator(e.key,n.key)||q(e.pr,n.pr)}static Er(e,n){return q(e.pr,n.pr)||A.comparator(e.key,n.key)}};var Su=class{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Te(ee.Ir)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new cu(i,n,r,s);this.mutationQueue.push(o);for(let a of s)this.wr=this.wr.add(new ee(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){let r=n+1,s=this.br(r),i=s<0?0:s;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){let r=new ee(n,0),s=new ee(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{let a=this.Sr(o.pr);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Te(q);return n.forEach(s=>{let i=new ee(s,0),o=new ee(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),g.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){let r=n.path,s=r.length+1,i=r;A.isDocumentKey(i)||(i=i.child(""));let o=new ee(new A(i),0),a=new Te(q);return this.wr.forEachWhile(c=>{let u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),g.resolve(this.Dr(a))}Dr(e){let n=[];return e.forEach(r=>{let s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){B(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return g.forEach(n.mutations,s=>{let i=new ee(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){let r=new ee(n,0),s=this.wr.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){let n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}};var Ru=class{constructor(e){this.vr=e,this.docs=function(){return new W(A.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){let r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){let r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=Tt();return n.forEach(s=>{let i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ve.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tt(),o=n.path,a=new A(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){let{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Pw(Rw(l),r)<=0||(s.has(l.key)||Io(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(e,n,r,s){R()}Fr(e,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Pu(this)}getSize(e){return g.resolve(this.size)}},Pu=class extends vu{constructor(e){super(),this.ar=e}applyChanges(e){let n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),g.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}};var Cu=class{constructor(e){this.persistence=e,this.Mr=new Bt(n=>vl(n),El),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cs,this.targetCount=0,this.Br=as.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),g.resolve()}qn(e){this.Mr.set(e.target,e);let n=e.targetId;n>this.highestTargetId&&(this.Br=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.qn(n),g.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,r){let s=0,i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){let r=this.Mr.get(n)||null;return g.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),g.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);let s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),g.resolve()}getMatchingKeysForTargetId(e,n){let r=this.Nr.gr(n);return g.resolve(r)}containsKey(e,n){return g.resolve(this.Nr.containsKey(n))}};var Du=class{constructor(e,n){this.Lr={},this.overlays={},this.kr=new es(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Cu(this),this.indexManager=new Iu,this.remoteDocumentCache=function(s){return new Ru(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yu(n),this.$r=new Au(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bu,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Su(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){E("MemoryPersistence","Starting transaction:",e);let s=new ku(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return g.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}},ku=class extends zc{constructor(e){super(),this.currentSequenceNumber=e}},Nu=class t{constructor(e){this.persistence=e,this.zr=new cs,this.jr=null}static Hr(e){return new t(e)}get Jr(){if(this.jr)return this.jr;throw R()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),g.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),g.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){let n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Jr,r=>{let s=A.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,D.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return g.or([()=>g.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}};var xu=class t{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=M(),s=M();for(let i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new t(e,n.fromCache,r,s)}};var Ou=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Lu=class{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return td()?8:qi.v($())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){let i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;let o=new Ou;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Kr()<=V.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",$n(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),g.resolve()):(Kr()<=V.DEBUG&&E("QueryEngine","Query:",$n(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Kr()<=V.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",$n(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(n))):g.resolve())}ji(e,n){if(Yf(n))return g.resolve(null);let r=ct(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$i(n,null,"F"),r=ct(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{let o=M(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{let u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(e,$i(n,null,"F")):this.es(e,u,n,c)}))})))}Hi(e,n,r,s){return Yf(n)||s.isEqual(D.min())?g.resolve(null):this.zi.getDocuments(e,r).next(i=>{let o=this.Zi(n,i);return this.Xi(n,o,r,s)?g.resolve(null):(Kr()<=V.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$n(n)),this.es(e,o,n,Sw(s,-1)).next(a=>a))})}Zi(e,n){let r=new Te(Rm(e));return n.forEach((s,i)=>{Io(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;let i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Kr()<=V.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",$n(n)),this.zi.getDocumentsMatchingQuery(e,n,mn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}};var Vu=class{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new W(q),this.rs=new Bt(i=>vl(i),El),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tu(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}};function _v(t,e,n,r){return new Vu(t,e,n,r)}async function Qm(t,e){let n=N(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{let o=[],a=[],c=M();for(let u of s){o.push(u.batchId);for(let l of u.mutations)c=c.add(l.key)}for(let u of i){a.push(u.batchId);for(let l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function yv(t,e){let n=N(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){let h=u.batch,d=h.keys(),f=g.resolve();return d.forEach(_=>{f=f.next(()=>l.getEntry(c,_)).next(y=>{let p=u.docVersions.get(_);B(p!==null),y.version.compareTo(p)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=M();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ym(t){let e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Iv(t,e){let n=N(t),r=e.snapshotVersion,s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;let a=[];e.targetChanges.forEach((l,h)=>{let d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ce.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(y,p,w){return y.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,l)&&a.push(n.Qr.updateTargetData(i,f))});let c=Tt(),u=M();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(wv(i,o,e.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(D.min())){let l=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.ns=s,i))}function wv(t,e,n){let r=M(),s=M();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tt();return n.forEach((a,c)=>{let u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(D.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function vv(t,e){let n=N(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ev(t,e){let n=N(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,g.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new os(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{let s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Mu(t,e,n){let r=N(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_s(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function am(t,e,n){let r=N(t),s=D.min(),i=M();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){let h=N(c),d=h.rs.get(l);return d!==void 0?g.resolve(h.ns.get(d)):h.Qr.getTargetData(u,l)}(r,o,ct(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:D.min(),n?i:M())).next(a=>(Tv(r,Fw(e),a),{documents:a,hs:i})))}function Tv(t,e,n){let r=t.ss.get(e)||D.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}var eo=class{constructor(){this.activeTargetIds=$w()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Uu=class{constructor(){this.no=new eo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new eo,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Fu=class{io(e){}shutdown(){}};var to=class{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.uo)e(0)}ao(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Oi=null;function kc(){return Oi===null?Oi=function(){return 268435456+Math.round(2147483648*Math.random())}():Oi++,"0x"+Oi.toString(16)}var Av={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var qu=class{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}};var Ee="WebChannelConnection",Bu=class extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;let r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){let a=kc(),c=this.bo(n,r.toUriEncodedString());E("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);let u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(n,c,u,s).then(l=>(E("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Jn("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){let s=Av[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){let i=kc();return new Promise((o,a)=>{let c=new Uf;c.setWithCredentials(!0),c.listenOnce(Vf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ni.NO_ERROR:let l=c.getResponseJson();E(Ee,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Ni.TIMEOUT:E(Ee,`RPC '${e}' ${i} timed out`),a(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:let h=c.getStatus();if(E(Ee,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);let f=d?.error;if(f&&f.status&&f.message){let _=function(p){let w=p.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(w)>=0?w:m.UNKNOWN}(f.status);a(new I(_,f.message))}else a(new I(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new I(m.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{E(Ee,`RPC '${e}' ${i} completed.`)}});let u=JSON.stringify(s);E(Ee,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Fo(e,n,r){let s=kc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Of(),a=Lf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;let l=i.join("");E(Ee,`Creating RPC '${e}' stream ${s}: ${l}`,c);let h=o.createWebChannel(l,c),d=!1,f=!1,_=new qu({lo:p=>{f?E(Ee,`Not sending because RPC '${e}' stream ${s} is closed:`,p):(d||(E(Ee,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),E(Ee,`RPC '${e}' stream ${s} sending:`,p),h.send(p))},ho:()=>h.close()}),y=(p,w,b)=>{p.listen(w,S=>{try{b(S)}catch(P){setTimeout(()=>{throw P},0)}})};return y(h,$r.EventType.OPEN,()=>{f||E(Ee,`RPC '${e}' stream ${s} transport opened.`)}),y(h,$r.EventType.CLOSE,()=>{f||(f=!0,E(Ee,`RPC '${e}' stream ${s} transport closed`),_.Vo())}),y(h,$r.EventType.ERROR,p=>{f||(f=!0,Jn(Ee,`RPC '${e}' stream ${s} transport errored:`,p),_.Vo(new I(m.UNAVAILABLE,"The operation could not be completed")))}),y(h,$r.EventType.MESSAGE,p=>{var w;if(!f){let b=p.data[0];B(!!b);let S=b,P=S.error||((w=S[0])===null||w===void 0?void 0:w.error);if(P){E(Ee,`RPC '${e}' stream ${s} received error:`,P);let x=P.status,U=function(He){let qe=Z[He];if(qe!==void 0)return qm(qe)}(x),be=P.message;U===void 0&&(U=m.INTERNAL,be="Unknown error status: "+x+" with message "+P.message),f=!0,_.Vo(new I(U,be)),h.close()}else E(Ee,`RPC '${e}' stream ${s} received:`,b),_.mo(b)}}),y(a,Mf.STAT_EVENT,p=>{p.stat===Dc.PROXY?E(Ee,`RPC '${e}' stream ${s} detected buffering proxy`):p.stat===Dc.NOPROXY&&E(Ee,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}};function Nc(){return typeof document<"u"?document:null}function wo(t){return new mu(t,!0)}var us=class{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&E("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}};var no=class{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new us(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(ut(n.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{let s=new I(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){let r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},zu=class extends no{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();let n=ov(this.serializer,e),r=function(i){if(!("targetChange"in i))return D.min();let o=i.targetChange;return o.targetIds&&o.targetIds.length?D.min():o.readTime?Le(o.readTime):D.min()}(e);return this.listener.u_(n,r)}c_(e){let n={};n.database=_u(this.serializer),n.addTarget=function(i,o){let a,c=o.target;if(a=su(c)?{documents:cv(i,c)}:{query:uv(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Bm(i,o.resumeToken);let u=pu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(D.min())>0){a.readTime=Ji(i,o.snapshotVersion.toTimestamp());let u=pu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);let r=hv(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){let n={};n.database=_u(this.serializer),n.removeTarget=e,this.t_(n)}},ju=class extends no{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(B(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();let n=av(e.writeResults,e.commitTime),r=Le(e.commitTime);return this.listener.T_(r,n)}return B(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){let e={};e.database=_u(this.serializer),this.t_(e)}I_(e){let n={streamToken:this.lastStreamToken,writes:e.map(r=>$m(this.serializer,r))};this.t_(n)}};var Gu=class extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,gu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(m.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,gu(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}};var $u=class{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ut(n),this.g_=!1):E("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}};var Ku=class{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{En(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(c){let u=N(c);u.v_.add(4),await Is(u),u.x_.set("Unknown"),u.v_.delete(4),await vo(u)}(this))})}),this.x_=new $u(r,s)}};async function vo(t){if(En(t))for(let e of t.F_)await e(!0)}async function Is(t){for(let e of t.F_)await e(!1)}function Jm(t,e){let n=N(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Rl(n)?Sl(n):fr(n).Jo()&&bl(n,e))}function Xm(t,e){let n=N(t),r=fr(n);n.C_.delete(e),r.Jo()&&Zm(n,e),n.C_.size===0&&(r.Jo()?r.Xo():En(n)&&n.x_.set("Unknown"))}function bl(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(D.min())>0){let n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fr(t).c_(e)}function Zm(t,e){t.O_.Oe(e),fr(t).l_(e)}function Sl(t){t.O_=new fu({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),fr(t).start(),t.x_.p_()}function Rl(t){return En(t)&&!fr(t).Ho()&&t.C_.size>0}function En(t){return N(t).v_.size===0}function ep(t){t.O_=void 0}async function bv(t){t.C_.forEach((e,n)=>{bl(t,e)})}async function Sv(t,e){ep(t),Rl(t)?(t.x_.S_(e),Sl(t)):t.x_.set("Unknown")}async function Rv(t,e,n){if(t.x_.set("Online"),e instanceof Qi&&e.state===2&&e.cause)try{await async function(s,i){let o=i.cause;for(let a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ro(t,r)}else if(e instanceof Qn?t.O_.$e(e):e instanceof Wi?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(D.min()))try{let r=await Ym(t.localStore);n.compareTo(r)>=0&&await function(i,o){let a=i.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){let l=i.C_.get(u);l&&i.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{let l=i.C_.get(c);if(!l)return;i.C_.set(c,l.withResumeToken(Ce.EMPTY_BYTE_STRING,l.snapshotVersion)),Zm(i,c);let h=new os(l.target,c,u,l.sequenceNumber);bl(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await ro(t,r)}}async function ro(t,e,n){if(!_s(e))throw e;t.v_.add(1),await Is(t),t.x_.set("Offline"),n||(n=()=>Ym(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await vo(t)})}function tp(t,e){return e().catch(n=>ro(t,n,e))}async function Eo(t){let e=N(t),n=jt(e),r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;Pv(e);)try{let s=await vv(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,Cv(e,s)}catch(s){await ro(e,s)}np(e)&&rp(e)}function Pv(t){return En(t)&&t.D_.length<10}function Cv(t,e){t.D_.push(e);let n=jt(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function np(t){return En(t)&&!jt(t).Ho()&&t.D_.length>0}function rp(t){jt(t).start()}async function Dv(t){jt(t).d_()}async function kv(t){let e=jt(t);for(let n of t.D_)e.I_(n.mutations)}async function Nv(t,e,n){let r=t.D_.shift(),s=uu.from(r,e,n);await tp(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Eo(t)}async function xv(t,e){e&&jt(t).P_&&await async function(r,s){if(function(o){return Fm(o)&&o!==m.ABORTED}(s.code)){let i=r.D_.shift();jt(r).Zo(),await tp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Eo(r)}}(t,e),np(t)&&rp(t)}async function cm(t,e){let n=N(t);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");let r=En(n);n.v_.add(3),await Is(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await vo(n)}async function Ov(t,e){let n=N(t);e?(n.v_.delete(2),await vo(n)):e||(n.v_.add(2),await Is(n),n.x_.set("Unknown"))}function fr(t){return t.N_||(t.N_=function(n,r,s){let i=N(n);return i.R_(),new zu(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:bv.bind(null,t),To:Sv.bind(null,t),u_:Rv.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Rl(t)?Sl(t):t.x_.set("Unknown")):(await t.N_.stop(),ep(t))})),t.N_}function jt(t){return t.B_||(t.B_=function(n,r,s){let i=N(n);return i.R_(),new ju(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:Dv.bind(null,t),To:xv.bind(null,t),E_:kv.bind(null,t),T_:Nv.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Eo(t)):(await t.B_.stop(),t.D_.length>0&&(E("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}var Hu=class t{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){let o=Date.now()+r,a=new t(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Pl(t,e){if(ut("AsyncQueue",`${e}: ${t}`),_s(t))return new I(m.UNAVAILABLE,`${e}: ${t}`);throw t}var so=class t{constructor(e){this.comparator=e?(n,r)=>e(n,r)||A.comparator(n.key,r.key):(n,r)=>A.comparator(n.key,r.key),this.keyedMap=Wr(),this.sortedSet=new W(this.comparator)}static emptySet(e){return new t(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){let n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){let n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof t)||this.size!==e.size)return!1;let n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){let s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){let r=new t;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}};var io=class{constructor(){this.L_=new W(A.comparator)}track(e){let n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):R():this.L_=this.L_.insert(n,e)}k_(){let e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}},or=class t{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){let o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new t(e,n,so.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}};var Wu=class{constructor(){this.q_=void 0,this.Q_=[]}},Qu=class{constructor(){this.queries=new Bt(e=>Sm(e),yo),this.onlineState="Unknown",this.K_=new Set}};async function sp(t,e){let n=N(t),r=e.query,s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Wu),s)try{i.q_=await n.onListen(r)}catch(o){let a=Pl(o,`Initialization of query '${$n(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Q_.push(e),e.U_(n.onlineState),i.q_&&e.W_(i.q_)&&Cl(n)}async function ip(t,e){let n=N(t),r=e.query,s=!1,i=n.queries.get(r);if(i){let o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Lv(t,e){let n=N(t),r=!1;for(let s of e){let i=s.query,o=n.queries.get(i);if(o){for(let a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Cl(n)}function Vv(t,e,n){let r=N(t),s=r.queries.get(e);if(s)for(let i of s.Q_)i.onError(n);r.queries.delete(e)}function Cl(t){t.K_.forEach(e=>{e.next()})}var oo=class{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){let r=[];for(let s of e.docChanges)s.type!==3&&r.push(s);e=new or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;let r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;let n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}};var ao=class{constructor(e){this.key=e}},co=class{constructor(e){this.key=e}},Yu=class{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=M(),this.mutatedKeys=M(),this.ua=Rm(e),this.ca=new so(this.ua)}get la(){return this.oa}ha(e,n){let r=n?n.Pa:new io,s=n?n.ca:this.ca,i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1,c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{let d=s.get(l),f=Io(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations),p=!1;d&&f?d.data.isEqual(f.data)?_!==y&&(r.track({type:3,doc:f}),p=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),p=!0,(c&&this.ua(f,c)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),p=!0):d&&!f&&(r.track({type:1,doc:d}),p=!0,(c||u)&&(a=!0)),p&&(f?(o=o.add(f),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){let i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let o=e.Pa.k_();o.sort((l,h)=>function(f,_){let y=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return y(f)-y(_)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),s=s!=null&&s;let a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,u=c!==this._a;return this._a=c,o.length!==0||u?{snapshot:new or(this.query,e.ca,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new io,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];let e=this.aa;this.aa=M(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});let n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new co(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new ao(r))}),n}Ra(e){this.oa=e.hs,this.aa=M();let n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return or.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}},Ju=class{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}},Xu=class{constructor(e){this.key=e,this.ma=!1}},Zu=class{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Bt(a=>Sm(a),yo),this.pa=new Map,this.ya=new Set,this.wa=new W(A.comparator),this.Sa=new Map,this.ba=new cs,this.Da={},this.Ca=new Map,this.va=as.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}};async function Mv(t,e){let n=Hv(t),r,s,i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{let o=await Ev(n.localStore,ct(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Uv(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Jm(n.remoteStore,o)}return s}async function Uv(t,e,n,r,s){t.Ma=(h,d,f)=>async function(y,p,w,b){let S=p.view.ha(w);S.Xi&&(S=await am(y.localStore,p.query,!1).then(({documents:be})=>p.view.ha(be,S)));let P=b&&b.targetChanges.get(p.targetId),x=b&&b.targetMismatches.get(p.targetId)!=null,U=p.view.applyChanges(S,y.isPrimaryClient,P,x);return lm(y,p.targetId,U.da),U.snapshot}(t,h,d,f);let i=await am(t.localStore,e,!0),o=new Yu(e,i.hs),a=o.ha(i.documents),c=is.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);lm(t,n,u.da);let l=new Ju(e,n,o);return t.ga.set(e,l),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function Fv(t,e){let n=N(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!yo(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xm(n.remoteStore,r.targetId),el(n,r.targetId)}).catch(gs)):(el(n,r.targetId),await Mu(n.localStore,r.targetId,!0))}async function qv(t,e,n){let r=Wv(t);try{let s=await function(o,a){let c=N(o),u=de.now(),l=a.reduce((f,_)=>f.add(_.key),M()),h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=Tt(),y=M();return c.os.getEntries(f,l).next(p=>{_=p,_.forEach((w,b)=>{b.isValidDocument()||(y=y.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,_)).next(p=>{h=p;let w=[];for(let b of a){let S=Jw(b,h.get(b.key).overlayedDocument);S!=null&&w.push(new ht(b.key,S,Im(S.value.mapValue),$e.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,w,a)}).next(p=>{d=p;let w=p.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,p.batchId,w)})}).then(()=>({batchId:d.batchId,changes:Cm(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new W(q)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,s.batchId,n),await ws(r,s.changes),await Eo(r.remoteStore)}catch(s){let i=Pl(s,"Failed to persist write");n.reject(i)}}async function op(t,e){let n=N(t);try{let r=await Iv(n.localStore,e);e.targetChanges.forEach((s,i)=>{let o=n.Sa.get(i);o&&(B(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?B(o.ma):s.removedDocuments.size>0&&(B(o.ma),o.ma=!1))}),await ws(n,r,e)}catch(r){await gs(r)}}function um(t,e,n){let r=N(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){let s=[];r.ga.forEach((i,o)=>{let a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){let c=N(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(let d of h.Q_)d.U_(a)&&(u=!0)}),u&&Cl(c)}(r.eventManager,e),s.length&&r.fa.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bv(t,e,n){let r=N(t);r.sharedClientState.updateQueryState(e,"rejected",n);let s=r.Sa.get(e),i=s&&s.key;if(i){let o=new W(A.comparator);o=o.insert(i,Ve.newNoDocument(i,D.min()));let a=M().add(i),c=new Hi(D.min(),new Map,new W(q),o,a);await op(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Dl(r)}else await Mu(r.localStore,e,!1).then(()=>el(r,e,n)).catch(gs)}async function zv(t,e){let n=N(t),r=e.batch.batchId;try{let s=await yv(n.localStore,e);cp(n,r,null),ap(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ws(n,s)}catch(s){await gs(s)}}async function jv(t,e,n){let r=N(t);try{let s=await function(o,a){let c=N(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(B(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);cp(r,e,n),ap(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ws(r,s)}catch(s){await gs(s)}}function ap(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function cp(t,e,n){let r=N(t),s=r.Da[r.currentUser.toKey()];if(s){let i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function el(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(let r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||up(t,r)})}function up(t,e){t.ya.delete(e.path.canonicalString());let n=t.wa.get(e);n!==null&&(Xm(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Dl(t))}function lm(t,e,n){for(let r of n)r instanceof ao?(t.ba.addReference(r.key,e),Gv(t,r)):r instanceof co?(E("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||up(t,r.key)):R()}function Gv(t,e){let n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(E("SyncEngine","New document in limbo: "+n),t.ya.add(r),Dl(t))}function Dl(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){let e=t.ya.values().next().value;t.ya.delete(e);let n=new A(G.fromString(e)),r=t.va.next();t.Sa.set(r,new Xu(n)),t.wa=t.wa.insert(n,r),Jm(t.remoteStore,new os(ct(Tl(n.path)),r,"TargetPurposeLimboResolution",es._e))}}async function ws(t,e,n){let r=N(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){s.push(u);let l=xu.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,u){let l=N(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.Qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!_s(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(let h of u){let d=h.targetId;if(!h.fromCache){let f=l.ns.get(d),_=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(_);l.ns=l.ns.insert(d,y)}}}(r.localStore,i))}async function $v(t,e){let n=N(t);if(!n.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());let r=await Qm(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new I(m.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ws(n,r.us)}}function Kv(t,e){let n=N(t),r=n.Sa.get(e);if(r&&r.ma)return M().add(r.key);{let s=M(),i=n.pa.get(e);if(!i)return s;for(let o of i){let a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function Hv(t){let e=N(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=op.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bv.bind(null,e),e.fa.u_=Lv.bind(null,e.eventManager),e.fa.xa=Vv.bind(null,e.eventManager),e}function Wv(t){let e=N(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jv.bind(null,e),e}var uo=class{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _v(this.persistence,new Lu,e.initialUser,this.serializer)}createPersistence(e){return new Du(Nu.Hr,this.serializer)}createSharedClientState(e){return new Uu}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};var tl=class{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>um(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$v.bind(null,this.syncEngine),await Ov(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qu}()}createDatastore(e){let n=wo(e.databaseInfo.databaseId),r=function(i){return new Bu(i)}(e.databaseInfo);return function(i,o,a,c){return new Gu(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Ku(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>um(this.syncEngine,n,0),function(){return to.D()?new to:new Fu}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,l){let h=new Zu(s,i,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){let s=N(r);E("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Is(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}};var lo=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}};var nl=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new I(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let n=await async function(s,i){let o=N(s),a={documents:i.map(h=>Xi(o.serializer,h))},c=await o.vo("BatchGetDocuments",o.serializer.databaseId,G.emptyPath(),a,i.length),u=new Map;c.forEach(h=>{let d=iv(o.serializer,h);u.set(d.key.toString(),d)});let l=[];return i.forEach(h=>{let d=u.get(h.toString());B(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ss(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{let s=A.fromPath(r);this.mutations.push(new Ki(s,this.precondition(s)))}),await async function(r,s){let i=N(r),o={writes:s.map(a=>$m(i.serializer,a))};await i.So("Commit",i.serializer.databaseId,G.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw R();n=D.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new I(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){let n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(D.min())?$e.exists(!1):$e.updateTime(n):$e.none()}preconditionForUpdate(e){let n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(D.min()))throw new I(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return $e.updateTime(n)}return $e.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var rl=class{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.za=r.maxAttempts,this.jo=new us(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{let e=new nl(this.datastore),n=this.Ja(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Ya(s)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{let n=this.updateFunction(e);return!ys(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){let n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Fm(n)}return!1}};var sl=class{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=Ui.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let r=Pl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function xc(t,e){t.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");let n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Qm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hm(t,e){t.asyncQueue.verifyOperationInProgress();let n=await Yv(t);E("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>cm(e.remoteStore,s)),t._onlineComponents=e}function Qv(t){return t.name==="FirebaseError"?t.code===m.FAILED_PRECONDITION||t.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Yv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await xc(t,t._uninitializedComponentsProvider._offline)}catch(e){let n=e;if(!Qv(n))throw n;Jn("Error using user provided cache. Falling back to memory cache: "+n),await xc(t,new uo)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await xc(t,new uo);return t._offlineComponents}async function kl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await hm(t,t._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await hm(t,new tl))),t._onlineComponents}function Jv(t){return kl(t).then(e=>e.syncEngine)}function Xv(t){return kl(t).then(e=>e.datastore)}async function lp(t){let e=await kl(t),n=e.eventManager;return n.onListen=Mv.bind(null,e.syncEngine),n.onUnlisten=Fv.bind(null,e.syncEngine),n}function Zv(t,e,n={}){let r=new xe;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){let l=new lo({next:d=>{o.enqueueAndForget(()=>ip(i,h));let f=d.docs.has(a);!f&&d.fromCache?u.reject(new I(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new I(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new oo(Tl(a.path),l,{includeMetadataChanges:!0,Z_:!0});return sp(i,h)}(await lp(t),t.asyncQueue,e,n,r)),r.promise}function eE(t,e,n={}){let r=new xe;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){let l=new lo({next:d=>{o.enqueueAndForget(()=>ip(i,h)),d.fromCache&&c.source==="server"?u.reject(new I(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new oo(a,l,{includeMetadataChanges:!0,Z_:!0});return sp(i,h)}(await lp(t),t.asyncQueue,e,n,r)),r.promise}function hp(t){let e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}var dm=new Map;function dp(t,e,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tE(t,e,n,r){if(e===!0&&r===!0)throw new I(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fm(t){if(!A.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mm(t){if(A.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function To(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":R()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=To(t);throw new I(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function nE(t,e){if(e<=0)throw new I(m.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}var ho=class{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},ar=class{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ho({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ho(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oc;switch(r.type){case"firstParty":return new Uc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let r=dm.get(n);r&&(E("ComponentProvider","Removing Datastore"),dm.delete(n),r.terminate())}(this),Promise.resolve()}};function rE(t,e,n,r={}){var s;let i=(t=Gt(t,ar))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ae.MOCK_USER;else{a=Zs(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);let u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new I(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ae(u)}t._authCredentials=new Lc(new Mi(a,c))}}var $t=class t{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new t(this.firestore,e,this._query)}},Pe=class t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new t(this.firestore,e,this._key)}},Mt=class t extends $t{constructor(e,n,r){super(e,n,Tl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new A(e))}withConverter(e){return new t(this.firestore,e,this._path)}};function At(t,e,...n){if(t=L(t),dp("collection","path",e),t instanceof ar){let r=G.fromString(e,...n);return mm(r),new Mt(t,null,r)}{if(!(t instanceof Pe||t instanceof Mt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=t._path.child(G.fromString(e,...n));return mm(r),new Mt(t.firestore,null,r)}}function Me(t,e,...n){if(t=L(t),arguments.length===1&&(e=Ui.newId()),dp("doc","path",e),t instanceof ar){let r=G.fromString(e,...n);return fm(r),new Pe(t,null,new A(r))}{if(!(t instanceof Pe||t instanceof Mt))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=t._path.child(G.fromString(e,...n));return fm(r),new Pe(t.firestore,t instanceof Mt?t.converter:null,new A(r))}}var il=class{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new us(this,"async_queue_retry"),this._u=()=>{let n=Nc();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};let e=Nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;let n=Nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});let n=new xe;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!_s(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){let n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;let s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ut("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);let s=Hu.createAndSchedule(this,e,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&R()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(let n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(let n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){let n=this.nu.indexOf(e);this.nu.splice(n,1)}};var In=class extends ar{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new il}(),this._persistenceKey=s?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||mp(this),this._firestoreClient.terminate()}};function fp(t,e){let n=typeof t=="object"?t:xt(),r=typeof t=="string"?t:e||"(default)",s=wt(n,"firestore").getImmediate({identifier:r});if(!s._initialized){let i=Ln("firestore");i&&rE(s,...i)}return s}function Ao(t){return t._firestoreClient||mp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mp(t){var e,n,r;let s=t._freezeSettings(),i=function(a,c,u,l){return new Kc(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,hp(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new sl(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}var cr=class t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new t(Ce.fromBase64String(e))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new t(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var wn=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var ur=class{constructor(e){this._methodName=e}};var ls=class{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}};var sE=/^__.*__$/,ol=class{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ht(e,this.data,this.fieldMask,n,this.fieldTransforms):new yn(e,this.data,n,this.fieldTransforms)}},fo=class{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ht(e,this.data,this.fieldMask,n,this.fieldTransforms)}};function pp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}var mo=class t{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.mu(e),s}fu(e){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return go(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(pp(this.du)&&sE.test(e))throw this.pu('Document fields cannot begin and end with "__"')}},al=class{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wo(e)}Su(e,n,r,s=!1){return new mo({du:e,methodName:n,wu:r,path:Oe.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Nl(t){let e=t._freezeSettings(),n=wo(t._databaseId);return new al(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iE(t,e,n,r,s,i={}){let o=t.Su(i.merge||i.mergeFields?2:0,e,n,s);xl("Data must be an object, but it was:",o,r);let a=yp(r,o),c,u;if(i.merge)c=new Ke(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){let l=[];for(let h of i.mergeFields){let d=ul(e,h,n);if(!o.contains(d))throw new I(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);wp(l,d)||l.push(d)}c=new Ke(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new ol(new ke(a),c,u)}var po=class t extends ur{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof t}};function oE(t,e,n){return new mo({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}var cl=class t extends ur{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){let n=oE(this,e,!0),r=this.bu.map(i=>mr(i,n)),s=new zt(r);return new ou(e.path,s)}isEqual(e){return e instanceof t&&Dt(this.bu,e.bu)}};function gp(t,e,n,r){let s=t.Su(1,e,n);xl("Data must be an object, but it was:",s,r);let i=[],o=ke.empty();vn(r,(c,u)=>{let l=Ol(e,c,n);u=L(u);let h=s.fu(l);if(u instanceof po)i.push(l);else{let d=mr(u,h);d!=null&&(i.push(l),o.set(l,d))}});let a=new Ke(i);return new fo(o,a,s.fieldTransforms)}function _p(t,e,n,r,s,i){let o=t.Su(1,e,n),a=[ul(e,r,n)],c=[s];if(i.length%2!=0)throw new I(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ul(e,i[d])),c.push(i[d+1]);let u=[],l=ke.empty();for(let d=a.length-1;d>=0;--d)if(!wp(u,a[d])){let f=a[d],_=c[d];_=L(_);let y=o.fu(f);if(_ instanceof po)u.push(f);else{let p=mr(_,y);p!=null&&(u.push(f),l.set(f,p))}}let h=new Ke(u);return new fo(l,h,o.fieldTransforms)}function aE(t,e,n,r=!1){return mr(n,t.Su(r?4:3,e))}function mr(t,e){if(Ip(t=L(t)))return xl("Unsupported field value:",e,t),yp(t,e);if(t instanceof ur)return function(r,s){if(!pp(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);let i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,s){let i=[],o=0;for(let a of r){let c=mr(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=L(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let i=de.fromDate(r);return{timestampValue:Ji(s.serializer,i)}}if(r instanceof de){let i=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ji(s.serializer,i)}}if(r instanceof ls)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cr)return{bytesValue:Bm(s.serializer,r._byteString)};if(r instanceof Pe){let i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Al(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${To(r)}`)}(t,e)}function yp(t,e){let n={};return _m(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vn(t,(r,s)=>{let i=mr(s,e.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ip(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof ls||t instanceof cr||t instanceof Pe||t instanceof ur)}function xl(t,e,n){if(!Ip(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){let r=To(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function ul(t,e,n){if((e=L(e))instanceof wn)return e._internalPath;if(typeof e=="string")return Ol(t,e);throw go("Field path arguments must be of type string or ",t,!1,void 0,n)}var cE=new RegExp("[~\\*/\\[\\]]");function Ol(t,e,n){if(e.search(cE)>=0)throw go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wn(...e.split("."))._internalPath}catch{throw go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function go(t,e,n,r,s){let i=r&&!r.isEmpty(),o=s!==void 0,a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new I(m.INVALID_ARGUMENT,a+t+c)}function wp(t,e){return t.some(n=>n.isEqual(e))}var lr=class{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new ll(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let n=this._document.data.field(bo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}},ll=class extends lr{data(){return super.data()}};function bo(t,e){return typeof e=="string"?Ol(t,e):e instanceof wn?e._internalPath:e._delegate._internalPath}function uE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var hs=class{},ds=class extends hs{};function Ae(t,e,...n){let r=[];e instanceof hs&&r.push(e),r=r.concat(n),function(i){let o=i.filter(c=>c instanceof hr).length,a=i.filter(c=>c instanceof fs).length;if(o>1||o>0&&a>0)throw new I(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let s of r)t=s._apply(t);return t}var fs=class t extends ds{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new t(e,n,r)}_apply(e){let n=this._parse(e);return Ep(e._query,n),new $t(e.firestore,e.converter,iu(e._query,n))}_parse(e){let n=Nl(e.firestore);return function(i,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new I(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){gm(h,l);let f=[];for(let _ of h)f.push(pm(c,i,_));d={arrayValue:{values:f}}}else d=pm(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||gm(h,l),d=aE(a,o,h,l==="in"||l==="not-in");return te.create(u,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}};function Q(t,e,n){let r=e,s=bo("where",t);return fs._create(s,r,n)}var hr=class t extends hs{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new t(e,n)}_parse(e){let n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ye.create(n,this._getOperator())}_apply(e){let n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s,a=i.getFlattenedFilters();for(let c of a)Ep(o,c),o=iu(o,c)}(e._query,n),new $t(e.firestore,e.converter,iu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};function So(...t){return t.forEach(e=>Tp("or",e)),hr._create("or",t)}function Ll(...t){return t.forEach(e=>Tp("and",e)),hr._create("and",t)}var hl=class t extends ds{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new t(e,n)}_apply(e){let n=function(s,i,o){if(s.startAt!==null)throw new I(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new I(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gn(i,o)}(e._query,this._field,this._direction);return new $t(e.firestore,e.converter,function(s,i){let o=s.explicitOrderBy.concat([i]);return new qt(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}};function vp(t,e="asc"){let n=e,r=bo("orderBy",t);return hl._create(r,n)}var dl=class t extends ds{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new t(e,n,r)}_apply(e){return new $t(e.firestore,e.converter,$i(e._query,this._limit,this._limitType))}};function Ue(t){return nE("limit",t),dl._create("limit",t,"F")}function pm(t,e,n){if(typeof(n=L(n))=="string"){if(n==="")throw new I(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bm(e)&&n.indexOf("/")!==-1)throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=e.path.child(G.fromString(n));if(!A.isDocumentKey(r))throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gf(t,new A(r))}if(n instanceof Pe)return Gf(t,n._key);throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${To(n)}.`)}function gm(t,e){if(!Array.isArray(t)||t.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ep(t,e){let n=function(s,i){for(let o of s)for(let a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new I(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Tp(t,e){if(!(e instanceof fs||e instanceof hr))throw new I(m.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}var _o=class{convertValue(e,n="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw R()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){let r={};return vn(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ls(H(e.latitude),H(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":let r=Il(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ns(e));default:return null}}convertTimestamp(e){let n=Ut(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){let r=G.fromString(e);B(Wm(r));let s=new ji(r.get(1),r.get(3)),i=new A(r.popFirst(5));return s.isEqual(n)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}};function lE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}var fl=class extends _o{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){let n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}};var Vt=class{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},ms=class extends lr{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let n=new Yn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){let r=this._document.data.field(bo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Yn=class extends ms{data(e={}){return super.data(e)}},ml=class{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vt(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){let e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yn(this._firestore,this._userDataWriter,r.key,r,new Vt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{let c=new Yn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{let c=new Yn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Vt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter),u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:hE(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function hE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}function fe(t){t=Gt(t,Pe);let e=Gt(t.firestore,In);return Zv(Ao(e),t._key).then(n=>fE(e,t,n))}var ps=class extends _o{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){let n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}};function Tn(t){t=Gt(t,$t);let e=Gt(t.firestore,In),n=Ao(e),r=new ps(e);return uE(t._query),eE(n,t._query).then(s=>new ml(e,r,t,s))}function dt(t,e,n,...r){t=Gt(t,Pe);let s=Gt(t.firestore,In),i=Nl(s),o;return o=typeof(e=L(e))=="string"||e instanceof wn?_p(i,"updateDoc",t._key,e,n,r):gp(i,"updateDoc",t._key,e),dE(s,[o.toMutation(t._key,$e.exists(!0))])}function dE(t,e){return function(r,s){let i=new xe;return r.asyncQueue.enqueueAndForget(async()=>qv(await Jv(r),s,i)),i.promise}(Ao(t),e)}function fE(t,e,n){let r=n.docs.get(e._key),s=new ps(t);return new ms(t,s,e._key,r,new Vt(n.hasPendingWrites,n.fromCache),e.converter)}var mE={maxAttempts:5};function Hr(t,e){if((t=L(t)).firestore!==e)throw new I(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}var pl=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Nl(n)}get(n){let r=Hr(n,this._firestore),s=new fl(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return R();let o=i[0];if(o.isFoundDocument())return new lr(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new lr(this._firestore,s,r._key,null,r.converter);throw R()})}set(n,r,s){let i=Hr(n,this._firestore),o=lE(i.converter,r,s),a=iE(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(n,r,s,...i){let o=Hr(n,this._firestore),a;return a=typeof(r=L(r))=="string"||r instanceof wn?_p(this._dataReader,"Transaction.update",o._key,r,s,i):gp(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){let r=Hr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){let n=Hr(e,this._firestore),r=new ps(this._firestore);return super.get(e).then(s=>new ms(this._firestore,r,n._key,s._document,new Vt(!1,!1),n.converter))}};function Ap(t,e,n){t=Gt(t,In);let r=Object.assign(Object.assign({},mE),n);return function(i){if(i.maxAttempts<1)throw new I(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){let c=new xe;return i.asyncQueue.enqueueAndForget(async()=>{let u=await Xv(i);new rl(i.asyncQueue,u,a,o,c).ja()}),c.promise}(Ao(t),s=>e(new pl(t,s)),r)}function bp(...t){return new cl("arrayUnion",t)}(function(e,n=!0){(function(s){dr=s})(nt),je(new Ie("firestore",(r,{instanceIdentifier:s,options:i})=>{let o=r.getProvider("app").getImmediate(),a=new In(new Vc(r.getProvider("auth-internal")),new qc(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ji(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ue(qf,"4.4.1",e),ue(qf,"4.4.1","esm2017")})();var pE="firebase",gE="10.7.2";ue(pE,gE,"app");function Ro(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Bp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var zp=Bp,jp=new It("auth","Firebase",Bp());var xo=new kt("@firebase/auth");function _E(t,...e){xo.logLevel<=V.WARN&&xo.warn(`Auth (${nt}): ${t}`,...e)}function Co(t,...e){xo.logLevel<=V.ERROR&&xo.error(`Auth (${nt}): ${t}`,...e)}function Je(t,...e){throw rh(t,...e)}function mt(t,...e){return rh(t,...e)}function yE(t,e,n){let r=Object.assign(Object.assign({},zp()),{[e]:n});return new It("auth","Firebase",r).create(e,{appName:t.name})}function rh(t,...e){if(typeof t!="string"){let n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jp.create(t,...e)}function T(t,e,...n){if(!t)throw rh(e,...n)}function ft(t){let e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function St(t,e){t||ft(e)}function Ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IE(){return Sp()==="http:"||Sp()==="https:"}function Sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}function wE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IE()||Xh()||"connection"in navigator)?navigator.onLine:!0}function vE(){if(typeof navigator>"u")return null;let t=navigator;return t.languages&&t.languages[0]||t.language||null}var An=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,St(n>e,"Short delay should be less than long delay!"),this.isMobile=Jh()||Zh()}get(){return wE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function sh(t,e){St(t.emulator,"Emulator should always be set here");let{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}var Oo=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var EE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var TE=new An(3e4,6e4);function ne(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function re(t,e,n,r,s={}){return Gp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});let a=Vn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Oo.fetch()($p(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Gp(t,e,n){t._canInitEmulator=!1;let r=Object.assign(Object.assign({},EE),e);try{let s=new Fl(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();let o=await i.json();if("needConfirmation"in o)throw vs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{let a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vs(t,"user-disabled",o);let l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yE(t,l,u);Je(t,l)}}catch(s){if(s instanceof ce)throw s;Je(t,"network-request-failed",{message:String(s)})}}async function Dn(t,e,n,r,s={}){let i=await re(t,e,n,r,s);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $p(t,e,n,r){let s=`${e}${n}?${r}`;return t.config.emulator?sh(t.config,s):`${t.config.apiScheme}://${s}`}function AE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Fl=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),TE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function vs(t,e,n){let r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let s=mt(t,e,r);return s.customData._tokenResponse=n,s}function Rp(t){return t!==void 0&&t.enterprise!==void 0}var ql=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function bE(t,e){return re(t,"GET","/v2/recaptchaConfig",ne(t,e))}async function SE(t,e){return re(t,"POST","/v1/accounts:delete",e)}async function RE(t,e){return re(t,"POST","/v1/accounts:lookup",e)}function Es(t){if(t)try{let e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kp(t,e=!1){let n=L(t),r=await n.getIdToken(e),s=ih(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Es(Vl(s.auth_time)),issuedAtTime:Es(Vl(s.iat)),expirationTime:Es(Vl(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Vl(t){return Number(t)*1e3}function ih(t){let[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{let s=Ea(n);return s?JSON.parse(s):(Co("Failed to decode base64 JWT payload"),null)}catch(s){return Co("Caught error parsing JWT payload as JSON",s?.toString()),null}}function PE(t){let e=ih(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ce&&CE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}var Bl=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;let n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Lo=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Vo(t){var e;let n=t.auth,r=await t.getIdToken(),s=await bn(t,RE(n,{idToken:r}));T(s?.users.length,n,"internal-error");let i=s.users[0];t._notifyReloadListener(i);let o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kE(i.providerUserInfo):[],a=DE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!a?.length,l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Lo(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Hp(t){let e=L(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kE(t){return t.map(e=>{var{providerId:n}=e,r=Ro(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function NE(t,e){let n=await Gp(t,{},async()=>{let r=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=$p(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Oo.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xE(t,e){return re(t,"POST","/v2/accounts:revokeToken",ne(t,e))}var Mo=class t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");let n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){let{accessToken:r,refreshToken:s,expiresIn:i}=await NE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){let{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new t;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(T(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(T(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t,this.toJSON())}_performRefresh(){return ft("not implemented")}};function Kt(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var Ts=class t{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let n=await bn(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kp(this,e)}reload(){return Hp(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await bn(this,SE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;let h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(u=n.createdAt)!==null&&u!==void 0?u:void 0,b=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:S,emailVerified:P,isAnonymous:x,providerData:U,stsTokenManager:be}=n;T(S&&be,e,"internal-error");let Se=Mo.fromJSON(this.name,be);T(typeof S=="string",e,"internal-error"),Kt(h,e.name),Kt(d,e.name),T(typeof P=="boolean",e,"internal-error"),T(typeof x=="boolean",e,"internal-error"),Kt(f,e.name),Kt(_,e.name),Kt(y,e.name),Kt(p,e.name),Kt(w,e.name),Kt(b,e.name);let He=new t({uid:S,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:x,photoURL:_,phoneNumber:f,tenantId:y,stsTokenManager:Se,createdAt:w,lastLoginAt:b});return U&&Array.isArray(U)&&(He.providerData=U.map(qe=>Object.assign({},qe))),p&&(He._redirectEventId=p),He}static async _fromIdTokenResponse(e,n,r=!1){let s=new Mo;s.updateFromServerResponse(n);let i=new t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vo(i),i}};var Pp=new Map;function bt(t){St(t instanceof Function,"Expected a class definition");let e=Pp.get(t);return e?(St(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pp.set(t,e),e)}var Uo=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){let n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};Uo.type="NONE";var zl=Uo;function Do(t,e,n){return`firebase:${t}:${e}:${n}`}var Fo=class t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;let{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new t(bt(zl),e,r);let s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u),i=s[0]||bt(zl),o=Do(r,e.config.apiKey,e.name),a=null;for(let u of n)try{let l=await u._get(o);if(l){let h=Ts._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}let c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new t(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new t(i,e,r))}};function Cp(t){let e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xp(e))return"Blackberry";if(Zp(e))return"Webos";if(oh(e))return"Safari";if((e.includes("chrome/")||Qp(e))&&!e.includes("edge/"))return"Chrome";if(Jp(e))return"Android";{let n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Wp(t=$()){return/firefox\//i.test(t)}function oh(t=$()){let e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qp(t=$()){return/crios\//i.test(t)}function Yp(t=$()){return/iemobile/i.test(t)}function Jp(t=$()){return/android/i.test(t)}function Xp(t=$()){return/blackberry/i.test(t)}function Zp(t=$()){return/webos/i.test(t)}function ra(t=$()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OE(t=$()){var e;return ra(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LE(){return ed()&&document.documentMode===10}function eg(t=$()){return ra(t)||Jp(t)||Zp(t)||Xp(t)||/windows phone/i.test(t)||Yp(t)}function VE(){try{return!!(window&&window!==window.top)}catch{return!1}}function tg(t,e=[]){let n;switch(t){case"Browser":n=Cp($());break;case"Worker":n=`${Cp($())}-${t}`;break;default:n=t}let r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nt}/${r}`}var jl=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){let r=i=>new Promise((o,a)=>{try{let c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);let s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(let s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function ME(t,e={}){return re(t,"GET","/v2/passwordPolicy",ne(t,e))}var UE=6,Gl=class{constructor(e){var n,r,s,i;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;let c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){let r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}};var $l=class{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qo(this),this.idTokenSubscription=new qo(this),this.beforeStateQueue=new jl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser(),s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let n=e?L(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await ME(this),n=new Gl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new It("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){let n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){let r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let n=e&&bt(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await Fo.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};let i=typeof n=="function"?n:n.next.bind(n),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){let c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{let c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);let s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;let n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&_E(`Error while retrieving App Check token: ${n.error}`),n?.token}};function Ht(t){return L(t)}var qo=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=sd(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};function FE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ng(t){return new Promise((e,n)=>{let r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{let i=mt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",FE().appendChild(r)})}function rg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}var qE="https://www.google.com/recaptcha/enterprise.js?render=",BE="recaptcha-enterprise",zE="NO_RECAPTCHA",Kl=class{constructor(e){this.type=BE,this.auth=Ht(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{bE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let u=new ql(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){let c=window.grecaptcha;Rp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(zE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Rp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ng(qE+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}};async function Dp(t,e,n,r=!1){let s=new Kl(t),i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}let o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let i=await Dp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await Dp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}function sg(t,e){let n=wt(t,"auth");if(n.isInitialized()){let s=n.getImmediate(),i=n.getOptions();if(Dt(i,e??{}))return s;Je(s,"already-initialized")}return n.initialize({options:e})}function jE(t,e){let n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(bt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function ig(t,e,n){let r=Ht(t);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let s=!!n?.disableWarnings,i=og(e),{host:o,port:a}=GE(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$E()}function og(t){let e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GE(t){let e=og(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){let i=s[1];return{host:i,port:kp(r.substr(i.length+1))}}else{let[i,o]=r.split(":");return{host:i,port:kp(o)}}}function kp(t){if(!t)return null;let e=Number(t);return isNaN(e)?null:e}function $E(){function t(){let e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}var Sn=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,n){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}};async function KE(t,e){return re(t,"POST","/v1/accounts:resetPassword",ne(t,e))}async function HE(t,e){return re(t,"POST","/v1/accounts:update",e)}async function WE(t,e){return re(t,"POST","/v1/accounts:signUp",e)}async function QE(t,e){return Dn(t,"POST","/v1/accounts:signInWithPassword",ne(t,e))}async function YE(t,e){return re(t,"POST","/v1/accounts:sendOobCode",ne(t,e))}async function JE(t,e){return YE(t,e)}async function XE(t,e){return Dn(t,"POST","/v1/accounts:signInWithEmailLink",ne(t,e))}async function ZE(t,e){return Dn(t,"POST","/v1/accounts:signInWithEmailLink",ne(t,e))}var As=class t extends Sn{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new t(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new t(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,n,"signInWithPassword",QE);case"emailLink":return XE(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":let r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,r,"signUpPassword",WE);case"emailLink":return ZE(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function pr(t,e){return Dn(t,"POST","/v1/accounts:signInWithIdp",ne(t,e))}var eT="http://localhost",Rn=class t extends Sn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let n=new t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ro(n,["providerId","signInMethod"]);if(!r||!s)return null;let o=new t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){let n=this.buildRequest();return pr(e,n)}_linkToIdToken(e,n){let r=this.buildRequest();return r.idToken=n,pr(e,r)}_getReauthenticationResolver(e){let n=this.buildRequest();return n.autoCreate=!1,pr(e,n)}buildRequest(){let e={requestUri:eT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vn(n)}return e}};async function tT(t,e){return re(t,"POST","/v1/accounts:sendVerificationCode",ne(t,e))}async function nT(t,e){return Dn(t,"POST","/v1/accounts:signInWithPhoneNumber",ne(t,e))}async function rT(t,e){let n=await Dn(t,"POST","/v1/accounts:signInWithPhoneNumber",ne(t,e));if(n.temporaryProof)throw vs(t,"account-exists-with-different-credential",n);return n}var sT={USER_NOT_FOUND:"user-not-found"};async function iT(t,e){let n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Dn(t,"POST","/v1/accounts:signInWithPhoneNumber",ne(t,n),sT)}var bs=class t extends Sn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new t({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new t({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return nT(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return rT(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return iT(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new t({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}};function oT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aT(t){let e=Mn(Un(t)).link,n=e?Mn(Un(e)).deep_link_id:null,r=Mn(Un(t)).deep_link_id;return(r?Mn(Un(r)).link:null)||r||n||e||t}var Bo=class t{constructor(e){var n,r,s,i,o,a;let c=Mn(Un(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=oT((s=c.mode)!==null&&s!==void 0?s:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){let n=aT(e);try{return new t(n)}catch{return null}}};var Rt=class t{constructor(){this.providerId=t.PROVIDER_ID}static credential(e,n){return As._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){let r=Bo.parseLink(n);return T(r,"argument-error"),As._fromEmailAndCode(e,r.code,r.tenantId)}};Rt.PROVIDER_ID="password";Rt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var zo=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Pn=class extends zo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Ss=class t extends Pn{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};Ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ss.PROVIDER_ID="facebook.com";var Rs=class t extends Pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return t.credential(n,r)}catch{return null}}};Rs.GOOGLE_SIGN_IN_METHOD="google.com";Rs.PROVIDER_ID="google.com";var Ps=class t extends Pn{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};Ps.GITHUB_SIGN_IN_METHOD="github.com";Ps.PROVIDER_ID="github.com";var Cs=class t extends Pn{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return t.credential(n,r)}catch{return null}}};Cs.TWITTER_SIGN_IN_METHOD="twitter.com";Cs.PROVIDER_ID="twitter.com";var Ds=class t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){let i=await Ts._fromIdTokenResponse(e,r,s),o=Np(r);return new t({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);let s=Np(r);return new t({user:e,providerId:s,_tokenResponse:r,operationType:n})}};function Np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}var Wl=class t extends ce{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,t.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new t(e,n,r,s)}};function ag(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,i,e,r):i})}async function cT(t,e,n=!1){let r=await bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ds._forOperation(t,"link",r)}async function cg(t,e,n=!1){let{auth:r}=t,s="reauthenticate";try{let i=await bn(t,ag(r,s,e,t),n);T(i.idToken,r,"internal-error");let o=ih(i.idToken);T(o,r,"internal-error");let{sub:a}=o;return T(t.uid===a,r,"user-mismatch"),Ds._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}async function ug(t,e,n=!1){let r="signIn",s=await ag(t,r,e),i=await Ds._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function lg(t,e){return ug(Ht(t),e)}async function ah(t,e){return cg(L(t),e)}function uT(t,e,n){var r;T(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),T(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function hg(t){let e=Ht(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ch(t,e,n){let r=Ht(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&uT(r,s,n),await Hl(r,s,"getOobCode",JE)}async function uh(t,e,n){await KE(L(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hg(t),r})}function lh(t,e,n){return lg(L(t),Rt.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hg(t),r})}async function lT(t,e){return re(t,"POST","/v1/accounts:update",e)}async function xs(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;let r=L(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bn(r,lT(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;let a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function hh(t,e){return dg(L(t),e,null)}function dh(t,e){return dg(L(t),null,e)}async function dg(t,e,n){let{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);let o=await bn(t,HE(r,i));await t._updateTokensIfNecessary(o,!0)}function fg(t,e,n,r){return L(t).onIdTokenChanged(e,n,r)}function mg(t,e,n){return L(t).beforeAuthStateChanged(e,n)}function fh(t,e,n,r){return L(t).onAuthStateChanged(e,n,r)}function mh(t){return L(t).signOut()}function hT(t,e){return re(t,"POST","/v2/accounts/mfaEnrollment:start",ne(t,e))}function dT(t,e){return re(t,"POST","/v2/accounts/mfaEnrollment:finalize",ne(t,e))}function fT(t,e){return re(t,"POST","/v2/accounts/mfaEnrollment:start",ne(t,e))}function mT(t,e){return re(t,"POST","/v2/accounts/mfaEnrollment:finalize",ne(t,e))}var jo="__sak";var Go=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){let n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};function pT(){let t=$();return oh(t)||ra(t)}var gT=1e3,_T=10,$o=class extends Go{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pT()&&VE(),this.fallbackToPolling=eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let n of Object.keys(this.listeners)){let r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}let r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}let s=()=>{let o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);LE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_T):s()}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){let n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};$o.type="LOCAL";var pg=$o;var Ko=class extends Go{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};Ko.type="SESSION";var ph=Ko;function yT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}var Ho=class t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;let r=new t(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});let a=Array.from(o).map(async u=>u(n.origin,i)),c=await yT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Ho.receivers=[];function gh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}var Ql=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){let s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{let u=gh("",20);s.port1.start();let l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){let d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function pt(){return window}function IT(t){pt().location.href=t}function gg(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function wT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vT(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ET(){return gg()?self:null}var _g="firebaseLocalStorageDb",TT=1,Wo="firebaseLocalStorage",yg="fbase_key",Cn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function sa(t,e){return t.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function AT(){let t=indexedDB.deleteDatabase(_g);return new Cn(t).toPromise()}function Yl(){let t=indexedDB.open(_g,TT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{let r=t.result;try{r.createObjectStore(Wo,{keyPath:yg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{let r=t.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await AT(),e(await Yl()))})})}async function xp(t,e,n){let r=sa(t,!0).put({[yg]:e,value:n});return new Cn(r).toPromise()}async function bT(t,e){let n=sa(t,!1).get(e),r=await new Cn(n).toPromise();return r===void 0?null:r.value}function Op(t,e){let n=sa(t,!0).delete(e);return new Cn(n).toPromise()}var ST=800,RT=3,Qo=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yl(),this.db)}async _withRetries(e){let n=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(n++>RT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(ET()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wT(),!this.activeServiceWorker)return;this.sender=new Ql(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Yl();return await xp(e,jo,"1"),await Op(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){let n=await this._withRetries(r=>bT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(s=>{let i=sa(s,!1).getAll();return new Cn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let n=[],r=new Set;if(e.length!==0)for(let{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(let s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ST)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Qo.type="LOCAL";var Ig=Qo;function PT(t,e){return re(t,"POST","/v2/accounts/mfaSignIn:start",ne(t,e))}function CT(t,e){return re(t,"POST","/v2/accounts/mfaSignIn:finalize",ne(t,e))}function DT(t,e){return re(t,"POST","/v2/accounts/mfaSignIn:finalize",ne(t,e))}var jS=rg("rcb"),GS=new An(3e4,6e4);var kT="recaptcha";async function NT(t,e,n){var r;let s=await n.verify();try{T(typeof s=="string",t,"argument-error"),T(n.type===kT,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let o=i.session;if("phoneNumber"in i)return T(o.type==="enroll",t,"internal-error"),(await hT(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{T(o.type==="signin",t,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return T(a,t,"missing-multi-factor-info"),(await PT(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:o}=await tT(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}var ks=class t{constructor(e){this.providerId=t.PROVIDER_ID,this.auth=Ht(e)}verifyPhoneNumber(e,n){return NT(this.auth,e,L(n))}static credential(e,n){return bs._fromVerification(e,n)}static credentialFromResult(e){let n=e;return t.credentialFromTaggedObject(n)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:n,temporaryProof:r}=e;return n&&r?bs._fromTokenResponse(n,r):null}};ks.PROVIDER_ID="phone";ks.PHONE_SIGN_IN_METHOD="phone";function xT(t,e){return e?bt(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}var Ns=class extends Sn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){let n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function OT(t){return ug(t.auth,new Ns(t),t.bypassAuthState)}function LT(t){let{auth:e,user:n}=t;return T(n,e,"internal-error"),cg(n,new Ns(t),t.bypassAuthState)}async function VT(t){let{auth:e,user:n}=t;return T(n,e,"internal-error"),cT(n,new Ns(t),t.bypassAuthState)}var Yo=class{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OT;case"linkViaPopup":case"linkViaRedirect":return VT;case"reauthViaPopup":case"reauthViaRedirect":return LT;default:Je(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var MT=new An(2e3,1e4);var Jl=class t extends Yo{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,t.currentPopupAction&&t.currentPopupAction.cancel(),t.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");let e=gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,t.currentPopupAction=null}pollUserCancellation(){let e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MT.get())};e()}};Jl.currentPopupAction=null;var UT="pendingRedirect",ko=new Map,Xl=class extends Yo{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{let r=await FT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function FT(t,e){let n=zT(e),r=BT(t);if(!await r._isAvailable())return!1;let s=await r._get(n)==="true";return await r._remove(n),s}function qT(t,e){ko.set(t._key(),e)}function BT(t){return bt(t._redirectPersistence)}function zT(t){return Do(UT,t.config.apiKey,t.name)}async function jT(t,e,n=!1){let r=Ht(t),s=xT(r,e),o=await new Xl(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var GT=10*60*1e3,Zl=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$T(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wg(e)){let s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){let r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lp(e))}saveEventToCache(e){this.cachedEventUids.add(Lp(e)),this.lastProcessedEventTime=Date.now()}};function Lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function $T(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wg(t);default:return!1}}async function KT(t,e={}){return re(t,"GET","/v1/projects",e)}var HT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WT=/^https?/;async function QT(t){if(t.config.emulator)return;let{authorizedDomains:e}=await KT(t);for(let n of e)try{if(YT(n))return}catch{}Je(t,"unauthorized-domain")}function YT(t){let e=Ul(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){let o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WT.test(n))return!1;if(HT.test(t))return r===t;let s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}var JT=new An(3e4,6e4);function Vp(){let t=pt().___jsl;if(t?.H){for(let e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XT(t){return new Promise((e,n)=>{var r,s,i;function o(){Vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vp(),n(mt(t,"network-request-failed"))},timeout:JT.get()})}if(!((s=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pt().gapi)===null||i===void 0)&&i.load)o();else{let a=rg("iframefcb");return pt()[a]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},ng(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw No=null,e})}var No=null;function ZT(t){return No=No||XT(t),No}var eA=new An(5e3,15e3),tA="__/auth/iframe",nA="emulator/auth/iframe",rA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iA(t){let e=t.config;T(e.authDomain,t,"auth-domain-config-required");let n=e.emulator?sh(e,nA):`https://${t.config.authDomain}/${tA}`,r={apiKey:e.apiKey,appName:t.name,v:nt},s=sA.get(t.config.apiHost);s&&(r.eid=s);let i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vn(r).slice(1)}`}async function oA(t){let e=await ZT(t),n=pt().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:iA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});let o=mt(t,"network-request-failed"),a=pt().setTimeout(()=>{i(o)},eA.get());function c(){pt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}var aA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cA=500,uA=600,lA="_blank",hA="http://localhost",Jo=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function dA(t,e,n,r=cA,s=uA){let i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",c=Object.assign(Object.assign({},aA),{width:r.toString(),height:s.toString(),top:i,left:o}),u=$().toLowerCase();n&&(a=Qp(u)?lA:n),Wp(u)&&(e=e||hA,c.scrollbars="yes");let l=Object.entries(c).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(OE(u)&&a!=="_self")return fA(e||"",a),new Jo(null);let h=window.open(e||"",a,l);T(h,t,"popup-blocked");try{h.focus()}catch{}return new Jo(h)}function fA(t,e){let n=document.createElement("a");n.href=t,n.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var mA="__/auth/handler",pA="emulator/auth/handler",gA=encodeURIComponent("fac");async function Mp(t,e,n,r,s,i){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");let o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nt,eventId:s};if(e instanceof zo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof Pn){let l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);let a=o;for(let l of Object.keys(a))a[l]===void 0&&delete a[l];let c=await t._getAppCheckToken(),u=c?`#${gA}=${encodeURIComponent(c)}`:"";return`${_A(t)}?${Vn(a).slice(1)}${u}`}function _A({config:t}){return t.emulator?sh(t,pA):`https://${t.authDomain}/${mA}`}var Ml="webStorageSupport",eh=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ph,this._completeRedirectFn=jT,this._overrideRedirectResult=qT}async _openPopup(e,n,r,s){var i;St((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");let o=await Mp(e,n,r,Ul(),s);return dA(e,o,gh())}async _openRedirect(e,n,r,s){await this._originValidation(e);let i=await Mp(e,n,r,Ul(),s);return IT(i),new Promise(()=>{})}_initialize(e){let n=e._key();if(this.eventManagers[n]){let{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(St(i,"If manager is not set, promise should be"),i)}let r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){let n=await oA(e),r=new Zl(e);return n.register("authEvent",s=>(T(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ml,{type:Ml},s=>{var i;let o=(i=s?.[0])===null||i===void 0?void 0:i[Ml];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eg()||oh()||ra()}},vg=eh,Xo=class{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ft("unexpected MultiFactorSessionType")}}},th=class t extends Xo{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t(e)}_finalizeEnroll(e,n,r){return dT(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return CT(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Zo=class{constructor(){}static assertion(e){return th._fromCredential(e)}};Zo.FACTOR_ID="phone";var ea=class{static assertionForEnrollment(e,n){return ta._fromSecret(e,n)}static assertionForSignIn(e,n){return ta._fromEnrollmentId(e,n)}static async generateSecret(e){var n;let r=e;T(typeof((n=r.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");let s=await fT(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return na._fromStartTotpMfaEnrollmentResponse(s,r.user.auth)}};ea.FACTOR_ID="totp";var ta=class t extends Xo{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new t(n,void 0,e)}static _fromEnrollmentId(e,n){return new t(n,e)}async _finalizeEnroll(e,n,r){return T(typeof this.secret<"u",e,"argument-error"),mT(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){T(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return DT(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},na=class t{constructor(e,n,r,s,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var r;let s=!1;return(Po(e)||Po(n))&&(s=!0),s&&(Po(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Po(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Po(t){return typeof t>"u"||t?.length===0}var Up="@firebase/auth",Fp="1.5.1";var nh=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function yA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function IA(t){je(new Ie("auth",(e,{options:n})=>{let r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tg(t)},u=new $l(r,s,i,c);return jE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),je(new Ie("auth-internal",e=>{let n=Ht(e.getProvider("auth").getImmediate());return(r=>new nh(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ue(Up,Fp,yA(t)),ue(Up,Fp,"esm2017")}var wA=5*60,vA=ba("authIdTokenMaxAge")||wA,qp=null,EA=t=>async e=>{let n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vA)return;let s=n?.token;qp!==s&&(qp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _h(t=xt()){let e=wt(t,"auth");if(e.isInitialized())return e.getImmediate();let n=sg(t,{popupRedirectResolver:vg,persistence:[Ig,pg,ph]}),r=ba("authTokenSyncURL");if(r){let i=EA(r);mg(n,i,()=>i(n.currentUser)),fg(n,o=>i(o))}let s=Ta("auth");return s&&ig(n,`http://${s}`),n}IA("Browser");var TA="type.googleapis.com/google.protobuf.Int64Value",AA="type.googleapis.com/google.protobuf.UInt64Value";function bg(t,e){let n={};for(let r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function yh(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>yh(e));if(typeof t=="function"||typeof t=="object")return bg(t,e=>yh(e));throw new Error("Data cannot be encoded in JSON: "+t)}function ia(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case TA:case AA:{let e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>ia(e)):typeof t=="function"||typeof t=="object"?bg(t,e=>ia(e)):t}var Eh="functions";var Eg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Wt=class extends ce{constructor(e,n,r){super(`${Eh}/${e}`,n||""),this.details=r}};function bA(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function SA(t,e){let n=bA(t),r=n,s;try{let i=e&&e.error;if(i){let o=i.status;if(typeof o=="string"){if(!Eg[o])return new Wt("internal","internal");n=Eg[o],r=o}let a=i.message;typeof a=="string"&&(r=a),s=i.details,s!==void 0&&(s=ia(s))}}catch{}return n==="ok"?null:new Wt(n,r,s)}var Ih=class{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{let e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){let n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){let n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}};var wh="us-central1";function RA(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Wt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}var vh=class{constructor(e,n,r,s,i=wh,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Ih(n,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{let a=new URL(i);this.customDomain=a.origin,this.region=wh}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){let n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}};function PA(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function CA(t,e,n){return r=>kA(t,e,r,n||{})}async function DA(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function kA(t,e,n,r){let s=t._url(e);return NA(t,s,n,r)}async function NA(t,e,n,r){n=yh(n);let s={data:n},i={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);let a=r.timeout||7e4,c=RA(a),u=await Promise.race([DA(e,s,i,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!u)throw new Wt("cancelled","Firebase Functions instance was deleted.");let l=SA(u.status,u.json);if(l)throw l;if(!u.json)throw new Wt("internal","Response is not valid JSON object.");let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new Wt("internal","Response is missing data field.");return{data:ia(h)}}var Tg="@firebase/functions",Ag="0.11.0";var xA="auth-internal",OA="app-check-internal",LA="messaging-internal";function VA(t,e){let n=(r,{instanceIdentifier:s})=>{let i=r.getProvider("app").getImmediate(),o=r.getProvider(xA),a=r.getProvider(LA),c=r.getProvider(OA);return new vh(i,o,a,c,s,t)};je(new Ie(Eh,n,"PUBLIC").setMultipleInstances(!0)),ue(Tg,Ag,e),ue(Tg,Ag,"esm2017")}function Sg(t=xt(),e=wh){let r=wt(L(t),Eh).getImmediate({identifier:e}),s=Ln("functions");return s&&MA(r,...s),r}function MA(t,e,n){PA(L(t),e,n)}function Qt(t,e,n){return CA(L(t),e,n)}VA(fetch.bind(self));var UA={apiKey:"AIzaSyCuzMDALA6IDegRI8-suNTEgm1ZJLwDHhI",authDomain:"performance-food-1566579119507.firebaseapp.com",databaseURL:"https://performance-food-1566579119507.firebaseio.com",projectId:"performance-food-1566579119507",storageBucket:"performance-food-1566579119507.appspot.com",messagingSenderId:"386651551755",appId:"1:386651551755:web:b127ed813e78bf80112f0e",measurementId:"G-P0HSJ7KDYL"},Th=qa(UA),gt=_h(Th),se=fp(Th),Yt=Sg(Th);var oa=[],aa=[],Ah=[];var gr=[],Os=0,bh=0,Ls=()=>gr,ca=t=>{Array.isArray(t)?gr=t:gr=[t],Os=t.length};var Rg=(t,e)=>{let n=gr.findIndex(r=>r.userId===t);n!==-1?gr[n]=e:(Os++,gr.push(e))},Pg=()=>Os,Cg=(t=Os)=>{Os=t},Dg=()=>bh,kg=(t=bh)=>{bh=t},Ng=()=>oa,xg=t=>{Array.isArray(t)?oa=t:oa=[t]},Og=t=>{oa.push(t)},Vs=()=>aa,ua=t=>{Array.isArray(t)?aa=t:aa=[t]},Lg=t=>{aa.push(t)},Sh=()=>Ah,la=t=>{Array.isArray(t)?Ah=t:Ah=[t]};var Vg=()=>{let t=document.querySelectorAll("[data-element='combo-box-component']");t.length&&t.forEach(e=>{let n=e.querySelectorAll("input")[0],r=e.firstElementChild.nextElementSibling.firstElementChild,s=r.firstElementChild,i=r.nextElementSibling,o=i.nextElementSibling,a=e.parentElement.parentElement.nextElementSibling,c=document.querySelector("[data-element='combo-box-pill']"),{userRole:u}=X(),l,h=async()=>{let y=n.value;clearTimeout(l),l=setTimeout(async()=>{if(r.innerHTML="",y.length===0){r.parentElement.style.display="none";return}i.style.display="block",o.style.display="none";let p=await d(y);la(f(p)),Sh().length===0?(i.style.display="none",o.style.display="block"):(o.style.display="none",i.style.display="none",_(Sh())),r.parentElement.style.display="block"},300)},d=async y=>{if(u==="multiLocationAdmin")return Ng();if(u==="corporateAdmin"){let p=At(se,"locations"),w=Ae(p,Q("name",">=",y),Q("name","<=",y+"\uF8FF"),vp("name"),Ue(5)),S=(await Tn(w)).docs.map(P=>({id:P.id,locationId:P.data().locationId,name:P.data().name}));return xg(S),S}},f=y=>{let p=Vs();return y.filter(w=>!p.some(b=>b.id===w.id))},_=y=>{r.innerHTML="",y.forEach(p=>{let w=s.cloneNode(!0);w.textContent=p.name,w.addEventListener("click",()=>Rh(p,c,r,n,a)),r.appendChild(w)})};n.addEventListener("input",h)})},Rh=(t,e,n,r,s)=>{let i=e.cloneNode(!0);i.firstChild.textContent=t.name,i.firstElementChild.nextElementSibling.addEventListener("click",()=>{FA(t,i,s)}),r.parentNode.insertBefore(i,r),Lg(t),i.style.display="flex",r.value="",n.innerHTML="";let o=[];Vs().forEach(a=>{o.push(a.id)}),s.value=o.join(",")},FA=(t,e,n)=>{e.remove(),ua(Vs().filter(s=>s.id!==t.id));let r=[];Vs().forEach(s=>{r.push(s.id)}),n.value=r.join(",")},Mg=t=>{let e=t.firstElementChild.nextElementSibling.firstElementChild,n=t.querySelectorAll("[data-element='combo-box-pill']");n&&n.forEach(r=>{r.remove()}),e.innerHTML="",t.parentElement.parentElement.nextElementSibling.value="",e.parentElement.style.display="none"};var Jt=t=>{let e=document.querySelector(`[data-modal=${t}]`);e.classList.add("is-open");let n=e.firstElementChild,r=()=>{Ms(t),n.removeEventListener("click",r)};n.addEventListener("click",r)},Ms=t=>{let e=document.querySelector(`[data-modal=${t}]`),n=e.querySelector("form");if(n){n.reset();let r=n.querySelector("[data-element='combo-box-component']");r&&(t==="update-user"||t==="create-user")&&(ua([]),la([]),Mg(r))}e.classList.remove("is-open")};var ha=t=>{switch(t){case"corporateAdmin":return"PFC";case"multiLocationAdmin":return"Multi-Location Admin";case"locationManager":return"Manager";case"fitnessStaff":return"Fitness Staff";case"barStaff":return"Shake/Smoothie Bar Staff";case"other":return"Other";default:return"An unknown error occurred."}};var Gg="firebasestorage.googleapis.com",$g="storageBucket",qA=2*60*1e3,BA=10*60*1e3;var Y=class t extends ce{constructor(e,n,r=0){super(Ph(e),`Firebase Storage: ${n} (${Ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}},J;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(J||(J={}));function Ph(t){return"storage/"+t}function Oh(){let t="An unknown error occurred, please check the error payload for server response.";return new Y(J.UNKNOWN,t)}function zA(t){return new Y(J.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jA(t){return new Y(J.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GA(){let t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Y(J.UNAUTHENTICATED,t)}function $A(){return new Y(J.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function KA(t){return new Y(J.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function HA(){return new Y(J.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function WA(){return new Y(J.CANCELED,"User canceled the upload/download.")}function QA(t){return new Y(J.INVALID_URL,"Invalid URL '"+t+"'.")}function YA(t){return new Y(J.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function JA(){return new Y(J.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$g+"' property when initializing the app?")}function XA(){return new Y(J.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ZA(){return new Y(J.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function eb(t){return new Y(J.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ch(t){return new Y(J.INVALID_ARGUMENT,t)}function Kg(){return new Y(J.APP_DELETED,"The Firebase app was deleted.")}function tb(t){return new Y(J.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fs(t,e){return new Y(J.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Us(t){throw new Y(J.INTERNAL_ERROR,"Internal error: "+t)}var Xe=class t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=t.makeFromUrl(e,n)}catch{return new t(e,"")}if(r.path==="")return r;throw YA(e)}static makeFromUrl(e,n){let r=null,s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}let o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}let l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},y=n===Gg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",w=new RegExp(`^https?://${y}/${s}/${p}`,"i"),S=[{regex:a,indices:c,postModify:i},{regex:f,indices:_,postModify:u},{regex:w,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<S.length;P++){let x=S[P],U=x.regex.exec(e);if(U){let be=U[x.indices.bucket],Se=U[x.indices.path];Se||(Se=""),r=new t(be,Se),x.postModify(r);break}}if(r==null)throw QA(e);return r}},Dh=class{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function nb(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...p){u||(u=!0,e.apply(null,p))}function h(p){s=setTimeout(()=>{s=null,t(f,c())},p)}function d(){i&&clearTimeout(i)}function f(p,...w){if(u){d();return}if(p){d(),l.call(null,p,...w);return}if(c()||o){d(),l.call(null,p,...w);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,h(S)}let _=!1;function y(p){_||(_=!0,d(),!u&&(s!==null?(p||(a=2),clearTimeout(s),h(0)):p||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function rb(t){t(!1)}function sb(t){return t!==void 0}function ib(t){return typeof t=="object"&&!Array.isArray(t)}function Lh(t){return typeof t=="string"||t instanceof String}function Ug(t){return Vh()&&t instanceof Blob}function Vh(){return typeof Blob<"u"}function Fg(t,e,n,r){if(r<e)throw Ch(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ch(`Invalid value for '${t}'. Expected ${n} or less.`)}function Mh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Hg(t){let e=encodeURIComponent,n="?";for(let r in t)if(t.hasOwnProperty(r)){let s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var kn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(kn||(kn={}));function ob(t,e){let n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}var kh=class{constructor(e,n,r,s,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){let e=(r,s)=>{if(s){r(!1,new _r(!1,null,!0));return}let i=this.connectionFactory_();this.pendingConnection_=i;let o=a=>{let c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;let a=i.getErrorCode()===kn.NO_ERROR,c=i.getStatus();if(!a||ob(c,this.additionalRetryCodes_)&&this.retry){let l=i.getErrorCode()===kn.ABORT;r(!1,new _r(!1,null,l));return}let u=this.successCodes_.indexOf(c)!==-1;r(!0,new _r(u,i))})},n=(r,s)=>{let i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{let c=this.callback_(a,a.getResponse());sb(c)?i(c):i()}catch(c){o(c)}else if(a!==null){let c=Oh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){let c=this.appDelete_?Kg():WA();o(c)}else{let c=HA();o(c)}};this.canceled_?n(!1,new _r(!1,null,!0)):this.backoffId_=nb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},_r=class{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}};function ab(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ub(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hb(t,e,n,r,s,i,o=!0){let a=Hg(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return ub(u,e),ab(u,n),cb(u,i),lb(u,r),new kh(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}function db(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fb(...t){let e=db();if(e!==void 0){let n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Vh())return new Blob(t);throw new Y(J.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}function pb(t){if(typeof atob>"u")throw eb("base-64");return atob(t)}var _t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},qs=class{constructor(e,n){this.data=e,this.contentType=n||null}};function gb(t,e){switch(t){case _t.RAW:return new qs(Wg(e));case _t.BASE64:case _t.BASE64URL:return new qs(Qg(t,e));case _t.DATA_URL:return new qs(yb(e),Ib(e))}throw Oh()}function Wg(t){let e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{let i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _b(t){let e;try{e=decodeURIComponent(t)}catch{throw Fs(_t.DATA_URL,"Malformed data URL.")}return Wg(e)}function Qg(t,e){switch(t){case _t.BASE64:{let s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Fs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case _t.BASE64URL:{let s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Fs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=pb(e)}catch(s){throw s.message.includes("polyfill")?s:Fs(t,"Invalid character found")}let r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}var fa=class{constructor(e){this.base64=!1,this.contentType=null;let n=e.match(/^data:([^,]+)?,/);if(n===null)throw Fs(_t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=n[1]||null;r!=null&&(this.base64=wb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}};function yb(t){let e=new fa(t);return e.base64?Qg(_t.BASE64,e.rest):_b(e.rest)}function Ib(t){return new fa(t).contentType}function wb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}var ma=class t{constructor(e,n){let r=0,s="";Ug(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ug(this.data_)){let r=this.data_,s=mb(r,e,n);return s===null?null:new t(s)}else{let r=new Uint8Array(this.data_.buffer,e,n-e);return new t(r,!0)}}static getBlob(...e){if(Vh()){let n=e.map(r=>r instanceof t?r.data_:r);return new t(fb.apply(null,n))}else{let n=e.map(o=>Lh(o)?gb(_t.RAW,o).data:o.data_),r=0;n.forEach(o=>{r+=o.byteLength});let s=new Uint8Array(r),i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new t(s,!0)}}uploadData(){return this.data_}};function Yg(t){let e;try{e=JSON.parse(t)}catch{return null}return ib(e)?e:null}function vb(t){if(t.length===0)return null;let e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Eb(t,e){let n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Jg(t){let e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}function Tb(t,e){return e}var me=class{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Tb}},da=null;function Ab(t){return!Lh(t)||t.length<2?t:Jg(t)}function Xg(){if(da)return da;let t=[];t.push(new me("bucket")),t.push(new me("generation")),t.push(new me("metageneration")),t.push(new me("name","fullPath",!0));function e(i,o){return Ab(o)}let n=new me("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}let s=new me("size");return s.xform=r,t.push(s),t.push(new me("timeCreated")),t.push(new me("updated")),t.push(new me("md5Hash",null,!0)),t.push(new me("cacheControl",null,!0)),t.push(new me("contentDisposition",null,!0)),t.push(new me("contentEncoding",null,!0)),t.push(new me("contentLanguage",null,!0)),t.push(new me("contentType",null,!0)),t.push(new me("metadata","customMetadata",!0)),da=t,da}function bb(t,e){function n(){let r=t.bucket,s=t.fullPath,i=new Xe(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Sb(t,e,n){let r={};r.type="file";let s=n.length;for(let i=0;i<s;i++){let o=n[i];r[o.local]=o.xform(r,e[o.server])}return bb(r,t),r}function Zg(t,e,n){let r=Yg(e);return r===null?null:Sb(t,r,n)}function Rb(t,e,n,r){let s=Yg(e);if(s===null||!Lh(s.downloadTokens))return null;let i=s.downloadTokens;if(i.length===0)return null;let o=encodeURIComponent;return i.split(",").map(u=>{let l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=Mh(d,n,r),_=Hg({alt:"media",token:u});return f+_})[0]}function Pb(t,e){let n={},r=e.length;for(let s=0;s<r;s++){let i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}var pa=class{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};function e_(t){if(!t)throw Oh()}function Cb(t,e){function n(r,s){let i=Zg(t,s,e);return e_(i!==null),i}return n}function Db(t,e){function n(r,s){let i=Zg(t,s,e);return e_(i!==null),Rb(i,s,t.host,t._protocol)}return n}function t_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=$A():s=GA():n.getStatus()===402?s=jA(t.bucket):n.getStatus()===403?s=KA(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function kb(t){let e=t_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=zA(t.path)),i.serverResponse=s.serverResponse,i}return n}function Nb(t,e,n){let r=e.fullServerUrl(),s=Mh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new pa(s,i,Db(t,n),o);return a.errorHandler=kb(e),a}function xb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ob(t,e,n){let r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=xb(null,e)),r}function Lb(t,e,n,r,s){let i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let P=0;P<2;P++)S=S+Math.random().toString().slice(2);return S}let c=a();o["Content-Type"]="multipart/related; boundary="+c;let u=Ob(e,r,s),l=Pb(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=ma.getBlob(h,r,d);if(f===null)throw XA();let _={name:u.fullPath},y=Mh(i,t.host,t._protocol),p="POST",w=t.maxUploadRetryTime,b=new pa(y,p,Cb(t,n),w);return b.urlParams=_,b.headers=o,b.body=f.uploadData(),b.errorHandler=t_(e),b}var _R=256*1024;var qg=null,Nh=class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=kn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=kn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=kn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Us("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(let i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Us("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Us("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Us("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Us("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}},xh=class extends Nh{initXhr(){this.xhr_.responseType="text"}};function n_(){return qg?qg():new xh}var yr=class t{constructor(e,n){this._service=e,n instanceof Xe?this._location=n:this._location=Xe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new t(e,n)}get root(){let e=new Xe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jg(this._location.path)}get storage(){return this._service}get parent(){let e=vb(this._location.path);if(e===null)return null;let n=new Xe(this._location.bucket,e);return new t(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tb(e)}};function Vb(t,e,n){t._throwIfRoot("uploadBytes");let r=Lb(t.storage,t._location,Xg(),new ma(e,!0),n);return t.storage.makeRequestWithTokens(r,n_).then(s=>({metadata:s,ref:t}))}function Mb(t){t._throwIfRoot("getDownloadURL");let e=Nb(t.storage,t._location,Xg());return t.storage.makeRequestWithTokens(e,n_).then(n=>{if(n===null)throw ZA();return n})}function Ub(t,e){let n=Eb(t._location.path,e),r=new Xe(t._location.bucket,n);return new yr(t.storage,r)}function Fb(t){return/^[A-Za-z]+:\/\//.test(t)}function qb(t,e){return new yr(t,e)}function r_(t,e){if(t instanceof Bs){let n=t;if(n._bucket==null)throw JA();let r=new yr(n,n._bucket);return e!=null?r_(r,e):r}else return e!==void 0?Ub(t,e):t}function Bb(t,e){if(e&&Fb(e)){if(t instanceof Bs)return qb(t,e);throw Ch("To use ref(service, url), the first argument must be a Storage instance.")}else return r_(t,e)}function Bg(t,e){let n=e?.[$g];return n==null?null:Xe.makeFromBucketSpec(n,t)}function zb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";let{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Zs(s,t.app.options.projectId))}var Bs=class{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Gg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qA,this._maxUploadRetryTime=BA,this._requests=new Set,s!=null?this._bucket=Xe.makeFromBucketSpec(s,this._host):this._bucket=Bg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xe.makeFromBucketSpec(this._url,e):this._bucket=Bg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Dh(Kg());{let o=hb(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){let[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}},zg="@firebase/storage",jg="0.12.0";var s_="storage";function i_(t,e,n){return t=L(t),Vb(t,e,n)}function o_(t){return t=L(t),Mb(t)}function a_(t,e){return t=L(t),Bb(t,e)}function c_(t=xt(),e){t=L(t);let r=wt(t,s_).getImmediate({identifier:e}),s=Ln("storage");return s&&jb(r,...s),r}function jb(t,e,n,r={}){zb(t,e,n,r)}function Gb(t,{instanceIdentifier:e}){let n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Bs(n,r,s,e,nt)}function $b(){je(new Ie(s_,Gb,"PUBLIC").setMultipleInstances(!0)),ue(zg,jg,""),ue(zg,jg,"esm2017")}$b();var u_=async t=>{try{let e=Be();if(e){let n=c_(),r=a_(n,`profile-pictures/${e.uid}`),[s]=await Promise.all([i_(r,t),o_(r),xs(e,{photoURL:s})]);return{success:!0,message:"Profile pic added successfully"}}return{success:!1,message:"User is not authenticated"}}catch(e){return{success:!1,message:e}}};var ga=()=>new Promise(async(t,e)=>{let n=fh(gt,async r=>{try{if(r){let s=await r.getIdTokenResult(),i=s.claims;if(r.uid){let o=await h_(r.uid),a=o.userDocument.data();if(a.photoURL=r.photoURL,o.success){Nn("userId",r.uid),Nn("userToken",s.token),Nn("userData",a),Ks(r),Hs(r.uid),Ws(s.token),Ct(a),Qs(i),t({authUser:r,userData:a});return}return t({authUser:r}),r}}else{let s=localStorage.getItem("userToken");Kb(),t(s?{authUser:null,storedToken:s}:null)}}catch(s){e(s)}finally{n()}},r=>{e(r)})});var Kb=()=>{window.location.pathname.startsWith("/members/")&&window.location.pathname!=="/login"&&(window.location.href="/login"),localStorage.clear()};var l_=()=>{let t=document.querySelectorAll("[data-pfc-content]"),e=ze(),n=e?X():null;t&&t.length&&t.forEach(r=>{let s=r.getAttribute("data-pfc-content");if(e){let i=n.userRole;!Uh(i,s)&&s!=="members"?r.remove():r.style.display="block"}else s.startsWith("!members")?r.style.display="block":r.remove()})},Uh=(t,e)=>e==="corporateAdmin"&&t==="corporateAdmin"||e==="multiLocationAdmin"&&(t==="multiLocationAdmin"||t==="corporateAdmin")||e==="locationManager"&&(t==="locationManager"||t==="multiLocationAdmin"||t==="corporateAdmin")||e==="staff";var h_=async t=>{try{let e=Pt(t),n=await fe(e);return n.exists()?{success:!0,userDocument:n}:{success:!1,message:"Couldn't find the users document"}}catch(e){return{success:!1,message:e.message}}};var d_=async t=>{try{let e=await h_(t);return e.success?{success:!0,courses:e.userDocument.data().courses||[],userDocRef:e.userDocument.ref}:{success:!1,message:"There is no courses array"}}catch(e){return{success:!1,message:e.message}}},xn=t=>{try{let e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(e){return console.error(`Error fetching from localStorage (${t}):`,e),null}},Nn=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch(n){console.error(`Error setting to localStorage (${t}):`,n)}},Pt=t=>t?Me(se,"users",t):(C("Couldn't get the user document."),null);var Xt=()=>JSON.parse(localStorage.getItem("userData"));var f_=async t=>{try{let e=Be();if(e){let n=e.email,r=t.value;if(r!==n){await hh(e,r);let i=Pt().data();return await dt(e.uid,{...i,email:r}),{success:!0,message:"Email updated successfully"}}}return{success:!1,message:"User is not authenticated"}}catch(e){return{success:!1,message:e}}};var m_=async(t,e)=>{try{let n=Be();if(n){let r=t.value,s=e.value,i=Rt.credential(n.email,r);return await ah(n,i),await dh(n,s),{success:!0,message:"Password updated successfully"}}return{success:!1,message:"User is not authenticated"}}catch(n){return{success:!1,message:n}}};var p_=async(t,e,n)=>{try{let r=Be();if(r){let s=ze(),i=Pt(s);return await Ap(se,async o=>{let a=await o.get(i);if(!a.exists())return{success:!1,error:"User's document not found in Firestore"};let c=a.data(),u=t?t.value:"",l=e?e.value:"",h=n?n.value:"",d={firstName:u,lastName:l,phone:h};o.update(i,{...c,...d}),await xs(r,{displayName:`${u} ${l}`,phoneNumber:h}),localStorage.setItem("userData",JSON.stringify({...c,...d}))}),{success:!0,message:"Profile updated successfully"}}return{success:!1,message:"User is not authenticated"}}catch(r){return{success:!1,message:r}}};var g_=()=>{let t=document.querySelector('[data-pfc-action="upload-profile-image"]');if(t){let e=t.nextElementSibling;e&&(t.addEventListener("click",()=>{e.click()}),e.addEventListener("change",async n=>{let r=n.target.files[0];try{_e(t,"Uploading...");let s=await u_(r);s.success?(O(t),ye(s.message)):(O(t),C(s.message))}catch(s){O(t),C(s.message)}}))}},__=async()=>{let t=ge("profile");if(t){let e=t.querySelector('[data-pfc-member="firstName"]'),n=t.querySelector('[data-pfc-member="lastName"]'),r=t.querySelector('[data-pfc-member="phone"]'),s=document.querySelector('[data-pfc-member="userRole"]'),i=document.querySelectorAll('[data-pfc-member="email"]'),o=document.querySelector('[data-pfc-member="profile-image"]');try{let a=De();if(a){e&&(e.value=a.firstName),n&&(n.value=a.lastName),r&&(r.value=a.phone?a.phone:""),s?s.textContent=ha(a.userRole):s.textContent="User does not have a role.",i.length&&i.forEach(u=>{u instanceof HTMLInputElement?u.value=a.email:u.textContent=a.email});let c=a.photoURL!==null;o&&(o.src=c?a.photoURL:"https://uploads-ssl.webflow.com/650ef33ce788a656013c96da/6524c70660697f8ca2c9a15d_profile-icon.svg")}else C("No user found")}catch(a){C(a.message)}}},y_=()=>{let t=ge("profile");if(t){let e=t.querySelector('[data-pfc-member="firstName"]'),n=t.querySelector('[data-pfc-member="lastName"]'),r=t.querySelector('[data-pfc-member="phone"]'),s=t.querySelector('[type="submit"]');t.addEventListener("submit",async i=>{i.preventDefault();try{_e(s,"Saving...");let o=await p_(e,n,r);o.success?(O(s),ye(o.message)):(O(s),C(o.message))}catch(o){O(s),C(o.message)}})}},I_=()=>{let t=ge("update-email");if(t){let e=t.querySelector('[data-pfc-member="email"]'),n=t.querySelector('[type="submit"]');t.addEventListener("submit",async r=>{r.preventDefault();try{_e(n,"Confirming...");let s=await f_(e);s.success?(O(n),ye(s.message)):(O(n),C(s.message))}catch(s){O(n),C(s.message)}})}},w_=()=>{let t=ge("update-password");if(t){let e=t.querySelector('[data-pfc-member="current-password"]'),n=t.querySelector('[data-pfc-member="new-password"]'),r=t.querySelector('[type="submit"]');t.addEventListener("submit",async s=>{s.preventDefault();try{_e(r,"Updating...");let i=await m_(e,n);i.success?(O(r),ye(i.message)):(O(r),C(i.message))}catch(i){O(r),C(i.message)}})}},v_=()=>{let t=document.querySelector("[data-pfc-action='change-email']");t&&t.addEventListener("click",()=>{Jt("change-email")})},E_=()=>{let t=document.querySelector("[data-pfc-action='update-password']");t&&t.addEventListener("click",()=>{Jt("update-password")})};var Ir=async(t,e,n,r="create")=>{let s=n.cloneNode(!0),i=s.querySelector("[data-pfc-member='firstName']"),o=s.querySelector("[data-pfc-member='lastName']"),a=s.querySelector("[data-pfc-member='email']"),c=s.querySelector("[data-pfc-member='location']"),u=s.querySelector("[data-pfc-member='userRole']"),l=s.querySelector("[data-toggle]"),h=s.querySelector("[data-pfc-action='view-user']"),d=s.querySelector("[data-pfc-action='update-user']"),f=s.querySelector("[data-pfc-action='delete-user']"),_=l.parentElement,y=X().userRole,p=y==="locationManager"?De().locations[0]:"";(t.userRole==="multiLocationAdmin"||t.userRole==="corporateAdmin")&&!Uh(y,"multiLocationAdmin")&&_.remove(),s.setAttribute("data-id",t.userId),i.textContent=t.firstName||"--",o.textContent=t.lastName||"--",a.textContent=t.email||"--";let{locations:w}=t;w&&(w.length>1?(w.forEach(x=>{let U=c.cloneNode(!0);U.textContent=x.name,c.parentElement.appendChild(U)}),c.remove()):w.length===1?c.textContent=w[0].name:c.remove()),u.textContent=t.userRole?ha(t.userRole):"--";let b=()=>{l.nextElementSibling.classList.toggle("is-open")};h.href=`/members/user?userId=${t.userId}`;let S=()=>{let x=ge("update-user"),U=x.querySelector("[data-pfc-member='firstName']"),be=x.querySelector("[data-pfc-member='lastName']"),Se=x.querySelector("[data-pfc-member='email']"),He=x.querySelector("[data-pfc-member='phone']"),qe=x.querySelector("[data-pfc-member='locations']"),zh=qe.previousElementSibling.querySelector(".combo-box_dropdown-list")||null,dy=document.querySelector("[data-element='combo-box-pill']")||null,fy=x.querySelector(".combo-box_input")||null,my=x.querySelector("[data-pfc-member='userRole']"),py=x.querySelector("[data-pfc-member='id']");U.value=t.firstName,be.value=t.lastName,Se.value=t.email,He.value=t.phone||"",w&&zh?w.length?w.forEach(gy=>{Rh(gy,dy,zh.firstChild,fy,qe)}):qe.value="":qe.value=p.replace("locations/",""),my.value=t.userRole,py.value=t.userId,Jt("update-user")},P=()=>{let U=ge("delete-user").querySelector("[data-pfc-member='id']");U.value=t.userId,Jt("delete-user")};return h.addEventListener("click",()=>{handleViewUserClick()}),d.addEventListener("click",x=>{x.target.parentElement.classList.remove("is-open"),S()}),f.addEventListener("click",x=>{x.target.parentElement.classList.remove("is-open"),P()}),l.addEventListener("click",()=>{b()}),r==="create"&&e.prepend(s),s};var T_=async(t,e,n,r,s,i,o)=>{try{let c=X().userRole;if(c==="corporateAdmin"||c==="multiLocationAdmin"||c==="locationManager")try{let d=await Qt(Yt,"createOrgUser")({firstName:t,lastName:e,email:n,phone:r,password:s,locations:i,userRole:o});if(d.data.success){let f=d.data.userData,_=f.locations,y=[];if(_&&_.length){for(let w of _){let b=Me(se,w),S=await fe(b);if(S.exists()){let P=S.data();P.id=S.id,y.push(P)}else console.error(`Location document not found for reference: ${b.id}`)}f.locations=y;let p=Ls();return ca(p.concat(f)),{success:!0,message:d.data.message,userData:f}}f.locations=[]}return{success:!1,message:d.data.message}}catch{return{success:!1,message:"Couldn't successfully call the create org user function"}}return{success:!1,message:"User does not have appropriate permissions"}}catch(a){return{success:!1,message:a.message}}};var A_=async t=>{try{let n=X().userRole;if(n==="corporateAdmin"||n==="multiLocationAdmin"||n==="locationManager")try{let o=await Qt(Yt,"deleteOrgUser")({userId:t});return console.log(o),o.data.success?{success:!0,message:o.data.message}:{success:!1,message:o.data.message}}catch{return{success:!1,message:"Couldn't successfully call the delete org user function"}}}catch(e){return{success:!1,message:e.message}}};var b_=async(t=null,e=1,n=10)=>{try{let r=ze(),s=X(),{userRole:i}=s,o=At(se,"users"),a=async(d,f)=>{let _=d(),y=await Tn(_),p=y.size,w=[];for(let S of y.docs)if(S.id!==r){let P={userId:S.id,...S.data()},x=P.locations,U=[];if(x&&x.length){for(let be of x){let Se=Me(se,be),He=await fe(Se);if(He.exists()){let qe=He.data();qe.id=He.id,U.push(qe)}else console.error(`Location document not found for reference: ${Se.id}`)}P.locations=U}else P.locations=[];w.push(P)}console.log(w);let b=Ls();return ca(w),console.log(Ls()),{success:!0,usersData:w,totalSize:f,visibleSize:p}},c=async()=>{let d=De().locations[0],f=()=>Ae(o,Q("locations","array-contains",d),Ue(10)),y=await h(()=>Ae(o,Q("locations","array-contains",d)));return a(()=>f(),y)},u=async()=>{let d=De().locations,f=d.map(w=>Me(se,w));if(f.length>0)for(let w of f){let b=await fe(w);if(b.exists()){let S=b.data(),P=b.id;Og({id:P,...S})}else console.error(`Location document not found for reference: ${w.path}`)}let _=()=>Ae(o,Q("locations","array-contains-any",d),Ue(10)),p=await h(()=>Ae(o,Q("locations","array-contains-any",d)));return a(()=>_(),p)},l=async()=>{let d=()=>Ae(o,Ue(10)),_=await h(()=>Ae(o));return a(()=>d(),_)},h=async d=>{let f=d();return(await Tn(f)).size};switch(i){case"locationManager":return c();case"multiLocationAdmin":return u();case"corporateAdmin":return l();default:return{success:!1,message:"Unsupported user type"}}}catch(r){return{success:!1,message:`Error loading users: ${r}`}}};var S_=async(t,e=1,n=10)=>{try{let r=ze(),s=X(),{userRole:i}=s,o=async h=>{let d=h(),f=await Tn(d),_=[];for(let y of f.docs)if(y.id!==r){let p={userId:y.id,...y.data()},w=p.locations,b=[];if(w&&w.length){for(let S of w){let P=Me(se,S),x=await fe(P);if(x.exists()){let U=x.data();U.id=x.id,b.push(U)}else console.error(`Location document not found for reference: ${P.id}`)}p.locations=b}else p.locations=[];_.push(p)}return{success:!0,usersData:_}},a=At(se,"users"),c=()=>{let h=De().locations[0];return t.length>0?o(()=>Ae(a,Ll(Q("locations","array-contains",h),So(Q("firstName","==",t),Q("lastName","==",t),Q("email","==",t))),Ue(10))):o(()=>Ae(a,Q("locations","array-contains",h),Ue(10)))},u=()=>{let h=De().locations;return t.length?o(()=>Ae(a,Ll(Q("locations","array-contains-any",h),So(Q("firstName","==",t),Q("lastName","==",t),Q("email","==",t))),Ue(10))):o(()=>Ae(a,Q("locations","array-contains-any",h),Ue(10)))},l=()=>t.length>0?o(()=>Ae(a,So(Q("firstName","==",t),Q("lastName","==",t),Q("email","==",t)),Ue(10))):o(()=>Ae(At(se,"users"),Ue(10)));switch(i){case"locationManager":return c();case"multiLocationAdmin":return u();case"corporateAdmin":return l();default:return{success:!1,message:"Unsupported user type"}}}catch(r){return{success:!1,message:`Error loading users: ${r}`}}};var R_=async(t,e,n)=>{let r=e.querySelector(`[data-id='${t.userId}']`),s=await Ir(t,e,n,"update");e.replaceChild(s,r)};var P_=async(t,e,n,r,s,i,o)=>{try{let c=X().userRole;if(c==="corporateAdmin"||c==="multiLocationAdmin"||c==="locationManager")try{let l=Qt(Yt,"updateOrgUser"),h={userId:t,firstName:e,lastName:n,email:r,phone:s,locations:i,userRole:o};console.log(h);let d=await l(h);if(console.log(d),d.data.success){let f=d.data.userData,_=f.locations,y=[];if(_&&_.length){for(let p of _){let w=Me(se,p),b=await fe(w);if(b.exists()){let S=b.data();S.id=b.id,y.push(S)}else console.error(`Location document not found for reference: ${w.id}`)}return f.locations=y,Rg(f.userId,f),{success:!0,message:d.data.message,userData:f}}return f.locations=[],{success:!0,userData:d.data.userData,message:d.data.message}}return{success:!1,message:d.data.message}}catch{return{success:!1,message:"Couldn't successfully call the update org user function"}}}catch(a){return{success:!1,message:a.message}}};var C_=()=>{let t=ge("create-user"),e=document.querySelector("[data-pfc-item='users-list']");if(t&&e){let n=t.querySelector('[data-pfc-member="firstName"]'),r=t.querySelector('[data-pfc-member="lastName"]'),s=t.querySelector('[data-pfc-member="email"]'),i=t.querySelector('[data-pfc-member="phone"]'),o=t.querySelector('[data-pfc-member="password"]'),a=t.querySelector('[data-pfc-member="locations"]'),c=t.querySelector('[data-pfc-member="userRole"]'),u=t.querySelector('[type="submit"]'),l=t.querySelector("[data-pfc-action='reset-form']"),h=document.querySelector("[data-pfc-action='create-user']:is(button)"),d=e.firstElementChild,f=d.firstElementChild,_=De().locations[0];X().userRole==="locationManager"&&_&&(a.value=_),t.addEventListener("submit",async p=>{p.preventDefault();try{_e(u,"Creating...");let w=await T_(n.value,r.value,s.value,i.value,o.value,a.value,c.value);w.success?(Ms("create-user"),Ir(w.userData,d,f),O(u),ye(w.message),t.reset()):(O(u),C(w.message))}catch(w){O(u),C(`Error creating user: ${w.message}`)}}),h.addEventListener("click",()=>{Jt("create-user")}),l.addEventListener("click",()=>{t.reset()})}},D_=()=>{let t=ge("update-user"),e=document.querySelector("[data-pfc-item='users-list']");if(t&&e){let n=t.querySelector('[data-pfc-member="firstName"]'),r=t.querySelector('[data-pfc-member="lastName"]'),s=t.querySelector('[data-pfc-member="email"]'),i=t.querySelector('[data-pfc-member="phone"]'),o=t.querySelector('[data-pfc-member="locations"]'),a=t.querySelector('[data-pfc-member="userRole"]'),c=t.querySelector('[data-pfc-member="id"]'),u=t.querySelector('[type="submit"]'),l=e.firstElementChild,h=l.firstElementChild;t.addEventListener("submit",async d=>{d.preventDefault();try{_e(u,"Updating...");let f=await P_(c.value,n.value,r.value,s.value,i.value,o.value,a.value);f.success?(Ms("update-user"),R_(f.userData,l,h),O(u),ye(f.message)):(O(u),C(f.message))}catch(f){O(u),C(f.message)}})}},k_=()=>{let t=ge("delete-user"),e=document.querySelector("[data-pfc-item='users-list']");if(t&&e){let n=t.querySelector('[data-pfc-member="id"]'),r=t.querySelector('[type="submit"]');t.addEventListener("submit",async s=>{s.preventDefault();try{_e(r,"Deleting...");let i=await A_(n.value);i.success?(Ms("delete-user"),e.querySelector(`[data-id='${n.value}']`).remove(),O(r),ye("User successfully deleted")):C(i.message)}catch(i){O(r),C(`Error deleting user: ${i}`)}})}},N_=async()=>{let t=document.querySelector("[data-pfc-item='users-list']"),e=document.querySelector("[data-element='total-count']"),n=document.querySelector("[data-element='result-count']");if(t){let r=t.firstElementChild,s=r.firstElementChild,i=r.nextElementSibling,o=i.nextElementSibling;try{let a=await b_();if(a.success){let{usersData:c}=a;c.length&&(r.innerHTML="",c.forEach(u=>{Ir(u,r,s)}),r.style.display="block",o.style.display="none"),kg(a.totalSize-1),Cg(a.visibleSize-1),n.textContent=Pg(),e.textContent=Dg()}else i.style.display="block",o.style.display="none"}catch(a){C("Error loading users:",a)}}},x_=async()=>{let t=document.querySelector("[data-pfc-item='users-list']");if(t){let e=t.firstElementChild,n=e.firstElementChild,r=e.nextElementSibling,s=r.nextElementSibling,i=document.querySelector("[data-pfc-action='search-users']"),o;i.addEventListener("input",async()=>{clearTimeout(o),o=setTimeout(async()=>{try{e.innerHTML="",s.style.display="block",r.style.display="none";let a=await S_(i.value);if(a.success){let{usersData:c}=a;c.length?(c.forEach(u=>{Ir(u,e,n)}),e.style.display="block",s.style.display="none"):(e.style.display="none",r.style.display="block",s.style.display="none")}else C(`Error loading users: ${a.message}`)}catch(a){C("Error loading users:",a)}},1e3)})}};var O_=()=>{let t=document.querySelector("[data-group='tag-category']"),e=document.querySelector("[data-group='tags']");if(t&&e){let i=function(o,a){return o.filter(c=>c.getAttribute("data-category")===a)};var n=i;let r=Array.from(t.querySelectorAll(".w-dyn-item")),s=Array.from(e.querySelectorAll(".w-dyn-item"));r.forEach(o=>{console.log("list item");let a=o.getAttribute("data-category"),c=i(s,a),u=document.createElement("div");u.classList.add("w-dyn-list","jetboost-filter-5813"),console.log(u);let l=document.createElement("div");l.classList.add("w-dyn-items"),u.appendChild(l),o.append(u);let h=c.map(d=>d.cloneNode(!0));l.append(...h),console.log(l)}),e.remove()}};var Zt=t=>{let e,n=De();n?e=n.savedItems:e=t,e&&e.length&&document.querySelectorAll("[data-save-count]").forEach(s=>{s.textContent=e.length})};var L_=async()=>{try{let t=Xt();if(t){let e=t.savedItems||[];return Zt(e),e.length?(window.fsAttributes=window.fsAttributes||[],window.fsAttributes.push(["cmsload",n=>{let[r]=n;t&&(r.list.innerHTML="",r.items.forEach(s=>{let i=s.element.getAttribute("data-id");e.some(o=>o.id===i)&&r.list.appendChild(s.element)}))}]),{success:!0,message:"Successfully rendered saved items"}):{empty:!0}}return{success:!1,message:"User is not authenticated"}}catch(t){return{success:!1,message:t.message}}};var V_=async t=>{try{let e=ze();if(e){let n=Pt(e),r=await fe(n);if(r.exists()){if(!(r.data().savedItems||[]).find(i=>i.id===t)){await dt(n,{savedItems:bp({id:t})});let i=Xt()||{savedItems:[]},o=[...i.savedItems||[],{id:t}],a={...i,savedItems:o};return localStorage.setItem("userData",JSON.stringify(a)),Ct(a),Zt(o),{success:!0,message:"Item saved successfully"}}return{success:!1,message:"Item is already saved"}}return{success:!1,message:"Couldn't find the users document"}}return{success:!1,message:"User is not authenticated"}}catch(e){return{success:!1,message:e.message}}};var M_=async t=>{try{let e=ze();if(e){let n=Pt(e),r=await fe(n);if(r.exists()){let s=r.data().savedItems||[],i=s.findIndex(o=>o.id===t);if(i!==-1){s.splice(i,1),await dt(n,{savedItems:s});let o=Xt()||{savedItems:[]},a=o.savedItems.filter(u=>u.id!==t),c={...o,savedItems:a};return localStorage.setItem("userData",JSON.stringify(c)),Ct(c),Zt(a),{success:!0,message:"Item unsaved successfully"}}return{success:!1,message:"This item is already unsaved"}}return{success:!1,message:"Couldn't find the users document"}}return{success:!1,message:"User is not authenticated"}}catch(e){return{success:!1,message:e.message}}};var U_=()=>{document.addEventListener("click",async t=>{let e=t.target;if(e.hasAttribute("data-save")){let r=e.closest(".w-dyn-item").getAttribute("data-id"),s=e.nextElementSibling.nextElementSibling,i=e.nextElementSibling;try{e.style.display="none",s.style.display="block";let o=await V_(r);o.success?(i.style.display="block",s.style.display="none",ye(o.message)):(e.style.display="block",s.style.display="none",C(o.message))}catch(o){e.style.display="block",s.style.display="none",C(o.message)}}})},F_=()=>{document.addEventListener("click",async t=>{let e=t.target;if(e.hasAttribute("data-unsave")){let n=e.closest(".w-dyn-item"),r=n.getAttribute("data-id"),s=e.nextElementSibling,i=e.previousElementSibling;try{e.style.display="none",s.style.display="block";let o=await M_(r);if(o.success){i.style.display="block",s.style.display="none";let a=n.closest("[data-pfc-item='favorites']");if(a&&(n.remove(),!a.querySelectorAll(".w-dyn-item").length)){let c=a.firstElementChild.nextElementSibling;c.style.display="block"}ye(o.message)}else e.style.display="block",s.style.display="none",C(o.message)}catch(o){e.style.display="block",s.style.display="none",C(o.message)}}})},q_=async()=>{let t=document.querySelector("[data-pfc-item='favorites']");if(t){let e=t.firstElementChild,n=e.nextElementSibling,r=n.nextElementSibling;try{e.style.display="none",r.style.display="block";let s=await L_();if(s.empty){setTimeout(()=>{n.style.display="block",r.style.display="none"},500);return}s.success?setTimeout(()=>{e.style.display="block",r.style.display="none"},500):C(s.message)}catch(s){C(s.message)}}};var B_=()=>{let t=Xt();if(t){let{savedItems:r}=t;if(r){let s=function(c){return r.some(u=>u.id===c)},i=function(c){c.forEach(u=>{let l=u.dataset.id;l&&s(l)&&(u.querySelector("[data-unsave]").style.display="block",u.querySelector("[data-save]").style.display="none")})};var e=s,n=i;let o=document.querySelectorAll("[data-items] [data-id]");i(o);let a=document.querySelector("[data-items]");if(a){let c={childList:!0,subtree:!0};new MutationObserver(l=>{l.forEach(h=>{h.addedNodes.length>0&&i(h.addedNodes)})}).observe(a,c)}}}};var z_=async t=>{try{return await ch(gt,t),{success:!0,message:"Reset password email was sent. Check your inbox."}}catch(e){return{success:!1,message:e}}};var j_=async(t,e)=>{try{return await lh(gt,t.value,e.value),{success:!0,message:"Logged in successfully"}}catch(n){return{success:!1,message:n}}},G_=()=>{let t=document.querySelectorAll('[data-pfc-member*="password"]');t.length&&t.forEach(e=>{let n=e.parentElement.querySelector("[data-toggle-password]"),r=n.children[0],s=n.children[1];n.addEventListener("click",()=>{e.type=e.type==="password"?"text":"password",e.type==="password"?(r.style.display="block",s.style.display="none"):(r.style.display="none",s.style.display="block")})})};var $_=async()=>{try{if(Be())try{return await mh(gt),Ks(null),Hs(null),Ws(null),Ct(null),Qs(null),localStorage.clear(),{success:!0,message:"Successfully logged out"}}catch(e){return{success:!1,message:e.message}}return{success:!1,message:"User is not authenticated"}}catch(t){return{success:!1,message:t}}},K_=()=>{let t=new URLSearchParams(window.location.search);t.get("logout")==="true"&&(ye("You've been successfully logged out."),setTimeout(()=>{t.delete("logout");let n=new URL(window.location.href);n.search=t.toString(),window.history.replaceState({},document.title,n.href)},5400))};var H_=async t=>{try{let e=new URLSearchParams(window.location.search).get("oobCode");if(e)try{return await uh(gt,e,t),{success:!0,message:"Successfully reset the password."}}catch{return{success:!1,message:EvalError}}return{success:!1,message:"No action code is present."}}catch(e){return{success:!1,message:e}}};var W_=async()=>{let t=ge("login");if(t){let e=t.querySelector('[data-pfc-member="email"]'),n=t.querySelector('[data-pfc-member="password"]'),r=t.querySelector('[type="submit"]');t.addEventListener("submit",async s=>{s.preventDefault();try{_e(r,"Loading...");let i=await j_(e,n,r);i.success?window.location.href="/members/home":(O(r),C(i.message))}catch(i){O(r),C(i.message)}})}},Q_=async()=>{let t=document.querySelector('[data-pfc-action="logout"]');t&&t.addEventListener("click",async e=>{e.preventDefault();try{_e(t,"Logging Out...");let n=await $_();n.success?window.location.href="/?logout=true":(O(t),C(n.message))}catch{O(t),C("Couldn't log the user out")}})},Y_=async()=>{let t=ge("forgot-password");if(t){let e=t.querySelector('[data-pfc-member="email"]'),n=t.querySelector('[type="submit"]');t.addEventListener("submit",async r=>{r.preventDefault();try{_e(n,"Sending...");let s=await z_(e.value);s.success?(O(n),e.value="",ye(s.message)):(O(n),C(s.message))}catch(s){O(n),C(s.message)}})}},J_=async()=>{let t=ge("reset-password");if(t){let e=t.querySelector('[data-pfc-member="password"]'),n=t.querySelector('[type="submit"]');t.addEventListener("submit",async r=>{r.preventDefault();try{_e(n,"Resetting...");let s=await H_(e.value);s.success?window.location.href="/password-set":(O(n),C(s.message))}catch(s){O(n),C(s.message)}})}};var X_=async()=>{let t=document.querySelectorAll("[data-shopify-link]");t.length&&t.forEach(e=>{e.addEventListener("click",async n=>{n.preventDefault();try{_e(e,"Authenticating...");let r=Be();if(r){let{email:s}=r,o=X().userRole,a=o==="corporateAdmin"||o==="multiLocationAdmin"||o==="locationManager";if(Hb(),!a&&s.endsWith("@chuzefitness.com"))window.open("https://portal.pfcorders.com","_blank");else if(a&&!s.endsWith("@chuzefitness.com")){let u=await Qt(Yt,"connectToShopify")();if(u){let l=u.data;window.open(l,"_blank"),O(e)}else O(e),C("There was an error connecting to PFC Orders")}else!a&&!s.endsWith("@chuzefitness.com")&&(window.open("https://pfcorders.com","_blank"),O(e))}else O(e),C("The user isn't authenticated")}catch(r){O(e),C(r.message)}})})},Hb=async()=>{try{let t=await fetch("https://ipapi.co/8.8.8.8/country/");if(!t.ok)throw new Error("Network response was not ok");(await t.text()).trim()==="CA"&&storeLinks.length&&setAllStoreLinks("https://form.jotform.com/82984034126155")}catch(t){console.error("Error fetching data:",t)}};var Ze=Array.from(document.querySelectorAll("[data-element='lesson']")),wr=Array.from(document.querySelectorAll("[data-course]")),zs=document.querySelectorAll("[data-element='module']"),en=document.querySelector("[data-element='lesson-button']")||null,Fe=document.body.getAttribute("data-current-lesson")||null,et=document.body.getAttribute("data-current-course")||null,yt=document.querySelector("[data-aside='button']"),js=document.querySelector("[data-aside='title']"),Gs=document.querySelector("[data-aside='tag']");var pe={totalCompletedLessons:0,firstIncompleteLesson:null};var Z_=()=>{let t=document.body.getAttribute("data-page"),e=window.location.href;if(yt&&js&&Gs){let n=!1;for(let r of Ze)r.classList.contains("is-complete")?n=!0:!pe.firstIncompleteLesson&&r.querySelector("a").href!==e&&(pe.firstIncompleteLesson=r);t==="course"?n?pe.firstIncompleteLesson&&(Gs.textContent="Continue course:",js.textContent=pe.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent,yt.href=pe.firstIncompleteLesson.querySelector("a").href,yt.textContent="Go to Lesson"):(Gs.textContent="Start course:",js.textContent=pe.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent,yt.href=pe.firstIncompleteLesson.querySelector("a").href):t==="lesson"&&(Gs.textContent="Next lesson:",js.textContent=pe.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent,yt.href=pe.firstIncompleteLesson.querySelector("a").href,yt.textContent="Next Lesson")}};var ey=t=>window.getComputedStyle(t).display==="flex"?"none":"flex",On=()=>{let t=document.querySelectorAll(`[data-lesson='${Fe}']`);t.length&&t.forEach(e=>{let n=e.querySelector("[data-element='loader']");n&&(n.style.display=ey(n),n.previousElementSibling.style.display=ey(n))})},_a=(t,e)=>{let n=document.querySelector(`[data-course='${t}'] [data-element='progress-bar']`);n&&(n.style.width=`${e}%`)},ya=(t,e)=>{let n=document.querySelector(`[data-course='${t}'] [data-element='progress-percentage']`);n&&(n.textContent=`${Math.round(e)}%`)};var Wb=async t=>Me(At(se,"users"),t),ty=async()=>{let e=new URLSearchParams(window.location.search).get("userId"),n;if(e)try{let r=await Wb(e),s=await fe(r);s.exists()&&(n=s.data())}catch(r){console.error("Error fetching user document from Firestore:",r)}n||(n=xn("userData")),n&&wr.forEach(r=>{let s=r.getAttribute("data-course"),i=r.getAttribute("data-lesson-count"),o=n?.courses?.find(a=>a.id===s);if(o){let c=(o.completedLessons||[]).length/i*100;_a(s,c),ya(s,c)}})};var Fh=t=>{if(wr&&wr.length&&wr.find(n=>n.dataset.course===et)){let n;t==="add"?(pe.totalCompletedLessons+=1,n=pe.totalCompletedLessons):t==="remove"&&(pe.totalCompletedLessons-=1,n=pe.totalCompletedLessons);let r=Ze.length,s=n/r*100;_a(et,s),ya(et,s)}};var $s=(t,e)=>{t.firstChild.textContent=e==="add"?"Mark as Incomplete":"Mark as Complete",e==="add"?t.classList.add("is-complete"):t.classList.remove("is-complete")};var ny=()=>{let t=xn("userData");if(!t||!t.courses)return{success:!1,message:"No course data found for the user."};let e=t.courses.find(n=>n.id===et);if(e){let{completedLessons:n}=e;Ze.forEach(r=>{let s=r.getAttribute("data-lesson");n.some(i=>i.id===s)&&(r.classList.add("is-complete"),pe.totalCompletedLessons++,Fe&&s===Fe&&$s(en,"add"))})}};var qh=t=>{let e=Ze.find(n=>n.dataset.lesson===Fe);e&&(t==="add"?e.classList.add("is-complete"):t==="remove"&&e.classList.remove("is-complete"))};var Bh=async t=>{try{let e=await ga();if(e){let n=e.uid,r=await d_(n);if(r.success){let o=r.courses,{userDocRef:a}=r,c=o.find(f=>f.id===et)||{},u=c.completedLessons||[],l=u;t==="add"&&!u.some(f=>f.id===Fe)?l=[...u,{id:Fe}]:t==="remove"&&u.some(f=>f.id===Fe)&&(l=u.filter(f=>f.id!==Fe)),c={id:et,completedLessons:l};let h=o.findIndex(f=>f.id===et),d=xn("userData");if(h!==-1){await dt(a,{courses:o.map((_,y)=>y===h?c:_)});let f={...d,courses:o.map((_,y)=>y===h?c:_)};Nn("userData",f)}else{await dt(a,{courses:[...o,c]});let f={...d,courses:[...o,c]};Nn("userData",f)}return{success:!0,message:"This is a test message"}}let s=[{id:et,completedLessons:[{id:Fe}]}];await dt(userDocRef,{courses:s});let i=xn("userData");if(i){let o={...i,courses:s};Nn("userData",o)}return{success:!0,message:"This is a test message"}}return{success:!1,message:"Couldn't get the user's courses"}}catch(e){return{success:!1,message:e.message}}};var ry=()=>{zs&&Ze&&zs.forEach(t=>{let e=t.getAttribute("data-module");Ze.filter(r=>r.getAttribute("data-module")===e).forEach(r=>{t.querySelector("[data-element='lessons']").append(r)})})},sy=()=>{zs&&zs.forEach(t=>{let e=t.firstElementChild,n=e.firstElementChild,r=e.querySelectorAll("a");yt&&r.forEach(s=>{if(s.classList.contains("w--current")||s.href===yt.href){e.classList.add("is-active");return}}),n.addEventListener("click",()=>{e.classList.toggle("is-active")})})};var iy=()=>{ty()},oy=()=>{ny()},ay=()=>{ry()},cy=()=>{sy()},uy=()=>{Z_()},ly=()=>{en&&en.addEventListener("click",async()=>{try{On();let t;en.classList.contains("is-complete")?(t=await Bh("remove"),t.success?(On(),$s(en,"remove"),Fh("remove"),qh("remove")):(On(),C(t.message))):(t=await Bh("add"),t.success?(On(),$s(en,"add"),Fh("add"),qh("add")):(On(),C(t.message)))}catch(t){On(),C(t.message)}})};var hy=()=>{let t=document.querySelectorAll(".user-table_dropdown-list"),e=document.querySelectorAll("[data-toggle]");function n(){t.forEach(s=>{s.classList.toggle("is-open")})}function r(s){!Array.from(t).some(o=>o.contains(s.target))&&Array.from(t).some(o=>o.classList.contains("is-open"))&&t.forEach(o=>{o.classList.remove("is-open")})}e.forEach(s=>{s.addEventListener("click",n)}),document.body.addEventListener("click",r),document.body.addEventListener("click",r)};(async()=>(await ga(),l_(),W_(),G_(),Q_(),K_(),Y_(),J_(),O_(),iy(),ay(),cy(),oy(),uy(),ly(),X_(),q_(),B_(),Zt(),U_(),F_(),__(),y_(),g_(),I_(),w_(),v_(),E_(),N_(),x_(),C_(),D_(),k_(),Vg(),hy()))();})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-dd468b12.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/functions/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/functions/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
