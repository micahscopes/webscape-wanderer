(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pl(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ia={},$u={get exports(){return Ia},set exports(i){Ia=i}},Zr={},Yu={get exports(){return Zr},set exports(i){Zr=i}},ys;function qu(){return ys||(ys=1,function(i,e){(function(t,n){i.exports=n()})(sn,function(){var t={isEqual:!0,isMatchingKey:!0,isPromise:!0,maxSize:!0,onCacheAdd:!0,onCacheChange:!0,onCacheHit:!0,transformKey:!0},n=Array.prototype.slice;function o(l){var d=l.length;return d?d===1?[l[0]]:d===2?[l[0],l[1]]:d===3?[l[0],l[1],l[2]]:n.call(l,0):[]}function a(l){var d={};for(var S in l)t[S]||(d[S]=l[S]);return d}function c(l){return typeof l=="function"&&l.isMemoized}function r(l,d){return l===d||l!==l&&d!==d}function f(l,d){var S={};for(var p in l)S[p]=l[p];for(var p in d)S[p]=d[p];return S}var s=function(){function l(d){this.keys=[],this.values=[],this.options=d;var S=typeof d.isMatchingKey=="function";S?this.getKeyIndex=this._getKeyIndexFromMatchingKey:d.maxSize>1?this.getKeyIndex=this._getKeyIndexForMany:this.getKeyIndex=this._getKeyIndexForSingle,this.canTransformKey=typeof d.transformKey=="function",this.shouldCloneArguments=this.canTransformKey||S,this.shouldUpdateOnAdd=typeof d.onCacheAdd=="function",this.shouldUpdateOnChange=typeof d.onCacheChange=="function",this.shouldUpdateOnHit=typeof d.onCacheHit=="function"}return Object.defineProperty(l.prototype,"size",{get:function(){return this.keys.length},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"snapshot",{get:function(){return{keys:o(this.keys),size:this.size,values:o(this.values)}},enumerable:!1,configurable:!0}),l.prototype._getKeyIndexFromMatchingKey=function(d){var S=this.options,p=S.isMatchingKey,C=S.maxSize,y=this.keys,m=y.length;if(!m)return-1;if(p(y[0],d))return 0;if(C>1){for(var D=1;D<m;D++)if(p(y[D],d))return D}return-1},l.prototype._getKeyIndexForMany=function(d){var S=this.options.isEqual,p=this.keys,C=p.length;if(!C)return-1;if(C===1)return this._getKeyIndexForSingle(d);var y=d.length,m,D;if(y>1){for(var P=0;P<C;P++)if(m=p[P],m.length===y){for(D=0;D<y&&S(m[D],d[D]);D++);if(D===y)return P}}else for(var P=0;P<C;P++)if(m=p[P],m.length===y&&S(m[0],d[0]))return P;return-1},l.prototype._getKeyIndexForSingle=function(d){var S=this.keys;if(!S.length)return-1;var p=S[0],C=p.length;if(d.length!==C)return-1;var y=this.options.isEqual;if(C>1){for(var m=0;m<C;m++)if(!y(p[m],d[m]))return-1;return 0}return y(p[0],d[0])?0:-1},l.prototype.orderByLru=function(d,S,p){for(var C=this.keys,y=this.values,m=C.length,D=p;D--;)C[D+1]=C[D],y[D+1]=y[D];C[0]=d,y[0]=S;var P=this.options.maxSize;m===P&&p===m?(C.pop(),y.pop()):p>=P&&(C.length=y.length=P)},l.prototype.updateAsyncCache=function(d){var S=this,p=this.options,C=p.onCacheChange,y=p.onCacheHit,m=this.keys[0],D=this.values[0];this.values[0]=D.then(function(P){return S.shouldUpdateOnHit&&y(S,S.options,d),S.shouldUpdateOnChange&&C(S,S.options,d),P},function(P){var M=S.getKeyIndex(m);throw M!==-1&&(S.keys.splice(M,1),S.values.splice(M,1)),P})},l}();function h(l,d){if(d===void 0&&(d={}),c(l))return h(l.fn,f(l.options,d));if(typeof l!="function")throw new TypeError("You must pass a function to `memoize`.");var S=d.isEqual,p=S===void 0?r:S,C=d.isMatchingKey,y=d.isPromise,m=y===void 0?!1:y,D=d.maxSize,P=D===void 0?1:D,M=d.onCacheAdd,w=d.onCacheChange,T=d.onCacheHit,A=d.transformKey,L=f({isEqual:p,isMatchingKey:C,isPromise:m,maxSize:P,onCacheAdd:M,onCacheChange:w,onCacheHit:T,transformKey:A},a(d)),x=new s(L),I=x.keys,_=x.values,E=x.canTransformKey,v=x.shouldCloneArguments,u=x.shouldUpdateOnAdd,g=x.shouldUpdateOnChange,b=x.shouldUpdateOnHit,R=function(){var U=v?o(arguments):arguments;E&&(U=A(U));var F=I.length?x.getKeyIndex(U):-1;if(F!==-1)b&&T(x,L,R),F&&(x.orderByLru(I[F],_[F],F),g&&w(x,L,R));else{var X=l.apply(this,arguments),O=v?U:o(arguments);x.orderByLru(O,X,I.length),m&&x.updateAsyncCache(R),u&&M(x,L,R),g&&w(x,L,R)}return _[0]};return R.cache=x,R.fn=l,R.isMemoized=!0,R.options=L,R}return h})}(Yu)),Zr}var $i={},Ku={get exports(){return $i},set exports(i){$i=i}},xs;function Zu(){return xs||(xs=1,function(i,e){(function(t,n){n(e)})(sn,function(t){var n=typeof WeakMap=="function",o=Object.keys;function a(_,E){return _===E||_!==_&&E!==E}function c(_){return _.constructor===Object||_.constructor==null}function r(_){return!!_&&typeof _.then=="function"}function f(_){return!!(_&&_.$$typeof)}function s(){var _=[];return{delete:function(E){for(var v=0;v<_.length;++v)if(_[v][0]===E){_.splice(v,1);return}},get:function(E){for(var v=0;v<_.length;++v)if(_[v][0]===E)return _[v][1]},set:function(E,v){for(var u=0;u<_.length;++u)if(_[u][0]===E){_[u][1]=v;return}_.push([E,v])}}}var h=function(_){return _?function(){return new WeakMap}:s}(n);function l(_){return function(v){var u=_||v;return function(b,R,U,F,X,O,N){N===void 0&&(N=h());var G=!!b&&typeof b=="object",H=!!R&&typeof R=="object";if(G!==H)return!1;if(!G&&!H)return u(b,R,N);var K=N.get(b);if(K&&N.get(R))return K===R;N.set(b,R),N.set(R,b);var $=u(b,R,N);return N.delete(b),N.delete(R),$}}}function d(_,E,v,u){var g=_.length;if(E.length!==g)return!1;for(;g-- >0;)if(!v(_[g],E[g],g,g,_,E,u))return!1;return!0}function S(_,E,v,u){var g=_.size===E.size;if(g&&_.size){var b={},R=0;_.forEach(function(U,F){if(g){var X=!1,O=0;E.forEach(function(N,G){!X&&!b[O]&&(X=v(F,G,R,O,_,E,u)&&v(U,N,F,G,_,E,u),X&&(b[O]=!0)),O++}),R++,g=X}})}return g}var p="_owner",C=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function y(_,E,v,u){var g=o(_),b=g.length;if(o(E).length!==b)return!1;if(b)for(var R=void 0;b-- >0;){if(R=g[b],R===p){var U=f(_),F=f(E);if((U||F)&&U!==F)return!1}if(!C(E,R)||!v(_[R],E[R],R,R,_,E,u))return!1}return!0}var m=function(){return/foo/g.flags==="g"?function(E,v){return E.source===v.source&&E.flags===v.flags}:function(E,v){return E.source===v.source&&E.global===v.global&&E.ignoreCase===v.ignoreCase&&E.multiline===v.multiline&&E.unicode===v.unicode&&E.sticky===v.sticky&&E.lastIndex===v.lastIndex}}();function D(_,E,v,u){var g=_.size===E.size;if(g&&_.size){var b={};_.forEach(function(R,U){if(g){var F=!1,X=0;E.forEach(function(O,N){!F&&!b[X]&&(F=v(R,O,U,N,_,E,u),F&&(b[X]=!0)),X++}),g=F}})}return g}var P=typeof Map=="function",M=typeof Set=="function",w=Object.prototype.valueOf;function T(_){var E=typeof _=="function"?_(v):function(u,g,b,R,U,F,X){return v(u,g,X)};function v(u,g,b){if(u===g)return!0;if(u&&g&&typeof u=="object"&&typeof g=="object"){if(c(u)&&c(g))return y(u,g,E,b);var R=Array.isArray(u),U=Array.isArray(g);return R||U?R===U&&d(u,g,E,b):(R=u instanceof Date,U=g instanceof Date,R||U?R===U&&a(u.getTime(),g.getTime()):(R=u instanceof RegExp,U=g instanceof RegExp,R||U?R===U&&m(u,g):r(u)||r(g)?u===g:P&&(R=u instanceof Map,U=g instanceof Map,R||U)?R===U&&S(u,g,E,b):M&&(R=u instanceof Set,U=g instanceof Set,R||U)?R===U&&D(u,g,E,b):u.valueOf!==w||g.valueOf!==w?a(u.valueOf(),g.valueOf()):y(u,g,E,b)))}return u!==u&&g!==g}return v}var A=T(),L=T(function(){return a}),x=T(l()),I=T(l(a));t.circularDeepEqual=x,t.circularShallowEqual=I,t.createCustomEqual=T,t.deepEqual=A,t.sameValueZeroEqual=a,t.shallowEqual=L,Object.defineProperty(t,"__esModule",{value:!0})})}(Ku,$i)),$i}(function(i,e){(function(t,n){i.exports=n(qu(),Zu())})(sn,function(t,n){function o(){return o=Object.assign?Object.assign.bind():function(W){for(var Y=1;Y<arguments.length;Y++){var J=arguments[Y];for(var ie in J)Object.prototype.hasOwnProperty.call(J,ie)&&(W[ie]=J[ie])}return W},o.apply(this,arguments)}function a(W,Y){if(W==null)return{};var J={},ie=Object.keys(W),ce,ae;for(ae=0;ae<ie.length;ae++)ce=ie[ae],!(Y.indexOf(ce)>=0)&&(J[ce]=W[ce]);return J}var c={isDeepEqual:!1,isPromise:!1,isReact:!1,isSerialized:!1,isShallowEqual:!1,matchesArg:void 0,matchesKey:void 0,maxAge:void 0,maxArgs:void 0,maxSize:1,onExpire:void 0,profileName:void 0,serializer:void 0,updateCacheForKey:void 0,transformArgs:void 0,updateExpire:!1};function r(){for(var W=arguments.length,Y=new Array(W),J=0;J<W;J++)Y[J]=arguments[J];return Y.reduce(function(ie,ce){if(typeof ie=="function")return typeof ce=="function"?function(){ie.apply(this,arguments),ce.apply(this,arguments)}:ie;if(typeof ce=="function")return ce})}function f(){for(var W=arguments.length,Y=new Array(W),J=0;J<W;J++)Y[J]=arguments[J];return Y.reduce(function(ie,ce){if(typeof ie=="function")return typeof ce=="function"?function(){return ie(ce.apply(this,arguments))}:ie;if(typeof ce=="function")return ce})}function s(W,Y){for(var J=0;J<W.length;J++)if(W[J].key===Y)return J;return-1}function h(W,Y){var J=typeof Y=="function"?Y:function(ie,ce){for(var ae=0;ae<ce.length;ae++)if(!W(ie[ae],ce[ae]))return!1;return!0};return function(ie,ce){for(var ae=0;ae<ie.length;ae++)if(ie[ae].length===ce.length&&J(ie[ae],ce))return ae;return-1}}function l(W,Y){return!Y||Y===c?W:o({},W,Y,{onCacheAdd:r(W.onCacheAdd,Y.onCacheAdd),onCacheChange:r(W.onCacheChange,Y.onCacheChange),onCacheHit:r(W.onCacheHit,Y.onCacheHit),transformArgs:f(W.transformArgs,Y.transformArgs)})}function d(W){return typeof W=="function"&&W.isMoized}function S(W,Y,J){try{var ie=J||Y||"anonymous";Object.defineProperty(W,"name",{configurable:!0,enumerable:!1,value:"moized("+ie+")",writable:!0})}catch{}}function p(W,Y,J){var ie=s(W,Y);ie!==-1&&(clearTimeout(W[ie].timeoutId),J&&W.splice(ie,1))}function C(W,Y){var J=setTimeout(W,Y);return typeof J.unref=="function"&&J.unref(),J}function y(W,Y,J,ie){var ce=Y.maxAge;return function ae(ue,V,B){var re=ue.keys[0];if(s(W,re)===-1){var me=function(){var ye=h(J,ie),Me=ye(ue.keys,re),Se=ue.values[Me];~Me&&(ue.keys.splice(Me,1),ue.values.splice(Me,1),typeof Y.onCacheChange=="function"&&Y.onCacheChange(ue,V,B)),p(W,re,!0),typeof Y.onExpire=="function"&&Y.onExpire(re)===!1&&(ue.keys.unshift(re),ue.values.unshift(Se),ae(ue,V,B),typeof Y.onCacheChange=="function"&&Y.onCacheChange(ue,V,B))};W.push({expirationMethod:me,key:re,timeoutId:C(me,ce)})}}}function m(W,Y){return function(ie){var ce=ie.keys[0],ae=s(W,ce);~ae&&(p(W,ce,!1),W[ae].timeoutId=C(W[ae].expirationMethod,Y.maxAge))}}function D(W,Y,J,ie){var ce=typeof Y.maxAge=="number"&&isFinite(Y.maxAge)?y(W,Y,J,ie):void 0;return{onCacheAdd:ce,onCacheHit:ce&&Y.updateExpire?m(W,Y):void 0}}var P={anonymousProfileNameCounter:1,isCollectingStats:!1,profiles:{}},M=!1;function w(W){W?delete P.profiles[W]:P.profiles={}}function T(W){W===void 0&&(W=!0),P.isCollectingStats=W}function A(W){var Y=W.profileName;return function(){Y&&!P.profiles[Y]&&(P.profiles[Y]={calls:0,hits:0}),P.profiles[Y].calls++}}function L(W){return function(){var Y=P.profiles,J=W.profileName;Y[J]||(Y[J]={calls:0,hits:0}),Y[J].calls++,Y[J].hits++}}function x(W){return W.displayName||W.name||"Anonymous "+P.anonymousProfileNameCounter++}function I(W,Y){return W?(Y/W*100).toFixed(4)+"%":"0.0000%"}function _(W){!P.isCollectingStats&&!M&&(console.warn('Stats are not currently being collected, please run "collectStats" to enable them.'),M=!0);var Y=P.profiles;if(W){if(!Y[W])return{calls:0,hits:0,usage:"0.0000%"};var J=Y[W];return o({},J,{usage:I(J.calls,J.hits)})}var ie=Object.keys(P.profiles).reduce(function(ce,ae){return ce.calls+=Y[ae].calls,ce.hits+=Y[ae].hits,ce},{calls:0,hits:0});return o({},ie,{profiles:Object.keys(Y).reduce(function(ce,ae){return ce[ae]=_(ae),ce},{}),usage:I(ie.calls,ie.hits)})}function E(W){return P.isCollectingStats?{onCacheAdd:A(W),onCacheHit:L(W)}:{}}var v={arguments:!0,callee:!0,caller:!0,constructor:!0,length:!0,name:!0,prototype:!0};function u(W,Y,J){J===void 0&&(J=[]),Object.getOwnPropertyNames(W).forEach(function(ie){if(!v[ie]&&J.indexOf(ie)===-1){var ce=Object.getOwnPropertyDescriptor(W,ie);ce.get||ce.set?Object.defineProperty(Y,ie,ce):Y[ie]=W[ie]}})}function g(W,Y){var J=Y.expirations,ie=W.options,ce=h(ie.isEqual,ie.isMatchingKey),ae=W;ae.clear=function(){var ue=ae._microMemoizeOptions.onCacheChange,V=ae.cache;return V.keys.length=0,V.values.length=0,ue&&ue(V,ae.options,ae),!0},ae.clearStats=function(){w(ae.options.profileName)},ae.get=function(ue){var V=ae._microMemoizeOptions.transformKey,B=ae.cache,re=V?V(ue):ue,me=ce(B.keys,re);return me!==-1?ae.apply(this,ue):void 0},ae.getStats=function(){return _(ae.options.profileName)},ae.has=function(ue){var V=ae._microMemoizeOptions.transformKey,B=V?V(ue):ue;return ce(ae.cache.keys,B)!==-1},ae.keys=function(){return ae.cacheSnapshot.keys},ae.remove=function(ue){var V=ae._microMemoizeOptions,B=V.onCacheChange,re=V.transformKey,me=ae.cache,_e=ce(me.keys,re?re(ue):ue);if(_e===-1)return!1;var ye=me.keys[_e];return me.keys.splice(_e,1),me.values.splice(_e,1),B&&B(me,ae.options,ae),p(J,ye,!0),!0},ae.set=function(ue,V){var B=ae._microMemoizeOptions,re=ae.cache,me=ae.options,_e=B.onCacheAdd,ye=B.onCacheChange,Me=B.transformKey,Se=Me?Me(ue):ue,he=ce(re.keys,Se);if(he===-1){var Ee=me.maxSize-1;re.size>Ee&&(re.keys.length=Ee,re.values.length=Ee),re.keys.unshift(Se),re.values.unshift(V),me.isPromise&&re.updateAsyncCache(ae),_e&&_e(re,me,ae),ye&&ye(re,me,ae)}else{var Ae=re.keys[he];re.values[he]=V,he>0&&re.orderByLru(Ae,V,he),me.isPromise&&re.updateAsyncCache(ae),typeof ye=="function"&&ye(re,me,ae)}},ae.values=function(){return ae.cacheSnapshot.values}}function b(W,Y){var J=Y.expirations,ie=Y.options,ce=Y.originalFunction,ae=W.options;Object.defineProperties(W,{_microMemoizeOptions:{configurable:!0,get:function(){return ae}},cacheSnapshot:{configurable:!0,get:function(){var B=W.cache;return{keys:B.keys.slice(0),size:B.size,values:B.values.slice(0)}}},expirations:{configurable:!0,get:function(){return J}},expirationsSnapshot:{configurable:!0,get:function(){return J.slice(0)}},isMoized:{configurable:!0,get:function(){return!0}},options:{configurable:!0,get:function(){return ie}},originalFunction:{configurable:!0,get:function(){return ce}}});var ue=W;u(ce,ue)}function R(W,Y){return g(W,Y),b(W,Y),W}var U=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function F(W,Y,J){var ie=W(o({maxArgs:2,isShallowEqual:!0},J,{isReact:!1}));Y.displayName||(Y.displayName=Y.name||"Component");function ce(ae,ue,V){this.props=ae,this.context=ue,this.updater=V,this.MoizedComponent=ie(Y)}return ce.prototype.isReactComponent={},ce.prototype.render=function(){return{$$typeof:U,type:this.MoizedComponent,props:this.props,ref:null,key:null,_owner:null}},u(Y,ce,["contextType","contextTypes"]),ce.displayName="Moized("+(Y.displayName||Y.name||"Component")+")",S(ce,Y.name,J.profileName),ce}function X(W){return function(Y){if(W>=Y.length)return Y;if(W===0)return[];if(W===1)return[Y[0]];if(W===2)return[Y[0],Y[1]];if(W===3)return[Y[0],Y[1],Y[2]];for(var J=[],ie=0;ie<W;ie++)J[ie]=Y[ie];return J}}function O(W,Y){for(var J=W.length,ie=0;ie<J;++ie)if(W[ie]===Y)return ie+1;return 0}function N(){var W=[],Y=[];return function(ie,ce){var ae=typeof ce;if(ae==="function"||ae==="symbol")return ce.toString();if(typeof ce=="object"){if(W.length){var ue=O(W,this);ue===0?W[W.length]=this:(W.splice(ue),Y.splice(ue)),Y[Y.length]=ie;var V=O(W,ce);if(V!==0)return"[ref="+(Y.slice(0,V).join(".")||".")+"]"}else W[0]=ce,Y[0]=ie;return ce}return""+ce}}function G(W){var Y=typeof W;return W&&(Y==="object"||Y==="function")?JSON.stringify(W,N()):W}function H(W){for(var Y="|",J=0;J<W.length;J++)Y+=G(W[J])+"|";return[Y]}function K(W){return typeof W.serializer=="function"?W.serializer:H}function $(W,Y){return W[0]===Y[0]}function z(W){if(typeof W=="function")return function(Y,J,ie){return W(ie.cache,ie.options,ie)}}function Q(W){return W.matchesArg||W.isDeepEqual&&n.deepEqual||W.isShallowEqual&&n.shallowEqual||n.sameValueZeroEqual}function oe(W){return W.matchesKey||W.isSerialized&&$||void 0}function Z(W){return f(W.isSerialized&&K(W),typeof W.transformArgs=="function"&&W.transformArgs,typeof W.maxArgs=="number"&&X(W.maxArgs))}function le(W){var Y=W.options.updateCacheForKey,J=function(){for(var ce=arguments.length,ae=new Array(ce),ue=0;ue<ce;ue++)ae[ue]=arguments[ue];if(!Y(ae))return W.apply(this,ae);var V=W.fn.apply(this,ae);return W.set(ae,V),V};return u(W,J),J}var k=["matchesArg","isDeepEqual","isPromise","isReact","isSerialized","isShallowEqual","matchesKey","maxAge","maxArgs","maxSize","onCacheAdd","onCacheChange","onCacheHit","onExpire","profileName","serializer","updateCacheForKey","transformArgs","updateExpire"],q=function W(Y,J){var ie=J||c;if(d(Y)){var ce=Y.originalFunction,ae=l(Y.options,ie);return W(ce,ae)}if(typeof Y=="object")return function(We,ee){if(typeof We=="function"){var pe=l(Y,ee);return W(We,pe)}var ve=l(Y,We);return W(ve)};if(ie.isReact)return F(W,Y,ie);var ue=o({},c,ie,{maxAge:typeof ie.maxAge=="number"&&ie.maxAge>=0?ie.maxAge:c.maxAge,maxArgs:typeof ie.maxArgs=="number"&&ie.maxArgs>=0?ie.maxArgs:c.maxArgs,maxSize:typeof ie.maxSize=="number"&&ie.maxSize>=0?ie.maxSize:c.maxSize,profileName:ie.profileName||x(Y)}),V=[];ue.matchesArg,ue.isDeepEqual;var B=ue.isPromise;ue.isReact,ue.isSerialized,ue.isShallowEqual,ue.matchesKey,ue.maxAge,ue.maxArgs;var re=ue.maxSize,me=ue.onCacheAdd,_e=ue.onCacheChange,ye=ue.onCacheHit;ue.onExpire,ue.profileName,ue.serializer;var Me=ue.updateCacheForKey;ue.transformArgs,ue.updateExpire;var Se=a(ue,k),he=Q(ue),Ee=oe(ue),Ae=D(V,ue,he,Ee),Ie=E(ue),be=Z(ue),we=o({},Se,{isEqual:he,isMatchingKey:Ee,isPromise:B,maxSize:re,onCacheAdd:z(r(me,Ae.onCacheAdd,Ie.onCacheAdd)),onCacheChange:z(_e),onCacheHit:z(r(ye,Ae.onCacheHit,Ie.onCacheHit)),transformKey:be}),Oe=t(Y,we),Be=R(Oe,{expirations:V,options:ue,originalFunction:Y});return Me&&(Be=le(Be)),S(Be,Y.name,ie.profileName),Be};q.clearStats=w,q.collectStats=T,q.compose=function(){return f.apply(void 0,arguments)||q},q.deep=q({isDeepEqual:!0}),q.getStats=_,q.infinite=q({maxSize:1/0}),q.isCollectingStats=function(){return P.isCollectingStats},q.isMoized=function(Y){return typeof Y=="function"&&!!Y.isMoized},q.matchesArg=function(W){return q({matchesArg:W})},q.matchesKey=function(W){return q({matchesKey:W})};function te(W,Y){if(Y===!0)return q({maxAge:W,updateExpire:Y});if(typeof Y=="object"){var J=Y.onExpire,ie=Y.updateExpire;return q({maxAge:W,onExpire:J,updateExpire:ie})}return q(typeof Y=="function"?{maxAge:W,onExpire:Y,updateExpire:!0}:{maxAge:W})}return q.maxAge=te,q.maxArgs=function(W){return q({maxArgs:W})},q.maxSize=function(W){return q({maxSize:W})},q.profile=function(W){return q({profileName:W})},q.promise=q({isPromise:!0,updateExpire:!0}),q.react=q({isReact:!0}),q.serialize=q({isSerialized:!0}),q.serializeWith=function(W){return q({isSerialized:!0,serializer:W})},q.shallow=q({isShallowEqual:!0}),q.transformArgs=function(W){return q({transformArgs:W})},q.updateCacheForKey=function(W){return q({updateCacheForKey:W})},Object.defineProperty(q,"default",{configurable:!1,enumerable:!1,value:q,writable:!1}),q})})($u);const Ze=Ia,Rl=Symbol("Comlink.proxy"),Ju=Symbol("Comlink.endpoint"),Qu=Symbol("Comlink.releaseProxy"),La=Symbol("Comlink.thrown"),Il=i=>typeof i=="object"&&i!==null||typeof i=="function",ef={canHandle:i=>Il(i)&&i[Rl],serialize(i){const{port1:e,port2:t}=new MessageChannel;return Cl(i,e),[t,[t]]},deserialize(i){return i.start(),so(i)}},tf={canHandle:i=>Il(i)&&La in i,serialize({value:i}){let e;return i instanceof Error?e={isError:!0,value:{message:i.message,name:i.name,stack:i.stack}}:e={isError:!1,value:i},[e,[]]},deserialize(i){throw i.isError?Object.assign(new Error(i.value.message),i.value):i.value}},Ll=new Map([["proxy",ef],["throw",tf]]);function Cl(i,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:o,type:a,path:c}=Object.assign({path:[]},n.data),r=(n.data.argumentList||[]).map(Un);let f;try{const s=c.slice(0,-1).reduce((l,d)=>l[d],i),h=c.reduce((l,d)=>l[d],i);switch(a){case"GET":f=h;break;case"SET":s[c.slice(-1)[0]]=Un(n.data.value),f=!0;break;case"APPLY":f=h.apply(s,r);break;case"CONSTRUCT":{const l=new h(...r);f=Zi(l)}break;case"ENDPOINT":{const{port1:l,port2:d}=new MessageChannel;Cl(i,d),f=of(l,[l])}break;case"RELEASE":f=void 0;break;default:return}}catch(s){f={value:s,[La]:0}}Promise.resolve(f).catch(s=>({value:s,[La]:0})).then(s=>{const[h,l]=ts(s);e.postMessage(Object.assign(Object.assign({},h),{id:o}),l),a==="RELEASE"&&(e.removeEventListener("message",t),Ol(e))})}),e.start&&e.start()}function nf(i){return i.constructor.name==="MessagePort"}function Ol(i){nf(i)&&i.close()}function so(i,e){return Ca(i,[],e)}function _r(i){if(i)throw new Error("Proxy has been released and is not useable")}function Ca(i,e=[],t=function(){}){let n=!1;const o=new Proxy(t,{get(a,c){if(_r(n),c===Qu)return()=>Xn(i,{type:"RELEASE",path:e.map(r=>r.toString())}).then(()=>{Ol(i),n=!0});if(c==="then"){if(e.length===0)return{then:()=>o};const r=Xn(i,{type:"GET",path:e.map(f=>f.toString())}).then(Un);return r.then.bind(r)}return Ca(i,[...e,c])},set(a,c,r){_r(n);const[f,s]=ts(r);return Xn(i,{type:"SET",path:[...e,c].map(h=>h.toString()),value:f},s).then(Un)},apply(a,c,r){_r(n);const f=e[e.length-1];if(f===Ju)return Xn(i,{type:"ENDPOINT"}).then(Un);if(f==="bind")return Ca(i,e.slice(0,-1));const[s,h]=Ss(r);return Xn(i,{type:"APPLY",path:e.map(l=>l.toString()),argumentList:s},h).then(Un)},construct(a,c){_r(n);const[r,f]=Ss(c);return Xn(i,{type:"CONSTRUCT",path:e.map(s=>s.toString()),argumentList:r},f).then(Un)}});return o}function rf(i){return Array.prototype.concat.apply([],i)}function Ss(i){const e=i.map(ts);return[e.map(t=>t[0]),rf(e.map(t=>t[1]))]}const Nl=new WeakMap;function of(i,e){return Nl.set(i,e),i}function Zi(i){return Object.assign(i,{[Rl]:!0})}function ts(i){for(const[e,t]of Ll)if(t.canHandle(i)){const[n,o]=t.serialize(i);return[{type:"HANDLER",name:e,value:n},o]}return[{type:"RAW",value:i},Nl.get(i)||[]]}function Un(i){switch(i.type){case"HANDLER":return Ll.get(i.name).deserialize(i.value);case"RAW":return i.value}}function Xn(i,e,t){return new Promise(n=>{const o=af();i.addEventListener("message",function a(c){!c.data||!c.data.id||c.data.id!==o||(i.removeEventListener("message",a),n(c.data))}),i.start&&i.start(),i.postMessage(Object.assign({id:o},e),t)})}function af(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const ns="151",sf=0,Ts=1,cf=2,Ul=1,lf=2,Wi=3,Tn=0,yt=1,cn=2,Sn=0,pi=1,Es=2,bs=3,Ms=4,uf=5,ui=100,ff=101,df=102,As=103,ws=104,hf=200,pf=201,mf=202,gf=203,Dl=204,Fl=205,_f=206,vf=207,yf=208,xf=209,Sf=210,Tf=0,Ef=1,bf=2,Jr=3,Mf=4,Af=5,wf=6,Pf=7,Gl=0,Rf=1,If=2,ln=0,Lf=1,Cf=2,Of=3,Nf=4,Uf=5,Bl=300,yi=301,xi=302,Oa=303,Na=304,co=306,Ua=1e3,Vt=1001,Da=1002,gt=1003,Ps=1004,wo=1005,It=1006,Df=1007,Ji=1008,Vn=1009,Ff=1010,Gf=1011,Vl=1012,Bf=1013,Fn=1014,Gn=1015,Qi=1016,Vf=1017,zf=1018,mi=1020,kf=1021,zt=1023,Hf=1024,Wf=1025,Bn=1026,Si=1027,Xf=1028,jf=1029,$f=1030,Yf=1031,qf=1033,Po=33776,Ro=33777,Io=33778,Lo=33779,Rs=35840,Is=35841,Ls=35842,Cs=35843,Kf=36196,Os=37492,Ns=37496,Us=37808,Ds=37809,Fs=37810,Gs=37811,Bs=37812,Vs=37813,zs=37814,ks=37815,Hs=37816,Ws=37817,Xs=37818,js=37819,$s=37820,Ys=37821,Co=36492,Zf=36283,qs=36284,Ks=36285,Zs=36286,zn=3e3,$e=3001,Jf=3200,Qf=3201,ed=0,td=1,jt="srgb",er="srgb-linear",zl="display-p3",Oo=7680,nd=519,Fa=35044,Js="300 es",Ga=1035;class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],No=Math.PI/180,Ba=180/Math.PI;function cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function id(i,e){return(i%e+e)%e}function Uo(i,e,t){return(1-t)*i+t*e}function Qs(i){return(i&i-1)===0&&i!==0}function rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*o+e.x,this.y=a*o+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,o,a,c,r,f,s){const h=this.elements;return h[0]=e,h[1]=o,h[2]=r,h[3]=t,h[4]=a,h[5]=f,h[6]=n,h[7]=c,h[8]=s,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,c=n[0],r=n[3],f=n[6],s=n[1],h=n[4],l=n[7],d=n[2],S=n[5],p=n[8],C=o[0],y=o[3],m=o[6],D=o[1],P=o[4],M=o[7],w=o[2],T=o[5],A=o[8];return a[0]=c*C+r*D+f*w,a[3]=c*y+r*P+f*T,a[6]=c*m+r*M+f*A,a[1]=s*C+h*D+l*w,a[4]=s*y+h*P+l*T,a[7]=s*m+h*M+l*A,a[2]=d*C+S*D+p*w,a[5]=d*y+S*P+p*T,a[8]=d*m+S*M+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],r=e[5],f=e[6],s=e[7],h=e[8];return t*c*h-t*r*s-n*a*h+n*r*f+o*a*s-o*c*f}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],r=e[5],f=e[6],s=e[7],h=e[8],l=h*c-r*s,d=r*f-h*a,S=s*a-c*f,p=t*l+n*d+o*S;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/p;return e[0]=l*C,e[1]=(o*s-h*n)*C,e[2]=(r*n-o*c)*C,e[3]=d*C,e[4]=(h*t-o*f)*C,e[5]=(o*a-r*t)*C,e[6]=S*C,e[7]=(n*f-s*t)*C,e[8]=(c*t-n*a)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,c,r){const f=Math.cos(a),s=Math.sin(a);return this.set(n*f,n*s,-n*(f*c+s*r)+c+e,-o*s,o*f,-o*(-s*c+f*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Ve;function kl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const od=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ad=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function sd(i){return i.convertSRGBToLinear().applyMatrix3(ad)}function cd(i){return i.applyMatrix3(od).convertLinearToSRGB()}const ld={[er]:i=>i,[jt]:i=>i.convertSRGBToLinear(),[zl]:sd},ud={[er]:i=>i,[jt]:i=>i.convertLinearToSRGB(),[zl]:cd},Et={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return er},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ld[e],o=ud[t];if(n===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return o(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let jn;class Hl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jn===void 0&&(jn=Qr("canvas")),jn.width=e.width,jn.height=e.height;const n=jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=gi(a[c]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Wl{constructor(e=null){this.isSource=!0,this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,r=o.length;c<r;c++)o[c].isDataTexture?a.push(Go(o[c].image)):a.push(Go(o[c]))}else a=Go(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;class _t extends Hn{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,n=Vt,o=Vt,a=It,c=Ji,r=zt,f=Vn,s=_t.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=cr(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=s,this.format=r,this.internalFormat=null,this.type=f,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=Bl;_t.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,o=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*o+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const f=e.elements,s=f[0],h=f[4],l=f[8],d=f[1],S=f[5],p=f[9],C=f[2],y=f[6],m=f[10];if(Math.abs(h-d)<.01&&Math.abs(l-C)<.01&&Math.abs(p-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+C)<.1&&Math.abs(p+y)<.1&&Math.abs(s+S+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(s+1)/2,M=(S+1)/2,w=(m+1)/2,T=(h+d)/4,A=(l+C)/4,L=(p+y)/4;return P>M&&P>w?P<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(P),o=T/n,a=A/n):M>w?M<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(M),n=T/o,a=L/o):w<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(w),n=A/a,o=L/a),this.set(n,o,a,t),this}let D=Math.sqrt((y-p)*(y-p)+(l-C)*(l-C)+(d-h)*(d-h));return Math.abs(D)<.001&&(D=1),this.x=(y-p)/D,this.y=(l-C)/D,this.z=(d-h)/D,this.w=Math.acos((s+S+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class un extends Hn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const o={width:e,height:t,depth:1};this.texture=new _t(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:It,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xl extends _t{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=gt,this.minFilter=gt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dd extends _t{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=gt,this.minFilter=gt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,c,r){let f=n[o+0],s=n[o+1],h=n[o+2],l=n[o+3];const d=a[c+0],S=a[c+1],p=a[c+2],C=a[c+3];if(r===0){e[t+0]=f,e[t+1]=s,e[t+2]=h,e[t+3]=l;return}if(r===1){e[t+0]=d,e[t+1]=S,e[t+2]=p,e[t+3]=C;return}if(l!==C||f!==d||s!==S||h!==p){let y=1-r;const m=f*d+s*S+h*p+l*C,D=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const w=Math.sqrt(P),T=Math.atan2(w,m*D);y=Math.sin(y*T)/w,r=Math.sin(r*T)/w}const M=r*D;if(f=f*y+d*M,s=s*y+S*M,h=h*y+p*M,l=l*y+C*M,y===1-r){const w=1/Math.sqrt(f*f+s*s+h*h+l*l);f*=w,s*=w,h*=w,l*=w}}e[t]=f,e[t+1]=s,e[t+2]=h,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,o,a,c){const r=n[o],f=n[o+1],s=n[o+2],h=n[o+3],l=a[c],d=a[c+1],S=a[c+2],p=a[c+3];return e[t]=r*p+h*l+f*S-s*d,e[t+1]=f*p+h*d+s*l-r*S,e[t+2]=s*p+h*S+r*d-f*l,e[t+3]=h*p-r*l-f*d-s*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,o=e._y,a=e._z,c=e._order,r=Math.cos,f=Math.sin,s=r(n/2),h=r(o/2),l=r(a/2),d=f(n/2),S=f(o/2),p=f(a/2);switch(c){case"XYZ":this._x=d*h*l+s*S*p,this._y=s*S*l-d*h*p,this._z=s*h*p+d*S*l,this._w=s*h*l-d*S*p;break;case"YXZ":this._x=d*h*l+s*S*p,this._y=s*S*l-d*h*p,this._z=s*h*p-d*S*l,this._w=s*h*l+d*S*p;break;case"ZXY":this._x=d*h*l-s*S*p,this._y=s*S*l+d*h*p,this._z=s*h*p+d*S*l,this._w=s*h*l-d*S*p;break;case"ZYX":this._x=d*h*l-s*S*p,this._y=s*S*l+d*h*p,this._z=s*h*p-d*S*l,this._w=s*h*l+d*S*p;break;case"YZX":this._x=d*h*l+s*S*p,this._y=s*S*l+d*h*p,this._z=s*h*p-d*S*l,this._w=s*h*l-d*S*p;break;case"XZY":this._x=d*h*l-s*S*p,this._y=s*S*l-d*h*p,this._z=s*h*p+d*S*l,this._w=s*h*l+d*S*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],c=t[1],r=t[5],f=t[9],s=t[2],h=t[6],l=t[10],d=n+r+l;if(d>0){const S=.5/Math.sqrt(d+1);this._w=.25/S,this._x=(h-f)*S,this._y=(a-s)*S,this._z=(c-o)*S}else if(n>r&&n>l){const S=2*Math.sqrt(1+n-r-l);this._w=(h-f)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(a+s)/S}else if(r>l){const S=2*Math.sqrt(1+r-n-l);this._w=(a-s)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(f+h)/S}else{const S=2*Math.sqrt(1+l-n-r);this._w=(c-o)/S,this._x=(a+s)/S,this._y=(f+h)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,c=e._w,r=t._x,f=t._y,s=t._z,h=t._w;return this._x=n*h+c*r+o*s-a*f,this._y=o*h+c*f+a*r-n*s,this._z=a*h+c*s+n*f-o*r,this._w=c*h-n*r-o*f-a*s,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,c=this._w;let r=c*e._w+n*e._x+o*e._y+a*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=c,this._x=n,this._y=o,this._z=a,this;const f=1-r*r;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*n+t*this._x,this._y=S*o+t*this._y,this._z=S*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const s=Math.sqrt(f),h=Math.atan2(s,r),l=Math.sin((1-t)*h)/s,d=Math.sin(t*h)/s;return this._w=c*l+this._w*d,this._x=n*l+this._x*d,this._y=o*l+this._y*d,this._z=a*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(o),n*Math.sin(a),n*Math.cos(a),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,t=0,n=0){fe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,c=e.y,r=e.z,f=e.w,s=f*t+c*o-r*n,h=f*n+r*t-a*o,l=f*o+a*n-c*t,d=-a*t-c*n-r*o;return this.x=s*f+d*-a+h*-r-l*-c,this.y=h*f+d*-c+l*-a-s*-r,this.z=l*f+d*-r+s*-c-h*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,c=t.x,r=t.y,f=t.z;return this.x=o*f-a*r,this.y=a*c-n*f,this.z=n*r-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new fe,ec=new lr;class ur{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox),$n.applyMatrix4(e.matrixWorld),this.union($n);else{const o=e.geometry;if(o!==void 0)if(t&&o.attributes!==void 0&&o.attributes.position!==void 0){const a=o.attributes.position;for(let c=0,r=a.count;c<r;c++)Qt.fromBufferAttribute(a,c).applyMatrix4(e.matrixWorld),this.expandByPoint(Qt)}else o.boundingBox===null&&o.computeBoundingBox(),$n.copy(o.boundingBox),$n.applyMatrix4(e.matrixWorld),this.union($n)}const n=e.children;for(let o=0,a=n.length;o<a;o++)this.expandByObject(n[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),yr.subVectors(this.max,Ui),Yn.subVectors(e.a,Ui),qn.subVectors(e.b,Ui),Kn.subVectors(e.c,Ui),mn.subVectors(qn,Yn),gn.subVectors(Kn,qn),Rn.subVectors(Yn,Kn);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Rn.z,Rn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Rn.z,0,-Rn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Rn.y,Rn.x,0];return!Vo(t,Yn,qn,Kn,yr)||(t=[1,0,0,0,1,0,0,0,1],!Vo(t,Yn,qn,Kn,yr))?!1:(xr.crossVectors(mn,gn),t=[xr.x,xr.y,xr.z],Vo(t,Yn,qn,Kn,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Qt=new fe,$n=new ur,Yn=new fe,qn=new fe,Kn=new fe,mn=new fe,gn=new fe,Rn=new fe,Ui=new fe,yr=new fe,xr=new fe,In=new fe;function Vo(i,e,t,n,o){for(let a=0,c=i.length-3;a<=c;a+=3){In.fromArray(i,a);const r=o.x*Math.abs(In.x)+o.y*Math.abs(In.y)+o.z*Math.abs(In.z),f=e.dot(In),s=t.dot(In),h=n.dot(In);if(Math.max(-Math.max(f,s,h),Math.min(f,s,h))>r)return!1}return!0}const hd=new ur,Di=new fe,zo=new fe;class is{constructor(e=new fe,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hd.setFromPoints(e).getCenter(n);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Di,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(zo)),this.expandByPoint(Di.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new fe,ko=new fe,Sr=new fe,_n=new fe,Ho=new fe,Tr=new fe,Wo=new fe;class pd{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){ko.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(ko);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Sr),r=_n.dot(this.direction),f=-_n.dot(Sr),s=_n.lengthSq(),h=Math.abs(1-c*c);let l,d,S,p;if(h>0)if(l=c*f-r,d=c*r-f,p=a*h,l>=0)if(d>=-p)if(d<=p){const C=1/h;l*=C,d*=C,S=l*(l+c*d+2*r)+d*(c*l+d+2*f)+s}else d=a,l=Math.max(0,-(c*d+r)),S=-l*l+d*(d+2*f)+s;else d=-a,l=Math.max(0,-(c*d+r)),S=-l*l+d*(d+2*f)+s;else d<=-p?(l=Math.max(0,-(-c*a+r)),d=l>0?-a:Math.min(Math.max(-a,-f),a),S=-l*l+d*(d+2*f)+s):d<=p?(l=0,d=Math.min(Math.max(-a,-f),a),S=d*(d+2*f)+s):(l=Math.max(0,-(c*a+r)),d=l>0?a:Math.min(Math.max(-a,-f),a),S=-l*l+d*(d+2*f)+s);else d=c>0?-a:a,l=Math.max(0,-(c*d+r)),S=-l*l+d*(d+2*f)+s;return n&&n.copy(this.origin).addScaledVector(this.direction,l),o&&o.copy(ko).addScaledVector(Sr,d),S}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),o=en.dot(en)-n*n,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),r=n-c,f=n+c;return f<0?null:r<0?this.at(f,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,c,r,f;const s=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return s>=0?(n=(e.min.x-d.x)*s,o=(e.max.x-d.x)*s):(n=(e.max.x-d.x)*s,o=(e.min.x-d.x)*s),h>=0?(a=(e.min.y-d.y)*h,c=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,c=(e.min.y-d.y)*h),n>c||a>o||((a>n||isNaN(n))&&(n=a),(c<o||isNaN(o))&&(o=c),l>=0?(r=(e.min.z-d.z)*l,f=(e.max.z-d.z)*l):(r=(e.max.z-d.z)*l,f=(e.min.z-d.z)*l),n>f||r>o)||((r>n||n!==n)&&(n=r),(f<o||o!==o)&&(o=f),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,o,a){Ho.subVectors(t,e),Tr.subVectors(n,e),Wo.crossVectors(Ho,Tr);let c=this.direction.dot(Wo),r;if(c>0){if(o)return null;r=1}else if(c<0)r=-1,c=-c;else return null;_n.subVectors(this.origin,e);const f=r*this.direction.dot(Tr.crossVectors(_n,Tr));if(f<0)return null;const s=r*this.direction.dot(Ho.cross(_n));if(s<0||f+s>c)return null;const h=-r*_n.dot(Wo);return h<0?null:this.at(h/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,o,a,c,r,f,s,h,l,d,S,p,C,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=o,m[1]=a,m[5]=c,m[9]=r,m[13]=f,m[2]=s,m[6]=h,m[10]=l,m[14]=d,m[3]=S,m[7]=p,m[11]=C,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/Zn.setFromMatrixColumn(e,0).length(),a=1/Zn.setFromMatrixColumn(e,1).length(),c=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,c=Math.cos(n),r=Math.sin(n),f=Math.cos(o),s=Math.sin(o),h=Math.cos(a),l=Math.sin(a);if(e.order==="XYZ"){const d=c*h,S=c*l,p=r*h,C=r*l;t[0]=f*h,t[4]=-f*l,t[8]=s,t[1]=S+p*s,t[5]=d-C*s,t[9]=-r*f,t[2]=C-d*s,t[6]=p+S*s,t[10]=c*f}else if(e.order==="YXZ"){const d=f*h,S=f*l,p=s*h,C=s*l;t[0]=d+C*r,t[4]=p*r-S,t[8]=c*s,t[1]=c*l,t[5]=c*h,t[9]=-r,t[2]=S*r-p,t[6]=C+d*r,t[10]=c*f}else if(e.order==="ZXY"){const d=f*h,S=f*l,p=s*h,C=s*l;t[0]=d-C*r,t[4]=-c*l,t[8]=p+S*r,t[1]=S+p*r,t[5]=c*h,t[9]=C-d*r,t[2]=-c*s,t[6]=r,t[10]=c*f}else if(e.order==="ZYX"){const d=c*h,S=c*l,p=r*h,C=r*l;t[0]=f*h,t[4]=p*s-S,t[8]=d*s+C,t[1]=f*l,t[5]=C*s+d,t[9]=S*s-p,t[2]=-s,t[6]=r*f,t[10]=c*f}else if(e.order==="YZX"){const d=c*f,S=c*s,p=r*f,C=r*s;t[0]=f*h,t[4]=C-d*l,t[8]=p*l+S,t[1]=l,t[5]=c*h,t[9]=-r*h,t[2]=-s*h,t[6]=S*l+p,t[10]=d-C*l}else if(e.order==="XZY"){const d=c*f,S=c*s,p=r*f,C=r*s;t[0]=f*h,t[4]=-l,t[8]=s*h,t[1]=d*l+C,t[5]=c*h,t[9]=S*l-p,t[2]=p*l-S,t[6]=r*h,t[10]=C*l+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,n){const o=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),vn.crossVectors(n,bt),vn.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),vn.crossVectors(n,bt)),vn.normalize(),Er.crossVectors(bt,vn),o[0]=vn.x,o[4]=Er.x,o[8]=bt.x,o[1]=vn.y,o[5]=Er.y,o[9]=bt.y,o[2]=vn.z,o[6]=Er.z,o[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,c=n[0],r=n[4],f=n[8],s=n[12],h=n[1],l=n[5],d=n[9],S=n[13],p=n[2],C=n[6],y=n[10],m=n[14],D=n[3],P=n[7],M=n[11],w=n[15],T=o[0],A=o[4],L=o[8],x=o[12],I=o[1],_=o[5],E=o[9],v=o[13],u=o[2],g=o[6],b=o[10],R=o[14],U=o[3],F=o[7],X=o[11],O=o[15];return a[0]=c*T+r*I+f*u+s*U,a[4]=c*A+r*_+f*g+s*F,a[8]=c*L+r*E+f*b+s*X,a[12]=c*x+r*v+f*R+s*O,a[1]=h*T+l*I+d*u+S*U,a[5]=h*A+l*_+d*g+S*F,a[9]=h*L+l*E+d*b+S*X,a[13]=h*x+l*v+d*R+S*O,a[2]=p*T+C*I+y*u+m*U,a[6]=p*A+C*_+y*g+m*F,a[10]=p*L+C*E+y*b+m*X,a[14]=p*x+C*v+y*R+m*O,a[3]=D*T+P*I+M*u+w*U,a[7]=D*A+P*_+M*g+w*F,a[11]=D*L+P*E+M*b+w*X,a[15]=D*x+P*v+M*R+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],c=e[1],r=e[5],f=e[9],s=e[13],h=e[2],l=e[6],d=e[10],S=e[14],p=e[3],C=e[7],y=e[11],m=e[15];return p*(+a*f*l-o*s*l-a*r*d+n*s*d+o*r*S-n*f*S)+C*(+t*f*S-t*s*d+a*c*d-o*c*S+o*s*h-a*f*h)+y*(+t*s*l-t*r*S-a*c*l+n*c*S+a*r*h-n*s*h)+m*(-o*r*h-t*f*l+t*r*d+o*c*l-n*c*d+n*f*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],c=e[4],r=e[5],f=e[6],s=e[7],h=e[8],l=e[9],d=e[10],S=e[11],p=e[12],C=e[13],y=e[14],m=e[15],D=l*y*s-C*d*s+C*f*S-r*y*S-l*f*m+r*d*m,P=p*d*s-h*y*s-p*f*S+c*y*S+h*f*m-c*d*m,M=h*C*s-p*l*s+p*r*S-c*C*S-h*r*m+c*l*m,w=p*l*f-h*C*f-p*r*d+c*C*d+h*r*y-c*l*y,T=t*D+n*P+o*M+a*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=D*A,e[1]=(C*d*a-l*y*a-C*o*S+n*y*S+l*o*m-n*d*m)*A,e[2]=(r*y*a-C*f*a+C*o*s-n*y*s-r*o*m+n*f*m)*A,e[3]=(l*f*a-r*d*a-l*o*s+n*d*s+r*o*S-n*f*S)*A,e[4]=P*A,e[5]=(h*y*a-p*d*a+p*o*S-t*y*S-h*o*m+t*d*m)*A,e[6]=(p*f*a-c*y*a-p*o*s+t*y*s+c*o*m-t*f*m)*A,e[7]=(c*d*a-h*f*a+h*o*s-t*d*s-c*o*S+t*f*S)*A,e[8]=M*A,e[9]=(p*l*a-h*C*a-p*n*S+t*C*S+h*n*m-t*l*m)*A,e[10]=(c*C*a-p*r*a+p*n*s-t*C*s-c*n*m+t*r*m)*A,e[11]=(h*r*a-c*l*a-h*n*s+t*l*s+c*n*S-t*r*S)*A,e[12]=w*A,e[13]=(h*C*o-p*l*o+p*n*d-t*C*d-h*n*y+t*l*y)*A,e[14]=(p*r*o-c*C*o-p*n*f+t*C*f+c*n*y-t*r*y)*A,e[15]=(c*l*o-h*r*o+h*n*f-t*l*f-c*n*d+t*r*d)*A,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,c=e.x,r=e.y,f=e.z,s=a*c,h=a*r;return this.set(s*c+n,s*r-o*f,s*f+o*r,0,s*r+o*f,h*r+n,h*f-o*c,0,s*f-o*r,h*f+o*c,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,c){return this.set(1,n,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,c=t._y,r=t._z,f=t._w,s=a+a,h=c+c,l=r+r,d=a*s,S=a*h,p=a*l,C=c*h,y=c*l,m=r*l,D=f*s,P=f*h,M=f*l,w=n.x,T=n.y,A=n.z;return o[0]=(1-(C+m))*w,o[1]=(S+M)*w,o[2]=(p-P)*w,o[3]=0,o[4]=(S-M)*T,o[5]=(1-(d+m))*T,o[6]=(y+D)*T,o[7]=0,o[8]=(p+P)*A,o[9]=(y-D)*A,o[10]=(1-(d+C))*A,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=Zn.set(o[0],o[1],o[2]).length();const c=Zn.set(o[4],o[5],o[6]).length(),r=Zn.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],Ut.copy(this);const s=1/a,h=1/c,l=1/r;return Ut.elements[0]*=s,Ut.elements[1]*=s,Ut.elements[2]*=s,Ut.elements[4]*=h,Ut.elements[5]*=h,Ut.elements[6]*=h,Ut.elements[8]*=l,Ut.elements[9]*=l,Ut.elements[10]*=l,t.setFromRotationMatrix(Ut),n.x=a,n.y=c,n.z=r,this}makePerspective(e,t,n,o,a,c){const r=this.elements,f=2*a/(t-e),s=2*a/(n-o),h=(t+e)/(t-e),l=(n+o)/(n-o),d=-(c+a)/(c-a),S=-2*c*a/(c-a);return r[0]=f,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=s,r[9]=l,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=S,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,o,a,c){const r=this.elements,f=1/(t-e),s=1/(n-o),h=1/(c-a),l=(t+e)*f,d=(n+o)*s,S=(c+a)*h;return r[0]=2*f,r[4]=0,r[8]=0,r[12]=-l,r[1]=0,r[5]=2*s,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-S,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new fe,Ut=new Ke,md=new fe(0,0,0),gd=new fe(1,1,1),vn=new fe,Er=new fe,bt=new fe,tc=new Ke,nc=new lr;class lo{constructor(e=0,t=0,n=0,o=lo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],c=o[4],r=o[8],f=o[1],s=o[5],h=o[9],l=o[2],d=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(d,s),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,S),this._z=Math.atan2(f,s)):(this._y=Math.atan2(-l,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,S),this._z=Math.atan2(-c,s)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,S),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,s));break;case"YZX":this._z=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-h,s),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(r,S));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,s),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lo.DEFAULT_ORDER="XYZ";class jl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _d=0;const ic=new fe,Jn=new lr,tn=new Ke,br=new fe,Fi=new fe,vd=new fe,yd=new lr,rc=new fe(1,0,0),oc=new fe(0,1,0),ac=new fe(0,0,1),xd={type:"added"},sc={type:"removed"};class At extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new fe,t=new lo,n=new lr,o=new fe(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ve}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(rc,e)}rotateY(e){return this.rotateOnAxis(oc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rc,e)}translateY(e){return this.translateOnAxis(oc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Fi,br,this.up):tn.lookAt(br,Fi,this.up),this.quaternion.setFromRotationMatrix(tn),o&&(tn.extractRotation(o.matrixWorld),Jn.setFromRotationMatrix(tn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let o=0,a=this.children.length;o<a;o++){const c=this.children[o].getObjectsByProperty(e,t);c.length>0&&(n=n.concat(c))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++){const r=o[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(r,f){return r[f.uuid]===void 0&&(r[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const f=r.shapes;if(Array.isArray(f))for(let s=0,h=f.length;s<h;s++){const l=f[s];a(e.shapes,l)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let f=0,s=this.material.length;f<s;f++)r.push(a(e.materials,this.material[f]));o.material=r}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let r=0;r<this.children.length;r++)o.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let r=0;r<this.animations.length;r++){const f=this.animations[r];o.animations.push(a(e.animations,f))}}if(t){const r=c(e.geometries),f=c(e.materials),s=c(e.textures),h=c(e.images),l=c(e.shapes),d=c(e.skeletons),S=c(e.animations),p=c(e.nodes);r.length>0&&(n.geometries=r),f.length>0&&(n.materials=f),s.length>0&&(n.textures=s),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),S.length>0&&(n.animations=S),p.length>0&&(n.nodes=p)}return n.object=o,n;function c(r){const f=[];for(const s in r){const h=r[s];delete h.metadata,f.push(h)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}At.DEFAULT_UP=new fe(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dt=new fe,nn=new fe,Xo=new fe,rn=new fe,Qn=new fe,ei=new fe,cc=new fe,jo=new fe,$o=new fe,Yo=new fe;let Mr=!1;class Bt{constructor(e=new fe,t=new fe,n=new fe){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),Dt.subVectors(e,t),o.cross(Dt);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){Dt.subVectors(o,t),nn.subVectors(n,t),Xo.subVectors(e,t);const c=Dt.dot(Dt),r=Dt.dot(nn),f=Dt.dot(Xo),s=nn.dot(nn),h=nn.dot(Xo),l=c*s-r*r;if(l===0)return a.set(-2,-1,-1);const d=1/l,S=(s*f-r*h)*d,p=(c*h-r*f)*d;return a.set(1-S-p,p,S)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,n,o,a,c,r,f){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),this.getInterpolation(e,t,n,o,a,c,r,f)}static getInterpolation(e,t,n,o,a,c,r,f){return this.getBarycoord(e,t,n,o,rn),f.setScalar(0),f.addScaledVector(a,rn.x),f.addScaledVector(c,rn.y),f.addScaledVector(r,rn.z),f}static isFrontFacing(e,t,n,o){return Dt.subVectors(n,t),nn.subVectors(e,t),Dt.cross(nn).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Dt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,o,a){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}getInterpolation(e,t,n,o,a){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let c,r;Qn.subVectors(o,n),ei.subVectors(a,n),jo.subVectors(e,n);const f=Qn.dot(jo),s=ei.dot(jo);if(f<=0&&s<=0)return t.copy(n);$o.subVectors(e,o);const h=Qn.dot($o),l=ei.dot($o);if(h>=0&&l<=h)return t.copy(o);const d=f*l-h*s;if(d<=0&&f>=0&&h<=0)return c=f/(f-h),t.copy(n).addScaledVector(Qn,c);Yo.subVectors(e,a);const S=Qn.dot(Yo),p=ei.dot(Yo);if(p>=0&&S<=p)return t.copy(a);const C=S*s-f*p;if(C<=0&&s>=0&&p<=0)return r=s/(s-p),t.copy(n).addScaledVector(ei,r);const y=h*p-S*l;if(y<=0&&l-h>=0&&S-p>=0)return cc.subVectors(a,o),r=(l-h)/(l-h+(S-p)),t.copy(o).addScaledVector(cc,r);const m=1/(y+C+d);return c=C*m,r=d*m,t.copy(n).addScaledVector(Qn,c).addScaledVector(ei,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sd=0;class uo extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=pi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dl,this.blendDst=Fl,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const c=[];for(const r in a){const f=a[r];delete f.metadata,c.push(f)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ft={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function qo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,n,o=Et.workingColorSpace){if(e=id(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=qo(c,a,e+1/3),this.g=qo(c,a,e),this.b=qo(c,a,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=jt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],r=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Et.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Et.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const f=parseFloat(a[1])/360,s=parseFloat(a[2])/100,h=parseFloat(a[3])/100;return n(a[4]),this.setHSL(f,s,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=$l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Et.fromWorkingColorSpace(ft.copy(this),e),vt(ft.r*255,0,255)<<16^vt(ft.g*255,0,255)<<8^vt(ft.b*255,0,255)<<0}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,o=ft.g,a=ft.b,c=Math.max(n,o,a),r=Math.min(n,o,a);let f,s;const h=(r+c)/2;if(r===c)f=0,s=0;else{const l=c-r;switch(s=h<=.5?l/(c+r):l/(2-c-r),c){case n:f=(o-a)/l+(o<a?6:0);break;case o:f=(a-n)/l+2;break;case a:f=(n-o)/l+4;break}f/=6}return e.h=f,e.s=s,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=jt){Et.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,o=ft.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${o*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ft),Ft.h+=e,Ft.s+=t,Ft.l+=n,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ft),e.getHSL(Ar);const n=Uo(Ft.h,Ar.h,t),o=Uo(Ft.s,Ar.s,t),a=Uo(Ft.l,Ar.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new Ye;Ye.NAMES=$l;class Yl extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new fe,wr=new Xe;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),o=Tt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),o=Tt(o,this.array),a=Tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ql extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kl extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const Pt=new Ke,Ko=new At,ti=new fe,Mt=new ur,Gi=new ur,ot=new fe;class fn extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kl(e)?Kl:ql)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ve().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=[];for(let n=0,o=e.length;n<o;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];Mt.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new fe,1/0);return}if(e){const n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const r=t[a];Gi.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(Mt.min,Gi.min),Mt.expandByPoint(ot),ot.addVectors(Mt.max,Gi.max),Mt.expandByPoint(ot)):(Mt.expandByPoint(Gi.min),Mt.expandByPoint(Gi.max))}Mt.getCenter(n);let o=0;for(let a=0,c=e.count;a<c;a++)ot.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(ot));if(t)for(let a=0,c=t.length;a<c;a++){const r=t[a],f=this.morphTargetsRelative;for(let s=0,h=r.count;s<h;s++)ot.fromBufferAttribute(r,s),f&&(ti.fromBufferAttribute(e,s),ot.add(ti)),o=Math.max(o,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,o=t.position.array,a=t.normal.array,c=t.uv.array,r=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*r),4));const f=this.getAttribute("tangent").array,s=[],h=[];for(let I=0;I<r;I++)s[I]=new fe,h[I]=new fe;const l=new fe,d=new fe,S=new fe,p=new Xe,C=new Xe,y=new Xe,m=new fe,D=new fe;function P(I,_,E){l.fromArray(o,I*3),d.fromArray(o,_*3),S.fromArray(o,E*3),p.fromArray(c,I*2),C.fromArray(c,_*2),y.fromArray(c,E*2),d.sub(l),S.sub(l),C.sub(p),y.sub(p);const v=1/(C.x*y.y-y.x*C.y);isFinite(v)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(S,-C.y).multiplyScalar(v),D.copy(S).multiplyScalar(C.x).addScaledVector(d,-y.x).multiplyScalar(v),s[I].add(m),s[_].add(m),s[E].add(m),h[I].add(D),h[_].add(D),h[E].add(D))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let I=0,_=M.length;I<_;++I){const E=M[I],v=E.start,u=E.count;for(let g=v,b=v+u;g<b;g+=3)P(n[g+0],n[g+1],n[g+2])}const w=new fe,T=new fe,A=new fe,L=new fe;function x(I){A.fromArray(a,I*3),L.copy(A);const _=s[I];w.copy(_),w.sub(A.multiplyScalar(A.dot(_))).normalize(),T.crossVectors(L,_);const v=T.dot(h[I])<0?-1:1;f[I*4]=w.x,f[I*4+1]=w.y,f[I*4+2]=w.z,f[I*4+3]=v}for(let I=0,_=M.length;I<_;++I){const E=M[I],v=E.start,u=E.count;for(let g=v,b=v+u;g<b;g+=3)x(n[g+0]),x(n[g+1]),x(n[g+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,S=n.count;d<S;d++)n.setXYZ(d,0,0,0);const o=new fe,a=new fe,c=new fe,r=new fe,f=new fe,s=new fe,h=new fe,l=new fe;if(e)for(let d=0,S=e.count;d<S;d+=3){const p=e.getX(d+0),C=e.getX(d+1),y=e.getX(d+2);o.fromBufferAttribute(t,p),a.fromBufferAttribute(t,C),c.fromBufferAttribute(t,y),h.subVectors(c,a),l.subVectors(o,a),h.cross(l),r.fromBufferAttribute(n,p),f.fromBufferAttribute(n,C),s.fromBufferAttribute(n,y),r.add(h),f.add(h),s.add(h),n.setXYZ(p,r.x,r.y,r.z),n.setXYZ(C,f.x,f.y,f.z),n.setXYZ(y,s.x,s.y,s.z)}else for(let d=0,S=t.count;d<S;d+=3)o.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),c.fromBufferAttribute(t,d+2),h.subVectors(c,a),l.subVectors(o,a),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(r,f){const s=r.array,h=r.itemSize,l=r.normalized,d=new s.constructor(f.length*h);let S=0,p=0;for(let C=0,y=f.length;C<y;C++){r.isInterleavedBufferAttribute?S=f[C]*r.data.stride+r.offset:S=f[C]*h;for(let m=0;m<h;m++)d[p++]=s[S++]}return new Ht(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,o=this.attributes;for(const r in o){const f=o[r],s=e(f,n);t.setAttribute(r,s)}const a=this.morphAttributes;for(const r in a){const f=[],s=a[r];for(let h=0,l=s.length;h<l;h++){const d=s[h],S=e(d,n);f.push(S)}t.morphAttributes[r]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let r=0,f=c.length;r<f;r++){const s=c[r];t.addGroup(s.start,s.count,s.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const s in f)f[s]!==void 0&&(e[s]=f[s]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const s=n[f];e.data.attributes[f]=s.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const s=this.morphAttributes[f],h=[];for(let l=0,d=s.length;l<d;l++){const S=s[l];h.push(S.toJSON(e.data))}h.length>0&&(o[f]=h,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const o=e.attributes;for(const s in o){const h=o[s];this.setAttribute(s,h.clone(t))}const a=e.morphAttributes;for(const s in a){const h=[],l=a[s];for(let d=0,S=l.length;d<S;d++)h.push(l[d].clone(t));this.morphAttributes[s]=h}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let s=0,h=c.length;s<h;s++){const l=c[s];this.addGroup(l.start,l.count,l.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new Ke,Wt=new pd,Pr=new is,uc=new fe,ni=new fe,ii=new fe,ri=new fe,Zo=new fe,Rr=new fe,Ir=new Xe,Lr=new Xe,Cr=new Xe,fc=new fe,dc=new fe,hc=new fe,Or=new fe,Nr=new fe;class kt extends At{constructor(e=new fn,t=new Yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const r=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const r=this.morphTargetInfluences;if(a&&r){Rr.set(0,0,0);for(let f=0,s=a.length;f<s;f++){const h=r[f],l=a[f];h!==0&&(Zo.fromBufferAttribute(l,e),c?Rr.addScaledVector(Zo,h):Rr.addScaledVector(Zo.sub(t),h))}t.add(Rr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(a),Wt.copy(e.ray).recast(e.near),Pr.containsPoint(Wt.origin)===!1&&(Wt.intersectSphere(Pr,uc)===null||Wt.origin.distanceToSquared(uc)>(e.far-e.near)**2))||(lc.copy(a).invert(),Wt.copy(e.ray).applyMatrix4(lc),n.boundingBox!==null&&Wt.intersectsBox(n.boundingBox)===!1))return;let c;const r=n.index,f=n.attributes.position,s=n.attributes.uv,h=n.attributes.uv2,l=n.attributes.normal,d=n.groups,S=n.drawRange;if(r!==null)if(Array.isArray(o))for(let p=0,C=d.length;p<C;p++){const y=d[p],m=o[y.materialIndex],D=Math.max(y.start,S.start),P=Math.min(r.count,Math.min(y.start+y.count,S.start+S.count));for(let M=D,w=P;M<w;M+=3){const T=r.getX(M),A=r.getX(M+1),L=r.getX(M+2);c=Ur(this,m,e,Wt,s,h,l,T,A,L),c&&(c.faceIndex=Math.floor(M/3),c.face.materialIndex=y.materialIndex,t.push(c))}}else{const p=Math.max(0,S.start),C=Math.min(r.count,S.start+S.count);for(let y=p,m=C;y<m;y+=3){const D=r.getX(y),P=r.getX(y+1),M=r.getX(y+2);c=Ur(this,o,e,Wt,s,h,l,D,P,M),c&&(c.faceIndex=Math.floor(y/3),t.push(c))}}else if(f!==void 0)if(Array.isArray(o))for(let p=0,C=d.length;p<C;p++){const y=d[p],m=o[y.materialIndex],D=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let M=D,w=P;M<w;M+=3){const T=M,A=M+1,L=M+2;c=Ur(this,m,e,Wt,s,h,l,T,A,L),c&&(c.faceIndex=Math.floor(M/3),c.face.materialIndex=y.materialIndex,t.push(c))}}else{const p=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let y=p,m=C;y<m;y+=3){const D=y,P=y+1,M=y+2;c=Ur(this,o,e,Wt,s,h,l,D,P,M),c&&(c.faceIndex=Math.floor(y/3),t.push(c))}}}}function Ed(i,e,t,n,o,a,c,r){let f;if(e.side===yt?f=n.intersectTriangle(c,a,o,!0,r):f=n.intersectTriangle(o,a,c,e.side===Tn,r),f===null)return null;Nr.copy(r),Nr.applyMatrix4(i.matrixWorld);const s=t.ray.origin.distanceTo(Nr);return s<t.near||s>t.far?null:{distance:s,point:Nr.clone(),object:i}}function Ur(i,e,t,n,o,a,c,r,f,s){i.getVertexPosition(r,ni),i.getVertexPosition(f,ii),i.getVertexPosition(s,ri);const h=Ed(i,e,t,n,ni,ii,ri,Or);if(h){o&&(Ir.fromBufferAttribute(o,r),Lr.fromBufferAttribute(o,f),Cr.fromBufferAttribute(o,s),h.uv=Bt.getInterpolation(Or,ni,ii,ri,Ir,Lr,Cr,new Xe)),a&&(Ir.fromBufferAttribute(a,r),Lr.fromBufferAttribute(a,f),Cr.fromBufferAttribute(a,s),h.uv2=Bt.getInterpolation(Or,ni,ii,ri,Ir,Lr,Cr,new Xe)),c&&(fc.fromBufferAttribute(c,r),dc.fromBufferAttribute(c,f),hc.fromBufferAttribute(c,s),h.normal=Bt.getInterpolation(Or,ni,ii,ri,fc,dc,hc,new fe),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:r,b:f,c:s,normal:new fe,materialIndex:0};Bt.getNormal(ni,ii,ri,l.normal),h.face=l}return h}class wi extends fn{constructor(e=1,t=1,n=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:c};const r=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const f=[],s=[],h=[],l=[];let d=0,S=0;p("z","y","x",-1,-1,n,t,e,c,a,0),p("z","y","x",1,-1,n,t,-e,c,a,1),p("x","z","y",1,1,e,n,t,o,c,2),p("x","z","y",1,-1,e,n,-t,o,c,3),p("x","y","z",1,-1,e,t,n,o,a,4),p("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(f),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(l,2));function p(C,y,m,D,P,M,w,T,A,L,x){const I=M/A,_=w/L,E=M/2,v=w/2,u=T/2,g=A+1,b=L+1;let R=0,U=0;const F=new fe;for(let X=0;X<b;X++){const O=X*_-v;for(let N=0;N<g;N++){const G=N*I-E;F[C]=G*D,F[y]=O*P,F[m]=u,s.push(F.x,F.y,F.z),F[C]=0,F[y]=0,F[m]=T>0?1:-1,h.push(F.x,F.y,F.z),l.push(N/A),l.push(1-X/L),R+=1}}for(let X=0;X<L;X++)for(let O=0;O<A;O++){const N=d+O+g*X,G=d+O+g*(X+1),H=d+(O+1)+g*(X+1),K=d+(O+1)+g*X;f.push(N,G,K),f.push(G,H,K),U+=6}r.addGroup(S,U,x),S+=U,d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const o in n)e[o]=n[o]}return e}function bd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zl(i){return i.getRenderTarget()===null&&i.outputEncoding===$e?jt:er}const Md={clone:Ti,merge:mt};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jl extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends Jl{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(No*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,s=c.fullHeight;a+=c.offsetX*o/f,t-=c.offsetY*n/s,o*=c.width/f,n*=c.height/s}const r=this.filmOffset;r!==0&&(a+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,ai=1;class Pd extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const o=new Lt(oi,ai,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const a=new Lt(oi,ai,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const c=new Lt(oi,ai,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(0,1,0),this.add(c);const r=new Lt(oi,ai,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const f=new Lt(oi,ai,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,1),this.add(f);const s=new Lt(oi,ai,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(0,0,-1),this.add(s)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[o,a,c,r,f,s]=this.children,h=e.getRenderTarget(),l=e.toneMapping,d=e.xr.enabled;e.toneMapping=ln,e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,o),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,c),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,f),n.texture.generateMipmaps=S,e.setRenderTarget(n,5),e.render(t,s),e.setRenderTarget(h),e.toneMapping=l,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ql extends _t{constructor(e,t,n,o,a,c,r,f,s,h){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,n,o,a,c,r,f,s,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Ql(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new wi(5,5,5),a=new En({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:Sn});a.uniforms.tEquirect.value=t;const c=new kt(o,a),r=t.minFilter;return t.minFilter===Ji&&(t.minFilter=It),new Pd(1,10,this).update(e,c),t.minFilter=r,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,o);e.setRenderTarget(a)}}const Jo=new fe,Id=new fe,Ld=new Ve;class On{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Jo.subVectors(n,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jo),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ld.getNormalMatrix(e),o=this.coplanarPoint(Jo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new is,Dr=new fe;class eu{constructor(e=new On,t=new On,n=new On,o=new On,a=new On,c=new On){this.planes=[e,t,n,o,a,c]}set(e,t,n,o,a,c){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(o),r[4].copy(a),r[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,o=n[0],a=n[1],c=n[2],r=n[3],f=n[4],s=n[5],h=n[6],l=n[7],d=n[8],S=n[9],p=n[10],C=n[11],y=n[12],m=n[13],D=n[14],P=n[15];return t[0].setComponents(r-o,l-f,C-d,P-y).normalize(),t[1].setComponents(r+o,l+f,C+d,P+y).normalize(),t[2].setComponents(r+a,l+s,C+S,P+m).normalize(),t[3].setComponents(r-a,l-s,C-S,P-m).normalize(),t[4].setComponents(r-c,l-h,C-p,P-D).normalize(),t[5].setComponents(r+c,l+h,C+p,P+D).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(e){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Dr.x=o.normal.x>0?e.max.x:e.min.x,Dr.y=o.normal.y>0?e.max.y:e.min.y,Dr.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tu(){let i=null,e=!1,t=null,n=null;function o(a,c){t(a,c),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Cd(i,e){const t=e.isWebGL2,n=new WeakMap;function o(s,h){const l=s.array,d=s.usage,S=i.createBuffer();i.bindBuffer(h,S),i.bufferData(h,l,d),s.onUploadCallback();let p;if(l instanceof Float32Array)p=5126;else if(l instanceof Uint16Array)if(s.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(l instanceof Int16Array)p=5122;else if(l instanceof Uint32Array)p=5125;else if(l instanceof Int32Array)p=5124;else if(l instanceof Int8Array)p=5120;else if(l instanceof Uint8Array)p=5121;else if(l instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:S,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version}}function a(s,h,l){const d=h.array,S=h.updateRange;i.bindBuffer(l,s),S.count===-1?i.bufferSubData(l,0,d):(t?i.bufferSubData(l,S.offset*d.BYTES_PER_ELEMENT,d,S.offset,S.count):i.bufferSubData(l,S.offset*d.BYTES_PER_ELEMENT,d.subarray(S.offset,S.offset+S.count)),S.count=-1),h.onUploadCallback()}function c(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const h=n.get(s);h&&(i.deleteBuffer(h.buffer),n.delete(s))}function f(s,h){if(s.isGLBufferAttribute){const d=n.get(s);(!d||d.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const l=n.get(s);l===void 0?n.set(s,o(s,h)):l.version<s.version&&(a(l.buffer,s,h),l.version=s.version)}return{get:c,remove:r,update:f}}class rs extends fn{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,c=t/2,r=Math.floor(n),f=Math.floor(o),s=r+1,h=f+1,l=e/r,d=t/f,S=[],p=[],C=[],y=[];for(let m=0;m<h;m++){const D=m*d-c;for(let P=0;P<s;P++){const M=P*l-a;p.push(M,-D,0),C.push(0,0,1),y.push(P/r),y.push(1-m/f)}}for(let m=0;m<f;m++)for(let D=0;D<r;D++){const P=D+s*m,M=D+s*(m+1),w=D+1+s*(m+1),T=D+1+s*m;S.push(P,M,T),S.push(M,w,T)}this.setIndex(S),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(C,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd="vec3 transformed = vec3( position );",Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jd=`#define PI 3.141592653589793
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#endif`,eh=`vec3 transformedNormal = objectNormal;
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
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ah=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ph=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gh=`#ifdef USE_GRADIENTMAP
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
}`,_h=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,Th=`#if defined( USE_ENVMAP )
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
#endif`,Eh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Ph=`struct PhysicalMaterial {
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
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
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
#endif
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
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
}`,Rh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
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
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
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
#endif`,Wh=`#ifdef USE_MORPHTARGETS
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
#endif`,Xh=`#ifdef USE_MORPHTARGETS
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
#endif`,jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,$h=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,hp=`float getShadowMask() {
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
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
#endif`,bp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
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
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Np=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Fp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
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
}`,Wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,Xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
}`,jp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,Yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,Kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,Zp=`#define PHONG
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
}`,Jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
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
}`,Qp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
}`,em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
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
}`,tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
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
}`,nm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,im=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,am=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,Ue={alphamap_fragment:Od,alphamap_pars_fragment:Nd,alphatest_fragment:Ud,alphatest_pars_fragment:Dd,aomap_fragment:Fd,aomap_pars_fragment:Gd,begin_vertex:Bd,beginnormal_vertex:Vd,bsdfs:zd,iridescence_fragment:kd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:$d,color_fragment:Yd,color_pars_fragment:qd,color_pars_vertex:Kd,color_vertex:Zd,common:Jd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:eh,displacementmap_pars_vertex:th,displacementmap_vertex:nh,emissivemap_fragment:ih,emissivemap_pars_fragment:rh,encodings_fragment:oh,encodings_pars_fragment:ah,envmap_fragment:sh,envmap_common_pars_fragment:ch,envmap_pars_fragment:lh,envmap_pars_vertex:uh,envmap_physical_pars_fragment:Th,envmap_vertex:fh,fog_vertex:dh,fog_pars_vertex:hh,fog_fragment:ph,fog_pars_fragment:mh,gradientmap_pars_fragment:gh,lightmap_fragment:_h,lightmap_pars_fragment:vh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:xh,lights_pars_begin:Sh,lights_toon_fragment:Eh,lights_toon_pars_fragment:bh,lights_phong_fragment:Mh,lights_phong_pars_fragment:Ah,lights_physical_fragment:wh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Rh,lights_fragment_maps:Ih,lights_fragment_end:Lh,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Oh,logdepthbuf_pars_vertex:Nh,logdepthbuf_vertex:Uh,map_fragment:Dh,map_pars_fragment:Fh,map_particle_fragment:Gh,map_particle_pars_fragment:Bh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:zh,morphcolor_vertex:kh,morphnormal_vertex:Hh,morphtarget_pars_vertex:Wh,morphtarget_vertex:Xh,normal_fragment_begin:jh,normal_fragment_maps:$h,normal_pars_fragment:Yh,normal_pars_vertex:qh,normal_vertex:Kh,normalmap_pars_fragment:Zh,clearcoat_normal_fragment_begin:Jh,clearcoat_normal_fragment_maps:Qh,clearcoat_pars_fragment:ep,iridescence_pars_fragment:tp,output_fragment:np,packing:ip,premultiplied_alpha_fragment:rp,project_vertex:op,dithering_fragment:ap,dithering_pars_fragment:sp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:fp,shadowmap_vertex:dp,shadowmask_pars_fragment:hp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:_p,specularmap_fragment:vp,specularmap_pars_fragment:yp,tonemapping_fragment:xp,tonemapping_pars_fragment:Sp,transmission_fragment:Tp,transmission_pars_fragment:Ep,uv_pars_fragment:bp,uv_pars_vertex:Mp,uv_vertex:Ap,worldpos_vertex:wp,background_vert:Pp,background_frag:Rp,backgroundCube_vert:Ip,backgroundCube_frag:Lp,cube_vert:Cp,cube_frag:Op,depth_vert:Np,depth_frag:Up,distanceRGBA_vert:Dp,distanceRGBA_frag:Fp,equirect_vert:Gp,equirect_frag:Bp,linedashed_vert:Vp,linedashed_frag:zp,meshbasic_vert:kp,meshbasic_frag:Hp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:jp,meshmatcap_frag:$p,meshnormal_vert:Yp,meshnormal_frag:qp,meshphong_vert:Kp,meshphong_frag:Zp,meshphysical_vert:Jp,meshphysical_frag:Qp,meshtoon_vert:em,meshtoon_frag:tm,points_vert:nm,points_frag:im,shadow_vert:rm,shadow_frag:om,sprite_vert:am,sprite_frag:sm},xe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}}},$t={basic:{uniforms:mt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:mt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:mt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:mt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:mt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:mt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:mt([xe.points,xe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:mt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:mt([xe.common,xe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:mt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:mt([xe.sprite,xe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:mt([xe.common,xe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:mt([xe.lights,xe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};$t.physical={uniforms:mt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Fr={r:0,b:0,g:0};function cm(i,e,t,n,o,a,c){const r=new Ye(0);let f=a===!0?0:1,s,h,l=null,d=0,S=null;function p(y,m){let D=!1,P=m.isScene===!0?m.background:null;P&&P.isTexture&&(P=(m.backgroundBlurriness>0?t:e).get(P));const M=i.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(P=null),P===null?C(r,f):P&&P.isColor&&(C(P,1),D=!0),(i.autoClear||D)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),P&&(P.isCubeTexture||P.mapping===co)?(h===void 0&&(h=new kt(new wi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ti($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=P.encoding!==$e,(l!==P||d!==P.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,l=P,d=P.version,S=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(s===void 0&&(s=new kt(new rs(2,2),new En({name:"BackgroundMaterial",uniforms:Ti($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(s)),s.material.uniforms.t2D.value=P,s.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,s.material.toneMapped=P.encoding!==$e,P.matrixAutoUpdate===!0&&P.updateMatrix(),s.material.uniforms.uvTransform.value.copy(P.matrix),(l!==P||d!==P.version||S!==i.toneMapping)&&(s.material.needsUpdate=!0,l=P,d=P.version,S=i.toneMapping),s.layers.enableAll(),y.unshift(s,s.geometry,s.material,0,0,null))}function C(y,m){y.getRGB(Fr,Zl(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,m,c)}return{getClearColor:function(){return r},setClearColor:function(y,m=1){r.set(y),f=m,C(r,f)},getClearAlpha:function(){return f},setClearAlpha:function(y){f=y,C(r,f)},render:p}}function lm(i,e,t,n){const o=i.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,r={},f=y(null);let s=f,h=!1;function l(u,g,b,R,U){let F=!1;if(c){const X=C(R,b,g);s!==X&&(s=X,S(s.object)),F=m(u,R,b,U),F&&D(u,R,b,U)}else{const X=g.wireframe===!0;(s.geometry!==R.id||s.program!==b.id||s.wireframe!==X)&&(s.geometry=R.id,s.program=b.id,s.wireframe=X,F=!0)}U!==null&&t.update(U,34963),(F||h)&&(h=!1,L(u,g,b,R),U!==null&&i.bindBuffer(34963,t.get(U).buffer))}function d(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function S(u){return n.isWebGL2?i.bindVertexArray(u):a.bindVertexArrayOES(u)}function p(u){return n.isWebGL2?i.deleteVertexArray(u):a.deleteVertexArrayOES(u)}function C(u,g,b){const R=b.wireframe===!0;let U=r[u.id];U===void 0&&(U={},r[u.id]=U);let F=U[g.id];F===void 0&&(F={},U[g.id]=F);let X=F[R];return X===void 0&&(X=y(d()),F[R]=X),X}function y(u){const g=[],b=[],R=[];for(let U=0;U<o;U++)g[U]=0,b[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:b,attributeDivisors:R,object:u,attributes:{},index:null}}function m(u,g,b,R){const U=s.attributes,F=g.attributes;let X=0;const O=b.getAttributes();for(const N in O)if(O[N].location>=0){const H=U[N];let K=F[N];if(K===void 0&&(N==="instanceMatrix"&&u.instanceMatrix&&(K=u.instanceMatrix),N==="instanceColor"&&u.instanceColor&&(K=u.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;X++}return s.attributesNum!==X||s.index!==R}function D(u,g,b,R){const U={},F=g.attributes;let X=0;const O=b.getAttributes();for(const N in O)if(O[N].location>=0){let H=F[N];H===void 0&&(N==="instanceMatrix"&&u.instanceMatrix&&(H=u.instanceMatrix),N==="instanceColor"&&u.instanceColor&&(H=u.instanceColor));const K={};K.attribute=H,H&&H.data&&(K.data=H.data),U[N]=K,X++}s.attributes=U,s.attributesNum=X,s.index=R}function P(){const u=s.newAttributes;for(let g=0,b=u.length;g<b;g++)u[g]=0}function M(u){w(u,0)}function w(u,g){const b=s.newAttributes,R=s.enabledAttributes,U=s.attributeDivisors;b[u]=1,R[u]===0&&(i.enableVertexAttribArray(u),R[u]=1),U[u]!==g&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](u,g),U[u]=g)}function T(){const u=s.newAttributes,g=s.enabledAttributes;for(let b=0,R=g.length;b<R;b++)g[b]!==u[b]&&(i.disableVertexAttribArray(b),g[b]=0)}function A(u,g,b,R,U,F){n.isWebGL2===!0&&(b===5124||b===5125)?i.vertexAttribIPointer(u,g,b,U,F):i.vertexAttribPointer(u,g,b,R,U,F)}function L(u,g,b,R){if(n.isWebGL2===!1&&(u.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const U=R.attributes,F=b.getAttributes(),X=g.defaultAttributeValues;for(const O in F){const N=F[O];if(N.location>=0){let G=U[O];if(G===void 0&&(O==="instanceMatrix"&&u.instanceMatrix&&(G=u.instanceMatrix),O==="instanceColor"&&u.instanceColor&&(G=u.instanceColor)),G!==void 0){const H=G.normalized,K=G.itemSize,$=t.get(G);if($===void 0)continue;const z=$.buffer,Q=$.type,oe=$.bytesPerElement;if(G.isInterleavedBufferAttribute){const Z=G.data,le=Z.stride,k=G.offset;if(Z.isInstancedInterleavedBuffer){for(let q=0;q<N.locationSize;q++)w(N.location+q,Z.meshPerAttribute);u.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let q=0;q<N.locationSize;q++)M(N.location+q);i.bindBuffer(34962,z);for(let q=0;q<N.locationSize;q++)A(N.location+q,K/N.locationSize,Q,H,le*oe,(k+K/N.locationSize*q)*oe)}else{if(G.isInstancedBufferAttribute){for(let Z=0;Z<N.locationSize;Z++)w(N.location+Z,G.meshPerAttribute);u.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Z=0;Z<N.locationSize;Z++)M(N.location+Z);i.bindBuffer(34962,z);for(let Z=0;Z<N.locationSize;Z++)A(N.location+Z,K/N.locationSize,Q,H,K*oe,K/N.locationSize*Z*oe)}}else if(X!==void 0){const H=X[O];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(N.location,H);break;case 3:i.vertexAttrib3fv(N.location,H);break;case 4:i.vertexAttrib4fv(N.location,H);break;default:i.vertexAttrib1fv(N.location,H)}}}}T()}function x(){E();for(const u in r){const g=r[u];for(const b in g){const R=g[b];for(const U in R)p(R[U].object),delete R[U];delete g[b]}delete r[u]}}function I(u){if(r[u.id]===void 0)return;const g=r[u.id];for(const b in g){const R=g[b];for(const U in R)p(R[U].object),delete R[U];delete g[b]}delete r[u.id]}function _(u){for(const g in r){const b=r[g];if(b[u.id]===void 0)continue;const R=b[u.id];for(const U in R)p(R[U].object),delete R[U];delete b[u.id]}}function E(){v(),h=!0,s!==f&&(s=f,S(s.object))}function v(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:l,reset:E,resetDefaultState:v,dispose:x,releaseStatesOfGeometry:I,releaseStatesOfProgram:_,initAttributes:P,enableAttribute:M,disableUnusedAttributes:T}}function um(i,e,t,n){const o=n.isWebGL2;let a;function c(s){a=s}function r(s,h){i.drawArrays(a,s,h),t.update(h,a,1)}function f(s,h,l){if(l===0)return;let d,S;if(o)d=i,S="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[S](a,s,h,l),t.update(h,a,l)}this.setMode=c,this.render=r,this.renderInstances=f}function fm(i,e,t){let n;function o(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const f=a(r);f!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",f,"instead."),r=f);const s=c||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,l=i.getParameter(34930),d=i.getParameter(35660),S=i.getParameter(3379),p=i.getParameter(34076),C=i.getParameter(34921),y=i.getParameter(36347),m=i.getParameter(36348),D=i.getParameter(36349),P=d>0,M=c||e.has("OES_texture_float"),w=P&&M,T=c?i.getParameter(36183):0;return{isWebGL2:c,drawBuffers:s,getMaxAnisotropy:o,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:d,maxTextureSize:S,maxCubemapSize:p,maxAttributes:C,maxVertexUniforms:y,maxVaryings:m,maxFragmentUniforms:D,vertexTextures:P,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:T}}function dm(i){const e=this;let t=null,n=0,o=!1,a=!1;const c=new On,r=new Ve,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const S=l.length!==0||d||n!==0||o;return o=d,n=l.length,S},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(l,d){t=h(l,d,0)},this.setState=function(l,d,S){const p=l.clippingPlanes,C=l.clipIntersection,y=l.clipShadows,m=i.get(l);if(!o||p===null||p.length===0||a&&!y)a?h(null):s();else{const D=a?0:n,P=D*4;let M=m.clippingState||null;f.value=M,M=h(p,d,P,S);for(let w=0;w!==P;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function s(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(l,d,S,p){const C=l!==null?l.length:0;let y=null;if(C!==0){if(y=f.value,p!==!0||y===null){const m=S+C*4,D=d.matrixWorldInverse;r.getNormalMatrix(D),(y===null||y.length<m)&&(y=new Float32Array(m));for(let P=0,M=S;P!==C;++P,M+=4)c.copy(l[P]).applyMatrix4(D,r),c.normal.toArray(y,M),y[M+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function hm(i){let e=new WeakMap;function t(c,r){return r===Oa?c.mapping=yi:r===Na&&(c.mapping=xi),c}function n(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const r=c.mapping;if(r===Oa||r===Na)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const s=new Rd(f.height/2);return s.fromEquirectangularTexture(i,c),e.set(c,s),c.addEventListener("dispose",o),t(s.texture,c.mapping)}else return null}}return c}function o(c){const r=c.target;r.removeEventListener("dispose",o);const f=e.get(r);f!==void 0&&(e.delete(r),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class pm extends Jl{constructor(e=-1,t=1,n=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,c=n+e,r=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const s=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=s*this.view.offsetX,c=a+s*this.view.width,r-=h*this.view.offsetY,f=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,c,r,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,pc=[.125,.215,.35,.446,.526,.582],Dn=20,Qo=new pm,mc=new Ye;let ea=null;const Nn=(1+Math.sqrt(5))/2,si=1/Nn,gc=[new fe(1,1,1),new fe(-1,1,1),new fe(1,1,-1),new fe(-1,1,-1),new fe(0,Nn,si),new fe(0,Nn,-si),new fe(si,0,Nn),new fe(-si,0,Nn),new fe(Nn,si,0),new fe(-Nn,si,0)];class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100){ea=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea),e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Qi,format:zt,encoding:zn,depthBuffer:!1},o=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(a)),this._blurMaterial=gm(a,e,t)}return o}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,n,o){const r=new Lt(90,1,t,n),f=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(mc),h.toneMapping=ln,h.autoClear=!1;const S=new Yl({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),p=new kt(new wi,S);let C=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,C=!0):(S.color.copy(mc),C=!0);for(let m=0;m<6;m++){const D=m%3;D===0?(r.up.set(0,f[m],0),r.lookAt(s[m],0,0)):D===1?(r.up.set(0,0,f[m]),r.lookAt(0,s[m],0)):(r.up.set(0,f[m],0),r.lookAt(0,0,s[m]));const P=this._cubeSize;Gr(o,D*P,m>2?P:0,P,P),h.setRenderTarget(o),C&&h.render(p,r),h.render(e,r)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=l,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===yi||e.mapping===xi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new kt(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=e;const f=this._cubeSize;Gr(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(c,Qo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=gc[(o-1)%gc.length];this._blur(e,o-1,o,a,c)}t.autoClear=n}_blur(e,t,n,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,o,"latitudinal",a),this._halfBlur(c,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,c,r){const f=this._renderer,s=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new kt(this._lodPlanes[o],s),d=s.uniforms,S=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Dn-1),C=a/p,y=isFinite(a)?1+Math.floor(h*C):Dn;y>Dn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Dn}`);const m=[];let D=0;for(let A=0;A<Dn;++A){const L=A/C,x=Math.exp(-L*L/2);m.push(x),A===0?D+=x:A<y&&(D+=2*x)}for(let A=0;A<m.length;A++)m[A]=m[A]/D;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=m,d.latitudinal.value=c==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:P}=this;d.dTheta.value=p,d.mipInt.value=P-n;const M=this._sizeLods[o],w=3*M*(o>P-hi?o-P+hi:0),T=4*(this._cubeSize-M);Gr(t,w,T,3*M,2*M),f.setRenderTarget(t),f.render(l,Qo)}}function mm(i){const e=[],t=[],n=[];let o=i;const a=i-hi+1+pc.length;for(let c=0;c<a;c++){const r=Math.pow(2,o);t.push(r);let f=1/r;c>i-hi?f=pc[c-i+hi-1]:c===0&&(f=0),n.push(f);const s=1/(r-2),h=-s,l=1+s,d=[h,h,l,h,l,l,h,h,l,l,h,l],S=6,p=6,C=3,y=2,m=1,D=new Float32Array(C*p*S),P=new Float32Array(y*p*S),M=new Float32Array(m*p*S);for(let T=0;T<S;T++){const A=T%3*2/3-1,L=T>2?0:-1,x=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];D.set(x,C*p*T),P.set(d,y*p*T);const I=[T,T,T,T,T,T];M.set(I,m*p*T)}const w=new fn;w.setAttribute("position",new Ht(D,C)),w.setAttribute("uv",new Ht(P,y)),w.setAttribute("faceIndex",new Ht(M,m)),e.push(w),o>hi&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vc(i,e,t){const n=new un(i,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function gm(i,e,t){const n=new Float32Array(Dn),o=new fe(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:os(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function yc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:os(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function xc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function os(){return`

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
	`}function _m(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const f=r.mapping,s=f===Oa||f===Na,h=f===yi||f===xi;if(s||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new _c(i)),l=s?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}else{if(e.has(r))return e.get(r).texture;{const l=r.image;if(s&&l&&l.height>0||h&&l&&o(l)){t===null&&(t=new _c(i));const d=s?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,d),r.addEventListener("dispose",a),d.texture}else return null}}}return r}function o(r){let f=0;const s=6;for(let h=0;h<s;h++)r[h]!==void 0&&f++;return f===s}function a(r){const f=r.target;f.removeEventListener("dispose",a);const s=e.get(f);s!==void 0&&(e.delete(f),s.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function vm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const o=t(n);return o===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function ym(i,e,t,n){const o={},a=new WeakMap;function c(l){const d=l.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",c),delete o[d.id];const S=a.get(d);S&&(e.remove(S),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function r(l,d){return o[d.id]===!0||(d.addEventListener("dispose",c),o[d.id]=!0,t.memory.geometries++),d}function f(l){const d=l.attributes;for(const p in d)e.update(d[p],34962);const S=l.morphAttributes;for(const p in S){const C=S[p];for(let y=0,m=C.length;y<m;y++)e.update(C[y],34962)}}function s(l){const d=[],S=l.index,p=l.attributes.position;let C=0;if(S!==null){const D=S.array;C=S.version;for(let P=0,M=D.length;P<M;P+=3){const w=D[P+0],T=D[P+1],A=D[P+2];d.push(w,T,T,A,A,w)}}else{const D=p.array;C=p.version;for(let P=0,M=D.length/3-1;P<M;P+=3){const w=P+0,T=P+1,A=P+2;d.push(w,T,T,A,A,w)}}const y=new(kl(d)?Kl:ql)(d,1);y.version=C;const m=a.get(l);m&&e.remove(m),a.set(l,y)}function h(l){const d=a.get(l);if(d){const S=l.index;S!==null&&d.version<S.version&&s(l)}else s(l);return a.get(l)}return{get:r,update:f,getWireframeAttribute:h}}function xm(i,e,t,n){const o=n.isWebGL2;let a;function c(d){a=d}let r,f;function s(d){r=d.type,f=d.bytesPerElement}function h(d,S){i.drawElements(a,S,r,d*f),t.update(S,a,1)}function l(d,S,p){if(p===0)return;let C,y;if(o)C=i,y="drawElementsInstanced";else if(C=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",C===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}C[y](a,S,r,d*f,p),t.update(S,a,p)}this.setMode=c,this.setIndex=s,this.render=h,this.renderInstances=l}function Sm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,r){switch(t.calls++,c){case 4:t.triangles+=r*(a/3);break;case 1:t.lines+=r*(a/2);break;case 3:t.lines+=r*(a-1);break;case 2:t.lines+=r*a;break;case 0:t.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Tm(i,e){return i[0]-e[0]}function Em(i,e){return Math.abs(e[1])-Math.abs(i[1])}function bm(i,e,t){const n={},o=new Float32Array(8),a=new WeakMap,c=new lt,r=[];for(let s=0;s<8;s++)r[s]=[s,0];function f(s,h,l){const d=s.morphTargetInfluences;if(e.isWebGL2===!0){const S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=S!==void 0?S.length:0;let C=a.get(h);if(C===void 0||C.count!==p){let u=function(){E.dispose(),a.delete(h),h.removeEventListener("dispose",u)};C!==void 0&&C.texture.dispose();const D=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let L=0;D===!0&&(L=1),P===!0&&(L=2),M===!0&&(L=3);let x=h.attributes.position.count*L,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const _=new Float32Array(x*I*4*p),E=new Xl(_,x,I,p);E.type=Gn,E.needsUpdate=!0;const v=L*4;for(let g=0;g<p;g++){const b=w[g],R=T[g],U=A[g],F=x*I*4*g;for(let X=0;X<b.count;X++){const O=X*v;D===!0&&(c.fromBufferAttribute(b,X),_[F+O+0]=c.x,_[F+O+1]=c.y,_[F+O+2]=c.z,_[F+O+3]=0),P===!0&&(c.fromBufferAttribute(R,X),_[F+O+4]=c.x,_[F+O+5]=c.y,_[F+O+6]=c.z,_[F+O+7]=0),M===!0&&(c.fromBufferAttribute(U,X),_[F+O+8]=c.x,_[F+O+9]=c.y,_[F+O+10]=c.z,_[F+O+11]=U.itemSize===4?c.w:1)}}C={count:p,texture:E,size:new Xe(x,I)},a.set(h,C),h.addEventListener("dispose",u)}let y=0;for(let D=0;D<d.length;D++)y+=d[D];const m=h.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",d),l.getUniforms().setValue(i,"morphTargetsTexture",C.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",C.size)}else{const S=d===void 0?0:d.length;let p=n[h.id];if(p===void 0||p.length!==S){p=[];for(let P=0;P<S;P++)p[P]=[P,0];n[h.id]=p}for(let P=0;P<S;P++){const M=p[P];M[0]=P,M[1]=d[P]}p.sort(Em);for(let P=0;P<8;P++)P<S&&p[P][1]?(r[P][0]=p[P][0],r[P][1]=p[P][1]):(r[P][0]=Number.MAX_SAFE_INTEGER,r[P][1]=0);r.sort(Tm);const C=h.morphAttributes.position,y=h.morphAttributes.normal;let m=0;for(let P=0;P<8;P++){const M=r[P],w=M[0],T=M[1];w!==Number.MAX_SAFE_INTEGER&&T?(C&&h.getAttribute("morphTarget"+P)!==C[w]&&h.setAttribute("morphTarget"+P,C[w]),y&&h.getAttribute("morphNormal"+P)!==y[w]&&h.setAttribute("morphNormal"+P,y[w]),o[P]=T,m+=T):(C&&h.hasAttribute("morphTarget"+P)===!0&&h.deleteAttribute("morphTarget"+P),y&&h.hasAttribute("morphNormal"+P)===!0&&h.deleteAttribute("morphNormal"+P),o[P]=0)}const D=h.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",D),l.getUniforms().setValue(i,"morphTargetInfluences",o)}}return{update:f}}function Mm(i,e,t,n){let o=new WeakMap;function a(f){const s=n.render.frame,h=f.geometry,l=e.get(f,h);return o.get(l)!==s&&(e.update(l),o.set(l,s)),f.isInstancedMesh&&(f.hasEventListener("dispose",r)===!1&&f.addEventListener("dispose",r),t.update(f.instanceMatrix,34962),f.instanceColor!==null&&t.update(f.instanceColor,34962)),l}function c(){o=new WeakMap}function r(f){const s=f.target;s.removeEventListener("dispose",r),t.remove(s.instanceMatrix),s.instanceColor!==null&&t.remove(s.instanceColor)}return{update:a,dispose:c}}const nu=new _t,iu=new Xl,ru=new dd,ou=new Ql,Sc=[],Tc=[],Ec=new Float32Array(16),bc=new Float32Array(9),Mc=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let a=Sc[o];if(a===void 0&&(a=new Float32Array(o),Sc[o]=a),e!==0){n.toArray(a,0);for(let c=1,r=0;c!==e;++c)r+=t,i[c].toArray(a,r)}return a}function tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2fv(this.addr,e),nt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;i.uniform3fv(this.addr,e),nt(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4fv(this.addr,e),nt(t,e)}}function Im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),nt(t,n)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),nt(t,n)}}function Cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),nt(t,n)}}function Om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2iv(this.addr,e),nt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;i.uniform3iv(this.addr,e),nt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4iv(this.addr,e),nt(t,e)}}function Fm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2uiv(this.addr,e),nt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;i.uniform3uiv(this.addr,e),nt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4uiv(this.addr,e),nt(t,e)}}function zm(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2D(e||nu,o)}function km(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||ru,o)}function Hm(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||ou,o)}function Wm(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||iu,o)}function Xm(i){switch(i){case 5126:return Am;case 35664:return wm;case 35665:return Pm;case 35666:return Rm;case 35674:return Im;case 35675:return Lm;case 35676:return Cm;case 5124:case 35670:return Om;case 35667:case 35671:return Nm;case 35668:case 35672:return Um;case 35669:case 35673:return Dm;case 5125:return Fm;case 36294:return Gm;case 36295:return Bm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Wm}}function jm(i,e){i.uniform1fv(this.addr,e)}function $m(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function Ym(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function qm(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function Km(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zm(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jm(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qm(i,e){i.uniform1iv(this.addr,e)}function eg(i,e){i.uniform2iv(this.addr,e)}function tg(i,e){i.uniform3iv(this.addr,e)}function ng(i,e){i.uniform4iv(this.addr,e)}function ig(i,e){i.uniform1uiv(this.addr,e)}function rg(i,e){i.uniform2uiv(this.addr,e)}function og(i,e){i.uniform3uiv(this.addr,e)}function ag(i,e){i.uniform4uiv(this.addr,e)}function sg(i,e,t){const n=this.cache,o=e.length,a=fo(t,o);tt(n,a)||(i.uniform1iv(this.addr,a),nt(n,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||nu,a[c])}function cg(i,e,t){const n=this.cache,o=e.length,a=fo(t,o);tt(n,a)||(i.uniform1iv(this.addr,a),nt(n,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||ru,a[c])}function lg(i,e,t){const n=this.cache,o=e.length,a=fo(t,o);tt(n,a)||(i.uniform1iv(this.addr,a),nt(n,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||ou,a[c])}function ug(i,e,t){const n=this.cache,o=e.length,a=fo(t,o);tt(n,a)||(i.uniform1iv(this.addr,a),nt(n,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||iu,a[c])}function fg(i){switch(i){case 5126:return jm;case 35664:return $m;case 35665:return Ym;case 35666:return qm;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return og;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return ug}}class dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Xm(t.type)}}class hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=fg(t.type)}}class pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const r=o[a];r.setValue(e,t[r.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Ac(i,e){i.seq.push(e),i.map[e.id]=e}function mg(i,e,t){const n=i.name,o=n.length;for(ta.lastIndex=0;;){const a=ta.exec(n),c=ta.lastIndex;let r=a[1];const f=a[2]==="]",s=a[3];if(f&&(r=r|0),s===void 0||s==="["&&c+2===o){Ac(t,s===void 0?new dg(r,i,e):new hg(r,i,e));break}else{let l=t.map[r];l===void 0&&(l=new pg(r),Ac(t,l)),t=l}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);mg(a,c,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,c=t.length;a!==c;++a){const r=t[a],f=n[r.id];f.needsUpdate!==!1&&r.setValue(e,f.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&n.push(c)}return n}}function wc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let gg=0;function _g(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const r=c+1;n.push(`${r===e?">":" "} ${r}: ${t[c]}`)}return n.join(`
`)}function vg(i){switch(i){case zn:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Pc(i,e,t){const n=i.getShaderParameter(e,35713),o=i.getShaderInfoLog(e).trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+_g(i.getShaderSource(e),c)}else return o}function yg(i,e){const t=vg(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xg(i,e){let t;switch(e){case Lf:t="Linear";break;case Cf:t="Reinhard";break;case Of:t="OptimizedCineon";break;case Nf:t="ACESFilmic";break;case Uf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function Tg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eg(i,e){const t={},n=i.getProgramParameter(e,35721);for(let o=0;o<n;o++){const a=i.getActiveAttrib(e,o),c=a.name;let r=1;a.type===35674&&(r=2),a.type===35675&&(r=3),a.type===35676&&(r=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:r}}return t}function Xi(i){return i!==""}function Rc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(bg,Mg)}function Mg(i,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Va(t)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(i){return i.replace(Ag,wg)}function wg(i,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Cc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function Rg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case xi:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ig(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Lg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case If:e="ENVMAP_BLENDING_ADD";break}return e}function Cg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Og(i,e,t,n){const o=i.getContext(),a=t.defines;let c=t.vertexShader,r=t.fragmentShader;const f=Pg(t),s=Rg(t),h=Ig(t),l=Lg(t),d=Cg(t),S=t.isWebGL2?"":Sg(t),p=Tg(a),C=o.createProgram();let y,m,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[p].filter(Xi).join(`
`),y.length>0&&(y+=`
`),m=[S,p].filter(Xi).join(`
`),m.length>0&&(m+=`
`)):(y=[Cc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),m=[S,Cc(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+s:"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Ue.tonemapping_pars_fragment:"",t.toneMapping!==ln?xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,yg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),c=Va(c),c=Rc(c,t),c=Ic(c,t),r=Va(r),r=Rc(r,t),r=Ic(r,t),c=Lc(c),r=Lc(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Js?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Js?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=D+y+c,M=D+m+r,w=wc(o,35633,P),T=wc(o,35632,M);if(o.attachShader(C,w),o.attachShader(C,T),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C),i.debug.checkShaderErrors){const x=o.getProgramInfoLog(C).trim(),I=o.getShaderInfoLog(w).trim(),_=o.getShaderInfoLog(T).trim();let E=!0,v=!0;if(o.getProgramParameter(C,35714)===!1)if(E=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,C,w,T);else{const u=Pc(o,w,"vertex"),g=Pc(o,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,35715)+`

Program Info Log: `+x+`
`+u+`
`+g)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(I===""||_==="")&&(v=!1);v&&(this.diagnostics={runnable:E,programLog:x,vertexShader:{log:I,prefix:y},fragmentShader:{log:_,prefix:m}})}o.deleteShader(w),o.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Wr(o,C)),A};let L;return this.getAttributes=function(){return L===void 0&&(L=Eg(o,C)),L},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=w,this.fragmentShader=T,this}let Ng=0;class Ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dg(e),t.set(e,n)),n}}class Dg{constructor(e){this.id=Ng++,this.code=e,this.usedTimes=0}}function Fg(i,e,t,n,o,a,c){const r=new jl,f=new Ug,s=[],h=o.isWebGL2,l=o.logarithmicDepthBuffer,d=o.vertexTextures;let S=o.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(x){return x===1?"uv2":"uv"}function y(x,I,_,E,v){const u=E.fog,g=v.geometry,b=x.isMeshStandardMaterial?E.environment:null,R=(x.isMeshStandardMaterial?t:e).get(x.envMap||b),U=R&&R.mapping===co?R.image.height:null,F=p[x.type];x.precision!==null&&(S=o.getMaxPrecision(x.precision),S!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",S,"instead."));const X=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,O=X!==void 0?X.length:0;let N=0;g.morphAttributes.position!==void 0&&(N=1),g.morphAttributes.normal!==void 0&&(N=2),g.morphAttributes.color!==void 0&&(N=3);let G,H,K,$;if(F){const Te=$t[F];G=Te.vertexShader,H=Te.fragmentShader}else G=x.vertexShader,H=x.fragmentShader,f.update(x),K=f.getVertexShaderID(x),$=f.getFragmentShaderID(x);const z=i.getRenderTarget(),Q=v.isInstancedMesh===!0,oe=!!x.map,Z=!!x.matcap,le=!!R,k=!!x.aoMap,q=!!x.lightMap,te=!!x.bumpMap,W=!!x.normalMap,Y=!!x.displacementMap,J=!!x.emissiveMap,ie=!!x.metalnessMap,ce=!!x.roughnessMap,ae=x.clearcoat>0,ue=x.iridescence>0,V=x.sheen>0,B=x.transmission>0,re=ae&&!!x.clearcoatMap,me=ae&&!!x.clearcoatNormalMap,_e=ae&&!!x.clearcoatRoughnessMap,ye=ue&&!!x.iridescenceMap,Me=ue&&!!x.iridescenceThicknessMap,Se=V&&!!x.sheenColorMap,he=V&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,Ae=!!x.specularColorMap,Ie=!!x.specularIntensityMap,be=B&&!!x.transmissionMap,we=B&&!!x.thicknessMap,Oe=!!x.gradientMap,Be=!!x.alphaMap,We=x.alphaTest>0,ee=!!x.extensions,pe=!!g.attributes.uv2;return{isWebGL2:h,shaderID:F,shaderName:x.type,vertexShader:G,fragmentShader:H,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:S,instancing:Q,instancingColor:Q&&v.instanceColor!==null,supportsVertexTextures:d,outputEncoding:z===null?i.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:zn,map:oe,matcap:Z,envMap:le,envMapMode:le&&R.mapping,envMapCubeUVHeight:U,aoMap:k,lightMap:q,bumpMap:te,normalMap:W,displacementMap:d&&Y,emissiveMap:J,normalMapObjectSpace:W&&x.normalMapType===td,normalMapTangentSpace:W&&x.normalMapType===ed,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&x.map.encoding===$e,metalnessMap:ie,roughnessMap:ce,clearcoat:ae,clearcoatMap:re,clearcoatNormalMap:me,clearcoatRoughnessMap:_e,iridescence:ue,iridescenceMap:ye,iridescenceThicknessMap:Me,sheen:V,sheenColorMap:Se,sheenRoughnessMap:he,specularMap:Ee,specularColorMap:Ae,specularIntensityMap:Ie,transmission:B,transmissionMap:be,thicknessMap:we,gradientMap:Oe,opaque:x.transparent===!1&&x.blending===pi,alphaMap:Be,alphaTest:We,combine:x.combine,mapUv:oe&&C(x.map.channel),aoMapUv:k&&C(x.aoMap.channel),lightMapUv:q&&C(x.lightMap.channel),bumpMapUv:te&&C(x.bumpMap.channel),normalMapUv:W&&C(x.normalMap.channel),displacementMapUv:Y&&C(x.displacementMap.channel),emissiveMapUv:J&&C(x.emissiveMap.channel),metalnessMapUv:ie&&C(x.metalnessMap.channel),roughnessMapUv:ce&&C(x.roughnessMap.channel),clearcoatMapUv:re&&C(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&C(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&C(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&C(x.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&C(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&C(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&C(x.sheenRoughnessMap.channel),specularMapUv:Ee&&C(x.specularMap.channel),specularColorMapUv:Ae&&C(x.specularColorMap.channel),specularIntensityMapUv:Ie&&C(x.specularIntensityMap.channel),transmissionMapUv:be&&C(x.transmissionMap.channel),thicknessMapUv:we&&C(x.thicknessMap.channel),alphaMapUv:Be&&C(x.alphaMap.channel),vertexTangents:W&&!!g.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,vertexUvs2:pe,pointsUvs:v.isPoints===!0&&!!g.attributes.uv&&(oe||Be),fog:!!u,useFog:x.fog===!0,fogExp2:u&&u.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:v.isSkinnedMesh===!0,morphTargets:g.morphAttributes.position!==void 0,morphNormals:g.morphAttributes.normal!==void 0,morphColors:g.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:N,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&_.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:ln,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ee&&x.extensions.derivatives===!0,extensionFragDepth:ee&&x.extensions.fragDepth===!0,extensionDrawBuffers:ee&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const I=[];if(x.shaderID?I.push(x.shaderID):(I.push(x.customVertexShaderID),I.push(x.customFragmentShaderID)),x.defines!==void 0)for(const _ in x.defines)I.push(_),I.push(x.defines[_]);return x.isRawShaderMaterial===!1&&(D(I,x),P(I,x),I.push(i.outputEncoding)),I.push(x.customProgramCacheKey),I.join()}function D(x,I){x.push(I.precision),x.push(I.outputEncoding),x.push(I.envMapMode),x.push(I.envMapCubeUVHeight),x.push(I.mapUv),x.push(I.alphaMapUv),x.push(I.lightMapUv),x.push(I.aoMapUv),x.push(I.bumpMapUv),x.push(I.normalMapUv),x.push(I.displacementMapUv),x.push(I.emissiveMapUv),x.push(I.metalnessMapUv),x.push(I.roughnessMapUv),x.push(I.clearcoatMapUv),x.push(I.clearcoatNormalMapUv),x.push(I.clearcoatRoughnessMapUv),x.push(I.iridescenceMapUv),x.push(I.iridescenceThicknessMapUv),x.push(I.sheenColorMapUv),x.push(I.sheenRoughnessMapUv),x.push(I.specularMapUv),x.push(I.specularColorMapUv),x.push(I.specularIntensityMapUv),x.push(I.transmissionMapUv),x.push(I.thicknessMapUv),x.push(I.combine),x.push(I.fogExp2),x.push(I.sizeAttenuation),x.push(I.morphTargetsCount),x.push(I.morphAttributeCount),x.push(I.numDirLights),x.push(I.numPointLights),x.push(I.numSpotLights),x.push(I.numSpotLightMaps),x.push(I.numHemiLights),x.push(I.numRectAreaLights),x.push(I.numDirLightShadows),x.push(I.numPointLightShadows),x.push(I.numSpotLightShadows),x.push(I.numSpotLightShadowsWithMaps),x.push(I.shadowMapType),x.push(I.toneMapping),x.push(I.numClippingPlanes),x.push(I.numClipIntersection),x.push(I.depthPacking)}function P(x,I){r.disableAll(),I.isWebGL2&&r.enable(0),I.supportsVertexTextures&&r.enable(1),I.instancing&&r.enable(2),I.instancingColor&&r.enable(3),I.matcap&&r.enable(4),I.envMap&&r.enable(5),I.normalMapObjectSpace&&r.enable(6),I.normalMapTangentSpace&&r.enable(7),I.clearcoat&&r.enable(8),I.iridescence&&r.enable(9),I.alphaTest&&r.enable(10),I.vertexColors&&r.enable(11),I.vertexAlphas&&r.enable(12),I.vertexUvs2&&r.enable(13),I.vertexTangents&&r.enable(14),x.push(r.mask),r.disableAll(),I.fog&&r.enable(0),I.useFog&&r.enable(1),I.flatShading&&r.enable(2),I.logarithmicDepthBuffer&&r.enable(3),I.skinning&&r.enable(4),I.morphTargets&&r.enable(5),I.morphNormals&&r.enable(6),I.morphColors&&r.enable(7),I.premultipliedAlpha&&r.enable(8),I.shadowMapEnabled&&r.enable(9),I.useLegacyLights&&r.enable(10),I.doubleSided&&r.enable(11),I.flipSided&&r.enable(12),I.useDepthPacking&&r.enable(13),I.dithering&&r.enable(14),I.transmission&&r.enable(15),I.sheen&&r.enable(16),I.decodeVideoTexture&&r.enable(17),I.opaque&&r.enable(18),I.pointsUvs&&r.enable(19),x.push(r.mask)}function M(x){const I=p[x.type];let _;if(I){const E=$t[I];_=Md.clone(E.uniforms)}else _=x.uniforms;return _}function w(x,I){let _;for(let E=0,v=s.length;E<v;E++){const u=s[E];if(u.cacheKey===I){_=u,++_.usedTimes;break}}return _===void 0&&(_=new Og(i,I,x,a),s.push(_)),_}function T(x){if(--x.usedTimes===0){const I=s.indexOf(x);s[I]=s[s.length-1],s.pop(),x.destroy()}}function A(x){f.remove(x)}function L(){f.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:s,dispose:L}}function Gg(){let i=new WeakMap;function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function t(a){i.delete(a)}function n(a,c,r){i.get(a)[c]=r}function o(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:o}}function Bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nc(){const i=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function c(l,d,S,p,C,y){let m=i[e];return m===void 0?(m={id:l.id,object:l,geometry:d,material:S,groupOrder:p,renderOrder:l.renderOrder,z:C,group:y},i[e]=m):(m.id=l.id,m.object=l,m.geometry=d,m.material=S,m.groupOrder=p,m.renderOrder=l.renderOrder,m.z=C,m.group=y),e++,m}function r(l,d,S,p,C,y){const m=c(l,d,S,p,C,y);S.transmission>0?n.push(m):S.transparent===!0?o.push(m):t.push(m)}function f(l,d,S,p,C,y){const m=c(l,d,S,p,C,y);S.transmission>0?n.unshift(m):S.transparent===!0?o.unshift(m):t.unshift(m)}function s(l,d){t.length>1&&t.sort(l||Bg),n.length>1&&n.sort(d||Oc),o.length>1&&o.sort(d||Oc)}function h(){for(let l=e,d=i.length;l<d;l++){const S=i[l];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:r,unshift:f,finish:h,sort:s}}function Vg(){let i=new WeakMap;function e(n,o){const a=i.get(n);let c;return a===void 0?(c=new Nc,i.set(n,[c])):o>=a.length?(c=new Nc,a.push(c)):c=a[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function zg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new fe,color:new Ye};break;case"SpotLight":t={position:new fe,direction:new fe,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return i[e.id]=t,t}}}function kg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hg=0;function Wg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xg(i,e){const t=new zg,n=kg(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)o.probe.push(new fe);const a=new fe,c=new Ke,r=new Ke;function f(h,l){let d=0,S=0,p=0;for(let _=0;_<9;_++)o.probe[_].set(0,0,0);let C=0,y=0,m=0,D=0,P=0,M=0,w=0,T=0,A=0,L=0;h.sort(Wg);const x=l===!0?Math.PI:1;for(let _=0,E=h.length;_<E;_++){const v=h[_],u=v.color,g=v.intensity,b=v.distance,R=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)d+=u.r*g*x,S+=u.g*g*x,p+=u.b*g*x;else if(v.isLightProbe)for(let U=0;U<9;U++)o.probe[U].addScaledVector(v.sh.coefficients[U],g);else if(v.isDirectionalLight){const U=t.get(v);if(U.color.copy(v.color).multiplyScalar(v.intensity*x),v.castShadow){const F=v.shadow,X=n.get(v);X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,o.directionalShadow[C]=X,o.directionalShadowMap[C]=R,o.directionalShadowMatrix[C]=v.shadow.matrix,M++}o.directional[C]=U,C++}else if(v.isSpotLight){const U=t.get(v);U.position.setFromMatrixPosition(v.matrixWorld),U.color.copy(u).multiplyScalar(g*x),U.distance=b,U.coneCos=Math.cos(v.angle),U.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),U.decay=v.decay,o.spot[m]=U;const F=v.shadow;if(v.map&&(o.spotLightMap[A]=v.map,A++,F.updateMatrices(v),v.castShadow&&L++),o.spotLightMatrix[m]=F.matrix,v.castShadow){const X=n.get(v);X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,o.spotShadow[m]=X,o.spotShadowMap[m]=R,T++}m++}else if(v.isRectAreaLight){const U=t.get(v);U.color.copy(u).multiplyScalar(g),U.halfWidth.set(v.width*.5,0,0),U.halfHeight.set(0,v.height*.5,0),o.rectArea[D]=U,D++}else if(v.isPointLight){const U=t.get(v);if(U.color.copy(v.color).multiplyScalar(v.intensity*x),U.distance=v.distance,U.decay=v.decay,v.castShadow){const F=v.shadow,X=n.get(v);X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,o.pointShadow[y]=X,o.pointShadowMap[y]=R,o.pointShadowMatrix[y]=v.shadow.matrix,w++}o.point[y]=U,y++}else if(v.isHemisphereLight){const U=t.get(v);U.skyColor.copy(v.color).multiplyScalar(g*x),U.groundColor.copy(v.groundColor).multiplyScalar(g*x),o.hemi[P]=U,P++}}D>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=xe.LTC_FLOAT_1,o.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=xe.LTC_HALF_1,o.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=d,o.ambient[1]=S,o.ambient[2]=p;const I=o.hash;(I.directionalLength!==C||I.pointLength!==y||I.spotLength!==m||I.rectAreaLength!==D||I.hemiLength!==P||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==T||I.numSpotMaps!==A)&&(o.directional.length=C,o.spot.length=m,o.rectArea.length=D,o.point.length=y,o.hemi.length=P,o.directionalShadow.length=M,o.directionalShadowMap.length=M,o.pointShadow.length=w,o.pointShadowMap.length=w,o.spotShadow.length=T,o.spotShadowMap.length=T,o.directionalShadowMatrix.length=M,o.pointShadowMatrix.length=w,o.spotLightMatrix.length=T+A-L,o.spotLightMap.length=A,o.numSpotLightShadowsWithMaps=L,I.directionalLength=C,I.pointLength=y,I.spotLength=m,I.rectAreaLength=D,I.hemiLength=P,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=T,I.numSpotMaps=A,o.version=Hg++)}function s(h,l){let d=0,S=0,p=0,C=0,y=0;const m=l.matrixWorldInverse;for(let D=0,P=h.length;D<P;D++){const M=h[D];if(M.isDirectionalLight){const w=o.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),d++}else if(M.isSpotLight){const w=o.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const w=o.rectArea[C];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),r.identity(),c.copy(M.matrixWorld),c.premultiply(m),r.extractRotation(c),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),C++}else if(M.isPointLight){const w=o.point[S];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),S++}else if(M.isHemisphereLight){const w=o.hemi[y];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),y++}}}return{setup:f,setupView:s,state:o}}function Uc(i,e){const t=new Xg(i,e),n=[],o=[];function a(){n.length=0,o.length=0}function c(l){n.push(l)}function r(l){o.push(l)}function f(l){t.setup(n,l)}function s(l){t.setupView(n,l)}return{init:a,state:{lightsArray:n,shadowsArray:o,lights:t},setupLights:f,setupLightsView:s,pushLight:c,pushShadow:r}}function jg(i,e){let t=new WeakMap;function n(a,c=0){const r=t.get(a);let f;return r===void 0?(f=new Uc(i,e),t.set(a,[f])):c>=r.length?(f=new Uc(i,e),r.push(f)):f=r[c],f}function o(){t=new WeakMap}return{get:n,dispose:o}}class $g extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yg extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
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
}`;function Zg(i,e,t){let n=new eu;const o=new Xe,a=new Xe,c=new lt,r=new $g({depthPacking:Qf}),f=new Yg,s={},h=t.maxTextureSize,l={[Tn]:yt,[yt]:Tn,[cn]:cn},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:qg,fragmentShader:Kg}),S=d.clone();S.defines.HORIZONTAL_PASS=1;const p=new fn;p.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new kt(p,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul,this.render=function(M,w,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||M.length===0)return;const A=i.getRenderTarget(),L=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Sn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let _=0,E=M.length;_<E;_++){const v=M[_],u=v.shadow;if(u===void 0){console.warn("THREE.WebGLShadowMap:",v,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;o.copy(u.mapSize);const g=u.getFrameExtents();if(o.multiply(g),a.copy(u.mapSize),(o.x>h||o.y>h)&&(o.x>h&&(a.x=Math.floor(h/g.x),o.x=a.x*g.x,u.mapSize.x=a.x),o.y>h&&(a.y=Math.floor(h/g.y),o.y=a.y*g.y,u.mapSize.y=a.y)),u.map===null){const R=this.type!==Wi?{minFilter:gt,magFilter:gt}:{};u.map=new un(o.x,o.y,R),u.map.texture.name=v.name+".shadowMap",u.camera.updateProjectionMatrix()}i.setRenderTarget(u.map),i.clear();const b=u.getViewportCount();for(let R=0;R<b;R++){const U=u.getViewport(R);c.set(a.x*U.x,a.y*U.y,a.x*U.z,a.y*U.w),I.viewport(c),u.updateMatrices(v,R),n=u.getFrustum(),P(w,T,u.camera,v,this.type)}u.isPointLightShadow!==!0&&this.type===Wi&&m(u,T),u.needsUpdate=!1}y.needsUpdate=!1,i.setRenderTarget(A,L,x)};function m(M,w){const T=e.update(C);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,S.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,S.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new un(o.x,o.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,T,d,C,null),S.uniforms.shadow_pass.value=M.mapPass.texture,S.uniforms.resolution.value=M.mapSize,S.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,T,S,C,null)}function D(M,w,T,A){let L=null;const x=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(x!==void 0)L=x;else if(L=T.isPointLight===!0?f:r,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=L.uuid,_=w.uuid;let E=s[I];E===void 0&&(E={},s[I]=E);let v=E[_];v===void 0&&(v=L.clone(),E[_]=v),L=v}if(L.visible=w.visible,L.wireframe=w.wireframe,A===Wi?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:l[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const I=i.properties.get(L);I.light=T}return L}function P(M,w,T,A,L){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===Wi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const _=e.update(M),E=M.material;if(Array.isArray(E)){const v=_.groups;for(let u=0,g=v.length;u<g;u++){const b=v[u],R=E[b.materialIndex];if(R&&R.visible){const U=D(M,R,A,L);i.renderBufferDirect(T,null,_,U,M,b)}}}else if(E.visible){const v=D(M,E,A,L);i.renderBufferDirect(T,null,_,v,M,null)}}const I=M.children;for(let _=0,E=I.length;_<E;_++)P(I[_],w,T,A,L)}}function Jg(i,e,t){const n=t.isWebGL2;function o(){let ee=!1;const pe=new lt;let ve=null;const Te=new lt(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!ee&&(i.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){ee=Pe},setClear:function(Pe,ke,je,it,Ot){Ot===!0&&(Pe*=it,ke*=it,je*=it),pe.set(Pe,ke,je,it),Te.equals(pe)===!1&&(i.clearColor(Pe,ke,je,it),Te.copy(pe))},reset:function(){ee=!1,ve=null,Te.set(-1,0,0,0)}}}function a(){let ee=!1,pe=null,ve=null,Te=null;return{setTest:function(Pe){Pe?z(2929):Q(2929)},setMask:function(Pe){pe!==Pe&&!ee&&(i.depthMask(Pe),pe=Pe)},setFunc:function(Pe){if(ve!==Pe){switch(Pe){case Tf:i.depthFunc(512);break;case Ef:i.depthFunc(519);break;case bf:i.depthFunc(513);break;case Jr:i.depthFunc(515);break;case Mf:i.depthFunc(514);break;case Af:i.depthFunc(518);break;case wf:i.depthFunc(516);break;case Pf:i.depthFunc(517);break;default:i.depthFunc(515)}ve=Pe}},setLocked:function(Pe){ee=Pe},setClear:function(Pe){Te!==Pe&&(i.clearDepth(Pe),Te=Pe)},reset:function(){ee=!1,pe=null,ve=null,Te=null}}}function c(){let ee=!1,pe=null,ve=null,Te=null,Pe=null,ke=null,je=null,it=null,Ot=null;return{setTest:function(qe){ee||(qe?z(2960):Q(2960))},setMask:function(qe){pe!==qe&&!ee&&(i.stencilMask(qe),pe=qe)},setFunc:function(qe,dt,xt){(ve!==qe||Te!==dt||Pe!==xt)&&(i.stencilFunc(qe,dt,xt),ve=qe,Te=dt,Pe=xt)},setOp:function(qe,dt,xt){(ke!==qe||je!==dt||it!==xt)&&(i.stencilOp(qe,dt,xt),ke=qe,je=dt,it=xt)},setLocked:function(qe){ee=qe},setClear:function(qe){Ot!==qe&&(i.clearStencil(qe),Ot=qe)},reset:function(){ee=!1,pe=null,ve=null,Te=null,Pe=null,ke=null,je=null,it=null,Ot=null}}}const r=new o,f=new a,s=new c,h=new WeakMap,l=new WeakMap;let d={},S={},p=new WeakMap,C=[],y=null,m=!1,D=null,P=null,M=null,w=null,T=null,A=null,L=null,x=!1,I=null,_=null,E=null,v=null,u=null;const g=i.getParameter(35661);let b=!1,R=0;const U=i.getParameter(7938);U.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(U)[1]),b=R>=1):U.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),b=R>=2);let F=null,X={};const O=i.getParameter(3088),N=i.getParameter(2978),G=new lt().fromArray(O),H=new lt().fromArray(N);function K(ee,pe,ve){const Te=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(ee,Pe),i.texParameteri(ee,10241,9728),i.texParameteri(ee,10240,9728);for(let ke=0;ke<ve;ke++)i.texImage2D(pe+ke,0,6408,1,1,0,6408,5121,Te);return Pe}const $={};$[3553]=K(3553,3553,1),$[34067]=K(34067,34069,6),r.setClear(0,0,0,1),f.setClear(1),s.setClear(0),z(2929),f.setFunc(Jr),Y(!1),J(Ts),z(2884),te(Sn);function z(ee){d[ee]!==!0&&(i.enable(ee),d[ee]=!0)}function Q(ee){d[ee]!==!1&&(i.disable(ee),d[ee]=!1)}function oe(ee,pe){return S[ee]!==pe?(i.bindFramebuffer(ee,pe),S[ee]=pe,n&&(ee===36009&&(S[36160]=pe),ee===36160&&(S[36009]=pe)),!0):!1}function Z(ee,pe){let ve=C,Te=!1;if(ee)if(ve=p.get(pe),ve===void 0&&(ve=[],p.set(pe,ve)),ee.isWebGLMultipleRenderTargets){const Pe=ee.texture;if(ve.length!==Pe.length||ve[0]!==36064){for(let ke=0,je=Pe.length;ke<je;ke++)ve[ke]=36064+ke;ve.length=Pe.length,Te=!0}}else ve[0]!==36064&&(ve[0]=36064,Te=!0);else ve[0]!==1029&&(ve[0]=1029,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function le(ee){return y!==ee?(i.useProgram(ee),y=ee,!0):!1}const k={[ui]:32774,[ff]:32778,[df]:32779};if(n)k[As]=32775,k[ws]=32776;else{const ee=e.get("EXT_blend_minmax");ee!==null&&(k[As]=ee.MIN_EXT,k[ws]=ee.MAX_EXT)}const q={[hf]:0,[pf]:1,[mf]:768,[Dl]:770,[Sf]:776,[yf]:774,[_f]:772,[gf]:769,[Fl]:771,[xf]:775,[vf]:773};function te(ee,pe,ve,Te,Pe,ke,je,it){if(ee===Sn){m===!0&&(Q(3042),m=!1);return}if(m===!1&&(z(3042),m=!0),ee!==uf){if(ee!==D||it!==x){if((P!==ui||T!==ui)&&(i.blendEquation(32774),P=ui,T=ui),it)switch(ee){case pi:i.blendFuncSeparate(1,771,1,771);break;case Es:i.blendFunc(1,1);break;case bs:i.blendFuncSeparate(0,769,0,1);break;case Ms:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}else switch(ee){case pi:i.blendFuncSeparate(770,771,1,771);break;case Es:i.blendFunc(770,1);break;case bs:i.blendFuncSeparate(0,769,0,1);break;case Ms:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",ee);break}M=null,w=null,A=null,L=null,D=ee,x=it}return}Pe=Pe||pe,ke=ke||ve,je=je||Te,(pe!==P||Pe!==T)&&(i.blendEquationSeparate(k[pe],k[Pe]),P=pe,T=Pe),(ve!==M||Te!==w||ke!==A||je!==L)&&(i.blendFuncSeparate(q[ve],q[Te],q[ke],q[je]),M=ve,w=Te,A=ke,L=je),D=ee,x=!1}function W(ee,pe){ee.side===cn?Q(2884):z(2884);let ve=ee.side===yt;pe&&(ve=!ve),Y(ve),ee.blending===pi&&ee.transparent===!1?te(Sn):te(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.premultipliedAlpha),f.setFunc(ee.depthFunc),f.setTest(ee.depthTest),f.setMask(ee.depthWrite),r.setMask(ee.colorWrite);const Te=ee.stencilWrite;s.setTest(Te),Te&&(s.setMask(ee.stencilWriteMask),s.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),s.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),ce(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?z(32926):Q(32926)}function Y(ee){I!==ee&&(ee?i.frontFace(2304):i.frontFace(2305),I=ee)}function J(ee){ee!==sf?(z(2884),ee!==_&&(ee===Ts?i.cullFace(1029):ee===cf?i.cullFace(1028):i.cullFace(1032))):Q(2884),_=ee}function ie(ee){ee!==E&&(b&&i.lineWidth(ee),E=ee)}function ce(ee,pe,ve){ee?(z(32823),(v!==pe||u!==ve)&&(i.polygonOffset(pe,ve),v=pe,u=ve)):Q(32823)}function ae(ee){ee?z(3089):Q(3089)}function ue(ee){ee===void 0&&(ee=33984+g-1),F!==ee&&(i.activeTexture(ee),F=ee)}function V(ee,pe,ve){ve===void 0&&(F===null?ve=33984+g-1:ve=F);let Te=X[ve];Te===void 0&&(Te={type:void 0,texture:void 0},X[ve]=Te),(Te.type!==ee||Te.texture!==pe)&&(F!==ve&&(i.activeTexture(ve),F=ve),i.bindTexture(ee,pe||$[ee]),Te.type=ee,Te.texture=pe)}function B(){const ee=X[F];ee!==void 0&&ee.type!==void 0&&(i.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function _e(){try{i.texSubImage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(ee){console.error("THREE.WebGLState:",ee)}}function be(ee){G.equals(ee)===!1&&(i.scissor(ee.x,ee.y,ee.z,ee.w),G.copy(ee))}function we(ee){H.equals(ee)===!1&&(i.viewport(ee.x,ee.y,ee.z,ee.w),H.copy(ee))}function Oe(ee,pe){let ve=l.get(pe);ve===void 0&&(ve=new WeakMap,l.set(pe,ve));let Te=ve.get(ee);Te===void 0&&(Te=i.getUniformBlockIndex(pe,ee.name),ve.set(ee,Te))}function Be(ee,pe){const Te=l.get(pe).get(ee);h.get(pe)!==Te&&(i.uniformBlockBinding(pe,Te,ee.__bindingPointIndex),h.set(pe,Te))}function We(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},F=null,X={},S={},p=new WeakMap,C=[],y=null,m=!1,D=null,P=null,M=null,w=null,T=null,A=null,L=null,x=!1,I=null,_=null,E=null,v=null,u=null,G.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),f.reset(),s.reset()}return{buffers:{color:r,depth:f,stencil:s},enable:z,disable:Q,bindFramebuffer:oe,drawBuffers:Z,useProgram:le,setBlending:te,setMaterial:W,setFlipSided:Y,setCullFace:J,setLineWidth:ie,setPolygonOffset:ce,setScissorTest:ae,activeTexture:ue,bindTexture:V,unbindTexture:B,compressedTexImage2D:re,compressedTexImage3D:me,texImage2D:Ae,texImage3D:Ie,updateUBOMapping:Oe,uniformBlockBinding:Be,texStorage2D:he,texStorage3D:Ee,texSubImage2D:_e,texSubImage3D:ye,compressedTexSubImage2D:Me,compressedTexSubImage3D:Se,scissor:be,viewport:we,reset:We}}function Qg(i,e,t,n,o,a,c){const r=o.isWebGL2,f=o.maxTextures,s=o.maxCubemapSize,h=o.maxTextureSize,l=o.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let C;const y=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(V,B){return m?new OffscreenCanvas(V,B):Qr("canvas")}function P(V,B,re,me){let _e=1;if((V.width>me||V.height>me)&&(_e=me/Math.max(V.width,V.height)),_e<1||B===!0)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap){const ye=B?rd:Math.floor,Me=ye(_e*V.width),Se=ye(_e*V.height);C===void 0&&(C=D(Me,Se));const he=re?D(Me,Se):C;return he.width=Me,he.height=Se,he.getContext("2d").drawImage(V,0,0,Me,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+Me+"x"+Se+")."),he}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),V;return V}function M(V){return Qs(V.width)&&Qs(V.height)}function w(V){return r?!1:V.wrapS!==Vt||V.wrapT!==Vt||V.minFilter!==gt&&V.minFilter!==It}function T(V,B){return V.generateMipmaps&&B&&V.minFilter!==gt&&V.minFilter!==It}function A(V){i.generateMipmap(V)}function L(V,B,re,me,_e=!1){if(r===!1)return B;if(V!==null){if(i[V]!==void 0)return i[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let ye=B;return B===6403&&(re===5126&&(ye=33326),re===5131&&(ye=33325),re===5121&&(ye=33321)),B===33319&&(re===5126&&(ye=33328),re===5131&&(ye=33327),re===5121&&(ye=33323)),B===6408&&(re===5126&&(ye=34836),re===5131&&(ye=34842),re===5121&&(ye=me===$e&&_e===!1?35907:32856),re===32819&&(ye=32854),re===32820&&(ye=32855)),(ye===33325||ye===33326||ye===33327||ye===33328||ye===34842||ye===34836)&&e.get("EXT_color_buffer_float"),ye}function x(V,B,re){return T(V,re)===!0||V.isFramebufferTexture&&V.minFilter!==gt&&V.minFilter!==It?Math.log2(Math.max(B.width,B.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?B.mipmaps.length:1}function I(V){return V===gt||V===Ps||V===wo?9728:9729}function _(V){const B=V.target;B.removeEventListener("dispose",_),v(B),B.isVideoTexture&&p.delete(B)}function E(V){const B=V.target;B.removeEventListener("dispose",E),g(B)}function v(V){const B=n.get(V);if(B.__webglInit===void 0)return;const re=V.source,me=y.get(re);if(me){const _e=me[B.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&u(V),Object.keys(me).length===0&&y.delete(re)}n.remove(V)}function u(V){const B=n.get(V);i.deleteTexture(B.__webglTexture);const re=V.source,me=y.get(re);delete me[B.__cacheKey],c.memory.textures--}function g(V){const B=V.texture,re=n.get(V),me=n.get(B);if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),c.memory.textures--),V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)i.deleteFramebuffer(re.__webglFramebuffer[_e]),re.__webglDepthbuffer&&i.deleteRenderbuffer(re.__webglDepthbuffer[_e]);else{if(i.deleteFramebuffer(re.__webglFramebuffer),re.__webglDepthbuffer&&i.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&i.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let _e=0;_e<re.__webglColorRenderbuffer.length;_e++)re.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(re.__webglColorRenderbuffer[_e]);re.__webglDepthRenderbuffer&&i.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(V.isWebGLMultipleRenderTargets)for(let _e=0,ye=B.length;_e<ye;_e++){const Me=n.get(B[_e]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),c.memory.textures--),n.remove(B[_e])}n.remove(B),n.remove(V)}let b=0;function R(){b=0}function U(){const V=b;return V>=f&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+f),b+=1,V}function F(V){const B=[];return B.push(V.wrapS),B.push(V.wrapT),B.push(V.wrapR||0),B.push(V.magFilter),B.push(V.minFilter),B.push(V.anisotropy),B.push(V.internalFormat),B.push(V.format),B.push(V.type),B.push(V.generateMipmaps),B.push(V.premultiplyAlpha),B.push(V.flipY),B.push(V.unpackAlignment),B.push(V.encoding),B.join()}function X(V,B){const re=n.get(V);if(V.isVideoTexture&&ae(V),V.isRenderTargetTexture===!1&&V.version>0&&re.__version!==V.version){const me=V.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(re,V,B);return}}t.bindTexture(3553,re.__webglTexture,33984+B)}function O(V,B){const re=n.get(V);if(V.version>0&&re.__version!==V.version){Q(re,V,B);return}t.bindTexture(35866,re.__webglTexture,33984+B)}function N(V,B){const re=n.get(V);if(V.version>0&&re.__version!==V.version){Q(re,V,B);return}t.bindTexture(32879,re.__webglTexture,33984+B)}function G(V,B){const re=n.get(V);if(V.version>0&&re.__version!==V.version){oe(re,V,B);return}t.bindTexture(34067,re.__webglTexture,33984+B)}const H={[Ua]:10497,[Vt]:33071,[Da]:33648},K={[gt]:9728,[Ps]:9984,[wo]:9986,[It]:9729,[Df]:9985,[Ji]:9987};function $(V,B,re){if(re?(i.texParameteri(V,10242,H[B.wrapS]),i.texParameteri(V,10243,H[B.wrapT]),(V===32879||V===35866)&&i.texParameteri(V,32882,H[B.wrapR]),i.texParameteri(V,10240,K[B.magFilter]),i.texParameteri(V,10241,K[B.minFilter])):(i.texParameteri(V,10242,33071),i.texParameteri(V,10243,33071),(V===32879||V===35866)&&i.texParameteri(V,32882,33071),(B.wrapS!==Vt||B.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(V,10240,I(B.magFilter)),i.texParameteri(V,10241,I(B.minFilter)),B.minFilter!==gt&&B.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(B.magFilter===gt||B.minFilter!==wo&&B.minFilter!==Ji||B.type===Gn&&e.has("OES_texture_float_linear")===!1||r===!1&&B.type===Qi&&e.has("OES_texture_half_float_linear")===!1)return;(B.anisotropy>1||n.get(B).__currentAnisotropy)&&(i.texParameterf(V,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,o.getMaxAnisotropy())),n.get(B).__currentAnisotropy=B.anisotropy)}}function z(V,B){let re=!1;V.__webglInit===void 0&&(V.__webglInit=!0,B.addEventListener("dispose",_));const me=B.source;let _e=y.get(me);_e===void 0&&(_e={},y.set(me,_e));const ye=F(B);if(ye!==V.__cacheKey){_e[ye]===void 0&&(_e[ye]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,re=!0),_e[ye].usedTimes++;const Me=_e[V.__cacheKey];Me!==void 0&&(_e[V.__cacheKey].usedTimes--,Me.usedTimes===0&&u(B)),V.__cacheKey=ye,V.__webglTexture=_e[ye].texture}return re}function Q(V,B,re){let me=3553;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(me=35866),B.isData3DTexture&&(me=32879);const _e=z(V,B),ye=B.source;t.bindTexture(me,V.__webglTexture,33984+re);const Me=n.get(ye);if(ye.version!==Me.__version||_e===!0){t.activeTexture(33984+re),i.pixelStorei(37440,B.flipY),i.pixelStorei(37441,B.premultiplyAlpha),i.pixelStorei(3317,B.unpackAlignment),i.pixelStorei(37443,0);const Se=w(B)&&M(B.image)===!1;let he=P(B.image,Se,!1,h);he=ue(B,he);const Ee=M(he)||r,Ae=a.convert(B.format,B.encoding);let Ie=a.convert(B.type),be=L(B.internalFormat,Ae,Ie,B.encoding,B.isVideoTexture);$(me,B,Ee);let we;const Oe=B.mipmaps,Be=r&&B.isVideoTexture!==!0,We=Me.__version===void 0||_e===!0,ee=x(B,he,Ee);if(B.isDepthTexture)be=6402,r?B.type===Gn?be=36012:B.type===Fn?be=33190:B.type===mi?be=35056:be=33189:B.type===Gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),B.format===Bn&&be===6402&&B.type!==Vl&&B.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),B.type=Fn,Ie=a.convert(B.type)),B.format===Si&&be===6402&&(be=34041,B.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),B.type=mi,Ie=a.convert(B.type))),We&&(Be?t.texStorage2D(3553,1,be,he.width,he.height):t.texImage2D(3553,0,be,he.width,he.height,0,Ae,Ie,null));else if(B.isDataTexture)if(Oe.length>0&&Ee){Be&&We&&t.texStorage2D(3553,ee,be,Oe[0].width,Oe[0].height);for(let pe=0,ve=Oe.length;pe<ve;pe++)we=Oe[pe],Be?t.texSubImage2D(3553,pe,0,0,we.width,we.height,Ae,Ie,we.data):t.texImage2D(3553,pe,be,we.width,we.height,0,Ae,Ie,we.data);B.generateMipmaps=!1}else Be?(We&&t.texStorage2D(3553,ee,be,he.width,he.height),t.texSubImage2D(3553,0,0,0,he.width,he.height,Ae,Ie,he.data)):t.texImage2D(3553,0,be,he.width,he.height,0,Ae,Ie,he.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){Be&&We&&t.texStorage3D(35866,ee,be,Oe[0].width,Oe[0].height,he.depth);for(let pe=0,ve=Oe.length;pe<ve;pe++)we=Oe[pe],B.format!==zt?Ae!==null?Be?t.compressedTexSubImage3D(35866,pe,0,0,0,we.width,we.height,he.depth,Ae,we.data,0,0):t.compressedTexImage3D(35866,pe,be,we.width,we.height,he.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,pe,0,0,0,we.width,we.height,he.depth,Ae,Ie,we.data):t.texImage3D(35866,pe,be,we.width,we.height,he.depth,0,Ae,Ie,we.data)}else{Be&&We&&t.texStorage2D(3553,ee,be,Oe[0].width,Oe[0].height);for(let pe=0,ve=Oe.length;pe<ve;pe++)we=Oe[pe],B.format!==zt?Ae!==null?Be?t.compressedTexSubImage2D(3553,pe,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(3553,pe,be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,pe,0,0,we.width,we.height,Ae,Ie,we.data):t.texImage2D(3553,pe,be,we.width,we.height,0,Ae,Ie,we.data)}else if(B.isDataArrayTexture)Be?(We&&t.texStorage3D(35866,ee,be,he.width,he.height,he.depth),t.texSubImage3D(35866,0,0,0,0,he.width,he.height,he.depth,Ae,Ie,he.data)):t.texImage3D(35866,0,be,he.width,he.height,he.depth,0,Ae,Ie,he.data);else if(B.isData3DTexture)Be?(We&&t.texStorage3D(32879,ee,be,he.width,he.height,he.depth),t.texSubImage3D(32879,0,0,0,0,he.width,he.height,he.depth,Ae,Ie,he.data)):t.texImage3D(32879,0,be,he.width,he.height,he.depth,0,Ae,Ie,he.data);else if(B.isFramebufferTexture){if(We)if(Be)t.texStorage2D(3553,ee,be,he.width,he.height);else{let pe=he.width,ve=he.height;for(let Te=0;Te<ee;Te++)t.texImage2D(3553,Te,be,pe,ve,0,Ae,Ie,null),pe>>=1,ve>>=1}}else if(Oe.length>0&&Ee){Be&&We&&t.texStorage2D(3553,ee,be,Oe[0].width,Oe[0].height);for(let pe=0,ve=Oe.length;pe<ve;pe++)we=Oe[pe],Be?t.texSubImage2D(3553,pe,0,0,Ae,Ie,we):t.texImage2D(3553,pe,be,Ae,Ie,we);B.generateMipmaps=!1}else Be?(We&&t.texStorage2D(3553,ee,be,he.width,he.height),t.texSubImage2D(3553,0,0,0,Ae,Ie,he)):t.texImage2D(3553,0,be,Ae,Ie,he);T(B,Ee)&&A(me),Me.__version=ye.version,B.onUpdate&&B.onUpdate(B)}V.__version=B.version}function oe(V,B,re){if(B.image.length!==6)return;const me=z(V,B),_e=B.source;t.bindTexture(34067,V.__webglTexture,33984+re);const ye=n.get(_e);if(_e.version!==ye.__version||me===!0){t.activeTexture(33984+re),i.pixelStorei(37440,B.flipY),i.pixelStorei(37441,B.premultiplyAlpha),i.pixelStorei(3317,B.unpackAlignment),i.pixelStorei(37443,0);const Me=B.isCompressedTexture||B.image[0].isCompressedTexture,Se=B.image[0]&&B.image[0].isDataTexture,he=[];for(let pe=0;pe<6;pe++)!Me&&!Se?he[pe]=P(B.image[pe],!1,!0,s):he[pe]=Se?B.image[pe].image:B.image[pe],he[pe]=ue(B,he[pe]);const Ee=he[0],Ae=M(Ee)||r,Ie=a.convert(B.format,B.encoding),be=a.convert(B.type),we=L(B.internalFormat,Ie,be,B.encoding),Oe=r&&B.isVideoTexture!==!0,Be=ye.__version===void 0||me===!0;let We=x(B,Ee,Ae);$(34067,B,Ae);let ee;if(Me){Oe&&Be&&t.texStorage2D(34067,We,we,Ee.width,Ee.height);for(let pe=0;pe<6;pe++){ee=he[pe].mipmaps;for(let ve=0;ve<ee.length;ve++){const Te=ee[ve];B.format!==zt?Ie!==null?Oe?t.compressedTexSubImage2D(34069+pe,ve,0,0,Te.width,Te.height,Ie,Te.data):t.compressedTexImage2D(34069+pe,ve,we,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+pe,ve,0,0,Te.width,Te.height,Ie,be,Te.data):t.texImage2D(34069+pe,ve,we,Te.width,Te.height,0,Ie,be,Te.data)}}}else{ee=B.mipmaps,Oe&&Be&&(ee.length>0&&We++,t.texStorage2D(34067,We,we,he[0].width,he[0].height));for(let pe=0;pe<6;pe++)if(Se){Oe?t.texSubImage2D(34069+pe,0,0,0,he[pe].width,he[pe].height,Ie,be,he[pe].data):t.texImage2D(34069+pe,0,we,he[pe].width,he[pe].height,0,Ie,be,he[pe].data);for(let ve=0;ve<ee.length;ve++){const Pe=ee[ve].image[pe].image;Oe?t.texSubImage2D(34069+pe,ve+1,0,0,Pe.width,Pe.height,Ie,be,Pe.data):t.texImage2D(34069+pe,ve+1,we,Pe.width,Pe.height,0,Ie,be,Pe.data)}}else{Oe?t.texSubImage2D(34069+pe,0,0,0,Ie,be,he[pe]):t.texImage2D(34069+pe,0,we,Ie,be,he[pe]);for(let ve=0;ve<ee.length;ve++){const Te=ee[ve];Oe?t.texSubImage2D(34069+pe,ve+1,0,0,Ie,be,Te.image[pe]):t.texImage2D(34069+pe,ve+1,we,Ie,be,Te.image[pe])}}}T(B,Ae)&&A(34067),ye.__version=_e.version,B.onUpdate&&B.onUpdate(B)}V.__version=B.version}function Z(V,B,re,me,_e){const ye=a.convert(re.format,re.encoding),Me=a.convert(re.type),Se=L(re.internalFormat,ye,Me,re.encoding);n.get(B).__hasExternalTextures||(_e===32879||_e===35866?t.texImage3D(_e,0,Se,B.width,B.height,B.depth,0,ye,Me,null):t.texImage2D(_e,0,Se,B.width,B.height,0,ye,Me,null)),t.bindFramebuffer(36160,V),ce(B)?d.framebufferTexture2DMultisampleEXT(36160,me,_e,n.get(re).__webglTexture,0,ie(B)):(_e===3553||_e>=34069&&_e<=34074)&&i.framebufferTexture2D(36160,me,_e,n.get(re).__webglTexture,0),t.bindFramebuffer(36160,null)}function le(V,B,re){if(i.bindRenderbuffer(36161,V),B.depthBuffer&&!B.stencilBuffer){let me=33189;if(re||ce(B)){const _e=B.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Gn?me=36012:_e.type===Fn&&(me=33190));const ye=ie(B);ce(B)?d.renderbufferStorageMultisampleEXT(36161,ye,me,B.width,B.height):i.renderbufferStorageMultisample(36161,ye,me,B.width,B.height)}else i.renderbufferStorage(36161,me,B.width,B.height);i.framebufferRenderbuffer(36160,36096,36161,V)}else if(B.depthBuffer&&B.stencilBuffer){const me=ie(B);re&&ce(B)===!1?i.renderbufferStorageMultisample(36161,me,35056,B.width,B.height):ce(B)?d.renderbufferStorageMultisampleEXT(36161,me,35056,B.width,B.height):i.renderbufferStorage(36161,34041,B.width,B.height),i.framebufferRenderbuffer(36160,33306,36161,V)}else{const me=B.isWebGLMultipleRenderTargets===!0?B.texture:[B.texture];for(let _e=0;_e<me.length;_e++){const ye=me[_e],Me=a.convert(ye.format,ye.encoding),Se=a.convert(ye.type),he=L(ye.internalFormat,Me,Se,ye.encoding),Ee=ie(B);re&&ce(B)===!1?i.renderbufferStorageMultisample(36161,Ee,he,B.width,B.height):ce(B)?d.renderbufferStorageMultisampleEXT(36161,Ee,he,B.width,B.height):i.renderbufferStorage(36161,he,B.width,B.height)}}i.bindRenderbuffer(36161,null)}function k(V,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,V),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(B.depthTexture).__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),X(B.depthTexture,0);const me=n.get(B.depthTexture).__webglTexture,_e=ie(B);if(B.depthTexture.format===Bn)ce(B)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,me,0,_e):i.framebufferTexture2D(36160,36096,3553,me,0);else if(B.depthTexture.format===Si)ce(B)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,me,0,_e):i.framebufferTexture2D(36160,33306,3553,me,0);else throw new Error("Unknown depthTexture format")}function q(V){const B=n.get(V),re=V.isWebGLCubeRenderTarget===!0;if(V.depthTexture&&!B.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");k(B.__webglFramebuffer,V)}else if(re){B.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(36160,B.__webglFramebuffer[me]),B.__webglDepthbuffer[me]=i.createRenderbuffer(),le(B.__webglDepthbuffer[me],V,!1)}else t.bindFramebuffer(36160,B.__webglFramebuffer),B.__webglDepthbuffer=i.createRenderbuffer(),le(B.__webglDepthbuffer,V,!1);t.bindFramebuffer(36160,null)}function te(V,B,re){const me=n.get(V);B!==void 0&&Z(me.__webglFramebuffer,V,V.texture,36064,3553),re!==void 0&&q(V)}function W(V){const B=V.texture,re=n.get(V),me=n.get(B);V.addEventListener("dispose",E),V.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=B.version,c.memory.textures++);const _e=V.isWebGLCubeRenderTarget===!0,ye=V.isWebGLMultipleRenderTargets===!0,Me=M(V)||r;if(_e){re.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)re.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(re.__webglFramebuffer=i.createFramebuffer(),ye)if(o.drawBuffers){const Se=V.texture;for(let he=0,Ee=Se.length;he<Ee;he++){const Ae=n.get(Se[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&V.samples>0&&ce(V)===!1){const Se=ye?B:[B];re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer);for(let he=0;he<Se.length;he++){const Ee=Se[he];re.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(36161,re.__webglColorRenderbuffer[he]);const Ae=a.convert(Ee.format,Ee.encoding),Ie=a.convert(Ee.type),be=L(Ee.internalFormat,Ae,Ie,Ee.encoding,V.isXRRenderTarget===!0),we=ie(V);i.renderbufferStorageMultisample(36161,we,be,V.width,V.height),i.framebufferRenderbuffer(36160,36064+he,36161,re.__webglColorRenderbuffer[he])}i.bindRenderbuffer(36161,null),V.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),le(re.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(36160,null)}}if(_e){t.bindTexture(34067,me.__webglTexture),$(34067,B,Me);for(let Se=0;Se<6;Se++)Z(re.__webglFramebuffer[Se],V,B,36064,34069+Se);T(B,Me)&&A(34067),t.unbindTexture()}else if(ye){const Se=V.texture;for(let he=0,Ee=Se.length;he<Ee;he++){const Ae=Se[he],Ie=n.get(Ae);t.bindTexture(3553,Ie.__webglTexture),$(3553,Ae,Me),Z(re.__webglFramebuffer,V,Ae,36064+he,3553),T(Ae,Me)&&A(3553)}t.unbindTexture()}else{let Se=3553;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(r?Se=V.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,me.__webglTexture),$(Se,B,Me),Z(re.__webglFramebuffer,V,B,36064,Se),T(B,Me)&&A(Se),t.unbindTexture()}V.depthBuffer&&q(V)}function Y(V){const B=M(V)||r,re=V.isWebGLMultipleRenderTargets===!0?V.texture:[V.texture];for(let me=0,_e=re.length;me<_e;me++){const ye=re[me];if(T(ye,B)){const Me=V.isWebGLCubeRenderTarget?34067:3553,Se=n.get(ye).__webglTexture;t.bindTexture(Me,Se),A(Me),t.unbindTexture()}}}function J(V){if(r&&V.samples>0&&ce(V)===!1){const B=V.isWebGLMultipleRenderTargets?V.texture:[V.texture],re=V.width,me=V.height;let _e=16384;const ye=[],Me=V.stencilBuffer?33306:36096,Se=n.get(V),he=V.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<B.length;Ee++)t.bindFramebuffer(36160,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,Se.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Se.__webglFramebuffer);for(let Ee=0;Ee<B.length;Ee++){ye.push(36064+Ee),V.depthBuffer&&ye.push(Me);const Ae=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(Ae===!1&&(V.depthBuffer&&(_e|=256),V.stencilBuffer&&(_e|=1024)),he&&i.framebufferRenderbuffer(36008,36064,36161,Se.__webglColorRenderbuffer[Ee]),Ae===!0&&(i.invalidateFramebuffer(36008,[Me]),i.invalidateFramebuffer(36009,[Me])),he){const Ie=n.get(B[Ee]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Ie,0)}i.blitFramebuffer(0,0,re,me,0,0,re,me,_e,9728),S&&i.invalidateFramebuffer(36008,ye)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),he)for(let Ee=0;Ee<B.length;Ee++){t.bindFramebuffer(36160,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,Se.__webglColorRenderbuffer[Ee]);const Ae=n.get(B[Ee]).__webglTexture;t.bindFramebuffer(36160,Se.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,Ae,0)}t.bindFramebuffer(36009,Se.__webglMultisampledFramebuffer)}}function ie(V){return Math.min(l,V.samples)}function ce(V){const B=n.get(V);return r&&V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function ae(V){const B=c.render.frame;p.get(V)!==B&&(p.set(V,B),V.update())}function ue(V,B){const re=V.encoding,me=V.format,_e=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||V.format===Ga||re!==zn&&(re===$e?r===!1?e.has("EXT_sRGB")===!0&&me===zt?(V.format=Ga,V.minFilter=It,V.generateMipmaps=!1):B=Hl.sRGBToLinear(B):(me!==zt||_e!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",re)),B}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=N,this.setTextureCube=G,this.rebindTextures=te,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ce}function e_(i,e,t){const n=t.isWebGL2;function o(a,c=null){let r;if(a===Vn)return 5121;if(a===Vf)return 32819;if(a===zf)return 32820;if(a===Ff)return 5120;if(a===Gf)return 5122;if(a===Vl)return 5123;if(a===Bf)return 5124;if(a===Fn)return 5125;if(a===Gn)return 5126;if(a===Qi)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===kf)return 6406;if(a===zt)return 6408;if(a===Hf)return 6409;if(a===Wf)return 6410;if(a===Bn)return 6402;if(a===Si)return 34041;if(a===Ga)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===Xf)return 6403;if(a===jf)return 36244;if(a===$f)return 33319;if(a===Yf)return 33320;if(a===qf)return 36249;if(a===Po||a===Ro||a===Io||a===Lo)if(c===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Rs||a===Is||a===Ls||a===Cs)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Rs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Is)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ls)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Cs)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Kf)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Os||a===Ns)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Os)return c===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===Ns)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Us||a===Ds||a===Fs||a===Gs||a===Bs||a===Vs||a===zs||a===ks||a===Hs||a===Ws||a===Xs||a===js||a===$s||a===Ys)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(a===Us)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ds)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Fs)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Gs)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bs)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Vs)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===zs)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ks)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hs)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ws)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Xs)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===js)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===$s)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ys)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(a===Co)return c===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Zf||a===qs||a===Ks||a===Zs)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(a===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(a===qs)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zs)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===mi?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:o}}class t_ extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Br extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n_={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,c=null;const r=this._targetRay,f=this._grip,s=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(s&&e.hand){c=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,n),m=this._getHandJoint(s,C);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=y.radius),m.visible=y!==null}const h=s.joints["index-finger-tip"],l=s.joints["thumb-tip"],d=h.position.distanceTo(l.position),S=.02,p=.005;s.inputState.pinching&&d>S+p?(s.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!s.inputState.pinching&&d<=S-p&&(s.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));r!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return r!==null&&(r.visible=o!==null),f!==null&&(f.visible=a!==null),s!==null&&(s.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class au extends _t{constructor(e,t,n,o,a,c,r,f,s,h){if(h=h!==void 0?h:Bn,h!==Bn&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bn&&(n=Fn),n===void 0&&h===Si&&(n=mi),super(null,o,a,c,r,f,h,n,s),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:gt,this.minFilter=f!==void 0?f:gt,this.flipY=!1,this.generateMipmaps=!1}}class i_ extends Hn{constructor(e,t){super();const n=this;let o=null,a=1,c=null,r="local-floor",f=1,s=null,h=null,l=null,d=null,S=null,p=null;const C=t.getContextAttributes();let y=null,m=null;const D=[],P=[],M=new Set,w=new Map,T=new Lt;T.layers.enable(1),T.viewport=new lt;const A=new Lt;A.layers.enable(2),A.viewport=new lt;const L=[T,A],x=new t_;x.layers.enable(1),x.layers.enable(2);let I=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let H=D[G];return H===void 0&&(H=new na,D[G]=H),H.getTargetRaySpace()},this.getControllerGrip=function(G){let H=D[G];return H===void 0&&(H=new na,D[G]=H),H.getGripSpace()},this.getHand=function(G){let H=D[G];return H===void 0&&(H=new na,D[G]=H),H.getHandSpace()};function E(G){const H=P.indexOf(G.inputSource);if(H===-1)return;const K=D[H];K!==void 0&&K.dispatchEvent({type:G.type,data:G.inputSource})}function v(){o.removeEventListener("select",E),o.removeEventListener("selectstart",E),o.removeEventListener("selectend",E),o.removeEventListener("squeeze",E),o.removeEventListener("squeezestart",E),o.removeEventListener("squeezeend",E),o.removeEventListener("end",v),o.removeEventListener("inputsourceschange",u);for(let G=0;G<D.length;G++){const H=P[G];H!==null&&(P[G]=null,D[G].disconnect(H))}I=null,_=null,e.setRenderTarget(y),S=null,d=null,l=null,o=null,m=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s||c},this.setReferenceSpace=function(G){s=G},this.getBaseLayer=function(){return d!==null?d:S},this.getBinding=function(){return l},this.getFrame=function(){return p},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",E),o.addEventListener("selectstart",E),o.addEventListener("selectend",E),o.addEventListener("squeeze",E),o.addEventListener("squeezestart",E),o.addEventListener("squeezeend",E),o.addEventListener("end",v),o.addEventListener("inputsourceschange",u),C.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:o.renderState.layers===void 0?C.antialias:!0,alpha:C.alpha,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,t,H),o.updateRenderState({baseLayer:S}),m=new un(S.framebufferWidth,S.framebufferHeight,{format:zt,type:Vn,encoding:e.outputEncoding,stencilBuffer:C.stencil})}else{let H=null,K=null,$=null;C.depth&&($=C.stencil?35056:33190,H=C.stencil?Si:Bn,K=C.stencil?mi:Fn);const z={colorFormat:32856,depthFormat:$,scaleFactor:a};l=new XRWebGLBinding(o,t),d=l.createProjectionLayer(z),o.updateRenderState({layers:[d]}),m=new un(d.textureWidth,d.textureHeight,{format:zt,type:Vn,depthTexture:new au(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:C.stencil,encoding:e.outputEncoding,samples:C.antialias?4:0});const Q=e.properties.get(m);Q.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(f),s=null,c=await o.requestReferenceSpace(r),N.setContext(o),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function u(G){for(let H=0;H<G.removed.length;H++){const K=G.removed[H],$=P.indexOf(K);$>=0&&(P[$]=null,D[$].disconnect(K))}for(let H=0;H<G.added.length;H++){const K=G.added[H];let $=P.indexOf(K);if($===-1){for(let Q=0;Q<D.length;Q++)if(Q>=P.length){P.push(K),$=Q;break}else if(P[Q]===null){P[Q]=K,$=Q;break}if($===-1)break}const z=D[$];z&&z.connect(K)}}const g=new fe,b=new fe;function R(G,H,K){g.setFromMatrixPosition(H.matrixWorld),b.setFromMatrixPosition(K.matrixWorld);const $=g.distanceTo(b),z=H.projectionMatrix.elements,Q=K.projectionMatrix.elements,oe=z[14]/(z[10]-1),Z=z[14]/(z[10]+1),le=(z[9]+1)/z[5],k=(z[9]-1)/z[5],q=(z[8]-1)/z[0],te=(Q[8]+1)/Q[0],W=oe*q,Y=oe*te,J=$/(-q+te),ie=J*-q;H.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ie),G.translateZ(J),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const ce=oe+J,ae=Z+J,ue=W-ie,V=Y+($-ie),B=le*Z/ae*ce,re=k*Z/ae*ce;G.projectionMatrix.makePerspective(ue,V,B,re,ce,ae),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function U(G,H){H===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(H.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;x.near=A.near=T.near=G.near,x.far=A.far=T.far=G.far,(I!==x.near||_!==x.far)&&(o.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,_=x.far);const H=G.parent,K=x.cameras;U(x,H);for(let $=0;$<K.length;$++)U(K[$],H);K.length===2?R(x,T,A):x.projectionMatrix.copy(T.projectionMatrix),F(G,x,H)};function F(G,H,K){K===null?G.matrix.copy(H.matrixWorld):(G.matrix.copy(K.matrixWorld),G.matrix.invert(),G.matrix.multiply(H.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const $=G.children;for(let z=0,Q=$.length;z<Q;z++)$[z].updateMatrixWorld(!0);G.projectionMatrix.copy(H.projectionMatrix),G.projectionMatrixInverse.copy(H.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ba*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&S===null))return f},this.setFoveation=function(G){f=G,d!==null&&(d.fixedFoveation=G),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=G)},this.getPlanes=function(){return M};let X=null;function O(G,H){if(h=H.getViewerPose(s||c),p=H,h!==null){const K=h.views;S!==null&&(e.setRenderTargetFramebuffer(m,S.framebuffer),e.setRenderTarget(m));let $=!1;K.length!==x.cameras.length&&(x.cameras.length=0,$=!0);for(let z=0;z<K.length;z++){const Q=K[z];let oe=null;if(S!==null)oe=S.getViewport(Q);else{const le=l.getViewSubImage(d,Q);oe=le.viewport,z===0&&(e.setRenderTargetTextures(m,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(m))}let Z=L[z];Z===void 0&&(Z=new Lt,Z.layers.enable(z),Z.viewport=new lt,L[z]=Z),Z.matrix.fromArray(Q.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(oe.x,oe.y,oe.width,oe.height),z===0&&(x.matrix.copy(Z.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),$===!0&&x.cameras.push(Z)}}for(let K=0;K<D.length;K++){const $=P[K],z=D[K];$!==null&&z!==void 0&&z.update($,H,s||c)}if(X&&X(G,H),H.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let K=null;for(const $ of M)H.detectedPlanes.has($)||(K===null&&(K=[]),K.push($));if(K!==null)for(const $ of K)M.delete($),w.delete($),n.dispatchEvent({type:"planeremoved",data:$});for(const $ of H.detectedPlanes)if(!M.has($))M.add($),w.set($,H.lastChangedTime),n.dispatchEvent({type:"planeadded",data:$});else{const z=w.get($);$.lastChangedTime>z&&(w.set($,$.lastChangedTime),n.dispatchEvent({type:"planechanged",data:$}))}}p=null}const N=new tu;N.setAnimationLoop(O),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}}function r_(i,e){function t(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Zl(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function o(y,m,D,P,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(y,m):m.isMeshToonMaterial?(a(y,m),l(y,m)):m.isMeshPhongMaterial?(a(y,m),h(y,m)):m.isMeshStandardMaterial?(a(y,m),d(y,m),m.isMeshPhysicalMaterial&&S(y,m,M)):m.isMeshMatcapMaterial?(a(y,m),p(y,m)):m.isMeshDepthMaterial?a(y,m):m.isMeshDistanceMaterial?(a(y,m),C(y,m)):m.isMeshNormalMaterial?a(y,m):m.isLineBasicMaterial?(c(y,m),m.isLineDashedMaterial&&r(y,m)):m.isPointsMaterial?f(y,m,D,P):m.isSpriteMaterial?s(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,t(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===yt&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,t(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===yt&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,t(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,t(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const D=e.get(m).envMap;if(D&&(y.envMap.value=D,y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap){y.lightMap.value=m.lightMap;const P=i.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=m.lightMapIntensity*P,t(m.lightMap,y.lightMapTransform)}m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,y.aoMapTransform))}function c(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform))}function r(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function f(y,m,D,P){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*D,y.scale.value=P*.5,m.map&&(y.map.value=m.map,t(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function s(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function l(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function d(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,y.roughnessMapTransform)),e.get(m).envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function S(y,m,D){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yt&&y.clearcoatNormalScale.value.negate())),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,y.specularIntensityMapTransform))}function p(y,m){m.matcap&&(y.matcap.value=m.matcap)}function C(y,m){const D=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function o_(i,e,t,n){let o={},a={},c=[];const r=t.isWebGL2?i.getParameter(35375):0;function f(D,P){const M=P.program;n.uniformBlockBinding(D,M)}function s(D,P){let M=o[D.id];M===void 0&&(p(D),M=h(D),o[D.id]=M,D.addEventListener("dispose",y));const w=P.program;n.updateUBOMapping(D,w);const T=e.render.frame;a[D.id]!==T&&(d(D),a[D.id]=T)}function h(D){const P=l();D.__bindingPointIndex=P;const M=i.createBuffer(),w=D.__size,T=D.usage;return i.bindBuffer(35345,M),i.bufferData(35345,w,T),i.bindBuffer(35345,null),i.bindBufferBase(35345,P,M),M}function l(){for(let D=0;D<r;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(D){const P=o[D.id],M=D.uniforms,w=D.__cache;i.bindBuffer(35345,P);for(let T=0,A=M.length;T<A;T++){const L=M[T];if(S(L,T,w)===!0){const x=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let _=0;for(let E=0;E<I.length;E++){const v=I[E],u=C(v);typeof v=="number"?(L.__data[0]=v,i.bufferSubData(35345,x+_,L.__data)):v.isMatrix3?(L.__data[0]=v.elements[0],L.__data[1]=v.elements[1],L.__data[2]=v.elements[2],L.__data[3]=v.elements[0],L.__data[4]=v.elements[3],L.__data[5]=v.elements[4],L.__data[6]=v.elements[5],L.__data[7]=v.elements[0],L.__data[8]=v.elements[6],L.__data[9]=v.elements[7],L.__data[10]=v.elements[8],L.__data[11]=v.elements[0]):(v.toArray(L.__data,_),_+=u.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,x,L.__data)}}i.bindBuffer(35345,null)}function S(D,P,M){const w=D.value;if(M[P]===void 0){if(typeof w=="number")M[P]=w;else{const T=Array.isArray(w)?w:[w],A=[];for(let L=0;L<T.length;L++)A.push(T[L].clone());M[P]=A}return!0}else if(typeof w=="number"){if(M[P]!==w)return M[P]=w,!0}else{const T=Array.isArray(M[P])?M[P]:[M[P]],A=Array.isArray(w)?w:[w];for(let L=0;L<T.length;L++){const x=T[L];if(x.equals(A[L])===!1)return x.copy(A[L]),!0}}return!1}function p(D){const P=D.uniforms;let M=0;const w=16;let T=0;for(let A=0,L=P.length;A<L;A++){const x=P[A],I={boundary:0,storage:0},_=Array.isArray(x.value)?x.value:[x.value];for(let E=0,v=_.length;E<v;E++){const u=_[E],g=C(u);I.boundary+=g.boundary,I.storage+=g.storage}if(x.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,A>0){T=M%w;const E=w-T;T!==0&&E-I.boundary<0&&(M+=w-T,x.__offset=M)}M+=I.storage}return T=M%w,T>0&&(M+=w-T),D.__size=M,D.__cache={},this}function C(D){const P={boundary:0,storage:0};return typeof D=="number"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function y(D){const P=D.target;P.removeEventListener("dispose",y);const M=c.indexOf(P.__bindingPointIndex);c.splice(M,1),i.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function m(){for(const D in o)i.deleteBuffer(o[D]);c=[],o={},a={}}return{bind:f,update:s,dispose:m}}function a_(){const i=Qr("canvas");return i.style.display="block",i}class su{constructor(e={}){const{canvas:t=a_(),context:n=null,depth:o=!0,stencil:a=!0,alpha:c=!1,antialias:r=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:s=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=c;let S=null,p=null;const C=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=zn,this.useLegacyLights=!0,this.toneMapping=ln,this.toneMappingExposure=1;const m=this;let D=!1,P=0,M=0,w=null,T=-1,A=null;const L=new lt,x=new lt;let I=null,_=t.width,E=t.height,v=1,u=null,g=null;const b=new lt(0,0,_,E),R=new lt(0,0,_,E);let U=!1;const F=new eu;let X=!1,O=!1,N=null;const G=new Ke,H=new fe,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $(){return w===null?v:1}let z=n;function Q(j,se){for(let de=0;de<j.length;de++){const ne=j[de],ge=t.getContext(ne,se);if(ge!==null)return ge}return null}try{const j={alpha:!0,depth:o,stencil:a,antialias:r,premultipliedAlpha:f,preserveDrawingBuffer:s,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ns}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Be,!1),z===null){const se=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&se.shift(),z=Q(se,j),z===null)throw Q(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(j){throw console.error("THREE.WebGLRenderer: "+j.message),j}let oe,Z,le,k,q,te,W,Y,J,ie,ce,ae,ue,V,B,re,me,_e,ye,Me,Se,he,Ee,Ae;function Ie(){oe=new vm(z),Z=new fm(z,oe,e),oe.init(Z),he=new e_(z,oe,Z),le=new Jg(z,oe,Z),k=new Sm,q=new Gg,te=new Qg(z,oe,le,q,Z,he,k),W=new hm(m),Y=new _m(m),J=new Cd(z,Z),Ee=new lm(z,oe,J,Z),ie=new ym(z,J,k,Ee),ce=new Mm(z,ie,J,k),ye=new bm(z,Z,te),re=new dm(q),ae=new Fg(m,W,Y,oe,Z,Ee,re),ue=new r_(m,q),V=new Vg,B=new jg(oe,Z),_e=new cm(m,W,Y,le,ce,d,f),me=new Zg(m,ce,Z),Ae=new o_(z,k,Z,le),Me=new um(z,oe,k,Z),Se=new xm(z,oe,k,Z),k.programs=ae.programs,m.capabilities=Z,m.extensions=oe,m.properties=q,m.renderLists=V,m.shadowMap=me,m.state=le,m.info=k}Ie();const be=new i_(m,z);this.xr=be,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const j=oe.get("WEBGL_lose_context");j&&j.loseContext()},this.forceContextRestore=function(){const j=oe.get("WEBGL_lose_context");j&&j.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(j){j!==void 0&&(v=j,this.setSize(_,E,!1))},this.getSize=function(j){return j.set(_,E)},this.setSize=function(j,se,de=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}_=j,E=se,t.width=Math.floor(j*v),t.height=Math.floor(se*v),de===!0&&(t.style.width=j+"px",t.style.height=se+"px"),this.setViewport(0,0,j,se)},this.getDrawingBufferSize=function(j){return j.set(_*v,E*v).floor()},this.setDrawingBufferSize=function(j,se,de){_=j,E=se,v=de,t.width=Math.floor(j*de),t.height=Math.floor(se*de),this.setViewport(0,0,j,se)},this.getCurrentViewport=function(j){return j.copy(L)},this.getViewport=function(j){return j.copy(b)},this.setViewport=function(j,se,de,ne){j.isVector4?b.set(j.x,j.y,j.z,j.w):b.set(j,se,de,ne),le.viewport(L.copy(b).multiplyScalar(v).floor())},this.getScissor=function(j){return j.copy(R)},this.setScissor=function(j,se,de,ne){j.isVector4?R.set(j.x,j.y,j.z,j.w):R.set(j,se,de,ne),le.scissor(x.copy(R).multiplyScalar(v).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(j){le.setScissorTest(U=j)},this.setOpaqueSort=function(j){u=j},this.setTransparentSort=function(j){g=j},this.getClearColor=function(j){return j.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(j=!0,se=!0,de=!0){let ne=0;j&&(ne|=16384),se&&(ne|=256),de&&(ne|=1024),z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),V.dispose(),B.dispose(),q.dispose(),W.dispose(),Y.dispose(),ce.dispose(),Ee.dispose(),Ae.dispose(),ae.dispose(),be.dispose(),be.removeEventListener("sessionstart",Pe),be.removeEventListener("sessionend",ke),N&&(N.dispose(),N=null),je.stop()};function we(j){j.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const j=k.autoReset,se=me.enabled,de=me.autoUpdate,ne=me.needsUpdate,ge=me.type;Ie(),k.autoReset=j,me.enabled=se,me.autoUpdate=de,me.needsUpdate=ne,me.type=ge}function Be(j){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",j.statusMessage)}function We(j){const se=j.target;se.removeEventListener("dispose",We),ee(se)}function ee(j){pe(j),q.remove(j)}function pe(j){const se=q.get(j).programs;se!==void 0&&(se.forEach(function(de){ae.releaseProgram(de)}),j.isShaderMaterial&&ae.releaseShaderCache(j))}this.renderBufferDirect=function(j,se,de,ne,ge,Re){se===null&&(se=K);const Le=ge.isMesh&&ge.matrixWorld.determinant()<0,Ce=gr(j,se,de,ne,ge);le.setMaterial(ne,Le);let Ne=de.index,De=1;ne.wireframe===!0&&(Ne=ie.getWireframeAttribute(de),De=2);const Fe=de.drawRange,Ge=de.attributes.position;let He=Fe.start*De,ht=(Fe.start+Fe.count)*De;Re!==null&&(He=Math.max(He,Re.start*De),ht=Math.min(ht,(Re.start+Re.count)*De)),Ne!==null?(He=Math.max(He,0),ht=Math.min(ht,Ne.count)):Ge!=null&&(He=Math.max(He,0),ht=Math.min(ht,Ge.count));const Nt=ht-He;if(Nt<0||Nt===1/0)return;Ee.setup(ge,ne,Ce,de,Ne);let An,Je=Me;if(Ne!==null&&(An=J.get(Ne),Je=Se,Je.setIndex(An)),ge.isMesh)ne.wireframe===!0?(le.setLineWidth(ne.wireframeLinewidth*$()),Je.setMode(1)):Je.setMode(4);else if(ge.isLine){let ze=ne.linewidth;ze===void 0&&(ze=1),le.setLineWidth(ze*$()),ge.isLineSegments?Je.setMode(1):ge.isLineLoop?Je.setMode(2):Je.setMode(3)}else ge.isPoints?Je.setMode(0):ge.isSprite&&Je.setMode(4);if(ge.isInstancedMesh)Je.renderInstances(He,Nt,ge.count);else if(de.isInstancedBufferGeometry){const ze=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Eo=Math.min(de.instanceCount,ze);Je.renderInstances(He,Nt,Eo)}else Je.render(He,Nt)},this.compile=function(j,se){function de(ne,ge,Re){ne.transparent===!0&&ne.side===cn&&ne.forceSinglePass===!1?(ne.side=yt,ne.needsUpdate=!0,Wn(ne,ge,Re),ne.side=Tn,ne.needsUpdate=!0,Wn(ne,ge,Re),ne.side=cn):Wn(ne,ge,Re)}p=B.get(j),p.init(),y.push(p),j.traverseVisible(function(ne){ne.isLight&&ne.layers.test(se.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights(m.useLegacyLights),j.traverse(function(ne){const ge=ne.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){const Le=ge[Re];de(Le,j,ne)}else de(ge,j,ne)}),y.pop(),p=null};let ve=null;function Te(j){ve&&ve(j)}function Pe(){je.stop()}function ke(){je.start()}const je=new tu;je.setAnimationLoop(Te),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(j){ve=j,be.setAnimationLoop(j),j===null?je.stop():je.start()},be.addEventListener("sessionstart",Pe),be.addEventListener("sessionend",ke),this.render=function(j,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(se),se=be.getCamera()),j.isScene===!0&&j.onBeforeRender(m,j,se,w),p=B.get(j,y.length),p.init(),y.push(p),G.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F.setFromProjectionMatrix(G),O=this.localClippingEnabled,X=re.init(this.clippingPlanes,O),S=V.get(j,C.length),S.init(),C.push(S),it(j,se,0,m.sortObjects),S.finish(),m.sortObjects===!0&&S.sort(u,g),X===!0&&re.beginShadows();const de=p.state.shadowsArray;if(me.render(de,j,se),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(S,j),p.setupLights(m.useLegacyLights),se.isArrayCamera){const ne=se.cameras;for(let ge=0,Re=ne.length;ge<Re;ge++){const Le=ne[ge];Ot(S,j,Le,Le.viewport)}}else Ot(S,j,se);w!==null&&(te.updateMultisampleRenderTarget(w),te.updateRenderTargetMipmap(w)),j.isScene===!0&&j.onAfterRender(m,j,se),Ee.resetDefaultState(),T=-1,A=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function it(j,se,de,ne){if(j.visible===!1)return;if(j.layers.test(se.layers)){if(j.isGroup)de=j.renderOrder;else if(j.isLOD)j.autoUpdate===!0&&j.update(se);else if(j.isLight)p.pushLight(j),j.castShadow&&p.pushShadow(j);else if(j.isSprite){if(!j.frustumCulled||F.intersectsSprite(j)){ne&&H.setFromMatrixPosition(j.matrixWorld).applyMatrix4(G);const Le=ce.update(j),Ce=j.material;Ce.visible&&S.push(j,Le,Ce,de,H.z,null)}}else if((j.isMesh||j.isLine||j.isPoints)&&(j.isSkinnedMesh&&j.skeleton.frame!==k.render.frame&&(j.skeleton.update(),j.skeleton.frame=k.render.frame),!j.frustumCulled||F.intersectsObject(j))){ne&&H.setFromMatrixPosition(j.matrixWorld).applyMatrix4(G);const Le=ce.update(j),Ce=j.material;if(Array.isArray(Ce)){const Ne=Le.groups;for(let De=0,Fe=Ne.length;De<Fe;De++){const Ge=Ne[De],He=Ce[Ge.materialIndex];He&&He.visible&&S.push(j,Le,He,de,H.z,Ge)}}else Ce.visible&&S.push(j,Le,Ce,de,H.z,null)}}const Re=j.children;for(let Le=0,Ce=Re.length;Le<Ce;Le++)it(Re[Le],se,de,ne)}function Ot(j,se,de,ne){const ge=j.opaque,Re=j.transmissive,Le=j.transparent;p.setupLightsView(de),X===!0&&re.setGlobalState(m.clippingPlanes,de),Re.length>0&&qe(ge,Re,se,de),ne&&le.viewport(L.copy(ne)),ge.length>0&&dt(ge,se,de),Re.length>0&&dt(Re,se,de),Le.length>0&&dt(Le,se,de),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function qe(j,se,de,ne){if(N===null){const Ce=Z.isWebGL2;N=new un(1024,1024,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Qi:Vn,minFilter:Ji,samples:Ce&&r===!0?4:0})}const ge=m.getRenderTarget();m.setRenderTarget(N),m.clear();const Re=m.toneMapping;m.toneMapping=ln,dt(j,de,ne),te.updateMultisampleRenderTarget(N),te.updateRenderTargetMipmap(N);let Le=!1;for(let Ce=0,Ne=se.length;Ce<Ne;Ce++){const De=se[Ce],Fe=De.object,Ge=De.geometry,He=De.material,ht=De.group;if(He.side===cn&&Fe.layers.test(ne.layers)){const Nt=He.side;He.side=yt,He.needsUpdate=!0,xt(Fe,de,ne,Ge,He,ht),He.side=Nt,He.needsUpdate=!0,Le=!0}}Le===!0&&(te.updateMultisampleRenderTarget(N),te.updateRenderTargetMipmap(N)),m.setRenderTarget(ge),m.toneMapping=Re}function dt(j,se,de){const ne=se.isScene===!0?se.overrideMaterial:null;for(let ge=0,Re=j.length;ge<Re;ge++){const Le=j[ge],Ce=Le.object,Ne=Le.geometry,De=ne===null?Le.material:ne,Fe=Le.group;Ce.layers.test(de.layers)&&xt(Ce,se,de,Ne,De,Fe)}}function xt(j,se,de,ne,ge,Re){j.onBeforeRender(m,se,de,ne,ge,Re),j.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,j.matrixWorld),j.normalMatrix.getNormalMatrix(j.modelViewMatrix),ge.onBeforeRender(m,se,de,ne,j,Re),ge.transparent===!0&&ge.side===cn&&ge.forceSinglePass===!1?(ge.side=yt,ge.needsUpdate=!0,m.renderBufferDirect(de,se,ne,ge,j,Re),ge.side=Tn,ge.needsUpdate=!0,m.renderBufferDirect(de,se,ne,ge,j,Re),ge.side=cn):m.renderBufferDirect(de,se,ne,ge,j,Re),j.onAfterRender(m,se,de,ne,ge,Re)}function Wn(j,se,de){se.isScene!==!0&&(se=K);const ne=q.get(j),ge=p.state.lights,Re=p.state.shadowsArray,Le=ge.state.version,Ce=ae.getParameters(j,ge.state,Re,se,de),Ne=ae.getProgramCacheKey(Ce);let De=ne.programs;ne.environment=j.isMeshStandardMaterial?se.environment:null,ne.fog=se.fog,ne.envMap=(j.isMeshStandardMaterial?Y:W).get(j.envMap||ne.environment),De===void 0&&(j.addEventListener("dispose",We),De=new Map,ne.programs=De);let Fe=De.get(Ne);if(Fe!==void 0){if(ne.currentProgram===Fe&&ne.lightsStateVersion===Le)return mr(j,Ce),Fe}else Ce.uniforms=ae.getUniforms(j),j.onBuild(de,Ce,m),j.onBeforeCompile(Ce,m),Fe=ae.acquireProgram(Ce,Ne),De.set(Ne,Fe),ne.uniforms=Ce.uniforms;const Ge=ne.uniforms;(!j.isShaderMaterial&&!j.isRawShaderMaterial||j.clipping===!0)&&(Ge.clippingPlanes=re.uniform),mr(j,Ce),ne.needsLights=To(j),ne.lightsStateVersion=Le,ne.needsLights&&(Ge.ambientLightColor.value=ge.state.ambient,Ge.lightProbe.value=ge.state.probe,Ge.directionalLights.value=ge.state.directional,Ge.directionalLightShadows.value=ge.state.directionalShadow,Ge.spotLights.value=ge.state.spot,Ge.spotLightShadows.value=ge.state.spotShadow,Ge.rectAreaLights.value=ge.state.rectArea,Ge.ltc_1.value=ge.state.rectAreaLTC1,Ge.ltc_2.value=ge.state.rectAreaLTC2,Ge.pointLights.value=ge.state.point,Ge.pointLightShadows.value=ge.state.pointShadow,Ge.hemisphereLights.value=ge.state.hemi,Ge.directionalShadowMap.value=ge.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,Ge.spotShadowMap.value=ge.state.spotShadowMap,Ge.spotLightMatrix.value=ge.state.spotLightMatrix,Ge.spotLightMap.value=ge.state.spotLightMap,Ge.pointShadowMap.value=ge.state.pointShadowMap,Ge.pointShadowMatrix.value=ge.state.pointShadowMatrix);const He=Fe.getUniforms(),ht=Wr.seqWithValue(He.seq,Ge);return ne.currentProgram=Fe,ne.uniformsList=ht,Fe}function mr(j,se){const de=q.get(j);de.outputEncoding=se.outputEncoding,de.instancing=se.instancing,de.skinning=se.skinning,de.morphTargets=se.morphTargets,de.morphNormals=se.morphNormals,de.morphColors=se.morphColors,de.morphTargetsCount=se.morphTargetsCount,de.numClippingPlanes=se.numClippingPlanes,de.numIntersection=se.numClipIntersection,de.vertexAlphas=se.vertexAlphas,de.vertexTangents=se.vertexTangents,de.toneMapping=se.toneMapping}function gr(j,se,de,ne,ge){se.isScene!==!0&&(se=K),te.resetTextureUnits();const Re=se.fog,Le=ne.isMeshStandardMaterial?se.environment:null,Ce=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:zn,Ne=(ne.isMeshStandardMaterial?Y:W).get(ne.envMap||Le),De=ne.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Fe=!!ne.normalMap&&!!de.attributes.tangent,Ge=!!de.morphAttributes.position,He=!!de.morphAttributes.normal,ht=!!de.morphAttributes.color,Nt=ne.toneMapped?m.toneMapping:ln,An=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Je=An!==void 0?An.length:0,ze=q.get(ne),Eo=p.state.lights;if(X===!0&&(O===!0||j!==A)){const St=j===A&&ne.id===T;re.setState(ne,j,St)}let rt=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Eo.state.version||ze.outputEncoding!==Ce||ge.isInstancedMesh&&ze.instancing===!1||!ge.isInstancedMesh&&ze.instancing===!0||ge.isSkinnedMesh&&ze.skinning===!1||!ge.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ne||ne.fog===!0&&ze.fog!==Re||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==re.numPlanes||ze.numIntersection!==re.numIntersection)||ze.vertexAlphas!==De||ze.vertexTangents!==Fe||ze.morphTargets!==Ge||ze.morphNormals!==He||ze.morphColors!==ht||ze.toneMapping!==Nt||Z.isWebGL2===!0&&ze.morphTargetsCount!==Je)&&(rt=!0):(rt=!0,ze.__version=ne.version);let wn=ze.currentProgram;rt===!0&&(wn=Wn(ne,se,ge));let _s=!1,Ni=!1,bo=!1;const pt=wn.getUniforms(),Pn=ze.uniforms;if(le.useProgram(wn.program)&&(_s=!0,Ni=!0,bo=!0),ne.id!==T&&(T=ne.id,Ni=!0),_s||A!==j){if(pt.setValue(z,"projectionMatrix",j.projectionMatrix),Z.logarithmicDepthBuffer&&pt.setValue(z,"logDepthBufFC",2/(Math.log(j.far+1)/Math.LN2)),A!==j&&(A=j,Ni=!0,bo=!0),ne.isShaderMaterial||ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshStandardMaterial||ne.envMap){const St=pt.map.cameraPosition;St!==void 0&&St.setValue(z,H.setFromMatrixPosition(j.matrixWorld))}(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&pt.setValue(z,"isOrthographic",j.isOrthographicCamera===!0),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial||ne.isShadowMaterial||ge.isSkinnedMesh)&&pt.setValue(z,"viewMatrix",j.matrixWorldInverse)}if(ge.isSkinnedMesh){pt.setOptional(z,ge,"bindMatrix"),pt.setOptional(z,ge,"bindMatrixInverse");const St=ge.skeleton;St&&(Z.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),pt.setValue(z,"boneTexture",St.boneTexture,te),pt.setValue(z,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Mo=de.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0&&Z.isWebGL2===!0)&&ye.update(ge,de,wn),(Ni||ze.receiveShadow!==ge.receiveShadow)&&(ze.receiveShadow=ge.receiveShadow,pt.setValue(z,"receiveShadow",ge.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Pn.envMap.value=Ne,Pn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Ni&&(pt.setValue(z,"toneMappingExposure",m.toneMappingExposure),ze.needsLights&&Oi(Pn,bo),Re&&ne.fog===!0&&ue.refreshFogUniforms(Pn,Re),ue.refreshMaterialUniforms(Pn,ne,v,E,N),Wr.upload(z,ze.uniformsList,Pn,te)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Wr.upload(z,ze.uniformsList,Pn,te),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&pt.setValue(z,"center",ge.center),pt.setValue(z,"modelViewMatrix",ge.modelViewMatrix),pt.setValue(z,"normalMatrix",ge.normalMatrix),pt.setValue(z,"modelMatrix",ge.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const St=ne.uniformsGroups;for(let Ao=0,ju=St.length;Ao<ju;Ao++)if(Z.isWebGL2){const vs=St[Ao];Ae.update(vs,wn),Ae.bind(vs,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function Oi(j,se){j.ambientLightColor.needsUpdate=se,j.lightProbe.needsUpdate=se,j.directionalLights.needsUpdate=se,j.directionalLightShadows.needsUpdate=se,j.pointLights.needsUpdate=se,j.pointLightShadows.needsUpdate=se,j.spotLights.needsUpdate=se,j.spotLightShadows.needsUpdate=se,j.rectAreaLights.needsUpdate=se,j.hemisphereLights.needsUpdate=se}function To(j){return j.isMeshLambertMaterial||j.isMeshToonMaterial||j.isMeshPhongMaterial||j.isMeshStandardMaterial||j.isShadowMaterial||j.isShaderMaterial&&j.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(j,se,de){q.get(j.texture).__webglTexture=se,q.get(j.depthTexture).__webglTexture=de;const ne=q.get(j);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=de===void 0,ne.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(j,se){const de=q.get(j);de.__webglFramebuffer=se,de.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(j,se=0,de=0){w=j,P=se,M=de;let ne=!0,ge=null,Re=!1,Le=!1;if(j){const Ne=q.get(j);Ne.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),ne=!1):Ne.__webglFramebuffer===void 0?te.setupRenderTarget(j):Ne.__hasExternalTextures&&te.rebindTextures(j,q.get(j.texture).__webglTexture,q.get(j.depthTexture).__webglTexture);const De=j.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Le=!0);const Fe=q.get(j).__webglFramebuffer;j.isWebGLCubeRenderTarget?(ge=Fe[se],Re=!0):Z.isWebGL2&&j.samples>0&&te.useMultisampledRTT(j)===!1?ge=q.get(j).__webglMultisampledFramebuffer:ge=Fe,L.copy(j.viewport),x.copy(j.scissor),I=j.scissorTest}else L.copy(b).multiplyScalar(v).floor(),x.copy(R).multiplyScalar(v).floor(),I=U;if(le.bindFramebuffer(36160,ge)&&Z.drawBuffers&&ne&&le.drawBuffers(j,ge),le.viewport(L),le.scissor(x),le.setScissorTest(I),Re){const Ne=q.get(j.texture);z.framebufferTexture2D(36160,36064,34069+se,Ne.__webglTexture,de)}else if(Le){const Ne=q.get(j.texture),De=se||0;z.framebufferTextureLayer(36160,36064,Ne.__webglTexture,de||0,De)}T=-1},this.readRenderTargetPixels=function(j,se,de,ne,ge,Re,Le){if(!(j&&j.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=q.get(j).__webglFramebuffer;if(j.isWebGLCubeRenderTarget&&Le!==void 0&&(Ce=Ce[Le]),Ce){le.bindFramebuffer(36160,Ce);try{const Ne=j.texture,De=Ne.format,Fe=Ne.type;if(De!==zt&&he.convert(De)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Fe===Qi&&(oe.has("EXT_color_buffer_half_float")||Z.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Fe!==Vn&&he.convert(Fe)!==z.getParameter(35738)&&!(Fe===Gn&&(Z.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=j.width-ne&&de>=0&&de<=j.height-ge&&z.readPixels(se,de,ne,ge,he.convert(De),he.convert(Fe),Re)}finally{const Ne=w!==null?q.get(w).__webglFramebuffer:null;le.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(j,se,de=0){const ne=Math.pow(2,-de),ge=Math.floor(se.image.width*ne),Re=Math.floor(se.image.height*ne);te.setTexture2D(se,0),z.copyTexSubImage2D(3553,de,0,0,j.x,j.y,ge,Re),le.unbindTexture()},this.copyTextureToTexture=function(j,se,de,ne=0){const ge=se.image.width,Re=se.image.height,Le=he.convert(de.format),Ce=he.convert(de.type);te.setTexture2D(de,0),z.pixelStorei(37440,de.flipY),z.pixelStorei(37441,de.premultiplyAlpha),z.pixelStorei(3317,de.unpackAlignment),se.isDataTexture?z.texSubImage2D(3553,ne,j.x,j.y,ge,Re,Le,Ce,se.image.data):se.isCompressedTexture?z.compressedTexSubImage2D(3553,ne,j.x,j.y,se.mipmaps[0].width,se.mipmaps[0].height,Le,se.mipmaps[0].data):z.texSubImage2D(3553,ne,j.x,j.y,Le,Ce,se.image),ne===0&&de.generateMipmaps&&z.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(j,se,de,ne,ge=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=j.max.x-j.min.x+1,Le=j.max.y-j.min.y+1,Ce=j.max.z-j.min.z+1,Ne=he.convert(ne.format),De=he.convert(ne.type);let Fe;if(ne.isData3DTexture)te.setTexture3D(ne,0),Fe=32879;else if(ne.isDataArrayTexture)te.setTexture2DArray(ne,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,ne.flipY),z.pixelStorei(37441,ne.premultiplyAlpha),z.pixelStorei(3317,ne.unpackAlignment);const Ge=z.getParameter(3314),He=z.getParameter(32878),ht=z.getParameter(3316),Nt=z.getParameter(3315),An=z.getParameter(32877),Je=de.isCompressedTexture?de.mipmaps[0]:de.image;z.pixelStorei(3314,Je.width),z.pixelStorei(32878,Je.height),z.pixelStorei(3316,j.min.x),z.pixelStorei(3315,j.min.y),z.pixelStorei(32877,j.min.z),de.isDataTexture||de.isData3DTexture?z.texSubImage3D(Fe,ge,se.x,se.y,se.z,Re,Le,Ce,Ne,De,Je.data):de.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Fe,ge,se.x,se.y,se.z,Re,Le,Ce,Ne,Je.data)):z.texSubImage3D(Fe,ge,se.x,se.y,se.z,Re,Le,Ce,Ne,De,Je),z.pixelStorei(3314,Ge),z.pixelStorei(32878,He),z.pixelStorei(3316,ht),z.pixelStorei(3315,Nt),z.pixelStorei(32877,An),ge===0&&ne.generateMipmaps&&z.generateMipmap(Fe),le.unbindTexture()},this.initTexture=function(j){j.isCubeTexture?te.setTextureCube(j,0):j.isData3DTexture?te.setTexture3D(j,0):j.isDataArrayTexture||j.isCompressedArrayTexture?te.setTexture2DArray(j,0):te.setTexture2D(j,0),le.unbindTexture()},this.resetState=function(){P=0,M=0,w=null,le.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class s_ extends su{}s_.prototype.isWebGL1Renderer=!0;class ia extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class tr extends Ht{constructor(e,t,n,o=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class as extends fn{constructor(e=1,t=1,n=1,o=32,a=1,c=!1,r=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:r,thetaLength:f};const s=this;o=Math.floor(o),a=Math.floor(a);const h=[],l=[],d=[],S=[];let p=0;const C=[],y=n/2;let m=0;D(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(S,2));function D(){const M=new fe,w=new fe;let T=0;const A=(t-e)/n;for(let L=0;L<=a;L++){const x=[],I=L/a,_=I*(t-e)+e;for(let E=0;E<=o;E++){const v=E/o,u=v*f+r,g=Math.sin(u),b=Math.cos(u);w.x=_*g,w.y=-I*n+y,w.z=_*b,l.push(w.x,w.y,w.z),M.set(g,A,b).normalize(),d.push(M.x,M.y,M.z),S.push(v,1-I),x.push(p++)}C.push(x)}for(let L=0;L<o;L++)for(let x=0;x<a;x++){const I=C[x][L],_=C[x+1][L],E=C[x+1][L+1],v=C[x][L+1];h.push(I,_,v),h.push(_,E,v),T+=6}s.addGroup(m,T,0),m+=T}function P(M){const w=p,T=new Xe,A=new fe;let L=0;const x=M===!0?e:t,I=M===!0?1:-1;for(let E=1;E<=o;E++)l.push(0,y*I,0),d.push(0,I,0),S.push(.5,.5),p++;const _=p;for(let E=0;E<=o;E++){const u=E/o*f+r,g=Math.cos(u),b=Math.sin(u);A.x=x*b,A.y=y*I,A.z=x*g,l.push(A.x,A.y,A.z),d.push(0,I,0),T.x=g*.5+.5,T.y=b*.5*I+.5,S.push(T.x,T.y),p++}for(let E=0;E<o;E++){const v=w+E,u=_+E;M===!0?h.push(u,u+1,v):h.push(u+1,u,v),L+=3}s.addGroup(m,L,M===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cu extends fn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gt{constructor(e){this.value=e}clone(){return new Gt(this.value.clone===void 0?this.value:this.value.clone())}}let c_=0;class l_ extends Hn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:c_++}),this.name="",this.usage=Fa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,o=t.length;n<o;n++)this.uniforms.push(t[n].clone());return this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ns}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ns);const lu=Ze.infinite(()=>({globalPerspective:new Gt(new Ke),globalView:new Gt(new Ke),zoomedProjection:new Gt(new Ke),zoomedView:new Gt(new Ke),fixedPerspective:new Gt(new Ke),fixedView:new Gt(new Ke),distance:new Gt(0),center:new Gt(new fe(0,0,0)),rotationCenter:new Gt(new fe(0,0,0))})),uu=Ze.infinite(()=>{const i=new l_;i.setName("cameras");const e=lu();return Object.values(e).forEach(t=>{i.add(t)}),i}),u_=Zi((i,e,t,n,o,a,c)=>{const r=lu();r.globalPerspective.value.fromArray(i),r.globalView.value.fromArray(e),r.zoomedProjection.value.fromArray(t),r.zoomedView.value.fromArray(n),r.fixedPerspective.value.fromArray(o),r.fixedView.value.fromArray(a),r.distance.value=c[0],r.center.value.fromArray(c.slice(1,4)),r.rotationCenter.value.fromArray(c.slice(4,7))});var fr={};function f_(i){if(typeof i=="object"){if("buttons"in i)return i.buttons;if("which"in i){var e=i.which;if(e===2)return 4;if(e===3)return 2;if(e>0)return 1<<e-1}else if("button"in i){var e=i.button;if(e===1)return 4;if(e===2)return 2;if(e>=0)return 1<<e}}return 0}fr.buttons=f_;function ss(i){return i.target||i.srcElement||window}fr.element=ss;function d_(i){if(typeof i=="object"){if("offsetX"in i)return i.offsetX;var e=ss(i),t=e.getBoundingClientRect();return i.clientX-t.left}return 0}fr.x=d_;function h_(i){if(typeof i=="object"){if("offsetY"in i)return i.offsetY;var e=ss(i),t=e.getBoundingClientRect();return i.clientY-t.top}return 0}fr.y=h_;var p_=m_,Bi=fr;function m_(i,e){e||(e=i,i=window);var t=0,n=0,o=0,a={shift:!1,alt:!1,control:!1,meta:!1},c=!1;function r(D){var P=!1;return"altKey"in D&&(P=P||D.altKey!==a.alt,a.alt=!!D.altKey),"shiftKey"in D&&(P=P||D.shiftKey!==a.shift,a.shift=!!D.shiftKey),"ctrlKey"in D&&(P=P||D.ctrlKey!==a.control,a.control=!!D.ctrlKey),"metaKey"in D&&(P=P||D.metaKey!==a.meta,a.meta=!!D.metaKey),P}function f(D,P){var M=Bi.x(P),w=Bi.y(P);"buttons"in P&&(D=P.buttons|0),(D!==t||M!==n||w!==o||r(P))&&(t=D|0,n=M||0,o=w||0,e&&e(t,n,o,a))}function s(D){f(0,D)}function h(){(t||n||o||a.shift||a.alt||a.meta||a.control)&&(n=o=0,t=0,a.shift=a.alt=a.control=a.meta=!1,e&&e(0,0,0,a))}function l(D){r(D)&&e&&e(t,n,o,a)}function d(D){Bi.buttons(D)===0?f(0,D):f(t,D)}function S(D){f(t|Bi.buttons(D),D)}function p(D){f(t&~Bi.buttons(D),D)}function C(){c||(c=!0,i.addEventListener("mousemove",d),i.addEventListener("mousedown",S),i.addEventListener("mouseup",p),i.addEventListener("mouseleave",s),i.addEventListener("mouseenter",s),i.addEventListener("mouseout",s),i.addEventListener("mouseover",s),i.addEventListener("blur",h),i.addEventListener("keyup",l),i.addEventListener("keydown",l),i.addEventListener("keypress",l),i!==window&&(window.addEventListener("blur",h),window.addEventListener("keyup",l),window.addEventListener("keydown",l),window.addEventListener("keypress",l)))}function y(){c&&(c=!1,i.removeEventListener("mousemove",d),i.removeEventListener("mousedown",S),i.removeEventListener("mouseup",p),i.removeEventListener("mouseleave",s),i.removeEventListener("mouseenter",s),i.removeEventListener("mouseout",s),i.removeEventListener("mouseover",s),i.removeEventListener("blur",h),i.removeEventListener("keyup",l),i.removeEventListener("keydown",l),i.removeEventListener("keypress",l),i!==window&&(window.removeEventListener("blur",h),window.removeEventListener("keyup",l),window.removeEventListener("keydown",l),window.removeEventListener("keypress",l)))}C();var m={element:i};return Object.defineProperties(m,{enabled:{get:function(){return c},set:function(D){D?C():y()},enumerable:!0},buttons:{get:function(){return t},enumerable:!0},x:{get:function(){return n},enumerable:!0},y:{get:function(){return o},enumerable:!0},mods:{get:function(){return a},enumerable:!0}}),m}var g_={left:0,top:0},__=v_;function v_(i,e,t){e=e||i.currentTarget||i.srcElement,Array.isArray(t)||(t=[0,0]);var n=i.clientX||0,o=i.clientY||0,a=y_(e);return t[0]=n-a.left,t[1]=o-a.top,t}function y_(i){return i===window||i===document||i===document.body?g_:i.getBoundingClientRect()}var eo={},x_={get exports(){return eo},set exports(i){eo=i}},ka={},S_={get exports(){return ka},set exports(i){ka=i}},T_=void 0,fu=function(i){return i!==T_&&i!==null},E_=fu,b_={object:!0,function:!0,undefined:!0},M_=function(i){return E_(i)?hasOwnProperty.call(b_,typeof i):!1},A_=M_,w_=function(i){if(!A_(i))return!1;try{return i.constructor?i.constructor.prototype===i:!1}catch{return!1}},P_=w_,R_=function(i){if(typeof i!="function"||!hasOwnProperty.call(i,"length"))return!1;try{if(typeof i.length!="number"||typeof i.call!="function"||typeof i.apply!="function")return!1}catch{return!1}return!P_(i)},I_=R_,L_=/^\s*class[\s{/}]/,C_=Function.prototype.toString,O_=function(i){return!(!I_(i)||L_.test(C_.call(i)))},N_=function(){var i=Object.assign,e;return typeof i!="function"?!1:(e={foo:"raz"},i(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")},ra,Dc;function U_(){return Dc||(Dc=1,ra=function(){try{return Object.keys("primitive"),!0}catch{return!1}}),ra}var D_=function(){},F_=D_(),cs=function(i){return i!==F_&&i!==null},oa,Fc;function G_(){if(Fc)return oa;Fc=1;var i=cs,e=Object.keys;return oa=function(t){return e(i(t)?Object(t):t)},oa}var aa,Gc;function B_(){return Gc||(Gc=1,aa=U_()()?Object.keys:G_()),aa}var sa,Bc;function V_(){if(Bc)return sa;Bc=1;var i=cs;return sa=function(e){if(!i(e))throw new TypeError("Cannot use null or undefined");return e},sa}var ca,Vc;function z_(){if(Vc)return ca;Vc=1;var i=B_(),e=V_(),t=Math.max;return ca=function(n,o){var a,c,r=t(arguments.length,2),f;for(n=Object(e(n)),f=function(s){try{n[s]=o[s]}catch(h){a||(a=h)}},c=1;c<r;++c)o=arguments[c],i(o).forEach(f);if(a!==void 0)throw a;return n},ca}var k_=N_()?Object.assign:z_(),H_=cs,W_=Array.prototype.forEach,X_=Object.create,j_=function(i,e){var t;for(t in i)e[t]=i[t]},$_=function(i){var e=X_(null);return W_.call(arguments,function(t){H_(t)&&j_(Object(t),e)}),e},la="razdwatrzy",Y_=function(){return typeof la.contains!="function"?!1:la.contains("dwa")===!0&&la.contains("foo")===!1},ua,zc;function q_(){if(zc)return ua;zc=1;var i=String.prototype.indexOf;return ua=function(e){return i.call(this,e,arguments[1])>-1},ua}var K_=Y_()?String.prototype.contains:q_(),Xr=fu,kc=O_,du=k_,hu=$_,Yi=K_,Z_=S_.exports=function(i,e){var t,n,o,a,c;return arguments.length<2||typeof i!="string"?(a=e,e=i,i=null):a=arguments[2],Xr(i)?(t=Yi.call(i,"c"),n=Yi.call(i,"e"),o=Yi.call(i,"w")):(t=o=!0,n=!1),c={value:e,configurable:t,enumerable:n,writable:o},a?du(hu(a),c):c};Z_.gs=function(i,e,t){var n,o,a,c;return typeof i!="string"?(a=t,t=e,e=i,i=null):a=arguments[3],Xr(e)?kc(e)?Xr(t)?kc(t)||(a=t,t=void 0):t=void 0:(a=e,e=t=void 0):e=void 0,Xr(i)?(n=Yi.call(i,"c"),o=Yi.call(i,"e")):(n=!0,o=!1),c={get:e,set:t,configurable:n,enumerable:o},a?du(hu(a),c):c};var J_=function(i){if(typeof i!="function")throw new TypeError(i+" is not a function");return i};(function(i,e){var t=ka,n=J_,o=Function.prototype.apply,a=Function.prototype.call,c=Object.create,r=Object.defineProperty,f=Object.defineProperties,s=Object.prototype.hasOwnProperty,h={configurable:!0,enumerable:!1,writable:!0},l,d,S,p,C,y,m;l=function(D,P){var M;return n(P),s.call(this,"__ee__")?M=this.__ee__:(M=h.value=c(null),r(this,"__ee__",h),h.value=null),M[D]?typeof M[D]=="object"?M[D].push(P):M[D]=[M[D],P]:M[D]=P,this},d=function(D,P){var M,w;return n(P),w=this,l.call(this,D,M=function(){S.call(w,D,M),o.call(P,this,arguments)}),M.__eeOnceListener__=P,this},S=function(D,P){var M,w,T,A;if(n(P),!s.call(this,"__ee__"))return this;if(M=this.__ee__,!M[D])return this;if(w=M[D],typeof w=="object")for(A=0;T=w[A];++A)(T===P||T.__eeOnceListener__===P)&&(w.length===2?M[D]=w[A?0:1]:w.splice(A,1));else(w===P||w.__eeOnceListener__===P)&&delete M[D];return this},p=function(D){var P,M,w,T,A;if(s.call(this,"__ee__")&&(T=this.__ee__[D],!!T))if(typeof T=="object"){for(M=arguments.length,A=new Array(M-1),P=1;P<M;++P)A[P-1]=arguments[P];for(T=T.slice(),P=0;w=T[P];++P)o.call(w,this,A)}else switch(arguments.length){case 1:a.call(T,this);break;case 2:a.call(T,this,arguments[1]);break;case 3:a.call(T,this,arguments[1],arguments[2]);break;default:for(M=arguments.length,A=new Array(M-1),P=1;P<M;++P)A[P-1]=arguments[P];o.call(T,this,A)}},C={on:l,once:d,off:S,emit:p},y={on:t(l),once:t(d),off:t(S),emit:t(p)},m=f({},y),i.exports=e=function(D){return D==null?c(m):f(Object(D),y)},e.methods=C})(x_,eo);var jr=tv,Q_=p_,ci=__,ev=eo;function tv(i){i=i||window;var e=ev(),t=[null,null],n=[null,null],o=[null,null],a=[null,null],c=0,r={},f,s,h=i===window?function(){f=window.innerWidth,s=window.innerHeight}:function(){f=i.clientWidth,s=i.clientHeight},l=0,d,S,p={},C=Q_(i,function(u,g,b,R){d=g,S=b,l=u,p=R});function y(u){ci(u,i,o),h(),r.buttons=l,r.mods=p,r.x0=r.x=r.x1=2*o[0]/f-1,r.y0=r.y=r.y1=1-2*o[1]/s,r.x2=null,r.y2=null,r.dx=2*u.deltaX/f,r.dy=-2*u.deltaY/s,r.dz=2*u.deltaZ/f,r.active=1,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("wheel",r),t[0]=o[0],t[1]=o[1]}var m=null,D=null,P=0;function M(u){ci(u,i,o),P=0,h(),r.buttons=l,r.mods=p,r.x=r.x1=2*o[0]/f-1,r.y=r.y1=1-2*o[1]/s,r.x2=null,r.y2=null,r.active=P,r.x0=2*m/f-1,r.y0=1-2*D/s,r.dx=0,r.dy=0,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("mouseup",r),m=D=null,t[0]=o[0],t[1]=o[1]}function w(u){ci(u,i,o),P=1,h(),m=d,D=S,r.buttons=l,r.mods=p,r.x=r.x0=r.x1=2*o[0]/f-1,r.y=r.y0=r.y1=1-2*o[1]/s,r.x2=null,r.y2=null,r.active=P,r.dx=0,r.dy=0,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("mousedown",r),t[0]=o[0],t[1]=o[1]}function T(u){ci(u,i,o),h(),r.buttons=l,r.mods=p,r.x0=2*m/f-1,r.y0=1-2*D/s,r.x=r.x1=2*o[0]/f-1,r.y=r.y1=1-2*o[1]/s,r.x2=null,r.y2=null,r.dx=2*(o[0]-t[0])/f,r.dy=-2*(o[1]-t[1])/s,r.active=P,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("mousemove",r),t[0]=o[0],t[1]=o[1]}function A(u){for(var g=u.identifier,b=0;b<a.length;b++)if(a[b]&&a[b].touch&&a[b].touch.identifier===g)return b;return-1}function L(u){n[0]=null,n[1]=null;for(var g=0;g<u.changedTouches.length;g++){var b=u.changedTouches[g],R=b.identifier,U=A(R);if(U===-1&&c<2){var F=a[0]?1:0,X=a[0]?0:1,O={position:[0,0],touch:null};a[F]=O,c++,O.touch=b,ci(b,i,O.position),a[X]&&a[X].touch}}for(var N=0,G=0,H=0,g=0;g<a.length;g++)a[g]&&(N+=a[g].position[0],G+=a[g].position[1],H++);if(N/=H,G/=H,c>0){if(r.theta=0,H>1){var K=a[1].position[0]-a[0].position[0],$=(a[0].position[1]-a[1].position[1])*f/s;r.theta=Math.atan2($,K)}h(),r.buttons=0,r.mods={},r.active=c,m=N,D=G,r.x0=2*m/f-1,r.y0=1-2*D/s,r.x=2*N/f-1,r.y=1-2*G/s,r.x1=2*a[0].position[0]/f-1,r.y1=1-2*a[0].position[1]/s,c>1&&(r.x2=2*a[1].position[0]/f-1,r.y2=1-2*a[1].position[1]/s),r.active=c,r.dx=0,r.dy=0,r.dz=0,r.zoomx=1,r.zoomy=1,r.dtheta=0,r.originalEvent=u,e.emit(c===1?"touchstart":"pinchstart",r)}}function x(u){for(var g,b=!1,R=0;R<u.changedTouches.length;R++){var U=u.changedTouches[R];g=A(U),g!==-1&&(b=!0,a[g].touch=U,ci(U,i,a[g].position))}if(b){if(c===1){for(g=0;g<a.length&&!a[g];g++);if(a[g]&&n[g]){var F=a[g].position[0],X=a[g].position[1],O=F-n[g][0],N=X-n[g][1];r.buttons=0,r.mods={},r.active=c,r.x=r.x1=2*F/f-1,r.y=r.y1=1-2*X/s,r.x2=null,r.y2=null,r.x0=2*m/f-1,r.y0=1-2*D/s,r.dx=2*O/f,r.dy=-2*N/s,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit("touchmove",r)}}else if(c===2&&n[0]&&n[1]){var G=n[0],H=n[1],K=H[0]-G[0],$=(H[1]-G[1])*f/s,z=a[0].position,Q=a[1].position,oe=Q[0]-z[0],Z=(z[1]-Q[1])*f/s,le=Math.sqrt(K*K+$*$)*.5,k=Math.atan2($,K),q=Math.sqrt(oe*oe+Z*Z)*.5,te=Math.atan2(Z,oe),W=(H[0]+G[0])*.5,Y=(H[1]+G[1])*.5,O=.5*(Q[0]+z[0]-G[0]-H[0]),N=.5*(Q[1]+z[1]-G[1]-H[1]),J=q/le,ie=te-k;r.buttons=0,r.mods=p,r.active=c,r.x=2*W/f-1,r.y=1-2*Y/s,r.x0=2*m/f-1,r.y0=1-2*D/s,r.x1=2*z[0]/f-1,r.y1=1-2*z[1]/s,r.x2=2*Q[0]/f-1,r.y2=1-2*Q[1]/s,r.dx=2*O/f,r.dy=-2*N/s,r.dz=0,r.zoomx=J,r.zoomy=J,r.theta=te,r.dtheta=ie,r.originalEvent=u,e.emit("pinchmove",r)}}a[0]&&(n[0]=a[0].position.slice()),a[1]&&(n[1]=a[1].position.slice())}function I(u){for(var g,b=0;b<u.changedTouches.length;b++){var R=u.changedTouches[b],U=A(R);if(U!==-1){g=a[U],a[U]=null,c--;var F=U===0?1:0;a[F]&&a[F].touch}}var X=0,O=0;if(c===0)g&&(X=g.position[0],O=g.position[1]);else{for(var N=0,b=0;b<a.length;b++)a[b]&&(X+=a[b].position[0],O+=a[b].position[1],N++);X/=N,O/=N}c<2&&(r.buttons=0,r.mods=p,r.active=c,r.x=2*X/f-1,r.y=1-2*O/s,r.x0=2*m/f-1,r.y0=1-2*D/s,r.dx=0,r.dy=0,r.dz=0,r.zoomx=1,r.zoomy=1,r.theta=0,r.dtheta=0,r.originalEvent=u,e.emit(c===0?"touchend":"pinchend",r)),c===0&&(m=D=null)}var _=!1;function E(){_||(_=!0,C.enabled=!0,i.addEventListener("wheel",y,!1),i.addEventListener("mousedown",w,!1),window.addEventListener("mousemove",T,!1),window.addEventListener("mouseup",M,!1),i.addEventListener("touchstart",L,!1),window.addEventListener("touchmove",x,!1),window.addEventListener("touchend",I,!1),window.addEventListener("touchcancel",I,!1))}function v(){_&&(_=!1,C.enabled=!1,i.removeEventListener("wheel",y,!1),i.removeEventListener("mousedown",w,!1),window.removeEventListener("mousemove",T,!1),window.removeEventListener("mouseup",M,!1),i.removeEventListener("touchstart",L,!1),window.removeEventListener("touchmove",x,!1),window.removeEventListener("touchend",I,!1),window.removeEventListener("touchcancel",I,!1))}return E(),e.enable=E,e.disable=v,e}function nv(){return new Worker("/dat-garden-visualization/assets/graph-db-worker-681e3e3d.js",{type:"module"})}function iv(){return new Worker("/dat-garden-visualization/assets/graph-layout-worker-7e84d6b4.js",{type:"module"})}var rv=typeof global=="object"&&global&&global.Object===Object&&global;const ov=rv;var av=typeof self=="object"&&self&&self.Object===Object&&self,sv=ov||av||Function("return this")();const dr=sv;var cv=dr.Symbol;const to=cv;var pu=Object.prototype,lv=pu.hasOwnProperty,uv=pu.toString,Vi=to?to.toStringTag:void 0;function fv(i){var e=lv.call(i,Vi),t=i[Vi];try{i[Vi]=void 0;var n=!0}catch{}var o=uv.call(i);return n&&(e?i[Vi]=t:delete i[Vi]),o}var dv=Object.prototype,hv=dv.toString;function pv(i){return hv.call(i)}var mv="[object Null]",gv="[object Undefined]",Hc=to?to.toStringTag:void 0;function mu(i){return i==null?i===void 0?gv:mv:Hc&&Hc in Object(i)?fv(i):pv(i)}function _v(i){return i!=null&&typeof i=="object"}var vv="[object Symbol]";function yv(i){return typeof i=="symbol"||_v(i)&&mu(i)==vv}var xv=/\s/;function Sv(i){for(var e=i.length;e--&&xv.test(i.charAt(e)););return e}var Tv=/^\s+/;function Ev(i){return i&&i.slice(0,Sv(i)+1).replace(Tv,"")}function Ei(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")}var Wc=0/0,bv=/^[-+]0x[0-9a-f]+$/i,Mv=/^0b[01]+$/i,Av=/^0o[0-7]+$/i,wv=parseInt;function Xc(i){if(typeof i=="number")return i;if(yv(i))return Wc;if(Ei(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Ei(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=Ev(i);var t=Mv.test(i);return t||Av.test(i)?wv(i.slice(2),t?2:8):bv.test(i)?Wc:+i}function bn(i){return i}var Pv="[object AsyncFunction]",Rv="[object Function]",Iv="[object GeneratorFunction]",Lv="[object Proxy]";function Cv(i){if(!Ei(i))return!1;var e=mu(i);return e==Rv||e==Iv||e==Pv||e==Lv}var Ov=dr["__core-js_shared__"];const fa=Ov;var jc=function(){var i=/[^.]+$/.exec(fa&&fa.keys&&fa.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();function Nv(i){return!!jc&&jc in i}var Uv=Function.prototype,Dv=Uv.toString;function Fv(i){if(i!=null){try{return Dv.call(i)}catch{}try{return i+""}catch{}}return""}var Gv=/[\\^$.*+?()[\]{}|]/g,Bv=/^\[object .+?Constructor\]$/,Vv=Function.prototype,zv=Object.prototype,kv=Vv.toString,Hv=zv.hasOwnProperty,Wv=RegExp("^"+kv.call(Hv).replace(Gv,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xv(i){if(!Ei(i)||Nv(i))return!1;var e=Cv(i)?Wv:Bv;return e.test(Fv(i))}function jv(i,e){return i?.[e]}function ls(i,e){var t=jv(i,e);return Xv(t)?t:void 0}function $v(){}function Yv(i,e,t,n){for(var o=i.length,a=t+(n?1:-1);n?a--:++a<o;)if(e(i[a],a,i))return a;return-1}function qv(i){return i!==i}function Kv(i,e,t){for(var n=t-1,o=i.length;++n<o;)if(i[n]===e)return n;return-1}function Zv(i,e,t){return e===e?Kv(i,e,t):Yv(i,qv,t)}function Jv(i,e){var t=i==null?0:i.length;return!!t&&Zv(i,e,0)>-1}function Qv(i,e){return i===e||i!==i&&e!==e}var e0=ls(Object,"create");const nr=e0;function t0(){this.__data__=nr?nr(null):{},this.size=0}function n0(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e}var i0="__lodash_hash_undefined__",r0=Object.prototype,o0=r0.hasOwnProperty;function a0(i){var e=this.__data__;if(nr){var t=e[i];return t===i0?void 0:t}return o0.call(e,i)?e[i]:void 0}var s0=Object.prototype,c0=s0.hasOwnProperty;function l0(i){var e=this.__data__;return nr?e[i]!==void 0:c0.call(e,i)}var u0="__lodash_hash_undefined__";function f0(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=nr&&e===void 0?u0:e,this}function kn(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}kn.prototype.clear=t0;kn.prototype.delete=n0;kn.prototype.get=a0;kn.prototype.has=l0;kn.prototype.set=f0;function d0(){this.__data__=[],this.size=0}function ho(i,e){for(var t=i.length;t--;)if(Qv(i[t][0],e))return t;return-1}var h0=Array.prototype,p0=h0.splice;function m0(i){var e=this.__data__,t=ho(e,i);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():p0.call(e,t,1),--this.size,!0}function g0(i){var e=this.__data__,t=ho(e,i);return t<0?void 0:e[t][1]}function _0(i){return ho(this.__data__,i)>-1}function v0(i,e){var t=this.__data__,n=ho(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this}function Ri(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ri.prototype.clear=d0;Ri.prototype.delete=m0;Ri.prototype.get=g0;Ri.prototype.has=_0;Ri.prototype.set=v0;var y0=ls(dr,"Map");const x0=y0;function S0(){this.size=0,this.__data__={hash:new kn,map:new(x0||Ri),string:new kn}}function T0(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null}function po(i,e){var t=i.__data__;return T0(e)?t[typeof e=="string"?"string":"hash"]:t.map}function E0(i){var e=po(this,i).delete(i);return this.size-=e?1:0,e}function b0(i){return po(this,i).get(i)}function M0(i){return po(this,i).has(i)}function A0(i,e){var t=po(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this}function Ii(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ii.prototype.clear=S0;Ii.prototype.delete=E0;Ii.prototype.get=b0;Ii.prototype.has=M0;Ii.prototype.set=A0;var w0=ls(dr,"Set");const da=w0;var P0="__lodash_hash_undefined__";function R0(i){return this.__data__.set(i,P0),this}function I0(i){return this.__data__.has(i)}function no(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Ii;++e<t;)this.add(i[e])}no.prototype.add=no.prototype.push=R0;no.prototype.has=I0;function L0(i,e){return i.has(e)}function gu(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t}var C0=function(){return dr.Date.now()};const ha=C0;var O0="Expected a function",N0=Math.max,U0=Math.min;function us(i,e,t){var n,o,a,c,r,f,s=0,h=!1,l=!1,d=!0;if(typeof i!="function")throw new TypeError(O0);e=Xc(e)||0,Ei(t)&&(h=!!t.leading,l="maxWait"in t,a=l?N0(Xc(t.maxWait)||0,e):a,d="trailing"in t?!!t.trailing:d);function S(T){var A=n,L=o;return n=o=void 0,s=T,c=i.apply(L,A),c}function p(T){return s=T,r=setTimeout(m,e),h?S(T):c}function C(T){var A=T-f,L=T-s,x=e-A;return l?U0(x,a-L):x}function y(T){var A=T-f,L=T-s;return f===void 0||A>=e||A<0||l&&L>=a}function m(){var T=ha();if(y(T))return D(T);r=setTimeout(m,C(T))}function D(T){return r=void 0,d&&n?S(T):(n=o=void 0,c)}function P(){r!==void 0&&clearTimeout(r),s=0,n=f=o=r=void 0}function M(){return r===void 0?c:D(ha())}function w(){var T=ha(),A=y(T);if(n=arguments,o=this,f=T,A){if(r===void 0)return p(f);if(l)return clearTimeout(r),r=setTimeout(m,e),S(f)}return r===void 0&&(r=setTimeout(m,e)),c}return w.cancel=P,w.flush=M,w}function D0(i,e,t){for(var n=-1,o=i==null?0:i.length;++n<o;)if(t(e,i[n]))return!0;return!1}function li(i){for(var e=-1,t=i==null?0:i.length,n={};++e<t;){var o=i[e];n[o[0]]=o[1]}return n}var F0="Expected a function";function Ha(i,e,t){var n=!0,o=!0;if(typeof i!="function")throw new TypeError(F0);return Ei(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),us(i,e,{leading:n,maxWait:e,trailing:o})}var G0=1/0,B0=da&&1/gu(new da([,-0]))[1]==G0?function(i){return new da(i)}:$v;const V0=B0;var z0=200;function k0(i,e,t){var n=-1,o=Jv,a=i.length,c=!0,r=[],f=r;if(t)c=!1,o=D0;else if(a>=z0){var s=e?null:V0(i);if(s)return gu(s);c=!1,o=L0,f=new no}else f=e?[]:r;e:for(;++n<a;){var h=i[n],l=e?e(h):h;if(h=t||h!==0?h:0,c&&l===l){for(var d=f.length;d--;)if(f[d]===l)continue e;e&&f.push(l),r.push(h)}else o(f,l,t)||(f!==r&&f.push(l),r.push(h))}return r}function H0(i,e){return e=typeof e=="function"?e:void 0,i&&i.length?k0(i,void 0,e):[]}const _u=new Array(128).fill(void 0);_u.push(void 0,null,!0,!1);const W0=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});W0.decode();_u.length;const pa=new TextEncoder("utf-8");pa.encodeInto;var vu={};(function(i){var e=sn&&sn.__extends||function(){var O=function(N,G){return O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(H,K){H.__proto__=K}||function(H,K){for(var $ in K)Object.prototype.hasOwnProperty.call(K,$)&&(H[$]=K[$])},O(N,G)};return function(N,G){if(typeof G!="function"&&G!==null)throw new TypeError("Class extends value "+String(G)+" is not a constructor or null");O(N,G);function H(){this.constructor=N}N.prototype=G===null?Object.create(G):(H.prototype=G.prototype,new H)}}(),t=sn&&sn.__classPrivateFieldSet||function(O,N,G){if(!N.has(O))throw new TypeError("attempted to set private field on non-instance");return N.set(O,G),G},n=sn&&sn.__classPrivateFieldGet||function(O,N){if(!N.has(O))throw new TypeError("attempted to get private field on non-instance");return N.get(O)},o,a,c,r,f,s,h,l,d,S,p,C,y,m,D,P,M,w,T,A,L,x;i.__esModule=!0,i.default=void 0;var I=function(O){var N=131,G=137,H=0;O+="x";for(var K=Math.floor(9007199254740991/G),$=0;$<O.length;$++)H>K&&(H=Math.floor(H/G)),H=H*N+O.charCodeAt($);return H},_="0123456789abcdef".split(""),E=[-2147483648,8388608,32768,128],v=[24,16,8,0],u=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],g=[],b=function(){function O(N,G){N===void 0&&(N=!1),G===void 0&&(G=!1),o.set(this,void 0),a.set(this,void 0),c.set(this,void 0),r.set(this,void 0),f.set(this,void 0),s.set(this,void 0),h.set(this,void 0),l.set(this,void 0),d.set(this,void 0),S.set(this,void 0),p.set(this,void 0),C.set(this,void 0),y.set(this,void 0),m.set(this,void 0),D.set(this,void 0),P.set(this,void 0),M.set(this,0),w.set(this,void 0),this.init(N,G)}return O.prototype.init=function(N,G){G?(g[0]=g[16]=g[1]=g[2]=g[3]=g[4]=g[5]=g[6]=g[7]=g[8]=g[9]=g[10]=g[11]=g[12]=g[13]=g[14]=g[15]=0,t(this,a,g)):t(this,a,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),N?(t(this,s,3238371032),t(this,h,914150663),t(this,l,812702999),t(this,d,4144912697),t(this,S,4290775857),t(this,p,1750603025),t(this,C,1694076839),t(this,y,3204075428)):(t(this,s,1779033703),t(this,h,3144134277),t(this,l,1013904242),t(this,d,2773480762),t(this,S,1359893119),t(this,p,2600822924),t(this,C,528734635),t(this,y,1541459225)),t(this,o,t(this,w,t(this,c,t(this,D,0)))),t(this,r,t(this,m,!1)),t(this,f,!0),t(this,P,N)},O.prototype.update=function(N){if(n(this,r))return this;var G;N instanceof ArrayBuffer?G=new Uint8Array(N):G=N;for(var H=0,K=G.length,$=n(this,a);H<K;){var z=void 0;if(n(this,m)&&(t(this,m,!1),$[0]=n(this,o),$[16]=$[1]=$[2]=$[3]=$[4]=$[5]=$[6]=$[7]=$[8]=$[9]=$[10]=$[11]=$[12]=$[13]=$[14]=$[15]=0),typeof G!="string")for(z=n(this,w);H<K&&z<64;++H)$[z>>2]|=G[H]<<v[z++&3];else for(z=n(this,w);H<K&&z<64;++H){var Q=G.charCodeAt(H);Q<128?$[z>>2]|=Q<<v[z++&3]:Q<2048?($[z>>2]|=(192|Q>>6)<<v[z++&3],$[z>>2]|=(128|Q&63)<<v[z++&3]):Q<55296||Q>=57344?($[z>>2]|=(224|Q>>12)<<v[z++&3],$[z>>2]|=(128|Q>>6&63)<<v[z++&3],$[z>>2]|=(128|Q&63)<<v[z++&3]):(Q=65536+((Q&1023)<<10|G.charCodeAt(++H)&1023),$[z>>2]|=(240|Q>>18)<<v[z++&3],$[z>>2]|=(128|Q>>12&63)<<v[z++&3],$[z>>2]|=(128|Q>>6&63)<<v[z++&3],$[z>>2]|=(128|Q&63)<<v[z++&3])}t(this,M,z),t(this,c,n(this,c)+(z-n(this,w))),z>=64?(t(this,o,$[16]),t(this,w,z-64),this.hash(),t(this,m,!0)):t(this,w,z)}return n(this,c)>4294967295&&(t(this,D,n(this,D)+(n(this,c)/4294967296<<0)),t(this,c,n(this,c)%4294967296)),this},O.prototype.finalize=function(){if(!n(this,r)){t(this,r,!0);var N=n(this,a),G=n(this,M);N[16]=n(this,o),N[G>>2]|=E[G&3],t(this,o,N[16]),G>=56&&(n(this,m)||this.hash(),N[0]=n(this,o),N[16]=N[1]=N[2]=N[3]=N[4]=N[5]=N[6]=N[7]=N[8]=N[9]=N[10]=N[11]=N[12]=N[13]=N[14]=N[15]=0),N[14]=n(this,D)<<3|n(this,c)>>>29,N[15]=n(this,c)<<3,this.hash()}},O.prototype.hash=function(){for(var N=n(this,s),G=n(this,h),H=n(this,l),K=n(this,d),$=n(this,S),z=n(this,p),Q=n(this,C),oe=n(this,y),Z=n(this,a),le,k,q,te,W,Y,J,ie,ce,ae,ue=16;ue<64;++ue)te=Z[ue-15],le=(te>>>7|te<<25)^(te>>>18|te<<14)^te>>>3,te=Z[ue-2],k=(te>>>17|te<<15)^(te>>>19|te<<13)^te>>>10,Z[ue]=Z[ue-16]+le+Z[ue-7]+k<<0;ae=G&H;for(var V=0;V<64;V+=4)n(this,f)?(n(this,P)?(J=300032,te=Z[0]-1413257819,oe=te-150054599<<0,K=te+24177077<<0):(J=704751109,te=Z[0]-210244248,oe=te-1521486534<<0,K=te+143694565<<0),t(this,f,!1)):(le=(N>>>2|N<<30)^(N>>>13|N<<19)^(N>>>22|N<<10),k=($>>>6|$<<26)^($>>>11|$<<21)^($>>>25|$<<7),J=N&G,q=J^N&H^ae,Y=$&z^~$&Q,te=oe+k+Y+u[V]+Z[V],W=le+q,oe=K+te<<0,K=te+W<<0),le=(K>>>2|K<<30)^(K>>>13|K<<19)^(K>>>22|K<<10),k=(oe>>>6|oe<<26)^(oe>>>11|oe<<21)^(oe>>>25|oe<<7),ie=K&N,q=ie^K&G^J,Y=oe&$^~oe&z,te=Q+k+Y+u[V+1]+Z[V+1],W=le+q,Q=H+te<<0,H=te+W<<0,le=(H>>>2|H<<30)^(H>>>13|H<<19)^(H>>>22|H<<10),k=(Q>>>6|Q<<26)^(Q>>>11|Q<<21)^(Q>>>25|Q<<7),ce=H&K,q=ce^H&N^ie,Y=Q&oe^~Q&$,te=z+k+Y+u[V+2]+Z[V+2],W=le+q,z=G+te<<0,G=te+W<<0,le=(G>>>2|G<<30)^(G>>>13|G<<19)^(G>>>22|G<<10),k=(z>>>6|z<<26)^(z>>>11|z<<21)^(z>>>25|z<<7),ae=G&H,q=ae^G&K^ce,Y=z&Q^~z&oe,te=$+k+Y+u[V+3]+Z[V+3],W=le+q,$=N+te<<0,N=te+W<<0;t(this,s,n(this,s)+N<<0),t(this,h,n(this,h)+G<<0),t(this,l,n(this,l)+H<<0),t(this,d,n(this,d)+K<<0),t(this,S,n(this,S)+$<<0),t(this,p,n(this,p)+z<<0),t(this,C,n(this,C)+Q<<0),t(this,y,n(this,y)+oe<<0)},O.prototype.hex=function(){this.finalize();var N=n(this,s),G=n(this,h),H=n(this,l),K=n(this,d),$=n(this,S),z=n(this,p),Q=n(this,C),oe=n(this,y),Z=_[N>>28&15]+_[N>>24&15]+_[N>>20&15]+_[N>>16&15]+_[N>>12&15]+_[N>>8&15]+_[N>>4&15]+_[N&15]+_[G>>28&15]+_[G>>24&15]+_[G>>20&15]+_[G>>16&15]+_[G>>12&15]+_[G>>8&15]+_[G>>4&15]+_[G&15]+_[H>>28&15]+_[H>>24&15]+_[H>>20&15]+_[H>>16&15]+_[H>>12&15]+_[H>>8&15]+_[H>>4&15]+_[H&15]+_[K>>28&15]+_[K>>24&15]+_[K>>20&15]+_[K>>16&15]+_[K>>12&15]+_[K>>8&15]+_[K>>4&15]+_[K&15]+_[$>>28&15]+_[$>>24&15]+_[$>>20&15]+_[$>>16&15]+_[$>>12&15]+_[$>>8&15]+_[$>>4&15]+_[$&15]+_[z>>28&15]+_[z>>24&15]+_[z>>20&15]+_[z>>16&15]+_[z>>12&15]+_[z>>8&15]+_[z>>4&15]+_[z&15]+_[Q>>28&15]+_[Q>>24&15]+_[Q>>20&15]+_[Q>>16&15]+_[Q>>12&15]+_[Q>>8&15]+_[Q>>4&15]+_[Q&15];return n(this,P)||(Z+=_[oe>>28&15]+_[oe>>24&15]+_[oe>>20&15]+_[oe>>16&15]+_[oe>>12&15]+_[oe>>8&15]+_[oe>>4&15]+_[oe&15]),Z},O.prototype.toString=function(){return this.hex()},O.prototype.digest=function(){this.finalize();var N=n(this,s),G=n(this,h),H=n(this,l),K=n(this,d),$=n(this,S),z=n(this,p),Q=n(this,C),oe=n(this,y),Z=[N>>24&255,N>>16&255,N>>8&255,N&255,G>>24&255,G>>16&255,G>>8&255,G&255,H>>24&255,H>>16&255,H>>8&255,H&255,K>>24&255,K>>16&255,K>>8&255,K&255,$>>24&255,$>>16&255,$>>8&255,$&255,z>>24&255,z>>16&255,z>>8&255,z&255,Q>>24&255,Q>>16&255,Q>>8&255,Q&255];return n(this,P)||Z.push(oe>>24&255,oe>>16&255,oe>>8&255,oe&255),Z},O.prototype.array=function(){return this.digest()},O.prototype.arrayBuffer=function(){this.finalize();var N=new ArrayBuffer(n(this,P)?28:32),G=new DataView(N);return G.setUint32(0,n(this,s)),G.setUint32(4,n(this,h)),G.setUint32(8,n(this,l)),G.setUint32(12,n(this,d)),G.setUint32(16,n(this,S)),G.setUint32(20,n(this,p)),G.setUint32(24,n(this,C)),n(this,P)||G.setUint32(28,n(this,y)),N},O}();o=new WeakMap,a=new WeakMap,c=new WeakMap,r=new WeakMap,f=new WeakMap,s=new WeakMap,h=new WeakMap,l=new WeakMap,d=new WeakMap,S=new WeakMap,p=new WeakMap,C=new WeakMap,y=new WeakMap,m=new WeakMap,D=new WeakMap,P=new WeakMap,M=new WeakMap,w=new WeakMap,function(O){e(N,O);function N(G,H,K){H===void 0&&(H=!1),K===void 0&&(K=!1);var $=O.call(this,H,K)||this;T.set($,void 0),A.set($,void 0),L.set($,void 0),x.set($,void 0);var z;if(typeof G=="string"){for(var Q=[],oe=G.length,Z=0,le=0;le<oe;++le){var k=G.charCodeAt(le);k<128?Q[Z++]=k:k<2048?(Q[Z++]=192|k>>6,Q[Z++]=128|k&63):k<55296||k>=57344?(Q[Z++]=224|k>>12,Q[Z++]=128|k>>6&63,Q[Z++]=128|k&63):(k=65536+((k&1023)<<10|G.charCodeAt(++le)&1023),Q[Z++]=240|k>>18,Q[Z++]=128|k>>12&63,Q[Z++]=128|k>>6&63,Q[Z++]=128|k&63)}z=Q}else G instanceof ArrayBuffer?z=new Uint8Array(G):z=G;z.length>64&&(z=new b(H,!0).update(z).array());for(var q=[],te=[],le=0;le<64;++le){var W=z[le]||0;q[le]=92^W,te[le]=54^W}return $.update(te),t($,L,q),t($,T,!0),t($,A,H),t($,x,K),$}return N.prototype.finalize=function(){if(O.prototype.finalize.call(this),n(this,T)){t(this,T,!1);var G=this.array();O.prototype.init.call(this,n(this,A),n(this,x)),this.update(n(this,L)),this.update(G),O.prototype.finalize.call(this)}},N}(b),T=new WeakMap,A=new WeakMap,L=new WeakMap,x=new WeakMap;function R(O){var N=new b;return N.update(O),parseInt(N.hex().substring(0,8),16)}var U=function(O){var N="#";return O.forEach(function(G){G<16&&(N+=0),N+=G.toString(16)}),N},F=function(O,N,G){O/=360;var H=G<.5?G*(1+N):G+N-G*N,K=2*G-H;return[O+1/3,O,O-1/3].map(function($){return $<0&&$++,$>1&&$--,$<1/6?$=K+(H-K)*6*$:$<.5?$=H:$<2/3?$=K+(H-K)*6*(2/3-$):$=K,Math.round($*255)})},X=function(){function O(N){N===void 0&&(N={});var G=[N.lightness,N.saturation].map(function($){return $=$!==void 0?$:[.35,.5,.65],Array.isArray($)?$.concat():[$]}),H=G[0],K=G[1];this.L=H,this.S=K,typeof N.hue=="number"&&(N.hue={min:N.hue,max:N.hue}),typeof N.hue=="object"&&!Array.isArray(N.hue)&&(N.hue=[N.hue]),typeof N.hue>"u"&&(N.hue=[]),this.hueRanges=N.hue.map(function($){return{min:typeof $.min>"u"?0:$.min,max:typeof $.max>"u"?360:$.max}}),this.hash=R,typeof N.hash=="function"&&(this.hash=N.hash),N.hash==="bkdr"&&(this.hash=I)}return O.prototype.hsl=function(N){var G,H,K,$=this.hash(N),z=727;if(this.hueRanges.length){var Q=this.hueRanges[$%this.hueRanges.length];G=$/this.hueRanges.length%z*(Q.max-Q.min)/z+Q.min}else G=$%359;return $=Math.ceil($/360),H=this.S[$%this.S.length],$=Math.ceil($/this.S.length),K=this.L[$%this.L.length],[G,H,K]},O.prototype.rgb=function(N){var G=this.hsl(N);return F.apply(this,G)},O.prototype.hex=function(N){var G=this.rgb(N);return U(G)},O}();i.default=X})(vu);const X0=Pl(vu);var et={},j0={get exports(){return et},set exports(i){et=i}};(function(i,e){(function(n,o){i.exports=o()})(self,()=>(()=>{var t={566:function(c,r){(function(f,s){s(r)})(this,function(f){function s(_){return!Number.isNaN(_)&&typeof _=="number"}function h(_){return s(_)&&Number.isFinite(_)}function l(_){return h(_)&&_%1===0}function d(_){return s(_)&&_>0}function S(_){return l(_)&&_>0}function p(_){return s(_)&&_<0}function C(_){return l(_)&&_<0}function y(_){return s(_)&&_>=0}function m(_){return l(_)&&_>=0}function D(_){return s(_)&&_<=0}function P(_){return l(_)&&_<=0}function M(_,E,v){return s(_)&&_>=E&&_<=v}function w(_,E,v){return l(_)&&_>=E&&_<=v}function T(_){return typeof _=="string"}function A(_){return ArrayBuffer.isView(_)&&!(_ instanceof DataView)}function L(_){return Array.isArray(_)||A(_)}function x(_){return typeof _=="object"&&!L(_)&&_!==null&&!(_ instanceof ArrayBuffer)&&!(_ instanceof DataView)}function I(_){return typeof _=="boolean"}f.isArray=L,f.isBoolean=I,f.isFiniteNumber=h,f.isInteger=l,f.isIntegerInRange=w,f.isNegativeInteger=C,f.isNegativeNumber=p,f.isNonNegativeInteger=m,f.isNonNegativeNumber=y,f.isNonPositiveInteger=P,f.isNonPositiveNumber=D,f.isNumber=s,f.isNumberInRange=M,f.isObject=x,f.isPositiveInteger=S,f.isPositiveNumber=d,f.isString=T,f.isTypedArray=A,Object.defineProperty(f,"__esModule",{value:!0})})},809:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.changeDpiBlob=w,r.changeDpiDataUrl=T;function f(I){if(Array.isArray(I)){for(var _=0,E=Array(I.length);_<I.length;_++)E[_]=I[_];return E}else return Array.from(I)}function s(){for(var I=new Int32Array(256),_=0;_<256;_++){for(var E=_,v=0;v<8;v++)E=E&1?3988292384^E>>>1:E>>>1;I[_]=E}return I}function h(I){var _=-1;l||(l=s());for(var E=0;E<I.length;E++)_=l[(_^I[E])&255]^_>>>8;return _^-1}var l=void 0,d="image/png",S="image/jpeg",p="AAlwSFlz",C="AAAJcEhZ",y="AAAACXBI",m="p".charCodeAt(0),D="H".charCodeAt(0),P="Y".charCodeAt(0),M="s".charCodeAt(0);function w(I,_){var E=I.slice(0,33);return new Promise(function(v,u){var g=new FileReader;g.onload=function(){var b=new Uint8Array(g.result),R=I.slice(33),U=x(b,_,I.type);v(new Blob([U,R],{type:I.type}))},g.readAsArrayBuffer(E)})}function T(I,_){var E=I.split(","),v=E[0],u=E[1],g=void 0,b=void 0,R=!1;if(v.indexOf(d)!==-1){g=d;var U=A(u);U>=0?(b=Math.ceil((U+28)/3)*4,R=!0):b=44}v.indexOf(S)!==-1&&(g=S,b=24);for(var F=u.substring(0,b),X=u.substring(b),O=atob(F),N=new Uint8Array(O.length),G=0;G<N.length;G++)N[G]=O.charCodeAt(G);var H=x(N,_,g,R),K=btoa(String.fromCharCode.apply(String,f(H)));return[v,",",K,X].join("")}function A(I){var _=I.indexOf(p);return _===-1&&(_=I.indexOf(C)),_===-1&&(_=I.indexOf(y)),_}function L(I){for(var _=I.length-1,E=_;E>=4;E--)if(I[E-4]===9&&I[E-3]===m&&I[E-2]===D&&I[E-1]===P&&I[E]===M)return E-3}function x(I,_,E,v){if(E===S)return I[13]=1,I[14]=_>>8,I[15]=_&255,I[16]=_>>8,I[17]=_&255,I;if(E===d){var u=new Uint8Array(13);_*=39.3701,u[0]=m,u[1]=D,u[2]=P,u[3]=M,u[4]=_>>>24,u[5]=_>>>16,u[6]=_>>>8,u[7]=_&255,u[8]=u[4],u[9]=u[5],u[10]=u[6],u[11]=u[7],u[12]=1;var g=h(u),b=new Uint8Array(4);if(b[0]=g>>>24,b[1]=g>>>16,b[2]=g>>>8,b[3]=g&255,v){var R=L(I);return I.set(u,R),I.set(b,R+13),I}else{var U=new Uint8Array(4);U[0]=0,U[1]=0,U[2]=0,U[3]=9;var F=new Uint8Array(54);return F.set(I,0),F.set(U,33),F.set(u,37),F.set(b,50),F}}}},162:function(c,r,f){var s,h,l;(function(d,S){h=[],s=S,l=typeof s=="function"?s.apply(r,h):s,l!==void 0&&(c.exports=l)})(this,function(){function d(P,M){return typeof M>"u"?M={autoBom:!1}:typeof M!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),M={autoBom:!M}),M.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(P.type)?new Blob(["\uFEFF",P],{type:P.type}):P}function S(P,M,w){var T=new XMLHttpRequest;T.open("GET",P),T.responseType="blob",T.onload=function(){D(T.response,M,w)},T.onerror=function(){console.error("could not download file")},T.send()}function p(P){var M=new XMLHttpRequest;M.open("HEAD",P,!1);try{M.send()}catch{}return 200<=M.status&&299>=M.status}function C(P){try{P.dispatchEvent(new MouseEvent("click"))}catch{var M=document.createEvent("MouseEvents");M.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),P.dispatchEvent(M)}}var y=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof f.g=="object"&&f.g.global===f.g?f.g:void 0,m=y.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),D=y.saveAs||(typeof window!="object"||window!==y?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(P,M,w){var T=y.URL||y.webkitURL,A=document.createElement("a");M=M||P.name||"download",A.download=M,A.rel="noopener",typeof P=="string"?(A.href=P,A.origin===location.origin?C(A):p(A.href)?S(P,M,w):C(A,A.target="_blank")):(A.href=T.createObjectURL(P),setTimeout(function(){T.revokeObjectURL(A.href)},4e4),setTimeout(function(){C(A)},0))}:"msSaveOrOpenBlob"in navigator?function(P,M,w){if(M=M||P.name||"download",typeof P!="string")navigator.msSaveOrOpenBlob(d(P,w),M);else if(p(P))S(P,M,w);else{var T=document.createElement("a");T.href=P,T.target="_blank",setTimeout(function(){C(T)})}}:function(P,M,w,T){if(T=T||open("","_blank"),T&&(T.document.title=T.document.body.innerText="downloading..."),typeof P=="string")return S(P,M,w);var A=P.type==="application/octet-stream",L=/constructor/i.test(y.HTMLElement)||y.safari,x=/CriOS\/[\d]+/.test(navigator.userAgent);if((x||A&&L||m)&&typeof FileReader<"u"){var I=new FileReader;I.onloadend=function(){var v=I.result;v=x?v:v.replace(/^data:[^;]*;/,"data:attachment/file;"),T?T.location.href=v:location=v,T=null},I.readAsDataURL(P)}else{var _=y.URL||y.webkitURL,E=_.createObjectURL(P);T?T.location=E:location.href=E,T=null,setTimeout(function(){_.revokeObjectURL(E)},4e4)}});y.saveAs=D.saveAs=D,c.exports=D})},484:function(c,r,f){var s=this&&this.__assign||function(){return s=Object.assign||function(v){for(var u,g=1,b=arguments.length;g<b;g++){u=arguments[g];for(var R in u)Object.prototype.hasOwnProperty.call(u,R)&&(v[R]=u[R])}return v},s.apply(this,arguments)},h=this&&this.__spreadArray||function(v,u,g){if(g||arguments.length===2)for(var b=0,R=u.length,U;b<R;b++)(U||!(b in u))&&(U||(U=Array.prototype.slice.call(u,0,b)),U[b]=u[b]);return v.concat(U||Array.prototype.slice.call(u))};Object.defineProperty(r,"__esModule",{value:!0}),r.GPUComposer=void 0;var l=f(809),d=f(566),S=f(355);f(191);var p=f(601),C=f(404),y=f(593),m=f(651),D=f(567),P=f(946),M=f(929),w=f(634),T=f(380),A=f(690),L=f(579),x=f(707),I=f(798),_=f(581),E=function(){function v(u){var g;this._errorState=!1,this._circlePositionsBuffer={},this._vertexAttributeLocations={},this._enabledVertexAttributes={},this._extensions={},this._clearValue=0,this._copyPrograms={},this._setValuePrograms={},this._vertexShaders=(g={},g[p.DEFAULT_PROGRAM_NAME]={src:m.DEFAULT_VERT_SHADER_SOURCE,compiledShaders:{}},g[p.SEGMENT_PROGRAM_NAME]={src:P.SEGMENT_VERTEX_SHADER_SOURCE,compiledShaders:{}},g[p.LAYER_POINTS_PROGRAM_NAME]={src:M.LAYER_POINTS_VERTEX_SHADER_SOURCE,compiledShaders:{}},g[p.LAYER_VECTOR_FIELD_PROGRAM_NAME]={src:w.LAYER_VECTOR_FIELD_VERTEX_SHADER_SOURCE,compiledShaders:{}},g[p.LAYER_LINES_PROGRAM_NAME]={src:D.LAYER_LINES_VERTEX_SHADER_SOURCE,compiledShaders:{}},g[p.LAYER_MESH_PROGRAM_NAME]={src:T.LAYER_MESH_VERTEX_SHADER_SOURCE,compiledShaders:{}},g),this.verboseLogging=!1,this._numTicks=0;var b=["canvas","context","contextID","contextAttributes","glslVersion","intPrecision","floatPrecision","clearValue","verboseLogging","errorCallback"],R=["canvas"],U=Object.keys(u);(0,x.checkValidKeys)(U,b,"GPUComposer(params)"),(0,x.checkRequiredKeys)(U,R,"GPUComposer(params)"),u.verboseLogging!==void 0&&(this.verboseLogging=u.verboseLogging);var F=this;this._errorCallback=function(K){F._errorState||(F._errorState=!0,u.errorCallback?u.errorCallback(K):(0,p.DEFAULT_ERROR_CALLBACK)(K))};var X=u.canvas,O=u.context;if(!O){if(u.contextID){var N=X.getContext(u.contextID,u.contextAttributes);N?O=N:console.warn("Unable to initialize WebGL context with contextID: ".concat(u.contextID,"."))}if(!O){var N=X.getContext(p.WEBGL2,u.contextAttributes)||X.getContext(p.WEBGL1,u.contextAttributes)||X.getContext(p.EXPERIMENTAL_WEBGL2,u.contextAttributes)||X.getContext(p.EXPERIMENTAL_WEBGL,u.contextAttributes);N&&(O=N)}if(!O){this._errorCallback("Unable to initialize WebGL context.");return}}this.isWebGL2=(0,y.isWebGL2)(O),this.isWebGL2?this.verboseLogging&&console.log("Using WebGL 2.0 context."):this.verboseLogging&&console.log("Using WebGL 1.0 context."),this.gl=O;var G=u.glslVersion||(this.isWebGL2?p.GLSL3:p.GLSL1);if(!this.isWebGL2&&G===p.GLSL3&&(console.warn("GLSL3.x is incompatible with WebGL1.0 contexts, falling back to GLSL1."),G=p.GLSL1),this.glslVersion=G,this.intPrecision=u.intPrecision||p.PRECISION_HIGH_P,this.floatPrecision=u.floatPrecision||p.PRECISION_HIGH_P,O.disable(O.DEPTH_TEST),O.pixelStorei(O.UNPACK_ALIGNMENT,1),this.isWebGL2)O.bindVertexArray(null);else{var H=(0,_.getExtension)(this,_.OES_VERTEX_ARRAY_OBJECT,!0);H.bindVertexArrayOES(null)}O.bindBuffer(O.ARRAY_BUFFER,null),u.clearValue!==void 0&&(this.clearValue=u.clearValue),this.resize([X.clientWidth,X.clientHeight]),this.verboseLogging&&console.log("".concat(this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS)," textures max."))}return v.initWithThreeRenderer=function(u,g){var b=new v(s(s({floatPrecision:u.capabilities.precision,intPrecision:u.capabilities.precision},g),{canvas:u.domElement,context:u.getContext()}));return b._threeRenderer=u,b},Object.defineProperty(v.prototype,"canvas",{get:function(){return this.gl.canvas},enumerable:!1,configurable:!0}),v.prototype._setValueProgramForType=function(u){var g=this._setValuePrograms,b=(0,A.uniformTypeForType)(u,this.glslVersion);return g[b]===void 0&&(g[b]=(0,L.setValueProgram)(this,{type:u,value:[0,0,0,0]})),g[b]},v.prototype._copyProgramForType=function(u){var g=this._copyPrograms,b=(0,A.uniformTypeForType)(u,this.glslVersion);return g[b]===void 0&&(g[b]=(0,L.copyProgram)(this,{type:u})),g[b]},v.prototype._initVertexBuffer=function(u){var g=this,b=g._errorCallback,R=g.gl,U=g.isWebGL2;if(U)R.bindVertexArray(null);else{var F=(0,_.getExtension)(this,_.OES_VERTEX_ARRAY_OBJECT,!0);F.bindVertexArrayOES(null)}var X=R.createBuffer();if(!X){b("Unable to allocate gl buffer.");return}return R.bindBuffer(R.ARRAY_BUFFER,X),R.bufferData(R.ARRAY_BUFFER,u,R.STATIC_DRAW),X},v.prototype._getQuadPositionsBuffer=function(){if(this._quadPositionsBuffer===void 0){var u=new Float32Array([-1,-1,1,-1,-1,1,1,1]);this._quadPositionsBuffer=this._initVertexBuffer(u)}return this._quadPositionsBuffer},v.prototype._getBoundaryPositionsBuffer=function(){if(this._boundaryPositionsBuffer===void 0){var u=new Float32Array([-1,-1,1,-1,1,1,-1,1,-1,-1]);this._boundaryPositionsBuffer=this._initVertexBuffer(u)}return this._boundaryPositionsBuffer},v.prototype._getCirclePositionsBuffer=function(u){var g=this._circlePositionsBuffer;if(g[u]==null){for(var b=[0,0],R=0;R<u;R++)b.push(Math.cos(2*Math.PI*R/u),Math.sin(2*Math.PI*R/u));b.push(Math.cos(0),Math.sin(0));var U=new Float32Array(b),F=this._initVertexBuffer(U);g[u]=F}return g[u]},v.prototype._cloneGPULayer=function(u,g){for(var b=u.is1D()?u.length:[u.width,u.height],R=new S.GPULayer(this,{name:g||"".concat(u.name,"-clone"),dimensions:b,type:u.type,numComponents:u.numComponents,filter:u.filter,wrapX:u.wrapX,wrapY:u.wrapY,numBuffers:u.numBuffers,clearValue:u.clearValue}),U=this._copyProgramForType(u.type),F=0;F<u.numBuffers-1;F++)R.incrementBufferIndex();for(var F=0;F<u.numBuffers;F++)this.step({program:U,input:u.getStateAtIndex(F),output:R});for(var F=-1;F<u.bufferIndex;F++)R.incrementBufferIndex();return R},v.prototype._getVertexShader=function(u,g,b,R){var U=this,F=U._errorCallback,X=U._vertexShaders,O=U.gl,N=U.glslVersion,G=U.intPrecision,H=U.floatPrecision,K=X[u],$=K.compiledShaders,z=K.src;if(g===""&&(g="_default"),$[g]===void 0){if(z==="")throw new Error('Error compiling GPUProgram "'.concat(R,'": no source for vertex shader with name "').concat(u,'".'));var Q=(0,y.preprocessVertexShader)(z,N),oe=(0,y.compileShader)(O,N,G,H,Q,O.VERTEX_SHADER,R,F,b,void 0,!0);if(!oe){F('Unable to compile "'.concat(u).concat(g,'" vertex shader for GPUProgram "').concat(R,'".'));return}$[g]=oe}return $[g]},v.prototype.resize=function(u){var g=this.canvas,b=u[0],R=u[1];if(!(0,d.isNonNegativeInteger)(b)||!(0,d.isNonNegativeInteger)(R))throw(0,d.isArray)(u)?new Error("Invalid dimensions parameter supplied to GPUComposer.resize(), expected positive integers, got: ".concat(b,", ").concat(R)):new Error("Invalid dimensions parameter supplied to GPUComposer.resize(), expected dimensions array of length 2, got: ".concat(JSON.stringify(u)));g.width=b,g.height=R,this._width=b,this._height=R},v.prototype._drawSetup=function(u,g,b,R,U,F){var X=this.gl,O=[];if(U)if(U.layer)O.push(U);else if(U.constructor===S.GPULayer)O.push(U.currentState);else for(var N=0;N<U.length;N++){var G=U[N];O.push(G.currentState?G.currentState:G)}var H=u._getProgramWithName(g,b,O);this._setOutputLayer(u.name,R,U,F),X.useProgram(H);for(var N=0;N<O.length;N++)X.activeTexture(X.TEXTURE0+N),X.bindTexture(X.TEXTURE_2D,O[N].texture);return u._setInternalFragmentUniforms(H,O),H},v.prototype._setBlendMode=function(u){var g=this.gl;u&&(g.enable(g.BLEND),g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA))},v.prototype._addLayerToInputs=function(u,g){return g===void 0?[u]:(0,d.isArray)(g)?(0,y.indexOfLayerInArray)(u,g)>=0?g:h(h([],g,!0),[u],!1):g===u||g.layer===u?[g]:[g,u]},v.prototype._passThroughLayerDataFromInputToOutput=function(u){var g=this._copyProgramForType(u._internalType);this.step({program:g,input:u,output:u})},v.prototype._setOutputLayer=function(u,g,b,R){var U=this,F=U.gl,X=U.isWebGL2;if(!R){F.bindFramebuffer(F.FRAMEBUFFER,null);var O=this,N=O._width,G=O._height;F.viewport(0,0,N,G);return}for(var H=(0,d.isArray)(R)?R:[R],K=0,$=H.length;K<$;K++){var z=H[K];if(b&&(b===R||b.layer===R||(0,d.isArray)(b)&&(0,y.indexOfLayerInArray)(z,b)>=0)){if(z.numBuffers===1)throw new Error('Cannot use same buffer "'.concat(z.name,'" for input and output of a program. Try increasing the number of buffers in your output layer to at least 2 so you can render to nextState using currentState as an input.'));g?z._prepareForWrite(!0):(this._passThroughLayerDataFromInputToOutput(z),z._prepareForWrite(!1))}else g?z._prepareForWrite(!0):(z._usingTextureOverrideForCurrentBuffer()&&this._passThroughLayerDataFromInputToOutput(z),z._prepareForWrite(!1))}var Q=H[0],oe=void 0,Z=[F.COLOR_ATTACHMENT0];if(H.length>1){oe=[];for(var K=1,$=H.length;K<$;K++)oe.push(H[K]._currentTexture),Z.push(F.COLOR_ATTACHMENT0+K)}(0,I.bindFrameBuffer)(this,Q,Q._currentTexture,oe),X&&F.drawBuffers(Z);var le=this._widthHeightForOutput(u,R),k=le.width,q=le.height;F.viewport(0,0,k,q)},v.prototype._setVertexAttribute=function(u,g,b,R){var U=this,F=U.gl,X=U._vertexAttributeLocations,O=U._enabledVertexAttributes,N=X[g],G;if(N||(N=new WeakMap,X[g]=N),G===void 0){if(G=F.getAttribLocation(u,g),G<0)throw new Error('Unable to find vertex attribute "'.concat(g,'" in program "').concat(R,'".'));N.set(u,G)}F.vertexAttribPointer(G,b,F.FLOAT,!1,0,0),F.enableVertexAttribArray(G),O[G]=!0},v.prototype._disableVertexAttributes=function(){for(var u=this,g=u._enabledVertexAttributes,b=u.gl,R=Object.keys(g),U=0,F=R.length;U<F;U++){var X=R[U];g[X]&&(b.disableVertexAttribArray(X),delete g[X])}},v.prototype._setPositionAttribute=function(u,g){this._setVertexAttribute(u,"a_gpuio_position",2,g)},v.prototype._setIndexAttribute=function(u,g){this._setVertexAttribute(u,"a_gpuio_index",1,g)},v.prototype._setUVAttribute=function(u,g){this._setVertexAttribute(u,"a_gpuio_uv",2,g)},v.prototype._widthHeightForOutput=function(u,g){if((0,d.isArray)(g)){for(var b=g[0],R=b?b.width:this._width,U=b?b.height:this._height,F=1,X=g.length;F<X;F++){var O=g[F];if(O.width!==R||O.height!==U)throw new Error("Output GPULayers must have the same dimensions, got dimensions [".concat(R,", ").concat(U,"] and [").concat(O.width,", ").concat(O.height,'] for program "').concat(u,'".'))}return{width:R,height:U}}var N=g?g.width:this._width,G=g?g.height:this._height;return{width:N,height:G}},v.prototype._iterateOverOutputsIfNeeded=function(u,g){if(u.output&&(0,d.isArray)(u.output)&&this.glslVersion===p.GLSL1){for(var b=0,R=u.output.length;b<R;b++)this[g](s(s({},u),{program:b===0?u.program:u.program._childPrograms[b-1],output:u.output[b]}));return!0}return!1},v.prototype._drawFinish=function(u){var g=this.gl;u.blendAlpha&&g.disable(g.BLEND)},v.prototype.step=function(u){var g=["program","input","output","blendAlpha"],b=["program"],R=Object.keys(u);if((0,x.checkValidKeys)(R,g,"GPUComposer.step(params)"),(0,x.checkRequiredKeys)(R,b,"GPUComposer.step(params)"),!this._iterateOverOutputsIfNeeded(u,"step")){var U=this,F=U.gl,X=U._errorState,O=u.program,N=u.input,G=u.output;if(!X){var H=this._drawSetup(O,p.DEFAULT_PROGRAM_NAME,{},!0,N,G);O._setVertexUniform(H,"u_gpuio_scale",[1,1],p.FLOAT),O._setVertexUniform(H,"u_gpuio_translation",[0,0],p.FLOAT),F.bindBuffer(F.ARRAY_BUFFER,this._getQuadPositionsBuffer()),this._setPositionAttribute(H,O.name),this._setBlendMode(u.blendAlpha),F.drawArrays(F.TRIANGLE_STRIP,0,4),this._drawFinish(u)}}},v.prototype.stepBoundary=function(u){var g=["program","input","output","edges","blendAlpha"],b=["program"],R=Object.keys(u);if((0,x.checkValidKeys)(R,g,"GPUComposer.stepBoundary(params)"),(0,x.checkRequiredKeys)(R,b,"GPUComposer.stepBoundary(params)"),!this._iterateOverOutputsIfNeeded(u,"stepBoundary")){var U=this,F=U.gl,X=U._errorState,O=u.program,N=u.input,G=u.output;if(!X){var H=this._widthHeightForOutput(O.name,G),K=H.width,$=H.height,z=this._drawSetup(O,p.DEFAULT_PROGRAM_NAME,{},!1,N,G),Q=[1/K,1/$];if(O._setVertexUniform(z,"u_gpuio_scale",[1-Q[0],1-Q[1]],p.FLOAT),O._setVertexUniform(z,"u_gpuio_translation",Q,p.FLOAT),F.bindBuffer(F.ARRAY_BUFFER,this._getBoundaryPositionsBuffer()),this._setPositionAttribute(z,O.name),this._setBlendMode(u.blendAlpha),u.edges){var oe=u.edges;(0,d.isArray)(oe)||(oe=[oe]);for(var Z=0,le=oe.length;Z<le;Z++){var k=oe[Z];k===p.BOUNDARY_LEFT&&F.drawArrays(F.LINES,3,2),k===p.BOUNDARY_RIGHT&&F.drawArrays(F.LINES,1,2),k===p.BOUNDARY_TOP&&F.drawArrays(F.LINES,2,2),k===p.BOUNDARY_BOTTOM&&F.drawArrays(F.LINES,0,2)}}else F.drawArrays(F.LINE_LOOP,0,4);this._drawFinish(u)}}},v.prototype.stepNonBoundary=function(u){var g=["program","input","output","blendAlpha"],b=["program"],R=Object.keys(u);if((0,x.checkValidKeys)(R,g,"GPUComposer.stepNonBoundary(params)"),(0,x.checkRequiredKeys)(R,b,"GPUComposer.stepNonBoundary(params)"),!this._iterateOverOutputsIfNeeded(u,"stepNonBoundary")){var U=this,F=U.gl,X=U._errorState,O=u.program,N=u.input,G=u.output;if(!X){var H=this._widthHeightForOutput(O.name,G),K=H.width,$=H.height,z=this._drawSetup(O,p.DEFAULT_PROGRAM_NAME,{},!1,N,G),Q=[1/K,1/$];O._setVertexUniform(z,"u_gpuio_scale",[1-2*Q[0],1-2*Q[1]],p.FLOAT),O._setVertexUniform(z,"u_gpuio_translation",Q,p.FLOAT),F.bindBuffer(F.ARRAY_BUFFER,this._getQuadPositionsBuffer()),this._setPositionAttribute(z,O.name),this._setBlendMode(u.blendAlpha),F.drawArrays(F.TRIANGLE_STRIP,0,4),this._drawFinish(u)}}},v.prototype.stepCircle=function(u){var g,b=["program","position","diameter","useOutputScale","input","output","numSegments","blendAlpha"],R=["program","position","diameter"],U=Object.keys(u);if((0,x.checkValidKeys)(U,b,"GPUComposer.stepCircle(params)"),(0,x.checkRequiredKeys)(U,R,"GPUComposer.stepCircle(params)"),!this._iterateOverOutputsIfNeeded(u,"stepCircle")){var F=this,X=F.gl,O=F._errorState,N=u.program,G=u.position,H=u.diameter,K=u.input,$=u.output;if(!O){var z=this._width,Q=this._height;u.useOutputScale&&(g=this._widthHeightForOutput(N.name,$),z=g.width,Q=g.height);var oe=this._drawSetup(N,p.DEFAULT_PROGRAM_NAME,{},!1,K,$);N._setVertexUniform(oe,"u_gpuio_scale",[H/z,H/Q],p.FLOAT),N._setVertexUniform(oe,"u_gpuio_translation",[2*G[0]/z-1,2*G[1]/Q-1],p.FLOAT);var Z=u.numSegments?u.numSegments:p.DEFAULT_CIRCLE_NUM_SEGMENTS;if(Z<3)throw new Error("numSegments for GPUComposer.stepCircle must be greater than 2, got ".concat(Z,"."));X.bindBuffer(X.ARRAY_BUFFER,this._getCirclePositionsBuffer(Z)),this._setPositionAttribute(oe,N.name),this._setBlendMode(u.blendAlpha),X.drawArrays(X.TRIANGLE_FAN,0,Z+2),this._drawFinish(u)}}},v.prototype.stepSegment=function(u){var g,b=["program","position1","position2","thickness","useOutputScale","input","output","endCaps","numCapSegments","blendAlpha"],R=["program","position1","position2","thickness"],U=Object.keys(u);if((0,x.checkValidKeys)(U,b,"GPUComposer.stepSegment(params)"),(0,x.checkRequiredKeys)(U,R,"GPUComposer.stepSegment(params)"),!this._iterateOverOutputsIfNeeded(u,"stepSegment")){var F=this,X=F.gl,O=F._errorState,N=u.program,G=u.position1,H=u.position2,K=u.thickness,$=u.input,z=u.output;if(!O){var Q=this._width,oe=this._height;u.useOutputScale&&(g=this._widthHeightForOutput(N.name,z),Q=g.width,oe=g.height);var Z=this._drawSetup(N,p.SEGMENT_PROGRAM_NAME,{},!1,$,z);N._setVertexUniform(Z,"u_gpuio_halfThickness",K/2,p.FLOAT),N._setVertexUniform(Z,"u_gpuio_scale",[2/Q,2/oe],p.FLOAT);var le=G[0]-H[0],k=G[1]-H[1],q=Math.atan2(k,le);N._setVertexUniform(Z,"u_gpuio_rotation",q,p.FLOAT);var te=(G[0]+H[0])/2,W=(G[1]+H[1])/2;N._setVertexUniform(Z,"u_gpuio_translation",[2*te/Q-1,2*W/oe-1],p.FLOAT);var Y=Math.sqrt(le*le+k*k),J=u.numCapSegments?u.numCapSegments*2:p.DEFAULT_CIRCLE_NUM_SEGMENTS;if(u.endCaps){if(J<6||J%6!==0)throw new Error("numCapSegments for GPUComposer.stepSegment must be divisible by 3, got ".concat(J/2,"."));N._setVertexUniform(Z,"u_gpuio_length",Y,p.FLOAT),X.bindBuffer(X.ARRAY_BUFFER,this._getCirclePositionsBuffer(J))}else N._setVertexUniform(Z,"u_gpuio_length",Y-K,p.FLOAT),X.bindBuffer(X.ARRAY_BUFFER,this._getQuadPositionsBuffer());this._setPositionAttribute(Z,N.name),this._setBlendMode(u.blendAlpha),u.endCaps?X.drawArrays(X.TRIANGLE_FAN,0,J+2):X.drawArrays(X.TRIANGLE_STRIP,0,4),this._drawFinish(u)}}},v.prototype.stepRect=function(u){var g=["program","position","size","useOutputScale","input","output","blendAlpha"],b=["program","position","size"],R=Object.keys(u);if((0,x.checkValidKeys)(R,g,"GPUComposer.stepRect(params)"),(0,x.checkRequiredKeys)(R,b,"GPUComposer.stepRect(params)"),!this._iterateOverOutputsIfNeeded(u,"stepRect")){var U=[u.position[0],u.position[1]+u.size[1]/2],F=[u.position[0]+u.size[0],U[1]];this.stepSegment({program:u.program,position1:U,position2:F,thickness:u.size[1],useOutputScale:u.useOutputScale,input:u.input,output:u.output,endCaps:!1,blendAlpha:u.blendAlpha})}},v.prototype.drawLayerAsPoints=function(u){var g,b=["layer","program","input","output","pointSize","useOutputScale","count","color","wrapX","wrapY","blendAlpha"],R=["layer"],U=Object.keys(u);if((0,x.checkValidKeys)(U,b,"GPUComposer.drawLayerAsPoints(params)"),(0,x.checkRequiredKeys)(U,R,"GPUComposer.drawLayerAsPoints(params)"),!this._iterateOverOutputsIfNeeded(u,"drawLayerAsPoints")){var F=this,X=F.gl,O=F._pointIndexArray,N=F.glslVersion,G=F._errorState,H=u.layer,K=u.output;if(!G){if(H.numComponents!==2&&H.numComponents!==4)throw new Error('GPUComposer.drawLayerAsPoints() must be passed a layer parameter with either 2 or 4 components, got layer "'.concat(H.name,'" with ').concat(H.numComponents," components."));var $=H.length,z=u.count||$;if(z>$)throw new Error("Invalid count ".concat(z," for layer parameter of length ").concat($,"."));N===p.GLSL1&&z>p.MAX_FLOAT_INT&&console.warn("Points positions array length: ".concat(z," is longer than what is supported by GLSL1 : ").concat(p.MAX_FLOAT_INT,"."));var Q=u.program;if(Q===void 0){Q=this._setValueProgramForType(p.FLOAT);var oe=u.color||[1,0,0];if(oe.length!==3)throw new Error("Color parameter must have length 3, got ".concat(JSON.stringify(oe),"."));Q.setUniform("u_value",h(h([],oe,!0),[1],!1),p.FLOAT)}var Z=this._addLayerToInputs(H,u.input),le={};H.numComponents===4&&(le[p.GPUIO_VS_POSITION_W_ACCUM]="1"),u.wrapX&&(le[p.GPUIO_VS_WRAP_X]="1"),u.wrapY&&(le[p.GPUIO_VS_WRAP_Y]="1");var k=this._drawSetup(Q,p.LAYER_POINTS_PROGRAM_NAME,le,!1,Z,K);Q._setVertexUniform(k,"u_gpuio_positions",(0,y.indexOfLayerInArray)(H,Z),p.INT);var q=this._width,te=this._height;u.useOutputScale&&(g=this._widthHeightForOutput(Q.name,K),q=g.width,te=g.height),Q._setVertexUniform(k,"u_gpuio_scale",[1/q,1/te],p.FLOAT);var W=u.pointSize||1;Q._setVertexUniform(k,"u_gpuio_pointSize",W,p.FLOAT);var Y=[H.width,H.height];if(Q._setVertexUniform(k,"u_gpuio_positionsDimensions",Y,p.FLOAT),N===p.GLSL1){if(this._pointIndexBuffer===void 0||O&&O.length<z){var J=(0,y.initSequentialFloatArray)($);this._pointIndexArray=J,this._pointIndexBuffer=this._initVertexBuffer(J)}X.bindBuffer(X.ARRAY_BUFFER,this._pointIndexBuffer),this._setIndexAttribute(k,Q.name)}this._setBlendMode(u.blendAlpha),X.drawArrays(X.POINTS,0,z),this._drawFinish(u)}}},v.prototype.drawLayerAsVectorField=function(u){var g=["layer","program","input","output","vectorSpacing","vectorScale","color","blendAlpha"],b=["layer"],R=Object.keys(u);if((0,x.checkValidKeys)(R,g,"GPUComposer.drawLayerAsVectorField(params)"),(0,x.checkRequiredKeys)(R,b,"GPUComposer.drawLayerAsVectorField(params)"),!this._iterateOverOutputsIfNeeded(u,"drawLayerAsVectorField")){var U=this,F=U.gl,X=U._vectorFieldIndexArray,O=U._width,N=U._height,G=U.glslVersion,H=U._errorState,K=u.layer,$=u.output;if(!H){if(K.numComponents!==2)throw new Error('GPUComposer.drawLayerAsVectorField() must be passed a fieldLayer with 2 components, got fieldLayer "'.concat(K.name,'" with ').concat(K.numComponents," components."));var z=u.program;if(z===void 0){z=this._setValueProgramForType(p.FLOAT);var Q=u.color||[1,0,0];if(Q.length!==3)throw new Error("color parameter must have length 3, got ".concat(JSON.stringify(Q),"."));z.setUniform("u_value",h(h([],Q,!0),[1],!1),p.FLOAT)}var oe=this._addLayerToInputs(K,u.input),Z=this._drawSetup(z,p.LAYER_VECTOR_FIELD_PROGRAM_NAME,{},!1,oe,$);z._setVertexUniform(Z,"u_gpuio_vectors",(0,y.indexOfLayerInArray)(K,oe),p.INT);var le=u.vectorScale||1;z._setVertexUniform(Z,"u_gpuio_scale",[le/O,le/N],p.FLOAT);var k=u.vectorSpacing||10,q=[Math.floor(O/k),Math.floor(N/k)];z._setVertexUniform(Z,"u_gpuio_dimensions",q,p.FLOAT);var te=2*q[0]*q[1];if(G===p.GLSL1){if(this._vectorFieldIndexBuffer===void 0||X&&X.length<te){var W=(0,y.initSequentialFloatArray)(te);this._vectorFieldIndexArray=W,this._vectorFieldIndexBuffer=this._initVertexBuffer(W)}F.bindBuffer(F.ARRAY_BUFFER,this._vectorFieldIndexBuffer),this._setIndexAttribute(Z,z.name)}this._setBlendMode(u.blendAlpha),F.drawArrays(F.LINES,0,te),this._drawFinish(u)}}},v.prototype.drawLayerAsMesh=function(u){var g,b=["layer","indices","program","input","output","useOutputScale","color","blendAlpha"],R=["layer"],U=Object.keys(u);if((0,x.checkValidKeys)(U,b,"GPUComposer.drawLayerAsMesh(params)"),(0,x.checkRequiredKeys)(U,R,"GPUComposer.drawLayerAsMesh(params)"),!this._iterateOverOutputsIfNeeded(u,"drawLayerAsMesh")){var F=this,X=F.gl,O=F._width,N=F._height,G=F.glslVersion,H=F._errorState,K=F._meshIndexBuffer,$=F._meshIndexArray,z=u.layer,Q=u.output;if(!H){if(z.numComponents!==2&&z.numComponents!==4)throw new Error('GPUComposer.drawLayerAsMesh() must be passed a layer parameter with either 2 or 4 components, got position GPULayer "'.concat(z.name,'" with ').concat(z.numComponents," components."));var oe=z.is1D()?z.length:z.width*z.height;G===p.GLSL1&&oe>p.MAX_FLOAT_INT&&console.warn("Mesh positions array length: ".concat(oe," is longer than what is supported by GLSL1 : ").concat(p.MAX_FLOAT_INT,"."));var Z=u.program;if(Z===void 0){Z=this._setValueProgramForType(p.FLOAT);var le=u.color||[1,0,0];if(le.length!==3)throw new Error("Color parameter must have length 3, got ".concat(JSON.stringify(le),"."));Z.setUniform("u_value",h(h([],le,!0),[1],!1),p.FLOAT)}var k=this._addLayerToInputs(z,u.input),q={};z.numComponents===4&&(q[p.GPUIO_VS_POSITION_W_ACCUM]="1");var te=this._drawSetup(Z,p.LAYER_MESH_PROGRAM_NAME,q,!1,k,Q);Z._setVertexUniform(te,"u_gpuio_positions",(0,y.indexOfLayerInArray)(z,k),p.INT);var W=O,Y=N;u.useOutputScale&&(g=this._widthHeightForOutput(Z.name,Q),W=g.width,Y=g.height),Z._setVertexUniform(te,"u_gpuio_scale",[1/W,1/Y],p.FLOAT);var J=[z.width,z.height];if(Z._setVertexUniform(te,"u_gpuio_positionsDimensions",J,p.FLOAT),G===p.GLSL1){if(K===void 0||$&&$.length<oe){var ie=(0,y.initSequentialFloatArray)(oe);this._meshIndexArray=ie,this._meshIndexBuffer=this._initVertexBuffer(ie)}X.bindBuffer(X.ARRAY_BUFFER,this._meshIndexBuffer),this._setIndexAttribute(te,Z.name)}if(this._setBlendMode(u.blendAlpha),u.indices){var ce=u.indices,ae=ce.glType,ue=ce.count,V=ce.buffer;X.bindBuffer(X.ELEMENT_ARRAY_BUFFER,V);var B=0;X.drawElements(X.TRIANGLES,ue,ae,B)}else X.drawArrays(X.TRIANGLES,0,oe);this._drawFinish(u)}}},Object.defineProperty(v.prototype,"clearValue",{get:function(){return this._clearValue},set:function(u){var g=p.FLOAT,b=4;if(!(0,x.isValidClearValue)(u,b,g))throw new Error("Invalid clearValue: ".concat(JSON.stringify(u)," for GPUComposer, expected ").concat(g," or array of ").concat(g," of length ").concat(b,"."));this._clearValue=(0,d.isArray)(u)?u.slice():u,this._clearValueVec4=void 0},enumerable:!1,configurable:!0}),Object.defineProperty(v.prototype,"clearValueVec4",{get:function(){var u=this._clearValueVec4;if(!u){var g=this.clearValue;if(u=[],(0,d.isFiniteNumber)(g))u.push(g,g,g,g);else{u.push.apply(u,g);for(var b=u.length;b<4;b++)u.push(0)}this._clearValueVec4=u}return u},enumerable:!1,configurable:!0}),v.prototype.clear=function(){var u=this,g=u.verboseLogging,b=u.clearValueVec4;g&&console.log("Clearing GPUComoser.");var R=this._setValueProgramForType(p.FLOAT);R.setUniform("u_value",b),this.step({program:R})},v.prototype.undoThreeState=function(){var u=this,g=u.gl,b=u._threeRenderer,R=u.isWebGL2;if(!b)throw new Error("Can't call undoThreeState() on a GPUComposer that was not inited with GPUComposer.initWithThreeRenderer().");if(g.disable(g.BLEND),b)if(R)g.bindVertexArray(null);else{var U=(0,_.getExtension)(this,_.OES_VERTEX_ARRAY_OBJECT,!0);U.bindVertexArrayOES(null)}},v.prototype.resetThreeState=function(){var u=this,g=u.gl,b=u._threeRenderer;if(!b)throw new Error("Can't call resetThreeState() on a GPUComposer that was not inited with GPUComposer.initWithThreeRenderer().");var R=b.getViewport(new C.Vector4);g.viewport(R.x,R.y,R.width,R.height),b.resetState()},v.prototype.savePNG=function(u){u===void 0&&(u={});var g=["filename","dpi","callback"],b=Object.keys(u);(0,x.checkValidKeys)(b,g,"GPUComposer.savePNG(params)");var R=this.canvas,U=u.filename||"output",F=u.callback||saveAs;R.toBlob(function(X){if(!X){console.warn("Problem saving PNG, unable to init blob from canvas.");return}u.dpi?(0,l.changeDpiBlob)(X,u.dpi).then(function(O){F(O,"".concat(U,".png"))}):F(X,"".concat(U,".png"))},"image/png")},v.prototype.tick=function(){this._numTicks+=1;var u=this,g=u._lastTickTime,b=u._lastTickFPS,R=performance.now();if(this._lastTickTime=R,!g)return{fps:0,numTicks:this._numTicks};var U=1e3/(R-g);b||(b=U);var F=.9,X=Number.parseFloat((F*b+(1-F)*U).toFixed(1));return this._lastTickFPS=X,{fps:X,numTicks:this._numTicks}},Object.defineProperty(v.prototype,"numTicks",{get:function(){return this._numTicks},enumerable:!1,configurable:!0}),v.prototype.dispose=function(){var u=this,g,b=this,R=b.gl,U=b.verboseLogging;U&&console.log("Deallocating GPUComposer."),this._quadPositionsBuffer&&(R.deleteBuffer(this._quadPositionsBuffer),delete this._quadPositionsBuffer),this._boundaryPositionsBuffer&&(R.deleteBuffer(this._boundaryPositionsBuffer),delete this._boundaryPositionsBuffer),Object.keys(this._circlePositionsBuffer).forEach(function(F){R.deleteBuffer(u._circlePositionsBuffer[F])}),delete this._circlePositionsBuffer,delete this._pointIndexArray,this._pointIndexBuffer&&(R.deleteBuffer(this._pointIndexBuffer),delete this._pointIndexBuffer),delete this._vectorFieldIndexArray,this._vectorFieldIndexBuffer&&(R.deleteBuffer(this._vectorFieldIndexBuffer),delete this._vectorFieldIndexBuffer),this._indexedLinesIndexBuffer&&(R.deleteBuffer(this._indexedLinesIndexBuffer),delete this._indexedLinesIndexBuffer),Object.keys(this._vertexAttributeLocations).forEach(function(F){delete u._vertexAttributeLocations[F]}),delete this._vertexAttributeLocations,delete this._enabledVertexAttributes,Object.values(this._vertexShaders).forEach(function(F){var X=F.compiledShaders;Object.keys(X).forEach(function(O){R.deleteShader(X[O]),delete X[O]})}),delete this._vertexShaders,Object.values(this._copyPrograms).forEach(function(F){F.dispose()}),Object.keys(this._copyPrograms).forEach(function(F){delete u._copyPrograms[F]}),delete this._copyPrograms,Object.values(this._setValuePrograms).forEach(function(F){F.dispose()}),Object.keys(this._setValuePrograms).forEach(function(F){delete u._setValuePrograms[F]}),delete this._setValuePrograms,(g=this._wrappedLineColorProgram)===null||g===void 0||g.dispose(),delete this._wrappedLineColorProgram,delete this._threeRenderer,delete this.gl,delete this.canvas,delete this._errorCallback,delete this._extensions,delete this._errorState,delete this.verboseLogging,delete this._numTicks,delete this.isWebGL2,delete this.glslVersion,delete this.intPrecision,delete this.floatPrecision,delete this._width,delete this._height,delete this._clearValue,delete this._clearValueVec4},v}();r.GPUComposer=E},981:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.GPUIndexBuffer=void 0;var s=f(566),h=f(650),l=f(707),d=f(581),S=function(){function p(C,y){if(this._composer=C,!y)throw new Error("Error initing GPUIndexBuffer: must pass params to GPUIndexBuffer(composer, params).");if(!(0,s.isObject)(y))throw new Error("Error initing GPUIndexBuffer: must pass valid params object to GPUIndexBuffer(composer, params), got ".concat(JSON.stringify(y),"."));var m=["indices","name"],D=["indices"],P=Object.keys(y);(0,l.checkValidKeys)(P,m,"GPUIndexBuffer(composer, params)",y.name),(0,l.checkRequiredKeys)(P,D,"GPUIndexBuffer(composer, params)",y.name);var M=y.indices,w=C.gl,T=C.isWebGL2,A=w.createBuffer();w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,A),(0,h.isTypedArray)(M)||(M=new Uint32Array(M));var L;switch(M.constructor){case Uint8Array:L=w.UNSIGNED_BYTE;break;case Uint16Array:L=w.UNSIGNED_SHORT;break;case Uint32Array:if(!T){var x=(0,d.getExtension)(C,d.OES_ELEMENT_INDEX_UINT,!0);if(!x){L=w.UNSIGNED_SHORT,M=Uint16Array.from(M);break}}L=w.UNSIGNED_INT;break}w.bufferData(w.ELEMENT_ARRAY_BUFFER,M,w.STATIC_DRAW),this.buffer=A,this.glType=L,this.count=M.length}return p.prototype.dispose=function(){var C=this,y=C._composer,m=C.buffer;y.gl.deleteBuffer(m),delete this._composer,delete this.buffer,delete this.glType,delete this.count},p}();r.GPUIndexBuffer=S},355:function(c,r,f){var s=this&&this.__awaiter||function(w,T,A,L){function x(I){return I instanceof A?I:new A(function(_){_(I)})}return new(A||(A=Promise))(function(I,_){function E(g){try{u(L.next(g))}catch(b){_(b)}}function v(g){try{u(L.throw(g))}catch(b){_(b)}}function u(g){g.done?I(g.value):x(g.value).then(E,v)}u((L=L.apply(w,T||[])).next())})},h=this&&this.__generator||function(w,T){var A={label:0,sent:function(){if(I[0]&1)throw I[1];return I[1]},trys:[],ops:[]},L,x,I,_;return _={next:E(0),throw:E(1),return:E(2)},typeof Symbol=="function"&&(_[Symbol.iterator]=function(){return this}),_;function E(u){return function(g){return v([u,g])}}function v(u){if(L)throw new TypeError("Generator is already executing.");for(;A;)try{if(L=1,x&&(I=u[0]&2?x.return:u[0]?x.throw||((I=x.return)&&I.call(x),0):x.next)&&!(I=I.call(x,u[1])).done)return I;switch(x=0,I&&(u=[u[0]&2,I.value]),u[0]){case 0:case 1:I=u;break;case 4:return A.label++,{value:u[1],done:!1};case 5:A.label++,x=u[1],u=[0];continue;case 7:u=A.ops.pop(),A.trys.pop();continue;default:if(I=A.trys,!(I=I.length>0&&I[I.length-1])&&(u[0]===6||u[0]===2)){A=0;continue}if(u[0]===3&&(!I||u[1]>I[0]&&u[1]<I[3])){A.label=u[1];break}if(u[0]===6&&A.label<I[1]){A.label=I[1],I=u;break}if(I&&A.label<I[2]){A.label=I[2],A.ops.push(u);break}I[2]&&A.ops.pop(),A.trys.pop();continue}u=T.call(w,A)}catch(g){u=[6,g],x=0}finally{L=I=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}};Object.defineProperty(r,"__esModule",{value:!0}),r.GPULayer=void 0;var l=f(650),d=f(566),S=f(809),p=f(162),C=f(707),y=f(601),m=f(593),D=f(798),P=f(690),M=function(){function w(T,A){this._clearValue=0,this._bufferIndex=0,this._buffers=[];var L=(A||{}).name;if(!T)throw new Error('Error initing GPULayer "'.concat(L,'": must pass GPUComposer instance to GPULayer(composer, params).'));if(!A)throw new Error("Error initing GPULayer: must pass params to GPULayer(composer, params).");if(!(0,d.isObject)(A))throw new Error("Error initing GPULayer: must pass valid params object to GPULayer(composer, params), got ".concat(JSON.stringify(A),"."));var x=["name","type","numComponents","dimensions","filter","wrapX","wrapY","numBuffers","clearValue","array"],I=["name","type","numComponents","dimensions"],_=Object.keys(A);(0,C.checkValidKeys)(_,x,"GPULayer(composer, params)",A.name),(0,C.checkRequiredKeys)(_,I,"GPULayer(composer, params)",A.name);var E=A.dimensions,v=A.type,u=A.numComponents,g=T.gl;if(this._composer=T,this.name=L,!(0,d.isPositiveInteger)(u)||u>4)throw new Error("Invalid numComponents: ".concat(JSON.stringify(u),' for GPULayer "').concat(L,'", must be number in range [1-4].'));this.numComponents=u;var b=w.calcGPULayerSize(E,L,T.verboseLogging),R=b.length,U=b.width,F=b.height;this._length=R,this._width=U,this._height=F;var X=R===void 0&&(v===y.FLOAT||v==y.HALF_FLOAT)?y.LINEAR:y.NEAREST,O=A.filter!==void 0?A.filter:X;if(!(0,C.isValidFilter)(O))throw new Error("Invalid filter: ".concat(JSON.stringify(O),' for GPULayer "').concat(L,'", must be one of ').concat(JSON.stringify(y.validFilters),"."));if(O===y.LINEAR&&!(v===y.FLOAT||v==y.HALF_FLOAT))throw new Error('LINEAR filtering is not supported on integer types, please use NEAREST filtering for GPULayer "'.concat(L,'" with type: ').concat(v,"."));this.filter=O;var N=A.wrapX!==void 0?A.wrapX:y.CLAMP_TO_EDGE;if(!(0,C.isValidWrap)(N))throw new Error("Invalid wrapX: ".concat(JSON.stringify(N),' for GPULayer "').concat(L,'", must be one of ').concat(JSON.stringify(y.validWraps),"."));this.wrapX=N;var G=A.wrapY!==void 0?A.wrapY:y.CLAMP_TO_EDGE;if(!(0,C.isValidWrap)(G))throw new Error("Invalid wrapY: ".concat(JSON.stringify(G),' for GPULayer "').concat(L,'", must be one of ').concat(JSON.stringify(y.validWraps),"."));if(this.wrapY=G,!(0,C.isValidDataType)(v))throw new Error("Invalid type: ".concat(JSON.stringify(v),' for GPULayer "').concat(L,'", must be one of ').concat(JSON.stringify(y.validDataTypes),"."));this.type=v;var H=w.getGPULayerInternalType({composer:T,type:v,name:L});this._internalType=H;var K=w.getGLTextureParameters({composer:T,name:L,numComponents:u,internalType:H}),$=K.glFormat,z=K.glInternalFormat,Q=K.glType,oe=K.glNumChannels;this._glInternalFormat=z,this._glFormat=$,this._glType=Q,this._glNumChannels=oe;var Z=w.getGPULayerInternalFilter({composer:T,filter:O,wrapX:N,wrapY:G,internalType:H,name:L});this._internalFilter=Z,this._glFilter=g[Z],this._internalWrapX=w.getGPULayerInternalWrap({composer:T,wrap:N,internalFilter:Z,internalType:H,name:L}),this._glWrapS=g[this._internalWrapX],this._internalWrapY=w.getGPULayerInternalWrap({composer:T,wrap:G,internalFilter:Z,internalType:H,name:L}),this._glWrapT=g[this._internalWrapY];var le=A.numBuffers!==void 0?A.numBuffers:1;if(!(0,d.isPositiveInteger)(le))throw new Error("Invalid numBuffers: ".concat(JSON.stringify(le),' for GPULayer "').concat(L,'", must be positive integer.'));this.numBuffers=le,A.clearValue!==void 0&&(this.clearValue=A.clearValue),this._initBuffers(A.array)}return w.initFromImageURL=function(T,A){return s(this,void 0,void 0,function(){return h(this,function(L){return[2,new Promise(function(x,I){if(!A)throw new Error("Error initing GPULayer: must pass params to GPULayer.initFromImageURL(composer, params).");if(!(0,d.isObject)(A))throw new Error("Error initing GPULayer: must pass valid params object to GPULayer.initFromImageURL(composer, params), got ".concat(JSON.stringify(A),"."));var _=["name","url","filter","wrapX","wrapY","format","type","clearValue"],E=["name","url"],v=Object.keys(A);(0,C.checkValidKeys)(v,_,"GPULayer.initFromImageURL(composer, params)",A.name),(0,C.checkRequiredKeys)(v,E,"GPULayer.initFromImageURL(composer, params)",A.name);var u=A.url,g=A.name,b=A.filter,R=A.wrapX,U=A.wrapY,F=A.type,X=A.format;if(!(0,d.isString)(u))throw new Error("Expected GPULayer.initFromImageURL params to have url of type string, got ".concat(u," of type ").concat(typeof u,"."));if(F&&!(0,C.isValidImageType)(F))throw new Error('Invalid type: "'.concat(F,'" for GPULayer.initFromImageURL "').concat(g,'", must be one of ').concat(JSON.stringify(y.validImageTypes),"."));if(X&&!(0,C.isValidImageFormat)(X))throw new Error('Invalid format: "'.concat(X,'" for GPULayer.initFromImageURL "').concat(g,'", must be one of ').concat(JSON.stringify(y.validImageFormats),"."));var O=new w(T,{name:g,type:F||y.FLOAT,numComponents:X?X.length:4,dimensions:[1,1],filter:b,wrapX:R,wrapY:U,numBuffers:1,clearValue:A.clearValue}),N=new Image;N.onload=function(){O.resize([N.width,N.height],N),x(O)},N.onerror=function(G){I(new Error('Error loading image "'.concat(g,'": ').concat(G)))},N.src=u})]})})},Object.defineProperty(w.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"length",{get:function(){if(!this._length)throw new Error('Cannot access length on 2D GPULayer "'.concat(this.name,'".'));return this._length},enumerable:!1,configurable:!0}),w.prototype.is1D=function(){return this._length!==void 0},w.prototype.is2D=function(){return!this.is1D()},w.prototype._usingTextureOverrideForCurrentBuffer=function(){return!!(this._textureOverrides&&this._textureOverrides[this.bufferIndex])},w.prototype.copyCurrentStateToGPULayer=function(T){var A=this._composer;if(this===T)throw new Error("Can't call GPULayer.copyCurrentStateToGPULayer() on self.");var L=A._copyProgramForType(this._internalType);A.step({program:L,input:this,output:T})},w.prototype._initBuffers=function(T){var A=this,L=A.name,x=A.numBuffers,I=A._composer,_=A._glInternalFormat,E=A._glFormat,v=A._glType,u=A._glFilter,g=A._glWrapS,b=A._glWrapT,R=A.width,U=A.height,F=I.gl,X=I._errorCallback,O=null;(0,d.isArray)(T)?O=w.validateGPULayerArray(T,this):T?.constructor===HTMLImageElement&&(O=T);for(var N=0;N<x;N++){var G=F.createTexture();if(!G){X('Could not init texture for GPULayer "'.concat(L,'": ').concat(F.getError(),"."));return}F.bindTexture(F.TEXTURE_2D,G),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_S,g),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_WRAP_T,b),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,u),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,u),F.texImage2D(F.TEXTURE_2D,0,_,R,U,0,E,v,O),this._buffers.push(G)}F.bindTexture(F.TEXTURE_2D,null),F.bindFramebuffer(F.FRAMEBUFFER,null)},Object.defineProperty(w.prototype,"bufferIndex",{get:function(){return this._bufferIndex},enumerable:!1,configurable:!0}),w.prototype.incrementBufferIndex=function(){var T=this.numBuffers;T!==1&&(this._bufferIndex=(this.bufferIndex+1)%T)},w.prototype.decrementBufferIndex=function(){var T=this.numBuffers;T!==1&&(this._bufferIndex=(this.bufferIndex-1+T)%T)},Object.defineProperty(w.prototype,"currentState",{get:function(){return this.getStateAtIndex(this.bufferIndex)},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"_currentTexture",{get:function(){var T=this,A=T._buffers,L=T._bufferIndex,x=T._textureOverrides;return x&&x[L]?x[L]:A[L]},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"lastState",{get:function(){if(this.numBuffers===1)throw new Error('Cannot access lastState on GPULayer "'.concat(this.name,'" with only one buffer.'));return this.getStateAtIndex((this.bufferIndex-1+this.numBuffers)%this.numBuffers)},enumerable:!1,configurable:!0}),w.prototype.getStateAtIndex=function(T){var A=this,L=A.numBuffers,x=A._textureOverrides,I=A._buffers;T<0&&T>-L&&(T+=L),(T<0||T>=L)&&(console.warn("Out of range buffer index: ".concat(T,' for GPULayer "').concat(this.name,'" with $.numBuffers} buffer').concat(L>1?"s":"",".  Was this intentional?")),T<0?T+=L*Math.ceil(Math.abs(T)/L):T=T%L);var _=I[T];return x&&x[T]&&(_=x[T]),{texture:_,layer:this}},w.prototype._prepareForWrite=function(T){T&&this.incrementBufferIndex(),this._textureOverrides&&(this._textureOverrides[this.bufferIndex]=void 0)},w.prototype.setFromArray=function(T){var A=this,L=A._composer,x=A._glInternalFormat,I=A._glFormat,_=A._glType,E=A.width,v=A.height,u=A._currentTexture,g=L.gl,b=w.validateGPULayerArray(T,this);g.bindTexture(g.TEXTURE_2D,u),g.texImage2D(g.TEXTURE_2D,0,x,E,v,0,I,_,b),g.bindTexture(g.TEXTURE_2D,null)},w.prototype.setAtIndex2D=function(T,A,L){var x=this,I=x._composer,_=x.width,E=x.height,v=x._currentTexture,u=I.gl;if(T<0||T>=_||A<0||A>=E)throw new Error("Invalid coordinates [".concat(T,", ").concat(A,'] for GPULayer "').concat(this.name,'" with dimensions [').concat(_,", ").concat(E,"]."));var g=w.validateGPULayerArray(L,this,1);u.bindTexture(u.TEXTURE_2D,v),u.texSubImage2D(u.TEXTURE_2D,0,T,A,1,1,this._glFormat,this._glType,g),u.bindTexture(u.TEXTURE_2D,null)},w.prototype.setAtIndex1D=function(T,A){var L=this;L._glInternalFormat,L._glFormat,L._glType;var x=L.width,I=L.height;if(L._currentTexture,T<0||T>=x*I)throw new Error("Invalid index ".concat(T,' for GPULayer "').concat(this.name,'" with dimensions [').concat(x,", ").concat(I,"]."));var _=T%x,E=Math.floor(T/x);this.setAtIndex2D(_,E,A)},w.prototype.resize=function(T,A){var L=this,x=L.name,I=L._composer,_=I.verboseLogging;_&&console.log('Resizing GPULayer "'.concat(x,'" to ').concat(JSON.stringify(T),"."));var E=w.calcGPULayerSize(T,x,_),v=E.length,u=E.width,g=E.height;this._length=v,this._width=u,this._height=g,this._destroyBuffers(),this._initBuffers(A)},Object.defineProperty(w.prototype,"clearValue",{get:function(){return this._clearValue},set:function(T){var A=this,L=A.numComponents,x=A.type;if(!(0,C.isValidClearValue)(T,L,x))throw new Error("Invalid clearValue: ".concat(JSON.stringify(T),' for GPULayer "').concat(this.name,'", expected ').concat(x," or array of ").concat(x," of length ").concat(L,"."));this._clearValue=(0,d.isArray)(T)?T.slice():T,this._clearValueVec4=void 0},enumerable:!1,configurable:!0}),Object.defineProperty(w.prototype,"clearValueVec4",{get:function(){var T=this._clearValueVec4;if(!T){var A=this.clearValue;if(T=[],(0,d.isFiniteNumber)(A))T.push(A,A,A,A);else{T.push.apply(T,A);for(var L=T.length;L<4;L++)T.push(0)}this._clearValueVec4=T}return T},enumerable:!1,configurable:!0}),w.prototype.clear=function(T){T===void 0&&(T=!1);var A=this,L=A.name,x=A._composer,I=A.clearValueVec4,_=A.numBuffers,E=A.type,v=x.verboseLogging;v&&console.log('Clearing GPULayer "'.concat(L,'".'));var u=x._setValueProgramForType(E);u.setUniform("u_value",I),this.decrementBufferIndex();for(var g=T?_:1,b=0;b<g;b++)x.step({program:u,output:this});T&&this.incrementBufferIndex()},w.prototype._getValuesSetup=function(){var T=this,A=T.width,L=T.height,x=T._composer,I=T._currentTexture,_=this._valuesRaw,E=x.gl;(0,D.bindFrameBuffer)(x,this,I);var v=this,u=v._glNumChannels,g=v._glType,b=v._glFormat,R=v._internalType;switch(R){case y.HALF_FLOAT:E.FLOAT!==void 0?(u=4,b=E.RGBA,g=E.FLOAT,_=_||new Float32Array(A*L*u)):_=_||new Uint16Array(A*L*u);break;case y.FLOAT:u=4,b=E.RGBA,_=_||new Float32Array(A*L*u);break;case y.UNSIGNED_BYTE:u=4,b=E.RGBA_INTEGER,g=E.UNSIGNED_INT,_=_||new Uint32Array(A*L*u);break;case y.UNSIGNED_SHORT:u=4,b=E.RGBA_INTEGER,g=E.UNSIGNED_INT,_=_||new Uint32Array(A*L*u);break;case y.UNSIGNED_INT:u=4,b=E.RGBA_INTEGER,_=_||new Uint32Array(A*L*u);break;case y.BYTE:u=4,b=E.RGBA_INTEGER,g=E.INT,_=_||new Int32Array(A*L*u);break;case y.SHORT:u=4,b=E.RGBA_INTEGER,g=E.INT,_=_||new Int32Array(A*L*u);break;case y.INT:u=4,b=E.RGBA_INTEGER,_=_||new Int32Array(A*L*u);break;default:throw new Error("Unsupported internalType ".concat(R," for getValues()."))}if(this._valuesRaw=_,(0,m.readyToRead)(E))return{_glFormat:b,_glType:g,_valuesRaw:_,_glNumChannels:u,_internalType:R};throw new Error("Unable to read values from Buffer with status: ".concat(E.checkFramebufferStatus(E.FRAMEBUFFER),"."))},w.prototype._getValuesPost=function(T,A,L){var x=this,I=x.width,_=x.height,E=x.numComponents,v=x.type,u=(this._length?this._length:I*_)*E,g=L===y.HALF_FLOAT&&T.constructor===Uint16Array,b=this._valuesBufferView;g&&!b&&(b=new DataView(T.buffer),this._valuesBufferView=b),T.length===u&&(0,P.arrayConstructorForType)(v,!0)===T.constructor?this._values=T:this._values||(this._values=w.initArrayForType(v,u,!0));var R=this._values;if(b||R!==T||E!==A)for(var U=0,F=I*_;U<F;U++){var X=U*A,O=U*E;if(O>=u)break;for(var N=0;N<E;N++)b?R[O+N]=(0,l.getFloat16)(b,2*(X+N),!0):R[O+N]=T[X+N]}return R},w.prototype.getValues=function(){var T=this,A=T.width,L=T.height,x=T._composer,I=x.gl,_=this._getValuesSetup(),E=_._glFormat,v=_._glType,u=_._valuesRaw,g=_._glNumChannels,b=_._internalType;return I.readPixels(0,0,A,L,E,v,u),this._getValuesPost(u,g,b)},w.prototype.getValuesAsync=function(){return s(this,void 0,void 0,function(){var T,A,L,x,I,_,E,v,u,g,b,R;return h(this,function(U){switch(U.label){case 0:return T=this,A=T.width,L=T.height,x=T._composer,I=x.gl,_=x.isWebGL2,_?(E=this._getValuesSetup(),v=E._glFormat,u=E._glType,g=E._valuesRaw,b=E._glNumChannels,R=E._internalType,[4,(0,m.readPixelsAsync)(I,0,0,A,L,v,u,g)]):[2,this.getValues()];case 1:return U.sent(),[2,this._getValuesPost(g,b,R)]}})})},w.prototype._getCanvasWithImageData=function(T){var A=this.getValues(),L=this,x=L.width,I=L.height,_=L.numComponents,E=L.type;T=T||(E===y.FLOAT||E===y.HALF_FLOAT?255:1);var v=document.createElement("canvas");v.width=x,v.height=I;for(var u=v.getContext("2d"),g=u.getImageData(0,0,x,I),b=g.data,R=0;R<I;R++)for(var U=0;U<x;U++){for(var F=R*x+U,X=(I-1-R)*x+U,O=0;O<_;O++)b[4*X+O]=A[_*F+O]*T;_===1&&(b[4*X+1]=b[4*X],b[4*X+2]=b[4*X]),_<4&&(b[4*X+3]=255)}return u.putImageData(g,0,0),v},w.prototype.getImage=function(T){if(T){var A=["multiplier"],L=Object.keys(T);(0,C.checkValidKeys)(L,A,"GPULayer.getImage(params)")}var x=this._getCanvasWithImageData(T&&T.multiplier),I=new Image;return I.src=x.toDataURL(),I},w.prototype.savePNG=function(T){T===void 0&&(T={});var A=["filename","dpi","multiplier","callback"],L=Object.keys(T);(0,C.checkValidKeys)(L,A,"GPULayer.savePNG(params)");var x=this.name,I=T.callback||p.saveAs,_=T.filename||x,E=this._getCanvasWithImageData(T.multiplier);E.toBlob(function(v){if(!v){console.warn('Problem saving PNG from GPULayer "'.concat(x,'", unable to init blob.'));return}T.dpi?(0,S.changeDpiBlob)(v,T.dpi).then(function(u){I(u,"".concat(_,".png"))}):I(v,"".concat(_,".png"))},"image/png")},w.prototype.attachToThreeTexture=function(T){var A=this,L=A._composer,x=A.numBuffers,I=A.currentState,_=A.name,E=L._threeRenderer,v=L.gl;if(!E)throw new Error("GPUComposer was not inited with a renderer.");if(x>1)throw new Error('GPULayer "'.concat(_,'" contains multiple WebGL textures (one for each buffer) that are flip-flopped during compute cycles, please choose a GPULayer with one buffer.  You can copy the current state of this GPULayer to a single buffer GPULayer during your render loop.'));var u=E.properties.get(T);v.deleteTexture(u.__webglTexture),u.__webglTexture=I.texture,u.__webglInit=!0},w.prototype._destroyBuffers=function(){var T=this,A=T._composer,L=T._buffers,x=A.gl;L.forEach(function(I){x.deleteTexture(I),(0,D.disposeFramebuffers)(x,I)}),L.length=0,delete this._textureOverrides},w.prototype.clone=function(T){return this._composer._cloneGPULayer(this,T)},w.prototype.dispose=function(){var T=this,A=T.name,L=T._composer,x=L.gl,I=L.verboseLogging;if(I&&console.log('Deallocating GPULayer "'.concat(A,'".')),!x)throw new Error("Must call dispose() on all GPULayers before calling dispose() on GPUComposer.");this._destroyBuffers(),delete this._buffers,delete this._composer,this._values&&delete this._values,this._valuesRaw&&delete this._valuesRaw},w}();r.GPULayer=M},191:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.minMaxValuesForType=r.testFilterWrap=r.testWriteSupport=r.shouldCastIntTypeAsFloat=void 0;var s=f(566),h=f(650),l=f(601),d=f(690),S=f(581),p=f(798),C=f(355),y=f(593),m={writeSupport:{},filterWrapSupport:{}};C.GPULayer.initArrayForType=function(T,A,L){return L===void 0&&(L=!1),new((0,d.arrayConstructorForType)(T,L))(A)},C.GPULayer.calcGPULayerSize=function(T,A,L){if((0,s.isNumber)(T)){if(!(0,s.isPositiveInteger)(T))throw new Error("Invalid length: ".concat(JSON.stringify(T),' for GPULayer "').concat(A,'", must be positive integer.'));var x=T,I=Math.ceil(Math.sqrt(x)),_=Math.ceil(x/I);return L&&console.log("Using [".concat(I,", ").concat(_,"] for 1D array of length ").concat(T,' in GPULayer "').concat(A,'".')),{width:I,height:_,length:x}}var E=T[0];if(!(0,s.isPositiveInteger)(E))throw new Error("Invalid width: ".concat(JSON.stringify(E),' for GPULayer "').concat(A,'", must be positive integer.'));var v=T[1];if(!(0,s.isPositiveInteger)(v))throw new Error("Invalid height: ".concat(JSON.stringify(v),' for GPULayer "').concat(A,'", must be positive integer.'));return{width:E,height:v}},C.GPULayer.getGPULayerInternalWrap=function(T){var A=T.composer,L=T.wrap,x=T.internalFilter,I=T.internalType;return L===l.CLAMP_TO_EDGE||M(A,I,x,L)?L:l.CLAMP_TO_EDGE},C.GPULayer.getGPULayerInternalFilter=function(T){var A=T.filter;if(A===l.NEAREST)return A;var L=T.composer,x=T.internalType,I=T.wrapX,_=T.wrapY,E=T.name;if(x===l.HALF_FLOAT){var v=(0,S.getExtension)(L,S.OES_TEXTURE_HAlF_FLOAT_LINEAR,!0)||(0,S.getExtension)(L,S.OES_TEXTURE_FLOAT_LINEAR,!0);(!v||!M(L,x,A,I)||!M(L,x,A,_))&&(console.warn("This browser does not support ".concat(A," filtering for type ").concat(x," and wrap [").concat(I,", ").concat(_,'].  Falling back to NEAREST filter for GPULayer "').concat(E,'" with ').concat(A," polyfill in fragment shader.")),A=l.NEAREST)}if(x===l.FLOAT){var v=(0,S.getExtension)(L,S.OES_TEXTURE_FLOAT_LINEAR,!0);(!v||!M(L,x,A,I)||!M(L,x,A,_))&&(console.warn("This browser does not support ".concat(A," filtering for type ").concat(x," and wrap [").concat(I,", ").concat(_,'].  Falling back to NEAREST filter for GPULayer "').concat(E,'" with ').concat(A," polyfill in fragment shader.")),A=l.NEAREST)}return A};function D(T,A){var L=T.glslVersion,x=T.isWebGL2;return L===l.GLSL3&&x?!1:A===l.UNSIGNED_BYTE||A===l.BYTE||A===l.SHORT||A===l.INT||A===l.UNSIGNED_SHORT||A===l.UNSIGNED_INT}r.shouldCastIntTypeAsFloat=D,C.GPULayer.getGLTextureParameters=function(T){var A=T.composer,L=T.name,x=T.numComponents,I=T.internalType,_=A.gl,E=A.glslVersion,v=A.isWebGL2,u,g,b,R;if(v){if(R=x,x===3&&(R=4),I===l.FLOAT||I===l.HALF_FLOAT)switch(R){case 1:g=_.RED;break;case 2:g=_.RG;break;case 4:g=_.RGBA;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}else switch(R){case 1:g=_.RED_INTEGER;break;case 2:g=_.RG_INTEGER;break;case 4:g=_.RGBA_INTEGER;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}switch(I){case l.HALF_FLOAT:switch(u=_.HALF_FLOAT,R){case 1:b=_.R16F;break;case 2:b=_.RG16F;break;case 4:b=_.RGBA16F;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}break;case l.FLOAT:switch(u=_.FLOAT,R){case 1:b=_.R32F;break;case 2:b=_.RG32F;break;case 4:b=_.RGBA32F;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}break;case l.UNSIGNED_BYTE:if(u=_.UNSIGNED_BYTE,E===l.GLSL1&&I===l.UNSIGNED_BYTE)b=g;else switch(R){case 1:b=_.R8UI;break;case 2:b=_.RG8UI;break;case 4:b=_.RGBA8UI;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}break;case l.BYTE:switch(u=_.BYTE,R){case 1:b=_.R8I;break;case 2:b=_.RG8I;break;case 4:b=_.RGBA8I;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}break;case l.SHORT:switch(u=_.SHORT,R){case 1:b=_.R16I;break;case 2:b=_.RG16I;break;case 4:b=_.RGBA16I;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}break;case l.UNSIGNED_SHORT:switch(u=_.UNSIGNED_SHORT,R){case 1:b=_.R16UI;break;case 2:b=_.RG16UI;break;case 4:b=_.RGBA16UI;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}break;case l.INT:switch(u=_.INT,R){case 1:b=_.R32I;break;case 2:b=_.RG32I;break;case 4:b=_.RGBA32I;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}break;case l.UNSIGNED_INT:switch(u=_.UNSIGNED_INT,R){case 1:b=_.R32UI;break;case 2:b=_.RG32UI;break;case 4:b=_.RGBA32UI;break;default:throw new Error("Unsupported glNumChannels: ".concat(R,' for GPULayer "').concat(L,'".'))}break;default:throw new Error('Unsupported type: "'.concat(I,'" for GPULayer "').concat(L,'".'))}}else{if(x<1||x>4)throw new Error("Unsupported numComponents: ".concat(x,' for GPULayer "').concat(L,'".'));switch(R=4,g=_.RGBA,b=_.RGBA,I){case l.FLOAT:u=_.FLOAT;break;case l.HALF_FLOAT:u=_.HALF_FLOAT||(0,S.getExtension)(A,S.OES_TEXTURE_HALF_FLOAT).HALF_FLOAT_OES;break;default:throw new Error('Unsupported type: "'.concat(I,'" in WebGL 1.0 for GPULayer "').concat(L,'".'))}}if(u===void 0||g===void 0||b===void 0){var U=[];throw u===void 0&&U.push("glType"),g===void 0&&U.push("glFormat"),b===void 0&&U.push("glInternalFormat"),new Error("Invalid type: ".concat(I," for numComponents: ").concat(x,", unable to init parameter").concat(U.length>1?"s":""," ").concat(U.join(", "),' for GPULayer "').concat(L,'".'))}if(R===void 0||x<1||x>4||R<x)throw new Error("Invalid numChannels: ".concat(R," for numComponents: ").concat(x,' for GPULayer "').concat(L,'".'));return{glFormat:g,glInternalFormat:b,glType:u,glNumChannels:R}};function P(T,A){var L=T.gl,x=T.glslVersion,I=T.isWebGL2,_="".concat(I,",").concat(A,",").concat(x===l.GLSL3?"3":"1");if(m.writeSupport[_]!==void 0)return m.writeSupport[_];var E=L.createTexture();if(!E)return m.writeSupport[_]=!1,m.writeSupport[_];L.bindTexture(L.TEXTURE_2D,E);var v=L[l.CLAMP_TO_EDGE],u=L[l.NEAREST],g=10,b=10;L.texParameteri(L.TEXTURE_2D,L.TEXTURE_WRAP_S,v),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_WRAP_T,v),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,u),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,u);var R=C.GPULayer.getGLTextureParameters({composer:T,name:"testWriteSupport",numComponents:1,internalType:A}),U=R.glInternalFormat,F=R.glFormat,X=R.glType;L.texImage2D(L.TEXTURE_2D,0,U,g,b,0,F,X,null);var O=L.createFramebuffer();if(!O)return L.deleteTexture(E),m.writeSupport[_]=!1,m.writeSupport[_];L.bindFramebuffer(L.FRAMEBUFFER,O),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,E,0);var N=L.checkFramebufferStatus(L.FRAMEBUFFER)===L.FRAMEBUFFER_COMPLETE;return L.deleteTexture(E),L.deleteFramebuffer(O),m.writeSupport[_]=N,m.writeSupport[_]}r.testWriteSupport=P;function M(T,A,L,x){var I,_=T.gl,E=T.glslVersion,v=T.intPrecision,u=T.floatPrecision,g=T._errorCallback,b=T.isWebGL2,R="".concat(b,",").concat(A,",").concat(L,",").concat(x,",").concat(E===l.GLSL3?"3":"1");if(m.filterWrapSupport[R]!==void 0)return m.filterWrapSupport[R];var U=_.createTexture();if(!U)return m.filterWrapSupport[R]=!1,m.filterWrapSupport[R];_.bindTexture(_.TEXTURE_2D,U);var F=_[x],X=_[L],O=3,N=3,G=1;_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,F),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,F),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,X),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,X);for(var H=C.GPULayer.getGLTextureParameters({composer:T,name:"testFilterWrap",numComponents:G,internalType:A}),K=H.glInternalFormat,$=H.glFormat,z=H.glType,Q=H.glNumChannels,oe=[3,56.5,834,-53.6,.003,96.2,23,90.2,32],Z=C.GPULayer.initArrayForType(A,oe.length*Q,!0),le=0;le<oe.length;le++)Z[le*Q]=oe[le],oe[le]=Z[le*Q];if(A===l.HALF_FLOAT){for(var k=new Uint16Array(Z.length),q=new DataView(k.buffer),le=0;le<Z.length;le++)(0,h.setFloat16)(q,2*le,Z[le],!0);Z=k}_.texImage2D(_.TEXTURE_2D,0,K,O,N,0,$,z,Z);var te=new C.GPULayer(T,{name:"testFloatLinearFiltering-output",type:A,numComponents:G,dimensions:[O,N],wrapX:l.CLAMP_TO_EDGE,wrapY:l.CLAMP_TO_EDGE,filter:l.NEAREST}),W=L===l.LINEAR?.5:1,Y="testFilterWrap-program",J=`
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
}`;E!==l.GLSL3&&(J=(0,y.convertFragmentShaderToGLSL1)(J,Y)[0]);var ie=(0,y.compileShader)(_,E,v,u,J,_.FRAGMENT_SHADER,Y,g,(I={offset:"vec2(".concat(W/O,", ").concat(W/N,")")},I[(0,y.isUnsignedIntType)(A)?"GPUIO_UINT":(0,y.isIntType)(A)?"GPUIO_INT":"GPUIO_FLOAT"]="1",I),void 0,!0);function ce(he,Ee){return x===l.CLAMP_TO_EDGE?Math.max(0,Math.min(Ee-1,he)):(he+Ee)%Ee}var ae=T._getVertexShader(l.DEFAULT_PROGRAM_NAME,"",{},Y);if(ae&&ie){var ue=(0,y.initGLProgram)(_,ae,ie,Y,g);if(ue){te._prepareForWrite(!1),(0,p.bindFrameBuffer)(T,te,te._currentTexture),_.viewport(0,0,O,N),_.useProgram(ue),_.activeTexture(_.TEXTURE0),_.bindTexture(_.TEXTURE_2D,U),_.uniform2fv(_.getUniformLocation(ue,"u_gpuio_scale"),[1,1]),_.uniform2fv(_.getUniformLocation(ue,"u_gpuio_translation"),[0,0]),_.bindBuffer(_.ARRAY_BUFFER,T._getQuadPositionsBuffer()),T._setPositionAttribute(ue,Y),_.drawArrays(_.TRIANGLE_STRIP,0,4),_.disable(_.BLEND);for(var V=te.getValues(),B=!0,re=(0,y.isIntType)(A)?0:A===l.HALF_FLOAT?.01:1e-4,me=0;me<O;me++)for(var _e=0;_e<N;_e++){var ye=void 0;if(L===l.LINEAR)ye=(oe[_e*O+me]+oe[_e*O+ce(me+1,O)]+oe[ce(_e+1,N)*O+me]+oe[ce(_e+1,N)*O+ce(me+1,O)])/4;else{var Me=ce(me+W,O),Se=ce(_e+W,N);ye=oe[Se*O+Me]}var le=_e*O+me;if(Math.abs((ye-V[le])/ye)>re){B=!1;break}}m.filterWrapSupport[R]=B,_.deleteProgram(ue)}else m.filterWrapSupport[R]=!1;_.deleteShader(ie)}else m.filterWrapSupport[R]=!1;return te.dispose(),_.deleteTexture(U),m.filterWrapSupport[R]}r.testFilterWrap=M,C.GPULayer.getGPULayerInternalType=function(T){var A=T.composer,L=T.name,x=A._errorCallback,I=A.isWebGL2,_=T.type,E=_,v=D(A,_);if(v&&(E===l.UNSIGNED_BYTE||E===l.BYTE?E=l.HALF_FLOAT:(console.warn("Falling back ".concat(E,' type to FLOAT type for glsl1.x support for GPULayer "').concat(L,`".
Large UNSIGNED_INT or INT with absolute value > 16,777,216 are not supported, on mobile UNSIGNED_INT, INT, UNSIGNED_SHORT, and SHORT with absolute value > 2,048 may not be supported.`)),E=l.FLOAT)),I){if(E===l.FLOAT){var u=(0,S.getExtension)(A,S.EXT_COLOR_BUFFER_FLOAT,!0);if(!u)console.warn('FLOAT not supported in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(L,'".')),E=l.HALF_FLOAT;else{var g=P(A,E);g||(console.warn('FLOAT not supported for writing operations in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(L,'".')),E=l.HALF_FLOAT)}}if(E===l.HALF_FLOAT){var b=(0,S.getExtension)(A,S.EXT_COLOR_BUFFER_HALF_FLOAT,!0);b||(0,S.getExtension)(A,S.EXT_COLOR_BUFFER_FLOAT,!0);var g=P(A,E);g||(console.warn("This browser does not support writing to HALF_FLOAT textures."),x("This browser does not support writing to HALF_FLOAT textures."))}}else{if(E===l.FLOAT){var u=(0,S.getExtension)(A,S.OES_TEXTURE_FLOAT,!0);if(u){var g=P(A,E);g||(console.warn('FLOAT not supported for writing operations in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(L,'".')),E=l.HALF_FLOAT)}else console.warn('FLOAT not supported in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(L,'".')),E=l.HALF_FLOAT}if(E===l.HALF_FLOAT){(0,S.getExtension)(A,S.OES_TEXTURE_HALF_FLOAT,!0);var g=P(A,E);g||console.warn("This browser does not support writing to HALF_FLOAT textures.")}}return E};function w(T){var A=-1/0,L=1/0;switch(T){case l.UNSIGNED_BYTE:A=l.MIN_UNSIGNED_BYTE,L=l.MAX_UNSIGNED_BYTE;break;case l.BYTE:A=l.MIN_BYTE,L=l.MAX_BYTE;break;case l.UNSIGNED_SHORT:A=l.MIN_UNSIGNED_SHORT,L=l.MAX_UNSIGNED_SHORT;break;case l.SHORT:A=l.MIN_SHORT,L=l.MAX_SHORT;break;case l.UNSIGNED_INT:A=l.MIN_UNSIGNED_INT,L=l.MAX_UNSIGNED_INT;break;case l.INT:A=l.MIN_INT,L=l.MAX_INT;break}return{min:A,max:L}}r.minMaxValuesForType=w,C.GPULayer.validateGPULayerArray=function(T,A,L){L===void 0&&(L=null);var x=A.numComponents,I=A.width,_=A.height,E=A.name,v=A._glNumChannels,u=A._internalType,g=A.is1D()?A.length:null;if(L){if(T.length!==L*x)throw new Error("Invalid data length: ".concat(T.length,' for GPULayer "').concat(E,'" of numComponents: ').concat(x,"."))}else if(T.length!==I*_*x&&(!g||g&&T.length!==g*x))throw new Error("Invalid data length: ".concat(T.length,' for GPULayer "').concat(E,'" of ').concat(g?"length ".concat(g," and "):"","dimensions: [").concat(I,", ").concat(_,"] and numComponents: ").concat(x,"."));var b=!1;switch(T.constructor){case Array:b=!0;break;case Float32Array:b=u!==l.FLOAT;break;case Uint8Array:b=u!==l.UNSIGNED_BYTE;break;case Int8Array:b=u!==l.BYTE;break;case Uint16Array:b=u!==l.UNSIGNED_SHORT;break;case Int16Array:b=u!==l.SHORT;break;case Uint32Array:b=u!==l.UNSIGNED_INT;break;case Int32Array:b=u!==l.INT;break;default:throw new Error("Invalid array type: ".concat(T.constructor.name,' for GPULayer "').concat(E,'", please use one of [').concat(l.validArrayTypes.map(function(le){return le.name}).join(", "),"]."))}var R=w(u),U=R.min,F=R.max,X=L?L*v:I*_*v,O=T.length!==X,N=T;if(b||O){N=C.GPULayer.initArrayForType(u,X);for(var G=u===l.HALF_FLOAT&&b?new DataView(N.buffer):null,H=0,K=T.length/x;H<K;H++)for(var $=0;$<x;$++){var z=T[H*x+$],Q=z,oe=!1;Q<U?(Q=U,oe=!0):Q>F&&(Q=F,oe=!0),oe&&console.warn("Clipping out of range value ".concat(z," to ").concat(Q,' for GPULayer "').concat(E,'" with internal type ').concat(u,"."));var Z=H*v+$;G?(0,h.setFloat16)(G,2*Z,Q,!0):N[Z]=Q}}return N}},664:function(c,r,f){var s=this&&this.__extends||function(){var P=function(M,w){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(T,A){T.__proto__=A}||function(T,A){for(var L in A)Object.prototype.hasOwnProperty.call(A,L)&&(T[L]=A[L])},P(M,w)};return function(M,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");P(M,w);function T(){this.constructor=M}M.prototype=w===null?Object.create(w):(T.prototype=w.prototype,new T)}}(),h=this&&this.__assign||function(){return h=Object.assign||function(P){for(var M,w=1,T=arguments.length;w<T;w++){M=arguments[w];for(var A in M)Object.prototype.hasOwnProperty.call(M,A)&&(P[A]=M[A])}return P},h.apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.GPUProgram=void 0;var l=f(601),d=f(593),S=f(360),p=f(566),C=f(707),y=f(581),m=function(){function P(M,w){var T=this;this._fragmentShaders={},this._compileTimeConstants={},this._uniforms={},this._programs={},this._programsKeyLookup=new WeakMap,this._samplerUniformsIndices=[];var A=(w||{}).name;if(!M)throw new Error('Error initing GPUProgram "'.concat(A,'": must pass GPUComposer instance to GPUProgram(composer, params).'));if(!w)throw new Error("Error initing GPUProgram: must pass params to GPUProgram(composer, params).");if(!(0,p.isObject)(w))throw new Error("Error initing GPUProgram: must pass valid params object to GPUProgram(composer, params), got ".concat(JSON.stringify(w),"."));var L=["name","fragmentShader","uniforms","compileTimeConstants"],x=["name","fragmentShader"],I=Object.keys(w);(0,C.checkValidKeys)(I,L,"GPUProgram(composer, params)",w.name),(0,C.checkRequiredKeys)(I,x,"GPUProgram(composer, params)",w.name);var _=w.fragmentShader,E=w.uniforms,v=w.compileTimeConstants;this._composer=M,this.name=A;var u=(0,p.isString)(_)?_:_.join(`
`),g=(0,d.preprocessFragmentShader)(u,M.glslVersion,A),b=g.shaderSource,R=g.samplerUniforms,U=g.additionalSources;if(this._fragmentShaderSource=b,R.forEach(function($,z){T._samplerUniformsIndices.push({name:$,inputIndex:0,shaderIndex:z})}),this.constructor===P&&U){this._childPrograms=[];for(var F=0,X=U.length;F<X;F++)this._childPrograms.push(new D(M,w,{fragmentShaderSource:U[F]}))}if(v&&(this._compileTimeConstants=h({},v)),M.glslVersion===l.GLSL1&&(b.includes("dFdx")||b.includes("dFdy")||b.includes("fwidth"))){var O=(0,y.getExtension)(M,y.OES_STANDARD_DERIVATIVES,!0);O&&(this._extensions=`#extension GL_OES_standard_derivatives : enable
`)}if(E)for(var F=0;F<E.length;F++){var N=E[F],G=N.name,H=N.value,K=N.type;this.setUniform(G,H,K)}}return P.prototype.recompile=function(M){var w=this._compileTimeConstants,T=!1;if(Object.keys(M).forEach(function(H){w[H]!==M[H]&&(T=!0,w[H]=M[H])}),!!T){for(var A=this,L=A._fragmentShaders,x=A._programs,I=A._programsKeyLookup,_=A._composer,E=A._uniforms,v=_.gl,u=Object.keys(x),g=0,b=u.length;g<b;g++){var R=u[g],U=x[R];v.deleteProgram(U),I.delete(U),delete x[R]}for(var F=Object.keys(L),g=0,X=F.length;g<X;g++){var R=F[g];v.deleteShader(L[R]),delete L[R]}for(var O=Object.values(E),g=0,N=O.length;g<N;g++)O[g].location=new WeakMap;if(this._childPrograms)for(var g=0,G=this._childPrograms.length;g<G;g++)this._childPrograms[g].recompile(M)}},P.prototype._getFragmentShader=function(M,w){var T=this._fragmentShaders;if(T[M])return T[M];for(var A=this,L=A._composer,x=A.name,I=A._fragmentShaderSource,_=A._compileTimeConstants,E=A._extensions,v=L.gl,u=L._errorCallback,g=L.verboseLogging,b=L.glslVersion,R=L.floatPrecision,U=L.intPrecision,F=Object.keys(w),X=0;X<F.length;X++){var O=F[X];_[O]=w[O]}g&&console.log('Compiling fragment shader for GPUProgram "'.concat(x,'" with compile time constants: ').concat(JSON.stringify(_)));var N=(0,d.compileShader)(v,b,U,R,I,v.FRAGMENT_SHADER,x,u,_,E,Object.keys(T).length===0);if(!N){u('Unable to compile fragment shader for GPUProgram "'.concat(x,'".'));return}return T[M]=N,T[M]},P.prototype._getProgramWithName=function(M,w,T){for(var A=this,L=A._samplerUniformsIndices,x=A._composer,I="",_={},E=0,v=L.length;E<v;E++){var u=L[E].inputIndex,g=T[u].layer,b=g.filter,R=g.wrapX,U=g.wrapY,F=g.type,X=g._internalFilter,O=g._internalWrapX,N=g._internalWrapY,G=R===O?0:R===l.REPEAT?1:0,H=U===N?0:U===l.REPEAT?1:0,K=b===X?0:b===l.LINEAR?1:0;I+="_IN".concat(E,"_").concat(G,"_").concat(H,"_").concat(K),_["".concat(S.SAMPLER2D_WRAP_X).concat(E)]="".concat(G),_["".concat(S.SAMPLER2D_WRAP_Y).concat(E)]="".concat(H),_["".concat(S.SAMPLER2D_FILTER).concat(E)]="".concat(K),x.glslVersion===l.GLSL1&&(0,d.isIntType)(F)&&(_["".concat(S.SAMPLER2D_CAST_INT).concat(E)]="1")}var $=Object.keys(w).map(function(V){return"_".concat(V,"_").concat(w[V])}).join(),z="".concat(M).concat($).concat(I);if(this._programs[z])return this._programs[z];var Q=this,oe=Q._uniforms,Z=Q._programs,le=Q._programsKeyLookup,k=x.gl,q=x._errorCallback,te=x._getVertexShader(M,$,w,this.name);if(te===void 0){q('Unable to init vertex shader "'.concat(M).concat($,'" for GPUProgram "').concat(this.name,'".'));return}var W=this._getFragmentShader(I,_);if(W===void 0){q('Unable to init fragment shader "'.concat(I,'" for GPUProgram "').concat(this.name,'".'));return}var Y=(0,d.initGLProgram)(k,te,W,this.name,q);if(Y===void 0){k.deleteShader(W),q('Unable to init program "'.concat(z,'" for GPUProgram "').concat(this.name,'".'));return}k.useProgram(Y);for(var J=Object.keys(oe),E=0,ie=J.length;E<ie;E++){var ce=J[E],ae=oe[ce],ue=ae.value,F=ae.type;this._setProgramUniform(Y,ce,ue,F)}return Z[z]=Y,le.set(Y,z),Y},P.prototype._setProgramUniform=function(M,w,T,A){var L,x=this,I=x._composer,_=x._uniforms,E=I.gl,v=I._errorCallback,u=I.glslVersion,g=u===l.GLSL3,b=(L=_[w])===null||L===void 0?void 0:L.location.get(M);if(b===void 0){var R=E.getUniformLocation(M,w);if(R===null){console.warn('Could not init uniform "'.concat(w,'" for program "').concat(this.name,'". Check that uniform is present in shader code, unused uniforms may be removed by compiler. Also check that uniform type in shader code matches type ').concat(A,". Error code: ").concat(E.getError(),"."));return}b=R,_[w]&&_[w].location.set(M,b);var U=E.getUniform(M,b),F=!1;if(A===l.BOOL_1D_UNIFORM||A===l.BOOL_2D_UNIFORM||A===l.BOOL_3D_UNIFORM||A===l.BOOL_4D_UNIFORM?!(0,p.isBoolean)(U)&&U.constructor!==Array&&(F=!0):A===l.FLOAT_1D_UNIFORM||A===l.FLOAT_2D_UNIFORM||A===l.FLOAT_3D_UNIFORM||A===l.FLOAT_4D_UNIFORM?!(0,p.isFiniteNumber)(U)&&U.constructor!==Float32Array&&(F=!0):A===l.INT_1D_UNIFORM||A===l.INT_2D_UNIFORM||A===l.INT_3D_UNIFORM||A===l.INT_4D_UNIFORM?!(0,p.isInteger)(U)&&U.constructor!==Int32Array&&(F=!0):(A===l.UINT_1D_UNIFORM||A===l.UINT_2D_UNIFORM||A===l.UINT_3D_UNIFORM||A===l.UINT_4D_UNIFORM)&&(g?!(0,p.isNonNegativeInteger)(U)&&U.constructor!==Uint32Array&&(F=!0):!(0,p.isNonNegativeInteger)(U)&&U.constructor!==Int32Array&&(F=!0)),F){v('Invalid uniform "'.concat(w,'" for program "').concat(this.name,'". Check that uniform type in shader code matches type ').concat(A,", gl.getUniform(program, location) returned type: ").concat(U.constructor.name,"."));return}}switch(A){case l.BOOL_1D_UNIFORM:E.uniform1i(b,T?1:0);break;case l.BOOL_2D_UNIFORM:E.uniform2i(b,T[0]?1:0,T[1]?1:0);break;case l.BOOL_3D_UNIFORM:E.uniform3i(b,T[0]?1:0,T[1]?1:0,T[2]?1:0);break;case l.BOOL_4D_UNIFORM:E.uniform4i(b,T[0]?1:0,T[1]?1:0,T[2]?1:0,T[3]?1:0);break;case l.FLOAT_1D_UNIFORM:E.uniform1f(b,T);break;case l.FLOAT_2D_UNIFORM:E.uniform2fv(b,T);break;case l.FLOAT_3D_UNIFORM:E.uniform3fv(b,T);break;case l.FLOAT_4D_UNIFORM:E.uniform4fv(b,T);break;case l.INT_1D_UNIFORM:E.uniform1i(b,T);break;case l.INT_2D_UNIFORM:E.uniform2iv(b,T);break;case l.INT_3D_UNIFORM:E.uniform3iv(b,T);break;case l.INT_4D_UNIFORM:E.uniform4iv(b,T);break;case l.UINT_1D_UNIFORM:g?E.uniform1ui(b,T):E.uniform1i(b,T);break;case l.UINT_2D_UNIFORM:g?E.uniform2uiv(b,T):E.uniform2iv(b,T);break;case l.UINT_3D_UNIFORM:g?E.uniform3uiv(b,T):E.uniform3iv(b,T);break;case l.UINT_4D_UNIFORM:g?E.uniform4uiv(b,T):E.uniform4iv(b,T);break;default:throw new Error("Unknown uniform type ".concat(A,' for GPUProgram "').concat(this.name,'".'))}},P.prototype._cacheUniformValue=function(M,w,T){var A=this._uniforms,L=A[M];if(!L)return A[M]={location:new WeakMap,value:(0,p.isArray)(w)?w.slice():w,type:T},!0;var x=L.value;if(L.value=(0,p.isArray)(w)?w.slice():w,(0,p.isArray)(w)){for(var I=0,_=w.length;I<_;I++)if(w[I]!==x[I])return!0;return!1}return w!==x},P.prototype.setUniform=function(M,w,T){var A,L=this,x=L._programs,I=L._uniforms,_=L._composer,E=L._samplerUniformsIndices,v=_.verboseLogging,u=_.gl;if((0,p.isArray)(w)){var g=w.length;if(g>4)throw new Error("Invalid uniform value: [".concat(w.join(", "),'] passed to GPUProgram "').concat(this.name,', uniforms must be of type number[] with length <= 4, number, or boolean."'))}var b=(A=I[M])===null||A===void 0?void 0:A.type;if(T){var R=(0,d.uniformInternalTypeForValue)(w,T,M,this.name);if(b===void 0)b=R;else if(b!==R)throw new Error('Uniform "'.concat(M,'" for GPUProgram "').concat(this.name,'" cannot change from type ').concat(b," to type ").concat(R,"."))}if(b===void 0)throw new Error('Unknown type for uniform "'.concat(M,'", please pass in type to GPUProgram.setUniform(name, value, type) when initing a new uniform.'));var U=this._cacheUniformValue(M,w,b);if(U){var F=E.find(function($){return $.name===M});F&&(0,p.isInteger)(w)&&(F.inputIndex=w),v&&console.log('Setting uniform "'.concat(M,'" for program "').concat(this.name,'" to value ').concat(JSON.stringify(w),"."));for(var X=Object.keys(x),O=0,N=X.length;O<N;O++){var G=X[O],H=x[G];u.useProgram(H),this._setProgramUniform(H,M,w,b)}if(this._childPrograms)for(var O=0,K=this._childPrograms.length;O<K;O++)this._childPrograms[O].setUniform(M,w,T)}},P.prototype._setInternalFragmentUniforms=function(M,w){if(w.length!==0){if(!M)throw new Error("Must pass in valid WebGLProgram to GPUProgram._setInternalFragmentUniforms, got undefined.");var T=this,A=T._programsKeyLookup,L=T._samplerUniformsIndices,x=A.get(M);if(!x)throw new Error('Could not find valid programName for WebGLProgram in GPUProgram "'.concat(this.name,'".'));for(var I=new Array(Math.max(w.length,L.length)).fill(-1),_=0,E=L.length;_<E;_++){var v=L[_],u=v.inputIndex,g=v.shaderIndex;I[u]>=0?console.warn("Found > 1 sampler2D uniforms at texture index ".concat(u,' for GPUProgram "').concat(this.name,'".')):I[u]=g}for(var _=0,b=w.length;_<b;_++){var R=w[_].layer,U=R.width,F=R.height,X=I[_];if(!(X<0)){var O=R.filter,N=R.wrapX,G=R.wrapY,H=R._internalFilter,K=R._internalWrapX,$=R._internalWrapY,z=O!==H;if(z||N!==K||G!==$){var Q=[.5/U,.5/F],oe="".concat(S.SAMPLER2D_HALF_PX_UNIFORM).concat(X),Z=this._cacheUniformValue(oe,Q,l.FLOAT_2D_UNIFORM);if(Z&&this._setProgramUniform(M,oe,Q,l.FLOAT_2D_UNIFORM),z){var le=[U,F],k="".concat(S.SAMPLER2D_DIMENSIONS_UNIFORM).concat(X),q=this._cacheUniformValue(k,le,l.FLOAT_2D_UNIFORM);q&&this._setProgramUniform(M,k,le,l.FLOAT_2D_UNIFORM)}}}}}},P.prototype._setVertexUniform=function(M,w,T,A){if(!M)throw new Error("Must pass in valid WebGLProgram to GPUProgram._setVertexUniform, got undefined.");var L=this._programsKeyLookup,x=L.get(M);if(!x)throw new Error('Could not find valid programName for WebGLProgram in GPUProgram "'.concat(this.name,'".'));var I=(0,d.uniformInternalTypeForValue)(T,A,w,this.name);this._setProgramUniform(M,w,T,I)},P.prototype.dispose=function(){var M=this,w=M._composer,T=M._fragmentShaders,A=M._programs,L=M._programsKeyLookup,x=w.gl,I=w.verboseLogging;if(I&&console.log('Deallocating GPUProgram "'.concat(this.name,'".')),!x)throw new Error("Must call dispose() on all GPUPrograms before calling dispose() on GPUComposer.");if(Object.values(A).forEach(function(v){v&&(x.deleteProgram(v),L.delete(v))}),Object.keys(A).forEach(function(v){delete A[v]}),Object.values(T).forEach(function(v){x.deleteShader(v)}),Object.keys(T).forEach(function(v){delete T[v]}),this._childPrograms){for(var _=0,E=this._childPrograms.length;_<E;_++)this._childPrograms[_].dispose();this._childPrograms.length}delete this._childPrograms,delete this._composer,delete this.name,delete this._fragmentShaderSource,delete this._compileTimeConstants,delete this._extensions,delete this._uniforms,delete this._programs,delete this._programsKeyLookup,delete this._fragmentShaders,delete this._samplerUniformsIndices},P}();r.GPUProgram=m;var D=function(P){s(M,P);function M(w,T,A){var L=P.call(this,w,T)||this,x=A.fragmentShaderSource;return L._fragmentShaderSource=x,L}return M}(m)},579:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.wrappedLineColorProgram=r.renderSignedAmplitudeProgram=r.renderAmplitudeProgram=r.renderRGBProgram=r.zeroProgram=r.setColorProgram=r.setValueProgram=r.multiplyValueProgram=r.addValueProgram=r.addLayersProgram=r.copyProgram=void 0;var s=f(566),h=f(601),l=f(690),d=f(664);function S(L,x){var I=x.type,_=x.precision||"",E=(0,l.glslTypeForType)(I,4),v=x.name||"copy_".concat((0,l.uniformTypeForType)(I,L.glslVersion),"_layer");return new d.GPUProgram(L,{name:v,fragmentShader:`
in vec2 v_uv;
uniform `.concat(_," ").concat((0,l.glslPrefixForType)(I),`sampler2D u_state;
out `).concat(_," ").concat(E,` out_result;
void main() {
	out_result = texture(u_state, v_uv);
}`),uniforms:[{name:"u_state",value:0,type:h.INT}]})}r.copyProgram=S;function p(L,x){var I=x.type,_=x.numInputs||2,E=x.precision||"",v=x.components||"xyzw",u=(0,l.glslTypeForType)(I,v.length),g=new Array(_),b=x.name||"".concat(_,"-way_add_").concat((0,l.uniformTypeForType)(I,L.glslVersion),"_").concat(v);return new d.GPUProgram(L,{name:b,fragmentShader:`
in vec2 v_uv;
`.concat(g.map(function(R,U){return"uniform ".concat(E," ").concat((0,l.glslPrefixForType)(I),"sampler2D u_state").concat(U,";")}).join(`
`),`
out `).concat(E," ").concat(u,` out_result;
void main() {
	out_result = `).concat(g.map(function(R,U){return"texture(u_state".concat(U,", v_uv).").concat(v)}).join(" + "),`;
}`),uniforms:g.map(function(R,U){return{name:"u_state".concat(U),value:U,type:h.INT}})})}r.addLayersProgram=p;function C(L,x){var I=x.type,_=x.value,E=x.precision||"",v=(0,s.isArray)(_)?_.length:1,u=(0,l.glslTypeForType)(I,v),g=v===1?4:v,b=(0,l.glslTypeForType)(I,g),R=(0,l.glslComponentSelectionForNumComponents)(g),U=x.name||"addValue_".concat(u,"_w_length_").concat(v);return new d.GPUProgram(L,{name:U,fragmentShader:`
in vec2 v_uv;
uniform `.concat(E," ").concat(u,` u_value;
uniform `).concat(E," ").concat((0,l.glslPrefixForType)(I),`sampler2D u_state;
out `).concat(E," ").concat(b,` out_result;
void main() {
	out_result = `).concat(u!==b?b:"","(u_value) + texture(u_state, v_uv)").concat(R,`;
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_value",value:_,type:(0,l.uniformTypeForType)(I,L.glslVersion)}]})}r.addValueProgram=C;function y(L,x){var I=x.type,_=x.value,E=x.precision||"",v=(0,s.isArray)(_)?_.length:1,u=(0,l.glslTypeForType)(I,v),g=v===1?4:v,b=(0,l.glslTypeForType)(I,g),R=(0,l.glslComponentSelectionForNumComponents)(g),U=x.name||"addValue_".concat(u,"_w_length_").concat(v);return new d.GPUProgram(L,{name:U,fragmentShader:`
in vec2 v_uv;
uniform `.concat(E," ").concat(u,` u_value;
uniform `).concat(E," ").concat((0,l.glslPrefixForType)(I),`sampler2D u_state;
out `).concat(E," ").concat(b,` out_result;
void main() {
	out_result = `).concat(u!==b?b:"","(u_value) * texture(u_state, v_uv)").concat(R,`;
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_value",value:_,type:(0,l.uniformTypeForType)(I,L.glslVersion)}]})}r.multiplyValueProgram=y;function m(L,x){var I=x.type,_=x.value,E=x.precision||"",v=(0,s.isArray)(_)?_.length:1,u=(0,l.glslTypeForType)(I,v),g=v===1?4:v,b=(0,l.glslTypeForType)(I,g),R=x.name||"setValue_".concat(u,"_w_length_").concat(v);return new d.GPUProgram(L,{name:R,fragmentShader:`
uniform `.concat(E," ").concat(u,` u_value;
out `).concat(E," ").concat(b,` out_result;
void main() {
	out_result = `).concat(u!==b?b:"",`(u_value);
}`),uniforms:[{name:"u_value",value:_,type:(0,l.uniformTypeForType)(I,L.glslVersion)}]})}r.setValueProgram=m;function D(L,x){var I=x.type,_=x.precision||"",E=x.opacity===void 0?1:x.opacity,v=x.color||[0,0,0],u=x.name||"setColor",g=(0,l.glslTypeForType)(I,4);return new d.GPUProgram(L,{name:u,fragmentShader:`
uniform `.concat(_,` vec3 u_color;
uniform `).concat(_,` float u_opacity;
out `).concat(_," ").concat(g,` out_result;
void main() {
	out_result = `).concat(g,`(u_color, u_opacity);
}`),uniforms:[{name:"u_color",value:v,type:h.FLOAT},{name:"u_opacity",value:E,type:h.FLOAT}]})}r.setColorProgram=D;function P(L,x){return m(L,{type:h.FLOAT,value:0,name:x.name})}r.zeroProgram=P;function M(L,x){var I=x.type,_=x.precision||"",E=3,v=(0,l.glslTypeForType)(I,E),u=(0,l.glslTypeForType)(h.FLOAT,E),g=(0,l.glslPrefixForType)(I),b=u===v,R=x.name||"renderRGB_".concat(v);return new d.GPUProgram(L,{name:R,fragmentShader:`
in vec2 v_uv;
uniform float u_opacity;
uniform float u_scale;
uniform `.concat(_," ").concat(g,`sampler2D u_state;
out vec4 out_result;
void main() {
	vec3 color = u_scale * (`).concat(b?"":u,`(texture(u_state, v_uv).rgb));
	out_result = vec4(color, u_opacity);
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_scale",value:x.scale!==void 0?x.scale:1,type:h.FLOAT},{name:"u_opacity",value:x.opacity!==void 0?x.opacity:1,type:h.FLOAT}]})}r.renderRGBProgram=M;function w(L,x){var I=x.type,_=x.precision||"",E=x.components||"xyzw",v=E.length,u=(0,l.glslTypeForType)(I,v),g=(0,l.glslTypeForType)(h.FLOAT,v),b=(0,l.glslPrefixForType)(I),R=g===u,U=x.name||"renderAmplitude_".concat(u,"_w_").concat(v,"_components");return new d.GPUProgram(L,{name:U,fragmentShader:`
in vec2 v_uv;
uniform float u_opacity;
uniform float u_scale;
uniform vec3 u_colorMax;
uniform vec3 u_colorMin;
uniform `.concat(_," ").concat(b,`sampler2D u_state;
out vec4 out_result;
void main() {
	float amplitude = u_scale * `).concat(v===1?"abs":"length","(").concat(R?"":g,"(texture(u_state, v_uv)").concat(E==="xyzw"||E==="rgba"||E==="stpq"?"":".".concat(E),`));
	vec3 color = mix(u_colorMin, u_colorMax, amplitude);
	out_result = vec4(color, u_opacity);
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_scale",value:x.scale!==void 0?x.scale:1,type:h.FLOAT},{name:"u_opacity",value:x.opacity!==void 0?x.opacity:1,type:h.FLOAT},{name:"u_colorMax",value:x.colorMax||[1,1,1],type:h.FLOAT},{name:"u_colorMin",value:x.colorMin||[0,0,0],type:h.FLOAT}]})}r.renderAmplitudeProgram=w;function T(L,x){var I=x.type,_=x.precision||"",E=(0,l.glslTypeForType)(I,1),v=(0,l.glslPrefixForType)(I),u=E==="float",g=x.component||"x",b=x.name||"renderAmplitude_".concat(E,"_").concat(g);return new d.GPUProgram(L,{name:b,fragmentShader:`
in vec2 v_uv;
uniform float u_opacity;
uniform float u_scale;
uniform float u_bias;
uniform vec3 u_colorMin;
uniform vec3 u_colorMax;
uniform vec3 u_colorCenter;
uniform `.concat(_," ").concat(v,`sampler2D u_state;
out vec4 out_result;
void main() {
	float signedAmplitude = u_scale * (`).concat(u?"":"float","(texture(u_state, v_uv).").concat(g,`) - u_bias);
	float amplitudeSign = sign(signedAmplitude);
	vec3 interpColor = mix(u_colorMin, u_colorMax, amplitudeSign / 2.0 + 0.5);
	vec3 color = mix(u_colorCenter, interpColor, signedAmplitude * amplitudeSign);
	out_result = vec4(color, u_opacity);
}`),uniforms:[{name:"u_state",value:0,type:h.INT},{name:"u_scale",value:x.scale!==void 0?x.scale:1,type:h.FLOAT},{name:"u_bias",value:x.bias||0,type:h.FLOAT},{name:"u_opacity",value:x.opacity!==void 0?x.opacity:1,type:h.FLOAT},{name:"u_colorMin",value:x.colorMin||[0,0,1],type:h.FLOAT},{name:"u_colorMax",value:x.colorMax||[1,0,0],type:h.FLOAT},{name:"u_colorCenter",value:x.colorCenter||[1,1,1],type:h.FLOAT}]})}r.renderSignedAmplitudeProgram=T;function A(L){return new d.GPUProgram(L,{name:"wrappedLineColor",fragmentShader:`
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
}`})}r.wrappedLineColorProgram=A},404:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Vector4=void 0;var f=function(){function s(h,l,d,S){h===void 0&&(h=0),l===void 0&&(l=0),d===void 0&&(d=0),S===void 0&&(S=1),this.x=h,this.y=l,this.z=d,this.w=S}return Object.defineProperty(s.prototype,"width",{get:function(){return this.z},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"height",{get:function(){return this.w},enumerable:!1,configurable:!0}),s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this.w=h.w,this},s}();r.Vector4=f},707:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.checkRequiredKeys=r.checkValidKeys=r.isNumberOfType=r.isValidClearValue=r.isValidImageType=r.isValidImageFormat=r.isValidWrap=r.isValidFilter=r.isValidDataType=void 0;var s=f(566),h=f(601);function l(M){return h.validDataTypes.indexOf(M)>-1}r.isValidDataType=l;function d(M){return h.validFilters.indexOf(M)>-1}r.isValidFilter=d;function S(M){return h.validWraps.indexOf(M)>-1}r.isValidWrap=S;function p(M){return h.validImageFormats.indexOf(M)>-1}r.isValidImageFormat=p;function C(M){return h.validImageTypes.indexOf(M)>-1}r.isValidImageType=C;function y(M,w,T){if((0,s.isArray)(M)){if(M.length!==w)return!1;for(var A=0;A<M.length;A++)if(!m(M[A],T))return!1}else if(!m(M,T))return!1;return!0}r.isValidClearValue=y;function m(M,w){switch(w){case h.HALF_FLOAT:case h.FLOAT:return(0,s.isFiniteNumber)(M);case h.BYTE:return M<-128||M>127?!1:(0,s.isInteger)(M);case h.SHORT:return M<-32768||M>32767?!1:(0,s.isInteger)(M);case h.INT:return M<-2147483648||M>2147483647?!1:(0,s.isInteger)(M);case h.UNSIGNED_BYTE:return M>255?!1:(0,s.isNonNegativeInteger)(M);case h.UNSIGNED_SHORT:return M>65535?!1:(0,s.isNonNegativeInteger)(M);case h.UNSIGNED_INT:return M>4294967295?!1:(0,s.isNonNegativeInteger)(M);default:throw new Error("Unknown type ".concat(w))}}r.isNumberOfType=m;function D(M,w,T,A){M.forEach(function(L){w.indexOf(L)<0&&console.warn('Invalid params key "'.concat(L,'" passed to ').concat(T).concat(A?' with name "'.concat(A,'"'):"",".  Valid keys are ").concat(JSON.stringify(w),"."))})}r.checkValidKeys=D;function P(M,w,T,A){w.forEach(function(L){if(M.indexOf(L)<0)throw new Error('Required params key "'.concat(L,'" was not passed to ').concat(T).concat(A?' with name "'.concat(A,'"'):"","."))})}r.checkRequiredKeys=P},601:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.LAYER_POINTS_PROGRAM_NAME=r.SEGMENT_PROGRAM_NAME=r.DEFAULT_PROGRAM_NAME=r.BOOL_4D_UNIFORM=r.BOOL_3D_UNIFORM=r.BOOL_2D_UNIFORM=r.BOOL_1D_UNIFORM=r.UINT_4D_UNIFORM=r.UINT_3D_UNIFORM=r.UINT_2D_UNIFORM=r.UINT_1D_UNIFORM=r.INT_4D_UNIFORM=r.INT_3D_UNIFORM=r.INT_2D_UNIFORM=r.INT_1D_UNIFORM=r.FLOAT_4D_UNIFORM=r.FLOAT_3D_UNIFORM=r.FLOAT_2D_UNIFORM=r.FLOAT_1D_UNIFORM=r.PRECISION_HIGH_P=r.PRECISION_MEDIUM_P=r.PRECISION_LOW_P=r.EXPERIMENTAL_WEBGL2=r.EXPERIMENTAL_WEBGL=r.WEBGL1=r.WEBGL2=r.GLSL1=r.GLSL3=r.validImageTypes=r.validImageFormats=r.RGBA=r.RGB=r.validWraps=r.validFilters=r.validDataTypes=r.validArrayTypes=r.REPEAT=r.CLAMP_TO_EDGE=r.LINEAR=r.NEAREST=r.UINT=r.BOOL=r.INT=r.UNSIGNED_INT=r.SHORT=r.UNSIGNED_SHORT=r.BYTE=r.UNSIGNED_BYTE=r.FLOAT=r.HALF_FLOAT=void 0,r.BOUNDARY_RIGHT=r.BOUNDARY_LEFT=r.BOUNDARY_BOTTOM=r.BOUNDARY_TOP=r.GPUIO_FLOAT_PRECISION=r.GPUIO_INT_PRECISION=r.MAX_FLOAT_INT=r.MIN_FLOAT_INT=r.MAX_HALF_FLOAT_INT=r.MIN_HALF_FLOAT_INT=r.MAX_INT=r.MIN_INT=r.MAX_UNSIGNED_INT=r.MIN_UNSIGNED_INT=r.MAX_SHORT=r.MIN_SHORT=r.MAX_UNSIGNED_SHORT=r.MIN_UNSIGNED_SHORT=r.MAX_BYTE=r.MIN_BYTE=r.MAX_UNSIGNED_BYTE=r.MIN_UNSIGNED_BYTE=r.DEFAULT_CIRCLE_NUM_SEGMENTS=r.DEFAULT_ERROR_CALLBACK=r.GPUIO_VS_POSITION_W_ACCUM=r.GPUIO_VS_NORMAL_ATTRIBUTE=r.GPUIO_VS_UV_ATTRIBUTE=r.GPUIO_VS_INDEXED_POSITIONS=r.GPUIO_VS_WRAP_Y=r.GPUIO_VS_WRAP_X=r.LAYER_MESH_PROGRAM_NAME=r.LAYER_VECTOR_FIELD_PROGRAM_NAME=r.LAYER_LINES_PROGRAM_NAME=void 0,r.HALF_FLOAT="HALF_FLOAT",r.FLOAT="FLOAT",r.UNSIGNED_BYTE="UNSIGNED_BYTE",r.BYTE="BYTE",r.UNSIGNED_SHORT="UNSIGNED_SHORT",r.SHORT="SHORT",r.UNSIGNED_INT="UNSIGNED_INT",r.INT="INT",r.BOOL="BOOL",r.UINT="UINT",r.NEAREST="NEAREST",r.LINEAR="LINEAR",r.CLAMP_TO_EDGE="CLAMP_TO_EDGE",r.REPEAT="REPEAT",r.validArrayTypes=[Float32Array,Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Array],r.validDataTypes=[r.HALF_FLOAT,r.FLOAT,r.UNSIGNED_BYTE,r.BYTE,r.UNSIGNED_SHORT,r.SHORT,r.UNSIGNED_INT,r.INT],r.validFilters=[r.NEAREST,r.LINEAR],r.validWraps=[r.CLAMP_TO_EDGE,r.REPEAT],r.RGB="RGB",r.RGBA="RGBA",r.validImageFormats=[r.RGB,r.RGBA],r.validImageTypes=[r.UNSIGNED_BYTE,r.FLOAT,r.HALF_FLOAT],r.GLSL3="300 es",r.GLSL1="100",r.WEBGL2="webgl2",r.WEBGL1="webgl",r.EXPERIMENTAL_WEBGL="experimental-webgl",r.EXPERIMENTAL_WEBGL2="experimental-webgl2",r.PRECISION_LOW_P="lowp",r.PRECISION_MEDIUM_P="mediump",r.PRECISION_HIGH_P="highp",r.FLOAT_1D_UNIFORM="FLOAT_1D_UNIFORM",r.FLOAT_2D_UNIFORM="FLOAT_2D_UNIFORM",r.FLOAT_3D_UNIFORM="FLOAT_3D_UNIFORM",r.FLOAT_4D_UNIFORM="FLOAT_4D_UNIFORM",r.INT_1D_UNIFORM="INT_1D_UNIFORM",r.INT_2D_UNIFORM="INT_2D_UNIFORM",r.INT_3D_UNIFORM="INT_3D_UNIFORM",r.INT_4D_UNIFORM="INT_4D_UNIFORM",r.UINT_1D_UNIFORM="UINT_1D_UNIFORM",r.UINT_2D_UNIFORM="UINT_2D_UNIFORM",r.UINT_3D_UNIFORM="UINT_3D_UNIFORM",r.UINT_4D_UNIFORM="UINT_4D_UNIFORM",r.BOOL_1D_UNIFORM="BOOL_1D_UNIFORM",r.BOOL_2D_UNIFORM="BOOL_2D_UNIFORM",r.BOOL_3D_UNIFORM="BOOL_3D_UNIFORM",r.BOOL_4D_UNIFORM="BOOL_4D_UNIFORM",r.DEFAULT_PROGRAM_NAME="DEFAULT",r.SEGMENT_PROGRAM_NAME="SEGMENT",r.LAYER_POINTS_PROGRAM_NAME="LAYER_POINTS",r.LAYER_LINES_PROGRAM_NAME="LAYER_LINES",r.LAYER_VECTOR_FIELD_PROGRAM_NAME="LAYER_VECTOR_FIELD",r.LAYER_MESH_PROGRAM_NAME="LAYER_MESH",r.GPUIO_VS_WRAP_X="GPUIO_VS_WRAP_X",r.GPUIO_VS_WRAP_Y="GPUIO_VS_WRAP_Y",r.GPUIO_VS_INDEXED_POSITIONS="GPUIO_VS_INDEXED_POSITIONS",r.GPUIO_VS_UV_ATTRIBUTE="GPUIO_VS_UV_ATTRIBUTE",r.GPUIO_VS_NORMAL_ATTRIBUTE="GPUIO_VS_NORMAL_ATTRIBUTE",r.GPUIO_VS_POSITION_W_ACCUM="GPUIO_VS_POSITION_W_ACCUM";var f=function(s){throw new Error(s)};r.DEFAULT_ERROR_CALLBACK=f,r.DEFAULT_CIRCLE_NUM_SEGMENTS=18,r.MIN_UNSIGNED_BYTE=0,r.MAX_UNSIGNED_BYTE=Math.pow(2,8)-1,r.MIN_BYTE=-Math.pow(2,7),r.MAX_BYTE=Math.pow(2,7)-1,r.MIN_UNSIGNED_SHORT=0,r.MAX_UNSIGNED_SHORT=Math.pow(2,16)-1,r.MIN_SHORT=-Math.pow(2,15),r.MAX_SHORT=Math.pow(2,15)-1,r.MIN_UNSIGNED_INT=0,r.MAX_UNSIGNED_INT=Math.pow(2,32)-1,r.MIN_INT=-Math.pow(2,31),r.MAX_INT=Math.pow(2,31)-1,r.MIN_HALF_FLOAT_INT=-2048,r.MAX_HALF_FLOAT_INT=2048,r.MIN_FLOAT_INT=-16777216,r.MAX_FLOAT_INT=16777216,r.GPUIO_INT_PRECISION="GPUIO_INT_PRECISION",r.GPUIO_FLOAT_PRECISION="GPUIO_FLOAT_PRECISION",r.BOUNDARY_TOP="BOUNDARY_TOP",r.BOUNDARY_BOTTOM="BOUNDARY_BOTTOM",r.BOUNDARY_LEFT="BOUNDARY_LEFT",r.BOUNDARY_RIGHT="BOUNDARY_RIGHT"},690:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.glslComponentSelectionForNumComponents=r.glslPrefixForType=r.glslTypeForType=r.arrayConstructorForType=r.uniformTypeForType=r.intForPrecision=void 0;var s=f(601);function h(y){if(y===s.PRECISION_HIGH_P)return 2;if(y===s.PRECISION_MEDIUM_P)return 1;if(y===s.PRECISION_LOW_P)return 0;throw new Error("Unknown shader precision value: ".concat(JSON.stringify(y),"."))}r.intForPrecision=h;function l(y,m){switch(y){case s.HALF_FLOAT:case s.FLOAT:return s.FLOAT;case s.UNSIGNED_BYTE:case s.UNSIGNED_SHORT:case s.UNSIGNED_INT:return m===s.GLSL1?s.INT:s.UINT;case s.BYTE:case s.SHORT:case s.INT:return s.INT;default:throw new Error("Invalid type: ".concat(y," passed to glslKeyForType."))}}r.uniformTypeForType=l;function d(y,m){switch(m===void 0&&(m=!1),y){case s.HALF_FLOAT:return m?Float32Array:Uint16Array;case s.FLOAT:return Float32Array;case s.UNSIGNED_BYTE:return Uint8Array;case s.BYTE:return Int8Array;case s.UNSIGNED_SHORT:return Uint16Array;case s.SHORT:return Int16Array;case s.UNSIGNED_INT:return Uint32Array;case s.INT:return Int32Array;default:throw new Error('Unsupported type: "'.concat(y,'".'))}}r.arrayConstructorForType=d;function S(y,m){switch(y){case s.HALF_FLOAT:case s.FLOAT:return m===1?"float":"vec".concat(m);case s.UNSIGNED_BYTE:case s.UNSIGNED_SHORT:case s.UNSIGNED_INT:return m===1?"uint":"uvec".concat(m);case s.BYTE:case s.SHORT:case s.INT:return m===1?"int":"ivec".concat(m)}throw new Error("Invalid type: ".concat(y," passed to glslTypeForType."))}r.glslTypeForType=S;function p(y){switch(y){case s.HALF_FLOAT:case s.FLOAT:return"";case s.UNSIGNED_BYTE:case s.UNSIGNED_SHORT:case s.UNSIGNED_INT:return"u";case s.BYTE:case s.SHORT:case s.INT:return"i"}throw new Error("Invalid type: ".concat(y," passed to glslPrefixForType."))}r.glslPrefixForType=p;function C(y){switch(y){case 1:return".x";case 2:return".xy";case 3:return".xyz";case 4:return""}throw new Error("Invalid numComponents: ".concat(y," passed to glslComponentSelectionForNumComponents."))}r.glslComponentSelectionForNumComponents=C},581:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getExtension=r.OES_STANDARD_DERIVATIVES=r.OES_ELEMENT_INDEX_UINT=r.OES_VERTEX_ARRAY_OBJECT=r.EXT_COLOR_BUFFER_HALF_FLOAT=r.EXT_COLOR_BUFFER_FLOAT=r.WEBGL_DEPTH_TEXTURE=r.OES_TEXTURE_HAlF_FLOAT_LINEAR=r.OES_TEXTURE_FLOAT_LINEAR=r.OES_TEXTURE_HALF_FLOAT=r.OES_TEXTURE_FLOAT=void 0,r.OES_TEXTURE_FLOAT="OES_texture_float",r.OES_TEXTURE_HALF_FLOAT="OES_texture_half_float",r.OES_TEXTURE_FLOAT_LINEAR="OES_texture_float_linear",r.OES_TEXTURE_HAlF_FLOAT_LINEAR="OES_texture_half_float_linear",r.WEBGL_DEPTH_TEXTURE="WEBGL_depth_texture",r.EXT_COLOR_BUFFER_FLOAT="EXT_color_buffer_float",r.EXT_COLOR_BUFFER_HALF_FLOAT="EXT_color_buffer_half_float",r.OES_VERTEX_ARRAY_OBJECT="OES_vertex_array_object",r.OES_ELEMENT_INDEX_UINT="OES_element_index_uint",r.OES_STANDARD_DERIVATIVES="OES_standard_derivatives";function f(s,h,l){if(l===void 0&&(l=!1),s._extensions[h]!==void 0)return s._extensions[h];var d=s.gl,S=s._errorCallback,p=s._extensions;s.verboseLogging;var C;try{C=d.getExtension(h)}catch{}return C?(p[h]=C,s.verboseLogging&&console.log("Loaded extension: ".concat(h,"."))):(p[h]=!1,s.verboseLogging&&console.log("Unsupported ".concat(l?"optional ":"","extension: ").concat(h,"."))),!C&&!l&&S("Required extension unsupported by this device / browser: ".concat(h,".")),C}r.getExtension=f},798:function(c,r){var f=this&&this.__spreadArray||function(p,C,y){if(y||arguments.length===2)for(var m=0,D=C.length,P;m<D;m++)(P||!(m in C))&&(P||(P=Array.prototype.slice.call(C,0,m)),P[m]=C[m]);return p.concat(P||Array.prototype.slice.call(C))};Object.defineProperty(r,"__esModule",{value:!0}),r.disposeFramebuffers=r.bindFrameBuffer=void 0;var s=new WeakMap,h=new WeakMap;function l(p,C,y,m){var D=p.gl,P=p._errorCallback,M=p.isWebGL2,w=D.createFramebuffer();if(!w){P('Could not init framebuffer for GPULayer "'.concat(C.name,'": ').concat(D.getError(),"."));return}if(D.bindFramebuffer(D.FRAMEBUFFER,w),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,y,0),m){if(!M)throw new Error("WebGL1 does not support drawing to multiple outputs.");if(m.length>15)throw new Error("Can't draw to more than 16 outputs.");for(var T=0,A=m.length;T<A;T++)D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+T+1,D.TEXTURE_2D,m[T],0)}var L=D.checkFramebufferStatus(D.FRAMEBUFFER);return L!==D.FRAMEBUFFER_COMPLETE&&P('Invalid status for framebuffer for GPULayer "'.concat(C.name,'": ').concat(L,".")),w}function d(p,C,y,m){var D=p.gl,P=m?f([y],m,!0):y,M=s.get(P);if(!M){if(M=l(p,C,y,m),!M)return;s.set(P,M);var w=h.get(y)||[];if(w.push(M),h.set(y,w),m)for(var T=0,A=m.length;T<A;T++){var L=m[T],x=h.get(L)||[];x.push(M),h.set(L,x)}}D.bindFramebuffer(D.FRAMEBUFFER,M)}r.bindFrameBuffer=d;function S(p,C){p.bindFramebuffer(p.FRAMEBUFFER,null);var y=h.get(C);if(y)for(var m=0,D=y.length;m<D;m++)p.deleteFramebuffer(y[m]);h.delete(C)}r.disposeFramebuffers=S},724:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.PRECISION_SOURCE=void 0;var s=f(601),h=f(690);r.PRECISION_SOURCE=`
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
}`},607:function(c,r,f){var s=this&&this.__assign||function(){return s=Object.assign||function(K){for(var $,z=1,Q=arguments.length;z<Q;z++){$=arguments[z];for(var oe in $)Object.prototype.hasOwnProperty.call($,oe)&&(K[oe]=$[oe])}return K},s.apply(this,arguments)},h=this&&this.__createBinding||(Object.create?function(K,$,z,Q){Q===void 0&&(Q=z);var oe=Object.getOwnPropertyDescriptor($,z);(!oe||("get"in oe?!$.__esModule:oe.writable||oe.configurable))&&(oe={enumerable:!0,get:function(){return $[z]}}),Object.defineProperty(K,Q,oe)}:function(K,$,z,Q){Q===void 0&&(Q=z),K[Q]=$[z]}),l=this&&this.__exportStar||function(K,$){for(var z in K)z!=="default"&&!Object.prototype.hasOwnProperty.call($,z)&&h($,K,z)};Object.defineProperty(r,"__esModule",{value:!0}),r._testing=r.renderRGBProgram=r.zeroProgram=r.setColorProgram=r.setValueProgram=r.renderSignedAmplitudeProgram=r.renderAmplitudeProgram=r.multiplyValueProgram=r.addValueProgram=r.addLayersProgram=r.copyProgram=r.getFragmentShaderMediumpPrecision=r.getVertexShaderMediumpPrecision=r.isHighpSupportedInFragmentShader=r.isHighpSupportedInVertexShader=r.isWebGL2Supported=r.isWebGL2=r.GPUIndexBuffer=r.GPUProgram=r.GPULayer=r.GPUComposer=void 0;var d=f(593),S=f(484);Object.defineProperty(r,"GPUComposer",{enumerable:!0,get:function(){return S.GPUComposer}});var p=f(355);Object.defineProperty(r,"GPULayer",{enumerable:!0,get:function(){return p.GPULayer}});var C=f(191),y=f(664);Object.defineProperty(r,"GPUProgram",{enumerable:!0,get:function(){return y.GPUProgram}});var m=f(981);Object.defineProperty(r,"GPUIndexBuffer",{enumerable:!0,get:function(){return m.GPUIndexBuffer}});var D=f(707),P=f(126),M=f(581),w=f(360),T=f(690),A=f(579),L=s(s(s(s(s(s({isFloatType:d.isFloatType,isUnsignedIntType:d.isUnsignedIntType,isSignedIntType:d.isSignedIntType,isIntType:d.isIntType,makeShaderHeader:d.makeShaderHeader,compileShader:d.compileShader,initGLProgram:d.initGLProgram,readyToRead:d.readyToRead,preprocessVertexShader:d.preprocessVertexShader,preprocessFragmentShader:d.preprocessFragmentShader,isPowerOf2:d.isPowerOf2,initSequentialFloatArray:d.initSequentialFloatArray,uniformInternalTypeForValue:d.uniformInternalTypeForValue,indexOfLayerInArray:d.indexOfLayerInArray,readPixelsAsync:d.readPixelsAsync},M),P),D),C),w),T);r._testing=L;var x=d.isWebGL2,I=d.isWebGL2Supported,_=d.isHighpSupportedInVertexShader,E=d.isHighpSupportedInFragmentShader,v=d.getVertexShaderMediumpPrecision,u=d.getFragmentShaderMediumpPrecision;r.isWebGL2=x,r.isWebGL2Supported=I,r.isHighpSupportedInVertexShader=_,r.isHighpSupportedInFragmentShader=E,r.getVertexShaderMediumpPrecision=v,r.getFragmentShaderMediumpPrecision=u;var g=A.copyProgram,b=A.addLayersProgram,R=A.addValueProgram,U=A.multiplyValueProgram,F=A.setValueProgram,X=A.setColorProgram,O=A.zeroProgram,N=A.renderRGBProgram,G=A.renderAmplitudeProgram,H=A.renderSignedAmplitudeProgram;r.copyProgram=g,r.addLayersProgram=b,r.addValueProgram=R,r.multiplyValueProgram=U,r.setValueProgram=F,r.setColorProgram=X,r.zeroProgram=O,r.renderRGBProgram=N,r.renderAmplitudeProgram=G,r.renderSignedAmplitudeProgram=H,l(f(601),r)},360:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.fragmentShaderPolyfills=r.GLSL1Polyfills=r.texturePolyfill=r.SAMPLER2D_DIMENSIONS_UNIFORM=r.SAMPLER2D_HALF_PX_UNIFORM=r.SAMPLER2D_FILTER=r.SAMPLER2D_CAST_INT=r.SAMPLER2D_WRAP_Y=r.SAMPLER2D_WRAP_X=void 0;var s=f(601),h=f(126);r.SAMPLER2D_WRAP_X="GPUIO_WRAP_X",r.SAMPLER2D_WRAP_Y="GPUIO_WRAP_Y",r.SAMPLER2D_CAST_INT="GPUIO_CAST_INT",r.SAMPLER2D_FILTER="GPUIO_FILTER",r.SAMPLER2D_HALF_PX_UNIFORM="u_gpuio_half_px",r.SAMPLER2D_DIMENSIONS_UNIFORM="u_gpuio_dimensions";function l(O){var N=O.match(/\btexture\(/g);if(!N||N.length===0)return{shaderSource:O,samplerUniforms:[]};var G=(0,h.getSampler2DsInProgram)(O);if(G.length===0)return{shaderSource:O,samplerUniforms:G};G.forEach(function(Z,le){var k=new RegExp("\\btexture(2D)?\\(\\s?".concat(Z,"\\b"),"gs");O=O.replace(k,"GPUIO_TEXTURE_POLYFILL".concat(le,"(").concat(Z))});var H=O.match(/\btexture(2D)?\(/g);H?.length&&console.warn("Fragment shader polyfill has missed some calls to texture().",O);for(var K={},$=0;$<G.length;$++)K["".concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat($)]="vec2",K["".concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat($)]="vec2";function z(Z,le,k){k===void 0&&(k="");var q=k===""?"":")",te=k===""?le:"i";return`
`.concat(te,"vec4 GPUIO_TEXTURE_POLYFILL").concat(Z,"(const ").concat(le,`sampler2D sampler, const vec2 uv) {
	`).concat(le===""?"#if (".concat(r.SAMPLER2D_FILTER).concat(Z," == 0)"):"",`
		#if (`).concat(r.SAMPLER2D_WRAP_X).concat(Z,` == 0)
			#if (`).concat(r.SAMPLER2D_WRAP_Y).concat(Z,` == 0)
				return `).concat(k,"texture(sampler, uv)").concat(q,`;
			#else
				return `).concat(k,"GPUIO_TEXTURE_WRAP_CLAMP_REPEAT(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(Z,")").concat(q,`;
			#endif
		#else
			#if (`).concat(r.SAMPLER2D_WRAP_Y).concat(Z,` == 0)
				return `).concat(k,"GPUIO_TEXTURE_WRAP_REPEAT_CLAMP(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(Z,")").concat(q,`;
			#else
				return `).concat(k,"GPUIO_TEXTURE_WRAP_REPEAT_REPEAT(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(Z,")").concat(q,`;
			#endif
		#endif
	`).concat(le===""?`#else
		#if (`.concat(r.SAMPLER2D_WRAP_X).concat(Z,` == 0)
			#if (`).concat(r.SAMPLER2D_WRAP_Y).concat(Z,` == 0)
				return `).concat(k,"GPUIO_TEXTURE_BILINEAR_INTERP(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(Z,", ").concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(Z,")").concat(q,`;
			#else
				return `).concat(k,"GPUIO_TEXTURE_BILINEAR_INTERP_WRAP_CLAMP_REPEAT(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(Z,", ").concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(Z,")").concat(q,`;
			#endif
		#else
			#if (`).concat(r.SAMPLER2D_WRAP_Y).concat(Z,` == 0)
				return `).concat(k,"GPUIO_TEXTURE_BILINEAR_INTERP_WRAP_REPEAT_CLAMP(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(Z,", ").concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(Z,")").concat(q,`;
			#else
				return `).concat(k,"GPUIO_TEXTURE_BILINEAR_INTERP_WRAP_REPEAT_REPEAT(sampler, uv, ").concat(r.SAMPLER2D_HALF_PX_UNIFORM).concat(Z,", ").concat(r.SAMPLER2D_DIMENSIONS_UNIFORM).concat(Z,")").concat(q,`;
			#endif
		#endif
	#endif`):"",`
}
`)}function Q(Z){return`
`.concat(Z,"vec4 GPUIO_TEXTURE_WRAP_REPEAT_REPEAT(const ").concat(Z,`sampler2D sampler, const vec2 uv, const vec2 halfPx) {
	return texture(sampler, GPUIO_WRAP_REPEAT_UV(uv));
}
`).concat(Z,"vec4 GPUIO_TEXTURE_WRAP_REPEAT_CLAMP(const ").concat(Z,`sampler2D sampler, vec2 uv, const vec2 halfPx) {
	uv.x = GPUIO_WRAP_REPEAT_UV_COORD(uv.x);
	// uv.y = GPUIO_WRAP_CLAMP_UV_COORD(uv.y, halfPx.y);
	return texture(sampler, uv);
}
`).concat(Z,"vec4 GPUIO_TEXTURE_WRAP_CLAMP_REPEAT(const ").concat(Z,`sampler2D sampler, vec2 uv, const vec2 halfPx) {
	// uv.x = GPUIO_WRAP_CLAMP_UV_COORD(uv.x, halfPx.x);
	uv.y = GPUIO_WRAP_REPEAT_UV_COORD(uv.y);
	return texture(sampler, uv);
}
`)}function oe(Z){var le=Z?"GPUIO_TEXTURE_WRAP_".concat(Z):"texture",k=Z?", halfPx":"";return`
vec4 GPUIO_TEXTURE_BILINEAR_INTERP`.concat(Z?"_WRAP_".concat(Z):"",`(const sampler2D sampler, const vec2 uv, const vec2 halfPx, const vec2 dimensions) {
	vec2 pxFraction = fract(uv * dimensions);
	vec2 offset = halfPx - vec2(0.00001, 0.00001) * max(
			step(abs(pxFraction.x - 0.5), 0.001),
			step(abs(pxFraction.y - 0.5), 0.001)
		);
	vec2 baseUV = uv - offset;
	vec2 diagOffset = vec2(offset.x, -offset.y);
	vec4 minmin = `).concat(le,"(sampler, baseUV").concat(k,`);
	vec4 maxmin = `).concat(le,"(sampler, uv + diagOffset").concat(k,`);
	vec4 minmax = `).concat(le,"(sampler, uv - diagOffset").concat(k,`);
	vec4 maxmax = `).concat(le,"(sampler, uv + offset").concat(k,`);
	vec2 t = fract(baseUV * dimensions);
	vec4 yMin = mix(minmin, maxmin, t.x);
	vec4 yMax = mix(minmax, maxmax, t.x);
	return mix(yMin, yMax, t.y);
}
`)}return O=`
`.concat(Object.keys(K).map(function(Z){return"uniform ".concat(K[Z]," ").concat(Z,";")}).join(`
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

`).concat(Q(""),`
#if (__VERSION__ == 300)
`).concat(["u","i"].map(function(Z){return Q(Z)}).join(`
`),`
#endif

`).concat([null,"REPEAT_REPEAT","REPEAT_CLAMP","CLAMP_REPEAT"].map(function(Z){return oe(Z)}).join(`
`),`

`).concat(G.map(function(Z,le){return"#ifndef ".concat(r.SAMPLER2D_CAST_INT).concat(le,`
	`).concat(z(le,""),`
#endif`)}).join(`
`),`
#if (__VERSION__ == 300)
`).concat(["u","i"].map(function(Z){return G.map(function(le,k){return z(k,Z)}).join(`
`)}).join(`
`),`
#else
	`).concat(G.map(function(Z,le){return"#ifdef ".concat(r.SAMPLER2D_CAST_INT).concat(le,`
	`).concat(z(le,"","ivec4("),`
#endif`)}).join(`
`),`
#endif

`).concat(O),{shaderSource:O,samplerUniforms:G}}r.texturePolyfill=l;function d(O){switch(O){case"int":case"uint":return"float";case"ivec2":case"uvec2":return"vec2";case"ivec3":case"uvec3":return"vec3";case"ivec4":case"uvec4":return"vec4"}throw new Error("Unknown type ".concat(O,"."))}function S(O){switch(O){case"bool":return"float";case"bvec2":return"vec2";case"bvec3":return"vec3";case"bvec4":return"vec4"}throw new Error("Unknown type ".concat(O,"."))}function p(O){return"".concat(O," abs(const ").concat(O," a) { return ").concat(O,"(abs(").concat(d(O),"(a))); }")}function C(O){return"".concat(O," sign(const ").concat(O," a) { return ").concat(O,"(sign(").concat(d(O),"(a))); }")}function y(O){return"".concat(O," trunc(const ").concat(O," a) { return round(a - fract(a) * sign(a)); }")}function m(O){return"".concat(O," round(const ").concat(O," a) { return floor(a + 0.5); }")}function D(O){return"".concat(O," roundEven(const ").concat(O," a) { return 2.0 * round(a / 2.0); }")}function P(O,N){return"".concat(O," min(const ").concat(O," a, const ").concat(N," b) { return ").concat(O,"(min(").concat(d(O),"(a), ").concat(d(N),"(b))); }")}function M(O,N){return"".concat(O," max(const ").concat(O," a, const ").concat(N," b) { return ").concat(O,"(max(").concat(d(O),"(a), ").concat(d(N),"(b))); }")}function w(O,N){return"".concat(O," clamp(const ").concat(O," a, const ").concat(N," min, const ").concat(N," max) { return ").concat(O,"(clamp(").concat(d(O),"(a), ").concat(d(N),"(min), ").concat(d(N),"(max))); }")}function T(O,N){return"".concat(O," mix(const ").concat(O," a, const ").concat(O," b, const ").concat(N," c) { return mix(a, b, ").concat(S(N),"(c)); }")}function A(O,N,G){return"a[".concat(O,"][").concat(N,"] * a[").concat((O+1)%G,"][").concat((N+1)%G,"] - a[").concat((O+1)%G,"][").concat(N,"] * a[").concat(O,"][").concat((N+1)%G,"]")}function L(O,N,G){return[0,1,2].map(function(H){return"a[".concat(O,"][").concat((N+H)%G,"] * (").concat(A((O+1)%G,(N+1+H)%G,G),")")}).join(" + ")}function x(O,N,G){return[0,1,2,3].map(function(H){return"a[".concat(O,"][").concat((N+H)%G,"] * (").concat(L((O+1)%G,(N+1+H)%G,G),")")}).join(" + ")}function I(O){var N="";return O.includes("abs")&&(N+=`


`.concat(p("int"),`
`).concat(p("ivec2"),`
`).concat(p("ivec3"),`
`).concat(p("ivec4"),`
`)),O.includes("sign")&&(N+=`


`.concat(C("int"),`
`).concat(C("ivec2"),`
`).concat(C("ivec3"),`
`).concat(C("ivec4"),`
`)),O.includes("round")&&(N+=`


`.concat(m("float"),`
`).concat(m("vec2"),`
`).concat(m("vec3"),`
`).concat(m("vec4"),`
`)),O.includes("trunc")&&(N+=`


`.concat(y("float"),`
`).concat(y("vec2"),`
`).concat(y("vec3"),`
`).concat(y("vec4"),`
`)),O.includes("roundEven")&&(N+=`


`.concat(D("float"),`
`).concat(D("vec2"),`
`).concat(D("vec3"),`
`).concat(D("vec4"),`
`)),O.includes("min")&&(N+=`


`.concat(P("int","int"),`
`).concat(P("ivec2","ivec2"),`
`).concat(P("ivec3","ivec3"),`
`).concat(P("ivec4","ivec4"),`
`).concat(P("ivec2","int"),`
`).concat(P("ivec3","int"),`
`).concat(P("ivec4","int"),`
`)),O.includes("max")&&(N+=`


`.concat(M("int","int"),`
`).concat(M("ivec2","ivec2"),`
`).concat(M("ivec3","ivec3"),`
`).concat(M("ivec4","ivec4"),`
`).concat(M("ivec2","int"),`
`).concat(M("ivec3","int"),`
`).concat(M("ivec4","int"),`
`)),O.includes("clamp")&&(N+=`


`.concat(w("int","int"),`
`).concat(w("ivec2","ivec2"),`
`).concat(w("ivec3","ivec3"),`
`).concat(w("ivec4","ivec4"),`
`).concat(w("ivec2","int"),`
`).concat(w("ivec3","int"),`
`).concat(w("ivec4","int"),`
`)),O.includes("mix")&&(N+=`


`.concat(T("float","bool"),`
`).concat(T("vec2","bvec2"),`
`).concat(T("vec3","bvec3"),`
`).concat(T("vec4","bvec4"),`
`)),O.includes("outerProduct")&&(N+=`


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
`),O.includes("transpose")&&(N+=`


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
`),O.includes("determinant")&&(N+=`


float determinant(const mat2 a) {
	return `.concat(A(0,0,2),`;
}
float determinant(const mat3 a) {
	return `).concat(L(0,0,3),`;
}
float determinant(const mat4 a) {
	return `).concat(x(0,0,4),`;
}
`)),O.includes("sinh")&&(N+=`


float sinh(const float x) {
	return (pow(`.concat(Math.E,", x) - pow(").concat(Math.E,`, -x)) / 2.0;
}
`)),O.includes("cosh")&&(N+=`


float cosh(const float x) {
	return (pow(`.concat(Math.E,", x) + pow(").concat(Math.E,`, -x)) / 2.0; 
}
`)),O.includes("tanh")&&(N+=`


float tanh(const float x) {
	float e = exp(2.0 * x);
	return (e - 1.0) / (e + 1.0);
}
`),O.includes("asinh")&&(N+=`


float asinh(const float x) {
	return log(x + sqrt(x * x + 1.0));
}
`),O.includes("asinh")&&(N+=`


float acosh(const float x) {
	return log(x + sqrt(x * x - 1.0));
}
`),O.includes("asinh")&&(N+=`


float atanh(float x) {
	x = (x + 1.0) / (x - 1.0);
	return 0.5 * log(x * sign(x));
}
`),N}r.GLSL1Polyfills=I;function _(O,N){return"vec2 index1DToUV(const ".concat(O," index1D, const ").concat(N,` dimensions) {
	`).concat(O," width = ").concat(O,`(dimensions.x);
	`).concat(O,` y = index1D / width;
	`).concat(O,` x = index1D - width * y;
	float u = (float(x) + 0.5) / float(dimensions.x);
	float v = (float(y) + 0.5) / float(dimensions.y);
	return vec2(u, v);
}`)}function E(O,N){return"".concat(O," modi(const ").concat(O," x, const ").concat(N," y) { return x - y * (x / y); }")}function v(O,N){return"".concat(N," stepi(const ").concat(O," x, const ").concat(N," y) { return ").concat(N,"(step(").concat(d(O),"(x), ").concat(d(N),"(y))); }")}function u(O,N){return"".concat(O," bitshiftLeft(const ").concat(O," a, const ").concat(N,` b) {
	#if (__VERSION__ == 300)
		return a << b;
	#else
		return a * `).concat(O,"(pow(").concat(d(N),"(2.0), ").concat(d(N),`(b)));
	#endif
}`)}function g(O,N){return"".concat(O," bitshiftRight(const ").concat(O," a, const ").concat(N,` b) {
	#if (__VERSION__ == 300)
		return a >> b;
	#else
		return `).concat(O,"(round(").concat(d(O),"(a) / pow(").concat(d(N),"(2.0), ").concat(d(N),`(b))));
	#endif
}`)}function b(O){return"int bitwiseOr".concat(O===32?"":O,`(int a, int b) {
	#if (__VERSION__ == 300)
		return a | b;
	#else
		int result = 0;
		int n = 1;
		
		for (int i = 0; i < `).concat(O,`; i++) {
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
}`)}function R(O){return"int bitwiseXOR".concat(O===32?"":O,`(int a, int b) {
	#if (__VERSION__ == 300)
		return a ^ b;
	#else
		int result = 0;
		int n = 1;
		
		for (int i = 0; i < `).concat(O,`; i++) {
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
}`)}function U(O){return"int bitwiseAnd".concat(O===32?"":O,`(int a, int b) {
	#if (__VERSION__ == 300)
		return a & b;
	#else
		int result = 0;
		int n = 1;
		for (int i = 0; i < `).concat(O,`; i++) {
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
}`)}function F(O){return"int bitwiseNot".concat(O===32?"":O,`(int a) {
	#if (__VERSION__ == 300)
		return ~a;
	#else
		int result = 0;
		int n = 1;

		for (int i = 0; i < `).concat(O,`; i++) {
			if (modi(a, 2) == 0) {
				result += n;
			}
			a = a / 2;
			n = n * 2;
		}
		return result;
	#endif
}`)}function X(O,N){var G="";return O.includes("index1DToUV")&&(G+=`

`.concat(_("int","ivec2"),`
`).concat(_("int","vec2"),`
#if (__VERSION__ == 300)
`).concat(_("int","uvec2"),`
`).concat(_("uint","uvec2"),`
`).concat(_("uint","ivec2"),`
`).concat(_("uint","vec2"),`
#endif
`)),(O.includes("modi")||N===s.GLSL1&&O.includes("bitwise"))&&(G+=`

`.concat(E("int","int"),`
`).concat(E("ivec2","ivec2"),`
`).concat(E("ivec3","ivec3"),`
`).concat(E("ivec4","ivec4"),`
`).concat(E("ivec2","int"),`
`).concat(E("ivec3","int"),`
`).concat(E("ivec4","int"),`
#if (__VERSION__ == 300)
`).concat(E("uint","uint"),`
`).concat(E("uvec2","uvec2"),`
`).concat(E("uvec3","uvec3"),`
`).concat(E("uvec4","uvec4"),`
`).concat(E("uvec2","uint"),`
`).concat(E("uvec3","uint"),`
`).concat(E("uvec4","uint"),`
#endif
`)),O.includes("stepi")&&(G+=`

`.concat(v("int","int"),`
`).concat(v("ivec2","ivec2"),`
`).concat(v("ivec3","ivec3"),`
`).concat(v("ivec4","ivec4"),`
`).concat(v("int","ivec2"),`
`).concat(v("int","ivec3"),`
`).concat(v("int","ivec4"),`
#if (__VERSION__ == 300)
`).concat(v("uint","uint"),`
`).concat(v("uvec2","uvec2"),`
`).concat(v("uvec3","uvec3"),`
`).concat(v("uvec4","uvec4"),`
`).concat(v("uint","uvec2"),`
`).concat(v("uint","uvec3"),`
`).concat(v("uint","uvec4"),`
#endif
`)),O.includes("bitshiftLeft")&&(G+=`

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
`)),O.includes("bitshiftRight")&&(G+=`

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
`)),O.includes("bitwiseOr")&&(G+=`

`.concat(b(8),`
`).concat(b(16),`
`).concat(b(32),`
#if (__VERSION__ == 300)
`).concat([8,16,""].map(function(H){return`
uint bitwiseOr`.concat(H,`(uint a, uint b) {
	return uint(bitwiseOr`).concat(H,`(int(a), int(b)));
}`)}).join(`
`),`
#endif
`)),O.includes("bitwiseXOR")&&(G+=`

`.concat(R(8),`
`).concat(R(16),`
`).concat(R(32),`
#if (__VERSION__ == 300)
`).concat([8,16,""].map(function(H){return`
uint bitwiseXOR`.concat(H,`(uint a, uint b) {
	return uint(bitwiseXOR`).concat(H,`(int(a), int(b)));
}`)}).join(`
`),`
#endif
`)),O.includes("bitwiseAnd")&&(G+=`

`.concat(U(8),`
`).concat(U(16),`
`).concat(U(32),`
#if (__VERSION__ == 300)
`).concat([8,16,""].map(function(H){return`
uint bitwiseAnd`.concat(H,`(uint a, uint b) {
	return uint(bitwiseAnd`).concat(H,`(int(a), int(b)));
}`)}).join(`
`),`
#endif
`)),O.includes("bitwiseNot")&&(G+=`

`.concat(F(8),`
`).concat(F(16),`
`).concat(F(32),`
#if (__VERSION__ == 300)
`).concat([8,16,""].map(function(H){return`
uint bitwiseNot`.concat(H,`(uint a) {
	return uint(bitwiseNot`).concat(H,`(int(a)));
}`)}).join(`
`),`
#endif
`)),G}r.fragmentShaderPolyfills=X},126:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getSampler2DsInProgram=r.stripComments=r.stripPrecision=r.stripVersion=r.highpToMediump=r.glsl1Uint=r.glsl1Sampler2D=r.glsl1Texture=r.checkFragmentShaderForFragColor=r.glsl1FragmentOut=r.getFragmentOuts=r.glsl1FragmentIn=r.glsl1VertexOut=r.castVaryingToFloat=r.glsl1VertexIn=void 0;var s=f(601);function h(v){return v.replace(/\bin\b/g,"attribute")}r.glsl1VertexIn=h;function l(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function d(v,u,g){var b=new RegExp("\\b".concat(l(u),"\\s*=\\s*\\S[^;]*;"),"sg"),R=v.match(b);if(R)for(var U=0;U<R.length;U++){var F=new RegExp("\\b".concat(l(u),"\\s*=\\s*(\\S[^;]*);"),"s"),X=R[U].match(F);if(X&&X[1]){var O=new RegExp("\\b".concat(l(u),"\\s*=\\s*").concat(l(X[1]),"\\s*;"),"s");v=v.replace(O,"".concat(u," = ").concat(g,"(").concat(X[1],");"))}else console.warn('Could not find value in expression: "'.concat(R[U],'"'))}else console.warn("No assignment found for shader variable ".concat(u,"."));return v}function S(v,u,g){var b=new RegExp("".concat(u,"\\s+\\S[^;]*;"),"g"),R=v.match(b);if(R){var U=new RegExp("".concat(u,"\\b"),"g");v=v.replace(U,"varying ".concat(g));for(var F=0;F<R.length;F++){var X=new RegExp("".concat(u,"\\s+(\\S[^;]*);")),O=R[F].match(X);O&&O[2]?v=d(v,O[2],g):console.warn('Could not find variable name in expression: "'.concat(R[F],'"'))}}return v}function p(v){return v=S(v,"\\bvarying\\s+(u)?int","float"),v=S(v,"\\bvarying\\s+(i|u)vec2","vec2"),v=S(v,"\\bvarying\\s+(i|u)vec3","vec3"),v=S(v,"\\bvarying\\s+(i|u)vec4","vec4"),v}r.castVaryingToFloat=p;function C(v){return v=v.replace(/(\bflat\s+)?\bout\b/g,"varying"),v=p(v),v}r.glsl1VertexOut=C;function y(v){return v=v.replace(/(\bflat\s+)?\bin\b/g,"varying"),v=p(v),v}r.glsl1FragmentIn=y;function m(v,u){for(var g={},b=0;;){var R=v.match(/\b(layout\s*\(\s*location\s*=\s*([0-9]+)\s*\)\s*)?out\s+((lowp|mediump|highp)\s+)?((float|int|uint|([iu]?vec[234]))\s+)?([_$a-zA-Z0-9]+)\s*;/);if(!R){if(Object.keys(g).length===0)return[];for(var U=Object.keys(g),F=U.length,X=new Array(b).fill(void 0),O=0;O<F;O++){var N=U[O],G=g[N],H=G.location,K=G.type;if(X[H]!==void 0)throw new Error('Must be exactly one out declaration per layout location in GPUProgram "'.concat(u,'", conflicting declarations found at location ').concat(H,"."));X[H]={name:N,type:K}}if(U.length!==b+1)throw new Error('Must be exactly one out declaration per layout location in GPUProgram "'.concat(u,'", layout locations must be sequential (no missing location numbers) starting from 0.'));for(var O=0;O<=b;O++)if(X[O]===void 0)throw new Error("Missing out declaration at location ".concat(O,' in GPUProgram "').concat(u,'", layout locations must be sequential (no missing location numbers) starting from 0.'));return X}var $=R[8],z=parseInt(R[2]||"0"),Q=R[6];if(!Q)throw new Error('No type found for out declaration "'.concat(R[0],'" for GPUProgram "').concat(u,'".'));if(!$)throw new Error('No variable name found for out declaration "'.concat(R[0],'" for GPUProgram "').concat(u,'".'));if(g[$]){if(g[$].location!==z)throw new Error('All out declarations for variable "'.concat($,'" must have same location in GPUProgram "').concat(u,'".'))}else z>b&&(b=z),g[$]={location:z,type:Q};v=v.replace(R[0],"")}}r.getFragmentOuts=m;function D(v,u){var g=m(v,u);if(g.length===0)return[v];v=v.replace(/\blayout\s*\(\s*location\s*=\s*([0-9]+)\s*\)\s*/g,"");for(var b=[],R=0,U=g.length;R<U;R++){var F=g[R],X=F.type,O=F.name,N=new RegExp("\\bout\\s+((lowp|mediump|highp)\\s+)?(float|int|uint|([iu]?vec[234]))\\s+".concat(O,"\\s*;"),"g"),G=v.replace(N,"");G=G.replace(/\bout\b/g,"");for(var H=!1,K=new RegExp("\\b".concat(O,"\\s*=\\s*(\\S.*?);"),"s");;){var $=G.match(K);if($&&$[1]){H=!0;var z="";switch(X){case"float":case"int":case"uint":z=", 0, 0, 0";break;case"vec2":case"ivec2":case"uvec2":z=", 0, 0";break;case"vec3":case"ivec3":case"uvec3":z=", 0";break}G=G.replace(K,"gl_FragColor = vec4(".concat($[1]).concat(z,");"))}else{if(!H)throw new Error('No assignment found for out declaration in GPUProgram "'.concat(u,'".'));break}}b.push(G)}return b}r.glsl1FragmentOut=D;function P(v){return!!v.match(/\bgl_FragColor\b/)}function M(v,u,g){var b=P(v);if(u===s.GLSL3&&b)throw new Error('Found "gl_FragColor" declaration in fragment shader for GPUProgram "'.concat(g,'": either init GPUComposer with glslVersion = GLSL1 or use GLSL3 syntax in your fragment shader.'))}r.checkFragmentShaderForFragColor=M;function w(v){return v.replace(/\btexture\(/g,"texture2D(")}r.glsl1Texture=w;function T(v){return v.replace(/\b(i|u)sampler2D\b/g,"sampler2D")}r.glsl1Sampler2D=T;function A(v){return v=v.replace(/\buint\b/g,"int"),v=v.replace(/\buvec2\b/g,"ivec2"),v=v.replace(/\buvec3\b/g,"ivec3"),v=v.replace(/\buvec4\b/g,"ivec4"),v=v.replace(/\buint\(/g,"int("),v=v.replace(/\buvec2\(/g,"ivec2("),v=v.replace(/\buvec3\(/g,"ivec3("),v=v.replace(/\buvec4\(/g,"ivec4("),v}r.glsl1Uint=A;function L(v){return v.replace(/\bhighp\b/,"mediump")}r.highpToMediump=L;function x(v){var u=v.length;return v=v.replace(/^\s*\#version\s+([0-9]+(\s+(es)+)?)\s*/,""),v.length!==u&&console.warn("GPUIO expects shader source that does not contain #version declarations, removing...."),v}r.stripVersion=x;function I(v){var u=v.length;return v=v.replace(/\s*precision\s+((highp)|(mediump)|(lowp))\s+[a-zA-Z0-9]+\s*;/g,""),v.length!==u&&console.warn("GPUIO expects shader source that does not contain precision declarations, removing...."),v}r.stripPrecision=I;function _(v){return v=v.replace(/[\t ]*\/\/.*\n/g,""),v=v.replace(/\/\*.*?\*\//gs,""),v}r.stripComments=_;function E(v){var u={},g="\\buniform\\s+(((highp)|(mediump)|(lowp))\\s+)?(i|u)?sampler2D\\s+(\\w+)\\s*;",b=v.match(new RegExp(g,"g"));if(!b||b.length===0)return[];var R=new RegExp(g);return b.forEach(function(U){var F=U.match(R);if(!F||!F[7]){console.warn('Could not find sampler2D uniform name in string "'.concat(U,'".'));return}u[F[7]]=!0}),Object.keys(u)}r.getSampler2DsInProgram=E},593:function(c,r,f){var s=this&&this.__awaiter||function(k,q,te,W){function Y(J){return J instanceof te?J:new te(function(ie){ie(J)})}return new(te||(te=Promise))(function(J,ie){function ce(V){try{ue(W.next(V))}catch(B){ie(B)}}function ae(V){try{ue(W.throw(V))}catch(B){ie(B)}}function ue(V){V.done?J(V.value):Y(V.value).then(ce,ae)}ue((W=W.apply(k,q||[])).next())})},h=this&&this.__generator||function(k,q){var te={label:0,sent:function(){if(J[0]&1)throw J[1];return J[1]},trys:[],ops:[]},W,Y,J,ie;return ie={next:ce(0),throw:ce(1),return:ce(2)},typeof Symbol=="function"&&(ie[Symbol.iterator]=function(){return this}),ie;function ce(ue){return function(V){return ae([ue,V])}}function ae(ue){if(W)throw new TypeError("Generator is already executing.");for(;te;)try{if(W=1,Y&&(J=ue[0]&2?Y.return:ue[0]?Y.throw||((J=Y.return)&&J.call(Y),0):Y.next)&&!(J=J.call(Y,ue[1])).done)return J;switch(Y=0,J&&(ue=[ue[0]&2,J.value]),ue[0]){case 0:case 1:J=ue;break;case 4:return te.label++,{value:ue[1],done:!1};case 5:te.label++,Y=ue[1],ue=[0];continue;case 7:ue=te.ops.pop(),te.trys.pop();continue;default:if(J=te.trys,!(J=J.length>0&&J[J.length-1])&&(ue[0]===6||ue[0]===2)){te=0;continue}if(ue[0]===3&&(!J||ue[1]>J[0]&&ue[1]<J[3])){te.label=ue[1];break}if(ue[0]===6&&te.label<J[1]){te.label=J[1],J=ue;break}if(J&&te.label<J[2]){te.label=J[2],te.ops.push(ue);break}J[2]&&te.ops.pop(),te.trys.pop();continue}ue=q.call(k,te)}catch(V){ue=[6,V],Y=0}finally{W=J=0}if(ue[0]&5)throw ue[1];return{value:ue[0]?ue[1]:void 0,done:!0}}};Object.defineProperty(r,"__esModule",{value:!0}),r.readPixelsAsync=r.indexOfLayerInArray=r.uniformInternalTypeForValue=r.preprocessFragmentShader=r.preprocessVertexShader=r.convertFragmentShaderToGLSL1=r.initSequentialFloatArray=r.isPowerOf2=r.getFragmentShaderMediumpPrecision=r.getVertexShaderMediumpPrecision=r.isHighpSupportedInFragmentShader=r.isHighpSupportedInVertexShader=r.readyToRead=r.isWebGL2Supported=r.isWebGL2=r.initGLProgram=r.compileShader=r.makeShaderHeader=r.isIntType=r.isSignedIntType=r.isUnsignedIntType=r.isFloatType=void 0;var l=f(566),d=f(601),S=f(690),p=f(724),C=f(360),y=f(126),m={supportsWebGL2:void 0,supportsHighpVertex:void 0,supportsHighpFragment:void 0,mediumpVertexPrecision:void 0,mediumpFragmentPrecision:void 0};function D(k){return k===d.FLOAT||k===d.HALF_FLOAT}r.isFloatType=D;function P(k){return k===d.UNSIGNED_BYTE||k===d.UNSIGNED_SHORT||k===d.UNSIGNED_INT}r.isUnsignedIntType=P;function M(k){return k===d.BYTE||k===d.SHORT||k===d.INT}r.isSignedIntType=M;function w(k){return P(k)||M(k)}r.isIntType=w;function T(k){for(var q="",te=Object.keys(k),W=0;W<te.length;W++){var Y=te[W];if(!(0,l.isString)(Y)||!(0,l.isString)(k[Y]))throw new Error("GPUProgram compile time constants must be passed in as key value pairs that are both strings, got key value pair of type [".concat(typeof Y," : ").concat(typeof k[Y],"] for key ").concat(Y,"."));q+="#define ".concat(Y," ").concat(k[Y],`
`)}return q}function A(k,q,te,W,Y){var J,ie=k===d.GLSL3?"#version ".concat(d.GLSL3,`
`):"",ce=W?T(W):"",ae=T((J={},J[d.GPUIO_INT_PRECISION]="".concat((0,S.intForPrecision)(q)),J[d.GPUIO_FLOAT_PRECISION]="".concat((0,S.intForPrecision)(te)),J));return"".concat(ie).concat(Y||"").concat(ce).concat(ae).concat(p.PRECISION_SOURCE)}r.makeShaderHeader=A;function L(k,q,te,W,Y,J,ie,ce,ae,ue,V){V===void 0&&(V=!1);var B=k.createShader(J);if(!B)return ce("Unable to init gl shader."),null;var re=A(q,te,W,ae,ue),me="".concat(re).concat(Y);if(k.shaderSource(B,me),k.compileShader(B),V){var _e=k.getShaderParameter(B,k.COMPILE_STATUS);if(!_e)return console.log(me.split(`
`).map(function(ye,Me){return"".concat(Me,"	").concat(ye)}).join(`
`)),ce("Could not compile ".concat(J===k.FRAGMENT_SHADER?"fragment":"vertex",' shader for program "').concat(ie,'": ').concat(k.getShaderInfoLog(B),".")),null}return B}r.compileShader=L;function x(k,q,te,W,Y){var J=k.createProgram();if(!J){Y('Unable to init GL program for GPUProgram "'.concat(W,'", gl.createProgram() has failed.'));return}k.attachShader(J,q),k.attachShader(J,te),k.linkProgram(J);var ie=k.getProgramParameter(J,k.LINK_STATUS);if(!ie){Y('GPUProgram "'.concat(W,'" failed to link: ').concat(k.getProgramInfoLog(J)));return}return J}r.initGLProgram=x;function I(k){return typeof WebGL2RenderingContext<"u"&&k instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&k instanceof WebGL2ComputeRenderingContext}r.isWebGL2=I;function _(){if(m.supportsWebGL2===void 0){var k=document.createElement("canvas").getContext(d.WEBGL2);m.supportsWebGL2=I(k)}return m.supportsWebGL2}r.isWebGL2Supported=_;function E(k){return k.checkFramebufferStatus(k.FRAMEBUFFER)==k.FRAMEBUFFER_COMPLETE}r.readyToRead=E;function v(k,q){var te=document.createElement("canvas").getContext(d.WEBGL1);if(!te)throw new Error("Unable to init webgl context.");try{var W=L(te,d.GLSL1,d.PRECISION_HIGH_P,d.PRECISION_HIGH_P,k,te.VERTEX_SHADER,"highpFragmentTest",d.DEFAULT_ERROR_CALLBACK),Y=L(te,d.GLSL1,d.PRECISION_HIGH_P,d.PRECISION_HIGH_P,q,te.FRAGMENT_SHADER,"highpFragmentTest",d.DEFAULT_ERROR_CALLBACK),J=x(te,W,Y,"highpFragmentTest",d.DEFAULT_ERROR_CALLBACK);te.deleteProgram(J),te.deleteShader(W),te.deleteShader(Y)}catch{return!1}return!0}function u(){if(m.supportsHighpVertex===void 0){var k=v("void main() { highp float test = 0.524; gl_Position = vec4(test, test, 0, 1); }","void main() { gl_FragColor = vec4(0); }");m.supportsHighpVertex=k}return m.supportsHighpVertex}r.isHighpSupportedInVertexShader=u;function g(){if(m.supportsHighpFragment===void 0){var k=v("void main() { gl_Position = vec4(0.5, 0.5, 0, 1); }","void main() { highp float test = 1.35; gl_FragColor = vec4(test); }");m.supportsHighpFragment=k}return m.supportsHighpFragment}r.isHighpSupportedInFragmentShader=g;function b(k,q,te,W,Y){var J=x(q,W,te,k,d.DEFAULT_ERROR_CALLBACK);if(!J)throw new Error("Unable to init WebGLProgram.");var ie=q.getAttribLocation(J,"position"),ce=q.createBuffer();q.bindBuffer(q.ARRAY_BUFFER,ce),q.bufferData(q.ARRAY_BUFFER,1,q.STATIC_DRAW),q.enableVertexAttribArray(ie),q.vertexAttribPointer(ie,1,q.UNSIGNED_BYTE,!1,0,0),q.viewport(0,0,1,1),q.useProgram(J),Y(J),q.drawArrays(q.POINTS,0,1);var ae=new Uint8Array(4);return q.readPixels(0,0,1,1,q.RGBA,q.UNSIGNED_BYTE,ae),q.disableVertexAttribArray(ie),q.deleteProgram(J),q.deleteShader(W),q.deleteShader(te),q.deleteBuffer(ce),ae}function R(){if(m.mediumpVertexPrecision===void 0){var k=document.createElement("canvas"),q=k.getContext("webgl");if(!q)throw new Error("Unable to init webgl context.");var te=L(q,d.GLSL1,d.PRECISION_MEDIUM_P,d.PRECISION_MEDIUM_P,`
	attribute vec4 position;  // needed because of another bug in Safari
	uniform mediump vec3 v;
	varying mediump vec4 v_result;
	void main() {
		gl_Position = position;
		gl_PointSize = 1.0;
		v_result = vec4(normalize(v) * 0.5 + 0.5, 1);
	}
		`,q.VERTEX_SHADER,"mediumpPrecisionVertexTest",d.DEFAULT_ERROR_CALLBACK);if(!te)throw new Error("Unable to init vertex shader.");var W=L(q,d.GLSL1,d.PRECISION_MEDIUM_P,d.PRECISION_MEDIUM_P,`
	varying mediump vec4 v_result;
	void main() {
		gl_FragColor = v_result;
	}
		`,q.FRAGMENT_SHADER,"mediumpPrecisionVertexTest",d.DEFAULT_ERROR_CALLBACK);if(!W)throw new Error("Unable to init fragment shader.");var Y=Math.pow(2,31)-1,J=Math.sqrt(Y),ie=(J/Math.sqrt(J*J*3)*.5+.5)*255|0,ce=b("mediumpPrecisionVertexTest",q,W,te,function(ue){var V=q.getUniformLocation(ue,"v");q.uniform3f(V,J,J,J)}),ae=Math.abs(ce[0]-ie)>16;m.mediumpVertexPrecision=ae?d.PRECISION_MEDIUM_P:d.PRECISION_HIGH_P}return m.mediumpVertexPrecision}r.getVertexShaderMediumpPrecision=R;function U(){if(m.mediumpFragmentPrecision===void 0){var k=document.createElement("canvas"),q=k.getContext("webgl");if(!q)throw new Error("Unable to init webgl context.");var te=L(q,d.GLSL1,d.PRECISION_MEDIUM_P,d.PRECISION_MEDIUM_P,`
	attribute vec4 position;  // needed because of another bug in Safari
	void main() {
		gl_Position = position;
		gl_PointSize = 1.0;
	}
		`,q.VERTEX_SHADER,"mediumpPrecisionFragmentTest",d.DEFAULT_ERROR_CALLBACK);if(!te)throw new Error("Unable to init vertex shader.");var W=L(q,d.GLSL1,d.PRECISION_MEDIUM_P,d.PRECISION_MEDIUM_P,`
	uniform mediump vec3 v;
	void main() {
		gl_FragColor = vec4(normalize(v) * 0.5 + 0.5, 1);
	}
		`,q.FRAGMENT_SHADER,"mediumpPrecisionFragmentTest",d.DEFAULT_ERROR_CALLBACK);if(!W)throw new Error("Unable to init fragment shader.");var Y=Math.pow(2,31)-1,J=Math.sqrt(Y),ie=(J/Math.sqrt(J*J*3)*.5+.5)*255|0,ce=b("mediumpPrecisionFragmentTest",q,W,te,function(ue){var V=q.getUniformLocation(ue,"v");q.uniform3f(V,J,J,J)}),ae=Math.abs(ce[0]-ie)>16;m.mediumpFragmentPrecision=ae?d.PRECISION_MEDIUM_P:d.PRECISION_HIGH_P}return m.mediumpFragmentPrecision}r.getFragmentShaderMediumpPrecision=U;function F(k){return k>0&&(k&k-1)==0}r.isPowerOf2=F;function X(k){for(var q=new Float32Array(k),te=0;te<k;te++)q[te]=te;return q}r.initSequentialFloatArray=X;function O(k){return k=(0,y.stripVersion)(k),k=(0,y.stripPrecision)(k),k=(0,y.stripComments)(k),k}function N(k){return k=(0,y.glsl1Sampler2D)(k),k=(0,y.glsl1Uint)(k),k=(0,y.glsl1Texture)(k),k}function G(k){return k=N(k),k=(0,y.glsl1VertexIn)(k),k=(0,y.glsl1VertexOut)(k),k}function H(k,q){return k=N(k),k=(0,y.glsl1FragmentIn)(k),(0,y.glsl1FragmentOut)(k,q)}r.convertFragmentShaderToGLSL1=H;function K(k,q){return k=O(k),u()||(console.warn("highp not supported in vertex shader in this browser, falling back to mediump."),k=(0,y.highpToMediump)(k)),q===d.GLSL3?k:G(k)}r.preprocessVertexShader=K;function $(k,q,te){var W;k=O(k),(0,y.checkFragmentShaderForFragColor)(k,q,te),g()||(console.warn("highp not supported in fragment shader in this browser, falling back to mediump."),k=(0,y.highpToMediump)(k)),k=(0,C.fragmentShaderPolyfills)(k,q)+k;var Y;if(W=(0,C.texturePolyfill)(k),k=W.shaderSource,Y=W.samplerUniforms,q!==d.GLSL3){for(var J=H(k,te),ie=0,ce=J.length;ie<ce;ie++)J[ie]=(0,C.GLSL1Polyfills)(J[ie])+J[ie];if(k=J.shift(),J.length)return{shaderSource:k,samplerUniforms:Y,additionalSources:J}}return{shaderSource:k,samplerUniforms:Y}}r.preprocessFragmentShader=$;function z(k,q,te,W){if(q===d.FLOAT){if((0,l.isArray)(k)){for(var Y=0;Y<k.length;Y++)if(!(0,l.isFiniteNumber)(k[Y]))throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected float or float[] of length 1-4.'))}else if(!(0,l.isFiniteNumber)(k))throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected float or float[] of length 1-4.'));if(!(0,l.isArray)(k)||k.length===1)return d.FLOAT_1D_UNIFORM;if(k.length===2)return d.FLOAT_2D_UNIFORM;if(k.length===3)return d.FLOAT_3D_UNIFORM;if(k.length===4)return d.FLOAT_4D_UNIFORM;throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected float or float[] of length 1-4.'))}else if(q===d.INT){if((0,l.isArray)(k)){for(var Y=0;Y<k.length;Y++)if(!(0,l.isInteger)(k[Y]))throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected int or int[] of length 1-4.'))}else if(!(0,l.isInteger)(k))throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected int or int[] of length 1-4.'));if(!(0,l.isArray)(k)||k.length===1)return d.INT_1D_UNIFORM;if(k.length===2)return d.INT_2D_UNIFORM;if(k.length===3)return d.INT_3D_UNIFORM;if(k.length===4)return d.INT_4D_UNIFORM;throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected int or int[] of length 1-4.'))}else if(q===d.UINT){if((0,l.isArray)(k)){for(var Y=0;Y<k.length;Y++)if(!(0,l.isNonNegativeInteger)(k[Y]))throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected uint or uint[] of length 1-4.'))}else if(!(0,l.isNonNegativeInteger)(k))throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected uint or uint[] of length 1-4.'));if(!(0,l.isArray)(k)||k.length===1)return d.UINT_1D_UNIFORM;if(k.length===2)return d.UINT_2D_UNIFORM;if(k.length===3)return d.UINT_3D_UNIFORM;if(k.length===4)return d.UINT_4D_UNIFORM;throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected uint or uint[] of length 1-4.'))}else if(q===d.BOOL){if((0,l.isArray)(k)){for(var Y=0;Y<k.length;Y++)if(!(0,l.isBoolean)(k[Y]))throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected bool or bool[] of length 1-4.'))}else if(!(0,l.isBoolean)(k))throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected bool or bool[] of length 1-4.'));if(!(0,l.isArray)(k)||k.length===1)return d.BOOL_1D_UNIFORM;if(k.length===2)return d.BOOL_2D_UNIFORM;if(k.length===3)return d.BOOL_3D_UNIFORM;if(k.length===4)return d.BOOL_4D_UNIFORM;throw new Error("Invalid value ".concat(JSON.stringify(k),' for uniform "').concat(te,'" in program "').concat(W,'", expected boolean.'))}else throw new Error('Invalid type "'.concat(q,'" for uniform "').concat(te,'" in program "').concat(W,'", expected ').concat(d.FLOAT," or ").concat(d.INT," or ").concat(d.BOOL,"."))}r.uniformInternalTypeForValue=z;function Q(k,q){return q.findIndex(function(te){return te===k||te.layer===k})}r.indexOfLayerInArray=Q;function oe(k,q,te,W){return new Promise(function(Y,J){function ie(){var ce=k.clientWaitSync(q,te,0);if(ce===k.WAIT_FAILED){J();return}if(ce===k.TIMEOUT_EXPIRED){setTimeout(ie,W);return}Y()}ie()})}function Z(k,q,te,W,Y){return s(this,void 0,void 0,function(){var J;return h(this,function(ie){switch(ie.label){case 0:return J=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0),k.flush(),[4,oe(k,J,0,10)];case 1:return ie.sent(),k.deleteSync(J),k.bindBuffer(q,te),k.getBufferSubData(q,W,Y),k.bindBuffer(q,null),[2]}})})}function le(k,q,te,W,Y,J,ie,ce){return s(this,void 0,void 0,function(){var ae;return h(this,function(ue){switch(ue.label){case 0:return ae=k.createBuffer(),k.bindBuffer(k.PIXEL_PACK_BUFFER,ae),k.bufferData(k.PIXEL_PACK_BUFFER,ce.byteLength,k.STREAM_READ),k.readPixels(q,te,W,Y,J,ie,0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),[4,Z(k,k.PIXEL_PACK_BUFFER,ae,0,ce)];case 1:return ue.sent(),k.deleteBuffer(ae),[2,ce]}})})}r.readPixelsAsync=le},557:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getFloat16=d,r.setFloat16=S;var s=f(802),h=f(605),l=f(983);function d(p,C,...y){return(0,h.convertToNumber)((0,l.DataViewPrototypeGetUint16)(p,C,...(0,s.safeIfNeeded)(y)))}function S(p,C,y,...m){return(0,l.DataViewPrototypeSetUint16)(p,C,(0,h.roundToFloat16Bits)(y),...(0,s.safeIfNeeded)(m))}},310:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isFloat16Array=D;var s=f(802),h=f(299),l=f(605),d=f(554),S=f(930),p=f(983),C=f(700);const y=2,m=new p.NativeWeakMap;function D(_){return(0,p.WeakMapPrototypeHas)(m,_)||!(0,p.ArrayBufferIsView)(_)&&(0,h.hasFloat16ArrayBrand)(_)}function P(_){if(!D(_))throw(0,p.NativeTypeError)(S.THIS_IS_NOT_A_FLOAT16ARRAY_OBJECT)}function M(_,E){const v=D(_),u=(0,d.isNativeTypedArray)(_);if(!v&&!u)throw(0,p.NativeTypeError)(S.SPECIES_CONSTRUCTOR_DIDNT_RETURN_TYPEDARRAY_OBJECT);if(typeof E=="number"){let g;if(v){const b=w(_);g=(0,p.TypedArrayPrototypeGetLength)(b)}else g=(0,p.TypedArrayPrototypeGetLength)(_);if(g<E)throw(0,p.NativeTypeError)(S.DERIVED_CONSTRUCTOR_CREATED_TYPEDARRAY_OBJECT_WHICH_WAS_TOO_SMALL_LENGTH)}if((0,d.isNativeBigIntTypedArray)(_))throw(0,p.NativeTypeError)(S.CANNOT_MIX_BIGINT_AND_OTHER_TYPES)}function w(_){const E=(0,p.WeakMapPrototypeGet)(m,_);if(E!==void 0){const g=(0,p.TypedArrayPrototypeGetBuffer)(E);if((0,C.IsDetachedBuffer)(g))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER);return E}const v=_.buffer;if((0,C.IsDetachedBuffer)(v))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER);const u=(0,p.ReflectConstruct)(x,[v,_.byteOffset,_.length],_.constructor);return(0,p.WeakMapPrototypeGet)(m,u)}function T(_){const E=(0,p.TypedArrayPrototypeGetLength)(_),v=[];for(let u=0;u<E;++u)v[u]=(0,l.convertToNumber)(_[u]);return v}const A=new p.NativeWeakSet;for(const _ of(0,p.ReflectOwnKeys)(p.TypedArrayPrototype)){if(_===p.SymbolToStringTag)continue;const E=(0,p.ReflectGetOwnPropertyDescriptor)(p.TypedArrayPrototype,_);(0,p.ObjectHasOwn)(E,"get")&&typeof E.get=="function"&&(0,p.WeakSetPrototypeAdd)(A,E.get)}const L=(0,p.ObjectFreeze)({get(_,E,v){return(0,d.isCanonicalIntegerIndexString)(E)&&(0,p.ObjectHasOwn)(_,E)?(0,l.convertToNumber)((0,p.ReflectGet)(_,E)):(0,p.WeakSetPrototypeHas)(A,(0,p.ObjectPrototype__lookupGetter__)(_,E))?(0,p.ReflectGet)(_,E):(0,p.ReflectGet)(_,E,v)},set(_,E,v,u){return(0,d.isCanonicalIntegerIndexString)(E)&&(0,p.ObjectHasOwn)(_,E)?(0,p.ReflectSet)(_,E,(0,l.roundToFloat16Bits)(v)):(0,p.ReflectSet)(_,E,v,u)},getOwnPropertyDescriptor(_,E){if((0,d.isCanonicalIntegerIndexString)(E)&&(0,p.ObjectHasOwn)(_,E)){const v=(0,p.ReflectGetOwnPropertyDescriptor)(_,E);return v.value=(0,l.convertToNumber)(v.value),v}return(0,p.ReflectGetOwnPropertyDescriptor)(_,E)},defineProperty(_,E,v){return(0,d.isCanonicalIntegerIndexString)(E)&&(0,p.ObjectHasOwn)(_,E)&&(0,p.ObjectHasOwn)(v,"value")&&(v.value=(0,l.roundToFloat16Bits)(v.value)),(0,p.ReflectDefineProperty)(_,E,v)}});class x{constructor(E,v,u){let g;if(D(E))g=(0,p.ReflectConstruct)(p.NativeUint16Array,[w(E)],new.target);else if((0,d.isObject)(E)&&!(0,d.isArrayBuffer)(E)){let R,U;if((0,d.isNativeTypedArray)(E)){R=E,U=(0,p.TypedArrayPrototypeGetLength)(E);const F=(0,p.TypedArrayPrototypeGetBuffer)(E),X=(0,d.isSharedArrayBuffer)(F)?p.NativeArrayBuffer:(0,C.SpeciesConstructor)(F,p.NativeArrayBuffer);if((0,C.IsDetachedBuffer)(F))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER);if((0,d.isNativeBigIntTypedArray)(E))throw(0,p.NativeTypeError)(S.CANNOT_MIX_BIGINT_AND_OTHER_TYPES);const O=new X(U*y);g=(0,p.ReflectConstruct)(p.NativeUint16Array,[O],new.target)}else{const F=E[p.SymbolIterator];if(F!=null&&typeof F!="function")throw(0,p.NativeTypeError)(S.ITERATOR_PROPERTY_IS_NOT_CALLABLE);F!=null?(0,d.isOrdinaryArray)(E)?(R=E,U=E.length):(R=[...E],U=R.length):(R=E,U=(0,C.ToLength)(R.length)),g=(0,p.ReflectConstruct)(p.NativeUint16Array,[U],new.target)}for(let F=0;F<U;++F)g[F]=(0,l.roundToFloat16Bits)(R[F])}else g=(0,p.ReflectConstruct)(p.NativeUint16Array,arguments,new.target);const b=new p.NativeProxy(g,L);return(0,p.WeakMapPrototypeSet)(m,b,g),b}static from(E,...v){const u=this;if(!(0,p.ReflectHas)(u,h.brand))throw(0,p.NativeTypeError)(S.THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY);if(u===x){if(D(E)&&v.length===0){const O=w(E),N=new p.NativeUint16Array((0,p.TypedArrayPrototypeGetBuffer)(O),(0,p.TypedArrayPrototypeGetByteOffset)(O),(0,p.TypedArrayPrototypeGetLength)(O));return new x((0,p.TypedArrayPrototypeGetBuffer)((0,p.TypedArrayPrototypeSlice)(N)))}if(v.length===0)return new x((0,p.TypedArrayPrototypeGetBuffer)((0,p.Uint16ArrayFrom)(E,l.roundToFloat16Bits)));const F=v[0],X=v[1];return new x((0,p.TypedArrayPrototypeGetBuffer)((0,p.Uint16ArrayFrom)(E,function(O,...N){return(0,l.roundToFloat16Bits)((0,p.ReflectApply)(F,this,[O,...(0,s.safeIfNeeded)(N)]))},X)))}let g,b;const R=E[p.SymbolIterator];if(R!=null&&typeof R!="function")throw(0,p.NativeTypeError)(S.ITERATOR_PROPERTY_IS_NOT_CALLABLE);if(R!=null)(0,d.isOrdinaryArray)(E)?(g=E,b=E.length):(0,d.isOrdinaryNativeTypedArray)(E)?(g=E,b=(0,p.TypedArrayPrototypeGetLength)(E)):(g=[...E],b=g.length);else{if(E==null)throw(0,p.NativeTypeError)(S.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT);g=(0,p.NativeObject)(E),b=(0,C.ToLength)(g.length)}const U=new u(b);if(v.length===0)for(let F=0;F<b;++F)U[F]=g[F];else{const F=v[0],X=v[1];for(let O=0;O<b;++O)U[O]=(0,p.ReflectApply)(F,X,[g[O],O])}return U}static of(...E){const v=this;if(!(0,p.ReflectHas)(v,h.brand))throw(0,p.NativeTypeError)(S.THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY);const u=E.length;if(v===x){const b=new x(u),R=w(b);for(let U=0;U<u;++U)R[U]=(0,l.roundToFloat16Bits)(E[U]);return b}const g=new v(u);for(let b=0;b<u;++b)g[b]=E[b];return g}keys(){P(this);const E=w(this);return(0,p.TypedArrayPrototypeKeys)(E)}values(){P(this);const E=w(this);return(0,s.wrap)(function*(){for(const v of(0,p.TypedArrayPrototypeValues)(E))yield(0,l.convertToNumber)(v)}())}entries(){P(this);const E=w(this);return(0,s.wrap)(function*(){for(const[v,u]of(0,p.TypedArrayPrototypeEntries)(E))yield[v,(0,l.convertToNumber)(u)]}())}at(E){P(this);const v=w(this),u=(0,p.TypedArrayPrototypeGetLength)(v),g=(0,C.ToIntegerOrInfinity)(E),b=g>=0?g:u+g;if(!(b<0||b>=u))return(0,l.convertToNumber)(v[b])}map(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0],R=(0,C.SpeciesConstructor)(u,x);if(R===x){const F=new x(g),X=w(F);for(let O=0;O<g;++O){const N=(0,l.convertToNumber)(u[O]);X[O]=(0,l.roundToFloat16Bits)((0,p.ReflectApply)(E,b,[N,O,this]))}return F}const U=new R(g);M(U,g);for(let F=0;F<g;++F){const X=(0,l.convertToNumber)(u[F]);U[F]=(0,p.ReflectApply)(E,b,[X,F,this])}return U}filter(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0],R=[];for(let X=0;X<g;++X){const O=(0,l.convertToNumber)(u[X]);(0,p.ReflectApply)(E,b,[O,X,this])&&(0,p.ArrayPrototypePush)(R,O)}const U=(0,C.SpeciesConstructor)(u,x),F=new U(R);return M(F),F}reduce(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u);if(g===0&&v.length===0)throw(0,p.NativeTypeError)(S.REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE);let b,R;v.length===0?(b=(0,l.convertToNumber)(u[0]),R=1):(b=v[0],R=0);for(let U=R;U<g;++U)b=E(b,(0,l.convertToNumber)(u[U]),U,this);return b}reduceRight(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u);if(g===0&&v.length===0)throw(0,p.NativeTypeError)(S.REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE);let b,R;v.length===0?(b=(0,l.convertToNumber)(u[g-1]),R=g-2):(b=v[0],R=g-1);for(let U=R;U>=0;--U)b=E(b,(0,l.convertToNumber)(u[U]),U,this);return b}forEach(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0];for(let R=0;R<g;++R)(0,p.ReflectApply)(E,b,[(0,l.convertToNumber)(u[R]),R,this])}find(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0];for(let R=0;R<g;++R){const U=(0,l.convertToNumber)(u[R]);if((0,p.ReflectApply)(E,b,[U,R,this]))return U}}findIndex(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0];for(let R=0;R<g;++R){const U=(0,l.convertToNumber)(u[R]);if((0,p.ReflectApply)(E,b,[U,R,this]))return R}return-1}findLast(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0];for(let R=g-1;R>=0;--R){const U=(0,l.convertToNumber)(u[R]);if((0,p.ReflectApply)(E,b,[U,R,this]))return U}}findLastIndex(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0];for(let R=g-1;R>=0;--R){const U=(0,l.convertToNumber)(u[R]);if((0,p.ReflectApply)(E,b,[U,R,this]))return R}return-1}every(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0];for(let R=0;R<g;++R)if(!(0,p.ReflectApply)(E,b,[(0,l.convertToNumber)(u[R]),R,this]))return!1;return!0}some(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u),b=v[0];for(let R=0;R<g;++R)if((0,p.ReflectApply)(E,b,[(0,l.convertToNumber)(u[R]),R,this]))return!0;return!1}set(E,...v){P(this);const u=w(this),g=(0,C.ToIntegerOrInfinity)(v[0]);if(g<0)throw(0,p.NativeRangeError)(S.OFFSET_IS_OUT_OF_BOUNDS);if(E==null)throw(0,p.NativeTypeError)(S.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT);if((0,d.isNativeBigIntTypedArray)(E))throw(0,p.NativeTypeError)(S.CANNOT_MIX_BIGINT_AND_OTHER_TYPES);if(D(E))return(0,p.TypedArrayPrototypeSet)(w(this),w(E),g);if((0,d.isNativeTypedArray)(E)){const F=(0,p.TypedArrayPrototypeGetBuffer)(E);if((0,C.IsDetachedBuffer)(F))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER)}const b=(0,p.TypedArrayPrototypeGetLength)(u),R=(0,p.NativeObject)(E),U=(0,C.ToLength)(R.length);if(g===1/0||U+g>b)throw(0,p.NativeRangeError)(S.OFFSET_IS_OUT_OF_BOUNDS);for(let F=0;F<U;++F)u[F+g]=(0,l.roundToFloat16Bits)(R[F])}reverse(){P(this);const E=w(this);return(0,p.TypedArrayPrototypeReverse)(E),this}fill(E,...v){P(this);const u=w(this);return(0,p.TypedArrayPrototypeFill)(u,(0,l.roundToFloat16Bits)(E),...(0,s.safeIfNeeded)(v)),this}copyWithin(E,v,...u){P(this);const g=w(this);return(0,p.TypedArrayPrototypeCopyWithin)(g,E,v,...(0,s.safeIfNeeded)(u)),this}sort(E){P(this);const v=w(this),u=E!==void 0?E:C.defaultCompare;return(0,p.TypedArrayPrototypeSort)(v,(g,b)=>u((0,l.convertToNumber)(g),(0,l.convertToNumber)(b))),this}slice(E,v){P(this);const u=w(this),g=(0,C.SpeciesConstructor)(u,x);if(g===x){const K=new p.NativeUint16Array((0,p.TypedArrayPrototypeGetBuffer)(u),(0,p.TypedArrayPrototypeGetByteOffset)(u),(0,p.TypedArrayPrototypeGetLength)(u));return new x((0,p.TypedArrayPrototypeGetBuffer)((0,p.TypedArrayPrototypeSlice)(K,E,v)))}const b=(0,p.TypedArrayPrototypeGetLength)(u),R=(0,C.ToIntegerOrInfinity)(E),U=v===void 0?b:(0,C.ToIntegerOrInfinity)(v);let F;R===-1/0?F=0:R<0?F=b+R>0?b+R:0:F=b<R?b:R;let X;U===-1/0?X=0:U<0?X=b+U>0?b+U:0:X=b<U?b:U;const O=X-F>0?X-F:0,N=new g(O);if(M(N,O),O===0)return N;const G=(0,p.TypedArrayPrototypeGetBuffer)(u);if((0,C.IsDetachedBuffer)(G))throw(0,p.NativeTypeError)(S.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER);let H=0;for(;F<X;)N[H]=(0,l.convertToNumber)(u[F]),++F,++H;return N}subarray(E,v){P(this);const u=w(this),g=(0,C.SpeciesConstructor)(u,x),b=new p.NativeUint16Array((0,p.TypedArrayPrototypeGetBuffer)(u),(0,p.TypedArrayPrototypeGetByteOffset)(u),(0,p.TypedArrayPrototypeGetLength)(u)),R=(0,p.TypedArrayPrototypeSubarray)(b,E,v),U=new g((0,p.TypedArrayPrototypeGetBuffer)(R),(0,p.TypedArrayPrototypeGetByteOffset)(R),(0,p.TypedArrayPrototypeGetLength)(R));return M(U),U}indexOf(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u);let b=(0,C.ToIntegerOrInfinity)(v[0]);if(b===1/0)return-1;b<0&&(b+=g,b<0&&(b=0));for(let R=b;R<g;++R)if((0,p.ObjectHasOwn)(u,R)&&(0,l.convertToNumber)(u[R])===E)return R;return-1}lastIndexOf(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u);let b=v.length>=1?(0,C.ToIntegerOrInfinity)(v[0]):g-1;if(b===-1/0)return-1;b>=0?b=b<g-1?b:g-1:b+=g;for(let R=b;R>=0;--R)if((0,p.ObjectHasOwn)(u,R)&&(0,l.convertToNumber)(u[R])===E)return R;return-1}includes(E,...v){P(this);const u=w(this),g=(0,p.TypedArrayPrototypeGetLength)(u);let b=(0,C.ToIntegerOrInfinity)(v[0]);if(b===1/0)return!1;b<0&&(b+=g,b<0&&(b=0));const R=(0,p.NumberIsNaN)(E);for(let U=b;U<g;++U){const F=(0,l.convertToNumber)(u[U]);if(R&&(0,p.NumberIsNaN)(F)||F===E)return!0}return!1}join(E){P(this);const v=w(this),u=T(v);return(0,p.ArrayPrototypeJoin)(u,E)}toLocaleString(...E){P(this);const v=w(this),u=T(v);return(0,p.ArrayPrototypeToLocaleString)(u,...(0,s.safeIfNeeded)(E))}get[p.SymbolToStringTag](){if(D(this))return"Float16Array"}}r.Float16Array=x,(0,p.ObjectDefineProperty)(x,"BYTES_PER_ELEMENT",{value:y}),(0,p.ObjectDefineProperty)(x,h.brand,{}),(0,p.ReflectSetPrototypeOf)(x,p.TypedArray);const I=x.prototype;(0,p.ObjectDefineProperty)(I,"BYTES_PER_ELEMENT",{value:y}),(0,p.ObjectDefineProperty)(I,p.SymbolIterator,{value:I.values,writable:!0,configurable:!0}),(0,p.ReflectSetPrototypeOf)(I,p.TypedArrayPrototype)},802:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.safeIfNeeded=d,r.wrap=C;var s=f(983);const h=new s.NativeWeakMap,l=(0,s.ObjectCreate)(null,{next:{value:function(){const m=(0,s.WeakMapPrototypeGet)(h,this);return(0,s.ArrayIteratorPrototypeNext)(m)}},[s.SymbolIterator]:{value:function(){return this}}});function d(y){if(y[s.SymbolIterator]===s.NativeArrayPrototypeSymbolIterator)return y;const m=(0,s.ObjectCreate)(l);return(0,s.WeakMapPrototypeSet)(h,m,(0,s.ArrayPrototypeSymbolIterator)(y)),m}const S=new s.NativeWeakMap,p=(0,s.ObjectCreate)(s.IteratorPrototype,{next:{value:function(){const m=(0,s.WeakMapPrototypeGet)(S,this);return(0,s.GeneratorPrototypeNext)(m)},writable:!0,configurable:!0}});for(const y of(0,s.ReflectOwnKeys)(s.ArrayIteratorPrototype))y!=="next"&&(0,s.ObjectDefineProperty)(p,y,(0,s.ReflectGetOwnPropertyDescriptor)(s.ArrayIteratorPrototype,y));function C(y){const m=(0,s.ObjectCreate)(p);return(0,s.WeakMapPrototypeSet)(S,m,y),m}},299:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.hasFloat16ArrayBrand=S;var s=f(554),h=f(930),l=f(983);const d=(0,l.SymbolFor)("__Float16Array__");r.brand=d;function S(p){if(!(0,s.isObjectLike)(p))return!1;const C=(0,l.ReflectGetPrototypeOf)(p);if(!(0,s.isObjectLike)(C))return!1;const y=C.constructor;if(y===void 0)return!1;if(!(0,s.isObject)(y))throw(0,l.NativeTypeError)(h.THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT);return(0,l.ReflectHas)(y,d)}},605:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.convertToNumber=P,r.roundToFloat16Bits=C;var s=f(983);const h=new s.NativeArrayBuffer(4),l=new s.NativeFloat32Array(h),d=new s.NativeUint32Array(h),S=new s.NativeUint32Array(512),p=new s.NativeUint32Array(512);for(let M=0;M<256;++M){const w=M-127;w<-27?(S[M]=0,S[M|256]=32768,p[M]=24,p[M|256]=24):w<-14?(S[M]=1024>>-w-14,S[M|256]=1024>>-w-14|32768,p[M]=-w-1,p[M|256]=-w-1):w<=15?(S[M]=w+15<<10,S[M|256]=w+15<<10|32768,p[M]=13,p[M|256]=13):w<128?(S[M]=31744,S[M|256]=64512,p[M]=24,p[M|256]=24):(S[M]=31744,S[M|256]=64512,p[M]=13,p[M|256]=13)}function C(M){l[0]=M;const w=d[0],T=w>>23&511;return S[T]+((w&8388607)>>p[T])}const y=new s.NativeUint32Array(2048),m=new s.NativeUint32Array(64),D=new s.NativeUint32Array(64);for(let M=1;M<1024;++M){let w=M<<13,T=0;for(;!(w&8388608);)w<<=1,T-=8388608;w&=-8388609,T+=947912704,y[M]=w|T}for(let M=1024;M<2048;++M)y[M]=939524096+(M-1024<<13);for(let M=1;M<31;++M)m[M]=M<<23;m[31]=1199570944,m[32]=2147483648;for(let M=33;M<63;++M)m[M]=2147483648+(M-32<<23);m[63]=3347054592;for(let M=1;M<64;++M)M!==32&&(D[M]=1024);function P(M){const w=M>>10;return d[0]=y[D[w]+(M&1023)]+m[w],l[0]}},554:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isArrayBuffer=p,r.isCanonicalIntegerIndexString=D,r.isNativeBigIntTypedArray=S,r.isNativeTypedArray=d,r.isObject=h,r.isObjectLike=l,r.isOrdinaryArray=y,r.isOrdinaryNativeTypedArray=m,r.isSharedArrayBuffer=C;var s=f(983);function h(P){return P!==null&&typeof P=="object"||typeof P=="function"}function l(P){return P!==null&&typeof P=="object"}function d(P){return(0,s.TypedArrayPrototypeGetSymbolToStringTag)(P)!==void 0}function S(P){const M=(0,s.TypedArrayPrototypeGetSymbolToStringTag)(P);return M==="BigInt64Array"||M==="BigUint64Array"}function p(P){try{return(0,s.ArrayBufferPrototypeGetByteLength)(P),!0}catch{return!1}}function C(P){if(s.NativeSharedArrayBuffer===null)return!1;try{return(0,s.SharedArrayBufferPrototypeGetByteLength)(P),!0}catch{return!1}}function y(P){return(0,s.ArrayIsArray)(P)?P[s.SymbolIterator]===s.NativeArrayPrototypeSymbolIterator?!0:P[s.SymbolIterator]()[s.SymbolToStringTag]==="Array Iterator":!1}function m(P){return d(P)?P[s.SymbolIterator]===s.NativeTypedArrayPrototypeSymbolIterator?!0:P[s.SymbolIterator]()[s.SymbolToStringTag]==="Array Iterator":!1}function D(P){if(typeof P!="string")return!1;const M=+P;return P!==M+""||!(0,s.NumberIsFinite)(M)?!1:M===(0,s.MathTrunc)(M)}},930:(c,r)=>{Object.defineProperty(r,"__esModule",{value:!0});const f="This is not an object";r.THIS_IS_NOT_AN_OBJECT=f;const s="This is not a Float16Array object";r.THIS_IS_NOT_A_FLOAT16ARRAY_OBJECT=s;const h="This constructor is not a subclass of Float16Array";r.THIS_CONSTRUCTOR_IS_NOT_A_SUBCLASS_OF_FLOAT16ARRAY=h;const l="The constructor property value is not an object";r.THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT=l;const d="Species constructor didn't return TypedArray object";r.SPECIES_CONSTRUCTOR_DIDNT_RETURN_TYPEDARRAY_OBJECT=d;const S="Derived constructor created TypedArray object which was too small length";r.DERIVED_CONSTRUCTOR_CREATED_TYPEDARRAY_OBJECT_WHICH_WAS_TOO_SMALL_LENGTH=S;const p="Attempting to access detached ArrayBuffer";r.ATTEMPTING_TO_ACCESS_DETACHED_ARRAYBUFFER=p;const C="Cannot convert undefined or null to object";r.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT=C;const y="Cannot mix BigInt and other types, use explicit conversions";r.CANNOT_MIX_BIGINT_AND_OTHER_TYPES=y;const m="@@iterator property is not callable";r.ITERATOR_PROPERTY_IS_NOT_CALLABLE=m;const D="Reduce of empty array with no initial value";r.REDUCE_OF_EMPTY_ARRAY_WITH_NO_INITIAL_VALUE=D;const P="Offset is out of bounds";r.OFFSET_IS_OUT_OF_BOUNDS=P},983:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0});var s=f(930);function h(de){return(ne,...ge)=>d(de,ne,ge)}function l(de,ne){return h(y(de,ne).get)}const{apply:d,construct:S,defineProperty:p,get:C,getOwnPropertyDescriptor:y,getPrototypeOf:m,has:D,ownKeys:P,set:M,setPrototypeOf:w}=Reflect;r.ReflectSetPrototypeOf=w,r.ReflectSet=M,r.ReflectOwnKeys=P,r.ReflectHas=D,r.ReflectGetPrototypeOf=m,r.ReflectGetOwnPropertyDescriptor=y,r.ReflectGet=C,r.ReflectDefineProperty=p,r.ReflectConstruct=S,r.ReflectApply=d;const T=Proxy;r.NativeProxy=T;const{MAX_SAFE_INTEGER:A,isFinite:L,isNaN:x}=Number;r.NumberIsNaN=x,r.NumberIsFinite=L,r.MAX_SAFE_INTEGER=A;const{iterator:I,species:_,toStringTag:E,for:v}=Symbol;r.SymbolFor=v,r.SymbolToStringTag=E,r.SymbolSpecies=_,r.SymbolIterator=I;const u=Object;r.NativeObject=u;const{create:g,defineProperty:b,freeze:R,is:U}=u;r.ObjectIs=U,r.ObjectFreeze=R,r.ObjectDefineProperty=b,r.ObjectCreate=g;const F=u.prototype,X=F.__lookupGetter__?h(F.__lookupGetter__):(de,ne)=>{if(de==null)throw Ot(s.CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT);let ge=u(de);do{const Re=y(ge,ne);if(Re!==void 0)return O(Re,"get")?Re.get:void 0}while((ge=m(ge))!==null)};r.ObjectPrototype__lookupGetter__=X;const O=u.hasOwn||h(F.hasOwnProperty);r.ObjectHasOwn=O;const N=Array,G=N.isArray;r.ArrayIsArray=G;const H=N.prototype,K=h(H.join);r.ArrayPrototypeJoin=K;const $=h(H.push);r.ArrayPrototypePush=$;const z=h(H.toLocaleString);r.ArrayPrototypeToLocaleString=z;const Q=H[I];r.NativeArrayPrototypeSymbolIterator=Q;const oe=h(Q);r.ArrayPrototypeSymbolIterator=oe;const Z=Math.trunc;r.MathTrunc=Z;const le=ArrayBuffer;r.NativeArrayBuffer=le;const k=le.isView;r.ArrayBufferIsView=k;const q=le.prototype,te=h(q.slice);r.ArrayBufferPrototypeSlice=te;const W=l(q,"byteLength");r.ArrayBufferPrototypeGetByteLength=W;const Y=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;r.NativeSharedArrayBuffer=Y;const J=Y&&l(Y.prototype,"byteLength");r.SharedArrayBufferPrototypeGetByteLength=J;const ie=m(Uint8Array);r.TypedArray=ie;const ce=ie.from,ae=ie.prototype;r.TypedArrayPrototype=ae;const ue=ae[I];r.NativeTypedArrayPrototypeSymbolIterator=ue;const V=h(ae.keys);r.TypedArrayPrototypeKeys=V;const B=h(ae.values);r.TypedArrayPrototypeValues=B;const re=h(ae.entries);r.TypedArrayPrototypeEntries=re;const me=h(ae.set);r.TypedArrayPrototypeSet=me;const _e=h(ae.reverse);r.TypedArrayPrototypeReverse=_e;const ye=h(ae.fill);r.TypedArrayPrototypeFill=ye;const Me=h(ae.copyWithin);r.TypedArrayPrototypeCopyWithin=Me;const Se=h(ae.sort);r.TypedArrayPrototypeSort=Se;const he=h(ae.slice);r.TypedArrayPrototypeSlice=he;const Ee=h(ae.subarray);r.TypedArrayPrototypeSubarray=Ee;const Ae=l(ae,"buffer");r.TypedArrayPrototypeGetBuffer=Ae;const Ie=l(ae,"byteOffset");r.TypedArrayPrototypeGetByteOffset=Ie;const be=l(ae,"length");r.TypedArrayPrototypeGetLength=be;const we=l(ae,E);r.TypedArrayPrototypeGetSymbolToStringTag=we;const Oe=Uint16Array;r.NativeUint16Array=Oe;const Be=(...de)=>d(ce,Oe,de);r.Uint16ArrayFrom=Be;const We=Uint32Array;r.NativeUint32Array=We;const ee=Float32Array;r.NativeFloat32Array=ee;const pe=m([][I]());r.ArrayIteratorPrototype=pe;const ve=h(pe.next);r.ArrayIteratorPrototypeNext=ve;const Te=h(function*(){}().next);r.GeneratorPrototypeNext=Te;const Pe=m(pe);r.IteratorPrototype=Pe;const ke=DataView.prototype,je=h(ke.getUint16);r.DataViewPrototypeGetUint16=je;const it=h(ke.setUint16);r.DataViewPrototypeSetUint16=it;const Ot=TypeError;r.NativeTypeError=Ot;const qe=RangeError;r.NativeRangeError=qe;const dt=WeakSet;r.NativeWeakSet=dt;const xt=dt.prototype,Wn=h(xt.add);r.WeakSetPrototypeAdd=Wn;const mr=h(xt.has);r.WeakSetPrototypeHas=mr;const gr=WeakMap;r.NativeWeakMap=gr;const Oi=gr.prototype,To=h(Oi.get);r.WeakMapPrototypeGet=To;const j=h(Oi.has);r.WeakMapPrototypeHas=j;const se=h(Oi.set);r.WeakMapPrototypeSet=se},700:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.IsDetachedBuffer=C,r.SpeciesConstructor=p,r.ToIntegerOrInfinity=d,r.ToLength=S,r.defaultCompare=y;var s=f(554),h=f(930),l=f(983);function d(m){const D=+m;return(0,l.NumberIsNaN)(D)||D===0?0:(0,l.MathTrunc)(D)}function S(m){const D=d(m);return D<0?0:D<l.MAX_SAFE_INTEGER?D:l.MAX_SAFE_INTEGER}function p(m,D){if(!(0,s.isObject)(m))throw(0,l.NativeTypeError)(h.THIS_IS_NOT_AN_OBJECT);const P=m.constructor;if(P===void 0)return D;if(!(0,s.isObject)(P))throw(0,l.NativeTypeError)(h.THE_CONSTRUCTOR_PROPERTY_VALUE_IS_NOT_AN_OBJECT);const M=P[l.SymbolSpecies];return M??D}function C(m){if((0,s.isSharedArrayBuffer)(m))return!1;try{return(0,l.ArrayBufferPrototypeSlice)(m,0,0),!1}catch{}return!0}function y(m,D){const P=(0,l.NumberIsNaN)(m),M=(0,l.NumberIsNaN)(D);if(P&&M)return 0;if(P)return 1;if(M||m<D)return-1;if(m>D)return 1;if(m===0&&D===0){const w=(0,l.ObjectIs)(m,0),T=(0,l.ObjectIs)(D,0);if(!w&&T)return-1;if(w&&!T)return 1}return 0}},216:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.hfround=l;var s=f(605),h=f(983);function l(d){const S=+d;if(!(0,h.NumberIsFinite)(S)||S===0)return S;const p=(0,s.roundToFloat16Bits)(S);return(0,s.convertToNumber)(p)}},650:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0});var s=f(310);r.Float16Array=s.Float16Array,r.isFloat16Array=s.isFloat16Array;var h=f(146);r.isTypedArray=h.isTypedArray;var l=f(557);r.getFloat16=l.getFloat16,r.setFloat16=l.setFloat16;var d=f(216);r.hfround=d.hfround},146:(c,r,f)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isTypedArray=l;var s=f(310),h=f(554);function l(d){return(0,h.isNativeTypedArray)(d)||(0,s.isFloat16Array)(d)}}},n={};function o(c){var r=n[c];if(r!==void 0)return r.exports;var f=n[c]={exports:{}};return t[c].call(f.exports,f,f.exports,o),f.exports}o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}();var a=o(607);return a})())})(j0);const hr=(i,{type:e=et.FLOAT,numComponents:t=1,dimensions:n=1}={})=>{const o=So();console.log(i,"making layers");const a=new et.GPULayer(o,{name:`current_${i}`,type:e,dimensions:n,numComponents:t,numBuffers:2}),c=new et.GPULayer(o,{name:`target_${i}`,type:e,dimensions:n,numComponents:t,numBuffers:1}),r=new _t;c.attachToThreeTexture(r);const f=new et.GPULayer(o,{name:`view_${i}`,type:e,dimensions:n,numComponents:t,numBuffers:1}),s=new _t;return f.attachToThreeTexture(s),{current:a,target:c,view:f,viewTexture:s,targetTexture:r}},dn=Ze.infinite(()=>hr("position",{numComponents:3})),ct=Ze.infinite(()=>hr("color",{numComponents:4})),qt=Ze.infinite(()=>hr("size",{numComponents:1})),Kt=Ze.infinite(()=>hr("emphasis",{numComponents:1}));Ze.infinite(()=>hr("cameraParameters",{numComponents:1,type:et.FLOAT,dimensions:9}));const $0=i=>{[dn(),ct(),qt(),Kt()].forEach(({current:t,target:n,view:o,viewTexture:a,targetTexture:c})=>{t.resize(i),n.resize(i),n.attachToThreeTexture(c),o.resize(i),o.attachToThreeTexture(a)})},Y0=Ze.infinite(()=>new et.GPUProgram(So(),{name:"interpolation",fragmentShader:`
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
      }
    `,uniforms:[{name:"uTargetPositions",type:et.INT,value:0},{name:"uCurrentPositions",type:et.INT,value:1},{name:"uTargetColors",type:et.INT,value:2},{name:"uCurrentColors",type:et.INT,value:3},{name:"uTargetSizes",type:et.INT,value:4},{name:"uCurrentSizes",type:et.INT,value:5},{name:"uTargetEmphasis",type:et.INT,value:6},{name:"uCurrentEmphasis",type:et.INT,value:7},{name:"uMixRatio",type:et.FLOAT,value:.1}]})),q0=new X0({saturation:.7,lightness:.6}),K0=async()=>{const i="https://dat-ecosystem.org/dat-garden-rake/",e=await fetch(`${i}index.json`).then(c=>c.json()),t=`${i}${e.latest}`,[n,o,a]=await Promise.all([fetch(t+"/../valuenetwork.json").then(c=>c.json()),fetch(t+"/../projects.json").then(c=>c.json()),fetch(t+"/../organizations.json").then(c=>c.json())]);return{valueNetworkData:n,projectsData:o,organizationsData:a}},yu=Ze.promise(K0),xu=so(new nv),Su=so(new iv),Z0=i=>Math.max(4*Math.log(2*(i?.length||1)**1.2),2),J0=i=>i.replace(/^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z0-9-]+/i,"").replace(/\/$/,"").replace(/^\//,"").replace(/[^A-Za-z0-9\.]/gi,"-").replace(/-+/g,"-").replace(/^package-/,"").replace(/-v-/,"-"),hn=Ze.promise(async()=>{const{valueNetworkData:i,projectsData:e,organizationsData:t}=await yu(),n=Object.entries(i).map(([s,{dependents:h,owner:l,dependencies:d}],S)=>({index:S,project:s,id:s,data:e[s],navId:J0(s),owner:l,ownerData:t[l],color:[...q0.rgb(l||s||String(S)).map(p=>p/255),1],size:Z0(h),dependents:h,dependencies:d}));li(n.map(s=>[s.index,s]));const o=li(n.map(s=>[s.project,s])),a=li(n.map(s=>[s.data.name,s])),c=li(n.map(s=>[s.navId,s]));let r=Object.entries(i).flatMap(([s,{dependents:h,dependencies:l}])=>(h||[]).map(d=>({source:d,sourceNode:o[d],sourceIndex:n.find(S=>S.project===d).index,target:s,targetNode:o[s],targetIndex:n.find(S=>S.project===s).index})).concat((l||[]).map(d=>({source:s,sourceNode:o[s],sourceIndex:n.find(S=>S.project===s).index,target:d,targetNode:o[d],targetIndex:n.find(S=>S.project===d).index})))).filter(s=>s);r=H0(r,(s,h)=>s.sourceIndex===h.sourceIndex&&s.targetIndex===h.targetIndex);const f=r.map(({sourceIndex:s,targetIndex:h})=>[s,h]);return li(f.map(([s,h],l)=>[`${s}-${h}`,l])),li(f.map(([s,h],l)=>[`${s}-${h}`,r[l]])),{nodes:n,links:r,linkIndexPairs:f,nodesByNavId:c,nodesByProject:o,nodesByProjectName:a}}),Q0=async()=>{const i=await yu();return await xu.buildGraph(i)};let Tu;const $c=()=>Tu,ey=async(i,e=Su.useD3ForceSimulator)=>await e(i,Zi(t=>{dn().target.setFromArray(t),Tu=t})),Eu=i=>{const e=$c()?$c():[],t=i.index;return[e[t*3],e[t*3+1],e[t*3+2]]},ty=async i=>await ey(i||await prepareVisualizerData(),Su.useD3ForceSimulator),{doQuery:Yc,buildGraph:wx}=xu;function ny(){return new Worker("/dat-garden-visualization/assets/animation-worker-f24637e7.js",{type:"module"})}var ma;const io=window,bi=io.trustedTypes,qc=bi?bi.createPolicy("lit-html",{createHTML:i=>i}):void 0,Wa="$lit$",xn=`lit$${(Math.random()+"").slice(9)}$`,bu="?"+xn,iy=`<${bu}>`,Mi=document,ir=()=>Mi.createComment(""),rr=i=>i===null||typeof i!="object"&&typeof i!="function",Mu=Array.isArray,ry=i=>Mu(i)||typeof i?.[Symbol.iterator]=="function",ga=`[ 	
\f\r]`,zi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kc=/-->/g,Zc=/>/g,Cn=RegExp(`>|${ga}(?:([^\\s"'>=/]+)(${ga}*=${ga}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jc=/'/g,Qc=/"/g,Au=/^(?:script|style|textarea|title)$/i,oy=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),an=oy(1),or=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),el=new WeakMap,_i=Mi.createTreeWalker(Mi,129,null,!1),ay=(i,e)=>{const t=i.length-1,n=[];let o,a=e===2?"<svg>":"",c=zi;for(let f=0;f<t;f++){const s=i[f];let h,l,d=-1,S=0;for(;S<s.length&&(c.lastIndex=S,l=c.exec(s),l!==null);)S=c.lastIndex,c===zi?l[1]==="!--"?c=Kc:l[1]!==void 0?c=Zc:l[2]!==void 0?(Au.test(l[2])&&(o=RegExp("</"+l[2],"g")),c=Cn):l[3]!==void 0&&(c=Cn):c===Cn?l[0]===">"?(c=o??zi,d=-1):l[1]===void 0?d=-2:(d=c.lastIndex-l[2].length,h=l[1],c=l[3]===void 0?Cn:l[3]==='"'?Qc:Jc):c===Qc||c===Jc?c=Cn:c===Kc||c===Zc?c=zi:(c=Cn,o=void 0);const p=c===Cn&&i[f+1].startsWith("/>")?" ":"";a+=c===zi?s+iy:d>=0?(n.push(h),s.slice(0,d)+Wa+s.slice(d)+xn+p):s+xn+(d===-2?(n.push(void 0),f):p)}const r=a+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[qc!==void 0?qc.createHTML(r):r,n]};class ar{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,c=0;const r=e.length-1,f=this.parts,[s,h]=ay(e,t);if(this.el=ar.createElement(s,n),_i.currentNode=this.el.content,t===2){const l=this.el.content,d=l.firstChild;d.remove(),l.append(...d.childNodes)}for(;(o=_i.nextNode())!==null&&f.length<r;){if(o.nodeType===1){if(o.hasAttributes()){const l=[];for(const d of o.getAttributeNames())if(d.endsWith(Wa)||d.startsWith(xn)){const S=h[c++];if(l.push(d),S!==void 0){const p=o.getAttribute(S.toLowerCase()+Wa).split(xn),C=/([.?@])?(.*)/.exec(S);f.push({type:1,index:a,name:C[2],strings:p,ctor:C[1]==="."?cy:C[1]==="?"?uy:C[1]==="@"?fy:mo})}else f.push({type:6,index:a})}for(const d of l)o.removeAttribute(d)}if(Au.test(o.tagName)){const l=o.textContent.split(xn),d=l.length-1;if(d>0){o.textContent=bi?bi.emptyScript:"";for(let S=0;S<d;S++)o.append(l[S],ir()),_i.nextNode(),f.push({type:2,index:++a});o.append(l[d],ir())}}}else if(o.nodeType===8)if(o.data===bu)f.push({type:2,index:a});else{let l=-1;for(;(l=o.data.indexOf(xn,l+1))!==-1;)f.push({type:7,index:a}),l+=xn.length-1}a++}}static createElement(e,t){const n=Mi.createElement("template");return n.innerHTML=e,n}}function Ai(i,e,t=i,n){var o,a,c,r;if(e===or)return e;let f=n!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[n]:t._$Cl;const s=rr(e)?void 0:e._$litDirective$;return f?.constructor!==s&&((a=f?._$AO)===null||a===void 0||a.call(f,!1),s===void 0?f=void 0:(f=new s(i),f._$AT(i,t,n)),n!==void 0?((c=(r=t)._$Co)!==null&&c!==void 0?c:r._$Co=[])[n]=f:t._$Cl=f),f!==void 0&&(e=Ai(i,f._$AS(i,e.values),f,n)),e}let sy=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:o}=this._$AD,a=((t=e?.creationScope)!==null&&t!==void 0?t:Mi).importNode(n,!0);_i.currentNode=a;let c=_i.nextNode(),r=0,f=0,s=o[0];for(;s!==void 0;){if(r===s.index){let h;s.type===2?h=new fs(c,c.nextSibling,this,e):s.type===1?h=new s.ctor(c,s.name,s.strings,this,e):s.type===6&&(h=new dy(c,this,e)),this._$AV.push(h),s=o[++f]}r!==s?.index&&(c=_i.nextNode(),r++)}return a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},fs=class wu{constructor(e,t,n,o){var a;this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cp=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ai(this,e,t),rr(e)?e===st||e==null||e===""?(this._$AH!==st&&this._$AR(),this._$AH=st):e!==this._$AH&&e!==or&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ry(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==st&&rr(this._$AH)?this._$AA.nextSibling.data=e:this.$(Mi.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ar.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const c=new sy(a,this),r=c.u(this.options);c.v(n),this.$(r),this._$AH=c}}_$AC(e){let t=el.get(e.strings);return t===void 0&&el.set(e.strings,t=new ar(e)),t}T(e){Mu(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new wu(this.k(ir()),this.k(ir()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}};class mo{constructor(e,t,n,o,a){this.type=1,this._$AH=st,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=st}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){const a=this.strings;let c=!1;if(a===void 0)e=Ai(this,e,t,0),c=!rr(e)||e!==this._$AH&&e!==or,c&&(this._$AH=e);else{const r=e;let f,s;for(e=a[0],f=0;f<a.length-1;f++)s=Ai(this,r[n+f],t,f),s===or&&(s=this._$AH[f]),c||(c=!rr(s)||s!==this._$AH[f]),s===st?e=st:e!==st&&(e+=(s??"")+a[f+1]),this._$AH[f]=s}c&&!o&&this.j(e)}j(e){e===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let cy=class extends mo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===st?void 0:e}};const ly=bi?bi.emptyScript:"";let uy=class extends mo{constructor(){super(...arguments),this.type=4}j(e){e&&e!==st?this.element.setAttribute(this.name,ly):this.element.removeAttribute(this.name)}},fy=class extends mo{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ai(this,e,t,0))!==null&&n!==void 0?n:st)===or)return;const o=this._$AH,a=e===st&&o!==st||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,c=e!==st&&(o===st||a);a&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}};class dy{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ai(this,e)}}const tl=io.litHtmlPolyfillSupport;tl?.(ar,fs),((ma=io.litHtmlVersions)!==null&&ma!==void 0?ma:io.litHtmlVersions=[]).push("2.7.1");const Xa=(i,e,t)=>{var n,o;const a=(n=t?.renderBefore)!==null&&n!==void 0?n:e;let c=a._$litPart$;if(c===void 0){const r=(o=t?.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=c=new fs(e.insertBefore(ir(),r),r,void 0,t??{})}return c._$AI(i),c},hy=i=>`
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent WHERE {
    ?dependent dependson: <${i}> .
  }`,py=i=>`
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependency WHERE {
    <${i}> dependson: ?dependency .
  }`;var ja;function Vr(i,e,t){return Math.min(Math.max(i||0,e),t)}function _a(i){return{r:Vr(i.r,0,255),g:Vr(i.g,0,255),b:Vr(i.b,0,255),a:Vr(i.a,0,1)}}function $a(i){return{r:255*i.r,g:255*i.g,b:255*i.b,a:i.a}}function Ya(i){return{r:i.r/255,g:i.g/255,b:i.b/255,a:i.a}}function nl(i,e){e===void 0&&(e=0);var t=Math.pow(10,e);return{r:Math.round(i.r*t)/t,g:Math.round(i.g*t)/t,b:Math.round(i.b*t)/t,a:i.a}}function va(i,e,t,n,o,a){return(1-e/t)*n+e/t*Math.round((1-i)*o+i*a)}function my(i,e,t,n,o){o===void 0&&(o={unitInput:!1,unitOutput:!1,roundOutput:!0}),o.unitInput&&(i=$a(i),e=$a(e)),i=_a(i);var a=(e=_a(e)).a+i.a-e.a*i.a,c=t(i,e,n),r=_a({r:va(i.a,e.a,a,i.r,e.r,c.r),g:va(i.a,e.a,a,i.g,e.g,c.g),b:va(i.a,e.a,a,i.b,e.b,c.b),a});return o.unitOutput?Ya(r):o.roundOutput?nl(r):nl(r,9)}function gy(i,e,t){return $a(t(Ya(i),Ya(e)))}function qa(i){return .3*i.r+.59*i.g+.11*i.b}function _y(i,e){var t=e-qa(i);return function(n){var o=qa(n),a=n.r,c=n.g,r=n.b,f=Math.min(a,c,r),s=Math.max(a,c,r);function h(d){return o+(d-o)*o/(o-f)}function l(d){return o+(d-o)*(1-o)/(s-o)}return f<0&&(a=h(a),c=h(c),r=h(r)),s>1&&(a=l(a),c=l(c),r=l(r)),{r:a,g:c,b:r}}({r:i.r+t,g:i.g+t,b:i.b+t})}function vy(i){return Math.max(i.r,i.g,i.b)-Math.min(i.r,i.g,i.b)}function yy(i,e){var t=["r","g","b"].sort(function(r,f){return i[r]-i[f]}),n=t[0],o=t[1],a=t[2],c={r:i.r,g:i.g,b:i.b};return c[a]>c[n]?(c[o]=(c[o]-c[n])*e/(c[a]-c[n]),c[a]=e):c[o]=c[a]=0,c[n]=0,c}function xy(i,e){return _y(yy(e,vy(i)),qa(i))}ja=function(i,e){return my(i,e,gy,xy,{unitInput:!0,unitOutput:!0})};var Sy={grad:.9,turn:360,rad:360/(2*Math.PI)},on=function(i){return typeof i=="string"?i.length>0:typeof i=="number"},at=function(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*i)/t+0},Ct=function(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),i>t?t:i>e?i:e},Pu=function(i){return(i=isFinite(i)?i%360:0)>0?i:i+360},il=function(i){return{r:Ct(i.r,0,255),g:Ct(i.g,0,255),b:Ct(i.b,0,255),a:Ct(i.a)}},ya=function(i){return{r:at(i.r),g:at(i.g),b:at(i.b),a:at(i.a,3)}},Ty=/^#([0-9a-f]{3,8})$/i,zr=function(i){var e=i.toString(16);return e.length<2?"0"+e:e},Ru=function(i){var e=i.r,t=i.g,n=i.b,o=i.a,a=Math.max(e,t,n),c=a-Math.min(e,t,n),r=c?a===e?(t-n)/c:a===t?2+(n-e)/c:4+(e-t)/c:0;return{h:60*(r<0?r+6:r),s:a?c/a*100:0,v:a/255*100,a:o}},Iu=function(i){var e=i.h,t=i.s,n=i.v,o=i.a;e=e/360*6,t/=100,n/=100;var a=Math.floor(e),c=n*(1-t),r=n*(1-(e-a)*t),f=n*(1-(1-e+a)*t),s=a%6;return{r:255*[n,r,c,c,f,n][s],g:255*[f,n,n,r,c,c][s],b:255*[c,c,f,n,n,r][s],a:o}},rl=function(i){return{h:Pu(i.h),s:Ct(i.s,0,100),l:Ct(i.l,0,100),a:Ct(i.a)}},ol=function(i){return{h:at(i.h),s:at(i.s),l:at(i.l),a:at(i.a,3)}},al=function(i){return Iu((t=(e=i).s,{h:e.h,s:(t*=((n=e.l)<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}));var e,t,n},qi=function(i){return{h:(e=Ru(i)).h,s:(o=(200-(t=e.s))*(n=e.v)/100)>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:e.a};var e,t,n,o},Ey=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,by=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,My=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ay=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ka={string:[[function(i){var e=Ty.exec(i);return e?(i=e[1]).length<=4?{r:parseInt(i[0]+i[0],16),g:parseInt(i[1]+i[1],16),b:parseInt(i[2]+i[2],16),a:i.length===4?at(parseInt(i[3]+i[3],16)/255,2):1}:i.length===6||i.length===8?{r:parseInt(i.substr(0,2),16),g:parseInt(i.substr(2,2),16),b:parseInt(i.substr(4,2),16),a:i.length===8?at(parseInt(i.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(i){var e=My.exec(i)||Ay.exec(i);return e?e[2]!==e[4]||e[4]!==e[6]?null:il({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(i){var e=Ey.exec(i)||by.exec(i);if(!e)return null;var t,n,o=rl({h:(t=e[1],n=e[2],n===void 0&&(n="deg"),Number(t)*(Sy[n]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return al(o)},"hsl"]],object:[[function(i){var e=i.r,t=i.g,n=i.b,o=i.a,a=o===void 0?1:o;return on(e)&&on(t)&&on(n)?il({r:Number(e),g:Number(t),b:Number(n),a:Number(a)}):null},"rgb"],[function(i){var e=i.h,t=i.s,n=i.l,o=i.a,a=o===void 0?1:o;if(!on(e)||!on(t)||!on(n))return null;var c=rl({h:Number(e),s:Number(t),l:Number(n),a:Number(a)});return al(c)},"hsl"],[function(i){var e=i.h,t=i.s,n=i.v,o=i.a,a=o===void 0?1:o;if(!on(e)||!on(t)||!on(n))return null;var c=function(r){return{h:Pu(r.h),s:Ct(r.s,0,100),v:Ct(r.v,0,100),a:Ct(r.a)}}({h:Number(e),s:Number(t),v:Number(n),a:Number(a)});return Iu(c)},"hsv"]]},sl=function(i,e){for(var t=0;t<e.length;t++){var n=e[t][0](i);if(n)return[n,e[t][1]]}return[null,void 0]},wy=function(i){return typeof i=="string"?sl(i.trim(),Ka.string):typeof i=="object"&&i!==null?sl(i,Ka.object):[null,void 0]},xa=function(i,e){var t=qi(i);return{h:t.h,s:Ct(t.s+100*e,0,100),l:t.l,a:t.a}},Sa=function(i){return(299*i.r+587*i.g+114*i.b)/1e3/255},cl=function(i,e){var t=qi(i);return{h:t.h,s:t.s,l:Ct(t.l+100*e,0,100),a:t.a}},Za=function(){function i(e){this.parsed=wy(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return i.prototype.isValid=function(){return this.parsed!==null},i.prototype.brightness=function(){return at(Sa(this.rgba),2)},i.prototype.isDark=function(){return Sa(this.rgba)<.5},i.prototype.isLight=function(){return Sa(this.rgba)>=.5},i.prototype.toHex=function(){return e=ya(this.rgba),t=e.r,n=e.g,o=e.b,c=(a=e.a)<1?zr(at(255*a)):"","#"+zr(t)+zr(n)+zr(o)+c;var e,t,n,o,a,c},i.prototype.toRgb=function(){return ya(this.rgba)},i.prototype.toRgbString=function(){return e=ya(this.rgba),t=e.r,n=e.g,o=e.b,(a=e.a)<1?"rgba("+t+", "+n+", "+o+", "+a+")":"rgb("+t+", "+n+", "+o+")";var e,t,n,o,a},i.prototype.toHsl=function(){return ol(qi(this.rgba))},i.prototype.toHslString=function(){return e=ol(qi(this.rgba)),t=e.h,n=e.s,o=e.l,(a=e.a)<1?"hsla("+t+", "+n+"%, "+o+"%, "+a+")":"hsl("+t+", "+n+"%, "+o+"%)";var e,t,n,o,a},i.prototype.toHsv=function(){return e=Ru(this.rgba),{h:at(e.h),s:at(e.s),v:at(e.v),a:at(e.a,3)};var e},i.prototype.invert=function(){return Xt({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},i.prototype.saturate=function(e){return e===void 0&&(e=.1),Xt(xa(this.rgba,e))},i.prototype.desaturate=function(e){return e===void 0&&(e=.1),Xt(xa(this.rgba,-e))},i.prototype.grayscale=function(){return Xt(xa(this.rgba,-1))},i.prototype.lighten=function(e){return e===void 0&&(e=.1),Xt(cl(this.rgba,e))},i.prototype.darken=function(e){return e===void 0&&(e=.1),Xt(cl(this.rgba,-e))},i.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},i.prototype.alpha=function(e){return typeof e=="number"?Xt({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):at(this.rgba.a,3);var t},i.prototype.hue=function(e){var t=qi(this.rgba);return typeof e=="number"?Xt({h:e,s:t.s,l:t.l,a:t.a}):at(t.h)},i.prototype.isEqual=function(e){return this.toHex()===Xt(e).toHex()},i}(),Xt=function(i){return i instanceof Za?i:new Za(i)},ll=[],Py=function(i){i.forEach(function(e){ll.indexOf(e)<0&&(e(Za,Ka),ll.push(e))})};function Ry(i,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var o in t)n[t[o]]=o;var a={};i.prototype.toName=function(c){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var r,f,s=n[this.toHex()];if(s)return s;if(c?.closest){var h=this.toRgb(),l=1/0,d="black";if(!a.length)for(var S in t)a[S]=new i(t[S]).toRgb();for(var p in t){var C=(r=h,f=a[p],Math.pow(r.r-f.r,2)+Math.pow(r.g-f.g,2)+Math.pow(r.b-f.b,2));C<l&&(l=C,d=p)}return d}},e.string.push([function(c){var r=c.toLowerCase(),f=r==="transparent"?"#0000":t[r];return f?new i(f).toRgb():null},"name"])}const Lu=({color:i})=>i,Iy=Ze.infinite(async(i=bn)=>{const{nodes:e,links:t}=await hn();return new Float32Array(e.map(Lu).flatMap(i))}),Cu=({size:i})=>Math.sqrt(i)/40,Ly=Ze.infinite(async(i=bn)=>{const{nodes:e,links:t}=await hn();return new Float32Array(e.map(Cu).map(i))}),Ou=async({colorMap:i=bn,sizeMap:e=bn,immediate:t=!1}={})=>{const n=await Iy(i),o=await Ly(e),a=ct(),c=qt(),r=Kt();a.target.setFromArray(n),c.target.setFromArray(o),r.target.setFromArray(new Float32Array(o.length).fill(0)),t&&(a.current.setFromArray(n),c.current.setFromArray(o),r.current.setFromArray(new Float32Array(o.length).fill(0)))},Ta=async(i,{colorMap:e=bn,sizeMap:t=bn,emphasis:n=0,immediate:o=!1}={})=>{const a=new Float32Array(e(Lu(i))),c=new Float32Array([t(Cu(i))]),r=new Float32Array([n]),f=ct(),s=qt(),h=Kt();f.target.setAtIndex1D(i.index,a),s.target.setAtIndex1D(i.index,c),h.target.setAtIndex1D(i.index,r),o&&(f.current.setAtIndex1D(i.index,a),s.current.setAtIndex1D(i.index,c),h.current.setAtIndex1D(i.index,r))},Cy={colorMap:i=>{const e=i.slice(0,3).reduce((t,n)=>t+n,0)/3;return[...i.slice(0,3).map(t=>e),.5]},sizeMap:i=>i*.5},Nu=async(i=!1)=>{await Ou({...Cy,immediate:i})},ul="this.parentNode.style.display='none'",fl="this.parentNode.style.display='initial'",Oy=i=>an`
  <div class="project">
    <h3><a target="_blank" href="${i.data?.homepage}">${i.data.name}</a></h3>
    <div class="description">${i.data.description}</div>
    <div class="links">
      <span class="owner">
        <div class="owner-name-container">
          ${i.ownerData.html_url?an`<a target="_blank" href="${i.ownerData.html_url}">${i.ownerData.name}</a>`:an`<span>${i.ownerData.name}</span>`}
        </div>
        <div class="avatar-container">
          <img class="avatar-stroke" src="${i.ownerData?.avatar_url}" onerror=${ul} onload=${fl} alt="">
          <img class="avatar" src="${i.ownerData?.avatar_url}" onerror=${ul} onload=${fl} alt="${i.ownerData?.name}">
        </div>
      </span>
      <span><a target="_blank" href="${i.project}">NPM</a></span>
      ${i.data?.repository?an`<span><a target="_blank" href="${i.data.repository}">Git</a></span>`:an``}
      ${i.data?.bugs?an`<span><a target="_blank" href="${i.data.bugs}">Issues</a></span>`:an``}
      <!-- <a href="${i.ownerData.html_url}">Owner Profile</a> -->
    </div>
  </div>

`,Ny=us(i=>{const e=document.getElementById("selection-info");if(i){const t=Oy(i);Xa(t,e)}else Xa(an``,e)},0),Uu=async(i,e=!0)=>{if(i){Ja(i.index);const t=Eu(i),n=hy(i.project),o=py(i.project),{nodesByProject:a,links:c}=await hn(),r=({sizeMap:f=bn,emphasis:s=1,colorMap:h=bn})=>(l,d)=>{d(["dependent","dependency"]).then(({dependent:S,dependency:p})=>{Ta(a[S?.value||i.project],{sizeMap:f,emphasis:s,colorMap:h}),Ta(a[p?.value||i.project],{sizeMap:f,emphasis:s,colorMap:h})})};Nu().then(()=>{Yc(n,Zi(r({sizeMap:f=>f*2,colorMap:f=>{const s={r:f[0],g:f[1],b:f[2],a:f[3]},h={r:57/255,g:179/255,b:83/255,a:.8},l=ja(s,h);return[l.r,l.g,l.b,l.a]}}))),Ta(i,{sizeMap:f=>f*4,emphasis:1}),Yc(o,Zi(r({sizeMap:f=>f*2,colorMap:f=>{const s={r:f[0],g:f[1],b:f[2],a:f[3]},h={r:0,g:102/255,b:209/255,a:.8},l=ja(s,h);return[l.r,l.g,l.b,l.a]}}))),e&&pl(t),e&&ml(Gu||75)})}else e&&ml(Bu||1500),e&&pl([0,0,0],4e3),Ou(),Ja(-1);Ny(i)},Uy=()=>{Uu(null)};window.initializeSelectionVisuals=Nu;let Du=-1;const Mn=()=>Du,Ja=i=>{Du=i},Dy=async()=>{const i=Mn(),{nodes:e}=await hn();return e[i]};Py([Ry]);const go=()=>{const i=document.documentElement,e=Xt(getComputedStyle(i).getPropertyValue("--selected-color")).toRgb();return new Float32Array([e.r/255,e.g/255,e.b/255,1])};var vi={},Fy=(i,e)=>{vi[i]??(vi[i]=[]),vi[i].push(e)},Gy=(i,e)=>{var t;(t=vi[i])==null||t.splice(vi[i].indexOf(e),1)},dl=async(i,e,t)=>{for(const n of vi[i]??[])await n(e,t)},Ea=i=>i.length>1&&i.endsWith("/")?i.slice(0,-1):i,By=i=>{var e;const t=(e=i.match(/(:[^/]+)/g))==null?void 0:e.map(n=>n.substring(1));return t&&{keys:t,regExp:new RegExp("^"+i.replace(/(:[^/]+)/g,"([^/]+)")+"$")}},Vy=(i,e)=>Object.fromEntries(e.map((t,n)=>[t,i[n+1]])),Fu=[],fi,zy=i=>{for(const e of Fu){const{pattern:t,regExp:n,keys:o}=e,a=n?i.match(n):t==="*"||t===i;if(a){const c=Array.isArray(a)?Vy(a,o):void 0;return{definition:e,params:c}}}},ki=async(i,e)=>{const t=zy(i),n=!!t,o=t?.params??{},a=fi;fi={path:i,params:o,matches:n,trigger:e},await dl("before-route",fi,a),await t?.definition.action(o,fi,a),await dl("route",fi,a)},_o={get currentRoute(){return fi},on:Fy,off:Gy,start({handleInitial:i=!0}={}){const e=window.location.hash!=""&&window.location.hash;i&&ki(e||window.location.pathname||"/","init"),window.addEventListener("popstate",()=>ki(window.location.pathname,"popstate")),window.addEventListener("hashchange",()=>{ki(window.location.hash,"hashchange")})},route(i,e){const t=Ea(i),{regExp:n,keys:o=[]}=By(i)||{};Fu.push({pattern:t,action:e,regExp:n,keys:o})},push(i){window.history.pushState(null,"",Ea(i)),ki(i,"push")},replace(i){window.history.replaceState(null,"",Ea(i)),ki(i,"replace")}};_o.route("#-",()=>{Uy()});_o.route("#project/:id",async(i,{trigger:e})=>{const{nodesByNavId:t}=await hn(),n=t[i.id];Uu(n,e!=="init")});var ky=`#version 300 es
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
  float distance;
  vec3 center;
  vec3 rotationCenter;
};

uniform int selectedIndex;
uniform vec4 selectedColor;
float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

float defaultFogVisibility = 0.3;
float defaultFogBoundaryClipZ = 1000.0;

float computeFog(float positionClipZ, float fogBoundaryClipZ) {
  float fogLevel = 1.0 - bump(positionClipZ, 1.0, fogBoundaryClipZ);
  fogLevel = mix(
    fogLevel, 
    0.0,
    smoothstep(400.0, 800.0, distance)
  );
  
  return fogLevel;
}

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

  
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.0001 );
  
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

vec3 desaturate(vec3 color, float amount) {
  float average = (color.r + color.g + color.b) / 3.0;
  return mix(color, vec3(average), amount);
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

  NodeGeometryBundle geo = nodeGeometry(
    nodePosition,
    vertexPosition,
    scale,
    CameraMatrices(
      projection,
      view,
      orthoFixedProjection,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );
  
  
  
  
  

  vec4 clipPosition = geo.orthographicClipPosition;
  
  #ifdef PICKER
    color = instanceIdToColor();
  #else
    color = mix(nodeColor, selectedColor*1.4, float(index == selectedIndex));

    
    vec3 selectedNodePosition = texelFetch(positionTexture, getTextureIndex(selectedIndex, textureDimensions), 0).xyz;

    float fogVisibility = 0.2;

    
    float selectedDistance = length(nodePosition - selectedNodePosition);
    float anythingSelected = float(selectedIndex > -1);
    
    
    float fog = min(computeFog(geo.globalClipPosition.z, defaultFogBoundaryClipZ), 1.0-isSelected);
    fog = min(fog, 1.0-nodeEmphasis);
    color.rgb *= mix(1.0, 0.5, fog);
    color.rgb = desaturate(color.rgb, (1.0-fogVisibility)*fog);
    
    
  #endif

  normal = mat3(orthoFixedView) * vertexNormal;
  gl_Position = clipPosition;
}`,Hy=`#version 300 es
precision lowp float;
in vec4 color;
in vec3 normal;

in vec3 position;
out vec4 fragColor;

void main() {
  
  
  const vec3 lightDirection = normalize(vec3(0.0, 0.0, 1.0));
  float light = dot(normal, lightDirection);
  fragColor = vec4(color.xyz*light, color.a);
  
  
  
}`,Wy=`#version 300 es
precision highp float;

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
  float distance;
  vec3 center;
  vec3 rotationCenter;
};

uniform int selectedIndex;
uniform vec4 selectedColor;
float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

float defaultFogVisibility = 0.3;
float defaultFogBoundaryClipZ = 1000.0;

float computeFog(float positionClipZ, float fogBoundaryClipZ) {
  float fogLevel = 1.0 - bump(positionClipZ, 1.0, fogBoundaryClipZ);
  fogLevel = mix(
    fogLevel, 
    0.0,
    smoothstep(400.0, 800.0, distance)
  );
  
  return fogLevel;
}

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

  
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.0001 );
  
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

vec3 desaturate(vec3 color, float amount) {
  float average = (color.r + color.g + color.b) / 3.0;
  return mix(color, vec3(average), amount);
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

  NodeGeometryBundle geo = nodeGeometry(
    nodePosition,
    vertexPosition,
    scale,
    CameraMatrices(
      projection,
      view,
      orthoFixedProjection,
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );
  
  
  
  
  

  vec4 clipPosition = geo.orthographicClipPosition;
  
  #ifdef PICKER
    color = instanceIdToColor();
  #else
    color = mix(nodeColor, selectedColor*1.4, float(index == selectedIndex));

    
    vec3 selectedNodePosition = texelFetch(positionTexture, getTextureIndex(selectedIndex, textureDimensions), 0).xyz;

    float fogVisibility = 0.2;

    
    float selectedDistance = length(nodePosition - selectedNodePosition);
    float anythingSelected = float(selectedIndex > -1);
    
    
    float fog = min(computeFog(geo.globalClipPosition.z, defaultFogBoundaryClipZ), 1.0-isSelected);
    fog = min(fog, 1.0-nodeEmphasis);
    color.rgb *= mix(1.0, 0.5, fog);
    color.rgb = desaturate(color.rgb, (1.0-fogVisibility)*fog);
    
    
  #endif

  normal = mat3(orthoFixedView) * vertexNormal;
  gl_Position = clipPosition;
}`,Xy=`#version 300 es
precision highp float;

flat in vec4 color;
out vec4 fragColor;

void main() {
  fragColor = color;
}`,jy=`#version 300 es
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
flat out vec2 sourcePosition2D;
flat out vec2 targetPosition2D;
out float isSource;
out float isTarget;
out float emphasis;
out float selected;
out float hovering; 
out float v;
out float y;

out float offsetRadius2D;

uniform vec2 mousePosition;

uniform cameras {
  mat4 projection;
  mat4 view;
  mat4 orthoFixedProjection;
  mat4 orthoFixedView;
  mat4 orthoZoomedProjection;
  mat4 orthoZoomedView;
  float distance;
  vec3 center;
  vec3 rotationCenter;
};

uniform int selectedIndex;
uniform vec4 selectedColor;
float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

float defaultFogVisibility = 0.3;
float defaultFogBoundaryClipZ = 1000.0;

float computeFog(float positionClipZ, float fogBoundaryClipZ) {
  float fogLevel = 1.0 - bump(positionClipZ, 1.0, fogBoundaryClipZ);
  fogLevel = mix(
    fogLevel, 
    0.0,
    smoothstep(400.0, 800.0, distance)
  );
  
  return fogLevel;
}

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

  
  vec3 orthographicNDC = vec3(localNDC.xy + globalNDC.xy, globalNDC.z + (localNDC.z - 0.99)*0.0001 );
  
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

uniform vec2 viewport;

uniform int hoveringIndex;

vec4 edgeGeometry(
  in vec3 nodePosition,
  in vec3 vertexPosition,
  in vec2 edgeDirection,
  float scale,
  float flatness,
  in CameraMatrices cam
) {
  vec2 normalizedEdgeDirection = normalize(edgeDirection);
  vec2 edgePerpendicular = vec2(-normalizedEdgeDirection.y, normalizedEdgeDirection.x)*scale/3.0;
  vec4 position = cam.projection * cam.view * vec4(nodePosition, 1.0);
  vec4 positionNDC = position / position.w;

  vec4 positionClip = vec4(position.xy + vertexPosition.y*1.0 * edgePerpendicular, position.zw);

  vec4 positionFixedStrokeNDC = positionNDC + vec4(vertexPosition.y * edgePerpendicular, 0.0, 0.0);
  vec4 positionFixedStrokeClip = positionFixedStrokeNDC * position.w;

  return mix(positionClip, positionFixedStrokeClip, flatness);
}

vec3 desaturate(vec3 color, float amount) {
  float average = (color.r + color.g + color.b) / 3.0;
  return mix(color, vec3(average), amount);
}

void main() {
  selected = float(selectedIndex == edgeIndices.x || selectedIndex == edgeIndices.y);
  hovering = float(hoveringIndex == edgeIndices.x || hoveringIndex == edgeIndices.y);
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
  
  
  

  
  
  
  vec4 sourcePositionClip = projection * view * vec4(sourceNodePosition, 1.0);
  vec4 targetPositionClip = projection * view * vec4(targetNodePosition, 1.0);
  
  vec2 sourcePosition2DNDC = sourcePositionClip.xy/sourcePositionClip.w;
  vec2 targetPosition2DNDC = targetPositionClip.xy/targetPositionClip.w;
  
  
  sourcePosition2D = (sourcePosition2DNDC + 1.0) * 0.5 * viewport;
  targetPosition2D = (targetPosition2DNDC + 1.0) * 0.5 * viewport;
  edgeLength2D = length(targetPosition2D - sourcePosition2D);

  edgeDirection = normalize(targetPositionClip.xyz/targetPositionClip.w - sourcePositionClip.xyz/sourcePositionClip.w).xy;
  edgeLength = length(targetNodePosition.xyz - sourceNodePosition.xyz);

  
  

  

  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  

  
  

  
  
  
  

  float sourceSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0).r;
  float targetSize = texelFetch(sizeTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0).r;

  size = sourceSize*isSource + targetSize*isTarget;
  
  
  size *= 0.2;

  position = edgeGeometry(
    nodePosition,
    vertexOffset,
    edgeDirection,
    size,
    1.0,
    
    CameraMatrices(
      projection,
      
      view,
      orthoFixedProjection,
      
      orthoFixedView,
      orthoZoomedProjection,
      orthoZoomedView
    )
  );

  
  vec4 sourceColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.x, textureDimensions), 0);
  sourceColor = mix(sourceColor, selectedColor, float(selectedIndex == edgeIndices.x));
  vec4 targetColor = texelFetch(colorTexture, getTextureIndex(edgeIndices.y, textureDimensions), 0);
  targetColor = mix(targetColor, selectedColor, float(selectedIndex == edgeIndices.y));
  color += sourceColor*isSource;
  color += targetColor*isTarget;

  
  color.rgb = desaturate(color.rgb, mix(1.0, 0.1, emphasis));
  color.a *= mix(0.2, 1.0, mix(1.0, emphasis, isAnySelected));
  color.a *= mix(0.4, 1.0, mix(1.0, selected, isAnySelected));
  color.a *= mix(0.2, 1.0, isAnySelected);
  
  float fog = computeFog(position.z, defaultFogBoundaryClipZ/3.0);
  fog = min(fog, 1.0 - selected);
  fog = min(fog, 1.0 - emphasis);
  color.a *= mix(1.0, 0.2, fog);
  
  
  
  gl_Position = position;
  y = vertexOffset.y;
  v = segmentPosition.y;

  

  
  
  
  
  

  
  
  
  
}`,$y=`#version 300 es

precision highp float;

in float selected;
in float isTarget;

in vec4 color;

in float emphasis;
in float size;
in float offsetRadius2D;

flat in float edgeLength;
flat in float edgeLength2D;
flat in vec2 sourcePosition2D;
flat in vec2 targetPosition2D;
in float y;
in float v;

out vec4 fragColor;

const float PI = 3.1415926535897932384626433832795;
const float freq = 1.0;

uniform float time;
uniform float devicePixelRatio;
uniform sampler2D nodeDepthTexture;

float bump(float x, float q, float w) {
  float clamped_x = clamp(x/w, -0.5, 0.5);
  float y = pow(exp(1.0 - 1.0 / (1.0 - pow(2.0*clamped_x, 2.0))), q);
  return y;
}

float wave(float t, float freq){ return pow(sin(t * freq * PI), 2.0); }
void main() {
  
  float u_2D = length(gl_FragCoord.xy/devicePixelRatio - sourcePosition2D)/edgeLength2D;
  fragColor = color;
  
  float u_3D = isTarget;
  
  
  

  
  float u_hybrid = mix(u_2D, u_3D, 0.5);
  float endBumpsMellow = 
    bump(u_hybrid,       1.0, 0.5) +
    bump(u_hybrid - 1.0, 1.0, 0.5);
    
  float endBumpsFirm = 
    bump(u_hybrid,       1.0, 0.1) +
    bump(u_hybrid - 1.0, 1.0, 0.1);

  
  float otherEndBumps = 
    bump(u_3D      , 1.0, offsetRadius2D/edgeLength) +
    bump(u_3D - 1.0, 1.0, offsetRadius2D/edgeLength);

  
  
  float frequency = edgeLength2D / 4.0;
  float waveSpeed = 4.0;
  float waves = mix(
    1.0,
    wave(u_2D + time/frequency * waveSpeed, frequency), 
    mix(0.5, 1.0, emphasis) 
  );

  
  float highFrequency = edgeLength/4.0;
  float pulseSpeed = 20.0/edgeLength;
  float pulse = pow(wave(u_3D + time * pulseSpeed, 1.0), edgeLength2D);
  
  
  fragColor.rgb = mix(fragColor.rgb, vec3(1.0, 1.0, 0.0), mix(0.0, pulse, 0.1));
  
  
  fragColor.a *= mix(1.0, waves, 1.0-pulse);
  
  
  fragColor.a *= bump(
    v, 
    1.0, 
    (pulse * mix(0.2, 0.4, selected) * wave(u_3D, highFrequency)) + 0.6
  );
  
  
  
  
  
  fragColor.a *= mix(0.4, 1.0, selected);
  
  
  fragColor.a *= mix(1.0, 0.0, mix(endBumpsMellow, endBumpsFirm, pulse));

  
  float nodeDepth = texelFetch(nodeDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
  
  gl_FragDepth = max(gl_FragCoord.z, nodeDepth) - 0.0001;

  
  
  

  
  
  
}`;const sr=Ze.infinite(()=>{let i=new wi(1,1,1);const e=new cu;e.setAttribute("vertexPosition",i.attributes.position),e.setAttribute("vertexNormal",i.attributes.normal),e.setIndex(i.index),e.setAttribute("index",new tr(new Int32Array([]),1));const t=new za({vertexShader:ky,fragmentShader:Hy}),n=new za({vertexShader:Wy,fragmentShader:Xy,depthWrite:!0});e.setAttribute("index",new tr(new Int32Array([1,2,3,4]),1)),t.uniformsGroups=[uu()];const o=new kt(e,t),a=new kt(e,n);return{mesh:o,pickerMesh:a}}),Yy=()=>{const{mesh:i,pickerMesh:e}=sr();i.material.uniforms={positionTexture:{value:dn().viewTexture},colorTexture:{value:ct().viewTexture},sizeTexture:{value:qt().viewTexture},emphasisTexture:{value:Kt().viewTexture},textureDimensions:{value:[ct().view.width,ct().view.height]},mousePosition:{value:xo()},selectedIndex:{value:-1},selectedColor:{value:go()},hoveringIndex:{value:pr()},time:{value:performance.now()/1e3}},e.material.uniforms=i.material.uniforms,i.material.needsUpdate=!0,e.material.needsUpdate=!0},qy=()=>{const{mesh:i,pickerMesh:e}=sr();for(const t of[i.material.uniforms,e.material.uniforms])t.positionTexture.value=dn().viewTexture,t.colorTexture.value=ct().viewTexture,t.sizeTexture.value=qt().viewTexture,t.emphasisTexture.value=Kt().viewTexture,t.textureDimensions.value=[ct().view.width,ct().view.height],t.mousePosition.value=xo(),t.selectedIndex.value=Mn(),t.selectedColor.value=go(),t.hoveringIndex.value=pr(),t.time.value=performance.now()/1e3},Ky=Ze.infinite(i=>{const e=new Int32Array(i);for(let t=0;t<i;t++)e[t]=t;return new tr(e,1)}),Zy=i=>{console.log("loading node vertex array",i);const{mesh:e,pickerMesh:t}=sr(),n=Ky(i);e.geometry.setAttribute("index",n),t.geometry.setAttribute("index",n)},vo=Ze.infinite(()=>{const i=new as(.5,.5,1,4,4,!0),e=new cu;e.setAttribute("segmentOffset",i.attributes.position),e.setIndex(i.index),e.setAttribute("edgeIndices",new tr(new Int32Array([1,2,3]),2));const t=new za({vertexShader:jy,fragmentShader:$y,uniforms:{},depthTest:!!es(),depthWrite:!0,depthFunc:Jr,transparent:!0});return new kt(e,t)}),Jy=Ze.infinite(i=>{const e=new Int32Array(i.flat());return new tr(e,2)}),Qy=i=>{const e=vo(),t=Jy(i);e.geometry.setAttribute("edgeIndices",t)},ex=()=>{const i=vo();i.material.uniforms={positionTexture:{value:dn().viewTexture},colorTexture:{value:ct().viewTexture},sizeTexture:{value:qt().viewTexture},nodeDepthTexture:{value:yo().depthTexture},emphasisTexture:{value:Kt().viewTexture},textureDimensions:{value:[ct().current.width,ct().current.height]},mousePosition:{value:xo()},selectedIndex:{value:Mn()},selectedColor:{value:go()},hoveringIndex:{value:pr()},time:{value:performance.now()/1e3},viewport:{value:[0,0]},devicePixelRatio:{value:window.devicePixelRatio}},i.material.uniformsGroups=[uu()],i.material.needsUpdate=!0},hl=new Xe,tx=()=>{const{renderer:i}=Li();i.getSize(hl);const e=vo();for(const t of[e.material.uniforms])t.positionTexture.value=dn().viewTexture,t.colorTexture.value=ct().viewTexture,t.sizeTexture.value=qt().viewTexture,t.emphasisTexture.value=Kt().viewTexture,t.textureDimensions.value=[ct().view.width,ct().view.height],t.nodeDepthTexture.value=yo().depthTexture,t.mousePosition.value=xo(),t.selectedIndex.value=Mn(),t.selectedColor.value=go(),t.hoveringIndex.value=pr(),t.time.value=performance.now()/1e3,t.viewport.value=hl.toArray()},Li=Ze.infinite(()=>{const{canvas:i,gl:e}=wt(),t=new ia,n=new ia,o=new ia,a=new Lt(75,window.innerWidth/window.innerHeight,.5,1e3);a.position.z=50;const c=new su({canvas:i,context:e});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(window.devicePixelRatio);const r=vo();t.add(r);const f=sr().mesh;t.add(f);const s=sr().pickerMesh;return o.add(s),{scene:t,depthScene:n,pickerScene:o,camera:a,renderer:c,nodeVisualizerMesh:f,edgeVisualizerMesh:r,nodePickerMesh:s}}),ds=Ze.infinite(()=>{const{canvas:i}=wt();return new un(i.width,i.height,{stencilBuffer:!1})}),yo=Ze.infinite(()=>{const{canvas:i}=wt();return new un(i.width,i.height,{depthTexture:new au(i.width,i.height),depthBuffer:!0,stencilBuffer:!1})}),nx=i=>{const{canvas:e}=wt(),t=e.getBoundingClientRect(),n=(i.clientX-t.left)/t.width,o=(i.clientY-t.top)/t.height;return{x:n*2-1,y:-(o*2-1)}},Qa=so(new ny),{globalCamera:$r,updateCameras:ix,setCameraCenter:pl,setCameraDistance:ml,zoomGlobalCamera:gl,panGlobalCamera:_l,startZooming:vl,startPanning:yl,stopPanning:xl,computeScreenPosition:rx}=Qa,es=Ze.infinite(()=>window.matchMedia("(pointer:fine)").matches);let Gu,Bu;const Vu=500,ox=Vu,Sl=async()=>{Qa.stopZooming();const i=Mn(),e=(await Qa.getGlobalCameraParams()).distance;i>-1?Gu=Math.min(e,Vu):Bu=Math.max(e,ox)},Rt={},Tl=new Uint8Array(4).fill(0);let ba=-1,Yr=!1,qr=0,Ki=0;const Ma=()=>{qr++},xo=()=>[Rt.x,Rt.y],ax=()=>[Rt.pickerX,Rt.pickerY],Kr=({x:i,y:e})=>{const{canvas:t}=wt();Rt.x=i,Rt.y=e,Rt.canvasX=(i+1)/2*t.width,Rt.canvasY=(e+1)/2*t.height;const n=window.devicePixelRatio||1;Rt.pickerX=Math.floor(Rt.canvasX/n),Rt.pickerY=Math.floor(Rt.canvasY/n)};let ro=-1;const pr=()=>ro,sx=async()=>{const{nodes:i}=await hn();return i[ro]},cx=Ze.infinite(()=>{const{canvas:i}=wt();jr(i).on("touchmove",Kr).on("mousemove",Kr),jr(i).on("mousemove",()=>{!Yr&&hx()}),jr(i).on("touchmove",Ma).on("pinchmove",Ma).on("mousemove",Ma),i.addEventListener("pointerdown",async e=>{const t=async([o,a])=>{const c=Ki>.03||qr>5;if(Yr=!1,!c){const r=pr();Ja(r),mx().then(f=>{i.dispatchEvent(new CustomEvent("selected",{detail:{selectedIndex:r,info:f}}))}),i.dispatchEvent(new CustomEvent("tap",{detail:{selectedIndex:r}}))}},n=new Promise((o,a)=>{i.addEventListener("pointerup",o,{once:!0}),setTimeout(()=>a("pointer event timed out after 100ms"),200)});Yr=!0,qr=0,Ki=0,Promise.all([n,px()]).then(t).catch(()=>{}),setTimeout(()=>{Ki>.03||qr>5||hs()},2),Kr(nx(e))}),i.addEventListener("selected",e=>{const t=e.detail.info;console.log("preparing to navigate:",t),_o.push(t?`#project/${t?.navId}`:"#-")}),i.addEventListener("hover",async e=>{const{nodes:t}=await hn(),n=e.detail.wasHoveredIndex;n>-1&&t[n];const o=e.detail.nowHoveredIndex,a=o>-1?t[o]:null;Mn()>-1&&t[Mn()],a?ro=a?.index||-1:ro=-1})}),kr=Math.PI/3,lx=()=>{const{canvas:i}=wt();i.addEventListener("wheel",e=>{const t=Math.exp(e.deltaY/i.clientHeight*2)-1,n=Math.sign(t);vl(),gl(0,0,n*Math.min(Math.abs(t),.06)),e.preventDefault(),Sl()},{passive:!1}),jr(i).on("mousemove",function(e){!e.active||e.buttons!==1||(Ki+=Math.sqrt(Math.pow(e.dx,2)+Math.pow(e.dy,2)),e.mods.shift?(yl(),_l(e.dx,e.dy)):e.mods.meta?$r.pivot(e.dx,e.dy):($r.rotate(-e.dx*kr,-e.dy*kr),xl()),e.originalEvent.preventDefault())}).on("touchmove",function(e){Kr(e),e.active&&(Ki+=Math.sqrt(Math.pow(e.dx,2)+Math.pow(e.dy,2)),$r.rotate(-e.dx*kr,-e.dy*kr))}).on("pinchmove",function(e){e.active&&(Yr=!0,yl(),vl(),gl(0,0,1-e.zoomx),_l(e.dx,e.dy))}).on("touchstart",e=>e.originalEvent.preventDefault()).on("pinchstart",e=>e.originalEvent.preventDefault()).on("pinchend",()=>{xl(),Sl()})},ux=i=>i[0]+i[1]*256+i[2]*256*256-1;let Hi=null;const fx=()=>{const i=wt().gl,e=()=>i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);return Hi?i?.clientWaitSync(Hi,0,0)===i?.CONDITION_SATISFIED?(i.deleteSync(Hi),Hi=e(),!0):!1:(Hi=e(),!1)};let Aa=0,El=!1;const hs=()=>{const i=fx(),{canvas:e}=wt(),t=wt().gl;if(Aa>10&&(El=!0,console.warn("picker guard failed")),!i&&!El)console.log("not ready to read picker pixel yet"),Aa+=1;else{Aa=0;const{renderer:n}=Li(),o=ax(),a=ds();n.readRenderTargetPixels(a,...o,1,1,Tl),t.flush();const c=ux(Tl);setTimeout(()=>{e.dispatchEvent(new CustomEvent("hover",{detail:{wasHoveredIndex:ba,nowHoveredIndex:c}}))},1),c>-1&&setTimeout(()=>{e.dispatchEvent(new CustomEvent("hoveron",{detail:{wasHoveredIndex:ba,nowHoveredIndex:c}}))},1),ba=c}},dx=Ha(hs,5e3),hx=us(hs,400),px=async()=>new Promise(i=>{const e=wt().canvas,t=n=>{i(n.detail)};e.addEventListener("hover",t,{once:!0})}),mx=async()=>{const{nodes:i}=await hn();return i[Mn()]},ps=({classes:i,htmlTemplate:e,applyScreenPositionStyle:t}={})=>{t=t||((f,s)=>{s.style.left=`${f[0]}vw`,s.style.bottom=`${f[1]}vh`});const n=document.createElement("div");n.classList.add("cursor"),i?.forEach(f=>n.classList.add(f)),document.body.appendChild(n);const o=f=>{t(f,n)},a=f=>{const s=[(f[0]+1)/2*100,(f[1]+1)/2*100];o(s)},c=Ha(async f=>{const s=Eu(f),h=await rx(s);a(h)},1e3/5),r=Ha(async f=>{f?(await c(f),n.classList.add("focused")):n.classList.remove("focused"),f&&e&&Xa(e(f),n)},50);return{element:n,alignToScreenPosition:o,alignToNDCPosition:a,alignToNode:c,highlightNode:r,destroy:()=>n.remove()}},gx=ps({classes:["selected-cursor"]}),_x=ps({classes:["hovered-tooltip"],htmlTemplate:i=>an`
    <div class="node-name">${i.data.name}</div>
  `,applyScreenPositionStyle(i,e){e.style.left=`calc(min(${i[0]}vw, calc(100vw - 15em)))`,e.style.bottom=`${i[1]}vh`}}),vx=ps({classes:["hovered-cursor"]});window.addEventListener("keydown",i=>{i.key,i.key});const yx=()=>{const i=window.devicePixelRatio||1,e=window.innerWidth,t=window.innerHeight,n=Math.floor(e*i),o=Math.floor(t*i);return{width:n,height:o}},wt=Ze.infinite(()=>{const i=document.createElement("canvas");document.body.appendChild(i);const e=i.getContext("webgl2",{powerPreference:"high-performance"});return e?console.log("WebGL2 initialized"):console.error("WebGL2 failed to initialize"),{canvas:i,gl:e}}),So=Ze.infinite(()=>{const{renderer:i}=Li();return et.GPUComposer.initWithThreeRenderer(i)}),zu=()=>{const{canvas:i}=wt(),{renderer:e}=Li(),{width:t,height:n}=yx();e.setSize(window.innerWidth,window.innerHeight),ds().setSize(window.innerWidth,window.innerHeight),yo().setSize(t,n),$r.resize(t/n),i.style.position="absolute",i.style.top="0px",i.style.left="0px",i.style.height="100vh"};zu();et.copyProgram(So(),{name:"copy",type:et.FLOAT});Yy();ex();wt();const xx=()=>{const i=So();i.undoThreeState();const e=[dn(),ct(),qt(),Kt()],t=Y0();i.step({program:t,input:e.flatMap(n=>[n.target,n.current]),output:e.flatMap(n=>[n.current,n.view])}),i.resetThreeState()},ku=()=>{Dy().then(c=>{gx.highlightNode(c)}),es()&&sx().then(c=>{_x.highlightNode(c),vx.highlightNode(c)}),ix(u_,window.innerWidth,window.innerHeight),xx(),zu();const{renderer:i,scene:e,camera:t,nodeVisualizerMesh:n,nodePickerMesh:o,edgeVisualizerMesh:a}=Li();qy(),tx(),n.material.depthTest&&(i.setRenderTarget(yo()),i.render(n,t)),i.setRenderTarget(null),i.render(e,t),i.setRenderTarget(ds()),i.render(o,t),es()&&dx(),requestAnimationFrame(ku)},pn=document.createElement("div");document.body.appendChild(pn);pn.id="fps-indicator";pn.classList.add("overlay");pn.classList.add("debug");pn.innerHTML=`
<div class="value">FPS: 0</div>
<canvas width="60" height="100" class="graph"></canvas>
`;pn.style.position="absolute";pn.style.top="0px";pn.style.left="0px";pn.style.color="white";const Sx=document.querySelector("#fps-indicator .value"),di=document.querySelector("#fps-indicator .graph"),yn=di.getContext("2d");let wa=performance.now(),bl=performance.now(),Pa=0,ji=[];const Ml=1,Tx=()=>ji.slice(0,Ml).reduce((i,e)=>i+e,0)/Ml,ms=()=>{const i=Tx(),e=performance.now();Pa++,e>wa+100&&(ji=[Math.round(Pa*1e3/(e-wa)/2),...ji].slice(0,1e3),yn?.clearRect(0,0,di.width,di.height),yn?.beginPath(),yn?.moveTo(0,di.height),ji.forEach((t,n)=>{yn?.lineTo(n,di.height-t)}),yn?.lineTo(ji.length,di.height),yn.fillStyle="rgba(255, 255, 255, 0.5)",yn?.fill(),yn?.stroke(),wa=e,Pa=0),e>bl+1e3&&(bl=e,Sx.innerText=`FPS: ${i}`),requestAnimationFrame(ms)};ms();var oo={},Ex={get exports(){return oo},set exports(i){oo=i}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0});function t(n,o,a){a===void 0&&(a=!1),a&&(o=o/n,n=1);var c=[],r=0,f=0,s,h=function(){var l=r+o,d=Date.now();if(d<l){s!==void 0&&clearTimeout(s),s=setTimeout(h,l-d);return}r=d,f=0;for(var S=0,p=c.splice(0,n);S<p.length;S++){var C=p[S];f++,C()}c.length?s=setTimeout(h,o):s=void 0};return function(l){return new Promise(function(d,S){var p=function(){return Promise.resolve().then(l).then(d).catch(S)},C=Date.now();s===void 0&&C-r>o&&(r=C,f=0),f++<n?p():(c.push(p),s===void 0&&(s=setTimeout(h,r+o-C)))})}}i.exports=t,e.default=t})(Ex,oo);const bx=Pl(oo);Li();lx();cx();document.querySelector("html")?.classList.add("loading");let gs;gs=await hn();await Q0();const{nodes:Zt,linkIndexPairs:Hu}=gs;console.log("nodes",Zt);const Al=[ty],Mx=async()=>{const i=Al[Math.floor(Math.random()*Al.length)];await i(gs)};await Mx();Qy(Hu);Zy(Zt.length);$0(Zt.length);const Wu=new Float32Array(Zt.flatMap(({color:i})=>i));ct().target.setFromArray(Wu);ct().current.setFromArray(Wu);const ao=new Float32Array(Zt.length);for(let i=0;i<ao.length;i++)ao[i]=Math.sqrt(Zt[i].size)/40;qt().target.setFromArray(ao);qt().current.setFromArray(ao);const Ra=40,Ax=()=>[Math.random()*Ra-1,Math.random()*Ra-1,Math.random()*Ra-1],Xu=new Float32Array(Zt.flatMap(Ax));dn().target.setFromArray(Xu);dn().current.setFromArray(Xu);Kt().target.setFromArray(new Float32Array(Zt.length).fill(0));Kt().current.setFromArray(new Float32Array(Zt.length).fill(0));const Ci=document.createElement("div");Ci.classList.add("overlay");Ci.classList.add("debug");Ci.style.top="0";Ci.style.right="0";document.body.appendChild(Ci);Ci.innerHTML=`
    <div>Nodes: ${Zt.length}</div>
    <div>Edges: ${Hu.length}</div>
    <div id="debug-message"></div>
`;document.querySelector("html").classList.remove("loading");ku();ms();_o.start();window.addEventListener("keydown",i=>{const e=document.querySelector("html").classList.contains("debug");i.key==="d"&&document.querySelector("html").classList.toggle("debug",!e)});bx(1,1e3);let wl=0,Hr=0;document.addEventListener("pointerup",i=>{const e=Date.now();e-wl<300?Hr++:Hr=1,wl=e,Hr===4&&(Hr=0,document.querySelector("html").classList.toggle("debug"))})})();