const Rt=Symbol("Comlink.proxy"),In=Symbol("Comlink.endpoint"),kn=Symbol("Comlink.releaseProxy"),ut=Symbol("Comlink.thrown"),Dt=e=>typeof e=="object"&&e!==null||typeof e=="function",On={canHandle:e=>Dt(e)&&e[Rt],serialize(e){const{port1:t,port2:n}=new MessageChannel;return vt(e,t),[n,[n]]},deserialize(e){return e.start(),Kn(e)}},Ln={canHandle:e=>Dt(e)&&ut in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},Ht=new Map([["proxy",On],["throw",Ln]]);function vt(e,t=self){t.addEventListener("message",function n(r){if(!r||!r.data)return;const{id:i,type:o,path:s}=Object.assign({path:[]},r.data),f=(r.data.argumentList||[]).map(ye);let a;try{const u=s.slice(0,-1).reduce((c,g)=>c[g],e),v=s.reduce((c,g)=>c[g],e);switch(o){case"GET":a=v;break;case"SET":u[s.slice(-1)[0]]=ye(r.data.value),a=!0;break;case"APPLY":a=v.apply(u,f);break;case"CONSTRUCT":{const c=new v(...f);a=Rn(c)}break;case"ENDPOINT":{const{port1:c,port2:g}=new MessageChannel;vt(e,g),a=gt(c,[c])}break;case"RELEASE":a=void 0;break;default:return}}catch(u){a={value:u,[ut]:0}}Promise.resolve(a).catch(u=>({value:u,[ut]:0})).then(u=>{const[v,c]=pt(u);t.postMessage(Object.assign(Object.assign({},v),{id:i}),c),o==="RELEASE"&&(t.removeEventListener("message",n),Ut(t))})}),t.start&&t.start()}function Tn(e){return e.constructor.name==="MessagePort"}function Ut(e){Tn(e)&&e.close()}function Kn(e,t){return ft(e,[],t)}function Re(e){if(e)throw new Error("Proxy has been released and is not useable")}function ft(e,t=[],n=function(){}){let r=!1;const i=new Proxy(n,{get(o,s){if(Re(r),s===kn)return()=>_e(e,{type:"RELEASE",path:t.map(f=>f.toString())}).then(()=>{Ut(e),r=!0});if(s==="then"){if(t.length===0)return{then:()=>i};const f=_e(e,{type:"GET",path:t.map(a=>a.toString())}).then(ye);return f.then.bind(f)}return ft(e,[...t,s])},set(o,s,f){Re(r);const[a,u]=pt(f);return _e(e,{type:"SET",path:[...t,s].map(v=>v.toString()),value:a},u).then(ye)},apply(o,s,f){Re(r);const a=t[t.length-1];if(a===In)return _e(e,{type:"ENDPOINT"}).then(ye);if(a==="bind")return ft(e,t.slice(0,-1));const[u,v]=Ct(f);return _e(e,{type:"APPLY",path:t.map(c=>c.toString()),argumentList:u},v).then(ye)},construct(o,s){Re(r);const[f,a]=Ct(s);return _e(e,{type:"CONSTRUCT",path:t.map(u=>u.toString()),argumentList:f},a).then(ye)}});return i}function jn(e){return Array.prototype.concat.apply([],e)}function Ct(e){const t=e.map(pt);return[t.map(n=>n[0]),jn(t.map(n=>n[1]))]}const Vt=new WeakMap;function gt(e,t){return Vt.set(e,t),e}function Rn(e){return Object.assign(e,{[Rt]:!0})}function pt(e){for(const[t,n]of Ht)if(n.canHandle(e)){const[r,i]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},i]}return[{type:"RAW",value:e},Vt.get(e)||[]]}function ye(e){switch(e.type){case"HANDLER":return Ht.get(e.name).deserialize(e.value);case"RAW":return e.value}}function _e(e,t,n){return new Promise(r=>{const i=Dn();e.addEventListener("message",function o(s){!s.data||!s.data.id||s.data.id!==i||(e.removeEventListener("message",o),r(s.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:i},t),n)})}function Dn(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ke={},Hn={get exports(){return ke},set exports(e){ke=e}},ct={},De={get exports(){return ct},set exports(e){ct=e}};(function(){var e,t,n,r,i,o;typeof performance<"u"&&performance!==null&&performance.now?De.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(De.exports=function(){return(e()-i)/1e6},t=process.hrtime,e=function(){var s;return s=t(),s[0]*1e9+s[1]},r=e(),o=process.uptime()*1e9,i=r-o):Date.now?(De.exports=function(){return Date.now()-n},n=Date.now()):(De.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(Te);var Un=ct,ce=typeof window>"u"?Te:window,He=["moz","webkit"],Ce="AnimationFrame",Ee=ce["request"+Ce],Oe=ce["cancel"+Ce]||ce["cancelRequest"+Ce];for(var ze=0;!Ee&&ze<He.length;ze++)Ee=ce[He[ze]+"Request"+Ce],Oe=ce[He[ze]+"Cancel"+Ce]||ce[He[ze]+"CancelRequest"+Ce];if(!Ee||!Oe){var it=0,Et=0,pe=[],Vn=1e3/60;Ee=function(e){if(pe.length===0){var t=Un(),n=Math.max(0,Vn-(t-it));it=n+t,setTimeout(function(){var r=pe.slice(0);pe.length=0;for(var i=0;i<r.length;i++)if(!r[i].cancelled)try{r[i].callback(it)}catch(o){setTimeout(function(){throw o},0)}},Math.round(n))}return pe.push({handle:++Et,callback:e,cancelled:!1}),Et},Oe=function(e){for(var t=0;t<pe.length;t++)pe[t].handle===e&&(pe[t].cancelled=!0)}}Hn.exports=function(e){return Ee.call(ce,e)};ke.cancel=function(){Oe.apply(ce,arguments)};ke.polyfill=function(e){e||(e=ce),e.requestAnimationFrame=Ee,e.cancelAnimationFrame=Oe};var lt={},Qn={get exports(){return lt},set exports(e){lt=e}},Qe={},Wn={get exports(){return Qe},set exports(e){Qe=e}},At;function Gn(){return At||(At=1,function(e,t){(function(n,r){e.exports=r()})(Te,function(){var n={isEqual:!0,isMatchingKey:!0,isPromise:!0,maxSize:!0,onCacheAdd:!0,onCacheChange:!0,onCacheHit:!0,transformKey:!0},r=Array.prototype.slice;function i(c){var g=c.length;return g?g===1?[c[0]]:g===2?[c[0],c[1]]:g===3?[c[0],c[1],c[2]]:r.call(c,0):[]}function o(c){var g={};for(var m in c)n[m]||(g[m]=c[m]);return g}function s(c){return typeof c=="function"&&c.isMemoized}function f(c,g){return c===g||c!==c&&g!==g}function a(c,g){var m={};for(var d in c)m[d]=c[d];for(var d in g)m[d]=g[d];return m}var u=function(){function c(g){this.keys=[],this.values=[],this.options=g;var m=typeof g.isMatchingKey=="function";m?this.getKeyIndex=this._getKeyIndexFromMatchingKey:g.maxSize>1?this.getKeyIndex=this._getKeyIndexForMany:this.getKeyIndex=this._getKeyIndexForSingle,this.canTransformKey=typeof g.transformKey=="function",this.shouldCloneArguments=this.canTransformKey||m,this.shouldUpdateOnAdd=typeof g.onCacheAdd=="function",this.shouldUpdateOnChange=typeof g.onCacheChange=="function",this.shouldUpdateOnHit=typeof g.onCacheHit=="function"}return Object.defineProperty(c.prototype,"size",{get:function(){return this.keys.length},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"snapshot",{get:function(){return{keys:i(this.keys),size:this.size,values:i(this.values)}},enumerable:!1,configurable:!0}),c.prototype._getKeyIndexFromMatchingKey=function(g){var m=this.options,d=m.isMatchingKey,b=m.maxSize,w=this.keys,h=w.length;if(!h)return-1;if(d(w[0],g))return 0;if(b>1){for(var A=1;A<h;A++)if(d(w[A],g))return A}return-1},c.prototype._getKeyIndexForMany=function(g){var m=this.options.isEqual,d=this.keys,b=d.length;if(!b)return-1;if(b===1)return this._getKeyIndexForSingle(g);var w=g.length,h,A;if(w>1){for(var _=0;_<b;_++)if(h=d[_],h.length===w){for(A=0;A<w&&m(h[A],g[A]);A++);if(A===w)return _}}else for(var _=0;_<b;_++)if(h=d[_],h.length===w&&m(h[0],g[0]))return _;return-1},c.prototype._getKeyIndexForSingle=function(g){var m=this.keys;if(!m.length)return-1;var d=m[0],b=d.length;if(g.length!==b)return-1;var w=this.options.isEqual;if(b>1){for(var h=0;h<b;h++)if(!w(d[h],g[h]))return-1;return 0}return w(d[0],g[0])?0:-1},c.prototype.orderByLru=function(g,m,d){for(var b=this.keys,w=this.values,h=b.length,A=d;A--;)b[A+1]=b[A],w[A+1]=w[A];b[0]=g,w[0]=m;var _=this.options.maxSize;h===_&&d===h?(b.pop(),w.pop()):d>=_&&(b.length=w.length=_)},c.prototype.updateAsyncCache=function(g){var m=this,d=this.options,b=d.onCacheChange,w=d.onCacheHit,h=this.keys[0],A=this.values[0];this.values[0]=A.then(function(_){return m.shouldUpdateOnHit&&w(m,m.options,g),m.shouldUpdateOnChange&&b(m,m.options,g),_},function(_){var N=m.getKeyIndex(h);throw N!==-1&&(m.keys.splice(N,1),m.values.splice(N,1)),_})},c}();function v(c,g){if(g===void 0&&(g={}),s(c))return v(c.fn,a(c.options,g));if(typeof c!="function")throw new TypeError("You must pass a function to `memoize`.");var m=g.isEqual,d=m===void 0?f:m,b=g.isMatchingKey,w=g.isPromise,h=w===void 0?!1:w,A=g.maxSize,_=A===void 0?1:A,N=g.onCacheAdd,C=g.onCacheChange,S=g.onCacheHit,L=g.transformKey,T=a({isEqual:d,isMatchingKey:b,isPromise:h,maxSize:_,onCacheAdd:N,onCacheChange:C,onCacheHit:S,transformKey:L},o(g)),R=new u(T),V=R.keys,$=R.values,q=R.canTransformKey,K=R.shouldCloneArguments,x=R.shouldUpdateOnAdd,p=R.shouldUpdateOnChange,E=R.shouldUpdateOnHit,F=function(){var H=K?i(arguments):arguments;q&&(H=L(H));var Q=V.length?R.getKeyIndex(H):-1;if(Q!==-1)E&&S(R,T,F),Q&&(R.orderByLru(V[Q],$[Q],Q),p&&C(R,T,F));else{var z=c.apply(this,arguments),O=K?H:i(arguments);R.orderByLru(O,z,V.length),h&&R.updateAsyncCache(F),x&&N(R,T,F),p&&C(R,T,F)}return $[0]};return F.cache=R,F.fn=c,F.isMemoized=!0,F.options=T,F}return v})}(Wn)),Qe}var Fe={},Yn={get exports(){return Fe},set exports(e){Fe=e}},Nt;function Xn(){return Nt||(Nt=1,function(e,t){(function(n,r){r(t)})(Te,function(n){var r=typeof WeakMap=="function",i=Object.keys;function o($,q){return $===q||$!==$&&q!==q}function s($){return $.constructor===Object||$.constructor==null}function f($){return!!$&&typeof $.then=="function"}function a($){return!!($&&$.$$typeof)}function u(){var $=[];return{delete:function(q){for(var K=0;K<$.length;++K)if($[K][0]===q){$.splice(K,1);return}},get:function(q){for(var K=0;K<$.length;++K)if($[K][0]===q)return $[K][1]},set:function(q,K){for(var x=0;x<$.length;++x)if($[x][0]===q){$[x][1]=K;return}$.push([q,K])}}}var v=function($){return $?function(){return new WeakMap}:u}(r);function c($){return function(K){var x=$||K;return function(E,F,H,Q,z,O,j){j===void 0&&(j=v());var W=!!E&&typeof E=="object",J=!!F&&typeof F=="object";if(W!==J)return!1;if(!W&&!J)return x(E,F,j);var X=j.get(E);if(X&&j.get(F))return X===F;j.set(E,F),j.set(F,E);var ie=x(E,F,j);return j.delete(E),j.delete(F),ie}}}function g($,q,K,x){var p=$.length;if(q.length!==p)return!1;for(;p-- >0;)if(!K($[p],q[p],p,p,$,q,x))return!1;return!0}function m($,q,K,x){var p=$.size===q.size;if(p&&$.size){var E={},F=0;$.forEach(function(H,Q){if(p){var z=!1,O=0;q.forEach(function(j,W){!z&&!E[O]&&(z=K(Q,W,F,O,$,q,x)&&K(H,j,Q,W,$,q,x),z&&(E[O]=!0)),O++}),F++,p=z}})}return p}var d="_owner",b=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function w($,q,K,x){var p=i($),E=p.length;if(i(q).length!==E)return!1;if(E)for(var F=void 0;E-- >0;){if(F=p[E],F===d){var H=a($),Q=a(q);if((H||Q)&&H!==Q)return!1}if(!b(q,F)||!K($[F],q[F],F,F,$,q,x))return!1}return!0}var h=function(){return/foo/g.flags==="g"?function(q,K){return q.source===K.source&&q.flags===K.flags}:function(q,K){return q.source===K.source&&q.global===K.global&&q.ignoreCase===K.ignoreCase&&q.multiline===K.multiline&&q.unicode===K.unicode&&q.sticky===K.sticky&&q.lastIndex===K.lastIndex}}();function A($,q,K,x){var p=$.size===q.size;if(p&&$.size){var E={};$.forEach(function(F,H){if(p){var Q=!1,z=0;q.forEach(function(O,j){!Q&&!E[z]&&(Q=K(F,O,H,j,$,q,x),Q&&(E[z]=!0)),z++}),p=Q}})}return p}var _=typeof Map=="function",N=typeof Set=="function",C=Object.prototype.valueOf;function S($){var q=typeof $=="function"?$(K):function(x,p,E,F,H,Q,z){return K(x,p,z)};function K(x,p,E){if(x===p)return!0;if(x&&p&&typeof x=="object"&&typeof p=="object"){if(s(x)&&s(p))return w(x,p,q,E);var F=Array.isArray(x),H=Array.isArray(p);return F||H?F===H&&g(x,p,q,E):(F=x instanceof Date,H=p instanceof Date,F||H?F===H&&o(x.getTime(),p.getTime()):(F=x instanceof RegExp,H=p instanceof RegExp,F||H?F===H&&h(x,p):f(x)||f(p)?x===p:_&&(F=x instanceof Map,H=p instanceof Map,F||H)?F===H&&m(x,p,q,E):N&&(F=x instanceof Set,H=p instanceof Set,F||H)?F===H&&A(x,p,q,E):x.valueOf!==C||p.valueOf!==C?o(x.valueOf(),p.valueOf()):w(x,p,q,E)))}return x!==x&&p!==p}return K}var L=S(),T=S(function(){return o}),R=S(c()),V=S(c(o));n.circularDeepEqual=R,n.circularShallowEqual=V,n.createCustomEqual=S,n.deepEqual=L,n.sameValueZeroEqual=o,n.shallowEqual=T,Object.defineProperty(n,"__esModule",{value:!0})})}(Yn,Fe)),Fe}(function(e,t){(function(n,r){e.exports=r(Gn(),Xn())})(Te,function(n,r){function i(){return i=Object.assign?Object.assign.bind():function(l){for(var y=1;y<arguments.length;y++){var P=arguments[y];for(var M in P)Object.prototype.hasOwnProperty.call(P,M)&&(l[M]=P[M])}return l},i.apply(this,arguments)}function o(l,y){if(l==null)return{};var P={},M=Object.keys(l),I,B;for(B=0;B<M.length;B++)I=M[B],!(y.indexOf(I)>=0)&&(P[I]=l[I]);return P}var s={isDeepEqual:!1,isPromise:!1,isReact:!1,isSerialized:!1,isShallowEqual:!1,matchesArg:void 0,matchesKey:void 0,maxAge:void 0,maxArgs:void 0,maxSize:1,onExpire:void 0,profileName:void 0,serializer:void 0,updateCacheForKey:void 0,transformArgs:void 0,updateExpire:!1};function f(){for(var l=arguments.length,y=new Array(l),P=0;P<l;P++)y[P]=arguments[P];return y.reduce(function(M,I){if(typeof M=="function")return typeof I=="function"?function(){M.apply(this,arguments),I.apply(this,arguments)}:M;if(typeof I=="function")return I})}function a(){for(var l=arguments.length,y=new Array(l),P=0;P<l;P++)y[P]=arguments[P];return y.reduce(function(M,I){if(typeof M=="function")return typeof I=="function"?function(){return M(I.apply(this,arguments))}:M;if(typeof I=="function")return I})}function u(l,y){for(var P=0;P<l.length;P++)if(l[P].key===y)return P;return-1}function v(l,y){var P=typeof y=="function"?y:function(M,I){for(var B=0;B<I.length;B++)if(!l(M[B],I[B]))return!1;return!0};return function(M,I){for(var B=0;B<M.length;B++)if(M[B].length===I.length&&P(M[B],I))return B;return-1}}function c(l,y){return!y||y===s?l:i({},l,y,{onCacheAdd:f(l.onCacheAdd,y.onCacheAdd),onCacheChange:f(l.onCacheChange,y.onCacheChange),onCacheHit:f(l.onCacheHit,y.onCacheHit),transformArgs:a(l.transformArgs,y.transformArgs)})}function g(l){return typeof l=="function"&&l.isMoized}function m(l,y,P){try{var M=P||y||"anonymous";Object.defineProperty(l,"name",{configurable:!0,enumerable:!1,value:"moized("+M+")",writable:!0})}catch{}}function d(l,y,P){var M=u(l,y);M!==-1&&(clearTimeout(l[M].timeoutId),P&&l.splice(M,1))}function b(l,y){var P=setTimeout(l,y);return typeof P.unref=="function"&&P.unref(),P}function w(l,y,P,M){var I=y.maxAge;return function B(k,U,Z){var G=k.keys[0];if(u(l,G)===-1){var ee=function(){var se=v(P,M),ue=se(k.keys,G),xe=k.values[ue];~ue&&(k.keys.splice(ue,1),k.values.splice(ue,1),typeof y.onCacheChange=="function"&&y.onCacheChange(k,U,Z)),d(l,G,!0),typeof y.onExpire=="function"&&y.onExpire(G)===!1&&(k.keys.unshift(G),k.values.unshift(xe),B(k,U,Z),typeof y.onCacheChange=="function"&&y.onCacheChange(k,U,Z))};l.push({expirationMethod:ee,key:G,timeoutId:b(ee,I)})}}}function h(l,y){return function(M){var I=M.keys[0],B=u(l,I);~B&&(d(l,I,!1),l[B].timeoutId=b(l[B].expirationMethod,y.maxAge))}}function A(l,y,P,M){var I=typeof y.maxAge=="number"&&isFinite(y.maxAge)?w(l,y,P,M):void 0;return{onCacheAdd:I,onCacheHit:I&&y.updateExpire?h(l,y):void 0}}var _={anonymousProfileNameCounter:1,isCollectingStats:!1,profiles:{}},N=!1;function C(l){l?delete _.profiles[l]:_.profiles={}}function S(l){l===void 0&&(l=!0),_.isCollectingStats=l}function L(l){var y=l.profileName;return function(){y&&!_.profiles[y]&&(_.profiles[y]={calls:0,hits:0}),_.profiles[y].calls++}}function T(l){return function(){var y=_.profiles,P=l.profileName;y[P]||(y[P]={calls:0,hits:0}),y[P].calls++,y[P].hits++}}function R(l){return l.displayName||l.name||"Anonymous "+_.anonymousProfileNameCounter++}function V(l,y){return l?(y/l*100).toFixed(4)+"%":"0.0000%"}function $(l){!_.isCollectingStats&&!N&&(console.warn('Stats are not currently being collected, please run "collectStats" to enable them.'),N=!0);var y=_.profiles;if(l){if(!y[l])return{calls:0,hits:0,usage:"0.0000%"};var P=y[l];return i({},P,{usage:V(P.calls,P.hits)})}var M=Object.keys(_.profiles).reduce(function(I,B){return I.calls+=y[B].calls,I.hits+=y[B].hits,I},{calls:0,hits:0});return i({},M,{profiles:Object.keys(y).reduce(function(I,B){return I[B]=$(B),I},{}),usage:V(M.calls,M.hits)})}function q(l){return _.isCollectingStats?{onCacheAdd:L(l),onCacheHit:T(l)}:{}}var K={arguments:!0,callee:!0,caller:!0,constructor:!0,length:!0,name:!0,prototype:!0};function x(l,y,P){P===void 0&&(P=[]),Object.getOwnPropertyNames(l).forEach(function(M){if(!K[M]&&P.indexOf(M)===-1){var I=Object.getOwnPropertyDescriptor(l,M);I.get||I.set?Object.defineProperty(y,M,I):y[M]=l[M]}})}function p(l,y){var P=y.expirations,M=l.options,I=v(M.isEqual,M.isMatchingKey),B=l;B.clear=function(){var k=B._microMemoizeOptions.onCacheChange,U=B.cache;return U.keys.length=0,U.values.length=0,k&&k(U,B.options,B),!0},B.clearStats=function(){C(B.options.profileName)},B.get=function(k){var U=B._microMemoizeOptions.transformKey,Z=B.cache,G=U?U(k):k,ee=I(Z.keys,G);return ee!==-1?B.apply(this,k):void 0},B.getStats=function(){return $(B.options.profileName)},B.has=function(k){var U=B._microMemoizeOptions.transformKey,Z=U?U(k):k;return I(B.cache.keys,Z)!==-1},B.keys=function(){return B.cacheSnapshot.keys},B.remove=function(k){var U=B._microMemoizeOptions,Z=U.onCacheChange,G=U.transformKey,ee=B.cache,ae=I(ee.keys,G?G(k):k);if(ae===-1)return!1;var se=ee.keys[ae];return ee.keys.splice(ae,1),ee.values.splice(ae,1),Z&&Z(ee,B.options,B),d(P,se,!0),!0},B.set=function(k,U){var Z=B._microMemoizeOptions,G=B.cache,ee=B.options,ae=Z.onCacheAdd,se=Z.onCacheChange,ue=Z.transformKey,xe=ue?ue(k):k,de=I(G.keys,xe);if(de===-1){var we=ee.maxSize-1;G.size>we&&(G.keys.length=we,G.values.length=we),G.keys.unshift(xe),G.values.unshift(U),ee.isPromise&&G.updateAsyncCache(B),ae&&ae(G,ee,B),se&&se(G,ee,B)}else{var Ke=G.keys[de];G.values[de]=U,de>0&&G.orderByLru(Ke,U,de),ee.isPromise&&G.updateAsyncCache(B),typeof se=="function"&&se(G,ee,B)}},B.values=function(){return B.cacheSnapshot.values}}function E(l,y){var P=y.expirations,M=y.options,I=y.originalFunction,B=l.options;Object.defineProperties(l,{_microMemoizeOptions:{configurable:!0,get:function(){return B}},cacheSnapshot:{configurable:!0,get:function(){var Z=l.cache;return{keys:Z.keys.slice(0),size:Z.size,values:Z.values.slice(0)}}},expirations:{configurable:!0,get:function(){return P}},expirationsSnapshot:{configurable:!0,get:function(){return P.slice(0)}},isMoized:{configurable:!0,get:function(){return!0}},options:{configurable:!0,get:function(){return M}},originalFunction:{configurable:!0,get:function(){return I}}});var k=l;x(I,k)}function F(l,y){return p(l,y),E(l,y),l}var H=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Q(l,y,P){var M=l(i({maxArgs:2,isShallowEqual:!0},P,{isReact:!1}));y.displayName||(y.displayName=y.name||"Component");function I(B,k,U){this.props=B,this.context=k,this.updater=U,this.MoizedComponent=M(y)}return I.prototype.isReactComponent={},I.prototype.render=function(){return{$$typeof:H,type:this.MoizedComponent,props:this.props,ref:null,key:null,_owner:null}},x(y,I,["contextType","contextTypes"]),I.displayName="Moized("+(y.displayName||y.name||"Component")+")",m(I,y.name,P.profileName),I}function z(l){return function(y){if(l>=y.length)return y;if(l===0)return[];if(l===1)return[y[0]];if(l===2)return[y[0],y[1]];if(l===3)return[y[0],y[1],y[2]];for(var P=[],M=0;M<l;M++)P[M]=y[M];return P}}function O(l,y){for(var P=l.length,M=0;M<P;++M)if(l[M]===y)return M+1;return 0}function j(){var l=[],y=[];return function(M,I){var B=typeof I;if(B==="function"||B==="symbol")return I.toString();if(typeof I=="object"){if(l.length){var k=O(l,this);k===0?l[l.length]=this:(l.splice(k),y.splice(k)),y[y.length]=M;var U=O(l,I);if(U!==0)return"[ref="+(y.slice(0,U).join(".")||".")+"]"}else l[0]=I,y[0]=M;return I}return""+I}}function W(l){var y=typeof l;return l&&(y==="object"||y==="function")?JSON.stringify(l,j()):l}function J(l){for(var y="|",P=0;P<l.length;P++)y+=W(l[P])+"|";return[y]}function X(l){return typeof l.serializer=="function"?l.serializer:J}function ie(l,y){return l[0]===y[0]}function $e(l){if(typeof l=="function")return function(y,P,M){return l(M.cache,M.options,M)}}function Cn(l){return l.matchesArg||l.isDeepEqual&&r.deepEqual||l.isShallowEqual&&r.shallowEqual||r.sameValueZeroEqual}function En(l){return l.matchesKey||l.isSerialized&&ie||void 0}function An(l){return a(l.isSerialized&&X(l),typeof l.transformArgs=="function"&&l.transformArgs,typeof l.maxArgs=="number"&&z(l.maxArgs))}function Nn(l){var y=l.options.updateCacheForKey,P=function(){for(var I=arguments.length,B=new Array(I),k=0;k<I;k++)B[k]=arguments[k];if(!y(B))return l.apply(this,B);var U=l.fn.apply(this,B);return l.set(B,U),U};return x(l,P),P}var Mn=["matchesArg","isDeepEqual","isPromise","isReact","isSerialized","isShallowEqual","matchesKey","maxAge","maxArgs","maxSize","onCacheAdd","onCacheChange","onCacheHit","onExpire","profileName","serializer","updateCacheForKey","transformArgs","updateExpire"],D=function l(y,P){var M=P||s;if(g(y)){var I=y.originalFunction,B=c(y.options,M);return l(I,B)}if(typeof y=="object")return function(rt,Bn){if(typeof rt=="function"){var Pn=c(y,Bn);return l(rt,Pn)}var Fn=c(y,rt);return l(Fn)};if(M.isReact)return Q(l,y,M);var k=i({},s,M,{maxAge:typeof M.maxAge=="number"&&M.maxAge>=0?M.maxAge:s.maxAge,maxArgs:typeof M.maxArgs=="number"&&M.maxArgs>=0?M.maxArgs:s.maxArgs,maxSize:typeof M.maxSize=="number"&&M.maxSize>=0?M.maxSize:s.maxSize,profileName:M.profileName||R(y)}),U=[];k.matchesArg,k.isDeepEqual;var Z=k.isPromise;k.isReact,k.isSerialized,k.isShallowEqual,k.matchesKey,k.maxAge,k.maxArgs;var G=k.maxSize,ee=k.onCacheAdd,ae=k.onCacheChange,se=k.onCacheHit;k.onExpire,k.profileName,k.serializer;var ue=k.updateCacheForKey;k.transformArgs,k.updateExpire;var xe=o(k,Mn),de=Cn(k),we=En(k),Ke=A(U,k,de,we),bt=q(k),$n=An(k),zn=i({},xe,{isEqual:de,isMatchingKey:we,isPromise:Z,maxSize:G,onCacheAdd:$e(f(ee,Ke.onCacheAdd,bt.onCacheAdd)),onCacheChange:$e(ae),onCacheHit:$e(f(se,Ke.onCacheHit,bt.onCacheHit)),transformKey:$n}),qn=n(y,zn),je=F(qn,{expirations:U,options:k,originalFunction:y});return ue&&(je=Nn(je)),m(je,y.name,M.profileName),je};D.clearStats=C,D.collectStats=S,D.compose=function(){return a.apply(void 0,arguments)||D},D.deep=D({isDeepEqual:!0}),D.getStats=$,D.infinite=D({maxSize:1/0}),D.isCollectingStats=function(){return _.isCollectingStats},D.isMoized=function(y){return typeof y=="function"&&!!y.isMoized},D.matchesArg=function(l){return D({matchesArg:l})},D.matchesKey=function(l){return D({matchesKey:l})};function Sn(l,y){if(y===!0)return D({maxAge:l,updateExpire:y});if(typeof y=="object"){var P=y.onExpire,M=y.updateExpire;return D({maxAge:l,onExpire:P,updateExpire:M})}return D(typeof y=="function"?{maxAge:l,onExpire:y,updateExpire:!0}:{maxAge:l})}return D.maxAge=Sn,D.maxArgs=function(l){return D({maxArgs:l})},D.maxSize=function(l){return D({maxSize:l})},D.profile=function(l){return D({profileName:l})},D.promise=D({isPromise:!0,updateExpire:!0}),D.react=D({isReact:!0}),D.serialize=D({isSerialized:!0}),D.serializeWith=function(l){return D({isSerialized:!0,serializer:l})},D.shallow=D({isShallowEqual:!0}),D.transformArgs=function(l){return D({transformArgs:l})},D.updateCacheForKey=function(l){return D({updateCacheForKey:l})},Object.defineProperty(D,"default",{configurable:!1,enumerable:!1,value:D,writable:!1}),D})})(Qn);var Qt=lt;function Zn(e,t,n){var r,i=1;e==null&&(e=0),t==null&&(t=0),n==null&&(n=0);function o(){var s,f=r.length,a,u=0,v=0,c=0;for(s=0;s<f;++s)a=r[s],u+=a.x||0,v+=a.y||0,c+=a.z||0;for(u=(u/f-e)*i,v=(v/f-t)*i,c=(c/f-n)*i,s=0;s<f;++s)a=r[s],u&&(a.x-=u),v&&(a.y-=v),c&&(a.z-=c)}return o.initialize=function(s){r=s},o.x=function(s){return arguments.length?(e=+s,o):e},o.y=function(s){return arguments.length?(t=+s,o):t},o.z=function(s){return arguments.length?(n=+s,o):n},o.strength=function(s){return arguments.length?(i=+s,o):i},o}function Jn(e){const t=+this._x.call(null,e);return Wt(this.cover(t),t,e)}function Wt(e,t,n){if(isNaN(t))return e;var r,i=e._root,o={data:n},s=e._x0,f=e._x1,a,u,v,c,g;if(!i)return e._root=o,e;for(;i.length;)if((v=t>=(a=(s+f)/2))?s=a:f=a,r=i,!(i=i[c=+v]))return r[c]=o,e;if(u=+e._x.call(null,i.data),t===u)return o.next=i,r?r[c]=o:e._root=o,e;do r=r?r[c]=new Array(2):e._root=new Array(2),(v=t>=(a=(s+f)/2))?s=a:f=a;while((c=+v)==(g=+(u>=a)));return r[g]=i,r[c]=o,e}function er(e){Array.isArray(e)||(e=Array.from(e));const t=e.length,n=new Float64Array(t);let r=1/0,i=-1/0;for(let o=0,s;o<t;++o)isNaN(s=+this._x.call(null,e[o]))||(n[o]=s,s<r&&(r=s),s>i&&(i=s));if(r>i)return this;this.cover(r).cover(i);for(let o=0;o<t;++o)Wt(this,n[o],e[o]);return this}function tr(e){if(isNaN(e=+e))return this;var t=this._x0,n=this._x1;if(isNaN(t))n=(t=Math.floor(e))+1;else{for(var r=n-t||1,i=this._root,o,s;t>e||e>=n;)switch(s=+(e<t),o=new Array(2),o[s]=i,i=o,r*=2,s){case 0:n=t+r;break;case 1:t=n-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=t,this._x1=n,this}function nr(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function rr(e){return arguments.length?this.cover(+e[0][0]).cover(+e[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function le(e,t,n){this.node=e,this.x0=t,this.x1=n}function ir(e,t){var n,r=this._x0,i,o,s=this._x1,f=[],a=this._root,u,v;for(a&&f.push(new le(a,r,s)),t==null?t=1/0:(r=e-t,s=e+t);u=f.pop();)if(!(!(a=u.node)||(i=u.x0)>s||(o=u.x1)<r))if(a.length){var c=(i+o)/2;f.push(new le(a[1],c,o),new le(a[0],i,c)),(v=+(e>=c))&&(u=f[f.length-1],f[f.length-1]=f[f.length-1-v],f[f.length-1-v]=u)}else{var g=Math.abs(e-+this._x.call(null,a.data));g<t&&(t=g,r=e-g,s=e+g,n=a.data)}return n}function or(e){if(isNaN(a=+this._x.call(null,e)))return this;var t,n=this._root,r,i,o,s=this._x0,f=this._x1,a,u,v,c,g;if(!n)return this;if(n.length)for(;;){if((v=a>=(u=(s+f)/2))?s=u:f=u,t=n,!(n=n[c=+v]))return this;if(!n.length)break;t[c+1&1]&&(r=t,g=c)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):t?(o?t[c]=o:delete t[c],(n=t[0]||t[1])&&n===(t[1]||t[0])&&!n.length&&(r?r[g]=n:this._root=n),this):(this._root=o,this)}function ar(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function sr(){return this._root}function ur(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function fr(e){var t=[],n,r=this._root,i,o,s;for(r&&t.push(new le(r,this._x0,this._x1));n=t.pop();)if(!e(r=n.node,o=n.x0,s=n.x1)&&r.length){var f=(o+s)/2;(i=r[1])&&t.push(new le(i,f,s)),(i=r[0])&&t.push(new le(i,o,f))}return this}function cr(e){var t=[],n=[],r;for(this._root&&t.push(new le(this._root,this._x0,this._x1));r=t.pop();){var i=r.node;if(i.length){var o,s=r.x0,f=r.x1,a=(s+f)/2;(o=i[0])&&t.push(new le(o,s,a)),(o=i[1])&&t.push(new le(o,a,f))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.x1);return this}function lr(e){return e[0]}function hr(e){return arguments.length?(this._x=e,this):this._x}function Gt(e,t){var n=new yt(t??lr,NaN,NaN);return e==null?n:n.addAll(e)}function yt(e,t,n){this._x=e,this._x0=t,this._x1=n,this._root=void 0}function Mt(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var oe=Gt.prototype=yt.prototype;oe.copy=function(){var e=new yt(this._x,this._x0,this._x1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=Mt(t),e;for(n=[{source:t,target:e._root=new Array(2)}];t=n.pop();)for(var i=0;i<2;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(2)}):t.target[i]=Mt(r));return e};oe.add=Jn;oe.addAll=er;oe.cover=tr;oe.data=nr;oe.extent=rr;oe.find=ir;oe.remove=or;oe.removeAll=ar;oe.root=sr;oe.size=ur;oe.visit=fr;oe.visitAfter=cr;oe.x=hr;function dr(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return Yt(this.cover(t,n),t,n,e)}function Yt(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,o=e._root,s={data:r},f=e._x0,a=e._y0,u=e._x1,v=e._y1,c,g,m,d,b,w,h,A;if(!o)return e._root=s,e;for(;o.length;)if((b=t>=(c=(f+u)/2))?f=c:u=c,(w=n>=(g=(a+v)/2))?a=g:v=g,i=o,!(o=o[h=w<<1|b]))return i[h]=s,e;if(m=+e._x.call(null,o.data),d=+e._y.call(null,o.data),t===m&&n===d)return s.next=o,i?i[h]=s:e._root=s,e;do i=i?i[h]=new Array(4):e._root=new Array(4),(b=t>=(c=(f+u)/2))?f=c:u=c,(w=n>=(g=(a+v)/2))?a=g:v=g;while((h=w<<1|b)===(A=(d>=g)<<1|m>=c));return i[A]=o,i[h]=s,e}function vr(e){var t,n,r=e.length,i,o,s=new Array(r),f=new Array(r),a=1/0,u=1/0,v=-1/0,c=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(o=+this._y.call(null,t))||(s[n]=i,f[n]=o,i<a&&(a=i),i>v&&(v=i),o<u&&(u=o),o>c&&(c=o));if(a>v||u>c)return this;for(this.cover(a,u).cover(v,c),n=0;n<r;++n)Yt(this,s[n],f[n],e[n]);return this}function gr(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,o=(r=Math.floor(t))+1;else{for(var s=i-n||1,f=this._root,a,u;n>e||e>=i||r>t||t>=o;)switch(u=(t<r)<<1|e<n,a=new Array(4),a[u]=f,f=a,s*=2,u){case 0:i=n+s,o=r+s;break;case 1:n=i-s,o=r+s;break;case 2:i=n+s,r=o-s;break;case 3:n=i-s,r=o-s;break}this._root&&this._root.length&&(this._root=f)}return this._x0=n,this._y0=r,this._x1=i,this._y1=o,this}function pr(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function yr(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function ne(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function mr(e,t,n){var r,i=this._x0,o=this._y0,s,f,a,u,v=this._x1,c=this._y1,g=[],m=this._root,d,b;for(m&&g.push(new ne(m,i,o,v,c)),n==null?n=1/0:(i=e-n,o=t-n,v=e+n,c=t+n,n*=n);d=g.pop();)if(!(!(m=d.node)||(s=d.x0)>v||(f=d.y0)>c||(a=d.x1)<i||(u=d.y1)<o))if(m.length){var w=(s+a)/2,h=(f+u)/2;g.push(new ne(m[3],w,h,a,u),new ne(m[2],s,h,w,u),new ne(m[1],w,f,a,h),new ne(m[0],s,f,w,h)),(b=(t>=h)<<1|e>=w)&&(d=g[g.length-1],g[g.length-1]=g[g.length-1-b],g[g.length-1-b]=d)}else{var A=e-+this._x.call(null,m.data),_=t-+this._y.call(null,m.data),N=A*A+_*_;if(N<n){var C=Math.sqrt(n=N);i=e-C,o=t-C,v=e+C,c=t+C,r=m.data}}return r}function xr(e){if(isNaN(v=+this._x.call(null,e))||isNaN(c=+this._y.call(null,e)))return this;var t,n=this._root,r,i,o,s=this._x0,f=this._y0,a=this._x1,u=this._y1,v,c,g,m,d,b,w,h;if(!n)return this;if(n.length)for(;;){if((d=v>=(g=(s+a)/2))?s=g:a=g,(b=c>=(m=(f+u)/2))?f=m:u=m,t=n,!(n=n[w=b<<1|d]))return this;if(!n.length)break;(t[w+1&3]||t[w+2&3]||t[w+3&3])&&(r=t,h=w)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):t?(o?t[w]=o:delete t[w],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[h]=n:this._root=n),this):(this._root=o,this)}function wr(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function _r(){return this._root}function br(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function Cr(e){var t=[],n,r=this._root,i,o,s,f,a;for(r&&t.push(new ne(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,o=n.x0,s=n.y0,f=n.x1,a=n.y1)&&r.length){var u=(o+f)/2,v=(s+a)/2;(i=r[3])&&t.push(new ne(i,u,v,f,a)),(i=r[2])&&t.push(new ne(i,o,v,u,a)),(i=r[1])&&t.push(new ne(i,u,s,f,v)),(i=r[0])&&t.push(new ne(i,o,s,u,v))}return this}function Er(e){var t=[],n=[],r;for(this._root&&t.push(new ne(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var o,s=r.x0,f=r.y0,a=r.x1,u=r.y1,v=(s+a)/2,c=(f+u)/2;(o=i[0])&&t.push(new ne(o,s,f,v,c)),(o=i[1])&&t.push(new ne(o,v,f,a,c)),(o=i[2])&&t.push(new ne(o,s,c,v,u)),(o=i[3])&&t.push(new ne(o,v,c,a,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function Ar(e){return e[0]}function Nr(e){return arguments.length?(this._x=e,this):this._x}function Mr(e){return e[1]}function Sr(e){return arguments.length?(this._y=e,this):this._y}function Xt(e,t,n){var r=new mt(t??Ar,n??Mr,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function mt(e,t,n,r,i,o){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function St(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var re=Xt.prototype=mt.prototype;re.copy=function(){var e=new mt(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=St(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=St(r));return e};re.add=dr;re.addAll=vr;re.cover=gr;re.data=pr;re.extent=yr;re.find=mr;re.remove=xr;re.removeAll=wr;re.root=_r;re.size=br;re.visit=Cr;re.visitAfter=Er;re.x=Nr;re.y=Sr;function $r(e){const t=+this._x.call(null,e),n=+this._y.call(null,e),r=+this._z.call(null,e);return Zt(this.cover(t,n,r),t,n,r,e)}function Zt(e,t,n,r,i){if(isNaN(t)||isNaN(n)||isNaN(r))return e;var o,s=e._root,f={data:i},a=e._x0,u=e._y0,v=e._z0,c=e._x1,g=e._y1,m=e._z1,d,b,w,h,A,_,N,C,S,L,T;if(!s)return e._root=f,e;for(;s.length;)if((N=t>=(d=(a+c)/2))?a=d:c=d,(C=n>=(b=(u+g)/2))?u=b:g=b,(S=r>=(w=(v+m)/2))?v=w:m=w,o=s,!(s=s[L=S<<2|C<<1|N]))return o[L]=f,e;if(h=+e._x.call(null,s.data),A=+e._y.call(null,s.data),_=+e._z.call(null,s.data),t===h&&n===A&&r===_)return f.next=s,o?o[L]=f:e._root=f,e;do o=o?o[L]=new Array(8):e._root=new Array(8),(N=t>=(d=(a+c)/2))?a=d:c=d,(C=n>=(b=(u+g)/2))?u=b:g=b,(S=r>=(w=(v+m)/2))?v=w:m=w;while((L=S<<2|C<<1|N)===(T=(_>=w)<<2|(A>=b)<<1|h>=d));return o[T]=s,o[L]=f,e}function zr(e){Array.isArray(e)||(e=Array.from(e));const t=e.length,n=new Float64Array(t),r=new Float64Array(t),i=new Float64Array(t);let o=1/0,s=1/0,f=1/0,a=-1/0,u=-1/0,v=-1/0;for(let c=0,g,m,d,b;c<t;++c)isNaN(m=+this._x.call(null,g=e[c]))||isNaN(d=+this._y.call(null,g))||isNaN(b=+this._z.call(null,g))||(n[c]=m,r[c]=d,i[c]=b,m<o&&(o=m),m>a&&(a=m),d<s&&(s=d),d>u&&(u=d),b<f&&(f=b),b>v&&(v=b));if(o>a||s>u||f>v)return this;this.cover(o,s,f).cover(a,u,v);for(let c=0;c<t;++c)Zt(this,n[c],r[c],i[c],e[c]);return this}function qr(e,t,n){if(isNaN(e=+e)||isNaN(t=+t)||isNaN(n=+n))return this;var r=this._x0,i=this._y0,o=this._z0,s=this._x1,f=this._y1,a=this._z1;if(isNaN(r))s=(r=Math.floor(e))+1,f=(i=Math.floor(t))+1,a=(o=Math.floor(n))+1;else{for(var u=s-r||1,v=this._root,c,g;r>e||e>=s||i>t||t>=f||o>n||n>=a;)switch(g=(n<o)<<2|(t<i)<<1|e<r,c=new Array(8),c[g]=v,v=c,u*=2,g){case 0:s=r+u,f=i+u,a=o+u;break;case 1:r=s-u,f=i+u,a=o+u;break;case 2:s=r+u,i=f-u,a=o+u;break;case 3:r=s-u,i=f-u,a=o+u;break;case 4:s=r+u,f=i+u,o=a-u;break;case 5:r=s-u,f=i+u,o=a-u;break;case 6:s=r+u,i=f-u,o=a-u;break;case 7:r=s-u,i=f-u,o=a-u;break}this._root&&this._root.length&&(this._root=v)}return this._x0=r,this._y0=i,this._z0=o,this._x1=s,this._y1=f,this._z1=a,this}function Br(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function Pr(e){return arguments.length?this.cover(+e[0][0],+e[0][1],+e[0][2]).cover(+e[1][0],+e[1][1],+e[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Y(e,t,n,r,i,o,s){this.node=e,this.x0=t,this.y0=n,this.z0=r,this.x1=i,this.y1=o,this.z1=s}function Fr(e,t,n,r){var i,o=this._x0,s=this._y0,f=this._z0,a,u,v,c,g,m,d=this._x1,b=this._y1,w=this._z1,h=[],A=this._root,_,N;for(A&&h.push(new Y(A,o,s,f,d,b,w)),r==null?r=1/0:(o=e-r,s=t-r,f=n-r,d=e+r,b=t+r,w=n+r,r*=r);_=h.pop();)if(!(!(A=_.node)||(a=_.x0)>d||(u=_.y0)>b||(v=_.z0)>w||(c=_.x1)<o||(g=_.y1)<s||(m=_.z1)<f))if(A.length){var C=(a+c)/2,S=(u+g)/2,L=(v+m)/2;h.push(new Y(A[7],C,S,L,c,g,m),new Y(A[6],a,S,L,C,g,m),new Y(A[5],C,u,L,c,S,m),new Y(A[4],a,u,L,C,S,m),new Y(A[3],C,S,v,c,g,L),new Y(A[2],a,S,v,C,g,L),new Y(A[1],C,u,v,c,S,L),new Y(A[0],a,u,v,C,S,L)),(N=(n>=L)<<2|(t>=S)<<1|e>=C)&&(_=h[h.length-1],h[h.length-1]=h[h.length-1-N],h[h.length-1-N]=_)}else{var T=e-+this._x.call(null,A.data),R=t-+this._y.call(null,A.data),V=n-+this._z.call(null,A.data),$=T*T+R*R+V*V;if($<r){var q=Math.sqrt(r=$);o=e-q,s=t-q,f=n-q,d=e+q,b=t+q,w=n+q,i=A.data}}return i}function Ir(e){if(isNaN(g=+this._x.call(null,e))||isNaN(m=+this._y.call(null,e))||isNaN(d=+this._z.call(null,e)))return this;var t,n=this._root,r,i,o,s=this._x0,f=this._y0,a=this._z0,u=this._x1,v=this._y1,c=this._z1,g,m,d,b,w,h,A,_,N,C,S;if(!n)return this;if(n.length)for(;;){if((A=g>=(b=(s+u)/2))?s=b:u=b,(_=m>=(w=(f+v)/2))?f=w:v=w,(N=d>=(h=(a+c)/2))?a=h:c=h,t=n,!(n=n[C=N<<2|_<<1|A]))return this;if(!n.length)break;(t[C+1&7]||t[C+2&7]||t[C+3&7]||t[C+4&7]||t[C+5&7]||t[C+6&7]||t[C+7&7])&&(r=t,S=C)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):t?(o?t[C]=o:delete t[C],(n=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&n===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[S]=n:this._root=n),this):(this._root=o,this)}function kr(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function Or(){return this._root}function Lr(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function Tr(e){var t=[],n,r=this._root,i,o,s,f,a,u,v;for(r&&t.push(new Y(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=t.pop();)if(!e(r=n.node,o=n.x0,s=n.y0,f=n.z0,a=n.x1,u=n.y1,v=n.z1)&&r.length){var c=(o+a)/2,g=(s+u)/2,m=(f+v)/2;(i=r[7])&&t.push(new Y(i,c,g,m,a,u,v)),(i=r[6])&&t.push(new Y(i,o,g,m,c,u,v)),(i=r[5])&&t.push(new Y(i,c,s,m,a,g,v)),(i=r[4])&&t.push(new Y(i,o,s,m,c,g,v)),(i=r[3])&&t.push(new Y(i,c,g,f,a,u,m)),(i=r[2])&&t.push(new Y(i,o,g,f,c,u,m)),(i=r[1])&&t.push(new Y(i,c,s,f,a,g,m)),(i=r[0])&&t.push(new Y(i,o,s,f,c,g,m))}return this}function Kr(e){var t=[],n=[],r;for(this._root&&t.push(new Y(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=t.pop();){var i=r.node;if(i.length){var o,s=r.x0,f=r.y0,a=r.z0,u=r.x1,v=r.y1,c=r.z1,g=(s+u)/2,m=(f+v)/2,d=(a+c)/2;(o=i[0])&&t.push(new Y(o,s,f,a,g,m,d)),(o=i[1])&&t.push(new Y(o,g,f,a,u,m,d)),(o=i[2])&&t.push(new Y(o,s,m,a,g,v,d)),(o=i[3])&&t.push(new Y(o,g,m,a,u,v,d)),(o=i[4])&&t.push(new Y(o,s,f,d,g,m,c)),(o=i[5])&&t.push(new Y(o,g,f,d,u,m,c)),(o=i[6])&&t.push(new Y(o,s,m,d,g,v,c)),(o=i[7])&&t.push(new Y(o,g,m,d,u,v,c))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function jr(e){return e[0]}function Rr(e){return arguments.length?(this._x=e,this):this._x}function Dr(e){return e[1]}function Hr(e){return arguments.length?(this._y=e,this):this._y}function Ur(e){return e[2]}function Vr(e){return arguments.length?(this._z=e,this):this._z}function Jt(e,t,n,r){var i=new xt(t??jr,n??Dr,r??Ur,NaN,NaN,NaN,NaN,NaN,NaN);return e==null?i:i.addAll(e)}function xt(e,t,n,r,i,o,s,f,a){this._x=e,this._y=t,this._z=n,this._x0=r,this._y0=i,this._z0=o,this._x1=s,this._y1=f,this._z1=a,this._root=void 0}function $t(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var te=Jt.prototype=xt.prototype;te.copy=function(){var e=new xt(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=$t(t),e;for(n=[{source:t,target:e._root=new Array(8)}];t=n.pop();)for(var i=0;i<8;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(8)}):t.target[i]=$t(r));return e};te.add=$r;te.addAll=zr;te.cover=qr;te.data=Br;te.extent=Pr;te.find=Fr;te.remove=Ir;te.removeAll=kr;te.root=Or;te.size=Lr;te.visit=Tr;te.visitAfter=Kr;te.x=Rr;te.y=Hr;te.z=Vr;function Ie(e){return function(){return e}}function fe(e){return(e()-.5)*1e-6}function Qr(e){return e.index}function zt(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function Wr(e){var t=Qr,n=g,r,i=Ie(30),o,s,f,a,u,v,c=1;e==null&&(e=[]);function g(h){return 1/Math.min(a[h.source.index],a[h.target.index])}function m(h){for(var A=0,_=e.length;A<c;++A)for(var N=0,C,S,L,T=0,R=0,V=0,$,q;N<_;++N)C=e[N],S=C.source,L=C.target,T=L.x+L.vx-S.x-S.vx||fe(v),f>1&&(R=L.y+L.vy-S.y-S.vy||fe(v)),f>2&&(V=L.z+L.vz-S.z-S.vz||fe(v)),$=Math.sqrt(T*T+R*R+V*V),$=($-o[N])/$*h*r[N],T*=$,R*=$,V*=$,L.vx-=T*(q=u[N]),f>1&&(L.vy-=R*q),f>2&&(L.vz-=V*q),S.vx+=T*(q=1-q),f>1&&(S.vy+=R*q),f>2&&(S.vz+=V*q)}function d(){if(s){var h,A=s.length,_=e.length,N=new Map(s.map((S,L)=>[t(S,L,s),S])),C;for(h=0,a=new Array(A);h<_;++h)C=e[h],C.index=h,typeof C.source!="object"&&(C.source=zt(N,C.source)),typeof C.target!="object"&&(C.target=zt(N,C.target)),a[C.source.index]=(a[C.source.index]||0)+1,a[C.target.index]=(a[C.target.index]||0)+1;for(h=0,u=new Array(_);h<_;++h)C=e[h],u[h]=a[C.source.index]/(a[C.source.index]+a[C.target.index]);r=new Array(_),b(),o=new Array(_),w()}}function b(){if(s)for(var h=0,A=e.length;h<A;++h)r[h]=+n(e[h],h,e)}function w(){if(s)for(var h=0,A=e.length;h<A;++h)o[h]=+i(e[h],h,e)}return m.initialize=function(h,...A){s=h,v=A.find(_=>typeof _=="function")||Math.random,f=A.find(_=>[1,2,3].includes(_))||2,d()},m.links=function(h){return arguments.length?(e=h,d(),m):e},m.id=function(h){return arguments.length?(t=h,m):t},m.iterations=function(h){return arguments.length?(c=+h,m):c},m.strength=function(h){return arguments.length?(n=typeof h=="function"?h:Ie(+h),b(),m):n},m.distance=function(h){return arguments.length?(i=typeof h=="function"?h:Ie(+h),w(),m):i},m}var Gr={value:()=>{}};function en(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Ve(n)}function Ve(e){this._=e}function Yr(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Ve.prototype=en.prototype={constructor:Ve,on:function(e,t){var n=this._,r=Yr(e+"",n),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(e=r[o]).type)&&(i=Xr(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++o<s;)if(i=(e=r[o]).type)n[i]=qt(n[i],e.name,t);else if(t==null)for(i in n)n[i]=qt(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Ve(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};function Xr(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function qt(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=Gr,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Ae=0,Be=0,qe=0,tn=1e3,We,Pe,Ge=0,me=0,nt=0,Le=typeof performance=="object"&&performance.now?performance:Date,nn=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function rn(){return me||(nn(Zr),me=Le.now()+nt)}function Zr(){me=0}function ht(){this._call=this._time=this._next=null}ht.prototype=on.prototype={constructor:ht,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?rn():+n)+(t==null?0:+t),!this._next&&Pe!==this&&(Pe?Pe._next=this:We=this,Pe=this),this._call=e,this._time=n,dt()},stop:function(){this._call&&(this._call=null,this._time=1/0,dt())}};function on(e,t,n){var r=new ht;return r.restart(e,t,n),r}function Jr(){rn(),++Ae;for(var e=We,t;e;)(t=me-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ae}function Bt(){me=(Ge=Le.now())+nt,Ae=Be=0;try{Jr()}finally{Ae=0,ti(),me=0}}function ei(){var e=Le.now(),t=e-Ge;t>tn&&(nt-=t,Ge=e)}function ti(){for(var e,t=We,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:We=n);Pe=e,dt(r)}function dt(e){if(!Ae){Be&&(Be=clearTimeout(Be));var t=e-me;t>24?(e<1/0&&(Be=setTimeout(Bt,e-Le.now()-nt)),qe&&(qe=clearInterval(qe))):(qe||(Ge=Le.now(),qe=setInterval(ei,tn)),Ae=1,nn(Bt))}}const ni=1664525,ri=1013904223,Pt=4294967296;function ii(){let e=1;return()=>(e=(ni*e+ri)%Pt)/Pt}var Ft=3;function ot(e){return e.x}function It(e){return e.y}function oi(e){return e.z}var ai=10,si=Math.PI*(3-Math.sqrt(5)),ui=Math.PI*20/(9+Math.sqrt(221));function fi(e,t){t=t||2;var n=Math.min(Ft,Math.max(1,Math.round(t))),r,i=1,o=.001,s=1-Math.pow(o,1/300),f=0,a=.6,u=new Map,v=on(m),c=en("tick","end"),g=ii();e==null&&(e=[]);function m(){d(),c.call("tick",r),i<o&&(v.stop(),c.call("end",r))}function d(h){var A,_=e.length,N;h===void 0&&(h=1);for(var C=0;C<h;++C)for(i+=(f-i)*s,u.forEach(function(S){S(i)}),A=0;A<_;++A)N=e[A],N.fx==null?N.x+=N.vx*=a:(N.x=N.fx,N.vx=0),n>1&&(N.fy==null?N.y+=N.vy*=a:(N.y=N.fy,N.vy=0)),n>2&&(N.fz==null?N.z+=N.vz*=a:(N.z=N.fz,N.vz=0));return r}function b(){for(var h=0,A=e.length,_;h<A;++h){if(_=e[h],_.index=h,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||n>1&&isNaN(_.y)||n>2&&isNaN(_.z)){var N=ai*(n>2?Math.cbrt(.5+h):n>1?Math.sqrt(.5+h):h),C=h*si,S=h*ui;n===1?_.x=N:n===2?(_.x=N*Math.cos(C),_.y=N*Math.sin(C)):(_.x=N*Math.sin(C)*Math.cos(S),_.y=N*Math.cos(C),_.z=N*Math.sin(C)*Math.sin(S))}(isNaN(_.vx)||n>1&&isNaN(_.vy)||n>2&&isNaN(_.vz))&&(_.vx=0,n>1&&(_.vy=0),n>2&&(_.vz=0))}}function w(h){return h.initialize&&h.initialize(e,g,n),h}return b(),r={tick:d,restart:function(){return v.restart(m),r},stop:function(){return v.stop(),r},numDimensions:function(h){return arguments.length?(n=Math.min(Ft,Math.max(1,Math.round(h))),u.forEach(w),r):n},nodes:function(h){return arguments.length?(e=h,b(),u.forEach(w),r):e},alpha:function(h){return arguments.length?(i=+h,r):i},alphaMin:function(h){return arguments.length?(o=+h,r):o},alphaDecay:function(h){return arguments.length?(s=+h,r):+s},alphaTarget:function(h){return arguments.length?(f=+h,r):f},velocityDecay:function(h){return arguments.length?(a=1-h,r):1-a},randomSource:function(h){return arguments.length?(g=h,u.forEach(w),r):g},force:function(h,A){return arguments.length>1?(A==null?u.delete(h):u.set(h,w(A)),r):u.get(h)},find:function(){var h=Array.prototype.slice.call(arguments),A=h.shift()||0,_=(n>1?h.shift():null)||0,N=(n>2?h.shift():null)||0,C=h.shift()||1/0,S=0,L=e.length,T,R,V,$,q,K;for(C*=C,S=0;S<L;++S)q=e[S],T=A-q.x,R=_-(q.y||0),V=N-(q.z||0),$=T*T+R*R+V*V,$<C&&(K=q,C=$);return K},on:function(h,A){return arguments.length>1?(c.on(h,A),r):c.on(h)}}}function ci(){var e,t,n,r,i,o=Ie(-30),s,f=1,a=1/0,u=.81;function v(d){var b,w=e.length,h=(t===1?Gt(e,ot):t===2?Xt(e,ot,It):t===3?Jt(e,ot,It,oi):null).visitAfter(g);for(i=d,b=0;b<w;++b)n=e[b],h.visit(m)}function c(){if(e){var d,b=e.length,w;for(s=new Array(b),d=0;d<b;++d)w=e[d],s[w.index]=+o(w,d,e)}}function g(d){var b=0,w,h,A=0,_,N,C,S,L=d.length;if(L){for(_=N=C=S=0;S<L;++S)(w=d[S])&&(h=Math.abs(w.value))&&(b+=w.value,A+=h,_+=h*(w.x||0),N+=h*(w.y||0),C+=h*(w.z||0));b*=Math.sqrt(4/L),d.x=_/A,t>1&&(d.y=N/A),t>2&&(d.z=C/A)}else{w=d,w.x=w.data.x,t>1&&(w.y=w.data.y),t>2&&(w.z=w.data.z);do b+=s[w.data.index];while(w=w.next)}d.value=b}function m(d,b,w,h,A){if(!d.value)return!0;var _=[w,h,A][t-1],N=d.x-n.x,C=t>1?d.y-n.y:0,S=t>2?d.z-n.z:0,L=_-b,T=N*N+C*C+S*S;if(L*L/u<T)return T<a&&(N===0&&(N=fe(r),T+=N*N),t>1&&C===0&&(C=fe(r),T+=C*C),t>2&&S===0&&(S=fe(r),T+=S*S),T<f&&(T=Math.sqrt(f*T)),n.vx+=N*d.value*i/T,t>1&&(n.vy+=C*d.value*i/T),t>2&&(n.vz+=S*d.value*i/T)),!0;if(d.length||T>=a)return;(d.data!==n||d.next)&&(N===0&&(N=fe(r),T+=N*N),t>1&&C===0&&(C=fe(r),T+=C*C),t>2&&S===0&&(S=fe(r),T+=S*S),T<f&&(T=Math.sqrt(f*T)));do d.data!==n&&(L=s[d.data.index]*i/T,n.vx+=N*L,t>1&&(n.vy+=C*L),t>2&&(n.vz+=S*L));while(d=d.next)}return v.initialize=function(d,...b){e=d,r=b.find(w=>typeof w=="function")||Math.random,t=b.find(w=>[1,2,3].includes(w))||2,c()},v.strength=function(d){return arguments.length?(o=typeof d=="function"?d:Ie(+d),c(),v):o},v.distanceMin=function(d){return arguments.length?(f=d*d,v):Math.sqrt(f)},v.distanceMax=function(d){return arguments.length?(a=d*d,v):Math.sqrt(a)},v.theta=function(d){return arguments.length?(u=d*d,v):Math.sqrt(u)},v}var Ye={},li={get exports(){return Ye},set exports(e){Ye=e}},Ne={},hi={get exports(){return Ne},set exports(e){Ne=e}},an=function(t){return t===0?"x":t===1?"y":t===2?"z":"c"+(t+1)};const di=an;var Se=function(t){return n;function n(r,i){let o=i&&i.indent||0,s=i&&i.join!==void 0?i.join:`
`,f=Array(o+1).join(" "),a=[];for(let u=0;u<t;++u){let v=di(u),c=u===0?"":f;a.push(c+r.replace(/{var}/g,v))}return a.join(s)}};const sn=Se;hi.exports=vi;Ne.generateCreateBodyFunctionBody=un;Ne.getVectorCode=cn;Ne.getBodyCode=fn;function vi(e,t){let n=un(e,t),{Body:r}=new Function(n)();return r}function un(e,t){return`
${cn(e,t)}
${fn(e)}
return {Body: Body, Vector: Vector};
`}function fn(e){let t=sn(e),n=t("{var}",{join:", "});return`
function Body(${n}) {
  this.isPinned = false;
  this.pos = new Vector(${n});
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

Body.prototype.setPosition = function (${n}) {
  ${t("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function cn(e,t){let n=sn(e),r="";return t&&(r=`${n(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${n("{var}",{join:", "})}) {
  ${r}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${n('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${n("this.{var} = v.{var};",{indent:4})}
    } else {
      ${n('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${n("this.{var} = ",{join:""})}0;
  };`}var he={},gi={get exports(){return he},set exports(e){he=e}};const wt=Se,ve=an;gi.exports=pi;he.generateQuadTreeFunctionBody=ln;he.getInsertStackCode=pn;he.getQuadNodeCode=gn;he.isSamePosition=hn;he.getChildBodyCode=vn;he.setChildBodyCode=dn;function pi(e){let t=ln(e);return new Function(t)()}function ln(e){let t=wt(e),n=Math.pow(2,e);return`
${pn()}
${gn(e)}
${hn(e)}
${vn(e)}
${dn(e)}

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
${s("      node.")}
      node.body = null;
      node.mass = ${t("node.mass_{var} = ",{join:""})}0;
      ${t("node.min_{var} = node.max_{var} = ",{join:""})}0;
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
    ${t("var d{var};",{indent:4})}
    var r; 
    ${t("var f{var} = 0;",{indent:4})}
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
        ${t("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${t("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${t("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${t("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${t("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${t("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${t("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${t("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${t("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${ve(0)} - node.min_${ve(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${t("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${t("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${t("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${t("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${t("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${t("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${t("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${t("root.min_{var} = {var}min;",{indent:4})}
    ${t("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

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
        ${t("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${t("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${t("var min_{var} = node.min_{var};",{indent:8})}
        ${t("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${i(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${t("child.min_{var} = min_{var};",{indent:10})}
          ${t("child.max_{var} = max_{var};",{indent:10})}
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
            ${t("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${t("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
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

`;function i(f){let a=[],u=Array(f+1).join(" ");for(let v=0;v<e;++v)a.push(u+`if (${ve(v)} > max_${ve(v)}) {`),a.push(u+`  quadIdx = quadIdx + ${Math.pow(2,v)};`),a.push(u+`  min_${ve(v)} = max_${ve(v)};`),a.push(u+`  max_${ve(v)} = node.max_${ve(v)};`),a.push(u+"}");return a.join(`
`)}function o(){let f=Array(11).join(" "),a=[];for(let u=0;u<n;++u)a.push(f+`if (node.quad${u}) {`),a.push(f+`  queue[pushIdx] = node.quad${u};`),a.push(f+"  queueLength += 1;"),a.push(f+"  pushIdx += 1;"),a.push(f+"}");return a.join(`
`)}function s(f){let a=[];for(let u=0;u<n;++u)a.push(`${f}quad${u} = null;`);return a.join(`
`)}}function hn(e){let t=wt(e);return`
  function isSamePosition(point1, point2) {
    ${t("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${t("d{var} < 1e-8",{join:" && "})};
  }  
`}function dn(e){var t=Math.pow(2,e);return`
function setChild(node, idx, child) {
  ${n()}
}`;function n(){let r=[];for(let i=0;i<t;++i){let o=i===0?"  ":"  else ";r.push(`${o}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function vn(e){return`function getChild(node, idx) {
${t()}
  return null;
}`;function t(){let n=[],r=Math.pow(2,e);for(let i=0;i<r;++i)n.push(`  if (idx === ${i}) return node.quad${i};`);return n.join(`
`)}}function gn(e){let t=wt(e),n=Math.pow(2,e);var r=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${i("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${t("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${t("this.min_{var} = 0;",{indent:2})}
  ${t("this.max_{var} = 0;",{indent:2})}
}
`;return r;function i(o){let s=[];for(let f=0;f<n;++f)s.push(`${o}quad${f} = null;`);return s.join(`
`)}}function pn(){return`
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
`}var Xe={},yi={get exports(){return Xe},set exports(e){Xe=e}};yi.exports=xi;Xe.generateFunctionBody=yn;const mi=Se;function xi(e){let t=yn(e);return new Function("bodies","settings","random",t)}function yn(e){let t=mi(e);return`
  var boundingBox = {
    ${t("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${t("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${t("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${t("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${t("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${t("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${t("var max_{var} = -Infinity;",{indent:4})}
    ${t("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${t("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${t("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${t("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${t("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${t("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Ze={},wi={get exports(){return Ze},set exports(e){Ze=e}};const _i=Se;wi.exports=bi;Ze.generateCreateDragForceFunctionBody=mn;function bi(e){let t=mn(e);return new Function("options",t)}function mn(e){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${_i(e)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Je={},Ci={get exports(){return Je},set exports(e){Je=e}};const Ei=Se;Ci.exports=Ai;Je.generateCreateSpringForceFunctionBody=xn;function Ai(e){let t=xn(e);return new Function("options","random",t)}function xn(e){let t=Ei(e);return`
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
      ${t("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${t("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${t("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${t("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${t("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${t("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var et={},Ni={get exports(){return et},set exports(e){et=e}};const Mi=Se;Ni.exports=Si;et.generateIntegratorFunctionBody=wn;function Si(e){let t=wn(e);return new Function("bodies","timeStep","adaptiveTimeStepWeight",t)}function wn(e){let t=Mi(e);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${t("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${t("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${t("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${t("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${t("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${t("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${t("body.pos.{var} += d{var};",{indent:4})}

    ${t("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${t("t{var} * t{var}",{join:" + "})})/length;
`}var at,kt;function $i(){if(kt)return at;kt=1,at=e;function e(t,n,r,i){this.from=t,this.to=n,this.length=r,this.coefficient=i}return at}var st,Ot;function zi(){if(Ot)return st;Ot=1,st=e;function e(t,n){var r;if(t||(t={}),n){for(r in n)if(n.hasOwnProperty(r)){var i=t.hasOwnProperty(r),o=typeof n[r],s=!i||typeof t[r]!==o;s?t[r]=n[r]:o==="object"&&(t[r]=e(t[r],n[r]))}}return t}return st}var _t=function(t){Bi(t);var n=qi(t);return t.on=n.on,t.off=n.off,t.fire=n.fire,t};function qi(e){var t=Object.create(null);return{on:function(n,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var o=t[n];return o||(o=t[n]=[]),o.push({callback:r,ctx:i}),e},off:function(n,r){var i=typeof n>"u";if(i)return t=Object.create(null),e;if(t[n]){var o=typeof r!="function";if(o)delete t[n];else for(var s=t[n],f=0;f<s.length;++f)s[f].callback===r&&s.splice(f,1)}return e},fire:function(n){var r=t[n];if(!r)return e;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var o=0;o<r.length;++o){var s=r[o];s.callback.apply(s.ctx,i)}return e}}}function Bi(e){if(!e)throw new Error("Eventify cannot use falsy object as events subject");for(var t=["on","fire","off"],n=0;n<t.length;++n)if(e.hasOwnProperty(t[n]))throw new Error("Subject cannot be eventified, since it already has property '"+t[n]+"'")}var be={},Pi={get exports(){return be},set exports(e){be=e}},Lt;function Fi(){if(Lt)return be;Lt=1,Pi.exports=e,be.random=e,be.randomIterator=f;function e(a){var u=typeof a=="number"?a:+new Date;return new t(u)}function t(a){this.seed=a}t.prototype.next=s,t.prototype.nextDouble=o,t.prototype.uniform=o,t.prototype.gaussian=n;function n(){var a,u,v;do u=this.nextDouble()*2-1,v=this.nextDouble()*2-1,a=u*u+v*v;while(a>=1||a===0);return u*Math.sqrt(-2*Math.log(a)/a)}t.prototype.levy=r;function r(){var a=1.5,u=Math.pow(i(1+a)*Math.sin(Math.PI*a/2)/(i((1+a)/2)*a*Math.pow(2,(a-1)/2)),1/a);return this.gaussian()*u/Math.pow(Math.abs(this.gaussian()),1/a)}function i(a){return Math.sqrt(2*Math.PI/a)*Math.pow(1/Math.E*(a+1/(12*a-1/(10*a))),a)}function o(){var a=this.seed;return a=a+2127912214+(a<<12)&4294967295,a=(a^3345072700^a>>>19)&4294967295,a=a+374761393+(a<<5)&4294967295,a=(a+3550635116^a<<9)&4294967295,a=a+4251993797+(a<<3)&4294967295,a=(a^3042594569^a>>>16)&4294967295,this.seed=a,(a&268435455)/268435456}function s(a){return Math.floor(this.nextDouble()*a)}function f(a,u){var v=u||e();if(typeof v.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:g,shuffle:c};function c(){var m,d,b;for(m=a.length-1;m>0;--m)d=v.next(m+1),b=a[d],a[d]=a[m],a[m]=b;return a}function g(m){var d,b,w;for(d=a.length-1;d>0;--d)b=v.next(d+1),w=a[b],a[b]=a[d],a[d]=w,m(w);a.length&&m(a[0])}}return be}var _n=ji,Ii=Ne,ki=he,Oi=Xe,Li=Ze,Ti=Je,Ki=et,Tt={};function ji(e){var t=$i(),n=zi(),r=_t;if(e){if(e.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(e.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}e=n(e,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=Tt[e.dimensions];if(!i){var o=e.dimensions;i={Body:Ii(o,e.debug),createQuadTree:ki(o),createBounds:Oi(o),createDragForce:Li(o),createSpringForce:Ti(o),integrate:Ki(o)},Tt[o]=i}var s=i.Body,f=i.createQuadTree,a=i.createBounds,u=i.createDragForce,v=i.createSpringForce,c=i.integrate,g=p=>new s(p),m=Fi().random(42),d=[],b=[],w=f(e,m),h=a(d,e,m),A=v(e,m),_=u(e),N=0,C=[],S=new Map,L=0;V("nbody",K),V("spring",x);var T={bodies:d,quadTree:w,springs:b,settings:e,addForce:V,removeForce:$,getForces:q,step:function(){for(var p=0;p<C.length;++p)C[p](L);var E=c(d,e.timeStep,e.adaptiveTimeStepWeight);return L+=1,E},addBody:function(p){if(!p)throw new Error("Body is required");return d.push(p),p},addBodyAt:function(p){if(!p)throw new Error("Body position is required");var E=g(p);return d.push(E),E},removeBody:function(p){if(p){var E=d.indexOf(p);if(!(E<0))return d.splice(E,1),d.length===0&&h.reset(),!0}},addSpring:function(p,E,F,H){if(!p||!E)throw new Error("Cannot add null spring to force simulator");typeof F!="number"&&(F=-1);var Q=new t(p,E,F,H>=0?H:-1);return b.push(Q),Q},getTotalMovement:function(){return N},removeSpring:function(p){if(p){var E=b.indexOf(p);if(E>-1)return b.splice(E,1),!0}},getBestNewBodyPosition:function(p){return h.getBestNewPosition(p)},getBBox:R,getBoundingBox:R,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(p){return p!==void 0?(e.gravity=p,w.options({gravity:p}),this):e.gravity},theta:function(p){return p!==void 0?(e.theta=p,w.options({theta:p}),this):e.theta},random:m};return Ri(e,T),r(T),T;function R(){return h.update(),h.box}function V(p,E){if(S.has(p))throw new Error("Force "+p+" is already added");S.set(p,E),C.push(E)}function $(p){var E=C.indexOf(S.get(p));E<0||(C.splice(E,1),S.delete(p))}function q(){return S}function K(){if(d.length!==0){w.insertBodies(d);for(var p=d.length;p--;){var E=d[p];E.isPinned||(E.reset(),w.updateBodyForce(E),_.update(E))}}}function x(){for(var p=b.length;p--;)A.update(b[p])}}function Ri(e,t){for(var n in e)Di(e,t,n)}function Di(e,t,n){if(e.hasOwnProperty(n)&&typeof t[n]!="function"){var r=Number.isFinite(e[n]);r?t[n]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+n+" should be a valid number.");return e[n]=i,t}return e[n]}:t[n]=function(i){return i!==void 0?(e[n]=i,t):e[n]}}}li.exports=Ui;Ye.simulator=_n;var Hi=_t;function Ui(e,t){if(!e)throw new Error("Graph structure cannot be undefined");var n=t&&t.createSimulator||_n,r=n(t);if(Array.isArray(t))throw new Error("Physics settings is expected to be an object");var i=e.version>19?K:q;t&&typeof t.nodeMass=="function"&&(i=t.nodeMass);var o=new Map,s={},f=0,a=r.settings.springTransform||Vi;_(),w();var u=!1,v={step:function(){if(f===0)return c(!0),!0;var x=r.step();v.lastMove=x,v.fire("step");var p=x/f,E=p<=.01;return c(E),E},getNodePosition:function(x){return $(x).pos},setNodePosition:function(x){var p=$(x);p.setPosition.apply(p,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(x){var p=s[x];if(p)return{from:p.from.pos,to:p.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:g,pinNode:function(x,p){var E=$(x.id);E.isPinned=!!p},isNodePinned:function(x){return $(x.id).isPinned},dispose:function(){e.off("changed",A),v.fire("disposed")},getBody:b,getSpring:d,getForceVectorLength:m,simulator:r,graph:e,lastMove:0};return Hi(v),v;function c(x){u!==x&&(u=x,h(x))}function g(x){o.forEach(x)}function m(){var x=0,p=0;return g(function(E){x+=Math.abs(E.force.x),p+=Math.abs(E.force.y)}),Math.sqrt(x*x+p*p)}function d(x,p){var E;if(p===void 0)typeof x!="object"?E=x:E=x.id;else{var F=e.hasLink(x,p);if(!F)return;E=F.id}return s[E]}function b(x){return o.get(x)}function w(){e.on("changed",A)}function h(x){v.fire("stable",x)}function A(x){for(var p=0;p<x.length;++p){var E=x[p];E.changeType==="add"?(E.node&&N(E.node.id),E.link&&S(E.link)):E.changeType==="remove"&&(E.node&&C(E.node),E.link&&L(E.link))}f=e.getNodesCount()}function _(){f=0,e.forEachNode(function(x){N(x.id),f+=1}),e.forEachLink(S)}function N(x){var p=o.get(x);if(!p){var E=e.getNode(x);if(!E)throw new Error("initBody() was called with unknown node id");var F=E.position;if(!F){var H=T(E);F=r.getBestNewBodyPosition(H)}p=r.addBodyAt(F),p.id=x,o.set(x,p),R(x),V(E)&&(p.isPinned=!0)}}function C(x){var p=x.id,E=o.get(p);E&&(o.delete(p),r.removeBody(E))}function S(x){R(x.fromId),R(x.toId);var p=o.get(x.fromId),E=o.get(x.toId),F=r.addSpring(p,E,x.length);a(x,F),s[x.id]=F}function L(x){var p=s[x.id];if(p){var E=e.getNode(x.fromId),F=e.getNode(x.toId);E&&R(E.id),F&&R(F.id),delete s[x.id],r.removeSpring(p)}}function T(x){var p=[];if(!x.links)return p;for(var E=Math.min(x.links.length,2),F=0;F<E;++F){var H=x.links[F],Q=H.fromId!==x.id?o.get(H.fromId):o.get(H.toId);Q&&Q.pos&&p.push(Q)}return p}function R(x){var p=o.get(x);if(p.mass=i(x),Number.isNaN(p.mass))throw new Error("Node mass should be a number")}function V(x){return x&&(x.isPinned||x.data&&x.data.isPinned)}function $(x){var p=o.get(x);return p||(N(x),p=o.get(x)),p}function q(x){var p=e.getLinks(x);return p?1+p.length/3:1}function K(x){var p=e.getLinks(x);return p?1+p.size/3:1}}function Vi(){}var Qi=Gi,Wi=_t;function Gi(e){if(e=e||{},"uniqueLinkId"in e&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),e.multigraph=e.uniqueLinkId),e.multigraph===void 0&&(e.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var t=new Map,n=new Map,r={},i=0,o=e.multigraph?N:_,s=[],f=E,a=E,u=E,v=E,c={version:20,addNode:b,addLink:A,removeLink:T,removeNode:h,getNode:w,getNodeCount:C,getLinkCount:S,getEdgeCount:S,getLinksCount:S,getNodesCount:C,getLinks:L,forEachNode:Q,forEachLinkedNode:K,forEachLink:q,beginUpdate:u,endUpdate:v,clear:$,hasLink:V,hasNode:w,getLink:V};return Wi(c),g(),c;function g(){var z=c.on;c.on=O;function O(){return c.beginUpdate=u=F,c.endUpdate=v=H,f=m,a=d,c.on=z,z.apply(c,arguments)}}function m(z,O){s.push({link:z,changeType:O})}function d(z,O){s.push({node:z,changeType:O})}function b(z,O){if(z===void 0)throw new Error("Invalid node identifier");u();var j=w(z);return j?(j.data=O,a(j,"update")):(j=new Yi(z,O),a(j,"add")),t.set(z,j),v(),j}function w(z){return t.get(z)}function h(z){var O=w(z);if(!O)return!1;u();var j=O.links;return j&&(j.forEach(R),O.links=null),t.delete(z),a(O,"remove"),v(),!0}function A(z,O,j){u();var W=w(z)||b(z),J=w(O)||b(O),X=o(z,O,j),ie=n.has(X.id);return n.set(X.id,X),Kt(W,X),z!==O&&Kt(J,X),f(X,ie?"update":"add"),v(),X}function _(z,O,j){var W=Ue(z,O),J=n.get(W);return J?(J.data=j,J):new jt(z,O,j,W)}function N(z,O,j){var W=Ue(z,O),J=r.hasOwnProperty(W);if(J||V(z,O)){J||(r[W]=0);var X="@"+ ++r[W];W=Ue(z+X,O+X)}return new jt(z,O,j,W)}function C(){return t.size}function S(){return n.size}function L(z){var O=w(z);return O?O.links:null}function T(z,O){return O!==void 0&&(z=V(z,O)),R(z)}function R(z){if(!z||!n.get(z.id))return!1;u(),n.delete(z.id);var O=w(z.fromId),j=w(z.toId);return O&&O.links.delete(z),j&&j.links.delete(z),f(z,"remove"),v(),!0}function V(z,O){if(!(z===void 0||O===void 0))return n.get(Ue(z,O))}function $(){u(),Q(function(z){h(z.id)}),v()}function q(z){if(typeof z=="function")for(var O=n.values(),j=O.next();!j.done;){if(z(j.value))return!0;j=O.next()}}function K(z,O,j){var W=w(z);if(W&&W.links&&typeof O=="function")return j?p(W.links,z,O):x(W.links,z,O)}function x(z,O,j){for(var W,J=z.values(),X=J.next();!X.done;){var ie=X.value,$e=ie.fromId===O?ie.toId:ie.fromId;if(W=j(t.get($e),ie),W)return!0;X=J.next()}}function p(z,O,j){for(var W,J=z.values(),X=J.next();!X.done;){var ie=X.value;if(ie.fromId===O&&(W=j(t.get(ie.toId),ie),W))return!0;X=J.next()}}function E(){}function F(){i+=1}function H(){i-=1,i===0&&s.length>0&&(c.fire("changed",s),s.length=0)}function Q(z){if(typeof z!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+z);for(var O=t.values(),j=O.next();!j.done;){if(z(j.value))return!0;j=O.next()}}}function Yi(e,t){this.id=e,this.links=null,this.data=t}function Kt(e,t){e.links?e.links.add(t):e.links=new Set([t])}function jt(e,t,n,r){this.fromId=e,this.toId=t,this.data=n,this.id=r}function Ue(e,t){return e.toString()+"👉 "+t.toString()}let ge,Me,tt;const Xi=(e,t)=>{if(e.nodes.length===t.nodes.length&&e.links.length===t.links.length)return!0;console.log(e,t,"fdg-wasm layout not cached")},bn={matchesArg:Xi,onCacheMiss:()=>console.log("using cached fdg-wasm layout")},Zi=Qt.infinite(async e=>{const t=fi(e.nodes,3).force("charge",ci()).force("link",Wr(e.links).id(n=>n.id)).force("center",Zn());return t.on("tick",()=>{const n=e.nodes.flatMap(({x:r,y:i,z:o})=>[r,i,o].map(s=>s));ge=new Float32Array(n),Me&&ge&&Me(gt(ge,[ge.buffer])),tt!==t&&t.stop()}),()=>{tt=t,t.restart()}},bn),Ji=async(e,t)=>{console.log("using d3-force layout"),Me=t,(await Zi(e))()},eo=Qt.infinite(async e=>{console.log("setting up ngraph layout again");const t=Qi();e.nodes.forEach(i=>{t.addNode(i.id,i)}),e.links.forEach(i=>{t.addLink(i.source,i.target)});const n=Ye(t,{dimensions:3});for(let i of e.nodes)n.setNodePosition(i.id,i.x,i.y,i.z);n.on("step",()=>{const i=e.nodes.flatMap(({id:o})=>{const{x:s,y:f,z:a}=n.getNodePosition(o);return[s,f,a].map(u=>u)});ge=new Float32Array(i),Me&&ge&&Me(gt(ge,[ge.buffer]))});const r=()=>{n.step(),tt===n&&ke(r)};return r(),()=>{tt=n,r()}},bn),to=async(e,t)=>{console.log("using ngraph layout"),Me=t,(await eo(e))()};vt({useD3ForceSimulator:Ji,useNgraphForceSimulator:to});
