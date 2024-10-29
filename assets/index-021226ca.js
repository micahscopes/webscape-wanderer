(async()=>{function _mergeNamespaces(X,Z){for(var G=0;G<Z.length;G++){const W=Z[G];if(typeof W!="string"&&!Array.isArray(W)){for(const F in W)if(F!=="default"&&!(F in X)){const U=Object.getOwnPropertyDescriptor(W,F);U&&Object.defineProperty(X,F,U.get?U:{enumerable:!0,get:()=>W[F]})}}}return Object.freeze(Object.defineProperty(X,Symbol.toStringTag,{value:"Module"}))}(function(){const Z=document.createElement("link").relList;if(Z&&Z.supports&&Z.supports("modulepreload"))return;for(const F of document.querySelectorAll('link[rel="modulepreload"]'))W(F);new MutationObserver(F=>{for(const U of F)if(U.type==="childList")for(const J of U.addedNodes)J.tagName==="LINK"&&J.rel==="modulepreload"&&W(J)}).observe(document,{childList:!0,subtree:!0});function G(F){const U={};return F.integrity&&(U.integrity=F.integrity),F.referrerPolicy&&(U.referrerPolicy=F.referrerPolicy),F.crossOrigin==="use-credentials"?U.credentials="include":F.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function W(F){if(F.ep)return;F.ep=!0;const U=G(F);fetch(F.href,U)}})();var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(X){return X&&X.__esModule&&Object.prototype.hasOwnProperty.call(X,"default")?X.default:X}var moizeExports={},moize$1={get exports(){return moizeExports},set exports(X){moizeExports=X}},microMemoizeExports={},microMemoize={get exports(){return microMemoizeExports},set exports(X){microMemoizeExports=X}},hasRequiredMicroMemoize;function requireMicroMemoize(){return hasRequiredMicroMemoize||(hasRequiredMicroMemoize=1,function(X,Z){(function(G,W){X.exports=W()})(commonjsGlobal,function(){var G={isEqual:!0,isMatchingKey:!0,isPromise:!0,maxSize:!0,onCacheAdd:!0,onCacheChange:!0,onCacheHit:!0,transformKey:!0},W=Array.prototype.slice;function F(q){var ee=q.length;return ee?ee===1?[q[0]]:ee===2?[q[0],q[1]]:ee===3?[q[0],q[1],q[2]]:W.call(q,0):[]}function U(q){var ee={};for(var ie in q)G[ie]||(ee[ie]=q[ie]);return ee}function J(q){return typeof q=="function"&&q.isMemoized}function Y(q,ee){return q===ee||q!==q&&ee!==ee}function D(q,ee){var ie={};for(var ne in q)ie[ne]=q[ne];for(var ne in ee)ie[ne]=ee[ne];return ie}var Q=function(){function q(ee){this.keys=[],this.values=[],this.options=ee;var ie=typeof ee.isMatchingKey=="function";ie?this.getKeyIndex=this._getKeyIndexFromMatchingKey:ee.maxSize>1?this.getKeyIndex=this._getKeyIndexForMany:this.getKeyIndex=this._getKeyIndexForSingle,this.canTransformKey=typeof ee.transformKey=="function",this.shouldCloneArguments=this.canTransformKey||ie,this.shouldUpdateOnAdd=typeof ee.onCacheAdd=="function",this.shouldUpdateOnChange=typeof ee.onCacheChange=="function",this.shouldUpdateOnHit=typeof ee.onCacheHit=="function"}return Object.defineProperty(q.prototype,"size",{get:function(){return this.keys.length},enumerable:!1,configurable:!0}),Object.defineProperty(q.prototype,"snapshot",{get:function(){return{keys:F(this.keys),size:this.size,values:F(this.values)}},enumerable:!1,configurable:!0}),q.prototype._getKeyIndexFromMatchingKey=function(ee){var ie=this.options,ne=ie.isMatchingKey,le=ie.maxSize,ae=this.keys,se=ae.length;if(!se)return-1;if(ne(ae[0],ee))return 0;if(le>1){for(var he=1;he<se;he++)if(ne(ae[he],ee))return he}return-1},q.prototype._getKeyIndexForMany=function(ee){var ie=this.options.isEqual,ne=this.keys,le=ne.length;if(!le)return-1;if(le===1)return this._getKeyIndexForSingle(ee);var ae=ee.length,se,he;if(ae>1){for(var pe=0;pe<le;pe++)if(se=ne[pe],se.length===ae){for(he=0;he<ae&&ie(se[he],ee[he]);he++);if(he===ae)return pe}}else for(var pe=0;pe<le;pe++)if(se=ne[pe],se.length===ae&&ie(se[0],ee[0]))return pe;return-1},q.prototype._getKeyIndexForSingle=function(ee){var ie=this.keys;if(!ie.length)return-1;var ne=ie[0],le=ne.length;if(ee.length!==le)return-1;var ae=this.options.isEqual;if(le>1){for(var se=0;se<le;se++)if(!ae(ne[se],ee[se]))return-1;return 0}return ae(ne[0],ee[0])?0:-1},q.prototype.orderByLru=function(ee,ie,ne){for(var le=this.keys,ae=this.values,se=le.length,he=ne;he--;)le[he+1]=le[he],ae[he+1]=ae[he];le[0]=ee,ae[0]=ie;var pe=this.options.maxSize;se===pe&&ne===se?(le.pop(),ae.pop()):ne>=pe&&(le.length=ae.length=pe)},q.prototype.updateAsyncCache=function(ee){var ie=this,ne=this.options,le=ne.onCacheChange,ae=ne.onCacheHit,se=this.keys[0],he=this.values[0];this.values[0]=he.then(function(pe){return ie.shouldUpdateOnHit&&ae(ie,ie.options,ee),ie.shouldUpdateOnChange&&le(ie,ie.options,ee),pe},function(pe){var oe=ie.getKeyIndex(se);throw oe!==-1&&(ie.keys.splice(oe,1),ie.values.splice(oe,1)),pe})},q}();function te(q,ee){if(ee===void 0&&(ee={}),J(q))return te(q.fn,D(q.options,ee));if(typeof q!="function")throw new TypeError("You must pass a function to `memoize`.");var ie=ee.isEqual,ne=ie===void 0?Y:ie,le=ee.isMatchingKey,ae=ee.isPromise,se=ae===void 0?!1:ae,he=ee.maxSize,pe=he===void 0?1:he,oe=ee.onCacheAdd,de=ee.onCacheChange,ue=ee.onCacheHit,ge=ee.transformKey,ve=D({isEqual:ne,isMatchingKey:le,isPromise:se,maxSize:pe,onCacheAdd:oe,onCacheChange:de,onCacheHit:ue,transformKey:ge},U(ee)),fe=new Q(ve),Xe=fe.keys,Ze=fe.values,Ve=fe.canTransformKey,be=fe.shouldCloneArguments,re=fe.shouldUpdateOnAdd,ye=fe.shouldUpdateOnChange,we=fe.shouldUpdateOnHit,We=function(){var Se=be?F(arguments):arguments;Ve&&(Se=ge(Se));var Le=Xe.length?fe.getKeyIndex(Se):-1;if(Le!==-1)we&&ue(fe,ve,We),Le&&(fe.orderByLru(Xe[Le],Ze[Le],Le),ye&&de(fe,ve,We));else{var Ne=q.apply(this,arguments),xe=be?Se:F(arguments);fe.orderByLru(xe,Ne,Xe.length),se&&fe.updateAsyncCache(We),re&&oe(fe,ve,We),ye&&de(fe,ve,We)}return Ze[0]};return We.cache=fe,We.fn=q,We.isMemoized=!0,We.options=ve,We}return te})}(microMemoize)),microMemoizeExports}var fastEqualsExports={},fastEquals={get exports(){return fastEqualsExports},set exports(X){fastEqualsExports=X}},hasRequiredFastEquals;function requireFastEquals(){return hasRequiredFastEquals||(hasRequiredFastEquals=1,function(X,Z){(function(G,W){W(Z)})(commonjsGlobal,function(G){var W=typeof WeakMap=="function",F=Object.keys;function U(Ze,Ve){return Ze===Ve||Ze!==Ze&&Ve!==Ve}function J(Ze){return Ze.constructor===Object||Ze.constructor==null}function Y(Ze){return!!Ze&&typeof Ze.then=="function"}function D(Ze){return!!(Ze&&Ze.$$typeof)}function Q(){var Ze=[];return{delete:function(Ve){for(var be=0;be<Ze.length;++be)if(Ze[be][0]===Ve){Ze.splice(be,1);return}},get:function(Ve){for(var be=0;be<Ze.length;++be)if(Ze[be][0]===Ve)return Ze[be][1]},set:function(Ve,be){for(var re=0;re<Ze.length;++re)if(Ze[re][0]===Ve){Ze[re][1]=be;return}Ze.push([Ve,be])}}}var te=function(Ze){return Ze?function(){return new WeakMap}:Q}(W);function q(Ze){return function(be){var re=Ze||be;return function(we,We,Se,Le,Ne,xe,ke){ke===void 0&&(ke=te());var Ce=!!we&&typeof we=="object",Ee=!!We&&typeof We=="object";if(Ce!==Ee)return!1;if(!Ce&&!Ee)return re(we,We,ke);var et=ke.get(we);if(et&&ke.get(We))return et===We;ke.set(we,We),ke.set(We,we);var De=re(we,We,ke);return ke.delete(we),ke.delete(We),De}}}function ee(Ze,Ve,be,re){var ye=Ze.length;if(Ve.length!==ye)return!1;for(;ye-- >0;)if(!be(Ze[ye],Ve[ye],ye,ye,Ze,Ve,re))return!1;return!0}function ie(Ze,Ve,be,re){var ye=Ze.size===Ve.size;if(ye&&Ze.size){var we={},We=0;Ze.forEach(function(Se,Le){if(ye){var Ne=!1,xe=0;Ve.forEach(function(ke,Ce){!Ne&&!we[xe]&&(Ne=be(Le,Ce,We,xe,Ze,Ve,re)&&be(Se,ke,Le,Ce,Ze,Ve,re),Ne&&(we[xe]=!0)),xe++}),We++,ye=Ne}})}return ye}var ne="_owner",le=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function ae(Ze,Ve,be,re){var ye=F(Ze),we=ye.length;if(F(Ve).length!==we)return!1;if(we)for(var We=void 0;we-- >0;){if(We=ye[we],We===ne){var Se=D(Ze),Le=D(Ve);if((Se||Le)&&Se!==Le)return!1}if(!le(Ve,We)||!be(Ze[We],Ve[We],We,We,Ze,Ve,re))return!1}return!0}var se=function(){return/foo/g.flags==="g"?function(Ve,be){return Ve.source===be.source&&Ve.flags===be.flags}:function(Ve,be){return Ve.source===be.source&&Ve.global===be.global&&Ve.ignoreCase===be.ignoreCase&&Ve.multiline===be.multiline&&Ve.unicode===be.unicode&&Ve.sticky===be.sticky&&Ve.lastIndex===be.lastIndex}}();function he(Ze,Ve,be,re){var ye=Ze.size===Ve.size;if(ye&&Ze.size){var we={};Ze.forEach(function(We,Se){if(ye){var Le=!1,Ne=0;Ve.forEach(function(xe,ke){!Le&&!we[Ne]&&(Le=be(We,xe,Se,ke,Ze,Ve,re),Le&&(we[Ne]=!0)),Ne++}),ye=Le}})}return ye}var pe=typeof Map=="function",oe=typeof Set=="function",de=Object.prototype.valueOf;function ue(Ze){var Ve=typeof Ze=="function"?Ze(be):function(re,ye,we,We,Se,Le,Ne){return be(re,ye,Ne)};function be(re,ye,we){if(re===ye)return!0;if(re&&ye&&typeof re=="object"&&typeof ye=="object"){if(J(re)&&J(ye))return ae(re,ye,Ve,we);var We=Array.isArray(re),Se=Array.isArray(ye);return We||Se?We===Se&&ee(re,ye,Ve,we):(We=re instanceof Date,Se=ye instanceof Date,We||Se?We===Se&&U(re.getTime(),ye.getTime()):(We=re instanceof RegExp,Se=ye instanceof RegExp,We||Se?We===Se&&se(re,ye):Y(re)||Y(ye)?re===ye:pe&&(We=re instanceof Map,Se=ye instanceof Map,We||Se)?We===Se&&ie(re,ye,Ve,we):oe&&(We=re instanceof Set,Se=ye instanceof Set,We||Se)?We===Se&&he(re,ye,Ve,we):re.valueOf!==de||ye.valueOf!==de?U(re.valueOf(),ye.valueOf()):ae(re,ye,Ve,we)))}return re!==re&&ye!==ye}return be}var ge=ue(),ve=ue(function(){return U}),fe=ue(q()),Xe=ue(q(U));G.circularDeepEqual=fe,G.circularShallowEqual=Xe,G.createCustomEqual=ue,G.deepEqual=ge,G.sameValueZeroEqual=U,G.shallowEqual=ve,Object.defineProperty(G,"__esModule",{value:!0})})}(fastEquals,fastEqualsExports)),fastEqualsExports}(function(X,Z){(function(G,W){X.exports=W(requireMicroMemoize(),requireFastEquals())})(commonjsGlobal,function(G,W){function F(){return F=Object.assign?Object.assign.bind():function(Ye){for(var je=1;je<arguments.length;je++){var ze=arguments[je];for(var Pe in ze)Object.prototype.hasOwnProperty.call(ze,Pe)&&(Ye[Pe]=ze[Pe])}return Ye},F.apply(this,arguments)}function U(Ye,je){if(Ye==null)return{};var ze={},Pe=Object.keys(Ye),Ae,Ke;for(Ke=0;Ke<Pe.length;Ke++)Ae=Pe[Ke],!(je.indexOf(Ae)>=0)&&(ze[Ae]=Ye[Ae]);return ze}var J={isDeepEqual:!1,isPromise:!1,isReact:!1,isSerialized:!1,isShallowEqual:!1,matchesArg:void 0,matchesKey:void 0,maxAge:void 0,maxArgs:void 0,maxSize:1,onExpire:void 0,profileName:void 0,serializer:void 0,updateCacheForKey:void 0,transformArgs:void 0,updateExpire:!1};function Y(){for(var Ye=arguments.length,je=new Array(Ye),ze=0;ze<Ye;ze++)je[ze]=arguments[ze];return je.reduce(function(Pe,Ae){if(typeof Pe=="function")return typeof Ae=="function"?function(){Pe.apply(this,arguments),Ae.apply(this,arguments)}:Pe;if(typeof Ae=="function")return Ae})}function D(){for(var Ye=arguments.length,je=new Array(Ye),ze=0;ze<Ye;ze++)je[ze]=arguments[ze];return je.reduce(function(Pe,Ae){if(typeof Pe=="function")return typeof Ae=="function"?function(){return Pe(Ae.apply(this,arguments))}:Pe;if(typeof Ae=="function")return Ae})}function Q(Ye,je){for(var ze=0;ze<Ye.length;ze++)if(Ye[ze].key===je)return ze;return-1}function te(Ye,je){var ze=typeof je=="function"?je:function(Pe,Ae){for(var Ke=0;Ke<Ae.length;Ke++)if(!Ye(Pe[Ke],Ae[Ke]))return!1;return!0};return function(Pe,Ae){for(var Ke=0;Ke<Pe.length;Ke++)if(Pe[Ke].length===Ae.length&&ze(Pe[Ke],Ae))return Ke;return-1}}function q(Ye,je){return!je||je===J?Ye:F({},Ye,je,{onCacheAdd:Y(Ye.onCacheAdd,je.onCacheAdd),onCacheChange:Y(Ye.onCacheChange,je.onCacheChange),onCacheHit:Y(Ye.onCacheHit,je.onCacheHit),transformArgs:D(Ye.transformArgs,je.transformArgs)})}function ee(Ye){return typeof Ye=="function"&&Ye.isMoized}function ie(Ye,je,ze){try{var Pe=ze||je||"anonymous";Object.defineProperty(Ye,"name",{configurable:!0,enumerable:!1,value:"moized("+Pe+")",writable:!0})}catch{}}function ne(Ye,je,ze){var Pe=Q(Ye,je);Pe!==-1&&(clearTimeout(Ye[Pe].timeoutId),ze&&Ye.splice(Pe,1))}function le(Ye,je){var ze=setTimeout(Ye,je);return typeof ze.unref=="function"&&ze.unref(),ze}function ae(Ye,je,ze,Pe){var Ae=je.maxAge;return function Ke(_e,Me,Ie){var qe=_e.keys[0];if(Q(Ye,qe)===-1){var at=function(){var Ge=te(ze,Pe),ce=Ge(_e.keys,qe),me=_e.values[ce];~ce&&(_e.keys.splice(ce,1),_e.values.splice(ce,1),typeof je.onCacheChange=="function"&&je.onCacheChange(_e,Me,Ie)),ne(Ye,qe,!0),typeof je.onExpire=="function"&&je.onExpire(qe)===!1&&(_e.keys.unshift(qe),_e.values.unshift(me),Ke(_e,Me,Ie),typeof je.onCacheChange=="function"&&je.onCacheChange(_e,Me,Ie))};Ye.push({expirationMethod:at,key:qe,timeoutId:le(at,Ae)})}}}function se(Ye,je){return function(Pe){var Ae=Pe.keys[0],Ke=Q(Ye,Ae);~Ke&&(ne(Ye,Ae,!1),Ye[Ke].timeoutId=le(Ye[Ke].expirationMethod,je.maxAge))}}function he(Ye,je,ze,Pe){var Ae=typeof je.maxAge=="number"&&isFinite(je.maxAge)?ae(Ye,je,ze,Pe):void 0;return{onCacheAdd:Ae,onCacheHit:Ae&&je.updateExpire?se(Ye,je):void 0}}var pe={anonymousProfileNameCounter:1,isCollectingStats:!1,profiles:{}},oe=!1;function de(Ye){Ye?delete pe.profiles[Ye]:pe.profiles={}}function ue(Ye){Ye===void 0&&(Ye=!0),pe.isCollectingStats=Ye}function ge(Ye){var je=Ye.profileName;return function(){je&&!pe.profiles[je]&&(pe.profiles[je]={calls:0,hits:0}),pe.profiles[je].calls++}}function ve(Ye){return function(){var je=pe.profiles,ze=Ye.profileName;je[ze]||(je[ze]={calls:0,hits:0}),je[ze].calls++,je[ze].hits++}}function fe(Ye){return Ye.displayName||Ye.name||"Anonymous "+pe.anonymousProfileNameCounter++}function Xe(Ye,je){return Ye?(je/Ye*100).toFixed(4)+"%":"0.0000%"}function Ze(Ye){!pe.isCollectingStats&&!oe&&(console.warn('Stats are not currently being collected, please run "collectStats" to enable them.'),oe=!0);var je=pe.profiles;if(Ye){if(!je[Ye])return{calls:0,hits:0,usage:"0.0000%"};var ze=je[Ye];return F({},ze,{usage:Xe(ze.calls,ze.hits)})}var Pe=Object.keys(pe.profiles).reduce(function(Ae,Ke){return Ae.calls+=je[Ke].calls,Ae.hits+=je[Ke].hits,Ae},{calls:0,hits:0});return F({},Pe,{profiles:Object.keys(je).reduce(function(Ae,Ke){return Ae[Ke]=Ze(Ke),Ae},{}),usage:Xe(Pe.calls,Pe.hits)})}function Ve(Ye){return pe.isCollectingStats?{onCacheAdd:ge(Ye),onCacheHit:ve(Ye)}:{}}var be={arguments:!0,callee:!0,caller:!0,constructor:!0,length:!0,name:!0,prototype:!0};function re(Ye,je,ze){ze===void 0&&(ze=[]),Object.getOwnPropertyNames(Ye).forEach(function(Pe){if(!be[Pe]&&ze.indexOf(Pe)===-1){var Ae=Object.getOwnPropertyDescriptor(Ye,Pe);Ae.get||Ae.set?Object.defineProperty(je,Pe,Ae):je[Pe]=Ye[Pe]}})}function ye(Ye,je){var ze=je.expirations,Pe=Ye.options,Ae=te(Pe.isEqual,Pe.isMatchingKey),Ke=Ye;Ke.clear=function(){var _e=Ke._microMemoizeOptions.onCacheChange,Me=Ke.cache;return Me.keys.length=0,Me.values.length=0,_e&&_e(Me,Ke.options,Ke),!0},Ke.clearStats=function(){de(Ke.options.profileName)},Ke.get=function(_e){var Me=Ke._microMemoizeOptions.transformKey,Ie=Ke.cache,qe=Me?Me(_e):_e,at=Ae(Ie.keys,qe);return at!==-1?Ke.apply(this,_e):void 0},Ke.getStats=function(){return Ze(Ke.options.profileName)},Ke.has=function(_e){var Me=Ke._microMemoizeOptions.transformKey,Ie=Me?Me(_e):_e;return Ae(Ke.cache.keys,Ie)!==-1},Ke.keys=function(){return Ke.cacheSnapshot.keys},Ke.remove=function(_e){var Me=Ke._microMemoizeOptions,Ie=Me.onCacheChange,qe=Me.transformKey,at=Ke.cache,rt=Ae(at.keys,qe?qe(_e):_e);if(rt===-1)return!1;var Ge=at.keys[rt];return at.keys.splice(rt,1),at.values.splice(rt,1),Ie&&Ie(at,Ke.options,Ke),ne(ze,Ge,!0),!0},Ke.set=function(_e,Me){var Ie=Ke._microMemoizeOptions,qe=Ke.cache,at=Ke.options,rt=Ie.onCacheAdd,Ge=Ie.onCacheChange,ce=Ie.transformKey,me=ce?ce(_e):_e,Re=Ae(qe.keys,me);if(Re===-1){var Fe=at.maxSize-1;qe.size>Fe&&(qe.keys.length=Fe,qe.values.length=Fe),qe.keys.unshift(me),qe.values.unshift(Me),at.isPromise&&qe.updateAsyncCache(Ke),rt&&rt(qe,at,Ke),Ge&&Ge(qe,at,Ke)}else{var He=qe.keys[Re];qe.values[Re]=Me,Re>0&&qe.orderByLru(He,Me,Re),at.isPromise&&qe.updateAsyncCache(Ke),typeof Ge=="function"&&Ge(qe,at,Ke)}},Ke.values=function(){return Ke.cacheSnapshot.values}}function we(Ye,je){var ze=je.expirations,Pe=je.options,Ae=je.originalFunction,Ke=Ye.options;Object.defineProperties(Ye,{_microMemoizeOptions:{configurable:!0,get:function(){return Ke}},cacheSnapshot:{configurable:!0,get:function(){var Ie=Ye.cache;return{keys:Ie.keys.slice(0),size:Ie.size,values:Ie.values.slice(0)}}},expirations:{configurable:!0,get:function(){return ze}},expirationsSnapshot:{configurable:!0,get:function(){return ze.slice(0)}},isMoized:{configurable:!0,get:function(){return!0}},options:{configurable:!0,get:function(){return Pe}},originalFunction:{configurable:!0,get:function(){return Ae}}});var _e=Ye;re(Ae,_e)}function We(Ye,je){return ye(Ye,je),we(Ye,je),Ye}var Se=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Le(Ye,je,ze){var Pe=Ye(F({maxArgs:2,isShallowEqual:!0},ze,{isReact:!1}));je.displayName||(je.displayName=je.name||"Component");function Ae(Ke,_e,Me){this.props=Ke,this.context=_e,this.updater=Me,this.MoizedComponent=Pe(je)}return Ae.prototype.isReactComponent={},Ae.prototype.render=function(){return{$$typeof:Se,type:this.MoizedComponent,props:this.props,ref:null,key:null,_owner:null}},re(je,Ae,["contextType","contextTypes"]),Ae.displayName="Moized("+(je.displayName||je.name||"Component")+")",ie(Ae,je.name,ze.profileName),Ae}function Ne(Ye){return function(je){if(Ye>=je.length)return je;if(Ye===0)return[];if(Ye===1)return[je[0]];if(Ye===2)return[je[0],je[1]];if(Ye===3)return[je[0],je[1],je[2]];for(var ze=[],Pe=0;Pe<Ye;Pe++)ze[Pe]=je[Pe];return ze}}function xe(Ye,je){for(var ze=Ye.length,Pe=0;Pe<ze;++Pe)if(Ye[Pe]===je)return Pe+1;return 0}function ke(){var Ye=[],je=[];return function(Pe,Ae){var Ke=typeof Ae;if(Ke==="function"||Ke==="symbol")return Ae.toString();if(typeof Ae=="object"){if(Ye.length){var _e=xe(Ye,this);_e===0?Ye[Ye.length]=this:(Ye.splice(_e),je.splice(_e)),je[je.length]=Pe;var Me=xe(Ye,Ae);if(Me!==0)return"[ref="+(je.slice(0,Me).join(".")||".")+"]"}else Ye[0]=Ae,je[0]=Pe;return Ae}return""+Ae}}function Ce(Ye){var je=typeof Ye;return Ye&&(je==="object"||je==="function")?JSON.stringify(Ye,ke()):Ye}function Ee(Ye){for(var je="|",ze=0;ze<Ye.length;ze++)je+=Ce(Ye[ze])+"|";return[je]}function et(Ye){return typeof Ye.serializer=="function"?Ye.serializer:Ee}function De(Ye,je){return Ye[0]===je[0]}function Je(Ye){if(typeof Ye=="function")return function(je,ze,Pe){return Ye(Pe.cache,Pe.options,Pe)}}function st(Ye){return Ye.matchesArg||Ye.isDeepEqual&&W.deepEqual||Ye.isShallowEqual&&W.shallowEqual||W.sameValueZeroEqual}function ct(Ye){return Ye.matchesKey||Ye.isSerialized&&De||void 0}function it(Ye){return D(Ye.isSerialized&&et(Ye),typeof Ye.transformArgs=="function"&&Ye.transformArgs,typeof Ye.maxArgs=="number"&&Ne(Ye.maxArgs))}function dt(Ye){var je=Ye.options.updateCacheForKey,ze=function(){for(var Ae=arguments.length,Ke=new Array(Ae),_e=0;_e<Ae;_e++)Ke[_e]=arguments[_e];if(!je(Ke))return Ye.apply(this,Ke);var Me=Ye.fn.apply(this,Ke);return Ye.set(Ke,Me),Me};return re(Ye,ze),ze}var Be=["matchesArg","isDeepEqual","isPromise","isReact","isSerialized","isShallowEqual","matchesKey","maxAge","maxArgs","maxSize","onCacheAdd","onCacheChange","onCacheHit","onExpire","profileName","serializer","updateCacheForKey","transformArgs","updateExpire"],Te=function Ye(je,ze){var Pe=ze||J;if(ee(je)){var Ae=je.originalFunction,Ke=q(je.options,Pe);return Ye(Ae,Ke)}if(typeof je=="object")return function(Wt,ot){if(typeof Wt=="function"){var ht=q(je,ot);return Ye(Wt,ht)}var Vt=q(je,Wt);return Ye(Vt)};if(Pe.isReact)return Le(Ye,je,Pe);var _e=F({},J,Pe,{maxAge:typeof Pe.maxAge=="number"&&Pe.maxAge>=0?Pe.maxAge:J.maxAge,maxArgs:typeof Pe.maxArgs=="number"&&Pe.maxArgs>=0?Pe.maxArgs:J.maxArgs,maxSize:typeof Pe.maxSize=="number"&&Pe.maxSize>=0?Pe.maxSize:J.maxSize,profileName:Pe.profileName||fe(je)}),Me=[];_e.matchesArg,_e.isDeepEqual;var Ie=_e.isPromise;_e.isReact,_e.isSerialized,_e.isShallowEqual,_e.matchesKey,_e.maxAge,_e.maxArgs;var qe=_e.maxSize,at=_e.onCacheAdd,rt=_e.onCacheChange,Ge=_e.onCacheHit;_e.onExpire,_e.profileName,_e.serializer;var ce=_e.updateCacheForKey;_e.transformArgs,_e.updateExpire;var me=U(_e,Be),Re=st(_e),Fe=ct(_e),He=he(Me,_e,Re,Fe),$e=Ve(_e),pt=it(_e),Gt=F({},me,{isEqual:Re,isMatchingKey:Fe,isPromise:Ie,maxSize:qe,onCacheAdd:Je(Y(at,He.onCacheAdd,$e.onCacheAdd)),onCacheChange:Je(rt),onCacheHit:Je(Y(Ge,He.onCacheHit,$e.onCacheHit)),transformKey:pt}),Xt=G(je,Gt),Rt=We(Xt,{expirations:Me,options:_e,originalFunction:je});return ce&&(Rt=dt(Rt)),ie(Rt,je.name,Pe.profileName),Rt};Te.clearStats=de,Te.collectStats=ue,Te.compose=function(){return D.apply(void 0,arguments)||Te},Te.deep=Te({isDeepEqual:!0}),Te.getStats=Ze,Te.infinite=Te({maxSize:1/0}),Te.isCollectingStats=function(){return pe.isCollectingStats},Te.isMoized=function(je){return typeof je=="function"&&!!je.isMoized},Te.matchesArg=function(Ye){return Te({matchesArg:Ye})},Te.matchesKey=function(Ye){return Te({matchesKey:Ye})};function Ue(Ye,je){if(je===!0)return Te({maxAge:Ye,updateExpire:je});if(typeof je=="object"){var ze=je.onExpire,Pe=je.updateExpire;return Te({maxAge:Ye,onExpire:ze,updateExpire:Pe})}return Te(typeof je=="function"?{maxAge:Ye,onExpire:je,updateExpire:!0}:{maxAge:Ye})}return Te.maxAge=Ue,Te.maxArgs=function(Ye){return Te({maxArgs:Ye})},Te.maxSize=function(Ye){return Te({maxSize:Ye})},Te.profile=function(Ye){return Te({profileName:Ye})},Te.promise=Te({isPromise:!0,updateExpire:!0}),Te.react=Te({isReact:!0}),Te.serialize=Te({isSerialized:!0}),Te.serializeWith=function(Ye){return Te({isSerialized:!0,serializer:Ye})},Te.shallow=Te({isShallowEqual:!0}),Te.transformArgs=function(Ye){return Te({transformArgs:Ye})},Te.updateCacheForKey=function(Ye){return Te({updateCacheForKey:Ye})},Object.defineProperty(Te,"default",{configurable:!1,enumerable:!1,value:Te,writable:!1}),Te})})(moize$1);const moize=moizeExports,proxyMarker=Symbol("Comlink.proxy"),createEndpoint=Symbol("Comlink.endpoint"),releaseProxy=Symbol("Comlink.releaseProxy"),throwMarker=Symbol("Comlink.thrown"),isObject$3=X=>typeof X=="object"&&X!==null||typeof X=="function",proxyTransferHandler={canHandle:X=>isObject$3(X)&&X[proxyMarker],serialize(X){const{port1:Z,port2:G}=new MessageChannel;return expose$1(X,Z),[G,[G]]},deserialize(X){return X.start(),wrap$1(X)}},throwTransferHandler={canHandle:X=>isObject$3(X)&&throwMarker in X,serialize({value:X}){let Z;return X instanceof Error?Z={isError:!0,value:{message:X.message,name:X.name,stack:X.stack}}:Z={isError:!1,value:X},[Z,[]]},deserialize(X){throw X.isError?Object.assign(new Error(X.value.message),X.value):X.value}},transferHandlers=new Map([["proxy",proxyTransferHandler],["throw",throwTransferHandler]]);function expose$1(X,Z=self){Z.addEventListener("message",function G(W){if(!W||!W.data)return;const{id:F,type:U,path:J}=Object.assign({path:[]},W.data),Y=(W.data.argumentList||[]).map(fromWireValue);let D;try{const Q=J.slice(0,-1).reduce((q,ee)=>q[ee],X),te=J.reduce((q,ee)=>q[ee],X);switch(U){case"GET":D=te;break;case"SET":Q[J.slice(-1)[0]]=fromWireValue(W.data.value),D=!0;break;case"APPLY":D=te.apply(Q,Y);break;case"CONSTRUCT":{const q=new te(...Y);D=proxy(q)}break;case"ENDPOINT":{const{port1:q,port2:ee}=new MessageChannel;expose$1(X,ee),D=transfer$1(q,[q])}break;case"RELEASE":D=void 0;break;default:return}}catch(Q){D={value:Q,[throwMarker]:0}}Promise.resolve(D).catch(Q=>({value:Q,[throwMarker]:0})).then(Q=>{const[te,q]=toWireValue(Q);Z.postMessage(Object.assign(Object.assign({},te),{id:F}),q),U==="RELEASE"&&(Z.removeEventListener("message",G),closeEndPoint(Z))})}),Z.start&&Z.start()}function isMessagePort(X){return X.constructor.name==="MessagePort"}function closeEndPoint(X){isMessagePort(X)&&X.close()}function wrap$1(X,Z){return createProxy(X,[],Z)}function throwIfProxyReleased(X){if(X)throw new Error("Proxy has been released and is not useable")}function createProxy(X,Z=[],G=function(){}){let W=!1;const F=new Proxy(G,{get(U,J){if(throwIfProxyReleased(W),J===releaseProxy)return()=>requestResponseMessage(X,{type:"RELEASE",path:Z.map(Y=>Y.toString())}).then(()=>{closeEndPoint(X),W=!0});if(J==="then"){if(Z.length===0)return{then:()=>F};const Y=requestResponseMessage(X,{type:"GET",path:Z.map(D=>D.toString())}).then(fromWireValue);return Y.then.bind(Y)}return createProxy(X,[...Z,J])},set(U,J,Y){throwIfProxyReleased(W);const[D,Q]=toWireValue(Y);return requestResponseMessage(X,{type:"SET",path:[...Z,J].map(te=>te.toString()),value:D},Q).then(fromWireValue)},apply(U,J,Y){throwIfProxyReleased(W);const D=Z[Z.length-1];if(D===createEndpoint)return requestResponseMessage(X,{type:"ENDPOINT"}).then(fromWireValue);if(D==="bind")return createProxy(X,Z.slice(0,-1));const[Q,te]=processArguments(Y);return requestResponseMessage(X,{type:"APPLY",path:Z.map(q=>q.toString()),argumentList:Q},te).then(fromWireValue)},construct(U,J){throwIfProxyReleased(W);const[Y,D]=processArguments(J);return requestResponseMessage(X,{type:"CONSTRUCT",path:Z.map(Q=>Q.toString()),argumentList:Y},D).then(fromWireValue)}});return F}function myFlat(X){return Array.prototype.concat.apply([],X)}function processArguments(X){const Z=X.map(toWireValue);return[Z.map(G=>G[0]),myFlat(Z.map(G=>G[1]))]}const transferCache=new WeakMap;function transfer$1(X,Z){return transferCache.set(X,Z),X}function proxy(X){return Object.assign(X,{[proxyMarker]:!0})}function toWireValue(X){for(const[Z,G]of transferHandlers)if(G.canHandle(X)){const[W,F]=G.serialize(X);return[{type:"HANDLER",name:Z,value:W},F]}return[{type:"RAW",value:X},transferCache.get(X)||[]]}function fromWireValue(X){switch(X.type){case"HANDLER":return transferHandlers.get(X.name).deserialize(X.value);case"RAW":return X.value}}function requestResponseMessage(X,Z,G){return new Promise(W=>{const F=generateUUID$1();X.addEventListener("message",function U(J){!J.data||!J.data.id||J.data.id!==F||(X.removeEventListener("message",U),W(J.data))}),X.start&&X.start(),X.postMessage(Object.assign({id:F},Z),G)})}function generateUUID$1(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const REVISION="151",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",KeepStencilOp=7680,AlwaysStencilFunc=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035;class EventDispatcher{addEventListener(Z,G){this._listeners===void 0&&(this._listeners={});const W=this._listeners;W[Z]===void 0&&(W[Z]=[]),W[Z].indexOf(G)===-1&&W[Z].push(G)}hasEventListener(Z,G){if(this._listeners===void 0)return!1;const W=this._listeners;return W[Z]!==void 0&&W[Z].indexOf(G)!==-1}removeEventListener(Z,G){if(this._listeners===void 0)return;const F=this._listeners[Z];if(F!==void 0){const U=F.indexOf(G);U!==-1&&F.splice(U,1)}}dispatchEvent(Z){if(this._listeners===void 0)return;const W=this._listeners[Z.type];if(W!==void 0){Z.target=this;const F=W.slice(0);for(let U=0,J=F.length;U<J;U++)F[U].call(this,Z);Z.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const X=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,G=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(_lut[X&255]+_lut[X>>8&255]+_lut[X>>16&255]+_lut[X>>24&255]+"-"+_lut[Z&255]+_lut[Z>>8&255]+"-"+_lut[Z>>16&15|64]+_lut[Z>>24&255]+"-"+_lut[G&63|128]+_lut[G>>8&255]+"-"+_lut[G>>16&255]+_lut[G>>24&255]+_lut[W&255]+_lut[W>>8&255]+_lut[W>>16&255]+_lut[W>>24&255]).toLowerCase()}function clamp(X,Z,G){return Math.max(Z,Math.min(G,X))}function euclideanModulo(X,Z){return(X%Z+Z)%Z}function lerp(X,Z,G){return(1-G)*X+G*Z}function isPowerOfTwo(X){return(X&X-1)===0&&X!==0}function floorPowerOfTwo(X){return Math.pow(2,Math.floor(Math.log(X)/Math.LN2))}function denormalize(X,Z){switch(Z.constructor){case Float32Array:return X;case Uint16Array:return X/65535;case Uint8Array:return X/255;case Int16Array:return Math.max(X/32767,-1);case Int8Array:return Math.max(X/127,-1);default:throw new Error("Invalid component type.")}}function normalize$1(X,Z){switch(Z.constructor){case Float32Array:return X;case Uint16Array:return Math.round(X*65535);case Uint8Array:return Math.round(X*255);case Int16Array:return Math.round(X*32767);case Int8Array:return Math.round(X*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(Z=0,G=0){Vector2.prototype.isVector2=!0,this.x=Z,this.y=G}get width(){return this.x}set width(Z){this.x=Z}get height(){return this.y}set height(Z){this.y=Z}set(Z,G){return this.x=Z,this.y=G,this}setScalar(Z){return this.x=Z,this.y=Z,this}setX(Z){return this.x=Z,this}setY(Z){return this.y=Z,this}setComponent(Z,G){switch(Z){case 0:this.x=G;break;case 1:this.y=G;break;default:throw new Error("index is out of range: "+Z)}return this}getComponent(Z){switch(Z){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+Z)}}clone(){return new this.constructor(this.x,this.y)}copy(Z){return this.x=Z.x,this.y=Z.y,this}add(Z){return this.x+=Z.x,this.y+=Z.y,this}addScalar(Z){return this.x+=Z,this.y+=Z,this}addVectors(Z,G){return this.x=Z.x+G.x,this.y=Z.y+G.y,this}addScaledVector(Z,G){return this.x+=Z.x*G,this.y+=Z.y*G,this}sub(Z){return this.x-=Z.x,this.y-=Z.y,this}subScalar(Z){return this.x-=Z,this.y-=Z,this}subVectors(Z,G){return this.x=Z.x-G.x,this.y=Z.y-G.y,this}multiply(Z){return this.x*=Z.x,this.y*=Z.y,this}multiplyScalar(Z){return this.x*=Z,this.y*=Z,this}divide(Z){return this.x/=Z.x,this.y/=Z.y,this}divideScalar(Z){return this.multiplyScalar(1/Z)}applyMatrix3(Z){const G=this.x,W=this.y,F=Z.elements;return this.x=F[0]*G+F[3]*W+F[6],this.y=F[1]*G+F[4]*W+F[7],this}min(Z){return this.x=Math.min(this.x,Z.x),this.y=Math.min(this.y,Z.y),this}max(Z){return this.x=Math.max(this.x,Z.x),this.y=Math.max(this.y,Z.y),this}clamp(Z,G){return this.x=Math.max(Z.x,Math.min(G.x,this.x)),this.y=Math.max(Z.y,Math.min(G.y,this.y)),this}clampScalar(Z,G){return this.x=Math.max(Z,Math.min(G,this.x)),this.y=Math.max(Z,Math.min(G,this.y)),this}clampLength(Z,G){const W=this.length();return this.divideScalar(W||1).multiplyScalar(Math.max(Z,Math.min(G,W)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(Z){return this.x*Z.x+this.y*Z.y}cross(Z){return this.x*Z.y-this.y*Z.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(Z){const G=Math.sqrt(this.lengthSq()*Z.lengthSq());if(G===0)return Math.PI/2;const W=this.dot(Z)/G;return Math.acos(clamp(W,-1,1))}distanceTo(Z){return Math.sqrt(this.distanceToSquared(Z))}distanceToSquared(Z){const G=this.x-Z.x,W=this.y-Z.y;return G*G+W*W}manhattanDistanceTo(Z){return Math.abs(this.x-Z.x)+Math.abs(this.y-Z.y)}setLength(Z){return this.normalize().multiplyScalar(Z)}lerp(Z,G){return this.x+=(Z.x-this.x)*G,this.y+=(Z.y-this.y)*G,this}lerpVectors(Z,G,W){return this.x=Z.x+(G.x-Z.x)*W,this.y=Z.y+(G.y-Z.y)*W,this}equals(Z){return Z.x===this.x&&Z.y===this.y}fromArray(Z,G=0){return this.x=Z[G],this.y=Z[G+1],this}toArray(Z=[],G=0){return Z[G]=this.x,Z[G+1]=this.y,Z}fromBufferAttribute(Z,G){return this.x=Z.getX(G),this.y=Z.getY(G),this}rotateAround(Z,G){const W=Math.cos(G),F=Math.sin(G),U=this.x-Z.x,J=this.y-Z.y;return this.x=U*W-J*F+Z.x,this.y=U*F+J*W+Z.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(Z,G,W,F,U,J,Y,D,Q){const te=this.elements;return te[0]=Z,te[1]=F,te[2]=Y,te[3]=G,te[4]=U,te[5]=D,te[6]=W,te[7]=J,te[8]=Q,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(Z){const G=this.elements,W=Z.elements;return G[0]=W[0],G[1]=W[1],G[2]=W[2],G[3]=W[3],G[4]=W[4],G[5]=W[5],G[6]=W[6],G[7]=W[7],G[8]=W[8],this}extractBasis(Z,G,W){return Z.setFromMatrix3Column(this,0),G.setFromMatrix3Column(this,1),W.setFromMatrix3Column(this,2),this}setFromMatrix4(Z){const G=Z.elements;return this.set(G[0],G[4],G[8],G[1],G[5],G[9],G[2],G[6],G[10]),this}multiply(Z){return this.multiplyMatrices(this,Z)}premultiply(Z){return this.multiplyMatrices(Z,this)}multiplyMatrices(Z,G){const W=Z.elements,F=G.elements,U=this.elements,J=W[0],Y=W[3],D=W[6],Q=W[1],te=W[4],q=W[7],ee=W[2],ie=W[5],ne=W[8],le=F[0],ae=F[3],se=F[6],he=F[1],pe=F[4],oe=F[7],de=F[2],ue=F[5],ge=F[8];return U[0]=J*le+Y*he+D*de,U[3]=J*ae+Y*pe+D*ue,U[6]=J*se+Y*oe+D*ge,U[1]=Q*le+te*he+q*de,U[4]=Q*ae+te*pe+q*ue,U[7]=Q*se+te*oe+q*ge,U[2]=ee*le+ie*he+ne*de,U[5]=ee*ae+ie*pe+ne*ue,U[8]=ee*se+ie*oe+ne*ge,this}multiplyScalar(Z){const G=this.elements;return G[0]*=Z,G[3]*=Z,G[6]*=Z,G[1]*=Z,G[4]*=Z,G[7]*=Z,G[2]*=Z,G[5]*=Z,G[8]*=Z,this}determinant(){const Z=this.elements,G=Z[0],W=Z[1],F=Z[2],U=Z[3],J=Z[4],Y=Z[5],D=Z[6],Q=Z[7],te=Z[8];return G*J*te-G*Y*Q-W*U*te+W*Y*D+F*U*Q-F*J*D}invert(){const Z=this.elements,G=Z[0],W=Z[1],F=Z[2],U=Z[3],J=Z[4],Y=Z[5],D=Z[6],Q=Z[7],te=Z[8],q=te*J-Y*Q,ee=Y*D-te*U,ie=Q*U-J*D,ne=G*q+W*ee+F*ie;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0);const le=1/ne;return Z[0]=q*le,Z[1]=(F*Q-te*W)*le,Z[2]=(Y*W-F*J)*le,Z[3]=ee*le,Z[4]=(te*G-F*D)*le,Z[5]=(F*U-Y*G)*le,Z[6]=ie*le,Z[7]=(W*D-Q*G)*le,Z[8]=(J*G-W*U)*le,this}transpose(){let Z;const G=this.elements;return Z=G[1],G[1]=G[3],G[3]=Z,Z=G[2],G[2]=G[6],G[6]=Z,Z=G[5],G[5]=G[7],G[7]=Z,this}getNormalMatrix(Z){return this.setFromMatrix4(Z).invert().transpose()}transposeIntoArray(Z){const G=this.elements;return Z[0]=G[0],Z[1]=G[3],Z[2]=G[6],Z[3]=G[1],Z[4]=G[4],Z[5]=G[7],Z[6]=G[2],Z[7]=G[5],Z[8]=G[8],this}setUvTransform(Z,G,W,F,U,J,Y){const D=Math.cos(U),Q=Math.sin(U);return this.set(W*D,W*Q,-W*(D*J+Q*Y)+J+Z,-F*Q,F*D,-F*(-Q*J+D*Y)+Y+G,0,0,1),this}scale(Z,G){return this.premultiply(_m3.makeScale(Z,G)),this}rotate(Z){return this.premultiply(_m3.makeRotation(-Z)),this}translate(Z,G){return this.premultiply(_m3.makeTranslation(Z,G)),this}makeTranslation(Z,G){return this.set(1,0,Z,0,1,G,0,0,1),this}makeRotation(Z){const G=Math.cos(Z),W=Math.sin(Z);return this.set(G,-W,0,W,G,0,0,0,1),this}makeScale(Z,G){return this.set(Z,0,0,0,G,0,0,0,1),this}equals(Z){const G=this.elements,W=Z.elements;for(let F=0;F<9;F++)if(G[F]!==W[F])return!1;return!0}fromArray(Z,G=0){for(let W=0;W<9;W++)this.elements[W]=Z[W+G];return this}toArray(Z=[],G=0){const W=this.elements;return Z[G]=W[0],Z[G+1]=W[1],Z[G+2]=W[2],Z[G+3]=W[3],Z[G+4]=W[4],Z[G+5]=W[5],Z[G+6]=W[6],Z[G+7]=W[7],Z[G+8]=W[8],Z}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(X){for(let Z=X.length-1;Z>=0;--Z)if(X[Z]>=65535)return!0;return!1}function createElementNS(X){return document.createElementNS("http://www.w3.org/1999/xhtml",X)}function SRGBToLinear(X){return X<.04045?X*.0773993808:Math.pow(X*.9478672986+.0521327014,2.4)}function LinearToSRGB(X){return X<.0031308?X*12.92:1.055*Math.pow(X,.41666)-.055}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function DisplayP3ToLinearSRGB(X){return X.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB)}function LinearSRGBToDisplayP3(X){return X.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}const TO_LINEAR={[LinearSRGBColorSpace]:X=>X,[SRGBColorSpace]:X=>X.convertSRGBToLinear(),[DisplayP3ColorSpace]:DisplayP3ToLinearSRGB},FROM_LINEAR={[LinearSRGBColorSpace]:X=>X,[SRGBColorSpace]:X=>X.convertLinearToSRGB(),[DisplayP3ColorSpace]:LinearSRGBToDisplayP3},ColorManagement={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(X){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!X},get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(X){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(X,Z,G){if(this.enabled===!1||Z===G||!Z||!G)return X;const W=TO_LINEAR[Z],F=FROM_LINEAR[G];if(W===void 0||F===void 0)throw new Error(`Unsupported color space conversion, "${Z}" to "${G}".`);return F(W(X))},fromWorkingColorSpace:function(X,Z){return this.convert(X,this.workingColorSpace,Z)},toWorkingColorSpace:function(X,Z){return this.convert(X,Z,this.workingColorSpace)}};let _canvas;class ImageUtils{static getDataURL(Z){if(/^data:/i.test(Z.src)||typeof HTMLCanvasElement>"u")return Z.src;let G;if(Z instanceof HTMLCanvasElement)G=Z;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=Z.width,_canvas.height=Z.height;const W=_canvas.getContext("2d");Z instanceof ImageData?W.putImageData(Z,0,0):W.drawImage(Z,0,0,Z.width,Z.height),G=_canvas}return G.width>2048||G.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",Z),G.toDataURL("image/jpeg",.6)):G.toDataURL("image/png")}static sRGBToLinear(Z){if(typeof HTMLImageElement<"u"&&Z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Z instanceof ImageBitmap){const G=createElementNS("canvas");G.width=Z.width,G.height=Z.height;const W=G.getContext("2d");W.drawImage(Z,0,0,Z.width,Z.height);const F=W.getImageData(0,0,Z.width,Z.height),U=F.data;for(let J=0;J<U.length;J++)U[J]=SRGBToLinear(U[J]/255)*255;return W.putImageData(F,0,0),G}else if(Z.data){const G=Z.data.slice(0);for(let W=0;W<G.length;W++)G instanceof Uint8Array||G instanceof Uint8ClampedArray?G[W]=Math.floor(SRGBToLinear(G[W]/255)*255):G[W]=SRGBToLinear(G[W]);return{data:G,width:Z.width,height:Z.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),Z}}class Source{constructor(Z=null){this.isSource=!0,this.uuid=generateUUID(),this.data=Z,this.version=0}set needsUpdate(Z){Z===!0&&this.version++}toJSON(Z){const G=Z===void 0||typeof Z=="string";if(!G&&Z.images[this.uuid]!==void 0)return Z.images[this.uuid];const W={uuid:this.uuid,url:""},F=this.data;if(F!==null){let U;if(Array.isArray(F)){U=[];for(let J=0,Y=F.length;J<Y;J++)F[J].isDataTexture?U.push(serializeImage(F[J].image)):U.push(serializeImage(F[J]))}else U=serializeImage(F);W.url=U}return G||(Z.images[this.uuid]=W),W}}function serializeImage(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap?ImageUtils.getDataURL(X):X.data?{data:Array.from(X.data),width:X.width,height:X.height,type:X.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(Z=Texture.DEFAULT_IMAGE,G=Texture.DEFAULT_MAPPING,W=ClampToEdgeWrapping,F=ClampToEdgeWrapping,U=LinearFilter,J=LinearMipmapLinearFilter,Y=RGBAFormat,D=UnsignedByteType,Q=Texture.DEFAULT_ANISOTROPY,te=LinearEncoding){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(Z),this.mipmaps=[],this.mapping=G,this.channel=0,this.wrapS=W,this.wrapT=F,this.magFilter=U,this.minFilter=J,this.anisotropy=Q,this.format=Y,this.internalFormat=null,this.type=D,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=te,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(Z=null){this.source.data=Z}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(Z){return this.name=Z.name,this.source=Z.source,this.mipmaps=Z.mipmaps.slice(0),this.mapping=Z.mapping,this.channel=Z.channel,this.wrapS=Z.wrapS,this.wrapT=Z.wrapT,this.magFilter=Z.magFilter,this.minFilter=Z.minFilter,this.anisotropy=Z.anisotropy,this.format=Z.format,this.internalFormat=Z.internalFormat,this.type=Z.type,this.offset.copy(Z.offset),this.repeat.copy(Z.repeat),this.center.copy(Z.center),this.rotation=Z.rotation,this.matrixAutoUpdate=Z.matrixAutoUpdate,this.matrix.copy(Z.matrix),this.generateMipmaps=Z.generateMipmaps,this.premultiplyAlpha=Z.premultiplyAlpha,this.flipY=Z.flipY,this.unpackAlignment=Z.unpackAlignment,this.encoding=Z.encoding,this.userData=JSON.parse(JSON.stringify(Z.userData)),this.needsUpdate=!0,this}toJSON(Z){const G=Z===void 0||typeof Z=="string";if(!G&&Z.textures[this.uuid]!==void 0)return Z.textures[this.uuid];const W={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(Z).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(W.userData=this.userData),G||(Z.textures[this.uuid]=W),W}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(Z){if(this.mapping!==UVMapping)return Z;if(Z.applyMatrix3(this.matrix),Z.x<0||Z.x>1)switch(this.wrapS){case RepeatWrapping:Z.x=Z.x-Math.floor(Z.x);break;case ClampToEdgeWrapping:Z.x=Z.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(Z.x)%2)===1?Z.x=Math.ceil(Z.x)-Z.x:Z.x=Z.x-Math.floor(Z.x);break}if(Z.y<0||Z.y>1)switch(this.wrapT){case RepeatWrapping:Z.y=Z.y-Math.floor(Z.y);break;case ClampToEdgeWrapping:Z.y=Z.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(Z.y)%2)===1?Z.y=Math.ceil(Z.y)-Z.y:Z.y=Z.y-Math.floor(Z.y);break}return this.flipY&&(Z.y=1-Z.y),Z}set needsUpdate(Z){Z===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(Z=0,G=0,W=0,F=1){Vector4.prototype.isVector4=!0,this.x=Z,this.y=G,this.z=W,this.w=F}get width(){return this.z}set width(Z){this.z=Z}get height(){return this.w}set height(Z){this.w=Z}set(Z,G,W,F){return this.x=Z,this.y=G,this.z=W,this.w=F,this}setScalar(Z){return this.x=Z,this.y=Z,this.z=Z,this.w=Z,this}setX(Z){return this.x=Z,this}setY(Z){return this.y=Z,this}setZ(Z){return this.z=Z,this}setW(Z){return this.w=Z,this}setComponent(Z,G){switch(Z){case 0:this.x=G;break;case 1:this.y=G;break;case 2:this.z=G;break;case 3:this.w=G;break;default:throw new Error("index is out of range: "+Z)}return this}getComponent(Z){switch(Z){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+Z)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(Z){return this.x=Z.x,this.y=Z.y,this.z=Z.z,this.w=Z.w!==void 0?Z.w:1,this}add(Z){return this.x+=Z.x,this.y+=Z.y,this.z+=Z.z,this.w+=Z.w,this}addScalar(Z){return this.x+=Z,this.y+=Z,this.z+=Z,this.w+=Z,this}addVectors(Z,G){return this.x=Z.x+G.x,this.y=Z.y+G.y,this.z=Z.z+G.z,this.w=Z.w+G.w,this}addScaledVector(Z,G){return this.x+=Z.x*G,this.y+=Z.y*G,this.z+=Z.z*G,this.w+=Z.w*G,this}sub(Z){return this.x-=Z.x,this.y-=Z.y,this.z-=Z.z,this.w-=Z.w,this}subScalar(Z){return this.x-=Z,this.y-=Z,this.z-=Z,this.w-=Z,this}subVectors(Z,G){return this.x=Z.x-G.x,this.y=Z.y-G.y,this.z=Z.z-G.z,this.w=Z.w-G.w,this}multiply(Z){return this.x*=Z.x,this.y*=Z.y,this.z*=Z.z,this.w*=Z.w,this}multiplyScalar(Z){return this.x*=Z,this.y*=Z,this.z*=Z,this.w*=Z,this}applyMatrix4(Z){const G=this.x,W=this.y,F=this.z,U=this.w,J=Z.elements;return this.x=J[0]*G+J[4]*W+J[8]*F+J[12]*U,this.y=J[1]*G+J[5]*W+J[9]*F+J[13]*U,this.z=J[2]*G+J[6]*W+J[10]*F+J[14]*U,this.w=J[3]*G+J[7]*W+J[11]*F+J[15]*U,this}divideScalar(Z){return this.multiplyScalar(1/Z)}setAxisAngleFromQuaternion(Z){this.w=2*Math.acos(Z.w);const G=Math.sqrt(1-Z.w*Z.w);return G<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=Z.x/G,this.y=Z.y/G,this.z=Z.z/G),this}setAxisAngleFromRotationMatrix(Z){let G,W,F,U;const D=Z.elements,Q=D[0],te=D[4],q=D[8],ee=D[1],ie=D[5],ne=D[9],le=D[2],ae=D[6],se=D[10];if(Math.abs(te-ee)<.01&&Math.abs(q-le)<.01&&Math.abs(ne-ae)<.01){if(Math.abs(te+ee)<.1&&Math.abs(q+le)<.1&&Math.abs(ne+ae)<.1&&Math.abs(Q+ie+se-3)<.1)return this.set(1,0,0,0),this;G=Math.PI;const pe=(Q+1)/2,oe=(ie+1)/2,de=(se+1)/2,ue=(te+ee)/4,ge=(q+le)/4,ve=(ne+ae)/4;return pe>oe&&pe>de?pe<.01?(W=0,F=.707106781,U=.707106781):(W=Math.sqrt(pe),F=ue/W,U=ge/W):oe>de?oe<.01?(W=.707106781,F=0,U=.707106781):(F=Math.sqrt(oe),W=ue/F,U=ve/F):de<.01?(W=.707106781,F=.707106781,U=0):(U=Math.sqrt(de),W=ge/U,F=ve/U),this.set(W,F,U,G),this}let he=Math.sqrt((ae-ne)*(ae-ne)+(q-le)*(q-le)+(ee-te)*(ee-te));return Math.abs(he)<.001&&(he=1),this.x=(ae-ne)/he,this.y=(q-le)/he,this.z=(ee-te)/he,this.w=Math.acos((Q+ie+se-1)/2),this}min(Z){return this.x=Math.min(this.x,Z.x),this.y=Math.min(this.y,Z.y),this.z=Math.min(this.z,Z.z),this.w=Math.min(this.w,Z.w),this}max(Z){return this.x=Math.max(this.x,Z.x),this.y=Math.max(this.y,Z.y),this.z=Math.max(this.z,Z.z),this.w=Math.max(this.w,Z.w),this}clamp(Z,G){return this.x=Math.max(Z.x,Math.min(G.x,this.x)),this.y=Math.max(Z.y,Math.min(G.y,this.y)),this.z=Math.max(Z.z,Math.min(G.z,this.z)),this.w=Math.max(Z.w,Math.min(G.w,this.w)),this}clampScalar(Z,G){return this.x=Math.max(Z,Math.min(G,this.x)),this.y=Math.max(Z,Math.min(G,this.y)),this.z=Math.max(Z,Math.min(G,this.z)),this.w=Math.max(Z,Math.min(G,this.w)),this}clampLength(Z,G){const W=this.length();return this.divideScalar(W||1).multiplyScalar(Math.max(Z,Math.min(G,W)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(Z){return this.x*Z.x+this.y*Z.y+this.z*Z.z+this.w*Z.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(Z){return this.normalize().multiplyScalar(Z)}lerp(Z,G){return this.x+=(Z.x-this.x)*G,this.y+=(Z.y-this.y)*G,this.z+=(Z.z-this.z)*G,this.w+=(Z.w-this.w)*G,this}lerpVectors(Z,G,W){return this.x=Z.x+(G.x-Z.x)*W,this.y=Z.y+(G.y-Z.y)*W,this.z=Z.z+(G.z-Z.z)*W,this.w=Z.w+(G.w-Z.w)*W,this}equals(Z){return Z.x===this.x&&Z.y===this.y&&Z.z===this.z&&Z.w===this.w}fromArray(Z,G=0){return this.x=Z[G],this.y=Z[G+1],this.z=Z[G+2],this.w=Z[G+3],this}toArray(Z=[],G=0){return Z[G]=this.x,Z[G+1]=this.y,Z[G+2]=this.z,Z[G+3]=this.w,Z}fromBufferAttribute(Z,G){return this.x=Z.getX(G),this.y=Z.getY(G),this.z=Z.getZ(G),this.w=Z.getW(G),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(Z=1,G=1,W={}){super(),this.isWebGLRenderTarget=!0,this.width=Z,this.height=G,this.depth=1,this.scissor=new Vector4(0,0,Z,G),this.scissorTest=!1,this.viewport=new Vector4(0,0,Z,G);const F={width:Z,height:G,depth:1};this.texture=new Texture(F,W.mapping,W.wrapS,W.wrapT,W.magFilter,W.minFilter,W.format,W.type,W.anisotropy,W.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=W.generateMipmaps!==void 0?W.generateMipmaps:!1,this.texture.internalFormat=W.internalFormat!==void 0?W.internalFormat:null,this.texture.minFilter=W.minFilter!==void 0?W.minFilter:LinearFilter,this.depthBuffer=W.depthBuffer!==void 0?W.depthBuffer:!0,this.stencilBuffer=W.stencilBuffer!==void 0?W.stencilBuffer:!1,this.depthTexture=W.depthTexture!==void 0?W.depthTexture:null,this.samples=W.samples!==void 0?W.samples:0}setSize(Z,G,W=1){(this.width!==Z||this.height!==G||this.depth!==W)&&(this.width=Z,this.height=G,this.depth=W,this.texture.image.width=Z,this.texture.image.height=G,this.texture.image.depth=W,this.dispose()),this.viewport.set(0,0,Z,G),this.scissor.set(0,0,Z,G)}clone(){return new this.constructor().copy(this)}copy(Z){this.width=Z.width,this.height=Z.height,this.depth=Z.depth,this.viewport.copy(Z.viewport),this.texture=Z.texture.clone(),this.texture.isRenderTargetTexture=!0;const G=Object.assign({},Z.texture.image);return this.texture.source=new Source(G),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,Z.depthTexture!==null&&(this.depthTexture=Z.depthTexture.clone()),this.samples=Z.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(Z=null,G=1,W=1,F=1){super(null),this.isDataArrayTexture=!0,this.image={data:Z,width:G,height:W,depth:F},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(Z=null,G=1,W=1,F=1){super(null),this.isData3DTexture=!0,this.image={data:Z,width:G,height:W,depth:F},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(Z=0,G=0,W=0,F=1){this.isQuaternion=!0,this._x=Z,this._y=G,this._z=W,this._w=F}static slerpFlat(Z,G,W,F,U,J,Y){let D=W[F+0],Q=W[F+1],te=W[F+2],q=W[F+3];const ee=U[J+0],ie=U[J+1],ne=U[J+2],le=U[J+3];if(Y===0){Z[G+0]=D,Z[G+1]=Q,Z[G+2]=te,Z[G+3]=q;return}if(Y===1){Z[G+0]=ee,Z[G+1]=ie,Z[G+2]=ne,Z[G+3]=le;return}if(q!==le||D!==ee||Q!==ie||te!==ne){let ae=1-Y;const se=D*ee+Q*ie+te*ne+q*le,he=se>=0?1:-1,pe=1-se*se;if(pe>Number.EPSILON){const de=Math.sqrt(pe),ue=Math.atan2(de,se*he);ae=Math.sin(ae*ue)/de,Y=Math.sin(Y*ue)/de}const oe=Y*he;if(D=D*ae+ee*oe,Q=Q*ae+ie*oe,te=te*ae+ne*oe,q=q*ae+le*oe,ae===1-Y){const de=1/Math.sqrt(D*D+Q*Q+te*te+q*q);D*=de,Q*=de,te*=de,q*=de}}Z[G]=D,Z[G+1]=Q,Z[G+2]=te,Z[G+3]=q}static multiplyQuaternionsFlat(Z,G,W,F,U,J){const Y=W[F],D=W[F+1],Q=W[F+2],te=W[F+3],q=U[J],ee=U[J+1],ie=U[J+2],ne=U[J+3];return Z[G]=Y*ne+te*q+D*ie-Q*ee,Z[G+1]=D*ne+te*ee+Q*q-Y*ie,Z[G+2]=Q*ne+te*ie+Y*ee-D*q,Z[G+3]=te*ne-Y*q-D*ee-Q*ie,Z}get x(){return this._x}set x(Z){this._x=Z,this._onChangeCallback()}get y(){return this._y}set y(Z){this._y=Z,this._onChangeCallback()}get z(){return this._z}set z(Z){this._z=Z,this._onChangeCallback()}get w(){return this._w}set w(Z){this._w=Z,this._onChangeCallback()}set(Z,G,W,F){return this._x=Z,this._y=G,this._z=W,this._w=F,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(Z){return this._x=Z.x,this._y=Z.y,this._z=Z.z,this._w=Z.w,this._onChangeCallback(),this}setFromEuler(Z,G){const W=Z._x,F=Z._y,U=Z._z,J=Z._order,Y=Math.cos,D=Math.sin,Q=Y(W/2),te=Y(F/2),q=Y(U/2),ee=D(W/2),ie=D(F/2),ne=D(U/2);switch(J){case"XYZ":this._x=ee*te*q+Q*ie*ne,this._y=Q*ie*q-ee*te*ne,this._z=Q*te*ne+ee*ie*q,this._w=Q*te*q-ee*ie*ne;break;case"YXZ":this._x=ee*te*q+Q*ie*ne,this._y=Q*ie*q-ee*te*ne,this._z=Q*te*ne-ee*ie*q,this._w=Q*te*q+ee*ie*ne;break;case"ZXY":this._x=ee*te*q-Q*ie*ne,this._y=Q*ie*q+ee*te*ne,this._z=Q*te*ne+ee*ie*q,this._w=Q*te*q-ee*ie*ne;break;case"ZYX":this._x=ee*te*q-Q*ie*ne,this._y=Q*ie*q+ee*te*ne,this._z=Q*te*ne-ee*ie*q,this._w=Q*te*q+ee*ie*ne;break;case"YZX":this._x=ee*te*q+Q*ie*ne,this._y=Q*ie*q+ee*te*ne,this._z=Q*te*ne-ee*ie*q,this._w=Q*te*q-ee*ie*ne;break;case"XZY":this._x=ee*te*q-Q*ie*ne,this._y=Q*ie*q-ee*te*ne,this._z=Q*te*ne+ee*ie*q,this._w=Q*te*q+ee*ie*ne;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+J)}return G!==!1&&this._onChangeCallback(),this}setFromAxisAngle(Z,G){const W=G/2,F=Math.sin(W);return this._x=Z.x*F,this._y=Z.y*F,this._z=Z.z*F,this._w=Math.cos(W),this._onChangeCallback(),this}setFromRotationMatrix(Z){const G=Z.elements,W=G[0],F=G[4],U=G[8],J=G[1],Y=G[5],D=G[9],Q=G[2],te=G[6],q=G[10],ee=W+Y+q;if(ee>0){const ie=.5/Math.sqrt(ee+1);this._w=.25/ie,this._x=(te-D)*ie,this._y=(U-Q)*ie,this._z=(J-F)*ie}else if(W>Y&&W>q){const ie=2*Math.sqrt(1+W-Y-q);this._w=(te-D)/ie,this._x=.25*ie,this._y=(F+J)/ie,this._z=(U+Q)/ie}else if(Y>q){const ie=2*Math.sqrt(1+Y-W-q);this._w=(U-Q)/ie,this._x=(F+J)/ie,this._y=.25*ie,this._z=(D+te)/ie}else{const ie=2*Math.sqrt(1+q-W-Y);this._w=(J-F)/ie,this._x=(U+Q)/ie,this._y=(D+te)/ie,this._z=.25*ie}return this._onChangeCallback(),this}setFromUnitVectors(Z,G){let W=Z.dot(G)+1;return W<Number.EPSILON?(W=0,Math.abs(Z.x)>Math.abs(Z.z)?(this._x=-Z.y,this._y=Z.x,this._z=0,this._w=W):(this._x=0,this._y=-Z.z,this._z=Z.y,this._w=W)):(this._x=Z.y*G.z-Z.z*G.y,this._y=Z.z*G.x-Z.x*G.z,this._z=Z.x*G.y-Z.y*G.x,this._w=W),this.normalize()}angleTo(Z){return 2*Math.acos(Math.abs(clamp(this.dot(Z),-1,1)))}rotateTowards(Z,G){const W=this.angleTo(Z);if(W===0)return this;const F=Math.min(1,G/W);return this.slerp(Z,F),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(Z){return this._x*Z._x+this._y*Z._y+this._z*Z._z+this._w*Z._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let Z=this.length();return Z===0?(this._x=0,this._y=0,this._z=0,this._w=1):(Z=1/Z,this._x=this._x*Z,this._y=this._y*Z,this._z=this._z*Z,this._w=this._w*Z),this._onChangeCallback(),this}multiply(Z){return this.multiplyQuaternions(this,Z)}premultiply(Z){return this.multiplyQuaternions(Z,this)}multiplyQuaternions(Z,G){const W=Z._x,F=Z._y,U=Z._z,J=Z._w,Y=G._x,D=G._y,Q=G._z,te=G._w;return this._x=W*te+J*Y+F*Q-U*D,this._y=F*te+J*D+U*Y-W*Q,this._z=U*te+J*Q+W*D-F*Y,this._w=J*te-W*Y-F*D-U*Q,this._onChangeCallback(),this}slerp(Z,G){if(G===0)return this;if(G===1)return this.copy(Z);const W=this._x,F=this._y,U=this._z,J=this._w;let Y=J*Z._w+W*Z._x+F*Z._y+U*Z._z;if(Y<0?(this._w=-Z._w,this._x=-Z._x,this._y=-Z._y,this._z=-Z._z,Y=-Y):this.copy(Z),Y>=1)return this._w=J,this._x=W,this._y=F,this._z=U,this;const D=1-Y*Y;if(D<=Number.EPSILON){const ie=1-G;return this._w=ie*J+G*this._w,this._x=ie*W+G*this._x,this._y=ie*F+G*this._y,this._z=ie*U+G*this._z,this.normalize(),this._onChangeCallback(),this}const Q=Math.sqrt(D),te=Math.atan2(Q,Y),q=Math.sin((1-G)*te)/Q,ee=Math.sin(G*te)/Q;return this._w=J*q+this._w*ee,this._x=W*q+this._x*ee,this._y=F*q+this._y*ee,this._z=U*q+this._z*ee,this._onChangeCallback(),this}slerpQuaternions(Z,G,W){return this.copy(Z).slerp(G,W)}random(){const Z=Math.random(),G=Math.sqrt(1-Z),W=Math.sqrt(Z),F=2*Math.PI*Math.random(),U=2*Math.PI*Math.random();return this.set(G*Math.cos(F),W*Math.sin(U),W*Math.cos(U),G*Math.sin(F))}equals(Z){return Z._x===this._x&&Z._y===this._y&&Z._z===this._z&&Z._w===this._w}fromArray(Z,G=0){return this._x=Z[G],this._y=Z[G+1],this._z=Z[G+2],this._w=Z[G+3],this._onChangeCallback(),this}toArray(Z=[],G=0){return Z[G]=this._x,Z[G+1]=this._y,Z[G+2]=this._z,Z[G+3]=this._w,Z}fromBufferAttribute(Z,G){return this._x=Z.getX(G),this._y=Z.getY(G),this._z=Z.getZ(G),this._w=Z.getW(G),this}toJSON(){return this.toArray()}_onChange(Z){return this._onChangeCallback=Z,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(Z=0,G=0,W=0){Vector3.prototype.isVector3=!0,this.x=Z,this.y=G,this.z=W}set(Z,G,W){return W===void 0&&(W=this.z),this.x=Z,this.y=G,this.z=W,this}setScalar(Z){return this.x=Z,this.y=Z,this.z=Z,this}setX(Z){return this.x=Z,this}setY(Z){return this.y=Z,this}setZ(Z){return this.z=Z,this}setComponent(Z,G){switch(Z){case 0:this.x=G;break;case 1:this.y=G;break;case 2:this.z=G;break;default:throw new Error("index is out of range: "+Z)}return this}getComponent(Z){switch(Z){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+Z)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(Z){return this.x=Z.x,this.y=Z.y,this.z=Z.z,this}add(Z){return this.x+=Z.x,this.y+=Z.y,this.z+=Z.z,this}addScalar(Z){return this.x+=Z,this.y+=Z,this.z+=Z,this}addVectors(Z,G){return this.x=Z.x+G.x,this.y=Z.y+G.y,this.z=Z.z+G.z,this}addScaledVector(Z,G){return this.x+=Z.x*G,this.y+=Z.y*G,this.z+=Z.z*G,this}sub(Z){return this.x-=Z.x,this.y-=Z.y,this.z-=Z.z,this}subScalar(Z){return this.x-=Z,this.y-=Z,this.z-=Z,this}subVectors(Z,G){return this.x=Z.x-G.x,this.y=Z.y-G.y,this.z=Z.z-G.z,this}multiply(Z){return this.x*=Z.x,this.y*=Z.y,this.z*=Z.z,this}multiplyScalar(Z){return this.x*=Z,this.y*=Z,this.z*=Z,this}multiplyVectors(Z,G){return this.x=Z.x*G.x,this.y=Z.y*G.y,this.z=Z.z*G.z,this}applyEuler(Z){return this.applyQuaternion(_quaternion$4.setFromEuler(Z))}applyAxisAngle(Z,G){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(Z,G))}applyMatrix3(Z){const G=this.x,W=this.y,F=this.z,U=Z.elements;return this.x=U[0]*G+U[3]*W+U[6]*F,this.y=U[1]*G+U[4]*W+U[7]*F,this.z=U[2]*G+U[5]*W+U[8]*F,this}applyNormalMatrix(Z){return this.applyMatrix3(Z).normalize()}applyMatrix4(Z){const G=this.x,W=this.y,F=this.z,U=Z.elements,J=1/(U[3]*G+U[7]*W+U[11]*F+U[15]);return this.x=(U[0]*G+U[4]*W+U[8]*F+U[12])*J,this.y=(U[1]*G+U[5]*W+U[9]*F+U[13])*J,this.z=(U[2]*G+U[6]*W+U[10]*F+U[14])*J,this}applyQuaternion(Z){const G=this.x,W=this.y,F=this.z,U=Z.x,J=Z.y,Y=Z.z,D=Z.w,Q=D*G+J*F-Y*W,te=D*W+Y*G-U*F,q=D*F+U*W-J*G,ee=-U*G-J*W-Y*F;return this.x=Q*D+ee*-U+te*-Y-q*-J,this.y=te*D+ee*-J+q*-U-Q*-Y,this.z=q*D+ee*-Y+Q*-J-te*-U,this}project(Z){return this.applyMatrix4(Z.matrixWorldInverse).applyMatrix4(Z.projectionMatrix)}unproject(Z){return this.applyMatrix4(Z.projectionMatrixInverse).applyMatrix4(Z.matrixWorld)}transformDirection(Z){const G=this.x,W=this.y,F=this.z,U=Z.elements;return this.x=U[0]*G+U[4]*W+U[8]*F,this.y=U[1]*G+U[5]*W+U[9]*F,this.z=U[2]*G+U[6]*W+U[10]*F,this.normalize()}divide(Z){return this.x/=Z.x,this.y/=Z.y,this.z/=Z.z,this}divideScalar(Z){return this.multiplyScalar(1/Z)}min(Z){return this.x=Math.min(this.x,Z.x),this.y=Math.min(this.y,Z.y),this.z=Math.min(this.z,Z.z),this}max(Z){return this.x=Math.max(this.x,Z.x),this.y=Math.max(this.y,Z.y),this.z=Math.max(this.z,Z.z),this}clamp(Z,G){return this.x=Math.max(Z.x,Math.min(G.x,this.x)),this.y=Math.max(Z.y,Math.min(G.y,this.y)),this.z=Math.max(Z.z,Math.min(G.z,this.z)),this}clampScalar(Z,G){return this.x=Math.max(Z,Math.min(G,this.x)),this.y=Math.max(Z,Math.min(G,this.y)),this.z=Math.max(Z,Math.min(G,this.z)),this}clampLength(Z,G){const W=this.length();return this.divideScalar(W||1).multiplyScalar(Math.max(Z,Math.min(G,W)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(Z){return this.x*Z.x+this.y*Z.y+this.z*Z.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(Z){return this.normalize().multiplyScalar(Z)}lerp(Z,G){return this.x+=(Z.x-this.x)*G,this.y+=(Z.y-this.y)*G,this.z+=(Z.z-this.z)*G,this}lerpVectors(Z,G,W){return this.x=Z.x+(G.x-Z.x)*W,this.y=Z.y+(G.y-Z.y)*W,this.z=Z.z+(G.z-Z.z)*W,this}cross(Z){return this.crossVectors(this,Z)}crossVectors(Z,G){const W=Z.x,F=Z.y,U=Z.z,J=G.x,Y=G.y,D=G.z;return this.x=F*D-U*Y,this.y=U*J-W*D,this.z=W*Y-F*J,this}projectOnVector(Z){const G=Z.lengthSq();if(G===0)return this.set(0,0,0);const W=Z.dot(this)/G;return this.copy(Z).multiplyScalar(W)}projectOnPlane(Z){return _vector$b.copy(this).projectOnVector(Z),this.sub(_vector$b)}reflect(Z){return this.sub(_vector$b.copy(Z).multiplyScalar(2*this.dot(Z)))}angleTo(Z){const G=Math.sqrt(this.lengthSq()*Z.lengthSq());if(G===0)return Math.PI/2;const W=this.dot(Z)/G;return Math.acos(clamp(W,-1,1))}distanceTo(Z){return Math.sqrt(this.distanceToSquared(Z))}distanceToSquared(Z){const G=this.x-Z.x,W=this.y-Z.y,F=this.z-Z.z;return G*G+W*W+F*F}manhattanDistanceTo(Z){return Math.abs(this.x-Z.x)+Math.abs(this.y-Z.y)+Math.abs(this.z-Z.z)}setFromSpherical(Z){return this.setFromSphericalCoords(Z.radius,Z.phi,Z.theta)}setFromSphericalCoords(Z,G,W){const F=Math.sin(G)*Z;return this.x=F*Math.sin(W),this.y=Math.cos(G)*Z,this.z=F*Math.cos(W),this}setFromCylindrical(Z){return this.setFromCylindricalCoords(Z.radius,Z.theta,Z.y)}setFromCylindricalCoords(Z,G,W){return this.x=Z*Math.sin(G),this.y=W,this.z=Z*Math.cos(G),this}setFromMatrixPosition(Z){const G=Z.elements;return this.x=G[12],this.y=G[13],this.z=G[14],this}setFromMatrixScale(Z){const G=this.setFromMatrixColumn(Z,0).length(),W=this.setFromMatrixColumn(Z,1).length(),F=this.setFromMatrixColumn(Z,2).length();return this.x=G,this.y=W,this.z=F,this}setFromMatrixColumn(Z,G){return this.fromArray(Z.elements,G*4)}setFromMatrix3Column(Z,G){return this.fromArray(Z.elements,G*3)}setFromEuler(Z){return this.x=Z._x,this.y=Z._y,this.z=Z._z,this}setFromColor(Z){return this.x=Z.r,this.y=Z.g,this.z=Z.b,this}equals(Z){return Z.x===this.x&&Z.y===this.y&&Z.z===this.z}fromArray(Z,G=0){return this.x=Z[G],this.y=Z[G+1],this.z=Z[G+2],this}toArray(Z=[],G=0){return Z[G]=this.x,Z[G+1]=this.y,Z[G+2]=this.z,Z}fromBufferAttribute(Z,G){return this.x=Z.getX(G),this.y=Z.getY(G),this.z=Z.getZ(G),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const Z=(Math.random()-.5)*2,G=Math.random()*Math.PI*2,W=Math.sqrt(1-Z**2);return this.x=W*Math.cos(G),this.y=W*Math.sin(G),this.z=Z,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$b=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(Z=new Vector3(1/0,1/0,1/0),G=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=Z,this.max=G}set(Z,G){return this.min.copy(Z),this.max.copy(G),this}setFromArray(Z){this.makeEmpty();for(let G=0,W=Z.length;G<W;G+=3)this.expandByPoint(_vector$a.fromArray(Z,G));return this}setFromBufferAttribute(Z){this.makeEmpty();for(let G=0,W=Z.count;G<W;G++)this.expandByPoint(_vector$a.fromBufferAttribute(Z,G));return this}setFromPoints(Z){this.makeEmpty();for(let G=0,W=Z.length;G<W;G++)this.expandByPoint(Z[G]);return this}setFromCenterAndSize(Z,G){const W=_vector$a.copy(G).multiplyScalar(.5);return this.min.copy(Z).sub(W),this.max.copy(Z).add(W),this}setFromObject(Z,G=!1){return this.makeEmpty(),this.expandByObject(Z,G)}clone(){return new this.constructor().copy(this)}copy(Z){return this.min.copy(Z.min),this.max.copy(Z.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(Z){return this.isEmpty()?Z.set(0,0,0):Z.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(Z){return this.isEmpty()?Z.set(0,0,0):Z.subVectors(this.max,this.min)}expandByPoint(Z){return this.min.min(Z),this.max.max(Z),this}expandByVector(Z){return this.min.sub(Z),this.max.add(Z),this}expandByScalar(Z){return this.min.addScalar(-Z),this.max.addScalar(Z),this}expandByObject(Z,G=!1){if(Z.updateWorldMatrix(!1,!1),Z.boundingBox!==void 0)Z.boundingBox===null&&Z.computeBoundingBox(),_box$3.copy(Z.boundingBox),_box$3.applyMatrix4(Z.matrixWorld),this.union(_box$3);else{const F=Z.geometry;if(F!==void 0)if(G&&F.attributes!==void 0&&F.attributes.position!==void 0){const U=F.attributes.position;for(let J=0,Y=U.count;J<Y;J++)_vector$a.fromBufferAttribute(U,J).applyMatrix4(Z.matrixWorld),this.expandByPoint(_vector$a)}else F.boundingBox===null&&F.computeBoundingBox(),_box$3.copy(F.boundingBox),_box$3.applyMatrix4(Z.matrixWorld),this.union(_box$3)}const W=Z.children;for(let F=0,U=W.length;F<U;F++)this.expandByObject(W[F],G);return this}containsPoint(Z){return!(Z.x<this.min.x||Z.x>this.max.x||Z.y<this.min.y||Z.y>this.max.y||Z.z<this.min.z||Z.z>this.max.z)}containsBox(Z){return this.min.x<=Z.min.x&&Z.max.x<=this.max.x&&this.min.y<=Z.min.y&&Z.max.y<=this.max.y&&this.min.z<=Z.min.z&&Z.max.z<=this.max.z}getParameter(Z,G){return G.set((Z.x-this.min.x)/(this.max.x-this.min.x),(Z.y-this.min.y)/(this.max.y-this.min.y),(Z.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(Z){return!(Z.max.x<this.min.x||Z.min.x>this.max.x||Z.max.y<this.min.y||Z.min.y>this.max.y||Z.max.z<this.min.z||Z.min.z>this.max.z)}intersectsSphere(Z){return this.clampPoint(Z.center,_vector$a),_vector$a.distanceToSquared(Z.center)<=Z.radius*Z.radius}intersectsPlane(Z){let G,W;return Z.normal.x>0?(G=Z.normal.x*this.min.x,W=Z.normal.x*this.max.x):(G=Z.normal.x*this.max.x,W=Z.normal.x*this.min.x),Z.normal.y>0?(G+=Z.normal.y*this.min.y,W+=Z.normal.y*this.max.y):(G+=Z.normal.y*this.max.y,W+=Z.normal.y*this.min.y),Z.normal.z>0?(G+=Z.normal.z*this.min.z,W+=Z.normal.z*this.max.z):(G+=Z.normal.z*this.max.z,W+=Z.normal.z*this.min.z),G<=-Z.constant&&W>=-Z.constant}intersectsTriangle(Z){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(Z.a,_center),_v1$7.subVectors(Z.b,_center),_v2$4.subVectors(Z.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let G=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(G,_v0$2,_v1$7,_v2$4,_extents)||(G=[1,0,0,0,1,0,0,0,1],!satForAxes(G,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),G=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(G,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(Z,G){return G.copy(Z).clamp(this.min,this.max)}distanceToPoint(Z){return this.clampPoint(Z,_vector$a).distanceTo(Z)}getBoundingSphere(Z){return this.isEmpty()?Z.makeEmpty():(this.getCenter(Z.center),Z.radius=this.getSize(_vector$a).length()*.5),Z}intersect(Z){return this.min.max(Z.min),this.max.min(Z.max),this.isEmpty()&&this.makeEmpty(),this}union(Z){return this.min.min(Z.min),this.max.max(Z.max),this}applyMatrix4(Z){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(Z),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(Z),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(Z),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(Z),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(Z),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(Z),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(Z),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(Z),this.setFromPoints(_points),this)}translate(Z){return this.min.add(Z),this.max.add(Z),this}equals(Z){return Z.min.equals(this.min)&&Z.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$a=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(X,Z,G,W,F){for(let U=0,J=X.length-3;U<=J;U+=3){_testAxis.fromArray(X,U);const Y=F.x*Math.abs(_testAxis.x)+F.y*Math.abs(_testAxis.y)+F.z*Math.abs(_testAxis.z),D=Z.dot(_testAxis),Q=G.dot(_testAxis),te=W.dot(_testAxis);if(Math.max(-Math.max(D,Q,te),Math.min(D,Q,te))>Y)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(Z=new Vector3,G=-1){this.center=Z,this.radius=G}set(Z,G){return this.center.copy(Z),this.radius=G,this}setFromPoints(Z,G){const W=this.center;G!==void 0?W.copy(G):_box$2.setFromPoints(Z).getCenter(W);let F=0;for(let U=0,J=Z.length;U<J;U++)F=Math.max(F,W.distanceToSquared(Z[U]));return this.radius=Math.sqrt(F),this}copy(Z){return this.center.copy(Z.center),this.radius=Z.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(Z){return Z.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(Z){return Z.distanceTo(this.center)-this.radius}intersectsSphere(Z){const G=this.radius+Z.radius;return Z.center.distanceToSquared(this.center)<=G*G}intersectsBox(Z){return Z.intersectsSphere(this)}intersectsPlane(Z){return Math.abs(Z.distanceToPoint(this.center))<=this.radius}clampPoint(Z,G){const W=this.center.distanceToSquared(Z);return G.copy(Z),W>this.radius*this.radius&&(G.sub(this.center).normalize(),G.multiplyScalar(this.radius).add(this.center)),G}getBoundingBox(Z){return this.isEmpty()?(Z.makeEmpty(),Z):(Z.set(this.center,this.center),Z.expandByScalar(this.radius),Z)}applyMatrix4(Z){return this.center.applyMatrix4(Z),this.radius=this.radius*Z.getMaxScaleOnAxis(),this}translate(Z){return this.center.add(Z),this}expandByPoint(Z){if(this.isEmpty())return this.center.copy(Z),this.radius=0,this;_v1$6.subVectors(Z,this.center);const G=_v1$6.lengthSq();if(G>this.radius*this.radius){const W=Math.sqrt(G),F=(W-this.radius)*.5;this.center.addScaledVector(_v1$6,F/W),this.radius+=F}return this}union(Z){return Z.isEmpty()?this:this.isEmpty()?(this.copy(Z),this):(this.center.equals(Z.center)===!0?this.radius=Math.max(this.radius,Z.radius):(_v2$3.subVectors(Z.center,this.center).setLength(Z.radius),this.expandByPoint(_v1$6.copy(Z.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(Z.center).sub(_v2$3))),this)}equals(Z){return Z.center.equals(this.center)&&Z.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$9=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(Z=new Vector3,G=new Vector3(0,0,-1)){this.origin=Z,this.direction=G}set(Z,G){return this.origin.copy(Z),this.direction.copy(G),this}copy(Z){return this.origin.copy(Z.origin),this.direction.copy(Z.direction),this}at(Z,G){return G.copy(this.origin).addScaledVector(this.direction,Z)}lookAt(Z){return this.direction.copy(Z).sub(this.origin).normalize(),this}recast(Z){return this.origin.copy(this.at(Z,_vector$9)),this}closestPointToPoint(Z,G){G.subVectors(Z,this.origin);const W=G.dot(this.direction);return W<0?G.copy(this.origin):G.copy(this.origin).addScaledVector(this.direction,W)}distanceToPoint(Z){return Math.sqrt(this.distanceSqToPoint(Z))}distanceSqToPoint(Z){const G=_vector$9.subVectors(Z,this.origin).dot(this.direction);return G<0?this.origin.distanceToSquared(Z):(_vector$9.copy(this.origin).addScaledVector(this.direction,G),_vector$9.distanceToSquared(Z))}distanceSqToSegment(Z,G,W,F){_segCenter.copy(Z).add(G).multiplyScalar(.5),_segDir.copy(G).sub(Z).normalize(),_diff.copy(this.origin).sub(_segCenter);const U=Z.distanceTo(G)*.5,J=-this.direction.dot(_segDir),Y=_diff.dot(this.direction),D=-_diff.dot(_segDir),Q=_diff.lengthSq(),te=Math.abs(1-J*J);let q,ee,ie,ne;if(te>0)if(q=J*D-Y,ee=J*Y-D,ne=U*te,q>=0)if(ee>=-ne)if(ee<=ne){const le=1/te;q*=le,ee*=le,ie=q*(q+J*ee+2*Y)+ee*(J*q+ee+2*D)+Q}else ee=U,q=Math.max(0,-(J*ee+Y)),ie=-q*q+ee*(ee+2*D)+Q;else ee=-U,q=Math.max(0,-(J*ee+Y)),ie=-q*q+ee*(ee+2*D)+Q;else ee<=-ne?(q=Math.max(0,-(-J*U+Y)),ee=q>0?-U:Math.min(Math.max(-U,-D),U),ie=-q*q+ee*(ee+2*D)+Q):ee<=ne?(q=0,ee=Math.min(Math.max(-U,-D),U),ie=ee*(ee+2*D)+Q):(q=Math.max(0,-(J*U+Y)),ee=q>0?U:Math.min(Math.max(-U,-D),U),ie=-q*q+ee*(ee+2*D)+Q);else ee=J>0?-U:U,q=Math.max(0,-(J*ee+Y)),ie=-q*q+ee*(ee+2*D)+Q;return W&&W.copy(this.origin).addScaledVector(this.direction,q),F&&F.copy(_segCenter).addScaledVector(_segDir,ee),ie}intersectSphere(Z,G){_vector$9.subVectors(Z.center,this.origin);const W=_vector$9.dot(this.direction),F=_vector$9.dot(_vector$9)-W*W,U=Z.radius*Z.radius;if(F>U)return null;const J=Math.sqrt(U-F),Y=W-J,D=W+J;return D<0?null:Y<0?this.at(D,G):this.at(Y,G)}intersectsSphere(Z){return this.distanceSqToPoint(Z.center)<=Z.radius*Z.radius}distanceToPlane(Z){const G=Z.normal.dot(this.direction);if(G===0)return Z.distanceToPoint(this.origin)===0?0:null;const W=-(this.origin.dot(Z.normal)+Z.constant)/G;return W>=0?W:null}intersectPlane(Z,G){const W=this.distanceToPlane(Z);return W===null?null:this.at(W,G)}intersectsPlane(Z){const G=Z.distanceToPoint(this.origin);return G===0||Z.normal.dot(this.direction)*G<0}intersectBox(Z,G){let W,F,U,J,Y,D;const Q=1/this.direction.x,te=1/this.direction.y,q=1/this.direction.z,ee=this.origin;return Q>=0?(W=(Z.min.x-ee.x)*Q,F=(Z.max.x-ee.x)*Q):(W=(Z.max.x-ee.x)*Q,F=(Z.min.x-ee.x)*Q),te>=0?(U=(Z.min.y-ee.y)*te,J=(Z.max.y-ee.y)*te):(U=(Z.max.y-ee.y)*te,J=(Z.min.y-ee.y)*te),W>J||U>F||((U>W||isNaN(W))&&(W=U),(J<F||isNaN(F))&&(F=J),q>=0?(Y=(Z.min.z-ee.z)*q,D=(Z.max.z-ee.z)*q):(Y=(Z.max.z-ee.z)*q,D=(Z.min.z-ee.z)*q),W>D||Y>F)||((Y>W||W!==W)&&(W=Y),(D<F||F!==F)&&(F=D),F<0)?null:this.at(W>=0?W:F,G)}intersectsBox(Z){return this.intersectBox(Z,_vector$9)!==null}intersectTriangle(Z,G,W,F,U){_edge1.subVectors(G,Z),_edge2.subVectors(W,Z),_normal$1.crossVectors(_edge1,_edge2);let J=this.direction.dot(_normal$1),Y;if(J>0){if(F)return null;Y=1}else if(J<0)Y=-1,J=-J;else return null;_diff.subVectors(this.origin,Z);const D=Y*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(D<0)return null;const Q=Y*this.direction.dot(_edge1.cross(_diff));if(Q<0||D+Q>J)return null;const te=-Y*_diff.dot(_normal$1);return te<0?null:this.at(te/J,U)}applyMatrix4(Z){return this.origin.applyMatrix4(Z),this.direction.transformDirection(Z),this}equals(Z){return Z.origin.equals(this.origin)&&Z.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(Z,G,W,F,U,J,Y,D,Q,te,q,ee,ie,ne,le,ae){const se=this.elements;return se[0]=Z,se[4]=G,se[8]=W,se[12]=F,se[1]=U,se[5]=J,se[9]=Y,se[13]=D,se[2]=Q,se[6]=te,se[10]=q,se[14]=ee,se[3]=ie,se[7]=ne,se[11]=le,se[15]=ae,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(Z){const G=this.elements,W=Z.elements;return G[0]=W[0],G[1]=W[1],G[2]=W[2],G[3]=W[3],G[4]=W[4],G[5]=W[5],G[6]=W[6],G[7]=W[7],G[8]=W[8],G[9]=W[9],G[10]=W[10],G[11]=W[11],G[12]=W[12],G[13]=W[13],G[14]=W[14],G[15]=W[15],this}copyPosition(Z){const G=this.elements,W=Z.elements;return G[12]=W[12],G[13]=W[13],G[14]=W[14],this}setFromMatrix3(Z){const G=Z.elements;return this.set(G[0],G[3],G[6],0,G[1],G[4],G[7],0,G[2],G[5],G[8],0,0,0,0,1),this}extractBasis(Z,G,W){return Z.setFromMatrixColumn(this,0),G.setFromMatrixColumn(this,1),W.setFromMatrixColumn(this,2),this}makeBasis(Z,G,W){return this.set(Z.x,G.x,W.x,0,Z.y,G.y,W.y,0,Z.z,G.z,W.z,0,0,0,0,1),this}extractRotation(Z){const G=this.elements,W=Z.elements,F=1/_v1$5.setFromMatrixColumn(Z,0).length(),U=1/_v1$5.setFromMatrixColumn(Z,1).length(),J=1/_v1$5.setFromMatrixColumn(Z,2).length();return G[0]=W[0]*F,G[1]=W[1]*F,G[2]=W[2]*F,G[3]=0,G[4]=W[4]*U,G[5]=W[5]*U,G[6]=W[6]*U,G[7]=0,G[8]=W[8]*J,G[9]=W[9]*J,G[10]=W[10]*J,G[11]=0,G[12]=0,G[13]=0,G[14]=0,G[15]=1,this}makeRotationFromEuler(Z){const G=this.elements,W=Z.x,F=Z.y,U=Z.z,J=Math.cos(W),Y=Math.sin(W),D=Math.cos(F),Q=Math.sin(F),te=Math.cos(U),q=Math.sin(U);if(Z.order==="XYZ"){const ee=J*te,ie=J*q,ne=Y*te,le=Y*q;G[0]=D*te,G[4]=-D*q,G[8]=Q,G[1]=ie+ne*Q,G[5]=ee-le*Q,G[9]=-Y*D,G[2]=le-ee*Q,G[6]=ne+ie*Q,G[10]=J*D}else if(Z.order==="YXZ"){const ee=D*te,ie=D*q,ne=Q*te,le=Q*q;G[0]=ee+le*Y,G[4]=ne*Y-ie,G[8]=J*Q,G[1]=J*q,G[5]=J*te,G[9]=-Y,G[2]=ie*Y-ne,G[6]=le+ee*Y,G[10]=J*D}else if(Z.order==="ZXY"){const ee=D*te,ie=D*q,ne=Q*te,le=Q*q;G[0]=ee-le*Y,G[4]=-J*q,G[8]=ne+ie*Y,G[1]=ie+ne*Y,G[5]=J*te,G[9]=le-ee*Y,G[2]=-J*Q,G[6]=Y,G[10]=J*D}else if(Z.order==="ZYX"){const ee=J*te,ie=J*q,ne=Y*te,le=Y*q;G[0]=D*te,G[4]=ne*Q-ie,G[8]=ee*Q+le,G[1]=D*q,G[5]=le*Q+ee,G[9]=ie*Q-ne,G[2]=-Q,G[6]=Y*D,G[10]=J*D}else if(Z.order==="YZX"){const ee=J*D,ie=J*Q,ne=Y*D,le=Y*Q;G[0]=D*te,G[4]=le-ee*q,G[8]=ne*q+ie,G[1]=q,G[5]=J*te,G[9]=-Y*te,G[2]=-Q*te,G[6]=ie*q+ne,G[10]=ee-le*q}else if(Z.order==="XZY"){const ee=J*D,ie=J*Q,ne=Y*D,le=Y*Q;G[0]=D*te,G[4]=-q,G[8]=Q*te,G[1]=ee*q+le,G[5]=J*te,G[9]=ie*q-ne,G[2]=ne*q-ie,G[6]=Y*te,G[10]=le*q+ee}return G[3]=0,G[7]=0,G[11]=0,G[12]=0,G[13]=0,G[14]=0,G[15]=1,this}makeRotationFromQuaternion(Z){return this.compose(_zero,Z,_one)}lookAt(Z,G,W){const F=this.elements;return _z.subVectors(Z,G),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(W,_z),_x.lengthSq()===0&&(Math.abs(W.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(W,_z)),_x.normalize(),_y.crossVectors(_z,_x),F[0]=_x.x,F[4]=_y.x,F[8]=_z.x,F[1]=_x.y,F[5]=_y.y,F[9]=_z.y,F[2]=_x.z,F[6]=_y.z,F[10]=_z.z,this}multiply(Z){return this.multiplyMatrices(this,Z)}premultiply(Z){return this.multiplyMatrices(Z,this)}multiplyMatrices(Z,G){const W=Z.elements,F=G.elements,U=this.elements,J=W[0],Y=W[4],D=W[8],Q=W[12],te=W[1],q=W[5],ee=W[9],ie=W[13],ne=W[2],le=W[6],ae=W[10],se=W[14],he=W[3],pe=W[7],oe=W[11],de=W[15],ue=F[0],ge=F[4],ve=F[8],fe=F[12],Xe=F[1],Ze=F[5],Ve=F[9],be=F[13],re=F[2],ye=F[6],we=F[10],We=F[14],Se=F[3],Le=F[7],Ne=F[11],xe=F[15];return U[0]=J*ue+Y*Xe+D*re+Q*Se,U[4]=J*ge+Y*Ze+D*ye+Q*Le,U[8]=J*ve+Y*Ve+D*we+Q*Ne,U[12]=J*fe+Y*be+D*We+Q*xe,U[1]=te*ue+q*Xe+ee*re+ie*Se,U[5]=te*ge+q*Ze+ee*ye+ie*Le,U[9]=te*ve+q*Ve+ee*we+ie*Ne,U[13]=te*fe+q*be+ee*We+ie*xe,U[2]=ne*ue+le*Xe+ae*re+se*Se,U[6]=ne*ge+le*Ze+ae*ye+se*Le,U[10]=ne*ve+le*Ve+ae*we+se*Ne,U[14]=ne*fe+le*be+ae*We+se*xe,U[3]=he*ue+pe*Xe+oe*re+de*Se,U[7]=he*ge+pe*Ze+oe*ye+de*Le,U[11]=he*ve+pe*Ve+oe*we+de*Ne,U[15]=he*fe+pe*be+oe*We+de*xe,this}multiplyScalar(Z){const G=this.elements;return G[0]*=Z,G[4]*=Z,G[8]*=Z,G[12]*=Z,G[1]*=Z,G[5]*=Z,G[9]*=Z,G[13]*=Z,G[2]*=Z,G[6]*=Z,G[10]*=Z,G[14]*=Z,G[3]*=Z,G[7]*=Z,G[11]*=Z,G[15]*=Z,this}determinant(){const Z=this.elements,G=Z[0],W=Z[4],F=Z[8],U=Z[12],J=Z[1],Y=Z[5],D=Z[9],Q=Z[13],te=Z[2],q=Z[6],ee=Z[10],ie=Z[14],ne=Z[3],le=Z[7],ae=Z[11],se=Z[15];return ne*(+U*D*q-F*Q*q-U*Y*ee+W*Q*ee+F*Y*ie-W*D*ie)+le*(+G*D*ie-G*Q*ee+U*J*ee-F*J*ie+F*Q*te-U*D*te)+ae*(+G*Q*q-G*Y*ie-U*J*q+W*J*ie+U*Y*te-W*Q*te)+se*(-F*Y*te-G*D*q+G*Y*ee+F*J*q-W*J*ee+W*D*te)}transpose(){const Z=this.elements;let G;return G=Z[1],Z[1]=Z[4],Z[4]=G,G=Z[2],Z[2]=Z[8],Z[8]=G,G=Z[6],Z[6]=Z[9],Z[9]=G,G=Z[3],Z[3]=Z[12],Z[12]=G,G=Z[7],Z[7]=Z[13],Z[13]=G,G=Z[11],Z[11]=Z[14],Z[14]=G,this}setPosition(Z,G,W){const F=this.elements;return Z.isVector3?(F[12]=Z.x,F[13]=Z.y,F[14]=Z.z):(F[12]=Z,F[13]=G,F[14]=W),this}invert(){const Z=this.elements,G=Z[0],W=Z[1],F=Z[2],U=Z[3],J=Z[4],Y=Z[5],D=Z[6],Q=Z[7],te=Z[8],q=Z[9],ee=Z[10],ie=Z[11],ne=Z[12],le=Z[13],ae=Z[14],se=Z[15],he=q*ae*Q-le*ee*Q+le*D*ie-Y*ae*ie-q*D*se+Y*ee*se,pe=ne*ee*Q-te*ae*Q-ne*D*ie+J*ae*ie+te*D*se-J*ee*se,oe=te*le*Q-ne*q*Q+ne*Y*ie-J*le*ie-te*Y*se+J*q*se,de=ne*q*D-te*le*D-ne*Y*ee+J*le*ee+te*Y*ae-J*q*ae,ue=G*he+W*pe+F*oe+U*de;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ge=1/ue;return Z[0]=he*ge,Z[1]=(le*ee*U-q*ae*U-le*F*ie+W*ae*ie+q*F*se-W*ee*se)*ge,Z[2]=(Y*ae*U-le*D*U+le*F*Q-W*ae*Q-Y*F*se+W*D*se)*ge,Z[3]=(q*D*U-Y*ee*U-q*F*Q+W*ee*Q+Y*F*ie-W*D*ie)*ge,Z[4]=pe*ge,Z[5]=(te*ae*U-ne*ee*U+ne*F*ie-G*ae*ie-te*F*se+G*ee*se)*ge,Z[6]=(ne*D*U-J*ae*U-ne*F*Q+G*ae*Q+J*F*se-G*D*se)*ge,Z[7]=(J*ee*U-te*D*U+te*F*Q-G*ee*Q-J*F*ie+G*D*ie)*ge,Z[8]=oe*ge,Z[9]=(ne*q*U-te*le*U-ne*W*ie+G*le*ie+te*W*se-G*q*se)*ge,Z[10]=(J*le*U-ne*Y*U+ne*W*Q-G*le*Q-J*W*se+G*Y*se)*ge,Z[11]=(te*Y*U-J*q*U-te*W*Q+G*q*Q+J*W*ie-G*Y*ie)*ge,Z[12]=de*ge,Z[13]=(te*le*F-ne*q*F+ne*W*ee-G*le*ee-te*W*ae+G*q*ae)*ge,Z[14]=(ne*Y*F-J*le*F-ne*W*D+G*le*D+J*W*ae-G*Y*ae)*ge,Z[15]=(J*q*F-te*Y*F+te*W*D-G*q*D-J*W*ee+G*Y*ee)*ge,this}scale(Z){const G=this.elements,W=Z.x,F=Z.y,U=Z.z;return G[0]*=W,G[4]*=F,G[8]*=U,G[1]*=W,G[5]*=F,G[9]*=U,G[2]*=W,G[6]*=F,G[10]*=U,G[3]*=W,G[7]*=F,G[11]*=U,this}getMaxScaleOnAxis(){const Z=this.elements,G=Z[0]*Z[0]+Z[1]*Z[1]+Z[2]*Z[2],W=Z[4]*Z[4]+Z[5]*Z[5]+Z[6]*Z[6],F=Z[8]*Z[8]+Z[9]*Z[9]+Z[10]*Z[10];return Math.sqrt(Math.max(G,W,F))}makeTranslation(Z,G,W){return this.set(1,0,0,Z,0,1,0,G,0,0,1,W,0,0,0,1),this}makeRotationX(Z){const G=Math.cos(Z),W=Math.sin(Z);return this.set(1,0,0,0,0,G,-W,0,0,W,G,0,0,0,0,1),this}makeRotationY(Z){const G=Math.cos(Z),W=Math.sin(Z);return this.set(G,0,W,0,0,1,0,0,-W,0,G,0,0,0,0,1),this}makeRotationZ(Z){const G=Math.cos(Z),W=Math.sin(Z);return this.set(G,-W,0,0,W,G,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(Z,G){const W=Math.cos(G),F=Math.sin(G),U=1-W,J=Z.x,Y=Z.y,D=Z.z,Q=U*J,te=U*Y;return this.set(Q*J+W,Q*Y-F*D,Q*D+F*Y,0,Q*Y+F*D,te*Y+W,te*D-F*J,0,Q*D-F*Y,te*D+F*J,U*D*D+W,0,0,0,0,1),this}makeScale(Z,G,W){return this.set(Z,0,0,0,0,G,0,0,0,0,W,0,0,0,0,1),this}makeShear(Z,G,W,F,U,J){return this.set(1,W,U,0,Z,1,J,0,G,F,1,0,0,0,0,1),this}compose(Z,G,W){const F=this.elements,U=G._x,J=G._y,Y=G._z,D=G._w,Q=U+U,te=J+J,q=Y+Y,ee=U*Q,ie=U*te,ne=U*q,le=J*te,ae=J*q,se=Y*q,he=D*Q,pe=D*te,oe=D*q,de=W.x,ue=W.y,ge=W.z;return F[0]=(1-(le+se))*de,F[1]=(ie+oe)*de,F[2]=(ne-pe)*de,F[3]=0,F[4]=(ie-oe)*ue,F[5]=(1-(ee+se))*ue,F[6]=(ae+he)*ue,F[7]=0,F[8]=(ne+pe)*ge,F[9]=(ae-he)*ge,F[10]=(1-(ee+le))*ge,F[11]=0,F[12]=Z.x,F[13]=Z.y,F[14]=Z.z,F[15]=1,this}decompose(Z,G,W){const F=this.elements;let U=_v1$5.set(F[0],F[1],F[2]).length();const J=_v1$5.set(F[4],F[5],F[6]).length(),Y=_v1$5.set(F[8],F[9],F[10]).length();this.determinant()<0&&(U=-U),Z.x=F[12],Z.y=F[13],Z.z=F[14],_m1$2.copy(this);const Q=1/U,te=1/J,q=1/Y;return _m1$2.elements[0]*=Q,_m1$2.elements[1]*=Q,_m1$2.elements[2]*=Q,_m1$2.elements[4]*=te,_m1$2.elements[5]*=te,_m1$2.elements[6]*=te,_m1$2.elements[8]*=q,_m1$2.elements[9]*=q,_m1$2.elements[10]*=q,G.setFromRotationMatrix(_m1$2),W.x=U,W.y=J,W.z=Y,this}makePerspective(Z,G,W,F,U,J){const Y=this.elements,D=2*U/(G-Z),Q=2*U/(W-F),te=(G+Z)/(G-Z),q=(W+F)/(W-F),ee=-(J+U)/(J-U),ie=-2*J*U/(J-U);return Y[0]=D,Y[4]=0,Y[8]=te,Y[12]=0,Y[1]=0,Y[5]=Q,Y[9]=q,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=ee,Y[14]=ie,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic(Z,G,W,F,U,J){const Y=this.elements,D=1/(G-Z),Q=1/(W-F),te=1/(J-U),q=(G+Z)*D,ee=(W+F)*Q,ie=(J+U)*te;return Y[0]=2*D,Y[4]=0,Y[8]=0,Y[12]=-q,Y[1]=0,Y[5]=2*Q,Y[9]=0,Y[13]=-ee,Y[2]=0,Y[6]=0,Y[10]=-2*te,Y[14]=-ie,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals(Z){const G=this.elements,W=Z.elements;for(let F=0;F<16;F++)if(G[F]!==W[F])return!1;return!0}fromArray(Z,G=0){for(let W=0;W<16;W++)this.elements[W]=Z[W+G];return this}toArray(Z=[],G=0){const W=this.elements;return Z[G]=W[0],Z[G+1]=W[1],Z[G+2]=W[2],Z[G+3]=W[3],Z[G+4]=W[4],Z[G+5]=W[5],Z[G+6]=W[6],Z[G+7]=W[7],Z[G+8]=W[8],Z[G+9]=W[9],Z[G+10]=W[10],Z[G+11]=W[11],Z[G+12]=W[12],Z[G+13]=W[13],Z[G+14]=W[14],Z[G+15]=W[15],Z}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(Z=0,G=0,W=0,F=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=Z,this._y=G,this._z=W,this._order=F}get x(){return this._x}set x(Z){this._x=Z,this._onChangeCallback()}get y(){return this._y}set y(Z){this._y=Z,this._onChangeCallback()}get z(){return this._z}set z(Z){this._z=Z,this._onChangeCallback()}get order(){return this._order}set order(Z){this._order=Z,this._onChangeCallback()}set(Z,G,W,F=this._order){return this._x=Z,this._y=G,this._z=W,this._order=F,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(Z){return this._x=Z._x,this._y=Z._y,this._z=Z._z,this._order=Z._order,this._onChangeCallback(),this}setFromRotationMatrix(Z,G=this._order,W=!0){const F=Z.elements,U=F[0],J=F[4],Y=F[8],D=F[1],Q=F[5],te=F[9],q=F[2],ee=F[6],ie=F[10];switch(G){case"XYZ":this._y=Math.asin(clamp(Y,-1,1)),Math.abs(Y)<.9999999?(this._x=Math.atan2(-te,ie),this._z=Math.atan2(-J,U)):(this._x=Math.atan2(ee,Q),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(te,-1,1)),Math.abs(te)<.9999999?(this._y=Math.atan2(Y,ie),this._z=Math.atan2(D,Q)):(this._y=Math.atan2(-q,U),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(ee,-1,1)),Math.abs(ee)<.9999999?(this._y=Math.atan2(-q,ie),this._z=Math.atan2(-J,Q)):(this._y=0,this._z=Math.atan2(D,U));break;case"ZYX":this._y=Math.asin(-clamp(q,-1,1)),Math.abs(q)<.9999999?(this._x=Math.atan2(ee,ie),this._z=Math.atan2(D,U)):(this._x=0,this._z=Math.atan2(-J,Q));break;case"YZX":this._z=Math.asin(clamp(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(-te,Q),this._y=Math.atan2(-q,U)):(this._x=0,this._y=Math.atan2(Y,ie));break;case"XZY":this._z=Math.asin(-clamp(J,-1,1)),Math.abs(J)<.9999999?(this._x=Math.atan2(ee,Q),this._y=Math.atan2(Y,U)):(this._x=Math.atan2(-te,ie),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+G)}return this._order=G,W===!0&&this._onChangeCallback(),this}setFromQuaternion(Z,G,W){return _matrix.makeRotationFromQuaternion(Z),this.setFromRotationMatrix(_matrix,G,W)}setFromVector3(Z,G=this._order){return this.set(Z.x,Z.y,Z.z,G)}reorder(Z){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,Z)}equals(Z){return Z._x===this._x&&Z._y===this._y&&Z._z===this._z&&Z._order===this._order}fromArray(Z){return this._x=Z[0],this._y=Z[1],this._z=Z[2],Z[3]!==void 0&&(this._order=Z[3]),this._onChangeCallback(),this}toArray(Z=[],G=0){return Z[G]=this._x,Z[G+1]=this._y,Z[G+2]=this._z,Z[G+3]=this._order,Z}_onChange(Z){return this._onChangeCallback=Z,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(Z){this.mask=(1<<Z|0)>>>0}enable(Z){this.mask|=1<<Z|0}enableAll(){this.mask=-1}toggle(Z){this.mask^=1<<Z|0}disable(Z){this.mask&=~(1<<Z|0)}disableAll(){this.mask=0}test(Z){return(this.mask&Z.mask)!==0}isEnabled(Z){return(this.mask&(1<<Z|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const Z=new Vector3,G=new Euler,W=new Quaternion,F=new Vector3(1,1,1);function U(){W.setFromEuler(G,!1)}function J(){G.setFromQuaternion(W,void 0,!1)}G._onChange(U),W._onChange(J),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:Z},rotation:{configurable:!0,enumerable:!0,value:G},quaternion:{configurable:!0,enumerable:!0,value:W},scale:{configurable:!0,enumerable:!0,value:F},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(Z){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(Z),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(Z){return this.quaternion.premultiply(Z),this}setRotationFromAxisAngle(Z,G){this.quaternion.setFromAxisAngle(Z,G)}setRotationFromEuler(Z){this.quaternion.setFromEuler(Z,!0)}setRotationFromMatrix(Z){this.quaternion.setFromRotationMatrix(Z)}setRotationFromQuaternion(Z){this.quaternion.copy(Z)}rotateOnAxis(Z,G){return _q1.setFromAxisAngle(Z,G),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(Z,G){return _q1.setFromAxisAngle(Z,G),this.quaternion.premultiply(_q1),this}rotateX(Z){return this.rotateOnAxis(_xAxis,Z)}rotateY(Z){return this.rotateOnAxis(_yAxis,Z)}rotateZ(Z){return this.rotateOnAxis(_zAxis,Z)}translateOnAxis(Z,G){return _v1$4.copy(Z).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(G)),this}translateX(Z){return this.translateOnAxis(_xAxis,Z)}translateY(Z){return this.translateOnAxis(_yAxis,Z)}translateZ(Z){return this.translateOnAxis(_zAxis,Z)}localToWorld(Z){return this.updateWorldMatrix(!0,!1),Z.applyMatrix4(this.matrixWorld)}worldToLocal(Z){return this.updateWorldMatrix(!0,!1),Z.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(Z,G,W){Z.isVector3?_target.copy(Z):_target.set(Z,G,W);const F=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),F&&(_m1$1.extractRotation(F.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(Z){if(arguments.length>1){for(let G=0;G<arguments.length;G++)this.add(arguments[G]);return this}return Z===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",Z),this):(Z&&Z.isObject3D?(Z.parent!==null&&Z.parent.remove(Z),Z.parent=this,this.children.push(Z),Z.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",Z),this)}remove(Z){if(arguments.length>1){for(let W=0;W<arguments.length;W++)this.remove(arguments[W]);return this}const G=this.children.indexOf(Z);return G!==-1&&(Z.parent=null,this.children.splice(G,1),Z.dispatchEvent(_removedEvent)),this}removeFromParent(){const Z=this.parent;return Z!==null&&Z.remove(this),this}clear(){for(let Z=0;Z<this.children.length;Z++){const G=this.children[Z];G.parent=null,G.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(Z){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),Z.parent!==null&&(Z.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(Z.parent.matrixWorld)),Z.applyMatrix4(_m1$1),this.add(Z),Z.updateWorldMatrix(!1,!0),this}getObjectById(Z){return this.getObjectByProperty("id",Z)}getObjectByName(Z){return this.getObjectByProperty("name",Z)}getObjectByProperty(Z,G){if(this[Z]===G)return this;for(let W=0,F=this.children.length;W<F;W++){const J=this.children[W].getObjectByProperty(Z,G);if(J!==void 0)return J}}getObjectsByProperty(Z,G){let W=[];this[Z]===G&&W.push(this);for(let F=0,U=this.children.length;F<U;F++){const J=this.children[F].getObjectsByProperty(Z,G);J.length>0&&(W=W.concat(J))}return W}getWorldPosition(Z){return this.updateWorldMatrix(!0,!1),Z.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(Z){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,Z,_scale$2),Z}getWorldScale(Z){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,Z),Z}getWorldDirection(Z){this.updateWorldMatrix(!0,!1);const G=this.matrixWorld.elements;return Z.set(G[8],G[9],G[10]).normalize()}raycast(){}traverse(Z){Z(this);const G=this.children;for(let W=0,F=G.length;W<F;W++)G[W].traverse(Z)}traverseVisible(Z){if(this.visible===!1)return;Z(this);const G=this.children;for(let W=0,F=G.length;W<F;W++)G[W].traverseVisible(Z)}traverseAncestors(Z){const G=this.parent;G!==null&&(Z(G),G.traverseAncestors(Z))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(Z){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||Z)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,Z=!0);const G=this.children;for(let W=0,F=G.length;W<F;W++){const U=G[W];(U.matrixWorldAutoUpdate===!0||Z===!0)&&U.updateMatrixWorld(Z)}}updateWorldMatrix(Z,G){const W=this.parent;if(Z===!0&&W!==null&&W.matrixWorldAutoUpdate===!0&&W.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),G===!0){const F=this.children;for(let U=0,J=F.length;U<J;U++){const Y=F[U];Y.matrixWorldAutoUpdate===!0&&Y.updateWorldMatrix(!1,!0)}}}toJSON(Z){const G=Z===void 0||typeof Z=="string",W={};G&&(Z={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},W.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const F={};F.uuid=this.uuid,F.type=this.type,this.name!==""&&(F.name=this.name),this.castShadow===!0&&(F.castShadow=!0),this.receiveShadow===!0&&(F.receiveShadow=!0),this.visible===!1&&(F.visible=!1),this.frustumCulled===!1&&(F.frustumCulled=!1),this.renderOrder!==0&&(F.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(F.userData=this.userData),F.layers=this.layers.mask,F.matrix=this.matrix.toArray(),F.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(F.matrixAutoUpdate=!1),this.isInstancedMesh&&(F.type="InstancedMesh",F.count=this.count,F.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(F.instanceColor=this.instanceColor.toJSON()));function U(Y,D){return Y[D.uuid]===void 0&&(Y[D.uuid]=D.toJSON(Z)),D.uuid}if(this.isScene)this.background&&(this.background.isColor?F.background=this.background.toJSON():this.background.isTexture&&(F.background=this.background.toJSON(Z).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(F.environment=this.environment.toJSON(Z).uuid);else if(this.isMesh||this.isLine||this.isPoints){F.geometry=U(Z.geometries,this.geometry);const Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){const D=Y.shapes;if(Array.isArray(D))for(let Q=0,te=D.length;Q<te;Q++){const q=D[Q];U(Z.shapes,q)}else U(Z.shapes,D)}}if(this.isSkinnedMesh&&(F.bindMode=this.bindMode,F.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(U(Z.skeletons,this.skeleton),F.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const Y=[];for(let D=0,Q=this.material.length;D<Q;D++)Y.push(U(Z.materials,this.material[D]));F.material=Y}else F.material=U(Z.materials,this.material);if(this.children.length>0){F.children=[];for(let Y=0;Y<this.children.length;Y++)F.children.push(this.children[Y].toJSON(Z).object)}if(this.animations.length>0){F.animations=[];for(let Y=0;Y<this.animations.length;Y++){const D=this.animations[Y];F.animations.push(U(Z.animations,D))}}if(G){const Y=J(Z.geometries),D=J(Z.materials),Q=J(Z.textures),te=J(Z.images),q=J(Z.shapes),ee=J(Z.skeletons),ie=J(Z.animations),ne=J(Z.nodes);Y.length>0&&(W.geometries=Y),D.length>0&&(W.materials=D),Q.length>0&&(W.textures=Q),te.length>0&&(W.images=te),q.length>0&&(W.shapes=q),ee.length>0&&(W.skeletons=ee),ie.length>0&&(W.animations=ie),ne.length>0&&(W.nodes=ne)}return W.object=F,W;function J(Y){const D=[];for(const Q in Y){const te=Y[Q];delete te.metadata,D.push(te)}return D}}clone(Z){return new this.constructor().copy(this,Z)}copy(Z,G=!0){if(this.name=Z.name,this.up.copy(Z.up),this.position.copy(Z.position),this.rotation.order=Z.rotation.order,this.quaternion.copy(Z.quaternion),this.scale.copy(Z.scale),this.matrix.copy(Z.matrix),this.matrixWorld.copy(Z.matrixWorld),this.matrixAutoUpdate=Z.matrixAutoUpdate,this.matrixWorldNeedsUpdate=Z.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=Z.matrixWorldAutoUpdate,this.layers.mask=Z.layers.mask,this.visible=Z.visible,this.castShadow=Z.castShadow,this.receiveShadow=Z.receiveShadow,this.frustumCulled=Z.frustumCulled,this.renderOrder=Z.renderOrder,this.userData=JSON.parse(JSON.stringify(Z.userData)),G===!0)for(let W=0;W<Z.children.length;W++){const F=Z.children[W];this.add(F.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;let warnedGetUV=!1;class Triangle{constructor(Z=new Vector3,G=new Vector3,W=new Vector3){this.a=Z,this.b=G,this.c=W}static getNormal(Z,G,W,F){F.subVectors(W,G),_v0$1.subVectors(Z,G),F.cross(_v0$1);const U=F.lengthSq();return U>0?F.multiplyScalar(1/Math.sqrt(U)):F.set(0,0,0)}static getBarycoord(Z,G,W,F,U){_v0$1.subVectors(F,G),_v1$3.subVectors(W,G),_v2$2.subVectors(Z,G);const J=_v0$1.dot(_v0$1),Y=_v0$1.dot(_v1$3),D=_v0$1.dot(_v2$2),Q=_v1$3.dot(_v1$3),te=_v1$3.dot(_v2$2),q=J*Q-Y*Y;if(q===0)return U.set(-2,-1,-1);const ee=1/q,ie=(Q*D-Y*te)*ee,ne=(J*te-Y*D)*ee;return U.set(1-ie-ne,ne,ie)}static containsPoint(Z,G,W,F){return this.getBarycoord(Z,G,W,F,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(Z,G,W,F,U,J,Y,D){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),this.getInterpolation(Z,G,W,F,U,J,Y,D)}static getInterpolation(Z,G,W,F,U,J,Y,D){return this.getBarycoord(Z,G,W,F,_v3$1),D.setScalar(0),D.addScaledVector(U,_v3$1.x),D.addScaledVector(J,_v3$1.y),D.addScaledVector(Y,_v3$1.z),D}static isFrontFacing(Z,G,W,F){return _v0$1.subVectors(W,G),_v1$3.subVectors(Z,G),_v0$1.cross(_v1$3).dot(F)<0}set(Z,G,W){return this.a.copy(Z),this.b.copy(G),this.c.copy(W),this}setFromPointsAndIndices(Z,G,W,F){return this.a.copy(Z[G]),this.b.copy(Z[W]),this.c.copy(Z[F]),this}setFromAttributeAndIndices(Z,G,W,F){return this.a.fromBufferAttribute(Z,G),this.b.fromBufferAttribute(Z,W),this.c.fromBufferAttribute(Z,F),this}clone(){return new this.constructor().copy(this)}copy(Z){return this.a.copy(Z.a),this.b.copy(Z.b),this.c.copy(Z.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(Z){return Z.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(Z){return Triangle.getNormal(this.a,this.b,this.c,Z)}getPlane(Z){return Z.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(Z,G){return Triangle.getBarycoord(Z,this.a,this.b,this.c,G)}getUV(Z,G,W,F,U){return warnedGetUV===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),warnedGetUV=!0),Triangle.getInterpolation(Z,this.a,this.b,this.c,G,W,F,U)}getInterpolation(Z,G,W,F,U){return Triangle.getInterpolation(Z,this.a,this.b,this.c,G,W,F,U)}containsPoint(Z){return Triangle.containsPoint(Z,this.a,this.b,this.c)}isFrontFacing(Z){return Triangle.isFrontFacing(this.a,this.b,this.c,Z)}intersectsBox(Z){return Z.intersectsTriangle(this)}closestPointToPoint(Z,G){const W=this.a,F=this.b,U=this.c;let J,Y;_vab.subVectors(F,W),_vac.subVectors(U,W),_vap.subVectors(Z,W);const D=_vab.dot(_vap),Q=_vac.dot(_vap);if(D<=0&&Q<=0)return G.copy(W);_vbp.subVectors(Z,F);const te=_vab.dot(_vbp),q=_vac.dot(_vbp);if(te>=0&&q<=te)return G.copy(F);const ee=D*q-te*Q;if(ee<=0&&D>=0&&te<=0)return J=D/(D-te),G.copy(W).addScaledVector(_vab,J);_vcp.subVectors(Z,U);const ie=_vab.dot(_vcp),ne=_vac.dot(_vcp);if(ne>=0&&ie<=ne)return G.copy(U);const le=ie*Q-D*ne;if(le<=0&&Q>=0&&ne<=0)return Y=Q/(Q-ne),G.copy(W).addScaledVector(_vac,Y);const ae=te*ne-ie*q;if(ae<=0&&q-te>=0&&ie-ne>=0)return _vbc.subVectors(U,F),Y=(q-te)/(q-te+(ie-ne)),G.copy(F).addScaledVector(_vbc,Y);const se=1/(ae+le+ee);return J=le*se,Y=ee*se,G.copy(W).addScaledVector(_vab,J).addScaledVector(_vac,Y)}equals(Z){return Z.a.equals(this.a)&&Z.b.equals(this.b)&&Z.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(Z){this._alphaTest>0!=Z>0&&this.version++,this._alphaTest=Z}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(Z){if(Z!==void 0)for(const G in Z){const W=Z[G];if(W===void 0){console.warn(`THREE.Material: parameter '${G}' has value of undefined.`);continue}const F=this[G];if(F===void 0){console.warn(`THREE.Material: '${G}' is not a property of THREE.${this.type}.`);continue}F&&F.isColor?F.set(W):F&&F.isVector3&&W&&W.isVector3?F.copy(W):this[G]=W}}toJSON(Z){const G=Z===void 0||typeof Z=="string";G&&(Z={textures:{},images:{}});const W={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};W.uuid=this.uuid,W.type=this.type,this.name!==""&&(W.name=this.name),this.color&&this.color.isColor&&(W.color=this.color.getHex()),this.roughness!==void 0&&(W.roughness=this.roughness),this.metalness!==void 0&&(W.metalness=this.metalness),this.sheen!==void 0&&(W.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(W.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(W.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(W.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(W.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(W.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(W.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(W.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(W.shininess=this.shininess),this.clearcoat!==void 0&&(W.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(W.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(W.clearcoatMap=this.clearcoatMap.toJSON(Z).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(W.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(Z).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(W.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(Z).uuid,W.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(W.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(W.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(W.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(W.iridescenceMap=this.iridescenceMap.toJSON(Z).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(W.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(Z).uuid),this.map&&this.map.isTexture&&(W.map=this.map.toJSON(Z).uuid),this.matcap&&this.matcap.isTexture&&(W.matcap=this.matcap.toJSON(Z).uuid),this.alphaMap&&this.alphaMap.isTexture&&(W.alphaMap=this.alphaMap.toJSON(Z).uuid),this.lightMap&&this.lightMap.isTexture&&(W.lightMap=this.lightMap.toJSON(Z).uuid,W.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(W.aoMap=this.aoMap.toJSON(Z).uuid,W.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(W.bumpMap=this.bumpMap.toJSON(Z).uuid,W.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(W.normalMap=this.normalMap.toJSON(Z).uuid,W.normalMapType=this.normalMapType,W.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(W.displacementMap=this.displacementMap.toJSON(Z).uuid,W.displacementScale=this.displacementScale,W.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(W.roughnessMap=this.roughnessMap.toJSON(Z).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(W.metalnessMap=this.metalnessMap.toJSON(Z).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(W.emissiveMap=this.emissiveMap.toJSON(Z).uuid),this.specularMap&&this.specularMap.isTexture&&(W.specularMap=this.specularMap.toJSON(Z).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(W.specularIntensityMap=this.specularIntensityMap.toJSON(Z).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(W.specularColorMap=this.specularColorMap.toJSON(Z).uuid),this.envMap&&this.envMap.isTexture&&(W.envMap=this.envMap.toJSON(Z).uuid,this.combine!==void 0&&(W.combine=this.combine)),this.envMapIntensity!==void 0&&(W.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(W.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(W.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(W.gradientMap=this.gradientMap.toJSON(Z).uuid),this.transmission!==void 0&&(W.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(W.transmissionMap=this.transmissionMap.toJSON(Z).uuid),this.thickness!==void 0&&(W.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(W.thicknessMap=this.thicknessMap.toJSON(Z).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(W.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(W.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(W.size=this.size),this.shadowSide!==null&&(W.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(W.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(W.blending=this.blending),this.side!==FrontSide&&(W.side=this.side),this.vertexColors&&(W.vertexColors=!0),this.opacity<1&&(W.opacity=this.opacity),this.transparent===!0&&(W.transparent=this.transparent),W.depthFunc=this.depthFunc,W.depthTest=this.depthTest,W.depthWrite=this.depthWrite,W.colorWrite=this.colorWrite,W.stencilWrite=this.stencilWrite,W.stencilWriteMask=this.stencilWriteMask,W.stencilFunc=this.stencilFunc,W.stencilRef=this.stencilRef,W.stencilFuncMask=this.stencilFuncMask,W.stencilFail=this.stencilFail,W.stencilZFail=this.stencilZFail,W.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(W.rotation=this.rotation),this.polygonOffset===!0&&(W.polygonOffset=!0),this.polygonOffsetFactor!==0&&(W.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(W.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(W.linewidth=this.linewidth),this.dashSize!==void 0&&(W.dashSize=this.dashSize),this.gapSize!==void 0&&(W.gapSize=this.gapSize),this.scale!==void 0&&(W.scale=this.scale),this.dithering===!0&&(W.dithering=!0),this.alphaTest>0&&(W.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(W.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(W.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(W.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(W.wireframe=this.wireframe),this.wireframeLinewidth>1&&(W.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(W.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(W.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(W.flatShading=this.flatShading),this.visible===!1&&(W.visible=!1),this.toneMapped===!1&&(W.toneMapped=!1),this.fog===!1&&(W.fog=!1),Object.keys(this.userData).length>0&&(W.userData=this.userData);function F(U){const J=[];for(const Y in U){const D=U[Y];delete D.metadata,J.push(D)}return J}if(G){const U=F(Z.textures),J=F(Z.images);U.length>0&&(W.textures=U),J.length>0&&(W.images=J)}return W}clone(){return new this.constructor().copy(this)}copy(Z){this.name=Z.name,this.blending=Z.blending,this.side=Z.side,this.vertexColors=Z.vertexColors,this.opacity=Z.opacity,this.transparent=Z.transparent,this.blendSrc=Z.blendSrc,this.blendDst=Z.blendDst,this.blendEquation=Z.blendEquation,this.blendSrcAlpha=Z.blendSrcAlpha,this.blendDstAlpha=Z.blendDstAlpha,this.blendEquationAlpha=Z.blendEquationAlpha,this.depthFunc=Z.depthFunc,this.depthTest=Z.depthTest,this.depthWrite=Z.depthWrite,this.stencilWriteMask=Z.stencilWriteMask,this.stencilFunc=Z.stencilFunc,this.stencilRef=Z.stencilRef,this.stencilFuncMask=Z.stencilFuncMask,this.stencilFail=Z.stencilFail,this.stencilZFail=Z.stencilZFail,this.stencilZPass=Z.stencilZPass,this.stencilWrite=Z.stencilWrite;const G=Z.clippingPlanes;let W=null;if(G!==null){const F=G.length;W=new Array(F);for(let U=0;U!==F;++U)W[U]=G[U].clone()}return this.clippingPlanes=W,this.clipIntersection=Z.clipIntersection,this.clipShadows=Z.clipShadows,this.shadowSide=Z.shadowSide,this.colorWrite=Z.colorWrite,this.precision=Z.precision,this.polygonOffset=Z.polygonOffset,this.polygonOffsetFactor=Z.polygonOffsetFactor,this.polygonOffsetUnits=Z.polygonOffsetUnits,this.dithering=Z.dithering,this.alphaTest=Z.alphaTest,this.alphaToCoverage=Z.alphaToCoverage,this.premultipliedAlpha=Z.premultipliedAlpha,this.forceSinglePass=Z.forceSinglePass,this.visible=Z.visible,this.toneMapped=Z.toneMapped,this.userData=JSON.parse(JSON.stringify(Z.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(Z){Z===!0&&this.version++}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(X,Z,G){return G<0&&(G+=1),G>1&&(G-=1),G<1/6?X+(Z-X)*6*G:G<1/2?Z:G<2/3?X+(Z-X)*6*(2/3-G):X}class Color{constructor(Z,G,W){return this.isColor=!0,this.r=1,this.g=1,this.b=1,G===void 0&&W===void 0?this.set(Z):this.setRGB(Z,G,W)}set(Z){return Z&&Z.isColor?this.copy(Z):typeof Z=="number"?this.setHex(Z):typeof Z=="string"&&this.setStyle(Z),this}setScalar(Z){return this.r=Z,this.g=Z,this.b=Z,this}setHex(Z,G=SRGBColorSpace){return Z=Math.floor(Z),this.r=(Z>>16&255)/255,this.g=(Z>>8&255)/255,this.b=(Z&255)/255,ColorManagement.toWorkingColorSpace(this,G),this}setRGB(Z,G,W,F=ColorManagement.workingColorSpace){return this.r=Z,this.g=G,this.b=W,ColorManagement.toWorkingColorSpace(this,F),this}setHSL(Z,G,W,F=ColorManagement.workingColorSpace){if(Z=euclideanModulo(Z,1),G=clamp(G,0,1),W=clamp(W,0,1),G===0)this.r=this.g=this.b=W;else{const U=W<=.5?W*(1+G):W+G-W*G,J=2*W-U;this.r=hue2rgb(J,U,Z+1/3),this.g=hue2rgb(J,U,Z),this.b=hue2rgb(J,U,Z-1/3)}return ColorManagement.toWorkingColorSpace(this,F),this}setStyle(Z,G=SRGBColorSpace){function W(U){U!==void 0&&parseFloat(U)<1&&console.warn("THREE.Color: Alpha component of "+Z+" will be ignored.")}let F;if(F=/^(\w+)\(([^\)]*)\)/.exec(Z)){let U;const J=F[1],Y=F[2];switch(J){case"rgb":case"rgba":if(U=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return this.r=Math.min(255,parseInt(U[1],10))/255,this.g=Math.min(255,parseInt(U[2],10))/255,this.b=Math.min(255,parseInt(U[3],10))/255,ColorManagement.toWorkingColorSpace(this,G),W(U[4]),this;if(U=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return this.r=Math.min(100,parseInt(U[1],10))/100,this.g=Math.min(100,parseInt(U[2],10))/100,this.b=Math.min(100,parseInt(U[3],10))/100,ColorManagement.toWorkingColorSpace(this,G),W(U[4]),this;break;case"hsl":case"hsla":if(U=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y)){const D=parseFloat(U[1])/360,Q=parseFloat(U[2])/100,te=parseFloat(U[3])/100;return W(U[4]),this.setHSL(D,Q,te,G)}break;default:console.warn("THREE.Color: Unknown color model "+Z)}}else if(F=/^\#([A-Fa-f\d]+)$/.exec(Z)){const U=F[1],J=U.length;if(J===3)return this.setRGB(parseInt(U.charAt(0),16)/15,parseInt(U.charAt(1),16)/15,parseInt(U.charAt(2),16)/15,G);if(J===6)return this.setHex(parseInt(U,16),G);console.warn("THREE.Color: Invalid hex color "+Z)}else if(Z&&Z.length>0)return this.setColorName(Z,G);return this}setColorName(Z,G=SRGBColorSpace){const W=_colorKeywords[Z.toLowerCase()];return W!==void 0?this.setHex(W,G):console.warn("THREE.Color: Unknown color "+Z),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(Z){return this.r=Z.r,this.g=Z.g,this.b=Z.b,this}copySRGBToLinear(Z){return this.r=SRGBToLinear(Z.r),this.g=SRGBToLinear(Z.g),this.b=SRGBToLinear(Z.b),this}copyLinearToSRGB(Z){return this.r=LinearToSRGB(Z.r),this.g=LinearToSRGB(Z.g),this.b=LinearToSRGB(Z.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(Z=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color$1.copy(this),Z),clamp(_color$1.r*255,0,255)<<16^clamp(_color$1.g*255,0,255)<<8^clamp(_color$1.b*255,0,255)<<0}getHexString(Z=SRGBColorSpace){return("000000"+this.getHex(Z).toString(16)).slice(-6)}getHSL(Z,G=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color$1.copy(this),G);const W=_color$1.r,F=_color$1.g,U=_color$1.b,J=Math.max(W,F,U),Y=Math.min(W,F,U);let D,Q;const te=(Y+J)/2;if(Y===J)D=0,Q=0;else{const q=J-Y;switch(Q=te<=.5?q/(J+Y):q/(2-J-Y),J){case W:D=(F-U)/q+(F<U?6:0);break;case F:D=(U-W)/q+2;break;case U:D=(W-F)/q+4;break}D/=6}return Z.h=D,Z.s=Q,Z.l=te,Z}getRGB(Z,G=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color$1.copy(this),G),Z.r=_color$1.r,Z.g=_color$1.g,Z.b=_color$1.b,Z}getStyle(Z=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color$1.copy(this),Z);const G=_color$1.r,W=_color$1.g,F=_color$1.b;return Z!==SRGBColorSpace?`color(${Z} ${G.toFixed(3)} ${W.toFixed(3)} ${F.toFixed(3)})`:`rgb(${G*255|0},${W*255|0},${F*255|0})`}offsetHSL(Z,G,W){return this.getHSL(_hslA),_hslA.h+=Z,_hslA.s+=G,_hslA.l+=W,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(Z){return this.r+=Z.r,this.g+=Z.g,this.b+=Z.b,this}addColors(Z,G){return this.r=Z.r+G.r,this.g=Z.g+G.g,this.b=Z.b+G.b,this}addScalar(Z){return this.r+=Z,this.g+=Z,this.b+=Z,this}sub(Z){return this.r=Math.max(0,this.r-Z.r),this.g=Math.max(0,this.g-Z.g),this.b=Math.max(0,this.b-Z.b),this}multiply(Z){return this.r*=Z.r,this.g*=Z.g,this.b*=Z.b,this}multiplyScalar(Z){return this.r*=Z,this.g*=Z,this.b*=Z,this}lerp(Z,G){return this.r+=(Z.r-this.r)*G,this.g+=(Z.g-this.g)*G,this.b+=(Z.b-this.b)*G,this}lerpColors(Z,G,W){return this.r=Z.r+(G.r-Z.r)*W,this.g=Z.g+(G.g-Z.g)*W,this.b=Z.b+(G.b-Z.b)*W,this}lerpHSL(Z,G){this.getHSL(_hslA),Z.getHSL(_hslB);const W=lerp(_hslA.h,_hslB.h,G),F=lerp(_hslA.s,_hslB.s,G),U=lerp(_hslA.l,_hslB.l,G);return this.setHSL(W,F,U),this}setFromVector3(Z){return this.r=Z.x,this.g=Z.y,this.b=Z.z,this}applyMatrix3(Z){const G=this.r,W=this.g,F=this.b,U=Z.elements;return this.r=U[0]*G+U[3]*W+U[6]*F,this.g=U[1]*G+U[4]*W+U[7]*F,this.b=U[2]*G+U[5]*W+U[8]*F,this}equals(Z){return Z.r===this.r&&Z.g===this.g&&Z.b===this.b}fromArray(Z,G=0){return this.r=Z[G],this.g=Z[G+1],this.b=Z[G+2],this}toArray(Z=[],G=0){return Z[G]=this.r,Z[G+1]=this.g,Z[G+2]=this.b,Z}fromBufferAttribute(Z,G){return this.r=Z.getX(G),this.g=Z.getY(G),this.b=Z.getZ(G),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color$1=new Color;Color.NAMES=_colorKeywords;class MeshBasicMaterial extends Material{constructor(Z){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(Z)}copy(Z){return super.copy(Z),this.color.copy(Z.color),this.map=Z.map,this.lightMap=Z.lightMap,this.lightMapIntensity=Z.lightMapIntensity,this.aoMap=Z.aoMap,this.aoMapIntensity=Z.aoMapIntensity,this.specularMap=Z.specularMap,this.alphaMap=Z.alphaMap,this.envMap=Z.envMap,this.combine=Z.combine,this.reflectivity=Z.reflectivity,this.refractionRatio=Z.refractionRatio,this.wireframe=Z.wireframe,this.wireframeLinewidth=Z.wireframeLinewidth,this.wireframeLinecap=Z.wireframeLinecap,this.wireframeLinejoin=Z.wireframeLinejoin,this.fog=Z.fog,this}}const _vector$8=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(Z,G,W=!1){if(Array.isArray(Z))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=Z,this.itemSize=G,this.count=Z!==void 0?Z.length/G:0,this.normalized=W,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(Z){Z===!0&&this.version++}setUsage(Z){return this.usage=Z,this}copy(Z){return this.name=Z.name,this.array=new Z.array.constructor(Z.array),this.itemSize=Z.itemSize,this.count=Z.count,this.normalized=Z.normalized,this.usage=Z.usage,this}copyAt(Z,G,W){Z*=this.itemSize,W*=G.itemSize;for(let F=0,U=this.itemSize;F<U;F++)this.array[Z+F]=G.array[W+F];return this}copyArray(Z){return this.array.set(Z),this}applyMatrix3(Z){if(this.itemSize===2)for(let G=0,W=this.count;G<W;G++)_vector2$1.fromBufferAttribute(this,G),_vector2$1.applyMatrix3(Z),this.setXY(G,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let G=0,W=this.count;G<W;G++)_vector$8.fromBufferAttribute(this,G),_vector$8.applyMatrix3(Z),this.setXYZ(G,_vector$8.x,_vector$8.y,_vector$8.z);return this}applyMatrix4(Z){for(let G=0,W=this.count;G<W;G++)_vector$8.fromBufferAttribute(this,G),_vector$8.applyMatrix4(Z),this.setXYZ(G,_vector$8.x,_vector$8.y,_vector$8.z);return this}applyNormalMatrix(Z){for(let G=0,W=this.count;G<W;G++)_vector$8.fromBufferAttribute(this,G),_vector$8.applyNormalMatrix(Z),this.setXYZ(G,_vector$8.x,_vector$8.y,_vector$8.z);return this}transformDirection(Z){for(let G=0,W=this.count;G<W;G++)_vector$8.fromBufferAttribute(this,G),_vector$8.transformDirection(Z),this.setXYZ(G,_vector$8.x,_vector$8.y,_vector$8.z);return this}set(Z,G=0){return this.array.set(Z,G),this}getX(Z){let G=this.array[Z*this.itemSize];return this.normalized&&(G=denormalize(G,this.array)),G}setX(Z,G){return this.normalized&&(G=normalize$1(G,this.array)),this.array[Z*this.itemSize]=G,this}getY(Z){let G=this.array[Z*this.itemSize+1];return this.normalized&&(G=denormalize(G,this.array)),G}setY(Z,G){return this.normalized&&(G=normalize$1(G,this.array)),this.array[Z*this.itemSize+1]=G,this}getZ(Z){let G=this.array[Z*this.itemSize+2];return this.normalized&&(G=denormalize(G,this.array)),G}setZ(Z,G){return this.normalized&&(G=normalize$1(G,this.array)),this.array[Z*this.itemSize+2]=G,this}getW(Z){let G=this.array[Z*this.itemSize+3];return this.normalized&&(G=denormalize(G,this.array)),G}setW(Z,G){return this.normalized&&(G=normalize$1(G,this.array)),this.array[Z*this.itemSize+3]=G,this}setXY(Z,G,W){return Z*=this.itemSize,this.normalized&&(G=normalize$1(G,this.array),W=normalize$1(W,this.array)),this.array[Z+0]=G,this.array[Z+1]=W,this}setXYZ(Z,G,W,F){return Z*=this.itemSize,this.normalized&&(G=normalize$1(G,this.array),W=normalize$1(W,this.array),F=normalize$1(F,this.array)),this.array[Z+0]=G,this.array[Z+1]=W,this.array[Z+2]=F,this}setXYZW(Z,G,W,F,U){return Z*=this.itemSize,this.normalized&&(G=normalize$1(G,this.array),W=normalize$1(W,this.array),F=normalize$1(F,this.array),U=normalize$1(U,this.array)),this.array[Z+0]=G,this.array[Z+1]=W,this.array[Z+2]=F,this.array[Z+3]=U,this}onUpload(Z){return this.onUploadCallback=Z,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const Z={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(Z.name=this.name),this.usage!==StaticDrawUsage&&(Z.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(Z.updateRange=this.updateRange),Z}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uint16BufferAttribute extends BufferAttribute{constructor(Z,G,W){super(new Uint16Array(Z),G,W)}}class Uint32BufferAttribute extends BufferAttribute{constructor(Z,G,W){super(new Uint32Array(Z),G,W)}}class Float32BufferAttribute extends BufferAttribute{constructor(Z,G,W){super(new Float32Array(Z),G,W)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$7=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(Z){return Array.isArray(Z)?this.index=new(arrayNeedsUint32(Z)?Uint32BufferAttribute:Uint16BufferAttribute)(Z,1):this.index=Z,this}getAttribute(Z){return this.attributes[Z]}setAttribute(Z,G){return this.attributes[Z]=G,this}deleteAttribute(Z){return delete this.attributes[Z],this}hasAttribute(Z){return this.attributes[Z]!==void 0}addGroup(Z,G,W=0){this.groups.push({start:Z,count:G,materialIndex:W})}clearGroups(){this.groups=[]}setDrawRange(Z,G){this.drawRange.start=Z,this.drawRange.count=G}applyMatrix4(Z){const G=this.attributes.position;G!==void 0&&(G.applyMatrix4(Z),G.needsUpdate=!0);const W=this.attributes.normal;if(W!==void 0){const U=new Matrix3().getNormalMatrix(Z);W.applyNormalMatrix(U),W.needsUpdate=!0}const F=this.attributes.tangent;return F!==void 0&&(F.transformDirection(Z),F.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(Z){return _m1.makeRotationFromQuaternion(Z),this.applyMatrix4(_m1),this}rotateX(Z){return _m1.makeRotationX(Z),this.applyMatrix4(_m1),this}rotateY(Z){return _m1.makeRotationY(Z),this.applyMatrix4(_m1),this}rotateZ(Z){return _m1.makeRotationZ(Z),this.applyMatrix4(_m1),this}translate(Z,G,W){return _m1.makeTranslation(Z,G,W),this.applyMatrix4(_m1),this}scale(Z,G,W){return _m1.makeScale(Z,G,W),this.applyMatrix4(_m1),this}lookAt(Z){return _obj.lookAt(Z),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(Z){const G=[];for(let W=0,F=Z.length;W<F;W++){const U=Z[W];G.push(U.x,U.y,U.z||0)}return this.setAttribute("position",new Float32BufferAttribute(G,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const Z=this.attributes.position,G=this.morphAttributes.position;if(Z&&Z.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(Z!==void 0){if(this.boundingBox.setFromBufferAttribute(Z),G)for(let W=0,F=G.length;W<F;W++){const U=G[W];_box$1.setFromBufferAttribute(U),this.morphTargetsRelative?(_vector$7.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$7),_vector$7.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$7)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const Z=this.attributes.position,G=this.morphAttributes.position;if(Z&&Z.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(Z){const W=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(Z),G)for(let U=0,J=G.length;U<J;U++){const Y=G[U];_boxMorphTargets.setFromBufferAttribute(Y),this.morphTargetsRelative?(_vector$7.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$7),_vector$7.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$7)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(W);let F=0;for(let U=0,J=Z.count;U<J;U++)_vector$7.fromBufferAttribute(Z,U),F=Math.max(F,W.distanceToSquared(_vector$7));if(G)for(let U=0,J=G.length;U<J;U++){const Y=G[U],D=this.morphTargetsRelative;for(let Q=0,te=Y.count;Q<te;Q++)_vector$7.fromBufferAttribute(Y,Q),D&&(_offset.fromBufferAttribute(Z,Q),_vector$7.add(_offset)),F=Math.max(F,W.distanceToSquared(_vector$7))}this.boundingSphere.radius=Math.sqrt(F),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const Z=this.index,G=this.attributes;if(Z===null||G.position===void 0||G.normal===void 0||G.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const W=Z.array,F=G.position.array,U=G.normal.array,J=G.uv.array,Y=F.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*Y),4));const D=this.getAttribute("tangent").array,Q=[],te=[];for(let Xe=0;Xe<Y;Xe++)Q[Xe]=new Vector3,te[Xe]=new Vector3;const q=new Vector3,ee=new Vector3,ie=new Vector3,ne=new Vector2,le=new Vector2,ae=new Vector2,se=new Vector3,he=new Vector3;function pe(Xe,Ze,Ve){q.fromArray(F,Xe*3),ee.fromArray(F,Ze*3),ie.fromArray(F,Ve*3),ne.fromArray(J,Xe*2),le.fromArray(J,Ze*2),ae.fromArray(J,Ve*2),ee.sub(q),ie.sub(q),le.sub(ne),ae.sub(ne);const be=1/(le.x*ae.y-ae.x*le.y);isFinite(be)&&(se.copy(ee).multiplyScalar(ae.y).addScaledVector(ie,-le.y).multiplyScalar(be),he.copy(ie).multiplyScalar(le.x).addScaledVector(ee,-ae.x).multiplyScalar(be),Q[Xe].add(se),Q[Ze].add(se),Q[Ve].add(se),te[Xe].add(he),te[Ze].add(he),te[Ve].add(he))}let oe=this.groups;oe.length===0&&(oe=[{start:0,count:W.length}]);for(let Xe=0,Ze=oe.length;Xe<Ze;++Xe){const Ve=oe[Xe],be=Ve.start,re=Ve.count;for(let ye=be,we=be+re;ye<we;ye+=3)pe(W[ye+0],W[ye+1],W[ye+2])}const de=new Vector3,ue=new Vector3,ge=new Vector3,ve=new Vector3;function fe(Xe){ge.fromArray(U,Xe*3),ve.copy(ge);const Ze=Q[Xe];de.copy(Ze),de.sub(ge.multiplyScalar(ge.dot(Ze))).normalize(),ue.crossVectors(ve,Ze);const be=ue.dot(te[Xe])<0?-1:1;D[Xe*4]=de.x,D[Xe*4+1]=de.y,D[Xe*4+2]=de.z,D[Xe*4+3]=be}for(let Xe=0,Ze=oe.length;Xe<Ze;++Xe){const Ve=oe[Xe],be=Ve.start,re=Ve.count;for(let ye=be,we=be+re;ye<we;ye+=3)fe(W[ye+0]),fe(W[ye+1]),fe(W[ye+2])}}computeVertexNormals(){const Z=this.index,G=this.getAttribute("position");if(G!==void 0){let W=this.getAttribute("normal");if(W===void 0)W=new BufferAttribute(new Float32Array(G.count*3),3),this.setAttribute("normal",W);else for(let ee=0,ie=W.count;ee<ie;ee++)W.setXYZ(ee,0,0,0);const F=new Vector3,U=new Vector3,J=new Vector3,Y=new Vector3,D=new Vector3,Q=new Vector3,te=new Vector3,q=new Vector3;if(Z)for(let ee=0,ie=Z.count;ee<ie;ee+=3){const ne=Z.getX(ee+0),le=Z.getX(ee+1),ae=Z.getX(ee+2);F.fromBufferAttribute(G,ne),U.fromBufferAttribute(G,le),J.fromBufferAttribute(G,ae),te.subVectors(J,U),q.subVectors(F,U),te.cross(q),Y.fromBufferAttribute(W,ne),D.fromBufferAttribute(W,le),Q.fromBufferAttribute(W,ae),Y.add(te),D.add(te),Q.add(te),W.setXYZ(ne,Y.x,Y.y,Y.z),W.setXYZ(le,D.x,D.y,D.z),W.setXYZ(ae,Q.x,Q.y,Q.z)}else for(let ee=0,ie=G.count;ee<ie;ee+=3)F.fromBufferAttribute(G,ee+0),U.fromBufferAttribute(G,ee+1),J.fromBufferAttribute(G,ee+2),te.subVectors(J,U),q.subVectors(F,U),te.cross(q),W.setXYZ(ee+0,te.x,te.y,te.z),W.setXYZ(ee+1,te.x,te.y,te.z),W.setXYZ(ee+2,te.x,te.y,te.z);this.normalizeNormals(),W.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const Z=this.attributes.normal;for(let G=0,W=Z.count;G<W;G++)_vector$7.fromBufferAttribute(Z,G),_vector$7.normalize(),Z.setXYZ(G,_vector$7.x,_vector$7.y,_vector$7.z)}toNonIndexed(){function Z(Y,D){const Q=Y.array,te=Y.itemSize,q=Y.normalized,ee=new Q.constructor(D.length*te);let ie=0,ne=0;for(let le=0,ae=D.length;le<ae;le++){Y.isInterleavedBufferAttribute?ie=D[le]*Y.data.stride+Y.offset:ie=D[le]*te;for(let se=0;se<te;se++)ee[ne++]=Q[ie++]}return new BufferAttribute(ee,te,q)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const G=new BufferGeometry,W=this.index.array,F=this.attributes;for(const Y in F){const D=F[Y],Q=Z(D,W);G.setAttribute(Y,Q)}const U=this.morphAttributes;for(const Y in U){const D=[],Q=U[Y];for(let te=0,q=Q.length;te<q;te++){const ee=Q[te],ie=Z(ee,W);D.push(ie)}G.morphAttributes[Y]=D}G.morphTargetsRelative=this.morphTargetsRelative;const J=this.groups;for(let Y=0,D=J.length;Y<D;Y++){const Q=J[Y];G.addGroup(Q.start,Q.count,Q.materialIndex)}return G}toJSON(){const Z={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!==""&&(Z.name=this.name),Object.keys(this.userData).length>0&&(Z.userData=this.userData),this.parameters!==void 0){const D=this.parameters;for(const Q in D)D[Q]!==void 0&&(Z[Q]=D[Q]);return Z}Z.data={attributes:{}};const G=this.index;G!==null&&(Z.data.index={type:G.array.constructor.name,array:Array.prototype.slice.call(G.array)});const W=this.attributes;for(const D in W){const Q=W[D];Z.data.attributes[D]=Q.toJSON(Z.data)}const F={};let U=!1;for(const D in this.morphAttributes){const Q=this.morphAttributes[D],te=[];for(let q=0,ee=Q.length;q<ee;q++){const ie=Q[q];te.push(ie.toJSON(Z.data))}te.length>0&&(F[D]=te,U=!0)}U&&(Z.data.morphAttributes=F,Z.data.morphTargetsRelative=this.morphTargetsRelative);const J=this.groups;J.length>0&&(Z.data.groups=JSON.parse(JSON.stringify(J)));const Y=this.boundingSphere;return Y!==null&&(Z.data.boundingSphere={center:Y.center.toArray(),radius:Y.radius}),Z}clone(){return new this.constructor().copy(this)}copy(Z){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const G={};this.name=Z.name;const W=Z.index;W!==null&&this.setIndex(W.clone(G));const F=Z.attributes;for(const Q in F){const te=F[Q];this.setAttribute(Q,te.clone(G))}const U=Z.morphAttributes;for(const Q in U){const te=[],q=U[Q];for(let ee=0,ie=q.length;ee<ie;ee++)te.push(q[ee].clone(G));this.morphAttributes[Q]=te}this.morphTargetsRelative=Z.morphTargetsRelative;const J=Z.groups;for(let Q=0,te=J.length;Q<te;Q++){const q=J[Q];this.addGroup(q.start,q.count,q.materialIndex)}const Y=Z.boundingBox;Y!==null&&(this.boundingBox=Y.clone());const D=Z.boundingSphere;return D!==null&&(this.boundingSphere=D.clone()),this.drawRange.start=Z.drawRange.start,this.drawRange.count=Z.drawRange.count,this.userData=Z.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$2=new Matrix4,_ray$2=new Ray,_sphere$4=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(Z=new BufferGeometry,G=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=Z,this.material=G,this.updateMorphTargets()}copy(Z,G){return super.copy(Z,G),Z.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=Z.morphTargetInfluences.slice()),Z.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},Z.morphTargetDictionary)),this.material=Z.material,this.geometry=Z.geometry,this}updateMorphTargets(){const G=this.geometry.morphAttributes,W=Object.keys(G);if(W.length>0){const F=G[W[0]];if(F!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let U=0,J=F.length;U<J;U++){const Y=F[U].name||String(U);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=U}}}}getVertexPosition(Z,G){const W=this.geometry,F=W.attributes.position,U=W.morphAttributes.position,J=W.morphTargetsRelative;G.fromBufferAttribute(F,Z);const Y=this.morphTargetInfluences;if(U&&Y){_morphA.set(0,0,0);for(let D=0,Q=U.length;D<Q;D++){const te=Y[D],q=U[D];te!==0&&(_tempA.fromBufferAttribute(q,Z),J?_morphA.addScaledVector(_tempA,te):_morphA.addScaledVector(_tempA.sub(G),te))}G.add(_morphA)}return this.isSkinnedMesh&&this.applyBoneTransform(Z,G),G}raycast(Z,G){const W=this.geometry,F=this.material,U=this.matrixWorld;if(F===void 0||(W.boundingSphere===null&&W.computeBoundingSphere(),_sphere$4.copy(W.boundingSphere),_sphere$4.applyMatrix4(U),_ray$2.copy(Z.ray).recast(Z.near),_sphere$4.containsPoint(_ray$2.origin)===!1&&(_ray$2.intersectSphere(_sphere$4,_sphereHitAt)===null||_ray$2.origin.distanceToSquared(_sphereHitAt)>(Z.far-Z.near)**2))||(_inverseMatrix$2.copy(U).invert(),_ray$2.copy(Z.ray).applyMatrix4(_inverseMatrix$2),W.boundingBox!==null&&_ray$2.intersectsBox(W.boundingBox)===!1))return;let J;const Y=W.index,D=W.attributes.position,Q=W.attributes.uv,te=W.attributes.uv2,q=W.attributes.normal,ee=W.groups,ie=W.drawRange;if(Y!==null)if(Array.isArray(F))for(let ne=0,le=ee.length;ne<le;ne++){const ae=ee[ne],se=F[ae.materialIndex],he=Math.max(ae.start,ie.start),pe=Math.min(Y.count,Math.min(ae.start+ae.count,ie.start+ie.count));for(let oe=he,de=pe;oe<de;oe+=3){const ue=Y.getX(oe),ge=Y.getX(oe+1),ve=Y.getX(oe+2);J=checkGeometryIntersection(this,se,Z,_ray$2,Q,te,q,ue,ge,ve),J&&(J.faceIndex=Math.floor(oe/3),J.face.materialIndex=ae.materialIndex,G.push(J))}}else{const ne=Math.max(0,ie.start),le=Math.min(Y.count,ie.start+ie.count);for(let ae=ne,se=le;ae<se;ae+=3){const he=Y.getX(ae),pe=Y.getX(ae+1),oe=Y.getX(ae+2);J=checkGeometryIntersection(this,F,Z,_ray$2,Q,te,q,he,pe,oe),J&&(J.faceIndex=Math.floor(ae/3),G.push(J))}}else if(D!==void 0)if(Array.isArray(F))for(let ne=0,le=ee.length;ne<le;ne++){const ae=ee[ne],se=F[ae.materialIndex],he=Math.max(ae.start,ie.start),pe=Math.min(D.count,Math.min(ae.start+ae.count,ie.start+ie.count));for(let oe=he,de=pe;oe<de;oe+=3){const ue=oe,ge=oe+1,ve=oe+2;J=checkGeometryIntersection(this,se,Z,_ray$2,Q,te,q,ue,ge,ve),J&&(J.faceIndex=Math.floor(oe/3),J.face.materialIndex=ae.materialIndex,G.push(J))}}else{const ne=Math.max(0,ie.start),le=Math.min(D.count,ie.start+ie.count);for(let ae=ne,se=le;ae<se;ae+=3){const he=ae,pe=ae+1,oe=ae+2;J=checkGeometryIntersection(this,F,Z,_ray$2,Q,te,q,he,pe,oe),J&&(J.faceIndex=Math.floor(ae/3),G.push(J))}}}}function checkIntersection(X,Z,G,W,F,U,J,Y){let D;if(Z.side===BackSide?D=W.intersectTriangle(J,U,F,!0,Y):D=W.intersectTriangle(F,U,J,Z.side===FrontSide,Y),D===null)return null;_intersectionPointWorld.copy(Y),_intersectionPointWorld.applyMatrix4(X.matrixWorld);const Q=G.ray.origin.distanceTo(_intersectionPointWorld);return Q<G.near||Q>G.far?null:{distance:Q,point:_intersectionPointWorld.clone(),object:X}}function checkGeometryIntersection(X,Z,G,W,F,U,J,Y,D,Q){X.getVertexPosition(Y,_vA$1),X.getVertexPosition(D,_vB$1),X.getVertexPosition(Q,_vC$1);const te=checkIntersection(X,Z,G,W,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(te){F&&(_uvA$1.fromBufferAttribute(F,Y),_uvB$1.fromBufferAttribute(F,D),_uvC$1.fromBufferAttribute(F,Q),te.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),U&&(_uvA$1.fromBufferAttribute(U,Y),_uvB$1.fromBufferAttribute(U,D),_uvC$1.fromBufferAttribute(U,Q),te.uv2=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),J&&(_normalA.fromBufferAttribute(J,Y),_normalB.fromBufferAttribute(J,D),_normalC.fromBufferAttribute(J,Q),te.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),te.normal.dot(W.direction)>0&&te.normal.multiplyScalar(-1));const q={a:Y,b:D,c:Q,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,q.normal),te.face=q}return te}class BoxGeometry extends BufferGeometry{constructor(Z=1,G=1,W=1,F=1,U=1,J=1){super(),this.type="BoxGeometry",this.parameters={width:Z,height:G,depth:W,widthSegments:F,heightSegments:U,depthSegments:J};const Y=this;F=Math.floor(F),U=Math.floor(U),J=Math.floor(J);const D=[],Q=[],te=[],q=[];let ee=0,ie=0;ne("z","y","x",-1,-1,W,G,Z,J,U,0),ne("z","y","x",1,-1,W,G,-Z,J,U,1),ne("x","z","y",1,1,Z,W,G,F,J,2),ne("x","z","y",1,-1,Z,W,-G,F,J,3),ne("x","y","z",1,-1,Z,G,W,F,U,4),ne("x","y","z",-1,-1,Z,G,-W,F,U,5),this.setIndex(D),this.setAttribute("position",new Float32BufferAttribute(Q,3)),this.setAttribute("normal",new Float32BufferAttribute(te,3)),this.setAttribute("uv",new Float32BufferAttribute(q,2));function ne(le,ae,se,he,pe,oe,de,ue,ge,ve,fe){const Xe=oe/ge,Ze=de/ve,Ve=oe/2,be=de/2,re=ue/2,ye=ge+1,we=ve+1;let We=0,Se=0;const Le=new Vector3;for(let Ne=0;Ne<we;Ne++){const xe=Ne*Ze-be;for(let ke=0;ke<ye;ke++){const Ce=ke*Xe-Ve;Le[le]=Ce*he,Le[ae]=xe*pe,Le[se]=re,Q.push(Le.x,Le.y,Le.z),Le[le]=0,Le[ae]=0,Le[se]=ue>0?1:-1,te.push(Le.x,Le.y,Le.z),q.push(ke/ge),q.push(1-Ne/ve),We+=1}}for(let Ne=0;Ne<ve;Ne++)for(let xe=0;xe<ge;xe++){const ke=ee+xe+ye*Ne,Ce=ee+xe+ye*(Ne+1),Ee=ee+(xe+1)+ye*(Ne+1),et=ee+(xe+1)+ye*Ne;D.push(ke,Ce,et),D.push(Ce,Ee,et),Se+=6}Y.addGroup(ie,Se,fe),ie+=Se,ee+=We}}copy(Z){return super.copy(Z),this.parameters=Object.assign({},Z.parameters),this}static fromJSON(Z){return new BoxGeometry(Z.width,Z.height,Z.depth,Z.widthSegments,Z.heightSegments,Z.depthSegments)}}function cloneUniforms(X){const Z={};for(const G in X){Z[G]={};for(const W in X[G]){const F=X[G][W];F&&(F.isColor||F.isMatrix3||F.isMatrix4||F.isVector2||F.isVector3||F.isVector4||F.isTexture||F.isQuaternion)?F.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Z[G][W]=null):Z[G][W]=F.clone():Array.isArray(F)?Z[G][W]=F.slice():Z[G][W]=F}}return Z}function mergeUniforms(X){const Z={};for(let G=0;G<X.length;G++){const W=cloneUniforms(X[G]);for(const F in W)Z[F]=W[F]}return Z}function cloneUniformsGroups(X){const Z=[];for(let G=0;G<X.length;G++)Z.push(X[G].clone());return Z}function getUnlitUniformColorSpace(X){return X.getRenderTarget()===null&&X.outputEncoding===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(Z){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,Z!==void 0&&this.setValues(Z)}copy(Z){return super.copy(Z),this.fragmentShader=Z.fragmentShader,this.vertexShader=Z.vertexShader,this.uniforms=cloneUniforms(Z.uniforms),this.uniformsGroups=cloneUniformsGroups(Z.uniformsGroups),this.defines=Object.assign({},Z.defines),this.wireframe=Z.wireframe,this.wireframeLinewidth=Z.wireframeLinewidth,this.fog=Z.fog,this.lights=Z.lights,this.clipping=Z.clipping,this.extensions=Object.assign({},Z.extensions),this.glslVersion=Z.glslVersion,this}toJSON(Z){const G=super.toJSON(Z);G.glslVersion=this.glslVersion,G.uniforms={};for(const F in this.uniforms){const J=this.uniforms[F].value;J&&J.isTexture?G.uniforms[F]={type:"t",value:J.toJSON(Z).uuid}:J&&J.isColor?G.uniforms[F]={type:"c",value:J.getHex()}:J&&J.isVector2?G.uniforms[F]={type:"v2",value:J.toArray()}:J&&J.isVector3?G.uniforms[F]={type:"v3",value:J.toArray()}:J&&J.isVector4?G.uniforms[F]={type:"v4",value:J.toArray()}:J&&J.isMatrix3?G.uniforms[F]={type:"m3",value:J.toArray()}:J&&J.isMatrix4?G.uniforms[F]={type:"m4",value:J.toArray()}:G.uniforms[F]={value:J}}Object.keys(this.defines).length>0&&(G.defines=this.defines),G.vertexShader=this.vertexShader,G.fragmentShader=this.fragmentShader;const W={};for(const F in this.extensions)this.extensions[F]===!0&&(W[F]=!0);return Object.keys(W).length>0&&(G.extensions=W),G}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(Z,G){return super.copy(Z,G),this.matrixWorldInverse.copy(Z.matrixWorldInverse),this.projectionMatrix.copy(Z.projectionMatrix),this.projectionMatrixInverse.copy(Z.projectionMatrixInverse),this}getWorldDirection(Z){this.updateWorldMatrix(!0,!1);const G=this.matrixWorld.elements;return Z.set(-G[8],-G[9],-G[10]).normalize()}updateMatrixWorld(Z){super.updateMatrixWorld(Z),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(Z,G){super.updateWorldMatrix(Z,G),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(Z=50,G=1,W=.1,F=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=Z,this.zoom=1,this.near=W,this.far=F,this.focus=10,this.aspect=G,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(Z,G){return super.copy(Z,G),this.fov=Z.fov,this.zoom=Z.zoom,this.near=Z.near,this.far=Z.far,this.focus=Z.focus,this.aspect=Z.aspect,this.view=Z.view===null?null:Object.assign({},Z.view),this.filmGauge=Z.filmGauge,this.filmOffset=Z.filmOffset,this}setFocalLength(Z){const G=.5*this.getFilmHeight()/Z;this.fov=RAD2DEG*2*Math.atan(G),this.updateProjectionMatrix()}getFocalLength(){const Z=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/Z}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(Z,G,W,F,U,J){this.aspect=Z/G,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=Z,this.view.fullHeight=G,this.view.offsetX=W,this.view.offsetY=F,this.view.width=U,this.view.height=J,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const Z=this.near;let G=Z*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,W=2*G,F=this.aspect*W,U=-.5*F;const J=this.view;if(this.view!==null&&this.view.enabled){const D=J.fullWidth,Q=J.fullHeight;U+=J.offsetX*F/D,G-=J.offsetY*W/Q,F*=J.width/D,W*=J.height/Q}const Y=this.filmOffset;Y!==0&&(U+=Z*Y/this.getFilmWidth()),this.projectionMatrix.makePerspective(U,U+F,G,G-W,Z,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(Z){const G=super.toJSON(Z);return G.object.fov=this.fov,G.object.zoom=this.zoom,G.object.near=this.near,G.object.far=this.far,G.object.focus=this.focus,G.object.aspect=this.aspect,this.view!==null&&(G.object.view=Object.assign({},this.view)),G.object.filmGauge=this.filmGauge,G.object.filmOffset=this.filmOffset,G}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(Z,G,W){super(),this.type="CubeCamera",this.renderTarget=W;const F=new PerspectiveCamera(fov,aspect,Z,G);F.layers=this.layers,F.up.set(0,1,0),F.lookAt(1,0,0),this.add(F);const U=new PerspectiveCamera(fov,aspect,Z,G);U.layers=this.layers,U.up.set(0,1,0),U.lookAt(-1,0,0),this.add(U);const J=new PerspectiveCamera(fov,aspect,Z,G);J.layers=this.layers,J.up.set(0,0,-1),J.lookAt(0,1,0),this.add(J);const Y=new PerspectiveCamera(fov,aspect,Z,G);Y.layers=this.layers,Y.up.set(0,0,1),Y.lookAt(0,-1,0),this.add(Y);const D=new PerspectiveCamera(fov,aspect,Z,G);D.layers=this.layers,D.up.set(0,1,0),D.lookAt(0,0,1),this.add(D);const Q=new PerspectiveCamera(fov,aspect,Z,G);Q.layers=this.layers,Q.up.set(0,1,0),Q.lookAt(0,0,-1),this.add(Q)}update(Z,G){this.parent===null&&this.updateMatrixWorld();const W=this.renderTarget,[F,U,J,Y,D,Q]=this.children,te=Z.getRenderTarget(),q=Z.toneMapping,ee=Z.xr.enabled;Z.toneMapping=NoToneMapping,Z.xr.enabled=!1;const ie=W.texture.generateMipmaps;W.texture.generateMipmaps=!1,Z.setRenderTarget(W,0),Z.render(G,F),Z.setRenderTarget(W,1),Z.render(G,U),Z.setRenderTarget(W,2),Z.render(G,J),Z.setRenderTarget(W,3),Z.render(G,Y),Z.setRenderTarget(W,4),Z.render(G,D),W.texture.generateMipmaps=ie,Z.setRenderTarget(W,5),Z.render(G,Q),Z.setRenderTarget(te),Z.toneMapping=q,Z.xr.enabled=ee,W.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(Z,G,W,F,U,J,Y,D,Q,te){Z=Z!==void 0?Z:[],G=G!==void 0?G:CubeReflectionMapping,super(Z,G,W,F,U,J,Y,D,Q,te),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(Z){this.image=Z}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(Z=1,G={}){super(Z,Z,G),this.isWebGLCubeRenderTarget=!0;const W={width:Z,height:Z,depth:1},F=[W,W,W,W,W,W];this.texture=new CubeTexture(F,G.mapping,G.wrapS,G.wrapT,G.magFilter,G.minFilter,G.format,G.type,G.anisotropy,G.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=G.generateMipmaps!==void 0?G.generateMipmaps:!1,this.texture.minFilter=G.minFilter!==void 0?G.minFilter:LinearFilter}fromEquirectangularTexture(Z,G){this.texture.type=G.type,this.texture.encoding=G.encoding,this.texture.generateMipmaps=G.generateMipmaps,this.texture.minFilter=G.minFilter,this.texture.magFilter=G.magFilter;const W={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},F=new BoxGeometry(5,5,5),U=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(W.uniforms),vertexShader:W.vertexShader,fragmentShader:W.fragmentShader,side:BackSide,blending:NoBlending});U.uniforms.tEquirect.value=G;const J=new Mesh(F,U),Y=G.minFilter;return G.minFilter===LinearMipmapLinearFilter&&(G.minFilter=LinearFilter),new CubeCamera(1,10,this).update(Z,J),G.minFilter=Y,J.geometry.dispose(),J.material.dispose(),this}clear(Z,G,W,F){const U=Z.getRenderTarget();for(let J=0;J<6;J++)Z.setRenderTarget(this,J),Z.clear(G,W,F);Z.setRenderTarget(U)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(Z=new Vector3(1,0,0),G=0){this.isPlane=!0,this.normal=Z,this.constant=G}set(Z,G){return this.normal.copy(Z),this.constant=G,this}setComponents(Z,G,W,F){return this.normal.set(Z,G,W),this.constant=F,this}setFromNormalAndCoplanarPoint(Z,G){return this.normal.copy(Z),this.constant=-G.dot(this.normal),this}setFromCoplanarPoints(Z,G,W){const F=_vector1.subVectors(W,G).cross(_vector2.subVectors(Z,G)).normalize();return this.setFromNormalAndCoplanarPoint(F,Z),this}copy(Z){return this.normal.copy(Z.normal),this.constant=Z.constant,this}normalize(){const Z=1/this.normal.length();return this.normal.multiplyScalar(Z),this.constant*=Z,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(Z){return this.normal.dot(Z)+this.constant}distanceToSphere(Z){return this.distanceToPoint(Z.center)-Z.radius}projectPoint(Z,G){return G.copy(Z).addScaledVector(this.normal,-this.distanceToPoint(Z))}intersectLine(Z,G){const W=Z.delta(_vector1),F=this.normal.dot(W);if(F===0)return this.distanceToPoint(Z.start)===0?G.copy(Z.start):null;const U=-(Z.start.dot(this.normal)+this.constant)/F;return U<0||U>1?null:G.copy(Z.start).addScaledVector(W,U)}intersectsLine(Z){const G=this.distanceToPoint(Z.start),W=this.distanceToPoint(Z.end);return G<0&&W>0||W<0&&G>0}intersectsBox(Z){return Z.intersectsPlane(this)}intersectsSphere(Z){return Z.intersectsPlane(this)}coplanarPoint(Z){return Z.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(Z,G){const W=G||_normalMatrix.getNormalMatrix(Z),F=this.coplanarPoint(_vector1).applyMatrix4(Z),U=this.normal.applyMatrix3(W).normalize();return this.constant=-F.dot(U),this}translate(Z){return this.constant-=Z.dot(this.normal),this}equals(Z){return Z.normal.equals(this.normal)&&Z.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$3=new Sphere,_vector$6=new Vector3;class Frustum{constructor(Z=new Plane,G=new Plane,W=new Plane,F=new Plane,U=new Plane,J=new Plane){this.planes=[Z,G,W,F,U,J]}set(Z,G,W,F,U,J){const Y=this.planes;return Y[0].copy(Z),Y[1].copy(G),Y[2].copy(W),Y[3].copy(F),Y[4].copy(U),Y[5].copy(J),this}copy(Z){const G=this.planes;for(let W=0;W<6;W++)G[W].copy(Z.planes[W]);return this}setFromProjectionMatrix(Z){const G=this.planes,W=Z.elements,F=W[0],U=W[1],J=W[2],Y=W[3],D=W[4],Q=W[5],te=W[6],q=W[7],ee=W[8],ie=W[9],ne=W[10],le=W[11],ae=W[12],se=W[13],he=W[14],pe=W[15];return G[0].setComponents(Y-F,q-D,le-ee,pe-ae).normalize(),G[1].setComponents(Y+F,q+D,le+ee,pe+ae).normalize(),G[2].setComponents(Y+U,q+Q,le+ie,pe+se).normalize(),G[3].setComponents(Y-U,q-Q,le-ie,pe-se).normalize(),G[4].setComponents(Y-J,q-te,le-ne,pe-he).normalize(),G[5].setComponents(Y+J,q+te,le+ne,pe+he).normalize(),this}intersectsObject(Z){if(Z.boundingSphere!==void 0)Z.boundingSphere===null&&Z.computeBoundingSphere(),_sphere$3.copy(Z.boundingSphere).applyMatrix4(Z.matrixWorld);else{const G=Z.geometry;G.boundingSphere===null&&G.computeBoundingSphere(),_sphere$3.copy(G.boundingSphere).applyMatrix4(Z.matrixWorld)}return this.intersectsSphere(_sphere$3)}intersectsSprite(Z){return _sphere$3.center.set(0,0,0),_sphere$3.radius=.7071067811865476,_sphere$3.applyMatrix4(Z.matrixWorld),this.intersectsSphere(_sphere$3)}intersectsSphere(Z){const G=this.planes,W=Z.center,F=-Z.radius;for(let U=0;U<6;U++)if(G[U].distanceToPoint(W)<F)return!1;return!0}intersectsBox(Z){const G=this.planes;for(let W=0;W<6;W++){const F=G[W];if(_vector$6.x=F.normal.x>0?Z.max.x:Z.min.x,_vector$6.y=F.normal.y>0?Z.max.y:Z.min.y,_vector$6.z=F.normal.z>0?Z.max.z:Z.min.z,F.distanceToPoint(_vector$6)<0)return!1}return!0}containsPoint(Z){const G=this.planes;for(let W=0;W<6;W++)if(G[W].distanceToPoint(Z)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let X=null,Z=!1,G=null,W=null;function F(U,J){G(U,J),W=X.requestAnimationFrame(F)}return{start:function(){Z!==!0&&G!==null&&(W=X.requestAnimationFrame(F),Z=!0)},stop:function(){X.cancelAnimationFrame(W),Z=!1},setAnimationLoop:function(U){G=U},setContext:function(U){X=U}}}function WebGLAttributes(X,Z){const G=Z.isWebGL2,W=new WeakMap;function F(Q,te){const q=Q.array,ee=Q.usage,ie=X.createBuffer();X.bindBuffer(te,ie),X.bufferData(te,q,ee),Q.onUploadCallback();let ne;if(q instanceof Float32Array)ne=5126;else if(q instanceof Uint16Array)if(Q.isFloat16BufferAttribute)if(G)ne=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else ne=5123;else if(q instanceof Int16Array)ne=5122;else if(q instanceof Uint32Array)ne=5125;else if(q instanceof Int32Array)ne=5124;else if(q instanceof Int8Array)ne=5120;else if(q instanceof Uint8Array)ne=5121;else if(q instanceof Uint8ClampedArray)ne=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+q);return{buffer:ie,type:ne,bytesPerElement:q.BYTES_PER_ELEMENT,version:Q.version}}function U(Q,te,q){const ee=te.array,ie=te.updateRange;X.bindBuffer(q,Q),ie.count===-1?X.bufferSubData(q,0,ee):(G?X.bufferSubData(q,ie.offset*ee.BYTES_PER_ELEMENT,ee,ie.offset,ie.count):X.bufferSubData(q,ie.offset*ee.BYTES_PER_ELEMENT,ee.subarray(ie.offset,ie.offset+ie.count)),ie.count=-1),te.onUploadCallback()}function J(Q){return Q.isInterleavedBufferAttribute&&(Q=Q.data),W.get(Q)}function Y(Q){Q.isInterleavedBufferAttribute&&(Q=Q.data);const te=W.get(Q);te&&(X.deleteBuffer(te.buffer),W.delete(Q))}function D(Q,te){if(Q.isGLBufferAttribute){const ee=W.get(Q);(!ee||ee.version<Q.version)&&W.set(Q,{buffer:Q.buffer,type:Q.type,bytesPerElement:Q.elementSize,version:Q.version});return}Q.isInterleavedBufferAttribute&&(Q=Q.data);const q=W.get(Q);q===void 0?W.set(Q,F(Q,te)):q.version<Q.version&&(U(q.buffer,Q,te),q.version=Q.version)}return{get:J,remove:Y,update:D}}class PlaneGeometry extends BufferGeometry{constructor(Z=1,G=1,W=1,F=1){super(),this.type="PlaneGeometry",this.parameters={width:Z,height:G,widthSegments:W,heightSegments:F};const U=Z/2,J=G/2,Y=Math.floor(W),D=Math.floor(F),Q=Y+1,te=D+1,q=Z/Y,ee=G/D,ie=[],ne=[],le=[],ae=[];for(let se=0;se<te;se++){const he=se*ee-J;for(let pe=0;pe<Q;pe++){const oe=pe*q-U;ne.push(oe,-he,0),le.push(0,0,1),ae.push(pe/Y),ae.push(1-se/D)}}for(let se=0;se<D;se++)for(let he=0;he<Y;he++){const pe=he+Q*se,oe=he+Q*(se+1),de=he+1+Q*(se+1),ue=he+1+Q*se;ie.push(pe,oe,ue),ie.push(oe,de,ue)}this.setIndex(ie),this.setAttribute("position",new Float32BufferAttribute(ne,3)),this.setAttribute("normal",new Float32BufferAttribute(le,3)),this.setAttribute("uv",new Float32BufferAttribute(ae,2))}copy(Z){return super.copy(Z),this.parameters=Object.assign({},Z.parameters),this}static fromJSON(Z){return new PlaneGeometry(Z.width,Z.height,Z.widthSegments,Z.heightSegments)}}var alphamap_fragment=`#ifdef USE_ALPHAMAP
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
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex="vec3 transformed = vec3( position );",beginnormal_vertex=`vec3 objectNormal = vec3( normal );
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
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
#endif`,encodings_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
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
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
#endif`,envmap_physical_pars_fragment=`#if defined( USE_ENVMAP )
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
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
}`,lights_fragment_begin=`
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
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
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
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
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
#endif`,output_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
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
#endif`,uv_pars_fragment=`#ifdef USE_UV
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
#endif`,uv_pars_vertex=`#ifdef USE_UV
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
#endif`,uv_vertex=`#ifdef USE_UV
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
	#include <encodings_fragment>
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
	#include <encodings_fragment>
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
	#include <encodings_fragment>
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
	#include <encodings_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
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
	#include <encodings_fragment>
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
}`,ShaderChunk={alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common:common$7,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,encodings_fragment,encodings_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,output_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(X,Z,G,W,F,U,J){const Y=new Color(0);let D=U===!0?0:1,Q,te,q=null,ee=0,ie=null;function ne(ae,se){let he=!1,pe=se.isScene===!0?se.background:null;pe&&pe.isTexture&&(pe=(se.backgroundBlurriness>0?G:Z).get(pe));const oe=X.xr,de=oe.getSession&&oe.getSession();de&&de.environmentBlendMode==="additive"&&(pe=null),pe===null?le(Y,D):pe&&pe.isColor&&(le(pe,1),he=!0),(X.autoClear||he)&&X.clear(X.autoClearColor,X.autoClearDepth,X.autoClearStencil),pe&&(pe.isCubeTexture||pe.mapping===CubeUVReflectionMapping)?(te===void 0&&(te=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),te.geometry.deleteAttribute("normal"),te.geometry.deleteAttribute("uv"),te.onBeforeRender=function(ue,ge,ve){this.matrixWorld.copyPosition(ve.matrixWorld)},Object.defineProperty(te.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),F.update(te)),te.material.uniforms.envMap.value=pe,te.material.uniforms.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1,te.material.uniforms.backgroundBlurriness.value=se.backgroundBlurriness,te.material.uniforms.backgroundIntensity.value=se.backgroundIntensity,te.material.toneMapped=pe.encoding!==sRGBEncoding,(q!==pe||ee!==pe.version||ie!==X.toneMapping)&&(te.material.needsUpdate=!0,q=pe,ee=pe.version,ie=X.toneMapping),te.layers.enableAll(),ae.unshift(te,te.geometry,te.material,0,0,null)):pe&&pe.isTexture&&(Q===void 0&&(Q=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),Q.geometry.deleteAttribute("normal"),Object.defineProperty(Q.material,"map",{get:function(){return this.uniforms.t2D.value}}),F.update(Q)),Q.material.uniforms.t2D.value=pe,Q.material.uniforms.backgroundIntensity.value=se.backgroundIntensity,Q.material.toneMapped=pe.encoding!==sRGBEncoding,pe.matrixAutoUpdate===!0&&pe.updateMatrix(),Q.material.uniforms.uvTransform.value.copy(pe.matrix),(q!==pe||ee!==pe.version||ie!==X.toneMapping)&&(Q.material.needsUpdate=!0,q=pe,ee=pe.version,ie=X.toneMapping),Q.layers.enableAll(),ae.unshift(Q,Q.geometry,Q.material,0,0,null))}function le(ae,se){ae.getRGB(_rgb,getUnlitUniformColorSpace(X)),W.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,se,J)}return{getClearColor:function(){return Y},setClearColor:function(ae,se=1){Y.set(ae),D=se,le(Y,D)},getClearAlpha:function(){return D},setClearAlpha:function(ae){D=ae,le(Y,D)},render:ne}}function WebGLBindingStates(X,Z,G,W){const F=X.getParameter(34921),U=W.isWebGL2?null:Z.get("OES_vertex_array_object"),J=W.isWebGL2||U!==null,Y={},D=ae(null);let Q=D,te=!1;function q(re,ye,we,We,Se){let Le=!1;if(J){const Ne=le(We,we,ye);Q!==Ne&&(Q=Ne,ie(Q.object)),Le=se(re,We,we,Se),Le&&he(re,We,we,Se)}else{const Ne=ye.wireframe===!0;(Q.geometry!==We.id||Q.program!==we.id||Q.wireframe!==Ne)&&(Q.geometry=We.id,Q.program=we.id,Q.wireframe=Ne,Le=!0)}Se!==null&&G.update(Se,34963),(Le||te)&&(te=!1,ve(re,ye,we,We),Se!==null&&X.bindBuffer(34963,G.get(Se).buffer))}function ee(){return W.isWebGL2?X.createVertexArray():U.createVertexArrayOES()}function ie(re){return W.isWebGL2?X.bindVertexArray(re):U.bindVertexArrayOES(re)}function ne(re){return W.isWebGL2?X.deleteVertexArray(re):U.deleteVertexArrayOES(re)}function le(re,ye,we){const We=we.wireframe===!0;let Se=Y[re.id];Se===void 0&&(Se={},Y[re.id]=Se);let Le=Se[ye.id];Le===void 0&&(Le={},Se[ye.id]=Le);let Ne=Le[We];return Ne===void 0&&(Ne=ae(ee()),Le[We]=Ne),Ne}function ae(re){const ye=[],we=[],We=[];for(let Se=0;Se<F;Se++)ye[Se]=0,we[Se]=0,We[Se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ye,enabledAttributes:we,attributeDivisors:We,object:re,attributes:{},index:null}}function se(re,ye,we,We){const Se=Q.attributes,Le=ye.attributes;let Ne=0;const xe=we.getAttributes();for(const ke in xe)if(xe[ke].location>=0){const Ee=Se[ke];let et=Le[ke];if(et===void 0&&(ke==="instanceMatrix"&&re.instanceMatrix&&(et=re.instanceMatrix),ke==="instanceColor"&&re.instanceColor&&(et=re.instanceColor)),Ee===void 0||Ee.attribute!==et||et&&Ee.data!==et.data)return!0;Ne++}return Q.attributesNum!==Ne||Q.index!==We}function he(re,ye,we,We){const Se={},Le=ye.attributes;let Ne=0;const xe=we.getAttributes();for(const ke in xe)if(xe[ke].location>=0){let Ee=Le[ke];Ee===void 0&&(ke==="instanceMatrix"&&re.instanceMatrix&&(Ee=re.instanceMatrix),ke==="instanceColor"&&re.instanceColor&&(Ee=re.instanceColor));const et={};et.attribute=Ee,Ee&&Ee.data&&(et.data=Ee.data),Se[ke]=et,Ne++}Q.attributes=Se,Q.attributesNum=Ne,Q.index=We}function pe(){const re=Q.newAttributes;for(let ye=0,we=re.length;ye<we;ye++)re[ye]=0}function oe(re){de(re,0)}function de(re,ye){const we=Q.newAttributes,We=Q.enabledAttributes,Se=Q.attributeDivisors;we[re]=1,We[re]===0&&(X.enableVertexAttribArray(re),We[re]=1),Se[re]!==ye&&((W.isWebGL2?X:Z.get("ANGLE_instanced_arrays"))[W.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](re,ye),Se[re]=ye)}function ue(){const re=Q.newAttributes,ye=Q.enabledAttributes;for(let we=0,We=ye.length;we<We;we++)ye[we]!==re[we]&&(X.disableVertexAttribArray(we),ye[we]=0)}function ge(re,ye,we,We,Se,Le){W.isWebGL2===!0&&(we===5124||we===5125)?X.vertexAttribIPointer(re,ye,we,Se,Le):X.vertexAttribPointer(re,ye,we,We,Se,Le)}function ve(re,ye,we,We){if(W.isWebGL2===!1&&(re.isInstancedMesh||We.isInstancedBufferGeometry)&&Z.get("ANGLE_instanced_arrays")===null)return;pe();const Se=We.attributes,Le=we.getAttributes(),Ne=ye.defaultAttributeValues;for(const xe in Le){const ke=Le[xe];if(ke.location>=0){let Ce=Se[xe];if(Ce===void 0&&(xe==="instanceMatrix"&&re.instanceMatrix&&(Ce=re.instanceMatrix),xe==="instanceColor"&&re.instanceColor&&(Ce=re.instanceColor)),Ce!==void 0){const Ee=Ce.normalized,et=Ce.itemSize,De=G.get(Ce);if(De===void 0)continue;const Je=De.buffer,st=De.type,ct=De.bytesPerElement;if(Ce.isInterleavedBufferAttribute){const it=Ce.data,dt=it.stride,Be=Ce.offset;if(it.isInstancedInterleavedBuffer){for(let Te=0;Te<ke.locationSize;Te++)de(ke.location+Te,it.meshPerAttribute);re.isInstancedMesh!==!0&&We._maxInstanceCount===void 0&&(We._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Te=0;Te<ke.locationSize;Te++)oe(ke.location+Te);X.bindBuffer(34962,Je);for(let Te=0;Te<ke.locationSize;Te++)ge(ke.location+Te,et/ke.locationSize,st,Ee,dt*ct,(Be+et/ke.locationSize*Te)*ct)}else{if(Ce.isInstancedBufferAttribute){for(let it=0;it<ke.locationSize;it++)de(ke.location+it,Ce.meshPerAttribute);re.isInstancedMesh!==!0&&We._maxInstanceCount===void 0&&(We._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let it=0;it<ke.locationSize;it++)oe(ke.location+it);X.bindBuffer(34962,Je);for(let it=0;it<ke.locationSize;it++)ge(ke.location+it,et/ke.locationSize,st,Ee,et*ct,et/ke.locationSize*it*ct)}}else if(Ne!==void 0){const Ee=Ne[xe];if(Ee!==void 0)switch(Ee.length){case 2:X.vertexAttrib2fv(ke.location,Ee);break;case 3:X.vertexAttrib3fv(ke.location,Ee);break;case 4:X.vertexAttrib4fv(ke.location,Ee);break;default:X.vertexAttrib1fv(ke.location,Ee)}}}}ue()}function fe(){Ve();for(const re in Y){const ye=Y[re];for(const we in ye){const We=ye[we];for(const Se in We)ne(We[Se].object),delete We[Se];delete ye[we]}delete Y[re]}}function Xe(re){if(Y[re.id]===void 0)return;const ye=Y[re.id];for(const we in ye){const We=ye[we];for(const Se in We)ne(We[Se].object),delete We[Se];delete ye[we]}delete Y[re.id]}function Ze(re){for(const ye in Y){const we=Y[ye];if(we[re.id]===void 0)continue;const We=we[re.id];for(const Se in We)ne(We[Se].object),delete We[Se];delete we[re.id]}}function Ve(){be(),te=!0,Q!==D&&(Q=D,ie(Q.object))}function be(){D.geometry=null,D.program=null,D.wireframe=!1}return{setup:q,reset:Ve,resetDefaultState:be,dispose:fe,releaseStatesOfGeometry:Xe,releaseStatesOfProgram:Ze,initAttributes:pe,enableAttribute:oe,disableUnusedAttributes:ue}}function WebGLBufferRenderer(X,Z,G,W){const F=W.isWebGL2;let U;function J(Q){U=Q}function Y(Q,te){X.drawArrays(U,Q,te),G.update(te,U,1)}function D(Q,te,q){if(q===0)return;let ee,ie;if(F)ee=X,ie="drawArraysInstanced";else if(ee=Z.get("ANGLE_instanced_arrays"),ie="drawArraysInstancedANGLE",ee===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}ee[ie](U,Q,te,q),G.update(te,U,q)}this.setMode=J,this.render=Y,this.renderInstances=D}function WebGLCapabilities(X,Z,G){let W;function F(){if(W!==void 0)return W;if(Z.has("EXT_texture_filter_anisotropic")===!0){const ge=Z.get("EXT_texture_filter_anisotropic");W=X.getParameter(ge.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function U(ge){if(ge==="highp"){if(X.getShaderPrecisionFormat(35633,36338).precision>0&&X.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";ge="mediump"}return ge==="mediump"&&X.getShaderPrecisionFormat(35633,36337).precision>0&&X.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const J=typeof WebGL2RenderingContext<"u"&&X.constructor.name==="WebGL2RenderingContext";let Y=G.precision!==void 0?G.precision:"highp";const D=U(Y);D!==Y&&(console.warn("THREE.WebGLRenderer:",Y,"not supported, using",D,"instead."),Y=D);const Q=J||Z.has("WEBGL_draw_buffers"),te=G.logarithmicDepthBuffer===!0,q=X.getParameter(34930),ee=X.getParameter(35660),ie=X.getParameter(3379),ne=X.getParameter(34076),le=X.getParameter(34921),ae=X.getParameter(36347),se=X.getParameter(36348),he=X.getParameter(36349),pe=ee>0,oe=J||Z.has("OES_texture_float"),de=pe&&oe,ue=J?X.getParameter(36183):0;return{isWebGL2:J,drawBuffers:Q,getMaxAnisotropy:F,getMaxPrecision:U,precision:Y,logarithmicDepthBuffer:te,maxTextures:q,maxVertexTextures:ee,maxTextureSize:ie,maxCubemapSize:ne,maxAttributes:le,maxVertexUniforms:ae,maxVaryings:se,maxFragmentUniforms:he,vertexTextures:pe,floatFragmentTextures:oe,floatVertexTextures:de,maxSamples:ue}}function WebGLClipping(X){const Z=this;let G=null,W=0,F=!1,U=!1;const J=new Plane,Y=new Matrix3,D={value:null,needsUpdate:!1};this.uniform=D,this.numPlanes=0,this.numIntersection=0,this.init=function(q,ee){const ie=q.length!==0||ee||W!==0||F;return F=ee,W=q.length,ie},this.beginShadows=function(){U=!0,te(null)},this.endShadows=function(){U=!1},this.setGlobalState=function(q,ee){G=te(q,ee,0)},this.setState=function(q,ee,ie){const ne=q.clippingPlanes,le=q.clipIntersection,ae=q.clipShadows,se=X.get(q);if(!F||ne===null||ne.length===0||U&&!ae)U?te(null):Q();else{const he=U?0:W,pe=he*4;let oe=se.clippingState||null;D.value=oe,oe=te(ne,ee,pe,ie);for(let de=0;de!==pe;++de)oe[de]=G[de];se.clippingState=oe,this.numIntersection=le?this.numPlanes:0,this.numPlanes+=he}};function Q(){D.value!==G&&(D.value=G,D.needsUpdate=W>0),Z.numPlanes=W,Z.numIntersection=0}function te(q,ee,ie,ne){const le=q!==null?q.length:0;let ae=null;if(le!==0){if(ae=D.value,ne!==!0||ae===null){const se=ie+le*4,he=ee.matrixWorldInverse;Y.getNormalMatrix(he),(ae===null||ae.length<se)&&(ae=new Float32Array(se));for(let pe=0,oe=ie;pe!==le;++pe,oe+=4)J.copy(q[pe]).applyMatrix4(he,Y),J.normal.toArray(ae,oe),ae[oe+3]=J.constant}D.value=ae,D.needsUpdate=!0}return Z.numPlanes=le,Z.numIntersection=0,ae}}function WebGLCubeMaps(X){let Z=new WeakMap;function G(J,Y){return Y===EquirectangularReflectionMapping?J.mapping=CubeReflectionMapping:Y===EquirectangularRefractionMapping&&(J.mapping=CubeRefractionMapping),J}function W(J){if(J&&J.isTexture&&J.isRenderTargetTexture===!1){const Y=J.mapping;if(Y===EquirectangularReflectionMapping||Y===EquirectangularRefractionMapping)if(Z.has(J)){const D=Z.get(J).texture;return G(D,J.mapping)}else{const D=J.image;if(D&&D.height>0){const Q=new WebGLCubeRenderTarget(D.height/2);return Q.fromEquirectangularTexture(X,J),Z.set(J,Q),J.addEventListener("dispose",F),G(Q.texture,J.mapping)}else return null}}return J}function F(J){const Y=J.target;Y.removeEventListener("dispose",F);const D=Z.get(Y);D!==void 0&&(Z.delete(Y),D.dispose())}function U(){Z=new WeakMap}return{get:W,dispose:U}}class OrthographicCamera extends Camera{constructor(Z=-1,G=1,W=1,F=-1,U=.1,J=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=Z,this.right=G,this.top=W,this.bottom=F,this.near=U,this.far=J,this.updateProjectionMatrix()}copy(Z,G){return super.copy(Z,G),this.left=Z.left,this.right=Z.right,this.top=Z.top,this.bottom=Z.bottom,this.near=Z.near,this.far=Z.far,this.zoom=Z.zoom,this.view=Z.view===null?null:Object.assign({},Z.view),this}setViewOffset(Z,G,W,F,U,J){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=Z,this.view.fullHeight=G,this.view.offsetX=W,this.view.offsetY=F,this.view.width=U,this.view.height=J,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const Z=(this.right-this.left)/(2*this.zoom),G=(this.top-this.bottom)/(2*this.zoom),W=(this.right+this.left)/2,F=(this.top+this.bottom)/2;let U=W-Z,J=W+Z,Y=F+G,D=F-G;if(this.view!==null&&this.view.enabled){const Q=(this.right-this.left)/this.view.fullWidth/this.zoom,te=(this.top-this.bottom)/this.view.fullHeight/this.zoom;U+=Q*this.view.offsetX,J=U+Q*this.view.width,Y-=te*this.view.offsetY,D=Y-te*this.view.height}this.projectionMatrix.makeOrthographic(U,J,Y,D,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(Z){const G=super.toJSON(Z);return G.object.zoom=this.zoom,G.object.left=this.left,G.object.right=this.right,G.object.top=this.top,G.object.bottom=this.bottom,G.object.near=this.near,G.object.far=this.far,this.view!==null&&(G.object.view=Object.assign({},this.view)),G}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(Z){this._renderer=Z,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(Z,G=0,W=.1,F=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const U=this._allocateTargets();return U.depthBuffer=!0,this._sceneToCubeUV(Z,W,F,U),G>0&&this._blur(U,0,0,G),this._applyPMREM(U),this._cleanup(U),U}fromEquirectangular(Z,G=null){return this._fromTexture(Z,G)}fromCubemap(Z,G=null){return this._fromTexture(Z,G)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(Z){this._lodMax=Math.floor(Math.log2(Z)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let Z=0;Z<this._lodPlanes.length;Z++)this._lodPlanes[Z].dispose()}_cleanup(Z){this._renderer.setRenderTarget(_oldTarget),Z.scissorTest=!1,_setViewport(Z,0,0,Z.width,Z.height)}_fromTexture(Z,G){Z.mapping===CubeReflectionMapping||Z.mapping===CubeRefractionMapping?this._setSize(Z.image.length===0?16:Z.image[0].width||Z.image[0].image.width):this._setSize(Z.image.width/4),_oldTarget=this._renderer.getRenderTarget();const W=G||this._allocateTargets();return this._textureToCubeUV(Z,W),this._applyPMREM(W),this._cleanup(W),W}_allocateTargets(){const Z=3*Math.max(this._cubeSize,112),G=4*this._cubeSize,W={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,encoding:LinearEncoding,depthBuffer:!1},F=_createRenderTarget(Z,G,W);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==Z||this._pingPongRenderTarget.height!==G){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(Z,G,W);const{_lodMax:U}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(U)),this._blurMaterial=_getBlurShader(U,Z,G)}return F}_compileMaterial(Z){const G=new Mesh(this._lodPlanes[0],Z);this._renderer.compile(G,_flatCamera)}_sceneToCubeUV(Z,G,W,F){const Y=new PerspectiveCamera(90,1,G,W),D=[1,-1,1,1,1,1],Q=[1,1,1,-1,-1,-1],te=this._renderer,q=te.autoClear,ee=te.toneMapping;te.getClearColor(_clearColor),te.toneMapping=NoToneMapping,te.autoClear=!1;const ie=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),ne=new Mesh(new BoxGeometry,ie);let le=!1;const ae=Z.background;ae?ae.isColor&&(ie.color.copy(ae),Z.background=null,le=!0):(ie.color.copy(_clearColor),le=!0);for(let se=0;se<6;se++){const he=se%3;he===0?(Y.up.set(0,D[se],0),Y.lookAt(Q[se],0,0)):he===1?(Y.up.set(0,0,D[se]),Y.lookAt(0,Q[se],0)):(Y.up.set(0,D[se],0),Y.lookAt(0,0,Q[se]));const pe=this._cubeSize;_setViewport(F,he*pe,se>2?pe:0,pe,pe),te.setRenderTarget(F),le&&te.render(ne,Y),te.render(Z,Y)}ne.geometry.dispose(),ne.material.dispose(),te.toneMapping=ee,te.autoClear=q,Z.background=ae}_textureToCubeUV(Z,G){const W=this._renderer,F=Z.mapping===CubeReflectionMapping||Z.mapping===CubeRefractionMapping;F?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=Z.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const U=F?this._cubemapMaterial:this._equirectMaterial,J=new Mesh(this._lodPlanes[0],U),Y=U.uniforms;Y.envMap.value=Z;const D=this._cubeSize;_setViewport(G,0,0,3*D,2*D),W.setRenderTarget(G),W.render(J,_flatCamera)}_applyPMREM(Z){const G=this._renderer,W=G.autoClear;G.autoClear=!1;for(let F=1;F<this._lodPlanes.length;F++){const U=Math.sqrt(this._sigmas[F]*this._sigmas[F]-this._sigmas[F-1]*this._sigmas[F-1]),J=_axisDirections[(F-1)%_axisDirections.length];this._blur(Z,F-1,F,U,J)}G.autoClear=W}_blur(Z,G,W,F,U){const J=this._pingPongRenderTarget;this._halfBlur(Z,J,G,W,F,"latitudinal",U),this._halfBlur(J,Z,W,W,F,"longitudinal",U)}_halfBlur(Z,G,W,F,U,J,Y){const D=this._renderer,Q=this._blurMaterial;J!=="latitudinal"&&J!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const te=3,q=new Mesh(this._lodPlanes[F],Q),ee=Q.uniforms,ie=this._sizeLods[W]-1,ne=isFinite(U)?Math.PI/(2*ie):2*Math.PI/(2*MAX_SAMPLES-1),le=U/ne,ae=isFinite(U)?1+Math.floor(te*le):MAX_SAMPLES;ae>MAX_SAMPLES&&console.warn(`sigmaRadians, ${U}, is too large and will clip, as it requested ${ae} samples when the maximum is set to ${MAX_SAMPLES}`);const se=[];let he=0;for(let ge=0;ge<MAX_SAMPLES;++ge){const ve=ge/le,fe=Math.exp(-ve*ve/2);se.push(fe),ge===0?he+=fe:ge<ae&&(he+=2*fe)}for(let ge=0;ge<se.length;ge++)se[ge]=se[ge]/he;ee.envMap.value=Z.texture,ee.samples.value=ae,ee.weights.value=se,ee.latitudinal.value=J==="latitudinal",Y&&(ee.poleAxis.value=Y);const{_lodMax:pe}=this;ee.dTheta.value=ne,ee.mipInt.value=pe-W;const oe=this._sizeLods[F],de=3*oe*(F>pe-LOD_MIN?F-pe+LOD_MIN:0),ue=4*(this._cubeSize-oe);_setViewport(G,de,ue,3*oe,2*oe),D.setRenderTarget(G),D.render(q,_flatCamera)}}function _createPlanes(X){const Z=[],G=[],W=[];let F=X;const U=X-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let J=0;J<U;J++){const Y=Math.pow(2,F);G.push(Y);let D=1/Y;J>X-LOD_MIN?D=EXTRA_LOD_SIGMA[J-X+LOD_MIN-1]:J===0&&(D=0),W.push(D);const Q=1/(Y-2),te=-Q,q=1+Q,ee=[te,te,q,te,q,q,te,te,q,q,te,q],ie=6,ne=6,le=3,ae=2,se=1,he=new Float32Array(le*ne*ie),pe=new Float32Array(ae*ne*ie),oe=new Float32Array(se*ne*ie);for(let ue=0;ue<ie;ue++){const ge=ue%3*2/3-1,ve=ue>2?0:-1,fe=[ge,ve,0,ge+2/3,ve,0,ge+2/3,ve+1,0,ge,ve,0,ge+2/3,ve+1,0,ge,ve+1,0];he.set(fe,le*ne*ue),pe.set(ee,ae*ne*ue);const Xe=[ue,ue,ue,ue,ue,ue];oe.set(Xe,se*ne*ue)}const de=new BufferGeometry;de.setAttribute("position",new BufferAttribute(he,le)),de.setAttribute("uv",new BufferAttribute(pe,ae)),de.setAttribute("faceIndex",new BufferAttribute(oe,se)),Z.push(de),F>LOD_MIN&&F--}return{lodPlanes:Z,sizeLods:G,sigmas:W}}function _createRenderTarget(X,Z,G){const W=new WebGLRenderTarget(X,Z,G);return W.texture.mapping=CubeUVReflectionMapping,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function _setViewport(X,Z,G,W,F){X.viewport.set(Z,G,W,F),X.scissor.set(Z,G,W,F)}function _getBlurShader(X,Z,G){const W=new Float32Array(MAX_SAMPLES),F=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/Z,CUBEUV_TEXEL_HEIGHT:1/G,CUBEUV_MAX_MIP:`${X}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:F}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
	`}function WebGLCubeUVMaps(X){let Z=new WeakMap,G=null;function W(Y){if(Y&&Y.isTexture){const D=Y.mapping,Q=D===EquirectangularReflectionMapping||D===EquirectangularRefractionMapping,te=D===CubeReflectionMapping||D===CubeRefractionMapping;if(Q||te)if(Y.isRenderTargetTexture&&Y.needsPMREMUpdate===!0){Y.needsPMREMUpdate=!1;let q=Z.get(Y);return G===null&&(G=new PMREMGenerator(X)),q=Q?G.fromEquirectangular(Y,q):G.fromCubemap(Y,q),Z.set(Y,q),q.texture}else{if(Z.has(Y))return Z.get(Y).texture;{const q=Y.image;if(Q&&q&&q.height>0||te&&q&&F(q)){G===null&&(G=new PMREMGenerator(X));const ee=Q?G.fromEquirectangular(Y):G.fromCubemap(Y);return Z.set(Y,ee),Y.addEventListener("dispose",U),ee.texture}else return null}}}return Y}function F(Y){let D=0;const Q=6;for(let te=0;te<Q;te++)Y[te]!==void 0&&D++;return D===Q}function U(Y){const D=Y.target;D.removeEventListener("dispose",U);const Q=Z.get(D);Q!==void 0&&(Z.delete(D),Q.dispose())}function J(){Z=new WeakMap,G!==null&&(G.dispose(),G=null)}return{get:W,dispose:J}}function WebGLExtensions(X){const Z={};function G(W){if(Z[W]!==void 0)return Z[W];let F;switch(W){case"WEBGL_depth_texture":F=X.getExtension("WEBGL_depth_texture")||X.getExtension("MOZ_WEBGL_depth_texture")||X.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":F=X.getExtension("EXT_texture_filter_anisotropic")||X.getExtension("MOZ_EXT_texture_filter_anisotropic")||X.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":F=X.getExtension("WEBGL_compressed_texture_s3tc")||X.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||X.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":F=X.getExtension("WEBGL_compressed_texture_pvrtc")||X.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:F=X.getExtension(W)}return Z[W]=F,F}return{has:function(W){return G(W)!==null},init:function(W){W.isWebGL2?G("EXT_color_buffer_float"):(G("WEBGL_depth_texture"),G("OES_texture_float"),G("OES_texture_half_float"),G("OES_texture_half_float_linear"),G("OES_standard_derivatives"),G("OES_element_index_uint"),G("OES_vertex_array_object"),G("ANGLE_instanced_arrays")),G("OES_texture_float_linear"),G("EXT_color_buffer_half_float"),G("WEBGL_multisampled_render_to_texture")},get:function(W){const F=G(W);return F===null&&console.warn("THREE.WebGLRenderer: "+W+" extension not supported."),F}}}function WebGLGeometries(X,Z,G,W){const F={},U=new WeakMap;function J(q){const ee=q.target;ee.index!==null&&Z.remove(ee.index);for(const ne in ee.attributes)Z.remove(ee.attributes[ne]);ee.removeEventListener("dispose",J),delete F[ee.id];const ie=U.get(ee);ie&&(Z.remove(ie),U.delete(ee)),W.releaseStatesOfGeometry(ee),ee.isInstancedBufferGeometry===!0&&delete ee._maxInstanceCount,G.memory.geometries--}function Y(q,ee){return F[ee.id]===!0||(ee.addEventListener("dispose",J),F[ee.id]=!0,G.memory.geometries++),ee}function D(q){const ee=q.attributes;for(const ne in ee)Z.update(ee[ne],34962);const ie=q.morphAttributes;for(const ne in ie){const le=ie[ne];for(let ae=0,se=le.length;ae<se;ae++)Z.update(le[ae],34962)}}function Q(q){const ee=[],ie=q.index,ne=q.attributes.position;let le=0;if(ie!==null){const he=ie.array;le=ie.version;for(let pe=0,oe=he.length;pe<oe;pe+=3){const de=he[pe+0],ue=he[pe+1],ge=he[pe+2];ee.push(de,ue,ue,ge,ge,de)}}else{const he=ne.array;le=ne.version;for(let pe=0,oe=he.length/3-1;pe<oe;pe+=3){const de=pe+0,ue=pe+1,ge=pe+2;ee.push(de,ue,ue,ge,ge,de)}}const ae=new(arrayNeedsUint32(ee)?Uint32BufferAttribute:Uint16BufferAttribute)(ee,1);ae.version=le;const se=U.get(q);se&&Z.remove(se),U.set(q,ae)}function te(q){const ee=U.get(q);if(ee){const ie=q.index;ie!==null&&ee.version<ie.version&&Q(q)}else Q(q);return U.get(q)}return{get:Y,update:D,getWireframeAttribute:te}}function WebGLIndexedBufferRenderer(X,Z,G,W){const F=W.isWebGL2;let U;function J(ee){U=ee}let Y,D;function Q(ee){Y=ee.type,D=ee.bytesPerElement}function te(ee,ie){X.drawElements(U,ie,Y,ee*D),G.update(ie,U,1)}function q(ee,ie,ne){if(ne===0)return;let le,ae;if(F)le=X,ae="drawElementsInstanced";else if(le=Z.get("ANGLE_instanced_arrays"),ae="drawElementsInstancedANGLE",le===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}le[ae](U,ie,Y,ee*D,ne),G.update(ie,U,ne)}this.setMode=J,this.setIndex=Q,this.render=te,this.renderInstances=q}function WebGLInfo(X){const Z={geometries:0,textures:0},G={frame:0,calls:0,triangles:0,points:0,lines:0};function W(U,J,Y){switch(G.calls++,J){case 4:G.triangles+=Y*(U/3);break;case 1:G.lines+=Y*(U/2);break;case 3:G.lines+=Y*(U-1);break;case 2:G.lines+=Y*U;break;case 0:G.points+=Y*U;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",J);break}}function F(){G.frame++,G.calls=0,G.triangles=0,G.points=0,G.lines=0}return{memory:Z,render:G,programs:null,autoReset:!0,reset:F,update:W}}function numericalSort(X,Z){return X[0]-Z[0]}function absNumericalSort(X,Z){return Math.abs(Z[1])-Math.abs(X[1])}function WebGLMorphtargets(X,Z,G){const W={},F=new Float32Array(8),U=new WeakMap,J=new Vector4,Y=[];for(let Q=0;Q<8;Q++)Y[Q]=[Q,0];function D(Q,te,q){const ee=Q.morphTargetInfluences;if(Z.isWebGL2===!0){const ie=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ne=ie!==void 0?ie.length:0;let le=U.get(te);if(le===void 0||le.count!==ne){let re=function(){Ve.dispose(),U.delete(te),te.removeEventListener("dispose",re)};le!==void 0&&le.texture.dispose();const he=te.morphAttributes.position!==void 0,pe=te.morphAttributes.normal!==void 0,oe=te.morphAttributes.color!==void 0,de=te.morphAttributes.position||[],ue=te.morphAttributes.normal||[],ge=te.morphAttributes.color||[];let ve=0;he===!0&&(ve=1),pe===!0&&(ve=2),oe===!0&&(ve=3);let fe=te.attributes.position.count*ve,Xe=1;fe>Z.maxTextureSize&&(Xe=Math.ceil(fe/Z.maxTextureSize),fe=Z.maxTextureSize);const Ze=new Float32Array(fe*Xe*4*ne),Ve=new DataArrayTexture(Ze,fe,Xe,ne);Ve.type=FloatType,Ve.needsUpdate=!0;const be=ve*4;for(let ye=0;ye<ne;ye++){const we=de[ye],We=ue[ye],Se=ge[ye],Le=fe*Xe*4*ye;for(let Ne=0;Ne<we.count;Ne++){const xe=Ne*be;he===!0&&(J.fromBufferAttribute(we,Ne),Ze[Le+xe+0]=J.x,Ze[Le+xe+1]=J.y,Ze[Le+xe+2]=J.z,Ze[Le+xe+3]=0),pe===!0&&(J.fromBufferAttribute(We,Ne),Ze[Le+xe+4]=J.x,Ze[Le+xe+5]=J.y,Ze[Le+xe+6]=J.z,Ze[Le+xe+7]=0),oe===!0&&(J.fromBufferAttribute(Se,Ne),Ze[Le+xe+8]=J.x,Ze[Le+xe+9]=J.y,Ze[Le+xe+10]=J.z,Ze[Le+xe+11]=Se.itemSize===4?J.w:1)}}le={count:ne,texture:Ve,size:new Vector2(fe,Xe)},U.set(te,le),te.addEventListener("dispose",re)}let ae=0;for(let he=0;he<ee.length;he++)ae+=ee[he];const se=te.morphTargetsRelative?1:1-ae;q.getUniforms().setValue(X,"morphTargetBaseInfluence",se),q.getUniforms().setValue(X,"morphTargetInfluences",ee),q.getUniforms().setValue(X,"morphTargetsTexture",le.texture,G),q.getUniforms().setValue(X,"morphTargetsTextureSize",le.size)}else{const ie=ee===void 0?0:ee.length;let ne=W[te.id];if(ne===void 0||ne.length!==ie){ne=[];for(let pe=0;pe<ie;pe++)ne[pe]=[pe,0];W[te.id]=ne}for(let pe=0;pe<ie;pe++){const oe=ne[pe];oe[0]=pe,oe[1]=ee[pe]}ne.sort(absNumericalSort);for(let pe=0;pe<8;pe++)pe<ie&&ne[pe][1]?(Y[pe][0]=ne[pe][0],Y[pe][1]=ne[pe][1]):(Y[pe][0]=Number.MAX_SAFE_INTEGER,Y[pe][1]=0);Y.sort(numericalSort);const le=te.morphAttributes.position,ae=te.morphAttributes.normal;let se=0;for(let pe=0;pe<8;pe++){const oe=Y[pe],de=oe[0],ue=oe[1];de!==Number.MAX_SAFE_INTEGER&&ue?(le&&te.getAttribute("morphTarget"+pe)!==le[de]&&te.setAttribute("morphTarget"+pe,le[de]),ae&&te.getAttribute("morphNormal"+pe)!==ae[de]&&te.setAttribute("morphNormal"+pe,ae[de]),F[pe]=ue,se+=ue):(le&&te.hasAttribute("morphTarget"+pe)===!0&&te.deleteAttribute("morphTarget"+pe),ae&&te.hasAttribute("morphNormal"+pe)===!0&&te.deleteAttribute("morphNormal"+pe),F[pe]=0)}const he=te.morphTargetsRelative?1:1-se;q.getUniforms().setValue(X,"morphTargetBaseInfluence",he),q.getUniforms().setValue(X,"morphTargetInfluences",F)}}return{update:D}}function WebGLObjects(X,Z,G,W){let F=new WeakMap;function U(D){const Q=W.render.frame,te=D.geometry,q=Z.get(D,te);return F.get(q)!==Q&&(Z.update(q),F.set(q,Q)),D.isInstancedMesh&&(D.hasEventListener("dispose",Y)===!1&&D.addEventListener("dispose",Y),G.update(D.instanceMatrix,34962),D.instanceColor!==null&&G.update(D.instanceColor,34962)),q}function J(){F=new WeakMap}function Y(D){const Q=D.target;Q.removeEventListener("dispose",Y),G.remove(Q.instanceMatrix),Q.instanceColor!==null&&G.remove(Q.instanceColor)}return{update:U,dispose:J}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(X,Z,G){const W=X[0];if(W<=0||W>0)return X;const F=Z*G;let U=arrayCacheF32[F];if(U===void 0&&(U=new Float32Array(F),arrayCacheF32[F]=U),Z!==0){W.toArray(U,0);for(let J=1,Y=0;J!==Z;++J)Y+=G,X[J].toArray(U,Y)}return U}function arraysEqual$1(X,Z){if(X.length!==Z.length)return!1;for(let G=0,W=X.length;G<W;G++)if(X[G]!==Z[G])return!1;return!0}function copyArray(X,Z){for(let G=0,W=Z.length;G<W;G++)X[G]=Z[G]}function allocTexUnits(X,Z){let G=arrayCacheI32[Z];G===void 0&&(G=new Int32Array(Z),arrayCacheI32[Z]=G);for(let W=0;W!==Z;++W)G[W]=X.allocateTextureUnit();return G}function setValueV1f(X,Z){const G=this.cache;G[0]!==Z&&(X.uniform1f(this.addr,Z),G[0]=Z)}function setValueV2f(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y)&&(X.uniform2f(this.addr,Z.x,Z.y),G[0]=Z.x,G[1]=Z.y);else{if(arraysEqual$1(G,Z))return;X.uniform2fv(this.addr,Z),copyArray(G,Z)}}function setValueV3f(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z)&&(X.uniform3f(this.addr,Z.x,Z.y,Z.z),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z);else if(Z.r!==void 0)(G[0]!==Z.r||G[1]!==Z.g||G[2]!==Z.b)&&(X.uniform3f(this.addr,Z.r,Z.g,Z.b),G[0]=Z.r,G[1]=Z.g,G[2]=Z.b);else{if(arraysEqual$1(G,Z))return;X.uniform3fv(this.addr,Z),copyArray(G,Z)}}function setValueV4f(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z||G[3]!==Z.w)&&(X.uniform4f(this.addr,Z.x,Z.y,Z.z,Z.w),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z,G[3]=Z.w);else{if(arraysEqual$1(G,Z))return;X.uniform4fv(this.addr,Z),copyArray(G,Z)}}function setValueM2(X,Z){const G=this.cache,W=Z.elements;if(W===void 0){if(arraysEqual$1(G,Z))return;X.uniformMatrix2fv(this.addr,!1,Z),copyArray(G,Z)}else{if(arraysEqual$1(G,W))return;mat2array.set(W),X.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(G,W)}}function setValueM3(X,Z){const G=this.cache,W=Z.elements;if(W===void 0){if(arraysEqual$1(G,Z))return;X.uniformMatrix3fv(this.addr,!1,Z),copyArray(G,Z)}else{if(arraysEqual$1(G,W))return;mat3array.set(W),X.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(G,W)}}function setValueM4(X,Z){const G=this.cache,W=Z.elements;if(W===void 0){if(arraysEqual$1(G,Z))return;X.uniformMatrix4fv(this.addr,!1,Z),copyArray(G,Z)}else{if(arraysEqual$1(G,W))return;mat4array.set(W),X.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(G,W)}}function setValueV1i(X,Z){const G=this.cache;G[0]!==Z&&(X.uniform1i(this.addr,Z),G[0]=Z)}function setValueV2i(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y)&&(X.uniform2i(this.addr,Z.x,Z.y),G[0]=Z.x,G[1]=Z.y);else{if(arraysEqual$1(G,Z))return;X.uniform2iv(this.addr,Z),copyArray(G,Z)}}function setValueV3i(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z)&&(X.uniform3i(this.addr,Z.x,Z.y,Z.z),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z);else{if(arraysEqual$1(G,Z))return;X.uniform3iv(this.addr,Z),copyArray(G,Z)}}function setValueV4i(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z||G[3]!==Z.w)&&(X.uniform4i(this.addr,Z.x,Z.y,Z.z,Z.w),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z,G[3]=Z.w);else{if(arraysEqual$1(G,Z))return;X.uniform4iv(this.addr,Z),copyArray(G,Z)}}function setValueV1ui(X,Z){const G=this.cache;G[0]!==Z&&(X.uniform1ui(this.addr,Z),G[0]=Z)}function setValueV2ui(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y)&&(X.uniform2ui(this.addr,Z.x,Z.y),G[0]=Z.x,G[1]=Z.y);else{if(arraysEqual$1(G,Z))return;X.uniform2uiv(this.addr,Z),copyArray(G,Z)}}function setValueV3ui(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z)&&(X.uniform3ui(this.addr,Z.x,Z.y,Z.z),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z);else{if(arraysEqual$1(G,Z))return;X.uniform3uiv(this.addr,Z),copyArray(G,Z)}}function setValueV4ui(X,Z){const G=this.cache;if(Z.x!==void 0)(G[0]!==Z.x||G[1]!==Z.y||G[2]!==Z.z||G[3]!==Z.w)&&(X.uniform4ui(this.addr,Z.x,Z.y,Z.z,Z.w),G[0]=Z.x,G[1]=Z.y,G[2]=Z.z,G[3]=Z.w);else{if(arraysEqual$1(G,Z))return;X.uniform4uiv(this.addr,Z),copyArray(G,Z)}}function setValueT1(X,Z,G){const W=this.cache,F=G.allocateTextureUnit();W[0]!==F&&(X.uniform1i(this.addr,F),W[0]=F),G.setTexture2D(Z||emptyTexture,F)}function setValueT3D1(X,Z,G){const W=this.cache,F=G.allocateTextureUnit();W[0]!==F&&(X.uniform1i(this.addr,F),W[0]=F),G.setTexture3D(Z||empty3dTexture,F)}function setValueT6(X,Z,G){const W=this.cache,F=G.allocateTextureUnit();W[0]!==F&&(X.uniform1i(this.addr,F),W[0]=F),G.setTextureCube(Z||emptyCubeTexture,F)}function setValueT2DArray1(X,Z,G){const W=this.cache,F=G.allocateTextureUnit();W[0]!==F&&(X.uniform1i(this.addr,F),W[0]=F),G.setTexture2DArray(Z||emptyArrayTexture,F)}function getSingularSetter(X){switch(X){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(X,Z){X.uniform1fv(this.addr,Z)}function setValueV2fArray(X,Z){const G=flatten(Z,this.size,2);X.uniform2fv(this.addr,G)}function setValueV3fArray(X,Z){const G=flatten(Z,this.size,3);X.uniform3fv(this.addr,G)}function setValueV4fArray(X,Z){const G=flatten(Z,this.size,4);X.uniform4fv(this.addr,G)}function setValueM2Array(X,Z){const G=flatten(Z,this.size,4);X.uniformMatrix2fv(this.addr,!1,G)}function setValueM3Array(X,Z){const G=flatten(Z,this.size,9);X.uniformMatrix3fv(this.addr,!1,G)}function setValueM4Array(X,Z){const G=flatten(Z,this.size,16);X.uniformMatrix4fv(this.addr,!1,G)}function setValueV1iArray(X,Z){X.uniform1iv(this.addr,Z)}function setValueV2iArray(X,Z){X.uniform2iv(this.addr,Z)}function setValueV3iArray(X,Z){X.uniform3iv(this.addr,Z)}function setValueV4iArray(X,Z){X.uniform4iv(this.addr,Z)}function setValueV1uiArray(X,Z){X.uniform1uiv(this.addr,Z)}function setValueV2uiArray(X,Z){X.uniform2uiv(this.addr,Z)}function setValueV3uiArray(X,Z){X.uniform3uiv(this.addr,Z)}function setValueV4uiArray(X,Z){X.uniform4uiv(this.addr,Z)}function setValueT1Array(X,Z,G){const W=this.cache,F=Z.length,U=allocTexUnits(G,F);arraysEqual$1(W,U)||(X.uniform1iv(this.addr,U),copyArray(W,U));for(let J=0;J!==F;++J)G.setTexture2D(Z[J]||emptyTexture,U[J])}function setValueT3DArray(X,Z,G){const W=this.cache,F=Z.length,U=allocTexUnits(G,F);arraysEqual$1(W,U)||(X.uniform1iv(this.addr,U),copyArray(W,U));for(let J=0;J!==F;++J)G.setTexture3D(Z[J]||empty3dTexture,U[J])}function setValueT6Array(X,Z,G){const W=this.cache,F=Z.length,U=allocTexUnits(G,F);arraysEqual$1(W,U)||(X.uniform1iv(this.addr,U),copyArray(W,U));for(let J=0;J!==F;++J)G.setTextureCube(Z[J]||emptyCubeTexture,U[J])}function setValueT2DArrayArray(X,Z,G){const W=this.cache,F=Z.length,U=allocTexUnits(G,F);arraysEqual$1(W,U)||(X.uniform1iv(this.addr,U),copyArray(W,U));for(let J=0;J!==F;++J)G.setTexture2DArray(Z[J]||emptyArrayTexture,U[J])}function getPureArraySetter(X){switch(X){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(Z,G,W){this.id=Z,this.addr=W,this.cache=[],this.setValue=getSingularSetter(G.type)}}class PureArrayUniform{constructor(Z,G,W){this.id=Z,this.addr=W,this.cache=[],this.size=G.size,this.setValue=getPureArraySetter(G.type)}}class StructuredUniform{constructor(Z){this.id=Z,this.seq=[],this.map={}}setValue(Z,G,W){const F=this.seq;for(let U=0,J=F.length;U!==J;++U){const Y=F[U];Y.setValue(Z,G[Y.id],W)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(X,Z){X.seq.push(Z),X.map[Z.id]=Z}function parseUniform(X,Z,G){const W=X.name,F=W.length;for(RePathPart.lastIndex=0;;){const U=RePathPart.exec(W),J=RePathPart.lastIndex;let Y=U[1];const D=U[2]==="]",Q=U[3];if(D&&(Y=Y|0),Q===void 0||Q==="["&&J+2===F){addUniform(G,Q===void 0?new SingleUniform(Y,X,Z):new PureArrayUniform(Y,X,Z));break}else{let q=G.map[Y];q===void 0&&(q=new StructuredUniform(Y),addUniform(G,q)),G=q}}}class WebGLUniforms{constructor(Z,G){this.seq=[],this.map={};const W=Z.getProgramParameter(G,35718);for(let F=0;F<W;++F){const U=Z.getActiveUniform(G,F),J=Z.getUniformLocation(G,U.name);parseUniform(U,J,this)}}setValue(Z,G,W,F){const U=this.map[G];U!==void 0&&U.setValue(Z,W,F)}setOptional(Z,G,W){const F=G[W];F!==void 0&&this.setValue(Z,W,F)}static upload(Z,G,W,F){for(let U=0,J=G.length;U!==J;++U){const Y=G[U],D=W[Y.id];D.needsUpdate!==!1&&Y.setValue(Z,D.value,F)}}static seqWithValue(Z,G){const W=[];for(let F=0,U=Z.length;F!==U;++F){const J=Z[F];J.id in G&&W.push(J)}return W}}function WebGLShader(X,Z,G){const W=X.createShader(Z);return X.shaderSource(W,G),X.compileShader(W),W}let programIdCount=0;function handleSource(X,Z){const G=X.split(`
`),W=[],F=Math.max(Z-6,0),U=Math.min(Z+6,G.length);for(let J=F;J<U;J++){const Y=J+1;W.push(`${Y===Z?">":" "} ${Y}: ${G[J]}`)}return W.join(`
`)}function getEncodingComponents(X){switch(X){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",X),["Linear","( value )"]}}function getShaderErrors(X,Z,G){const W=X.getShaderParameter(Z,35713),F=X.getShaderInfoLog(Z).trim();if(W&&F==="")return"";const U=/ERROR: 0:(\d+)/.exec(F);if(U){const J=parseInt(U[1]);return G.toUpperCase()+`

`+F+`

`+handleSource(X.getShaderSource(Z),J)}else return F}function getTexelEncodingFunction(X,Z){const G=getEncodingComponents(Z);return"vec4 "+X+"( vec4 value ) { return LinearTo"+G[0]+G[1]+"; }"}function getToneMappingFunction(X,Z){let G;switch(Z){case LinearToneMapping:G="Linear";break;case ReinhardToneMapping:G="Reinhard";break;case CineonToneMapping:G="OptimizedCineon";break;case ACESFilmicToneMapping:G="ACESFilmic";break;case CustomToneMapping:G="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Z),G="Linear"}return"vec3 "+X+"( vec3 color ) { return "+G+"ToneMapping( color ); }"}function generateExtensions(X){return[X.extensionDerivatives||X.envMapCubeUVHeight||X.bumpMap||X.normalMapTangentSpace||X.clearcoatNormalMap||X.flatShading||X.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(X.extensionFragDepth||X.logarithmicDepthBuffer)&&X.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",X.extensionDrawBuffers&&X.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(X.extensionShaderTextureLOD||X.envMap||X.transmission)&&X.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(X){const Z=[];for(const G in X){const W=X[G];W!==!1&&Z.push("#define "+G+" "+W)}return Z.join(`
`)}function fetchAttributeLocations(X,Z){const G={},W=X.getProgramParameter(Z,35721);for(let F=0;F<W;F++){const U=X.getActiveAttrib(Z,F),J=U.name;let Y=1;U.type===35674&&(Y=2),U.type===35675&&(Y=3),U.type===35676&&(Y=4),G[J]={type:U.type,location:X.getAttribLocation(Z,J),locationSize:Y}}return G}function filterEmptyLine(X){return X!==""}function replaceLightNums(X,Z){const G=Z.numSpotLightShadows+Z.numSpotLightMaps-Z.numSpotLightShadowsWithMaps;return X.replace(/NUM_DIR_LIGHTS/g,Z.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Z.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Z.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,G).replace(/NUM_RECT_AREA_LIGHTS/g,Z.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Z.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Z.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Z.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Z.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Z.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Z.numPointLightShadows)}function replaceClippingPlaneNums(X,Z){return X.replace(/NUM_CLIPPING_PLANES/g,Z.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Z.numClippingPlanes-Z.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(X){return X.replace(includePattern,includeReplacer)}function includeReplacer(X,Z){const G=ShaderChunk[Z];if(G===void 0)throw new Error("Can not resolve #include <"+Z+">");return resolveIncludes(G)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(X){return X.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(X,Z,G,W){let F="";for(let U=parseInt(Z);U<parseInt(G);U++)F+=W.replace(/\[\s*i\s*\]/g,"[ "+U+" ]").replace(/UNROLLED_LOOP_INDEX/g,U);return F}function generatePrecision(X){let Z="precision "+X.precision+` float;
precision `+X.precision+" int;";return X.precision==="highp"?Z+=`
#define HIGH_PRECISION`:X.precision==="mediump"?Z+=`
#define MEDIUM_PRECISION`:X.precision==="lowp"&&(Z+=`
#define LOW_PRECISION`),Z}function generateShadowMapTypeDefine(X){let Z="SHADOWMAP_TYPE_BASIC";return X.shadowMapType===PCFShadowMap?Z="SHADOWMAP_TYPE_PCF":X.shadowMapType===PCFSoftShadowMap?Z="SHADOWMAP_TYPE_PCF_SOFT":X.shadowMapType===VSMShadowMap&&(Z="SHADOWMAP_TYPE_VSM"),Z}function generateEnvMapTypeDefine(X){let Z="ENVMAP_TYPE_CUBE";if(X.envMap)switch(X.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:Z="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:Z="ENVMAP_TYPE_CUBE_UV";break}return Z}function generateEnvMapModeDefine(X){let Z="ENVMAP_MODE_REFLECTION";if(X.envMap)switch(X.envMapMode){case CubeRefractionMapping:Z="ENVMAP_MODE_REFRACTION";break}return Z}function generateEnvMapBlendingDefine(X){let Z="ENVMAP_BLENDING_NONE";if(X.envMap)switch(X.combine){case MultiplyOperation:Z="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:Z="ENVMAP_BLENDING_MIX";break;case AddOperation:Z="ENVMAP_BLENDING_ADD";break}return Z}function generateCubeUVSize(X){const Z=X.envMapCubeUVHeight;if(Z===null)return null;const G=Math.log2(Z)-2,W=1/Z;return{texelWidth:1/(3*Math.max(Math.pow(2,G),7*16)),texelHeight:W,maxMip:G}}function WebGLProgram(X,Z,G,W){const F=X.getContext(),U=G.defines;let J=G.vertexShader,Y=G.fragmentShader;const D=generateShadowMapTypeDefine(G),Q=generateEnvMapTypeDefine(G),te=generateEnvMapModeDefine(G),q=generateEnvMapBlendingDefine(G),ee=generateCubeUVSize(G),ie=G.isWebGL2?"":generateExtensions(G),ne=generateDefines(U),le=F.createProgram();let ae,se,he=G.glslVersion?"#version "+G.glslVersion+`
`:"";G.isRawShaderMaterial?(ae=[ne].filter(filterEmptyLine).join(`
`),ae.length>0&&(ae+=`
`),se=[ie,ne].filter(filterEmptyLine).join(`
`),se.length>0&&(se+=`
`)):(ae=[generatePrecision(G),"#define SHADER_NAME "+G.shaderName,ne,G.instancing?"#define USE_INSTANCING":"",G.instancingColor?"#define USE_INSTANCING_COLOR":"",G.useFog&&G.fog?"#define USE_FOG":"",G.useFog&&G.fogExp2?"#define FOG_EXP2":"",G.map?"#define USE_MAP":"",G.envMap?"#define USE_ENVMAP":"",G.envMap?"#define "+te:"",G.lightMap?"#define USE_LIGHTMAP":"",G.aoMap?"#define USE_AOMAP":"",G.bumpMap?"#define USE_BUMPMAP":"",G.normalMap?"#define USE_NORMALMAP":"",G.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",G.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",G.displacementMap?"#define USE_DISPLACEMENTMAP":"",G.emissiveMap?"#define USE_EMISSIVEMAP":"",G.clearcoatMap?"#define USE_CLEARCOATMAP":"",G.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",G.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",G.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",G.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",G.specularMap?"#define USE_SPECULARMAP":"",G.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",G.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",G.roughnessMap?"#define USE_ROUGHNESSMAP":"",G.metalnessMap?"#define USE_METALNESSMAP":"",G.alphaMap?"#define USE_ALPHAMAP":"",G.transmission?"#define USE_TRANSMISSION":"",G.transmissionMap?"#define USE_TRANSMISSIONMAP":"",G.thicknessMap?"#define USE_THICKNESSMAP":"",G.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",G.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",G.mapUv?"#define MAP_UV "+G.mapUv:"",G.alphaMapUv?"#define ALPHAMAP_UV "+G.alphaMapUv:"",G.lightMapUv?"#define LIGHTMAP_UV "+G.lightMapUv:"",G.aoMapUv?"#define AOMAP_UV "+G.aoMapUv:"",G.emissiveMapUv?"#define EMISSIVEMAP_UV "+G.emissiveMapUv:"",G.bumpMapUv?"#define BUMPMAP_UV "+G.bumpMapUv:"",G.normalMapUv?"#define NORMALMAP_UV "+G.normalMapUv:"",G.displacementMapUv?"#define DISPLACEMENTMAP_UV "+G.displacementMapUv:"",G.metalnessMapUv?"#define METALNESSMAP_UV "+G.metalnessMapUv:"",G.roughnessMapUv?"#define ROUGHNESSMAP_UV "+G.roughnessMapUv:"",G.clearcoatMapUv?"#define CLEARCOATMAP_UV "+G.clearcoatMapUv:"",G.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+G.clearcoatNormalMapUv:"",G.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+G.clearcoatRoughnessMapUv:"",G.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+G.iridescenceMapUv:"",G.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+G.iridescenceThicknessMapUv:"",G.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+G.sheenColorMapUv:"",G.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+G.sheenRoughnessMapUv:"",G.specularMapUv?"#define SPECULARMAP_UV "+G.specularMapUv:"",G.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+G.specularColorMapUv:"",G.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+G.specularIntensityMapUv:"",G.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+G.transmissionMapUv:"",G.thicknessMapUv?"#define THICKNESSMAP_UV "+G.thicknessMapUv:"",G.vertexTangents?"#define USE_TANGENT":"",G.vertexColors?"#define USE_COLOR":"",G.vertexAlphas?"#define USE_COLOR_ALPHA":"",G.vertexUvs2?"#define USE_UV2":"",G.pointsUvs?"#define USE_POINTS_UV":"",G.flatShading?"#define FLAT_SHADED":"",G.skinning?"#define USE_SKINNING":"",G.morphTargets?"#define USE_MORPHTARGETS":"",G.morphNormals&&G.flatShading===!1?"#define USE_MORPHNORMALS":"",G.morphColors&&G.isWebGL2?"#define USE_MORPHCOLORS":"",G.morphTargetsCount>0&&G.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",G.morphTargetsCount>0&&G.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+G.morphTextureStride:"",G.morphTargetsCount>0&&G.isWebGL2?"#define MORPHTARGETS_COUNT "+G.morphTargetsCount:"",G.doubleSided?"#define DOUBLE_SIDED":"",G.flipSided?"#define FLIP_SIDED":"",G.shadowMapEnabled?"#define USE_SHADOWMAP":"",G.shadowMapEnabled?"#define "+D:"",G.sizeAttenuation?"#define USE_SIZEATTENUATION":"",G.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",G.logarithmicDepthBuffer&&G.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),se=[ie,generatePrecision(G),"#define SHADER_NAME "+G.shaderName,ne,G.useFog&&G.fog?"#define USE_FOG":"",G.useFog&&G.fogExp2?"#define FOG_EXP2":"",G.map?"#define USE_MAP":"",G.matcap?"#define USE_MATCAP":"",G.envMap?"#define USE_ENVMAP":"",G.envMap?"#define "+Q:"",G.envMap?"#define "+te:"",G.envMap?"#define "+q:"",ee?"#define CUBEUV_TEXEL_WIDTH "+ee.texelWidth:"",ee?"#define CUBEUV_TEXEL_HEIGHT "+ee.texelHeight:"",ee?"#define CUBEUV_MAX_MIP "+ee.maxMip+".0":"",G.lightMap?"#define USE_LIGHTMAP":"",G.aoMap?"#define USE_AOMAP":"",G.bumpMap?"#define USE_BUMPMAP":"",G.normalMap?"#define USE_NORMALMAP":"",G.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",G.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",G.emissiveMap?"#define USE_EMISSIVEMAP":"",G.clearcoat?"#define USE_CLEARCOAT":"",G.clearcoatMap?"#define USE_CLEARCOATMAP":"",G.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",G.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",G.iridescence?"#define USE_IRIDESCENCE":"",G.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",G.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",G.specularMap?"#define USE_SPECULARMAP":"",G.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",G.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",G.roughnessMap?"#define USE_ROUGHNESSMAP":"",G.metalnessMap?"#define USE_METALNESSMAP":"",G.alphaMap?"#define USE_ALPHAMAP":"",G.alphaTest?"#define USE_ALPHATEST":"",G.sheen?"#define USE_SHEEN":"",G.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",G.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",G.transmission?"#define USE_TRANSMISSION":"",G.transmissionMap?"#define USE_TRANSMISSIONMAP":"",G.thicknessMap?"#define USE_THICKNESSMAP":"",G.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",G.vertexTangents?"#define USE_TANGENT":"",G.vertexColors||G.instancingColor?"#define USE_COLOR":"",G.vertexAlphas?"#define USE_COLOR_ALPHA":"",G.vertexUvs2?"#define USE_UV2":"",G.pointsUvs?"#define USE_POINTS_UV":"",G.gradientMap?"#define USE_GRADIENTMAP":"",G.flatShading?"#define FLAT_SHADED":"",G.doubleSided?"#define DOUBLE_SIDED":"",G.flipSided?"#define FLIP_SIDED":"",G.shadowMapEnabled?"#define USE_SHADOWMAP":"",G.shadowMapEnabled?"#define "+D:"",G.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",G.useLegacyLights?"#define LEGACY_LIGHTS":"",G.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",G.logarithmicDepthBuffer&&G.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",G.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",G.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",G.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",G.toneMapping):"",G.dithering?"#define DITHERING":"",G.opaque?"#define OPAQUE":"",ShaderChunk.encodings_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",G.outputEncoding),G.useDepthPacking?"#define DEPTH_PACKING "+G.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),J=resolveIncludes(J),J=replaceLightNums(J,G),J=replaceClippingPlaneNums(J,G),Y=resolveIncludes(Y),Y=replaceLightNums(Y,G),Y=replaceClippingPlaneNums(Y,G),J=unrollLoops(J),Y=unrollLoops(Y),G.isWebGL2&&G.isRawShaderMaterial!==!0&&(he=`#version 300 es
`,ae=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+ae,se=["#define varying in",G.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",G.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+se);const pe=he+ae+J,oe=he+se+Y,de=WebGLShader(F,35633,pe),ue=WebGLShader(F,35632,oe);if(F.attachShader(le,de),F.attachShader(le,ue),G.index0AttributeName!==void 0?F.bindAttribLocation(le,0,G.index0AttributeName):G.morphTargets===!0&&F.bindAttribLocation(le,0,"position"),F.linkProgram(le),X.debug.checkShaderErrors){const fe=F.getProgramInfoLog(le).trim(),Xe=F.getShaderInfoLog(de).trim(),Ze=F.getShaderInfoLog(ue).trim();let Ve=!0,be=!0;if(F.getProgramParameter(le,35714)===!1)if(Ve=!1,typeof X.debug.onShaderError=="function")X.debug.onShaderError(F,le,de,ue);else{const re=getShaderErrors(F,de,"vertex"),ye=getShaderErrors(F,ue,"fragment");console.error("THREE.WebGLProgram: Shader Error "+F.getError()+" - VALIDATE_STATUS "+F.getProgramParameter(le,35715)+`

Program Info Log: `+fe+`
`+re+`
`+ye)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(Xe===""||Ze==="")&&(be=!1);be&&(this.diagnostics={runnable:Ve,programLog:fe,vertexShader:{log:Xe,prefix:ae},fragmentShader:{log:Ze,prefix:se}})}F.deleteShader(de),F.deleteShader(ue);let ge;this.getUniforms=function(){return ge===void 0&&(ge=new WebGLUniforms(F,le)),ge};let ve;return this.getAttributes=function(){return ve===void 0&&(ve=fetchAttributeLocations(F,le)),ve},this.destroy=function(){W.releaseStatesOfProgram(this),F.deleteProgram(le),this.program=void 0},this.name=G.shaderName,this.id=programIdCount++,this.cacheKey=Z,this.usedTimes=1,this.program=le,this.vertexShader=de,this.fragmentShader=ue,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(Z){const G=Z.vertexShader,W=Z.fragmentShader,F=this._getShaderStage(G),U=this._getShaderStage(W),J=this._getShaderCacheForMaterial(Z);return J.has(F)===!1&&(J.add(F),F.usedTimes++),J.has(U)===!1&&(J.add(U),U.usedTimes++),this}remove(Z){const G=this.materialCache.get(Z);for(const W of G)W.usedTimes--,W.usedTimes===0&&this.shaderCache.delete(W.code);return this.materialCache.delete(Z),this}getVertexShaderID(Z){return this._getShaderStage(Z.vertexShader).id}getFragmentShaderID(Z){return this._getShaderStage(Z.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(Z){const G=this.materialCache;let W=G.get(Z);return W===void 0&&(W=new Set,G.set(Z,W)),W}_getShaderStage(Z){const G=this.shaderCache;let W=G.get(Z);return W===void 0&&(W=new WebGLShaderStage(Z),G.set(Z,W)),W}}class WebGLShaderStage{constructor(Z){this.id=_id++,this.code=Z,this.usedTimes=0}}function WebGLPrograms(X,Z,G,W,F,U,J){const Y=new Layers,D=new WebGLShaderCache,Q=[],te=F.isWebGL2,q=F.logarithmicDepthBuffer,ee=F.vertexTextures;let ie=F.precision;const ne={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function le(fe){return fe===1?"uv2":"uv"}function ae(fe,Xe,Ze,Ve,be){const re=Ve.fog,ye=be.geometry,we=fe.isMeshStandardMaterial?Ve.environment:null,We=(fe.isMeshStandardMaterial?G:Z).get(fe.envMap||we),Se=We&&We.mapping===CubeUVReflectionMapping?We.image.height:null,Le=ne[fe.type];fe.precision!==null&&(ie=F.getMaxPrecision(fe.precision),ie!==fe.precision&&console.warn("THREE.WebGLProgram.getParameters:",fe.precision,"not supported, using",ie,"instead."));const Ne=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,xe=Ne!==void 0?Ne.length:0;let ke=0;ye.morphAttributes.position!==void 0&&(ke=1),ye.morphAttributes.normal!==void 0&&(ke=2),ye.morphAttributes.color!==void 0&&(ke=3);let Ce,Ee,et,De;if(Le){const Lt=ShaderLib[Le];Ce=Lt.vertexShader,Ee=Lt.fragmentShader}else Ce=fe.vertexShader,Ee=fe.fragmentShader,D.update(fe),et=D.getVertexShaderID(fe),De=D.getFragmentShaderID(fe);const Je=X.getRenderTarget(),st=be.isInstancedMesh===!0,ct=!!fe.map,it=!!fe.matcap,dt=!!We,Be=!!fe.aoMap,Te=!!fe.lightMap,Ue=!!fe.bumpMap,Ye=!!fe.normalMap,je=!!fe.displacementMap,ze=!!fe.emissiveMap,Pe=!!fe.metalnessMap,Ae=!!fe.roughnessMap,Ke=fe.clearcoat>0,_e=fe.iridescence>0,Me=fe.sheen>0,Ie=fe.transmission>0,qe=Ke&&!!fe.clearcoatMap,at=Ke&&!!fe.clearcoatNormalMap,rt=Ke&&!!fe.clearcoatRoughnessMap,Ge=_e&&!!fe.iridescenceMap,ce=_e&&!!fe.iridescenceThicknessMap,me=Me&&!!fe.sheenColorMap,Re=Me&&!!fe.sheenRoughnessMap,Fe=!!fe.specularMap,He=!!fe.specularColorMap,$e=!!fe.specularIntensityMap,pt=Ie&&!!fe.transmissionMap,Gt=Ie&&!!fe.thicknessMap,Xt=!!fe.gradientMap,Rt=!!fe.alphaMap,Wt=fe.alphaTest>0,ot=!!fe.extensions,ht=!!ye.attributes.uv2;return{isWebGL2:te,shaderID:Le,shaderName:fe.type,vertexShader:Ce,fragmentShader:Ee,defines:fe.defines,customVertexShaderID:et,customFragmentShaderID:De,isRawShaderMaterial:fe.isRawShaderMaterial===!0,glslVersion:fe.glslVersion,precision:ie,instancing:st,instancingColor:st&&be.instanceColor!==null,supportsVertexTextures:ee,outputEncoding:Je===null?X.outputEncoding:Je.isXRRenderTarget===!0?Je.texture.encoding:LinearEncoding,map:ct,matcap:it,envMap:dt,envMapMode:dt&&We.mapping,envMapCubeUVHeight:Se,aoMap:Be,lightMap:Te,bumpMap:Ue,normalMap:Ye,displacementMap:ee&&je,emissiveMap:ze,normalMapObjectSpace:Ye&&fe.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:Ye&&fe.normalMapType===TangentSpaceNormalMap,decodeVideoTexture:ct&&fe.map.isVideoTexture===!0&&fe.map.encoding===sRGBEncoding,metalnessMap:Pe,roughnessMap:Ae,clearcoat:Ke,clearcoatMap:qe,clearcoatNormalMap:at,clearcoatRoughnessMap:rt,iridescence:_e,iridescenceMap:Ge,iridescenceThicknessMap:ce,sheen:Me,sheenColorMap:me,sheenRoughnessMap:Re,specularMap:Fe,specularColorMap:He,specularIntensityMap:$e,transmission:Ie,transmissionMap:pt,thicknessMap:Gt,gradientMap:Xt,opaque:fe.transparent===!1&&fe.blending===NormalBlending,alphaMap:Rt,alphaTest:Wt,combine:fe.combine,mapUv:ct&&le(fe.map.channel),aoMapUv:Be&&le(fe.aoMap.channel),lightMapUv:Te&&le(fe.lightMap.channel),bumpMapUv:Ue&&le(fe.bumpMap.channel),normalMapUv:Ye&&le(fe.normalMap.channel),displacementMapUv:je&&le(fe.displacementMap.channel),emissiveMapUv:ze&&le(fe.emissiveMap.channel),metalnessMapUv:Pe&&le(fe.metalnessMap.channel),roughnessMapUv:Ae&&le(fe.roughnessMap.channel),clearcoatMapUv:qe&&le(fe.clearcoatMap.channel),clearcoatNormalMapUv:at&&le(fe.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&le(fe.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&le(fe.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&le(fe.iridescenceThicknessMap.channel),sheenColorMapUv:me&&le(fe.sheenColorMap.channel),sheenRoughnessMapUv:Re&&le(fe.sheenRoughnessMap.channel),specularMapUv:Fe&&le(fe.specularMap.channel),specularColorMapUv:He&&le(fe.specularColorMap.channel),specularIntensityMapUv:$e&&le(fe.specularIntensityMap.channel),transmissionMapUv:pt&&le(fe.transmissionMap.channel),thicknessMapUv:Gt&&le(fe.thicknessMap.channel),alphaMapUv:Rt&&le(fe.alphaMap.channel),vertexTangents:Ye&&!!ye.attributes.tangent,vertexColors:fe.vertexColors,vertexAlphas:fe.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,vertexUvs2:ht,pointsUvs:be.isPoints===!0&&!!ye.attributes.uv&&(ct||Rt),fog:!!re,useFog:fe.fog===!0,fogExp2:re&&re.isFogExp2,flatShading:fe.flatShading===!0,sizeAttenuation:fe.sizeAttenuation===!0,logarithmicDepthBuffer:q,skinning:be.isSkinnedMesh===!0,morphTargets:ye.morphAttributes.position!==void 0,morphNormals:ye.morphAttributes.normal!==void 0,morphColors:ye.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ke,numDirLights:Xe.directional.length,numPointLights:Xe.point.length,numSpotLights:Xe.spot.length,numSpotLightMaps:Xe.spotLightMap.length,numRectAreaLights:Xe.rectArea.length,numHemiLights:Xe.hemi.length,numDirLightShadows:Xe.directionalShadowMap.length,numPointLightShadows:Xe.pointShadowMap.length,numSpotLightShadows:Xe.spotShadowMap.length,numSpotLightShadowsWithMaps:Xe.numSpotLightShadowsWithMaps,numClippingPlanes:J.numPlanes,numClipIntersection:J.numIntersection,dithering:fe.dithering,shadowMapEnabled:X.shadowMap.enabled&&Ze.length>0,shadowMapType:X.shadowMap.type,toneMapping:fe.toneMapped?X.toneMapping:NoToneMapping,useLegacyLights:X.useLegacyLights,premultipliedAlpha:fe.premultipliedAlpha,doubleSided:fe.side===DoubleSide,flipSided:fe.side===BackSide,useDepthPacking:fe.depthPacking>=0,depthPacking:fe.depthPacking||0,index0AttributeName:fe.index0AttributeName,extensionDerivatives:ot&&fe.extensions.derivatives===!0,extensionFragDepth:ot&&fe.extensions.fragDepth===!0,extensionDrawBuffers:ot&&fe.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&fe.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:te||W.has("EXT_frag_depth"),rendererExtensionDrawBuffers:te||W.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:te||W.has("EXT_shader_texture_lod"),customProgramCacheKey:fe.customProgramCacheKey()}}function se(fe){const Xe=[];if(fe.shaderID?Xe.push(fe.shaderID):(Xe.push(fe.customVertexShaderID),Xe.push(fe.customFragmentShaderID)),fe.defines!==void 0)for(const Ze in fe.defines)Xe.push(Ze),Xe.push(fe.defines[Ze]);return fe.isRawShaderMaterial===!1&&(he(Xe,fe),pe(Xe,fe),Xe.push(X.outputEncoding)),Xe.push(fe.customProgramCacheKey),Xe.join()}function he(fe,Xe){fe.push(Xe.precision),fe.push(Xe.outputEncoding),fe.push(Xe.envMapMode),fe.push(Xe.envMapCubeUVHeight),fe.push(Xe.mapUv),fe.push(Xe.alphaMapUv),fe.push(Xe.lightMapUv),fe.push(Xe.aoMapUv),fe.push(Xe.bumpMapUv),fe.push(Xe.normalMapUv),fe.push(Xe.displacementMapUv),fe.push(Xe.emissiveMapUv),fe.push(Xe.metalnessMapUv),fe.push(Xe.roughnessMapUv),fe.push(Xe.clearcoatMapUv),fe.push(Xe.clearcoatNormalMapUv),fe.push(Xe.clearcoatRoughnessMapUv),fe.push(Xe.iridescenceMapUv),fe.push(Xe.iridescenceThicknessMapUv),fe.push(Xe.sheenColorMapUv),fe.push(Xe.sheenRoughnessMapUv),fe.push(Xe.specularMapUv),fe.push(Xe.specularColorMapUv),fe.push(Xe.specularIntensityMapUv),fe.push(Xe.transmissionMapUv),fe.push(Xe.thicknessMapUv),fe.push(Xe.combine),fe.push(Xe.fogExp2),fe.push(Xe.sizeAttenuation),fe.push(Xe.morphTargetsCount),fe.push(Xe.morphAttributeCount),fe.push(Xe.numDirLights),fe.push(Xe.numPointLights),fe.push(Xe.numSpotLights),fe.push(Xe.numSpotLightMaps),fe.push(Xe.numHemiLights),fe.push(Xe.numRectAreaLights),fe.push(Xe.numDirLightShadows),fe.push(Xe.numPointLightShadows),fe.push(Xe.numSpotLightShadows),fe.push(Xe.numSpotLightShadowsWithMaps),fe.push(Xe.shadowMapType),fe.push(Xe.toneMapping),fe.push(Xe.numClippingPlanes),fe.push(Xe.numClipIntersection),fe.push(Xe.depthPacking)}function pe(fe,Xe){Y.disableAll(),Xe.isWebGL2&&Y.enable(0),Xe.supportsVertexTextures&&Y.enable(1),Xe.instancing&&Y.enable(2),Xe.instancingColor&&Y.enable(3),Xe.matcap&&Y.enable(4),Xe.envMap&&Y.enable(5),Xe.normalMapObjectSpace&&Y.enable(6),Xe.normalMapTangentSpace&&Y.enable(7),Xe.clearcoat&&Y.enable(8),Xe.iridescence&&Y.enable(9),Xe.alphaTest&&Y.enable(10),Xe.vertexColors&&Y.enable(11),Xe.vertexAlphas&&Y.enable(12),Xe.vertexUvs2&&Y.enable(13),Xe.vertexTangents&&Y.enable(14),fe.push(Y.mask),Y.disableAll(),Xe.fog&&Y.enable(0),Xe.useFog&&Y.enable(1),Xe.flatShading&&Y.enable(2),Xe.logarithmicDepthBuffer&&Y.enable(3),Xe.skinning&&Y.enable(4),Xe.morphTargets&&Y.enable(5),Xe.morphNormals&&Y.enable(6),Xe.morphColors&&Y.enable(7),Xe.premultipliedAlpha&&Y.enable(8),Xe.shadowMapEnabled&&Y.enable(9),Xe.useLegacyLights&&Y.enable(10),Xe.doubleSided&&Y.enable(11),Xe.flipSided&&Y.enable(12),Xe.useDepthPacking&&Y.enable(13),Xe.dithering&&Y.enable(14),Xe.transmission&&Y.enable(15),Xe.sheen&&Y.enable(16),Xe.decodeVideoTexture&&Y.enable(17),Xe.opaque&&Y.enable(18),Xe.pointsUvs&&Y.enable(19),fe.push(Y.mask)}function oe(fe){const Xe=ne[fe.type];let Ze;if(Xe){const Ve=ShaderLib[Xe];Ze=UniformsUtils.clone(Ve.uniforms)}else Ze=fe.uniforms;return Ze}function de(fe,Xe){let Ze;for(let Ve=0,be=Q.length;Ve<be;Ve++){const re=Q[Ve];if(re.cacheKey===Xe){Ze=re,++Ze.usedTimes;break}}return Ze===void 0&&(Ze=new WebGLProgram(X,Xe,fe,U),Q.push(Ze)),Ze}function ue(fe){if(--fe.usedTimes===0){const Xe=Q.indexOf(fe);Q[Xe]=Q[Q.length-1],Q.pop(),fe.destroy()}}function ge(fe){D.remove(fe)}function ve(){D.dispose()}return{getParameters:ae,getProgramCacheKey:se,getUniforms:oe,acquireProgram:de,releaseProgram:ue,releaseShaderCache:ge,programs:Q,dispose:ve}}function WebGLProperties(){let X=new WeakMap;function Z(U){let J=X.get(U);return J===void 0&&(J={},X.set(U,J)),J}function G(U){X.delete(U)}function W(U,J,Y){X.get(U)[J]=Y}function F(){X=new WeakMap}return{get:Z,remove:G,update:W,dispose:F}}function painterSortStable(X,Z){return X.groupOrder!==Z.groupOrder?X.groupOrder-Z.groupOrder:X.renderOrder!==Z.renderOrder?X.renderOrder-Z.renderOrder:X.material.id!==Z.material.id?X.material.id-Z.material.id:X.z!==Z.z?X.z-Z.z:X.id-Z.id}function reversePainterSortStable(X,Z){return X.groupOrder!==Z.groupOrder?X.groupOrder-Z.groupOrder:X.renderOrder!==Z.renderOrder?X.renderOrder-Z.renderOrder:X.z!==Z.z?Z.z-X.z:X.id-Z.id}function WebGLRenderList(){const X=[];let Z=0;const G=[],W=[],F=[];function U(){Z=0,G.length=0,W.length=0,F.length=0}function J(q,ee,ie,ne,le,ae){let se=X[Z];return se===void 0?(se={id:q.id,object:q,geometry:ee,material:ie,groupOrder:ne,renderOrder:q.renderOrder,z:le,group:ae},X[Z]=se):(se.id=q.id,se.object=q,se.geometry=ee,se.material=ie,se.groupOrder=ne,se.renderOrder=q.renderOrder,se.z=le,se.group=ae),Z++,se}function Y(q,ee,ie,ne,le,ae){const se=J(q,ee,ie,ne,le,ae);ie.transmission>0?W.push(se):ie.transparent===!0?F.push(se):G.push(se)}function D(q,ee,ie,ne,le,ae){const se=J(q,ee,ie,ne,le,ae);ie.transmission>0?W.unshift(se):ie.transparent===!0?F.unshift(se):G.unshift(se)}function Q(q,ee){G.length>1&&G.sort(q||painterSortStable),W.length>1&&W.sort(ee||reversePainterSortStable),F.length>1&&F.sort(ee||reversePainterSortStable)}function te(){for(let q=Z,ee=X.length;q<ee;q++){const ie=X[q];if(ie.id===null)break;ie.id=null,ie.object=null,ie.geometry=null,ie.material=null,ie.group=null}}return{opaque:G,transmissive:W,transparent:F,init:U,push:Y,unshift:D,finish:te,sort:Q}}function WebGLRenderLists(){let X=new WeakMap;function Z(W,F){const U=X.get(W);let J;return U===void 0?(J=new WebGLRenderList,X.set(W,[J])):F>=U.length?(J=new WebGLRenderList,U.push(J)):J=U[F],J}function G(){X=new WeakMap}return{get:Z,dispose:G}}function UniformsCache(){const X={};return{get:function(Z){if(X[Z.id]!==void 0)return X[Z.id];let G;switch(Z.type){case"DirectionalLight":G={direction:new Vector3,color:new Color};break;case"SpotLight":G={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":G={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":G={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":G={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return X[Z.id]=G,G}}}function ShadowUniformsCache(){const X={};return{get:function(Z){if(X[Z.id]!==void 0)return X[Z.id];let G;switch(Z.type){case"DirectionalLight":G={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":G={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":G={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return X[Z.id]=G,G}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(X,Z){return(Z.castShadow?2:0)-(X.castShadow?2:0)+(Z.map?1:0)-(X.map?1:0)}function WebGLLights(X,Z){const G=new UniformsCache,W=ShadowUniformsCache(),F={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let te=0;te<9;te++)F.probe.push(new Vector3);const U=new Vector3,J=new Matrix4,Y=new Matrix4;function D(te,q){let ee=0,ie=0,ne=0;for(let Ze=0;Ze<9;Ze++)F.probe[Ze].set(0,0,0);let le=0,ae=0,se=0,he=0,pe=0,oe=0,de=0,ue=0,ge=0,ve=0;te.sort(shadowCastingAndTexturingLightsFirst);const fe=q===!0?Math.PI:1;for(let Ze=0,Ve=te.length;Ze<Ve;Ze++){const be=te[Ze],re=be.color,ye=be.intensity,we=be.distance,We=be.shadow&&be.shadow.map?be.shadow.map.texture:null;if(be.isAmbientLight)ee+=re.r*ye*fe,ie+=re.g*ye*fe,ne+=re.b*ye*fe;else if(be.isLightProbe)for(let Se=0;Se<9;Se++)F.probe[Se].addScaledVector(be.sh.coefficients[Se],ye);else if(be.isDirectionalLight){const Se=G.get(be);if(Se.color.copy(be.color).multiplyScalar(be.intensity*fe),be.castShadow){const Le=be.shadow,Ne=W.get(be);Ne.shadowBias=Le.bias,Ne.shadowNormalBias=Le.normalBias,Ne.shadowRadius=Le.radius,Ne.shadowMapSize=Le.mapSize,F.directionalShadow[le]=Ne,F.directionalShadowMap[le]=We,F.directionalShadowMatrix[le]=be.shadow.matrix,oe++}F.directional[le]=Se,le++}else if(be.isSpotLight){const Se=G.get(be);Se.position.setFromMatrixPosition(be.matrixWorld),Se.color.copy(re).multiplyScalar(ye*fe),Se.distance=we,Se.coneCos=Math.cos(be.angle),Se.penumbraCos=Math.cos(be.angle*(1-be.penumbra)),Se.decay=be.decay,F.spot[se]=Se;const Le=be.shadow;if(be.map&&(F.spotLightMap[ge]=be.map,ge++,Le.updateMatrices(be),be.castShadow&&ve++),F.spotLightMatrix[se]=Le.matrix,be.castShadow){const Ne=W.get(be);Ne.shadowBias=Le.bias,Ne.shadowNormalBias=Le.normalBias,Ne.shadowRadius=Le.radius,Ne.shadowMapSize=Le.mapSize,F.spotShadow[se]=Ne,F.spotShadowMap[se]=We,ue++}se++}else if(be.isRectAreaLight){const Se=G.get(be);Se.color.copy(re).multiplyScalar(ye),Se.halfWidth.set(be.width*.5,0,0),Se.halfHeight.set(0,be.height*.5,0),F.rectArea[he]=Se,he++}else if(be.isPointLight){const Se=G.get(be);if(Se.color.copy(be.color).multiplyScalar(be.intensity*fe),Se.distance=be.distance,Se.decay=be.decay,be.castShadow){const Le=be.shadow,Ne=W.get(be);Ne.shadowBias=Le.bias,Ne.shadowNormalBias=Le.normalBias,Ne.shadowRadius=Le.radius,Ne.shadowMapSize=Le.mapSize,Ne.shadowCameraNear=Le.camera.near,Ne.shadowCameraFar=Le.camera.far,F.pointShadow[ae]=Ne,F.pointShadowMap[ae]=We,F.pointShadowMatrix[ae]=be.shadow.matrix,de++}F.point[ae]=Se,ae++}else if(be.isHemisphereLight){const Se=G.get(be);Se.skyColor.copy(be.color).multiplyScalar(ye*fe),Se.groundColor.copy(be.groundColor).multiplyScalar(ye*fe),F.hemi[pe]=Se,pe++}}he>0&&(Z.isWebGL2||X.has("OES_texture_float_linear")===!0?(F.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,F.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):X.has("OES_texture_half_float_linear")===!0?(F.rectAreaLTC1=UniformsLib.LTC_HALF_1,F.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),F.ambient[0]=ee,F.ambient[1]=ie,F.ambient[2]=ne;const Xe=F.hash;(Xe.directionalLength!==le||Xe.pointLength!==ae||Xe.spotLength!==se||Xe.rectAreaLength!==he||Xe.hemiLength!==pe||Xe.numDirectionalShadows!==oe||Xe.numPointShadows!==de||Xe.numSpotShadows!==ue||Xe.numSpotMaps!==ge)&&(F.directional.length=le,F.spot.length=se,F.rectArea.length=he,F.point.length=ae,F.hemi.length=pe,F.directionalShadow.length=oe,F.directionalShadowMap.length=oe,F.pointShadow.length=de,F.pointShadowMap.length=de,F.spotShadow.length=ue,F.spotShadowMap.length=ue,F.directionalShadowMatrix.length=oe,F.pointShadowMatrix.length=de,F.spotLightMatrix.length=ue+ge-ve,F.spotLightMap.length=ge,F.numSpotLightShadowsWithMaps=ve,Xe.directionalLength=le,Xe.pointLength=ae,Xe.spotLength=se,Xe.rectAreaLength=he,Xe.hemiLength=pe,Xe.numDirectionalShadows=oe,Xe.numPointShadows=de,Xe.numSpotShadows=ue,Xe.numSpotMaps=ge,F.version=nextVersion++)}function Q(te,q){let ee=0,ie=0,ne=0,le=0,ae=0;const se=q.matrixWorldInverse;for(let he=0,pe=te.length;he<pe;he++){const oe=te[he];if(oe.isDirectionalLight){const de=F.directional[ee];de.direction.setFromMatrixPosition(oe.matrixWorld),U.setFromMatrixPosition(oe.target.matrixWorld),de.direction.sub(U),de.direction.transformDirection(se),ee++}else if(oe.isSpotLight){const de=F.spot[ne];de.position.setFromMatrixPosition(oe.matrixWorld),de.position.applyMatrix4(se),de.direction.setFromMatrixPosition(oe.matrixWorld),U.setFromMatrixPosition(oe.target.matrixWorld),de.direction.sub(U),de.direction.transformDirection(se),ne++}else if(oe.isRectAreaLight){const de=F.rectArea[le];de.position.setFromMatrixPosition(oe.matrixWorld),de.position.applyMatrix4(se),Y.identity(),J.copy(oe.matrixWorld),J.premultiply(se),Y.extractRotation(J),de.halfWidth.set(oe.width*.5,0,0),de.halfHeight.set(0,oe.height*.5,0),de.halfWidth.applyMatrix4(Y),de.halfHeight.applyMatrix4(Y),le++}else if(oe.isPointLight){const de=F.point[ie];de.position.setFromMatrixPosition(oe.matrixWorld),de.position.applyMatrix4(se),ie++}else if(oe.isHemisphereLight){const de=F.hemi[ae];de.direction.setFromMatrixPosition(oe.matrixWorld),de.direction.transformDirection(se),ae++}}}return{setup:D,setupView:Q,state:F}}function WebGLRenderState(X,Z){const G=new WebGLLights(X,Z),W=[],F=[];function U(){W.length=0,F.length=0}function J(q){W.push(q)}function Y(q){F.push(q)}function D(q){G.setup(W,q)}function Q(q){G.setupView(W,q)}return{init:U,state:{lightsArray:W,shadowsArray:F,lights:G},setupLights:D,setupLightsView:Q,pushLight:J,pushShadow:Y}}function WebGLRenderStates(X,Z){let G=new WeakMap;function W(U,J=0){const Y=G.get(U);let D;return Y===void 0?(D=new WebGLRenderState(X,Z),G.set(U,[D])):J>=Y.length?(D=new WebGLRenderState(X,Z),Y.push(D)):D=Y[J],D}function F(){G=new WeakMap}return{get:W,dispose:F}}class MeshDepthMaterial extends Material{constructor(Z){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(Z)}copy(Z){return super.copy(Z),this.depthPacking=Z.depthPacking,this.map=Z.map,this.alphaMap=Z.alphaMap,this.displacementMap=Z.displacementMap,this.displacementScale=Z.displacementScale,this.displacementBias=Z.displacementBias,this.wireframe=Z.wireframe,this.wireframeLinewidth=Z.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(Z){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(Z)}copy(Z){return super.copy(Z),this.map=Z.map,this.alphaMap=Z.alphaMap,this.displacementMap=Z.displacementMap,this.displacementScale=Z.displacementScale,this.displacementBias=Z.displacementBias,this}}const vertex=`void main() {
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
`+an.showPosition()+`
Expecting `+wi.join(", ")+", got '"+(this.terminals_[Et]||Et)+"'":Fi="Parse error on line "+(Qe+1)+": Unexpected "+(Et==bi?"end of input":"'"+(this.terminals_[Et]||Et)+"'"),this.parseError(Fi,{text:an.match,token:this.terminals_[Et]||Et,line:an.yylineno,loc:$n,expected:wi})}if(jt[0]instanceof Array&&jt.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Bt+", token: "+Et);switch(jt[0]){case 1:xt.push(Et),Nt.push(an.yytext),Ft.push(an.yylloc),xt.push(jt[1]),Et=null,Un=an.yyleng,gn=an.yytext,Qe=an.yylineno,$n=an.yylloc;break;case 2:if(In=this.productions_[jt[1]][1],dn.$=Nt[Nt.length-In],dn._$={first_line:Ft[Ft.length-(In||1)].first_line,last_line:Ft[Ft.length-1].last_line,first_column:Ft[Ft.length-(In||1)].first_column,last_column:Ft[Ft.length-1].last_column},Ni&&(dn._$.range=[Ft[Ft.length-(In||1)].range[0],Ft[Ft.length-1].range[1]]),ln=this.performAction.apply(dn,[gn,Un,Qe,Rn.yy,jt[1],Nt,Ft].concat(yi)),typeof ln<"u")return ln;In&&(xt=xt.slice(0,-1*In*2),Nt=Nt.slice(0,-1*In),Ft=Ft.slice(0,-1*In)),xt.push(this.productions_[jt[1]][0]),Nt.push(dn.$),Ft.push(dn._$),ys=Oe[xt[xt.length-2]][xt[xt.length-1]],xt.push(ys);break;case 3:return!0}}return!0}},pi=Wildcard$2.Wildcard,mi="http://www.w3.org/1999/02/22-rdf-syntax-ns#",as=mi+"type",Zs=mi+"first",ws=mi+"rest",os=mi+"nil",ui="http://www.w3.org/2001/XMLSchema#",rs=ui+"integer",cs=ui+"decimal",ls=ui+"double",fs=ui+"boolean",Hn="",ds="",ps="";function yn(ft){return ft.toLowerCase()}function Mn(ft,wt){return ft.push(wt),ft}function Dn(ft,wt){return ft.push.apply(ft,wt),ft}function Qt(ft){ft||(ft={});for(var wt=1,vt=arguments.length,xt;wt<vt&&(xt=arguments[wt]||{});wt++)for(var Nt in xt)ft[Nt]=xt[Nt];return ft}function Vn(){for(var ft=[],wt=0,vt=arguments.length;wt<vt;wt++)ft=ft.concat.apply(ft,arguments[wt]);return ft}function ii(ft){if(ft[0]==="<"&&(ft=ft.substring(1,ft.length-1)),/^[a-z]+:/i.test(ft))return ft;if(!Kt.base)throw new Error("Cannot resolve relative IRI "+ft+" because no base IRI was set.");switch(Hn!==Kt.base&&(Hn=Kt.base,ds=Hn.replace(/[^\/:]*$/,""),ps=Hn.match(/^(?:[a-z]+:\/*)?[^\/]*/)[0]),ft[0]){case void 0:return Hn;case"#":return Hn+ft;case"?":return Hn.replace(/(?:\?.*)?$/,ft);case"/":return ps+ft;default:return ds+ft}}function mn(ft){if(ft){var wt=ft[0];if(wt==="?"||wt==="$")return Kt.factory.variable(ft.substr(1))}return ft}function un(ft,wt){return{type:"operation",operator:ft,args:wt||[]}}function Nn(ft,wt){var vt={expression:ft==="*"?new pi:ft};if(wt)for(var xt in wt)vt[xt]=wt[xt];return vt}function Kn(ft,wt){return{type:"path",pathType:ft,items:wt}}function xi(ft,wt){for(var vt=0,xt=wt.length,Nt;vt<xt&&(Nt=wt[vt]);vt++)ft=un(Nt[0],[ft,Nt[1]]);return ft}function Fn(ft,wt){var vt=[],xt=[],Nt=ft.length,Ft,Oe={};if(!Nt)return null;for(var gn=0;gn<Nt&&(Ft=ft[gn]);gn++)(Ft.named?xt:vt).push(Ft.iri);return Oe[wt||"from"]={default:vt,named:xt},Oe}function An(ft){return parseInt(ft,10)}function Li(ft){return ft.type==="group"&&ft.patterns.length===1?ft.patterns[0]:ft}function Wn(ft,wt){return wt&&wt.termType!=="NamedNode"&&(wt=Kt.factory.namedNode(wt)),Kt.factory.literal(ft,wt)}function Gs(ft,wt){return Kt.factory.literal(ft,wt)}function En(ft,wt,vt){var xt={};return ft!=null&&(xt.subject=ft),wt!=null&&(xt.predicate=wt),vt!=null&&(xt.object=vt),xt}function si(ft){return typeof ft=="string"?ft.startsWith("e_")?Kt.factory.blankNode(ft):Kt.factory.blankNode("e_"+ft):Kt.factory.blankNode("g_"+ms++)}var ms=0;Kt._resetBlanks=function(){ms=0};var Xs=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\(.)/g,vs={"\\":"\\","'":"'",'"':'"',t:"	",b:"\b",n:`
`,r:"\r",f:"\f"},Vs=/[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/,Si=String.fromCharCode;function us(ft,wt){ft=ft.substring(wt,ft.length-wt);try{ft=ft.replace(Xs,function(vt,xt,Nt,Ft){var Oe;if(xt){if(Oe=parseInt(xt,16),isNaN(Oe))throw new Error;return Si(Oe)}else if(Nt){if(Oe=parseInt(Nt,16),isNaN(Oe))throw new Error;return Oe<65535?Si(Oe):Si(55296+((Oe-=65536)>>10),56320+(Oe&1023))}else{var gn=vs[Ft];if(!gn)throw new Error;return gn}})}catch{return""}if(Vs.exec(ft))throw new Error("Invalid unicode codepoint of surrogate pair without corresponding codepoint in "+ft);return ft}function Ws(ft){var wt=si(),vt=wt,xt=[],Nt,Ft=[];ft.forEach(function(Un){xt.push(Un.entity),Dn(Ft,Un.triples)});for(var Oe=0,gn=0,Qe=xt.length,Nt=Array(Qe*2);Oe<Qe;)Nt[gn++]=En(vt,Kt.factory.namedNode(Zs),xt[Oe]),Nt[gn++]=En(vt,Kt.factory.namedNode(ws),vt=++Oe<Qe?si():Kt.factory.namedNode(os));return{entity:wt,triples:Dn(Nt,Ft)}}function Rs(ft){var wt=si();return{entity:wt,triples:ft.map(function(vt){return Qt(En(wt),vt)})}}function ki(ft,wt,vt){var xt=[],Nt=[];return wt.forEach(function(Ft){xt.push(En(null,ft,Ft.entity)),Dn(Nt,Ft.triples)}),Vn(xt,vt||[],Nt)}function Qn(ft){return ft.variable?ft.variable.value:ft.value||ft.expression.value}function Ti(ft){if(!ft)return[];if(ft.type==="aggregate")return[ft];if(ft.type==="operation"){const wt=[];for(const vt of ft.args)wt.push(...Ti(vt));return wt}return[]}function xs(ft){const wt=new Set,vt=function(xt){xt&&(xt.termType==="Variable"?wt.add(xt):xt.type==="operation"&&xt.args.forEach(vt))};return vt(ft),wt}function Ii(ft,wt=1,vt=[]){for(const xt of ft)wt>0&&xt instanceof Array?Ii(xt,wt-1,vt):vt.push(xt);return vt}function Yi(ft){return ft.termType==="Variable"}function hs(ft){if(ft.triples){const wt=[];for(const vt of ft.triples)Yi(vt.subject)&&wt.push(vt.subject.value),Yi(vt.predicate)&&wt.push(vt.predicate.value),Yi(vt.object)&&wt.push(vt.object.value);return wt}else if(ft.patterns){const wt=[];for(const vt of ft.patterns)wt.push(...hs(vt));return wt}return[]}function Ls(ft){const wt=ft.slice().sort(),vt=[];for(let xt=0;xt<wt.length-1;xt++)wt[xt+1]==wt[xt]&&vt.push(wt[xt]);return vt}function ai(ft){if(!Kt.sparqlStar)throw new Error("SPARQL* support is not enabled");return ft}function bs(ft){for(const wt of ft){if(wt.type==="graph"&&wt.name.termType==="Variable")throw new Error("Detected illegal variable in GRAPH");if(wt.type==="bgp"||wt.type==="graph"){for(const vt of wt.triples)if(vt.subject.termType==="Variable"||vt.predicate.termType==="Variable"||vt.object.termType==="Variable")throw new Error("Detected illegal variable in BGP")}}return ft}function Mi(ft){for(const wt of ft)if(wt.type==="bgp"){for(const vt of wt.triples)if(vt.subject.termType==="BlankNode"||vt.predicate.termType==="BlankNode"||vt.object.termType==="BlankNode")throw new Error("Detected illegal blank node in BGP")}return ft}var Ss=function(){var ft={EOF:1,parseError:function(vt,xt){if(this.yy.parser)this.yy.parser.parseError(vt,xt);else throw new Error(vt)},setInput:function(wt,vt){return this.yy=vt||this.yy||{},this._input=wt,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var wt=this._input[0];this.yytext+=wt,this.yyleng++,this.offset++,this.match+=wt,this.matched+=wt;var vt=wt.match(/(?:\r\n?|\n).*/g);return vt?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),wt},unput:function(wt){var vt=wt.length,xt=wt.split(/(?:\r\n?|\n)/g);this._input=wt+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-vt),this.offset-=vt;var Nt=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),xt.length-1&&(this.yylineno-=xt.length-1);var Ft=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:xt?(xt.length===Nt.length?this.yylloc.first_column:0)+Nt[Nt.length-xt.length].length-xt[0].length:this.yylloc.first_column-vt},this.options.ranges&&(this.yylloc.range=[Ft[0],Ft[0]+this.yyleng-vt]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(wt){this.unput(this.match.slice(wt))},pastInput:function(){var wt=this.matched.substr(0,this.matched.length-this.match.length);return(wt.length>20?"...":"")+wt.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var wt=this.match;return wt.length<20&&(wt+=this._input.substr(0,20-wt.length)),(wt.substr(0,20)+(wt.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var wt=this.pastInput(),vt=new Array(wt.length+1).join("-");return wt+this.upcomingInput()+`
`+vt+"^"},test_match:function(wt,vt){var xt,Nt,Ft;if(this.options.backtrack_lexer&&(Ft={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(Ft.yylloc.range=this.yylloc.range.slice(0))),Nt=wt[0].match(/(?:\r\n?|\n).*/g),Nt&&(this.yylineno+=Nt.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:Nt?Nt[Nt.length-1].length-Nt[Nt.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+wt[0].length},this.yytext+=wt[0],this.match+=wt[0],this.matches=wt,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(wt[0].length),this.matched+=wt[0],xt=this.performAction.call(this,this.yy,this,vt,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),xt)return xt;if(this._backtrack){for(var Oe in Ft)this[Oe]=Ft[Oe];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var wt,vt,xt,Nt;this._more||(this.yytext="",this.match="");for(var Ft=this._currentRules(),Oe=0;Oe<Ft.length;Oe++)if(xt=this._input.match(this.rules[Ft[Oe]]),xt&&(!vt||xt[0].length>vt[0].length)){if(vt=xt,Nt=Oe,this.options.backtrack_lexer){if(wt=this.test_match(xt,Ft[Oe]),wt!==!1)return wt;if(this._backtrack){vt=!1;continue}else return!1}else if(!this.options.flex)break}return vt?(wt=this.test_match(vt,Ft[Nt]),wt!==!1?wt:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var vt=this.next();return vt||this.lex()},begin:function(vt){this.conditionStack.push(vt)},popState:function(){var vt=this.conditionStack.length-1;return vt>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(vt){return vt=this.conditionStack.length-1-Math.abs(vt||0),vt>=0?this.conditionStack[vt]:"INITIAL"},pushState:function(vt){this.begin(vt)},stateStackSize:function(){return this.conditionStack.length},options:{flex:!0,"case-insensitive":!0},performAction:function(vt,xt,Nt,Ft){switch(Nt){case 0:break;case 1:return 12;case 2:return 15;case 3:return 28;case 4:return 316;case 5:return 317;case 6:return 35;case 7:return 37;case 8:return 38;case 9:return 26;case 10:return 41;case 11:return 45;case 12:return 46;case 13:return 48;case 14:return 50;case 15:return 55;case 16:return 58;case 17:return 320;case 18:return 68;case 19:return 69;case 20:return 75;case 21:return 78;case 22:return 81;case 23:return 83;case 24:return 86;case 25:return 88;case 26:return 90;case 27:return 191;case 28:return 107;case 29:return 321;case 30:return 140;case 31:return 322;case 32:return 323;case 33:return 117;case 34:return 324;case 35:return 116;case 36:return 325;case 37:return 326;case 38:return 120;case 39:return 122;case 40:return 123;case 41:return 138;case 42:return 132;case 43:return 133;case 44:return 135;case 45:return 141;case 46:return 119;case 47:return 327;case 48:return 328;case 49:return 167;case 50:return 170;case 51:return 174;case 52:return 100;case 53:return 168;case 54:return 329;case 55:return 173;case 56:return 231;case 57:return 235;case 58:return 278;case 59:return 195;case 60:return 330;case 61:return 331;case 62:return 224;case 63:return 333;case 64:return 271;case 65:return 219;case 66:return 226;case 67:return 227;case 68:return 250;case 69:return 254;case 70:return 295;case 71:return 334;case 72:return 335;case 73:return 336;case 74:return 337;case 75:return 338;case 76:return 258;case 77:return 339;case 78:return 273;case 79:return 281;case 80:return 282;case 81:return 275;case 82:return 276;case 83:return 277;case 84:return 340;case 85:return 341;case 86:return 279;case 87:return 343;case 88:return 342;case 89:return 344;case 90:return 284;case 91:return 285;case 92:return 288;case 93:return 290;case 94:return 294;case 95:return 298;case 96:return 301;case 97:return 13;case 98:return 16;case 99:return 312;case 100:return 245;case 101:return 34;case 102:return 297;case 103:return 87;case 104:return 299;case 105:return 300;case 106:return 306;case 107:return 307;case 108:return 308;case 109:return 309;case 110:return 310;case 111:return 311;case 112:return"EXPONENT";case 113:return 302;case 114:return 303;case 115:return 304;case 116:return 305;case 117:return 93;case 118:return 246;case 119:return 6;case 120:return"INVALID";case 121:console.log(xt.yytext);break}},rules:[/^(?:\s+|(#[^\n\r]*))/i,/^(?:BASE)/i,/^(?:PREFIX)/i,/^(?:SELECT)/i,/^(?:DISTINCT)/i,/^(?:REDUCED)/i,/^(?:\()/i,/^(?:AS)/i,/^(?:\))/i,/^(?:\*)/i,/^(?:CONSTRUCT)/i,/^(?:WHERE)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:DESCRIBE)/i,/^(?:ASK)/i,/^(?:FROM)/i,/^(?:NAMED)/i,/^(?:GROUP)/i,/^(?:BY)/i,/^(?:HAVING)/i,/^(?:ORDER)/i,/^(?:ASC)/i,/^(?:DESC)/i,/^(?:LIMIT)/i,/^(?:OFFSET)/i,/^(?:VALUES)/i,/^(?:;)/i,/^(?:LOAD)/i,/^(?:SILENT)/i,/^(?:INTO)/i,/^(?:CLEAR)/i,/^(?:DROP)/i,/^(?:CREATE)/i,/^(?:ADD)/i,/^(?:TO)/i,/^(?:MOVE)/i,/^(?:COPY)/i,/^(?:INSERT((\s+|(#[^\n\r]*)\n\r?)+)DATA)/i,/^(?:DELETE((\s+|(#[^\n\r]*)\n\r?)+)DATA)/i,/^(?:DELETE((\s+|(#[^\n\r]*)\n\r?)+)WHERE)/i,/^(?:WITH)/i,/^(?:DELETE)/i,/^(?:INSERT)/i,/^(?:USING)/i,/^(?:DEFAULT)/i,/^(?:GRAPH)/i,/^(?:ALL)/i,/^(?:\.)/i,/^(?:OPTIONAL)/i,/^(?:SERVICE)/i,/^(?:BIND)/i,/^(?:UNDEF)/i,/^(?:MINUS)/i,/^(?:UNION)/i,/^(?:FILTER)/i,/^(?:<<)/i,/^(?:>>)/i,/^(?:,)/i,/^(?:a)/i,/^(?:\|)/i,/^(?:\/)/i,/^(?:\^)/i,/^(?:\?)/i,/^(?:\+)/i,/^(?:!)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:IN)/i,/^(?:NOT)/i,/^(?:-)/i,/^(?:BOUND)/i,/^(?:BNODE)/i,/^(?:(RAND|NOW|UUID|STRUUID))/i,/^(?:(LANG|DATATYPE|IRI|URI|ABS|CEIL|FLOOR|ROUND|STRLEN|STR|UCASE|LCASE|ENCODE_FOR_URI|YEAR|MONTH|DAY|HOURS|MINUTES|SECONDS|TIMEZONE|TZ|MD5|SHA1|SHA256|SHA384|SHA512|isIRI|isURI|isBLANK|isLITERAL|isNUMERIC))/i,/^(?:(LANGMATCHES|CONTAINS|STRSTARTS|STRENDS|STRBEFORE|STRAFTER|STRLANG|STRDT|sameTerm))/i,/^(?:CONCAT)/i,/^(?:COALESCE)/i,/^(?:IF)/i,/^(?:REGEX)/i,/^(?:SUBSTR)/i,/^(?:REPLACE)/i,/^(?:EXISTS)/i,/^(?:COUNT)/i,/^(?:SUM|MIN|MAX|AVG|SAMPLE)/i,/^(?:GROUP_CONCAT)/i,/^(?:SEPARATOR)/i,/^(?:\^\^)/i,/^(?:true|false)/i,/^(?:(<(?:[^<>\"\{\}\|\^`\\\u0000-\u0020])*>))/i,/^(?:((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])(?:(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|\.)*(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040]))?)?:))/i,/^(?:(((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])(?:(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|\.)*(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040]))?)?:)((?:((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|:|[0-9]|((%([0-9A-Fa-f])([0-9A-Fa-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(?:(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|\.|:|((%([0-9A-Fa-f])([0-9A-Fa-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|:|((%([0-9A-Fa-f])([0-9A-Fa-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%)))))?)))/i,/^(?:(_:(?:((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|[0-9])(?:(?:(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])|\.)*(((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|-|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040]))?))/i,/^(?:([\?\$]((?:((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|[0-9])(?:((?:([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_))|[0-9]|\u00B7|[\u0300-\u036F\u203F-\u2040])*)))/i,/^(?:(@[a-zA-Z]+(?:-[a-zA-Z0-9]+)*))/i,/^(?:([0-9]+))/i,/^(?:([0-9]*\.[0-9]+))/i,/^(?:([0-9]+\.[0-9]*([eE][+-]?[0-9]+)|\.([0-9])+([eE][+-]?[0-9]+)|([0-9])+([eE][+-]?[0-9]+)))/i,/^(?:(\+([0-9]+)))/i,/^(?:(\+([0-9]*\.[0-9]+)))/i,/^(?:(\+([0-9]+\.[0-9]*([eE][+-]?[0-9]+)|\.([0-9])+([eE][+-]?[0-9]+)|([0-9])+([eE][+-]?[0-9]+))))/i,/^(?:(-([0-9]+)))/i,/^(?:(-([0-9]*\.[0-9]+)))/i,/^(?:(-([0-9]+\.[0-9]*([eE][+-]?[0-9]+)|\.([0-9])+([eE][+-]?[0-9]+)|([0-9])+([eE][+-]?[0-9]+))))/i,/^(?:([eE][+-]?[0-9]+))/i,/^(?:('(?:(?:[^\u0027\u005C\u000A\u000D])|(\\[tbnrf\\\"']|\\u([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])|\\U([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])))*'))/i,/^(?:("(?:(?:[^\u0022\u005C\u000A\u000D])|(\\[tbnrf\\\"']|\\u([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])|\\U([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])))*"))/i,/^(?:('''(?:(?:'|'')?(?:[^'\\]|(\\[tbnrf\\\"']|\\u([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])|\\U([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f]))))*'''))/i,/^(?:("""(?:(?:"|"")?(?:[^\"\\]|(\\[tbnrf\\\"']|\\u([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])|\\U([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f]))))*"""))/i,/^(?:(\((\u0020|\u0009|\u000D|\u000A)*\)))/i,/^(?:(\[(\u0020|\u0009|\u000D|\u000A)*\]))/i,/^(?:$)/i,/^(?:.)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121],inclusive:!0}}};return ft}();Ri.lexer=Ss;function Kt(){this.yy={}}return Kt.prototype=Ri,Ri.Parser=Kt,new Kt}(),SparqlParser_1=SparqlParser,XSD_INTEGER="http://www.w3.org/2001/XMLSchema#integer",XSD_STRING="http://www.w3.org/2001/XMLSchema#string";function Generator$1(X){this._options=X=X||{};var Z=X.prefixes||{};this._prefixByIri={};var G=[];for(var W in Z){var F=Z[W];isString$1(F)&&(this._prefixByIri[F]=W,G.push(F))}var U=G.join("|").replace(/[\]\/\(\)\*\+\?\.\\\$]/g,"\\$&");this._prefixRegex=new RegExp("^("+U+")([a-zA-Z][\\-_a-zA-Z0-9]*)$"),this._usedPrefixes={},this._sparqlStar=X.sparqlStar,this._indent=isString$1(X.indent)?X.indent:"  ",this._newline=isString$1(X.newline)?X.newline:`
${D}`)}await Y.body?.cancel()}Z.validateHttpResponse=U},"../node_modules/@comunica/bus-rdf-update-quads/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/bus-rdf-update-quads/lib/ActorRdfUpdateQuads.js"),Z),F(G("../node_modules/@comunica/bus-rdf-update-quads/lib/ActorRdfUpdateQuadsDestination.js"),Z),F(G("../node_modules/@comunica/bus-rdf-update-quads/lib/IQuadDestination.js"),Z),F(G("../node_modules/@comunica/bus-rdf-update-quads/lib/utils.js"),Z)},"../node_modules/@comunica/bus-rdf-update-quads/lib/utils.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.getContextDestinationUrl=Z.getContextDestinationFirst=Z.getContextDestination=Z.getDataDestinationContext=Z.getDataDestinationValue=Z.getDataDestinationType=Z.isDataDestinationRawType=void 0;const W=G("../node_modules/@comunica/context-entries/lib/index.js");function F(q){return typeof q=="string"||"remove"in q}Z.isDataDestinationRawType=F;function U(q){return typeof q=="string"?"":"remove"in q?"rdfjsStore":q.type}Z.getDataDestinationType=U;function J(q){return F(q)?q:q.value}Z.getDataDestinationValue=J;function Y(q,ee){return typeof q=="string"||"remove"in q||!q.context?ee:ee.merge(q.context)}Z.getDataDestinationContext=Y;function D(q){return q.get(W.KeysRdfUpdateQuads.destination)}Z.getContextDestination=D;function Q(q){if(q.has(W.KeysRdfUpdateQuads.destination))return q.get(W.KeysRdfUpdateQuads.destination)}Z.getContextDestinationFirst=Q;function te(q){if(q){let ee=J(q);if(typeof ee=="string"){const ie=ee.indexOf("#");return ie>=0&&(ee=ee.slice(0,ie)),ee}}}Z.getContextDestinationUrl=te},"../node_modules/@comunica/context-entries/lib/Keys.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.KeysRdfUpdateQuads=Z.KeysRdfResolveQuadPattern=Z.KeysRdfParseHtmlScript=Z.KeysRdfParseJsonLd=Z.KeysQueryOperation=Z.KeysInitQuery=Z.KeysHttpProxy=Z.KeysHttpMemento=Z.KeysHttpWayback=Z.KeysHttp=Z.KeysCore=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");Z.KeysCore={log:W.CONTEXT_KEY_LOGGER},Z.KeysHttp={includeCredentials:new W.ActionContextKey("@comunica/bus-http:include-credentials"),auth:new W.ActionContextKey("@comunica/bus-http:auth"),fetch:new W.ActionContextKey("@comunica/bus-http:fetch"),httpTimeout:new W.ActionContextKey("@comunica/bus-http:http-timeout"),httpBodyTimeout:new W.ActionContextKey("@comunica/bus-http:http-body-timeout"),httpRetryCount:new W.ActionContextKey("@comunica/bus-http:http-retry-count"),httpRetryDelay:new W.ActionContextKey("@comunica/bus-http:http-retry-delay"),httpRetryOnServerError:new W.ActionContextKey("@comunica/bus-http:http-retry-on-server-error")},Z.KeysHttpWayback={recoverBrokenLinks:new W.ActionContextKey("@comunica/bus-http:recover-broken-links")},Z.KeysHttpMemento={datetime:new W.ActionContextKey("@comunica/actor-http-memento:datetime")},Z.KeysHttpProxy={httpProxyHandler:new W.ActionContextKey("@comunica/actor-http-proxy:httpProxyHandler")},Z.KeysInitQuery={initialBindings:new W.ActionContextKey("@comunica/actor-init-query:initialBindings"),queryFormat:new W.ActionContextKey("@comunica/actor-init-query:queryFormat"),graphqlSingularizeVariables:new W.ActionContextKey("@comunica/actor-init-query:singularizeVariables"),lenient:new W.ActionContextKey("@comunica/actor-init-query:lenient"),queryString:new W.ActionContextKey("@comunica/actor-init-query:queryString"),query:new W.ActionContextKey("@comunica/actor-init-query:query"),baseIRI:new W.ActionContextKey("@comunica/actor-init-query:baseIRI"),functionArgumentsCache:new W.ActionContextKey("@comunica/actor-init-query:functionArgumentsCache"),queryTimestamp:new W.ActionContextKey("@comunica/actor-init-query:queryTimestamp"),extensionFunctionCreator:new W.ActionContextKey("@comunica/actor-init-query:extensionFunctionCreator"),extensionFunctions:new W.ActionContextKey("@comunica/actor-init-query:extensionFunctions"),cliArgsHandlers:new W.ActionContextKey("@comunica/actor-init-query:cliArgsHandlers"),explain:new W.ActionContextKey("@comunica/actor-init-query:explain"),physicalQueryPlanLogger:new W.ActionContextKey("@comunica/actor-init-query:physicalQueryPlanLogger"),physicalQueryPlanNode:new W.ActionContextKey("@comunica/actor-init-query:physicalQueryPlanNode"),jsonLdContext:new W.ActionContextKey("@context")},Z.KeysQueryOperation={operation:new W.ActionContextKey("@comunica/bus-query-operation:operation"),joinLeftMetadata:new W.ActionContextKey("@comunica/bus-query-operation:joinLeftMetadata"),joinRightMetadatas:new W.ActionContextKey("@comunica/bus-query-operation:joinRightMetadatas"),joinBindings:new W.ActionContextKey("@comunica/bus-query-operation:joinBindings"),readOnly:new W.ActionContextKey("@comunica/bus-query-operation:readOnly"),isPathArbitraryLengthDistinctKey:new W.ActionContextKey("@comunica/bus-query-operation:isPathArbitraryLengthDistinct"),limitIndicator:new W.ActionContextKey("@comunica/bus-query-operation:limitIndicator"),unionDefaultGraph:new W.ActionContextKey("@comunica/bus-query-operation:unionDefaultGraph"),localizeBlankNodes:new W.ActionContextKey("@comunica/actor-query-operation:localizeBlankNodes")},Z.KeysRdfParseJsonLd={documentLoader:new W.ActionContextKey("@comunica/actor-rdf-parse-jsonld:documentLoader"),strictValues:new W.ActionContextKey("@comunica/actor-rdf-parse-jsonld:strictValues"),parserOptions:new W.ActionContextKey("@comunica/actor-rdf-parse-jsonld:parserOptions")},Z.KeysRdfParseHtmlScript={processingHtmlScript:new W.ActionContextKey("@comunica/actor-rdf-parse-html-script:processingHtmlScript"),extractAllScripts:new W.ActionContextKey("extractAllScripts")},Z.KeysRdfResolveQuadPattern={sources:new W.ActionContextKey("@comunica/bus-rdf-resolve-quad-pattern:sources"),source:new W.ActionContextKey("@comunica/bus-rdf-resolve-quad-pattern:source"),sourceIds:new W.ActionContextKey("@comunica/bus-rdf-resolve-quad-pattern:sourceIds"),hypermediaSourcesAggregatedStores:new W.ActionContextKey("@comunica/bus-rdf-resolve-quad-pattern:hypermediaSourcesAggregatedStores")},Z.KeysRdfUpdateQuads={destination:new W.ActionContextKey("@comunica/bus-rdf-update-quads:destination")}},"../node_modules/@comunica/context-entries/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/context-entries/lib/Keys.js"),Z)},"../node_modules/@comunica/core/lib/ActionContext.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.ActionContextKey=Z.ActionContext=void 0;const W=G("../packages/immutable/dist/index.js");class F{constructor(Y={}){this.map=(0,W.Map)(Y)}setDefault(Y,D){return this.has(Y)?this:this.set(Y,D)}set(Y,D){return this.setRaw(Y.name,D)}setRaw(Y,D){return new F(this.map.set(Y,D))}delete(Y){return new F(this.map.delete(Y.name))}get(Y){return this.getRaw(Y.name)}getRaw(Y){return this.map.get(Y)}getSafe(Y){if(!this.has(Y))throw new Error(`Context entry ${Y.name} is required but not available`);return this.get(Y)}has(Y){return this.hasRaw(Y.name)}hasRaw(Y){return this.map.has(Y)}merge(...Y){let D=this;for(const Q of Y)for(const te of Q.keys())D=D.set(te,Q.get(te));return D}keys(){return[...this.map.keys()].map(Y=>new U(Y))}toJS(){return this.map.toJS()}toString(){return`ActionContext(${JSON.stringify(this.map.toJS())})`}[Symbol.for("nodejs.util.inspect.custom")](){return`ActionContext(${JSON.stringify(this.map.toJS(),null,"  ")})`}static ensureActionContext(Y){return Y instanceof F?Y:new F((0,W.Map)(Y||{}))}}Z.ActionContext=F;class U{constructor(Y){this.name=Y}}Z.ActionContextKey=U},"../node_modules/@comunica/core/lib/ActionObserver.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.ActionObserver=void 0;class G{constructor(F){Object.assign(this,F)}}Z.ActionObserver=G},"../node_modules/@comunica/core/lib/Actor.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.Actor=void 0;const W=G("../node_modules/@comunica/core/lib/ContextEntries.js");class F{constructor(J){this.beforeActors=[],Object.assign(this,J),this.bus.subscribe(this),this.beforeActors.length>0&&this.bus.addDependencies(this,this.beforeActors)}static getContextLogger(J){return J.get(W.CONTEXT_KEY_LOGGER)}runObservable(J){const Y=this.run(J);return this.bus.onRun(this,J,Y),Y}async initialize(){return!0}async deinitialize(){return!0}getDefaultLogData(J,Y){const D=Y?Y():{};return D.actor=this.name,D}logTrace(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.trace(Y,this.getDefaultLogData(J,D))}logDebug(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.debug(Y,this.getDefaultLogData(J,D))}logInfo(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.info(Y,this.getDefaultLogData(J,D))}logWarn(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.warn(Y,this.getDefaultLogData(J,D))}logError(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.error(Y,this.getDefaultLogData(J,D))}logFatal(J,Y,D){const Q=F.getContextLogger(J);Q&&Q.fatal(Y,this.getDefaultLogData(J,D))}}Z.Actor=F},"../node_modules/@comunica/core/lib/Bus.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.Bus=void 0;class G{constructor(F){this.actors=[],this.observers=[],this.dependencyLinks=new Map,Object.assign(this,F)}subscribe(F){this.actors.push(F),this.reorderForDependencies()}subscribeObserver(F){this.observers.push(F)}unsubscribe(F){const U=this.actors.indexOf(F);return U>=0?(this.actors.splice(U,1),!0):!1}unsubscribeObserver(F){const U=this.observers.indexOf(F);return U>=0?(this.observers.splice(U,1),!0):!1}publish(F){return this.actors.map(U=>({actor:U,reply:U.test(F)}))}onRun(F,U,J){for(const Y of this.observers)Y.onRun(F,U,J)}addDependencies(F,U){for(const J of U){let Y=this.dependencyLinks.get(J);Y||(Y=[],this.dependencyLinks.set(J,Y)),Y.push(F)}this.reorderForDependencies()}reorderForDependencies(){if(this.dependencyLinks.size>0){const F=[];for(const U of this.dependencyLinks.keys()){const J=this.actors.indexOf(U);J>=0&&(this.actors.splice(J,1),F.push(U))}for(;F.length>0;){let U=-1;for(let Y=0;Y<F.length;Y++){let D=!0;for(const Q of this.dependencyLinks.get(F[Y]))if(!this.actors.includes(Q)&&F.includes(Q)){D=!1;break}if(D){U=Y;break}}if(U<0)throw new Error(`Cyclic dependency links detected in bus ${this.name}`);const J=F.splice(U,1)[0];this.actors.push(J)}}}}Z.Bus=G},"../node_modules/@comunica/core/lib/BusIndexed.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.BusIndexed=void 0;const W=G("../node_modules/@comunica/core/lib/Bus.js");class F extends W.Bus{constructor(J){super(J),this.actorsIndex={}}subscribe(J){const Y=this.getActorIdentifier(J)||"_undefined_";let D=this.actorsIndex[Y];D||(D=this.actorsIndex[Y]=[]),D.push(J),super.subscribe(J)}unsubscribe(J){const Y=this.getActorIdentifier(J)||"_undefined_",D=this.actorsIndex[Y];if(D){const Q=D.indexOf(J);Q>=0&&D.splice(Q,1),D.length===0&&delete this.actorsIndex[Y]}return super.unsubscribe(J)}publish(J){const Y=this.getActionIdentifier(J);return Y?[...this.actorsIndex[Y]||[],...this.actorsIndex._undefined_||[]].map(Q=>({actor:Q,reply:Q.test(J)})):super.publish(J)}getActorIdentifier(J){return this.actorIdentifierFields.reduce((Y,D)=>Y[D],J)}getActionIdentifier(J){return this.actionIdentifierFields.reduce((Y,D)=>Y[D],J)}}Z.BusIndexed=F},"../node_modules/@comunica/core/lib/ContextEntries.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.CONTEXT_KEY_LOGGER=void 0;const W=G("../node_modules/@comunica/core/lib/ActionContext.js");Z.CONTEXT_KEY_LOGGER=new W.ActionContextKey("@comunica/core:log")},"../node_modules/@comunica/core/lib/Mediator.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.Mediator=void 0;class G{constructor(F){Object.assign(this,F)}publish(F){const U=this.bus.publish(F);if(U.length===0)throw new Error(`No actors are able to reply to a message in the bus ${this.bus.name}`);return U}async mediateActor(F){return await this.mediateWith(F,this.publish(F))}async mediate(F){return(await this.mediateActor(F)).runObservable(F)}}Z.Mediator=G},"../node_modules/@comunica/core/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(Y,D,Q,te){te===void 0&&(te=Q);var q=Object.getOwnPropertyDescriptor(D,Q);(!q||("get"in q?!D.__esModule:q.writable||q.configurable))&&(q={enumerable:!0,get:function(){return D[Q]}}),Object.defineProperty(Y,te,q)}:function(Y,D,Q,te){te===void 0&&(te=Q),Y[te]=D[Q]}),F=this&&this.__exportStar||function(Y,D){for(var Q in Y)Q!=="default"&&!Object.prototype.hasOwnProperty.call(D,Q)&&W(D,Y,Q)};Object.defineProperty(Z,"__esModule",{value:!0}),Z.Logger=void 0;const J=G("../node_modules/@comunica/types/lib/index.js").Logger;Z.Logger=J,F(G("../node_modules/@comunica/core/lib/ActionContext.js"),Z),F(G("../node_modules/@comunica/core/lib/Bus.js"),Z),F(G("../node_modules/@comunica/core/lib/BusIndexed.js"),Z),F(G("../node_modules/@comunica/core/lib/ContextEntries.js"),Z),F(G("../node_modules/@comunica/core/lib/ActionObserver.js"),Z),F(G("../node_modules/@comunica/core/lib/Actor.js"),Z),F(G("../node_modules/@comunica/core/lib/Mediator.js"),Z)},"../node_modules/@comunica/data-factory/lib/BlankNodeBindingsScoped.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.BlankNodeBindingsScoped=void 0;class G{constructor(F){this.termType="BlankNode",this.singleBindingsScope=!0,this.value=F}equals(F){return!!F&&F.termType==="BlankNode"&&F.value===this.value}}Z.BlankNodeBindingsScoped=G},"../node_modules/@comunica/data-factory/lib/BlankNodeScoped.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.BlankNodeScoped=void 0;class G{constructor(F,U){this.termType="BlankNode",this.value=F,this.skolemized=U}equals(F){return!!F&&F.termType==="BlankNode"&&F.value===this.value}}Z.BlankNodeScoped=G},"../node_modules/@comunica/data-factory/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/data-factory/lib/BlankNodeScoped.js"),Z),F(G("../node_modules/@comunica/data-factory/lib/BlankNodeBindingsScoped.js"),Z)},"../node_modules/@comunica/logger-void/lib/LoggerVoid.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.LoggerVoid=void 0;const W=G("../node_modules/@comunica/types/lib/index.js");class F extends W.Logger{debug(){}error(){}fatal(){}info(){}trace(){}warn(){}}Z.LoggerVoid=F},"../node_modules/@comunica/logger-void/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/logger-void/lib/LoggerVoid.js"),Z)},"../node_modules/@comunica/mediator-all/lib/MediatorAll.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorAll=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J)}async mediate(J){const Y=[];let D;try{D=this.publish(J)}catch{D=[]}for(const te of D)try{await te.reply,Y.push(te.actor)}catch{}return(await Promise.all(Y.map(te=>te.runObservable(J))))[0]}async mediateWith(){throw new Error("Unsupported operation: MediatorAll#mediateWith")}}Z.MediatorAll=F},"../node_modules/@comunica/mediator-all/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-all/lib/MediatorAll.js"),Z)},"../node_modules/@comunica/mediator-combine-pipeline/lib/MediatorCombinePipeline.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorCombinePipeline=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J)}async mediate(J){let Y;try{Y=this.publish(J)}catch{return J}if(this.filterErrors){const Q=[];for(const te of Y)try{await te.reply,Q.push(te)}catch{}Y=Q}if(Y=await Promise.all(Y.map(async({actor:Q,reply:te})=>({actor:Q,reply:await te}))),this.order){const Q=te=>{const q=this.field?te[this.field]:te;if(typeof q!="number")throw new Error("Cannot order elements that are not numbers.");return q};Y=Y.sort((te,q)=>(this.order==="increasing"?1:-1)*(Q(te.reply)-Q(q.reply)))}let D=J;for(const{actor:Q}of Y)D={...D,...await Q.runObservable(D)};return D}mediateWith(){throw new Error("Method not supported.")}}Z.MediatorCombinePipeline=F},"../node_modules/@comunica/mediator-combine-pipeline/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-combine-pipeline/lib/MediatorCombinePipeline.js"),Z)},"../node_modules/@comunica/mediator-combine-union/lib/MediatorCombineUnion.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorCombineUnion=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J),this.combiner=this.createCombiner()}async mediate(J){let Y;try{Y=this.publish(J)}catch{Y=[]}await Promise.all(Y.map(({reply:Q})=>Q));const D=await Promise.all(Y.map(Q=>Q.actor.runObservable(J)));return this.combiner(D)}mediateWith(){throw new Error("Method not supported.")}createCombiner(){return J=>{const Y={};return Y[this.field]={},[{}].concat(J.map(D=>D[this.field])).forEach((D,Q,te)=>{Y[this.field]={...D,...Y[this.field]}}),Y}}}Z.MediatorCombineUnion=F},"../node_modules/@comunica/mediator-combine-union/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-combine-union/lib/MediatorCombineUnion.js"),Z)},"../node_modules/@comunica/mediator-join-coefficients-fixed/lib/MediatorJoinCoefficientsFixed.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorJoinCoefficientsFixed=void 0;const W=G("../node_modules/@comunica/context-entries/lib/index.js"),F=G("../node_modules/@comunica/core/lib/index.js");class U extends F.Mediator{constructor(Y){super(Y)}async mediateWith(Y,D){const Q=[],te=D.map(({reply:he})=>he).map(he=>he.catch(pe=>{Q.push(pe)})),q=await Promise.all(te);let ee=q.map((he,pe)=>{if(he)return he.iterations*this.cpuWeight+he.persistedItems*this.memoryWeight+he.blockingItems*this.timeWeight+he.requestTime*this.ioWeight});const ie=Math.max(...ee.filter(he=>he!==void 0)),ne=Y.context.get(W.KeysQueryOperation.limitIndicator);ne&&(ee=ee.map((he,pe)=>he!==void 0&&q[pe].persistedItems>0&&q[pe].iterations>ne?he+ie:he));let le=-1,ae=Number.POSITIVE_INFINITY;for(const[he,pe]of ee.entries())pe!==void 0&&(le===-1||pe<ae)&&(le=he,ae=pe);if(le<0)throw new Error(`All actors rejected their test in ${this.name}
${Q.map(he=>he.message).join(`
`)}`);const se=D[le].actor;return se.includeInLogs&&F.Actor.getContextLogger(Y.context)?.debug(`Determined physical join operator '${se.logicalType}-${se.physicalName}'`,{entries:Y.entries.length,variables:await Promise.all(Y.entries.map(async he=>(await he.output.metadata()).variables.map(pe=>pe.value))),costs:Object.fromEntries(ee.map((he,pe)=>[`${D[pe].actor.logicalType}-${D[pe].actor.physicalName}`,he])),coefficients:Object.fromEntries(q.map((he,pe)=>[`${D[pe].actor.logicalType}-${D[pe].actor.physicalName}`,he]))}),se}}Z.MediatorJoinCoefficientsFixed=U},"../node_modules/@comunica/mediator-join-coefficients-fixed/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-join-coefficients-fixed/lib/MediatorJoinCoefficientsFixed.js"),Z)},"../node_modules/@comunica/mediator-number/lib/MediatorNumber.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorNumber=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J),this.indexPicker=this.createIndexPicker()}createIndexPicker(){switch(this.type){case"min":return J=>J.reduce((Y,D,Q)=>{const te=this.getOrDefault(D[this.field],Number.POSITIVE_INFINITY);return te!==null&&(Number.isNaN(Y[0])||Y[0]>te)?[te,Q]:Y},[Number.NaN,-1])[1];case"max":return J=>J.reduce((Y,D,Q)=>{const te=this.getOrDefault(D[this.field],Number.NEGATIVE_INFINITY);return te!==null&&(Number.isNaN(Y[0])||Y[0]<te)?[te,Q]:Y},[Number.NaN,-1])[1];default:throw new Error(`No valid "type" value was given, must be either 'min' or 'max', but got: ${this.type}`)}}getOrDefault(J,Y){return J===void 0?Y:J}async mediateWith(J,Y){let D=Y.map(({reply:ee})=>ee);const Q=[];if(this.ignoreErrors){const ee={};ee[this.field]=null,D=D.map(ie=>ie.catch(ne=>(Q.push(ne),ee)))}const te=await Promise.all(D),q=this.indexPicker(te);if(q<0)throw new Error(`All actors rejected their test in ${this.name}
${Q.map(ee=>ee.message).join(`
`)}`);return Y[q].actor}}Z.MediatorNumber=F},"../node_modules/@comunica/mediator-number/lib/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y);var Q=Object.getOwnPropertyDescriptor(J,Y);(!Q||("get"in Q?!J.__esModule:Q.writable||Q.configurable))&&(Q={enumerable:!0,get:function(){return J[Y]}}),Object.defineProperty(U,D,Q)}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/@comunica/mediator-number/lib/MediatorNumber.js"),Z)},"../node_modules/@comunica/mediator-race/lib/MediatorRace.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MediatorRace=void 0;const W=G("../node_modules/@comunica/core/lib/index.js");class F extends W.Mediator{constructor(J){super(J)}mediateWith(J,Y){return new Promise((D,Q)=>{const te=[];for(const q of Y)q.reply.then(()=>{D(q.actor)}).catch(ee=>{te.push(ee),te.length===Y.length&&Q(new Error(`${this.name} mediated over all rejecting actors:
${te.map(ie=>ie.message).join(`
${Ve.stack}`:""}`):super(`Error thrown in ${Ze}`)}}Z.ExtensionFunctionError=ue;class ge extends Error{constructor(Ze){super(`Aggregate expression ${fe(Ze)} found, but no aggregate hook provided.`)}}Z.NoAggregator=ge;class ve extends Error{constructor(){super("EXISTS found, but no existence hook provided.")}}Z.NoExistenceHook=ve;function fe(Xe){return JSON.stringify(Xe)}},"../node_modules/sparqlee/dist/lib/util/Ordering.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.orderTypes=void 0;const W=G("../node_modules/lru-cache/index.js"),F=G("../node_modules/sparqlee/dist/lib/transformers/TermTransformer.js"),U=G("../node_modules/sparqlee/dist/lib/util/Consts.js"),J=G("../node_modules/sparqlee/dist/lib/util/TypeHandling.js");function Y(q,ee,ie,ne,le,ae){return q===ee?0:q===void 0?ie?-1:1:ee===void 0?ie?1:-1:q.equals(ee)?0:D(q,ee,ne,le)===ie?-1:1}Z.orderTypes=Y;function D(q,ee,ie,ne,le){return q.termType!==ee.termType?te[q.termType]<te[ee.termType]:q.termType==="Literal"?Q(q,ee,ie,ne):q.value<ee.value}function Q(q,ee,ie,ne){const le={discoverer:ie||(()=>"term"),cache:ne||new W},ae=new F.TermTransformer(le),se=ae.transformLiteral(q),he=ae.transformLiteral(ee),pe=se.dataType,oe=he.dataType,de=(0,J.getSuperTypeDict)(pe,le),ue=(0,J.getSuperTypeDict)(oe,le);return U.TypeURL.XSD_BOOLEAN in de&&U.TypeURL.XSD_BOOLEAN in ue||U.TypeURL.XSD_DATE_TIME in de&&U.TypeURL.XSD_DATE_TIME in ue||U.TypeAlias.SPARQL_NUMERIC in de&&U.TypeAlias.SPARQL_NUMERIC in ue||U.TypeURL.XSD_STRING in de&&U.TypeURL.XSD_STRING in ue?se.typedValue<he.typedValue:U.TypeURL.RDF_LANG_STRING in de&&U.TypeURL.RDF_LANG_STRING in ue?se.typedValue<he.typedValue||se.typedValue===he.typedValue&&se.language<he.language:pe<oe||se.dataType===he.dataType&&se.str()<he.str()}const te={Variable:0,BlankNode:1,NamedNode:2,Literal:3,Quad:4,DefaultGraph:5}},"../node_modules/sparqlee/dist/lib/util/Parsing.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.parseXSDDateTime=Z.parseXSDInteger=Z.parseXSDDecimal=Z.parseXSDFloat=void 0;function G(J){const Y=Number(J);return Number.isNaN(Y)?J==="NaN"?Number.NaN:J==="INF"||J==="+INF"?Number.POSITIVE_INFINITY:J==="-INF"?Number.NEGATIVE_INFINITY:void 0:Y}Z.parseXSDFloat=G;function W(J){const Y=Number(J);return Number.isNaN(Y)?void 0:Y}Z.parseXSDDecimal=W;function F(J){const Y=Number.parseInt(J,10);return Number.isNaN(Y)?void 0:Y}Z.parseXSDInteger=F;function U(J){const Y=J.indexOf("T"),D=Y>=0?J.slice(0,Math.max(0,Y)):J,[Q,te,q]=D.split("-");let ee="00",ie="00",ne="00",le="";if(Y>=0){const ae=J.slice(Y+1),[se,he]=ae.split(/[+Z-]/u);[ee,ie,ne]=se.split(":");const pe=/([+Z-].*)/u.exec(ae);le=pe?pe[0]:""}return{year:Q,month:te,day:q,hours:ee,minutes:ie,seconds:ne,timezone:le}}Z.parseXSDDateTime=U},"../node_modules/sparqlee/dist/lib/util/TypeHandling.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.isSubTypeOf=Z.getSuperTypeDict=Z.isInternalSubType=Z.asGeneralType=Z.asOverrideType=Z.asKnownLiteralType=Z.asTypeAlias=Z.typeAliasCheck=Z.extensionTableInit=Z.getSuperTypes=Z.superTypeDictTable=Z.extensionTableInput=void 0;const W=G("../node_modules/sparqlee/dist/lib/expressions/index.js"),F=G("../node_modules/sparqlee/dist/lib/util/Consts.js");Z.extensionTableInput={[F.TypeURL.XSD_DATE_TIME_STAMP]:F.TypeURL.XSD_DATE_TIME,[F.TypeURL.XSD_DAYTIME_DURATION]:F.TypeURL.XSD_DURATION,[F.TypeURL.XSD_YEAR_MONTH_DURATION]:F.TypeURL.XSD_DURATION,[F.TypeURL.RDF_LANG_STRING]:F.TypeAlias.SPARQL_STRINGLY,[F.TypeURL.XSD_STRING]:F.TypeAlias.SPARQL_STRINGLY,[F.TypeURL.XSD_NORMALIZED_STRING]:F.TypeURL.XSD_STRING,[F.TypeURL.XSD_TOKEN]:F.TypeURL.XSD_NORMALIZED_STRING,[F.TypeURL.XSD_LANGUAGE]:F.TypeURL.XSD_TOKEN,[F.TypeURL.XSD_NM_TOKEN]:F.TypeURL.XSD_TOKEN,[F.TypeURL.XSD_NAME]:F.TypeURL.XSD_TOKEN,[F.TypeURL.XSD_NC_NAME]:F.TypeURL.XSD_NAME,[F.TypeURL.XSD_ENTITY]:F.TypeURL.XSD_NC_NAME,[F.TypeURL.XSD_ID]:F.TypeURL.XSD_NC_NAME,[F.TypeURL.XSD_ID_REF]:F.TypeURL.XSD_NC_NAME,[F.TypeURL.XSD_DOUBLE]:F.TypeAlias.SPARQL_NUMERIC,[F.TypeURL.XSD_FLOAT]:F.TypeAlias.SPARQL_NUMERIC,[F.TypeURL.XSD_DECIMAL]:F.TypeAlias.SPARQL_NUMERIC,[F.TypeURL.XSD_INTEGER]:F.TypeURL.XSD_DECIMAL,[F.TypeURL.XSD_NON_POSITIVE_INTEGER]:F.TypeURL.XSD_INTEGER,[F.TypeURL.XSD_NEGATIVE_INTEGER]:F.TypeURL.XSD_NON_POSITIVE_INTEGER,[F.TypeURL.XSD_LONG]:F.TypeURL.XSD_INTEGER,[F.TypeURL.XSD_INT]:F.TypeURL.XSD_LONG,[F.TypeURL.XSD_SHORT]:F.TypeURL.XSD_INT,[F.TypeURL.XSD_BYTE]:F.TypeURL.XSD_SHORT,[F.TypeURL.XSD_NON_NEGATIVE_INTEGER]:F.TypeURL.XSD_INTEGER,[F.TypeURL.XSD_POSITIVE_INTEGER]:F.TypeURL.XSD_NON_NEGATIVE_INTEGER,[F.TypeURL.XSD_UNSIGNED_LONG]:F.TypeURL.XSD_NON_NEGATIVE_INTEGER,[F.TypeURL.XSD_UNSIGNED_INT]:F.TypeURL.XSD_UNSIGNED_LONG,[F.TypeURL.XSD_UNSIGNED_SHORT]:F.TypeURL.XSD_UNSIGNED_INT,[F.TypeURL.XSD_UNSIGNED_BYTE]:F.TypeURL.XSD_UNSIGNED_SHORT,[F.TypeURL.XSD_DATE_TIME]:"term",[F.TypeURL.XSD_BOOLEAN]:"term",[F.TypeURL.XSD_DATE]:"term",[F.TypeURL.XSD_DURATION]:"term",[F.TypeAlias.SPARQL_NUMERIC]:"term",[F.TypeAlias.SPARQL_STRINGLY]:"term",[F.TypeAlias.SPARQL_NON_LEXICAL]:"term",[F.TypeURL.XSD_ANY_URI]:"term"};function U(ae,se){const he=se.cache.get(ae);if(he)return he;const pe=se.discoverer(ae);if(pe==="term"){const ue=Object.create(null);return ue.__depth=0,ue[ae]=0,se.cache.set(ae,ue),ue}let oe;const de=te(pe);return de?oe=Object.assign({},Z.superTypeDictTable[de]):oe=Object.assign({},U(pe,se)),oe.__depth++,oe[ae]=oe.__depth,se.cache.set(ae,oe),oe}Z.getSuperTypes=U;function J(){const ae=Object.create(null);for(const[se,he]of Object.entries(Z.extensionTableInput)){const pe=se;ae[pe]||Y(pe,he,ae)}Z.superTypeDictTable=ae}Z.extensionTableInit=J,J();function Y(ae,se,he){if(se==="term"||se===void 0){const pe=Object.create(null);pe.__depth=0,pe[ae]=0,he[ae]=pe;return}he[se]||Y(se,Z.extensionTableInput[se],he),he[ae]=Object.assign(Object.assign({},he[se]),{[ae]:he[se].__depth+1,__depth:he[se].__depth+1})}function D(){Z.typeAliasCheck=Object.create(null);for(const ae of Object.values(F.TypeAlias))Z.typeAliasCheck[ae]=!0}D();function Q(ae){if(ae in Z.typeAliasCheck)return ae}Z.asTypeAlias=Q;function te(ae){if(ae in Z.superTypeDictTable)return ae}Z.asKnownLiteralType=te;function q(ae){if(te(ae)||ae==="term")return ae}Z.asOverrideType=q;function ee(ae){if(ae==="term"||(0,W.asTermType)(ae))return ae}Z.asGeneralType=ee;function ie(ae,se){return ae!=="term"&&Z.superTypeDictTable[ae]&&Z.superTypeDictTable[ae][se]!==void 0}Z.isInternalSubType=ie;function ne(ae,se){const he=te(ae);return he?Z.superTypeDictTable[he]:U(ae,se)}Z.getSuperTypeDict=ne;function le(ae,se,he){return ae==="term"?!1:ne(ae,he)[se]!==void 0}Z.isSubTypeOf=le},"../node_modules/stream-to-string/index.js":(X,Z,G)=>{var W=G("./require-empty.js");X.exports=function(F,U,J){typeof U=="function"&&(J=U,U=null),J=J||function(){};var Y="";return new W(function(D,Q){F.on("data",function(te){Y+=typeof U=="string"?te.toString(U):te.toString()}),F.on("end",function(){D(Y),J(null,Y)}),F.on("error",function(te){Q(te),J(te)})})}},"../node_modules/typed-immutable-map/dist/HashMap/empty.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.empty=void 0;const F={node:G("../node_modules/typed-immutable-map/dist/nodes/index.js").EMPTY,size:0};function U(){return F}Z.empty=U},"../node_modules/typed-immutable-map/dist/HashMap/entries.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.entries=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js");function F(J){return(0,W.iterator)((0,W.getNode)(J),U)}Z.entries=F;function U(J){return[J.key,J.value]}},"../node_modules/typed-immutable-map/dist/HashMap/filter.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.filter=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/empty.js"),F=G("../node_modules/typed-immutable-map/dist/HashMap/reduce.js"),U=G("../node_modules/typed-immutable-map/dist/HashMap/set.js"),J=function(D,Q){return(0,F.reduce)(function(te,q,ee){return D(q,ee)?(0,U.set)(ee,q,te):te},(0,W.empty)(),Q)};Z.filter=J},"../node_modules/typed-immutable-map/dist/HashMap/forEach.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.forEach=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/reduce.js"),F=function(J,Y){return(0,W.reduce)((D,Q,te)=>J(Q,te),null,Y),Y};Z.forEach=F},"../node_modules/typed-immutable-map/dist/HashMap/from.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.fromObject=Z.fromIterable=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/empty.js"),F=G("../node_modules/typed-immutable-map/dist/HashMap/set.js");function U(Y){let D=(0,W.empty)();for(const[Q,te]of Y)D=(0,F.set)(Q,te,D);return D}Z.fromIterable=U;function J(Y){let D=(0,W.empty)();for(let Q in Y)Y.hasOwnProperty(Q)&&(D=(0,F.set)(Q,Y[Q],D));return D}Z.fromObject=J},"../node_modules/typed-immutable-map/dist/HashMap/get.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.get=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js");function F(U,J,Y){const D=(0,W.findHash)(U);return(0,W.getHash)(void 0,D,U,J,Y)}Z.get=F},"../node_modules/typed-immutable-map/dist/HashMap/has.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.has=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js"),F=G("../node_modules/typed-immutable-map/dist/nodes/index.js");function U(J,Y,D){const Q=(0,W.findHash)(J);return(0,W.getHash)(F.NOTHING,Q,J,Y,D)!==F.NOTHING}Z.has=U},"../node_modules/typed-immutable-map/dist/HashMap/keys.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.keys=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js");function F(J){return(0,W.iterator)((0,W.getNode)(J),U)}Z.keys=F;function U(J){return J.key}},"../node_modules/typed-immutable-map/dist/HashMap/map.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.map=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/empty.js"),F=G("../node_modules/typed-immutable-map/dist/HashMap/reduce.js"),U=G("../node_modules/typed-immutable-map/dist/HashMap/set.js"),J=function(D,Q){return(0,F.reduce)(function(te,q,ee){return(0,U.set)(ee,D(q,ee),te)},(0,W.empty)(),Q)};Z.map=J},"../node_modules/typed-immutable-map/dist/HashMap/primitives/findHash.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.findHash=void 0;const W=G("../node_modules/typed-immutable-map/dist/common/index.js");function F(U){return typeof U=="number"?U:typeof U=="string"?(0,W.stringHash)(U):Math.abs((0,W.stringHash)(JSON.stringify(U)))}Z.findHash=F},"../node_modules/typed-immutable-map/dist/HashMap/primitives/fold.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.fold=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/getNode.js");function F(U,J,Y){const D=(0,W.getNode)(Y);if(D.type===0)return J;if(D.type===1)return U(J,D.value,D.key);const Q=[D.children];let te;for(;te=Q.shift();)for(let q=0;q<te.length;++q){const ee=te[q];ee&&ee.type!==0&&(ee.type===1?J=U(J,ee.value,ee.key):Q.push(ee.children))}return J}Z.fold=F},"../node_modules/typed-immutable-map/dist/HashMap/primitives/getHash.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.getHash=void 0;const W=G("../node_modules/typed-immutable-map/dist/common/index.js"),F=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/getNode.js"),U=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/keyEquals.js");function J(Y,D,Q,te,q=U.defaultKeyEquals){let ee=(0,F.getNode)(te),ie=0;for(;;)switch(ee.type){case 1:return q(Q,ee.key)?ee.value:Y;case 2:if(D===ee.hash){const ne=ee.children;for(let le=0;le<ne.length;++le){const ae=ne[le];if(q(Q,ae.key))return ae.value}return Y}case 3:{const ne=(0,W.hashFragment)(ie,D),le=(0,W.toBitmap)(ne);if(ee.mask&le){const ae=(0,W.bitmapToIndex)(ee.mask,le);ee=ee.children[ae],ie+=W.SIZE;break}return Y}case 4:{if(ee=ee.children[(0,W.hashFragment)(ie,D)],ee){ie+=W.SIZE;break}return Y}default:return Y}}Z.getHash=J},"../node_modules/typed-immutable-map/dist/HashMap/primitives/getNode.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.getNode=void 0;function G(W){return W.node}Z.getNode=G},"../node_modules/typed-immutable-map/dist/HashMap/primitives/getSize.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.getSize=void 0;function G(W){return W.size}Z.getSize=G},"../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y),Object.defineProperty(U,D,{enumerable:!0,get:function(){return J[Y]}})}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/typed-immutable-map/dist/HashMap/primitives/getHash.js"),Z),F(G("../node_modules/typed-immutable-map/dist/HashMap/primitives/getNode.js"),Z),F(G("../node_modules/typed-immutable-map/dist/HashMap/primitives/setTree.js"),Z),F(G("../node_modules/typed-immutable-map/dist/HashMap/primitives/setKeyValue.js"),Z),F(G("../node_modules/typed-immutable-map/dist/HashMap/primitives/findHash.js"),Z),F(G("../node_modules/typed-immutable-map/dist/HashMap/primitives/iterateMap.js"),Z),F(G("../node_modules/typed-immutable-map/dist/HashMap/primitives/fold.js"),Z),F(G("../node_modules/typed-immutable-map/dist/HashMap/primitives/keyEquals.js"),Z)},"../node_modules/typed-immutable-map/dist/HashMap/primitives/iterateMap.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.iterator=void 0;function G(D,Q){return new W(U(D,Q,[]))}Z.iterator=G;class W{_iterate;constructor(Q){this._iterate=Q}next(){if(!this._iterate)return{done:!0,value:null};const{value:Q,rest:te}=this._iterate;return this._iterate=F(te),{done:!1,value:Q}}[Symbol.iterator](){return this}}const F=D=>D&&J(D[0],D[1],D[2],D[3],D[4]);function U(D,Q,te){switch(D.type){case 1:return{value:Q(D),rest:te};case 2:case 4:case 3:const q=D.children;return J(q.length,q,0,Q,te);default:return F(te)}}function J(D,Q,te,q,ee){for(;te<D;){const ie=Q[te++];if(ie&&Y(ie))return U(ie,q,[D,Q,te,q,ee])}return F(ee)}function Y(D){return D&&D.type!==0}},"../node_modules/typed-immutable-map/dist/HashMap/primitives/keyEquals.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.defaultKeyEquals=void 0;const G=(W,F)=>W===F;Z.defaultKeyEquals=G},"../node_modules/typed-immutable-map/dist/HashMap/primitives/setKeyValue.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.setKeyValue=void 0;const W=G("../node_modules/typed-immutable-map/dist/nodes/index.js"),F=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/findHash.js"),U=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/getNode.js"),J=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/getSize.js"),Y=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/setTree.js"),D=te=>()=>te;function Q(te,q,ee){const ie=(0,F.findHash)(te),ne={value:(0,J.getSize)(ee)},le=(0,W.modify)((0,U.getNode)(ee),0,D(q),ie,te,ne);return(0,Y.setTree)(le,ne.value,ee)}Z.setKeyValue=Q},"../node_modules/typed-immutable-map/dist/HashMap/primitives/setTree.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.setTree=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/getNode.js");function F(U,J,Y){return U===(0,W.getNode)(Y)?Y:{node:U,size:J}}Z.setTree=F},"../node_modules/typed-immutable-map/dist/HashMap/reduce.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.reduce=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js");Z.reduce=W.fold},"../node_modules/typed-immutable-map/dist/HashMap/remove.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.remove=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js"),F=G("../node_modules/typed-immutable-map/dist/nodes/constants.js");function U(J,Y){return(0,W.setKeyValue)(J,F.NOTHING,Y)}Z.remove=U},"../node_modules/typed-immutable-map/dist/HashMap/set.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.set=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js");Z.set=W.setKeyValue},"../node_modules/typed-immutable-map/dist/HashMap/size.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.size=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/getSize.js");function F(U){return(0,W.getSize)(U)}Z.size=F},"../node_modules/typed-immutable-map/dist/HashMap/values.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.values=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/primitives/index.js");function F(J){return(0,W.iterator)((0,W.getNode)(J),U)}Z.values=F;function U(J){return J.value}},"../node_modules/typed-immutable-map/dist/common/array-operations.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.insert=Z.remove=Z.replace=void 0;function G(U,J,Y){const D=Y.length,Q=Array(D);for(let te=0;te<D;++te)Q[te]=Y[te];return Q[U]=J,Q}Z.replace=G;function W(U,J){const Y=J.length;if(Y===0||U>=Y)return J;if(Y===1)return[];const D=Array(Y-1);let Q=0;for(;Q<U;++Q)D[Q]=J[Q];for(Q=Q+1;Q<Y;++Q)D[Q-1]=J[Q];return D}Z.remove=W;function F(U,J,Y){const D=Y.length,Q=Array(D+1);let te=0;for(;te<U;++te)Q[te]=Y[te];for(Q[te++]=J;te<D+1;++te)Q[te]=Y[te-1];return Q}Z.insert=F},"../node_modules/typed-immutable-map/dist/common/bitwise-operations.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.bitmapToIndex=Z.toBitmap=Z.hashFragment=Z.hammingWeight=void 0;const W=G("../node_modules/typed-immutable-map/dist/common/constants.js");function F(D){return D=D-(D>>1&1431655765),D=(D&858993459)+(D>>2&858993459),(D+(D>>4)&252645135)*16843009>>24}Z.hammingWeight=F;function U(D,Q){return Q>>>D&W.MASK}Z.hashFragment=U;function J(D){return 1<<D}Z.toBitmap=J;function Y(D,Q){return F(D&Q-1)}Z.bitmapToIndex=Y},"../node_modules/typed-immutable-map/dist/common/constants.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.MIN_ARRAY_NODE=Z.MAX_INDEX_NODE=Z.MASK=Z.BUCKET_SIZE=Z.SIZE=void 0,Z.SIZE=5,Z.BUCKET_SIZE=Math.pow(2,Z.SIZE),Z.MASK=Z.BUCKET_SIZE-1,Z.MAX_INDEX_NODE=Z.BUCKET_SIZE/2,Z.MIN_ARRAY_NODE=Z.BUCKET_SIZE/4},"../node_modules/typed-immutable-map/dist/common/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y),Object.defineProperty(U,D,{enumerable:!0,get:function(){return J[Y]}})}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/typed-immutable-map/dist/common/array-operations.js"),Z),F(G("../node_modules/typed-immutable-map/dist/common/bitwise-operations.js"),Z),F(G("../node_modules/typed-immutable-map/dist/common/constants.js"),Z),F(G("../node_modules/typed-immutable-map/dist/common/stringHash.js"),Z)},"../node_modules/typed-immutable-map/dist/common/stringHash.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.stringHash=void 0;function G(W){let F=0;for(let U=0;U<W.length;++U)F=(F<<5)-F+W.charCodeAt(U)|0;return F}Z.stringHash=G},"../node_modules/typed-immutable-map/dist/nodes/ArrayNode/ArrayNode.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.modifyListNode=void 0;const W=G("../node_modules/typed-immutable-map/dist/nodes/EmptyNode.js"),F=G("../node_modules/typed-immutable-map/dist/nodes/modify.js"),U=G("../node_modules/typed-immutable-map/dist/common/index.js"),J=G("../node_modules/typed-immutable-map/dist/nodes/ArrayNode/toIndexNode.js");function Y(Q,te,q,ee,ie,ne){const{size:le,children:ae}=Q,se=(0,U.hashFragment)(te,ee),he=ae[se],pe=(0,F.modify)(he||(0,W.empty)(),te+U.SIZE,q,ee,ie,ne);return he===pe?Q:D(he)&&!D(pe)?{type:4,size:le+1,children:(0,U.replace)(se,pe,ae)}:!D(he)&&D(pe)?le-1<=U.MIN_ARRAY_NODE?(0,J.toIndexNode)(le,se,ae):{type:4,size:le-1,children:(0,U.replace)(se,(0,W.empty)(),ae)}:{type:4,size:le,children:(0,U.replace)(se,pe,ae)}}Z.modifyListNode=Y;function D(Q){return Q&&Q.type===0}},"../node_modules/typed-immutable-map/dist/nodes/ArrayNode/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y),Object.defineProperty(U,D,{enumerable:!0,get:function(){return J[Y]}})}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/typed-immutable-map/dist/nodes/ArrayNode/ArrayNode.js"),Z)},"../node_modules/typed-immutable-map/dist/nodes/ArrayNode/toIndexNode.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.toIndexNode=void 0;function G(W,F,U){const J=new Array(W-1);let Y=0,D=0;for(let Q=0;Q<U.length;++Q)if(Q!==F){const te=U[Q];te&&te.type>0&&(J[Y++]=te,D|=1<<Q)}return{type:3,mask:D,children:J}}Z.toIndexNode=G},"../node_modules/typed-immutable-map/dist/nodes/CollisionNode/CollisionNode.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.modifyCollisionNode=void 0;const W=G("../node_modules/typed-immutable-map/dist/nodes/constants.js"),F=G("../node_modules/typed-immutable-map/dist/nodes/LeafNode/index.js"),U=G("../node_modules/typed-immutable-map/dist/nodes/CollisionNode/newCollisionList.js");function J(Y,D,Q,te,q,ee){if(te===Y.hash){const ne=(0,U.newCollisionList)(Y.hash,Y.children,Q,q,ee);return ne===Y.children?Y:ne.length>1?{type:2,hash:Y.hash,children:ne}:ne[0]}const ie=Q();return ie===W.NOTHING?Y:(++ee.value,(0,F.combineLeafNodes)(D,Y.hash,Y,te,{type:1,hash:te,key:q,value:ie}))}Z.modifyCollisionNode=J},"../node_modules/typed-immutable-map/dist/nodes/CollisionNode/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y),Object.defineProperty(U,D,{enumerable:!0,get:function(){return J[Y]}})}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/typed-immutable-map/dist/nodes/CollisionNode/CollisionNode.js"),Z)},"../node_modules/typed-immutable-map/dist/nodes/CollisionNode/newCollisionList.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.newCollisionList=void 0;const W=G("../node_modules/typed-immutable-map/dist/nodes/constants.js"),F=G("../node_modules/typed-immutable-map/dist/common/index.js");function U(J,Y,D,Q,te){const q=Y.length;for(let ie=0;ie<q;++ie){const ne=Y[ie];if(ne.key===Q){const le=ne.value,ae=D(le);return ae===le?Y:ae===W.NOTHING?(--te.value,(0,F.remove)(ie,Y)):(0,F.insert)(ie,{type:1,hash:J,key:Q,value:ae},Y)}}const ee=D();return ee===W.NOTHING?Y:(++te.value,(0,F.insert)(q,{type:1,hash:J,key:Q,value:ee},Y))}Z.newCollisionList=U},"../node_modules/typed-immutable-map/dist/nodes/EmptyNode.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.empty=Z.EMPTY=Z.modifyEmpty=void 0;const W=G("../node_modules/typed-immutable-map/dist/nodes/constants.js");function F(J,Y,D,Q,te,q){const ee=D(void 0);return ee===W.NOTHING?J:(++q.value,{type:1,hash:Q,key:te,value:ee})}Z.modifyEmpty=F,Z.EMPTY={type:0};function U(){return Z.EMPTY}Z.empty=U},"../node_modules/typed-immutable-map/dist/nodes/IndexedNode/IndexedNode.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.modifyIndexedNode=void 0;const W=G("../node_modules/typed-immutable-map/dist/nodes/EmptyNode.js"),F=G("../node_modules/typed-immutable-map/dist/common/index.js"),U=G("../node_modules/typed-immutable-map/dist/nodes/modify.js"),J=G("../node_modules/typed-immutable-map/dist/nodes/IndexedNode/toArrayNode.js");function Y(Q,te,q,ee,ie,ne){const{mask:le,children:ae}=Q,se=(0,F.hashFragment)(te,ee),he=(0,F.toBitmap)(se),pe=(0,F.bitmapToIndex)(le,he),oe=!!(le&he),de=oe?ae[pe]:(0,W.empty)(),ue=(0,U.modify)(de,te+F.SIZE,q,ee,ie,ne);if(de===ue)return Q;if(oe&&ue.type===0){const ge=le&~he;return ge?ae.length<=2&&D(ae[pe^1])?ae[pe^1]:{type:3,mask:ge,children:(0,F.remove)(pe,ae)}:(0,W.empty)()}return!oe&&ue.type!==0?ae.length>=F.MAX_INDEX_NODE?(0,J.toArrayNode)(se,ue,le,ae):{type:3,mask:le|he,children:(0,F.insert)(pe,ue,ae)}:{type:3,mask:le,children:(0,F.replace)(pe,ue,ae)}}Z.modifyIndexedNode=Y;function D(Q){const te=Q.type;return te===0||te===1||te===2}},"../node_modules/typed-immutable-map/dist/nodes/IndexedNode/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y),Object.defineProperty(U,D,{enumerable:!0,get:function(){return J[Y]}})}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/typed-immutable-map/dist/nodes/IndexedNode/IndexedNode.js"),Z)},"../node_modules/typed-immutable-map/dist/nodes/IndexedNode/toArrayNode.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.toArrayNode=void 0;function G(W,F,U,J){const Y=[];let D=U,Q=0;for(let te=0;D;++te)D&1&&(Y[te]=J[Q++]),D>>>=1;return Y[W]=F,{type:4,size:Q+1,children:Y}}Z.toArrayNode=G},"../node_modules/typed-immutable-map/dist/nodes/LeafNode/LeafNode.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.modifyLeaf=void 0;const W=G("../node_modules/typed-immutable-map/dist/nodes/constants.js"),F=G("../node_modules/typed-immutable-map/dist/nodes/EmptyNode.js"),U=G("../node_modules/typed-immutable-map/dist/nodes/LeafNode/combineLeafNodes.js");function J(Y,D,Q,te,q,ee){if(q===Y.key){const ne=Q(Y.value);return ne===Y.value?Y:ne===W.NOTHING?(--ee.value,(0,F.empty)()):{type:1,hash:te,key:q,value:ne}}const ie=Q();return ie===W.NOTHING?Y:(++ee.value,(0,U.combineLeafNodes)(D,Y.hash,Y,te,{type:1,hash:te,key:q,value:ie}))}Z.modifyLeaf=J},"../node_modules/typed-immutable-map/dist/nodes/LeafNode/combineLeafNodes.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.combineLeafNodes=void 0;const W=G("../node_modules/typed-immutable-map/dist/common/index.js");function F(U,J,Y,D,Q){if(J===D)return{type:2,hash:J,children:[Q,Y]};const te=(0,W.hashFragment)(U,J),q=(0,W.hashFragment)(U,D);return{type:3,mask:(0,W.toBitmap)(te)|(0,W.toBitmap)(q),children:te===q?[F(U+W.SIZE,J,Y,D,Q)]:te<q?[Y,Q]:[Q,Y]}}Z.combineLeafNodes=F},"../node_modules/typed-immutable-map/dist/nodes/LeafNode/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y),Object.defineProperty(U,D,{enumerable:!0,get:function(){return J[Y]}})}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/typed-immutable-map/dist/nodes/LeafNode/LeafNode.js"),Z),F(G("../node_modules/typed-immutable-map/dist/nodes/LeafNode/combineLeafNodes.js"),Z)},"../node_modules/typed-immutable-map/dist/nodes/constants.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.NOTHING=void 0,Z.NOTHING=Object.create(null)},"../node_modules/typed-immutable-map/dist/nodes/index.js":function(X,Z,G){var W=this&&this.__createBinding||(Object.create?function(U,J,Y,D){D===void 0&&(D=Y),Object.defineProperty(U,D,{enumerable:!0,get:function(){return J[Y]}})}:function(U,J,Y,D){D===void 0&&(D=Y),U[D]=J[Y]}),F=this&&this.__exportStar||function(U,J){for(var Y in U)Y!=="default"&&!Object.prototype.hasOwnProperty.call(J,Y)&&W(J,U,Y)};Object.defineProperty(Z,"__esModule",{value:!0}),F(G("../node_modules/typed-immutable-map/dist/nodes/types.js"),Z),F(G("../node_modules/typed-immutable-map/dist/nodes/constants.js"),Z),F(G("../node_modules/typed-immutable-map/dist/nodes/EmptyNode.js"),Z),F(G("../node_modules/typed-immutable-map/dist/nodes/ArrayNode/index.js"),Z),F(G("../node_modules/typed-immutable-map/dist/nodes/CollisionNode/index.js"),Z),F(G("../node_modules/typed-immutable-map/dist/nodes/IndexedNode/index.js"),Z),F(G("../node_modules/typed-immutable-map/dist/nodes/LeafNode/index.js"),Z),F(G("../node_modules/typed-immutable-map/dist/nodes/modify.js"),Z)},"../node_modules/typed-immutable-map/dist/nodes/modify.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.modify=void 0;const W=G("../node_modules/typed-immutable-map/dist/nodes/LeafNode/index.js"),F=G("../node_modules/typed-immutable-map/dist/nodes/EmptyNode.js"),U=G("../node_modules/typed-immutable-map/dist/nodes/ArrayNode/index.js"),J=G("../node_modules/typed-immutable-map/dist/nodes/IndexedNode/index.js"),Y=G("../node_modules/typed-immutable-map/dist/nodes/CollisionNode/index.js");function D(Q,te,q,ee,ie,ne){switch(Q.type){case 1:return(0,W.modifyLeaf)(Q,te,q,ee,ie,ne);case 0:return(0,F.modifyEmpty)(Q,te,q,ee,ie,ne);case 4:return(0,U.modifyListNode)(Q,te,q,ee,ie,ne);case 3:return(0,J.modifyIndexedNode)(Q,te,q,ee,ie,ne);case 2:return(0,Y.modifyCollisionNode)(Q,te,q,ee,ie,ne);default:throw new Error("never")}}Z.modify=D},"../node_modules/typed-immutable-map/dist/nodes/types.js":(X,Z)=>{Object.defineProperty(Z,"__esModule",{value:!0})},"../node_modules/uuid-random/index.js":(X,Z,G)=>{(function(){var W,F=0,U=[],J;for(J=0;J<256;J++)U[J]=(J+256).toString(16).substr(1);te.BUFFER_SIZE=4096,te.bin=Q,te.clearBuffer=function(){W=null,F=0},te.test=function(q){return typeof q=="string"?/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(q):!1};var Y;typeof crypto<"u"?Y=crypto:typeof window<"u"&&typeof window.msCrypto<"u"&&(Y=window.msCrypto),Y=Y||G("?699d"),X.exports=te,te.randomBytes=function(){if(Y){if(Y.randomBytes)return Y.randomBytes;if(Y.getRandomValues)return typeof Uint8Array.prototype.slice!="function"?function(q){var ee=new Uint8Array(q);return Y.getRandomValues(ee),Array.from(ee)}:function(q){var ee=new Uint8Array(q);return Y.getRandomValues(ee),ee}}return function(q){var ee,ie=[];for(ee=0;ee<q;ee++)ie.push(Math.floor(Math.random()*256));return ie}}();function D(q){return(!W||F+q>te.BUFFER_SIZE)&&(F=0,W=te.randomBytes(te.BUFFER_SIZE)),W.slice(F,F+=q)}function Q(){var q=D(16);return q[6]=q[6]&15|64,q[8]=q[8]&63|128,q}function te(){var q=Q();return U[q[0]]+U[q[1]]+U[q[2]]+U[q[3]]+"-"+U[q[4]]+U[q[5]]+"-"+U[q[6]]+U[q[7]]+"-"+U[q[8]]+U[q[9]]+"-"+U[q[10]]+U[q[11]]+U[q[12]]+U[q[13]]+U[q[14]]+U[q[15]]}})()},"../node_modules/yallist/iterator.js":X=>{X.exports=function(Z){Z.prototype[Symbol.iterator]=function*(){for(let G=this.head;G;G=G.next)yield G.value}}},"../node_modules/yallist/yallist.js":(X,Z,G)=>{X.exports=W,W.Node=Y,W.create=W;function W(D){var Q=this;if(Q instanceof W||(Q=new W),Q.tail=null,Q.head=null,Q.length=0,D&&typeof D.forEach=="function")D.forEach(function(ee){Q.push(ee)});else if(arguments.length>0)for(var te=0,q=arguments.length;te<q;te++)Q.push(arguments[te]);return Q}W.prototype.removeNode=function(D){if(D.list!==this)throw new Error("removing node which does not belong to this list");var Q=D.next,te=D.prev;return Q&&(Q.prev=te),te&&(te.next=Q),D===this.head&&(this.head=Q),D===this.tail&&(this.tail=te),D.list.length--,D.next=null,D.prev=null,D.list=null,Q},W.prototype.unshiftNode=function(D){if(D!==this.head){D.list&&D.list.removeNode(D);var Q=this.head;D.list=this,D.next=Q,Q&&(Q.prev=D),this.head=D,this.tail||(this.tail=D),this.length++}},W.prototype.pushNode=function(D){if(D!==this.tail){D.list&&D.list.removeNode(D);var Q=this.tail;D.list=this,D.prev=Q,Q&&(Q.next=D),this.tail=D,this.head||(this.head=D),this.length++}},W.prototype.push=function(){for(var D=0,Q=arguments.length;D<Q;D++)U(this,arguments[D]);return this.length},W.prototype.unshift=function(){for(var D=0,Q=arguments.length;D<Q;D++)J(this,arguments[D]);return this.length},W.prototype.pop=function(){if(this.tail){var D=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,D}},W.prototype.shift=function(){if(this.head){var D=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,D}},W.prototype.forEach=function(D,Q){Q=Q||this;for(var te=this.head,q=0;te!==null;q++)D.call(Q,te.value,q,this),te=te.next},W.prototype.forEachReverse=function(D,Q){Q=Q||this;for(var te=this.tail,q=this.length-1;te!==null;q--)D.call(Q,te.value,q,this),te=te.prev},W.prototype.get=function(D){for(var Q=0,te=this.head;te!==null&&Q<D;Q++)te=te.next;if(Q===D&&te!==null)return te.value},W.prototype.getReverse=function(D){for(var Q=0,te=this.tail;te!==null&&Q<D;Q++)te=te.prev;if(Q===D&&te!==null)return te.value},W.prototype.map=function(D,Q){Q=Q||this;for(var te=new W,q=this.head;q!==null;)te.push(D.call(Q,q.value,this)),q=q.next;return te},W.prototype.mapReverse=function(D,Q){Q=Q||this;for(var te=new W,q=this.tail;q!==null;)te.push(D.call(Q,q.value,this)),q=q.prev;return te},W.prototype.reduce=function(D,Q){var te,q=this.head;if(arguments.length>1)te=Q;else if(this.head)q=this.head.next,te=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var ee=0;q!==null;ee++)te=D(te,q.value,ee),q=q.next;return te},W.prototype.reduceReverse=function(D,Q){var te,q=this.tail;if(arguments.length>1)te=Q;else if(this.tail)q=this.tail.prev,te=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var ee=this.length-1;q!==null;ee--)te=D(te,q.value,ee),q=q.prev;return te},W.prototype.toArray=function(){for(var D=new Array(this.length),Q=0,te=this.head;te!==null;Q++)D[Q]=te.value,te=te.next;return D},W.prototype.toArrayReverse=function(){for(var D=new Array(this.length),Q=0,te=this.tail;te!==null;Q++)D[Q]=te.value,te=te.prev;return D},W.prototype.slice=function(D,Q){Q=Q||this.length,Q<0&&(Q+=this.length),D=D||0,D<0&&(D+=this.length);var te=new W;if(Q<D||Q<0)return te;D<0&&(D=0),Q>this.length&&(Q=this.length);for(var q=0,ee=this.head;ee!==null&&q<D;q++)ee=ee.next;for(;ee!==null&&q<Q;q++,ee=ee.next)te.push(ee.value);return te},W.prototype.sliceReverse=function(D,Q){Q=Q||this.length,Q<0&&(Q+=this.length),D=D||0,D<0&&(D+=this.length);var te=new W;if(Q<D||Q<0)return te;D<0&&(D=0),Q>this.length&&(Q=this.length);for(var q=this.length,ee=this.tail;ee!==null&&q>Q;q--)ee=ee.prev;for(;ee!==null&&q>D;q--,ee=ee.prev)te.push(ee.value);return te},W.prototype.splice=function(D,Q,...te){D>this.length&&(D=this.length-1),D<0&&(D=this.length+D);for(var q=0,ee=this.head;ee!==null&&q<D;q++)ee=ee.next;for(var ie=[],q=0;ee&&q<Q;q++)ie.push(ee.value),ee=this.removeNode(ee);ee===null&&(ee=this.tail),ee!==this.head&&ee!==this.tail&&(ee=ee.prev);for(var q=0;q<te.length;q++)ee=F(this,ee,te[q]);return ie},W.prototype.reverse=function(){for(var D=this.head,Q=this.tail,te=D;te!==null;te=te.prev){var q=te.prev;te.prev=te.next,te.next=q}return this.head=Q,this.tail=D,this};function F(D,Q,te){var q=Q===D.head?new Y(te,null,Q,D):new Y(te,Q,Q.next,D);return q.next===null&&(D.tail=q),q.prev===null&&(D.head=q),D.length++,q}function U(D,Q){D.tail=new Y(Q,D.tail,null,D),D.head||(D.head=D.tail),D.length++}function J(D,Q){D.head=new Y(Q,null,D.head,D),D.tail||(D.tail=D.head),D.length++}function Y(D,Q,te,q){if(!(this instanceof Y))return new Y(D,Q,te,q);this.list=q,this.value=D,Q?(Q.next=this,this.prev=Q):this.prev=null,te?(te.prev=this,this.next=te):this.next=null}try{G("../node_modules/yallist/iterator.js")(W)}catch{}},"../packages/immutable/dist/Map.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.Map=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/has.js"),F=G("../node_modules/typed-immutable-map/dist/HashMap/get.js"),U=G("../node_modules/typed-immutable-map/dist/HashMap/set.js"),J=G("../node_modules/typed-immutable-map/dist/HashMap/forEach.js"),Y=G("../node_modules/typed-immutable-map/dist/HashMap/map.js"),D=G("../node_modules/typed-immutable-map/dist/HashMap/filter.js"),Q=G("../node_modules/typed-immutable-map/dist/HashMap/remove.js"),te=G("../node_modules/typed-immutable-map/dist/HashMap/entries.js"),q=G("../node_modules/typed-immutable-map/dist/HashMap/values.js"),ee=G("../node_modules/typed-immutable-map/dist/HashMap/keys.js"),ie=G("../node_modules/typed-immutable-map/dist/HashMap/size.js");class ne{hashmap;constructor(ae){this.hashmap=ae}get size(){return(0,ie.size)(this.hashmap)}set(ae,se){return new ne((0,U.set)(ae,se,this.hashmap))}delete(ae){return new ne((0,Q.remove)(ae,this.hashmap))}get(ae){return(0,F.get)(ae,this.hashmap)}has(ae){return(0,W.has)(ae,this.hashmap)}forEach(ae){(0,J.forEach)(ae,this.hashmap)}map(ae){return new ne((0,Y.map)(ae,this.hashmap))}filter(ae){return new ne((0,D.filter)(ae,this.hashmap))}toJS(){return Object.fromEntries(this)}toJSON(){return this.toJS()}keys(){return(0,ee.keys)(this.hashmap)}values(){return(0,q.values)(this.hashmap)}entries(){return(0,te.entries)(this.hashmap)}[Symbol.iterator](){return this.entries()}}Z.Map=ne},"../packages/immutable/dist/index.js":(X,Z,G)=>{Object.defineProperty(Z,"__esModule",{value:!0}),Z.Map=void 0;const W=G("../node_modules/typed-immutable-map/dist/HashMap/empty.js"),F=G("../node_modules/typed-immutable-map/dist/HashMap/from.js"),U=G("../packages/immutable/dist/Map.js"),J=D=>Symbol.iterator in D;function Y(D){return D?J(D)?new U.Map((0,F.fromIterable)(D)):new U.Map((0,F.fromObject)(D)):new U.Map((0,W.empty)())}Z.Map=Y},"../packages/uuid/dist/index.js":function(X,Z,G){var W=this&&this.__importDefault||function(U){return U&&U.__esModule?U:{default:U}};Object.defineProperty(Z,"__esModule",{value:!0}),Z.v4=void 0;const F=W(G("../node_modules/uuid-random/index.js"));Z.v4=F.default},asynciterator:X=>{X.exports=__QUADSTORE_COMUNICA_EXTERNAL_MODULE_asynciterator__},sparqlalgebrajs:X=>{X.exports=__QUADSTORE_COMUNICA_EXTERNAL_MODULE_sparqlalgebrajs__},sparqljs:X=>{X.exports=__QUADSTORE_COMUNICA_EXTERNAL_MODULE_sparqljs__},"?699d":()=>{},"./require-empty.js":()=>{},"./src/crypto-polyfill.js":(__unused_webpack_module,__unused_webpack_exports,__quadstore_comunica_require__)=>{const isNode=typeof process<"u"&&process.versions!=null&&process.versions.node!=null,polyfillCrypto=({randomFillSync:X})=>{__quadstore_comunica_require__.g.crypto={},__quadstore_comunica_require__.g.crypto.getRandomValues=Z=>(X(Z),Z)};isNode&&typeof crypto>"u"&&(eval("typeof require === 'function'")?polyfillCrypto(eval("require('crypto');")):eval("import('crypto');").then(polyfillCrypto).catch(X=>{console.error(X),process.exit(1)}))},"./src/engine.js":(X,Z,G)=>{const W=new(G("../node_modules/@comunica/logger-void/lib/index.js")).LoggerVoid,F=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-init/^2.0.0/components/ActorInit.jsonld#ActorInit_default_bus"}),U=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-context-preprocess/^2.0.0/components/ActorContextPreprocess.jsonld#ActorContextPreprocess_default_bus"}),J=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-hash-bindings/^2.0.0/components/ActorHashBindings.jsonld#ActorHashBindings_default_bus"}),Y=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-optimize-query-operation/^2.0.0/components/ActorOptimizeQueryOperation.jsonld#ActorOptimizeQueryOperation_default_bus"}),D=new(G("../node_modules/@comunica/bus-query-operation/lib/index.js")).BusQueryOperation({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-operation/^2.0.0/components/ActorQueryOperation.jsonld#ActorQueryOperation_default_bus"}),Q=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-parse/^2.0.0/components/ActorQueryParse.jsonld#ActorQueryParse_default_bus"}),te=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-result-serialize/^2.0.0/components/ActorQueryResultSerialize.jsonld#ActorQueryResultSerialize_default_bus"}),q=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http-invalidate/^2.0.0/components/ActorHttpInvalidate.jsonld#ActorHttpInvalidate_default_bus"}),ee=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join-entries-sort/^2.0.0/components/ActorRdfJoinEntriesSort.jsonld#ActorRdfJoinEntriesSort_default_bus"}),ie=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join-selectivity/^2.0.0/components/ActorRdfJoinSelectivity.jsonld#ActorRdfJoinSelectivity_default_bus"}),ne=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-update-quads/^2.0.0/components/ActorRdfUpdateQuads.jsonld#ActorRdfUpdateQuads_default_bus"}),le=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join/^2.0.0/components/ActorRdfJoin.jsonld#ActorRdfJoin_default_bus"}),ae=new(G("../node_modules/@comunica/core/lib/index.js")).Bus({name:"https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-quad-pattern/^2.0.0/components/ActorRdfResolveQuadPattern.jsonld#ActorRdfResolveQuadPattern_default_bus"});new(G("../node_modules/@comunica/actor-context-preprocess-source-to-destination/lib/index.js")).ActorContextPreprocessSourceToDestination({name:"urn:comunica:default:context-preprocess/actors#source-to-destination",bus:U});const se=new(G("../node_modules/@comunica/mediator-combine-pipeline/lib/index.js")).MediatorCombinePipeline({name:"urn:comunica:default:context-preprocess/mediators#main",bus:U});new(G("../node_modules/@comunica/actor-hash-bindings-sha1/lib/index.js")).ActorHashBindingsSha1({name:"urn:comunica:default:hash-bindings/actors#sha1",bus:J});const he=new(G("../node_modules/@comunica/mediator-race/lib/index.js")).MediatorRace({name:"urn:comunica:default:hash-bindings/mediators#main",bus:J}),pe=new(G("../node_modules/@comunica/mediator-combine-pipeline/lib/index.js")).MediatorCombinePipeline({name:"urn:comunica:default:optimize-query-operation/mediators#main",bus:Y});new(G("../node_modules/@comunica/actor-optimize-query-operation-join-bgp/lib/index.js")).ActorOptimizeQueryOperationJoinBgp({name:"urn:comunica:default:optimize-query-operation/actors#join-bgp",bus:Y}),new(G("../node_modules/@comunica/actor-optimize-query-operation-bgp-to-join/lib/index.js")).ActorOptimizeQueryOperationBgpToJoin({name:"urn:comunica:default:optimize-query-operation/actors#bgp-to-join",bus:Y}),new(G("../node_modules/@comunica/actor-optimize-query-operation-join-connected/lib/index.js")).ActorOptimizeQueryOperationJoinConnected({name:"urn:comunica:default:optimize-query-operation/actors#join-connected",bus:Y});const oe=new(G("../node_modules/@comunica/mediator-number/lib/index.js")).MediatorNumber({field:"httpRequests",type:"min",ignoreErrors:!0,name:"urn:comunica:default:query-operation/mediators#main",bus:D});new(G("../node_modules/@comunica/actor-query-operation-values/lib/index.js")).ActorQueryOperationValues({name:"urn:comunica:default:query-operation/actors#values",bus:D});const de=new(G("../node_modules/@comunica/mediator-race/lib/index.js")).MediatorRace({name:"urn:comunica:default:query-parse/mediators#main",bus:Q});new(G("../node_modules/@comunica/actor-query-parse-sparql/lib/index.js")).ActorQueryParseSparql({prefixes:{dbpedia:"http://dbpedia.org/resource/","dbpedia-owl":"http://dbpedia.org/ontology/",dbpprop:"http://dbpedia.org/property/",dc:"http://purl.org/dc/terms/",dc11:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",foaf:"http://xmlns.com/foaf/0.1/",geo:"http://www.w3.org/2003/01/geo/wgs84_pos#",owl:"http://www.w3.org/2002/07/owl#",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",schema:"http://schema.org/",skos:"http://www.w3.org/2008/05/skos#",xsd:"http://www.w3.org/2001/XMLSchema#"},name:"urn:comunica:default:query-parse/actors#sparql",bus:Q});const ue=new(G("../node_modules/@comunica/mediator-race/lib/index.js")).MediatorRace({name:"urn:comunica:default:query-result-serialize/mediators#serialize",bus:te}),ge=new(G("../node_modules/@comunica/mediator-combine-union/lib/index.js")).MediatorCombineUnion({field:"mediaTypes",name:"urn:comunica:default:query-result-serialize/mediators#mediaType",bus:te}),ve=new(G("../node_modules/@comunica/mediator-combine-union/lib/index.js")).MediatorCombineUnion({field:"mediaTypeFormats",name:"urn:comunica:default:query-result-serialize/mediators#mediaTypeFormat",bus:te}),fe=new(G("../node_modules/@comunica/mediator-all/lib/index.js")).MediatorAll({name:"urn:comunica:default:http-invalidate/mediators#main",bus:q});new(G("../node_modules/@comunica/actor-rdf-join-entries-sort-cardinality/lib/index.js")).ActorRdfJoinEntriesSortCardinality({name:"urn:comunica:default:rdf-join-entries-sort/actors#cardinality",bus:ee});const Xe=new(G("../node_modules/@comunica/mediator-race/lib/index.js")).MediatorRace({name:"urn:comunica:default:rdf-join-entries-sort/mediators#main",bus:ee});new(G("../node_modules/@comunica/actor-rdf-join-selectivity-variable-counting/lib/index.js")).ActorRdfJoinSelectivityVariableCounting({name:"urn:comunica:default:rdf-join-selectivity/actors#variable-counting",bus:ie});const Ze=new(G("../node_modules/@comunica/mediator-number/lib/index.js")).MediatorNumber({field:"accuracy",type:"max",ignoreErrors:!0,name:"urn:comunica:default:rdf-join-selectivity/mediators#main",bus:ie});new(G("../node_modules/@comunica/actor-rdf-update-quads-rdfjs-store/lib/index.js")).ActorRdfUpdateQuadsRdfJsStore({name:"urn:comunica:default:rdf-update-quads/actors#rdfjs-store",bus:ne});const Ve=new(G("../node_modules/@comunica/mediator-race/lib/index.js")).MediatorRace({name:"urn:comunica:default:rdf-update-quads/mediators#main",bus:ne}),be=new(G("../node_modules/@comunica/mediator-join-coefficients-fixed/lib/index.js")).MediatorJoinCoefficientsFixed({cpuWeight:1,memoryWeight:1,timeWeight:10,ioWeight:100,name:"urn:comunica:default:rdf-join/mediators#main",bus:le}),re=new(G("../node_modules/@comunica/mediator-race/lib/index.js")).MediatorRace({name:"urn:comunica:default:rdf-resolve-quad-pattern/mediators#main",bus:ae});new(G("../node_modules/@comunica/actor-rdf-resolve-quad-pattern-rdfjs-source/lib/index.js")).ActorRdfResolveQuadPatternRdfJsSource({name:"urn:comunica:default:rdf-resolve-quad-pattern/actors#rdfjs-source",bus:ae}),new(G("../node_modules/@comunica/actor-query-operation-ask/lib/index.js")).ActorQueryOperationAsk({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#ask",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-bgp-join/lib/index.js")).ActorQueryOperationBgpJoin({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#bgp",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-construct/lib/index.js")).ActorQueryOperationConstruct({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#construct",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-describe-subject/lib/index.js")).ActorQueryOperationDescribeSubject({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#describe",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-distinct-hash/lib/index.js")).ActorQueryOperationDistinctHash({mediatorHashBindings:he,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#distinct",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-extend/lib/index.js")).ActorQueryOperationExtend({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#extend",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-filter-sparqlee/lib/index.js")).ActorQueryOperationFilterSparqlee({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#filter",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-from-quad/lib/index.js")).ActorQueryOperationFromQuad({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#from",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-group/lib/index.js")).ActorQueryOperationGroup({mediatorHashBindings:he,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#group",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-orderby-sparqlee/lib/index.js")).ActorQueryOperationOrderBySparqlee({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#orderby",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-nop/lib/index.js")).ActorQueryOperationNop({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#nop",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-project/lib/index.js")).ActorQueryOperationProject({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#project",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-reduced-hash/lib/index.js")).ActorQueryOperationReducedHash({mediatorHashBindings:he,cacheSize:100,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#reduced",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-service/lib/index.js")).ActorQueryOperationService({forceSparqlEndpoint:!1,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#service",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-slice/lib/index.js")).ActorQueryOperationSlice({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#slice",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-union/lib/index.js")).ActorQueryOperationUnion({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#union",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-path-alt/lib/index.js")).ActorQueryOperationPathAlt({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#path-alt",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-path-inv/lib/index.js")).ActorQueryOperationPathInv({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#path-inv",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-path-link/lib/index.js")).ActorQueryOperationPathLink({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#path-link",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-path-zero-or-one/lib/index.js")).ActorQueryOperationPathZeroOrOne({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#path-zero-or-one",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-update-add-rewrite/lib/index.js")).ActorQueryOperationAddRewrite({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-add",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-path-zero-or-more/lib/index.js")).ActorQueryOperationPathZeroOrMore({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#path-zero-or-more",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-path-one-or-more/lib/index.js")).ActorQueryOperationPathOneOrMore({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#path-one-or-more",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-update-compositeupdate/lib/index.js")).ActorQueryOperationUpdateCompositeUpdate({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-composite",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-path-nps/lib/index.js")).ActorQueryOperationPathNps({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#path-nps",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-update-copy-rewrite/lib/index.js")).ActorQueryOperationCopyRewrite({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-copy",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-update-move-rewrite/lib/index.js")).ActorQueryOperationMoveRewrite({mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-move",bus:D});const ye=new(G("../node_modules/@comunica/actor-init-query/lib/index-browser.js")).ActorInitQuery({mediatorOptimizeQueryOperation:pe,mediatorQueryOperation:oe,mediatorQueryParse:de,mediatorQueryResultSerialize:ue,mediatorQueryResultSerializeMediaTypeCombiner:ge,mediatorQueryResultSerializeMediaTypeFormatCombiner:ve,mediatorContextPreprocess:se,mediatorHttpInvalidate:fe,logger:W,defaultQueryInputFormat:"sparql",allowNoSources:!1,contextKeyShortcuts:{baseIRI:"@comunica/actor-init-query:baseIRI",datetime:"@comunica/actor-http-memento:datetime",destination:"@comunica/bus-rdf-update-quads:destination",explain:"@comunica/actor-init-query:explain",extensionFunctionCreator:"@comunica/actor-init-query:extensionFunctionCreator",extensionFunctions:"@comunica/actor-init-query:extensionFunctions",fetch:"@comunica/bus-http:fetch",functionArgumentsCache:"@comunica/actor-init-query:functionArgumentsCache",httpAuth:"@comunica/bus-http:auth",httpBodyTimeout:"@comunica/bus-http:http-body-timeout",httpIncludeCredentials:"@comunica/bus-http:include-credentials",httpProxyHandler:"@comunica/actor-http-proxy:httpProxyHandler",httpRetryCount:"@comunica/bus-http:http-retry-count",httpRetryDelay:"@comunica/bus-http:http-retry-delay",httpRetryOnServerError:"@comunica/bus-http:http-retry-on-server-error",httpTimeout:"@comunica/bus-http:http-timeout",initialBindings:"@comunica/actor-init-query:initialBindings",lenient:"@comunica/actor-init-query:lenient",localizeBlankNodes:"@comunica/actor-query-operation:localizeBlankNodes",log:"@comunica/core:log",queryFormat:"@comunica/actor-init-query:queryFormat",queryTimestamp:"@comunica/actor-init-query:queryTimestamp",readOnly:"@comunica/bus-query-operation:readOnly",recoverBrokenLinks:"@comunica/bus-http-wayback:recover-broken-links",source:"@comunica/bus-rdf-resolve-quad-pattern:source",sources:"@comunica/bus-rdf-resolve-quad-pattern:sources",unionDefaultGraph:"@comunica/bus-query-operation:unionDefaultGraph"},name:"urn:comunica:default:init/actors#query",bus:F});new(G("../node_modules/@comunica/actor-rdf-join-inner-none/lib/index.js")).ActorRdfJoinNone({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#inner-none",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-inner-single/lib/index.js")).ActorRdfJoinSingle({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#inner-single",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-inner-multi-empty/lib/index.js")).ActorRdfJoinMultiEmpty({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#inner-multi-empty",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-inner-multi-bind/lib/index.js")).ActorRdfJoinMultiBind({bindOrder:"depth-first",selectivityModifier:1e-4,mediatorJoinEntriesSort:Xe,mediatorQueryOperation:oe,mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#inner-multi-bind",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-inner-hash/lib/index.js")).ActorRdfJoinHash({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#inner-hash",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-inner-symmetrichash/lib/index.js")).ActorRdfJoinSymmetricHash({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#inner-symmetric-hash",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-inner-nestedloop/lib/index.js")).ActorRdfJoinNestedLoop({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#inner-nested-loop",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-optional-bind/lib/index.js")).ActorRdfJoinOptionalBind({bindOrder:"depth-first",selectivityModifier:1e-4,mediatorQueryOperation:oe,mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#optional-bind",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-optional-nestedloop/lib/index.js")).ActorRdfJoinOptionalNestedLoop({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#optional-nested-loop",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-minus-hash/lib/index.js")).ActorRdfJoinMinusHash({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#minus-hash",bus:le}),new(G("../node_modules/@comunica/actor-rdf-join-minus-hash-undef/lib/index.js")).ActorRdfJoinMinusHashUndef({mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#minus-hash-undef",bus:le}),new(G("../node_modules/@comunica/actor-query-operation-update-clear/lib/index.js")).ActorQueryOperationClear({mediatorUpdateQuads:Ve,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-clear",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-update-create/lib/index.js")).ActorQueryOperationCreate({mediatorUpdateQuads:Ve,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-create",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-update-deleteinsert/lib/index.js")).ActorQueryOperationUpdateDeleteInsert({mediatorUpdateQuads:Ve,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-delete-insert",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-update-drop/lib/index.js")).ActorQueryOperationDrop({mediatorUpdateQuads:Ve,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-drop",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-update-load/lib/index.js")).ActorQueryOperationLoad({mediatorUpdateQuads:Ve,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#update-load",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-join/lib/index.js")).ActorQueryOperationJoin({mediatorJoin:be,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#join",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-leftjoin/lib/index.js")).ActorQueryOperationLeftJoin({mediatorJoin:be,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#leftjoin",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-minus/lib/index.js")).ActorQueryOperationMinus({mediatorJoin:be,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#minus",bus:D}),new(G("../node_modules/@comunica/actor-query-operation-path-seq/lib/index.js")).ActorQueryOperationPathSeq({mediatorJoin:be,mediatorQueryOperation:oe,name:"urn:comunica:default:query-operation/actors#path-seq",bus:D}),new(G("../node_modules/@comunica/actor-rdf-join-inner-multi-smallest/lib/index.js")).ActorRdfJoinMultiSmallest({mediatorJoinEntriesSort:Xe,mediatorJoin:be,mediatorJoinSelectivity:Ze,name:"urn:comunica:default:rdf-join/actors#inner-multi-smallest",bus:le}),new(G("../node_modules/@comunica/actor-query-operation-quadpattern/lib/index.js")).ActorQueryOperationQuadpattern({mediatorResolveQuadPattern:re,unionDefaultGraph:!1,name:"urn:comunica:default:query-operation/actors#quadpattern",bus:D}),new(G("../node_modules/@comunica/actor-rdf-resolve-quad-pattern-federated/lib/index.js")).ActorRdfResolveQuadPatternFederated({mediatorResolveQuadPattern:re,skipEmptyPatterns:!1,name:"urn:comunica:default:rdf-resolve-quad-pattern/actors#federated",bus:ae}),X.exports=ye},"./src/index.js":(X,Z,G)=>{G("./src/crypto-polyfill.js");const{QueryEngineBase:W}=G("../node_modules/@comunica/actor-init-query/lib/index-browser.js"),F=new W(G("./src/engine.js")),U=Object.create(null);class J{constructor(D){this.store=D,this.engine=F}getContext(D){return{...D,source:this.store,destination:this.store}}query(D,Q=U){return F.query(D,this.getContext(Q))}queryVoid(D,Q=U){return F.queryVoid(D,this.getContext(Q))}queryBindings(D,Q=U){return F.queryBindings(D,this.getContext(Q))}queryQuads(D,Q=U){return F.queryQuads(D,this.getContext(Q))}queryBoolean(D,Q=U){return F.queryBoolean(D,this.getContext(Q))}}X.exports.D=J,X.exports.H=F},"../node_modules/@comunica/actor-query-operation-reduced-hash/node_modules/lru-cache/index.js":X=>{const Z=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,W=typeof AbortController=="function"?AbortController:class{constructor(){this.signal=new J}abort(oe=new Error("This operation was aborted")){this.signal.reason=this.signal.reason||oe,this.signal.aborted=!0,this.signal.dispatchEvent({type:"abort",target:this.signal})}},F=typeof AbortSignal=="function",U=typeof W.AbortSignal=="function",J=F?AbortSignal:U?W.AbortController:class{constructor(){this.reason=void 0,this.aborted=!1,this._listeners=[]}dispatchEvent(oe){oe.type==="abort"&&(this.aborted=!0,this.onabort(oe),this._listeners.forEach(de=>de(oe),this))}onabort(){}addEventListener(oe,de){oe==="abort"&&this._listeners.push(de)}removeEventListener(oe,de){oe==="abort"&&(this._listeners=this._listeners.filter(ue=>ue!==de))}},Y=new Set,D=(pe,oe)=>{const de=`LRU_CACHE_OPTION_${pe}`;ee(de)&&ie(de,`${pe} option`,`options.${oe}`,he)},Q=(pe,oe)=>{const de=`LRU_CACHE_METHOD_${pe}`;if(ee(de)){const{prototype:ue}=he,{get:ge}=Object.getOwnPropertyDescriptor(ue,pe);ie(de,`${pe} method`,`cache.${oe}()`,ge)}},te=(pe,oe)=>{const de=`LRU_CACHE_PROPERTY_${pe}`;if(ee(de)){const{prototype:ue}=he,{get:ge}=Object.getOwnPropertyDescriptor(ue,pe);ie(de,`${pe} property`,`cache.${oe}`,ge)}},q=(...pe)=>{typeof process=="object"&&process&&typeof process.emitWarning=="function"?process.emitWarning(...pe):console.error(...pe)},ee=pe=>!Y.has(pe),ie=(pe,oe,de,ue)=>{Y.add(pe);const ge=`The ${oe} is deprecated. Please use ${de} instead.`;q(ge,"DeprecationWarning",pe,ue)},ne=pe=>pe&&pe===Math.floor(pe)&&pe>0&&isFinite(pe),le=pe=>ne(pe)?pe<=Math.pow(2,8)?Uint8Array:pe<=Math.pow(2,16)?Uint16Array:pe<=Math.pow(2,32)?Uint32Array:pe<=Number.MAX_SAFE_INTEGER?ae:null:null;class ae extends Array{constructor(oe){super(oe),this.fill(0)}}class se{constructor(oe){if(oe===0)return[];const de=le(oe);this.heap=new de(oe),this.length=0}push(oe){this.heap[this.length++]=oe}pop(){return this.heap[--this.length]}}class he{constructor(oe={}){const{max:de=0,ttl:ue,ttlResolution:ge=1,ttlAutopurge:ve,updateAgeOnGet:fe,updateAgeOnHas:Xe,allowStale:Ze,dispose:Ve,disposeAfter:be,noDisposeOnSet:re,noUpdateTTL:ye,maxSize:we=0,maxEntrySize:We=0,sizeCalculation:Se,fetchMethod:Le,fetchContext:Ne,noDeleteOnFetchRejection:xe,noDeleteOnStaleGet:ke,allowStaleOnFetchRejection:Ce,allowStaleOnFetchAbort:Ee,ignoreFetchAbort:et}=oe,{length:De,maxAge:Je,stale:st}=oe instanceof he?{}:oe;if(de!==0&&!ne(de))throw new TypeError("max option must be a nonnegative integer");const ct=de?le(de):Array;if(!ct)throw new Error("invalid max value: "+de);if(this.max=de,this.maxSize=we,this.maxEntrySize=We||this.maxSize,this.sizeCalculation=Se||De,this.sizeCalculation){if(!this.maxSize&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(this.fetchMethod=Le||null,this.fetchMethod&&typeof this.fetchMethod!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.fetchContext=Ne,!this.fetchMethod&&Ne!==void 0)throw new TypeError("cannot set fetchContext without fetchMethod");if(this.keyMap=new Map,this.keyList=new Array(de).fill(null),this.valList=new Array(de).fill(null),this.next=new ct(de),this.prev=new ct(de),this.head=0,this.tail=0,this.free=new se(de),this.initialFill=1,this.size=0,typeof Ve=="function"&&(this.dispose=Ve),typeof be=="function"?(this.disposeAfter=be,this.disposed=[]):(this.disposeAfter=null,this.disposed=null),this.noDisposeOnSet=!!re,this.noUpdateTTL=!!ye,this.noDeleteOnFetchRejection=!!xe,this.allowStaleOnFetchRejection=!!Ce,this.allowStaleOnFetchAbort=!!Ee,this.ignoreFetchAbort=!!et,this.maxEntrySize!==0){if(this.maxSize!==0&&!ne(this.maxSize))throw new TypeError("maxSize must be a positive integer if specified");if(!ne(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.initializeSizeTracking()}if(this.allowStale=!!Ze||!!st,this.noDeleteOnStaleGet=!!ke,this.updateAgeOnGet=!!fe,this.updateAgeOnHas=!!Xe,this.ttlResolution=ne(ge)||ge===0?ge:1,this.ttlAutopurge=!!ve,this.ttl=ue||Je||0,this.ttl){if(!ne(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.initializeTTLTracking()}if(this.max===0&&this.ttl===0&&this.maxSize===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.max&&!this.maxSize){const it="LRU_CACHE_UNBOUNDED";ee(it)&&(Y.add(it),q("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",it,he))}st&&D("stale","allowStale"),Je&&D("maxAge","ttl"),De&&D("length","sizeCalculation")}getRemainingTTL(oe){return this.has(oe,{updateAgeOnHas:!1})?1/0:0}initializeTTLTracking(){this.ttls=new ae(this.max),this.starts=new ae(this.max),this.setItemTTL=(ue,ge,ve=Z.now())=>{if(this.starts[ue]=ge!==0?ve:0,this.ttls[ue]=ge,ge!==0&&this.ttlAutopurge){const fe=setTimeout(()=>{this.isStale(ue)&&this.delete(this.keyList[ue])},ge+1);fe.unref&&fe.unref()}},this.updateItemAge=ue=>{this.starts[ue]=this.ttls[ue]!==0?Z.now():0},this.statusTTL=(ue,ge)=>{ue&&(ue.ttl=this.ttls[ge],ue.start=this.starts[ge],ue.now=oe||de(),ue.remainingTTL=ue.now+ue.ttl-ue.start)};let oe=0;const de=()=>{const ue=Z.now();if(this.ttlResolution>0){oe=ue;const ge=setTimeout(()=>oe=0,this.ttlResolution);ge.unref&&ge.unref()}return ue};this.getRemainingTTL=ue=>{const ge=this.keyMap.get(ue);return ge===void 0?0:this.ttls[ge]===0||this.starts[ge]===0?1/0:this.starts[ge]+this.ttls[ge]-(oe||de())},this.isStale=ue=>this.ttls[ue]!==0&&this.starts[ue]!==0&&(oe||de())-this.starts[ue]>this.ttls[ue]}updateItemAge(oe){}statusTTL(oe,de){}setItemTTL(oe,de,ue){}isStale(oe){return!1}initializeSizeTracking(){this.calculatedSize=0,this.sizes=new ae(this.max),this.removeItemSize=oe=>{this.calculatedSize-=this.sizes[oe],this.sizes[oe]=0},this.requireSize=(oe,de,ue,ge)=>{if(this.isBackgroundFetch(de))return 0;if(!ne(ue))if(ge){if(typeof ge!="function")throw new TypeError("sizeCalculation must be a function");if(ue=ge(de,oe),!ne(ue))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return ue},this.addItemSize=(oe,de,ue)=>{if(this.sizes[oe]=de,this.maxSize){const ge=this.maxSize-this.sizes[oe];for(;this.calculatedSize>ge;)this.evict(!0)}this.calculatedSize+=this.sizes[oe],ue&&(ue.entrySize=de,ue.totalCalculatedSize=this.calculatedSize)}}removeItemSize(oe){}addItemSize(oe,de){}requireSize(oe,de,ue,ge){if(ue||ge)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache")}*indexes({allowStale:oe=this.allowStale}={}){if(this.size)for(let de=this.tail;!(!this.isValidIndex(de)||((oe||!this.isStale(de))&&(yield de),de===this.head));)de=this.prev[de]}*rindexes({allowStale:oe=this.allowStale}={}){if(this.size)for(let de=this.head;!(!this.isValidIndex(de)||((oe||!this.isStale(de))&&(yield de),de===this.tail));)de=this.next[de]}isValidIndex(oe){return oe!==void 0&&this.keyMap.get(this.keyList[oe])===oe}*entries(){for(const oe of this.indexes())this.valList[oe]!==void 0&&this.keyList[oe]!==void 0&&!this.isBackgroundFetch(this.valList[oe])&&(yield[this.keyList[oe],this.valList[oe]])}*rentries(){for(const oe of this.rindexes())this.valList[oe]!==void 0&&this.keyList[oe]!==void 0&&!this.isBackgroundFetch(this.valList[oe])&&(yield[this.keyList[oe],this.valList[oe]])}*keys(){for(const oe of this.indexes())this.keyList[oe]!==void 0&&!this.isBackgroundFetch(this.valList[oe])&&(yield this.keyList[oe])}*rkeys(){for(const oe of this.rindexes())this.keyList[oe]!==void 0&&!this.isBackgroundFetch(this.valList[oe])&&(yield this.keyList[oe])}*values(){for(const oe of this.indexes())this.valList[oe]!==void 0&&!this.isBackgroundFetch(this.valList[oe])&&(yield this.valList[oe])}*rvalues(){for(const oe of this.rindexes())this.valList[oe]!==void 0&&!this.isBackgroundFetch(this.valList[oe])&&(yield this.valList[oe])}[Symbol.iterator](){return this.entries()}find(oe,de){for(const ue of this.indexes()){const ge=this.valList[ue],ve=this.isBackgroundFetch(ge)?ge.__staleWhileFetching:ge;if(ve!==void 0&&oe(ve,this.keyList[ue],this))return this.get(this.keyList[ue],de)}}forEach(oe,de=this){for(const ue of this.indexes()){const ge=this.valList[ue],ve=this.isBackgroundFetch(ge)?ge.__staleWhileFetching:ge;ve!==void 0&&oe.call(de,ve,this.keyList[ue],this)}}rforEach(oe,de=this){for(const ue of this.rindexes()){const ge=this.valList[ue],ve=this.isBackgroundFetch(ge)?ge.__staleWhileFetching:ge;ve!==void 0&&oe.call(de,ve,this.keyList[ue],this)}}get prune(){return Q("prune","purgeStale"),this.purgeStale}purgeStale(){let oe=!1;for(const de of this.rindexes({allowStale:!0}))this.isStale(de)&&(this.delete(this.keyList[de]),oe=!0);return oe}dump(){const oe=[];for(const de of this.indexes({allowStale:!0})){const ue=this.keyList[de],ge=this.valList[de],ve=this.isBackgroundFetch(ge)?ge.__staleWhileFetching:ge;if(ve===void 0)continue;const fe={value:ve};if(this.ttls){fe.ttl=this.ttls[de];const Xe=Z.now()-this.starts[de];fe.start=Math.floor(Date.now()-Xe)}this.sizes&&(fe.size=this.sizes[de]),oe.unshift([ue,fe])}return oe}load(oe){this.clear();for(const[de,ue]of oe){if(ue.start){const ge=Date.now()-ue.start;ue.start=Z.now()-ge}this.set(de,ue.value,ue)}}dispose(oe,de,ue){}set(oe,de,{ttl:ue=this.ttl,start:ge,noDisposeOnSet:ve=this.noDisposeOnSet,size:fe=0,sizeCalculation:Xe=this.sizeCalculation,noUpdateTTL:Ze=this.noUpdateTTL,status:Ve}={}){if(fe=this.requireSize(oe,de,fe,Xe),this.maxEntrySize&&fe>this.maxEntrySize)return Ve&&(Ve.set="miss",Ve.maxEntrySizeExceeded=!0),this.delete(oe),this;let be=this.size===0?void 0:this.keyMap.get(oe);if(be===void 0)be=this.newIndex(),this.keyList[be]=oe,this.valList[be]=de,this.keyMap.set(oe,be),this.next[this.tail]=be,this.prev[be]=this.tail,this.tail=be,this.size++,this.addItemSize(be,fe,Ve),Ve&&(Ve.set="add"),Ze=!1;else{this.moveToTail(be);const re=this.valList[be];if(de!==re){if(this.isBackgroundFetch(re)?re.__abortController.abort(new Error("replaced")):ve||(this.dispose(re,oe,"set"),this.disposeAfter&&this.disposed.push([re,oe,"set"])),this.removeItemSize(be),this.valList[be]=de,this.addItemSize(be,fe,Ve),Ve){Ve.set="replace";const ye=re&&this.isBackgroundFetch(re)?re.__staleWhileFetching:re;ye!==void 0&&(Ve.oldValue=ye)}}else Ve&&(Ve.set="update")}if(ue!==0&&this.ttl===0&&!this.ttls&&this.initializeTTLTracking(),Ze||this.setItemTTL(be,ue,ge),this.statusTTL(Ve,be),this.disposeAfter)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift());return this}newIndex(){return this.size===0?this.tail:this.size===this.max&&this.max!==0?this.evict(!1):this.free.length!==0?this.free.pop():this.initialFill++}pop(){if(this.size){const oe=this.valList[this.head];return this.evict(!0),oe}}evict(oe){const de=this.head,ue=this.keyList[de],ge=this.valList[de];return this.isBackgroundFetch(ge)?ge.__abortController.abort(new Error("evicted")):(this.dispose(ge,ue,"evict"),this.disposeAfter&&this.disposed.push([ge,ue,"evict"])),this.removeItemSize(de),oe&&(this.keyList[de]=null,this.valList[de]=null,this.free.push(de)),this.head=this.next[de],this.keyMap.delete(ue),this.size--,de}has(oe,{updateAgeOnHas:de=this.updateAgeOnHas,status:ue}={}){const ge=this.keyMap.get(oe);if(ge!==void 0)if(this.isStale(ge))ue&&(ue.has="stale",this.statusTTL(ue,ge));else return de&&this.updateItemAge(ge),ue&&(ue.has="hit"),this.statusTTL(ue,ge),!0;else ue&&(ue.has="miss");return!1}peek(oe,{allowStale:de=this.allowStale}={}){const ue=this.keyMap.get(oe);if(ue!==void 0&&(de||!this.isStale(ue))){const ge=this.valList[ue];return this.isBackgroundFetch(ge)?ge.__staleWhileFetching:ge}}backgroundFetch(oe,de,ue,ge){const ve=de===void 0?void 0:this.valList[de];if(this.isBackgroundFetch(ve))return ve;const fe=new W;ue.signal&&ue.signal.addEventListener("abort",()=>fe.abort(ue.signal.reason));const Xe={signal:fe.signal,options:ue,context:ge},Ze=(we,We=!1)=>{const{aborted:Se}=fe.signal,Le=ue.ignoreFetchAbort&&we!==void 0;return ue.status&&(Se&&!We?(ue.status.fetchAborted=!0,ue.status.fetchError=fe.signal.reason,Le&&(ue.status.fetchAbortIgnored=!0)):ue.status.fetchResolved=!0),Se&&!Le&&!We?be(fe.signal.reason):(this.valList[de]===ye&&(we===void 0?ye.__staleWhileFetching?this.valList[de]=ye.__staleWhileFetching:this.delete(oe):(ue.status&&(ue.status.fetchUpdated=!0),this.set(oe,we,Xe.options))),we)},Ve=we=>(ue.status&&(ue.status.fetchRejected=!0,ue.status.fetchError=we),be(we)),be=we=>{const{aborted:We}=fe.signal,Se=We&&ue.allowStaleOnFetchAbort,Le=Se||ue.allowStaleOnFetchRejection,Ne=Le||ue.noDeleteOnFetchRejection;if(this.valList[de]===ye&&(!Ne||ye.__staleWhileFetching===void 0?this.delete(oe):Se||(this.valList[de]=ye.__staleWhileFetching)),Le)return ue.status&&ye.__staleWhileFetching!==void 0&&(ue.status.returnedStale=!0),ye.__staleWhileFetching;if(ye.__returned===ye)throw we},re=(we,We)=>{this.fetchMethod(oe,ve,Xe).then(Se=>we(Se),We),fe.signal.addEventListener("abort",()=>{(!ue.ignoreFetchAbort||ue.allowStaleOnFetchAbort)&&(we(),ue.allowStaleOnFetchAbort&&(we=Se=>Ze(Se,!0)))})};ue.status&&(ue.status.fetchDispatched=!0);const ye=new Promise(re).then(Ze,Ve);return ye.__abortController=fe,ye.__staleWhileFetching=ve,ye.__returned=null,de===void 0?(this.set(oe,ye,{...Xe.options,status:void 0}),de=this.keyMap.get(oe)):this.valList[de]=ye,ye}isBackgroundFetch(oe){return oe&&typeof oe=="object"&&typeof oe.then=="function"&&Object.prototype.hasOwnProperty.call(oe,"__staleWhileFetching")&&Object.prototype.hasOwnProperty.call(oe,"__returned")&&(oe.__returned===oe||oe.__returned===null)}async fetch(oe,{allowStale:de=this.allowStale,updateAgeOnGet:ue=this.updateAgeOnGet,noDeleteOnStaleGet:ge=this.noDeleteOnStaleGet,ttl:ve=this.ttl,noDisposeOnSet:fe=this.noDisposeOnSet,size:Xe=0,sizeCalculation:Ze=this.sizeCalculation,noUpdateTTL:Ve=this.noUpdateTTL,noDeleteOnFetchRejection:be=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:re=this.allowStaleOnFetchRejection,ignoreFetchAbort:ye=this.ignoreFetchAbort,allowStaleOnFetchAbort:we=this.allowStaleOnFetchAbort,fetchContext:We=this.fetchContext,forceRefresh:Se=!1,status:Le,signal:Ne}={}){if(!this.fetchMethod)return Le&&(Le.fetch="get"),this.get(oe,{allowStale:de,updateAgeOnGet:ue,noDeleteOnStaleGet:ge,status:Le});const xe={allowStale:de,updateAgeOnGet:ue,noDeleteOnStaleGet:ge,ttl:ve,noDisposeOnSet:fe,size:Xe,sizeCalculation:Ze,noUpdateTTL:Ve,noDeleteOnFetchRejection:be,allowStaleOnFetchRejection:re,allowStaleOnFetchAbort:we,ignoreFetchAbort:ye,status:Le,signal:Ne};let ke=this.keyMap.get(oe);if(ke===void 0){Le&&(Le.fetch="miss");const Ce=this.backgroundFetch(oe,ke,xe,We);return Ce.__returned=Ce}else{const Ce=this.valList[ke];if(this.isBackgroundFetch(Ce)){const st=de&&Ce.__staleWhileFetching!==void 0;return Le&&(Le.fetch="inflight",st&&(Le.returnedStale=!0)),st?Ce.__staleWhileFetching:Ce.__returned=Ce}const Ee=this.isStale(ke);if(!Se&&!Ee)return Le&&(Le.fetch="hit"),this.moveToTail(ke),ue&&this.updateItemAge(ke),this.statusTTL(Le,ke),Ce;const et=this.backgroundFetch(oe,ke,xe,We),De=et.__staleWhileFetching!==void 0,Je=De&&de;return Le&&(Le.fetch=De&&Ee?"stale":"refresh",Je&&Ee&&(Le.returnedStale=!0)),Je?et.__staleWhileFetching:et.__returned=et}}get(oe,{allowStale:de=this.allowStale,updateAgeOnGet:ue=this.updateAgeOnGet,noDeleteOnStaleGet:ge=this.noDeleteOnStaleGet,status:ve}={}){const fe=this.keyMap.get(oe);if(fe!==void 0){const Xe=this.valList[fe],Ze=this.isBackgroundFetch(Xe);return this.statusTTL(ve,fe),this.isStale(fe)?(ve&&(ve.get="stale"),Ze?(ve&&(ve.returnedStale=de&&Xe.__staleWhileFetching!==void 0),de?Xe.__staleWhileFetching:void 0):(ge||this.delete(oe),ve&&(ve.returnedStale=de),de?Xe:void 0)):(ve&&(ve.get="hit"),Ze?Xe.__staleWhileFetching:(this.moveToTail(fe),ue&&this.updateItemAge(fe),Xe))}else ve&&(ve.get="miss")}connect(oe,de){this.prev[de]=oe,this.next[oe]=de}moveToTail(oe){oe!==this.tail&&(oe===this.head?this.head=this.next[oe]:this.connect(this.prev[oe],this.next[oe]),this.connect(this.tail,oe),this.tail=oe)}get del(){return Q("del","delete"),this.delete}delete(oe){let de=!1;if(this.size!==0){const ue=this.keyMap.get(oe);if(ue!==void 0)if(de=!0,this.size===1)this.clear();else{this.removeItemSize(ue);const ge=this.valList[ue];this.isBackgroundFetch(ge)?ge.__abortController.abort(new Error("deleted")):(this.dispose(ge,oe,"delete"),this.disposeAfter&&this.disposed.push([ge,oe,"delete"])),this.keyMap.delete(oe),this.keyList[ue]=null,this.valList[ue]=null,ue===this.tail?this.tail=this.prev[ue]:ue===this.head?this.head=this.next[ue]:(this.next[this.prev[ue]]=this.next[ue],this.prev[this.next[ue]]=this.prev[ue]),this.size--,this.free.push(ue)}}if(this.disposed)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift());return de}clear(){for(const oe of this.rindexes({allowStale:!0})){const de=this.valList[oe];if(this.isBackgroundFetch(de))de.__abortController.abort(new Error("deleted"));else{const ue=this.keyList[oe];this.dispose(de,ue,"delete"),this.disposeAfter&&this.disposed.push([de,ue,"delete"])}}if(this.keyMap.clear(),this.valList.fill(null),this.keyList.fill(null),this.ttls&&(this.ttls.fill(0),this.starts.fill(0)),this.sizes&&this.sizes.fill(0),this.head=0,this.tail=0,this.initialFill=1,this.free.length=0,this.calculatedSize=0,this.size=0,this.disposed)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift())}get reset(){return Q("reset","clear"),this.clear}get length(){return te("length","size"),this.size}static get AbortController(){return W}static get AbortSignal(){return J}}X.exports=he}},__quadstore_comunica_module_cache__={};function __quadstore_comunica_require__(X){var Z=__quadstore_comunica_module_cache__[X];if(Z!==void 0)return Z.exports;var G=__quadstore_comunica_module_cache__[X]={exports:{}};return __quadstore_comunica_modules__[X].call(G.exports,G,G.exports,__quadstore_comunica_require__),G.exports}__quadstore_comunica_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}();var __quadstore_comunica_exports__=__quadstore_comunica_require__("./src/index.js"),__quadstore_comunica_exports__Engine=__quadstore_comunica_exports__.D;__quadstore_comunica_exports__.H;const DEPENDS_ON="http://dat-ecosystem.org#dependson",OWNS="http://dat-ecosystem.org#owns",directDependentsQuery=X=>`
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent WHERE {
    ?dependent dependson: <${X}> .
  }`,directDependenciesQuery=X=>`
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependency WHERE {
    <${X}> dependson: ?dependency .
`,Y=Array(U+1).join(" "),D=[];for(let Q=0;Q<Z;++Q){let te=getVariableName$1(Q),q=Q===0?"":Y;D.push(q+W.replace(/{var}/g,te))}return D.join(J)}};const createPatternBuilder$5=createPatternBuilder$6;generateCreateBody.exports=generateCreateBodyFunction$1;generateCreateBodyExports.generateCreateBodyFunctionBody=generateCreateBodyFunctionBody;generateCreateBodyExports.getVectorCode=getVectorCode;generateCreateBodyExports.getBodyCode=getBodyCode;function generateCreateBodyFunction$1(X,Z){let G=generateCreateBodyFunctionBody(X,Z),{Body:W}=new Function(G)();return W}function generateCreateBodyFunctionBody(X,Z){return`
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

`;function F(Y){let D=[],Q=Array(Y+1).join(" ");for(let te=0;te<X;++te)D.push(Q+`if (${getVariableName(te)} > max_${getVariableName(te)}) {`),D.push(Q+`  quadIdx = quadIdx + ${Math.pow(2,te)};`),D.push(Q+`  min_${getVariableName(te)} = max_${getVariableName(te)};`),D.push(Q+`  max_${getVariableName(te)} = node.max_${getVariableName(te)};`),D.push(Q+"}");return D.join(`
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

    ${Z("var v{var} = body.velocity.{var};",{indent:4})}

