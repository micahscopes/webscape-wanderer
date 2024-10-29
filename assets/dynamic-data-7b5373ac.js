function _mergeNamespaces(X,Z){for(var G=0;G<Z.length;G++){const W=Z[G];if(typeof W!="string"&&!Array.isArray(W)){for(const F in W)if(F!=="default"&&!(F in X)){const U=Object.getOwnPropertyDescriptor(W,F);U&&Object.defineProperty(X,F,U.get?U:{enumerable:!0,get:()=>W[F]})}}}return Object.freeze(Object.defineProperty(X,Symbol.toStringTag,{value:"Module"}))}(function(){const Z=document.createElement("link").relList;if(Z&&Z.supports&&Z.supports("modulepreload"))return;for(const F of document.querySelectorAll('link[rel="modulepreload"]'))W(F);new MutationObserver(F=>{for(const U of F)if(U.type==="childList")for(const J of U.addedNodes)J.tagName==="LINK"&&J.rel==="modulepreload"&&W(J)}).observe(document,{childList:!0,subtree:!0});function G(F){const U={};return F.integrity&&(U.integrity=F.integrity),F.referrerPolicy&&(U.referrerPolicy=F.referrerPolicy),F.crossOrigin==="use-credentials"?U.credentials="include":F.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function W(F){if(F.ep)return;F.ep=!0;const U=G(F);fetch(F.href,U)}})();var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(X){return X&&X.__esModule&&Object.prototype.hasOwnProperty.call(X,"default")?X.default:X}var moizeExports={},moize$1={get exports(){return moizeExports},set exports(X){moizeExports=X}},microMemoizeExports={},microMemoize={get exports(){return microMemoizeExports},set exports(X){microMemoizeExports=X}},hasRequiredMicroMemoize;function requireMicroMemoize(){return hasRequiredMicroMemoize||(hasRequiredMicroMemoize=1,function(X,Z){(function(G,W){X.exports=W()})(commonjsGlobal,function(){var G={isEqual:!0,isMatchingKey:!0,isPromise:!0,maxSize:!0,onCacheAdd:!0,onCacheChange:!0,onCacheHit:!0,transformKey:!0},W=Array.prototype.slice;function F(q){var te=q.length;return te?te===1?[q[0]]:te===2?[q[0],q[1]]:te===3?[q[0],q[1],q[2]]:W.call(q,0):[]}function U(q){var te={};for(var ie in q)G[ie]||(te[ie]=q[ie]);return te}function J(q){return typeof q=="function"&&q.isMemoized}function Y(q,te){return q===te||q!==q&&te!==te}function D(q,te){var ie={};for(var ne in q)ie[ne]=q[ne];for(var ne in te)ie[ne]=te[ne];return ie}var Q=function(){function q(te){this.keys=[],this.values=[],this.options=te;var ie=typeof te.isMatchingKey=="function";ie?this.getKeyIndex=this._getKeyIndexFromMatchingKey:te.maxSize>1?this.getKeyIndex=this._getKeyIndexForMany:this.getKeyIndex=this._getKeyIndexForSingle,this.canTransformKey=typeof te.transformKey=="function",this.shouldCloneArguments=this.canTransformKey||ie,this.shouldUpdateOnAdd=typeof te.onCacheAdd=="function",this.shouldUpdateOnChange=typeof te.onCacheChange=="function",this.shouldUpdateOnHit=typeof te.onCacheHit=="function"}return Object.defineProperty(q.prototype,"size",{get:function(){return this.keys.length},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"snapshot",{get:function(){return{keys:F(this.keys),size:this.size,values:F(this.values)}},enumerable:!1,configurable:!0}),q.prototype._getKeyIndexFromMatchingKey=function(te){var ie=this.options,ne=ie.isMatchingKey,ce=ie.maxSize,le=this.keys,se=le.length;if(!se)return-1;if(ne(le[0],te))return 0;if(ce>1){for(var pe=1;pe<se;pe++)if(ne(le[pe],te))return pe}return-1},q.prototype._getKeyIndexForMany=function(te){var ie=this.options.isEqual,ne=this.keys,ce=ne.length;if(!ce)return-1;if(ce===1)return this._getKeyIndexForSingle(te);var le=te.length,se,pe;if(le>1){for(var ue=0;ue<ce;ue++)if(se=ne[ue],se.length===le){for(pe=0;pe<le&&ie(se[pe],te[pe]);pe++);if(pe===le)return ue}}else for(var ue=0;ue<ce;ue++)if(se=ne[ue],se.length===le&&ie(se[0],te[0]))return ue;return-1},q.prototype._getKeyIndexForSingle=function(te){var ie=this.keys;if(!ie.length)return-1;var ne=ie[0],ce=ne.length;if(te.length!==ce)return-1;var le=this.options.isEqual;if(ce>1){for(var se=0;se<ce;se++)if(!le(ne[se],te[se]))return-1;return 0}return le(ne[0],te[0])?0:-1},q.prototype.orderByLru=function(te,ie,ne){for(var ce=this.keys,le=this.values,se=ce.length,pe=ne;pe--;)ce[pe+1]=ce[pe],le[pe+1]=le[pe];ce[0]=te,le[0]=ie;var ue=this.options.maxSize;se===ue&&ne===se?(ce.pop(),le.pop()):ne>=ue&&(ce.length=le.length=ue)},q.prototype.updateAsyncCache=function(te){var ie=this,ne=this.options,ce=ne.onCacheChange,le=ne.onCacheHit,se=this.keys[0],pe=this.values[0];this.values[0]=pe.then(function(ue){return ie.shouldUpdateOnHit&&le(ie,ie.options,te),ie.shouldUpdateOnChange&&ce(ie,ie.options,te),ue},function(ue){var ae=ie.getKeyIndex(se);throw ae!==-1&&(ie.keys.splice(ae,1),ie.values.splice(ae,1)),ue})},q}();function ee(q,te){if(te===void 0&&(te={}),J(q))return ee(q.fn,D(q.options,te));if(typeof q!="function")throw new TypeError("You must pass a function to `memoize`.");var ie=te.isEqual,ne=ie===void 0?Y:ie,ce=te.isMatchingKey,le=te.isPromise,se=le===void 0?!1:le,pe=te.maxSize,ue=pe===void 0?1:pe,ae=te.onCacheAdd,de=te.onCacheChange,be=te.onCacheHit,he=te.transformKey,Le=D({isEqual:ne,isMatchingKey:ce,isPromise:se,maxSize:ue,onCacheAdd:ae,onCacheChange:de,onCacheHit:be,transformKey:he},U(te)),Xe=new Q(Le),We=Xe.keys,fe=Xe.values,Re=Xe.canTransformKey,ye=Xe.shouldCloneArguments,re=Xe.shouldUpdateOnAdd,Ze=Xe.shouldUpdateOnChange,Ge=Xe.shouldUpdateOnHit,ve=function(){var Te=ye?F(arguments):arguments;Re&&(Te=he(Te));var xe=We.length?Xe.getKeyIndex(Te):-1;if(xe!==-1)Ge&&be(Xe,Le,ve),xe&&(Xe.orderByLru(We[xe],fe[xe],xe),Ze&&de(Xe,Le,ve));else{var Ye=q.apply(this,arguments),ge=ye?Te:F(arguments);Xe.orderByLru(ge,Ye,We.length),se&&Xe.updateAsyncCache(ve),re&&ae(Xe,Le,ve),Ze&&de(Xe,Le,ve)}return fe[0]};return ve.cache=Xe,ve.fn=q,ve.isMemoized=!0,ve.options=Le,ve}return ee})}(microMemoize)),microMemoizeExports}var fastEqualsExports={},fastEquals={get exports(){return fastEqualsExports},set exports(X){fastEqualsExports=X}},hasRequiredFastEquals;function requireFastEquals(){return hasRequiredFastEquals||(hasRequiredFastEquals=1,function(X,Z){(function(G,W){W(Z)})(commonjsGlobal,function(G){var W=typeof WeakMap=="function",F=Object.keys;function U(fe,Re){return fe===Re||fe!==fe&&Re!==Re}function J(fe){return fe.constructor===Object||fe.constructor==null}function Y(fe){return!!fe&&typeof fe.then=="function"}function D(fe){return!!(fe&&fe.$$typeof)}function Q(){var fe=[];return{delete:function(Re){for(var ye=0;ye<fe.length;++ye)if(fe[ye][0]===Re){fe.splice(ye,1);return}},get:function(Re){for(var ye=0;ye<fe.length;++ye)if(fe[ye][0]===Re)return fe[ye][1]},set:function(Re,ye){for(var re=0;re<fe.length;++re)if(fe[re][0]===Re){fe[re][1]=ye;return}fe.push([Re,ye])}}}var ee=function(fe){return fe?function(){return new WeakMap}:Q}(W);function q(fe){return function(ye){var re=fe||ye;return function(Ge,ve,Te,xe,Ye,ge,Me){Me===void 0&&(Me=ee());var je=!!Ge&&typeof Ge=="object",tt=!!ve&&typeof ve=="object";if(je!==tt)return!1;if(!je&&!tt)return re(Ge,ve,Me);var it=Me.get(Ge);if(it&&Me.get(ve))return it===ve;Me.set(Ge,ve),Me.set(ve,Ge);var st=re(Ge,ve,Me);return Me.delete(Ge),Me.delete(ve),st}}}function te(fe,Re,ye,re){var Ze=fe.length;if(Re.length!==Ze)return!1;for(;Ze-- >0;)if(!ye(fe[Ze],Re[Ze],Ze,Ze,fe,Re,re))return!1;return!0}function ie(fe,Re,ye,re){var Ze=fe.size===Re.size;if(Ze&&fe.size){var Ge={},ve=0;fe.forEach(function(Te,xe){if(Ze){var Ye=!1,ge=0;Re.forEach(function(Me,je){!Ye&&!Ge[ge]&&(Ye=ye(xe,je,ve,ge,fe,Re,re)&&ye(Te,Me,xe,je,fe,Re,re),Ye&&(Ge[ge]=!0)),ge++}),ve++,Ze=Ye}})}return Ze}var ne="_owner",ce=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function le(fe,Re,ye,re){var Ze=F(fe),Ge=Ze.length;if(F(Re).length!==Ge)return!1;if(Ge)for(var ve=void 0;Ge-- >0;){if(ve=Ze[Ge],ve===ne){var Te=D(fe),xe=D(Re);if((Te||xe)&&Te!==xe)return!1}if(!ce(Re,ve)||!ye(fe[ve],Re[ve],ve,ve,fe,Re,re))return!1}return!0}var se=function(){return/foo/g.flags==="g"?function(Re,ye){return Re.source===ye.source&&Re.flags===ye.flags}:function(Re,ye){return Re.source===ye.source&&Re.global===ye.global&&Re.ignoreCase===ye.ignoreCase&&Re.multiline===ye.multiline&&Re.unicode===ye.unicode&&Re.sticky===ye.sticky&&Re.lastIndex===ye.lastIndex}}();function pe(fe,Re,ye,re){var Ze=fe.size===Re.size;if(Ze&&fe.size){var Ge={};fe.forEach(function(ve,Te){if(Ze){var xe=!1,Ye=0;Re.forEach(function(ge,Me){!xe&&!Ge[Ye]&&(xe=ye(ve,ge,Te,Me,fe,Re,re),xe&&(Ge[Ye]=!0)),Ye++}),Ze=xe}})}return Ze}var ue=typeof Map=="function",ae=typeof Set=="function",de=Object.prototype.valueOf;function be(fe){var Re=typeof fe=="function"?fe(ye):function(re,Ze,Ge,ve,Te,xe,Ye){return ye(re,Ze,Ye)};function ye(re,Ze,Ge){if(re===Ze)return!0;if(re&&Ze&&typeof re=="object"&&typeof Ze=="object"){if(J(re)&&J(Ze))return le(re,Ze,Re,Ge);var ve=Array.isArray(re),Te=Array.isArray(Ze);return ve||Te?ve===Te&&te(re,Ze,Re,Ge):(ve=re instanceof Date,Te=Ze instanceof Date,ve||Te?ve===Te&&U(re.getTime(),Ze.getTime()):(ve=re instanceof RegExp,Te=Ze instanceof RegExp,ve||Te?ve===Te&&se(re,Ze):Y(re)||Y(Ze)?re===Ze:ue&&(ve=re instanceof Map,Te=Ze instanceof Map,ve||Te)?ve===Te&&ie(re,Ze,Re,Ge):ae&&(ve=re instanceof Set,Te=Ze instanceof Set,ve||Te)?ve===Te&&pe(re,Ze,Re,Ge):re.valueOf!==de||Ze.valueOf!==de?U(re.valueOf(),Ze.valueOf()):le(re,Ze,Re,Ge)))}return re!==re&&Ze!==Ze}return ye}var he=be(),Le=be(function(){return U}),Xe=be(q()),We=be(q(U));G.circularDeepEqual=Xe,G.circularShallowEqual=We,G.createCustomEqual=be,G.deepEqual=he,G.sameValueZeroEqual=U,G.shallowEqual=Le,Object.defineProperty(G,"__esModule",{value:!0})})}(fastEquals,fastEqualsExports)),fastEqualsExports}(function(X,Z){(function(G,W){X.exports=W(requireMicroMemoize(),requireFastEquals())})(commonjsGlobal,function(G,W){function F(){return F=Object.assign?Object.assign.bind():function(Ie){for(var Ce=1;Ce<arguments.length;Ce++){var ze=arguments[Ce];for(var Ee in ze)Object.prototype.hasOwnProperty.call(ze,Ee)&&(Ie[Ee]=ze[Ee])}return Ie},F.apply(this,arguments)}function U(Ie,Ce){if(Ie==null)return{};var ze={},Ee=Object.keys(Ie),_e,He;for(He=0;He<Ee.length;He++)_e=Ee[He],!(Ce.indexOf(_e)>=0)&&(ze[_e]=Ie[_e]);return ze}var J={isDeepEqual:!1,isPromise:!1,isReact:!1,isSerialized:!1,isShallowEqual:!1,matchesArg:void 0,matchesKey:void 0,maxAge:void 0,maxArgs:void 0,maxSize:1,onExpire:void 0,profileName:void 0,serializer:void 0,updateCacheForKey:void 0,transformArgs:void 0,updateExpire:!1};function Y(){for(var Ie=arguments.length,Ce=new Array(Ie),ze=0;ze<Ie;ze++)Ce[ze]=arguments[ze];return Ce.reduce(function(Ee,_e){if(typeof Ee=="function")return typeof _e=="function"?function(){Ee.apply(this,arguments),_e.apply(this,arguments)}:Ee;if(typeof _e=="function")return _e})}function D(){for(var Ie=arguments.length,Ce=new Array(Ie),ze=0;ze<Ie;ze++)Ce[ze]=arguments[ze];return Ce.reduce(function(Ee,_e){if(typeof Ee=="function")return typeof _e=="function"?function(){return Ee(_e.apply(this,arguments))}:Ee;if(typeof _e=="function")return _e})}function Q(Ie,Ce){for(var ze=0;ze<Ie.length;ze++)if(Ie[ze].key===Ce)return ze;return-1}function ee(Ie,Ce){var ze=typeof Ce=="function"?Ce:function(Ee,_e){for(var He=0;He<_e.length;He++)if(!Ie(Ee[He],_e[He]))return!1;return!0};return function(Ee,_e){for(var He=0;He<Ee.length;He++)if(Ee[He].length===_e.length&&ze(Ee[He],_e))return He;return-1}}function q(Ie,Ce){return!Ce||Ce===J?Ie:F({},Ie,Ce,{onCacheAdd:Y(Ie.onCacheAdd,Ce.onCacheAdd),onCacheChange:Y(Ie.onCacheChange,Ce.onCacheChange),onCacheHit:Y(Ie.onCacheHit,Ce.onCacheHit),transformArgs:D(Ie.transformArgs,Ce.transformArgs)})}function te(Ie){return typeof Ie=="function"&&Ie.isMoized}function ie(Ie,Ce,ze){try{var Ee=ze||Ce||"anonymous";Object.defineProperty(Ie,"name",{configurable:!0,enumerable:!1,value:"moized("+Ee+")",writable:!0})}catch{}}function ne(Ie,Ce,ze){var Ee=Q(Ie,Ce);Ee!==-1&&(clearTimeout(Ie[Ee].timeoutId),ze&&Ie.splice(Ee,1))}function ce(Ie,Ce){var ze=setTimeout(Ie,Ce);return typeof ze.unref=="function"&&ze.unref(),ze}function le(Ie,Ce,ze,Ee){var _e=Ce.maxAge;return function He(Pe,$e,we){var Ue=Pe.keys[0];if(Q(Ie,Ue)===-1){var et=function(){var Ve=ee(ze,Ee),oe=Ve(Pe.keys,Ue),me=Pe.values[oe];~oe&&(Pe.keys.splice(oe,1),Pe.values.splice(oe,1),typeof Ce.onCacheChange=="function"&&Ce.onCacheChange(Pe,$e,we)),ne(Ie,Ue,!0),typeof Ce.onExpire=="function"&&Ce.onExpire(Ue)===!1&&(Pe.keys.unshift(Ue),Pe.values.unshift(me),He(Pe,$e,we),typeof Ce.onCacheChange=="function"&&Ce.onCacheChange(Pe,$e,we))};Ie.push({expirationMethod:et,key:Ue,timeoutId:ce(et,_e)})}}}function se(Ie,Ce){return function(Ee){var _e=Ee.keys[0],He=Q(Ie,_e);~He&&(ne(Ie,_e,!1),Ie[He].timeoutId=ce(Ie[He].expirationMethod,Ce.maxAge))}}function pe(Ie,Ce,ze,Ee){var _e=typeof Ce.maxAge=="number"&&isFinite(Ce.maxAge)?le(Ie,Ce,ze,Ee):void 0;return{onCacheAdd:_e,onCacheHit:_e&&Ce.updateExpire?se(Ie,Ce):void 0}}var ue={anonymousProfileNameCounter:1,isCollectingStats:!1,profiles:{}},ae=!1;function de(Ie){Ie?delete ue.profiles[Ie]:ue.profiles={}}function be(Ie){Ie===void 0&&(Ie=!0),ue.isCollectingStats=Ie}function he(Ie){var Ce=Ie.profileName;return function(){Ce&&!ue.profiles[Ce]&&(ue.profiles[Ce]={calls:0,hits:0}),ue.profiles[Ce].calls++}}function Le(Ie){return function(){var Ce=ue.profiles,ze=Ie.profileName;Ce[ze]||(Ce[ze]={calls:0,hits:0}),Ce[ze].calls++,Ce[ze].hits++}}function Xe(Ie){return Ie.displayName||Ie.name||"Anonymous "+ue.anonymousProfileNameCounter++}function We(Ie,Ce){return Ie?(Ce/Ie*100).toFixed(4)+"%":"0.0000%"}function fe(Ie){!ue.isCollectingStats&&!ae&&(console.warn('Stats are not currently being collected, please run "collectStats" to enable them.'),ae=!0);var Ce=ue.profiles;if(Ie){if(!Ce[Ie])return{calls:0,hits:0,usage:"0.0000%"};var ze=Ce[Ie];return F({},ze,{usage:We(ze.calls,ze.hits)})}var Ee=Object.keys(ue.profiles).reduce(function(_e,He){return _e.calls+=Ce[He].calls,_e.hits+=Ce[He].hits,_e},{calls:0,hits:0});return F({},Ee,{profiles:Object.keys(Ce).reduce(function(_e,He){return _e[He]=fe(He),_e},{}),usage:We(Ee.calls,Ee.hits)})}function Re(Ie){return ue.isCollectingStats?{onCacheAdd:he(Ie),onCacheHit:Le(Ie)}:{}}var ye={arguments:!0,callee:!0,caller:!0,constructor:!0,length:!0,name:!0,prototype:!0};function re(Ie,Ce,ze){ze===void 0&&(ze=[]),Object.getOwnPropertyNames(Ie).forEach(function(Ee){if(!ye[Ee]&&ze.indexOf(Ee)===-1){var _e=Object.getOwnPropertyDescriptor(Ie,Ee);_e.get||_e.set?Object.defineProperty(Ce,Ee,_e):Ce[Ee]=Ie[Ee]}})}function Ze(Ie,Ce){var ze=Ce.expirations,Ee=Ie.options,_e=ee(Ee.isEqual,Ee.isMatchingKey),He=Ie;He.clear=function(){var Pe=He._microMemoizeOptions.onCacheChange,$e=He.cache;return $e.keys.length=0,$e.values.length=0,Pe&&Pe($e,He.options,He),!0},He.clearStats=function(){de(He.options.profileName)},He.get=function(Pe){var $e=He._microMemoizeOptions.transformKey,we=He.cache,Ue=$e?$e(Pe):Pe,et=_e(we.keys,Ue);return et!==-1?He.apply(this,Pe):void 0},He.getStats=function(){return fe(He.options.profileName)},He.has=function(Pe){var $e=He._microMemoizeOptions.transformKey,we=$e?$e(Pe):Pe;return _e(He.cache.keys,we)!==-1},He.keys=function(){return He.cacheSnapshot.keys},He.remove=function(Pe){var $e=He._microMemoizeOptions,we=$e.onCacheChange,Ue=$e.transformKey,et=He.cache,at=_e(et.keys,Ue?Ue(Pe):Pe);if(at===-1)return!1;var Ve=et.keys[at];return et.keys.splice(at,1),et.values.splice(at,1),we&&we(et,He.options,He),ne(ze,Ve,!0),!0},He.set=function(Pe,$e){var we=He._microMemoizeOptions,Ue=He.cache,et=He.options,at=we.onCacheAdd,Ve=we.onCacheChange,oe=we.transformKey,me=oe?oe(Pe):Pe,Se=_e(Ue.keys,me);if(Se===-1){var Fe=et.maxSize-1;Ue.size>Fe&&(Ue.keys.length=Fe,Ue.values.length=Fe),Ue.keys.unshift(me),Ue.values.unshift($e),et.isPromise&&Ue.updateAsyncCache(He),at&&at(Ue,et,He),Ve&&Ve(Ue,et,He)}else{var Ke=Ue.keys[Se];Ue.values[Se]=$e,Se>0&&Ue.orderByLru(Ke,$e,Se),et.isPromise&&Ue.updateAsyncCache(He),typeof Ve=="function"&&Ve(Ue,et,He)}},He.values=function(){return He.cacheSnapshot.values}}function Ge(Ie,Ce){var ze=Ce.expirations,Ee=Ce.options,_e=Ce.originalFunction,He=Ie.options;Object.defineProperties(Ie,{_microMemoizeOptions:{configurable:!0,get:function(){return He}},cacheSnapshot:{configurable:!0,get:function(){var we=Ie.cache;return{keys:we.keys.slice(0),size:we.size,values:we.values.slice(0)}}},expirations:{configurable:!0,get:function(){return ze}},expirationsSnapshot:{configurable:!0,get:function(){return ze.slice(0)}},isMoized:{configurable:!0,get:function(){return!0}},options:{configurable:!0,get:function(){return Ee}},originalFunction:{configurable:!0,get:function(){return _e}}});var Pe=Ie;re(_e,Pe)}function ve(Ie,Ce){return Ze(Ie,Ce),Ge(Ie,Ce),Ie}var Te=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function xe(Ie,Ce,ze){var Ee=Ie(F({maxArgs:2,isShallowEqual:!0},ze,{isReact:!1}));Ce.displayName||(Ce.displayName=Ce.name||"Component");function _e(He,Pe,$e){this.props=He,this.context=Pe,this.updater=$e,this.MoizedComponent=Ee(Ce)}return _e.prototype.isReactComponent={},_e.prototype.render=function(){return{$$typeof:Te,type:this.MoizedComponent,props:this.props,ref:null,key:null,_owner:null}},re(Ce,_e,["contextType","contextTypes"]),_e.displayName="Moized("+(Ce.displayName||Ce.name||"Component")+")",ie(_e,Ce.name,ze.profileName),_e}function Ye(Ie){return function(Ce){if(Ie>=Ce.length)return Ce;if(Ie===0)return[];if(Ie===1)return[Ce[0]];if(Ie===2)return[Ce[0],Ce[1]];if(Ie===3)return[Ce[0],Ce[1],Ce[2]];for(var ze=[],Ee=0;Ee<Ie;Ee++)ze[Ee]=Ce[Ee];return ze}}function ge(Ie,Ce){for(var ze=Ie.length,Ee=0;Ee<ze;++Ee)if(Ie[Ee]===Ce)return Ee+1;return 0}function Me(){var Ie=[],Ce=[];return function(Ee,_e){var He=typeof _e;if(He==="function"||He==="symbol")return _e.toString();if(typeof _e=="object"){if(Ie.length){var Pe=ge(Ie,this);Pe===0?Ie[Ie.length]=this:(Ie.splice(Pe),Ce.splice(Pe)),Ce[Ce.length]=Ee;var $e=ge(Ie,_e);if($e!==0)return"[ref="+(Ce.slice(0,$e).join(".")||".")+"]"}else Ie[0]=_e,Ce[0]=Ee;return _e}return""+_e}}function je(Ie){var Ce=typeof Ie;return Ie&&(Ce==="object"||Ce==="function")?JSON.stringify(Ie,Me()):Ie}function tt(Ie){for(var Ce="|",ze=0;ze<Ie.length;ze++)Ce+=je(Ie[ze])+"|";return[Ce]}function it(Ie){return typeof Ie.serializer=="function"?Ie.serializer:tt}function st(Ie,Ce){return Ie[0]===Ce[0]}function qe(Ie){if(typeof Ie=="function")return function(Ce,ze,Ee){return Ie(Ee.cache,Ee.options,Ee)}}function ot(Ie){return Ie.matchesArg||Ie.isDeepEqual&&W.deepEqual||Ie.isShallowEqual&&W.shallowEqual||W.sameValueZeroEqual}function ut(Ie){return Ie.matchesKey||Ie.isSerialized&&st||void 0}function dt(Ie){return D(Ie.isSerialized&&it(Ie),typeof Ie.transformArgs=="function"&&Ie.transformArgs,typeof Ie.maxArgs=="number"&&Ye(Ie.maxArgs))}function mt(Ie){var Ce=Ie.options.updateCacheForKey,ze=function(){for(var _e=arguments.length,He=new Array(_e),Pe=0;Pe<_e;Pe++)He[Pe]=arguments[Pe];if(!Ce(He))return Ie.apply(this,He);var $e=Ie.fn.apply(this,He);return Ie.set(He,$e),$e};return re(Ie,ze),ze}var Je=["matchesArg","isDeepEqual","isPromise","isReact","isSerialized","isShallowEqual","matchesKey","maxAge","maxArgs","maxSize","onCacheAdd","onCacheChange","onCacheHit","onExpire","profileName","serializer","updateCacheForKey","transformArgs","updateExpire"],Ne=function Ie(Ce,ze){var Ee=ze||J;if(te(Ce)){var _e=Ce.originalFunction,He=q(Ce.options,Ee);return Ie(_e,He)}if(typeof Ce=="object")return function(ft,Rt){if(typeof ft=="function"){var Yt=q(Ce,Rt);return Ie(ft,Yt)}var ct=q(Ce,ft);return Ie(ct)};if(Ee.isReact)return xe(Ie,Ce,Ee);var Pe=F({},J,Ee,{maxAge:typeof Ee.maxAge=="number"&&Ee.maxAge>=0?Ee.maxAge:J.maxAge,maxArgs:typeof Ee.maxArgs=="number"&&Ee.maxArgs>=0?Ee.maxArgs:J.maxArgs,maxSize:typeof Ee.maxSize=="number"&&Ee.maxSize>=0?Ee.maxSize:J.maxSize,profileName:Ee.profileName||Xe(Ce)}),$e=[];Pe.matchesArg,Pe.isDeepEqual;var we=Pe.isPromise;Pe.isReact,Pe.isSerialized,Pe.isShallowEqual,Pe.matchesKey,Pe.maxAge,Pe.maxArgs;var Ue=Pe.maxSize,et=Pe.onCacheAdd,at=Pe.onCacheChange,Ve=Pe.onCacheHit;Pe.onExpire,Pe.profileName,Pe.serializer;var oe=Pe.updateCacheForKey;Pe.transformArgs,Pe.updateExpire;var me=U(Pe,Je),Se=ot(Pe),Fe=ut(Pe),Ke=pe($e,Pe,Se,Fe),Ae=Re(Pe),rt=dt(Pe),vt=F({},me,{isEqual:Se,isMatchingKey:Fe,isPromise:we,maxSize:Ue,onCacheAdd:qe(Y(et,Ke.onCacheAdd,Ae.onCacheAdd)),onCacheChange:qe(at),onCacheHit:qe(Y(Ve,Ke.onCacheHit,Ae.onCacheHit)),transformKey:rt}),Vt=G(Ce,vt),Wt=ve(Vt,{expirations:$e,options:Pe,originalFunction:Ce});return oe&&(Wt=mt(Wt)),ie(Wt,Ce.name,Ee.profileName),Wt};Ne.clearStats=de,Ne.collectStats=be,Ne.compose=function(){return D.apply(void 0,arguments)||Ne},Ne.deep=Ne({isDeepEqual:!0}),Ne.getStats=fe,Ne.infinite=Ne({maxSize:1/0}),Ne.isCollectingStats=function(){return ue.isCollectingStats},Ne.isMoized=function(Ce){return typeof Ce=="function"&&!!Ce.isMoized},Ne.matchesArg=function(Ie){return Ne({matchesArg:Ie})},Ne.matchesKey=function(Ie){return Ne({matchesKey:Ie})};function ke(Ie,Ce){if(Ce===!0)return Ne({maxAge:Ie,updateExpire:Ce});if(typeof Ce=="object"){var ze=Ce.onExpire,Ee=Ce.updateExpire;return Ne({maxAge:Ie,onExpire:ze,updateExpire:Ee})}return Ne(typeof Ce=="function"?{maxAge:Ie,onExpire:Ce,updateExpire:!0}:{maxAge:Ie})}return Ne.maxAge=ke,Ne.maxArgs=function(Ie){return Ne({maxArgs:Ie})},Ne.maxSize=function(Ie){return Ne({maxSize:Ie})},Ne.profile=function(Ie){return Ne({profileName:Ie})},Ne.promise=Ne({isPromise:!0,updateExpire:!0}),Ne.react=Ne({isReact:!0}),Ne.serialize=Ne({isSerialized:!0}),Ne.serializeWith=function(Ie){return Ne({isSerialized:!0,serializer:Ie})},Ne.shallow=Ne({isShallowEqual:!0}),Ne.transformArgs=function(Ie){return Ne({transformArgs:Ie})},Ne.updateCacheForKey=function(Ie){return Ne({updateCacheForKey:Ie})},Object.defineProperty(Ne,"default",{configurable:!1,enumerable:!1,value:Ne,writable:!1}),Ne})})(moize$1);const moize=moizeExports,proxyMarker=Symbol("Comlink.proxy"),createEndpoint=Symbol("Comlink.endpoint"),releaseProxy=Symbol("Comlink.releaseProxy"),throwMarker=Symbol("Comlink.thrown"),isObject$3=X=>typeof X=="object"&&X!==null||typeof X=="function",proxyTransferHandler={canHandle:X=>isObject$3(X)&&X[proxyMarker],serialize(X){const{port1:Z,port2:G}=new MessageChannel;return expose$1(X,Z),[G,[G]]},deserialize(X){return X.start(),wrap$1(X)}},throwTransferHandler={canHandle:X=>isObject$3(X)&&throwMarker in X,serialize({value:X}){let Z;return X instanceof Error?Z={isError:!0,value:{message:X.message,name:X.name,stack:X.stack}}:Z={isError:!1,value:X},[Z,[]]},deserialize(X){throw X.isError?Object.assign(new Error(X.value.message),X.value):X.value}},transferHandlers=new Map([["proxy",proxyTransferHandler],["throw",throwTransferHandler]]);function expose$1(X,Z=self){Z.addEventListener("message",function G(W){if(!W||!W.data)return;const{id:F,type:U,path:J}=Object.assign({path:[]},W.data),Y=(W.data.argumentList||[]).map(fromWireValue);let D;try{const Q=J.slice(0,-1).reduce((q,te)=>q[te],X),ee=J.reduce((q,te)=>q[te],X);switch(U){case"GET":D=ee;break;case"SET":Q[J.slice(-1)[0]]=fromWireValue(W.data.value),D=!0;break;case"APPLY":D=ee.apply(Q,Y);break;case"CONSTRUCT":{const q=new ee(...Y);D=proxy(q)}break;case"ENDPOINT":{const{port1:q,port2:te}=new MessageChannel;expose$1(X,te),D=transfer$1(q,[q])}break;case"RELEASE":D=void 0;break;default:return}}catch(Q){D={value:Q,[throwMarker]:0}}Promise.resolve(D).catch(Q=>({value:Q,[throwMarker]:0})).then(Q=>{const[ee,q]=toWireValue(Q);Z.postMessage(Object.assign(Object.assign({},ee),{id:F}),q),U==="RELEASE"&&(Z.removeEventListener("message",G),closeEndPoint(Z))})}),Z.start&&Z.start()}function isMessagePort(X){return X.constructor.name==="MessagePort"}function closeEndPoint(X){isMessagePort(X)&&X.close()}function wrap$1(X,Z){return createProxy(X,[],Z)}function throwIfProxyReleased(X){if(X)throw new Error("Proxy has been released and is not useable")}function createProxy(X,Z=[],G=function(){}){let W=!1;const F=new Proxy(G,{get(U,J){if(throwIfProxyReleased(W),J===releaseProxy)return()=>requestResponseMessage(X,{type:"RELEASE",path:Z.map(Y=>Y.toString())}).then(()=>{closeEndPoint(X),W=!0});if(J==="then"){if(Z.length===0)return{then:()=>F};const Y=requestResponseMessage(X,{type:"GET",path:Z.map(D=>D.toString())}).then(fromWireValue);return Y.then.bind(Y)}return createProxy(X,[...Z,J])},set(U,J,Y){throwIfProxyReleased(W);const[D,Q]=toWireValue(Y);return requestResponseMessage(X,{type:"SET",path:[...Z,J].map(ee=>ee.toString()),value:D},Q).then(fromWireValue)},apply(U,J,Y){throwIfProxyReleased(W);const D=Z[Z.length-1];if(D===createEndpoint)return requestResponseMessage(X,{type:"ENDPOINT"}).then(fromWireValue);if(D==="bind")return createProxy(X,Z.slice(0,-1));const[Q,ee]=processArguments(Y);return requestResponseMessage(X,{type:"APPLY",path:Z.map(q=>q.toString()),argumentList:Q},ee).then(fromWireValue)},construct(U,J){throwIfProxyReleased(W);const[Y,D]=processArguments(J);return requestResponseMessage(X,{type:"CONSTRUCT",path:Z.map(Q=>Q.toString()),argumentList:Y},D).then(fromWireValue)}});return F}function myFlat(X){return Array.prototype.concat.apply([],X)}function processArguments(X){const Z=X.map(toWireValue);return[Z.map(G=>G[0]),myFlat(Z.map(G=>G[1]))]}const transferCache=new WeakMap;function transfer$1(X,Z){return transferCache.set(X,Z),X}function proxy(X){return Object.assign(X,{[proxyMarker]:!0})}function toWireValue(X){for(const[Z,G]of transferHandlers)if(G.canHandle(X)){const[W,F]=G.serialize(X);return[{type:"HANDLER",name:Z,value:W},F]}return[{type:"RAW",value:X},transferCache.get(X)||[]]}function fromWireValue(X){switch(X.type){case"HANDLER":return transferHandlers.get(X.name).deserialize(X.value);case"RAW":return X.value}}function requestResponseMessage(X,Z,G){return new Promise(W=>{const F=generateUUID$1();X.addEventListener("message",function U(J){!J.data||!J.data.id||J.data.id!==F||(X.removeEventListener("message",U),W(J.data))}),X.start&&X.start(),X.postMessage(Object.assign({id:F},Z),G)})}function generateUUID$1(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="158",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",LinearDisplayP3ColorSpace="display-p3-linear",LinearTransfer="linear",SRGBTransfer="srgb",Rec709Primaries="rec709",P3Primaries="p3",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035,WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(Z,G){this._listeners===void 0&&(this._listeners={});const W=this._listeners;W[Z]===void 0&&(W[Z]=[]),W[Z].indexOf(G)===-1&&W[Z].push(G)}hasEventListener(Z,G){if(this._listeners===void 0)return!1;const W=this._listeners;return W[Z]!==void 0&&W[Z].indexOf(G)!==-1}removeEventListener(Z,G){if(this._listeners===void 0)return;const F=this._listeners[Z];if(F!==void 0){const U=F.indexOf(G);U!==-1&&F.splice(U,1)}}dispatchEvent(Z){if(this._listeners===void 0)return;const W=this._listeners[Z.type];if(W!==void 0){Z.target=this;const F=W.slice(0);for(let U=0,J=F.length;U<J;U++)F[U].call(this,Z);Z.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const X=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,G=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(_lut[X&255]+_lut[X>>8&255]+_lut[X>>16&255]+_lut[X>>24&255]+"-"+_lut[Z&255]+_lut[Z>>8&255]+"-"+_lut[Z>>16&15|64]+_lut[Z>>24&255]+"-"+_lut[G&63|128]+_lut[G>>8&255]+"-"+_lut[G>>16&255]+_lut[G>>24&255]+_lut[W&255]+_lut[W>>8&255]+_lut[W>>16&255]+_lut[W>>24&255]).toLowerCase()}function clamp(X,Z,G){return Math.max(Z,Math.min(G,X))}function euclideanModulo(X,Z){return(X%Z+Z)%Z}function lerp(X,Z,G){return(1-G)*X+G*Z}function isPowerOfTwo(X){return(X&X-1)===0&&X!==0}function floorPowerOfTwo(X){return Math.pow(2,Math.floor(Math.log(X)/Math.LN2))}function denormalize(X,Z){switch(Z.constructor){case Float32Array:return X;case Uint32Array:return X/4294967295;case Uint16Array:return X/65535;case Uint8Array:return X/255;case Int32Array:return Math.max(X/2147483647,-1);case Int16Array:return Math.max(X/32767,-1);case Int8Array:return Math.max(X/127,-1);default:throw new Error("Invalid component type.")}}function normalize$1(X,Z){switch(Z.constructor){case Float32Array:return X;case Uint32Array:return Math.round(X*4294967295);case Uint16Array:return Math.round(X*65535);case Uint8Array:return Math.round(X*255);case Int32Array:return Math.round(X*2147483647);case Int16Array:return Math.round(X*32767);case Int8Array:return Math.round(X*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(Z=0,G=0){Vector2.prototype.isVector2=!0,this.x=Z,this.y=G}get width(){return this.x}set width(Z){this.x=Z}get height(){return this.y}set height(Z){this.y=Z}set(Z,G){return this.x=Z,this.y=G,this}setScalar(Z){return this.x=Z,this.y=Z,this}setX(Z){return this.x=Z,this}setY(Z){return this.y=Z,this}setComponent(Z,G){switch(Z){case 0:this.x=G;break;case 1:this.y=G;break;default:throw new Error("index is out of range: "+Z)}return this}getComponent(Z){switch(Z){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+Z)}}clone(){return new this.constructor(this.x,this.y)}copy(Z){return this.x=Z.x,this.y=Z.y,this}add(Z){return this.x+=Z.x,this.y+=Z.y,this}addScalar(Z){return this.x+=Z,this.y+=Z,this}addVectors(Z,G){return this.x=Z.x+G.x,this.y=Z.y+G.y,this}addScaledVector(Z,G){return this.x+=Z.x*G,this.y+=Z.y*G,this}sub(Z){return this.x-=Z.x,this.y-=Z.y,this}subScalar(Z){return this.x-=Z,this.y-=Z,this}subVectors(Z,G){return this.x=Z.x-G.x,this.y=Z.y-G.y,this}multiply(Z){return this.x*=Z.x,this.y*=Z.y,this}multiplyScalar(Z){return this.x*=Z,this.y*=Z,this}divide(Z){return this.x/=Z.x,this.y/=Z.y,this}divideScalar(Z){return this.multiplyScalar(1/Z)}applyMatrix3(Z){const G=this.x,W=this.y,F=Z.elements;return this.x=F[0]*G+F[3]*W+F[6],this.y=F[1]*G+F[4]*W+F[7],this}min(Z){return this.x=Math.min(this.x,Z.x),this.y=Math.min(this.y,Z.y),this}max(Z){return this.x=Math.max(this.x,Z.x),this.y=Math.max(this.y,Z.y),this}clamp(Z,G){return this.x=Math.max(Z.x,Math.min(G.x,this.x)),this.y=Math.max(Z.y,Math.min(G.y,this.y)),this}clampScalar(Z,G){return this.x=Math.max(Z,Math.min(G,this.x)),this.y=Math.max(Z,Math.min(G,this.y)),this}clampLength(Z,G){const W=this.length();return this.divideScalar(W||1).multiplyScalar(Math.max(Z,Math.min(G,W)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(Z){return this.x*Z.x+this.y*Z.y}cross(Z){return this.x*Z.y-this.y*Z.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(Z){const G=Math.sqrt(this.lengthSq()*Z.lengthSq());if(G===0)return Math.PI/2;const W=this.dot(Z)/G;return Math.acos(clamp(W,-1,1))}distanceTo(Z){return Math.sqrt(this.distanceToSquared(Z))}distanceToSquared(Z){const G=this.x-Z.x,W=this.y-Z.y;return G*G+W*W}manhattanDistanceTo(Z){return Math.abs(this.x-Z.x)+Math.abs(this.y-Z.y)}setLength(Z){return this.normalize().multiplyScalar(Z)}lerp(Z,G){return this.x+=(Z.x-this.x)*G,this.y+=(Z.y-this.y)*G,this}lerpVectors(Z,G,W){return this.x=Z.x+(G.x-Z.x)*W,this.y=Z.y+(G.y-Z.y)*W,this}equals(Z){return Z.x===this.x&&Z.y===this.y}fromArray(Z,G=0){return this.x=Z[G],this.y=Z[G+1],this}toArray(Z=[],G=0){return Z[G]=this.x,Z[G+1]=this.y,Z}fromBufferAttribute(Z,G){return this.x=Z.getX(G),this.y=Z.getY(G),this}rotateAround(Z,G){const W=Math.cos(G),F=Math.sin(G),U=this.x-Z.x,J=this.y-Z.y;return this.x=U*W-J*F+Z.x,this.y=U*F+J*W+Z.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(Z,G,W,F,U,J,Y,D,Q){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],Z!==void 0&&this.set(Z,G,W,F,U,J,Y,D,Q)}set(Z,G,W,F,U,J,Y,D,Q){const ee=this.elements;return ee[0]=Z,ee[1]=F,ee[2]=Y,ee[3]=G,ee[4]=U,ee[5]=D,ee[6]=W,ee[7]=J,ee[8]=Q,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(Z){const G=this.elements,W=Z.elements;return G[0]=W[0],G[1]=W[1],G[2]=W[2],G[3]=W[3],G[4]=W[4],G[5]=W[5],G[6]=W[6],G[7]=W[7],G[8]=W[8],this}extractBasis(Z,G,W){return Z.setFromMatrix3Column(this,0),G.setFromMatrix3Column(this,1),W.setFromMatrix3Column(this,2),this}setFromMatrix4(Z){const G=Z.elements;return this.set(G[0],G[4],G[8],G[1],G[5],G[9],G[2],G[6],G[10]),this}multiply(Z){return this.multiplyMatrices(this,Z)}premultiply(Z){return this.multiplyMatrices(Z,this)}multiplyMatrices(Z,G){const W=Z.elements,F=G.elements,U=this.elements,J=W[0],Y=W[3],D=W[6],Q=W[1],ee=W[4],q=W[7],te=W[2],ie=W[5],ne=W[8],ce=F[0],le=F[3],se=F[6],pe=F[1],ue=F[4],ae=F[7],de=F[2],be=F[5],he=F[8];return U[0]=J*ce+Y*pe+D*de,U[3]=J*le+Y*ue+D*be,U[6]=J*se+Y*ae+D*he,U[1]=Q*ce+ee*pe+q*de,U[4]=Q*le+ee*ue+q*be,U[7]=Q*se+ee*ae+q*he,U[2]=te*ce+ie*pe+ne*de,U[5]=te*le+ie*ue+ne*be,U[8]=te*se+ie*ae+ne*he,this}multiplyScalar(Z){const G=this.elements;return G[0]*=Z,G[3]*=Z,G[6]*=Z,G[1]*=Z,G[4]*=Z,G[7]*=Z,G[2]*=Z,G[5]*=Z,G[8]*=Z,this}determinant(){const Z=this.elements,G=Z[0],W=Z[1],F=Z[2],U=Z[3],J=Z[4],Y=Z[5],D=Z[6],Q=Z[7],ee=Z[8];return G*J*ee-G*Y*Q-W*U*ee+W*Y*D+F*U*Q-F*J*D}invert(){const Z=this.elements,G=Z[0],W=Z[1],F=Z[2],U=Z[3],J=Z[4],Y=Z[5],D=Z[6],Q=Z[7],ee=Z[8],q=ee*J-Y*Q,te=Y*D-ee*U,ie=Q*U-J*D,ne=G*q+W*te+F*ie;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0);const ce=1/ne;return Z[0]=q*ce,Z[1]=(F*Q-ee*W)*ce,Z[2]=(Y*W-F*J)*ce,Z[3]=te*ce,Z[4]=(ee*G-F*D)*ce,Z[5]=(F*U-Y*G)*ce,Z[6]=ie*ce,Z[7]=(W*D-Q*G)*ce,Z[8]=(J*G-W*U)*ce,this}transpose(){let Z;const G=this.elements;return Z=G[1],G[1]=G[3],G[3]=Z,Z=G[2],G[2]=G[6],G[6]=Z,Z=G[5],G[5]=G[7],G[7]=Z,this}getNormalMatrix(Z){return this.setFromMatrix4(Z).invert().transpose()}transposeIntoArray(Z){const G=this.elements;return Z[0]=G[0],Z[1]=G[3],Z[2]=G[6],Z[3]=G[1],Z[4]=G[4],Z[5]=G[7],Z[6]=G[2],Z[7]=G[5],Z[8]=G[8],this}setUvTransform(Z,G,W,F,U,J,Y){const D=Math.cos(U),Q=Math.sin(U);return this.set(W*D,W*Q,-W*(D*J+Q*Y)+J+Z,-F*Q,F*D,-F*(-Q*J+D*Y)+Y+G,0,0,1),this}scale(Z,G){return this.premultiply(_m3.makeScale(Z,G)),this}rotate(Z){return this.premultiply(_m3.makeRotation(-Z)),this}translate(Z,G){return this.premultiply(_m3.makeTranslation(Z,G)),this}makeTranslation(Z,G){return Z.isVector2?this.set(1,0,Z.x,0,1,Z.y,0,0,1):this.set(1,0,Z,0,1,G,0,0,1),this}makeRotation(Z){const G=Math.cos(Z),W=Math.sin(Z);return this.set(G,-W,0,W,G,0,0,0,1),this}makeScale(Z,G){return this.set(Z,0,0,0,G,0,0,0,1),this}equals(Z){const G=this.elements,W=Z.elements;for(let F=0;F<9;F++)if(G[F]!==W[F])return!1;return!0}fromArray(Z,G=0){for(let W=0;W<9;W++)this.elements[W]=Z[W+G];return this}toArray(Z=[],G=0){const W=this.elements;return Z[G]=W[0],Z[G+1]=W[1],Z[G+2]=W[2],Z[G+3]=W[3],Z[G+4]=W[4],Z[G+5]=W[5],Z[G+6]=W[6],Z[G+7]=W[7],Z[G+8]=W[8],Z}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(X){for(let Z=X.length-1;Z>=0;--Z)if(X[Z]>=65535)return!0;return!1}function createElementNS(X){return document.createElementNS("http://www.w3.org/1999/xhtml",X)}function createCanvasElement(){const X=createElementNS("canvas");return X.style.display="block",X}const _cache={};function warnOnce(X){X in _cache||(_cache[X]=!0,console.warn(X))}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),COLOR_SPACES={[LinearSRGBColorSpace]:{transfer:LinearTransfer,primaries:Rec709Primaries,toReference:X=>X,fromReference:X=>X},[SRGBColorSpace]:{transfer:SRGBTransfer,primaries:Rec709Primaries,toReference:X=>X.convertSRGBToLinear(),fromReference:X=>X.convertLinearToSRGB()},[LinearDisplayP3ColorSpace]:{transfer:LinearTransfer,primaries:P3Primaries,toReference:X=>X.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:X=>X.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)},[DisplayP3ColorSpace]:{transfer:SRGBTransfer,primaries:P3Primaries,toReference:X=>X.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:X=>X.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}},SUPPORTED_WORKING_COLOR_SPACES=new Set([LinearSRGBColorSpace,LinearDisplayP3ColorSpace]),ColorManagement={enabled:!0,_workingColorSpace:LinearSRGBColorSpace,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(X){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!X},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(X){if(!SUPPORTED_WORKING_COLOR_SPACES.has(X))throw new Error(`Unsupported working color space, "${X}".`);this._workingColorSpace=X},convert:function(X,Z,G){if(this.enabled===!1||Z===G||!Z||!G)return X;const W=COLOR_SPACES[Z].toReference,F=COLOR_SPACES[G].fromReference;return F(W(X))},fromWorkingColorSpace:function(X,Z){return this.convert(X,this._workingColorSpace,Z)},toWorkingColorSpace:function(X,Z){return this.convert(X,Z,this._workingColorSpace)},getPrimaries:function(X){return COLOR_SPACES[X].primaries},getTransfer:function(X){return X===NoColorSpace?LinearTransfer:COLOR_SPACES[X].transfer}};function SRGBToLinear(X){return X<.04045?X*.0773993808:Math.pow(X*.9478672986+.0521327014,2.4)}function LinearToSRGB(X){return X<.0031308?X*12.92:1.055*Math.pow(X,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(Z){if(/^data:/i.test(Z.src)||typeof HTMLCanvasElement>"u")return Z.src;let G;if(Z instanceof HTMLCanvasElement)G=Z;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=Z.width,_canvas.height=Z.height;const W=_canvas.getContext("2d");Z instanceof ImageData?W.putImageData(Z,0,0):W.drawImage(Z,0,0,Z.width,Z.height),G=_canvas}return G.width>2048||G.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",Z),G.toDataURL("image/jpeg",.6)):G.toDataURL("image/png")}static sRGBToLinear(Z){if(typeof HTMLImageElement<"u"&&Z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Z instanceof ImageBitmap){const G=createElementNS("canvas");G.width=Z.width,G.height=Z.height;const W=G.getContext("2d");W.drawImage(Z,0,0,Z.width,Z.height);const F=W.getImageData(0,0,Z.width,Z.height),U=F.data;for(let J=0;J<U.length;J++)U[J]=SRGBToLinear(U[J]/255)*255;return W.putImageData(F,0,0),G}else if(Z.data){const G=Z.data.slice(0);for(let W=0;W<G.length;W++)G instanceof Uint8Array||G instanceof Uint8ClampedArray?G[W]=Math.floor(SRGBToLinear(G[W]/255)*255):G[W]=SRGBToLinear(G[W]);return{data:G,width:Z.width,height:Z.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),Z}}let _sourceId=0;class Source{constructor(Z=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=Z,this.version=0}set needsUpdate(Z){Z===!0&&this.version++}toJSON(Z){const G=Z===void 0||typeof Z=="string";if(!G&&Z.images[this.uuid]!==void 0)return Z.images[this.uuid];const W={uuid:this.uuid,url:""},F=this.data;if(F!==null){let U;if(Array.isArray(F)){U=[];for(let J=0,Y=F.length;J<Y;J++)F[J].isDataTexture?U.push(serializeImage(F[J].image)):U.push(serializeImage(F[J]))}else U=serializeImage(F);W.url=U}return G||(Z.images[this.uuid]=W),W}}function serializeImage(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap?ImageUtils.getDataURL(X):X.data?{data:Array.from(X.data),width:X.width,height:X.height,type:X.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(Z=Texture.DEFAULT_IMAGE,G=Texture.DEFAULT_MAPPING,W=ClampToEdgeWrapping,F=ClampToEdgeWrapping,U=LinearFilter,J=LinearMipmapLinearFilter,Y=RGBAFormat,D=UnsignedByteType,Q=Texture.DEFAULT_ANISOTROPY,ee=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(Z),this.mipmaps=[],this.mapping=G,this.channel=0,this.wrapS=W,this.wrapT=F,this.magFilter=U,this.minFilter=J,this.anisotropy=Q,this.format=Y,this.internalFormat=null,this.type=D,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof ee=="string"?this.colorSpace=ee:(warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=ee===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(Z=null){this.source.data=Z}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(Z){return this.name=Z.name,this.source=Z.source,this.mipmaps=Z.mipmaps.slice(0),this.mapping=Z.mapping,this.channel=Z.channel,this.wrapS=Z.wrapS,this.wrapT=Z.wrapT,this.magFilter=Z.magFilter,this.minFilter=Z.minFilter,this.anisotropy=Z.anisotropy,this.format=Z.format,this.internalFormat=Z.internalFormat,this.type=Z.type,this.offset.copy(Z.offset),this.repeat.copy(Z.repeat),this.center.copy(Z.center),this.rotation=Z.rotation,this.matrixAutoUpdate=Z.matrixAutoUpdate,this.matrix.copy(Z.matrix),this.generateMipmaps=Z.generateMipmaps,this.premultiplyAlpha=Z.premultiplyAlpha,this.flipY=Z.flipY,this.unpackAlignment=Z.unpackAlignment,this.colorSpace=Z.colorSpace,this.userData=JSON.parse(JSON.stringify(Z.userData)),this.needsUpdate=!0,this}toJSON(Z){const G=Z===void 0||typeof Z=="string";if(!G&&Z.textures[this.uuid]!==void 0)return Z.textures[this.uuid];const W={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(Z).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(W.userData=this.userData),G||(Z.textures[this.uuid]=W),W}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(Z){if(this.mapping!==UVMapping)return Z;if(Z.applyMatrix3(this.matrix),Z.x<0||Z.x>1)switch(this.wrapS){case RepeatWrapping:Z.x=Z.x-Math.floor(Z.x);break;case ClampToEdgeWrapping:Z.x=Z.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(Z.x)%2)===1?Z.x=Math.ceil(Z.x)-Z.x:Z.x=Z.x-Math.floor(Z.x);break}if(Z.y<0||Z.y>1)switch(this.wrapT){case RepeatWrapping:Z.y=Z.y-Math.floor(Z.y);break;case ClampToEdgeWrapping:Z.y=Z.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(Z.y)%2)===1?Z.y=Math.ceil(Z.y)-Z.y:Z.y=Z.y-Math.floor(Z.y);break}return this.flipY&&(Z.y=1-Z.y),Z}set needsUpdate(Z){Z===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===SRGBColorSpace?sRGBEncoding:LinearEncoding}set encoding(Z){warnOnce("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=Z===sRGBEncoding?SRGBColorSpace:NoColorSpace}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(Z=0,G=0,W=0,F=1){Vector4.prototype.isVector4=!0,this.x=Z,this.y=G,this.z=W,this.w=F}get width(){return this.z}set width(Z){this.z=Z}get height(){return this.w}set height(Z){this.w=Z}set(Z,G,W,F){return this.x=Z,this.y=G,this.z=W,this.w=F,this}setScalar(Z){return this.x=Z,this.y=Z,this.z=Z,this.w=Z,this}setX(Z){return this.x=Z,this}setY(Z){return this.y=Z,this}setZ(Z){return this.z=Z,this}setW(Z){return this.w=Z,this}setComponent(Z,G){switch(Z){case 0:this.x=G;break;case 1:this.y=G;break;case 2:this.z=G;break;case 3:this.w=G;break;default:throw new Error("index is out of range: "+Z)}return this}getComponent(Z){switch(Z){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+Z)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(Z){return this.x=Z.x,this.y=Z.y,this.z=Z.z,this.w=Z.w!==void 0?Z.w:1,this}add(Z){return this.x+=Z.x,this.y+=Z.y,this.z+=Z.z,this.w+=Z.w,this}addScalar(Z){return this.x+=Z,this.y+=Z,this.z+=Z,this.w+=Z,this}addVectors(Z,G){return this.x=Z.x+G.x,this.y=Z.y+G.y,this.z=Z.z+G.z,this.w=Z.w+G.w,this}addScaledVector(Z,G){return this.x+=Z.x*G,this.y+=Z.y*G,this.z+=Z.z*G,this.w+=Z.w*G,this}sub(Z){return this.x-=Z.x,this.y-=Z.y,this.z-=Z.z,this.w-=Z.w,this}subScalar(Z){return this.x-=Z,this.y-=Z,this.z-=Z,this.w-=Z,this}subVectors(Z,G){return this.x=Z.x-G.x,this.y=Z.y-G.y,this.z=Z.z-G.z,this.w=Z.w-G.w,this}multiply(Z){return this.x*=Z.x,this.y*=Z.y,this.z*=Z.z,this.w*=Z.w,this}multiplyScalar(Z){return this.x*=Z,this.y*=Z,this.z*=Z,this.w*=Z,this}applyMatrix4(Z){const G=this.x,W=this.y,F=this.z,U=this.w,J=Z.elements;return this.x=J[0]*G+J[4]*W+J[8]*F+J[12]*U,this.y=J[1]*G+J[5]*W+J[9]*F+J[13]*U,this.z=J[2]*G+J[6]*W+J[10]*F+J[14]*U,this.w=J[3]*G+J[7]*W+J[11]*F+J[15]*U,this}divideScalar(Z){return this.multiplyScalar(1/Z)}setAxisAngleFromQuaternion(Z){this.w=2*Math.acos(Z.w);const G=Math.sqrt(1-Z.w*Z.w);return G<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=Z.x/G,this.y=Z.y/G,this.z=Z.z/G),this}setAxisAngleFromRotationMatrix(Z){let G,W,F,U;const D=Z.elements,Q=D[0],ee=D[4],q=D[8],te=D[1],ie=D[5],ne=D[9],ce=D[2],le=D[6],se=D[10];if(Math.abs(ee-te)<.01&&Math.abs(q-ce)<.01&&Math.abs(ne-le)<.01){if(Math.abs(ee+te)<.1&&Math.abs(q+ce)<.1&&Math.abs(ne+le)<.1&&Math.abs(Q+ie+se-3)<.1)return this.set(1,0,0,0),this;G=Math.PI;const ue=(Q+1)/2,ae=(ie+1)/2,de=(se+1)/2,be=(ee+te)/4,he=(q+ce)/4,Le=(ne+le)/4;return ue>ae&&ue>de?ue<.01?(W=0,F=.707106781,U=.707106781):(W=Math.sqrt(ue),F=be/W,U=he/W):ae>de?ae<.01?(W=.707106781,F=0,U=.707106781):(F=Math.sqrt(ae),W=be/F,U=Le/F):de<.01?(W=.707106781,F=.707106781,U=0):(U=Math.sqrt(de),W=he/U,F=Le/U),this.set(W,F,U,G),this}let pe=Math.sqrt((le-ne)*(le-ne)+(q-ce)*(q-ce)+(te-ee)*(te-ee));return Math.abs(pe)<.001&&(pe=1),this.x=(le-ne)/pe,this.y=(q-ce)/pe,this.z=(te-ee)/pe,this.w=Math.acos((Q+ie+se-1)/2),this}min(Z){return this.x=Math.min(this.x,Z.x),this.y=Math.min(this.y,Z.y),this.z=Math.min(this.z,Z.z),this.w=Math.min(this.w,Z.w),this}max(Z){return this.x=Math.max(this.x,Z.x),this.y=Math.max(this.y,Z.y),this.z=Math.max(this.z,Z.z),this.w=Math.max(this.w,Z.w),this}clamp(Z,G){return this.x=Math.max(Z.x,Math.min(G.x,this.x)),this.y=Math.max(Z.y,Math.min(G.y,this.y)),this.z=Math.max(Z.z,Math.min(G.z,this.z)),this.w=Math.max(Z.w,Math.min(G.w,this.w)),this}clampScalar(Z,G){return this.x=Math.max(Z,Math.min(G,this.x)),this.y=Math.max(Z,Math.min(G,this.y)),this.z=Math.max(Z,Math.min(G,this.z)),this.w=Math.max(Z,Math.min(G,this.w)),this}clampLength(Z,G){const W=this.length();return this.divideScalar(W||1).multiplyScalar(Math.max(Z,Math.min(G,W)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(Z){return this.x*Z.x+this.y*Z.y+this.z*Z.z+this.w*Z.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(Z){return this.normalize().multiplyScalar(Z)}lerp(Z,G){return this.x+=(Z.x-this.x)*G,this.y+=(Z.y-this.y)*G,this.z+=(Z.z-this.z)*G,this.w+=(Z.w-this.w)*G,this}lerpVectors(Z,G,W){return this.x=Z.x+(G.x-Z.x)*W,this.y=Z.y+(G.y-Z.y)*W,this.z=Z.z+(G.z-Z.z)*W,this.w=Z.w+(G.w-Z.w)*W,this}equals(Z){return Z.x===this.x&&Z.y===this.y&&Z.z===this.z&&Z.w===this.w}fromArray(Z,G=0){return this.x=Z[G],this.y=Z[G+1],this.z=Z[G+2],this.w=Z[G+3],this}toArray(Z=[],G=0){return Z[G]=this.x,Z[G+1]=this.y,Z[G+2]=this.z,Z[G+3]=this.w,Z}fromBufferAttribute(Z,G){return this.x=Z.getX(G),this.y=Z.getY(G),this.z=Z.getZ(G),this.w=Z.getW(G),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(Z=1,G=1,W={}){super(),this.isRenderTarget=!0,this.width=Z,this.height=G,this.depth=1,this.scissor=new Vector4(0,0,Z,G),this.scissorTest=!1,this.viewport=new Vector4(0,0,Z,G);const F={width:Z,height:G,depth:1};W.encoding!==void 0&&(warnOnce("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),W.colorSpace=W.encoding===sRGBEncoding?SRGBColorSpace:NoColorSpace),W=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},W),this.texture=new Texture(F,W.mapping,W.wrapS,W.wrapT,W.magFilter,W.minFilter,W.format,W.type,W.anisotropy,W.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=W.generateMipmaps,this.texture.internalFormat=W.internalFormat,this.depthBuffer=W.depthBuffer,this.stencilBuffer=W.stencilBuffer,this.depthTexture=W.depthTexture,this.samples=W.samples}setSize(Z,G,W=1){(this.width!==Z||this.height!==G||this.depth!==W)&&(this.width=Z,this.height=G,this.depth=W,this.texture.image.width=Z,this.texture.image.height=G,this.texture.image.depth=W,this.dispose()),this.viewport.set(0,0,Z,G),this.scissor.set(0,0,Z,G)}clone(){return new this.constructor().copy(this)}copy(Z){this.width=Z.width,this.height=Z.height,this.depth=Z.depth,this.scissor.copy(Z.scissor),this.scissorTest=Z.scissorTest,this.viewport.copy(Z.viewport),this.texture=Z.texture.clone(),this.texture.isRenderTargetTexture=!0;const G=Object.assign({},Z.texture.image);return this.texture.source=new Source(G),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,Z.depthTexture!==null&&(this.depthTexture=Z.depthTexture.clone()),this.samples=Z.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(Z=1,G=1,W={}){super(Z,G,W),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(Z=null,G=1,W=1,F=1){super(null),this.isDataArrayTexture=!0,this.image={data:Z,width:G,height:W,depth:F},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(Z=null,G=1,W=1,F=1){super(null),this.isData3DTexture=!0,this.image={data:Z,width:G,height:W,depth:F},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(Z=0,G=0,W=0,F=1){this.isQuaternion=!0,this._x=Z,this._y=G,this._z=W,this._w=F}static slerpFlat(Z,G,W,F,U,J,Y){let D=W[F+0],Q=W[F+1],ee=W[F+2],q=W[F+3];const te=U[J+0],ie=U[J+1],ne=U[J+2],ce=U[J+3];if(Y===0){Z[G+0]=D,Z[G+1]=Q,Z[G+2]=ee,Z[G+3]=q;return}if(Y===1){Z[G+0]=te,Z[G+1]=ie,Z[G+2]=ne,Z[G+3]=ce;return}if(q!==ce||D!==te||Q!==ie||ee!==ne){let le=1-Y;const se=D*te+Q*ie+ee*ne+q*ce,pe=se>=0?1:-1,ue=1-se*se;if(ue>Number.EPSILON){const de=Math.sqrt(ue),be=Math.atan2(de,se*pe);le=Math.sin(le*be)/de,Y=Math.sin(Y*be)/de}const ae=Y*pe;if(D=D*le+te*ae,Q=Q*le+ie*ae,ee=ee*le+ne*ae,q=q*le+ce*ae,le===1-Y){const de=1/Math.sqrt(D*D+Q*Q+ee*ee+q*q);D*=de,Q*=de,ee*=de,q*=de}}Z[G]=D,Z[G+1]=Q,Z[G+2]=ee,Z[G+3]=q}static multiplyQuaternionsFlat(Z,G,W,F,U,J){const Y=W[F],D=W[F+1],Q=W[F+2],ee=W[F+3],q=U[J],te=U[J+1],ie=U[J+2],ne=U[J+3];return Z[G]=Y*ne+ee*q+D*ie-Q*te,Z[G+1]=D*ne+ee*te+Q*q-Y*ie,Z[G+2]=Q*ne+ee*ie+Y*te-D*q,Z[G+3]=ee*ne-Y*q-D*te-Q*ie,Z}get x(){return this._x}set x(Z){this._x=Z,this._onChangeCallback()}get y(){return this._y}set y(Z){this._y=Z,this._onChangeCallback()}get z(){return this._z}set z(Z){this._z=Z,this._onChangeCallback()}get w(){return this._w}set w(Z){this._w=Z,this._onChangeCallback()}set(Z,G,W,F){return this._x=Z,this._y=G,this._z=W,this._w=F,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(Z){return this._x=Z.x,this._y=Z.y,this._z=Z.z,this._w=Z.w,this._onChangeCallback(),this}setFromEuler(Z,G){const W=Z._x,F=Z._y,U=Z._z,J=Z._order,Y=Math.cos,D=Math.sin,Q=Y(W/2),ee=Y(F/2),q=Y(U/2),te=D(W/2),ie=D(F/2),ne=D(U/2);switch(J){case"XYZ":this._x=te*ee*q+Q*ie*ne,this._y=Q*ie*q-te*ee*ne,this._z=Q*ee*ne+te*ie*q,this._w=Q*ee*q-te*ie*ne;break;case"YXZ":this._x=te*ee*q+Q*ie*ne,this._y=Q*ie*q-te*ee*ne,this._z=Q*ee*ne-te*ie*q,this._w=Q*ee*q+te*ie*ne;break;case"ZXY":this._x=te*ee*q-Q*ie*ne,this._y=Q*ie*q+te*ee*ne,this._z=Q*ee*ne+te*ie*q,this._w=Q*ee*q-te*ie*ne;break;case"ZYX":this._x=te*ee*q-Q*ie*ne,this._y=Q*ie*q+te*ee*ne,this._z=Q*ee*ne-te*ie*q,this._w=Q*ee*q+te*ie*ne;break;case"YZX":this._x=te*ee*q+Q*ie*ne,this._y=Q*ie*q+te*ee*ne,this._z=Q*ee*ne-te*ie*q,this._w=Q*ee*q-te*ie*ne;break;case"XZY":this._x=te*ee*q-Q*ie*ne,this._y=Q*ie*q-te*ee*ne,this._z=Q*ee*ne+te*ie*q,this._w=Q*ee*q+te*ie*ne;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+J)}return G!==!1&&this._onChangeCallback(),this}setFromAxisAngle(Z,G){const W=G/2,F=Math.sin(W);return this._x=Z.x*F,this._y=Z.y*F,this._z=Z.z*F,this._w=Math.cos(W),this._onChangeCallback(),this}setFromRotationMatrix(Z){const G=Z.elements,W=G[0],F=G[4],U=G[8],J=G[1],Y=G[5],D=G[9],Q=G[2],ee=G[6],q=G[10],te=W+Y+q;if(te>0){const ie=.5/Math.sqrt(te+1);this._w=.25/ie,this._x=(ee-D)*ie,this._y=(U-Q)*ie,this._z=(J-F)*ie}else if(W>Y&&W>q){const ie=2*Math.sqrt(1+W-Y-q);this._w=(ee-D)/ie,this._x=.25*ie,this._y=(F+J)/ie,this._z=(U+Q)/ie}else if(Y>q){const ie=2*Math.sqrt(1+Y-W-q);this._w=(U-Q)/ie,this._x=(F+J)/ie,this._y=.25*ie,this._z=(D+ee)/ie}else{const ie=2*Math.sqrt(1+q-W-Y);this._w=(J-F)/ie,this._x=(U+Q)/ie,this._y=(D+ee)/ie,this._z=.25*ie}return this._onChangeCallback(),this}setFromUnitVectors(Z,G){let W=Z.dot(G)+1;return W<Number.EPSILON?(W=0,Math.abs(Z.x)>Math.abs(Z.z)?(this._x=-Z.y,this._y=Z.x,this._z=0,this._w=W):(this._x=0,this._y=-Z.z,this._z=Z.y,this._w=W)):(this._x=Z.y*G.z-Z.z*G.y,this._y=Z.z*G.x-Z.x*G.z,this._z=Z.x*G.y-Z.y*G.x,this._w=W),this.normalize()}angleTo(Z){return 2*Math.acos(Math.abs(clamp(this.dot(Z),-1,1)))}rotateTowards(Z,G){const W=this.angleTo(Z);if(W===0)return this;const F=Math.min(1,G/W);return this.slerp(Z,F),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(Z){return this._x*Z._x+this._y*Z._y+this._z*Z._z+this._w*Z._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let Z=this.length();return Z===0?(this._x=0,this._y=0,this._z=0,this._w=1):(Z=1/Z,this._x=this._x*Z,this._y=this._y*Z,this._z=this._z*Z,this._w=this._w*Z),this._onChangeCallback(),this}multiply(Z){return this.multiplyQuaternions(this,Z)}premultiply(Z){return this.multiplyQuaternions(Z,this)}multiplyQuaternions(Z,G){const W=Z._x,F=Z._y,U=Z._z,J=Z._w,Y=G._x,D=G._y,Q=G._z,ee=G._w;return this._x=W*ee+J*Y+F*Q-U*D,this._y=F*ee+J*D+U*Y-W*Q,this._z=U*ee+J*Q+W*D-F*Y,this._w=J*ee-W*Y-F*D-U*Q,this._onChangeCallback(),this}slerp(Z,G){if(G===0)return this;if(G===1)return this.copy(Z);const W=this._x,F=this._y,U=this._z,J=this._w;let Y=J*Z._w+W*Z._x+F*Z._y+U*Z._z;if(Y<0?(this._w=-Z._w,this._x=-Z._x,this._y=-Z._y,this._z=-Z._z,Y=-Y):this.copy(Z),Y>=1)return this._w=J,this._x=W,this._y=F,this._z=U,this;const D=1-Y*Y;if(D<=Number.EPSILON){const ie=1-G;return this._w=ie*J+G*this._w,this._x=ie*W+G*this._x,this._y=ie*F+G*this._y,this._z=ie*U+G*this._z,this.normalize(),this._onChangeCallback(),this}const Q=Math.sqrt(D),ee=Math.atan2(Q,Y),q=Math.sin((1-G)*ee)/Q,te=Math.sin(G*ee)/Q;return this._w=J*q+this._w*te,this._x=W*q+this._x*te,this._y=F*q+this._y*te,this._z=U*q+this._z*te,this._onChangeCallback(),this}slerpQuaternions(Z,G,W){return this.copy(Z).slerp(G,W)}random(){const Z=Math.random(),G=Math.sqrt(1-Z),W=Math.sqrt(Z),F=2*Math.PI*Math.random(),U=2*Math.PI*Math.random();return this.set(G*Math.cos(F),W*Math.sin(U),W*Math.cos(U),G*Math.sin(F))}equals(Z){return Z._x===this._x&&Z._y===this._y&&Z._z===this._z&&Z._w===this._w}fromArray(Z,G=0){return this._x=Z[G],this._y=Z[G+1],this._z=Z[G+2],this._w=Z[G+3],this._onChangeCallback(),this}toArray(Z=[],G=0){return Z[G]=this._x,Z[G+1]=this._y,Z[G+2]=this._z,Z[G+3]=this._w,Z}fromBufferAttribute(Z,G){return this._x=Z.getX(G),this._y=Z.getY(G),this._z=Z.getZ(G),this._w=Z.getW(G),this}toJSON(){return this.toArray()}_onChange(Z){return this._onChangeCallback=Z,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(Z=0,G=0,W=0){Vector3.prototype.isVector3=!0,this.x=Z,this.y=G,this.z=W}set(Z,G,W){return W===void 0&&(W=this.z),this.x=Z,this.y=G,this.z=W,this}setScalar(Z){return this.x=Z,this.y=Z,this.z=Z,this}setX(Z){return this.x=Z,this}setY(Z){return this.y=Z,this}setZ(Z){return this.z=Z,this}setComponent(Z,G){switch(Z){case 0:this.x=G;break;case 1:this.y=G;break;case 2:this.z=G;break;default:throw new Error("index is out of range: "+Z)}return this}getComponent(Z){switch(Z){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+Z)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(Z){return this.x=Z.x,this.y=Z.y,this.z=Z.z,this}add(Z){return this.x+=Z.x,this.y+=Z.y,this.z+=Z.z,this}addScalar(Z){return this.x+=Z,this.y+=Z,this.z+=Z,this}addVectors(Z,G){return this.x=Z.x+G.x,this.y=Z.y+G.y,this.z=Z.z+G.z,this}addScaledVector(Z,G){return this.x+=Z.x*G,this.y+=Z.y*G,this.z+=Z.z*G,this}sub(Z){return this.x-=Z.x,this.y-=Z.y,this.z-=Z.z,this}subScalar(Z){return this.x-=Z,this.y-=Z,this.z-=Z,this}subVectors(Z,G){return this.x=Z.x-G.x,this.y=Z.y-G.y,this.z=Z.z-G.z,this}multiply(Z){return this.x*=Z.x,this.y*=Z.y,this.z*=Z.z,this}multiplyScalar(Z){return this.x*=Z,this.y*=Z,this.z*=Z,this}multiplyVectors(Z,G){return this.x=Z.x*G.x,this.y=Z.y*G.y,this.z=Z.z*G.z,this}applyEuler(Z){return this.applyQuaternion(_quaternion$4.setFromEuler(Z))}applyAxisAngle(Z,G){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(Z,G))}applyMatrix3(Z){const G=this.x,W=this.y,F=this.z,U=Z.elements;return this.x=U[0]*G+U[3]*W+U[6]*F,this.y=U[1]*G+U[4]*W+U[7]*F,this.z=U[2]*G+U[5]*W+U[8]*F,this}applyNormalMatrix(Z){return this.applyMatrix3(Z).normalize()}applyMatrix4(Z){const G=this.x,W=this.y,F=this.z,U=Z.elements,J=1/(U[3]*G+U[7]*W+U[11]*F+U[15]);return this.x=(U[0]*G+U[4]*W+U[8]*F+U[12])*J,this.y=(U[1]*G+U[5]*W+U[9]*F+U[13])*J,this.z=(U[2]*G+U[6]*W+U[10]*F+U[14])*J,this}applyQuaternion(Z){const G=this.x,W=this.y,F=this.z,U=Z.x,J=Z.y,Y=Z.z,D=Z.w,Q=2*(J*F-Y*W),ee=2*(Y*G-U*F),q=2*(U*W-J*G);return this.x=G+D*Q+J*q-Y*ee,this.y=W+D*ee+Y*Q-U*q,this.z=F+D*q+U*ee-J*Q,this}project(Z){return this.applyMatrix4(Z.matrixWorldInverse).applyMatrix4(Z.projectionMatrix)}unproject(Z){return this.applyMatrix4(Z.projectionMatrixInverse).applyMatrix4(Z.matrixWorld)}transformDirection(Z){const G=this.x,W=this.y,F=this.z,U=Z.elements;return this.x=U[0]*G+U[4]*W+U[8]*F,this.y=U[1]*G+U[5]*W+U[9]*F,this.z=U[2]*G+U[6]*W+U[10]*F,this.normalize()}divide(Z){return this.x/=Z.x,this.y/=Z.y,this.z/=Z.z,this}divideScalar(Z){return this.multiplyScalar(1/Z)}min(Z){return this.x=Math.min(this.x,Z.x),this.y=Math.min(this.y,Z.y),this.z=Math.min(this.z,Z.z),this}max(Z){return this.x=Math.max(this.x,Z.x),this.y=Math.max(this.y,Z.y),this.z=Math.max(this.z,Z.z),this}clamp(Z,G){return this.x=Math.max(Z.x,Math.min(G.x,this.x)),this.y=Math.max(Z.y,Math.min(G.y,this.y)),this.z=Math.max(Z.z,Math.min(G.z,this.z)),this}clampScalar(Z,G){return this.x=Math.max(Z,Math.min(G,this.x)),this.y=Math.max(Z,Math.min(G,this.y)),this.z=Math.max(Z,Math.min(G,this.z)),this}clampLength(Z,G){const W=this.length();return this.divideScalar(W||1).multiplyScalar(Math.max(Z,Math.min(G,W)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(Z){return this.x*Z.x+this.y*Z.y+this.z*Z.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(Z){return this.normalize().multiplyScalar(Z)}lerp(Z,G){return this.x+=(Z.x-this.x)*G,this.y+=(Z.y-this.y)*G,this.z+=(Z.z-this.z)*G,this}lerpVectors(Z,G,W){return this.x=Z.x+(G.x-Z.x)*W,this.y=Z.y+(G.y-Z.y)*W,this.z=Z.z+(G.z-Z.z)*W,this}cross(Z){return this.crossVectors(this,Z)}crossVectors(Z,G){const W=Z.x,F=Z.y,U=Z.z,J=G.x,Y=G.y,D=G.z;return this.x=F*D-U*Y,this.y=U*J-W*D,this.z=W*Y-F*J,this}projectOnVector(Z){const G=Z.lengthSq();if(G===0)return this.set(0,0,0);const W=Z.dot(this)/G;return this.copy(Z).multiplyScalar(W)}projectOnPlane(Z){return _vector$b.copy(this).projectOnVector(Z),this.sub(_vector$b)}reflect(Z){return this.sub(_vector$b.copy(Z).multiplyScalar(2*this.dot(Z)))}angleTo(Z){const G=Math.sqrt(this.lengthSq()*Z.lengthSq());if(G===0)return Math.PI/2;const W=this.dot(Z)/G;return Math.acos(clamp(W,-1,1))}distanceTo(Z){return Math.sqrt(this.distanceToSquared(Z))}distanceToSquared(Z){const G=this.x-Z.x,W=this.y-Z.y,F=this.z-Z.z;return G*G+W*W+F*F}manhattanDistanceTo(Z){return Math.abs(this.x-Z.x)+Math.abs(this.y-Z.y)+Math.abs(this.z-Z.z)}setFromSpherical(Z){return this.setFromSphericalCoords(Z.radius,Z.phi,Z.theta)}setFromSphericalCoords(Z,G,W){const F=Math.sin(G)*Z;return this.x=F*Math.sin(W),this.y=Math.cos(G)*Z,this.z=F*Math.cos(W),this}setFromCylindrical(Z){return this.setFromCylindricalCoords(Z.radius,Z.theta,Z.y)}setFromCylindricalCoords(Z,G,W){return this.x=Z*Math.sin(G),this.y=W,this.z=Z*Math.cos(G),this}setFromMatrixPosition(Z){const G=Z.elements;return this.x=G[12],this.y=G[13],this.z=G[14],this}setFromMatrixScale(Z){const G=this.setFromMatrixColumn(Z,0).length(),W=this.setFromMatrixColumn(Z,1).length(),F=this.setFromMatrixColumn(Z,2).length();return this.x=G,this.y=W,this.z=F,this}setFromMatrixColumn(Z,G){return this.fromArray(Z.elements,G*4)}setFromMatrix3Column(Z,G){return this.fromArray(Z.elements,G*3)}setFromEuler(Z){return this.x=Z._x,this.y=Z._y,this.z=Z._z,this}setFromColor(Z){return this.x=Z.r,this.y=Z.g,this.z=Z.b,this}equals(Z){return Z.x===this.x&&Z.y===this.y&&Z.z===this.z}fromArray(Z,G=0){return this.x=Z[G],this.y=Z[G+1],this.z=Z[G+2],this}toArray(Z=[],G=0){return Z[G]=this.x,Z[G+1]=this.y,Z[G+2]=this.z,Z}fromBufferAttribute(Z,G){return this.x=Z.getX(G),this.y=Z.getY(G),this.z=Z.getZ(G),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const Z=(Math.random()-.5)*2,G=Math.random()*Math.PI*2,W=Math.sqrt(1-Z**2);return this.x=W*Math.cos(G),this.y=W*Math.sin(G),this.z=Z,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$b=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(Z=new Vector3(1/0,1/0,1/0),G=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=Z,this.max=G}set(Z,G){return this.min.copy(Z),this.max.copy(G),this}setFromArray(Z){this.makeEmpty();for(let G=0,W=Z.length;G<W;G+=3)this.expandByPoint(_vector$a.fromArray(Z,G));return this}setFromBufferAttribute(Z){this.makeEmpty();for(let G=0,W=Z.count;G<W;G++)this.expandByPoint(_vector$a.fromBufferAttribute(Z,G));return this}setFromPoints(Z){this.makeEmpty();for(let G=0,W=Z.length;G<W;G++)this.expandByPoint(Z[G]);return this}setFromCenterAndSize(Z,G){const W=_vector$a.copy(G).multiplyScalar(.5);return this.min.copy(Z).sub(W),this.max.copy(Z).add(W),this}setFromObject(Z,G=!1){return this.makeEmpty(),this.expandByObject(Z,G)}clone(){return new this.constructor().copy(this)}copy(Z){return this.min.copy(Z.min),this.max.copy(Z.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(Z){return this.isEmpty()?Z.set(0,0,0):Z.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(Z){return this.isEmpty()?Z.set(0,0,0):Z.subVectors(this.max,this.min)}expandByPoint(Z){return this.min.min(Z),this.max.max(Z),this}expandByVector(Z){return this.min.sub(Z),this.max.add(Z),this}expandByScalar(Z){return this.min.addScalar(-Z),this.max.addScalar(Z),this}expandByObject(Z,G=!1){Z.updateWorldMatrix(!1,!1);const W=Z.geometry;if(W!==void 0){const U=W.getAttribute("position");if(G===!0&&U!==void 0&&Z.isInstancedMesh!==!0)for(let J=0,Y=U.count;J<Y;J++)Z.isMesh===!0?Z.getVertexPosition(J,_vector$a):_vector$a.fromBufferAttribute(U,J),_vector$a.applyMatrix4(Z.matrixWorld),this.expandByPoint(_vector$a);else Z.boundingBox!==void 0?(Z.boundingBox===null&&Z.computeBoundingBox(),_box$3.copy(Z.boundingBox)):(W.boundingBox===null&&W.computeBoundingBox(),_box$3.copy(W.boundingBox)),_box$3.applyMatrix4(Z.matrixWorld),this.union(_box$3)}const F=Z.children;for(let U=0,J=F.length;U<J;U++)this.expandByObject(F[U],G);return this}containsPoint(Z){return!(Z.x<this.min.x||Z.x>this.max.x||Z.y<this.min.y||Z.y>this.max.y||Z.z<this.min.z||Z.z>this.max.z)}containsBox(Z){return this.min.x<=Z.min.x&&Z.max.x<=this.max.x&&this.min.y<=Z.min.y&&Z.max.y<=this.max.y&&this.min.z<=Z.min.z&&Z.max.z<=this.max.z}getParameter(Z,G){return G.set((Z.x-this.min.x)/(this.max.x-this.min.x),(Z.y-this.min.y)/(this.max.y-this.min.y),(Z.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(Z){return!(Z.max.x<this.min.x||Z.min.x>this.max.x||Z.max.y<this.min.y||Z.min.y>this.max.y||Z.max.z<this.min.z||Z.min.z>this.max.z)}intersectsSphere(Z){return this.clampPoint(Z.center,_vector$a),_vector$a.distanceToSquared(Z.center)<=Z.radius*Z.radius}intersectsPlane(Z){let G,W;return Z.normal.x>0?(G=Z.normal.x*this.min.x,W=Z.normal.x*this.max.x):(G=Z.normal.x*this.max.x,W=Z.normal.x*this.min.x),Z.normal.y>0?(G+=Z.normal.y*this.min.y,W+=Z.normal.y*this.max.y):(G+=Z.normal.y*this.max.y,W+=Z.normal.y*this.min.y),Z.normal.z>0?(G+=Z.normal.z*this.min.z,W+=Z.normal.z*this.max.z):(G+=Z.normal.z*this.max.z,W+=Z.normal.z*this.min.z),G<=-Z.constant&&W>=-Z.constant}intersectsTriangle(Z){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(Z.a,_center),_v1$7.subVectors(Z.b,_center),_v2$4.subVectors(Z.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let G=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(G,_v0$2,_v1$7,_v2$4,_extents)||(G=[1,0,0,0,1,0,0,0,1],!satForAxes(G,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),G=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(G,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(Z,G){return G.copy(Z).clamp(this.min,this.max)}distanceToPoint(Z){return this.clampPoint(Z,_vector$a).distanceTo(Z)}getBoundingSphere(Z){return this.isEmpty()?Z.makeEmpty():(this.getCenter(Z.center),Z.radius=this.getSize(_vector$a).length()*.5),Z}intersect(Z){return this.min.max(Z.min),this.max.min(Z.max),this.isEmpty()&&this.makeEmpty(),this}union(Z){return this.min.min(Z.min),this.max.max(Z.max),this}applyMatrix4(Z){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(Z),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(Z),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(Z),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(Z),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(Z),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(Z),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(Z),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(Z),this.setFromPoints(_points),this)}translate(Z){return this.min.add(Z),this.max.add(Z),this}equals(Z){return Z.min.equals(this.min)&&Z.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$a=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(X,Z,G,W,F){for(let U=0,J=X.length-3;U<=J;U+=3){_testAxis.fromArray(X,U);const Y=F.x*Math.abs(_testAxis.x)+F.y*Math.abs(_testAxis.y)+F.z*Math.abs(_testAxis.z),D=Z.dot(_testAxis),Q=G.dot(_testAxis),ee=W.dot(_testAxis);if(Math.max(-Math.max(D,Q,ee),Math.min(D,Q,ee))>Y)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(Z=new Vector3,G=-1){this.center=Z,this.radius=G}set(Z,G){return this.center.copy(Z),this.radius=G,this}setFromPoints(Z,G){const W=this.center;G!==void 0?W.copy(G):_box$2.setFromPoints(Z).getCenter(W);let F=0;for(let U=0,J=Z.length;U<J;U++)F=Math.max(F,W.distanceToSquared(Z[U]));return this.radius=Math.sqrt(F),this}copy(Z){return this.center.copy(Z.center),this.radius=Z.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(Z){return Z.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(Z){return Z.distanceTo(this.center)-this.radius}intersectsSphere(Z){const G=this.radius+Z.radius;return Z.center.distanceToSquared(this.center)<=G*G}intersectsBox(Z){return Z.intersectsSphere(this)}intersectsPlane(Z){return Math.abs(Z.distanceToPoint(this.center))<=this.radius}clampPoint(Z,G){const W=this.center.distanceToSquared(Z);return G.copy(Z),W>this.radius*this.radius&&(G.sub(this.center).normalize(),G.multiplyScalar(this.radius).add(this.center)),G}getBoundingBox(Z){return this.isEmpty()?(Z.makeEmpty(),Z):(Z.set(this.center,this.center),Z.expandByScalar(this.radius),Z)}applyMatrix4(Z){return this.center.applyMatrix4(Z),this.radius=this.radius*Z.getMaxScaleOnAxis(),this}translate(Z){return this.center.add(Z),this}expandByPoint(Z){if(this.isEmpty())return this.center.copy(Z),this.radius=0,this;_v1$6.subVectors(Z,this.center);const G=_v1$6.lengthSq();if(G>this.radius*this.radius){const W=Math.sqrt(G),F=(W-this.radius)*.5;this.center.addScaledVector(_v1$6,F/W),this.radius+=F}return this}union(Z){return Z.isEmpty()?this:this.isEmpty()?(this.copy(Z),this):(this.center.equals(Z.center)===!0?this.radius=Math.max(this.radius,Z.radius):(_v2$3.subVectors(Z.center,this.center).setLength(Z.radius),this.expandByPoint(_v1$6.copy(Z.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(Z.center).sub(_v2$3))),this)}equals(Z){return Z.center.equals(this.center)&&Z.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$9=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(Z=new Vector3,G=new Vector3(0,0,-1)){this.origin=Z,this.direction=G}set(Z,G){return this.origin.copy(Z),this.direction.copy(G),this}copy(Z){return this.origin.copy(Z.origin),this.direction.copy(Z.direction),this}at(Z,G){return G.copy(this.origin).addScaledVector(this.direction,Z)}lookAt(Z){return this.direction.copy(Z).sub(this.origin).normalize(),this}recast(Z){return this.origin.copy(this.at(Z,_vector$9)),this}closestPointToPoint(Z,G){G.subVectors(Z,this.origin);const W=G.dot(this.direction);return W<0?G.copy(this.origin):G.copy(this.origin).addScaledVector(this.direction,W)}distanceToPoint(Z){return Math.sqrt(this.distanceSqToPoint(Z))}distanceSqToPoint(Z){const G=_vector$9.subVectors(Z,this.origin).dot(this.direction);return G<0?this.origin.distanceToSquared(Z):(_vector$9.copy(this.origin).addScaledVector(this.direction,G),_vector$9.distanceToSquared(Z))}distanceSqToSegment(Z,G,W,F){_segCenter.copy(Z).add(G).multiplyScalar(.5),_segDir.copy(G).sub(Z).normalize(),_diff.copy(this.origin).sub(_segCenter);const U=Z.distanceTo(G)*.5,J=-this.direction.dot(_segDir),Y=_diff.dot(this.direction),D=-_diff.dot(_segDir),Q=_diff.lengthSq(),ee=Math.abs(1-J*J);let q,te,ie,ne;if(ee>0)if(q=J*D-Y,te=J*Y-D,ne=U*ee,q>=0)if(te>=-ne)if(te<=ne){const ce=1/ee;q*=ce,te*=ce,ie=q*(q+J*te+2*Y)+te*(J*q+te+2*D)+Q}else te=U,q=Math.max(0,-(J*te+Y)),ie=-q*q+te*(te+2*D)+Q;else te=-U,q=Math.max(0,-(J*te+Y)),ie=-q*q+te*(te+2*D)+Q;else te<=-ne?(q=Math.max(0,-(-J*U+Y)),te=q>0?-U:Math.min(Math.max(-U,-D),U),ie=-q*q+te*(te+2*D)+Q):te<=ne?(q=0,te=Math.min(Math.max(-U,-D),U),ie=te*(te+2*D)+Q):(q=Math.max(0,-(J*U+Y)),te=q>0?U:Math.min(Math.max(-U,-D),U),ie=-q*q+te*(te+2*D)+Q);else te=J>0?-U:U,q=Math.max(0,-(J*te+Y)),ie=-q*q+te*(te+2*D)+Q;return W&&W.copy(this.origin).addScaledVector(this.direction,q),F&&F.copy(_segCenter).addScaledVector(_segDir,te),ie}intersectSphere(Z,G){_vector$9.subVectors(Z.center,this.origin);const W=_vector$9.dot(this.direction),F=_vector$9.dot(_vector$9)-W*W,U=Z.radius*Z.radius;if(F>U)return null;const J=Math.sqrt(U-F),Y=W-J,D=W+J;return D<0?null:Y<0?this.at(D,G):this.at(Y,G)}intersectsSphere(Z){return this.distanceSqToPoint(Z.center)<=Z.radius*Z.radius}distanceToPlane(Z){const G=Z.normal.dot(this.direction);if(G===0)return Z.distanceToPoint(this.origin)===0?0:null;const W=-(this.origin.dot(Z.normal)+Z.constant)/G;return W>=0?W:null}intersectPlane(Z,G){const W=this.distanceToPlane(Z);return W===null?null:this.at(W,G)}intersectsPlane(Z){const G=Z.distanceToPoint(this.origin);return G===0||Z.normal.dot(this.direction)*G<0}intersectBox(Z,G){let W,F,U,J,Y,D;const Q=1/this.direction.x,ee=1/this.direction.y,q=1/this.direction.z,te=this.origin;return Q>=0?(W=(Z.min.x-te.x)*Q,F=(Z.max.x-te.x)*Q):(W=(Z.max.x-te.x)*Q,F=(Z.min.x-te.x)*Q),ee>=0?(U=(Z.min.y-te.y)*ee,J=(Z.max.y-te.y)*ee):(U=(Z.max.y-te.y)*ee,J=(Z.min.y-te.y)*ee),W>J||U>F||((U>W||isNaN(W))&&(W=U),(J<F||isNaN(F))&&(F=J),q>=0?(Y=(Z.min.z-te.z)*q,D=(Z.max.z-te.z)*q):(Y=(Z.max.z-te.z)*q,D=(Z.min.z-te.z)*q),W>D||Y>F)||((Y>W||W!==W)&&(W=Y),(D<F||F!==F)&&(F=D),F<0)?null:this.at(W>=0?W:F,G)}intersectsBox(Z){return this.intersectBox(Z,_vector$9)!==null}intersectTriangle(Z,G,W,F,U){_edge1.subVectors(G,Z),_edge2.subVectors(W,Z),_normal$1.crossVectors(_edge1,_edge2);let J=this.direction.dot(_normal$1),Y;if(J>0){if(F)return null;Y=1}else if(J<0)Y=-1,J=-J;else return null;_diff.subVectors(this.origin,Z);const D=Y*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(D<0)return null;const Q=Y*this.direction.dot(_edge1.cross(_diff));if(Q<0||D+Q>J)return null;const ee=-Y*_diff.dot(_normal$1);return ee<0?null:this.at(ee/J,U)}applyMatrix4(Z){return this.origin.applyMatrix4(Z),this.direction.transformDirection(Z),this}equals(Z){return Z.origin.equals(this.origin)&&Z.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(Z,G,W,F,U,J,Y,D,Q,ee,q,te,ie,ne,ce,le){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Z!==void 0&&this.set(Z,G,W,F,U,J,Y,D,Q,ee,q,te,ie,ne,ce,le)}set(Z,G,W,F,U,J,Y,D,Q,ee,q,te,ie,ne,ce,le){const se=this.elements;return se[0]=Z,se[4]=G,se[8]=W,se[12]=F,se[1]=U,se[5]=J,se[9]=Y,se[13]=D,se[2]=Q,se[6]=ee,se[10]=q,se[14]=te,se[3]=ie,se[7]=ne,se[11]=ce,se[15]=le,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(Z){const G=this.elements,W=Z.elements;return G[0]=W[0],G[1]=W[1],G[2]=W[2],G[3]=W[3],G[4]=W[4],G[5]=W[5],G[6]=W[6],G[7]=W[7],G[8]=W[8],G[9]=W[9],G[10]=W[10],G[11]=W[11],G[12]=W[12],G[13]=W[13],G[14]=W[14],G[15]=W[15],this}copyPosition(Z){const G=this.elements,W=Z.elements;return G[12]=W[12],G[13]=W[13],G[14]=W[14],this}setFromMatrix3(Z){const G=Z.elements;return this.set(G[0],G[3],G[6],0,G[1],G[4],G[7],0,G[2],G[5],G[8],0,0,0,0,1),this}extractBasis(Z,G,W){return Z.setFromMatrixColumn(this,0),G.setFromMatrixColumn(this,1),W.setFromMatrixColumn(this,2),this}makeBasis(Z,G,W){return this.set(Z.x,G.x,W.x,0,Z.y,G.y,W.y,0,Z.z,G.z,W.z,0,0,0,0,1),this}extractRotation(Z){const G=this.elements,W=Z.elements,F=1/_v1$5.setFromMatrixColumn(Z,0).length(),U=1/_v1$5.setFromMatrixColumn(Z,1).length(),J=1/_v1$5.setFromMatrixColumn(Z,2).length();return G[0]=W[0]*F,G[1]=W[1]*F,G[2]=W[2]*F,G[3]=0,G[4]=W[4]*U,G[5]=W[5]*U,G[6]=W[6]*U,G[7]=0,G[8]=W[8]*J,G[9]=W[9]*J,G[10]=W[10]*J,G[11]=0,G[12]=0,G[13]=0,G[14]=0,G[15]=1,this}makeRotationFromEuler(Z){const G=this.elements,W=Z.x,F=Z.y,U=Z.z,J=Math.cos(W),Y=Math.sin(W),D=Math.cos(F),Q=Math.sin(F),ee=Math.cos(U),q=Math.sin(U);if(Z.order==="XYZ"){const te=J*ee,ie=J*q,ne=Y*ee,ce=Y*q;G[0]=D*ee,G[4]=-D*q,G[8]=Q,G[1]=ie+ne*Q,G[5]=te-ce*Q,G[9]=-Y*D,G[2]=ce-te*Q,G[6]=ne+ie*Q,G[10]=J*D}else if(Z.order==="YXZ"){const te=D*ee,ie=D*q,ne=Q*ee,ce=Q*q;G[0]=te+ce*Y,G[4]=ne*Y-ie,G[8]=J*Q,G[1]=J*q,G[5]=J*ee,G[9]=-Y,G[2]=ie*Y-ne,G[6]=ce+te*Y,G[10]=J*D}else if(Z.order==="ZXY"){const te=D*ee,ie=D*q,ne=Q*ee,ce=Q*q;G[0]=te-ce*Y,G[4]=-J*q,G[8]=ne+ie*Y,G[1]=ie+ne*Y,G[5]=J*ee,G[9]=ce-te*Y,G[2]=-J*Q,G[6]=Y,G[10]=J*D}else if(Z.order==="ZYX"){const te=J*ee,ie=J*q,ne=Y*ee,ce=Y*q;G[0]=D*ee,G[4]=ne*Q-ie,G[8]=te*Q+ce,G[1]=D*q,G[5]=ce*Q+te,G[9]=ie*Q-ne,G[2]=-Q,G[6]=Y*D,G[10]=J*D}else if(Z.order==="YZX"){const te=J*D,ie=J*Q,ne=Y*D,ce=Y*Q;G[0]=D*ee,G[4]=ce-te*q,G[8]=ne*q+ie,G[1]=q,G[5]=J*ee,G[9]=-Y*ee,G[2]=-Q*ee,G[6]=ie*q+ne,G[10]=te-ce*q}else if(Z.order==="XZY"){const te=J*D,ie=J*Q,ne=Y*D,ce=Y*Q;G[0]=D*ee,G[4]=-q,G[8]=Q*ee,G[1]=te*q+ce,G[5]=J*ee,G[9]=ie*q-ne,G[2]=ne*q-ie,G[6]=Y*ee,G[10]=ce*q+te}return G[3]=0,G[7]=0,G[11]=0,G[12]=0,G[13]=0,G[14]=0,G[15]=1,this}makeRotationFromQuaternion(Z){return this.compose(_zero,Z,_one)}lookAt(Z,G,W){const F=this.elements;return _z.subVectors(Z,G),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(W,_z),_x.lengthSq()===0&&(Math.abs(W.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(W,_z)),_x.normalize(),_y.crossVectors(_z,_x),F[0]=_x.x,F[4]=_y.x,F[8]=_z.x,F[1]=_x.y,F[5]=_y.y,F[9]=_z.y,F[2]=_x.z,F[6]=_y.z,F[10]=_z.z,this}multiply(Z){return this.multiplyMatrices(this,Z)}premultiply(Z){return this.multiplyMatrices(Z,this)}multiplyMatrices(Z,G){const W=Z.elements,F=G.elements,U=this.elements,J=W[0],Y=W[4],D=W[8],Q=W[12],ee=W[1],q=W[5],te=W[9],ie=W[13],ne=W[2],ce=W[6],le=W[10],se=W[14],pe=W[3],ue=W[7],ae=W[11],de=W[15],be=F[0],he=F[4],Le=F[8],Xe=F[12],We=F[1],fe=F[5],Re=F[9],ye=F[13],re=F[2],Ze=F[6],Ge=F[10],ve=F[14],Te=F[3],xe=F[7],Ye=F[11],ge=F[15];return U[0]=J*be+Y*We+D*re+Q*Te,U[4]=J*he+Y*fe+D*Ze+Q*xe,U[8]=J*Le+Y*Re+D*Ge+Q*Ye,U[12]=J*Xe+Y*ye+D*ve+Q*ge,U[1]=ee*be+q*We+te*re+ie*Te,U[5]=ee*he+q*fe+te*Ze+ie*xe,U[9]=ee*Le+q*Re+te*Ge+ie*Ye,U[13]=ee*Xe+q*ye+te*ve+ie*ge,U[2]=ne*be+ce*We+le*re+se*Te,U[6]=ne*he+ce*fe+le*Ze+se*xe,U[10]=ne*Le+ce*Re+le*Ge+se*Ye,U[14]=ne*Xe+ce*ye+le*ve+se*ge,U[3]=pe*be+ue*We+ae*re+de*Te,U[7]=pe*he+ue*fe+ae*Ze+de*xe,U[11]=pe*Le+ue*Re+ae*Ge+de*Ye,U[15]=pe*Xe+ue*ye+ae*ve+de*ge,this}multiplyScalar(Z){const G=this.elements;return G[0]*=Z,G[4]*=Z,G[8]*=Z,G[12]*=Z,G[1]*=Z,G[5]*=Z,G[9]*=Z,G[13]*=Z,G[2]*=Z,G[6]*=Z,G[10]*=Z,G[14]*=Z,G[3]*=Z,G[7]*=Z,G[11]*=Z,G[15]*=Z,this}determinant(){const Z=this.elements,G=Z[0],W=Z[4],F=Z[8],U=Z[12],J=Z[1],Y=Z[5],D=Z[9],Q=Z[13],ee=Z[2],q=Z[6],te=Z[10],ie=Z[14],ne=Z[3],ce=Z[7],le=Z[11],se=Z[15];return ne*(+U*D*q-F*Q*q-U*Y*te+W*Q*te+F*Y*ie-W*D*ie)+ce*(+G*D*ie-G*Q*te+U*J*te-F*J*ie+F*Q*ee-U*D*ee)+le*(+G*Q*q-G*Y*ie-U*J*q+W*J*ie+U*Y*ee-W*Q*ee)+se*(-F*Y*ee-G*D*q+G*Y*te+F*J*q-W*J*te+W*D*ee)}transpose(){const Z=this.elements;let G;return G=Z[1],Z[1]=Z[4],Z[4]=G,G=Z[2],Z[2]=Z[8],Z[8]=G,G=Z[6],Z[6]=Z[9],Z[9]=G,G=Z[3],Z[3]=Z[12],Z[12]=G,G=Z[7],Z[7]=Z[13],Z[13]=G,G=Z[11],Z[11]=Z[14],Z[14]=G,this}setPosition(Z,G,W){const F=this.elements;return Z.isVector3?(F[12]=Z.x,F[13]=Z.y,F[14]=Z.z):(F[12]=Z,F[13]=G,F[14]=W),this}invert(){const Z=this.elements,G=Z[0],W=Z[1],F=Z[2],U=Z[3],J=Z[4],Y=Z[5],D=Z[6],Q=Z[7],ee=Z[8],q=Z[9],te=Z[10],ie=Z[11],ne=Z[12],ce=Z[13],le=Z[14],se=Z[15],pe=q*le*Q-ce*te*Q+ce*D*ie-Y*le*ie-q*D*se+Y*te*se,ue=ne*te*Q-ee*le*Q-ne*D*ie+J*le*ie+ee*D*se-J*te*se,ae=ee*ce*Q-ne*q*Q+ne*Y*ie-J*ce*ie-ee*Y*se+J*q*se,de=ne*q*D-ee*ce*D-ne*Y*te+J*ce*te+ee*Y*le-J*q*le,be=G*pe+W*ue+F*ae+U*de;if(be===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const he=1/be;return Z[0]=pe*he,Z[1]=(ce*te*U-q*le*U-ce*F*ie+W*le*ie+q*F*se-W*te*se)*he,Z[2]=(Y*le*U-ce*D*U+ce*F*Q-W*le*Q-Y*F*se+W*D*se)*he,Z[3]=(q*D*U-Y*te*U-q*F*Q+W*te*Q+Y*F*ie-W*D*ie)*he,Z[4]=ue*he,Z[5]=(ee*le*U-ne*te*U+ne*F*ie-G*le*ie-ee*F*se+G*te*se)*he,Z[6]=(ne*D*U-J*le*U-ne*F*Q+G*le*Q+J*F*se-G*D*se)*he,Z[7]=(J*te*U-ee*D*U+ee*F*Q-G*te*Q-J*F*ie+G*D*ie)*he,Z[8]=ae*he,Z[9]=(ne*q*U-ee*ce*U-ne*W*ie+G*ce*ie+ee*W*se-G*q*se)*he,Z[10]=(J*ce*U-ne*Y*U+ne*W*Q-G*ce*Q-J*W*se+G*Y*se)*he,Z[11]=(ee*Y*U-J*q*U-ee*W*Q+G*q*Q+J*W*ie-G*Y*ie)*he,Z[12]=de*he,Z[13]=(ee*ce*F-ne*q*F+ne*W*te-G*ce*te-ee*W*le+G*q*le)*he,Z[14]=(ne*Y*F-J*ce*F-ne*W*D+G*ce*D+J*W*le-G*Y*le)*he,Z[15]=(J*q*F-ee*Y*F+ee*W*D-G*q*D-J*W*te+G*Y*te)*he,this}scale(Z){const G=this.elements,W=Z.x,F=Z.y,U=Z.z;return G[0]*=W,G[4]*=F,G[8]*=U,G[1]*=W,G[5]*=F,G[9]*=U,G[2]*=W,G[6]*=F,G[10]*=U,G[3]*=W,G[7]*=F,G[11]*=U,this}getMaxScaleOnAxis(){const Z=this.elements,G=Z[0]*Z[0]+Z[1]*Z[1]+Z[2]*Z[2],W=Z[4]*Z[4]+Z[5]*Z[5]+Z[6]*Z[6],F=Z[8]*Z[8]+Z[9]*Z[9]+Z[10]*Z[10];return Math.sqrt(Math.max(G,W,F))}makeTranslation(Z,G,W){return Z.isVector3?this.set(1,0,0,Z.x,0,1,0,Z.y,0,0,1,Z.z,0,0,0,1):this.set(1,0,0,Z,0,1,0,G,0,0,1,W,0,0,0,1),this}makeRotationX(Z){const G=Math.cos(Z),W=Math.sin(Z);return this.set(1,0,0,0,0,G,-W,0,0,W,G,0,0,0,0,1),this}makeRotationY(Z){const G=Math.cos(Z),W=Math.sin(Z);return this.set(G,0,W,0,0,1,0,0,-W,0,G,0,0,0,0,1),this}makeRotationZ(Z){const G=Math.cos(Z),W=Math.sin(Z);return this.set(G,-W,0,0,W,G,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(Z,G){const W=Math.cos(G),F=Math.sin(G),U=1-W,J=Z.x,Y=Z.y,D=Z.z,Q=U*J,ee=U*Y;return this.set(Q*J+W,Q*Y-F*D,Q*D+F*Y,0,Q*Y+F*D,ee*Y+W,ee*D-F*J,0,Q*D-F*Y,ee*D+F*J,U*D*D+W,0,0,0,0,1),this}makeScale(Z,G,W){return this.set(Z,0,0,0,0,G,0,0,0,0,W,0,0,0,0,1),this}makeShear(Z,G,W,F,U,J){return this.set(1,W,U,0,Z,1,J,0,G,F,1,0,0,0,0,1),this}compose(Z,G,W){const F=this.elements,U=G._x,J=G._y,Y=G._z,D=G._w,Q=U+U,ee=J+J,q=Y+Y,te=U*Q,ie=U*ee,ne=U*q,ce=J*ee,le=J*q,se=Y*q,pe=D*Q,ue=D*ee,ae=D*q,de=W.x,be=W.y,he=W.z;return F[0]=(1-(ce+se))*de,F[1]=(ie+ae)*de,F[2]=(ne-ue)*de,F[3]=0,F[4]=(ie-ae)*be,F[5]=(1-(te+se))*be,F[6]=(le+pe)*be,F[7]=0,F[8]=(ne+ue)*he,F[9]=(le-pe)*he,F[10]=(1-(te+ce))*he,F[11]=0,F[12]=Z.x,F[13]=Z.y,F[14]=Z.z,F[15]=1,this}decompose(Z,G,W){const F=this.elements;let U=_v1$5.set(F[0],F[1],F[2]).length();const J=_v1$5.set(F[4],F[5],F[6]).length(),Y=_v1$5.set(F[8],F[9],F[10]).length();this.determinant()<0&&(U=-U),Z.x=F[12],Z.y=F[13],Z.z=F[14],_m1$2.copy(this);const Q=1/U,ee=1/J,q=1/Y;return _m1$2.elements[0]*=Q,_m1$2.elements[1]*=Q,_m1$2.elements[2]*=Q,_m1$2.elements[4]*=ee,_m1$2.elements[5]*=ee,_m1$2.elements[6]*=ee,_m1$2.elements[8]*=q,_m1$2.elements[9]*=q,_m1$2.elements[10]*=q,G.setFromRotationMatrix(_m1$2),W.x=U,W.y=J,W.z=Y,this}makePerspective(Z,G,W,F,U,J,Y=WebGLCoordinateSystem){const D=this.elements,Q=2*U/(G-Z),ee=2*U/(W-F),q=(G+Z)/(G-Z),te=(W+F)/(W-F);let ie,ne;if(Y===WebGLCoordinateSystem)ie=-(J+U)/(J-U),ne=-2*J*U/(J-U);else if(Y===WebGPUCoordinateSystem)ie=-J/(J-U),ne=-J*U/(J-U);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return D[0]=Q,D[4]=0,D[8]=q,D[12]=0,D[1]=0,D[5]=ee,D[9]=te,D[13]=0,D[2]=0,D[6]=0,D[10]=ie,D[14]=ne,D[3]=0,D[7]=0,D[11]=-1,D[15]=0,this}makeOrthographic(Z,G,W,F,U,J,Y=WebGLCoordinateSystem){const D=this.elements,Q=1/(G-Z),ee=1/(W-F),q=1/(J-U),te=(G+Z)*Q,ie=(W+F)*ee;let ne,ce;if(Y===WebGLCoordinateSystem)ne=(J+U)*q,ce=-2*q;else if(Y===WebGPUCoordinateSystem)ne=U*q,ce=-1*q;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return D[0]=2*Q,D[4]=0,D[8]=0,D[12]=-te,D[1]=0,D[5]=2*ee,D[9]=0,D[13]=-ie,D[2]=0,D[6]=0,D[10]=ce,D[14]=-ne,D[3]=0,D[7]=0,D[11]=0,D[15]=1,this}equals(Z){const G=this.elements,W=Z.elements;for(let F=0;F<16;F++)if(G[F]!==W[F])return!1;return!0}fromArray(Z,G=0){for(let W=0;W<16;W++)this.elements[W]=Z[W+G];return this}toArray(Z=[],G=0){const W=this.elements;return Z[G]=W[0],Z[G+1]=W[1],Z[G+2]=W[2],Z[G+3]=W[3],Z[G+4]=W[4],Z[G+5]=W[5],Z[G+6]=W[6],Z[G+7]=W[7],Z[G+8]=W[8],Z[G+9]=W[9],Z[G+10]=W[10],Z[G+11]=W[11],Z[G+12]=W[12],Z[G+13]=W[13],Z[G+14]=W[14],Z[G+15]=W[15],Z}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(Z=0,G=0,W=0,F=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=Z,this._y=G,this._z=W,this._order=F}get x(){return this._x}set x(Z){this._x=Z,this._onChangeCallback()}get y(){return this._y}set y(Z){this._y=Z,this._onChangeCallback()}get z(){return this._z}set z(Z){this._z=Z,this._onChangeCallback()}get order(){return this._order}set order(Z){this._order=Z,this._onChangeCallback()}set(Z,G,W,F=this._order){return this._x=Z,this._y=G,this._z=W,this._order=F,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(Z){return this._x=Z._x,this._y=Z._y,this._z=Z._z,this._order=Z._order,this._onChangeCallback(),this}setFromRotationMatrix(Z,G=this._order,W=!0){const F=Z.elements,U=F[0],J=F[4],Y=F[8],D=F[1],Q=F[5],ee=F[9],q=F[2],te=F[6],ie=F[10];switch(G){case"XYZ":this._y=Math.asin(clamp(Y,-1,1)),Math.abs(Y)<.9999999?(this._x=Math.atan2(-ee,ie),this._z=Math.atan2(-J,U)):(this._x=Math.atan2(te,Q),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(ee,-1,1)),Math.abs(ee)<.9999999?(this._y=Math.atan2(Y,ie),this._z=Math.atan2(D,Q)):(this._y=Math.atan2(-q,U),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(te,-1,1)),Math.abs(te)<.9999999?(this._y=Math.atan2(-q,ie),this._z=Math.atan2(-J,Q)):(this._y=0,this._z=Math.atan2(D,U));break;case"ZYX":this._y=Math.asin(-clamp(q,-1,1)),Math.abs(q)<.9999999?(this._x=Math.atan2(te,ie),this._z=Math.atan2(D,U)):(this._x=0,this._z=Math.atan2(-J,Q));break;case"YZX":this._z=Math.asin(clamp(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(-ee,Q),this._y=Math.atan2(-q,U)):(this._x=0,this._y=Math.atan2(Y,ie));break;case"XZY":this._z=Math.asin(-clamp(J,-1,1)),Math.abs(J)<.9999999?(this._x=Math.atan2(te,Q),this._y=Math.atan2(Y,U)):(this._x=Math.atan2(-ee,ie),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+G)}return this._order=G,W===!0&&this._onChangeCallback(),this}setFromQuaternion(Z,G,W){return _matrix.makeRotationFromQuaternion(Z),this.setFromRotationMatrix(_matrix,G,W)}setFromVector3(Z,G=this._order){return this.set(Z.x,Z.y,Z.z,G)}reorder(Z){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,Z)}equals(Z){return Z._x===this._x&&Z._y===this._y&&Z._z===this._z&&Z._order===this._order}fromArray(Z){return this._x=Z[0],this._y=Z[1],this._z=Z[2],Z[3]!==void 0&&(this._order=Z[3]),this._onChangeCallback(),this}toArray(Z=[],G=0){return Z[G]=this._x,Z[G+1]=this._y,Z[G+2]=this._z,Z[G+3]=this._order,Z}_onChange(Z){return this._onChangeCallback=Z,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(Z){this.mask=(1<<Z|0)>>>0}enable(Z){this.mask|=1<<Z|0}enableAll(){this.mask=-1}toggle(Z){this.mask^=1<<Z|0}disable(Z){this.mask&=~(1<<Z|0)}disableAll(){this.mask=0}test(Z){return(this.mask&Z.mask)!==0}isEnabled(Z){return(this.mask&(1<<Z|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const Z=new Vector3,G=new Euler,W=new Quaternion,F=new Vector3(1,1,1);function U(){W.setFromEuler(G,!1)}function J(){G.setFromQuaternion(W,void 0,!1)}G._onChange(U),W._onChange(J),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:Z},rotation:{configurable:!0,enumerable:!0,value:G},quaternion:{configurable:!0,enumerable:!0,value:W},scale:{configurable:!0,enumerable:!0,value:F},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(Z){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(Z),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(Z){return this.quaternion.premultiply(Z),this}setRotationFromAxisAngle(Z,G){this.quaternion.setFromAxisAngle(Z,G)}setRotationFromEuler(Z){this.quaternion.setFromEuler(Z,!0)}setRotationFromMatrix(Z){this.quaternion.setFromRotationMatrix(Z)}setRotationFromQuaternion(Z){this.quaternion.copy(Z)}rotateOnAxis(Z,G){return _q1.setFromAxisAngle(Z,G),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(Z,G){return _q1.setFromAxisAngle(Z,G),this.quaternion.premultiply(_q1),this}rotateX(Z){return this.rotateOnAxis(_xAxis,Z)}rotateY(Z){return this.rotateOnAxis(_yAxis,Z)}rotateZ(Z){return this.rotateOnAxis(_zAxis,Z)}translateOnAxis(Z,G){return _v1$4.copy(Z).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(G)),this}translateX(Z){return this.translateOnAxis(_xAxis,Z)}translateY(Z){return this.translateOnAxis(_yAxis,Z)}translateZ(Z){return this.translateOnAxis(_zAxis,Z)}localToWorld(Z){return this.updateWorldMatrix(!0,!1),Z.applyMatrix4(this.matrixWorld)}worldToLocal(Z){return this.updateWorldMatrix(!0,!1),Z.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(Z,G,W){Z.isVector3?_target.copy(Z):_target.set(Z,G,W);const F=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),F&&(_m1$1.extractRotation(F.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(Z){if(arguments.length>1){for(let G=0;G<arguments.length;G++)this.add(arguments[G]);return this}return Z===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",Z),this):(Z&&Z.isObject3D?(Z.parent!==null&&Z.parent.remove(Z),Z.parent=this,this.children.push(Z),Z.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",Z),this)}remove(Z){if(arguments.length>1){for(let W=0;W<arguments.length;W++)this.remove(arguments[W]);return this}const G=this.children.indexOf(Z);return G!==-1&&(Z.parent=null,this.children.splice(G,1),Z.dispatchEvent(_removedEvent)),this}removeFromParent(){const Z=this.parent;return Z!==null&&Z.remove(this),this}clear(){return this.remove(...this.children)}attach(Z){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),Z.parent!==null&&(Z.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(Z.parent.matrixWorld)),Z.applyMatrix4(_m1$1),this.add(Z),Z.updateWorldMatrix(!1,!0),this}getObjectById(Z){return this.getObjectByProperty("id",Z)}getObjectByName(Z){return this.getObjectByProperty("name",Z)}getObjectByProperty(Z,G){if(this[Z]===G)return this;for(let W=0,F=this.children.length;W<F;W++){const J=this.children[W].getObjectByProperty(Z,G);if(J!==void 0)return J}}getObjectsByProperty(Z,G){let W=[];this[Z]===G&&W.push(this);for(let F=0,U=this.children.length;F<U;F++){const J=this.children[F].getObjectsByProperty(Z,G);J.length>0&&(W=W.concat(J))}return W}getWorldPosition(Z){return this.updateWorldMatrix(!0,!1),Z.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(Z){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,Z,_scale$2),Z}getWorldScale(Z){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,Z),Z}getWorldDirection(Z){this.updateWorldMatrix(!0,!1);const G=this.matrixWorld.elements;return Z.set(G[8],G[9],G[10]).normalize()}raycast(){}traverse(Z){Z(this);const G=this.children;for(let W=0,F=G.length;W<F;W++)G[W].traverse(Z)}traverseVisible(Z){if(this.visible===!1)return;Z(this);const G=this.children;for(let W=0,F=G.length;W<F;W++)G[W].traverseVisible(Z)}traverseAncestors(Z){const G=this.parent;G!==null&&(Z(G),G.traverseAncestors(Z))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(Z){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||Z)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,Z=!0);const G=this.children;for(let W=0,F=G.length;W<F;W++){const U=G[W];(U.matrixWorldAutoUpdate===!0||Z===!0)&&U.updateMatrixWorld(Z)}}updateWorldMatrix(Z,G){const W=this.parent;if(Z===!0&&W!==null&&W.matrixWorldAutoUpdate===!0&&W.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),G===!0){const F=this.children;for(let U=0,J=F.length;U<J;U++){const Y=F[U];Y.matrixWorldAutoUpdate===!0&&Y.updateWorldMatrix(!1,!0)}}}toJSON(Z){const G=Z===void 0||typeof Z=="string",W={};G&&(Z={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},W.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const F={};F.uuid=this.uuid,F.type=this.type,this.name!==""&&(F.name=this.name),this.castShadow===!0&&(F.castShadow=!0),this.receiveShadow===!0&&(F.receiveShadow=!0),this.visible===!1&&(F.visible=!1),this.frustumCulled===!1&&(F.frustumCulled=!1),this.renderOrder!==0&&(F.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(F.userData=this.userData),F.layers=this.layers.mask,F.matrix=this.matrix.toArray(),F.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(F.matrixAutoUpdate=!1),this.isInstancedMesh&&(F.type="InstancedMesh",F.count=this.count,F.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(F.instanceColor=this.instanceColor.toJSON()));function U(Y,D){return Y[D.uuid]===void 0&&(Y[D.uuid]=D.toJSON(Z)),D.uuid}if(this.isScene)this.background&&(this.background.isColor?F.background=this.background.toJSON():this.background.isTexture&&(F.background=this.background.toJSON(Z).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(F.environment=this.environment.toJSON(Z).uuid);else if(this.isMesh||this.isLine||this.isPoints){F.geometry=U(Z.geometries,this.geometry);const Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){const D=Y.shapes;if(Array.isArray(D))for(let Q=0,ee=D.length;Q<ee;Q++){const q=D[Q];U(Z.shapes,q)}else U(Z.shapes,D)}}if(this.isSkinnedMesh&&(F.bindMode=this.bindMode,F.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(U(Z.skeletons,this.skeleton),F.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const Y=[];for(let D=0,Q=this.material.length;D<Q;D++)Y.push(U(Z.materials,this.material[D]));F.material=Y}else F.material=U(Z.materials,this.material);if(this.children.length>0){F.children=[];for(let Y=0;Y<this.children.length;Y++)F.children.push(this.children[Y].toJSON(Z).object)}if(this.animations.length>0){F.animations=[];for(let Y=0;Y<this.animations.length;Y++){const D=this.animations[Y];F.animations.push(U(Z.animations,D))}}if(G){const Y=J(Z.geometries),D=J(Z.materials),Q=J(Z.textures),ee=J(Z.images),q=J(Z.shapes),te=J(Z.skeletons),ie=J(Z.animations),ne=J(Z.nodes);Y.length>0&&(W.geometries=Y),D.length>0&&(W.materials=D),Q.length>0&&(W.textures=Q),ee.length>0&&(W.images=ee),q.length>0&&(W.shapes=q),te.length>0&&(W.skeletons=te),ie.length>0&&(W.animations=ie),ne.length>0&&(W.nodes=ne)}return W.object=F,W;function J(Y){const D=[];for(const Q in Y){const ee=Y[Q];delete ee.metadata,D.push(ee)}return D}}clone(Z){return new this.constructor().copy(this,Z)}copy(Z,G=!0){if(this.name=Z.name,this.up.copy(Z.up),this.position.copy(Z.position),this.rotation.order=Z.rotation.order,this.quaternion.copy(Z.quaternion),this.scale.copy(Z.scale),this.matrix.copy(Z.matrix),this.matrixWorld.copy(Z.matrixWorld),this.matrixAutoUpdate=Z.matrixAutoUpdate,this.matrixWorldNeedsUpdate=Z.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=Z.matrixWorldAutoUpdate,this.layers.mask=Z.layers.mask,this.visible=Z.visible,this.castShadow=Z.castShadow,this.receiveShadow=Z.receiveShadow,this.frustumCulled=Z.frustumCulled,this.renderOrder=Z.renderOrder,this.animations=Z.animations.slice(),this.userData=JSON.parse(JSON.stringify(Z.userData)),G===!0)for(let W=0;W<Z.children.length;W++){const F=Z.children[W];this.add(F.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;let warnedGetUV=!1;class Triangle{constructor(Z=new Vector3,G=new Vector3,W=new Vector3){this.a=Z,this.b=G,this.c=W}static getNormal(Z,G,W,F){F.subVectors(W,G),_v0$1.subVectors(Z,G),F.cross(_v0$1);const U=F.lengthSq();return U>0?F.multiplyScalar(1/Math.sqrt(U)):F.set(0,0,0)}static getBarycoord(Z,G,W,F,U){_v0$1.subVectors(F,G),_v1$3.subVectors(W,G),_v2$2.subVectors(Z,G);const J=_v0$1.dot(_v0$1),Y=_v0$1.dot(_v1$3),D=_v0$1.dot(_v2$2),Q=_v1$3.dot(_v1$3),ee=_v1$3.dot(_v2$2),q=J*Q-Y*Y;if(q===0)return U.set(-2,-1,-1);const te=1/q,ie=(Q*D-Y*ee)*te,ne=(J*ee-Y*D)*te;return U.set(1-ie-ne,ne,ie)}static containsPoint(Z,G,W,F){return this.getBarycoord(Z,G,W,F,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(Z,G,W,F,U,J,Y,D){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),this.getInterpolation(Z,G,W,F,U,J,Y,D)}static getInterpolation(Z,G,W,F,U,J,Y,D){return this.getBarycoord(Z,G,W,F,_v3$1),D.setScalar(0),D.addScaledVector(U,_v3$1.x),D.addScaledVector(J,_v3$1.y),D.addScaledVector(Y,_v3$1.z),D}static isFrontFacing(Z,G,W,F){return _v0$1.subVectors(W,G),_v1$3.subVectors(Z,G),_v0$1.cross(_v1$3).dot(F)<0}set(Z,G,W){return this.a.copy(Z),this.b.copy(G),this.c.copy(W),this}setFromPointsAndIndices(Z,G,W,F){return this.a.copy(Z[G]),this.b.copy(Z[W]),this.c.copy(Z[F]),this}setFromAttributeAndIndices(Z,G,W,F){return this.a.fromBufferAttribute(Z,G),this.b.fromBufferAttribute(Z,W),this.c.fromBufferAttribute(Z,F),this}clone(){return new this.constructor().copy(this)}copy(Z){return this.a.copy(Z.a),this.b.copy(Z.b),this.c.copy(Z.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(Z){return Z.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(Z){return Triangle.getNormal(this.a,this.b,this.c,Z)}getPlane(Z){return Z.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(Z,G){return Triangle.getBarycoord(Z,this.a,this.b,this.c,G)}getUV(Z,G,W,F,U){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),Triangle.getInterpolation(Z,this.a,this.b,this.c,G,W,F,U)}getInterpolation(Z,G,W,F,U){return Triangle.getInterpolation(Z,this.a,this.b,this.c,G,W,F,U)}containsPoint(Z){return Triangle.containsPoint(Z,this.a,this.b,this.c)}isFrontFacing(Z){return Triangle.isFrontFacing(this.a,this.b,this.c,Z)}intersectsBox(Z){return Z.intersectsTriangle(this)}closestPointToPoint(Z,G){const W=this.a,F=this.b,U=this.c;let J,Y;_vab.subVectors(F,W),_vac.subVectors(U,W),_vap.subVectors(Z,W);const D=_vab.dot(_vap),Q=_vac.dot(_vap);if(D<=0&&Q<=0)return G.copy(W);_vbp.subVectors(Z,F);const ee=_vab.dot(_vbp),q=_vac.dot(_vbp);if(ee>=0&&q<=ee)return G.copy(F);const te=D*q-ee*Q;if(te<=0&&D>=0&&ee<=0)return J=D/(D-ee),G.copy(W).addScaledVector(_vab,J);_vcp.subVectors(Z,U);const ie=_vab.dot(_vcp),ne=_vac.dot(_vcp);if(ne>=0&&ie<=ne)return G.copy(U);const ce=ie*Q-D*ne;if(ce<=0&&Q>=0&&ne<=0)return Y=Q/(Q-ne),G.copy(W).addScaledVector(_vac,Y);const le=ee*ne-ie*q;if(le<=0&&q-ee>=0&&ie-ne>=0)return _vbc.subVectors(U,F),Y=(q-ee)/(q-ee+(ie-ne)),G.copy(F).addScaledVector(_vbc,Y);const se=1/(le+ce+te);return J=ce*se,Y=te*se,G.copy(W).addScaledVector(_vab,J).addScaledVector(_vac,Y)}equals(Z){return Z.a.equals(this.a)&&Z.b.equals(this.b)&&Z.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(X,Z,G){return G<0&&(G+=1),G>1&&(G-=1),G<1/6?X+(Z-X)*6*G:G<1/2?Z:G<2/3?X+(Z-X)*6*(2/3-G):X}class Color{constructor(Z,G,W){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(Z,G,W)}set(Z,G,W){if(G===void 0&&W===void 0){const F=Z;F&&F.isColor?this.copy(F):typeof F=="number"?this.setHex(F):typeof F=="string"&&this.setStyle(F)}else this.setRGB(Z,G,W);return this}setScalar(Z){return this.r=Z,this.g=Z,this.b=Z,this}setHex(Z,G=SRGBColorSpace){return Z=Math.floor(Z),this.r=(Z>>16&255)/255,this.g=(Z>>8&255)/255,this.b=(Z&255)/255,ColorManagement.toWorkingColorSpace(this,G),this}setRGB(Z,G,W,F=ColorManagement.workingColorSpace){return this.r=Z,this.g=G,this.b=W,ColorManagement.toWorkingColorSpace(this,F),this}setHSL(Z,G,W,F=ColorManagement.workingColorSpace){if(Z=euclideanModulo(Z,1),G=clamp(G,0,1),W=clamp(W,0,1),G===0)this.r=this.g=this.b=W;else{const U=W<=.5?W*(1+G):W+G-W*G,J=2*W-U;this.r=hue2rgb(J,U,Z+1/3),this.g=hue2rgb(J,U,Z),this.b=hue2rgb(J,U,Z-1/3)}return ColorManagement.toWorkingColorSpace(this,F),this}setStyle(Z,G=SRGBColorSpace){function W(U){U!==void 0&&parseFloat(U)<1&&console.warn("THREE.Color: Alpha component of "+Z+" will be ignored.")}let F;if(F=/^(\w+)\(([^\)]*)\)/.exec(Z)){let U;const J=F[1],Y=F[2];switch(J){case"rgb":case"rgba":if(U=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return W(U[4]),this.setRGB(Math.min(255,parseInt(U[1],10))/255,Math.min(255,parseInt(U[2],10))/255,Math.min(255,parseInt(U[3],10))/255,G);if(U=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return W(U[4]),this.setRGB(Math.min(100,parseInt(U[1],10))/100,Math.min(100,parseInt(U[2],10))/100,Math.min(100,parseInt(U[3],10))/100,G);break;case"hsl":case"hsla":if(U=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return W(U[4]),this.setHSL(parseFloat(U[1])/360,parseFloat(U[2])/100,parseFloat(U[3])/100,G);break;default:console.warn("THREE.Color: Unknown color model "+Z)}}else if(F=/^\#([A-Fa-f\d]+)$/.exec(Z)){const U=F[1],J=U.length;if(J===3)return this.setRGB(parseInt(U.charAt(0),16)/15,parseInt(U.charAt(1),16)/15,parseInt(U.charAt(2),16)/15,G);if(J===6)return this.setHex(parseInt(U,16),G);console.warn("THREE.Color: Invalid hex color "+Z)}else if(Z&&Z.length>0)return this.setColorName(Z,G);return this}setColorName(Z,G=SRGBColorSpace){const W=_colorKeywords[Z.toLowerCase()];return W!==void 0?this.setHex(W,G):console.warn("THREE.Color: Unknown color "+Z),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(Z){return this.r=Z.r,this.g=Z.g,this.b=Z.b,this}copySRGBToLinear(Z){return this.r=SRGBToLinear(Z.r),this.g=SRGBToLinear(Z.g),this.b=SRGBToLinear(Z.b),this}copyLinearToSRGB(Z){return this.r=LinearToSRGB(Z.r),this.g=LinearToSRGB(Z.g),this.b=LinearToSRGB(Z.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(Z=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color$1.copy(this),Z),Math.round(clamp(_color$1.r*255,0,255))*65536+Math.round(clamp(_color$1.g*255,0,255))*256+Math.round(clamp(_color$1.b*255,0,255))}getHexString(Z=SRGBColorSpace){return("000000"+this.getHex(Z).toString(16)).slice(-6)}getHSL(Z,G=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color$1.copy(this),G);const W=_color$1.r,F=_color$1.g,U=_color$1.b,J=Math.max(W,F,U),Y=Math.min(W,F,U);let D,Q;const ee=(Y+J)/2;if(Y===J)D=0,Q=0;else{const q=J-Y;switch(Q=ee<=.5?q/(J+Y):q/(2-J-Y),J){case W:D=(F-U)/q+(F<U?6:0);break;case F:D=(U-W)/q+2;break;case U:D=(W-F)/q+4;break}D/=6}return Z.h=D,Z.s=Q,Z.l=ee,Z}getRGB(Z,G=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color$1.copy(this),G),Z.r=_color$1.r,Z.g=_color$1.g,Z.b=_color$1.b,Z}getStyle(Z=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color$1.copy(this),Z);const G=_color$1.r,W=_color$1.g,F=_color$1.b;return Z!==SRGBColorSpace?`color(${Z} ${G.toFixed(3)} ${W.toFixed(3)} ${F.toFixed(3)})`:`rgb(${Math.round(G*255)},${Math.round(W*255)},${Math.round(F*255)})`}offsetHSL(Z,G,W){return this.getHSL(_hslA),this.setHSL(_hslA.h+Z,_hslA.s+G,_hslA.l+W)}add(Z){return this.r+=Z.r,this.g+=Z.g,this.b+=Z.b,this}addColors(Z,G){return this.r=Z.r+G.r,this.g=Z.g+G.g,this.b=Z.b+G.b,this}addScalar(Z){return this.r+=Z,this.g+=Z,this.b+=Z,this}sub(Z){return this.r=Math.max(0,this.r-Z.r),this.g=Math.max(0,this.g-Z.g),this.b=Math.max(0,this.b-Z.b),this}multiply(Z){return this.r*=Z.r,this.g*=Z.g,this.b*=Z.b,this}multiplyScalar(Z){return this.r*=Z,this.g*=Z,this.b*=Z,this}lerp(Z,G){return this.r+=(Z.r-this.r)*G,this.g+=(Z.g-this.g)*G,this.b+=(Z.b-this.b)*G,this}lerpColors(Z,G,W){return this.r=Z.r+(G.r-Z.r)*W,this.g=Z.g+(G.g-Z.g)*W,this.b=Z.b+(G.b-Z.b)*W,this}lerpHSL(Z,G){this.getHSL(_hslA),Z.getHSL(_hslB);const W=lerp(_hslA.h,_hslB.h,G),F=lerp(_hslA.s,_hslB.s,G),U=lerp(_hslA.l,_hslB.l,G);return this.setHSL(W,F,U),this}setFromVector3(Z){return this.r=Z.x,this.g=Z.y,this.b=Z.z,this}applyMatrix3(Z){const G=this.r,W=this.g,F=this.b,U=Z.elements;return this.r=U[0]*G+U[3]*W+U[6]*F,this.g=U[1]*G+U[4]*W+U[7]*F,this.b=U[2]*G+U[5]*W+U[8]*F,this}equals(Z){return Z.r===this.r&&Z.g===this.g&&Z.b===this.b}fromArray(Z,G=0){return this.r=Z[G],this.g=Z[G+1],this.b=Z[G+2],this}toArray(Z=[],G=0){return Z[G]=this.r,Z[G+1]=this.g,Z[G+2]=this.b,Z}fromBufferAttribute(Z,G){return this.r=Z.getX(G),this.g=Z.getY(G),this.b=Z.getZ(G),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color$1=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(Z){this._alphaTest>0!=Z>0&&this.version++,this._alphaTest=Z}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(Z){if(Z!==void 0)for(const G in Z){const W=Z[G];if(W===void 0){console.warn(`THREE.Material: parameter '${G}' has value of undefined.`);continue}const F=this[G];if(F===void 0){console.warn(`THREE.Material: '${G}' is not a property of THREE.${this.type}.`);continue}F&&F.isColor?F.set(W):F&&F.isVector3&&W&&W.isVector3?F.copy(W):this[G]=W}}toJSON(Z){const G=Z===void 0||typeof Z=="string";G&&(Z={textures:{},images:{}});const W={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};W.uuid=this.uuid,W.type=this.type,this.name!==""&&(W.name=this.name),this.color&&this.color.isColor&&(W.color=this.color.getHex()),this.roughness!==void 0&&(W.roughness=this.roughness),this.metalness!==void 0&&(W.metalness=this.metalness),this.sheen!==void 0&&(W.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(W.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(W.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(W.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(W.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(W.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(W.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(W.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(W.shininess=this.shininess),this.clearcoat!==void 0&&(W.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(W.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(W.clearcoatMap=this.clearcoatMap.toJSON(Z).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(W.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(Z).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(W.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(Z).uuid,W.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(W.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(W.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(W.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(W.iridescenceMap=this.iridescenceMap.toJSON(Z).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(W.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(Z).uuid),this.anisotropy!==void 0&&(W.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(W.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(W.anisotropyMap=this.anisotropyMap.toJSON(Z).uuid),this.map&&this.map.isTexture&&(W.map=this.map.toJSON(Z).uuid),this.matcap&&this.matcap.isTexture&&(W.matcap=this.matcap.toJSON(Z).uuid),this.alphaMap&&this.alphaMap.isTexture&&(W.alphaMap=this.alphaMap.toJSON(Z).uuid),this.lightMap&&this.lightMap.isTexture&&(W.lightMap=this.lightMap.toJSON(Z).uuid,W.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(W.aoMap=this.aoMap.toJSON(Z).uuid,W.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(W.bumpMap=this.bumpMap.toJSON(Z).uuid,W.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(W.normalMap=this.normalMap.toJSON(Z).uuid,W.normalMapType=this.normalMapType,W.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(W.displacementMap=this.displacementMap.toJSON(Z).uuid,W.displacementScale=this.displacementScale,W.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(W.roughnessMap=this.roughnessMap.toJSON(Z).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(W.metalnessMap=this.metalnessMap.toJSON(Z).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(W.emissiveMap=this.emissiveMap.toJSON(Z).uuid),this.specularMap&&this.specularMap.isTexture&&(W.specularMap=this.specularMap.toJSON(Z).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(W.specularIntensityMap=this.specularIntensityMap.toJSON(Z).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(W.specularColorMap=this.specularColorMap.toJSON(Z).uuid),this.envMap&&this.envMap.isTexture&&(W.envMap=this.envMap.toJSON(Z).uuid,this.combine!==void 0&&(W.combine=this.combine)),this.envMapIntensity!==void 0&&(W.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(W.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(W.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(W.gradientMap=this.gradientMap.toJSON(Z).uuid),this.transmission!==void 0&&(W.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(W.transmissionMap=this.transmissionMap.toJSON(Z).uuid),this.thickness!==void 0&&(W.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(W.thicknessMap=this.thicknessMap.toJSON(Z).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(W.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(W.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(W.size=this.size),this.shadowSide!==null&&(W.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(W.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(W.blending=this.blending),this.side!==FrontSide&&(W.side=this.side),this.vertexColors===!0&&(W.vertexColors=!0),this.opacity<1&&(W.opacity=this.opacity),this.transparent===!0&&(W.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(W.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(W.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(W.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(W.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(W.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(W.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(W.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(W.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(W.depthFunc=this.depthFunc),this.depthTest===!1&&(W.depthTest=this.depthTest),this.depthWrite===!1&&(W.depthWrite=this.depthWrite),this.colorWrite===!1&&(W.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(W.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(W.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(W.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(W.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(W.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(W.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(W.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(W.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(W.rotation=this.rotation),this.polygonOffset===!0&&(W.polygonOffset=!0),this.polygonOffsetFactor!==0&&(W.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(W.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(W.linewidth=this.linewidth),this.dashSize!==void 0&&(W.dashSize=this.dashSize),this.gapSize!==void 0&&(W.gapSize=this.gapSize),this.scale!==void 0&&(W.scale=this.scale),this.dithering===!0&&(W.dithering=!0),this.alphaTest>0&&(W.alphaTest=this.alphaTest),this.alphaHash===!0&&(W.alphaHash=!0),this.alphaToCoverage===!0&&(W.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(W.premultipliedAlpha=!0),this.forceSinglePass===!0&&(W.forceSinglePass=!0),this.wireframe===!0&&(W.wireframe=!0),this.wireframeLinewidth>1&&(W.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(W.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(W.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(W.flatShading=!0),this.visible===!1&&(W.visible=!1),this.toneMapped===!1&&(W.toneMapped=!1),this.fog===!1&&(W.fog=!1),Object.keys(this.userData).length>0&&(W.userData=this.userData);function F(U){const J=[];for(const Y in U){const D=U[Y];delete D.metadata,J.push(D)}return J}if(G){const U=F(Z.textures),J=F(Z.images);U.length>0&&(W.textures=U),J.length>0&&(W.images=J)}return W}clone(){return new this.constructor().copy(this)}copy(Z){this.name=Z.name,this.blending=Z.blending,this.side=Z.side,this.vertexColors=Z.vertexColors,this.opacity=Z.opacity,this.transparent=Z.transparent,this.blendSrc=Z.blendSrc,this.blendDst=Z.blendDst,this.blendEquation=Z.blendEquation,this.blendSrcAlpha=Z.blendSrcAlpha,this.blendDstAlpha=Z.blendDstAlpha,this.blendEquationAlpha=Z.blendEquationAlpha,this.blendColor.copy(Z.blendColor),this.blendAlpha=Z.blendAlpha,this.depthFunc=Z.depthFunc,this.depthTest=Z.depthTest,this.depthWrite=Z.depthWrite,this.stencilWriteMask=Z.stencilWriteMask,this.stencilFunc=Z.stencilFunc,this.stencilRef=Z.stencilRef,this.stencilFuncMask=Z.stencilFuncMask,this.stencilFail=Z.stencilFail,this.stencilZFail=Z.stencilZFail,this.stencilZPass=Z.stencilZPass,this.stencilWrite=Z.stencilWrite;const G=Z.clippingPlanes;let W=null;if(G!==null){const F=G.length;W=new Array(F);for(let U=0;U!==F;++U)W[U]=G[U].clone()}return this.clippingPlanes=W,this.clipIntersection=Z.clipIntersection,this.clipShadows=Z.clipShadows,this.shadowSide=Z.shadowSide,this.colorWrite=Z.colorWrite,this.precision=Z.precision,this.polygonOffset=Z.polygonOffset,this.polygonOffsetFactor=Z.polygonOffsetFactor,this.polygonOffsetUnits=Z.polygonOffsetUnits,this.dithering=Z.dithering,this.alphaTest=Z.alphaTest,this.alphaHash=Z.alphaHash,this.alphaToCoverage=Z.alphaToCoverage,this.premultipliedAlpha=Z.premultipliedAlpha,this.forceSinglePass=Z.forceSinglePass,this.visible=Z.visible,this.toneMapped=Z.toneMapped,this.userData=JSON.parse(JSON.stringify(Z.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(Z){Z===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(Z){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(Z)}copy(Z){return super.copy(Z),this.color.copy(Z.color),this.map=Z.map,this.lightMap=Z.lightMap,this.lightMapIntensity=Z.lightMapIntensity,this.aoMap=Z.aoMap,this.aoMapIntensity=Z.aoMapIntensity,this.specularMap=Z.specularMap,this.alphaMap=Z.alphaMap,this.envMap=Z.envMap,this.combine=Z.combine,this.reflectivity=Z.reflectivity,this.refractionRatio=Z.refractionRatio,this.wireframe=Z.wireframe,this.wireframeLinewidth=Z.wireframeLinewidth,this.wireframeLinecap=Z.wireframeLinecap,this.wireframeLinejoin=Z.wireframeLinejoin,this.fog=Z.fog,this}}const _vector$8=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(Z,G,W=!1){if(Array.isArray(Z))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=Z,this.itemSize=G,this.count=Z!==void 0?Z.length/G:0,this.normalized=W,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(Z){Z===!0&&this.version++}setUsage(Z){return this.usage=Z,this}copy(Z){return this.name=Z.name,this.array=new Z.array.constructor(Z.array),this.itemSize=Z.itemSize,this.count=Z.count,this.normalized=Z.normalized,this.usage=Z.usage,this.gpuType=Z.gpuType,this}copyAt(Z,G,W){Z*=this.itemSize,W*=G.itemSize;for(let F=0,U=this.itemSize;F<U;F++)this.array[Z+F]=G.array[W+F];return this}copyArray(Z){return this.array.set(Z),this}applyMatrix3(Z){if(this.itemSize===2)for(let G=0,W=this.count;G<W;G++)_vector2$1.fromBufferAttribute(this,G),_vector2$1.applyMatrix3(Z),this.setXY(G,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let G=0,W=this.count;G<W;G++)_vector$8.fromBufferAttribute(this,G),_vector$8.applyMatrix3(Z),this.setXYZ(G,_vector$8.x,_vector$8.y,_vector$8.z);return this}applyMatrix4(Z){for(let G=0,W=this.count;G<W;G++)_vector$8.fromBufferAttribute(this,G),_vector$8.applyMatrix4(Z),this.setXYZ(G,_vector$8.x,_vector$8.y,_vector$8.z);return this}applyNormalMatrix(Z){for(let G=0,W=this.count;G<W;G++)_vector$8.fromBufferAttribute(this,G),_vector$8.applyNormalMatrix(Z),this.setXYZ(G,_vector$8.x,_vector$8.y,_vector$8.z);return this}transformDirection(Z){for(let G=0,W=this.count;G<W;G++)_vector$8.fromBufferAttribute(this,G),_vector$8.transformDirection(Z),this.setXYZ(G,_vector$8.x,_vector$8.y,_vector$8.z);return this}set(Z,G=0){return this.array.set(Z,G),this}getComponent(Z,G){let W=this.array[Z*this.itemSize+G];return this.normalized&&(W=denormalize(W,this.array)),W}setComponent(Z,G,W){return this.normalized&&(W=normalize$1(W,this.array)),this.array[Z*this.itemSize+G]=W,this}getX(Z){let G=this.array[Z*this.itemSize];return this.normalized&&(G=denormalize(G,this.array)),G}setX(Z,G){return this.normalized&&(G=normalize$1(G,this.array)),this.array[Z*this.itemSize]=G,this}getY(Z){let G=this.array[Z*this.itemSize+1];return this.normalized&&(G=denormalize(G,this.array)),G}setY(Z,G){return this.normalized&&(G=normalize$1(G,this.array)),this.array[Z*this.itemSize+1]=G,this}getZ(Z){let G=this.array[Z*this.itemSize+2];return this.normalized&&(G=denormalize(G,this.array)),G}setZ(Z,G){return this.normalized&&(G=normalize$1(G,this.array)),this.array[Z*this.itemSize+2]=G,this}getW(Z){let G=this.array[Z*this.itemSize+3];return this.normalized&&(G=denormalize(G,this.array)),G}setW(Z,G){return this.normalized&&(G=normalize$1(G,this.array)),this.array[Z*this.itemSize+3]=G,this}setXY(Z,G,W){return Z*=this.itemSize,this.normalized&&(G=normalize$1(G,this.array),W=normalize$1(W,this.array)),this.array[Z+0]=G,this.array[Z+1]=W,this}setXYZ(Z,G,W,F){return Z*=this.itemSize,this.normalized&&(G=normalize$1(G,this.array),W=normalize$1(W,this.array),F=normalize$1(F,this.array)),this.array[Z+0]=G,this.array[Z+1]=W,this.array[Z+2]=F,this}setXYZW(Z,G,W,F,U){return Z*=this.itemSize,this.normalized&&(G=normalize$1(G,this.array),W=normalize$1(W,this.array),F=normalize$1(F,this.array),U=normalize$1(U,this.array)),this.array[Z+0]=G,this.array[Z+1]=W,this.array[Z+2]=F,this.array[Z+3]=U,this}onUpload(Z){return this.onUploadCallback=Z,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const Z={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(Z.name=this.name),this.usage!==StaticDrawUsage&&(Z.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(Z.updateRange=this.updateRange),Z}}class Uint16BufferAttribute extends BufferAttribute{constructor(Z,G,W){super(new Uint16Array(Z),G,W)}}class Uint32BufferAttribute extends BufferAttribute{constructor(Z,G,W){super(new Uint32Array(Z),G,W)}}class Float32BufferAttribute extends BufferAttribute{constructor(Z,G,W){super(new Float32Array(Z),G,W)}}let _id$2=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$7=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(Z){return Array.isArray(Z)?this.index=new(arrayNeedsUint32(Z)?Uint32BufferAttribute:Uint16BufferAttribute)(Z,1):this.index=Z,this}getAttribute(Z){return this.attributes[Z]}setAttribute(Z,G){return this.attributes[Z]=G,this}deleteAttribute(Z){return delete this.attributes[Z],this}hasAttribute(Z){return this.attributes[Z]!==void 0}addGroup(Z,G,W=0){this.groups.push({start:Z,count:G,materialIndex:W})}clearGroups(){this.groups=[]}setDrawRange(Z,G){this.drawRange.start=Z,this.drawRange.count=G}applyMatrix4(Z){const G=this.attributes.position;G!==void 0&&(G.applyMatrix4(Z),G.needsUpdate=!0);const W=this.attributes.normal;if(W!==void 0){const U=new Matrix3().getNormalMatrix(Z);W.applyNormalMatrix(U),W.needsUpdate=!0}const F=this.attributes.tangent;return F!==void 0&&(F.transformDirection(Z),F.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(Z){return _m1.makeRotationFromQuaternion(Z),this.applyMatrix4(_m1),this}rotateX(Z){return _m1.makeRotationX(Z),this.applyMatrix4(_m1),this}rotateY(Z){return _m1.makeRotationY(Z),this.applyMatrix4(_m1),this}rotateZ(Z){return _m1.makeRotationZ(Z),this.applyMatrix4(_m1),this}translate(Z,G,W){return _m1.makeTranslation(Z,G,W),this.applyMatrix4(_m1),this}scale(Z,G,W){return _m1.makeScale(Z,G,W),this.applyMatrix4(_m1),this}lookAt(Z){return _obj.lookAt(Z),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(Z){const G=[];for(let W=0,F=Z.length;W<F;W++){const U=Z[W];G.push(U.x,U.y,U.z||0)}return this.setAttribute("position",new Float32BufferAttribute(G,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const Z=this.attributes.position,G=this.morphAttributes.position;if(Z&&Z.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(Z!==void 0){if(this.boundingBox.setFromBufferAttribute(Z),G)for(let W=0,F=G.length;W<F;W++){const U=G[W];_box$1.setFromBufferAttribute(U),this.morphTargetsRelative?(_vector$7.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$7),_vector$7.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$7)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const Z=this.attributes.position,G=this.morphAttributes.position;if(Z&&Z.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(Z){const W=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(Z),G)for(let U=0,J=G.length;U<J;U++){const Y=G[U];_boxMorphTargets.setFromBufferAttribute(Y),this.morphTargetsRelative?(_vector$7.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$7),_vector$7.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$7)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(W);let F=0;for(let U=0,J=Z.count;U<J;U++)_vector$7.fromBufferAttribute(Z,U),F=Math.max(F,W.distanceToSquared(_vector$7));if(G)for(let U=0,J=G.length;U<J;U++){const Y=G[U],D=this.morphTargetsRelative;for(let Q=0,ee=Y.count;Q<ee;Q++)_vector$7.fromBufferAttribute(Y,Q),D&&(_offset.fromBufferAttribute(Z,Q),_vector$7.add(_offset)),F=Math.max(F,W.distanceToSquared(_vector$7))}this.boundingSphere.radius=Math.sqrt(F),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const Z=this.index,G=this.attributes;if(Z===null||G.position===void 0||G.normal===void 0||G.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const W=Z.array,F=G.position.array,U=G.normal.array,J=G.uv.array,Y=F.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*Y),4));const D=this.getAttribute("tangent").array,Q=[],ee=[];for(let We=0;We<Y;We++)Q[We]=new Vector3,ee[We]=new Vector3;const q=new Vector3,te=new Vector3,ie=new Vector3,ne=new Vector2,ce=new Vector2,le=new Vector2,se=new Vector3,pe=new Vector3;function ue(We,fe,Re){q.fromArray(F,We*3),te.fromArray(F,fe*3),ie.fromArray(F,Re*3),ne.fromArray(J,We*2),ce.fromArray(J,fe*2),le.fromArray(J,Re*2),te.sub(q),ie.sub(q),ce.sub(ne),le.sub(ne);const ye=1/(ce.x*le.y-le.x*ce.y);isFinite(ye)&&(se.copy(te).multiplyScalar(le.y).addScaledVector(ie,-ce.y).multiplyScalar(ye),pe.copy(ie).multiplyScalar(ce.x).addScaledVector(te,-le.x).multiplyScalar(ye),Q[We].add(se),Q[fe].add(se),Q[Re].add(se),ee[We].add(pe),ee[fe].add(pe),ee[Re].add(pe))}let ae=this.groups;ae.length===0&&(ae=[{start:0,count:W.length}]);for(let We=0,fe=ae.length;We<fe;++We){const Re=ae[We],ye=Re.start,re=Re.count;for(let Ze=ye,Ge=ye+re;Ze<Ge;Ze+=3)ue(W[Ze+0],W[Ze+1],W[Ze+2])}const de=new Vector3,be=new Vector3,he=new Vector3,Le=new Vector3;function Xe(We){he.fromArray(U,We*3),Le.copy(he);const fe=Q[We];de.copy(fe),de.sub(he.multiplyScalar(he.dot(fe))).normalize(),be.crossVectors(Le,fe);const ye=be.dot(ee[We])<0?-1:1;D[We*4]=de.x,D[We*4+1]=de.y,D[We*4+2]=de.z,D[We*4+3]=ye}for(let We=0,fe=ae.length;We<fe;++We){const Re=ae[We],ye=Re.start,re=Re.count;for(let Ze=ye,Ge=ye+re;Ze<Ge;Ze+=3)Xe(W[Ze+0]),Xe(W[Ze+1]),Xe(W[Ze+2])}}computeVertexNormals(){const Z=this.index,G=this.getAttribute("position");if(G!==void 0){let W=this.getAttribute("normal");if(W===void 0)W=new BufferAttribute(new Float32Array(G.count*3),3),this.setAttribute("normal",W);else for(let te=0,ie=W.count;te<ie;te++)W.setXYZ(te,0,0,0);const F=new Vector3,U=new Vector3,J=new Vector3,Y=new Vector3,D=new Vector3,Q=new Vector3,ee=new Vector3,q=new Vector3;if(Z)for(let te=0,ie=Z.count;te<ie;te+=3){const ne=Z.getX(te+0),ce=Z.getX(te+1),le=Z.getX(te+2);F.fromBufferAttribute(G,ne),U.fromBufferAttribute(G,ce),J.fromBufferAttribute(G,le),ee.subVectors(J,U),q.subVectors(F,U),ee.cross(q),Y.fromBufferAttribute(W,ne),D.fromBufferAttribute(W,ce),Q.fromBufferAttribute(W,le),Y.add(ee),D.add(ee),Q.add(ee),W.setXYZ(ne,Y.x,Y.y,Y.z),W.setXYZ(ce,D.x,D.y,D.z),W.setXYZ(le,Q.x,Q.y,Q.z)}else for(let te=0,ie=G.count;te<ie;te+=3)F.fromBufferAttribute(G,te+0),U.fromBufferAttribute(G,te+1),J.fromBufferAttribute(G,te+2),ee.subVectors(J,U),q.subVectors(F,U),ee.cross(q),W.setXYZ(te+0,ee.x,ee.y,ee.z),W.setXYZ(te+1,ee.x,ee.y,ee.z),W.setXYZ(te+2,ee.x,ee.y,ee.z);this.normalizeNormals(),W.needsUpdate=!0}}normalizeNormals(){const Z=this.attributes.normal;for(let G=0,W=Z.count;G<W;G++)_vector$7.fromBufferAttribute(Z,G),_vector$7.normalize(),Z.setXYZ(G,_vector$7.x,_vector$7.y,_vector$7.z)}toNonIndexed(){function Z(Y,D){const Q=Y.array,ee=Y.itemSize,q=Y.normalized,te=new Q.constructor(D.length*ee);let ie=0,ne=0;for(let ce=0,le=D.length;ce<le;ce++){Y.isInterleavedBufferAttribute?ie=D[ce]*Y.data.stride+Y.offset:ie=D[ce]*ee;for(let se=0;se<ee;se++)te[ne++]=Q[ie++]}return new BufferAttribute(te,ee,q)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const G=new BufferGeometry,W=this.index.array,F=this.attributes;for(const Y in F){const D=F[Y],Q=Z(D,W);G.setAttribute(Y,Q)}const U=this.morphAttributes;for(const Y in U){const D=[],Q=U[Y];for(let ee=0,q=Q.length;ee<q;ee++){const te=Q[ee],ie=Z(te,W);D.push(ie)}G.morphAttributes[Y]=D}G.morphTargetsRelative=this.morphTargetsRelative;const J=this.groups;for(let Y=0,D=J.length;Y<D;Y++){const Q=J[Y];G.addGroup(Q.start,Q.count,Q.materialIndex)}return G}toJSON(){const Z={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!==""&&(Z.name=this.name),Object.keys(this.userData).length>0&&(Z.userData=this.userData),this.parameters!==void 0){const D=this.parameters;for(const Q in D)D[Q]!==void 0&&(Z[Q]=D[Q]);return Z}Z.data={attributes:{}};const G=this.index;G!==null&&(Z.data.index={type:G.array.constructor.name,array:Array.prototype.slice.call(G.array)});const W=this.attributes;for(const D in W){const Q=W[D];Z.data.attributes[D]=Q.toJSON(Z.data)}const F={};let U=!1;for(const D in this.morphAttributes){const Q=this.morphAttributes[D],ee=[];for(let q=0,te=Q.length;q<te;q++){const ie=Q[q];ee.push(ie.toJSON(Z.data))}ee.length>0&&(F[D]=ee,U=!0)}U&&(Z.data.morphAttributes=F,Z.data.morphTargetsRelative=this.morphTargetsRelative);const J=this.groups;J.length>0&&(Z.data.groups=JSON.parse(JSON.stringify(J)));const Y=this.boundingSphere;return Y!==null&&(Z.data.boundingSphere={center:Y.center.toArray(),radius:Y.radius}),Z}clone(){return new this.constructor().copy(this)}copy(Z){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const G={};this.name=Z.name;const W=Z.index;W!==null&&this.setIndex(W.clone(G));const F=Z.attributes;for(const Q in F){const ee=F[Q];this.setAttribute(Q,ee.clone(G))}const U=Z.morphAttributes;for(const Q in U){const ee=[],q=U[Q];for(let te=0,ie=q.length;te<ie;te++)ee.push(q[te].clone(G));this.morphAttributes[Q]=ee}this.morphTargetsRelative=Z.morphTargetsRelative;const J=Z.groups;for(let Q=0,ee=J.length;Q<ee;Q++){const q=J[Q];this.addGroup(q.start,q.count,q.materialIndex)}const Y=Z.boundingBox;Y!==null&&(this.boundingBox=Y.clone());const D=Z.boundingSphere;return D!==null&&(this.boundingSphere=D.clone()),this.drawRange.start=Z.drawRange.start,this.drawRange.count=Z.drawRange.count,this.userData=Z.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$5=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(Z=new BufferGeometry,G=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=Z,this.material=G,this.updateMorphTargets()}copy(Z,G){return super.copy(Z,G),Z.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=Z.morphTargetInfluences.slice()),Z.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},Z.morphTargetDictionary)),this.material=Array.isArray(Z.material)?Z.material.slice():Z.material,this.geometry=Z.geometry,this}updateMorphTargets(){const G=this.geometry.morphAttributes,W=Object.keys(G);if(W.length>0){const F=G[W[0]];if(F!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let U=0,J=F.length;U<J;U++){const Y=F[U].name||String(U);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=U}}}}getVertexPosition(Z,G){const W=this.geometry,F=W.attributes.position,U=W.morphAttributes.position,J=W.morphTargetsRelative;G.fromBufferAttribute(F,Z);const Y=this.morphTargetInfluences;if(U&&Y){_morphA.set(0,0,0);for(let D=0,Q=U.length;D<Q;D++){const ee=Y[D],q=U[D];ee!==0&&(_tempA.fromBufferAttribute(q,Z),J?_morphA.addScaledVector(_tempA,ee):_morphA.addScaledVector(_tempA.sub(G),ee))}G.add(_morphA)}return G}raycast(Z,G){const W=this.geometry,F=this.material,U=this.matrixWorld;F!==void 0&&(W.boundingSphere===null&&W.computeBoundingSphere(),_sphere$5.copy(W.boundingSphere),_sphere$5.applyMatrix4(U),_ray$3.copy(Z.ray).recast(Z.near),!(_sphere$5.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$5,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(Z.far-Z.near)**2))&&(_inverseMatrix$3.copy(U).invert(),_ray$3.copy(Z.ray).applyMatrix4(_inverseMatrix$3),!(W.boundingBox!==null&&_ray$3.intersectsBox(W.boundingBox)===!1)&&this._computeIntersections(Z,G,_ray$3)))}_computeIntersections(Z,G,W){let F;const U=this.geometry,J=this.material,Y=U.index,D=U.attributes.position,Q=U.attributes.uv,ee=U.attributes.uv1,q=U.attributes.normal,te=U.groups,ie=U.drawRange;if(Y!==null)if(Array.isArray(J))for(let ne=0,ce=te.length;ne<ce;ne++){const le=te[ne],se=J[le.materialIndex],pe=Math.max(le.start,ie.start),ue=Math.min(Y.count,Math.min(le.start+le.count,ie.start+ie.count));for(let ae=pe,de=ue;ae<de;ae+=3){const be=Y.getX(ae),he=Y.getX(ae+1),Le=Y.getX(ae+2);F=checkGeometryIntersection(this,se,Z,W,Q,ee,q,be,he,Le),F&&(F.faceIndex=Math.floor(ae/3),F.face.materialIndex=le.materialIndex,G.push(F))}}else{const ne=Math.max(0,ie.start),ce=Math.min(Y.count,ie.start+ie.count);for(let le=ne,se=ce;le<se;le+=3){const pe=Y.getX(le),ue=Y.getX(le+1),ae=Y.getX(le+2);F=checkGeometryIntersection(this,J,Z,W,Q,ee,q,pe,ue,ae),F&&(F.faceIndex=Math.floor(le/3),G.push(F))}}else if(D!==void 0)if(Array.isArray(J))for(let ne=0,ce=te.length;ne<ce;ne++){const le=te[ne],se=J[le.materialIndex],pe=Math.max(le.start,ie.start),ue=Math.min(D.count,Math.min(le.start+le.count,ie.start+ie.count));for(let ae=pe,de=ue;ae<de;ae+=3){const be=ae,he=ae+1,Le=ae+2;F=checkGeometryIntersection(this,se,Z,W,Q,ee,q,be,he,Le),F&&(F.faceIndex=Math.floor(ae/3),F.face.materialIndex=le.materialIndex,G.push(F))}}else{const ne=Math.max(0,ie.start),ce=Math.min(D.count,ie.start+ie.count);for(let le=ne,se=ce;le<se;le+=3){const pe=le,ue=le+1,ae=le+2;F=checkGeometryIntersection(this,J,Z,W,Q,ee,q,pe,ue,ae),F&&(F.faceIndex=Math.floor(le/3),G.push(F))}}}}function checkIntersection(X,Z,G,W,F,U,J,Y){let D;if(Z.side===BackSide?D=W.intersectTriangle(J,U,F,!0,Y):D=W.intersectTriangle(F,U,J,Z.side===FrontSide,Y),D===null)return null;_intersectionPointWorld.copy(Y),_intersectionPointWorld.applyMatrix4(X.matrixWorld);const Q=G.ray.origin.distanceTo(_intersectionPointWorld);return Q<G.near||Q>G.far?null:{distance:Q,point:_intersectionPointWorld.clone(),object:X}}function checkGeometryIntersection(X,Z,G,W,F,U,J,Y,D,Q){X.getVertexPosition(Y,_vA$1),X.getVertexPosition(D,_vB$1),X.getVertexPosition(Q,_vC$1);const ee=checkIntersection(X,Z,G,W,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(ee){F&&(_uvA$1.fromBufferAttribute(F,Y),_uvB$1.fromBufferAttribute(F,D),_uvC$1.fromBufferAttribute(F,Q),ee.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),U&&(_uvA$1.fromBufferAttribute(U,Y),_uvB$1.fromBufferAttribute(U,D),_uvC$1.fromBufferAttribute(U,Q),ee.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2),ee.uv2=ee.uv1),J&&(_normalA.fromBufferAttribute(J,Y),_normalB.fromBufferAttribute(J,D),_normalC.fromBufferAttribute(J,Q),ee.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),ee.normal.dot(W.direction)>0&&ee.normal.multiplyScalar(-1));const q={a:Y,b:D,c:Q,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,q.normal),ee.face=q}return ee}class BoxGeometry extends BufferGeometry{constructor(Z=1,G=1,W=1,F=1,U=1,J=1){super(),this.type="BoxGeometry",this.parameters={width:Z,height:G,depth:W,widthSegments:F,heightSegments:U,depthSegments:J};const Y=this;F=Math.floor(F),U=Math.floor(U),J=Math.floor(J);const D=[],Q=[],ee=[],q=[];let te=0,ie=0;ne("z","y","x",-1,-1,W,G,Z,J,U,0),ne("z","y","x",1,-1,W,G,-Z,J,U,1),ne("x","z","y",1,1,Z,W,G,F,J,2),ne("x","z","y",1,-1,Z,W,-G,F,J,3),ne("x","y","z",1,-1,Z,G,W,F,U,4),ne("x","y","z",-1,-1,Z,G,-W,F,U,5),this.setIndex(D),this.setAttribute("position",new Float32BufferAttribute(Q,3)),this.setAttribute("normal",new Float32BufferAttribute(ee,3)),this.setAttribute("uv",new Float32BufferAttribute(q,2));function ne(ce,le,se,pe,ue,ae,de,be,he,Le,Xe){const We=ae/he,fe=de/Le,Re=ae/2,ye=de/2,re=be/2,Ze=he+1,Ge=Le+1;let ve=0,Te=0;const xe=new Vector3;for(let Ye=0;Ye<Ge;Ye++){const ge=Ye*fe-ye;for(let Me=0;Me<Ze;Me++){const je=Me*We-Re;xe[ce]=je*pe,xe[le]=ge*ue,xe[se]=re,Q.push(xe.x,xe.y,xe.z),xe[ce]=0,xe[le]=0,xe[se]=be>0?1:-1,ee.push(xe.x,xe.y,xe.z),q.push(Me/he),q.push(1-Ye/Le),ve+=1}}for(let Ye=0;Ye<Le;Ye++)for(let ge=0;ge<he;ge++){const Me=te+ge+Ze*Ye,je=te+ge+Ze*(Ye+1),tt=te+(ge+1)+Ze*(Ye+1),it=te+(ge+1)+Ze*Ye;D.push(Me,je,it),D.push(je,tt,it),Te+=6}Y.addGroup(ie,Te,Xe),ie+=Te,te+=ve}}copy(Z){return super.copy(Z),this.parameters=Object.assign({},Z.parameters),this}static fromJSON(Z){return new BoxGeometry(Z.width,Z.height,Z.depth,Z.widthSegments,Z.heightSegments,Z.depthSegments)}}function cloneUniforms(X){const Z={};for(const G in X){Z[G]={};for(const W in X[G]){const F=X[G][W];F&&(F.isColor||F.isMatrix3||F.isMatrix4||F.isVector2||F.isVector3||F.isVector4||F.isTexture||F.isQuaternion)?F.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Z[G][W]=null):Z[G][W]=F.clone():Array.isArray(F)?Z[G][W]=F.slice():Z[G][W]=F}}return Z}function mergeUniforms(X){const Z={};for(let G=0;G<X.length;G++){const W=cloneUniforms(X[G]);for(const F in W)Z[F]=W[F]}return Z}function cloneUniformsGroups(X){const Z=[];for(let G=0;G<X.length;G++)Z.push(X[G].clone());return Z}function getUnlitUniformColorSpace(X){return X.getRenderTarget()===null?X.outputColorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(Z){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,Z!==void 0&&this.setValues(Z)}copy(Z){return super.copy(Z),this.fragmentShader=Z.fragmentShader,this.vertexShader=Z.vertexShader,this.uniforms=cloneUniforms(Z.uniforms),this.uniformsGroups=cloneUniformsGroups(Z.uniformsGroups),this.defines=Object.assign({},Z.defines),this.wireframe=Z.wireframe,this.wireframeLinewidth=Z.wireframeLinewidth,this.fog=Z.fog,this.lights=Z.lights,this.clipping=Z.clipping,this.extensions=Object.assign({},Z.extensions),this.glslVersion=Z.glslVersion,this}toJSON(Z){const G=super.toJSON(Z);G.glslVersion=this.glslVersion,G.uniforms={};for(const F in this.uniforms){const J=this.uniforms[F].value;J&&J.isTexture?G.uniforms[F]={type:"t",value:J.toJSON(Z).uuid}:J&&J.isColor?G.uniforms[F]={type:"c",value:J.getHex()}:J&&J.isVector2?G.uniforms[F]={type:"v2",value:J.toArray()}:J&&J.isVector3?G.uniforms[F]={type:"v3",value:J.toArray()}:J&&J.isVector4?G.uniforms[F]={type:"v4",value:J.toArray()}:J&&J.isMatrix3?G.uniforms[F]={type:"m3",value:J.toArray()}:J&&J.isMatrix4?G.uniforms[F]={type:"m4",value:J.toArray()}:G.uniforms[F]={value:J}}Object.keys(this.defines).length>0&&(G.defines=this.defines),G.vertexShader=this.vertexShader,G.fragmentShader=this.fragmentShader,G.lights=this.lights,G.clipping=this.clipping;const W={};for(const F in this.extensions)this.extensions[F]===!0&&(W[F]=!0);return Object.keys(W).length>0&&(G.extensions=W),G}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(Z,G){return super.copy(Z,G),this.matrixWorldInverse.copy(Z.matrixWorldInverse),this.projectionMatrix.copy(Z.projectionMatrix),this.projectionMatrixInverse.copy(Z.projectionMatrixInverse),this.coordinateSystem=Z.coordinateSystem,this}getWorldDirection(Z){return super.getWorldDirection(Z).negate()}updateMatrixWorld(Z){super.updateMatrixWorld(Z),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(Z,G){super.updateWorldMatrix(Z,G),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(Z=50,G=1,W=.1,F=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=Z,this.zoom=1,this.near=W,this.far=F,this.focus=10,this.aspect=G,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(Z,G){return super.copy(Z,G),this.fov=Z.fov,this.zoom=Z.zoom,this.near=Z.near,this.far=Z.far,this.focus=Z.focus,this.aspect=Z.aspect,this.view=Z.view===null?null:Object.assign({},Z.view),this.filmGauge=Z.filmGauge,this.filmOffset=Z.filmOffset,this}setFocalLength(Z){const G=.5*this.getFilmHeight()/Z;this.fov=RAD2DEG*2*Math.atan(G),this.updateProjectionMatrix()}getFocalLength(){const Z=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/Z}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(Z,G,W,F,U,J){this.aspect=Z/G,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=Z,this.view.fullHeight=G,this.view.offsetX=W,this.view.offsetY=F,this.view.width=U,this.view.height=J,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const Z=this.near;let G=Z*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,W=2*G,F=this.aspect*W,U=-.5*F;const J=this.view;if(this.view!==null&&this.view.enabled){const D=J.fullWidth,Q=J.fullHeight;U+=J.offsetX*F/D,G-=J.offsetY*W/Q,F*=J.width/D,W*=J.height/Q}const Y=this.filmOffset;Y!==0&&(U+=Z*Y/this.getFilmWidth()),this.projectionMatrix.makePerspective(U,U+F,G,G-W,Z,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(Z){const G=super.toJSON(Z);return G.object.fov=this.fov,G.object.zoom=this.zoom,G.object.near=this.near,G.object.far=this.far,G.object.focus=this.focus,G.object.aspect=this.aspect,this.view!==null&&(G.object.view=Object.assign({},this.view)),G.object.filmGauge=this.filmGauge,G.object.filmOffset=this.filmOffset,G}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(Z,G,W){super(),this.type="CubeCamera",this.renderTarget=W,this.coordinateSystem=null,this.activeMipmapLevel=0;const F=new PerspectiveCamera(fov,aspect,Z,G);F.layers=this.layers,this.add(F);const U=new PerspectiveCamera(fov,aspect,Z,G);U.layers=this.layers,this.add(U);const J=new PerspectiveCamera(fov,aspect,Z,G);J.layers=this.layers,this.add(J);const Y=new PerspectiveCamera(fov,aspect,Z,G);Y.layers=this.layers,this.add(Y);const D=new PerspectiveCamera(fov,aspect,Z,G);D.layers=this.layers,this.add(D);const Q=new PerspectiveCamera(fov,aspect,Z,G);Q.layers=this.layers,this.add(Q)}updateCoordinateSystem(){const Z=this.coordinateSystem,G=this.children.concat(),[W,F,U,J,Y,D]=G;for(const Q of G)this.remove(Q);if(Z===WebGLCoordinateSystem)W.up.set(0,1,0),W.lookAt(1,0,0),F.up.set(0,1,0),F.lookAt(-1,0,0),U.up.set(0,0,-1),U.lookAt(0,1,0),J.up.set(0,0,1),J.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),D.up.set(0,1,0),D.lookAt(0,0,-1);else if(Z===WebGPUCoordinateSystem)W.up.set(0,-1,0),W.lookAt(-1,0,0),F.up.set(0,-1,0),F.lookAt(1,0,0),U.up.set(0,0,1),U.lookAt(0,1,0),J.up.set(0,0,-1),J.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),D.up.set(0,-1,0),D.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+Z);for(const Q of G)this.add(Q),Q.updateMatrixWorld()}update(Z,G){this.parent===null&&this.updateMatrixWorld();const{renderTarget:W,activeMipmapLevel:F}=this;this.coordinateSystem!==Z.coordinateSystem&&(this.coordinateSystem=Z.coordinateSystem,this.updateCoordinateSystem());const[U,J,Y,D,Q,ee]=this.children,q=Z.getRenderTarget(),te=Z.getActiveCubeFace(),ie=Z.getActiveMipmapLevel(),ne=Z.xr.enabled;Z.xr.enabled=!1;const ce=W.texture.generateMipmaps;W.texture.generateMipmaps=!1,Z.setRenderTarget(W,0,F),Z.render(G,U),Z.setRenderTarget(W,1,F),Z.render(G,J),Z.setRenderTarget(W,2,F),Z.render(G,Y),Z.setRenderTarget(W,3,F),Z.render(G,D),Z.setRenderTarget(W,4,F),Z.render(G,Q),W.texture.generateMipmaps=ce,Z.setRenderTarget(W,5,F),Z.render(G,ee),Z.setRenderTarget(q,te,ie),Z.xr.enabled=ne,W.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(Z,G,W,F,U,J,Y,D,Q,ee){Z=Z!==void 0?Z:[],G=G!==void 0?G:CubeReflectionMapping,super(Z,G,W,F,U,J,Y,D,Q,ee),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(Z){this.image=Z}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(Z=1,G={}){super(Z,Z,G),this.isWebGLCubeRenderTarget=!0;const W={width:Z,height:Z,depth:1},F=[W,W,W,W,W,W];G.encoding!==void 0&&(warnOnce("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),G.colorSpace=G.encoding===sRGBEncoding?SRGBColorSpace:NoColorSpace),this.texture=new CubeTexture(F,G.mapping,G.wrapS,G.wrapT,G.magFilter,G.minFilter,G.format,G.type,G.anisotropy,G.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=G.generateMipmaps!==void 0?G.generateMipmaps:!1,this.texture.minFilter=G.minFilter!==void 0?G.minFilter:LinearFilter}fromEquirectangularTexture(Z,G){this.texture.type=G.type,this.texture.colorSpace=G.colorSpace,this.texture.generateMipmaps=G.generateMipmaps,this.texture.minFilter=G.minFilter,this.texture.magFilter=G.magFilter;const W={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},F=new BoxGeometry(5,5,5),U=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(W.uniforms),vertexShader:W.vertexShader,fragmentShader:W.fragmentShader,side:BackSide,blending:NoBlending});U.uniforms.tEquirect.value=G;const J=new Mesh(F,U),Y=G.minFilter;return G.minFilter===LinearMipmapLinearFilter&&(G.minFilter=LinearFilter),new CubeCamera(1,10,this).update(Z,J),G.minFilter=Y,J.geometry.dispose(),J.material.dispose(),this}clear(Z,G,W,F){const U=Z.getRenderTarget();for(let J=0;J<6;J++)Z.setRenderTarget(this,J),Z.clear(G,W,F);Z.setRenderTarget(U)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(Z=new Vector3(1,0,0),G=0){this.isPlane=!0,this.normal=Z,this.constant=G}set(Z,G){return this.normal.copy(Z),this.constant=G,this}setComponents(Z,G,W,F){return this.normal.set(Z,G,W),this.constant=F,this}setFromNormalAndCoplanarPoint(Z,G){return this.normal.copy(Z),this.constant=-G.dot(this.normal),this}setFromCoplanarPoints(Z,G,W){const F=_vector1.subVectors(W,G).cross(_vector2.subVectors(Z,G)).normalize();return this.setFromNormalAndCoplanarPoint(F,Z),this}copy(Z){return this.normal.copy(Z.normal),this.constant=Z.constant,this}normalize(){const Z=1/this.normal.length();return this.normal.multiplyScalar(Z),this.constant*=Z,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(Z){return this.normal.dot(Z)+this.constant}distanceToSphere(Z){return this.distanceToPoint(Z.center)-Z.radius}projectPoint(Z,G){return G.copy(Z).addScaledVector(this.normal,-this.distanceToPoint(Z))}intersectLine(Z,G){const W=Z.delta(_vector1),F=this.normal.dot(W);if(F===0)return this.distanceToPoint(Z.start)===0?G.copy(Z.start):null;const U=-(Z.start.dot(this.normal)+this.constant)/F;return U<0||U>1?null:G.copy(Z.start).addScaledVector(W,U)}intersectsLine(Z){const G=this.distanceToPoint(Z.start),W=this.distanceToPoint(Z.end);return G<0&&W>0||W<0&&G>0}intersectsBox(Z){return Z.intersectsPlane(this)}intersectsSphere(Z){return Z.intersectsPlane(this)}coplanarPoint(Z){return Z.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(Z,G){const W=G||_normalMatrix.getNormalMatrix(Z),F=this.coplanarPoint(_vector1).applyMatrix4(Z),U=this.normal.applyMatrix3(W).normalize();return this.constant=-F.dot(U),this}translate(Z){return this.constant-=Z.dot(this.normal),this}equals(Z){return Z.normal.equals(this.normal)&&Z.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$4=new Sphere,_vector$6=new Vector3;class Frustum{constructor(Z=new Plane,G=new Plane,W=new Plane,F=new Plane,U=new Plane,J=new Plane){this.planes=[Z,G,W,F,U,J]}set(Z,G,W,F,U,J){const Y=this.planes;return Y[0].copy(Z),Y[1].copy(G),Y[2].copy(W),Y[3].copy(F),Y[4].copy(U),Y[5].copy(J),this}copy(Z){const G=this.planes;for(let W=0;W<6;W++)G[W].copy(Z.planes[W]);return this}setFromProjectionMatrix(Z,G=WebGLCoordinateSystem){const W=this.planes,F=Z.elements,U=F[0],J=F[1],Y=F[2],D=F[3],Q=F[4],ee=F[5],q=F[6],te=F[7],ie=F[8],ne=F[9],ce=F[10],le=F[11],se=F[12],pe=F[13],ue=F[14],ae=F[15];if(W[0].setComponents(D-U,te-Q,le-ie,ae-se).normalize(),W[1].setComponents(D+U,te+Q,le+ie,ae+se).normalize(),W[2].setComponents(D+J,te+ee,le+ne,ae+pe).normalize(),W[3].setComponents(D-J,te-ee,le-ne,ae-pe).normalize(),W[4].setComponents(D-Y,te-q,le-ce,ae-ue).normalize(),G===WebGLCoordinateSystem)W[5].setComponents(D+Y,te+q,le+ce,ae+ue).normalize();else if(G===WebGPUCoordinateSystem)W[5].setComponents(Y,q,ce,ue).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+G);return this}intersectsObject(Z){if(Z.boundingSphere!==void 0)Z.boundingSphere===null&&Z.computeBoundingSphere(),_sphere$4.copy(Z.boundingSphere).applyMatrix4(Z.matrixWorld);else{const G=Z.geometry;G.boundingSphere===null&&G.computeBoundingSphere(),_sphere$4.copy(G.boundingSphere).applyMatrix4(Z.matrixWorld)}return this.intersectsSphere(_sphere$4)}intersectsSprite(Z){return _sphere$4.center.set(0,0,0),_sphere$4.radius=.7071067811865476,_sphere$4.applyMatrix4(Z.matrixWorld),this.intersectsSphere(_sphere$4)}intersectsSphere(Z){const G=this.planes,W=Z.center,F=-Z.radius;for(let U=0;U<6;U++)if(G[U].distanceToPoint(W)<F)return!1;return!0}intersectsBox(Z){const G=this.planes;for(let W=0;W<6;W++){const F=G[W];if(_vector$6.x=F.normal.x>0?Z.max.x:Z.min.x,_vector$6.y=F.normal.y>0?Z.max.y:Z.min.y,_vector$6.z=F.normal.z>0?Z.max.z:Z.min.z,F.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(Z){const G=this.planes;for(let W=0;W<6;W++)if(G[W].distanceToPoint(Z)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let X=null,Z=!1,G=null,W=null;function F(U,J){G(U,J),W=X.requestAnimationFrame(F)}return{start:function(){Z!==!0&&G!==null&&(W=X.requestAnimationFrame(F),Z=!0)},stop:function(){X.cancelAnimationFrame(W),Z=!1},setAnimationLoop:function(U){G=U},setContext:function(U){X=U}}}function WebGLAttributes(X,Z){const G=Z.isWebGL2,W=new WeakMap;function F(Q,ee){const q=Q.array,te=Q.usage,ie=X.createBuffer();X.bindBuffer(ee,ie),X.bufferData(ee,q,te),Q.onUploadCallback();let ne;if(q instanceof Float32Array)ne=X.FLOAT;else if(q instanceof Uint16Array)if(Q.isFloat16BufferAttribute)if(G)ne=X.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else ne=X.UNSIGNED_SHORT;else if(q instanceof Int16Array)ne=X.SHORT;else if(q instanceof Uint32Array)ne=X.UNSIGNED_INT;else if(q instanceof Int32Array)ne=X.INT;else if(q instanceof Int8Array)ne=X.BYTE;else if(q instanceof Uint8Array)ne=X.UNSIGNED_BYTE;else if(q instanceof Uint8ClampedArray)ne=X.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+q);return{buffer:ie,type:ne,bytesPerElement:q.BYTES_PER_ELEMENT,version:Q.version}}function U(Q,ee,q){const te=ee.array,ie=ee.updateRange;X.bindBuffer(q,Q),ie.count===-1?X.bufferSubData(q,0,te):(G?X.bufferSubData(q,ie.offset*te.BYTES_PER_ELEMENT,te,ie.offset,ie.count):X.bufferSubData(q,ie.offset*te.BYTES_PER_ELEMENT,te.subarray(ie.offset,ie.offset+ie.count)),ie.count=-1),ee.onUploadCallback()}function J(Q){return Q.isInterleavedBufferAttribute&&(Q=Q.data),W.get(Q)}function Y(Q){Q.isInterleavedBufferAttribute&&(Q=Q.data);const ee=W.get(Q);ee&&(X.deleteBuffer(ee.buffer),W.delete(Q))}function D(Q,ee){if(Q.isGLBufferAttribute){const te=W.get(Q);(!te||te.version<Q.version)&&W.set(Q,{buffer:Q.buffer,type:Q.type,bytesPerElement:Q.elementSize,version:Q.version});return}Q.isInterleavedBufferAttribute&&(Q=Q.data);const q=W.get(Q);q===void 0?W.set(Q,F(Q,ee)):q.version<Q.version&&(U(q.buffer,Q,ee),q.version=Q.version)}return{get:J,remove:Y,update:D}}class PlaneGeometry extends BufferGeometry{constructor(Z=1,G=1,W=1,F=1){super(),this.type="PlaneGeometry",this.parameters={width:Z,height:G,widthSegments:W,heightSegments:F};const U=Z/2,J=G/2,Y=Math.floor(W),D=Math.floor(F),Q=Y+1,ee=D+1,q=Z/Y,te=G/D,ie=[],ne=[],ce=[],le=[];for(let se=0;se<ee;se++){const pe=se*te-J;for(let ue=0;ue<Q;ue++){const ae=ue*q-U;ne.push(ae,-pe,0),ce.push(0,0,1),le.push(ue/Y),le.push(1-se/D)}}for(let se=0;se<D;se++)for(let pe=0;pe<Y;pe++){const ue=pe+Q*se,ae=pe+Q*(se+1),de=pe+1+Q*(se+1),be=pe+1+Q*se;ie.push(ue,ae,be),ie.push(ae,de,be)}this.setIndex(ie),this.setAttribute("position",new Float32BufferAttribute(ne,3)),this.setAttribute("normal",new Float32BufferAttribute(ce,3)),this.setAttribute("uv",new Float32BufferAttribute(le,2))}copy(Z){return super.copy(Z),this.parameters=Object.assign({},Z.parameters),this}static fromJSON(Z){return new PlaneGeometry(Z.width,Z.height,Z.widthSegments,Z.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common$7=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
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
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
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
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
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
}`,fragment$d=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
}`,fragment$b=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
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
}`,fragment$a=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
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
}`,fragment$9=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
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
}`,fragment$8=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
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
}`,fragment$7=`#define NORMAL
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
}`,vertex$6=`#define PHONG
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
}`,fragment$6=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
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
}`,fragment$5=`#define STANDARD
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
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
}`,fragment$4=`#define TOON
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
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
}`,fragment$2=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
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
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common:common$7,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(X,Z,G,W,F,U,J){const Y=new Color(0);let D=U===!0?0:1,Q,ee,q=null,te=0,ie=null;function ne(le,se){let pe=!1,ue=se.isScene===!0?se.background:null;ue&&ue.isTexture&&(ue=(se.backgroundBlurriness>0?G:Z).get(ue)),ue===null?ce(Y,D):ue&&ue.isColor&&(ce(ue,1),pe=!0);const ae=X.xr.getEnvironmentBlendMode();ae==="additive"?W.buffers.color.setClear(0,0,0,1,J):ae==="alpha-blend"&&W.buffers.color.setClear(0,0,0,0,J),(X.autoClear||pe)&&X.clear(X.autoClearColor,X.autoClearDepth,X.autoClearStencil),ue&&(ue.isCubeTexture||ue.mapping===CubeUVReflectionMapping)?(ee===void 0&&(ee=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),ee.geometry.deleteAttribute("normal"),ee.geometry.deleteAttribute("uv"),ee.onBeforeRender=function(de,be,he){this.matrixWorld.copyPosition(he.matrixWorld)},Object.defineProperty(ee.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),F.update(ee)),ee.material.uniforms.envMap.value=ue,ee.material.uniforms.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1,ee.material.uniforms.backgroundBlurriness.value=se.backgroundBlurriness,ee.material.uniforms.backgroundIntensity.value=se.backgroundIntensity,ee.material.toneMapped=ColorManagement.getTransfer(ue.colorSpace)!==SRGBTransfer,(q!==ue||te!==ue.version||ie!==X.toneMapping)&&(ee.material.needsUpdate=!0,q=ue,te=ue.version,ie=X.toneMapping),ee.layers.enableAll(),le.unshift(ee,ee.geometry,ee.material,0,0,null)):ue&&ue.isTexture&&(Q===void 0&&(Q=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),Q.geometry.deleteAttribute("normal"),Object.defineProperty(Q.material,"map",{get:function(){return this.uniforms.t2D.value}}),F.update(Q)),Q.material.uniforms.t2D.value=ue,Q.material.uniforms.backgroundIntensity.value=se.backgroundIntensity,Q.material.toneMapped=ColorManagement.getTransfer(ue.colorSpace)!==SRGBTransfer,ue.matrixAutoUpdate===!0&&ue.updateMatrix(),Q.material.uniforms.uvTransform.value.copy(ue.matrix),(q!==ue||te!==ue.version||ie!==X.toneMapping)&&(Q.material.needsUpdate=!0,q=ue,te=ue.version,ie=X.toneMapping),Q.layers.enableAll(),le.unshift(Q,Q.geometry,Q.material,0,0,null))}function ce(le,se){le.getRGB(_rgb,getUnlitUniformColorSpace(X)),W.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,se,J)}return{getClearColor:function(){return Y},setClearColor:function(le,se=1){Y.set(le),D=se,ce(Y,D)},getClearAlpha:function(){return D},setClearAlpha:function(le){D=le,ce(Y,D)},render:ne}}function WebGLBindingStates(X,Z,G,W){const F=X.getParameter(X.MAX_VERTEX_ATTRIBS),U=W.isWebGL2?null:Z.get("OES_vertex_array_object"),J=W.isWebGL2||U!==null,Y={},D=le(null);let Q=D,ee=!1;function q(re,Ze,Ge,ve,Te){let xe=!1;if(J){const Ye=ce(ve,Ge,Ze);Q!==Ye&&(Q=Ye,ie(Q.object)),xe=se(re,ve,Ge,Te),xe&&pe(re,ve,Ge,Te)}else{const Ye=Ze.wireframe===!0;(Q.geometry!==ve.id||Q.program!==Ge.id||Q.wireframe!==Ye)&&(Q.geometry=ve.id,Q.program=Ge.id,Q.wireframe=Ye,xe=!0)}Te!==null&&G.update(Te,X.ELEMENT_ARRAY_BUFFER),(xe||ee)&&(ee=!1,Le(re,Ze,Ge,ve),Te!==null&&X.bindBuffer(X.ELEMENT_ARRAY_BUFFER,G.get(Te).buffer))}function te(){return W.isWebGL2?X.createVertexArray():U.createVertexArrayOES()}function ie(re){return W.isWebGL2?X.bindVertexArray(re):U.bindVertexArrayOES(re)}function ne(re){return W.isWebGL2?X.deleteVertexArray(re):U.deleteVertexArrayOES(re)}function ce(re,Ze,Ge){const ve=Ge.wireframe===!0;let Te=Y[re.id];Te===void 0&&(Te={},Y[re.id]=Te);let xe=Te[Ze.id];xe===void 0&&(xe={},Te[Ze.id]=xe);let Ye=xe[ve];return Ye===void 0&&(Ye=le(te()),xe[ve]=Ye),Ye}function le(re){const Ze=[],Ge=[],ve=[];for(let Te=0;Te<F;Te++)Ze[Te]=0,Ge[Te]=0,ve[Te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Ze,enabledAttributes:Ge,attributeDivisors:ve,object:re,attributes:{},index:null}}function se(re,Ze,Ge,ve){const Te=Q.attributes,xe=Ze.attributes;let Ye=0;const ge=Ge.getAttributes();for(const Me in ge)if(ge[Me].location>=0){const tt=Te[Me];let it=xe[Me];if(it===void 0&&(Me==="instanceMatrix"&&re.instanceMatrix&&(it=re.instanceMatrix),Me==="instanceColor"&&re.instanceColor&&(it=re.instanceColor)),tt===void 0||tt.attribute!==it||it&&tt.data!==it.data)return!0;Ye++}return Q.attributesNum!==Ye||Q.index!==ve}function pe(re,Ze,Ge,ve){const Te={},xe=Ze.attributes;let Ye=0;const ge=Ge.getAttributes();for(const Me in ge)if(ge[Me].location>=0){let tt=xe[Me];tt===void 0&&(Me==="instanceMatrix"&&re.instanceMatrix&&(tt=re.instanceMatrix),Me==="instanceColor"&&re.instanceColor&&(tt=re.instanceColor));const it={};it.attribute=tt,tt&&tt.data&&(it.data=tt.data),Te[Me]=it,Ye++}Q.attributes=Te,Q.attributesNum=Ye,Q.index=ve}function ue(){const re=Q.newAttributes;for(let Ze=0,Ge=re.length;Ze<Ge;Ze++)re[Ze]=0}function ae(re){de(re,0)}function de(re,Ze){const Ge=Q.newAttributes,ve=Q.enabledAttributes,Te=Q.attributeDivisors;Ge[re]=1,ve[re]===0&&(X.enableVertexAttribArray(re),ve[re]=1),Te[re]!==Ze&&((W.isWebGL2?X:Z.get("ANGLE_instanced_arrays"))[W.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](re,Ze),Te[re]=Ze)}function be(){const re=Q.newAttributes,Ze=Q.enabledAttributes;for(let Ge=0,ve=Ze.length;Ge<ve;Ge++)Ze[Ge]!==re[Ge]&&(X.disableVertexAttribArray(Ge),Ze[Ge]=0)}function he(re,Ze,Ge,ve,Te,xe,Ye){Ye===!0?X.vertexAttribIPointer(re,Ze,Ge,Te,xe):X.vertexAttribPointer(re,Ze,Ge,ve,Te,xe)}function Le(re,Ze,Ge,ve){if(W.isWebGL2===!1&&(re.isInstancedMesh||ve.isInstancedBufferGeometry)&&Z.get("ANGLE_instanced_arrays")===null)return;ue();const Te=ve.attributes,xe=Ge.getAttributes(),Ye=Ze.defaultAttributeValues;for(const ge in xe){const Me=xe[ge];if(Me.location>=0){let je=Te[ge];if(je===void 0&&(ge==="instanceMatrix"&&re.instanceMatrix&&(je=re.instanceMatrix),ge==="instanceColor"&&re.instanceColor&&(je=re.instanceColor)),je!==void 0){const tt=je.normalized,it=je.itemSize,st=G.get(je);if(st===void 0)continue;const qe=st.buffer,ot=st.type,ut=st.bytesPerElement,dt=W.isWebGL2===!0&&(ot===X.INT||ot===X.UNSIGNED_INT||je.gpuType===IntType);if(je.isInterleavedBufferAttribute){const mt=je.data,Je=mt.stride,Ne=je.offset;if(mt.isInstancedInterleavedBuffer){for(let ke=0;ke<Me.locationSize;ke++)de(Me.location+ke,mt.meshPerAttribute);re.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ke=0;ke<Me.locationSize;ke++)ae(Me.location+ke);X.bindBuffer(X.ARRAY_BUFFER,qe);for(let ke=0;ke<Me.locationSize;ke++)he(Me.location+ke,it/Me.locationSize,ot,tt,Je*ut,(Ne+it/Me.locationSize*ke)*ut,dt)}else{if(je.isInstancedBufferAttribute){for(let mt=0;mt<Me.locationSize;mt++)de(Me.location+mt,je.meshPerAttribute);re.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let mt=0;mt<Me.locationSize;mt++)ae(Me.location+mt);X.bindBuffer(X.ARRAY_BUFFER,qe);for(let mt=0;mt<Me.locationSize;mt++)he(Me.location+mt,it/Me.locationSize,ot,tt,it*ut,it/Me.locationSize*mt*ut,dt)}}else if(Ye!==void 0){const tt=Ye[ge];if(tt!==void 0)switch(tt.length){case 2:X.vertexAttrib2fv(Me.location,tt);break;case 3:X.vertexAttrib3fv(Me.location,tt);break;case 4:X.vertexAttrib4fv(Me.location,tt);break;default:X.vertexAttrib1fv(Me.location,tt)}}}}be()}function Xe(){Re();for(const re in Y){const Ze=Y[re];for(const Ge in Ze){const ve=Ze[Ge];for(const Te in ve)ne(ve[Te].object),delete ve[Te];delete Ze[Ge]}delete Y[re]}}function We(re){if(Y[re.id]===void 0)return;const Ze=Y[re.id];for(const Ge in Ze){const ve=Ze[Ge];for(const Te in ve)ne(ve[Te].object),delete ve[Te];delete Ze[Ge]}delete Y[re.id]}function fe(re){for(const Ze in Y){const Ge=Y[Ze];if(Ge[re.id]===void 0)continue;const ve=Ge[re.id];for(const Te in ve)ne(ve[Te].object),delete ve[Te];delete Ge[re.id]}}function Re(){ye(),ee=!0,Q!==D&&(Q=D,ie(Q.object))}function ye(){D.geometry=null,D.program=null,D.wireframe=!1}return{setup:q,reset:Re,resetDefaultState:ye,dispose:Xe,releaseStatesOfGeometry:We,releaseStatesOfProgram:fe,initAttributes:ue,enableAttribute:ae,disableUnusedAttributes:be}}function WebGLBufferRenderer(X,Z,G,W){const F=W.isWebGL2;let U;function J(Q){U=Q}function Y(Q,ee){X.drawArrays(U,Q,ee),G.update(ee,U,1)}function D(Q,ee,q){if(q===0)return;let te,ie;if(F)te=X,ie="drawArraysInstanced";else if(te=Z.get("ANGLE_instanced_arrays"),ie="drawArraysInstancedANGLE",te===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}te[ie](U,Q,ee,q),G.update(ee,U,q)}this.setMode=J,this.render=Y,this.renderInstances=D}function WebGLCapabilities(X,Z,G){let W;function F(){if(W!==void 0)return W;if(Z.has("EXT_texture_filter_anisotropic")===!0){const he=Z.get("EXT_texture_filter_anisotropic");W=X.getParameter(he.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function U(he){if(he==="highp"){if(X.getShaderPrecisionFormat(X.VERTEX_SHADER,X.HIGH_FLOAT).precision>0&&X.getShaderPrecisionFormat(X.FRAGMENT_SHADER,X.HIGH_FLOAT).precision>0)return"highp";he="mediump"}return he==="mediump"&&X.getShaderPrecisionFormat(X.VERTEX_SHADER,X.MEDIUM_FLOAT).precision>0&&X.getShaderPrecisionFormat(X.FRAGMENT_SHADER,X.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const J=typeof WebGL2RenderingContext<"u"&&X.constructor.name==="WebGL2RenderingContext";let Y=G.precision!==void 0?G.precision:"highp";const D=U(Y);D!==Y&&(console.warn("THREE.WebGLRenderer:",Y,"not supported, using",D,"instead."),Y=D);const Q=J||Z.has("WEBGL_draw_buffers"),ee=G.logarithmicDepthBuffer===!0,q=X.getParameter(X.MAX_TEXTURE_IMAGE_UNITS),te=X.getParameter(X.MAX_VERTEX_TEXTURE_IMAGE_UNITS),ie=X.getParameter(X.MAX_TEXTURE_SIZE),ne=X.getParameter(X.MAX_CUBE_MAP_TEXTURE_SIZE),ce=X.getParameter(X.MAX_VERTEX_ATTRIBS),le=X.getParameter(X.MAX_VERTEX_UNIFORM_VECTORS),se=X.getParameter(X.MAX_VARYING_VECTORS),pe=X.getParameter(X.MAX_FRAGMENT_UNIFORM_VECTORS),ue=te>0,ae=J||Z.has("OES_texture_float"),de=ue&&ae,be=J?X.getParameter(X.MAX_SAMPLES):0;return{isWebGL2:J,drawBuffers:Q,getMaxAnisotropy:F,getMaxPrecision:U,precision:Y,logarithmicDepthBuffer:ee,maxTextures:q,maxVertexTextures:te,maxTextureSize:ie,maxCubemapSize:ne,maxAttributes:ce,maxVertexUniforms:le,maxVaryings:se,maxFragmentUniforms:pe,vertexTextures:ue,floatFragmentTextures:ae,floatVertexTextures:de,maxSamples:be}}function WebGLClipping(X){const Z=this;let G=null,W=0,F=!1,U=!1;const J=new Plane,Y=new Matrix3,D={value:null,needsUpdate:!1};this.uniform=D,this.numPlanes=0,this.numIntersection=0,this.init=function(q,te){const ie=q.length!==0||te||W!==0||F;return F=te,W=q.length,ie},this.beginShadows=function(){U=!0,ee(null)},this.endShadows=function(){U=!1},this.setGlobalState=function(q,te){G=ee(q,te,0)},this.setState=function(q,te,ie){const ne=q.clippingPlanes,ce=q.clipIntersection,le=q.clipShadows,se=X.get(q);if(!F||ne===null||ne.length===0||U&&!le)U?ee(null):Q();else{const pe=U?0:W,ue=pe*4;let ae=se.clippingState||null;D.value=ae,ae=ee(ne,te,ue,ie);for(let de=0;de!==ue;++de)ae[de]=G[de];se.clippingState=ae,this.numIntersection=ce?this.numPlanes:0,this.numPlanes+=pe}};function Q(){D.value!==G&&(D.value=G,D.needsUpdate=W>0),Z.numPlanes=W,Z.numIntersection=0}function ee(q,te,ie,ne){const ce=q!==null?q.length:0;let le=null;if(ce!==0){if(le=D.value,ne!==!0||le===null){const se=ie+ce*4,pe=te.matrixWorldInverse;Y.getNormalMatrix(pe),(le===null||le.length<se)&&(le=new Float32Array(se));for(let ue=0,ae=ie;ue!==ce;++ue,ae+=4)J.copy(q[ue]).applyMatrix4(pe,Y),J.normal.toArray(le,ae),le[ae+3]=J.constant}D.value=le,D.needsUpdate=!0}return Z.numPlanes=ce,Z.numIntersection=0,le}}function WebGLCubeMaps(X){let Z=new WeakMap;function G(J,Y){return Y===EquirectangularReflectionMapping?J.mapping=CubeReflectionMapping:Y===EquirectangularRefractionMapping&&(J.mapping=CubeRefractionMapping),J}function W(J){if(J&&J.isTexture&&J.isRenderTargetTexture===!1){const Y=J.mapping;if(Y===EquirectangularReflectionMapping||Y===EquirectangularRefractionMapping)if(Z.has(J)){const D=Z.get(J).texture;return G(D,J.mapping)}else{const D=J.image;if(D&&D.height>0){const Q=new WebGLCubeRenderTarget(D.height/2);return Q.fromEquirectangularTexture(X,J),Z.set(J,Q),J.addEventListener("dispose",F),G(Q.texture,J.mapping)}else return null}}return J}function F(J){const Y=J.target;Y.removeEventListener("dispose",F);const D=Z.get(Y);D!==void 0&&(Z.delete(Y),D.dispose())}function U(){Z=new WeakMap}return{get:W,dispose:U}}class OrthographicCamera extends Camera{constructor(Z=-1,G=1,W=1,F=-1,U=.1,J=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=Z,this.right=G,this.top=W,this.bottom=F,this.near=U,this.far=J,this.updateProjectionMatrix()}copy(Z,G){return super.copy(Z,G),this.left=Z.left,this.right=Z.right,this.top=Z.top,this.bottom=Z.bottom,this.near=Z.near,this.far=Z.far,this.zoom=Z.zoom,this.view=Z.view===null?null:Object.assign({},Z.view),this}setViewOffset(Z,G,W,F,U,J){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=Z,this.view.fullHeight=G,this.view.offsetX=W,this.view.offsetY=F,this.view.width=U,this.view.height=J,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const Z=(this.right-this.left)/(2*this.zoom),G=(this.top-this.bottom)/(2*this.zoom),W=(this.right+this.left)/2,F=(this.top+this.bottom)/2;let U=W-Z,J=W+Z,Y=F+G,D=F-G;if(this.view!==null&&this.view.enabled){const Q=(this.right-this.left)/this.view.fullWidth/this.zoom,ee=(this.top-this.bottom)/this.view.fullHeight/this.zoom;U+=Q*this.view.offsetX,J=U+Q*this.view.width,Y-=ee*this.view.offsetY,D=Y-ee*this.view.height}this.projectionMatrix.makeOrthographic(U,J,Y,D,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(Z){const G=super.toJSON(Z);return G.object.zoom=this.zoom,G.object.left=this.left,G.object.right=this.right,G.object.top=this.top,G.object.bottom=this.bottom,G.object.near=this.near,G.object.far=this.far,this.view!==null&&(G.object.view=Object.assign({},this.view)),G}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(Z){this._renderer=Z,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(Z,G=0,W=.1,F=100){_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),this._setSize(256);const U=this._allocateTargets();return U.depthBuffer=!0,this._sceneToCubeUV(Z,W,F,U),G>0&&this._blur(U,0,0,G),this._applyPMREM(U),this._cleanup(U),U}fromEquirectangular(Z,G=null){return this._fromTexture(Z,G)}fromCubemap(Z,G=null){return this._fromTexture(Z,G)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(Z){this._lodMax=Math.floor(Math.log2(Z)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let Z=0;Z<this._lodPlanes.length;Z++)this._lodPlanes[Z].dispose()}_cleanup(Z){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),Z.scissorTest=!1,_setViewport(Z,0,0,Z.width,Z.height)}_fromTexture(Z,G){Z.mapping===CubeReflectionMapping||Z.mapping===CubeRefractionMapping?this._setSize(Z.image.length===0?16:Z.image[0].width||Z.image[0].image.width):this._setSize(Z.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel();const W=G||this._allocateTargets();return this._textureToCubeUV(Z,W),this._applyPMREM(W),this._cleanup(W),W}_allocateTargets(){const Z=3*Math.max(this._cubeSize,112),G=4*this._cubeSize,W={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},F=_createRenderTarget(Z,G,W);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==Z||this._pingPongRenderTarget.height!==G){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(Z,G,W);const{_lodMax:U}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(U)),this._blurMaterial=_getBlurShader(U,Z,G)}return F}_compileMaterial(Z){const G=new Mesh(this._lodPlanes[0],Z);this._renderer.compile(G,_flatCamera)}_sceneToCubeUV(Z,G,W,F){const Y=new PerspectiveCamera(90,1,G,W),D=[1,-1,1,1,1,1],Q=[1,1,1,-1,-1,-1],ee=this._renderer,q=ee.autoClear,te=ee.toneMapping;ee.getClearColor(_clearColor),ee.toneMapping=NoToneMapping,ee.autoClear=!1;const ie=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),ne=new Mesh(new BoxGeometry,ie);let ce=!1;const le=Z.background;le?le.isColor&&(ie.color.copy(le),Z.background=null,ce=!0):(ie.color.copy(_clearColor),ce=!0);for(let se=0;se<6;se++){const pe=se%3;pe===0?(Y.up.set(0,D[se],0),Y.lookAt(Q[se],0,0)):pe===1?(Y.up.set(0,0,D[se]),Y.lookAt(0,Q[se],0)):(Y.up.set(0,D[se],0),Y.lookAt(0,0,Q[se]));const ue=this._cubeSize;_setViewport(F,pe*ue,se>2?ue:0,ue,ue),ee.setRenderTarget(F),ce&&ee.render(ne,Y),ee.render(Z,Y)}ne.geometry.dispose(),ne.material.dispose(),ee.toneMapping=te,ee.autoClear=q,Z.background=le}_textureToCubeUV(Z,G){const W=this._renderer,F=Z.mapping===CubeReflectionMapping||Z.mapping===CubeRefractionMapping;F?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=Z.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const U=F?this._cubemapMaterial:this._equirectMaterial,J=new Mesh(this._lodPlanes[0],U),Y=U.uniforms;Y.envMap.value=Z;const D=this._cubeSize;_setViewport(G,0,0,3*D,2*D),W.setRenderTarget(G),W.render(J,_flatCamera)}_applyPMREM(Z){const G=this._renderer,W=G.autoClear;G.autoClear=!1;for(let F=1;F<this._lodPlanes.length;F++){const U=Math.sqrt(this._sigmas[F]*this._sigmas[F]-this._sigmas[F-1]*this._sigmas[F-1]),J=_axisDirections[(F-1)%_axisDirections.length];this._blur(Z,F-1,F,U,J)}G.autoClear=W}_blur(Z,G,W,F,U){const J=this._pingPongRenderTarget;this._halfBlur(Z,J,G,W,F,"latitudinal",U),this._halfBlur(J,Z,W,W,F,"longitudinal",U)}_halfBlur(Z,G,W,F,U,J,Y){const D=this._renderer,Q=this._blurMaterial;J!=="latitudinal"&&J!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const ee=3,q=new Mesh(this._lodPlanes[F],Q),te=Q.uniforms,ie=this._sizeLods[W]-1,ne=isFinite(U)?Math.PI/(2*ie):2*Math.PI/(2*MAX_SAMPLES-1),ce=U/ne,le=isFinite(U)?1+Math.floor(ee*ce):MAX_SAMPLES;le>MAX_SAMPLES&&console.warn(`sigmaRadians, ${U}, is too large and will clip, as it requested ${le} samples when the maximum is set to ${MAX_SAMPLES}`);const se=[];let pe=0;for(let he=0;he<MAX_SAMPLES;++he){const Le=he/ce,Xe=Math.exp(-Le*Le/2);se.push(Xe),he===0?pe+=Xe:he<le&&(pe+=2*Xe)}for(let he=0;he<se.length;he++)se[he]=se[he]/pe;te.envMap.value=Z.texture,te.samples.value=le,te.weights.value=se,te.latitudinal.value=J==="latitudinal",Y&&(te.poleAxis.value=Y);const{_lodMax:ue}=this;te.dTheta.value=ne,te.mipInt.value=ue-W;const ae=this._sizeLods[F],de=3*ae*(F>ue-LOD_MIN?F-ue+LOD_MIN:0),be=4*(this._cubeSize-ae);_setViewport(G,de,be,3*ae,2*ae),D.setRenderTarget(G),D.render(q,_flatCamera)}}function _createPlanes(X){const Z=[],G=[],W=[];let F=X;const U=X-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let J=0;J<U;J++){const Y=Math.pow(2,F);G.push(Y);let D=1/Y;J>X-LOD_MIN?D=EXTRA_LOD_SIGMA[J-X+LOD_MIN-1]:J===0&&(D=0),W.push(D);const Q=1/(Y-2),ee=-Q,q=1+Q,te=[ee,ee,q,ee,q,q,ee,ee,q,q,ee,q],ie=6,ne=6,ce=3,le=2,se=1,pe=new Float32Array(ce*ne*ie),ue=new Float32Array(le*ne*ie),ae=new Float32Array(se*ne*ie);for(let be=0;be<ie;be++){const he=be%3*2/3-1,Le=be>2?0:-1,Xe=[he,Le,0,he+2/3,Le,0,he+2/3,Le+1,0,he,Le,0,he+2/3,Le+1,0,he,Le+1,0];pe.set(Xe,ce*ne*be),ue.set(te,le*ne*be);const We=[be,be,be,be,be,be];ae.set(We,se*ne*be)}const de=new BufferGeometry;de.setAttribute("position",new BufferAttribute(pe,ce)),de.setAttribute("uv",new BufferAttribute(ue,le)),de.setAttribute("faceIndex",new BufferAttribute(ae,se)),Z.push(de),F>LOD_MIN&&F--}return{lodPlanes:Z,sizeLods:G,sigmas:W}}function _createRenderTarget(X,Z,G){const W=new WebGLRenderTarget(X,Z,G);return W.texture.mapping=CubeUVReflectionMapping,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function _setViewport(X,Z,G,W,F){X.viewport.set(Z,G,W,F),X.scissor.set(Z,G,W,F)}function _getBlurShader(X,Z,G){const W=new Float32Array(MAX_SAMPLES),F=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/Z,CUBEUV_TEXEL_HEIGHT:1/G,CUBEUV_MAX_MIP:`${X}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:F}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(X){let Z=new WeakMap,G=null;function W(Y){if(Y&&Y.isTexture){const D=Y.mapping,Q=D===EquirectangularReflectionMapping||D===EquirectangularRefractionMapping,ee=D===CubeReflectionMapping||D===CubeRefractionMapping;if(Q||ee)if(Y.isRenderTargetTexture&&Y.needsPMREMUpdate===!0){Y.needsPMREMUpdate=!1;let q=Z.get(Y);return G===null&&(G=new PMREMGenerator(X)),q=Q?G.fromEquirectangular(Y,q):G.fromCubemap(Y,q),Z.set(Y,q),q.texture}else{if(Z.has(Y))return Z.get(Y).texture;{const q=Y.image;if(Q&&q&&q.height>0||ee&&q&&F(q)){G===null&&(G=new PMREMGenerator(X));const te=Q?G.fromEquirectangular(Y):G.fromCubemap(Y);return Z.set(Y,te),Y.addEventListener("dispose",U),te.texture}else return null}}}return Y}function F(Y){let D=0;const Q=6;for(let ee=0;ee<Q;ee++)Y[ee]!==void 0&&D++;return D===Q}function U(Y){const D=Y.target;D.removeEventListener("dispose",U);const Q=Z.get(D);Q!==void 0&&(Z.delete(D),Q.dispose())}function J(){Z=new WeakMap,G!==null&&(G.dispose(),G=null)}return{get:W,dispose:J}}function WebGLExtensions(X){const Z={};function G(W){if(Z[W]!==void 0)return Z[W];let F;switch(W){case"WEBGL_depth_texture":F=X.getExtension("WEBGL_depth_texture")||X.getExtension("MOZ_WEBGL_depth_texture")||X.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":F=X.getExtension("EXT_texture_filter_anisotropic")||X.getExtension("MOZ_EXT_texture_filter_anisotropic")||X.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":F=X.getExtension("WEBGL_compressed_texture_s3tc")||X.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||X.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":F=X.getExtension("WEBGL_compressed_texture_pvrtc")||X.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:F=X.getExtension(W)}return Z[W]=F,F}return{has:function(W){return G(W)!==null},init:function(W){W.isWebGL2?G("EXT_color_buffer_float"):(G("WEBGL_depth_texture"),G("OES_texture_float"),G("OES_texture_half_float"),G("OES_texture_half_float_linear"),G("OES_standard_derivatives"),G("OES_element_index_uint"),G("OES_vertex_array_object"),G("ANGLE_instanced_arrays")),G("OES_texture_float_linear"),G("EXT_color_buffer_half_float"),G("WEBGL_multisampled_render_to_texture")},get:function(W){const F=G(W);return F===null&&console.warn("THREE.WebGLRenderer: "+W+" extension not supported."),F}}}function WebGLGeometries(X,Z,G,W){const F={},U=new WeakMap;function J(q){const te=q.target;te.index!==null&&Z.remove(te.index);for(const ne in te.attributes)Z.remove(te.attributes[ne]);for(const ne in te.morphAttributes){const ce=te.morphAttributes[ne];for(let le=0,se=ce.length;le<se;le++)Z.remove(ce[le])}te.removeEventListener("dispose",J),delete F[te.id];const ie=U.get(te);ie&&(Z.remove(ie),U.delete(te)),W.releaseStatesOfGeometry(te),te.isInstancedBufferGeometry===!0&&delete te._maxInstanceCount,G.memory.geometries--}function Y(q,te){return F[te.id]===!0||(te.addEventListener("dispose",J),F[te.id]=!0,G.memory.geometries++),te}function D(q){const te=q.attributes;for(const ne in te)Z.update(te[ne],X.ARRAY_BUFFER);const ie=q.morphAttributes;for(const ne in ie){const ce=ie[ne];for(let le=0,se=ce.length;le<se;le++)Z.update(ce[le],X.ARRAY_BUFFER)}}function Q(q){const te=[],ie=q.index,ne=q.attributes.position;let ce=0;if(ie!==null){const pe=ie.array;ce=ie.version;for(let ue=0,ae=pe.length;ue<ae;ue+=3){const de=pe[ue+0],be=pe[ue+1],he=pe[ue+2];te.push(de,be,be,he,he,de)}}else if(ne!==void 0){const pe=ne.array;ce=ne.version;for(let ue=0,ae=pe.length/3-1;ue<ae;ue+=3){const de=ue+0,be=ue+1,he=ue+2;te.push(de,be,be,he,he,de)}}else return;const le=new(arrayNeedsUint32(te)?Uint32BufferAttribute:Uint16BufferAttribute)(te,1);le.version=ce;const se=U.get(q);se&&Z.remove(se),U.set(q,le)}function ee(q){const te=U.get(q);if(te){const ie=q.index;ie!==null&&te.version<ie.version&&Q(q)}else Q(q);return U.get(q)}return{get:Y,update:D,getWireframeAttribute:ee}}function WebGLIndexedBufferRenderer(X,Z,G,W){const F=W.isWebGL2;let U;function J(te){U=te}let Y,D;function Q(te){Y=te.type,D=te.bytesPerElement}function ee(te,ie){X.drawElements(U,ie,Y,te*D),G.update(ie,U,1)}function q(te,ie,ne){if(ne===0)return;let ce,le;if(F)ce=X,le="drawElementsInstanced";else if(ce=Z.get("ANGLE_instanced_arrays"),le="drawElementsInstancedANGLE",ce===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}ce[le](U,ie,Y,te*D,ne),G.update(ie,U,ne)}this.setMode=J,this.setIndex=Q,this.render=ee,this.renderInstances=q}function WebGLInfo(X){const Z={geometries:0,textures:0},G={frame:0,calls:0,triangles:0,points:0,lines:0};function W(U,J,Y){switch(G.calls++,J){case X.TRIANGLES:G.triangles+=Y*(U/3);break;case X.LINES:G.lines+=Y*(U/2);break;case X.LINE_STRIP:G.lines+=Y*(U-1);break;case X.LINE_LOOP:G.lines+=Y*U;break;case X.POINTS:G.points+=Y*U;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",J);break}}function F(){G.calls=0,G.triangles=0,G.points=0,G.lines=0}return{memory:Z,render:G,programs:null,autoReset:!0,reset:F,update:W}}function numericalSort(X,Z){return X[0]-Z[0]}function absNumericalSort(X,Z){return Math.abs(Z[1])-Math.abs(X[1])}function WebGLMorphtargets(X,Z,G){const W={},F=new Float32Array(8),U=new WeakMap,J=new Vector4,Y=[];for(let Q=0;Q<8;Q++)Y[Q]=[Q,0];function D(Q,ee,q){const te=Q.morphTargetInfluences;if(Z.isWebGL2===!0){const ne=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ce=ne!==void 0?ne.length:0;let le=U.get(ee);if(le===void 0||le.count!==ce){let Ze=function(){ye.dispose(),U.delete(ee),ee.removeEventListener("dispose",Ze)};var ie=Ze;le!==void 0&&le.texture.dispose();const ue=ee.morphAttributes.position!==void 0,ae=ee.morphAttributes.normal!==void 0,de=ee.morphAttributes.color!==void 0,be=ee.morphAttributes.position||[],he=ee.morphAttributes.normal||[],Le=ee.morphAttributes.color||[];let Xe=0;ue===!0&&(Xe=1),ae===!0&&(Xe=2),de===!0&&(Xe=3);let We=ee.attributes.position.count*Xe,fe=1;We>Z.maxTextureSize&&(fe=Math.ceil(We/Z.maxTextureSize),We=Z.maxTextureSize);const Re=new Float32Array(We*fe*4*ce),ye=new DataArrayTexture(Re,We,fe,ce);ye.type=FloatType,ye.needsUpdate=!0;const re=Xe*4;for(let Ge=0;Ge<ce;Ge++){const ve=be[Ge],Te=he[Ge],xe=Le[Ge],Ye=We*fe*4*Ge;for(let ge=0;ge<ve.count;ge++){const Me=ge*re;ue===!0&&(J.fromBufferAttribute(ve,ge),Re[Ye+Me+0]=J.x,Re[Ye+Me+1]=J.y,Re[Ye+Me+2]=J.z,Re[Ye+Me+3]=0),ae===!0&&(J.fromBufferAttribute(Te,ge),Re[Ye+Me+4]=J.x,Re[Ye+Me+5]=J.y,Re[Ye+Me+6]=J.z,Re[Ye+Me+7]=0),de===!0&&(J.fromBufferAttribute(xe,ge),Re[Ye+Me+8]=J.x,Re[Ye+Me+9]=J.y,Re[Ye+Me+10]=J.z,Re[Ye+Me+11]=xe.itemSize===4?J.w:1)}}le={count:ce,texture:ye,size:new Vector2(We,fe)},U.set(ee,le),ee.addEventListener("dispose",Ze)}let se=0;for(let ue=0;ue<te.length;ue++)se+=te[ue];const pe=ee.morphTargetsRelative?1:1-se;q.getUniforms().setValue(X,"morphTargetBaseInfluence",pe),q.getUniforms().setValue(X,"morphTargetInfluences",te),q.getUniforms().setValue(X,"morphTargetsTexture",le.texture,G),q.getUniforms().setValue(X,"morphTargetsTextureSize",le.size)}else{const ne=te===void 0?0:te.length;let ce=W[ee.id];if(ce===void 0||ce.length!==ne){ce=[];for(let ae=0;ae<ne;ae++)ce[ae]=[ae,0];W[ee.id]=ce}for(let ae=0;ae<ne;ae++){const de=ce[ae];de[0]=ae,de[1]=te[ae]}ce.sort(absNumericalSort);for(let ae=0;ae<8;ae++)ae<ne&&ce[ae][1]?(Y[ae][0]=ce[ae][0],Y[ae][1]=ce[ae][1]):(Y[ae][0]=Number.MAX_SAFE_INTEGER,Y[ae][1]=0);Y.sort(numericalSort);const le=ee.morphAttributes.position,se=ee.morphAttributes.normal;let pe=0;for(let ae=0;ae<8;ae++){const de=Y[ae],be=de[0],he=de[1];be!==Number.MAX_SAFE_INTEGER&&he?(le&&ee.getAttribute("morphTarget"+ae)!==le[be]&&ee.setAttribute("morphTarget"+ae,le[be]),se&&ee.getAttribute("morphNormal"+ae)!==se[be]&&ee.setAttribute("morphNormal"+ae,se[be]),F[ae]=he,pe+=he):(le&&ee.hasAttribute("morphTarget"+ae)===!0&&ee.deleteAttribute("morphTarget"+ae),se&&ee.hasAttribute("morphNormal"+ae)===!0&&ee.deleteAttribute("morphNormal"+ae),F[ae]=0)}const ue=ee.morphTargetsRelative?1:1-pe;q.getUniforms().setValue(X,"morphTargetBaseInfluence",ue),q.getUniforms().setValue(X,"morphTargetInfluences",F)}}return{update:D}}function WebGLObjects(X,Z,G,W){let F=new WeakMap;function U(D){const Q=W.render.frame,ee=D.geometry,q=Z.get(D,ee);if(F.get(q)!==Q&&(Z.update(q),F.set(q,Q)),D.isInstancedMesh&&(D.hasEventListener("dispose",Y)===!1&&D.addEventListener("dispose",Y),F.get(D)!==Q&&(G.update(D.instanceMatrix,X.ARRAY_BUFFER),D.instanceColor!==null&&G.update(D.instanceColor,X.ARRAY_BUFFER),F.set(D,Q))),D.isSkinnedMesh){const te=D.skeleton;F.get(te)!==Q&&(te.update(),F.set(te,Q))}return q}function J(){F=new WeakMap}function Y(D){const Q=D.target;Q.removeEventListener("dispose",Y),G.remove(Q.instanceMatrix),Q.instanceColor!==null&&G.remove(Q.instanceColor)}return{update:U,dispose:J}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(X,Z,G){const W=X[0];if(W<=0||W>0)return X;const F=Z*G;let U=arrayCacheF32[F];if(U===void 0&&(U=new Float32Array(F),arrayCacheF32[F]=U),Z!==0){W.toArray(U,0);for(let J=1,Y=0;J!==Z;++J)Y+=G,X[J].toArray(U,Y)}return U}function arraysEqual$1(X,Z){if(X.length!==Z.length)return!1;for(let G=0,W=X.length;G<W;G++)if(X[G]!==Z[G])return!1;return!0}function copyArray$1(X,Z){for(let G=0,W=Z.length;G<W;G++)X[G]=Z[G]}function allocTexUnits(X,Z){let G=arrayCacheI32[Z];G===void 0&&(G=new Int32Array(Z),arrayCacheI32[Z]=G);for(let W=0;W!==Z;++W)G[W]=X.allocateTextureUnit();return G}function setValueV1f(X,Z){const G=this.cache;G[0]!==Z&&(X.uniform1f(this.addr,Z),G[0]=Z)}function setValueV2f(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y)&&(X.uniform2f(this.addr,Z.x,Z.y),G[0]=Z.x,G[1]=Z.y);else{if(arraysEqual$1(G,Z))return;X.uniform2fv(this.addr,Z),copyArray$1(G,Z)}}function setValueV3f(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z)&&(X.uniform3f(this.addr,Z.x,Z.y,Z.z),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z);else if(Z.r!==void 0)(G[0]!==Z.r||G[1]!==Z.g||G[2]!==Z.b)&&(X.uniform3f(this.addr,Z.r,Z.g,Z.b),G[0]=Z.r,G[1]=Z.g,G[2]=Z.b);else{if(arraysEqual$1(G,Z))return;X.uniform3fv(this.addr,Z),copyArray$1(G,Z)}}function setValueV4f(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z||G[3]!==Z.w)&&(X.uniform4f(this.addr,Z.x,Z.y,Z.z,Z.w),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z,G[3]=Z.w);else{if(arraysEqual$1(G,Z))return;X.uniform4fv(this.addr,Z),copyArray$1(G,Z)}}function setValueM2(X,Z){const G=this.cache,W=Z.elements;if(W===void 0){if(arraysEqual$1(G,Z))return;X.uniformMatrix2fv(this.addr,!1,Z),copyArray$1(G,Z)}else{if(arraysEqual$1(G,W))return;mat2array.set(W),X.uniformMatrix2fv(this.addr,!1,mat2array),copyArray$1(G,W)}}function setValueM3(X,Z){const G=this.cache,W=Z.elements;if(W===void 0){if(arraysEqual$1(G,Z))return;X.uniformMatrix3fv(this.addr,!1,Z),copyArray$1(G,Z)}else{if(arraysEqual$1(G,W))return;mat3array.set(W),X.uniformMatrix3fv(this.addr,!1,mat3array),copyArray$1(G,W)}}function setValueM4(X,Z){const G=this.cache,W=Z.elements;if(W===void 0){if(arraysEqual$1(G,Z))return;X.uniformMatrix4fv(this.addr,!1,Z),copyArray$1(G,Z)}else{if(arraysEqual$1(G,W))return;mat4array.set(W),X.uniformMatrix4fv(this.addr,!1,mat4array),copyArray$1(G,W)}}function setValueV1i(X,Z){const G=this.cache;G[0]!==Z&&(X.uniform1i(this.addr,Z),G[0]=Z)}function setValueV2i(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y)&&(X.uniform2i(this.addr,Z.x,Z.y),G[0]=Z.x,G[1]=Z.y);else{if(arraysEqual$1(G,Z))return;X.uniform2iv(this.addr,Z),copyArray$1(G,Z)}}function setValueV3i(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z)&&(X.uniform3i(this.addr,Z.x,Z.y,Z.z),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z);else{if(arraysEqual$1(G,Z))return;X.uniform3iv(this.addr,Z),copyArray$1(G,Z)}}function setValueV4i(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z||G[3]!==Z.w)&&(X.uniform4i(this.addr,Z.x,Z.y,Z.z,Z.w),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z,G[3]=Z.w);else{if(arraysEqual$1(G,Z))return;X.uniform4iv(this.addr,Z),copyArray$1(G,Z)}}function setValueV1ui(X,Z){const G=this.cache;G[0]!==Z&&(X.uniform1ui(this.addr,Z),G[0]=Z)}function setValueV2ui(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y)&&(X.uniform2ui(this.addr,Z.x,Z.y),G[0]=Z.x,G[1]=Z.y);else{if(arraysEqual$1(G,Z))return;X.uniform2uiv(this.addr,Z),copyArray$1(G,Z)}}function setValueV3ui(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z)&&(X.uniform3ui(this.addr,Z.x,Z.y,Z.z),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z);else{if(arraysEqual$1(G,Z))return;X.uniform3uiv(this.addr,Z),copyArray$1(G,Z)}}function setValueV4ui(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z||G[3]!==Z.w)&&(X.uniform4ui(this.addr,Z.x,Z.y,Z.z,Z.w),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z,G[3]=Z.w);else{if(arraysEqual$1(G,Z))return;X.uniform4uiv(this.addr,Z),copyArray$1(G,Z)}}function setValueT1(X,Z,G){const W=this.cache,F=G.allocateTextureUnit();W[0]!==F&&(X.uniform1i(this.addr,F),W[0]=F),G.setTexture2D(Z||emptyTexture,F)}function setValueT3D1(X,Z,G){const W=this.cache,F=G.allocateTextureUnit();W[0]!==F&&(X.uniform1i(this.addr,F),W[0]=F),G.setTexture3D(Z||empty3dTexture,F)}function setValueT6(X,Z,G){const W=this.cache,F=G.allocateTextureUnit();W[0]!==F&&(X.uniform1i(this.addr,F),W[0]=F),G.setTextureCube(Z||emptyCubeTexture,F)}function setValueT2DArray1(X,Z,G){const W=this.cache,F=G.allocateTextureUnit();W[0]!==F&&(X.uniform1i(this.addr,F),W[0]=F),G.setTexture2DArray(Z||emptyArrayTexture,F)}function getSingularSetter(X){switch(X){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(X,Z){X.uniform1fv(this.addr,Z)}function setValueV2fArray(X,Z){const G=flatten(Z,this.size,2);X.uniform2fv(this.addr,G)}function setValueV3fArray(X,Z){const G=flatten(Z,this.size,3);X.uniform3fv(this.addr,G)}function setValueV4fArray(X,Z){const G=flatten(Z,this.size,4);X.uniform4fv(this.addr,G)}function setValueM2Array(X,Z){const G=flatten(Z,this.size,4);X.uniformMatrix2fv(this.addr,!1,G)}function setValueM3Array(X,Z){const G=flatten(Z,this.size,9);X.uniformMatrix3fv(this.addr,!1,G)}function setValueM4Array(X,Z){const G=flatten(Z,this.size,16);X.uniformMatrix4fv(this.addr,!1,G)}function setValueV1iArray(X,Z){X.uniform1iv(this.addr,Z)}function setValueV2iArray(X,Z){X.uniform2iv(this.addr,Z)}function setValueV3iArray(X,Z){X.uniform3iv(this.addr,Z)}function setValueV4iArray(X,Z){X.uniform4iv(this.addr,Z)}function setValueV1uiArray(X,Z){X.uniform1uiv(this.addr,Z)}function setValueV2uiArray(X,Z){X.uniform2uiv(this.addr,Z)}function setValueV3uiArray(X,Z){X.uniform3uiv(this.addr,Z)}function setValueV4uiArray(X,Z){X.uniform4uiv(this.addr,Z)}function setValueT1Array(X,Z,G){const W=this.cache,F=Z.length,U=allocTexUnits(G,F);arraysEqual$1(W,U)||(X.uniform1iv(this.addr,U),copyArray$1(W,U));for(let J=0;J!==F;++J)G.setTexture2D(Z[J]||emptyTexture,U[J])}function setValueT3DArray(X,Z,G){const W=this.cache,F=Z.length,U=allocTexUnits(G,F);arraysEqual$1(W,U)||(X.uniform1iv(this.addr,U),copyArray$1(W,U));for(let J=0;J!==F;++J)G.setTexture3D(Z[J]||empty3dTexture,U[J])}function setValueT6Array(X,Z,G){const W=this.cache,F=Z.length,U=allocTexUnits(G,F);arraysEqual$1(W,U)||(X.uniform1iv(this.addr,U),copyArray$1(W,U));for(let J=0;J!==F;++J)G.setTextureCube(Z[J]||emptyCubeTexture,U[J])}function setValueT2DArrayArray(X,Z,G){const W=this.cache,F=Z.length,U=allocTexUnits(G,F);arraysEqual$1(W,U)||(X.uniform1iv(this.addr,U),copyArray$1(W,U));for(let J=0;J!==F;++J)G.setTexture2DArray(Z[J]||emptyArrayTexture,U[J])}function getPureArraySetter(X){switch(X){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(Z,G,W){this.id=Z,this.addr=W,this.cache=[],this.setValue=getSingularSetter(G.type)}}class PureArrayUniform{constructor(Z,G,W){this.id=Z,this.addr=W,this.cache=[],this.size=G.size,this.setValue=getPureArraySetter(G.type)}}class StructuredUniform{constructor(Z){this.id=Z,this.seq=[],this.map={}}setValue(Z,G,W){const F=this.seq;for(let U=0,J=F.length;U!==J;++U){const Y=F[U];Y.setValue(Z,G[Y.id],W)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(X,Z){X.seq.push(Z),X.map[Z.id]=Z}function parseUniform(X,Z,G){const W=X.name,F=W.length;for(RePathPart.lastIndex=0;;){const U=RePathPart.exec(W),J=RePathPart.lastIndex;let Y=U[1];const D=U[2]==="]",Q=U[3];if(D&&(Y=Y|0),Q===void 0||Q==="["&&J+2===F){addUniform(G,Q===void 0?new SingleUniform(Y,X,Z):new PureArrayUniform(Y,X,Z));break}else{let q=G.map[Y];q===void 0&&(q=new StructuredUniform(Y),addUniform(G,q)),G=q}}}class WebGLUniforms{constructor(Z,G){this.seq=[],this.map={};const W=Z.getProgramParameter(G,Z.ACTIVE_UNIFORMS);for(let F=0;F<W;++F){const U=Z.getActiveUniform(G,F),J=Z.getUniformLocation(G,U.name);parseUniform(U,J,this)}}setValue(Z,G,W,F){const U=this.map[G];U!==void 0&&U.setValue(Z,W,F)}setOptional(Z,G,W){const F=G[W];F!==void 0&&this.setValue(Z,W,F)}static upload(Z,G,W,F){for(let U=0,J=G.length;U!==J;++U){const Y=G[U],D=W[Y.id];D.needsUpdate!==!1&&Y.setValue(Z,D.value,F)}}static seqWithValue(Z,G){const W=[];for(let F=0,U=Z.length;F!==U;++F){const J=Z[F];J.id in G&&W.push(J)}return W}}function WebGLShader(X,Z,G){const W=X.createShader(Z);return X.shaderSource(W,G),X.compileShader(W),W}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(X,Z){const G=X.split(`
`),W=[],F=Math.max(Z-6,0),U=Math.min(Z+6,G.length);for(let J=F;J<U;J++){const Y=J+1;W.push(`${Y===Z?">":" "} ${Y}: ${G[J]}`)}return W.join(`
`)}function getEncodingComponents(X){const Z=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),G=ColorManagement.getPrimaries(X);let W;switch(Z===G?W="":Z===P3Primaries&&G===Rec709Primaries?W="LinearDisplayP3ToLinearSRGB":Z===Rec709Primaries&&G===P3Primaries&&(W="LinearSRGBToLinearDisplayP3"),X){case LinearSRGBColorSpace:case LinearDisplayP3ColorSpace:return[W,"LinearTransferOETF"];case SRGBColorSpace:case DisplayP3ColorSpace:return[W,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",X),[W,"LinearTransferOETF"]}}function getShaderErrors(X,Z,G){const W=X.getShaderParameter(Z,X.COMPILE_STATUS),F=X.getShaderInfoLog(Z).trim();if(W&&F==="")return"";const U=/ERROR: 0:(\d+)/.exec(F);if(U){const J=parseInt(U[1]);return G.toUpperCase()+`

`+F+`

`+handleSource(X.getShaderSource(Z),J)}else return F}function getTexelEncodingFunction(X,Z){const G=getEncodingComponents(Z);return`vec4 ${X}( vec4 value ) { return ${G[0]}( ${G[1]}( value ) ); }`}function getToneMappingFunction(X,Z){let G;switch(Z){case LinearToneMapping:G="Linear";break;case ReinhardToneMapping:G="Reinhard";break;case CineonToneMapping:G="OptimizedCineon";break;case ACESFilmicToneMapping:G="ACESFilmic";break;case CustomToneMapping:G="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Z),G="Linear"}return"vec3 "+X+"( vec3 color ) { return "+G+"ToneMapping( color ); }"}function generateExtensions(X){return[X.extensionDerivatives||X.envMapCubeUVHeight||X.bumpMap||X.normalMapTangentSpace||X.clearcoatNormalMap||X.flatShading||X.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(X.extensionFragDepth||X.logarithmicDepthBuffer)&&X.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",X.extensionDrawBuffers&&X.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(X.extensionShaderTextureLOD||X.envMap||X.transmission)&&X.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(X){const Z=[];for(const G in X){const W=X[G];W!==!1&&Z.push("#define "+G+" "+W)}return Z.join(`
`)}function fetchAttributeLocations(X,Z){const G={},W=X.getProgramParameter(Z,X.ACTIVE_ATTRIBUTES);for(let F=0;F<W;F++){const U=X.getActiveAttrib(Z,F),J=U.name;let Y=1;U.type===X.FLOAT_MAT2&&(Y=2),U.type===X.FLOAT_MAT3&&(Y=3),U.type===X.FLOAT_MAT4&&(Y=4),G[J]={type:U.type,location:X.getAttribLocation(Z,J),locationSize:Y}}return G}function filterEmptyLine(X){return X!==""}function replaceLightNums(X,Z){const G=Z.numSpotLightShadows+Z.numSpotLightMaps-Z.numSpotLightShadowsWithMaps;return X.replace(/NUM_DIR_LIGHTS/g,Z.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Z.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Z.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,G).replace(/NUM_RECT_AREA_LIGHTS/g,Z.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Z.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Z.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Z.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Z.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Z.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Z.numPointLightShadows)}function replaceClippingPlaneNums(X,Z){return X.replace(/NUM_CLIPPING_PLANES/g,Z.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Z.numClippingPlanes-Z.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(X){return X.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function includeReplacer(X,Z){let G=ShaderChunk[Z];if(G===void 0){const W=shaderChunkMap.get(Z);if(W!==void 0)G=ShaderChunk[W],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Z,W);else throw new Error("Can not resolve #include <"+Z+">")}return resolveIncludes(G)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(X){return X.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(X,Z,G,W){let F="";for(let U=parseInt(Z);U<parseInt(G);U++)F+=W.replace(/\[\s*i\s*\]/g,"[ "+U+" ]").replace(/UNROLLED_LOOP_INDEX/g,U);return F}function generatePrecision(X){let Z="precision "+X.precision+` float;
precision `+X.precision+" int;";return X.precision==="highp"?Z+=`
#define HIGH_PRECISION`:X.precision==="mediump"?Z+=`
#define MEDIUM_PRECISION`:X.precision==="lowp"&&(Z+=`
#define LOW_PRECISION`),Z}function generateShadowMapTypeDefine(X){let Z="SHADOWMAP_TYPE_BASIC";return X.shadowMapType===PCFShadowMap?Z="SHADOWMAP_TYPE_PCF":X.shadowMapType===PCFSoftShadowMap?Z="SHADOWMAP_TYPE_PCF_SOFT":X.shadowMapType===VSMShadowMap&&(Z="SHADOWMAP_TYPE_VSM"),Z}function generateEnvMapTypeDefine(X){let Z="ENVMAP_TYPE_CUBE";if(X.envMap)switch(X.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:Z="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:Z="ENVMAP_TYPE_CUBE_UV";break}return Z}function generateEnvMapModeDefine(X){let Z="ENVMAP_MODE_REFLECTION";if(X.envMap)switch(X.envMapMode){case CubeRefractionMapping:Z="ENVMAP_MODE_REFRACTION";break}return Z}function generateEnvMapBlendingDefine(X){let Z="ENVMAP_BLENDING_NONE";if(X.envMap)switch(X.combine){case MultiplyOperation:Z="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:Z="ENVMAP_BLENDING_MIX";break;case AddOperation:Z="ENVMAP_BLENDING_ADD";break}return Z}function generateCubeUVSize(X){const Z=X.envMapCubeUVHeight;if(Z===null)return null;const G=Math.log2(Z)-2,W=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,G),7*16)),texelHeight:W,maxMip:G}}function WebGLProgram(X,Z,G,W){const F=X.getContext(),U=G.defines;let J=G.vertexShader,Y=G.fragmentShader;const D=generateShadowMapTypeDefine(G),Q=generateEnvMapTypeDefine(G),ee=generateEnvMapModeDefine(G),q=generateEnvMapBlendingDefine(G),te=generateCubeUVSize(G),ie=G.isWebGL2?"":generateExtensions(G),ne=generateDefines(U),ce=F.createProgram();let le,se,pe=G.glslVersion?"#version "+G.glslVersion+`
`:"";G.isRawShaderMaterial?(le=["#define SHADER_TYPE "+G.shaderType,"#define SHADER_NAME "+G.shaderName,ne].filter(filterEmptyLine).join(`
`),le.length>0&&(le+=`
`),se=[ie,"#define SHADER_TYPE "+G.shaderType,"#define SHADER_NAME "+G.shaderName,ne].filter(filterEmptyLine).join(`
`),se.length>0&&(se+=`
`)):(le=[generatePrecision(G),"#define SHADER_TYPE "+G.shaderType,"#define SHADER_NAME "+G.shaderName,ne,G.instancing?"#define USE_INSTANCING":"",G.instancingColor?"#define USE_INSTANCING_COLOR":"",G.useFog&&G.fog?"#define USE_FOG":"",G.useFog&&G.fogExp2?"#define FOG_EXP2":"",G.map?"#define USE_MAP":"",G.envMap?"#define USE_ENVMAP":"",G.envMap?"#define "+ee:"",G.lightMap?"#define USE_LIGHTMAP":"",G.aoMap?"#define USE_AOMAP":"",G.bumpMap?"#define USE_BUMPMAP":"",G.normalMap?"#define USE_NORMALMAP":"",G.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",G.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",G.displacementMap?"#define USE_DISPLACEMENTMAP":"",G.emissiveMap?"#define USE_EMISSIVEMAP":"",G.anisotropy?"#define USE_ANISOTROPY":"",G.anisotropyMap?"#define USE_ANISOTROPYMAP":"",G.clearcoatMap?"#define USE_CLEARCOATMAP":"",G.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",G.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",G.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",G.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",G.specularMap?"#define USE_SPECULARMAP":"",G.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",G.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",G.roughnessMap?"#define USE_ROUGHNESSMAP":"",G.metalnessMap?"#define USE_METALNESSMAP":"",G.alphaMap?"#define USE_ALPHAMAP":"",G.alphaHash?"#define USE_ALPHAHASH":"",G.transmission?"#define USE_TRANSMISSION":"",G.transmissionMap?"#define USE_TRANSMISSIONMAP":"",G.thicknessMap?"#define USE_THICKNESSMAP":"",G.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",G.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",G.mapUv?"#define MAP_UV "+G.mapUv:"",G.alphaMapUv?"#define ALPHAMAP_UV "+G.alphaMapUv:"",G.lightMapUv?"#define LIGHTMAP_UV "+G.lightMapUv:"",G.aoMapUv?"#define AOMAP_UV "+G.aoMapUv:"",G.emissiveMapUv?"#define EMISSIVEMAP_UV "+G.emissiveMapUv:"",G.bumpMapUv?"#define BUMPMAP_UV "+G.bumpMapUv:"",G.normalMapUv?"#define NORMALMAP_UV "+G.normalMapUv:"",G.displacementMapUv?"#define DISPLACEMENTMAP_UV "+G.displacementMapUv:"",G.metalnessMapUv?"#define METALNESSMAP_UV "+G.metalnessMapUv:"",G.roughnessMapUv?"#define ROUGHNESSMAP_UV "+G.roughnessMapUv:"",G.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+G.anisotropyMapUv:"",G.clearcoatMapUv?"#define CLEARCOATMAP_UV "+G.clearcoatMapUv:"",G.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+G.clearcoatNormalMapUv:"",G.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+G.clearcoatRoughnessMapUv:"",G.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+G.iridescenceMapUv:"",G.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+G.iridescenceThicknessMapUv:"",G.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+G.sheenColorMapUv:"",G.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+G.sheenRoughnessMapUv:"",G.specularMapUv?"#define SPECULARMAP_UV "+G.specularMapUv:"",G.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+G.specularColorMapUv:"",G.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+G.specularIntensityMapUv:"",G.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+G.transmissionMapUv:"",G.thicknessMapUv?"#define THICKNESSMAP_UV "+G.thicknessMapUv:"",G.vertexTangents&&G.flatShading===!1?"#define USE_TANGENT":"",G.vertexColors?"#define USE_COLOR":"",G.vertexAlphas?"#define USE_COLOR_ALPHA":"",G.vertexUv1s?"#define USE_UV1":"",G.vertexUv2s?"#define USE_UV2":"",G.vertexUv3s?"#define USE_UV3":"",G.pointsUvs?"#define USE_POINTS_UV":"",G.flatShading?"#define FLAT_SHADED":"",G.skinning?"#define USE_SKINNING":"",G.morphTargets?"#define USE_MORPHTARGETS":"",G.morphNormals&&G.flatShading===!1?"#define USE_MORPHNORMALS":"",G.morphColors&&G.isWebGL2?"#define USE_MORPHCOLORS":"",G.morphTargetsCount>0&&G.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",G.morphTargetsCount>0&&G.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+G.morphTextureStride:"",G.morphTargetsCount>0&&G.isWebGL2?"#define MORPHTARGETS_COUNT "+G.morphTargetsCount:"",G.doubleSided?"#define DOUBLE_SIDED":"",G.flipSided?"#define FLIP_SIDED":"",G.shadowMapEnabled?"#define USE_SHADOWMAP":"",G.shadowMapEnabled?"#define "+D:"",G.sizeAttenuation?"#define USE_SIZEATTENUATION":"",G.numLightProbes>0?"#define USE_LIGHT_PROBES":"",G.useLegacyLights?"#define LEGACY_LIGHTS":"",G.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",G.logarithmicDepthBuffer&&G.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),se=[ie,generatePrecision(G),"#define SHADER_TYPE "+G.shaderType,"#define SHADER_NAME "+G.shaderName,ne,G.useFog&&G.fog?"#define USE_FOG":"",G.useFog&&G.fogExp2?"#define FOG_EXP2":"",G.map?"#define USE_MAP":"",G.matcap?"#define USE_MATCAP":"",G.envMap?"#define USE_ENVMAP":"",G.envMap?"#define "+Q:"",G.envMap?"#define "+ee:"",G.envMap?"#define "+q:"",te?"#define CUBEUV_TEXEL_WIDTH "+te.texelWidth:"",te?"#define CUBEUV_TEXEL_HEIGHT "+te.texelHeight:"",te?"#define CUBEUV_MAX_MIP "+te.maxMip+".0":"",G.lightMap?"#define USE_LIGHTMAP":"",G.aoMap?"#define USE_AOMAP":"",G.bumpMap?"#define USE_BUMPMAP":"",G.normalMap?"#define USE_NORMALMAP":"",G.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",G.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",G.emissiveMap?"#define USE_EMISSIVEMAP":"",G.anisotropy?"#define USE_ANISOTROPY":"",G.anisotropyMap?"#define USE_ANISOTROPYMAP":"",G.clearcoat?"#define USE_CLEARCOAT":"",G.clearcoatMap?"#define USE_CLEARCOATMAP":"",G.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",G.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",G.iridescence?"#define USE_IRIDESCENCE":"",G.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",G.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",G.specularMap?"#define USE_SPECULARMAP":"",G.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",G.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",G.roughnessMap?"#define USE_ROUGHNESSMAP":"",G.metalnessMap?"#define USE_METALNESSMAP":"",G.alphaMap?"#define USE_ALPHAMAP":"",G.alphaTest?"#define USE_ALPHATEST":"",G.alphaHash?"#define USE_ALPHAHASH":"",G.sheen?"#define USE_SHEEN":"",G.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",G.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",G.transmission?"#define USE_TRANSMISSION":"",G.transmissionMap?"#define USE_TRANSMISSIONMAP":"",G.thicknessMap?"#define USE_THICKNESSMAP":"",G.vertexTangents&&G.flatShading===!1?"#define USE_TANGENT":"",G.vertexColors||G.instancingColor?"#define USE_COLOR":"",G.vertexAlphas?"#define USE_COLOR_ALPHA":"",G.vertexUv1s?"#define USE_UV1":"",G.vertexUv2s?"#define USE_UV2":"",G.vertexUv3s?"#define USE_UV3":"",G.pointsUvs?"#define USE_POINTS_UV":"",G.gradientMap?"#define USE_GRADIENTMAP":"",G.flatShading?"#define FLAT_SHADED":"",G.doubleSided?"#define DOUBLE_SIDED":"",G.flipSided?"#define FLIP_SIDED":"",G.shadowMapEnabled?"#define USE_SHADOWMAP":"",G.shadowMapEnabled?"#define "+D:"",G.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",G.numLightProbes>0?"#define USE_LIGHT_PROBES":"",G.useLegacyLights?"#define LEGACY_LIGHTS":"",G.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",G.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",G.logarithmicDepthBuffer&&G.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",G.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",G.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",G.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",G.toneMapping):"",G.dithering?"#define DITHERING":"",G.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",G.outputColorSpace),G.useDepthPacking?"#define DEPTH_PACKING "+G.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),J=resolveIncludes(J),J=replaceLightNums(J,G),J=replaceClippingPlaneNums(J,G),Y=resolveIncludes(Y),Y=replaceLightNums(Y,G),Y=replaceClippingPlaneNums(Y,G),J=unrollLoops(J),Y=unrollLoops(Y),G.isWebGL2&&G.isRawShaderMaterial!==!0&&(pe=`#version 300 es
`,le=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+le,se=["precision mediump sampler2DArray;","#define varying in",G.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",G.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+se);const ue=pe+le+J,ae=pe+se+Y,de=WebGLShader(F,F.VERTEX_SHADER,ue),be=WebGLShader(F,F.FRAGMENT_SHADER,ae);F.attachShader(ce,de),F.attachShader(ce,be),G.index0AttributeName!==void 0?F.bindAttribLocation(ce,0,G.index0AttributeName):G.morphTargets===!0&&F.bindAttribLocation(ce,0,"position"),F.linkProgram(ce);function he(fe){if(X.debug.checkShaderErrors){const Re=F.getProgramInfoLog(ce).trim(),ye=F.getShaderInfoLog(de).trim(),re=F.getShaderInfoLog(be).trim();let Ze=!0,Ge=!0;if(F.getProgramParameter(ce,F.LINK_STATUS)===!1)if(Ze=!1,typeof X.debug.onShaderError=="function")X.debug.onShaderError(F,ce,de,be);else{const ve=getShaderErrors(F,de,"vertex"),Te=getShaderErrors(F,be,"fragment");console.error("THREE.WebGLProgram: Shader Error "+F.getError()+" - VALIDATE_STATUS "+F.getProgramParameter(ce,F.VALIDATE_STATUS)+`

Program Info Log: `+Re+`
`+ve+`
`+Te)}else Re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Re):(ye===""||re==="")&&(Ge=!1);Ge&&(fe.diagnostics={runnable:Ze,programLog:Re,vertexShader:{log:ye,prefix:le},fragmentShader:{log:re,prefix:se}})}F.deleteShader(de),F.deleteShader(be),Le=new WebGLUniforms(F,ce),Xe=fetchAttributeLocations(F,ce)}let Le;this.getUniforms=function(){return Le===void 0&&he(this),Le};let Xe;this.getAttributes=function(){return Xe===void 0&&he(this),Xe};let We=G.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return We===!1&&(We=F.getProgramParameter(ce,COMPLETION_STATUS_KHR)),We},this.destroy=function(){W.releaseStatesOfProgram(this),F.deleteProgram(ce),this.program=void 0},this.type=G.shaderType,this.name=G.shaderName,this.id=programIdCount++,this.cacheKey=Z,this.usedTimes=1,this.program=ce,this.vertexShader=de,this.fragmentShader=be,this}let _id$1=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(Z){const G=Z.vertexShader,W=Z.fragmentShader,F=this._getShaderStage(G),U=this._getShaderStage(W),J=this._getShaderCacheForMaterial(Z);return J.has(F)===!1&&(J.add(F),F.usedTimes++),J.has(U)===!1&&(J.add(U),U.usedTimes++),this}remove(Z){const G=this.materialCache.get(Z);for(const W of G)W.usedTimes--,W.usedTimes===0&&this.shaderCache.delete(W.code);return this.materialCache.delete(Z),this}getVertexShaderID(Z){return this._getShaderStage(Z.vertexShader).id}getFragmentShaderID(Z){return this._getShaderStage(Z.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(Z){const G=this.materialCache;let W=G.get(Z);return W===void 0&&(W=new Set,G.set(Z,W)),W}_getShaderStage(Z){const G=this.shaderCache;let W=G.get(Z);return W===void 0&&(W=new WebGLShaderStage(Z),G.set(Z,W)),W}}class WebGLShaderStage{constructor(Z){this.id=_id$1++,this.code=Z,this.usedTimes=0}}function WebGLPrograms(X,Z,G,W,F,U,J){const Y=new Layers,D=new WebGLShaderCache,Q=[],ee=F.isWebGL2,q=F.logarithmicDepthBuffer,te=F.vertexTextures;let ie=F.precision;const ne={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function ce(Xe){return Xe===0?"uv":`uv${Xe}`}function le(Xe,We,fe,Re,ye){const re=Re.fog,Ze=ye.geometry,Ge=Xe.isMeshStandardMaterial?Re.environment:null,ve=(Xe.isMeshStandardMaterial?G:Z).get(Xe.envMap||Ge),Te=ve&&ve.mapping===CubeUVReflectionMapping?ve.image.height:null,xe=ne[Xe.type];Xe.precision!==null&&(ie=F.getMaxPrecision(Xe.precision),ie!==Xe.precision&&console.warn("THREE.WebGLProgram.getParameters:",Xe.precision,"not supported, using",ie,"instead."));const Ye=Ze.morphAttributes.position||Ze.morphAttributes.normal||Ze.morphAttributes.color,ge=Ye!==void 0?Ye.length:0;let Me=0;Ze.morphAttributes.position!==void 0&&(Me=1),Ze.morphAttributes.normal!==void 0&&(Me=2),Ze.morphAttributes.color!==void 0&&(Me=3);let je,tt,it,st;if(xe){const jt=ShaderLib[xe];je=jt.vertexShader,tt=jt.fragmentShader}else je=Xe.vertexShader,tt=Xe.fragmentShader,D.update(Xe),it=D.getVertexShaderID(Xe),st=D.getFragmentShaderID(Xe);const qe=X.getRenderTarget(),ot=ye.isInstancedMesh===!0,ut=!!Xe.map,dt=!!Xe.matcap,mt=!!ve,Je=!!Xe.aoMap,Ne=!!Xe.lightMap,ke=!!Xe.bumpMap,Ie=!!Xe.normalMap,Ce=!!Xe.displacementMap,ze=!!Xe.emissiveMap,Ee=!!Xe.metalnessMap,_e=!!Xe.roughnessMap,He=Xe.anisotropy>0,Pe=Xe.clearcoat>0,$e=Xe.iridescence>0,we=Xe.sheen>0,Ue=Xe.transmission>0,et=He&&!!Xe.anisotropyMap,at=Pe&&!!Xe.clearcoatMap,Ve=Pe&&!!Xe.clearcoatNormalMap,oe=Pe&&!!Xe.clearcoatRoughnessMap,me=$e&&!!Xe.iridescenceMap,Se=$e&&!!Xe.iridescenceThicknessMap,Fe=we&&!!Xe.sheenColorMap,Ke=we&&!!Xe.sheenRoughnessMap,Ae=!!Xe.specularMap,rt=!!Xe.specularColorMap,vt=!!Xe.specularIntensityMap,Vt=Ue&&!!Xe.transmissionMap,Wt=Ue&&!!Xe.thicknessMap,ft=!!Xe.gradientMap,Rt=!!Xe.alphaMap,Yt=Xe.alphaTest>0,ct=!!Xe.alphaHash,xt=!!Xe.extensions,Qe=!!Ze.attributes.uv1,nt=!!Ze.attributes.uv2,Xt=!!Ze.attributes.uv3;let St=NoToneMapping;return Xe.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(St=X.toneMapping),{isWebGL2:ee,shaderID:xe,shaderType:Xe.type,shaderName:Xe.name,vertexShader:je,fragmentShader:tt,defines:Xe.defines,customVertexShaderID:it,customFragmentShaderID:st,isRawShaderMaterial:Xe.isRawShaderMaterial===!0,glslVersion:Xe.glslVersion,precision:ie,instancing:ot,instancingColor:ot&&ye.instanceColor!==null,supportsVertexTextures:te,outputColorSpace:qe===null?X.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:LinearSRGBColorSpace,map:ut,matcap:dt,envMap:mt,envMapMode:mt&&ve.mapping,envMapCubeUVHeight:Te,aoMap:Je,lightMap:Ne,bumpMap:ke,normalMap:Ie,displacementMap:te&&Ce,emissiveMap:ze,normalMapObjectSpace:Ie&&Xe.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:Ie&&Xe.normalMapType===TangentSpaceNormalMap,metalnessMap:Ee,roughnessMap:_e,anisotropy:He,anisotropyMap:et,clearcoat:Pe,clearcoatMap:at,clearcoatNormalMap:Ve,clearcoatRoughnessMap:oe,iridescence:$e,iridescenceMap:me,iridescenceThicknessMap:Se,sheen:we,sheenColorMap:Fe,sheenRoughnessMap:Ke,specularMap:Ae,specularColorMap:rt,specularIntensityMap:vt,transmission:Ue,transmissionMap:Vt,thicknessMap:Wt,gradientMap:ft,opaque:Xe.transparent===!1&&Xe.blending===NormalBlending,alphaMap:Rt,alphaTest:Yt,alphaHash:ct,combine:Xe.combine,mapUv:ut&&ce(Xe.map.channel),aoMapUv:Je&&ce(Xe.aoMap.channel),lightMapUv:Ne&&ce(Xe.lightMap.channel),bumpMapUv:ke&&ce(Xe.bumpMap.channel),normalMapUv:Ie&&ce(Xe.normalMap.channel),displacementMapUv:Ce&&ce(Xe.displacementMap.channel),emissiveMapUv:ze&&ce(Xe.emissiveMap.channel),metalnessMapUv:Ee&&ce(Xe.metalnessMap.channel),roughnessMapUv:_e&&ce(Xe.roughnessMap.channel),anisotropyMapUv:et&&ce(Xe.anisotropyMap.channel),clearcoatMapUv:at&&ce(Xe.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&ce(Xe.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&ce(Xe.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&ce(Xe.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&ce(Xe.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&ce(Xe.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&ce(Xe.sheenRoughnessMap.channel),specularMapUv:Ae&&ce(Xe.specularMap.channel),specularColorMapUv:rt&&ce(Xe.specularColorMap.channel),specularIntensityMapUv:vt&&ce(Xe.specularIntensityMap.channel),transmissionMapUv:Vt&&ce(Xe.transmissionMap.channel),thicknessMapUv:Wt&&ce(Xe.thicknessMap.channel),alphaMapUv:Rt&&ce(Xe.alphaMap.channel),vertexTangents:!!Ze.attributes.tangent&&(Ie||He),vertexColors:Xe.vertexColors,vertexAlphas:Xe.vertexColors===!0&&!!Ze.attributes.color&&Ze.attributes.color.itemSize===4,vertexUv1s:Qe,vertexUv2s:nt,vertexUv3s:Xt,pointsUvs:ye.isPoints===!0&&!!Ze.attributes.uv&&(ut||Rt),fog:!!re,useFog:Xe.fog===!0,fogExp2:re&&re.isFogExp2,flatShading:Xe.flatShading===!0,sizeAttenuation:Xe.sizeAttenuation===!0,logarithmicDepthBuffer:q,skinning:ye.isSkinnedMesh===!0,morphTargets:Ze.morphAttributes.position!==void 0,morphNormals:Ze.morphAttributes.normal!==void 0,morphColors:Ze.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Me,numDirLights:We.directional.length,numPointLights:We.point.length,numSpotLights:We.spot.length,numSpotLightMaps:We.spotLightMap.length,numRectAreaLights:We.rectArea.length,numHemiLights:We.hemi.length,numDirLightShadows:We.directionalShadowMap.length,numPointLightShadows:We.pointShadowMap.length,numSpotLightShadows:We.spotShadowMap.length,numSpotLightShadowsWithMaps:We.numSpotLightShadowsWithMaps,numLightProbes:We.numLightProbes,numClippingPlanes:J.numPlanes,numClipIntersection:J.numIntersection,dithering:Xe.dithering,shadowMapEnabled:X.shadowMap.enabled&&fe.length>0,shadowMapType:X.shadowMap.type,toneMapping:St,useLegacyLights:X._useLegacyLights,decodeVideoTexture:ut&&Xe.map.isVideoTexture===!0&&ColorManagement.getTransfer(Xe.map.colorSpace)===SRGBTransfer,premultipliedAlpha:Xe.premultipliedAlpha,doubleSided:Xe.side===DoubleSide,flipSided:Xe.side===BackSide,useDepthPacking:Xe.depthPacking>=0,depthPacking:Xe.depthPacking||0,index0AttributeName:Xe.index0AttributeName,extensionDerivatives:xt&&Xe.extensions.derivatives===!0,extensionFragDepth:xt&&Xe.extensions.fragDepth===!0,extensionDrawBuffers:xt&&Xe.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&Xe.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:ee||W.has("EXT_frag_depth"),rendererExtensionDrawBuffers:ee||W.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:ee||W.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:W.has("KHR_parallel_shader_compile"),customProgramCacheKey:Xe.customProgramCacheKey()}}function se(Xe){const We=[];if(Xe.shaderID?We.push(Xe.shaderID):(We.push(Xe.customVertexShaderID),We.push(Xe.customFragmentShaderID)),Xe.defines!==void 0)for(const fe in Xe.defines)We.push(fe),We.push(Xe.defines[fe]);return Xe.isRawShaderMaterial===!1&&(pe(We,Xe),ue(We,Xe),We.push(X.outputColorSpace)),We.push(Xe.customProgramCacheKey),We.join()}function pe(Xe,We){Xe.push(We.precision),Xe.push(We.outputColorSpace),Xe.push(We.envMapMode),Xe.push(We.envMapCubeUVHeight),Xe.push(We.mapUv),Xe.push(We.alphaMapUv),Xe.push(We.lightMapUv),Xe.push(We.aoMapUv),Xe.push(We.bumpMapUv),Xe.push(We.normalMapUv),Xe.push(We.displacementMapUv),Xe.push(We.emissiveMapUv),Xe.push(We.metalnessMapUv),Xe.push(We.roughnessMapUv),Xe.push(We.anisotropyMapUv),Xe.push(We.clearcoatMapUv),Xe.push(We.clearcoatNormalMapUv),Xe.push(We.clearcoatRoughnessMapUv),Xe.push(We.iridescenceMapUv),Xe.push(We.iridescenceThicknessMapUv),Xe.push(We.sheenColorMapUv),Xe.push(We.sheenRoughnessMapUv),Xe.push(We.specularMapUv),Xe.push(We.specularColorMapUv),Xe.push(We.specularIntensityMapUv),Xe.push(We.transmissionMapUv),Xe.push(We.thicknessMapUv),Xe.push(We.combine),Xe.push(We.fogExp2),Xe.push(We.sizeAttenuation),Xe.push(We.morphTargetsCount),Xe.push(We.morphAttributeCount),Xe.push(We.numDirLights),Xe.push(We.numPointLights),Xe.push(We.numSpotLights),Xe.push(We.numSpotLightMaps),Xe.push(We.numHemiLights),Xe.push(We.numRectAreaLights),Xe.push(We.numDirLightShadows),Xe.push(We.numPointLightShadows),Xe.push(We.numSpotLightShadows),Xe.push(We.numSpotLightShadowsWithMaps),Xe.push(We.numLightProbes),Xe.push(We.shadowMapType),Xe.push(We.toneMapping),Xe.push(We.numClippingPlanes),Xe.push(We.numClipIntersection),Xe.push(We.depthPacking)}function ue(Xe,We){Y.disableAll(),We.isWebGL2&&Y.enable(0),We.supportsVertexTextures&&Y.enable(1),We.instancing&&Y.enable(2),We.instancingColor&&Y.enable(3),We.matcap&&Y.enable(4),We.envMap&&Y.enable(5),We.normalMapObjectSpace&&Y.enable(6),We.normalMapTangentSpace&&Y.enable(7),We.clearcoat&&Y.enable(8),We.iridescence&&Y.enable(9),We.alphaTest&&Y.enable(10),We.vertexColors&&Y.enable(11),We.vertexAlphas&&Y.enable(12),We.vertexUv1s&&Y.enable(13),We.vertexUv2s&&Y.enable(14),We.vertexUv3s&&Y.enable(15),We.vertexTangents&&Y.enable(16),We.anisotropy&&Y.enable(17),We.alphaHash&&Y.enable(18),Xe.push(Y.mask),Y.disableAll(),We.fog&&Y.enable(0),We.useFog&&Y.enable(1),We.flatShading&&Y.enable(2),We.logarithmicDepthBuffer&&Y.enable(3),We.skinning&&Y.enable(4),We.morphTargets&&Y.enable(5),We.morphNormals&&Y.enable(6),We.morphColors&&Y.enable(7),We.premultipliedAlpha&&Y.enable(8),We.shadowMapEnabled&&Y.enable(9),We.useLegacyLights&&Y.enable(10),We.doubleSided&&Y.enable(11),We.flipSided&&Y.enable(12),We.useDepthPacking&&Y.enable(13),We.dithering&&Y.enable(14),We.transmission&&Y.enable(15),We.sheen&&Y.enable(16),We.opaque&&Y.enable(17),We.pointsUvs&&Y.enable(18),We.decodeVideoTexture&&Y.enable(19),Xe.push(Y.mask)}function ae(Xe){const We=ne[Xe.type];let fe;if(We){const Re=ShaderLib[We];fe=UniformsUtils.clone(Re.uniforms)}else fe=Xe.uniforms;return fe}function de(Xe,We){let fe;for(let Re=0,ye=Q.length;Re<ye;Re++){const re=Q[Re];if(re.cacheKey===We){fe=re,++fe.usedTimes;break}}return fe===void 0&&(fe=new WebGLProgram(X,We,Xe,U),Q.push(fe)),fe}function be(Xe){if(--Xe.usedTimes===0){const We=Q.indexOf(Xe);Q[We]=Q[Q.length-1],Q.pop(),Xe.destroy()}}function he(Xe){D.remove(Xe)}function Le(){D.dispose()}return{getParameters:le,getProgramCacheKey:se,getUniforms:ae,acquireProgram:de,releaseProgram:be,releaseShaderCache:he,programs:Q,dispose:Le}}function WebGLProperties(){let X=new WeakMap;function Z(U){let J=X.get(U);return J===void 0&&(J={},X.set(U,J)),J}function G(U){X.delete(U)}function W(U,J,Y){X.get(U)[J]=Y}function F(){X=new WeakMap}return{get:Z,remove:G,update:W,dispose:F}}function painterSortStable(X,Z){return X.groupOrder!==Z.groupOrder?X.groupOrder-Z.groupOrder:X.renderOrder!==Z.renderOrder?X.renderOrder-Z.renderOrder:X.material.id!==Z.material.id?X.material.id-Z.material.id:X.z!==Z.z?X.z-Z.z:X.id-Z.id}function reversePainterSortStable(X,Z){return X.groupOrder!==Z.groupOrder?X.groupOrder-Z.groupOrder:X.renderOrder!==Z.renderOrder?X.renderOrder-Z.renderOrder:X.z!==Z.z?Z.z-X.z:X.id-Z.id}function WebGLRenderList(){const X=[];let Z=0;const G=[],W=[],F=[];function U(){Z=0,G.length=0,W.length=0,F.length=0}function J(q,te,ie,ne,ce,le){let se=X[Z];return se===void 0?(se={id:q.id,object:q,geometry:te,material:ie,groupOrder:ne,renderOrder:q.renderOrder,z:ce,group:le},X[Z]=se):(se.id=q.id,se.object=q,se.geometry=te,se.material=ie,se.groupOrder=ne,se.renderOrder=q.renderOrder,se.z=ce,se.group=le),Z++,se}function Y(q,te,ie,ne,ce,le){const se=J(q,te,ie,ne,ce,le);ie.transmission>0?W.push(se):ie.transparent===!0?F.push(se):G.push(se)}function D(q,te,ie,ne,ce,le){const se=J(q,te,ie,ne,ce,le);ie.transmission>0?W.unshift(se):ie.transparent===!0?F.unshift(se):G.unshift(se)}function Q(q,te){G.length>1&&G.sort(q||painterSortStable),W.length>1&&W.sort(te||reversePainterSortStable),F.length>1&&F.sort(te||reversePainterSortStable)}function ee(){for(let q=Z,te=X.length;q<te;q++){const ie=X[q];if(ie.id===null)break;ie.id=null,ie.object=null,ie.geometry=null,ie.material=null,ie.group=null}}return{opaque:G,transmissive:W,transparent:F,init:U,push:Y,unshift:D,finish:ee,sort:Q}}function WebGLRenderLists(){let X=new WeakMap;function Z(W,F){const U=X.get(W);let J;return U===void 0?(J=new WebGLRenderList,X.set(W,[J])):F>=U.length?(J=new WebGLRenderList,U.push(J)):J=U[F],J}function G(){X=new WeakMap}return{get:Z,dispose:G}}function UniformsCache(){const X={};return{get:function(Z){if(X[Z.id]!==void 0)return X[Z.id];let G;switch(Z.type){case"DirectionalLight":G={direction:new Vector3,color:new Color};break;case"SpotLight":G={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":G={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":G={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":G={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return X[Z.id]=G,G}}}function ShadowUniformsCache(){const X={};return{get:function(Z){if(X[Z.id]!==void 0)return X[Z.id];let G;switch(Z.type){case"DirectionalLight":G={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":G={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":G={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return X[Z.id]=G,G}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(X,Z){return(Z.castShadow?2:0)-(X.castShadow?2:0)+(Z.map?1:0)-(X.map?1:0)}function WebGLLights(X,Z){const G=new UniformsCache,W=ShadowUniformsCache(),F={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let ee=0;ee<9;ee++)F.probe.push(new Vector3);const U=new Vector3,J=new Matrix4,Y=new Matrix4;function D(ee,q){let te=0,ie=0,ne=0;for(let Re=0;Re<9;Re++)F.probe[Re].set(0,0,0);let ce=0,le=0,se=0,pe=0,ue=0,ae=0,de=0,be=0,he=0,Le=0,Xe=0;ee.sort(shadowCastingAndTexturingLightsFirst);const We=q===!0?Math.PI:1;for(let Re=0,ye=ee.length;Re<ye;Re++){const re=ee[Re],Ze=re.color,Ge=re.intensity,ve=re.distance,Te=re.shadow&&re.shadow.map?re.shadow.map.texture:null;if(re.isAmbientLight)te+=Ze.r*Ge*We,ie+=Ze.g*Ge*We,ne+=Ze.b*Ge*We;else if(re.isLightProbe){for(let xe=0;xe<9;xe++)F.probe[xe].addScaledVector(re.sh.coefficients[xe],Ge);Xe++}else if(re.isDirectionalLight){const xe=G.get(re);if(xe.color.copy(re.color).multiplyScalar(re.intensity*We),re.castShadow){const Ye=re.shadow,ge=W.get(re);ge.shadowBias=Ye.bias,ge.shadowNormalBias=Ye.normalBias,ge.shadowRadius=Ye.radius,ge.shadowMapSize=Ye.mapSize,F.directionalShadow[ce]=ge,F.directionalShadowMap[ce]=Te,F.directionalShadowMatrix[ce]=re.shadow.matrix,ae++}F.directional[ce]=xe,ce++}else if(re.isSpotLight){const xe=G.get(re);xe.position.setFromMatrixPosition(re.matrixWorld),xe.color.copy(Ze).multiplyScalar(Ge*We),xe.distance=ve,xe.coneCos=Math.cos(re.angle),xe.penumbraCos=Math.cos(re.angle*(1-re.penumbra)),xe.decay=re.decay,F.spot[se]=xe;const Ye=re.shadow;if(re.map&&(F.spotLightMap[he]=re.map,he++,Ye.updateMatrices(re),re.castShadow&&Le++),F.spotLightMatrix[se]=Ye.matrix,re.castShadow){const ge=W.get(re);ge.shadowBias=Ye.bias,ge.shadowNormalBias=Ye.normalBias,ge.shadowRadius=Ye.radius,ge.shadowMapSize=Ye.mapSize,F.spotShadow[se]=ge,F.spotShadowMap[se]=Te,be++}se++}else if(re.isRectAreaLight){const xe=G.get(re);xe.color.copy(Ze).multiplyScalar(Ge),xe.halfWidth.set(re.width*.5,0,0),xe.halfHeight.set(0,re.height*.5,0),F.rectArea[pe]=xe,pe++}else if(re.isPointLight){const xe=G.get(re);if(xe.color.copy(re.color).multiplyScalar(re.intensity*We),xe.distance=re.distance,xe.decay=re.decay,re.castShadow){const Ye=re.shadow,ge=W.get(re);ge.shadowBias=Ye.bias,ge.shadowNormalBias=Ye.normalBias,ge.shadowRadius=Ye.radius,ge.shadowMapSize=Ye.mapSize,ge.shadowCameraNear=Ye.camera.near,ge.shadowCameraFar=Ye.camera.far,F.pointShadow[le]=ge,F.pointShadowMap[le]=Te,F.pointShadowMatrix[le]=re.shadow.matrix,de++}F.point[le]=xe,le++}else if(re.isHemisphereLight){const xe=G.get(re);xe.skyColor.copy(re.color).multiplyScalar(Ge*We),xe.groundColor.copy(re.groundColor).multiplyScalar(Ge*We),F.hemi[ue]=xe,ue++}}pe>0&&(Z.isWebGL2||X.has("OES_texture_float_linear")===!0?(F.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,F.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):X.has("OES_texture_half_float_linear")===!0?(F.rectAreaLTC1=UniformsLib.LTC_HALF_1,F.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),F.ambient[0]=te,F.ambient[1]=ie,F.ambient[2]=ne;const fe=F.hash;(fe.directionalLength!==ce||fe.pointLength!==le||fe.spotLength!==se||fe.rectAreaLength!==pe||fe.hemiLength!==ue||fe.numDirectionalShadows!==ae||fe.numPointShadows!==de||fe.numSpotShadows!==be||fe.numSpotMaps!==he||fe.numLightProbes!==Xe)&&(F.directional.length=ce,F.spot.length=se,F.rectArea.length=pe,F.point.length=le,F.hemi.length=ue,F.directionalShadow.length=ae,F.directionalShadowMap.length=ae,F.pointShadow.length=de,F.pointShadowMap.length=de,F.spotShadow.length=be,F.spotShadowMap.length=be,F.directionalShadowMatrix.length=ae,F.pointShadowMatrix.length=de,F.spotLightMatrix.length=be+he-Le,F.spotLightMap.length=he,F.numSpotLightShadowsWithMaps=Le,F.numLightProbes=Xe,fe.directionalLength=ce,fe.pointLength=le,fe.spotLength=se,fe.rectAreaLength=pe,fe.hemiLength=ue,fe.numDirectionalShadows=ae,fe.numPointShadows=de,fe.numSpotShadows=be,fe.numSpotMaps=he,fe.numLightProbes=Xe,F.version=nextVersion++)}function Q(ee,q){let te=0,ie=0,ne=0,ce=0,le=0;const se=q.matrixWorldInverse;for(let pe=0,ue=ee.length;pe<ue;pe++){const ae=ee[pe];if(ae.isDirectionalLight){const de=F.directional[te];de.direction.setFromMatrixPosition(ae.matrixWorld),U.setFromMatrixPosition(ae.target.matrixWorld),de.direction.sub(U),de.direction.transformDirection(se),te++}else if(ae.isSpotLight){const de=F.spot[ne];de.position.setFromMatrixPosition(ae.matrixWorld),de.position.applyMatrix4(se),de.direction.setFromMatrixPosition(ae.matrixWorld),U.setFromMatrixPosition(ae.target.matrixWorld),de.direction.sub(U),de.direction.transformDirection(se),ne++}else if(ae.isRectAreaLight){const de=F.rectArea[ce];de.position.setFromMatrixPosition(ae.matrixWorld),de.position.applyMatrix4(se),Y.identity(),J.copy(ae.matrixWorld),J.premultiply(se),Y.extractRotation(J),de.halfWidth.set(ae.width*.5,0,0),de.halfHeight.set(0,ae.height*.5,0),de.halfWidth.applyMatrix4(Y),de.halfHeight.applyMatrix4(Y),ce++}else if(ae.isPointLight){const de=F.point[ie];de.position.setFromMatrixPosition(ae.matrixWorld),de.position.applyMatrix4(se),ie++}else if(ae.isHemisphereLight){const de=F.hemi[le];de.direction.setFromMatrixPosition(ae.matrixWorld),de.direction.transformDirection(se),le++}}}return{setup:D,setupView:Q,state:F}}function WebGLRenderState(X,Z){const G=new WebGLLights(X,Z),W=[],F=[];function U(){W.length=0,F.length=0}function J(q){W.push(q)}function Y(q){F.push(q)}function D(q){G.setup(W,q)}function Q(q){G.setupView(W,q)}return{init:U,state:{lightsArray:W,shadowsArray:F,lights:G},setupLights:D,setupLightsView:Q,pushLight:J,pushShadow:Y}}function WebGLRenderStates(X,Z){let G=new WeakMap;function W(U,J=0){const Y=G.get(U);let D;return Y===void 0?(D=new WebGLRenderState(X,Z),G.set(U,[D])):J>=Y.length?(D=new WebGLRenderState(X,Z),Y.push(D)):D=Y[J],D}function F(){G=new WeakMap}return{get:W,dispose:F}}class MeshDepthMaterial extends Material{constructor(Z){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(Z)}copy(Z){return super.copy(Z),this.depthPacking=Z.depthPacking,this.map=Z.map,this.alphaMap=Z.alphaMap,this.displacementMap=Z.displacementMap,this.displacementScale=Z.displacementScale,this.displacementBias=Z.displacementBias,this.wireframe=Z.wireframe,this.wireframeLinewidth=Z.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(Z){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(Z)}copy(Z){return super.copy(Z),this.map=Z.map,this.alphaMap=Z.alphaMap,this.displacementMap=Z.displacementMap,this.displacementScale=Z.displacementScale,this.displacementBias=Z.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
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
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(X){const Z=requireBase64Js(),G=ieee754,W=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;X.Buffer=Y,X.SlowBuffer=pe,X.INSPECT_MAX_BYTES=50;const F=2147483647;X.kMaxLength=F,Y.TYPED_ARRAY_SUPPORT=U(),!Y.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function U(){try{const Ve=new Uint8Array(1),oe={foo:function(){return 42}};return Object.setPrototypeOf(oe,Uint8Array.prototype),Object.setPrototypeOf(Ve,oe),Ve.foo()===42}catch{return!1}}Object.defineProperty(Y.prototype,"parent",{enumerable:!0,get:function(){if(Y.isBuffer(this))return this.buffer}}),Object.defineProperty(Y.prototype,"offset",{enumerable:!0,get:function(){if(Y.isBuffer(this))return this.byteOffset}});function J(Ve){if(Ve>F)throw new RangeError('The value "'+Ve+'" is invalid for option "size"');const oe=new Uint8Array(Ve);return Object.setPrototypeOf(oe,Y.prototype),oe}function Y(Ve,oe,me){if(typeof Ve=="number"){if(typeof oe=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return q(Ve)}return D(Ve,oe,me)}Y.poolSize=8192;function D(Ve,oe,me){if(typeof Ve=="string")return te(Ve,oe);if(ArrayBuffer.isView(Ve))return ne(Ve);if(Ve==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof Ve);if($e(Ve,ArrayBuffer)||Ve&&$e(Ve.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($e(Ve,SharedArrayBuffer)||Ve&&$e(Ve.buffer,SharedArrayBuffer)))return ce(Ve,oe,me);if(typeof Ve=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const Se=Ve.valueOf&&Ve.valueOf();if(Se!=null&&Se!==Ve)return Y.from(Se,oe,me);const Fe=le(Ve);if(Fe)return Fe;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof Ve[Symbol.toPrimitive]=="function")return Y.from(Ve[Symbol.toPrimitive]("string"),oe,me);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof Ve)}Y.from=function(Ve,oe,me){return D(Ve,oe,me)},Object.setPrototypeOf(Y.prototype,Uint8Array.prototype),Object.setPrototypeOf(Y,Uint8Array);function Q(Ve){if(typeof Ve!="number")throw new TypeError('"size" argument must be of type number');if(Ve<0)throw new RangeError('The value "'+Ve+'" is invalid for option "size"')}function ee(Ve,oe,me){return Q(Ve),Ve<=0?J(Ve):oe!==void 0?typeof me=="string"?J(Ve).fill(oe,me):J(Ve).fill(oe):J(Ve)}Y.alloc=function(Ve,oe,me){return ee(Ve,oe,me)};function q(Ve){return Q(Ve),J(Ve<0?0:se(Ve)|0)}Y.allocUnsafe=function(Ve){return q(Ve)},Y.allocUnsafeSlow=function(Ve){return q(Ve)};function te(Ve,oe){if((typeof oe!="string"||oe==="")&&(oe="utf8"),!Y.isEncoding(oe))throw new TypeError("Unknown encoding: "+oe);const me=ue(Ve,oe)|0;let Se=J(me);const Fe=Se.write(Ve,oe);return Fe!==me&&(Se=Se.slice(0,Fe)),Se}function ie(Ve){const oe=Ve.length<0?0:se(Ve.length)|0,me=J(oe);for(let Se=0;Se<oe;Se+=1)me[Se]=Ve[Se]&255;return me}function ne(Ve){if($e(Ve,Uint8Array)){const oe=new Uint8Array(Ve);return ce(oe.buffer,oe.byteOffset,oe.byteLength)}return ie(Ve)}function ce(Ve,oe,me){if(oe<0||Ve.byteLength<oe)throw new RangeError('"offset" is outside of buffer bounds');if(Ve.byteLength<oe+(me||0))throw new RangeError('"length" is outside of buffer bounds');let Se;return oe===void 0&&me===void 0?Se=new Uint8Array(Ve):me===void 0?Se=new Uint8Array(Ve,oe):Se=new Uint8Array(Ve,oe,me),Object.setPrototypeOf(Se,Y.prototype),Se}function le(Ve){if(Y.isBuffer(Ve)){const oe=se(Ve.length)|0,me=J(oe);return me.length===0||Ve.copy(me,0,0,oe),me}if(Ve.length!==void 0)return typeof Ve.length!="number"||we(Ve.length)?J(0):ie(Ve);if(Ve.type==="Buffer"&&Array.isArray(Ve.data))return ie(Ve.data)}function se(Ve){if(Ve>=F)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+F.toString(16)+" bytes");return Ve|0}function pe(Ve){return+Ve!=Ve&&(Ve=0),Y.alloc(+Ve)}Y.isBuffer=function(oe){return oe!=null&&oe._isBuffer===!0&&oe!==Y.prototype},Y.compare=function(oe,me){if($e(oe,Uint8Array)&&(oe=Y.from(oe,oe.offset,oe.byteLength)),$e(me,Uint8Array)&&(me=Y.from(me,me.offset,me.byteLength)),!Y.isBuffer(oe)||!Y.isBuffer(me))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(oe===me)return 0;let Se=oe.length,Fe=me.length;for(let Ke=0,Ae=Math.min(Se,Fe);Ke<Ae;++Ke)if(oe[Ke]!==me[Ke]){Se=oe[Ke],Fe=me[Ke];break}return Se<Fe?-1:Fe<Se?1:0},Y.isEncoding=function(oe){switch(String(oe).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Y.concat=function(oe,me){if(!Array.isArray(oe))throw new TypeError('"list" argument must be an Array of Buffers');if(oe.length===0)return Y.alloc(0);let Se;if(me===void 0)for(me=0,Se=0;Se<oe.length;++Se)me+=oe[Se].length;const Fe=Y.allocUnsafe(me);let Ke=0;for(Se=0;Se<oe.length;++Se){let Ae=oe[Se];if($e(Ae,Uint8Array))Ke+Ae.length>Fe.length?(Y.isBuffer(Ae)||(Ae=Y.from(Ae)),Ae.copy(Fe,Ke)):Uint8Array.prototype.set.call(Fe,Ae,Ke);else if(Y.isBuffer(Ae))Ae.copy(Fe,Ke);else throw new TypeError('"list" argument must be an Array of Buffers');Ke+=Ae.length}return Fe};function ue(Ve,oe){if(Y.isBuffer(Ve))return Ve.length;if(ArrayBuffer.isView(Ve)||$e(Ve,ArrayBuffer))return Ve.byteLength;if(typeof Ve!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof Ve);const me=Ve.length,Se=arguments.length>2&&arguments[2]===!0;if(!Se&&me===0)return 0;let Fe=!1;for(;;)switch(oe){case"ascii":case"latin1":case"binary":return me;case"utf8":case"utf-8":return ze(Ve).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me*2;case"hex":return me>>>1;case"base64":return He(Ve).length;default:if(Fe)return Se?-1:ze(Ve).length;oe=(""+oe).toLowerCase(),Fe=!0}}Y.byteLength=ue;function ae(Ve,oe,me){let Se=!1;if((oe===void 0||oe<0)&&(oe=0),oe>this.length||((me===void 0||me>this.length)&&(me=this.length),me<=0)||(me>>>=0,oe>>>=0,me<=oe))return"";for(Ve||(Ve="utf8");;)switch(Ve){case"hex":return xe(this,oe,me);case"utf8":case"utf-8":return re(this,oe,me);case"ascii":return ve(this,oe,me);case"latin1":case"binary":return Te(this,oe,me);case"base64":return ye(this,oe,me);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ye(this,oe,me);default:if(Se)throw new TypeError("Unknown encoding: "+Ve);Ve=(Ve+"").toLowerCase(),Se=!0}}Y.prototype._isBuffer=!0;function de(Ve,oe,me){const Se=Ve[oe];Ve[oe]=Ve[me],Ve[me]=Se}Y.prototype.swap16=function(){const oe=this.length;if(oe%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let me=0;me<oe;me+=2)de(this,me,me+1);return this},Y.prototype.swap32=function(){const oe=this.length;if(oe%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let me=0;me<oe;me+=4)de(this,me,me+3),de(this,me+1,me+2);return this},Y.prototype.swap64=function(){const oe=this.length;if(oe%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let me=0;me<oe;me+=8)de(this,me,me+7),de(this,me+1,me+6),de(this,me+2,me+5),de(this,me+3,me+4);return this},Y.prototype.toString=function(){const oe=this.length;return oe===0?"":arguments.length===0?re(this,0,oe):ae.apply(this,arguments)},Y.prototype.toLocaleString=Y.prototype.toString,Y.prototype.equals=function(oe){if(!Y.isBuffer(oe))throw new TypeError("Argument must be a Buffer");return this===oe?!0:Y.compare(this,oe)===0},Y.prototype.inspect=function(){let oe="";const me=X.INSPECT_MAX_BYTES;return oe=this.toString("hex",0,me).replace(/(.{2})/g,"$1 ").trim(),this.length>me&&(oe+=" ... "),"<Buffer "+oe+">"},W&&(Y.prototype[W]=Y.prototype.inspect),Y.prototype.compare=function(oe,me,Se,Fe,Ke){if($e(oe,Uint8Array)&&(oe=Y.from(oe,oe.offset,oe.byteLength)),!Y.isBuffer(oe))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof oe);if(me===void 0&&(me=0),Se===void 0&&(Se=oe?oe.length:0),Fe===void 0&&(Fe=0),Ke===void 0&&(Ke=this.length),me<0||Se>oe.length||Fe<0||Ke>this.length)throw new RangeError("out of range index");if(Fe>=Ke&&me>=Se)return 0;if(Fe>=Ke)return-1;if(me>=Se)return 1;if(me>>>=0,Se>>>=0,Fe>>>=0,Ke>>>=0,this===oe)return 0;let Ae=Ke-Fe,rt=Se-me;const vt=Math.min(Ae,rt),Vt=this.slice(Fe,Ke),Wt=oe.slice(me,Se);for(let ft=0;ft<vt;++ft)if(Vt[ft]!==Wt[ft]){Ae=Vt[ft],rt=Wt[ft];break}return Ae<rt?-1:rt<Ae?1:0};function be(Ve,oe,me,Se,Fe){if(Ve.length===0)return-1;if(typeof me=="string"?(Se=me,me=0):me>2147483647?me=2147483647:me<-2147483648&&(me=-2147483648),me=+me,we(me)&&(me=Fe?0:Ve.length-1),me<0&&(me=Ve.length+me),me>=Ve.length){if(Fe)return-1;me=Ve.length-1}else if(me<0)if(Fe)me=0;else return-1;if(typeof oe=="string"&&(oe=Y.from(oe,Se)),Y.isBuffer(oe))return oe.length===0?-1:he(Ve,oe,me,Se,Fe);if(typeof oe=="number")return oe=oe&255,typeof Uint8Array.prototype.indexOf=="function"?Fe?Uint8Array.prototype.indexOf.call(Ve,oe,me):Uint8Array.prototype.lastIndexOf.call(Ve,oe,me):he(Ve,[oe],me,Se,Fe);throw new TypeError("val must be string, number or Buffer")}function he(Ve,oe,me,Se,Fe){let Ke=1,Ae=Ve.length,rt=oe.length;if(Se!==void 0&&(Se=String(Se).toLowerCase(),Se==="ucs2"||Se==="ucs-2"||Se==="utf16le"||Se==="utf-16le")){if(Ve.length<2||oe.length<2)return-1;Ke=2,Ae/=2,rt/=2,me/=2}function vt(Wt,ft){return Ke===1?Wt[ft]:Wt.readUInt16BE(ft*Ke)}let Vt;if(Fe){let Wt=-1;for(Vt=me;Vt<Ae;Vt++)if(vt(Ve,Vt)===vt(oe,Wt===-1?0:Vt-Wt)){if(Wt===-1&&(Wt=Vt),Vt-Wt+1===rt)return Wt*Ke}else Wt!==-1&&(Vt-=Vt-Wt),Wt=-1}else for(me+rt>Ae&&(me=Ae-rt),Vt=me;Vt>=0;Vt--){let Wt=!0;for(let ft=0;ft<rt;ft++)if(vt(Ve,Vt+ft)!==vt(oe,ft)){Wt=!1;break}if(Wt)return Vt}return-1}Y.prototype.includes=function(oe,me,Se){return this.indexOf(oe,me,Se)!==-1},Y.prototype.indexOf=function(oe,me,Se){return be(this,oe,me,Se,!0)},Y.prototype.lastIndexOf=function(oe,me,Se){return be(this,oe,me,Se,!1)};function Le(Ve,oe,me,Se){me=Number(me)||0;const Fe=Ve.length-me;Se?(Se=Number(Se),Se>Fe&&(Se=Fe)):Se=Fe;const Ke=oe.length;Se>Ke/2&&(Se=Ke/2);let Ae;for(Ae=0;Ae<Se;++Ae){const rt=parseInt(oe.substr(Ae*2,2),16);if(we(rt))return Ae;Ve[me+Ae]=rt}return Ae}function Xe(Ve,oe,me,Se){return Pe(ze(oe,Ve.length-me),Ve,me,Se)}function We(Ve,oe,me,Se){return Pe(Ee(oe),Ve,me,Se)}function fe(Ve,oe,me,Se){return Pe(He(oe),Ve,me,Se)}function Re(Ve,oe,me,Se){return Pe(_e(oe,Ve.length-me),Ve,me,Se)}Y.prototype.write=function(oe,me,Se,Fe){if(me===void 0)Fe="utf8",Se=this.length,me=0;else if(Se===void 0&&typeof me=="string")Fe=me,Se=this.length,me=0;else if(isFinite(me))me=me>>>0,isFinite(Se)?(Se=Se>>>0,Fe===void 0&&(Fe="utf8")):(Fe=Se,Se=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const Ke=this.length-me;if((Se===void 0||Se>Ke)&&(Se=Ke),oe.length>0&&(Se<0||me<0)||me>this.length)throw new RangeError("Attempt to write outside buffer bounds");Fe||(Fe="utf8");let Ae=!1;for(;;)switch(Fe){case"hex":return Le(this,oe,me,Se);case"utf8":case"utf-8":return Xe(this,oe,me,Se);case"ascii":case"latin1":case"binary":return We(this,oe,me,Se);case"base64":return fe(this,oe,me,Se);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Re(this,oe,me,Se);default:if(Ae)throw new TypeError("Unknown encoding: "+Fe);Fe=(""+Fe).toLowerCase(),Ae=!0}},Y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ye(Ve,oe,me){return oe===0&&me===Ve.length?Z.fromByteArray(Ve):Z.fromByteArray(Ve.slice(oe,me))}function re(Ve,oe,me){me=Math.min(Ve.length,me);const Se=[];let Fe=oe;for(;Fe<me;){const Ke=Ve[Fe];let Ae=null,rt=Ke>239?4:Ke>223?3:Ke>191?2:1;if(Fe+rt<=me){let vt,Vt,Wt,ft;switch(rt){case 1:Ke<128&&(Ae=Ke);break;case 2:vt=Ve[Fe+1],(vt&192)===128&&(ft=(Ke&31)<<6|vt&63,ft>127&&(Ae=ft));break;case 3:vt=Ve[Fe+1],Vt=Ve[Fe+2],(vt&192)===128&&(Vt&192)===128&&(ft=(Ke&15)<<12|(vt&63)<<6|Vt&63,ft>2047&&(ft<55296||ft>57343)&&(Ae=ft));break;case 4:vt=Ve[Fe+1],Vt=Ve[Fe+2],Wt=Ve[Fe+3],(vt&192)===128&&(Vt&192)===128&&(Wt&192)===128&&(ft=(Ke&15)<<18|(vt&63)<<12|(Vt&63)<<6|Wt&63,ft>65535&&ft<1114112&&(Ae=ft))}}Ae===null?(Ae=65533,rt=1):Ae>65535&&(Ae-=65536,Se.push(Ae>>>10&1023|55296),Ae=56320|Ae&1023),Se.push(Ae),Fe+=rt}return Ge(Se)}const Ze=4096;function Ge(Ve){const oe=Ve.length;if(oe<=Ze)return String.fromCharCode.apply(String,Ve);let me="",Se=0;for(;Se<oe;)me+=String.fromCharCode.apply(String,Ve.slice(Se,Se+=Ze));return me}function ve(Ve,oe,me){let Se="";me=Math.min(Ve.length,me);for(let Fe=oe;Fe<me;++Fe)Se+=String.fromCharCode(Ve[Fe]&127);return Se}function Te(Ve,oe,me){let Se="";me=Math.min(Ve.length,me);for(let Fe=oe;Fe<me;++Fe)Se+=String.fromCharCode(Ve[Fe]);return Se}function xe(Ve,oe,me){const Se=Ve.length;(!oe||oe<0)&&(oe=0),(!me||me<0||me>Se)&&(me=Se);let Fe="";for(let Ke=oe;Ke<me;++Ke)Fe+=Ue[Ve[Ke]];return Fe}function Ye(Ve,oe,me){const Se=Ve.slice(oe,me);let Fe="";for(let Ke=0;Ke<Se.length-1;Ke+=2)Fe+=String.fromCharCode(Se[Ke]+Se[Ke+1]*256);return Fe}Y.prototype.slice=function(oe,me){const Se=this.length;oe=~~oe,me=me===void 0?Se:~~me,oe<0?(oe+=Se,oe<0&&(oe=0)):oe>Se&&(oe=Se),me<0?(me+=Se,me<0&&(me=0)):me>Se&&(me=Se),me<oe&&(me=oe);const Fe=this.subarray(oe,me);return Object.setPrototypeOf(Fe,Y.prototype),Fe};function ge(Ve,oe,me){if(Ve%1!==0||Ve<0)throw new RangeError("offset is not uint");if(Ve+oe>me)throw new RangeError("Trying to access beyond buffer length")}Y.prototype.readUintLE=Y.prototype.readUIntLE=function(oe,me,Se){oe=oe>>>0,me=me>>>0,Se||ge(oe,me,this.length);let Fe=this[oe],Ke=1,Ae=0;for(;++Ae<me&&(Ke*=256);)Fe+=this[oe+Ae]*Ke;return Fe},Y.prototype.readUintBE=Y.prototype.readUIntBE=function(oe,me,Se){oe=oe>>>0,me=me>>>0,Se||ge(oe,me,this.length);let Fe=this[oe+--me],Ke=1;for(;me>0&&(Ke*=256);)Fe+=this[oe+--me]*Ke;return Fe},Y.prototype.readUint8=Y.prototype.readUInt8=function(oe,me){return oe=oe>>>0,me||ge(oe,1,this.length),this[oe]},Y.prototype.readUint16LE=Y.prototype.readUInt16LE=function(oe,me){return oe=oe>>>0,me||ge(oe,2,this.length),this[oe]|this[oe+1]<<8},Y.prototype.readUint16BE=Y.prototype.readUInt16BE=function(oe,me){return oe=oe>>>0,me||ge(oe,2,this.length),this[oe]<<8|this[oe+1]},Y.prototype.readUint32LE=Y.prototype.readUInt32LE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),(this[oe]|this[oe+1]<<8|this[oe+2]<<16)+this[oe+3]*16777216},Y.prototype.readUint32BE=Y.prototype.readUInt32BE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),this[oe]*16777216+(this[oe+1]<<16|this[oe+2]<<8|this[oe+3])},Y.prototype.readBigUInt64LE=et(function(oe){oe=oe>>>0,Ne(oe,"offset");const me=this[oe],Se=this[oe+7];(me===void 0||Se===void 0)&&ke(oe,this.length-8);const Fe=me+this[++oe]*2**8+this[++oe]*2**16+this[++oe]*2**24,Ke=this[++oe]+this[++oe]*2**8+this[++oe]*2**16+Se*2**24;return BigInt(Fe)+(BigInt(Ke)<<BigInt(32))}),Y.prototype.readBigUInt64BE=et(function(oe){oe=oe>>>0,Ne(oe,"offset");const me=this[oe],Se=this[oe+7];(me===void 0||Se===void 0)&&ke(oe,this.length-8);const Fe=me*2**24+this[++oe]*2**16+this[++oe]*2**8+this[++oe],Ke=this[++oe]*2**24+this[++oe]*2**16+this[++oe]*2**8+Se;return(BigInt(Fe)<<BigInt(32))+BigInt(Ke)}),Y.prototype.readIntLE=function(oe,me,Se){oe=oe>>>0,me=me>>>0,Se||ge(oe,me,this.length);let Fe=this[oe],Ke=1,Ae=0;for(;++Ae<me&&(Ke*=256);)Fe+=this[oe+Ae]*Ke;return Ke*=128,Fe>=Ke&&(Fe-=Math.pow(2,8*me)),Fe},Y.prototype.readIntBE=function(oe,me,Se){oe=oe>>>0,me=me>>>0,Se||ge(oe,me,this.length);let Fe=me,Ke=1,Ae=this[oe+--Fe];for(;Fe>0&&(Ke*=256);)Ae+=this[oe+--Fe]*Ke;return Ke*=128,Ae>=Ke&&(Ae-=Math.pow(2,8*me)),Ae},Y.prototype.readInt8=function(oe,me){return oe=oe>>>0,me||ge(oe,1,this.length),this[oe]&128?(255-this[oe]+1)*-1:this[oe]},Y.prototype.readInt16LE=function(oe,me){oe=oe>>>0,me||ge(oe,2,this.length);const Se=this[oe]|this[oe+1]<<8;return Se&32768?Se|4294901760:Se},Y.prototype.readInt16BE=function(oe,me){oe=oe>>>0,me||ge(oe,2,this.length);const Se=this[oe+1]|this[oe]<<8;return Se&32768?Se|4294901760:Se},Y.prototype.readInt32LE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),this[oe]|this[oe+1]<<8|this[oe+2]<<16|this[oe+3]<<24},Y.prototype.readInt32BE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),this[oe]<<24|this[oe+1]<<16|this[oe+2]<<8|this[oe+3]},Y.prototype.readBigInt64LE=et(function(oe){oe=oe>>>0,Ne(oe,"offset");const me=this[oe],Se=this[oe+7];(me===void 0||Se===void 0)&&ke(oe,this.length-8);const Fe=this[oe+4]+this[oe+5]*2**8+this[oe+6]*2**16+(Se<<24);return(BigInt(Fe)<<BigInt(32))+BigInt(me+this[++oe]*2**8+this[++oe]*2**16+this[++oe]*2**24)}),Y.prototype.readBigInt64BE=et(function(oe){oe=oe>>>0,Ne(oe,"offset");const me=this[oe],Se=this[oe+7];(me===void 0||Se===void 0)&&ke(oe,this.length-8);const Fe=(me<<24)+this[++oe]*2**16+this[++oe]*2**8+this[++oe];return(BigInt(Fe)<<BigInt(32))+BigInt(this[++oe]*2**24+this[++oe]*2**16+this[++oe]*2**8+Se)}),Y.prototype.readFloatLE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),G.read(this,oe,!0,23,4)},Y.prototype.readFloatBE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),G.read(this,oe,!1,23,4)},Y.prototype.readDoubleLE=function(oe,me){return oe=oe>>>0,me||ge(oe,8,this.length),G.read(this,oe,!0,52,8)},Y.prototype.readDoubleBE=function(oe,me){return oe=oe>>>0,me||ge(oe,8,this.length),G.read(this,oe,!1,52,8)};function Me(Ve,oe,me,Se,Fe,Ke){if(!Y.isBuffer(Ve))throw new TypeError('"buffer" argument must be a Buffer instance');if(oe>Fe||oe<Ke)throw new RangeError('"value" argument is out of bounds');if(me+Se>Ve.length)throw new RangeError("Index out of range")}Y.prototype.writeUintLE=Y.prototype.writeUIntLE=function(oe,me,Se,Fe){if(oe=+oe,me=me>>>0,Se=Se>>>0,!Fe){const rt=Math.pow(2,8*Se)-1;Me(this,oe,me,Se,rt,0)}let Ke=1,Ae=0;for(this[me]=oe&255;++Ae<Se&&(Ke*=256);)this[me+Ae]=oe/Ke&255;return me+Se},Y.prototype.writeUintBE=Y.prototype.writeUIntBE=function(oe,me,Se,Fe){if(oe=+oe,me=me>>>0,Se=Se>>>0,!Fe){const rt=Math.pow(2,8*Se)-1;Me(this,oe,me,Se,rt,0)}let Ke=Se-1,Ae=1;for(this[me+Ke]=oe&255;--Ke>=0&&(Ae*=256);)this[me+Ke]=oe/Ae&255;return me+Se},Y.prototype.writeUint8=Y.prototype.writeUInt8=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,1,255,0),this[me]=oe&255,me+1},Y.prototype.writeUint16LE=Y.prototype.writeUInt16LE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,2,65535,0),this[me]=oe&255,this[me+1]=oe>>>8,me+2},Y.prototype.writeUint16BE=Y.prototype.writeUInt16BE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,2,65535,0),this[me]=oe>>>8,this[me+1]=oe&255,me+2},Y.prototype.writeUint32LE=Y.prototype.writeUInt32LE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,4,4294967295,0),this[me+3]=oe>>>24,this[me+2]=oe>>>16,this[me+1]=oe>>>8,this[me]=oe&255,me+4},Y.prototype.writeUint32BE=Y.prototype.writeUInt32BE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,4,4294967295,0),this[me]=oe>>>24,this[me+1]=oe>>>16,this[me+2]=oe>>>8,this[me+3]=oe&255,me+4};function je(Ve,oe,me,Se,Fe){Je(oe,Se,Fe,Ve,me,7);let Ke=Number(oe&BigInt(4294967295));Ve[me++]=Ke,Ke=Ke>>8,Ve[me++]=Ke,Ke=Ke>>8,Ve[me++]=Ke,Ke=Ke>>8,Ve[me++]=Ke;let Ae=Number(oe>>BigInt(32)&BigInt(4294967295));return Ve[me++]=Ae,Ae=Ae>>8,Ve[me++]=Ae,Ae=Ae>>8,Ve[me++]=Ae,Ae=Ae>>8,Ve[me++]=Ae,me}function tt(Ve,oe,me,Se,Fe){Je(oe,Se,Fe,Ve,me,7);let Ke=Number(oe&BigInt(4294967295));Ve[me+7]=Ke,Ke=Ke>>8,Ve[me+6]=Ke,Ke=Ke>>8,Ve[me+5]=Ke,Ke=Ke>>8,Ve[me+4]=Ke;let Ae=Number(oe>>BigInt(32)&BigInt(4294967295));return Ve[me+3]=Ae,Ae=Ae>>8,Ve[me+2]=Ae,Ae=Ae>>8,Ve[me+1]=Ae,Ae=Ae>>8,Ve[me]=Ae,me+8}Y.prototype.writeBigUInt64LE=et(function(oe,me=0){return je(this,oe,me,BigInt(0),BigInt("0xffffffffffffffff"))}),Y.prototype.writeBigUInt64BE=et(function(oe,me=0){return tt(this,oe,me,BigInt(0),BigInt("0xffffffffffffffff"))}),Y.prototype.writeIntLE=function(oe,me,Se,Fe){if(oe=+oe,me=me>>>0,!Fe){const vt=Math.pow(2,8*Se-1);Me(this,oe,me,Se,vt-1,-vt)}let Ke=0,Ae=1,rt=0;for(this[me]=oe&255;++Ke<Se&&(Ae*=256);)oe<0&&rt===0&&this[me+Ke-1]!==0&&(rt=1),this[me+Ke]=(oe/Ae>>0)-rt&255;return me+Se},Y.prototype.writeIntBE=function(oe,me,Se,Fe){if(oe=+oe,me=me>>>0,!Fe){const vt=Math.pow(2,8*Se-1);Me(this,oe,me,Se,vt-1,-vt)}let Ke=Se-1,Ae=1,rt=0;for(this[me+Ke]=oe&255;--Ke>=0&&(Ae*=256);)oe<0&&rt===0&&this[me+Ke+1]!==0&&(rt=1),this[me+Ke]=(oe/Ae>>0)-rt&255;return me+Se},Y.prototype.writeInt8=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,1,127,-128),oe<0&&(oe=255+oe+1),this[me]=oe&255,me+1},Y.prototype.writeInt16LE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,2,32767,-32768),this[me]=oe&255,this[me+1]=oe>>>8,me+2},Y.prototype.writeInt16BE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,2,32767,-32768),this[me]=oe>>>8,this[me+1]=oe&255,me+2},Y.prototype.writeInt32LE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,4,2147483647,-2147483648),this[me]=oe&255,this[me+1]=oe>>>8,this[me+2]=oe>>>16,this[me+3]=oe>>>24,me+4},Y.prototype.writeInt32BE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,4,2147483647,-2147483648),oe<0&&(oe=4294967295+oe+1),this[me]=oe>>>24,this[me+1]=oe>>>16,this[me+2]=oe>>>8,this[me+3]=oe&255,me+4},Y.prototype.writeBigInt64LE=et(function(oe,me=0){return je(this,oe,me,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Y.prototype.writeBigInt64BE=et(function(oe,me=0){return tt(this,oe,me,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function it(Ve,oe,me,Se,Fe,Ke){if(me+Se>Ve.length)throw new RangeError("Index out of range");if(me<0)throw new RangeError("Index out of range")}function st(Ve,oe,me,Se,Fe){return oe=+oe,me=me>>>0,Fe||it(Ve,oe,me,4),G.write(Ve,oe,me,Se,23,4),me+4}Y.prototype.writeFloatLE=function(oe,me,Se){return st(this,oe,me,!0,Se)},Y.prototype.writeFloatBE=function(oe,me,Se){return st(this,oe,me,!1,Se)};function qe(Ve,oe,me,Se,Fe){return oe=+oe,me=me>>>0,Fe||it(Ve,oe,me,8),G.write(Ve,oe,me,Se,52,8),me+8}Y.prototype.writeDoubleLE=function(oe,me,Se){return qe(this,oe,me,!0,Se)},Y.prototype.writeDoubleBE=function(oe,me,Se){return qe(this,oe,me,!1,Se)},Y.prototype.copy=function(oe,me,Se,Fe){if(!Y.isBuffer(oe))throw new TypeError("argument should be a Buffer");if(Se||(Se=0),!Fe&&Fe!==0&&(Fe=this.length),me>=oe.length&&(me=oe.length),me||(me=0),Fe>0&&Fe<Se&&(Fe=Se),Fe===Se||oe.length===0||this.length===0)return 0;if(me<0)throw new RangeError("targetStart out of bounds");if(Se<0||Se>=this.length)throw new RangeError("Index out of range");if(Fe<0)throw new RangeError("sourceEnd out of bounds");Fe>this.length&&(Fe=this.length),oe.length-me<Fe-Se&&(Fe=oe.length-me+Se);const Ke=Fe-Se;return this===oe&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(me,Se,Fe):Uint8Array.prototype.set.call(oe,this.subarray(Se,Fe),me),Ke},Y.prototype.fill=function(oe,me,Se,Fe){if(typeof oe=="string"){if(typeof me=="string"?(Fe=me,me=0,Se=this.length):typeof Se=="string"&&(Fe=Se,Se=this.length),Fe!==void 0&&typeof Fe!="string")throw new TypeError("encoding must be a string");if(typeof Fe=="string"&&!Y.isEncoding(Fe))throw new TypeError("Unknown encoding: "+Fe);if(oe.length===1){const Ae=oe.charCodeAt(0);(Fe==="utf8"&&Ae<128||Fe==="latin1")&&(oe=Ae)}}else typeof oe=="number"?oe=oe&255:typeof oe=="boolean"&&(oe=Number(oe));if(me<0||this.length<me||this.length<Se)throw new RangeError("Out of range index");if(Se<=me)return this;me=me>>>0,Se=Se===void 0?this.length:Se>>>0,oe||(oe=0);let Ke;if(typeof oe=="number")for(Ke=me;Ke<Se;++Ke)this[Ke]=oe;else{const Ae=Y.isBuffer(oe)?oe:Y.from(oe,Fe),rt=Ae.length;if(rt===0)throw new TypeError('The value "'+oe+'" is invalid for argument "value"');for(Ke=0;Ke<Se-me;++Ke)this[Ke+me]=Ae[Ke%rt]}return this};const ot={};function ut(Ve,oe,me){ot[Ve]=class extends me{constructor(){super(),Object.defineProperty(this,"message",{value:oe.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${Ve}]`,this.stack,delete this.name}get code(){return Ve}set code(Fe){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:Fe,writable:!0})}toString(){return`${this.name} [${Ve}]: ${this.message}`}}}ut("ERR_BUFFER_OUT_OF_BOUNDS",function(Ve){return Ve?`${Ve} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ut("ERR_INVALID_ARG_TYPE",function(Ve,oe){return`The "${Ve}" argument must be of type number. Received type ${typeof oe}`},TypeError),ut("ERR_OUT_OF_RANGE",function(Ve,oe,me){let Se=`The value of "${Ve}" is out of range.`,Fe=me;return Number.isInteger(me)&&Math.abs(me)>2**32?Fe=dt(String(me)):typeof me=="bigint"&&(Fe=String(me),(me>BigInt(2)**BigInt(32)||me<-(BigInt(2)**BigInt(32)))&&(Fe=dt(Fe)),Fe+="n"),Se+=` It must be ${oe}. Received ${Fe}`,Se},RangeError);function dt(Ve){let oe="",me=Ve.length;const Se=Ve[0]==="-"?1:0;for(;me>=Se+4;me-=3)oe=`_${Ve.slice(me-3,me)}${oe}`;return`${Ve.slice(0,me)}${oe}`}function mt(Ve,oe,me){Ne(oe,"offset"),(Ve[oe]===void 0||Ve[oe+me]===void 0)&&ke(oe,Ve.length-(me+1))}function Je(Ve,oe,me,Se,Fe,Ke){if(Ve>me||Ve<oe){const Ae=typeof oe=="bigint"?"n":"";let rt;throw Ke>3?oe===0||oe===BigInt(0)?rt=`>= 0${Ae} and < 2${Ae} ** ${(Ke+1)*8}${Ae}`:rt=`>= -(2${Ae} ** ${(Ke+1)*8-1}${Ae}) and < 2 ** ${(Ke+1)*8-1}${Ae}`:rt=`>= ${oe}${Ae} and <= ${me}${Ae}`,new ot.ERR_OUT_OF_RANGE("value",rt,Ve)}mt(Se,Fe,Ke)}function Ne(Ve,oe){if(typeof Ve!="number")throw new ot.ERR_INVALID_ARG_TYPE(oe,"number",Ve)}function ke(Ve,oe,me){throw Math.floor(Ve)!==Ve?(Ne(Ve,me),new ot.ERR_OUT_OF_RANGE(me||"offset","an integer",Ve)):oe<0?new ot.ERR_BUFFER_OUT_OF_BOUNDS:new ot.ERR_OUT_OF_RANGE(me||"offset",`>= ${me?1:0} and <= ${oe}`,Ve)}const Ie=/[^+/0-9A-Za-z-_]/g;function Ce(Ve){if(Ve=Ve.split("=")[0],Ve=Ve.trim().replace(Ie,""),Ve.length<2)return"";for(;Ve.length%4!==0;)Ve=Ve+"=";return Ve}function ze(Ve,oe){oe=oe||1/0;let me;const Se=Ve.length;let Fe=null;const Ke=[];for(let Ae=0;Ae<Se;++Ae){if(me=Ve.charCodeAt(Ae),me>55295&&me<57344){if(!Fe){if(me>56319){(oe-=3)>-1&&Ke.push(239,191,189);continue}else if(Ae+1===Se){(oe-=3)>-1&&Ke.push(239,191,189);continue}Fe=me;continue}if(me<56320){(oe-=3)>-1&&Ke.push(239,191,189),Fe=me;continue}me=(Fe-55296<<10|me-56320)+65536}else Fe&&(oe-=3)>-1&&Ke.push(239,191,189);if(Fe=null,me<128){if((oe-=1)<0)break;Ke.push(me)}else if(me<2048){if((oe-=2)<0)break;Ke.push(me>>6|192,me&63|128)}else if(me<65536){if((oe-=3)<0)break;Ke.push(me>>12|224,me>>6&63|128,me&63|128)}else if(me<1114112){if((oe-=4)<0)break;Ke.push(me>>18|240,me>>12&63|128,me>>6&63|128,me&63|128)}else throw new Error("Invalid code point")}return Ke}function Ee(Ve){const oe=[];for(let me=0;me<Ve.length;++me)oe.push(Ve.charCodeAt(me)&255);return oe}function _e(Ve,oe){let me,Se,Fe;const Ke=[];for(let Ae=0;Ae<Ve.length&&!((oe-=2)<0);++Ae)me=Ve.charCodeAt(Ae),Se=me>>8,Fe=me%256,Ke.push(Fe),Ke.push(Se);return Ke}function He(Ve){return Z.toByteArray(Ce(Ve))}function Pe(Ve,oe,me,Se){let Fe;for(Fe=0;Fe<Se&&!(Fe+me>=oe.length||Fe>=Ve.length);++Fe)oe[Fe+me]=Ve[Fe];return Fe}function $e(Ve,oe){return Ve instanceof oe||Ve!=null&&Ve.constructor!=null&&Ve.constructor.name!=null&&Ve.constructor.name===oe.name}function we(Ve){return Ve!==Ve}const Ue=function(){const Ve="0123456789abcdef",oe=new Array(256);for(let me=0;me<16;++me){const Se=me*16;for(let Fe=0;Fe<16;++Fe)oe[Se+Fe]=Ve[me]+Ve[Fe]}return oe}();function et(Ve){return typeof BigInt>"u"?at:Ve}function at(){throw new Error("BigInt not supported")}})(buffer$1);let lazy=null;var textEndec$1=function(){return lazy===null&&(lazy={textEncoder:new TextEncoder,textDecoder:new TextDecoder}),lazy},formats$2={},encoding={};const ModuleError$8=moduleError,formats$1=new Set(["buffer","view","utf8"]);let Encoding$2=class{constructor(Z){if(this.encode=Z.encode||this.encode,this.decode=Z.decode||this.decode,this.name=Z.name||this.name,this.format=Z.format||this.format,typeof this.encode!="function")throw new TypeError("The 'encode' property must be a function");if(typeof this.decode!="function")throw new TypeError("The 'decode' property must be a function");if(this.encode=this.encode.bind(this),this.decode=this.decode.bind(this),typeof this.name!="string"||this.name==="")throw new TypeError("The 'name' property must be a string");if(typeof this.format!="string"||!formats$1.has(this.format))throw new TypeError("The 'format' property must be one of 'buffer', 'view', 'utf8'");Z.createViewTranscoder&&(this.createViewTranscoder=Z.createViewTranscoder),Z.createBufferTranscoder&&(this.createBufferTranscoder=Z.createBufferTranscoder),Z.createUTF8Transcoder&&(this.createUTF8Transcoder=Z.createUTF8Transcoder)}get commonName(){return this.name.split("+")[0]}createBufferTranscoder(){throw new ModuleError$8(`Encoding '${this.name}' cannot be transcoded to 'buffer'`,{code:"LEVEL_ENCODING_NOT_SUPPORTED"})}createViewTranscoder(){throw new ModuleError$8(`Encoding '${this.name}' cannot be transcoded to 'view'`,{code:"LEVEL_ENCODING_NOT_SUPPORTED"})}createUTF8Transcoder(){throw new ModuleError$8(`Encoding '${this.name}' cannot be transcoded to 'utf8'`,{code:"LEVEL_ENCODING_NOT_SUPPORTED"})}};encoding.Encoding=Encoding$2;const{Buffer:Buffer$1}=buffer$1||{},{Encoding:Encoding$1}=encoding,textEndec=textEndec$1;let BufferFormat$2=class extends Encoding$1{constructor(Z){super({...Z,format:"buffer"})}createViewTranscoder(){return new ViewFormat$2({encode:this.encode,decode:Z=>this.decode(Buffer$1.from(Z.buffer,Z.byteOffset,Z.byteLength)),name:`${this.name}+view`})}createBufferTranscoder(){return this}},ViewFormat$2=class extends Encoding$1{constructor(Z){super({...Z,format:"view"})}createBufferTranscoder(){return new BufferFormat$2({encode:Z=>{const G=this.encode(Z);return Buffer$1.from(G.buffer,G.byteOffset,G.byteLength)},decode:this.decode,name:`${this.name}+buffer`})}createViewTranscoder(){return this}},UTF8Format$2=class extends Encoding$1{constructor(Z){super({...Z,format:"utf8"})}createBufferTranscoder(){return new BufferFormat$2({encode:Z=>Buffer$1.from(this.encode(Z),"utf8"),decode:Z=>this.decode(Z.toString("utf8")),name:`${this.name}+buffer`})}createViewTranscoder(){const{textEncoder:Z,textDecoder:G}=textEndec();return new ViewFormat$2({encode:W=>Z.encode(this.encode(W)),decode:W=>this.decode(G.decode(W)),name:`${this.name}+view`})}createUTF8Transcoder(){return this}};formats$2.BufferFormat=BufferFormat$2;formats$2.ViewFormat=ViewFormat$2;formats$2.UTF8Format=UTF8Format$2;const{Buffer}=buffer$1||{Buffer:{isBuffer:()=>!1}},{textEncoder,textDecoder}=textEndec$1(),{BufferFormat:BufferFormat$1,ViewFormat:ViewFormat$1,UTF8Format:UTF8Format$1}=formats$2,identity$4=X=>X;encodings$1.utf8=new UTF8Format$1({encode:function(X){return Buffer.isBuffer(X)?X.toString("utf8"):ArrayBuffer.isView(X)?textDecoder.decode(X):String(X)},decode:identity$4,name:"utf8",createViewTranscoder(){return new ViewFormat$1({encode:function(X){return ArrayBuffer.isView(X)?X:textEncoder.encode(X)},decode:function(X){return textDecoder.decode(X)},name:`${this.name}+view`})},createBufferTranscoder(){return new BufferFormat$1({encode:function(X){return Buffer.isBuffer(X)?X:ArrayBuffer.isView(X)?Buffer.from(X.buffer,X.byteOffset,X.byteLength):Buffer.from(String(X),"utf8")},decode:function(X){return X.toString("utf8")},name:`${this.name}+buffer`})}});encodings$1.json=new UTF8Format$1({encode:JSON.stringify,decode:JSON.parse,name:"json"});encodings$1.buffer=new BufferFormat$1({encode:function(X){return Buffer.isBuffer(X)?X:ArrayBuffer.isView(X)?Buffer.from(X.buffer,X.byteOffset,X.byteLength):Buffer.from(String(X),"utf8")},decode:identity$4,name:"buffer",createViewTranscoder(){return new ViewFormat$1({encode:function(X){return ArrayBuffer.isView(X)?X:Buffer.from(String(X),"utf8")},decode:function(X){return Buffer.from(X.buffer,X.byteOffset,X.byteLength)},name:`${this.name}+view`})}});encodings$1.view=new ViewFormat$1({encode:function(X){return ArrayBuffer.isView(X)?X:textEncoder.encode(X)},decode:identity$4,name:"view",createBufferTranscoder(){return new BufferFormat$1({encode:function(X){return Buffer.isBuffer(X)?X:ArrayBuffer.isView(X)?Buffer.from(X.buffer,X.byteOffset,X.byteLength):Buffer.from(String(X),"utf8")},decode:identity$4,name:`${this.name}+buffer`})}});encodings$1.hex=new BufferFormat$1({encode:function(X){return Buffer.isBuffer(X)?X:Buffer.from(String(X),"hex")},decode:function(X){return X.toString("hex")},name:"hex"});encodings$1.base64=new BufferFormat$1({encode:function(X){return Buffer.isBuffer(X)?X:Buffer.from(String(X),"base64")},decode:function(X){return X.toString("base64")},name:"base64"});const ModuleError$7=moduleError,encodings=encodings$1,{Encoding}=encoding,{BufferFormat,ViewFormat,UTF8Format}=formats$2,kFormats=Symbol("formats"),kEncodings=Symbol("encodings"),validFormats=new Set(["buffer","view","utf8"]);let Transcoder$1=class{constructor(Z){if(Array.isArray(Z)){if(!Z.every(G=>validFormats.has(G)))throw new TypeError("Format must be one of 'buffer', 'view', 'utf8'")}else throw new TypeError("The first argument 'formats' must be an array");this[kEncodings]=new Map,this[kFormats]=new Set(Z);for(const G in encodings)try{this.encoding(G)}catch(W){if(W.code!=="LEVEL_ENCODING_NOT_SUPPORTED")throw W}}encodings(){return Array.from(new Set(this[kEncodings].values()))}encoding(Z){let G=this[kEncodings].get(Z);if(G===void 0){if(typeof Z=="string"&&Z!==""){if(G=lookup[Z],!G)throw new ModuleError$7(`Encoding '${Z}' is not found`,{code:"LEVEL_ENCODING_NOT_FOUND"})}else{if(typeof Z!="object"||Z===null)throw new TypeError("First argument 'encoding' must be a string or object");G=from(Z)}const{name:W,format:F}=G;if(!this[kFormats].has(F))if(this[kFormats].has("view"))G=G.createViewTranscoder();else if(this[kFormats].has("buffer"))G=G.createBufferTranscoder();else if(this[kFormats].has("utf8"))G=G.createUTF8Transcoder();else throw new ModuleError$7(`Encoding '${W}' cannot be transcoded`,{code:"LEVEL_ENCODING_NOT_SUPPORTED"});for(const U of[Z,W,G.name,G.commonName])this[kEncodings].set(U,G)}return G}};levelTranscoder.Transcoder=Transcoder$1;function from(X){if(X instanceof Encoding)return X;const Z="type"in X&&typeof X.type=="string"?X.type:void 0,G=X.name||Z||`anonymous-${anonymousCount++}`;switch(detectFormat(X)){case"view":return new ViewFormat({...X,name:G});case"utf8":return new UTF8Format({...X,name:G});case"buffer":return new BufferFormat({...X,name:G});default:throw new TypeError("Format must be one of 'buffer', 'view', 'utf8'")}}function detectFormat(X){return"format"in X&&X.format!==void 0?X.format:"buffer"in X&&typeof X.buffer=="boolean"?X.buffer?"buffer":"utf8":"code"in X&&Number.isInteger(X.code)?"view":"buffer"}const aliases={binary:encodings.buffer,"utf-8":encodings.utf8},lookup={...encodings,...aliases};let anonymousCount=0;var eventsExports={},events={get exports(){return eventsExports},set exports(X){eventsExports=X}},R$1=typeof Reflect=="object"?Reflect:null,ReflectApply=R$1&&typeof R$1.apply=="function"?R$1.apply:function(Z,G,W){return Function.prototype.apply.call(Z,G,W)},ReflectOwnKeys;R$1&&typeof R$1.ownKeys=="function"?ReflectOwnKeys=R$1.ownKeys:Object.getOwnPropertySymbols?ReflectOwnKeys=function(Z){return Object.getOwnPropertyNames(Z).concat(Object.getOwnPropertySymbols(Z))}:ReflectOwnKeys=function(Z){return Object.getOwnPropertyNames(Z)};function ProcessEmitWarning(X){console&&console.warn&&console.warn(X)}var NumberIsNaN=Number.isNaN||function(Z){return Z!==Z};function EventEmitter$1(){EventEmitter$1.init.call(this)}events.exports=EventEmitter$1;eventsExports.once=once;EventEmitter$1.EventEmitter=EventEmitter$1;EventEmitter$1.prototype._events=void 0;EventEmitter$1.prototype._eventsCount=0;EventEmitter$1.prototype._maxListeners=void 0;var defaultMaxListeners=10;function checkListener(X){if(typeof X!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof X)}Object.defineProperty(EventEmitter$1,"defaultMaxListeners",{enumerable:!0,get:function(){return defaultMaxListeners},set:function(X){if(typeof X!="number"||X<0||NumberIsNaN(X))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+X+".");defaultMaxListeners=X}});EventEmitter$1.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};EventEmitter$1.prototype.setMaxListeners=function(Z){if(typeof Z!="number"||Z<0||NumberIsNaN(Z))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+Z+".");return this._maxListeners=Z,this};function _getMaxListeners(X){return X._maxListeners===void 0?EventEmitter$1.defaultMaxListeners:X._maxListeners}EventEmitter$1.prototype.getMaxListeners=function(){return _getMaxListeners(this)};EventEmitter$1.prototype.emit=function(Z){for(var G=[],W=1;W<arguments.length;W++)G.push(arguments[W]);var F=Z==="error",U=this._events;if(U!==void 0)F=F&&U.error===void 0;else if(!F)return!1;if(F){var J;if(G.length>0&&(J=G[0]),J instanceof Error)throw J;var Y=new Error("Unhandled error."+(J?" ("+J.message+")":""));throw Y.context=J,Y}var D=U[Z];if(D===void 0)return!1;if(typeof D=="function")ReflectApply(D,this,G);else for(var Q=D.length,ee=arrayClone(D,Q),W=0;W<Q;++W)ReflectApply(ee[W],this,G);return!0};function _addListener(X,Z,G,W){var F,U,J;if(checkListener(G),U=X._events,U===void 0?(U=X._events=Object.create(null),X._eventsCount=0):(U.newListener!==void 0&&(X.emit("newListener",Z,G.listener?G.listener:G),U=X._events),J=U[Z]),J===void 0)J=U[Z]=G,++X._eventsCount;else if(typeof J=="function"?J=U[Z]=W?[G,J]:[J,G]:W?J.unshift(G):J.push(G),F=_getMaxListeners(X),F>0&&J.length>F&&!J.warned){J.warned=!0;var Y=new Error("Possible EventEmitter memory leak detected. "+J.length+" "+String(Z)+" listeners added. Use emitter.setMaxListeners() to increase limit");Y.name="MaxListenersExceededWarning",Y.emitter=X,Y.type=Z,Y.count=J.length,ProcessEmitWarning(Y)}return X}EventEmitter$1.prototype.addListener=function(Z,G){return _addListener(this,Z,G,!1)};EventEmitter$1.prototype.on=EventEmitter$1.prototype.addListener;EventEmitter$1.prototype.prependListener=function(Z,G){return _addListener(this,Z,G,!0)};function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _onceWrap(X,Z,G){var W={fired:!1,wrapFn:void 0,target:X,type:Z,listener:G},F=onceWrapper.bind(W);return F.listener=G,W.wrapFn=F,F}EventEmitter$1.prototype.once=function(Z,G){return checkListener(G),this.on(Z,_onceWrap(this,Z,G)),this};EventEmitter$1.prototype.prependOnceListener=function(Z,G){return checkListener(G),this.prependListener(Z,_onceWrap(this,Z,G)),this};EventEmitter$1.prototype.removeListener=function(Z,G){var W,F,U,J,Y;if(checkListener(G),F=this._events,F===void 0)return this;if(W=F[Z],W===void 0)return this;if(W===G||W.listener===G)--this._eventsCount===0?this._events=Object.create(null):(delete F[Z],F.removeListener&&this.emit("removeListener",Z,W.listener||G));else if(typeof W!="function"){for(U=-1,J=W.length-1;J>=0;J--)if(W[J]===G||W[J].listener===G){Y=W[J].listener,U=J;break}if(U<0)return this;U===0?W.shift():spliceOne(W,U),W.length===1&&(F[Z]=W[0]),F.removeListener!==void 0&&this.emit("removeListener",Z,Y||G)}return this};EventEmitter$1.prototype.off=EventEmitter$1.prototype.removeListener;EventEmitter$1.prototype.removeAllListeners=function(Z){var G,W,F;if(W=this._events,W===void 0)return this;if(W.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):W[Z]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete W[Z]),this;if(arguments.length===0){var U=Object.keys(W),J;for(F=0;F<U.length;++F)J=U[F],J!=="removeListener"&&this.removeAllListeners(J);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(G=W[Z],typeof G=="function")this.removeListener(Z,G);else if(G!==void 0)for(F=G.length-1;F>=0;F--)this.removeListener(Z,G[F]);return this};function _listeners(X,Z,G){var W=X._events;if(W===void 0)return[];var F=W[Z];return F===void 0?[]:typeof F=="function"?G?[F.listener||F]:[F]:G?unwrapListeners(F):arrayClone(F,F.length)}EventEmitter$1.prototype.listeners=function(Z){return _listeners(this,Z,!0)};EventEmitter$1.prototype.rawListeners=function(Z){return _listeners(this,Z,!1)};EventEmitter$1.listenerCount=function(X,Z){return typeof X.listenerCount=="function"?X.listenerCount(Z):listenerCount.call(X,Z)};EventEmitter$1.prototype.listenerCount=listenerCount;function listenerCount(X){var Z=this._events;if(Z!==void 0){var G=Z[X];if(typeof G=="function")return 1;if(G!==void 0)return G.length}return 0}EventEmitter$1.prototype.eventNames=function(){return this._eventsCount>0?ReflectOwnKeys(this._events):[]};function arrayClone(X,Z){for(var G=new Array(Z),W=0;W<Z;++W)G[W]=X[W];return G}function spliceOne(X,Z){for(;Z+1<X.length;Z++)X[Z]=X[Z+1];X.pop()}function unwrapListeners(X){for(var Z=new Array(X.length),G=0;G<Z.length;++G)Z[G]=X[G].listener||X[G];return Z}function once(X,Z){return new Promise(function(G,W){function F(J){X.removeListener(Z,U),W(J)}function U(){typeof X.removeListener=="function"&&X.removeListener("error",F),G([].slice.call(arguments))}eventTargetAgnosticAddListener(X,Z,U,{once:!0}),Z!=="error"&&addErrorHandlerIfEventEmitter(X,F,{once:!0})})}function addErrorHandlerIfEventEmitter(X,Z,G){typeof X.on=="function"&&eventTargetAgnosticAddListener(X,"error",Z,G)}function eventTargetAgnosticAddListener(X,Z,G,W){if(typeof X.on=="function")W.once?X.once(Z,G):X.on(Z,G);else if(typeof X.addEventListener=="function")X.addEventListener(Z,function F(U){W.once&&X.removeEventListener(Z,F),G(U)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof X)}var catering={},nextTickBrowser$1=typeof queueMicrotask=="function"?queueMicrotask:X=>Promise.resolve().then(X),nextTick=nextTickBrowser$1;catering.fromCallback=function(X,Z){if(X===void 0){var G=new Promise(function(W,F){X=function(U,J){U?F(U):W(J)}});X[Z!==void 0?Z:"promise"]=G}else if(typeof X!="function")throw new TypeError("Callback must be a function");return X};catering.fromPromise=function(X,Z){if(Z===void 0)return X;X.then(function(G){nextTick(()=>Z(null,G))}).catch(function(G){nextTick(()=>Z(G))})};var abstractIterator={},common$6={};common$6.getCallback=function(X,Z){return typeof X=="function"?X:Z};common$6.getOptions=function(X,Z){return typeof X=="object"&&X!==null?X:Z!==void 0?Z:{}};const{fromCallback:fromCallback$2}=catering,ModuleError$6=moduleError,{getOptions:getOptions$2,getCallback:getCallback$2}=common$6,kPromise$2=Symbol("promise"),kCallback$1=Symbol("callback"),kWorking=Symbol("working"),kHandleOne$1=Symbol("handleOne"),kHandleMany$1=Symbol("handleMany"),kAutoClose=Symbol("autoClose"),kFinishWork=Symbol("finishWork"),kReturnMany=Symbol("returnMany"),kClosing=Symbol("closing"),kHandleClose=Symbol("handleClose"),kClosed=Symbol("closed"),kCloseCallbacks$1=Symbol("closeCallbacks"),kKeyEncoding$1=Symbol("keyEncoding"),kValueEncoding$1=Symbol("valueEncoding"),kAbortOnClose=Symbol("abortOnClose"),kLegacy=Symbol("legacy"),kKeys=Symbol("keys"),kValues=Symbol("values"),kLimit=Symbol("limit"),kCount=Symbol("count"),emptyOptions=Object.freeze({}),noop$4=()=>{};let warnedEnd=!1;class CommonIterator{constructor(Z,G,W){if(typeof Z!="object"||Z===null){const F=Z===null?"null":typeof Z;throw new TypeError(`The first argument must be an abstract-level database, received ${F}`)}if(typeof G!="object"||G===null)throw new TypeError("The second argument must be an options object");this[kClosed]=!1,this[kCloseCallbacks$1]=[],this[kWorking]=!1,this[kClosing]=!1,this[kAutoClose]=!1,this[kCallback$1]=null,this[kHandleOne$1]=this[kHandleOne$1].bind(this),this[kHandleMany$1]=this[kHandleMany$1].bind(this),this[kHandleClose]=this[kHandleClose].bind(this),this[kKeyEncoding$1]=G[kKeyEncoding$1],this[kValueEncoding$1]=G[kValueEncoding$1],this[kLegacy]=W,this[kLimit]=Number.isInteger(G.limit)&&G.limit>=0?G.limit:1/0,this[kCount]=0,this[kAbortOnClose]=!!G.abortOnClose,this.db=Z,this.db.attachResource(this),this.nextTick=Z.nextTick}get count(){return this[kCount]}get limit(){return this[kLimit]}next(Z){let G;if(Z===void 0)G=new Promise((W,F)=>{Z=(U,J,Y)=>{U?F(U):this[kLegacy]?J===void 0&&Y===void 0?W():W([J,Y]):W(J)}});else if(typeof Z!="function")throw new TypeError("Callback must be a function");return this[kClosing]?this.nextTick(Z,new ModuleError$6("Iterator is not open: cannot call next() after close()",{code:"LEVEL_ITERATOR_NOT_OPEN"})):this[kWorking]?this.nextTick(Z,new ModuleError$6("Iterator is busy: cannot call next() until previous call has completed",{code:"LEVEL_ITERATOR_BUSY"})):(this[kWorking]=!0,this[kCallback$1]=Z,this[kCount]>=this[kLimit]?this.nextTick(this[kHandleOne$1],null):this._next(this[kHandleOne$1])),G}_next(Z){this.nextTick(Z)}nextv(Z,G,W){return W=getCallback$2(G,W),W=fromCallback$2(W,kPromise$2),G=getOptions$2(G,emptyOptions),Number.isInteger(Z)?(this[kClosing]?this.nextTick(W,new ModuleError$6("Iterator is not open: cannot call nextv() after close()",{code:"LEVEL_ITERATOR_NOT_OPEN"})):this[kWorking]?this.nextTick(W,new ModuleError$6("Iterator is busy: cannot call nextv() until previous call has completed",{code:"LEVEL_ITERATOR_BUSY"})):(Z<1&&(Z=1),this[kLimit]<1/0&&(Z=Math.min(Z,this[kLimit]-this[kCount])),this[kWorking]=!0,this[kCallback$1]=W,Z<=0?this.nextTick(this[kHandleMany$1],null,[]):this._nextv(Z,G,this[kHandleMany$1])),W[kPromise$2]):(this.nextTick(W,new TypeError("The first argument 'size' must be an integer")),W[kPromise$2])}_nextv(Z,G,W){const F=[],U=(J,Y,D)=>{if(J)return W(J);if(this[kLegacy]?Y===void 0&&D===void 0:Y===void 0)return W(null,F);F.push(this[kLegacy]?[Y,D]:Y),F.length===Z?W(null,F):this._next(U)};this._next(U)}all(Z,G){return G=getCallback$2(Z,G),G=fromCallback$2(G,kPromise$2),Z=getOptions$2(Z,emptyOptions),this[kClosing]?this.nextTick(G,new ModuleError$6("Iterator is not open: cannot call all() after close()",{code:"LEVEL_ITERATOR_NOT_OPEN"})):this[kWorking]?this.nextTick(G,new ModuleError$6("Iterator is busy: cannot call all() until previous call has completed",{code:"LEVEL_ITERATOR_BUSY"})):(this[kWorking]=!0,this[kCallback$1]=G,this[kAutoClose]=!0,this[kCount]>=this[kLimit]?this.nextTick(this[kHandleMany$1],null,[]):this._all(Z,this[kHandleMany$1])),G[kPromise$2]}_all(Z,G){let W=this[kCount];const F=[],U=()=>{const Y=this[kLimit]<1/0?Math.min(1e3,this[kLimit]-W):1e3;Y<=0?this.nextTick(G,null,F):this._nextv(Y,emptyOptions,J)},J=(Y,D)=>{Y?G(Y):D.length===0?G(null,F):(F.push.apply(F,D),W+=D.length,U())};U()}[kFinishWork](){const Z=this[kCallback$1];return this[kAbortOnClose]&&Z===null?noop$4:(this[kWorking]=!1,this[kCallback$1]=null,this[kClosing]&&this._close(this[kHandleClose]),Z)}[kReturnMany](Z,G,W){this[kAutoClose]?this.close(Z.bind(null,G,W)):Z(G,W)}seek(Z,G){if(G=getOptions$2(G,emptyOptions),!this[kClosing]){if(this[kWorking])throw new ModuleError$6("Iterator is busy: cannot call seek() until next() has completed",{code:"LEVEL_ITERATOR_BUSY"});{const W=this.db.keyEncoding(G.keyEncoding||this[kKeyEncoding$1]),F=W.format;G.keyEncoding!==F&&(G={...G,keyEncoding:F});const U=this.db.prefixKey(W.encode(Z),F);this._seek(U,G)}}}_seek(Z,G){throw new ModuleError$6("Iterator does not support seek()",{code:"LEVEL_NOT_SUPPORTED"})}close(Z){return Z=fromCallback$2(Z,kPromise$2),this[kClosed]?this.nextTick(Z):this[kClosing]?this[kCloseCallbacks$1].push(Z):(this[kClosing]=!0,this[kCloseCallbacks$1].push(Z),this[kWorking]?this[kAbortOnClose]&&this[kFinishWork]()(new ModuleError$6("Aborted on iterator close()",{code:"LEVEL_ITERATOR_NOT_OPEN"})):this._close(this[kHandleClose])),Z[kPromise$2]}_close(Z){this.nextTick(Z)}[kHandleClose](){this[kClosed]=!0,this.db.detachResource(this);const Z=this[kCloseCallbacks$1];this[kCloseCallbacks$1]=[];for(const G of Z)G()}async*[Symbol.asyncIterator](){try{let Z;for(;(Z=await this.next())!==void 0;)yield Z}finally{this[kClosed]||await this.close()}}}let AbstractIterator$3=class extends CommonIterator{constructor(Z,G){super(Z,G,!0),this[kKeys]=G.keys!==!1,this[kValues]=G.values!==!1}[kHandleOne$1](Z,G,W){const F=this[kFinishWork]();if(Z)return F(Z);try{G=this[kKeys]&&G!==void 0?this[kKeyEncoding$1].decode(G):void 0,W=this[kValues]&&W!==void 0?this[kValueEncoding$1].decode(W):void 0}catch(U){return F(new IteratorDecodeError("entry",U))}G===void 0&&W===void 0||this[kCount]++,F(null,G,W)}[kHandleMany$1](Z,G){const W=this[kFinishWork]();if(Z)return this[kReturnMany](W,Z);try{for(const F of G){const U=F[0],J=F[1];F[0]=this[kKeys]&&U!==void 0?this[kKeyEncoding$1].decode(U):void 0,F[1]=this[kValues]&&J!==void 0?this[kValueEncoding$1].decode(J):void 0}}catch(F){return this[kReturnMany](W,new IteratorDecodeError("entries",F))}this[kCount]+=G.length,this[kReturnMany](W,null,G)}end(Z){return!warnedEnd&&typeof console<"u"&&(warnedEnd=!0,console.warn(new ModuleError$6("The iterator.end() method was renamed to close() and end() is an alias that will be removed in a future version",{code:"LEVEL_LEGACY"}))),this.close(Z)}},AbstractKeyIterator$3=class extends CommonIterator{constructor(Z,G){super(Z,G,!1)}[kHandleOne$1](Z,G){const W=this[kFinishWork]();if(Z)return W(Z);try{G=G!==void 0?this[kKeyEncoding$1].decode(G):void 0}catch(F){return W(new IteratorDecodeError("key",F))}G!==void 0&&this[kCount]++,W(null,G)}[kHandleMany$1](Z,G){const W=this[kFinishWork]();if(Z)return this[kReturnMany](W,Z);try{for(let F=0;F<G.length;F++){const U=G[F];G[F]=U!==void 0?this[kKeyEncoding$1].decode(U):void 0}}catch(F){return this[kReturnMany](W,new IteratorDecodeError("keys",F))}this[kCount]+=G.length,this[kReturnMany](W,null,G)}},AbstractValueIterator$3=class extends CommonIterator{constructor(Z,G){super(Z,G,!1)}[kHandleOne$1](Z,G){const W=this[kFinishWork]();if(Z)return W(Z);try{G=G!==void 0?this[kValueEncoding$1].decode(G):void 0}catch(F){return W(new IteratorDecodeError("value",F))}G!==void 0&&this[kCount]++,W(null,G)}[kHandleMany$1](Z,G){const W=this[kFinishWork]();if(Z)return this[kReturnMany](W,Z);try{for(let F=0;F<G.length;F++){const U=G[F];G[F]=U!==void 0?this[kValueEncoding$1].decode(U):void 0}}catch(F){return this[kReturnMany](W,new IteratorDecodeError("values",F))}this[kCount]+=G.length,this[kReturnMany](W,null,G)}};class IteratorDecodeError extends ModuleError$6{constructor(Z,G){super(`Iterator could not decode ${Z}`,{code:"LEVEL_DECODE_ERROR",cause:G})}}for(const X of["_ended property","_nexting property","_end method"])Object.defineProperty(AbstractIterator$3.prototype,X.split(" ")[0],{get(){throw new ModuleError$6(`The ${X} has been removed`,{code:"LEVEL_LEGACY"})},set(){throw new ModuleError$6(`The ${X} has been removed`,{code:"LEVEL_LEGACY"})}});AbstractIterator$3.keyEncoding=kKeyEncoding$1;AbstractIterator$3.valueEncoding=kValueEncoding$1;abstractIterator.AbstractIterator=AbstractIterator$3;abstractIterator.AbstractKeyIterator=AbstractKeyIterator$3;abstractIterator.AbstractValueIterator=AbstractValueIterator$3;var defaultKvIterator={};const{AbstractKeyIterator:AbstractKeyIterator$2,AbstractValueIterator:AbstractValueIterator$2}=abstractIterator,kIterator$1=Symbol("iterator"),kCallback=Symbol("callback"),kHandleOne=Symbol("handleOne"),kHandleMany=Symbol("handleMany");let DefaultKeyIterator$1=class extends AbstractKeyIterator$2{constructor(Z,G){super(Z,G),this[kIterator$1]=Z.iterator({...G,keys:!0,values:!1}),this[kHandleOne]=this[kHandleOne].bind(this),this[kHandleMany]=this[kHandleMany].bind(this)}},DefaultValueIterator$1=class extends AbstractValueIterator$2{constructor(Z,G){super(Z,G),this[kIterator$1]=Z.iterator({...G,keys:!1,values:!0}),this[kHandleOne]=this[kHandleOne].bind(this),this[kHandleMany]=this[kHandleMany].bind(this)}};for(const X of[DefaultKeyIterator$1,DefaultValueIterator$1]){const Z=X===DefaultKeyIterator$1,G=Z?W=>W[0]:W=>W[1];X.prototype._next=function(W){this[kCallback]=W,this[kIterator$1].next(this[kHandleOne])},X.prototype[kHandleOne]=function(W,F,U){const J=this[kCallback];W?J(W):J(null,Z?F:U)},X.prototype._nextv=function(W,F,U){this[kCallback]=U,this[kIterator$1].nextv(W,F,this[kHandleMany])},X.prototype._all=function(W,F){this[kCallback]=F,this[kIterator$1].all(W,this[kHandleMany])},X.prototype[kHandleMany]=function(W,F){const U=this[kCallback];W?U(W):U(null,F.map(G))},X.prototype._seek=function(W,F){this[kIterator$1].seek(W,F)},X.prototype._close=function(W){this[kIterator$1].close(W)}}defaultKvIterator.DefaultKeyIterator=DefaultKeyIterator$1;defaultKvIterator.DefaultValueIterator=DefaultValueIterator$1;var deferredIterator={};const{AbstractIterator:AbstractIterator$2,AbstractKeyIterator:AbstractKeyIterator$1,AbstractValueIterator:AbstractValueIterator$1}=abstractIterator,ModuleError$5=moduleError,kNut=Symbol("nut"),kUndefer$1=Symbol("undefer"),kFactory=Symbol("factory");let DeferredIterator$1=class extends AbstractIterator$2{constructor(Z,G){super(Z,G),this[kNut]=null,this[kFactory]=()=>Z.iterator(G),this.db.defer(()=>this[kUndefer$1]())}},DeferredKeyIterator$1=class extends AbstractKeyIterator$1{constructor(Z,G){super(Z,G),this[kNut]=null,this[kFactory]=()=>Z.keys(G),this.db.defer(()=>this[kUndefer$1]())}},DeferredValueIterator$1=class extends AbstractValueIterator$1{constructor(Z,G){super(Z,G),this[kNut]=null,this[kFactory]=()=>Z.values(G),this.db.defer(()=>this[kUndefer$1]())}};for(const X of[DeferredIterator$1,DeferredKeyIterator$1,DeferredValueIterator$1])X.prototype[kUndefer$1]=function(){this.db.status==="open"&&(this[kNut]=this[kFactory]())},X.prototype._next=function(Z){this[kNut]!==null?this[kNut].next(Z):this.db.status==="opening"?this.db.defer(()=>this._next(Z)):this.nextTick(Z,new ModuleError$5("Iterator is not open: cannot call next() after close()",{code:"LEVEL_ITERATOR_NOT_OPEN"}))},X.prototype._nextv=function(Z,G,W){this[kNut]!==null?this[kNut].nextv(Z,G,W):this.db.status==="opening"?this.db.defer(()=>this._nextv(Z,G,W)):this.nextTick(W,new ModuleError$5("Iterator is not open: cannot call nextv() after close()",{code:"LEVEL_ITERATOR_NOT_OPEN"}))},X.prototype._all=function(Z,G){this[kNut]!==null?this[kNut].all(G):this.db.status==="opening"?this.db.defer(()=>this._all(Z,G)):this.nextTick(G,new ModuleError$5("Iterator is not open: cannot call all() after close()",{code:"LEVEL_ITERATOR_NOT_OPEN"}))},X.prototype._seek=function(Z,G){this[kNut]!==null?this[kNut]._seek(Z,G):this.db.status==="opening"&&this.db.defer(()=>this._seek(Z,G))},X.prototype._close=function(Z){this[kNut]!==null?this[kNut].close(Z):this.db.status==="opening"?this.db.defer(()=>this._close(Z)):this.nextTick(Z)};deferredIterator.DeferredIterator=DeferredIterator$1;deferredIterator.DeferredKeyIterator=DeferredKeyIterator$1;deferredIterator.DeferredValueIterator=DeferredValueIterator$1;var defaultChainedBatch={},abstractChainedBatch={};const{fromCallback:fromCallback$1}=catering,ModuleError$4=moduleError,{getCallback:getCallback$1,getOptions:getOptions$1}=common$6,kPromise$1=Symbol("promise"),kStatus$1=Symbol("status"),kOperations$1=Symbol("operations"),kFinishClose=Symbol("finishClose"),kCloseCallbacks=Symbol("closeCallbacks");let AbstractChainedBatch$1=class{constructor(Z){if(typeof Z!="object"||Z===null){const G=Z===null?"null":typeof Z;throw new TypeError(`The first argument must be an abstract-level database, received ${G}`)}this[kOperations$1]=[],this[kCloseCallbacks]=[],this[kStatus$1]="open",this[kFinishClose]=this[kFinishClose].bind(this),this.db=Z,this.db.attachResource(this),this.nextTick=Z.nextTick}get length(){return this[kOperations$1].length}put(Z,G,W){if(this[kStatus$1]!=="open")throw new ModuleError$4("Batch is not open: cannot call put() after write() or close()",{code:"LEVEL_BATCH_NOT_OPEN"});const F=this.db._checkKey(Z)||this.db._checkValue(G);if(F)throw F;const U=W&&W.sublevel!=null?W.sublevel:this.db,J=W,Y=U.keyEncoding(W&&W.keyEncoding),D=U.valueEncoding(W&&W.valueEncoding),Q=Y.format;W={...W,keyEncoding:Q,valueEncoding:D.format},U!==this.db&&(W.sublevel=null);const ee=U.prefixKey(Y.encode(Z),Q),q=D.encode(G);return this._put(ee,q,W),this[kOperations$1].push({...J,type:"put",key:Z,value:G}),this}_put(Z,G,W){}del(Z,G){if(this[kStatus$1]!=="open")throw new ModuleError$4("Batch is not open: cannot call del() after write() or close()",{code:"LEVEL_BATCH_NOT_OPEN"});const W=this.db._checkKey(Z);if(W)throw W;const F=G&&G.sublevel!=null?G.sublevel:this.db,U=G,J=F.keyEncoding(G&&G.keyEncoding),Y=J.format;return G={...G,keyEncoding:Y},F!==this.db&&(G.sublevel=null),this._del(F.prefixKey(J.encode(Z),Y),G),this[kOperations$1].push({...U,type:"del",key:Z}),this}_del(Z,G){}clear(){if(this[kStatus$1]!=="open")throw new ModuleError$4("Batch is not open: cannot call clear() after write() or close()",{code:"LEVEL_BATCH_NOT_OPEN"});return this._clear(),this[kOperations$1]=[],this}_clear(){}write(Z,G){return G=getCallback$1(Z,G),G=fromCallback$1(G,kPromise$1),Z=getOptions$1(Z),this[kStatus$1]!=="open"?this.nextTick(G,new ModuleError$4("Batch is not open: cannot call write() after write() or close()",{code:"LEVEL_BATCH_NOT_OPEN"})):this.length===0?this.close(G):(this[kStatus$1]="writing",this._write(Z,W=>{this[kStatus$1]="closing",this[kCloseCallbacks].push(()=>G(W)),W||this.db.emit("batch",this[kOperations$1]),this._close(this[kFinishClose])})),G[kPromise$1]}_write(Z,G){}close(Z){return Z=fromCallback$1(Z,kPromise$1),this[kStatus$1]==="closing"?this[kCloseCallbacks].push(Z):this[kStatus$1]==="closed"?this.nextTick(Z):(this[kCloseCallbacks].push(Z),this[kStatus$1]!=="writing"&&(this[kStatus$1]="closing",this._close(this[kFinishClose]))),Z[kPromise$1]}_close(Z){this.nextTick(Z)}[kFinishClose](){this[kStatus$1]="closed",this.db.detachResource(this);const Z=this[kCloseCallbacks];this[kCloseCallbacks]=[];for(const G of Z)G()}};abstractChainedBatch.AbstractChainedBatch=AbstractChainedBatch$1;const{AbstractChainedBatch}=abstractChainedBatch,ModuleError$3=moduleError,kEncoded=Symbol("encoded");let DefaultChainedBatch$1=class extends AbstractChainedBatch{constructor(Z){super(Z),this[kEncoded]=[]}_put(Z,G,W){this[kEncoded].push({...W,type:"put",key:Z,value:G})}_del(Z,G){this[kEncoded].push({...G,type:"del",key:Z})}_clear(){this[kEncoded]=[]}_write(Z,G){this.db.status==="opening"?this.db.defer(()=>this._write(Z,G)):this.db.status==="open"?this[kEncoded].length===0?this.nextTick(G):this.db._batch(this[kEncoded],Z,G):this.nextTick(G,new ModuleError$3("Batch is not open: cannot call write() after write() or close()",{code:"LEVEL_BATCH_NOT_OPEN"}))}};defaultChainedBatch.DefaultChainedBatch=DefaultChainedBatch$1;const ModuleError$2=moduleError,hasOwnProperty$5=Object.prototype.hasOwnProperty,rangeOptions$2=new Set(["lt","lte","gt","gte"]);var rangeOptions_1=function(X,Z){const G={};for(const W in X)if(hasOwnProperty$5.call(X,W)&&!(W==="keyEncoding"||W==="valueEncoding")){if(W==="start"||W==="end")throw new ModuleError$2(`The legacy range option '${W}' has been removed`,{code:"LEVEL_LEGACY"});if(W==="encoding")throw new ModuleError$2("The levelup-style 'encoding' alias has been removed, use 'valueEncoding' instead",{code:"LEVEL_LEGACY"});rangeOptions$2.has(W)?G[W]=Z.encode(X[W]):G[W]=X[W]}return G.reverse=!!G.reverse,G.limit=Number.isInteger(G.limit)&&G.limit>=0?G.limit:-1,G};/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var queueMicrotask_1,hasRequiredQueueMicrotask;function requireQueueMicrotask(){if(hasRequiredQueueMicrotask)return queueMicrotask_1;hasRequiredQueueMicrotask=1;let X;return queueMicrotask_1=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:commonjsGlobal):Z=>(X||(X=Promise.resolve())).then(Z).catch(G=>setTimeout(()=>{throw G},0)),queueMicrotask_1}var nextTickBrowser,hasRequiredNextTickBrowser;function requireNextTickBrowser(){if(hasRequiredNextTickBrowser)return nextTickBrowser;hasRequiredNextTickBrowser=1;const X=requireQueueMicrotask();return nextTickBrowser=function(Z,...G){G.length===0?X(Z):X(()=>Z(...G))},nextTickBrowser}var buffer={};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var hasRequiredBuffer;function requireBuffer(){return hasRequiredBuffer||(hasRequiredBuffer=1,function(X){const Z=requireBase64Js(),G=ieee754,W=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;X.Buffer=Y,X.SlowBuffer=pe,X.INSPECT_MAX_BYTES=50;const F=2147483647;X.kMaxLength=F,Y.TYPED_ARRAY_SUPPORT=U(),!Y.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function U(){try{const Ve=new Uint8Array(1),oe={foo:function(){return 42}};return Object.setPrototypeOf(oe,Uint8Array.prototype),Object.setPrototypeOf(Ve,oe),Ve.foo()===42}catch{return!1}}Object.defineProperty(Y.prototype,"parent",{enumerable:!0,get:function(){if(Y.isBuffer(this))return this.buffer}}),Object.defineProperty(Y.prototype,"offset",{enumerable:!0,get:function(){if(Y.isBuffer(this))return this.byteOffset}});function J(Ve){if(Ve>F)throw new RangeError('The value "'+Ve+'" is invalid for option "size"');const oe=new Uint8Array(Ve);return Object.setPrototypeOf(oe,Y.prototype),oe}function Y(Ve,oe,me){if(typeof Ve=="number"){if(typeof oe=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return q(Ve)}return D(Ve,oe,me)}Y.poolSize=8192;function D(Ve,oe,me){if(typeof Ve=="string")return te(Ve,oe);if(ArrayBuffer.isView(Ve))return ne(Ve);if(Ve==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof Ve);if($e(Ve,ArrayBuffer)||Ve&&$e(Ve.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($e(Ve,SharedArrayBuffer)||Ve&&$e(Ve.buffer,SharedArrayBuffer)))return ce(Ve,oe,me);if(typeof Ve=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const Se=Ve.valueOf&&Ve.valueOf();if(Se!=null&&Se!==Ve)return Y.from(Se,oe,me);const Fe=le(Ve);if(Fe)return Fe;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof Ve[Symbol.toPrimitive]=="function")return Y.from(Ve[Symbol.toPrimitive]("string"),oe,me);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof Ve)}Y.from=function(Ve,oe,me){return D(Ve,oe,me)},Object.setPrototypeOf(Y.prototype,Uint8Array.prototype),Object.setPrototypeOf(Y,Uint8Array);function Q(Ve){if(typeof Ve!="number")throw new TypeError('"size" argument must be of type number');if(Ve<0)throw new RangeError('The value "'+Ve+'" is invalid for option "size"')}function ee(Ve,oe,me){return Q(Ve),Ve<=0?J(Ve):oe!==void 0?typeof me=="string"?J(Ve).fill(oe,me):J(Ve).fill(oe):J(Ve)}Y.alloc=function(Ve,oe,me){return ee(Ve,oe,me)};function q(Ve){return Q(Ve),J(Ve<0?0:se(Ve)|0)}Y.allocUnsafe=function(Ve){return q(Ve)},Y.allocUnsafeSlow=function(Ve){return q(Ve)};function te(Ve,oe){if((typeof oe!="string"||oe==="")&&(oe="utf8"),!Y.isEncoding(oe))throw new TypeError("Unknown encoding: "+oe);const me=ue(Ve,oe)|0;let Se=J(me);const Fe=Se.write(Ve,oe);return Fe!==me&&(Se=Se.slice(0,Fe)),Se}function ie(Ve){const oe=Ve.length<0?0:se(Ve.length)|0,me=J(oe);for(let Se=0;Se<oe;Se+=1)me[Se]=Ve[Se]&255;return me}function ne(Ve){if($e(Ve,Uint8Array)){const oe=new Uint8Array(Ve);return ce(oe.buffer,oe.byteOffset,oe.byteLength)}return ie(Ve)}function ce(Ve,oe,me){if(oe<0||Ve.byteLength<oe)throw new RangeError('"offset" is outside of buffer bounds');if(Ve.byteLength<oe+(me||0))throw new RangeError('"length" is outside of buffer bounds');let Se;return oe===void 0&&me===void 0?Se=new Uint8Array(Ve):me===void 0?Se=new Uint8Array(Ve,oe):Se=new Uint8Array(Ve,oe,me),Object.setPrototypeOf(Se,Y.prototype),Se}function le(Ve){if(Y.isBuffer(Ve)){const oe=se(Ve.length)|0,me=J(oe);return me.length===0||Ve.copy(me,0,0,oe),me}if(Ve.length!==void 0)return typeof Ve.length!="number"||we(Ve.length)?J(0):ie(Ve);if(Ve.type==="Buffer"&&Array.isArray(Ve.data))return ie(Ve.data)}function se(Ve){if(Ve>=F)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+F.toString(16)+" bytes");return Ve|0}function pe(Ve){return+Ve!=Ve&&(Ve=0),Y.alloc(+Ve)}Y.isBuffer=function(oe){return oe!=null&&oe._isBuffer===!0&&oe!==Y.prototype},Y.compare=function(oe,me){if($e(oe,Uint8Array)&&(oe=Y.from(oe,oe.offset,oe.byteLength)),$e(me,Uint8Array)&&(me=Y.from(me,me.offset,me.byteLength)),!Y.isBuffer(oe)||!Y.isBuffer(me))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(oe===me)return 0;let Se=oe.length,Fe=me.length;for(let Ke=0,Ae=Math.min(Se,Fe);Ke<Ae;++Ke)if(oe[Ke]!==me[Ke]){Se=oe[Ke],Fe=me[Ke];break}return Se<Fe?-1:Fe<Se?1:0},Y.isEncoding=function(oe){switch(String(oe).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Y.concat=function(oe,me){if(!Array.isArray(oe))throw new TypeError('"list" argument must be an Array of Buffers');if(oe.length===0)return Y.alloc(0);let Se;if(me===void 0)for(me=0,Se=0;Se<oe.length;++Se)me+=oe[Se].length;const Fe=Y.allocUnsafe(me);let Ke=0;for(Se=0;Se<oe.length;++Se){let Ae=oe[Se];if($e(Ae,Uint8Array))Ke+Ae.length>Fe.length?(Y.isBuffer(Ae)||(Ae=Y.from(Ae)),Ae.copy(Fe,Ke)):Uint8Array.prototype.set.call(Fe,Ae,Ke);else if(Y.isBuffer(Ae))Ae.copy(Fe,Ke);else throw new TypeError('"list" argument must be an Array of Buffers');Ke+=Ae.length}return Fe};function ue(Ve,oe){if(Y.isBuffer(Ve))return Ve.length;if(ArrayBuffer.isView(Ve)||$e(Ve,ArrayBuffer))return Ve.byteLength;if(typeof Ve!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof Ve);const me=Ve.length,Se=arguments.length>2&&arguments[2]===!0;if(!Se&&me===0)return 0;let Fe=!1;for(;;)switch(oe){case"ascii":case"latin1":case"binary":return me;case"utf8":case"utf-8":return ze(Ve).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return me*2;case"hex":return me>>>1;case"base64":return He(Ve).length;default:if(Fe)return Se?-1:ze(Ve).length;oe=(""+oe).toLowerCase(),Fe=!0}}Y.byteLength=ue;function ae(Ve,oe,me){let Se=!1;if((oe===void 0||oe<0)&&(oe=0),oe>this.length||((me===void 0||me>this.length)&&(me=this.length),me<=0)||(me>>>=0,oe>>>=0,me<=oe))return"";for(Ve||(Ve="utf8");;)switch(Ve){case"hex":return xe(this,oe,me);case"utf8":case"utf-8":return re(this,oe,me);case"ascii":return ve(this,oe,me);case"latin1":case"binary":return Te(this,oe,me);case"base64":return ye(this,oe,me);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ye(this,oe,me);default:if(Se)throw new TypeError("Unknown encoding: "+Ve);Ve=(Ve+"").toLowerCase(),Se=!0}}Y.prototype._isBuffer=!0;function de(Ve,oe,me){const Se=Ve[oe];Ve[oe]=Ve[me],Ve[me]=Se}Y.prototype.swap16=function(){const oe=this.length;if(oe%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let me=0;me<oe;me+=2)de(this,me,me+1);return this},Y.prototype.swap32=function(){const oe=this.length;if(oe%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let me=0;me<oe;me+=4)de(this,me,me+3),de(this,me+1,me+2);return this},Y.prototype.swap64=function(){const oe=this.length;if(oe%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let me=0;me<oe;me+=8)de(this,me,me+7),de(this,me+1,me+6),de(this,me+2,me+5),de(this,me+3,me+4);return this},Y.prototype.toString=function(){const oe=this.length;return oe===0?"":arguments.length===0?re(this,0,oe):ae.apply(this,arguments)},Y.prototype.toLocaleString=Y.prototype.toString,Y.prototype.equals=function(oe){if(!Y.isBuffer(oe))throw new TypeError("Argument must be a Buffer");return this===oe?!0:Y.compare(this,oe)===0},Y.prototype.inspect=function(){let oe="";const me=X.INSPECT_MAX_BYTES;return oe=this.toString("hex",0,me).replace(/(.{2})/g,"$1 ").trim(),this.length>me&&(oe+=" ... "),"<Buffer "+oe+">"},W&&(Y.prototype[W]=Y.prototype.inspect),Y.prototype.compare=function(oe,me,Se,Fe,Ke){if($e(oe,Uint8Array)&&(oe=Y.from(oe,oe.offset,oe.byteLength)),!Y.isBuffer(oe))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof oe);if(me===void 0&&(me=0),Se===void 0&&(Se=oe?oe.length:0),Fe===void 0&&(Fe=0),Ke===void 0&&(Ke=this.length),me<0||Se>oe.length||Fe<0||Ke>this.length)throw new RangeError("out of range index");if(Fe>=Ke&&me>=Se)return 0;if(Fe>=Ke)return-1;if(me>=Se)return 1;if(me>>>=0,Se>>>=0,Fe>>>=0,Ke>>>=0,this===oe)return 0;let Ae=Ke-Fe,rt=Se-me;const vt=Math.min(Ae,rt),Vt=this.slice(Fe,Ke),Wt=oe.slice(me,Se);for(let ft=0;ft<vt;++ft)if(Vt[ft]!==Wt[ft]){Ae=Vt[ft],rt=Wt[ft];break}return Ae<rt?-1:rt<Ae?1:0};function be(Ve,oe,me,Se,Fe){if(Ve.length===0)return-1;if(typeof me=="string"?(Se=me,me=0):me>2147483647?me=2147483647:me<-2147483648&&(me=-2147483648),me=+me,we(me)&&(me=Fe?0:Ve.length-1),me<0&&(me=Ve.length+me),me>=Ve.length){if(Fe)return-1;me=Ve.length-1}else if(me<0)if(Fe)me=0;else return-1;if(typeof oe=="string"&&(oe=Y.from(oe,Se)),Y.isBuffer(oe))return oe.length===0?-1:he(Ve,oe,me,Se,Fe);if(typeof oe=="number")return oe=oe&255,typeof Uint8Array.prototype.indexOf=="function"?Fe?Uint8Array.prototype.indexOf.call(Ve,oe,me):Uint8Array.prototype.lastIndexOf.call(Ve,oe,me):he(Ve,[oe],me,Se,Fe);throw new TypeError("val must be string, number or Buffer")}function he(Ve,oe,me,Se,Fe){let Ke=1,Ae=Ve.length,rt=oe.length;if(Se!==void 0&&(Se=String(Se).toLowerCase(),Se==="ucs2"||Se==="ucs-2"||Se==="utf16le"||Se==="utf-16le")){if(Ve.length<2||oe.length<2)return-1;Ke=2,Ae/=2,rt/=2,me/=2}function vt(Wt,ft){return Ke===1?Wt[ft]:Wt.readUInt16BE(ft*Ke)}let Vt;if(Fe){let Wt=-1;for(Vt=me;Vt<Ae;Vt++)if(vt(Ve,Vt)===vt(oe,Wt===-1?0:Vt-Wt)){if(Wt===-1&&(Wt=Vt),Vt-Wt+1===rt)return Wt*Ke}else Wt!==-1&&(Vt-=Vt-Wt),Wt=-1}else for(me+rt>Ae&&(me=Ae-rt),Vt=me;Vt>=0;Vt--){let Wt=!0;for(let ft=0;ft<rt;ft++)if(vt(Ve,Vt+ft)!==vt(oe,ft)){Wt=!1;break}if(Wt)return Vt}return-1}Y.prototype.includes=function(oe,me,Se){return this.indexOf(oe,me,Se)!==-1},Y.prototype.indexOf=function(oe,me,Se){return be(this,oe,me,Se,!0)},Y.prototype.lastIndexOf=function(oe,me,Se){return be(this,oe,me,Se,!1)};function Le(Ve,oe,me,Se){me=Number(me)||0;const Fe=Ve.length-me;Se?(Se=Number(Se),Se>Fe&&(Se=Fe)):Se=Fe;const Ke=oe.length;Se>Ke/2&&(Se=Ke/2);let Ae;for(Ae=0;Ae<Se;++Ae){const rt=parseInt(oe.substr(Ae*2,2),16);if(we(rt))return Ae;Ve[me+Ae]=rt}return Ae}function Xe(Ve,oe,me,Se){return Pe(ze(oe,Ve.length-me),Ve,me,Se)}function We(Ve,oe,me,Se){return Pe(Ee(oe),Ve,me,Se)}function fe(Ve,oe,me,Se){return Pe(He(oe),Ve,me,Se)}function Re(Ve,oe,me,Se){return Pe(_e(oe,Ve.length-me),Ve,me,Se)}Y.prototype.write=function(oe,me,Se,Fe){if(me===void 0)Fe="utf8",Se=this.length,me=0;else if(Se===void 0&&typeof me=="string")Fe=me,Se=this.length,me=0;else if(isFinite(me))me=me>>>0,isFinite(Se)?(Se=Se>>>0,Fe===void 0&&(Fe="utf8")):(Fe=Se,Se=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const Ke=this.length-me;if((Se===void 0||Se>Ke)&&(Se=Ke),oe.length>0&&(Se<0||me<0)||me>this.length)throw new RangeError("Attempt to write outside buffer bounds");Fe||(Fe="utf8");let Ae=!1;for(;;)switch(Fe){case"hex":return Le(this,oe,me,Se);case"utf8":case"utf-8":return Xe(this,oe,me,Se);case"ascii":case"latin1":case"binary":return We(this,oe,me,Se);case"base64":return fe(this,oe,me,Se);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Re(this,oe,me,Se);default:if(Ae)throw new TypeError("Unknown encoding: "+Fe);Fe=(""+Fe).toLowerCase(),Ae=!0}},Y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ye(Ve,oe,me){return oe===0&&me===Ve.length?Z.fromByteArray(Ve):Z.fromByteArray(Ve.slice(oe,me))}function re(Ve,oe,me){me=Math.min(Ve.length,me);const Se=[];let Fe=oe;for(;Fe<me;){const Ke=Ve[Fe];let Ae=null,rt=Ke>239?4:Ke>223?3:Ke>191?2:1;if(Fe+rt<=me){let vt,Vt,Wt,ft;switch(rt){case 1:Ke<128&&(Ae=Ke);break;case 2:vt=Ve[Fe+1],(vt&192)===128&&(ft=(Ke&31)<<6|vt&63,ft>127&&(Ae=ft));break;case 3:vt=Ve[Fe+1],Vt=Ve[Fe+2],(vt&192)===128&&(Vt&192)===128&&(ft=(Ke&15)<<12|(vt&63)<<6|Vt&63,ft>2047&&(ft<55296||ft>57343)&&(Ae=ft));break;case 4:vt=Ve[Fe+1],Vt=Ve[Fe+2],Wt=Ve[Fe+3],(vt&192)===128&&(Vt&192)===128&&(Wt&192)===128&&(ft=(Ke&15)<<18|(vt&63)<<12|(Vt&63)<<6|Wt&63,ft>65535&&ft<1114112&&(Ae=ft))}}Ae===null?(Ae=65533,rt=1):Ae>65535&&(Ae-=65536,Se.push(Ae>>>10&1023|55296),Ae=56320|Ae&1023),Se.push(Ae),Fe+=rt}return Ge(Se)}const Ze=4096;function Ge(Ve){const oe=Ve.length;if(oe<=Ze)return String.fromCharCode.apply(String,Ve);let me="",Se=0;for(;Se<oe;)me+=String.fromCharCode.apply(String,Ve.slice(Se,Se+=Ze));return me}function ve(Ve,oe,me){let Se="";me=Math.min(Ve.length,me);for(let Fe=oe;Fe<me;++Fe)Se+=String.fromCharCode(Ve[Fe]&127);return Se}function Te(Ve,oe,me){let Se="";me=Math.min(Ve.length,me);for(let Fe=oe;Fe<me;++Fe)Se+=String.fromCharCode(Ve[Fe]);return Se}function xe(Ve,oe,me){const Se=Ve.length;(!oe||oe<0)&&(oe=0),(!me||me<0||me>Se)&&(me=Se);let Fe="";for(let Ke=oe;Ke<me;++Ke)Fe+=Ue[Ve[Ke]];return Fe}function Ye(Ve,oe,me){const Se=Ve.slice(oe,me);let Fe="";for(let Ke=0;Ke<Se.length-1;Ke+=2)Fe+=String.fromCharCode(Se[Ke]+Se[Ke+1]*256);return Fe}Y.prototype.slice=function(oe,me){const Se=this.length;oe=~~oe,me=me===void 0?Se:~~me,oe<0?(oe+=Se,oe<0&&(oe=0)):oe>Se&&(oe=Se),me<0?(me+=Se,me<0&&(me=0)):me>Se&&(me=Se),me<oe&&(me=oe);const Fe=this.subarray(oe,me);return Object.setPrototypeOf(Fe,Y.prototype),Fe};function ge(Ve,oe,me){if(Ve%1!==0||Ve<0)throw new RangeError("offset is not uint");if(Ve+oe>me)throw new RangeError("Trying to access beyond buffer length")}Y.prototype.readUintLE=Y.prototype.readUIntLE=function(oe,me,Se){oe=oe>>>0,me=me>>>0,Se||ge(oe,me,this.length);let Fe=this[oe],Ke=1,Ae=0;for(;++Ae<me&&(Ke*=256);)Fe+=this[oe+Ae]*Ke;return Fe},Y.prototype.readUintBE=Y.prototype.readUIntBE=function(oe,me,Se){oe=oe>>>0,me=me>>>0,Se||ge(oe,me,this.length);let Fe=this[oe+--me],Ke=1;for(;me>0&&(Ke*=256);)Fe+=this[oe+--me]*Ke;return Fe},Y.prototype.readUint8=Y.prototype.readUInt8=function(oe,me){return oe=oe>>>0,me||ge(oe,1,this.length),this[oe]},Y.prototype.readUint16LE=Y.prototype.readUInt16LE=function(oe,me){return oe=oe>>>0,me||ge(oe,2,this.length),this[oe]|this[oe+1]<<8},Y.prototype.readUint16BE=Y.prototype.readUInt16BE=function(oe,me){return oe=oe>>>0,me||ge(oe,2,this.length),this[oe]<<8|this[oe+1]},Y.prototype.readUint32LE=Y.prototype.readUInt32LE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),(this[oe]|this[oe+1]<<8|this[oe+2]<<16)+this[oe+3]*16777216},Y.prototype.readUint32BE=Y.prototype.readUInt32BE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),this[oe]*16777216+(this[oe+1]<<16|this[oe+2]<<8|this[oe+3])},Y.prototype.readBigUInt64LE=et(function(oe){oe=oe>>>0,Ne(oe,"offset");const me=this[oe],Se=this[oe+7];(me===void 0||Se===void 0)&&ke(oe,this.length-8);const Fe=me+this[++oe]*2**8+this[++oe]*2**16+this[++oe]*2**24,Ke=this[++oe]+this[++oe]*2**8+this[++oe]*2**16+Se*2**24;return BigInt(Fe)+(BigInt(Ke)<<BigInt(32))}),Y.prototype.readBigUInt64BE=et(function(oe){oe=oe>>>0,Ne(oe,"offset");const me=this[oe],Se=this[oe+7];(me===void 0||Se===void 0)&&ke(oe,this.length-8);const Fe=me*2**24+this[++oe]*2**16+this[++oe]*2**8+this[++oe],Ke=this[++oe]*2**24+this[++oe]*2**16+this[++oe]*2**8+Se;return(BigInt(Fe)<<BigInt(32))+BigInt(Ke)}),Y.prototype.readIntLE=function(oe,me,Se){oe=oe>>>0,me=me>>>0,Se||ge(oe,me,this.length);let Fe=this[oe],Ke=1,Ae=0;for(;++Ae<me&&(Ke*=256);)Fe+=this[oe+Ae]*Ke;return Ke*=128,Fe>=Ke&&(Fe-=Math.pow(2,8*me)),Fe},Y.prototype.readIntBE=function(oe,me,Se){oe=oe>>>0,me=me>>>0,Se||ge(oe,me,this.length);let Fe=me,Ke=1,Ae=this[oe+--Fe];for(;Fe>0&&(Ke*=256);)Ae+=this[oe+--Fe]*Ke;return Ke*=128,Ae>=Ke&&(Ae-=Math.pow(2,8*me)),Ae},Y.prototype.readInt8=function(oe,me){return oe=oe>>>0,me||ge(oe,1,this.length),this[oe]&128?(255-this[oe]+1)*-1:this[oe]},Y.prototype.readInt16LE=function(oe,me){oe=oe>>>0,me||ge(oe,2,this.length);const Se=this[oe]|this[oe+1]<<8;return Se&32768?Se|4294901760:Se},Y.prototype.readInt16BE=function(oe,me){oe=oe>>>0,me||ge(oe,2,this.length);const Se=this[oe+1]|this[oe]<<8;return Se&32768?Se|4294901760:Se},Y.prototype.readInt32LE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),this[oe]|this[oe+1]<<8|this[oe+2]<<16|this[oe+3]<<24},Y.prototype.readInt32BE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),this[oe]<<24|this[oe+1]<<16|this[oe+2]<<8|this[oe+3]},Y.prototype.readBigInt64LE=et(function(oe){oe=oe>>>0,Ne(oe,"offset");const me=this[oe],Se=this[oe+7];(me===void 0||Se===void 0)&&ke(oe,this.length-8);const Fe=this[oe+4]+this[oe+5]*2**8+this[oe+6]*2**16+(Se<<24);return(BigInt(Fe)<<BigInt(32))+BigInt(me+this[++oe]*2**8+this[++oe]*2**16+this[++oe]*2**24)}),Y.prototype.readBigInt64BE=et(function(oe){oe=oe>>>0,Ne(oe,"offset");const me=this[oe],Se=this[oe+7];(me===void 0||Se===void 0)&&ke(oe,this.length-8);const Fe=(me<<24)+this[++oe]*2**16+this[++oe]*2**8+this[++oe];return(BigInt(Fe)<<BigInt(32))+BigInt(this[++oe]*2**24+this[++oe]*2**16+this[++oe]*2**8+Se)}),Y.prototype.readFloatLE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),G.read(this,oe,!0,23,4)},Y.prototype.readFloatBE=function(oe,me){return oe=oe>>>0,me||ge(oe,4,this.length),G.read(this,oe,!1,23,4)},Y.prototype.readDoubleLE=function(oe,me){return oe=oe>>>0,me||ge(oe,8,this.length),G.read(this,oe,!0,52,8)},Y.prototype.readDoubleBE=function(oe,me){return oe=oe>>>0,me||ge(oe,8,this.length),G.read(this,oe,!1,52,8)};function Me(Ve,oe,me,Se,Fe,Ke){if(!Y.isBuffer(Ve))throw new TypeError('"buffer" argument must be a Buffer instance');if(oe>Fe||oe<Ke)throw new RangeError('"value" argument is out of bounds');if(me+Se>Ve.length)throw new RangeError("Index out of range")}Y.prototype.writeUintLE=Y.prototype.writeUIntLE=function(oe,me,Se,Fe){if(oe=+oe,me=me>>>0,Se=Se>>>0,!Fe){const rt=Math.pow(2,8*Se)-1;Me(this,oe,me,Se,rt,0)}let Ke=1,Ae=0;for(this[me]=oe&255;++Ae<Se&&(Ke*=256);)this[me+Ae]=oe/Ke&255;return me+Se},Y.prototype.writeUintBE=Y.prototype.writeUIntBE=function(oe,me,Se,Fe){if(oe=+oe,me=me>>>0,Se=Se>>>0,!Fe){const rt=Math.pow(2,8*Se)-1;Me(this,oe,me,Se,rt,0)}let Ke=Se-1,Ae=1;for(this[me+Ke]=oe&255;--Ke>=0&&(Ae*=256);)this[me+Ke]=oe/Ae&255;return me+Se},Y.prototype.writeUint8=Y.prototype.writeUInt8=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,1,255,0),this[me]=oe&255,me+1},Y.prototype.writeUint16LE=Y.prototype.writeUInt16LE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,2,65535,0),this[me]=oe&255,this[me+1]=oe>>>8,me+2},Y.prototype.writeUint16BE=Y.prototype.writeUInt16BE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,2,65535,0),this[me]=oe>>>8,this[me+1]=oe&255,me+2},Y.prototype.writeUint32LE=Y.prototype.writeUInt32LE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,4,4294967295,0),this[me+3]=oe>>>24,this[me+2]=oe>>>16,this[me+1]=oe>>>8,this[me]=oe&255,me+4},Y.prototype.writeUint32BE=Y.prototype.writeUInt32BE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,4,4294967295,0),this[me]=oe>>>24,this[me+1]=oe>>>16,this[me+2]=oe>>>8,this[me+3]=oe&255,me+4};function je(Ve,oe,me,Se,Fe){Je(oe,Se,Fe,Ve,me,7);let Ke=Number(oe&BigInt(4294967295));Ve[me++]=Ke,Ke=Ke>>8,Ve[me++]=Ke,Ke=Ke>>8,Ve[me++]=Ke,Ke=Ke>>8,Ve[me++]=Ke;let Ae=Number(oe>>BigInt(32)&BigInt(4294967295));return Ve[me++]=Ae,Ae=Ae>>8,Ve[me++]=Ae,Ae=Ae>>8,Ve[me++]=Ae,Ae=Ae>>8,Ve[me++]=Ae,me}function tt(Ve,oe,me,Se,Fe){Je(oe,Se,Fe,Ve,me,7);let Ke=Number(oe&BigInt(4294967295));Ve[me+7]=Ke,Ke=Ke>>8,Ve[me+6]=Ke,Ke=Ke>>8,Ve[me+5]=Ke,Ke=Ke>>8,Ve[me+4]=Ke;let Ae=Number(oe>>BigInt(32)&BigInt(4294967295));return Ve[me+3]=Ae,Ae=Ae>>8,Ve[me+2]=Ae,Ae=Ae>>8,Ve[me+1]=Ae,Ae=Ae>>8,Ve[me]=Ae,me+8}Y.prototype.writeBigUInt64LE=et(function(oe,me=0){return je(this,oe,me,BigInt(0),BigInt("0xffffffffffffffff"))}),Y.prototype.writeBigUInt64BE=et(function(oe,me=0){return tt(this,oe,me,BigInt(0),BigInt("0xffffffffffffffff"))}),Y.prototype.writeIntLE=function(oe,me,Se,Fe){if(oe=+oe,me=me>>>0,!Fe){const vt=Math.pow(2,8*Se-1);Me(this,oe,me,Se,vt-1,-vt)}let Ke=0,Ae=1,rt=0;for(this[me]=oe&255;++Ke<Se&&(Ae*=256);)oe<0&&rt===0&&this[me+Ke-1]!==0&&(rt=1),this[me+Ke]=(oe/Ae>>0)-rt&255;return me+Se},Y.prototype.writeIntBE=function(oe,me,Se,Fe){if(oe=+oe,me=me>>>0,!Fe){const vt=Math.pow(2,8*Se-1);Me(this,oe,me,Se,vt-1,-vt)}let Ke=Se-1,Ae=1,rt=0;for(this[me+Ke]=oe&255;--Ke>=0&&(Ae*=256);)oe<0&&rt===0&&this[me+Ke+1]!==0&&(rt=1),this[me+Ke]=(oe/Ae>>0)-rt&255;return me+Se},Y.prototype.writeInt8=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,1,127,-128),oe<0&&(oe=255+oe+1),this[me]=oe&255,me+1},Y.prototype.writeInt16LE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,2,32767,-32768),this[me]=oe&255,this[me+1]=oe>>>8,me+2},Y.prototype.writeInt16BE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,2,32767,-32768),this[me]=oe>>>8,this[me+1]=oe&255,me+2},Y.prototype.writeInt32LE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,4,2147483647,-2147483648),this[me]=oe&255,this[me+1]=oe>>>8,this[me+2]=oe>>>16,this[me+3]=oe>>>24,me+4},Y.prototype.writeInt32BE=function(oe,me,Se){return oe=+oe,me=me>>>0,Se||Me(this,oe,me,4,2147483647,-2147483648),oe<0&&(oe=4294967295+oe+1),this[me]=oe>>>24,this[me+1]=oe>>>16,this[me+2]=oe>>>8,this[me+3]=oe&255,me+4},Y.prototype.writeBigInt64LE=et(function(oe,me=0){return je(this,oe,me,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Y.prototype.writeBigInt64BE=et(function(oe,me=0){return tt(this,oe,me,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function it(Ve,oe,me,Se,Fe,Ke){if(me+Se>Ve.length)throw new RangeError("Index out of range");if(me<0)throw new RangeError("Index out of range")}function st(Ve,oe,me,Se,Fe){return oe=+oe,me=me>>>0,Fe||it(Ve,oe,me,4),G.write(Ve,oe,me,Se,23,4),me+4}Y.prototype.writeFloatLE=function(oe,me,Se){return st(this,oe,me,!0,Se)},Y.prototype.writeFloatBE=function(oe,me,Se){return st(this,oe,me,!1,Se)};function qe(Ve,oe,me,Se,Fe){return oe=+oe,me=me>>>0,Fe||it(Ve,oe,me,8),G.write(Ve,oe,me,Se,52,8),me+8}Y.prototype.writeDoubleLE=function(oe,me,Se){return qe(this,oe,me,!0,Se)},Y.prototype.writeDoubleBE=function(oe,me,Se){return qe(this,oe,me,!1,Se)},Y.prototype.copy=function(oe,me,Se,Fe){if(!Y.isBuffer(oe))throw new TypeError("argument should be a Buffer");if(Se||(Se=0),!Fe&&Fe!==0&&(Fe=this.length),me>=oe.length&&(me=oe.length),me||(me=0),Fe>0&&Fe<Se&&(Fe=Se),Fe===Se||oe.length===0||this.length===0)return 0;if(me<0)throw new RangeError("targetStart out of bounds");if(Se<0||Se>=this.length)throw new RangeError("Index out of range");if(Fe<0)throw new RangeError("sourceEnd out of bounds");Fe>this.length&&(Fe=this.length),oe.length-me<Fe-Se&&(Fe=oe.length-me+Se);const Ke=Fe-Se;return this===oe&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(me,Se,Fe):Uint8Array.prototype.set.call(oe,this.subarray(Se,Fe),me),Ke},Y.prototype.fill=function(oe,me,Se,Fe){if(typeof oe=="string"){if(typeof me=="string"?(Fe=me,me=0,Se=this.length):typeof Se=="string"&&(Fe=Se,Se=this.length),Fe!==void 0&&typeof Fe!="string")throw new TypeError("encoding must be a string");if(typeof Fe=="string"&&!Y.isEncoding(Fe))throw new TypeError("Unknown encoding: "+Fe);if(oe.length===1){const Ae=oe.charCodeAt(0);(Fe==="utf8"&&Ae<128||Fe==="latin1")&&(oe=Ae)}}else typeof oe=="number"?oe=oe&255:typeof oe=="boolean"&&(oe=Number(oe));if(me<0||this.length<me||this.length<Se)throw new RangeError("Out of range index");if(Se<=me)return this;me=me>>>0,Se=Se===void 0?this.length:Se>>>0,oe||(oe=0);let Ke;if(typeof oe=="number")for(Ke=me;Ke<Se;++Ke)this[Ke]=oe;else{const Ae=Y.isBuffer(oe)?oe:Y.from(oe,Fe),rt=Ae.length;if(rt===0)throw new TypeError('The value "'+oe+'" is invalid for argument "value"');for(Ke=0;Ke<Se-me;++Ke)this[Ke+me]=Ae[Ke%rt]}return this};const ot={};function ut(Ve,oe,me){ot[Ve]=class extends me{constructor(){super(),Object.defineProperty(this,"message",{value:oe.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${Ve}]`,this.stack,delete this.name}get code(){return Ve}set code(Fe){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:Fe,writable:!0})}toString(){return`${this.name} [${Ve}]: ${this.message}`}}}ut("ERR_BUFFER_OUT_OF_BOUNDS",function(Ve){return Ve?`${Ve} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ut("ERR_INVALID_ARG_TYPE",function(Ve,oe){return`The "${Ve}" argument must be of type number. Received type ${typeof oe}`},TypeError),ut("ERR_OUT_OF_RANGE",function(Ve,oe,me){let Se=`The value of "${Ve}" is out of range.`,Fe=me;return Number.isInteger(me)&&Math.abs(me)>2**32?Fe=dt(String(me)):typeof me=="bigint"&&(Fe=String(me),(me>BigInt(2)**BigInt(32)||me<-(BigInt(2)**BigInt(32)))&&(Fe=dt(Fe)),Fe+="n"),Se+=` It must be ${oe}. Received ${Fe}`,Se},RangeError);function dt(Ve){let oe="",me=Ve.length;const Se=Ve[0]==="-"?1:0;for(;me>=Se+4;me-=3)oe=`_${Ve.slice(me-3,me)}${oe}`;return`${Ve.slice(0,me)}${oe}`}function mt(Ve,oe,me){Ne(oe,"offset"),(Ve[oe]===void 0||Ve[oe+me]===void 0)&&ke(oe,Ve.length-(me+1))}function Je(Ve,oe,me,Se,Fe,Ke){if(Ve>me||Ve<oe){const Ae=typeof oe=="bigint"?"n":"";let rt;throw Ke>3?oe===0||oe===BigInt(0)?rt=`>= 0${Ae} and < 2${Ae} ** ${(Ke+1)*8}${Ae}`:rt=`>= -(2${Ae} ** ${(Ke+1)*8-1}${Ae}) and < 2 ** ${(Ke+1)*8-1}${Ae}`:rt=`>= ${oe}${Ae} and <= ${me}${Ae}`,new ot.ERR_OUT_OF_RANGE("value",rt,Ve)}mt(Se,Fe,Ke)}function Ne(Ve,oe){if(typeof Ve!="number")throw new ot.ERR_INVALID_ARG_TYPE(oe,"number",Ve)}function ke(Ve,oe,me){throw Math.floor(Ve)!==Ve?(Ne(Ve,me),new ot.ERR_OUT_OF_RANGE(me||"offset","an integer",Ve)):oe<0?new ot.ERR_BUFFER_OUT_OF_BOUNDS:new ot.ERR_OUT_OF_RANGE(me||"offset",`>= ${me?1:0} and <= ${oe}`,Ve)}const Ie=/[^+/0-9A-Za-z-_]/g;function Ce(Ve){if(Ve=Ve.split("=")[0],Ve=Ve.trim().replace(Ie,""),Ve.length<2)return"";for(;Ve.length%4!==0;)Ve=Ve+"=";return Ve}function ze(Ve,oe){oe=oe||1/0;let me;const Se=Ve.length;let Fe=null;const Ke=[];for(let Ae=0;Ae<Se;++Ae){if(me=Ve.charCodeAt(Ae),me>55295&&me<57344){if(!Fe){if(me>56319){(oe-=3)>-1&&Ke.push(239,191,189);continue}else if(Ae+1===Se){(oe-=3)>-1&&Ke.push(239,191,189);continue}Fe=me;continue}if(me<56320){(oe-=3)>-1&&Ke.push(239,191,189),Fe=me;continue}me=(Fe-55296<<10|me-56320)+65536}else Fe&&(oe-=3)>-1&&Ke.push(239,191,189);if(Fe=null,me<128){if((oe-=1)<0)break;Ke.push(me)}else if(me<2048){if((oe-=2)<0)break;Ke.push(me>>6|192,me&63|128)}else if(me<65536){if((oe-=3)<0)break;Ke.push(me>>12|224,me>>6&63|128,me&63|128)}else if(me<1114112){if((oe-=4)<0)break;Ke.push(me>>18|240,me>>12&63|128,me>>6&63|128,me&63|128)}else throw new Error("Invalid code point")}return Ke}function Ee(Ve){const oe=[];for(let me=0;me<Ve.length;++me)oe.push(Ve.charCodeAt(me)&255);return oe}function _e(Ve,oe){let me,Se,Fe;const Ke=[];for(let Ae=0;Ae<Ve.length&&!((oe-=2)<0);++Ae)me=Ve.charCodeAt(Ae),Se=me>>8,Fe=me%256,Ke.push(Fe),Ke.push(Se);return Ke}function He(Ve){return Z.toByteArray(Ce(Ve))}function Pe(Ve,oe,me,Se){let Fe;for(Fe=0;Fe<Se&&!(Fe+me>=oe.length||Fe>=Ve.length);++Fe)oe[Fe+me]=Ve[Fe];return Fe}function $e(Ve,oe){return Ve instanceof oe||Ve!=null&&Ve.constructor!=null&&Ve.constructor.name!=null&&Ve.constructor.name===oe.name}function we(Ve){return Ve!==Ve}const Ue=function(){const Ve="0123456789abcdef",oe=new Array(256);for(let me=0;me<16;++me){const Se=me*16;for(let Fe=0;Fe<16;++Fe)oe[Se+Fe]=Ve[me]+Ve[Fe]}return oe}();function et(Ve){return typeof BigInt>"u"?at:Ve}function at(){throw new Error("BigInt not supported")}}(buffer)),buffer}var abstractSublevelIterator={},hasRequiredAbstractSublevelIterator;function requireAbstractSublevelIterator(){if(hasRequiredAbstractSublevelIterator)return abstractSublevelIterator;hasRequiredAbstractSublevelIterator=1;const{AbstractIterator:X,AbstractKeyIterator:Z,AbstractValueIterator:G}=abstractIterator,W=Symbol("unfix"),F=Symbol("iterator"),U=Symbol("handleOne"),J=Symbol("handleMany"),Y=Symbol("callback");class D extends X{constructor(te,ie,ne,ce){super(te,ie),this[F]=ne,this[W]=ce,this[U]=this[U].bind(this),this[J]=this[J].bind(this),this[Y]=null}[U](te,ie,ne){const ce=this[Y];if(te)return ce(te);ie!==void 0&&(ie=this[W](ie)),ce(te,ie,ne)}[J](te,ie){const ne=this[Y];if(te)return ne(te);for(const ce of ie){const le=ce[0];le!==void 0&&(ce[0]=this[W](le))}ne(te,ie)}}class Q extends Z{constructor(te,ie,ne,ce){super(te,ie),this[F]=ne,this[W]=ce,this[U]=this[U].bind(this),this[J]=this[J].bind(this),this[Y]=null}[U](te,ie){const ne=this[Y];if(te)return ne(te);ie!==void 0&&(ie=this[W](ie)),ne(te,ie)}[J](te,ie){const ne=this[Y];if(te)return ne(te);for(let ce=0;ce<ie.length;ce++){const le=ie[ce];le!==void 0&&(ie[ce]=this[W](le))}ne(te,ie)}}class ee extends G{constructor(te,ie,ne){super(te,ie),this[F]=ne}}for(const q of[D,Q])q.prototype._next=function(te){this[Y]=te,this[F].next(this[U])},q.prototype._nextv=function(te,ie,ne){this[Y]=ne,this[F].nextv(te,ie,this[J])},q.prototype._all=function(te,ie){this[Y]=ie,this[F].all(te,this[J])};for(const q of[ee])q.prototype._next=function(te){this[F].next(te)},q.prototype._nextv=function(te,ie,ne){this[F].nextv(te,ie,ne)},q.prototype._all=function(te,ie){this[F].all(te,ie)};for(const q of[D,Q,ee])q.prototype._seek=function(te,ie){this[F].seek(te,ie)},q.prototype._close=function(te){this[F].close(te)};return abstractSublevelIterator.AbstractSublevelIterator=D,abstractSublevelIterator.AbstractSublevelKeyIterator=Q,abstractSublevelIterator.AbstractSublevelValueIterator=ee,abstractSublevelIterator}var abstractSublevel,hasRequiredAbstractSublevel;function requireAbstractSublevel(){if(hasRequiredAbstractSublevel)return abstractSublevel;hasRequiredAbstractSublevel=1;const X=moduleError,{Buffer:Z}=requireBuffer()||{},{AbstractSublevelIterator:G,AbstractSublevelKeyIterator:W,AbstractSublevelValueIterator:F}=requireAbstractSublevelIterator(),U=Symbol("prefix"),J=Symbol("upperBound"),Y=Symbol("prefixRange"),D=Symbol("parent"),Q=Symbol("unfix"),ee=new TextEncoder,q={separator:"!"};abstractSublevel=function({AbstractLevel:se}){class pe extends se{static defaults(ae){if(typeof ae=="string")throw new X("The subleveldown string shorthand for { separator } has been removed",{code:"LEVEL_LEGACY"});if(ae&&ae.open)throw new X("The subleveldown open option has been removed",{code:"LEVEL_LEGACY"});return ae==null?q:ae.separator?ae:{...ae,separator:"!"}}constructor(ae,de,be){const{separator:he,manifest:Le,...Xe}=pe.defaults(be);de=le(de,he);const We=he.charCodeAt(0)+1,fe=ae[D]||ae;if(!ee.encode(de).every(re=>re>We&&re<127))throw new X(`Prefix must use bytes > ${We} < 127`,{code:"LEVEL_INVALID_PREFIX"});super(te(fe,Le),Xe);const Re=(ae.prefix||"")+he+de+he,ye=Re.slice(0,-1)+String.fromCharCode(We);this[D]=fe,this[U]=new ne(Re),this[J]=new ne(ye),this[Q]=new ce,this.nextTick=fe.nextTick}prefixKey(ae,de){if(de==="utf8")return this[U].utf8+ae;if(ae.byteLength===0)return this[U][de];if(de==="view"){const be=this[U].view,he=new Uint8Array(be.byteLength+ae.byteLength);return he.set(be,0),he.set(ae,be.byteLength),he}else{const be=this[U].buffer;return Z.concat([be,ae],be.byteLength+ae.byteLength)}}[Y](ae,de){ae.gte!==void 0?ae.gte=this.prefixKey(ae.gte,de):ae.gt!==void 0?ae.gt=this.prefixKey(ae.gt,de):ae.gte=this[U][de],ae.lte!==void 0?ae.lte=this.prefixKey(ae.lte,de):ae.lt!==void 0?ae.lt=this.prefixKey(ae.lt,de):ae.lte=this[J][de]}get prefix(){return this[U].utf8}get db(){return this[D]}_open(ae,de){this[D].open({passive:!0},de)}_put(ae,de,be,he){this[D].put(ae,de,be,he)}_get(ae,de,be){this[D].get(ae,de,be)}_getMany(ae,de,be){this[D].getMany(ae,de,be)}_del(ae,de,be){this[D].del(ae,de,be)}_batch(ae,de,be){this[D].batch(ae,de,be)}_clear(ae,de){this[Y](ae,ae.keyEncoding),this[D].clear(ae,de)}_iterator(ae){this[Y](ae,ae.keyEncoding);const de=this[D].iterator(ae),be=this[Q].get(this[U].utf8.length,ae.keyEncoding);return new G(this,ae,de,be)}_keys(ae){this[Y](ae,ae.keyEncoding);const de=this[D].keys(ae),be=this[Q].get(this[U].utf8.length,ae.keyEncoding);return new W(this,ae,de,be)}_values(ae){this[Y](ae,ae.keyEncoding);const de=this[D].values(ae);return new F(this,ae,de)}}return{AbstractSublevel:pe}};const te=function(se,pe){return{...se.supports,createIfMissing:!1,errorIfExists:!1,events:{},additionalMethods:{},...pe,encodings:{utf8:ie(se,"utf8"),buffer:ie(se,"buffer"),view:ie(se,"view")}}},ie=function(se,pe){return se.supports.encodings[pe]?se.keyEncoding(pe).name===pe:!1};class ne{constructor(pe){this.utf8=pe,this.view=ee.encode(pe),this.buffer=Z?Z.from(this.view.buffer,0,this.view.byteLength):{}}}class ce{constructor(){this.cache=new Map}get(pe,ue){let ae=this.cache.get(ue);return ae===void 0&&(ue==="view"?ae=function(de,be){return be.subarray(de)}.bind(null,pe):ae=function(de,be){return be.slice(de)}.bind(null,pe),this.cache.set(ue,ae)),ae}}const le=function(se,pe){let ue=0,ae=se.length;for(;ue<ae&&se[ue]===pe;)ue++;for(;ae>ue&&se[ae-1]===pe;)ae--;return se.slice(ue,ae)};return abstractSublevel}const{supports}=levelSupports,{Transcoder}=levelTranscoder,{EventEmitter}=eventsExports,{fromCallback}=catering,ModuleError$1=moduleError,{AbstractIterator:AbstractIterator$1}=abstractIterator,{DefaultKeyIterator,DefaultValueIterator}=defaultKvIterator,{DeferredIterator,DeferredKeyIterator,DeferredValueIterator}=deferredIterator,{DefaultChainedBatch}=defaultChainedBatch,{getCallback,getOptions}=common$6,rangeOptions$1=rangeOptions_1,kPromise=Symbol("promise"),kLanded=Symbol("landed"),kResources=Symbol("resources"),kCloseResources=Symbol("closeResources"),kOperations=Symbol("operations"),kUndefer=Symbol("undefer"),kDeferOpen=Symbol("deferOpen"),kOptions$1=Symbol("options"),kStatus=Symbol("status"),kDefaultOptions=Symbol("defaultOptions"),kTranscoder=Symbol("transcoder"),kKeyEncoding=Symbol("keyEncoding"),kValueEncoding=Symbol("valueEncoding"),noop$3=()=>{};let AbstractLevel$1=class extends EventEmitter{constructor(Z,G){if(super(),typeof Z!="object"||Z===null)throw new TypeError("The first argument 'manifest' must be an object");G=getOptions(G);const{keyEncoding:W,valueEncoding:F,passive:U,...J}=G;this[kResources]=new Set,this[kOperations]=[],this[kDeferOpen]=!0,this[kOptions$1]=J,this[kStatus]="opening",this.supports=supports(Z,{status:!0,promises:!0,clear:!0,getMany:!0,deferredOpen:!0,snapshots:Z.snapshots!==!1,permanence:Z.permanence!==!1,keyIterator:!0,valueIterator:!0,iteratorNextv:!0,iteratorAll:!0,encodings:Z.encodings||{},events:Object.assign({},Z.events,{opening:!0,open:!0,closing:!0,closed:!0,put:!0,del:!0,batch:!0,clear:!0})}),this[kTranscoder]=new Transcoder(formats(this)),this[kKeyEncoding]=this[kTranscoder].encoding(W||"utf8"),this[kValueEncoding]=this[kTranscoder].encoding(F||"utf8");for(const Y of this[kTranscoder].encodings())this.supports.encodings[Y.commonName]||(this.supports.encodings[Y.commonName]=!0);this[kDefaultOptions]={empty:Object.freeze({}),entry:Object.freeze({keyEncoding:this[kKeyEncoding].commonName,valueEncoding:this[kValueEncoding].commonName}),key:Object.freeze({keyEncoding:this[kKeyEncoding].commonName})},this.nextTick(()=>{this[kDeferOpen]&&this.open({passive:!1},noop$3)})}get status(){return this[kStatus]}keyEncoding(Z){return this[kTranscoder].encoding(Z??this[kKeyEncoding])}valueEncoding(Z){return this[kTranscoder].encoding(Z??this[kValueEncoding])}open(Z,G){G=getCallback(Z,G),G=fromCallback(G,kPromise),Z={...this[kOptions$1],...getOptions(Z)},Z.createIfMissing=Z.createIfMissing!==!1,Z.errorIfExists=!!Z.errorIfExists;const W=F=>{this[kStatus]==="closing"||this[kStatus]==="opening"?this.once(kLanded,F?()=>W(F):W):this[kStatus]!=="open"?G(new ModuleError$1("Database is not open",{code:"LEVEL_DATABASE_NOT_OPEN",cause:F})):G()};return Z.passive?this[kStatus]==="opening"?this.once(kLanded,W):this.nextTick(W):this[kStatus]==="closed"||this[kDeferOpen]?(this[kDeferOpen]=!1,this[kStatus]="opening",this.emit("opening"),this._open(Z,F=>{if(F){this[kStatus]="closed",this[kCloseResources](()=>{this.emit(kLanded),W(F)}),this[kUndefer]();return}this[kStatus]="open",this[kUndefer](),this.emit(kLanded),this[kStatus]==="open"&&this.emit("open"),this[kStatus]==="open"&&this.emit("ready"),W()})):this[kStatus]==="open"?this.nextTick(W):this.once(kLanded,()=>this.open(Z,G)),G[kPromise]}_open(Z,G){this.nextTick(G)}close(Z){Z=fromCallback(Z,kPromise);const G=W=>{this[kStatus]==="opening"||this[kStatus]==="closing"?this.once(kLanded,W?G(W):G):this[kStatus]!=="closed"?Z(new ModuleError$1("Database is not closed",{code:"LEVEL_DATABASE_NOT_CLOSED",cause:W})):Z()};if(this[kStatus]==="open"){this[kStatus]="closing",this.emit("closing");const W=F=>{this[kStatus]="open",this[kUndefer](),this.emit(kLanded),G(F)};this[kCloseResources](()=>{this._close(F=>{if(F)return W(F);this[kStatus]="closed",this[kUndefer](),this.emit(kLanded),this[kStatus]==="closed"&&this.emit("closed"),G()})})}else this[kStatus]==="closed"?this.nextTick(G):this.once(kLanded,()=>this.close(Z));return Z[kPromise]}[kCloseResources](Z){if(this[kResources].size===0)return this.nextTick(Z);let G=this[kResources].size,W=!0;const F=()=>{--G===0&&(W?this.nextTick(Z):Z())};for(const U of this[kResources])U.close(F);W=!1,this[kResources].clear()}_close(Z){this.nextTick(Z)}get(Z,G,W){if(W=getCallback(G,W),W=fromCallback(W,kPromise),G=getOptions(G,this[kDefaultOptions].entry),this[kStatus]==="opening")return this.defer(()=>this.get(Z,G,W)),W[kPromise];if(maybeError(this,W))return W[kPromise];const F=this._checkKey(Z);if(F)return this.nextTick(W,F),W[kPromise];const U=this.keyEncoding(G.keyEncoding),J=this.valueEncoding(G.valueEncoding),Y=U.format,D=J.format;return(G.keyEncoding!==Y||G.valueEncoding!==D)&&(G=Object.assign({},G,{keyEncoding:Y,valueEncoding:D})),this._get(this.prefixKey(U.encode(Z),Y),G,(Q,ee)=>{if(Q)return(Q.code==="LEVEL_NOT_FOUND"||Q.notFound||/NotFound/i.test(Q))&&(Q.code||(Q.code="LEVEL_NOT_FOUND"),Q.notFound||(Q.notFound=!0),Q.status||(Q.status=404)),W(Q);try{ee=J.decode(ee)}catch(q){return W(new ModuleError$1("Could not decode value",{code:"LEVEL_DECODE_ERROR",cause:q}))}W(null,ee)}),W[kPromise]}_get(Z,G,W){this.nextTick(W,new Error("NotFound"))}getMany(Z,G,W){if(W=getCallback(G,W),W=fromCallback(W,kPromise),G=getOptions(G,this[kDefaultOptions].entry),this[kStatus]==="opening")return this.defer(()=>this.getMany(Z,G,W)),W[kPromise];if(maybeError(this,W))return W[kPromise];if(!Array.isArray(Z))return this.nextTick(W,new TypeError("The first argument 'keys' must be an array")),W[kPromise];if(Z.length===0)return this.nextTick(W,null,[]),W[kPromise];const F=this.keyEncoding(G.keyEncoding),U=this.valueEncoding(G.valueEncoding),J=F.format,Y=U.format;(G.keyEncoding!==J||G.valueEncoding!==Y)&&(G=Object.assign({},G,{keyEncoding:J,valueEncoding:Y}));const D=new Array(Z.length);for(let Q=0;Q<Z.length;Q++){const ee=Z[Q],q=this._checkKey(ee);if(q)return this.nextTick(W,q),W[kPromise];D[Q]=this.prefixKey(F.encode(ee),J)}return this._getMany(D,G,(Q,ee)=>{if(Q)return W(Q);try{for(let q=0;q<ee.length;q++)ee[q]!==void 0&&(ee[q]=U.decode(ee[q]))}catch(q){return W(new ModuleError$1(`Could not decode one or more of ${ee.length} value(s)`,{code:"LEVEL_DECODE_ERROR",cause:q}))}W(null,ee)}),W[kPromise]}_getMany(Z,G,W){this.nextTick(W,null,new Array(Z.length).fill(void 0))}put(Z,G,W,F){if(F=getCallback(W,F),F=fromCallback(F,kPromise),W=getOptions(W,this[kDefaultOptions].entry),this[kStatus]==="opening")return this.defer(()=>this.put(Z,G,W,F)),F[kPromise];if(maybeError(this,F))return F[kPromise];const U=this._checkKey(Z)||this._checkValue(G);if(U)return this.nextTick(F,U),F[kPromise];const J=this.keyEncoding(W.keyEncoding),Y=this.valueEncoding(W.valueEncoding),D=J.format,Q=Y.format;(W.keyEncoding!==D||W.valueEncoding!==Q)&&(W=Object.assign({},W,{keyEncoding:D,valueEncoding:Q}));const ee=this.prefixKey(J.encode(Z),D),q=Y.encode(G);return this._put(ee,q,W,te=>{if(te)return F(te);this.emit("put",Z,G),F()}),F[kPromise]}_put(Z,G,W,F){this.nextTick(F)}del(Z,G,W){if(W=getCallback(G,W),W=fromCallback(W,kPromise),G=getOptions(G,this[kDefaultOptions].key),this[kStatus]==="opening")return this.defer(()=>this.del(Z,G,W)),W[kPromise];if(maybeError(this,W))return W[kPromise];const F=this._checkKey(Z);if(F)return this.nextTick(W,F),W[kPromise];const U=this.keyEncoding(G.keyEncoding),J=U.format;return G.keyEncoding!==J&&(G=Object.assign({},G,{keyEncoding:J})),this._del(this.prefixKey(U.encode(Z),J),G,Y=>{if(Y)return W(Y);this.emit("del",Z),W()}),W[kPromise]}_del(Z,G,W){this.nextTick(W)}batch(Z,G,W){if(!arguments.length){if(this[kStatus]==="opening")return new DefaultChainedBatch(this);if(this[kStatus]!=="open")throw new ModuleError$1("Database is not open",{code:"LEVEL_DATABASE_NOT_OPEN"});return this._chainedBatch()}if(typeof Z=="function"?W=Z:W=getCallback(G,W),W=fromCallback(W,kPromise),G=getOptions(G,this[kDefaultOptions].empty),this[kStatus]==="opening")return this.defer(()=>this.batch(Z,G,W)),W[kPromise];if(maybeError(this,W))return W[kPromise];if(!Array.isArray(Z))return this.nextTick(W,new TypeError("The first argument 'operations' must be an array")),W[kPromise];if(Z.length===0)return this.nextTick(W),W[kPromise];const F=new Array(Z.length),{keyEncoding:U,valueEncoding:J,...Y}=G;for(let D=0;D<Z.length;D++){if(typeof Z[D]!="object"||Z[D]===null)return this.nextTick(W,new TypeError("A batch operation must be an object")),W[kPromise];const Q=Object.assign({},Z[D]);if(Q.type!=="put"&&Q.type!=="del")return this.nextTick(W,new TypeError("A batch operation must have a type property that is 'put' or 'del'")),W[kPromise];const ee=this._checkKey(Q.key);if(ee)return this.nextTick(W,ee),W[kPromise];const q=Q.sublevel!=null?Q.sublevel:this,te=q.keyEncoding(Q.keyEncoding||U),ie=te.format;if(Q.key=q.prefixKey(te.encode(Q.key),ie),Q.keyEncoding=ie,Q.type==="put"){const ne=this._checkValue(Q.value);if(ne)return this.nextTick(W,ne),W[kPromise];const ce=q.valueEncoding(Q.valueEncoding||J);Q.value=ce.encode(Q.value),Q.valueEncoding=ce.format}q!==this&&(Q.sublevel=null),F[D]=Q}return this._batch(F,Y,D=>{if(D)return W(D);this.emit("batch",Z),W()}),W[kPromise]}_batch(Z,G,W){this.nextTick(W)}sublevel(Z,G){return this._sublevel(Z,AbstractSublevel.defaults(G))}_sublevel(Z,G){return new AbstractSublevel(this,Z,G)}prefixKey(Z,G){return Z}clear(Z,G){if(G=getCallback(Z,G),G=fromCallback(G,kPromise),Z=getOptions(Z,this[kDefaultOptions].empty),this[kStatus]==="opening")return this.defer(()=>this.clear(Z,G)),G[kPromise];if(maybeError(this,G))return G[kPromise];const W=Z,F=this.keyEncoding(Z.keyEncoding);return Z=rangeOptions$1(Z,F),Z.keyEncoding=F.format,Z.limit===0?this.nextTick(G):this._clear(Z,U=>{if(U)return G(U);this.emit("clear",W),G()}),G[kPromise]}_clear(Z,G){this.nextTick(G)}iterator(Z){const G=this.keyEncoding(Z&&Z.keyEncoding),W=this.valueEncoding(Z&&Z.valueEncoding);if(Z=rangeOptions$1(Z,G),Z.keys=Z.keys!==!1,Z.values=Z.values!==!1,Z[AbstractIterator$1.keyEncoding]=G,Z[AbstractIterator$1.valueEncoding]=W,Z.keyEncoding=G.format,Z.valueEncoding=W.format,this[kStatus]==="opening")return new DeferredIterator(this,Z);if(this[kStatus]!=="open")throw new ModuleError$1("Database is not open",{code:"LEVEL_DATABASE_NOT_OPEN"});return this._iterator(Z)}_iterator(Z){return new AbstractIterator$1(this,Z)}keys(Z){const G=this.keyEncoding(Z&&Z.keyEncoding),W=this.valueEncoding(Z&&Z.valueEncoding);if(Z=rangeOptions$1(Z,G),Z[AbstractIterator$1.keyEncoding]=G,Z[AbstractIterator$1.valueEncoding]=W,Z.keyEncoding=G.format,Z.valueEncoding=W.format,this[kStatus]==="opening")return new DeferredKeyIterator(this,Z);if(this[kStatus]!=="open")throw new ModuleError$1("Database is not open",{code:"LEVEL_DATABASE_NOT_OPEN"});return this._keys(Z)}_keys(Z){return new DefaultKeyIterator(this,Z)}values(Z){const G=this.keyEncoding(Z&&Z.keyEncoding),W=this.valueEncoding(Z&&Z.valueEncoding);if(Z=rangeOptions$1(Z,G),Z[AbstractIterator$1.keyEncoding]=G,Z[AbstractIterator$1.valueEncoding]=W,Z.keyEncoding=G.format,Z.valueEncoding=W.format,this[kStatus]==="opening")return new DeferredValueIterator(this,Z);if(this[kStatus]!=="open")throw new ModuleError$1("Database is not open",{code:"LEVEL_DATABASE_NOT_OPEN"});return this._values(Z)}_values(Z){return new DefaultValueIterator(this,Z)}defer(Z){if(typeof Z!="function")throw new TypeError("The first argument must be a function");this[kOperations].push(Z)}[kUndefer](){if(this[kOperations].length===0)return;const Z=this[kOperations];this[kOperations]=[];for(const G of Z)G()}attachResource(Z){if(typeof Z!="object"||Z===null||typeof Z.close!="function")throw new TypeError("The first argument must be a resource object");this[kResources].add(Z)}detachResource(Z){this[kResources].delete(Z)}_chainedBatch(){return new DefaultChainedBatch(this)}_checkKey(Z){if(Z==null)return new ModuleError$1("Key cannot be null or undefined",{code:"LEVEL_INVALID_KEY"})}_checkValue(Z){if(Z==null)return new ModuleError$1("Value cannot be null or undefined",{code:"LEVEL_INVALID_VALUE"})}};AbstractLevel$1.prototype.nextTick=requireNextTickBrowser();const{AbstractSublevel}=requireAbstractSublevel()({AbstractLevel:AbstractLevel$1});abstractLevel.AbstractLevel=AbstractLevel$1;abstractLevel.AbstractSublevel=AbstractSublevel;const maybeError=function(X,Z){return X[kStatus]!=="open"?(X.nextTick(Z,new ModuleError$1("Database is not open",{code:"LEVEL_DATABASE_NOT_OPEN"})),!0):!1},formats=function(X){return Object.keys(X.supports.encodings).filter(Z=>!!X.supports.encodings[Z])};abstractLevel$1.AbstractLevel=abstractLevel.AbstractLevel;abstractLevel$1.AbstractSublevel=abstractLevel.AbstractSublevel;abstractLevel$1.AbstractIterator=abstractIterator.AbstractIterator;abstractLevel$1.AbstractKeyIterator=abstractIterator.AbstractKeyIterator;abstractLevel$1.AbstractValueIterator=abstractIterator.AbstractValueIterator;abstractLevel$1.AbstractChainedBatch=abstractChainedBatch.AbstractChainedBatch;var rbtree=createRBTree,RED=0,BLACK=1;function RBNode(X,Z,G,W,F,U){this._color=X,this.key=Z,this.value=G,this.left=W,this.right=F,this._count=U}function cloneNode(X){return new RBNode(X._color,X.key,X.value,X.left,X.right,X._count)}function repaint(X,Z){return new RBNode(X,Z.key,Z.value,Z.left,Z.right,Z._count)}function recount(X){X._count=1+(X.left?X.left._count:0)+(X.right?X.right._count:0)}function RedBlackTree(X,Z){this._compare=X,this.root=Z}var proto=RedBlackTree.prototype;Object.defineProperty(proto,"keys",{get:function(){var X=[];return this.forEach(function(Z,G){X.push(Z)}),X}});Object.defineProperty(proto,"values",{get:function(){var X=[];return this.forEach(function(Z,G){X.push(G)}),X}});Object.defineProperty(proto,"length",{get:function(){return this.root?this.root._count:0}});proto.insert=function(X,Z){for(var G=this._compare,W=this.root,F=[],U=[];W;){var J=G(X,W.key);F.push(W),U.push(J),J<=0?W=W.left:W=W.right}F.push(new RBNode(RED,X,Z,null,null,1));for(var Y=F.length-2;Y>=0;--Y){var W=F[Y];U[Y]<=0?F[Y]=new RBNode(W._color,W.key,W.value,F[Y+1],W.right,W._count+1):F[Y]=new RBNode(W._color,W.key,W.value,W.left,F[Y+1],W._count+1)}for(var Y=F.length-1;Y>1;--Y){var D=F[Y-1],W=F[Y];if(D._color===BLACK||W._color===BLACK)break;var Q=F[Y-2];if(Q.left===D)if(D.left===W){var ee=Q.right;if(ee&&ee._color===RED)D._color=BLACK,Q.right=repaint(BLACK,ee),Q._color=RED,Y-=1;else{if(Q._color=RED,Q.left=D.right,D._color=BLACK,D.right=Q,F[Y-2]=D,F[Y-1]=W,recount(Q),recount(D),Y>=3){var q=F[Y-3];q.left===Q?q.left=D:q.right=D}break}}else{var ee=Q.right;if(ee&&ee._color===RED)D._color=BLACK,Q.right=repaint(BLACK,ee),Q._color=RED,Y-=1;else{if(D.right=W.left,Q._color=RED,Q.left=W.right,W._color=BLACK,W.left=D,W.right=Q,F[Y-2]=W,F[Y-1]=D,recount(Q),recount(D),recount(W),Y>=3){var q=F[Y-3];q.left===Q?q.left=W:q.right=W}break}}else if(D.right===W){var ee=Q.left;if(ee&&ee._color===RED)D._color=BLACK,Q.left=repaint(BLACK,ee),Q._color=RED,Y-=1;else{if(Q._color=RED,Q.right=D.left,D._color=BLACK,D.left=Q,F[Y-2]=D,F[Y-1]=W,recount(Q),recount(D),Y>=3){var q=F[Y-3];q.right===Q?q.right=D:q.left=D}break}}else{var ee=Q.left;if(ee&&ee._color===RED)D._color=BLACK,Q.left=repaint(BLACK,ee),Q._color=RED,Y-=1;else{if(D.left=W.right,Q._color=RED,Q.right=W.left,W._color=BLACK,W.right=D,W.left=Q,F[Y-2]=W,F[Y-1]=D,recount(Q),recount(D),recount(W),Y>=3){var q=F[Y-3];q.right===Q?q.right=W:q.left=W}break}}}return F[0]._color=BLACK,new RedBlackTree(G,F[0])};function doVisitFull(X,Z){if(Z.left){var G=doVisitFull(X,Z.left);if(G)return G}var G=X(Z.key,Z.value);if(G)return G;if(Z.right)return doVisitFull(X,Z.right)}function doVisitHalf(X,Z,G,W){var F=Z(X,W.key);if(F<=0){if(W.left){var U=doVisitHalf(X,Z,G,W.left);if(U)return U}var U=G(W.key,W.value);if(U)return U}if(W.right)return doVisitHalf(X,Z,G,W.right)}function doVisit(X,Z,G,W,F){var U=G(X,F.key),J=G(Z,F.key),Y;if(U<=0&&(F.left&&(Y=doVisit(X,Z,G,W,F.left),Y)||J>0&&(Y=W(F.key,F.value),Y)))return Y;if(J>0&&F.right)return doVisit(X,Z,G,W,F.right)}proto.forEach=function(Z,G,W){if(this.root)switch(arguments.length){case 1:return doVisitFull(Z,this.root);case 2:return doVisitHalf(G,this._compare,Z,this.root);case 3:return this._compare(G,W)>=0?void 0:doVisit(G,W,this._compare,Z,this.root)}};Object.defineProperty(proto,"begin",{get:function(){for(var X=[],Z=this.root;Z;)X.push(Z),Z=Z.left;return new RedBlackTreeIterator(this,X)}});Object.defineProperty(proto,"end",{get:function(){for(var X=[],Z=this.root;Z;)X.push(Z),Z=Z.right;return new RedBlackTreeIterator(this,X)}});proto.at=function(X){if(X<0)return new RedBlackTreeIterator(this,[]);for(var Z=this.root,G=[];;){if(G.push(Z),Z.left){if(X<Z.left._count){Z=Z.left;continue}X-=Z.left._count}if(!X)return new RedBlackTreeIterator(this,G);if(X-=1,Z.right){if(X>=Z.right._count)break;Z=Z.right}else break}return new RedBlackTreeIterator(this,[])};proto.ge=function(X){for(var Z=this._compare,G=this.root,W=[],F=0;G;){var U=Z(X,G.key);W.push(G),U<=0&&(F=W.length),U<=0?G=G.left:G=G.right}return W.length=F,new RedBlackTreeIterator(this,W)};proto.gt=function(X){for(var Z=this._compare,G=this.root,W=[],F=0;G;){var U=Z(X,G.key);W.push(G),U<0&&(F=W.length),U<0?G=G.left:G=G.right}return W.length=F,new RedBlackTreeIterator(this,W)};proto.lt=function(X){for(var Z=this._compare,G=this.root,W=[],F=0;G;){var U=Z(X,G.key);W.push(G),U>0&&(F=W.length),U<=0?G=G.left:G=G.right}return W.length=F,new RedBlackTreeIterator(this,W)};proto.le=function(X){for(var Z=this._compare,G=this.root,W=[],F=0;G;){var U=Z(X,G.key);W.push(G),U>=0&&(F=W.length),U<0?G=G.left:G=G.right}return W.length=F,new RedBlackTreeIterator(this,W)};proto.find=function(X){for(var Z=this._compare,G=this.root,W=[];G;){var F=Z(X,G.key);if(W.push(G),F===0)return new RedBlackTreeIterator(this,W);F<=0?G=G.left:G=G.right}return new RedBlackTreeIterator(this,[])};proto.remove=function(X){var Z=this.find(X);return Z?Z.remove():this};proto.get=function(X){for(var Z=this._compare,G=this.root;G;){var W=Z(X,G.key);if(W===0)return G.value;W<=0?G=G.left:G=G.right}};function RedBlackTreeIterator(X,Z){this.tree=X,this._stack=Z}var iproto=RedBlackTreeIterator.prototype;Object.defineProperty(iproto,"valid",{get:function(){return this._stack.length>0}});Object.defineProperty(iproto,"node",{get:function(){return this._stack.length>0?this._stack[this._stack.length-1]:null},enumerable:!0});iproto.clone=function(){return new RedBlackTreeIterator(this.tree,this._stack.slice())};function swapNode(X,Z){X.key=Z.key,X.value=Z.value,X.left=Z.left,X.right=Z.right,X._color=Z._color,X._count=Z._count}function fixDoubleBlack(X){for(var Z,G,W,F,U=X.length-1;U>=0;--U){if(Z=X[U],U===0){Z._color=BLACK;return}if(G=X[U-1],G.left===Z){if(W=G.right,W.right&&W.right._color===RED){if(W=G.right=cloneNode(W),F=W.right=cloneNode(W.right),G.right=W.left,W.left=G,W.right=F,W._color=G._color,Z._color=BLACK,G._color=BLACK,F._color=BLACK,recount(G),recount(W),U>1){var J=X[U-2];J.left===G?J.left=W:J.right=W}X[U-1]=W;return}else if(W.left&&W.left._color===RED){if(W=G.right=cloneNode(W),F=W.left=cloneNode(W.left),G.right=F.left,W.left=F.right,F.left=G,F.right=W,F._color=G._color,G._color=BLACK,W._color=BLACK,Z._color=BLACK,recount(G),recount(W),recount(F),U>1){var J=X[U-2];J.left===G?J.left=F:J.right=F}X[U-1]=F;return}if(W._color===BLACK)if(G._color===RED){G._color=BLACK,G.right=repaint(RED,W);return}else{G.right=repaint(RED,W);continue}else{if(W=cloneNode(W),G.right=W.left,W.left=G,W._color=G._color,G._color=RED,recount(G),recount(W),U>1){var J=X[U-2];J.left===G?J.left=W:J.right=W}X[U-1]=W,X[U]=G,U+1<X.length?X[U+1]=Z:X.push(Z),U=U+2}}else{if(W=G.left,W.left&&W.left._color===RED){if(W=G.left=cloneNode(W),F=W.left=cloneNode(W.left),G.left=W.right,W.right=G,W.left=F,W._color=G._color,Z._color=BLACK,G._color=BLACK,F._color=BLACK,recount(G),recount(W),U>1){var J=X[U-2];J.right===G?J.right=W:J.left=W}X[U-1]=W;return}else if(W.right&&W.right._color===RED){if(W=G.left=cloneNode(W),F=W.right=cloneNode(W.right),G.left=F.right,W.right=F.left,F.right=G,F.left=W,F._color=G._color,G._color=BLACK,W._color=BLACK,Z._color=BLACK,recount(G),recount(W),recount(F),U>1){var J=X[U-2];J.right===G?J.right=F:J.left=F}X[U-1]=F;return}if(W._color===BLACK)if(G._color===RED){G._color=BLACK,G.left=repaint(RED,W);return}else{G.left=repaint(RED,W);continue}else{if(W=cloneNode(W),G.left=W.right,W.right=G,W._color=G._color,G._color=RED,recount(G),recount(W),U>1){var J=X[U-2];J.right===G?J.right=W:J.left=W}X[U-1]=W,X[U]=G,U+1<X.length?X[U+1]=Z:X.push(Z),U=U+2}}}}iproto.remove=function(){var X=this._stack;if(X.length===0)return this.tree;var Z=new Array(X.length),G=X[X.length-1];Z[Z.length-1]=new RBNode(G._color,G.key,G.value,G.left,G.right,G._count);for(var W=X.length-2;W>=0;--W){var G=X[W];G.left===X[W+1]?Z[W]=new RBNode(G._color,G.key,G.value,Z[W+1],G.right,G._count):Z[W]=new RBNode(G._color,G.key,G.value,G.left,Z[W+1],G._count)}if(G=Z[Z.length-1],G.left&&G.right){var F=Z.length;for(G=G.left;G.right;)Z.push(G),G=G.right;var U=Z[F-1];Z.push(new RBNode(G._color,U.key,U.value,G.left,G.right,G._count)),Z[F-1].key=G.key,Z[F-1].value=G.value;for(var W=Z.length-2;W>=F;--W)G=Z[W],Z[W]=new RBNode(G._color,G.key,G.value,G.left,Z[W+1],G._count);Z[F-1].left=Z[F]}if(G=Z[Z.length-1],G._color===RED){var J=Z[Z.length-2];J.left===G?J.left=null:J.right===G&&(J.right=null),Z.pop();for(var W=0;W<Z.length;++W)Z[W]._count--;return new RedBlackTree(this.tree._compare,Z[0])}else if(G.left||G.right){G.left?swapNode(G,G.left):G.right&&swapNode(G,G.right),G._color=BLACK;for(var W=0;W<Z.length-1;++W)Z[W]._count--;return new RedBlackTree(this.tree._compare,Z[0])}else{if(Z.length===1)return new RedBlackTree(this.tree._compare,null);for(var W=0;W<Z.length;++W)Z[W]._count--;var Y=Z[Z.length-2];fixDoubleBlack(Z),Y.left===G?Y.left=null:Y.right=null}return new RedBlackTree(this.tree._compare,Z[0])};Object.defineProperty(iproto,"key",{get:function(){if(this._stack.length>0)return this._stack[this._stack.length-1].key},enumerable:!0});Object.defineProperty(iproto,"value",{get:function(){if(this._stack.length>0)return this._stack[this._stack.length-1].value},enumerable:!0});Object.defineProperty(iproto,"index",{get:function(){var X=0,Z=this._stack;if(Z.length===0){var G=this.tree.root;return G?G._count:0}else Z[Z.length-1].left&&(X=Z[Z.length-1].left._count);for(var W=Z.length-2;W>=0;--W)Z[W+1]===Z[W].right&&(++X,Z[W].left&&(X+=Z[W].left._count));return X},enumerable:!0});iproto.next=function(){var X=this._stack;if(X.length!==0){var Z=X[X.length-1];if(Z.right)for(Z=Z.right;Z;)X.push(Z),Z=Z.left;else for(X.pop();X.length>0&&X[X.length-1].right===Z;)Z=X[X.length-1],X.pop()}};Object.defineProperty(iproto,"hasNext",{get:function(){var X=this._stack;if(X.length===0)return!1;if(X[X.length-1].right)return!0;for(var Z=X.length-1;Z>0;--Z)if(X[Z-1].left===X[Z])return!0;return!1}});iproto.update=function(X){var Z=this._stack;if(Z.length===0)throw new Error("Can't update empty node!");var G=new Array(Z.length),W=Z[Z.length-1];G[G.length-1]=new RBNode(W._color,W.key,X,W.left,W.right,W._count);for(var F=Z.length-2;F>=0;--F)W=Z[F],W.left===Z[F+1]?G[F]=new RBNode(W._color,W.key,W.value,G[F+1],W.right,W._count):G[F]=new RBNode(W._color,W.key,W.value,W.left,G[F+1],W._count);return new RedBlackTree(this.tree._compare,G[0])};iproto.prev=function(){var X=this._stack;if(X.length!==0){var Z=X[X.length-1];if(Z.left)for(Z=Z.left;Z;)X.push(Z),Z=Z.right;else for(X.pop();X.length>0&&X[X.length-1].left===Z;)Z=X[X.length-1],X.pop()}};Object.defineProperty(iproto,"hasPrev",{get:function(){var X=this._stack;if(X.length===0)return!1;if(X[X.length-1].left)return!0;for(var Z=X.length-1;Z>0;--Z)if(X[Z-1].right===X[Z])return!0;return!1}});function defaultCompare(X,Z){return X<Z?-1:X>Z?1:0}function createRBTree(X){return new RedBlackTree(X||defaultCompare,null)}const{AbstractLevel,AbstractIterator,AbstractKeyIterator,AbstractValueIterator}=abstractLevel$1,ModuleError=moduleError,createRBT=rbtree,rangeOptions=new Set(["gt","gte","lt","lte"]),kNone=Symbol("none"),kTree=Symbol("tree"),kIterator=Symbol("iterator"),kLowerBound=Symbol("lowerBound"),kUpperBound=Symbol("upperBound"),kOutOfRange=Symbol("outOfRange"),kReverse=Symbol("reverse"),kOptions=Symbol("options"),kTest=Symbol("test"),kAdvance=Symbol("advance"),kInit=Symbol("init");function compare(X,Z){if(typeof X=="string")return X<Z?-1:X>Z?1:0;const G=Math.min(X.byteLength,Z.byteLength);for(let W=0;W<G;W++){const F=X[W]-Z[W];if(F!==0)return F}return X.byteLength-Z.byteLength}function gt(X){return compare(X,this[kUpperBound])>0}function gte(X){return compare(X,this[kUpperBound])>=0}function lt(X){return compare(X,this[kUpperBound])<0}function lte(X){return compare(X,this[kUpperBound])<=0}class MemoryIterator extends AbstractIterator{constructor(Z,G){super(Z,G),this[kInit](Z[kTree],G)}_next(Z){if(!this[kIterator].valid)return this.nextTick(Z);const G=this[kIterator].key,W=this[kIterator].value;if(!this[kTest](G))return this.nextTick(Z);this[kIterator][this[kAdvance]](),this.nextTick(Z,null,G,W)}_nextv(Z,G,W){const F=this[kIterator],U=[];for(;F.valid&&U.length<Z&&this[kTest](F.key);)U.push([F.key,F.value]),F[this[kAdvance]]();this.nextTick(W,null,U)}_all(Z,G){const W=this.limit-this.count,F=this[kIterator],U=[];for(;F.valid&&U.length<W&&this[kTest](F.key);)U.push([F.key,F.value]),F[this[kAdvance]]();this.nextTick(G,null,U)}}class MemoryKeyIterator extends AbstractKeyIterator{constructor(Z,G){super(Z,G),this[kInit](Z[kTree],G)}_next(Z){if(!this[kIterator].valid)return this.nextTick(Z);const G=this[kIterator].key;if(!this[kTest](G))return this.nextTick(Z);this[kIterator][this[kAdvance]](),this.nextTick(Z,null,G)}_nextv(Z,G,W){const F=this[kIterator],U=[];for(;F.valid&&U.length<Z&&this[kTest](F.key);)U.push(F.key),F[this[kAdvance]]();this.nextTick(W,null,U)}_all(Z,G){const W=this.limit-this.count,F=this[kIterator],U=[];for(;F.valid&&U.length<W&&this[kTest](F.key);)U.push(F.key),F[this[kAdvance]]();this.nextTick(G,null,U)}}class MemoryValueIterator extends AbstractValueIterator{constructor(Z,G){super(Z,G),this[kInit](Z[kTree],G)}_next(Z){if(!this[kIterator].valid)return this.nextTick(Z);const G=this[kIterator].key,W=this[kIterator].value;if(!this[kTest](G))return this.nextTick(Z);this[kIterator][this[kAdvance]](),this.nextTick(Z,null,W)}_nextv(Z,G,W){const F=this[kIterator],U=[];for(;F.valid&&U.length<Z&&this[kTest](F.key);)U.push(F.value),F[this[kAdvance]]();this.nextTick(W,null,U)}_all(Z,G){const W=this.limit-this.count,F=this[kIterator],U=[];for(;F.valid&&U.length<W&&this[kTest](F.key);)U.push(F.value),F[this[kAdvance]]();this.nextTick(G,null,U)}}for(const X of[MemoryIterator,MemoryKeyIterator,MemoryValueIterator])X.prototype[kInit]=function(Z,G){this[kReverse]=G.reverse,this[kOptions]=G,this[kReverse]?(this[kAdvance]="prev",this[kLowerBound]="lte"in G?G.lte:"lt"in G?G.lt:kNone,this[kUpperBound]="gte"in G?G.gte:"gt"in G?G.gt:kNone,this[kLowerBound]===kNone?this[kIterator]=Z.end:"lte"in G?this[kIterator]=Z.le(this[kLowerBound]):this[kIterator]=Z.lt(this[kLowerBound]),this[kUpperBound]!==kNone&&(this[kTest]="gte"in G?gte:gt)):(this[kAdvance]="next",this[kLowerBound]="gte"in G?G.gte:"gt"in G?G.gt:kNone,this[kUpperBound]="lte"in G?G.lte:"lt"in G?G.lt:kNone,this[kLowerBound]===kNone?this[kIterator]=Z.begin:"gte"in G?this[kIterator]=Z.ge(this[kLowerBound]):this[kIterator]=Z.gt(this[kLowerBound]),this[kUpperBound]!==kNone&&(this[kTest]="lte"in G?lte:lt))},X.prototype[kTest]=function(){return!0},X.prototype[kOutOfRange]=function(Z){return this[kTest](Z)?this[kLowerBound]===kNone?!1:this[kReverse]?"lte"in this[kOptions]?compare(Z,this[kLowerBound])>0:compare(Z,this[kLowerBound])>=0:"gte"in this[kOptions]?compare(Z,this[kLowerBound])<0:compare(Z,this[kLowerBound])<=0:!0},X.prototype._seek=function(Z,G){this[kOutOfRange](Z)?(this[kIterator]=this[kIterator].tree.end,this[kIterator].next()):this[kReverse]?this[kIterator]=this[kIterator].tree.le(Z):this[kIterator]=this[kIterator].tree.ge(Z)};class MemoryLevel extends AbstractLevel{constructor(Z,G,W){if(typeof Z=="object"&&Z!==null&&(G=Z),typeof Z=="function"||typeof G=="function"||typeof W=="function")throw new ModuleError("The levelup-style callback argument has been removed",{code:"LEVEL_LEGACY"});let{storeEncoding:F,...U}=G||{};if(F=F||"buffer",!["buffer","view","utf8"].includes(F))throw new ModuleError("The storeEncoding option must be 'buffer', 'view' or 'utf8'",{code:"LEVEL_ENCODING_NOT_SUPPORTED"});super({seek:!0,permanence:!1,createIfMissing:!1,errorIfExists:!1,encodings:{[F]:!0}},U),this[kTree]=createRBT(compare)}_put(Z,G,W,F){const U=this[kTree].find(Z);U.valid?this[kTree]=U.update(G):this[kTree]=this[kTree].insert(Z,G),this.nextTick(F)}_get(Z,G,W){const F=this[kTree].get(Z);if(typeof F>"u")return this.nextTick(W,new Error("NotFound"));this.nextTick(W,null,F)}_getMany(Z,G,W){this.nextTick(W,null,Z.map(F=>this[kTree].get(F)))}_del(Z,G,W){this[kTree]=this[kTree].remove(Z),this.nextTick(W)}_batch(Z,G,W){let F=this[kTree];for(const U of Z){const J=U.key,Y=F.find(J);U.type==="put"?F=Y.valid?Y.update(U.value):F.insert(J,U.value):F=Y.remove()}this[kTree]=F,this.nextTick(W)}_clear(Z,G){if(Z.limit===-1&&!Object.keys(Z).some(isRangeOption))return this[kTree]=createRBT(compare),this.nextTick(G);const W=this._keys({...Z}),F=W.limit;let U=0;const J=()=>{for(let Y=0;Y<500;Y++){if(++U>F||!W[kIterator].valid||!W[kTest](W[kIterator].key))return G();this[kTree]=this[kTree].remove(W[kIterator].key),W[kIterator][W[kAdvance]]()}this.nextTick(J)};this.nextTick(J)}_iterator(Z){return new MemoryIterator(this,Z)}_keys(Z){return new MemoryKeyIterator(this,Z)}_values(Z){return new MemoryValueIterator(this,Z)}}var MemoryLevel_1=MemoryLevel;if(typeof process<"u"&&!process.browser&&typeof commonjsGlobal<"u"&&typeof commonjsGlobal.setImmediate=="function"){const X=commonjsGlobal.setImmediate;MemoryLevel.prototype.nextTick=function(Z,...G){G.length===0?X(Z):X(()=>Z(...G))}}function isRangeOption(X){return rangeOptions.has(X)}var rdfDataFactory={},BlankNode$1={};Object.defineProperty(BlankNode$1,"__esModule",{value:!0});BlankNode$1.BlankNode=void 0;class BlankNode{constructor(Z){this.termType="BlankNode",this.value=Z}equals(Z){return!!Z&&Z.termType==="BlankNode"&&Z.value===this.value}}BlankNode$1.BlankNode=BlankNode;var DataFactory$2={},DefaultGraph$1={};Object.defineProperty(DefaultGraph$1,"__esModule",{value:!0});DefaultGraph$1.DefaultGraph=void 0;class DefaultGraph{constructor(){this.termType="DefaultGraph",this.value=""}equals(Z){return!!Z&&Z.termType==="DefaultGraph"}}DefaultGraph$1.DefaultGraph=DefaultGraph;DefaultGraph.INSTANCE=new DefaultGraph;var Literal$1={},NamedNode$1={};Object.defineProperty(NamedNode$1,"__esModule",{value:!0});NamedNode$1.NamedNode=void 0;class NamedNode{constructor(Z){this.termType="NamedNode",this.value=Z}equals(Z){return!!Z&&Z.termType==="NamedNode"&&Z.value===this.value}}NamedNode$1.NamedNode=NamedNode;Object.defineProperty(Literal$1,"__esModule",{value:!0});Literal$1.Literal=void 0;const NamedNode_1$1=NamedNode$1;class Literal{constructor(Z,G){this.termType="Literal",this.value=Z,typeof G=="string"?(this.language=G,this.datatype=Literal.RDF_LANGUAGE_STRING):G?(this.language="",this.datatype=G):(this.language="",this.datatype=Literal.XSD_STRING)}equals(Z){return!!Z&&Z.termType==="Literal"&&Z.value===this.value&&Z.language===this.language&&Z.datatype.equals(this.datatype)}}Literal$1.Literal=Literal;Literal.RDF_LANGUAGE_STRING=new NamedNode_1$1.NamedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString");Literal.XSD_STRING=new NamedNode_1$1.NamedNode("http://www.w3.org/2001/XMLSchema#string");var Quad$2={};Object.defineProperty(Quad$2,"__esModule",{value:!0});Quad$2.Quad=void 0;let Quad$1=class{constructor(Z,G,W,F){this.termType="Quad",this.value="",this.subject=Z,this.predicate=G,this.object=W,this.graph=F}equals(Z){return!!Z&&(Z.termType==="Quad"||!Z.termType)&&this.subject.equals(Z.subject)&&this.predicate.equals(Z.predicate)&&this.object.equals(Z.object)&&this.graph.equals(Z.graph)}};Quad$2.Quad=Quad$1;var Variable$1={};Object.defineProperty(Variable$1,"__esModule",{value:!0});Variable$1.Variable=void 0;class Variable{constructor(Z){this.termType="Variable",this.value=Z}equals(Z){return!!Z&&Z.termType==="Variable"&&Z.value===this.value}}Variable$1.Variable=Variable;Object.defineProperty(DataFactory$2,"__esModule",{value:!0});DataFactory$2.DataFactory=void 0;const BlankNode_1=BlankNode$1,DefaultGraph_1=DefaultGraph$1,Literal_1=Literal$1,NamedNode_1=NamedNode$1,Quad_1=Quad$2,Variable_1=Variable$1;let dataFactoryCounter=0,DataFactory$1=class{constructor(Z){this.blankNodeCounter=0,Z=Z||{},this.blankNodePrefix=Z.blankNodePrefix||`df_${dataFactoryCounter++}_`}namedNode(Z){return new NamedNode_1.NamedNode(Z)}blankNode(Z){return new BlankNode_1.BlankNode(Z||`${this.blankNodePrefix}${this.blankNodeCounter++}`)}literal(Z,G){return new Literal_1.Literal(Z,G)}variable(Z){return new Variable_1.Variable(Z)}defaultGraph(){return DefaultGraph_1.DefaultGraph.INSTANCE}quad(Z,G,W,F){return new Quad_1.Quad(Z,G,W,F||this.defaultGraph())}fromTerm(Z){switch(Z.termType){case"NamedNode":return this.namedNode(Z.value);case"BlankNode":return this.blankNode(Z.value);case"Literal":return Z.language?this.literal(Z.value,Z.language):Z.datatype.equals(Literal_1.Literal.XSD_STRING)?this.literal(Z.value):this.literal(Z.value,this.fromTerm(Z.datatype));case"Variable":return this.variable(Z.value);case"DefaultGraph":return this.defaultGraph();case"Quad":return this.quad(this.fromTerm(Z.subject),this.fromTerm(Z.predicate),this.fromTerm(Z.object),this.fromTerm(Z.graph))}}fromQuad(Z){return this.fromTerm(Z)}resetBlankNodeCounter(){this.blankNodeCounter=0}};DataFactory$2.DataFactory=DataFactory$1;(function(X){var Z=commonjsGlobal&&commonjsGlobal.__createBinding||(Object.create?function(W,F,U,J){J===void 0&&(J=U),Object.defineProperty(W,J,{enumerable:!0,get:function(){return F[U]}})}:function(W,F,U,J){J===void 0&&(J=U),W[J]=F[U]}),G=commonjsGlobal&&commonjsGlobal.__exportStar||function(W,F){for(var U in W)U!=="default"&&!Object.prototype.hasOwnProperty.call(F,U)&&Z(F,W,U)};Object.defineProperty(X,"__esModule",{value:!0}),G(BlankNode$1,X),G(DataFactory$2,X),G(DefaultGraph$1,X),G(Literal$1,X),G(NamedNode$1,X),G(Quad$2,X),G(Variable$1,X)})(rdfDataFactory);var ResultType;(function(X){X.VOID="void",X.QUADS="quads",X.APPROXIMATE_SIZE="approximate_size"})(ResultType||(ResultType={}));class LinkedList{constructor(){this._length=0,this._head=null,this._tail=null}get length(){return this._length}get first(){var Z;return(Z=this._head)===null||Z===void 0?void 0:Z.value}get last(){var Z;return(Z=this._tail)===null||Z===void 0?void 0:Z.value}get empty(){return this._head===null}push(Z){const G={value:Z,next:null};this._tail===null?this._head=this._tail=G:this._tail.next=this._tail=G,this._length++}shift(){if(this._head===null)return;const{value:Z,next:G}=this._head;return this._head=G,G===null&&(this._tail=null),this._length--,Z}clear(){this._length=0,this._head=this._tail=null}}const resolved=Promise.resolve(void 0);function createTaskScheduler(){const X=typeof queueMicrotask=="function"?queueMicrotask:F=>resolved.then(F),Z=typeof setImmediate=="function"?setImmediate:F=>setTimeout(F,0);let G=0,W=null;return F=>{W!==null?W.push(F):++G<100?X(F):(W=[F],Z(()=>{for(const U of W)X(U);W=null,G=0}))}}let taskScheduler=createTaskScheduler();function scheduleTask(X){taskScheduler(X)}function getTaskScheduler(){return taskScheduler}function setTaskScheduler(X){taskScheduler=X}const INIT=1<<0,OPEN=1<<1,CLOSING=1<<2,CLOSED=1<<3,ENDED=1<<4,DESTROYED=1<<5;class AsyncIterator extends eventsExports.EventEmitter{constructor(Z=OPEN){super(),this._readable=!1,this._state=Z,this.on("newListener",waitForDataListener)}_changeState(Z,G=!1){const W=Z>this._state&&this._state<ENDED;return W&&(this._state=Z,Z===ENDED&&(G?taskScheduler(()=>this.emit("end")):this.emit("end"))),W}read(){return null}forEach(Z,G){this.on("data",bind(Z,G))}close(){this._changeState(CLOSED)&&this._endAsync()}destroy(Z){this.done||this._destroy(Z,G=>{Z=Z||G,Z&&this.emit("error",Z),this._end(!0)})}_destroy(Z,G){G()}_end(Z=!1){this._changeState(Z?DESTROYED:ENDED)&&(this._readable=!1,this.removeAllListeners("readable"),this.removeAllListeners("data"),this.removeAllListeners("end"))}_endAsync(){taskScheduler(()=>this._end())}get readable(){return this._readable}set readable(Z){Z=!!Z&&!this.done,this._readable!==Z&&(this._readable=Z,Z&&taskScheduler(()=>this.emit("readable")))}get closed(){return this._state>=CLOSING}get ended(){return this._state===ENDED}get destroyed(){return this._state===DESTROYED}get done(){return this._state>=ENDED}toString(){const Z=this._toStringDetails();return`[${this.constructor.name}${Z?` ${Z}`:""}]`}_toStringDetails(){return""}toArray(Z){const G=[],W=typeof Z?.limit=="number"?Z.limit:1/0;return this.ended||W<=0?Promise.resolve(G):new Promise((F,U)=>{const J=()=>F(G),Y=D=>{G.push(D),G.length>=W&&(this.removeListener("error",U),this.removeListener("data",Y),this.removeListener("end",J),F(G))};this.on("error",U),this.on("data",Y),this.on("end",J)})}getProperty(Z,G){const W=this._properties;if(!G)return W&&W[Z];if(W&&Z in W)taskScheduler(()=>G(W[Z]));else{let F;(F=this._propertyCallbacks)||(this._propertyCallbacks=F=Object.create(null)),Z in F?F[Z].push(G):F[Z]=[G]}}setProperty(Z,G){const W=this._properties||(this._properties=Object.create(null));W[Z]=G;const F=this._propertyCallbacks||{},U=F[Z];if(U){delete F[Z],taskScheduler(()=>{for(const J of U)J(G)});for(Z in F)return;delete this._propertyCallbacks}}getProperties(){const Z=this._properties,G={};for(const W in Z)G[W]=Z[W];return G}setProperties(Z){for(const G in Z)this.setProperty(G,Z[G])}copyProperties(Z,G){for(const W of G)Z.getProperty(W,F=>this.setProperty(W,F))}transform(Z){return new SimpleTransformIterator(this,Z)}map(Z,G){return new MappingIterator(this,bind(Z,G))}filter(Z,G){return this.map(function(W){return Z.call(G||this,W)?W:null})}uniq(Z=identity$3){const G=new Set;return this.filter(function(W){const F=Z.call(this,W);return G.has(F)?!1:(G.add(F),!0)})}prepend(Z){return this.transform({prepend:Z})}append(Z){return this.transform({append:Z})}surround(Z,G){return this.transform({prepend:Z,append:G})}skip(Z){return this.map(G=>Z-- >0?null:G)}take(Z){return this.transform({limit:Z})}range(Z,G){return this.transform({offset:Z,limit:Math.max(G-Z+1,0)})}clone(){return new ClonedIterator(this)}}function waitForDataListener(X){X==="data"&&(this.removeListener("newListener",waitForDataListener),addSingleListener(this,"readable",emitData),this.readable&&taskScheduler(()=>emitData.call(this)))}function emitData(){let X;for(;this.listenerCount("data")!==0&&(X=this.read())!==null;)this.emit("data",X);this.listenerCount("data")===0&&!this.done&&(this.removeListener("readable",emitData),addSingleListener(this,"newListener",waitForDataListener))}function addSingleListener(X,Z,G){X.listeners(Z).includes(G)||X.on(Z,G)}class EmptyIterator extends AsyncIterator{constructor(){super(),this._changeState(ENDED,!0)}}class SingletonIterator extends AsyncIterator{constructor(Z){super(),this._item=Z,Z===null?this.close():this.readable=!0}read(){const Z=this._item;return this._item=null,this.close(),Z}_toStringDetails(){return this._item===null?"":`(${this._item})`}}class ArrayIterator extends AsyncIterator{constructor(Z=[],{autoStart:G=!0,preserve:W=!0}={}){super();const F=W||!Array.isArray(Z)?[...Z]:Z;this._index=0,this._sourceStarted=G!==!1,this._truncateThreshold=W?-1:64,this._sourceStarted&&F.length===0?this.close():this._buffer=F,this.readable=!0}read(){this._sourceStarted||(this._sourceStarted=!0);let Z=null;return this._buffer&&(this._index<this._buffer.length&&(Z=this._buffer[this._index++]),this._index===this._buffer.length?(delete this._buffer,this.close()):this._index===this._truncateThreshold&&(this._buffer.splice(0,this._truncateThreshold),this._index=0)),Z}_toStringDetails(){return`(${this._buffer?this._buffer.length-this._index:0})`}_destroy(Z,G){delete this._buffer,G()}toArray(Z={}){if(!this._buffer)return Promise.resolve([]);const{length:G}=this._buffer,W=this._index,F=typeof Z.limit!="number"?G:W+Z.limit,U=this._buffer.slice(W,F);return this._index=F,F>=G&&this.close(),Promise.resolve(U)}}class IntegerIterator extends AsyncIterator{constructor({start:Z=0,step:G=1,end:W}={}){super(),Number.isFinite(Z)&&(Z=Math.trunc(Z)),this._next=Z,Number.isFinite(G)&&(G=Math.trunc(G)),this._step=G;const F=G>=0,U=F?1/0:-1/0;Number.isFinite(W)?W=Math.trunc(W):W!==-U&&(W=U),this._last=W,!Number.isFinite(Z)||(F?Z>W:Z<W)?this.close():this.readable=!0}read(){if(this.closed)return null;const Z=this._next,G=this._step,W=this._last,F=this._next+=G;return(G>=0?F>W:F<W)&&this.close(),Z}_toStringDetails(){return`(${this._next}...${this._last})`}}function identity$3(X){return X}const DESTINATION=Symbol("destination");class MappingIterator extends AsyncIterator{constructor(Z,G=identity$3,W={}){super(),this._map=G,this._source=ensureSourceAvailable(Z),this._destroySource=W.destroySource!==!1,Z.done?this.close():(this._source[DESTINATION]=this,this._source.on("end",destinationClose),this._source.on("error",destinationEmitError),this._source.on("readable",destinationSetReadable),this.readable=this._source.readable)}read(){if(!this.done){if(this._source.readable){let Z,G;for(;(Z=this._source.read())!==null;)if((G=this._map(Z))!==null)return G}this.readable=!1,this._source.done&&this.close()}return null}_end(Z){this._source.removeListener("end",destinationClose),this._source.removeListener("error",destinationEmitError),this._source.removeListener("readable",destinationSetReadable),delete this._source[DESTINATION],this._destroySource&&this._source.destroy(),super._end(Z)}}function ensureSourceAvailable(X,Z=!1){if(!X||!isFunction$1(X.read)||!isFunction$1(X.on))throw new TypeError(`Invalid source: ${X}`);if(!Z&&X[DESTINATION])throw new Error("The source already has a destination");return X}class BufferedIterator extends AsyncIterator{constructor({maxBufferSize:Z=4,autoStart:G=!0}={}){super(INIT),this._buffer=new LinkedList,this._maxBufferSize=4,this._reading=!0,this._pushedCount=0,this.maxBufferSize=Z,taskScheduler(()=>this._init(G)),this._sourceStarted=G!==!1}get maxBufferSize(){return this._maxBufferSize}set maxBufferSize(Z){Z!==1/0&&(Z=Number.isFinite(Z)?Math.max(Math.trunc(Z),1):4),this._maxBufferSize!==Z&&(this._maxBufferSize=Z,this._state===OPEN&&this._fillBuffer())}_init(Z){let G=!1;this._reading=!0,this._begin(()=>{if(G)throw new Error("done callback called multiple times");G=!0,this._reading=!1,this._changeState(OPEN),Z?this._fillBufferAsync():this.readable=!0})}_begin(Z){Z()}read(){if(this.done)return null;this._sourceStarted||(this._sourceStarted=!0);const Z=this._buffer;let G;return Z.empty?(G=null,this.readable=!1):G=Z.shift(),!this._reading&&Z.length<this._maxBufferSize&&(this.closed?Z.empty&&this._endAsync():this._fillBufferAsync()),G}_read(Z,G){G()}_push(Z){this.done||(this._pushedCount++,this._buffer.push(Z),this.readable=!0)}_fillBuffer(){let Z;this._reading||(this.closed?this._completeClose():(Z=Math.min(this._maxBufferSize-this._buffer.length,128))>0&&(this._pushedCount=0,this._reading=!0,this._read(Z,()=>{if(!Z)throw new Error("done callback called multiple times");Z=0,this._reading=!1,this.closed?this._completeClose():this._pushedCount&&(this.readable=!0,this._buffer.length<this._maxBufferSize/2&&this._fillBufferAsync())})))}_fillBufferAsync(){this._reading||(this._reading=!0,taskScheduler(()=>{this._reading=!1,this._fillBuffer()}))}close(){this._reading?this._changeState(CLOSING):this._completeClose()}_completeClose(){this._changeState(CLOSED)&&(this._reading=!0,this._flush(()=>{if(!this._reading)throw new Error("done callback called multiple times");this._reading=!1,this._buffer.empty&&this._endAsync()}))}_destroy(Z,G){this._buffer.clear(),G()}_flush(Z){Z()}_toStringDetails(){const Z=this._buffer;return`{${Z.empty?"":`next: ${Z.first}, `}buffer: ${Z.length}}`}}class TransformIterator extends BufferedIterator{constructor(Z,G=Z||{}){super(G),this._boundPush=W=>this._push(W),isSourceExpression(Z)||(Z=G.source),isEventEmitter(Z)?this.source=Z:Z&&(this._createSource=isPromise(Z)?()=>Z:Z,this._sourceStarted&&this._loadSourceAsync()),this._optional=!!G.optional,this._destroySource=G.destroySource!==!1}get source(){return isFunction$1(this._createSource)&&this._loadSourceAsync(),this._source}set source(Z){const G=this._source=this._validateSource(Z);G[DESTINATION]=this,this.done?this._destroySource&&G.destroy():G.done?this.close():(G.on("end",destinationCloseWhenDone),G.on("readable",destinationFillBuffer),G.on("error",destinationEmitError))}_loadSourceAsync(){isFunction$1(this._createSource)&&(Promise.resolve(this._createSource()).then(Z=>{delete this._createSource,this.source=Z,this._fillBuffer()},Z=>this.emit("error",Z)),this._createSource=null)}_validateSource(Z,G=!1){if(this._source||typeof this._createSource<"u")throw new Error("The source cannot be changed after it has been set");return ensureSourceAvailable(Z,G)}_read(Z,G){const W=()=>{this._pushedCount<Z&&!this.closed?taskScheduler(()=>this._readAndTransform(W,G)):G()};this._readAndTransform(W,G)}_readAndTransform(Z,G){let W;const F=this.source;!F||F.done||(W=F.read())===null?G():this._optional?this._optionalTransform(W,Z):this._transform(W,Z,this._boundPush)}_optionalTransform(Z,G){const W=this._pushedCount;this._transform(Z,()=>{W===this._pushedCount&&this._push(Z),G()},this._boundPush)}_transform(Z,G,W){W(Z),G()}_closeWhenDone(){this.close()}_end(Z){const G=this._source;G&&(G.removeListener("end",destinationCloseWhenDone),G.removeListener("error",destinationEmitError),G.removeListener("readable",destinationFillBuffer),delete G[DESTINATION],this._destroySource&&G.destroy()),super._end(Z)}}function destinationSetReadable(){this[DESTINATION].readable=!0}function destinationEmitError(X){this[DESTINATION].emit("error",X)}function destinationClose(){this[DESTINATION].close()}function destinationCloseWhenDone(){this[DESTINATION]._closeWhenDone()}function destinationFillBuffer(){this[DESTINATION]._sourceStarted!==!1&&this[DESTINATION]._fillBuffer()}class SimpleTransformIterator extends TransformIterator{constructor(Z,G){if(super(Z,G),this._offset=0,this._limit=1/0,this._filter=W=>!0,G=G||(isSourceExpression(Z)?null:Z),G){const W=isFunction$1(G)?G:G.transform,{limit:F,offset:U,filter:J,map:Y,prepend:D,append:Q}=G;U===1/0||F===-1/0?this._limit=0:(Number.isFinite(U)&&(this._offset=Math.max(Math.trunc(U),0)),Number.isFinite(F)&&(this._limit=Math.max(Math.trunc(F),0)),isFunction$1(J)&&(this._filter=J),isFunction$1(Y)&&(this._map=Y),this._transform=isFunction$1(W)?W:null),D&&(this._prepender=isEventEmitter(D)?D:fromArray(D)),Q&&(this._appender=isEventEmitter(Q)?Q:fromArray(Q))}}_read(Z,G){const W=()=>this._readAndTransformSimple(Z,F,G);this._readAndTransformSimple(Z,F,G);function F(){taskScheduler(W)}}_readAndTransformSimple(Z,G,W){let F;const{source:U}=this;if(!U||U.done){W();return}for(this._limit===0&&this.close();!this.closed&&this._pushedCount<Z&&(F=U.read())!==null;){if(!this._filter(F)||this._offset!==0&&this._offset--)continue;const J=typeof this._map>"u"?F:this._map(F);if(J===null)this._optional&&this._push(F);else if(!isFunction$1(this._transform))this._push(J);else{this._optional?this._optionalTransform(J,G):this._transform(J,G,this._boundPush);return}--this._limit===0&&this.close()}W()}_begin(Z){this._insert(this._prepender,Z),delete this._prepender}_flush(Z){this._insert(this._appender,Z),delete this._appender}_insert(Z,G){const W=U=>this._push(U);!Z||Z.done?G():(Z.on("data",W),Z.on("end",F));function F(){Z.removeListener("data",W),Z.removeListener("end",F),G()}}}class MultiTransformIterator extends TransformIterator{constructor(Z,G){if(super(Z,G),this._transformerQueue=[],G){const W=isFunction$1(G)?G:G.multiTransform;W&&(this._createTransformer=W)}}_read(Z,G){const W=this._transformerQueue,F=this._optional;let U,J;for(;(U=W[0])&&U.transformer.done;){F&&U.item!==null&&(Z--,this._push(U.item)),W.shift();const{transformer:D}=U;D.removeListener("end",destinationFillBuffer),D.removeListener("readable",destinationFillBuffer),D.removeListener("error",destinationEmitError)}const{source:Y}=this;for(;Y&&!Y.done&&W.length<this.maxBufferSize&&(J=Y.read(),J!==null);){const D=this._createTransformer(J)||new EmptyIterator;D[DESTINATION]=this,D.on("end",destinationFillBuffer),D.on("readable",destinationFillBuffer),D.on("error",destinationEmitError),W.push({transformer:D,item:J})}if(U=W[0],U){const{transformer:D}=U;for(;Z-- >0&&(J=D.read())!==null;)this._push(J),F&&(U.item=null)}else Y&&Y.done&&this.close();G()}_createTransformer(Z){return new SingletonIterator(Z)}_closeWhenDone(){this._transformerQueue.length||this.close()}_end(Z){if(super._end(Z),this._destroySource)for(const G of this._transformerQueue)G.transformer.destroy()}}class UnionIterator extends BufferedIterator{constructor(Z,G={}){super(G),this._sources=[],this._currentSource=-1;const W=G.autoStart!==!1;if(isEventEmitter(Z))Z.on("error",F=>this.emit("error",F)),this._pending={loading:!1,sources:Z},W&&this._loadSources();else if(Array.isArray(Z)&&Z.length>0)for(const F of Z)this._addSource(F);else W&&this.close();this._destroySources=G.destroySources!==!1}_loadSources(){const Z=this._pending.sources;this._pending.loading=!0,Z.done?(delete this._pending,this.close()):(Z.on("data",G=>{this._addSource(G),this._fillBufferAsync()}),Z.on("end",()=>{delete this._pending,this._fillBuffer()}))}_addSource(Z){isPromise(Z)&&(Z=wrap(Z)),Z.done||(this._sources.push(Z),Z[DESTINATION]=this,Z.on("error",destinationEmitError),Z.on("readable",destinationFillBuffer),Z.on("end",destinationRemoveEmptySources))}_removeEmptySources(){this._sources=this._sources.filter((Z,G)=>(Z.done&&G<=this._currentSource&&this._currentSource--,!Z.done)),this._fillBuffer()}_read(Z,G){var W;((W=this._pending)===null||W===void 0?void 0:W.loading)===!1&&this._loadSources();let F=0,U;for(;F!==(F=Z);)for(let J=0;J<this._sources.length&&Z>0;J++)this._currentSource=(this._currentSource+1)%this._sources.length,(U=this._sources[this._currentSource].read())!==null&&(Z--,this._push(U));!this._pending&&this._sources.length===0&&this.close(),G()}_end(Z=!1){if(super._end(Z),this._destroySources){for(const G of this._sources)G.destroy();this._pending&&(this._pending.sources.destroy(),delete this._pending)}}}function destinationRemoveEmptySources(){this[DESTINATION]._removeEmptySources()}class ClonedIterator extends TransformIterator{constructor(Z){super(Z,{autoStart:!1}),this._readPosition=0,this._reading=!1}_init(){}close(){AsyncIterator.prototype.close.call(this)}get source(){return super.source}set source(Z){const G=this._source=this._validateSource(Z),W=G&&G[DESTINATION]||(G[DESTINATION]=new HistoryReader(G));this.done?this._destroySource&&G.destroy():W.endsAt(0)?this.close():(W.register(this),(G._sourceStarted===!1||W.readAt(0)!==null)&&(this.readable=!0));const F=this._propertyCallbacks;for(const U in F){const J=F[U];for(const Y of J)this._getSourceProperty(U,Y)}}_validateSource(Z,G=!1){const W=Z&&Z[DESTINATION];return super._validateSource(Z,!W||W instanceof HistoryReader)}getProperty(Z,G){const{source:W}=this,F=this._properties,U=F&&Z in F;if(!G)return U?F&&F[Z]:W&&W.getProperty(Z);super.getProperty(Z,G),W&&!U&&this._getSourceProperty(Z,G)}_getSourceProperty(Z,G){this.source.getProperty(Z,W=>{(!this._properties||!(Z in this._properties))&&G(W)})}getProperties(){const Z=this.source?this.source.getProperties():{},G=this._properties;for(const W in G)Z[W]=G[W];return Z}_toStringDetails(){return`{source: ${this.source?this.source.toString():"none"}}`}read(){this._sourceStarted||(this._sourceStarted=!0);const Z=this.source;let G=null;if(!this.done&&Z){const W=Z[DESTINATION];(G=W.readAt(this._readPosition))!==null?this._readPosition++:this.readable=!1,W.endsAt(this._readPosition)&&this.close()}return G}_end(Z){const G=this.source,W=G?.[DESTINATION];W&&W.unregister(this),BufferedIterator.prototype._end.call(this,Z)}}class HistoryReader{constructor(Z){if(this._history=[],this._trackers=new Set,this._source=Z,!Z.done){const G=()=>{for(const U of this._trackers)U.readable=!0},W=U=>{for(const J of this._trackers)J.emit("error",U)},F=()=>{for(const U of this._trackers)U._sourceStarted!==!1&&U._readPosition===this._history.length&&U.close();this._trackers.clear(),Z.removeListener("end",F),Z.removeListener("error",W),Z.removeListener("readable",G)};Z.on("end",F),Z.on("error",W),Z.on("readable",G)}}register(Z){this._source.done||this._trackers.add(Z)}unregister(Z){this._trackers.delete(Z)}readAt(Z){let G=null;return Z<this._history.length?G=this._history[Z]:!this._source.done&&(G=this._source.read())!==null&&(this._history[Z]=G),G}endsAt(Z){return this._source.done&&this._history.length===Z}}class WrappingIterator extends AsyncIterator{constructor(Z,G){super(),this._source=null,this._destroySource=G?.destroySource!==!1,isPromise(Z)?(this._source=new AsyncIterator,Z.then(W=>{this._source=null,this.source=W}).catch(W=>this.emit("error",W))):Z&&(this.source=Z)}set source(Z){let G=Z;if(this._source!==null)throw new Error("The source cannot be changed after it has been set");if(isIterable(G)&&(G=G[Symbol.iterator]()),isIterator(G)){let W=G;G=new eventsExports.EventEmitter,G.read=()=>{if(W!==null){let F;for(;!(F=W.next()).done;)if(F.value!==null)return F.value;W=null,this.close()}return null}}else G=ensureSourceAvailable(G);if(this.done){this._destroySource&&isFunction$1(G.destroy)&&G.destroy();return}G[DESTINATION]=this,G.on("end",destinationClose),G.on("error",destinationEmitError),G.on("readable",destinationSetReadable),this._source=G,this.readable=G.readable!==!1}read(){if(this._source!==null&&this._source.readable!==!1){const Z=this._source.read();if(Z!==null)return Z;this.readable=!1}return null}_end(Z=!1){this._source!==null&&(this._source.removeListener("end",destinationClose),this._source.removeListener("error",destinationEmitError),this._source.removeListener("readable",destinationSetReadable),delete this._source[DESTINATION],this._destroySource&&isFunction$1(this._source.destroy)&&this._source.destroy(),this._source=null),super._end(Z)}}function wrap(X,Z){if(Z&&("autoStart"in Z||"optional"in Z||"source"in Z||"maxBufferSize"in Z))return X&&!isEventEmitter(X)&&(X=new WrappingIterator(X)),new TransformIterator(X,Z);if(!X)return empty();if(isPromise(X))return new WrappingIterator(X,Z);if(X instanceof AsyncIterator)return X;if(Array.isArray(X))return fromArray(X);if(isIterable(X)||isIterator(X)||isEventEmitter(X))return new WrappingIterator(X,Z);throw new TypeError(`Invalid source: ${X}`)}function empty(){return new EmptyIterator}function single(X){return new SingletonIterator(X)}function fromArray(X){return new ArrayIterator(X)}function fromIterator(X){return new WrappingIterator(X)}function fromIterable(X){return new WrappingIterator(X)}function union(X){return new UnionIterator(X)}function range(X,Z,G){return new IntegerIterator({start:X,end:Z,step:G})}function bind(X,Z){return Z?X.bind(Z):X}function isFunction$1(X){return typeof X=="function"}function isEventEmitter(X){return isFunction$1(X?.on)}function isPromise(X){return isFunction$1(X?.then)}function isSourceExpression(X){return X&&(isEventEmitter(X)||isPromise(X)||isFunction$1(X))}function isIterable(X){return X&&Symbol.iterator in X}function isIterator(X){return isFunction$1(X?.next)}const __QUADSTORE_COMUNICA_EXTERNAL_MODULE_asynciterator__=Object.freeze(Object.defineProperty({__proto__:null,ArrayIterator,AsyncIterator,BufferedIterator,CLOSED,CLOSING,ClonedIterator,DESTINATION,DESTROYED,ENDED,EmptyIterator,INIT,IntegerIterator,LinkedList,MappingIterator,MultiTransformIterator,OPEN,SimpleTransformIterator,SingletonIterator,TransformIterator,UnionIterator,WrappingIterator,empty,fromArray,fromIterable,fromIterator,getTaskScheduler,identity:identity$3,isEventEmitter,isFunction:isFunction$1,isIterable,isIterator,isPromise,isSourceExpression,range,scheduleTask,setTaskScheduler,single,union,wrap},Symbol.toStringTag,{value:"Module"})),isObject$1=X=>typeof X=="object"&&X!==null,isAbstractLevel=X=>isObject$1(X)&&typeof X.open=="function"&&typeof X.batch=="function",ensureAbstractLevel=(X,Z)=>{if(!isAbstractLevel(X))throw new Error(`${Z} is not an AbstractLevel instance`)},streamToArray=X=>new Promise((Z,G)=>{const W=[],F=D=>{W.push(D)},U=()=>{X.removeListener("data",F),X.removeListener("error",Y),X.destroy()},J=()=>{U(),Z(W)},Y=D=>{U(),G(D)};X.on("error",Y),X.on("end",J),X.on("data",F)}),arrStartsWith=(X,Z)=>{for(let G=0;G<Z.length;G+=1)if(Z[G]!==X[G])return!1;return!0},RESOLVED=Promise.resolve(),emptyObject={},boundary="􏿿",separator="\0\0",defaultIndexes=[["subject","predicate","object","graph"],["object","graph","subject","predicate"],["graph","subject","predicate","object"],["subject","object","predicate","graph"],["predicate","object","graph","subject"],["graph","predicate","object","subject"]],levelPutOpts={keyEncoding:"utf8",valueEncoding:"view"},levelDelOpts={keyEncoding:"utf8"},emptyValue=new Uint8Array(0),consumeOneByOne=async(X,Z)=>new Promise((G,W)=>{let F,U=!1,J=!1;const Y=()=>{if(J=!0,(F=X.read())!==null){Promise.resolve(Z(F)).then(Y).catch(D);return}J=!1,U&&G()},D=te=>{W(te),q()},Q=()=>{U=!0,J||G(),q()},ee=()=>{J||Y()},q=()=>{X.removeListener("end",Q),X.removeListener("error",D),X.removeListener("readable",ee),typeof X.destroy=="function"&&X.destroy()};X.on("end",Q),X.on("error",D),X.on("readable",ee),X.readable!==!1&&Y()}),consumeInBatches=async(X,Z,G)=>new Promise((W,F)=>{let U=0,J=!1,Y=!1,D=new Array(Z);const Q=()=>{if(ce(),U>0){Promise.resolve(G(D.slice(0,U))).then(W).catch(q);return}W()},ee=()=>{Y=!0,J||Q()},q=le=>{ce(),F(le)},te=()=>{J||ne()};let ie=null;const ne=()=>{if(J=!0,Y){Q();return}for(;U<Z&&(ie=X.read())!==null;)D[U++]=ie;if(ie===null){J=!1;return}U===Z&&(Promise.resolve(G(D.slice())).then(ne).catch(q),U=0)},ce=()=>{X.removeListener("end",ee),X.removeListener("error",q),X.removeListener("readable",te),typeof X.destroy=="function"&&X.destroy()};X.on("end",ee),X.on("error",q),X.on("readable",te),X.readable!==!1&&ne()});let IDX=256;const HEX=[];for(;IDX--;)HEX[IDX]=(IDX+256).toString(16).substring(1);const createUid=X=>{X=X||16;let Z="",G=0;return()=>{if(!Z||G===256){for(Z="",G=(1+X)/2|0;G--;)Z+=HEX[256*Math.random()|0];Z=Z.substring(G=0,X-2)}return Z+HEX[G++]}},uid=createUid(11);class LevelIterator extends BufferedIterator{level;mapFn;levelEnded;constructor(Z,G){super({maxBufferSize:64}),this.mapFn=G,this.level=Z,this.levelEnded=!1}_read(Z,G){const W={remaining:Z};W.next=this._onNextValue.bind(this,W,G),this.level.next(W.next)}_onNextValue(Z,G,W,F,U){if(W){G(W);return}if(F===void 0&&U===void 0){this.close(),this.levelEnded=!0,G();return}if(this._push(this.mapFn(F,U)),Z.remaining-=1,Z.remaining===0){G();return}this.level.next(Z.next)}_endLevel(Z){if(this.levelEnded){Z();return}this.level.close(G=>{G||(this.levelEnded=!0),Z(G)})}_end(Z){this.ended||(super._end(Z),this._endLevel(G=>{G&&this.emit("error",G)}))}_destroy(Z,G){if(this.destroyed){G();return}this._endLevel(W=>{if(W){G(W);return}super._destroy(Z,G)})}}const xsd="http://www.w3.org/2001/XMLSchema#",string=`${xsd}string`,dateTime=`${xsd}dateTime`,integer=`${xsd}integer`,decimal=`${xsd}decimal`,double=`${xsd}double`,nonPositiveInteger=`${xsd}nonPositiveInteger`,negativeInteger=`${xsd}negativeInteger`,long=`${xsd}long`,int=`${xsd}int`,short=`${xsd}short`,byte=`${xsd}byte`,nonNegativeInteger=`${xsd}nonNegativeInteger`,unsignedLong=`${xsd}unsignedLong`,unsignedInt=`${xsd}unsignedInt`,unsignedShort=`${xsd}unsignedShort`,unsignedByte=`${xsd}unsignedByte`,positiveInteger=`${xsd}positiveInteger`,sliceString=(X,Z,G)=>X.slice(Z,Z+G),padNumStart=X=>{if(X<10)return"000"+X;if(X<100)return"00"+X;if(X<1e3)return"0"+X;if(X<1e4)return""+X;throw new Error("too long: "+X)},join=(X,Z,G)=>{let W=""+X;return Z<10?W+="00"+Z:Z<100?W+="0"+Z:W+=Z,W+=G.toFixed(17),W},ZERO=join(3,0,0),NEG_INF=join(0,0,0),POS_INF=join(6,0,0),encode=X=>{let Z=typeof X!="number"?parseFloat(X):X;if(Number.isNaN(Z))throw new Error("Cannot serialize NaN");if(Z===-1/0)return NEG_INF;if(Z===1/0)return POS_INF;if(Z===0)return ZERO;let G=0,W=0;for(Z<0&&(W=1,Z*=-1);Z>10;)Z/=10,G+=1;for(;Z<1;)Z*=10,G-=1;return W===1?G>=0?join(1,999-G,10-Z):join(2,G*-1,10-Z):G<0?join(4,999+G,Z):join(5,G,Z)},namedNodeWriter={write(X,Z,G){const W=G.compactIri(X.value);Z.lengths=padNumStart(W.length),Z.value=W}},namedNodeReader={read(X,Z,G,W){const{keyOffset:F,lengthsOffset:U}=Z,J=parseInt(sliceString(X,U,4));return Z.lengthsOffset+=4,Z.keyOffset+=J,G.namedNode(W.expandTerm(sliceString(X,F,J)))}},blankNodeWriter={write(X,Z){Z.lengths=padNumStart(X.value.length),Z.value=X.value}},blankNodeReader={read(X,Z,G){const{keyOffset:W,lengthsOffset:F}=Z,U=parseInt(sliceString(X,F,4));return Z.lengthsOffset+=4,Z.keyOffset+=U,G.blankNode(sliceString(X,W,U))}},genericLiteralWriter={write(X,Z){Z.lengths=padNumStart(X.value.length)+padNumStart(X.datatype.value.length),Z.value=X.datatype.value+separator+X.value}},genericLiteralReader={read(X,Z,G,W){const{keyOffset:F,lengthsOffset:U}=Z,J=parseInt(sliceString(X,U,4)),Y=parseInt(sliceString(X,U+4,4));return Z.lengthsOffset+=8,Z.keyOffset+=J+Y+separator.length,G.literal(sliceString(X,F+Y+separator.length,J),G.namedNode(sliceString(X,F,Y)))}},stringLiteralWriter={write(X,Z){Z.lengths=padNumStart(X.value.length),Z.value=X.value}},stringLiteralReader={read(X,Z,G){const{keyOffset:W,lengthsOffset:F}=Z,U=parseInt(sliceString(X,F,4));return Z.lengthsOffset+=4,Z.keyOffset+=U,G.literal(sliceString(X,W,U))}},langStringLiteralWriter={write(X,Z){Z.lengths=padNumStart(X.value.length)+padNumStart(X.language.length),Z.value=X.language+separator+X.value}},langStringLiteralReader={read(X,Z,G,W){const{keyOffset:F,lengthsOffset:U}=Z,J=parseInt(sliceString(X,U,4)),Y=parseInt(sliceString(X,U+4,4));return Z.lengthsOffset+=8,Z.keyOffset+=J+Y+separator.length,G.literal(sliceString(X,F+Y+separator.length,J),sliceString(X,F,Y))}},numericLiteralWriter={write(X,Z,G,W,F){Z.lengths=padNumStart(X.value.length)+padNumStart(X.datatype.value.length)+padNumStart(F.length),W?Z.value=F:Z.value=F+separator+X.datatype.value+separator+X.value}},numericLiteralReader={read(X,Z,G,W){const{keyOffset:F,lengthsOffset:U}=Z,J=parseInt(sliceString(X,U,4)),Y=parseInt(sliceString(X,U+4,4)),D=parseInt(sliceString(X,U+8,4));return Z.lengthsOffset+=12,Z.keyOffset+=D+Y+J+separator.length*2,G.literal(sliceString(X,F+D+separator.length+Y+separator.length,J),G.namedNode(sliceString(X,F+D+separator.length,Y)))}},defaultGraphWriter={write(X,Z){Z.value="dg",Z.lengths="2"}},defaultGraphReader={read(X,Z,G,W){return Z.keyOffset+=2,Z.lengthsOffset+=1,G.defaultGraph()}},termWriter={write(X,Z,G){switch(X.termType){case"NamedNode":Z.type="0",namedNodeWriter.write(X,Z,G);break;case"BlankNode":Z.type="1",blankNodeWriter.write(X,Z,G);break;case"DefaultGraph":Z.type="6",defaultGraphWriter.write(X,Z,G);break;case"Literal":if(X.language)Z.type="4",langStringLiteralWriter.write(X,Z,G);else if(X.datatype)switch(X.datatype.value){case string:Z.type="3",stringLiteralWriter.write(X,Z,G);break;case integer:case double:case decimal:case nonPositiveInteger:case negativeInteger:case long:case int:case short:case byte:case nonNegativeInteger:case unsignedLong:case unsignedInt:case unsignedShort:case unsignedByte:case positiveInteger:Z.type="5",numericLiteralWriter.write(X,Z,G,!1,encode(X.value));break;case dateTime:Z.type="7",numericLiteralWriter.write(X,Z,G,!1,encode(new Date(X.value).valueOf()));break;default:Z.type="2",genericLiteralWriter.write(X,Z,G)}else Z.type="3",stringLiteralWriter.write(X,Z,G)}}},termReader={read(X,Z,G,W){let F;const U=X.charAt(Z.lengthsOffset);switch(Z.lengthsOffset+=1,U){case"0":F=namedNodeReader.read(X,Z,G,W);break;case"1":F=blankNodeReader.read(X,Z,G,W);break;case"2":F=genericLiteralReader.read(X,Z,G,W);break;case"3":F=stringLiteralReader.read(X,Z,G,W);break;case"4":F=langStringLiteralReader.read(X,Z,G,W);break;case"5":F=numericLiteralReader.read(X,Z,G,W);break;case"6":F=defaultGraphReader.read(X,Z,G,W);break;case"7":F=numericLiteralReader.read(X,Z,G,W);break;default:throw new Error(`Unexpected encoded term type "${U}"`)}return F}},twoStepsQuadWriter={subject:{type:"",value:"",lengths:""},predicate:{type:"",value:"",lengths:""},object:{type:"",value:"",lengths:""},graph:{type:"",value:"",lengths:""},ingest(X,Z){return termWriter.write(X.subject,this.subject,Z),termWriter.write(X.predicate,this.predicate,Z),termWriter.write(X.object,this.object,Z),termWriter.write(X.graph,this.graph,Z),this},write(X,Z){let G=X,W="";for(let F=0,U;F<Z.length;F+=1)U=this[Z[F]],G+=U.value+separator,W+=U.type+U.lengths;return G+W+padNumStart(W.length)}},quadReader={subject:null,predicate:null,object:null,graph:null,keyOffset:0,lengthsOffset:0,read(X,Z,G,W,F){this.lengthsOffset=X.length-parseInt(X.slice(-4))-4,this.keyOffset=Z;for(let U=0,J;U<G.length;U+=1)J=G[U],this[J]=termReader.read(X,this,W,F),this.keyOffset+=separator.length;return W.quad(this.subject,this.predicate,this.object,this.graph)}},serialized={type:"",value:"",lengths:""},patternLiteralWriter={write(X,Z){if(X.language){langStringLiteralWriter.write(X,serialized,Z);return}if(X.datatype)switch(X.datatype.value){case string:stringLiteralWriter.write(X,serialized,Z);return;case integer:case double:case decimal:case nonPositiveInteger:case negativeInteger:case long:case int:case short:case byte:case nonNegativeInteger:case unsignedLong:case unsignedInt:case unsignedShort:case unsignedByte:case positiveInteger:numericLiteralWriter.write(X,serialized,Z,!0,encode(X.value));return;case dateTime:numericLiteralWriter.write(X,serialized,Z,!0,encode(new Date(X.value).valueOf()));return;default:genericLiteralWriter.write(X,serialized,Z);return}stringLiteralWriter.write(X,serialized,Z)}},writePattern=(X,Z,G)=>{let W=Z.prefix,F=Z.prefix,U=!0,J=!0,Y=!1,D=!1,Q=Object.entries(X).filter(([q,te])=>te).length;if(Q===0)return F+=boundary,{gt:W,lt:F,gte:U,lte:J,order:Z.terms,index:Z};let ee=0;for(;ee<Z.terms.length&&Q>0;ee+=1){const q=X[Z.terms[ee]];if(!q||Y||D)return null;switch(q.termType){case"Range":Y=!0,q.gt?(patternLiteralWriter.write(q.gt,G),W+=serialized.value,U=!1):q.gte&&(patternLiteralWriter.write(q.gte,G),W+=serialized.value,U=!0),q.lt?(patternLiteralWriter.write(q.lt,G),F+=serialized.value,J=!1):q.lte&&(patternLiteralWriter.write(q.lte,G),F+=serialized.value,J=!0);break;case"Literal":D=!0,patternLiteralWriter.write(q,G),W+=serialized.value,U=!0,patternLiteralWriter.write(q,G),F+=serialized.value,J=!0;break;case"NamedNode":namedNodeWriter.write(q,serialized,G),W+=serialized.value,U=!0,namedNodeWriter.write(q,serialized,G),F+=serialized.value,J=!0;break;case"BlankNode":blankNodeWriter.write(q,serialized,G),W+=serialized.value,U=!0,blankNodeWriter.write(q,serialized,G),F+=serialized.value,J=!0;break;case"DefaultGraph":defaultGraphWriter.write(q,serialized,G),W+=serialized.value,U=!0,defaultGraphWriter.write(q,serialized,G),F+=serialized.value,J=!0;break}Q-=1,Q>0&&ee<Z.terms.length-1&&(W+=separator,F+=separator)}return J?Y||D?F+=boundary:F+=separator+boundary:F+=separator,U?!Y&&!D&&(W+=separator):Y||D?W+=boundary:W+=separator+boundary,{gt:W,lt:F,gte:U,lte:J,order:Z.terms.slice(Y?ee-1:1),index:Z}};var sortedSetExports={},sortedSet={get exports(){return sortedSetExports},set exports(X){sortedSetExports=X}};(function(X,Z){(function(G,W){X.exports=W()})(commonjsGlobal,function(){class G{constructor(re){if(re?.strategy==null)throw"Must pass options.strategy, a strategy";if(re?.comparator==null)throw"Must pass options.comparator, a comparator";if(re?.onInsertConflict==null)throw"Must pass options.onInsertConflict, a function";this.priv=new re.strategy(re),this.length=0}insert(re){return this.priv.insert(re),this.length+=1,this}remove(re){return this.priv.remove(re),this.length-=1,this}clear(){return this.priv.clear(),this.length=0,this}contains(re){return this.priv.contains(re)}toArray(){return this.priv.toArray()}forEach(re,Ze){return this.priv.forEachImpl(re,this,Ze),this}map(re,Ze){const Ge=[];return this.forEach(function(ve,Te,xe){return Ge.push(re.call(Ze,ve,Te,xe))}),Ge}filter(re,Ze){const Ge=[];return this.forEach(function(ve,Te,xe){if(re.call(Ze,ve,Te,xe))return Ge.push(ve)}),Ge}every(re,Ze){let Ge=!0;return this.forEach(function(ve,Te,xe){Ge&&!re.call(Ze,ve,Te,xe)&&(Ge=!1)}),Ge}some(re,Ze){let Ge=!1;return this.forEach(function(ve,Te,xe){!Ge&&re.call(Ze,ve,Te,xe)&&(Ge=!0)}),Ge}findIterator(re){return this.priv.findIterator(re)}beginIterator(){return this.priv.beginIterator()}endIterator(){return this.priv.endIterator()}}class W{constructor(re,Ze){this.priv=re,this.index=Ze,this.data=this.priv.data}hasNext(){return this.index<this.data.length}hasPrevious(){return this.index>0}value(){return this.index<this.data.length?this.data[this.index]:null}setValue(re){if(!this.priv.options.allowSetValue)throw"Must set options.allowSetValue";if(!this.hasNext())throw"Cannot set value at end of set";return this.data[this.index]=re}next(){return this.index>=this.data.length?null:new W(this.priv,this.index+1)}previous(){return this.index<=0?null:new W(this.priv,this.index-1)}}const F=(ye,re,Ze)=>{let Ge=0,ve=ye.length;for(;Ge<ve;){const Te=Ge+ve>>>1;Ze(ye[Te],re)<0?Ge=Te+1:ve=Te}return Ge};class U{constructor(re){this.options=re,this.onInsertConflict=this.options.onInsertConflict,this.comparator=this.options.comparator,this.data=[]}toArray(){return this.data}insert(re){const Ze=F(this.data,re,this.comparator);return this.data[Ze]!==void 0&&this.comparator(this.data[Ze],re)===0?this.data.splice(Ze,1,this.onInsertConflict(this.data[Ze],re)):this.data.splice(Ze,0,re)}remove(re){const Ze=F(this.data,re,this.comparator);if(this.comparator(this.data[Ze],re)!==0)throw"Value not in set";return this.data.splice(Ze,1)}clear(){return this.data.length=0}contains(re){const Ze=F(this.data,re,this.comparator);return this.index!==this.data.length&&this.comparator(this.data[Ze],re)===0}forEachImpl(re,Ze,Ge){const ve=this.data,Te=ve.length;for(let xe=0;xe<Te;xe++)re.call(Ge,ve[xe],xe,Ze)}findIterator(re){const Ze=F(this.data,re,this.comparator);return new W(this,Ze)}beginIterator(){return new W(this,0)}endIterator(){return new W(this,this.data.length)}}const J=(ye,re)=>{for(;re[ye]!==null;){const Ze=re;re=re[ye],re._iteratorParentNode=Ze}return re},Y=(ye,re)=>{let Ze,Ge;if(re[ye]!==null)Ze=re,re=re[ye],re._iteratorParentNode=Ze,Ge=ye==="left"?"right":"left",re=J(Ge,re);else{for(;(Ze=re._iteratorParentNode)!==null&&Ze[ye]===re;)re=Ze;re=Ze}return re};class D{constructor(re,Ze){this.tree=re,this.node=Ze}next(){if(this.node===null)return null;{const re=Y("right",this.node);return new D(this.tree,re)}}previous(){if(this.node===null){if(this.tree.root===null)return null;{this.tree.root._iteratorParentNode=null;const re=J("right",this.tree.root);return new D(this.tree,re)}}else{const re=Y("left",this.node);return re===null?null:new D(this.tree,re)}}hasNext(){return this.node!==null}hasPrevious(){return this.previous()!==null}value(){return this.node===null?null:this.node.value}setValue(re){if(!this.tree.options.allowSetValue)throw"Must set options.allowSetValue";if(!this.hasNext())throw"Cannot set value at end of set";return this.node.value=re}}D.find=function(ye,re,Ze){const Ge=ye.root;Ge!=null&&(Ge._iteratorParentNode=null);let ve=Ge,Te=null;for(;ve!==null;){const xe=Ze(re,ve.value);if(xe===0)break;if(xe<0){if(ve.left===null)break;Te=ve,ve.left._iteratorParentNode=ve,ve=ve.left}else if(ve.right!==null)ve.right._iteratorParentNode=ve,ve=ve.right;else{ve=Te;break}}return new D(ye,ve)},D.left=ye=>{if(ye.root===null)return new D(ye,null);{ye.root._iteratorParentNode=null;const re=J("left",ye.root);return new D(ye,re)}},D.right=ye=>new D(ye,null);const Q=(ye,re)=>{ye!==null&&(Q(ye.left,re),re(ye.value),Q(ye.right,re))};class ee{toArray(){const re=[];return Q(this.root,function(Ze){return re.push(Ze)}),re}clear(){return this.root=null}forEachImpl(re,Ze,Ge){let ve=0;Q(this.root,function(Te){re.call(Ge,Te,ve,Ze),ve+=1})}contains(re){const Ze=this.comparator;let Ge=this.root;for(;Ge!==null;){const ve=Ze(re,Ge.value);if(ve===0)break;ve<0?Ge=Ge.left:Ge=Ge.right}return Ge!==null&&Ze(Ge.value,re)===0}findIterator(re){return D.find(this,re,this.comparator)}beginIterator(){return D.left(this)}endIterator(){return D.right(this)}}class q{constructor(re){this.value=re,this.left=null,this.right=null}}const te=(ye,re)=>{for(;ye[re]!==null;)ye=ye[re];return ye},ie=(ye,re,Ze)=>{if(ye===null)throw"Value not in set";const Ge=Ze(re,ye.value);if(Ge<0)ye.left=ie(ye.left,re,Ze);else if(Ge>0)ye.right=ie(ye.right,re,Ze);else if(ye.left===null&&ye.right===null)ye=null;else if(ye.right===null)ye=ye.left;else if(ye.left===null)ye=ye.right;else{const ve=te(ye.right,"left");ye.value=ve.value,ye.right=ie(ye.right,ve.value,Ze)}return ye};class ne extends ee{constructor(re){super(),this.options=re,this.comparator=this.options.comparator,this.onInsertConflict=this.options.onInsertConflict,this.root=null}insert(re){const Ze=this.comparator;if(this.root!==null){let Ge=this.root,ve=null;for(;;){const Te=Ze(re,Ge.value);if(Te===0){Ge.value=this.onInsertConflict(Ge.value,re);return}else{if(ve=Te<0?"left":"right",Ge[ve]===null)break;Ge=Ge[ve]}}return Ge[ve]=new q(re)}else return this.root=new q(re)}remove(re){return this.root=ie(this.root,re,this.comparator)}}class ce{constructor(re){this.value=re,this.left=null,this.right=null,this.isRed=!0}}const le=ye=>{const re=ye.right;return ye.right=re.left,re.left=ye,re.isRed=ye.isRed,ye.isRed=!0,re},se=ye=>{const re=ye.left;return ye.left=re.right,re.right=ye,re.isRed=ye.isRed,ye.isRed=!0,re},pe=ye=>{ye.isRed=!ye.isRed,ye.left.isRed=!ye.left.isRed,ye.right.isRed=!ye.right.isRed},ue=ye=>(pe(ye),ye.right!==null&&ye.right.left!==null&&ye.right.left.isRed&&(ye.right=se(ye.right),ye=le(ye),pe(ye)),ye),ae=ye=>(pe(ye),ye.left!==null&&ye.left.left!==null&&ye.left.left.isRed&&(ye=se(ye),pe(ye)),ye),de=(ye,re,Ze,Ge)=>{if(ye===null)return new ce(re);const ve=Ze(re,ye.value);return ve===0?ye.value=Ge(ye.value,re):ve<0?ye.left=de(ye.left,re,Ze,Ge):ye.right=de(ye.right,re,Ze,Ge),ye.right!==null&&ye.right.isRed&&!(ye.left!==null&&ye.left.isRed)&&(ye=le(ye)),ye.left!==null&&ye.left.isRed&&ye.left.left!==null&&ye.left.left.isRed&&(ye=se(ye)),ye.left!==null&&ye.left.isRed&&ye.right!==null&&ye.right.isRed&&pe(ye),ye},be=ye=>{for(;ye.left!==null;)ye=ye.left;return ye},he=ye=>(ye.right!==null&&ye.right.isRed&&(ye=le(ye)),ye.left!==null&&ye.left.isRed&&ye.left.left!==null&&ye.left.left.isRed&&(ye=se(ye)),ye.left!==null&&ye.left.isRed&&ye.right!==null&&ye.right.isRed&&pe(ye),ye),Le=ye=>ye.left===null?null:(!ye.left.isRed&&!(ye.left.left!==null&&ye.left.left.isRed)&&(ye=ue(ye)),ye.left=Le(ye.left),he(ye)),Xe=(ye,re,Ze)=>{if(ye===null)throw"Value not in set";if(Ze(re,ye.value)<0){if(ye.left===null)throw"Value not in set";!ye.left.isRed&&!(ye.left.left!==null&&ye.left.left.isRed)&&(ye=ue(ye)),ye.left=Xe(ye.left,re,Ze)}else{if(ye.left!==null&&ye.left.isRed&&(ye=se(ye)),ye.right===null){if(Ze(re,ye.value)===0)return null;throw"Value not in set"}!ye.right.isRed&&!(ye.right.left!==null&&ye.right.left.isRed)&&(ye=ae(ye)),Ze(re,ye.value)===0?(ye.value=be(ye.right).value,ye.right=Le(ye.right)):ye.right=Xe(ye.right,re,Ze)}return ye!==null&&(ye=he(ye)),ye};class We extends ee{constructor(re){super(),this.options=re,this.comparator=this.options.comparator,this.onInsertConflict=this.options.onInsertConflict,this.root=null}insert(re){this.root=de(this.root,re,this.comparator,this.onInsertConflict),this.root.isRed=!1}remove(re){this.root=Xe(this.root,re,this.comparator),this.root!==null&&(this.root.isRed=!1)}}const fe={OnInsertConflictThrow:(ye,re)=>{throw new Error("Value already in set")},OnInsertConflictReplace:(ye,re)=>re,OnInsertConflictIgnore:(ye,re)=>ye};class Re extends G{constructor(re){re||(re={}),re.strategy||(re.strategy=We),re.comparator||(re.comparator=function(Ze,Ge){return(Ze||0)-(Ge||0)}),re.onInsertConflict||(re.onInsertConflict=fe.OnInsertConflictThrow),super(re)}}return Re.ArrayStrategy=U,Re.BinaryTreeStrategy=ne,Re.RedBlackTreeStrategy=We,Object.assign(Re,fe),Re})})(sortedSet);class SortingIterator extends AsyncIterator{constructor(Z,G,W,F){super();let U;const J=()=>{const Y=new sortedSetExports({comparator:G}),D=()=>{Z.removeListener("data",Q),Z.removeListener("error",ee),Z.removeListener("end",q),Z.destroy()},Q=te=>{Y.insert(W(te))},ee=te=>{D(),this.emit("error",te)},q=()=>{D(),U=Y.beginIterator(),this.readable=!0};Z.on("data",Q),Z.on("error",ee),Z.on("end",q)};this.read=()=>{if(U){const Y=U.value();return Y===null?(this.close(),null):(U=U.next(),F(Y))}return this.readable=!1,null},RESOLVED.then(J).catch(Y=>{RESOLVED.then(()=>this.emit("error",Y))})}}const SORTING_KEY=Symbol(),compareSortableQuadsReverse=(X,Z)=>X[SORTING_KEY]>Z[SORTING_KEY]?-1:1,compareSortableQuads=(X,Z)=>X[SORTING_KEY]>Z[SORTING_KEY]?1:-1,emitSortableQuad=X=>X,getLevelQueryForIndex=(X,Z,G,W)=>{const F=writePattern(X,Z,G);if(F===null)return null;const U={[F.gte?"gte":"gt"]:F.gt,[F.lte?"lte":"lt"]:F.lt,keys:!0,values:!1,keyEncoding:"utf8"};return typeof W.limit=="number"&&(U.limit=W.limit),typeof W.reverse=="boolean"&&(U.reverse=W.reverse),{level:U,order:F.order,index:F.index}},getLevelQuery=(X,Z,G,W)=>{for(let F=0,U;F<Z.length;F+=1){U=Z[F];const J=getLevelQueryForIndex(X,U,G,W);if(J!==null&&(!W.order||arrStartsWith(J.order,W.order)))return J}return null},getStream=async(X,Z,G)=>{const{dataFactory:W,prefixes:F,indexes:U}=X,J=getLevelQuery(Z,U,F,G);if(J!==null){const{index:D,level:Q,order:ee}=J;let q=new LevelIterator(X.db.iterator(Q),te=>quadReader.read(te,D.prefix.length,D.terms,W,F));return{type:ResultType.QUADS,order:ee,iterator:q,index:D.terms,resorted:!1}}const Y=getLevelQuery(Z,U,F,emptyObject);if(Y!==null){const{index:D,level:Q,order:ee}=Y;let q=new LevelIterator(X.db.iterator(Q),te=>quadReader.read(te,D.prefix.length,D.terms,W,F));if(typeof G.order<"u"&&!arrStartsWith(G.order,ee)){const te=ne=>(ne[SORTING_KEY]=twoStepsQuadWriter.ingest(ne,F).write("",G.order)+separator,ne),ie=G.reverse===!0?compareSortableQuadsReverse:compareSortableQuads;if(q=new SortingIterator(q,ie,te,emitSortableQuad),typeof G.limit<"u"){const ne=function(){this.removeListener("end",ne),this.removeListener("error",ne),this.destroy()};q=q.take(G.limit).on("end",ne).on("error",ne)}}return{type:ResultType.QUADS,order:G.order||ee,iterator:q,index:D.terms,resorted:!0}}throw new Error(`No index compatible with pattern ${JSON.stringify(Z)} and options ${JSON.stringify(G)}`)},getApproximateSize=async(X,Z,G)=>{if(!X.db.approximateSize)return{type:ResultType.APPROXIMATE_SIZE,approximateSize:1/0};const{indexes:W,prefixes:F}=X,U=getLevelQuery(Z,W,F,G);if(U===null)throw new Error(`No index compatible with pattern ${JSON.stringify(Z)} and options ${JSON.stringify(G)}`);const{level:J}=U,Y=J.gte||J.gt,D=J.lte||J.lt;return new Promise((Q,ee)=>{X.db.approximateSize(Y,D,(q,te)=>{if(q){ee(q);return}Q({type:ResultType.APPROXIMATE_SIZE,approximateSize:Math.max(1,te)})})})};class Scope{id;blankNodes;factory;static async init(Z){return new Scope(Z.dataFactory,uid(),new Map)}static async load(Z,G){const W=Scope.getLevelIteratorOpts(!1,!0,G),F=new LevelIterator(Z.db.iterator(W),(Y,D)=>D),U=new Map,{dataFactory:J}=Z;return await consumeOneByOne(F,Y=>{const{originalLabel:D,randomLabel:Q}=JSON.parse(Y);U.set(D,J.blankNode(Q))}),new Scope(J,G,U)}static async delete(Z,G){const W=Z.db.batch(),F=Scope.getLevelIteratorOpts(!0,!1,G),U=new LevelIterator(Z.db.iterator(F),(J,Y)=>J);await consumeOneByOne(U,J=>{W.del(J)}),await W.write()}static getLevelIteratorOpts(Z,G,W){const F=W?`SCOPE${separator}${W}${separator}`:`SCOPE${separator}`;return{keys:Z,values:G,keyEncoding:"utf8",valueEncoding:"utf8",gte:F,lte:`${F}${boundary}`}}static addMappingToLevelBatch(Z,G,W,F){G.put(`SCOPE${separator}${Z}${separator}${W}`,JSON.stringify({originalLabel:W,randomLabel:F}))}constructor(Z,G,W){this.blankNodes=W,this.factory=Z,this.id=G}parseBlankNode(Z,G){let W=this.blankNodes.get(Z.value);return W||(W=this.factory.blankNode(uid()),this.blankNodes.set(Z.value,W),Scope.addMappingToLevelBatch(this.id,G,Z.value,W.value)),W}parseSubject(Z,G){switch(Z.termType){case"BlankNode":return this.parseBlankNode(Z,G);default:return Z}}parseObject(Z,G){switch(Z.termType){case"BlankNode":return this.parseBlankNode(Z,G);default:return Z}}parseGraph(Z,G){switch(Z.termType){case"BlankNode":return this.parseBlankNode(Z,G);default:return Z}}parseQuad(Z,G){return this.factory.quad(this.parseSubject(Z.subject,G),Z.predicate,this.parseObject(Z.object,G),this.parseGraph(Z.graph,G))}}class Quadstore{db;indexes;id;prefixes;dataFactory;constructor(Z){ensureAbstractLevel(Z.backend,'"opts.backend"'),this.dataFactory=Z.dataFactory,this.db=Z.backend,this.indexes=[],this.id=uid(),(Z.indexes||defaultIndexes).forEach(G=>this._addIndex(G)),this.prefixes=Z.prefixes||{expandTerm:G=>G,compactIri:G=>G}}ensureReady(){if(this.db.status!=="open")throw new Error(`Store is not ready (status: "${this.db.status}"). Did you call store.open()?`)}async open(){this.db.status!=="open"&&await this.db.open()}async close(){this.db.status!=="closed"&&await this.db.close()}toString(){return this.toJSON()}toJSON(){return`[object ${this.constructor.name}::${this.id}]`}_addIndex(Z){const G=Z.map(W=>W.charAt(0).toUpperCase()).join("");this.indexes.push({terms:Z,prefix:G+separator})}async clear(){if(typeof this.db.clear=="function")return new Promise((Z,G)=>{this.db.clear(W=>{W?G(W):Z()})});await this.delStream((await this.getStream({})).iterator,{batchSize:20})}match(Z,G,W,F,U=emptyObject){if(Z&&Z.termType==="Literal")return new EmptyIterator;const J={subject:Z,predicate:G,object:W,graph:F};return wrap(this.getStream(J,U).then(Y=>Y.iterator))}async countQuads(Z,G,W,F,U=emptyObject){if(Z&&Z.termType==="Literal")return 0;const J={subject:Z,predicate:G,object:W,graph:F};return(await this.getApproximateSize(J,U)).approximateSize}import(Z){const G=new eventsExports.EventEmitter;return this.putStream(Z,{}).then(()=>{G.emit("end")}).catch(W=>{G.emit("error",W)}),G}remove(Z){const G=new eventsExports.EventEmitter;return this.delStream(Z,{}).then(()=>G.emit("end")).catch(W=>G.emit("error",W)),G}removeMatches(Z,G,W,F,U=emptyObject){const J=this.match(Z,G,W,F,U);return this.remove(J)}deleteGraph(Z){return this.removeMatches(void 0,void 0,void 0,Z)}async getApproximateSize(Z,G=emptyObject){return await this.ensureReady(),await getApproximateSize(this,Z,G)}_batchPut(Z,G){const{indexes:W,prefixes:F}=this;twoStepsQuadWriter.ingest(Z,F);for(let U=0,J=W.length,Y;U<J;U+=1){Y=W[U];const D=twoStepsQuadWriter.write(Y.prefix,Y.terms);G=G.put(D,emptyValue,levelPutOpts)}return G}async put(Z,G=emptyObject){this.ensureReady();const{indexes:W,db:F}=this;let U=F.batch();return G.scope&&(Z=G.scope.parseQuad(Z,U)),this._batchPut(Z,U),await this.writeBatch(U,G),{type:ResultType.VOID}}async multiPut(Z,G=emptyObject){this.ensureReady();const{indexes:W,db:F}=this;let U=F.batch();for(let J=0,Y=Z.length,D;J<Y;J+=1)D=Z[J],G.scope&&(D=G.scope.parseQuad(D,U)),this._batchPut(D,U);return await this.writeBatch(U,G),{type:ResultType.VOID}}_batchDel(Z,G){const{indexes:W,prefixes:F}=this;twoStepsQuadWriter.ingest(Z,F);for(let U=0,J=W.length,Y;U<J;U+=1){Y=W[U];const D=twoStepsQuadWriter.write(Y.prefix,Y.terms);G=G.del(D,levelDelOpts)}return G}async del(Z,G=emptyObject){this.ensureReady();const W=this.db.batch();return this._batchDel(Z,W),await this.writeBatch(W,G),{type:ResultType.VOID}}async multiDel(Z,G=emptyObject){this.ensureReady();const W=this.db.batch();for(let F=0,U=Z.length,J;F<U;F+=1)J=Z[F],this._batchDel(J,W);return await this.writeBatch(W,G),{type:ResultType.VOID}}async patch(Z,G,W=emptyObject){this.ensureReady();const{indexes:F,db:U}=this,J=U.batch();return this._batchDel(Z,J),this._batchPut(G,J),await this.writeBatch(J,W),{type:ResultType.VOID}}async multiPatch(Z,G,W=emptyObject){this.ensureReady();const{indexes:F,db:U}=this;let J=U.batch();for(let Y=0,D=Z.length,Q;Y<D;Y+=1)Q=Z[Y],this._batchDel(Q,J);for(let Y=0,D=G.length,Q;Y<D;Y+=1)Q=G[Y],this._batchPut(Q,J);return await this.writeBatch(J,W),{type:ResultType.VOID}}async writeBatch(Z,G){G.preWrite&&await G.preWrite(Z),await Z.write()}async get(Z,G=emptyObject){this.ensureReady();const W=await this.getStream(Z,G);return{items:await streamToArray(W.iterator),type:W.type,order:W.order,index:W.index,resorted:W.resorted}}async getStream(Z,G=emptyObject){return this.ensureReady(),await getStream(this,Z,G)}async putStream(Z,G=emptyObject){this.ensureReady();const W=G.batchSize||1;return W===1?await consumeOneByOne(Z,F=>this.put(F,G)):await consumeInBatches(Z,W,F=>this.multiPut(F,G)),{type:ResultType.VOID}}async delStream(Z,G=emptyObject){this.ensureReady();const W=G.batchSize||1;return W===1?await consumeOneByOne(Z,F=>this.del(F)):await consumeInBatches(Z,W,F=>this.multiDel(F)),{type:ResultType.VOID}}async initScope(){return await this.ensureReady(),await Scope.init(this)}async loadScope(Z){return await this.ensureReady(),await Scope.load(this,Z)}async deleteScope(Z){await this.ensureReady(),await Scope.delete(this,Z)}async deleteAllScopes(){await this.ensureReady(),await Scope.delete(this)}}var sparqlalgebrajs={},sparqlAlgebra={},es6=function X(Z,G){if(Z===G)return!0;if(Z&&G&&typeof Z=="object"&&typeof G=="object"){if(Z.constructor!==G.constructor)return!1;var W,F,U;if(Array.isArray(Z)){if(W=Z.length,W!=G.length)return!1;for(F=W;F--!==0;)if(!X(Z[F],G[F]))return!1;return!0}if(Z instanceof Map&&G instanceof Map){if(Z.size!==G.size)return!1;for(F of Z.entries())if(!G.has(F[0]))return!1;for(F of Z.entries())if(!X(F[1],G.get(F[0])))return!1;return!0}if(Z instanceof Set&&G instanceof Set){if(Z.size!==G.size)return!1;for(F of Z.entries())if(!G.has(F[0]))return!1;return!0}if(ArrayBuffer.isView(Z)&&ArrayBuffer.isView(G)){if(W=Z.length,W!=G.length)return!1;for(F=W;F--!==0;)if(Z[F]!==G[F])return!1;return!0}if(Z.constructor===RegExp)return Z.source===G.source&&Z.flags===G.flags;if(Z.valueOf!==Object.prototype.valueOf)return Z.valueOf()===G.valueOf();if(Z.toString!==Object.prototype.toString)return Z.toString()===G.toString();if(U=Object.keys(Z),W=U.length,W!==Object.keys(G).length)return!1;for(F=W;F--!==0;)if(!Object.prototype.hasOwnProperty.call(G,U[F]))return!1;for(F=W;F--!==0;){var J=U[F];if(!X(Z[J],G[J]))return!1}return!0}return Z!==Z&&G!==G},rdfString={},TermUtil$1={};Object.defineProperty(TermUtil$1,"__esModule",{value:!0});TermUtil$1.stringQuadToQuad=TermUtil$1.quadToStringQuad=TermUtil$1.stringToTerm=TermUtil$1.getLiteralLanguage=TermUtil$1.getLiteralType=TermUtil$1.getLiteralValue=TermUtil$1.termToString=void 0;const rdf_data_factory_1$2=rdfDataFactory,FACTORY=new rdf_data_factory_1$2.DataFactory;function termToString(X){if(X)switch(X.termType){case"NamedNode":return X.value;case"BlankNode":return"_:"+X.value;case"Literal":const Z=X;return'"'+Z.value+'"'+(Z.datatype&&Z.datatype.value!=="http://www.w3.org/2001/XMLSchema#string"&&Z.datatype.value!=="http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"?"^^"+Z.datatype.value:"")+(Z.language?"@"+Z.language:"");case"Quad":return`<<${termToString(X.subject)} ${termToString(X.predicate)} ${termToString(X.object)}${X.graph.termType==="DefaultGraph"?"":" "+termToString(X.graph)}>>`;case"Variable":return"?"+X.value;case"DefaultGraph":return X.value}}TermUtil$1.termToString=termToString;function getLiteralValue(X){const Z=/^"([^]*)"/.exec(X);if(!Z)throw new Error(X+" is not a literal");return Z[1]}TermUtil$1.getLiteralValue=getLiteralValue;function getLiteralType(X){const Z=/^"[^]*"(?:\^\^([^"]+)|(@)[^@"]+)?$/.exec(X);if(!Z)throw new Error(X+" is not a literal");return Z[1]||(Z[2]?"http://www.w3.org/1999/02/22-rdf-syntax-ns#langString":"http://www.w3.org/2001/XMLSchema#string")}TermUtil$1.getLiteralType=getLiteralType;function getLiteralLanguage(X){const Z=/^"[^]*"(?:@([^@"]+)|\^\^[^"]+)?$/.exec(X);if(!Z)throw new Error(X+" is not a literal");return Z[1]?Z[1].toLowerCase():""}TermUtil$1.getLiteralLanguage=getLiteralLanguage;function stringToTerm(X,Z){if(Z=Z||FACTORY,!X||!X.length)return Z.defaultGraph();switch(X[0]){case"_":return Z.blankNode(X.substr(2));case"?":if(!Z.variable)throw new Error("Missing 'variable()' method on the given DataFactory");return Z.variable(X.substr(1));case'"':const G=getLiteralLanguage(X),W=Z.namedNode(getLiteralType(X));return Z.literal(getLiteralValue(X),G||W);case"<":default:if(X.startsWith("<<")&&X.endsWith(">>")){const F=X.slice(2,-2).trim();let U=[],J=0,Y=0,D=!1;for(let Q=0;Q<F.length;Q++){const ee=F[Q];if(ee==="<"&&J++,ee===">"){if(J===0)throw new Error("Found closing tag without opening tag in "+X);J--}if(ee==='"'){let q=!1,te=Q;for(;te-- >0&&F[te]==="\\";)q=!q;q||(D=!D)}if(ee===" "&&!D&&J===0){for(U.push(F.slice(Y,Q));F[Q+1]===" ";)Q+=1;Y=Q+1}}if(J!==0)throw new Error("Found opening tag without closing tag in "+X);if(U.push(F.slice(Y,F.length)),U.length!==3&&U.length!==4)throw new Error("Nested quad syntax error "+X);return U=U.map(Q=>Q.startsWith("<")&&!Q.includes(" ")?Q.slice(1,-1):Q),Z.quad(stringToTerm(U[0]),stringToTerm(U[1]),stringToTerm(U[2]),U[3]?stringToTerm(U[3]):void 0)}return Z.namedNode(X)}}TermUtil$1.stringToTerm=stringToTerm;function quadToStringQuad(X){return{subject:termToString(X.subject),predicate:termToString(X.predicate),object:termToString(X.object),graph:termToString(X.graph)}}TermUtil$1.quadToStringQuad=quadToStringQuad;function stringQuadToQuad(X,Z){return Z=Z||FACTORY,Z.quad(stringToTerm(X.subject,Z),stringToTerm(X.predicate,Z),stringToTerm(X.object,Z),stringToTerm(X.graph,Z))}TermUtil$1.stringQuadToQuad=stringQuadToQuad;(function(X){Object.defineProperty(X,"__esModule",{value:!0}),X.termToString=X.stringToTerm=X.stringQuadToQuad=X.quadToStringQuad=X.getLiteralValue=X.getLiteralType=X.getLiteralLanguage=void 0;const Z=TermUtil$1;Object.defineProperty(X,"getLiteralLanguage",{enumerable:!0,get:function(){return Z.getLiteralLanguage}}),Object.defineProperty(X,"getLiteralType",{enumerable:!0,get:function(){return Z.getLiteralType}}),Object.defineProperty(X,"getLiteralValue",{enumerable:!0,get:function(){return Z.getLiteralValue}}),Object.defineProperty(X,"quadToStringQuad",{enumerable:!0,get:function(){return Z.quadToStringQuad}}),Object.defineProperty(X,"stringQuadToQuad",{enumerable:!0,get:function(){return Z.stringQuadToQuad}}),Object.defineProperty(X,"stringToTerm",{enumerable:!0,get:function(){return Z.stringToTerm}}),Object.defineProperty(X,"termToString",{enumerable:!0,get:function(){return Z.termToString}})})(rdfString);var algebra={};(function(X){Object.defineProperty(X,"__esModule",{value:!0}),X.expressionTypes=X.types=void 0,function(Z){Z.ALT="alt",Z.ASK="ask",Z.BGP="bgp",Z.CONSTRUCT="construct",Z.DESCRIBE="describe",Z.DISTINCT="distinct",Z.EXPRESSION="expression",Z.EXTEND="extend",Z.FILTER="filter",Z.FROM="from",Z.GRAPH="graph",Z.GROUP="group",Z.INV="inv",Z.JOIN="join",Z.LEFT_JOIN="leftjoin",Z.LINK="link",Z.MINUS="minus",Z.NOP="nop",Z.NPS="nps",Z.ONE_OR_MORE_PATH="OneOrMorePath",Z.ORDER_BY="orderby",Z.PATH="path",Z.PATTERN="pattern",Z.PROJECT="project",Z.REDUCED="reduced",Z.SEQ="seq",Z.SERVICE="service",Z.SLICE="slice",Z.UNION="union",Z.VALUES="values",Z.ZERO_OR_MORE_PATH="ZeroOrMorePath",Z.ZERO_OR_ONE_PATH="ZeroOrOnePath",Z.COMPOSITE_UPDATE="compositeupdate",Z.DELETE_INSERT="deleteinsert",Z.LOAD="load",Z.CLEAR="clear",Z.CREATE="create",Z.DROP="drop",Z.ADD="add",Z.MOVE="move",Z.COPY="copy"}(X.types||(X.types={})),function(Z){Z.AGGREGATE="aggregate",Z.EXISTENCE="existence",Z.NAMED="named",Z.OPERATOR="operator",Z.TERM="term",Z.WILDCARD="wildcard"}(X.expressionTypes||(X.expressionTypes={}))})(algebra);var factory$2={},Wildcard$2={};let Wildcard$1=class{constructor(){return WILDCARD||this}equals(Z){return Z&&this.termType===Z.termType}};Object.defineProperty(Wildcard$1.prototype,"value",{enumerable:!0,value:"*"});Object.defineProperty(Wildcard$1.prototype,"termType",{enumerable:!0,value:"Wildcard"});var WILDCARD=new Wildcard$1;Wildcard$2.Wildcard=Wildcard$1;var SparqlParser=function(){var X=function(Gt,Zt,Lt,Tt){for(Lt=Lt||{},Tt=Gt.length;Tt--;Lt[Gt[Tt]]=Zt);return Lt},Z=[6,12,13,15,16,28,35,41,50,55,107,117,120,122,123,132,133,138,195,219,224,312,322,323,324,325,326],G=[2,211],W=[107,117,120,122,123,132,133,138,322,323,324,325,326],F=[2,389],U=[1,22],J=[1,31],Y=[13,16,35,195,219,224,312],D=[6,90],Q=[45,46,58],ee=[45,58],q=[1,62],te=[1,64],ie=[1,60],ne=[1,63],ce=[1,69],le=[1,70],se=[26,34,35],pe=[13,16,35,195,219,312],ue=[13,16,312],ae=[119,141,320,327],de=[13,16,119,141,312],be=[1,96],he=[1,100],Le=[1,102],Xe=[119,141,320,321,327],We=[13,16,119,141,312,321],fe=[1,108],Re=[2,253],ye=[1,107],re=[13,16,34,35,87,93,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312],Ze=[6,45,46,58,68,75,78,86,88,90],Ge=[6,13,16,34,45,46,58,68,75,78,86,88,90,312],ve=[6,13,16,26,34,35,37,38,45,46,48,58,68,75,78,86,87,88,90,93,100,116,119,132,133,135,140,167,168,170,173,174,191,195,219,224,226,227,231,235,245,246,250,254,258,271,273,278,295,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328,330,331,333,334,335,336,337,338,339],Te=[34,35,45,46,58],xe=[1,139],Ye=[1,140],ge=[1,151],Me=[1,131],je=[1,125],tt=[1,130],it=[1,132],st=[1,142],qe=[1,143],ot=[1,144],ut=[1,145],dt=[1,147],mt=[1,148],Je=[2,461],Ne=[1,157],ke=[1,158],Ie=[1,159],Ce=[1,152],ze=[1,153],Ee=[1,156],_e=[1,166],He=[1,167],Pe=[1,168],$e=[1,169],we=[1,170],Ue=[1,171],et=[1,172],at=[1,173],Ve=[1,174],oe=[1,175],me=[1,165],Se=[1,160],Fe=[1,161],Ke=[1,162],Ae=[1,163],rt=[1,164],vt=[6,13,16,34,35,46,48,87,90,93,119,167,168,170,173,174,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328],Vt=[2,312],Wt=[1,199],ft=[1,197],Rt=[6,191],Yt=[2,329],ct=[2,317],xt=[45,135],Qe=[6,48,78,86,88,90],nt=[2,257],Xt=[1,213],St=[1,215],Nt=[6,48,75,78,86,88,90],jt=[2,255],sn=[1,221],Ht=[1,233],an=[1,231],Ot=[1,239],vn=[1,232],tn=[1,237],Qt=[1,238],En=[6,68,75,78,86,88,90],gn=[37,38,191,250,278],dn=[37,38,191,250,254,278],pn=[37,38,191,250,254,258,271,273,278,295,306,307,308,309,310,311,334,335,336,337,338,339],$t=[26,37,38,191,250,254,258,271,273,278,295,306,307,308,309,310,311,331,334,335,336,337,338,339],wn=[1,267],di=[1,266],De=[6,13,16,26,34,35,37,38,46,48,75,78,81,83,86,87,88,90,93,119,167,168,170,173,174,191,226,231,245,246,250,254,258,271,273,275,276,277,278,279,281,282,284,285,288,290,295,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328,331,334,335,336,337,338,339,340,341,342,343,344],bt=[1,275],pt=[1,274],ht=[13,16,26,34,35,37,38,46,48,87,90,93,100,119,167,168,170,173,174,191,195,219,224,226,227,231,235,245,246,250,254,258,271,273,278,295,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328,331,334,335,336,337,338,339],yt=[35,93],It=[13,16,26,34,35,37,38,46,48,87,90,93,100,119,167,168,170,173,174,191,195,219,224,226,227,231,235,245,246,250,254,258,271,273,278,295,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328,331,334,335,336,337,338,339],Mt=[13,16,48,87,100,231,299,300,301,302,303,304,305,306,307,308,309,310,311,312],Ut=[48,93],wt=[34,38],Ct=[6,13,16,34,35,38,87,93,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312,330,331],Ft=[6,13,16,26,34,35,38,87,93,226,231,245,246,271,299,300,301,302,303,304,305,306,307,308,309,310,311,312,330,331,333],Et=[1,299],nn=[1,300],hn=[6,116,191],At=[48,119],fn=[6,48,86,88,90],qt=[2,341],zt=[2,333],Ln=[1,340],Dt=[1,342],Gn=[48,119,328],Xn=[13,16,34,195,312],Vn=[13,16,34,35,38,46,48,87,90,93,119,167,168,170,173,174,191,195,219,224,226,227,231,235,245,246,278,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328],ln=[13,16,34,35,87,219,271,273,275,276,277,279,281,282,284,285,288,290,299,300,301,302,303,304,305,306,307,308,309,310,311,312,339,340,341,342,343,344],cn=[1,374],Sn=[1,375],An=[13,16,26,34,35,87,219,271,273,275,276,277,279,281,282,284,285,288,290,299,300,301,302,303,304,305,306,307,308,309,310,311,312,339,340,341,342,343,344],un=[1,398],xn=[1,399],ui=[13,16,38,195,224,312],ii=[1,416],Cn=[6,48,90],zi=[6,13,16,35,48,78,86,88,90,275,276,277,279,281,282,284,285,288,290,312,339,340,341,342,343,344],gi=[6,13,16,34,35,46,48,78,81,83,86,87,88,90,93,119,167,168,170,173,174,226,231,245,246,275,276,277,279,281,282,284,285,288,290,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328,339,340,341,342,343,344],Kn=[46,48,90,119,167,168,170,173,174],li=[1,435],ai=[1,436],Hi=[1,442],Ei=[1,441],Pn=[48,119,191,227,328],mi=[13,16,34,35,38,87,93,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312],bi=[13,16,34,35,38,48,87,93,119,191,226,227,231,245,246,278,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328],hi=[13,16,38,48,87,100,231,299,300,301,302,303,304,305,306,307,308,309,310,311,312],Si=[35,48],Ki=[2,332],Pi=[1,497],Bi=[1,494],_i=[1,495],Oi=[6,13,16,26,34,35,37,38,46,48,68,75,78,81,83,86,87,88,90,93,119,167,168,170,173,174,191,226,231,245,246,250,254,258,271,273,275,276,277,278,279,281,282,284,285,288,290,295,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328,329,331,334,335,336,337,338,339,340,341,342,343,344],xi=[1,515],pi=[46,48,90,119,167,168,170,173,174,328],ji=[13,16,34,35,195,219,224,312],Bn=[6,13,16,34,35,48,75,78,86,88,90,275,276,277,279,281,282,284,285,288,290,312,339,340,341,342,343,344],Di=[13,16,34,35,38,48,87,93,119,191,195,226,227,231,245,246,278,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328],Qn=[6,13,16,34,35,48,81,83,86,88,90,275,276,277,279,281,282,284,285,288,290,312,339,340,341,342,343,344],Ai=[13,16,34,35,46,48,87,90,93,119,167,168,170,173,174,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312],Qi=[13,16,34,312],Nn=[13,16,34,35,46,48,87,90,93,119,167,168,170,173,174,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328],Mn=[2,344],Zi=[13,16,34,35,38,46,48,87,90,93,119,167,168,170,173,174,191,226,227,231,245,246,278,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328],$i=[13,16,34,35,37,38,46,48,87,90,93,119,167,168,170,173,174,191,195,219,224,226,227,231,235,245,246,278,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328],Fn=[2,339],qi=[13,16,34,35,38,46,48,87,90,93,119,167,168,170,173,174,191,195,219,224,226,227,231,245,246,278,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328],el=[13,16,38,87,100,231,299,300,301,302,303,304,305,306,307,308,309,310,311,312],si=[46,48,90,119,167,168,170,173,174,191,227,328],tl=[13,16,34,38,48,87,100,195,231,235,299,300,301,302,303,304,305,306,307,308,309,310,311,312],nl=[13,16,34,35,48,87,93,119,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312],il=[2,327],Ti={trace:function(){},yy:{},symbols_:{error:2,QueryOrUpdate:3,Prologue:4,QueryOrUpdate_group0:5,EOF:6,Prologue_repetition0:7,Query:8,Query_group0:9,Query_option0:10,BaseDecl:11,BASE:12,IRIREF:13,PrefixDecl:14,PREFIX:15,PNAME_NS:16,SelectQuery:17,SelectClauseWildcard:18,SelectQuery_repetition0:19,WhereClause:20,SolutionModifierNoGroup:21,SelectClauseVars:22,SelectQuery_repetition1:23,SolutionModifier:24,SelectClauseBase:25,"*":26,SelectClauseVars_repetition_plus0:27,SELECT:28,SelectClauseBase_option0:29,SubSelect:30,SubSelect_option0:31,SubSelect_option1:32,SelectClauseItem:33,VAR:34,"(":35,Expression:36,AS:37,")":38,VarTriple:39,ConstructQuery:40,CONSTRUCT:41,ConstructTemplate:42,ConstructQuery_repetition0:43,ConstructQuery_repetition1:44,WHERE:45,"{":46,ConstructQuery_option0:47,"}":48,DescribeQuery:49,DESCRIBE:50,DescribeQuery_group0:51,DescribeQuery_repetition0:52,DescribeQuery_option0:53,AskQuery:54,ASK:55,AskQuery_repetition0:56,DatasetClause:57,FROM:58,DatasetClause_option0:59,iri:60,WhereClause_option0:61,GroupGraphPattern:62,SolutionModifier_option0:63,SolutionModifierNoGroup_option0:64,SolutionModifierNoGroup_option1:65,SolutionModifierNoGroup_option2:66,GroupClause:67,GROUP:68,BY:69,GroupClause_repetition_plus0:70,GroupCondition:71,BuiltInCall:72,FunctionCall:73,HavingClause:74,HAVING:75,HavingClause_repetition_plus0:76,OrderClause:77,ORDER:78,OrderClause_repetition_plus0:79,OrderCondition:80,ASC:81,BrackettedExpression:82,DESC:83,Constraint:84,LimitOffsetClauses:85,LIMIT:86,INTEGER:87,OFFSET:88,ValuesClause:89,VALUES:90,InlineData:91,InlineData_repetition0:92,NIL:93,InlineData_repetition1:94,InlineData_repetition_plus2:95,InlineData_repetition3:96,DataBlockValue:97,Literal:98,ConstTriple:99,UNDEF:100,DataBlockValueList:101,DataBlockValueList_repetition_plus0:102,Update:103,Update_repetition0:104,Update1:105,Update_option0:106,LOAD:107,Update1_option0:108,Update1_option1:109,Update1_group0:110,Update1_option2:111,GraphRefAll:112,Update1_group1:113,Update1_option3:114,GraphOrDefault:115,TO:116,CREATE:117,Update1_option4:118,GRAPH:119,INSERTDATA:120,QuadPattern:121,DELETEDATA:122,DELETEWHERE:123,Update1_option5:124,InsertClause:125,Update1_option6:126,Update1_repetition0:127,Update1_option7:128,DeleteClause:129,Update1_option8:130,Update1_repetition1:131,DELETE:132,INSERT:133,UsingClause:134,USING:135,UsingClause_option0:136,WithClause:137,WITH:138,IntoGraphClause:139,INTO:140,DEFAULT:141,GraphOrDefault_option0:142,GraphRefAll_group0:143,QuadPattern_option0:144,QuadPattern_repetition0:145,QuadsNotTriples:146,QuadsNotTriples_group0:147,QuadsNotTriples_option0:148,QuadsNotTriples_option1:149,QuadsNotTriples_option2:150,TriplesTemplate:151,TriplesTemplate_repetition0:152,TriplesSameSubject:153,TriplesTemplate_option0:154,GroupGraphPatternSub:155,GroupGraphPatternSub_option0:156,GroupGraphPatternSub_repetition0:157,GroupGraphPatternSubTail:158,GraphPatternNotTriples:159,GroupGraphPatternSubTail_option0:160,GroupGraphPatternSubTail_option1:161,TriplesBlock:162,TriplesBlock_repetition0:163,TriplesSameSubjectPath:164,TriplesBlock_option0:165,GraphPatternNotTriples_repetition0:166,OPTIONAL:167,MINUS:168,GraphPatternNotTriples_group0:169,SERVICE:170,GraphPatternNotTriples_option0:171,GraphPatternNotTriples_group1:172,FILTER:173,BIND:174,FunctionCall_option0:175,FunctionCall_repetition0:176,ExpressionList:177,ExpressionList_repetition0:178,ConstructTemplate_option0:179,ConstructTriples:180,ConstructTriples_repetition0:181,ConstructTriples_option0:182,TriplesSameSubject_group0:183,PropertyListNotEmpty:184,TriplesNode:185,PropertyList:186,PropertyList_option0:187,VerbObjectList:188,PropertyListNotEmpty_repetition0:189,SemiOptionalVerbObjectList:190,";":191,SemiOptionalVerbObjectList_option0:192,Verb:193,ObjectList:194,a:195,ObjectList_repetition0:196,GraphNode:197,ObjectListPath:198,ObjectListPath_repetition0:199,GraphNodePath:200,TriplesSameSubjectPath_group0:201,PropertyListPathNotEmpty:202,TriplesNodePath:203,TriplesSameSubjectPath_option0:204,PropertyListPathNotEmpty_group0:205,PropertyListPathNotEmpty_repetition0:206,PropertyListPathNotEmpty_repetition1:207,PropertyListPathNotEmptyTail:208,PropertyListPathNotEmptyTail_group0:209,Path:210,Path_repetition0:211,PathSequence:212,PathSequence_repetition0:213,PathEltOrInverse:214,PathElt:215,PathPrimary:216,PathElt_option0:217,PathEltOrInverse_option0:218,"!":219,PathNegatedPropertySet:220,PathOneInPropertySet:221,PathNegatedPropertySet_repetition0:222,PathNegatedPropertySet_option0:223,"^":224,TriplesNode_repetition_plus0:225,"[":226,"]":227,TriplesNodePath_repetition_plus0:228,GraphNode_group0:229,GraphNodePath_group0:230,"<<":231,VarTriple_group0:232,VarTriple_group1:233,VarTriple_group2:234,">>":235,VarTriple_group3:236,VarTriple_group4:237,ConstTriple_group0:238,ConstTriple_group1:239,ConstTriple_group2:240,ConstTriple_group3:241,ConstTriple_group4:242,VarOrTerm:243,Term:244,BLANK_NODE_LABEL:245,ANON:246,ConditionalAndExpression:247,Expression_repetition0:248,ExpressionTail:249,"||":250,RelationalExpression:251,ConditionalAndExpression_repetition0:252,ConditionalAndExpressionTail:253,"&&":254,AdditiveExpression:255,RelationalExpression_group0:256,RelationalExpression_option0:257,IN:258,MultiplicativeExpression:259,AdditiveExpression_repetition0:260,AdditiveExpressionTail:261,AdditiveExpressionTail_group0:262,NumericLiteralPositive:263,AdditiveExpressionTail_repetition0:264,NumericLiteralNegative:265,AdditiveExpressionTail_repetition1:266,UnaryExpression:267,MultiplicativeExpression_repetition0:268,MultiplicativeExpressionTail:269,MultiplicativeExpressionTail_group0:270,"+":271,PrimaryExpression:272,"-":273,Aggregate:274,FUNC_ARITY0:275,FUNC_ARITY1:276,FUNC_ARITY2:277,",":278,IF:279,BuiltInCall_group0:280,BOUND:281,BNODE:282,BuiltInCall_option0:283,EXISTS:284,COUNT:285,Aggregate_option0:286,Aggregate_group0:287,FUNC_AGGREGATE:288,Aggregate_option1:289,GROUP_CONCAT:290,Aggregate_option2:291,Aggregate_option3:292,GroupConcatSeparator:293,SEPARATOR:294,"=":295,String:296,LANGTAG:297,"^^":298,DECIMAL:299,DOUBLE:300,BOOLEAN:301,STRING_LITERAL1:302,STRING_LITERAL2:303,STRING_LITERAL_LONG1:304,STRING_LITERAL_LONG2:305,INTEGER_POSITIVE:306,DECIMAL_POSITIVE:307,DOUBLE_POSITIVE:308,INTEGER_NEGATIVE:309,DECIMAL_NEGATIVE:310,DOUBLE_NEGATIVE:311,PNAME_LN:312,QueryOrUpdate_group0_option0:313,Prologue_repetition0_group0:314,SelectClauseBase_option0_group0:315,DISTINCT:316,REDUCED:317,DescribeQuery_group0_repetition_plus0_group0:318,DescribeQuery_group0_repetition_plus0:319,NAMED:320,SILENT:321,CLEAR:322,DROP:323,ADD:324,MOVE:325,COPY:326,ALL:327,".":328,UNION:329,"|":330,"/":331,PathElt_option0_group0:332,"?":333,"!=":334,"<":335,">":336,"<=":337,">=":338,NOT:339,CONCAT:340,COALESCE:341,SUBSTR:342,REGEX:343,REPLACE:344,$accept:0,$end:1},terminals_:{2:"error",6:"EOF",12:"BASE",13:"IRIREF",15:"PREFIX",16:"PNAME_NS",26:"*",28:"SELECT",34:"VAR",35:"(",37:"AS",38:")",41:"CONSTRUCT",45:"WHERE",46:"{",48:"}",50:"DESCRIBE",55:"ASK",58:"FROM",68:"GROUP",69:"BY",75:"HAVING",78:"ORDER",81:"ASC",83:"DESC",86:"LIMIT",87:"INTEGER",88:"OFFSET",90:"VALUES",93:"NIL",100:"UNDEF",107:"LOAD",116:"TO",117:"CREATE",119:"GRAPH",120:"INSERTDATA",122:"DELETEDATA",123:"DELETEWHERE",132:"DELETE",133:"INSERT",135:"USING",138:"WITH",140:"INTO",141:"DEFAULT",167:"OPTIONAL",168:"MINUS",170:"SERVICE",173:"FILTER",174:"BIND",191:";",195:"a",219:"!",224:"^",226:"[",227:"]",231:"<<",235:">>",245:"BLANK_NODE_LABEL",246:"ANON",250:"||",254:"&&",258:"IN",271:"+",273:"-",275:"FUNC_ARITY0",276:"FUNC_ARITY1",277:"FUNC_ARITY2",278:",",279:"IF",281:"BOUND",282:"BNODE",284:"EXISTS",285:"COUNT",288:"FUNC_AGGREGATE",290:"GROUP_CONCAT",294:"SEPARATOR",295:"=",297:"LANGTAG",298:"^^",299:"DECIMAL",300:"DOUBLE",301:"BOOLEAN",302:"STRING_LITERAL1",303:"STRING_LITERAL2",304:"STRING_LITERAL_LONG1",305:"STRING_LITERAL_LONG2",306:"INTEGER_POSITIVE",307:"DECIMAL_POSITIVE",308:"DOUBLE_POSITIVE",309:"INTEGER_NEGATIVE",310:"DECIMAL_NEGATIVE",311:"DOUBLE_NEGATIVE",312:"PNAME_LN",316:"DISTINCT",317:"REDUCED",320:"NAMED",321:"SILENT",322:"CLEAR",323:"DROP",324:"ADD",325:"MOVE",326:"COPY",327:"ALL",328:".",329:"UNION",330:"|",331:"/",333:"?",334:"!=",335:"<",336:">",337:"<=",338:">=",339:"NOT",340:"CONCAT",341:"COALESCE",342:"SUBSTR",343:"REGEX",344:"REPLACE"},productions_:[0,[3,3],[4,1],[8,2],[11,2],[14,3],[17,4],[17,4],[18,2],[22,2],[25,2],[30,4],[30,4],[33,1],[33,5],[33,5],[40,5],[40,7],[49,5],[54,4],[57,3],[20,2],[24,2],[21,3],[67,3],[71,1],[71,1],[71,3],[71,5],[71,1],[74,2],[77,3],[80,2],[80,2],[80,1],[80,1],[85,2],[85,2],[85,4],[85,4],[89,2],[91,4],[91,4],[91,6],[97,1],[97,1],[97,1],[97,1],[101,3],[103,3],[105,4],[105,3],[105,5],[105,4],[105,2],[105,2],[105,2],[105,6],[105,6],[129,2],[125,2],[134,3],[137,2],[139,3],[115,1],[115,2],[112,2],[112,1],[121,4],[146,7],[151,3],[62,3],[62,3],[155,2],[158,3],[162,3],[159,2],[159,2],[159,2],[159,3],[159,4],[159,2],[159,6],[159,6],[159,1],[84,1],[84,1],[84,1],[73,2],[73,6],[177,1],[177,4],[42,3],[180,3],[153,2],[153,2],[186,1],[184,2],[190,2],[188,2],[193,1],[193,1],[193,1],[194,2],[198,2],[164,2],[164,2],[202,4],[208,1],[208,3],[210,2],[212,2],[215,2],[214,2],[216,1],[216,1],[216,2],[216,3],[220,1],[220,1],[220,4],[221,1],[221,1],[221,2],[221,2],[185,3],[185,3],[203,3],[203,3],[197,1],[197,1],[200,1],[200,1],[39,9],[39,5],[99,9],[99,5],[243,1],[243,1],[244,1],[244,1],[244,1],[244,1],[244,1],[36,2],[249,2],[247,2],[253,2],[251,1],[251,3],[251,4],[255,2],[261,2],[261,2],[261,2],[259,2],[269,2],[267,2],[267,2],[267,2],[267,1],[272,1],[272,1],[272,1],[272,1],[272,1],[272,1],[82,3],[72,1],[72,2],[72,4],[72,6],[72,8],[72,2],[72,4],[72,2],[72,4],[72,3],[274,5],[274,5],[274,6],[293,4],[98,1],[98,2],[98,3],[98,1],[98,1],[98,1],[98,1],[98,1],[98,1],[296,1],[296,1],[296,1],[296,1],[263,1],[263,1],[263,1],[265,1],[265,1],[265,1],[60,1],[60,1],[60,1],[313,0],[313,1],[5,1],[5,1],[5,1],[314,1],[314,1],[7,0],[7,2],[9,1],[9,1],[9,1],[9,1],[10,0],[10,1],[19,0],[19,2],[23,0],[23,2],[27,1],[27,2],[315,1],[315,1],[29,0],[29,1],[31,0],[31,1],[32,0],[32,1],[43,0],[43,2],[44,0],[44,2],[47,0],[47,1],[318,1],[318,1],[319,1],[319,2],[51,1],[51,1],[52,0],[52,2],[53,0],[53,1],[56,0],[56,2],[59,0],[59,1],[61,0],[61,1],[63,0],[63,1],[64,0],[64,1],[65,0],[65,1],[66,0],[66,1],[70,1],[70,2],[76,1],[76,2],[79,1],[79,2],[92,0],[92,2],[94,0],[94,2],[95,1],[95,2],[96,0],[96,2],[102,1],[102,2],[104,0],[104,4],[106,0],[106,2],[108,0],[108,1],[109,0],[109,1],[110,1],[110,1],[111,0],[111,1],[113,1],[113,1],[113,1],[114,0],[114,1],[118,0],[118,1],[124,0],[124,1],[126,0],[126,1],[127,0],[127,2],[128,0],[128,1],[130,0],[130,1],[131,0],[131,2],[136,0],[136,1],[142,0],[142,1],[143,1],[143,1],[143,1],[144,0],[144,1],[145,0],[145,2],[147,1],[147,1],[148,0],[148,1],[149,0],[149,1],[150,0],[150,1],[152,0],[152,3],[154,0],[154,1],[156,0],[156,1],[157,0],[157,2],[160,0],[160,1],[161,0],[161,1],[163,0],[163,3],[165,0],[165,1],[166,0],[166,3],[169,1],[169,1],[171,0],[171,1],[172,1],[172,1],[175,0],[175,1],[176,0],[176,3],[178,0],[178,3],[179,0],[179,1],[181,0],[181,3],[182,0],[182,1],[183,1],[183,1],[187,0],[187,1],[189,0],[189,2],[192,0],[192,1],[196,0],[196,3],[199,0],[199,3],[201,1],[201,1],[204,0],[204,1],[205,1],[205,1],[206,0],[206,3],[207,0],[207,2],[209,1],[209,1],[211,0],[211,3],[213,0],[213,3],[332,1],[332,1],[332,1],[217,0],[217,1],[218,0],[218,1],[222,0],[222,3],[223,0],[223,1],[225,1],[225,2],[228,1],[228,2],[229,1],[229,1],[230,1],[230,1],[232,1],[232,1],[233,1],[233,1],[234,1],[234,1],[236,1],[236,1],[237,1],[237,1],[238,1],[238,1],[239,1],[239,1],[240,1],[240,1],[241,1],[241,1],[242,1],[242,1],[248,0],[248,2],[252,0],[252,2],[256,1],[256,1],[256,1],[256,1],[256,1],[256,1],[257,0],[257,1],[260,0],[260,2],[262,1],[262,1],[264,0],[264,2],[266,0],[266,2],[268,0],[268,2],[270,1],[270,1],[280,1],[280,1],[280,1],[280,1],[280,1],[283,0],[283,1],[286,0],[286,1],[287,1],[287,1],[289,0],[289,1],[291,0],[291,1],[292,0],[292,1]],performAction:function(Zt,Lt,Tt,Jt,kt,Be,Rn){var Oe=Be.length-1;switch(kt){case 1:if(Be[Oe-1]=Be[Oe-1]||{},Pt.base&&(Be[Oe-1].base=Pt.base),Pt.base="",Be[Oe-1].prefixes=Pt.prefixes,Pt.prefixes=null,Pt.pathOnly){if(Be[Oe-1].type==="path"||"termType"in Be[Oe-1])return Be[Oe-1];throw new Error("Received full SPARQL query in path only mode")}else if(Be[Oe-1].type==="path"||"termType"in Be[Oe-1])throw new Error("Received only path in full SPARQL mode");if(Be[Oe-1].type==="update"){const Bt={};for(const _t of Be[Oe-1].updates)if(_t.updateType==="insert"){const Kt={};for(const mn of _t.insert)if(mn.type==="bgp"||mn.type==="graph")for(const bn of mn.triples)bn.subject.termType==="BlankNode"&&(Kt[bn.subject.value]=!0),bn.predicate.termType==="BlankNode"&&(Kt[bn.predicate.value]=!0),bn.object.termType==="BlankNode"&&(Kt[bn.object.value]=!0);for(const mn of Object.keys(Kt)){if(Bt[mn])throw new Error("Detected reuse blank node across different INSERT DATA clauses");Bt[mn]=!0}}}return Be[Oe-1];case 3:this.$=en(Be[Oe-1],Be[Oe],{type:"query"});break;case 4:Pt.base=ri(Be[Oe]);break;case 5:Pt.prefixes||(Pt.prefixes={}),Be[Oe-1]=Be[Oe-1].substr(0,Be[Oe-1].length-1),Be[Oe]=ri(Be[Oe]),Pt.prefixes[Be[Oe-1]]=Be[Oe];break;case 6:this.$=en(Be[Oe-3],zn(Be[Oe-2]),Be[Oe-1],Be[Oe]);break;case 7:if(!Pt.skipValidation&&(Ui(Be[Oe-3].variables.map(_t=>Fi(_t.expression))).some(_t=>_t.aggregation==="count"&&!(_t.expression instanceof yi))||Be[Oe].group)){for(const _t of Be[Oe-3].variables)if(_t.termType==="Variable"){if(!Be[Oe].group||!Be[Oe].group.map(Kt=>ei(Kt)).includes(ei(_t)))throw Error("Projection of ungrouped variable (?"+ei(_t)+")")}else if(Fi(_t.expression).length===0){const Kt=gl(_t.expression);for(const mn of Kt)if(!Be[Oe].group||!Be[Oe].group.map||!Be[Oe].group.map(bn=>ei(bn)).includes(ei(mn)))throw Error("Use of ungrouped variable in projection of operation (?"+ei(mn)+")")}}const ti=Be[Oe-1].where.filter(Bt=>Bt.type==="query");if(ti.length>0){const Bt=Be[Oe-3].variables.filter(Kt=>Kt.variable&&Kt.variable.value).map(Kt=>Kt.variable.value),_t=Ui(ti.map(Kt=>Kt.variables)).map(Kt=>Kt.value||Kt.variable.value);for(const Kt of Bt)if(_t.indexOf(Kt)>=0)throw Error("Target id of 'AS' (?"+Kt+") already used in subquery")}this.$=en(Be[Oe-3],zn(Be[Oe-2]),Be[Oe-1],Be[Oe]);break;case 8:this.$=en(Be[Oe-1],{variables:[new yi]});break;case 9:const Ji=Be[Oe].map(Bt=>Bt.value||Bt.variable.value),Ri=Sl(Ji);if(Ri.length>0)throw Error("Two or more of the resulting columns have the same name (?"+Ri[0]+")");this.$=en(Be[Oe-1],{variables:Be[Oe]});break;case 10:this.$=en({queryType:"SELECT"},Be[Oe]&&(Be[Oe-1]=Wn(Be[Oe]),Be[Oe]={},Be[Oe][Be[Oe-1]]=!0,Be[Oe]));break;case 11:case 12:this.$=en(Be[Oe-3],Be[Oe-2],Be[Oe-1],Be[Oe],{type:"query"});break;case 13:case 100:case 137:case 166:this.$=Zn(Be[Oe]);break;case 14:case 28:this.$=kn(Be[Oe-3],{variable:Zn(Be[Oe-1])});break;case 15:this.$=ci(kn(Be[Oe-3],{variable:Zn(Be[Oe-1])}));break;case 16:this.$=en({queryType:"CONSTRUCT",template:Be[Oe-3]},zn(Be[Oe-2]),Be[Oe-1],Be[Oe]);break;case 17:this.$=en({queryType:"CONSTRUCT",template:Be[Oe-2]=Be[Oe-2]?Be[Oe-2].triples:[]},zn(Be[Oe-5]),{where:[{type:"bgp",triples:$n([],Be[Oe-2])}]},Be[Oe]);break;case 18:this.$=en({queryType:"DESCRIBE",variables:Be[Oe-3]==="*"?[new yi]:Be[Oe-3].map(Zn)},zn(Be[Oe-2]),Be[Oe-1],Be[Oe]);break;case 19:this.$=en({queryType:"ASK"},zn(Be[Oe-2]),Be[Oe-1],Be[Oe]);break;case 20:case 61:this.$={iri:Be[Oe],named:!!Be[Oe-1]};break;case 21:this.$={where:Be[Oe].patterns};break;case 22:this.$=en(Be[Oe-1],Be[Oe]);break;case 23:this.$=en(Be[Oe-2],Be[Oe-1],Be[Oe]);break;case 24:this.$={group:Be[Oe]};break;case 25:case 26:case 32:case 34:this.$=kn(Be[Oe]);break;case 27:this.$=kn(Be[Oe-1]);break;case 29:case 35:this.$=kn(Zn(Be[Oe]));break;case 30:this.$={having:Be[Oe]};break;case 31:this.$={order:Be[Oe]};break;case 33:this.$=kn(Be[Oe],{descending:!0});break;case 36:this.$={limit:qn(Be[Oe])};break;case 37:this.$={offset:qn(Be[Oe])};break;case 38:this.$={limit:qn(Be[Oe-2]),offset:qn(Be[Oe])};break;case 39:this.$={limit:qn(Be[Oe]),offset:qn(Be[Oe-2])};break;case 40:this.$={type:"values",values:Be[Oe]};break;case 41:this.$=Be[Oe-1].map(function(Bt){var _t={};return _t[Be[Oe-3]]=Bt,_t});break;case 42:this.$=Be[Oe-1].map(function(){return{}});break;case 43:var Hn=Be[Oe-4].length;Be[Oe-4]=Be[Oe-4].map(Zn),this.$=Be[Oe-1].map(function(Bt){if(Bt.length!==Hn)throw Error("Inconsistent VALUES length");for(var _t={},Kt=0;Kt<Hn;Kt++)_t["?"+Be[Oe-4][Kt].value]=Bt[Kt];return _t});break;case 46:this.$=ci(Be[Oe]);break;case 47:this.$=void 0;break;case 48:case 92:case 117:case 167:this.$=Be[Oe-1];break;case 49:this.$={type:"update",updates:Jn(Be[Oe-2],Be[Oe-1])};break;case 50:this.$=en({type:"load",silent:!!Be[Oe-2],source:Be[Oe-1]},Be[Oe]&&{destination:Be[Oe]});break;case 51:this.$={type:Wn(Be[Oe-2]),silent:!!Be[Oe-1],graph:Be[Oe]};break;case 52:this.$={type:Wn(Be[Oe-4]),silent:!!Be[Oe-3],source:Be[Oe-2],destination:Be[Oe]};break;case 53:this.$={type:"create",silent:!!Be[Oe-2],graph:{type:"graph",name:Be[Oe]}};break;case 54:this.$={updateType:"insert",insert:hl(Be[Oe])};break;case 55:this.$={updateType:"delete",delete:Ci(hl(Be[Oe]))};break;case 56:this.$={updateType:"deletewhere",delete:Ci(Be[Oe])};break;case 57:this.$=en({updateType:"insertdelete"},Be[Oe-5],{insert:Be[Oe-4]||[]},{delete:Be[Oe-3]||[]},zn(Be[Oe-2],"using"),{where:Be[Oe].patterns});break;case 58:this.$=en({updateType:"insertdelete"},Be[Oe-5],{delete:Be[Oe-4]||[]},{insert:Be[Oe-3]||[]},zn(Be[Oe-2],"using"),{where:Be[Oe].patterns});break;case 59:this.$=Ci(Be[Oe]);break;case 60:case 63:case 160:case 181:this.$=Be[Oe];break;case 62:this.$={graph:Be[Oe]};break;case 64:this.$={type:"graph",default:!0};break;case 65:case 66:this.$={type:"graph",name:Be[Oe]};break;case 67:this.$={},this.$[Wn(Be[Oe])]=!0;break;case 68:this.$=Be[Oe-2]?Tn(Be[Oe-1],[Be[Oe-2]]):Tn(Be[Oe-1]);break;case 69:var Xi=en(Be[Oe-3]||{triples:[]},{type:"graph",name:Zn(Be[Oe-5])});this.$=Be[Oe]?[Xi,Be[Oe]]:[Xi];break;case 70:case 75:this.$={type:"bgp",triples:Tn(Be[Oe-2],[Be[Oe-1]])};break;case 71:this.$={type:"group",patterns:[Be[Oe-1]]};break;case 72:for(const Bt of Be[Oe-1].filter(_t=>_t.type==="bind")){const _t=Be[Oe-1].indexOf(Bt),Kt=new Set;for(const mn of Be[Oe-1].slice(0,_t))(mn.type==="group"||mn.type==="bgp")&&bl(mn).forEach(bn=>Kt.add(bn));if(Kt.has(Bt.variable.value))throw Error("Variable used to bind is already bound (?"+Bt.variable.value+")")}this.$={type:"group",patterns:Be[Oe-1]};break;case 73:this.$=Be[Oe-1]?Tn([Be[Oe-1]],Be[Oe]):Tn(Be[Oe]);break;case 74:this.$=Be[Oe]?[Be[Oe-2],Be[Oe]]:Be[Oe-2];break;case 76:Be[Oe-1].length?this.$={type:"union",patterns:Tn(Be[Oe-1].map(Yi),[Yi(Be[Oe])])}:this.$=Be[Oe];break;case 77:this.$=en(Be[Oe],{type:"optional"});break;case 78:this.$=en(Be[Oe],{type:"minus"});break;case 79:this.$=en(Be[Oe],{type:"graph",name:Zn(Be[Oe-1])});break;case 80:this.$=en(Be[Oe],{type:"service",name:Zn(Be[Oe-1]),silent:!!Be[Oe-2]});break;case 81:this.$={type:"filter",expression:Be[Oe]};break;case 82:this.$={type:"bind",variable:Zn(Be[Oe-1]),expression:Be[Oe-3]};break;case 83:this.$=ci({type:"bind",variable:Zn(Be[Oe-1]),expression:Be[Oe-3]});break;case 88:this.$={type:"functionCall",function:Be[Oe-1],args:[]};break;case 89:this.$={type:"functionCall",function:Be[Oe-5],args:Jn(Be[Oe-2],Be[Oe-1]),distinct:!!Be[Oe-3]};break;case 90:case 108:case 119:case 211:case 219:case 221:case 233:case 235:case 245:case 249:case 269:case 271:case 275:case 279:case 302:case 308:case 319:case 329:case 335:case 341:case 345:case 355:case 357:case 361:case 369:case 373:case 375:case 383:case 385:case 389:case 391:case 400:case 432:case 434:case 444:case 448:case 450:case 452:this.$=[];break;case 91:this.$=Jn(Be[Oe-2],Be[Oe-1]);break;case 93:this.$=Tn(Be[Oe-2],[Be[Oe-1]]);break;case 94:case 105:this.$=Be[Oe].map(function(Bt){return en(jn(Be[Oe-1]),Bt)});break;case 95:this.$=$n(Be[Oe].map(function(Bt){return en(jn(Be[Oe-1].entity),Bt)}),Be[Oe-1].triples);break;case 97:this.$=Tn([Be[Oe-1]],Be[Oe]);break;case 98:this.$=Tn(Be[Oe]);break;case 99:this.$=Mi(Be[Oe-1],Be[Oe]);break;case 102:case 115:case 122:this.$=Pt.factory.namedNode(ll);break;case 103:case 104:this.$=Jn(Be[Oe-1],Be[Oe]);break;case 106:this.$=Be[Oe]?$n(Be[Oe].map(function(Bt){return en(jn(Be[Oe-1].entity),Bt)}),Be[Oe-1].triples):Be[Oe-1].triples;break;case 107:this.$=Mi(Zn(Be[Oe-3]),Jn(Be[Oe-2],Be[Oe-1]),Be[Oe]);break;case 109:this.$=Mi(Zn(Be[Oe-1]),Be[Oe]);break;case 110:this.$=Be[Oe-1].length?On("|",Jn(Be[Oe-1],Be[Oe])):Be[Oe];break;case 111:this.$=Be[Oe-1].length?On("/",Jn(Be[Oe-1],Be[Oe])):Be[Oe];break;case 112:this.$=Be[Oe]?On(Be[Oe],[Be[Oe-1]]):Be[Oe-1];break;case 113:this.$=Be[Oe-1]?On(Be[Oe-1],[Be[Oe]]):Be[Oe];break;case 116:case 123:this.$=On(Be[Oe-1],[Be[Oe]]);break;case 120:this.$=On("|",Jn(Be[Oe-2],Be[Oe-1]));break;case 124:this.$=On(Be[Oe-1],[Pt.factory.namedNode(ll)]);break;case 125:case 127:this.$=Ll(Be[Oe-1]);break;case 126:case 128:this.$=vl(Be[Oe-1]);break;case 129:this.$={entity:Be[Oe],triples:[]};break;case 131:this.$={entity:Be[Oe],triples:[]};break;case 133:case 135:this.$=ci(Pt.factory.quad(Be[Oe-4],Be[Oe-3],Be[Oe-2],Zn(Be[Oe-6])));break;case 134:case 136:this.$=ci(Pt.factory.quad(Be[Oe-3],Be[Oe-2],Be[Oe-1]));break;case 141:this.$=oi(Be[Oe].replace(/^(_:)/,""));break;case 142:this.$=oi();break;case 143:this.$=Pt.factory.namedNode(al);break;case 144:case 146:case 151:case 155:this.$=Ii(Be[Oe-1],Be[Oe]);break;case 145:this.$=["||",Be[Oe]];break;case 147:this.$=["&&",Be[Oe]];break;case 149:this.$=yn(Be[Oe-1],[Be[Oe-2],Be[Oe]]);break;case 150:this.$=yn(Be[Oe-2]?"notin":"in",[Be[Oe-3],Be[Oe]]);break;case 152:case 156:this.$=[Be[Oe-1],Be[Oe]];break;case 153:this.$=["+",Ii(Be[Oe-1],Be[Oe])];break;case 154:var Vi=In(Be[Oe-1].value.replace("-",""),Be[Oe-1].datatype);this.$=["-",Ii(Vi,Be[Oe])];break;case 157:this.$=yn("UPLUS",[Be[Oe]]);break;case 158:this.$=yn(Be[Oe-1],[Be[Oe]]);break;case 159:this.$=yn("UMINUS",[Be[Oe]]);break;case 169:this.$=yn(Wn(Be[Oe-1]));break;case 170:this.$=yn(Wn(Be[Oe-3]),[Be[Oe-1]]);break;case 171:this.$=yn(Wn(Be[Oe-5]),[Be[Oe-3],Be[Oe-1]]);break;case 172:this.$=yn(Wn(Be[Oe-7]),[Be[Oe-5],Be[Oe-3],Be[Oe-1]]);break;case 173:this.$=yn(Wn(Be[Oe-1]),Be[Oe]);break;case 174:this.$=yn("bound",[Zn(Be[Oe-1])]);break;case 175:this.$=yn(Be[Oe-1],[]);break;case 176:this.$=yn(Be[Oe-3],[Be[Oe-1]]);break;case 177:this.$=yn(Be[Oe-2]?"notexists":"exists",[Yi(Be[Oe])]);break;case 178:case 179:this.$=kn(Be[Oe-1],{type:"aggregate",aggregation:Wn(Be[Oe-4]),distinct:!!Be[Oe-2]});break;case 180:this.$=kn(Be[Oe-2],{type:"aggregate",aggregation:Wn(Be[Oe-5]),distinct:!!Be[Oe-3],separator:typeof Be[Oe-1]=="string"?Be[Oe-1]:" "});break;case 182:this.$=In(Be[Oe]);break;case 183:this.$=Xl(Be[Oe-1],Wn(Be[Oe].substr(1)));break;case 184:this.$=In(Be[Oe-2],Be[Oe]);break;case 185:case 198:this.$=In(Be[Oe],sl);break;case 186:case 199:this.$=In(Be[Oe],rl);break;case 187:case 200:this.$=In(Wn(Be[Oe]),ol);break;case 190:this.$=In(Be[Oe].toLowerCase(),Gl);break;case 191:case 192:this.$=ml(Be[Oe],1);break;case 193:case 194:this.$=ml(Be[Oe],3);break;case 195:this.$=In(Be[Oe].substr(1),sl);break;case 196:this.$=In(Be[Oe].substr(1),rl);break;case 197:this.$=In(Be[Oe].substr(1).toLowerCase(),ol);break;case 201:this.$=Pt.factory.namedNode(ri(Be[Oe]));break;case 202:var Wi=Be[Oe].indexOf(":"),rn=Be[Oe].substr(0,Wi),Yn=Pt.prefixes[rn];if(!Yn)throw new Error("Unknown prefix: "+rn);var Dn=ri(Yn+Be[Oe].substr(Wi+1));this.$=Pt.factory.namedNode(Dn);break;case 203:if(Be[Oe]=Be[Oe].substr(0,Be[Oe].length-1),!(Be[Oe]in Pt.prefixes))throw new Error("Unknown prefix: "+Be[Oe]);var Dn=ri(Pt.prefixes[Be[Oe]]);this.$=Pt.factory.namedNode(Dn);break;case 212:case 220:case 222:case 224:case 234:case 236:case 242:case 246:case 250:case 264:case 266:case 268:case 270:case 272:case 274:case 276:case 278:case 303:case 309:case 320:case 336:case 370:case 386:case 405:case 407:case 433:case 435:case 445:case 449:case 451:case 453:Be[Oe-1].push(Be[Oe]);break;case 223:case 241:case 263:case 265:case 267:case 273:case 277:case 404:case 406:this.$=[Be[Oe]];break;case 280:Be[Oe-3].push(Be[Oe-2]);break;case 330:case 342:case 346:case 356:case 358:case 362:case 374:case 376:case 384:case 390:case 392:case 401:Be[Oe-2].push(Be[Oe-1]);break}},table:[X(Z,G,{3:1,4:2,7:3}),{1:[3]},X(W,[2,279],{5:4,8:5,313:6,210:7,9:8,103:9,211:10,17:11,40:12,49:13,54:14,104:15,18:16,22:17,25:21,6:[2,204],13:F,16:F,35:F,195:F,219:F,224:F,312:F,28:U,41:[1,18],50:[1,19],55:[1,20]}),X([6,13,16,28,35,41,50,55,107,117,120,122,123,132,133,138,195,219,224,312,322,323,324,325,326],[2,2],{314:23,11:24,14:25,12:[1,26],15:[1,27]}),{6:[1,28]},{6:[2,206]},{6:[2,207]},{6:[2,208]},{6:[2,217],10:29,89:30,90:J},{6:[2,205]},X(Y,[2,391],{212:32,213:33}),X(D,[2,213]),X(D,[2,214]),X(D,[2,215]),X(D,[2,216]),{105:34,107:[1,35],110:36,113:37,117:[1,38],120:[1,39],122:[1,40],123:[1,41],124:42,128:43,132:[2,304],133:[2,298],137:49,138:[1,50],322:[1,44],323:[1,45],324:[1,46],325:[1,47],326:[1,48]},X(Q,[2,219],{19:51}),X(Q,[2,221],{23:52}),X(ee,[2,235],{42:53,44:54,46:[1,55]}),{13:q,16:te,26:[1,58],34:ie,51:56,60:61,312:ne,318:59,319:57},X(Q,[2,249],{56:65}),{26:[1,66],27:67,33:68,34:ce,35:le},X(se,[2,227],{29:71,315:72,316:[1,73],317:[1,74]}),X(Z,[2,212]),X(Z,[2,209]),X(Z,[2,210]),{13:[1,75]},{16:[1,76]},{1:[2,1]},{6:[2,3]},{6:[2,218]},{34:[1,78],35:[1,80],91:77,93:[1,79]},X([6,13,16,34,35,38,87,93,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312],[2,110],{330:[1,81]}),X(pe,[2,398],{214:82,218:83,224:[1,84]}),{6:[2,281],106:85,191:[1,86]},X(ue,[2,283],{108:87,321:[1,88]}),X(ae,[2,289],{111:89,321:[1,90]}),X(de,[2,294],{114:91,321:[1,92]}),{118:93,119:[2,296],321:[1,94]},{46:be,121:95},{46:be,121:97},{46:be,121:98},{125:99,133:he},{129:101,132:Le},X(Xe,[2,287]),X(Xe,[2,288]),X(We,[2,291]),X(We,[2,292]),X(We,[2,293]),{132:[2,305],133:[2,299]},{13:q,16:te,60:103,312:ne},{20:104,45:fe,46:Re,57:105,58:ye,61:106},{20:109,45:fe,46:Re,57:110,58:ye,61:106},X(Q,[2,233],{43:111}),{45:[1,112],57:113,58:ye},X(re,[2,361],{179:114,180:115,181:116,48:[2,359]}),X(Ze,[2,245],{52:117}),X(Ze,[2,243],{60:61,318:118,13:q,16:te,34:ie,312:ne}),X(Ze,[2,244]),X(Ge,[2,241]),X(Ge,[2,239]),X(Ge,[2,240]),X(ve,[2,201]),X(ve,[2,202]),X(ve,[2,203]),{20:119,45:fe,46:Re,57:120,58:ye,61:106},X(Q,[2,8]),X(Q,[2,9],{33:121,34:ce,35:le}),X(Te,[2,223]),X(Te,[2,13]),{13:q,16:te,34:xe,35:Ye,36:122,39:123,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,231:je,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(se,[2,10]),X(se,[2,228]),X(se,[2,225]),X(se,[2,226]),X(Z,[2,4]),{13:[1,176]},X(vt,[2,40]),{46:[1,177]},{46:[1,178]},{34:[1,180],95:179},X(Y,[2,390]),X([6,13,16,34,35,38,87,93,226,231,245,246,299,300,301,302,303,304,305,306,307,308,309,310,311,312,330],[2,111],{331:[1,181]}),{13:q,16:te,35:[1,187],60:184,195:[1,185],215:182,216:183,219:[1,186],312:ne},X(pe,[2,399]),{6:[2,49]},X(Z,G,{7:3,4:188}),{13:q,16:te,60:189,312:ne},X(ue,[2,284]),{112:190,119:[1,191],141:[1,193],143:192,320:[1,194],327:[1,195]},X(ae,[2,290]),X(ue,Vt,{115:196,142:198,119:Wt,141:ft}),X(de,[2,295]),{119:[1,200]},{119:[2,297]},X(Rt,[2,54]),X(re,Yt,{144:201,151:202,152:203,48:ct,119:ct}),X(Rt,[2,55]),X(Rt,[2,56]),X(xt,[2,300],{126:204,129:205,132:Le}),{46:be,121:206},X(xt,[2,306],{130:207,125:208,133:he}),{46:be,121:209},X([132,133],[2,62]),X(Qe,nt,{21:210,64:211,74:212,75:Xt}),X(Q,[2,220]),{46:St,62:214},X(ue,[2,251],{59:216,320:[1,217]}),{46:[2,254]},X(Nt,jt,{24:218,63:219,67:220,68:sn}),X(Q,[2,222]),{20:222,45:fe,46:Re,57:223,58:ye,61:106},{46:[1,224]},X(ee,[2,236]),{48:[1,225]},{48:[2,360]},{13:q,16:te,34:Ht,35:an,39:230,60:235,87:ge,93:Ot,98:236,153:226,183:227,185:228,226:vn,231:je,243:229,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(En,[2,247],{61:106,53:240,57:241,20:242,45:fe,46:Re,58:ye}),X(Ge,[2,242]),X(Nt,jt,{63:219,67:220,24:243,68:sn}),X(Q,[2,250]),X(Te,[2,224]),{37:[1,244]},{37:[1,245]},X(gn,[2,432],{248:246}),{13:q,16:te,34:Ht,39:249,60:235,87:ge,93:Ot,98:236,119:[1,247],231:je,236:248,243:250,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(dn,[2,434],{252:251}),X(dn,[2,148],{256:252,257:253,258:[2,442],295:[1,254],334:[1,255],335:[1,256],336:[1,257],337:[1,258],338:[1,259],339:[1,260]}),X(pn,[2,444],{260:261}),X($t,[2,452],{268:262}),{13:q,16:te,34:xe,35:Ye,60:136,72:135,73:137,82:134,87:ge,98:138,263:154,265:155,272:263,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{13:q,16:te,34:xe,35:Ye,60:136,72:135,73:137,82:134,87:ge,98:138,263:154,265:155,272:264,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{13:q,16:te,34:xe,35:Ye,60:136,72:135,73:137,82:134,87:ge,98:138,263:154,265:155,272:265,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X($t,[2,160]),X($t,[2,161]),X($t,[2,162]),X($t,[2,163],{35:wn,93:di}),X($t,[2,164]),X($t,[2,165]),X($t,[2,166]),{13:q,16:te,34:xe,35:Ye,36:268,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(De,[2,168]),{93:[1,269]},{35:[1,270]},{35:[1,271]},{35:[1,272]},{35:bt,93:pt,177:273},{35:[1,276]},{35:[1,278],93:[1,277]},{284:[1,279]},X(ht,[2,182],{297:[1,280],298:[1,281]}),X(ht,[2,185]),X(ht,[2,186]),X(ht,[2,187]),X(ht,[2,188]),X(ht,[2,189]),X(ht,[2,190]),{35:[1,282]},{35:[1,283]},{35:[1,284]},X(yt,[2,456]),X(yt,[2,457]),X(yt,[2,458]),X(yt,[2,459]),X(yt,[2,460]),{284:[2,462]},X(It,[2,191]),X(It,[2,192]),X(It,[2,193]),X(It,[2,194]),X(ht,[2,195]),X(ht,[2,196]),X(ht,[2,197]),X(ht,[2,198]),X(ht,[2,199]),X(ht,[2,200]),X(Z,[2,5]),X(Mt,[2,269],{92:285}),X(Ut,[2,271],{94:286}),{34:[1,288],38:[1,287]},X(wt,[2,273]),X(Y,[2,392]),X(Ct,[2,113]),X(Ct,[2,396],{217:289,332:290,26:[1,292],271:[1,293],333:[1,291]}),X(Ft,[2,114]),X(Ft,[2,115]),{13:q,16:te,35:[1,297],60:298,93:[1,296],195:Et,220:294,221:295,224:nn,312:ne},X(Y,F,{211:10,210:301}),X(W,[2,280],{6:[2,282]}),X(Rt,[2,285],{109:302,139:303,140:[1,304]}),X(Rt,[2,51]),{13:q,16:te,60:305,312:ne},X(Rt,[2,67]),X(Rt,[2,314]),X(Rt,[2,315]),X(Rt,[2,316]),{116:[1,306]},X(hn,[2,64]),{13:q,16:te,60:307,312:ne},X(ue,[2,313]),{13:q,16:te,60:308,312:ne},X(At,[2,319],{145:309}),X(At,[2,318]),{13:q,16:te,34:Ht,35:an,39:230,60:235,87:ge,93:Ot,98:236,153:310,183:227,185:228,226:vn,231:je,243:229,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(xt,[2,302],{127:311}),X(xt,[2,301]),X([45,132,135],[2,60]),X(xt,[2,308],{131:312}),X(xt,[2,307]),X([45,133,135],[2,59]),X(D,[2,6]),X(fn,[2,259],{65:313,77:314,78:[1,315]}),X(Qe,[2,258]),{13:q,16:te,35:Ye,60:321,72:319,73:320,76:316,82:318,84:317,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X([6,48,68,75,78,86,88,90],[2,21]),X(re,qt,{25:21,30:322,155:323,18:324,22:325,156:326,162:327,163:328,28:U,46:zt,48:zt,90:zt,119:zt,167:zt,168:zt,170:zt,173:zt,174:zt}),{13:q,16:te,60:329,312:ne},X(ue,[2,252]),X(D,[2,7]),X(Qe,nt,{64:211,74:212,21:330,75:Xt}),X(Nt,[2,256]),{69:[1,331]},X(Nt,jt,{63:219,67:220,24:332,68:sn}),X(Q,[2,234]),X(re,Yt,{152:203,47:333,151:334,48:[2,237]}),X(Q,[2,92]),{48:[2,363],182:335,328:[1,336]},{13:q,16:te,34:Ln,60:341,184:337,188:338,193:339,195:Dt,312:ne},X(Gn,[2,367],{188:338,193:339,60:341,186:343,187:344,184:345,13:q,16:te,34:Ln,195:Dt,312:ne}),X(Xn,[2,365]),X(Xn,[2,366]),{13:q,16:te,34:Ht,35:an,39:351,60:235,87:ge,93:Ot,98:236,185:349,197:347,225:346,226:vn,229:348,231:je,243:350,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},{13:q,16:te,34:Ln,60:341,184:352,188:338,193:339,195:Dt,312:ne},X(Vn,[2,137]),X(Vn,[2,138]),X(Vn,[2,139]),X(Vn,[2,140]),X(Vn,[2,141]),X(Vn,[2,142]),X(Vn,[2,143]),X(Nt,jt,{63:219,67:220,24:353,68:sn}),X(Ze,[2,246]),X(En,[2,248]),X(D,[2,19]),{34:[1,354]},{34:[1,355]},X([37,38,191,278],[2,144],{249:356,250:[1,357]}),{13:q,16:te,34:[1,359],60:360,232:358,312:ne},{13:q,16:te,34:Ln,60:341,193:361,195:Dt,312:ne},X(Xn,[2,418]),X(Xn,[2,419]),X(gn,[2,146],{253:362,254:[1,363]}),{13:q,16:te,34:xe,35:Ye,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,255:364,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{258:[1,365]},X(ln,[2,436]),X(ln,[2,437]),X(ln,[2,438]),X(ln,[2,439]),X(ln,[2,440]),X(ln,[2,441]),{258:[2,443]},X([37,38,191,250,254,258,278,295,334,335,336,337,338,339],[2,151],{261:366,262:367,263:368,265:369,271:[1,370],273:[1,371],306:we,307:Ue,308:et,309:at,310:Ve,311:oe}),X(pn,[2,155],{269:372,270:373,26:cn,331:Sn}),X($t,[2,157]),X($t,[2,158]),X($t,[2,159]),X(De,[2,88]),X(ln,[2,353],{175:376,316:[1,377]}),{38:[1,378]},X(De,[2,169]),{13:q,16:te,34:xe,35:Ye,36:379,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{13:q,16:te,34:xe,35:Ye,36:380,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{13:q,16:te,34:xe,35:Ye,36:381,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(De,[2,173]),X(De,[2,90]),X(ln,[2,357],{178:382}),{34:[1,383]},X(De,[2,175]),{13:q,16:te,34:xe,35:Ye,36:384,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{46:St,62:385},X(ht,[2,183]),{13:q,16:te,60:386,312:ne},X(An,[2,463],{286:387,316:[1,388]}),X(ln,[2,467],{289:389,316:[1,390]}),X(ln,[2,469],{291:391,316:[1,392]}),{13:q,16:te,48:[1,393],60:395,87:ge,97:394,98:396,99:397,100:un,231:xn,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},{48:[1,400],93:[1,401]},{46:[1,402]},X(wt,[2,274]),X(Ct,[2,112]),X(Ct,[2,397]),X(Ct,[2,393]),X(Ct,[2,394]),X(Ct,[2,395]),X(Ft,[2,116]),X(Ft,[2,118]),X(Ft,[2,119]),X(ui,[2,400],{222:403}),X(Ft,[2,121]),X(Ft,[2,122]),{13:q,16:te,60:404,195:[1,405],312:ne},{38:[1,406]},X(Rt,[2,50]),X(Rt,[2,286]),{119:[1,407]},X(Rt,[2,66]),X(ue,Vt,{142:198,115:408,119:Wt,141:ft}),X(hn,[2,65]),X(Rt,[2,53]),{48:[1,409],119:[1,411],146:410},X(At,[2,331],{154:412,328:[1,413]}),{45:[1,414],134:415,135:ii},{45:[1,417],134:418,135:ii},X(Cn,[2,261],{66:419,85:420,86:[1,421],88:[1,422]}),X(fn,[2,260]),{69:[1,423]},X(Qe,[2,30],{274:141,280:146,283:149,82:318,72:319,73:320,60:321,84:424,13:q,16:te,35:Ye,275:st,276:qe,277:ot,279:ut,281:dt,282:mt,284:Je,285:Ne,288:ke,290:Ie,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt}),X(zi,[2,265]),X(gi,[2,85]),X(gi,[2,86]),X(gi,[2,87]),{35:wn,93:di},{48:[1,425]},{48:[1,426]},{20:427,45:fe,46:Re,61:106},{20:428,45:fe,46:Re,61:106},X(Kn,[2,335],{157:429}),X(Kn,[2,334]),{13:q,16:te,34:Ht,35:li,39:434,60:235,87:ge,93:Ot,98:236,164:430,201:431,203:432,226:ai,231:je,243:433,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(Ze,[2,20]),X(Cn,[2,22]),{13:q,16:te,34:Hi,35:Ei,60:321,70:437,71:438,72:439,73:440,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(D,[2,16]),{48:[1,443]},{48:[2,238]},{48:[2,93]},X(re,[2,362],{48:[2,364]}),X(Gn,[2,94]),X(Pn,[2,369],{189:444}),X(re,[2,373],{194:445,196:446}),X(re,[2,100]),X(re,[2,101]),X(re,[2,102]),X(Gn,[2,95]),X(Gn,[2,96]),X(Gn,[2,368]),{13:q,16:te,34:Ht,35:an,38:[1,447],39:351,60:235,87:ge,93:Ot,98:236,185:349,197:448,226:vn,229:348,231:je,243:350,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(mi,[2,404]),X(bi,[2,129]),X(bi,[2,130]),X(bi,[2,408]),X(bi,[2,409]),{227:[1,449]},X(D,[2,18]),{38:[1,450]},{38:[1,451]},X(gn,[2,433]),{13:q,16:te,34:xe,35:Ye,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:452,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{46:[1,453]},{46:[2,412]},{46:[2,413]},{13:q,16:te,34:Ht,39:455,60:235,87:ge,93:Ot,98:236,231:je,237:454,243:456,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(dn,[2,435]),{13:q,16:te,34:xe,35:Ye,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,251:457,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(dn,[2,149]),{35:bt,93:pt,177:458},X(pn,[2,445]),{13:q,16:te,34:xe,35:Ye,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,259:459,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X($t,[2,448],{264:460}),X($t,[2,450],{266:461}),X(ln,[2,446]),X(ln,[2,447]),X($t,[2,453]),{13:q,16:te,34:xe,35:Ye,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,263:154,265:155,267:462,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(ln,[2,454]),X(ln,[2,455]),X(ln,[2,355],{176:463}),X(ln,[2,354]),X([6,13,16,26,34,35,37,38,46,48,78,81,83,86,87,88,90,93,119,167,168,170,173,174,191,226,231,245,246,250,254,258,271,273,275,276,277,278,279,281,282,284,285,288,290,295,299,300,301,302,303,304,305,306,307,308,309,310,311,312,328,331,334,335,336,337,338,339,340,341,342,343,344],[2,167]),{38:[1,464]},{278:[1,465]},{278:[1,466]},{13:q,16:te,34:xe,35:Ye,36:467,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{38:[1,468]},{38:[1,469]},X(De,[2,177]),X(ht,[2,184]),{13:q,16:te,26:[1,471],34:xe,35:Ye,36:472,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,287:470,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(An,[2,464]),{13:q,16:te,34:xe,35:Ye,36:473,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(ln,[2,468]),{13:q,16:te,34:xe,35:Ye,36:474,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(ln,[2,470]),X(vt,[2,41]),X(Mt,[2,270]),X(hi,[2,44]),X(hi,[2,45]),X(hi,[2,46]),X(hi,[2,47]),{13:q,16:te,60:235,87:ge,93:Ot,98:236,99:477,119:[1,475],231:xn,241:476,244:478,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(vt,[2,42]),X(Ut,[2,272]),X(Si,[2,275],{96:479}),{13:q,16:te,38:[2,402],60:298,195:Et,221:481,223:480,224:nn,312:ne},X(Ft,[2,123]),X(Ft,[2,124]),X(Ft,[2,117]),{13:q,16:te,60:482,312:ne},X(Rt,[2,52]),X([6,45,132,133,135,191],[2,68]),X(At,[2,320]),{13:q,16:te,34:[1,484],60:485,147:483,312:ne},X(At,[2,70]),X(re,[2,330],{48:Ki,119:Ki}),{46:St,62:486},X(xt,[2,303]),X(ue,[2,310],{136:487,320:[1,488]}),{46:St,62:489},X(xt,[2,309]),X(Cn,[2,23]),X(Cn,[2,262]),{87:[1,490]},{87:[1,491]},{13:q,16:te,34:Pi,35:Ye,60:321,72:319,73:320,79:492,80:493,81:Bi,82:318,83:_i,84:496,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(zi,[2,266]),X(Oi,[2,71]),X(Oi,[2,72]),X(Qe,nt,{64:211,74:212,21:498,75:Xt}),X(Nt,jt,{63:219,67:220,24:499,68:sn}),{46:[2,345],48:[2,73],89:509,90:J,119:[1,505],158:500,159:501,166:502,167:[1,503],168:[1,504],170:[1,506],173:[1,507],174:[1,508]},X(Kn,[2,343],{165:510,328:[1,511]}),X(Y,F,{211:10,202:512,205:513,210:514,34:xi}),X(pi,[2,379],{211:10,205:513,210:514,204:516,202:517,13:F,16:F,35:F,195:F,219:F,224:F,312:F,34:xi}),X(ji,[2,377]),X(ji,[2,378]),{13:q,16:te,34:Ht,35:li,39:523,60:235,87:ge,93:Ot,98:236,200:519,203:521,226:ai,228:518,230:520,231:je,243:522,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(Y,F,{211:10,205:513,210:514,202:524,34:xi}),X(Nt,[2,24],{274:141,280:146,283:149,60:321,72:439,73:440,71:525,13:q,16:te,34:Hi,35:Ei,275:st,276:qe,277:ot,279:ut,281:dt,282:mt,284:Je,285:Ne,288:ke,290:Ie,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt}),X(Bn,[2,263]),X(Bn,[2,25]),X(Bn,[2,26]),{13:q,16:te,34:xe,35:Ye,36:526,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(Bn,[2,29]),X(Nt,jt,{63:219,67:220,24:527,68:sn}),X([48,119,227,328],[2,97],{190:528,191:[1,529]}),X(Pn,[2,99]),{13:q,16:te,34:Ht,35:an,39:351,60:235,87:ge,93:Ot,98:236,185:349,197:530,226:vn,229:348,231:je,243:350,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(Di,[2,125]),X(mi,[2,405]),X(Di,[2,126]),X(Te,[2,14]),X(Te,[2,15]),X(gn,[2,145]),{13:q,16:te,34:Ht,39:532,60:235,87:ge,93:Ot,98:236,231:je,233:531,243:533,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},{235:[1,534]},{235:[2,420]},{235:[2,421]},X(dn,[2,147]),X(dn,[2,150]),X(pn,[2,152]),X(pn,[2,153],{270:373,269:535,26:cn,331:Sn}),X(pn,[2,154],{270:373,269:536,26:cn,331:Sn}),X($t,[2,156]),{13:q,16:te,34:xe,35:Ye,36:537,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(De,[2,170]),{13:q,16:te,34:xe,35:Ye,36:538,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{13:q,16:te,34:xe,35:Ye,36:539,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{38:[1,540],278:[1,541]},X(De,[2,174]),X(De,[2,176]),{38:[1,542]},{38:[2,465]},{38:[2,466]},{38:[1,543]},{38:[2,471],191:[1,546],292:544,293:545},{13:q,16:te,34:[1,548],60:549,238:547,312:ne},{13:q,16:te,34:Ln,60:341,193:550,195:Dt,312:ne},X(Xn,[2,428]),X(Xn,[2,429]),{35:[1,553],48:[1,551],101:552},{38:[1,554]},{38:[2,403],330:[1,555]},X(Rt,[2,63]),{46:[1,556]},{46:[2,321]},{46:[2,322]},X(Rt,[2,57]),{13:q,16:te,60:557,312:ne},X(ue,[2,311]),X(Rt,[2,58]),X(Cn,[2,36],{88:[1,558]}),X(Cn,[2,37],{86:[1,559]}),X(fn,[2,31],{274:141,280:146,283:149,82:318,72:319,73:320,60:321,84:496,80:560,13:q,16:te,34:Pi,35:Ye,81:Bi,83:_i,275:st,276:qe,277:ot,279:ut,281:dt,282:mt,284:Je,285:Ne,288:ke,290:Ie,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt}),X(Qn,[2,267]),{35:Ye,82:561},{35:Ye,82:562},X(Qn,[2,34]),X(Qn,[2,35]),{31:563,48:[2,229],89:564,90:J},{32:565,48:[2,231],89:566,90:J},X(Kn,[2,336]),X(Ai,[2,337],{160:567,328:[1,568]}),{46:St,62:569},{46:St,62:570},{46:St,62:571},{13:q,16:te,34:[1,573],60:574,169:572,312:ne},X(Qi,[2,349],{171:575,321:[1,576]}),{13:q,16:te,35:Ye,60:321,72:319,73:320,82:318,84:577,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{35:[1,578]},X(Nn,[2,84]),X(Kn,[2,75]),X(re,[2,342],{46:Mn,48:Mn,90:Mn,119:Mn,167:Mn,168:Mn,170:Mn,173:Mn,174:Mn}),X(pi,[2,105]),X(re,[2,383],{206:579}),X(re,[2,381]),X(re,[2,382]),X(pi,[2,106]),X(pi,[2,380]),{13:q,16:te,34:Ht,35:li,38:[1,580],39:523,60:235,87:ge,93:Ot,98:236,200:581,203:521,226:ai,230:520,231:je,243:522,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(mi,[2,406]),X(Zi,[2,131]),X(Zi,[2,132]),X(Zi,[2,410]),X(Zi,[2,411]),{227:[1,582]},X(Bn,[2,264]),{37:[1,584],38:[1,583]},X(D,[2,17]),X(Pn,[2,370]),X(Pn,[2,371],{193:339,60:341,192:585,188:586,13:q,16:te,34:Ln,195:Dt,312:ne}),X(Pn,[2,103],{278:[1,587]}),{13:q,16:te,34:Ln,60:341,193:588,195:Dt,312:ne},X(Xn,[2,414]),X(Xn,[2,415]),X($i,[2,134]),X($t,[2,449]),X($t,[2,451]),{38:[1,589],278:[1,590]},{38:[1,591]},{278:[1,592]},X(De,[2,91]),X(ln,[2,358]),X(De,[2,178]),X(De,[2,179]),{38:[1,593]},{38:[2,472]},{294:[1,594]},{46:[1,595]},{46:[2,422]},{46:[2,423]},{13:q,16:te,60:235,87:ge,93:Ot,98:236,99:597,231:xn,242:596,244:598,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(vt,[2,43]),X(Si,[2,276]),{13:q,16:te,60:395,87:ge,97:600,98:396,99:397,100:un,102:599,231:xn,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(Ft,[2,120]),X(ui,[2,401]),X(re,Yt,{152:203,148:601,151:602,48:[2,323]}),X(xt,[2,61]),{87:[1,603]},{87:[1,604]},X(Qn,[2,268]),X(Qn,[2,32]),X(Qn,[2,33]),{48:[2,11]},{48:[2,230]},{48:[2,12]},{48:[2,232]},X(re,qt,{163:328,161:605,162:606,46:Fn,48:Fn,90:Fn,119:Fn,167:Fn,168:Fn,170:Fn,173:Fn,174:Fn}),X(Ai,[2,338]),X(Nn,[2,76],{329:[1,607]}),X(Nn,[2,77]),X(Nn,[2,78]),{46:St,62:608},{46:[2,347]},{46:[2,348]},{13:q,16:te,34:[1,610],60:611,172:609,312:ne},X(Qi,[2,350]),X(Nn,[2,81]),{13:q,16:te,34:xe,35:Ye,36:612,39:613,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,231:je,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},{13:q,16:te,34:Ht,35:li,39:523,60:235,87:ge,93:Ot,98:236,200:614,203:521,226:ai,230:520,231:je,243:522,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(qi,[2,127]),X(mi,[2,407]),X(qi,[2,128]),X(Bn,[2,27]),{34:[1,615]},X(Pn,[2,98]),X(Pn,[2,372]),X(re,[2,374]),{13:q,16:te,34:Ht,39:617,60:235,87:ge,93:Ot,98:236,231:je,234:616,243:618,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(De,[2,89]),X(ln,[2,356]),X(De,[2,171]),{13:q,16:te,34:xe,35:Ye,36:619,60:136,72:135,73:137,82:134,87:ge,98:138,219:Me,247:124,251:126,255:127,259:128,263:154,265:155,267:129,271:tt,272:133,273:it,274:141,275:st,276:qe,277:ot,279:ut,280:146,281:dt,282:mt,283:149,284:Je,285:Ne,288:ke,290:Ie,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne,339:me,340:Se,341:Fe,342:Ke,343:Ae,344:rt},X(De,[2,180]),{295:[1,620]},{13:q,16:te,60:235,87:ge,93:Ot,98:236,99:622,231:xn,239:621,244:623,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},{235:[1,624]},{235:[2,430]},{235:[2,431]},{13:q,16:te,38:[1,625],60:395,87:ge,97:626,98:396,99:397,100:un,231:xn,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(el,[2,277]),{48:[1,627]},{48:[2,324]},X(Cn,[2,38]),X(Cn,[2,39]),X(Kn,[2,74]),X(Kn,[2,340]),{46:[2,346]},X(Nn,[2,79]),{46:St,62:628},{46:[2,351]},{46:[2,352]},{37:[1,629]},{37:[1,630]},X(si,[2,385],{207:631,278:[1,632]}),{38:[1,633]},{48:[1,634]},{48:[2,416]},{48:[2,417]},{38:[1,635]},{296:636,302:_e,303:He,304:Pe,305:$e},{13:q,16:te,34:Ln,60:341,193:637,195:Dt,312:ne},X(Xn,[2,424]),X(Xn,[2,425]),X(tl,[2,136]),X(Si,[2,48]),X(el,[2,278]),X(nl,[2,325],{149:638,328:[1,639]}),X(Nn,[2,80]),{34:[1,640]},{34:[1,641]},X([46,48,90,119,167,168,170,173,174,227,328],[2,107],{208:642,191:[1,643]}),X(re,[2,384]),X(Bn,[2,28]),{235:[1,644]},X(De,[2,172]),{38:[2,181]},{13:q,16:te,60:235,87:ge,93:Ot,98:236,99:646,231:xn,240:645,244:647,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(re,Yt,{152:203,150:648,151:649,48:il,119:il}),X(nl,[2,326]),{38:[1,650]},{38:[1,651]},X(si,[2,386]),X(si,[2,108],{211:10,209:652,210:653,13:F,16:F,35:F,195:F,219:F,224:F,312:F,34:[1,654]}),X($i,[2,133]),{48:[1,655]},{48:[2,426]},{48:[2,427]},X(At,[2,69]),X(At,[2,328]),X(Nn,[2,82]),X(Nn,[2,83]),X(re,[2,375],{198:656,199:657}),X(re,[2,387]),X(re,[2,388]),{235:[1,658]},X(si,[2,109]),{13:q,16:te,34:Ht,35:li,39:523,60:235,87:ge,93:Ot,98:236,200:659,203:521,226:ai,230:520,231:je,243:522,244:234,245:tn,246:Qt,263:154,265:155,296:150,299:Ce,300:ze,301:Ee,302:_e,303:He,304:Pe,305:$e,306:we,307:Ue,308:et,309:at,310:Ve,311:oe,312:ne},X(tl,[2,135]),X(si,[2,104],{278:[1,660]}),X(re,[2,376])],defaultActions:{5:[2,206],6:[2,207],7:[2,208],9:[2,205],28:[2,1],29:[2,3],30:[2,218],85:[2,49],94:[2,297],108:[2,254],115:[2,360],165:[2,462],260:[2,443],334:[2,238],335:[2,93],359:[2,412],360:[2,413],455:[2,420],456:[2,421],471:[2,465],472:[2,466],484:[2,321],485:[2,322],545:[2,472],548:[2,422],549:[2,423],563:[2,11],564:[2,230],565:[2,12],566:[2,232],573:[2,347],574:[2,348],597:[2,430],598:[2,431],602:[2,324],607:[2,346],610:[2,351],611:[2,352],617:[2,416],618:[2,417],636:[2,181],646:[2,426],647:[2,427]},parseError:function(Zt,Lt){if(Lt.recoverable)this.trace(Zt);else{var Tt=new Error(Zt);throw Tt.hash=Lt,Tt}},parse:function(Zt){var Lt=this,Tt=[0],Jt=[null],kt=[],Be=this.table,Rn="",Oe=0,Hn=0,Xi=2,Vi=1,Wi=kt.slice.call(arguments,1),rn=Object.create(this.lexer),Yn={yy:{}};for(var Dn in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Dn)&&(Yn.yy[Dn]=this.yy[Dn]);rn.setInput(Zt,Yn.yy),Yn.yy.lexer=rn,Yn.yy.parser=this,typeof rn.yylloc>"u"&&(rn.yylloc={});var ti=rn.yylloc;kt.push(ti);var Ji=rn.options&&rn.options.ranges;typeof Yn.yy.parseError=="function"?this.parseError=Yn.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var Ri=function(){var ni;return ni=rn.lex()||Vi,typeof ni!="number"&&(ni=Lt.symbols_[ni]||ni),ni},Bt,_t,Kt,mn,bn={},Li,Un,pl,vi;;){if(_t=Tt[Tt.length-1],this.defaultActions[_t]?Kt=this.defaultActions[_t]:((Bt===null||typeof Bt>"u")&&(Bt=Ri()),Kt=Be[_t]&&Be[_t][Bt]),typeof Kt>"u"||!Kt.length||!Kt[0]){var ki="";vi=[];for(Li in Be[_t])this.terminals_[Li]&&Li>Xi&&vi.push("'"+this.terminals_[Li]+"'");rn.showPosition?ki="Parse error on line "+(Oe+1)+`:
`+rn.showPosition()+`
Expecting `+vi.join(", ")+", got '"+(this.terminals_[Bt]||Bt)+"'":ki="Parse error on line "+(Oe+1)+": Unexpected "+(Bt==Vi?"end of input":"'"+(this.terminals_[Bt]||Bt)+"'"),this.parseError(ki,{text:rn.match,token:this.terminals_[Bt]||Bt,line:rn.yylineno,loc:ti,expected:vi})}if(Kt[0]instanceof Array&&Kt.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_t+", token: "+Bt);switch(Kt[0]){case 1:Tt.push(Bt),Jt.push(rn.yytext),kt.push(rn.yylloc),Tt.push(Kt[1]),Bt=null,Hn=rn.yyleng,Rn=rn.yytext,Oe=rn.yylineno,ti=rn.yylloc;break;case 2:if(Un=this.productions_[Kt[1]][1],bn.$=Jt[Jt.length-Un],bn._$={first_line:kt[kt.length-(Un||1)].first_line,last_line:kt[kt.length-1].last_line,first_column:kt[kt.length-(Un||1)].first_column,last_column:kt[kt.length-1].last_column},Ji&&(bn._$.range=[kt[kt.length-(Un||1)].range[0],kt[kt.length-1].range[1]]),mn=this.performAction.apply(bn,[Rn,Hn,Oe,Yn.yy,Kt[1],Jt,kt].concat(Wi)),typeof mn<"u")return mn;Un&&(Tt=Tt.slice(0,-1*Un*2),Jt=Jt.slice(0,-1*Un),kt=kt.slice(0,-1*Un)),Tt.push(this.productions_[Kt[1]][0]),Jt.push(bn.$),kt.push(bn._$),pl=Be[Tt[Tt.length-2]][Tt[Tt.length-1]],Tt.push(pl);break;case 3:return!0}}return!0}},yi=Wildcard$2.Wildcard,fi="http://www.w3.org/1999/02/22-rdf-syntax-ns#",ll=fi+"type",yl=fi+"first",fl=fi+"rest",al=fi+"nil",Gi="http://www.w3.org/2001/XMLSchema#",sl=Gi+"integer",rl=Gi+"decimal",ol=Gi+"double",Gl=Gi+"boolean",_n="",cl="",dl="";function Wn(Gt){return Gt.toLowerCase()}function Jn(Gt,Zt){return Gt.push(Zt),Gt}function $n(Gt,Zt){return Gt.push.apply(Gt,Zt),Gt}function en(Gt){Gt||(Gt={});for(var Zt=1,Lt=arguments.length,Tt;Zt<Lt&&(Tt=arguments[Zt]||{});Zt++)for(var Jt in Tt)Gt[Jt]=Tt[Jt];return Gt}function Tn(){for(var Gt=[],Zt=0,Lt=arguments.length;Zt<Lt;Zt++)Gt=Gt.concat.apply(Gt,arguments[Zt]);return Gt}function ri(Gt){if(Gt[0]==="<"&&(Gt=Gt.substring(1,Gt.length-1)),/^[a-z]+:/i.test(Gt))return Gt;if(!Pt.base)throw new Error("Cannot resolve relative IRI "+Gt+" because no base IRI was set.");switch(_n!==Pt.base&&(_n=Pt.base,cl=_n.replace(/[^\/:]*$/,""),dl=_n.match(/^(?:[a-z]+:\/*)?[^\/]*/)[0]),Gt[0]){case void 0:return _n;case"#":return _n+Gt;case"?":return _n.replace(/(?:\?.*)?$/,Gt);case"/":return dl+Gt;default:return cl+Gt}}function Zn(Gt){if(Gt){var Zt=Gt[0];if(Zt==="?"||Zt==="$")return Pt.factory.variable(Gt.substr(1))}return Gt}function yn(Gt,Zt){return{type:"operation",operator:Gt,args:Zt||[]}}function kn(Gt,Zt){var Lt={expression:Gt==="*"?new yi:Gt};if(Zt)for(var Tt in Zt)Lt[Tt]=Zt[Tt];return Lt}function On(Gt,Zt){return{type:"path",pathType:Gt,items:Zt}}function Ii(Gt,Zt){for(var Lt=0,Tt=Zt.length,Jt;Lt<Tt&&(Jt=Zt[Lt]);Lt++)Gt=yn(Jt[0],[Gt,Jt[1]]);return Gt}function zn(Gt,Zt){var Lt=[],Tt=[],Jt=Gt.length,kt,Be={};if(!Jt)return null;for(var Rn=0;Rn<Jt&&(kt=Gt[Rn]);Rn++)(kt.named?Tt:Lt).push(kt.iri);return Be[Zt||"from"]={default:Lt,named:Tt},Be}function qn(Gt){return parseInt(Gt,10)}function Yi(Gt){return Gt.type==="group"&&Gt.patterns.length===1?Gt.patterns[0]:Gt}function In(Gt,Zt){return Zt&&Zt.termType!=="NamedNode"&&(Zt=Pt.factory.namedNode(Zt)),Pt.factory.literal(Gt,Zt)}function Xl(Gt,Zt){return Pt.factory.literal(Gt,Zt)}function jn(Gt,Zt,Lt){var Tt={};return Gt!=null&&(Tt.subject=Gt),Zt!=null&&(Tt.predicate=Zt),Lt!=null&&(Tt.object=Lt),Tt}function oi(Gt){return typeof Gt=="string"?Gt.startsWith("e_")?Pt.factory.blankNode(Gt):Pt.factory.blankNode("e_"+Gt):Pt.factory.blankNode("g_"+ul++)}var ul=0;Pt._resetBlanks=function(){ul=0};var Vl=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\(.)/g,Wl={"\\":"\\","'":"'",'"':'"',t:"	",b:"\b",n:`
`,r:"\r",f:"\f"},Rl=/[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/,Ni=String.fromCharCode;function ml(Gt,Zt){Gt=Gt.substring(Zt,Gt.length-Zt);try{Gt=Gt.replace(Vl,function(Lt,Tt,Jt,kt){var Be;if(Tt){if(Be=parseInt(Tt,16),isNaN(Be))throw new Error;return Ni(Be)}else if(Jt){if(Be=parseInt(Jt,16),isNaN(Be))throw new Error;return Be<65535?Ni(Be):Ni(55296+((Be-=65536)>>10),56320+(Be&1023))}else{var Rn=Wl[kt];if(!Rn)throw new Error;return Rn}})}catch{return""}if(Rl.exec(Gt))throw new Error("Invalid unicode codepoint of surrogate pair without corresponding codepoint in "+Gt);return Gt}function Ll(Gt){var Zt=oi(),Lt=Zt,Tt=[],Jt,kt=[];Gt.forEach(function(Hn){Tt.push(Hn.entity),$n(kt,Hn.triples)});for(var Be=0,Rn=0,Oe=Tt.length,Jt=Array(Oe*2);Be<Oe;)Jt[Rn++]=jn(Lt,Pt.factory.namedNode(yl),Tt[Be]),Jt[Rn++]=jn(Lt,Pt.factory.namedNode(fl),Lt=++Be<Oe?oi():Pt.factory.namedNode(al));return{entity:Zt,triples:$n(Jt,kt)}}function vl(Gt){var Zt=oi();return{entity:Zt,triples:Gt.map(function(Lt){return en(jn(Zt),Lt)})}}function Mi(Gt,Zt,Lt){var Tt=[],Jt=[];return Zt.forEach(function(kt){Tt.push(jn(null,Gt,kt.entity)),$n(Jt,kt.triples)}),Tn(Tt,Lt||[],Jt)}function ei(Gt){return Gt.variable?Gt.variable.value:Gt.value||Gt.expression.value}function Fi(Gt){if(!Gt)return[];if(Gt.type==="aggregate")return[Gt];if(Gt.type==="operation"){const Zt=[];for(const Lt of Gt.args)Zt.push(...Fi(Lt));return Zt}return[]}function gl(Gt){const Zt=new Set,Lt=function(Tt){Tt&&(Tt.termType==="Variable"?Zt.add(Tt):Tt.type==="operation"&&Tt.args.forEach(Lt))};return Lt(Gt),Zt}function Ui(Gt,Zt=1,Lt=[]){for(const Tt of Gt)Zt>0&&Tt instanceof Array?Ui(Tt,Zt-1,Lt):Lt.push(Tt);return Lt}function wi(Gt){return Gt.termType==="Variable"}function bl(Gt){if(Gt.triples){const Zt=[];for(const Lt of Gt.triples)wi(Lt.subject)&&Zt.push(Lt.subject.value),wi(Lt.predicate)&&Zt.push(Lt.predicate.value),wi(Lt.object)&&Zt.push(Lt.object.value);return Zt}else if(Gt.patterns){const Zt=[];for(const Lt of Gt.patterns)Zt.push(...bl(Lt));return Zt}return[]}function Sl(Gt){const Zt=Gt.slice().sort(),Lt=[];for(let Tt=0;Tt<Zt.length-1;Tt++)Zt[Tt+1]==Zt[Tt]&&Lt.push(Zt[Tt]);return Lt}function ci(Gt){if(!Pt.sparqlStar)throw new Error("SPARQL* support is not enabled");return Gt}function hl(Gt){for(const Zt of Gt){if(Zt.type==="graph"&&Zt.name.termType==="Variable")throw new Error("Detected illegal variable in GRAPH");if(Zt.type==="bgp"||Zt.type==="graph"){for(const Lt of Zt.triples)if(Lt.subject.termType==="Variable"||Lt.predicate.termType==="Variable"||Lt.object.termType==="Variable")throw new Error("Detected illegal variable in BGP")}}return Gt}function Ci(Gt){for(const Zt of Gt)if(Zt.type==="bgp"){for(const Lt of Zt.triples)if(Lt.subject.termType==="BlankNode"||Lt.predicate.termType==="BlankNode"||Lt.object.termType==="BlankNode")throw new Error("Detected illegal blank node in BGP")}return Gt}var xl=function(){var Gt={EOF:1,parseError:function(Lt,Tt){if(this.yy.parser)this.yy.parser.parseError(Lt,Tt);else throw new Error(Lt)},setInput:function(Zt,Lt){return this.yy=Lt||this.yy||{},this._input=Zt,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var Zt=this._input[0];this.yytext+=Zt,this.yyleng++,this.offset++,this.match+=Zt,this.matched+=Zt;var Lt=Zt.match(/(?:\r\n?|\n).*/g);return Lt?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),Zt},unput:function(Zt){var Lt=Zt.length,Tt=Zt.split(/(?:\r\n?|\n)/g);this._input=Zt+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-Lt),this.offset-=Lt;var Jt=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),Tt.length-1&&(this.yylineno-=Tt.length-1);var kt=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:Tt?(Tt.length===Jt.length?this.yylloc.first_column:0)+Jt[Jt.length-Tt.length].length-Tt[0].length:this.yylloc.first_column-Lt},this.options.ranges&&(this.yylloc.range=[kt[0],kt[0]+this.yyleng-Lt]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(Zt){this.unput(this.match.slice(Zt))},pastInput:function(){var Zt=this.matched.substr(0,this.matched.length-this.match.length);return(Zt.length>20?"...":"")+Zt.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var Zt=this.match;return Zt.length<20&&(Zt+=this._input.substr(0,20-Zt.length)),(Zt.substr(0,20)+(Zt.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var Zt=this.pastInput(),Lt=new Array(Zt.length+1).join("-");return Zt+this.upcomingInput()+`
`+Lt+"^"},test_match:function(Zt,Lt){var Tt,Jt,kt;if(this.options.backtrack_lexer&&(kt={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(kt.yylloc.range=this.yylloc.range.slice(0))),Jt=Zt[0].match(/(?:\r\n?|\n).*/g),Jt&&(this.yylineno+=Jt.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:Jt?Jt[Jt.length-1].length-Jt[Jt.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+Zt[0].length},this.yytext+=Zt[0],this.match+=Zt[0],this.matches=Zt,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(Zt[0].length),this.matched+=Zt[0],Tt=this.performAction.call(this,this.yy,this,Lt,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),Tt)return Tt;if(this._backtrack){for(var Be in kt)this[Be]=kt[Be];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var Zt,Lt,Tt,Jt;this._more||(this.yytext="",this.match="");for(var kt=this._currentRules(),Be=0;Be<kt.length;Be++)if(Tt=this._input.match(this.rules[kt[Be]]),Tt&&(!Lt||Tt[0].length>Lt[0].length)){if(Lt=Tt,Jt=Be,this.options.backtrack_lexer){if(Zt=this.test_match(Tt,kt[Be]),Zt!==!1)return Zt;if(this._backtrack){Lt=!1;continue}else return!1}else if(!this.options.flex)break}return Lt?(Zt=this.test_match(Lt,kt[Jt]),Zt!==!1?Zt:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var Lt=this.next();return Lt||this.lex()},begin:function(Lt){this.conditionStack.push(Lt)},popState:function(){var Lt=this.conditionStack.length-1;return Lt>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(Lt){return Lt=this.conditionStack.length-1-Math.abs(Lt||0),Lt>=0?this.conditionStack[Lt]:"INITIAL"},pushState:function(Lt){this.begin(Lt)},stateStackSize:function(){return this.conditionStack.length},options:{flex:!0,"case-insensitive":!0},performAction:function(Lt,Tt,Jt,kt){switch(Jt){case 0:break;case 1:return 12;case 2:return 15;case 3:return 28;case 4:return 316;case 5:return 317;case 6:return 35;case 7:return 37;case 8:return 38;case 9:return 26;case 10:return 41;case 11:return 45;case 12:return 46;case 13:return 48;case 14:return 50;case 15:return 55;case 16:return 58;case 17:return 320;case 18:return 68;case 19:return 69;case 20:return 75;case 21:return 78;case 22:return 81;case 23:return 83;case 24:return 86;case 25:return 88;case 26:return 90;case 27:return 191;case 28:return 107;case 29:return 321;case 30:return 140;case 31:return 322;case 32:return 323;case 33:return 117;case 34:return 324;case 35:return 116;case 36:return 325;case 37:return 326;case 38:return 120;case 39:return 122;case 40:return 123;case 41:return 138;case 42:return 132;case 43:return 133;case 44:return 135;case 45:return 141;case 46:return 119;case 47:return 327;case 48:return 328;case 49:return 167;case 50:return 170;case 51:return 174;case 52:return 100;case 53:return 168;case 54:return 329;case 55:return 173;case 56:return 231;case 57:return 235;case 58:return 278;case 59:return 195;case 60:return 330;case 61:return 331;case 62:return 224;case 63:return 333;case 64:return 271;case 65:return 219;case 66:return 226;case 67:return 227;case 68:return 250;case 69:return 254;case 70:return 295;case 71:return 334;case 72:return 335;case 73:return 336;case 74:return 337;case 75:return 338;case 76:return 258;case 77:return 339;case 78:return 273;case 79:return 281;case 80:return 282;case 81:return 275;case 82:return 276;case 83:return 277;case 84:return 340;case 85:return 341;case 86:return 279;case 87:return 343;case 88:return 342;case 89:return 344;case 90:return 284;case 91:return 285;case 92:return 288;case 93:return 290;case 94:return 294;case 95:return 298;case 96:return 301;case 97:return 13;case 98:return 16;case 99:return 312;case 100:return 245;case 101:return 34;case 102:return 297;case 103:return 87;case 104:return 299;case 105:return 300;case 106:return 306;case 107:return 307;case 108:return 308;case 109:return 309;case 110:return 310;case 111:return 311;case 112:return"EXPONENT";case 113:return 302;case 114:return 303;case 115:return 304;case 116:return 305;case 117:return 93;case 118:return 246;case 119:return 6;case 120:return"INVALID";case 121:console.log(Tt.yytext);break}},rules:[/^(?:\s+|(#[^\n\r]*))/i,/^(?:BASE)/i,/^(?:PREFIX)/i,/^(?:SELECT)/i,/^(?:DISTINCT)/i,/^(?:REDUCED)/i,/^(?:\()/i,/^(?:AS)/i,/^(?:\))/i,/^(?:\*)/i,/^(?:CONSTRUCT)/i,/^(?:WHERE)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:DESCRIBE)/i,/^(?:ASK)/i,/^(?:FROM)/i,/^(?:NAMED)/i,/^(?:GROUP)/i,/^(?:BY)/i,/^(?:HAVING)/i,/^(?:ORDER)/i,/^(?:ASC)/i,/^(?:DESC)/i,/^(?:LIMIT)/i,/^(?:OFFSET)/i,/^(?:VALUES)/i,/^(?:;)/i,/^(?:LOAD)/i,/^(?:SILENT)/i,/^(?:INTO)/i,/^(?:CLEAR)/i,/^(?:DROP)/i,/^(?:CREATE)/i,/^(?:ADD)/i,/^(?:TO)/i,/^(?:MOVE)/i,/^(?:COPY)/i,/^(?:INSERT((\s+|(#[^\n\r]*)\n\r?)+)DATA)/i,/^(?:DELETE((\s+|(#[^\n\r]*)\n\r?)+)DATA)/i,/^(?:DELETE((\s+|(#[^\n\r]*)\n\r?)+)WHERE)/i,/^(?:WITH)/i,/^(?:DELETE)/i,/^(?:INSERT)/i,/^(?:USING)/i,/^(?:DEFAULT)/i,/^(?:GRAPH)/i,/^(?:ALL)/i,/^(?:\.)/i,/^(?:OPTIONAL)/i,/^(?:SERVICE)/i,/^(?:BIND)/i,/^(?:UNDEF)/i,/^(?:MINUS)/i,/^(?:UNION)/i,/^(?:FILTER)/i,/^(?:<<)/i,/^(?:>>)/i,/^(?:,)/i,/^(?:a)/i,/^(?:\|)/i,/^(?:\/)/i,/^(?:\^)/i,/^(?:\?)/i,/^(?:\+)/i,/^(?:!)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:IN)/i,/^(?:NOT)/i,/^(?:-)/i,/^(?:BOUND)/i,/^(?:BNODE)/i,/^(?:(RAND|NOW|UUID|STRUUID))/i,/^(?:(LANG|DATATYPE|IRI|URI|ABS|CEIL|FLOOR|ROUND|STRLEN|STR|UCASE|LCASE|ENCODE_FOR_URI|YEAR|MONTH|DAY|HOURS|MINUTES|SECONDS|TIMEZONE|TZ|MD5|SHA1|SHA256|SHA384|SHA512|isIRI|isURI|isBLANK|isLITERAL|isNUMERIC))/i,/^(?:(LANGMATCHES|CONTAINS|STRSTARTS|STRENDS|STRBEFORE|STRAFTER|STRLANG|STRDT|sameTerm))/i,/^(?:CONCAT)/i,/^(?:COALESCE)/i,/^(?:IF)/i,/^(?:REGEX)/i,/^(?:SUBSTR)/i,/^(?:REPLACE)/i,/^(?:EXISTS)/i,/^(?:COUNT)/i,/^(?:SUM|MIN|MAX|AVG|SAMPLE)/i,/^(?:GROUP_CONCAT)/i,/^(?:SEPARATOR)/i,/^(?:\^\^)/i,/^(?:true|false)/i,/^(?:(<(?:[^<>\"\{\}\|\^`\\\u0000-\u0020])*>))/i,/^(?:((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])(?:(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|\.)*(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040]))?)?:))/i,/^(?:(((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])(?:(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|\.)*(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040]))?)?:)((?:((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|:|[0-9]|((%([0-9A-Fa-f])([0-9A-Fa-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(?:(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|\.|:|((%([0-9A-Fa-f])([0-9A-Fa-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|:|((%([0-9A-Fa-f])([0-9A-Fa-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%)))))?)))/i,/^(?:(_:(?:((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|[0-9])(?:(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|\.)*(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040]))?))/i,/^(?:([\?\$]((?:((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|[0-9])(?:((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])*)))/i,/^(?:(@[a-zA-Z]+(?:-[a-zA-Z0-9]+)*))/i,/^(?:([0-9]+))/i,/^(?:([0-9]*\.[0-9]+))/i,/^(?:([0-9]+\.[0-9]*([eE][+-]?[0-9]+)|\.([0-9])+([eE][+-]?[0-9]+)|([0-9])+([eE][+-]?[0-9]+)))/i,/^(?:(\+([0-9]+)))/i,/^(?:(\+([0-9]*\.[0-9]+)))/i,/^(?:(\+([0-9]+\.[0-9]*([eE][+-]?[0-9]+)|\.([0-9])+([eE][+-]?[0-9]+)|([0-9])+([eE][+-]?[0-9]+))))/i,/^(?:(-([0-9]+)))/i,/^(?:(-([0-9]*\.[0-9]+)))/i,/^(?:(-([0-9]+\.[0-9]*([eE][+-]?[0-9]+)|\.([0-9])+([eE][+-]?[0-9]+)|([0-9])+([eE][+-]?[0-9]+))))/i,/^(?:([eE][+-]?[0-9]+))/i,/^(?:('(?:(?:[^\u0027\u005C\u000A\u000D])|(\\[tbnrf\\\"']|\\u([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])|\\U([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])))*'))/i,/^(?:("(?:(?:[^\u0022\u005C\u000A\u000D])|(\\[tbnrf\\\"']|\\u([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])|\\U([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])))*"))/i,/^(?:('''(?:(?:'|'')?(?:[^'\\]|(\\[tbnrf\\\"']|\\u([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])|\\U([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f]))))*'''))/i,/^(?:("""(?:(?:"|"")?(?:[^\"\\]|(\\[tbnrf\\\"']|\\u([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])|\\U([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f]))))*"""))/i,/^(?:(\((\u0020|\u0009|\u000D|\u000A)*\)))/i,/^(?:(\[(\u0020|\u0009|\u000D|\u000A)*\]))/i,/^(?:$)/i,/^(?:.)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121],inclusive:!0}}};return Gt}();Ti.lexer=xl;function Pt(){this.yy={}}return Pt.prototype=Ti,Ti.Parser=Pt,new Pt}(),SparqlParser_1=SparqlParser,XSD_INTEGER="http://www.w3.org/2001/XMLSchema#integer",XSD_STRING="http://www.w3.org/2001/XMLSchema#string";function Generator$1(X){this._options=X=X||{};var Z=X.prefixes||{};this._prefixByIri={};var G=[];for(var W in Z){var F=Z[W];isString$1(F)&&(this._prefixByIri[F]=W,G.push(F))}var U=G.join("|").replace(/[\]\/\(\)\*\+\?\.\\\$]/g,"\\$&");this._prefixRegex=new RegExp("^("+U+")([a-zA-Z][\\-_a-zA-Z0-9]*)$"),this._usedPrefixes={},this._sparqlStar=X.sparqlStar,this._indent=isString$1(X.indent)?X.indent:"  ",this._newline=isString$1(X.newline)?X.newline:`
${D}`)}await Y.body?.cancel()}Z.validateHttpResponse=U},"../node_modules/@comunica/bus-rdf-update-quads/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/bus-rdf-update-quads/lib/ActorRdfUpdateQuads.js"),Z),F(G("../node_modules/@comunica/bus-rdf-update-quads/lib/ActorRdfUpdateQuadsDestination.js"),Z),F(G("../node_modules/@comunica/bus-rdf-update-quads/lib/IQuadDestination.js"),Z),F(G("../node_modules/@comunica/bus-rdf-update-quads/lib/utils.js"),Z)},"../node_modules/@comunica/bus-rdf-update-quads/lib/utils.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.getContextDestinationUrl=Z.getContextDestinationFirst=Z.getContextDestination=Z.getDataDestinationContext=Z.getDataDestinationValue=Z.getDataDestinationType=Z.isDataDestinationRawType=void 0;const W=G("../node_modules/@comunica/context-entries/lib/index.js");function F(q){return typeof q=="string"||"remove"in q}Z.isDataDestinationRawType=F;function U(q){return typeof q=="string"?"":"remove"in q?"rdfjsStore":q.type}Z.getDataDestinationType=U;function J(q){return F(q)?q:q.value}Z.getDataDestinationValue=J;function Y(q,te){return typeof q=="string"||"remove"in q||!q.context?te:te.merge(q.context)}Z.getDataDestinationContext=Y;function D(q){return q.get(W.KeysRdfUpdateQuads.destination)}Z.getContextDestination=D;function Q(q){if(q.has(W.KeysRdfUpdateQuads.destination))return q.get(W.KeysRdfUpdateQuads.destination)}Z.getContextDestinationFirst=Q;function ee(q){if(q){let te=J(q);if(typeof te=="string"){const ie=te.indexOf("#");return ie>=0&&(te=te.slice(0,ie)),te}}}Z.getContextDestinationUrl=ee},"../node_modules/@comunica/context-entries/lib/Keys.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.KeysRdfUpdateQuads=Z.KeysRdfResolveQuadPattern=Z.KeysRdfParseHtmlScript=Z.KeysRdfParseJsonLd=Z.KeysQueryOperation=Z.KeysInitQuery=Z.KeysHttpProxy=Z.KeysHttpMemento=Z.KeysHttpWayback=Z.KeysHttp=Z.KeysCore=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");Z.KeysCore={log:W.CONTEXT_KEY_LOGGER},Z.KeysHttp={includeCredentials:new W.ActionContextKey("@comunica/bus-http:include-credentials"),auth:new W.ActionContextKey("@comunica/bus-http:auth"),fetch:new W.ActionContextKey("@comunica/bus-http:fetch"),httpTimeout:new W.ActionContextKey("@comunica/bus-http:http-timeout"),httpBodyTimeout:new W.ActionContextKey("@comunica/bus-http:http-body-timeout"),httpRetryCount:new W.ActionContextKey("@comunica/bus-http:http-retry-count"),httpRetryDelay:new W.ActionContextKey("@comunica/bus-http:http-retry-delay"),httpRetryOnServerError:new W.ActionContextKey("@comunica/bus-http:http-retry-on-server-error")},Z.KeysHttpWayback={recoverBrokenLinks:new W.ActionContextKey("@comunica/bus-http:recover-broken-links")},Z.KeysHttpMemento={datetime:new W.ActionContextKey("@comunica/actor-http-memento:datetime")},Z.KeysHttpProxy={httpProxyHandler:new W.ActionContextKey("@comunica/actor-http-proxy:httpProxyHandler")},Z.KeysInitQuery={initialBindings:new W.ActionContextKey("@comunica/actor-init-query:initialBindings"),queryFormat:new W.ActionContextKey("@comunica/actor-init-query:queryFormat"),graphqlSingularizeVariables:new W.ActionContextKey("@comunica/actor-init-query:singularizeVariables"),lenient:new W.ActionContextKey("@comunica/actor-init-query:lenient"),queryString:new W.ActionContextKey("@comunica/actor-init-query:queryString"),query:new W.ActionContextKey("@comunica/actor-init-query:query"),baseIRI:new W.ActionContextKey("@comunica/actor-init-query:baseIRI"),functionArgumentsCache:new W.ActionContextKey("@comunica/actor-init-query:functionArgumentsCache"),queryTimestamp:new W.ActionContextKey("@comunica/actor-init-query:queryTimestamp"),extensionFunctionCreator:new W.ActionContextKey("@comunica/actor-init-query:extensionFunctionCreator"),extensionFunctions:new W.ActionContextKey("@comunica/actor-init-query:extensionFunctions"),cliArgsHandlers:new W.ActionContextKey("@comunica/actor-init-query:cliArgsHandlers"),explain:new W.ActionContextKey("@comunica/actor-init-query:explain"),physicalQueryPlanLogger:new W.ActionContextKey("@comunica/actor-init-query:physicalQueryPlanLogger"),physicalQueryPlanNode:new W.ActionContextKey("@comunica/actor-init-query:physicalQueryPlanNode"),jsonLdContext:new W.ActionContextKey("@context")},Z.KeysQueryOperation={operation:new W.ActionContextKey("@comunica/bus-query-operation:operation"),joinLeftMetadata:new W.ActionContextKey("@comunica/bus-query-operation:joinLeftMetadata"),joinRightMetadatas:new W.ActionContextKey("@comunica/bus-query-operation:joinRightMetadatas"),joinBindings:new W.ActionContextKey("@comunica/bus-query-operation:joinBindings"),readOnly:new W.ActionContextKey("@comunica/bus-query-operation:readOnly"),isPathArbitraryLengthDistinctKey:new W.ActionContextKey("@comunica/bus-query-operation:isPathArbitraryLengthDistinct"),limitIndicator:new W.ActionContextKey("@comunica/bus-query-operation:limitIndicator"),unionDefaultGraph:new W.ActionContextKey("@comunica/bus-query-operation:unionDefaultGraph"),localizeBlankNodes:new W.ActionContextKey("@comunica/actor-query-operation:localizeBlankNodes")},Z.KeysRdfParseJsonLd={documentLoader:new W.ActionContextKey("@comunica/actor-rdf-parse-jsonld:documentLoader"),strictValues:new W.ActionContextKey("@comunica/actor-rdf-parse-jsonld:strictValues"),parserOptions:new W.ActionContextKey("@comunica/actor-rdf-parse-jsonld:parserOptions")},Z.KeysRdfParseHtmlScript={processingHtmlScript:new W.ActionContextKey("@comunica/actor-rdf-parse-html-script:processingHtmlScript"),extractAllScripts:new W.ActionContextKey("extractAllScripts")},Z.KeysRdfResolveQuadPattern={sources:new W.ActionContextKey("@comunica/bus-rdf-resolve-quad-pattern:sources"),source:new W.ActionContextKey("@comunica/bus-rdf-resolve-quad-pattern:source"),sourceIds:new W.ActionContextKey("@comunica/bus-rdf-resolve-quad-pattern:sourceIds"),hypermediaSourcesAggregatedStores:new W.ActionContextKey("@comunica/bus-rdf-resolve-quad-pattern:hypermediaSourcesAggregatedStores")},Z.KeysRdfUpdateQuads={destination:new W.ActionContextKey("@comunica/bus-rdf-update-quads:destination")}},"../node_modules/@comunica/context-entries/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/context-entries/lib/Keys.js"),Z)},"../node_modules/@comunica/core/lib/ActionContext.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.ActionContextKey=Z.ActionContext=void 0;const W=G("../packages/immutable/dist/index.js");class F{constructor(Y={}){this.map=(0,W.Map)(Y)}setDefault(Y,D){return this.has(Y)?this:this.set(Y,D)}set(Y,D){return this.setRaw(Y.name,D)}setRaw(Y,D){return new F(this.map.set(Y,D))}delete(Y){return new F(this.map.delete(Y.name))}get(Y){return this.getRaw(Y.name)}getRaw(Y){return this.map.get(Y)}getSafe(Y){if(!this.has(Y))throw new Error(`Context entry ${Y.name} is required but not available`);return this.get(Y)}has(Y){return this.hasRaw(Y.name)}hasRaw(Y){return this.map.has(Y)}merge(...Y){let D=this;for(const Q of Y)for(const ee of Q.keys())D=D.set(ee,Q.get(ee));return D}keys(){return[...this.map.keys()].map(Y=>new U(Y))}toJS(){return this.map.toJS()}toString(){return`ActionContext(${JSON.stringify(this.map.toJS())})`}[Symbol.for("nodejs.util.inspect.custom")](){return`ActionContext(${JSON.stringify(this.map.toJS(),null,"  ")})`}static ensureActionContext(Y){return Y instanceof F?Y:new F((0,W.Map)(Y||{}))}}Z.ActionContext=F;class U{constructor(Y){this.name=Y}}Z.ActionContextKey=U},"../node_modules/@comunica/core/lib/ActionObserver.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.ActionObserver=void 0;class G{constructor(F){Object.assign(this,F)}}Z.ActionObserver=G},"../node_modules/@comunica/core/lib/Actor.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.Actor=void 0;const W=G("../node_modules/@comunica/core/lib/ContextEntries.js");class F{constructor(J){this.beforeActors=[],Object.assign(this,J),this.bus.subscribe(this),this.beforeActors.length>0&&this.bus.addDependencies(this,this.beforeActors)}static getContextLogger(J){return J.get(W.CONTEXT_KEY_LOGGER)}runObservable(J){const Y=this.run(J);return this.bus.onRun(this,J,Y),Y}async initialize(){return!0}async deinitialize(){return!0}getDefaultLogData(J,Y){const D=Y?Y():{};return D.actor=this.name,D}logTrace(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.trace(Y,this.getDefaultLogData(J,D))}logDebug(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.debug(Y,this.getDefaultLogData(J,D))}logInfo(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.info(Y,this.getDefaultLogData(J,D))}logWarn(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.warn(Y,this.getDefaultLogData(J,D))}logError(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.error(Y,this.getDefaultLogData(J,D))}logFatal(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.fatal(Y,this.getDefaultLogData(J,D))}}Z.Actor=F},"../node_modules/@comunica/core/lib/Bus.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.Bus=void 0;class G{constructor(F){this.actors=[],this.observers=[],this.dependencyLinks=new Map,Object.assign(this,F)}subscribe(F){this.actors.push(F),this.reorderForDependencies()}subscribeObserver(F){this.observers.push(F)}unsubscribe(F){const U=this.actors.indexOf(F);return U>=0?(this.actors.splice(U,1),!0):!1}unsubscribeObserver(F){const U=this.observers.indexOf(F);return U>=0?(this.observers.splice(U,1),!0):!1}publish(F){return this.actors.map(U=>({actor:U,reply:U.test(F)}))}onRun(F,U,J){for(const Y of this.observers)Y.onRun(F,U,J)}addDependencies(F,U){for(const J of U){let Y=this.dependencyLinks.get(J);Y||(Y=[],this.dependencyLinks.set(J,Y)),Y.push(F)}this.reorderForDependencies()}reorderForDependencies(){if(this.dependencyLinks.size>0){const F=[];for(const U of this.dependencyLinks.keys()){const J=this.actors.indexOf(U);J>=0&&(this.actors.splice(J,1),F.push(U))}for(;F.length>0;){let U=-1;for(let Y=0;Y<F.length;Y++){let D=!0;for(const Q of this.dependencyLinks.get(F[Y]))if(!this.actors.includes(Q)&&F.includes(Q)){D=!1;break}if(D){U=Y;break}}if(U<0)throw new Error(`Cyclic dependency links detected in bus ${this.name}`);const J=F.splice(U,1)[0];this.actors.push(J)}}}}Z.Bus=G},"../node_modules/@comunica/core/lib/BusIndexed.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.BusIndexed=void 0;const W=G("../node_modules/@comunica/core/lib/Bus.js");class F extends W.Bus{constructor(J){super(J),this.actorsIndex={}}subscribe(J){const Y=this.getActorIdentifier(J)||"_undefined_";let D=this.actorsIndex[Y];D||(D=this.actorsIndex[Y]=[]),D.push(J),super.subscribe(J)}unsubscribe(J){const Y=this.getActorIdentifier(J)||"_undefined_",D=this.actorsIndex[Y];if(D){const Q=D.indexOf(J);Q>=0&&D.splice(Q,1),D.length===0&&delete this.actorsIndex[Y]}return super.unsubscribe(J)}publish(J){const Y=this.getActionIdentifier(J);return Y?[...this.actorsIndex[Y]||[],...this.actorsIndex._undefined_||[]].map(Q=>({actor:Q,reply:Q.test(J)})):super.publish(J)}getActorIdentifier(J){return this.actorIdentifierFields.reduce((Y,D)=>Y[D],J)}getActionIdentifier(J){return this.actionIdentifierFields.reduce((Y,D)=>Y[D],J)}}Z.BusIndexed=F},"../node_modules/@comunica/core/lib/ContextEntries.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.CONTEXT_KEY_LOGGER=void 0;const W=G("../node_modules/@comunica/core/lib/ActionContext.js");Z.CONTEXT_KEY_LOGGER=new W.ActionContextKey("@comunica/core:log")},"../node_modules/@comunica/core/lib/Mediator.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.Mediator=void 0;class G{constructor(F){Object.assign(this,F)}publish(F){const U=this.bus.publish(F);if(U.length===0)throw new Error(`No actors are able to reply to a message in the bus ${this.bus.name}`);return U}async mediateActor(F){return await this.mediateWith(F,this.publish(F))}async mediate(F){return(await this.mediateActor(F)).runObservable(F)}}Z.Mediator=G},"../node_modules/@comunica/core/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(Y,D,Q,ee){ee===void 0&&(ee=Q);var q=Object.getOwnPropertyDescriptor(D,Q);(!q||("get"in q?!D.__esModule:q.writable||q.configurable))&&(q={enumerable:!0,get:function(){return D[Q]}}),Object.defineProperty(Y,ee,q)}:function(Y,D,Q,ee){ee===void 0&&(ee=Q),Y[ee]=D[Q]}),F=this&&this.__exportStar||function(Y,D){for(var Q in Y)Q!=="default"&&!Object.prototype.hasOwnProperty.call(D,Q)&&W(D,Y,Q)};Object.defineProperty(Z,"__esModule",{value:!0}),Z.Logger=void 0;const J=G("../node_modules/@comunica/types/lib/index.js").Logger;Z.Logger=J,F(G("../node_modules/@comunica/core/lib/ActionContext.js"),Z),F(G("../node_modules/@comunica/core/lib/Bus.js"),Z),F(G("../node_modules/@comunica/core/lib/BusIndexed.js"),Z),F(G("../node_modules/@comunica/core/lib/ContextEntries.js"),Z),F(G("../node_modules/@comunica/core/lib/ActionObserver.js"),Z),F(G("../node_modules/@comunica/core/lib/Actor.js"),Z),F(G("../node_modules/@comunica/core/lib/Mediator.js"),Z)},"../node_modules/@comunica/data-factory/lib/BlankNodeBindingsScoped.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.BlankNodeBindingsScoped=void 0;class G{constructor(F){this.termType="BlankNode",this.singleBindingsScope=!0,this.value=F}equals(F){return!!F&&F.termType==="BlankNode"&&F.value===this.value}}Z.BlankNodeBindingsScoped=G},"../node_modules/@comunica/data-factory/lib/BlankNodeScoped.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.BlankNodeScoped=void 0;class G{constructor(F,U){this.termType="BlankNode",this.value=F,this.skolemized=U}equals(F){return!!F&&F.termType==="BlankNode"&&F.value===this.value}}Z.BlankNodeScoped=G},"../node_modules/@comunica/data-factory/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/data-factory/lib/BlankNodeScoped.js"),Z),F(G("../node_modules/@comunica/data-factory/lib/BlankNodeBindingsScoped.js"),Z)},"../node_modules/@comunica/logger-void/lib/LoggerVoid.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.LoggerVoid=void 0;const W=G("../node_modules/@comunica/types/lib/index.js");class F extends W.Logger{debug(){}error(){}fatal(){}info(){}trace(){}warn(){}}Z.LoggerVoid=F},"../node_modules/@comunica/logger-void/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/logger-void/lib/LoggerVoid.js"),Z)},"../node_modules/@comunica/mediator-all/lib/MediatorAll.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorAll=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J)}async mediate(J){const Y=[];let D;try{D=this.publish(J)}catch{D=[]}for(const ee of D)try{await ee.reply,Y.push(ee.actor)}catch{}return(await Promise.all(Y.map(ee=>ee.runObservable(J))))[0]}async mediateWith(){throw new Error("Unsupported operation: MediatorAll#mediateWith")}}Z.MediatorAll=F},"../node_modules/@comunica/mediator-all/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-all/lib/MediatorAll.js"),Z)},"../node_modules/@comunica/mediator-combine-pipeline/lib/MediatorCombinePipeline.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorCombinePipeline=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J)}async mediate(J){let Y;try{Y=this.publish(J)}catch{return J}if(this.filterErrors){const Q=[];for(const ee of Y)try{await ee.reply,Q.push(ee)}catch{}Y=Q}if(Y=await Promise.all(Y.map(async({actor:Q,reply:ee})=>({actor:Q,reply:await ee}))),this.order){const Q=ee=>{const q=this.field?ee[this.field]:ee;if(typeof q!="number")throw new Error("Cannot order elements that are not numbers.");return q};Y=Y.sort((ee,q)=>(this.order==="increasing"?1:-1)*(Q(ee.reply)-Q(q.reply)))}let D=J;for(const{actor:Q}of Y)D={...D,...await Q.runObservable(D)};return D}mediateWith(){throw new Error("Method not supported.")}}Z.MediatorCombinePipeline=F},"../node_modules/@comunica/mediator-combine-pipeline/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-combine-pipeline/lib/MediatorCombinePipeline.js"),Z)},"../node_modules/@comunica/mediator-combine-union/lib/MediatorCombineUnion.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorCombineUnion=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J),this.combiner=this.createCombiner()}async mediate(J){let Y;try{Y=this.publish(J)}catch{Y=[]}await Promise.all(Y.map(({reply:Q})=>Q));const D=await Promise.all(Y.map(Q=>Q.actor.runObservable(J)));return this.combiner(D)}mediateWith(){throw new Error("Method not supported.")}createCombiner(){return J=>{const Y={};return Y[this.field]={},[{}].concat(J.map(D=>D[this.field])).forEach((D,Q,ee)=>{Y[this.field]={...D,...Y[this.field]}}),Y}}}Z.MediatorCombineUnion=F},"../node_modules/@comunica/mediator-combine-union/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-combine-union/lib/MediatorCombineUnion.js"),Z)},"../node_modules/@comunica/mediator-join-coefficients-fixed/lib/MediatorJoinCoefficientsFixed.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorJoinCoefficientsFixed=void 0;const W=G("../node_modules/@comunica/context-entries/lib/index.js"),F=G("../node_modules/@comunica/core/lib/index.js");class U extends F.Mediator{constructor(Y){super(Y)}async mediateWith(Y,D){const Q=[],ee=D.map(({reply:pe})=>pe).map(pe=>pe.catch(ue=>{Q.push(ue)})),q=await Promise.all(ee);let te=q.map((pe,ue)=>{if(pe)return pe.iterations*this.cpuWeight+pe.persistedItems*this.memoryWeight+pe.blockingItems*this.timeWeight+pe.requestTime*this.ioWeight});const ie=Math.max(...te.filter(pe=>pe!==void 0)),ne=Y.context.get(W.KeysQueryOperation.limitIndicator);ne&&(te=te.map((pe,ue)=>pe!==void 0&&q[ue].persistedItems>0&&q[ue].iterations>ne?pe+ie:pe));let ce=-1,le=Number.POSITIVE_INFINITY;for(const[pe,ue]of te.entries())ue!==void 0&&(ce===-1||ue<le)&&(ce=pe,le=ue);if(ce<0)throw new Error(`All actors rejected their test in ${this.name}
${Q.map(pe=>pe.message).join(`
`)}`);const se=D[ce].actor;return se.includeInLogs&&F.Actor.getContextLogger(Y.context)?.debug(`Determined physical join operator '${se.logicalType}-${se.physicalName}'`,{entries:Y.entries.length,variables:await Promise.all(Y.entries.map(async pe=>(await pe.output.metadata()).variables.map(ue=>ue.value))),costs:Object.fromEntries(te.map((pe,ue)=>[`${D[ue].actor.logicalType}-${D[ue].actor.physicalName}`,pe])),coefficients:Object.fromEntries(q.map((pe,ue)=>[`${D[ue].actor.logicalType}-${D[ue].actor.physicalName}`,pe]))}),se}}Z.MediatorJoinCoefficientsFixed=U},"../node_modules/@comunica/mediator-join-coefficients-fixed/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-join-coefficients-fixed/lib/MediatorJoinCoefficientsFixed.js"),Z)},"../node_modules/@comunica/mediator-number/lib/MediatorNumber.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorNumber=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J),this.indexPicker=this.createIndexPicker()}createIndexPicker(){switch(this.type){case"min":return J=>J.reduce((Y,D,Q)=>{const ee=this.getOrDefault(D[this.field],Number.POSITIVE_INFINITY);return ee!==null&&(Number.isNaN(Y[0])||Y[0]>ee)?[ee,Q]:Y},[Number.NaN,-1])[1];case"max":return J=>J.reduce((Y,D,Q)=>{const ee=this.getOrDefault(D[this.field],Number.NEGATIVE_INFINITY);return ee!==null&&(Number.isNaN(Y[0])||Y[0]<ee)?[ee,Q]:Y},[Number.NaN,-1])[1];default:throw new Error(`No valid "type" value was given, must be either 'min' or 'max', but got: ${this.type}`)}}getOrDefault(J,Y){return J===void 0?Y:J}async mediateWith(J,Y){let D=Y.map(({reply:te})=>te);const Q=[];if(this.ignoreErrors){const te={};te[this.field]=null,D=D.map(ie=>ie.catch(ne=>(Q.push(ne),te)))}const ee=await Promise.all(D),q=this.indexPicker(ee);if(q<0)throw new Error(`All actors rejected their test in ${this.name}
${Q.map(te=>te.message).join(`
`)}`);return Y[q].actor}}Z.MediatorNumber=F},"../node_modules/@comunica/mediator-number/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-number/lib/MediatorNumber.js"),Z)},"../node_modules/@comunica/mediator-race/lib/MediatorRace.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorRace=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J)}mediateWith(J,Y){return new Promise((D,Q)=>{const ee=[];for(const q of Y)q.reply.then(()=>{D(q.actor)}).catch(te=>{ee.push(te),ee.length===Y.length&&Q(new Error(`${this.name} mediated over all rejecting actors:
${ee.map(ie=>ie.message).join(`
  PREFIX sources: <${DOWNSTREAM_FROM}>
  SELECT DISTINCT ?downstream WHERE {
    ?downstream sources: <${X}> .
  }`,directUpstreamQuery=X=>`
  PREFIX sources: <${DOWNSTREAM_FROM}>
  SELECT DISTINCT ?upstream WHERE {
    <${X}> sources: ?upstream .
  }`;var freeGlobal=typeof global=="object"&&global&&global.Object===Object&&global;const freeGlobal$1=freeGlobal;var freeSelf=typeof self=="object"&&self&&self.Object===Object&&self,root$1=freeGlobal$1||freeSelf||Function("return this")();const root$2=root$1;var Symbol$1=root$2.Symbol;const Symbol$2=Symbol$1;var objectProto$4=Object.prototype,hasOwnProperty$4=objectProto$4.hasOwnProperty,nativeObjectToString$1=objectProto$4.toString,symToStringTag$1=Symbol$2?Symbol$2.toStringTag:void 0;function getRawTag(X){var Z=hasOwnProperty$4.call(X,symToStringTag$1),G=X[symToStringTag$1];try{X[symToStringTag$1]=void 0;var W=!0}catch{}var F=nativeObjectToString$1.call(X);return W&&(Z?X[symToStringTag$1]=G:delete X[symToStringTag$1]),F}var objectProto$3=Object.prototype,nativeObjectToString=objectProto$3.toString;function objectToString(X){return nativeObjectToString.call(X)}var nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$2?Symbol$2.toStringTag:void 0;function baseGetTag(X){return X==null?X===void 0?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(X)?getRawTag(X):objectToString(X)}function isObjectLike(X){return X!=null&&typeof X=="object"}var symbolTag="[object Symbol]";function isSymbol(X){return typeof X=="symbol"||isObjectLike(X)&&baseGetTag(X)==symbolTag}function arrayMap(X,Z){for(var G=-1,W=X==null?0:X.length,F=Array(W);++G<W;)F[G]=Z(X[G],G,X);return F}var isArray=Array.isArray;const isArray$1=isArray;var INFINITY$1=1/0,symbolProto=Symbol$2?Symbol$2.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;function baseToString(X){if(typeof X=="string")return X;if(isArray$1(X))return arrayMap(X,baseToString)+"";if(isSymbol(X))return symbolToString?symbolToString.call(X):"";var Z=X+"";return Z=="0"&&1/X==-INFINITY$1?"-0":Z}var reWhitespace=/\s/;function trimmedEndIndex(X){for(var Z=X.length;Z--&&reWhitespace.test(X.charAt(Z)););return Z}var reTrimStart=/^\s+/;function baseTrim(X){return X&&X.slice(0,trimmedEndIndex(X)+1).replace(reTrimStart,"")}function isObject(X){var Z=typeof X;return X!=null&&(Z=="object"||Z=="function")}var NAN=0/0,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;function toNumber(X){if(typeof X=="number")return X;if(isSymbol(X))return NAN;if(isObject(X)){var Z=typeof X.valueOf=="function"?X.valueOf():X;X=isObject(Z)?Z+"":Z}if(typeof X!="string")return X===0?X:+X;X=baseTrim(X);var G=reIsBinary.test(X);return G||reIsOctal.test(X)?freeParseInt(X.slice(2),G?2:8):reIsBadHex.test(X)?NAN:+X}var INFINITY=1/0,MAX_INTEGER=17976931348623157e292;function toFinite(X){if(!X)return X===0?X:0;if(X=toNumber(X),X===INFINITY||X===-INFINITY){var Z=X<0?-1:1;return Z*MAX_INTEGER}return X===X?X:0}function toInteger(X){var Z=toFinite(X),G=Z%1;return Z===Z?G?Z-G:Z:0}function identity$2(X){return X}var asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(X){if(!isObject(X))return!1;var Z=baseGetTag(X);return Z==funcTag||Z==genTag||Z==asyncTag||Z==proxyTag}var coreJsData=root$2["__core-js_shared__"];const coreJsData$1=coreJsData;var maskSrcKey=function(){var X=/[^.]+$/.exec(coreJsData$1&&coreJsData$1.keys&&coreJsData$1.keys.IE_PROTO||"");return X?"Symbol(src)_1."+X:""}();function isMasked(X){return!!maskSrcKey&&maskSrcKey in X}var funcProto$1=Function.prototype,funcToString$1=funcProto$1.toString;function toSource(X){if(X!=null){try{return funcToString$1.call(X)}catch{}try{return X+""}catch{}}return""}var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto$2=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$3=objectProto$2.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty$3).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(X){if(!isObject(X)||isMasked(X))return!1;var Z=isFunction(X)?reIsNative:reIsHostCtor;return Z.test(toSource(X))}function getValue(X,Z){return X?.[Z]}function getNative(X,Z){var G=getValue(X,Z);return baseIsNative(G)?G:void 0}var WeakMap$1=getNative(root$2,"WeakMap");const WeakMap$2=WeakMap$1;var metaMap=WeakMap$2&&new WeakMap$2;const metaMap$1=metaMap;var baseSetData=metaMap$1?function(X,Z){return metaMap$1.set(X,Z),X}:identity$2;const baseSetData$1=baseSetData;var objectCreate=Object.create,baseCreate=function(){function X(){}return function(Z){if(!isObject(Z))return{};if(objectCreate)return objectCreate(Z);X.prototype=Z;var G=new X;return X.prototype=void 0,G}}();const baseCreate$1=baseCreate;function createCtor(X){return function(){var Z=arguments;switch(Z.length){case 0:return new X;case 1:return new X(Z[0]);case 2:return new X(Z[0],Z[1]);case 3:return new X(Z[0],Z[1],Z[2]);case 4:return new X(Z[0],Z[1],Z[2],Z[3]);case 5:return new X(Z[0],Z[1],Z[2],Z[3],Z[4]);case 6:return new X(Z[0],Z[1],Z[2],Z[3],Z[4],Z[5]);case 7:return new X(Z[0],Z[1],Z[2],Z[3],Z[4],Z[5],Z[6])}var G=baseCreate$1(X.prototype),W=X.apply(G,Z);return isObject(W)?W:G}}var WRAP_BIND_FLAG$6=1;function createBind(X,Z,G){var W=Z&WRAP_BIND_FLAG$6,F=createCtor(X);function U(){var J=this&&this!==root$2&&this instanceof U?F:X;return J.apply(W?G:this,arguments)}return U}function apply(X,Z,G){switch(G.length){case 0:return X.call(Z);case 1:return X.call(Z,G[0]);case 2:return X.call(Z,G[0],G[1]);case 3:return X.call(Z,G[0],G[1],G[2])}return X.apply(Z,G)}var nativeMax$3=Math.max;function composeArgs(X,Z,G,W){for(var F=-1,U=X.length,J=G.length,Y=-1,D=Z.length,Q=nativeMax$3(U-J,0),ee=Array(D+Q),q=!W;++Y<D;)ee[Y]=Z[Y];for(;++F<J;)(q||F<U)&&(ee[G[F]]=X[F]);for(;Q--;)ee[Y++]=X[F++];return ee}var nativeMax$2=Math.max;function composeArgsRight(X,Z,G,W){for(var F=-1,U=X.length,J=-1,Y=G.length,D=-1,Q=Z.length,ee=nativeMax$2(U-Y,0),q=Array(ee+Q),te=!W;++F<ee;)q[F]=X[F];for(var ie=F;++D<Q;)q[ie+D]=Z[D];for(;++J<Y;)(te||F<U)&&(q[ie+G[J]]=X[F++]);return q}function countHolders(X,Z){for(var G=X.length,W=0;G--;)X[G]===Z&&++W;return W}function baseLodash(){}var MAX_ARRAY_LENGTH=4294967295;function LazyWrapper(X){this.__wrapped__=X,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=MAX_ARRAY_LENGTH,this.__views__=[]}LazyWrapper.prototype=baseCreate$1(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;function noop$2(){}var getData=metaMap$1?function(X){return metaMap$1.get(X)}:noop$2;const getData$1=getData;var realNames={};const realNames$1=realNames;var objectProto$1=Object.prototype,hasOwnProperty$2=objectProto$1.hasOwnProperty;function getFuncName(X){for(var Z=X.name+"",G=realNames$1[Z],W=hasOwnProperty$2.call(realNames$1,Z)?G.length:0;W--;){var F=G[W],U=F.func;if(U==null||U==X)return F.name}return Z}function LodashWrapper(X,Z){this.__wrapped__=X,this.__actions__=[],this.__chain__=!!Z,this.__index__=0,this.__values__=void 0}LodashWrapper.prototype=baseCreate$1(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;function copyArray(X,Z){var G=-1,W=X.length;for(Z||(Z=Array(W));++G<W;)Z[G]=X[G];return Z}function wrapperClone(X){if(X instanceof LazyWrapper)return X.clone();var Z=new LodashWrapper(X.__wrapped__,X.__chain__);return Z.__actions__=copyArray(X.__actions__),Z.__index__=X.__index__,Z.__values__=X.__values__,Z}var objectProto=Object.prototype,hasOwnProperty$1=objectProto.hasOwnProperty;function lodash(X){if(isObjectLike(X)&&!isArray$1(X)&&!(X instanceof LazyWrapper)){if(X instanceof LodashWrapper)return X;if(hasOwnProperty$1.call(X,"__wrapped__"))return wrapperClone(X)}return new LodashWrapper(X)}lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;function isLaziable(X){var Z=getFuncName(X),G=lodash[Z];if(typeof G!="function"||!(Z in LazyWrapper.prototype))return!1;if(X===G)return!0;var W=getData$1(G);return!!W&&X===W[0]}var HOT_COUNT=800,HOT_SPAN=16,nativeNow=Date.now;function shortOut(X){var Z=0,G=0;return function(){var W=nativeNow(),F=HOT_SPAN-(W-G);if(G=W,F>0){if(++Z>=HOT_COUNT)return arguments[0]}else Z=0;return X.apply(void 0,arguments)}}var setData=shortOut(baseSetData$1);const setData$1=setData;var reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;function getWrapDetails(X){var Z=X.match(reWrapDetails);return Z?Z[1].split(reSplitDetails):[]}var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;function insertWrapDetails(X,Z){var G=Z.length;if(!G)return X;var W=G-1;return Z[W]=(G>1?"& ":"")+Z[W],Z=Z.join(G>2?", ":" "),X.replace(reWrapComment,`{
/* [wrapped with `+Z+`] */
`,Y=Array(U+1).join(" "),D=[];for(let Q=0;Q<Z;++Q){let ee=getVariableName$1(Q),q=Q===0?"":Y;D.push(q+W.replace(/{var}/g,ee))}return D.join(J)}};const createPatternBuilder$5=createPatternBuilder$6;generateCreateBody.exports=generateCreateBodyFunction$1;generateCreateBodyExports.generateCreateBodyFunctionBody=generateCreateBodyFunctionBody;generateCreateBodyExports.getVectorCode=getVectorCode;generateCreateBodyExports.getBodyCode=getBodyCode;function generateCreateBodyFunction$1(X,Z){let G=generateCreateBodyFunctionBody(X,Z),{Body:W}=new Function(G)();return W}function generateCreateBodyFunctionBody(X,Z){return`
${getVectorCode(X,Z)}
${getBodyCode(X)}
return {Body: Body, Vector: Vector};
`}function getBodyCode(X){let Z=createPatternBuilder$5(X),G=Z("{var}",{join:", "});return`
function Body(${G}) {
  this.isPinned = false;
  this.pos = new Vector(${G});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${G}) {
  ${Z("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function getVectorCode(X,Z){let G=createPatternBuilder$5(X),W="";return Z&&(W=`${G(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${G("{var}",{join:", "})}) {
  ${W}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${G('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${G("this.{var} = v.{var};",{indent:4})}
    } else {
      ${G('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${G("this.{var} = ",{join:""})}0;
  };`}var generateQuadTreeExports={},generateQuadTree={get exports(){return generateQuadTreeExports},set exports(X){generateQuadTreeExports=X}};const createPatternBuilder$4=createPatternBuilder$6,getVariableName=getVariableName$2;generateQuadTree.exports=generateQuadTreeFunction$1;generateQuadTreeExports.generateQuadTreeFunctionBody=generateQuadTreeFunctionBody;generateQuadTreeExports.getInsertStackCode=getInsertStackCode;generateQuadTreeExports.getQuadNodeCode=getQuadNodeCode;generateQuadTreeExports.isSamePosition=isSamePosition;generateQuadTreeExports.getChildBodyCode=getChildBodyCode;generateQuadTreeExports.setChildBodyCode=setChildBodyCode;function generateQuadTreeFunction$1(X){let Z=generateQuadTreeFunctionBody(X);return new Function(Z)()}function generateQuadTreeFunctionBody(X){let Z=createPatternBuilder$4(X),G=Math.pow(2,X);return`
${getInsertStackCode()}
${getQuadNodeCode(X)}
${isSamePosition(X)}
${getChildBodyCode(X)}
${setChildBodyCode(X)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${J("      node.")}
      node.body = null;
      node.mass = ${Z("node.mass_{var} = ",{join:""})}0;
      ${Z("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${Z("var d{var};",{indent:4})}
    var r; 
    ${Z("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${Z("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${Z("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${Z("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${Z("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${Z("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${Z("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${Z("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${Z("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${Z("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${getVariableName(0)} - node.min_${getVariableName(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${Z("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${U()}
        }
      }
    }

    ${Z("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${Z("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${Z("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${Z("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${Z("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${Z("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${Z("root.min_{var} = {var}min;",{indent:4})}
    ${Z("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${Z("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${Z("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${Z("var min_{var} = node.min_{var};",{indent:8})}
        ${Z("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${F(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${Z("child.min_{var} = min_{var};",{indent:10})}
          ${Z("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${Z("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${Z("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function F(Y){let D=[],Q=Array(Y+1).join(" ");for(let ee=0;ee<X;++ee)D.push(Q+`if (${getVariableName(ee)} > max_${getVariableName(ee)}) {`),D.push(Q+`  quadIdx = quadIdx + ${Math.pow(2,ee)};`),D.push(Q+`  min_${getVariableName(ee)} = max_${getVariableName(ee)};`),D.push(Q+`  max_${getVariableName(ee)} = node.max_${getVariableName(ee)};`),D.push(Q+"}");return D.join(`
`)}function U(){let Y=Array(11).join(" "),D=[];for(let Q=0;Q<G;++Q)D.push(Y+`if (node.quad${Q}) {`),D.push(Y+`  queue[pushIdx] = node.quad${Q};`),D.push(Y+"  queueLength += 1;"),D.push(Y+"  pushIdx += 1;"),D.push(Y+"}");return D.join(`
`)}function J(Y){let D=[];for(let Q=0;Q<G;++Q)D.push(`${Y}quad${Q} = null;`);return D.join(`
`)}}function isSamePosition(X){let Z=createPatternBuilder$4(X);return`
  function isSamePosition(point1, point2) {
    ${Z("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${Z("d{var} < 1e-8",{join:" && "})};
  }  
`}function setChildBodyCode(X){var Z=Math.pow(2,X);return`
function setChild(node, idx, child) {
  ${G()}
}`;function G(){let W=[];for(let F=0;F<Z;++F){let U=F===0?"  ":"  else ";W.push(`${U}if (idx === ${F}) node.quad${F} = child;`)}return W.join(`
`)}}function getChildBodyCode(X){return`function getChild(node, idx) {
${Z()}
  return null;
}`;function Z(){let G=[],W=Math.pow(2,X);for(let F=0;F<W;++F)G.push(`  if (idx === ${F}) return node.quad${F};`);return G.join(`
`)}}function getQuadNodeCode(X){let Z=createPatternBuilder$4(X),G=Math.pow(2,X);var W=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${F("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${Z("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${Z("this.min_{var} = 0;",{indent:2})}
  ${Z("this.max_{var} = 0;",{indent:2})}
}
`;return W;function F(U){let J=[];for(let Y=0;Y<G;++Y)J.push(`${U}quad${Y} = null;`);return J.join(`
`)}}function getInsertStackCode(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var generateBoundsExports={},generateBounds={get exports(){return generateBoundsExports},set exports(X){generateBoundsExports=X}};generateBounds.exports=generateBoundsFunction$1;generateBoundsExports.generateFunctionBody=generateBoundsFunctionBody;const createPatternBuilder$3=createPatternBuilder$6;function generateBoundsFunction$1(X){let Z=generateBoundsFunctionBody(X);return new Function("bodies","settings","random",Z)}function generateBoundsFunctionBody(X){let Z=createPatternBuilder$3(X);return`
  var boundingBox = {
    ${Z("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${Z("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${Z("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${Z("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${Z("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${Z("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${Z("var max_{var} = -Infinity;",{indent:4})}
    ${Z("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${Z("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${Z("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${Z("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${Z("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${Z("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var generateCreateDragForceExports={},generateCreateDragForce={get exports(){return generateCreateDragForceExports},set exports(X){generateCreateDragForceExports=X}};const createPatternBuilder$2=createPatternBuilder$6;generateCreateDragForce.exports=generateCreateDragForceFunction$1;generateCreateDragForceExports.generateCreateDragForceFunctionBody=generateCreateDragForceFunctionBody;function generateCreateDragForceFunction$1(X){let Z=generateCreateDragForceFunctionBody(X);return new Function("options",Z)}function generateCreateDragForceFunctionBody(X){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${createPatternBuilder$2(X)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var generateCreateSpringForceExports={},generateCreateSpringForce={get exports(){return generateCreateSpringForceExports},set exports(X){generateCreateSpringForceExports=X}};const createPatternBuilder$1=createPatternBuilder$6;generateCreateSpringForce.exports=generateCreateSpringForceFunction$1;generateCreateSpringForceExports.generateCreateSpringForceFunctionBody=generateCreateSpringForceFunctionBody;function generateCreateSpringForceFunction$1(X){let Z=generateCreateSpringForceFunctionBody(X);return new Function("options","random",Z)}function generateCreateSpringForceFunctionBody(X){let Z=createPatternBuilder$1(X);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${Z("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${Z("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${Z("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${Z("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${Z("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${Z("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var generateIntegratorExports={},generateIntegrator={get exports(){return generateIntegratorExports},set exports(X){generateIntegratorExports=X}};const createPatternBuilder=createPatternBuilder$6;generateIntegrator.exports=generateIntegratorFunction$1;generateIntegratorExports.generateIntegratorFunctionBody=generateIntegratorFunctionBody;function generateIntegratorFunction$1(X){let Z=generateIntegratorFunctionBody(X);return new Function("bodies","timeStep","adaptiveTimeStepWeight",Z)}function generateIntegratorFunctionBody(X){let Z=createPatternBuilder(X);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${Z("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${Z("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${Z("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${Z("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${Z("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${Z("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${Z("body.pos.{var} += d{var};",{indent:4})}

    ${Z("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${Z("t{var} * t{var}",{join:" + "})})/length;
`}var spring,hasRequiredSpring;function requireSpring(){if(hasRequiredSpring)return spring;hasRequiredSpring=1,spring=X;function X(Z,G,W,F){this.from=Z,this.to=G,this.length=W,this.coefficient=F}return spring}var ngraph_merge,hasRequiredNgraph_merge;function requireNgraph_merge(){if(hasRequiredNgraph_merge)return ngraph_merge;hasRequiredNgraph_merge=1,ngraph_merge=X;function X(Z,G){var W;if(Z||(Z={}),G){for(W in G)if(G.hasOwnProperty(W)){var F=Z.hasOwnProperty(W),U=typeof G[W],J=!F||typeof Z[W]!==U;J?Z[W]=G[W]:U==="object"&&(Z[W]=X(Z[W],G[W]))}}return Z}return ngraph_merge}var ngraph_events=function X(Z){validateSubject(Z);var G=createEventsStorage(Z);return Z.on=G.on,Z.off=G.off,Z.fire=G.fire,Z};function createEventsStorage(X){var Z=Object.create(null);return{on:function(G,W,F){if(typeof W!="function")throw new Error("callback is expected to be a function");var U=Z[G];return U||(U=Z[G]=[]),U.push({callback:W,ctx:F}),X},off:function(G,W){var F=typeof G>"u";if(F)return Z=Object.create(null),X;if(Z[G]){var U=typeof W!="function";if(U)delete Z[G];else for(var J=Z[G],Y=0;Y<J.length;++Y)J[Y].callback===W&&J.splice(Y,1)}return X},fire:function(G){var W=Z[G];if(!W)return X;var F;arguments.length>1&&(F=Array.prototype.splice.call(arguments,1));for(var U=0;U<W.length;++U){var J=W[U];J.callback.apply(J.ctx,F)}return X}}}function validateSubject(X){if(!X)throw new Error("Eventify cannot use falsy object as events subject");for(var Z=["on","fire","off"],G=0;G<Z.length;++G)if(X.hasOwnProperty(Z[G]))throw new Error("Subject cannot be eventified, since it already has property '"+Z[G]+"'")}var ngraph_randomExports={},ngraph_random={get exports(){return ngraph_randomExports},set exports(X){ngraph_randomExports=X}},hasRequiredNgraph_random;function requireNgraph_random(){if(hasRequiredNgraph_random)return ngraph_randomExports;hasRequiredNgraph_random=1,ngraph_random.exports=X,ngraph_randomExports.random=X,ngraph_randomExports.randomIterator=Y;function X(D){var Q=typeof D=="number"?D:+new Date;return new Z(Q)}function Z(D){this.seed=D}Z.prototype.next=J,Z.prototype.nextDouble=U,Z.prototype.uniform=U,Z.prototype.gaussian=G;function G(){var D,Q,ee;do Q=this.nextDouble()*2-1,ee=this.nextDouble()*2-1,D=Q*Q+ee*ee;while(D>=1||D===0);return Q*Math.sqrt(-2*Math.log(D)/D)}Z.prototype.levy=W;function W(){var D=1.5,Q=Math.pow(F(1+D)*Math.sin(Math.PI*D/2)/(F((1+D)/2)*D*Math.pow(2,(D-1)/2)),1/D);return this.gaussian()*Q/Math.pow(Math.abs(this.gaussian()),1/D)}function F(D){return Math.sqrt(2*Math.PI/D)*Math.pow(1/Math.E*(D+1/(12*D-1/(10*D))),D)}function U(){var D=this.seed;return D=D+2127912214+(D<<12)&4294967295,D=(D^3345072700^D>>>19)&4294967295,D=D+374761393+(D<<5)&4294967295,D=(D+3550635116^D<<9)&4294967295,D=D+4251993797+(D<<3)&4294967295,D=(D^3042594569^D>>>16)&4294967295,this.seed=D,(D&268435455)/268435456}function J(D){return Math.floor(this.nextDouble()*D)}function Y(D,Q){var ee=Q||X();if(typeof ee.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:te,shuffle:q};function q(){var ie,ne,ce;for(ie=D.length-1;ie>0;--ie)ne=ee.next(ie+1),ce=D[ne],D[ne]=D[ie],D[ie]=ce;return D}function te(ie){var ne,ce,le;for(ne=D.length-1;ne>0;--ne)ce=ee.next(ne+1),le=D[ce],D[ce]=D[ne],D[ne]=le,ie(le);D.length&&ie(D[0])}}return ngraph_randomExports}var createPhysicsSimulator_1=createPhysicsSimulator,generateCreateBodyFunction=generateCreateBodyExports,generateQuadTreeFunction=generateQuadTreeExports,generateBoundsFunction=generateBoundsExports,generateCreateDragForceFunction=generateCreateDragForceExports,generateCreateSpringForceFunction=generateCreateSpringForceExports,generateIntegratorFunction=generateIntegratorExports,dimensionalCache={};function createPhysicsSimulator(X){var Z=requireSpring(),G=requireNgraph_merge(),W=ngraph_events;if(X){if(X.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(X.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}X=G(X,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var F=dimensionalCache[X.dimensions];if(!F){var U=X.dimensions;F={Body:generateCreateBodyFunction(U,X.debug),createQuadTree:generateQuadTreeFunction(U),createBounds:generateBoundsFunction(U),createDragForce:generateCreateDragForceFunction(U),createSpringForce:generateCreateSpringForceFunction(U),integrate:generateIntegratorFunction(U)},dimensionalCache[U]=F}var J=F.Body,Y=F.createQuadTree,D=F.createBounds,Q=F.createDragForce,ee=F.createSpringForce,q=F.integrate,te=Ze=>new J(Ze),ie=requireNgraph_random().random(42),ne=[],ce=[],le=Y(X,ie),se=D(ne,X,ie),pe=ee(X,ie),ue=Q(X),ae=0,de=[],be=new Map,he=0;We("nbody",ye),We("spring",re);var Le={bodies:ne,quadTree:le,springs:ce,settings:X,addForce:We,removeForce:fe,getForces:Re,step:function(){for(var Ze=0;Ze<de.length;++Ze)de[Ze](he);var Ge=q(ne,X.timeStep,X.adaptiveTimeStepWeight);return he+=1,Ge},addBody:function(Ze){if(!Ze)throw new Error("Body is required");return ne.push(Ze),Ze},addBodyAt:function(Ze){if(!Ze)throw new Error("Body position is required");var Ge=te(Ze);return ne.push(Ge),Ge},removeBody:function(Ze){if(Ze){var Ge=ne.indexOf(Ze);if(!(Ge<0))return ne.splice(Ge,1),ne.length===0&&se.reset(),!0}},addSpring:function(Ze,Ge,ve,Te){if(!Ze||!Ge)throw new Error("Cannot add null spring to force simulator");typeof ve!="number"&&(ve=-1);var xe=new Z(Ze,Ge,ve,Te>=0?Te:-1);return ce.push(xe),xe},getTotalMovement:function(){return ae},removeSpring:function(Ze){if(Ze){var Ge=ce.indexOf(Ze);if(Ge>-1)return ce.splice(Ge,1),!0}},getBestNewBodyPosition:function(Ze){return se.getBestNewPosition(Ze)},getBBox:Xe,getBoundingBox:Xe,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(Ze){return Ze!==void 0?(X.gravity=Ze,le.options({gravity:Ze}),this):X.gravity},theta:function(Ze){return Ze!==void 0?(X.theta=Ze,le.options({theta:Ze}),this):X.theta},random:ie};return expose(X,Le),W(Le),Le;function Xe(){return se.update(),se.box}function We(Ze,Ge){if(be.has(Ze))throw new Error("Force "+Ze+" is already added");be.set(Ze,Ge),de.push(Ge)}function fe(Ze){var Ge=de.indexOf(be.get(Ze));Ge<0||(de.splice(Ge,1),be.delete(Ze))}function Re(){return be}function ye(){if(ne.length!==0){le.insertBodies(ne);for(var Ze=ne.length;Ze--;){var Ge=ne[Ze];Ge.isPinned||(Ge.reset(),le.updateBodyForce(Ge),ue.update(Ge))}}}function re(){for(var Ze=ce.length;Ze--;)pe.update(ce[Ze])}}function expose(X,Z){for(var G in X)augment(X,Z,G)}function augment(X,Z,G){if(X.hasOwnProperty(G)&&typeof Z[G]!="function"){var W=Number.isFinite(X[G]);W?Z[G]=function(F){if(F!==void 0){if(!Number.isFinite(F))throw new Error("Value of "+G+" should be a valid number.");return X[G]=F,Z}return X[G]}:Z[G]=function(F){return F!==void 0?(X[G]=F,Z):X[G]}}}ngraph_forcelayout.exports=createLayout;ngraph_forcelayoutExports.simulator=createPhysicsSimulator_1;var eventify$1=ngraph_events;function createLayout(X,Z){if(!X)throw new Error("Graph structure cannot be undefined");var G=Z&&Z.createSimulator||createPhysicsSimulator_1,W=G(Z);if(Array.isArray(Z))throw new Error("Physics settings is expected to be an object");var F=X.version>19?ye:Re;Z&&typeof Z.nodeMass=="function"&&(F=Z.nodeMass);var U=new Map,J={},Y=0,D=W.settings.springTransform||noop;ue(),le();var Q=!1,ee={step:function(){if(Y===0)return q(!0),!0;var re=W.step();ee.lastMove=re,ee.fire("step");var Ze=re/Y,Ge=Ze<=.01;return q(Ge),Ge},getNodePosition:function(re){return fe(re).pos},setNodePosition:function(re){var Ze=fe(re);Ze.setPosition.apply(Ze,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(re){var Ze=J[re];if(Ze)return{from:Ze.from.pos,to:Ze.to.pos}},getGraphRect:function(){return W.getBBox()},forEachBody:te,pinNode:function(re,Ze){var Ge=fe(re.id);Ge.isPinned=!!Ze},isNodePinned:function(re){return fe(re.id).isPinned},dispose:function(){X.off("changed",pe),ee.fire("disposed")},getBody:ce,getSpring:ne,getForceVectorLength:ie,simulator:W,graph:X,lastMove:0};return eventify$1(ee),ee;function q(re){Q!==re&&(Q=re,se(re))}function te(re){U.forEach(re)}function ie(){var re=0,Ze=0;return te(function(Ge){re+=Math.abs(Ge.force.x),Ze+=Math.abs(Ge.force.y)}),Math.sqrt(re*re+Ze*Ze)}function ne(re,Ze){var Ge;if(Ze===void 0)typeof re!="object"?Ge=re:Ge=re.id;else{var ve=X.hasLink(re,Ze);if(!ve)return;Ge=ve.id}return J[Ge]}function ce(re){return U.get(re)}function le(){X.on("changed",pe)}function se(re){ee.fire("stable",re)}function pe(re){for(var Ze=0;Ze<re.length;++Ze){var Ge=re[Ze];Ge.changeType==="add"?(Ge.node&&ae(Ge.node.id),Ge.link&&be(Ge.link)):Ge.changeType==="remove"&&(Ge.node&&de(Ge.node),Ge.link&&he(Ge.link))}Y=X.getNodesCount()}function ue(){Y=0,X.forEachNode(function(re){ae(re.id),Y+=1}),X.forEachLink(be)}function ae(re){var Ze=U.get(re);if(!Ze){var Ge=X.getNode(re);if(!Ge)throw new Error("initBody() was called with unknown node id");var ve=Ge.position;if(!ve){var Te=Le(Ge);ve=W.getBestNewBodyPosition(Te)}Ze=W.addBodyAt(ve),Ze.id=re,U.set(re,Ze),Xe(re),We(Ge)&&(Ze.isPinned=!0)}}function de(re){var Ze=re.id,Ge=U.get(Ze);Ge&&(U.delete(Ze),W.removeBody(Ge))}function be(re){Xe(re.fromId),Xe(re.toId);var Ze=U.get(re.fromId),Ge=U.get(re.toId),ve=W.addSpring(Ze,Ge,re.length);D(re,ve),J[re.id]=ve}function he(re){var Ze=J[re.id];if(Ze){var Ge=X.getNode(re.fromId),ve=X.getNode(re.toId);Ge&&Xe(Ge.id),ve&&Xe(ve.id),delete J[re.id],W.removeSpring(Ze)}}function Le(re){var Ze=[];if(!re.links)return Ze;for(var Ge=Math.min(re.links.length,2),ve=0;ve<Ge;++ve){var Te=re.links[ve],xe=Te.fromId!==re.id?U.get(Te.fromId):U.get(Te.toId);xe&&xe.pos&&Ze.push(xe)}return Ze}function Xe(re){var Ze=U.get(re);if(Ze.mass=F(re),Number.isNaN(Ze.mass))throw new Error("Node mass should be a number")}function We(re){return re&&(re.isPinned||re.data&&re.data.isPinned)}function fe(re){var Ze=U.get(re);return Ze||(ae(re),Ze=U.get(re)),Ze}function Re(re){var Ze=X.getLinks(re);return Ze?1+Ze.length/3:1}function ye(re){var Ze=X.getLinks(re);return Ze?1+Ze.size/3:1}}function noop(){}var ngraph_graph=createGraph,eventify=ngraph_events;function createGraph(X){if(X=X||{},"uniqueLinkId"in X&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
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
}`;Re!==q.GLSL3&&(ze=(0,le.convertFragmentShaderToGLSL1)(ze,Ce)[0]);var Ee=(0,le.compileShader)(fe,Re,ye,re,ze,fe.FRAGMENT_SHADER,Ce,Ze,(We={offset:"vec2(".concat(Ie/ge,", ").concat(Ie/Me,")")},We[(0,le.isUnsignedIntType)(he)?"GPUIO_UINT":(0,le.isIntType)(he)?"GPUIO_INT":"GPUIO_FLOAT"]="1",We),void 0,!0);function _e(Se,Fe){return Xe===q.CLAMP_TO_EDGE?Math.max(0,Math.min(Fe-1,Se)):(Se+Fe)%Fe}var He=be._getVertexShader(q.DEFAULT_PROGRAM_NAME,"",{},Ce);if(He&&Ee){var Pe=(0,le.initGLProgram)(fe,He,Ee,Ce,Ze);if(Pe){ke._prepareForWrite(!1),(0,ne.bindFrameBuffer)(be,ke,ke._currentTexture),fe.viewport(0,0,ge,Me),fe.useProgram(Pe),fe.activeTexture(fe.TEXTURE0),fe.bindTexture(fe.TEXTURE_2D,Te),fe.uniform2fv(fe.getUniformLocation(Pe,"u_gpuio_scale"),[1,1]),fe.uniform2fv(fe.getUniformLocation(Pe,"u_gpuio_translation"),[0,0]),fe.bindBuffer(fe.ARRAY_BUFFER,be._getQuadPositionsBuffer()),be._setPositionAttribute(Pe,Ce),fe.drawArrays(fe.TRIANGLE_STRIP,0,4),fe.disable(fe.BLEND);for(var $e=ke.getValues(),we=!0,Ue=(0,le.isIntType)(he)?0:he===q.HALF_FLOAT?.01:1e-4,et=0;et<ge;et++)for(var at=0;at<Me;at++){var Ve=void 0;if(Le===q.LINEAR)Ve=(ut[at*ge+et]+ut[at*ge+_e(et+1,ge)]+ut[_e(at+1,Me)*ge+et]+ut[_e(at+1,Me)*ge+_e(et+1,ge)])/4;else{var oe=_e(et+Ie,ge),me=_e(at+Ie,Me);Ve=ut[me*ge+oe]}var mt=at*ge+et;if(Math.abs((Ve-$e[mt])/Ve)>Ue){we=!1;break}}se.filterWrapSupport[ve]=we,fe.deleteProgram(Pe)}else se.filterWrapSupport[ve]=!1;fe.deleteShader(Ee)}else se.filterWrapSupport[ve]=!1;return ke.dispose(),fe.deleteTexture(Te),se.filterWrapSupport[ve]}Y.testFilterWrap=ae,ce.GPULayer.getGPULayerInternalType=function(be){var he=be.composer,Le=be.name,Xe=he._errorCallback,We=he.isWebGL2,fe=be.type,Re=fe,ye=pe(he,fe);if(ye&&(Re===q.UNSIGNED_BYTE||Re===q.BYTE?Re=q.HALF_FLOAT:(console.warn("Falling back ".concat(Re,' type to FLOAT type for glsl1.x support for GPULayer "').concat(Le,`".
Large UNSIGNED_INT or INT with absolute value > 16,777,216 are not supported, on mobile UNSIGNED_INT, INT, UNSIGNED_SHORT, and SHORT with absolute value > 2,048 may not be supported.`)),Re=q.FLOAT)),We){if(Re===q.FLOAT){var re=(0,ie.getExtension)(he,ie.EXT_COLOR_BUFFER_FLOAT,!0);if(!re)console.warn('FLOAT not supported in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(Le,'".')),Re=q.HALF_FLOAT;else{var Ze=ue(he,Re);Ze||(console.warn('FLOAT not supported for writing operations in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(Le,'".')),Re=q.HALF_FLOAT)}}if(Re===q.HALF_FLOAT){var Ge=(0,ie.getExtension)(he,ie.EXT_COLOR_BUFFER_HALF_FLOAT,!0);Ge||(0,ie.getExtension)(he,ie.EXT_COLOR_BUFFER_FLOAT,!0);var Ze=ue(he,Re);Ze||(console.warn("This browser does not support writing to HALF_FLOAT textures."),Xe("This browser does not support writing to HALF_FLOAT textures."))}}else{if(Re===q.FLOAT){var re=(0,ie.getExtension)(he,ie.OES_TEXTURE_FLOAT,!0);if(re){var Ze=ue(he,Re);Ze||(console.warn('FLOAT not supported for writing operations in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(Le,'".')),Re=q.HALF_FLOAT)}else console.warn('FLOAT not supported in this browser, falling back to HALF_FLOAT type for GPULayer "'.concat(Le,'".')),Re=q.HALF_FLOAT}if(Re===q.HALF_FLOAT){(0,ie.getExtension)(he,ie.OES_TEXTURE_HALF_FLOAT,!0);var Ze=ue(he,Re);Ze||console.warn("This browser does not support writing to HALF_FLOAT textures.")}}return Re};function de(be){var he=-1/0,Le=1/0;switch(be){case q.UNSIGNED_BYTE:he=q.MIN_UNSIGNED_BYTE,Le=q.MAX_UNSIGNED_BYTE;break;case q.BYTE:he=q.MIN_BYTE,Le=q.MAX_BYTE;break;case q.UNSIGNED_SHORT:he=q.MIN_UNSIGNED_SHORT,Le=q.MAX_UNSIGNED_SHORT;break;case q.SHORT:he=q.MIN_SHORT,Le=q.MAX_SHORT;break;case q.UNSIGNED_INT:he=q.MIN_UNSIGNED_INT,Le=q.MAX_UNSIGNED_INT;break;case q.INT:he=q.MIN_INT,Le=q.MAX_INT;break}return{min:he,max:Le}}Y.minMaxValuesForType=de,ce.GPULayer.validateGPULayerArray=function(be,he,Le){Le===void 0&&(Le=null);var Xe=he.numComponents,We=he.width,fe=he.height,Re=he.name,ye=he._glNumChannels,re=he._internalType,Ze=he.is1D()?he.length:null;if(Le){if(be.length!==Le*Xe)throw new Error("Invalid data length: ".concat(be.length,' for GPULayer "').concat(Re,'" of numComponents: ').concat(Xe,"."))}else if(be.length!==We*fe*Xe&&(!Ze||Ze&&be.length!==Ze*Xe))throw new Error("Invalid data length: ".concat(be.length,' for GPULayer "').concat(Re,'" of ').concat(Ze?"length ".concat(Ze," and "):"","dimensions: [").concat(We,", ").concat(fe,"] and numComponents: ").concat(Xe,"."));var Ge=!1;switch(be.constructor){case Array:Ge=!0;break;case Float32Array:Ge=re!==q.FLOAT;break;case Uint8Array:Ge=re!==q.UNSIGNED_BYTE;break;case Int8Array:Ge=re!==q.BYTE;break;case Uint16Array:Ge=re!==q.UNSIGNED_SHORT;break;case Int16Array:Ge=re!==q.SHORT;break;case Uint32Array:Ge=re!==q.UNSIGNED_INT;break;case Int32Array:Ge=re!==q.INT;break;default:throw new Error("Invalid array type: ".concat(be.constructor.name,' for GPULayer "').concat(Re,'", please use one of [').concat(q.validArrayTypes.map(function(mt){return mt.name}).join(", "),"]."))}var ve=de(re),Te=ve.min,xe=ve.max,Ye=Le?Le*ye:We*fe*ye,ge=be.length!==Ye,Me=be;if(Ge||ge){Me=ce.GPULayer.initArrayForType(re,Ye);for(var je=re===q.HALF_FLOAT&&Ge?new DataView(Me.buffer):null,tt=0,it=be.length/Xe;tt<it;tt++)for(var st=0;st<Xe;st++){var qe=be[tt*Xe+st],ot=qe,ut=!1;ot<Te?(ot=Te,ut=!0):ot>xe&&(ot=xe,ut=!0),ut&&console.warn("Clipping out of range value ".concat(qe," to ").concat(ot,' for GPULayer "').concat(Re,'" with internal type ').concat(re,"."));var dt=tt*ye+st;je?(0,ee.setFloat16)(je,2*dt,ot,!0):Me[dt]=ot}}return Me}},664:function(J,Y,D){var Q=this&&this.__extends||function(){var ue=function(ae,de){return ue=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(be,he){be.__proto__=he}||function(be,he){for(var Le in he)Object.prototype.hasOwnProperty.call(he,Le)&&(be[Le]=he[Le])},ue(ae,de)};return function(ae,de){if(typeof de!="function"&&de!==null)throw new TypeError("Class extends value "+String(de)+" is not a constructor or null");ue(ae,de);function be(){this.constructor=ae}ae.prototype=de===null?Object.create(de):(be.prototype=de.prototype,new be)}}(),ee=this&&this.__assign||function(){return ee=Object.assign||function(ue){for(var ae,de=1,be=arguments.length;de<be;de++){ae=arguments[de];for(var he in ae)Object.prototype.hasOwnProperty.call(ae,he)&&(ue[he]=ae[he])}return ue},ee.apply(this,arguments)};Object.defineProperty(Y,"__esModule",{value:!0}),Y.GPUProgram=void 0;var q=D(601),te=D(593),ie=D(360),ne=D(566),ce=D(707),le=D(581),se=function(){function ue(ae,de){var be=this;this._fragmentShaders={},this._compileTimeConstants={},this._uniforms={},this._programs={},this._programsKeyLookup=new WeakMap,this._samplerUniformsIndices=[];var he=(de||{}).name;if(!ae)throw new Error('Error initing GPUProgram "'.concat(he,'": must pass GPUComposer instance to GPUProgram(composer, params).'));if(!de)throw new Error("Error initing GPUProgram: must pass params to GPUProgram(composer, params).");if(!(0,ne.isObject)(de))throw new Error("Error initing GPUProgram: must pass valid params object to GPUProgram(composer, params), got ".concat(JSON.stringify(de),"."));var Le=["name","fragmentShader","uniforms","compileTimeConstants"],Xe=["name","fragmentShader"],We=Object.keys(de);(0,ce.checkValidKeys)(We,Le,"GPUProgram(composer, params)",de.name),(0,ce.checkRequiredKeys)(We,Xe,"GPUProgram(composer, params)",de.name);var fe=de.fragmentShader,Re=de.uniforms,ye=de.compileTimeConstants;this._composer=ae,this.name=he;var re=(0,ne.isString)(fe)?fe:fe.join(`
`),Ze=(0,te.preprocessFragmentShader)(re,ae.glslVersion,he),Ge=Ze.shaderSource,ve=Ze.samplerUniforms,Te=Ze.additionalSources;if(this._fragmentShaderSource=Ge,ve.forEach(function(st,qe){be._samplerUniformsIndices.push({name:st,inputIndex:0,shaderIndex:qe})}),this.constructor===ue&&Te){this._childPrograms=[];for(var xe=0,Ye=Te.length;xe<Ye;xe++)this._childPrograms.push(new pe(ae,de,{fragmentShaderSource:Te[xe]}))}if(ye&&(this._compileTimeConstants=ee({},ye)),ae.glslVersion===q.GLSL1&&(Ge.includes("dFdx")||Ge.includes("dFdy")||Ge.includes("fwidth"))){var ge=(0,le.getExtension)(ae,le.OES_STANDARD_DERIVATIVES,!0);ge&&(this._extensions=`#extension GL_OES_standard_derivatives : enable
in vec2 v_uv;
uniform `.concat(fe," ").concat((0,q.glslPrefixForType)(We),`sampler2D u_state;
out `).concat(fe," ").concat(Re,` out_result;
void main() {
	out_result = texture(u_state, v_uv);
}`),uniforms:[{name:"u_state",value:0,type:ee.INT}]})}Y.copyProgram=ie;function ne(Le,Xe){var We=Xe.type,fe=Xe.numInputs||2,Re=Xe.precision||"",ye=Xe.components||"xyzw",re=(0,q.glslTypeForType)(We,ye.length),Ze=new Array(fe),Ge=Xe.name||"".concat(fe,"-way_add_").concat((0,q.uniformTypeForType)(We,Le.glslVersion),"_").concat(ye);return new te.GPUProgram(Le,{name:Ge,fragmentShader:`
in vec2 v_uv;
`.concat(Ze.map(function(ve,Te){return"uniform ".concat(Re," ").concat((0,q.glslPrefixForType)(We),"sampler2D u_state").concat(Te,";")}).join(`
`),`
out `).concat(Re," ").concat(re,` out_result;
void main() {
	out_result = `).concat(Ze.map(function(ve,Te){return"texture(u_state".concat(Te,", v_uv).").concat(ye)}).join(" + "),`;
}`),uniforms:Ze.map(function(ve,Te){return{name:"u_state".concat(Te),value:Te,type:ee.INT}})})}Y.addLayersProgram=ne;function ce(Le,Xe){var We=Xe.type,fe=Xe.value,Re=Xe.precision||"",ye=(0,Q.isArray)(fe)?fe.length:1,re=(0,q.glslTypeForType)(We,ye),Ze=ye===1?4:ye,Ge=(0,q.glslTypeForType)(We,Ze),ve=(0,q.glslComponentSelectionForNumComponents)(Ze),Te=Xe.name||"addValue_".concat(re,"_w_length_").concat(ye);return new te.GPUProgram(Le,{name:Te,fragmentShader:`
in vec2 v_uv;
uniform `.concat(Re," ").concat(re,` u_value;
uniform `).concat(Re," ").concat((0,q.glslPrefixForType)(We),`sampler2D u_state;
out `).concat(Re," ").concat(Ge,` out_result;
void main() {
	out_result = `).concat(re!==Ge?Ge:"","(u_value) + texture(u_state, v_uv)").concat(ve,`;
}`),uniforms:[{name:"u_state",value:0,type:ee.INT},{name:"u_value",value:fe,type:(0,q.uniformTypeForType)(We,Le.glslVersion)}]})}Y.addValueProgram=ce;function le(Le,Xe){var We=Xe.type,fe=Xe.value,Re=Xe.precision||"",ye=(0,Q.isArray)(fe)?fe.length:1,re=(0,q.glslTypeForType)(We,ye),Ze=ye===1?4:ye,Ge=(0,q.glslTypeForType)(We,Ze),ve=(0,q.glslComponentSelectionForNumComponents)(Ze),Te=Xe.name||"addValue_".concat(re,"_w_length_").concat(ye);return new te.GPUProgram(Le,{name:Te,fragmentShader:`
in vec2 v_uv;
uniform `.concat(Re," ").concat(re,` u_value;
uniform `).concat(Re," ").concat((0,q.glslPrefixForType)(We),`sampler2D u_state;
out `).concat(Re," ").concat(Ge,` out_result;
void main() {
	out_result = `).concat(re!==Ge?Ge:"","(u_value) * texture(u_state, v_uv)").concat(ve,`;
}`),uniforms:[{name:"u_state",value:0,type:ee.INT},{name:"u_value",value:fe,type:(0,q.uniformTypeForType)(We,Le.glslVersion)}]})}Y.multiplyValueProgram=le;function se(Le,Xe){var We=Xe.type,fe=Xe.value,Re=Xe.precision||"",ye=(0,Q.isArray)(fe)?fe.length:1,re=(0,q.glslTypeForType)(We,ye),Ze=ye===1?4:ye,Ge=(0,q.glslTypeForType)(We,Ze),ve=Xe.name||"setValue_".concat(re,"_w_length_").concat(ye);return new te.GPUProgram(Le,{name:ve,fragmentShader:`
uniform `.concat(Re," ").concat(re,` u_value;
out `).concat(Re," ").concat(Ge,` out_result;
void main() {
	out_result = `).concat(re!==Ge?Ge:"",`(u_value);
}`),uniforms:[{name:"u_value",value:fe,type:(0,q.uniformTypeForType)(We,Le.glslVersion)}]})}Y.setValueProgram=se;function pe(Le,Xe){var We=Xe.type,fe=Xe.precision||"",Re=Xe.opacity===void 0?1:Xe.opacity,ye=Xe.color||[0,0,0],re=Xe.name||"setColor",Ze=(0,q.glslTypeForType)(We,4);return new te.GPUProgram(Le,{name:re,fragmentShader:`
uniform `.concat(fe,` vec3 u_color;
uniform `).concat(fe,` float u_opacity;
out `).concat(fe," ").concat(Ze,` out_result;
void main() {
	out_result = `).concat(Ze,`(u_color, u_opacity);
}`),uniforms:[{name:"u_color",value:ye,type:ee.FLOAT},{name:"u_opacity",value:Re,type:ee.FLOAT}]})}Y.setColorProgram=pe;function ue(Le,Xe){return se(Le,{type:ee.FLOAT,value:0,name:Xe.name})}Y.zeroProgram=ue;function ae(Le,Xe){var We=Xe.type,fe=Xe.precision||"",Re=3,ye=(0,q.glslTypeForType)(We,Re),re=(0,q.glslTypeForType)(ee.FLOAT,Re),Ze=(0,q.glslPrefixForType)(We),Ge=re===ye,ve=Xe.name||"renderRGB_".concat(ye);return new te.GPUProgram(Le,{name:ve,fragmentShader:`
in vec2 v_uv;
uniform float u_opacity;
uniform float u_scale;
uniform `.concat(fe," ").concat(Ze,`sampler2D u_state;
out vec4 out_result;
void main() {
	vec3 color = u_scale * (`).concat(Ge?"":re,`(texture(u_state, v_uv).rgb));
	out_result = vec4(color, u_opacity);
in vec2 v_uv;
uniform float u_opacity;
uniform float u_scale;
uniform vec3 u_colorMax;
uniform vec3 u_colorMin;
uniform `.concat(fe," ").concat(Ge,`sampler2D u_state;
out vec4 out_result;
void main() {
	vec3 color = mix(u_colorMin, u_colorMax, amplitude);
	out_result = vec4(color, u_opacity);
		discard;