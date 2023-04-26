(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var en=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ea={},Ou={get exports(){return Ea},set exports(i){Ea=i}},Yr={},Nu={get exports(){return Yr},set exports(i){Yr=i}},ds;function Du(){return ds||(ds=1,function(i,e){(function(t,n){i.exports=n()})(en,function(){var t={isEqual:!0,isMatchingKey:!0,isPromise:!0,maxSize:!0,onCacheAdd:!0,onCacheChange:!0,onCacheHit:!0,transformKey:!0},n=Array.prototype.slice;function o(l){var d=l.length;return d?d===1?[l[0]]:d===2?[l[0],l[1]]:d===3?[l[0],l[1],l[2]]:n.call(l,0):[]}function a(l){var d={};for(var S in l)t[S]||(d[S]=l[S]);return d}function c(l){return typeof l=="function"&&l.isMemoized}function r(l,d){return l===d||l!==l&&d!==d}function f(l,d){var S={};for(var p in l)S[p]=l[p];for(var p in d)S[p]=d[p];return S}var s=function(){function l(d){this.keys=[],this.values=[],this.options=d;var S=typeof d.isMatchingKey=="function";S?this.getKeyIndex=this._getKeyIndexFromMatchingKey:d.maxSize>1?this.getKeyIndex=this._getKeyIndexForMany:this.getKeyIndex=this._getKeyIndexForSingle,this.canTransformKey=typeof d.transformKey=="function",this.shouldCloneArguments=this.canTransformKey||S,this.shouldUpdateOnAdd=typeof d.onCacheAdd=="function",this.shouldUpdateOnChange=typeof d.onCacheChange=="function",this.shouldUpdateOnHit=typeof d.onCacheHit=="function"}return Object.defineProperty(l.prototype,"size",{get:function(){return this.keys.length},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"snapshot",{get:function(){return{keys:o(this.keys),size:this.size,values:o(this.values)}},enumerable:!1,configurable:!0}),l.prototype._getKeyIndexFromMatchingKey=function(d){var S=this.options,p=S.isMatchingKey,y=S.maxSize,m=this.keys,R=m.length;if(!R)return-1;if(p(m[0],d))return 0;if(y>1){for(var U=1;U<R;U++)if(p(m[U],d))return U}return-1},l.prototype._getKeyIndexForMany=function(d){var S=this.options.isEqual,p=this.keys,y=p.length;if(!y)return-1;if(y===1)return this._getKeyIndexForSingle(d);var m=d.length,R,U;if(m>1){for(var I=0;I<y;I++)if(R=p[I],R.length===m){for(U=0;U<m&&S(R[U],d[U]);U++);if(U===m)return I}}else for(var I=0;I<y;I++)if(R=p[I],R.length===m&&S(R[0],d[0]))return I;return-1},l.prototype._getKeyIndexForSingle=function(d){var S=this.keys;if(!S.length)return-1;var p=S[0],y=p.length;if(d.length!==y)return-1;var m=this.options.isEqual;if(y>1){for(var R=0;R<y;R++)if(!m(p[R],d[R]))return-1;return 0}return m(p[0],d[0])?0:-1},l.prototype.orderByLru=function(d,S,p){for(var y=this.keys,m=this.values,R=y.length,U=p;U--;)y[U+1]=y[U],m[U+1]=m[U];y[0]=d,m[0]=S;var I=this.options.maxSize;R===I&&p===R?(y.pop(),m.pop()):p>=I&&(y.length=m.length=I)},l.prototype.updateAsyncCache=function(d){var S=this,p=this.options,y=p.onCacheChange,m=p.onCacheHit,R=this.keys[0],U=this.values[0];this.values[0]=U.then(function(I){return S.shouldUpdateOnHit&&m(S,S.options,d),S.shouldUpdateOnChange&&y(S,S.options,d),I},function(I){var T=S.getKeyIndex(R);throw T!==-1&&(S.keys.splice(T,1),S.values.splice(T,1)),I})},l}();function h(l,d){if(d===void 0&&(d={}),c(l))return h(l.fn,f(l.options,d));if(typeof l!="function")throw new TypeError("You must pass a function to `memoize`.");var S=d.isEqual,p=S===void 0?r:S,y=d.isMatchingKey,m=d.isPromise,R=m===void 0?!1:m,U=d.maxSize,I=U===void 0?1:U,T=d.onCacheAdd,P=d.onCacheChange,b=d.onCacheHit,A=d.transformKey,v=f({isEqual:p,isMatchingKey:y,isPromise:R,maxSize:I,onCacheAdd:T,onCacheChange:P,onCacheHit:b,transformKey:A},a(d)),w=new s(v),D=w.keys,_=w.values,M=w.canTransformKey,x=w.shouldCloneArguments,u=w.shouldUpdateOnAdd,g=w.shouldUpdateOnChange,E=w.shouldUpdateOnHit,L=function(){var F=x?o(arguments):arguments;M&&(F=A(F));var O=D.length?w.getKeyIndex(F):-1;if(O!==-1)E&&b(w,v,L),O&&(w.orderByLru(D[O],_[O],O),g&&P(w,v,L));else{var G=l.apply(this,arguments),C=x?F:o(arguments);w.orderByLru(C,G,D.length),R&&w.updateAsyncCache(L),u&&T(w,v,L),g&&P(w,v,L)}return _[0]};return L.cache=w,L.fn=l,L.isMemoized=!0,L.options=v,L}return h})}(Nu)),Yr}var $i={},Fu={get exports(){return $i},set exports(i){$i=i}},hs;function Uu(){return hs||(hs=1,function(i,e){(function(t,n){n(e)})(en,function(t){var n=typeof WeakMap=="function",o=Object.keys;function a(_,M){return _===M||_!==_&&M!==M}function c(_){return _.constructor===Object||_.constructor==null}function r(_){return!!_&&typeof _.then=="function"}function f(_){return!!(_&&_.$$typeof)}function s(){var _=[];return{delete:function(M){for(var x=0;x<_.length;++x)if(_[x][0]===M){_.splice(x,1);return}},get:function(M){for(var x=0;x<_.length;++x)if(_[x][0]===M)return _[x][1]},set:function(M,x){for(var u=0;u<_.length;++u)if(_[u][0]===M){_[u][1]=x;return}_.push([M,x])}}}var h=function(_){return _?function(){return new WeakMap}:s}(n);function l(_){return function(x){var u=_||x;return function(E,L,F,O,G,C,N){N===void 0&&(N=h());var V=!!E&&typeof E=="object",j=!!L&&typeof L=="object";if(V!==j)return!1;if(!V&&!j)return u(E,L,N);var Q=N.get(E);if(Q&&N.get(L))return Q===L;N.set(E,L),N.set(L,E);var H=u(E,L,N);return N.delete(E),N.delete(L),H}}}function d(_,M,x,u){var g=_.length;if(M.length!==g)return!1;for(;g-- >0;)if(!x(_[g],M[g],g,g,_,M,u))return!1;return!0}function S(_,M,x,u){var g=_.size===M.size;if(g&&_.size){var E={},L=0;_.forEach(function(F,O){if(g){var G=!1,C=0;M.forEach(function(N,V){!G&&!E[C]&&(G=x(O,V,L,C,_,M,u)&&x(F,N,O,V,_,M,u),G&&(E[C]=!0)),C++}),L++,g=G}})}return g}var p="_owner",y=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function m(_,M,x,u){var g=o(_),E=g.length;if(o(M).length!==E)return!1;if(E)for(var L=void 0;E-- >0;){if(L=g[E],L===p){var F=f(_),O=f(M);if((F||O)&&F!==O)return!1}if(!y(M,L)||!x(_[L],M[L],L,L,_,M,u))return!1}return!0}var R=function(){return/foo/g.flags==="g"?function(M,x){return M.source===x.source&&M.flags===x.flags}:function(M,x){return M.source===x.source&&M.global===x.global&&M.ignoreCase===x.ignoreCase&&M.multiline===x.multiline&&M.unicode===x.unicode&&M.sticky===x.sticky&&M.lastIndex===x.lastIndex}}();function U(_,M,x,u){var g=_.size===M.size;if(g&&_.size){var E={};_.forEach(function(L,F){if(g){var O=!1,G=0;M.forEach(function(C,N){!O&&!E[G]&&(O=x(L,C,F,N,_,M,u),O&&(E[G]=!0)),G++}),g=O}})}return g}var I=typeof Map=="function",T=typeof Set=="function",P=Object.prototype.valueOf;function b(_){var M=typeof _=="function"?_(x):function(u,g,E,L,F,O,G){return x(u,g,G)};function x(u,g,E){if(u===g)return!0;if(u&&g&&typeof u=="object"&&typeof g=="object"){if(c(u)&&c(g))return m(u,g,M,E);var L=Array.isArray(u),F=Array.isArray(g);return L||F?L===F&&d(u,g,M,E):(L=u instanceof Date,F=g instanceof Date,L||F?L===F&&a(u.getTime(),g.getTime()):(L=u instanceof RegExp,F=g instanceof RegExp,L||F?L===F&&R(u,g):r(u)||r(g)?u===g:I&&(L=u instanceof Map,F=g instanceof Map,L||F)?L===F&&S(u,g,M,E):T&&(L=u instanceof Set,F=g instanceof Set,L||F)?L===F&&U(u,g,M,E):u.valueOf!==P||g.valueOf!==P?a(u.valueOf(),g.valueOf()):m(u,g,M,E)))}return u!==u&&g!==g}return x}var A=b(),v=b(function(){return a}),w=b(l()),D=b(l(a));t.circularDeepEqual=w,t.circularShallowEqual=D,t.createCustomEqual=b,t.deepEqual=A,t.sameValueZeroEqual=a,t.shallowEqual=v,Object.defineProperty(t,"__esModule",{value:!0})})}(Fu,$i)),$i}(function(i,e){(function(t,n){i.exports=n(Du(),Uu())})(en,function(t,n){function o(){return o=Object.assign?Object.assign.bind():function(W){for(var Y=1;Y<arguments.length;Y++){var Z=arguments[Y];for(var ie in Z)Object.prototype.hasOwnProperty.call(Z,ie)&&(W[ie]=Z[ie])}return W},o.apply(this,arguments)}function a(W,Y){if(W==null)return{};var Z={},ie=Object.keys(W),ce,ue;for(ue=0;ue<ie.length;ue++)ce=ie[ue],!(Y.indexOf(ce)>=0)&&(Z[ce]=W[ce]);return Z}var c={isDeepEqual:!1,isPromise:!1,isReact:!1,isSerialized:!1,isShallowEqual:!1,matchesArg:void 0,matchesKey:void 0,maxAge:void 0,maxArgs:void 0,maxSize:1,onExpire:void 0,profileName:void 0,serializer:void 0,updateCacheForKey:void 0,transformArgs:void 0,updateExpire:!1};function r(){for(var W=arguments.length,Y=new Array(W),Z=0;Z<W;Z++)Y[Z]=arguments[Z];return Y.reduce(function(ie,ce){if(typeof ie=="function")return typeof ce=="function"?function(){ie.apply(this,arguments),ce.apply(this,arguments)}:ie;if(typeof ce=="function")return ce})}function f(){for(var W=arguments.length,Y=new Array(W),Z=0;Z<W;Z++)Y[Z]=arguments[Z];return Y.reduce(function(ie,ce){if(typeof ie=="function")return typeof ce=="function"?function(){return ie(ce.apply(this,arguments))}:ie;if(typeof ce=="function")return ce})}function s(W,Y){for(var Z=0;Z<W.length;Z++)if(W[Z].key===Y)return Z;return-1}function h(W,Y){var Z=typeof Y=="function"?Y:function(ie,ce){for(var ue=0;ue<ce.length;ue++)if(!W(ie[ue],ce[ue]))return!1;return!0};return function(ie,ce){for(var ue=0;ue<ie.length;ue++)if(ie[ue].length===ce.length&&Z(ie[ue],ce))return ue;return-1}}function l(W,Y){return!Y||Y===c?W:o({},W,Y,{onCacheAdd:r(W.onCacheAdd,Y.onCacheAdd),onCacheChange:r(W.onCacheChange,Y.onCacheChange),onCacheHit:r(W.onCacheHit,Y.onCacheHit),transformArgs:f(W.transformArgs,Y.transformArgs)})}function d(W){return typeof W=="function"&&W.isMoized}function S(W,Y,Z){try{var ie=Z||Y||"anonymous";Object.defineProperty(W,"name",{configurable:!0,enumerable:!1,value:"moized("+ie+")",writable:!0})}catch{}}function p(W,Y,Z){var ie=s(W,Y);ie!==-1&&(clearTimeout(W[ie].timeoutId),Z&&W.splice(ie,1))}function y(W,Y){var Z=setTimeout(W,Y);return typeof Z.unref=="function"&&Z.unref(),Z}function m(W,Y,Z,ie){var ce=Y.maxAge;return function ue(le,k,B){var re=le.keys[0];if(s(W,re)===-1){var ge=function(){var ye=h(Z,ie),we=ye(le.keys,re),xe=le.values[we];~we&&(le.keys.splice(we,1),le.values.splice(we,1),typeof Y.onCacheChange=="function"&&Y.onCacheChange(le,k,B)),p(W,re,!0),typeof Y.onExpire=="function"&&Y.onExpire(re)===!1&&(le.keys.unshift(re),le.values.unshift(xe),ue(le,k,B),typeof Y.onCacheChange=="function"&&Y.onCacheChange(le,k,B))};W.push({expirationMethod:ge,key:re,timeoutId:y(ge,ce)})}}}function R(W,Y){return function(ie){var ce=ie.keys[0],ue=s(W,ce);~ue&&(p(W,ce,!1),W[ue].timeoutId=y(W[ue].expirationMethod,Y.maxAge))}}function U(W,Y,Z,ie){var ce=typeof Y.maxAge=="number"&&isFinite(Y.maxAge)?m(W,Y,Z,ie):void 0;return{onCacheAdd:ce,onCacheHit:ce&&Y.updateExpire?R(W,Y):void 0}}var I={anonymousProfileNameCounter:1,isCollectingStats:!1,profiles:{}},T=!1;function P(W){W?delete I.profiles[W]:I.profiles={}}function b(W){W===void 0&&(W=!0),I.isCollectingStats=W}function A(W){var Y=W.profileName;return function(){Y&&!I.profiles[Y]&&(I.profiles[Y]={calls:0,hits:0}),I.profiles[Y].calls++}}function v(W){return function(){var Y=I.profiles,Z=W.profileName;Y[Z]||(Y[Z]={calls:0,hits:0}),Y[Z].calls++,Y[Z].hits++}}function w(W){return W.displayName||W.name||"Anonymous "+I.anonymousProfileNameCounter++}function D(W,Y){return W?(Y/W*100).toFixed(4)+"%":"0.0000%"}function _(W){!I.isCollectingStats&&!T&&(console.warn('Stats are not currently being collected, please run "collectStats" to enable them.'),T=!0);var Y=I.profiles;if(W){if(!Y[W])return{calls:0,hits:0,usage:"0.0000%"};var Z=Y[W];return o({},Z,{usage:D(Z.calls,Z.hits)})}var ie=Object.keys(I.profiles).reduce(function(ce,ue){return ce.calls+=Y[ue].calls,ce.hits+=Y[ue].hits,ce},{calls:0,hits:0});return o({},ie,{profiles:Object.keys(Y).reduce(function(ce,ue){return ce[ue]=_(ue),ce},{}),usage:D(ie.calls,ie.hits)})}function M(W){return I.isCollectingStats?{onCacheAdd:A(W),onCacheHit:v(W)}:{}}var x={arguments:!0,callee:!0,caller:!0,constructor:!0,length:!0,name:!0,prototype:!0};function u(W,Y,Z){Z===void 0&&(Z=[]),Object.getOwnPropertyNames(W).forEach(function(ie){if(!x[ie]&&Z.indexOf(ie)===-1){var ce=Object.getOwnPropertyDescriptor(W,ie);ce.get||ce.set?Object.defineProperty(Y,ie,ce):Y[ie]=W[ie]}})}function g(W,Y){var Z=Y.expirations,ie=W.options,ce=h(ie.isEqual,ie.isMatchingKey),ue=W;ue.clear=function(){var le=ue._microMemoizeOptions.onCacheChange,k=ue.cache;return k.keys.length=0,k.values.length=0,le&&le(k,ue.options,ue),!0},ue.clearStats=function(){P(ue.options.profileName)},ue.get=function(le){var k=ue._microMemoizeOptions.transformKey,B=ue.cache,re=k?k(le):le,ge=ce(B.keys,re);return ge!==-1?ue.apply(this,le):void 0},ue.getStats=function(){return _(ue.options.profileName)},ue.has=function(le){var k=ue._microMemoizeOptions.transformKey,B=k?k(le):le;return ce(ue.cache.keys,B)!==-1},ue.keys=function(){return ue.cacheSnapshot.keys},ue.remove=function(le){var k=ue._microMemoizeOptions,B=k.onCacheChange,re=k.transformKey,ge=ue.cache,_e=ce(ge.keys,re?re(le):le);if(_e===-1)return!1;var ye=ge.keys[_e];return ge.keys.splice(_e,1),ge.values.splice(_e,1),B&&B(ge,ue.options,ue),p(Z,ye,!0),!0},ue.set=function(le,k){var B=ue._microMemoizeOptions,re=ue.cache,ge=ue.options,_e=B.onCacheAdd,ye=B.onCacheChange,we=B.transformKey,xe=we?we(le):le,de=ce(re.keys,xe);if(de===-1){var Se=ge.maxSize-1;re.size>Se&&(re.keys.length=Se,re.values.length=Se),re.keys.unshift(xe),re.values.unshift(k),ge.isPromise&&re.updateAsyncCache(ue),_e&&_e(re,ge,ue),ye&&ye(re,ge,ue)}else{var Re=re.keys[de];re.values[de]=k,de>0&&re.orderByLru(Re,k,de),ge.isPromise&&re.updateAsyncCache(ue),typeof ye=="function"&&ye(re,ge,ue)}},ue.values=function(){return ue.cacheSnapshot.values}}function E(W,Y){var Z=Y.expirations,ie=Y.options,ce=Y.originalFunction,ue=W.options;Object.defineProperties(W,{_microMemoizeOptions:{configurable:!0,get:function(){return ue}},cacheSnapshot:{configurable:!0,get:function(){var B=W.cache;return{keys:B.keys.slice(0),size:B.size,values:B.values.slice(0)}}},expirations:{configurable:!0,get:function(){return Z}},expirationsSnapshot:{configurable:!0,get:function(){return Z.slice(0)}},isMoized:{configurable:!0,get:function(){return!0}},options:{configurable:!0,get:function(){return ie}},originalFunction:{configurable:!0,get:function(){return ce}}});var le=W;u(ce,le)}function L(W,Y){return g(W,Y),E(W,Y),W}var F=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function O(W,Y,Z){var ie=W(o({maxArgs:2,isShallowEqual:!0},Z,{isReact:!1}));Y.displayName||(Y.displayName=Y.name||"Component");function ce(ue,le,k){this.props=ue,this.context=le,this.updater=k,this.MoizedComponent=ie(Y)}return ce.prototype.isReactComponent={},ce.prototype.render=function(){return{$$typeof:F,type:this.MoizedComponent,props:this.props,ref:null,key:null,_owner:null}},u(Y,ce,["contextType","contextTypes"]),ce.displayName="Moized("+(Y.displayName||Y.name||"Component")+")",S(ce,Y.name,Z.profileName),ce}function G(W){return function(Y){if(W>=Y.length)return Y;if(W===0)return[];if(W===1)return[Y[0]];if(W===2)return[Y[0],Y[1]];if(W===3)return[Y[0],Y[1],Y[2]];for(var Z=[],ie=0;ie<W;ie++)Z[ie]=Y[ie];return Z}}function C(W,Y){for(var Z=W.length,ie=0;ie<Z;++ie)if(W[ie]===Y)return ie+1;return 0}function N(){var W=[],Y=[];return function(ie,ce){var ue=typeof ce;if(ue==="function"||ue==="symbol")return ce.toString();if(typeof ce=="object"){if(W.length){var le=C(W,this);le===0?W[W.length]=this:(W.splice(le),Y.splice(le)),Y[Y.length]=ie;var k=C(W,ce);if(k!==0)return"[ref="+(Y.slice(0,k).join(".")||".")+"]"}else W[0]=ce,Y[0]=ie;return ce}return""+ce}}function V(W){var Y=typeof W;return W&&(Y==="object"||Y==="function")?JSON.stringify(W,N()):W}function j(W){for(var Y="|",Z=0;Z<W.length;Z++)Y+=V(W[Z])+"|";return[Y]}function Q(W){return typeof W.serializer=="function"?W.serializer:j}function H(W,Y){return W[0]===Y[0]}function q(W){if(typeof W=="function")return function(Y,Z,ie){return W(ie.cache,ie.options,ie)}}function J(W){return W.matchesArg||W.isDeepEqual&&n.deepEqual||W.isShallowEqual&&n.shallowEqual||n.sameValueZeroEqual}function oe(W){return W.matchesKey||W.isSerialized&&H||void 0}function K(W){return f(W.isSerialized&&Q(W),typeof W.transformArgs=="function"&&W.transformArgs,typeof W.maxArgs=="number"&&G(W.maxArgs))}function he(W){var Y=W.options.updateCacheForKey,Z=function(){for(var ce=arguments.length,ue=new Array(ce),le=0;le<ce;le++)ue[le]=arguments[le];if(!Y(ue))return W.apply(this,ue);var k=W.fn.apply(this,ue);return W.set(ue,k),k};return u(W,Z),Z}var z=["matchesArg","isDeepEqual","isPromise","isReact","isSerialized","isShallowEqual","matchesKey","maxAge","maxArgs","maxSize","onCacheAdd","onCacheChange","onCacheHit","onExpire","profileName","serializer","updateCacheForKey","transformArgs","updateExpire"],$=function W(Y,Z){var ie=Z||c;if(d(Y)){var ce=Y.originalFunction,ue=l(Y.options,ie);return W(ce,ue)}if(typeof Y=="object")return function(Xe,ee){if(typeof Xe=="function"){var fe=l(Y,ee);return W(Xe,fe)}var ve=l(Y,Xe);return W(ve)};if(ie.isReact)return O(W,Y,ie);var le=o({},c,ie,{maxAge:typeof ie.maxAge=="number"&&ie.maxAge>=0?ie.maxAge:c.maxAge,maxArgs:typeof ie.maxArgs=="number"&&ie.maxArgs>=0?ie.maxArgs:c.maxArgs,maxSize:typeof ie.maxSize=="number"&&ie.maxSize>=0?ie.maxSize:c.maxSize,profileName:ie.profileName||w(Y)}),k=[];le.matchesArg,le.isDeepEqual;var B=le.isPromise;le.isReact,le.isSerialized,le.isShallowEqual,le.matchesKey,le.maxAge,le.maxArgs;var re=le.maxSize,ge=le.onCacheAdd,_e=le.onCacheChange,ye=le.onCacheHit;le.onExpire,le.profileName,le.serializer;var we=le.updateCacheForKey;le.transformArgs,le.updateExpire;var xe=a(le,z),de=J(le),Se=oe(le),Re=U(k,le,de,Se),Ee=M(le),Ie=K(le),Pe=o({},xe,{isEqual:de,isMatchingKey:Se,isPromise:B,maxSize:re,onCacheAdd:q(r(ge,Re.onCacheAdd,Ee.onCacheAdd)),onCacheChange:q(_e),onCacheHit:q(r(ye,Re.onCacheHit,Ee.onCacheHit)),transformKey:Ie}),De=t(Y,Pe),Ve=L(De,{expirations:k,options:le,originalFunction:Y});return we&&(Ve=he(Ve)),S(Ve,Y.name,ie.profileName),Ve};$.clearStats=P,$.collectStats=b,$.compose=function(){return f.apply(void 0,arguments)||$},$.deep=$({isDeepEqual:!0}),$.getStats=_,$.infinite=$({maxSize:1/0}),$.isCollectingStats=function(){return I.isCollectingStats},$.isMoized=function(Y){return typeof Y=="function"&&!!Y.isMoized},$.matchesArg=function(W){return $({matchesArg:W})},$.matchesKey=function(W){return $({matchesKey:W})};function ne(W,Y){if(Y===!0)return $({maxAge:W,updateExpire:Y});if(typeof Y=="object"){var Z=Y.onExpire,ie=Y.updateExpire;return $({maxAge:W,onExpire:Z,updateExpire:ie})}return $(typeof Y=="function"?{maxAge:W,onExpire:Y,updateExpire:!0}:{maxAge:W})}return $.maxAge=ne,$.maxArgs=function(W){return $({maxArgs:W})},$.maxSize=function(W){return $({maxSize:W})},$.profile=function(W){return $({profileName:W})},$.promise=$({isPromise:!0,updateExpire:!0}),$.react=$({isReact:!0}),$.serialize=$({isSerialized:!0}),$.serializeWith=function(W){return $({isSerialized:!0,serializer:W})},$.shallow=$({isShallowEqual:!0}),$.transformArgs=function(W){return $({transformArgs:W})},$.updateCacheForKey=function(W){return $({updateCacheForKey:W})},Object.defineProperty($,"default",{configurable:!1,enumerable:!1,value:$,writable:!1}),$})})(Ou);const $e=Ea,pl=Symbol("Comlink.proxy"),Gu=Symbol("Comlink.endpoint"),Bu=Symbol("Comlink.releaseProxy"),wa=Symbol("Comlink.thrown"),ml=i=>typeof i=="object"&&i!==null||typeof i=="function",Vu={canHandle:i=>ml(i)&&i[pl],serialize(i){const{port1:e,port2:t}=new MessageChannel;return _l(i,e),[t,[t]]},deserialize(i){return i.start(),ro(i)}},zu={canHandle:i=>ml(i)&&wa in i,serialize({value:i}){let e;return i instanceof Error?e={isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:e={isError:!1,value:i},[e,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}},gl=new Map([["proxy",Vu],["throw",zu]]);function _l(i,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:o,type:a,path:c}=Object.assign({path:[]},n.data),r=(n.data.argumentList||[]).map(Dn);let f;try{const s=c.slice(0,-1).reduce((l,d)=>l[d],i),h=c.reduce((l,d)=>l[d],i);switch(a){case"GET":f=h;break;case"SET":s[c.slice(-1)[0]]=Dn(n.data.value),f=!0;break;case"APPLY":f=h.apply(s,r);break;case"CONSTRUCT":{const l=new h(...r);f=Ji(l)}break;case"ENDPOINT":{const{port1:l,port2:d}=new MessageChannel;_l(i,d),f=Wu(l,[l])}break;case"RELEASE":f=void 0;break;default:return}}catch(s){f={value:s,[wa]:0}}Promise.resolve(f).catch(s=>({value:s,[wa]:0})).then(s=>{const[h,l]=Za(s);e.postMessage(Object.assign(Object.assign({},h),{id:o}),l),a==="RELEASE"&&(e.removeEventListener("message",t),vl(e))})}),e.start&&e.start()}function ku(i){return i.constructor.name==="MessagePort"}function vl(i){ku(i)&&i.close()}function ro(i,e){return Aa(i,[],e)}function _r(i){if(i)throw new Error("Proxy has been released and is not useable")}function Aa(i,e=[],t=function(){}){let n=!1;const o=new Proxy(t,{get(a,c){if(_r(n),c===Bu)return()=>qn(i,{type:"RELEASE",path:e.map(r=>r.toString())}).then(()=>{vl(i),n=!0});if(c==="then"){if(e.length===0)return{then:()=>o};const r=qn(i,{type:"GET",path:e.map(f=>f.toString())}).then(Dn);return r.then.bind(r)}return Aa(i,[...e,c])},set(a,c,r){_r(n);const[f,s]=Za(r);return qn(i,{type:"SET",path:[...e,c].map(h=>h.toString()),value:f},s).then(Dn)},apply(a,c,r){_r(n);const f=e[e.length-1];if(f===Gu)return qn(i,{type:"ENDPOINT"}).then(Dn);if(f==="bind")return Aa(i,e.slice(0,-1));const[s,h]=ps(r);return qn(i,{type:"APPLY",path:e.map(l=>l.toString()),argumentList:s},h).then(Dn)},construct(a,c){_r(n);const[r,f]=ps(c);return qn(i,{type:"CONSTRUCT",path:e.map(s=>s.toString()),argumentList:r},f).then(Dn)}});return o}function Hu(i){return Array.prototype.concat.apply([],i)}function ps(i){const e=i.map(Za);return[e.map(t=>t[0]),Hu(e.map(t=>t[1]))]}const yl=new WeakMap;function Wu(i,e){return yl.set(i,e),i}function Ji(i){return Object.assign(i,{[pl]:!0})}function Za(i){for(const[e,t]of gl)if(t.canHandle(i)){const[n,o]=t.serialize(i);return[{type:"HANDLER",name:e,value:n},o]}return[{type:"RAW",value:i},yl.get(i)||[]]}function Dn(i){switch(i.type){case"HANDLER":return gl.get(i.name).deserialize(i.value);case"RAW":return i.value}}function qn(i,e,t){return new Promise(n=>{const o=Xu();i.addEventListener("message",function a(c){!c.data||!c.data.id||c.data.id!==o||(i.removeEventListener("message",a),n(c.data))}),i.start&&i.start(),i.postMessage(Object.assign({id:o},e),t)})}function Xu(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var ju=typeof global=="object"&&global&&global.Object===Object&&global;const Yu=ju;var $u=typeof self=="object"&&self&&self.Object===Object&&self,qu=Yu||$u||Function("return this")();const sr=qu;var Ku=sr.Symbol;const $r=Ku;var xl=Object.prototype,Zu=xl.hasOwnProperty,Ju=xl.toString,Ui=$r?$r.toStringTag:void 0;function Qu(i){var e=Zu.call(i,Ui),t=i[Ui];try{i[Ui]=void 0;var n=!0}catch{}var o=Ju.call(i);return n&&(e?i[Ui]=t:delete i[Ui]),o}var ef=Object.prototype,tf=ef.toString;function nf(i){return tf.call(i)}var rf="[object Null]",of="[object Undefined]",ms=$r?$r.toStringTag:void 0;function bl(i){return i==null?i===void 0?of:rf:ms&&ms in Object(i)?Qu(i):nf(i)}function af(i){return i!=null&&typeof i=="object"}var sf="[object Symbol]";function cf(i){return typeof i=="symbol"||af(i)&&bl(i)==sf}var lf=/\s/;function uf(i){for(var e=i.length;e--&&lf.test(i.charAt(e)););return e}var ff=/^\s+/;function df(i){return i&&i.slice(0,uf(i)+1).replace(ff,"")}function xi(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}var gs=0/0,hf=/^[-+]0x[0-9a-f]+$/i,pf=/^0b[01]+$/i,mf=/^0o[0-7]+$/i,gf=parseInt;function _s(i){if(typeof i=="number")return i;if(cf(i))return gs;if(xi(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=xi(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=df(i);var t=pf.test(i);return t||mf.test(i)?gf(i.slice(2),t?2:8):hf.test(i)?gs:+i}function Tn(i){return i}var _f="[object AsyncFunction]",vf="[object Function]",yf="[object GeneratorFunction]",xf="[object Proxy]";function bf(i){if(!xi(i))return!1;var e=bl(i);return e==vf||e==yf||e==_f||e==xf}var Tf=sr["__core-js_shared__"];const bo=Tf;var vs=function(){var i=/[^.]+$/.exec(bo&&bo.keys&&bo.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function Sf(i){return!!vs&&vs in i}var Ef=Function.prototype,wf=Ef.toString;function Af(i){if(i!=null){try{return wf.call(i)}catch{}try{return i+""}catch{}}return""}var Mf=/[\\^$.*+?()[\]{}|]/g,Pf=/^\[object .+?Constructor\]$/,Rf=Function.prototype,If=Object.prototype,Lf=Rf.toString,Cf=If.hasOwnProperty,Of=RegExp("^"+Lf.call(Cf).replace(Mf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Nf(i){if(!xi(i)||Sf(i))return!1;var e=bf(i)?Of:Pf;return e.test(Af(i))}function Df(i,e){return i?.[e]}function Ja(i,e){var t=Df(i,e);return Nf(t)?t:void 0}function Ff(){}function Uf(i,e,t,n){for(var o=i.length,a=t+(n?1:-1);n?a--:++a<o;)if(e(i[a],a,i))return a;return-1}function Gf(i){return i!==i}function Bf(i,e,t){for(var n=t-1,o=i.length;++n<o;)if(i[n]===e)return n;return-1}function Vf(i,e,t){return e===e?Bf(i,e,t):Uf(i,Gf,t)}function zf(i,e){var t=i==null?0:i.length;return!!t&&Vf(i,e,0)>-1}function kf(i,e){return i===e||i!==i&&e!==e}var Hf=Ja(Object,"create");const Qi=Hf;function Wf(){this.__data__=Qi?Qi(null):{},this.size=0}function Xf(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e}var jf="__lodash_hash_undefined__",Yf=Object.prototype,$f=Yf.hasOwnProperty;function qf(i){var e=this.__data__;if(Qi){var t=e[i];return t===jf?void 0:t}return $f.call(e,i)?e[i]:void 0}var Kf=Object.prototype,Zf=Kf.hasOwnProperty;function Jf(i){var e=this.__data__;return Qi?e[i]!==void 0:Zf.call(e,i)}var Qf="__lodash_hash_undefined__";function ed(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Qi&&e===void 0?Qf:e,this}function kn(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}kn.prototype.clear=Wf;kn.prototype.delete=Xf;kn.prototype.get=qf;kn.prototype.has=Jf;kn.prototype.set=ed;function td(){this.__data__=[],this.size=0}function oo(i,e){for(var t=i.length;t--;)if(kf(i[t][0],e))return t;return-1}var nd=Array.prototype,id=nd.splice;function rd(i){var e=this.__data__,t=oo(e,i);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():id.call(e,t,1),--this.size,!0}function od(i){var e=this.__data__,t=oo(e,i);return t<0?void 0:e[t][1]}function ad(i){return oo(this.__data__,i)>-1}function sd(i,e){var t=this.__data__,n=oo(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this}function Ri(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ri.prototype.clear=td;Ri.prototype.delete=rd;Ri.prototype.get=od;Ri.prototype.has=ad;Ri.prototype.set=sd;var cd=Ja(sr,"Map");const ld=cd;function ud(){this.size=0,this.__data__={hash:new kn,map:new(ld||Ri),string:new kn}}function fd(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null}function ao(i,e){var t=i.__data__;return fd(e)?t[typeof e=="string"?"string":"hash"]:t.map}function dd(i){var e=ao(this,i).delete(i);return this.size-=e?1:0,e}function hd(i){return ao(this,i).get(i)}function pd(i){return ao(this,i).has(i)}function md(i,e){var t=ao(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this}function Ii(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ii.prototype.clear=ud;Ii.prototype.delete=dd;Ii.prototype.get=hd;Ii.prototype.has=pd;Ii.prototype.set=md;var gd=Ja(sr,"Set");const To=gd;var _d="__lodash_hash_undefined__";function vd(i){return this.__data__.set(i,_d),this}function yd(i){return this.__data__.has(i)}function qr(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Ii;++e<t;)this.add(i[e])}qr.prototype.add=qr.prototype.push=vd;qr.prototype.has=yd;function xd(i,e){return i.has(e)}function Tl(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t}var bd=function(){return sr.Date.now()};const So=bd;var Td="Expected a function",Sd=Math.max,Ed=Math.min;function Sl(i,e,t){var n,o,a,c,r,f,s=0,h=!1,l=!1,d=!0;if(typeof i!="function")throw new TypeError(Td);e=_s(e)||0,xi(t)&&(h=!!t.leading,l="maxWait"in t,a=l?Sd(_s(t.maxWait)||0,e):a,d="trailing"in t?!!t.trailing:d);function S(b){var A=n,v=o;return n=o=void 0,s=b,c=i.apply(v,A),c}function p(b){return s=b,r=setTimeout(R,e),h?S(b):c}function y(b){var A=b-f,v=b-s,w=e-A;return l?Ed(w,a-v):w}function m(b){var A=b-f,v=b-s;return f===void 0||A>=e||A<0||l&&v>=a}function R(){var b=So();if(m(b))return U(b);r=setTimeout(R,y(b))}function U(b){return r=void 0,d&&n?S(b):(n=o=void 0,c)}function I(){r!==void 0&&clearTimeout(r),s=0,n=f=o=r=void 0}function T(){return r===void 0?c:U(So())}function P(){var b=So(),A=m(b);if(n=arguments,o=this,f=b,A){if(r===void 0)return p(f);if(l)return clearTimeout(r),r=setTimeout(R,e),S(f)}return r===void 0&&(r=setTimeout(R,e)),c}return P.cancel=I,P.flush=T,P}function wd(i,e,t){for(var n=-1,o=i==null?0:i.length;++n<o;)if(t(e,i[n]))return!0;return!1}function Kn(i){for(var e=-1,t=i==null?0:i.length,n={};++e<t;){var o=i[e];n[o[0]]=o[1]}return n}var Ad="Expected a function";function Kr(i,e,t){var n=!0,o=!0;if(typeof i!="function")throw new TypeError(Ad);return xi(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),Sl(i,e,{leading:n,maxWait:e,trailing:o})}var Md=1/0,Pd=To&&1/Tl(new To([,-0]))[1]==Md?function(i){return new To(i)}:Ff;const Rd=Pd;var Id=200;function Ld(i,e,t){var n=-1,o=zf,a=i.length,c=!0,r=[],f=r;if(t)c=!1,o=wd;else if(a>=Id){var s=e?null:Rd(i);if(s)return Tl(s);c=!1,o=xd,f=new qr}else f=e?[]:r;e:for(;++n<a;){var h=i[n],l=e?e(h):h;if(h=t||h!==0?h:0,c&&l===l){for(var d=f.length;d--;)if(f[d]===l)continue e;e&&f.push(l),r.push(h)}else o(f,l,t)||(f!==r&&f.push(l),r.push(h))}return r}function Cd(i,e){return e=typeof e=="function"?e:void 0,i&&i.length?Ld(i,void 0,e):[]}const Qa="146",Od=0,ys=1,Nd=2,El=1,Dd=2,Xi=3,bi=0,Rt=1,xn=2,bn=0,gi=1,xs=2,bs=3,Ts=4,Fd=5,di=100,Ud=101,Gd=102,Ss=103,Es=104,Bd=200,Vd=201,zd=202,kd=203,wl=204,Al=205,Hd=206,Wd=207,Xd=208,jd=209,Yd=210,$d=0,qd=1,Kd=2,Ma=3,Zd=4,Jd=5,Qd=6,eh=7,Ml=0,th=1,nh=2,nn=0,ih=1,rh=2,oh=3,ah=4,sh=5,Pl=300,Ti=301,Si=302,Pa=303,Ra=304,so=306,Ia=1e3,Nt=1001,La=1002,ht=1003,ws=1004,As=1005,wt=1006,ch=1007,co=1008,Hn=1009,lh=1010,uh=1011,Rl=1012,fh=1013,Un=1014,Gn=1015,er=1016,dh=1017,hh=1018,_i=1020,ph=1021,mh=1022,Dt=1023,gh=1024,_h=1025,Vn=1026,Ei=1027,vh=1028,yh=1029,xh=1030,bh=1031,Th=1033,Eo=33776,wo=33777,Ao=33778,Mo=33779,Ms=35840,Ps=35841,Rs=35842,Is=35843,Sh=36196,Ls=37492,Cs=37496,Os=37808,Ns=37809,Ds=37810,Fs=37811,Us=37812,Gs=37813,Bs=37814,Vs=37815,zs=37816,ks=37817,Hs=37818,Ws=37819,Xs=37820,js=37821,Ys=36492,Wn=3e3,Ke=3001,Eh=3200,wh=3201,Ah=0,Mh=1,Jt="srgb",Bn="srgb-linear",Po=7680,Ph=519,Ca=35044,$s="300 es",Oa=1035;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ro=Math.PI/180,qs=180/Math.PI;function cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function Rh(i,e){return(i%e+e)%e}function Io(i,e,t){return(1-t)*i+t*e}function Ks(i){return(i&i-1)===0&&i!==0}function Na(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*o+e.x,this.y=a*o+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,o,a,c,r,f,s){const h=this.elements;return h[0]=e,h[1]=o,h[2]=r,h[3]=t,h[4]=a,h[5]=f,h[6]=n,h[7]=c,h[8]=s,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,c=n[0],r=n[3],f=n[6],s=n[1],h=n[4],l=n[7],d=n[2],S=n[5],p=n[8],y=o[0],m=o[3],R=o[6],U=o[1],I=o[4],T=o[7],P=o[2],b=o[5],A=o[8];return a[0]=c*y+r*U+f*P,a[3]=c*m+r*I+f*b,a[6]=c*R+r*T+f*A,a[1]=s*y+h*U+l*P,a[4]=s*m+h*I+l*b,a[7]=s*R+h*T+l*A,a[2]=d*y+S*U+p*P,a[5]=d*m+S*I+p*b,a[8]=d*R+S*T+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],r=e[5],f=e[6],s=e[7],h=e[8];return t*c*h-t*r*s-n*a*h+n*r*f+o*a*s-o*c*f}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],r=e[5],f=e[6],s=e[7],h=e[8],l=h*c-r*s,d=r*f-h*a,S=s*a-c*f,p=t*l+n*d+o*S;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=l*y,e[1]=(o*s-h*n)*y,e[2]=(r*n-o*c)*y,e[3]=d*y,e[4]=(h*t-o*f)*y,e[5]=(o*a-r*t)*y,e[6]=S*y,e[7]=(n*f-s*t)*y,e[8]=(c*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,c,r){const f=Math.cos(a),s=Math.sin(a);return this.set(n*f,n*s,-n*(f*c+s*r)+c+e,-o*s,o*f,-o*(-s*c+f*r)+r+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),o=this.elements,a=o[0],c=o[3],r=o[6],f=o[1],s=o[4],h=o[7];return o[0]=t*a+n*f,o[3]=t*c+n*s,o[6]=t*r+n*h,o[1]=-n*a+t*f,o[4]=-n*c+t*s,o[7]=-n*r+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Il(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Lo={[Jt]:{[Bn]:zn},[Bn]:{[Jt]:kr}},It={legacyMode:!0,get workingColorSpace(){return Bn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Lo[e]&&Lo[e][t]!==void 0){const n=Lo[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},Lt={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Co(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function xr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=Bn){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=Bn){if(e=Rh(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=Co(c,a,e+1/3),this.g=Co(c,a,e),this.b=Co(c,a,e-1/3)}return It.toWorkingColorSpace(this,o),this}setStyle(e,t=Jt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],r=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,It.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,It.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const f=parseFloat(a[1])/360,s=parseFloat(a[2])/100,h=parseFloat(a[3])/100;return n(a[4]),this.setHSL(f,s,h,t)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(c===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Jt){const n=Ll[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return It.fromWorkingColorSpace(xr(this,et),e),vt(et.r*255,0,255)<<16^vt(et.g*255,0,255)<<8^vt(et.b*255,0,255)<<0}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bn){It.fromWorkingColorSpace(xr(this,et),t);const n=et.r,o=et.g,a=et.b,c=Math.max(n,o,a),r=Math.min(n,o,a);let f,s;const h=(r+c)/2;if(r===c)f=0,s=0;else{const l=c-r;switch(s=h<=.5?l/(c+r):l/(2-c-r),c){case n:f=(o-a)/l+(o<a?6:0);break;case o:f=(a-n)/l+2;break;case a:f=(n-o)/l+4;break}f/=6}return e.h=f,e.s=s,e.l=h,e}getRGB(e,t=Bn){return It.fromWorkingColorSpace(xr(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=Jt){return It.fromWorkingColorSpace(xr(this,et),e),e!==Jt?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${et.r*255|0},${et.g*255|0},${et.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Lt),Lt.h+=e,Lt.s+=t,Lt.l+=n,this.setHSL(Lt.h,Lt.s,Lt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lt),e.getHSL(yr);const n=Io(Lt.h,yr.h,t),o=Io(Lt.s,yr.s,t),a=Io(Lt.l,yr.l,t);return this.setHSL(n,o,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}je.NAMES=Ll;let Zn;class Cl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Zr("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=zn(a[c]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ol{constructor(e=null){this.isSource=!0,this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,r=o.length;c<r;c++)o[c].isDataTexture?a.push(Oo(o[c].image)):a.push(Oo(o[c]))}else a=Oo(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function Oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class xt extends Xn{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Nt,o=Nt,a=wt,c=co,r=Dt,f=Hn,s=1,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=cr(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=s,this.format=r,this.internalFormat=null,this.type=f,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Pl;class ct{constructor(e=0,t=0,n=0,o=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*o+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const f=e.elements,s=f[0],h=f[4],l=f[8],d=f[1],S=f[5],p=f[9],y=f[2],m=f[6],R=f[10];if(Math.abs(h-d)<.01&&Math.abs(l-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+y)<.1&&Math.abs(p+m)<.1&&Math.abs(s+S+R-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(s+1)/2,T=(S+1)/2,P=(R+1)/2,b=(h+d)/4,A=(l+y)/4,v=(p+m)/4;return I>T&&I>P?I<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(I),o=b/n,a=A/n):T>P?T<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(T),n=b/o,a=v/o):P<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(P),n=A/a,o=v/a),this.set(n,o,a,t),this}let U=Math.sqrt((m-p)*(m-p)+(l-y)*(l-y)+(d-h)*(d-h));return Math.abs(U)<.001&&(U=1),this.x=(m-p)/U,this.y=(l-y)/U,this.z=(d-h)/U,this.w=Math.acos((s+S+R-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sn extends Xn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const o={width:e,height:t,depth:1};this.texture=new xt(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nl extends xt{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=ht,this.minFilter=ht,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lh extends xt{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=ht,this.minFilter=ht,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,c,r){let f=n[o+0],s=n[o+1],h=n[o+2],l=n[o+3];const d=a[c+0],S=a[c+1],p=a[c+2],y=a[c+3];if(r===0){e[t+0]=f,e[t+1]=s,e[t+2]=h,e[t+3]=l;return}if(r===1){e[t+0]=d,e[t+1]=S,e[t+2]=p,e[t+3]=y;return}if(l!==y||f!==d||s!==S||h!==p){let m=1-r;const R=f*d+s*S+h*p+l*y,U=R>=0?1:-1,I=1-R*R;if(I>Number.EPSILON){const P=Math.sqrt(I),b=Math.atan2(P,R*U);m=Math.sin(m*b)/P,r=Math.sin(r*b)/P}const T=r*U;if(f=f*m+d*T,s=s*m+S*T,h=h*m+p*T,l=l*m+y*T,m===1-r){const P=1/Math.sqrt(f*f+s*s+h*h+l*l);f*=P,s*=P,h*=P,l*=P}}e[t]=f,e[t+1]=s,e[t+2]=h,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,o,a,c){const r=n[o],f=n[o+1],s=n[o+2],h=n[o+3],l=a[c],d=a[c+1],S=a[c+2],p=a[c+3];return e[t]=r*p+h*l+f*S-s*d,e[t+1]=f*p+h*d+s*l-r*S,e[t+2]=s*p+h*S+r*d-f*l,e[t+3]=h*p-r*l-f*d-s*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,o=e._y,a=e._z,c=e._order,r=Math.cos,f=Math.sin,s=r(n/2),h=r(o/2),l=r(a/2),d=f(n/2),S=f(o/2),p=f(a/2);switch(c){case"XYZ":this._x=d*h*l+s*S*p,this._y=s*S*l-d*h*p,this._z=s*h*p+d*S*l,this._w=s*h*l-d*S*p;break;case"YXZ":this._x=d*h*l+s*S*p,this._y=s*S*l-d*h*p,this._z=s*h*p-d*S*l,this._w=s*h*l+d*S*p;break;case"ZXY":this._x=d*h*l-s*S*p,this._y=s*S*l+d*h*p,this._z=s*h*p+d*S*l,this._w=s*h*l-d*S*p;break;case"ZYX":this._x=d*h*l-s*S*p,this._y=s*S*l+d*h*p,this._z=s*h*p-d*S*l,this._w=s*h*l+d*S*p;break;case"YZX":this._x=d*h*l+s*S*p,this._y=s*S*l+d*h*p,this._z=s*h*p-d*S*l,this._w=s*h*l-d*S*p;break;case"XZY":this._x=d*h*l-s*S*p,this._y=s*S*l-d*h*p,this._z=s*h*p+d*S*l,this._w=s*h*l+d*S*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],c=t[1],r=t[5],f=t[9],s=t[2],h=t[6],l=t[10],d=n+r+l;if(d>0){const S=.5/Math.sqrt(d+1);this._w=.25/S,this._x=(h-f)*S,this._y=(a-s)*S,this._z=(c-o)*S}else if(n>r&&n>l){const S=2*Math.sqrt(1+n-r-l);this._w=(h-f)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(a+s)/S}else if(r>l){const S=2*Math.sqrt(1+r-n-l);this._w=(a-s)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(f+h)/S}else{const S=2*Math.sqrt(1+l-n-r);this._w=(c-o)/S,this._x=(a+s)/S,this._y=(f+h)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,c=e._w,r=t._x,f=t._y,s=t._z,h=t._w;return this._x=n*h+c*r+o*s-a*f,this._y=o*h+c*f+a*r-n*s,this._z=a*h+c*s+n*f-o*r,this._w=c*h-n*r-o*f-a*s,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,c=this._w;let r=c*e._w+n*e._x+o*e._y+a*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=c,this._x=n,this._y=o,this._z=a,this;const f=1-r*r;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*n+t*this._x,this._y=S*o+t*this._y,this._z=S*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const s=Math.sqrt(f),h=Math.atan2(s,r),l=Math.sin((1-t)*h)/s,d=Math.sin(t*h)/s;return this._w=c*l+this._w*d,this._x=n*l+this._x*d,this._y=o*l+this._y*d,this._z=a*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(o),n*Math.sin(a),n*Math.cos(a),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,c=e.y,r=e.z,f=e.w,s=f*t+c*o-r*n,h=f*n+r*t-a*o,l=f*o+a*n-c*t,d=-a*t-c*n-r*o;return this.x=s*f+d*-a+h*-r-l*-c,this.y=h*f+d*-c+l*-a-s*-r,this.z=l*f+d*-r+s*-c-h*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,c=t.x,r=t.y,f=t.z;return this.x=o*f-a*r,this.y=a*c-n*f,this.z=n*r-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new se,Zs=new lr;class ur{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,o=1/0,a=-1/0,c=-1/0,r=-1/0;for(let f=0,s=e.length;f<s;f+=3){const h=e[f],l=e[f+1],d=e[f+2];h<t&&(t=h),l<n&&(n=l),d<o&&(o=d),h>a&&(a=h),l>c&&(c=l),d>r&&(r=d)}return this.min.set(t,n,o),this.max.set(a,c,r),this}setFromBufferAttribute(e){let t=1/0,n=1/0,o=1/0,a=-1/0,c=-1/0,r=-1/0;for(let f=0,s=e.count;f<s;f++){const h=e.getX(f),l=e.getY(f),d=e.getZ(f);h<t&&(t=h),l<n&&(n=l),d<o&&(o=d),h>a&&(a=h),l>c&&(c=l),d>r&&(r=d)}return this.min.set(t,n,o),this.max.set(a,c,r),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let c=0,r=a.count;c<r;c++)Rn.fromBufferAttribute(a,c).applyMatrix4(e.matrixWorld),this.expandByPoint(Rn)}else n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox),Do.applyMatrix4(e.matrixWorld),this.union(Do);const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),br.subVectors(this.max,Gi),Jn.subVectors(e.a,Gi),Qn.subVectors(e.b,Gi),ei.subVectors(e.c,Gi),un.subVectors(Qn,Jn),fn.subVectors(ei,Qn),In.subVectors(Jn,ei);let t=[0,-un.z,un.y,0,-fn.z,fn.y,0,-In.z,In.y,un.z,0,-un.x,fn.z,0,-fn.x,In.z,0,-In.x,-un.y,un.x,0,-fn.y,fn.x,0,-In.y,In.x,0];return!Fo(t,Jn,Qn,ei,br)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Jn,Qn,ei,br))?!1:(Tr.crossVectors(un,fn),t=[Tr.x,Tr.y,Tr.z],Fo(t,Jn,Qn,ei,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Rn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new se,new se,new se,new se,new se,new se,new se,new se],Rn=new se,Do=new ur,Jn=new se,Qn=new se,ei=new se,un=new se,fn=new se,In=new se,Gi=new se,br=new se,Tr=new se,Ln=new se;function Fo(i,e,t,n,o){for(let a=0,c=i.length-3;a<=c;a+=3){Ln.fromArray(i,a);const r=o.x*Math.abs(Ln.x)+o.y*Math.abs(Ln.y)+o.z*Math.abs(Ln.z),f=e.dot(Ln),s=t.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(f,s,h),Math.min(f,s,h))>r)return!1}return!0}const Ch=new ur,Bi=new se,Uo=new se;class es{constructor(e=new se,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ch.setFromPoints(e).getCenter(n);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);const t=Bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Bi,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(Uo)),this.expandByPoint(Bi.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new se,Go=new se,Sr=new se,dn=new se,Bo=new se,Er=new se,Vo=new se;class Oh{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.direction).multiplyScalar(t).add(this.origin),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Go.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Go);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Sr),r=dn.dot(this.direction),f=-dn.dot(Sr),s=dn.lengthSq(),h=Math.abs(1-c*c);let l,d,S,p;if(h>0)if(l=c*f-r,d=c*r-f,p=a*h,l>=0)if(d>=-p)if(d<=p){const y=1/h;l*=y,d*=y,S=l*(l+c*d+2*r)+d*(c*l+d+2*f)+s}else d=a,l=Math.max(0,-(c*d+r)),S=-l*l+d*(d+2*f)+s;else d=-a,l=Math.max(0,-(c*d+r)),S=-l*l+d*(d+2*f)+s;else d<=-p?(l=Math.max(0,-(-c*a+r)),d=l>0?-a:Math.min(Math.max(-a,-f),a),S=-l*l+d*(d+2*f)+s):d<=p?(l=0,d=Math.min(Math.max(-a,-f),a),S=d*(d+2*f)+s):(l=Math.max(0,-(c*a+r)),d=l>0?a:Math.min(Math.max(-a,-f),a),S=-l*l+d*(d+2*f)+s);else d=c>0?-a:a,l=Math.max(0,-(c*d+r)),S=-l*l+d*(d+2*f)+s;return n&&n.copy(this.direction).multiplyScalar(l).add(this.origin),o&&o.copy(Sr).multiplyScalar(d).add(Go),S}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),o=Yt.dot(Yt)-n*n,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),r=n-c,f=n+c;return r<0&&f<0?null:r<0?this.at(f,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,c,r,f;const s=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return s>=0?(n=(e.min.x-d.x)*s,o=(e.max.x-d.x)*s):(n=(e.max.x-d.x)*s,o=(e.min.x-d.x)*s),h>=0?(a=(e.min.y-d.y)*h,c=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,c=(e.min.y-d.y)*h),n>c||a>o||((a>n||isNaN(n))&&(n=a),(c<o||isNaN(o))&&(o=c),l>=0?(r=(e.min.z-d.z)*l,f=(e.max.z-d.z)*l):(r=(e.max.z-d.z)*l,f=(e.min.z-d.z)*l),n>f||r>o)||((r>n||n!==n)&&(n=r),(f<o||o!==o)&&(o=f),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,o,a){Bo.subVectors(t,e),Er.subVectors(n,e),Vo.crossVectors(Bo,Er);let c=this.direction.dot(Vo),r;if(c>0){if(o)return null;r=1}else if(c<0)r=-1,c=-c;else return null;dn.subVectors(this.origin,e);const f=r*this.direction.dot(Er.crossVectors(dn,Er));if(f<0)return null;const s=r*this.direction.dot(Bo.cross(dn));if(s<0||f+s>c)return null;const h=-r*dn.dot(Vo);return h<0?null:this.at(h/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,o,a,c,r,f,s,h,l,d,S,p,y,m){const R=this.elements;return R[0]=e,R[4]=t,R[8]=n,R[12]=o,R[1]=a,R[5]=c,R[9]=r,R[13]=f,R[2]=s,R[6]=h,R[10]=l,R[14]=d,R[3]=S,R[7]=p,R[11]=y,R[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/ti.setFromMatrixColumn(e,0).length(),a=1/ti.setFromMatrixColumn(e,1).length(),c=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,c=Math.cos(n),r=Math.sin(n),f=Math.cos(o),s=Math.sin(o),h=Math.cos(a),l=Math.sin(a);if(e.order==="XYZ"){const d=c*h,S=c*l,p=r*h,y=r*l;t[0]=f*h,t[4]=-f*l,t[8]=s,t[1]=S+p*s,t[5]=d-y*s,t[9]=-r*f,t[2]=y-d*s,t[6]=p+S*s,t[10]=c*f}else if(e.order==="YXZ"){const d=f*h,S=f*l,p=s*h,y=s*l;t[0]=d+y*r,t[4]=p*r-S,t[8]=c*s,t[1]=c*l,t[5]=c*h,t[9]=-r,t[2]=S*r-p,t[6]=y+d*r,t[10]=c*f}else if(e.order==="ZXY"){const d=f*h,S=f*l,p=s*h,y=s*l;t[0]=d-y*r,t[4]=-c*l,t[8]=p+S*r,t[1]=S+p*r,t[5]=c*h,t[9]=y-d*r,t[2]=-c*s,t[6]=r,t[10]=c*f}else if(e.order==="ZYX"){const d=c*h,S=c*l,p=r*h,y=r*l;t[0]=f*h,t[4]=p*s-S,t[8]=d*s+y,t[1]=f*l,t[5]=y*s+d,t[9]=S*s-p,t[2]=-s,t[6]=r*f,t[10]=c*f}else if(e.order==="YZX"){const d=c*f,S=c*s,p=r*f,y=r*s;t[0]=f*h,t[4]=y-d*l,t[8]=p*l+S,t[1]=l,t[5]=c*h,t[9]=-r*h,t[2]=-s*h,t[6]=S*l+p,t[10]=d-y*l}else if(e.order==="XZY"){const d=c*f,S=c*s,p=r*f,y=r*s;t[0]=f*h,t[4]=-l,t[8]=s*h,t[1]=d*l+y,t[5]=c*h,t[9]=S*l-p,t[2]=p*l-S,t[6]=r*h,t[10]=y*l+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Dh)}lookAt(e,t,n){const o=this.elements;return gt.subVectors(e,t),gt.lengthSq()===0&&(gt.z=1),gt.normalize(),hn.crossVectors(n,gt),hn.lengthSq()===0&&(Math.abs(n.z)===1?gt.x+=1e-4:gt.z+=1e-4,gt.normalize(),hn.crossVectors(n,gt)),hn.normalize(),wr.crossVectors(gt,hn),o[0]=hn.x,o[4]=wr.x,o[8]=gt.x,o[1]=hn.y,o[5]=wr.y,o[9]=gt.y,o[2]=hn.z,o[6]=wr.z,o[10]=gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,c=n[0],r=n[4],f=n[8],s=n[12],h=n[1],l=n[5],d=n[9],S=n[13],p=n[2],y=n[6],m=n[10],R=n[14],U=n[3],I=n[7],T=n[11],P=n[15],b=o[0],A=o[4],v=o[8],w=o[12],D=o[1],_=o[5],M=o[9],x=o[13],u=o[2],g=o[6],E=o[10],L=o[14],F=o[3],O=o[7],G=o[11],C=o[15];return a[0]=c*b+r*D+f*u+s*F,a[4]=c*A+r*_+f*g+s*O,a[8]=c*v+r*M+f*E+s*G,a[12]=c*w+r*x+f*L+s*C,a[1]=h*b+l*D+d*u+S*F,a[5]=h*A+l*_+d*g+S*O,a[9]=h*v+l*M+d*E+S*G,a[13]=h*w+l*x+d*L+S*C,a[2]=p*b+y*D+m*u+R*F,a[6]=p*A+y*_+m*g+R*O,a[10]=p*v+y*M+m*E+R*G,a[14]=p*w+y*x+m*L+R*C,a[3]=U*b+I*D+T*u+P*F,a[7]=U*A+I*_+T*g+P*O,a[11]=U*v+I*M+T*E+P*G,a[15]=U*w+I*x+T*L+P*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],c=e[1],r=e[5],f=e[9],s=e[13],h=e[2],l=e[6],d=e[10],S=e[14],p=e[3],y=e[7],m=e[11],R=e[15];return p*(+a*f*l-o*s*l-a*r*d+n*s*d+o*r*S-n*f*S)+y*(+t*f*S-t*s*d+a*c*d-o*c*S+o*s*h-a*f*h)+m*(+t*s*l-t*r*S-a*c*l+n*c*S+a*r*h-n*s*h)+R*(-o*r*h-t*f*l+t*r*d+o*c*l-n*c*d+n*f*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],r=e[5],f=e[6],s=e[7],h=e[8],l=e[9],d=e[10],S=e[11],p=e[12],y=e[13],m=e[14],R=e[15],U=l*m*s-y*d*s+y*f*S-r*m*S-l*f*R+r*d*R,I=p*d*s-h*m*s-p*f*S+c*m*S+h*f*R-c*d*R,T=h*y*s-p*l*s+p*r*S-c*y*S-h*r*R+c*l*R,P=p*l*f-h*y*f-p*r*d+c*y*d+h*r*m-c*l*m,b=t*U+n*I+o*T+a*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=U*A,e[1]=(y*d*a-l*m*a-y*o*S+n*m*S+l*o*R-n*d*R)*A,e[2]=(r*m*a-y*f*a+y*o*s-n*m*s-r*o*R+n*f*R)*A,e[3]=(l*f*a-r*d*a-l*o*s+n*d*s+r*o*S-n*f*S)*A,e[4]=I*A,e[5]=(h*m*a-p*d*a+p*o*S-t*m*S-h*o*R+t*d*R)*A,e[6]=(p*f*a-c*m*a-p*o*s+t*m*s+c*o*R-t*f*R)*A,e[7]=(c*d*a-h*f*a+h*o*s-t*d*s-c*o*S+t*f*S)*A,e[8]=T*A,e[9]=(p*l*a-h*y*a-p*n*S+t*y*S+h*n*R-t*l*R)*A,e[10]=(c*y*a-p*r*a+p*n*s-t*y*s-c*n*R+t*r*R)*A,e[11]=(h*r*a-c*l*a-h*n*s+t*l*s+c*n*S-t*r*S)*A,e[12]=P*A,e[13]=(h*y*o-p*l*o+p*n*d-t*y*d-h*n*m+t*l*m)*A,e[14]=(p*r*o-c*y*o-p*n*f+t*y*f+c*n*m-t*r*m)*A,e[15]=(c*l*o-h*r*o+h*n*f-t*l*f-c*n*d+t*r*d)*A,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,c=e.x,r=e.y,f=e.z,s=a*c,h=a*r;return this.set(s*c+n,s*r-o*f,s*f+o*r,0,s*r+o*f,h*r+n,h*f-o*c,0,s*f-o*r,h*f+o*c,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,c){return this.set(1,n,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,c=t._y,r=t._z,f=t._w,s=a+a,h=c+c,l=r+r,d=a*s,S=a*h,p=a*l,y=c*h,m=c*l,R=r*l,U=f*s,I=f*h,T=f*l,P=n.x,b=n.y,A=n.z;return o[0]=(1-(y+R))*P,o[1]=(S+T)*P,o[2]=(p-I)*P,o[3]=0,o[4]=(S-T)*b,o[5]=(1-(d+R))*b,o[6]=(m+U)*b,o[7]=0,o[8]=(p+I)*A,o[9]=(m-U)*A,o[10]=(1-(d+y))*A,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=ti.set(o[0],o[1],o[2]).length();const c=ti.set(o[4],o[5],o[6]).length(),r=ti.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Ct.copy(this);const s=1/a,h=1/c,l=1/r;return Ct.elements[0]*=s,Ct.elements[1]*=s,Ct.elements[2]*=s,Ct.elements[4]*=h,Ct.elements[5]*=h,Ct.elements[6]*=h,Ct.elements[8]*=l,Ct.elements[9]*=l,Ct.elements[10]*=l,t.setFromRotationMatrix(Ct),n.x=a,n.y=c,n.z=r,this}makePerspective(e,t,n,o,a,c){const r=this.elements,f=2*a/(t-e),s=2*a/(n-o),h=(t+e)/(t-e),l=(n+o)/(n-o),d=-(c+a)/(c-a),S=-2*c*a/(c-a);return r[0]=f,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=s,r[9]=l,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=S,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,o,a,c){const r=this.elements,f=1/(t-e),s=1/(n-o),h=1/(c-a),l=(t+e)*f,d=(n+o)*s,S=(c+a)*h;return r[0]=2*f,r[4]=0,r[8]=0,r[12]=-l,r[1]=0,r[5]=2*s,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-S,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new se,Ct=new Ye,Nh=new se(0,0,0),Dh=new se(1,1,1),hn=new se,wr=new se,gt=new se,Js=new Ye,Qs=new lr;class fr{constructor(e=0,t=0,n=0,o=fr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],c=o[4],r=o[8],f=o[1],s=o[5],h=o[9],l=o[2],d=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(d,s),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,S),this._z=Math.atan2(f,s)):(this._y=Math.atan2(-l,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,S),this._z=Math.atan2(-c,s)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,S),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,s));break;case"YZX":this._z=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-h,s),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(r,S));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,s),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Js,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qs.setFromEuler(this),this.setFromQuaternion(Qs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}fr.DefaultOrder="XYZ";fr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const ec=new se,ni=new lr,$t=new Ye,Ar=new se,Vi=new se,Uh=new se,Gh=new lr,tc=new se(1,0,0),nc=new se(0,1,0),ic=new se(0,0,1),Bh={type:"added"},rc={type:"removed"};class yt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DefaultUp.clone();const e=new se,t=new fr,n=new lr,o=new se(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Mt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DefaultMatrixWorldAutoUpdate,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(nc,e)}rotateZ(e){return this.rotateOnAxis(ic,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(nc,e)}translateZ(e){return this.translateOnAxis(ic,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(Vi,Ar,this.up):$t.lookAt(Ar,Vi,this.up),this.quaternion.setFromRotationMatrix($t),o&&($t.extractRotation(o.matrixWorld),ni.setFromRotationMatrix($t),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(rc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++){const r=o[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(r,f){return r[f.uuid]===void 0&&(r[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const f=r.shapes;if(Array.isArray(f))for(let s=0,h=f.length;s<h;s++){const l=f[s];a(e.shapes,l)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let f=0,s=this.material.length;f<s;f++)r.push(a(e.materials,this.material[f]));o.material=r}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let r=0;r<this.children.length;r++)o.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let r=0;r<this.animations.length;r++){const f=this.animations[r];o.animations.push(a(e.animations,f))}}if(t){const r=c(e.geometries),f=c(e.materials),s=c(e.textures),h=c(e.images),l=c(e.shapes),d=c(e.skeletons),S=c(e.animations),p=c(e.nodes);r.length>0&&(n.geometries=r),f.length>0&&(n.materials=f),s.length>0&&(n.textures=s),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),S.length>0&&(n.animations=S),p.length>0&&(n.nodes=p)}return n.object=o,n;function c(r){const f=[];for(const s in r){const h=r[s];delete h.metadata,f.push(h)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}yt.DefaultUp=new se(0,1,0);yt.DefaultMatrixAutoUpdate=!0;yt.DefaultMatrixWorldAutoUpdate=!0;const Ot=new se,qt=new se,zo=new se,Kt=new se,ii=new se,ri=new se,oc=new se,ko=new se,Ho=new se,Wo=new se;class tn{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),Ot.subVectors(e,t),o.cross(Ot);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){Ot.subVectors(o,t),qt.subVectors(n,t),zo.subVectors(e,t);const c=Ot.dot(Ot),r=Ot.dot(qt),f=Ot.dot(zo),s=qt.dot(qt),h=qt.dot(zo),l=c*s-r*r;if(l===0)return a.set(-2,-1,-1);const d=1/l,S=(s*f-r*h)*d,p=(c*h-r*f)*d;return a.set(1-S-p,p,S)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Kt),Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getUV(e,t,n,o,a,c,r,f){return this.getBarycoord(e,t,n,o,Kt),f.set(0,0),f.addScaledVector(a,Kt.x),f.addScaledVector(c,Kt.y),f.addScaledVector(r,Kt.z),f}static isFrontFacing(e,t,n,o){return Ot.subVectors(n,t),qt.subVectors(e,t),Ot.cross(qt).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Ot.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,o,a){return tn.getUV(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let c,r;ii.subVectors(o,n),ri.subVectors(a,n),ko.subVectors(e,n);const f=ii.dot(ko),s=ri.dot(ko);if(f<=0&&s<=0)return t.copy(n);Ho.subVectors(e,o);const h=ii.dot(Ho),l=ri.dot(Ho);if(h>=0&&l<=h)return t.copy(o);const d=f*l-h*s;if(d<=0&&f>=0&&h<=0)return c=f/(f-h),t.copy(n).addScaledVector(ii,c);Wo.subVectors(e,a);const S=ii.dot(Wo),p=ri.dot(Wo);if(p>=0&&S<=p)return t.copy(a);const y=S*s-f*p;if(y<=0&&s>=0&&p<=0)return r=s/(s-p),t.copy(n).addScaledVector(ri,r);const m=h*p-S*l;if(m<=0&&l-h>=0&&S-p>=0)return oc.subVectors(a,o),r=(l-h)/(l-h+(S-p)),t.copy(o).addScaledVector(oc,r);const R=1/(m+y+d);return c=y*R,r=d*R,t.copy(n).addScaledVector(ii,c).addScaledVector(ri,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vh=0;class lo extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=gi,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wl,this.blendDst=Al,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const o=this[t];if(o===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function o(a){const c=[];for(const r in a){const f=a[r];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fl extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new se,Mr=new He;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ca,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),o=mt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),o=mt(o,this.array),a=mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ca&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ul extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gl extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zh=0;const St=new Ye,Xo=new yt,oi=new se,_t=new ur,zi=new ur,rt=new se;class on extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Il(e)?Gl:Ul)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Mt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return St.makeRotationFromQuaternion(e),this.applyMatrix4(St),this}rotateX(e){return St.makeRotationX(e),this.applyMatrix4(St),this}rotateY(e){return St.makeRotationY(e),this.applyMatrix4(St),this}rotateZ(e){return St.makeRotationZ(e),this.applyMatrix4(St),this}translate(e,t,n){return St.makeTranslation(e,t,n),this.applyMatrix4(St),this}scale(e,t,n){return St.makeScale(e,t,n),this.applyMatrix4(St),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=[];for(let n=0,o=e.length;n<o;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];_t.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(_t.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const r=t[a];zi.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(_t.min,zi.min),_t.expandByPoint(rt),rt.addVectors(_t.max,zi.max),_t.expandByPoint(rt)):(_t.expandByPoint(zi.min),_t.expandByPoint(zi.max))}_t.getCenter(n);let o=0;for(let a=0,c=e.count;a<c;a++)rt.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(rt));if(t)for(let a=0,c=t.length;a<c;a++){const r=t[a],f=this.morphTargetsRelative;for(let s=0,h=r.count;s<h;s++)rt.fromBufferAttribute(r,s),f&&(oi.fromBufferAttribute(e,s),rt.add(oi)),o=Math.max(o,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,o=t.position.array,a=t.normal.array,c=t.uv.array,r=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*r),4));const f=this.getAttribute("tangent").array,s=[],h=[];for(let D=0;D<r;D++)s[D]=new se,h[D]=new se;const l=new se,d=new se,S=new se,p=new He,y=new He,m=new He,R=new se,U=new se;function I(D,_,M){l.fromArray(o,D*3),d.fromArray(o,_*3),S.fromArray(o,M*3),p.fromArray(c,D*2),y.fromArray(c,_*2),m.fromArray(c,M*2),d.sub(l),S.sub(l),y.sub(p),m.sub(p);const x=1/(y.x*m.y-m.x*y.y);isFinite(x)&&(R.copy(d).multiplyScalar(m.y).addScaledVector(S,-y.y).multiplyScalar(x),U.copy(S).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(x),s[D].add(R),s[_].add(R),s[M].add(R),h[D].add(U),h[_].add(U),h[M].add(U))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let D=0,_=T.length;D<_;++D){const M=T[D],x=M.start,u=M.count;for(let g=x,E=x+u;g<E;g+=3)I(n[g+0],n[g+1],n[g+2])}const P=new se,b=new se,A=new se,v=new se;function w(D){A.fromArray(a,D*3),v.copy(A);const _=s[D];P.copy(_),P.sub(A.multiplyScalar(A.dot(_))).normalize(),b.crossVectors(v,_);const x=b.dot(h[D])<0?-1:1;f[D*4]=P.x,f[D*4+1]=P.y,f[D*4+2]=P.z,f[D*4+3]=x}for(let D=0,_=T.length;D<_;++D){const M=T[D],x=M.start,u=M.count;for(let g=x,E=x+u;g<E;g+=3)w(n[g+0]),w(n[g+1]),w(n[g+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,S=n.count;d<S;d++)n.setXYZ(d,0,0,0);const o=new se,a=new se,c=new se,r=new se,f=new se,s=new se,h=new se,l=new se;if(e)for(let d=0,S=e.count;d<S;d+=3){const p=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);o.fromBufferAttribute(t,p),a.fromBufferAttribute(t,y),c.fromBufferAttribute(t,m),h.subVectors(c,a),l.subVectors(o,a),h.cross(l),r.fromBufferAttribute(n,p),f.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),r.add(h),f.add(h),s.add(h),n.setXYZ(p,r.x,r.y,r.z),n.setXYZ(y,f.x,f.y,f.z),n.setXYZ(m,s.x,s.y,s.z)}else for(let d=0,S=t.count;d<S;d+=3)o.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),c.fromBufferAttribute(t,d+2),h.subVectors(c,a),l.subVectors(o,a),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(r,f){const s=r.array,h=r.itemSize,l=r.normalized,d=new s.constructor(f.length*h);let S=0,p=0;for(let y=0,m=f.length;y<m;y++){r.isInterleavedBufferAttribute?S=f[y]*r.data.stride+r.offset:S=f[y]*h;for(let R=0;R<h;R++)d[p++]=s[S++]}return new Ut(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,o=this.attributes;for(const r in o){const f=o[r],s=e(f,n);t.setAttribute(r,s)}const a=this.morphAttributes;for(const r in a){const f=[],s=a[r];for(let h=0,l=s.length;h<l;h++){const d=s[h],S=e(d,n);f.push(S)}t.morphAttributes[r]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let r=0,f=c.length;r<f;r++){const s=c[r];t.addGroup(s.start,s.count,s.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const s in f)f[s]!==void 0&&(e[s]=f[s]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const s=n[f];e.data.attributes[f]=s.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const s=this.morphAttributes[f],h=[];for(let l=0,d=s.length;l<d;l++){const S=s[l];h.push(S.toJSON(e.data))}h.length>0&&(o[f]=h,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const o=e.attributes;for(const s in o){const h=o[s];this.setAttribute(s,h.clone(t))}const a=e.morphAttributes;for(const s in a){const h=[],l=a[s];for(let d=0,S=l.length;d<S;d++)h.push(l[d].clone(t));this.morphAttributes[s]=h}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let s=0,h=c.length;s<h;s++){const l=c[s];this.addGroup(l.start,l.count,l.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new Ye,ai=new Oh,jo=new es,pn=new se,mn=new se,gn=new se,Yo=new se,$o=new se,qo=new se,Pr=new se,Rr=new se,Ir=new se,Lr=new He,Cr=new He,Or=new He,Ko=new se,Nr=new se;class Ft extends yt{constructor(e=new on,t=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const r=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(a),e.ray.intersectsSphere(jo)===!1)||(ac.copy(a).invert(),ai.copy(e.ray).applyMatrix4(ac),n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1))return;let c;const r=n.index,f=n.attributes.position,s=n.morphAttributes.position,h=n.morphTargetsRelative,l=n.attributes.uv,d=n.attributes.uv2,S=n.groups,p=n.drawRange;if(r!==null)if(Array.isArray(o))for(let y=0,m=S.length;y<m;y++){const R=S[y],U=o[R.materialIndex],I=Math.max(R.start,p.start),T=Math.min(r.count,Math.min(R.start+R.count,p.start+p.count));for(let P=I,b=T;P<b;P+=3){const A=r.getX(P),v=r.getX(P+1),w=r.getX(P+2);c=Dr(this,U,e,ai,f,s,h,l,d,A,v,w),c&&(c.faceIndex=Math.floor(P/3),c.face.materialIndex=R.materialIndex,t.push(c))}}else{const y=Math.max(0,p.start),m=Math.min(r.count,p.start+p.count);for(let R=y,U=m;R<U;R+=3){const I=r.getX(R),T=r.getX(R+1),P=r.getX(R+2);c=Dr(this,o,e,ai,f,s,h,l,d,I,T,P),c&&(c.faceIndex=Math.floor(R/3),t.push(c))}}else if(f!==void 0)if(Array.isArray(o))for(let y=0,m=S.length;y<m;y++){const R=S[y],U=o[R.materialIndex],I=Math.max(R.start,p.start),T=Math.min(f.count,Math.min(R.start+R.count,p.start+p.count));for(let P=I,b=T;P<b;P+=3){const A=P,v=P+1,w=P+2;c=Dr(this,U,e,ai,f,s,h,l,d,A,v,w),c&&(c.faceIndex=Math.floor(P/3),c.face.materialIndex=R.materialIndex,t.push(c))}}else{const y=Math.max(0,p.start),m=Math.min(f.count,p.start+p.count);for(let R=y,U=m;R<U;R+=3){const I=R,T=R+1,P=R+2;c=Dr(this,o,e,ai,f,s,h,l,d,I,T,P),c&&(c.faceIndex=Math.floor(R/3),t.push(c))}}}}function kh(i,e,t,n,o,a,c,r){let f;if(e.side===Rt?f=n.intersectTriangle(c,a,o,!0,r):f=n.intersectTriangle(o,a,c,e.side!==xn,r),f===null)return null;Nr.copy(r),Nr.applyMatrix4(i.matrixWorld);const s=t.ray.origin.distanceTo(Nr);return s<t.near||s>t.far?null:{distance:s,point:Nr.clone(),object:i}}function Dr(i,e,t,n,o,a,c,r,f,s,h,l){pn.fromBufferAttribute(o,s),mn.fromBufferAttribute(o,h),gn.fromBufferAttribute(o,l);const d=i.morphTargetInfluences;if(a&&d){Pr.set(0,0,0),Rr.set(0,0,0),Ir.set(0,0,0);for(let p=0,y=a.length;p<y;p++){const m=d[p],R=a[p];m!==0&&(Yo.fromBufferAttribute(R,s),$o.fromBufferAttribute(R,h),qo.fromBufferAttribute(R,l),c?(Pr.addScaledVector(Yo,m),Rr.addScaledVector($o,m),Ir.addScaledVector(qo,m)):(Pr.addScaledVector(Yo.sub(pn),m),Rr.addScaledVector($o.sub(mn),m),Ir.addScaledVector(qo.sub(gn),m)))}pn.add(Pr),mn.add(Rr),gn.add(Ir)}i.isSkinnedMesh&&(i.boneTransform(s,pn),i.boneTransform(h,mn),i.boneTransform(l,gn));const S=kh(i,e,t,n,pn,mn,gn,Ko);if(S){r&&(Lr.fromBufferAttribute(r,s),Cr.fromBufferAttribute(r,h),Or.fromBufferAttribute(r,l),S.uv=tn.getUV(Ko,pn,mn,gn,Lr,Cr,Or,new He)),f&&(Lr.fromBufferAttribute(f,s),Cr.fromBufferAttribute(f,h),Or.fromBufferAttribute(f,l),S.uv2=tn.getUV(Ko,pn,mn,gn,Lr,Cr,Or,new He));const p={a:s,b:h,c:l,normal:new se,materialIndex:0};tn.getNormal(pn,mn,gn,p.normal),S.face=p}return S}class Li extends on{constructor(e=1,t=1,n=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:c};const r=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],s=[],h=[],l=[];let d=0,S=0;p("z","y","x",-1,-1,n,t,e,c,a,0),p("z","y","x",1,-1,n,t,-e,c,a,1),p("x","z","y",1,1,e,n,t,o,c,2),p("x","z","y",1,-1,e,n,-t,o,c,3),p("x","y","z",1,-1,e,t,n,o,a,4),p("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(f),this.setAttribute("position",new kt(s,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(l,2));function p(y,m,R,U,I,T,P,b,A,v,w){const D=T/A,_=P/v,M=T/2,x=P/2,u=b/2,g=A+1,E=v+1;let L=0,F=0;const O=new se;for(let G=0;G<E;G++){const C=G*_-x;for(let N=0;N<g;N++){const V=N*D-M;O[y]=V*U,O[m]=C*I,O[R]=u,s.push(O.x,O.y,O.z),O[y]=0,O[m]=0,O[R]=b>0?1:-1,h.push(O.x,O.y,O.z),l.push(N/A),l.push(1-G/v),L+=1}}for(let G=0;G<v;G++)for(let C=0;C<A;C++){const N=d+C+g*G,V=d+C+g*(G+1),j=d+(C+1)+g*(G+1),Q=d+(C+1)+g*G;f.push(N,V,Q),f.push(V,j,Q),F+=6}r.addGroup(S,F,w),S+=F,d+=L}}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function dt(i){const e={};for(let t=0;t<i.length;t++){const n=wi(i[t]);for(const o in n)e[o]=n[o]}return e}function Hh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const Wh={clone:wi,merge:dt};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=Hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bl extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends Bl{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,s=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*n/s,o*=c.width/f,n*=c.height/s}const r=this.filmOffset;r!==0&&(a+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=90,ci=1;class Yh extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const o=new At(si,ci,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new se(1,0,0)),this.add(o);const a=new At(si,ci,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new se(-1,0,0)),this.add(a);const c=new At(si,ci,e,t);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(new se(0,1,0)),this.add(c);const r=new At(si,ci,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new se(0,-1,0)),this.add(r);const f=new At(si,ci,e,t);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new se(0,0,1)),this.add(f);const s=new At(si,ci,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new se(0,0,-1)),this.add(s)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[o,a,c,r,f,s]=this.children,h=e.getRenderTarget(),l=e.toneMapping,d=e.xr.enabled;e.toneMapping=nn,e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,o),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,c),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,f),n.texture.generateMipmaps=S,e.setRenderTarget(n,5),e.render(t,s),e.setRenderTarget(h),e.toneMapping=l,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Vl extends xt{constructor(e,t,n,o,a,c,r,f,s,h){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,o,a,c,r,f,s,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Vl(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Li(5,5,5),a=new En({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:bn});a.uniforms.tEquirect.value=t;const c=new Ft(o,a),r=t.minFilter;return t.minFilter===co&&(t.minFilter=wt),new Yh(1,10,this).update(e,c),t.minFilter=r,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,o);e.setRenderTarget(a)}}const Zo=new se,qh=new se,Kh=new Mt;class On{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Zo.subVectors(n,t).cross(qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Zo),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kh.getNormalMatrix(e),o=this.coplanarPoint(Zo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new es,Fr=new se;class zl{constructor(e=new On,t=new On,n=new On,o=new On,a=new On,c=new On){this.planes=[e,t,n,o,a,c]}set(e,t,n,o,a,c){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(o),r[4].copy(a),r[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,o=n[0],a=n[1],c=n[2],r=n[3],f=n[4],s=n[5],h=n[6],l=n[7],d=n[8],S=n[9],p=n[10],y=n[11],m=n[12],R=n[13],U=n[14],I=n[15];return t[0].setComponents(r-o,l-f,y-d,I-m).normalize(),t[1].setComponents(r+o,l+f,y+d,I+m).normalize(),t[2].setComponents(r+a,l+s,y+S,I+R).normalize(),t[3].setComponents(r-a,l-s,y-S,I-R).normalize(),t[4].setComponents(r-c,l-h,y-p,I-U).normalize(),t[5].setComponents(r+c,l+h,y+p,I+U).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Fr.x=o.normal.x>0?e.max.x:e.min.x,Fr.y=o.normal.y>0?e.max.y:e.min.y,Fr.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kl(){let i=null,e=!1,t=null,n=null;function o(a,c){t(a,c),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Zh(i,e){const t=e.isWebGL2,n=new WeakMap;function o(s,h){const l=s.array,d=s.usage,S=i.createBuffer();i.bindBuffer(h,S),i.bufferData(h,l,d),s.onUploadCallback();let p;if(l instanceof Float32Array)p=5126;else if(l instanceof Uint16Array)if(s.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(l instanceof Int16Array)p=5122;else if(l instanceof Uint32Array)p=5125;else if(l instanceof Int32Array)p=5124;else if(l instanceof Int8Array)p=5120;else if(l instanceof Uint8Array)p=5121;else if(l instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:S,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version}}function a(s,h,l){const d=h.array,S=h.updateRange;i.bindBuffer(l,s),S.count===-1?i.bufferSubData(l,0,d):(t?i.bufferSubData(l,S.offset*d.BYTES_PER_ELEMENT,d,S.offset,S.count):i.bufferSubData(l,S.offset*d.BYTES_PER_ELEMENT,d.subarray(S.offset,S.offset+S.count)),S.count=-1)}function c(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const h=n.get(s);h&&(i.deleteBuffer(h.buffer),n.delete(s))}function f(s,h){if(s.isGLBufferAttribute){const d=n.get(s);(!d||d.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const l=n.get(s);l===void 0?n.set(s,o(s,h)):l.version<s.version&&(a(l.buffer,s,h),l.version=s.version)}return{get:c,remove:r,update:f}}class ts extends on{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,c=t/2,r=Math.floor(n),f=Math.floor(o),s=r+1,h=f+1,l=e/r,d=t/f,S=[],p=[],y=[],m=[];for(let R=0;R<h;R++){const U=R*d-c;for(let I=0;I<s;I++){const T=I*l-a;p.push(T,-U,0),y.push(0,0,1),m.push(I/r),m.push(1-R/f)}}for(let R=0;R<f;R++)for(let U=0;U<r;U++){const I=U+s*R,T=U+s*(R+1),P=U+1+s*(R+1),b=U+1+s*R;S.push(I,T,b),S.push(T,P,b)}this.setIndex(S),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(y,3)),this.setAttribute("uv",new kt(m,2))}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp="vec3 transformed = vec3( position );",op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$p=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,dm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Hm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Wm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Xm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,jm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$m=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ng=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,og=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:Jh,alphamap_pars_fragment:Qh,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,begin_vertex:rp,beginnormal_vertex:op,bsdfs:ap,iridescence_fragment:sp,bumpmap_pars_fragment:cp,clipping_planes_fragment:lp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:fp,clipping_planes_vertex:dp,color_fragment:hp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,cube_uv_reflection_fragment:vp,defaultnormal_vertex:yp,displacementmap_pars_vertex:xp,displacementmap_vertex:bp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Sp,encodings_fragment:Ep,encodings_pars_fragment:wp,envmap_fragment:Ap,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Pp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:zp,envmap_vertex:Ip,fog_vertex:Lp,fog_pars_vertex:Cp,fog_fragment:Op,fog_pars_fragment:Np,gradientmap_pars_fragment:Dp,lightmap_fragment:Fp,lightmap_pars_fragment:Up,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Bp,lights_pars_begin:Vp,lights_toon_fragment:kp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:jp,lights_physical_pars_fragment:Yp,lights_fragment_begin:$p,lights_fragment_maps:qp,lights_fragment_end:Kp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:em,map_fragment:tm,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:am,morphcolor_vertex:sm,morphnormal_vertex:cm,morphtarget_pars_vertex:lm,morphtarget_vertex:um,normal_fragment_begin:fm,normal_fragment_maps:dm,normal_pars_fragment:hm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:xm,output_fragment:bm,packing:Tm,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:wm,dithering_pars_fragment:Am,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Im,shadowmap_vertex:Lm,shadowmask_pars_fragment:Cm,skinbase_vertex:Om,skinning_pars_vertex:Nm,skinning_vertex:Dm,skinnormal_vertex:Fm,specularmap_fragment:Um,specularmap_pars_fragment:Gm,tonemapping_fragment:Bm,tonemapping_pars_fragment:Vm,transmission_fragment:zm,transmission_pars_fragment:km,uv_pars_fragment:Hm,uv_pars_vertex:Wm,uv_vertex:Xm,uv2_pars_fragment:jm,uv2_pars_vertex:Ym,uv2_vertex:$m,worldpos_vertex:qm,background_vert:Km,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:rg,distanceRGBA_frag:og,equirect_vert:ag,equirect_frag:sg,linedashed_vert:cg,linedashed_frag:lg,meshbasic_vert:ug,meshbasic_frag:fg,meshlambert_vert:dg,meshlambert_frag:hg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:vg,meshphong_frag:yg,meshphysical_vert:xg,meshphysical_frag:bg,meshtoon_vert:Tg,meshtoon_frag:Sg,points_vert:Eg,points_frag:wg,shadow_vert:Ag,shadow_frag:Mg,sprite_vert:Pg,sprite_frag:Rg},be={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Mt},uv2Transform:{value:new Mt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mt}}},zt={basic:{uniforms:dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:dt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:dt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:dt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:dt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:dt([be.points,be.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:dt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:dt([be.common,be.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:dt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:dt([be.sprite,be.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:dt([be.common,be.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:dt([be.lights,be.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};zt.physical={uniforms:dt([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new He(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};function Ig(i,e,t,n,o,a,c){const r=new je(0);let f=a===!0?0:1,s,h,l=null,d=0,S=null;function p(m,R){let U=!1,I=R.isScene===!0?R.background:null;I&&I.isTexture&&(I=(R.backgroundBlurriness>0?t:e).get(I));const T=i.xr,P=T.getSession&&T.getSession();P&&P.environmentBlendMode==="additive"&&(I=null),I===null?y(r,f):I&&I.isColor&&(y(I,1),U=!0),(i.autoClear||U)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),I&&(I.isCubeTexture||I.mapping===so)?(h===void 0&&(h=new Ft(new Li(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:wi(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(h)),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,(l!==I||d!==I.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,l=I,d=I.version,S=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(s===void 0&&(s=new Ft(new ts(2,2),new En({name:"BackgroundMaterial",uniforms:wi(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(s)),s.material.uniforms.t2D.value=I,I.matrixAutoUpdate===!0&&I.updateMatrix(),s.material.uniforms.uvTransform.value.copy(I.matrix),(l!==I||d!==I.version||S!==i.toneMapping)&&(s.material.needsUpdate=!0,l=I,d=I.version,S=i.toneMapping),s.layers.enableAll(),m.unshift(s,s.geometry,s.material,0,0,null))}function y(m,R){n.buffers.color.setClear(m.r,m.g,m.b,R,c)}return{getClearColor:function(){return r},setClearColor:function(m,R=1){r.set(m),f=R,y(r,f)},getClearAlpha:function(){return f},setClearAlpha:function(m){f=m,y(r,f)},render:p}}function Lg(i,e,t,n){const o=i.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,r={},f=m(null);let s=f,h=!1;function l(u,g,E,L,F){let O=!1;if(c){const G=y(L,E,g);s!==G&&(s=G,S(s.object)),O=R(u,L,E,F),O&&U(u,L,E,F)}else{const G=g.wireframe===!0;(s.geometry!==L.id||s.program!==E.id||s.wireframe!==G)&&(s.geometry=L.id,s.program=E.id,s.wireframe=G,O=!0)}F!==null&&t.update(F,34963),(O||h)&&(h=!1,v(u,g,E,L),F!==null&&i.bindBuffer(34963,t.get(F).buffer))}function d(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function S(u){return n.isWebGL2?i.bindVertexArray(u):a.bindVertexArrayOES(u)}function p(u){return n.isWebGL2?i.deleteVertexArray(u):a.deleteVertexArrayOES(u)}function y(u,g,E){const L=E.wireframe===!0;let F=r[u.id];F===void 0&&(F={},r[u.id]=F);let O=F[g.id];O===void 0&&(O={},F[g.id]=O);let G=O[L];return G===void 0&&(G=m(d()),O[L]=G),G}function m(u){const g=[],E=[],L=[];for(let F=0;F<o;F++)g[F]=0,E[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:E,attributeDivisors:L,object:u,attributes:{},index:null}}function R(u,g,E,L){const F=s.attributes,O=g.attributes;let G=0;const C=E.getAttributes();for(const N in C)if(C[N].location>=0){const j=F[N];let Q=O[N];if(Q===void 0&&(N==="instanceMatrix"&&u.instanceMatrix&&(Q=u.instanceMatrix),N==="instanceColor"&&u.instanceColor&&(Q=u.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function U(u,g,E,L){const F={},O=g.attributes;let G=0;const C=E.getAttributes();for(const N in C)if(C[N].location>=0){let j=O[N];j===void 0&&(N==="instanceMatrix"&&u.instanceMatrix&&(j=u.instanceMatrix),N==="instanceColor"&&u.instanceColor&&(j=u.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),F[N]=Q,G++}s.attributes=F,s.attributesNum=G,s.index=L}function I(){const u=s.newAttributes;for(let g=0,E=u.length;g<E;g++)u[g]=0}function T(u){P(u,0)}function P(u,g){const E=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;E[u]=1,L[u]===0&&(i.enableVertexAttribArray(u),L[u]=1),F[u]!==g&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](u,g),F[u]=g)}function b(){const u=s.newAttributes,g=s.enabledAttributes;for(let E=0,L=g.length;E<L;E++)g[E]!==u[E]&&(i.disableVertexAttribArray(E),g[E]=0)}function A(u,g,E,L,F,O){n.isWebGL2===!0&&(E===5124||E===5125)?i.vertexAttribIPointer(u,g,E,F,O):i.vertexAttribPointer(u,g,E,L,F,O)}function v(u,g,E,L){if(n.isWebGL2===!1&&(u.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;I();const F=L.attributes,O=E.getAttributes(),G=g.defaultAttributeValues;for(const C in O){const N=O[C];if(N.location>=0){let V=F[C];if(V===void 0&&(C==="instanceMatrix"&&u.instanceMatrix&&(V=u.instanceMatrix),C==="instanceColor"&&u.instanceColor&&(V=u.instanceColor)),V!==void 0){const j=V.normalized,Q=V.itemSize,H=t.get(V);if(H===void 0)continue;const q=H.buffer,J=H.type,oe=H.bytesPerElement;if(V.isInterleavedBufferAttribute){const K=V.data,he=K.stride,z=V.offset;if(K.isInstancedInterleavedBuffer){for(let $=0;$<N.locationSize;$++)P(N.location+$,K.meshPerAttribute);u.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let $=0;$<N.locationSize;$++)T(N.location+$);i.bindBuffer(34962,q);for(let $=0;$<N.locationSize;$++)A(N.location+$,Q/N.locationSize,J,j,he*oe,(z+Q/N.locationSize*$)*oe)}else{if(V.isInstancedBufferAttribute){for(let K=0;K<N.locationSize;K++)P(N.location+K,V.meshPerAttribute);u.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let K=0;K<N.locationSize;K++)T(N.location+K);i.bindBuffer(34962,q);for(let K=0;K<N.locationSize;K++)A(N.location+K,Q/N.locationSize,J,j,Q*oe,Q/N.locationSize*K*oe)}}else if(G!==void 0){const j=G[C];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(N.location,j);break;case 3:i.vertexAttrib3fv(N.location,j);break;case 4:i.vertexAttrib4fv(N.location,j);break;default:i.vertexAttrib1fv(N.location,j)}}}}b()}function w(){M();for(const u in r){const g=r[u];for(const E in g){const L=g[E];for(const F in L)p(L[F].object),delete L[F];delete g[E]}delete r[u]}}function D(u){if(r[u.id]===void 0)return;const g=r[u.id];for(const E in g){const L=g[E];for(const F in L)p(L[F].object),delete L[F];delete g[E]}delete r[u.id]}function _(u){for(const g in r){const E=r[g];if(E[u.id]===void 0)continue;const L=E[u.id];for(const F in L)p(L[F].object),delete L[F];delete E[u.id]}}function M(){x(),h=!0,s!==f&&(s=f,S(s.object))}function x(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:l,reset:M,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:_,initAttributes:I,enableAttribute:T,disableUnusedAttributes:b}}function Cg(i,e,t,n){const o=n.isWebGL2;let a;function c(s){a=s}function r(s,h){i.drawArrays(a,s,h),t.update(h,a,1)}function f(s,h,l){if(l===0)return;let d,S;if(o)d=i,S="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[S](a,s,h,l),t.update(h,a,l)}this.setMode=c,this.render=r,this.renderInstances=f}function Og(i,e,t){let n;function o(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let r=t.precision!==void 0?t.precision:"highp";const f=a(r);f!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",f,"instead."),r=f);const s=c||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,l=i.getParameter(34930),d=i.getParameter(35660),S=i.getParameter(3379),p=i.getParameter(34076),y=i.getParameter(34921),m=i.getParameter(36347),R=i.getParameter(36348),U=i.getParameter(36349),I=d>0,T=c||e.has("OES_texture_float"),P=I&&T,b=c?i.getParameter(36183):0;return{isWebGL2:c,drawBuffers:s,getMaxAnisotropy:o,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:d,maxTextureSize:S,maxCubemapSize:p,maxAttributes:y,maxVertexUniforms:m,maxVaryings:R,maxFragmentUniforms:U,vertexTextures:I,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:b}}function Ng(i){const e=this;let t=null,n=0,o=!1,a=!1;const c=new On,r=new Mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d,S){const p=l.length!==0||d||n!==0||o;return o=d,t=h(l,S,0),n=l.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1,s()},this.setState=function(l,d,S){const p=l.clippingPlanes,y=l.clipIntersection,m=l.clipShadows,R=i.get(l);if(!o||p===null||p.length===0||a&&!m)a?h(null):s();else{const U=a?0:n,I=U*4;let T=R.clippingState||null;f.value=T,T=h(p,d,I,S);for(let P=0;P!==I;++P)T[P]=t[P];R.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=U}};function s(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(l,d,S,p){const y=l!==null?l.length:0;let m=null;if(y!==0){if(m=f.value,p!==!0||m===null){const R=S+y*4,U=d.matrixWorldInverse;r.getNormalMatrix(U),(m===null||m.length<R)&&(m=new Float32Array(R));for(let I=0,T=S;I!==y;++I,T+=4)c.copy(l[I]).applyMatrix4(U,r),c.normal.toArray(m,T),m[T+3]=c.constant}f.value=m,f.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Dg(i){let e=new WeakMap;function t(c,r){return r===Pa?c.mapping=Ti:r===Ra&&(c.mapping=Si),c}function n(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const r=c.mapping;if(r===Pa||r===Ra)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const s=new $h(f.height/2);return s.fromEquirectangularTexture(i,c),e.set(c,s),c.addEventListener("dispose",o),t(s.texture,c.mapping)}else return null}}return c}function o(c){const r=c.target;r.removeEventListener("dispose",o);const f=e.get(r);f!==void 0&&(e.delete(r),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Fg extends Bl{constructor(e=-1,t=1,n=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,c=n+e,r=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const s=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=s*this.view.offsetX,c=a+s*this.view.width,r-=h*this.view.offsetY,f=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,c,r,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mi=4,sc=[.125,.215,.35,.446,.526,.582],Fn=20,Jo=new Fg,cc=new je;let Qo=null;const Nn=(1+Math.sqrt(5))/2,ui=1/Nn,lc=[new se(1,1,1),new se(-1,1,1),new se(1,1,-1),new se(-1,1,-1),new se(0,Nn,ui),new se(0,Nn,-ui),new se(ui,0,Nn),new se(-ui,0,Nn),new se(Nn,ui,0),new se(-Nn,ui,0)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100){Qo=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo),e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:er,format:Dt,encoding:Wn,depthBuffer:!1},o=fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(a)),this._blurMaterial=Gg(a,e,t)}return o}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,n,o){const r=new At(90,1,t,n),f=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(cc),h.toneMapping=nn,h.autoClear=!1;const S=new Fl({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),p=new Ft(new Li,S);let y=!1;const m=e.background;m?m.isColor&&(S.color.copy(m),e.background=null,y=!0):(S.color.copy(cc),y=!0);for(let R=0;R<6;R++){const U=R%3;U===0?(r.up.set(0,f[R],0),r.lookAt(s[R],0,0)):U===1?(r.up.set(0,0,f[R]),r.lookAt(0,s[R],0)):(r.up.set(0,f[R],0),r.lookAt(0,0,s[R]));const I=this._cubeSize;Ur(o,U*I,R>2?I:0,I,I),h.setRenderTarget(o),y&&h.render(p,r),h.render(e,r)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=l,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===Ti||e.mapping===Si;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new Ft(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=e;const f=this._cubeSize;Ur(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(c,Jo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=lc[(o-1)%lc.length];this._blur(e,o-1,o,a,c)}t.autoClear=n}_blur(e,t,n,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,o,"latitudinal",a),this._halfBlur(c,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,c,r){const f=this._renderer,s=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Ft(this._lodPlanes[o],s),d=s.uniforms,S=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Fn-1),y=a/p,m=isFinite(a)?1+Math.floor(h*y):Fn;m>Fn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const R=[];let U=0;for(let A=0;A<Fn;++A){const v=A/y,w=Math.exp(-v*v/2);R.push(w),A===0?U+=w:A<m&&(U+=2*w)}for(let A=0;A<R.length;A++)R[A]=R[A]/U;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=R,d.latitudinal.value=c==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:I}=this;d.dTheta.value=p,d.mipInt.value=I-n;const T=this._sizeLods[o],P=3*T*(o>I-mi?o-I+mi:0),b=4*(this._cubeSize-T);Ur(t,P,b,3*T,2*T),f.setRenderTarget(t),f.render(l,Jo)}}function Ug(i){const e=[],t=[],n=[];let o=i;const a=i-mi+1+sc.length;for(let c=0;c<a;c++){const r=Math.pow(2,o);t.push(r);let f=1/r;c>i-mi?f=sc[c-i+mi-1]:c===0&&(f=0),n.push(f);const s=1/(r-2),h=-s,l=1+s,d=[h,h,l,h,l,l,h,h,l,l,h,l],S=6,p=6,y=3,m=2,R=1,U=new Float32Array(y*p*S),I=new Float32Array(m*p*S),T=new Float32Array(R*p*S);for(let b=0;b<S;b++){const A=b%3*2/3-1,v=b>2?0:-1,w=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];U.set(w,y*p*b),I.set(d,m*p*b);const D=[b,b,b,b,b,b];T.set(D,R*p*b)}const P=new on;P.setAttribute("position",new Ut(U,y)),P.setAttribute("uv",new Ut(I,m)),P.setAttribute("faceIndex",new Ut(T,R)),e.push(P),o>mi&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fc(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Gg(i,e,t){const n=new Float32Array(Fn),o=new se(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function dc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function hc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ns(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bg(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const f=r.mapping,s=f===Pa||f===Ra,h=f===Ti||f===Si;if(s||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new uc(i)),l=s?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}else{if(e.has(r))return e.get(r).texture;{const l=r.image;if(s&&l&&l.height>0||h&&l&&o(l)){t===null&&(t=new uc(i));const d=s?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,d),r.addEventListener("dispose",a),d.texture}else return null}}}return r}function o(r){let f=0;const s=6;for(let h=0;h<s;h++)r[h]!==void 0&&f++;return f===s}function a(r){const f=r.target;f.removeEventListener("dispose",a);const s=e.get(f);s!==void 0&&(e.delete(f),s.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Vg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const o=t(n);return o===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function zg(i,e,t,n){const o={},a=new WeakMap;function c(l){const d=l.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",c),delete o[d.id];const S=a.get(d);S&&(e.remove(S),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function r(l,d){return o[d.id]===!0||(d.addEventListener("dispose",c),o[d.id]=!0,t.memory.geometries++),d}function f(l){const d=l.attributes;for(const p in d)e.update(d[p],34962);const S=l.morphAttributes;for(const p in S){const y=S[p];for(let m=0,R=y.length;m<R;m++)e.update(y[m],34962)}}function s(l){const d=[],S=l.index,p=l.attributes.position;let y=0;if(S!==null){const U=S.array;y=S.version;for(let I=0,T=U.length;I<T;I+=3){const P=U[I+0],b=U[I+1],A=U[I+2];d.push(P,b,b,A,A,P)}}else{const U=p.array;y=p.version;for(let I=0,T=U.length/3-1;I<T;I+=3){const P=I+0,b=I+1,A=I+2;d.push(P,b,b,A,A,P)}}const m=new(Il(d)?Gl:Ul)(d,1);m.version=y;const R=a.get(l);R&&e.remove(R),a.set(l,m)}function h(l){const d=a.get(l);if(d){const S=l.index;S!==null&&d.version<S.version&&s(l)}else s(l);return a.get(l)}return{get:r,update:f,getWireframeAttribute:h}}function kg(i,e,t,n){const o=n.isWebGL2;let a;function c(d){a=d}let r,f;function s(d){r=d.type,f=d.bytesPerElement}function h(d,S){i.drawElements(a,S,r,d*f),t.update(S,a,1)}function l(d,S,p){if(p===0)return;let y,m;if(o)y=i,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](a,S,r,d*f,p),t.update(S,a,p)}this.setMode=c,this.setIndex=s,this.render=h,this.renderInstances=l}function Hg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,r){switch(t.calls++,c){case 4:t.triangles+=r*(a/3);break;case 1:t.lines+=r*(a/2);break;case 3:t.lines+=r*(a-1);break;case 2:t.lines+=r*a;break;case 0:t.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Wg(i,e){return i[0]-e[0]}function Xg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function jg(i,e,t){const n={},o=new Float32Array(8),a=new WeakMap,c=new ct,r=[];for(let s=0;s<8;s++)r[s]=[s,0];function f(s,h,l,d){const S=s.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=p!==void 0?p.length:0;let m=a.get(h);if(m===void 0||m.count!==y){let g=function(){x.dispose(),a.delete(h),h.removeEventListener("dispose",g)};m!==void 0&&m.texture.dispose();const I=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],v=h.morphAttributes.color||[];let w=0;I===!0&&(w=1),T===!0&&(w=2),P===!0&&(w=3);let D=h.attributes.position.count*w,_=1;D>e.maxTextureSize&&(_=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const M=new Float32Array(D*_*4*y),x=new Nl(M,D,_,y);x.type=Gn,x.needsUpdate=!0;const u=w*4;for(let E=0;E<y;E++){const L=b[E],F=A[E],O=v[E],G=D*_*4*E;for(let C=0;C<L.count;C++){const N=C*u;I===!0&&(c.fromBufferAttribute(L,C),M[G+N+0]=c.x,M[G+N+1]=c.y,M[G+N+2]=c.z,M[G+N+3]=0),T===!0&&(c.fromBufferAttribute(F,C),M[G+N+4]=c.x,M[G+N+5]=c.y,M[G+N+6]=c.z,M[G+N+7]=0),P===!0&&(c.fromBufferAttribute(O,C),M[G+N+8]=c.x,M[G+N+9]=c.y,M[G+N+10]=c.z,M[G+N+11]=O.itemSize===4?c.w:1)}}m={count:y,texture:x,size:new He(D,_)},a.set(h,m),h.addEventListener("dispose",g)}let R=0;for(let I=0;I<S.length;I++)R+=S[I];const U=h.morphTargetsRelative?1:1-R;d.getUniforms().setValue(i,"morphTargetBaseInfluence",U),d.getUniforms().setValue(i,"morphTargetInfluences",S),d.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const p=S===void 0?0:S.length;let y=n[h.id];if(y===void 0||y.length!==p){y=[];for(let T=0;T<p;T++)y[T]=[T,0];n[h.id]=y}for(let T=0;T<p;T++){const P=y[T];P[0]=T,P[1]=S[T]}y.sort(Xg);for(let T=0;T<8;T++)T<p&&y[T][1]?(r[T][0]=y[T][0],r[T][1]=y[T][1]):(r[T][0]=Number.MAX_SAFE_INTEGER,r[T][1]=0);r.sort(Wg);const m=h.morphAttributes.position,R=h.morphAttributes.normal;let U=0;for(let T=0;T<8;T++){const P=r[T],b=P[0],A=P[1];b!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+T)!==m[b]&&h.setAttribute("morphTarget"+T,m[b]),R&&h.getAttribute("morphNormal"+T)!==R[b]&&h.setAttribute("morphNormal"+T,R[b]),o[T]=A,U+=A):(m&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),R&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),o[T]=0)}const I=h.morphTargetsRelative?1:1-U;d.getUniforms().setValue(i,"morphTargetBaseInfluence",I),d.getUniforms().setValue(i,"morphTargetInfluences",o)}}return{update:f}}function Yg(i,e,t,n){let o=new WeakMap;function a(f){const s=n.render.frame,h=f.geometry,l=e.get(f,h);return o.get(l)!==s&&(e.update(l),o.set(l,s)),f.isInstancedMesh&&(f.hasEventListener("dispose",r)===!1&&f.addEventListener("dispose",r),t.update(f.instanceMatrix,34962),f.instanceColor!==null&&t.update(f.instanceColor,34962)),l}function c(){o=new WeakMap}function r(f){const s=f.target;s.removeEventListener("dispose",r),t.remove(s.instanceMatrix),s.instanceColor!==null&&t.remove(s.instanceColor)}return{update:a,dispose:c}}const Hl=new xt,Wl=new Nl,Xl=new Lh,jl=new Vl,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function Ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let a=pc[o];if(a===void 0&&(a=new Float32Array(o),pc[o]=a),e!==0){n.toArray(a,0);for(let c=1,r=0;c!==e;++c)r+=t,i[c].toArray(a,r)}return a}function tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uo(i,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2fv(this.addr,e),nt(t,e)}}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;i.uniform3fv(this.addr,e),nt(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4fv(this.addr,e),nt(t,e)}}function Jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),nt(t,n)}}function Qg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),nt(t,n)}}function e_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),nt(t,n)}}function t_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function n_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2iv(this.addr,e),nt(t,e)}}function i_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;i.uniform3iv(this.addr,e),nt(t,e)}}function r_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4iv(this.addr,e),nt(t,e)}}function o_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2uiv(this.addr,e),nt(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;i.uniform3uiv(this.addr,e),nt(t,e)}}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4uiv(this.addr,e),nt(t,e)}}function l_(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2D(e||Hl,o)}function u_(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Xl,o)}function f_(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||jl,o)}function d_(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||Wl,o)}function h_(i){switch(i){case 5126:return $g;case 35664:return qg;case 35665:return Kg;case 35666:return Zg;case 35674:return Jg;case 35675:return Qg;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return s_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return d_}}function p_(i,e){i.uniform1fv(this.addr,e)}function m_(i,e){const t=Ci(e,this.size,2);i.uniform2fv(this.addr,t)}function g_(i,e){const t=Ci(e,this.size,3);i.uniform3fv(this.addr,t)}function __(i,e){const t=Ci(e,this.size,4);i.uniform4fv(this.addr,t)}function v_(i,e){const t=Ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y_(i,e){const t=Ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function x_(i,e){const t=Ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function b_(i,e){i.uniform1iv(this.addr,e)}function T_(i,e){i.uniform2iv(this.addr,e)}function S_(i,e){i.uniform3iv(this.addr,e)}function E_(i,e){i.uniform4iv(this.addr,e)}function w_(i,e){i.uniform1uiv(this.addr,e)}function A_(i,e){i.uniform2uiv(this.addr,e)}function M_(i,e){i.uniform3uiv(this.addr,e)}function P_(i,e){i.uniform4uiv(this.addr,e)}function R_(i,e,t){const n=this.cache,o=e.length,a=uo(t,o);tt(n,a)||(i.uniform1iv(this.addr,a),nt(n,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Hl,a[c])}function I_(i,e,t){const n=this.cache,o=e.length,a=uo(t,o);tt(n,a)||(i.uniform1iv(this.addr,a),nt(n,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Xl,a[c])}function L_(i,e,t){const n=this.cache,o=e.length,a=uo(t,o);tt(n,a)||(i.uniform1iv(this.addr,a),nt(n,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||jl,a[c])}function C_(i,e,t){const n=this.cache,o=e.length,a=uo(t,o);tt(n,a)||(i.uniform1iv(this.addr,a),nt(n,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Wl,a[c])}function O_(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return v_;case 35675:return y_;case 35676:return x_;case 5124:case 35670:return b_;case 35667:case 35671:return T_;case 35668:case 35672:return S_;case 35669:case 35673:return E_;case 5125:return w_;case 36294:return A_;case 36295:return M_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return C_}}class N_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=h_(t.type)}}class D_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=O_(t.type)}}class F_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const r=o[a];r.setValue(e,t[r.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function yc(i,e){i.seq.push(e),i.map[e.id]=e}function U_(i,e,t){const n=i.name,o=n.length;for(ea.lastIndex=0;;){const a=ea.exec(n),c=ea.lastIndex;let r=a[1];const f=a[2]==="]",s=a[3];if(f&&(r=r|0),s===void 0||s==="["&&c+2===o){yc(t,s===void 0?new N_(r,i,e):new D_(r,i,e));break}else{let l=t.map[r];l===void 0&&(l=new F_(r),yc(t,l)),t=l}}}class Hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);U_(a,c,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,c=t.length;a!==c;++a){const r=t[a],f=n[r.id];f.needsUpdate!==!1&&r.setValue(e,f.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&n.push(c)}return n}}function xc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let G_=0;function B_(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const r=c+1;n.push(`${r===e?">":" "} ${r}: ${t[c]}`)}return n.join(`
`)}function V_(i){switch(i){case Wn:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function bc(i,e,t){const n=i.getShaderParameter(e,35713),o=i.getShaderInfoLog(e).trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+B_(i.getShaderSource(e),c)}else return o}function z_(i,e){const t=V_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function k_(i,e){let t;switch(e){case ih:t="Linear";break;case rh:t="Reinhard";break;case oh:t="OptimizedCineon";break;case ah:t="ACESFilmic";break;case sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function H_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function W_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X_(i,e){const t={},n=i.getProgramParameter(e,35721);for(let o=0;o<n;o++){const a=i.getActiveAttrib(e,o),c=a.name;let r=1;a.type===35674&&(r=2),a.type===35675&&(r=3),a.type===35676&&(r=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:r}}return t}function ji(i){return i!==""}function Tc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(j_,Y_)}function Y_(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Da(t)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace($_,q_)}function q_(i,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function wc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Z_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Si:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function Q_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ml:e="ENVMAP_BLENDING_MULTIPLY";break;case th:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function ev(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tv(i,e,t,n){const o=i.getContext(),a=t.defines;let c=t.vertexShader,r=t.fragmentShader;const f=K_(t),s=Z_(t),h=J_(t),l=Q_(t),d=ev(t),S=t.isWebGL2?"":H_(t),p=W_(a),y=o.createProgram();let m,R,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[p].filter(ji).join(`
`),m.length>0&&(m+=`
`),R=[S,p].filter(ji).join(`
`),R.length>0&&(R+=`
`)):(m=[wc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),R=[S,wc(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+s:"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==nn?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,z_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),c=Da(c),c=Tc(c,t),c=Sc(c,t),r=Da(r),r=Tc(r,t),r=Sc(r,t),c=Ec(c),r=Ec(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,R=["#define varying in",t.glslVersion===$s?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const I=U+m+c,T=U+R+r,P=xc(o,35633,I),b=xc(o,35632,T);if(o.attachShader(y,P),o.attachShader(y,b),t.index0AttributeName!==void 0?o.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y),i.debug.checkShaderErrors){const w=o.getProgramInfoLog(y).trim(),D=o.getShaderInfoLog(P).trim(),_=o.getShaderInfoLog(b).trim();let M=!0,x=!0;if(o.getProgramParameter(y,35714)===!1){M=!1;const u=bc(o,P,"vertex"),g=bc(o,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,35715)+`

Program Info Log: `+w+`
`+u+`
`+g)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||_==="")&&(x=!1);x&&(this.diagnostics={runnable:M,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:_,prefix:R}})}o.deleteShader(P),o.deleteShader(b);let A;this.getUniforms=function(){return A===void 0&&(A=new Hr(o,y)),A};let v;return this.getAttributes=function(){return v===void 0&&(v=X_(o,y)),v},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=G_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=b,this}let nv=0;class iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rv(e),t.set(e,n)),n}}class rv{constructor(e){this.id=nv++,this.code=e,this.usedTimes=0}}function ov(i,e,t,n,o,a,c){const r=new Dl,f=new iv,s=[],h=o.isWebGL2,l=o.logarithmicDepthBuffer,d=o.vertexTextures;let S=o.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v,w,D,_,M){const x=_.fog,u=M.geometry,g=v.isMeshStandardMaterial?_.environment:null,E=(v.isMeshStandardMaterial?t:e).get(v.envMap||g),L=E&&E.mapping===so?E.image.height:null,F=p[v.type];v.precision!==null&&(S=o.getMaxPrecision(v.precision),S!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",S,"instead."));const O=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,G=O!==void 0?O.length:0;let C=0;u.morphAttributes.position!==void 0&&(C=1),u.morphAttributes.normal!==void 0&&(C=2),u.morphAttributes.color!==void 0&&(C=3);let N,V,j,Q;if(F){const he=zt[F];N=he.vertexShader,V=he.fragmentShader}else N=v.vertexShader,V=v.fragmentShader,f.update(v),j=f.getVertexShaderID(v),Q=f.getFragmentShaderID(v);const H=i.getRenderTarget(),q=v.alphaTest>0,J=v.clearcoat>0,oe=v.iridescence>0;return{isWebGL2:h,shaderID:F,shaderName:v.type,vertexShader:N,fragmentShader:V,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:S,instancing:M.isInstancedMesh===!0,instancingColor:M.isInstancedMesh===!0&&M.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?i.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Wn,map:!!v.map,matcap:!!v.matcap,envMap:!!E,envMapMode:E&&E.mapping,envMapCubeUVHeight:L,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Mh,tangentSpaceNormalMap:v.normalMapType===Ah,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ke,clearcoat:J,clearcoatMap:J&&!!v.clearcoatMap,clearcoatRoughnessMap:J&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!v.clearcoatNormalMap,iridescence:oe,iridescenceMap:oe&&!!v.iridescenceMap,iridescenceThicknessMap:oe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===gi,alphaMap:!!v.alphaMap,alphaTest:q,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!u.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!x,useFog:v.fog===!0,fogExp2:x&&x.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:l,skinning:M.isSkinnedMesh===!0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:C,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:nn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xn,flipSided:v.side===Rt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(R(w,v),U(w,v),w.push(i.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function R(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function U(v,w){r.disableAll(),w.isWebGL2&&r.enable(0),w.supportsVertexTextures&&r.enable(1),w.instancing&&r.enable(2),w.instancingColor&&r.enable(3),w.map&&r.enable(4),w.matcap&&r.enable(5),w.envMap&&r.enable(6),w.lightMap&&r.enable(7),w.aoMap&&r.enable(8),w.emissiveMap&&r.enable(9),w.bumpMap&&r.enable(10),w.normalMap&&r.enable(11),w.objectSpaceNormalMap&&r.enable(12),w.tangentSpaceNormalMap&&r.enable(13),w.clearcoat&&r.enable(14),w.clearcoatMap&&r.enable(15),w.clearcoatRoughnessMap&&r.enable(16),w.clearcoatNormalMap&&r.enable(17),w.iridescence&&r.enable(18),w.iridescenceMap&&r.enable(19),w.iridescenceThicknessMap&&r.enable(20),w.displacementMap&&r.enable(21),w.specularMap&&r.enable(22),w.roughnessMap&&r.enable(23),w.metalnessMap&&r.enable(24),w.gradientMap&&r.enable(25),w.alphaMap&&r.enable(26),w.alphaTest&&r.enable(27),w.vertexColors&&r.enable(28),w.vertexAlphas&&r.enable(29),w.vertexUvs&&r.enable(30),w.vertexTangents&&r.enable(31),w.uvsVertexOnly&&r.enable(32),v.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.skinning&&r.enable(4),w.morphTargets&&r.enable(5),w.morphNormals&&r.enable(6),w.morphColors&&r.enable(7),w.premultipliedAlpha&&r.enable(8),w.shadowMapEnabled&&r.enable(9),w.physicallyCorrectLights&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.specularIntensityMap&&r.enable(15),w.specularColorMap&&r.enable(16),w.transmission&&r.enable(17),w.transmissionMap&&r.enable(18),w.thicknessMap&&r.enable(19),w.sheen&&r.enable(20),w.sheenColorMap&&r.enable(21),w.sheenRoughnessMap&&r.enable(22),w.decodeVideoTexture&&r.enable(23),w.opaque&&r.enable(24),v.push(r.mask)}function I(v){const w=p[v.type];let D;if(w){const _=zt[w];D=Wh.clone(_.uniforms)}else D=v.uniforms;return D}function T(v,w){let D;for(let _=0,M=s.length;_<M;_++){const x=s[_];if(x.cacheKey===w){D=x,++D.usedTimes;break}}return D===void 0&&(D=new tv(i,w,v,a),s.push(D)),D}function P(v){if(--v.usedTimes===0){const w=s.indexOf(v);s[w]=s[s.length-1],s.pop(),v.destroy()}}function b(v){f.remove(v)}function A(){f.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:I,acquireProgram:T,releaseProgram:P,releaseShaderCache:b,programs:s,dispose:A}}function av(){let i=new WeakMap;function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function t(a){i.delete(a)}function n(a,c,r){i.get(a)[c]=r}function o(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:o}}function sv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ac(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mc(){const i=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function c(l,d,S,p,y,m){let R=i[e];return R===void 0?(R={id:l.id,object:l,geometry:d,material:S,groupOrder:p,renderOrder:l.renderOrder,z:y,group:m},i[e]=R):(R.id=l.id,R.object=l,R.geometry=d,R.material=S,R.groupOrder=p,R.renderOrder=l.renderOrder,R.z=y,R.group=m),e++,R}function r(l,d,S,p,y,m){const R=c(l,d,S,p,y,m);S.transmission>0?n.push(R):S.transparent===!0?o.push(R):t.push(R)}function f(l,d,S,p,y,m){const R=c(l,d,S,p,y,m);S.transmission>0?n.unshift(R):S.transparent===!0?o.unshift(R):t.unshift(R)}function s(l,d){t.length>1&&t.sort(l||sv),n.length>1&&n.sort(d||Ac),o.length>1&&o.sort(d||Ac)}function h(){for(let l=e,d=i.length;l<d;l++){const S=i[l];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:r,unshift:f,finish:h,sort:s}}function cv(){let i=new WeakMap;function e(n,o){const a=i.get(n);let c;return a===void 0?(c=new Mc,i.set(n,[c])):o>=a.length?(c=new Mc,a.push(c)):c=a[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function lv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new je};break;case"SpotLight":t={position:new se,direction:new se,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new se,halfWidth:new se,halfHeight:new se};break}return i[e.id]=t,t}}}function uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fv=0;function dv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hv(i,e){const t=new lv,n=uv(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)o.probe.push(new se);const a=new se,c=new Ye,r=new Ye;function f(h,l){let d=0,S=0,p=0;for(let _=0;_<9;_++)o.probe[_].set(0,0,0);let y=0,m=0,R=0,U=0,I=0,T=0,P=0,b=0,A=0,v=0;h.sort(dv);const w=l!==!0?Math.PI:1;for(let _=0,M=h.length;_<M;_++){const x=h[_],u=x.color,g=x.intensity,E=x.distance,L=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)d+=u.r*g*w,S+=u.g*g*w,p+=u.b*g*w;else if(x.isLightProbe)for(let F=0;F<9;F++)o.probe[F].addScaledVector(x.sh.coefficients[F],g);else if(x.isDirectionalLight){const F=t.get(x);if(F.color.copy(x.color).multiplyScalar(x.intensity*w),x.castShadow){const O=x.shadow,G=n.get(x);G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,o.directionalShadow[y]=G,o.directionalShadowMap[y]=L,o.directionalShadowMatrix[y]=x.shadow.matrix,T++}o.directional[y]=F,y++}else if(x.isSpotLight){const F=t.get(x);F.position.setFromMatrixPosition(x.matrixWorld),F.color.copy(u).multiplyScalar(g*w),F.distance=E,F.coneCos=Math.cos(x.angle),F.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),F.decay=x.decay,o.spot[R]=F;const O=x.shadow;if(x.map&&(o.spotLightMap[A]=x.map,A++,O.updateMatrices(x),x.castShadow&&v++),o.spotLightMatrix[R]=O.matrix,x.castShadow){const G=n.get(x);G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,o.spotShadow[R]=G,o.spotShadowMap[R]=L,b++}R++}else if(x.isRectAreaLight){const F=t.get(x);F.color.copy(u).multiplyScalar(g),F.halfWidth.set(x.width*.5,0,0),F.halfHeight.set(0,x.height*.5,0),o.rectArea[U]=F,U++}else if(x.isPointLight){const F=t.get(x);if(F.color.copy(x.color).multiplyScalar(x.intensity*w),F.distance=x.distance,F.decay=x.decay,x.castShadow){const O=x.shadow,G=n.get(x);G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,o.pointShadow[m]=G,o.pointShadowMap[m]=L,o.pointShadowMatrix[m]=x.shadow.matrix,P++}o.point[m]=F,m++}else if(x.isHemisphereLight){const F=t.get(x);F.skyColor.copy(x.color).multiplyScalar(g*w),F.groundColor.copy(x.groundColor).multiplyScalar(g*w),o.hemi[I]=F,I++}}U>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=be.LTC_FLOAT_1,o.rectAreaLTC2=be.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=be.LTC_HALF_1,o.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=d,o.ambient[1]=S,o.ambient[2]=p;const D=o.hash;(D.directionalLength!==y||D.pointLength!==m||D.spotLength!==R||D.rectAreaLength!==U||D.hemiLength!==I||D.numDirectionalShadows!==T||D.numPointShadows!==P||D.numSpotShadows!==b||D.numSpotMaps!==A)&&(o.directional.length=y,o.spot.length=R,o.rectArea.length=U,o.point.length=m,o.hemi.length=I,o.directionalShadow.length=T,o.directionalShadowMap.length=T,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=b,o.spotShadowMap.length=b,o.directionalShadowMatrix.length=T,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=b+A-v,o.spotLightMap.length=A,o.numSpotLightShadowsWithMaps=v,D.directionalLength=y,D.pointLength=m,D.spotLength=R,D.rectAreaLength=U,D.hemiLength=I,D.numDirectionalShadows=T,D.numPointShadows=P,D.numSpotShadows=b,D.numSpotMaps=A,o.version=fv++)}function s(h,l){let d=0,S=0,p=0,y=0,m=0;const R=l.matrixWorldInverse;for(let U=0,I=h.length;U<I;U++){const T=h[U];if(T.isDirectionalLight){const P=o.directional[d];P.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(R),d++}else if(T.isSpotLight){const P=o.spot[p];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(R),P.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(R),p++}else if(T.isRectAreaLight){const P=o.rectArea[y];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(R),r.identity(),c.copy(T.matrixWorld),c.premultiply(R),r.extractRotation(c),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(r),P.halfHeight.applyMatrix4(r),y++}else if(T.isPointLight){const P=o.point[S];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(R),S++}else if(T.isHemisphereLight){const P=o.hemi[m];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(R),m++}}}return{setup:f,setupView:s,state:o}}function Pc(i,e){const t=new hv(i,e),n=[],o=[];function a(){n.length=0,o.length=0}function c(l){n.push(l)}function r(l){o.push(l)}function f(l){t.setup(n,l)}function s(l){t.setupView(n,l)}return{init:a,state:{lightsArray:n,shadowsArray:o,lights:t},setupLights:f,setupLightsView:s,pushLight:c,pushShadow:r}}function pv(i,e){let t=new WeakMap;function n(a,c=0){const r=t.get(a);let f;return r===void 0?(f=new Pc(i,e),t.set(a,[f])):c>=r.length?(f=new Pc(i,e),r.push(f)):f=r[c],f}function o(){t=new WeakMap}return{get:n,dispose:o}}class mv extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gv extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new se,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yv(i,e,t){let n=new zl;const o=new He,a=new He,c=new ct,r=new mv({depthPacking:wh}),f=new gv,s={},h=t.maxTextureSize,l={0:Rt,1:bi,2:xn},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:_v,fragmentShader:vv}),S=d.clone();S.defines.HORIZONTAL_PASS=1;const p=new on;p.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ft(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El,this.render=function(T,P,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const A=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(bn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let _=0,M=T.length;_<M;_++){const x=T[_],u=x.shadow;if(u===void 0){console.warn("THREE.WebGLShadowMap:",x,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;o.copy(u.mapSize);const g=u.getFrameExtents();if(o.multiply(g),a.copy(u.mapSize),(o.x>h||o.y>h)&&(o.x>h&&(a.x=Math.floor(h/g.x),o.x=a.x*g.x,u.mapSize.x=a.x),o.y>h&&(a.y=Math.floor(h/g.y),o.y=a.y*g.y,u.mapSize.y=a.y)),u.map===null){const L=this.type!==Xi?{minFilter:ht,magFilter:ht}:{};u.map=new Sn(o.x,o.y,L),u.map.texture.name=x.name+".shadowMap",u.camera.updateProjectionMatrix()}i.setRenderTarget(u.map),i.clear();const E=u.getViewportCount();for(let L=0;L<E;L++){const F=u.getViewport(L);c.set(a.x*F.x,a.y*F.y,a.x*F.z,a.y*F.w),D.viewport(c),u.updateMatrices(x,L),n=u.getFrustum(),I(P,b,u.camera,x,this.type)}u.isPointLightShadow!==!0&&this.type===Xi&&R(u,b),u.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(A,v,w)};function R(T,P){const b=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,S.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,S.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Sn(o.x,o.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,b,d,y,null),S.uniforms.shadow_pass.value=T.mapPass.texture,S.uniforms.resolution.value=T.mapSize,S.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,b,S,y,null)}function U(T,P,b,A,v,w){let D=null;const _=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(_!==void 0?D=_:D=b.isPointLight===!0?f:r,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0){const M=D.uuid,x=P.uuid;let u=s[M];u===void 0&&(u={},s[M]=u);let g=u[x];g===void 0&&(g=D.clone(),u[x]=g),D=g}return D.visible=P.visible,D.wireframe=P.wireframe,w===Xi?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:l[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaTest,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,b.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(b.matrixWorld),D.nearDistance=A,D.farDistance=v),D}function I(T,P,b,A,v){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Xi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const _=e.update(T),M=T.material;if(Array.isArray(M)){const x=_.groups;for(let u=0,g=x.length;u<g;u++){const E=x[u],L=M[E.materialIndex];if(L&&L.visible){const F=U(T,L,A,b.near,b.far,v);i.renderBufferDirect(b,null,_,F,T,E)}}}else if(M.visible){const x=U(T,M,A,b.near,b.far,v);i.renderBufferDirect(b,null,_,x,T,null)}}const D=T.children;for(let _=0,M=D.length;_<M;_++)I(D[_],P,b,A,v)}}function xv(i,e,t){const n=t.isWebGL2;function o(){let ee=!1;const fe=new ct;let ve=null;const Te=new ct(0,0,0,0);return{setMask:function(Ae){ve!==Ae&&!ee&&(i.colorMask(Ae,Ae,Ae,Ae),ve=Ae)},setLocked:function(Ae){ee=Ae},setClear:function(Ae,Ue,Ze,it,Gt){Gt===!0&&(Ae*=it,Ue*=it,Ze*=it),fe.set(Ae,Ue,Ze,it),Te.equals(fe)===!1&&(i.clearColor(Ae,Ue,Ze,it),Te.copy(fe))},reset:function(){ee=!1,ve=null,Te.set(-1,0,0,0)}}}function a(){let ee=!1,fe=null,ve=null,Te=null;return{setTest:function(Ae){Ae?q(2929):J(2929)},setMask:function(Ae){fe!==Ae&&!ee&&(i.depthMask(Ae),fe=Ae)},setFunc:function(Ae){if(ve!==Ae){switch(Ae){case $d:i.depthFunc(512);break;case qd:i.depthFunc(519);break;case Kd:i.depthFunc(513);break;case Ma:i.depthFunc(515);break;case Zd:i.depthFunc(514);break;case Jd:i.depthFunc(518);break;case Qd:i.depthFunc(516);break;case eh:i.depthFunc(517);break;default:i.depthFunc(515)}ve=Ae}},setLocked:function(Ae){ee=Ae},setClear:function(Ae){Te!==Ae&&(i.clearDepth(Ae),Te=Ae)},reset:function(){ee=!1,fe=null,ve=null,Te=null}}}function c(){let ee=!1,fe=null,ve=null,Te=null,Ae=null,Ue=null,Ze=null,it=null,Gt=null;return{setTest:function(We){ee||(We?q(2960):J(2960))},setMask:function(We){fe!==We&&!ee&&(i.stencilMask(We),fe=We)},setFunc:function(We,bt,ut){(ve!==We||Te!==bt||Ae!==ut)&&(i.stencilFunc(We,bt,ut),ve=We,Te=bt,Ae=ut)},setOp:function(We,bt,ut){(Ue!==We||Ze!==bt||it!==ut)&&(i.stencilOp(We,bt,ut),Ue=We,Ze=bt,it=ut)},setLocked:function(We){ee=We},setClear:function(We){Gt!==We&&(i.clearStencil(We),Gt=We)},reset:function(){ee=!1,fe=null,ve=null,Te=null,Ae=null,Ue=null,Ze=null,it=null,Gt=null}}}const r=new o,f=new a,s=new c,h=new WeakMap,l=new WeakMap;let d={},S={},p=new WeakMap,y=[],m=null,R=!1,U=null,I=null,T=null,P=null,b=null,A=null,v=null,w=!1,D=null,_=null,M=null,x=null,u=null;const g=i.getParameter(35661);let E=!1,L=0;const F=i.getParameter(7938);F.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(F)[1]),E=L>=1):F.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),E=L>=2);let O=null,G={};const C=i.getParameter(3088),N=i.getParameter(2978),V=new ct().fromArray(C),j=new ct().fromArray(N);function Q(ee,fe,ve){const Te=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(ee,Ae),i.texParameteri(ee,10241,9728),i.texParameteri(ee,10240,9728);for(let Ue=0;Ue<ve;Ue++)i.texImage2D(fe+Ue,0,6408,1,1,0,6408,5121,Te);return Ae}const H={};H[3553]=Q(3553,3553,1),H[34067]=Q(34067,34069,6),r.setClear(0,0,0,1),f.setClear(1),s.setClear(0),q(2929),f.setFunc(Ma),Y(!1),Z(ys),q(2884),ne(bn);function q(ee){d[ee]!==!0&&(i.enable(ee),d[ee]=!0)}function J(ee){d[ee]!==!1&&(i.disable(ee),d[ee]=!1)}function oe(ee,fe){return S[ee]!==fe?(i.bindFramebuffer(ee,fe),S[ee]=fe,n&&(ee===36009&&(S[36160]=fe),ee===36160&&(S[36009]=fe)),!0):!1}function K(ee,fe){let ve=y,Te=!1;if(ee)if(ve=p.get(fe),ve===void 0&&(ve=[],p.set(fe,ve)),ee.isWebGLMultipleRenderTargets){const Ae=ee.texture;if(ve.length!==Ae.length||ve[0]!==36064){for(let Ue=0,Ze=Ae.length;Ue<Ze;Ue++)ve[Ue]=36064+Ue;ve.length=Ae.length,Te=!0}}else ve[0]!==36064&&(ve[0]=36064,Te=!0);else ve[0]!==1029&&(ve[0]=1029,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function he(ee){return m!==ee?(i.useProgram(ee),m=ee,!0):!1}const z={[di]:32774,[Ud]:32778,[Gd]:32779};if(n)z[Ss]=32775,z[Es]=32776;else{const ee=e.get("EXT_blend_minmax");ee!==null&&(z[Ss]=ee.MIN_EXT,z[Es]=ee.MAX_EXT)}const $={[Bd]:0,[Vd]:1,[zd]:768,[wl]:770,[Yd]:776,[Xd]:774,[Hd]:772,[kd]:769,[Al]:771,[jd]:775,[Wd]:773};function ne(ee,fe,ve,Te,Ae,Ue,Ze,it){if(ee===bn){R===!0&&(J(3042),R=!1);return}if(R===!1&&(q(3042),R=!0),ee!==Fd){if(ee!==U||it!==w){if((I!==di||b!==di)&&(i.blendEquation(32774),I=di,b=di),it)switch(ee){case gi:i.blendFuncSeparate(1,771,1,771);break;case xs:i.blendFunc(1,1);break;case bs:i.blendFuncSeparate(0,769,0,1);break;case Ts:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}else switch(ee){case gi:i.blendFuncSeparate(770,771,1,771);break;case xs:i.blendFunc(770,1);break;case bs:i.blendFuncSeparate(0,769,0,1);break;case Ts:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}T=null,P=null,A=null,v=null,U=ee,w=it}return}Ae=Ae||fe,Ue=Ue||ve,Ze=Ze||Te,(fe!==I||Ae!==b)&&(i.blendEquationSeparate(z[fe],z[Ae]),I=fe,b=Ae),(ve!==T||Te!==P||Ue!==A||Ze!==v)&&(i.blendFuncSeparate($[ve],$[Te],$[Ue],$[Ze]),T=ve,P=Te,A=Ue,v=Ze),U=ee,w=null}function W(ee,fe){ee.side===xn?J(2884):q(2884);let ve=ee.side===Rt;fe&&(ve=!ve),Y(ve),ee.blending===gi&&ee.transparent===!1?ne(bn):ne(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.premultipliedAlpha),f.setFunc(ee.depthFunc),f.setTest(ee.depthTest),f.setMask(ee.depthWrite),r.setMask(ee.colorWrite);const Te=ee.stencilWrite;s.setTest(Te),Te&&(s.setMask(ee.stencilWriteMask),s.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),s.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),ce(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?q(32926):J(32926)}function Y(ee){D!==ee&&(ee?i.frontFace(2304):i.frontFace(2305),D=ee)}function Z(ee){ee!==Od?(q(2884),ee!==_&&(ee===ys?i.cullFace(1029):ee===Nd?i.cullFace(1028):i.cullFace(1032))):J(2884),_=ee}function ie(ee){ee!==M&&(E&&i.lineWidth(ee),M=ee)}function ce(ee,fe,ve){ee?(q(32823),(x!==fe||u!==ve)&&(i.polygonOffset(fe,ve),x=fe,u=ve)):J(32823)}function ue(ee){ee?q(3089):J(3089)}function le(ee){ee===void 0&&(ee=33984+g-1),O!==ee&&(i.activeTexture(ee),O=ee)}function k(ee,fe,ve){ve===void 0&&(O===null?ve=33984+g-1:ve=O);let Te=G[ve];Te===void 0&&(Te={type:void 0,texture:void 0},G[ve]=Te),(Te.type!==ee||Te.texture!==fe)&&(O!==ve&&(i.activeTexture(ve),O=ve),i.bindTexture(ee,fe||H[ee]),Te.type=ee,Te.texture=fe)}function B(){const ee=G[O];ee!==void 0&&ee.type!==void 0&&(i.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function _e(){try{i.texSubImage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function we(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ie(ee){V.equals(ee)===!1&&(i.scissor(ee.x,ee.y,ee.z,ee.w),V.copy(ee))}function Pe(ee){j.equals(ee)===!1&&(i.viewport(ee.x,ee.y,ee.z,ee.w),j.copy(ee))}function De(ee,fe){let ve=l.get(fe);ve===void 0&&(ve=new WeakMap,l.set(fe,ve));let Te=ve.get(ee);Te===void 0&&(Te=i.getUniformBlockIndex(fe,ee.name),ve.set(ee,Te))}function Ve(ee,fe){const Te=l.get(fe).get(ee);h.get(ee)!==Te&&(i.uniformBlockBinding(fe,Te,ee.__bindingPointIndex),h.set(ee,Te))}function Xe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},O=null,G={},S={},p=new WeakMap,y=[],m=null,R=!1,U=null,I=null,T=null,P=null,b=null,A=null,v=null,w=!1,D=null,_=null,M=null,x=null,u=null,V.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),f.reset(),s.reset()}return{buffers:{color:r,depth:f,stencil:s},enable:q,disable:J,bindFramebuffer:oe,drawBuffers:K,useProgram:he,setBlending:ne,setMaterial:W,setFlipSided:Y,setCullFace:Z,setLineWidth:ie,setPolygonOffset:ce,setScissorTest:ue,activeTexture:le,bindTexture:k,unbindTexture:B,compressedTexImage2D:re,compressedTexImage3D:ge,texImage2D:Re,texImage3D:Ee,updateUBOMapping:De,uniformBlockBinding:Ve,texStorage2D:de,texStorage3D:Se,texSubImage2D:_e,texSubImage3D:ye,compressedTexSubImage2D:we,compressedTexSubImage3D:xe,scissor:Ie,viewport:Pe,reset:Xe}}function bv(i,e,t,n,o,a,c){const r=o.isWebGL2,f=o.maxTextures,s=o.maxCubemapSize,h=o.maxTextureSize,l=o.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),p=new WeakMap;let y;const m=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(k,B){return R?new OffscreenCanvas(k,B):Zr("canvas")}function I(k,B,re,ge){let _e=1;if((k.width>ge||k.height>ge)&&(_e=ge/Math.max(k.width,k.height)),_e<1||B===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const ye=B?Na:Math.floor,we=ye(_e*k.width),xe=ye(_e*k.height);y===void 0&&(y=U(we,xe));const de=re?U(we,xe):y;return de.width=we,de.height=xe,de.getContext("2d").drawImage(k,0,0,we,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+we+"x"+xe+")."),de}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function T(k){return Ks(k.width)&&Ks(k.height)}function P(k){return r?!1:k.wrapS!==Nt||k.wrapT!==Nt||k.minFilter!==ht&&k.minFilter!==wt}function b(k,B){return k.generateMipmaps&&B&&k.minFilter!==ht&&k.minFilter!==wt}function A(k){i.generateMipmap(k)}function v(k,B,re,ge,_e=!1){if(r===!1)return B;if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ye=B;return B===6403&&(re===5126&&(ye=33326),re===5131&&(ye=33325),re===5121&&(ye=33321)),B===33319&&(re===5126&&(ye=33328),re===5131&&(ye=33327),re===5121&&(ye=33323)),B===6408&&(re===5126&&(ye=34836),re===5131&&(ye=34842),re===5121&&(ye=ge===Ke&&_e===!1?35907:32856),re===32819&&(ye=32854),re===32820&&(ye=32855)),(ye===33325||ye===33326||ye===33327||ye===33328||ye===34842||ye===34836)&&e.get("EXT_color_buffer_float"),ye}function w(k,B,re){return b(k,re)===!0||k.isFramebufferTexture&&k.minFilter!==ht&&k.minFilter!==wt?Math.log2(Math.max(B.width,B.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?B.mipmaps.length:1}function D(k){return k===ht||k===ws||k===As?9728:9729}function _(k){const B=k.target;B.removeEventListener("dispose",_),x(B),B.isVideoTexture&&p.delete(B)}function M(k){const B=k.target;B.removeEventListener("dispose",M),g(B)}function x(k){const B=n.get(k);if(B.__webglInit===void 0)return;const re=k.source,ge=m.get(re);if(ge){const _e=ge[B.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&u(k),Object.keys(ge).length===0&&m.delete(re)}n.remove(k)}function u(k){const B=n.get(k);i.deleteTexture(B.__webglTexture);const re=k.source,ge=m.get(re);delete ge[B.__cacheKey],c.memory.textures--}function g(k){const B=k.texture,re=n.get(k),ge=n.get(B);if(ge.__webglTexture!==void 0&&(i.deleteTexture(ge.__webglTexture),c.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)i.deleteFramebuffer(re.__webglFramebuffer[_e]),re.__webglDepthbuffer&&i.deleteRenderbuffer(re.__webglDepthbuffer[_e]);else{if(i.deleteFramebuffer(re.__webglFramebuffer),re.__webglDepthbuffer&&i.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&i.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let _e=0;_e<re.__webglColorRenderbuffer.length;_e++)re.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(re.__webglColorRenderbuffer[_e]);re.__webglDepthRenderbuffer&&i.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let _e=0,ye=B.length;_e<ye;_e++){const we=n.get(B[_e]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),c.memory.textures--),n.remove(B[_e])}n.remove(B),n.remove(k)}let E=0;function L(){E=0}function F(){const k=E;return k>=f&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+f),E+=1,k}function O(k){const B=[];return B.push(k.wrapS),B.push(k.wrapT),B.push(k.wrapR||0),B.push(k.magFilter),B.push(k.minFilter),B.push(k.anisotropy),B.push(k.internalFormat),B.push(k.format),B.push(k.type),B.push(k.generateMipmaps),B.push(k.premultiplyAlpha),B.push(k.flipY),B.push(k.unpackAlignment),B.push(k.encoding),B.join()}function G(k,B){const re=n.get(k);if(k.isVideoTexture&&ue(k),k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){const ge=k.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(re,k,B);return}}t.bindTexture(3553,re.__webglTexture,33984+B)}function C(k,B){const re=n.get(k);if(k.version>0&&re.__version!==k.version){J(re,k,B);return}t.bindTexture(35866,re.__webglTexture,33984+B)}function N(k,B){const re=n.get(k);if(k.version>0&&re.__version!==k.version){J(re,k,B);return}t.bindTexture(32879,re.__webglTexture,33984+B)}function V(k,B){const re=n.get(k);if(k.version>0&&re.__version!==k.version){oe(re,k,B);return}t.bindTexture(34067,re.__webglTexture,33984+B)}const j={[Ia]:10497,[Nt]:33071,[La]:33648},Q={[ht]:9728,[ws]:9984,[As]:9986,[wt]:9729,[ch]:9985,[co]:9987};function H(k,B,re){if(re?(i.texParameteri(k,10242,j[B.wrapS]),i.texParameteri(k,10243,j[B.wrapT]),(k===32879||k===35866)&&i.texParameteri(k,32882,j[B.wrapR]),i.texParameteri(k,10240,Q[B.magFilter]),i.texParameteri(k,10241,Q[B.minFilter])):(i.texParameteri(k,10242,33071),i.texParameteri(k,10243,33071),(k===32879||k===35866)&&i.texParameteri(k,32882,33071),(B.wrapS!==Nt||B.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(k,10240,D(B.magFilter)),i.texParameteri(k,10241,D(B.minFilter)),B.minFilter!==ht&&B.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(B.type===Gn&&e.has("OES_texture_float_linear")===!1||r===!1&&B.type===er&&e.has("OES_texture_half_float_linear")===!1)return;(B.anisotropy>1||n.get(B).__currentAnisotropy)&&(i.texParameterf(k,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,o.getMaxAnisotropy())),n.get(B).__currentAnisotropy=B.anisotropy)}}function q(k,B){let re=!1;k.__webglInit===void 0&&(k.__webglInit=!0,B.addEventListener("dispose",_));const ge=B.source;let _e=m.get(ge);_e===void 0&&(_e={},m.set(ge,_e));const ye=O(B);if(ye!==k.__cacheKey){_e[ye]===void 0&&(_e[ye]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,re=!0),_e[ye].usedTimes++;const we=_e[k.__cacheKey];we!==void 0&&(_e[k.__cacheKey].usedTimes--,we.usedTimes===0&&u(B)),k.__cacheKey=ye,k.__webglTexture=_e[ye].texture}return re}function J(k,B,re){let ge=3553;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(ge=35866),B.isData3DTexture&&(ge=32879);const _e=q(k,B),ye=B.source;t.bindTexture(ge,k.__webglTexture,33984+re);const we=n.get(ye);if(ye.version!==we.__version||_e===!0){t.activeTexture(33984+re),i.pixelStorei(37440,B.flipY),i.pixelStorei(37441,B.premultiplyAlpha),i.pixelStorei(3317,B.unpackAlignment),i.pixelStorei(37443,0);const xe=P(B)&&T(B.image)===!1;let de=I(B.image,xe,!1,h);de=le(B,de);const Se=T(de)||r,Re=a.convert(B.format,B.encoding);let Ee=a.convert(B.type),Ie=v(B.internalFormat,Re,Ee,B.encoding,B.isVideoTexture);H(ge,B,Se);let Pe;const De=B.mipmaps,Ve=r&&B.isVideoTexture!==!0,Xe=we.__version===void 0||_e===!0,ee=w(B,de,Se);if(B.isDepthTexture)Ie=6402,r?B.type===Gn?Ie=36012:B.type===Un?Ie=33190:B.type===_i?Ie=35056:Ie=33189:B.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),B.format===Vn&&Ie===6402&&B.type!==Rl&&B.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),B.type=Un,Ee=a.convert(B.type)),B.format===Ei&&Ie===6402&&(Ie=34041,B.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),B.type=_i,Ee=a.convert(B.type))),Xe&&(Ve?t.texStorage2D(3553,1,Ie,de.width,de.height):t.texImage2D(3553,0,Ie,de.width,de.height,0,Re,Ee,null));else if(B.isDataTexture)if(De.length>0&&Se){Ve&&Xe&&t.texStorage2D(3553,ee,Ie,De[0].width,De[0].height);for(let fe=0,ve=De.length;fe<ve;fe++)Pe=De[fe],Ve?t.texSubImage2D(3553,fe,0,0,Pe.width,Pe.height,Re,Ee,Pe.data):t.texImage2D(3553,fe,Ie,Pe.width,Pe.height,0,Re,Ee,Pe.data);B.generateMipmaps=!1}else Ve?(Xe&&t.texStorage2D(3553,ee,Ie,de.width,de.height),t.texSubImage2D(3553,0,0,0,de.width,de.height,Re,Ee,de.data)):t.texImage2D(3553,0,Ie,de.width,de.height,0,Re,Ee,de.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){Ve&&Xe&&t.texStorage3D(35866,ee,Ie,De[0].width,De[0].height,de.depth);for(let fe=0,ve=De.length;fe<ve;fe++)Pe=De[fe],B.format!==Dt?Re!==null?Ve?t.compressedTexSubImage3D(35866,fe,0,0,0,Pe.width,Pe.height,de.depth,Re,Pe.data,0,0):t.compressedTexImage3D(35866,fe,Ie,Pe.width,Pe.height,de.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,fe,0,0,0,Pe.width,Pe.height,de.depth,Re,Ee,Pe.data):t.texImage3D(35866,fe,Ie,Pe.width,Pe.height,de.depth,0,Re,Ee,Pe.data)}else{Ve&&Xe&&t.texStorage2D(3553,ee,Ie,De[0].width,De[0].height);for(let fe=0,ve=De.length;fe<ve;fe++)Pe=De[fe],B.format!==Dt?Re!==null?Ve?t.compressedTexSubImage2D(3553,fe,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(3553,fe,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,fe,0,0,Pe.width,Pe.height,Re,Ee,Pe.data):t.texImage2D(3553,fe,Ie,Pe.width,Pe.height,0,Re,Ee,Pe.data)}else if(B.isDataArrayTexture)Ve?(Xe&&t.texStorage3D(35866,ee,Ie,de.width,de.height,de.depth),t.texSubImage3D(35866,0,0,0,0,de.width,de.height,de.depth,Re,Ee,de.data)):t.texImage3D(35866,0,Ie,de.width,de.height,de.depth,0,Re,Ee,de.data);else if(B.isData3DTexture)Ve?(Xe&&t.texStorage3D(32879,ee,Ie,de.width,de.height,de.depth),t.texSubImage3D(32879,0,0,0,0,de.width,de.height,de.depth,Re,Ee,de.data)):t.texImage3D(32879,0,Ie,de.width,de.height,de.depth,0,Re,Ee,de.data);else if(B.isFramebufferTexture){if(Xe)if(Ve)t.texStorage2D(3553,ee,Ie,de.width,de.height);else{let fe=de.width,ve=de.height;for(let Te=0;Te<ee;Te++)t.texImage2D(3553,Te,Ie,fe,ve,0,Re,Ee,null),fe>>=1,ve>>=1}}else if(De.length>0&&Se){Ve&&Xe&&t.texStorage2D(3553,ee,Ie,De[0].width,De[0].height);for(let fe=0,ve=De.length;fe<ve;fe++)Pe=De[fe],Ve?t.texSubImage2D(3553,fe,0,0,Re,Ee,Pe):t.texImage2D(3553,fe,Ie,Re,Ee,Pe);B.generateMipmaps=!1}else Ve?(Xe&&t.texStorage2D(3553,ee,Ie,de.width,de.height),t.texSubImage2D(3553,0,0,0,Re,Ee,de)):t.texImage2D(3553,0,Ie,Re,Ee,de);b(B,Se)&&A(ge),we.__version=ye.version,B.onUpdate&&B.onUpdate(B)}k.__version=B.version}function oe(k,B,re){if(B.image.length!==6)return;const ge=q(k,B),_e=B.source;t.bindTexture(34067,k.__webglTexture,33984+re);const ye=n.get(_e);if(_e.version!==ye.__version||ge===!0){t.activeTexture(33984+re),i.pixelStorei(37440,B.flipY),i.pixelStorei(37441,B.premultiplyAlpha),i.pixelStorei(3317,B.unpackAlignment),i.pixelStorei(37443,0);const we=B.isCompressedTexture||B.image[0].isCompressedTexture,xe=B.image[0]&&B.image[0].isDataTexture,de=[];for(let fe=0;fe<6;fe++)!we&&!xe?de[fe]=I(B.image[fe],!1,!0,s):de[fe]=xe?B.image[fe].image:B.image[fe],de[fe]=le(B,de[fe]);const Se=de[0],Re=T(Se)||r,Ee=a.convert(B.format,B.encoding),Ie=a.convert(B.type),Pe=v(B.internalFormat,Ee,Ie,B.encoding),De=r&&B.isVideoTexture!==!0,Ve=ye.__version===void 0||ge===!0;let Xe=w(B,Se,Re);H(34067,B,Re);let ee;if(we){De&&Ve&&t.texStorage2D(34067,Xe,Pe,Se.width,Se.height);for(let fe=0;fe<6;fe++){ee=de[fe].mipmaps;for(let ve=0;ve<ee.length;ve++){const Te=ee[ve];B.format!==Dt?Ee!==null?De?t.compressedTexSubImage2D(34069+fe,ve,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(34069+fe,ve,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+fe,ve,0,0,Te.width,Te.height,Ee,Ie,Te.data):t.texImage2D(34069+fe,ve,Pe,Te.width,Te.height,0,Ee,Ie,Te.data)}}}else{ee=B.mipmaps,De&&Ve&&(ee.length>0&&Xe++,t.texStorage2D(34067,Xe,Pe,de[0].width,de[0].height));for(let fe=0;fe<6;fe++)if(xe){De?t.texSubImage2D(34069+fe,0,0,0,de[fe].width,de[fe].height,Ee,Ie,de[fe].data):t.texImage2D(34069+fe,0,Pe,de[fe].width,de[fe].height,0,Ee,Ie,de[fe].data);for(let ve=0;ve<ee.length;ve++){const Ae=ee[ve].image[fe].image;De?t.texSubImage2D(34069+fe,ve+1,0,0,Ae.width,Ae.height,Ee,Ie,Ae.data):t.texImage2D(34069+fe,ve+1,Pe,Ae.width,Ae.height,0,Ee,Ie,Ae.data)}}else{De?t.texSubImage2D(34069+fe,0,0,0,Ee,Ie,de[fe]):t.texImage2D(34069+fe,0,Pe,Ee,Ie,de[fe]);for(let ve=0;ve<ee.length;ve++){const Te=ee[ve];De?t.texSubImage2D(34069+fe,ve+1,0,0,Ee,Ie,Te.image[fe]):t.texImage2D(34069+fe,ve+1,Pe,Ee,Ie,Te.image[fe])}}}b(B,Re)&&A(34067),ye.__version=_e.version,B.onUpdate&&B.onUpdate(B)}k.__version=B.version}function K(k,B,re,ge,_e){const ye=a.convert(re.format,re.encoding),we=a.convert(re.type),xe=v(re.internalFormat,ye,we,re.encoding);n.get(B).__hasExternalTextures||(_e===32879||_e===35866?t.texImage3D(_e,0,xe,B.width,B.height,B.depth,0,ye,we,null):t.texImage2D(_e,0,xe,B.width,B.height,0,ye,we,null)),t.bindFramebuffer(36160,k),ce(B)?d.framebufferTexture2DMultisampleEXT(36160,ge,_e,n.get(re).__webglTexture,0,ie(B)):(_e===3553||_e>=34069&&_e<=34074)&&i.framebufferTexture2D(36160,ge,_e,n.get(re).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(k,B,re){if(i.bindRenderbuffer(36161,k),B.depthBuffer&&!B.stencilBuffer){let ge=33189;if(re||ce(B)){const _e=B.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Gn?ge=36012:_e.type===Un&&(ge=33190));const ye=ie(B);ce(B)?d.renderbufferStorageMultisampleEXT(36161,ye,ge,B.width,B.height):i.renderbufferStorageMultisample(36161,ye,ge,B.width,B.height)}else i.renderbufferStorage(36161,ge,B.width,B.height);i.framebufferRenderbuffer(36160,36096,36161,k)}else if(B.depthBuffer&&B.stencilBuffer){const ge=ie(B);re&&ce(B)===!1?i.renderbufferStorageMultisample(36161,ge,35056,B.width,B.height):ce(B)?d.renderbufferStorageMultisampleEXT(36161,ge,35056,B.width,B.height):i.renderbufferStorage(36161,34041,B.width,B.height),i.framebufferRenderbuffer(36160,33306,36161,k)}else{const ge=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let _e=0;_e<ge.length;_e++){const ye=ge[_e],we=a.convert(ye.format,ye.encoding),xe=a.convert(ye.type),de=v(ye.internalFormat,we,xe,ye.encoding),Se=ie(B);re&&ce(B)===!1?i.renderbufferStorageMultisample(36161,Se,de,B.width,B.height):ce(B)?d.renderbufferStorageMultisampleEXT(36161,Se,de,B.width,B.height):i.renderbufferStorage(36161,de,B.width,B.height)}}i.bindRenderbuffer(36161,null)}function z(k,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,k),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(B.depthTexture).__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),G(B.depthTexture,0);const ge=n.get(B.depthTexture).__webglTexture,_e=ie(B);if(B.depthTexture.format===Vn)ce(B)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ge,0,_e):i.framebufferTexture2D(36160,36096,3553,ge,0);else if(B.depthTexture.format===Ei)ce(B)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ge,0,_e):i.framebufferTexture2D(36160,33306,3553,ge,0);else throw new Error("Unknown depthTexture format")}function $(k){const B=n.get(k),re=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!B.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");z(B.__webglFramebuffer,k)}else if(re){B.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(36160,B.__webglFramebuffer[ge]),B.__webglDepthbuffer[ge]=i.createRenderbuffer(),he(B.__webglDepthbuffer[ge],k,!1)}else t.bindFramebuffer(36160,B.__webglFramebuffer),B.__webglDepthbuffer=i.createRenderbuffer(),he(B.__webglDepthbuffer,k,!1);t.bindFramebuffer(36160,null)}function ne(k,B,re){const ge=n.get(k);B!==void 0&&K(ge.__webglFramebuffer,k,k.texture,36064,3553),re!==void 0&&$(k)}function W(k){const B=k.texture,re=n.get(k),ge=n.get(B);k.addEventListener("dispose",M),k.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=B.version,c.memory.textures++);const _e=k.isWebGLCubeRenderTarget===!0,ye=k.isWebGLMultipleRenderTargets===!0,we=T(k)||r;if(_e){re.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)re.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(re.__webglFramebuffer=i.createFramebuffer(),ye)if(o.drawBuffers){const xe=k.texture;for(let de=0,Se=xe.length;de<Se;de++){const Re=n.get(xe[de]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&k.samples>0&&ce(k)===!1){const xe=ye?B:[B];re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer);for(let de=0;de<xe.length;de++){const Se=xe[de];re.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(36161,re.__webglColorRenderbuffer[de]);const Re=a.convert(Se.format,Se.encoding),Ee=a.convert(Se.type),Ie=v(Se.internalFormat,Re,Ee,Se.encoding,k.isXRRenderTarget===!0),Pe=ie(k);i.renderbufferStorageMultisample(36161,Pe,Ie,k.width,k.height),i.framebufferRenderbuffer(36160,36064+de,36161,re.__webglColorRenderbuffer[de])}i.bindRenderbuffer(36161,null),k.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),he(re.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(36160,null)}}if(_e){t.bindTexture(34067,ge.__webglTexture),H(34067,B,we);for(let xe=0;xe<6;xe++)K(re.__webglFramebuffer[xe],k,B,36064,34069+xe);b(B,we)&&A(34067),t.unbindTexture()}else if(ye){const xe=k.texture;for(let de=0,Se=xe.length;de<Se;de++){const Re=xe[de],Ee=n.get(Re);t.bindTexture(3553,Ee.__webglTexture),H(3553,Re,we),K(re.__webglFramebuffer,k,Re,36064+de,3553),b(Re,we)&&A(3553)}t.unbindTexture()}else{let xe=3553;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(r?xe=k.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ge.__webglTexture),H(xe,B,we),K(re.__webglFramebuffer,k,B,36064,xe),b(B,we)&&A(xe),t.unbindTexture()}k.depthBuffer&&$(k)}function Y(k){const B=T(k)||r,re=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let ge=0,_e=re.length;ge<_e;ge++){const ye=re[ge];if(b(ye,B)){const we=k.isWebGLCubeRenderTarget?34067:3553,xe=n.get(ye).__webglTexture;t.bindTexture(we,xe),A(we),t.unbindTexture()}}}function Z(k){if(r&&k.samples>0&&ce(k)===!1){const B=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],re=k.width,ge=k.height;let _e=16384;const ye=[],we=k.stencilBuffer?33306:36096,xe=n.get(k),de=k.isWebGLMultipleRenderTargets===!0;if(de)for(let Se=0;Se<B.length;Se++)t.bindFramebuffer(36160,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,xe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,xe.__webglFramebuffer);for(let Se=0;Se<B.length;Se++){ye.push(36064+Se),k.depthBuffer&&ye.push(we);const Re=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Re===!1&&(k.depthBuffer&&(_e|=256),k.stencilBuffer&&(_e|=1024)),de&&i.framebufferRenderbuffer(36008,36064,36161,xe.__webglColorRenderbuffer[Se]),Re===!0&&(i.invalidateFramebuffer(36008,[we]),i.invalidateFramebuffer(36009,[we])),de){const Ee=n.get(B[Se]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Ee,0)}i.blitFramebuffer(0,0,re,ge,0,0,re,ge,_e,9728),S&&i.invalidateFramebuffer(36008,ye)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),de)for(let Se=0;Se<B.length;Se++){t.bindFramebuffer(36160,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Se,36161,xe.__webglColorRenderbuffer[Se]);const Re=n.get(B[Se]).__webglTexture;t.bindFramebuffer(36160,xe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Se,3553,Re,0)}t.bindFramebuffer(36009,xe.__webglMultisampledFramebuffer)}}function ie(k){return Math.min(l,k.samples)}function ce(k){const B=n.get(k);return r&&k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function ue(k){const B=c.render.frame;p.get(k)!==B&&(p.set(k,B),k.update())}function le(k,B){const re=k.encoding,ge=k.format,_e=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===Oa||re!==Wn&&(re===Ke?r===!1?e.has("EXT_sRGB")===!0&&ge===Dt?(k.format=Oa,k.minFilter=wt,k.generateMipmaps=!1):B=Cl.sRGBToLinear(B):(ge!==Dt||_e!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",re)),B}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=C,this.setTexture3D=N,this.setTextureCube=V,this.rebindTextures=ne,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ce}function Tv(i,e,t){const n=t.isWebGL2;function o(a,c=null){let r;if(a===Hn)return 5121;if(a===dh)return 32819;if(a===hh)return 32820;if(a===lh)return 5120;if(a===uh)return 5122;if(a===Rl)return 5123;if(a===fh)return 5124;if(a===Un)return 5125;if(a===Gn)return 5126;if(a===er)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===ph)return 6406;if(a===Dt)return 6408;if(a===gh)return 6409;if(a===_h)return 6410;if(a===Vn)return 6402;if(a===Ei)return 34041;if(a===vh)return 6403;if(a===mh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===Oa)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===yh)return 36244;if(a===xh)return 33319;if(a===bh)return 33320;if(a===Th)return 36249;if(a===Eo||a===wo||a===Ao||a===Mo)if(c===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ms||a===Ps||a===Rs||a===Is)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Ms)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ps)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Rs)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Is)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Sh)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ls||a===Cs)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Ls)return c===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===Cs)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Os||a===Ns||a===Ds||a===Fs||a===Us||a===Gs||a===Bs||a===Vs||a===zs||a===ks||a===Hs||a===Ws||a===Xs||a===js)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(a===Os)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ns)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ds)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Fs)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Us)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Gs)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Bs)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Vs)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===zs)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ks)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Hs)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ws)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Xs)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===js)return c===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ys)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(a===Ys)return c===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===_i?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:o}}class Sv extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gr extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ev={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,c=null;const r=this._targetRay,f=this._grip,s=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(s&&e.hand){c=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n);if(s.joints[y.jointName]===void 0){const U=new Gr;U.matrixAutoUpdate=!1,U.visible=!1,s.joints[y.jointName]=U,s.add(U)}const R=s.joints[y.jointName];m!==null&&(R.matrix.fromArray(m.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.jointRadius=m.radius),R.visible=m!==null}const h=s.joints["index-finger-tip"],l=s.joints["thumb-tip"],d=h.position.distanceTo(l.position),S=.02,p=.005;s.inputState.pinching&&d>S+p?(s.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!s.inputState.pinching&&d<=S-p&&(s.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));r!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Ev)))}return r!==null&&(r.visible=o!==null),f!==null&&(f.visible=a!==null),s!==null&&(s.visible=c!==null),this}}class wv extends xt{constructor(e,t,n,o,a,c,r,f,s,h){if(h=h!==void 0?h:Vn,h!==Vn&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vn&&(n=Un),n===void 0&&h===Ei&&(n=_i),super(null,o,a,c,r,f,h,n,s),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:ht,this.minFilter=f!==void 0?f:ht,this.flipY=!1,this.generateMipmaps=!1}}class Av extends Xn{constructor(e,t){super();const n=this;let o=null,a=1,c=null,r="local-floor",f=null,s=null,h=null,l=null,d=null,S=null;const p=t.getContextAttributes();let y=null,m=null;const R=[],U=[],I=new At;I.layers.enable(1),I.viewport=new ct;const T=new At;T.layers.enable(2),T.viewport=new ct;const P=[I,T],b=new Sv;b.layers.enable(1),b.layers.enable(2);let A=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let G=R[O];return G===void 0&&(G=new ta,R[O]=G),G.getTargetRaySpace()},this.getControllerGrip=function(O){let G=R[O];return G===void 0&&(G=new ta,R[O]=G),G.getGripSpace()},this.getHand=function(O){let G=R[O];return G===void 0&&(G=new ta,R[O]=G),G.getHandSpace()};function w(O){const G=U.indexOf(O.inputSource);if(G===-1)return;const C=R[G];C!==void 0&&C.dispatchEvent({type:O.type,data:O.inputSource})}function D(){o.removeEventListener("select",w),o.removeEventListener("selectstart",w),o.removeEventListener("selectend",w),o.removeEventListener("squeeze",w),o.removeEventListener("squeezestart",w),o.removeEventListener("squeezeend",w),o.removeEventListener("end",D),o.removeEventListener("inputsourceschange",_);for(let O=0;O<R.length;O++){const G=U[O];G!==null&&(U[O]=null,R[O].disconnect(G))}A=null,v=null,e.setRenderTarget(y),d=null,l=null,h=null,o=null,m=null,F.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(O){f=O},this.getBaseLayer=function(){return l!==null?l:d},this.getBinding=function(){return h},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(O){if(o=O,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",w),o.addEventListener("selectstart",w),o.addEventListener("selectend",w),o.addEventListener("squeeze",w),o.addEventListener("squeezestart",w),o.addEventListener("squeezeend",w),o.addEventListener("end",D),o.addEventListener("inputsourceschange",_),p.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:o.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(o,t,G),o.updateRenderState({baseLayer:d}),m=new Sn(d.framebufferWidth,d.framebufferHeight,{format:Dt,type:Hn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let G=null,C=null,N=null;p.depth&&(N=p.stencil?35056:33190,G=p.stencil?Ei:Vn,C=p.stencil?_i:Un);const V={colorFormat:32856,depthFormat:N,scaleFactor:a};h=new XRWebGLBinding(o,t),l=h.createProjectionLayer(V),o.updateRenderState({layers:[l]}),m=new Sn(l.textureWidth,l.textureHeight,{format:Dt,type:Hn,depthTexture:new wv(l.textureWidth,l.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const j=e.properties.get(m);j.__ignoreDepthValues=l.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),f=null,c=await o.requestReferenceSpace(r),F.setContext(o),F.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function _(O){for(let G=0;G<O.removed.length;G++){const C=O.removed[G],N=U.indexOf(C);N>=0&&(U[N]=null,R[N].dispatchEvent({type:"disconnected",data:C}))}for(let G=0;G<O.added.length;G++){const C=O.added[G];let N=U.indexOf(C);if(N===-1){for(let j=0;j<R.length;j++)if(j>=U.length){U.push(C),N=j;break}else if(U[j]===null){U[j]=C,N=j;break}if(N===-1)break}const V=R[N];V&&V.dispatchEvent({type:"connected",data:C})}}const M=new se,x=new se;function u(O,G,C){M.setFromMatrixPosition(G.matrixWorld),x.setFromMatrixPosition(C.matrixWorld);const N=M.distanceTo(x),V=G.projectionMatrix.elements,j=C.projectionMatrix.elements,Q=V[14]/(V[10]-1),H=V[14]/(V[10]+1),q=(V[9]+1)/V[5],J=(V[9]-1)/V[5],oe=(V[8]-1)/V[0],K=(j[8]+1)/j[0],he=Q*oe,z=Q*K,$=N/(-oe+K),ne=$*-oe;G.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ne),O.translateZ($),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const W=Q+$,Y=H+$,Z=he-ne,ie=z+(N-ne),ce=q*H/Y*W,ue=J*H/Y*W;O.projectionMatrix.makePerspective(Z,ie,ce,ue,W,Y)}function g(O,G){G===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(G.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(o===null)return;b.near=T.near=I.near=O.near,b.far=T.far=I.far=O.far,(A!==b.near||v!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,v=b.far);const G=O.parent,C=b.cameras;g(b,G);for(let V=0;V<C.length;V++)g(C[V],G);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),O.matrix.copy(b.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const N=O.children;for(let V=0,j=N.length;V<j;V++)N[V].updateMatrixWorld(!0);C.length===2?u(b,I,T):b.projectionMatrix.copy(I.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(l!==null)return l.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(O){l!==null&&(l.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let E=null;function L(O,G){if(s=G.getViewerPose(f||c),S=G,s!==null){const C=s.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let N=!1;C.length!==b.cameras.length&&(b.cameras.length=0,N=!0);for(let V=0;V<C.length;V++){const j=C[V];let Q=null;if(d!==null)Q=d.getViewport(j);else{const q=h.getViewSubImage(l,j);Q=q.viewport,V===0&&(e.setRenderTargetTextures(m,q.colorTexture,l.ignoreDepthValues?void 0:q.depthStencilTexture),e.setRenderTarget(m))}let H=P[V];H===void 0&&(H=new At,H.layers.enable(V),H.viewport=new ct,P[V]=H),H.matrix.fromArray(j.transform.matrix),H.projectionMatrix.fromArray(j.projectionMatrix),H.viewport.set(Q.x,Q.y,Q.width,Q.height),V===0&&b.matrix.copy(H.matrix),N===!0&&b.cameras.push(H)}}for(let C=0;C<R.length;C++){const N=U[C],V=R[C];N!==null&&V!==void 0&&V.update(N,G,f||c)}E&&E(O,G),S=null}const F=new kl;F.setAnimationLoop(L),this.setAnimationLoop=function(O){E=O},this.dispose=function(){}}}function Mv(i,e){function t(y,m){y.fogColor.value.copy(m.color),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function n(y,m,R,U,I){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(y,m):m.isMeshToonMaterial?(o(y,m),h(y,m)):m.isMeshPhongMaterial?(o(y,m),s(y,m)):m.isMeshStandardMaterial?(o(y,m),l(y,m),m.isMeshPhysicalMaterial&&d(y,m,I)):m.isMeshMatcapMaterial?(o(y,m),S(y,m)):m.isMeshDepthMaterial?o(y,m):m.isMeshDistanceMaterial?(o(y,m),p(y,m)):m.isMeshNormalMaterial?o(y,m):m.isLineBasicMaterial?(a(y,m),m.isLineDashedMaterial&&c(y,m)):m.isPointsMaterial?r(y,m,R,U):m.isSpriteMaterial?f(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map),m.alphaMap&&(y.alphaMap.value=m.alphaMap),m.bumpMap&&(y.bumpMap.value=m.bumpMap,y.bumpScale.value=m.bumpScale,m.side===Rt&&(y.bumpScale.value*=-1)),m.displacementMap&&(y.displacementMap.value=m.displacementMap,y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap),m.normalMap&&(y.normalMap.value=m.normalMap,y.normalScale.value.copy(m.normalScale),m.side===Rt&&y.normalScale.value.negate()),m.specularMap&&(y.specularMap.value=m.specularMap),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const R=e.get(m).envMap;if(R&&(y.envMap.value=R,y.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap){y.lightMap.value=m.lightMap;const T=i.physicallyCorrectLights!==!0?Math.PI:1;y.lightMapIntensity.value=m.lightMapIntensity*T}m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity);let U;m.map?U=m.map:m.specularMap?U=m.specularMap:m.displacementMap?U=m.displacementMap:m.normalMap?U=m.normalMap:m.bumpMap?U=m.bumpMap:m.roughnessMap?U=m.roughnessMap:m.metalnessMap?U=m.metalnessMap:m.alphaMap?U=m.alphaMap:m.emissiveMap?U=m.emissiveMap:m.clearcoatMap?U=m.clearcoatMap:m.clearcoatNormalMap?U=m.clearcoatNormalMap:m.clearcoatRoughnessMap?U=m.clearcoatRoughnessMap:m.iridescenceMap?U=m.iridescenceMap:m.iridescenceThicknessMap?U=m.iridescenceThicknessMap:m.specularIntensityMap?U=m.specularIntensityMap:m.specularColorMap?U=m.specularColorMap:m.transmissionMap?U=m.transmissionMap:m.thicknessMap?U=m.thicknessMap:m.sheenColorMap?U=m.sheenColorMap:m.sheenRoughnessMap&&(U=m.sheenRoughnessMap),U!==void 0&&(U.isWebGLRenderTarget&&(U=U.texture),U.matrixAutoUpdate===!0&&U.updateMatrix(),y.uvTransform.value.copy(U.matrix));let I;m.aoMap?I=m.aoMap:m.lightMap&&(I=m.lightMap),I!==void 0&&(I.isWebGLRenderTarget&&(I=I.texture),I.matrixAutoUpdate===!0&&I.updateMatrix(),y.uv2Transform.value.copy(I.matrix))}function a(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity}function c(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function r(y,m,R,U){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*R,y.scale.value=U*.5,m.map&&(y.map.value=m.map),m.alphaMap&&(y.alphaMap.value=m.alphaMap),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let I;m.map?I=m.map:m.alphaMap&&(I=m.alphaMap),I!==void 0&&(I.matrixAutoUpdate===!0&&I.updateMatrix(),y.uvTransform.value.copy(I.matrix))}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map),m.alphaMap&&(y.alphaMap.value=m.alphaMap),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let R;m.map?R=m.map:m.alphaMap&&(R=m.alphaMap),R!==void 0&&(R.matrixAutoUpdate===!0&&R.updateMatrix(),y.uvTransform.value.copy(R.matrix))}function s(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function h(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function l(y,m){y.roughness.value=m.roughness,y.metalness.value=m.metalness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function d(y,m,R){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),y.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Rt&&y.clearcoatNormalScale.value.negate())),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap)}function S(y,m){m.matcap&&(y.matcap.value=m.matcap)}function p(y,m){y.referencePosition.value.copy(m.referencePosition),y.nearDistance.value=m.nearDistance,y.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Pv(i,e,t,n){let o={},a={},c=[];const r=t.isWebGL2?i.getParameter(35375):0;function f(U,I){const T=I.program;n.uniformBlockBinding(U,T)}function s(U,I){let T=o[U.id];T===void 0&&(p(U),T=h(U),o[U.id]=T,U.addEventListener("dispose",m));const P=I.program;n.updateUBOMapping(U,P);const b=e.render.frame;a[U.id]!==b&&(d(U),a[U.id]=b)}function h(U){const I=l();U.__bindingPointIndex=I;const T=i.createBuffer(),P=U.__size,b=U.usage;return i.bindBuffer(35345,T),i.bufferData(35345,P,b),i.bindBuffer(35345,null),i.bindBufferBase(35345,I,T),T}function l(){for(let U=0;U<r;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(U){const I=o[U.id],T=U.uniforms,P=U.__cache;i.bindBuffer(35345,I);for(let b=0,A=T.length;b<A;b++){const v=T[b];if(S(v,b,P)===!0){const w=v.value,D=v.__offset;typeof w=="number"?(v.__data[0]=w,i.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),i.bufferSubData(35345,D,v.__data))}}i.bindBuffer(35345,null)}function S(U,I,T){const P=U.value;if(T[I]===void 0)return typeof P=="number"?T[I]=P:T[I]=P.clone(),!0;if(typeof P=="number"){if(T[I]!==P)return T[I]=P,!0}else{const b=T[I];if(b.equals(P)===!1)return b.copy(P),!0}return!1}function p(U){const I=U.uniforms;let T=0;const P=16;let b=0;for(let A=0,v=I.length;A<v;A++){const w=I[A],D=y(w);if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=T,A>0){b=T%P;const _=P-b;b!==0&&_-D.boundary<0&&(T+=P-b,w.__offset=T)}T+=D.storage}return b=T%P,b>0&&(T+=P-b),U.__size=T,U.__cache={},this}function y(U){const I=U.value,T={boundary:0,storage:0};return typeof I=="number"?(T.boundary=4,T.storage=4):I.isVector2?(T.boundary=8,T.storage=8):I.isVector3||I.isColor?(T.boundary=16,T.storage=12):I.isVector4?(T.boundary=16,T.storage=16):I.isMatrix3?(T.boundary=48,T.storage=48):I.isMatrix4?(T.boundary=64,T.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),T}function m(U){const I=U.target;I.removeEventListener("dispose",m);const T=c.indexOf(I.__bindingPointIndex);c.splice(T,1),i.deleteBuffer(o[I.id]),delete o[I.id],delete a[I.id]}function R(){for(const U in o)i.deleteBuffer(o[U]);c=[],o={},a={}}return{bind:f,update:s,dispose:R}}function Rv(){const i=Zr("canvas");return i.style.display="block",i}function Yl(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Rv(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,o=i.stencil!==void 0?i.stencil:!0,a=i.antialias!==void 0?i.antialias:!1,c=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,r=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,f=i.powerPreference!==void 0?i.powerPreference:"default",s=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let l=null,d=null;const S=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wn,this.physicallyCorrectLights=!1,this.toneMapping=nn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const y=this;let m=!1,R=0,U=0,I=null,T=-1,P=null;const b=new ct,A=new ct;let v=null,w=e.width,D=e.height,_=1,M=null,x=null;const u=new ct(0,0,w,D),g=new ct(0,0,w,D);let E=!1;const L=new zl;let F=!1,O=!1,G=null;const C=new Ye,N=new He,V=new se,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return I===null?_:1}let H=t;function q(X,ae){for(let pe=0;pe<X.length;pe++){const te=X[pe],me=e.getContext(te,ae);if(me!==null)return me}return null}try{const X={alpha:!0,depth:n,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:r,powerPreference:f,failIfMajorPerformanceCaveat:s};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",De,!1),H===null){const ae=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&ae.shift(),H=q(ae,X),H===null)throw q(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(X){throw console.error("THREE.WebGLRenderer: "+X.message),X}let J,oe,K,he,z,$,ne,W,Y,Z,ie,ce,ue,le,k,B,re,ge,_e,ye,we,xe,de,Se;function Re(){J=new Vg(H),oe=new Og(H,J,i),J.init(oe),xe=new Tv(H,J,oe),K=new xv(H,J,oe),he=new Hg,z=new av,$=new bv(H,J,K,z,oe,xe,he),ne=new Dg(y),W=new Bg(y),Y=new Zh(H,oe),de=new Lg(H,J,Y,oe),Z=new zg(H,Y,he,de),ie=new Yg(H,Z,Y,he),_e=new jg(H,oe,$),B=new Ng(z),ce=new ov(y,ne,W,J,oe,de,B),ue=new Mv(y,z),le=new cv,k=new pv(J,oe),ge=new Ig(y,ne,W,K,ie,h,c),re=new yv(y,ie,oe),Se=new Pv(H,he,oe,K),ye=new Cg(H,J,he,oe),we=new kg(H,J,he,oe),he.programs=ce.programs,y.capabilities=oe,y.extensions=J,y.properties=z,y.renderLists=le,y.shadowMap=re,y.state=K,y.info=he}Re();const Ee=new Av(y,H);this.xr=Ee,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const X=J.get("WEBGL_lose_context");X&&X.loseContext()},this.forceContextRestore=function(){const X=J.get("WEBGL_lose_context");X&&X.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(X){X!==void 0&&(_=X,this.setSize(w,D,!1))},this.getSize=function(X){return X.set(w,D)},this.setSize=function(X,ae,pe){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=X,D=ae,e.width=Math.floor(X*_),e.height=Math.floor(ae*_),pe!==!1&&(e.style.width=X+"px",e.style.height=ae+"px"),this.setViewport(0,0,X,ae)},this.getDrawingBufferSize=function(X){return X.set(w*_,D*_).floor()},this.setDrawingBufferSize=function(X,ae,pe){w=X,D=ae,_=pe,e.width=Math.floor(X*pe),e.height=Math.floor(ae*pe),this.setViewport(0,0,X,ae)},this.getCurrentViewport=function(X){return X.copy(b)},this.getViewport=function(X){return X.copy(u)},this.setViewport=function(X,ae,pe,te){X.isVector4?u.set(X.x,X.y,X.z,X.w):u.set(X,ae,pe,te),K.viewport(b.copy(u).multiplyScalar(_).floor())},this.getScissor=function(X){return X.copy(g)},this.setScissor=function(X,ae,pe,te){X.isVector4?g.set(X.x,X.y,X.z,X.w):g.set(X,ae,pe,te),K.scissor(A.copy(g).multiplyScalar(_).floor())},this.getScissorTest=function(){return E},this.setScissorTest=function(X){K.setScissorTest(E=X)},this.setOpaqueSort=function(X){M=X},this.setTransparentSort=function(X){x=X},this.getClearColor=function(X){return X.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(X=!0,ae=!0,pe=!0){let te=0;X&&(te|=16384),ae&&(te|=256),pe&&(te|=1024),H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",De,!1),le.dispose(),k.dispose(),z.dispose(),ne.dispose(),W.dispose(),ie.dispose(),de.dispose(),Se.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Te),Ee.removeEventListener("sessionend",Ae),G&&(G.dispose(),G=null),Ue.stop()};function Ie(X){X.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const X=he.autoReset,ae=re.enabled,pe=re.autoUpdate,te=re.needsUpdate,me=re.type;Re(),he.autoReset=X,re.enabled=ae,re.autoUpdate=pe,re.needsUpdate=te,re.type=me}function De(X){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",X.statusMessage)}function Ve(X){const ae=X.target;ae.removeEventListener("dispose",Ve),Xe(ae)}function Xe(X){ee(X),z.remove(X)}function ee(X){const ae=z.get(X).programs;ae!==void 0&&(ae.forEach(function(pe){ce.releaseProgram(pe)}),X.isShaderMaterial&&ce.releaseShaderCache(X))}this.renderBufferDirect=function(X,ae,pe,te,me,Me){ae===null&&(ae=j);const Le=me.isMesh&&me.matrixWorld.determinant()<0,Ne=_o(X,ae,pe,te,me);K.setMaterial(te,Le);let Ce=pe.index;const ze=pe.attributes.position;if(Ce===null){if(ze===void 0||ze.count===0)return}else if(Ce.count===0)return;let Fe=1;te.wireframe===!0&&(Ce=Z.getWireframeAttribute(pe),Fe=2),de.setup(me,te,Ne,pe,Ce);let Ge,qe=ye;Ce!==null&&(Ge=Y.get(Ce),qe=we,qe.setIndex(Ge));const Mn=Ce!==null?Ce.count:ze.count,jn=pe.drawRange.start*Fe,Yn=pe.drawRange.count*Fe,Bt=Me!==null?Me.start*Fe:0,ke=Me!==null?Me.count*Fe:1/0,$n=Math.max(jn,Bt),Je=Math.min(Mn,jn+Yn,Bt+ke)-1,Tt=Math.max(0,Je-$n+1);if(Tt!==0){if(me.isMesh)te.wireframe===!0?(K.setLineWidth(te.wireframeLinewidth*Q()),qe.setMode(1)):qe.setMode(4);else if(me.isLine){let ln=te.linewidth;ln===void 0&&(ln=1),K.setLineWidth(ln*Q()),me.isLineSegments?qe.setMode(1):me.isLineLoop?qe.setMode(2):qe.setMode(3)}else me.isPoints?qe.setMode(0):me.isSprite&&qe.setMode(4);if(me.isInstancedMesh)qe.renderInstances($n,Tt,me.count);else if(pe.isInstancedBufferGeometry){const ln=Math.min(pe.instanceCount,pe._maxInstanceCount);qe.renderInstances($n,Tt,ln)}else qe.render($n,Tt)}},this.compile=function(X,ae){function pe(te,me,Me){te.transparent===!0&&te.side===xn?(te.side=Rt,te.needsUpdate=!0,ut(te,me,Me),te.side=bi,te.needsUpdate=!0,ut(te,me,Me),te.side=xn):ut(te,me,Me)}d=k.get(X),d.init(),p.push(d),X.traverseVisible(function(te){te.isLight&&te.layers.test(ae.layers)&&(d.pushLight(te),te.castShadow&&d.pushShadow(te))}),d.setupLights(y.physicallyCorrectLights),X.traverse(function(te){const me=te.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){const Le=me[Me];pe(Le,X,te)}else pe(me,X,te)}),p.pop(),d=null};let fe=null;function ve(X){fe&&fe(X)}function Te(){Ue.stop()}function Ae(){Ue.start()}const Ue=new kl;Ue.setAnimationLoop(ve),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(X){fe=X,Ee.setAnimationLoop(X),X===null?Ue.stop():Ue.start()},Ee.addEventListener("sessionstart",Te),Ee.addEventListener("sessionend",Ae),this.render=function(X,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(ae),ae=Ee.getCamera()),X.isScene===!0&&X.onBeforeRender(y,X,ae,I),d=k.get(X,p.length),d.init(),p.push(d),C.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),L.setFromProjectionMatrix(C),O=this.localClippingEnabled,F=B.init(this.clippingPlanes,O,ae),l=le.get(X,S.length),l.init(),S.push(l),Ze(X,ae,0,y.sortObjects),l.finish(),y.sortObjects===!0&&l.sort(M,x),F===!0&&B.beginShadows();const pe=d.state.shadowsArray;if(re.render(pe,X,ae),F===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(l,X),d.setupLights(y.physicallyCorrectLights),ae.isArrayCamera){const te=ae.cameras;for(let me=0,Me=te.length;me<Me;me++){const Le=te[me];it(l,X,Le,Le.viewport)}}else it(l,X,ae);I!==null&&($.updateMultisampleRenderTarget(I),$.updateRenderTargetMipmap(I)),X.isScene===!0&&X.onAfterRender(y,X,ae),de.resetDefaultState(),T=-1,P=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,S.pop(),S.length>0?l=S[S.length-1]:l=null};function Ze(X,ae,pe,te){if(X.visible===!1)return;if(X.layers.test(ae.layers)){if(X.isGroup)pe=X.renderOrder;else if(X.isLOD)X.autoUpdate===!0&&X.update(ae);else if(X.isLight)d.pushLight(X),X.castShadow&&d.pushShadow(X);else if(X.isSprite){if(!X.frustumCulled||L.intersectsSprite(X)){te&&V.setFromMatrixPosition(X.matrixWorld).applyMatrix4(C);const Le=ie.update(X),Ne=X.material;Ne.visible&&l.push(X,Le,Ne,pe,V.z,null)}}else if((X.isMesh||X.isLine||X.isPoints)&&(X.isSkinnedMesh&&X.skeleton.frame!==he.render.frame&&(X.skeleton.update(),X.skeleton.frame=he.render.frame),!X.frustumCulled||L.intersectsObject(X))){te&&V.setFromMatrixPosition(X.matrixWorld).applyMatrix4(C);const Le=ie.update(X),Ne=X.material;if(Array.isArray(Ne)){const Ce=Le.groups;for(let ze=0,Fe=Ce.length;ze<Fe;ze++){const Ge=Ce[ze],qe=Ne[Ge.materialIndex];qe&&qe.visible&&l.push(X,Le,qe,pe,V.z,Ge)}}else Ne.visible&&l.push(X,Le,Ne,pe,V.z,null)}}const Me=X.children;for(let Le=0,Ne=Me.length;Le<Ne;Le++)Ze(Me[Le],ae,pe,te)}function it(X,ae,pe,te){const me=X.opaque,Me=X.transmissive,Le=X.transparent;d.setupLightsView(pe),Me.length>0&&Gt(me,ae,pe),te&&K.viewport(b.copy(te)),me.length>0&&We(me,ae,pe),Me.length>0&&We(Me,ae,pe),Le.length>0&&We(Le,ae,pe),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Gt(X,ae,pe){const te=oe.isWebGL2;G===null&&(G=new Sn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?er:Hn,minFilter:co,samples:te&&a===!0?4:0})),y.getDrawingBufferSize(N),te?G.setSize(N.x,N.y):G.setSize(Na(N.x),Na(N.y));const me=y.getRenderTarget();y.setRenderTarget(G),y.clear();const Me=y.toneMapping;y.toneMapping=nn,We(X,ae,pe),y.toneMapping=Me,$.updateMultisampleRenderTarget(G),$.updateRenderTargetMipmap(G),y.setRenderTarget(me)}function We(X,ae,pe){const te=ae.isScene===!0?ae.overrideMaterial:null;for(let me=0,Me=X.length;me<Me;me++){const Le=X[me],Ne=Le.object,Ce=Le.geometry,ze=te===null?Le.material:te,Fe=Le.group;Ne.layers.test(pe.layers)&&bt(Ne,ae,pe,Ce,ze,Fe)}}function bt(X,ae,pe,te,me,Me){X.onBeforeRender(y,ae,pe,te,me,Me),X.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,X.matrixWorld),X.normalMatrix.getNormalMatrix(X.modelViewMatrix),me.onBeforeRender(y,ae,pe,te,X,Me),me.transparent===!0&&me.side===xn?(me.side=Rt,me.needsUpdate=!0,y.renderBufferDirect(pe,ae,te,me,X,Me),me.side=bi,me.needsUpdate=!0,y.renderBufferDirect(pe,ae,te,me,X,Me),me.side=xn):y.renderBufferDirect(pe,ae,te,me,X,Me),X.onAfterRender(y,ae,pe,te,me,Me)}function ut(X,ae,pe){ae.isScene!==!0&&(ae=j);const te=z.get(X),me=d.state.lights,Me=d.state.shadowsArray,Le=me.state.version,Ne=ce.getParameters(X,me.state,Me,ae,pe),Ce=ce.getProgramCacheKey(Ne);let ze=te.programs;te.environment=X.isMeshStandardMaterial?ae.environment:null,te.fog=ae.fog,te.envMap=(X.isMeshStandardMaterial?W:ne).get(X.envMap||te.environment),ze===void 0&&(X.addEventListener("dispose",Ve),ze=new Map,te.programs=ze);let Fe=ze.get(Ce);if(Fe!==void 0){if(te.currentProgram===Fe&&te.lightsStateVersion===Le)return mr(X,Ne),Fe}else Ne.uniforms=ce.getUniforms(X),X.onBuild(pe,Ne,y),X.onBeforeCompile(Ne,y),Fe=ce.acquireProgram(Ne,Ce),ze.set(Ce,Fe),te.uniforms=Ne.uniforms;const Ge=te.uniforms;(!X.isShaderMaterial&&!X.isRawShaderMaterial||X.clipping===!0)&&(Ge.clippingPlanes=B.uniform),mr(X,Ne),te.needsLights=Di(X),te.lightsStateVersion=Le,te.needsLights&&(Ge.ambientLightColor.value=me.state.ambient,Ge.lightProbe.value=me.state.probe,Ge.directionalLights.value=me.state.directional,Ge.directionalLightShadows.value=me.state.directionalShadow,Ge.spotLights.value=me.state.spot,Ge.spotLightShadows.value=me.state.spotShadow,Ge.rectAreaLights.value=me.state.rectArea,Ge.ltc_1.value=me.state.rectAreaLTC1,Ge.ltc_2.value=me.state.rectAreaLTC2,Ge.pointLights.value=me.state.point,Ge.pointLightShadows.value=me.state.pointShadow,Ge.hemisphereLights.value=me.state.hemi,Ge.directionalShadowMap.value=me.state.directionalShadowMap,Ge.directionalShadowMatrix.value=me.state.directionalShadowMatrix,Ge.spotShadowMap.value=me.state.spotShadowMap,Ge.spotLightMatrix.value=me.state.spotLightMatrix,Ge.spotLightMap.value=me.state.spotLightMap,Ge.pointShadowMap.value=me.state.pointShadowMap,Ge.pointShadowMatrix.value=me.state.pointShadowMatrix);const qe=Fe.getUniforms(),Mn=Hr.seqWithValue(qe.seq,Ge);return te.currentProgram=Fe,te.uniformsList=Mn,Fe}function mr(X,ae){const pe=z.get(X);pe.outputEncoding=ae.outputEncoding,pe.instancing=ae.instancing,pe.skinning=ae.skinning,pe.morphTargets=ae.morphTargets,pe.morphNormals=ae.morphNormals,pe.morphColors=ae.morphColors,pe.morphTargetsCount=ae.morphTargetsCount,pe.numClippingPlanes=ae.numClippingPlanes,pe.numIntersection=ae.numClipIntersection,pe.vertexAlphas=ae.vertexAlphas,pe.vertexTangents=ae.vertexTangents,pe.toneMapping=ae.toneMapping}function _o(X,ae,pe,te,me){ae.isScene!==!0&&(ae=j),$.resetTextureUnits();const Me=ae.fog,Le=te.isMeshStandardMaterial?ae.environment:null,Ne=I===null?y.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:Wn,Ce=(te.isMeshStandardMaterial?W:ne).get(te.envMap||Le),ze=te.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Fe=!!te.normalMap&&!!pe.attributes.tangent,Ge=!!pe.morphAttributes.position,qe=!!pe.morphAttributes.normal,Mn=!!pe.morphAttributes.color,jn=te.toneMapped?y.toneMapping:nn,Yn=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Bt=Yn!==void 0?Yn.length:0,ke=z.get(te),$n=d.state.lights;if(F===!0&&(O===!0||X!==P)){const pt=X===P&&te.id===T;B.setState(te,X,pt)}let Je=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==$n.state.version||ke.outputEncoding!==Ne||me.isInstancedMesh&&ke.instancing===!1||!me.isInstancedMesh&&ke.instancing===!0||me.isSkinnedMesh&&ke.skinning===!1||!me.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ce||te.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==B.numPlanes||ke.numIntersection!==B.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Fe||ke.morphTargets!==Ge||ke.morphNormals!==qe||ke.morphColors!==Mn||ke.toneMapping!==jn||oe.isWebGL2===!0&&ke.morphTargetsCount!==Bt)&&(Je=!0):(Je=!0,ke.__version=te.version);let Tt=ke.currentProgram;Je===!0&&(Tt=ut(te,ae,me));let ln=!1,Fi=!1,vo=!1;const ft=Tt.getUniforms(),Pn=ke.uniforms;if(K.useProgram(Tt.program)&&(ln=!0,Fi=!0,vo=!0),te.id!==T&&(T=te.id,Fi=!0),ln||P!==X){if(ft.setValue(H,"projectionMatrix",X.projectionMatrix),oe.logarithmicDepthBuffer&&ft.setValue(H,"logDepthBufFC",2/(Math.log(X.far+1)/Math.LN2)),P!==X&&(P=X,Fi=!0,vo=!0),te.isShaderMaterial||te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshStandardMaterial||te.envMap){const pt=ft.map.cameraPosition;pt!==void 0&&pt.setValue(H,V.setFromMatrixPosition(X.matrixWorld))}(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ft.setValue(H,"isOrthographic",X.isOrthographicCamera===!0),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial||te.isShadowMaterial||me.isSkinnedMesh)&&ft.setValue(H,"viewMatrix",X.matrixWorldInverse)}if(me.isSkinnedMesh){ft.setOptional(H,me,"bindMatrix"),ft.setOptional(H,me,"bindMatrixInverse");const pt=me.skeleton;pt&&(oe.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),ft.setValue(H,"boneTexture",pt.boneTexture,$),ft.setValue(H,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yo=pe.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&oe.isWebGL2===!0)&&_e.update(me,pe,te,Tt),(Fi||ke.receiveShadow!==me.receiveShadow)&&(ke.receiveShadow=me.receiveShadow,ft.setValue(H,"receiveShadow",me.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Pn.envMap.value=Ce,Pn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Fi&&(ft.setValue(H,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&gr(Pn,vo),Me&&te.fog===!0&&ue.refreshFogUniforms(Pn,Me),ue.refreshMaterialUniforms(Pn,te,_,D,G),Hr.upload(H,ke.uniformsList,Pn,$)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Hr.upload(H,ke.uniformsList,Pn,$),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ft.setValue(H,"center",me.center),ft.setValue(H,"modelViewMatrix",me.modelViewMatrix),ft.setValue(H,"normalMatrix",me.normalMatrix),ft.setValue(H,"modelMatrix",me.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const pt=te.uniformsGroups;for(let xo=0,Lu=pt.length;xo<Lu;xo++)if(oe.isWebGL2){const fs=pt[xo];Se.update(fs,Tt),Se.bind(fs,Tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tt}function gr(X,ae){X.ambientLightColor.needsUpdate=ae,X.lightProbe.needsUpdate=ae,X.directionalLights.needsUpdate=ae,X.directionalLightShadows.needsUpdate=ae,X.pointLights.needsUpdate=ae,X.pointLightShadows.needsUpdate=ae,X.spotLights.needsUpdate=ae,X.spotLightShadows.needsUpdate=ae,X.rectAreaLights.needsUpdate=ae,X.hemisphereLights.needsUpdate=ae}function Di(X){return X.isMeshLambertMaterial||X.isMeshToonMaterial||X.isMeshPhongMaterial||X.isMeshStandardMaterial||X.isShadowMaterial||X.isShaderMaterial&&X.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(X,ae,pe){z.get(X.texture).__webglTexture=ae,z.get(X.depthTexture).__webglTexture=pe;const te=z.get(X);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=pe===void 0,te.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(X,ae){const pe=z.get(X);pe.__webglFramebuffer=ae,pe.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(X,ae=0,pe=0){I=X,R=ae,U=pe;let te=!0,me=null,Me=!1,Le=!1;if(X){const Ce=z.get(X);Ce.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(36160,null),te=!1):Ce.__webglFramebuffer===void 0?$.setupRenderTarget(X):Ce.__hasExternalTextures&&$.rebindTextures(X,z.get(X.texture).__webglTexture,z.get(X.depthTexture).__webglTexture);const ze=X.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Le=!0);const Fe=z.get(X).__webglFramebuffer;X.isWebGLCubeRenderTarget?(me=Fe[ae],Me=!0):oe.isWebGL2&&X.samples>0&&$.useMultisampledRTT(X)===!1?me=z.get(X).__webglMultisampledFramebuffer:me=Fe,b.copy(X.viewport),A.copy(X.scissor),v=X.scissorTest}else b.copy(u).multiplyScalar(_).floor(),A.copy(g).multiplyScalar(_).floor(),v=E;if(K.bindFramebuffer(36160,me)&&oe.drawBuffers&&te&&K.drawBuffers(X,me),K.viewport(b),K.scissor(A),K.setScissorTest(v),Me){const Ce=z.get(X.texture);H.framebufferTexture2D(36160,36064,34069+ae,Ce.__webglTexture,pe)}else if(Le){const Ce=z.get(X.texture),ze=ae||0;H.framebufferTextureLayer(36160,36064,Ce.__webglTexture,pe||0,ze)}T=-1},this.readRenderTargetPixels=function(X,ae,pe,te,me,Me,Le){if(!(X&&X.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=z.get(X).__webglFramebuffer;if(X.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){K.bindFramebuffer(36160,Ne);try{const Ce=X.texture,ze=Ce.format,Fe=Ce.type;if(ze!==Dt&&xe.convert(ze)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Fe===er&&(J.has("EXT_color_buffer_half_float")||oe.isWebGL2&&J.has("EXT_color_buffer_float"));if(Fe!==Hn&&xe.convert(Fe)!==H.getParameter(35738)&&!(Fe===Gn&&(oe.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=X.width-te&&pe>=0&&pe<=X.height-me&&H.readPixels(ae,pe,te,me,xe.convert(ze),xe.convert(Fe),Me)}finally{const Ce=I!==null?z.get(I).__webglFramebuffer:null;K.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(X,ae,pe=0){const te=Math.pow(2,-pe),me=Math.floor(ae.image.width*te),Me=Math.floor(ae.image.height*te);$.setTexture2D(ae,0),H.copyTexSubImage2D(3553,pe,0,0,X.x,X.y,me,Me),K.unbindTexture()},this.copyTextureToTexture=function(X,ae,pe,te=0){const me=ae.image.width,Me=ae.image.height,Le=xe.convert(pe.format),Ne=xe.convert(pe.type);$.setTexture2D(pe,0),H.pixelStorei(37440,pe.flipY),H.pixelStorei(37441,pe.premultiplyAlpha),H.pixelStorei(3317,pe.unpackAlignment),ae.isDataTexture?H.texSubImage2D(3553,te,X.x,X.y,me,Me,Le,Ne,ae.image.data):ae.isCompressedTexture?H.compressedTexSubImage2D(3553,te,X.x,X.y,ae.mipmaps[0].width,ae.mipmaps[0].height,Le,ae.mipmaps[0].data):H.texSubImage2D(3553,te,X.x,X.y,Le,Ne,ae.image),te===0&&pe.generateMipmaps&&H.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(X,ae,pe,te,me=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=X.max.x-X.min.x+1,Le=X.max.y-X.min.y+1,Ne=X.max.z-X.min.z+1,Ce=xe.convert(te.format),ze=xe.convert(te.type);let Fe;if(te.isData3DTexture)$.setTexture3D(te,0),Fe=32879;else if(te.isDataArrayTexture)$.setTexture2DArray(te,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,te.flipY),H.pixelStorei(37441,te.premultiplyAlpha),H.pixelStorei(3317,te.unpackAlignment);const Ge=H.getParameter(3314),qe=H.getParameter(32878),Mn=H.getParameter(3316),jn=H.getParameter(3315),Yn=H.getParameter(32877),Bt=pe.isCompressedTexture?pe.mipmaps[0]:pe.image;H.pixelStorei(3314,Bt.width),H.pixelStorei(32878,Bt.height),H.pixelStorei(3316,X.min.x),H.pixelStorei(3315,X.min.y),H.pixelStorei(32877,X.min.z),pe.isDataTexture||pe.isData3DTexture?H.texSubImage3D(Fe,me,ae.x,ae.y,ae.z,Me,Le,Ne,Ce,ze,Bt.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Fe,me,ae.x,ae.y,ae.z,Me,Le,Ne,Ce,Bt.data)):H.texSubImage3D(Fe,me,ae.x,ae.y,ae.z,Me,Le,Ne,Ce,ze,Bt),H.pixelStorei(3314,Ge),H.pixelStorei(32878,qe),H.pixelStorei(3316,Mn),H.pixelStorei(3315,jn),H.pixelStorei(32877,Yn),me===0&&te.generateMipmaps&&H.generateMipmap(Fe),K.unbindTexture()},this.initTexture=function(X){X.isCubeTexture?$.setTextureCube(X,0):X.isData3DTexture?$.setTexture3D(X,0):X.isDataArrayTexture||X.isCompressedArrayTexture?$.setTexture2DArray(X,0):$.setTexture2D(X,0),K.unbindTexture()},this.resetState=function(){R=0,U=0,I=null,K.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Iv extends Yl{}Iv.prototype.isWebGL1Renderer=!0;class Rc extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class tr extends Ut{constructor(e,t,n,o=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class is extends on{constructor(e=1,t=1,n=1,o=8,a=1,c=!1,r=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:r,thetaLength:f};const s=this;o=Math.floor(o),a=Math.floor(a);const h=[],l=[],d=[],S=[];let p=0;const y=[],m=n/2;let R=0;U(),c===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(S,2));function U(){const T=new se,P=new se;let b=0;const A=(t-e)/n;for(let v=0;v<=a;v++){const w=[],D=v/a,_=D*(t-e)+e;for(let M=0;M<=o;M++){const x=M/o,u=x*f+r,g=Math.sin(u),E=Math.cos(u);P.x=_*g,P.y=-D*n+m,P.z=_*E,l.push(P.x,P.y,P.z),T.set(g,A,E).normalize(),d.push(T.x,T.y,T.z),S.push(x,1-D),w.push(p++)}y.push(w)}for(let v=0;v<o;v++)for(let w=0;w<a;w++){const D=y[w][v],_=y[w+1][v],M=y[w+1][v+1],x=y[w][v+1];h.push(D,_,x),h.push(_,M,x),b+=6}s.addGroup(R,b,0),R+=b}function I(T){const P=p,b=new He,A=new se;let v=0;const w=T===!0?e:t,D=T===!0?1:-1;for(let M=1;M<=o;M++)l.push(0,m*D,0),d.push(0,D,0),S.push(.5,.5),p++;const _=p;for(let M=0;M<=o;M++){const u=M/o*f+r,g=Math.cos(u),E=Math.sin(u);A.x=w*E,A.y=m*D,A.z=w*g,l.push(A.x,A.y,A.z),d.push(0,D,0),b.x=g*.5+.5,b.y=E*.5*D+.5,S.push(b.x,b.y),p++}for(let M=0;M<o;M++){const x=P+M,u=_+M;T===!0?h.push(u,u+1,x):h.push(u+1,u,x),v+=3}s.addGroup(R,v,T===!0?1:2),R+=v}}static fromJSON(e){return new is(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fa extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $l extends on{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class vn{constructor(e){this.value=e}clone(){return new vn(this.value.clone===void 0?this.value:this.value.clone())}}let Lv=0;class Cv extends Xn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Lv++}),this.name="",this.usage=Ca,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,o=t.length;n<o;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);var Be={},Ov={get exports(){return Be},set exports(i){Be=i}};(function(i,e){(function(n,o){i.exports=o()})(self,()=>(()=>{var t={566:function(c,r){(function(f,s){s(r)})(this,function(f){function s(_){return!Number.isNaN(_)&&typeof _=="number"}function h(_){return s(_)&&Number.isFinite(_)}function l(_){return h(_)&&_%1===0}function d(_){return s(_)&&_>0}function S(_){return l(_)&&_>0}function p(_){return s(_)&&_<0}function y(_){return l(_)&&_<0}function m(_){return s(_)&&_>=0}function R(_){return l(_)&&_>=0}function U(_){return s(_)&&_<=0}function I(_){return l(_)&&_<=0}function T(_,M,x){return s(_)&&_>=M&&_<=x}function P(_,M,x){return l(_)&&_>=M&&_<=x}function b(_){return typeof _=="string"}function A(_){return ArrayBuffer.isView(_)&&!(_ instanceof DataView)}function v(_){return Array.isArray(_)||A(_)}function w(_){return typeof _=="object"&&!v(_)&&_!==null&&!(_ instanceof ArrayBuffer)&&!(_ instanceof DataView)}function D(_){return typeof _=="boolean"}f.isArray=v,f.isBoolean=D,f.isFiniteNumber=h,f.isInteger=l,f.isIntegerInRange=P,f.isNegativeInteger=y,f.isNegativeNumber=p,f.isNonNegativeInteger=R,f.isNonNegativeNumber=m,f.isNonPositiveInteger=I,f.isNonPositiveNumber=U,f.isNumber=s,f.isNumberInRange=T,f.isObject=w,f.isPositiveInteger=S,f.isPositiveNumber=d,f.isString=b,f.isTypedArray=A,Object.defineProperty(f,"__esModule",{value:!0})})},809:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.changeDpiBlob=P,r.changeDpiDataUrl=b;function f(D){if(Array.isArray(D)){for(var _=0,M=Array(D.length);_<D.length;_++)M[_]=D[_];return M}else return Array.from(D)}function s(){for(var D=new Int32Array(256),_=0;_<256;_++){for(var M=_,x=0;x<8;x++)M=M&1?3988292384^M>>>1:M>>>1;D[_]=M}return D}function h(D){var _=-1;l||(l=s());for(var M=0;M<D.length;M++)_=l[(_^D[M])&255]^_>>>8;return _^-1}var l=void 0,d="image/png",S="image/jpeg",p="AAlwSFlz",y="AAAJcEhZ",m="AAAACXBI",R="p".charCodeAt(0),U="H".charCodeAt(0),I="Y".charCodeAt(0),T="s".charCodeAt(0);function P(D,_){var M=D.slice(0,33);return new Promise(function(x,u){var g=new FileReader;g.onload=function(){var E=new Uint8Array(g.result),L=D.slice(33),F=w(E,_,D.type);x(new Blob([F,L],{type:D.type}))},g.readAsArrayBuffer(M)})}function b(D,_){var M=D.split(","),x=M[0],u=M[1],g=void 0,E=void 0,L=!1;if(x.indexOf(d)!==-1){g=d;var F=A(u);F>=0?(E=Math.ceil((F+28)/3)*4,L=!0):E=44}x.indexOf(S)!==-1&&(g=S,E=24);for(var O=u.substring(0,E),G=u.substring(E),C=atob(O),N=new Uint8Array(C.length),V=0;V<N.length;V++)N[V]=C.charCodeAt(V);var j=w(N,_,g,L),Q=btoa(String.fromCharCode.apply(String,f(j)));return[x,",",Q,G].join("")}function A(D){var _=D.indexOf(p);return _===-1&&(_=D.indexOf(y)),_===-1&&(_=D.indexOf(m)),_}function v(D){for(var _=D.length-1,M=_;M>=4;M--)if(D[M-4]===9&&D[M-3]===R&&D[M-2]===U&&D[M-1]===I&&D[M]===T)return M-3}function w(D,_,M,x){if(M===S)return D[13]=1,D[14]=_>>8,D[15]=_&255,D[16]=_>>8,D[17]=_&255,D;if(M===d){var u=new Uint8Array(13);_*=39.3701,u[0]=R,u[1]=U,u[2]=I,u[3]=T,u[4]=_>>>24,u[5]=_>>>16,u[6]=_>>>8,u[7]=_&255,u[8]=u[4],u[9]=u[5],u[10]=u[6],u[11]=u[7],u[12]=1;var g=h(u),E=new Uint8Array(4);if(E[0]=g>>>24,E[1]=g>>>16,E[2]=g>>>8,E[3]=g&255,x){var L=v(D);return D.set(u,L),D.set(E,L+13),D}else{var F=new Uint8Array(4);F[0]=0,F[1]=0,F[2]=0,F[3]=9;var O=new Uint8Array(54);return O.set(D,0),O.set(F,33),O.set(u,37),O.set(E,50),O}}}},162:function(c,r,f){var s,h,l;(function(d,S){h=[],s=S,l=typeof s=="function"?s.apply(r,h):s,l!==void 0&&(c.exports=l)})(this,function(){function d(I,T){return typeof T>"u"?T={autoBom:!1}:typeof T!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),T={autoBom:!T}),T.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(I.type)?new Blob(["\uFEFF",I],{type:I.type}):I}function S(I,T,P){var b=new XMLHttpRequest;b.open("GET",I),b.responseType="blob",b.onload=function(){U(b.response,T,P)},b.onerror=function(){console.error("could not download file")},b.send()}function p(I){var T=new XMLHttpRequest;T.open("HEAD",I,!1);try{T.send()}catch{}return 200<=T.status&&299>=T.status}function y(I){try{I.dispatchEvent(new MouseEvent("click"))}catch{var T=document.createEvent("MouseEvents");T.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),I.dispatchEvent(T)}}var m=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof f.g=="object"&&f.g.global===f.g?f.g:void 0,R=m.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),U=m.saveAs||(typeof window!="object"||window!==m?function(){}:"download"in HTMLAnchorElement.prototype&&!R?function(I,T,P){var b=m.URL||m.webkitURL,A=document.createElement("a");T=T||I.name||"download",A.download=T,A.rel="noopener",typeof I=="string"?(A.href=I,A.origin===location.origin?y(A):p(A.href)?S(I,T,P):y(A,A.target="_blank")):(A.href=b.createObjectURL(I),setTimeout(function(){b.revokeObjectURL(A.href)},4e4),setTimeout(function(){y(A)},0))}:"msSaveOrOpenBlob"in navigator?function(I,T,P){if(T=T||I.name||"download",typeof I!="string")navigator.msSaveOrOpenBlob(d(I,P),T);else if(p(I))S(I,T,P);else{var b=document.createElement("a");b.href=I,b.target="_blank",setTimeout(function(){y(b)})}}:function(I,T,P,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof I=="string")return S(I,T,P);var A=I.type==="application/octet-stream",v=/constructor/i.test(m.HTMLElement)||m.safari,w=/CriOS\/[\d]+/.test(navigator.userAgent);if((w||A&&v||R)&&typeof FileReader<"u"){var D=new FileReader;D.onloadend=function(){var x=D.result;x=w?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=x:location=x,b=null},D.readAsDataURL(I)}else{var _=m.URL||m.webkitURL,M=_.createObjectURL(I);b?b.location=M:location.href=M,b=null,setTimeout(function(){_.revokeObjectURL(M)},4e4)}});m.saveAs=U.saveAs=U,c.exports=U})},484:function(c,r,f){var s=this&&this.__assign||function(){return s=Object.assign||function(x){for(var u,g=1,E=arguments.length;g<E;g++){u=arguments[g];for(var L in u)Object.prototype.hasOwnProperty.call(u,L)&&(x[L]=u[L])}return x},s.apply(this,arguments)},h=this&&this.__spreadArray||function(x,u,g){if(g||arguments.length===2)for(var E=0,L=u.length,F;E<L;E++)(F||!(E in u))&&(F||(F=Array.prototype.slice.call(u,0,E)),F[E]=u[E]);return x.concat(F||Array.prototype.slice.call(u))};Object.defineProperty(r,"__esModule",{value:!0}),r.GPUComposer=void 0;var l=f(809),d=f(566),S=f(355);f(191);var p=f(601),y=f(404),m=f(593),R=f(651),U=f(567),I=f(946),T=f(929),P=f(634),b=f(380),A=f(690),v=f(579),w=f(707),D=f(798),_=f(581),M=function(){function x(u){var g;this._errorState=!1,this._circlePositionsBuffer={},this._vertexAttributeLocations={},this._enabledVertexAttributes={},this._extensions={},this._clearValue=0,this._copyPrograms={},this._setValuePrograms={},this._vertexShaders=(g={},g[p.DEFAULT_PROGRAM_NAME]={src:R.DEFAULT_VERT_SHADER_SOURCE,compiledShaders:{}},g[p.SEGMENT_PROGRAM_NAME]={src:I.SEGMENT_VERTEX_SHADER_SOURCE,compiledShaders:{}},g[p.LAYER_POINTS_PROGRAM_NAME]={src:T.LAYER_POINTS_VERTEX_SHADER_SOURCE,compiledShaders:{}},g[p.LAYER_VECTOR_FIELD_PROGRAM_NAME]={src:P.LAYER_VECTOR_FIELD_VERTEX_SHADER_SOURCE,compiledShaders:{}},g[p.LAYER_LINES_PROGRAM_NAME]={src:U.LAYER_LINES_VERTEX_SHADER_SOURCE,compiledShaders:{}},g[p.LAYER_MESH_PROGRAM_NAME]={src:b.LAYER_MESH_VERTEX_SHADER_SOURCE,compiledShaders:{}},g),this.verboseLogging=!1,this._numTicks=0;var E=["canvas","context","contextID","contextAttributes","glslVersion","intPrecision","floatPrecision","clearValue","verboseLogging","errorCallback"],L=["canvas"],F=Object.keys(u);(0,w.checkValidKeys)(F,E,"GPUComposer(params)"),(0,w.checkRequiredKeys)(F,L,"GPUComposer(params)"),u.verboseLogging!==void 0&&(this.verboseLogging=u.verboseLogging);var O=this;this._errorCallback=function(Q){O._errorState||(O._errorState=!0,u.errorCallback?u.errorCallback(Q):(0,p.DEFAULT_ERROR_CALLBACK)(Q))};var G=u.canvas,C=u.context;if(!C){if(u.contextID){var N=G.getContext(u.contextID,u.contextAttributes);N?C=N:console.warn("Unable to initialize WebGL context with contextID: ".concat(u.contextID,"."))}if(!C){var N=G.getContext(p.WEBGL2,u.contextAttributes)||G.getContext(p.WEBGL1,u.contextAttributes)||G.getContext(p.EXPERIMENTAL_WEBGL2,u.contextAttributes)||G.getContext(p.EXPERIMENTAL_WEBGL,u.contextAttributes);N&&(C=N)}if(!C){this._errorCallback("Unable to initialize WebGL context.");return}}this.isWebGL2=(0,m.isWebGL2)(C),this.isWebGL2?this.verboseLogging&&console.log("Using WebGL 2.0 context."):this.verboseLogging&&console.log("Using WebGL 1.0 context."),this.gl=C;var V=u.glslVersion||(this.isWebGL2?p.GLSL3:p.GLSL1);if(!this.isWebGL2&&V===p.GLSL3&&(console.warn("GLSL3.x is incompatible with WebGL1.0 contexts, falling back to GLSL1."),V=p.GLSL1),this.glslVersion=V,this.intPrecision=u.intPrecision||p.PRECISION_HIGH_P,this.floatPrecision=u.floatPrecision||p.PRECISION_HIGH_P,C.disable(C.DEPTH_TEST),C.pixelStorei(C.UNPACK_ALIGNMENT,1),this.isWebGL2)C.bindVertexArray(null);else{var j=(0,_.getExtension)(this,_.OES_VERTEX_ARRAY_OBJECT,!0);j.bindVertexArrayOES(null)}C.bindBuffer(C.ARRAY_BUFFER,null),u.clearValue!==void 0&&(this.clearValue=u.clearValue),this.resize([G.clientWidth,G.clientHeight]),this.verboseLogging&&console.log("".concat(this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS)," textures max."))}return x.initWithThreeRenderer=function(u,g){var E=new x(s(s({floatPrecision:u.capabilities.precision,intPrecision:u.capabilities.precision},g),{canvas:u.domElement,context:u.getContext()}));return E._threeRenderer=u,E},Object.defineProperty(x.prototype,"canvas",{get:function(){return this.gl.canvas},enumerable:!1,configurable:!0}),x.prototype._setValueProgramForType=function(u){var g=this._setValuePrograms,E=(0,A.uniformTypeForType)(u,this.glslVersion);return g[E]===void 0&&(g[E]=(0,v.setValueProgram)(this,{type:u,value:[0,0,0,0]})),g[E]},x.prototype._copyProgramForType=function(u){var g=this._copyPrograms,E=(0,A.uniformTypeForType)(u,this.glslVersion);return g[E]===void 0&&(g[E]=(0,v.copyProgram)(this,{type:u})),g[E]},x.prototype._initVertexBuffer=function(u){var g=this,E=g._errorCallback,L=g.gl,F=g.isWebGL2;if(F)L.bindVertexArray(null);else{var O=(0,_.getExtension)(this,_.OES_VERTEX_ARRAY_OBJECT,!0);O.bindVertexArrayOES(null)}var G=L.createBuffer();if(!G){E("Unable to allocate gl buffer.");return}return L.bindBuffer(L.ARRAY_BUFFER,G),L.bufferData(L.ARRAY_BUFFER,u,L.STATIC_DRAW),G},x.prototype._getQuadPositionsBuffer=function(){if(this._quadPositionsBuffer===void 0){var u=new Float32Array([-1,-1,1,-1,-1,1,1,1]);this._quadPositionsBuffer=this._initVertexBuffer(u)}return this._quadPositionsBuffer},x.prototype._getBoundaryPositionsBuffer=function(){if(this._boundaryPositionsBuffer===void 0){var u=new Float32Array([-1,-1,1,-1,1,1,-1,1,-1,-1]);this._boundaryPositionsBuffer=this._initVertexBuffer(u)}return this._boundaryPositionsBuffer},x.prototype._getCirclePositionsBuffer=function(u){var g=this._circlePositionsBuffer;if(g[u]==null){for(var E=[0,0],L=0;L<u;L++)E.push(Math.cos(2*Math.PI*L/u),Math.sin(2*Math.PI*L/u));E.push(Math.cos(0),Math.sin(0));var F=new Float32Array(E),O=this._initVertexBuffer(F);g[u]=O}return g[u]},x.prototype._cloneGPULayer=function(u,g){for(var E=u.is1D()?u.length:[u.width,u.height],L=new S.GPULayer(this,{name:g||"".concat(u.name,"-clone"),dimensions:E,type:u.type,numComponents:u.numComponents,filter:u.filter,wrapX:u.wrapX,wrapY:u.wrapY,numBuffers:u.numBuffers,clearValue:u.clearValue}),F=this._copyProgramForType(u.type),O=0;O<u.numBuffers-1;O++)L.incrementBufferIndex();for(var O=0;O<u.numBuffers;O++)this.step({program:F,input:u.getStateAtIndex(O),output:L});for(var O=-1;O<u.bufferIndex;O++)L.incrementBufferIndex();return L},x.prototype._getVertexShader=function(u,g,E,L){var F=this,O=F._errorCallback,G=F._vertexShaders,C=F.gl,N=F.glslVersion,V=F.intPrecision,j=F.floatPrecision,Q=G[u],H=Q.compiledShaders,q=Q.src;if(g===""&&(g="_default"),H[g]===void 0){if(q==="")throw new Error('Error compiling GPUProgram "'.concat(L,'": no source for vertex shader with name "').concat(u,'".'));var J=(0,m.preprocessVertexShader)(q,N),oe=(0,m.compileShader)(C,N,V,j,J,C.VERTEX_SHADER,L,O,E,void 0,!0);if(!oe){O('Unable to compile "'.concat(u).concat(g,'" vertex shader for GPUProgram "').concat(L,'".'));return}H[g]=oe}return H[g]},x.prototype.resize=function(u){var g=this.canvas,E=u[0],L=u[1];if(!(0,d.isNonNegativeInteger)(E)||!(0,d.isNonNegativeInteger)(L))throw(0,d.isArray)(u)?new Error("Invalid dimensions parameter supplied to GPUComposer.resize(), expected positive integers, got: ".concat(E,", ").concat(L)):new Error("Invalid dimensions parameter supplied to GPUComposer.resize(), expected dimensions array of length 2, got: ".concat(JSON.stringify(u)));g.width=E,g.height=L,this._width=E,this._height=L},x.prototype._drawSetup=function(u,g,E,L,F,O){var G=this.gl,C=[];if(F)if(F.layer)C.push(F);else if(F.constructor===S.GPULayer)C.push(F.currentState);else for(var N=0;N<F.length;N++){var V=F[N];C.push(V.currentState?V.currentState:V)}var j=u._getProgramWithName(g,E,C);this._setOutputLayer(u.name,L,F,O),G.useProgram(j);for(var N=0;N<C.length;N++)G.activeTexture(G.TEXTURE0+N),G.bindTexture(G.TEXTURE_2D,C[N].texture);return u._setInternalFragmentUniforms(j,C),j},x.prototype._setBlendMode=function(u){var g=this.gl;u&&(g.enable(g.BLEND),g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA))},x.prototype._addLayerToInputs=function(u,g){return g===void 0?[u]:(0,d.isArray)(g)?(0,m.indexOfLayerInArray)(u,g)>=0?g:h(h([],g,!0),[u],!1):g===u||g.layer===u?[g]:[g,u]},x.prototype._passThroughLayerDataFromInputToOutput=function(u){var g=this._copyProgramForType(u._internalType);this.step({program:g,input:u,output:u})},x.prototype._setOutputLayer=function(u,g,E,L){var F=this,O=F.gl,G=F.isWebGL2;if(!L){O.bindFramebuffer(O.FRAMEBUFFER,null);var C=this,N=C._width,V=C._height;O.viewport(0,0,N,V);return}for(var j=(0,d.isArray)(L)?L:[L],Q=0,H=j.length;Q<H;Q++){var q=j[Q];if(E&&(E===L||E.layer===L||(0,d.isArray)(E)&&(0,m.indexOfLayerInArray)(q,E)>=0)){if(q.numBuffers===1)throw new Error('Cannot use same buffer "'.concat(q.name,'" for input and output of a program. Try increasing the number of buffers in your output layer to at least 2 so you can render to nextState using currentState as an input.'));g?q._prepareForWrite(!0):(this._passThroughLayerDataFromInputToOutput(q),q._prepareForWrite(!1))}else g?q._prepareForWrite(!0):(q._usingTextureOverrideForCurrentBuffer()&&this._passThroughLayerDataFromInputToOutput(q),q._prepareForWrite(!1))}var J=j[0],oe=void 0,K=[O.COLOR_ATTACHMENT0];if(j.length>1){oe=[];for(var Q=1,H=j.length;Q<H;Q++)oe.push(j[Q]._currentTexture),K.push(O.COLOR_ATTACHMENT0+Q)}(0,D.bindFrameBuffer)(this,J,J._currentTexture,oe),G&&O.drawBuffers(K);var he=this._widthHeightForOutput(u,L),z=he.width,$=he.height;O.viewport(0,0,z,$)},x.prototype._setVertexAttribute=function(u,g,E,L){var F=this,O=F.gl,G=F._vertexAttributeLocations,C=F._enabledVertexAttributes,N=G[g],V;if(N||(N=new WeakMap,G[g]=N),V===void 0){if(V=O.getAttribLocation(u,g),V<0)throw new Error('Unable to find vertex attribute "'.concat(g,'" in program "').concat(L,'".'));N.set(u,V)}O.vertexAttribPointer(V,E,O.FLOAT,!1,0,0),O.enableVertexAttribArray(V),C[V]=!0},x.prototype._disableVertexAttributes=function(){for(var u=this,g=u._enabledVertexAttributes,E=u.gl,L=Object.keys(g),F=0,O=L.length;F<O;F++){var G=L[F];g[G]&&(E.disableVertexAttribArray(G),delete g[G])}},x.prototype._setPositionAttribute=function(u,g){this._setVertexAttribute(u,"a_gpuio_position",2,g)},x.prototype._setIndexAttribute=function(u,g){this._setVertexAttribute(u,"a_gpuio_index",1,g)},x.prototype._setUVAttribute=function(u,g){this._setVertexAttribute(u,"a_gpuio_uv",2,g)},x.prototype._widthHeightForOutput=function(u,g){if((0,d.isArray)(g)){for(var E=g[0],L=E?E.width:this._width,F=E?E.height:this._height,O=1,G=g.length;O<G;O++){var C=g[O];if(C.width!==L||C.height!==F)throw new Error("Output GPULayers must have the same dimensions, got dimensions [".concat(L,", ").concat(F,"] and [").concat(C.width,", ").concat(C.height,'] for program "').concat(u,'".'))}return{width:L,height:F}}var N=g?g.width:this._width,V=g?g.height:this._height;return{width:N,height:V}},x.prototype._iterateOverOutputsIfNeeded=function(u,g){if(u.output&&(0,d.isArray)(u.output)&&this.glslVersion===p.GLSL1){for(var E=0,L=u.output.length;E<L;E++)this[g](s(s({},u),{program:E===0?u.program:u.program._childPrograms[E-1],output:u.output[E]}));return!0}return!1},x.prototype._drawFinish=function(u){var g=this.gl;u.blendAlpha&&g.disable(g.BLEND)},x.prototype.step=function(u){var g=["program","input","output","blendAlpha"],E=["program"],L=Object.keys(u);if((0,w.checkValidKeys)(L,g,"GPUComposer.step(params)"),(0,w.checkRequiredKeys)(L,E,"GPUComposer.step(params)"),!this._iterateOverOutputsIfNeeded(u,"step")){var F=this,O=F.gl,G=F._errorState,C=u.program,N=u.input,V=u.output;if(!G){var j=this._drawSetup(C,p.DEFAULT_PROGRAM_NAME,{},!0,N,V);C._setVertexUniform(j,"u_gpuio_scale",[1,1],p.FLOAT),C._setVertexUniform(j,"u_gpuio_translation",[0,0],p.FLOAT),O.bindBuffer(O.ARRAY_BUFFER,this._getQuadPositionsBuffer()),this._setPositionAttribute(j,C.name),this._setBlendMode(u.blendAlpha),O.drawArrays(O.TRIANGLE_STRIP,0,4),this._drawFinish(u)}}},x.prototype.stepBoundary=function(u){var g=["program","input","output","edges","blendAlpha"],E=["program"],L=Object.keys(u);if((0,w.checkValidKeys)(L,g,"GPUComposer.stepBoundary(params)"),(0,w.checkRequiredKeys)(L,E,"GPUComposer.stepBoundary(params)"),!this._iterateOverOutputsIfNeeded(u,"stepBoundary")){var F=this,O=F.gl,G=F._errorState,C=u.program,N=u.input,V=u.output;if(!G){var j=this._widthHeightForOutput(C.name,V),Q=j.width,H=j.height,q=this._drawSetup(C,p.DEFAULT_PROGRAM_NAME,{},!1,N,V),J=[1/Q,1/H];if(C._setVertexUniform(q,"u_gpuio_scale",[1-J[0],1-J[1]],p.FLOAT),C._setVertexUniform(q,"u_gpuio_translation",J,p.FLOAT),O.bindBuffer(O.ARRAY_BUFFER,this._getBoundaryPositionsBuffer()),this._setPositionAttribute(q,C.name),this._setBlendMode(u.blendAlpha),u.edges){var oe=u.edges;(0,d.isArray)(oe)||(oe=[oe]);for(var K=0,he=oe.length;K<he;K++){var z=oe[K];z===p.BOUNDARY_LEFT&&O.drawArrays(O.LINES,3,2),z===p.BOUNDARY_RIGHT&&O.drawArrays(O.LINES,1,2),z===p.BOUNDARY_TOP&&O.drawArrays(O.LINES,2,2),z===p.BOUNDARY_BOTTOM&&O.drawArrays(O.LINES,0,2)}}else O.drawArrays(O.LINE_LOOP,0,4);this._drawFinish(u)}}},x.prototype.stepNonBoundary=function(u){var g=["program","input","output","blendAlpha"],E=["program"],L=Object.keys(u);if((0,w.checkValidKeys)(L,g,"GPUComposer.stepNonBoundary(params)"),(0,w.checkRequiredKeys)(L,E,"GPUComposer.stepNonBoundary(params)"),!this._iterateOverOutputsIfNeeded(u,"stepNonBoundary")){var F=this,O=F.gl,G=F._errorState,C=u.program,N=u.input,V=u.output;if(!G){var j=this._widthHeightForOutput(C.name,V),Q=j.width,H=j.height,q=this._drawSetup(C,p.DEFAULT_PROGRAM_NAME,{},!1,N,V),J=[1/Q,1/H];C._setVertexUniform(q,"u_gpuio_scale",[1-2*J[0],1-2*J[1]],p.FLOAT),C._setVertexUniform(q,"u_gpuio_translation",J,p.FLOAT),O.bindBuffer(O.ARRAY_BUFFER,this._getQuadPositionsBuffer()),this._setPositionAttribute(q,C.name),this._setBlendMode(u.blendAlpha),O.drawArrays(O.TRIANGLE_STRIP,0,4),this._drawFinish(u)}}},x.prototype.stepCircle=function(u){var g,E=["program","position","diameter","useOutputScale","input","output","numSegments","blendAlpha"],L=["program","position","diameter"],F=Object.keys(u);if((0,w.checkValidKeys)(F,E,"GPUComposer.stepCircle(params)"),(0,w.checkRequiredKeys)(F,L,"GPUComposer.stepCircle(params)"),!this._iterateOverOutputsIfNeeded(u,"stepCircle")){var O=this,G=O.gl,C=O._errorState,N=u.program,V=u.position,j=u.diameter,Q=u.input,H=u.output;if(!C){var q=this._width,J=this._height;u.useOutputScale&&(g=this._widthHeightForOutput(N.name,H),q=g.width,J=g.height);var oe=this._drawSetup(N,p.DEFAULT_PROGRAM_NAME,{},!1,Q,H);N._setVertexUniform(oe,"u_gpuio_scale",[j/q,j/J],p.FLOAT),N._setVertexUniform(oe,"u_gpuio_translation",[2*V[0]/q-1,2*V[1]/J-1],p.FLOAT);var K=u.numSegments?u.numSegments:p.DEFAULT_CIRCLE_NUM_SEGMENTS;if(K<3)throw new Error("numSegments for GPUComposer.stepCircle must be greater than 2, got ".concat(K,"."));G.bindBuffer(G.ARRAY_BUFFER,this._getCirclePositionsBuffer(K)),this._setPositionAttribute(oe,N.name),this._setBlendMode(u.blendAlpha),G.drawArrays(G.TRIANGLE_FAN,0,K+2),this._drawFinish(u)}}},x.prototype.stepSegment=function(u){var g,E=["program","position1","position2","thickness","useOutputScale","input","output","endCaps","numCapSegments","blendAlpha"],L=["program","position1","position2","thickness"],F=Object.keys(u);if((0,w.checkValidKeys)(F,E,"GPUComposer.stepSegment(params)"),(0,w.checkRequiredKeys)(F,L,"GPUComposer.stepSegment(params)"),!this._iterateOverOutputsIfNeeded(u,"stepSegment")){var O=this,G=O.gl,C=O._errorState,N=u.program,V=u.position1,j=u.position2,Q=u.thickness,H=u.input,q=u.output;if(!C){var J=this._width,oe=this._height;u.useOutputScale&&(g=this._widthHeightForOutput(N.name,q),J=g.width,oe=g.height);var K=this._drawSetup(N,p.SEGMENT_PROGRAM_NAME,{},!1,H,q);N._setVertexUniform(K,"u_gpuio_halfThickness",Q/2,p.FLOAT),N._setVertexUniform(K,"u_gpuio_scale",[2/J,2/oe],p.FLOAT);var he=V[0]-j[0],z=V[1]-j[1],$=Math.atan2(z,he);N._setVertexUniform(K,"u_gpuio_rotation",$,p.FLOAT);var ne=(V[0]+j[0])/2,W=(V[1]+j[1])/2;N._setVertexUniform(K,"u_gpuio_translation",[2*ne/J-1,2*W/oe-1],p.FLOAT);var Y=Math.sqrt(he*he+z*z),Z=u.numCapSegments?u.numCapSegments*2:p.DEFAULT_CIRCLE_NUM_SEGMENTS;if(u.endCaps){if(Z<6||Z%6!==0)throw new Error("numCapSegments for GPUComposer.stepSegment must be divisible by 3, got ".concat(Z/2,"."));N._setVertexUniform(K,"u_gpuio_length",Y,p.FLOAT),G.bindBuffer(G.ARRAY_BUFFER,this._getCirclePositionsBuffer(Z))}else N._setVertexUniform(K,"u_gpuio_length",Y-Q,p.FLOAT),G.bindBuffer(G.ARRAY_BUFFER,this._getQuadPositionsBuffer());this._setPositionAttribute(K,N.name),this._setBlendMode(u.blendAlpha),u.endCaps?G.drawArrays(G.TRIANGLE_FAN,0,Z+2):G.drawArrays(G.TRIANGLE_STRIP,0,4),this._drawFinish(u)}}},x.prototype.stepRect=function(u){var g=["program","position","size","useOutputScale","input","output","blendAlpha"],E=["program","position","size"],L=Object.keys(u);if((0,w.checkValidKeys)(L,g,"GPUComposer.stepRect(params)"),(0,w.checkRequiredKeys)(L,E,"GPUComposer.stepRect(params)"),!this._iterateOverOutputsIfNeeded(u,"stepRect")){var F=[u.position[0],u.position[1]+u.size[1]/2],O=[u.position[0]+u.size[0],F[1]];this.stepSegment({program:u.program,position1:F,position2:O,thickness:u.size[1],useOutputScale:u.useOutputScale,input:u.input,output:u.output,endCaps:!1,blendAlpha:u.blendAlpha})}},x.prototype.drawLayerAsPoints=function(u){var g,E=["layer","program","input","output","pointSize","useOutputScale","count","color","wrapX","wrapY","blendAlpha"],L=["layer"],F=Object.keys(u);if((0,w.checkValidKeys)(F,E,"GPUComposer.drawLayerAsPoints(params)"),(0,w.checkRequiredKeys)(F,L,"GPUComposer.drawLayerAsPoints(params)"),!this._iterateOverOutputsIfNeeded(u,"drawLayerAsPoints")){var O=this,G=O.gl,C=O._pointIndexArray,N=O.glslVersion,V=O._errorState,j=u.layer,Q=u.output;if(!V){if(j.numComponents!==2&&j.numComponents!==4)throw new Error('GPUComposer.drawLayerAsPoints() must be passed a layer parameter with either 2 or 4 components, got layer "'.concat(j.name,'" with ').concat(j.numComponents," components."));var H=j.length,q=u.count||H;if(q>H)throw new Error("Invalid count ".concat(q," for layer parameter of length ").concat(H,"."));N===p.GLSL1&&q>p.MAX_FLOAT_INT&&console.warn("Points positions array length: ".concat(q," is longer than what is supported by GLSL1 : ").concat(p.MAX_FLOAT_INT,"."));var J=u.program;if(J===void 0){J=this._setValueProgramForType(p.FLOAT);var oe=u.color||[1,0,0];if(oe.length!==3)throw new Error("Color parameter must have length 3, got ".concat(JSON.stringify(oe),"."));J.setUniform("u_value",h(h([],oe,!0),[1],!1),p.FLOAT)}var K=this._addLayerToInputs(j,u.input),he={};j.numComponents===4&&(he[p.GPUIO_VS_POSITION_W_ACCUM]="1"),u.wrapX&&(he[p.GPUIO_VS_WRAP_X]="1"),u.wrapY&&(he[p.GPUIO_VS_WRAP_Y]="1");var z=this._drawSetup(J,p.LAYER_POINTS_PROGRAM_NAME,he,!1,K,Q);J._setVertexUniform(z,"u_gpuio_positions",(0,m.indexOfLayerInArray)(j,K),p.INT);var $=this._width,ne=this._height;u.useOutputScale&&(g=this._widthHeightForOutput(J.name,Q),$=g.width,ne=g.height),J._setVertexUniform(z,"u_gpuio_scale",[1/$,1/ne],p.FLOAT);var W=u.pointSize||1;J._setVertexUniform(z,"u_gpuio_pointSize",W,p.FLOAT);var Y=[j.width,j.height];if(J._setVertexUniform(z,"u_gpuio_positionsDimensions",Y,p.FLOAT),N===p.GLSL1){if(this._pointIndexBuffer===void 0||C&&C.length<q){var Z=(0,m.initSequentialFloatArray)(H);this._pointIndexArray=Z,this._pointIndexBuffer=this._initVertexBuffer(Z)}G.bindBuffer(G.ARRAY_BUFFER,this._pointIndexBuffer),this._setIndexAttribute(z,J.name)}this._setBlendMode(u.blendAlpha),G.drawArrays(G.POINTS,0,q),this._drawFinish(u)}}},x.prototype.drawLayerAsVectorField=function(u){var g=["layer","program","input","output","vectorSpacing","vectorScale","color","blendAlpha"],E=["layer"],L=Object.keys(u);if((0,w.checkValidKeys)(L,g,"GPUComposer.drawLayerAsVectorField(params)"),(0,w.checkRequiredKeys)(L,E,"GPUComposer.drawLayerAsVectorField(params)"),!this._iterateOverOutputsIfNeeded(u,"drawLayerAsVectorField")){var F=this,O=F.gl,G=F._vectorFieldIndexArray,C=F._width,N=F._height,V=F.glslVersion,j=F._errorState,Q=u.layer,H=u.output;if(!j){if(Q.numComponents!==2)throw new Error('GPUComposer.drawLayerAsVectorField() must be passed a fieldLayer with 2 components, got fieldLayer "'.concat(Q.name,'" with ').concat(Q.numComponents," components."));var q=u.program;if(q===void 0){q=this._setValueProgramForType(p.FLOAT);var J=u.color||[1,0,0];if(J.length!==3)throw new Error("color parameter must have length 3, got ".concat(JSON.stringify(J),"."));q.setUniform("u_value",h(h([],J,!0),[1],!1),p.FLOAT)}var oe=this._addLayerToInputs(Q,u.input),K=this._drawSetup(q,p.LAYER_VECTOR_FIELD_PROGRAM_NAME,{},!1,oe,H);q._setVertexUniform(K,"u_gpuio_vectors",(0,m.indexOfLayerInArray)(Q,oe),p.INT);var he=u.vectorScale||1;q._setVertexUniform(K,"u_gpuio_scale",[he/C,he/N],p.FLOAT);var z=u.vectorSpacing||10,$=[Math.floor(C/z),Math.floor(N/z)];q._setVertexUniform(K,"u_gpuio_dimensions",$,p.FLOAT);var ne=2*$[0]*$[1];if(V===p.GLSL1){if(this._vectorFieldIndexBuffer===void 0||G&&G.length<ne){var W=(0,m.initSequentialFloatArray)(ne);this._vectorFieldIndexArray=W,this._vectorFieldIndexBuffer=this._initVertexBuffer(W)}O.bindBuffer(O.ARRAY_BUFFER,this._vectorFieldIndexBuffer),this._setIndexAttribute(K,q.name)}this._setBlendMode(u.blendAlpha),O.drawArrays(O.LINES,0,ne),this._drawFinish(u)}}},x.prototype.drawLayerAsMesh=function(u){var g,E=["layer","indices","program","input","output","useOutputScale","color","blendAlpha"],L=["layer"],F=Object.keys(u);if((0,w.checkValidKeys)(F,E,"GPUComposer.drawLayerAsMesh(params)"),(0,w.checkRequiredKeys)(F,L,"GPUComposer.drawLayerAsMesh(params)"),!this._iterateOverOutputsIfNeeded(u,"drawLayerAsMesh")){var O=this,G=O.gl,C=O._width,N=O._height,V=O.glslVersion,j=O._errorState,Q=O._meshIndexBuffer,H=O._meshIndexArray,q=u.layer,J=u.output;if(!j){if(q.numComponents!==2&&q.numComponents!==4)throw new Error('GPUComposer.drawLayerAsMesh() must be passed a layer parameter with either 2 or 4 components, got position GPULayer "'.concat(q.name,'" with ').concat(q.numComponents," components."));var oe=q.is1D()?q.length:q.width*q.height;V===p.GLSL1&&oe>p.MAX_FLOAT_INT&&console.warn("Mesh positions array length: ".concat(oe," is longer than what is supported by GLSL1 : ").concat(p.MAX_FLOAT_INT,"."));var K=u.program;if(K===void 0){K=this._setValueProgramForType(p.FLOAT);var he=u.color||[1,0,0];if(he.length!==3)throw new Error("Color parameter must have length 3, got ".concat(JSON.stringify(he),"."));K.setUniform("u_value",h(h([],he,!0),[1],!1),p.FLOAT)}var z=this._addLayerToInputs(q,u.input),$={};q.numComponents===4&&($[p.GPUIO_VS_POSITION_W_ACCUM]="1");var ne=this._drawSetup(K,p.LAYER_MESH_PROGRAM_NAME,$,!1,z,J);K._setVertexUniform(ne,"u_gpuio_positions",(0,m.indexOfLayerInArray)(q,z),p.INT);var W=C,Y=N;u.useOutputScale&&(g=this._widthHeightForOutput(K.name,J),W=g.width,Y=g.height),K._setVertexUniform(ne,"u_gpuio_scale",[1/W,1/Y],p.FLOAT);var Z=[q.width,q.height];if(K._setVertexUniform(ne,"u_gpuio_positionsDimensions",Z,p.FLOAT),V===p.GLSL1){if(Q===void 0||H&&H.length<oe){var ie=(0,m.initSequentialFloatArray)(oe);this._meshIndexArray=ie,this._meshIndexBuffer=this._initVertexBuffer(ie)}G.bindBuffer(G.ARRAY_BUFFER,this._meshIndexBuffer),this._setIndexAttribute(ne,K.name)}if(this._setBlendMode(u.blendAlpha),u.indices){var ce=u.indices,ue=ce.glType,le=ce.count,k=ce.buffer;G.bindBuffer(G.ELEMENT_ARRAY_BUFFER,k);var B=0;G.drawElements(G.TRIANGLES,le,ue,B)}else G.drawArrays(G.TRIANGLES,0,oe);this._drawFinish(u)}}},Object.defineProperty(x.prototype,"clearValue",{get:function(){return this._clearValue},set:function(u){var g=p.FLOAT,E=4;if(!(0,w.isValidClearValue)(u,E,g))throw new Error("Invalid clearValue: ".concat(JSON.stringify(u)," for GPUComposer, expected ").concat(g," or array of ").concat(g," of length ").concat(E,"."));this._clearValue=(0,d.isArray)(u)?u.slice():u,this._clearValueVec4=void 0},enumerable:!1,configurable:!0}),Object.defineProperty(x.prototype,"clearValueVec4",{get:function(){var u=this._clearValueVec4;if(!u){var g=this.clearValue;if(u=[],(0,d.isFiniteNumber)(g))u.push(g,g,g,g);else{u.push.apply(u,g);for(var E=u.length;E<4;E++)u.push(0)}this._clearValueVec4=u}return u},enumerable:!1,configurable:!0}),x.prototype.clear=function(){var u=this,g=u.verboseLogging,E=u.clearValueVec4;g&&console.log("Clearing GPUComoser.");var L=this._setValueProgramForType(p.FLOAT);L.setUniform("u_value",E),this.step({program:L})},x.prototype.undoThreeState=function(){var u=this,g=u.gl,E=u._threeRenderer,L=u.isWebGL2;if(!E)throw new Error("Can't call undoThreeState() on a GPUComposer that was not inited with GPUComposer.initWithThreeRenderer().");if(g.disable(g.BLEND),E)if(L)g.bindVertexArray(null);else{var F=(0,_.getExtension)(this,_.OES_VERTEX_ARRAY_OBJECT,!0);F.bindVertexArrayOES(null)}},x.prototype.resetThreeState=function(){var u=this,g=u.gl,E=u._threeRenderer;if(!E)throw new Error("Can't call resetThreeState() on a GPUComposer that was not inited with GPUComposer.initWithThreeRenderer().");var L=E.getViewport(new y.Vector4);g.viewport(L.x,L.y,L.width,L.height),E.resetState()},x.prototype.savePNG=function(u){u===void 0&&(u={});var g=["filename","dpi","callback"],E=Object.keys(u);(0,w.checkValidKeys)(E,g,"GPUComposer.savePNG(params)");var L=this.canvas,F=u.filename||"output",O=u.callback||saveAs;L.toBlob(function(G){if(!G){console.warn("Problem saving PNG, unable to init blob from canvas.");return}u.dpi?(0,l.changeDpiBlob)(G,u.dpi).then(function(C){O(C,"".concat(F,".png"))}):O(G,"".concat(F,".png"))},"image/png")},x.prototype.tick=function(){this._numTicks+=1;var u=this,g=u._lastTickTime,E=u._lastTickFPS,L=performance.now();if(this._lastTickTime=L,!g)return{fps:0,numTicks:this._numTicks};var F=1e3/(L-g);E||(E=F);var O=.9,G=Number.parseFloat((O*E+(1-O)*F).toFixed(1));return this._lastTickFPS=G,{fps:G,numTicks:this._numTicks}},Object.defineProperty(x.prototype,"numTicks",{get:function(){return this._numTicks},enumerable:!1,configurable:!0}),x.prototype.dispose=function(){var u=this,g,E=this,L=E.gl,F=E.verboseLogging;F&&console.log("Deallocating GPUComposer."),this._quadPositionsBuffer&&(L.deleteBuffer(this._quadPositionsBuffer),delete this._quadPositionsBuffer),this._boundaryPositionsBuffer&&(L.deleteBuffer(this._boundaryPositionsBuffer),delete this._boundaryPositionsBuffer),Object.keys(this._circlePositionsBuffer).forEach(function(O){L.deleteBuffer(u._circlePositionsBuffer[O])}),delete this._circlePositionsBuffer,delete this._pointIndexArray,this._pointIndexBuffer&&(L.deleteBuffer(this._pointIndexBuffer),delete this._pointIndexBuffer),delete this._vectorFieldIndexArray,this._vectorFieldIndexBuffer&&(L.deleteBuffer(this._vectorFieldIndexBuffer),delete this._vectorFieldIndexBuffer),this._indexedLinesIndexBuffer&&(L.deleteBuffer(this._indexedLinesIndexBuffer),delete this._indexedLinesIndexBuffer),Object.keys(this._vertexAttributeLocations).forEach(function(O){delete u._vertexAttributeLocations[O]}),delete this._vertexAttributeLocations,delete this._enabledVertexAttributes,Object.values(this._vertexShaders).forEach(function(O){var G=O.compiledShaders;Object.keys(G).forEach(function(C){L.deleteShader(G[C]),delete G[C]})}),delete this._vertexShaders,Object.values(this._copyPrograms).forEach(function(O){O.dispose()}),Object.keys(this._copyPrograms).forEach(function(O){delete u._copyPrograms[O]}),delete this._copyPrograms,Object.values(this._setValuePrograms).forEach(function(O){O.dispose()}),Object.keys(this._setValuePrograms).forEach(function(O){delete u._setValuePrograms[O]}),delete this._setValuePrograms,(g=this._wrappedLineColorProgram)===null||g===void 0||g.dispose(),delete this._wrappedLineColorProgram,delete this._threeRenderer,delete this.gl,delete this.canvas,delete this._errorCallback,delete this._extensions,delete this._errorState,delete this.verboseLogging,delete this._numTicks,delete this.isWebGL2,delete this.glslVersion,delete this.intPrecision,delete this.floatPrecision,delete this._width,delete this._height,delete this._clearValue,delete this._clearValueVec4},x}();r.GPUComposer=M},981:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.GPUIndexBuffer=void 0;var s=f(566),h=f(650),l=f(707),d=f(581),S=function(){function p(y,m){if(this._composer=y,!m)throw new Error("Error initing GPUIndexBuffer: must pass params to GPUIndexBuffer(composer, params).");if(!(0,s.isObject)(m))throw new Error("Error initing GPUIndexBuffer: must pass valid params object to GPUIndexBuffer(composer, params), got ".concat(JSON.stringify(m),"."));var R=["indices","name"],U=["indices"],I=Object.keys(m);(0,l.checkValidKeys)(I,R,"GPUIndexBuffer(composer, params)",m.name),(0,l.checkRequiredKeys)(I,U,"GPUIndexBuffer(composer, params)",m.name);var T=m.indices,P=y.gl,b=y.isWebGL2,A=P.createBuffer();P.bindBuffer(P.ELEMENT_ARRAY_BUFFER,A),(0,h.isTypedArray)(T)||(T=new Uint32Array(T));var v;switch(T.constructor){case Uint8Array:v=P.UNSIGNED_BYTE;break;case Uint16Array:v=P.UNSIGNED_SHORT;break;case Uint32Array:if(!b){var w=(0,d.getExtension)(y,d.OES_ELEMENT_INDEX_UINT,!0);if(!w){v=P.UNSIGNED_SHORT,T=Uint16Array.from(T);break}}v=P.UNSIGNED_INT;break}P.bufferData(P.ELEMENT_ARRAY_BUFFER,T,P.STATIC_DRAW),this.buffer=A,this.glType=v,this.count=T.length}return p.prototype.dispose=function(){var y=this,m=y._composer,R=y.buffer;m.gl.deleteBuffer(R),delete this._composer,delete this.buffer,delete this.glType,delete this.count},p}();r.GPUIndexBuffer=S},355:function(c,r,f){var s=this&&this.__awaiter||function(P,b,A,v){function w(D){return D instanceof A?D:new A(function(_){_(D)})}return new(A||(A=Promise))(function(D,_){function M(g){try{u(v.next(g))}catch(E){_(E)}}function x(g){try{u(v.throw(g))}catch(E){_(E)}}function u(g){g.done?D(g.value):w(g.value).then(M,x)}u((v=v.apply(P,b||[])).next())})},h=this&&this.__generator||function(P,b){var A={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},v,w,D,_;return _={next:M(0),throw:M(1),return:M(2)},typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function M(u){return function(g){return x([u,g])}}function x(u){if(v)throw new TypeError("Generator is already executing.");for(;A;)try{if(v=1,w&&(D=u[0]&2?w.return:u[0]?w.throw||((D=w.return)&&D.call(w),0):w.next)&&!(D=D.call(w,u[1])).done)return D;switch(w=0,D&&(u=[u[0]&2,D.value]),u[0]){case 0:case 1:D=u;break;case 4:return A.label++,{value:u[1],done:!1};case 5:A.label++,w=u[1],u=[0];continue;case 7:u=A.ops.pop(),A.trys.pop();continue;default:if(D=A.trys,!(D=D.length>0&&D[D.length-1])&&(u[0]===6||u[0]===2)){A=0;continue}if(u[0]===3&&(!D||u[1]>D[0]&&u[1]<D[3])){A.label=u[1];break}if(u[0]===6&&A.label<D[1]){A.label=D[1],D=u;break}if(D&&A.label<D[2]){A.label=D[2],A.ops.push(u);break}D[2]&&A.ops.pop(),A.trys.pop();continue}u=b.call(P,A)}catch(g){u=[6,g],w=0}finally{v=D=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}};Object.defineProperty(r,"__esModule",{value:!0}),r.GPULayer=void 0;var l=f(650),d=f(566),S=f(809),p=f(162),y=f(707),m=f(601),R=f(593),U=f(798),I=f(690),T=function(){function P(b,A){this._clearValue=0,this._bufferIndex=0,this._buffers=[];var v=(A||{}).name;if(!b)throw new Error('Error initing GPULayer "'.concat(v,'": must pass GPUComposer instance to GPULayer(composer, params).'));if(!A)throw new Error("Error initing GPULayer: must pass params to GPULayer(composer, params).");if(!(0,d.isObject)(A))throw new Error("Error initing GPULayer: must pass valid params object to GPULayer(composer, params), got ".concat(JSON.stringify(A),"."));var w=["name","type","numComponents","dimensions","filter","wrapX","wrapY","numBuffers","clearValue","array"],D=["name","type","numComponents","dimensions"],_=Object.keys(A);(0,y.checkValidKeys)(_,w,"GPULayer(composer, params)",A.name),(0,y.checkRequiredKeys)(_,D,"GPULayer(composer, params)",A.name);var M=A.dimensions,x=A.type,u=A.numComponents,g=b.gl;if(this._composer=b,this.name=v,!(0,d.isPositiveInteger)(u)||u>4)throw new Error("Invalid numComponents: ".concat(JSON.stringify(u),' for GPULayer "').concat(v,'", must be number in range [1-4].'));this.numComponents=u;var E=P.calcGPULayerSize(M,v,b.verboseLogging),L=E.length,F=E.width,O=E.height;this._length=L,this._width=F,this._height=O;var G=L===void 0&&(x===m.FLOAT||x==m.HALF_FLOAT)?m.LINEAR:m.NEAREST,C=A.filter!==void 0?A.filter:G;if(!(0,y.isValidFilter)(C))throw new Error("Invalid filter: ".concat(JSON.stringify(C),' for GPULayer "').concat(v,'", must be one of ').concat(JSON.stringify(m.validFilters),"."));if(C===m.LINEAR&&!(x===m.FLOAT||x==m.HALF_FLOAT))throw new Error('LINEAR filtering is not supported on integer types, please use NEAREST filtering for GPULayer "'.concat(v,'" with type: ').concat(x,"."));this.filter=C;var N=A.wrapX!==void 0?A.wrapX:m.CLAMP_TO_EDGE;if(!(0,y.isValidWrap)(N))throw new Error("Invalid wrapX: ".concat(JSON.stringify(N),' for GPULayer "').concat(v,'", must be one of ').concat(JSON.stringify(m.validWraps),"."));this.wrapX=N;var V=A.wrapY!==void 0?A.wrapY:m.CLAMP_TO_EDGE;if(!(0,y.isValidWrap)(V))throw new Error("Invalid wrapY: ".concat(JSON.stringify(V),' for GPULayer "').concat(v,'", must be one of ').concat(JSON.stringify(m.validWraps),"."));if(this.wrapY=V,!(0,y.isValidDataType)(x))throw new Error("Invalid type: ".concat(JSON.stringify(x),' for GPULayer "').concat(v,'", must be one of ').concat(JSON.stringify(m.validDataTypes),"."));this.type=x;var j=P.getGPULayerInternalType({composer:b,type:x,name:v});this._internalType=j;var Q=P.getGLTextureParameters({composer:b,name:v,numComponents:u,internalType:j}),H=Q.glFormat,q=Q.glInternalFormat,J=Q.glType,oe=Q.glNumChannels;this._glInternalFormat=q,this._glFormat=H,this._glType=J,this._glNumChannels=oe;var K=P.getGPULayerInternalFilter({composer:b,filter:C,wrapX:N,wrapY:V,internalType:j,name:v});this._internalFilter=K,this._glFilter=g[K],this._internalWrapX=P.getGPULayerInternalWrap({composer:b,wrap:N,internalFilter:K,internalType:j,name:v}),this._glWrapS=g[this._internalWrapX],this._internalWrapY=P.getGPULayerInternalWrap({composer:b,wrap:V,internalFilter:K,internalType:j,name:v}),this._glWrapT=g[this._internalWrapY];var he=A.numBuffers!==void 0?A.numBuffers:1;if(!(0,d.isPositiveInteger)(he))throw new Error("Invalid numBuffers: ".concat(JSON.stringify(he),' for GPULayer "').concat(v,'", must be positive integer.'));this.numBuffers=he,A.clearValue!==void 0&&(this.clearValue=A.clearValue),this._initBuffers(A.array)}return P.initFromImageURL=function(b,A){return s(this,void 0,void 0,function(){return h(this,function(v){return[2,new Promise(function(w,D){if(!A)throw new Error("Error initing GPULayer: must pass params to GPULayer.initFromImageURL(composer, params).");if(!(0,d.isObject)(A))throw new Error("Error initing GPULayer: must pass valid params object to GPULayer.initFromImageURL(composer, params), got ".concat(JSON.stringify(A),"."));var _=["name","url","filter","wrapX","wrapY","format","type","clearValue"],M=["name","url"],x=Object.keys(A);(0,y.checkValidKeys)(x,_,"GPULayer.initFromImageURL(composer, params)",A.name),(0,y.checkRequiredKeys)(x,M,"GPULayer.initFromImageURL(composer, params)",A.name);var u=A.url,g=A.name,E=A.filter,L=A.wrapX,F=A.wrapY,O=A.type,G=A.format;if(!(0,d.isString)(u))throw new Error("Expected GPULayer.initFromImageURL params to have url of type string, got ".concat(u," of type ").concat(typeof u,"."));if(O&&!(0,y.isValidImageType)(O))throw new Error('Invalid type: "'.concat(O,'" for GPULayer.initFromImageURL "').concat(g,'", must be one of ').concat(JSON.stringify(m.validImageTypes),"."));if(G&&!(0,y.isValidImageFormat)(G))throw new Error('Invalid format: "'.concat(G,'" for GPULayer.initFromImageURL "').concat(g,'", must be one of ').concat(JSON.stringify(m.validImageFormats),"."));var C=new P(b,{name:g,type:O||m.FLOAT,numComponents:G?G.length:4,dimensions:[1,1],filter:E,wrapX:L,wrapY:F,numBuffers:1,clearValue:A.clearValue}),N=new Image;N.onload=function(){C.resize([N.width,N.height],N),w(C)},N.onerror=function(V){D(new Error('Error loading image "'.concat(g,'": ').concat(V)))},N.src=u})]})})},Object.defineProperty(P.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"length",{get:function(){if(!this._length)throw new Error('Cannot access length on 2D GPULayer "'.concat(this.name,'".'));return this._length},enumerable:!1,configurable:!0}),P.prototype.is1D=function(){return this._length!==void 0},P.prototype.is2D=function(){return!this.is1D()},P.prototype._usingTextureOverrideForCurrentBuffer=function(){return!!(this._textureOverrides&&this._textureOverrides[this.bufferIndex])},P.prototype.copyCurrentStateToGPULayer=function(b){var A=this._composer;if(this===b)throw new Error("Can't call GPULayer.copyCurrentStateToGPULayer() on self.");var v=A._copyProgramForType(this._internalType);A.step({program:v,input:this,output:b})},P.prototype._initBuffers=function(b){var A=this,v=A.name,w=A.numBuffers,D=A._composer,_=A._glInternalFormat,M=A._glFormat,x=A._glType,u=A._glFilter,g=A._glWrapS,E=A._glWrapT,L=A.width,F=A.height,O=D.gl,G=D._errorCallback,C=null;(0,d.isArray)(b)?C=P.validateGPULayerArray(b,this):b?.constructor===HTMLImageElement&&(C=b);for(var N=0;N<w;N++){var V=O.createTexture();if(!V){G('Could not init texture for GPULayer "'.concat(v,'": ').concat(O.getError(),"."));return}O.bindTexture(O.TEXTURE_2D,V),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_WRAP_S,g),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_WRAP_T,E),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_MIN_FILTER,u),O.texParameteri(O.TEXTURE_2D,O.TEXTURE_MAG_FILTER,u),O.texImage2D(O.TEXTURE_2D,0,_,L,F,0,M,x,C),this._buffers.push(V)}O.bindTexture(O.TEXTURE_2D,null),O.bindFramebuffer(O.FRAMEBUFFER,null)},Object.defineProperty(P.prototype,"bufferIndex",{get:function(){return this._bufferIndex},enumerable:!1,configurable:!0}),P.prototype.incrementBufferIndex=function(){var b=this.numBuffers;b!==1&&(this._bufferIndex=(this.bufferIndex+1)%b)},P.prototype.decrementBufferIndex=function(){var b=this.numBuffers;b!==1&&(this._bufferIndex=(this.bufferIndex-1+b)%b)},Object.defineProperty(P.prototype,"currentState",{get:function(){return this.getStateAtIndex(this.bufferIndex)},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"_currentTexture",{get:function(){var b=this,A=b._buffers,v=b._bufferIndex,w=b._textureOverrides;return w&&w[v]?w[v]:A[v]},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"lastState",{get:function(){if(this.numBuffers===1)throw new Error('Cannot access lastState on GPULayer "'.concat(this.name,'" with only one buffer.'));return this.getStateAtIndex((this.bufferIndex-1+this.numBuffers)%this.numBuffers)},enumerable:!1,configurable:!0}),P.prototype.getStateAtIndex=function(b){var A=this,v=A.numBuffers,w=A._textureOverrides,D=A._buffers;b<0&&b>-v&&(b+=v),(b<0||b>=v)&&(console.warn("Out of range buffer index: ".concat(b,' for GPULayer "').concat(this.name,'" with $.numBuffers} buffer').concat(v>1?"s":"",".  Was this intentional?")),b<0?b+=v*Math.ceil(Math.abs(b)/v):b=b%v);var _=D[b];return w&&w[b]&&(_=w[b]),{texture:_,layer:this}},P.prototype._prepareForWrite=function(b){b&&this.incrementBufferIndex(),this._textureOverrides&&(this._textureOverrides[this.bufferIndex]=void 0)},P.prototype.setFromArray=function(b){var A=this,v=A._composer,w=A._glInternalFormat,D=A._glFormat,_=A._glType,M=A.width,x=A.height,u=A._currentTexture,g=v.gl,E=P.validateGPULayerArray(b,this);g.bindTexture(g.TEXTURE_2D,u),g.texImage2D(g.TEXTURE_2D,0,w,M,x,0,D,_,E),g.bindTexture(g.TEXTURE_2D,null)},P.prototype.setAtIndex2D=function(b,A,v){var w=this,D=w._composer,_=w.width,M=w.height,x=w._currentTexture,u=D.gl;if(b<0||b>=_||A<0||A>=M)throw new Error("Invalid coordinates [".concat(b,", ").concat(A,'] for GPULayer "').concat(this.name,'" with dimensions [').concat(_,", ").concat(M,"]."));var g=P.validateGPULayerArray(v,this,1);u.bindTexture(u.TEXTURE_2D,x),u.texSubImage2D(u.TEXTURE_2D,0,b,A,1,1,this._glFormat,this._glType,g),u.bindTexture(u.TEXTURE_2D,null)},P.prototype.setAtIndex1D=function(b,A){var v=this;v._glInternalFormat,v._glFormat,v._glType;var w=v.width,D=v.height;if(v._currentTexture,b<0||b>=w*D)throw new Error("Invalid index ".concat(b,' for GPULayer "').concat(this.name,'" with dimensions [').concat(w,", ").concat(D,"]."));var _=b%w,M=Math.floor(b/w);this.setAtIndex2D(_,M,A)},P.prototype.resize=function(b,A){var v=this,w=v.name,D=v._composer,_=D.verboseLogging;_&&console.log('Resizing GPULayer "'.concat(w,'" to ').concat(JSON.stringify(b),"."));var M=P.calcGPULayerSize(b,w,_),x=M.length,u=M.width,g=M.height;this._length=x,this._width=u,this._height=g,this._destroyBuffers(),this._initBuffers(A)},Object.defineProperty(P.prototype,"clearValue",{get:function(){return this._clearValue},set:function(b){var A=this,v=A.numComponents,w=A.type;if(!(0,y.isValidClearValue)(b,v,w))throw new Error("Invalid clearValue: ".concat(JSON.stringify(b),' for GPULayer "').concat(this.name,'", expected ').concat(w," or array of ").concat(w," of length ").concat(v,"."));this._clearValue=(0,d.isArray)(b)?b.slice():b,this._clearValueVec4=void 0},enumerable:!1,configurable:!0}),Object.defineProperty(P.prototype,"clearValueVec4",{get:function(){var b=this._clearValueVec4;if(!b){var A=this.clearValue;if(b=[],(0,d.isFiniteNumber)(A))b.push(A,A,A,A);else{b.push.apply(b,A);for(var v=b.length;v<4;v++)b.push(0)}this._clearValueVec4=b}return b},enumerable:!1,configurable:!0}),P.prototype.clear=function(b){b===void 0&&(b=!1);var A=this,v=A.name,w=A._composer,D=A.clearValueVec4,_=A.numBuffers,M=A.type,x=w.verboseLogging;x&&console.log('Clearing GPULayer "'.concat(v,'".'));var u=w._setValueProgramForType(M);u.setUniform("u_value",D),this.decrementBufferIndex();for(var g=b?_:1,E=0;E<g;E++)w.step({program:u,output:this});b&&this.incrementBufferIndex()},P.prototype._getValuesSetup=function(){var b=this,A=b.width,v=b.height,w=b._composer,D=b._currentTexture,_=this._valuesRaw,M=w.gl;(0,U.bindFrameBuffer)(w,this,D);var x=this,u=x._glNumChannels,g=x._glType,E=x._glFormat,L=x._internalType;switch(L){case m.HALF_FLOAT:M.FLOAT!==void 0?(u=4,E=M.RGBA,g=M.FLOAT,_=_||new Float32Array(A*v*u)):_=_||new Uint16Array(A*v*u);break;case m.FLOAT:u=4,E=M.RGBA,_=_||new Float32Array(A*v*u);break;case m.UNSIGNED_BYTE:u=4,E=M.RGBA_INTEGER,g=M.UNSIGNED_INT,_=_||new Uint32Array(A*v*u);break;case m.UNSIGNED_SHORT:u=4,E=M.RGBA_INTEGER,g=M.UNSIGNED_INT,_=_||new Uint32Array(A*v*u);break;case m.UNSIGNED_INT:u=4,E=M.RGBA_INTEGER,_=_||new Uint32Array(A*v*u);break;case m.BYTE:u=4,E=M.RGBA_INTEGER,g=M.INT,_=_||new Int32Array(A*v*u);break;case m.SHORT:u=4,E=M.RGBA_INTEGER,g=M.INT,_=_||new Int32Array(A*v*u);break;case m.INT:u=4,E=M.RGBA_INTEGER,_=_||new Int32Array(A*v*u);break;default:throw new Error("Unsupported internalType ".concat(L," for getValues()."))}if(this._valuesRaw=_,(0,R.readyToRead)(M))return{_glFormat:E,_glType:g,_valuesRaw:_,_glNumChannels:u,_internalType:L};throw new Error("Unable to read values from Buffer with status: ".concat(M.checkFramebufferStatus(M.FRAMEBUFFER),"."))},P.prototype._getValuesPost=function(b,A,v){var w=this,D=w.width,_=w.height,M=w.numComponents,x=w.type,u=(this._length?this._length:D*_)*M,g=v===m.HALF_FLOAT&&b.constructor===Uint16Array,E=this._valuesBufferView;g&&!E&&(E=new DataView(b.buffer),this._valuesBufferView=E),b.length===u&&(0,I.arrayConstructorForType)(x,!0)===b.constructor?this._values=b:this._values||(this._values=P.initArrayForType(x,u,!0));var L=this._values;if(E||L!==b||M!==A)for(var F=0,O=D*_;F<O;F++){var G=F*A,C=F*M;if(C>=u)break;for(var N=0;N<M;N++)E?L[C+N]=(0,l.getFloat16)(E,2*(G+N),!0):L[C+N]=b[G+N]}return L},P.prototype.getValues=function(){var b=this,A=b.width,v=b.height,w=b._composer,D=w.gl,_=this._getValuesSetup(),M=_._glFormat,x=_._glType,u=_._valuesRaw,g=_._glNumChannels,E=_._internalType;return D.readPixels(0,0,A,v,M,x,u),this._getValuesPost(u,g,E)},P.prototype.getValuesAsync=function(){return s(this,void 0,void 0,function(){var b,A,v,w,D,_,M,x,u,g,E,L;return h(this,function(F){switch(F.label){case 0:return b=this,A=b.width,v=b.height,w=b._composer,D=w.gl,_=w.isWebGL2,_?(M=this._getValuesSetup(),x=M._glFormat,u=M._glType,g=M._valuesRaw,E=M._glNumChannels,L=M._internalType,[4,(0,R.readPixelsAsync)(D,0,0,A,v,x,u,g)]):[2,this.getValues()];case 1:return F.sent(),[2,this._getValuesPost(g,E,L)]}})})},P.prototype._getCanvasWithImageData=function(b){var A=this.getValues(),v=this,w=v.width,D=v.height,_=v.numComponents,M=v.type;b=b||(M===m.FLOAT||M===m.HALF_FLOAT?255:1);var x=document.createElement("canvas");x.width=w,x.height=D;for(var u=x.getContext("2d"),g=u.getImageData(0,0,w,D),E=g.data,L=0;L<D;L++)for(var F=0;F<w;F++){for(var O=L*w+F,G=(D-1-L)*w+F,C=0;C<_;C++)E[4*G+C]=A[_*O+C]*b;_===1&&(E[4*G+1]=E[4*G],E[4*G+2]=E[4*G]),_<4&&(E[4*G+3]=255)}return u.putImageData(g,0,0),x},P.prototype.getImage=function(b){if(b){var A=["multiplier"],v=Object.keys(b);(0,y.checkValidKeys)(v,A,"GPULayer.getImage(params)")}var w=this._getCanvasWithImageData(b&&b.multiplier),D=new Image;return D.src=w.toDataURL(),D},P.prototype.savePNG=function(b){b===void 0&&(b={});var A=["filename","dpi","multiplier","callback"],v=Object.keys(b);(0,y.checkValidKeys)(v,A,"GPULayer.savePNG(params)");var w=this.name,D=b.callback||p.saveAs,_=b.filename||w,M=this._getCanvasWithImageData(b.multiplier);M.toBlob(function(x){if(!x){console.warn('Problem saving PNG from GPULayer "'.concat(w,'", unable to init blob.'));return}b.dpi?(0,S.changeDpiBlob)(x,b.dpi).then(function(u){D(u,"".concat(_,".png"))}):D(x,"".concat(_,".png"))},"image/png")},P.prototype.attachToThreeTexture=function(b){var A=this,v=A._composer,w=A.numBuffers,D=A.currentState,_=A.name,M=v._threeRenderer,x=v.gl;if(!M)throw new Error("GPUComposer was not inited with a renderer.");if(w>1)throw new Error('GPULayer "'.concat(_,'" contains multiple WebGL textures (one for each buffer) that are flip-flopped during compute cycles, please choose a GPULayer with one buffer.  You can copy the current state of this GPULayer to a single buffer GPULayer during your render loop.'));var u=M.properties.get(b);x.deleteTexture(u.__webglTexture),u.__webglTexture=D.texture,u.__webglInit=!0},P.prototype._destroyBuffers=function(){var b=this,A=b._composer,v=b._buffers,w=A.gl;v.forEach(function(D){w.deleteTexture(D),(0,U.disposeFramebuffers)(w,D)}),v.length=0,delete this._textureOverrides},P.prototype.clone=function(b){return this._composer._cloneGPULayer(this,b)},P.prototype.dispose=function(){var b=this,A=b.name,v=b._composer,w=v.gl,D=v.verboseLogging;if(D&&console.log('Deallocating GPULayer "'.concat(A,'".')),!w)throw new Error("Must call dispose() on all GPULayers before calling dispose() on GPUComposer.");this._destroyBuffers(),delete this._buffers,delete this._composer,this._values&&delete this._values,this._valuesRaw&&delete this._valuesRaw},P}();r.GPULayer=T},191:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.minMaxValuesForType=r.testFilterWrap=r.testWriteSupport=r.shouldCastIntTypeAsFloat=void 0;var s=f(566),h=f(650),l=f(601),d=f(690),S=f(581),p=f(798),y=f(355),m=f(593),R={writeSupport:{},filterWrapSupport:{}};y.GPULayer.initArrayForType=function(b,A,v){return v===void 0&&(v=!1),new((0,d.arrayConstructorForType)(b,v))(A)},y.GPULayer.calcGPULayerSize=function(b,A,v){if((0,s.isNumber)(b)){if(!(0,s.isPositiveInteger)(b))throw new Error("Invalid length: ".concat(JSON.stringify(b),' for GPULayer "').concat(A,'", must be positive integer.'));var w=b,D=Math.ceil(Math.sqrt(w)),_=Math.ceil(w/D);return v&&console.log("Using [".concat(D,", ").concat(_,"] for 1D array of length ").concat(b,' in GPULayer "').concat(A,'".')),{width:D,height:_,length:w}}var M=b[0];if(!(0,s.isPositiveInteger)(M))throw new Error("Invalid width: ".concat(JSON.stringify(M),' for GPULayer "').concat(A,'", must be positive integer.'));var x=b[1];if(!(0,s.isPositiveInteger)(x))throw new Error("Invalid height: ".concat(JSON.stringify(x),' for GPULayer "').concat(A,'", must be positive integer.'));return{width:M,height:x}},y.GPULayer.getGPULayerInternalWrap=function(b){var A=b.composer,v=b.wrap,w=b.internalFilter,D=b.internalType;return v===l.CLAMP_TO_EDGE||T(A,D,w,v)?v:l.CLAMP_TO_EDGE},y.GPULayer.getGPULayerInternalFilter=function(b){var A=b.filter;if(A===l.NEAREST)return A;var v=b.composer,w=b.internalType,D=b.wrapX,_=b.wrapY,M=b.name;if(w===l.HALF_FLOAT){var x=(0,S.getExtension)(v,S.OES_TEXTURE_HAlF_FLOAT_LINEAR,!0)||(0,S.getExtension)(v,S.OES_TEXTURE_FLOAT_LINEAR,!0);(!x||!T(v,w,A,D)||!T(v,w,A,_))&&(console.warn("This browser does not support ".concat(A," filtering for type ").concat(w," and wrap [").concat(D,", ").concat(_,'].  Falling back to NEAREST filter for GPULayer "').concat(M,'" with ').concat(A," polyfill in fragment shader.")),A=l.NEAREST)}if(w===l.FLOAT){var x=(0,S.getExtension)(v,S.OES_TEXTURE_FLOAT_LINEAR,!0);(!x||!T(v,w,A,D)||!T(v,w,A,_))&&(console.warn("This browser does not support ".concat(A," filtering for type ").concat(w," and wrap [").concat(D,", ").concat(_,'].  Falling back to NEAREST filter for GPULayer "').concat(M,'" with ').concat(A," polyfill in fragment shader.")),A=l.NEAREST)}return A};function U(b,A){var v=b.glslVersion,w=b.isWebGL2;return v===l.GLSL3&&w?!1:A===l.UNSIGNED_BYTE||A===l.BYTE||A===l.SHORT||A===l.INT||A===l.UNSIGNED_SHORT||A===l.UNSIGNED_INT}r.shouldCastIntTypeAsFloat=U,y.GPULayer.getGLTextureParameters=function(b){var A=b.composer,v=b.name,w=b.numComponents,D=b.internalType,_=A.gl,M=A.glslVersion,x=A.isWebGL2,u,g,E,L;if(x){if(L=w,w===3&&(L=4),D===l.FLOAT||D===l.HALF_FLOAT)switch(L){case 1:g=_.RED;break;case 2:g=_.RG;break;case 4:g=_.RGBA;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}else switch(L){case 1:g=_.RED_INTEGER;break;case 2:g=_.RG_INTEGER;break;case 4:g=_.RGBA_INTEGER;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}switch(D){case l.HALF_FLOAT:switch(u=_.HALF_FLOAT,L){case 1:E=_.R16F;break;case 2:E=_.RG16F;break;case 4:E=_.RGBA16F;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}break;case l.FLOAT:switch(u=_.FLOAT,L){case 1:E=_.R32F;break;case 2:E=_.RG32F;break;case 4:E=_.RGBA32F;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}break;case l.UNSIGNED_BYTE:if(u=_.UNSIGNED_BYTE,M===l.GLSL1&&D===l.UNSIGNED_BYTE)E=g;else switch(L){case 1:E=_.R8UI;break;case 2:E=_.RG8UI;break;case 4:E=_.RGBA8UI;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}break;case l.BYTE:switch(u=_.BYTE,L){case 1:E=_.R8I;break;case 2:E=_.RG8I;break;case 4:E=_.RGBA8I;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}break;case l.SHORT:switch(u=_.SHORT,L){case 1:E=_.R16I;break;case 2:E=_.RG16I;break;case 4:E=_.RGBA16I;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}break;case l.UNSIGNED_SHORT:switch(u=_.UNSIGNED_SHORT,L){case 1:E=_.R16UI;break;case 2:E=_.RG16UI;break;case 4:E=_.RGBA16UI;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}break;case l.INT:switch(u=_.INT,L){case 1:E=_.R32I;break;case 2:E=_.RG32I;break;case 4:E=_.RGBA32I;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}break;case l.UNSIGNED_INT:switch(u=_.UNSIGNED_INT,L){case 1:E=_.R32UI;break;case 2:E=_.RG32UI;break;case 4:E=_.RGBA32UI;break;default:throw new Error("Unsupported glNumChannels: ".concat(L,' for GPULayer "').concat(v,'".'))}break;default:throw new Error('Unsupported type: "'.concat(D,'" for GPULayer "').concat(v,'".'))}}else{if(w<1||w>4)throw new Error("Unsupported numComponents: ".concat(w,' for GPULayer "').concat(v,'".'));switch(L=4,g=_.RGBA,E=_.RGBA,D){case l.FLOAT:u=_.FLOAT;break;case l.HALF_FLOAT:u=_.HALF_FLOAT||(0,S.getExtension)(A,S.OES_TEXTURE_HALF_FLOAT).HALF_FLOAT_OES;break;default:throw new Error('Unsupported type: "'.concat(D,'" in WebGL 1.0 for GPULayer "').concat(v,'".'))}}if(u===void 0||g===void 0||E===void 0){var F=[];throw u===void 0&&F.push("glType"),g===void 0&&F.push("glFormat"),E===void 0&&F.push("glInternalFormat"),new Error("Invalid type: ".concat(D," for numComponents: ").concat(w,", unable to init parameter").concat(F.length>1?"s":""," ").concat(F.join(", "),' for GPULayer "').concat(v,'".'))}if(L===void 0||w<1||w>4||L<w)throw new Error("Invalid numChannels: ".concat(L," for numComponents: ").concat(w,' for GPULayer "').concat(v,'".'));return{glFormat:g,glInternalFormat:E,glType:u,glNumChannels:L}};function I(b,A){var v=b.gl,w=b.glslVersion,D=b.isWebGL2,_="".concat(D,",").concat(A,",").concat(w===l.GLSL3?"3":"1");if(R.writeSupport[_]!==void 0)return R.writeSupport[_];var M=v.createTexture();if(!M)return R.writeSupport[_]=!1,R.writeSupport[_];v.bindTexture(v.TEXTURE_2D,M);var x=v[l.CLAMP_TO_EDGE],u=v[l.NEAREST],g=10,E=10;v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,x),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,x),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,u),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,u);var L=y.GPULayer.getGLTextureParameters({composer:b,name:"testWriteSupport",numComponents:1,internalType:A}),F=L.glInternalFormat,O=L.glFormat,G=L.glType;v.texImage2D(v.TEXTURE_2D,0,F,g,E,0,O,G,null);var C=v.createFramebuffer();if(!C)return v.deleteTexture(M),R.writeSupport[_]=!1,R.writeSupport[_];v.bindFramebuffer(v.FRAMEBUFFER,C),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M,0);var N=v.checkFramebufferStatus(v.FRAMEBUFFER)===v.FRAMEBUFFER_COMPLETE;return v.deleteTexture(M),v.deleteFramebuffer(C),R.writeSupport[_]=N,R.writeSupport[_]}r.testWriteSupport=I;function T(b,A,v,w){var D,_=b.gl,M=b.glslVersion,x=b.intPrecision,u=b.floatPrecision,g=b._errorCallback,E=b.isWebGL2,L="".concat(E,",").concat(A,",").concat(v,",").concat(w,",").concat(M===l.GLSL3?"3":"1");if(R.filterWrapSupport[L]!==void 0)return R.filterWrapSupport[L];var F=_.createTexture();if(!F)return R.filterWrapSupport[L]=!1,R.filterWrapSupport[L];_.bindTexture(_.TEXTURE_2D,F);var O=_[w],G=_[v],C=3,N=3,V=1;_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,O),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,O),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,G),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,G);for(var j=y.GPULayer.getGLTextureParameters({composer:b,name:"testFilterWrap",numComponents:V,internalType:A}),Q=j.glInternalFormat,H=j.glFormat,q=j.glType,J=j.glNumChannels,oe=[3,56.5,834,-53.6,.003,96.2,23,90.2,32],K=y.GPULayer.initArrayForType(A,oe.length*J,!0),he=0;he<oe.length;he++)K[he*J]=oe[he],oe[he]=K[he*J];if(A===l.HALF_FLOAT){for(var z=new Uint16Array(K.length),$=new DataView(z.buffer),he=0;he<K.length;he++)(0,h.setFloat16)($,2*he,K[he],!0);K=z}_.texImage2D(_.TEXTURE_2D,0,Q,C,N,0,H,q,K);var ne=new y.GPULayer(b,{name:"testFloatLinearFiltering-output",type:A,numComponents:V,dimensions:[C,N],wrapX:l.CLAMP_TO_EDGE,wrapY:l.CLAMP_TO_EDGE,filter:l.NEAREST}),W=v===l.LINEAR?.5:1,Y="testFilterWrap-program",Z=`
in vec2 v_uv;
uniform vec2 u_offset;
#ifdef GPUIO_INT
	uniform isampler2D u_input;
	out int out_result;
#endif
#ifdef GPUIO_UINT
	uniform usampler2D u_input;
	out uint out_result;
#endif
#ifdef GPUIO_FLOAT
	uniform sampler2D u_input;
	out float out_result;
#endif
void main() {
	out_result = texture(u_input, v_uv + offset).x;
}`;M!==l.GLSL3&&(Z=(0,m.convertFragmentShaderToGLSL1)(Z,Y)[0]);var ie=(0,m.compileShader)(_,M,x,u,Z,_.FRAGMENT_SHADER,Y,g,(D={offset:"vec2(".concat(W/C,", ").concat(W/N,")")},D[(0,m.isUnsignedIntType)(A)?"GPUIO_UINT":(0,m.isIntType)(A)?"GPUIO_INT":"GPUIO_FLOAT"]="1",D),void 0,!0);function ce(de,Se){return w===l.CLAMP_TO_EDGE?Math.max(0,Math.min(Se-1,de)):(de+Se)%Se}var ue=b._getVertexShader(l.DEFAULT_PROGRAM_NAME,"",{},Y);if(ue&&ie){var le=(0,m.initGLProgram)(_,ue,ie,Y,g);if(le){ne._prepareForWrite(!1),(0,p.bindFrameBuffer)(b,ne,ne._currentTexture),_.viewport(0,0,C,N),_.useProgram(le),_.activeTexture(_.TEXTURE0),_.bindTexture(_.TEXTURE_2D,F),_.uniform2fv(_.getUniformLocation(le,"u_gpuio_scale"),[1,1]),_.uniform2fv(_.getUniformLocation(le,"u_gpuio_translation"),[0,0]),_.bindBuffer(_.ARRAY_BUFFER,b._getQuadPositionsBuffer()),b._setPositionAttribute(le,Y),_.drawArrays(_.TRIANGLE_STRIP,0,4),_.disable(_.BLEND);for(var k=ne.getValues(),B=!0,re=(0,m.isIntType)(A)?0:A===l.HALF_FLOAT?.01:1e-4,ge=0;ge<C;ge++)for(var _e=0;_e<N;_e++){var ye=void 0;if(v===l.LINEAR)ye=(oe[_e*C+ge]+oe[_e*C+ce(ge+1,C)]+oe[ce(_e+1,N)*C+ge]+oe[ce(_e+1,N)*C+ce(ge+1,C)])/4;else{var we=ce(ge+W,C),xe=ce(_e+W,N);ye=oe[xe*C+we]}var he=_e*C+ge;if(Math.abs((ye-k[he])/ye)>re){B=!1;break}}R.filterWrapSupport[L]=B,_.deleteProgram(le)}else R.filterWrapSupport[L]=!1;_.deleteShader(ie)}else R.filterWrapSupport[L]=!1;return ne.dispose(),_.deleteTexture(F),R.filterWrapSupport[L]}r.testFilterWrap=T,y.GPULayer.getGPULayerInternalType=function(b){var A=b.composer,v=b.name,w=A._errorCallback,D=A.isWebGL2,_=b.type,M=_,x=U(A,_);if(x&&(M===l.UNSIGNED_BYTE||M===l.BYTE?M=l.HALF_FLOAT:(console.warn("Falling back ".concat(M,' type to FLOAT type for glsl1.x support for GPULayer "').concat(v,`".
Large UNSIGNED_INT or INT with absolute value > 16,777,216 are not supported, on mobile UNSIGNED_INT, INT, UNSIGNED_SHORT, and SHORT with absolute value > 2,048 may not be supported.`)),M=l.FLOAT)),D){if(M===l.FLOAT){var u=(0,S.getExtension)(A,S.EXT_COLOR_BUFFER_FLOAT,!0);if(!u)console.warn('FLOAT not supported in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(v,'".')),M=l.HALF_FLOAT;else{var g=I(A,M);g||(console.warn('FLOAT not supported for writing operations in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(v,'".')),M=l.HALF_FLOAT)}}if(M===l.HALF_FLOAT){var E=(0,S.getExtension)(A,S.EXT_COLOR_BUFFER_HALF_FLOAT,!0);E||(0,S.getExtension)(A,S.EXT_COLOR_BUFFER_FLOAT,!0);var g=I(A,M);g||(console.warn("This browser does not support writing to HALF_FLOAT textures."),w("This browser does not support writing to HALF_FLOAT textures."))}}else{if(M===l.FLOAT){var u=(0,S.getExtension)(A,S.OES_TEXTURE_FLOAT,!0);if(u){var g=I(A,M);g||(console.warn('FLOAT not supported for writing operations in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(v,'".')),M=l.HALF_FLOAT)}else console.warn('FLOAT not supported in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(v,'".')),M=l.HALF_FLOAT}if(M===l.HALF_FLOAT){(0,S.getExtension)(A,S.OES_TEXTURE_HALF_FLOAT,!0);var g=I(A,M);g||console.warn("This browser does not support writing to HALF_FLOAT textures.")}}return M};function P(b){var A=-1/0,v=1/0;switch(b){case l.UNSIGNED_BYTE:A=l.MIN_UNSIGNED_BYTE,v=l.MAX_UNSIGNED_BYTE;break;case l.BYTE:A=l.MIN_BYTE,v=l.MAX_BYTE;break;case l.UNSIGNED_SHORT:A=l.MIN_UNSIGNED_SHORT,v=l.MAX_UNSIGNED_SHORT;break;case l.SHORT:A=l.MIN_SHORT,v=l.MAX_SHORT;break;case l.UNSIGNED_INT:A=l.MIN_UNSIGNED_INT,v=l.MAX_UNSIGNED_INT;break;case l.INT:A=l.MIN_INT,v=l.MAX_INT;break}return{min:A,max:v}}r.minMaxValuesForType=P,y.GPULayer.validateGPULayerArray=function(b,A,v){v===void 0&&(v=null);var w=A.numComponents,D=A.width,_=A.height,M=A.name,x=A._glNumChannels,u=A._internalType,g=A.is1D()?A.length:null;if(v){if(b.length!==v*w)throw new Error("Invalid data length: ".concat(b.length,' for GPULayer "').concat(M,'" of numComponents: ').concat(w,"."))}else if(b.length!==D*_*w&&(!g||g&&b.length!==g*w))throw new Error("Invalid data length: ".concat(b.length,' for GPULayer "').concat(M,'" of ').concat(g?"length ".concat(g," and "):"","dimensions: [").concat(D,", ").concat(_,"] and numComponents: ").concat(w,"."));var E=!1;switch(b.constructor){case Array:E=!0;break;case Float32Array:E=u!==l.FLOAT;break;case Uint8Array:E=u!==l.UNSIGNED_BYTE;break;case Int8Array:E=u!==l.BYTE;break;case Uint16Array:E=u!==l.UNSIGNED_SHORT;break;case Int16Array:E=u!==l.SHORT;break;case Uint32Array:E=u!==l.UNSIGNED_INT;break;case Int32Array:E=u!==l.INT;break;default:throw new Error("Invalid array type: ".concat(b.constructor.name,' for GPULayer "').concat(M,'", please use one of [').concat(l.validArrayTypes.map(function(he){return he.name}).join(", "),"]."))}var L=P(u),F=L.min,O=L.max,G=v?v*x:D*_*x,C=b.length!==G,N=b;if(E||C){N=y.GPULayer.initArrayForType(u,G);for(var V=u===l.HALF_FLOAT&&E?new DataView(N.buffer):null,j=0,Q=b.length/w;j<Q;j++)for(var H=0;H<w;H++){var q=b[j*w+H],J=q,oe=!1;J<F?(J=F,oe=!0):J>O&&(J=O,oe=!0),oe&&console.warn("Clipping out of range value ".concat(q," to ").concat(J,' for GPULayer "').concat(M,'" with internal type ').concat(u,"."));var K=j*x+H;V?(0,h.setFloat16)(V,2*K,J,!0):N[K]=J}}return N}},664:function(c,r,f){var s=this&&this.__extends||function(){var I=function(T,P){return I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,A){b.__proto__=A}||function(b,A){for(var v in A)Object.prototype.hasOwnProperty.call(A,v)&&(b[v]=A[v])},I(T,P)};return function(T,P){if(typeof P!="function"&&P!==null)throw new TypeError("Class extends value "+String(P)+" is not a constructor or null");I(T,P);function b(){this.constructor=T}T.prototype=P===null?Object.create(P):(b.prototype=P.prototype,new b)}}(),h=this&&this.__assign||function(){return h=Object.assign||function(I){for(var T,P=1,b=arguments.length;P<b;P++){T=arguments[P];for(var A in T)Object.prototype.hasOwnProperty.call(T,A)&&(I[A]=T[A])}return I},h.apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.GPUProgram=void 0;var l=f(601),d=f(593),S=f(360),p=f(566),y=f(707),m=f(581),R=function(){function I(T,P){var b=this;this._fragmentShaders={},this._compileTimeConstants={},this._uniforms={},this._programs={},this._programsKeyLookup=new WeakMap,this._samplerUniformsIndices=[];var A=(P||{}).name;if(!T)throw new Error('Error initing GPUProgram "'.concat(A,'": must pass GPUComposer instance to GPUProgram(composer, params).'));if(!P)throw new Error("Error initing GPUProgram: must pass params to GPUProgram(composer, params).");if(!(0,p.isObject)(P))throw new Error("Error initing GPUProgram: must pass valid params object to GPUProgram(composer, params), got ".concat(JSON.stringify(P),"."));var v=["name","fragmentShader","uniforms","compileTimeConstants"],w=["name","fragmentShader"],D=Object.keys(P);(0,y.checkValidKeys)(D,v,"GPUProgram(composer, params)",P.name),(0,y.checkRequiredKeys)(D,w,"GPUProgram(composer, params)",P.name);var _=P.fragmentShader,M=P.uniforms,x=P.compileTimeConstants;this._composer=T,this.name=A;var u=(0,p.isString)(_)?_:_.join(`
`),g=(0,d.preprocessFragmentShader)(u,T.glslVersion,A),E=g.shaderSource,L=g.samplerUniforms,F=g.additionalSources;if(this._fragmentShaderSource=E,L.forEach(function(H,q){b._samplerUniformsIndices.push({name:H,inputIndex:0,shaderIndex:q})}),this.constructor===I&&F){this._childPrograms=[];for(var O=0,G=F.length;O<G;O++)this._childPrograms.push(new U(T,P,{fragmentShaderSource:F[O]}))}if(x&&(this._compileTimeConstants=h({},x)),T.glslVersion===l.GLSL1&&(E.includes("dFdx")||E.includes("dFdy")||E.includes("fwidth"))){var C=(0,m.getExtension)(T,m.OES_STANDARD_DERIVATIVES,!0);C&&(this._extensions=`#extension GL_OES_standard_derivatives : enable
`)}if(M)for(var O=0;O<M.length;O++){var N=M[O],V=N.name,j=N.value,Q=N.type;this.setUniform(V,j,Q)}}return I.prototype.recompile=function(T){var P=this._compileTimeConstants,b=!1;if(Object.keys(T).forEach(function(j){P[j]!==T[j]&&(b=!0,P[j]=T[j])}),!!b){for(var A=this,v=A._fragmentShaders,w=A._programs,D=A._programsKeyLookup,_=A._composer,M=A._uniforms,x=_.gl,u=Object.keys(w),g=0,E=u.length;g<E;g++){var L=u[g],F=w[L];x.deleteProgram(F),D.delete(F),delete w[L]}for(var O=Object.keys(v),g=0,G=O.length;g<G;g++){var L=O[g];x.deleteShader(v[L]),delete v[L]}for(var C=Object.values(M),g=0,N=C.length;g<N;g++)C[g].location=new WeakMap;if(this._childPrograms)for(var g=0,V=this._childPrograms.length;g<V;g++)this._childPrograms[g].recompile(T)}},I.prototype._getFragmentShader=function(T,P){var b=this._fragmentShaders;if(b[T])return b[T];for(var A=this,v=A._composer,w=A.name,D=A._fragmentShaderSource,_=A._compileTimeConstants,M=A._extensions,x=v.gl,u=v._errorCallback,g=v.verboseLogging,E=v.glslVersion,L=v.floatPrecision,F=v.intPrecision,O=Object.keys(P),G=0;G<O.length;G++){var C=O[G];_[C]=P[C]}g&&console.log('Compiling fragment shader for GPUProgram "'.concat(w,'" with compile time constants: ').concat(JSON.stringify(_)));var N=(0,d.compileShader)(x,E,F,L,D,x.FRAGMENT_SHADER,w,u,_,M,Object.keys(b).length===0);if(!N){u('Unable to compile fragment shader for GPUProgram "'.concat(w,'".'));return}return b[T]=N,b[T]},I.prototype._getProgramWithName=function(T,P,b){for(var A=this,v=A._samplerUniformsIndices,w=A._composer,D="",_={},M=0,x=v.length;M<x;M++){var u=v[M].inputIndex,g=b[u].layer,E=g.filter,L=g.wrapX,F=g.wrapY,O=g.type,G=g._internalFilter,C=g._internalWrapX,N=g._internalWrapY,V=L===C?0:L===l.REPEAT?1:0,j=F===N?0:F===l.REPEAT?1:0,Q=E===G?0:E===l.LINEAR?1:0;D+="_IN".concat(M,"_").concat(V,"_").concat(j,"_").concat(Q),_["".concat(S.SAMPLER2D_WRAP_X).concat(M)]="".concat(V),_["".concat(S.SAMPLER2D_WRAP_Y).concat(M)]="".concat(j),_["".concat(S.SAMPLER2D_FILTER).concat(M)]="".concat(Q),w.glslVersion===l.GLSL1&&(0,d.isIntType)(O)&&(_["".concat(S.SAMPLER2D_CAST_INT).concat(M)]="1")}var H=Object.keys(P).map(function(k){return"_".concat(k,"_").concat(P[k])}).join(),q="".concat(T).concat(H).concat(D);if(this._programs[q])return this._programs[q];var J=this,oe=J._uniforms,K=J._programs,he=J._programsKeyLookup,z=w.gl,$=w._errorCallback,ne=w._getVertexShader(T,H,P,this.name);if(ne===void 0){$('Unable to init vertex shader "'.concat(T).concat(H,'" for GPUProgram "').concat(this.name,'".'));return}var W=this._getFragmentShader(D,_);if(W===void 0){$('Unable to init fragment shader "'.concat(D,'" for GPUProgram "').concat(this.name,'".'));return}var Y=(0,d.initGLProgram)(z,ne,W,this.name,$);if(Y===void 0){z.deleteShader(W),$('Unable to init program "'.concat(q,'" for GPUProgram "').concat(this.name,'".'));return}z.useProgram(Y);for(var Z=Object.keys(oe),M=0,ie=Z.length;M<ie;M++){var ce=Z[M],ue=oe[ce],le=ue.value,O=ue.type;this._setProgramUniform(Y,ce,le,O)}return K[q]=Y,he.set(Y,q),Y},I.prototype._setProgramUniform=function(T,P,b,A){var v,w=this,D=w._composer,_=w._uniforms,M=D.gl,x=D._errorCallback,u=D.glslVersion,g=u===l.GLSL3,E=(v=_[P])===null||v===void 0?void 0:v.location.get(T);if(E===void 0){var L=M.getUniformLocation(T,P);if(L===null){console.warn('Could not init uniform "'.concat(P,'" for program "').concat(this.name,'". Check that uniform is present in shader code, unused uniforms may be removed by compiler. Also check that uniform type in shader code matches type ').concat(A,". Error code: ").concat(M.getError(),"."));return}E=L,_[P]&&_[P].location.set(T,E);var F=M.getUniform(T,E),O=!1;if(A===l.BOOL_1D_UNIFORM||A===l.BOOL_2D_UNIFORM||A===l.BOOL_3D_UNIFORM||A===l.BOOL_4D_UNIFORM?!(0,p.isBoolean)(F)&&F.constructor!==Array&&(O=!0):A===l.FLOAT_1D_UNIFORM||A===l.FLOAT_2D_UNIFORM||A===l.FLOAT_3D_UNIFORM||A===l.FLOAT_4D_UNIFORM?!(0,p.isFiniteNumber)(F)&&F.constructor!==Float32Array&&(O=!0):A===l.INT_1D_UNIFORM||A===l.INT_2D_UNIFORM||A===l.INT_3D_UNIFORM||A===l.INT_4D_UNIFORM?!(0,p.isInteger)(F)&&F.constructor!==Int32Array&&(O=!0):(A===l.UINT_1D_UNIFORM||A===l.UINT_2D_UNIFORM||A===l.UINT_3D_UNIFORM||A===l.UINT_4D_UNIFORM)&&(g?!(0,p.isNonNegativeInteger)(F)&&F.constructor!==Uint32Array&&(O=!0):!(0,p.isNonNegativeInteger)(F)&&F.constructor!==Int32Array&&(O=!0)),O){x('Invalid uniform "'.concat(P,'" for program "').concat(this.name,'". Check that uniform type in shader code matches type ').concat(A,", gl.getUniform(program, location) returned type: ").concat(F.constructor.name,"."));return}}switch(A){case l.BOOL_1D_UNIFORM:M.uniform1i(E,b?1:0);break;case l.BOOL_2D_UNIFORM:M.uniform2i(E,b[0]?1:0,b[1]?1:0);break;case l.BOOL_3D_UNIFORM:M.uniform3i(E,b[0]?1:0,b[1]?1:0,b[2]?1:0);break;case l.BOOL_4D_UNIFORM:M.uniform4i(E,b[0]?1:0,b[1]?1:0,b[2]?1:0,b[3]?1:0);break;case l.FLOAT_1D_UNIFORM:M.uniform1f(E,b);break;case l.FLOAT_2D_UNIFORM:M.uniform2fv(E,b);break;case l.FLOAT_3D_UNIFORM:M.uniform3fv(E,b);break;case l.FLOAT_4D_UNIFORM:M.uniform4fv(E,b);break;case l.INT_1D_UNIFORM:M.uniform1i(E,b);break;case l.INT_2D_UNIFORM:M.uniform2iv(E,b);break;case l.INT_3D_UNIFORM:M.uniform3iv(E,b);break;case l.INT_4D_UNIFORM:M.uniform4iv(E,b);break;case l.UINT_1D_UNIFORM:g?M.uniform1ui(E,b):M.uniform1i(E,b);break;case l.UINT_2D_UNIFORM:g?M.uniform2uiv(E,b):M.uniform2iv(E,b);break;case l.UINT_3D_UNIFORM:g?M.uniform3uiv(E,b):M.uniform3iv(E,b);break;case l.UINT_4D_UNIFORM:g?M.uniform4uiv(E,b):M.uniform4iv(E,b);break;default:throw new Error("Unknown uniform type ".concat(A,' for GPUProgram "').concat(this.name,'".'))}},I.prototype._cacheUniformValue=function(T,P,b){var A=this._uniforms,v=A[T];if(!v)return A[T]={location:new WeakMap,value:(0,p.isArray)(P)?P.slice():P,type:b},!0;var w=v.value;if(v.value=(0,p.isArray)(P)?P.slice():P,(0,p.isArray)(P)){for(var D=0,_=P.length;D<_;D++)if(P[D]!==w[D])return!0;return!1}return P!==w},I.prototype.setUniform=function(T,P,b){var A,v=this,w=v._programs,D=v._uniforms,_=v._composer,M=v._samplerUniformsIndices,x=_.verboseLogging,u=_.gl;if((0,p.isArray)(P)){var g=P.length;if(g>4)throw new Error("Invalid uniform value: [".concat(P.join(", "),'] passed to GPUProgram "').concat(this.name,', uniforms must be of type number[] with length <= 4, number, or boolean."'))}var E=(A=D[T])===null||A===void 0?void 0:A.type;if(b){var L=(0,d.uniformInternalTypeForValue)(P,b,T,this.name);if(E===void 0)E=L;else if(E!==L)throw new Error('Uniform "'.concat(T,'" for GPUProgram "').concat(this.name,'" cannot change from type ').concat(E," to type ").concat(L,"."))}if(E===void 0)throw new Error('Unknown type for uniform "'.concat(T,'", please pass in type to GPUProgram.setUniform(name, value, type) when initing a new uniform.'));var F=this._cacheUniformValue(T,P,E);if(F){var O=M.find(function(H){return H.name===T});O&&(0,p.isInteger)(P)&&(O.inputIndex=P),x&&console.log('Setting uniform "'.concat(T,'" for program "').concat(this.name,'" to value ').concat(JSON.stringify(P),"."));for(var G=Object.keys(w),C=0,N=G.length;C<N;C++){var V=G[C],j=w[V];u.useProgram(j),this._setProgramUniform(j,T,P,E)}if(this._childPrograms)for(var C=0,Q=this._childPrograms.length;C<Q;C++)this._childPrograms[C].setUniform(T,P,b)}},I.prototype._setInternalFragmentUniforms=function(T,P){if(P.length!==0){if(!T)throw new Error("Must pass in valid WebGLProgram to GPUProgram._setInternalFragmentUniforms, got undefined.");var b=this,A=b._programsKeyLookup,v=b._samplerUniformsIndices,w=A.get(T);if(!w)throw new Error('Could not find valid programName for WebGLProgram in GPUProgram "'.concat(this.name,'".'));for(var D=new Array(Math.max(P.length,v.length)).fill(-1),_=0,M=v.length;_<M;_++){var x=v[_],u=x.inputIndex,g=x.shaderIndex;D[u]>=0?console.warn("Found > 1 sampler2D uniforms at texture index ".concat(u,' for GPUProgram "').concat(this.name,'".')):D[u]=g}for(var _=0,E=P.length;_<E;_++){var L=P[_].layer,F=L.width,O=L.height,G=D[_];if(!(G<0)){var C=L.filter,N=L.wrapX,V=L.wrapY,j=L._internalFilter,Q=L._internalWrapX,H=L._internalWrapY,q=C!==j;if(q||N!==Q||V!==H){var J=[.5/F,.5/O],oe="".concat(S.SAMPLER2D_HALF_PX_UNIFORM).concat(G),K=this._cacheUniformValue(oe,J,l.FLOAT_2D_UNIFORM);if(K&&this._setProgramUniform(T,oe,J,l.FLOAT_2D_UNIFORM),q){var he=[F,O],z="".concat(S.SAMPLER2D_DIMENSIONS_UNIFORM).concat(G),$=this._cacheUniformValue(z,he,l.FLOAT_2D_UNIFORM);$&&this._setProgramUniform(T,z,he,l.FLOAT_2D_UNIFORM)}}}}}},I.prototype._setVertexUniform=function(T,P,b,A){if(!T)throw new Error("Must pass in valid WebGLProgram to GPUProgram._setVertexUniform, got undefined.");var v=this._programsKeyLookup,w=v.get(T);if(!w)throw new Error('Could not find valid programName for WebGLProgram in GPUProgram "'.concat(this.name,'".'));var D=(0,d.uniformInternalTypeForValue)(b,A,P,this.name);this._setProgramUniform(T,P,b,D)},I.prototype.dispose=function(){var T=this,P=T._composer,b=T._fragmentShaders,A=T._programs,v=T._programsKeyLookup,w=P.gl,D=P.verboseLogging;if(D&&console.log('Deallocating GPUProgram "'.concat(this.name,'".')),!w)throw new Error("Must call dispose() on all GPUPrograms before calling dispose() on GPUComposer.");if(Object.values(A).forEach(function(x){x&&(w.deleteProgram(x),v.delete(x))}),Object.keys(A).forEach(function(x){delete A[x]}),Object.values(b).forEach(function(x){w.deleteShader(x)}),Object.keys(b).forEach(function(x){delete b[x]}),this._childPrograms){for(var _=0,M=this._childPrograms.length;_<M;_++)this._childPrograms[_].dispose();this._childPrograms.length}delete this._childPrograms,delete this._composer,delete this.name,delete this._fragmentShaderSource,delete this._compileTimeConstants,delete this._extensions,delete this._uniforms,delete this._programs,delete this._programsKeyLookup,delete this._fragmentShaders,delete this._samplerUniformsIndices},I}();r.GPUProgram=R;var U=function(I){s(T,I);function T(P,b,A){var v=I.call(this,P,b)||this,w=A.fragmentShaderSource;return v._fragmentShaderSource=w,v}return T}(R)},579:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.wrappedLineColorProgram=r.renderSignedAmplitudeProgram=r.renderAmplitudeProgram=r.renderRGBProgram=r.zeroProgram=r.setColorProgram=r.setValueProgram=r.multiplyValueProgram=r.addValueProgram=r.addLayersProgram=r.copyProgram=void 0;var s=f(566),h=f(601),l=f(690),d=f(664);function S(v,w){var D=w.type,_=w.precision||"",M=(0,l.glslTypeForType)(D,4),x=w.name||"copy_".concat((0,l.uniformTypeForType)(D,v.glslVersion),"_layer");return new d.GPUProgram(v,{name:x,fragmentShader:`
in vec2 v_uv;
uniform `.concat(_," ").concat((0,l.glslPrefixForType)(D),`sampler2D u_state;
out `).concat(_," ").concat(M,` out_result;
void main() {
	out_result = texture(u_state, v_uv);
}`),uniforms:[{name:"u_state",value:0,type:h.INT}]})}r.copyProgram=S;function p(v,w){var D=w.type,_=w.numInputs||2,M=w.precision||"",x=w.components||"xyzw",u=(0,l.glslTypeForType)(D,x.length),g=new Array(_),E=w.name||"".concat(_,"-way_add_").concat((0,l.uniformTypeForType)(D,v.glslVersion),"_").concat(x);return new d.GPUProgram(v,{name:E,fragmentShader:`
in vec2 v_uv;
`.concat(g.map(function(L,F){return"uniform ".concat(M," ").concat((0,l.glslPrefixForType)(D),"sampler2D u_state").concat(F,";")}).join(`
`),`
out `).concat(M," ").concat(u,` out_result;
void main() {
	out_result = `).concat(g.map(function(L,F){return"texture(u_state".concat(F,", v_uv).").concat(x)}).join(" + "),`;
}`),uniforms:g.map(function(L,F){return{name:"u_state".concat(F),value:F,type:h.INT}})})}r.addLayersProgram=p;function y(v,w){var D=w.type,_=w.value,M=w.precision||"",x=(0,s.isArray)(_)?_.length:1,u=(0,l.glslTypeForType)(D,x),g=x===1?4:x,E=(0,l.glslTypeForType)(D,g),L=(0,l.glslComponentSelectionForNumComponents)(g),F=w.name||"addValue_".concat(u,"_w_length_").concat(x);return new d.GPUProgram(v,{name:F,fragmentShader:`
in vec2 v_uv;
uniform `.concat(M," ").concat(u,` u_value;
uniform `).concat(M," ").concat((0,l.glslPrefixForType)(D),`sampler2D u_state;
out `).concat(M," ").concat(E,` out_result;
void main() {
	out_result = `).concat(u!==E?E:"","(u_value) + texture(u_state, v_uv)").concat(L,`;
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_value",value:_,type:(0,l.uniformTypeForType)(D,v.glslVersion)}]})}r.addValueProgram=y;function m(v,w){var D=w.type,_=w.value,M=w.precision||"",x=(0,s.isArray)(_)?_.length:1,u=(0,l.glslTypeForType)(D,x),g=x===1?4:x,E=(0,l.glslTypeForType)(D,g),L=(0,l.glslComponentSelectionForNumComponents)(g),F=w.name||"addValue_".concat(u,"_w_length_").concat(x);return new d.GPUProgram(v,{name:F,fragmentShader:`
in vec2 v_uv;
uniform `.concat(M," ").concat(u,` u_value;
uniform `).concat(M," ").concat((0,l.glslPrefixForType)(D),`sampler2D u_state;
out `).concat(M," ").concat(E,` out_result;
void main() {
	out_result = `).concat(u!==E?E:"","(u_value) * texture(u_state, v_uv)").concat(L,`;
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_value",value:_,type:(0,l.uniformTypeForType)(D,v.glslVersion)}]})}r.multiplyValueProgram=m;function R(v,w){var D=w.type,_=w.value,M=w.precision||"",x=(0,s.isArray)(_)?_.length:1,u=(0,l.glslTypeForType)(D,x),g=x===1?4:x,E=(0,l.glslTypeForType)(D,g),L=w.name||"setValue_".concat(u,"_w_length_").concat(x);return new d.GPUProgram(v,{name:L,fragmentShader:`
uniform `.concat(M," ").concat(u,` u_value;
out `).concat(M," ").concat(E,` out_result;
void main() {
	out_result = `).concat(u!==E?E:"",`(u_value);
}`),uniforms:[{name:"u_value",value:_,type:(0,l.uniformTypeForType)(D,v.glslVersion)}]})}r.setValueProgram=R;function U(v,w){var D=w.type,_=w.precision||"",M=w.opacity===void 0?1:w.opacity,x=w.color||[0,0,0],u=w.name||"setColor",g=(0,l.glslTypeForType)(D,4);return new d.GPUProgram(v,{name:u,fragmentShader:`
uniform `.concat(_,` vec3 u_color;
uniform `).concat(_,` float u_opacity;
out `).concat(_," ").concat(g,` out_result;
void main() {
	out_result = `).concat(g,`(u_color, u_opacity);
}`),uniforms:[{name:"u_color",value:x,type:h.FLOAT},{name:"u_opacity",value:M,type:h.FLOAT}]})}r.setColorProgram=U;function I(v,w){return R(v,{type:h.FLOAT,value:0,name:w.name})}r.zeroProgram=I;function T(v,w){var D=w.type,_=w.precision||"",M=3,x=(0,l.glslTypeForType)(D,M),u=(0,l.glslTypeForType)(h.FLOAT,M),g=(0,l.glslPrefixForType)(D),E=u===x,L=w.name||"renderRGB_".concat(x);return new d.GPUProgram(v,{name:L,fragmentShader:`
in vec2 v_uv;
uniform float u_opacity;
uniform float u_scale;
uniform `.concat(_," ").concat(g,`sampler2D u_state;
out vec4 out_result;
void main() {
	vec3 color = u_scale * (`).concat(E?"":u,`(texture(u_state, v_uv).rgb));
	out_result = vec4(color, u_opacity);
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_scale",value:w.scale!==void 0?w.scale:1,type:h.FLOAT},{name:"u_opacity",value:w.opacity!==void 0?w.opacity:1,type:h.FLOAT}]})}r.renderRGBProgram=T;function P(v,w){var D=w.type,_=w.precision||"",M=w.components||"xyzw",x=M.length,u=(0,l.glslTypeForType)(D,x),g=(0,l.glslTypeForType)(h.FLOAT,x),E=(0,l.glslPrefixForType)(D),L=g===u,F=w.name||"renderAmplitude_".concat(u,"_w_").concat(x,"_components");return new d.GPUProgram(v,{name:F,fragmentShader:`
in vec2 v_uv;
uniform float u_opacity;
uniform float u_scale;
uniform vec3 u_colorMax;
uniform vec3 u_colorMin;
uniform `.concat(_," ").concat(E,`sampler2D u_state;
out vec4 out_result;
void main() {
	float amplitude = u_scale * `).concat(x===1?"abs":"length","(").concat(L?"":g,"(texture(u_state, v_uv)").concat(M==="xyzw"||M==="rgba"||M==="stpq"?"":".".concat(M),`));
	vec3 color = mix(u_colorMin, u_colorMax, amplitude);
	out_result = vec4(color, u_opacity);
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_scale",value:w.scale!==void 0?w.scale:1,type:h.FLOAT},{name:"u_opacity",value:w.opacity!==void 0?w.opacity:1,type:h.FLOAT},{name:"u_colorMax",value:w.colorMax||[1,1,1],type:h.FLOAT},{name:"u_colorMin",value:w.colorMin||[0,0,0],type:h.FLOAT}]})}r.renderAmplitudeProgram=P;function b(v,w){var D=w.type,_=w.precision||"",M=(0,l.glslTypeForType)(D,1),x=(0,l.glslPrefixForType)(D),u=M==="float",g=w.component||"x",E=w.name||"renderAmplitude_".concat(M,"_").concat(g);return new d.GPUProgram(v,{name:E,fragmentShader:`
in vec2 v_uv;
uniform float u_opacity;
uniform float u_scale;
uniform float u_bias;
uniform vec3 u_colorMin;
uniform vec3 u_colorMax;
uniform vec3 u_colorCenter;
uniform `.concat(_," ").concat(x,`sampler2D u_state;
out vec4 out_result;
void main() {
	float signedAmplitude = u_scale * (`).concat(u?"":"float","(texture(u_state, v_uv).").concat(g,`) - u_bias);
	float amplitudeSign = sign(signedAmplitude);
	vec3 interpColor = mix(u_colorMin, u_colorMax, amplitudeSign / 2.0 + 0.5);
	vec3 color = mix(u_colorCenter, interpColor, signedAmplitude * amplitudeSign);
	out_result = vec4(color, u_opacity);
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_scale",value:w.scale!==void 0?w.scale:1,type:h.FLOAT},{name:"u_bias",value:w.bias||0,type:h.FLOAT},{name:"u_opacity",value:w.opacity!==void 0?w.opacity:1,type:h.FLOAT},{name:"u_colorMin",value:w.colorMin||[0,0,1],type:h.FLOAT},{name:"u_colorMax",value:w.colorMax||[1,0,0],type:h.FLOAT},{name:"u_colorCenter",value:w.colorCenter||[1,1,1],type:h.FLOAT}]})}r.renderSignedAmplitudeProgram=b;function A(v){return new d.GPUProgram(v,{name:"wrappedLineColor",fragmentShader:`
in vec2 v_lineWrapping;
uniform vec4 u_value;
out vec4 out_result;
void main() {
	// Check if this line has wrapped.
	if ((v_lineWrapping.x != 0.0 && v_lineWrapping.x != 1.0) || (v_lineWrapping.y != 0.0 && v_lineWrapping.y != 1.0)) {
		// Render nothing.
		discard;
		return;
	}
	out_result = vec4(u_value);
}`})}r.wrappedLineColorProgram=A},404:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Vector4=void 0;var f=function(){function s(h,l,d,S){h===void 0&&(h=0),l===void 0&&(l=0),d===void 0&&(d=0),S===void 0&&(S=1),this.x=h,this.y=l,this.z=d,this.w=S}return Object.defineProperty(s.prototype,"width",{get:function(){return this.z},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"height",{get:function(){return this.w},enumerable:!1,configurable:!0}),s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this.w=h.w,this},s}();r.Vector4=f},707:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.checkRequiredKeys=r.checkValidKeys=r.isNumberOfType=r.isValidClearValue=r.isValidImageType=r.isValidImageFormat=r.isValidWrap=r.isValidFilter=r.isValidDataType=void 0;var s=f(566),h=f(601);function l(T){return h.validDataTypes.indexOf(T)>-1}r.isValidDataType=l;function d(T){return h.validFilters.indexOf(T)>-1}r.isValidFilter=d;function S(T){return h.validWraps.indexOf(T)>-1}r.isValidWrap=S;function p(T){return h.validImageFormats.indexOf(T)>-1}r.isValidImageFormat=p;function y(T){return h.validImageTypes.indexOf(T)>-1}r.isValidImageType=y;function m(T,P,b){if((0,s.isArray)(T)){if(T.length!==P)return!1;for(var A=0;A<T.length;A++)if(!R(T[A],b))return!1}else if(!R(T,b))return!1;return!0}r.isValidClearValue=m;function R(T,P){switch(P){case h.HALF_FLOAT:case h.FLOAT:return(0,s.isFiniteNumber)(T);case h.BYTE:return T<-128||T>127?!1:(0,s.isInteger)(T);case h.SHORT:return T<-32768||T>32767?!1:(0,s.isInteger)(T);case h.INT:return T<-2147483648||T>2147483647?!1:(0,s.isInteger)(T);case h.UNSIGNED_BYTE:return T>255?!1:(0,s.isNonNegativeInteger)(T);case h.UNSIGNED_SHORT:return T>65535?!1:(0,s.isNonNegativeInteger)(T);case h.UNSIGNED_INT:return T>4294967295?!1:(0,s.isNonNegativeInteger)(T);default:throw new Error("Unknown type ".concat(P))}}r.isNumberOfType=R;function U(T,P,b,A){T.forEach(function(v){P.indexOf(v)<0&&console.warn('Invalid params key "'.concat(v,'" passed to ').concat(b).concat(A?' with name "'.concat(A,'"'):"",".  Valid keys are ").concat(JSON.stringify(P),"."))})}r.checkValidKeys=U;function I(T,P,b,A){P.forEach(function(v){if(T.indexOf(v)<0)throw new Error('Required params key "'.concat(v,'" was not passed to ').concat(b).concat(A?' with name "'.concat(A,'"'):"","."))})}r.checkRequiredKeys=I},601:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.LAYER_POINTS_PROGRAM_NAME=r.SEGMENT_PROGRAM_NAME=r.DEFAULT_PROGRAM_NAME=r.BOOL_4D_UNIFORM=r.BOOL_3D_UNIFORM=r.BOOL_2D_UNIFORM=r.BOOL_1D_UNIFORM=r.UINT_4D_UNIFORM=r.UINT_3D_UNIFORM=r.UINT_2D_UNIFORM=r.UINT_1D_UNIFORM=r.INT_4D_UNIFORM=r.INT_3D_UNIFORM=r.INT_2D_UNIFORM=r.INT_1D_UNIFORM=r.FLOAT_4D_UNIFORM=r.FLOAT_3D_UNIFORM=r.FLOAT_2D_UNIFORM=r.FLOAT_1D_UNIFORM=r.PRECISION_HIGH_P=r.PRECISION_MEDIUM_P=r.PRECISION_LOW_P=r.EXPERIMENTAL_WEBGL2=r.EXPERIMENTAL_WEBGL=r.WEBGL1=r.WEBGL2=r.GLSL1=r.GLSL3=r.validImageTypes=r.validImageFormats=r.RGBA=r.RGB=r.validWraps=r.validFilters=r.validDataTypes=r.validArrayTypes=r.REPEAT=r.CLAMP_TO_EDGE=r.LINEAR=r.NEAREST=r.UINT=r.BOOL=r.INT=r.UNSIGNED_INT=r.SHORT=r.UNSIGNED_SHORT=r.BYTE=r.UNSIGNED_BYTE=r.FLOAT=r.HALF_FLOAT=void 0,r.BOUNDARY_RIGHT=r.BOUNDARY_LEFT=r.BOUNDARY_BOTTOM=r.BOUNDARY_TOP=r.GPUIO_FLOAT_PRECISION=r.GPUIO_INT_PRECISION=r.MAX_FLOAT_INT=r.MIN_FLOAT_INT=r.MAX_HALF_FLOAT_INT=r.MIN_HALF_FLOAT_INT=r.MAX_INT=r.MIN_INT=r.MAX_UNSIGNED_INT=r.MIN_UNSIGNED_INT=r.MAX_SHORT=r.MIN_SHORT=r.MAX_UNSIGNED_SHORT=r.MIN_UNSIGNED_SHORT=r.MAX_BYTE=r.MIN_BYTE=r.MAX_UNSIGNED_BYTE=r.MIN_UNSIGNED_BYTE=r.DEFAULT_CIRCLE_NUM_SEGMENTS=r.DEFAULT_ERROR_CALLBACK=r.GPUIO_VS_POSITION_W_ACCUM=r.GPUIO_VS_NORMAL_ATTRIBUTE=r.GPUIO_VS_UV_ATTRIBUTE=r.GPUIO_VS_INDEXED_POSITIONS=r.GPUIO_VS_WRAP_Y=r.GPUIO_VS_WRAP_X=r.LAYER_MESH_PROGRAM_NAME=r.LAYER_VECTOR_FIELD_PROGRAM_NAME=r.LAYER_LINES_PROGRAM_NAME=void 0,r.HALF_FLOAT="HALF_FLOAT",r.FLOAT="FLOAT",r.UNSIGNED_BYTE="UNSIGNED_BYTE",r.BYTE="BYTE",r.UNSIGNED_SHORT="UNSIGNED_SHORT",r.SHORT="SHORT",r.UNSIGNED_INT="UNSIGNED_INT",r.INT="INT",r.BOOL="BOOL",r.UINT="UINT",r.NEAREST="NEAREST",r.LINEAR="LINEAR",r.CLAMP_TO_EDGE="CLAMP_TO_EDGE",r.REPEAT="REPEAT",r.validArrayTypes=[Float32Array,Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Array],r.validDataTypes=[r.HALF_FLOAT,r.FLOAT,r.UNSIGNED_BYTE,r.BYTE,r.UNSIGNED_SHORT,r.SHORT,r.UNSIGNED_INT,r.INT],r.validFilters=[r.NEAREST,r.LINEAR],r.validWraps=[r.CLAMP_TO_EDGE,r.REPEAT],r.RGB="RGB",r.RGBA="RGBA",r.validImageFormats=[r.RGB,r.RGBA],r.validImageTypes=[r.UNSIGNED_BYTE,r.FLOAT,r.HALF_FLOAT],r.GLSL3="300 es",r.GLSL1="100",r.WEBGL2="webgl2",r.WEBGL1="webgl",r.EXPERIMENTAL_WEBGL="experimental-webgl",r.EXPERIMENTAL_WEBGL2="experimental-webgl2",r.PRECISION_LOW_P="lowp",r.PRECISION_MEDIUM_P="mediump",r.PRECISION_HIGH_P="highp",r.FLOAT_1D_UNIFORM="FLOAT_1D_UNIFORM",r.FLOAT_2D_UNIFORM="FLOAT_2D_UNIFORM",r.FLOAT_3D_UNIFORM="FLOAT_3D_UNIFORM",r.FLOAT_4D_UNIFORM="FLOAT_4D_UNIFORM",r.INT_1D_UNIFORM="INT_1D_UNIFORM",r.INT_2D_UNIFORM="INT_2D_UNIFORM",r.INT_3D_UNIFORM="INT_3D_UNIFORM",r.INT_4D_UNIFORM="INT_4D_UNIFORM",r.UINT_1D_UNIFORM="UINT_1D_UNIFORM",r.UINT_2D_UNIFORM="UINT_2D_UNIFORM",r.UINT_3D_UNIFORM="UINT_3D_UNIFORM",r.UINT_4D_UNIFORM="UINT_4D_UNIFORM",r.BOOL_1D_UNIFORM="BOOL_1D_UNIFORM",r.BOOL_2D_UNIFORM="BOOL_2D_UNIFORM",r.BOOL_3D_UNIFORM="BOOL_3D_UNIFORM",r.BOOL_4D_UNIFORM="BOOL_4D_UNIFORM",r.DEFAULT_PROGRAM_NAME="DEFAULT",r.SEGMENT_PROGRAM_NAME="SEGMENT",r.LAYER_POINTS_PROGRAM_NAME="LAYER_POINTS",r.LAYER_LINES_PROGRAM_NAME="LAYER_LINES",r.LAYER_VECTOR_FIELD_PROGRAM_NAME="LAYER_VECTOR_FIELD",r.LAYER_MESH_PROGRAM_NAME="LAYER_MESH",r.GPUIO_VS_WRAP_X="GPUIO_VS_WRAP_X",r.GPUIO_VS_WRAP_Y="GPUIO_VS_WRAP_Y",r.GPUIO_VS_INDEXED_POSITIONS="GPUIO_VS_INDEXED_POSITIONS",r.GPUIO_VS_UV_ATTRIBUTE="GPUIO_VS_UV_ATTRIBUTE",r.GPUIO_VS_NORMAL_ATTRIBUTE="GPUIO_VS_NORMAL_ATTRIBUTE",r.GPUIO_VS_POSITION_W_ACCUM="GPUIO_VS_POSITION_W_ACCUM";var f=function(s){throw new Error(s)};r.DEFAULT_ERROR_CALLBACK=f,r.DEFAULT_CIRCLE_NUM_SEGMENTS=18,r.MIN_UNSIGNED_BYTE=0,r.MAX_UNSIGNED_BYTE=Math.pow(2,8)-1,r.MIN_BYTE=-Math.pow(2,7),r.MAX_BYTE=Math.pow(2,7)-1,r.MIN_UNSIGNED_SHORT=0,r.MAX_UNSIGNED_SHORT=Math.pow(2,16)-1,r.MIN_SHORT=-Math.pow(2,15),r.MAX_SHORT=Math.pow(2,15)-1,r.MIN_UNSIGNED_INT=0,r.MAX_UNSIGNED_INT=Math.pow(2,32)-1,r.MIN_INT=-Math.pow(2,31),r.MAX_INT=Math.pow(2,31)-1,r.MIN_HALF_FLOAT_INT=-2048,r.MAX_HALF_FLOAT_INT=2048,r.MIN_FLOAT_INT=-16777216,r.MAX_FLOAT_INT=16777216,r.GPUIO_INT_PRECISION="GPUIO_INT_PRECISION",r.GPUIO_FLOAT_PRECISION="GPUIO_FLOAT_PRECISION",r.BOUNDARY_TOP="BOUNDARY_TOP",r.BOUNDARY_BOTTOM="BOUNDARY_BOTTOM",r.BOUNDARY_LEFT="BOUNDARY_LEFT",r.BOUNDARY_RIGHT="BOUNDARY_RIGHT"},690:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.glslComponentSelectionForNumComponents=r.glslPrefixForType=r.glslTypeForType=r.arrayConstructorForType=r.uniformTypeForType=r.intForPrecision=void 0;var s=f(601);function h(m){if(m===s.PRECISION_HIGH_P)return 2;if(m===s.PRECISION_MEDIUM_P)return 1;if(m===s.PRECISION_LOW_P)return 0;throw new Error("Unknown shader precision value: ".concat(JSON.stringify(m),"."))}r.intForPrecision=h;function l(m,R){switch(m){case s.HALF_FLOAT:case s.FLOAT:return s.FLOAT;case s.UNSIGNED_BYTE:case s.UNSIGNED_SHORT:case s.UNSIGNED_INT:return R===s.GLSL1?s.INT:s.UINT;case s.BYTE:case s.SHORT:case s.INT:return s.INT;default:throw new Error("Invalid type: ".concat(m," passed to glslKeyForType."))}}r.uniformTypeForType=l;function d(m,R){switch(R===void 0&&(R=!1),m){case s.HALF_FLOAT:return R?Float32Array:Uint16Array;case s.FLOAT:return Float32Array;case s.UNSIGNED_BYTE:return Uint8Array;case s.BYTE:return Int8Array;case s.UNSIGNED_SHORT:return Uint16Array;case s.SHORT:return Int16Array;case s.UNSIGNED_INT:return Uint32Array;case s.INT:return Int32Array;default:throw new Error('Unsupported type: "'.concat(m,'".'))}}r.arrayConstructorForType=d;function S(m,R){switch(m){case s.HALF_FLOAT:case s.FLOAT:return R===1?"float":"vec".concat(R);case s.UNSIGNED_BYTE:case s.UNSIGNED_SHORT:case s.UNSIGNED_INT:return R===1?"uint":"uvec".concat(R);case s.BYTE:case s.SHORT:case s.INT:return R===1?"int":"ivec".concat(R)}throw new Error("Invalid type: ".concat(m," passed to glslTypeForType."))}r.glslTypeForType=S;function p(m){switch(m){case s.HALF_FLOAT:case s.FLOAT:return"";case s.UNSIGNED_BYTE:case s.UNSIGNED_SHORT:case s.UNSIGNED_INT:return"u";case s.BYTE:case s.SHORT:case s.INT:return"i"}throw new Error("Invalid type: ".concat(m," passed to glslPrefixForType."))}r.glslPrefixForType=p;function y(m){switch(m){case 1:return".x";case 2:return".xy";case 3:return".xyz";case 4:return""}throw new Error("Invalid numComponents: ".concat(m," passed to glslComponentSelectionForNumComponents."))}r.glslComponentSelectionForNumComponents=y},581:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getExtension=r.OES_STANDARD_DERIVATIVES=r.OES_ELEMENT_INDEX_UINT=r.OES_VERTEX_ARRAY_OBJECT=r.EXT_COLOR_BUFFER_HALF_FLOAT=r.EXT_COLOR_BUFFER_FLOAT=r.WEBGL_DEPTH_TEXTURE=r.OES_TEXTURE_HAlF_FLOAT_LINEAR=r.OES_TEXTURE_FLOAT_LINEAR=r.OES_TEXTURE_HALF_FLOAT=r.OES_TEXTURE_FLOAT=void 0,r.OES_TEXTURE_FLOAT="OES_texture_float",r.OES_TEXTURE_HALF_FLOAT="OES_texture_half_float",r.OES_TEXTURE_FLOAT_LINEAR="OES_texture_float_linear",r.OES_TEXTURE_HAlF_FLOAT_LINEAR="OES_texture_half_float_linear",r.WEBGL_DEPTH_TEXTURE="WEBGL_depth_texture",r.EXT_COLOR_BUFFER_FLOAT="EXT_color_buffer_float",r.EXT_COLOR_BUFFER_HALF_FLOAT="EXT_color_buffer_half_float",r.OES_VERTEX_ARRAY_OBJECT="OES_vertex_array_object",r.OES_ELEMENT_INDEX_UINT="OES_element_index_uint",r.OES_STANDARD_DERIVATIVES="OES_standard_derivatives";function f(s,h,l){if(l===void 0&&(l=!1),s._extensions[h]!==void 0)return s._extensions[h];var d=s.gl,S=s._errorCallback,p=s._extensions;s.verboseLogging;var y;try{y=d.getExtension(h)}catch{}return y?(p[h]=y,s.verboseLogging&&console.log("Loaded extension: ".concat(h,"."))):(p[h]=!1,s.verboseLogging&&console.log("Unsupported ".concat(l?"optional ":"","extension: ").concat(h,"."))),!y&&!l&&S("Required extension unsupported by this device / browser: ".concat(h,".")),y}r.getExtension=f},798:function(c,r){var f=this&&this.__spreadArray||function(p,y,m){if(m||arguments.length===2)for(var R=0,U=y.length,I;R<U;R++)(I||!(R in y))&&(I||(I=Array.prototype.slice.call(y,0,R)),I[R]=y[R]);return p.concat(I||Array.prototype.slice.call(y))};Object.defineProperty(r,"__esModule",{value:!0}),r.disposeFramebuffers=r.bindFrameBuffer=void 0;var s=new WeakMap,h=new WeakMap;function l(p,y,m,R){var U=p.gl,I=p._errorCallback,T=p.isWebGL2,P=U.createFramebuffer();if(!P){I('Could not init framebuffer for GPULayer "'.concat(y.name,'": ').concat(U.getError(),"."));return}if(U.bindFramebuffer(U.FRAMEBUFFER,P),U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,m,0),R){if(!T)throw new Error("WebGL1 does not support drawing to multiple outputs.");if(R.length>15)throw new Error("Can't draw to more than 16 outputs.");for(var b=0,A=R.length;b<A;b++)U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+b+1,U.TEXTURE_2D,R[b],0)}var v=U.checkFramebufferStatus(U.FRAMEBUFFER);return v!==U.FRAMEBUFFER_COMPLETE&&I('Invalid status for framebuffer for GPULayer "'.concat(y.name,'": ').concat(v,".")),P}function d(p,y,m,R){var U=p.gl,I=R?f([m],R,!0):m,T=s.get(I);if(!T){if(T=l(p,y,m,R),!T)return;s.set(I,T);var P=h.get(m)||[];if(P.push(T),h.set(m,P),R)for(var b=0,A=R.length;b<A;b++){var v=R[b],w=h.get(v)||[];w.push(T),h.set(v,w)}}U.bindFramebuffer(U.FRAMEBUFFER,T)}r.bindFrameBuffer=d;function S(p,y){p.bindFramebuffer(p.FRAMEBUFFER,null);var m=h.get(y);if(m)for(var R=0,U=m.length;R<U;R++)p.deleteFramebuffer(m[R]);h.delete(y)}r.disposeFramebuffers=S},724:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.PRECISION_SOURCE=void 0;var s=f(601),h=f(690);r.PRECISION_SOURCE=`
#if (`.concat(s.GPUIO_INT_PRECISION," == ").concat((0,h.intForPrecision)(s.PRECISION_LOW_P),`)
	precision lowp int;
	#if (__VERSION__ == 300)
		precision lowp isampler2D;
		precision lowp usampler2D;
	#endif
#elif (`).concat(s.GPUIO_INT_PRECISION," == ").concat((0,h.intForPrecision)(s.PRECISION_MEDIUM_P),`)
	precision mediump int;
	#if (__VERSION__ == 300)
		precision mediump isampler2D;
		precision mediump usampler2D;
	#endif
#else 
	#ifdef GL_FRAGMENT_PRECISION_HIGH
		precision highp int;
		#if (__VERSION__ == 300)
			precision highp isampler2D;
			precision highp usampler2D;
		#endif
	#else
		precision mediump int;
		#if (__VERSION__ == 300)
			precision mediump isampler2D;
			precision mediump usampler2D;
		#endif
	#endif
#endif
#if (`).concat(s.GPUIO_FLOAT_PRECISION," == ").concat((0,h.intForPrecision)(s.PRECISION_LOW_P),`)
	precision lowp float;
	precision lowp sampler2D;
#elif (`).concat(s.GPUIO_FLOAT_PRECISION," == ").concat((0,h.intForPrecision)(s.PRECISION_MEDIUM_P),`)
	precision mediump float;
	precision mediump sampler2D;
#else
	#ifdef GL_FRAGMENT_PRECISION_HIGH
		precision highp float;
		precision highp sampler2D;
	#else
		precision mediump float;
		precision mediump sampler2D;
	#endif
#endif
`)},651:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.DEFAULT_VERT_SHADER_SOURCE=void 0;var s=f(601);r.DEFAULT_VERT_SHADER_SOURCE=`
in vec2 a_gpuio_position;
#ifdef `.concat(s.GPUIO_VS_UV_ATTRIBUTE,`
	in vec2 a_gpuio_uv;
#endif
#ifdef `).concat(s.GPUIO_VS_NORMAL_ATTRIBUTE,`
	in vec2 a_gpuio_normal;
#endif

uniform vec2 u_gpuio_scale;
uniform vec2 u_gpuio_translation;

out vec2 v_uv;
out vec2 v_uv_local;
#ifdef `).concat(s.GPUIO_VS_NORMAL_ATTRIBUTE,`
	out vec2 v_normal;
#endif

void main() {
	// Optional varyings.
	#ifdef `).concat(s.GPUIO_VS_UV_ATTRIBUTE,`
		v_uv_local = a_gpuio_uv;
	#else
		v_uv_local = 0.5 * (a_gpuio_position + 1.0);
	#endif
	#ifdef `).concat(s.GPUIO_VS_NORMAL_ATTRIBUTE,`
		v_normal = a_gpuio_normal;
	#endif

	// Apply transformations.
	vec2 position = u_gpuio_scale * a_gpuio_position + u_gpuio_translation;

	// Calculate a global uv for the viewport.
	v_uv = 0.5 * (position + 1.0);

	// Calculate vertex position.
	gl_Position = vec4(position, 0, 1);
}`)},567:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.LAYER_LINES_VERTEX_SHADER_SOURCE=void 0;var s=f(601),h=f(324);r.LAYER_LINES_VERTEX_SHADER_SOURCE=`
`.concat(h.VERTEX_SHADER_HELPERS_SOURCE,`

#if (__VERSION__ != 300 || `).concat(s.GPUIO_VS_INDEXED_POSITIONS,` == 1)
	// Cannot use int vertex attributes.
	// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
	in float a_gpuio_index;
#endif

uniform sampler2D u_gpuio_positions; // Texture lookup with position data.
uniform vec2 u_gpuio_positionsDimensions;
uniform vec2 u_gpuio_scale;

out vec2 v_uv;
out vec2 v_lineWrapping; // Use this to test if line is only half wrapped and should not be rendered.
flat out int v_index;

void main() {
	// Calculate a uv based on the point's index attribute.
	#if (__VERSION__ != 300 || `).concat(s.GPUIO_VS_INDEXED_POSITIONS,` == 1)
		vec2 positionUV = uvFromIndex(a_gpuio_index, u_gpuio_positionsDimensions);
		v_index = int(a_gpuio_index);
	#else
		vec2 positionUV = uvFromIndex(gl_VertexID, u_gpuio_positionsDimensions);
		v_index = gl_VertexID;
	#endif

	// Calculate a global uv for the viewport.
	// Lookup vertex position and scale to [0, 1] range.
	#ifdef `).concat(s.GPUIO_VS_POSITION_W_ACCUM,`
		// We have packed a 2D displacement with the position.
		vec4 positionData = texture(u_gpuio_positions, positionUV);
		// position = first two components plus last two components (optional accumulation buffer).
		v_uv = (positionData.rg + positionData.ba) * u_gpuio_scale;
	#else
		v_uv = texture(u_gpuio_positions, positionUV).rg  * u_gpuio_scale;
	#endif

	// Wrap if needed.
	v_lineWrapping = vec2(0.0);
	#ifdef `).concat(s.GPUIO_VS_WRAP_X,`
		v_lineWrapping.x = max(step(1.0, v_uv.x), step(v_uv.x, 0.0));
		v_ux.x = fract(v_uv.x + 1.0);
	#endif
	#ifdef `).concat(s.GPUIO_VS_WRAP_Y,`
		v_lineWrapping.y = max(step(1.0, v_uv.y), step(v_uv.y, 0.0));
		v_ux.y = fract(v_uv.y + 1.0);
	#endif

	// Calculate position in [-1, 1] range.
	vec2 position = v_uv * 2.0 - 1.0;

	gl_Position = vec4(position, 0, 1);
}`)},380:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.LAYER_MESH_VERTEX_SHADER_SOURCE=void 0;var s=f(601),h=f(324);r.LAYER_MESH_VERTEX_SHADER_SOURCE=`
`.concat(h.VERTEX_SHADER_HELPERS_SOURCE,`

#if (__VERSION__ != 300)
	// Cannot use int vertex attributes.
	// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
	in float a_gpuio_index;
#endif

uniform sampler2D u_gpuio_positions; // Texture lookup with position data.
uniform vec2 u_gpuio_positionsDimensions;
uniform vec2 u_gpuio_scale;

out vec2 v_uv;
out vec2 v_uv_position;
out vec2 v_position;
flat out int v_index;

void main() {
	// Calculate a uv based on the point's index attribute.
	#if (__VERSION__ == 300)
		v_uv_position = uvFromIndex(gl_VertexID, u_gpuio_positionsDimensions);
		v_index = gl_VertexID;
	#else
		v_uv_position = uvFromIndex(a_gpuio_index, u_gpuio_positionsDimensions);
		v_index = int(a_gpuio_index);
	#endif

	// Calculate a global uv for the viewport.
	// Lookup vertex position and scale to [0, 1] range.
	#ifdef `).concat(s.GPUIO_VS_POSITION_W_ACCUM,`
		// We have packed a 2D displacement with the position.
		vec4 positionData = texture(u_gpuio_positions, v_uv_position);
		// position = first two components plus last two components (optional accumulation buffer).
		v_position = positionData.rg + positionData.ba;
		v_uv = v_position * u_gpuio_scale;
	#else
		v_position = texture(u_gpuio_positions, v_uv_position).rg;
		v_uv = v_position * u_gpuio_scale;
	#endif

	// Calculate position in [-1, 1] range.
	vec2 position = v_uv * 2.0 - 1.0;

	gl_Position = vec4(position, 0, 1);
}`)},929:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.LAYER_POINTS_VERTEX_SHADER_SOURCE=void 0;var s=f(601),h=f(324);r.LAYER_POINTS_VERTEX_SHADER_SOURCE=`
`.concat(h.VERTEX_SHADER_HELPERS_SOURCE,`

#if (__VERSION__ != 300)
	// Cannot use int vertex attributes.
	// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
	in float a_gpuio_index;
#endif

uniform sampler2D u_gpuio_positions; // Texture lookup with position data.
uniform vec2 u_gpuio_positionsDimensions;
uniform vec2 u_gpuio_scale;
uniform float u_gpuio_pointSize;

out vec2 v_uv;
out vec2 v_uv_position;
out vec2 v_position;
flat out int v_index;

void main() {
	// Calculate a uv based on the point's index attribute.
	#if (__VERSION__ == 300)
		v_uv_position = uvFromIndex(gl_VertexID, u_gpuio_positionsDimensions);
		v_index = gl_VertexID;
	#else
		v_uv_position = uvFromIndex(a_gpuio_index, u_gpuio_positionsDimensions);
		v_index = int(a_gpuio_index);
	#endif

	// Calculate a global uv for the viewport.
	// Lookup vertex position and scale to [0, 1] range.
	#ifdef `).concat(s.GPUIO_VS_POSITION_W_ACCUM,`
		// We have packed a 2D displacement with the position.
		vec4 positionData = texture(u_gpuio_positions, v_uv_position);
		// position = first two components plus last two components (optional accumulation buffer).
		v_position = positionData.rg + positionData.ba;
		v_uv = v_position * u_gpuio_scale;
	#else
		v_position = texture(u_gpuio_positions, v_uv_position).rg;
		v_uv = v_position * u_gpuio_scale;
	#endif

	// Wrap if needed.
	#ifdef `).concat(s.GPUIO_VS_WRAP_X,`
		v_uv.x = fract(v_uv.x + ceil(abs(v_uv.x)));
	#endif
	#ifdef `).concat(s.GPUIO_VS_WRAP_Y,`
		v_uv.y = fract(v_uv.y + ceil(abs(v_uv.y)));
	#endif

	// Calculate position in [-1, 1] range.
	vec2 position = v_uv * 2.0 - 1.0;

	gl_PointSize = u_gpuio_pointSize;
	gl_Position = vec4(position, 0, 1);
}`)},634:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.LAYER_VECTOR_FIELD_VERTEX_SHADER_SOURCE=void 0;var s=f(324);r.LAYER_VECTOR_FIELD_VERTEX_SHADER_SOURCE=`
`.concat(s.VERTEX_SHADER_HELPERS_SOURCE,`

#if (__VERSION__ != 300)
	// Cannot use int vertex attributes.
	// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
	in float a_gpuio_index;
#endif

uniform sampler2D u_gpuio_vectors; // Texture lookup with vector data.
uniform vec2 u_gpuio_dimensions;
uniform vec2 u_gpuio_scale;

out vec2 v_uv;
flat out int v_index;

void main() {
	#if (__VERSION__ == 300)
		// Divide index by 2.
		int index = gl_VertexID / 2;
		v_index = index;
	#else
		// Divide index by 2.
		float index = floor((a_gpuio_index + 0.5) / 2.0);
		v_index = int(index);
	#endif

	// Calculate a uv based on the vertex index attribute.
	v_uv = uvFromIndex(index, u_gpuio_dimensions);
	#if (__VERSION__ == 300)
		// Add vector displacement if needed.
		v_uv += float(gl_VertexID - 2 * index) * texture(u_gpuio_vectors, v_uv).xy * u_gpuio_scale;
	#else
		// Add vector displacement if needed.
		v_uv += (a_gpuio_index - 2.0 * index) * texture(u_gpuio_vectors, v_uv).xy * u_gpuio_scale;
	#endif


	// Calculate position in [-1, 1] range.
	vec2 position = v_uv * 2.0 - 1.0;

	gl_Position = vec4(position, 0, 1);
}`)},946:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.SEGMENT_VERTEX_SHADER_SOURCE=void 0,r.SEGMENT_VERTEX_SHADER_SOURCE=`
in vec2 a_gpuio_position;

uniform float u_gpuio_halfThickness;
uniform vec2 u_gpuio_scale;
uniform float u_gpuio_length;
uniform float u_gpuio_rotation;
uniform vec2 u_gpuio_translation;

out vec2 v_uv_local;
out vec2 v_uv;

mat2 rotate2d(float _angle){
	return mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle));
}

void main() {
	// Calculate UV coordinates of current rendered object.
	v_uv_local = 0.5 * (a_gpuio_position + 1.0);

	vec2 position = a_gpuio_position;
	// Apply thickness / radius.
	position *= u_gpuio_halfThickness;
	// Stretch center of shape to form a round-capped line segment.
	float signX = sign(position.x);
	position.x += signX * u_gpuio_length / 2.0;
	v_uv_local.x = (signX + 1.0) / 2.0;// Set entire cap uv.x to 1 or 0.
	// Apply transformations.
	position = u_gpuio_scale * (rotate2d(-u_gpuio_rotation) * position) + u_gpuio_translation;

	// Calculate a global uv for the viewport.
	v_uv = 0.5 * (position + 1.0);

	// Calculate vertex position.
	gl_Position = vec4(position, 0, 1);
}`},324:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.VERTEX_SHADER_HELPERS_SOURCE=void 0,r.VERTEX_SHADER_HELPERS_SOURCE=`
/**
 * Create UV coordinates from a 1D index for data stored in a texture of size "dimensions".
 */
vec2 uvFromIndex(const float index, const vec2 dimensions) {
	float y = floor((index + 0.5) / dimensions.x);
	float x = floor(index - y * dimensions.x + 0.5);
	return vec2(x + 0.5, y + 0.5) / dimensions;
}
vec2 uvFromIndex(const int index, const vec2 dimensions) {
	int width = int(dimensions.x);
	int y = index / width;
	int x = index - y * width;
	return vec2(float(x) + 0.5, float(y) + 0.5) / dimensions;
}
vec2 uvFromIndex(const float index, const ivec2 dimensions) {
	float width = float(dimensions.x);
	float y = floor((index + 0.5) / width);
	float x = floor(index - y * width + 0.5);
	return vec2(x + 0.5, y + 0.5) / vec2(dimensions);
}
vec2 uvFromIndex(const int index, const ivec2 dimensions) {
	int y = index / dimensions.x;
	int x = index - y * dimensions.x;
	return vec2(float(x) + 0.5, float(y) + 0.5) / vec2(dimensions);
}`},607:function(c,r,f){var s=this&&this.__assign||function(){return s=Object.assign||function(Q){for(var H,q=1,J=arguments.length;q<J;q++){H=arguments[q];for(var oe in H)Object.prototype.hasOwnProperty.call(H,oe)&&(Q[oe]=H[oe])}return Q},s.apply(this,arguments)},h=this&&this.__createBinding||(Object.create?function(Q,H,q,J){J===void 0&&(J=q);var oe=Object.getOwnPropertyDescriptor(H,q);(!oe||("get"in oe?!H.__esModule:oe.writable||oe.configurable))&&(oe={enumerable:!0,get:function(){return H[q]}}),Object.defineProperty(Q,J,oe)}:function(Q,H,q,J){J===void 0&&(J=q),Q[J]=H[q]}),l=this&&this.__exportStar||function(Q,H){for(var q in Q)q!=="default"&&!Object.prototype.hasOwnProperty.call(H,q)&&h(H,Q,q)};Object.defineProperty(r,"__esModule",{value:!0}),r._testing=r.renderRGBProgram=r.zeroProgram=r.setColorProgram=r.setValueProgram=r.renderSignedAmplitudeProgram=r.renderAmplitudeProgram=r.multiplyValueProgram=r.addValueProgram=r.addLayersProgram=r.copyProgram=r.getFragmentShaderMediumpPrecision=r.getVertexShaderMediumpPrecision=r.isHighpSupportedInFragmentShader=r.isHighpSupportedInVertexShader=r.isWebGL2Supported=r.isWebGL2=r.GPUIndexBuffer=r.GPUProgram=r.GPULayer=r.GPUComposer=void 0;var d=f(593),S=f(484);Object.defineProperty(r,"GPUComposer",{enumerable:!0,get:function(){return S.GPUComposer}});var p=f(355);Object.defineProperty(r,"GPULayer",{enumerable:!0,get:function(){return p.GPULayer}});var y=f(191),m=f(664);Object.defineProperty(r,"GPUProgram",{enumerable:!0,get:function(){return m.GPUProgram}});var R=f(981);Object.defineProperty(r,"GPUIndexBuffer",{enumerable:!0,get:function(){return R.GPUIndexBuffer}});var U=f(707),I=f(126),T=f(581),P=f(360),b=f(690),A=f(579),v=s(s(s(s(s(s({isFloatType:d.isFloatType,isUnsignedIntType:d.isUnsignedIntType,isSignedIntType:d.isSignedIntType,isIntType:d.isIntType,makeShaderHeader:d.makeShaderHeader,compileShader:d.compileShader,initGLProgram:d.initGLProgram,readyToRead:d.readyToRead,preprocessVertexShader:d.preprocessVertexShader,preprocessFragmentShader:d.preprocessFragmentShader,isPowerOf2:d.isPowerOf2,initSequentialFloatArray:d.initSequentialFloatArray,uniformInternalTypeForValue:d.uniformInternalTypeForValue,indexOfLayerInArray:d.indexOfLayerInArray,readPixelsAsync:d.readPixelsAsync},T),I),U),y),P),b);r._testing=v;var w=d.isWebGL2,D=d.isWebGL2Supported,_=d.isHighpSupportedInVertexShader,M=d.isHighpSupportedInFragmentShader,x=d.getVertexShaderMediumpPrecision,u=d.getFragmentShaderMediumpPrecision;r.isWebGL2=w,r.isWebGL2Supported=D,r.isHighpSupportedInVertexShader=_,r.isHighpSupportedInFragmentShader=M,r.getVertexShaderMediumpPrecision=x,r.getFragmentShaderMediumpPrecision=u;var g=A.copyProgram,E=A.addLayersProgram,L=A.addValueProgram,F=A.multiplyValueProgram,O=A.setValueProgram,G=A.setColorProgram,C=A.zeroProgram,N=A.renderRGBProgram,V=A.renderAmplitudeProgram,j=A.renderSignedAmplitudeProgram;r.copyProgram=g,r.addLayersProgram=E,r.addValueProgram=L,r.multiplyValueProgram=F,r.setValueProgram=O,r.setColorProgram=G,r.zeroProgram=C,r.renderRGBProgram=N,r.renderAmplitudeProgram=V,r.renderSignedAmplitudeProgram=j,l(f(601),r)},360:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.fragmentShaderPolyfills=r.GLSL1Polyfills=r.texturePolyfill=r.SAMPLER2D_DIMENSIONS_UNIFORM=r.SAMPLER2D_HALF_PX_UNIFORM=r.SAMPLER2D_FILTER=r.SAMPLER2D_CAST_INT=r.SAMPLER2D_WRAP_Y=r.SAMPLER2D_WRAP_X=void 0;var s=f(601),h=f(126);r.SAMPLER2D_WRAP_X="GPUIO_WRAP_X",r.SAMPLER2D_WRAP_Y="GPUIO_WRAP_Y",r.SAMPLER2D_CAST_INT="GPUIO_CAST_INT",r.SAMPLER2D_FILTER="GPUIO_FILTER",r.SAMPLER2D_HALF_PX_UNIFORM="u_gpuio_half_px",r.SAMPLER2D_DIMENSIONS_UNIFORM="u_gpuio_dimensions";function l(C){var N=C.match(/\btexture\(/g);if(!N||N.length===0)return{shaderSource:C,samplerUniforms:[]};var V=(0,h.getSampler2DsInProgram)(C);if(V.length===0)return{shaderSource:C,samplerUniforms:V};V.forEach(function(K,he){var z=new RegExp("\\btexture(2D)?\\(\\s?".concat(K,"\\b"),"gs");C=C.replace(z,"GPUIO_TEXTURE_POLYFILL".concat(he,"(").concat(K))});var j=C.match(/\btexture(2D)?\(/g);j?.length&&console.warn("Fragment shader polyfill has missed some calls to texture().",C);for(var Q={},H=0;H<V.length;H++)Q["".concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(H)]="vec2",Q["".concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(H)]="vec2";function q(K,he,z){z===void 0&&(z="");var $=z===""?"":")",ne=z===""?he:"i";return`
`.concat(ne,"vec4 GPUIO_TEXTURE_POLYFILL").concat(K,"(const ").concat(he,`sampler2D sampler, const vec2 uv) {
	`).concat(he===""?"#if (".concat(r.SAMPLER2D_FILTER).concat(K," == 0)"):"",`
		#if (`).concat(r.SAMPLER2D_WRAP_X).concat(K,` == 0)
			#if (`).concat(r.SAMPLER2D_WRAP_Y).concat(K,` == 0)
				return `).concat(z,"texture(sampler, uv)").concat($,`;
			#else
				return `).concat(z,"GPUIO_TEXTURE_WRAP_CLAMP_REPEAT(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(K,")").concat($,`;
			#endif
		#else
			#if (`).concat(r.SAMPLER2D_WRAP_Y).concat(K,` == 0)
				return `).concat(z,"GPUIO_TEXTURE_WRAP_REPEAT_CLAMP(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(K,")").concat($,`;
			#else
				return `).concat(z,"GPUIO_TEXTURE_WRAP_REPEAT_REPEAT(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(K,")").concat($,`;
			#endif
		#endif
	`).concat(he===""?`#else
		#if (`.concat(r.SAMPLER2D_WRAP_X).concat(K,` == 0)
			#if (`).concat(r.SAMPLER2D_WRAP_Y).concat(K,` == 0)
				return `).concat(z,"GPUIO_TEXTURE_BILINEAR_INTERP(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(K,", ").concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(K,")").concat($,`;
			#else
				return `).concat(z,"GPUIO_TEXTURE_BILINEAR_INTERP_WRAP_CLAMP_REPEAT(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(K,", ").concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(K,")").concat($,`;
			#endif
		#else
			#if (`).concat(r.SAMPLER2D_WRAP_Y).concat(K,` == 0)
				return `).concat(z,"GPUIO_TEXTURE_BILINEAR_INTERP_WRAP_REPEAT_CLAMP(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(K,", ").concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(K,")").concat($,`;
			#else
				return `).concat(z,"GPUIO_TEXTURE_BILINEAR_INTERP_WRAP_REPEAT_REPEAT(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(K,", ").concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(K,")").concat($,`;
			#endif
		#endif
	#endif`):"",`
}
`)}function J(K){return`
`.concat(K,"vec4 GPUIO_TEXTURE_WRAP_REPEAT_REPEAT(const ").concat(K,`sampler2D sampler, const vec2 uv, const vec2 halfPx) {
	return texture(sampler, GPUIO_WRAP_REPEAT_UV(uv));
}
`).concat(K,"vec4 GPUIO_TEXTURE_WRAP_REPEAT_CLAMP(const ").concat(K,`sampler2D sampler, vec2 uv, const vec2 halfPx) {
	uv.x = GPUIO_WRAP_REPEAT_UV_COORD(uv.x);
	// uv.y = GPUIO_WRAP_CLAMP_UV_COORD(uv.y, halfPx.y);
	return texture(sampler, uv);
}
`).concat(K,"vec4 GPUIO_TEXTURE_WRAP_CLAMP_REPEAT(const ").concat(K,`sampler2D sampler, vec2 uv, const vec2 halfPx) {
	// uv.x = GPUIO_WRAP_CLAMP_UV_COORD(uv.x, halfPx.x);
	uv.y = GPUIO_WRAP_REPEAT_UV_COORD(uv.y);
	return texture(sampler, uv);
}
`)}function oe(K){var he=K?"GPUIO_TEXTURE_WRAP_".concat(K):"texture",z=K?", halfPx":"";return`
vec4 GPUIO_TEXTURE_BILINEAR_INTERP`.concat(K?"_WRAP_".concat(K):"",`(const sampler2D sampler, const vec2 uv, const vec2 halfPx, const vec2 dimensions) {
	vec2 pxFraction = fract(uv * dimensions);
	vec2 offset = halfPx - vec2(0.00001, 0.00001) * max(
			step(abs(pxFraction.x - 0.5), 0.001),
			step(abs(pxFraction.y - 0.5), 0.001)
		);
	vec2 baseUV = uv - offset;
	vec2 diagOffset = vec2(offset.x, -offset.y);
	vec4 minmin = `).concat(he,"(sampler, baseUV").concat(z,`);
	vec4 maxmin = `).concat(he,"(sampler, uv + diagOffset").concat(z,`);
	vec4 minmax = `).concat(he,"(sampler, uv - diagOffset").concat(z,`);
	vec4 maxmax = `).concat(he,"(sampler, uv + offset").concat(z,`);
	vec2 t = fract(baseUV * dimensions);
	vec4 yMin = mix(minmin, maxmin, t.x);
	vec4 yMax = mix(minmax, maxmax, t.x);
	return mix(yMin, yMax, t.y);
}
`)}return C=`
`.concat(Object.keys(Q).map(function(K){return"uniform ".concat(Q[K]," ").concat(K,";")}).join(`
`),`

float GPUIO_WRAP_REPEAT_UV_COORD(const float coord) {
	return fract(coord + ceil(abs(coord)));
}
vec2 GPUIO_WRAP_REPEAT_UV(const vec2 uv) {
	return fract(uv + ceil(abs(uv)));
}
// float GPUIO_WRAP_CLAMP_UV_COORD(const float coord, const float halfPx) {
// 	return clamp(coord, halfPx, 1.0 - halfPx);
// }

`).concat(J(""),`
#if (__VERSION__ == 300)
`).concat(["u","i"].map(function(K){return J(K)}).join(`
`),`
#endif

`).concat([null,"REPEAT_REPEAT","REPEAT_CLAMP","CLAMP_REPEAT"].map(function(K){return oe(K)}).join(`
`),`

`).concat(V.map(function(K,he){return"#ifndef ".concat(r.SAMPLER2D_CAST_INT).concat(he,`
	`).concat(q(he,""),`
#endif`)}).join(`
`),`
#if (__VERSION__ == 300)
`).concat(["u","i"].map(function(K){return V.map(function(he,z){return q(z,K)}).join(`
`)}).join(`
`),`
#else
	`).concat(V.map(function(K,he){return"#ifdef ".concat(r.SAMPLER2D_CAST_INT).concat(he,`
	`).concat(q(he,"","ivec4("),`
#endif`)}).join(`
`),`
#endif

`).concat(C),{shaderSource:C,samplerUniforms:V}}r.texturePolyfill=l;function d(C){switch(C){case"int":case"uint":return"float";case"ivec2":case"uvec2":return"vec2";case"ivec3":case"uvec3":return"vec3";case"ivec4":case"uvec4":return"vec4"}throw new Error("Unknown type ".concat(C,"."))}function S(C){switch(C){case"bool":return"float";case"bvec2":return"vec2";case"bvec3":return"vec3";case"bvec4":return"vec4"}throw new Error("Unknown type ".concat(C,"."))}function p(C){return"".concat(C," abs(const ").concat(C," a) { return ").concat(C,"(abs(").concat(d(C),"(a))); }")}function y(C){return"".concat(C," sign(const ").concat(C," a) { return ").concat(C,"(sign(").concat(d(C),"(a))); }")}function m(C){return"".concat(C," trunc(const ").concat(C," a) { return round(a - fract(a) * sign(a)); }")}function R(C){return"".concat(C," round(const ").concat(C," a) { return floor(a + 0.5); }")}function U(C){return"".concat(C," roundEven(const ").concat(C," a) { return 2.0 * round(a / 2.0); }")}function I(C,N){return"".concat(C," min(const ").concat(C," a, const ").concat(N," b) { return ").concat(C,"(min(").concat(d(C),"(a), ").concat(d(N),"(b))); }")}function T(C,N){return"".concat(C," max(const ").concat(C," a, const ").concat(N," b) { return ").concat(C,"(max(").concat(d(C),"(a), ").concat(d(N),"(b))); }")}function P(C,N){return"".concat(C," clamp(const ").concat(C," a, const ").concat(N," min, const ").concat(N," max) { return ").concat(C,"(clamp(").concat(d(C),"(a), ").concat(d(N),"(min), ").concat(d(N),"(max))); }")}function b(C,N){return"".concat(C," mix(const ").concat(C," a, const ").concat(C," b, const ").concat(N," c) { return mix(a, b, ").concat(S(N),"(c)); }")}function A(C,N,V){return"a[".concat(C,"][").concat(N,"] * a[").concat((C+1)%V,"][").concat((N+1)%V,"] - a[").concat((C+1)%V,"][").concat(N,"] * a[").concat(C,"][").concat((N+1)%V,"]")}function v(C,N,V){return[0,1,2].map(function(j){return"a[".concat(C,"][").concat((N+j)%V,"] * (").concat(A((C+1)%V,(N+1+j)%V,V),")")}).join(" + ")}function w(C,N,V){return[0,1,2,3].map(function(j){return"a[".concat(C,"][").concat((N+j)%V,"] * (").concat(v((C+1)%V,(N+1+j)%V,V),")")}).join(" + ")}function D(C){var N="";return C.includes("abs")&&(N+=`


`.concat(p("int"),`
`).concat(p("ivec2"),`
`).concat(p("ivec3"),`
`).concat(p("ivec4"),`
`)),C.includes("sign")&&(N+=`


`.concat(y("int"),`
`).concat(y("ivec2"),`
`).concat(y("ivec3"),`
`).concat(y("ivec4"),`
`)),C.includes("round")&&(N+=`


`.concat(R("float"),`
`).concat(R("vec2"),`
`).concat(R("vec3"),`
`).concat(R("vec4"),`
`)),C.includes("trunc")&&(N+=`


`.concat(m("float"),`
`).concat(m("vec2"),`
`).concat(m("vec3"),`
`).concat(m("vec4"),`
`)),C.includes("roundEven")&&(N+=`


`.concat(U("float"),`
`).concat(U("vec2"),`
`).concat(U("vec3"),`
`).concat(U("vec4"),`
`)),C.includes("min")&&(N+=`


`.concat(I("int","int"),`
`).concat(I("ivec2","ivec2"),`
`).concat(I("ivec3","ivec3"),`
`).concat(I("ivec4","ivec4"),`
`).concat(I("ivec2","int"),`
`).concat(I("ivec3","int"),`
`).concat(I("ivec4","int"),`
`)),C.includes("max")&&(N+=`


`.concat(T("int","int"),`
`).concat(T("ivec2","ivec2"),`
`).concat(T("ivec3","ivec3"),`
`).concat(T("ivec4","ivec4"),`
`).concat(T("ivec2","int"),`
`).concat(T("ivec3","int"),`
`).concat(T("ivec4","int"),`
`)),C.includes("clamp")&&(N+=`


`.concat(P("int","int"),`
`).concat(P("ivec2","ivec2"),`
`).concat(P("ivec3","ivec3"),`
`).concat(P("ivec4","ivec4"),`
`).concat(P("ivec2","int"),`
`).concat(P("ivec3","int"),`
`).concat(P("ivec4","int"),`
`)),C.includes("mix")&&(N+=`


`.concat(b("float","bool"),`
`).concat(b("vec2","bvec2"),`
`).concat(b("vec3","bvec3"),`
`).concat(b("vec4","bvec4"),`
`)),C.includes("outerProduct")&&(N+=`


mat2 outerProduct(const vec2 a, const vec2 b) {
	return mat2(
		a.x * b.x, a.x * b.y,
		a.y * b.x, a.y * b.y
	);
}
mat3 outerProduct(const vec3 a, const vec3 b) {
	return mat3(
		a.x * b.x, a.x * b.y, a.x * b.z,
		a.y * b.x, a.y * b.y, a.y * b.z,
		a.z * b.x, a.z * b.y, a.z * b.z
	);
}
mat4 outerProduct(const vec4 a, const vec4 b) {
	return mat4(
		a.x * b.x, a.x * b.y, a.x * b.z, a.x * b.w,
		a.y * b.x, a.y * b.y, a.y * b.z, a.y * b.w,
		a.z * b.x, a.z * b.y, a.z * b.z, a.z * b.w,
		a.w * b.x, a.w * b.y, a.w * b.z, a.w * b.w
	);
}
`),C.includes("transpose")&&(N+=`


mat2 transpose(mat2 a) {
	float temp = a[0][1];
	a[0][1] = a[1][0];
	a[1][0] = temp;
	return a;
}
mat3 transpose(mat3 a) {
	float temp = a[0][2];
	a[0][2] = a[2][0];
	a[2][0] = temp;
	temp = a[0][1];
	a[0][1] = a[1][0];
	a[1][0] = temp;
	temp = a[1][2];
	a[1][2] = a[2][1];
	a[2][1] = temp;
	return a;
}
mat4 transpose(mat4 a) {
	float temp = a[0][3];
	a[0][3] = a[3][0];
	a[3][0] = temp;
	temp = a[0][2];
	a[0][2] = a[2][0];
	a[2][0] = temp;
	temp = a[2][3];
	a[2][3] = a[3][2];
	a[3][2] = temp;
	temp = a[0][1];
	a[0][1] = a[1][0];
	a[1][0] = temp;
	temp = a[1][2];
	a[1][2] = a[2][1];
	a[2][1] = temp;
	temp = a[2][3];
	a[2][3] = a[3][2];
	a[3][2] = temp;
	return a;
}
`),C.includes("determinant")&&(N+=`


float determinant(const mat2 a) {
	return `.concat(A(0,0,2),`;
}
float determinant(const mat3 a) {
	return `).concat(v(0,0,3),`;
}
float determinant(const mat4 a) {
	return `).concat(w(0,0,4),`;
}
`)),C.includes("sinh")&&(N+=`


float sinh(const float x) {
	return (pow(`.concat(Math.E,", x) - pow(").concat(Math.E,`, -x)) / 2.0;
}
`)),C.includes("cosh")&&(N+=`


float cosh(const float x) {
	return (pow(`.concat(Math.E,", x) + pow(").concat(Math.E,`, -x)) / 2.0; 
}
`)),C.includes("tanh")&&(N+=`


float tanh(const float x) {
	float e = exp(2.0 * x);
	return (e - 1.0) / (e + 1.0);
}
`),C.includes("asinh")&&(N+=`


float asinh(const float x) {
	return log(x + sqrt(x * x + 1.0));
}
`),C.includes("asinh")&&(N+=`


float acosh(const float x) {
	return log(x + sqrt(x * x - 1.0));
}
`),C.includes("asinh")&&(N+=`


float atanh(float x) {
	x = (x + 1.0) / (x - 1.0);
	return 0.5 * log(x * sign(x));
}
`),N}r.GLSL1Polyfills=D;function _(C,N){return"vec2 index1DToUV(const ".concat(C," index1D, const ").concat(N,` dimensions) {
	`).concat(C," width = ").concat(C,`(dimensions.x);
	`).concat(C,` y = index1D / width;
	`).concat(C,` x = index1D - width * y;
	float u = (float(x) + 0.5) / float(dimensions.x);
	float v = (float(y) + 0.5) / float(dimensions.y);
	return vec2(u, v);
}`)}function M(C,N){return"".concat(C," modi(const ").concat(C," x, const ").concat(N," y) { return x - y * (x / y); }")}function x(C,N){return"".concat(N," stepi(const ").concat(C," x, const ").concat(N," y) { return ").concat(N,"(step(").concat(d(C),"(x), ").concat(d(N),"(y))); }")}function u(C,N){return"".concat(C," bitshiftLeft(const ").concat(C," a, const ").concat(N,` b) {
	#if (__VERSION__ == 300)
		return a << b;
	#else
		return a * `).concat(C,"(pow(").concat(d(N),"(2.0), ").concat(d(N),`(b)));
	#endif
}`)}function g(C,N){return"".concat(C," bitshiftRight(const ").concat(C," a, const ").concat(N,` b) {
	#if (__VERSION__ == 300)
		return a >> b;
	#else
		return `).concat(C,"(round(").concat(d(C),"(a) / pow(").concat(d(N),"(2.0), ").concat(d(N),`(b))));
	#endif
}`)}function E(C){return"int bitwiseOr".concat(C===32?"":C,`(int a, int b) {
	#if (__VERSION__ == 300)
		return a | b;
	#else
		int result = 0;
		int n = 1;
		
		for (int i = 0; i < `).concat(C,`; i++) {
			if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {
				result += n;
			}
			a = a / 2;
			b = b / 2;
			n = n * 2;
			if(!(a > 0 || b > 0)) {
				break;
			}
		}
		return result;
	#endif
}`)}function L(C){return"int bitwiseXOR".concat(C===32?"":C,`(int a, int b) {
	#if (__VERSION__ == 300)
		return a ^ b;
	#else
		int result = 0;
		int n = 1;
		
		for (int i = 0; i < `).concat(C,`; i++) {
			if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {
				result += n;
			}
			a = a / 2;
			b = b / 2;
			n = n * 2;
			if(!(a > 0 || b > 0)) {
				break;
			}
		}
		return result;
	#endif
}`)}function F(C){return"int bitwiseAnd".concat(C===32?"":C,`(int a, int b) {
	#if (__VERSION__ == 300)
		return a & b;
	#else
		int result = 0;
		int n = 1;
		for (int i = 0; i < `).concat(C,`; i++) {
			if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {
				result += n;
			}
			a = a / 2;
			b = b / 2;
			n = n * 2;
			if(!(a > 0 && b > 0)) {
				break;
			}
		}
		return result;
	#endif
}`)}function O(C){return"int bitwiseNot".concat(C===32?"":C,`(int a) {
	#if (__VERSION__ == 300)
		return ~a;
	#else
		int result = 0;
		int n = 1;

		for (int i = 0; i < `).concat(C,`; i++) {
			if (modi(a, 2) == 0) {
				result += n;
			}
			a = a / 2;
			n = n * 2;
		}
		return result;
	#endif
}`)}function G(C,N){var V="";return C.includes("index1DToUV")&&(V+=`

`.concat(_("int","ivec2"),`
`).concat(_("int","vec2"),`
#if (__VERSION__ == 300)
`).concat(_("int","uvec2"),`
`).concat(_("uint","uvec2"),`
`).concat(_("uint","ivec2"),`
`).concat(_("uint","vec2"),`
#endif
`)),(C.includes("modi")||N===s.GLSL1&&C.includes("bitwise"))&&(V+=`

`.concat(M("int","int"),`
`).concat(M("ivec2","ivec2"),`
`).concat(M("ivec3","ivec3"),`
`).concat(M("ivec4","ivec4"),`
`).concat(M("ivec2","int"),`
`).concat(M("ivec3","int"),`
`).concat(M("ivec4","int"),`
#if (__VERSION__ == 300)
`).concat(M("uint","uint"),`
`).concat(M("uvec2","uvec2"),`
`).concat(M("uvec3","uvec3"),`
`).concat(M("uvec4","uvec4"),`
`).concat(M("uvec2","uint"),`
`).concat(M("uvec3","uint"),`
`).concat(M("uvec4","uint"),`
#endif
`)),C.includes("stepi")&&(V+=`

`.concat(x("int","int"),`
`).concat(x("ivec2","ivec2"),`
`).concat(x("ivec3","ivec3"),`
`).concat(x("ivec4","ivec4"),`
`).concat(x("int","ivec2"),`
`).concat(x("int","ivec3"),`
`).concat(x("int","ivec4"),`
#if (__VERSION__ == 300)
`).concat(x("uint","uint"),`
`).concat(x("uvec2","uvec2"),`
`).concat(x("uvec3","uvec3"),`
`).concat(x("uvec4","uvec4"),`
`).concat(x("uint","uvec2"),`
`).concat(x("uint","uvec3"),`
`).concat(x("uint","uvec4"),`
#endif
`)),C.includes("bitshiftLeft")&&(V+=`

`.concat(u("int","int"),`
`).concat(u("ivec2","ivec2"),`
`).concat(u("ivec3","ivec3"),`
`).concat(u("ivec4","ivec4"),`
`).concat(u("ivec2","int"),`
`).concat(u("ivec3","int"),`
`).concat(u("ivec4","int"),`
#if (__VERSION__ == 300)
`).concat(u("uint","uint"),`
`).concat(u("uvec2","uvec2"),`
`).concat(u("uvec3","uvec3"),`
`).concat(u("uvec4","uvec4"),`
`).concat(u("uvec2","uint"),`
`).concat(u("uvec3","uint"),`
`).concat(u("uvec4","uint"),`
#endif
`)),C.includes("bitshiftRight")&&(V+=`

`.concat(g("int","int"),`
`).concat(g("ivec2","ivec2"),`
`).concat(g("ivec3","ivec3"),`
`).concat(g("ivec4","ivec4"),`
`).concat(g("ivec2","int"),`
`).concat(g("ivec3","int"),`
`).concat(g("ivec4","int"),`
#if (__VERSION__ == 300)
`).concat(g("uint","uint"),`
`).concat(g("uvec2","uvec2"),`
`).concat(g("uvec3","uvec3"),`
`).concat(g("uvec4","uvec4"),`
`).concat(g("uvec2","uint"),`
`).concat(g("uvec3","uint"),`
`).concat(g("uvec4","uint"),`
#endif
`)),C.includes("bitwiseOr")&&(V+=`

`.concat(E(8),`
`).concat(E(16),`
`).concat(E(32),`
#if (__VERSION__ == 300)
`).concat([8,16,""].map(function(j){return`
uint bitwiseOr`.concat(j,`(uint a, uint b) {
	return uint(bitwiseOr`).concat(j,`(int(a), int(b)));
}`)}).join(`
`),`
#endif
`)),C.includes("bitwiseXOR")&&(V+=`

`.concat(L(8),`
`).concat(L(16),`
`).concat(L(32),`
#if (__VERSION__ == 300)
`).concat([8,16,""].map(function(j){return`
uint bitwiseXOR`.concat(j,`(uint a, uint b) {
	return uint(bitwiseXOR`).concat(j,`(int(a), int(b)));
}`)}).join(`
`),`
#endif
`)),C.includes("bitwiseAnd")&&(V+=`

`.concat(F(8),`
`).concat(F(16),`
`).concat(F(32),`
#if (__VERSION__ == 300)
`).concat([8,16,""].map(function(j){return`
uint bitwiseAnd`.concat(j,`(uint a, uint b) {
	return uint(bitwiseAnd`).concat(j,`(int(a), int(b)));
}`)}).join(`
`),`
#endif
`)),C.includes("bitwiseNot")&&(V+=`

`.concat(O(8),`
`).concat(O(16),`
`).concat(O(32),`
#if (__VERSION__ == 300)
`).concat([8,16,""].map(function(j){return`
uint bitwiseNot`.concat(j,`(uint a) {
	return uint(bitwiseNot`).concat(j,`(int(a)));
}`)}).join(`
`),`
#endif
`)),V}r.fragmentShaderPolyfills=G},126:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getSampler2DsInProgram=r.stripComments=r.stripPrecision=r.stripVersion=r.highpToMediump=r.glsl1Uint=r.glsl1Sampler2D=r.glsl1Texture=r.checkFragmentShaderForFragColor=r.glsl1FragmentOut=r.getFragmentOuts=r.glsl1FragmentIn=r.glsl1VertexOut=r.castVaryingToFloat=r.glsl1VertexIn=void 0;var s=f(601);function h(x){return x.replace(/\bin\b/g,"attribute")}r.glsl1VertexIn=h;function l(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function d(x,u,g){var E=new RegExp("\\b".concat(l(u),"\\s*=\\s*\\S[^;]*;"),"sg"),L=x.match(E);if(L)for(var F=0;F<L.length;F++){var O=new RegExp("\\b".concat(l(u),"\\s*=\\s*(\\S[^;]*);"),"s"),G=L[F].match(O);if(G&&G[1]){var C=new RegExp("\\b".concat(l(u),"\\s*=\\s*").concat(l(G[1]),"\\s*;"),"s");x=x.replace(C,"".concat(u," = ").concat(g,"(").concat(G[1],");"))}else console.warn('Could not find value in expression: "'.concat(L[F],'"'))}else console.warn("No assignment found for shader variable ".concat(u,"."));return x}function S(x,u,g){var E=new RegExp("".concat(u,"\\s+\\S[^;]*;"),"g"),L=x.match(E);if(L){var F=new RegExp("".concat(u,"\\b"),"g");x=x.replace(F,"varying ".concat(g));for(var O=0;O<L.length;O++){var G=new RegExp("".concat(u,"\\s+(\\S[^;]*);")),C=L[O].match(G);C&&C[2]?x=d(x,C[2],g):console.warn('Could not find variable name in expression: "'.concat(L[O],'"'))}}return x}function p(x){return x=S(x,"\\bvarying\\s+(u)?int","float"),x=S(x,"\\bvarying\\s+(i|u)vec2","vec2"),x=S(x,"\\bvarying\\s+(i|u)vec3","vec3"),x=S(x,"\\bvarying\\s+(i|u)vec4","vec4"),x}r.castVaryingToFloat=p;function y(x){return x=x.replace(/(\bflat\s+)?\bout\b/g,"varying"),x=p(x),x}r.glsl1VertexOut=y;function m(x){return x=x.replace(/(\bflat\s+)?\bin\b/g,"varying"),x=p(x),x}r.glsl1FragmentIn=m;function R(x,u){for(var g={},E=0;;){var L=x.match(/\b(layout\s*\(\s*location\s*=\s*([0-9]+)\s*\)\s*)?out\s+((lowp|mediump|highp)\s+)?((float|int|uint|([iu]?vec[234]))\s+)?([_$a-zA-Z0-9]+)\s*;/);if(!L){if(Object.keys(g).length===0)return[];for(var F=Object.keys(g),O=F.length,G=new Array(E).fill(void 0),C=0;C<O;C++){var N=F[C],V=g[N],j=V.location,Q=V.type;if(G[j]!==void 0)throw new Error('Must be exactly one out declaration per layout location in GPUProgram "'.concat(u,'", conflicting declarations found at location ').concat(j,"."));G[j]={name:N,type:Q}}if(F.length!==E+1)throw new Error('Must be exactly one out declaration per layout location in GPUProgram "'.concat(u,'", layout locations must be sequential (no missing location numbers) starting from 0.'));for(var C=0;C<=E;C++)if(G[C]===void 0)throw new Error("Missing out declaration at location ".concat(C,' in GPUProgram "').concat(u,'", layout locations must be sequential (no missing location numbers) starting from 0.'));return G}var H=L[8],q=parseInt(L[2]||"0"),J=L[6];if(!J)throw new Error('No type found for out declaration "'.concat(L[0],'" for GPUProgram "').concat(u,'".'));if(!H)throw new Error('No variable name found for out declaration "'.concat(L[0],'" for GPUProgram "').concat(u,'".'));if(g[H]){if(g[H].location!==q)throw new Error('All out declarations for variable "'.concat(H,'" must have same location in GPUProgram "').concat(u,'".'))}else q>E&&(E=q),g[H]={location:q,type:J};x=x.replace(L[0],"")}}r.getFragmentOuts=R;function U(x,u){var g=R(x,u);if(g.length===0)return[x];x=x.replace(/\blayout\s*\(\s*location\s*=\s*([0-9]+)\s*\)\s*/g,"");for(var E=[],L=0,F=g.length;L<F;L++){var O=g[L],G=O.type,C=O.name,N=new RegExp("\\bout\\s+((lowp|mediump|highp)\\s+)?(float|int|uint|([iu]?vec[234]))\\s+".concat(C,"\\s*;"),"g"),V=x.replace(N,"");V=V.replace(/\bout\b/g,"");for(var j=!1,Q=new RegExp("\\b".concat(C,"\\s*=\\s*(\\S.*?);"),"s");;){var H=V.match(Q);if(H&&H[1]){j=!0;var q="";switch(G){case"float":case"int":case"uint":q=", 0, 0, 0";break;case"vec2":case"ivec2":case"uvec2":q=", 0, 0";break;case"vec3":case"ivec3":case"uvec3":q=", 0";break}V=V.replace(Q,"gl_FragColor = vec4(".concat(H[1]).concat(q,");"))}else{if(!j)throw new Error('No assignment found for out declaration in GPUProgram "'.concat(u,'".'));break}}E.push(V)}return E}r.glsl1FragmentOut=U;function I(x){return!!x.match(/\bgl_FragColor\b/)}function T(x,u,g){var E=I(x);if(u===s.GLSL3&&E)throw new Error('Found "gl_FragColor" declaration in fragment shader for GPUProgram "'.concat(g,'": either init GPUComposer with glslVersion = GLSL1 or use GLSL3 syntax in your fragment shader.'))}r.checkFragmentShaderForFragColor=T;function P(x){return x.replace(/\btexture\(/g,"texture2D(")}r.glsl1Texture=P;function b(x){return x.replace(/\b(i|u)sampler2D\b/g,"sampler2D")}r.glsl1Sampler2D=b;function A(x){return x=x.replace(/\buint\b/g,"int"),x=x.replace(/\buvec2\b/g,"ivec2"),x=x.replace(/\buvec3\b/g,"ivec3"),x=x.replace(/\buvec4\b/g,"ivec4"),x=x.replace(/\buint\(/g,"int("),x=x.replace(/\buvec2\(/g,"ivec2("),x=x.replace(/\buvec3\(/g,"ivec3("),x=x.replace(/\buvec4\(/g,"ivec4("),x}r.glsl1Uint=A;function v(x){return x.replace(/\bhighp\b/,"mediump")}r.highpToMediump=v;function w(x){var u=x.length;return x=x.replace(/^\s*\#version\s+([0-9]+(\s+(es)+)?)\s*/,""),x.length!==u&&console.warn("GPUIO expects shader source that does not contain #version declarations, removing...."),x}r.stripVersion=w;function D(x){var u=x.length;return x=x.replace(/\s*precision\s+((highp)|(mediump)|(lowp))\s+[a-zA-Z0-9]+\s*;/g,""),x.length!==u&&console.warn("GPUIO expects shader source that does not contain precision declarations, removing...."),x}r.stripPrecision=D;function _(x){return x=x.replace(/[\t ]*\/\/.*\n/g,""),x=x.replace(/\/\*.*?\*\//gs,""),x}r.stripComments=_;function M(x){var u={},g="\\buniform\\s+(((highp)|(mediump)|(lowp))\\s+)?(i|u)?sampler2D\\s+(\\w+)\\s*;",E=x.match(new RegExp(g,"g"));if(!E||E.length===0)return[];var L=new RegExp(g);return E.forEach(function(F){var O=F.match(L);if(!O||!O[7]){console.warn('Could not find sampler2D uniform name in string "'.concat(F,'".'));return}u[O[7]]=!0}),Object.keys(u)}r.getSampler2DsInProgram=M},593:function(c,r,f){var s=this&&this.__awaiter||function(z,$,ne,W){function Y(Z){return Z instanceof ne?Z:new ne(function(ie){ie(Z)})}return new(ne||(ne=Promise))(function(Z,ie){function ce(k){try{le(W.next(k))}catch(B){ie(B)}}function ue(k){try{le(W.throw(k))}catch(B){ie(B)}}function le(k){k.done?Z(k.value):Y(k.value).then(ce,ue)}le((W=W.apply(z,$||[])).next())})},h=this&&this.__generator||function(z,$){var ne={label:0,sent:function(){if(Z[0]&1)throw Z[1];return Z[1]},trys:[],ops:[]},W,Y,Z,ie;return ie={next:ce(0),throw:ce(1),return:ce(2)},typeof Symbol=="function"&&(ie[Symbol.iterator]=function(){return this}),ie;function ce(le){return function(k){return ue([le,k])}}function ue(le){if(W)throw new TypeError("Generator is already executing.");for(;ne;)try{if(W=1,Y&&(Z=le[0]&2?Y.return:le[0]?Y.throw||((Z=Y.return)&&Z.call(Y),0):Y.next)&&!(Z=Z.call(Y,le[1])).done)return Z;switch(Y=0,Z&&(le=[le[0]&2,Z.value]),le[0]){case 0:case 1:Z=le;break;case 4:return ne.label++,{value:le[1],done:!1};case 5:ne.label++,Y=le[1],le=[0];continue;case 7:le=ne.ops.pop(),ne.trys.pop();continue;default:if(Z=ne.trys,!(Z=Z.length>0&&Z[Z.length-1])&&(le[0]===6||le[0]===2)){ne=0;continue}if(le[0]===3&&(!Z||le[1]>Z[0]&&le[1]<Z[3])){ne.label=le[1];break}if(le[0]===6&&ne.label<Z[1]){ne.label=Z[1],Z=le;break}if(Z&&ne.label<Z[2]){ne.label=Z[2],ne.ops.push(le);break}Z[2]&&ne.ops.pop(),ne.trys.pop();continue}le=$.call(z,ne)}catch(k){le=[6,k],Y=0}finally{W=Z=0}if(le[0]&5)throw le[1];return{value:le[0]?le[1]:void 0,done:!0}}};Object.defineProperty(r,"__esModule",{value:!0}),r.readPixelsAsync=r.indexOfLayerInArray=r.uniformInternalTypeForValue=r.preprocessFragmentShader=r.preprocessVertexShader=r.convertFragmentShaderToGLSL1=r.initSequentialFloatArray=r.isPowerOf2=r.getFragmentShaderMediumpPrecision=r.getVertexShaderMediumpPrecision=r.isHighpSupportedInFragmentShader=r.isHighpSupportedInVertexShader=r.readyToRead=r.isWebGL2Supported=r.isWebGL2=r.initGLProgram=r.compileShader=r.makeShaderHeader=r.isIntType=r.isSignedIntType=r.isUnsignedIntType=r.isFloatType=void 0;var l=f(566),d=f(601),S=f(690),p=f(724),y=f(360),m=f(126),R={supportsWebGL2:void 0,supportsHighpVertex:void 0,supportsHighpFragment:void 0,mediumpVertexPrecision:void 0,mediumpFragmentPrecision:void 0};function U(z){return z===d.FLOAT||z===d.HALF_FLOAT}r.isFloatType=U;function I(z){return z===d.UNSIGNED_BYTE||z===d.UNSIGNED_SHORT||z===d.UNSIGNED_INT}r.isUnsignedIntType=I;function T(z){return z===d.BYTE||z===d.SHORT||z===d.INT}r.isSignedIntType=T;function P(z){return I(z)||T(z)}r.isIntType=P;function b(z){for(var $="",ne=Object.keys(z),W=0;W<ne.length;W++){var Y=ne[W];if(!(0,l.isString)(Y)||!(0,l.isString)(z[Y]))throw new Error("GPUProgram compile time constants must be passed in as key value pairs that are both strings, got key value pair of type [".concat(typeof Y," : ").concat(typeof z[Y],"] for key ").concat(Y,"."));$+="#define ".concat(Y," ").concat(z[Y],`
`)}return $}function A(z,$,ne,W,Y){var Z,ie=z===d.GLSL3?"#version ".concat(d.GLSL3,`
`):"",ce=W?b(W):"",ue=b((Z={},Z[d.GPUIO_INT_PRECISION]="".concat((0,S.intForPrecision)($)),Z[d.GPUIO_FLOAT_PRECISION]="".concat((0,S.intForPrecision)(ne)),Z));return"".concat(ie).concat(Y||"").concat(ce).concat(ue).concat(p.PRECISION_SOURCE)}r.makeShaderHeader=A;function v(z,$,ne,W,Y,Z,ie,ce,ue,le,k){k===void 0&&(k=!1);var B=z.createShader(Z);if(!B)return ce("Unable to init gl shader."),null;var re=A($,ne,W,ue,le),ge="".concat(re).concat(Y);if(z.shaderSource(B,ge),z.compileShader(B),k){var _e=z.getShaderParameter(B,z.COMPILE_STATUS);if(!_e)return console.log(ge.split(`
`).map(function(ye,we){return"".concat(we,"	").concat(ye)}).join(`
`)),ce("Could not compile ".concat(Z===z.FRAGMENT_SHADER?"fragment":"vertex",' shader for program "').concat(ie,'": ').concat(z.getShaderInfoLog(B),".")),null}return B}r.compileShader=v;function w(z,$,ne,W,Y){var Z=z.createProgram();if(!Z){Y('Unable to init GL program for GPUProgram "'.concat(W,'", gl.createProgram() has failed.'));return}z.attachShader(Z,$),z.attachShader(Z,ne),z.linkProgram(Z);var ie=z.getProgramParameter(Z,z.LINK_STATUS);if(!ie){Y('GPUProgram "'.concat(W,'" failed to link: ').concat(z.getProgramInfoLog(Z)));return}return Z}r.initGLProgram=w;function D(z){return typeof WebGL2RenderingContext<"u"&&z instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&z instanceof WebGL2ComputeRenderingContext}r.isWebGL2=D;function _(){if(R.supportsWebGL2===void 0){var z=document.createElement("canvas").getContext(d.WEBGL2);R.supportsWebGL2=D(z)}return R.supportsWebGL2}r.isWebGL2Supported=_;function M(z){return z.checkFramebufferStatus(z.FRAMEBUFFER)==z.FRAMEBUFFER_COMPLETE}r.readyToRead=M;function x(z,$){var ne=document.createElement("canvas").getContext(d.WEBGL1);if(!ne)throw new Error("Unable to init webgl context.");try{var W=v(ne,d.GLSL1,d.PRECISION_HIGH_P,d.PRECISION_HIGH_P,z,ne.VERTEX_SHADER,"highpFragmentTest",d.DEFAULT_ERROR_CALLBACK),Y=v(ne,d.GLSL1,d.PRECISION_HIGH_P,d.PRECISION_HIGH_P,$,ne.FRAGMENT_SHADER,"highpFragmentTest",d.DEFAULT_ERROR_CALLBACK),Z=w(ne,W,Y,"highpFragmentTest",d.DEFAULT_ERROR_CALLBACK);ne.deleteProgram(Z),ne.deleteShader(W),ne.deleteShader(Y)}catch{return!1}return!0}function u(){if(R.supportsHighpVertex===void 0){var z=x("void main() { highp float test = 0.524; gl_Position = vec4(test, test, 0, 1); }","void main() { gl_FragColor = vec4(0); }");R.supportsHighpVertex=z}return R.supportsHighpVertex}r.isHighpSupportedInVertexShader=u;function g(){if(R.supportsHighpFragment===void 0){var z=x("void main() { gl_Position = vec4(0.5, 0.5, 0, 1); }","void main() { highp float test = 1.35; gl_FragColor = vec4(test); }");R.supportsHighpFragment=z}return R.supportsHighpFragment}r.isHighpSupportedInFragmentShader=g;function E(z,$,ne,W,Y){var Z=w($,W,ne,z,d.DEFAULT_ERROR_CALLBACK);if(!Z)throw new Error("Unable to init WebGLProgram.");var ie=$.getAttribLocation(Z,"position"),ce=$.createBuffer();$.bindBuffer($.ARRAY_BUFFER,ce),$.bufferData($.ARRAY_BUFFER,1,$.STATIC_DRAW),$.enableVertexAttribArray(ie),$.vertexAttribPointer(ie,1,$.UNSIGNED_BYTE,!1,0,0),$.viewport(0,0,1,1),$.useProgram(Z),Y(Z),$.drawArrays($.POINTS,0,1);var ue=new Uint8Array(4);return $.readPixels(0,0,1,1,$.RGBA,$.UNSIGNED_BYTE,ue),$.disableVertexAttribArray(ie),$.deleteProgram(Z),$.deleteShader(W),$.deleteShader(ne),$.deleteBuffer(ce),ue}function L(){if(R.mediumpVertexPrecision===void 0){var z=document.createElement("canvas"),$=z.getContext("webgl");if(!$)throw new Error("Unable to init webgl context.");var ne=v($,d.GLSL1,d.PRECISION_MEDIUM_P,d.PRECISION_MEDIUM_P,`
	attribute vec4 position;  // needed because of another bug in Safari
	uniform mediump vec3 v;
	varying mediump vec4 v_result;
	void main() {
		gl_Position = position;
		gl_PointSize = 1.0;
		v_result = vec4(normalize(v) * 0.5 + 0.5, 1);
	}
		`,$.VERTEX_SHADER,"mediumpPrecisionVertexTest",d.DEFAULT_ERROR_CALLBACK);if(!ne)throw new Error("Unable to init vertex shader.");var W=v($,d.GLSL1,d.PRECISION_MEDIUM_P,d.PRECISION_MEDIUM_P,`
	varying mediump vec4 v_result;
	void main() {
		gl_FragColor = v_result;
	}
		`,$.FRAGMENT_SHADER,"mediumpPrecisionVertexTest",d.DEFAULT_ERROR_CALLBACK);if(!W)throw new Error("Unable to init fragment shader.");var Y=Math.pow(2,31)-1,Z=Math.sqrt(Y),ie=(Z/Math.sqrt(Z*Z*3)*.5+.5)*255|0,ce=E("mediumpPrecisionVertexTest",$,W,ne,function(le){var k=$.getUniformLocation(le,"v");$.uniform3f(k,Z,Z,Z)}),ue=Math.abs(ce[0]-ie)>16;R.mediumpVertexPrecision=ue?d.PRECISION_MEDIUM_P:d.PRECISION_HIGH_P}return R.mediumpVertexPrecision}r.getVertexShaderMediumpPrecision=L;function F(){if(R.mediumpFragmentPrecision===void 0){var z=document.createElement("canvas"),$=z.getContext("webgl");if(!$)throw new Error("Unable to init webgl context.");var ne=v($,d.GLSL1,d.PRECISION_MEDIUM_P,d.PRECISION_MEDIUM_P,`
	attribute vec4 position;  // needed because of another bug in Safari
	void main() {
		gl_Position = position;
		gl_PointSize = 1.0;
	}
		`,$.VERTEX_SHADER,"mediumpPrecisionFragmentTest",d.DEFAULT_ERROR_CALLBACK);if(!ne)throw new Error("Unable to init vertex shader.");var W=v($,d.GLSL1,d.PRECISION_MEDIUM_P,d.PRECISION_MEDIUM_P,`
	uniform mediump vec3 v;
	void main() {
		gl_FragColor = vec4(normalize(v) * 0.5 + 0.5, 1);
	}
		`,$.FRAGMENT_SHADER,"mediumpPrecisionFragmentTest",d.DEFAULT_ERROR_CALLBACK);if(!W)throw new Error("Unable to init fragment shader.");var Y=Math.pow(2,31)-1,Z=Math.sqrt(Y),ie=(Z/Math.sqrt(Z*Z*3)*.5+.5)*255|0,ce=E("mediumpPrecisionFragmentTest",$,W,ne,function(le){var k=$.getUniformLocation(le,"v");$.uniform3f(k,Z,Z,Z)}),ue=Math.abs(ce[0]-ie)>16;R.mediumpFragmentPrecision=ue?d.PRECISION_MEDIUM_P:d.PRECISION_HIGH_P}return R.mediumpFragmentPrecision}r.getFragmentShaderMediumpPrecision=F;function O(z){return z>0&&(z&z-1)==0}r.isPowerOf2=O;function G(z){for(var $=new Float32Array(z),ne=0;ne<z;ne++)$[ne]=ne;return $}r.initSequentialFloatArray=G;function C(z){return z=(0,m.stripVersion)(z),z=(0,m.stripPrecision)(z),z=(0,m.stripComments)(z),z}function N(z){return z=(0,m.glsl1Sampler2D)(z),z=(0,m.glsl1Uint)(z),z=(0,m.glsl1Texture)(z),z}function V(z){return z=N(z),z=(0,m.glsl1VertexIn)(z),z=(0,m.glsl1VertexOut)(z),z}function j(z,$){return z=N(z),z=(0,m.glsl1FragmentIn)(z),(0,m.glsl1FragmentOut)(z,$)}r.convertFragmentShaderToGLSL1=j;function Q(z,$){return z=C(z),u()||(console.warn("highp not supported in vertex shader in this browser, falling back to mediump."),z=(0,m.highpToMediump)(z)),$===d.GLSL3?z:V(z)}r.preprocessVertexShader=Q;function H(z,$,ne){var W;z=C(z),(0,m.checkFragmentShaderForFragColor)(z,$,ne),g()||(console.warn("highp not supported in fragment shader in this browser, falling back to mediump."),z=(0,m.highpToMediump)(z)),z=(0,y.fragmentShaderPolyfills)(z,$)+z;var Y;if(W=(0,y.texturePolyfill)(z),z=W.shaderSource,Y=W.samplerUniforms,$!==d.GLSL3){for(var Z=j(z,ne),ie=0,ce=Z.length;ie<ce;ie++)Z[ie]=(0,y.GLSL1Polyfills)(Z[ie])+Z[ie];if(z=Z.shift(),Z.length)return{shaderSource:z,samplerUniforms:Y,additionalSources:Z}}return{shaderSource:z,samplerUniforms:Y}}r.preprocessFragmentShader=H;function q(z,$,ne,W){if($===d.FLOAT){if((0,l.isArray)(z)){for(var Y=0;Y<z.length;Y++)if(!(0,l.isFiniteNumber)(z[Y]))throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected float or float[] of length 1-4.'))}else if(!(0,l.isFiniteNumber)(z))throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected float or float[] of length 1-4.'));if(!(0,l.isArray)(z)||z.length===1)return d.FLOAT_1D_UNIFORM;if(z.length===2)return d.FLOAT_2D_UNIFORM;if(z.length===3)return d.FLOAT_3D_UNIFORM;if(z.length===4)return d.FLOAT_4D_UNIFORM;throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected float or float[] of length 1-4.'))}else if($===d.INT){if((0,l.isArray)(z)){for(var Y=0;Y<z.length;Y++)if(!(0,l.isInteger)(z[Y]))throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected int or int[] of length 1-4.'))}else if(!(0,l.isInteger)(z))throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected int or int[] of length 1-4.'));if(!(0,l.isArray)(z)||z.length===1)return d.INT_1D_UNIFORM;if(z.length===2)return d.INT_2D_UNIFORM;if(z.length===3)return d.INT_3D_UNIFORM;if(z.length===4)return d.INT_4D_UNIFORM;throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected int or int[] of length 1-4.'))}else if($===d.UINT){if((0,l.isArray)(z)){for(var Y=0;Y<z.length;Y++)if(!(0,l.isNonNegativeInteger)(z[Y]))throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected uint or uint[] of length 1-4.'))}else if(!(0,l.isNonNegativeInteger)(z))throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected uint or uint[] of length 1-4.'));if(!(0,l.isArray)(z)||z.length===1)return d.UINT_1D_UNIFORM;if(z.length===2)return d.UINT_2D_UNIFORM;if(z.length===3)return d.UINT_3D_UNIFORM;if(z.length===4)return d.UINT_4D_UNIFORM;throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected uint or uint[] of length 1-4.'))}else if($===d.BOOL){if((0,l.isArray)(z)){for(var Y=0;Y<z.length;Y++)if(!(0,l.isBoolean)(z[Y]))throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected bool or bool[] of length 1-4.'))}else if(!(0,l.isBoolean)(z))throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected bool or bool[] of length 1-4.'));if(!(0,l.isArray)(z)||z.length===1)return d.BOOL_1D_UNIFORM;if(z.length===2)return d.BOOL_2D_UNIFORM;if(z.length===3)return d.BOOL_3D_UNIFORM;if(z.length===4)return d.BOOL_4D_UNIFORM;throw new Error("Invalid value ".concat(JSON.stringify(z),' for uniform "').concat(ne,'" in program "').concat(W,'", expected boolean.'))}else throw new Error('Invalid type "'.concat($,'" for uniform "').concat(ne,'" in program "').concat(W,'", expected ').concat(d.FLOAT," or ").concat(d.INT," or ").concat(d.BOOL,"."))}r.uniformInternalTypeForValue=q;function J(z,$){return $.findIndex(function(ne){return ne===z||ne.layer===z})}r.indexOfLayerInArray=J;function oe(z,$,ne,W){return new Promise(function(Y,Z){function ie(){var ce=z.clientWaitSync($,ne,0);if(ce===z.WAIT_FAILED){Z();return}if(ce===z.TIMEOUT_EXPIRED){setTimeout(ie,W);return}Y()}ie()})}function K(z,$,ne,W,Y){return s(this,void 0,void 0,function(){var Z;return h(this,function(ie){switch(ie.label){case 0:return Z=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0),z.flush(),[4,oe(z,Z,0,10)];case 1:return ie.sent(),z.deleteSync(Z),z.bindBuffer($,ne),z.getBufferSubData($,W,Y),z.bindBuffer($,null),[2]}})})}function he(z,$,ne,W,Y,Z,ie,ce){return s(this,void 0,void 0,function(){var ue;return h(this,function(le){switch(le.label){case 0:return ue=z.createBuffer(),z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.bufferData(z.PIXEL_PACK_BUFFER,ce.byteLength,z.STREAM_READ),z.readPixels($,ne,W,Y,Z,ie,0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),[4,K(z,z.PIXEL_PACK_BUFFER,ue,0,ce)];case 1:return le.sent(),z.deleteBuffer(ue),[2,ce]}})})}r.readPixelsAsync=he},557:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getFloat16=d,r.setFloat16=S;var s=f(802),h=f(605),l=f(983);function d(p,y,...m){return(0,h.convertToNumber)((0,l.DataViewPrototypeGetUint16)(p,y,...(0,s.safeIfNeeded)(m)))}function S(p,y,m,...R){return(0,l.DataViewPrototypeSetUint16)(p,y,(0,h.roundToFloat16Bits)(m),...(0,s.safeIfNeeded)(R))}},310:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isFloat16Array=U;var s=f(802),h=f(299),l=f(605),d=f(554),S=f(930),p=f(983),y=f(700);const m=2,R=new p.NativeWeakMap;function U(_){return(0,p.WeakMapPrototypeHas)(R,_)||!(0,p.ArrayBufferIsView)(_)&&(0,h.hasFloat16ArrayBrand)(_)}function I(_){if(!U(_))throw(0,p.NativeTypeError)(S.THIS_IS_NOT_A_FLOAT16ARRAY_OBJECT)}function T(_,M){const x=U(_),u=(0,d.isNativeTypedArray)(_);if(!x&&!u)throw(0,p.NativeTypeError)(S.SPECIES_CONSTRUCTOR_DIDNT_RETURN_TYPEDARRAY_OBJECT);if(typeof M=="number"){let g;if(x){const E=P(_);g=(0,p.TypedArrayPrototypeGetLength)(E)}else g=(0,p.TypedArrayPrototypeGetLength)(_);if(g<M)throw(0,p.NativeTypeError)(S.DERIVED_CONSTRUCTOR_CREATED_TYPEDARRAY_OBJECT_WHICH_WAS_TOO_SMALL_LENGTH)}if((0,d.isNativeBigIntTypedArray)(_))throw(0,p.NativeTypeError)(S.CANNOT_MIX_BIGINT_AND_OTHER_TYPES)}function P(_){const M=(0,p.WeakMapPrototypeGet)(R,_);if(M!==void 0){const g=(0,p.TypedArrayPrototypeGetBuffer)(M);if((0,y.IsDetachedBuffer)(g))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER);return M}const x=_.buffer;if((0,y.IsDetachedBuffer)(x))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER);const u=(0,p.ReflectConstruct)(w,[x,_.byteOffset,_.length],_.constructor);return(0,p.WeakMapPrototypeGet)(R,u)}function b(_){const M=(0,p.TypedArrayPrototypeGetLength)(_),x=[];for(let u=0;u<M;++u)x[u]=(0,l.convertToNumber)(_[u]);return x}const A=new p.NativeWeakSet;for(const _ of(0,p.ReflectOwnKeys)(p.TypedArrayPrototype)){if(_===p.SymbolToStringTag)continue;const M=(0,p.ReflectGetOwnPropertyDescriptor)(p.TypedArrayPrototype,_);(0,p.ObjectHasOwn)(M,"get")&&typeof M.get=="function"&&(0,p.WeakSetPrototypeAdd)(A,M.get)}const v=(0,p.ObjectFreeze)({get(_,M,x){return(0,d.isCanonicalIntegerIndexString)(M)&&(0,p.ObjectHasOwn)(_,M)?(0,l.convertToNumber)((0,p.ReflectGet)(_,M)):(0,p.WeakSetPrototypeHas)(A,(0,p.ObjectPrototype__lookupGetter__)(_,M))?(0,p.ReflectGet)(_,M):(0,p.ReflectGet)(_,M,x)},set(_,M,x,u){return(0,d.isCanonicalIntegerIndexString)(M)&&(0,p.ObjectHasOwn)(_,M)?(0,p.ReflectSet)(_,M,(0,l.roundToFloat16Bits)(x)):(0,p.ReflectSet)(_,M,x,u)},getOwnPropertyDescriptor(_,M){if((0,d.isCanonicalIntegerIndexString)(M)&&(0,p.ObjectHasOwn)(_,M)){const x=(0,p.ReflectGetOwnPropertyDescriptor)(_,M);return x.value=(0,l.convertToNumber)(x.value),x}return(0,p.ReflectGetOwnPropertyDescriptor)(_,M)},defineProperty(_,M,x){return(0,d.isCanonicalIntegerIndexString)(M)&&(0,p.ObjectHasOwn)(_,M)&&(0,p.ObjectHasOwn)(x,"value")&&(x.value=(0,l.roundToFloat16Bits)(x.value)),(0,p.ReflectDefineProperty)(_,M,x)}});class w{constructor(M,x,u){let g;if(U(M))g=(0,p.ReflectConstruct)(p.NativeUint16Array,[P(M)],new.target);else if((0,d.isObject)(M)&&!(0,d.isArrayBuffer)(M)){let L,F;if((0,d.isNativeTypedArray)(M)){L=M,F=(0,p.TypedArrayPrototypeGetLength)(M);const O=(0,p.TypedArrayPrototypeGetBuffer)(M),G=(0,d.isSharedArrayBuffer)(O)?p.NativeArrayBuffer:(0,y.SpeciesConstructor)(O,p.NativeArrayBuffer);if((0,y.IsDetachedBuffer)(O))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER);if((0,d.isNativeBigIntTypedArray)(M))throw(0,p.NativeTypeError)(S.CANNOT_MIX_BIGINT_AND_OTHER_TYPES);const C=new G(F*m);g=(0,p.ReflectConstruct)(p.NativeUint16Array,[C],new.target)}else{const O=M[p.SymbolIterator];if(O!=null&&typeof O!="function")throw(0,p.NativeTypeError)(S.ITERATOR_PROPERTY_IS_NOT_CALLABLE);O!=null?(0,d.isOrdinaryArray)(M)?(L=M,F=M.length):(L=[...M],F=L.length):(L=M,F=(0,y.ToLength)(L.length)),g=(0,p.ReflectConstruct)(p.NativeUint16Array,[F],new.target)}for(let O=0;O<F;++O)g[O]=(0,l.roundToFloat16Bits)(L[O])}else g=(0,p.ReflectConstruct)(p.NativeUint16Array,arguments,new.target);const E=new p.NativeProxy(g,v);return(0,p.WeakMapPrototypeSet)(R,E,g),E}static from(M,...x){const u=this;if(!(0,p.ReflectHas)(u,h.brand))throw(0,p.NativeTypeError)(S.THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY);if(u===w){if(U(M)&&x.length===0){const C=P(M),N=new p.NativeUint16Array((0,p.TypedArrayPrototypeGetBuffer)(C),(0,p.TypedArrayPrototypeGetByteOffset)(C),(0,p.TypedArrayPrototypeGetLength)(C));return new w((0,p.TypedArrayPrototypeGetBuffer)((0,p.TypedArrayPrototypeSlice)(N)))}if(x.length===0)return new w((0,p.TypedArrayPrototypeGetBuffer)((0,p.Uint16ArrayFrom)(M,l.roundToFloat16Bits)));const O=x[0],G=x[1];return new w((0,p.TypedArrayPrototypeGetBuffer)((0,p.Uint16ArrayFrom)(M,function(C,...N){return(0,l.roundToFloat16Bits)((0,p.ReflectApply)(O,this,[C,...(0,s.safeIfNeeded)(N)]))},G)))}let g,E;const L=M[p.SymbolIterator];if(L!=null&&typeof L!="function")throw(0,p.NativeTypeError)(S.ITERATOR_PROPERTY_IS_NOT_CALLABLE);if(L!=null)(0,d.isOrdinaryArray)(M)?(g=M,E=M.length):(0,d.isOrdinaryNativeTypedArray)(M)?(g=M,E=(0,p.TypedArrayPrototypeGetLength)(M)):(g=[...M],E=g.length);else{if(M==null)throw(0,p.NativeTypeError)(S.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT);g=(0,p.NativeObject)(M),E=(0,y.ToLength)(g.length)}const F=new u(E);if(x.length===0)for(let O=0;O<E;++O)F[O]=g[O];else{const O=x[0],G=x[1];for(let C=0;C<E;++C)F[C]=(0,p.ReflectApply)(O,G,[g[C],C])}return F}static of(...M){const x=this;if(!(0,p.ReflectHas)(x,h.brand))throw(0,p.NativeTypeError)(S.THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY);const u=M.length;if(x===w){const E=new w(u),L=P(E);for(let F=0;F<u;++F)L[F]=(0,l.roundToFloat16Bits)(M[F]);return E}const g=new x(u);for(let E=0;E<u;++E)g[E]=M[E];return g}keys(){I(this);const M=P(this);return(0,p.TypedArrayPrototypeKeys)(M)}values(){I(this);const M=P(this);return(0,s.wrap)(function*(){for(const x of(0,p.TypedArrayPrototypeValues)(M))yield(0,l.convertToNumber)(x)}())}entries(){I(this);const M=P(this);return(0,s.wrap)(function*(){for(const[x,u]of(0,p.TypedArrayPrototypeEntries)(M))yield[x,(0,l.convertToNumber)(u)]}())}at(M){I(this);const x=P(this),u=(0,p.TypedArrayPrototypeGetLength)(x),g=(0,y.ToIntegerOrInfinity)(M),E=g>=0?g:u+g;if(!(E<0||E>=u))return(0,l.convertToNumber)(x[E])}map(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0],L=(0,y.SpeciesConstructor)(u,w);if(L===w){const O=new w(g),G=P(O);for(let C=0;C<g;++C){const N=(0,l.convertToNumber)(u[C]);G[C]=(0,l.roundToFloat16Bits)((0,p.ReflectApply)(M,E,[N,C,this]))}return O}const F=new L(g);T(F,g);for(let O=0;O<g;++O){const G=(0,l.convertToNumber)(u[O]);F[O]=(0,p.ReflectApply)(M,E,[G,O,this])}return F}filter(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0],L=[];for(let G=0;G<g;++G){const C=(0,l.convertToNumber)(u[G]);(0,p.ReflectApply)(M,E,[C,G,this])&&(0,p.ArrayPrototypePush)(L,C)}const F=(0,y.SpeciesConstructor)(u,w),O=new F(L);return T(O),O}reduce(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u);if(g===0&&x.length===0)throw(0,p.NativeTypeError)(S.REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE);let E,L;x.length===0?(E=(0,l.convertToNumber)(u[0]),L=1):(E=x[0],L=0);for(let F=L;F<g;++F)E=M(E,(0,l.convertToNumber)(u[F]),F,this);return E}reduceRight(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u);if(g===0&&x.length===0)throw(0,p.NativeTypeError)(S.REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE);let E,L;x.length===0?(E=(0,l.convertToNumber)(u[g-1]),L=g-2):(E=x[0],L=g-1);for(let F=L;F>=0;--F)E=M(E,(0,l.convertToNumber)(u[F]),F,this);return E}forEach(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0];for(let L=0;L<g;++L)(0,p.ReflectApply)(M,E,[(0,l.convertToNumber)(u[L]),L,this])}find(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0];for(let L=0;L<g;++L){const F=(0,l.convertToNumber)(u[L]);if((0,p.ReflectApply)(M,E,[F,L,this]))return F}}findIndex(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0];for(let L=0;L<g;++L){const F=(0,l.convertToNumber)(u[L]);if((0,p.ReflectApply)(M,E,[F,L,this]))return L}return-1}findLast(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0];for(let L=g-1;L>=0;--L){const F=(0,l.convertToNumber)(u[L]);if((0,p.ReflectApply)(M,E,[F,L,this]))return F}}findLastIndex(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0];for(let L=g-1;L>=0;--L){const F=(0,l.convertToNumber)(u[L]);if((0,p.ReflectApply)(M,E,[F,L,this]))return L}return-1}every(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0];for(let L=0;L<g;++L)if(!(0,p.ReflectApply)(M,E,[(0,l.convertToNumber)(u[L]),L,this]))return!1;return!0}some(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u),E=x[0];for(let L=0;L<g;++L)if((0,p.ReflectApply)(M,E,[(0,l.convertToNumber)(u[L]),L,this]))return!0;return!1}set(M,...x){I(this);const u=P(this),g=(0,y.ToIntegerOrInfinity)(x[0]);if(g<0)throw(0,p.NativeRangeError)(S.OFFSET_IS_OUT_OF_BOUNDS);if(M==null)throw(0,p.NativeTypeError)(S.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT);if((0,d.isNativeBigIntTypedArray)(M))throw(0,p.NativeTypeError)(S.CANNOT_MIX_BIGINT_AND_OTHER_TYPES);if(U(M))return(0,p.TypedArrayPrototypeSet)(P(this),P(M),g);if((0,d.isNativeTypedArray)(M)){const O=(0,p.TypedArrayPrototypeGetBuffer)(M);if((0,y.IsDetachedBuffer)(O))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER)}const E=(0,p.TypedArrayPrototypeGetLength)(u),L=(0,p.NativeObject)(M),F=(0,y.ToLength)(L.length);if(g===1/0||F+g>E)throw(0,p.NativeRangeError)(S.OFFSET_IS_OUT_OF_BOUNDS);for(let O=0;O<F;++O)u[O+g]=(0,l.roundToFloat16Bits)(L[O])}reverse(){I(this);const M=P(this);return(0,p.TypedArrayPrototypeReverse)(M),this}fill(M,...x){I(this);const u=P(this);return(0,p.TypedArrayPrototypeFill)(u,(0,l.roundToFloat16Bits)(M),...(0,s.safeIfNeeded)(x)),this}copyWithin(M,x,...u){I(this);const g=P(this);return(0,p.TypedArrayPrototypeCopyWithin)(g,M,x,...(0,s.safeIfNeeded)(u)),this}sort(M){I(this);const x=P(this),u=M!==void 0?M:y.defaultCompare;return(0,p.TypedArrayPrototypeSort)(x,(g,E)=>u((0,l.convertToNumber)(g),(0,l.convertToNumber)(E))),this}slice(M,x){I(this);const u=P(this),g=(0,y.SpeciesConstructor)(u,w);if(g===w){const Q=new p.NativeUint16Array((0,p.TypedArrayPrototypeGetBuffer)(u),(0,p.TypedArrayPrototypeGetByteOffset)(u),(0,p.TypedArrayPrototypeGetLength)(u));return new w((0,p.TypedArrayPrototypeGetBuffer)((0,p.TypedArrayPrototypeSlice)(Q,M,x)))}const E=(0,p.TypedArrayPrototypeGetLength)(u),L=(0,y.ToIntegerOrInfinity)(M),F=x===void 0?E:(0,y.ToIntegerOrInfinity)(x);let O;L===-1/0?O=0:L<0?O=E+L>0?E+L:0:O=E<L?E:L;let G;F===-1/0?G=0:F<0?G=E+F>0?E+F:0:G=E<F?E:F;const C=G-O>0?G-O:0,N=new g(C);if(T(N,C),C===0)return N;const V=(0,p.TypedArrayPrototypeGetBuffer)(u);if((0,y.IsDetachedBuffer)(V))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER);let j=0;for(;O<G;)N[j]=(0,l.convertToNumber)(u[O]),++O,++j;return N}subarray(M,x){I(this);const u=P(this),g=(0,y.SpeciesConstructor)(u,w),E=new p.NativeUint16Array((0,p.TypedArrayPrototypeGetBuffer)(u),(0,p.TypedArrayPrototypeGetByteOffset)(u),(0,p.TypedArrayPrototypeGetLength)(u)),L=(0,p.TypedArrayPrototypeSubarray)(E,M,x),F=new g((0,p.TypedArrayPrototypeGetBuffer)(L),(0,p.TypedArrayPrototypeGetByteOffset)(L),(0,p.TypedArrayPrototypeGetLength)(L));return T(F),F}indexOf(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u);let E=(0,y.ToIntegerOrInfinity)(x[0]);if(E===1/0)return-1;E<0&&(E+=g,E<0&&(E=0));for(let L=E;L<g;++L)if((0,p.ObjectHasOwn)(u,L)&&(0,l.convertToNumber)(u[L])===M)return L;return-1}lastIndexOf(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u);let E=x.length>=1?(0,y.ToIntegerOrInfinity)(x[0]):g-1;if(E===-1/0)return-1;E>=0?E=E<g-1?E:g-1:E+=g;for(let L=E;L>=0;--L)if((0,p.ObjectHasOwn)(u,L)&&(0,l.convertToNumber)(u[L])===M)return L;return-1}includes(M,...x){I(this);const u=P(this),g=(0,p.TypedArrayPrototypeGetLength)(u);let E=(0,y.ToIntegerOrInfinity)(x[0]);if(E===1/0)return!1;E<0&&(E+=g,E<0&&(E=0));const L=(0,p.NumberIsNaN)(M);for(let F=E;F<g;++F){const O=(0,l.convertToNumber)(u[F]);if(L&&(0,p.NumberIsNaN)(O)||O===M)return!0}return!1}join(M){I(this);const x=P(this),u=b(x);return(0,p.ArrayPrototypeJoin)(u,M)}toLocaleString(...M){I(this);const x=P(this),u=b(x);return(0,p.ArrayPrototypeToLocaleString)(u,...(0,s.safeIfNeeded)(M))}get[p.SymbolToStringTag](){if(U(this))return"Float16Array"}}r.Float16Array=w,(0,p.ObjectDefineProperty)(w,"BYTES_PER_ELEMENT",{value:m}),(0,p.ObjectDefineProperty)(w,h.brand,{}),(0,p.ReflectSetPrototypeOf)(w,p.TypedArray);const D=w.prototype;(0,p.ObjectDefineProperty)(D,"BYTES_PER_ELEMENT",{value:m}),(0,p.ObjectDefineProperty)(D,p.SymbolIterator,{value:D.values,writable:!0,configurable:!0}),(0,p.ReflectSetPrototypeOf)(D,p.TypedArrayPrototype)},802:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.safeIfNeeded=d,r.wrap=y;var s=f(983);const h=new s.NativeWeakMap,l=(0,s.ObjectCreate)(null,{next:{value:function(){const R=(0,s.WeakMapPrototypeGet)(h,this);return(0,s.ArrayIteratorPrototypeNext)(R)}},[s.SymbolIterator]:{value:function(){return this}}});function d(m){if(m[s.SymbolIterator]===s.NativeArrayPrototypeSymbolIterator)return m;const R=(0,s.ObjectCreate)(l);return(0,s.WeakMapPrototypeSet)(h,R,(0,s.ArrayPrototypeSymbolIterator)(m)),R}const S=new s.NativeWeakMap,p=(0,s.ObjectCreate)(s.IteratorPrototype,{next:{value:function(){const R=(0,s.WeakMapPrototypeGet)(S,this);return(0,s.GeneratorPrototypeNext)(R)},writable:!0,configurable:!0}});for(const m of(0,s.ReflectOwnKeys)(s.ArrayIteratorPrototype))m!=="next"&&(0,s.ObjectDefineProperty)(p,m,(0,s.ReflectGetOwnPropertyDescriptor)(s.ArrayIteratorPrototype,m));function y(m){const R=(0,s.ObjectCreate)(p);return(0,s.WeakMapPrototypeSet)(S,R,m),R}},299:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.hasFloat16ArrayBrand=S;var s=f(554),h=f(930),l=f(983);const d=(0,l.SymbolFor)("__Float16Array__");r.brand=d;function S(p){if(!(0,s.isObjectLike)(p))return!1;const y=(0,l.ReflectGetPrototypeOf)(p);if(!(0,s.isObjectLike)(y))return!1;const m=y.constructor;if(m===void 0)return!1;if(!(0,s.isObject)(m))throw(0,l.NativeTypeError)(h.THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT);return(0,l.ReflectHas)(m,d)}},605:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.convertToNumber=I,r.roundToFloat16Bits=y;var s=f(983);const h=new s.NativeArrayBuffer(4),l=new s.NativeFloat32Array(h),d=new s.NativeUint32Array(h),S=new s.NativeUint32Array(512),p=new s.NativeUint32Array(512);for(let T=0;T<256;++T){const P=T-127;P<-27?(S[T]=0,S[T|256]=32768,p[T]=24,p[T|256]=24):P<-14?(S[T]=1024>>-P-14,S[T|256]=1024>>-P-14|32768,p[T]=-P-1,p[T|256]=-P-1):P<=15?(S[T]=P+15<<10,S[T|256]=P+15<<10|32768,p[T]=13,p[T|256]=13):P<128?(S[T]=31744,S[T|256]=64512,p[T]=24,p[T|256]=24):(S[T]=31744,S[T|256]=64512,p[T]=13,p[T|256]=13)}function y(T){l[0]=T;const P=d[0],b=P>>23&511;return S[b]+((P&8388607)>>p[b])}const m=new s.NativeUint32Array(2048),R=new s.NativeUint32Array(64),U=new s.NativeUint32Array(64);for(let T=1;T<1024;++T){let P=T<<13,b=0;for(;!(P&8388608);)P<<=1,b-=8388608;P&=-8388609,b+=947912704,m[T]=P|b}for(let T=1024;T<2048;++T)m[T]=939524096+(T-1024<<13);for(let T=1;T<31;++T)R[T]=T<<23;R[31]=1199570944,R[32]=2147483648;for(let T=33;T<63;++T)R[T]=2147483648+(T-32<<23);R[63]=3347054592;for(let T=1;T<64;++T)T!==32&&(U[T]=1024);function I(T){const P=T>>10;return d[0]=m[U[P]+(T&1023)]+R[P],l[0]}},554:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isArrayBuffer=p,r.isCanonicalIntegerIndexString=U,r.isNativeBigIntTypedArray=S,r.isNativeTypedArray=d,r.isObject=h,r.isObjectLike=l,r.isOrdinaryArray=m,r.isOrdinaryNativeTypedArray=R,r.isSharedArrayBuffer=y;var s=f(983);function h(I){return I!==null&&typeof I=="object"||typeof I=="function"}function l(I){return I!==null&&typeof I=="object"}function d(I){return(0,s.TypedArrayPrototypeGetSymbolToStringTag)(I)!==void 0}function S(I){const T=(0,s.TypedArrayPrototypeGetSymbolToStringTag)(I);return T==="BigInt64Array"||T==="BigUint64Array"}function p(I){try{return(0,s.ArrayBufferPrototypeGetByteLength)(I),!0}catch{return!1}}function y(I){if(s.NativeSharedArrayBuffer===null)return!1;try{return(0,s.SharedArrayBufferPrototypeGetByteLength)(I),!0}catch{return!1}}function m(I){return(0,s.ArrayIsArray)(I)?I[s.SymbolIterator]===s.NativeArrayPrototypeSymbolIterator?!0:I[s.SymbolIterator]()[s.SymbolToStringTag]==="Array Iterator":!1}function R(I){return d(I)?I[s.SymbolIterator]===s.NativeTypedArrayPrototypeSymbolIterator?!0:I[s.SymbolIterator]()[s.SymbolToStringTag]==="Array Iterator":!1}function U(I){if(typeof I!="string")return!1;const T=+I;return I!==T+""||!(0,s.NumberIsFinite)(T)?!1:T===(0,s.MathTrunc)(T)}},930:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0});const f="This is not an object";r.THIS_IS_NOT_AN_OBJECT=f;const s="This is not a Float16Array object";r.THIS_IS_NOT_A_FLOAT16ARRAY_OBJECT=s;const h="This constructor is not a subclass of Float16Array";r.THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY=h;const l="The constructor property value is not an object";r.THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT=l;const d="Species constructor didn't return TypedArray object";r.SPECIES_CONSTRUCTOR_DIDNT_RETURN_TYPEDARRAY_OBJECT=d;const S="Derived constructor created TypedArray object which was too small length";r.DERIVED_CONSTRUCTOR_CREATED_TYPEDARRAY_OBJECT_WHICH_WAS_TOO_SMALL_LENGTH=S;const p="Attempting to access detached ArrayBuffer";r.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER=p;const y="Cannot convert undefined or null to object";r.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT=y;const m="Cannot mix BigInt and other types, use explicit conversions";r.CANNOT_MIX_BIGINT_AND_OTHER_TYPES=m;const R="@@iterator property is not callable";r.ITERATOR_PROPERTY_IS_NOT_CALLABLE=R;const U="Reduce of empty array with no initial value";r.REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE=U;const I="Offset is out of bounds";r.OFFSET_IS_OUT_OF_BOUNDS=I},983:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0});var s=f(930);function h(te){return(me,...Me)=>d(te,me,Me)}function l(te,me){return h(m(te,me).get)}const{apply:d,construct:S,defineProperty:p,get:y,getOwnPropertyDescriptor:m,getPrototypeOf:R,has:U,ownKeys:I,set:T,setPrototypeOf:P}=Reflect;r.ReflectSetPrototypeOf=P,r.ReflectSet=T,r.ReflectOwnKeys=I,r.ReflectHas=U,r.ReflectGetPrototypeOf=R,r.ReflectGetOwnPropertyDescriptor=m,r.ReflectGet=y,r.ReflectDefineProperty=p,r.ReflectConstruct=S,r.ReflectApply=d;const b=Proxy;r.NativeProxy=b;const{MAX_SAFE_INTEGER:A,isFinite:v,isNaN:w}=Number;r.NumberIsNaN=w,r.NumberIsFinite=v,r.MAX_SAFE_INTEGER=A;const{iterator:D,species:_,toStringTag:M,for:x}=Symbol;r.SymbolFor=x,r.SymbolToStringTag=M,r.SymbolSpecies=_,r.SymbolIterator=D;const u=Object;r.NativeObject=u;const{create:g,defineProperty:E,freeze:L,is:F}=u;r.ObjectIs=F,r.ObjectFreeze=L,r.ObjectDefineProperty=E,r.ObjectCreate=g;const O=u.prototype,G=O.__lookupGetter__?h(O.__lookupGetter__):(te,me)=>{if(te==null)throw Gt(s.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT);let Me=u(te);do{const Le=m(Me,me);if(Le!==void 0)return C(Le,"get")?Le.get:void 0}while((Me=R(Me))!==null)};r.ObjectPrototype__lookupGetter__=G;const C=u.hasOwn||h(O.hasOwnProperty);r.ObjectHasOwn=C;const N=Array,V=N.isArray;r.ArrayIsArray=V;const j=N.prototype,Q=h(j.join);r.ArrayPrototypeJoin=Q;const H=h(j.push);r.ArrayPrototypePush=H;const q=h(j.toLocaleString);r.ArrayPrototypeToLocaleString=q;const J=j[D];r.NativeArrayPrototypeSymbolIterator=J;const oe=h(J);r.ArrayPrototypeSymbolIterator=oe;const K=Math.trunc;r.MathTrunc=K;const he=ArrayBuffer;r.NativeArrayBuffer=he;const z=he.isView;r.ArrayBufferIsView=z;const $=he.prototype,ne=h($.slice);r.ArrayBufferPrototypeSlice=ne;const W=l($,"byteLength");r.ArrayBufferPrototypeGetByteLength=W;const Y=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;r.NativeSharedArrayBuffer=Y;const Z=Y&&l(Y.prototype,"byteLength");r.SharedArrayBufferPrototypeGetByteLength=Z;const ie=R(Uint8Array);r.TypedArray=ie;const ce=ie.from,ue=ie.prototype;r.TypedArrayPrototype=ue;const le=ue[D];r.NativeTypedArrayPrototypeSymbolIterator=le;const k=h(ue.keys);r.TypedArrayPrototypeKeys=k;const B=h(ue.values);r.TypedArrayPrototypeValues=B;const re=h(ue.entries);r.TypedArrayPrototypeEntries=re;const ge=h(ue.set);r.TypedArrayPrototypeSet=ge;const _e=h(ue.reverse);r.TypedArrayPrototypeReverse=_e;const ye=h(ue.fill);r.TypedArrayPrototypeFill=ye;const we=h(ue.copyWithin);r.TypedArrayPrototypeCopyWithin=we;const xe=h(ue.sort);r.TypedArrayPrototypeSort=xe;const de=h(ue.slice);r.TypedArrayPrototypeSlice=de;const Se=h(ue.subarray);r.TypedArrayPrototypeSubarray=Se;const Re=l(ue,"buffer");r.TypedArrayPrototypeGetBuffer=Re;const Ee=l(ue,"byteOffset");r.TypedArrayPrototypeGetByteOffset=Ee;const Ie=l(ue,"length");r.TypedArrayPrototypeGetLength=Ie;const Pe=l(ue,M);r.TypedArrayPrototypeGetSymbolToStringTag=Pe;const De=Uint16Array;r.NativeUint16Array=De;const Ve=(...te)=>d(ce,De,te);r.Uint16ArrayFrom=Ve;const Xe=Uint32Array;r.NativeUint32Array=Xe;const ee=Float32Array;r.NativeFloat32Array=ee;const fe=R([][D]());r.ArrayIteratorPrototype=fe;const ve=h(fe.next);r.ArrayIteratorPrototypeNext=ve;const Te=h(function*(){}().next);r.GeneratorPrototypeNext=Te;const Ae=R(fe);r.IteratorPrototype=Ae;const Ue=DataView.prototype,Ze=h(Ue.getUint16);r.DataViewPrototypeGetUint16=Ze;const it=h(Ue.setUint16);r.DataViewPrototypeSetUint16=it;const Gt=TypeError;r.NativeTypeError=Gt;const We=RangeError;r.NativeRangeError=We;const bt=WeakSet;r.NativeWeakSet=bt;const ut=bt.prototype,mr=h(ut.add);r.WeakSetPrototypeAdd=mr;const _o=h(ut.has);r.WeakSetPrototypeHas=_o;const gr=WeakMap;r.NativeWeakMap=gr;const Di=gr.prototype,X=h(Di.get);r.WeakMapPrototypeGet=X;const ae=h(Di.has);r.WeakMapPrototypeHas=ae;const pe=h(Di.set);r.WeakMapPrototypeSet=pe},700:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.IsDetachedBuffer=y,r.SpeciesConstructor=p,r.ToIntegerOrInfinity=d,r.ToLength=S,r.defaultCompare=m;var s=f(554),h=f(930),l=f(983);function d(R){const U=+R;return(0,l.NumberIsNaN)(U)||U===0?0:(0,l.MathTrunc)(U)}function S(R){const U=d(R);return U<0?0:U<l.MAX_SAFE_INTEGER?U:l.MAX_SAFE_INTEGER}function p(R,U){if(!(0,s.isObject)(R))throw(0,l.NativeTypeError)(h.THIS_IS_NOT_AN_OBJECT);const I=R.constructor;if(I===void 0)return U;if(!(0,s.isObject)(I))throw(0,l.NativeTypeError)(h.THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT);const T=I[l.SymbolSpecies];return T??U}function y(R){if((0,s.isSharedArrayBuffer)(R))return!1;try{return(0,l.ArrayBufferPrototypeSlice)(R,0,0),!1}catch{}return!0}function m(R,U){const I=(0,l.NumberIsNaN)(R),T=(0,l.NumberIsNaN)(U);if(I&&T)return 0;if(I)return 1;if(T||R<U)return-1;if(R>U)return 1;if(R===0&&U===0){const P=(0,l.ObjectIs)(R,0),b=(0,l.ObjectIs)(U,0);if(!P&&b)return-1;if(P&&!b)return 1}return 0}},216:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.hfround=l;var s=f(605),h=f(983);function l(d){const S=+d;if(!(0,h.NumberIsFinite)(S)||S===0)return S;const p=(0,s.roundToFloat16Bits)(S);return(0,s.convertToNumber)(p)}},650:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0});var s=f(310);r.Float16Array=s.Float16Array,r.isFloat16Array=s.isFloat16Array;var h=f(146);r.isTypedArray=h.isTypedArray;var l=f(557);r.getFloat16=l.getFloat16,r.setFloat16=l.setFloat16;var d=f(216);r.hfround=d.hfround},146:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isTypedArray=l;var s=f(310),h=f(554);function l(d){return(0,h.isNativeTypedArray)(d)||(0,s.isFloat16Array)(d)}}},n={};function o(c){var r=n[c];if(r!==void 0)return r.exports;var f=n[c]={exports:{}};return t[c].call(f.exports,f,f.exports,o),f.exports}o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}();var a=o(607);return a})())})(Ov);const dr=(i,{type:e=Be.FLOAT,numComponents:t=1,dimensions:n=1}={})=>{const o=An(),a=new Be.GPULayer(o,{name:`current_${i}`,type:e,dimensions:n,numComponents:t,numBuffers:2}),c=new Be.GPULayer(o,{name:`target_${i}`,type:e,dimensions:n,numComponents:t,numBuffers:1}),r=new xt;c.attachToThreeTexture(r);const f=new Be.GPULayer(o,{name:`view_${i}`,type:e,dimensions:n,numComponents:t,numBuffers:1}),s=new xt;return f.attachToThreeTexture(s),{current:a,target:c,view:f,viewTexture:s,targetTexture:r}},an=$e.infinite(()=>dr("position",{numComponents:3})),st=$e.infinite(()=>dr("color",{numComponents:4})),Ht=$e.infinite(()=>dr("size",{numComponents:1})),Wt=$e.infinite(()=>dr("emphasis",{numComponents:1})),Oi=$e.infinite(()=>dr("viewMatrix",{numComponents:4,type:Be.FLOAT,dimensions:4})),Nv=i=>{[an(),st(),Ht(),Wt()].forEach(({current:t,target:n,view:o,viewTexture:a,targetTexture:c})=>{t.resize(i),n.resize(i),n.attachToThreeTexture(c),o.resize(i),o.attachToThreeTexture(a)})},Dv=$e.infinite(()=>new Be.GPUProgram(An(),{name:"interpolation",fragmentShader:`
      in vec2 v_uv;

      // the current and target textures
      uniform sampler2D uTargetPositions;
      uniform sampler2D uCurrentPositions;
      uniform sampler2D uTargetColors;
      uniform sampler2D uCurrentColors;
      uniform sampler2D uTargetSizes;
      uniform sampler2D uCurrentSizes;
      uniform sampler2D uTargetEmphasis;
      uniform sampler2D uCurrentEmphasis;
      // uniform sampler2D uTargetViewMatrix;
      // uniform sampler2D uCurrentViewMatrix;

      // the interpolation ratio
      uniform float uMixRatio;

      layout(location = 0) out vec3 outPositions;
      layout(location = 1) out vec3 viewPositions;
      layout(location = 2) out vec4 outColors;
      layout(location = 3) out vec4 viewColors;
      layout(location = 4) out float outSizes;
      layout(location = 5) out float viewSizes;
      layout(location = 6) out float outEmphasis;
      layout(location = 7) out float viewEmphasis;
      // layout(location = 8) out vec4 outViewMatrix;
      // layout(location = 9) out vec4 viewViewMatrix;

      void main() {
        vec3 targetPosition = texture(uTargetPositions, v_uv).xyz;
        vec3 currentPosition = texture(uCurrentPositions, v_uv).xyz;
        outPositions = mix(currentPosition, targetPosition, uMixRatio);
        viewPositions = outPositions;

        vec4 targetColor = texture(uTargetColors, v_uv);
        vec4 currentColor = texture(uCurrentColors, v_uv);
        outColors = mix(currentColor, targetColor, uMixRatio);
        viewColors = outColors;

        float targetSize = texture(uTargetSizes, v_uv).r;
        float currentSize = texture(uCurrentSizes, v_uv).r;
        outSizes = mix(currentSize, targetSize, uMixRatio);
        viewSizes = outSizes;

        float targetEmphasis = texture(uTargetEmphasis, v_uv).r;
        float currentEmphasis = texture(uCurrentEmphasis, v_uv).r;
        outEmphasis = mix(currentEmphasis, targetEmphasis, uMixRatio);
        viewEmphasis = outEmphasis;
        
        // vec4 targetViewMatrix = texture(uCurrentViewMatrix, v_uv);
        // vec4 currentViewMatrix = texture(uCurrentViewMatrix, v_uv);
        // outViewMatrix = mix(currentViewMatrix, targetViewMatrix, uMixRatio);
        // viewViewMatrix = outViewMatrix;
      }
    `,uniforms:[{name:"uTargetPositions",type:Be.INT,value:0},{name:"uCurrentPositions",type:Be.INT,value:1},{name:"uTargetColors",type:Be.INT,value:2},{name:"uCurrentColors",type:Be.INT,value:3},{name:"uTargetSizes",type:Be.INT,value:4},{name:"uCurrentSizes",type:Be.INT,value:5},{name:"uTargetEmphasis",type:Be.INT,value:6},{name:"uCurrentEmphasis",type:Be.INT,value:7},{name:"uMixRatio",type:Be.FLOAT,value:.05}]})),Fv=$e.infinite(()=>new Be.GPUProgram(An(),{name:"interpolateViewMatrix",fragmentShader:`
      in vec2 v_uv;

      // the current and target textures
      uniform sampler2D uTargetViewMatrix;
      uniform sampler2D uCurrentViewMatrix;

      // the interpolation ratio
      uniform float uMixRatio;

      layout(location = 0) out vec4 outViewMatrix;
      layout(location = 1) out vec4 viewViewMatrix;

      void main() {
        vec4 targetViewMatrix = texture(uTargetViewMatrix, v_uv);
        vec4 currentViewMatrix = texture(uCurrentViewMatrix, v_uv);
        outViewMatrix = mix(currentViewMatrix, targetViewMatrix, uMixRatio);
        viewViewMatrix = outViewMatrix;
      }
    `,uniforms:[{name:"uTargetViewMatrix",type:Be.INT,value:0},{name:"uCurrentViewMatrix",type:Be.INT,value:1},{name:"uMixRatio",type:Be.FLOAT,value:.1}]}));$e.infinite(()=>new Be.GPUProgram(An(),{name:"interpolation",fragmentShader:`
      in vec2 v_uv;

      // the current and target textures
      uniform sampler2D uCurrentPositions;
      uniform sampler2D uCurrentColors;
      uniform sampler2D uCurrentSizes;
      uniform sampler2D uCurrentEmphasis;
      
      layout (location = 0) out vec3 outPositions;
      layout (location = 1) out vec4 outColors;
      layout (location = 2) out float outSizes;
      layout (location = 3) out float outEmphasis;

      void main() {
        vec3 currentPositions = texture(uCurrentPositions, v_uv).xyz;
        outPositions = vec3(currentPositions);

        vec4 currentColors = texture(uCurrentColors, v_uv);
        outColors = vec4(currentColors);

        float currentSizes = texture(uCurrentSizes, v_uv).r;
        outSizes = float(currentSizes);

        float currentEmphasis = texture(uCurrentEmphasis, v_uv).r;
        outEmphasis = float(currentEmphasis);
      }
    `,uniforms:[{name:"uCurrentPositions",type:Be.INT,value:0},{name:"uCurrentColors",type:Be.INT,value:1},{name:"uCurrentSizes",type:Be.INT,value:2},{name:"uCurrentEmphasis",type:Be.INT,value:3}]}));const ql=$e.infinite(()=>({globalPerspective:new vn(new Ye),globalView:new vn(new Ye),zoomedProjection:new vn(new Ye),zoomedView:new vn(new Ye),fixedPerspective:new vn(new Ye),fixedView:new vn(new Ye)})),Kl=$e.infinite(()=>{const i=new Cv;i.setName("cameras");const e=ql();return Object.values(e).forEach(t=>{i.add(t)}),i}),Uv=Ji(Kr((i,e,t,n,o,a)=>{Oi().target.setFromArray(e);const c=ql();c.globalPerspective.value.fromArray(i),c.globalView.value.fromArray(e),c.zoomedProjection.value.fromArray(t),c.zoomedView.value.fromArray(n),c.fixedPerspective.value.fromArray(o),c.fixedView.value.fromArray(a)},1e3/45));var hr={};function Gv(i){if(typeof i=="object"){if("buttons"in i)return i.buttons;if("which"in i){var e=i.which;if(e===2)return 4;if(e===3)return 2;if(e>0)return 1<<e-1}else if("button"in i){var e=i.button;if(e===1)return 4;if(e===2)return 2;if(e>=0)return 1<<e}}return 0}hr.buttons=Gv;function rs(i){return i.target||i.srcElement||window}hr.element=rs;function Bv(i){if(typeof i=="object"){if("offsetX"in i)return i.offsetX;var e=rs(i),t=e.getBoundingClientRect();return i.clientX-t.left}return 0}hr.x=Bv;function Vv(i){if(typeof i=="object"){if("offsetY"in i)return i.offsetY;var e=rs(i),t=e.getBoundingClientRect();return i.clientY-t.top}return 0}hr.y=Vv;var zv=kv,ki=hr;function kv(i,e){e||(e=i,i=window);var t=0,n=0,o=0,a={shift:!1,alt:!1,control:!1,meta:!1},c=!1;function r(U){var I=!1;return"altKey"in U&&(I=I||U.altKey!==a.alt,a.alt=!!U.altKey),"shiftKey"in U&&(I=I||U.shiftKey!==a.shift,a.shift=!!U.shiftKey),"ctrlKey"in U&&(I=I||U.ctrlKey!==a.control,a.control=!!U.ctrlKey),"metaKey"in U&&(I=I||U.metaKey!==a.meta,a.meta=!!U.metaKey),I}function f(U,I){var T=ki.x(I),P=ki.y(I);"buttons"in I&&(U=I.buttons|0),(U!==t||T!==n||P!==o||r(I))&&(t=U|0,n=T||0,o=P||0,e&&e(t,n,o,a))}function s(U){f(0,U)}function h(){(t||n||o||a.shift||a.alt||a.meta||a.control)&&(n=o=0,t=0,a.shift=a.alt=a.control=a.meta=!1,e&&e(0,0,0,a))}function l(U){r(U)&&e&&e(t,n,o,a)}function d(U){ki.buttons(U)===0?f(0,U):f(t,U)}function S(U){f(t|ki.buttons(U),U)}function p(U){f(t&~ki.buttons(U),U)}function y(){c||(c=!0,i.addEventListener("mousemove",d),i.addEventListener("mousedown",S),i.addEventListener("mouseup",p),i.addEventListener("mouseleave",s),i.addEventListener("mouseenter",s),i.addEventListener("mouseout",s),i.addEventListener("mouseover",s),i.addEventListener("blur",h),i.addEventListener("keyup",l),i.addEventListener("keydown",l),i.addEventListener("keypress",l),i!==window&&(window.addEventListener("blur",h),window.addEventListener("keyup",l),window.addEventListener("keydown",l),window.addEventListener("keypress",l)))}function m(){c&&(c=!1,i.removeEventListener("mousemove",d),i.removeEventListener("mousedown",S),i.removeEventListener("mouseup",p),i.removeEventListener("mouseleave",s),i.removeEventListener("mouseenter",s),i.removeEventListener("mouseout",s),i.removeEventListener("mouseover",s),i.removeEventListener("blur",h),i.removeEventListener("keyup",l),i.removeEventListener("keydown",l),i.removeEventListener("keypress",l),i!==window&&(window.removeEventListener("blur",h),window.removeEventListener("keyup",l),window.removeEventListener("keydown",l),window.removeEventListener("keypress",l)))}y();var R={element:i};return Object.defineProperties(R,{enabled:{get:function(){return c},set:function(U){U?y():m()},enumerable:!0},buttons:{get:function(){return t},enumerable:!0},x:{get:function(){return n},enumerable:!0},y:{get:function(){return o},enumerable:!0},mods:{get:function(){return a},enumerable:!0}}),R}var Hv={left:0,top:0},Wv=Xv;function Xv(i,e,t){e=e||i.currentTarget||i.srcElement,Array.isArray(t)||(t=[0,0]);var n=i.clientX||0,o=i.clientY||0,a=jv(e);return t[0]=n-a.left,t[1]=o-a.top,t}function jv(i){return i===window||i===document||i===document.body?Hv:i.getBoundingClientRect()}var Jr={},Yv={get exports(){return Jr},set exports(i){Jr=i}},Ua={},$v={get exports(){return Ua},set exports(i){Ua=i}},qv=void 0,Zl=function(i){return i!==qv&&i!==null},Kv=Zl,Zv={object:!0,function:!0,undefined:!0},Jv=function(i){return Kv(i)?hasOwnProperty.call(Zv,typeof i):!1},Qv=Jv,e0=function(i){if(!Qv(i))return!1;try{return i.constructor?i.constructor.prototype===i:!1}catch{return!1}},t0=e0,n0=function(i){if(typeof i!="function"||!hasOwnProperty.call(i,"length"))return!1;try{if(typeof i.length!="number"||typeof i.call!="function"||typeof i.apply!="function")return!1}catch{return!1}return!t0(i)},i0=n0,r0=/^\s*class[\s{/}]/,o0=Function.prototype.toString,a0=function(i){return!(!i0(i)||r0.test(o0.call(i)))},s0=function(){var i=Object.assign,e;return typeof i!="function"?!1:(e={foo:"raz"},i(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")},na,Ic;function c0(){return Ic||(Ic=1,na=function(){try{return Object.keys("primitive"),!0}catch{return!1}}),na}var l0=function(){},u0=l0(),os=function(i){return i!==u0&&i!==null},ia,Lc;function f0(){if(Lc)return ia;Lc=1;var i=os,e=Object.keys;return ia=function(t){return e(i(t)?Object(t):t)},ia}var ra,Cc;function d0(){return Cc||(Cc=1,ra=c0()()?Object.keys:f0()),ra}var oa,Oc;function h0(){if(Oc)return oa;Oc=1;var i=os;return oa=function(e){if(!i(e))throw new TypeError("Cannot use null or undefined");return e},oa}var aa,Nc;function p0(){if(Nc)return aa;Nc=1;var i=d0(),e=h0(),t=Math.max;return aa=function(n,o){var a,c,r=t(arguments.length,2),f;for(n=Object(e(n)),f=function(s){try{n[s]=o[s]}catch(h){a||(a=h)}},c=1;c<r;++c)o=arguments[c],i(o).forEach(f);if(a!==void 0)throw a;return n},aa}var m0=s0()?Object.assign:p0(),g0=os,_0=Array.prototype.forEach,v0=Object.create,y0=function(i,e){var t;for(t in i)e[t]=i[t]},x0=function(i){var e=v0(null);return _0.call(arguments,function(t){g0(t)&&y0(Object(t),e)}),e},sa="razdwatrzy",b0=function(){return typeof sa.contains!="function"?!1:sa.contains("dwa")===!0&&sa.contains("foo")===!1},ca,Dc;function T0(){if(Dc)return ca;Dc=1;var i=String.prototype.indexOf;return ca=function(e){return i.call(this,e,arguments[1])>-1},ca}var S0=b0()?String.prototype.contains:T0(),Wr=Zl,Fc=a0,Jl=m0,Ql=x0,qi=S0,E0=$v.exports=function(i,e){var t,n,o,a,c;return arguments.length<2||typeof i!="string"?(a=e,e=i,i=null):a=arguments[2],Wr(i)?(t=qi.call(i,"c"),n=qi.call(i,"e"),o=qi.call(i,"w")):(t=o=!0,n=!1),c={value:e,configurable:t,enumerable:n,writable:o},a?Jl(Ql(a),c):c};E0.gs=function(i,e,t){var n,o,a,c;return typeof i!="string"?(a=t,t=e,e=i,i=null):a=arguments[3],Wr(e)?Fc(e)?Wr(t)?Fc(t)||(a=t,t=void 0):t=void 0:(a=e,e=t=void 0):e=void 0,Wr(i)?(n=qi.call(i,"c"),o=qi.call(i,"e")):(n=!0,o=!1),c={get:e,set:t,configurable:n,enumerable:o},a?Jl(Ql(a),c):c};var w0=function(i){if(typeof i!="function")throw new TypeError(i+" is not a function");return i};(function(i,e){var t=Ua,n=w0,o=Function.prototype.apply,a=Function.prototype.call,c=Object.create,r=Object.defineProperty,f=Object.defineProperties,s=Object.prototype.hasOwnProperty,h={configurable:!0,enumerable:!1,writable:!0},l,d,S,p,y,m,R;l=function(U,I){var T;return n(I),s.call(this,"__ee__")?T=this.__ee__:(T=h.value=c(null),r(this,"__ee__",h),h.value=null),T[U]?typeof T[U]=="object"?T[U].push(I):T[U]=[T[U],I]:T[U]=I,this},d=function(U,I){var T,P;return n(I),P=this,l.call(this,U,T=function(){S.call(P,U,T),o.call(I,this,arguments)}),T.__eeOnceListener__=I,this},S=function(U,I){var T,P,b,A;if(n(I),!s.call(this,"__ee__"))return this;if(T=this.__ee__,!T[U])return this;if(P=T[U],typeof P=="object")for(A=0;b=P[A];++A)(b===I||b.__eeOnceListener__===I)&&(P.length===2?T[U]=P[A?0:1]:P.splice(A,1));else(P===I||P.__eeOnceListener__===I)&&delete T[U];return this},p=function(U){var I,T,P,b,A;if(s.call(this,"__ee__")&&(b=this.__ee__[U],!!b))if(typeof b=="object"){for(T=arguments.length,A=new Array(T-1),I=1;I<T;++I)A[I-1]=arguments[I];for(b=b.slice(),I=0;P=b[I];++I)o.call(P,this,A)}else switch(arguments.length){case 1:a.call(b,this);break;case 2:a.call(b,this,arguments[1]);break;case 3:a.call(b,this,arguments[1],arguments[2]);break;default:for(T=arguments.length,A=new Array(T-1),I=1;I<T;++I)A[I-1]=arguments[I];o.call(b,this,A)}},y={on:l,once:d,off:S,emit:p},m={on:t(l),once:t(d),off:t(S),emit:t(p)},R=f({},m),i.exports=e=function(U){return U==null?c(R):f(Object(U),m)},e.methods=y})(Yv,Jr);var Ga=P0,A0=zv,fi=Wv,M0=Jr;function P0(i){i=i||window;var e=M0(),t=[null,null],n=[null,null],o=[null,null],a=[null,null],c=0,r={},f,s,h=i===window?function(){f=window.innerWidth,s=window.innerHeight}:function(){f=i.clientWidth,s=i.clientHeight},l=0,d,S,p={},y=A0(i,function(u,g,E,L){d=g,S=E,l=u,p=L});function m(u){fi(u,i,o),h(),r.buttons=l,r.mods=p,r.x0=r.x=r.x1=2*o[0]/f-1,r.y0=r.y=r.y1=1-2*o[1]/s,r.x2=null,r.y2=null,r.dx=2*u.deltaX/f,r.dy=-2*u.deltaY/s,r.dz=2*u.deltaZ/f,r.active=1,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("wheel",r),t[0]=o[0],t[1]=o[1]}var R=null,U=null,I=0;function T(u){fi(u,i,o),I=0,h(),r.buttons=l,r.mods=p,r.x=r.x1=2*o[0]/f-1,r.y=r.y1=1-2*o[1]/s,r.x2=null,r.y2=null,r.active=I,r.x0=2*R/f-1,r.y0=1-2*U/s,r.dx=0,r.dy=0,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("mouseup",r),R=U=null,t[0]=o[0],t[1]=o[1]}function P(u){fi(u,i,o),I=1,h(),R=d,U=S,r.buttons=l,r.mods=p,r.x=r.x0=r.x1=2*o[0]/f-1,r.y=r.y0=r.y1=1-2*o[1]/s,r.x2=null,r.y2=null,r.active=I,r.dx=0,r.dy=0,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("mousedown",r),t[0]=o[0],t[1]=o[1]}function b(u){fi(u,i,o),h(),r.buttons=l,r.mods=p,r.x0=2*R/f-1,r.y0=1-2*U/s,r.x=r.x1=2*o[0]/f-1,r.y=r.y1=1-2*o[1]/s,r.x2=null,r.y2=null,r.dx=2*(o[0]-t[0])/f,r.dy=-2*(o[1]-t[1])/s,r.active=I,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("mousemove",r),t[0]=o[0],t[1]=o[1]}function A(u){for(var g=u.identifier,E=0;E<a.length;E++)if(a[E]&&a[E].touch&&a[E].touch.identifier===g)return E;return-1}function v(u){n[0]=null,n[1]=null;for(var g=0;g<u.changedTouches.length;g++){var E=u.changedTouches[g],L=E.identifier,F=A(L);if(F===-1&&c<2){var O=a[0]?1:0,G=a[0]?0:1,C={position:[0,0],touch:null};a[O]=C,c++,C.touch=E,fi(E,i,C.position),a[G]&&a[G].touch}}for(var N=0,V=0,j=0,g=0;g<a.length;g++)a[g]&&(N+=a[g].position[0],V+=a[g].position[1],j++);if(N/=j,V/=j,c>0){if(r.theta=0,j>1){var Q=a[1].position[0]-a[0].position[0],H=(a[0].position[1]-a[1].position[1])*f/s;r.theta=Math.atan2(H,Q)}h(),r.buttons=0,r.mods={},r.active=c,R=N,U=V,r.x0=2*R/f-1,r.y0=1-2*U/s,r.x=2*N/f-1,r.y=1-2*V/s,r.x1=2*a[0].position[0]/f-1,r.y1=1-2*a[0].position[1]/s,c>1&&(r.x2=2*a[1].position[0]/f-1,r.y2=1-2*a[1].position[1]/s),r.active=c,r.dx=0,r.dy=0,r.dz=0,r.zoomx=1,r.zoomy=1,r.dtheta=0,r.originalEvent=u,e.emit(c===1?"touchstart":"pinchstart",r)}}function w(u){for(var g,E=!1,L=0;L<u.changedTouches.length;L++){var F=u.changedTouches[L];g=A(F),g!==-1&&(E=!0,a[g].touch=F,fi(F,i,a[g].position))}if(E){if(c===1){for(g=0;g<a.length&&!a[g];g++);if(a[g]&&n[g]){var O=a[g].position[0],G=a[g].position[1],C=O-n[g][0],N=G-n[g][1];r.buttons=0,r.mods={},r.active=c,r.x=r.x1=2*O/f-1,r.y=r.y1=1-2*G/s,r.x2=null,r.y2=null,r.x0=2*R/f-1,r.y0=1-2*U/s,r.dx=2*C/f,r.dy=-2*N/s,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("touchmove",r)}}else if(c===2&&n[0]&&n[1]){var V=n[0],j=n[1],Q=j[0]-V[0],H=(j[1]-V[1])*f/s,q=a[0].position,J=a[1].position,oe=J[0]-q[0],K=(q[1]-J[1])*f/s,he=Math.sqrt(Q*Q+H*H)*.5,z=Math.atan2(H,Q),$=Math.sqrt(oe*oe+K*K)*.5,ne=Math.atan2(K,oe),W=(j[0]+V[0])*.5,Y=(j[1]+V[1])*.5,C=.5*(J[0]+q[0]-V[0]-j[0]),N=.5*(J[1]+q[1]-V[1]-j[1]),Z=$/he,ie=ne-z;r.buttons=0,r.mods=p,r.active=c,r.x=2*W/f-1,r.y=1-2*Y/s,r.x0=2*R/f-1,r.y0=1-2*U/s,r.x1=2*q[0]/f-1,r.y1=1-2*q[1]/s,r.x2=2*J[0]/f-1,r.y2=1-2*J[1]/s,r.dx=2*C/f,r.dy=-2*N/s,r.dz=0,r.zoomx=Z,r.zoomy=Z,r.theta=ne,r.dtheta=ie,r.originalEvent=u,e.emit("pinchmove",r)}}a[0]&&(n[0]=a[0].position.slice()),a[1]&&(n[1]=a[1].position.slice())}function D(u){for(var g,E=0;E<u.changedTouches.length;E++){var L=u.changedTouches[E],F=A(L);if(F!==-1){g=a[F],a[F]=null,c--;var O=F===0?1:0;a[O]&&a[O].touch}}var G=0,C=0;if(c===0)g&&(G=g.position[0],C=g.position[1]);else{for(var N=0,E=0;E<a.length;E++)a[E]&&(G+=a[E].position[0],C+=a[E].position[1],N++);G/=N,C/=N}c<2&&(r.buttons=0,r.mods=p,r.active=c,r.x=2*G/f-1,r.y=1-2*C/s,r.x0=2*R/f-1,r.y0=1-2*U/s,r.dx=0,r.dy=0,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit(c===0?"touchend":"pinchend",r)),c===0&&(R=U=null)}var _=!1;function M(){_||(_=!0,y.enabled=!0,i.addEventListener("wheel",m,!1),i.addEventListener("mousedown",P,!1),window.addEventListener("mousemove",b,!1),window.addEventListener("mouseup",T,!1),i.addEventListener("touchstart",v,!1),window.addEventListener("touchmove",w,!1),window.addEventListener("touchend",D,!1),window.addEventListener("touchcancel",D,!1))}function x(){_&&(_=!1,y.enabled=!1,i.removeEventListener("wheel",m,!1),i.removeEventListener("mousedown",P,!1),window.removeEventListener("mousemove",b,!1),window.removeEventListener("mouseup",T,!1),i.removeEventListener("touchstart",v,!1),window.removeEventListener("touchmove",w,!1),window.removeEventListener("touchend",D,!1),window.removeEventListener("touchcancel",D,!1))}return M(),e.enable=M,e.disable=x,e}function R0(){return new Worker("/dat-garden-visualization/assets/graph-db-worker-681e3e3d.js",{type:"module"})}function I0(){return new Worker("/dat-garden-visualization/assets/graph-layout-worker-7e84d6b4.js",{type:"module"})}const eu=new Array(128).fill(void 0);eu.push(void 0,null,!0,!1);const L0=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});L0.decode();eu.length;const la=new TextEncoder("utf-8");la.encodeInto;var tu={};(function(i){var e=en&&en.__extends||function(){var C=function(N,V){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(j,Q){j.__proto__=Q}||function(j,Q){for(var H in Q)Object.prototype.hasOwnProperty.call(Q,H)&&(j[H]=Q[H])},C(N,V)};return function(N,V){if(typeof V!="function"&&V!==null)throw new TypeError("Class extends value "+String(V)+" is not a constructor or null");C(N,V);function j(){this.constructor=N}N.prototype=V===null?Object.create(V):(j.prototype=V.prototype,new j)}}(),t=en&&en.__classPrivateFieldSet||function(C,N,V){if(!N.has(C))throw new TypeError("attempted to set private field on non-instance");return N.set(C,V),V},n=en&&en.__classPrivateFieldGet||function(C,N){if(!N.has(C))throw new TypeError("attempted to get private field on non-instance");return N.get(C)},o,a,c,r,f,s,h,l,d,S,p,y,m,R,U,I,T,P,b,A,v,w;i.__esModule=!0,i.default=void 0;var D=function(C){var N=131,V=137,j=0;C+="x";for(var Q=Math.floor(9007199254740991/V),H=0;H<C.length;H++)j>Q&&(j=Math.floor(j/V)),j=j*N+C.charCodeAt(H);return j},_="0123456789abcdef".split(""),M=[-2147483648,8388608,32768,128],x=[24,16,8,0],u=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=[],E=function(){function C(N,V){N===void 0&&(N=!1),V===void 0&&(V=!1),o.set(this,void 0),a.set(this,void 0),c.set(this,void 0),r.set(this,void 0),f.set(this,void 0),s.set(this,void 0),h.set(this,void 0),l.set(this,void 0),d.set(this,void 0),S.set(this,void 0),p.set(this,void 0),y.set(this,void 0),m.set(this,void 0),R.set(this,void 0),U.set(this,void 0),I.set(this,void 0),T.set(this,0),P.set(this,void 0),this.init(N,V)}return C.prototype.init=function(N,V){V?(g[0]=g[16]=g[1]=g[2]=g[3]=g[4]=g[5]=g[6]=g[7]=g[8]=g[9]=g[10]=g[11]=g[12]=g[13]=g[14]=g[15]=0,t(this,a,g)):t(this,a,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),N?(t(this,s,3238371032),t(this,h,914150663),t(this,l,812702999),t(this,d,4144912697),t(this,S,4290775857),t(this,p,1750603025),t(this,y,1694076839),t(this,m,3204075428)):(t(this,s,1779033703),t(this,h,3144134277),t(this,l,1013904242),t(this,d,2773480762),t(this,S,1359893119),t(this,p,2600822924),t(this,y,528734635),t(this,m,1541459225)),t(this,o,t(this,P,t(this,c,t(this,U,0)))),t(this,r,t(this,R,!1)),t(this,f,!0),t(this,I,N)},C.prototype.update=function(N){if(n(this,r))return this;var V;N instanceof ArrayBuffer?V=new Uint8Array(N):V=N;for(var j=0,Q=V.length,H=n(this,a);j<Q;){var q=void 0;if(n(this,R)&&(t(this,R,!1),H[0]=n(this,o),H[16]=H[1]=H[2]=H[3]=H[4]=H[5]=H[6]=H[7]=H[8]=H[9]=H[10]=H[11]=H[12]=H[13]=H[14]=H[15]=0),typeof V!="string")for(q=n(this,P);j<Q&&q<64;++j)H[q>>2]|=V[j]<<x[q++&3];else for(q=n(this,P);j<Q&&q<64;++j){var J=V.charCodeAt(j);J<128?H[q>>2]|=J<<x[q++&3]:J<2048?(H[q>>2]|=(192|J>>6)<<x[q++&3],H[q>>2]|=(128|J&63)<<x[q++&3]):J<55296||J>=57344?(H[q>>2]|=(224|J>>12)<<x[q++&3],H[q>>2]|=(128|J>>6&63)<<x[q++&3],H[q>>2]|=(128|J&63)<<x[q++&3]):(J=65536+((J&1023)<<10|V.charCodeAt(++j)&1023),H[q>>2]|=(240|J>>18)<<x[q++&3],H[q>>2]|=(128|J>>12&63)<<x[q++&3],H[q>>2]|=(128|J>>6&63)<<x[q++&3],H[q>>2]|=(128|J&63)<<x[q++&3])}t(this,T,q),t(this,c,n(this,c)+(q-n(this,P))),q>=64?(t(this,o,H[16]),t(this,P,q-64),this.hash(),t(this,R,!0)):t(this,P,q)}return n(this,c)>4294967295&&(t(this,U,n(this,U)+(n(this,c)/4294967296<<0)),t(this,c,n(this,c)%4294967296)),this},C.prototype.finalize=function(){if(!n(this,r)){t(this,r,!0);var N=n(this,a),V=n(this,T);N[16]=n(this,o),N[V>>2]|=M[V&3],t(this,o,N[16]),V>=56&&(n(this,R)||this.hash(),N[0]=n(this,o),N[16]=N[1]=N[2]=N[3]=N[4]=N[5]=N[6]=N[7]=N[8]=N[9]=N[10]=N[11]=N[12]=N[13]=N[14]=N[15]=0),N[14]=n(this,U)<<3|n(this,c)>>>29,N[15]=n(this,c)<<3,this.hash()}},C.prototype.hash=function(){for(var N=n(this,s),V=n(this,h),j=n(this,l),Q=n(this,d),H=n(this,S),q=n(this,p),J=n(this,y),oe=n(this,m),K=n(this,a),he,z,$,ne,W,Y,Z,ie,ce,ue,le=16;le<64;++le)ne=K[le-15],he=(ne>>>7|ne<<25)^(ne>>>18|ne<<14)^ne>>>3,ne=K[le-2],z=(ne>>>17|ne<<15)^(ne>>>19|ne<<13)^ne>>>10,K[le]=K[le-16]+he+K[le-7]+z<<0;ue=V&j;for(var k=0;k<64;k+=4)n(this,f)?(n(this,I)?(Z=300032,ne=K[0]-1413257819,oe=ne-150054599<<0,Q=ne+24177077<<0):(Z=704751109,ne=K[0]-210244248,oe=ne-1521486534<<0,Q=ne+143694565<<0),t(this,f,!1)):(he=(N>>>2|N<<30)^(N>>>13|N<<19)^(N>>>22|N<<10),z=(H>>>6|H<<26)^(H>>>11|H<<21)^(H>>>25|H<<7),Z=N&V,$=Z^N&j^ue,Y=H&q^~H&J,ne=oe+z+Y+u[k]+K[k],W=he+$,oe=Q+ne<<0,Q=ne+W<<0),he=(Q>>>2|Q<<30)^(Q>>>13|Q<<19)^(Q>>>22|Q<<10),z=(oe>>>6|oe<<26)^(oe>>>11|oe<<21)^(oe>>>25|oe<<7),ie=Q&N,$=ie^Q&V^Z,Y=oe&H^~oe&q,ne=J+z+Y+u[k+1]+K[k+1],W=he+$,J=j+ne<<0,j=ne+W<<0,he=(j>>>2|j<<30)^(j>>>13|j<<19)^(j>>>22|j<<10),z=(J>>>6|J<<26)^(J>>>11|J<<21)^(J>>>25|J<<7),ce=j&Q,$=ce^j&N^ie,Y=J&oe^~J&H,ne=q+z+Y+u[k+2]+K[k+2],W=he+$,q=V+ne<<0,V=ne+W<<0,he=(V>>>2|V<<30)^(V>>>13|V<<19)^(V>>>22|V<<10),z=(q>>>6|q<<26)^(q>>>11|q<<21)^(q>>>25|q<<7),ue=V&j,$=ue^V&Q^ce,Y=q&J^~q&oe,ne=H+z+Y+u[k+3]+K[k+3],W=he+$,H=N+ne<<0,N=ne+W<<0;t(this,s,n(this,s)+N<<0),t(this,h,n(this,h)+V<<0),t(this,l,n(this,l)+j<<0),t(this,d,n(this,d)+Q<<0),t(this,S,n(this,S)+H<<0),t(this,p,n(this,p)+q<<0),t(this,y,n(this,y)+J<<0),t(this,m,n(this,m)+oe<<0)},C.prototype.hex=function(){this.finalize();var N=n(this,s),V=n(this,h),j=n(this,l),Q=n(this,d),H=n(this,S),q=n(this,p),J=n(this,y),oe=n(this,m),K=_[N>>28&15]+_[N>>24&15]+_[N>>20&15]+_[N>>16&15]+_[N>>12&15]+_[N>>8&15]+_[N>>4&15]+_[N&15]+_[V>>28&15]+_[V>>24&15]+_[V>>20&15]+_[V>>16&15]+_[V>>12&15]+_[V>>8&15]+_[V>>4&15]+_[V&15]+_[j>>28&15]+_[j>>24&15]+_[j>>20&15]+_[j>>16&15]+_[j>>12&15]+_[j>>8&15]+_[j>>4&15]+_[j&15]+_[Q>>28&15]+_[Q>>24&15]+_[Q>>20&15]+_[Q>>16&15]+_[Q>>12&15]+_[Q>>8&15]+_[Q>>4&15]+_[Q&15]+_[H>>28&15]+_[H>>24&15]+_[H>>20&15]+_[H>>16&15]+_[H>>12&15]+_[H>>8&15]+_[H>>4&15]+_[H&15]+_[q>>28&15]+_[q>>24&15]+_[q>>20&15]+_[q>>16&15]+_[q>>12&15]+_[q>>8&15]+_[q>>4&15]+_[q&15]+_[J>>28&15]+_[J>>24&15]+_[J>>20&15]+_[J>>16&15]+_[J>>12&15]+_[J>>8&15]+_[J>>4&15]+_[J&15];return n(this,I)||(K+=_[oe>>28&15]+_[oe>>24&15]+_[oe>>20&15]+_[oe>>16&15]+_[oe>>12&15]+_[oe>>8&15]+_[oe>>4&15]+_[oe&15]),K},C.prototype.toString=function(){return this.hex()},C.prototype.digest=function(){this.finalize();var N=n(this,s),V=n(this,h),j=n(this,l),Q=n(this,d),H=n(this,S),q=n(this,p),J=n(this,y),oe=n(this,m),K=[N>>24&255,N>>16&255,N>>8&255,N&255,V>>24&255,V>>16&255,V>>8&255,V&255,j>>24&255,j>>16&255,j>>8&255,j&255,Q>>24&255,Q>>16&255,Q>>8&255,Q&255,H>>24&255,H>>16&255,H>>8&255,H&255,q>>24&255,q>>16&255,q>>8&255,q&255,J>>24&255,J>>16&255,J>>8&255,J&255];return n(this,I)||K.push(oe>>24&255,oe>>16&255,oe>>8&255,oe&255),K},C.prototype.array=function(){return this.digest()},C.prototype.arrayBuffer=function(){this.finalize();var N=new ArrayBuffer(n(this,I)?28:32),V=new DataView(N);return V.setUint32(0,n(this,s)),V.setUint32(4,n(this,h)),V.setUint32(8,n(this,l)),V.setUint32(12,n(this,d)),V.setUint32(16,n(this,S)),V.setUint32(20,n(this,p)),V.setUint32(24,n(this,y)),n(this,I)||V.setUint32(28,n(this,m)),N},C}();o=new WeakMap,a=new WeakMap,c=new WeakMap,r=new WeakMap,f=new WeakMap,s=new WeakMap,h=new WeakMap,l=new WeakMap,d=new WeakMap,S=new WeakMap,p=new WeakMap,y=new WeakMap,m=new WeakMap,R=new WeakMap,U=new WeakMap,I=new WeakMap,T=new WeakMap,P=new WeakMap,function(C){e(N,C);function N(V,j,Q){j===void 0&&(j=!1),Q===void 0&&(Q=!1);var H=C.call(this,j,Q)||this;b.set(H,void 0),A.set(H,void 0),v.set(H,void 0),w.set(H,void 0);var q;if(typeof V=="string"){for(var J=[],oe=V.length,K=0,he=0;he<oe;++he){var z=V.charCodeAt(he);z<128?J[K++]=z:z<2048?(J[K++]=192|z>>6,J[K++]=128|z&63):z<55296||z>=57344?(J[K++]=224|z>>12,J[K++]=128|z>>6&63,J[K++]=128|z&63):(z=65536+((z&1023)<<10|V.charCodeAt(++he)&1023),J[K++]=240|z>>18,J[K++]=128|z>>12&63,J[K++]=128|z>>6&63,J[K++]=128|z&63)}q=J}else V instanceof ArrayBuffer?q=new Uint8Array(V):q=V;q.length>64&&(q=new E(j,!0).update(q).array());for(var $=[],ne=[],he=0;he<64;++he){var W=q[he]||0;$[he]=92^W,ne[he]=54^W}return H.update(ne),t(H,v,$),t(H,b,!0),t(H,A,j),t(H,w,Q),H}return N.prototype.finalize=function(){if(C.prototype.finalize.call(this),n(this,b)){t(this,b,!1);var V=this.array();C.prototype.init.call(this,n(this,A),n(this,w)),this.update(n(this,v)),this.update(V),C.prototype.finalize.call(this)}},N}(E),b=new WeakMap,A=new WeakMap,v=new WeakMap,w=new WeakMap;function L(C){var N=new E;return N.update(C),parseInt(N.hex().substring(0,8),16)}var F=function(C){var N="#";return C.forEach(function(V){V<16&&(N+=0),N+=V.toString(16)}),N},O=function(C,N,V){C/=360;var j=V<.5?V*(1+N):V+N-V*N,Q=2*V-j;return[C+1/3,C,C-1/3].map(function(H){return H<0&&H++,H>1&&H--,H<1/6?H=Q+(j-Q)*6*H:H<.5?H=j:H<2/3?H=Q+(j-Q)*6*(2/3-H):H=Q,Math.round(H*255)})},G=function(){function C(N){N===void 0&&(N={});var V=[N.lightness,N.saturation].map(function(H){return H=H!==void 0?H:[.35,.5,.65],Array.isArray(H)?H.concat():[H]}),j=V[0],Q=V[1];this.L=j,this.S=Q,typeof N.hue=="number"&&(N.hue={min:N.hue,max:N.hue}),typeof N.hue=="object"&&!Array.isArray(N.hue)&&(N.hue=[N.hue]),typeof N.hue>"u"&&(N.hue=[]),this.hueRanges=N.hue.map(function(H){return{min:typeof H.min>"u"?0:H.min,max:typeof H.max>"u"?360:H.max}}),this.hash=L,typeof N.hash=="function"&&(this.hash=N.hash),N.hash==="bkdr"&&(this.hash=D)}return C.prototype.hsl=function(N){var V,j,Q,H=this.hash(N),q=727;if(this.hueRanges.length){var J=this.hueRanges[H%this.hueRanges.length];V=H/this.hueRanges.length%q*(J.max-J.min)/q+J.min}else V=H%359;return H=Math.ceil(H/360),j=this.S[H%this.S.length],H=Math.ceil(H/this.S.length),Q=this.L[H%this.L.length],[V,j,Q]},C.prototype.rgb=function(N){var V=this.hsl(N);return O.apply(this,V)},C.prototype.hex=function(N){var V=this.rgb(N);return F(V)},C}();i.default=G})(tu);const C0=Cu(tu),O0=new C0({saturation:.7,lightness:.6}),N0=async()=>{const i="https://dat-ecosystem.org/dat-garden-rake/",e=await fetch(`${i}index.json`).then(c=>c.json()),t=`${i}${e.latest}`,[n,o,a]=await Promise.all([fetch(t+"/../valuenetwork.json").then(c=>c.json()),fetch(t+"/../projects.json").then(c=>c.json()),fetch(t+"/../organizations.json").then(c=>c.json())]);return{valueNetworkData:n,projectsData:o,organizationsData:a}},nu=$e.promise(N0),iu=ro(new R0),ru=ro(new I0),D0=i=>Math.max(4*Math.log(2*(i?.length||1)**1.2),2),F0=i=>i.replace(/^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z0-9-]+/i,"").replace(/\/$/,"").replace(/^\//,"").replace(/[^A-Za-z0-9\.]/gi,"-").replace(/-+/g,"-").replace(/^package-/,"").replace(/-v-/,"-"),sn=$e.promise(async()=>{const{valueNetworkData:i,projectsData:e,organizationsData:t}=await nu(),n=Object.entries(i).map(([s,{dependents:h,owner:l,dependencies:d}],S)=>({index:S,project:s,id:s,data:e[s],navId:F0(s),owner:l,ownerData:t[l],color:[...O0.rgb(l||s||String(S)).map(p=>p/255),1],size:D0(h),dependents:h,dependencies:d}));Kn(n.map(s=>[s.index,s]));const o=Kn(n.map(s=>[s.project,s])),a=Kn(n.map(s=>[s.data.name,s])),c=Kn(n.map(s=>[s.navId,s]));let r=Object.entries(i).flatMap(([s,{dependents:h,dependencies:l}])=>(h||[]).map(d=>({source:d,sourceNode:o[d],sourceIndex:n.find(S=>S.project===d).index,target:s,targetNode:o[s],targetIndex:n.find(S=>S.project===s).index})).concat((l||[]).map(d=>({source:s,sourceNode:o[s],sourceIndex:n.find(S=>S.project===s).index,target:d,targetNode:o[d],targetIndex:n.find(S=>S.project===d).index})))).filter(s=>s);r=Cd(r,(s,h)=>s.sourceIndex===h.sourceIndex&&s.targetIndex===h.targetIndex);const f=r.map(({sourceIndex:s,targetIndex:h})=>[s,h]);return Kn(f.map(([s,h],l)=>[`${s}-${h}`,l])),Kn(f.map(([s,h],l)=>[`${s}-${h}`,r[l]])),{nodes:n,links:r,linkIndexPairs:f,nodesByNavId:c,nodesByProject:o,nodesByProjectName:a}}),U0=async()=>{const i=await nu();return await iu.buildGraph(i)};let ou;const Uc=()=>ou,G0=async(i,e=ru.useD3ForceSimulator)=>await e(i,Ji(t=>{an().target.setFromArray(t),ou=t})),au=i=>{const e=Uc()?Uc():[],t=i.index;return[e[t*3],e[t*3+1],e[t*3+2]]},B0=async i=>await G0(i||await prepareVisualizerData(),ru.useD3ForceSimulator),{doQuery:Gc,buildGraph:ax}=iu;function V0(){return new Worker("/dat-garden-visualization/assets/animation-worker-e030092e.js",{type:"module"})}var ua;const Qr=window,Ai=Qr.trustedTypes,Bc=Ai?Ai.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ba="$lit$",yn=`lit$${(Math.random()+"").slice(9)}$`,su="?"+yn,z0=`<${su}>`,Mi=document,nr=()=>Mi.createComment(""),ir=i=>i===null||typeof i!="object"&&typeof i!="function",cu=Array.isArray,k0=i=>cu(i)||typeof i?.[Symbol.iterator]=="function",fa=`[ 	
\f\r]`,Hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vc=/-->/g,zc=/>/g,Cn=RegExp(`>|${fa}(?:([^\\s"'>=/]+)(${fa}*=${fa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kc=/'/g,Hc=/"/g,lu=/^(?:script|style|textarea|title)$/i,H0=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),Qt=H0(1),rr=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),Wc=new WeakMap,vi=Mi.createTreeWalker(Mi,129,null,!1),W0=(i,e)=>{const t=i.length-1,n=[];let o,a=e===2?"<svg>":"",c=Hi;for(let f=0;f<t;f++){const s=i[f];let h,l,d=-1,S=0;for(;S<s.length&&(c.lastIndex=S,l=c.exec(s),l!==null);)S=c.lastIndex,c===Hi?l[1]==="!--"?c=Vc:l[1]!==void 0?c=zc:l[2]!==void 0?(lu.test(l[2])&&(o=RegExp("</"+l[2],"g")),c=Cn):l[3]!==void 0&&(c=Cn):c===Cn?l[0]===">"?(c=o??Hi,d=-1):l[1]===void 0?d=-2:(d=c.lastIndex-l[2].length,h=l[1],c=l[3]===void 0?Cn:l[3]==='"'?Hc:kc):c===Hc||c===kc?c=Cn:c===Vc||c===zc?c=Hi:(c=Cn,o=void 0);const p=c===Cn&&i[f+1].startsWith("/>")?" ":"";a+=c===Hi?s+z0:d>=0?(n.push(h),s.slice(0,d)+Ba+s.slice(d)+yn+p):s+yn+(d===-2?(n.push(void 0),f):p)}const r=a+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Bc!==void 0?Bc.createHTML(r):r,n]};class or{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,c=0;const r=e.length-1,f=this.parts,[s,h]=W0(e,t);if(this.el=or.createElement(s,n),vi.currentNode=this.el.content,t===2){const l=this.el.content,d=l.firstChild;d.remove(),l.append(...d.childNodes)}for(;(o=vi.nextNode())!==null&&f.length<r;){if(o.nodeType===1){if(o.hasAttributes()){const l=[];for(const d of o.getAttributeNames())if(d.endsWith(Ba)||d.startsWith(yn)){const S=h[c++];if(l.push(d),S!==void 0){const p=o.getAttribute(S.toLowerCase()+Ba).split(yn),y=/([.?@])?(.*)/.exec(S);f.push({type:1,index:a,name:y[2],strings:p,ctor:y[1]==="."?j0:y[1]==="?"?$0:y[1]==="@"?q0:fo})}else f.push({type:6,index:a})}for(const d of l)o.removeAttribute(d)}if(lu.test(o.tagName)){const l=o.textContent.split(yn),d=l.length-1;if(d>0){o.textContent=Ai?Ai.emptyScript:"";for(let S=0;S<d;S++)o.append(l[S],nr()),vi.nextNode(),f.push({type:2,index:++a});o.append(l[d],nr())}}}else if(o.nodeType===8)if(o.data===su)f.push({type:2,index:a});else{let l=-1;for(;(l=o.data.indexOf(yn,l+1))!==-1;)f.push({type:7,index:a}),l+=yn.length-1}a++}}static createElement(e,t){const n=Mi.createElement("template");return n.innerHTML=e,n}}function Pi(i,e,t=i,n){var o,a,c,r;if(e===rr)return e;let f=n!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[n]:t._$Cl;const s=ir(e)?void 0:e._$litDirective$;return f?.constructor!==s&&((a=f?._$AO)===null||a===void 0||a.call(f,!1),s===void 0?f=void 0:(f=new s(i),f._$AT(i,t,n)),n!==void 0?((c=(r=t)._$Co)!==null&&c!==void 0?c:r._$Co=[])[n]=f:t._$Cl=f),f!==void 0&&(e=Pi(i,f._$AS(i,e.values),f,n)),e}let X0=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:o}=this._$AD,a=((t=e?.creationScope)!==null&&t!==void 0?t:Mi).importNode(n,!0);vi.currentNode=a;let c=vi.nextNode(),r=0,f=0,s=o[0];for(;s!==void 0;){if(r===s.index){let h;s.type===2?h=new as(c,c.nextSibling,this,e):s.type===1?h=new s.ctor(c,s.name,s.strings,this,e):s.type===6&&(h=new K0(c,this,e)),this._$AV.push(h),s=o[++f]}r!==s?.index&&(c=vi.nextNode(),r++)}return a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},as=class uu{constructor(e,t,n,o){var a;this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cp=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pi(this,e,t),ir(e)?e===at||e==null||e===""?(this._$AH!==at&&this._$AR(),this._$AH=at):e!==this._$AH&&e!==rr&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):k0(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==at&&ir(this._$AH)?this._$AA.nextSibling.data=e:this.$(Mi.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=or.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const c=new X0(a,this),r=c.u(this.options);c.v(n),this.$(r),this._$AH=c}}_$AC(e){let t=Wc.get(e.strings);return t===void 0&&Wc.set(e.strings,t=new or(e)),t}T(e){cu(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new uu(this.k(nr()),this.k(nr()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}};class fo{constructor(e,t,n,o,a){this.type=1,this._$AH=at,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=at}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){const a=this.strings;let c=!1;if(a===void 0)e=Pi(this,e,t,0),c=!ir(e)||e!==this._$AH&&e!==rr,c&&(this._$AH=e);else{const r=e;let f,s;for(e=a[0],f=0;f<a.length-1;f++)s=Pi(this,r[n+f],t,f),s===rr&&(s=this._$AH[f]),c||(c=!ir(s)||s!==this._$AH[f]),s===at?e=at:e!==at&&(e+=(s??"")+a[f+1]),this._$AH[f]=s}c&&!o&&this.j(e)}j(e){e===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let j0=class extends fo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===at?void 0:e}};const Y0=Ai?Ai.emptyScript:"";let $0=class extends fo{constructor(){super(...arguments),this.type=4}j(e){e&&e!==at?this.element.setAttribute(this.name,Y0):this.element.removeAttribute(this.name)}},q0=class extends fo{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Pi(this,e,t,0))!==null&&n!==void 0?n:at)===rr)return;const o=this._$AH,a=e===at&&o!==at||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,c=e!==at&&(o===at||a);a&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}};class K0{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Pi(this,e)}}const Xc=Qr.litHtmlPolyfillSupport;Xc?.(or,as),((ua=Qr.litHtmlVersions)!==null&&ua!==void 0?ua:Qr.litHtmlVersions=[]).push("2.7.1");const Va=(i,e,t)=>{var n,o;const a=(n=t?.renderBefore)!==null&&n!==void 0?n:e;let c=a._$litPart$;if(c===void 0){const r=(o=t?.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=c=new as(e.insertBefore(nr(),r),r,void 0,t??{})}return c._$AI(i),c},Z0=i=>`
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent WHERE {
    ?dependent dependson: <${i}> .
  }`,J0=i=>`
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependency WHERE {
    <${i}> dependson: ?dependency .
  }`;var za;function Br(i,e,t){return Math.min(Math.max(i||0,e),t)}function da(i){return{r:Br(i.r,0,255),g:Br(i.g,0,255),b:Br(i.b,0,255),a:Br(i.a,0,1)}}function ka(i){return{r:255*i.r,g:255*i.g,b:255*i.b,a:i.a}}function Ha(i){return{r:i.r/255,g:i.g/255,b:i.b/255,a:i.a}}function jc(i,e){e===void 0&&(e=0);var t=Math.pow(10,e);return{r:Math.round(i.r*t)/t,g:Math.round(i.g*t)/t,b:Math.round(i.b*t)/t,a:i.a}}function ha(i,e,t,n,o,a){return(1-e/t)*n+e/t*Math.round((1-i)*o+i*a)}function Q0(i,e,t,n,o){o===void 0&&(o={unitInput:!1,unitOutput:!1,roundOutput:!0}),o.unitInput&&(i=ka(i),e=ka(e)),i=da(i);var a=(e=da(e)).a+i.a-e.a*i.a,c=t(i,e,n),r=da({r:ha(i.a,e.a,a,i.r,e.r,c.r),g:ha(i.a,e.a,a,i.g,e.g,c.g),b:ha(i.a,e.a,a,i.b,e.b,c.b),a});return o.unitOutput?Ha(r):o.roundOutput?jc(r):jc(r,9)}function ey(i,e,t){return ka(t(Ha(i),Ha(e)))}function Wa(i){return .3*i.r+.59*i.g+.11*i.b}function ty(i,e){var t=e-Wa(i);return function(n){var o=Wa(n),a=n.r,c=n.g,r=n.b,f=Math.min(a,c,r),s=Math.max(a,c,r);function h(d){return o+(d-o)*o/(o-f)}function l(d){return o+(d-o)*(1-o)/(s-o)}return f<0&&(a=h(a),c=h(c),r=h(r)),s>1&&(a=l(a),c=l(c),r=l(r)),{r:a,g:c,b:r}}({r:i.r+t,g:i.g+t,b:i.b+t})}function ny(i){return Math.max(i.r,i.g,i.b)-Math.min(i.r,i.g,i.b)}function iy(i,e){var t=["r","g","b"].sort(function(r,f){return i[r]-i[f]}),n=t[0],o=t[1],a=t[2],c={r:i.r,g:i.g,b:i.b};return c[a]>c[n]?(c[o]=(c[o]-c[n])*e/(c[a]-c[n]),c[a]=e):c[o]=c[a]=0,c[n]=0,c}function ry(i,e){return ty(iy(e,ny(i)),Wa(i))}za=function(i,e){return Q0(i,e,ey,ry,{unitInput:!0,unitOutput:!0})};var oy={grad:.9,turn:360,rad:360/(2*Math.PI)},Zt=function(i){return typeof i=="string"?i.length>0:typeof i=="number"},ot=function(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*i)/t+0},Pt=function(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),i>t?t:i>e?i:e},fu=function(i){return(i=isFinite(i)?i%360:0)>0?i:i+360},Yc=function(i){return{r:Pt(i.r,0,255),g:Pt(i.g,0,255),b:Pt(i.b,0,255),a:Pt(i.a)}},pa=function(i){return{r:ot(i.r),g:ot(i.g),b:ot(i.b),a:ot(i.a,3)}},ay=/^#([0-9a-f]{3,8})$/i,Vr=function(i){var e=i.toString(16);return e.length<2?"0"+e:e},du=function(i){var e=i.r,t=i.g,n=i.b,o=i.a,a=Math.max(e,t,n),c=a-Math.min(e,t,n),r=c?a===e?(t-n)/c:a===t?2+(n-e)/c:4+(e-t)/c:0;return{h:60*(r<0?r+6:r),s:a?c/a*100:0,v:a/255*100,a:o}},hu=function(i){var e=i.h,t=i.s,n=i.v,o=i.a;e=e/360*6,t/=100,n/=100;var a=Math.floor(e),c=n*(1-t),r=n*(1-(e-a)*t),f=n*(1-(1-e+a)*t),s=a%6;return{r:255*[n,r,c,c,f,n][s],g:255*[f,n,n,r,c,c][s],b:255*[c,c,f,n,n,r][s],a:o}},$c=function(i){return{h:fu(i.h),s:Pt(i.s,0,100),l:Pt(i.l,0,100),a:Pt(i.a)}},qc=function(i){return{h:ot(i.h),s:ot(i.s),l:ot(i.l),a:ot(i.a,3)}},Kc=function(i){return hu((t=(e=i).s,{h:e.h,s:(t*=((n=e.l)<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}));var e,t,n},Ki=function(i){return{h:(e=du(i)).h,s:(o=(200-(t=e.s))*(n=e.v)/100)>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:e.a};var e,t,n,o},sy=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,cy=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ly=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,uy=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Xa={string:[[function(i){var e=ay.exec(i);return e?(i=e[1]).length<=4?{r:parseInt(i[0]+i[0],16),g:parseInt(i[1]+i[1],16),b:parseInt(i[2]+i[2],16),a:i.length===4?ot(parseInt(i[3]+i[3],16)/255,2):1}:i.length===6||i.length===8?{r:parseInt(i.substr(0,2),16),g:parseInt(i.substr(2,2),16),b:parseInt(i.substr(4,2),16),a:i.length===8?ot(parseInt(i.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(i){var e=ly.exec(i)||uy.exec(i);return e?e[2]!==e[4]||e[4]!==e[6]?null:Yc({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(i){var e=sy.exec(i)||cy.exec(i);if(!e)return null;var t,n,o=$c({h:(t=e[1],n=e[2],n===void 0&&(n="deg"),Number(t)*(oy[n]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return Kc(o)},"hsl"]],object:[[function(i){var e=i.r,t=i.g,n=i.b,o=i.a,a=o===void 0?1:o;return Zt(e)&&Zt(t)&&Zt(n)?Yc({r:Number(e),g:Number(t),b:Number(n),a:Number(a)}):null},"rgb"],[function(i){var e=i.h,t=i.s,n=i.l,o=i.a,a=o===void 0?1:o;if(!Zt(e)||!Zt(t)||!Zt(n))return null;var c=$c({h:Number(e),s:Number(t),l:Number(n),a:Number(a)});return Kc(c)},"hsl"],[function(i){var e=i.h,t=i.s,n=i.v,o=i.a,a=o===void 0?1:o;if(!Zt(e)||!Zt(t)||!Zt(n))return null;var c=function(r){return{h:fu(r.h),s:Pt(r.s,0,100),v:Pt(r.v,0,100),a:Pt(r.a)}}({h:Number(e),s:Number(t),v:Number(n),a:Number(a)});return hu(c)},"hsv"]]},Zc=function(i,e){for(var t=0;t<e.length;t++){var n=e[t][0](i);if(n)return[n,e[t][1]]}return[null,void 0]},fy=function(i){return typeof i=="string"?Zc(i.trim(),Xa.string):typeof i=="object"&&i!==null?Zc(i,Xa.object):[null,void 0]},ma=function(i,e){var t=Ki(i);return{h:t.h,s:Pt(t.s+100*e,0,100),l:t.l,a:t.a}},ga=function(i){return(299*i.r+587*i.g+114*i.b)/1e3/255},Jc=function(i,e){var t=Ki(i);return{h:t.h,s:t.s,l:Pt(t.l+100*e,0,100),a:t.a}},ja=function(){function i(e){this.parsed=fy(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return i.prototype.isValid=function(){return this.parsed!==null},i.prototype.brightness=function(){return ot(ga(this.rgba),2)},i.prototype.isDark=function(){return ga(this.rgba)<.5},i.prototype.isLight=function(){return ga(this.rgba)>=.5},i.prototype.toHex=function(){return e=pa(this.rgba),t=e.r,n=e.g,o=e.b,c=(a=e.a)<1?Vr(ot(255*a)):"","#"+Vr(t)+Vr(n)+Vr(o)+c;var e,t,n,o,a,c},i.prototype.toRgb=function(){return pa(this.rgba)},i.prototype.toRgbString=function(){return e=pa(this.rgba),t=e.r,n=e.g,o=e.b,(a=e.a)<1?"rgba("+t+", "+n+", "+o+", "+a+")":"rgb("+t+", "+n+", "+o+")";var e,t,n,o,a},i.prototype.toHsl=function(){return qc(Ki(this.rgba))},i.prototype.toHslString=function(){return e=qc(Ki(this.rgba)),t=e.h,n=e.s,o=e.l,(a=e.a)<1?"hsla("+t+", "+n+"%, "+o+"%, "+a+")":"hsl("+t+", "+n+"%, "+o+"%)";var e,t,n,o,a},i.prototype.toHsv=function(){return e=du(this.rgba),{h:ot(e.h),s:ot(e.s),v:ot(e.v),a:ot(e.a,3)};var e},i.prototype.invert=function(){return Vt({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},i.prototype.saturate=function(e){return e===void 0&&(e=.1),Vt(ma(this.rgba,e))},i.prototype.desaturate=function(e){return e===void 0&&(e=.1),Vt(ma(this.rgba,-e))},i.prototype.grayscale=function(){return Vt(ma(this.rgba,-1))},i.prototype.lighten=function(e){return e===void 0&&(e=.1),Vt(Jc(this.rgba,e))},i.prototype.darken=function(e){return e===void 0&&(e=.1),Vt(Jc(this.rgba,-e))},i.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},i.prototype.alpha=function(e){return typeof e=="number"?Vt({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):ot(this.rgba.a,3);var t},i.prototype.hue=function(e){var t=Ki(this.rgba);return typeof e=="number"?Vt({h:e,s:t.s,l:t.l,a:t.a}):ot(t.h)},i.prototype.isEqual=function(e){return this.toHex()===Vt(e).toHex()},i}(),Vt=function(i){return i instanceof ja?i:new ja(i)},Qc=[],dy=function(i){i.forEach(function(e){Qc.indexOf(e)<0&&(e(ja,Xa),Qc.push(e))})};function hy(i,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var o in t)n[t[o]]=o;var a={};i.prototype.toName=function(c){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var r,f,s=n[this.toHex()];if(s)return s;if(c?.closest){var h=this.toRgb(),l=1/0,d="black";if(!a.length)for(var S in t)a[S]=new i(t[S]).toRgb();for(var p in t){var y=(r=h,f=a[p],Math.pow(r.r-f.r,2)+Math.pow(r.g-f.g,2)+Math.pow(r.b-f.b,2));y<l&&(l=y,d=p)}return d}},e.string.push([function(c){var r=c.toLowerCase(),f=r==="transparent"?"#0000":t[r];return f?new i(f).toRgb():null},"name"])}const pu=({color:i})=>i,py=$e.infinite(async(i=Tn)=>{const{nodes:e,links:t}=await sn();return new Float32Array(e.map(pu).flatMap(i))}),mu=({size:i})=>Math.sqrt(i)/40,my=$e.infinite(async(i=Tn)=>{const{nodes:e,links:t}=await sn();return new Float32Array(e.map(mu).map(i))}),gu=async({colorMap:i=Tn,sizeMap:e=Tn,immediate:t=!1}={})=>{const n=await py(i),o=await my(e),a=st(),c=Ht(),r=Wt();a.target.setFromArray(n),c.target.setFromArray(o),r.target.setFromArray(new Float32Array(o.length).fill(0)),t&&(a.current.setFromArray(n),c.current.setFromArray(o),r.current.setFromArray(new Float32Array(o.length).fill(0)))},_a=async(i,{colorMap:e=Tn,sizeMap:t=Tn,emphasis:n=0,immediate:o=!1}={})=>{const a=new Float32Array(e(pu(i))),c=new Float32Array([t(mu(i))]),r=new Float32Array([n]),f=st(),s=Ht(),h=Wt();f.target.setAtIndex1D(i.index,a),s.target.setAtIndex1D(i.index,c),h.target.setAtIndex1D(i.index,r),o&&(f.current.setAtIndex1D(i.index,a),s.current.setAtIndex1D(i.index,c),h.current.setAtIndex1D(i.index,r))},gy={colorMap:i=>{const e=i.slice(0,3).reduce((t,n)=>t+n,0)/3;return[...i.slice(0,3).map(t=>e),.5]},sizeMap:i=>i*.5},_u=async(i=!1)=>{await gu({...gy,immediate:i})},el="this.parentNode.style.display='none'",tl="this.parentNode.style.display='initial'",_y=i=>Qt`
  <div class="project">
    <h3><a target="_blank" href="${i.data?.homepage}">${i.data.name}</a></h3>
    <div class="description">${i.data.description}</div>
    <div class="links">
      <span class="owner">
        <div class="owner-name-container">
          ${i.ownerData.html_url?Qt`<a target="_blank" href="${i.ownerData.html_url}">${i.ownerData.name}</a>`:Qt`<span>${i.ownerData.name}</span>`}
        </div>
        <div class="avatar-container">
          <img class="avatar-stroke" src="${i.ownerData?.avatar_url}" onerror=${el} onload=${tl} alt="">
          <img class="avatar" src="${i.ownerData?.avatar_url}" onerror=${el} onload=${tl} alt="${i.ownerData?.name}">
        </div>
      </span>
      <span><a target="_blank" href="${i.project}">NPM</a></span>
      ${i.data?.repository?Qt`<span><a target="_blank" href="${i.data.repository}">Git</a></span>`:Qt``}
      ${i.data?.bugs?Qt`<span><a target="_blank" href="${i.data.bugs}">Issues</a></span>`:Qt``}
      <!-- <a href="${i.ownerData.html_url}">Owner Profile</a> -->
    </div>
  </div>

`,vy=Sl(i=>{const e=document.getElementById("selection-info");if(i){const t=_y(i);Va(t,e)}else Va(Qt``,e)},0),vu=async(i,e=!0)=>{if(i){Ya(i.index);const t=au(i),n=Z0(i.project),o=J0(i.project),{nodesByProject:a,links:c}=await sn(),r=({sizeMap:f=Tn,emphasis:s=1,colorMap:h=Tn})=>(l,d)=>{d(["dependent","dependency"]).then(({dependent:S,dependency:p})=>{_a(a[S?.value||i.project],{sizeMap:f,emphasis:s,colorMap:h}),_a(a[p?.value||i.project],{sizeMap:f,emphasis:s,colorMap:h})})};_u().then(()=>{Gc(n,Ji(r({sizeMap:f=>f*2,colorMap:f=>{const s={r:f[0],g:f[1],b:f[2],a:f[3]},h={r:57/255,g:179/255,b:83/255,a:.8},l=za(s,h);return[l.r,l.g,l.b,l.a]}}))),_a(i,{sizeMap:f=>f*4,emphasis:1}),Gc(o,Ji(r({sizeMap:f=>f*2,colorMap:f=>{const s={r:f[0],g:f[1],b:f[2],a:f[3]},h={r:0,g:102/255,b:209/255,a:.8},l=za(s,h);return[l.r,l.g,l.b,l.a]}}))),e&&il(t),e&&rl(bu||75)})}else e&&rl(Tu||1500),e&&il([0,0,0],4e3),gu(),Ya(-1);vy(i)},yy=()=>{vu(null)};window.initializeSelectionVisuals=_u;let yu=-1;const rn=()=>yu,Ya=i=>{yu=i},xy=async()=>{const i=rn(),{nodes:e}=await sn();return e[i]};dy([hy]);const ho=()=>{const i=document.documentElement,e=Vt(getComputedStyle(i).getPropertyValue("--selected-color")).toRgb();return new Float32Array([e.r/255,e.g/255,e.b/255,1])};var yi={},by=(i,e)=>{yi[i]??(yi[i]=[]),yi[i].push(e)},Ty=(i,e)=>{var t;(t=yi[i])==null||t.splice(yi[i].indexOf(e),1)},nl=async(i,e,t)=>{for(const n of yi[i]??[])await n(e,t)},va=i=>i.length>1&&i.endsWith("/")?i.slice(0,-1):i,Sy=i=>{var e;const t=(e=i.match(/(:[^/]+)/g))==null?void 0:e.map(n=>n.substring(1));return t&&{keys:t,regExp:new RegExp("^"+i.replace(/(:[^/]+)/g,"([^/]+)")+"$")}},Ey=(i,e)=>Object.fromEntries(e.map((t,n)=>[t,i[n+1]])),xu=[],hi,wy=i=>{for(const e of xu){const{pattern:t,regExp:n,keys:o}=e,a=n?i.match(n):t==="*"||t===i;if(a){const c=Array.isArray(a)?Ey(a,o):void 0;return{definition:e,params:c}}}},Wi=async(i,e)=>{const t=wy(i),n=!!t,o=t?.params??{},a=hi;hi={path:i,params:o,matches:n,trigger:e},await nl("before-route",hi,a),await t?.definition.action(o,hi,a),await nl("route",hi,a)},po={get currentRoute(){return hi},on:by,off:Ty,start({handleInitial:i=!0}={}){const e=window.location.hash!=""&&window.location.hash;i&&Wi(e||window.location.pathname||"/","init"),window.addEventListener("popstate",()=>Wi(window.location.pathname,"popstate")),window.addEventListener("hashchange",()=>{Wi(window.location.hash,"hashchange")})},route(i,e){const t=va(i),{regExp:n,keys:o=[]}=Sy(i)||{};xu.push({pattern:t,action:e,regExp:n,keys:o})},push(i){window.history.pushState(null,"",va(i)),Wi(i,"push")},replace(i){window.history.replaceState(null,"",va(i)),Wi(i,"replace")}};po.route("#-",()=>{yy()});po.route("#project/:id",async(i,{trigger:e})=>{const{nodesByNavId:t}=await sn(),n=t[i.id];vu(n,e!=="init")});var Ay=`#version 300 es
precision highp float;
precision highp int;

in vec3 vertexPosition;
in vec3 vertexNormal;
in int index;

uniform cameras {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

uniform sampler2D viewMatrixTexture;

struct CameraMatrices {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

struct NodeGeometryBundle {
  vec3 globalNDC;
  vec4 globalClipPosition;
  vec4 orthoFixedClipPosition;
  vec4 orthoZoomedClipPosition;
  vec4 orthographicClipPosition;
};

NodeGeometryBundle nodeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  float scale,
  in CameraMatrices cam
) {
  vec4 globalClipPosition = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec3 globalNDC = globalClipPosition.xyz / globalClipPosition.w;

  vec4 orthoFixedClipPosition = cam.orthoFixedProjection * cam.orthoFixedView * vec4(vertexPosition*scale, 1.0);
  vec3 orthoFixedNDC = orthoFixedClipPosition.xyz / orthoFixedClipPosition.w;
  
  vec4 orthoZoomedClipPosition = cam.orthoZoomedProjection * cam.orthoZoomedView * vec4(vertexPosition*scale, 1.0)*0.5;
  vec3 orthoZoomedNDC = orthoZoomedClipPosition.xyz / orthoZoomedClipPosition.w;

  vec3 localNDC = mix(orthoZoomedNDC, orthoFixedNDC, 0.5);

  
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.2 );
  
  vec4 orthographicClipPosition = vec4(orthographicNDC * globalClipPosition.w, globalClipPosition.w);
  
  return NodeGeometryBundle(
    globalNDC,
    globalClipPosition,
    orthoFixedClipPosition,
    orthoZoomedClipPosition,
    orthographicClipPosition
  );
}

ivec2 getTextureIndex(int index, ivec2 textureDimensions) {
  int textureLength = textureDimensions.x * textureDimensions.y;
  

  
  int x = index % textureDimensions.x;
  int y = index / textureDimensions.x;

  return ivec2(x,y);
}

uniform vec2 mousePosition;

uniform int selectedIndex;
uniform vec4 selectedColor;

uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform sampler2D sizeTexture;
uniform sampler2D emphasisTexture;
uniform ivec2 textureDimensions;

#ifdef PICKER
  flat out vec4 color;
#else
  out vec4 color;
#endif

out vec3 position;
out vec3 normal;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  int id = int(index);
  
  vec3 nodePosition = texelFetch(positionTexture, getTextureIndex(id, textureDimensions), 0).xyz;
  vec4 nodeColor = texelFetch(colorTexture, getTextureIndex(id, textureDimensions), 0);
  float nodeSize = texelFetch(sizeTexture, getTextureIndex(id, textureDimensions), 0).r;
  float nodeEmphasis = texelFetch(emphasisTexture, getTextureIndex(id, textureDimensions), 0).r;

  float scale = nodeSize;
  float isSelected = float(index == selectedIndex);
  scale *= mix(1.0, 1.1, isSelected);
  
  #ifdef PICKER
    scale = max(scale, 0.05);
  #endif

  mat4 viewFromTexture = mat4(
    texelFetch(viewMatrixTexture, ivec2(0, 0), 0),
    texelFetch(viewMatrixTexture, ivec2(1, 0), 0),
    texelFetch(viewMatrixTexture, ivec2(0, 1), 0),
    texelFetch(viewMatrixTexture, ivec2(1, 1), 0)
  );

  NodeGeometryBundle geo = nodeGeometry(
    nodePosition,
    vertexPosition,
    scale,
    CameraMatrices(
      projection,
      viewFromTexture,
      orthoFixedProjection,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );
  
  
  float distance = length(geo.globalNDC.xy - mousePosition);
  float nearness = bump(distance, 2.0, 1.0);

  vec4 clipPosition = geo.orthographicClipPosition;
  
  #ifdef PICKER
    color = instanceIdToColor();
  #else
    color = mix(nodeColor, selectedColor*1.4, float(index == selectedIndex));
  #endif

  normal = mat3(orthoFixedView) * vertexNormal;
  gl_Position = clipPosition;
}`,My=`#version 300 es
precision highp float;
in vec4 color;
in vec3 normal;

in vec3 position;
out vec4 fragColor;

void main() {
  
  
  const vec3 lightDirection = normalize(vec3(0.0, 0.0, 1.0));
  float light = dot(normal, lightDirection);
  fragColor = vec4(color.xyz*light, color.a);
  
  
  
}`,Py=`#version 300 es
precision lowp float;

vec4 instanceIdToColor() {
  int instanceId = gl_InstanceID+1;
  float r = float(instanceId & 0x0000FF) / 255.0;
  float g = float((instanceId & 0x00FF00) >> 8) / 255.0;
  float b = float((instanceId & 0xFF0000) >> 16) / 255.0;

  return vec4(r, g, b, 1.0);
}

#define PICKER
in vec3 vertexPosition;
in vec3 vertexNormal;
in int index;

uniform cameras {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

uniform sampler2D viewMatrixTexture;

struct CameraMatrices {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

struct NodeGeometryBundle {
  vec3 globalNDC;
  vec4 globalClipPosition;
  vec4 orthoFixedClipPosition;
  vec4 orthoZoomedClipPosition;
  vec4 orthographicClipPosition;
};

NodeGeometryBundle nodeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  float scale,
  in CameraMatrices cam
) {
  vec4 globalClipPosition = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec3 globalNDC = globalClipPosition.xyz / globalClipPosition.w;

  vec4 orthoFixedClipPosition = cam.orthoFixedProjection * cam.orthoFixedView * vec4(vertexPosition*scale, 1.0);
  vec3 orthoFixedNDC = orthoFixedClipPosition.xyz / orthoFixedClipPosition.w;
  
  vec4 orthoZoomedClipPosition = cam.orthoZoomedProjection * cam.orthoZoomedView * vec4(vertexPosition*scale, 1.0)*0.5;
  vec3 orthoZoomedNDC = orthoZoomedClipPosition.xyz / orthoZoomedClipPosition.w;

  vec3 localNDC = mix(orthoZoomedNDC, orthoFixedNDC, 0.5);

  
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.2 );
  
  vec4 orthographicClipPosition = vec4(orthographicNDC * globalClipPosition.w, globalClipPosition.w);
  
  return NodeGeometryBundle(
    globalNDC,
    globalClipPosition,
    orthoFixedClipPosition,
    orthoZoomedClipPosition,
    orthographicClipPosition
  );
}

ivec2 getTextureIndex(int index, ivec2 textureDimensions) {
  int textureLength = textureDimensions.x * textureDimensions.y;
  

  
  int x = index % textureDimensions.x;
  int y = index / textureDimensions.x;

  return ivec2(x,y);
}

uniform vec2 mousePosition;

uniform int selectedIndex;
uniform vec4 selectedColor;

uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform sampler2D sizeTexture;
uniform sampler2D emphasisTexture;
uniform ivec2 textureDimensions;

#ifdef PICKER
  flat out vec4 color;
#else
  out vec4 color;
#endif

out vec3 position;
out vec3 normal;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  int id = int(index);
  
  vec3 nodePosition = texelFetch(positionTexture, getTextureIndex(id, textureDimensions), 0).xyz;
  vec4 nodeColor = texelFetch(colorTexture, getTextureIndex(id, textureDimensions), 0);
  float nodeSize = texelFetch(sizeTexture, getTextureIndex(id, textureDimensions), 0).r;
  float nodeEmphasis = texelFetch(emphasisTexture, getTextureIndex(id, textureDimensions), 0).r;

  float scale = nodeSize;
  float isSelected = float(index == selectedIndex);
  scale *= mix(1.0, 1.1, isSelected);
  
  #ifdef PICKER
    scale = max(scale, 0.05);
  #endif

  mat4 viewFromTexture = mat4(
    texelFetch(viewMatrixTexture, ivec2(0, 0), 0),
    texelFetch(viewMatrixTexture, ivec2(1, 0), 0),
    texelFetch(viewMatrixTexture, ivec2(0, 1), 0),
    texelFetch(viewMatrixTexture, ivec2(1, 1), 0)
  );

  NodeGeometryBundle geo = nodeGeometry(
    nodePosition,
    vertexPosition,
    scale,
    CameraMatrices(
      projection,
      viewFromTexture,
      orthoFixedProjection,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );
  
  
  float distance = length(geo.globalNDC.xy - mousePosition);
  float nearness = bump(distance, 2.0, 1.0);

  vec4 clipPosition = geo.orthographicClipPosition;
  
  #ifdef PICKER
    color = instanceIdToColor();
  #else
    color = mix(nodeColor, selectedColor*1.4, float(index == selectedIndex));
  #endif

  normal = mat3(orthoFixedView) * vertexNormal;
  gl_Position = clipPosition;
}`,Ry=`#version 300 es
precision lowp float;

flat in vec4 color;
out vec4 fragColor;

void main() {
  fragColor = color;
}`,Iy=`#version 300 es
precision highp float;
precision highp int;

in vec3 segmentOffset;
in ivec2 edgeIndices;

out vec4 color;

out vec4 position;
out float size;
flat out vec2 edgeDirection;
flat out float edgeLength;
flat out float edgeLength2D;
flat out float isAnySelected;
out float isSource;
out float isTarget;
out float emphasis;
out float selected;
out float v;
out float y;

uniform vec2 mousePosition;

uniform cameras {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

uniform sampler2D viewMatrixTexture;

struct CameraMatrices {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
};

struct NodeGeometryBundle {
  vec3 globalNDC;
  vec4 globalClipPosition;
  vec4 orthoFixedClipPosition;
  vec4 orthoZoomedClipPosition;
  vec4 orthographicClipPosition;
};

NodeGeometryBundle nodeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  float scale,
  in CameraMatrices cam
) {
  vec4 globalClipPosition = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec3 globalNDC = globalClipPosition.xyz / globalClipPosition.w;

  vec4 orthoFixedClipPosition = cam.orthoFixedProjection * cam.orthoFixedView * vec4(vertexPosition*scale, 1.0);
  vec3 orthoFixedNDC = orthoFixedClipPosition.xyz / orthoFixedClipPosition.w;
  
  vec4 orthoZoomedClipPosition = cam.orthoZoomedProjection * cam.orthoZoomedView * vec4(vertexPosition*scale, 1.0)*0.5;
  vec3 orthoZoomedNDC = orthoZoomedClipPosition.xyz / orthoZoomedClipPosition.w;

  vec3 localNDC = mix(orthoZoomedNDC, orthoFixedNDC, 0.5);

  
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.2 );
  
  vec4 orthographicClipPosition = vec4(orthographicNDC * globalClipPosition.w, globalClipPosition.w);
  
  return NodeGeometryBundle(
    globalNDC,
    globalClipPosition,
    orthoFixedClipPosition,
    orthoZoomedClipPosition,
    orthographicClipPosition
  );
}

ivec2 getTextureIndex(int index, ivec2 textureDimensions) {
  int textureLength = textureDimensions.x * textureDimensions.y;
  

  
  int x = index % textureDimensions.x;
  int y = index / textureDimensions.x;

  return ivec2(x,y);
}

uniform sampler2D positionTexture;
uniform sampler2D colorTexture;
uniform sampler2D sizeTexture;
uniform sampler2D emphasisTexture;
uniform ivec2 textureDimensions;

uniform vec4 selectedColor;
uniform int selectedIndex;

vec3 desaturate(vec3 color, float amount) {
  float average = (color.r + color.g + color.b) / 3.0;
  return mix(color, vec3(average), amount);
}

vec4 edgeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  in vec2 edgeDirection,
  float scale,
  float flatness,
  in CameraMatrices cam
) {
  vec2 edgePerpendicular = vec2(-edgeDirection.y, edgeDirection.x)*scale/3.0;
  vec4 position = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec4 positionNDC = position / position.w;
  
  

  vec4 positionClip = vec4(position.xy + vertexPosition.y*1.0 * edgePerpendicular, position.zw);

  vec4 positionFixedStrokeNDC = positionNDC + vec4(vertexPosition.y * edgePerpendicular, 0.0, 0.0);
  vec4 positionFixedStrokeClip = positionFixedStrokeNDC * position.w;

  
  return mix(positionFixedStrokeClip, positionClip, 1.0-flatness);
}

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

void main() {
  selected = float(selectedIndex == edgeIndices.x || selectedIndex == edgeIndices.y);
  isAnySelected = float(selectedIndex > -1);
  
  vec3 segmentPosition = segmentOffset.yxz + vec3(0.5, 0.0, 0.0);
  isSource = segmentPosition.x;
  isTarget = 1.0-segmentPosition.x;
  
  float sourceEmphasis = texelFetch(emphasisTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  float targetEmphasis = texelFetch(emphasisTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;

  emphasis = max(sourceEmphasis, targetEmphasis);
  
  position = vec4(0);
  vec3 vertexOffset = segmentPosition + vec3(0.0, 0, 0.0);

  vec3 sourceNodePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).xyz;
  vec3 targetNodePosition = texelFetch(positionTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).xyz;
  vec3 nodePosition = sourceNodePosition*isSource + targetNodePosition*isTarget;
  
  float sourceSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  float targetSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;

  size = sourceSize*isSource + targetSize*isTarget;
  size *= mix(0.4, 0.11, emphasis);

  vec4 targetPositionClip = projection * view * vec4(targetNodePosition, 1.0);
  vec4 sourcePositionClip = projection * view * vec4(sourceNodePosition, 1.0);
  
  edgeDirection = normalize(targetPositionClip.xyz/targetPositionClip.w - sourcePositionClip.xyz/sourcePositionClip.w).xy;
  edgeLength = length(targetNodePosition.xyz - sourceNodePosition.xyz);
  edgeLength2D = length((targetPositionClip.xy/targetPositionClip.w - sourcePositionClip.xy/sourcePositionClip.w));

  mat4 viewFromTexture = mat4(
    texelFetch(viewMatrixTexture, ivec2(0, 0), 0),
    texelFetch(viewMatrixTexture, ivec2(1, 0), 0),
    texelFetch(viewMatrixTexture, ivec2(0, 1), 0),
    texelFetch(viewMatrixTexture, ivec2(1, 1), 0)
  );

  position = edgeGeometry(
    nodePosition,
    vertexOffset,
    edgeDirection,
    size,
    mix(0.4, 1.0, emphasis),
    CameraMatrices(
      projection,
      viewFromTexture,
      orthoFixedProjection,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );

  
  position.z -= 0.01 * position.w * bump(vertexOffset.x, 4.0, 0.125);
  
  
  

  
  vec4 sourceColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0);
  sourceColor = mix(sourceColor, selectedColor, float(selectedIndex == edgeIndices.x));
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0);
  targetColor = mix(targetColor, selectedColor, float(selectedIndex == edgeIndices.y));
  color += sourceColor*isSource;
  color += targetColor*isTarget;

  
  color.rgb = desaturate(color.rgb, mix(1.0, 0.4, emphasis));
  color.a *= mix(0.7, 1.0, emphasis);
  

  
  

  gl_Position = position;
  y = vertexOffset.y;
  v = segmentPosition.y;

  
  
}`,Ly=`#version 300 es
precision highp float;

in float selected;

in vec4 color;
in vec4 position;
in float emphasis;
in float size;
flat in vec2 edgeDirection;
flat in float edgeLength;
flat in float edgeLength2D;
in float isTarget;
in float isSource;
in float y;

out vec4 fragColor;

const float PI = 3.1415926535897932384626433832795;
const float freq = 1.0;

uniform float time;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}
float sdEgg( in vec2 p, in float ra, in float rb )
{
    const float k = sqrt(3.0);
    p.x = abs(p.x);
    float r = ra - rb;
    return ((p.y<0.0)       ? length(vec2(p.x,  p.y    )) - r :
            (k*(p.x+r)<p.y) ? length(vec2(p.x,  p.y-k*r)) :
                              length(vec2(p.x+r,p.y    )) - 2.0*r) - rb;
}

float sdEquilateralTriangle( in vec2 p )
{
    const float k = sqrt(3.0);
    p.x = abs(p.x) - 1.0;
    p.y = p.y + 1.0/k;
    if( p.x+k*p.y>0.0 ) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
    p.x -= clamp( p.x, -2.0, 0.0 );
    return -length(p)*sign(p.y);
}

float wave(float t, float freq){ return pow(sin(t * freq * PI), 2.0); }
void main() {
  float u = isTarget;
  
  
  
  float d = sdEquilateralTriangle(vec2(y*4.0, (isSource-0.5)*edgeLength2D*10.0/size));
  float triangle = d < 0.0 ? 1.0 : 0.0;

  fragColor = color;
  
  
  
  
  
  
  fragColor.a *= bump(y, 1.0, 1.0);

  
  
  float frequency = min(120.0*edgeLength2D, 80.0);
  
  fragColor.a *= mix(
    1.0,
    wave(u + time/frequency*2.0, frequency), 
    mix(0.3, 1.0, emphasis) 
  );
  
  fragColor.a *= mix(0.3, 1.0, selected);
  
  
  

  
  fragColor.a = min(1.0-triangle/3.0, fragColor.a);
  
  
  
  
  

  
  
}`;const ar=$e.infinite(()=>{let i=new Li(1,1,1);const e=new $l;e.setAttribute("vertexPosition",i.attributes.position),e.setAttribute("vertexNormal",i.attributes.normal),e.setIndex(i.index),e.setAttribute("index",new tr(new Int32Array([]),1));const t=new Fa({vertexShader:Ay,fragmentShader:My}),n=new Fa({vertexShader:Py,fragmentShader:Ry});e.setAttribute("index",new tr(new Int32Array([1,2,3,4]),1)),t.uniformsGroups=[Kl()];const o=new Ft(e,t),a=new Ft(e,n);return{mesh:o,pickerMesh:a}}),Cy=()=>{const{mesh:i,pickerMesh:e}=ar();i.material.uniforms={positionTexture:{value:an().viewTexture},colorTexture:{value:st().viewTexture},sizeTexture:{value:Ht().viewTexture},emphasisTexture:{value:Wt().viewTexture},textureDimensions:{value:[st().view.width,st().view.height]},viewMatrixTexture:{value:Oi().viewTexture},mousePosition:{value:go()},selectedIndex:{value:-1},selectedColor:{value:ho()},hoveringIndex:{value:wu()},time:{value:performance.now()/1e3}},e.material.uniforms=i.material.uniforms,i.material.needsUpdate=!0,e.material.needsUpdate=!0},Oy=()=>{const{mesh:i,pickerMesh:e}=ar();for(const t of[i.material.uniforms,e.material.uniforms])t.positionTexture.value=an().viewTexture,t.colorTexture.value=st().viewTexture,t.sizeTexture.value=Ht().viewTexture,t.emphasisTexture.value=Wt().viewTexture,t.textureDimensions.value=[st().view.width,st().view.height],t.viewMatrixTexture.value=Oi().viewTexture,t.mousePosition.value=go(),t.selectedIndex.value=rn(),t.selectedColor.value=ho(),t.hoveringIndex.value=wu(),t.time.value=performance.now()/1e3},Ny=$e.infinite(i=>{const e=new Int32Array(i);for(let t=0;t<i;t++)e[t]=t;return new tr(e,1)}),Dy=i=>{console.log("loading node vertex array",i);const{mesh:e,pickerMesh:t}=ar(),n=Ny(i);e.geometry.setAttribute("index",n),t.geometry.setAttribute("index",n)},mo=$e.infinite(()=>{const i=new is(.5,.5,1,4,10,!0),e=new $l;e.setAttribute("segmentOffset",i.attributes.position),e.setIndex(i.index),e.setAttribute("edgeIndices",new tr(new Int32Array([1,2,3]),2));const t=new Fa({vertexShader:Iy,fragmentShader:Ly,uniforms:{},transparent:!0});return new Ft(e,t)}),Fy=$e.infinite(i=>{const e=new Int32Array(i.flat());return new tr(e,2)}),Uy=i=>{const e=mo(),t=Fy(i);e.geometry.setAttribute("edgeIndices",t)},Gy=()=>{const i=mo();i.material.uniforms={positionTexture:{value:an().viewTexture},colorTexture:{value:st().viewTexture},sizeTexture:{value:Ht().viewTexture},emphasisTexture:{value:Wt().viewTexture},textureDimensions:{value:[st().current.width,st().current.height]},viewMatrixTexture:{value:Oi().viewTexture},mousePosition:{value:go()},selectedIndex:{value:rn()},selectedColor:{value:ho()},time:{value:performance.now()/1e3}},i.material.uniformsGroups=[Kl()],i.material.needsUpdate=!0},By=()=>{const i=mo();for(const e of[i.material.uniforms])e.positionTexture.value=an().viewTexture,e.colorTexture.value=st().viewTexture,e.sizeTexture.value=Ht().viewTexture,e.emphasisTexture.value=Wt().viewTexture,e.textureDimensions.value=[st().view.width,st().view.height],e.viewMatrixTexture.value=Oi().viewTexture,e.mousePosition.value=go(),e.selectedIndex.value=rn(),e.selectedColor.value=ho(),e.time.value=performance.now()/1e3},pr=$e.infinite(()=>{const{canvas:i,gl:e}=wn(),t=new Rc,n=new Rc,o=new At(75,window.innerWidth/window.innerHeight,.5,1e3);o.position.z=50;const a=new Yl({canvas:i,context:e});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio);const c=ar().mesh;t.add(c);const r=mo();t.add(r);const f=ar().pickerMesh;return n.add(f),{scene:t,pickerScene:n,camera:o,renderer:a}}),ss=$e.infinite(()=>{const{canvas:i}=wn();return new Sn(i.width,i.height)}),Vy=i=>{const{canvas:e}=wn(),t=e.getBoundingClientRect(),n=(i.clientX-t.left)/t.width,o=(i.clientY-t.top)/t.height;return{x:n*2-1,y:-(o*2-1)}},$a=ro(new V0),{globalCamera:Xr,updateCameras:zy,setCameraCenter:il,setCameraDistance:rl,zoomGlobalCamera:ol,panGlobalCamera:al,startZooming:sl,startPanning:cl,stopPanning:ll,computeScreenPosition:ky}=$a;let bu,Tu;const Su=500,Hy=Su,ul=async()=>{$a.stopZooming();const i=rn(),e=(await $a.getGlobalCameraParams()).distance;i>-1?bu=Math.min(e,Su):Tu=Math.max(e,Hy)},Et={},ya=new Uint8Array(4).fill(0);let Zi=-1,eo=!1,Eu=0;const Wy=()=>eo?!1:Date.now()-Eu<200;let qa=0,to=0;const xa=()=>{qa++},go=()=>[Et.x,Et.y],Xy=()=>[Et.pickerX,Et.pickerY],jr=({x:i,y:e})=>{const{canvas:t}=wn();Et.x=i,Et.y=e,Et.canvasX=(i+1)/2*t.width,Et.canvasY=(e+1)/2*t.height;const n=window.devicePixelRatio||1;Et.pickerX=Math.floor(Et.canvasX/n),Et.pickerY=Math.floor(Et.canvasY/n)};let no=-1;const wu=()=>no,jy=async()=>{const{nodes:i}=await sn();return i[no]},Yy=$e.infinite(()=>{const{canvas:i}=wn();Ga(i).on("touchmove",jr).on("mousemove",jr),Ga(i).on("touchmove",xa).on("pinchmove",xa).on("mousemove",xa),i.addEventListener("pointerdown",e=>{Ka(),jr(Vy(e)),eo=!0,qa=0,to=0}),i.addEventListener("pointerup",()=>{const e=to>.03||qa>5;eo=!1,e||(Ka(),setTimeout(()=>{const t=rn();Ya(Zi===t?-1:Zi),Zy().then(n=>{i.dispatchEvent(new CustomEvent("selected",{detail:{selectedIndex:t,info:n}}))}),i.dispatchEvent(new CustomEvent("tap",{detail:{selectedIndex:t}}))},100))}),i.addEventListener("selected",e=>{const t=e.detail.info;po.push(t?`#project/${t?.navId}`:"#-")}),i.addEventListener("hover",async e=>{const{nodes:t}=await sn(),n=e.detail.wasHoveredIndex;n>-1&&t[n];const o=e.detail.nowHoveredIndex,a=o>-1?t[o]:null;rn()>-1&&t[rn()],a&&Wy()?no=a?.index||-1:no=-1})}),zr=Math.PI/3,$y=()=>{const{canvas:i}=wn();i.addEventListener("wheel",e=>{const t=Math.exp(e.deltaY/i.clientHeight*2)-1,n=Math.sign(t);sl(),ol(0,0,n*Math.min(Math.abs(t),.06)),e.preventDefault(),ul()},{passive:!1}),Ga(i).on("mousemove",function(e){Eu=Date.now(),!(!e.active||e.buttons!==1)&&(to+=Math.sqrt(Math.pow(e.dx,2)+Math.pow(e.dy,2)),e.mods.shift?(cl(),al(e.dx,e.dy)):e.mods.meta?Xr.pivot(e.dx,e.dy):(Xr.rotate(-e.dx*zr,-e.dy*zr),ll()),e.originalEvent.preventDefault())}).on("touchmove",function(e){jr(e),e.active&&(to+=Math.sqrt(Math.pow(e.dx,2)+Math.pow(e.dy,2)),Xr.rotate(-e.dx*zr,-e.dy*zr))}).on("pinchmove",function(e){e.active&&(eo=!0,cl(),sl(),ol(0,0,1-e.zoomx),al(e.dx,e.dy))}).on("touchstart",e=>e.originalEvent.preventDefault()).on("pinchstart",e=>e.originalEvent.preventDefault()).on("pinchend",()=>{ll(),ul()})},qy=i=>i[0]+i[1]*256+i[2]*256*256-1,Ka=()=>{const{renderer:i}=pr(),{canvas:e}=wn(),t=Xy(),n=ss();i.readRenderTargetPixels(n,...t,1,1,ya);const o=qy(ya);return Zi!==o&&e.dispatchEvent(new CustomEvent("hover",{detail:{wasHoveredIndex:Zi,nowHoveredIndex:o}})),Zi=o,ya},Ky=Kr(Ka,1e3/5),Zy=async()=>{const{nodes:i}=await sn();return i[rn()]},cs=({classes:i,htmlTemplate:e,applyScreenPositionStyle:t}={})=>{t=t||((f,s)=>{s.style.left=`${f[0]}vw`,s.style.bottom=`${f[1]}vh`});const n=document.createElement("div");n.classList.add("cursor"),i?.forEach(f=>n.classList.add(f)),document.body.appendChild(n);const o=f=>{t(f,n)},a=f=>{const s=[(f[0]+1)/2*100,(f[1]+1)/2*100];o(s)},c=Kr(async f=>{const s=au(f),h=await ky(s);a(h)},1e3/5),r=Kr(async f=>{f?(await c(f),n.classList.add("focused")):n.classList.remove("focused"),f&&e&&Va(e(f),n)},50);return{element:n,alignToScreenPosition:o,alignToNDCPosition:a,alignToNode:c,highlightNode:r,destroy:()=>n.remove()}},Jy=cs({classes:["selected-cursor"]}),Qy=cs({classes:["hovered-tooltip"],htmlTemplate:i=>Qt`
    <div class="node-name">${i.data.name}</div>
  `,applyScreenPositionStyle(i,e){e.style.left=`calc(min(${i[0]}vw, calc(100vw - 15em)))`,e.style.bottom=`${i[1]}vh`}}),ex=cs({classes:["hovered-cursor"]});window.addEventListener("keydown",i=>{i.key,i.key});const tx=()=>{const i=window.devicePixelRatio||1,e=window.innerWidth,t=window.innerHeight,n=Math.floor(e*i),o=Math.floor(t*i);return{width:n,height:o}},wn=$e.infinite(()=>{const i=document.createElement("canvas");document.body.appendChild(i);const e=i.getContext("webgl2");return e?console.log("WebGL2 initialized"):console.error("WebGL2 failed to initialize"),{canvas:i,gl:e}}),An=$e.infinite(()=>{const{renderer:i}=pr();return Be.GPUComposer.initWithThreeRenderer(i)}),Au=()=>{const{canvas:i}=wn(),{renderer:e}=pr(),{width:t,height:n}=tx();e.setSize(window.innerWidth,window.innerHeight),ss().setSize(window.innerWidth,window.innerHeight),Xr.resize(t/n),i.style.position="absolute",i.style.top="0px",i.style.left="0px",i.style.height="100vh"};Be.renderRGBProgram(An(),{name:"renderPositions",type:Be.FLOAT});Be.renderAmplitudeProgram(An(),{name:"renderNoise",type:Be.FLOAT,components:"x"});Au();Be.copyProgram(An(),{name:"copy",type:Be.FLOAT});Cy();Gy();const Mu=()=>{xy().then(s=>{Jy.highlightNode(s)}),jy().then(s=>{Qy.highlightNode(s),ex.highlightNode(s)}),Au(),zy(Uv,window.innerWidth,window.innerHeight);const i=An();i.undoThreeState();const e=[an(),st(),Ht(),Wt()],t=Dv();i.step({program:t,input:e.flatMap(s=>[s.target,s.current]),output:e.flatMap(s=>[s.current,s.view])});const n=[Oi()],o=Fv();i.step({program:o,input:n.flatMap(s=>[s.target,s.current]),output:n.flatMap(s=>[s.current,s.view])}),i.resetThreeState(),Oy(),By();const{renderer:a,scene:c,camera:r,pickerScene:f}=pr();a.setScissorTest(!1),a.setRenderTarget(null),a.render(c,r),a.setRenderTarget(ss()),a.render(f,r),Ky(),requestAnimationFrame(Mu)},cn=document.createElement("div");document.body.appendChild(cn);cn.id="fps-indicator";cn.classList.add("overlay");cn.classList.add("debug");cn.innerHTML=`
<div class="value">FPS: 0</div>
<canvas width="60" height="20" class="graph"></canvas>
`;cn.style.position="absolute";cn.style.top="0px";cn.style.left="0px";cn.style.color="white";const nx=document.querySelector("#fps-indicator .value"),pi=document.querySelector("#fps-indicator .graph"),_n=pi.getContext("2d");let ba=performance.now(),fl=performance.now(),Ta=0,Yi=[];const dl=5,ix=()=>Yi.slice(0,dl).reduce((i,e)=>i+e,0)/dl,ls=()=>{const i=ix(),e=performance.now();Ta++,e>ba+100&&(Yi=[Math.round(Ta*1e3/(e-ba)/2),...Yi].slice(0,1e3),_n?.clearRect(0,0,pi.width,pi.height),_n?.beginPath(),_n?.moveTo(0,pi.height),Yi.forEach((t,n)=>{_n?.lineTo(n,pi.height-t)}),_n?.lineTo(Yi.length,pi.height),_n.fillStyle="rgba(255, 255, 255, 0.5)",_n?.fill(),_n?.stroke(),ba=e,Ta=0),e>fl+1e3&&(fl=e,nx.innerText=`FPS: ${i}`),requestAnimationFrame(ls)};ls();pr();$y();Yy();document.querySelector("html")?.classList.add("loading");let us;us=await sn();await U0();const{nodes:Xt,linkIndexPairs:Pu}=us;console.log("nodes",Xt);const hl=[B0],rx=async()=>{const i=hl[Math.floor(Math.random()*hl.length)];await i(us)};await rx();Uy(Pu);Dy(Xt.length);Nv(Xt.length);const Ru=new Float32Array(Xt.flatMap(({color:i})=>i));st().target.setFromArray(Ru);st().current.setFromArray(Ru);const io=new Float32Array(Xt.length);for(let i=0;i<io.length;i++)io[i]=Math.sqrt(Xt[i].size)/40;Ht().target.setFromArray(io);Ht().current.setFromArray(io);const Sa=40,ox=()=>[Math.random()*Sa-1,Math.random()*Sa-1,Math.random()*Sa-1],Iu=new Float32Array(Xt.flatMap(ox));an().target.setFromArray(Iu);an().current.setFromArray(Iu);Wt().target.setFromArray(new Float32Array(Xt.length).fill(0));Wt().current.setFromArray(new Float32Array(Xt.length).fill(0));const Ni=document.createElement("div");Ni.classList.add("overlay");Ni.classList.add("debug");Ni.style.top="0";Ni.style.right="0";document.body.appendChild(Ni);Ni.innerHTML=`
    <div>Nodes: ${Xt.length}</div>
    <div>Edges: ${Pu.length}</div>
`;document.querySelector("html").classList.remove("loading");Mu();ls();po.start();window.addEventListener("keydown",i=>{const e=document.querySelector("#debug-style").sheet,t=e.cssRules[0].styleMap.get("display").value!=="none";i.key==="d"&&e.cssRules[0].styleMap.set("display",t?"none":"block")})})();