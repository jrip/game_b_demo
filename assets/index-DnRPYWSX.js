(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var Uo={exports:{}},ti={},Ko={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function Lp(){if(vc)return ie;vc=1;var s=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),k=Symbol.iterator;function E(v){return v===null||typeof v!="object"?null:(v=k&&v[k]||v["@@iterator"],typeof v=="function"?v:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,N={};function O(v,I,re){this.props=v,this.context=I,this.refs=N,this.updater=re||T}O.prototype.isReactComponent={},O.prototype.setState=function(v,I){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,I,"setState")},O.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function $(){}$.prototype=O.prototype;function V(v,I,re){this.props=v,this.context=I,this.refs=N,this.updater=re||T}var q=V.prototype=new $;q.constructor=V,j(q,O.prototype),q.isPureReactComponent=!0;var W=Array.isArray,Y=Object.prototype.hasOwnProperty,ee={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function U(v,I,re){var se,ae={},ue=null,he=null;if(I!=null)for(se in I.ref!==void 0&&(he=I.ref),I.key!==void 0&&(ue=""+I.key),I)Y.call(I,se)&&!G.hasOwnProperty(se)&&(ae[se]=I[se]);var ce=arguments.length-2;if(ce===1)ae.children=re;else if(1<ce){for(var ve=Array(ce),rn=0;rn<ce;rn++)ve[rn]=arguments[rn+2];ae.children=ve}if(v&&v.defaultProps)for(se in ce=v.defaultProps,ce)ae[se]===void 0&&(ae[se]=ce[se]);return{$$typeof:s,type:v,key:ue,ref:he,props:ae,_owner:ee.current}}function le(v,I){return{$$typeof:s,type:v.type,key:I,ref:v.ref,props:v.props,_owner:v._owner}}function me(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function Re(v){var I={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(re){return I[re]})}var Ne=/\/+/g;function ye(v,I){return typeof v=="object"&&v!==null&&v.key!=null?Re(""+v.key):I.toString(36)}function Ye(v,I,re,se,ae){var ue=typeof v;(ue==="undefined"||ue==="boolean")&&(v=null);var he=!1;if(v===null)he=!0;else switch(ue){case"string":case"number":he=!0;break;case"object":switch(v.$$typeof){case s:case r:he=!0}}if(he)return he=v,ae=ae(he),v=se===""?"."+ye(he,0):se,W(ae)?(re="",v!=null&&(re=v.replace(Ne,"$&/")+"/"),Ye(ae,I,re,"",function(rn){return rn})):ae!=null&&(me(ae)&&(ae=le(ae,re+(!ae.key||he&&he.key===ae.key?"":(""+ae.key).replace(Ne,"$&/")+"/")+v)),I.push(ae)),1;if(he=0,se=se===""?".":se+":",W(v))for(var ce=0;ce<v.length;ce++){ue=v[ce];var ve=se+ye(ue,ce);he+=Ye(ue,I,re,ve,ae)}else if(ve=E(v),typeof ve=="function")for(v=ve.call(v),ce=0;!(ue=v.next()).done;)ue=ue.value,ve=se+ye(ue,ce++),he+=Ye(ue,I,re,ve,ae);else if(ue==="object")throw I=String(v),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return he}function Tn(v,I,re){if(v==null)return v;var se=[],ae=0;return Ye(v,se,"","",function(ue){return I.call(re,ue,ae++)}),se}function Ge(v){if(v._status===-1){var I=v._result;I=I(),I.then(function(re){(v._status===0||v._status===-1)&&(v._status=1,v._result=re)},function(re){(v._status===0||v._status===-1)&&(v._status=2,v._result=re)}),v._status===-1&&(v._status=0,v._result=I)}if(v._status===1)return v._result.default;throw v._result}var Ee={current:null},R={transition:null},Z={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:R,ReactCurrentOwner:ee};function F(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Tn,forEach:function(v,I,re){Tn(v,function(){I.apply(this,arguments)},re)},count:function(v){var I=0;return Tn(v,function(){I++}),I},toArray:function(v){return Tn(v,function(I){return I})||[]},only:function(v){if(!me(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ie.Component=O,ie.Fragment=i,ie.Profiler=u,ie.PureComponent=V,ie.StrictMode=o,ie.Suspense=g,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ie.act=F,ie.cloneElement=function(v,I,re){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var se=j({},v.props),ae=v.key,ue=v.ref,he=v._owner;if(I!=null){if(I.ref!==void 0&&(ue=I.ref,he=ee.current),I.key!==void 0&&(ae=""+I.key),v.type&&v.type.defaultProps)var ce=v.type.defaultProps;for(ve in I)Y.call(I,ve)&&!G.hasOwnProperty(ve)&&(se[ve]=I[ve]===void 0&&ce!==void 0?ce[ve]:I[ve])}var ve=arguments.length-2;if(ve===1)se.children=re;else if(1<ve){ce=Array(ve);for(var rn=0;rn<ve;rn++)ce[rn]=arguments[rn+2];se.children=ce}return{$$typeof:s,type:v.type,key:ae,ref:ue,props:se,_owner:he}},ie.createContext=function(v){return v={$$typeof:d,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:f,_context:v},v.Consumer=v},ie.createElement=U,ie.createFactory=function(v){var I=U.bind(null,v);return I.type=v,I},ie.createRef=function(){return{current:null}},ie.forwardRef=function(v){return{$$typeof:p,render:v}},ie.isValidElement=me,ie.lazy=function(v){return{$$typeof:b,_payload:{_status:-1,_result:v},_init:Ge}},ie.memo=function(v,I){return{$$typeof:m,type:v,compare:I===void 0?null:I}},ie.startTransition=function(v){var I=R.transition;R.transition={};try{v()}finally{R.transition=I}},ie.unstable_act=F,ie.useCallback=function(v,I){return Ee.current.useCallback(v,I)},ie.useContext=function(v){return Ee.current.useContext(v)},ie.useDebugValue=function(){},ie.useDeferredValue=function(v){return Ee.current.useDeferredValue(v)},ie.useEffect=function(v,I){return Ee.current.useEffect(v,I)},ie.useId=function(){return Ee.current.useId()},ie.useImperativeHandle=function(v,I,re){return Ee.current.useImperativeHandle(v,I,re)},ie.useInsertionEffect=function(v,I){return Ee.current.useInsertionEffect(v,I)},ie.useLayoutEffect=function(v,I){return Ee.current.useLayoutEffect(v,I)},ie.useMemo=function(v,I){return Ee.current.useMemo(v,I)},ie.useReducer=function(v,I,re){return Ee.current.useReducer(v,I,re)},ie.useRef=function(v){return Ee.current.useRef(v)},ie.useState=function(v){return Ee.current.useState(v)},ie.useSyncExternalStore=function(v,I,re){return Ee.current.useSyncExternalStore(v,I,re)},ie.useTransition=function(){return Ee.current.useTransition()},ie.version="18.3.1",ie}var kc;function aa(){return kc||(kc=1,Ko.exports=Lp()),Ko.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function Ip(){if(xc)return ti;xc=1;var s=aa(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function d(p,g,m){var b,k={},E=null,T=null;m!==void 0&&(E=""+m),g.key!==void 0&&(E=""+g.key),g.ref!==void 0&&(T=g.ref);for(b in g)o.call(g,b)&&!f.hasOwnProperty(b)&&(k[b]=g[b]);if(p&&p.defaultProps)for(b in g=p.defaultProps,g)k[b]===void 0&&(k[b]=g[b]);return{$$typeof:r,type:p,key:E,ref:T,props:k,_owner:u.current}}return ti.Fragment=i,ti.jsx=d,ti.jsxs=d,ti}var Sc;function Pp(){return Sc||(Sc=1,Uo.exports=Ip()),Uo.exports}var M=Pp(),ii=aa(),Es={},Vo={exports:{}},tn={},Wo={exports:{}},Ho={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function zp(){return Nc||(Nc=1,(function(s){function r(R,Z){var F=R.length;R.push(Z);e:for(;0<F;){var v=F-1>>>1,I=R[v];if(0<u(I,Z))R[v]=Z,R[F]=I,F=v;else break e}}function i(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var Z=R[0],F=R.pop();if(F!==Z){R[0]=F;e:for(var v=0,I=R.length,re=I>>>1;v<re;){var se=2*(v+1)-1,ae=R[se],ue=se+1,he=R[ue];if(0>u(ae,F))ue<I&&0>u(he,ae)?(R[v]=he,R[ue]=F,v=ue):(R[v]=ae,R[se]=F,v=se);else if(ue<I&&0>u(he,F))R[v]=he,R[ue]=F,v=ue;else break e}}return Z}function u(R,Z){var F=R.sortIndex-Z.sortIndex;return F!==0?F:R.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var g=[],m=[],b=1,k=null,E=3,T=!1,j=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(R){for(var Z=i(m);Z!==null;){if(Z.callback===null)o(m);else if(Z.startTime<=R)o(m),Z.sortIndex=Z.expirationTime,r(g,Z);else break;Z=i(m)}}function W(R){if(N=!1,q(R),!j)if(i(g)!==null)j=!0,Ge(Y);else{var Z=i(m);Z!==null&&Ee(W,Z.startTime-R)}}function Y(R,Z){j=!1,N&&(N=!1,$(U),U=-1),T=!0;var F=E;try{for(q(Z),k=i(g);k!==null&&(!(k.expirationTime>Z)||R&&!Re());){var v=k.callback;if(typeof v=="function"){k.callback=null,E=k.priorityLevel;var I=v(k.expirationTime<=Z);Z=s.unstable_now(),typeof I=="function"?k.callback=I:k===i(g)&&o(g),q(Z)}else o(g);k=i(g)}if(k!==null)var re=!0;else{var se=i(m);se!==null&&Ee(W,se.startTime-Z),re=!1}return re}finally{k=null,E=F,T=!1}}var ee=!1,G=null,U=-1,le=5,me=-1;function Re(){return!(s.unstable_now()-me<le)}function Ne(){if(G!==null){var R=s.unstable_now();me=R;var Z=!0;try{Z=G(!0,R)}finally{Z?ye():(ee=!1,G=null)}}else ee=!1}var ye;if(typeof V=="function")ye=function(){V(Ne)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Tn=Ye.port2;Ye.port1.onmessage=Ne,ye=function(){Tn.postMessage(null)}}else ye=function(){O(Ne,0)};function Ge(R){G=R,ee||(ee=!0,ye())}function Ee(R,Z){U=O(function(){R(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(R){R.callback=null},s.unstable_continueExecution=function(){j||T||(j=!0,Ge(Y))},s.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<R?Math.floor(1e3/R):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_getFirstCallbackNode=function(){return i(g)},s.unstable_next=function(R){switch(E){case 1:case 2:case 3:var Z=3;break;default:Z=E}var F=E;E=Z;try{return R()}finally{E=F}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(R,Z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=E;E=R;try{return Z()}finally{E=F}},s.unstable_scheduleCallback=function(R,Z,F){var v=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?v+F:v):F=v,R){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=F+I,R={id:b++,callback:Z,priorityLevel:R,startTime:F,expirationTime:I,sortIndex:-1},F>v?(R.sortIndex=F,r(m,R),i(g)===null&&R===i(m)&&(N?($(U),U=-1):N=!0,Ee(W,F-v))):(R.sortIndex=I,r(g,R),j||T||(j=!0,Ge(Y))),R},s.unstable_shouldYield=Re,s.unstable_wrapCallback=function(R){var Z=E;return function(){var F=E;E=Z;try{return R.apply(this,arguments)}finally{E=F}}}})(Ho)),Ho}var Ec;function Ap(){return Ec||(Ec=1,Wo.exports=zp()),Wo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc;function jp(){if(Cc)return tn;Cc=1;var s=aa(),r=Ap();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,u={};function f(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(u[e]=n,e=0;e<n.length;e++)o.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},k={};function E(e){return g.call(k,e)?!0:g.call(b,e)?!1:m.test(e)?k[e]=!0:(b[e]=!0,!1)}function T(e,n,t,l){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,t,l){if(n===null||typeof n>"u"||T(e,n,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function N(e,n,t,l,a,c,h){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=c,this.removeEmptyString=h}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];O[n]=new N(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function V(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($,V);O[n]=new N(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($,V);O[n]=new N(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($,V);O[n]=new N(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,n,t,l){var a=O.hasOwnProperty(n)?O[n]:null;(a!==null?a.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,t,a,l)&&(t=null),l||a===null?E(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,l=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,l?e.setAttributeNS(l,n,t):e.setAttribute(n,t))))}var W=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),ee=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),Re=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),Tn=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),R=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,v;function I(e){if(v===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);v=n&&n[1]||""}return`
`+v+e}var re=!1;function se(e,n){if(!e||re)return"";re=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(C){var l=C}Reflect.construct(e,[],n)}else{try{n.call()}catch(C){l=C}e.call(n.prototype)}else{try{throw Error()}catch(C){l=C}e()}}catch(C){if(C&&l&&typeof C.stack=="string"){for(var a=C.stack.split(`
`),c=l.stack.split(`
`),h=a.length-1,y=c.length-1;1<=h&&0<=y&&a[h]!==c[y];)y--;for(;1<=h&&0<=y;h--,y--)if(a[h]!==c[y]){if(h!==1||y!==1)do if(h--,y--,0>y||a[h]!==c[y]){var w=`
`+a[h].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=h&&0<=y);break}}}finally{re=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?I(e):""}function ae(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case ee:return"Portal";case le:return"Profiler";case U:return"StrictMode";case ye:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Re:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case Ne:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tn:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case Ge:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}function he(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(n);case 8:return n===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rn(e){var n=ve(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,c=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(h){l=""+h,c.call(this,h)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(h){l=""+h},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gi(e){e._valueTracker||(e._valueTracker=rn(e))}function Ea(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=ve(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,n){var t=n.checked;return F({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ca(e,n){var t=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;t=ce(n.value!=null?n.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ba(e,n){n=n.checked,n!=null&&q(e,"checked",n,!1)}function Ys(e,n){ba(e,n);var t=ce(n.value),l=n.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Gs(e,n.type,t):n.hasOwnProperty("defaultValue")&&Gs(e,n.type,ce(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ta(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Gs(e,n,t){(n!=="number"||mi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var yr=Array.isArray;function It(e,n,t,l){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&l&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Js(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return F({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(i(92));if(yr(t)){if(1<t.length)throw Error(i(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ce(t)}}function La(e,n){var t=ce(n.value),l=ce(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function Ia(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,za=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,l,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,l,a)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function wr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ad=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){Ad.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_r[n]=_r[e]})});function Aa(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_r.hasOwnProperty(e)&&_r[e]?(""+n).trim():n+"px"}function ja(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var l=t.indexOf("--")===0,a=Aa(t,n[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,a):e[t]=a}}var jd=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zs(e,n){if(n){if(jd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function el(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function tl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,Pt=null,zt=null;function $a(e){if(e=Fr(e)){if(typeof rl!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Bi(n),rl(e.stateNode,e.type,n))}}function Ma(e){Pt?zt?zt.push(e):zt=[e]:Pt=e}function Ra(){if(Pt){var e=Pt,n=zt;if(zt=Pt=null,$a(e),n)for(e=0;e<n.length;e++)$a(n[e])}}function Da(e,n){return e(n)}function Ba(){}var il=!1;function Fa(e,n,t){if(il)return e(n,t);il=!0;try{return Da(e,n,t)}finally{il=!1,(Pt!==null||zt!==null)&&(Ba(),Ra())}}function vr(e,n){var t=e.stateNode;if(t===null)return null;var l=Bi(t);if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(i(231,n,typeof t));return t}var sl=!1;if(p)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){sl=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{sl=!1}function $d(e,n,t,l,a,c,h,y,w){var C=Array.prototype.slice.call(arguments,3);try{n.apply(t,C)}catch(P){this.onError(P)}}var xr=!1,wi=null,_i=!1,ll=null,Md={onError:function(e){xr=!0,wi=e}};function Rd(e,n,t,l,a,c,h,y,w){xr=!1,wi=null,$d.apply(Md,arguments)}function Dd(e,n,t,l,a,c,h,y,w){if(Rd.apply(this,arguments),xr){if(xr){var C=wi;xr=!1,wi=null}else throw Error(i(198));_i||(_i=!0,ll=C)}}function ht(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ua(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ka(e){if(ht(e)!==e)throw Error(i(188))}function Bd(e){var n=e.alternate;if(!n){if(n=ht(e),n===null)throw Error(i(188));return n!==e?null:e}for(var t=e,l=n;;){var a=t.return;if(a===null)break;var c=a.alternate;if(c===null){if(l=a.return,l!==null){t=l;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===t)return Ka(a),e;if(c===l)return Ka(a),n;c=c.sibling}throw Error(i(188))}if(t.return!==l.return)t=a,l=c;else{for(var h=!1,y=a.child;y;){if(y===t){h=!0,t=a,l=c;break}if(y===l){h=!0,l=a,t=c;break}y=y.sibling}if(!h){for(y=c.child;y;){if(y===t){h=!0,t=c,l=a;break}if(y===l){h=!0,l=c,t=a;break}y=y.sibling}if(!h)throw Error(i(189))}}if(t.alternate!==l)throw Error(i(190))}if(t.tag!==3)throw Error(i(188));return t.stateNode.current===t?e:n}function Va(e){return e=Bd(e),e!==null?Wa(e):null}function Wa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Wa(e);if(n!==null)return n;e=e.sibling}return null}var Ha=r.unstable_scheduleCallback,Qa=r.unstable_cancelCallback,Fd=r.unstable_shouldYield,Ud=r.unstable_requestPaint,be=r.unstable_now,Kd=r.unstable_getCurrentPriorityLevel,ol=r.unstable_ImmediatePriority,qa=r.unstable_UserBlockingPriority,vi=r.unstable_NormalPriority,Vd=r.unstable_LowPriority,Ya=r.unstable_IdlePriority,ki=null,On=null;function Wd(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:qd,Hd=Math.log,Qd=Math.LN2;function qd(e){return e>>>=0,e===0?32:31-(Hd(e)/Qd|0)|0}var xi=64,Si=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ni(e,n){var t=e.pendingLanes;if(t===0)return 0;var l=0,a=e.suspendedLanes,c=e.pingedLanes,h=t&268435455;if(h!==0){var y=h&~a;y!==0?l=Sr(y):(c&=h,c!==0&&(l=Sr(c)))}else h=t&~a,h!==0?l=Sr(h):c!==0&&(l=Sr(c));if(l===0)return 0;if(n!==0&&n!==l&&(n&a)===0&&(a=l&-l,c=n&-n,a>=c||a===16&&(c&4194240)!==0))return n;if((l&4)!==0&&(l|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)t=31-wn(n),a=1<<t,l|=e[t],n&=~a;return l}function Yd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gd(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var h=31-wn(c),y=1<<h,w=a[h];w===-1?((y&t)===0||(y&l)!==0)&&(a[h]=Yd(y,n)):w<=n&&(e.expiredLanes|=y),c&=~y}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ga(){var e=xi;return xi<<=1,(xi&4194240)===0&&(xi=64),e}function ul(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Nr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-wn(n),e[n]=t}function Jd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-wn(t),c=1<<a;n[a]=0,l[a]=-1,e[a]=-1,t&=~c}}function fl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-wn(t),a=1<<l;a&n|e[l]&n&&(e[l]|=n),t&=~a}}var de=0;function Ja(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Xa,cl,Za,eu,nu,dl=!1,Ei=[],Hn=null,Qn=null,qn=null,Er=new Map,Cr=new Map,Yn=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tu(e,n){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(n.pointerId)}}function br(e,n,t,l,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:c,targetContainers:[a]},n!==null&&(n=Fr(n),n!==null&&cl(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Zd(e,n,t,l,a){switch(n){case"focusin":return Hn=br(Hn,e,n,t,l,a),!0;case"dragenter":return Qn=br(Qn,e,n,t,l,a),!0;case"mouseover":return qn=br(qn,e,n,t,l,a),!0;case"pointerover":var c=a.pointerId;return Er.set(c,br(Er.get(c)||null,e,n,t,l,a)),!0;case"gotpointercapture":return c=a.pointerId,Cr.set(c,br(Cr.get(c)||null,e,n,t,l,a)),!0}return!1}function ru(e){var n=pt(e.target);if(n!==null){var t=ht(n);if(t!==null){if(n=t.tag,n===13){if(n=Ua(t),n!==null){e.blockedOn=n,nu(e.priority,function(){Za(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);nl=l,t.target.dispatchEvent(l),nl=null}else return n=Fr(t),n!==null&&cl(n),e.blockedOn=t,!1;n.shift()}return!0}function iu(e,n,t){Ci(e)&&t.delete(n)}function eh(){dl=!1,Hn!==null&&Ci(Hn)&&(Hn=null),Qn!==null&&Ci(Qn)&&(Qn=null),qn!==null&&Ci(qn)&&(qn=null),Er.forEach(iu),Cr.forEach(iu)}function Tr(e,n){e.blockedOn===n&&(e.blockedOn=null,dl||(dl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,eh)))}function Or(e){function n(a){return Tr(a,e)}if(0<Ei.length){Tr(Ei[0],e);for(var t=1;t<Ei.length;t++){var l=Ei[t];l.blockedOn===e&&(l.blockedOn=null)}}for(Hn!==null&&Tr(Hn,e),Qn!==null&&Tr(Qn,e),qn!==null&&Tr(qn,e),Er.forEach(n),Cr.forEach(n),t=0;t<Yn.length;t++)l=Yn[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<Yn.length&&(t=Yn[0],t.blockedOn===null);)ru(t),t.blockedOn===null&&Yn.shift()}var At=W.ReactCurrentBatchConfig,bi=!0;function nh(e,n,t,l){var a=de,c=At.transition;At.transition=null;try{de=1,hl(e,n,t,l)}finally{de=a,At.transition=c}}function th(e,n,t,l){var a=de,c=At.transition;At.transition=null;try{de=4,hl(e,n,t,l)}finally{de=a,At.transition=c}}function hl(e,n,t,l){if(bi){var a=pl(e,n,t,l);if(a===null)Il(e,n,l,Ti,t),tu(e,l);else if(Zd(a,e,n,t,l))l.stopPropagation();else if(tu(e,l),n&4&&-1<Xd.indexOf(e)){for(;a!==null;){var c=Fr(a);if(c!==null&&Xa(c),c=pl(e,n,t,l),c===null&&Il(e,n,l,Ti,t),c===a)break;a=c}a!==null&&l.stopPropagation()}else Il(e,n,l,null,t)}}var Ti=null;function pl(e,n,t,l){if(Ti=null,e=tl(l),e=pt(e),e!==null)if(n=ht(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ua(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ti=e,null}function su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kd()){case ol:return 1;case qa:return 4;case vi:case Vd:return 16;case Ya:return 536870912;default:return 16}default:return 16}}var Gn=null,gl=null,Oi=null;function lu(){if(Oi)return Oi;var e,n=gl,t=n.length,l,a="value"in Gn?Gn.value:Gn.textContent,c=a.length;for(e=0;e<t&&n[e]===a[e];e++);var h=t-e;for(l=1;l<=h&&n[t-l]===a[c-l];l++);return Oi=a.slice(e,1<l?1-l:void 0)}function Li(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function ou(){return!1}function sn(e){function n(t,l,a,c,h){this._reactName=t,this._targetInst=a,this.type=l,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(t=e[y],this[y]=t?t(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ii:ou,this.isPropagationStopped=ou,this}return F(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),n}var jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=sn(jt),Lr=F({},jt,{view:0,detail:0}),rh=sn(Lr),yl,wl,Ir,Pi=F({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(yl=e.screenX-Ir.screenX,wl=e.screenY-Ir.screenY):wl=yl=0,Ir=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),au=sn(Pi),ih=F({},Pi,{dataTransfer:0}),sh=sn(ih),lh=F({},Lr,{relatedTarget:0}),_l=sn(lh),oh=F({},jt,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=sn(oh),uh=F({},jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fh=sn(uh),ch=F({},jt,{data:0}),uu=sn(ch),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ph[e])?!!n[e]:!1}function vl(){return gh}var mh=F({},Lr,{key:function(e){if(e.key){var n=dh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yh=sn(mh),wh=F({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=sn(wh),_h=F({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),vh=sn(_h),kh=F({},jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=sn(kh),Sh=F({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=sn(Sh),Eh=[9,13,27,32],kl=p&&"CompositionEvent"in window,Pr=null;p&&"documentMode"in document&&(Pr=document.documentMode);var Ch=p&&"TextEvent"in window&&!Pr,cu=p&&(!kl||Pr&&8<Pr&&11>=Pr),du=" ",hu=!1;function pu(e,n){switch(e){case"keyup":return Eh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function bh(e,n){switch(e){case"compositionend":return gu(n);case"keypress":return n.which!==32?null:(hu=!0,du);case"textInput":return e=n.data,e===du&&hu?null:e;default:return null}}function Th(e,n){if($t)return e==="compositionend"||!kl&&pu(e,n)?(e=lu(),Oi=gl=Gn=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cu&&n.locale!=="ko"?null:n.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Oh[e.type]:n==="textarea"}function yu(e,n,t,l){Ma(l),n=Mi(n,"onChange"),0<n.length&&(t=new ml("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var zr=null,Ar=null;function Lh(e){ju(e,0)}function zi(e){var n=Ft(e);if(Ea(n))return e}function Ih(e,n){if(e==="change")return n}var wu=!1;if(p){var xl;if(p){var Sl="oninput"in document;if(!Sl){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),Sl=typeof _u.oninput=="function"}xl=Sl}else xl=!1;wu=xl&&(!document.documentMode||9<document.documentMode)}function vu(){zr&&(zr.detachEvent("onpropertychange",ku),Ar=zr=null)}function ku(e){if(e.propertyName==="value"&&zi(Ar)){var n=[];yu(n,Ar,e,tl(e)),Fa(Lh,n)}}function Ph(e,n,t){e==="focusin"?(vu(),zr=n,Ar=t,zr.attachEvent("onpropertychange",ku)):e==="focusout"&&vu()}function zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(Ar)}function Ah(e,n){if(e==="click")return zi(n)}function jh(e,n){if(e==="input"||e==="change")return zi(n)}function $h(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:$h;function jr(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var a=t[l];if(!g.call(n,a)||!_n(e[a],n[a]))return!1}return!0}function xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,n){var t=xu(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xu(t)}}function Nu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Eu(){for(var e=window,n=mi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=mi(e.document)}return n}function Nl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Mh(e){var n=Eu(),t=e.focusedElem,l=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Nu(t.ownerDocument.documentElement,t)){if(l!==null&&Nl(t)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,c=Math.min(l.start,a);l=l.end===void 0?c:Math.min(l.end,a),!e.extend&&c>l&&(a=l,l=c,c=a),a=Su(t,c);var h=Su(t,l);a&&h&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),c>l?(e.addRange(n),e.extend(h.node,h.offset)):(n.setEnd(h.node,h.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rh=p&&"documentMode"in document&&11>=document.documentMode,Mt=null,El=null,$r=null,Cl=!1;function Cu(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Cl||Mt==null||Mt!==mi(l)||(l=Mt,"selectionStart"in l&&Nl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$r&&jr($r,l)||($r=l,l=Mi(El,"onSelect"),0<l.length&&(n=new ml("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=Mt)))}function Ai(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Rt={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},bl={},bu={};p&&(bu=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function ji(e){if(bl[e])return bl[e];if(!Rt[e])return e;var n=Rt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bu)return bl[e]=n[t];return e}var Tu=ji("animationend"),Ou=ji("animationiteration"),Lu=ji("animationstart"),Iu=ji("transitionend"),Pu=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,n){Pu.set(e,n),f(n,[e])}for(var Tl=0;Tl<zu.length;Tl++){var Ol=zu[Tl],Dh=Ol.toLowerCase(),Bh=Ol[0].toUpperCase()+Ol.slice(1);Jn(Dh,"on"+Bh)}Jn(Tu,"onAnimationEnd"),Jn(Ou,"onAnimationIteration"),Jn(Lu,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(Iu,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Au(e,n,t){var l=e.type||"unknown-event";e.currentTarget=t,Dd(l,n,void 0,e),e.currentTarget=null}function ju(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],a=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var h=l.length-1;0<=h;h--){var y=l[h],w=y.instance,C=y.currentTarget;if(y=y.listener,w!==c&&a.isPropagationStopped())break e;Au(a,y,C),c=w}else for(h=0;h<l.length;h++){if(y=l[h],w=y.instance,C=y.currentTarget,y=y.listener,w!==c&&a.isPropagationStopped())break e;Au(a,y,C),c=w}}}if(_i)throw e=ll,_i=!1,ll=null,e}function we(e,n){var t=n[Ml];t===void 0&&(t=n[Ml]=new Set);var l=e+"__bubble";t.has(l)||($u(n,e,2,!1),t.add(l))}function Ll(e,n,t){var l=0;n&&(l|=4),$u(t,e,l,n)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[$i]){e[$i]=!0,o.forEach(function(t){t!=="selectionchange"&&(Fh.has(t)||Ll(t,!1,e),Ll(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$i]||(n[$i]=!0,Ll("selectionchange",!1,n))}}function $u(e,n,t,l){switch(su(n)){case 1:var a=nh;break;case 4:a=th;break;default:a=hl}t=a.bind(null,n,t,e),a=void 0,!sl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Il(e,n,t,l,a){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var y=l.stateNode.containerInfo;if(y===a||y.nodeType===8&&y.parentNode===a)break;if(h===4)for(h=l.return;h!==null;){var w=h.tag;if((w===3||w===4)&&(w=h.stateNode.containerInfo,w===a||w.nodeType===8&&w.parentNode===a))return;h=h.return}for(;y!==null;){if(h=pt(y),h===null)return;if(w=h.tag,w===5||w===6){l=c=h;continue e}y=y.parentNode}}l=l.return}Fa(function(){var C=c,P=tl(t),z=[];e:{var L=Pu.get(e);if(L!==void 0){var D=ml,K=e;switch(e){case"keypress":if(Li(t)===0)break e;case"keydown":case"keyup":D=yh;break;case"focusin":K="focus",D=_l;break;case"focusout":K="blur",D=_l;break;case"beforeblur":case"afterblur":D=_l;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=vh;break;case Tu:case Ou:case Lu:D=ah;break;case Iu:D=xh;break;case"scroll":D=rh;break;case"wheel":D=Nh;break;case"copy":case"cut":case"paste":D=fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=fu}var H=(n&4)!==0,Te=!H&&e==="scroll",x=H?L!==null?L+"Capture":null:L;H=[];for(var _=C,S;_!==null;){S=_;var A=S.stateNode;if(S.tag===5&&A!==null&&(S=A,x!==null&&(A=vr(_,x),A!=null&&H.push(Dr(_,A,S)))),Te)break;_=_.return}0<H.length&&(L=new D(L,K,null,t,P),z.push({event:L,listeners:H}))}}if((n&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",L&&t!==nl&&(K=t.relatedTarget||t.fromElement)&&(pt(K)||K[$n]))break e;if((D||L)&&(L=P.window===P?P:(L=P.ownerDocument)?L.defaultView||L.parentWindow:window,D?(K=t.relatedTarget||t.toElement,D=C,K=K?pt(K):null,K!==null&&(Te=ht(K),K!==Te||K.tag!==5&&K.tag!==6)&&(K=null)):(D=null,K=C),D!==K)){if(H=au,A="onMouseLeave",x="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(H=fu,A="onPointerLeave",x="onPointerEnter",_="pointer"),Te=D==null?L:Ft(D),S=K==null?L:Ft(K),L=new H(A,_+"leave",D,t,P),L.target=Te,L.relatedTarget=S,A=null,pt(P)===C&&(H=new H(x,_+"enter",K,t,P),H.target=S,H.relatedTarget=Te,A=H),Te=A,D&&K)n:{for(H=D,x=K,_=0,S=H;S;S=Dt(S))_++;for(S=0,A=x;A;A=Dt(A))S++;for(;0<_-S;)H=Dt(H),_--;for(;0<S-_;)x=Dt(x),S--;for(;_--;){if(H===x||x!==null&&H===x.alternate)break n;H=Dt(H),x=Dt(x)}H=null}else H=null;D!==null&&Mu(z,L,D,H,!1),K!==null&&Te!==null&&Mu(z,Te,K,H,!0)}}e:{if(L=C?Ft(C):window,D=L.nodeName&&L.nodeName.toLowerCase(),D==="select"||D==="input"&&L.type==="file")var Q=Ih;else if(mu(L))if(wu)Q=jh;else{Q=zh;var J=Ph}else(D=L.nodeName)&&D.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(Q=Ah);if(Q&&(Q=Q(e,C))){yu(z,Q,t,P);break e}J&&J(e,L,C),e==="focusout"&&(J=L._wrapperState)&&J.controlled&&L.type==="number"&&Gs(L,"number",L.value)}switch(J=C?Ft(C):window,e){case"focusin":(mu(J)||J.contentEditable==="true")&&(Mt=J,El=C,$r=null);break;case"focusout":$r=El=Mt=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,Cu(z,t,P);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":Cu(z,t,P)}var X;if(kl)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else $t?pu(e,t)&&(ne="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ne="onCompositionStart");ne&&(cu&&t.locale!=="ko"&&($t||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&$t&&(X=lu()):(Gn=P,gl="value"in Gn?Gn.value:Gn.textContent,$t=!0)),J=Mi(C,ne),0<J.length&&(ne=new uu(ne,e,null,t,P),z.push({event:ne,listeners:J}),X?ne.data=X:(X=gu(t),X!==null&&(ne.data=X)))),(X=Ch?bh(e,t):Th(e,t))&&(C=Mi(C,"onBeforeInput"),0<C.length&&(P=new uu("onBeforeInput","beforeinput",null,t,P),z.push({event:P,listeners:C}),P.data=X))}ju(z,n)})}function Dr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Mi(e,n){for(var t=n+"Capture",l=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=vr(e,t),c!=null&&l.unshift(Dr(e,c,a)),c=vr(e,n),c!=null&&l.push(Dr(e,c,a))),e=e.return}return l}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mu(e,n,t,l,a){for(var c=n._reactName,h=[];t!==null&&t!==l;){var y=t,w=y.alternate,C=y.stateNode;if(w!==null&&w===l)break;y.tag===5&&C!==null&&(y=C,a?(w=vr(t,c),w!=null&&h.unshift(Dr(t,w,y))):a||(w=vr(t,c),w!=null&&h.push(Dr(t,w,y)))),t=t.return}h.length!==0&&e.push({event:n,listeners:h})}var Uh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(Kh,"")}function Ri(e,n,t){if(n=Ru(n),Ru(e)!==n&&t)throw Error(i(425))}function Di(){}var Pl=null,zl=null;function Al(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Vh=typeof clearTimeout=="function"?clearTimeout:void 0,Du=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Du<"u"?function(e){return Du.resolve(null).then(e).catch(Hh)}:jl;function Hh(e){setTimeout(function(){throw e})}function $l(e,n){var t=n,l=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(l===0){e.removeChild(a),Or(n);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=a}while(t);Or(n)}function Xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Bu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Bt=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Bt,Br="__reactProps$"+Bt,$n="__reactContainer$"+Bt,Ml="__reactEvents$"+Bt,Qh="__reactListeners$"+Bt,qh="__reactHandles$"+Bt;function pt(e){var n=e[Ln];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$n]||t[Ln]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Bu(e);e!==null;){if(t=e[Ln])return t;e=Bu(e)}return n}e=t,t=e.parentNode}return null}function Fr(e){return e=e[Ln]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Bi(e){return e[Br]||null}var Rl=[],Ut=-1;function Zn(e){return{current:e}}function _e(e){0>Ut||(e.current=Rl[Ut],Rl[Ut]=null,Ut--)}function pe(e,n){Ut++,Rl[Ut]=e.current,e.current=n}var et={},Fe=Zn(et),Je=Zn(!1),gt=et;function Kt(e,n){var t=e.type.contextTypes;if(!t)return et;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in t)a[c]=n[c];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Xe(e){return e=e.childContextTypes,e!=null}function Fi(){_e(Je),_e(Fe)}function Fu(e,n,t){if(Fe.current!==et)throw Error(i(168));pe(Fe,n),pe(Je,t)}function Uu(e,n,t){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var a in l)if(!(a in n))throw Error(i(108,he(e)||"Unknown",a));return F({},t,l)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||et,gt=Fe.current,pe(Fe,e),pe(Je,Je.current),!0}function Ku(e,n,t){var l=e.stateNode;if(!l)throw Error(i(169));t?(e=Uu(e,n,gt),l.__reactInternalMemoizedMergedChildContext=e,_e(Je),_e(Fe),pe(Fe,e)):_e(Je),pe(Je,t)}var Mn=null,Ki=!1,Dl=!1;function Vu(e){Mn===null?Mn=[e]:Mn.push(e)}function Yh(e){Ki=!0,Vu(e)}function nt(){if(!Dl&&Mn!==null){Dl=!0;var e=0,n=de;try{var t=Mn;for(de=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}Mn=null,Ki=!1}catch(a){throw Mn!==null&&(Mn=Mn.slice(e+1)),Ha(ol,nt),a}finally{de=n,Dl=!1}}return null}var Vt=[],Wt=0,Vi=null,Wi=0,un=[],fn=0,mt=null,Rn=1,Dn="";function yt(e,n){Vt[Wt++]=Wi,Vt[Wt++]=Vi,Vi=e,Wi=n}function Wu(e,n,t){un[fn++]=Rn,un[fn++]=Dn,un[fn++]=mt,mt=e;var l=Rn;e=Dn;var a=32-wn(l)-1;l&=~(1<<a),t+=1;var c=32-wn(n)+a;if(30<c){var h=a-a%5;c=(l&(1<<h)-1).toString(32),l>>=h,a-=h,Rn=1<<32-wn(n)+a|t<<a|l,Dn=c+e}else Rn=1<<c|t<<a|l,Dn=e}function Bl(e){e.return!==null&&(yt(e,1),Wu(e,1,0))}function Fl(e){for(;e===Vi;)Vi=Vt[--Wt],Vt[Wt]=null,Wi=Vt[--Wt],Vt[Wt]=null;for(;e===mt;)mt=un[--fn],un[fn]=null,Dn=un[--fn],un[fn]=null,Rn=un[--fn],un[fn]=null}var ln=null,on=null,ke=!1,vn=null;function Hu(e,n){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Qu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ln=e,on=Xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ln=e,on=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=mt!==null?{id:Rn,overflow:Dn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ln=e,on=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(ke){var n=on;if(n){var t=n;if(!Qu(e,n)){if(Ul(e))throw Error(i(418));n=Xn(t.nextSibling);var l=ln;n&&Qu(e,n)?Hu(l,t):(e.flags=e.flags&-4097|2,ke=!1,ln=e)}}else{if(Ul(e))throw Error(i(418));e.flags=e.flags&-4097|2,ke=!1,ln=e}}}function qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ln=e}function Hi(e){if(e!==ln)return!1;if(!ke)return qu(e),ke=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Al(e.type,e.memoizedProps)),n&&(n=on)){if(Ul(e))throw Yu(),Error(i(418));for(;n;)Hu(e,n),n=Xn(n.nextSibling)}if(qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){on=Xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}on=null}}else on=ln?Xn(e.stateNode.nextSibling):null;return!0}function Yu(){for(var e=on;e;)e=Xn(e.nextSibling)}function Ht(){on=ln=null,ke=!1}function Vl(e){vn===null?vn=[e]:vn.push(e)}var Gh=W.ReactCurrentBatchConfig;function Ur(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(i(309));var l=t.stateNode}if(!l)throw Error(i(147,e));var a=l,c=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===c?n.ref:(n=function(h){var y=a.refs;h===null?delete y[c]:y[c]=h},n._stringRef=c,n)}if(typeof e!="string")throw Error(i(284));if(!t._owner)throw Error(i(290,e))}return e}function Qi(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Gu(e){var n=e._init;return n(e._payload)}function Ju(e){function n(x,_){if(e){var S=x.deletions;S===null?(x.deletions=[_],x.flags|=16):S.push(_)}}function t(x,_){if(!e)return null;for(;_!==null;)n(x,_),_=_.sibling;return null}function l(x,_){for(x=new Map;_!==null;)_.key!==null?x.set(_.key,_):x.set(_.index,_),_=_.sibling;return x}function a(x,_){return x=ut(x,_),x.index=0,x.sibling=null,x}function c(x,_,S){return x.index=S,e?(S=x.alternate,S!==null?(S=S.index,S<_?(x.flags|=2,_):S):(x.flags|=2,_)):(x.flags|=1048576,_)}function h(x){return e&&x.alternate===null&&(x.flags|=2),x}function y(x,_,S,A){return _===null||_.tag!==6?(_=$o(S,x.mode,A),_.return=x,_):(_=a(_,S),_.return=x,_)}function w(x,_,S,A){var Q=S.type;return Q===G?P(x,_,S.props.children,A,S.key):_!==null&&(_.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ge&&Gu(Q)===_.type)?(A=a(_,S.props),A.ref=Ur(x,_,S),A.return=x,A):(A=ys(S.type,S.key,S.props,null,x.mode,A),A.ref=Ur(x,_,S),A.return=x,A)}function C(x,_,S,A){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Mo(S,x.mode,A),_.return=x,_):(_=a(_,S.children||[]),_.return=x,_)}function P(x,_,S,A,Q){return _===null||_.tag!==7?(_=Et(S,x.mode,A,Q),_.return=x,_):(_=a(_,S),_.return=x,_)}function z(x,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=$o(""+_,x.mode,S),_.return=x,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Y:return S=ys(_.type,_.key,_.props,null,x.mode,S),S.ref=Ur(x,null,_),S.return=x,S;case ee:return _=Mo(_,x.mode,S),_.return=x,_;case Ge:var A=_._init;return z(x,A(_._payload),S)}if(yr(_)||Z(_))return _=Et(_,x.mode,S,null),_.return=x,_;Qi(x,_)}return null}function L(x,_,S,A){var Q=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return Q!==null?null:y(x,_,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Y:return S.key===Q?w(x,_,S,A):null;case ee:return S.key===Q?C(x,_,S,A):null;case Ge:return Q=S._init,L(x,_,Q(S._payload),A)}if(yr(S)||Z(S))return Q!==null?null:P(x,_,S,A,null);Qi(x,S)}return null}function D(x,_,S,A,Q){if(typeof A=="string"&&A!==""||typeof A=="number")return x=x.get(S)||null,y(_,x,""+A,Q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Y:return x=x.get(A.key===null?S:A.key)||null,w(_,x,A,Q);case ee:return x=x.get(A.key===null?S:A.key)||null,C(_,x,A,Q);case Ge:var J=A._init;return D(x,_,S,J(A._payload),Q)}if(yr(A)||Z(A))return x=x.get(S)||null,P(_,x,A,Q,null);Qi(_,A)}return null}function K(x,_,S,A){for(var Q=null,J=null,X=_,ne=_=0,Me=null;X!==null&&ne<S.length;ne++){X.index>ne?(Me=X,X=null):Me=X.sibling;var fe=L(x,X,S[ne],A);if(fe===null){X===null&&(X=Me);break}e&&X&&fe.alternate===null&&n(x,X),_=c(fe,_,ne),J===null?Q=fe:J.sibling=fe,J=fe,X=Me}if(ne===S.length)return t(x,X),ke&&yt(x,ne),Q;if(X===null){for(;ne<S.length;ne++)X=z(x,S[ne],A),X!==null&&(_=c(X,_,ne),J===null?Q=X:J.sibling=X,J=X);return ke&&yt(x,ne),Q}for(X=l(x,X);ne<S.length;ne++)Me=D(X,x,ne,S[ne],A),Me!==null&&(e&&Me.alternate!==null&&X.delete(Me.key===null?ne:Me.key),_=c(Me,_,ne),J===null?Q=Me:J.sibling=Me,J=Me);return e&&X.forEach(function(ft){return n(x,ft)}),ke&&yt(x,ne),Q}function H(x,_,S,A){var Q=Z(S);if(typeof Q!="function")throw Error(i(150));if(S=Q.call(S),S==null)throw Error(i(151));for(var J=Q=null,X=_,ne=_=0,Me=null,fe=S.next();X!==null&&!fe.done;ne++,fe=S.next()){X.index>ne?(Me=X,X=null):Me=X.sibling;var ft=L(x,X,fe.value,A);if(ft===null){X===null&&(X=Me);break}e&&X&&ft.alternate===null&&n(x,X),_=c(ft,_,ne),J===null?Q=ft:J.sibling=ft,J=ft,X=Me}if(fe.done)return t(x,X),ke&&yt(x,ne),Q;if(X===null){for(;!fe.done;ne++,fe=S.next())fe=z(x,fe.value,A),fe!==null&&(_=c(fe,_,ne),J===null?Q=fe:J.sibling=fe,J=fe);return ke&&yt(x,ne),Q}for(X=l(x,X);!fe.done;ne++,fe=S.next())fe=D(X,x,ne,fe.value,A),fe!==null&&(e&&fe.alternate!==null&&X.delete(fe.key===null?ne:fe.key),_=c(fe,_,ne),J===null?Q=fe:J.sibling=fe,J=fe);return e&&X.forEach(function(Op){return n(x,Op)}),ke&&yt(x,ne),Q}function Te(x,_,S,A){if(typeof S=="object"&&S!==null&&S.type===G&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Y:e:{for(var Q=S.key,J=_;J!==null;){if(J.key===Q){if(Q=S.type,Q===G){if(J.tag===7){t(x,J.sibling),_=a(J,S.props.children),_.return=x,x=_;break e}}else if(J.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ge&&Gu(Q)===J.type){t(x,J.sibling),_=a(J,S.props),_.ref=Ur(x,J,S),_.return=x,x=_;break e}t(x,J);break}else n(x,J);J=J.sibling}S.type===G?(_=Et(S.props.children,x.mode,A,S.key),_.return=x,x=_):(A=ys(S.type,S.key,S.props,null,x.mode,A),A.ref=Ur(x,_,S),A.return=x,x=A)}return h(x);case ee:e:{for(J=S.key;_!==null;){if(_.key===J)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){t(x,_.sibling),_=a(_,S.children||[]),_.return=x,x=_;break e}else{t(x,_);break}else n(x,_);_=_.sibling}_=Mo(S,x.mode,A),_.return=x,x=_}return h(x);case Ge:return J=S._init,Te(x,_,J(S._payload),A)}if(yr(S))return K(x,_,S,A);if(Z(S))return H(x,_,S,A);Qi(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(t(x,_.sibling),_=a(_,S),_.return=x,x=_):(t(x,_),_=$o(S,x.mode,A),_.return=x,x=_),h(x)):t(x,_)}return Te}var Qt=Ju(!0),Xu=Ju(!1),qi=Zn(null),Yi=null,qt=null,Wl=null;function Hl(){Wl=qt=Yi=null}function Ql(e){var n=qi.current;_e(qi),e._currentValue=n}function ql(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function Yt(e,n){Yi=e,Wl=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ze=!0),e.firstContext=null)}function cn(e){var n=e._currentValue;if(Wl!==e)if(e={context:e,memoizedValue:n,next:null},qt===null){if(Yi===null)throw Error(i(308));qt=e,Yi.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return n}var wt=null;function Yl(e){wt===null?wt=[e]:wt.push(e)}function Zu(e,n,t,l){var a=n.interleaved;return a===null?(t.next=t,Yl(n)):(t.next=a.next,a.next=t),n.interleaved=t,Bn(e,l)}function Bn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var tt=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ef(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function rt(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(oe&2)!==0){var a=l.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),l.pending=n,Bn(e,t)}return a=l.interleaved,a===null?(n.next=n,Yl(l)):(n.next=a.next,a.next=n),l.interleaved=n,Bn(e,t)}function Gi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,fl(e,t)}}function nf(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var a=null,c=null;if(t=t.firstBaseUpdate,t!==null){do{var h={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};c===null?a=c=h:c=c.next=h,t=t.next}while(t!==null);c===null?a=c=n:c=c.next=n}else a=c=n;t={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ji(e,n,t,l){var a=e.updateQueue;tt=!1;var c=a.firstBaseUpdate,h=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var w=y,C=w.next;w.next=null,h===null?c=C:h.next=C,h=w;var P=e.alternate;P!==null&&(P=P.updateQueue,y=P.lastBaseUpdate,y!==h&&(y===null?P.firstBaseUpdate=C:y.next=C,P.lastBaseUpdate=w))}if(c!==null){var z=a.baseState;h=0,P=C=w=null,y=c;do{var L=y.lane,D=y.eventTime;if((l&L)===L){P!==null&&(P=P.next={eventTime:D,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var K=e,H=y;switch(L=n,D=t,H.tag){case 1:if(K=H.payload,typeof K=="function"){z=K.call(D,z,L);break e}z=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=H.payload,L=typeof K=="function"?K.call(D,z,L):K,L==null)break e;z=F({},z,L);break e;case 2:tt=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,L=a.effects,L===null?a.effects=[y]:L.push(y))}else D={eventTime:D,lane:L,tag:y.tag,payload:y.payload,callback:y.callback,next:null},P===null?(C=P=D,w=z):P=P.next=D,h|=L;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;L=y,y=L.next,L.next=null,a.lastBaseUpdate=L,a.shared.pending=null}}while(!0);if(P===null&&(w=z),a.baseState=w,a.firstBaseUpdate=C,a.lastBaseUpdate=P,n=a.shared.interleaved,n!==null){a=n;do h|=a.lane,a=a.next;while(a!==n)}else c===null&&(a.shared.lanes=0);kt|=h,e.lanes=h,e.memoizedState=z}}function tf(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],a=l.callback;if(a!==null){if(l.callback=null,l=t,typeof a!="function")throw Error(i(191,a));a.call(l)}}}var Kr={},In=Zn(Kr),Vr=Zn(Kr),Wr=Zn(Kr);function _t(e){if(e===Kr)throw Error(i(174));return e}function Jl(e,n){switch(pe(Wr,n),pe(Vr,e),pe(In,Kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Xs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Xs(n,e)}_e(In),pe(In,n)}function Gt(){_e(In),_e(Vr),_e(Wr)}function rf(e){_t(Wr.current);var n=_t(In.current),t=Xs(n,e.type);n!==t&&(pe(Vr,e),pe(In,t))}function Xl(e){Vr.current===e&&(_e(In),_e(Vr))}var xe=Zn(0);function Xi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zl=[];function eo(){for(var e=0;e<Zl.length;e++)Zl[e]._workInProgressVersionPrimary=null;Zl.length=0}var Zi=W.ReactCurrentDispatcher,no=W.ReactCurrentBatchConfig,vt=0,Se=null,ze=null,je=null,es=!1,Hr=!1,Qr=0,Jh=0;function Ue(){throw Error(i(321))}function to(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_n(e[t],n[t]))return!1;return!0}function ro(e,n,t,l,a,c){if(vt=c,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zi.current=e===null||e.memoizedState===null?np:tp,e=t(l,a),Hr){c=0;do{if(Hr=!1,Qr=0,25<=c)throw Error(i(301));c+=1,je=ze=null,n.updateQueue=null,Zi.current=rp,e=t(l,a)}while(Hr)}if(Zi.current=rs,n=ze!==null&&ze.next!==null,vt=0,je=ze=Se=null,es=!1,n)throw Error(i(300));return e}function io(){var e=Qr!==0;return Qr=0,e}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Se.memoizedState=je=e:je=je.next=e,je}function dn(){if(ze===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=je===null?Se.memoizedState:je.next;if(n!==null)je=n,ze=e;else{if(e===null)throw Error(i(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},je===null?Se.memoizedState=je=e:je=je.next=e}return je}function qr(e,n){return typeof n=="function"?n(e):n}function so(e){var n=dn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var l=ze,a=l.baseQueue,c=t.pending;if(c!==null){if(a!==null){var h=a.next;a.next=c.next,c.next=h}l.baseQueue=a=c,t.pending=null}if(a!==null){c=a.next,l=l.baseState;var y=h=null,w=null,C=c;do{var P=C.lane;if((vt&P)===P)w!==null&&(w=w.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),l=C.hasEagerState?C.eagerState:e(l,C.action);else{var z={lane:P,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};w===null?(y=w=z,h=l):w=w.next=z,Se.lanes|=P,kt|=P}C=C.next}while(C!==null&&C!==c);w===null?h=l:w.next=y,_n(l,n.memoizedState)||(Ze=!0),n.memoizedState=l,n.baseState=h,n.baseQueue=w,t.lastRenderedState=l}if(e=t.interleaved,e!==null){a=e;do c=a.lane,Se.lanes|=c,kt|=c,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function lo(e){var n=dn(),t=n.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=e;var l=t.dispatch,a=t.pending,c=n.memoizedState;if(a!==null){t.pending=null;var h=a=a.next;do c=e(c,h.action),h=h.next;while(h!==a);_n(c,n.memoizedState)||(Ze=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),t.lastRenderedState=c}return[c,l]}function sf(){}function lf(e,n){var t=Se,l=dn(),a=n(),c=!_n(l.memoizedState,a);if(c&&(l.memoizedState=a,Ze=!0),l=l.queue,oo(uf.bind(null,t,l,e),[e]),l.getSnapshot!==n||c||je!==null&&je.memoizedState.tag&1){if(t.flags|=2048,Yr(9,af.bind(null,t,l,a,n),void 0,null),$e===null)throw Error(i(349));(vt&30)!==0||of(t,n,a)}return a}function of(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function af(e,n,t,l){n.value=t,n.getSnapshot=l,ff(n)&&cf(e)}function uf(e,n,t){return t(function(){ff(n)&&cf(e)})}function ff(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_n(e,t)}catch{return!0}}function cf(e){var n=Bn(e,1);n!==null&&Nn(n,e,1,-1)}function df(e){var n=Pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},n.queue=e,e=e.dispatch=ep.bind(null,Se,e),[n.memoizedState,e]}function Yr(e,n,t,l){return e={tag:e,create:n,destroy:t,deps:l,next:null},n=Se.updateQueue,n===null?(n={lastEffect:null,stores:null},Se.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e)),e}function hf(){return dn().memoizedState}function ns(e,n,t,l){var a=Pn();Se.flags|=e,a.memoizedState=Yr(1|n,t,void 0,l===void 0?null:l)}function ts(e,n,t,l){var a=dn();l=l===void 0?null:l;var c=void 0;if(ze!==null){var h=ze.memoizedState;if(c=h.destroy,l!==null&&to(l,h.deps)){a.memoizedState=Yr(n,t,c,l);return}}Se.flags|=e,a.memoizedState=Yr(1|n,t,c,l)}function pf(e,n){return ns(8390656,8,e,n)}function oo(e,n){return ts(2048,8,e,n)}function gf(e,n){return ts(4,2,e,n)}function mf(e,n){return ts(4,4,e,n)}function yf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wf(e,n,t){return t=t!=null?t.concat([e]):null,ts(4,4,yf.bind(null,n,e),t)}function ao(){}function _f(e,n){var t=dn();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&to(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function vf(e,n){var t=dn();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&to(n,l[1])?l[0]:(e=e(),t.memoizedState=[e,n],e)}function kf(e,n,t){return(vt&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=t):(_n(t,n)||(t=Ga(),Se.lanes|=t,kt|=t,e.baseState=!0),n)}function Xh(e,n){var t=de;de=t!==0&&4>t?t:4,e(!0);var l=no.transition;no.transition={};try{e(!1),n()}finally{de=t,no.transition=l}}function xf(){return dn().memoizedState}function Zh(e,n,t){var l=ot(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},Sf(e))Nf(n,t);else if(t=Zu(e,n,t,l),t!==null){var a=He();Nn(t,e,l,a),Ef(t,n,l)}}function ep(e,n,t){var l=ot(e),a={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sf(e))Nf(n,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var h=n.lastRenderedState,y=c(h,t);if(a.hasEagerState=!0,a.eagerState=y,_n(y,h)){var w=n.interleaved;w===null?(a.next=a,Yl(n)):(a.next=w.next,w.next=a),n.interleaved=a;return}}catch{}finally{}t=Zu(e,n,a,l),t!==null&&(a=He(),Nn(t,e,l,a),Ef(t,n,l))}}function Sf(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Nf(e,n){Hr=es=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ef(e,n,t){if((t&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,fl(e,t)}}var rs={readContext:cn,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},np={readContext:cn,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:pf,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ns(4194308,4,yf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ns(4194308,4,e,n)},useInsertionEffect:function(e,n){return ns(4,2,e,n)},useMemo:function(e,n){var t=Pn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var l=Pn();return n=t!==void 0?t(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Zh.bind(null,Se,e),[l.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:df,useDebugValue:ao,useDeferredValue:function(e){return Pn().memoizedState=e},useTransition:function(){var e=df(!1),n=e[0];return e=Xh.bind(null,e[1]),Pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var l=Se,a=Pn();if(ke){if(t===void 0)throw Error(i(407));t=t()}else{if(t=n(),$e===null)throw Error(i(349));(vt&30)!==0||of(l,n,t)}a.memoizedState=t;var c={value:t,getSnapshot:n};return a.queue=c,pf(uf.bind(null,l,c,e),[e]),l.flags|=2048,Yr(9,af.bind(null,l,c,t,n),void 0,null),t},useId:function(){var e=Pn(),n=$e.identifierPrefix;if(ke){var t=Dn,l=Rn;t=(l&~(1<<32-wn(l)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tp={readContext:cn,useCallback:_f,useContext:cn,useEffect:oo,useImperativeHandle:wf,useInsertionEffect:gf,useLayoutEffect:mf,useMemo:vf,useReducer:so,useRef:hf,useState:function(){return so(qr)},useDebugValue:ao,useDeferredValue:function(e){var n=dn();return kf(n,ze.memoizedState,e)},useTransition:function(){var e=so(qr)[0],n=dn().memoizedState;return[e,n]},useMutableSource:sf,useSyncExternalStore:lf,useId:xf,unstable_isNewReconciler:!1},rp={readContext:cn,useCallback:_f,useContext:cn,useEffect:oo,useImperativeHandle:wf,useInsertionEffect:gf,useLayoutEffect:mf,useMemo:vf,useReducer:lo,useRef:hf,useState:function(){return lo(qr)},useDebugValue:ao,useDeferredValue:function(e){var n=dn();return ze===null?n.memoizedState=e:kf(n,ze.memoizedState,e)},useTransition:function(){var e=lo(qr)[0],n=dn().memoizedState;return[e,n]},useMutableSource:sf,useSyncExternalStore:lf,useId:xf,unstable_isNewReconciler:!1};function kn(e,n){if(e&&e.defaultProps){n=F({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function uo(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:F({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var is={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var l=He(),a=ot(e),c=Fn(l,a);c.payload=n,t!=null&&(c.callback=t),n=rt(e,c,a),n!==null&&(Nn(n,e,a,l),Gi(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=He(),a=ot(e),c=Fn(l,a);c.tag=1,c.payload=n,t!=null&&(c.callback=t),n=rt(e,c,a),n!==null&&(Nn(n,e,a,l),Gi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=He(),l=ot(e),a=Fn(t,l);a.tag=2,n!=null&&(a.callback=n),n=rt(e,a,l),n!==null&&(Nn(n,e,l,t),Gi(n,e,l))}};function Cf(e,n,t,l,a,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,h):n.prototype&&n.prototype.isPureReactComponent?!jr(t,l)||!jr(a,c):!0}function bf(e,n,t){var l=!1,a=et,c=n.contextType;return typeof c=="object"&&c!==null?c=cn(c):(a=Xe(n)?gt:Fe.current,l=n.contextTypes,c=(l=l!=null)?Kt(e,a):et),n=new n(t,c),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=is,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),n}function Tf(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&is.enqueueReplaceState(n,n.state,null)}function fo(e,n,t,l){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Gl(e);var c=n.contextType;typeof c=="object"&&c!==null?a.context=cn(c):(c=Xe(n)?gt:Fe.current,a.context=Kt(e,c)),a.state=e.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(uo(e,n,c,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&is.enqueueReplaceState(a,a.state,null),Ji(e,t,a,l),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Jt(e,n){try{var t="",l=n;do t+=ae(l),l=l.return;while(l);var a=t}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:n,stack:a,digest:null}}function co(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ho(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function Of(e,n,t){t=Fn(-1,t),t.tag=3,t.payload={element:null};var l=n.value;return t.callback=function(){cs||(cs=!0,To=l),ho(e,n)},t}function Lf(e,n,t){t=Fn(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=n.value;t.payload=function(){return l(a)},t.callback=function(){ho(e,n)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){ho(e,n),typeof l!="function"&&(st===null?st=new Set([this]):st.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})}),t}function If(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new ip;var a=new Set;l.set(n,a)}else a=l.get(n),a===void 0&&(a=new Set,l.set(n,a));a.has(t)||(a.add(t),e=wp.bind(null,e,n,t),n.then(e,e))}function Pf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function zf(e,n,t,l,a){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Fn(-1,1),n.tag=2,rt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var sp=W.ReactCurrentOwner,Ze=!1;function We(e,n,t,l){n.child=e===null?Xu(n,null,t,l):Qt(n,e.child,t,l)}function Af(e,n,t,l,a){t=t.render;var c=n.ref;return Yt(n,a),l=ro(e,n,t,l,c,a),t=io(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Un(e,n,a)):(ke&&t&&Bl(n),n.flags|=1,We(e,n,l,a),n.child)}function jf(e,n,t,l,a){if(e===null){var c=t.type;return typeof c=="function"&&!jo(c)&&c.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=c,$f(e,n,c,l,a)):(e=ys(t.type,null,l,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,(e.lanes&a)===0){var h=c.memoizedProps;if(t=t.compare,t=t!==null?t:jr,t(h,l)&&e.ref===n.ref)return Un(e,n,a)}return n.flags|=1,e=ut(c,l),e.ref=n.ref,e.return=n,n.child=e}function $f(e,n,t,l,a){if(e!==null){var c=e.memoizedProps;if(jr(c,l)&&e.ref===n.ref)if(Ze=!1,n.pendingProps=l=c,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ze=!0);else return n.lanes=e.lanes,Un(e,n,a)}return po(e,n,t,l,a)}function Mf(e,n,t){var l=n.pendingProps,a=l.children,c=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Zt,an),an|=t;else{if((t&1073741824)===0)return e=c!==null?c.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(Zt,an),an|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=c!==null?c.baseLanes:t,pe(Zt,an),an|=l}else c!==null?(l=c.baseLanes|t,n.memoizedState=null):l=t,pe(Zt,an),an|=l;return We(e,n,a,t),n.child}function Rf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function po(e,n,t,l,a){var c=Xe(t)?gt:Fe.current;return c=Kt(n,c),Yt(n,a),t=ro(e,n,t,l,c,a),l=io(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Un(e,n,a)):(ke&&l&&Bl(n),n.flags|=1,We(e,n,t,a),n.child)}function Df(e,n,t,l,a){if(Xe(t)){var c=!0;Ui(n)}else c=!1;if(Yt(n,a),n.stateNode===null)ls(e,n),bf(n,t,l),fo(n,t,l,a),l=!0;else if(e===null){var h=n.stateNode,y=n.memoizedProps;h.props=y;var w=h.context,C=t.contextType;typeof C=="object"&&C!==null?C=cn(C):(C=Xe(t)?gt:Fe.current,C=Kt(n,C));var P=t.getDerivedStateFromProps,z=typeof P=="function"||typeof h.getSnapshotBeforeUpdate=="function";z||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==l||w!==C)&&Tf(n,h,l,C),tt=!1;var L=n.memoizedState;h.state=L,Ji(n,l,h,a),w=n.memoizedState,y!==l||L!==w||Je.current||tt?(typeof P=="function"&&(uo(n,t,P,l),w=n.memoizedState),(y=tt||Cf(n,t,y,l,L,w,C))?(z||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),h.props=l,h.state=w,h.context=C,l=y):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{h=n.stateNode,ef(e,n),y=n.memoizedProps,C=n.type===n.elementType?y:kn(n.type,y),h.props=C,z=n.pendingProps,L=h.context,w=t.contextType,typeof w=="object"&&w!==null?w=cn(w):(w=Xe(t)?gt:Fe.current,w=Kt(n,w));var D=t.getDerivedStateFromProps;(P=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==z||L!==w)&&Tf(n,h,l,w),tt=!1,L=n.memoizedState,h.state=L,Ji(n,l,h,a);var K=n.memoizedState;y!==z||L!==K||Je.current||tt?(typeof D=="function"&&(uo(n,t,D,l),K=n.memoizedState),(C=tt||Cf(n,t,C,l,L,K,w)||!1)?(P||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,K,w),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,K,w)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=K),h.props=l,h.state=K,h.context=w,l=C):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),l=!1)}return go(e,n,t,l,c,a)}function go(e,n,t,l,a,c){Rf(e,n);var h=(n.flags&128)!==0;if(!l&&!h)return a&&Ku(n,t,!1),Un(e,n,c);l=n.stateNode,sp.current=n;var y=h&&typeof t.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&h?(n.child=Qt(n,e.child,null,c),n.child=Qt(n,null,y,c)):We(e,n,y,c),n.memoizedState=l.state,a&&Ku(n,t,!0),n.child}function Bf(e){var n=e.stateNode;n.pendingContext?Fu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Fu(e,n.context,!1),Jl(e,n.containerInfo)}function Ff(e,n,t,l,a){return Ht(),Vl(a),n.flags|=256,We(e,n,t,l),n.child}var mo={dehydrated:null,treeContext:null,retryLane:0};function yo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uf(e,n,t){var l=n.pendingProps,a=xe.current,c=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(a&2)!==0),y?(c=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),pe(xe,a&1),e===null)return Kl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(h=l.children,e=l.fallback,c?(l=n.mode,c=n.child,h={mode:"hidden",children:h},(l&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=h):c=ws(h,l,0,null),e=Et(e,l,t,null),c.return=n,e.return=n,c.sibling=e,n.child=c,n.child.memoizedState=yo(t),n.memoizedState=mo,e):wo(n,h));if(a=e.memoizedState,a!==null&&(y=a.dehydrated,y!==null))return lp(e,n,h,l,y,a,t);if(c){c=l.fallback,h=n.mode,a=e.child,y=a.sibling;var w={mode:"hidden",children:l.children};return(h&1)===0&&n.child!==a?(l=n.child,l.childLanes=0,l.pendingProps=w,n.deletions=null):(l=ut(a,w),l.subtreeFlags=a.subtreeFlags&14680064),y!==null?c=ut(y,c):(c=Et(c,h,t,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,l=c,c=n.child,h=e.child.memoizedState,h=h===null?yo(t):{baseLanes:h.baseLanes|t,cachePool:null,transitions:h.transitions},c.memoizedState=h,c.childLanes=e.childLanes&~t,n.memoizedState=mo,l}return c=e.child,e=c.sibling,l=ut(c,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=t),l.return=n,l.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=l,n.memoizedState=null,l}function wo(e,n){return n=ws({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ss(e,n,t,l){return l!==null&&Vl(l),Qt(n,e.child,null,t),e=wo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lp(e,n,t,l,a,c,h){if(t)return n.flags&256?(n.flags&=-257,l=co(Error(i(422))),ss(e,n,h,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(c=l.fallback,a=n.mode,l=ws({mode:"visible",children:l.children},a,0,null),c=Et(c,a,h,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,(n.mode&1)!==0&&Qt(n,e.child,null,h),n.child.memoizedState=yo(h),n.memoizedState=mo,c);if((n.mode&1)===0)return ss(e,n,h,null);if(a.data==="$!"){if(l=a.nextSibling&&a.nextSibling.dataset,l)var y=l.dgst;return l=y,c=Error(i(419)),l=co(c,l,void 0),ss(e,n,h,l)}if(y=(h&e.childLanes)!==0,Ze||y){if(l=$e,l!==null){switch(h&-h){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(l.suspendedLanes|h))!==0?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,Bn(e,a),Nn(l,e,a,-1))}return Ao(),l=co(Error(i(421))),ss(e,n,h,l)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=_p.bind(null,e),a._reactRetry=n,null):(e=c.treeContext,on=Xn(a.nextSibling),ln=n,ke=!0,vn=null,e!==null&&(un[fn++]=Rn,un[fn++]=Dn,un[fn++]=mt,Rn=e.id,Dn=e.overflow,mt=n),n=wo(n,l.children),n.flags|=4096,n)}function Kf(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),ql(e.return,n,t)}function _o(e,n,t,l,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:a}:(c.isBackwards=n,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=t,c.tailMode=a)}function Vf(e,n,t){var l=n.pendingProps,a=l.revealOrder,c=l.tail;if(We(e,n,l.children,t),l=xe.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kf(e,t,n);else if(e.tag===19)Kf(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(pe(xe,l),(n.mode&1)===0)n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Xi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),_o(n,!1,a,t,c);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Xi(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}_o(n,!0,t,null,c);break;case"together":_o(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ls(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),kt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,t=ut(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ut(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function op(e,n,t){switch(n.tag){case 3:Bf(n),Ht();break;case 5:rf(n);break;case 1:Xe(n.type)&&Ui(n);break;case 4:Jl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,a=n.memoizedProps.value;pe(qi,l._currentValue),l._currentValue=a;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(pe(xe,xe.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Uf(e,n,t):(pe(xe,xe.current&1),e=Un(e,n,t),e!==null?e.sibling:null);pe(xe,xe.current&1);break;case 19:if(l=(t&n.childLanes)!==0,(e.flags&128)!==0){if(l)return Vf(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pe(xe,xe.current),l)break;return null;case 22:case 23:return n.lanes=0,Mf(e,n,t)}return Un(e,n,t)}var Wf,vo,Hf,Qf;Wf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},vo=function(){},Hf=function(e,n,t,l){var a=e.memoizedProps;if(a!==l){e=n.stateNode,_t(In.current);var c=null;switch(t){case"input":a=qs(e,a),l=qs(e,l),c=[];break;case"select":a=F({},a,{value:void 0}),l=F({},l,{value:void 0}),c=[];break;case"textarea":a=Js(e,a),l=Js(e,l),c=[];break;default:typeof a.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Di)}Zs(t,l);var h;t=null;for(C in a)if(!l.hasOwnProperty(C)&&a.hasOwnProperty(C)&&a[C]!=null)if(C==="style"){var y=a[C];for(h in y)y.hasOwnProperty(h)&&(t||(t={}),t[h]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(u.hasOwnProperty(C)?c||(c=[]):(c=c||[]).push(C,null));for(C in l){var w=l[C];if(y=a!=null?a[C]:void 0,l.hasOwnProperty(C)&&w!==y&&(w!=null||y!=null))if(C==="style")if(y){for(h in y)!y.hasOwnProperty(h)||w&&w.hasOwnProperty(h)||(t||(t={}),t[h]="");for(h in w)w.hasOwnProperty(h)&&y[h]!==w[h]&&(t||(t={}),t[h]=w[h])}else t||(c||(c=[]),c.push(C,t)),t=w;else C==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,y=y?y.__html:void 0,w!=null&&y!==w&&(c=c||[]).push(C,w)):C==="children"?typeof w!="string"&&typeof w!="number"||(c=c||[]).push(C,""+w):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(u.hasOwnProperty(C)?(w!=null&&C==="onScroll"&&we("scroll",e),c||y===w||(c=[])):(c=c||[]).push(C,w))}t&&(c=c||[]).push("style",t);var C=c;(n.updateQueue=C)&&(n.flags|=4)}},Qf=function(e,n,t,l){t!==l&&(n.flags|=4)};function Gr(e,n){if(!ke)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags&14680064,l|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function ap(e,n,t){var l=n.pendingProps;switch(Fl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Xe(n.type)&&Fi(),Ke(n),null;case 3:return l=n.stateNode,Gt(),_e(Je),_e(Fe),eo(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Hi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vn!==null&&(Io(vn),vn=null))),vo(e,n),Ke(n),null;case 5:Xl(n);var a=_t(Wr.current);if(t=n.type,e!==null&&n.stateNode!=null)Hf(e,n,t,l,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return Ke(n),null}if(e=_t(In.current),Hi(n)){l=n.stateNode,t=n.type;var c=n.memoizedProps;switch(l[Ln]=n,l[Br]=c,e=(n.mode&1)!==0,t){case"dialog":we("cancel",l),we("close",l);break;case"iframe":case"object":case"embed":we("load",l);break;case"video":case"audio":for(a=0;a<Mr.length;a++)we(Mr[a],l);break;case"source":we("error",l);break;case"img":case"image":case"link":we("error",l),we("load",l);break;case"details":we("toggle",l);break;case"input":Ca(l,c),we("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!c.multiple},we("invalid",l);break;case"textarea":Oa(l,c),we("invalid",l)}Zs(t,c),a=null;for(var h in c)if(c.hasOwnProperty(h)){var y=c[h];h==="children"?typeof y=="string"?l.textContent!==y&&(c.suppressHydrationWarning!==!0&&Ri(l.textContent,y,e),a=["children",y]):typeof y=="number"&&l.textContent!==""+y&&(c.suppressHydrationWarning!==!0&&Ri(l.textContent,y,e),a=["children",""+y]):u.hasOwnProperty(h)&&y!=null&&h==="onScroll"&&we("scroll",l)}switch(t){case"input":gi(l),Ta(l,c,!0);break;case"textarea":gi(l),Ia(l);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(l.onclick=Di)}l=a,n.updateQueue=l,l!==null&&(n.flags|=4)}else{h=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=h.createElement(t,{is:l.is}):(e=h.createElement(t),t==="select"&&(h=e,l.multiple?h.multiple=!0:l.size&&(h.size=l.size))):e=h.createElementNS(e,t),e[Ln]=n,e[Br]=l,Wf(e,n,!1,!1),n.stateNode=e;e:{switch(h=el(t,l),t){case"dialog":we("cancel",e),we("close",e),a=l;break;case"iframe":case"object":case"embed":we("load",e),a=l;break;case"video":case"audio":for(a=0;a<Mr.length;a++)we(Mr[a],e);a=l;break;case"source":we("error",e),a=l;break;case"img":case"image":case"link":we("error",e),we("load",e),a=l;break;case"details":we("toggle",e),a=l;break;case"input":Ca(e,l),a=qs(e,l),we("invalid",e);break;case"option":a=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},a=F({},l,{value:void 0}),we("invalid",e);break;case"textarea":Oa(e,l),a=Js(e,l),we("invalid",e);break;default:a=l}Zs(t,a),y=a;for(c in y)if(y.hasOwnProperty(c)){var w=y[c];c==="style"?ja(e,w):c==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&za(e,w)):c==="children"?typeof w=="string"?(t!=="textarea"||w!=="")&&wr(e,w):typeof w=="number"&&wr(e,""+w):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?w!=null&&c==="onScroll"&&we("scroll",e):w!=null&&q(e,c,w,h))}switch(t){case"input":gi(e),Ta(e,l,!1);break;case"textarea":gi(e),Ia(e);break;case"option":l.value!=null&&e.setAttribute("value",""+ce(l.value));break;case"select":e.multiple=!!l.multiple,c=l.value,c!=null?It(e,!!l.multiple,c,!1):l.defaultValue!=null&&It(e,!!l.multiple,l.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Di)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ke(n),null;case 6:if(e&&n.stateNode!=null)Qf(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(t=_t(Wr.current),_t(In.current),Hi(n)){if(l=n.stateNode,t=n.memoizedProps,l[Ln]=n,(c=l.nodeValue!==t)&&(e=ln,e!==null))switch(e.tag){case 3:Ri(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ri(l.nodeValue,t,(e.mode&1)!==0)}c&&(n.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[Ln]=n,n.stateNode=l}return Ke(n),null;case 13:if(_e(xe),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&on!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Yu(),Ht(),n.flags|=98560,c=!1;else if(c=Hi(n),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(i(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[Ln]=n}else Ht(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else vn!==null&&(Io(vn),vn=null),c=!0;if(!c)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(xe.current&1)!==0?Ae===0&&(Ae=3):Ao())),n.updateQueue!==null&&(n.flags|=4),Ke(n),null);case 4:return Gt(),vo(e,n),e===null&&Rr(n.stateNode.containerInfo),Ke(n),null;case 10:return Ql(n.type._context),Ke(n),null;case 17:return Xe(n.type)&&Fi(),Ke(n),null;case 19:if(_e(xe),c=n.memoizedState,c===null)return Ke(n),null;if(l=(n.flags&128)!==0,h=c.rendering,h===null)if(l)Gr(c,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Xi(e),h!==null){for(n.flags|=128,Gr(c,!1),l=h.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=t,t=n.child;t!==null;)c=t,e=l,c.flags&=14680066,h=c.alternate,h===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=h.childLanes,c.lanes=h.lanes,c.child=h.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=h.memoizedProps,c.memoizedState=h.memoizedState,c.updateQueue=h.updateQueue,c.type=h.type,e=h.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return pe(xe,xe.current&1|2),n.child}e=e.sibling}c.tail!==null&&be()>er&&(n.flags|=128,l=!0,Gr(c,!1),n.lanes=4194304)}else{if(!l)if(e=Xi(h),e!==null){if(n.flags|=128,l=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Gr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!ke)return Ke(n),null}else 2*be()-c.renderingStartTime>er&&t!==1073741824&&(n.flags|=128,l=!0,Gr(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(t=c.last,t!==null?t.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=be(),n.sibling=null,t=xe.current,pe(xe,l?t&1|2:t&1),n):(Ke(n),null);case 22:case 23:return zo(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(an&1073741824)!==0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function up(e,n){switch(Fl(n),n.tag){case 1:return Xe(n.type)&&Fi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gt(),_e(Je),_e(Fe),eo(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Xl(n),null;case 13:if(_e(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Ht()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _e(xe),null;case 4:return Gt(),null;case 10:return Ql(n.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var os=!1,Ve=!1,fp=typeof WeakSet=="function"?WeakSet:Set,B=null;function Xt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){Ce(e,n,l)}else t.current=null}function ko(e,n,t){try{t()}catch(l){Ce(e,n,l)}}var qf=!1;function cp(e,n){if(Pl=bi,e=Eu(),Nl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var a=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{t.nodeType,c.nodeType}catch{t=null;break e}var h=0,y=-1,w=-1,C=0,P=0,z=e,L=null;n:for(;;){for(var D;z!==t||a!==0&&z.nodeType!==3||(y=h+a),z!==c||l!==0&&z.nodeType!==3||(w=h+l),z.nodeType===3&&(h+=z.nodeValue.length),(D=z.firstChild)!==null;)L=z,z=D;for(;;){if(z===e)break n;if(L===t&&++C===a&&(y=h),L===c&&++P===l&&(w=h),(D=z.nextSibling)!==null)break;z=L,L=z.parentNode}z=D}t=y===-1||w===-1?null:{start:y,end:w}}else t=null}t=t||{start:0,end:0}}else t=null;for(zl={focusedElem:e,selectionRange:t},bi=!1,B=n;B!==null;)if(n=B,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,B=e;else for(;B!==null;){n=B;try{var K=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var H=K.memoizedProps,Te=K.memoizedState,x=n.stateNode,_=x.getSnapshotBeforeUpdate(n.elementType===n.type?H:kn(n.type,H),Te);x.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=n.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(A){Ce(n,n.return,A)}if(e=n.sibling,e!==null){e.return=n.return,B=e;break}B=n.return}return K=qf,qf=!1,K}function Jr(e,n,t){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var a=l=l.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&ko(n,t,c)}a=a.next}while(a!==l)}}function as(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==n)}}function xo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Yf(e){var n=e.alternate;n!==null&&(e.alternate=null,Yf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ln],delete n[Br],delete n[Ml],delete n[Qh],delete n[qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function Jf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function So(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Di));else if(l!==4&&(e=e.child,e!==null))for(So(e,n,t),e=e.sibling;e!==null;)So(e,n,t),e=e.sibling}function No(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(No(e,n,t),e=e.sibling;e!==null;)No(e,n,t),e=e.sibling}var De=null,xn=!1;function it(e,n,t){for(t=t.child;t!==null;)Xf(e,n,t),t=t.sibling}function Xf(e,n,t){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(ki,t)}catch{}switch(t.tag){case 5:Ve||Xt(t,n);case 6:var l=De,a=xn;De=null,it(e,n,t),De=l,xn=a,De!==null&&(xn?(e=De,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):De.removeChild(t.stateNode));break;case 18:De!==null&&(xn?(e=De,t=t.stateNode,e.nodeType===8?$l(e.parentNode,t):e.nodeType===1&&$l(e,t),Or(e)):$l(De,t.stateNode));break;case 4:l=De,a=xn,De=t.stateNode.containerInfo,xn=!0,it(e,n,t),De=l,xn=a;break;case 0:case 11:case 14:case 15:if(!Ve&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){a=l=l.next;do{var c=a,h=c.destroy;c=c.tag,h!==void 0&&((c&2)!==0||(c&4)!==0)&&ko(t,n,h),a=a.next}while(a!==l)}it(e,n,t);break;case 1:if(!Ve&&(Xt(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(y){Ce(t,n,y)}it(e,n,t);break;case 21:it(e,n,t);break;case 22:t.mode&1?(Ve=(l=Ve)||t.memoizedState!==null,it(e,n,t),Ve=l):it(e,n,t);break;default:it(e,n,t)}}function Zf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new fp),n.forEach(function(l){var a=vp.bind(null,e,l);t.has(l)||(t.add(l),l.then(a,a))})}}function Sn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];try{var c=e,h=n,y=h;e:for(;y!==null;){switch(y.tag){case 5:De=y.stateNode,xn=!1;break e;case 3:De=y.stateNode.containerInfo,xn=!0;break e;case 4:De=y.stateNode.containerInfo,xn=!0;break e}y=y.return}if(De===null)throw Error(i(160));Xf(c,h,a),De=null,xn=!1;var w=a.alternate;w!==null&&(w.return=null),a.return=null}catch(C){Ce(a,n,C)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ec(n,e),n=n.sibling}function ec(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(n,e),zn(e),l&4){try{Jr(3,e,e.return),as(3,e)}catch(H){Ce(e,e.return,H)}try{Jr(5,e,e.return)}catch(H){Ce(e,e.return,H)}}break;case 1:Sn(n,e),zn(e),l&512&&t!==null&&Xt(t,t.return);break;case 5:if(Sn(n,e),zn(e),l&512&&t!==null&&Xt(t,t.return),e.flags&32){var a=e.stateNode;try{wr(a,"")}catch(H){Ce(e,e.return,H)}}if(l&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,h=t!==null?t.memoizedProps:c,y=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{y==="input"&&c.type==="radio"&&c.name!=null&&ba(a,c),el(y,h);var C=el(y,c);for(h=0;h<w.length;h+=2){var P=w[h],z=w[h+1];P==="style"?ja(a,z):P==="dangerouslySetInnerHTML"?za(a,z):P==="children"?wr(a,z):q(a,P,z,C)}switch(y){case"input":Ys(a,c);break;case"textarea":La(a,c);break;case"select":var L=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var D=c.value;D!=null?It(a,!!c.multiple,D,!1):L!==!!c.multiple&&(c.defaultValue!=null?It(a,!!c.multiple,c.defaultValue,!0):It(a,!!c.multiple,c.multiple?[]:"",!1))}a[Br]=c}catch(H){Ce(e,e.return,H)}}break;case 6:if(Sn(n,e),zn(e),l&4){if(e.stateNode===null)throw Error(i(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(H){Ce(e,e.return,H)}}break;case 3:if(Sn(n,e),zn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Or(n.containerInfo)}catch(H){Ce(e,e.return,H)}break;case 4:Sn(n,e),zn(e);break;case 13:Sn(n,e),zn(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(bo=be())),l&4&&Zf(e);break;case 22:if(P=t!==null&&t.memoizedState!==null,e.mode&1?(Ve=(C=Ve)||P,Sn(n,e),Ve=C):Sn(n,e),zn(e),l&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!P&&(e.mode&1)!==0)for(B=e,P=e.child;P!==null;){for(z=B=P;B!==null;){switch(L=B,D=L.child,L.tag){case 0:case 11:case 14:case 15:Jr(4,L,L.return);break;case 1:Xt(L,L.return);var K=L.stateNode;if(typeof K.componentWillUnmount=="function"){l=L,t=L.return;try{n=l,K.props=n.memoizedProps,K.state=n.memoizedState,K.componentWillUnmount()}catch(H){Ce(l,t,H)}}break;case 5:Xt(L,L.return);break;case 22:if(L.memoizedState!==null){rc(z);continue}}D!==null?(D.return=L,B=D):rc(z)}P=P.sibling}e:for(P=null,z=e;;){if(z.tag===5){if(P===null){P=z;try{a=z.stateNode,C?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(y=z.stateNode,w=z.memoizedProps.style,h=w!=null&&w.hasOwnProperty("display")?w.display:null,y.style.display=Aa("display",h))}catch(H){Ce(e,e.return,H)}}}else if(z.tag===6){if(P===null)try{z.stateNode.nodeValue=C?"":z.memoizedProps}catch(H){Ce(e,e.return,H)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;P===z&&(P=null),z=z.return}P===z&&(P=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Sn(n,e),zn(e),l&4&&Zf(e);break;case 21:break;default:Sn(n,e),zn(e)}}function zn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Gf(t)){var l=t;break e}t=t.return}throw Error(i(160))}switch(l.tag){case 5:var a=l.stateNode;l.flags&32&&(wr(a,""),l.flags&=-33);var c=Jf(e);No(e,c,a);break;case 3:case 4:var h=l.stateNode.containerInfo,y=Jf(e);So(e,y,h);break;default:throw Error(i(161))}}catch(w){Ce(e,e.return,w)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dp(e,n,t){B=e,nc(e)}function nc(e,n,t){for(var l=(e.mode&1)!==0;B!==null;){var a=B,c=a.child;if(a.tag===22&&l){var h=a.memoizedState!==null||os;if(!h){var y=a.alternate,w=y!==null&&y.memoizedState!==null||Ve;y=os;var C=Ve;if(os=h,(Ve=w)&&!C)for(B=a;B!==null;)h=B,w=h.child,h.tag===22&&h.memoizedState!==null?ic(a):w!==null?(w.return=h,B=w):ic(a);for(;c!==null;)B=c,nc(c),c=c.sibling;B=a,os=y,Ve=C}tc(e)}else(a.subtreeFlags&8772)!==0&&c!==null?(c.return=a,B=c):tc(e)}}function tc(e){for(;B!==null;){var n=B;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ve||as(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Ve)if(t===null)l.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:kn(n.type,t.memoizedProps);l.componentDidUpdate(a,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var c=n.updateQueue;c!==null&&tf(n,c,l);break;case 3:var h=n.updateQueue;if(h!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}tf(n,h,t)}break;case 5:var y=n.stateNode;if(t===null&&n.flags&4){t=y;var w=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&t.focus();break;case"img":w.src&&(t.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var C=n.alternate;if(C!==null){var P=C.memoizedState;if(P!==null){var z=P.dehydrated;z!==null&&Or(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ve||n.flags&512&&xo(n)}catch(L){Ce(n,n.return,L)}}if(n===e){B=null;break}if(t=n.sibling,t!==null){t.return=n.return,B=t;break}B=n.return}}function rc(e){for(;B!==null;){var n=B;if(n===e){B=null;break}var t=n.sibling;if(t!==null){t.return=n.return,B=t;break}B=n.return}}function ic(e){for(;B!==null;){var n=B;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{as(4,n)}catch(w){Ce(n,t,w)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var a=n.return;try{l.componentDidMount()}catch(w){Ce(n,a,w)}}var c=n.return;try{xo(n)}catch(w){Ce(n,c,w)}break;case 5:var h=n.return;try{xo(n)}catch(w){Ce(n,h,w)}}}catch(w){Ce(n,n.return,w)}if(n===e){B=null;break}var y=n.sibling;if(y!==null){y.return=n.return,B=y;break}B=n.return}}var hp=Math.ceil,us=W.ReactCurrentDispatcher,Eo=W.ReactCurrentOwner,hn=W.ReactCurrentBatchConfig,oe=0,$e=null,Pe=null,Be=0,an=0,Zt=Zn(0),Ae=0,Xr=null,kt=0,fs=0,Co=0,Zr=null,en=null,bo=0,er=1/0,Kn=null,cs=!1,To=null,st=null,ds=!1,lt=null,hs=0,ei=0,Oo=null,ps=-1,gs=0;function He(){return(oe&6)!==0?be():ps!==-1?ps:ps=be()}function ot(e){return(e.mode&1)===0?1:(oe&2)!==0&&Be!==0?Be&-Be:Gh.transition!==null?(gs===0&&(gs=Ga()),gs):(e=de,e!==0||(e=window.event,e=e===void 0?16:su(e.type)),e)}function Nn(e,n,t,l){if(50<ei)throw ei=0,Oo=null,Error(i(185));Nr(e,t,l),((oe&2)===0||e!==$e)&&(e===$e&&((oe&2)===0&&(fs|=t),Ae===4&&at(e,Be)),nn(e,l),t===1&&oe===0&&(n.mode&1)===0&&(er=be()+500,Ki&&nt()))}function nn(e,n){var t=e.callbackNode;Gd(e,n);var l=Ni(e,e===$e?Be:0);if(l===0)t!==null&&Qa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(t!=null&&Qa(t),n===1)e.tag===0?Yh(lc.bind(null,e)):Vu(lc.bind(null,e)),Wh(function(){(oe&6)===0&&nt()}),t=null;else{switch(Ja(l)){case 1:t=ol;break;case 4:t=qa;break;case 16:t=vi;break;case 536870912:t=Ya;break;default:t=vi}t=pc(t,sc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function sc(e,n){if(ps=-1,gs=0,(oe&6)!==0)throw Error(i(327));var t=e.callbackNode;if(nr()&&e.callbackNode!==t)return null;var l=Ni(e,e===$e?Be:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=ms(e,l);else{n=l;var a=oe;oe|=2;var c=ac();($e!==e||Be!==n)&&(Kn=null,er=be()+500,St(e,n));do try{mp();break}catch(y){oc(e,y)}while(!0);Hl(),us.current=c,oe=a,Pe!==null?n=0:($e=null,Be=0,n=Ae)}if(n!==0){if(n===2&&(a=al(e),a!==0&&(l=a,n=Lo(e,a))),n===1)throw t=Xr,St(e,0),at(e,l),nn(e,be()),t;if(n===6)at(e,l);else{if(a=e.current.alternate,(l&30)===0&&!pp(a)&&(n=ms(e,l),n===2&&(c=al(e),c!==0&&(l=c,n=Lo(e,c))),n===1))throw t=Xr,St(e,0),at(e,l),nn(e,be()),t;switch(e.finishedWork=a,e.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Nt(e,en,Kn);break;case 3:if(at(e,l),(l&130023424)===l&&(n=bo+500-be(),10<n)){if(Ni(e,0)!==0)break;if(a=e.suspendedLanes,(a&l)!==l){He(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=jl(Nt.bind(null,e,en,Kn),n);break}Nt(e,en,Kn);break;case 4:if(at(e,l),(l&4194240)===l)break;for(n=e.eventTimes,a=-1;0<l;){var h=31-wn(l);c=1<<h,h=n[h],h>a&&(a=h),l&=~c}if(l=a,l=be()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*hp(l/1960))-l,10<l){e.timeoutHandle=jl(Nt.bind(null,e,en,Kn),l);break}Nt(e,en,Kn);break;case 5:Nt(e,en,Kn);break;default:throw Error(i(329))}}}return nn(e,be()),e.callbackNode===t?sc.bind(null,e):null}function Lo(e,n){var t=Zr;return e.current.memoizedState.isDehydrated&&(St(e,n).flags|=256),e=ms(e,n),e!==2&&(n=en,en=t,n!==null&&Io(n)),e}function Io(e){en===null?en=e:en.push.apply(en,e)}function pp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var a=t[l],c=a.getSnapshot;a=a.value;try{if(!_n(c(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function at(e,n){for(n&=~Co,n&=~fs,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-wn(n),l=1<<t;e[t]=-1,n&=~l}}function lc(e){if((oe&6)!==0)throw Error(i(327));nr();var n=Ni(e,0);if((n&1)===0)return nn(e,be()),null;var t=ms(e,n);if(e.tag!==0&&t===2){var l=al(e);l!==0&&(n=l,t=Lo(e,l))}if(t===1)throw t=Xr,St(e,0),at(e,n),nn(e,be()),t;if(t===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nt(e,en,Kn),nn(e,be()),null}function Po(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(er=be()+500,Ki&&nt())}}function xt(e){lt!==null&&lt.tag===0&&(oe&6)===0&&nr();var n=oe;oe|=1;var t=hn.transition,l=de;try{if(hn.transition=null,de=1,e)return e()}finally{de=l,hn.transition=t,oe=n,(oe&6)===0&&nt()}}function zo(){an=Zt.current,_e(Zt)}function St(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Vh(t)),Pe!==null)for(t=Pe.return;t!==null;){var l=t;switch(Fl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Fi();break;case 3:Gt(),_e(Je),_e(Fe),eo();break;case 5:Xl(l);break;case 4:Gt();break;case 13:_e(xe);break;case 19:_e(xe);break;case 10:Ql(l.type._context);break;case 22:case 23:zo()}t=t.return}if($e=e,Pe=e=ut(e.current,null),Be=an=n,Ae=0,Xr=null,Co=fs=kt=0,en=Zr=null,wt!==null){for(n=0;n<wt.length;n++)if(t=wt[n],l=t.interleaved,l!==null){t.interleaved=null;var a=l.next,c=t.pending;if(c!==null){var h=c.next;c.next=a,l.next=h}t.pending=l}wt=null}return e}function oc(e,n){do{var t=Pe;try{if(Hl(),Zi.current=rs,es){for(var l=Se.memoizedState;l!==null;){var a=l.queue;a!==null&&(a.pending=null),l=l.next}es=!1}if(vt=0,je=ze=Se=null,Hr=!1,Qr=0,Eo.current=null,t===null||t.return===null){Ae=1,Xr=n,Pe=null;break}e:{var c=e,h=t.return,y=t,w=n;if(n=Be,y.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var C=w,P=y,z=P.tag;if((P.mode&1)===0&&(z===0||z===11||z===15)){var L=P.alternate;L?(P.updateQueue=L.updateQueue,P.memoizedState=L.memoizedState,P.lanes=L.lanes):(P.updateQueue=null,P.memoizedState=null)}var D=Pf(h);if(D!==null){D.flags&=-257,zf(D,h,y,c,n),D.mode&1&&If(c,C,n),n=D,w=C;var K=n.updateQueue;if(K===null){var H=new Set;H.add(w),n.updateQueue=H}else K.add(w);break e}else{if((n&1)===0){If(c,C,n),Ao();break e}w=Error(i(426))}}else if(ke&&y.mode&1){var Te=Pf(h);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),zf(Te,h,y,c,n),Vl(Jt(w,y));break e}}c=w=Jt(w,y),Ae!==4&&(Ae=2),Zr===null?Zr=[c]:Zr.push(c),c=h;do{switch(c.tag){case 3:c.flags|=65536,n&=-n,c.lanes|=n;var x=Of(c,w,n);nf(c,x);break e;case 1:y=w;var _=c.type,S=c.stateNode;if((c.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(st===null||!st.has(S)))){c.flags|=65536,n&=-n,c.lanes|=n;var A=Lf(c,y,n);nf(c,A);break e}}c=c.return}while(c!==null)}fc(t)}catch(Q){n=Q,Pe===t&&t!==null&&(Pe=t=t.return);continue}break}while(!0)}function ac(){var e=us.current;return us.current=rs,e===null?rs:e}function Ao(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),$e===null||(kt&268435455)===0&&(fs&268435455)===0||at($e,Be)}function ms(e,n){var t=oe;oe|=2;var l=ac();($e!==e||Be!==n)&&(Kn=null,St(e,n));do try{gp();break}catch(a){oc(e,a)}while(!0);if(Hl(),oe=t,us.current=l,Pe!==null)throw Error(i(261));return $e=null,Be=0,Ae}function gp(){for(;Pe!==null;)uc(Pe)}function mp(){for(;Pe!==null&&!Fd();)uc(Pe)}function uc(e){var n=hc(e.alternate,e,an);e.memoizedProps=e.pendingProps,n===null?fc(e):Pe=n,Eo.current=null}function fc(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=ap(t,n,an),t!==null){Pe=t;return}}else{if(t=up(t,n),t!==null){t.flags&=32767,Pe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Pe=null;return}}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);Ae===0&&(Ae=5)}function Nt(e,n,t){var l=de,a=hn.transition;try{hn.transition=null,de=1,yp(e,n,t,l)}finally{hn.transition=a,de=l}return null}function yp(e,n,t,l){do nr();while(lt!==null);if((oe&6)!==0)throw Error(i(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var c=t.lanes|t.childLanes;if(Jd(e,c),e===$e&&(Pe=$e=null,Be=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ds||(ds=!0,pc(vi,function(){return nr(),null})),c=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||c){c=hn.transition,hn.transition=null;var h=de;de=1;var y=oe;oe|=4,Eo.current=null,cp(e,t),ec(t,e),Mh(zl),bi=!!Pl,zl=Pl=null,e.current=t,dp(t),Ud(),oe=y,de=h,hn.transition=c}else e.current=t;if(ds&&(ds=!1,lt=e,hs=a),c=e.pendingLanes,c===0&&(st=null),Wd(t.stateNode),nn(e,be()),n!==null)for(l=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],l(a.value,{componentStack:a.stack,digest:a.digest});if(cs)throw cs=!1,e=To,To=null,e;return(hs&1)!==0&&e.tag!==0&&nr(),c=e.pendingLanes,(c&1)!==0?e===Oo?ei++:(ei=0,Oo=e):ei=0,nt(),null}function nr(){if(lt!==null){var e=Ja(hs),n=hn.transition,t=de;try{if(hn.transition=null,de=16>e?16:e,lt===null)var l=!1;else{if(e=lt,lt=null,hs=0,(oe&6)!==0)throw Error(i(331));var a=oe;for(oe|=4,B=e.current;B!==null;){var c=B,h=c.child;if((B.flags&16)!==0){var y=c.deletions;if(y!==null){for(var w=0;w<y.length;w++){var C=y[w];for(B=C;B!==null;){var P=B;switch(P.tag){case 0:case 11:case 15:Jr(8,P,c)}var z=P.child;if(z!==null)z.return=P,B=z;else for(;B!==null;){P=B;var L=P.sibling,D=P.return;if(Yf(P),P===C){B=null;break}if(L!==null){L.return=D,B=L;break}B=D}}}var K=c.alternate;if(K!==null){var H=K.child;if(H!==null){K.child=null;do{var Te=H.sibling;H.sibling=null,H=Te}while(H!==null)}}B=c}}if((c.subtreeFlags&2064)!==0&&h!==null)h.return=c,B=h;else e:for(;B!==null;){if(c=B,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:Jr(9,c,c.return)}var x=c.sibling;if(x!==null){x.return=c.return,B=x;break e}B=c.return}}var _=e.current;for(B=_;B!==null;){h=B;var S=h.child;if((h.subtreeFlags&2064)!==0&&S!==null)S.return=h,B=S;else e:for(h=_;B!==null;){if(y=B,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:as(9,y)}}catch(Q){Ce(y,y.return,Q)}if(y===h){B=null;break e}var A=y.sibling;if(A!==null){A.return=y.return,B=A;break e}B=y.return}}if(oe=a,nt(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(ki,e)}catch{}l=!0}return l}finally{de=t,hn.transition=n}}return!1}function cc(e,n,t){n=Jt(t,n),n=Of(e,n,1),e=rt(e,n,1),n=He(),e!==null&&(Nr(e,1,n),nn(e,n))}function Ce(e,n,t){if(e.tag===3)cc(e,e,t);else for(;n!==null;){if(n.tag===3){cc(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(st===null||!st.has(l))){e=Jt(t,e),e=Lf(n,e,1),n=rt(n,e,1),e=He(),n!==null&&(Nr(n,1,e),nn(n,e));break}}n=n.return}}function wp(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),n=He(),e.pingedLanes|=e.suspendedLanes&t,$e===e&&(Be&t)===t&&(Ae===4||Ae===3&&(Be&130023424)===Be&&500>be()-bo?St(e,0):Co|=t),nn(e,n)}function dc(e,n){n===0&&((e.mode&1)===0?n=1:(n=Si,Si<<=1,(Si&130023424)===0&&(Si=4194304)));var t=He();e=Bn(e,n),e!==null&&(Nr(e,n,t),nn(e,t))}function _p(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),dc(e,t)}function vp(e,n){var t=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),dc(e,t)}var hc;hc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Je.current)Ze=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Ze=!1,op(e,n,t);Ze=(e.flags&131072)!==0}else Ze=!1,ke&&(n.flags&1048576)!==0&&Wu(n,Wi,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;ls(e,n),e=n.pendingProps;var a=Kt(n,Fe.current);Yt(n,t),a=ro(null,n,l,e,a,t);var c=io();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(l)?(c=!0,Ui(n)):c=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Gl(n),a.updater=is,n.stateNode=a,a._reactInternals=n,fo(n,l,e,t),n=go(null,n,l,!0,c,t)):(n.tag=0,ke&&c&&Bl(n),We(null,n,a,t),n=n.child),n;case 16:l=n.elementType;e:{switch(ls(e,n),e=n.pendingProps,a=l._init,l=a(l._payload),n.type=l,a=n.tag=xp(l),e=kn(l,e),a){case 0:n=po(null,n,l,e,t);break e;case 1:n=Df(null,n,l,e,t);break e;case 11:n=Af(null,n,l,e,t);break e;case 14:n=jf(null,n,l,kn(l.type,e),t);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,a=n.pendingProps,a=n.elementType===l?a:kn(l,a),po(e,n,l,a,t);case 1:return l=n.type,a=n.pendingProps,a=n.elementType===l?a:kn(l,a),Df(e,n,l,a,t);case 3:e:{if(Bf(n),e===null)throw Error(i(387));l=n.pendingProps,c=n.memoizedState,a=c.element,ef(e,n),Ji(n,l,null,t);var h=n.memoizedState;if(l=h.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){a=Jt(Error(i(423)),n),n=Ff(e,n,l,t,a);break e}else if(l!==a){a=Jt(Error(i(424)),n),n=Ff(e,n,l,t,a);break e}else for(on=Xn(n.stateNode.containerInfo.firstChild),ln=n,ke=!0,vn=null,t=Xu(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ht(),l===a){n=Un(e,n,t);break e}We(e,n,l,t)}n=n.child}return n;case 5:return rf(n),e===null&&Kl(n),l=n.type,a=n.pendingProps,c=e!==null?e.memoizedProps:null,h=a.children,Al(l,a)?h=null:c!==null&&Al(l,c)&&(n.flags|=32),Rf(e,n),We(e,n,h,t),n.child;case 6:return e===null&&Kl(n),null;case 13:return Uf(e,n,t);case 4:return Jl(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Qt(n,null,l,t):We(e,n,l,t),n.child;case 11:return l=n.type,a=n.pendingProps,a=n.elementType===l?a:kn(l,a),Af(e,n,l,a,t);case 7:return We(e,n,n.pendingProps,t),n.child;case 8:return We(e,n,n.pendingProps.children,t),n.child;case 12:return We(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(l=n.type._context,a=n.pendingProps,c=n.memoizedProps,h=a.value,pe(qi,l._currentValue),l._currentValue=h,c!==null)if(_n(c.value,h)){if(c.children===a.children&&!Je.current){n=Un(e,n,t);break e}}else for(c=n.child,c!==null&&(c.return=n);c!==null;){var y=c.dependencies;if(y!==null){h=c.child;for(var w=y.firstContext;w!==null;){if(w.context===l){if(c.tag===1){w=Fn(-1,t&-t),w.tag=2;var C=c.updateQueue;if(C!==null){C=C.shared;var P=C.pending;P===null?w.next=w:(w.next=P.next,P.next=w),C.pending=w}}c.lanes|=t,w=c.alternate,w!==null&&(w.lanes|=t),ql(c.return,t,n),y.lanes|=t;break}w=w.next}}else if(c.tag===10)h=c.type===n.type?null:c.child;else if(c.tag===18){if(h=c.return,h===null)throw Error(i(341));h.lanes|=t,y=h.alternate,y!==null&&(y.lanes|=t),ql(h,t,n),h=c.sibling}else h=c.child;if(h!==null)h.return=c;else for(h=c;h!==null;){if(h===n){h=null;break}if(c=h.sibling,c!==null){c.return=h.return,h=c;break}h=h.return}c=h}We(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,l=n.pendingProps.children,Yt(n,t),a=cn(a),l=l(a),n.flags|=1,We(e,n,l,t),n.child;case 14:return l=n.type,a=kn(l,n.pendingProps),a=kn(l.type,a),jf(e,n,l,a,t);case 15:return $f(e,n,n.type,n.pendingProps,t);case 17:return l=n.type,a=n.pendingProps,a=n.elementType===l?a:kn(l,a),ls(e,n),n.tag=1,Xe(l)?(e=!0,Ui(n)):e=!1,Yt(n,t),bf(n,l,a),fo(n,l,a,t),go(null,n,l,!0,e,t);case 19:return Vf(e,n,t);case 22:return Mf(e,n,t)}throw Error(i(156,n.tag))};function pc(e,n){return Ha(e,n)}function kp(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,l){return new kp(e,n,t,l)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ne)return 11;if(e===Tn)return 14}return 2}function ut(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ys(e,n,t,l,a,c){var h=2;if(l=e,typeof e=="function")jo(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case G:return Et(t.children,a,c,n);case U:h=8,a|=8;break;case le:return e=pn(12,t,n,a|2),e.elementType=le,e.lanes=c,e;case ye:return e=pn(13,t,n,a),e.elementType=ye,e.lanes=c,e;case Ye:return e=pn(19,t,n,a),e.elementType=Ye,e.lanes=c,e;case Ee:return ws(t,a,c,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:h=10;break e;case Re:h=9;break e;case Ne:h=11;break e;case Tn:h=14;break e;case Ge:h=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=pn(h,t,n,a),n.elementType=e,n.type=l,n.lanes=c,n}function Et(e,n,t,l){return e=pn(7,e,l,n),e.lanes=t,e}function ws(e,n,t,l){return e=pn(22,e,l,n),e.elementType=Ee,e.lanes=t,e.stateNode={isHidden:!1},e}function $o(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function Mo(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Sp(e,n,t,l,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=l,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ro(e,n,t,l,a,c,h,y,w){return e=new Sp(e,n,t,y,w),n===1?(n=1,c===!0&&(n|=8)):n=0,c=pn(3,null,null,n),e.current=c,c.stateNode=e,c.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gl(c),e}function Np(e,n,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:l==null?null:""+l,children:e,containerInfo:n,implementation:t}}function gc(e){if(!e)return et;e=e._reactInternals;e:{if(ht(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var t=e.type;if(Xe(t))return Uu(e,t,n)}return n}function mc(e,n,t,l,a,c,h,y,w){return e=Ro(t,l,!0,e,a,c,h,y,w),e.context=gc(null),t=e.current,l=He(),a=ot(t),c=Fn(l,a),c.callback=n??null,rt(t,c,a),e.current.lanes=a,Nr(e,a,l),nn(e,l),e}function _s(e,n,t,l){var a=n.current,c=He(),h=ot(a);return t=gc(t),n.context===null?n.context=t:n.pendingContext=t,n=Fn(c,h),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=rt(a,n,h),e!==null&&(Nn(e,a,h,c),Gi(e,a,h)),h}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Do(e,n){yc(e,n),(e=e.alternate)&&yc(e,n)}function Ep(){return null}var wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bo(e){this._internalRoot=e}ks.prototype.render=Bo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));_s(e,n,null,null)},ks.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xt(function(){_s(null,e,null,null)}),n[$n]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var n=eu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Yn.length&&n!==0&&n<Yn[t].priority;t++);Yn.splice(t,0,e),t===0&&ru(e)}};function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _c(){}function Cp(e,n,t,l,a){if(a){if(typeof l=="function"){var c=l;l=function(){var C=vs(h);c.call(C)}}var h=mc(n,l,e,0,null,!1,!1,"",_c);return e._reactRootContainer=h,e[$n]=h.current,Rr(e.nodeType===8?e.parentNode:e),xt(),h}for(;a=e.lastChild;)e.removeChild(a);if(typeof l=="function"){var y=l;l=function(){var C=vs(w);y.call(C)}}var w=Ro(e,0,!1,null,null,!1,!1,"",_c);return e._reactRootContainer=w,e[$n]=w.current,Rr(e.nodeType===8?e.parentNode:e),xt(function(){_s(n,w,t,l)}),w}function Ss(e,n,t,l,a){var c=t._reactRootContainer;if(c){var h=c;if(typeof a=="function"){var y=a;a=function(){var w=vs(h);y.call(w)}}_s(n,h,e,a)}else h=Cp(t,n,e,a,l);return vs(h)}Xa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Sr(n.pendingLanes);t!==0&&(fl(n,t|1),nn(n,be()),(oe&6)===0&&(er=be()+500,nt()))}break;case 13:xt(function(){var l=Bn(e,1);if(l!==null){var a=He();Nn(l,e,1,a)}}),Do(e,1)}},cl=function(e){if(e.tag===13){var n=Bn(e,134217728);if(n!==null){var t=He();Nn(n,e,134217728,t)}Do(e,134217728)}},Za=function(e){if(e.tag===13){var n=ot(e),t=Bn(e,n);if(t!==null){var l=He();Nn(t,e,n,l)}Do(e,n)}},eu=function(){return de},nu=function(e,n){var t=de;try{return de=e,n()}finally{de=t}},rl=function(e,n,t){switch(n){case"input":if(Ys(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var a=Bi(l);if(!a)throw Error(i(90));Ea(l),Ys(l,a)}}}break;case"textarea":La(e,t);break;case"select":n=t.value,n!=null&&It(e,!!t.multiple,n,!1)}},Da=Po,Ba=xt;var bp={usingClientEntryPoint:!1,Events:[Fr,Ft,Bi,Ma,Ra,Po]},ni={findFiberByHostInstance:pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tp={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Va(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||Ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{ki=Ns.inject(Tp),On=Ns}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp,tn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fo(n))throw Error(i(200));return Np(e,n,null,t)},tn.createRoot=function(e,n){if(!Fo(e))throw Error(i(299));var t=!1,l="",a=wc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Ro(e,1,!1,null,null,t,!1,l,a),e[$n]=n.current,Rr(e.nodeType===8?e.parentNode:e),new Bo(n)},tn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Va(n),e=e===null?null:e.stateNode,e},tn.flushSync=function(e){return xt(e)},tn.hydrate=function(e,n,t){if(!xs(n))throw Error(i(200));return Ss(null,e,n,!0,t)},tn.hydrateRoot=function(e,n,t){if(!Fo(e))throw Error(i(405));var l=t!=null&&t.hydratedSources||null,a=!1,c="",h=wc;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(c=t.identifierPrefix),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),n=mc(n,null,e,1,t??null,a,!1,c,h),e[$n]=n.current,Rr(e),l)for(e=0;e<l.length;e++)t=l[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new ks(n)},tn.render=function(e,n,t){if(!xs(n))throw Error(i(200));return Ss(null,e,n,!1,t)},tn.unmountComponentAtNode=function(e){if(!xs(e))throw Error(i(40));return e._reactRootContainer?(xt(function(){Ss(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1},tn.unstable_batchedUpdates=Po,tn.unstable_renderSubtreeIntoContainer=function(e,n,t,l){if(!xs(t))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Ss(e,n,t,!1,l)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var bc;function $p(){if(bc)return Vo.exports;bc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Vo.exports=jp(),Vo.exports}var Tc;function Mp(){if(Tc)return Es;Tc=1;var s=$p();return Es.createRoot=s.createRoot,Es.hydrateRoot=s.hydrateRoot,Es}var Rp=Mp();const Oc=Object.assign({}),Qo=s=>{const r=Object.keys(Oc).find(i=>new RegExp(`/${s}\\.(jpe?g|png|webp)$`,"i").test(i));return r?Oc[r]:void 0},Dp=[{id:"boyar",name:"Боярин",theme:"Чин и опора",portrait:Qo("boyar"),appearance:"45 лет, узкое бледное лицо, длинная тёмная борода с проседью, глубоко посаженные серые глаза, высокий лоб, горбатый нос, усталый гордый взгляд, соболий воротник."},{id:"wife",name:"Жена",theme:"Приданое и хозяйство",portrait:Qo("wife"),appearance:"38 лет, овальное лицо, высокие скулы, спокойные серо-голубые глаза, тёмно-русые волосы под тёмным платком, тонкие губы, сдержанное упрямое выражение, тёмная шаль."},{id:"servant",name:"Слуга",theme:"Дело и слово",portrait:Qo("servant"),appearance:"65 лет, обветренное морщинистое лицо, редкая седая борода, глубоко посаженные добрые глаза, меховая шапка, латаный коричневый кафтан, усталое смиренное выражение."}],Bp=`# Фаза: Осень приезда (сентябрь–ноябрь 1662)
# Карточек: 30 (a01–a30)
# Спина: приезд, воевода, первый мороз, Николин день, смотр, уход в зиму.
# Ловушка со слугой: первое предложение — a23.

- id: a01
  act: autumn
  kind: spine
  title: Приезд
  text: |
    Сани встали у ворот острога, когда над рекой уже стыло, и пристав,
    откинув полость, сказал, что дальше не поедут. Ты сошёл на утоптанный
    снег и почувствовал, как сафьяновые сапоги сразу промёрзли, а соболий
    воротник, который в Москве казался тяжёлым, здесь не держал тепла. От
    реки тянуло сыростью и рыбой, из-за стены — дымом, и дым этот пах горько
    и близко, не так, как на московском дворе.

    Три месяца назад, в конце лета 1662 года, за тобой пришли прямо во двор,
    и утро того дня началось не с молитвы, а с чужих сапог на крыльце. Ты был боярином,
    сидел в приказе и подписывал бумаги, которые готовил не ты; одну из
    них потом назвали изменой, и на все вопросы отвечали коротко:
    «Государь велел». Вотчину отписали в казну, двор опечатали, сына
    оставили в Москве у дяди, а тебя с женой и старым слугой отправили
    сюда, в Тазовский острог, на вечное житьё. Три месяца тебя везли водой
    и волоком, с приставом и стрельцами, с наказной памятью за пазухой,
    и ты считал ночлеги: считать, сколько осталось, было
    страшнее.

    Старый казак поднял фонарь, оглядел твою обувь и мех на воротнике,
    потом сказал негромко, ни к кому не обращаясь: «Этот до Крещения не
    дотянет». Жена держала узел обеими руками, слуга прижимал к груди
    топор, как икону, и оба молчали: идти было некуда, а
    спрашивать не у кого. Ветер шевелил огонь в фонаре, и по снегу
    ходили длинные тени.

  choices:
    - id: look_around
      text: Молча пройти за казаком к избе и осмотреть её до темноты
      effects:
        hope: { boyar: +1, wife: +1 }
      next: a02
    - id: ask_prikaz
      text: Поблагодарить пристава и спросить, куда ставить сундук с пожитками
      effects:
        approval: { kazak: +1 }
        hope: { boyar: +1 }
      next: a02
    - id: stand_silent
      text: Постоять у ворот и запомнить, откуда тебя привезли этой осенью
      effects:
        hope: { boyar: -1 }
      next: a02

- id: a02
  act: autumn
  kind: spine
  title: Первая ночь
  text: |
    Изба, в которую вас привели, стояла низко, по самые окна вросшая в
    землю, и в ней было темнее, чем на дворе: три стены сложены из бревна,
    четвёртая из плах, и в пазах светились щели, сквозь которые тянуло так
    же, как с улицы. Печь складывали наспех, дымоход вышел кривой, и из
    устья пахло гарью и сыростью, а тепла не было вовсе. Под ногами хрустел
    иней, изо рта шёл пар, и ты понял, что первую ночь придётся спать в шубе,
    не снимая сапог.

    Слуга обошёл избу и сказал тихо, чтобы не слышала жена: «До утра
    хватит одной охапки, если вьюшку сразу не
    задвигать; задвинешь — угаром возьмёт, а угар не видно и не слышно».
    Жена растирала руки и молчала: в Москве у неё была печь,
    которая топилась сама, и человек, который её топил, а здесь такого
    человека не было. За стеной стояла такая темнота, что не было видно
    ни зги.

  choices:
    - id: burn_normally
      text: Затопить печь как следует и лечь спать в тепле
      effects:
        house: { fuel_days: -1 }
        hope: { wife: +2, servant: +1 }
      next: a03
    - id: save_wood
      text: Сэкономить охапку дров и лечь спать в шубах
      effects:
        health: { wife: -2, servant: -1 }
        hope: { wife: -2 }
      next: a03
    - id: let_servant_watch
      text: Оставить слугу у печи караулить огонь до утра
      effects:
        health: { servant: -2 }
        hope: { servant: +2 }
        personal: { idle_days: -1 }
      next: a03

- id: a03
  act: autumn
  kind: spine
  title: Воевода
  text: |
    Утром тебя повели в съезжую избу, и после ночного холода там
    показалось почти душно: печь была протоплена, на столе горела сальная
    свеча, а у стены сохли чьи-то мокрые тулупы, и от них пахло овчиной.
    Пальцы, которые на улице не гнулись, начали отходить и гореть, щёки
    запылали, и тепло это было болезненным, так что хотелось сесть на лавку
    и закрыть глаза. Воевода читал наказную память медленно, шевеля губами,
    и не предложил тебе сесть.

    Потом он поднял глаза и сказал ровно, как о деле решённом:
    «Живи, где указано, дальше двора не ходи, а к Рождеству чтоб не помер,
    мне за тебя отписку писать». Позади него дьяк уже макал перо в
    чернильницу, и от звука в горле становилось сухо:
    твоя жизнь теперь умещалась в чужой бумаге, которую будут читать
    вслух. Ты стоял с шапкой в руках и понимал, что в Москве этот человек
    подолгу ждал приёма у боярского крыльца.

  choices:
    - id: bow
      text: Поклониться воеводе низко и сказать, что всё понял
      effects:
        personal: { chin: -1 }
        approval: { voivode: +1 }
        hope: { boyar: -1 }
      next: a04
    - id: keep_back
      text: Стоять прямо и смотреть воеводе в глаза, не опуская головы
      effects:
        personal: { chin: +1 }
        approval: { voivode: -1 }
        hope: { boyar: +1 }
      next: a04
    - id: bribe
      text: Положить воеводе на стол серебро
      effects:
        personal: { dowry: -1 }
        approval: { voivode: +1 }
        hope: { wife: -2 }
      next: a04

- id: a04
  act: autumn
  kind: spine
  title: Бумага
  text: |
    Пристав положил на стол лист и придавил его ладонью, чтобы не
    подхватило сквозняком, а в листе было записано коротко и казённо, что
    ты доставлен, принят и определён на житьё, что отлучаться тебе не
    велено, что корм тебе не положен и что о том уже отписано в Тобольск.
    В углу стояла печать с орлом, и чернила на ней давно подсохли, а бумага
    пахла клеем и пылью. За маленьким окном шёл снег, и ты смотрел на
    него дольше, чем следовало, потому что после этого снега дороги назад уже
    не будет.

    «Подписывай», — сказал пристав и протянул перо, но не выпустил его
    сразу, а подержал в пальцах, взвешивая. Слуга за твоей спиной
    переступил с ноги на ногу, и скрип половицы прозвучал громче, чем
    следовало, а пристав глянул на него и усмехнулся. Ты взял перо, и оно
    оказалось тяжелее, чем помнилось по приказу, где ты подписывал такие
    же листы, не читая.

  choices:
    - id: sign
      text: Подписать бумагу, не читая, и вернуть перо приставу
      effects:
        flag: { registered: true }
        hope: { boyar: -1 }
      next: a05
    - id: read_first
      text: Прочитать бумагу до последней строки, не торопясь
      effects:
        personal: { opora: +1 }
        hope: { boyar: +1 }
      next: a05
    - id: argue
      text: Сказать, что печать не та, и не подписывать до утра
      effects:
        approval: { podyachiy: -1 }
        hope: { boyar: +1 }
      next: a05

- id: a05
  act: autumn
  kind: spine
  title: Первый ужин
  text: |
    К вечеру в котле кипела уха из мелкой рыбы, на столе лежали три ложки
    и четыре куска хлеба, и от одной охапки дров в избе стояло такое тепло,
    какого не было весь день. Голод к этому часу сделался тяжёлым и ровным,
    руки дрожали, и ты ловил себя на том, что считаешь куски хлеба глазами,
    как когда-то считал деньги в приказе. Жена делила поровну, но себе
    положила меньше и сказала, что не голодна, и ты видел, что это неправда.

    Слуга стоял у порога и не садился, пока не позовут: всю
    жизнь ел после господ и не знал, как это делается иначе. «Садись, —
    сказала ему жена, — нынче все равны», и он сел на самый край лавки,
    держа ложку, как держат чужую вещь. От тепла все трое впервые за день
    дышали ровно, и в этой тишине было слышно, как потрескивают дрова и как
    за стеной ходит ветер.

  choices:
    - id: share
      text: Разделить уху поровну на троих
      effects:
        house: { food_days: -1 }
        hope: { wife: +3, servant: +4 }
        personal: { opora: +1 }
      next: h_autumn_settle
    - id: feed_self
      text: Съесть свою долю молча и лечь спать, не глядя на них
      effects:
        house: { food_days: -1 }
        health: { boyar: +3 }
        hope: { wife: -3, servant: -2 }
      next: h_autumn_settle
    - id: give_to_wife
      text: Отдать свою долю жене
      effects:
        health: { boyar: -2 }
        satiety: { boyar: -1 }
        hope: { wife: +6, servant: +2 }
        personal: { opora: +1 }
      next: h_autumn_settle

- id: h_autumn_settle
  act: autumn
  kind: hub
  budget: 5
  title: Устроиться
  text: |
    До морозов оставалось недели две, и по утрам на лужах уже стоял лёд,
    который к полудню не всегда успевал сойти. Дом пустовал с прошлой
    весны: печь дымила в избу, пазы между брёвнами стояли без мха, кровля
    над сенями осела и держалась на одной гнилой жерди. В сенях лежали узлы
    с тем, что жена успела вывезти из Москвы, у стены стоял топор, дров
    было на четыре дня. Каждая незакрытая щель означала лишние дрова,
    которых и так не хватало.

    От сына с лета не пришло ни строки, и письмо в Москву надо было
    отправить, пока стоит санный путь. Жена спросила, с чего начнёшь, и в
    её голосе не было укора, только усталость. Слуга ждал у печи, держа
    наготове лучину, и поглядывал на вьюшку. Ты понимал, что успеешь
    немного и что выберет не он, а мороз, который придёт и покажет, что
    было важнее. «Начнём с того, без чего не прожить зимы», — сказал ты,
    и оба кивнули: спорить было не о чем.

  choices:
    - id: stove
      text: Разобраться с печью и вьюшкой
      next: a06
    - id: dowry
      text: Разобрать приданое и решить, что продать
      next: a07
    - id: letter
      text: Написать сыну письмо в Москву
      next: a08
    - id: wood
      text: Заготовить дров на зиму
      next: a09
    - id: moss
      text: Законопатить пазы мхом
      next: a31
    - id: roof
      text: Подпереть осевшую кровлю над сенями
      next: a41
    - id: forward
      text: Не трогать больше ничего до морозов
      next: a13

- id: a06
  act: autumn
  kind: side
  when:
    not:
      flag: done_a06
  on_enter:
    flag: { done_a06: true }
  title: Вьюшка
  text: |
    У печи слуга садился на корточки и показывал пальцем, где в дымоходе
    ход, и палец у него дрожал от старости. Он повторял одно и то же каждый
    вечер, и каждый вечер в избе кивали, а потом делали по-своему, потому
    что тепло хотелось сохранить, а слушать старика было долго. Ты тоже
    кивал, глядя на красные уголья, и думал о том, что дров осталось меньше,
    чем советов.

    «Вьюшку, пока уголья красные, не задвигай, — говорил он. — Угар не
    видно и не слышно, человек спит и не просыпается». Жена подавала ему
    воду, и он пил медленно, держа ковш обеими руками, а потом снова садился
    у печи, карауля собственные слова. В избе пахло дымом и мокрой
    шерстью, и от запаха клонило в сон.

  choices:
    - id: listen
      text: Запомнить, как старик закрывает вьюшку
      effects:
        flag: { knows_stove: true }
        hope: { servant: +3 }
        personal: { opora: +1 }
      next: h_autumn_settle
    - id: wave_off
      text: Махнуть рукой и решить, что старик попусту стращает
      effects:
        hope: { servant: -3 }
        personal: { chin: +1 }
      next: h_autumn_settle
    - id: check_self
      text: Самому проверить тягу и заслонку
      effects:
        health: { boyar: -1 }
        personal: { opora: +2 }
        skill: { hands: +1 }
      next: h_autumn_settle

- id: a07
  act: autumn
  kind: side
  when:
    not:
      flag: done_a07
  on_enter:
    flag: { done_a07: true }
  title: Женин узел
  text: |
    Жена развязала узел и разложила на лавке всё, что осталось от прежней
    жизни: плат, шитый золотом по шёлку, шубу, серебро, отрез сукна, иглы,
    маленькое зеркальце в оправе. Шесть вещей она выкладывала ровно, с
    промежутками, как раскладывают на столе у покойника, и подолгу смотрела
    на каждую, не поднимая глаз. В избе было холодно, и от её дыхания над
    лавкой стоял пар.

    «Это продавать нельзя, — сказала она наконец, не оборачиваясь. —
    Продадим, и всё, кончились». Ты стоял у неё за спиной и видел, как она
    провела пальцем по вышитым травам, проверяя, крепко ли держится
    золото, и по тому, как она это делала, было понятно, что она прощается.
    Слуга у печи делал вид, что занят лучиной, и не поднимал головы.

    К вечеру зашла жена казака, здешняя, крещёная, говорила медленно, подбирая
    слова. Принесла туесок рыбьей муки и связку мороженых налимов, показала,
    как с этим варят похлёбку, и сказала, что за такое здесь не платят, а
    просто живут рядом. Уходя, она взяла плат с лавки и подержала его у окна,
    разглядывая вышитые травы, — таких узоров здесь не видел никто.

  choices:
    - id: keep
      text: Не трогать узел и оставить всё так, как она разложила
      effects:
        hope: { wife: +4 }
      next: h_autumn_settle
    - id: sell_plat
      text: Продать шитый плат и купить на вырученное хлеба
      effects:
        personal: { dowry: -1, chin: -2 }
        house: { food_days: +2 }
        hope: { wife: -8 }
      next: h_autumn_settle
    - id: give_kazachka
      text: Отдать плат казачке, раз уж ей так глянулся узор
      effects:
        personal: { dowry: -1 }
        approval: { kazachka: +2, kazak: +1 }
        hope: { wife: -4 }
      next: h_autumn_settle

- id: a08
  act: autumn
  kind: side
  when:
    not:
      flag: done_a08
  on_enter:
    flag: { done_a08: true }
  title: Письмо сыну
  text: |
    В столе нашлась бумага и высохшие чернила, которые пришлось разводить
    водой и долго растирать в черепке, пока они снова не стали чёрными.
    Слуга держал свечу и наклонял её так, чтобы воск не капал на лист, а ты
    сидел над столом и не знал, с чего начать: письмо в Москву
    шло месяца четыре и доходило не всегда. В избе было тихо, только за
    стеной ходил ветер и где-то далеко лаяла собака.

    Сын жил у дяди с лета, и от него не пришло ни одной строки, хотя
    писать он умел. Жена стояла в дверях и ждала, что ты скажешь вслух; ты обмакнул перо и
    понял, что не знаешь, что хуже — написать правду или написать, что всё
    хорошо. «Пиши, что живы», — сказала она наконец, и голос у неё сорвался.

  choices:
    - id: write
      text: Написать, что все живы и что вы ждёте его письма
      effects:
        flag: { letter_sent: true }
        hope: { boyar: +4, wife: +4 }
        personal: { opora: +2 }
      next: h_autumn_settle
    - id: write_truth
      text: Написать всю правду о холоде и хлебе и о том, что ждёте весны
      effects:
        flag: { letter_sent: true, letter_hard: true }
        hope: { boyar: -2, wife: -3 }
        personal: { chin: -1, opora: +2 }
      next: h_autumn_settle
    - id: postpone
      text: Отложить письмо до весны
      effects:
        hope: { wife: -3 }
        personal: { chin: +1 }
      next: h_autumn_settle

- id: a09
  act: autumn
  kind: side
  when:
    not:
      flag: done_a09
  on_enter:
    flag: { done_a09: true }
  title: Дрова
  text: |
    До морозов оставалось недели две, а дров лежало на четыре дня, и
    поленница у стены таяла быстрее, чем ты успевал об этом подумать. Казак
    продавал берёзу, но брал дорого и в долг не давал, а в лесу сухостой
    стоял стеной, только идти до него было полдня пешком, и по первому снегу
    там уже видели волчий след.

    «Серебро или вещь, — сказал казак, не поднимаясь с лавки. — Даром лес
    не стоит, и топор твой мне не нужен». Слуга стоял у двери и молчал:
    дров надо много, а сил у него мало, и оба вы
    понимали это одновременно. Ты вышел на двор, и мороз сразу взял за щёки,
    проверяя, готов ли ты идти за лесом.

  choices:
    - id: buy
      text: Купить у казака берёзовых дров на всё до весны
      effects:
        house: { fuel_days: +4 }
        personal: { dowry: -1 }
        approval: { kazak: +1 }
      next: h_autumn_settle
    - id: chop_self
      text: Пойти в лес самому с топором и санками
      effects:
        house: { fuel_days: +3 }
        health: { boyar: -6 }
        skill: { hands: +3 }
        personal: { opora: +2, chin: -2 }
      next: h_autumn_settle
    - id: send_servant
      text: Послать старого слугу за сухостоем
      effects:
        house: { fuel_days: +2 }
        health: { servant: -7 }
        personal: { idle_days: -3 }
        hope: { servant: +2 }
      next: h_autumn_settle

- id: a31
  act: autumn
  kind: side
  when:
    not:
      flag: done_a31
  on_enter:
    flag: { done_a31: true }
  title: Мох
  text: |
    Пазы между брёвнами светились насквозь, и когда с реки дунуло, в избе
    по полу понесло снежную пыль, как на дворе. Мох был мокрый, другого
    поблизости не нашлось, и набивать его следовало плотно, пока брёвна не
    схватились морозом: потом он уже не ложился. Работа была
    простая и долгая, а пальцы в рукавицах не слушались и роняли мох на пол.

    «До морозов успеть надо, — торопил слуга, стоя рядом с мешком. — Потом
    мох не ляжет, и зима выдует избу, как трубу». Жена работала быстрее тебя:
    она скручивала мох тугим жгутом и вдавливала в щель большим пальцем, и
    по её рукам было видно, сколько ещё осталось. Ты смотрел на её руки,
    красные от холода, и думал о том, что в Москве ей этого делать не
    приходилось.

  choices:
    - id: caulk
      text: Конопатить пазы самому, не жалея рук и времени
      effects:
        house: { izba: +1 }
        health: { boyar: -3 }
        skill: { hands: +2 }
        personal: { opora: +2, chin: -2 }
      next: h_autumn_settle
    - id: pay
      text: Заплатить казаку за конопатку
      effects:
        house: { izba: +1 }
        personal: { dowry: -1 }
        approval: { kazak: +1 }
      next: h_autumn_settle
    - id: later
      text: Отложить конопатку до настоящих морозов
      effects:
        hope: { wife: -2 }
        personal: { chin: +1 }
      next: h_autumn_settle

- id: a11
  act: autumn
  kind: hub
  budget: 4
  title: До морозов
  text: |
    Мороз уже держался по утрам, и по наледям на тропе было видно, что
    скоро он возьмётся всерьёз. Завалинка у стены осыпалась, кадка в сенях
    рассохлась и текла по шву, окно было затянуто тряпьём вместо слюды, а
    из-под двери тянуло так, что вода в ушате за ночь затягивалась льдом.
    Печь после первой топки снова дымила. Соли осталось на дне тряпицы,
    муки — до Николина дня, река встала, и казак уже ходил по первому льду
    с пешней.

    Слуга ждал у двери с топором, жена пересчитывала муку и молчала, и по
    их лицам ты видел, что оба уже решили каждый по-своему. «Одно выберем,
    другое останется», — сказал ты вслух, и никто не стал спорить. За стеной
    скрипел снег под чьими-то шагами, и этот звук напоминал, что время идёт.

  choices:
    - id: zavalinka
      text: Утеплить завалинку землёй и листом
      next: a12
    - id: kadka
      text: Починить рассохшуюся кадку
      next: a14
    - id: fish
      text: Пойти на лёд за рыбой
      next: a34
    - id: salt
      text: Взять соль у купца в обмен на сукно
      next: a35
    - id: stove
      text: Разобраться, отчего печь дымит
      next: a36
    - id: door
      text: Утеплить дверь вторым войлоком
      next: a44
    - id: bread
      text: Испечь хлеб в своей печи
      next: a40
    - id: window
      text: Затянуть окно слюдой
      next: a47
    - id: forward
      text: Переждать до Николина дня
      next: a15

- id: a12
  act: autumn
  kind: side
  when:
    not:
      flag: done_a12
  on_enter:
    flag: { done_a12: true }
  title: Завалинка
  text: |
    Слуга таскал землю к стене в мешке, руки у него тряслись, но он не
    останавливался и не давал себе передышки. «Пока таскаю, я ещё нужен», —
    говорил он, и голос у него при этом дрожал. Завалинка должна
    была закрыть нижние венцы до морозов, иначе стена промёрзла бы насквозь,
    и тогда никакая печь не спасла бы.

    Ты взял вторую лопату и встал рядом, и он глянул на тебя с таким
    удивлением человека, который ждал этого давно и перестал. Земля была
    мёрзлая сверху и шла тяжело, лопата звенела, а он всё равно работал
    быстрее тебя. К вечеру под стеной лежал вал, и от него в избе стало
    заметно теплее, хотя дров не прибавилось.

  choices:
    - id: let_him
      text: Пусть носит землю, раз сам просит
      effects:
        house: { izba: +1 }
        health: { servant: -6 }
        personal: { idle_days: -3, opora: +1 }
        hope: { servant: +4 }
      next: a11
    - id: help_him
      text: Взяться за лопату вместе с ним
      effects:
        house: { izba: +1 }
        health: { boyar: -3, servant: -2 }
        personal: { opora: +3, chin: -2 }
        hope: { servant: +6 }
      next: a11
    - id: stop_him
      text: Отобрать у него мешок и отправить к печи
      effects:
        personal: { idle_days: +1 }
        hope: { servant: -2 }
        health: { servant: +2 }
      next: a13

- id: a13
  act: autumn
  kind: event
  title: Первый мороз
  text: |
    Ночью кадку разорвало морозом, вода ушла на пол и к утру застыла
    ледяной лепёшкой, а на дверной скобе выросла шапка инея в два пальца.
    В избе стояла такая стынь, что пар изо рта висел в воздухе и не сразу
    расходился; жена дышала в платок, а слуга не мог разогнуть пальцы. До
    настоящих морозов оставалось меньше недели.

    «Если так и дальше, — сказал слуга, стуча зубами, — к Рождеству и
    топить будет нечем, и греться некому». Он стоял у печи и держал руки над
    ещё тёплыми кирпичами, а жена смотрела на лёд на полу и молчала. За
    стеной трещали от мороза брёвна, и этот треск был слышен в избе, как
    выстрел.

  choices:
    - id: burn_strong
      text: Топить сильно, не жалея двух охапок дров
      effects:
        house: { fuel_days: -2 }
        health: { wife: +2, servant: +3 }
        hope: { wife: +3 }
      next: a11
    - id: burn_light
      text: Топить вполсилы и беречь дрова до Николина дня
      effects:
        house: { fuel_days: -1 }
        health: { boyar: -2, wife: -4, servant: -5 }
        hope: { wife: -4 }
      next: a11
    - id: seal_window
      text: Заткнуть окно тряпьём и завесить его изнутри
      effects:
        house: { izba: +1 }
        health: { boyar: -2 }
        skill: { hands: +2 }
        personal: { opora: +2, chin: -1 }
      next: a11

- id: a14
  act: autumn
  kind: side
  when:
    not:
      flag: done_a14
  on_enter:
    flag: { done_a14: true }
  title: Кадка
  text: |
    Кадку разорвало морозом по обручам, и теперь воду приходилось носить
    каждый день, а вёдра обмерзали так, что за них нельзя было взяться голой
    рукой. Слуга предложил стянуть кадку обручем и сказал, что до весны она
    дотянет, если держать её в сенях, а не в тепле. Ты смотрел на
    рассохшиеся клёпки и понимал, что починка займёт весь вечер.

    Казак, который зашёл во двор, посмеялся и сказал, что новую продаст
    дешевле, чем ты потратишь времени на починку. «Считай сам, — сказал он,
    — вечер работы или две деньги». Слуга промолчал, но посмотрел на тебя
    так, что стало ясно: ему жалко не денег, а вечера, который можно
    просидеть у огня.

  choices:
    - id: fix
      text: Стянуть кадку обручем самому
      effects:
        health: { boyar: -3 }
        skill: { hands: +3 }
        personal: { opora: +3, chin: -2 }
        hope: { servant: +2 }
      next: a11
    - id: buy
      text: Купить у казака новую кадку и не тратить вечер на починку
      effects:
        personal: { dowry: -1 }
        approval: { kazak: +1 }
        hope: { wife: -2 }
      next: a11
    - id: borrow
      text: Попросить кадку у казачки и остаться в долгу
      effects:
        approval: { kazachka: +1 }
        hope: { wife: -1 }
        flag: { debt_kazachka: true }
      next: a15

- id: a34
  act: autumn
  kind: side
  when:
    not:
      flag: done_a34
  on_enter:
    flag: { done_a34: true }
  title: Рыба
  text: |
    По первому льду казак позвал на рыбалку, и лёд под ногами трещал так,
    что приходилось идти медленно и не отрывать глаз от снега. На реке уже
    чернели фигурки людей, и было слышно, как где-то далеко гулко ухает лёд.
    Один день на льду обещал неделю еды, и от одного обещания у тебя холодело
    под ложечкой сильнее, чем от ветра.

    «Кто боится, тот с пустой сумой зимует», — сказал казак и первым шагнул
    на лёд, не оглядываясь. Слуга держал верёвку и смотрел на тебя, а жена
    стояла на берегу и не уходила, хотя ветер продувал её платок насквозь.
    Ты сделал шаг, и лёд под сапогом отозвался тонким звоном, будто
    спрашивал, точно ли ты решил.

  choices:
    - id: go
      text: Идти на лёд самому с казаком и пешней
      effects:
        house: { food_days: +3 }
        health: { boyar: -4 }
        skill: { trade: +3 }
        personal: { opora: +1 }
      next: a11
    - id: send_servant
      text: Послать слугу с казаком, а самому остаться у печи
      effects:
        house: { food_days: +2 }
        health: { servant: -5 }
        personal: { idle_days: -1 }
      next: a11
    - id: refuse
      text: Не пускать никого на лёд
      effects:
        hope: { wife: -1 }
        personal: { chin: +1 }
      next: a11

- id: a35
  act: autumn
  kind: side
  when:
    not:
      flag: done_a35
  on_enter:
    flag: { done_a35: true }
  title: Соль
  text: |
    Купец привёз соль и разложил мешки у саней, и от одного вида этой
    белой крупы у тебя заныло под ложечкой: без соли мясо не
    лежит, а соли в доме не осталось ни щепоти. Денег он не брал, только
    вещи, и на твои сапоги смотрел дольше, чем на лицо. Мороз стоял такой,
    что мешки покрылись изморозью, и купец то и дело сбивал её рукавицей.

    «Что у тебя есть? — спросил он, не поднимая головы. — Плат? Сукно?»
    Ты назвал сукно, и он кивнул, ждал именно этого. Жена в это время
    стояла в дверях избы и смотрела, как ты торгуешься, и по её лицу было
    видно, что она уже мысленно пересчитала, сколько зимы отдано за эту соль.

  choices:
    - id: buy
      text: Отдать купцу вещь и взять соль до весны
      effects:
        house: { food_days: +2 }
        personal: { dowry: -1 }
      next: a11
    - id: trade_fish
      text: Обменять соль на рыбу
      effects:
        house: { food_days: +1 }
        approval: { kazak: +1 }
        hope: { wife: -1 }
      next: a11
    - id: refuse
      text: Обойтись без соли до весны и не отдавать последнего
      effects:
        hope: { wife: -2 }
        personal: { chin: +1 }
      next: a11

- id: a36
  act: autumn
  kind: side
  when:
    not:
      flag: done_a36
  on_enter:
    flag: { done_a36: true }
  title: Печь дымит
  text: |
    Печь дымила в избу, глаза резало, и жена кашляла в платок,
    отворачиваясь к стене. Слуга стучал по кирпичу костяшкой и слушал, как
    отзывается кладка, потом сказал, что дымоход кривой и его надо
    перекладывать, а глины в доме не было. До морозов оставалось меньше
    недели, и трогать печь было страшно: не сложишь заново, останешься без
    тепла вовсе.

    «Можно наспех замазать, — сказал слуга, — только дым не уйдёт, а
    спрячется». Он стоял на коленях у устья, и сажа лежала у него на руках
    до локтей, как чёрные рукавицы. Ты смотрел на огонь, который шёл не туда,
    куда должен, и понимал, что решать надо сейчас, пока кладка ещё тёплая и
    её можно разобрать без мороза.

  choices:
    - id: relayout
      text: Переложить дымоход самому
      effects:
        house: { izba: +1 }
        health: { boyar: -4 }
        skill: { hands: +3 }
        personal: { opora: +2 }
      next: a11
    - id: patch
      text: Замазать щели наспех, чем найдётся, и не трогать кладку
      effects:
        health: { boyar: -1, wife: -1 }
        personal: { chin: +1 }
        flag: { chimney_bad: true }
      next: a11
    - id: call_master
      text: Позвать печника из посада и заплатить ему за работу
      effects:
        house: { izba: +1 }
        personal: { dowry: -1 }
        approval: { kazak: +1 }
      next: a11

- id: a15
  act: autumn
  kind: spine
  title: Письмо из Москвы
  text: |
    Подьячий принёс письмо из Москвы и не уходил, стоя у порога и
    перекладывая шапку из руки в руку, и было ясно, что он ждёт на водку.
    Дядя писал, что сын жив, но связался с дурной компанией, от учёбы
    отбился, и денег на него больше нет, а потому забирайте или отдавайте в
    люди. Бумага была сложена вчетверо, и на сгибах уже потемнела.

    Жена читала через плечо, дошла до этого места и замолчала так, что
    стало слышно, как трещит лучина и как капает воск со свечи. Слуга стоял
    у печи и не дышал. «Значит, забирать», — сказала она наконец, и в голосе
    её не было ни вопроса, ни надежды, только счёт, который она уже сделала
    в уме.

  choices:
    - id: read_aloud
      text: Прочитать жене вслух всё, до последней строки, ничего не скрывая
      effects:
        hope: { wife: +5, servant: +2 }
        flag: { son_trouble: true }
      next: h_autumn_smotr
    - id: hide
      text: Скрыть худое и сказать, что в Москве всё хорошо
      effects:
        hope: { wife: +2 }
        personal: { chin: +1 }
        flag: { son_trouble: true, letter_hidden: true }
      next: h_autumn_smotr
    - id: answer_now
      text: Ответить дяде сразу и позвать сына сюда, к себе
      effects:
        flag: { son_invited: true }
        hope: { wife: +6, boyar: +2 }
        personal: { dowry: -1 }
      next: h_autumn_smotr

- id: h_autumn_smotr
  act: autumn
  kind: hub
  budget: 5
  title: Перед смотром
  text: |
    До смотра оставалось несколько дней, и по посаду уже шли разговоры о
    том, кого будут спрашивать первым и что именно станут смотреть. Люди,
    бумаги, запас, одежда — всё это надлежало привести в порядок сразу:
    смотрели не по одному, а по всему вместе.

    За эти дни надо было успеть многое. Подьячий в приказной избе говорил,
    что без серебра челобитную не перепишут. Поп ждал в церкви и спрашивал
    про сына. Охотник звал на промысел, пока стоит путь. Сосед у берега
    переворачивал лодку и просил помочь. Из кадки пропал хлеб. У ворот
    встал обоз, с которым пришли вести и соль, а мальчишка с посада
    приходил к окну и просил показать ему буквы.

    Слуга сказал, что дров хватит до Николы, если топить вполсилы, а жена
    промолчала, потому что считала иначе. В их молчании не было ссоры, но и
    согласия не было, и это приходилось нести с собой на смотр, где чужие
    люди будут решать, доживёшь ли ты до весны.

  choices:
    - id: podyachiy
      text: Поговорить с подьячим о челобитной
      next: a17
    - id: boy
      text: Показать мальчишке первые буквы
      next: a18
    - id: hunter
      text: Пойти с охотником на промысел
      next: a19
    - id: priest
      text: Поговорить с попом о сыне
      next: a20
    - id: servant
      text: Дать слуге работу, о которой он просит
      next: a21
    - id: wife_silent
      text: Спросить жену, о чём она молчит
      next: a22
    - id: neighbor
      text: Помочь соседу вытащить лодку
      next: a23
    - id: theft
      text: Найти, кто взял хлеб
      next: a24
    - id: convoy
      text: Сходить к обозу за солью и вестями
      next: a26
    - id: forward
      text: Дождаться осеннего смотра
      next: a27

- id: a17
  act: autumn
  kind: side
  when:
    not:
      flag: done_a17
  on_enter:
    flag: { done_a17: true }
  title: Подьячий
  text: |
    Над бумагами в нетопленой половине приказа сидел подьячий и грел руки
    о чернильницу: чернила в ней стыли и перо шло сухо. Он говорил
    медленно, не поднимая глаз, и от каждого его слова в горле становилось
    суше. За окном был слышен стук топора, и этот ровный звук раздражал
    больше, чем холод.

    «Напишу, — сказал он, — только платить надо: без серебра бумага под
    сукном и пролежит». Он даже не спросил, о чём просить, потому что таких,
    как ты, видел сотню и заранее знал, чем кончается всякая челобитная. Ты
    смотрел на его пальцы, пожелтевшие от чернил, и думал о том, что и эта
    бумага обойдётся дороже, чем стоит.

  choices:
    - id: write_petition
      text: Заплатить подьячему и начать бумагу сегодня же
      effects:
        personal: { dowry: -1 }
        flag: { petition_started: true }
        hope: { boyar: +4 }
      next: h_autumn_smotr
    - id: learn_price
      text: Спросить цену и уйти подумать до вечера
      effects:
        flag: { knows_petition_price: true }
        hope: { boyar: -1 }
      next: h_autumn_smotr
    - id: refuse
      text: Отказаться просить и оставить гордость при себе
      effects:
        hope: { boyar: -3 }
        personal: { chin: +1 }
      next: h_autumn_smotr

- id: a18
  act: autumn
  kind: side
  when:
    not:
      flag: done_a18
  on_enter:
    flag: { done_a18: true }
  title: Мальчишка
  text: |
    Казачий сын вертелся у избы с самого утра, совал тебе бересту и уголёк
    и просил показать буквы, и от его упорства в избе становилось теснее. Он
    не умел читать, но знал твёрдо, что человек из Москвы должен быть
    грамотным. Руки у него были красные от холода, а береста обтрёпана по
    краям.

    Отец его стоял поодаль, у поленницы, и делал вид, что просто мимо шёл,
    но не уходил долго. Он держал бересту двумя руками и ждал, глядя на тебя
    снизу вверх, и в этом ожидании было больше, чем в иных просьбах.

  choices:
    - id: teach
      text: Показать мальчишке первые буквы
      effects:
        health: { boyar: -1 }
        personal: { opora: +4, chin: -1 }
        hope: { servant: +2 }
        flag: { taught_boy: true }
        approval: { kazak: +2 }
      next: h_autumn_smotr
    - id: feed
      text: Дать мальчишке хлеба и отправить домой до темноты
      effects:
        house: { food_days: -1 }
        approval: { kazak: +1 }
        hope: { wife: -1 }
      next: h_autumn_smotr
    - id: chase
      text: Прогнать его и не оборачиваться
      effects:
        approval: { kazak: -1 }
        personal: { chin: +1 }
        hope: { boyar: -1 }
      next: h_autumn_smotr

- id: a19
  act: autumn
  kind: side
  when:
    not:
      flag: done_a19
  on_enter:
    flag: { done_a19: true }
  title: Охотник
  text: |
    Охотник-остяк принёс половину сохатого и, не снимая малицы, сел у двери
    на пол, подогнув ноги. От него пахло дымом, зверем и морозом, и этот
    запах держался в избе до вечера. Мясо лежало на полу, тёмное и мёрзлое, и
    ты смотрел на него, как смотрят на чужое богатство.

    Он попросил топор, и казак, переводивший с грехом пополам, объяснил,
    что без топора охотнику не обойтись. В доме топор был один, и от него
    зависело, будет ли чем колоть дрова и чем латать сени. «Топор — руки, —
    сказал казак. — А мясо — зима». Ты держал топор в руках и понимал, что
    меняешь одно на другое без остатка.

  choices:
    - id: trade_axe
      text: Отдать топор за половину сохатого
      effects:
        house: { food_days: +3 }
        skill: { hands: -3 }
        approval: { hunter: +2 }
      next: h_autumn_smotr
    - id: offer_dowry
      text: Отдать за мясо отрез сукна, а топор оставить себе
      effects:
        personal: { dowry: -1 }
        house: { food_days: +2 }
        approval: { hunter: +1 }
        hope: { wife: -4 }
      next: h_autumn_smotr
    - id: refuse
      text: Отказать охотнику и остаться зимовать без мяса
      effects:
        approval: { hunter: -1 }
        hope: { wife: -2 }
      next: h_autumn_smotr

- id: a20
  act: autumn
  kind: side
  when:
    not:
      flag: done_a20
  on_enter:
    flag: { done_a20: true }
  title: Поп
  text: |
    Поп служил в часовне без купола, где иконы стояли на простых досках, а
    свечи были сальные и коптили так, что стены над ними чернели. Он говорил
    тихо, не торопясь, и в часовне было холоднее, чем на дворе:
    топили её только по большим праздникам. Ты стоял на земляном полу и слушал, как под
    сапогами скрипит песок.

    Он спросил, крещён ли сын, и сам же ответил, что в Москве
    такого не забывают, а потом предложил написать в Москву через церковь: «С оказией
    дойдёт вернее, чем с приставом». За спиной у него дымило кадило, и дым
    шёл вверх, не находя выхода. Ты смотрел на огоньки свечей и думал, что в
    Москве такие же свечи горят теперь без тебя.

  choices:
    - id: confess
      text: Исповедаться в том, что лежит на душе с самой Москвы
      effects:
        hope: { boyar: +5, wife: +3, servant: +2 }
        personal: { chin: -2, opora: +1 }
      next: h_autumn_smotr
    - id: candle
      text: Поставить свечу за сына и уйти, не сказав лишнего
      effects:
        hope: { wife: +2 }
        personal: { dowry: -1 }
      next: h_autumn_smotr
    - id: ask_letter
      text: Спросить, как отправить письмо в Москву
      effects:
        flag: { church_letter: true }
        hope: { boyar: +2 }
      next: h_autumn_smotr

- id: a21
  act: autumn
  kind: side
  when:
    not:
      flag: done_a21
  on_enter:
    flag: { done_a21: true }
  title: Слуга просит дело
  text: |
    У двери слуга мял шапку, и от его движения в избе делалось
    неспокойно. Ему было шестьдесят с лишним, руки в трещинах, но он всё ещё
    был сильнее тебя, и оба вы это знали. За его спиной в сенях лежали дрова,
    которые он же и принёс утром, и теперь он ждал, что скажешь.

    «Дай дело, — сказал он тихо. — Я ещё могу носить». Он не просил ни еды,
    ни отдыха, он просил работы: без дела ему было страшнее, чем
    на морозе, и это было понятно без слов. Ты посмотрел на его руки и
    подумал, что человека можно отнять у смерти, но не у привычки быть нужным.

  choices:
    - id: give_work
      text: Дать ему работу по силам
      effects:
        house: { fuel_days: +1 }
        health: { servant: -4 }
        personal: { idle_days: -3 }
        hope: { servant: +3 }
      next: h_autumn_smotr
    - id: let_rest
      text: Сказать ему отдыхать у печи
      effects:
        personal: { idle_days: +1 }
        health: { servant: +2 }
        hope: { servant: -2, wife: -1 }
      next: h_autumn_smotr
    - id: kick_out
      text: Прогнать старика из избы
      effects:
        house: { food_days: +2 }
        hope: { boyar: -5, wife: -5, servant: -20 }
        flag: { servant_gone: true }
        personal: { chin: -2 }
      next: h_autumn_smotr

- id: a22
  act: autumn
  kind: side
  when:
    all:
      - not:
          flag: done_a22
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_a22: true }
  title: Жена молчит
  text: |
    Жена третий день отвечала односложно — «да», «нет», «как скажешь», — и
    по этим словам было слышно, что она уже мысленно уехала. Ночью,
    когда слуга уже спал, она садилась на край лавки и смотрела в темноту, и
    ты слышал, как она дышит. В избе было холодно, и лучина давно погасла.

    «Зачем вы приехали сюда? — спросила она наконец. — Зачем я поехала? Что
    теперь будет с сыном?» Ответа у тебя не было, и она это знала, и оттого
    молчание после вопроса сделалось длиннее самой ночи. Она ждала не
    утешения, а правды, и правда была в том, что ты не мог обещать ничего.

  choices:
    - id: talk
      text: Сказать, что не знаешь ответа, но не бросишь её здесь
      effects:
        hope: { wife: +6 }
        personal: { opora: +2 }
      next: h_autumn_smotr
    - id: give_thing
      text: Отдать ей зеркальце
      effects:
        personal: { dowry: -1 }
        hope: { wife: +4 }
      next: h_autumn_smotr
    - id: silence
      text: Отвернуться к стене и сделать вид, что спишь
      effects:
        hope: { wife: -5 }
        personal: { chin: +1 }
      next: h_autumn_smotr

- id: a23
  act: autumn
  kind: side
  when:
    all:
      - not:
          flag: done_a23
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_a23: true }
  title: Сосед
  text: |
    Сосед-посадский просил помочь перетащить лодку на сухое:
    один не управится, а лёд с каждым днём крепнет, и потом лодку не вытащить. До
    темноты оставалось часа два, дров в доме было на два дня, и ты понимал,
    что эти два часа придётся отнять у себя. Сосед стоял и вытирал руки о
    кафтан, не торгуясь и ничего не обещая.

    «Один не управлюсь, — сказал он просто. — А лодка не дрова, её за ночь
    не натаскаешь». Его борода была в изморози, и от него пахло рекой и
    смолой. Ты оглянулся на избу, где жена уже ставила горшок в печь, и
    понял, что она не станет спрашивать, зачем ты пошёл, а просто подождёт.

  choices:
    - id: help
      text: Пойти к реке и перетащить лодку вместе с соседом
      effects:
        health: { boyar: -4 }
        approval: { kazak: +2 }
        personal: { opora: +3 }
        flag: { helped_posad_1: true }
      next: h_autumn_smotr
    - id: send_servant
      text: Послать вместо себя старого слугу, а самому остаться
      effects:
        health: { servant: -5 }
        approval: { kazak: +1 }
        personal: { idle_days: -2 }
      next: h_autumn_smotr
    - id: refuse
      text: Отказать соседу и заняться своим
      effects:
        approval: { kazak: -2 }
        hope: { wife: -1 }
        personal: { chin: +1 }
      next: h_autumn_smotr

- id: a24
  act: autumn
  kind: side
  when:
    all:
      - not:
          flag: done_a24
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_a24: true }
  title: Воровство
  text: |
    Утром не хватило половины хлеба, и на полке осталась только тряпица,
    в которую он был завёрнут. Следы на снегу вели со двора на улицу и
    обрывались, и по ним нельзя было понять, свой это был человек или чужой. Хлеба до весны и
    так шло в обрез, и от этой пропажи в доме стало тише, чем было.

    Слуга клялся иконой, что не трогал, и от волнения заикался, а жена
    смотрела в пол и молчала так, что её молчание было тяжелее клятвы. Ты
    стоял между ними и понимал, что виноватого искать не хочется, а не
    искать нельзя. «Найдём, будет хуже», — сказала жена тихо, и ты не понял,
    о ком она говорит.

  choices:
    - id: investigate
      text: Пойти по следам на снегу и найти, кто взял хлеб
      effects:
        health: { boyar: -2 }
        hope: { wife: -2, servant: -2 }
        personal: { opora: +1 }
      next: h_autumn_smotr
    - id: forgive
      text: Сделать вид, что не заметил, и не спрашивать никого
      effects:
        hope: { servant: +4, wife: -1 }
        personal: { chin: -1 }
      next: h_autumn_smotr
    - id: punish
      text: Свалить вину на слугу и наказать
      effects:
        hope: { servant: -8, wife: -2 }
        personal: { chin: +1, idle_days: +1 }
      next: h_autumn_smotr

- id: a26
  act: autumn
  kind: side
  when:
    not:
      flag: done_a26
  on_enter:
    flag: { done_a26: true }
  title: Обоз
  text: |
    Из Тобольска пришёл обоз: сани, кони в инее, заиндевелые бороды
    возчиков, и весь посад вышел смотреть, что привезли. Купец торговал
    солью, порохом, крупами и новостями, и новости у него шли дороже соли.
    У тебя были вещи и почти не было денег, и он понял это по твоим сапогам
    раньше, чем ты открыл рот.

    «Соль нынче дорога, — сказал он, — зато идёт хорошо». Возчики
    разгружали мешки, и снег под ними чернел от просыпанной крупы. Ты стоял у
    саней и слушал, как говорят о Москве, о ценах, о том, кого куда сослали,
    и понимал, что эти слова сейчас дороже любых товаров.

  choices:
    - id: buy_salt
      text: Купить соли и крупы у обоза
      effects:
        personal: { dowry: -1 }
        house: { food_days: +3 }
      next: a27
    - id: sell_thing
      text: Продать зеркальце и взять за него соль и крупу
      effects:
        personal: { dowry: -1, chin: -1 }
        house: { food_days: +2 }
        hope: { wife: -6 }
      next: a27
    - id: just_news
      text: Постоять у саней и послушать вести
      effects:
        hope: { boyar: +2, wife: +1 }
      next: a27

- id: a27
  act: autumn
  kind: spine
  title: Смотр осени
  text: |
    Казак обходил двор и считал дрова вслух, не стесняясь и не заглядывая в
    избу, а просто водя рукавицей по поленнице. Казачка смотрела не на дрова,
    а на лица — кто как выглядит, кто уже сдался. Через подьячего воевода
    спрашивал, не утаил ли ты чего из казённого, и спрашивал он с любопытством,
    а не со строгостью.

    «Дров мало, — сказал казак, закончив счёт. — До Николы не дотянешь,
    если топить как топишь». Казачка добавила, что лицо у тебя серое, и велела
    жене варить рыбу жирнее, пока есть чем. Ты стоял посреди двора, и от их
    спокойных голосов делалось ясно, что смотрят не на дрова, а на то,
    доживёшь ли, и показывать слабость было нельзя.

  choices:
    - id: admit
      text: Сказать правду, что дров мало и до весны не хватит
      effects:
        approval: { kazak: +1, voivode: +1 }
        hope: { boyar: +2 }
      next: a28
    - id: lie
      text: Сказать, что всего хватает, и не опускать глаз
      effects:
        approval: { kazak: -1 }
        personal: { chin: +1, opora: -1 }
      next: a28
    - id: promise
      text: Пообещать, что к весне всё наладится
      effects:
        hope: { wife: +2, servant: +2 }
        personal: { opora: +1 }
      next: a28

- id: a28
  act: autumn
  kind: side
  when:
    all:
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  title: Тёмные недели
  text: |
    День стал короче обеда, и в избе уже не различались лица, только руки и
    края стола при свете лучины. Света едва хватало на два дела, и
    всё, что ни начни, оставалось недоделанным до утра. Холод стоял в углах и
    не уходил даже к вечеру, и ты привык ходить по избе, не вытягивая рук из
    рукавов.

    Слуга говорил, что топить надо с утра, пока есть свет, и что днём тепло
    держится дольше. Жена говорила, что дрова надо беречь и ложиться с
    темнотой: свет всё равно не сбережёшь. Оба были правы, и оба
    смотрели на тебя, и ты понимал, что выбирать придётся не между ними, а
    между теплом и дровами.

  choices:
    - id: morning_fire
      text: Топить с самого утра
      effects:
        house: { fuel_days: -2 }
        health: { wife: +2, servant: +2 }
        hope: { wife: +2 }
      next: a29
    - id: save
      text: Беречь дрова и ложиться спать с наступлением темноты
      effects:
        house: { fuel_days: +1 }
        health: { boyar: -2, wife: -3, servant: -3 }
        hope: { wife: -3 }
      next: a29
    - id: sleep_early
      text: Ложиться рано и есть один раз в день
      effects:
        health: { boyar: +2, wife: +1, servant: +1 }
        hope: { boyar: -1 }
      next: a29

- id: a29
  act: autumn
  kind: spine
  title: Уход в зиму
  text: |
    Последний день перед тем, как свет станет короче работы, начинался
    морозно и ясно, и по такому дню было видно, что зима уже стоит у ворот.
    Надо было решить, чем жить эти три месяца — дровами, рыбой или людьми, —
    и по запасам выходило, что на всё сразу не хватит. Ты обошёл двор,
    потрогал поленницу, заглянул в кадку с рыбой и вернулся в избу с
    ощущением, что в руках у тебя пусто.

    В избе ждали, что ты скажешь, и молчали, чтобы не мешать. «Одно
    выберем, — сказал ты, — остальное придётся добирать потом». Ответа
    не было: каждый уже решил иначе, только не станет говорить об этом
    вслух.

  choices:
    - id: stock_wood
      text: Взяться за дрова и рубить с санками
      effects:
        house: { fuel_days: +3 }
        health: { boyar: -4 }
        skill: { hands: +2 }
      next: a30
    - id: stock_food
      text: Ходить на лёд за рыбой
      effects:
        house: { food_days: +3 }
        health: { boyar: -4 }
        skill: { trade: +2 }
      next: a30
    - id: people
      text: Держаться людей и помогать посаду
      effects:
        approval: { kazak: +1, kazachka: +1 }
        personal: { opora: +3 }
        health: { boyar: -2 }
      next: a30

- id: a30
  act: autumn
  kind: spine
  when:
    all:
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  title: Снег лёг
  text: |
    Снег лёг и не растаял, и с утра всё за околицей было белым и тихим, только
    дым из труб стоял прямо вверх, и по этому дыму было понятно, что мороз
    взялся надолго. Изба держала тепло хуже, чем хотелось: дров оставалось на
    пять дней, еды на четыре. Ты стоял на крыльце и слушал, как в тишине
    оседает снег.

    Слуга вышел следом и сказал, что в такие дни лучше не выходить на улицу без
    нужды. Жена в сенях пересчитывала мешки и не поднимала головы, будто счёт
    мог что-то изменить. Впереди было три месяца, когда солнце почти не
    встаёт, и никто не говорил об этом вслух, потому что сказать значило
    признать.

  choices:
    - id: into_winter
      text: Закрыть дверь на засов и начинать зимовать
      effects:
        hope: { boyar: +2, wife: +1 }
      next: w01

- id: a40
  act: autumn
  kind: side
  when:
    all:
      - not:
          flag: done_a40
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_a40: true }
  title: Печной хлеб
  text: |
    Мука была, а квашни не было, и жена просила достать корыто:
    без него хлеб получался только на поду, лепёшками, и тот горький от золы.
    Она уже пробовала дважды: половина сгорела, половина осталась сырой
    внутри. В избе пахло горелым тестом, и этот запах не выветривался даже с
    открытой дверью.

    «Без корыта хлеба не будет, — сказала она твёрдо. — Хоть у кого-нибудь,
    да достань». Слуга предложил сходить к казачке, но добавил, что за корыто
    придётся чем-то платить, и замолчал: серебра не было. Ты
    смотрел на мешок с мукой и думал о том, что хлеб здесь начинается не с
    зерна, а с посуды.

  choices:
    - id: buy_tub
      text: Купить у купца корыто
      effects:
        personal: { dowry: -1, household: +3 }
        house: { food_days: +1 }
        hope: { wife: +5 }
      next: a11
    - id: borrow
      text: Одолжить корыто у казачки
      effects:
        approval: { kazachka: +1 }
        personal: { household: +2 }
        hope: { wife: +3 }
      next: a11
    - id: flatbread
      text: Обойтись лепёшками на поду
      effects:
        house: { food_days: +1 }
        health: { wife: -1 }
        hope: { wife: -2 }
      next: a11

- id: a41
  act: autumn
  kind: side
  when:
    all:
      - not:
          flag: done_a41
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_a41: true }
  title: Кровля
  text: |
    Кровля над сенями осела ещё до тебя: жердь, которой её подпирали,
    сгнила, и через щель в сени намело сугроб. Слуга сказал, что до морозов
    надо подпереть заново, иначе снег продавит тёс, а весной потечёт на
    голову. Он говорил это ровно, как о деле, которое и так всем известно.

    «Снег тяжёлый, — сказал он, — а жердь одна, и та гнилая». Жена молчала:
    она помнила, сколько сил уже ушло на избу, и понимала, что на
    кровлю их останется немного. Ты взял топор и пошёл к сеням, и слуга
    пошёл за тобой, не спрашивая, надолго ли.

  choices:
    - id: finish
      text: Подпереть кровлю жердью и заделать щели
      effects:
        health: { boyar: -3, wife: +1, servant: +1 }
        skill: { hands: +2 }
        house: { izba: +1 }
        hope: { wife: +2, servant: +2 }
      next: h_autumn_settle
    - id: neighbors
      text: Попросить казака подпереть кровлю за плату
      effects:
        approval: { kazak: +1 }
        house: { izba: +1 }
        personal: { dowry: -1 }
      next: h_autumn_settle
    - id: wait
      text: Оставить кровлю до весны
      effects:
        health: { servant: -2, wife: -1 }
        hope: { wife: -2 }
        personal: { chin: +1 }
      next: h_autumn_settle

- id: a44
  act: autumn
  kind: side
  when:
    all:
      - not:
          flag: done_a44
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_a44: true }
  title: Дверь на мороз
  text: |
    Дверь была одна, и войлок примерзал к косяку так, что утром её
    приходилось отдирать плечом, и каждый раз из избы уходило тепло, а обратно
    входил мороз. На пороге лежала ледяная корка, и её приходилось скалывать
    обухом, чтобы дверь закрылась. От этого в сенях всегда стоял холод, и вода
    в кадке подёргивалась коркой уже к вечеру.

    Слуга предложил сделать вторые сени: «Две двери, и морозу не пройти». Он
    показал руками, где поставить перегородку, и сказал, что лесу хватит, если
    взять старые плахи. Жена слушала и молчала, потому что считала дни до
    морозов, и по её лицу было видно, что она согласна, только боится не
    успеть.

  choices:
    - id: second
      text: Поставить вторые сени из старых плах
      effects:
        health: { boyar: -4, wife: +1 }
        house: { izba: +2 }
        skill: { hands: +2 }
        hope: { wife: +3 }
      next: a11
    - id: felt
      text: Утеплить дверь войлоком и тряпьём, не строя новых сеней
      effects:
        health: { boyar: -1 }
        house: { izba: +1 }
        hope: { wife: +1 }
      next: a11
    - id: leave
      text: Не трогать дверь до весны
      effects:
        health: { wife: -3, servant: -2 }
        hope: { wife: -2 }
        personal: { chin: +1 }
      next: a11

- id: a47
  act: autumn
  kind: side
  when:
    all:
      - not:
          flag: done_a47
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_a47: true }
  title: Окно
  text: |
    Окно было затянуто тряпьём, и днём в избе стоял сумрак, при котором игла
    шла наугад, а утром не сразу можно было понять, рассвело ли. Купец привёз
    слюду, но просил за неё дорого и говорил, что везти её издалека. Ты держал
    в руках кусок слюды и смотрел сквозь него на свет, и она была мутная,
    слоистая, но всё же пропускала больше, чем тряпица.

    Слуга предложил затянуть пузырём: «Света меньше, зато теплее и дешевле».
    Жена возразила, что при пузыре она не сможет шить, и в её голосе было
    столько усталости, что спорить не хотелось. Ты положил слюду на стол и
    понял, что выбираешь не между светом и теплом, а между её работой и общим
    теплом.

  choices:
    - id: mica
      text: Купить у купца слюду и затянуть окно по-старому
      effects:
        personal: { dowry: -1 }
        house: { izba: +1 }
        hope: { wife: +3 }
        health: { wife: +1 }
      next: a11
    - id: bubble
      text: Затянуть окно пузырём, сэкономив на слюде
      effects:
        health: { boyar: -1 }
        house: { izba: +1 }
        hope: { wife: +1 }
        skill: { hands: +1 }
      next: a11
    - id: cloth
      text: Оставить тряпьё на окне до самой весны
      effects:
        health: { wife: -2 }
        hope: { wife: -2 }
        personal: { chin: +1 }
      next: a11
`,Fp=`# Фаза: Тёмная зима (декабрь 1662 – февраль 1663)
# Карточек: 36 (w01–w36) + условные w37–w46
# Спина: полярная ночь, святки, письмо, Крещение, цинга, солнце, смотр.
# Ловушка со слугой: второе предложение — w13. Точки невозврата: w08_carbon/w_co_all (угар),
# w_fire/w_fire_alone (пожар).

- id: w01
  act: winter
  kind: spine
  title: Тёмные недели
  text: |
    Свет в этих неделях держался часов пять, и всё это время он был
    серым: заря выходила из-за леса, ползла низко над крышами и в
    третьем часу гасла. Ты колол дрова на слух, потому что
    поленья различались не цветом, а стуком, и руки мёрзли уже через
    десяток ударов, а потом немели и работали сами. Дым от сырых
    поленьев стоял в сенях, и весь день пахло мокрой золой и стылой
    овчиной, которую не успевали просушить.

    Шубу чинили при лучине, держа иглу близко к глазам, и один раз
    всё-таки укололи палец, а после долго смотрели на тёмную каплю.
    «В Москве в это время ещё обедают», — сказали без жалобы, просто
    чтобы что-то сказать. Ты кивнул: сам считал часы по московскому
    обычаю. На лавке спали, не выпустив из рук рукавицы, и день
    кончался, так и не начавшись.

  choices:
    - id: work
      text: Работать до последнего света, не разгибая спины
      effects:
        house: { fuel_days: +2 }
        health: { boyar: -4, servant: -4 }
        skill: { hands: +2 }
        personal: { opora: +2 }
      next: h_winter_dark
    - id: rest
      text: Беречь силы и греться у печи до утра
      effects:
        health: { boyar: +2, wife: +2, servant: +2 }
        house: { fuel_days: -1 }
        hope: { boyar: -1 }
      next: h_winter_dark
    - id: talk
      text: Посидеть с женой у печи и послушать её
      effects:
        hope: { wife: +5, servant: +2 }
        personal: { opora: +1 }
        house: { fuel_days: -1 }
      next: h_winter_dark

- id: h_winter_dark
  act: winter
  kind: hub
  budget: 7
  title: Тёмные недели
  text: |
    Света едва хватало на то, чтобы дожить до следующего утра: на дрова,
    воду и тепло, которое уходило из избы быстрее, чем ты успевал его
    добыть. Мороз стоял ровный, без оттепелей, и по утрам вода в кадке
    затягивалась ледком, который приходилось разбивать черпаком, а к
    вечеру в сенях снова стоял пар от мокрой одежды.

    С вечера раскладывали на шестке рукавицы и онучи, чтобы к утру они
    просохли хотя бы наполовину, и повторяли, что здешняя изба сушит
    хуже, чем греет. «Ты только распорядок держи, — сказали у печи, —
    а тепло само приложится», — и сами же первые уснули, не дождавшись
    ужина.

    За стенами шла своя жизнь. На крыше лежал снег в полтора аршина, и
    потолок в сенях прогибался. У кого-то в доме с осени кровоточили
    дёсны и шатались зубы, и по ночам был такой кашель, что просыпались
    все. Казак звал на лёд ставить сеть. У ворот ещё стоял обоз, и с ним
    можно было отправить письмо сыну.

  choices:
    - id: stove
      text: Топить печь дважды в день
      next: w02
    - id: polar_night
      text: Держать распорядок в темноте
      next: w03
    - id: letter
      text: Отправить письмо сыну с обозом
      next: w07
    - id: storm
      text: Счистить снег с крыши
      next: w08
    - id: scurvy
      text: Вылечить слугу от цинги
      next: w10
    - id: servant_cough
      text: Уложить слугу поближе к печи
      next: w11
    - id: ice_net
      text: Поставить с казаком сеть под лёд
      next: w37
    - id: wife_ill
      text: Сесть у постели жены
      next: w46
    - id: forward
      text: Дождаться Николина дня
      next: w_nikolin

- id: w37
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w37
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w37: true }
  title: Сеть под льдом
  text: |
    Прорубь дымилась паром, и казак пришёл к избе с шестом через плечо
    и бичевой, обмотанной вокруг руки. Он сказал, что ставит сеть под
    лёд на ночь и что одному ему её не поднять: верёвка дубеет через
    минуту, режет ладонь и не гнётся, как проволока.

    «Рыба в темноте глупая, — сказал он, — а мы с тобой нет, потому и
    живы». Он ждал ответа, переминаясь, из-под полы кафтана шёл пар, и в
    темноте за ним не было видно ни реки, ни берега.

  choices:
    - id: go
      text: Идти с ним на лёд затемно
      effects:
        house: { food_days: +3 }
        health: { boyar: -4 }
        skill: { trade: +2 }
        personal: { opora: +1 }
      next: h_winter_dark
    - id: send_servant
      text: Послать слугу вместо себя и не рисковать
      effects:
        house: { food_days: +2 }
        health: { servant: -5 }
        personal: { idle_days: -1 }
      next: h_winter_dark
    - id: refuse
      text: Не пускать никого на лёд
      effects:
        hope: { wife: -1 }
        personal: { chin: +1 }
      next: h_winter_dark

- id: w02
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w02
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w02: true }
  title: Печь
  text: |
    Мороз за стеной дошёл до тридцати восьми, и в сенях пар от
    дыхания оседал на брёвнах белой крупой, а вода в кадке за ночь
    вставала так, что её рубили обухом. Печь держала тепло часов
    шесть, потом кладка остывала, и от стылых стен начинало тянуть
    по полу холодом, который забирался под кафтан снизу. Ты сидел
    ближе к устью, чем позволял жар, и всё равно спину пробирало.

    Слуга считал по пальцам: «Можно и раз, только к утру холодно
    будет — вода в кадке встанет». Жена молчала и смотрела в сторону
    поленницы, потому что знала счёт не хуже его, и по её счёту дров
    на дважды не хватало; в избе пахло сухой золой и разогретой глиной.

  choices:
    - id: twice
      text: Топить дважды, как велит здешний порядок
      effects:
        house: { fuel_days: -2 }
        health: { wife: +2, servant: +2 }
        hope: { wife: +2 }
      next: h_winter_dark
    - id: once
      text: Топить раз в день
      effects:
        house: { fuel_days: -1 }
        health: { boyar: -2, wife: -4, servant: -5 }
        hope: { wife: -4 }
      next: h_winter_dark
    - id: furniture
      text: Сжечь лавку на дрова
      effects:
        house: { fuel_days: +1 }
        hope: { wife: -5 }
        personal: { chin: -3 }
      next: h_winter_dark

- id: w03
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w03
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_w03: true }
  title: Полярная ночь
  text: |
    Солнце не вставало третью неделю, и в полдень над лесом
    разливались такие сумерки, как перед грозой, только гроза не
    приходила. Ты научился отличать утро от вечера по тому, как
    сереет снег за окном, и определял время на глаз, хотя часы дома
    давно уже не шли. Люди на посаде ходили по этим сумеркам
    медленно и молча, как тени, и голоса их казались тише, чем были.

    Жена спросила однажды, будет ли когда-нибудь настоящее утро, и
    слуга ответил: «Будет», — но ответил слишком скоро и сам первый
    себе не поверил. Он потом весь вечер щипал лучину и не поднимал
    глаз, а жена держала на коленях недошитую рубаху и смотрела в
    стену.

  choices:
    - id: keep_routine
      text: Держать распорядок и вставать затемно
      effects:
        hope: { boyar: +3, wife: +2 }
        health: { boyar: -1 }
      next: h_winter_dark
    - id: sleep_long
      text: Спать сколько можно
      effects:
        health: { boyar: +3, wife: +1 }
        hope: { boyar: -3, wife: -1 }
      next: h_winter_dark
    - id: lamp
      text: Жечь рыбий жир в плошке
      effects:
        house: { fuel_days: -1 }
        hope: { wife: +4, servant: +2 }
      next: h_winter_dark

- id: w_nikolin
  act: winter
  kind: spine
  title: Николин день
  text: |
    На Николу зимнего ударили в один колокол, и звук в морозном
    воздухе пошёл далеко над посадом, ровный и негромкий. Служба шла
    в полдень, потому что раньше в часовне было не натопить, и поп
    служил коротко, в шубе поверх рясы, а пар от дыхания стоял над
    головами так густо, что дальний угол было не разглядеть. Ты
    стоял на холодном полу и переступал с ноги на ногу, чтобы не
    застыли ступни.

    После службы у амбара выдавали корм: рожь, соль, немного солода.
    Целовальник отвешивал на глаз, и все этот глаз видели, но молчали;
    только старуха впереди тебя вздохнула и сказала негромко, что
    нынче мерка полегче прошлогодней. Мешок вышел лёгкий, и ты нёс
    его на плече, стараясь не думать, на сколько дней он рассчитан.

  choices:
    - id: church_first
      text: Отстоять службу, а после уже идти к амбару
      effects:
        hope: { boyar: +4, wife: +3, servant: +2 }
        approval: { priest: +2 }
        house: { food_days: +2 }
      next: w05
    - id: take
      text: Взять корм как дают и не спорить
      effects:
        house: { food_days: +3 }
        hope: { boyar: -2 }
      next: w05
    - id: count
      text: Пересчитать меру при целовальнике, не отходя
      effects:
        house: { food_days: +4 }
        approval: { voivode: -1 }
        personal: { chin: +2, opora: +1 }
      next: w05
    - id: share_with_neighbor
      text: Отдать часть соседу, у которого дети
      effects:
        house: { food_days: +1 }
        approval: { kazak: +2 }
        personal: { opora: +2 }
        hope: { wife: +2 }
      next: w05

- id: w05
  act: winter
  kind: event
  when:
    all:
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_dead
  title: Святки
  text: |
    На святках по посаду ходили ряженые: кто в вывернутой шубе, кто с
    бородой из мочала, кто с рогами, привязанными к шапке, и пимы их
    скрипели по снегу издалека. Они стучали в дверь и пели под окном,
    и в морозе голоса звучали глухо, будто из-под снега. Ты вышел на
    крыльцо и почувствовал, как холод сразу забрался за воротник.

    Съестного оставалось мало, и жена стояла у кадки и глядела на неё,
    как глядят на судью. «Не подашь — весь год поминать
    будут, — сказала она тихо. — А подашь — к Крещению пусто станет».
    Слуга молча достал с полки остаток рыбы и положил на стол, не
    глядя ни на тебя, ни на неё.

  choices:
    - id: give
      text: Дать хлеба и рыбы
      effects:
        house: { food_days: -1 }
        approval: { kazak: +1, kazachka: +1, priest: +1 }
        hope: { wife: +5, servant: +3 }
      next: w06
    - id: refuse
      text: Не пустить их в избу и ничего не подать
      effects:
        approval: { kazak: -1, priest: -1 }
        hope: { wife: -2 }
      next: w06
    - id: join
      text: Пойти с ряжеными по посаду до полуночи
      effects:
        health: { boyar: -2 }
        hope: { boyar: +5, wife: +3 }
        personal: { chin: -2 }
      next: w06

- id: w06
  act: winter
  kind: spine
  title: Рождество
  text: |
    В часовне было тесно и от людского дыхания теплее, чем в избе:
    свечи горели неровно, воск капал на деревянный пол, и запах
    ладана мешался с запахом мокрых тулупов. Ты стоял плечом к плечу
    с чужими людьми и впервые за зиму не чувствовал, что тебя здесь
    считают лишним. От тепла размякли пальцы, и в них вернулась боль,
    которой ты не замечал на морозе.

    Поп служил медленно, растягивая слова, и жена рядом с тобой
    заплакала, не вытирая слёз, чтобы их не увидели. «Здесь тоже люди
    живут», — сказала она после службы, и в этих словах было меньше
    горечи, чем ты ожидал.

  choices:
    - id: pray
      text: Стоять всю службу до последнего слова
      effects:
        hope: { boyar: +6, wife: +4, servant: +3 }
        health: { boyar: -2 }
      next: h_winter_svyatki
    - id: stand_outside
      text: Стоять у двери, не входя в тесноту
      effects:
        hope: { wife: +2 }
        health: { boyar: -1 }
      next: h_winter_svyatki
    - id: leave
      text: Уйти до конца службы по своим делам
      effects:
        hope: { boyar: -2, wife: -2 }
        approval: { priest: -1 }
      next: h_winter_svyatki

- id: h_winter_svyatki
  act: winter
  kind: hub
  budget: 6
  title: Святки и мясоед
  text: |
    Праздники прошли, и впереди лежали Крещение и долгий мясоед, когда
    дни понемногу прибавлялись, а холода только крепчали. Дел было
    больше, чем света: дрова, вода, корм, бумага, и каждое дело
    требовало выйти из тепла на мороз, а потом отогреваться вдвое
    дольше, чем шёл сам путь. Ты считал дни по пальцам и сбивался.

    «В мясоед и дров надо вдвое, — сказали у печи, — потому что есть
    будешь больше, а чем больше ешь, тем больше мёрзнешь». Усмехнулись
    на эти слова, но кадку с крупой поставили дальше от стены, где та
    не так отсыревала.

    Казак ещё под Рождество дал дров в долг, и с тех пор не здоровался первым.
    Воевода прислал сказать, что сам придёт проверять, жив ли ссыльный и
    чем живёт. Челобитная, о которой говорили осенью, так и не была написана.
    Из дома всё чаще вспоминали мать и однажды сказали, что с обозом на юг
    до неё можно дойти. На посаде искали беглых, и одного уже видели у околицы.
    Кадка пустела быстрее, чем ждали, и это замечали все.

  choices:
    - id: servant_eats
      text: Решить, кормить ли слугу в полную долю
      next: w13
    - id: wood_ends
      text: Достать дров на мясоед
      next: w14
    - id: hunger
      text: Решить, как пережить голод
      next: w15
    - id: debt
      text: Разобраться с долгом казаку
      next: w16
    - id: voivode
      text: Пойти к воеводе на проверку
      next: w17
    - id: paper
      text: Переписать челобитную заново
      next: w18
    - id: wife_mother
      text: Поговорить с женой о её матери
      next: w23
    - id: fugitive
      text: Приютить беглого в сенях
      next: w25
    - id: humiliate
      text: Поклониться воеводе и стерпеть
      next: w_humiliate
    - id: forward
      text: Дождаться Крещения
      next: w09

- id: w_humiliate
  act: winter
  kind: side
  when:
    not:
      flag: done_w_humiliate
  on_enter:
    flag: { done_w_humiliate: true }
  title: Поклон воеводе
  text: |
    Воевода принял тебя в сенях, где из-под двери тянуло так, что
    пламя свечи ложилось набок, и говорил стоя, не предлагая сесть.
    «Ты теперь никто, — сказал он ровно, без злобы. — Ни роду, ни
    чину, ни имения; что дадут, тем и жив будешь». Ты стоял в двух
    шагах от него и слышал, как у него в бороде потрескивает от
    мороза.

    Дьяк за его спиной водил пером по бумаге, хотя чернила на таком
    холоде давно застыли, и делал вид, что пишет. «Слышал?» —
    переспросил воевода, и ты понял, что отвечать надо сейчас, потому
    что второго раза не будет.

  choices:
    - id: bow
      text: Поклониться до земли и не разгибаться
      effects:
        personal: { chin: -18, opora: -12 }
        hope: { boyar: -4 }
        approval: { voivode: +2 }
      next: h_winter_svyatki
    - id: stand
      text: Стоять прямо и не кланяться ему вовсе
      effects:
        personal: { chin: +1, opora: +1 }
        hope: { boyar: +2 }
        approval: { voivode: -2 }
      next: h_winter_svyatki
    - id: ask
      text: Попросить у него лишнюю меру корма
      effects:
        personal: { chin: -8, opora: -2 }
        house: { food_days: +1 }
        hope: { boyar: -1 }
      next: h_winter_svyatki

- id: w07
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w07
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w07: true }
  title: Обоз с письмом
  text: |
    Обоз пришёл по реке, и кони в инее стояли у ворот, тяжело дыша,
    а с их морд капало на снег; возчики слезали с саней медленно,
    потому что тулупы не гнулись. Подьячий вынес бумаги, и среди
    казённых листов нашлось письмо, сложенное вчетверо и запечатанное
    чужой печатью. Ты развернул его на холоде и сразу увидел, что
    писано второпях: буквы в конце строк съезжали вниз.

    Дядя сообщал, что сын пропал из дома и его ищут третий день, и
    просил денег или совета. Жена держалась за стол, чтобы не упасть,
    и повторяла, что он же ещё мальчик, а слуга стоял у двери и
    молчал, потому что при нём такие письма не обсуждали.

  choices:
    - id: send_money
      text: Отправить последнее серебро на поиски сына
      effects:
        personal: { dowry: -1 }
        hope: { wife: +4 }
        flag: { son_help_sent: true }
      next: h_winter_dark
    - id: write_letter
      text: Написать сыну самому, где бы он ни был
      effects:
        hope: { boyar: +3, wife: +3 }
        personal: { opora: +2 }
        flag: { son_letter_written: true }
      next: h_winter_dark
    - id: do_nothing
      text: Сказать, что теперь он сам за себя
      effects:
        hope: { wife: -6, boyar: -2 }
        personal: { chin: +1 }
        flag: { son_left_alone: true }
      next: w08

- id: w08_carbon
  act: winter
  kind: crisis
  # Слугу прогнали — следить за вьюшкой некому. Точка невозврата.
  when:
    all:
      - flag: servant_gone
      - not:
          flag: knows_stove
  title: Тихая ночь
  text: |
    Печь протопили с вечера и задвинули вьюшку, как привыкли это
    делать в Москве, где дым уходил в трубу и не возвращался. Угли в
    устье догорали ровным красным светом, и в избе от них стояло
    тепло, почти душное, от которого клонило ко сну сильнее обычного.

    За стеной мело ровно и глухо, и разбудить тебя было некому,
    потому что слуги в доме уже не осталось. К утру угли ещё тлели, а
    в избе не поднялся никто.

  choices:
    - id: end
      text: …
      effects:
        flag: { cause_co: true, boyar_dead: true, wife_dead: true }
      next: f01

- id: w_co_all
  act: winter
  kind: crisis
  # Слуга умер — истопника нет. Точка невозврата.
  when:
    all:
      - flag: servant_dead
      - not:
          flag: knows_stove
  title: Тихая ночь
  text: |
    Слуга умер на прошлой неделе, и смотреть за печью стало некому:
    вьюшку задвинули рано, по московской привычке, и угли не успели
    догореть до конца. В избе стояло тепло, густое и сладкое, и от
    него тяжелела голова.

    Утром никто не встал: ты лежал на полатях, жена — на лавке, и
    обоих уже нечем было будить, потому что в этой тишине не
    слышалось ни дыхания, ни кашля.

  choices:
    - id: end
      text: …
      effects:
        flag:
          {
            cause_co: true,
            boyar_dead: true,
            wife_dead: true,
            servant_dead: true,
          }
      next: f01

- id: w_fire
  act: winter
  kind: crisis
  # Дымоход замазали наспех — сажа занялась. Точка невозврата.
  when:
    all:
      - flag: chimney_bad
      - not:
          flag: servant_gone
      - not:
          flag: servant_dead
  title: Пожар
  text: |
    Ночью в стене затрещало, и сначала ты подумал, что это мороз
    рвёт брёвна, как рвал их всю зиму. Потом треск пошёл чаще и
    глуше, и из-за печи потянуло горьким, а с потолка посыпалась
    сухая сажа.

    Дымоход, замазанный наспех перед холодами, занялся разом, и огонь
    пошёл по сухой обрешётке под крышей. Ты успел вскочить и добежать
    до двери, но она уже не подавалась. Выйти не успел никто.

  choices:
    - id: end
      text: …
      effects:
        flag:
          {
            cause_fire: true,
            boyar_dead: true,
            wife_dead: true,
            servant_dead: true,
          }
      next: f01

- id: w_fire_alone
  act: winter
  kind: crisis
  when:
    all:
      - flag: chimney_bad
      - any:
          - flag: servant_gone
          - flag: servant_dead
  title: Пожар
  text: |
    Той ночью в стене загудело глухо, будто ветер, и запахло горькой
    сажей, а потом из-за печи пошёл дым, густой и жёлтый. Ты схватил
    жену за руку и рванул дверь, но её заклинило раньше, чем ты
    понял, что горит.

    Огонь шёл по сухой обрешётке быстро, быстрее, чем ты успевал
    думать. Крыша над сенями вспыхнула сразу вся, и снаружи уже никто
    не мог подойти.

  choices:
    - id: end
      text: …
      effects:
        flag: { cause_fire: true, boyar_dead: true, wife_dead: true }
      next: f01

- id: w08
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w08
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w08: true }
  title: Метель
  text: |
    Ветер сбивал с ног ещё на крыльце, и снег шёл не сверху, а
    стлался по земле, набиваясь в каждую щель и занося крышу по самый
    конёк. В сенях дверь уже не открывалась наружу, и ты толкал её
    плечом, а она отвечала мягко, как отвечает сугроб. Снег набился за
    воротник и таял, стекая ледяной струйкой по спине.

    Слуга кричал сквозь ветер, приложив ладони ко рту: «Не счистим —
    весной проломится!» Жена держала лучину, заслоняя её ладонью, и
    огонь всё равно ложился набок, а она переставляла ноги, чтобы не
    обморозить их в снегу.

  choices:
    - id: clear_roof
      text: Лезть на крышу самому
      effects:
        health: { boyar: -6 }
        house: { izba: +1 }
        skill: { hands: +2 }
        personal: { opora: +2 }
      next: h_winter_dark
    - id: send_servant
      text: Послать слугу наверх, а самому остаться внизу
      effects:
        health: { servant: -9 }
        house: { izba: +1 }
        personal: { idle_days: -3 }
      next: h_winter_dark
    - id: leave
      text: Переждать метель в избе и не рисковать
      effects:
        house: { izba: -1 }
        health: { wife: -2 }
        hope: { wife: -2 }
      next: w09

- id: w09
  act: winter
  kind: spine
  title: Крещение
  text: |
    Крест во льду вырубили ночью, и лёд звенел под топором так, что
    звук уходил далеко по реке. К утру края проруби подёрнулись тонкой
    коркой. Над водой стоял пар,
    густой и белый, и в нём двигались тёмные фигуры людей, пришедших
    раньше тебя.

    Поп вышел в шубе, с крестом в руке, и сказал, что кто выдержит
    воду, тот весь год не будет болеть. Вода в проруби была чёрной, и
    от неё не отойти: она тянула к себе взглядом, как тянет глубина.
    Молитву читали глухо, и слова на морозе стыли, не долетая до
    берега.

  choices:
    - id: plunge
      text: Окунуться в прорубь с головой, как велит обычай
      effects:
        health: { boyar: -8 }
        hope: { boyar: +8, wife: +4 }
        approval: { priest: +2 }
      next: w12
    - id: watch
      text: Смотреть, как купаются другие, и креститься
      effects:
        hope: { boyar: +2 }
        approval: { priest: +1 }
      next: w12
    - id: stay_home
      text: Остаться в избе и не испытывать мороз
      effects:
        approval: { priest: -1 }
        hope: { wife: -1 }
      next: w12

- id: w10
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w10
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w10: true }
  title: Цинга
  text: |
    У слуги кровоточили дёсны, и хлеб он уже не жевал, а размачивал в
    воде и держал во рту, пока тот не разойдётся. Пальцы у него не
    разгибались до конца, и когда он брался за что-нибудь, было видно,
    что каждое движение стоит ему отдельного усилия. В избе стоял
    тяжёлый запах, о котором никто не говорил вслух.

    Жена растирала ему руки суконкой, а он терпел и один раз сказал:
    «Не надо, барыня, сами отойдут». Она не ответила и продолжила
    растирать, а ты стоял у печи и думал, что отойти они могут уже не
    в эту сторону.

  choices:
    - id: treat
      text: Выпаивать хвойный настой и кормить клюквой
      effects:
        house: { food_days: -1 }
        health: { servant: +8 }
        hope: { servant: +4 }
      next: h_winter_dark
    - id: ignore
      text: Махнуть рукой и ждать, что само пройдёт
      effects:
        health: { servant: -10 }
        hope: { servant: -5, wife: -3 }
      next: h_winter_dark
    - id: send_out
      text: Выставить его на мороз
      effects:
        health: { servant: -15 }
        hope: { servant: -10, wife: -5 }
        personal: { chin: +1 }
      next: h_winter_dark

- id: w11
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w11
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w11: true }
  title: Слуга кашляет
  text: |
    Слуга кашлял всю ночь, глубоко и с хрипом, и после каждого приступа
    долго ловил воздух ртом, привалившись к стене. Ты слышал этот
    кашель сквозь сон и каждый раз просыпался, а к утру у него был
    такой вид, что и не спал он вовсе. В избе пахло потом, дымом и
    той сыростью, что идёт от мокрой шерсти.

    «Не гони меня в холод, — попросил он, когда ты подошёл. — Я ещё
    печь могу топить, я ещё гожусь». Жена при этих словах отвела глаза
    и стала поправлять занавеску у окна, хотя поправлять там было
    нечего.

  choices:
    - id: keep_warm
      text: Оставить его у печи до утра
      effects:
        health: { servant: +4 }
        house: { fuel_days: -1 }
        hope: { wife: +2 }
      next: h_winter_dark
    - id: send_work
      text: Послать его работать
      effects:
        health: { servant: -7 }
        house: { fuel_days: +1 }
        personal: { idle_days: -3 }
      next: h_winter_dark
    - id: isolate
      text: Отселить его в сени, подальше от жены
      effects:
        health: { servant: -6 }
        hope: { servant: -6, wife: -2 }
      next: w12

- id: w12
  act: winter
  kind: spine
  when:
    all:
      - hope: { hero: wife, op: gte, value: 40 }
      - house: { key: food_days, op: gte, value: 2 }
      - not:
          flag: wife_dead
  title: Жена
  text: |
    Жена третий день не поднимала глаз, и руки у неё дрожали, когда
    она бралась за иглу. Ты заметил это раньше, чем она сказала, и ещё
    раньше заметил, что она перестала выходить на крыльцо по утрам.
    Казачка пришла сама, посидела с ней, потом вышла к тебе и сказала
    всё просто, как говорят о погоде.

    «Будет ребёнок, — проговорила она. — Рожать здесь, в темноте, без
    повитухи, — дело Божье». Жена стояла посреди избы и не знала,
    радоваться ей или плакать, а ты смотрел на неё и понимал, что от
    твоего первого слова зависит сейчас больше, чем от всех решений
    зимы.

  choices:
    - id: hold
      text: Обнять её и сказать, что мы справимся
      effects:
        hope: { wife: +10, boyar: +4 }
        flag: { preg: true }
      next: w21
    - id: worry
      text: Спросить, как рожать в такой холод и темноте
      effects:
        hope: { wife: -4 }
        flag: { preg: true }
        personal: { chin: +1 }
      next: w21
    - id: ask_kazachka
      text: Позвать казачку в помощь на все ночи
      effects:
        approval: { kazachka: +2 }
        hope: { wife: +5 }
        flag: { preg: true, midwife: true }
      next: w21

- id: w12b
  act: winter
  kind: spine
  when:
    all:
      - not:
          any:
            - hope: { hero: wife, op: gte, value: 40 }
            - house: { key: food_days, op: gte, value: 2 }
      - not:
          flag: wife_dead
  title: Жена молчит
  text: |
    Жена не говорила о будущем и не отвечала, когда ты заводил о нём
    речь: она чинила одно и то же, распарывала и чинила снова, и в её
    шитье не было ни одной новой вещи. Ты видел, что она устала, но
    усталость эта была не такая, как от работы, — она не проходила
    после сна.

    Казачка спросила у неё, всё ли ладно, и получила короткое
    «ладно», после которого стало ясно, что ладно не всё. Спрашивала
    она осторожно, пробуя лёд на реке, и не настаивала на
    ответе. Потом посмотрела на тебя и чуть заметно покачала головой.

  choices:
    - id: talk
      text: Спросить прямо, что с ней и чего она боится
      effects:
        hope: { wife: +4 }
      next: w21
    - id: gift
      text: Отдать ей новые иглы из московского запаса
      effects:
        personal: { dowry: -1 }
        hope: { wife: +3 }
      next: w21
    - id: leave
      text: Оставить её в покое до утра
      effects:
        hope: { wife: -4 }
      next: w21

- id: w13
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w13
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w13: true }
  title: Лишний рот
  text: |
    Слуга ел каждый день, и это было видно по кадке: крупа убывала
    ровно, и на дне её становилось всё меньше, а рук в доме не
    прибавлялось.
    Жена считала дни про себя и не говорила вслух, но по тому, как она
    закрывала крышку, было понятно, что счёт у неё уже сошёлся. Ты
    старался не смотреть на его руки, когда он брался за ложку.

    «Прогони — и дров хватит, и еды, — сказал казак прямо, без
    обиняков. — Он же старый, сам не доживёт». Он сказал это не зло, а
    как говорят о вещи, которую пора вынести из избы, и от этой
    простоты тебе стало холодно.

  choices:
    - id: keep
      text: Оставить слугу в избе
      effects:
        hope: { servant: +5, wife: -2 }
        house: { food_days: -1 }
      next: h_winter_svyatki
    - id: cut_portion
      text: Урезать ему долю
      effects:
        hope: { servant: -8, wife: +2 }
        house: { food_days: +0 }
        health: { servant: -4 }
      next: h_winter_svyatki
    - id: kick_out
      text: Прогнать его из избы
      effects:
        house: { food_days: +2 }
        hope: { boyar: -5, wife: -5, servant: -20 }
        flag: { servant_gone: true }
      next: h_winter_svyatki

- id: w14
  act: winter
  kind: side
  when:
    not:
      flag: done_w14
  on_enter:
    flag: { done_w14: true }
  title: Дрова кончаются
  text: |
    Дров оставалось на два дня, и ты знал это точно, потому что считал
    поленья каждый вечер, как считают деньги перед долгой дорогой. Лес
    стоял далеко, за посадом и болотом, а метель заметала следы так,
    что обратный путь пришлось бы искать по памяти.

    «Жги всё, что горит, — сказала жена. — Дерево оно и есть дерево, а
    полати можно и новые настелить». Она сказала это спокойно, глядя
    на тебя, и ты понял, что она уже всё взвесила и просто ждёт,
    согласишься ты или нет. Она говорила дело, и легче не
    становилось.

  choices:
    - id: buy
      text: Купить у казака втридорога
      effects:
        personal: { dowry: -1 }
        house: { fuel_days: +3 }
        approval: { kazak: +1 }
      next: h_winter_svyatki
    - id: burn_furniture
      text: Жечь лавки и полати
      effects:
        house: { fuel_days: +2, izba: -1 }
        hope: { wife: -6, servant: -2 }
        personal: { chin: -3 }
      next: h_winter_svyatki
    - id: go_forest
      text: Идти в лес самому по метели и принести дров
      effects:
        health: { boyar: -8 }
        house: { fuel_days: +3 }
        skill: { hands: +3 }
        personal: { opora: +3 }
      next: h_winter_svyatki

- id: w15
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w15
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w15: true }
  title: Голод
  text: |
    Еды оставалось на день, и это был не тот день, который можно
    растянуть: каша из последней крупы вышла жидкой, и после неё голод
    не унимался, а только становился заметнее. В углу стояла кадка с
    зерном, которое берегли на весенний посев, и ты знал, что
    откроешь её — и весной сеять будет нечего.

    Жена смотрела на кадку, слуга смотрел на тебя, и оба молчали так,
    что было ясно: всё решили и ждали только твоего слова. Первым не
    выдержал слуга: «Хозяин, я могу и потерпеть», — сказал он тихо, и
    ты понял, что именно этого он и не может.

  choices:
    - id: eat_seed
      text: Съесть посевное зерно
      effects:
        house: { food_days: +3 }
        hope: { wife: +4 }
        flag: { seed_eaten: true }
      next: h_winter_svyatki
    - id: beg
      text: Пойти просить по дворам
      effects:
        health: { boyar: -3 }
        approval: { kazak: -1 }
        house: { food_days: +1 }
        hope: { wife: -2 }
      next: h_winter_svyatki
    - id: starve
      text: Сохранить зерно на посев
      effects:
        health: { boyar: -5, wife: -5, servant: -6 }
        satiety: { boyar: -1, wife: -1, servant: -1 }
        hope: { boyar: -2 }
        flag: { seed_kept: true }
      next: h_winter_svyatki

- id: w16
  act: winter
  kind: side
  when:
    not:
      flag: done_w16
  on_enter:
    flag: { done_w16: true }
  title: Долг
  text: |
    Казак пришёл не с пустыми руками: топор был заткнут у него за
    пояс, и он не вынимал его, но и не снимал. Он встал у двери,
    оглядел избу, поленницу и пустую кадку, и по тому, как он это
    делал, было видно, что считает он быстро и точно. Пахло от него
    морозом и дымом.

    «Дрова и соль за тобой, — сказал он. — Можно отработать, а можно
    заплатить серебром». Он не угрожал и не повышал голоса, просто
    стоял и ждал ответа, и ждать он умел.

  choices:
    - id: pay
      text: Отдать серебро и закрыть долг сразу
      effects:
        personal: { dowry: -1 }
        approval: { kazak: +2 }
      next: h_winter_svyatki
    - id: work
      text: Отработать дровами и топором
      effects:
        health: { boyar: -6, servant: -4 }
        approval: { kazak: +2 }
        skill: { hands: +2 }
      next: h_winter_svyatki
    - id: refuse
      text: Пусть разбирается воевода
      effects:
        approval: { kazak: -2, voivode: -1 }
        hope: { boyar: -2, wife: -3 }
      next: h_winter_svyatki

- id: w17
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w17
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w17: true }
  title: Воевода проверяет
  text: |
    Воевода пришёл сам, без подьячего и без провожатого, и ты сразу
    понял, что это не к добру: так приходят не проверять, а смотреть.
    Он ходил по избе, трогал стены ладонью, заглядывал в пустую кадку
    и на поленницу, и снег с его сапог таял на полу лужицей. Пахло от
    него дальней дорогой и чужим теплом.

    «До весны дотянешь?» — спросил он, остановившись против тебя, и
    стал ждать ответа, глядя в глаза. Жена за его спиной перестала
    двигаться, а слуга сделал вид, что занят печью. Ты понимал, что от
    этого ответа будет зависеть и его милость, и его отписка.

  choices:
    - id: truth
      text: Сказать правду
      effects:
        approval: { voivode: +2 }
        hope: { boyar: +2 }
      next: h_winter_svyatki
    - id: boast
      text: Сказать, что всё есть
      effects:
        approval: { voivode: -1 }
        personal: { chin: +1 }
      next: h_winter_svyatki
    - id: bribe
      text: Дать ему солонины
      effects:
        house: { food_days: -1 }
        approval: { voivode: +1 }
        personal: { chin: -2 }
      next: h_winter_svyatki

- id: w18
  act: winter
  kind: side
  when:
    not:
      flag: done_w18
  on_enter:
    flag: { done_w18: true }
  title: Бумага дороже хлеба
  text: |
    Подьячий водил пером по строке, тыкал в неё острым концом и
    говорил, что написано неверно: надо не просто
    бить челом, а бить челом с поклоном. В его избе было теплее, чем в
    твоей, и пахло чернилами, салом и той сытостью, которой ты давно
    уже не знал. Ты стоял перед ним с шапкой в руках.

    За переписку полагалась плата, и он уже протянул руку, не поднимая
    глаз. Бумага стоила дороже хлеба, и оба вы это знали, но вслух не
    сказал ни он, ни ты. Ты пересчитал в уме, сколько останется на соль
    и на крупу, и вышло, что немного.

  choices:
    - id: pay
      text: Заплатить и не спорить о цене
      effects:
        personal: { dowry: -1 }
        flag: { petition_ready: true }
        hope: { boyar: +3 }
      next: h_winter_svyatki
    - id: rewrite
      text: Переписать своей рукой и сберечь серебро
      effects:
        health: { boyar: -2 }
        flag: { petition_ready: true }
        personal: { opora: +2, chin: -1 }
      next: h_winter_svyatki
    - id: drop
      text: Бросить это дело и не унижаться дальше
      effects:
        hope: { boyar: -4 }
        personal: { chin: +1 }
      next: h_winter_svyatki

- id: h_winter_lent
  act: winter
  kind: hub
  budget: 5
  title: Конец зимы
  text: |
    Пост тянулся медленно, но свет уже стал заметно длиннее: в полдень
    солнце задевало крыши, и на снегу появлялись синие тени, которых
    не было весь декабрь. Серебра осталось мало, запаса не было вовсе, и до весны
    лежало ещё несколько недель, которые надо было чем-то заполнить и
    чем-то накормить. Ты замечал, что и другие на посаде ходят теперь
    медленнее и говорят тише.

    «К весне всякий запас дороже вдвое, — сказал слуга, — а мы свой
    проели ещё в святки». Жена не стала спорить, только поджала губы и
    подвинула к тебе плошку с последней клюквой.

    Из-под половицы можно было сделать тайник, пока его не нашли другие.
    Из кадки пропали топор и рыба. Шили на продажу и просили сукна.
    Мальчишку с посада учили ставить сеть, и он ходил следом.
    Сын не ответил на первое письмо. По реке шёл последний обоз,
    и с ним можно было отправить второе. Рубахи за зиму почернели, а щёлок
    варить было из чего. С крыши свисали сосульки в человеческий рост,
    и под ними ходили люди.

  choices:
    - id: cache
      text: Спрятать запас в тайник под половицей
      next: w31
    - id: theft
      text: Найти, кто украл топор и рыбу
      next: w32
    - id: wife_work
      text: Помочь жене шить на продажу
      next: w33
    - id: servant_word
      text: Похвалить слугу при мальчишке
      next: w34
    - id: son_letter
      text: Написать сыну второе письмо
      next: w35
    - id: last_convoy
      text: Успеть на последний обоз
      next: w39
    - id: lye
      text: Сварить щёлок и выстирать рубахи
      next: w43
    - id: baby
      text: Поговорить с женой о ребёнке
      next: w44
    - id: icicles
      text: Сбить сосульки с крыши
      next: w45
    - id: forward
      text: Дождаться солнца
      next: w29

- id: w39
  act: winter
  kind: side
  when:
    not:
      flag: done_w39
  on_enter:
    flag: { done_w39: true }
  title: Последний обоз
  text: |
    Перед весной по реке шёл последний обоз, и купец в тяжёлой шубе
    стоял у саней, перебирая в руках связки мороженой рыбы. Он
    платил мало и не торговался, потому что знал: второго обоза не
    будет, а весной дорогу развезёт так, что ни пройти, ни проехать.
    Снег под его сапогами был утоптан до серого льда.

    Пимы держали в руках и не отдавали, и по рукам было видно, что
    держат их не из жадности. «В них же ещё ходить и ходить», — сказали
    тихо, и купец услышал это, но сделал вид, что не слышал.

  choices:
    - id: sell
      text: Продать пимы последнему обозу и взять мукой
      effects:
        house: { food_days: +3 }
        hope: { wife: -2 }
        personal: { household: -2 }
      next: h_winter_lent
    - id: buy
      text: Купить муки на оставшиеся деньги
      effects:
        house: { food_days: +2 }
        personal: { dowry: -1 }
      next: h_winter_lent
    - id: skip
      text: Не торговать
      effects:
        hope: { wife: -1 }
        personal: { chin: +1 }
      next: h_winter_lent

- id: w21
  act: winter
  kind: event
  title: Масленица
  text: |
    Перед постом на посаде пекли блины и строили снежный городок, и
    казаки звали на стенку — биться, как в старину, пока не устанут
    или пока не стемнеет. От снега, разбитого сотней ног, стояла
    мутная мгла, и в ней двигались люди, раскрасневшиеся от мороза и
    удали. Ты стоял в стороне и чувствовал, как от чужого веселья
    теплеет в груди.

    Жена держала последнюю муку и смотрела на неё так, что было видно:
    просит совета. «На блины или на хлеб?» — спросила она наконец, и в голосе
    её не было упрёка. За окном кто-то запел, и голос сорвался на
    морозе.

  choices:
    - id: celebrate
      text: Испечь блины на всех и позвать соседей
      effects:
        house: { food_days: -2 }
        hope: { boyar: +6, wife: +6, servant: +4 }
        approval: { kazak: +2, kazachka: +2 }
      next: h_winter_lent
    - id: modest
      text: Испечь мало и только для своих
      effects:
        house: { food_days: -1 }
        hope: { wife: +2 }
      next: h_winter_lent
    - id: skip
      text: Не праздновать и сберечь муку до поста
      effects:
        hope: { wife: -4, servant: -2 }
        approval: { kazak: -1 }
      next: h_winter_lent

- id: w23
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w23
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_w23: true }
  title: Жена хочет к матери
  text: |
    Жена собрала узел и стояла у двери в шубе, застёгнутой на все
    пуговицы, и узел был небольшой — меньше, чем она увозила из
    Москвы. Она не кричала и не плакала, только держалась за дверную
    скобу, и от этой её спокойной готовности тебе стало страшнее, чем
    от слёз. В сенях тянуло холодом.

    «Отпусти меня с обозом, — сказала она. — Там мать, там тепло, там
    есть хлеб». Слуга смотрел в пол и не двигался, а за окном скрипел
    снег под чужими санями. Ты смотрел на её узел и понимал, что в нём
    её приданое, а не её жизнь.

  choices:
    - id: hold
      text: Не пустить её и запереть дверь на засов
      effects:
        hope: { wife: -8, boyar: -4 }
        flag: { wife_stayed: true }
      next: h_winter_svyatki
    - id: let_go
      text: Отпустить её с обозом к матери
      effects:
        hope: { wife: +3 }
        flag: { wife_may_leave: true }
      next: h_winter_svyatki
    - id: give_thing
      text: Отдать последнюю вещь и просить остаться
      effects:
        personal: { dowry: -1 }
        hope: { wife: +8 }
      next: h_winter_svyatki

- id: w25
  act: winter
  kind: side
  when:
    not:
      flag: done_w25
  on_enter:
    flag: { done_w25: true }
  title: Беглый
  text: |
    В сенях, у самой двери, спал человек, и на ноге у него висел
    обрывок кандальной цепи, обмотанный тряпкой. Ты нашёл его до
    света, когда вышел за дровами, и сначала принял за мешок; от него
    пахло мокрой шерстью, дымом и дальней дорогой. Он проснулся сразу,
    как просыпаются те, кого долго ищут.

    «Бежал с каторги, — сказал он, не поднимаясь. — Не выдавай, я
    тебе пригожусь». Воевода искал его третий день и уже пообещал за
    него награду, о которой на посаде говорили открыто. Ты стоял над
    ним и слышал, как из-под двери тянет холодом.

  choices:
    - id: hide
      text: Спрятать его в сенях за кадками
      effects:
        hope: { boyar: +3, wife: -2 }
        flag: { fugitive_hidden: true, risk_voivode: true }
      next: h_winter_svyatki
    - id: hand_over
      text: Выдать беглого воеводе и взять награду
      effects:
        approval: { voivode: +2, kazak: -1 }
        hope: { wife: -4 }
        personal: { chin: -2 }
      next: h_winter_svyatki
    - id: expel
      text: Выгнать его на улицу, но не выдавать
      effects:
        hope: { boyar: -1 }
        flag: { fugitive_left: true }
      next: h_winter_svyatki

- id: w29
  act: winter
  kind: spine
  when:
    all:
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_dead
  title: Солнце вернулось
  text: |
    Над лесом показался край солнца, красный и низкий, и свет его лёг
    на снег длинными полосами, каких ты не видел с осени. Все вышли на
    улицу, кто в чём был, и стояли, щурясь и прикрывая глаза
    рукавицами, потому что отвыкли от яркого.

    Слуга снял шапку, как снимают её в церкви, и стоял с непокрытой
    головой, не замечая мороза. Жена держалась за твой рукав и
    плакала, а ты смотрел на её лицо, освещённое солнцем, и не мог
    выговорить ни слова. Слуга простоял так долго, что снег лёг ему на
    волосы и не таял.

  choices:
    - id: stand
      text: Стоять вместе со всеми на свету
      effects:
        hope: { boyar: +10, wife: +10, servant: +8 }
      next: w30
    - id: work
      text: Сразу взяться за работу
      effects:
        house: { fuel_days: +2 }
        health: { boyar: -2 }
        hope: { wife: +2 }
      next: w30
    - id: cry
      text: Уйти в избу и не смотреть на свет
      effects:
        hope: { boyar: -3, wife: -2 }
      next: w30

- id: w30
  act: winter
  kind: spine
  when:
    all:
      - not:
          flag: wife_dead
  title: Смотр зимы
  text: |
    Казак ходил по двору и считал дрова, трогая поленницу рукавицей, а
    казачка усадила жену у окна и смотрела ей дёсны и пальцы, щурясь
    на свет. Это был не допрос, а смотр, и оттого было хуже: всё
    видели, всё запоминали. Ты стоял рядом и чувствовал, как от мороза
    стынут плечи.

    Воевода пришёл последним и сказал, что пора отписывать в Тобольск,
    жив ли ссыльный. «Ну что, жив?» — спросил он и посмотрел на тебя,
    и стало ясно, что ответ его интересовал больше, чем бумага. Казак в это
    время закрывал крышку кадки, и по его лицу было видно, что он уже
    всё сосчитал.

  choices:
    - id: show
      text: Показать всё, что есть, и не таиться
      effects:
        approval: { kazak: +1, voivode: +1 }
        hope: { boyar: +2 }
      next: w36
    - id: hide
      text: Спрятать остатки и сказать, что всё сыты
      effects:
        approval: { kazak: -1 }
        personal: { chin: +1 }
      next: w36
    - id: ask_help
      text: Попросить помощи у казака и казачки
      effects:
        approval: { kazak: +1, kazachka: +1 }
        hope: { wife: +2 }
        personal: { chin: -2 }
      next: w36

- id: w31
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w31
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w31: true }
  title: Тайник
  text: |
    Под половицей нашлась связка сушёной рыбы, завёрнутая в бересту, —
    старая закладка прежнего жильца, того, кто жил здесь до тебя и
    весны не дождался. Ты поднял доску ножом и почувствовал, как
    из-под пола пахнуло холодной землёй и сушёной рыбой. Рыба была
    твёрдая, как дерево, и совсем целая.

    «Съедим сейчас, — сказала жена, — всё равно до весны не дотянем».
    Слуга покачал головой: «Оставил бы хоть половину, прежний-то жилец,
    видать, тоже думал, что успеет». Ты держал рыбу в руках и думал о
    человеке, который прятал её в голод и всё равно не дожил до тепла.

  choices:
    - id: eat
      text: Съесть всё сейчас и хоть раз наесться
      effects:
        house: { food_days: +3 }
        hope: { wife: +4 }
      next: h_winter_lent
    - id: save
      text: Оставить рыбу на весну и на дорогу
      effects:
        flag: { hidden_fish: true }
        hope: { wife: -1 }
      next: h_winter_lent
    - id: share
      text: Поделиться с казаком
      effects:
        house: { food_days: +1 }
        approval: { kazak: +2 }
        hope: { wife: +2 }
      next: h_winter_lent

- id: w32
  act: winter
  kind: side
  when:
    not:
      flag: done_w32
  on_enter:
    flag: { done_w32: true }
  title: Кража
  text: |
    Ночью кто-то унёс топор и половину рыбы, и на снегу под окном
    остались следы, ведущие к казачьему двору. Следы шли ровно и
    обрывались у ворот: человек вошёл и не вышел. Ты
    стоял над ними и чувствовал, как от холода начинает ломить зубы.

    Казак вышел к тебе сам и смотрел прямо в глаза. «Знать ничего не
    знаю, — сказал он, — у меня своего добра хватает». Он говорил
    спокойно, и по его лицу нельзя было понять ни вины, ни обиды. Ты
    вспомнил, как он учил тебя бить пешню, и спрашивать стало
    труднее.

  choices:
    - id: accuse
      text: Обвинить казака в лицо и требовать своё
      effects:
        approval: { kazak: -3 }
        hope: { wife: -3 }
        personal: { chin: +1 }
      next: h_winter_lent
    - id: forgive
      text: Промолчать и сделать вид, что не заметил
      effects:
        approval: { kazak: +1 }
        hope: { wife: -1 }
      next: h_winter_lent
    - id: ask_voivode
      text: Пойти к воеводе просить суда
      effects:
        approval: { voivode: +1, kazak: -2 }
        personal: { chin: -1 }
      next: h_winter_lent

- id: w33
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w33
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_w33: true }
  title: Шуба в пимы
  text: |
    Жена распорола старую шубу и перешивала мех на детские пимы, и на
    полу вокруг неё лежали обрезки и клочья, пахнущие овчиной и дымом.
    Она работала при окне, наклонившись так низко, что тень от её
    головы закрывала шитьё, и всё равно не поднимала глаз. Иглу она
    держала уверенно, как держат её те, кто шьёт с детства.

    «Я могла бы шить на продажу, — сказала она вдруг. — Пимы здесь
    берут, у казачек тоже руки не железные». Она сказала это и
    посмотрела на тебя как на судью, и ты понял, что речь идёт не о
    сукне и не о деньгах.

  choices:
    - id: support
      text: Дать ей сукно и время шить на продажу
      effects:
        personal: { dowry: -1, household: +5 }
        hope: { wife: +5 }
        flag: { wife_own_1: true }
      next: h_winter_lent
    - id: forbid
      text: Запретить ей шить на продажу
      effects:
        hope: { wife: -6 }
        personal: { chin: +1 }
      next: h_winter_lent
    - id: help
      text: Сесть рядом и помочь ей с шитьём
      effects:
        health: { boyar: -2 }
        personal: { household: +3, opora: +1 }
        hope: { wife: +4 }
      next: h_winter_lent

- id: w34
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w34
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w34: true }
  title: Слуга учит
  text: |
    Слуга сидел на низкой скамье с мальчишкой рядом и рассказывал, как
    ставят сеть под лёд, показывая руками, куда идут крючки и как
    тянуть бичеву. Он говорил медленно, с паузами, и мальчишка
    повторял за ним, шевеля губами, а потом вдруг засмеялся — коротко
    и удивлённо. За окном мело, и снег стучал в слюдяное оконце.

    Впервые за зиму он говорил как хозяин, знающий дело, а не как
    лишний рот, которому нечем оправдаться. Ты стоял в дверях сеней и
    не решался войти, чтобы не спугнуть это. Мальчишка кивал так
    серьёзно, будто ему предстояло ставить сети одному уже завтра.

  choices:
    - id: praise
      text: Похвалить его при всех
      effects:
        hope: { servant: +8 }
        personal: { word: +5, opora: +1 }
        approval: { kazak: +1 }
      next: h_winter_lent
    - id: leave
      text: Не мешать и тихо отойти в сторону
      effects:
        personal: { word: +2 }
        hope: { servant: +2 }
      next: h_winter_lent
    - id: stop
      text: Сказать, что рано ещё учить других
      effects:
        hope: { servant: -5 }
        personal: { chin: +1 }
      next: h_winter_lent

- id: w35
  act: winter
  kind: side
  when:
    not:
      flag: done_w35
  on_enter:
    flag: { done_w35: true }
  title: Второе письмо
  text: |
    Подьячий принёс бумагу, перо и чернильницу, завёрнутую в тряпку,
    чтобы не замёрзла, и положил всё на стол: с последним обозом можно
    было отправить письмо. Чернила в тепле оттаяли и пошли неровно, и
    перо пришлось держать крепче обычного. В избе пахло сыростью и
    чернилами.

    Ты не знал, где сын — у дяди в Москве или уже в бегах. Письмо
    давалось тяжелее самой зимы. «Что напишешь, то
    и решишь», — сказал подьячий без всякого участия, глядя, как ты
    вертишь перо в пальцах. Ты подержал перо над бумагой и понял, что
    за зиму разучился писать длинно.

  choices:
    - id: invite
      text: Позвать сына сюда и найти ему место
      effects:
        flag: { son_invited: true }
        hope: { wife: +6, boyar: +4 }
        personal: { chin: -1 }
      next: w36
    - id: forbid
      text: Запретить ему ехать в эту глушь
      effects:
        hope: { wife: -5, boyar: -2 }
        personal: { chin: +2 }
      next: w36
    - id: bless
      text: Благословить, но не звать к себе
      effects:
        hope: { boyar: +3, wife: +2 }
      next: w36

- id: w36
  act: winter
  kind: spine
  title: К весне
  text: |
    Февраль перевалил за половину, и день стал длиннее обеда: в полдень
    на снегу появлялись синие тени, и по ним можно было понять, что
    солнце уже ходит выше леса. Дров оставалось на неделю, еды на три
    дня, и ты знал это так же точно, как знал про мороз наутро. С
    крыши капало, и капель по ночам замерзала в сосульки.

    Держались все, кто ещё оставался в избе, и понимали, что держаться
    осталось недолго. «К весне дотянем, — сказали у печи, — а там видно
    будет», — и в голосе впервые не было сомнения.

  choices:
    - id: to_spring
      text: Дожить до весны и не думать о худшем
      effects:
        hope: { boyar: +2 }
      next: s01

- id: w43
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w43
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w43: true }
  title: Щёлок
  text: |
    Мыла не было, и жена варила щёлок из золы, а от него жгло руки так,
    что она дула на них и отходила к окну. В избе стоял едкий запах, и
    на языке от него делалось горько, а вода в кадке от щёлока
    мутнела и становилась скользкой. Ты подал ей тряпку, и она вытерла
    руки о передник, оставив на нём серые полосы.

    «Раньше и так обходились, — проворчал слуга из своего угла. —
    Мылись золой да снегом, и ничего». Жена ничего не ответила и
    продолжала мешать в горшке, и по её лицу было видно, что ей не до
    спора.

  choices:
    - id: boil
      text: Варить щёлок из золы и стирать по-чёрному
      effects:
        house: { fuel_days: -1 }
        health: { wife: +2, servant: +1 }
        hope: { wife: +1 }
      next: h_winter_lent
    - id: buy
      text: Купить мыло у купца
      effects:
        personal: { dowry: -1 }
        health: { boyar: +1, wife: +1, servant: +1 }
        hope: { wife: +2 }
      next: h_winter_lent
    - id: water
      text: Обойтись одной водой и не травить руки
      effects:
        health: { wife: -1, servant: -1 }
        hope: { wife: -1 }
        personal: { chin: +1 }
      next: h_winter_lent

- id: w44
  act: winter
  kind: side
  when:
    all:
      - flag: preg
      - not:
          flag: done_w44
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_w44: true }
  title: Ребёнок шевелится
  text: |
    Ночью жена взяла твою руку и положила на живот, и под ладонью
    что-то толкнулось — слабо, но отчётливо, как толкается пойманная
    рыба. Ты лежал в темноте, боясь шевельнуться, и чувствовал под
    ладонью тепло, которого не давала ни одна печь. Она молчала и не
    убирала твою руку.

    В темноте было не видно её лица, и ты не находил, что сказать.
    «Ну что?» — спросила она наконец шёпотом, и
    ты понял, что молчание затянулось слишком надолго. Ты положил
    ладонь обратно и почувствовал, как под ней снова шевельнулось,
    тихо и настойчиво.

  choices:
    - id: joy
      text: Обрадоваться вслух и назвать его по имени
      effects:
        hope: { boyar: +5, wife: +6, servant: +2 }
      next: h_winter_lent
    - id: fear
      text: Сказать, что боишься за неё и за дитя
      effects:
        hope: { wife: -1, boyar: +2 }
        personal: { opora: +1 }
      next: h_winter_lent
    - id: cross
      text: Молча перекреститься и поцеловать ей руку
      effects:
        hope: { boyar: +3, wife: +3 }
        approval: { priest: +1 }
      next: h_winter_lent

- id: w45
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w45
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_w45: true }
  title: Сосульки
  text: |
    С крыши нависли сосульки в человеческий рост, толстые у основания
    и прозрачные на конце, и с них капало даже в самые сильные морозы.
    Солнце задевало их по утрам, и они светились так, что на них
    хотелось смотреть, хотя смотреть было опасно. Ты обошёл избу
    кругом и увидел, что самая толстая висит над крыльцом, где ходят
    каждый день.

    «Одна такая убивает насмерть, я видывал», — сказал слуга и стал
    обходить избу стороной, держась на два шага от стены. Жена просила
    не ходить под ними и выглядывала на крыльцо каждый раз, когда ты
    выходил.

  choices:
    - id: knock
      text: Сбить сосульки самому
      effects:
        health: { boyar: -2 }
        house: { izba: +1 }
        hope: { wife: +1 }
      next: h_winter_lent
    - id: prop
      text: Огородить крыльцо жердями
      effects:
        health: { boyar: -2 }
        skill: { hands: +2 }
        house: { izba: +1 }
      next: h_winter_lent
    - id: wait
      text: Обождать до весны
      effects:
        health: { servant: -2 }
        hope: { wife: -2 }
        personal: { chin: +1 }
      next: h_winter_lent

- id: w46
  act: winter
  kind: side
  when:
    all:
      - not:
          flag: done_w46
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_w46: true }
  title: Жена слегла
  text: |
    Жена слегла к вечеру: жар поднялся так, что от неё шло тепло, как
    от печи, и она лежала на лавке, не открывая глаз. Кашель у неё был
    сухой и частый, а руки она держала поверх шубы, потому что под
    шубой было тяжело. В избе стало тихо так, что слышно было, как в
    кадке оседает вода.

    Казачка пришла к ночи, потрогала ей лоб и велела топить жарче, а
    потом отозвала тебя к двери. «Молись, — сказала она просто. —
    Больше я ничего не скажу». За её спиной жена закашлялась, и звук
    этот был хуже любого приговора.

  choices:
    - id: treat
      text: Лечить и не отходить от её постели
      effects:
        house: { food_days: -1, fuel_days: -1 }
        health: { wife: +6 }
        hope: { wife: +3 }
      next: h_winter_dark
    - id: kazachka
      text: Позвать казачку-повитуху на всю ночь
      effects:
        approval: { kazachka: +2 }
        health: { wife: +4 }
        hope: { wife: +2 }
      next: h_winter_dark
    - id: ignore
      text: Пусть перележит
      effects:
        health: { wife: -18 }
        hope: { wife: -8 }
      next: h_winter_dark
`,Up=`# Фаза: Весна (март–май 1663)
# Карточек: 30 (s01–s30) + условные s16 (уход жены), s30b (без беременности)
# Спина: ледоход, челобитная, пути, уход жены, роды, первая вода.

- id: s01
  act: spring
  kind: spine
  title: Снеготаяние
  text: |
    Днём с крыши шла частая капель, под стенами стояли лужи, а к вечеру
    вода опять схватывалась ледком, и утром сени встречали тебя хрупким
    хрустом под валенками. Снег оседал на глазах и отдавал сыростью,
    из-под него бежали ручьи и текли под избу, и в подполе пахло мокрым
    деревом и оттаявшей землёй. Лёд на реке ещё лежал стеной, но весна
    уже давала о себе знать капелью и тем, как отсырел воротник шубы.

    На крыльцо вынесли лопатку и, глядя, как вода уходит под нижний
    венец, сказали тихо: «До тепла надо отвести её от стены, иначе изба
    сядет на гниль». Из сеней вынесли пустой ушат и поставили под угол,
    где текло сильнее всего.

  choices:
    - id: watch
      when:
        all:
          - not:
              flag: wife_left
          - not:
              flag: wife_dead
      text: Постоять у стены с женой, слушая капель
      effects:
        hope: { boyar: +6, wife: +6, servant: +4 }
      next: h_spring_water
    - id: work
      text: Отвести талую воду от сеней канавой
      effects:
        health: { boyar: -5 }
        house: { izba: +1 }
        personal: { opora: +2 }
      next: h_spring_water
    - id: hide
      text: Затворить дверь и переждать таяние в тепле
      effects:
        hope: { boyar: -2 }
        health: { wife: -1 }
      next: h_spring_water

- id: h_spring_water
  act: spring
  kind: hub
  budget: 4
  title: Вода
  text: |
    Ледоход прошёл ночью и унёс часть сеней, а под полом стояла вода и пахло
    тиной. Половицы вздулись горбом, мох в пазах намок и отваливался
    кусками, и вся изба от порога до печи дышала холодной сыростью, от
    которой ныли плечи и не сохла одежда. До тепла оставалось ещё недели
    две, а починить надо было всё сразу, и на всё не хватало ни сил, ни
    брёвен, ни времени.

    Казак обошёл избу кругом, потрогал пальцем отсыревший венец и сказал,
    не выбирая слов: «Одно сделаешь — другое само подождёт, покуда не
    поздно». Мокрое тряпьё выносили на солнце, а у ямы стояли с обломком
    доски в руках и ждали, куда его поставят, и от этого ожидания у тебя
    тяжелели руки.

    У слуги с зимы держалась цинга, и дёсны кровоточили при каждом куске.
    Соседи на берегу уже смолили лодки и звали помогать, у казака лежала
    порванная сеть, а своя лодка рассохлась и текла по борту. В кадке
    стояла талая вода с песком, и пить её было тошно. До Вербного
    воскресенья оставалась неделя.

  choices:
    - id: water_floor
      text: Поднять половицы и просушить доски
      next: s02
    - id: roof
      text: Перекрыть крышу над сенями
      next: s03
    - id: scurvy
      text: Долечить слугу от цинги
      next: s05
    - id: posad
      text: Пойти помогать посаду с лодками
      next: s12
    - id: net
      text: Зашить порванную сеть
      next: s31
    - id: boat
      text: Засмолить треснувшую лодку
      next: s32
    - id: entryway
      text: Собрать сени заново
      next: s34
    - id: meltwater
      text: Отстоять талую воду в кадках
      next: s36
    - id: willow
      text: Пойти на Вербное воскресенье
      next: s37
    - id: forward
      text: Оставить починку и сесть за челобитную
      next: s_lent

- id: s31
  act: spring
  kind: side
  when:
    not:
      flag: done_s31
  on_enter:
    flag: { done_s31: true }
  title: Сеть
  text: |
    Сеть вытащили на берег после ледохода, и она лежала на песке мокрой
    грудой, порванная в трёх местах, с оборванными грузилами и вырванной
    ячеёй посередине. Руки у тебя застыли над ней на сыром ветру с реки,
    бечева резала пальцы, и ячея путалась так, что за ночь можно было и
    не распутать её до конца. Без сети оставалась только удочка да
    надежда на удачу, а весенняя рыба в мелкой воде не ждала.

    Казак принёс свою сеть и положил рядом, но не отдал, а придержал
    рукой: «Бери, только треть с улова мне, не меньше». Жена посмотрела
    на его сухие, целые ячеи и на твои порезанные пальцы, и в её молчании
    было всё, что она думала о гордости и о хлебе.

  choices:
    - id: mend
      text: Просидеть над сетью всю ночь
      effects:
        health: { boyar: -2 }
        skill: { trade: +2 }
      next: h_spring_water
    - id: take_deal
      text: Взять казачью сеть за треть улова
      effects:
        house: { food_days: +3 }
        approval: { kazak: +1 }
        hope: { wife: -1 }
      next: h_spring_water
    - id: refuse
      text: Обойтись без сети и ловить на удочку у берега
      effects:
        hope: { wife: -1 }
        personal: { chin: +1 }
      next: h_spring_water

- id: s32
  act: spring
  kind: side
  when:
    not:
      flag: done_s32
  on_enter:
    flag: { done_s32: true }
  title: Лодка
  text: |
    Лодку сдвинуло льдом на берегу и ударило о сваю так, что борт
    треснул по всей длине, и теперь в неё можно было смотреть, как в
    корыто. Смола со швов сошла, дерево побелело и рассохлось на солнце,
    а пакля торчала клочьями, и от лодки пахло мокрой щепой и старым
    дёгтем. Без лодки не половишь до самой большой воды, а новая стоила дороже,
    чем всё, что у тебя оставалось.

    Казак обошёл её, постучал обухом по борту и сказал спокойно: «Смолу
    и паклю добудешь — возьмусь сам, но не даром». Ты стоял над трещиной
    и думал, что дешевле заплатить руками, чем серебром, и что серебра
    у тебя осталось меньше, чем пальцев на руке.

  choices:
    - id: fix
      text: Просмолить и проконопатить борт своими руками
      effects:
        health: { boyar: -4 }
        skill: { hands: +3 }
        personal: { opora: +2 }
      next: h_spring_water
    - id: pay
      text: Заплатить казаку серебром за починку лодки
      effects:
        personal: { dowry: -1 }
        approval: { kazak: +1 }
      next: h_spring_water
    - id: leave
      text: Оставить лодку на берегу до лучших времён
      effects:
        hope: { wife: -2 }
        personal: { chin: +1 }
      next: h_spring_water

- id: s02
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s02
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_s02: true }
  title: Вода в избе
  text: |
    Снег таял дружно, и вода шла под пол, так что половицы всплывали под
    ногой, как плошки в корыте, а из щелей поднимался запах гнили и
    мокрого мха. Утром ты ступил на доску и почувствовал, как она
    продавилась и хлюпнула под сапогом, и с тех пор ходил по избе
    осторожно, ставя ногу ближе к печи. Мох в пазах отсырел и отходил
    лохмотьями, и стена у порога потемнела снизу на два венца.

    Слуга поддел половицу ломом и, не поднимая головы, сказал: «Сушить
    надо, иначе к лету сгниёт всё, и дом, и мы». Жена сидела на лавке,
    поджав ноги, чтобы не стыли в воде, и смотрела на тёмную кайму у
    стены так, словно уже прощалась с избой.

  choices:
    - id: dry
      text: Разобрать пол и сушить его на солнце
      effects:
        house: { izba: +1 }
        health: { boyar: -4, servant: -3 }
        skill: { hands: +3 }
        personal: { opora: +3 }
      next: h_spring_water
    - id: patch
      text: Залатать половицы наспех
      effects:
        house: { izba: +1 }
        health: { boyar: -2 }
        flag: { izba_rot: true }
      next: h_spring_water
    - id: wait
      text: Оставить подпол до тепла
      effects:
        house: { izba: -1 }
        health: { wife: -2 }
        hope: { wife: -2 }
      next: h_spring_water

- id: s03
  act: spring
  kind: side
  when:
    not:
      flag: done_s03
  on_enter:
    flag: { done_s03: true }
  title: Крыша
  text: |
    После ледохода крыша над сенями просела и в одном месте провалилась,
    и сквозь дыру было видно белёное небо и слышно, как наверху ходит
    ветер. Стропила потемнели от сырости, тёс разошёлся, и в сени попадал
    дождь, а по утрам иней, от которого доски становились скользкими.
    Лезть наверх в такую крышу было страшно, но оставить её до лета
    значило пустить воду в самое сердце дома.

    Казак потыкал пальцем в стропило и покачал головой: «Доски менять, а
    леса нет». Потом добавил, что у воеводы лес есть и что за него в
    остроге платят не серебром, а работой, и ты сразу почувствовал, как
    к усталости прибавился ещё один долг, длиной в целое лето.

  choices:
    - id: buy
      text: Взять лес у воеводы за летнюю работу
      effects:
        health: { boyar: -5 }
        house: { izba: +1 }
        approval: { voivode: +1 }
        personal: { opora: +2 }
      next: h_spring_water
    - id: patch
      text: Закрыть дыру старым тёсом до настоящих досок
      effects:
        house: { izba: +1 }
        health: { boyar: -2 }
        flag: { roof_patched: true }
      next: h_spring_water
    - id: leave
      text: Оставить крышу до лета
      effects:
        house: { izba: -1 }
        hope: { wife: -2 }
      next: h_spring_water

- id: s05
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s05
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  on_enter:
    flag: { done_s05: true }
  title: Отходит
  text: |
    У слуги ещё кровили дёсны, и он жевал медленно, морщась, но пальцы
    уже разгибались, и ложку он держал сам, не роняя её на стол. Жена
    толкла в горшке прошлогоднюю хвою, заваривала её кипятком и
    заставляла старика жевать распаренные иглы, и в избе стоял горький
    смолистый запах, от которого щипало в носу. Он худел всю зиму и
    теперь ещё был похож на тень, но тень эта уже держала спину.

    Жена поставила перед ним горшок и сказала без жалости, как говорят с
    выздоравливающим: «До лета дотянет, если жевать». Слуга кивнул и
    посмотрел на тебя поверх ложки, и во взгляде была не только
    благодарность: он просил, чтобы его снова считали нужным.

  choices:
    - id: treat
      text: Продолжать поить слугу хвойным отваром
      effects:
        house: { food_days: -1 }
        health: { servant: +8 }
        hope: { servant: +5 }
      next: h_spring_water
    - id: stop
      text: Дать ему работу
      effects:
        health: { servant: -4 }
      next: h_spring_water
    - id: ask_kazachka
      text: Позвать казачку посмотреть дёсны
      effects:
        approval: { kazachka: +2 }
        health: { servant: +5 }
        hope: { wife: +2 }
      next: h_spring_water

- id: s_lent
  act: spring
  kind: spine
  title: Великий пост
  text: |
    Великий пост начался со второго марта, и мясо с молоком кончились ещё
    на Масленицу, так что в избе ели репу, вяленую рыбу и хлеб, и от этой
    скудной еды к вечеру кружилась голова. Поп служил длинно, с земными
    поклонами, и после службы у людей болели колени и спины, а в церкви
    пахло ладаном, холодом и мокрыми тулупами. Жена считала дни до Пасхи
    и вычёркивала их углём на дощечке, и дощечка эта висела у печи, как
    малое окно в будущее.

    После службы поп отвёл тебя в сторону и сказал негромко: «Перед
    Пасхой исповедаться бы, а там и причастие». Ты кивнул, но дома, глядя
    на скудеющий мешок с мукой и на бледные лица своих, долго не мог
    решить, что важнее — облегчить душу или сберечь силы до первой травы.

  choices:
    - id: strict
      text: Поститься строго, по уставу, до самой Пасхи
      effects:
        house: { food_days: +1 }
        health: { boyar: -4, wife: -3, servant: -3 }
        hope: { boyar: +5, wife: +2 }
        approval: { priest: +2 }
      next: s06
    - id: light
      text: Поститься по силам, оставив рыбу и хлеб
      effects:
        house: { food_days: +1 }
        health: { wife: +1, servant: +1 }
        hope: { boyar: +2 }
        approval: { priest: +1 }
      next: s06
    - id: break
      text: Есть, что осталось
      effects:
        health: { wife: +2, servant: +2 }
        hope: { boyar: -2 }
        approval: { priest: -1 }
      next: s06
    - id: confess
      text: Пойти к попу на исповедь и причастие
      effects:
        hope: { boyar: +7, wife: +4, servant: +2 }
        approval: { priest: +2 }
        personal: { chin: -2, opora: +1 }
        flag: { communion: true }
      next: s06

- id: s06
  act: spring
  kind: spine
  title: Челобитная
  text: |
    На столе лежала челобитная, переписанная набело чужим твёрдым
    почерком, и от бумаги пахло клеем и чернилами, а по краю уже
    расплылось тёмное пятно от свечи. Ты читал своё имя, написанное ровно
    и холодно, и не узнавал в нём того человека, который когда-то ездил ко
    двору на расписных санях. Подьячий водил пальцем по краю листа и
    поглядывал на тебя искоса, будто проверял, хватит ли у тебя денег на
    печать.

    Он сказал, не поднимая глаз: «С первым обозом уйдёт, печать и деньги
    твои, а ответ будет не скоро, а может, и не будет». Жена в это время
    стояла у печи, держась за её тёплый бок, и молчала так, будто от этого
    молчания зависело больше, чем от всей бумаги.

  choices:
    - id: send
      text: Отправить челобитную с первым обозом в Москву
      effects:
        personal: { dowry: -1 }
        flag: { petition_sent: true }
        hope: { boyar: +6, wife: +3 }
      next: s07
    - id: rewrite
      text: Переписать челобитную своими словами набело
      effects:
        health: { boyar: -2 }
        flag: { petition_sent: true }
        personal: { opora: +3, chin: -2 }
        hope: { boyar: +4 }
      next: s07
    - id: tear
      text: Порвать бумагу и ни о чём не просить
      effects:
        hope: { boyar: -6, wife: -3 }
        personal: { chin: +1 }
      next: h_spring_path

- id: s07
  act: spring
  kind: spine
  title: Воевода решает
  text: |
    Воевода читал челобитную при тебе, шевеля губами и водя пальцем по
    строкам, и в сенях было слышно, как скрипит его перо и как
    потрескивает сальная свеча на столе. В съезжей избе пахло чернилами,
    топлёным салом и мокрыми тулупами, и от тепла у тебя впервые за день
    заныли отогревающиеся пальцы. Он дочитал, положил бумагу под сукно и
    поднял на тебя глаза, и в них не было ни злобы, ни участия, только
    привычка решать чужие судьбы за утренним чаем.

    «Ответ будет к лету, — сказал он ровно. — Может, будет». И стал
    смотреть, как ты это примешь: с поклоном, с вопросом или с молчанием,
    за которое потом придётся платить серебром. Ты стоял с шапкой в руках
    и знал, что в этой избе всё так же, как год назад, только теперь тебе
    ведома цена каждому слову.

  choices:
    - id: wait
      text: Поблагодарить воеводу и ждать ответа до лета
      effects:
        approval: { voivode: +1 }
        hope: { boyar: -1 }
      next: h_spring_path
    - id: press
      text: Спросить напрямую, когда ждать ответа
      effects:
        approval: { voivode: -1 }
        personal: { chin: +1, opora: +1 }
        hope: { boyar: +2 }
      next: h_spring_path
    - id: bribe
      text: Положить воеводе в руку серебряный рубль
      effects:
        personal: { dowry: -1 }
        approval: { voivode: +2 }
        flag: { petition_granted: true }
      next: h_spring_path

- id: h_spring_path
  act: spring
  kind: hub
  budget: 1
  title: Куда идти
  text: |
    К весне в остроге решалось, кем ты будешь дальше, и решение это было
    не о чине и не о грамоте, а о том, чем ты станешь кормиться, когда
    сойдёт вода. У ворот уже собирались обозы, на берегу смолили лодки,
    купцы считали товар, и вся эта суета шла мимо тебя так же ровно, как
    река мимо берега. Выбор был один, и второго раза не будет, и
    у тебя тяжелели руки и сохло во рту, как перед дальней дорогой.

    Казак стоял у ворот с верёвкой через плечо и ждал, пойдёшь ли ты с ним
    или сам по себе, и его спокойное лицо яснее всяких слов говорило, что
    здесь уважают тех, кто выбрал. В избе ничего не советовали: за
    веретено брались крепче, а на тебя смотрели, как смотрят на человека,
    от которого зависит, где зимовать.

    За зиму к тебе привыкли, и теперь каждый звал к себе. Купец из Устюга
    предлагал торг на равных и показывал товар. Охотник звал в тайгу, где
    промышлял и зимовал. Воевода через подьячего передал, что возьмёт тебя
    в службу при бумагах, а сам подьячий обещал место за приказным столом
    и жалованье. Из дальнего монастыря приезжал старец и говорил о
    постриге. А казак однажды вечером сказал, что весенний обоз идёт на
    запад и что с ним можно уйти.

  choices:
    - id: escape
      text: Готовить побег с весенним обозом на запад
      next: s08
    - id: merchant
      text: Взяться за торг с купцом на равных
      next: s09
    - id: monastery
      text: Принять постриг в дальнем монастыре
      next: s10
    - id: service
      text: Пойти в службу к воеводе при бумагах
      next: s11
    - id: taiga
      text: Уйти с охотником в тайгу навсегда
      next: s13
    - id: clerk
      text: Сесть за приказные бумаги ради жалованья
      next: s14
    - id: forward
      text: Жить как жили и не искать другой доли
      next: s15

- id: s08
  act: spring
  kind: side
  when:
    not:
      flag: done_s08
  on_enter:
    flag: { done_s08: true }
  title: Побег
  text: |
    Казак говорил тихо, почти на ухо, хотя в сенях никого не было, и от
    его шёпота в горле у тебя пересыхало, а пальцы сами сжимались в кулак.
    Он рассказывал, что с весенним обозом можно уйти на запад, что до
    Верхотурья идут реками и трактом, что там своих искать надо, и каждое
    слово ложилось на чашу весов против страха. Ночью ты лежал на лавке и
    слушал, как дышит изба, и думал о том, что за побег здесь отвечают
    головой.

    «До Верхотурья дойдёшь, там своих ищи», — сказал казак на прощание и
    посмотрел тебе прямо в глаза. Жена утром заметила твою собранную
    котомку и ничего не спросила, только поставила на стол горшок с
    похлёбкой и села напротив, и молчала она так, что ты не решался заговорить.

  choices:
    - id: prepare
      text: Готовить побег тайком
      effects:
        personal: { dowry: -1 }
        flag: { escape_ready: true }
        hope: { boyar: +5 }
      next: h_spring_path
    - id: refuse
      text: Отказаться от побега и остаться на месте
      effects:
        approval: { kazak: -1 }
        personal: { chin: +1 }
      next: h_spring_path
    - id: report
      text: Донести воеводе о разговоре с казаком
      effects:
        approval: { voivode: +2, kazak: -3 }
        hope: { wife: -4 }
        personal: { chin: -3 }
      next: h_spring_path

- id: s09
  act: spring
  kind: side
  when:
    not:
      flag: done_s09
  on_enter:
    flag: { done_s09: true }
  title: Купец
  text: |
    Купец привёз соль и скупал пимы, брал всё, что жена успевала нашить, и
    не торговался, а только щупал мех и смотрел на свет шов. В избе от
    него пахло дорогой кожей, дёгтем и чужими городами, и он сидел на
    лавке свободно, как человек, которому везде место. Он говорил
    «Москва» так, будто это за тридевять земель, и у тебя в
    груди что-то сжималось.

    «Дело поставим, — обещал он, откладывая деньги. — Ты считаешь, я
    вожу; зимой с голоду не помрёшь, а там и до Москвы слух дойдёт». Жена
    слушала его, опустив глаза, и вертела в пальцах обрезок сукна, и было
    видно, что она и верит, и боится поверить.

  choices:
    - id: join
      text: Взяться за торг и считать с купцом пополам
      effects:
        personal: { opora: +4 }
        flag: { path_merchant: true }
        hope: { boyar: +5 }
      next: h_spring_path
    - id: one_deal
      text: Провести одну сделку
      effects:
        house: { food_days: +2 }
        personal: { opora: +1 }
      next: h_spring_path
    - id: refuse
      text: Отказаться от торга и жить как прежде
      effects:
        hope: { wife: -1 }
      next: h_spring_path

- id: s10
  act: spring
  kind: side
  on_enter:
    flag: { done_s10: true }
  when:
    all:
      - not:
          flag: done_s10
      - not:
          flag: path_merchant
  title: Постриг
  text: |
    Поп пришёл в избу после службы, сел на лавку у печи и долго грел руки,
    прежде чем заговорить, и от его тихого голоса в доме стало теснее. Он
    говорил о монастыре, где тепло и кормят, где не ищут и где можно
    устроить жену при обители, и каждое его слово было мягким, как войлок,
    и таким же тяжёлым. Ты слушал и чувствовал, как в горле встаёт сухой
    ком, потому что за этими словами стояла разлука длиной в остаток
    жизни.

    «Там тепло, там кормят, там тебя не ищут», — повторил поп и посмотрел
    не на жену, а на тебя. Жена стояла у печи и не дышала, и её руки,
    сложенные на переднике, были белыми, как снег за окном, и это молчание
    было громче любого ответа.

  choices:
    - id: consider
      text: Согласиться уйти в монастырь и оставить жену
      effects:
        flag: { path_monastery: true }
        hope: { boyar: +4, wife: -10 }
        personal: { chin: +2 }
      next: h_spring_path
    - id: refuse
      text: Отказаться от пострига и остаться с женой
      effects:
        hope: { wife: +5 }
        personal: { opora: +2 }
      next: h_spring_path
    - id: ask_wife
      text: Отвести жену в сторону и спросить её совета
      effects:
        hope: { wife: +3 }
        personal: { opora: +1 }
      next: h_spring_path

- id: s11
  act: spring
  kind: side
  on_enter:
    flag: { done_s11: true }
  when:
    all:
      - not:
          flag: done_s11
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
  title: Служба
  text: |
    Воевода сидел за столом, держа перо наготове, и чернильница перед ним
    была полна до краёв, а на бумаге уже стояла первая строка присяги. В
    съезжей избе было тепло и душно, пахло воском и сукном, и от
    тепла у тебя размякли плечи, натруженные за зиму. Он говорил, что
    грамотных из Москвы здесь мало, что оклад пойдёт и землю дадут, и
    голос его был ровен, как дорога.

    «Подпишешь — и ты уже не ссыльный, а служилый, — сказал он, не
    поднимая пера. — Назад дороги нет». Ты смотрел на его руку, лежавшую
    на столе, и думал о том, что присяга свяжет тебя крепче любой верёвки,
    а отказаться — значит остаться тем, кем привезли.

  choices:
    - id: accept
      text: Согласиться и присягнуть воеводе на кресте
      effects:
        flag: { path_service: true }
        approval: { voivode: +2 }
        hope: { boyar: +5, wife: +3 }
      next: h_spring_path
    - id: think
      text: Сказать, что подумаешь до утра
      effects:
        hope: { boyar: +1 }
      next: h_spring_path
    - id: refuse
      text: Отказаться от присяги и остаться ссыльным
      effects:
        approval: { voivode: -2 }
        personal: { opora: +2 }
      next: h_spring_path

- id: s12
  act: spring
  kind: side
  on_enter:
    flag: { done_s12: true }
  when:
    all:
      - not:
          flag: done_s12
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  title: Посад
  text: |
    Соседи звали на посад помогать с лодками и сетями, и с утра у ворот
    уже стоял казак с верёвкой через плечо, а за ним двое мальчишек с
    вёслами. На берегу пахло смолой, мокрым песком и рыбой, и работа там
    шла дружная, с шутками и покрикиванием, от которого у тебя, человека
    тихого, немного звенело в ушах. Руки у тебя ещё не привыкли к такой
    работе, и ты знал, что к вечеру они будут гореть.

    Казак сказал просто, без нажима: «Весной все свои, а зимой видно
    будет». Слуга стоял поодаль с топором и ждал, куда его пошлют, а жена
    уже несла воду в бадейке, будто всю жизнь только это и делала.

  choices:
    - id: help
      text: Пойти помогать посаду с лодками и сетями
      effects:
        health: { boyar: -4 }
        personal: { opora: +3 }
        approval: { kazak: +2, kazachka: +2 }
        flag: { helped_posad_2: true }
      next: h_spring_water
    - id: send_servant
      text: Послать слугу вместо себя, а самому остаться
      effects:
        health: { servant: -4 }
        approval: { kazak: +1 }
        personal: { idle_days: -2 }
      next: h_spring_water
    - id: refuse
      text: Отказаться и остаться дома
      effects:
        approval: { kazak: -1 }
      next: h_spring_water

- id: s13
  act: spring
  kind: side
  on_enter:
    flag: { done_s13: true }
  when:
    all:
      - not:
          flag: done_s13
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
            - flag: path_posad
  title: Тайга
  text: |
    Охотник пришёл к избе под вечер, сел у двери на корточки и стал
    рассказывать про тайгу, где стоит изба, где река и где никто не
    спрашивает, за что тебя сослали. Он не уговаривал и не смотрел в
    глаза, только чертил прутом по полу, показывая реку и зимовья, и от
    его спокойного голоса в избе становилось тише. Пахло от него дымом,
    оленьей шкурой и снегом, и этот запах был крепче любого обещания.

    «Можно и навсегда», — сказал он, помолчав, и в этих словах не было ни
    соблазна, ни жалости. Жена сидела у печи, опустив глаза, и её молчание
    было тяжёлым, потому что тайга означала для неё не волю, а ещё одну
    зиму без людей.

  choices:
    - id: go
      text: Уйти с охотником в тайгу на промысел
      effects:
        flag: { path_taiga: true }
        hope: { boyar: +5, wife: -8 }
        health: { boyar: -4 }
      next: h_spring_path
    - id: try
      text: Сходить в тайгу с охотником
      effects:
        house: { food_days: +2 }
        health: { boyar: -5 }
        skill: { trade: +3 }
      next: h_spring_path
    - id: refuse
      text: Остаться в остроге
      effects:
        hope: { wife: +2 }
      next: h_spring_path

- id: s14
  act: spring
  kind: side
  on_enter:
    flag: { done_s14: true }
  when:
    all:
      - not:
          flag: done_s14
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
            - flag: path_posad
            - flag: path_taiga
  title: Писарь
  text: |
    Подьячий позвал тебя в приказную избу и показал на стол у окна, где
    лежала стопка бумаг и стояла чернильница с обломанным пером. В избе
    пахло кислым клеем, пылью и мокрым сукном, и от тишины, в которой
    слышно было только скрип пера, у тебя заныло в висках. Он обещал
    жалованье малое, но верное, и говорил, что за бумагами не мёрзнешь и
    не голодаешь.

    «Будешь переписывать, — сказал он и подтолкнул к тебе первую грамоту.
    — Рука у тебя твёрдая, а больше ничего и не надо». Ты взял перо и
    почувствовал, как чужая жизнь ложится на лист ровными строками, а
    твоя собственная уходит куда-то в сторону, пока ты её переписываешь.

  choices:
    - id: accept
      text: Сесть за бумаги в приказной избе
      effects:
        flag: { path_clerk: true }
        personal: { opora: +2 }
        hope: { boyar: +3 }
      next: h_spring_path
    - id: refuse
      text: Отказаться от приказной службы и жалованья
      effects:
        hope: { boyar: -1 }
      next: h_spring_path
    - id: ask_pay
      text: Торговаться с подьячим о жалованье и харче
      effects:
        approval: { podyachiy: -1 }
        hope: { boyar: +2 }
        personal: { chin: +1 }
      next: h_spring_path

- id: s15
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  title: Жена и своё дело
  text: |
    Жена сшила первые пимы на продажу и поставила их на стол, как ставят
    на стол хлеб, и они лежали рядом с горшком, тёплые, пахнущие
    выделанной шкурой и дымом. Купец повертел их в руках, посмотрел шов на
    свет, сказал, что возьмёт ещё, и отсчитал деньги медными монетами. Она
    держала их в ладони и впервые за год улыбалась не тебе, а своему делу.

    Ты стоял рядом и видел, как разгладилась у неё морщина между бровями,
    и понимал, что эти медяки значат для неё больше, чем вся казна,
    которую отписали в Москве. Слуга смотрел на деньги издали, и в его
    глазах было что-то похожее на уважение к чужому умению.

  choices:
    - id: support
      text: Дать жене время на её шитьё
      effects:
        personal: { household: +6 }
        hope: { wife: +8 }
        flag: { wife_own_2: true }
      next: s16
    - id: use_money
      text: Забрать деньги в дом на хлеб и соль
      effects:
        house: { food_days: +2 }
        hope: { wife: -6 }
      next: s16
    - id: praise
      text: Похвалить её работу
      effects:
        hope: { wife: +4 }
        personal: { household: +2 }
      next: s16

- id: s16
  act: spring
  kind: spine
  when:
    all:
      - personal: { key: dowry, op: lte, value: 1 }
      - personal: { key: household, op: lt, value: 40 }
  title: Жена уходит
  text: |
    Утром у двери стоял узел, перевязанный верёвкой, и рядом её сапоги,
    вычищенные и поставленные ровно, и от порядка в избе
    становилось страшно. За окном уже скрипели полозья, кто-то покрикивал
    на лошадей, и в сенях тянуло холодом и снегом. Жена стояла спиной к
    тебе, в шубе, застёгнутой на все пуговицы, и её плечи были прямыми,
    как у человека, который уже решил.

    «Ухожу с обозом, потому что здесь я никто и ты мне никто, а там мать
    и люди», — сказала она не оборачиваясь. В сенях уже топали чужие
    сапоги, и от стука у тебя холодели руки.

  choices:
    - id: stop
      text: Встать в дверях и не пустить её с обозом
      effects:
        hope: { wife: -10, boyar: -5 }
        flag: { wife_stayed: true }
      next: s16b
    - id: let
      text: Отпустить её с обозом, не сказав лишнего
      effects:
        flag: { wife_left: true }
        hope: { boyar: -6 }
      next: s16b
    - id: give_last
      text: Отдать последнюю вещь и просить остаться
      effects:
        personal: { dowry: -1 }
        hope: { wife: +5 }
        flag: { wife_stayed: true }
      next: s16b

- id: s16b
  act: spring
  kind: spine
  when:
    all:
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  title: Слуга и стол
  text: |
    Слуга впервые сел за общий стол без разрешения, и в избе стало так
    тихо, что слышно было, как потрескивает лучина в светце. Он сидел на
    краю лавки, держась за столешницу, и руки у него дрожали, а ложку он
    взял только после того, как увидел, что никто не кричит. Пахло щами и
    хлебом, и от простого запаха в доме становилось теплее, чем от
    печи.

    Ты подвинул ему хлеб и налил щей, и никто не сказал ни слова. Он
    ел и смотрел в стол, боясь, что его прогонят, и у тебя сжималось
    горло: ты знал, как легко прогнать
    человека, который больше не нужен.

  choices:
    - id: name
      text: Назвать слугу по имени за общим столом
      effects:
        hope: { servant: +8 }
        personal: { word: +5, opora: +1 }
        flag: { servant_free: true }
      next: s18
    - id: silence
      text: Промолчать и не назвать его никак
      effects:
        hope: { servant: +3 }
        personal: { word: +2 }
      next: s18
    - id: correct
      text: Напомнить ему, где его место за столом
      effects:
        hope: { servant: -6 }
        personal: { chin: +1 }
      next: s18

- id: s17
  act: spring
  kind: side
  when:
    not:
      flag: done_s17
  on_enter:
    flag: { done_s17: true }
  title: Котомка
  text: |
    Мальчишка стоял у крыльца с котомкой за плечами, и его валенки были мокры
    сверху, а лицо красным от ветра и от того, что он долго ждал. Обоз уже
    собирался за воротами, скрипели полозья, ржали лошади, и в этом шуме
    его молчание было особенно заметным. Он простился со всеми по очереди
    и теперь ждал только твоего слова, и от ожидания у тебя тяжелело
    в груди.

    На крыльцо вышли и сказали тихо, без нажима: «Позови, места
    хватит». Мальчишка смотрел на тебя из-под мокрой шапки, и в его глазах
    была та же надежда, что и в первую зиму.

  choices:
    - id: stay
      text: Позвать мальчишку остаться в избе
      effects:
        house: { food_days: -1 }
        hope: { wife: +5, servant: +3 }
        flag: { foundling_stayed: true }
      next: h_spring_people
    - id: let_go
      text: Отпустить его искать своих с обозом
      effects:
        hope: { wife: -3 }
        flag: { foundling_left: true }
      next: h_spring_people
    - id: give_food
      text: Дать ему еды на дорогу
      effects:
        house: { food_days: -1 }
        hope: { wife: +2 }
        flag: { foundling_left: true }
      next: h_spring_people

- id: s18
  act: spring
  kind: spine
  when:
    all:
      - flag: son_invited
      - not:
          flag: son_left_alone
  title: Сын приехал
  text: |
    С обозом пришёл сын, выросший, чужой, в чужой шубе и с чужим говором,
    и ты не сразу узнал в нём того мальчика, которого помнил у крыльца. Он
    стоял у ворот, держа шапку в руках, и не шёл обниматься, а только
    смотрел на тебя, проверяя, тот ли это человек. От него пахло
    дорогой, лошадьми и чужим домом, и от запаха тебе стало горько и
    радостно одновременно.

    Ты не знал, куда деть руки, и всё трогал его плечо, будто проверял,
    что он настоящий. Ты стоял напротив сына, и между
    вами лежала целая зима, о которой нечего было сказать вслух.

  choices:
    - id: embrace
      text: Обнять сына и не спрашивать ни о чём
      effects:
        hope: { boyar: +10, wife: +12, servant: +6 }
        flag: { son_arrived: true }
      next: h_spring_people
    - id: scold
      text: Спросить сына, зачем он приехал
      effects:
        hope: { boyar: -2, wife: -4 }
        flag: { son_arrived: true }
      next: h_spring_people
    - id: work
      text: Дать сыну дело с первого же дня
      effects:
        hope: { boyar: +4, wife: -2 }
        flag: { son_arrived: true }
      next: h_spring_people

- id: h_spring_people
  act: spring
  kind: hub
  budget: 5
  title: Люди и дом
  text: |
    К весне стало видно, кто чем стал за зиму, и это было видно не по
    словам, а по тому, кто первым здоровался у церкви и кто отводил
    глаза. Дом, соседи, приёмыш, хозяйство — всё это требовало рук до
    смотра, а смотр должен был решить, останется ли за тобой хоть
    что-нибудь. Времени было меньше, чем думалось, и солнце стояло уже
    высоко, а снег сходил с огородов тёмными пятнами.

    Квашню вынесли на крыльцо и сказали, что до Пасхи надо успеть
    больше, чем за всю зиму, а у стены стояли с лопатой и ждали, куда
    пошлют. Ты смотрел на посад, на дымы над крышами и на реку, и
    понимал, что теперь всё зависит от того, кого ты успеешь назвать
    своим.

    Приёмыш, мальчишка с посада, жил у вас с зимы и ходил за всеми
    следом. В доме просили денег на своё дело — шитьё на продажу. На сходе
    теперь слушали и тебя, и это было видно по тому, как здоровались.
    Грамота шла у мальчишки туго, но он просил ещё.
    Соседи звали за общий стол, а на
    паперти после обедни стояли нищие, и поп говорил, что подают тем, кто
    просит. На огородах уже показалась первая трава.

  choices:
    - id: foundling
      text: Поговорить с приёмышем
      next: s17
    - id: humiliate
      text: Постоять с нищими на паперти
      next: s_humiliate
    - id: easter
      text: Отметить Пасху за общим столом
      next: s20
    - id: grass
      text: Выйти на первую траву с женой
      next: s21
    - id: neighbors
      text: Пойти к соседям на общий стол
      next: s23
    - id: household
      text: Отдать жене её дело
      next: s25
    - id: word
      text: Послушать, как слугу слушают другие
      next: s26
    - id: letters
      text: Учить мальчишку грамоте
      next: s27
    - id: risk
      text: Позвать повитуху заранее
      next: s_risk
    - id: forward
      text: Оставить дела до весеннего смотра
      next: s28

- id: s_risk
  act: spring
  kind: side
  when:
    all:
      - flag: preg
      - not:
          flag: done_s_risk
  on_enter:
    flag: { done_s_risk: true }
  title: Тяжёлая беременность
  text: |
    Жена была на седьмом месяце, и к вечеру у неё ныла поясница, но она не
    говорила об этом, только крепче держалась за край лавки, когда думала,
    что ты не видишь. От неё пахло тёплой шерстью и молоком, лицо у неё
    было бледным, как воск, а под глазами лежали тёмные тени. Ты смотрел
    на её живот и чувствовал, как в груди поднимается страх, от которого
    холодеют ладони.

    Казачка пришла проведать и, глядя на неё, сказала прямо: «Повитуху
    зови и не экономь, тут не до жита, тут живая душа». Жена промолчала, и
    в этом молчании ты услышал, что она боится не боли, а того, что
    придётся просить.

  choices:
    - id: midwife
      text: Позвать повитуху и заплатить, сколько просит
      effects:
        house: { food_days: -1 }
        health: { wife: +2 }
        hope: { wife: +2 }
      next: h_spring_people
    - id: save
      text: Сэкономить на повитухе и обойтись самим
      effects:
        health: { wife: -45 }
        hope: { wife: -3 }
      next: h_spring_people
    - id: work
      text: Пусть работает по дому до последнего дня
      effects:
        health: { wife: -30 }
        personal: { household: +2 }
        hope: { wife: -2 }
      next: h_spring_people

- id: s_humiliate
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s_humiliate
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_s_humiliate: true }
  title: Милостыня
  text: |
    После обедни народ выходил из церкви на паперть, и у двери уже стояли
    двое нищих с туесками. Прихожане подавали медяки, кто сколько мог, и
    никто не смотрел друг другу в глаза. Ты стоял в стороне, у стены, и
    ждал, пока разойдутся.

    Поп остановился рядом и сказал, не понижая голоса: «Стоишь — так проси.
    Здесь подают тем, кто просит, а не тем, кто ждёт». Жена смотрела в
    землю, слуга держал шапку в руках, и слышно было, как под навесом капает
    с крыши.

  choices:
    - id: accept
      text: Протянуть руку и принять подаяние
      effects:
        personal: { chin: -16 }
        house: { food_days: +1 }
        hope: { boyar: -4, wife: -2 }
        approval: { priest: +1 }
      next: h_spring_people
    - id: ask_work
      text: Попросить у попа работу за хлеб
      effects:
        personal: { chin: -6 }
        house: { food_days: +1 }
        health: { boyar: -2 }
      next: h_spring_people
    - id: refuse
      text: Отойти от паперти и не просить ничего
      effects:
        personal: { chin: +2 }
        hope: { boyar: -1 }
      next: h_spring_people

- id: s20
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s20
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_s20: true }
  title: Пасха
  text: |
    На Пасху поп обходил избы с крестом и красным яйцом, и в каждой избе
    его ждали с чистой скатертью и с последней мукой. В остроге пекли
    куличи, и от запаха в избе становилось тесно и светло, а на
    столе появилось то, чего не было всю зиму. За окном капало с крыш, и в
    открытую дверь тянуло тёплым ветром, и от этой весны кружилась голова.

    Поп вошёл, окропил углы святой водой и сказал, что Господь послал им
    ещё одну весну, и в его голосе была простая радость, без всякого
    укора. Жена держала перед ним поднос с куличом, и руки у неё дрожали,
    потому что этот кулич был последним, что осталось от московской муки.

  choices:
    - id: celebrate
      text: Накрыть стол на всех и позвать соседей
      effects:
        house: { food_days: -2 }
        hope: { boyar: +6, wife: +6, servant: +4 }
        approval: { priest: +2 }
      next: h_spring_people
    - id: modest
      text: Отметить Пасху скромно, в своей избе
      effects:
        house: { food_days: -1 }
        hope: { wife: +3 }
      next: h_spring_people
    - id: work
      text: Работать в праздник, не поднимая головы
      effects:
        house: { fuel_days: +2 }
        hope: { wife: -2 }
      next: h_spring_people

- id: s21
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s21
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_s21: true }
  title: Первая трава
  text: |
    На проталине у избы показалась трава, редкая, бледная, но уже
    настоящая, и от неё пахло землёй и солнцем. Жена вышла босиком, стала
    на краю проталины и не решалась наступить, и её белые ноги на тёмной
    земле были чужими в этом мире. Слуга стоял рядом и смеялся, и в
    этом смехе было столько же радости, сколько слёз.

    «Иди сюда, — сказала она тихо, не оборачиваясь. — Трава». Ты стоял в
    дверях и смотрел, как она переступает босой ногой по прошлогодней
    листве, и думал о том, что за эту минуту можно отдать всю зиму.

  choices:
    - id: join
      text: Выйти к жене на первую траву босиком
      effects:
        hope: { boyar: +8, wife: +8, servant: +5 }
      next: h_spring_people
    - id: call_back
      text: Позвать её обратно в избу
      effects:
        health: { wife: -1 }
        hope: { wife: +2 }
      next: h_spring_people
    - id: watch
      text: Смотреть на неё из окна и не мешать
      effects:
        hope: { boyar: +2 }
      next: h_spring_people

- id: s23
  act: spring
  kind: side
  on_enter:
    flag: { done_s23: true }
  when:
    all:
      - not:
          flag: done_s23
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
            - flag: path_taiga
            - flag: path_clerk
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  title: Соседи зовут
  text: |
    Казак позвал на общий стол, который ставили во дворе у его избы, и от
    этого приглашения в груди у тебя потеплело, как от первой чарки. Над
    посадом стоял дым, пахло варёной рыбой и печёным хлебом, и люди
    сходились к столу не спеша, неся кто что мог. Жена тянула за рукав и
    кивала, а слуга мотал головой и бурчал, что своё нести надо в свой
    дом.

    «Весной все свои, — сказал казак, ставя на стол горшок. — А зимой
    видно будет». Ты стоял у ворот и держал холстину с хлебом, не зная, брать её с
    собой или оставить.

  choices:
    - id: go
      text: Пойти на общий стол со своим хлебом
      effects:
        house: { food_days: -1 }
        approval: { kazak: +2, kazachka: +2 }
        hope: { wife: +4 }
      next: h_spring_people
    - id: go_empty
      text: Пойти с пустыми руками
      effects:
        approval: { kazak: -1 }
        hope: { wife: -2 }
        personal: { chin: -1 }
      next: h_spring_people
    - id: refuse
      text: Не ходить на общий стол и остаться дома
      effects:
        approval: { kazak: -1 }
        hope: { wife: -2 }
      next: h_spring_people
    - id: stay_posad
      text: Сказать соседям, что остаёшься здесь навсегда
      hint: Это уже не ссылка, а место.
      effects:
        house: { food_days: -1 }
        approval: { kazak: +2, kazachka: +2 }
        hope: { boyar: +4, wife: +4 }
        personal: { opora: +4 }
        flag: { path_posad: true }
      next: h_spring_people

- id: s25
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s25
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_s25: true }
  title: Жена и хозяйство
  text: |
    Купец пришёл за пимами и оставил задаток, положив деньги на стол рядом
    с горшком, и на столе стало тесно и радостно. Жена держала
    монеты в руках и не знала, куда их класть, потому что за год привыкла,
    что всё, что приходит в дом, приходит не от неё. В её лице было
    что-то новое, и это новое тебе нравилось больше прежней покорности.

    «Это за мою работу», — сказала она тихо, и в голосе её не было вызова,
    только просьба, чтобы ты понял. Ты смотрел на её руки, державшие
    деньги, и думал о том, что в этом доме впервые появилось то, что
    принадлежит только ей.

  choices:
    - id: hers
      text: Оставить задаток жене на её дело
      effects:
        personal: { household: +5 }
        hope: { wife: +7 }
        flag: { wife_own_3: true }
      next: h_spring_people
    - id: house
      text: Взять деньги в дом на хлеб
      effects:
        house: { food_days: +2 }
        hope: { wife: -4 }
      next: h_spring_people
    - id: advice
      text: Посоветовать, на что потратить задаток
      effects:
        hope: { wife: +2 }
        personal: { household: +2 }
      next: h_spring_people

- id: s26
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s26
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_s26: true }
  title: Слуга и слово
  text: |
    Казак пришёл к слуге советоваться, где ставить сеть, и они сидели у
    печи вдвоём над куском бересты, на котором был процарапан изгиб реки.
    Слуга говорил медленно и уверенно, показывая пальцем на излучину, и
    казак кивал, а не спорил, и в избе становилось тихо и важно.
    Пахло дымом и мокрой шерстью, и в этом запахе было что-то от прежней,
    ещё не растерянной жизни.

    Ты стоял в стороне и видел, как старик распрямился, показывая место, и
    как его слушают. Жена переглянулась с тобой и чуть улыбнулась, и в этой
    улыбке была гордость за чужое достоинство, которую ты не сразу и
    признал.

  choices:
    - id: proud
      text: Сказать слуге, что гордишься им
      effects:
        hope: { servant: +8 }
        personal: { word: +5 }
      next: h_spring_people
    - id: silent
      text: Промолчать и отойти в сторону
      effects:
        hope: { servant: +3 }
      next: h_spring_people
    - id: jealous
      text: Осадить слугу при казаке
      effects:
        hope: { servant: -6 }
        personal: { chin: +1 }
      next: h_spring_people

- id: s27
  act: spring
  kind: side
  when:
    not:
      flag: done_s27
  on_enter:
    flag: { done_s27: true }
  title: Боярин и грамота
  text: |
    Мальчишка принёс бересту и положил её на стол, и на бересте кривыми, но
    упрямыми буквами было выцарапано твоё имя. Он стоял рядом, держа руки
    за спиной, и ждал, что ты скажешь, и от ожидания у него краснели
    уши. Береста пахла лесом и дымом, и буквы на ней были процарапаны с
    такой силой, что прорезали кору насквозь.

    «Я написал твоё имя», — сказал он и на всякий случай показал пальцем,
    где именно. Ты смотрел на кривые буквы и чувствовал, как в груди
    поднимается что-то похожее на нежность, и понимал, что учить его дальше
    будет и легко, и нужно.

  choices:
    - id: teach_more
      text: Учить мальчишку дальше
      effects:
        hope: { servant: +4, boyar: +3 }
        personal: { opora: +4 }
        flag: { taught_boy: true }
      next: h_spring_people
    - id: praise
      text: Похвалить за труды
      effects:
        personal: { opora: +1 }
        hope: { boyar: +1 }
      next: h_spring_people
    - id: correct
      text: Исправить кривые буквы своей рукой
      effects:
        personal: { chin: +1, opora: +1 }
      next: h_spring_people

- id: s28
  act: spring
  kind: spine
  when:
    all:
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  title: Смотр весны
  text: |
    Последний смотр собрался во дворе съезжей избы, и на нём было больше
    людей, чем ты ожидал: казак, казачка, подьячий, двое служилых и сам
    воевода в крытой сукном малице. За околицей уже зеленело, над рекой стоял
    туман, и от земли шёл пар, и в этом свете все лица были мягче, чем
    зимой. Все уже знали, что ты дожил, и смотрели на тебя иначе, чем год
    назад, без жалости, с любопытством и уважением.

    Воевода спросил, что скажешь о зиме, и в его голосе не было прежней
    холодности, только привычка слушать и решать. Казак стоял рядом и
    молчал, но его молчание было добрым, и тебе хотелось сказать
    правду, а не то, что приятно слушать.

  choices:
    - id: truth
      text: Сказать воеводе правду о зиме
      effects:
        approval: { kazak: +1, voivode: +1 }
        hope: { boyar: +3 }
      next: s29
    - id: boast
      text: Похвастаться перед смотром своими трудами
      effects:
        approval: { kazak: -1 }
        personal: { chin: +1 }
      next: s29
    - id: thank
      text: Поблагодарить казака и казачку
      effects:
        approval: { kazak: +2, kazachka: +2 }
        hope: { wife: +3 }
        personal: { opora: +2 }
      next: s29

- id: s29
  act: spring
  kind: spine
  when:
    all:
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
  title: Прощание с зимой
  text: |
    Печь топили в последний раз по-зимнему, жарко, до самого устья, и от
    этого в избе стояла такая духота, что приходилось выходить на крыльцо.
    За окном капало, снег сходил с крыш, и от реки тянуло сыростью и тёплым
    ветром, а лёд уже потемнел и осел. Ты стоял у двери, держа в руке
    рукавицы, и чувствовал, как отвыкшая от тепла кожа горит на щеках.

    Слуга вытер руки о передник и сказал тихо, с усталой радостью:
    «Дожили». Слуга смотрел на реку, и все молчали: за этой зимой стояло столько,
    что слова были не нужны.

  choices:
    - id: together
      text: Стоять всем вместе на берегу реки
      effects:
        hope: { boyar: +5, wife: +5, servant: +5 }
      next: s30
    - id: work
      text: Готовить лодку к спуску на воду
      effects:
        house: { food_days: +1 }
        health: { boyar: -2 }
      next: s30
    - id: silent
      text: Молчать и смотреть на тёмную воду
      effects:
        hope: { wife: -2 }
      next: s30

- id: s30
  act: spring
  kind: spine
  when:
    all:
      - flag: preg
      - health: { hero: wife, op: gte, value: 30 }
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  title: Роды
  text: |
    Ночью жена разбудила тебя, взяв за плечо, и в её голосе было столько
    страха и терпения, что ты вскочил сразу, не успев проснуться. Казачка
    уже хлопотала в избе, растапливали печь, и от сырых дров шёл
    горький дым, от которого щипало глаза. За окном светлело, и в избе было особенно тихо.

    «Не уходи», — сказала жена, и её рука на твоём рукаве была горячей и
    сильной. Ты сел рядом на лавку и почувствовал, как в доме, где всё было
    общим, начинается то, что никому не разделить.

  choices:
    - id: help
      text: Быть рядом с женой до самого конца
      effects:
        health: { wife: -6 }
        hope: { wife: +6, boyar: +4 }
        flag: { child_born: true }
      next: s_baptism
    - id: call_priest
      text: Позвать попа прямо в избу с крестом
      effects:
        hope: { wife: +3 }
        approval: { priest: +2 }
        flag: { child_born: true }
      next: s_baptism
    - id: wait_outside
      text: Выйти во двор и слушать через дверь
      effects:
        hope: { wife: -4, boyar: -2 }
        health: { wife: -4 }
        flag: { child_born: true }
      next: s_baptism
    - id: late_midwife
      text: Послать за повитухой
      effects:
        health: { wife: -35 }
        hope: { wife: -6, boyar: -2 }
        flag: { child_born: true }
      next: s_baptism

- id: s30d
  act: spring
  kind: spine
  when:
    all:
      - flag: preg
      - health: { hero: wife, op: lt, value: 30 }
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  title: Тихие роды
  text: |
    Жена родила к утру, и в избе стало тихо, потому что ребёнок не
    закричал, и от этой тишины у тебя остановилось дыхание. Казачка долго
    держала его на руках и молчала, и в её молчании было всё, что не
    решались сказать вслух. За окном светлело, капало с крыши, и мир за
    стеной продолжал жить так же ровно, как жил до этой ночи.

    Жена отвернулась к стене и больше ничего не спросила, и её спина под
    одеялом была неподвижна, как доска. У печи стояли с растопыренными
    руками и не знали, куда их деть, и в избе пахло дымом, холодом и тем, о
    чём нельзя было говорить.

  choices:
    - id: bury
      text: Закопать ребёнка за острожной стеной без креста
      effects:
        hope: { boyar: -10, wife: -12, servant: -6 }
        health: { wife: -25 }
        flag: { child_died: true }
      next: f01
    - id: call_priest
      text: Позвать попа похоронить по чину
      effects:
        hope: { wife: -4 }
        approval: { priest: +2 }
        flag: { child_died: true }
      next: f01
    - id: say_nothing
      text: Ничего не говорить жене
      effects:
        hope: { boyar: -6, wife: -8 }
        flag: { child_died: true }
      next: f01

- id: s_baptism
  act: spring
  kind: spine
  when:
    all:
      - flag: child_born
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  title: Крещение
  text: |
    Ребёнку шёл восьмой день, и поп уже ждал в церкви, а купель была
    налита студёной водой, от которой у тебя стыли пальцы, когда ты её
    пробовал. В церкви пахло воском, ладаном и мокрой шерстью, и у стены
    стояла жена, которой по обычаю не полагалось входить дальше притвора.
    Имя выбирали по святцам, и оно должно было достаться тому, кто сам ещё
    ничего не выбрал.

    «Без крещения он не свой», — сказал поп, и в его голосе не было укора,
    только привычка повторять то, что повторяли отцы. Жена смотрела на тебя
    из притвора, и в её глазах было столько просьбы, что ты почувствовал,
    как этот день решает больше, чем кажется.

  choices:
    - id: church
      text: Крестить ребёнка в церкви с купелью
      effects:
        hope: { boyar: +6, wife: +6, servant: +3 }
        approval: { priest: +2 }
        house: { food_days: -1 }
        flag: { baptized: true }
      next: f01
    - id: home
      text: Крестить дома, по старой вере, без попа
      effects:
        hope: { wife: +3 }
        approval: { priest: -2 }
        personal: { opora: +2 }
        flag: { baptized_old: true }
      next: f01
    - id: postpone
      text: Отложить крещение до тёплых дней
      effects:
        hope: { wife: -4 }
        approval: { priest: -1 }
        flag: { baptism_late: true }
      next: f01

- id: s30b
  act: spring
  kind: spine
  when:
    not:
      flag: preg
  title: Первая вода
  text: |
    Река очистилась ото льда, и на берегу запахло тиной, смолой и мокрым
    песком, а вода стояла высоко и шла мутная, с пеной по стрежню. Лодки
    уже спустили, сети разложили на просушку, и весь посад вышел к воде, и
    от этого на берегу стоял ровный дружный гул голосов. Ты стоял у кромки,
    чувствуя, как вода лижет голенища, и от её холода ломило в костях.

    Рядом стояли с багром и смотрели на реку, прощаясь, и молчали. Впереди было лето, и от этой простой мысли на душе становилось тихо
    и светло.

  choices:
    - id: look
      text: Стоять на берегу и смотреть на воду
      effects:
        hope: { boyar: +8, wife: +6, servant: +5 }
      next: f01
    - id: work
      text: Сразу взяться за весеннюю работу
      effects:
        house: { food_days: +1 }
        health: { boyar: -2 }
      next: f01
    - id: pray
      text: Помолиться на берегу, глядя на реку
      effects:
        hope: { boyar: +4, wife: +3 }
      next: f01

- id: s34
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s34
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_s34: true }
  title: Сени снесло
  text: |
    Вода снесла сени, и доски унесло на реку, так что теперь от двери до
    двора было чистое небо, а в избу тянуло сыростью и холодом. По утрам на
    пороге блестела роса, ветер заносил в дом прошлогоднюю листву, и от
    этого в углах пахло гнилью. Ты стоял в проёме и чувствовал, как из-под
    ног тянет подполом, а спину продувает насквозь.

    Жена вышла следом, обхватила себя руками и сказала просто: «Без сеней
    не дом, а навес». Слуга уже тащил из сарая старые доски, и по тому, как
    он их выбирал, было видно, что он надеется управиться малым.

  choices:
    - id: rebuild
      text: Собрать сени заново, не жалея сил
      effects:
        health: { boyar: -4 }
        house: { izba: +1 }
        skill: { hands: +2 }
        personal: { opora: +2 }
      next: h_spring_water
    - id: old_boards
      text: Сколотить сени из старья, что найдётся
      effects:
        health: { boyar: -2 }
        house: { izba: +1 }
      next: h_spring_water
    - id: none
      text: Оставить дом без сеней до лета
      effects:
        health: { wife: -2 }
        hope: { wife: -2 }
        personal: { chin: +1 }
      next: h_spring_water

- id: s36
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s36
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_s36: true }
  title: Талая вода
  text: |
    Талая вода в кадке отстоялась, но на дне лежал песок, и от неё
    мутило, а река шла мутная, так что пить приходилось то, что было. Жена кипятила воду в
    ушате и давала остыть, но на это уходили дрова, а дров после зимы
    осталось немного. От сырой воды у слуги пучило живот, и он ходил
    бледный, держась за бок.

    «Дров жаль, а людей жальче», — сказала жена, ставя ушат на шесток. Ты
    смотрел на огонь под дном и думал о том, что весной всякая малость,
    будь то вода или полено, считается по-новому, и это счётное умение
    давалось тяжелее любого другого.

  choices:
    - id: boil
      text: Кипятить воду для питья
      effects:
        house: { fuel_days: -1 }
        health: { boyar: +1, wife: +1, servant: +1 }
        hope: { wife: +1 }
      next: h_spring_water
    - id: drink
      text: Пить сырую воду
      effects:
        health: { wife: -3, servant: -3 }
      next: h_spring_water
    - id: melt_ice
      text: Носить лёд с реки и топить его в печи
      effects:
        health: { boyar: -2 }
        personal: { opora: +1 }
        hope: { wife: +1 }
      next: h_spring_water

- id: s37
  act: spring
  kind: side
  when:
    all:
      - not:
          flag: done_s37
      - not:
          flag: servant_dead
      - not:
          flag: servant_gone
      - not:
          flag: wife_left
      - not:
          flag: wife_dead
  on_enter:
    flag: { done_s37: true }
  title: Вербное воскресенье
  text: |
    На Вербное воскресенье поп раздавал у паперти ветки вербы, и дети
    дрались за них, бегали по лужам и обрывали пушистые почки, и у
    церкви стоял весёлый гам. Пахло мокрой корой, ладаном и оттаявшей
    землёй, и солнце пригревало так, что с крыш бежало чаще обычного. Люди
    выходили из церкви с ветками в руках и шли по посаду, и это было похоже
    на тихое шествие весны.

    Жена взяла ветку и прижала её к груди, а слуга нёс свою бережно, как
    несут свечу. «Верба первой оживает», — сказал кто-то рядом, и ты
    подумал о том, что этой весной и в твоём доме что-то ожило, чему ты ещё
    не знал имени.

  choices:
    - id: church
      text: Пойти в церковь всей семьёй с ветками
      effects:
        hope: { boyar: +4, wife: +4, servant: +3 }
        approval: { priest: +2 }
      next: h_spring_water
    - id: branch
      text: Сорвать вербу самому у реки
      effects:
        hope: { wife: +2 }
        approval: { priest: -1 }
        personal: { opora: +1 }
      next: h_spring_water
    - id: work
      text: Не пойти и остаться работать во дворе
      effects:
        hope: { wife: -3 }
        approval: { priest: -1 }
        personal: { chin: +1 }
      next: h_spring_water
`,Kp=`# Финал. Четыре карточки: утро, смотр, имя, околица.
# Дальше — оценка концовки по content/endings.yaml.
# Лето не играется: дожили до первой воды — смотрим, кем стали.

- id: f01
  act: final
  kind: spine
  title: Утро
  text: |
    Ты просыпался не от холода, а от света: он сочился сквозь слюдяное оконце и ложился на лавку у печи, которая за ночь не остыла до конца. За стеной в сенях кто-то уже возился с дровами и бил по чурбаку ровно, без спешки, а на реке за околицей стоял туман, и в нём глухо постукивали вёсла.

    За столом говорили, что вода за ночь поднялась и что на лёд больше не ходят, и говорили обыденно, как о дровах. Ты лежал ещё немного и слушал, как скрипит половица, как за посадом кричит петух и как далеко, у бани, плещет вода, и понимал, что за всю зиму не слышал утра, в котором не надо было бы торопиться.

  choices:
    - id: walk_yard
      text: Обойти двор медленно и потрогать всё руками
      effects:
        hope: { boyar: +2 }
      next: f02
    - id: call_table
      text: Созвать всех к столу и сесть первым
      effects:
        hope: { boyar: +3, wife: +3, servant: +3 }
        house: { food_days: -1 }
      next: f02
    - id: escape
      text: Уйти с обозом на запад
      hint: Если готовил побег.
      when:
        flag: escape_ready
      effects:
        flag: { escape_success: true }
        hope: { boyar: +4 }
      next: f04
    - id: run_blind
      text: Бежать без денег и провожатого
      when:
        not:
          flag: escape_ready
      effects:
        flag: { escape_failed: true }
        hope: { boyar: -4 }
        health: { boyar: -8 }
      next: f04

- id: f02
  act: final
  kind: spine
  title: Смотр
  text: |
    Двор был тесен, и обходить его оказалось недолго: крыша над сенями держала, а под навесом лежали дрова, которых хватило бы на неделю ровной топки, и каждое полено было твоим, потому что ты сам вынес его из лесу на санках. В сенях пахло вяленой рыбой, ржаной коркой и мокрой шерстью, а на шестке оттаивали рукавицы, и от знакомого до последней ноты запаха тепло поднималось в груди раньше, чем ты успевал что-то подумать.

    За тобой вышли и стали у поленницы, вытирая руки о штаны, и сказали, что до большой воды надо бы подправить нижний венец, а с мастером договорятся, если ты велишь. Ты кивнул и подумал, что впервые за год слышишь не просьбу, а совет, и что двор, который год назад был чужим, теперь держится на ваших руках.

  choices:
    - id: with_wife
      when:
        not:
          flag: wife_left
      text: Обойти двор вместе с женой, держа её под руку
      effects:
        hope: { wife: +4 }
        personal: { opora: +2 }
      next: f03
    - id: with_servant
      when:
        all:
          - not:
              flag: servant_dead
          - not:
              flag: servant_gone
      text: Позвать слугу и посоветоваться о нижнем венце
      effects:
        hope: { servant: +4 }
        personal: { opora: +2 }
      next: f03
    - id: alone
      text: Пройти по двору одному, не окликая никого
      effects:
        personal: { chin: +1 }
      next: f03

- id: f03
  act: final
  kind: spine
  title: Имя
  text: |
    На дворе стояли все, кто пережил эту зиму, и стояли они не так, как прежде: не в ряд, опустив глаза, а вольно, и в их молчании не было той покорности, к какой ты привык в Москве и по которой тебя узнавали здесь издалека. На дворе кто-то держал что-то завёрнутое в холстину, у стены стоял топор, а старый казак, пришедший с ними, смотрел на реку и щурился от света.

    Кто-то переступил с ноги на ногу и тихо сказал, что вода прибывает и пора бы к столу, и в этом простом «пора» не было ни укора, ни приказа. Ты смотрел, как поправляют холстину, и понимал, что держал при себе не слуг и не жену, а свидетелей своей беды, и что назвать их по имени значит признать их теми, с кем ты остался жить.

  choices:
    - id: wife_name
      when:
        not:
          flag: wife_left
      text: Позвать жену по имени, как зовут своих
      effects:
        hope: { wife: +8 }
        personal: { opora: +2 }
      next: f04
    - id: servant_name
      when:
        all:
          - not:
              flag: servant_dead
          - not:
              flag: servant_gone
      text: Позвать слугу по имени
      effects:
        hope: { servant: +8 }
        personal: { opora: +2, word: +3 }
      next: f04
    - id: both
      when:
        all:
          - not:
              flag: wife_left
          - not:
              flag: servant_dead
          - not:
              flag: servant_gone
      text: Позвать по имени обоих и подождать ответа
      effects:
        hope: { wife: +6, servant: +6, boyar: +4 }
        personal: { opora: +3 }
      next: f04
    - id: silence
      text: Промолчать и не звать никого по имени
      effects:
        hope: { boyar: -2, wife: -2, servant: -2 }
        personal: { chin: +1 }
      next: f04

- id: f04
  act: final
  kind: ending
  title: За околицей
  text: |
    За околицей шумела вода, которая за год трижды меняла голос: сначала глухо била подо льдом, потом с треском ломала его у берега, а теперь шла ровно и широко, неся щепки и прошлогоднюю траву. Лето начиналось обыденно, с мокрого снега у бань и с тёплого ветра, от которого на крышах чернела дранка, и в сенях пахло уже не рыбой и дымом, а оттаявшей землёй.

    Ты постоял у ворот, пока солнце не поднялось выше башни, и вернулся в избу, где тебя, впервые за много лет, никто не ждал по чину.

  ending: auto
`,Vp=`# Концовки. Проверяются сверху вниз, берётся первая подходящая.
# Порядок строк — часть правил. Менять только вместе с docs/ENDINGS.md.
#
# Флаги, которые ставит движок, а не карточки:
#   boyar_dead, wife_dead, servant_dead — смерть героя (здоровье 0 / надежда 0 / достоинство 0)
#   cause_co — смерть от угара (ставит карточка w08_carbon)
#   all_arcs — все три дуги сошлись:
#       opora >= 70 && opora > chin && hands >= 60 && taught_boy
#       && wife_household >= 70 && wife_own_1 && (wife_own_2 || wife_own_3)
#       && servant_word >= 70 && servant_free
#   personal_ok — boyar_dignity >= 60
#       && (dowry >= 4 || wife_household >= 60)
#       && (idle_days == 0 || servant_word >= 60)
#
# Дополнительный абзац о причине смерти / приёмыше / ребёнке движок
# дописывает к тексту концовки, строку это не меняет (см. docs/ENDINGS.md).
#
# Важно: при родах движок снимает \`preg\` и ставит \`child_born\` или \`child_died\`.
# Иначе после родов продолжает срабатывать «Двое ушли» (wife_left && preg).

- id: e01_pogost
  order: 1
  title: Погост за стеной
  when:
    all:
      - flag: boyar_dead
      - flag: wife_dead
      - flag: servant_dead
  text: |
    Крест за острожной стеной поставили в оттепель, когда земля отошла на полштыка и лопата входила в неё с хлюпаньем, а имени на дощечке не написали, потому что записывать его было некому. Изба осталась стоять с забитым войлоком окном, снег на крыше к апрелю просел и потемнел, а потом сполз на завалинку мокрым пластом.

    Старый казак, приходивший проведать двор, потрогал дверную скобу, постоял над пустой поленницей и сказал себе под нос, что дом-то был крепкий, да хозяева к нему не пришлись. Он закрыл дверь, поправил кол и ушёл, и с того дня за стеной не осталось никого, кто помнил бы этот двор живым.
  epilogue:
    - when:
        flag: cause_co
      text: |
        Печь протопили с вечера и закрыли вьюшку рано, когда угли ещё светились, а в сенях было тепло и тихо, и от тепла никто не вышел на воздух. Утром казак стучал долго, потом отбросил кол от двери и вошёл, и в избе стоял сладковатый запах угара, от которого он сразу попятился. «Вьюшку-то кто закрывал?» — сказал он вслух и сам себе ответил, потому что отвечать было больше некому.
    - when:
        flag: cause_fire
      text: |
        Сажа в кривом дымоходе занялась ночью, и огонь пошёл по обрешётке так быстро, что в сенях не успели даже накинуть тулуп. Дверь заклинило от жара, окно было мало, и выйти не смог никто. К утру от избы осталось чёрное пятно на снегу и запах гари, который держался над посадом до самого ледохода.

- id: e02_no_father
  order: 2
  title: Без отца
  when:
    flag: boyar_dead
  text: |
    Хоронили его за острожной стеной, на том же погосте, где лежали прошлогодние ссыльные, и яму долбили пешнёй, потому что железо в мёрзлую землю шло туго. Обмыли его в сенях, сложили руки на груди и положили под образа последнюю восковую свечу.

    Крест поставили до воды: весной до погоста не доедешь. Сын в Москве так и не узнал, где могила, и письмо, посланное с обозом, шло до него полгода, а может, и вовсе не дошло.
  epilogue:
    - when:
        flag: cause_co
      text: |
        Печь протопили с вечера и закрыли вьюшку рано, и угар пошёл в избу тихо, без огня и без шума. Слуги не было уже две недели, и о том, что в доме некому отворить дверь, узнали соседи. Тебя нашли на полатях, жену на лавке. Слуга вернулся, когда его позвали хоронить, и долго стоял в сенях, не решаясь войти.
    - when:
        flag: cause_fire
      text: |
        Сажа в кривом дымоходе занялась ночью, и огонь пошёл по обрешётке, а в сенях сразу стало нечем дышать. Избу отстояли, вытащив на снег кадки и сундук, но его вытащить не успели. Жена с обожжёнными руками выносила из огня холстину и всё повторяла, что дымоход надо было чистить ещё осенью.
    - when:
        all:
          - not:
              flag: cause_co
          - not:
              flag: cause_fire
          - not:
              flag: wife_dead
          - flag: servant_dead
      text: |
        Жива была жена, и она делала то, что прежде делал он: топила печь, колола дрова, ходила на лёд и говорила с людьми ровно, не жалуясь. О нём она вслух не говорила вовсе и только по вечерам подолгу сидела у окна, глядя на реку. Слугу похоронили за острожной стеной, и его место у печи долго пустовало.
    - when:
        all:
          - not:
              flag: cause_co
          - not:
              flag: cause_fire
          - not:
              flag: wife_dead
          - not:
              flag: servant_dead
      text: |
        Живы были оба, и в доме не нашлось человека, который взял бы на себя его голос, поэтому работу они поделили молча. Слуга брал мужскую, жена держала дом, и впервые за год они разговаривали друг с другом без него, находя слова медленно, как на чужом языке. В избе стало тише, но не пусто, и это было всё, чего они могли дождаться.
    - when:
        all:
          - not:
              flag: cause_co
          - not:
              flag: cause_fire
          - flag: wife_dead
      text: |
        Жена не пережила его и легла рядом, за острожной стеной, под таким же коротким крестом. Жив остался слуга, и он остался в избе, потому что идти ему было больше некуда. Он топил печь, варил похлёбку на одного и по привычке ставил на шесток две пары рукавиц.

- id: e03_last
  order: 3
  title: Последний
  when:
    all:
      - flag: wife_dead
      - flag: servant_dead
      - not:
          flag: boyar_dead
  text: |
    Ты остался в избе один, и печь, которую топили втроём, пришлось топить по-новому, кладя меньше поленьев, потому что жар её уходил в пустоту. На шестке стояла лишняя миска, и ты каждый вечер ставил её на место, хотя знал, что никто не сядет, а когда вьюшка начинала гудеть, поднимал голову и вспоминал, что говорить некому.

    Казачка, зашедшая через день с туеском, сказала прямо, что так жить нельзя и что в доме нужен ещё человек. Ты не ответил, но в ту ночь впервые за неделю уснул, не слушая печь, и понял, что дальше будешь жить не их памятью, а потому, что утро наступит и дрова всё равно надо колоть.

- id: e04_two_crosses
  order: 4
  title: Два креста
  when:
    all:
      - flag: wife_dead
      - flag: child_died
  text: |
    Жена умерла в ту же ночь, что и ребёнок, и повитуха вышла из избы с пустыми руками, а в сенях долго пахло горячей водой, травами и железом. Ты сам обмыл её и сам завернул младенца в холстину, приготовленную ещё до Рождества, и пеленал неловко, как учили наспех: руки не слушались.

    Два креста поставили рядом, и второй был короткий, в половину первого, а слуга молча взял у тебя лопату и докопал яму сам. Ты сидел у колыбели, качал её пустую и слушал, как скрипит железное кольцо, и в какой-то час понял, что дом, который вы берегли, был нужен не сам по себе, а для кого-то, кого теперь нет.

- id: e05_cradle
  order: 5
  title: Колыбель
  when:
    all:
      - flag: wife_dead
      - flag: child_born
  text: |
    Ребёнок родился на рассвете, жена умерла к вечеру, и в избе остались запахи крови, хлеба и дыма, а на полу таз с водой, которую не меняли. Ты не умел ни пеленать, ни держать его так, чтобы он не плакал, и первые ночи учился у казачки, а днём варил жидкую кашу и наливал её в рожок из коровьего рога.

    Казачка, глядя, как ты держишь ребёнка, сказала, что такой отец здесь редкость и что не зря тебя сюда принесло, и ты не стал спорить. По ночам, когда он кричал, ты вставал и думал, что дом продолжается не брёвнами и не стенами, а вот этим голосом, за который ты отвечаешь перед мёртвой.

- id: e06_no_home
  order: 6
  title: Без дома
  when:
    flag: wife_dead
  text: |
    Жена умерла, и в избе не стало ни голоса, ни хлопот, от которых раньше ломило уши: печь ты топил по привычке, в те же часы, но дров уходило меньше, и поленница стояла почти нетронутой. Стол был выскоблен, окно затянуто новой слюдой, а по углам всё равно завелась сырость, и ты не сразу понял, отчего в доме так холодно при жаркой печи.

    Казачка зашла однажды, обошла избу и сказала, что дом без хозяйки сохнет изнутри, как берёста на огне; ты промолчал, но с того дня стал подметать по утрам. Ты понял, что изба ещё стоит, а дом уже кончился, и что держать стены не то же самое, что жить в них.

- id: e07_two_gone
  order: 7
  title: Двое ушли
  when:
    all:
      - flag: wife_left
      - flag: preg
  text: |
    Жена ушла на исходе зимы, с обозом, что шёл на юг, и ты смотрел, как её платок мелькает между возами, пока дорога не повернула за мыс и не осталась одна белая полоса. В избе остались её гребень, приколотая к стене лента и половина запаса ниток, и всё это стояло на местах так долго, что ты перестал замечать, а потом однажды заметил и не смог сдвинуть.

    Казак, сидевший у двери, сказал, что её видели на обозе живой и что узел она несла сама, и больше ничего не прибавил. Ты кивнул, вышел за ворота и долго стоял на ветру, понимая, что отнял у неё всё, кроме одной дороги, а она выбрала дорогу — вдвоём с тем, кого носила.

- id: e08_alone_in_izba
  order: 8
  title: Один в избе
  when:
    all:
      - flag: wife_left
      - flag: servant_dead
  text: |
    Слугу похоронили в оттепель, и ты впервые остался в избе один, с печью, дровами и топором, и оказалось, что работа, которую делили на троих, никуда не девалась, а просто легла на одни руки. Ты топил, колол, таскал воду с реки и варил похлёбку из рыбы и крупы, и всё это выходило хуже, чем у них, но выходило.

    Мальчишка-сосед заглянул как-то и спросил, не надо ли помочь с дровами, и ты отказался, а после жалел; больше он не приходил. Ты понял, что всю жизнь ждал распоряжений и без них не умел ни жить, ни горевать, и что теперь распоряжаться придётся самому.

- id: e09_wife_left
  order: 9
  title: Жена ушла
  when:
    flag: wife_left
  text: |
    Она уехала с обозом на исходе зимнего пути, и в избе остались её сундук, латаная рубаха и след от кольца на подоконнике, который она оставила, снимая его на ночь. Ты не стал ни догонять, ни просить, потому что для просьбы надо было признать, что она уходит по твоей вине, а этого ты до самого конца не выговорил.

    Весной дошла одна весть: жива, служит у торгового человека, кланяется. Ты прочёл её дважды, сложил и убрал под образа, и с тех пор всякий раз, проходя мимо, чувствовал, как в груди становится тесно, не от горя, а оттого, что всё решается без тебя.

- id: e10_empty_cradle
  order: 10
  title: Пустая колыбель
  when:
    flag: child_died
  text: |
    Ребёнок умер на второй неделе, тихо, во сне, и повитуха сказала, что так бывает с первыми и что вины здесь нет ничьей. Ты держал его на руках, пока он не остыл, и запомнил, какой он был лёгкий, а после не мог понять, отчего руки кажутся тяжелее прежнего.

    В сенях остался запах травы и молока, а в углу стояла колыбель, которую жена велела не трогать, и она не плакала при тебе, только по ночам шевелила губами над молитвой. Однажды она сказала, что колыбель надо бы отдать кому-нибудь, и ты ответил, что успеется; с того дня в доме стало тише, и в ней было слышно, как с крыши оседает снег.

- id: e11_continuation
  order: 11
  title: Продолжение
  when:
    all:
      - flag: child_born
      - not:
          flag: broken
      - not:
          flag: best_svoi
      - not:
          flag: best_chelovek
      - not:
          flag: escape_success
      - not:
          flag: escape_failed
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
            - flag: path_posad
            - flag: path_taiga
            - flag: path_clerk
  text: |
    Ребёнок родился в начале весны, когда вода уже шла подо льдом, и в избе снова пахло горячей водой, травами и хлебом, положенным в печь на капустном листе. Жена поправилась медленно, но к солнечным дням уже садилась у окна с ним на руках, и слуга, входивший в избу, стал пригибать голову ниже, чем прежде.

    Казачка, глядя на мальчишку, сказала, что он будет здешний и Москвы не вспомнит вовсе, и ты промолчал, потому что это была правда. По ночам ты просыпался от тонкого крика и шёл к колыбели, не сразу вспоминая, где ты, и впервые за год думал не о том, что потерял, а о том, чему его научишь.

- id: e12_son
  order: 12
  title: Сын
  when:
    all:
      - flag: son_trouble
      - not:
          flag: son_arrived
      - not:
          flag: broken
      - not:
          flag: best_svoi
      - not:
          flag: best_chelovek
      - not:
          flag: escape_success
      - not:
          flag: escape_failed
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
            - flag: path_posad
            - flag: path_taiga
            - flag: path_clerk
  text: |
    Приписка пришла с последним зимним обозом, и в ней стояло коротко: сын твой помер в прошлом году, в городе, от болезни, а подпись подьячего была торопливая, будто писали между делом. Ты читал эти строки у окна, пока не стемнело, и всё ждал, что дальше будет продолжение, но лист кончался, и на обороте было только имя, написанное чужой рукой.

    Слуга, видя, как ты сидишь, спросил, не надо ли чего, и ты велел принести свечу, хотя писать не собирался. Ты долго не мог вспомнить, как звучит голос сына, и понял, что дом, который удалось сохранить, оказался крепче того, ради чего его держали.

- id: e13_son_arrived
  order: 13
  title: Сын приехал
  when:
    all:
      - flag: son_arrived
      - not:
          flag: all_arcs
      - not:
          flag: best_chelovek
      - not:
          flag: petition_granted
      - not:
          flag: escape_success
      - not:
          flag: escape_failed
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
            - flag: path_posad
            - flag: path_taiga
            - flag: path_clerk
  text: |
    Он приехал по последнему санному пути, обросший, в чужом тулупе, и остановился у ворот, не сразу решившись войти, так что ты успел разглядеть его через щель в воротах. Ростом он был выше тебя, говорил негромко и всё время смотрел на печь, искал в ней что-то, чего не помнил.

    За столом он сказал, что не держит зла и приехал не за прощением, а посмотреть, и ты кивнул, не став объяснять ничего, потому что объяснять было поздно. Он сидел у крыльца, ел вашу рыбу и остался до утра.

- id: e14_escape
  order: 14
  title: Побег
  when:
    flag: escape_success
  text: |
    Ты ушёл на запад с обозом, что вёз в Тобольск рыбу и смолу, ночевал в зимовьях, шёл по реке и по гатям, и тайга принимала тебя так же равнодушно, как принимала всех, кто пробовал её обмануть. В остроге о тебе скоро перестали говорить, а потом забыли, и только в отписке осталась строка о беглом ссыльном, которого велено искать.

    Попутчик-промышленный, сидевший у костра, сказал, что дальше дороги нет и что за Камнем тебя всё равно возьмут, и ты не стал спорить. Тайга не судит и не прощает, и ты понял это не в остроге, а на третью ночь, когда лёд под ногой хрустнул и никто, кроме тебя, этого не услышал.

- id: e15_escape_failed
  order: 15
  title: Побег провалился
  when:
    flag: escape_failed
  text: |
    Тебя вернули через две недели, на том же обозе, связанного, и вели через посад так, чтобы видели все, кто стоял у ворот и у бань. В съезжей избе было тепло и пахло чернилами, а воевода уже не читал наказную память, а просто смотрел, как ты стоишь, и молчал дольше, чем нужно.

    Теперь ты был не ссыльный, а беглый, и это слово само по себе значило дорогу в Тобольск, кандалы и допрос с пристрастием. Подьячий, вписывая твоё имя в новую бумагу, сказал, что зря ты это затеял, и в голосе его не было ни злорадства, ни жалости.

- id: e16_broken
  order: 16
  title: Сломленный
  when:
    flag: broken
  text: |
    Ты сидел за столом у подьячего, писал чужие челобитные и кланялся тем, кому год назад не подал бы руки, и рука твоя при этом не дрожала. В избе было тепло, корм выдавали исправно, по воскресеньям ты бывал в церкви и знал всех, кто там стоял, но давно не помнил, что сам думал о чём-нибудь.

    Подьячий как-то сказал, что из тебя вышел хороший писец, и ты поблагодарил. Только у зеркала в сенях ты иногда задерживался и не сразу узнавал человека, который оттуда смотрел, и понимал, что дом выжил, а тот, кто в нём поселился, не имеет к тебе никакого дела.

- id: e17_moscow
  order: 17
  title: Возвращение в Москву
  when:
    all:
      - flag: petition_granted
      - not:
          flag: son_trouble
      - not:
          flag: son_arrived
      - hope: { hero: boyar, op: gte, value: 70 }
      - any:
          - personal: { key: chin, op: gte, value: 60 }
          - personal: { key: opora, op: gte, value: 60 }
  text: |
    Тебя отпустили, а не простили, и в Москву ты въехал по последнему санному пути, с подорожной, где было написано, что следует к месту жительства, и с одним сундуком. Двор стоял на прежнем месте, но за воротами был уже другой хозяин, а на крыльце сидели чужие дети, и ты не стал подходить близко.

    Сын, которого ты оставил подростком, встретил тебя вежливо и говорил о делах, как с приезжим, и однажды спросил, не собираешься ли ты обратно. Ты понял, что возвращение оказалось ещё одной ссылкой, только не в Сибирь, а в прошлое, где всё осталось на местах, а тебя в нём больше нет.

- id: e18_tobolsk
  order: 18
  title: Перевод в Тобольск
  when:
    flag: petition_granted
  text: |
    В Тобольск ты приехал по весне, когда Иртыш ещё держал лёд и по берегу ходили ветры с песком, и город показался тебе шумным до звона в ушах. На дворе у тебя была изба, крытая тёсом, лекарь за стеной и торг в двух шагах, но чина не вернули и двора не вернули тоже.

    Сосед по двору, купец из Устюга, сказал, что здесь жить можно и что за десять лет люди из ссыльных становятся горожанами, и ты кивнул. Это было не счастьем, а началом, и ты понимал это всякий раз, когда утром выходил за ворота и слышал, как внизу, под горой, стучат топоры.

- id: e19_monastery
  order: 19
  title: Постриг
  when:
    flag: path_monastery
  text: |
    Постриг ты принял в пост, в маленькой монастырской церкви, где пахло воском, ладаном и мокрым сукном, и новое имя тебе дали сразу, а старое отняли одним словом. Келья была тесная, в одно окно, с полкой для книг и лежанкой, и в ней стоял такой ровный холод, что ты впервые за год не боялся угара.

    Старец, принимавший тебя, сказал, что здесь не спрашивают, за что, и что послушание будет вместо ответа, и ты поклонился. Ты принял постриг не от святости, а от усталости, и понимал, что жена и слуга остались с тем, что от тебя осталось, а сам ты с этого дня не принадлежал ни им, ни себе.

- id: e20_merchant
  order: 20
  title: Купец
  when:
    flag: path_merchant
  text: |
    Ты начал с малого: соли, кожи и рыбы, которую брал у промышленных и сбывал в Тобольске артельщикам, и первые сделки считал по пальцам, потому что бумагам здесь верили меньше, чем рукопожатию. Лавка твоя была в пол-амбара, товар лежал на полках, и от него пахло дегтем, кожей и мороженой рыбой, а замок на дверях ты починил сам.

    Артельщик из Сургута, с которым ты сошёлся на второй год, сказал, что тебе можно верить на слово, и это оказалось дороже любого чина. Москва осталась воспоминанием, и ты вспоминал её всё реже, а когда вспоминал, то не двор и не Думу, а запах яблок в сенях.

- id: e21_clerk
  order: 21
  title: Писарь
  when:
    flag: path_clerk
  text: |
    Ты сел за стол к подьячему в съезжей избе, где пахло чернилами, топлёным салом и мокрыми тулупами, и целыми днями выводил на бумаге чужие имена, челобитья и памяти. Грамота кормила: за лист платили медью, за иную просьбу рыбой или холстом, и к весне у тебя была своя чернильница и своё место у окна.

    Подьячий, глядя, как ты пишешь, сказал, что рука у тебя твёрдая и что из ссыльных редко выходят такие писцы. Ты учился не писать своих просьб, потому что в них не верил никто, и с каждым месяцем это удавалось всё легче.

- id: e22_taiga
  order: 22
  title: Хозяин зимовья
  when:
    flag: path_taiga
  text: |
    Ты ушёл из острога в тайгу, как только сошла вода, с запасом порсы, топором и двумя сетями, и изба твоя стала зимовьем на речке, где до ближайшего человека было два дня ходу. Внутри было темно и тесно, зато печь держала жар, на стенах висели шкуры, и от них шёл густой тёплый запах зверя, дыма и сушёной рыбы.

    Промышленный, заходивший к тебе раз в месяц, сказал, что живут здесь недолго и что тебе, видно, некуда больше идти, и ты не ответил, а только подбросил дров. Иногда тебя видели на промысле и не сразу узнавали, и это было приятно не потому, что ты прятался, а потому, что прошлое кончилось само.

- id: e23_service
  order: 23
  title: Верстание в службу
  when:
    flag: path_service
  text: |
    Тебя верстали в службу весной, на площади у съезжей избы, и воевода сам прочёл бумагу, а ты стоял без шапки, слушал и не сразу понял, что речь идёт уже не о ссыльном. Тебе положили оклад, дали землю за посадом и место в острожном списке, и это значило, что отныне ты отвечаешь не за себя одного.

    Старый казак, тот самый, что когда-то привёл тебя к избе, сказал, что теперь ты свой и что скоро про тебя забудут и в воеводской книге, и ты усмехнулся. Москва закрылась навсегда, но здесь ты был кому-то нужен, и этого оказалось довольно, чтобы вставать по утрам.

- id: e24_posad
  order: 24
  title: Свой на посаде
  when:
    flag: path_posad
  text: |
    Ты остался на посаде, в той же избе, и к третьей зиме тебя звали уже не ссыльным, а по имени, а мальчишки бегали просить буквы на бересте. Ты шил пимы по мерке, ходил на лёд с пешнёй и знал, где вода живая, а где нет, и этим знанием делился неохотно, как делятся последним.

    Мальчишка, которого ты учил буквам, теперь приносил свою бересту и просил поправить букву, и ты поправлял, не показывая, что тебе это приятно. В Москве о тебе давно забыли, а здесь имя, произнесённое соседом через двор, стоило дороже, чем чин в книге.

- id: e25_svoi
  order: 25
  title: Свои
  when:
    all:
      - flag: all_arcs
      - flag: helped_posad_1
      - flag: helped_posad_2
      - not:
          flag: wife_left
      - not:
          flag: boyar_dead
      - not:
          flag: wife_dead
      - not:
          flag: servant_dead
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
            - flag: path_posad
            - flag: path_taiga
            - flag: path_clerk
  text: |
    Через год в избе сидели не боярин, жена и слуга, а три человека, у каждого было своё дело и свой голос, и за столом стало тесно от локтей. Один умел рубить и читать, другая держала дом и своё шитьё, третий перестал быть чьими-то руками и стал тем, кого спрашивают, и ты смотрел на них и не узнавал порядка, который сам же и завёл.

    Жена, подавая горшок, сказала, что в доме теперь шумно и что она этому рада, и слуга впервые за всё время ответил ей своей шуткой. Москва так и не вспомнила о вас, но здесь вас звали по именам, и это оказалось той жизнью, которую вы приехали не выбирать.

- id: e26_chelovek
  order: 26
  title: Человек
  when:
    all:
      - flag: personal_ok
      - flag: helped_posad_1
      - flag: helped_posad_2
      - not:
          flag: wife_left
      - not:
          flag: boyar_dead
      - not:
          flag: wife_dead
      - not:
          flag: servant_dead
      - not:
          any:
            - flag: path_merchant
            - flag: path_monastery
            - flag: path_service
            - flag: path_posad
            - flag: path_taiga
            - flag: path_clerk
  text: |
    Ты не вернул ни чина, ни двора и не стал богат, зато научился жить в этом краю: чинить крышу, колоть по трещине, ставить снасти под лёд и объяснять мальчишке то, что сам узнал от казака. В остроге тебя звали по имени, а не по бумаге, и в съезжей избе уже не спрашивали, за что тебя прислали.

    Казачка, встречая тебя у бани, сказала, что из приезжих редко выходят люди, а из тебя вышел, и засмеялась, чтобы это не звучало слишком важно. Ты не стал спорить: это была не награда, а работа, сделанная своими руками и подтверждённая каждой весной.

- id: e27_summer
  order: 27
  title: Лето пришло
  text: |
    Снег сошёл, река очистилась и пошла широко, унося льдины и прошлогодний тальник, и на посаде запахло мокрой землёй, навозом и первой зеленью на огородах. Печь топили уже не для тепла, а для еды, окна стояли открытыми, и за околицей было зелено до самого леса.

    Жена сказала, что за эту зиму она впервые не считала дни до весны, и ты согласился, хотя сам считал. Ты давно не думал о том, сколько тебе осталось, и в этом, пожалуй, и была та воля, о которой в Москве говорили так много и так неверно.
`,ua=Symbol.for("yaml.alias"),na=Symbol.for("yaml.document"),dt=Symbol.for("yaml.map"),Kc=Symbol.for("yaml.pair"),jn=Symbol.for("yaml.scalar"),dr=Symbol.for("yaml.seq"),yn=Symbol.for("yaml.node.type"),hr=s=>!!s&&typeof s=="object"&&s[yn]===ua,Rs=s=>!!s&&typeof s=="object"&&s[yn]===na,ci=s=>!!s&&typeof s=="object"&&s[yn]===dt,Ie=s=>!!s&&typeof s=="object"&&s[yn]===Kc,ge=s=>!!s&&typeof s=="object"&&s[yn]===jn,di=s=>!!s&&typeof s=="object"&&s[yn]===dr;function Oe(s){if(s&&typeof s=="object")switch(s[yn]){case dt:case dr:return!0}return!1}function Le(s){if(s&&typeof s=="object")switch(s[yn]){case ua:case dt:case jn:case dr:return!0}return!1}const Vc=s=>(ge(s)||Oe(s))&&!!s.anchor,bt=Symbol("break visit"),Wp=Symbol("skip children"),oi=Symbol("remove node");function pr(s,r){const i=Hp(r);Rs(s)?ir(null,s.contents,i,Object.freeze([s]))===oi&&(s.contents=null):ir(null,s,i,Object.freeze([]))}pr.BREAK=bt;pr.SKIP=Wp;pr.REMOVE=oi;function ir(s,r,i,o){const u=Qp(s,r,i,o);if(Le(u)||Ie(u))return qp(s,o,u),ir(s,u,i,o);if(typeof u!="symbol"){if(Oe(r)){o=Object.freeze(o.concat(r));for(let f=0;f<r.items.length;++f){const d=ir(f,r.items[f],i,o);if(typeof d=="number")f=d-1;else{if(d===bt)return bt;d===oi&&(r.items.splice(f,1),f-=1)}}}else if(Ie(r)){o=Object.freeze(o.concat(r));const f=ir("key",r.key,i,o);if(f===bt)return bt;f===oi&&(r.key=null);const d=ir("value",r.value,i,o);if(d===bt)return bt;d===oi&&(r.value=null)}}return u}function Hp(s){return typeof s=="object"&&(s.Collection||s.Node||s.Value)?Object.assign({Alias:s.Node,Map:s.Node,Scalar:s.Node,Seq:s.Node},s.Value&&{Map:s.Value,Scalar:s.Value,Seq:s.Value},s.Collection&&{Map:s.Collection,Seq:s.Collection},s):s}function Qp(s,r,i,o){var u,f,d,p,g;if(typeof i=="function")return i(s,r,o);if(ci(r))return(u=i.Map)==null?void 0:u.call(i,s,r,o);if(di(r))return(f=i.Seq)==null?void 0:f.call(i,s,r,o);if(Ie(r))return(d=i.Pair)==null?void 0:d.call(i,s,r,o);if(ge(r))return(p=i.Scalar)==null?void 0:p.call(i,s,r,o);if(hr(r))return(g=i.Alias)==null?void 0:g.call(i,s,r,o)}function qp(s,r,i){const o=r[r.length-1];if(Oe(o))o.items[s]=i;else if(Ie(o))s==="key"?o.key=i:o.value=i;else if(Rs(o))o.contents=i;else{const u=hr(o)?"alias":"scalar";throw new Error(`Cannot replace node with ${u} parent`)}}const Yp={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Gp=s=>s.replace(/[!,[\]{}]/g,r=>Yp[r]);class Qe{constructor(r,i){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Qe.defaultYaml,r),this.tags=Object.assign({},Qe.defaultTags,i)}clone(){const r=new Qe(this.yaml,this.tags);return r.docStart=this.docStart,r}atDocument(){const r=new Qe(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Qe.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Qe.defaultTags);break}return r}add(r,i){this.atNextDocument&&(this.yaml={explicit:Qe.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Qe.defaultTags),this.atNextDocument=!1);const o=r.trim().split(/[ \t]+/),u=o.shift();switch(u){case"%TAG":{if(o.length!==2&&(i(0,"%TAG directive should contain exactly two parts"),o.length<2))return!1;const[f,d]=o;return this.tags[f]=d,!0}case"%YAML":{if(this.yaml.explicit=!0,o.length!==1)return i(0,"%YAML directive should contain exactly one part"),!1;const[f]=o;if(f==="1.1"||f==="1.2")return this.yaml.version=f,!0;{const d=/^\d+\.\d+$/.test(f);return i(6,`Unsupported YAML version ${f}`,d),!1}}default:return i(0,`Unknown directive ${u}`,!0),!1}}tagName(r,i){if(r==="!")return"!";if(r[0]!=="!")return i(`Not a valid tag: ${r}`),null;if(r[1]==="<"){const d=r.slice(2,-1);return d==="!"||d==="!!"?(i(`Verbatim tags aren't resolved, so ${r} is invalid.`),null):(r[r.length-1]!==">"&&i("Verbatim tags must end with a >"),d)}const[,o,u]=r.match(/^(.*!)([^!]*)$/s);u||i(`The ${r} tag has no suffix`);const f=this.tags[o];if(f)try{return f+decodeURIComponent(u)}catch(d){return i(String(d)),null}return o==="!"?r:(i(`Could not resolve tag: ${r}`),null)}tagString(r){for(const[i,o]of Object.entries(this.tags))if(r.startsWith(o))return i+Gp(r.substring(o.length));return r[0]==="!"?r:`!<${r}>`}toString(r){const i=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],o=Object.entries(this.tags);let u;if(r&&o.length>0&&Le(r.contents)){const f={};pr(r.contents,(d,p)=>{Le(p)&&p.tag&&(f[p.tag]=!0)}),u=Object.keys(f)}else u=[];for(const[f,d]of o)f==="!!"&&d==="tag:yaml.org,2002:"||(!r||u.some(p=>p.startsWith(d)))&&i.push(`%TAG ${f} ${d}`);return i.join(`
`)}}Qe.defaultYaml={explicit:!1,version:"1.2"};Qe.defaultTags={"!!":"tag:yaml.org,2002:"};function Wc(s){if(/[\x00-\x19\s,[\]{}]/.test(s)){const i=`Anchor must not contain whitespace or control characters: ${JSON.stringify(s)}`;throw new Error(i)}return!0}function Hc(s){const r=new Set;return pr(s,{Value(i,o){o.anchor&&r.add(o.anchor)}}),r}function Qc(s,r){for(let i=1;;++i){const o=`${s}${i}`;if(!r.has(o))return o}}function Jp(s,r){const i=[],o=new Map;let u=null;return{onAnchor:f=>{i.push(f),u??(u=Hc(s));const d=Qc(r,u);return u.add(d),d},setAnchors:()=>{for(const f of i){const d=o.get(f);if(typeof d=="object"&&d.anchor&&(ge(d.node)||Oe(d.node)))d.node.anchor=d.anchor;else{const p=new Error("Failed to resolve repeated object (this should not happen)");throw p.source=f,p}}},sourceObjects:o}}function sr(s,r,i,o){if(o&&typeof o=="object")if(Array.isArray(o))for(let u=0,f=o.length;u<f;++u){const d=o[u],p=sr(s,o,String(u),d);p===void 0?delete o[u]:p!==d&&(o[u]=p)}else if(o instanceof Map)for(const u of Array.from(o.keys())){const f=o.get(u),d=sr(s,o,u,f);d===void 0?o.delete(u):d!==f&&o.set(u,d)}else if(o instanceof Set)for(const u of Array.from(o)){const f=sr(s,o,u,u);f===void 0?o.delete(u):f!==u&&(o.delete(u),o.add(f))}else for(const[u,f]of Object.entries(o)){const d=sr(s,o,u,f);d===void 0?delete o[u]:d!==f&&(o[u]=d)}return s.call(r,i,o)}function mn(s,r,i){if(Array.isArray(s))return s.map((o,u)=>mn(o,String(u),i));if(s&&typeof s.toJSON=="function"){if(!i||!Vc(s))return s.toJSON(r,i);const o={aliasCount:0,count:1,res:void 0};i.anchors.set(s,o),i.onCreate=f=>{o.res=f,delete i.onCreate};const u=s.toJSON(r,i);return i.onCreate&&i.onCreate(u),u}return typeof s=="bigint"&&!(i!=null&&i.keep)?Number(s):s}class fa{constructor(r){Object.defineProperty(this,yn,{value:r})}clone(){const r=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(r.range=this.range.slice()),r}toJS(r,{mapAsMap:i,maxAliasCount:o,onAnchor:u,reviver:f}={}){if(!Rs(r))throw new TypeError("A document argument is required");const d={anchors:new Map,doc:r,keep:!0,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof o=="number"?o:100},p=mn(this,"",d);if(typeof u=="function")for(const{count:g,res:m}of d.anchors.values())u(m,g);return typeof f=="function"?sr(f,{"":p},"",p):p}}class ca extends fa{constructor(r){super(ua),this.source=r,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(r,i){if((i==null?void 0:i.maxAliasCount)===0)throw new ReferenceError("Alias resolution is disabled");let o;i!=null&&i.aliasResolveCache?o=i.aliasResolveCache:(o=[],pr(r,{Node:(f,d)=>{(hr(d)||Vc(d))&&o.push(d)}}),i&&(i.aliasResolveCache=o));let u;for(const f of o){if(f===this)break;f.anchor===this.source&&(u=f)}if(u&&i){const{anchors:f,doc:d,maxAliasCount:p}=i;let g=f.get(u);if(g||(mn(u,null,i),g=f.get(u)),(g==null?void 0:g.res)===void 0){const m="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(m)}if(p>=0&&(g.count+=1,g.aliasCount===0&&(g.aliasCount=Is(d,u,f)),g.count*g.aliasCount>p)){const m="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(m)}}return u}toJSON(r,i){if(!i)return{source:this.source};const o=this.resolve(i.doc,i);if(!o){const u=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(u)}return i.anchors.get(o).res}toString(r,i,o){const u=`*${this.source}`;if(r){if(Wc(this.source),r.options.verifyAliasOrder&&!r.anchors.has(this.source)){const f=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(f)}if(r.implicitKey)return`${u} `}return u}}function Is(s,r,i){if(hr(r)){const o=r.resolve(s),u=i&&o&&i.get(o);return u?u.count*u.aliasCount:0}else if(Oe(r)){let o=0;for(const u of r.items){const f=Is(s,u,i);f>o&&(o=f)}return o}else if(Ie(r)){const o=Is(s,r.key,i),u=Is(s,r.value,i);return Math.max(o,u)}return 1}const qc=s=>!s||typeof s!="function"&&typeof s!="object";class te extends fa{constructor(r){super(jn),this.value=r}toJSON(r,i){return i!=null&&i.keep?this.value:mn(this.value,r,i)}toString(){return String(this.value)}}te.BLOCK_FOLDED="BLOCK_FOLDED";te.BLOCK_LITERAL="BLOCK_LITERAL";te.PLAIN="PLAIN";te.QUOTE_DOUBLE="QUOTE_DOUBLE";te.QUOTE_SINGLE="QUOTE_SINGLE";const Xp="tag:yaml.org,2002:";function Zp(s,r,i){if(r){const o=i.filter(f=>f.tag===r),u=o.find(f=>!f.format)??o[0];if(!u)throw new Error(`Tag ${r} not found`);return u}return i.find(o=>{var u;return((u=o.identify)==null?void 0:u.call(o,s))&&!o.format})}function ui(s,r,i){var k,E,T;if(Rs(s)&&(s=s.contents),Le(s))return s;if(Ie(s)){const j=(E=(k=i.schema[dt]).createNode)==null?void 0:E.call(k,i.schema,null,i);return j.items.push(s),j}(s instanceof String||s instanceof Number||s instanceof Boolean||typeof BigInt<"u"&&s instanceof BigInt)&&(s=s.valueOf());const{aliasDuplicateObjects:o,onAnchor:u,onTagObj:f,schema:d,sourceObjects:p}=i;let g;if(o&&s&&typeof s=="object"){if(g=p.get(s),g)return g.anchor??(g.anchor=u(s)),new ca(g.anchor);g={anchor:null,node:null},p.set(s,g)}r!=null&&r.startsWith("!!")&&(r=Xp+r.slice(2));let m=Zp(s,r,d.tags);if(!m){if(s&&typeof s.toJSON=="function"&&(s=s.toJSON()),!s||typeof s!="object"){const j=new te(s);return g&&(g.node=j),j}m=s instanceof Map?d[dt]:Symbol.iterator in Object(s)?d[dr]:d[dt]}f&&(f(m),delete i.onTagObj);const b=m!=null&&m.createNode?m.createNode(i.schema,s,i):typeof((T=m==null?void 0:m.nodeClass)==null?void 0:T.from)=="function"?m.nodeClass.from(i.schema,s,i):new te(s);return r?b.tag=r:m.default||(b.tag=m.tag),g&&(g.node=b),b}function As(s,r,i){let o=i;for(let u=r.length-1;u>=0;--u){const f=r[u];if(typeof f=="number"&&Number.isInteger(f)&&f>=0){const d=[];d[f]=o,o=d}else o=new Map([[f,o]])}return ui(o,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:s,sourceObjects:new Map})}const si=s=>s==null||typeof s=="object"&&!!s[Symbol.iterator]().next().done;class Yc extends fa{constructor(r,i){super(r),Object.defineProperty(this,"schema",{value:i,configurable:!0,enumerable:!1,writable:!0})}clone(r){const i=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return r&&(i.schema=r),i.items=i.items.map(o=>Le(o)||Ie(o)?o.clone(r):o),this.range&&(i.range=this.range.slice()),i}addIn(r,i){if(si(r))this.add(i);else{const[o,...u]=r,f=this.get(o,!0);if(Oe(f))f.addIn(u,i);else if(f===void 0&&this.schema)this.set(o,As(this.schema,u,i));else throw new Error(`Expected YAML collection at ${o}. Remaining path: ${u}`)}}deleteIn(r){const[i,...o]=r;if(o.length===0)return this.delete(i);const u=this.get(i,!0);if(Oe(u))return u.deleteIn(o);throw new Error(`Expected YAML collection at ${i}. Remaining path: ${o}`)}getIn(r,i){const[o,...u]=r,f=this.get(o,!0);return u.length===0?!i&&ge(f)?f.value:f:Oe(f)?f.getIn(u,i):void 0}hasAllNullValues(r){return this.items.every(i=>{if(!Ie(i))return!1;const o=i.value;return o==null||r&&ge(o)&&o.value==null&&!o.commentBefore&&!o.comment&&!o.tag})}hasIn(r){const[i,...o]=r;if(o.length===0)return this.has(i);const u=this.get(i,!0);return Oe(u)?u.hasIn(o):!1}setIn(r,i){const[o,...u]=r;if(u.length===0)this.set(o,i);else{const f=this.get(o,!0);if(Oe(f))f.setIn(u,i);else if(f===void 0&&this.schema)this.set(o,As(this.schema,u,i));else throw new Error(`Expected YAML collection at ${o}. Remaining path: ${u}`)}}}const eg=s=>s.replace(/^(?!$)(?: $)?/gm,"#");function Vn(s,r){return/^\n+$/.test(s)?s.substring(1):r?s.replace(/^(?! *$)/gm,r):s}const Tt=(s,r,i)=>s.endsWith(`
`)?Vn(i,r):i.includes(`
`)?`
`+Vn(i,r):(s.endsWith(" ")?"":" ")+i,Gc="flow",ta="block",Ps="quoted";function Ds(s,r,i="flow",{indentAtStart:o,lineWidth:u=80,minContentWidth:f=20,onFold:d,onOverflow:p}={}){if(!u||u<0)return s;u<f&&(f=0);const g=Math.max(1+f,1+u-r.length);if(s.length<=g)return s;const m=[],b={};let k=u-r.length;typeof o=="number"&&(o>u-Math.max(2,f)?m.push(0):k=u-o);let E,T,j=!1,N=-1,O=-1,$=-1;i===ta&&(N=Lc(s,N,r.length),N!==-1&&(k=N+g));for(let q;q=s[N+=1];){if(i===Ps&&q==="\\"){switch(O=N,s[N+1]){case"x":N+=3;break;case"u":N+=5;break;case"U":N+=9;break;default:N+=1}$=N}if(q===`
`)i===ta&&(N=Lc(s,N,r.length)),k=N+r.length+g,E=void 0;else{if(q===" "&&T&&T!==" "&&T!==`
`&&T!=="	"){const W=s[N+1];W&&W!==" "&&W!==`
`&&W!=="	"&&(E=N)}if(N>=k)if(E)m.push(E),k=E+g,E=void 0;else if(i===Ps){for(;T===" "||T==="	";)T=q,q=s[N+=1],j=!0;const W=N>$+1?N-2:O-1;if(b[W])return s;m.push(W),b[W]=!0,k=W+g,E=void 0}else j=!0}T=q}if(j&&p&&p(),m.length===0)return s;d&&d();let V=s.slice(0,m[0]);for(let q=0;q<m.length;++q){const W=m[q],Y=m[q+1]||s.length;W===0?V=`
${r}${s.slice(0,Y)}`:(i===Ps&&b[W]&&(V+=`${s[W]}\\`),V+=`
${r}${s.slice(W+1,Y)}`)}return V}function Lc(s,r,i){let o=r,u=r+1,f=s[u];for(;f===" "||f==="	";)if(r<u+i)f=s[++r];else{do f=s[++r];while(f&&f!==`
`);o=r,u=r+1,f=s[u]}return o}const Bs=(s,r)=>({indentAtStart:r?s.indent.length:s.indentAtStart,lineWidth:s.options.lineWidth,minContentWidth:s.options.minContentWidth}),Fs=s=>/^(%|---|\.\.\.)/m.test(s);function ng(s,r,i){if(!r||r<0)return!1;const o=r-i,u=s.length;if(u<=o)return!1;for(let f=0,d=0;f<u;++f)if(s[f]===`
`){if(f-d>o)return!0;if(d=f+1,u-d<=o)return!1}return!0}function ai(s,r){const i=JSON.stringify(s);if(r.options.doubleQuotedAsJSON)return i;const{implicitKey:o}=r,u=r.options.doubleQuotedMinMultiLineLength,f=r.indent||(Fs(s)?"  ":"");let d="",p=0;for(let g=0,m=i[g];m;m=i[++g])if(m===" "&&i[g+1]==="\\"&&i[g+2]==="n"&&(d+=i.slice(p,g)+"\\ ",g+=1,p=g,m="\\"),m==="\\")switch(i[g+1]){case"u":{d+=i.slice(p,g);const b=i.substr(g+2,4);switch(b){case"0000":d+="\\0";break;case"0007":d+="\\a";break;case"000b":d+="\\v";break;case"001b":d+="\\e";break;case"0085":d+="\\N";break;case"00a0":d+="\\_";break;case"2028":d+="\\L";break;case"2029":d+="\\P";break;default:b.substr(0,2)==="00"?d+="\\x"+b.substr(2):d+=i.substr(g,6)}g+=5,p=g+1}break;case"n":if(o||i[g+2]==='"'||i.length<u)g+=1;else{for(d+=i.slice(p,g)+`

`;i[g+2]==="\\"&&i[g+3]==="n"&&i[g+4]!=='"';)d+=`
`,g+=2;d+=f,i[g+2]===" "&&(d+="\\"),g+=1,p=g+1}break;default:g+=1}return d=p?d+i.slice(p):i,o?d:Ds(d,f,Ps,Bs(r,!1))}function ra(s,r){if(r.options.singleQuote===!1||r.implicitKey&&s.includes(`
`)||/[ \t]\n|\n[ \t]/.test(s))return ai(s,r);const i=r.indent||(Fs(s)?"  ":""),o="'"+s.replace(/'/g,"''").replace(/\n+/g,`$&
${i}`)+"'";return r.implicitKey?o:Ds(o,i,Gc,Bs(r,!1))}function lr(s,r){const{singleQuote:i}=r.options;let o;if(i===!1)o=ai;else{const u=s.includes('"'),f=s.includes("'");u&&!f?o=ra:f&&!u?o=ai:o=i?ra:ai}return o(s,r)}let ia;try{ia=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{ia=/\n+(?!\n|$)/g}function zs({comment:s,type:r,value:i},o,u,f){const{blockQuote:d,commentString:p,lineWidth:g}=o.options;if(!d||/\n[\t ]+$/.test(i))return lr(i,o);const m=o.indent||(o.forceBlockIndent||Fs(i)?"  ":""),b=d==="literal"?!0:d==="folded"||r===te.BLOCK_FOLDED?!1:r===te.BLOCK_LITERAL?!0:!ng(i,g,m.length);if(!i)return b?`|
`:`>
`;let k,E;for(E=i.length;E>0;--E){const Y=i[E-1];if(Y!==`
`&&Y!=="	"&&Y!==" ")break}let T=i.substring(E);const j=T.indexOf(`
`);j===-1?k="-":i===T||j!==T.length-1?(k="+",f&&f()):k="",T&&(i=i.slice(0,-T.length),T[T.length-1]===`
`&&(T=T.slice(0,-1)),T=T.replace(ia,`$&${m}`));let N=!1,O,$=-1;for(O=0;O<i.length;++O){const Y=i[O];if(Y===" ")N=!0;else if(Y===`
`)$=O;else break}let V=i.substring(0,$<O?$+1:O);V&&(i=i.substring(V.length),V=V.replace(/\n+/g,`$&${m}`));let W=(N?m?"2":"1":"")+k;if(s&&(W+=" "+p(s.replace(/ ?[\r\n]+/g," ")),u&&u()),!b){const Y=i.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${m}`);let ee=!1;const G=Bs(o,!0);d!=="folded"&&r!==te.BLOCK_FOLDED&&(G.onOverflow=()=>{ee=!0});const U=Ds(`${V}${Y}${T}`,m,ta,G);if(!ee)return`>${W}
${m}${U}`}return i=i.replace(/\n+/g,`$&${m}`),`|${W}
${m}${V}${i}${T}`}function tg(s,r,i,o){const{type:u,value:f}=s,{actualString:d,implicitKey:p,indent:g,indentStep:m,inFlow:b}=r;if(p&&f.includes(`
`)||b&&/[[\]{},]/.test(f))return lr(f,r);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(f))return p||b||!f.includes(`
`)?lr(f,r):zs(s,r,i,o);if(!p&&!b&&u!==te.PLAIN&&f.includes(`
`))return zs(s,r,i,o);if(Fs(f)){if(g==="")return r.forceBlockIndent=!0,zs(s,r,i,o);if(p&&g===m)return lr(f,r)}const k=f.replace(/\n+/g,`$&
${g}`);if(d){const E=N=>{var O;return N.default&&N.tag!=="tag:yaml.org,2002:str"&&((O=N.test)==null?void 0:O.test(k))},{compat:T,tags:j}=r.doc.schema;if(j.some(E)||T!=null&&T.some(E))return lr(f,r)}return p?k:Ds(k,g,Gc,Bs(r,!1))}function da(s,r,i,o){const{implicitKey:u,inFlow:f}=r,d=typeof s.value=="string"?s:Object.assign({},s,{value:String(s.value)});let{type:p}=s;p!==te.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(d.value)&&(p=te.QUOTE_DOUBLE);const g=b=>{switch(b){case te.BLOCK_FOLDED:case te.BLOCK_LITERAL:return u||f?lr(d.value,r):zs(d,r,i,o);case te.QUOTE_DOUBLE:return ai(d.value,r);case te.QUOTE_SINGLE:return ra(d.value,r);case te.PLAIN:return tg(d,r,i,o);default:return null}};let m=g(p);if(m===null){const{defaultKeyType:b,defaultStringType:k}=r.options,E=u&&b||k;if(m=g(E),m===null)throw new Error(`Unsupported default string type ${E}`)}return m}function Jc(s,r){const i=Object.assign({blockQuote:!0,commentString:eg,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},s.schema.toStringOptions,r);let o;switch(i.collectionStyle){case"block":o=!1;break;case"flow":o=!0;break;default:o=null}return{anchors:new Set,doc:s,flowCollectionPadding:i.flowCollectionPadding?" ":"",indent:"",indentStep:typeof i.indent=="number"?" ".repeat(i.indent):"  ",inFlow:o,options:i}}function rg(s,r){var u;if(r.tag){const f=s.filter(d=>d.tag===r.tag);if(f.length>0)return f.find(d=>d.format===r.format)??f[0]}let i,o;if(ge(r)){o=r.value;let f=s.filter(d=>{var p;return(p=d.identify)==null?void 0:p.call(d,o)});if(f.length>1){const d=f.filter(p=>p.test);d.length>0&&(f=d)}i=f.find(d=>d.format===r.format)??f.find(d=>!d.format)}else o=r,i=s.find(f=>f.nodeClass&&o instanceof f.nodeClass);if(!i){const f=((u=o==null?void 0:o.constructor)==null?void 0:u.name)??(o===null?"null":typeof o);throw new Error(`Tag not resolved for ${f} value`)}return i}function ig(s,r,{anchors:i,doc:o}){if(!o.directives)return"";const u=[],f=(ge(s)||Oe(s))&&s.anchor;f&&Wc(f)&&(i.add(f),u.push(`&${f}`));const d=s.tag??(r.default?null:r.tag);return d&&u.push(o.directives.tagString(d)),u.join(" ")}function fr(s,r,i,o){var g;if(Ie(s))return s.toString(r,i,o);if(hr(s)){if(r.doc.directives)return s.toString(r);if((g=r.resolvedAliases)!=null&&g.has(s))throw new TypeError("Cannot stringify circular structure without alias nodes");r.resolvedAliases?r.resolvedAliases.add(s):r.resolvedAliases=new Set([s]),s=s.resolve(r.doc)}let u;const f=Le(s)?s:r.doc.createNode(s,{onTagObj:m=>u=m});u??(u=rg(r.doc.schema.tags,f));const d=ig(f,u,r);d.length>0&&(r.indentAtStart=(r.indentAtStart??0)+d.length+1);const p=typeof u.stringify=="function"?u.stringify(f,r,i,o):ge(f)?da(f,r,i,o):f.toString(r,i,o);return d?ge(f)||p[0]==="{"||p[0]==="["?`${d} ${p}`:`${d}
${r.indent}${p}`:p}function sg({key:s,value:r},i,o,u){const{allNullValues:f,doc:d,indent:p,indentStep:g,options:{commentString:m,indentSeq:b,simpleKeys:k}}=i;let E=Le(s)&&s.comment||null;if(k){if(E)throw new Error("With simple keys, key nodes cannot have comments");if(Oe(s)||!Le(s)&&typeof s=="object"){const G="With simple keys, collection cannot be used as a key value";throw new Error(G)}}let T=!k&&(!s||E&&r==null&&!i.inFlow||Oe(s)||(ge(s)?s.type===te.BLOCK_FOLDED||s.type===te.BLOCK_LITERAL:typeof s=="object"));i=Object.assign({},i,{allNullValues:!1,implicitKey:!T&&(k||!f),indent:p+g});let j=!1,N=!1,O=fr(s,i,()=>j=!0,()=>N=!0);if(!T&&!i.inFlow&&O.length>1024){if(k)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");T=!0}if(i.inFlow){if(f||r==null)return j&&o&&o(),O===""?"?":T?`? ${O}`:O}else if(f&&!k||r==null&&T)return O=`? ${O}`,E&&!j?O+=Tt(O,i.indent,m(E)):N&&u&&u(),O;j&&(E=null),T?(E&&(O+=Tt(O,i.indent,m(E))),O=`? ${O}
${p}:`):(O=`${O}:`,E&&(O+=Tt(O,i.indent,m(E))));let $,V,q;Le(r)?($=!!r.spaceBefore,V=r.commentBefore,q=r.comment):($=!1,V=null,q=null,r&&typeof r=="object"&&(r=d.createNode(r))),i.implicitKey=!1,!T&&!E&&ge(r)&&(i.indentAtStart=O.length+1),N=!1,!b&&g.length>=2&&!i.inFlow&&!T&&di(r)&&!r.flow&&!r.tag&&!r.anchor&&(i.indent=i.indent.substring(2));let W=!1;const Y=fr(r,i,()=>W=!0,()=>N=!0);let ee=" ";if(E||$||V){if(ee=$?`
`:"",V){const G=m(V);ee+=`
${Vn(G,i.indent)}`}Y===""&&!i.inFlow?ee===`
`&&q&&(ee=`

`):ee+=`
${i.indent}`}else if(!T&&Oe(r)){const G=Y[0],U=Y.indexOf(`
`),le=U!==-1,me=i.inFlow??r.flow??r.items.length===0;if(le||!me){let Re=!1;if(le&&(G==="&"||G==="!")){let Ne=Y.indexOf(" ");G==="&"&&Ne!==-1&&Ne<U&&Y[Ne+1]==="!"&&(Ne=Y.indexOf(" ",Ne+1)),(Ne===-1||U<Ne)&&(Re=!0)}Re||(ee=`
${i.indent}`)}}else(Y===""||Y[0]===`
`)&&(ee="");return O+=ee+Y,i.inFlow?W&&o&&o():q&&!W?O+=Tt(O,i.indent,m(q)):N&&u&&u(),O}function Xc(s,r){(s==="debug"||s==="warn")&&console.warn(r)}const Cs="<<",Wn={identify:s=>s===Cs||typeof s=="symbol"&&s.description===Cs,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new te(Symbol(Cs)),{addToJSMap:Zc}),stringify:()=>Cs},lg=(s,r)=>(Wn.identify(r)||ge(r)&&(!r.type||r.type===te.PLAIN)&&Wn.identify(r.value))&&(s==null?void 0:s.doc.schema.tags.some(i=>i.tag===Wn.tag&&i.default));function Zc(s,r,i){const o=ed(s,i);if(di(o))for(const u of o.items)qo(s,r,u);else if(Array.isArray(o))for(const u of o)qo(s,r,u);else qo(s,r,o)}function qo(s,r,i){const o=ed(s,i);if(!ci(o))throw new Error("Merge sources must be maps or map aliases");const u=o.toJSON(null,s,Map);for(const[f,d]of u)r instanceof Map?r.has(f)||r.set(f,d):r instanceof Set?r.add(f):Object.prototype.hasOwnProperty.call(r,f)||Object.defineProperty(r,f,{value:d,writable:!0,enumerable:!0,configurable:!0});return r}function ed(s,r){return s&&hr(r)?r.resolve(s.doc,s):r}function nd(s,r,{key:i,value:o}){if(Le(i)&&i.addToJSMap)i.addToJSMap(s,r,o);else if(lg(s,i))Zc(s,r,o);else{const u=mn(i,"",s);if(r instanceof Map)r.set(u,mn(o,u,s));else if(r instanceof Set)r.add(u);else{const f=og(i,u,s),d=mn(o,f,s);f in r?Object.defineProperty(r,f,{value:d,writable:!0,enumerable:!0,configurable:!0}):r[f]=d}}return r}function og(s,r,i){if(r===null)return"";if(typeof r!="object")return String(r);if(Le(s)&&(i!=null&&i.doc)){const o=Jc(i.doc,{});o.anchors=new Set;for(const f of i.anchors.keys())o.anchors.add(f.anchor);o.inFlow=!0,o.inStringifyKey=!0;const u=s.toString(o);if(!i.mapKeyWarned){let f=JSON.stringify(u);f.length>40&&(f=f.substring(0,36)+'..."'),Xc(i.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${f}. Set mapAsMap: true to use object keys.`),i.mapKeyWarned=!0}return u}return JSON.stringify(r)}function ha(s,r,i){const o=ui(s,void 0,i),u=ui(r,void 0,i);return new qe(o,u)}class qe{constructor(r,i=null){Object.defineProperty(this,yn,{value:Kc}),this.key=r,this.value=i}clone(r){let{key:i,value:o}=this;return Le(i)&&(i=i.clone(r)),Le(o)&&(o=o.clone(r)),new qe(i,o)}toJSON(r,i){const o=i!=null&&i.mapAsMap?new Map:{};return nd(i,o,this)}toString(r,i,o){return r!=null&&r.doc?sg(this,r,i,o):JSON.stringify(this)}}function td(s,r,i){return(r.inFlow??s.flow?ug:ag)(s,r,i)}function ag({comment:s,items:r},i,{blockItemPrefix:o,flowChars:u,itemIndent:f,onChompKeep:d,onComment:p}){const{indent:g,options:{commentString:m}}=i,b=Object.assign({},i,{indent:f,type:null});let k=!1;const E=[];for(let j=0;j<r.length;++j){const N=r[j];let O=null;if(Le(N))!k&&N.spaceBefore&&E.push(""),js(i,E,N.commentBefore,k),N.comment&&(O=N.comment);else if(Ie(N)){const V=Le(N.key)?N.key:null;V&&(!k&&V.spaceBefore&&E.push(""),js(i,E,V.commentBefore,k))}k=!1;let $=fr(N,b,()=>O=null,()=>k=!0);O&&($+=Tt($,f,m(O))),k&&O&&(k=!1),E.push(o+$)}let T;if(E.length===0)T=u.start+u.end;else{T=E[0];for(let j=1;j<E.length;++j){const N=E[j];T+=N?`
${g}${N}`:`
`}}return s?(T+=`
`+Vn(m(s),g),p&&p()):k&&d&&d(),T}function ug({items:s},r,{flowChars:i,itemIndent:o}){const{indent:u,indentStep:f,flowCollectionPadding:d,options:{commentString:p}}=r;o+=f;const g=Object.assign({},r,{indent:o,inFlow:!0,type:null});let m=!1,b=0;const k=[];for(let j=0;j<s.length;++j){const N=s[j];let O=null;if(Le(N))N.spaceBefore&&k.push(""),js(r,k,N.commentBefore,!1),N.comment&&(O=N.comment);else if(Ie(N)){const V=Le(N.key)?N.key:null;V&&(V.spaceBefore&&k.push(""),js(r,k,V.commentBefore,!1),V.comment&&(m=!0));const q=Le(N.value)?N.value:null;q?(q.comment&&(O=q.comment),q.commentBefore&&(m=!0)):N.value==null&&(V!=null&&V.comment)&&(O=V.comment)}O&&(m=!0);let $=fr(N,g,()=>O=null);m||(m=k.length>b||$.includes(`
`)),j<s.length-1?$+=",":r.options.trailingComma&&(r.options.lineWidth>0&&(m||(m=k.reduce((V,q)=>V+q.length+2,2)+($.length+2)>r.options.lineWidth)),m&&($+=",")),O&&($+=Tt($,o,p(O))),k.push($),b=k.length}const{start:E,end:T}=i;if(k.length===0)return E+T;if(!m){const j=k.reduce((N,O)=>N+O.length+2,2);m=r.options.lineWidth>0&&j>r.options.lineWidth}if(m){let j=E;for(const N of k)j+=N?`
${f}${u}${N}`:`
`;return`${j}
${u}${T}`}else return`${E}${d}${k.join(" ")}${d}${T}`}function js({indent:s,options:{commentString:r}},i,o,u){if(o&&u&&(o=o.replace(/^\n+/,"")),o){const f=Vn(r(o),s);i.push(f.trimStart())}}function Ot(s,r){const i=ge(r)?r.value:r;for(const o of s)if(Ie(o)&&(o.key===r||o.key===i||ge(o.key)&&o.key.value===i))return o}class gn extends Yc{static get tagName(){return"tag:yaml.org,2002:map"}constructor(r){super(dt,r),this.items=[]}static from(r,i,o){const{keepUndefined:u,replacer:f}=o,d=new this(r),p=(g,m)=>{if(typeof f=="function")m=f.call(i,g,m);else if(Array.isArray(f)&&!f.includes(g))return;(m!==void 0||u)&&d.items.push(ha(g,m,o))};if(i instanceof Map)for(const[g,m]of i)p(g,m);else if(i&&typeof i=="object")for(const g of Object.keys(i))p(g,i[g]);return typeof r.sortMapEntries=="function"&&d.items.sort(r.sortMapEntries),d}add(r,i){var d;let o;Ie(r)?o=r:!r||typeof r!="object"||!("key"in r)?o=new qe(r,r==null?void 0:r.value):o=new qe(r.key,r.value);const u=Ot(this.items,o.key),f=(d=this.schema)==null?void 0:d.sortMapEntries;if(u){if(!i)throw new Error(`Key ${o.key} already set`);ge(u.value)&&qc(o.value)?u.value.value=o.value:u.value=o.value}else if(f){const p=this.items.findIndex(g=>f(o,g)<0);p===-1?this.items.push(o):this.items.splice(p,0,o)}else this.items.push(o)}delete(r){const i=Ot(this.items,r);return i?this.items.splice(this.items.indexOf(i),1).length>0:!1}get(r,i){const o=Ot(this.items,r),u=o==null?void 0:o.value;return(!i&&ge(u)?u.value:u)??void 0}has(r){return!!Ot(this.items,r)}set(r,i){this.add(new qe(r,i),!0)}toJSON(r,i,o){const u=o?new o:i!=null&&i.mapAsMap?new Map:{};i!=null&&i.onCreate&&i.onCreate(u);for(const f of this.items)nd(i,u,f);return u}toString(r,i,o){if(!r)return JSON.stringify(this);for(const u of this.items)if(!Ie(u))throw new Error(`Map items must all be pairs; found ${JSON.stringify(u)} instead`);return!r.allNullValues&&this.hasAllNullValues(!1)&&(r=Object.assign({},r,{allNullValues:!0})),td(this,r,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:r.indent||"",onChompKeep:o,onComment:i})}}const gr={collection:"map",default:!0,nodeClass:gn,tag:"tag:yaml.org,2002:map",resolve(s,r){return ci(s)||r("Expected a mapping for this tag"),s},createNode:(s,r,i)=>gn.from(s,r,i)};class Lt extends Yc{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(r){super(dr,r),this.items=[]}add(r){this.items.push(r)}delete(r){const i=bs(r);return typeof i!="number"?!1:this.items.splice(i,1).length>0}get(r,i){const o=bs(r);if(typeof o!="number")return;const u=this.items[o];return!i&&ge(u)?u.value:u}has(r){const i=bs(r);return typeof i=="number"&&i<this.items.length}set(r,i){const o=bs(r);if(typeof o!="number")throw new Error(`Expected a valid index, not ${r}.`);const u=this.items[o];ge(u)&&qc(i)?u.value=i:this.items[o]=i}toJSON(r,i){const o=[];i!=null&&i.onCreate&&i.onCreate(o);let u=0;for(const f of this.items)o.push(mn(f,String(u++),i));return o}toString(r,i,o){return r?td(this,r,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(r.indent||"")+"  ",onChompKeep:o,onComment:i}):JSON.stringify(this)}static from(r,i,o){const{replacer:u}=o,f=new this(r);if(i&&Symbol.iterator in Object(i)){let d=0;for(let p of i){if(typeof u=="function"){const g=i instanceof Set?p:String(d++);p=u.call(i,g,p)}f.items.push(ui(p,void 0,o))}}return f}}function bs(s){let r=ge(s)?s.value:s;return r&&typeof r=="string"&&(r=Number(r)),typeof r=="number"&&Number.isInteger(r)&&r>=0?r:null}const mr={collection:"seq",default:!0,nodeClass:Lt,tag:"tag:yaml.org,2002:seq",resolve(s,r){return di(s)||r("Expected a sequence for this tag"),s},createNode:(s,r,i)=>Lt.from(s,r,i)},Us={identify:s=>typeof s=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:s=>s,stringify(s,r,i,o){return r=Object.assign({actualString:!0},r),da(s,r,i,o)}},Ks={identify:s=>s==null,createNode:()=>new te(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new te(null),stringify:({source:s},r)=>typeof s=="string"&&Ks.test.test(s)?s:r.options.nullStr},pa={identify:s=>typeof s=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:s=>new te(s[0]==="t"||s[0]==="T"),stringify({source:s,value:r},i){if(s&&pa.test.test(s)){const o=s[0]==="t"||s[0]==="T";if(r===o)return s}return r?i.options.trueStr:i.options.falseStr}};function bn({format:s,minFractionDigits:r,tag:i,value:o}){if(typeof o=="bigint")return String(o);const u=typeof o=="number"?o:Number(o);if(!isFinite(u))return isNaN(u)?".nan":u<0?"-.inf":".inf";let f=Object.is(o,-0)?"-0":JSON.stringify(o);if(!s&&r&&(!i||i==="tag:yaml.org,2002:float")&&/^-?\d/.test(f)&&!f.includes("e")){let d=f.indexOf(".");d<0&&(d=f.length,f+=".");let p=r-(f.length-d-1);for(;p-- >0;)f+="0"}return f}const rd={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:s=>s.slice(-3).toLowerCase()==="nan"?NaN:s[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:bn},id={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:s=>parseFloat(s),stringify(s){const r=Number(s.value);return isFinite(r)?r.toExponential():bn(s)}},sd={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(s){const r=new te(parseFloat(s)),i=s.indexOf(".");return i!==-1&&s[s.length-1]==="0"&&(r.minFractionDigits=s.length-i-1),r},stringify:bn},Vs=s=>typeof s=="bigint"||Number.isInteger(s),ga=(s,r,i,{intAsBigInt:o})=>o?BigInt(s):parseInt(s.substring(r),i);function ld(s,r,i){const{value:o}=s;return Vs(o)&&o>=0?i+o.toString(r):bn(s)}const od={identify:s=>Vs(s)&&s>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(s,r,i)=>ga(s,2,8,i),stringify:s=>ld(s,8,"0o")},ad={identify:Vs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(s,r,i)=>ga(s,0,10,i),stringify:bn},ud={identify:s=>Vs(s)&&s>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(s,r,i)=>ga(s,2,16,i),stringify:s=>ld(s,16,"0x")},fg=[gr,mr,Us,Ks,pa,od,ad,ud,rd,id,sd];function Ic(s){return typeof s=="bigint"||Number.isInteger(s)}const Ts=({value:s})=>JSON.stringify(s),cg=[{identify:s=>typeof s=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:s=>s,stringify:Ts},{identify:s=>s==null,createNode:()=>new te(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ts},{identify:s=>typeof s=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:s=>s==="true",stringify:Ts},{identify:Ic,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(s,r,{intAsBigInt:i})=>i?BigInt(s):parseInt(s,10),stringify:({value:s})=>Ic(s)?s.toString():JSON.stringify(s)},{identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:s=>parseFloat(s),stringify:Ts}],dg={default:!0,tag:"",test:/^/,resolve(s,r){return r(`Unresolved plain scalar ${JSON.stringify(s)}`),s}},hg=[gr,mr].concat(cg,dg),ma={identify:s=>s instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(s,r){if(typeof atob=="function"){const i=atob(s.replace(/[\n\r]/g,"")),o=new Uint8Array(i.length);for(let u=0;u<i.length;++u)o[u]=i.charCodeAt(u);return o}else return r("This environment does not support reading binary tags; either Buffer or atob is required"),s},stringify({comment:s,type:r,value:i},o,u,f){if(!i)return"";const d=i;let p;if(typeof btoa=="function"){let g="";for(let m=0;m<d.length;++m)g+=String.fromCharCode(d[m]);p=btoa(g)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(r??(r=te.BLOCK_LITERAL),r!==te.QUOTE_DOUBLE){const g=Math.max(o.options.lineWidth-o.indent.length,o.options.minContentWidth),m=Math.ceil(p.length/g),b=new Array(m);for(let k=0,E=0;k<m;++k,E+=g)b[k]=p.substr(E,g);p=b.join(r===te.BLOCK_LITERAL?`
`:" ")}return da({comment:s,type:r,value:p},o,u,f)}};function fd(s,r){if(di(s))for(let i=0;i<s.items.length;++i){let o=s.items[i];if(!Ie(o)){if(ci(o)){o.items.length>1&&r("Each pair must have its own sequence indicator");const u=o.items[0]||new qe(new te(null));if(o.commentBefore&&(u.key.commentBefore=u.key.commentBefore?`${o.commentBefore}
${u.key.commentBefore}`:o.commentBefore),o.comment){const f=u.value??u.key;f.comment=f.comment?`${o.comment}
${f.comment}`:o.comment}o=u}s.items[i]=Ie(o)?o:new qe(o)}}else r("Expected a sequence for this tag");return s}function cd(s,r,i){const{replacer:o}=i,u=new Lt(s);u.tag="tag:yaml.org,2002:pairs";let f=0;if(r&&Symbol.iterator in Object(r))for(let d of r){typeof o=="function"&&(d=o.call(r,String(f++),d));let p,g;if(Array.isArray(d))if(d.length===2)p=d[0],g=d[1];else throw new TypeError(`Expected [key, value] tuple: ${d}`);else if(d&&d instanceof Object){const m=Object.keys(d);if(m.length===1)p=m[0],g=d[p];else throw new TypeError(`Expected tuple with one key, not ${m.length} keys`)}else p=d;u.items.push(ha(p,g,i))}return u}const ya={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:fd,createNode:cd};class ar extends Lt{constructor(){super(),this.add=gn.prototype.add.bind(this),this.delete=gn.prototype.delete.bind(this),this.get=gn.prototype.get.bind(this),this.has=gn.prototype.has.bind(this),this.set=gn.prototype.set.bind(this),this.tag=ar.tag}toJSON(r,i){if(!i)return super.toJSON(r);const o=new Map;i!=null&&i.onCreate&&i.onCreate(o);for(const u of this.items){let f,d;if(Ie(u)?(f=mn(u.key,"",i),d=mn(u.value,f,i)):f=mn(u,"",i),o.has(f))throw new Error("Ordered maps must not include duplicate keys");o.set(f,d)}return o}static from(r,i,o){const u=cd(r,i,o),f=new this;return f.items=u.items,f}}ar.tag="tag:yaml.org,2002:omap";const wa={collection:"seq",identify:s=>s instanceof Map,nodeClass:ar,default:!1,tag:"tag:yaml.org,2002:omap",resolve(s,r){const i=fd(s,r),o=[];for(const{key:u}of i.items)ge(u)&&(o.includes(u.value)?r(`Ordered maps must not include duplicate keys: ${u.value}`):o.push(u.value));return Object.assign(new ar,i)},createNode:(s,r,i)=>ar.from(s,r,i)};function dd({value:s,source:r},i){return r&&(s?hd:pd).test.test(r)?r:s?i.options.trueStr:i.options.falseStr}const hd={identify:s=>s===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new te(!0),stringify:dd},pd={identify:s=>s===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new te(!1),stringify:dd},pg={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:s=>s.slice(-3).toLowerCase()==="nan"?NaN:s[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:bn},gg={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:s=>parseFloat(s.replace(/_/g,"")),stringify(s){const r=Number(s.value);return isFinite(r)?r.toExponential():bn(s)}},mg={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(s){const r=new te(parseFloat(s.replace(/_/g,""))),i=s.indexOf(".");if(i!==-1){const o=s.substring(i+1).replace(/_/g,"");o[o.length-1]==="0"&&(r.minFractionDigits=o.length)}return r},stringify:bn},hi=s=>typeof s=="bigint"||Number.isInteger(s);function Ws(s,r,i,{intAsBigInt:o}){const u=s[0];if((u==="-"||u==="+")&&(r+=1),s=s.substring(r).replace(/_/g,""),o){switch(i){case 2:s=`0b${s}`;break;case 8:s=`0o${s}`;break;case 16:s=`0x${s}`;break}const d=BigInt(s);return u==="-"?BigInt(-1)*d:d}const f=parseInt(s,i);return u==="-"?-1*f:f}function _a(s,r,i){const{value:o}=s;if(hi(o)){const u=o.toString(r);return o<0?"-"+i+u.substr(1):i+u}return bn(s)}const yg={identify:hi,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(s,r,i)=>Ws(s,2,2,i),stringify:s=>_a(s,2,"0b")},wg={identify:hi,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(s,r,i)=>Ws(s,1,8,i),stringify:s=>_a(s,8,"0")},_g={identify:hi,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(s,r,i)=>Ws(s,0,10,i),stringify:bn},vg={identify:hi,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(s,r,i)=>Ws(s,2,16,i),stringify:s=>_a(s,16,"0x")};class ur extends gn{constructor(r){super(r),this.tag=ur.tag}add(r){let i;Ie(r)?i=r:r&&typeof r=="object"&&"key"in r&&"value"in r&&r.value===null?i=new qe(r.key,null):i=new qe(r,null),Ot(this.items,i.key)||this.items.push(i)}get(r,i){const o=Ot(this.items,r);return!i&&Ie(o)?ge(o.key)?o.key.value:o.key:o}set(r,i){if(typeof i!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof i}`);const o=Ot(this.items,r);o&&!i?this.items.splice(this.items.indexOf(o),1):!o&&i&&this.items.push(new qe(r))}toJSON(r,i){return super.toJSON(r,i,Set)}toString(r,i,o){if(!r)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},r,{allNullValues:!0}),i,o);throw new Error("Set items must all have null values")}static from(r,i,o){const{replacer:u}=o,f=new this(r);if(i&&Symbol.iterator in Object(i))for(let d of i)typeof u=="function"&&(d=u.call(i,d,d)),f.items.push(ha(d,null,o));return f}}ur.tag="tag:yaml.org,2002:set";const va={collection:"map",identify:s=>s instanceof Set,nodeClass:ur,default:!1,tag:"tag:yaml.org,2002:set",createNode:(s,r,i)=>ur.from(s,r,i),resolve(s,r){if(ci(s)){if(s.hasAllNullValues(!0))return Object.assign(new ur,s);r("Set items must all have null values")}else r("Expected a mapping for this tag");return s}};function ka(s,r){const i=s[0],o=i==="-"||i==="+"?s.substring(1):s,u=d=>r?BigInt(d):Number(d),f=o.replace(/_/g,"").split(":").reduce((d,p)=>d*u(60)+u(p),u(0));return i==="-"?u(-1)*f:f}function gd(s){let{value:r}=s,i=d=>d;if(typeof r=="bigint")i=d=>BigInt(d);else if(isNaN(r)||!isFinite(r))return bn(s);let o="";r<0&&(o="-",r*=i(-1));const u=i(60),f=[r%u];return r<60?f.unshift(0):(r=(r-f[0])/u,f.unshift(r%u),r>=60&&(r=(r-f[0])/u,f.unshift(r))),o+f.map(d=>String(d).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const md={identify:s=>typeof s=="bigint"||Number.isInteger(s),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(s,r,{intAsBigInt:i})=>ka(s,i),stringify:gd},yd={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:s=>ka(s,!1),stringify:gd},Hs={identify:s=>s instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(s){const r=s.match(Hs.test);if(!r)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,i,o,u,f,d,p]=r.map(Number),g=r[7]?Number((r[7]+"00").substr(1,3)):0;let m=Date.UTC(i,o-1,u,f||0,d||0,p||0,g);const b=r[8];if(b&&b!=="Z"){let k=ka(b,!1);Math.abs(k)<30&&(k*=60),m-=6e4*k}return new Date(m)},stringify:({value:s})=>(s==null?void 0:s.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Pc=[gr,mr,Us,Ks,hd,pd,yg,wg,_g,vg,pg,gg,mg,ma,Wn,wa,ya,va,md,yd,Hs],zc=new Map([["core",fg],["failsafe",[gr,mr,Us]],["json",hg],["yaml11",Pc],["yaml-1.1",Pc]]),Ac={binary:ma,bool:pa,float:sd,floatExp:id,floatNaN:rd,floatTime:yd,int:ad,intHex:ud,intOct:od,intTime:md,map:gr,merge:Wn,null:Ks,omap:wa,pairs:ya,seq:mr,set:va,timestamp:Hs},kg={"tag:yaml.org,2002:binary":ma,"tag:yaml.org,2002:merge":Wn,"tag:yaml.org,2002:omap":wa,"tag:yaml.org,2002:pairs":ya,"tag:yaml.org,2002:set":va,"tag:yaml.org,2002:timestamp":Hs};function Yo(s,r,i){const o=zc.get(r);if(o&&!s)return i&&!o.includes(Wn)?o.concat(Wn):o.slice();let u=o;if(!u)if(Array.isArray(s))u=[];else{const f=Array.from(zc.keys()).filter(d=>d!=="yaml11").map(d=>JSON.stringify(d)).join(", ");throw new Error(`Unknown schema "${r}"; use one of ${f} or define customTags array`)}if(Array.isArray(s))for(const f of s)u=u.concat(f);else typeof s=="function"&&(u=s(u.slice()));return i&&(u=u.concat(Wn)),u.reduce((f,d)=>{const p=typeof d=="string"?Ac[d]:d;if(!p){const g=JSON.stringify(d),m=Object.keys(Ac).map(b=>JSON.stringify(b)).join(", ");throw new Error(`Unknown custom tag ${g}; use one of ${m}`)}return f.includes(p)||f.push(p),f},[])}const xg=(s,r)=>s.key<r.key?-1:s.key>r.key?1:0;class xa{constructor({compat:r,customTags:i,merge:o,resolveKnownTags:u,schema:f,sortMapEntries:d,toStringDefaults:p}){this.compat=Array.isArray(r)?Yo(r,"compat"):r?Yo(null,r):null,this.name=typeof f=="string"&&f||"core",this.knownTags=u?kg:{},this.tags=Yo(i,this.name,o),this.toStringOptions=p??null,Object.defineProperty(this,dt,{value:gr}),Object.defineProperty(this,jn,{value:Us}),Object.defineProperty(this,dr,{value:mr}),this.sortMapEntries=typeof d=="function"?d:d===!0?xg:null}clone(){const r=Object.create(xa.prototype,Object.getOwnPropertyDescriptors(this));return r.tags=this.tags.slice(),r}}function Sg(s,r){var g;const i=[];let o=r.directives===!0;if(r.directives!==!1&&s.directives){const m=s.directives.toString(s);m?(i.push(m),o=!0):s.directives.docStart&&(o=!0)}o&&i.push("---");const u=Jc(s,r),{commentString:f}=u.options;if(s.commentBefore){i.length!==1&&i.unshift("");const m=f(s.commentBefore);i.unshift(Vn(m,""))}let d=!1,p=null;if(s.contents){if(Le(s.contents)){if(s.contents.spaceBefore&&o&&i.push(""),s.contents.commentBefore){const k=f(s.contents.commentBefore);i.push(Vn(k,""))}u.forceBlockIndent=!!s.comment,p=s.contents.comment}const m=p?void 0:()=>d=!0;let b=fr(s.contents,u,()=>p=null,m);p&&(b+=Tt(b,"",f(p))),(b[0]==="|"||b[0]===">")&&i[i.length-1]==="---"?i[i.length-1]=`--- ${b}`:i.push(b)}else i.push(fr(s.contents,u));if((g=s.directives)!=null&&g.docEnd)if(s.comment){const m=f(s.comment);m.includes(`
`)?(i.push("..."),i.push(Vn(m,""))):i.push(`... ${m}`)}else i.push("...");else{let m=s.comment;m&&d&&(m=m.replace(/^\n+/,"")),m&&((!d||p)&&i[i.length-1]!==""&&i.push(""),i.push(Vn(f(m),"")))}return i.join(`
`)+`
`}class Qs{constructor(r,i,o){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,yn,{value:na});let u=null;typeof i=="function"||Array.isArray(i)?u=i:o===void 0&&i&&(o=i,i=void 0);const f=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},o);this.options=f;let{version:d}=f;o!=null&&o._directives?(this.directives=o._directives.atDocument(),this.directives.yaml.explicit&&(d=this.directives.yaml.version)):this.directives=new Qe({version:d}),this.setSchema(d,o),this.contents=r===void 0?null:this.createNode(r,u,o)}clone(){const r=Object.create(Qs.prototype,{[yn]:{value:na}});return r.commentBefore=this.commentBefore,r.comment=this.comment,r.errors=this.errors.slice(),r.warnings=this.warnings.slice(),r.options=Object.assign({},this.options),this.directives&&(r.directives=this.directives.clone()),r.schema=this.schema.clone(),r.contents=Le(this.contents)?this.contents.clone(r.schema):this.contents,this.range&&(r.range=this.range.slice()),r}add(r){tr(this.contents)&&this.contents.add(r)}addIn(r,i){tr(this.contents)&&this.contents.addIn(r,i)}createAlias(r,i){if(!r.anchor){const o=Hc(this);r.anchor=!i||o.has(i)?Qc(i||"a",o):i}return new ca(r.anchor)}createNode(r,i,o){let u;if(typeof i=="function")r=i.call({"":r},"",r),u=i;else if(Array.isArray(i)){const O=V=>typeof V=="number"||V instanceof String||V instanceof Number,$=i.filter(O).map(String);$.length>0&&(i=i.concat($)),u=i}else o===void 0&&i&&(o=i,i=void 0);const{aliasDuplicateObjects:f,anchorPrefix:d,flow:p,keepUndefined:g,onTagObj:m,tag:b}=o??{},{onAnchor:k,setAnchors:E,sourceObjects:T}=Jp(this,d||"a"),j={aliasDuplicateObjects:f??!0,keepUndefined:g??!1,onAnchor:k,onTagObj:m,replacer:u,schema:this.schema,sourceObjects:T},N=ui(r,b,j);return p&&Oe(N)&&(N.flow=!0),E(),N}createPair(r,i,o={}){const u=this.createNode(r,null,o),f=this.createNode(i,null,o);return new qe(u,f)}delete(r){return tr(this.contents)?this.contents.delete(r):!1}deleteIn(r){return si(r)?this.contents==null?!1:(this.contents=null,!0):tr(this.contents)?this.contents.deleteIn(r):!1}get(r,i){return Oe(this.contents)?this.contents.get(r,i):void 0}getIn(r,i){return si(r)?!i&&ge(this.contents)?this.contents.value:this.contents:Oe(this.contents)?this.contents.getIn(r,i):void 0}has(r){return Oe(this.contents)?this.contents.has(r):!1}hasIn(r){return si(r)?this.contents!==void 0:Oe(this.contents)?this.contents.hasIn(r):!1}set(r,i){this.contents==null?this.contents=As(this.schema,[r],i):tr(this.contents)&&this.contents.set(r,i)}setIn(r,i){si(r)?this.contents=i:this.contents==null?this.contents=As(this.schema,Array.from(r),i):tr(this.contents)&&this.contents.setIn(r,i)}setSchema(r,i={}){typeof r=="number"&&(r=String(r));let o;switch(r){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Qe({version:"1.1"}),o={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=r:this.directives=new Qe({version:r}),o={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,o=null;break;default:{const u=JSON.stringify(r);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${u}`)}}if(i.schema instanceof Object)this.schema=i.schema;else if(o)this.schema=new xa(Object.assign(o,i));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:r,jsonArg:i,mapAsMap:o,maxAliasCount:u,onAnchor:f,reviver:d}={}){const p={anchors:new Map,doc:this,keep:!r,mapAsMap:o===!0,mapKeyWarned:!1,maxAliasCount:typeof u=="number"?u:100},g=mn(this.contents,i??"",p);if(typeof f=="function")for(const{count:m,res:b}of p.anchors.values())f(b,m);return typeof d=="function"?sr(d,{"":g},"",g):g}toJSON(r,i){return this.toJS({json:!0,jsonArg:r,mapAsMap:!1,onAnchor:i})}toString(r={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in r&&(!Number.isInteger(r.indent)||Number(r.indent)<=0)){const i=JSON.stringify(r.indent);throw new Error(`"indent" option must be a positive integer, not ${i}`)}return Sg(this,r)}}function tr(s){if(Oe(s))return!0;throw new Error("Expected a YAML collection as document contents")}class wd extends Error{constructor(r,i,o,u){super(),this.name=r,this.code=o,this.message=u,this.pos=i}}class li extends wd{constructor(r,i,o){super("YAMLParseError",r,i,o)}}class Ng extends wd{constructor(r,i,o){super("YAMLWarning",r,i,o)}}const jc=(s,r)=>i=>{if(i.pos[0]===-1)return;i.linePos=i.pos.map(p=>r.linePos(p));const{line:o,col:u}=i.linePos[0];i.message+=` at line ${o}, column ${u}`;let f=u-1,d=s.substring(r.lineStarts[o-1],r.lineStarts[o]).replace(/[\n\r]+$/,"");if(f>=60&&d.length>80){const p=Math.min(f-39,d.length-79);d="…"+d.substring(p),f-=p-1}if(d.length>80&&(d=d.substring(0,79)+"…"),o>1&&/^ *$/.test(d.substring(0,f))){let p=s.substring(r.lineStarts[o-2],r.lineStarts[o-1]);p.length>80&&(p=p.substring(0,79)+`…
`),d=p+d}if(/[^ ]/.test(d)){let p=1;const g=i.linePos[1];(g==null?void 0:g.line)===o&&g.col>u&&(p=Math.max(1,Math.min(g.col-u,80-f)));const m=" ".repeat(f)+"^".repeat(p);i.message+=`:

${d}
${m}
`}};function cr(s,{flow:r,indicator:i,next:o,offset:u,onError:f,parentIndent:d,startOnNewline:p}){let g=!1,m=p,b=p,k="",E="",T=!1,j=!1,N=null,O=null,$=null,V=null,q=null,W=null,Y=null;for(const U of s)switch(j&&(U.type!=="space"&&U.type!=="newline"&&U.type!=="comma"&&f(U.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),j=!1),N&&(m&&U.type!=="comment"&&U.type!=="newline"&&f(N,"TAB_AS_INDENT","Tabs are not allowed as indentation"),N=null),U.type){case"space":!r&&(i!=="doc-start"||(o==null?void 0:o.type)!=="flow-collection")&&U.source.includes("	")&&(N=U),b=!0;break;case"comment":{b||f(U,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const le=U.source.substring(1)||" ";k?k+=E+le:k=le,E="",m=!1;break}case"newline":m?k?k+=U.source:(!W||i!=="seq-item-ind")&&(g=!0):E+=U.source,m=!0,T=!0,(O||$)&&(V=U),b=!0;break;case"anchor":O&&f(U,"MULTIPLE_ANCHORS","A node can have at most one anchor"),U.source.endsWith(":")&&f(U.offset+U.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),O=U,Y??(Y=U.offset),m=!1,b=!1,j=!0;break;case"tag":{$&&f(U,"MULTIPLE_TAGS","A node can have at most one tag"),$=U,Y??(Y=U.offset),m=!1,b=!1,j=!0;break}case i:(O||$)&&f(U,"BAD_PROP_ORDER",`Anchors and tags must be after the ${U.source} indicator`),W&&f(U,"UNEXPECTED_TOKEN",`Unexpected ${U.source} in ${r??"collection"}`),W=U,m=i==="seq-item-ind"||i==="explicit-key-ind",b=!1;break;case"comma":if(r){q&&f(U,"UNEXPECTED_TOKEN",`Unexpected , in ${r}`),q=U,m=!1,b=!1;break}default:f(U,"UNEXPECTED_TOKEN",`Unexpected ${U.type} token`),m=!1,b=!1}const ee=s[s.length-1],G=ee?ee.offset+ee.source.length:u;return j&&o&&o.type!=="space"&&o.type!=="newline"&&o.type!=="comma"&&(o.type!=="scalar"||o.source!=="")&&f(o.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),N&&(m&&N.indent<=d||(o==null?void 0:o.type)==="block-map"||(o==null?void 0:o.type)==="block-seq")&&f(N,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:q,found:W,spaceBefore:g,comment:k,hasNewline:T,anchor:O,tag:$,newlineAfterProp:V,end:G,start:Y??G}}function fi(s){if(!s)return null;switch(s.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(s.source.includes(`
`))return!0;if(s.end){for(const r of s.end)if(r.type==="newline")return!0}return!1;case"flow-collection":for(const r of s.items){for(const i of r.start)if(i.type==="newline")return!0;if(r.sep){for(const i of r.sep)if(i.type==="newline")return!0}if(fi(r.key)||fi(r.value))return!0}return!1;default:return!0}}function sa(s,r,i){if((r==null?void 0:r.type)==="flow-collection"){const o=r.end[0];o.indent===s&&(o.source==="]"||o.source==="}")&&fi(r)&&i(o,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function _d(s,r,i){const{uniqueKeys:o}=s.options;if(o===!1)return!1;const u=typeof o=="function"?o:(f,d)=>f===d||ge(f)&&ge(d)&&f.value===d.value;return r.some(f=>u(f.key,i))}const $c="All mapping items must start at the same column";function Eg({composeNode:s,composeEmptyNode:r},i,o,u,f){var b;const d=(f==null?void 0:f.nodeClass)??gn,p=new d(i.schema);i.atRoot&&(i.atRoot=!1);let g=o.offset,m=null;for(const k of o.items){const{start:E,key:T,sep:j,value:N}=k,O=cr(E,{indicator:"explicit-key-ind",next:T??(j==null?void 0:j[0]),offset:g,onError:u,parentIndent:o.indent,startOnNewline:!0}),$=!O.found;if($){if(T&&(T.type==="block-seq"?u(g,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in T&&T.indent!==o.indent&&u(g,"BAD_INDENT",$c)),!O.anchor&&!O.tag&&!j){m=O.end,O.comment&&(p.comment?p.comment+=`
`+O.comment:p.comment=O.comment);continue}(O.newlineAfterProp||fi(T))&&u(T??E[E.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((b=O.found)==null?void 0:b.indent)!==o.indent&&u(g,"BAD_INDENT",$c);i.atKey=!0;const V=O.end,q=T?s(i,T,O,u):r(i,V,E,null,O,u);i.schema.compat&&sa(o.indent,T,u),i.atKey=!1,_d(i,p.items,q)&&u(V,"DUPLICATE_KEY","Map keys must be unique");const W=cr(j??[],{indicator:"map-value-ind",next:N,offset:q.range[2],onError:u,parentIndent:o.indent,startOnNewline:!T||T.type==="block-scalar"});if(g=W.end,W.found){$&&((N==null?void 0:N.type)==="block-map"&&!W.hasNewline&&u(g,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),i.options.strict&&O.start<W.found.offset-1024&&u(q.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const Y=N?s(i,N,W,u):r(i,g,j,null,W,u);i.schema.compat&&sa(o.indent,N,u),g=Y.range[2];const ee=new qe(q,Y);i.options.keepSourceTokens&&(ee.srcToken=k),p.items.push(ee)}else{$&&u(q.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),W.comment&&(q.comment?q.comment+=`
`+W.comment:q.comment=W.comment);const Y=new qe(q);i.options.keepSourceTokens&&(Y.srcToken=k),p.items.push(Y)}}return m&&m<g&&u(m,"IMPOSSIBLE","Map comment with trailing content"),p.range=[o.offset,g,m??g],p}function Cg({composeNode:s,composeEmptyNode:r},i,o,u,f){const d=(f==null?void 0:f.nodeClass)??Lt,p=new d(i.schema);i.atRoot&&(i.atRoot=!1),i.atKey&&(i.atKey=!1);let g=o.offset,m=null;for(const{start:b,value:k}of o.items){const E=cr(b,{indicator:"seq-item-ind",next:k,offset:g,onError:u,parentIndent:o.indent,startOnNewline:!0});if(!E.found)if(E.anchor||E.tag||k)(k==null?void 0:k.type)==="block-seq"?u(E.end,"BAD_INDENT","All sequence items must start at the same column"):u(g,"MISSING_CHAR","Sequence item without - indicator");else{m=E.end,E.comment&&(p.comment=E.comment);continue}const T=k?s(i,k,E,u):r(i,E.end,b,null,E,u);i.schema.compat&&sa(o.indent,k,u),g=T.range[2],p.items.push(T)}return p.range=[o.offset,g,m??g],p}function pi(s,r,i,o){let u="";if(s){let f=!1,d="";for(const p of s){const{source:g,type:m}=p;switch(m){case"space":f=!0;break;case"comment":{i&&!f&&o(p,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const b=g.substring(1)||" ";u?u+=d+b:u=b,d="";break}case"newline":u&&(d+=g),f=!0;break;default:o(p,"UNEXPECTED_TOKEN",`Unexpected ${m} at node end`)}r+=g.length}}return{comment:u,offset:r}}const Go="Block collections are not allowed within flow collections",Jo=s=>s&&(s.type==="block-map"||s.type==="block-seq");function bg({composeNode:s,composeEmptyNode:r},i,o,u,f){var O;const d=o.start.source==="{",p=d?"flow map":"flow sequence",g=(f==null?void 0:f.nodeClass)??(d?gn:Lt),m=new g(i.schema);m.flow=!0;const b=i.atRoot;b&&(i.atRoot=!1),i.atKey&&(i.atKey=!1);let k=o.offset+o.start.source.length;for(let $=0;$<o.items.length;++$){const V=o.items[$],{start:q,key:W,sep:Y,value:ee}=V,G=cr(q,{flow:p,indicator:"explicit-key-ind",next:W??(Y==null?void 0:Y[0]),offset:k,onError:u,parentIndent:o.indent,startOnNewline:!1});if(!G.found){if(!G.anchor&&!G.tag&&!Y&&!ee){$===0&&G.comma?u(G.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${p}`):$<o.items.length-1&&u(G.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${p}`),G.comment&&(m.comment?m.comment+=`
`+G.comment:m.comment=G.comment),k=G.end;continue}!d&&i.options.strict&&fi(W)&&u(W,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if($===0)G.comma&&u(G.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${p}`);else if(G.comma||u(G.start,"MISSING_CHAR",`Missing , between ${p} items`),G.comment){let U="";e:for(const le of q)switch(le.type){case"comma":case"space":break;case"comment":U=le.source.substring(1);break e;default:break e}if(U){let le=m.items[m.items.length-1];Ie(le)&&(le=le.value??le.key),le.comment?le.comment+=`
`+U:le.comment=U,G.comment=G.comment.substring(U.length+1)}}if(!d&&!Y&&!G.found){const U=ee?s(i,ee,G,u):r(i,G.end,Y,null,G,u);m.items.push(U),k=U.range[2],Jo(ee)&&u(U.range,"BLOCK_IN_FLOW",Go)}else{i.atKey=!0;const U=G.end,le=W?s(i,W,G,u):r(i,U,q,null,G,u);Jo(W)&&u(le.range,"BLOCK_IN_FLOW",Go),i.atKey=!1;const me=cr(Y??[],{flow:p,indicator:"map-value-ind",next:ee,offset:le.range[2],onError:u,parentIndent:o.indent,startOnNewline:!1});if(me.found){if(!d&&!G.found&&i.options.strict){if(Y)for(const ye of Y){if(ye===me.found)break;if(ye.type==="newline"){u(ye,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}G.start<me.found.offset-1024&&u(me.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else ee&&("source"in ee&&((O=ee.source)==null?void 0:O[0])===":"?u(ee,"MISSING_CHAR",`Missing space after : in ${p}`):u(me.start,"MISSING_CHAR",`Missing , or : between ${p} items`));const Re=ee?s(i,ee,me,u):me.found?r(i,me.end,Y,null,me,u):null;Re?Jo(ee)&&u(Re.range,"BLOCK_IN_FLOW",Go):me.comment&&(le.comment?le.comment+=`
`+me.comment:le.comment=me.comment);const Ne=new qe(le,Re);if(i.options.keepSourceTokens&&(Ne.srcToken=V),d){const ye=m;_d(i,ye.items,le)&&u(U,"DUPLICATE_KEY","Map keys must be unique"),ye.items.push(Ne)}else{const ye=new gn(i.schema);ye.flow=!0,ye.items.push(Ne);const Ye=(Re??le).range;ye.range=[le.range[0],Ye[1],Ye[2]],m.items.push(ye)}k=Re?Re.range[2]:me.end}}const E=d?"}":"]",[T,...j]=o.end;let N=k;if((T==null?void 0:T.source)===E)N=T.offset+T.source.length;else{const $=p[0].toUpperCase()+p.substring(1),V=b?`${$} must end with a ${E}`:`${$} in block collection must be sufficiently indented and end with a ${E}`;u(k,b?"MISSING_CHAR":"BAD_INDENT",V),T&&T.source.length!==1&&j.unshift(T)}if(j.length>0){const $=pi(j,N,i.options.strict,u);$.comment&&(m.comment?m.comment+=`
`+$.comment:m.comment=$.comment),m.range=[o.offset,N,$.offset]}else m.range=[o.offset,N,N];return m}function Xo(s,r,i,o,u,f){const d=i.type==="block-map"?Eg(s,r,i,o,f):i.type==="block-seq"?Cg(s,r,i,o,f):bg(s,r,i,o,f),p=d.constructor;return u==="!"||u===p.tagName?(d.tag=p.tagName,d):(u&&(d.tag=u),d)}function Tg(s,r,i,o,u){var E;const f=o.tag,d=f?r.directives.tagName(f.source,T=>u(f,"TAG_RESOLVE_FAILED",T)):null;if(i.type==="block-seq"){const{anchor:T,newlineAfterProp:j}=o,N=T&&f?T.offset>f.offset?T:f:T??f;N&&(!j||j.offset<N.offset)&&u(N,"MISSING_CHAR","Missing newline after block sequence props")}const p=i.type==="block-map"?"map":i.type==="block-seq"?"seq":i.start.source==="{"?"map":"seq";if(!f||!d||d==="!"||d===gn.tagName&&p==="map"||d===Lt.tagName&&p==="seq")return Xo(s,r,i,u,d);let g=r.schema.tags.find(T=>T.tag===d&&T.collection===p);if(!g){const T=r.schema.knownTags[d];if((T==null?void 0:T.collection)===p)r.schema.tags.push(Object.assign({},T,{default:!1})),g=T;else return T?u(f,"BAD_COLLECTION_TYPE",`${T.tag} used for ${p} collection, but expects ${T.collection??"scalar"}`,!0):u(f,"TAG_RESOLVE_FAILED",`Unresolved tag: ${d}`,!0),Xo(s,r,i,u,d)}const m=Xo(s,r,i,u,d,g),b=((E=g.resolve)==null?void 0:E.call(g,m,T=>u(f,"TAG_RESOLVE_FAILED",T),r.options))??m,k=Le(b)?b:new te(b);return k.range=m.range,k.tag=d,g!=null&&g.format&&(k.format=g.format),k}function Og(s,r,i){const o=r.offset,u=Lg(r,s.options.strict,i);if(!u)return{value:"",type:null,comment:"",range:[o,o,o]};const f=u.mode===">"?te.BLOCK_FOLDED:te.BLOCK_LITERAL,d=r.source?Ig(r.source):[];let p=d.length;for(let N=d.length-1;N>=0;--N){const O=d[N][1];if(O===""||O==="\r")p=N;else break}if(p===0){const N=u.chomp==="+"&&d.length>0?`
`.repeat(Math.max(1,d.length-1)):"";let O=o+u.length;return r.source&&(O+=r.source.length),{value:N,type:f,comment:u.comment,range:[o,O,O]}}let g=r.indent+u.indent,m=r.offset+u.length,b=0;for(let N=0;N<p;++N){const[O,$]=d[N];if($===""||$==="\r")u.indent===0&&O.length>g&&(g=O.length);else{O.length<g&&i(m+O.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),u.indent===0&&(g=O.length),b=N,g===0&&!s.atRoot&&i(m,"BAD_INDENT","Block scalar values in collections must be indented");break}m+=O.length+$.length+1}for(let N=d.length-1;N>=p;--N)d[N][0].length>g&&(p=N+1);let k="",E="",T=!1;for(let N=0;N<b;++N)k+=d[N][0].slice(g)+`
`;for(let N=b;N<p;++N){let[O,$]=d[N];m+=O.length+$.length+1;const V=$[$.length-1]==="\r";if(V&&($=$.slice(0,-1)),$&&O.length<g){const W=`Block scalar lines must not be less indented than their ${u.indent?"explicit indentation indicator":"first line"}`;i(m-$.length-(V?2:1),"BAD_INDENT",W),O=""}f===te.BLOCK_LITERAL?(k+=E+O.slice(g)+$,E=`
`):O.length>g||$[0]==="	"?(E===" "?E=`
`:!T&&E===`
`&&(E=`

`),k+=E+O.slice(g)+$,E=`
`,T=!0):$===""?E===`
`?k+=`
`:E=`
`:(k+=E+$,E=" ",T=!1)}switch(u.chomp){case"-":break;case"+":for(let N=p;N<d.length;++N)k+=`
`+d[N][0].slice(g);k[k.length-1]!==`
`&&(k+=`
`);break;default:k+=`
`}const j=o+u.length+r.source.length;return{value:k,type:f,comment:u.comment,range:[o,j,j]}}function Lg({offset:s,props:r},i,o){if(r[0].type!=="block-scalar-header")return o(r[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:u}=r[0],f=u[0];let d=0,p="",g=-1;for(let E=1;E<u.length;++E){const T=u[E];if(!p&&(T==="-"||T==="+"))p=T;else{const j=Number(T);!d&&j?d=j:g===-1&&(g=s+E)}}g!==-1&&o(g,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${u}`);let m=!1,b="",k=u.length;for(let E=1;E<r.length;++E){const T=r[E];switch(T.type){case"space":m=!0;case"newline":k+=T.source.length;break;case"comment":i&&!m&&o(T,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),k+=T.source.length,b=T.source.substring(1);break;case"error":o(T,"UNEXPECTED_TOKEN",T.message),k+=T.source.length;break;default:{const j=`Unexpected token in block scalar header: ${T.type}`;o(T,"UNEXPECTED_TOKEN",j);const N=T.source;N&&typeof N=="string"&&(k+=N.length)}}}return{mode:f,indent:d,chomp:p,comment:b,length:k}}function Ig(s){const r=s.split(/\n( *)/),i=r[0],o=i.match(/^( *)/),f=[o!=null&&o[1]?[o[1],i.slice(o[1].length)]:["",i]];for(let d=1;d<r.length;d+=2)f.push([r[d],r[d+1]]);return f}function Pg(s,r,i){const{offset:o,type:u,source:f,end:d}=s;let p,g;const m=(E,T,j)=>i(o+E,T,j);switch(u){case"scalar":p=te.PLAIN,g=zg(f,m);break;case"single-quoted-scalar":p=te.QUOTE_SINGLE,g=Ag(f,m);break;case"double-quoted-scalar":p=te.QUOTE_DOUBLE,g=jg(f,m);break;default:return i(s,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${u}`),{value:"",type:null,comment:"",range:[o,o+f.length,o+f.length]}}const b=o+f.length,k=pi(d,b,r,i);return{value:g,type:p,comment:k.comment,range:[o,b,k.offset]}}function zg(s,r){let i="";switch(s[0]){case"	":i="a tab character";break;case",":i="flow indicator character ,";break;case"%":i="directive indicator character %";break;case"|":case">":{i=`block scalar indicator ${s[0]}`;break}case"@":case"`":{i=`reserved character ${s[0]}`;break}}return i&&r(0,"BAD_SCALAR_START",`Plain value cannot start with ${i}`),vd(s)}function Ag(s,r){return(s[s.length-1]!=="'"||s.length===1)&&r(s.length,"MISSING_CHAR","Missing closing 'quote"),vd(s.slice(1,-1)).replace(/''/g,"'")}function vd(s){const r=/(.*?)\r?\n/sy;let i=r.exec(s);if(!i)return s;let o,u;try{o=new RegExp("(?<![ 	])[ 	]+$"),u=new RegExp("^[ 	]+|(?<![ 	])[ 	]+$","g")}catch{o=/[ \t]+$/,u=/^[ \t]+|[ \t]+$/g}let f=i[1].replace(o,""),d=" ",p=r.lastIndex;for(;i=r.exec(s);){const m=i[1].replace(u,"");m===""?d===`
`?f+=d:d=`
`:(f+=d+m,d=" "),p=r.lastIndex}const g=/[ \t]*(.*)/sy;return g.lastIndex=p,i=g.exec(s),f+d+((i==null?void 0:i[1])??"")}function jg(s,r){let i="";for(let o=1;o<s.length-1;++o){const u=s[o];if(!(u==="\r"&&s[o+1]===`
`))if(u===`
`){const{fold:f,offset:d}=$g(s,o);i+=f,o=d}else if(u==="\\"){let f=s[++o];const d=Mg[f];if(d)i+=d;else if(f===`
`)for(f=s[o+1];f===" "||f==="	";)f=s[++o+1];else if(f==="\r"&&s[o+1]===`
`)for(f=s[++o+1];f===" "||f==="	";)f=s[++o+1];else if(f==="x"||f==="u"||f==="U"){const p=f==="x"?2:f==="u"?4:8;i+=Rg(s,o+1,p,r),o+=p}else{const p=s.substr(o-1,2);r(o-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${p}`),i+=p}}else if(u===" "||u==="	"){const f=o;let d=s[o+1];for(;d===" "||d==="	";)d=s[++o+1];d!==`
`&&!(d==="\r"&&s[o+2]===`
`)&&(i+=o>f?s.slice(f,o+1):u)}else i+=u}return(s[s.length-1]!=='"'||s.length===1)&&r(s.length,"MISSING_CHAR",'Missing closing "quote'),i}function $g(s,r){let i="",o=s[r+1];for(;(o===" "||o==="	"||o===`
`||o==="\r")&&!(o==="\r"&&s[r+2]!==`
`);)o===`
`&&(i+=`
`),r+=1,o=s[r+1];return i||(i=" "),{fold:i,offset:r}}const Mg={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Rg(s,r,i,o){const u=s.substr(r,i),d=u.length===i&&/^[0-9a-fA-F]+$/.test(u)?parseInt(u,16):NaN;try{return String.fromCodePoint(d)}catch{const p=s.substr(r-2,i+2);return o(r-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${p}`),p}}function kd(s,r,i,o){const{value:u,type:f,comment:d,range:p}=r.type==="block-scalar"?Og(s,r,o):Pg(r,s.options.strict,o),g=i?s.directives.tagName(i.source,k=>o(i,"TAG_RESOLVE_FAILED",k)):null;let m;s.options.stringKeys&&s.atKey?m=s.schema[jn]:g?m=Dg(s.schema,u,g,i,o):r.type==="scalar"?m=Bg(s,u,r,o):m=s.schema[jn];let b;try{const k=m.resolve(u,E=>o(i??r,"TAG_RESOLVE_FAILED",E),s.options);b=ge(k)?k:new te(k)}catch(k){const E=k instanceof Error?k.message:String(k);o(i??r,"TAG_RESOLVE_FAILED",E),b=new te(u)}return b.range=p,b.source=u,f&&(b.type=f),g&&(b.tag=g),m.format&&(b.format=m.format),d&&(b.comment=d),b}function Dg(s,r,i,o,u){var p;if(i==="!")return s[jn];const f=[];for(const g of s.tags)if(!g.collection&&g.tag===i)if(g.default&&g.test)f.push(g);else return g;for(const g of f)if((p=g.test)!=null&&p.test(r))return g;const d=s.knownTags[i];return d&&!d.collection?(s.tags.push(Object.assign({},d,{default:!1,test:void 0})),d):(u(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${i}`,i!=="tag:yaml.org,2002:str"),s[jn])}function Bg({atKey:s,directives:r,schema:i},o,u,f){const d=i.tags.find(p=>{var g;return(p.default===!0||s&&p.default==="key")&&((g=p.test)==null?void 0:g.test(o))})||i[jn];if(i.compat){const p=i.compat.find(g=>{var m;return g.default&&((m=g.test)==null?void 0:m.test(o))})??i[jn];if(d.tag!==p.tag){const g=r.tagString(d.tag),m=r.tagString(p.tag),b=`Value may be parsed as either ${g} or ${m}`;f(u,"TAG_RESOLVE_FAILED",b,!0)}}return d}function Fg(s,r,i){if(r){i??(i=r.length);for(let o=i-1;o>=0;--o){let u=r[o];switch(u.type){case"space":case"comment":case"newline":s-=u.source.length;continue}for(u=r[++o];(u==null?void 0:u.type)==="space";)s+=u.source.length,u=r[++o];break}}return s}const Ug={composeNode:xd,composeEmptyNode:Sa};function xd(s,r,i,o){const u=s.atKey,{spaceBefore:f,comment:d,anchor:p,tag:g}=i;let m,b=!0;switch(r.type){case"alias":m=Kg(s,r,o),(p||g)&&o(r,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":m=kd(s,r,g,o),p&&(m.anchor=p.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{m=Tg(Ug,s,r,i,o),p&&(m.anchor=p.source.substring(1))}catch(k){const E=k instanceof Error?k.message:String(k);o(r,"RESOURCE_EXHAUSTION",E)}break;default:{const k=r.type==="error"?r.message:`Unsupported token (type: ${r.type})`;o(r,"UNEXPECTED_TOKEN",k),b=!1}}return m??(m=Sa(s,r.offset,void 0,null,i,o)),p&&m.anchor===""&&o(p,"BAD_ALIAS","Anchor cannot be an empty string"),u&&s.options.stringKeys&&(!ge(m)||typeof m.value!="string"||m.tag&&m.tag!=="tag:yaml.org,2002:str")&&o(g??r,"NON_STRING_KEY","With stringKeys, all keys must be strings"),f&&(m.spaceBefore=!0),d&&(r.type==="scalar"&&r.source===""?m.comment=d:m.commentBefore=d),s.options.keepSourceTokens&&b&&(m.srcToken=r),m}function Sa(s,r,i,o,{spaceBefore:u,comment:f,anchor:d,tag:p,end:g},m){const b={type:"scalar",offset:Fg(r,i,o),indent:-1,source:""},k=kd(s,b,p,m);return d&&(k.anchor=d.source.substring(1),k.anchor===""&&m(d,"BAD_ALIAS","Anchor cannot be an empty string")),u&&(k.spaceBefore=!0),f&&(k.comment=f,k.range[2]=g),k}function Kg({options:s},{offset:r,source:i,end:o},u){const f=new ca(i.substring(1));f.source===""&&u(r,"BAD_ALIAS","Alias cannot be an empty string"),f.source.endsWith(":")&&u(r+i.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const d=r+i.length,p=pi(o,d,s.strict,u);return f.range=[r,d,p.offset],p.comment&&(f.comment=p.comment),f}function Vg(s,r,{offset:i,start:o,value:u,end:f},d){const p=Object.assign({_directives:r},s),g=new Qs(void 0,p),m={atKey:!1,atRoot:!0,directives:g.directives,options:g.options,schema:g.schema},b=cr(o,{indicator:"doc-start",next:u??(f==null?void 0:f[0]),offset:i,onError:d,parentIndent:0,startOnNewline:!0});b.found&&(g.directives.docStart=!0,u&&(u.type==="block-map"||u.type==="block-seq")&&!b.hasNewline&&d(b.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),g.contents=u?xd(m,u,b,d):Sa(m,b.end,o,null,b,d);const k=g.contents.range[2],E=pi(f,k,!1,d);return E.comment&&(g.comment=E.comment),g.range=[i,k,E.offset],g}function ri(s){if(typeof s=="number")return[s,s+1];if(Array.isArray(s))return s.length===2?s:[s[0],s[1]];const{offset:r,source:i}=s;return[r,r+(typeof i=="string"?i.length:1)]}function Mc(s){var u;let r="",i=!1,o=!1;for(let f=0;f<s.length;++f){const d=s[f];switch(d[0]){case"#":r+=(r===""?"":o?`

`:`
`)+(d.substring(1)||" "),i=!0,o=!1;break;case"%":((u=s[f+1])==null?void 0:u[0])!=="#"&&(f+=1),i=!1;break;default:i||(o=!0),i=!1}}return{comment:r,afterEmptyLine:o}}class Wg{constructor(r={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(i,o,u,f)=>{const d=ri(i);f?this.warnings.push(new Ng(d,o,u)):this.errors.push(new li(d,o,u))},this.directives=new Qe({version:r.version||"1.2"}),this.options=r}decorate(r,i){const{comment:o,afterEmptyLine:u}=Mc(this.prelude);if(o){const f=r.contents;if(i)r.comment=r.comment?`${r.comment}
${o}`:o;else if(u||r.directives.docStart||!f)r.commentBefore=o;else if(Oe(f)&&!f.flow&&f.items.length>0){let d=f.items[0];Ie(d)&&(d=d.key);const p=d.commentBefore;d.commentBefore=p?`${o}
${p}`:o}else{const d=f.commentBefore;f.commentBefore=d?`${o}
${d}`:o}}if(i){for(let f=0;f<this.errors.length;++f)r.errors.push(this.errors[f]);for(let f=0;f<this.warnings.length;++f)r.warnings.push(this.warnings[f])}else r.errors=this.errors,r.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Mc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(r,i=!1,o=-1){for(const u of r)yield*this.next(u);yield*this.end(i,o)}*next(r){switch(r.type){case"directive":this.directives.add(r.source,(i,o,u)=>{const f=ri(r);f[0]+=i,this.onError(f,"BAD_DIRECTIVE",o,u)}),this.prelude.push(r.source),this.atDirectives=!0;break;case"document":{const i=Vg(this.options,this.directives,r,this.onError);this.atDirectives&&!i.directives.docStart&&this.onError(r,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(i,!1),this.doc&&(yield this.doc),this.doc=i,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(r.source);break;case"error":{const i=r.source?`${r.message}: ${JSON.stringify(r.source)}`:r.message,o=new li(ri(r),"UNEXPECTED_TOKEN",i);this.atDirectives||!this.doc?this.errors.push(o):this.doc.errors.push(o);break}case"doc-end":{if(!this.doc){const o="Unexpected doc-end without preceding document";this.errors.push(new li(ri(r),"UNEXPECTED_TOKEN",o));break}this.doc.directives.docEnd=!0;const i=pi(r.end,r.offset+r.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),i.comment){const o=this.doc.comment;this.doc.comment=o?`${o}
${i.comment}`:i.comment}this.doc.range[2]=i.offset;break}default:this.errors.push(new li(ri(r),"UNEXPECTED_TOKEN",`Unsupported token ${r.type}`))}}*end(r=!1,i=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(r){const o=Object.assign({_directives:this.directives},this.options),u=new Qs(void 0,o);this.atDirectives&&this.onError(i,"MISSING_CHAR","Missing directives-end indicator line"),u.range=[0,i,i],this.decorate(u,!1),yield u}}}const Sd="\uFEFF",Nd="",Ed="",la="";function Hg(s){switch(s){case Sd:return"byte-order-mark";case Nd:return"doc-mode";case Ed:return"flow-error-end";case la:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(s[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function En(s){switch(s){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Rc=new Set("0123456789ABCDEFabcdef"),Qg=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Os=new Set(",[]{}"),qg=new Set(` ,[]{}
\r	`),Zo=s=>!s||qg.has(s);class Yg{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(r,i=!1){if(r){if(typeof r!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+r:r,this.lineEndPos=null}this.atEnd=!i;let o=this.next??"stream";for(;o&&(i||this.hasChars(1));)o=yield*this.parseNext(o)}atLineEnd(){let r=this.pos,i=this.buffer[r];for(;i===" "||i==="	";)i=this.buffer[++r];return!i||i==="#"||i===`
`?!0:i==="\r"?this.buffer[r+1]===`
`:!1}charAt(r){return this.buffer[this.pos+r]}continueScalar(r){let i=this.buffer[r];if(this.indentNext>0){let o=0;for(;i===" ";)i=this.buffer[++o+r];if(i==="\r"){const u=this.buffer[o+r+1];if(u===`
`||!u&&!this.atEnd)return r+o+1}return i===`
`||o>=this.indentNext||!i&&!this.atEnd?r+o:-1}if(i==="-"||i==="."){const o=this.buffer.substr(r,3);if((o==="---"||o==="...")&&En(this.buffer[r+3]))return-1}return r}getLine(){let r=this.lineEndPos;return(typeof r!="number"||r!==-1&&r<this.pos)&&(r=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=r),r===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[r-1]==="\r"&&(r-=1),this.buffer.substring(this.pos,r))}hasChars(r){return this.pos+r<=this.buffer.length}setNext(r){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=r,null}peek(r){return this.buffer.substr(this.pos,r)}*parseNext(r){switch(r){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let r=this.getLine();if(r===null)return this.setNext("stream");if(r[0]===Sd&&(yield*this.pushCount(1),r=r.substring(1)),r[0]==="%"){let i=r.length,o=r.indexOf("#");for(;o!==-1;){const f=r[o-1];if(f===" "||f==="	"){i=o-1;break}else o=r.indexOf("#",o+1)}for(;;){const f=r[i-1];if(f===" "||f==="	")i-=1;else break}const u=(yield*this.pushCount(i))+(yield*this.pushSpaces(!0));return yield*this.pushCount(r.length-u),this.pushNewline(),"stream"}if(this.atLineEnd()){const i=yield*this.pushSpaces(!0);return yield*this.pushCount(r.length-i),yield*this.pushNewline(),"stream"}return yield Nd,yield*this.parseLineStart()}*parseLineStart(){const r=this.charAt(0);if(!r&&!this.atEnd)return this.setNext("line-start");if(r==="-"||r==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const i=this.peek(3);if((i==="---"||i==="...")&&En(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,i==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!En(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[r,i]=this.peek(2);if(!i&&!this.atEnd)return this.setNext("block-start");if((r==="-"||r==="?"||r===":")&&En(i)){const o=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=o,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const r=this.getLine();if(r===null)return this.setNext("doc");let i=yield*this.pushIndicators();switch(r[i]){case"#":yield*this.pushCount(r.length-i);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Zo),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return i+=yield*this.parseBlockScalarHeader(),i+=yield*this.pushSpaces(!0),yield*this.pushCount(r.length-i),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let r,i,o=-1;do r=yield*this.pushNewline(),r>0?(i=yield*this.pushSpaces(!1),this.indentValue=o=i):i=0,i+=yield*this.pushSpaces(!0);while(r+i>0);const u=this.getLine();if(u===null)return this.setNext("flow");if((o!==-1&&o<this.indentNext&&u[0]!=="#"||o===0&&(u.startsWith("---")||u.startsWith("..."))&&En(u[3]))&&!(o===this.indentNext-1&&this.flowLevel===1&&(u[0]==="]"||u[0]==="}")))return this.flowLevel=0,yield Ed,yield*this.parseLineStart();let f=0;for(;u[f]===",";)f+=yield*this.pushCount(1),f+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(f+=yield*this.pushIndicators(),u[f]){case void 0:return"flow";case"#":return yield*this.pushCount(u.length-f),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Zo),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const d=this.charAt(1);if(this.flowKey||En(d)||d===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const r=this.charAt(0);let i=this.buffer.indexOf(r,this.pos+1);if(r==="'")for(;i!==-1&&this.buffer[i+1]==="'";)i=this.buffer.indexOf("'",i+2);else for(;i!==-1;){let f=0;for(;this.buffer[i-1-f]==="\\";)f+=1;if(f%2===0)break;i=this.buffer.indexOf('"',i+1)}const o=this.buffer.substring(0,i);let u=o.indexOf(`
`,this.pos);if(u!==-1){for(;u!==-1;){const f=this.continueScalar(u+1);if(f===-1)break;u=o.indexOf(`
`,f)}u!==-1&&(i=u-(o[u-1]==="\r"?2:1))}if(i===-1){if(!this.atEnd)return this.setNext("quoted-scalar");i=this.buffer.length}return yield*this.pushToIndex(i+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let r=this.pos;for(;;){const i=this.buffer[++r];if(i==="+")this.blockScalarKeep=!0;else if(i>"0"&&i<="9")this.blockScalarIndent=Number(i)-1;else if(i!=="-")break}return yield*this.pushUntil(i=>En(i)||i==="#")}*parseBlockScalar(){let r=this.pos-1,i=0,o;e:for(let f=this.pos;o=this.buffer[f];++f)switch(o){case" ":i+=1;break;case`
`:r=f,i=0;break;case"\r":{const d=this.buffer[f+1];if(!d&&!this.atEnd)return this.setNext("block-scalar");if(d===`
`)break}default:break e}if(!o&&!this.atEnd)return this.setNext("block-scalar");if(i>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=i:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const f=this.continueScalar(r+1);if(f===-1)break;r=this.buffer.indexOf(`
`,f)}while(r!==-1);if(r===-1){if(!this.atEnd)return this.setNext("block-scalar");r=this.buffer.length}}let u=r+1;for(o=this.buffer[u];o===" ";)o=this.buffer[++u];if(o==="	"){for(;o==="	"||o===" "||o==="\r"||o===`
`;)o=this.buffer[++u];r=u-1}else if(!this.blockScalarKeep)do{let f=r-1,d=this.buffer[f];d==="\r"&&(d=this.buffer[--f]);const p=f;for(;d===" ";)d=this.buffer[--f];if(d===`
`&&f>=this.pos&&f+1+i>p)r=f;else break}while(!0);return yield la,yield*this.pushToIndex(r+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const r=this.flowLevel>0;let i=this.pos-1,o=this.pos-1,u;for(;u=this.buffer[++o];)if(u===":"){const f=this.buffer[o+1];if(En(f)||r&&Os.has(f))break;i=o}else if(En(u)){let f=this.buffer[o+1];if(u==="\r"&&(f===`
`?(o+=1,u=`
`,f=this.buffer[o+1]):i=o),f==="#"||r&&Os.has(f))break;if(u===`
`){const d=this.continueScalar(o+1);if(d===-1)break;o=Math.max(o,d-2)}}else{if(r&&Os.has(u))break;i=o}return!u&&!this.atEnd?this.setNext("plain-scalar"):(yield la,yield*this.pushToIndex(i+1,!0),r?"flow":"doc")}*pushCount(r){return r>0?(yield this.buffer.substr(this.pos,r),this.pos+=r,r):0}*pushToIndex(r,i){const o=this.buffer.slice(this.pos,r);return o?(yield o,this.pos+=o.length,o.length):(i&&(yield""),0)}*pushIndicators(){let r=0;e:for(;;){switch(this.charAt(0)){case"!":r+=yield*this.pushTag(),r+=yield*this.pushSpaces(!0);continue e;case"&":r+=yield*this.pushUntil(Zo),r+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const i=this.flowLevel>0,o=this.charAt(1);if(En(o)||i&&Os.has(o)){i?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0);continue e}}}break e}return r}*pushTag(){if(this.charAt(1)==="<"){let r=this.pos+2,i=this.buffer[r];for(;!En(i)&&i!==">";)i=this.buffer[++r];return yield*this.pushToIndex(i===">"?r+1:r,!1)}else{let r=this.pos+1,i=this.buffer[r];for(;i;)if(Qg.has(i))i=this.buffer[++r];else if(i==="%"&&Rc.has(this.buffer[r+1])&&Rc.has(this.buffer[r+2]))i=this.buffer[r+=3];else break;return yield*this.pushToIndex(r,!1)}}*pushNewline(){const r=this.buffer[this.pos];return r===`
`?yield*this.pushCount(1):r==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(r){let i=this.pos-1,o;do o=this.buffer[++i];while(o===" "||r&&o==="	");const u=i-this.pos;return u>0&&(yield this.buffer.substr(this.pos,u),this.pos=i),u}*pushUntil(r){let i=this.pos,o=this.buffer[i];for(;!r(o);)o=this.buffer[++i];return yield*this.pushToIndex(i,!1)}}class Gg{constructor(){this.lineStarts=[],this.addNewLine=r=>this.lineStarts.push(r),this.linePos=r=>{let i=0,o=this.lineStarts.length;for(;i<o;){const f=i+o>>1;this.lineStarts[f]<r?i=f+1:o=f}if(this.lineStarts[i]===r)return{line:i+1,col:1};if(i===0)return{line:0,col:r};const u=this.lineStarts[i-1];return{line:i,col:r-u+1}}}}function ct(s,r){for(let i=0;i<s.length;++i)if(s[i].type===r)return!0;return!1}function Dc(s){for(let r=0;r<s.length;++r)switch(s[r].type){case"space":case"comment":case"newline":break;default:return r}return-1}function Cd(s){switch(s==null?void 0:s.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Ls(s){switch(s.type){case"document":return s.start;case"block-map":{const r=s.items[s.items.length-1];return r.sep??r.start}case"block-seq":return s.items[s.items.length-1].start;default:return[]}}function rr(s){var i;if(s.length===0)return[];let r=s.length;e:for(;--r>=0;)switch(s[r].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((i=s[++r])==null?void 0:i.type)==="space";);return s.splice(r,s.length)}function $s(s,r){if(r.length<1e5)Array.prototype.push.apply(s,r);else for(let i=0;i<r.length;++i)s.push(r[i])}function Bc(s){if(s.start.type==="flow-seq-start")for(const r of s.items)r.sep&&!r.value&&!ct(r.start,"explicit-key-ind")&&!ct(r.sep,"map-value-ind")&&(r.key&&(r.value=r.key),delete r.key,Cd(r.value)?r.value.end?$s(r.value.end,r.sep):r.value.end=r.sep:$s(r.start,r.sep),delete r.sep)}class Jg{constructor(r){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Yg,this.onNewLine=r}*parse(r,i=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const o of this.lexer.lex(r,i))yield*this.next(o);i||(yield*this.end())}*next(r){if(this.source=r,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=r.length;return}const i=Hg(r);if(i)if(i==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=i,yield*this.step(),i){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+r.length);break;case"space":this.atNewLine&&r[0]===" "&&(this.indent+=r.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=r.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=r.length}else{const o=`Not a YAML token: ${r}`;yield*this.pop({type:"error",offset:this.offset,message:o,source:r}),this.offset+=r.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const r=this.peek(1);if(this.type==="doc-end"&&(r==null?void 0:r.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!r)return yield*this.stream();switch(r.type){case"document":return yield*this.document(r);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(r);case"block-scalar":return yield*this.blockScalar(r);case"block-map":return yield*this.blockMap(r);case"block-seq":return yield*this.blockSequence(r);case"flow-collection":return yield*this.flowCollection(r);case"doc-end":return yield*this.documentEnd(r)}yield*this.pop()}peek(r){return this.stack[this.stack.length-r]}*pop(r){const i=r??this.stack.pop();if(!i)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield i;else{const o=this.peek(1);switch(i.type==="block-scalar"?i.indent="indent"in o?o.indent:0:i.type==="flow-collection"&&o.type==="document"&&(i.indent=0),i.type==="flow-collection"&&Bc(i),o.type){case"document":o.value=i;break;case"block-scalar":o.props.push(i);break;case"block-map":{const u=o.items[o.items.length-1];if(u.value){o.items.push({start:[],key:i,sep:[]}),this.onKeyLine=!0;return}else if(u.sep)u.value=i;else{Object.assign(u,{key:i,sep:[]}),this.onKeyLine=!u.explicitKey;return}break}case"block-seq":{const u=o.items[o.items.length-1];u.value?o.items.push({start:[],value:i}):u.value=i;break}case"flow-collection":{const u=o.items[o.items.length-1];!u||u.value?o.items.push({start:[],key:i,sep:[]}):u.sep?u.value=i:Object.assign(u,{key:i,sep:[]});return}default:yield*this.pop(),yield*this.pop(i)}if((o.type==="document"||o.type==="block-map"||o.type==="block-seq")&&(i.type==="block-map"||i.type==="block-seq")){const u=i.items[i.items.length-1];u&&!u.sep&&!u.value&&u.start.length>0&&Dc(u.start)===-1&&(i.indent===0||u.start.every(f=>f.type!=="comment"||f.indent<i.indent))&&(o.type==="document"?o.end=u.start:o.items.push({start:u.start}),i.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const r={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&r.start.push(this.sourceToken),this.stack.push(r);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(r){if(r.value)return yield*this.lineEnd(r);switch(this.type){case"doc-start":{Dc(r.start)!==-1?(yield*this.pop(),yield*this.step()):r.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":r.start.push(this.sourceToken);return}const i=this.startBlockValue(r);i?this.stack.push(i):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(r){if(this.type==="map-value-ind"){const i=Ls(this.peek(2)),o=rr(i);let u;r.end?(u=r.end,u.push(this.sourceToken),delete r.end):u=[this.sourceToken];const f={type:"block-map",offset:r.offset,indent:r.indent,items:[{start:o,key:r,sep:u}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=f}else yield*this.lineEnd(r)}*blockScalar(r){switch(this.type){case"space":case"comment":case"newline":r.props.push(this.sourceToken);return;case"scalar":if(r.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let i=this.source.indexOf(`
`)+1;for(;i!==0;)this.onNewLine(this.offset+i),i=this.source.indexOf(`
`,i)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(r){var o;const i=r.items[r.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,i.value){const u="end"in i.value?i.value.end:void 0,f=Array.isArray(u)?u[u.length-1]:void 0;(f==null?void 0:f.type)==="comment"?u==null||u.push(this.sourceToken):r.items.push({start:[this.sourceToken]})}else i.sep?i.sep.push(this.sourceToken):i.start.push(this.sourceToken);return;case"space":case"comment":if(i.value)r.items.push({start:[this.sourceToken]});else if(i.sep)i.sep.push(this.sourceToken);else{if(this.atIndentedComment(i.start,r.indent)){const u=r.items[r.items.length-2],f=(o=u==null?void 0:u.value)==null?void 0:o.end;if(Array.isArray(f)){$s(f,i.start),f.push(this.sourceToken),r.items.pop();return}}i.start.push(this.sourceToken)}return}if(this.indent>=r.indent){const u=!this.onKeyLine&&this.indent===r.indent,f=u&&(i.sep||i.explicitKey)&&this.type!=="seq-item-ind";let d=[];if(f&&i.sep&&!i.value){const p=[];for(let g=0;g<i.sep.length;++g){const m=i.sep[g];switch(m.type){case"newline":p.push(g);break;case"space":break;case"comment":m.indent>r.indent&&(p.length=0);break;default:p.length=0}}p.length>=2&&(d=i.sep.splice(p[1]))}switch(this.type){case"anchor":case"tag":f||i.value?(d.push(this.sourceToken),r.items.push({start:d}),this.onKeyLine=!0):i.sep?i.sep.push(this.sourceToken):i.start.push(this.sourceToken);return;case"explicit-key-ind":!i.sep&&!i.explicitKey?(i.start.push(this.sourceToken),i.explicitKey=!0):f||i.value?(d.push(this.sourceToken),r.items.push({start:d,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(i.explicitKey)if(i.sep)if(i.value)r.items.push({start:[],key:null,sep:[this.sourceToken]});else if(ct(i.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:d,key:null,sep:[this.sourceToken]}]});else if(Cd(i.key)&&!ct(i.sep,"newline")){const p=rr(i.start),g=i.key,m=i.sep;m.push(this.sourceToken),delete i.key,delete i.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:p,key:g,sep:m}]})}else d.length>0?i.sep=i.sep.concat(d,this.sourceToken):i.sep.push(this.sourceToken);else if(ct(i.start,"newline"))Object.assign(i,{key:null,sep:[this.sourceToken]});else{const p=rr(i.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:p,key:null,sep:[this.sourceToken]}]})}else i.sep?i.value||f?r.items.push({start:d,key:null,sep:[this.sourceToken]}):ct(i.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):i.sep.push(this.sourceToken):Object.assign(i,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const p=this.flowScalar(this.type);f||i.value?(r.items.push({start:d,key:p,sep:[]}),this.onKeyLine=!0):i.sep?this.stack.push(p):(Object.assign(i,{key:p,sep:[]}),this.onKeyLine=!0);return}default:{const p=this.startBlockValue(r);if(p){if(p.type==="block-seq"){if(!i.explicitKey&&i.sep&&!ct(i.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else u&&r.items.push({start:d});this.stack.push(p);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(r){var o;const i=r.items[r.items.length-1];switch(this.type){case"newline":if(i.value){const u="end"in i.value?i.value.end:void 0,f=Array.isArray(u)?u[u.length-1]:void 0;(f==null?void 0:f.type)==="comment"?u==null||u.push(this.sourceToken):r.items.push({start:[this.sourceToken]})}else i.start.push(this.sourceToken);return;case"space":case"comment":if(i.value)r.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(i.start,r.indent)){const u=r.items[r.items.length-2],f=(o=u==null?void 0:u.value)==null?void 0:o.end;if(Array.isArray(f)){$s(f,i.start),f.push(this.sourceToken),r.items.pop();return}}i.start.push(this.sourceToken)}return;case"anchor":case"tag":if(i.value||this.indent<=r.indent)break;i.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==r.indent)break;i.value||ct(i.start,"seq-item-ind")?r.items.push({start:[this.sourceToken]}):i.start.push(this.sourceToken);return}if(this.indent>r.indent){const u=this.startBlockValue(r);if(u){this.stack.push(u);return}}yield*this.pop(),yield*this.step()}*flowCollection(r){const i=r.items[r.items.length-1];if(this.type==="flow-error-end"){let o;do yield*this.pop(),o=this.peek(1);while((o==null?void 0:o.type)==="flow-collection")}else if(r.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!i||i.sep?r.items.push({start:[this.sourceToken]}):i.start.push(this.sourceToken);return;case"map-value-ind":!i||i.value?r.items.push({start:[],key:null,sep:[this.sourceToken]}):i.sep?i.sep.push(this.sourceToken):Object.assign(i,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!i||i.value?r.items.push({start:[this.sourceToken]}):i.sep?i.sep.push(this.sourceToken):i.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const u=this.flowScalar(this.type);!i||i.value?r.items.push({start:[],key:u,sep:[]}):i.sep?this.stack.push(u):Object.assign(i,{key:u,sep:[]});return}case"flow-map-end":case"flow-seq-end":r.end.push(this.sourceToken);return}const o=this.startBlockValue(r);o?this.stack.push(o):(yield*this.pop(),yield*this.step())}else{const o=this.peek(2);if(o.type==="block-map"&&(this.type==="map-value-ind"&&o.indent===r.indent||this.type==="newline"&&!o.items[o.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&o.type!=="flow-collection"){const u=Ls(o),f=rr(u);Bc(r);const d=r.end.splice(1,r.end.length);d.push(this.sourceToken);const p={type:"block-map",offset:r.offset,indent:r.indent,items:[{start:f,key:r,sep:d}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=p}else yield*this.lineEnd(r)}}flowScalar(r){if(this.onNewLine){let i=this.source.indexOf(`
`)+1;for(;i!==0;)this.onNewLine(this.offset+i),i=this.source.indexOf(`
`,i)+1}return{type:r,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(r){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const i=Ls(r),o=rr(i);return o.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const i=Ls(r),o=rr(i);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(r,i){return this.type!=="comment"||this.indent<=i?!1:r.every(o=>o.type==="newline"||o.type==="space")}*documentEnd(r){this.type!=="doc-mode"&&(r.end?r.end.push(this.sourceToken):r.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(r){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:r.end?r.end.push(this.sourceToken):r.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Xg(s){const r=s.prettyErrors!==!1;return{lineCounter:s.lineCounter||r&&new Gg||null,prettyErrors:r}}function Zg(s,r={}){const{lineCounter:i,prettyErrors:o}=Xg(r),u=new Jg(i==null?void 0:i.addNewLine),f=new Wg(r);let d=null;for(const p of f.compose(u.parse(s),!0,s.length))if(!d)d=p;else if(d.options.logLevel!=="silent"){d.errors.push(new li(p.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return o&&i&&(d.errors.forEach(jc(s,i)),d.warnings.forEach(jc(s,i))),d}function Fc(s,r,i){let o;const u=Zg(s,i);if(!u)return null;if(u.warnings.forEach(f=>Xc(u.options.logLevel,f)),u.errors.length>0){if(u.options.logLevel!=="silent")throw u.errors[0];u.errors=[]}return u.toJS(Object.assign({reviver:o},i))}function em(s,r){const i={},o=[];for(const f of s){const d=Fc(f.text);if(!Array.isArray(d))throw new Error(`${f.name}: верхний уровень не список`);for(const p of d){if(!(p!=null&&p.id))throw new Error(`${f.name}: карточка без id`);if(i[p.id])throw new Error(`${f.name}: дубликат id ${p.id}`);i[p.id]=p,o.push(p.id)}}const u=Fc(r).sort((f,d)=>f.order-d.order);return{cards:i,order:o,endings:u,start:"a01"}}const or=em([{name:"01-autumn.yaml",text:Bp},{name:"02-winter.yaml",text:Fp},{name:"03-spring.yaml",text:Up},{name:"04-final.yaml",text:Kp}],Vp),Cn=(s,r,i)=>Math.max(r,Math.min(i,s)),ea=["boyar","wife","servant"],nm=["kazak","kazachka","voivode","podyachiy","boy","hunter","priest"];function bd(s){const r={current:s.start,steps:0,house:{fuel_days:4,food_days:3,t_out:-5,t_in:8,izba:2},health:{boyar:70,wife:65,servant:50},hope:{boyar:55,wife:50,servant:45},satiety:{boyar:2,wife:2,servant:2},personal:{chin:60,opora:0,dowry:6,household:25,word:55,idle_days:0},skill:{hands:10,trade:0,household:25},approval:{kazak:0,kazachka:0,voivode:0,podyachiy:0,boy:0,hunter:0,priest:0},flags:{},budget:{},log:[]};return Na(r,s,s.start)}function Ct(s,r,i){if(s===void 0||i===void 0)return!1;switch(r){case"lt":return s<i;case"lte":return s<=i;case"gt":return s>i;case"gte":return s>=i;default:return!1}}function An(s,r){return s?s.all?s.all.every(i=>An(i,r)):s.any?s.any.some(i=>An(i,r)):s.not?!An(s.not,r):s.flag?!!r.flags[s.flag]:s.house?Ct(r.house[s.house.key],s.house.op,s.house.value):s.health?Ct(r.health[s.health.hero],s.health.op,s.health.value):s.hope?Ct(r.hope[s.hope.hero],s.hope.op,s.hope.value):s.satiety?Ct(r.satiety[s.satiety.hero],s.satiety.op,s.satiety.value):s.personal?Ct(r.personal[s.personal.key],s.personal.op,s.personal.value):s.skill?Ct(r.skill[s.skill.key],s.skill.op,s.skill.value):s.approval&&s.approval.value!==void 0?Ct(r.approval[s.approval.npc],s.approval.op,s.approval.value):!0:!0}const tm={"house.fuel_days":"дрова","house.food_days":"еда","personal.chin":"чин","personal.opora":"уверенность","personal.dowry":"вещи","personal.household":"хозяйство","personal.word":"уважение","personal.idle_days":"без дела","skill.hands":"умение","skill.trade":"промысел","skill.household":"хозяйство","hope.boyar":"надежда боярина","hope.wife":"надежда жены","hope.servant":"надежда слуги","health.boyar":"здоровье боярина","health.wife":"здоровье жены","health.servant":"здоровье слуги"};function Td(s,r,i){if(!r)return[];const o=[],u=(f,d,p)=>{const g=p-d;if(!g)return;const m=tm[f];m&&o.push(`${m} ${g>0?"+":"−"}${Math.abs(g)}`)};if(r.house)for(const[f,d]of Object.entries(r.house)){const p=f,g=s.house[p],m=f==="izba"?6:f==="t_out"?30:f==="t_in"?25:999,b=f==="izba"?0:f==="t_out"?-50:f==="t_in"?-20:0;s.house[p]=Cn(g+d,b,m),u(`house.${f}`,g,s.house[p])}if(r.health)for(const f of ea){const d=r.health[f];if(!d)continue;const p=s.health[f];s.health[f]=Cn(p+d,0,100),u(`health.${f}`,p,s.health[f])}if(r.hope)for(const f of ea){const d=r.hope[f];if(!d)continue;const p=s.hope[f];s.hope[f]=Cn(p+d,0,100),u(`hope.${f}`,p,s.hope[f])}if(r.satiety)for(const f of ea){const d=r.satiety[f];d&&(s.satiety[f]=Cn(s.satiety[f]+d,0,2))}if(r.personal)for(const[f,d]of Object.entries(r.personal)){const p=f,g=s.personal[p],m=f==="dowry"?6:f==="idle_days"?3:100;if(s.personal[p]=Cn(g+d,0,m),f==="household"){const b=Math.round(4*(1-g/100)*(s.health.wife/100));s.personal[p]=Cn(s.personal[p]+b,0,m)}if(f==="word"){const b=Math.round(2*(1-g/100));s.personal[p]=Cn(s.personal[p]+b,0,m)}u(`personal.${f}`,g,s.personal[p])}if(r.skill)for(const[f,d]of Object.entries(r.skill)){const p=f,g=s.skill[p]??0;if(s.skill[p]=Cn(g+d,0,100),f==="hands"){const m=Math.round(3*(1-g/100)*(s.health.boyar/100));s.skill[p]=Cn(s.skill[p]+m,0,100);const b=Math.max(1,Math.round(3*Math.max(0,s.skill[p]-30)/70));s.personal.opora=Cn(s.personal.opora+b,0,100)}u(`skill.${f}`,g,s.skill[p])}if(r.approval)for(const f of nm){const d=r.approval[f];d&&(s.approval[f]=Cn(s.approval[f]+d,-10,10))}if(r.flag)for(const[f,d]of Object.entries(r.flag))d?s.flags[f]=!0:delete s.flags[f];return i?o:[]}function Ms(s,r){const i=s.personal,o=!!(s.flags.wife_own_1&&(s.flags.wife_own_2||s.flags.wife_own_3)),u=i.opora>=70&&i.opora>i.chin&&s.skill.hands>=40&&!!s.flags.taught_boy,f=i.household>=50&&o,d=i.word>=65&&!!s.flags.servant_free;s.flags.all_arcs=u&&f&&d,s.flags.personal_ok=Math.max(i.chin,i.opora)>=60&&(i.dowry>=4||i.household>=50)&&(i.idle_days===0||i.word>=60),s.flags.broken=i.chin<30&&i.opora<30;const p=!["path_merchant","path_monastery","path_service","path_posad","path_taiga","path_clerk"].some(E=>s.flags[E]),g=!s.flags.boyar_dead&&!s.flags.wife_dead&&!s.flags.servant_dead,m=!!(s.flags.helped_posad_1&&s.flags.helped_posad_2);s.flags.best_svoi=g&&!s.flags.wife_left&&!!s.flags.all_arcs&&m&&p,s.flags.best_chelovek=g&&!!s.flags.personal_ok&&m&&p;const b=r.endings.find(E=>An(E.when,s)),k=((b==null?void 0:b.epilogue)??[]).filter(E=>An(E.when,s)).map(E=>E.text.trim()).join(`

`);return s.epilogue=k||void 0,b}function rm(s){return(s.health.boyar<=0||s.hope.boyar<=0||Math.max(s.personal.chin,s.personal.opora)<=0)&&(s.flags.boyar_dead=!0),(s.health.wife<=0||s.hope.wife<=0||s.personal.dowry<=0&&s.personal.household<=0)&&(s.flags.wife_dead=!0),(s.health.servant<=0||s.hope.servant<=0||s.personal.word<40&&s.personal.idle_days>=3)&&(s.flags.servant_dead=!0),!!(s.flags.boyar_dead||s.flags.wife_dead||s.flags.servant_dead)}function Od(s,r){var o;const i=(o=r.cards[s.current])==null?void 0:o.act;for(const u of r.order){const f=r.cards[u];if(f.kind==="crisis"&&!(!f.any_act&&f.act!==i)&&!s.flags[`fired_${u}`]&&An(f.when,s))return s.flags[`fired_${u}`]=!0,Na(s,r,u,!1),!0}return!1}function Na(s,r,i,o=!0){let u=r.order.indexOf(i);if(u<0)return s;for(;u<r.order.length;){const f=r.cards[r.order[u]];if(An(f.when,s))return s.current=f.id,Td(s,f.on_enter,!1),f.kind==="hub"&&s.budget[f.id]===void 0&&(s.budget[f.id]=f.budget??0),f.kind==="ending"||f.ending==="auto"?(s.ending=Ms(s,r),s):(o&&Od(s,r),s);u+=1}return s.ending=Ms(s,r),s}function im(s,r){const i=r.cards[s.current];if(!i||s.ending)return[];const o=(i.choices??[]).filter(f=>!f.when||An(f.when,s));return i.kind!=="hub"?o:(s.budget[i.id]??0)<=0?o.filter(f=>f.id==="forward"||!f.next):o.filter(f=>{if(f.id==="forward"||!f.next)return!0;const d=r.cards[f.next];return!d||An(d.when,s)})}function sm(s,r,i){const o=r.cards[s.current];if(!o||s.ending)return s;const u=(o.choices??[]).find(p=>p.id===i);if(!u||u.when&&!An(u.when,s))return s;const f={...s,house:{...s.house},health:{...s.health},hope:{...s.hope},satiety:{...s.satiety},personal:{...s.personal},skill:{...s.skill},approval:{...s.approval},flags:{...s.flags},budget:{...s.budget},log:[]},d=Td(f,u.effects,!0);if(f.steps+=1,f.log=d,o.kind==="hub"&&u.id!=="forward"){const p=f.budget[o.id]??0;f.budget[o.id]=Math.max(0,p-1)}if(rm(f)){const p=!!(f.flags.boyar_dead||f.flags.wife_dead),g=Od(f,r);if(p)return f.ending||(f.ending=Ms(f,r)),f;if(g)return f}return u.next?Na(f,r,u.next):(f.ending=Ms(f,r),f)}function lm(s){return bd(s)}const Ld="boyarin.save.v4",Uc="boyarin.debug",om={autumn:"Осень",winter:"Зима",spring:"Весна",final:"Финал"},am=s=>s>=70?"крепкая":s>=40?"есть":s>=20?"тает":"на дне",um=s=>s>=70?"твёрдо стоит":s>=40?"держится":s>=20?"пошатнулся":"сломлен",fm=s=>s>=70?"хозяйка":s>=40?"ведёт дом":s>=20?"устала":"не тянет",cm=s=>s>=70?"его слушают":s>=40?"при деле":s>=20?"молчит":"никому не нужен",dm=s=>s>=70?"в порядке":s>=40?"сдаёт":s>0?"слёг":"при смерти",hm=s=>s>=6?"тёплая":s>=4?"крепкая":s>=2?"продувает":"промёрзла",oa=s=>s.trim().split(/\n\s*\n/),Id=s=>Object.entries(s.flags).filter(([,r])=>r).map(([r])=>r).join(", ")||"—";function pm(){try{const s=localStorage.getItem(Ld);if(s){const r=JSON.parse(s);if(r.current&&or.cards[r.current])return{...r,log:[]}}}catch{}return bd(or)}function gm({state:s}){const{house:r}=s;return M.jsxs("section",{className:"house","aria-label":"Дом",children:[M.jsxs("div",{className:"house-item",children:[M.jsx("span",{className:"house-label",children:"На улице"}),M.jsxs("span",{className:"house-value",children:[r.t_out,"°"]})]}),M.jsxs("div",{className:"house-item",children:[M.jsx("span",{className:"house-label",children:"В доме"}),M.jsxs("span",{className:"house-value",children:[r.t_in,"°"]})]}),M.jsxs("div",{className:"house-item",children:[M.jsx("span",{className:"house-label",children:"Дров"}),M.jsxs("span",{className:"house-value",children:[r.fuel_days," дн."]})]}),M.jsxs("div",{className:"house-item",children:[M.jsx("span",{className:"house-label",children:"Еды"}),M.jsxs("span",{className:"house-value",children:[r.food_days," дн."]})]}),M.jsxs("div",{className:"house-item",children:[M.jsx("span",{className:"house-label",children:"Изба"}),M.jsx("span",{className:"house-value",children:hm(r.izba)})]})]})}function Pd({state:s}){const r=Math.max(s.personal.chin,s.personal.opora),i={boyar:um(r),wife:fm(s.personal.household),servant:s.personal.idle_days>0?"слоняется без дела":cm(s.personal.word)};return M.jsx("section",{className:"cast","aria-label":"Люди",children:Dp.map(o=>{const u=s.hope[o.id],f=s.health[o.id];return M.jsxs("div",{className:"cast-card",title:`Здоровье: ${dm(f)}`,children:[M.jsxs("div",{className:"portrait",children:[M.jsx("span",{className:"portrait-initial",children:o.name[0]}),o.portrait?M.jsx("img",{src:o.portrait,alt:o.name,loading:"lazy"}):null]}),M.jsxs("div",{className:"cast-text",children:[M.jsx("span",{className:"cast-name",children:o.name}),M.jsx("span",{className:"cast-theme",children:i[o.id]}),M.jsx("div",{className:"mini-track",title:`Надежда: ${am(u)}`,children:M.jsx("div",{className:"mini-fill hope",style:{width:`${u}%`}})})]})]},o.id)})})}function zd(){return M.jsx("div",{className:"scene-backdrop","aria-hidden":"true",children:M.jsx("div",{className:"scene-backdrop-glow"})})}function mm({state:s,onRestart:r,debug:i,onToggleDebug:o}){const u=s.ending,f=["e25_svoi","e26_chelovek","e11_continuation","e17_moscow","e18_tobolsk"].includes(u.id);return M.jsxs("main",{className:`app ending tone-${f?"best":"bad"}`,children:[M.jsx("header",{className:"topbar",children:M.jsx("div",{className:"brand",children:M.jsxs("div",{className:"brand-row",children:[M.jsx("span",{className:"brand-title",children:"Зима ссыльного боярина"}),M.jsx("button",{type:"button",className:`debug-toggle${i?" is-on":""}`,onClick:o,children:"дебаг"})]})})}),M.jsx(Pd,{state:s}),M.jsx(zd,{}),M.jsxs("section",{className:"scene",children:[M.jsx("p",{className:"chapter",children:i?`Финал · шаг ${s.steps}`:"Финал"}),M.jsx("h1",{children:u.title}),oa(u.text).map((d,p)=>M.jsx("p",{children:d},p)),s.epilogue&&oa(s.epilogue).map((d,p)=>M.jsx("p",{className:"epilogue",children:d},`ep-${p}`)),i?M.jsxs("section",{className:"debug","aria-label":"Отладка",children:[M.jsxs("div",{children:["концовка: ",u.id]}),M.jsxs("div",{children:["шагов: ",s.steps]}),M.jsxs("div",{children:["флаги: ",Id(s)]})]}):null]}),M.jsx("section",{className:"choices",children:M.jsx("button",{className:"choice restart",onClick:r,children:M.jsx("span",{className:"choice-label",children:"Начать заново"})})})]})}function ym(){const[s,r]=ii.useState(pm),[i,o]=ii.useState(()=>{try{return localStorage.getItem(Uc)==="1"}catch{return!1}});ii.useEffect(()=>{try{localStorage.setItem(Ld,JSON.stringify(s))}catch{}},[s]),ii.useEffect(()=>{try{localStorage.setItem(Uc,i?"1":"0")}catch{}},[i]);const u=()=>o(g=>!g);if(s.ending)return M.jsx(mm,{state:s,onRestart:()=>r(lm(or)),debug:i,onToggleDebug:u});const f=or.cards[s.current],d=im(s,or),p=f.kind==="hub"?s.budget[f.id]??0:0;return M.jsxs("main",{className:"app",children:[M.jsx("header",{className:"topbar",children:M.jsx("div",{className:"brand",children:M.jsxs("div",{className:"brand-row",children:[M.jsx("span",{className:"brand-title",children:"Зима ссыльного боярина"}),M.jsx("button",{type:"button",className:`debug-toggle${i?" is-on":""}`,onClick:u,children:"дебаг"})]})})}),M.jsx(gm,{state:s}),M.jsx(Pd,{state:s}),M.jsx(zd,{}),M.jsxs("section",{className:"scene",children:[M.jsxs("p",{className:"chapter",children:[om[f.act]??f.act,i?` · шаг ${s.steps}`:""]}),f.kind==="hub"?null:M.jsx("h1",{children:f.title}),oa(f.text).map((g,m)=>M.jsx("p",{children:g},m)),i?M.jsxs("section",{className:"debug","aria-label":"Отладка",children:[M.jsxs("div",{children:["карточка: ",f.id]}),M.jsxs("div",{children:["акт: ",f.act," · вид: ",f.kind," · шаг: ",s.steps]}),M.jsxs("div",{children:["бюджет: ",p," · флаги: ",Id(s)]})]}):null]}),i&&s.log.length?M.jsx("section",{className:"changes","aria-label":"Что изменилось",children:s.log.map((g,m)=>M.jsx("span",{children:g},m))}):null,M.jsx("section",{className:"choices","aria-label":"Выбор",children:d.map(g=>M.jsxs("button",{className:"choice",onClick:()=>r(sm(s,or,g.id)),children:[M.jsx("span",{className:"choice-label",children:g.text}),g.hint?M.jsx("span",{className:"choice-hint",children:g.hint}):null]},g.id))})]})}Rp.createRoot(document.getElementById("root")).render(M.jsx(ii.StrictMode,{children:M.jsx(ym,{})}));
