"use strict";(()=>{var ne=t=>document.querySelector(`[data-pfc-form="${t}"]`),re=t=>{let e=t.querySelector("[data-pfc-loader]");e.style.display="flex"},k=t=>{let e=t.querySelector("[data-pfc-loader]");e.style.display="none"},Zg=(t,e=null)=>{if(e)return e;switch(t){case"auth/user-not-found":return"User not found. Please check your email or register for an account.";case"auth/wrong-password":return"Incorrect password. Please try again.";case"auth/invalid-email":return"Invalid email address. Please enter a valid email.";case"auth/email-already-in-use":return"Email already in use. Please use a different email or sign in.";case"auth/weak-password":return"Weak password. Please choose a stronger password.";case"auth/too-many-requests":return"Too many unsuccessful login attempts. Try again later.";case"auth/operation-not-allowed":return"This operation is not allowed. Please contact support.";case"auth/user-disabled":return"Your account has been disabled. Please contact support.";case"firestore/permission-denied":return"You have missing or insufficient permissions.";default:return`Firebase error: ${t}`}},bs=(t,e)=>{let n=document.querySelector(t),r=n.children[1],s=n.children[2];r.innerText=e,n.style.display="flex",setTimeout(()=>{n.classList.add("is-visible")},100),setTimeout(()=>{n.classList.remove("is-visible"),setTimeout(()=>{n.style.display="none"},300)},5e3),s.addEventListener("click",()=>{n.classList.remove("is-visible"),setTimeout(()=>{n.style.display="none"},300)})},b=t=>{if(!t){console.error("Invalid or missing error object:",t),bs("[data-pfc-error]","An unexpected error occurred.");return}if(t.code){let e=t.code,n=Zg(e);bs("[data-pfc-error]",n)}else bs("[data-pfc-error]",t)},se=t=>{bs("[data-pfc-success]",t)};var vt=t=>{let e=document.querySelector(`[data-modal=${t}]`);e.classList.add("is-open");let n=e.firstElementChild,r=()=>{rr(t),n.removeEventListener("click",r)};n.addEventListener("click",r)},rr=t=>{document.querySelector(`[data-modal=${t}]`).classList.remove("is-open")};var Ss=(t,e,n)=>{let r=n.cloneNode(!0),s=r.querySelector("[data-pfc-member='firstName']"),i=r.querySelector("[data-pfc-member='lastName']"),o=r.querySelector("[data-pfc-member='email']"),a=r.querySelector("[data-pfc-member='userType']"),c=r.querySelector("[data-toggle]"),u=r.querySelector("[data-pfc-action='update-user']"),l=r.querySelector("[data-pfc-action='delete-user']");r.setAttribute("data-id",t.id),s.textContent=t.firstName||"",i.textContent=t.lastName||"",o.textContent=t.email||"",a.textContent=Uo(t.userType)||"";let h=()=>{c.nextElementSibling.classList.toggle("is-open")},d=()=>{let g=ne("update-user"),I=g.querySelector("[data-pfc-member='firstName']"),w=g.querySelector("[data-pfc-member='lastName']"),C=g.querySelector("[data-pfc-member='email']"),x=g.querySelector("[data-pfc-member='phone']"),O=r.querySelector("[data-pfc-member='userType']"),M=g.querySelector("[data-pfc-member='id']");I.value=t.firstName,w.value=t.lastName,C.value=t.email,x.value=t.phone||"",O.value=t.userType,M.value=t.id,vt("update-user")},f=()=>{let I=ne("delete-user").querySelector("[data-pfc-member='id']");I.value=t.id,vt("delete-user")};return u.addEventListener("click",g=>{g.target.parentElement.classList.remove("is-open"),d()}),l.addEventListener("click",g=>{g.target.parentElement.classList.remove("is-open"),f()}),c.addEventListener("click",()=>{h()}),e.appendChild(r),r},mh=(t,e,n)=>{let r=e.querySelector(`[data-id='${t.userId}']`),s=Ss(t,e,n);e.replaceChild(s,r)},Uo=t=>{switch(t){case"management":return"Management";case"fitness-staff":return"Fitness Staff";case"juice-bar-staff":return"Shake/Smoothie Bar Staff";case"other":return"Other";default:return"An unknown error occurred."}};var gh=function(t){let e=[],n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},e_=function(t){let e=[],n=0,r=0;for(;n<t.length;){let s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){let i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){let i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{let i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){let i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4,d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){let i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;let u=s<t.length?n[t.charAt(s)]:64;++s;let h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new qo;let d=i<<2|a>>4;if(r.push(d),u!==64){let f=a<<4&240|u>>2;if(r.push(f),h!==64){let g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qo=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},t_=function(t){let e=gh(t);return _h.encodeByteArray(e,!0)},sr=function(t){return t_(t).replace(/\./g,"")},zo=function(t){try{return _h.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function n_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var r_=()=>n_().__FIREBASE_DEFAULTS__,s_=()=>{if(typeof process>"u"||typeof process.env>"u")return;let t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},i_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=t&&zo(t[1]);return e&&JSON.parse(e)},Ps=()=>{try{return r_()||s_()||i_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jo=t=>{var e,n;return(n=(e=Ps())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gn=t=>{let e=jo(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Go=()=>{var t;return(t=Ps())===null||t===void 0?void 0:t.config},$o=t=>{var e;return(e=Ps())===null||e===void 0?void 0:e[`_${t}`]};var Rs=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function Cs(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sr(JSON.stringify(n)),sr(JSON.stringify(o)),a].join(".")}function G(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function o_(){var t;let e=(t=Ps())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wh(){let t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ih(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vh(){let t=G();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Eh(){return!o_()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ks(){try{return typeof indexedDB=="object"}catch{return!1}}function Th(){return new Promise((t,e)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}var a_="FirebaseError",ce=class t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=a_,Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dt.prototype.create)}},dt=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){let r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?c_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ce(s,a,r)}};function c_(t,e){return t.replace(u_,(n,r)=>{let s=e[r];return s!=null?String(s):`<${r}?>`})}var u_=/\{\$([^}]+)}/g;function Ah(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Et(t,e){if(t===e)return!0;let n=Object.keys(t),r=Object.keys(e);for(let s of n){if(!r.includes(s))return!1;let i=t[s],o=e[s];if(ph(i)&&ph(o)){if(!Et(i,o))return!1}else if(i!==o)return!1}for(let s of r)if(!n.includes(s))return!1;return!0}function ph(t){return t!==null&&typeof t=="object"}function _n(t){let e=[];for(let[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yn(t){let e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function wn(t){let e=t.indexOf("?");if(!e)return"";let n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bh(t,e){let n=new Bo(t,e);return n.subscribe.bind(n)}var Bo=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");l_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fo),s.error===void 0&&(s.error=Fo),s.complete===void 0&&(s.complete=Fo);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function l_(t,e){if(typeof t!="object"||t===null)return!1;for(let n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fo(){}var NA=4*60*60*1e3;function L(t){return t&&t._delegate?t._delegate:t}var pe=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Bt="[DEFAULT]";var Ko=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let r=new Rs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;let r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(d_(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(n);try{let i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[i,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;let s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);let o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){let r=this.onInitCallbacks.get(n);if(r)for(let s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:h_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function h_(t){return t===Bt?void 0:t}function d_(t){return t.instantiationMode==="EAGER"}var Ds=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new Ko(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};var f_=[],D;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(D||(D={}));var m_={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},p_=D.INFO,g_={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},__=(t,e,...n)=>{if(e<t.logLevel)return;let r=new Date().toISOString(),s=g_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Tt=class{constructor(e){this.name=e,this._logLevel=p_,this._logHandler=__,this._userLogHandler=null,f_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}};var y_=(t,e)=>e.some(n=>t instanceof n),Sh,Rh;function w_(){return Sh||(Sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I_(){return Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Ph=new WeakMap,Wo=new WeakMap,Ch=new WeakMap,Ho=new WeakMap,Yo=new WeakMap;function v_(t){let e=new Promise((n,r)=>{let s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(He(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ph.set(n,t)}).catch(()=>{}),Yo.set(e,t),e}function E_(t){if(Wo.has(t))return;let e=new Promise((n,r)=>{let s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wo.set(t,e)}var Qo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ch.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return He(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kh(t){Qo=t(Qo)}function T_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let r=t.call(Ns(this),e,...n);return Ch.set(r,e.sort?e.sort():[e]),He(r)}:I_().includes(t)?function(...e){return t.apply(Ns(this),e),He(Ph.get(this))}:function(...e){return He(t.apply(Ns(this),e))}}function A_(t){return typeof t=="function"?T_(t):(t instanceof IDBTransaction&&E_(t),y_(t,w_())?new Proxy(t,Qo):t)}function He(t){if(t instanceof IDBRequest)return v_(t);if(Ho.has(t))return Ho.get(t);let e=A_(t);return e!==t&&(Ho.set(t,e),Yo.set(e,t)),e}var Ns=t=>Yo.get(t);function Nh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){let o=indexedDB.open(t,e),a=He(o);return r&&o.addEventListener("upgradeneeded",c=>{r(He(o.result),c.oldVersion,c.newVersion,He(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}var b_=["get","getKey","getAll","getAllKeys","count"],S_=["put","add","delete","clear"],Jo=new Map;function Dh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jo.get(e))return Jo.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,s=S_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||b_.includes(n)))return;let i=async function(o,...a){let c=this.transaction(o,s?"readwrite":"readonly"),u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Jo.set(e,i),i}kh(t=>({...t,get:(e,n,r)=>Dh(e,n)||t.get(e,n,r),has:(e,n)=>!!Dh(e,n)||t.has(e,n)}));var Zo=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R_(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function R_(t){let e=t.getComponent();return e?.type==="VERSION"}var ea="@firebase/app",xh="0.9.26";var zt=new Tt("@firebase/app"),P_="@firebase/app-compat",C_="@firebase/analytics-compat",k_="@firebase/analytics",D_="@firebase/app-check-compat",N_="@firebase/app-check",x_="@firebase/auth",O_="@firebase/auth-compat",L_="@firebase/database",V_="@firebase/database-compat",M_="@firebase/functions",U_="@firebase/functions-compat",F_="@firebase/installations",q_="@firebase/installations-compat",B_="@firebase/messaging",z_="@firebase/messaging-compat",j_="@firebase/performance",G_="@firebase/performance-compat",$_="@firebase/remote-config",K_="@firebase/remote-config-compat",H_="@firebase/storage",W_="@firebase/storage-compat",Q_="@firebase/firestore",Y_="@firebase/firestore-compat",J_="firebase",X_="10.7.2";var ta="[DEFAULT]",Z_={[ea]:"fire-core",[P_]:"fire-core-compat",[k_]:"fire-analytics",[C_]:"fire-analytics-compat",[N_]:"fire-app-check",[D_]:"fire-app-check-compat",[x_]:"fire-auth",[O_]:"fire-auth-compat",[L_]:"fire-rtdb",[V_]:"fire-rtdb-compat",[M_]:"fire-fn",[U_]:"fire-fn-compat",[F_]:"fire-iid",[q_]:"fire-iid-compat",[B_]:"fire-fcm",[z_]:"fire-fcm-compat",[j_]:"fire-perf",[G_]:"fire-perf-compat",[$_]:"fire-rc",[K_]:"fire-rc-compat",[H_]:"fire-gcs",[W_]:"fire-gcs-compat",[Q_]:"fire-fst",[Y_]:"fire-fst-compat","fire-js":"fire-js",[J_]:"fire-js-all"};var xs=new Map,na=new Map;function ey(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xe(t){let e=t.name;if(na.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,t);for(let n of xs.values())ey(n,t);return!0}function ft(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}var ty={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new dt("app","Firebase",ty);var ra=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}};var We=X_;function oa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});let r=Object.assign({name:ta,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});if(n||(n=Go()),!n)throw At.create("no-options");let i=xs.get(s);if(i){if(Et(n,i.options)&&Et(r,i.config))return i;throw At.create("duplicate-app",{appName:s})}let o=new Ds(s);for(let c of na.values())o.addComponent(c);let a=new ra(n,r,o);return xs.set(s,a),a}function bt(t=ta){let e=xs.get(t);if(!e&&t===ta&&Go())return oa();if(!e)throw At.create("no-app",{appName:t});return e}function ue(t,e,n){var r;let s=(r=Z_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);let i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){let a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}xe(new pe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}var ny="firebase-heartbeat-database",ry=1,ir="firebase-heartbeat-store",Xo=null;function Mh(){return Xo||(Xo=Nh(ny,ry,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ir)}catch(n){console.warn(n)}}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Xo}async function sy(t){try{return await(await Mh()).transaction(ir).objectStore(ir).get(Uh(t))}catch(e){if(e instanceof ce)zt.warn(e.message);else{let n=At.create("idb-get",{originalErrorMessage:e?.message});zt.warn(n.message)}}}async function Oh(t,e){try{let r=(await Mh()).transaction(ir,"readwrite");await r.objectStore(ir).put(e,Uh(t)),await r.done}catch(n){if(n instanceof ce)zt.warn(n.message);else{let r=At.create("idb-set",{originalErrorMessage:n?.message});zt.warn(r.message)}}}function Uh(t){return`${t.name}!${t.options.appId}`}var iy=1024,oy=30*24*60*60*1e3,sa=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new ia(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;let s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{let a=new Date(o.date).valueOf();return Date.now()-a<=oy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let n=Lh(),{heartbeatsToSend:r,unsentEntries:s}=ay(this._heartbeatsCache.heartbeats),i=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}};function Lh(){return new Date().toISOString().substring(0,10)}function ay(t,e=iy){let n=[],r=t.slice();for(let s of t){let i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var ia=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ks()?Th().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await sy(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){let s=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){let s=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}};function Vh(t){return sr(JSON.stringify({version:2,heartbeats:t})).length}function cy(t){xe(new pe("platform-logger",e=>new Zo(e),"PRIVATE")),xe(new pe("heartbeat",e=>new sa(e),"PRIVATE")),ue(ea,xh,t),ue(ea,xh,"esm2017"),ue("fire-js","")}cy("");function Os(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ed(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var td=ed,nd=new dt("auth","Firebase",ed());var qs=new Tt("@firebase/auth");function uy(t,...e){qs.logLevel<=D.WARN&&qs.warn(`Auth (${We}): ${t}`,...e)}function Vs(t,...e){qs.logLevel<=D.ERROR&&qs.error(`Auth (${We}): ${t}`,...e)}function qe(t,...e){throw Pa(t,...e)}function Ye(t,...e){return Pa(t,...e)}function ly(t,e,n){let r=Object.assign(Object.assign({},td()),{[e]:n});return new dt("auth","Firebase",r).create(e,{appName:t.name})}function Pa(t,...e){if(typeof t!="string"){let n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nd.create(t,...e)}function E(t,e,...n){if(!t)throw Pa(e,...n)}function Qe(t){let e="INTERNAL ASSERTION FAILED: "+t;throw Vs(e),new Error(e)}function pt(t,e){t||Qe(e)}function ua(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hy(){return Fh()==="http:"||Fh()==="https:"}function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}function dy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hy()||wh()||"connection"in navigator)?navigator.onLine:!0}function fy(){if(typeof navigator>"u")return null;let t=navigator;return t.languages&&t.languages[0]||t.language||null}var jt=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,pt(n>e,"Short delay should be less than long delay!"),this.isMobile=yh()||Ih()}get(){return dy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Ca(t,e){pt(t.emulator,"Emulator should always be set here");let{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}var Bs=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var my={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var py=new jt(3e4,6e4);function Z(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ee(t,e,n,r,s={}){return rd(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});let a=_n(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Bs.fetch()(sd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function rd(t,e,n){t._canInitEmulator=!1;let r=Object.assign(Object.assign({},my),e);try{let s=new la(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();let o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{let a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(t,"user-disabled",o);let l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ly(t,l,u);qe(t,l)}}catch(s){if(s instanceof ce)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function Qt(t,e,n,r,s={}){let i=await ee(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sd(t,e,n,r){let s=`${e}${n}?${r}`;return t.config.emulator?Ca(t.config,s):`${t.config.apiScheme}://${s}`}function gy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var la=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),py.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function or(t,e,n){let r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let s=Ye(t,e,r);return s.customData._tokenResponse=n,s}function qh(t){return t!==void 0&&t.enterprise!==void 0}var ha=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function _y(t,e){return ee(t,"GET","/v2/recaptchaConfig",Z(t,e))}async function yy(t,e){return ee(t,"POST","/v1/accounts:delete",e)}async function wy(t,e){return ee(t,"POST","/v1/accounts:lookup",e)}function ar(t){if(t)try{let e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function id(t,e=!1){let n=L(t),r=await n.getIdToken(e),s=ka(r);E(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:ar(aa(s.auth_time)),issuedAtTime:ar(aa(s.iat)),expirationTime:ar(aa(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function aa(t){return Number(t)*1e3}function ka(t){let[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vs("JWT malformed, contained fewer than 3 sections"),null;try{let s=zo(n);return s?JSON.parse(s):(Vs("Failed to decode base64 JWT payload"),null)}catch(s){return Vs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Iy(t){let e=ka(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Gt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ce&&vy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}var da=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;let n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var zs=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function js(t){var e;let n=t.auth,r=await t.getIdToken(),s=await Gt(t,wy(n,{idToken:r}));E(s?.users.length,n,"internal-error");let i=s.users[0];t._notifyReloadListener(i);let o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ty(i.providerUserInfo):[],a=Ey(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!a?.length,l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zs(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function od(t){let e=L(t);await js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ey(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ty(t){return t.map(e=>{var{providerId:n}=e,r=Os(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Ay(t,e){let n=await rd(t,{},async()=>{let r=_n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=sd(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bs.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function by(t,e){return ee(t,"POST","/v2/accounts:revokeToken",Z(t,e))}var Gs=class t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");let n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){let{accessToken:r,refreshToken:s,expiresIn:i}=await Ay(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){let{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new t;return r&&(E(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(E(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(E(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t,this.toJSON())}_performRefresh(){return Qe("not implemented")}};function St(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var cr=class t{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Os(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new da(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let n=await Gt(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return id(this,e)}reload(){return od(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await Gt(this,yy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;let h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:O,emailVerified:M,isAnonymous:ve,providerData:j,stsTokenManager:Fe}=n;E(O&&Fe,e,"internal-error");let Ke=Gs.fromJSON(this.name,Fe);E(typeof O=="string",e,"internal-error"),St(h,e.name),St(d,e.name),E(typeof M=="boolean",e,"internal-error"),E(typeof ve=="boolean",e,"internal-error"),St(f,e.name),St(g,e.name),St(I,e.name),St(w,e.name),St(C,e.name),St(x,e.name);let nr=new t({uid:O,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:ve,photoURL:g,phoneNumber:f,tenantId:I,stsTokenManager:Ke,createdAt:C,lastLoginAt:x});return j&&Array.isArray(j)&&(nr.providerData=j.map(As=>Object.assign({},As))),w&&(nr._redirectEventId=w),nr}static async _fromIdTokenResponse(e,n,r=!1){let s=new Gs;s.updateFromServerResponse(n);let i=new t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await js(i),i}};var Bh=new Map;function mt(t){pt(t instanceof Function,"Expected a class definition");let e=Bh.get(t);return e?(pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bh.set(t,e),e)}var $s=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){let n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};$s.type="NONE";var fa=$s;function Ms(t,e,n){return`firebase:${t}:${e}:${n}`}var Ks=class t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;let{config:s,name:i}=this.auth;this.fullUserKey=Ms(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ms("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new t(mt(fa),e,r);let s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u),i=s[0]||mt(fa),o=Ms(r,e.config.apiKey,e.name),a=null;for(let u of n)try{let l=await u._get(o);if(l){let h=cr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}let c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new t(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new t(i,e,r))}};function zh(t){let e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ud(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ad(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hd(e))return"Blackberry";if(dd(e))return"Webos";if(Da(e))return"Safari";if((e.includes("chrome/")||cd(e))&&!e.includes("edge/"))return"Chrome";if(ld(e))return"Android";{let n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function ad(t=G()){return/firefox\//i.test(t)}function Da(t=G()){let e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cd(t=G()){return/crios\//i.test(t)}function ud(t=G()){return/iemobile/i.test(t)}function ld(t=G()){return/android/i.test(t)}function hd(t=G()){return/blackberry/i.test(t)}function dd(t=G()){return/webos/i.test(t)}function li(t=G()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sy(t=G()){var e;return li(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ry(){return vh()&&document.documentMode===10}function fd(t=G()){return li(t)||ld(t)||dd(t)||hd(t)||/windows phone/i.test(t)||ud(t)}function Py(){try{return!!(window&&window!==window.top)}catch{return!1}}function md(t,e=[]){let n;switch(t){case"Browser":n=zh(G());break;case"Worker":n=`${zh(G())}-${t}`;break;default:n=t}let r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${We}/${r}`}var ma=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){let r=i=>new Promise((o,a)=>{try{let c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);let s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(let s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Cy(t,e={}){return ee(t,"GET","/v2/passwordPolicy",Z(t,e))}var ky=6,pa=class{constructor(e){var n,r,s,i;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ky,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;let c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){let r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}};var ga=class{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hs(this),this.idTokenSubscription=new Hs(this),this.beforeStateQueue=new ma(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser(),s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await js(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let n=e?L(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Cy(this),n=new pa(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){let n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await by(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){let r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let n=e&&mt(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};let i=typeof n=="function"?n:n.next.bind(n),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){let c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{let c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=md(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);let s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;let n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&uy(`Error while retrieving App Check token: ${n.error}`),n?.token}};function Rt(t){return L(t)}var Hs=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=bh(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};function Dy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pd(t){return new Promise((e,n)=>{let r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{let i=Ye("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Dy().appendChild(r)})}function gd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}var Ny="https://www.google.com/recaptcha/enterprise.js?render=",xy="recaptcha-enterprise",Oy="NO_RECAPTCHA",_a=class{constructor(e){this.type=xy,this.auth=Rt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{_y(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let u=new ha(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){let c=window.grecaptcha;qh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Oy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&qh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}pd(Ny+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}};async function jh(t,e,n,r=!1){let s=new _a(t),i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}let o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ya(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let i=await jh(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await jh(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}function _d(t,e){let n=ft(t,"auth");if(n.isInitialized()){let s=n.getImmediate(),i=n.getOptions();if(Et(i,e??{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function Ly(t,e){let n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(mt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function yd(t,e,n){let r=Rt(t);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let s=!!n?.disableWarnings,i=wd(e),{host:o,port:a}=Vy(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||My()}function wd(t){let e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Vy(t){let e=wd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){let i=s[1];return{host:i,port:Gh(r.substr(i.length+1))}}else{let[i,o]=r.split(":");return{host:i,port:Gh(o)}}}function Gh(t){if(!t)return null;let e=Number(t);return isNaN(e)?null:e}function My(){function t(){let e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}var $t=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,n){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}};async function Uy(t,e){return ee(t,"POST","/v1/accounts:update",e)}async function Fy(t,e){return ee(t,"POST","/v1/accounts:signUp",e)}async function qy(t,e){return Qt(t,"POST","/v1/accounts:signInWithPassword",Z(t,e))}async function By(t,e){return ee(t,"POST","/v1/accounts:sendOobCode",Z(t,e))}async function zy(t,e){return By(t,e)}async function jy(t,e){return Qt(t,"POST","/v1/accounts:signInWithEmailLink",Z(t,e))}async function Gy(t,e){return Qt(t,"POST","/v1/accounts:signInWithEmailLink",Z(t,e))}var ur=class t extends $t{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new t(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new t(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,n,"signInWithPassword",qy);case"emailLink":return jy(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":let r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,r,"signUpPassword",Fy);case"emailLink":return Gy(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function In(t,e){return Qt(t,"POST","/v1/accounts:signInWithIdp",Z(t,e))}var $y="http://localhost",Kt=class t extends $t{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let n=new t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Os(n,["providerId","signInMethod"]);if(!r||!s)return null;let o=new t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){let n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){let r=this.buildRequest();return r.idToken=n,In(e,r)}_getReauthenticationResolver(e){let n=this.buildRequest();return n.autoCreate=!1,In(e,n)}buildRequest(){let e={requestUri:$y,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_n(n)}return e}};async function Ky(t,e){return ee(t,"POST","/v1/accounts:sendVerificationCode",Z(t,e))}async function Hy(t,e){return Qt(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,e))}async function Wy(t,e){let n=await Qt(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,e));if(n.temporaryProof)throw or(t,"account-exists-with-different-credential",n);return n}var Qy={USER_NOT_FOUND:"user-not-found"};async function Yy(t,e){let n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Qt(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,n),Qy)}var lr=class t extends $t{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new t({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new t({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Hy(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Wy(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Yy(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new t({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}};function Jy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xy(t){let e=yn(wn(t)).link,n=e?yn(wn(e)).deep_link_id:null,r=yn(wn(t)).deep_link_id;return(r?yn(wn(r)).link:null)||r||n||e||t}var Ws=class t{constructor(e){var n,r,s,i,o,a;let c=yn(wn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Jy((s=c.mode)!==null&&s!==void 0?s:null);E(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){let n=Xy(e);try{return new t(n)}catch{return null}}};var gt=class t{constructor(){this.providerId=t.PROVIDER_ID}static credential(e,n){return ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){let r=Ws.parseLink(n);return E(r,"argument-error"),ur._fromEmailAndCode(e,r.code,r.tenantId)}};gt.PROVIDER_ID="password";gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Qs=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Ht=class extends Qs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var hr=class t extends Ht{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";var dr=class t extends Ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kt._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return t.credential(n,r)}catch{return null}}};dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";var fr=class t extends Ht{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";var mr=class t extends Ht{constructor(){super("twitter.com")}static credential(e,n){return Kt._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return t.credential(n,r)}catch{return null}}};mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";var pr=class t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){let i=await cr._fromIdTokenResponse(e,r,s),o=$h(r);return new t({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);let s=$h(r);return new t({user:e,providerId:s,_tokenResponse:r,operationType:n})}};function $h(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}var wa=class t extends ce{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,t.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new t(e,n,r,s)}};function Id(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wa._fromErrorAndOperation(t,i,e,r):i})}async function Zy(t,e,n=!1){let r=await Gt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pr._forOperation(t,"link",r)}async function vd(t,e,n=!1){let{auth:r}=t,s="reauthenticate";try{let i=await Gt(t,Id(r,s,e,t),n);E(i.idToken,r,"internal-error");let o=ka(i.idToken);E(o,r,"internal-error");let{sub:a}=o;return E(t.uid===a,r,"user-mismatch"),pr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}async function Ed(t,e,n=!1){let r="signIn",s=await Id(t,r,e),i=await pr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Td(t,e){return Ed(Rt(t),e)}async function Na(t,e){return vd(L(t),e)}function ew(t,e,n){var r;E(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),E(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function tw(t){let e=Rt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xa(t,e,n){let r=Rt(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&ew(r,s,n),await ya(r,s,"getOobCode",zy)}function Oa(t,e,n){return Td(L(t),gt.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tw(t),r})}async function nw(t,e){return ee(t,"POST","/v1/accounts:update",e)}async function yr(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;let r=L(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Gt(r,nw(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;let a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function La(t,e){return Ad(L(t),e,null)}function Va(t,e){return Ad(L(t),null,e)}async function Ad(t,e,n){let{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);let o=await Gt(t,Uy(r,i));await t._updateTokensIfNecessary(o,!0)}function bd(t,e,n,r){return L(t).onIdTokenChanged(e,n,r)}function Sd(t,e,n){return L(t).beforeAuthStateChanged(e,n)}function Ma(t,e,n,r){return L(t).onAuthStateChanged(e,n,r)}function Ua(t){return L(t).signOut()}function rw(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:start",Z(t,e))}function sw(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:finalize",Z(t,e))}function iw(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:start",Z(t,e))}function ow(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:finalize",Z(t,e))}var Ys="__sak";var Js=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){let n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};function aw(){let t=G();return Da(t)||li(t)}var cw=1e3,uw=10,Xs=class extends Js{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aw()&&Py(),this.fallbackToPolling=fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let n of Object.keys(this.listeners)){let r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}let r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}let s=()=>{let o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ry()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uw):s()}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){let n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};Xs.type="LOCAL";var Rd=Xs;var Zs=class extends Js{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};Zs.type="SESSION";var Fa=Zs;function lw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}var ei=class t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;let r=new t(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});let a=Array.from(o).map(async u=>u(n.origin,i)),c=await lw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};ei.receivers=[];function qa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}var Ia=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){let s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{let u=qa("",20);s.port1.start();let l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){let d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function Je(){return window}function hw(t){Je().location.href=t}function Pd(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function dw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fw(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mw(){return Pd()?self:null}var Cd="firebaseLocalStorageDb",pw=1,ti="firebaseLocalStorage",kd="fbase_key",Wt=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function hi(t,e){return t.transaction([ti],e?"readwrite":"readonly").objectStore(ti)}function gw(){let t=indexedDB.deleteDatabase(Cd);return new Wt(t).toPromise()}function va(){let t=indexedDB.open(Cd,pw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{let r=t.result;try{r.createObjectStore(ti,{keyPath:kd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{let r=t.result;r.objectStoreNames.contains(ti)?e(r):(r.close(),await gw(),e(await va()))})})}async function Kh(t,e,n){let r=hi(t,!0).put({[kd]:e,value:n});return new Wt(r).toPromise()}async function _w(t,e){let n=hi(t,!1).get(e),r=await new Wt(n).toPromise();return r===void 0?null:r.value}function Hh(t,e){let n=hi(t,!0).delete(e);return new Wt(n).toPromise()}var yw=800,ww=3,ni=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await va(),this.db)}async _withRetries(e){let n=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(n++>ww)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ei._getInstance(mw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dw(),!this.activeServiceWorker)return;this.sender=new Ia(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await va();return await Kh(e,Ys,"1"),await Hh(e,Ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){let n=await this._withRetries(r=>_w(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(s=>{let i=hi(s,!1).getAll();return new Wt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let n=[],r=new Set;if(e.length!==0)for(let{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(let s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};ni.type="LOCAL";var Dd=ni;function Iw(t,e){return ee(t,"POST","/v2/accounts/mfaSignIn:start",Z(t,e))}function vw(t,e){return ee(t,"POST","/v2/accounts/mfaSignIn:finalize",Z(t,e))}function Ew(t,e){return ee(t,"POST","/v2/accounts/mfaSignIn:finalize",Z(t,e))}var tb=gd("rcb"),nb=new jt(3e4,6e4);var Tw="recaptcha";async function Aw(t,e,n){var r;let s=await n.verify();try{E(typeof s=="string",t,"argument-error"),E(n.type===Tw,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let o=i.session;if("phoneNumber"in i)return E(o.type==="enroll",t,"internal-error"),(await rw(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{E(o.type==="signin",t,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return E(a,t,"missing-multi-factor-info"),(await Iw(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:o}=await Ky(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}var gr=class t{constructor(e){this.providerId=t.PROVIDER_ID,this.auth=Rt(e)}verifyPhoneNumber(e,n){return Aw(this.auth,e,L(n))}static credential(e,n){return lr._fromVerification(e,n)}static credentialFromResult(e){let n=e;return t.credentialFromTaggedObject(n)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:n,temporaryProof:r}=e;return n&&r?lr._fromTokenResponse(n,r):null}};gr.PROVIDER_ID="phone";gr.PHONE_SIGN_IN_METHOD="phone";function bw(t,e){return e?mt(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}var _r=class extends $t{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,n){return In(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){let n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function Sw(t){return Ed(t.auth,new _r(t),t.bypassAuthState)}function Rw(t){let{auth:e,user:n}=t;return E(n,e,"internal-error"),vd(n,new _r(t),t.bypassAuthState)}async function Pw(t){let{auth:e,user:n}=t;return E(n,e,"internal-error"),Zy(n,new _r(t),t.bypassAuthState)}var ri=class{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sw;case"linkViaPopup":case"linkViaRedirect":return Pw;case"reauthViaPopup":case"reauthViaRedirect":return Rw;default:qe(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Cw=new jt(2e3,1e4);var Ea=class t extends ri{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,t.currentPopupAction&&t.currentPopupAction.cancel(),t.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");let e=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,t.currentPopupAction=null}pollUserCancellation(){let e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cw.get())};e()}};Ea.currentPopupAction=null;var kw="pendingRedirect",Us=new Map,Ta=class extends ri{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Us.get(this.auth._key());if(!e){try{let r=await Dw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Us.set(this.auth._key(),e)}return this.bypassAuthState||Us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Dw(t,e){let n=Ow(e),r=xw(t);if(!await r._isAvailable())return!1;let s=await r._get(n)==="true";return await r._remove(n),s}function Nw(t,e){Us.set(t._key(),e)}function xw(t){return mt(t._redirectPersistence)}function Ow(t){return Ms(kw,t.config.apiKey,t.name)}async function Lw(t,e,n=!1){let r=Rt(t),s=bw(r,e),o=await new Ta(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var Vw=10*60*1e3,Aa=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nd(e)){let s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){let r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wh(e))}saveEventToCache(e){this.cachedEventUids.add(Wh(e)),this.lastProcessedEventTime=Date.now()}};function Wh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Mw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nd(t);default:return!1}}async function Uw(t,e={}){return ee(t,"GET","/v1/projects",e)}var Fw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qw=/^https?/;async function Bw(t){if(t.config.emulator)return;let{authorizedDomains:e}=await Uw(t);for(let n of e)try{if(zw(n))return}catch{}qe(t,"unauthorized-domain")}function zw(t){let e=ua(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){let o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qw.test(n))return!1;if(Fw.test(t))return r===t;let s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}var jw=new jt(3e4,6e4);function Qh(){let t=Je().___jsl;if(t?.H){for(let e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gw(t){return new Promise((e,n)=>{var r,s,i;function o(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),n(Ye(t,"network-request-failed"))},timeout:jw.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)o();else{let a=gd("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},pd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fs=null,e})}var Fs=null;function $w(t){return Fs=Fs||Gw(t),Fs}var Kw=new jt(5e3,15e3),Hw="__/auth/iframe",Ww="emulator/auth/iframe",Qw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jw(t){let e=t.config;E(e.authDomain,t,"auth-domain-config-required");let n=e.emulator?Ca(e,Ww):`https://${t.config.authDomain}/${Hw}`,r={apiKey:e.apiKey,appName:t.name,v:We},s=Yw.get(t.config.apiHost);s&&(r.eid=s);let i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_n(r).slice(1)}`}async function Xw(t){let e=await $w(t),n=Je().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:Jw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});let o=Ye(t,"network-request-failed"),a=Je().setTimeout(()=>{i(o)},Kw.get());function c(){Je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}var Zw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eI=500,tI=600,nI="_blank",rI="http://localhost",si=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function sI(t,e,n,r=eI,s=tI){let i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",c=Object.assign(Object.assign({},Zw),{width:r.toString(),height:s.toString(),top:i,left:o}),u=G().toLowerCase();n&&(a=cd(u)?nI:n),ad(u)&&(e=e||rI,c.scrollbars="yes");let l=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Sy(u)&&a!=="_self")return iI(e||"",a),new si(null);let h=window.open(e||"",a,l);E(h,t,"popup-blocked");try{h.focus()}catch{}return new si(h)}function iI(t,e){let n=document.createElement("a");n.href=t,n.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var oI="__/auth/handler",aI="emulator/auth/handler",cI=encodeURIComponent("fac");async function Yh(t,e,n,r,s,i){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");let o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:We,eventId:s};if(e instanceof Qs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ah(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof Ht){let l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);let a=o;for(let l of Object.keys(a))a[l]===void 0&&delete a[l];let c=await t._getAppCheckToken(),u=c?`#${cI}=${encodeURIComponent(c)}`:"";return`${uI(t)}?${_n(a).slice(1)}${u}`}function uI({config:t}){return t.emulator?Ca(t,aI):`https://${t.authDomain}/${oI}`}var ca="webStorageSupport",ba=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fa,this._completeRedirectFn=Lw,this._overrideRedirectResult=Nw}async _openPopup(e,n,r,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");let o=await Yh(e,n,r,ua(),s);return sI(e,o,qa())}async _openRedirect(e,n,r,s){await this._originValidation(e);let i=await Yh(e,n,r,ua(),s);return hw(i),new Promise(()=>{})}_initialize(e){let n=e._key();if(this.eventManagers[n]){let{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}let r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){let n=await Xw(e),r=new Aa(e);return n.register("authEvent",s=>(E(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ca,{type:ca},s=>{var i;let o=(i=s?.[0])===null||i===void 0?void 0:i[ca];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fd()||Da()||li()}},xd=ba,ii=class{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Qe("unexpected MultiFactorSessionType")}}},Sa=class t extends ii{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t(e)}_finalizeEnroll(e,n,r){return sw(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return vw(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},oi=class{constructor(){}static assertion(e){return Sa._fromCredential(e)}};oi.FACTOR_ID="phone";var ai=class{static assertionForEnrollment(e,n){return ci._fromSecret(e,n)}static assertionForSignIn(e,n){return ci._fromEnrollmentId(e,n)}static async generateSecret(e){var n;let r=e;E(typeof((n=r.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");let s=await iw(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return ui._fromStartTotpMfaEnrollmentResponse(s,r.user.auth)}};ai.FACTOR_ID="totp";var ci=class t extends ii{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new t(n,void 0,e)}static _fromEnrollmentId(e,n){return new t(n,e)}async _finalizeEnroll(e,n,r){return E(typeof this.secret<"u",e,"argument-error"),ow(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){E(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Ew(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},ui=class t{constructor(e,n,r,s,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var r;let s=!1;return(Ls(e)||Ls(n))&&(s=!0),s&&(Ls(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Ls(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Ls(t){return typeof t>"u"||t?.length===0}var Jh="@firebase/auth",Xh="1.5.1";var Ra=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function lI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hI(t){xe(new pe("auth",(e,{options:n})=>{let r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:md(t)},u=new ga(r,s,i,c);return Ly(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xe(new pe("auth-internal",e=>{let n=Rt(e.getProvider("auth").getImmediate());return(r=>new Ra(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ue(Jh,Xh,lI(t)),ue(Jh,Xh,"esm2017")}var dI=5*60,fI=$o("authIdTokenMaxAge")||dI,Zh=null,mI=t=>async e=>{let n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fI)return;let s=n?.token;Zh!==s&&(Zh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ba(t=bt()){let e=ft(t,"auth");if(e.isInitialized())return e.getImmediate();let n=_d(t,{popupRedirectResolver:xd,persistence:[Dd,Rd,Fa]}),r=$o("authTokenSyncURL");if(r){let i=mI(r);Sd(n,i,()=>i(n.currentUser)),bd(n,o=>i(o))}let s=jo("auth");return s&&yd(n,`http://${s}`),n}hI("Browser");var qd="firebasestorage.googleapis.com",Bd="storageBucket",pI=2*60*1e3,gI=10*60*1e3;var $=class t extends ce{constructor(e,n,r=0){super(za(e),`Firebase Storage: ${n} (${za(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return za(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}},K;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(K||(K={}));function za(t){return"storage/"+t}function Wa(){let t="An unknown error occurred, please check the error payload for server response.";return new $(K.UNKNOWN,t)}function _I(t){return new $(K.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yI(t){return new $(K.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wI(){let t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $(K.UNAUTHENTICATED,t)}function II(){return new $(K.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vI(t){return new $(K.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function EI(){return new $(K.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TI(){return new $(K.CANCELED,"User canceled the upload/download.")}function AI(t){return new $(K.INVALID_URL,"Invalid URL '"+t+"'.")}function bI(t){return new $(K.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function SI(){return new $(K.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Bd+"' property when initializing the app?")}function RI(){return new $(K.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PI(){return new $(K.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CI(t){return new $(K.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ja(t){return new $(K.INVALID_ARGUMENT,t)}function zd(){return new $(K.APP_DELETED,"The Firebase app was deleted.")}function kI(t){return new $(K.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ir(t,e){return new $(K.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function wr(t){throw new $(K.INTERNAL_ERROR,"Internal error: "+t)}var Be=class t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=t.makeFromUrl(e,n)}catch{return new t(e,"")}if(r.path==="")return r;throw bI(e)}static makeFromUrl(e,n){let r=null,s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}let o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}let l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},I=n===qd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",C=new RegExp(`^https?://${I}/${s}/${w}`,"i"),O=[{regex:a,indices:c,postModify:i},{regex:f,indices:g,postModify:u},{regex:C,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<O.length;M++){let ve=O[M],j=ve.regex.exec(e);if(j){let Fe=j[ve.indices.bucket],Ke=j[ve.indices.path];Ke||(Ke=""),r=new t(Fe,Ke),ve.postModify(r);break}}if(r==null)throw AI(e);return r}},Ga=class{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function DI(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...w){u||(u=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,t(f,c())},w)}function d(){i&&clearTimeout(i)}function f(w,...C){if(u){d();return}if(w){d(),l.call(null,w,...C);return}if(c()||o){d(),l.call(null,w,...C);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,h(O)}let g=!1;function I(w){g||(g=!0,d(),!u&&(s!==null?(w||(a=2),clearTimeout(s),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function NI(t){t(!1)}function xI(t){return t!==void 0}function OI(t){return typeof t=="object"&&!Array.isArray(t)}function Qa(t){return typeof t=="string"||t instanceof String}function Od(t){return Ya()&&t instanceof Blob}function Ya(){return typeof Blob<"u"}function Ld(t,e,n,r){if(r<e)throw ja(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ja(`Invalid value for '${t}'. Expected ${n} or less.`)}function Ja(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jd(t){let e=encodeURIComponent,n="?";for(let r in t)if(t.hasOwnProperty(r)){let s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Yt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yt||(Yt={}));function LI(t,e){let n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}var $a=class{constructor(e,n,r,s,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){let e=(r,s)=>{if(s){r(!1,new vn(!1,null,!0));return}let i=this.connectionFactory_();this.pendingConnection_=i;let o=a=>{let c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;let a=i.getErrorCode()===Yt.NO_ERROR,c=i.getStatus();if(!a||LI(c,this.additionalRetryCodes_)&&this.retry){let l=i.getErrorCode()===Yt.ABORT;r(!1,new vn(!1,null,l));return}let u=this.successCodes_.indexOf(c)!==-1;r(!0,new vn(u,i))})},n=(r,s)=>{let i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{let c=this.callback_(a,a.getResponse());xI(c)?i(c):i()}catch(c){o(c)}else if(a!==null){let c=Wa();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){let c=this.appDelete_?zd():TI();o(c)}else{let c=EI();o(c)}};this.canceled_?n(!1,new vn(!1,null,!0)):this.backoffId_=DI(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},vn=class{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}};function VI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function MI(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UI(t,e){e&&(t["X-Firebase-GMPID"]=e)}function FI(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qI(t,e,n,r,s,i,o=!0){let a=jd(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return UI(u,e),VI(u,n),MI(u,i),FI(u,r),new $a(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}function BI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zI(...t){let e=BI();if(e!==void 0){let n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ya())return new Blob(t);throw new $(K.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jI(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}function GI(t){if(typeof atob>"u")throw CI("base-64");return atob(t)}var Xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},vr=class{constructor(e,n){this.data=e,this.contentType=n||null}};function $I(t,e){switch(t){case Xe.RAW:return new vr(Gd(e));case Xe.BASE64:case Xe.BASE64URL:return new vr($d(t,e));case Xe.DATA_URL:return new vr(HI(e),WI(e))}throw Wa()}function Gd(t){let e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{let i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function KI(t){let e;try{e=decodeURIComponent(t)}catch{throw Ir(Xe.DATA_URL,"Malformed data URL.")}return Gd(e)}function $d(t,e){switch(t){case Xe.BASE64:{let s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ir(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Xe.BASE64URL:{let s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ir(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=GI(e)}catch(s){throw s.message.includes("polyfill")?s:Ir(t,"Invalid character found")}let r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}var fi=class{constructor(e){this.base64=!1,this.contentType=null;let n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ir(Xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=n[1]||null;r!=null&&(this.base64=QI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}};function HI(t){let e=new fi(t);return e.base64?$d(Xe.BASE64,e.rest):KI(e.rest)}function WI(t){return new fi(t).contentType}function QI(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}var mi=class t{constructor(e,n){let r=0,s="";Od(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Od(this.data_)){let r=this.data_,s=jI(r,e,n);return s===null?null:new t(s)}else{let r=new Uint8Array(this.data_.buffer,e,n-e);return new t(r,!0)}}static getBlob(...e){if(Ya()){let n=e.map(r=>r instanceof t?r.data_:r);return new t(zI.apply(null,n))}else{let n=e.map(o=>Qa(o)?$I(Xe.RAW,o).data:o.data_),r=0;n.forEach(o=>{r+=o.byteLength});let s=new Uint8Array(r),i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new t(s,!0)}}uploadData(){return this.data_}};function Kd(t){let e;try{e=JSON.parse(t)}catch{return null}return OI(e)?e:null}function YI(t){if(t.length===0)return null;let e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function JI(t,e){let n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Hd(t){let e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}function XI(t,e){return e}var le=class{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||XI}},di=null;function ZI(t){return!Qa(t)||t.length<2?t:Hd(t)}function Wd(){if(di)return di;let t=[];t.push(new le("bucket")),t.push(new le("generation")),t.push(new le("metageneration")),t.push(new le("name","fullPath",!0));function e(i,o){return ZI(o)}let n=new le("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}let s=new le("size");return s.xform=r,t.push(s),t.push(new le("timeCreated")),t.push(new le("updated")),t.push(new le("md5Hash",null,!0)),t.push(new le("cacheControl",null,!0)),t.push(new le("contentDisposition",null,!0)),t.push(new le("contentEncoding",null,!0)),t.push(new le("contentLanguage",null,!0)),t.push(new le("contentType",null,!0)),t.push(new le("metadata","customMetadata",!0)),di=t,di}function ev(t,e){function n(){let r=t.bucket,s=t.fullPath,i=new Be(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function tv(t,e,n){let r={};r.type="file";let s=n.length;for(let i=0;i<s;i++){let o=n[i];r[o.local]=o.xform(r,e[o.server])}return ev(r,t),r}function Qd(t,e,n){let r=Kd(e);return r===null?null:tv(t,r,n)}function nv(t,e,n,r){let s=Kd(e);if(s===null||!Qa(s.downloadTokens))return null;let i=s.downloadTokens;if(i.length===0)return null;let o=encodeURIComponent;return i.split(",").map(u=>{let l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=Ja(d,n,r),g=jd({alt:"media",token:u});return f+g})[0]}function rv(t,e){let n={},r=e.length;for(let s=0;s<r;s++){let i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}var pi=class{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};function Yd(t){if(!t)throw Wa()}function sv(t,e){function n(r,s){let i=Qd(t,s,e);return Yd(i!==null),i}return n}function iv(t,e){function n(r,s){let i=Qd(t,s,e);return Yd(i!==null),nv(i,s,t.host,t._protocol)}return n}function Jd(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=II():s=wI():n.getStatus()===402?s=yI(t.bucket):n.getStatus()===403?s=vI(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function ov(t){let e=Jd(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=_I(t.path)),i.serverResponse=s.serverResponse,i}return n}function av(t,e,n){let r=e.fullServerUrl(),s=Ja(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new pi(s,i,iv(t,n),o);return a.errorHandler=ov(e),a}function cv(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function uv(t,e,n){let r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=cv(null,e)),r}function lv(t,e,n,r,s){let i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let M=0;M<2;M++)O=O+Math.random().toString().slice(2);return O}let c=a();o["Content-Type"]="multipart/related; boundary="+c;let u=uv(e,r,s),l=rv(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=mi.getBlob(h,r,d);if(f===null)throw RI();let g={name:u.fullPath},I=Ja(i,t.host,t._protocol),w="POST",C=t.maxUploadRetryTime,x=new pi(I,w,sv(t,n),C);return x.urlParams=g,x.headers=o,x.body=f.uploadData(),x.errorHandler=Jd(e),x}var uS=256*1024;var Vd=null,Ka=class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw wr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(let i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw wr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw wr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw wr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw wr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}},Ha=class extends Ka{initXhr(){this.xhr_.responseType="text"}};function Xd(){return Vd?Vd():new Ha}var En=class t{constructor(e,n){this._service=e,n instanceof Be?this._location=n:this._location=Be.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new t(e,n)}get root(){let e=new Be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hd(this._location.path)}get storage(){return this._service}get parent(){let e=YI(this._location.path);if(e===null)return null;let n=new Be(this._location.bucket,e);return new t(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kI(e)}};function hv(t,e,n){t._throwIfRoot("uploadBytes");let r=lv(t.storage,t._location,Wd(),new mi(e,!0),n);return t.storage.makeRequestWithTokens(r,Xd).then(s=>({metadata:s,ref:t}))}function dv(t){t._throwIfRoot("getDownloadURL");let e=av(t.storage,t._location,Wd());return t.storage.makeRequestWithTokens(e,Xd).then(n=>{if(n===null)throw PI();return n})}function fv(t,e){let n=JI(t._location.path,e),r=new Be(t._location.bucket,n);return new En(t.storage,r)}function mv(t){return/^[A-Za-z]+:\/\//.test(t)}function pv(t,e){return new En(t,e)}function Zd(t,e){if(t instanceof Er){let n=t;if(n._bucket==null)throw SI();let r=new En(n,n._bucket);return e!=null?Zd(r,e):r}else return e!==void 0?fv(t,e):t}function gv(t,e){if(e&&mv(e)){if(t instanceof Er)return pv(t,e);throw ja("To use ref(service, url), the first argument must be a Storage instance.")}else return Zd(t,e)}function Md(t,e){let n=e?.[Bd];return n==null?null:Be.makeFromBucketSpec(n,t)}function _v(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";let{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Cs(s,t.app.options.projectId))}var Er=class{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=qd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pI,this._maxUploadRetryTime=gI,this._requests=new Set,s!=null?this._bucket=Be.makeFromBucketSpec(s,this._host):this._bucket=Md(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Be.makeFromBucketSpec(this._url,e):this._bucket=Md(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ld("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ld("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new En(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Ga(zd());{let o=qI(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){let[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}},Ud="@firebase/storage",Fd="0.12.0";var ef="storage";function tf(t,e,n){return t=L(t),hv(t,e,n)}function nf(t){return t=L(t),dv(t)}function rf(t,e){return t=L(t),gv(t,e)}function sf(t=bt(),e){t=L(t);let r=ft(t,ef).getImmediate({identifier:e}),s=gn("storage");return s&&yv(r,...s),r}function yv(t,e,n,r={}){_v(t,e,n,r)}function wv(t,{instanceIdentifier:e}){let n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Er(n,r,s,e,We)}function Iv(){xe(new pe(ef,wv,"PUBLIC").setMultipleInstances(!0)),ue(Ud,Fd,""),ue(Ud,Fd,"esm2017")}Iv();var vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},je={},_,wc=wc||{},R=vv||self;function Ci(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ev(t){return Object.prototype.hasOwnProperty.call(t,Xa)&&t[Xa]||(t[Xa]=++Tv)}var Xa="closure_uid_"+(1e9*Math.random()>>>0),Tv=0;function Av(t,e,n){return t.call.apply(t.bind,arguments)}function bv(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ge=Av:ge=bv,ge.apply(null,arguments)}function gi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function oe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Pt(){this.s=this.s,this.o=this.o}var Sv=0;Pt.prototype.s=!1;Pt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Sv!=0)&&Ev(this)};Pt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var yf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ic(t){let e=t.length;if(0<e){let n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function of(t,e){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(Ci(r)){let s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function _e(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Rv=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{let n=()=>{};R.addEventListener("test",n,e),R.removeEventListener("test",n,e)}catch{}return t}();function Pr(t){return/^[\s\xa0]*$/.test(t)}function ki(){var t=R.navigator;return t&&(t=t.userAgent)?t:""}function Ze(t){return ki().indexOf(t)!=-1}function vc(t){return vc[" "](t),t}vc[" "]=function(){};function Pv(t,e){var n=gE;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Cv=Ze("Opera"),Sn=Ze("Trident")||Ze("MSIE"),wf=Ze("Edge"),rc=wf||Sn,If=Ze("Gecko")&&!(ki().toLowerCase().indexOf("webkit")!=-1&&!Ze("Edge"))&&!(Ze("Trident")||Ze("MSIE"))&&!Ze("Edge"),kv=ki().toLowerCase().indexOf("webkit")!=-1&&!Ze("Edge");function vf(){var t=R.document;return t?t.documentMode:void 0}var sc;e:{if(_i="",yi=function(){var t=ki();if(If)return/rv:([^\);]+)(\)|;)/.exec(t);if(wf)return/Edge\/([\d\.]+)/.exec(t);if(Sn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kv)return/WebKit\/(\S+)/.exec(t);if(Cv)return/(?:Version)[ \/]?(\S+)/.exec(t)}(),yi&&(_i=yi?yi[1]:""),Sn&&(wi=vf(),wi!=null&&wi>parseFloat(_i))){sc=String(wi);break e}sc=_i}var _i,yi,wi,ic;R.document&&Sn?(Za=vf(),ic=Za||parseInt(sc,10)||void 0):ic=void 0;var Za,Dv=ic;function Cr(t,e){if(_e.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(If){e:{try{vc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Nv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Cr.$.h.call(this)}}oe(Cr,_e);var Nv={2:"touch",3:"pen",4:"mouse"};Cr.prototype.h=function(){Cr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mr="closure_listenable_"+(1e6*Math.random()|0),xv=0;function Ov(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++xv,this.fa=this.ia=!1}function Di(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ec(t,e,n){for(let r in t)e.call(n,t[r],r,t)}function Lv(t,e){for(let n in t)e.call(void 0,t[n],n,t)}function Ef(t){let e={};for(let n in t)e[n]=t[n];return e}var af="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tf(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<af.length;i++)n=af[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ni(t){this.src=t,this.g={},this.h=0}Ni.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ac(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Ov(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function oc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=yf(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Di(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ac(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Tc="closure_lm_"+(1e6*Math.random()|0),ec={};function Af(t,e,n,r,s){if(r&&r.once)return Sf(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Af(t,e[i],n,r,s);return null}return n=Sc(n),t&&t[Mr]?t.O(e,n,Vr(r)?!!r.capture:!!r,s):bf(t,e,n,!1,r,s)}function bf(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Vr(s)?!!s.capture:!!s,a=bc(t);if(a||(t[Tc]=a=new Ni(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Vv(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Rv||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Pf(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Vv(){function t(n){return e.call(t.src,t.listener,n)}let e=Mv;return t}function Sf(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sf(t,e[i],n,r,s);return null}return n=Sc(n),t&&t[Mr]?t.P(e,n,Vr(r)?!!r.capture:!!r,s):bf(t,e,n,!0,r,s)}function Rf(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Rf(t,e[i],n,r,s);else r=Vr(r)?!!r.capture:!!r,n=Sc(n),t&&t[Mr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ac(i,n,r,s),-1<n&&(Di(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ac(e,n,r,s)),(n=-1<t?e[t]:null)&&Ac(n))}function Ac(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Mr])oc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Pf(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bc(e))?(oc(n,t),n.h==0&&(n.src=null,e[Tc]=null)):Di(t)}}}function Pf(t){return t in ec?ec[t]:ec[t]="on"+t}function Mv(t,e){if(t.fa)t=!0;else{e=new Cr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ac(t),t=n.call(r,e)}return t}function bc(t){return t=t[Tc],t instanceof Ni?t:null}var tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sc(t){return typeof t=="function"?t:(t[tc]||(t[tc]=function(e){return t.handleEvent(e)}),t[tc])}function ie(){Pt.call(this),this.i=new Ni(this),this.S=this,this.J=null}oe(ie,Pt);ie.prototype[Mr]=!0;ie.prototype.removeEventListener=function(t,e,n,r){Rf(this,t,e,n,r)};function de(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new _e(e,t);else if(e instanceof _e)e.target=e.target||t;else{var s=e;e=new _e(r,t),Tf(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ii(o,r,!0,e)&&s}if(o=e.g=t,s=Ii(o,r,!0,e)&&s,s=Ii(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ii(o,r,!1,e)&&s}ie.prototype.N=function(){if(ie.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Di(n[r]);delete t.g[e],t.h--}}this.J=null};ie.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ie.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ii(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Rc=R.JSON.stringify,cc=class{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}};function Uv(){var t=Pc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var uc=class{constructor(){this.h=this.g=null}add(e,n){let r=Cf.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}},Cf=new cc(()=>new lc,t=>t.reset()),lc=class{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}};function Fv(t){var e=1;t=t.split(":");let n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qv(t){R.setTimeout(()=>{throw t},0)}var kr,Dr=!1,Pc=new uc,kf=()=>{let t=R.Promise.resolve(void 0);kr=()=>{t.then(Bv)}},Bv=()=>{for(var t;t=Uv();){try{t.h.call(t.g)}catch(n){qv(n)}var e=Cf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dr=!1};function xi(t,e){ie.call(this),this.h=t||1,this.g=e||R,this.j=ge(this.qb,this),this.l=Date.now()}oe(xi,ie);_=xi.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),de(this,"tick"),this.ga&&(Cc(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}_.N=function(){xi.$.N.call(this),Cc(this),delete this.g};function kc(t,e,n){if(typeof t=="function")n&&(t=ge(t,n));else if(t&&typeof t.handleEvent=="function")t=ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(t,e||0)}function Df(t){t.g=kc(()=>{t.g=null,t.i&&(t.i=!1,Df(t))},t.j);let e=t.h;t.h=null,t.m.apply(null,e)}var hc=class extends Pt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Df(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function Nr(t){Pt.call(this),this.h=t,this.g={}}oe(Nr,Pt);var cf=[];function Nf(t,e,n,r){Array.isArray(n)||(n&&(cf[0]=n.toString()),n=cf);for(var s=0;s<n.length;s++){var i=Af(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function xf(t){Ec(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ac(e)},t),t.g={}}Nr.prototype.N=function(){Nr.$.N.call(this),xf(this)};Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oi(){this.g=!0}Oi.prototype.Ea=function(){this.g=!1};function zv(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function jv(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function An(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$v(t,n)+(r?" "+r:"")})}function Gv(t,e){t.info(function(){return"TIMEOUT: "+e})}Oi.prototype.info=function(){};function $v(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Rc(n)}catch{return e}}var en={},uf=null;function Li(){return uf=uf||new ie}en.Ta="serverreachability";function Of(t){_e.call(this,en.Ta,t)}oe(Of,_e);function xr(t){let e=Li();de(e,new Of(e))}en.STAT_EVENT="statevent";function Lf(t,e){_e.call(this,en.STAT_EVENT,t),this.stat=e}oe(Lf,_e);function Ee(t){let e=Li();de(e,new Lf(e,t))}en.Ua="timingevent";function Vf(t,e){_e.call(this,en.Ua,t),this.size=e}oe(Vf,_e);function Ur(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){t()},e)}var Vi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Mf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Dc(){}Dc.prototype.h=null;function lf(t){return t.h||(t.h=t.i())}function Uf(){}var Fr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nc(){_e.call(this,"d")}oe(Nc,_e);function xc(){_e.call(this,"c")}oe(xc,_e);var dc;function Mi(){}oe(Mi,Dc);Mi.prototype.g=function(){return new XMLHttpRequest};Mi.prototype.i=function(){return{}};dc=new Mi;function qr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Nr(this),this.P=Kv,t=rc?125:void 0,this.V=new xi(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ff}function Ff(){this.i=null,this.g="",this.h=!1}var Kv=45e3,qf={},fc={};_=qr.prototype;_.setTimeout=function(t){this.P=t};function mc(t,e,n){t.L=1,t.A=Fi(yt(e)),t.u=n,t.S=!0,Bf(t,null)}function Bf(t,e){t.G=Date.now(),Br(t),t.B=yt(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Qf(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Ff,t.g=gm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new hc(ge(t.Pa,t,t.g),t.O)),Nf(t.U,t.g,"readystatechange",t.nb),e=t.I?Ef(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),xr(),zv(t.j,t.v,t.B,t.m,t.W,t.u)}_.nb=function(t){t=t.target;let e=this.M;e&&et(t)==3?e.l():this.Pa(t)};_.Pa=function(t){try{if(t==this.g)e:{let l=et(this.g);var e=this.g.Ia();let h=this.g.da();if(!(3>l)&&(l!=3||rc||this.g&&(this.h.h||this.g.ja()||mf(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?xr(3):xr(2)),Ui(this);var n=this.g.da();this.ca=n;t:if(zf(this)){var r=mf(this.g);t="";var s=r.length,i=et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),Rr(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jv(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var u=a;break t}}u=null}if(n=u)An(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pc(this,n);else{this.i=!1,this.s=3,Ee(12),Jt(this),Rr(this);break e}}this.S?(jf(this,l,o),rc&&this.i&&l==3&&(Nf(this.U,this.V,"tick",this.mb),this.V.start())):(An(this.j,this.m,o,null),pc(this,o)),l==4&&Jt(this),this.i&&!this.J&&(l==4?dm(this.l,this):(this.i=!1,Br(this)))}else fE(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ee(12)):(this.s=0,Ee(13)),Jt(this),Rr(this)}}}catch{}finally{}};function zf(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function jf(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=Hv(t,n),s==fc){e==4&&(t.s=4,Ee(14),r=!1),An(t.j,t.m,null,"[Incomplete Response]");break}else if(s==qf){t.s=4,Ee(15),An(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else An(t.j,t.m,s,null),pc(t,s);zf(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ee(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fc(e),e.M=!0,Ee(11))):(An(t.j,t.m,n,"[Invalid Chunked Response]"),Jt(t),Rr(t))}_.mb=function(){if(this.g){var t=et(this.g),e=this.g.ja();this.o<e.length&&(Ui(this),jf(this,t,e),this.i&&t!=4&&Br(this))}};function Hv(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?fc:(n=Number(e.substring(n,r)),isNaN(n)?qf:(r+=1,r+n>e.length?fc:(e=e.slice(r,r+n),t.o=r+n,e)))}_.cancel=function(){this.J=!0,Jt(this)};function Br(t){t.Y=Date.now()+t.P,Gf(t,t.P)}function Gf(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ur(ge(t.lb,t),e)}function Ui(t){t.C&&(R.clearTimeout(t.C),t.C=null)}_.lb=function(){this.C=null;let t=Date.now();0<=t-this.Y?(Gv(this.j,this.B),this.L!=2&&(xr(),Ee(17)),Jt(this),this.s=2,Rr(this)):Gf(this,this.Y-t)};function Rr(t){t.l.H==0||t.J||dm(t.l,t)}function Jt(t){Ui(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Cc(t.V),xf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function pc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gc(n.i,t))){if(!t.K&&gc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bi(n),zi(n);else break e;Uc(n),Ee(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ur(ge(n.ib,n),6e3));if(1>=Xf(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Xt(n,11)}else if((t.K||n.g==t)&&bi(n),!Pr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];let l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));let h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));let d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let f=t.g;if(f){let g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Oc(i,i.h),i.h=null))}if(r.F){let I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,z(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=pm(r,r.J?r.pa:null,r.Y),o.K){Zf(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ui(a),Br(a)),r.g=o}else lm(r);0<n.j.length&&ji(n)}else u[0]!="stop"&&u[0]!="close"||Xt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xt(n,7):Mc(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}xr(4)}catch{}}function Wv(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ci(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Qv(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ci(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(let r in t)e[n++]=r;return e}}}function $f(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ci(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Qv(t),r=Wv(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Zt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zt){this.h=t.h,Ti(this,t.j),this.s=t.s,this.g=t.g,Ai(this,t.m),this.l=t.l;var e=t.i,n=new Or;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hf(this,n),this.o=t.o}else t&&(e=String(t).match(Kf))?(this.h=!1,Ti(this,e[1]||"",!0),this.s=br(e[2]||""),this.g=br(e[3]||"",!0),Ai(this,e[4]),this.l=br(e[5]||"",!0),hf(this,e[6]||"",!0),this.o=br(e[7]||"")):(this.h=!1,this.i=new Or(null,this.h))}Zt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sr(e,df,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Sr(e,df,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Sr(n,n.charAt(0)=="/"?Zv:Xv,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sr(n,tE)),t.join("")};function yt(t){return new Zt(t)}function Ti(t,e,n){t.j=n?br(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ai(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hf(t,e,n){e instanceof Or?(t.i=e,nE(t.i,t.h)):(n||(e=Sr(e,eE)),t.i=new Or(e,t.h))}function z(t,e,n){t.i.set(e,n)}function Fi(t){return z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function br(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Jv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Jv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var df=/[#\/\?@]/g,Xv=/[#\?:]/g,Zv=/[#\?]/g,eE=/[#\?@]/g,tE=/#/g;function Or(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ct(t){t.g||(t.g=new Map,t.h=0,t.i&&Yv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}_=Or.prototype;_.add=function(t,e){Ct(this),this.i=null,t=Rn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hf(t,e){Ct(t),e=Rn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Wf(t,e){return Ct(t),e=Rn(t,e),t.g.has(e)}_.forEach=function(t,e){Ct(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};_.ta=function(){Ct(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){let s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};_.Z=function(t){Ct(this);let e=[];if(typeof t=="string")Wf(this,t)&&(e=e.concat(this.g.get(Rn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};_.set=function(t,e){return Ct(this),this.i=null,t=Rn(this,t),Wf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Qf(t,e,n){Hf(t,e),0<n.length&&(t.i=null,t.g.set(Rn(t,e),Ic(n)),t.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];let i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Rn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nE(t,e){e&&!t.j&&(Ct(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Hf(this,r),Qf(this,s,n))},t)),t.j=e}var rE=class{constructor(t,e){this.g=t,this.map=e}};function Yf(t){this.l=t||sE,R.PerformanceNavigationTiming?(t=R.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sE=10;function Jf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xf(t){return t.h?1:t.g?t.g.size:0}function gc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Oc(t,e){t.g?t.g.add(e):t.h=e}function Zf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yf.prototype.cancel=function(){if(this.i=em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let t of this.g.values())t.cancel();this.g.clear()}};function em(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(let n of t.g.values())e=e.concat(n.F);return e}return Ic(t.i)}var iE=class{stringify(t){return R.JSON.stringify(t,void 0)}parse(t){return R.JSON.parse(t,void 0)}};function oE(){this.g=new iE}function aE(t,e,n){let r=n||"";try{$f(t,function(s,i){let o=s;Vr(s)&&(o=Rc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function cE(t,e){let n=new Oi;if(R.Image){let r=new Image;r.onload=gi(vi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gi(vi,n,r,"TestLoadImage: error",!1,e),r.onabort=gi(vi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gi(vi,n,r,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function zr(t){this.l=t.ec||null,this.j=t.ob||!1}oe(zr,Dc);zr.prototype.g=function(){return new qi(this.l,this.j)};zr.prototype.i=function(t){return function(){return t}}({});function qi(t,e){ie.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Lc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(qi,ie);var Lc=0;_=qi.prototype;_.open=function(t,e){if(this.readyState!=Lc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Lr(this)};_.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||R).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=Lc};_.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Lr(this)),this.g&&(this.readyState=3,Lr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function tm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}_.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jr(this):Lr(this),this.readyState==3&&tm(this)}};_.Za=function(t){this.g&&(this.response=this.responseText=t,jr(this))};_.Ya=function(t){this.g&&(this.response=t,jr(this))};_.ka=function(){this.g&&jr(this)};function jr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Lr(t)}_.setRequestHeader=function(t,e){this.v.append(t,e)};_.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Lr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uE=R.JSON.parse;function H(t){ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nm,this.L=this.M=!1}oe(H,ie);var nm="",lE=/^https?$/i,hE=["POST","PUT"];_=H.prototype;_.Oa=function(t){this.M=t};_.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dc.g(),this.C=this.u?lf(this.u):lf(dc),this.g.onreadystatechange=ge(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ff(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(let i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=R.FormData&&t instanceof R.FormData,!(0<=yf(hE,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{im(this),0<this.B&&((this.L=dE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ge(this.ua,this)):this.A=kc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ff(this,i)}};function dE(t){return Sn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}_.ua=function(){typeof wc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,de(this,"timeout"),this.abort(8))};function ff(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rm(t),Bi(t)}function rm(t){t.F||(t.F=!0,de(t,"complete"),de(t,"error"))}_.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,de(this,"complete"),de(this,"abort"),Bi(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bi(this,!0)),H.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?sm(this):this.kb())};_.kb=function(){sm(this)};function sm(t){if(t.h&&typeof wc<"u"&&(!t.C[1]||et(t)!=4||t.da()!=2)){if(t.v&&et(t)==4)kc(t.La,0,t);else if(de(t,"readystatechange"),et(t)==4){t.h=!1;try{let o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Kf)[1]||null;!s&&R.self&&R.self.location&&(s=R.self.location.protocol.slice(0,-1)),r=!lE.test(s?s.toLowerCase():"")}n=r}if(n)de(t,"complete"),de(t,"success");else{t.m=6;try{var i=2<et(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",rm(t)}}finally{Bi(t)}}}}function Bi(t,e){if(t.g){im(t);let n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||de(t,"ready");try{n.onreadystatechange=r}catch{}}}function im(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(R.clearTimeout(t.A),t.A=null)}_.isActive=function(){return!!this.g};function et(t){return t.g?t.g.readyState:0}_.da=function(){try{return 2<et(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uE(e)}};function mf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case nm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function fE(t){let e={};t=(t.g&&2<=et(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Pr(t[r]))continue;var n=Fv(t[r]);let s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();let i=e[s]||[];e[s]=i,i.push(n)}Lv(e,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function om(t){let e="";return Ec(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Vc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=om(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):z(t,e,n))}function Tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function am(t){this.Ga=0,this.j=[],this.l=new Oi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Tr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Tr("baseRetryDelayMs",5e3,t),this.hb=Tr("retryDelaySeedMs",1e4,t),this.eb=Tr("forwardChannelMaxRetries",2,t),this.xa=Tr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Yf(t&&t.concurrentRequestLimit),this.Ja=new oE,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=am.prototype;_.ra=8;_.H=1;function Mc(t){if(cm(t),t.H==3){var e=t.W++,n=yt(t.I);if(z(n,"SID",t.K),z(n,"RID",e),z(n,"TYPE","terminate"),Gr(t,n),e=new qr(t,t.l,e),e.L=2,e.A=Fi(yt(n)),n=!1,R.navigator&&R.navigator.sendBeacon)try{n=R.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&R.Image&&(new Image().src=e.A,n=!0),n||(e.g=gm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Br(e)}mm(t)}function zi(t){t.g&&(Fc(t),t.g.cancel(),t.g=null)}function cm(t){zi(t),t.u&&(R.clearTimeout(t.u),t.u=null),bi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&R.clearTimeout(t.m),t.m=null)}function ji(t){if(!Jf(t.i)&&!t.m){t.m=!0;var e=t.Na;kr||kf(),Dr||(kr(),Dr=!0),Pc.add(e,t),t.C=0}}function mE(t,e){return Xf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ur(ge(t.Na,t,e),fm(t,t.C)),t.C++,!0)}_.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;let s=new qr(this,this.l,t),i=this.s;if(this.U&&(i?(i=Ef(i),Tf(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=um(this,s,e),n=yt(this.I),z(n,"RID",t),z(n,"CVER",22),this.F&&z(n,"X-HTTP-Session-Id",this.F),Gr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(om(i)))+"&"+e:this.o&&Vc(n,this.o,i)),Oc(this.i,s),this.bb&&z(n,"TYPE","init"),this.P?(z(n,"$req",e),z(n,"SID","null"),s.aa=!0,mc(s,n,null)):mc(s,n,e),this.H=2}}else this.H==3&&(t?pf(this,t):this.j.length==0||Jf(this.i)||pf(this))};function pf(t,e){var n;e?n=e.m:n=t.W++;let r=yt(t.I);z(r,"SID",t.K),z(r,"RID",n),z(r,"AID",t.V),Gr(t,r),t.o&&t.s&&Vc(r,t.o,t.s),n=new qr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=um(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Oc(t.i,n),mc(n,r,e)}function Gr(t,e){t.na&&Ec(t.na,function(n,r){z(e,r,n)}),t.h&&$f({},function(n,r){z(e,r,n)})}function um(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ge(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){let o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g,l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{aE(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function lm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;kr||kf(),Dr||(kr(),Dr=!0),Pc.add(e,t),t.A=0}}function Uc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ur(ge(t.Ma,t),fm(t,t.A)),t.A++,!0)}_.Ma=function(){if(this.u=null,hm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ur(ge(this.jb,this),t)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ee(10),zi(this),hm(this))};function Fc(t){t.B!=null&&(R.clearTimeout(t.B),t.B=null)}function hm(t){t.g=new qr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=yt(t.wa);z(e,"RID","rpc"),z(e,"SID",t.K),z(e,"AID",t.V),z(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&z(e,"TO",t.qa),z(e,"TYPE","xmlhttp"),Gr(t,e),t.o&&t.s&&Vc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Fi(yt(e)),n.u=null,n.S=!0,Bf(n,t)}_.ib=function(){this.v!=null&&(this.v=null,zi(this),Uc(this),Ee(19))};function bi(t){t.v!=null&&(R.clearTimeout(t.v),t.v=null)}function dm(t,e){var n=null;if(t.g==e){bi(t),Fc(t),t.g=null;var r=2}else if(gc(t.i,e))n=e.F,Zf(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Li(),de(r,new Vf(r,n)),ji(t)}else lm(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&mE(t,e)||r==2&&Uc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Xt(t,5);break;case 4:Xt(t,10);break;case 3:Xt(t,6);break;default:Xt(t,2)}}}function fm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Xt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ge(t.pb,t);n||(n=new Zt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Ti(n,"https"),Fi(n)),cE(n.toString(),r)}else Ee(2);t.H=0,t.h&&t.h.za(e),mm(t),cm(t)}_.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ee(2)):(this.l.info("Failed to ping google.com"),Ee(1))};function mm(t){if(t.H=0,t.ma=[],t.h){let e=em(t.i);(e.length!=0||t.j.length!=0)&&(of(t.ma,e),of(t.ma,t.j),t.i.i.length=0,Ic(t.j),t.j.length=0),t.h.ya()}}function pm(t,e,n){var r=n instanceof Zt?yt(n):new Zt(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ai(r,r.m);else{var s=R.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Zt(null);r&&Ti(i,r),e&&(i.g=e),s&&Ai(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&z(r,n,e),z(r,"VER",t.ra),Gr(t,r),r}function gm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new H(new zr({ob:n})):new H(t.va),e.Oa(t.J),e}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function _m(){}_=_m.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function Si(){if(Sn&&!(10<=Number(Dv)))throw Error("Environmental error: no available transport.")}Si.prototype.g=function(t,e){return new Re(t,e)};function Re(t,e){ie.call(this),this.g=new am(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pn(this)}oe(Re,ie);Re.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ee(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pm(t,null,t.Y),ji(t)};Re.prototype.close=function(){Mc(this.g)};Re.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Rc(t),t=n);e.j.push(new rE(e.fb++,t)),e.H==3&&ji(e)};Re.prototype.N=function(){this.g.h=null,delete this.j,Mc(this.g),delete this.g,Re.$.N.call(this)};function ym(t){Nc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(let n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}oe(ym,Nc);function wm(){xc.call(this),this.status=1}oe(wm,xc);function Pn(t){this.g=t}oe(Pn,_m);Pn.prototype.Ba=function(){de(this.g,"a")};Pn.prototype.Aa=function(t){de(this.g,new ym(t))};Pn.prototype.za=function(t){de(this.g,new wm)};Pn.prototype.ya=function(){de(this.g,"b")};function pE(){this.blockSize=-1}function ze(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(ze,pE);ze.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}ze.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)nc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){nc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){nc(this,r),s=0;break}}this.h=s,this.i+=e};ze.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function q(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var gE={};function qc(t){return-128<=t&&128>t?Pv(t,function(e){return new q([e|0],0>e?-1:0)}):new q([t|0],0>t?-1:0)}function tt(t){if(isNaN(t)||!isFinite(t))return bn;if(0>t)return he(tt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=_c;return new q(e,0)}function Im(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return he(Im(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=tt(Math.pow(e,8)),r=bn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=tt(Math.pow(e,i)),r=r.R(i).add(tt(o))):(r=r.R(n),r=r.add(tt(o)))}return r}var _c=4294967296,bn=qc(0),yc=qc(1),gf=qc(16777216);_=q.prototype;_.ea=function(){if(Oe(this))return-he(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:_c+r)*e,e*=_c}return t};_.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(_t(this))return"0";if(Oe(this))return"-"+he(this).toString(t);for(var e=tt(Math.pow(t,6)),n=this,r="";;){var s=Pi(n,e).g;n=Ri(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,_t(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};_.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function _t(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Oe(t){return t.h==-1}_.X=function(t){return t=Ri(this,t),Oe(t)?-1:_t(t)?0:1};function he(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new q(n,~t.h).add(yc)}_.abs=function(){return Oe(this)?he(this):this};_.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new q(n,n[n.length-1]&-2147483648?-1:0)};function Ri(t,e){return t.add(he(e))}_.R=function(t){if(_t(this)||_t(t))return bn;if(Oe(this))return Oe(t)?he(this).R(he(t)):he(he(this).R(t));if(Oe(t))return he(this.R(he(t)));if(0>this.X(gf)&&0>t.X(gf))return tt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Ei(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ei(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ei(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ei(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new q(n,0)};function Ei(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ar(t,e){this.g=t,this.h=e}function Pi(t,e){if(_t(e))throw Error("division by zero");if(_t(t))return new Ar(bn,bn);if(Oe(t))return e=Pi(he(t),e),new Ar(he(e.g),he(e.h));if(Oe(e))return e=Pi(t,he(e)),new Ar(he(e.g),e.h);if(30<t.g.length){if(Oe(t)||Oe(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yc,r=e;0>=r.X(t);)n=_f(n),r=_f(r);var s=Tn(n,1),i=Tn(r,1);for(r=Tn(r,2),n=Tn(n,2);!_t(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Tn(r,1),n=Tn(n,1)}return e=Ri(t,s.R(e)),new Ar(s,e)}for(s=bn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=tt(n),o=i.R(e);Oe(o)||0<o.X(t);)n-=r,i=tt(n),o=i.R(e);_t(i)&&(i=yc),s=s.add(i),t=Ri(t,o)}return new Ar(s,t)}_.gb=function(t){return Pi(this,t).h};_.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new q(n,this.h&t.h)};_.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new q(n,this.h|t.h)};_.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new q(n,this.h^t.h)};function _f(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new q(n,t.h)}function Tn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new q(s,t.h)}Si.prototype.createWebChannel=Si.prototype.g;Re.prototype.send=Re.prototype.u;Re.prototype.open=Re.prototype.m;Re.prototype.close=Re.prototype.close;Vi.NO_ERROR=0;Vi.TIMEOUT=8;Vi.HTTP_ERROR=6;Mf.COMPLETE="complete";Uf.EventType=Fr;Fr.OPEN="a";Fr.CLOSE="b";Fr.ERROR="c";Fr.MESSAGE="d";ie.prototype.listen=ie.prototype.O;H.prototype.listenOnce=H.prototype.P;H.prototype.getLastError=H.prototype.Sa;H.prototype.getLastErrorCode=H.prototype.Ia;H.prototype.getStatus=H.prototype.da;H.prototype.getResponseJson=H.prototype.Wa;H.prototype.getResponseText=H.prototype.ja;H.prototype.send=H.prototype.ha;H.prototype.setWithCredentials=H.prototype.Oa;ze.prototype.digest=ze.prototype.l;ze.prototype.reset=ze.prototype.reset;ze.prototype.update=ze.prototype.j;q.prototype.add=q.prototype.add;q.prototype.multiply=q.prototype.R;q.prototype.modulo=q.prototype.gb;q.prototype.compare=q.prototype.X;q.prototype.toNumber=q.prototype.ea;q.prototype.toString=q.prototype.toString;q.prototype.getBits=q.prototype.D;q.fromNumber=tt;q.fromString=Im;var vm=je.createWebChannelTransport=function(){return new Si},Em=je.getStatEventTarget=function(){return Li()},Gi=je.ErrorCode=Vi,Tm=je.EventType=Mf,Am=je.Event=en,Bc=je.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fS=je.FetchXmlHttpFactory=zr,$r=je.WebChannel=Uf,bm=je.XhrIo=H,Sm=je.Md5=ze,tn=je.Integer=q;var Rm="@firebase/firestore";var ae=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");var Jn="10.7.2";var an=new Tt("@firebase/firestore");function Kr(){return an.logLevel}function y(t,...e){if(an.logLevel<=D.DEBUG){let n=e.map(Pl);an.debug(`Firestore (${Jn}): ${t}`,...n)}}function it(t,...e){if(an.logLevel<=D.ERROR){let n=e.map(Pl);an.error(`Firestore (${Jn}): ${t}`,...n)}}function On(t,...e){if(an.logLevel<=D.WARN){let n=e.map(Pl);an.warn(`Firestore (${Jn}): ${t}`,...n)}}function Pl(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}function T(t="Unexpected state"){let e=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+t;throw it(e),new Error(e)}function F(t,e){t||T()}function P(t,e){return t}var m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},v=class extends ce{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Me=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};var Qi=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},$c=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ae.UNAUTHENTICATED))}shutdown(){}},Kc=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},Hc=class{constructor(e){this.t=e,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i,s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve(),i=new Me;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Me,e.enqueueRetryable(()=>s(this.currentUser))};let o=()=>{let c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){let c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Me)}},0),o()}getToken(){let e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new Qi(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new ae(e)}},Wc=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},Qc=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Wc(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Yc=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Jc=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){let r=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);let o=i.token!==this.R;return this.R=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};let s=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){let i=this.A.getImmediate({optional:!0});i?s(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(F(typeof n.token=="string"),this.R=n.token,new Yc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function _E(t){let e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}var Yi=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let s=_E(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}};function U(t,e){return t<e?-1:t>e?1:0}function Ln(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}var fe=class t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new v(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new v(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return t.fromMillis(Date.now())}static fromDate(e){return t.fromMillis(e.getTime())}static fromMillis(e){let n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?U(this.nanoseconds,e.nanoseconds):U(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var S=class t{constructor(e){this.timestamp=e}static fromTimestamp(e){return new t(e)}static min(){return new t(new fe(0,0))}static max(){return new t(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ji=class t{constructor(e,n,r){n===void 0?n=0:n>e.length&&T(),r===void 0?r=e.length-n:r>e.length-n&&T(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return t.comparator(this,e)===0}child(e){let n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){let r=Math.min(e.length,n.length);for(let s=0;s<r;s++){let i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}},Q=class t extends Ji{construct(e,n,r){return new t(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let n=[];for(let r of e){if(r.indexOf("//")>=0)throw new v(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new t(n)}static emptyPath(){return new t([])}},yE=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Pe=class t extends Ji{construct(e,n,r){return new t(e,n,r)}static isValidIdentifier(e){return yE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new t(["__name__"])}static fromServerFormat(e){let n=[],r="",s=0,i=()=>{if(r.length===0)throw new v(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""},o=!1;for(;s<e.length;){let a=e[s];if(a==="\\"){if(s+1===e.length)throw new v(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new v(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new t(n)}static emptyPath(){return new t([])}};var A=class t{constructor(e){this.path=e}static fromPath(e){return new t(Q.fromString(e))}static fromName(e){return new t(Q.fromString(e).popFirst(5))}static empty(){return new t(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Q.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new t(new Q(e.slice()))}};var Xc=class{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}};Xc.UNKNOWN_ID=-1;function wE(t,e){let n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=S.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new cn(s,A.empty(),e)}function IE(t){return new cn(t.readTime,t.key,-1)}var cn=class t{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new t(S.min(),A.empty(),-1)}static max(){return new t(S.max(),A.empty(),-1)}};function vE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=A.comparator(t.documentKey,e.documentKey),n!==0?n:U(t.largestBatchId,e.largestBatchId))}var EE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Zc=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function ms(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==EE)throw t;y("LocalStore","Unexpectedly lost primary lease")}var p=class t{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{let n=e();return n instanceof t?n:t.resolve(n)}catch(n){return t.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):t.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):t.reject(n)}static resolve(e){return new t((n,r)=>{n(e)})}static reject(e){return new t((n,r)=>{r(e)})}static waitFor(e){return new t((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=t.resolve(!1);for(let r of e)n=n.next(s=>s?t.resolve(s):r());return n}static forEach(e,n){let r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new t((r,s)=>{let i=e.length,o=new Array(i),a=0;for(let c=0;c<i;c++){let u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new t((r,s)=>{let i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}};var eu=class t{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Me,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new on(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{let s=Cl(r.target.error);this.V.reject(new on(e,s))}}static open(e,n,r,s){try{return new t(n,e.transaction(s,r))}catch(i){throw new on(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let n=this.transaction.objectStore(e);return new nu(n)}},Xi=class t{constructor(e,n,r){this.name=e,this.version=n,this.p=r,t.S(G())===12.2&&it("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),nn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ks())return!1;if(t.C())return!0;let e=G(),n=t.S(e),r=0<n&&n<10,s=t.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){let n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){let n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{let s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{let o=i.target.result;n(o)},s.onblocked=()=>{r(new on(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{let o=i.target.error;o.name==="VersionError"?r(new v(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new v(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new on(e,o))},s.onupgradeneeded=i=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);let o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){let i=n==="readonly",o=0;for(;;){++o;try{this.db=await this.O(e);let a=eu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){let c=a,u=c.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}},tu=class{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return nn(this.k.delete())}},on=class extends v{constructor(e,n){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}};function ps(t){return t.name==="IndexedDbTransactionError"}var nu=class{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(y("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),nn(r)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),nn(this.store.add(e))}get(e){return nn(this.store.get(e)).next(n=>(n===void 0&&(n=null),y("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),nn(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),nn(this.store.count())}W(e,n){let r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){let i=s.getAll(r.range);return new p((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{let i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){let r=this.store.getAll(e,n===null?void 0:n);return new p((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){y("SimpleDb","DELETE ALL",this.store.name);let r=this.options(e,n);r.J=!1;let s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);let s=this.cursor(r);return this.G(s,n)}Z(e){let n=this.cursor({});return new p((r,s)=>{n.onerror=i=>{let o=Cl(i.target.error);s(o)},n.onsuccess=i=>{let o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){let r=[];return new p((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{let a=o.target.result;if(!a)return void s();let c=new tu(a),u=n(a.primaryKey,a.value,c);if(u instanceof p){let l=u.catch(h=>(c.done(),p.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>p.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){let r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}};function nn(t){return new p((e,n)=>{t.onsuccess=r=>{let s=r.target.result;e(s)},t.onerror=r=>{let s=Cl(r.target.error);n(s)}})}var Pm=!1;function Cl(t){let e=Xi.S(G());if(e>=12.2&&e<13){let n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){let r=new v("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Pm||(Pm=!0,setTimeout(()=>{throw r},0)),r}}return t}var es=class{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}};es._e=-1;function gs(t){return t==null}function ts(t){return t===0&&1/t==-1/0}function TE(t){return typeof t=="number"&&Number.isInteger(t)&&!ts(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}var AE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],TS=[...AE,"documentOverlays"],bE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],SE=bE,AS=[...SE,"indexConfiguration","indexState","indexEntries"];function Cm(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fn(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ep(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}var Y=class t{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){let s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){let e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nn(this.root,e,this.comparator,!0)}},Nn=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},rt=class t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??t.RED,this.left=s??t.EMPTY,this.right=i??t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this,i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();let e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}};rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var we=class t{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zi(this.data.getIterator())}getIteratorFrom(e){return new Zi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof t)||this.size!==e.size)return!1;let n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){let s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(n=>{e.push(n)}),e}toString(){let e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){let n=new t(this.comparator);return n.data=e,n}},Zi=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Ve=class t{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new t([])}unionWith(e){let n=new we(Pe.comparator);for(let r of this.fields)n=n.add(r);for(let r of e)n=n.add(r);return new t(n.toArray())}covers(e){for(let n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(n,r)=>n.isEqual(r))}};var eo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Te=class t{constructor(e){this.binaryString=e}static fromBase64String(e){let n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new eo("Invalid base64 string: "+i):i}}(e);return new t(n)}static fromUint8Array(e){let n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){let r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return U(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Te.EMPTY_BYTE_STRING=new Te("");var RE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(t){if(F(!!t),typeof t=="string"){let e=0,n=RE.exec(t);if(F(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}let r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:W(t.seconds),nanos:W(t.nanos)}}function W(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dt(t){return typeof t=="string"?Te.fromBase64String(t):Te.fromUint8Array(t)}function kl(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dl(t){let e=t.mapValue.fields.__previous_value__;return kl(e)?Dl(e):e}function ns(t){let e=kt(t.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}var ru=class{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}},to=class t{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new t("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}};var $i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kl(t)?4:tp(t)?9007199254740991:10:T()}function ot(t,e){if(t===e)return!0;let n=un(t);if(n!==un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ns(t).isEqual(ns(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;let o=kt(s.timestampValue),a=kt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dt(s.bytesValue).isEqual(Dt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return W(s.geoPointValue.latitude)===W(i.geoPointValue.latitude)&&W(s.geoPointValue.longitude)===W(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return W(s.integerValue)===W(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){let o=W(s.doubleValue),a=W(i.doubleValue);return o===a?ts(o)===ts(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ln(t.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:return function(s,i){let o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Cm(o)!==Cm(a))return!1;for(let c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ot(o[c],a[c])))return!1;return!0}(t,e);default:return T()}}function rs(t,e){return(t.values||[]).find(n=>ot(n,e))!==void 0}function Vn(t,e){if(t===e)return 0;let n=un(t),r=un(e);if(n!==r)return U(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return U(t.booleanValue,e.booleanValue);case 2:return function(i,o){let a=W(i.integerValue||i.doubleValue),c=W(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return km(t.timestampValue,e.timestampValue);case 4:return km(ns(t),ns(e));case 5:return U(t.stringValue,e.stringValue);case 6:return function(i,o){let a=Dt(i),c=Dt(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){let a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){let l=U(a[u],c[u]);if(l!==0)return l}return U(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){let a=U(W(i.latitude),W(o.latitude));return a!==0?a:U(W(i.longitude),W(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){let a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){let l=Vn(a[u],c[u]);if(l)return l}return U(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===$i.mapValue&&o===$i.mapValue)return 0;if(i===$i.mapValue)return 1;if(o===$i.mapValue)return-1;let a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){let d=U(c[h],l[h]);if(d!==0)return d;let f=Vn(a[c[h]],u[l[h]]);if(f!==0)return f}return U(c.length,l.length)}(t.mapValue,e.mapValue);default:throw T()}}function km(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return U(t,e);let n=kt(t),r=kt(e),s=U(n.seconds,r.seconds);return s!==0?s:U(n.nanos,r.nanos)}function Mn(t){return su(t)}function su(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){let r=kt(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dt(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return A.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(let i of n.values||[])s?s=!1:r+=",",r+=su(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){let r=Object.keys(n.fields||{}).sort(),s="{",i=!0;for(let o of r)i?i=!1:s+=",",s+=`${o}:${su(n.fields[o])}`;return s+"}"}(t.mapValue):T()}function iu(t){return!!t&&"integerValue"in t}function Nl(t){return!!t&&"arrayValue"in t}function Dm(t){return!!t&&"nullValue"in t}function Nm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hi(t){return!!t&&"mapValue"in t}function Qr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return fn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qr(r)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tp(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Ae=class t{constructor(e){this.value=e}static empty(){return new t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(n)}setAll(e){let n=Pe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){let c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qr(o):s.push(a.lastSegment())});let i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){let n=this.field(e.popLast());Hi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fn(n,(s,i)=>e[s]=i);for(let s of r)delete e[s]}clone(){return new t(Qr(this.value))}};function np(t){let e=[];return fn(t.fields,(n,r)=>{let s=new Pe([n]);if(Hi(r)){let i=np(r.mapValue).fields;if(i.length===0)e.push(s);else for(let o of i)e.push(s.child(o))}else e.push(s)}),new Ve(e)}var De=class t{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new t(e,0,S.min(),S.min(),S.min(),Ae.empty(),0)}static newFoundDocument(e,n,r,s){return new t(e,1,n,S.min(),r,s,0)}static newNoDocument(e,n){return new t(e,2,n,S.min(),S.min(),Ae.empty(),0)}static newUnknownDocument(e,n){return new t(e,3,n,S.min(),S.min(),Ae.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Un=class{constructor(e,n){this.position=e,this.inclusive=n}};function xm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){let i=e[s],o=t.position[s];if(i.field.isKeyField()?r=A.comparator(A.fromName(o.referenceValue),n.key):r=Vn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Om(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ot(t.position[n],e.position[n]))return!1;return!0}var Fn=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function PE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}var no=class{},te=class t extends no{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new au(e,n,r):n==="array-contains"?new lu(e,r):n==="in"?new hu(e,r):n==="not-in"?new du(e,r):n==="array-contains-any"?new fu(e,r):new t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cu(e,r):new uu(e,r)}matches(e){let n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vn(n,this.value)):n!==null&&un(this.value)===un(n)&&this.matchesComparison(Vn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},at=class t extends no{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new t(e,n)}matches(e){return rp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}};function rp(t){return t.op==="and"}function sp(t){return CE(t)&&rp(t)}function CE(t){for(let e of t.filters)if(e instanceof at)return!1;return!0}function ou(t){if(t instanceof te)return t.field.canonicalString()+t.op.toString()+Mn(t.value);if(sp(t))return t.filters.map(e=>ou(e)).join(",");{let e=t.filters.map(n=>ou(n)).join(",");return`${t.op}(${e})`}}function ip(t,e){return t instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&ot(r.value,s.value)}(t,e):t instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ip(o,s.filters[a]),!0):!1}(t,e):void T()}function op(t){return t instanceof te?function(n){return`${n.field.canonicalString()} ${n.op} ${Mn(n.value)}`}(t):t instanceof at?function(n){return n.op.toString()+" {"+n.getFilters().map(op).join(" ,")+"}"}(t):"Filter"}var au=class extends te{constructor(e,n,r){super(e,n,r),this.key=A.fromName(r.referenceValue)}matches(e){let n=A.comparator(e.key,this.key);return this.matchesComparison(n)}},cu=class extends te{constructor(e,n){super(e,"in",n),this.keys=ap("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}},uu=class extends te{constructor(e,n){super(e,"not-in",n),this.keys=ap("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}};function ap(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>A.fromName(r.referenceValue))}var lu=class extends te{constructor(e,n){super(e,"array-contains",n)}matches(e){let n=e.data.field(this.field);return Nl(n)&&rs(n.arrayValue,this.value)}},hu=class extends te{constructor(e,n){super(e,"in",n)}matches(e){let n=e.data.field(this.field);return n!==null&&rs(this.value.arrayValue,n)}},du=class extends te{constructor(e,n){super(e,"not-in",n)}matches(e){if(rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let n=e.data.field(this.field);return n!==null&&!rs(this.value.arrayValue,n)}},fu=class extends te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){let n=e.data.field(this.field);return!(!Nl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rs(this.value.arrayValue,r))}};var mu=class{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}};function Lm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new mu(t,e,n,r,s,i,o)}function xl(t){let e=P(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ou(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mn(r)).join(",")),e.ce=n}return e.ce}function Ol(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ip(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Om(t.startAt,e.startAt)&&Om(t.endAt,e.endAt)}function pu(t){return A.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}var qn=class{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}};function kE(t,e,n,r,s,i,o,a){return new qn(t,e,n,r,s,i,o,a)}function Ll(t){return new qn(t)}function Vm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DE(t){return t.collectionGroup!==null}function Yr(t){let e=P(t);if(e.le===null){e.le=[];let n=new Set;for(let i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new we(Pe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Fn(i,r))}),n.has(Pe.keyField().canonicalString())||e.le.push(new Fn(Pe.keyField(),r))}return e.le}function st(t){let e=P(t);return e.he||(e.he=NE(e,Yr(t))),e.he}function NE(t,e){if(t.limitType==="F")return Lm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{let i=s.dir==="desc"?"asc":"desc";return new Fn(s.field,i)});let n=t.endAt?new Un(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Un(t.startAt.position,t.startAt.inclusive):null;return Lm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gu(t,e,n){return new qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Co(t,e){return Ol(st(t),st(e))&&t.limitType===e.limitType}function cp(t){return`${xl(st(t))}|lt:${t.limitType}`}function Cn(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>op(s)).join(", ")}]`),gs(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Mn(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Mn(s)).join(",")),`Target(${r})`}(st(t))}; limitType=${t.limitType})`}function ko(t,e){return e.isFoundDocument()&&function(r,s){let i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):A.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(let i of Yr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(let i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){let u=xm(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Yr(r),s)||r.endAt&&!function(o,a,c){let u=xm(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Yr(r),s))}(t,e)}function xE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function up(t){return(e,n)=>{let r=!1;for(let s of Yr(t)){let i=OE(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function OE(t,e,n){let r=t.field.isKeyField()?A.comparator(e.key,n.key):function(i,o,a){let c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Vn(c,u):T()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}var Nt=class{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){let n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(let[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){let r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){let n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fn(this.inner,(n,r)=>{for(let[s,i]of r)e(s,i)})}isEmpty(){return ep(this.inner)}size(){return this.innerSize}};var LE=new Y(A.comparator);function wt(){return LE}var lp=new Y(A.comparator);function Wr(...t){let e=lp;for(let n of t)e=e.insert(n.key,n);return e}function hp(t){let e=lp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function rn(){return Jr()}function dp(){return Jr()}function Jr(){return new Nt(t=>t.toString(),(t,e)=>t.isEqual(e))}var VE=new Y(A.comparator),ME=new we(A.comparator);function N(...t){let e=ME;for(let n of t)e=e.add(n);return e}var UE=new we(U);function FE(){return UE}function fp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ts(e)?"-0":e}}function mp(t){return{integerValue:""+t}}function qE(t,e){return TE(e)?mp(e):fp(t,e)}var Bn=class{constructor(){this._=void 0}};function BE(t,e,n){return t instanceof zn?function(s,i){let o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kl(i)&&(i=Dl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof xt?gp(t,e):t instanceof ln?_p(t,e):function(s,i){let o=pp(s,i),a=Mm(o)+Mm(s.Ie);return iu(o)&&iu(s.Ie)?mp(a):fp(s.serializer,a)}(t,e)}function zE(t,e,n){return t instanceof xt?gp(t,e):t instanceof ln?_p(t,e):n}function pp(t,e){return t instanceof jn?function(r){return iu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}var zn=class extends Bn{},xt=class extends Bn{constructor(e){super(),this.elements=e}};function gp(t,e){let n=yp(e);for(let r of t.elements)n.some(s=>ot(s,r))||n.push(r);return{arrayValue:{values:n}}}var ln=class extends Bn{constructor(e){super(),this.elements=e}};function _p(t,e){let n=yp(e);for(let r of t.elements)n=n.filter(s=>!ot(s,r));return{arrayValue:{values:n}}}var jn=class extends Bn{constructor(e,n){super(),this.serializer=e,this.Ie=n}};function Mm(t){return W(t.integerValue||t.doubleValue)}function yp(t){return Nl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}var _u=class{constructor(e,n){this.field=e,this.transform=n}};function jE(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof xt&&s instanceof xt||r instanceof ln&&s instanceof ln?Ln(r.elements,s.elements,ot):r instanceof jn&&s instanceof jn?ot(r.Ie,s.Ie):r instanceof zn&&s instanceof zn}(t.transform,e.transform)}var yu=class{constructor(e,n){this.version=e,this.transformResults=n}},Le=class t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new t}static exists(e){return new t(void 0,e)}static updateTime(e){return new t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Wi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}var Gn=class{};function wp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ss(t.key,Le.none()):new hn(t.key,t.data,Le.none());{let n=t.data,r=Ae.empty(),s=new we(Pe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ct(t.key,r,new Ve(s.toArray()),Le.none())}}function GE(t,e,n){t instanceof hn?function(s,i,o){let a=s.value.clone(),c=Fm(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ct?function(s,i,o){if(!Wi(s.precondition,i))return void i.convertToUnknownDocument(o.version);let a=Fm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ip(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xr(t,e,n,r){return t instanceof hn?function(i,o,a,c){if(!Wi(i.precondition,o))return a;let u=i.value.clone(),l=qm(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ct?function(i,o,a,c){if(!Wi(i.precondition,o))return a;let u=qm(i.fieldTransforms,c,o),l=o.data;return l.setAll(Ip(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Wi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function $E(t,e){let n=null;for(let r of t.fieldTransforms){let s=e.data.field(r.field),i=pp(r.transform,s||null);i!=null&&(n===null&&(n=Ae.empty()),n.set(r.field,i))}return n||null}function Um(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ln(r,s,(i,o)=>jE(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}var hn=class extends Gn{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}},ct=class extends Gn{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function Ip(t){let e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=t.data.field(n);e.set(n,r)}}),e}function Fm(t,e,n){let r=new Map;F(t.length===n.length);for(let s=0;s<n.length;s++){let i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,zE(o,a,n[s]))}return r}function qm(t,e,n){let r=new Map;for(let s of t){let i=s.transform,o=n.data.field(s.field);r.set(s.field,BE(i,o,e))}return r}var ss=class extends Gn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},ro=class extends Gn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var wu=class{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){let r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){let i=this.mutations[s];i.key.isEqual(e.key)&&GE(i,e,r[s])}}applyToLocalView(e,n){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xr(r,e,n,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(n=Xr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){let r=dp();return this.mutations.forEach(s=>{let i=e.get(s.key),o=i.overlayedDocument,a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;let c=wp(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),N())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(n,r)=>Um(n,r))&&Ln(this.baseMutations,e.baseMutations,(n,r)=>Um(n,r))}},Iu=class t{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){F(e.mutations.length===r.length);let s=function(){return VE}(),i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new t(e,n,r,s)}};var vu=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Eu=class{constructor(e,n){this.count=e,this.unchangedNames=n}};var J,V;function vp(t){switch(t){default:return T();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Ep(t){if(t===void 0)return it("GRPC error has no .code"),m.UNKNOWN;switch(t){case J.OK:return m.OK;case J.CANCELLED:return m.CANCELLED;case J.UNKNOWN:return m.UNKNOWN;case J.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case J.INTERNAL:return m.INTERNAL;case J.UNAVAILABLE:return m.UNAVAILABLE;case J.UNAUTHENTICATED:return m.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case J.NOT_FOUND:return m.NOT_FOUND;case J.ALREADY_EXISTS:return m.ALREADY_EXISTS;case J.PERMISSION_DENIED:return m.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case J.ABORTED:return m.ABORTED;case J.OUT_OF_RANGE:return m.OUT_OF_RANGE;case J.UNIMPLEMENTED:return m.UNIMPLEMENTED;case J.DATA_LOSS:return m.DATA_LOSS;default:return T()}}(V=J||(J={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";var Bm=null;function KE(){return new TextEncoder}var HE=new tn([4294967295,4294967295],0);function zm(t){let e=KE().encode(t),n=new Sm;return n.update(e),new Uint8Array(n.digest())}function jm(t){let e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tn([n,r],0),new tn([s,i],0)]}var Tu=class t{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new sn(`Invalid padding: ${n}`);if(r<0)throw new sn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new sn(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new sn(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=tn.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(tn.fromNumber(r)));return s.compare(HE)===1&&(s=new tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let n=zm(e),[r,s]=jm(n);for(let i=0;i<this.hashCount;i++){let o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){let s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new t(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;let n=zm(e),[r,s]=jm(n);for(let i=0;i<this.hashCount;i++){let o=this.de(r,s,i);this.Re(o)}}Re(e){let n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}},sn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var so=class t{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){let s=new Map;return s.set(e,is.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new t(S.min(),s,new Y(U),wt(),N())}},is=class t{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new t(r,n,N(),N(),N())}};var xn=class{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}},io=class{constructor(e,n){this.targetId=e,this.fe=n}},oo=class{constructor(e,n,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}},ao=class{constructor(){this.ge=0,this.pe=$m(),this.ye=Te.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=N(),n=N(),r=N();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:T()}}),new is(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=$m()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,F(this.ge>=0)}Be(){this.Se=!0,this.we=!0}},Au=class{constructor(e){this.Le=e,this.ke=new Map,this.qe=wt(),this.Qe=Gm(),this.Ke=new Y(U)}$e(e){for(let n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(let n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{let r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:T()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){let n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){let i=s.target;if(pu(i))if(r===0){let o=new A(i.path);this.We(n,o,De.newNoDocument(o,S.min()))}else F(r===1);else{let o=this.Ze(n);if(o!==r){let a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);let u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}Bm?.tt(function(l,h,d,f,g){var I,w,C,x,O,M;let ve={localCacheCount:l,existenceFilterCount:h.count,databaseId:d.database,projectId:d.projectId},j=h.unchangedNames;return j&&(ve.bloomFilter={applied:g===0,hashCount:(I=j?.hashCount)!==null&&I!==void 0?I:0,bitmapLength:(x=(C=(w=j?.bits)===null||w===void 0?void 0:w.bitmap)===null||C===void 0?void 0:C.length)!==null&&x!==void 0?x:0,padding:(M=(O=j?.bits)===null||O===void 0?void 0:O.padding)!==null&&M!==void 0?M:0,mightContain:Fe=>{var Ke;return(Ke=f?.mightContain(Fe))!==null&&Ke!==void 0&&Ke}}),ve}(o,e.fe,this.Le.nt(),a,c))}}}}Xe(e){let n=e.fe.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n,o,a;try{o=Dt(r).toUint8Array()}catch(c){if(c instanceof eo)return On("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Tu(o,s,i)}catch(c){return On(c instanceof sn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){let r=this.Le.getRemoteKeysForTarget(n),s=0;return r.forEach(i=>{let o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){let n=new Map;this.ke.forEach((i,o)=>{let a=this.Ye(o);if(a){if(i.current&&pu(a.target)){let c=new A(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,De.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=N();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{let u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));let s=new so(e,n,this.Ke,this.qe,r);return this.qe=wt(),this.Qe=Gm(),this.Ke=new Y(U),s}Ue(e,n){if(!this.je(e))return;let r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;let s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){let n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new ao,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new we(U),this.Qe=this.Qe.insert(e,n)),n}je(e){let n=this.Ye(e)!==null;return n||y("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){let n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new ao),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}};function Gm(){return new Y(A.comparator)}function $m(){return new Y(A.comparator)}var WE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),YE=(()=>({and:"AND",or:"OR"}))(),bu=class{constructor(e,n){this.databaseId=e,this.useProto3Json=n}};function Su(t,e){return t.useProto3Json||gs(e)?e:{value:e}}function co(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tp(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JE(t,e){return co(t,e.toTimestamp())}function Ce(t){return F(!!t),S.fromTimestamp(function(n){let r=kt(n);return new fe(r.seconds,r.nanos)}(t))}function Vl(t,e){return Ru(t,e).canonicalString()}function Ru(t,e){let n=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ap(t){let e=Q.fromString(t);return F(kp(e)),e}function uo(t,e){return Vl(t.databaseId,e.path)}function Zr(t,e){let n=Ap(e);if(n.get(1)!==t.databaseId.projectId)throw new v(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new v(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new A(Sp(n))}function bp(t,e){return Vl(t.databaseId,e)}function XE(t){let e=Ap(t);return e.length===4?Q.emptyPath():Sp(e)}function Pu(t){return new Q(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sp(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Km(t,e,n){return{name:uo(t,e),fields:n.value.mapValue.fields}}function ZE(t,e){return"found"in e?function(r,s){F(!!s.found),s.found.name,s.found.updateTime;let i=Zr(r,s.found.name),o=Ce(s.found.updateTime),a=s.found.createTime?Ce(s.found.createTime):S.min(),c=new Ae({mapValue:{fields:s.found.fields}});return De.newFoundDocument(i,o,a,c)}(t,e):"missing"in e?function(r,s){F(!!s.missing),F(!!s.readTime);let i=Zr(r,s.missing),o=Ce(s.readTime);return De.newNoDocument(i,o)}(t,e):T()}function eT(t,e){let n;if("targetChange"in e){e.targetChange;let r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(F(l===void 0||typeof l=="string"),Te.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),Te.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){let l=u.code===void 0?m.UNKNOWN:Ep(u.code);return new v(l,u.message||"")}(o);n=new oo(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let s=Zr(t,r.document.name),i=Ce(r.document.updateTime),o=r.document.createTime?Ce(r.document.createTime):S.min(),a=new Ae({mapValue:{fields:r.document.fields}}),c=De.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new xn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let s=Zr(t,r.document),i=r.readTime?Ce(r.readTime):S.min(),o=De.newNoDocument(s,i),a=r.removedTargetIds||[];n=new xn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let s=Zr(t,r.document),i=r.removedTargetIds||[];n=new xn([],i,s,null)}else{if(!("filter"in e))return T();{e.filter;let r=e.filter;r.targetId;let{count:s=0,unchangedNames:i}=r,o=new Eu(s,i),a=r.targetId;n=new io(a,o)}}return n}function Rp(t,e){let n;if(e instanceof hn)n={update:Km(t,e.key,e.value)};else if(e instanceof ss)n={delete:uo(t,e.key)};else if(e instanceof ct)n={update:Km(t,e.key,e.data),updateMask:uT(e.fieldMask)};else{if(!(e instanceof ro))return T();n={verify:uo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){let a=o.transform;if(a instanceof zn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ln)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:JE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(t,e.precondition)),n}function tT(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ce(s.updateTime):Ce(i);return o.isEqual(S.min())&&(o=Ce(i)),new yu(o,s.transformResults||[])}(n,e))):[]}function nT(t,e){return{documents:[bp(t,e.path)]}}function rT(t,e){let n={structuredQuery:{}},r=e.path,s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bp(t,s);let i=function(u){if(u.length!==0)return Cp(at.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);let o=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:kn(d.field),direction:oT(d.dir)}}(l))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);let a=Su(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:s}}function sT(t){let e=XE(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,s=null;if(r>0){F(r===1);let l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(h){let d=Pp(h);return d instanceof at&&sp(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Fn(Dn(g.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,gs(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){let d=!!h.before,f=h.values||[];return new Un(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){let d=!h.before,f=h.values||[];return new Un(f,d)}(n.endAt)),kE(e,s,o,i,a,"F",c,u)}function iT(t,e){let n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pp(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":let r=Dn(n.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":let s=Dn(n.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=Dn(n.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=Dn(n.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(t):t.fieldFilter!==void 0?function(n){return te.create(Dn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return at.create(n.compositeFilter.filters.map(r=>Pp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(t):T()}function oT(t){return WE[t]}function aT(t){return QE[t]}function cT(t){return YE[t]}function kn(t){return{fieldPath:t.canonicalString()}}function Dn(t){return Pe.fromServerFormat(t.fieldPath)}function Cp(t){return t instanceof te?function(n){if(n.op==="=="){if(Nm(n.value))return{unaryFilter:{field:kn(n.field),op:"IS_NAN"}};if(Dm(n.value))return{unaryFilter:{field:kn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Nm(n.value))return{unaryFilter:{field:kn(n.field),op:"IS_NOT_NAN"}};if(Dm(n.value))return{unaryFilter:{field:kn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(n.field),op:aT(n.op),value:n.value}}}(t):t instanceof at?function(n){let r=n.getFilters().map(s=>Cp(s));return r.length===1?r[0]:{compositeFilter:{op:cT(n.op),filters:r}}}(t):T()}function uT(t){let e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}var os=class t{constructor(e,n,r,s,i=S.min(),o=S.min(),a=Te.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Cu=class{constructor(e){this.ct=e}};function lT(t){let e=sT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gu(e,e.limit,"L"):e}var lo=class{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(W(e.integerValue));else if("doubleValue"in e){let r=W(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),ts(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Dt(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){let r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?tp(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):T()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){let r=e.fields||{};this.Et(n,55);for(let s of Object.keys(r))this.Rt(s,n),this.It(r[s],n)}wt(e,n){let r=e.values||[];this.Et(n,50);for(let s of r)this.It(s,n)}gt(e,n){this.Et(n,37),A.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}};lo.bt=new lo;var ku=class{constructor(){this._n=new Du}addToCollectionParentIndex(e,n){return this._n.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}deleteAllFieldIndexes(e){return p.resolve()}createTargetIndexes(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getIndexType(e,n){return p.resolve(0)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,n){return p.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,n){return p.resolve(cn.min())}updateCollectionGroup(e,n,r){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}},Du=class{constructor(){this.index={}}add(e){let n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new we(Q.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){let n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new we(Q.comparator)).toArray()}};var SS=new Uint8Array(0);var nt=class t{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};nt.DEFAULT_COLLECTION_PERCENTILE=10,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nt.DEFAULT=new nt(41943040,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nt.DISABLED=new nt(-1,0,0);var as=class t{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new t(0)}static Bn(){return new t(-1)}};var Nu=class{constructor(){this.changes=new Nt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();let r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var xu=class{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}};var Ou=class{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xr(r.mutation,s,Ve.empty(),fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,N()).next(()=>r))}getLocalViewOfDocuments(e,n,r=N()){let s=rn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Wr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){let r=rn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,N()))}populateOverlays(e,n,r){let s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=wt(),o=Jr(),a=function(){return Jr()}();return n.forEach((c,u)=>{let l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof ct)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Xr(l.mutation,u,l.mutation.getFieldMask(),fe.now())):o.set(u.key,Ve.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new xu(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){let r=Jr(),s=new Y((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(let a of o)a.keys().forEach(c=>{let u=n.get(c);if(u===null)return;let l=r.get(c)||Ve.empty();l=a.applyToLocalView(u,l),r.set(c,l);let h=(s.get(a.batchId)||N()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{let o=[],a=s.getReverseIterator();for(;a.hasNext();){let c=a.getNext(),u=c.key,l=c.value,h=dp();l.forEach(d=>{if(!i.has(d)){let f=wp(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return A.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{let o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):p.resolve(rn()),a=-1,c=i;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,N())).next(l=>({batchId:a,changes:hp(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new A(n)).next(r=>{let s=Wr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){let i=n.collectionGroup,o=Wr();return this.indexManager.getCollectionParents(e,i).next(a=>p.forEach(a,c=>{let u=function(h,d){return new qn(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{let l=u.getKey();o.get(l)===null&&(o=o.insert(l,De.newInvalidDocument(l)))});let a=Wr();return o.forEach((c,u)=>{let l=i.get(c);l!==void 0&&Xr(l.mutation,u,Ve.empty(),fe.now()),ko(n,u)&&(a=a.insert(c,u))}),a})}};var Lu=class{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return p.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ce(s.createTime)}}(n)),p.resolve()}getNamedQuery(e,n){return p.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:lT(s.bundledQuery),readTime:Ce(s.readTime)}}(n)),p.resolve()}};var Vu=class{constructor(){this.overlays=new Y(A.comparator),this.hr=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}getOverlays(e,n){let r=rn();return p.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),p.resolve()}removeOverlaysForBatchId(e,n,r){let s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),p.resolve()}getOverlaysForCollection(e,n,r){let s=rn(),i=n.length+1,o=new A(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){let c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return p.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Y((u,l)=>u-l),o=this.overlays.getIterator();for(;o.hasNext();){let u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=rn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}let a=rn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return p.resolve(a)}ht(e,n,r){let s=this.overlays.get(r.key);if(s!==null){let o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vu(n,r));let i=this.hr.get(n);i===void 0&&(i=N(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}};var cs=class{constructor(){this.Pr=new we(X.Ir),this.Tr=new we(X.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){let r=new X(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new X(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){let n=new A(new Q([])),r=new X(n,e),s=new X(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let n=new A(new Q([])),r=new X(n,e),s=new X(n,e+1),i=N();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){let n=new X(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}},X=class{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return A.comparator(e.key,n.key)||U(e.pr,n.pr)}static Er(e,n){return U(e.pr,n.pr)||A.comparator(e.key,n.key)}};var Mu=class{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new we(X.Ir)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new wu(i,n,r,s);this.mutationQueue.push(o);for(let a of s)this.wr=this.wr.add(new X(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){let r=n+1,s=this.br(r),i=s<0?0:s;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){let r=new X(n,0),s=new X(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{let a=this.Sr(o.pr);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(U);return n.forEach(s=>{let i=new X(s,0),o=new X(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),p.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){let r=n.path,s=r.length+1,i=r;A.isDocumentKey(i)||(i=i.child(""));let o=new X(new A(i),0),a=new we(U);return this.wr.forEachWhile(c=>{let u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(e){let n=[];return e.forEach(r=>{let s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){F(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return p.forEach(n.mutations,s=>{let i=new X(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){let r=new X(n,0),s=this.wr.firstAfterOrEqual(r);return p.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){let n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}};var Uu=class{constructor(e){this.vr=e,this.docs=function(){return new Y(A.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){let r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){let r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let r=wt();return n.forEach(s=>{let i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():De.newInvalidDocument(s))}),p.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wt(),o=n.path,a=new A(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){let{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vE(IE(l),r)<=0||(s.has(l.key)||ko(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(e,n,r,s){T()}Fr(e,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Fu(this)}getSize(e){return p.resolve(this.size)}},Fu=class extends Nu{constructor(e){super(),this.ar=e}applyChanges(e){let n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),p.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}};var qu=class{constructor(e){this.persistence=e,this.Mr=new Nt(n=>xl(n),Ol),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cs,this.targetCount=0,this.Br=as.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),p.resolve()}qn(e){this.Mr.set(e.target,e);let n=e.targetId;n>this.highestTargetId&&(this.Br=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.qn(n),p.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,r){let s=0,i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){let r=this.Mr.get(n)||null;return p.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),p.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);let s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),p.resolve()}getMatchingKeysForTargetId(e,n){let r=this.Nr.gr(n);return p.resolve(r)}containsKey(e,n){return p.resolve(this.Nr.containsKey(n))}};var Bu=class{constructor(e,n){this.Lr={},this.overlays={},this.kr=new es(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new qu(this),this.indexManager=new ku,this.remoteDocumentCache=function(s){return new Uu(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Cu(n),this.$r=new Lu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Vu,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Mu(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){y("MemoryPersistence","Starting transaction:",e);let s=new zu(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return p.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}},zu=class extends Zc{constructor(e){super(),this.currentSequenceNumber=e}},ju=class t{constructor(e){this.persistence=e,this.zr=new cs,this.jr=null}static Hr(e){return new t(e)}get Jr(){if(this.jr)return this.jr;throw T()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),p.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),p.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){let n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,r=>{let s=A.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,S.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return p.or([()=>p.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}};var Gu=class t{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=N(),s=N();for(let i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new t(e,n.fromCache,r,s)}};var $u=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Ku=class{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Eh()?8:Xi.v(G())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){let i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;let o=new $u;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Kr()<=D.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",Cn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(Kr()<=D.DEBUG&&y("QueryEngine","Query:",Cn(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Kr()<=D.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",Cn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(n))):p.resolve())}ji(e,n){if(Vm(n))return p.resolve(null);let r=st(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gu(n,null,"F"),r=st(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{let o=N(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{let u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(e,gu(n,null,"F")):this.es(e,u,n,c)}))})))}Hi(e,n,r,s){return Vm(n)||s.isEqual(S.min())?p.resolve(null):this.zi.getDocuments(e,r).next(i=>{let o=this.Zi(n,i);return this.Xi(n,o,r,s)?p.resolve(null):(Kr()<=D.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cn(n)),this.es(e,o,n,wE(s,-1)).next(a=>a))})}Zi(e,n){let r=new we(up(e));return n.forEach((s,i)=>{ko(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;let i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Kr()<=D.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Cn(n)),this.zi.getDocumentsMatchingQuery(e,n,cn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}};var Hu=class{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Y(U),this.rs=new Nt(i=>xl(i),Ol),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ou(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}};function hT(t,e,n,r){return new Hu(t,e,n,r)}async function Dp(t,e){let n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{let o=[],a=[],c=N();for(let u of s){o.push(u.batchId);for(let l of u.mutations)c=c.add(l.key)}for(let u of i){a.push(u.batchId);for(let l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function dT(t,e){let n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){let h=u.batch,d=h.keys(),f=p.resolve();return d.forEach(g=>{f=f.next(()=>l.getEntry(c,g)).next(I=>{let w=u.docVersions.get(g);F(w!==null),I.version.compareTo(w)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),l.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=N();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Np(t){let e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function fT(t,e){let n=P(t),r=e.snapshotVersion,s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;let a=[];e.targetChanges.forEach((l,h)=>{let d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Te.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(I,w,C){return I.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,l)&&a.push(n.Qr.updateTargetData(i,f))});let c=wt(),u=N();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(mT(i,o,e.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(S.min())){let l=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.ns=s,i))}function mT(t,e,n){let r=N(),s=N();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wt();return n.forEach((a,c)=>{let u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function pT(t,e){let n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gT(t,e){let n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,p.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new os(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{let s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Wu(t,e,n){let r=P(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ps(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Hm(t,e,n){let r=P(t),s=S.min(),i=N();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){let h=P(c),d=h.rs.get(l);return d!==void 0?p.resolve(h.ns.get(d)):h.Qr.getTargetData(u,l)}(r,o,st(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:S.min(),n?i:N())).next(a=>(_T(r,xE(e),a),{documents:a,hs:i})))}function _T(t,e,n){let r=t.ss.get(e)||S.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}var ho=class{constructor(){this.activeTargetIds=FE()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Qu=class{constructor(){this.no=new ho,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ho,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Yu=class{io(e){}shutdown(){}};var fo=class{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.uo)e(0)}ao(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Ki=null;function zc(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}var yT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var Ju=class{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}};var ye="WebChannelConnection",Xu=class extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;let r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){let a=zc(),c=this.bo(n,r.toUriEncodedString());y("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);let u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(n,c,u,s).then(l=>(y("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw On("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){let s=yT[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){let i=zc();return new Promise((o,a)=>{let c=new bm;c.setWithCredentials(!0),c.listenOnce(Tm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Gi.NO_ERROR:let l=c.getResponseJson();y(ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Gi.TIMEOUT:y(ye,`RPC '${e}' ${i} timed out`),a(new v(m.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:let h=c.getStatus();if(y(ye,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);let f=d?.error;if(f&&f.status&&f.message){let g=function(w){let C=w.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(C)>=0?C:m.UNKNOWN}(f.status);a(new v(g,f.message))}else a(new v(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new v(m.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y(ye,`RPC '${e}' ${i} completed.`)}});let u=JSON.stringify(s);y(ye,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Fo(e,n,r){let s=zc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vm(),a=Em(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;let l=i.join("");y(ye,`Creating RPC '${e}' stream ${s}: ${l}`,c);let h=o.createWebChannel(l,c),d=!1,f=!1,g=new Ju({lo:w=>{f?y(ye,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(d||(y(ye,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),y(ye,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},ho:()=>h.close()}),I=(w,C,x)=>{w.listen(C,O=>{try{x(O)}catch(M){setTimeout(()=>{throw M},0)}})};return I(h,$r.EventType.OPEN,()=>{f||y(ye,`RPC '${e}' stream ${s} transport opened.`)}),I(h,$r.EventType.CLOSE,()=>{f||(f=!0,y(ye,`RPC '${e}' stream ${s} transport closed`),g.Vo())}),I(h,$r.EventType.ERROR,w=>{f||(f=!0,On(ye,`RPC '${e}' stream ${s} transport errored:`,w),g.Vo(new v(m.UNAVAILABLE,"The operation could not be completed")))}),I(h,$r.EventType.MESSAGE,w=>{var C;if(!f){let x=w.data[0];F(!!x);let O=x,M=O.error||((C=O[0])===null||C===void 0?void 0:C.error);if(M){y(ye,`RPC '${e}' stream ${s} received error:`,M);let ve=M.status,j=function(nr){let As=J[nr];if(As!==void 0)return Ep(As)}(ve),Fe=M.message;j===void 0&&(j=m.INTERNAL,Fe="Unknown error status: "+ve+" with message "+M.message),f=!0,g.Vo(new v(j,Fe)),h.close()}else y(ye,`RPC '${e}' stream ${s} received:`,x),g.mo(x)}}),I(a,Am.STAT_EVENT,w=>{w.stat===Bc.PROXY?y(ye,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===Bc.NOPROXY&&y(ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}};function jc(){return typeof document<"u"?document:null}function Do(t){return new bu(t,!0)}var us=class{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}};var mo=class{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new us(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(it(n.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{let s=new v(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){let r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Zu=class extends mo{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();let n=eT(this.serializer,e),r=function(i){if(!("targetChange"in i))return S.min();let o=i.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?Ce(o.readTime):S.min()}(e);return this.listener.u_(n,r)}c_(e){let n={};n.database=Pu(this.serializer),n.addTarget=function(i,o){let a,c=o.target;if(a=pu(c)?{documents:nT(i,c)}:{query:rT(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tp(i,o.resumeToken);let u=Su(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=co(i,o.snapshotVersion.toTimestamp());let u=Su(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);let r=iT(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){let n={};n.database=Pu(this.serializer),n.removeTarget=e,this.t_(n)}},el=class extends mo{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();let n=tT(e.writeResults,e.commitTime),r=Ce(e.commitTime);return this.listener.T_(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){let e={};e.database=Pu(this.serializer),this.t_(e)}I_(e){let n={streamToken:this.lastStreamToken,writes:e.map(r=>Rp(this.serializer,r))};this.t_(n)}};var tl=class extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new v(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Ru(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(m.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Ru(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new v(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}};var nl=class{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(it(n),this.g_=!1):y("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}};var rl=class{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{mn(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(c){let u=P(c);u.v_.add(4),await _s(u),u.x_.set("Unknown"),u.v_.delete(4),await No(u)}(this))})}),this.x_=new nl(r,s)}};async function No(t){if(mn(t))for(let e of t.F_)await e(!0)}async function _s(t){for(let e of t.F_)await e(!1)}function xp(t,e){let n=P(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Fl(n)?Ul(n):Xn(n).Jo()&&Ml(n,e))}function Op(t,e){let n=P(t),r=Xn(n);n.C_.delete(e),r.Jo()&&Lp(n,e),n.C_.size===0&&(r.Jo()?r.Xo():mn(n)&&n.x_.set("Unknown"))}function Ml(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(S.min())>0){let n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xn(t).c_(e)}function Lp(t,e){t.O_.Oe(e),Xn(t).l_(e)}function Ul(t){t.O_=new Au({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Xn(t).start(),t.x_.p_()}function Fl(t){return mn(t)&&!Xn(t).Ho()&&t.C_.size>0}function mn(t){return P(t).v_.size===0}function Vp(t){t.O_=void 0}async function wT(t){t.C_.forEach((e,n)=>{Ml(t,e)})}async function IT(t,e){Vp(t),Fl(t)?(t.x_.S_(e),Ul(t)):t.x_.set("Unknown")}async function vT(t,e,n){if(t.x_.set("Online"),e instanceof oo&&e.state===2&&e.cause)try{await async function(s,i){let o=i.cause;for(let a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await po(t,r)}else if(e instanceof xn?t.O_.$e(e):e instanceof io?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(S.min()))try{let r=await Np(t.localStore);n.compareTo(r)>=0&&await function(i,o){let a=i.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){let l=i.C_.get(u);l&&i.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{let l=i.C_.get(c);if(!l)return;i.C_.set(c,l.withResumeToken(Te.EMPTY_BYTE_STRING,l.snapshotVersion)),Lp(i,c);let h=new os(l.target,c,u,l.sequenceNumber);Ml(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await po(t,r)}}async function po(t,e,n){if(!ps(e))throw e;t.v_.add(1),await _s(t),t.x_.set("Offline"),n||(n=()=>Np(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await No(t)})}function Mp(t,e){return e().catch(n=>po(t,n,e))}async function xo(t){let e=P(t),n=Ot(e),r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;ET(e);)try{let s=await pT(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,TT(e,s)}catch(s){await po(e,s)}Up(e)&&Fp(e)}function ET(t){return mn(t)&&t.D_.length<10}function TT(t,e){t.D_.push(e);let n=Ot(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Up(t){return mn(t)&&!Ot(t).Ho()&&t.D_.length>0}function Fp(t){Ot(t).start()}async function AT(t){Ot(t).d_()}async function bT(t){let e=Ot(t);for(let n of t.D_)e.I_(n.mutations)}async function ST(t,e,n){let r=t.D_.shift(),s=Iu.from(r,e,n);await Mp(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xo(t)}async function RT(t,e){e&&Ot(t).P_&&await async function(r,s){if(function(o){return vp(o)&&o!==m.ABORTED}(s.code)){let i=r.D_.shift();Ot(r).Zo(),await Mp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xo(r)}}(t,e),Up(t)&&Fp(t)}async function Wm(t,e){let n=P(t);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");let r=mn(n);n.v_.add(3),await _s(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await No(n)}async function PT(t,e){let n=P(t);e?(n.v_.delete(2),await No(n)):e||(n.v_.add(2),await _s(n),n.x_.set("Unknown"))}function Xn(t){return t.N_||(t.N_=function(n,r,s){let i=P(n);return i.R_(),new Zu(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:wT.bind(null,t),To:IT.bind(null,t),u_:vT.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Fl(t)?Ul(t):t.x_.set("Unknown")):(await t.N_.stop(),Vp(t))})),t.N_}function Ot(t){return t.B_||(t.B_=function(n,r,s){let i=P(n);return i.R_(),new el(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:AT.bind(null,t),To:RT.bind(null,t),E_:bT.bind(null,t),T_:ST.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await xo(t)):(await t.B_.stop(),t.D_.length>0&&(y("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}var sl=class t{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){let o=Date.now()+r,a=new t(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function ql(t,e){if(it("AsyncQueue",`${e}: ${t}`),ps(t))return new v(m.UNAVAILABLE,`${e}: ${t}`);throw t}var go=class t{constructor(e){this.comparator=e?(n,r)=>e(n,r)||A.comparator(n.key,r.key):(n,r)=>A.comparator(n.key,r.key),this.keyedMap=Wr(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new t(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){let n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){let n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof t)||this.size!==e.size)return!1;let n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){let s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){let r=new t;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}};var _o=class{constructor(){this.L_=new Y(A.comparator)}track(e){let n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):T():this.L_=this.L_.insert(n,e)}k_(){let e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}},$n=class t{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){let o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new t(e,n,go.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Co(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}};var il=class{constructor(){this.q_=void 0,this.Q_=[]}},ol=class{constructor(){this.queries=new Nt(e=>cp(e),Co),this.onlineState="Unknown",this.K_=new Set}};async function CT(t,e){let n=P(t),r=e.query,s=!1,i=n.queries.get(r);if(i||(s=!0,i=new il),s)try{i.q_=await n.onListen(r)}catch(o){let a=ql(o,`Initialization of query '${Cn(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Q_.push(e),e.U_(n.onlineState),i.q_&&e.W_(i.q_)&&Bl(n)}async function kT(t,e){let n=P(t),r=e.query,s=!1,i=n.queries.get(r);if(i){let o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function DT(t,e){let n=P(t),r=!1;for(let s of e){let i=s.query,o=n.queries.get(i);if(o){for(let a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Bl(n)}function NT(t,e,n){let r=P(t),s=r.queries.get(e);if(s)for(let i of s.Q_)i.onError(n);r.queries.delete(e)}function Bl(t){t.K_.forEach(e=>{e.next()})}var al=class{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){let r=[];for(let s of e.docChanges)s.type!==3&&r.push(s);e=new $n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;let r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;let n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}};var yo=class{constructor(e){this.key=e}},wo=class{constructor(e){this.key=e}},cl=class{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=N(),this.mutatedKeys=N(),this.ua=up(e),this.ca=new go(this.ua)}get la(){return this.oa}ha(e,n){let r=n?n.Pa:new _o,s=n?n.ca:this.ca,i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1,c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{let d=s.get(l),f=ko(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations),w=!1;d&&f?d.data.isEqual(f.data)?g!==I&&(r.track({type:3,doc:f}),w=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),w=!0,(c&&this.ua(f,c)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(c||u)&&(a=!0)),w&&(f?(o=o.add(f),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){let i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let o=e.Pa.k_();o.sort((l,h)=>function(f,g){let I=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return I(f)-I(g)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),s=s!=null&&s;let a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,u=c!==this._a;return this._a=c,o.length!==0||u?{snapshot:new $n(this.query,e.ca,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new _o,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];let e=this.aa;this.aa=N(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});let n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new wo(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new yo(r))}),n}Ra(e){this.oa=e.hs,this.aa=N();let n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return $n.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}},ul=class{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}},ll=class{constructor(e){this.key=e,this.ma=!1}},hl=class{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Nt(a=>cp(a),Co),this.pa=new Map,this.ya=new Set,this.wa=new Y(A.comparator),this.Sa=new Map,this.ba=new cs,this.Da={},this.Ca=new Map,this.va=as.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}};async function xT(t,e){let n=jT(t),r,s,i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{let o=await gT(n.localStore,st(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await OT(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&xp(n.remoteStore,o)}return s}async function OT(t,e,n,r,s){t.Ma=(h,d,f)=>async function(I,w,C,x){let O=w.view.ha(C);O.Xi&&(O=await Hm(I.localStore,w.query,!1).then(({documents:Fe})=>w.view.ha(Fe,O)));let M=x&&x.targetChanges.get(w.targetId),ve=x&&x.targetMismatches.get(w.targetId)!=null,j=w.view.applyChanges(O,I.isPrimaryClient,M,ve);return Ym(I,w.targetId,j.da),j.snapshot}(t,h,d,f);let i=await Hm(t.localStore,e,!0),o=new cl(e,i.hs),a=o.ha(i.documents),c=is.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);Ym(t,n,u.da);let l=new ul(e,n,o);return t.ga.set(e,l),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function LT(t,e){let n=P(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Co(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Op(n.remoteStore,r.targetId),dl(n,r.targetId)}).catch(ms)):(dl(n,r.targetId),await Wu(n.localStore,r.targetId,!0))}async function VT(t,e,n){let r=GT(t);try{let s=await function(o,a){let c=P(o),u=fe.now(),l=a.reduce((f,g)=>f.add(g.key),N()),h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=wt(),I=N();return c.os.getEntries(f,l).next(w=>{g=w,g.forEach((C,x)=>{x.isValidDocument()||(I=I.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(w=>{h=w;let C=[];for(let x of a){let O=$E(x,h.get(x.key).overlayedDocument);O!=null&&C.push(new ct(x.key,O,np(O.value.mapValue),Le.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,C,a)}).next(w=>{d=w;let C=w.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,w.batchId,C)})}).then(()=>({batchId:d.batchId,changes:hp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new Y(U)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,s.batchId,n),await ys(r,s.changes),await xo(r.remoteStore)}catch(s){let i=ql(s,"Failed to persist write");n.reject(i)}}async function qp(t,e){let n=P(t);try{let r=await fT(n.localStore,e);e.targetChanges.forEach((s,i)=>{let o=n.Sa.get(i);o&&(F(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?F(o.ma):s.removedDocuments.size>0&&(F(o.ma),o.ma=!1))}),await ys(n,r,e)}catch(r){await ms(r)}}function Qm(t,e,n){let r=P(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){let s=[];r.ga.forEach((i,o)=>{let a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){let c=P(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(let d of h.Q_)d.U_(a)&&(u=!0)}),u&&Bl(c)}(r.eventManager,e),s.length&&r.fa.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MT(t,e,n){let r=P(t);r.sharedClientState.updateQueryState(e,"rejected",n);let s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Y(A.comparator);o=o.insert(i,De.newNoDocument(i,S.min()));let a=N().add(i),c=new so(S.min(),new Map,new Y(U),o,a);await qp(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),zl(r)}else await Wu(r.localStore,e,!1).then(()=>dl(r,e,n)).catch(ms)}async function UT(t,e){let n=P(t),r=e.batch.batchId;try{let s=await dT(n.localStore,e);zp(n,r,null),Bp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ys(n,s)}catch(s){await ms(s)}}async function FT(t,e,n){let r=P(t);try{let s=await function(o,a){let c=P(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(F(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);zp(r,e,n),Bp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ys(r,s)}catch(s){await ms(s)}}function Bp(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function zp(t,e,n){let r=P(t),s=r.Da[r.currentUser.toKey()];if(s){let i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function dl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(let r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||jp(t,r)})}function jp(t,e){t.ya.delete(e.path.canonicalString());let n=t.wa.get(e);n!==null&&(Op(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),zl(t))}function Ym(t,e,n){for(let r of n)r instanceof yo?(t.ba.addReference(r.key,e),qT(t,r)):r instanceof wo?(y("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||jp(t,r.key)):T()}function qT(t,e){let n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(y("SyncEngine","New document in limbo: "+n),t.ya.add(r),zl(t))}function zl(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){let e=t.ya.values().next().value;t.ya.delete(e);let n=new A(Q.fromString(e)),r=t.va.next();t.Sa.set(r,new ll(n)),t.wa=t.wa.insert(n,r),xp(t.remoteStore,new os(st(Ll(n.path)),r,"TargetPurposeLimboResolution",es._e))}}async function ys(t,e,n){let r=P(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){s.push(u);let l=Gu.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,u){let l=P(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(u,d=>p.forEach(d.qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>p.forEach(d.Qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ps(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(let h of u){let d=h.targetId;if(!h.fromCache){let f=l.ns.get(d),g=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(g);l.ns=l.ns.insert(d,I)}}}(r.localStore,i))}async function BT(t,e){let n=P(t);if(!n.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());let r=await Dp(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new v(m.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ys(n,r.us)}}function zT(t,e){let n=P(t),r=n.Sa.get(e);if(r&&r.ma)return N().add(r.key);{let s=N(),i=n.pa.get(e);if(!i)return s;for(let o of i){let a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function jT(t){let e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MT.bind(null,e),e.fa.u_=DT.bind(null,e.eventManager),e.fa.xa=NT.bind(null,e.eventManager),e}function GT(t){let e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FT.bind(null,e),e}var Io=class{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Do(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hT(this.persistence,new Ku,e.initialUser,this.serializer)}createPersistence(e){return new Bu(ju.Hr,this.serializer)}createSharedClientState(e){return new Qu}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};var fl=class{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BT.bind(null,this.syncEngine),await PT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ol}()}createDatastore(e){let n=Do(e.databaseInfo.databaseId),r=function(i){return new Xu(i)}(e.databaseInfo);return function(i,o,a,c){return new tl(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new rl(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Qm(this.syncEngine,n,0),function(){return fo.D()?new fo:new Yu}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,l){let h=new hl(s,i,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){let s=P(r);y("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await _s(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}};var ml=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):it("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}};var pl=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new v(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let n=await async function(s,i){let o=P(s),a={documents:i.map(h=>uo(o.serializer,h))},c=await o.vo("BatchGetDocuments",o.serializer.databaseId,Q.emptyPath(),a,i.length),u=new Map;c.forEach(h=>{let d=ZE(o.serializer,h);u.set(d.key.toString(),d)});let l=[];return i.forEach(h=>{let d=u.get(h.toString());F(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ss(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{let s=A.fromPath(r);this.mutations.push(new ro(s,this.precondition(s)))}),await async function(r,s){let i=P(r),o={writes:s.map(a=>Rp(i.serializer,a))};await i.So("Commit",i.serializer.databaseId,Q.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw T();n=S.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new v(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){let n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(S.min())?Le.exists(!1):Le.updateTime(n):Le.none()}preconditionForUpdate(e){let n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(S.min()))throw new v(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Le.updateTime(n)}return Le.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var gl=class{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.za=r.maxAttempts,this.jo=new us(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{let e=new pl(this.datastore),n=this.Ja(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Ya(s)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{let n=this.updateFunction(e);return!gs(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){let n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!vp(n)}return!1}};var _l=class{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=Yi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let r=ql(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Gc(t,e){t.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");let n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Dp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jm(t,e){t.asyncQueue.verifyOperationInProgress();let n=await KT(t);y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Wm(e.remoteStore,s)),t._onlineComponents=e}function $T(t){return t.name==="FirebaseError"?t.code===m.FAILED_PRECONDITION||t.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gc(t,t._uninitializedComponentsProvider._offline)}catch(e){let n=e;if(!$T(n))throw n;On("Error using user provided cache. Falling back to memory cache: "+n),await Gc(t,new Io)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Gc(t,new Io);return t._offlineComponents}async function jl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Jm(t,t._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Jm(t,new fl))),t._onlineComponents}function HT(t){return jl(t).then(e=>e.syncEngine)}function WT(t){return jl(t).then(e=>e.datastore)}async function QT(t){let e=await jl(t),n=e.eventManager;return n.onListen=xT.bind(null,e.syncEngine),n.onUnlisten=LT.bind(null,e.syncEngine),n}function YT(t,e,n={}){let r=new Me;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){let l=new ml({next:d=>{o.enqueueAndForget(()=>kT(i,h));let f=d.docs.has(a);!f&&d.fromCache?u.reject(new v(m.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new v(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new al(Ll(a.path),l,{includeMetadataChanges:!0,Z_:!0});return CT(i,h)}(await QT(t),t.asyncQueue,e,n,r)),r.promise}function Gp(t){let e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}var Xm=new Map;function JT(t,e,n){if(!n)throw new v(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XT(t,e,n,r){if(e===!0&&r===!0)throw new v(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zm(t){if(!A.isDocumentKey(t))throw new v(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":T()}function Kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new v(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=Gl(t);throw new v(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}var vo=class{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new v(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new v(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new v(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new v(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},ls=class{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vo(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $c;switch(r.type){case"firstParty":return new Qc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new v(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let r=Xm.get(n);r&&(y("ComponentProvider","Removing Datastore"),Xm.delete(n),r.terminate())}(this),Promise.resolve()}};function ZT(t,e,n,r={}){var s;let i=(t=Kn(t,ls))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&On("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ae.MOCK_USER;else{a=Cs(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);let u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new v(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ae(u)}t._authCredentials=new Kc(new Qi(a,c))}}var yl=class t{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new t(this.firestore,e,this._query)}},ke=class t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new t(this.firestore,e,this._key)}},hs=class t extends yl{constructor(e,n,r){super(e,n,Ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new A(e))}withConverter(e){return new t(this.firestore,e,this._path)}};function Oo(t,e,...n){if(t=L(t),arguments.length===1&&(e=Yi.newId()),JT("doc","path",e),t instanceof ls){let r=Q.fromString(e,...n);return Zm(r),new ke(t,null,new A(r))}{if(!(t instanceof ke||t instanceof hs))throw new v(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=t._path.child(Q.fromString(e,...n));return Zm(r),new ke(t.firestore,t instanceof hs?t.converter:null,new A(r))}}var wl=class{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new us(this,"async_queue_retry"),this._u=()=>{let n=jc();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};let e=jc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;let n=jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});let n=new Me;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!ps(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){let n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;let s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw it("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);let s=sl.createAndSchedule(this,e,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&T()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(let n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(let n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){let n=this.nu.indexOf(e);this.nu.splice(n,1)}};var Hn=class extends ls{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new wl}(),this._persistenceKey=s?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kp(this),this._firestoreClient.terminate()}};function $p(t,e){let n=typeof t=="object"?t:bt(),r=typeof t=="string"?t:e||"(default)",s=ft(n,"firestore").getImmediate({identifier:r});if(!s._initialized){let i=gn("firestore");i&&ZT(s,...i)}return s}function $l(t){return t._firestoreClient||Kp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Kp(t){var e,n,r;let s=t._freezeSettings(),i=function(a,c,u,l){return new ru(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Gp(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new _l(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}var Wn=class t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new t(Te.fromBase64String(e))}catch(n){throw new v(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new t(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var dn=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new v(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Qn=class{constructor(e){this._methodName=e}};var ds=class{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new v(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new v(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return U(this._lat,e._lat)||U(this._long,e._long)}};var eA=/^__.*__$/,Il=class{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ct(e,this.data,this.fieldMask,n,this.fieldTransforms):new hn(e,this.data,n,this.fieldTransforms)}},Eo=class{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ct(e,this.data,this.fieldMask,n,this.fieldTransforms)}};function Hp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}var To=class t{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.mu(e),s}fu(e){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return bo(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(Hp(this.du)&&eA.test(e))throw this.pu('Document fields cannot begin and end with "__"')}},vl=class{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Do(e)}Su(e,n,r,s=!1){return new To({du:e,methodName:n,wu:r,path:Pe.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Wp(t){let e=t._freezeSettings(),n=Do(t._databaseId);return new vl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tA(t,e,n,r,s,i={}){let o=t.Su(i.merge||i.mergeFields?2:0,e,n,s);Kl("Data must be an object, but it was:",o,r);let a=Jp(r,o),c,u;if(i.merge)c=new Ve(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){let l=[];for(let h of i.mergeFields){let d=Tl(e,h,n);if(!o.contains(d))throw new v(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Zp(l,d)||l.push(d)}c=new Ve(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Il(new Ae(a),c,u)}var Ao=class t extends Qn{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof t}};function nA(t,e,n){return new To({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}var El=class t extends Qn{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){let n=nA(this,e,!0),r=this.bu.map(i=>ws(i,n)),s=new xt(r);return new _u(e.path,s)}isEqual(e){return e instanceof t&&Et(this.bu,e.bu)}};function Qp(t,e,n,r){let s=t.Su(1,e,n);Kl("Data must be an object, but it was:",s,r);let i=[],o=Ae.empty();fn(r,(c,u)=>{let l=Hl(e,c,n);u=L(u);let h=s.fu(l);if(u instanceof Ao)i.push(l);else{let d=ws(u,h);d!=null&&(i.push(l),o.set(l,d))}});let a=new Ve(i);return new Eo(o,a,s.fieldTransforms)}function Yp(t,e,n,r,s,i){let o=t.Su(1,e,n),a=[Tl(e,r,n)],c=[s];if(i.length%2!=0)throw new v(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Tl(e,i[d])),c.push(i[d+1]);let u=[],l=Ae.empty();for(let d=a.length-1;d>=0;--d)if(!Zp(u,a[d])){let f=a[d],g=c[d];g=L(g);let I=o.fu(f);if(g instanceof Ao)u.push(f);else{let w=ws(g,I);w!=null&&(u.push(f),l.set(f,w))}}let h=new Ve(u);return new Eo(l,h,o.fieldTransforms)}function ws(t,e){if(Xp(t=L(t)))return Kl("Unsupported field value:",e,t),Jp(t,e);if(t instanceof Qn)return function(r,s){if(!Hp(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);let i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,s){let i=[],o=0;for(let a of r){let c=ws(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=L(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let i=fe.fromDate(r);return{timestampValue:co(s.serializer,i)}}if(r instanceof fe){let i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:co(s.serializer,i)}}if(r instanceof ds)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wn)return{bytesValue:Tp(s.serializer,r._byteString)};if(r instanceof ke){let i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${Gl(r)}`)}(t,e)}function Jp(t,e){let n={};return ep(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fn(t,(r,s)=>{let i=ws(s,e.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Xp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof ds||t instanceof Wn||t instanceof ke||t instanceof Qn)}function Kl(t,e,n){if(!Xp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){let r=Gl(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Tl(t,e,n){if((e=L(e))instanceof dn)return e._internalPath;if(typeof e=="string")return Hl(t,e);throw bo("Field path arguments must be of type string or ",t,!1,void 0,n)}var rA=new RegExp("[~\\*/\\[\\]]");function Hl(t,e,n){if(e.search(rA)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dn(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,r,s){let i=r&&!r.isEmpty(),o=s!==void 0,a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new v(m.INVALID_ARGUMENT,a+t+c)}function Zp(t,e){return t.some(n=>n.isEqual(e))}var Yn=class{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Al(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let n=this._document.data.field(eg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}},Al=class extends Yn{data(){return super.data()}};function eg(t,e){return typeof e=="string"?Hl(t,e):e instanceof dn?e._internalPath:e._delegate._internalPath}var So=class{convertValue(e,n="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return W(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw T()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){let r={};return fn(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ds(W(e.latitude),W(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":let r=Dl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ns(e));default:return null}}convertTimestamp(e){let n=kt(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){let r=Q.fromString(e);F(kp(r));let s=new to(r.get(1),r.get(3)),i=new A(r.popFirst(5));return s.isEqual(n)||it(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}};function sA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}var bl=class extends So{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){let n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}};var Ro=class{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},fs=class extends Yn{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){let r=this._document.data.field(eg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Sl=class extends fs{data(e={}){return super.data(e)}};function ut(t){t=Kn(t,ke);let e=Kn(t.firestore,Hn);return YT($l(e),t._key).then(n=>oA(e,t,n))}var Po=class extends So{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){let n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}};function be(t,e,n,...r){t=Kn(t,ke);let s=Kn(t.firestore,Hn),i=Wp(s),o;return o=typeof(e=L(e))=="string"||e instanceof dn?Yp(i,"updateDoc",t._key,e,n,r):Qp(i,"updateDoc",t._key,e),iA(s,[o.toMutation(t._key,Le.exists(!0))])}function iA(t,e){return function(r,s){let i=new Me;return r.asyncQueue.enqueueAndForget(async()=>VT(await HT(r),s,i)),i.promise}($l(t),e)}function oA(t,e,n){let r=n.docs.get(e._key),s=new Po(t);return new fs(t,s,e._key,r,new Ro(n.hasPendingWrites,n.fromCache),e.converter)}var aA={maxAttempts:5};function Hr(t,e){if((t=L(t)).firestore!==e)throw new v(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}var Rl=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Wp(n)}get(n){let r=Hr(n,this._firestore),s=new bl(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return T();let o=i[0];if(o.isFoundDocument())return new Yn(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new Yn(this._firestore,s,r._key,null,r.converter);throw T()})}set(n,r,s){let i=Hr(n,this._firestore),o=sA(i.converter,r,s),a=tA(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(n,r,s,...i){let o=Hr(n,this._firestore),a;return a=typeof(r=L(r))=="string"||r instanceof dn?Yp(this._dataReader,"Transaction.update",o._key,r,s,i):Qp(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){let r=Hr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){let n=Hr(e,this._firestore),r=new Po(this._firestore);return super.get(e).then(s=>new fs(this._firestore,r,n._key,s._document,new Ro(!1,!1),n.converter))}};function tg(t,e,n){t=Kn(t,Hn);let r=Object.assign(Object.assign({},aA),n);return function(i){if(i.maxAttempts<1)throw new v(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){let c=new Me;return i.asyncQueue.enqueueAndForget(async()=>{let u=await WT(i);new gl(i.asyncQueue,u,a,o,c).ja()}),c.promise}($l(t),s=>e(new Rl(t,s)),r)}function ng(...t){return new El("arrayUnion",t)}(function(e,n=!0){(function(s){Jn=s})(We),xe(new pe("firestore",(r,{instanceIdentifier:s,options:i})=>{let o=r.getProvider("app").getImmediate(),a=new Hn(new Hc(r.getProvider("auth-internal")),new Jc(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new v(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ue(Rm,"4.4.1",e),ue(Rm,"4.4.1","esm2017")})();var cA="firebase",uA="10.7.2";ue(cA,uA,"app");var lA="type.googleapis.com/google.protobuf.Int64Value",hA="type.googleapis.com/google.protobuf.UInt64Value";function og(t,e){let n={};for(let r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Wl(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Wl(e));if(typeof t=="function"||typeof t=="object")return og(t,e=>Wl(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Lo(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case lA:case hA:{let e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Lo(e)):typeof t=="function"||typeof t=="object"?og(t,e=>Lo(e)):t}var Xl="functions";var rg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Lt=class extends ce{constructor(e,n,r){super(`${Xl}/${e}`,n||""),this.details=r}};function dA(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function fA(t,e){let n=dA(t),r=n,s;try{let i=e&&e.error;if(i){let o=i.status;if(typeof o=="string"){if(!rg[o])return new Lt("internal","internal");n=rg[o],r=o}let a=i.message;typeof a=="string"&&(r=a),s=i.details,s!==void 0&&(s=Lo(s))}}catch{}return n==="ok"?null:new Lt(n,r,s)}var Ql=class{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{let e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){let n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){let n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}};var Yl="us-central1";function mA(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Lt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}var Jl=class{constructor(e,n,r,s,i=Yl,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Ql(n,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{let a=new URL(i);this.customDomain=a.origin,this.region=Yl}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){let n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}};function pA(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function gA(t,e,n){return r=>yA(t,e,r,n||{})}async function _A(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function yA(t,e,n,r){let s=t._url(e);return wA(t,s,n,r)}async function wA(t,e,n,r){n=Wl(n);let s={data:n},i={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);let a=r.timeout||7e4,c=mA(a),u=await Promise.race([_A(e,s,i,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!u)throw new Lt("cancelled","Firebase Functions instance was deleted.");let l=fA(u.status,u.json);if(l)throw l;if(!u.json)throw new Lt("internal","Response is not valid JSON object.");let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new Lt("internal","Response is missing data field.");return{data:Lo(h)}}var sg="@firebase/functions",ig="0.11.0";var IA="auth-internal",vA="app-check-internal",EA="messaging-internal";function TA(t,e){let n=(r,{instanceIdentifier:s})=>{let i=r.getProvider("app").getImmediate(),o=r.getProvider(IA),a=r.getProvider(EA),c=r.getProvider(vA);return new Jl(i,o,a,c,s,t)};xe(new pe(Xl,n,"PUBLIC").setMultipleInstances(!0)),ue(sg,ig,e),ue(sg,ig,"esm2017")}function ag(t=bt(),e=Yl){let r=ft(L(t),Xl).getImmediate({identifier:e}),s=gn("functions");return s&&AA(r,...s),r}function AA(t,e,n){pA(L(t),e,n)}function Vt(t,e,n){return gA(L(t),e,n)}TA(fetch.bind(self));var bA={apiKey:"AIzaSyCuzMDALA6IDegRI8-suNTEgm1ZJLwDHhI",authDomain:"performance-food-1566579119507.firebaseapp.com",databaseURL:"https://performance-food-1566579119507.firebaseio.com",projectId:"performance-food-1566579119507",storageBucket:"performance-food-1566579119507.appspot.com",messagingSenderId:"386651551755",appId:"1:386651551755:web:b127ed813e78bf80112f0e",measurementId:"G-P0HSJ7KDYL"},Zl=oa(bA),lt=Ba(Zl),Zn=$p(Zl),Mt=ag(Zl);var cg,eh,B=()=>new Promise((t,e)=>{Ma(lt,n=>{n?(cg=n,eh=n.uid,t(cg)):(localStorage.removeItem("user"),localStorage.removeItem("userData"),window.location.pathname.startsWith("/members/")&&window.location.pathname!=="/login"&&(window.location.href="/login"),console.log("User is not logged in"))},n=>{e(n)})}),Ut=async t=>{try{let e=await B();if(e){let r=(await e.getIdTokenResult()).claims;if(r.userType&&r.userType.includes(t))return{success:!0,user:e}}return{success:!1,message:"User is not authenticated"}}catch(e){return{success:!1,message:e.message}}},er=async t=>{try{let e=Oo(Zn,"users",t),n=await ut(e);if(n.exists()){let r=n.data();if("organizationId"in r){let s=Oo(Zn,"organizations",r.organizationId),i=await ut(s);return i.exists()?{success:!0,organizationDoc:i}:{success:!1,message:"Organization document not found."}}return{success:!1,message:"organizationId not found in user document."}}return{success:!1,message:"User document not found."}}catch(e){return{success:!1,message:e.message}}},th=async t=>{try{let e=It(t),n=await ut(e);return n.exists()?{success:!0,userDocument:n}:{success:!1,message:"Couldn't find the users document"}}catch(e){return{success:!1,message:e.message}}};var ug=async t=>{try{let e=await th(t);return e.success?{success:!0,courses:e.userDocument.data().courses||[],userDocRef:e.userDocument.ref}:{success:!1,message:"There is no courses array"}}catch(e){return{success:!1,message:e.message}}},Se=t=>{try{let e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(e){return console.error(`Error fetching from localStorage (${t}):`,e),null}},Ie=(t,e)=>{try{localStorage.setItem(t,JSON.stringify(e))}catch(n){console.error(`Error setting to localStorage (${t}):`,n)}},nh=async()=>{let t=await getIdTokenResult();return t?t.claims&&t.claims.admin===!0:(b("You don't have the appropriate permissions to perform this action."),!1)},rh=async()=>{let t=await getIdTokenResult();return t?t.claims&&t.claims.nonadmin===!0:(b("You don't have the appropriate permissions to perform this action."),!1)},It=()=>eh?Oo(Zn,"users",eh):(b("Couldn't get the user document."),null);var Ue=()=>JSON.parse(localStorage.getItem("userData"));var lg=async t=>{try{let e=await B();if(e){let n=sf(),r=rf(n,`profile-pictures/${e.uid}`),[s]=await Promise.all([tf(r,t),nf(r),yr(e,{photoURL:s})]);return{success:!0,message:"Profile pic added successfully"}}return{success:!1,message:"User is not authenticated"}}catch(e){return e.code==="storage/unauthorized"?{success:!1,message:"User does not have permission to upload a profile pic"}:{success:!1,message:e.message}}};var hg=async()=>{let t=await B();if(t){let e=Ue();return e?{success:!0,data:e,user:t}:{success:!1,message:"Couldn't find the users data"}}return{success:!1,message:"No user found"}};var dg=async t=>{try{let e=await B();if(e){let n=e.email,r=t.value;if(r!==n){await La(e,r);let i=It().data();return await be(e.uid,{...i,email:r}),{success:!0,message:"Email updated successfully"}}}return{success:!1,message:"User is not authenticated"}}catch(e){return{success:!1,message:e.message}}};var fg=async(t,e)=>{try{let n=await B();if(n){let r=t.value,s=e.value,i=gt.credential(n.email,r);return await Na(n,i),await Va(n,s),{success:!0,message:"Password updated successfully"}}return{success:!1,message:"User is not authenticated"}}catch(n){return{success:!1,message:n.message}}};var mg=async(t,e,n)=>{try{let r=await B();if(r){let s=It();return await tg(Zn,async i=>{let o=await i.get(s);if(!o.exists())return{success:!1,error:"User's document not found in Firestore"};let a=o.data(),c=t?t.value:"",u=e?e.value:"",l=n?n.value:"",h={firstName:c,lastName:u,phone:l};i.update(s,{...a,...h}),await yr(r,{displayName:`${c} ${u}`,phoneNumber:l}),localStorage.setItem("userData",JSON.stringify({...a,...h}))}),{success:!0,message:"Profile updated successfully"}}return{success:!1,message:"User is not authenticated"}}catch(r){return{success:!1,message:r.message}}};var pg=()=>{let t=document.querySelector('[data-pfc-action="upload-profile-image"]');if(t){let e=t.nextElementSibling;e&&(t.addEventListener("click",()=>{e.click()}),e.addEventListener("change",async n=>{let r=n.target.files[0];try{re(t);let s=await lg(r);s.success?(k(t),se(s.message)):(k(t),b(s.message))}catch(s){k(t),b(s.message)}}))}},gg=async()=>{let t=ne("profile");if(t){let e=t.querySelector('[data-pfc-member="firstName"]'),n=t.querySelector('[data-pfc-member="lastName"]'),r=t.querySelector('[data-pfc-member="phone"]'),s=document.querySelector('[data-pfc-member="userType"]'),i=document.querySelectorAll('[data-pfc-member="email"]'),o=document.querySelector('[data-pfc-member="profile-image"]');try{let a=await hg(),c=a.data,u=a.user.photoURL||"";a.success?(e&&(e.value=c.firstName),n&&(n.value=c.lastName),r&&(r.value=c.phone?c.phone:""),s?s.textContent=Uo(c.userType):s.textContent="User does not have a role.",i.length&&i.forEach(l=>{l instanceof HTMLInputElement?l.value=c.email:l.textContent=c.email}),o?o.src=u:o.src=""):b(a.message)}catch(a){b(a.message)}}},_g=()=>{let t=ne("profile");if(t){let e=t.querySelector('[data-pfc-member="firstName"]'),n=t.querySelector('[data-pfc-member="lastName"]'),r=t.querySelector('[data-pfc-member="phone"]'),s=t.querySelector('[type="submit"]');t.addEventListener("submit",async i=>{i.preventDefault();try{re(s);let o=await mg(e,n,r);o.success?(k(s),se(o.message)):(k(s),b(o.message))}catch(o){k(s),b(o.message)}})}},yg=()=>{let t=ne("update-email");if(t){let e=t.querySelector('[data-pfc-member="email"]'),n=t.querySelector('[type="submit"]');t.addEventListener("submit",async r=>{r.preventDefault();try{re(n);let s=await dg(e);s.success?(k(n),se(s.message)):(k(n),b(s.message))}catch(s){k(n),b(s.message)}})}},wg=()=>{let t=ne("update-password");if(t){let e=t.querySelector('[data-pfc-member="currentPassword"]'),n=t.querySelector('[data-pfc-member="newPassword"]'),r=t.querySelector('[type="submit"]');t.addEventListener("submit",async s=>{s.preventDefault();try{re(r);let i=await fg(e,n);i.success?(k(r),se(i.message)):(k(r),b(i.message))}catch(i){k(r),b(i.message)}})}},Ig=()=>{let t=document.querySelector("[data-pfc-action='change-email']");t&&t.addEventListener("click",()=>{vt("change-email")})},vg=()=>{let t=document.querySelector("[data-pfc-action='update-password']");t&&t.addEventListener("click",()=>{vt("update-password")})};var Eg=async(t,e,n,r,s,i)=>{try{let{success:o,user:a}=await Ut("management");if(o)try{let c=Vt(Mt,"createOrgUser"),u={firstName:t,lastName:e,email:n,phone:r,password:s,userType:i},l=await c(u);if(l.data.success){let{success:h,organizationDoc:d}=await er(a.uid);if(h){let g=(d.data().version||0)+1;await be(d.ref,{version:g}),Ie("organizationVersion",g.toString());let I=await Se("organizationUsers");return I&&(I.push(l.data.userData),Ie("organizationUsers",I)),{success:!0,userData:u,message:l.data.message}}return{success:!1,message:"Failed to get organization document."}}return{success:!1,message:l.data.message}}catch{return{success:!1,message:"Couldn't successfully call the create org user function"}}return{success:!1,message:"User is not authenticated"}}catch(o){return{success:!1,message:o.message}}};var Tg=async t=>{try{let{success:e,user:n}=await Ut("management");if(e)try{let i=await Vt(Mt,"deleteOrgUser")({userId:t});if(i.data.success){let{success:o,organizationDoc:a}=await er(n.uid);if(o){let u=(a.data().version||0)+1;await be(a.ref,{version:u}),Ie("organizationVersion",u.toString());let h=(await Se("organizationUsers")||[]).filter(d=>d.id!==t);return Ie("organizationUsers",h),{success:!0,message:i.data.message}}}return{success:!1,message:i.data.message}}catch{return{success:!1,message:"Couldn't successfully call the delete org user function"}}}catch(e){return{success:!1,message:e.message}}};var Ag=async()=>{try{let{success:t,user:e}=await Ut("management");if(t){let{success:n,organizationDoc:r}=await er(e.uid);if(n){if("users"in r.data()){let s=r.data().users||[],{version:i}=r.data(),o=await Se("organizationUsers"),a=parseInt(Se("organizationVersion"),10);if(!a||a!==i){let c=[];for(let u of s){let l=await ut(u);if(l.exists()){let h=l.data();if(l.id!==e.uid){let d={id:l.id,...h};c.push(d)}}}return Ie("organizationUsers",c),Ie("organizationVersion",i),{success:!0,usersData:c}}return{success:!0,usersData:o}}return{success:!1,message:"'users' field not found in organization document."}}}}catch(t){return{success:!1,message:`Error loading users: ${t.message}`}}};var bg=async(t,e,n,r,s,i)=>{try{let{success:o}=await Ut("management");if(o)try{let a=Vt(Mt,"updateOrgUser"),c={userId:t,firstName:e,lastName:n,email:r,phone:s,userType:i},u=await a(c);return u.data.success?{success:!0,userData:c,message:u.data.message}:{success:!1,message:u.data.message}}catch{return{success:!1,message:"Couldn't successfully call the update org user function"}}}catch(o){return{success:!1,message:o.message}}};var Sg=()=>{let t=ne("create-user"),e=document.querySelector("[data-pfc-item='users-list']");if(t&&e){let n=t.querySelector('[data-pfc-member="firstName"]'),r=t.querySelector('[data-pfc-member="lastName"]'),s=t.querySelector('[data-pfc-member="email"]'),i=t.querySelector('[data-pfc-member="phone"]'),o=t.querySelector('[data-pfc-member="password"]'),a=t.querySelector('[data-pfc-member="userType"]'),c=t.querySelector('[type="submit"]'),u=t.querySelector("[data-pfc-action='reset-form']"),l=document.querySelector("[data-pfc-action='create-user']:is(button)"),h=e.firstElementChild,d=h.firstElementChild;t.addEventListener("submit",async f=>{f.preventDefault();try{re(c);let g=await Eg(n.value,r.value,s.value,i.value,o.value,a.value);g.success?(rr("create-user"),Ss(g.userData,h,d),k(c),se(g.message),t.reset()):(k(c),b(g.message))}catch(g){k(c),b(`Error creating user: ${g.message}`)}}),l.addEventListener("click",()=>{vt("create-user")}),u.addEventListener("click",()=>{t.reset()})}},Rg=()=>{let t=ne("update-user"),e=document.querySelector("[data-pfc-item='users-list']");if(t&&e){let n=t.querySelector('[data-pfc-member="firstName"]'),r=t.querySelector('[data-pfc-member="lastName"]'),s=t.querySelector('[data-pfc-member="email"]'),i=t.querySelector('[data-pfc-member="phone"]'),o=t.querySelector('[data-pfc-member="userType"]'),a=t.querySelector('[data-pfc-member="id"]'),c=t.querySelector('[type="submit"]'),u=e.firstElementChild,l=u.firstElementChild;t.addEventListener("submit",async h=>{h.preventDefault();try{re(c);let d=await bg(a.value,n.value,r.value,s.value,i.value,o.value);d.success?(rr("update-user"),mh(d.userData,u,l),k(c),se(d.message)):(k(c),b(d.message))}catch(d){k(c),b(d.message)}})}},Pg=()=>{let t=ne("delete-user"),e=document.querySelector("[data-pfc-item='users-list']");if(t&&e){let n=t.querySelector('[data-pfc-member="id"]'),r=t.querySelector('[type="submit"]');t.addEventListener("submit",async s=>{s.preventDefault();try{re(r);let i=await Tg(n.value);i.success?(rr("delete-user"),e.querySelector(`[data-id='${n.value}']`).remove(),k(r),se("User successfully deleted")):b(i.message)}catch(i){k(r),b(`Error deleting user: ${i}`)}})}},Cg=async()=>{let t=document.querySelector("[data-pfc-item='users-list']");if(t){let e=t.firstElementChild,n=e.firstElementChild,s=e.nextElementSibling.nextElementSibling;try{let i=await Ag();if(i.success){let{usersData:o}=i;o.length&&(e.innerHTML="",o.forEach(a=>{Ss(a,e,n)}),e.style.display="block",s.style.display="none")}else b(`Error loading users: ${i.message}`)}catch(i){b("Error loading users:",i)}}};var kg=()=>{let t=document.querySelector("[data-group='tag-category']"),e=document.querySelector("[data-group='tags']");if(t&&e){let i=function(o,a){return o.filter(c=>c.getAttribute("data-category")===a)};var n=i;let r=Array.from(t.querySelectorAll(".w-dyn-item")),s=Array.from(e.querySelectorAll(".w-dyn-item"));r.forEach(o=>{let a=o.getAttribute("data-category"),c=i(s,a),u=document.createElement("div");u.classList.add("w-dyn-list","jetboost-filter-5813");let l=document.createElement("div");l.classList.add("w-dyn-items"),u.appendChild(l),o.append(u);let h=c.map(d=>d.cloneNode(!0));l.append(...h)}),e.remove()}};var Dg=async()=>{try{if(await B()){let e=Ue(),n=e.savedItems||[];return n.length?(window.fsAttributes=window.fsAttributes||[],window.fsAttributes.push(["cmsload",r=>{let[s]=r;return e&&(s.list.innerHTML="",s.items.forEach(i=>{let o=i.element.getAttribute("data-id");n.some(a=>a.id===o)&&s.list.appendChild(i.element)})),{success:!1,message:"Couldn't retrieve the user data"}}]),{success:!0,message:"Successfully rendered saved items"}):{empty:!0}}return{success:!1,message:"User is not authenticated"}}catch(t){return{success:!1,message:t.message}}};var tr=()=>{let t=Ue();if(t){let{savedItems:e}=t;t&&e.length&&document.querySelectorAll("[data-save-count]").forEach(r=>{r.textContent=e.length})}};var Ng=async t=>{try{if(await B()){let n=It(),r=await ut(n);if(r.exists()){if(!(r.data().savedItems||[]).find(i=>i.id===t)){await be(n,{savedItems:ng({id:t})});let i=Ue()||{savedItems:[]},o=[...i.savedItems||[],{id:t}];return localStorage.setItem("userData",JSON.stringify({...i,savedItems:o})),tr(),{success:!0,message:"Item saved successfully"}}return{success:!1,message:"Item is already saved"}}return{success:!1,message:"Couldn't find the users document"}}return{success:!1,message:"User is not authenticated"}}catch(e){return{success:!1,message:e.message}}};var xg=async t=>{try{if(await B()){let n=It(),r=await ut(n);if(r.exists()){let s=r.data().savedItems||[],i=s.findIndex(o=>o.id===t);if(i!==-1){s.splice(i,1),await be(n,{savedItems:s});let o=Ue()||{savedItems:[]},a=o.savedItems.filter(c=>c.id!==t);return localStorage.setItem("userData",JSON.stringify({...o,savedItems:a})),tr(),{success:!0,message:"Item unsaved successfully"}}return{success:!1,message:"This item is already unsaved"}}return{success:!1,message:"Couldn't find the users document"}}return{success:!1,message:"User is not authenticated"}}catch(e){return{success:!1,message:e.message}}};var Og=()=>{document.addEventListener("click",async t=>{let e=t.target;if(e.hasAttribute("data-save")){let r=e.closest(".w-dyn-item").getAttribute("data-id"),s=e.nextElementSibling.nextElementSibling,i=e.nextElementSibling;try{e.style.display="none",s.style.display="block";let o=await Ng(r);o.success?(i.style.display="block",s.style.display="none",se(o.message)):(e.style.display="block",s.style.display="none",b(o.message))}catch(o){e.style.display="block",s.style.display="none",b(o.message)}}})},Lg=()=>{document.addEventListener("click",async t=>{let e=t.target;if(e.hasAttribute("data-unsave")){let n=e.closest(".w-dyn-item"),r=n.getAttribute("data-id"),s=e.nextElementSibling,i=e.previousElementSibling;try{e.style.display="none",s.style.display="block";let o=await xg(r);if(o.success){i.style.display="block",s.style.display="none";let a=n.closest("[data-pfc-item='favorites']");if(a&&(n.remove(),!a.querySelectorAll(".w-dyn-item").length)){let c=a.firstElementChild.nextElementSibling;c.style.display="block"}se(o.message)}else e.style.display="block",s.style.display="none",b(o.message)}catch(o){e.style.display="block",s.style.display="none",b(o.message)}}})},Vg=async()=>{let t=document.querySelector("[data-pfc-item='favorites']");if(t){let e=t.firstElementChild,n=e.nextElementSibling,r=n.nextElementSibling;try{let s=await Dg();if(s.empty){setTimeout(()=>{n.style.display="block",r.style.display="none"},500);return}s.success?setTimeout(()=>{e.style.display="block",r.style.display="none"},500):b(s.message)}catch(s){b(s.message)}}};var Mg=()=>{let t=Ue();if(t){let{savedItems:r}=t;if(r){let s=function(c){return r.some(u=>u.id===c)},i=function(c){c.forEach(u=>{let l=u.dataset.id;l&&s(l)&&(u.querySelector("[data-unsave]").style.display="block",u.querySelector("[data-save]").style.display="none")})};var e=s,n=i;let o=document.querySelectorAll("[data-items] [data-id]");i(o);let a=document.querySelector("[data-items]");if(a){let c={childList:!0,subtree:!0};new MutationObserver(l=>{l.forEach(h=>{h.addedNodes.length>0&&i(h.addedNodes)})}).observe(a,c)}}}};var sh=async(t,e)=>{try{let n=await Oa(lt,t.value,e.value),r=n.user.uid,s=await th(r);if(s.success)return Ie("user",n.user),Ie("userData",s.userDocument.data()),{success:!0}}catch(n){return{success:!1,message:n.message}}},ih=()=>{let t=document.querySelector('[data-pfc-member="password"]'),e=document.querySelector("[data-toggle-password]");if(t&&e){let n=e.children[0],r=e.children[1];e.addEventListener("click",()=>{t.type=t.type==="password"?"text":"password",t.type==="password"?(n.style.display="block",r.style.display="none"):(n.style.display="none",r.style.display="block")})}};var oh=async()=>{try{await B()&&(await Ua(lt),localStorage.clear(),window.location.href="/?logout=true")}catch(t){return{success:!1,message:t.message}}},ah=()=>{let t=new URLSearchParams(window.location.search);t.get("logout")==="true"&&(se("You've been successfully logged out."),setTimeout(()=>{t.delete("logout");let n=new URL(window.location.href);n.search=t.toString(),window.history.replaceState({},document.title,n.href)},5400))};var ch=()=>{let t=ne("forgot-password");if(t){let e=t.querySelector('[data-pfc-member="email"]'),n=t.querySelector('[type="submit"]');t.addEventListener("submit",async r=>{r.preventDefault(),re(n);try{let s=await xa(lt,e.value);s.success?(k(n),e.value="",se(s.message)):(k(n),b(s.message))}catch(s){k(n),b(s.message)}})}};var uh=()=>{let t=ne("reset-password");if(t){let e=t.querySelector('[data-pfc-member="password"]'),n=t.querySelector('[type="submit"]');t.addEventListener("submit",async r=>{r.preventDefault(),re(n);try{let s=new URLSearchParams(window.location.search).get("oobCode");s?(await lt.auth().confirmPasswordReset(s,e.value),se({message:"Password reset successful!"})):console.error("Invalid or missing action code")}catch(s){console.error(s),k(n),b(t,s)}})}};var lh=async()=>{let t=B();document.querySelectorAll("[data-pfc-content]").forEach(n=>{let r=n.getAttribute("data-pfc-content");t&&r==="members"||!t&&r==="!members"?n.style.display="block":n.remove()})};var Ug=async()=>{let t=ne("login");if(t){let e=t.querySelector('[data-pfc-member="email"]'),n=t.querySelector('[data-pfc-member="password"]'),r=t.querySelector('[type="submit"]');t.addEventListener("submit",async s=>{s.preventDefault();try{re(r);let i=await sh(e,n,r);i.success?window.location.href="/members/home":(k(r),b(i.message))}catch(i){k(r),b(i.message)}})}},Fg=async()=>{let t=document.querySelector('[data-pfc-action="logout"]');t&&t.addEventListener("click",async e=>{e.preventDefault();try{re(t),await oh()}catch{b("Couldn't log the user out")}})};var qg=async()=>{let t=document.querySelectorAll("[data-shopify-link]");t.length&&t.forEach(e=>{e.addEventListener("click",async n=>{n.preventDefault();try{re(e);let r=await B();if(r){SA();let{email:s}=r;if((nh||rh)&&s.endsWith("@chuzefitness.com"))window.open("https://portal.pfcorders.com","_blank");else if(nh&&!s.endsWith("@chuzefitness.com")){let o=await Vt(Mt,"connectToShopify")();if(o){let a=o.data;window.open(a,"_blank"),k(e)}else k(e),b("There was an error connecting to PFC Orders")}else rh&&!s.endsWith("@chuzefitness.com")&&(window.open("https://pfcorders.com","_blank"),k(e))}else k(e),b("The user isn't authenticated")}catch(r){k(e),b(r.message)}})})},SA=async()=>{try{let t=await fetch("https://ipapi.co/8.8.8.8/country/");if(!t.ok)throw new Error("Network response was not ok");(await t.text()).trim()==="CA"&&storeLinks.length&&setAllStoreLinks("https://form.jotform.com/82984034126155")}catch(t){console.error("Error fetching data:",t)}};var Ge=Array.from(document.querySelectorAll("[data-element='lesson']")),Ft=Array.from(document.querySelectorAll("[data-course]")),Is=document.querySelectorAll("[data-element='module']"),qt=document.querySelector("[data-element='lesson-button']")||null,Ne=document.body.getAttribute("data-current-lesson")||null,$e=document.body.getAttribute("data-current-course")||null,ht=document.querySelector("[data-aside='button']"),vs=document.querySelector("[data-aside='title']"),Es=document.querySelector("[data-aside='tag']");var me={totalCompletedLessons:0,firstIncompleteLesson:null};var Bg=()=>{let t=document.body.getAttribute("data-page"),e=window.location.href;if(ht&&vs&&Es){let n=!1;for(let r of Ge)r.classList.contains("is-complete")?n=!0:!me.firstIncompleteLesson&&r.querySelector("a").href!==e&&(me.firstIncompleteLesson=r);t==="course"?n?me.firstIncompleteLesson&&(Es.textContent="Continue course:",vs.textContent=me.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent,ht.href=me.firstIncompleteLesson.querySelector("a").href,ht.textContent="Go to Lesson"):(Es.textContent="Start course:",vs.textContent=me.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent,ht.href=me.firstIncompleteLesson.querySelector("a").href):t==="lesson"&&(Es.textContent="Next lesson:",vs.textContent=me.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent,ht.href=me.firstIncompleteLesson.querySelector("a").href,ht.textContent="Next Lesson")}};var zg=t=>window.getComputedStyle(t).display==="flex"?"none":"flex",pn=()=>{let t=document.querySelectorAll(`[data-lesson='${Ne}']`);t.length&&t.forEach(e=>{let n=e.querySelector("[data-element='loader']");n&&(n.style.display=zg(n),n.previousElementSibling.style.display=zg(n))})},Vo=(t,e)=>{let n=document.querySelector(`[data-course='${t}'] [data-element='progress-bar']`);n&&(n.style.width=`${e}%`)},Mo=(t,e)=>{let n=document.querySelector(`[data-course='${t}'] [data-element='progress-percentage']`);n&&(n.textContent=`${Math.round(e)}%`)};var jg=()=>{if(Ft&&Ft.length){let t=Se("userData");t&&Ft.forEach(e=>{let n=e.getAttribute("data-course"),r=e.getAttribute("data-lesson-count"),s=t?.courses?.find(i=>i.id===n);if(s){let o=(s.completedLessons||[]).length/r*100;Vo(n,o),Mo(n,o)}})}};var hh=t=>{if(Ft&&Ft.length&&Ft.find(n=>n.dataset.course===$e)){let n;t==="add"?(me.totalCompletedLessons+=1,n=me.totalCompletedLessons):t==="remove"&&(me.totalCompletedLessons-=1,n=me.totalCompletedLessons);let r=Ge.length,s=n/r*100;Vo($e,s),Mo($e,s)}};var Ts=(t,e)=>{t.firstChild.textContent=e==="add"?"Mark as Incomplete":"Mark as Complete",e==="add"?t.classList.add("is-complete"):t.classList.remove("is-complete")};var Gg=()=>{let t=Se("userData");if(!t||!t.courses)return{success:!1,message:"No course data found for the user."};let e=t.courses.find(n=>n.id===$e);if(e){let{completedLessons:n}=e;Ge.forEach(r=>{let s=r.getAttribute("data-lesson");n.some(i=>i.id===s)&&(r.classList.add("is-complete"),me.totalCompletedLessons++,Ne&&s===Ne&&Ts(qt,"add"))})}};var dh=t=>{let e=Ge.find(n=>n.dataset.lesson===Ne);e&&(t==="add"?e.classList.add("is-complete"):t==="remove"&&e.classList.remove("is-complete"))};var fh=async t=>{try{let e=await B();if(e){let n=e.uid,r=await ug(n);if(r.success){let o=r.courses,{userDocRef:a}=r,c=o.find(f=>f.id===$e)||{},u=c.completedLessons||[],l=u;t==="add"&&!u.some(f=>f.id===Ne)?l=[...u,{id:Ne}]:t==="remove"&&u.some(f=>f.id===Ne)&&(l=u.filter(f=>f.id!==Ne)),c={id:$e,completedLessons:l};let h=o.findIndex(f=>f.id===$e),d=Se("userData");if(h!==-1){await be(a,{courses:o.map((g,I)=>I===h?c:g)});let f={...d,courses:o.map((g,I)=>I===h?c:g)};Ie("userData",f)}else{await be(a,{courses:[...o,c]});let f={...d,courses:[...o,c]};Ie("userData",f)}return{success:!0,message:"This is a test message"}}let s=[{id:$e,completedLessons:[{id:Ne}]}];await be(userDocRef,{courses:s});let i=Se("userData");if(i){let o={...i,courses:s};Ie("userData",o)}return{success:!0,message:"This is a test message"}}return{success:!1,message:"Couldn't get the user's courses"}}catch(e){return{success:!1,message:e.message}}};var $g=()=>{Is&&Ge&&Is.forEach(t=>{let e=t.getAttribute("data-module");Ge.filter(r=>r.getAttribute("data-module")===e).forEach(r=>{t.querySelector("[data-element='lessons']").append(r)})})},Kg=()=>{Is&&Is.forEach(t=>{let e=t.firstElementChild,n=e.firstElementChild,r=e.querySelectorAll("a");ht&&r.forEach(s=>{if(s.classList.contains("w--current")||s.href===ht.href){e.classList.add("is-active");return}}),n.addEventListener("click",()=>{e.classList.toggle("is-active")})})};var Hg=()=>{jg()},Wg=()=>{Gg()},Qg=()=>{$g()},Yg=()=>{Kg()},Jg=()=>{Bg()},Xg=()=>{qt&&qt.addEventListener("click",async()=>{try{pn();let t;qt.classList.contains("is-complete")?(t=await fh("remove"),t.success?(pn(),Ts(qt,"remove"),hh("remove"),dh("remove")):(pn(),b(t.message))):(t=await fh("add"),t.success?(pn(),Ts(qt,"add"),hh("add"),dh("add")):(pn(),b(t.message)))}catch(t){pn(),b(t.message)}})};Ug();ih();Fg();ah();lh();ch();uh();kg();Hg();Qg();Yg();Wg();Jg();Xg();qg();Vg();Mg();tr();Og();Lg();gg();_g();pg();yg();wg();Ig();vg();Cg();Sg();Rg();Pg();})();
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
*/
