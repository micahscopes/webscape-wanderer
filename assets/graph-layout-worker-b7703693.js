const pn=Symbol("Comlink.proxy"),sr=Symbol("Comlink.endpoint"),ur=Symbol("Comlink.releaseProxy"),qt=Symbol("Comlink.thrown"),vn=t=>typeof t=="object"&&t!==null||typeof t=="function",fr={canHandle:t=>vn(t)&&t[pn],serialize(t){const{port1:e,port2:n}=new MessageChannel;return Lt(t,e),[n,[n]]},deserialize(t){return t.start(),dr(t)}},cr={canHandle:t=>vn(t)&&qt in t,serialize({value:t}){let e;return t instanceof Error?e={isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:e={isError:!1,value:t},[e,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.value}},yn=new Map([["proxy",fr],["throw",cr]]);function Lt(t,e=self){e.addEventListener("message",function n(r){if(!r||!r.data)return;const{id:i,type:o,path:a}=Object.assign({path:[]},r.data),u=(r.data.argumentList||[]).map(Ee);let s;try{const f=a.slice(0,-1).reduce((c,p)=>c[p],t),g=a.reduce((c,p)=>c[p],t);switch(o){case"GET":s=g;break;case"SET":f[a.slice(-1)[0]]=Ee(r.data.value),s=!0;break;case"APPLY":s=g.apply(f,u);break;case"CONSTRUCT":{const c=new g(...u);s=gr(c)}break;case"ENDPOINT":{const{port1:c,port2:p}=new MessageChannel;Lt(t,p),s=Ct(c,[c])}break;case"RELEASE":s=void 0;break;default:return}}catch(f){s={value:f,[qt]:0}}Promise.resolve(s).catch(f=>({value:f,[qt]:0})).then(f=>{const[g,c]=jt(f);e.postMessage(Object.assign(Object.assign({},g),{id:i}),c),o==="RELEASE"&&(e.removeEventListener("message",n),_n(e))})}),e.start&&e.start()}function lr(t){return t.constructor.name==="MessagePort"}function _n(t){lr(t)&&t.close()}function dr(t,e){return Bt(t,[],e)}function st(t){if(t)throw new Error("Proxy has been released and is not useable")}function Bt(t,e=[],n=function(){}){let r=!1;const i=new Proxy(n,{get(o,a){if(st(r),a===ur)return()=>ze(t,{type:"RELEASE",path:e.map(u=>u.toString())}).then(()=>{_n(t),r=!0});if(a==="then"){if(e.length===0)return{then:()=>i};const u=ze(t,{type:"GET",path:e.map(s=>s.toString())}).then(Ee);return u.then.bind(u)}return Bt(t,[...e,a])},set(o,a,u){st(r);const[s,f]=jt(u);return ze(t,{type:"SET",path:[...e,a].map(g=>g.toString()),value:s},f).then(Ee)},apply(o,a,u){st(r);const s=e[e.length-1];if(s===sr)return ze(t,{type:"ENDPOINT"}).then(Ee);if(s==="bind")return Bt(t,e.slice(0,-1));const[f,g]=Gt(u);return ze(t,{type:"APPLY",path:e.map(c=>c.toString()),argumentList:f},g).then(Ee)},construct(o,a){st(r);const[u,s]=Gt(a);return ze(t,{type:"CONSTRUCT",path:e.map(f=>f.toString()),argumentList:u},s).then(Ee)}});return i}function hr(t){return Array.prototype.concat.apply([],t)}function Gt(t){const e=t.map(jt);return[e.map(n=>n[0]),hr(e.map(n=>n[1]))]}const mn=new WeakMap;function Ct(t,e){return mn.set(t,e),t}function gr(t){return Object.assign(t,{[pn]:!0})}function jt(t){for(const[e,n]of yn)if(n.canHandle(t)){const[r,i]=n.serialize(t);return[{type:"HANDLER",name:e,value:r},i]}return[{type:"RAW",value:t},mn.get(t)||[]]}function Ee(t){switch(t.type){case"HANDLER":return yn.get(t.name).deserialize(t.value);case"RAW":return t.value}}function ze(t,e,n){return new Promise(r=>{const i=pr();t.addEventListener("message",function o(a){!a.data||!a.data.id||a.data.id!==i||(t.removeEventListener("message",o),r(a.data))}),t.start&&t.start(),t.postMessage(Object.assign({id:i},e),n)})}function pr(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}let P;const ye=new Array(128).fill(void 0);ye.push(void 0,null,!0,!1);function D(t){return ye[t]}const wn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});wn.decode();let Ue=null;function lt(){return(Ue===null||Ue.byteLength===0)&&(Ue=new Uint8Array(P.memory.buffer)),Ue}function qe(t,e){return wn.decode(lt().subarray(t,t+e))}let Xe=ye.length;function G(t){Xe===ye.length&&ye.push(ye.length+1);const e=Xe;return Xe=ye[e],ye[e]=t,e}let de=0;const dt=new TextEncoder("utf-8"),vr=typeof dt.encodeInto=="function"?function(t,e){return dt.encodeInto(t,e)}:function(t,e){const n=dt.encode(t);return e.set(n),{read:t.length,written:n.length}};function Ne(t,e,n){if(n===void 0){const u=dt.encode(t),s=e(u.length);return lt().subarray(s,s+u.length).set(u),de=u.length,s}let r=t.length,i=e(r);const o=lt();let a=0;for(;a<r;a++){const u=t.charCodeAt(a);if(u>127)break;o[i+a]=u}if(a!==r){a!==0&&(t=t.slice(a)),i=n(i,r,r=a+t.length*3);const u=lt().subarray(i+a,i+r),s=vr(t,u);a+=s.written}return de=a,i}let He=null;function Z(){return(He===null||He.byteLength===0)&&(He=new Int32Array(P.memory.buffer)),He}function Ke(t){return t==null}function yr(t){t<132||(ye[t]=Xe,Xe=t)}function oe(t){const e=D(t);return yr(t),e}let Ve=null;function _r(){return(Ve===null||Ve.byteLength===0)&&(Ve=new Float64Array(P.memory.buffer)),Ve}let We=null;function mr(){return(We===null||We.byteLength===0)&&(We=new BigInt64Array(P.memory.buffer)),We}function It(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const i=t.description;return i==null?"Symbol":`Symbol(${i})`}if(e=="function"){const i=t.name;return typeof i=="string"&&i.length>0?`Function(${i})`:"Function"}if(Array.isArray(t)){const i=t.length;let o="[";i>0&&(o+=It(t[0]));for(let a=1;a<i;a++)o+=", "+It(t[a]);return o+="]",o}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}let Qe=null;function wr(){return(Qe===null||Qe.byteLength===0)&&(Qe=new Float32Array(P.memory.buffer)),Qe}function br(t,e){const n=e(t.length*4);return wr().set(t,n/4),de=t.length,n}let Ge=null;function xr(){return(Ge===null||Ge.byteLength===0)&&(Ge=new Uint32Array(P.memory.buffer)),Ge}function Cr(t,e){const r=xr().subarray(t/4,t/4+e),i=[];for(let o=0;o<r.length;o++)i.push(oe(r[o]));return i}function Nt(t,e){try{return t.apply(this,e)}catch(n){P.__wbindgen_exn_store(G(n))}}class Tt{static __wrap(e){const n=Object.create(Tt.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();P.__wbg_forcegraphedge_free(e)}get source(){const e=P.forcegraphedge_source(this.ptr);return tt.__wrap(e)}get target(){const e=P.forcegraphedge_target(this.ptr);return tt.__wrap(e)}get metadata(){const e=P.forcegraphedge_metadata(this.ptr);return oe(e)}}class tt{static __wrap(e){const n=Object.create(tt.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();P.__wbg_forcegraphnode_free(e)}get name(){try{const r=P.__wbindgen_add_to_stack_pointer(-16);P.forcegraphnode_name(r,this.ptr);var e=Z()[r/4+0],n=Z()[r/4+1];return qe(e,n)}finally{P.__wbindgen_add_to_stack_pointer(16),P.__wbindgen_free(e,n)}}get label(){const e=P.forcegraphnode_label(this.ptr);return oe(e)}get location(){try{const i=P.__wbindgen_add_to_stack_pointer(-16);P.forcegraphnode_location(i,this.ptr);var e=Z()[i/4+0],n=Z()[i/4+1],r=Cr(e,n).slice();return P.__wbindgen_free(e,n*4),r}finally{P.__wbindgen_add_to_stack_pointer(16)}}get metadata(){const e=P.forcegraphnode_metadata(this.ptr);return oe(e)}}class gt{static __wrap(e){const n=Object.create(gt.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();P.__wbg_forcegraphsimulator_free(e)}constructor(){const e=P.forcegraphsimulator_new();return gt.__wrap(e)}set graph(e){try{const i=P.__wbindgen_add_to_stack_pointer(-16);P.forcegraphsimulator_set_graph(i,this.ptr,G(e));var n=Z()[i/4+0],r=Z()[i/4+1];if(r)throw oe(n)}finally{P.__wbindgen_add_to_stack_pointer(16)}}get graph(){try{const i=P.__wbindgen_add_to_stack_pointer(-16);P.forcegraphsimulator_graph(i,this.ptr);var e=Z()[i/4+0],n=Z()[i/4+1],r=Z()[i/4+2];if(r)throw oe(n);return oe(e)}finally{P.__wbindgen_add_to_stack_pointer(16)}}addNode(e,n){try{const a=P.__wbindgen_add_to_stack_pointer(-16),u=Ne(e,P.__wbindgen_malloc,P.__wbindgen_realloc),s=de;P.forcegraphsimulator_addNode(a,this.ptr,u,s,G(n));var r=Z()[a/4+0],i=Z()[a/4+1],o=Z()[a/4+2];if(o)throw oe(i);return r>>>0}finally{P.__wbindgen_add_to_stack_pointer(16)}}get nodes(){const e=P.forcegraphsimulator_nodes(this.ptr);return oe(e)}addEdge(e,n,r){try{const a=P.__wbindgen_add_to_stack_pointer(-16);P.forcegraphsimulator_addEdge(a,this.ptr,G(e),G(n),G(r));var i=Z()[a/4+0],o=Z()[a/4+1];if(o)throw oe(i)}finally{P.__wbindgen_add_to_stack_pointer(16)}}get edges(){const e=P.forcegraphsimulator_edges(this.ptr);return oe(e)}resetNodePlacement(){P.forcegraphsimulator_resetNodePlacement(this.ptr)}setNodeLocation(e,n,r,i){try{const u=P.__wbindgen_add_to_stack_pointer(-16),s=Ne(e,P.__wbindgen_malloc,P.__wbindgen_realloc),f=de;P.forcegraphsimulator_setNodeLocation(u,this.ptr,s,f,n,r,i);var o=Z()[u/4+0],a=Z()[u/4+1];if(a)throw oe(o)}finally{P.__wbindgen_add_to_stack_pointer(16)}}setDimensions(e){P.forcegraphsimulator_setDimensions(this.ptr,e)}find(e,n){const r=br(e,P.__wbindgen_malloc),i=de,o=P.forcegraphsimulator_find(this.ptr,r,i,n);return oe(o)}nodeInfo(e){const n=P.forcegraphsimulator_nodeInfo(this.ptr,G(e));return oe(n)}update(e){P.forcegraphsimulator_update(this.ptr,e)}locations_ptr(){return P.forcegraphsimulator_locations_ptr(this.ptr)}source_locations_ptr(){return P.forcegraphsimulator_source_locations_ptr(this.ptr)}target_locations_as_ptr(){return P.forcegraphsimulator_target_locations_as_ptr(this.ptr)}}async function Ar(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function Er(){const t={};return t.wbg={},t.wbg.__wbindgen_is_string=function(e){return typeof D(e)=="string"},t.wbg.__wbindgen_json_parse=function(e,n){const r=JSON.parse(qe(e,n));return G(r)},t.wbg.__wbindgen_json_serialize=function(e,n){const r=D(n),i=JSON.stringify(r===void 0?null:r),o=Ne(i,P.__wbindgen_malloc,P.__wbindgen_realloc),a=de;Z()[e/4+1]=a,Z()[e/4+0]=o},t.wbg.__wbindgen_object_clone_ref=function(e){const n=D(e);return G(n)},t.wbg.__wbindgen_string_get=function(e,n){const r=D(n),i=typeof r=="string"?r:void 0;var o=Ke(i)?0:Ne(i,P.__wbindgen_malloc,P.__wbindgen_realloc),a=de;Z()[e/4+1]=a,Z()[e/4+0]=o},t.wbg.__wbindgen_object_drop_ref=function(e){oe(e)},t.wbg.__wbindgen_error_new=function(e,n){const r=new Error(qe(e,n));return G(r)},t.wbg.__wbg_forcegraphedge_new=function(e){const n=Tt.__wrap(e);return G(n)},t.wbg.__wbg_forcegraphnode_new=function(e){const n=tt.__wrap(e);return G(n)},t.wbg.__wbindgen_string_new=function(e,n){const r=qe(e,n);return G(r)},t.wbg.__wbindgen_number_get=function(e,n){const r=D(n),i=typeof r=="number"?r:void 0;_r()[e/8+1]=Ke(i)?0:i,Z()[e/4+0]=!Ke(i)},t.wbg.__wbindgen_number_new=function(e){return G(e)},t.wbg.__wbindgen_boolean_get=function(e){const n=D(e);return typeof n=="boolean"?n?1:0:2},t.wbg.__wbindgen_is_bigint=function(e){return typeof D(e)=="bigint"},t.wbg.__wbindgen_bigint_from_i64=function(e){return G(e)},t.wbg.__wbindgen_jsval_eq=function(e,n){return D(e)===D(n)},t.wbg.__wbindgen_is_object=function(e){const n=D(e);return typeof n=="object"&&n!==null},t.wbg.__wbindgen_in=function(e,n){return D(e)in D(n)},t.wbg.__wbindgen_bigint_from_u64=function(e){const n=BigInt.asUintN(64,e);return G(n)},t.wbg.__wbg_new_abda76e883ba8a5f=function(){const e=new Error;return G(e)},t.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const r=D(n).stack,i=Ne(r,P.__wbindgen_malloc,P.__wbindgen_realloc),o=de;Z()[e/4+1]=o,Z()[e/4+0]=i},t.wbg.__wbg_error_f851667af71bcfc6=function(e,n){try{console.error(qe(e,n))}finally{P.__wbindgen_free(e,n)}},t.wbg.__wbindgen_jsval_loose_eq=function(e,n){return D(e)==D(n)},t.wbg.__wbg_String_91fba7ded13ba54c=function(e,n){const r=String(D(n)),i=Ne(r,P.__wbindgen_malloc,P.__wbindgen_realloc),o=de;Z()[e/4+1]=o,Z()[e/4+0]=i},t.wbg.__wbg_set_20cbc34131e76824=function(e,n,r){D(e)[oe(n)]=oe(r)},t.wbg.__wbg_get_27fe3dac1c4d0224=function(e,n){const r=D(e)[n>>>0];return G(r)},t.wbg.__wbg_length_e498fbc24f9c1d4f=function(e){return D(e).length},t.wbg.__wbg_new_b525de17f44a8943=function(){const e=new Array;return G(e)},t.wbg.__wbindgen_is_function=function(e){return typeof D(e)=="function"},t.wbg.__wbg_new_f841cc6f2098f4b5=function(){return G(new Map)},t.wbg.__wbg_next_b7d530c04fd8b217=function(e){const n=D(e).next;return G(n)},t.wbg.__wbg_next_88560ec06a094dea=function(){return Nt(function(e){const n=D(e).next();return G(n)},arguments)},t.wbg.__wbg_done_1ebec03bbd919843=function(e){return D(e).done},t.wbg.__wbg_value_6ac8da5cc5b3efda=function(e){const n=D(e).value;return G(n)},t.wbg.__wbg_iterator_55f114446221aa5a=function(){return G(Symbol.iterator)},t.wbg.__wbg_get_baf4855f9a986186=function(){return Nt(function(e,n){const r=Reflect.get(D(e),D(n));return G(r)},arguments)},t.wbg.__wbg_call_95d1ea488d03e4e8=function(){return Nt(function(e,n){const r=D(e).call(D(n));return G(r)},arguments)},t.wbg.__wbg_new_f9876326328f45ed=function(){const e=new Object;return G(e)},t.wbg.__wbg_set_17224bc548dd1d7b=function(e,n,r){D(e)[n>>>0]=oe(r)},t.wbg.__wbg_isArray_39d28997bf6b96b4=function(e){return Array.isArray(D(e))},t.wbg.__wbg_push_49c286f04dd3bf59=function(e,n){return D(e).push(D(n))},t.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(e){let n;try{n=D(e)instanceof ArrayBuffer}catch{n=!1}return n},t.wbg.__wbg_set_388c4c6422704173=function(e,n,r){const i=D(e).set(D(n),D(r));return G(i)},t.wbg.__wbg_isSafeInteger_8c4789029e885159=function(e){return Number.isSafeInteger(D(e))},t.wbg.__wbg_entries_4e1315b774245952=function(e){const n=Object.entries(D(e));return G(n)},t.wbg.__wbg_buffer_cf65c07de34b9a08=function(e){const n=D(e).buffer;return G(n)},t.wbg.__wbg_new_537b7341ce90bb31=function(e){const n=new Uint8Array(D(e));return G(n)},t.wbg.__wbg_set_17499e8aa4003ebd=function(e,n,r){D(e).set(D(n),r>>>0)},t.wbg.__wbg_length_27a2afe8ab42b09f=function(e){return D(e).length},t.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(e){let n;try{n=D(e)instanceof Uint8Array}catch{n=!1}return n},t.wbg.__wbindgen_bigint_get_as_i64=function(e,n){const r=D(n),i=typeof r=="bigint"?r:void 0;mr()[e/8+1]=Ke(i)?BigInt(0):i,Z()[e/4+0]=!Ke(i)},t.wbg.__wbindgen_debug_string=function(e,n){const r=It(D(n)),i=Ne(r,P.__wbindgen_malloc,P.__wbindgen_realloc),o=de;Z()[e/4+1]=o,Z()[e/4+0]=i},t.wbg.__wbindgen_throw=function(e,n){throw new Error(qe(e,n))},t.wbg.__wbindgen_memory=function(){const e=P.memory;return G(e)},t}function Nr(t,e){return P=t.exports,bn.__wbindgen_wasm_module=e,We=null,Qe=null,Ve=null,He=null,Ge=null,Ue=null,P.__wbindgen_start(),P}async function bn(t){typeof t>"u"&&(t=new URL("/dat-garden-visualization/assets/fdg-wasm_bg-4a12246e.wasm",self.location));const e=Er();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await Ar(await t,e);return Nr(n,r)}var it=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Fe={},Mr={get exports(){return Fe},set exports(t){Fe=t}},Ft={},ut={get exports(){return Ft},set exports(t){Ft=t}};(function(){var t,e,n,r,i,o;typeof performance<"u"&&performance!==null&&performance.now?ut.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(ut.exports=function(){return(t()-i)/1e6},e=process.hrtime,t=function(){var a;return a=e(),a[0]*1e9+a[1]},r=t(),o=process.uptime()*1e9,i=r-o):Date.now?(ut.exports=function(){return Date.now()-n},n=Date.now()):(ut.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(it);var Sr=Ft,_e=typeof window>"u"?it:window,ft=["moz","webkit"],Ie="AnimationFrame",Pe=_e["request"+Ie],nt=_e["cancel"+Ie]||_e["cancelRequest"+Ie];for(var Re=0;!Pe&&Re<ft.length;Re++)Pe=_e[ft[Re]+"Request"+Ie],nt=_e[ft[Re]+"Cancel"+Ie]||_e[ft[Re]+"CancelRequest"+Ie];if(!Pe||!nt){var Mt=0,Yt=0,Ae=[],$r=1e3/60;Pe=function(t){if(Ae.length===0){var e=Sr(),n=Math.max(0,$r-(e-Mt));Mt=n+e,setTimeout(function(){var r=Ae.slice(0);Ae.length=0;for(var i=0;i<r.length;i++)if(!r[i].cancelled)try{r[i].callback(Mt)}catch(o){setTimeout(function(){throw o},0)}},Math.round(n))}return Ae.push({handle:++Yt,callback:t,cancelled:!1}),Yt},nt=function(t){for(var e=0;e<Ae.length;e++)Ae[e].handle===t&&(Ae[e].cancelled=!0)}}Mr.exports=function(t){return Pe.call(_e,t)};Fe.cancel=function(){nt.apply(_e,arguments)};Fe.polyfill=function(t){t||(t=_e),t.requestAnimationFrame=Pe,t.cancelAnimationFrame=nt};var Pt={},zr={get exports(){return Pt},set exports(t){Pt=t}},pt={},qr={get exports(){return pt},set exports(t){pt=t}},Jt;function Br(){return Jt||(Jt=1,function(t,e){(function(n,r){t.exports=r()})(it,function(){var n={isEqual:!0,isMatchingKey:!0,isPromise:!0,maxSize:!0,onCacheAdd:!0,onCacheChange:!0,onCacheHit:!0,transformKey:!0},r=Array.prototype.slice;function i(c){var p=c.length;return p?p===1?[c[0]]:p===2?[c[0],c[1]]:p===3?[c[0],c[1],c[2]]:r.call(c,0):[]}function o(c){var p={};for(var _ in c)n[_]||(p[_]=c[_]);return p}function a(c){return typeof c=="function"&&c.isMemoized}function u(c,p){return c===p||c!==c&&p!==p}function s(c,p){var _={};for(var h in c)_[h]=c[h];for(var h in p)_[h]=p[h];return _}var f=function(){function c(p){this.keys=[],this.values=[],this.options=p;var _=typeof p.isMatchingKey=="function";_?this.getKeyIndex=this._getKeyIndexFromMatchingKey:p.maxSize>1?this.getKeyIndex=this._getKeyIndexForMany:this.getKeyIndex=this._getKeyIndexForSingle,this.canTransformKey=typeof p.transformKey=="function",this.shouldCloneArguments=this.canTransformKey||_,this.shouldUpdateOnAdd=typeof p.onCacheAdd=="function",this.shouldUpdateOnChange=typeof p.onCacheChange=="function",this.shouldUpdateOnHit=typeof p.onCacheHit=="function"}return Object.defineProperty(c.prototype,"size",{get:function(){return this.keys.length},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"snapshot",{get:function(){return{keys:i(this.keys),size:this.size,values:i(this.values)}},enumerable:!1,configurable:!0}),c.prototype._getKeyIndexFromMatchingKey=function(p){var _=this.options,h=_.isMatchingKey,x=_.maxSize,w=this.keys,d=w.length;if(!d)return-1;if(h(w[0],p))return 0;if(x>1){for(var E=1;E<d;E++)if(h(w[E],p))return E}return-1},c.prototype._getKeyIndexForMany=function(p){var _=this.options.isEqual,h=this.keys,x=h.length;if(!x)return-1;if(x===1)return this._getKeyIndexForSingle(p);var w=p.length,d,E;if(w>1){for(var b=0;b<x;b++)if(d=h[b],d.length===w){for(E=0;E<w&&_(d[E],p[E]);E++);if(E===w)return b}}else for(var b=0;b<x;b++)if(d=h[b],d.length===w&&_(d[0],p[0]))return b;return-1},c.prototype._getKeyIndexForSingle=function(p){var _=this.keys;if(!_.length)return-1;var h=_[0],x=h.length;if(p.length!==x)return-1;var w=this.options.isEqual;if(x>1){for(var d=0;d<x;d++)if(!w(h[d],p[d]))return-1;return 0}return w(h[0],p[0])?0:-1},c.prototype.orderByLru=function(p,_,h){for(var x=this.keys,w=this.values,d=x.length,E=h;E--;)x[E+1]=x[E],w[E+1]=w[E];x[0]=p,w[0]=_;var b=this.options.maxSize;d===b&&h===d?(x.pop(),w.pop()):h>=b&&(x.length=w.length=b)},c.prototype.updateAsyncCache=function(p){var _=this,h=this.options,x=h.onCacheChange,w=h.onCacheHit,d=this.keys[0],E=this.values[0];this.values[0]=E.then(function(b){return _.shouldUpdateOnHit&&w(_,_.options,p),_.shouldUpdateOnChange&&x(_,_.options,p),b},function(b){var N=_.getKeyIndex(d);throw N!==-1&&(_.keys.splice(N,1),_.values.splice(N,1)),b})},c}();function g(c,p){if(p===void 0&&(p={}),a(c))return g(c.fn,s(c.options,p));if(typeof c!="function")throw new TypeError("You must pass a function to `memoize`.");var _=p.isEqual,h=_===void 0?u:_,x=p.isMatchingKey,w=p.isPromise,d=w===void 0?!1:w,E=p.maxSize,b=E===void 0?1:E,N=p.onCacheAdd,C=p.onCacheChange,S=p.onCacheHit,j=p.transformKey,T=s({isEqual:h,isMatchingKey:x,isPromise:d,maxSize:b,onCacheAdd:N,onCacheChange:C,onCacheHit:S,transformKey:j},o(p)),U=new f(T),Q=U.keys,$=U.values,q=U.canTransformKey,K=U.shouldCloneArguments,m=U.shouldUpdateOnAdd,v=U.shouldUpdateOnChange,A=U.shouldUpdateOnHit,F=function(){var V=K?i(arguments):arguments;q&&(V=j(V));var Y=Q.length?U.getKeyIndex(V):-1;if(Y!==-1)A&&S(U,T,F),Y&&(U.orderByLru(Q[Y],$[Y],Y),v&&C(U,T,F));else{var z=c.apply(this,arguments),L=K?V:i(arguments);U.orderByLru(L,z,Q.length),d&&U.updateAsyncCache(F),m&&N(U,T,F),v&&C(U,T,F)}return $[0]};return F.cache=U,F.fn=c,F.isMemoized=!0,F.options=T,F}return g})}(qr)),pt}var Ze={},Ir={get exports(){return Ze},set exports(t){Ze=t}},Xt;function Fr(){return Xt||(Xt=1,function(t,e){(function(n,r){r(e)})(it,function(n){var r=typeof WeakMap=="function",i=Object.keys;function o($,q){return $===q||$!==$&&q!==q}function a($){return $.constructor===Object||$.constructor==null}function u($){return!!$&&typeof $.then=="function"}function s($){return!!($&&$.$$typeof)}function f(){var $=[];return{delete:function(q){for(var K=0;K<$.length;++K)if($[K][0]===q){$.splice(K,1);return}},get:function(q){for(var K=0;K<$.length;++K)if($[K][0]===q)return $[K][1]},set:function(q,K){for(var m=0;m<$.length;++m)if($[m][0]===q){$[m][1]=K;return}$.push([q,K])}}}var g=function($){return $?function(){return new WeakMap}:f}(r);function c($){return function(K){var m=$||K;return function(A,F,V,Y,z,L,R){R===void 0&&(R=g());var J=!!A&&typeof A=="object",re=!!F&&typeof F=="object";if(J!==re)return!1;if(!J&&!re)return m(A,F,R);var te=R.get(A);if(te&&R.get(F))return te===F;R.set(A,F),R.set(F,A);var fe=m(A,F,R);return R.delete(A),R.delete(F),fe}}}function p($,q,K,m){var v=$.length;if(q.length!==v)return!1;for(;v-- >0;)if(!K($[v],q[v],v,v,$,q,m))return!1;return!0}function _($,q,K,m){var v=$.size===q.size;if(v&&$.size){var A={},F=0;$.forEach(function(V,Y){if(v){var z=!1,L=0;q.forEach(function(R,J){!z&&!A[L]&&(z=K(Y,J,F,L,$,q,m)&&K(V,R,Y,J,$,q,m),z&&(A[L]=!0)),L++}),F++,v=z}})}return v}var h="_owner",x=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function w($,q,K,m){var v=i($),A=v.length;if(i(q).length!==A)return!1;if(A)for(var F=void 0;A-- >0;){if(F=v[A],F===h){var V=s($),Y=s(q);if((V||Y)&&V!==Y)return!1}if(!x(q,F)||!K($[F],q[F],F,F,$,q,m))return!1}return!0}var d=function(){return/foo/g.flags==="g"?function(q,K){return q.source===K.source&&q.flags===K.flags}:function(q,K){return q.source===K.source&&q.global===K.global&&q.ignoreCase===K.ignoreCase&&q.multiline===K.multiline&&q.unicode===K.unicode&&q.sticky===K.sticky&&q.lastIndex===K.lastIndex}}();function E($,q,K,m){var v=$.size===q.size;if(v&&$.size){var A={};$.forEach(function(F,V){if(v){var Y=!1,z=0;q.forEach(function(L,R){!Y&&!A[z]&&(Y=K(F,L,V,R,$,q,m),Y&&(A[z]=!0)),z++}),v=Y}})}return v}var b=typeof Map=="function",N=typeof Set=="function",C=Object.prototype.valueOf;function S($){var q=typeof $=="function"?$(K):function(m,v,A,F,V,Y,z){return K(m,v,z)};function K(m,v,A){if(m===v)return!0;if(m&&v&&typeof m=="object"&&typeof v=="object"){if(a(m)&&a(v))return w(m,v,q,A);var F=Array.isArray(m),V=Array.isArray(v);return F||V?F===V&&p(m,v,q,A):(F=m instanceof Date,V=v instanceof Date,F||V?F===V&&o(m.getTime(),v.getTime()):(F=m instanceof RegExp,V=v instanceof RegExp,F||V?F===V&&d(m,v):u(m)||u(v)?m===v:b&&(F=m instanceof Map,V=v instanceof Map,F||V)?F===V&&_(m,v,q,A):N&&(F=m instanceof Set,V=v instanceof Set,F||V)?F===V&&E(m,v,q,A):m.valueOf!==C||v.valueOf!==C?o(m.valueOf(),v.valueOf()):w(m,v,q,A)))}return m!==m&&v!==v}return K}var j=S(),T=S(function(){return o}),U=S(c()),Q=S(c(o));n.circularDeepEqual=U,n.circularShallowEqual=Q,n.createCustomEqual=S,n.deepEqual=j,n.sameValueZeroEqual=o,n.shallowEqual=T,Object.defineProperty(n,"__esModule",{value:!0})})}(Ir,Ze)),Ze}(function(t,e){(function(n,r){t.exports=r(Br(),Fr())})(it,function(n,r){function i(){return i=Object.assign?Object.assign.bind():function(l){for(var y=1;y<arguments.length;y++){var I=arguments[y];for(var M in I)Object.prototype.hasOwnProperty.call(I,M)&&(l[M]=I[M])}return l},i.apply(this,arguments)}function o(l,y){if(l==null)return{};var I={},M=Object.keys(l),k,B;for(B=0;B<M.length;B++)k=M[B],!(y.indexOf(k)>=0)&&(I[k]=l[k]);return I}var a={isDeepEqual:!1,isPromise:!1,isReact:!1,isSerialized:!1,isShallowEqual:!1,matchesArg:void 0,matchesKey:void 0,maxAge:void 0,maxArgs:void 0,maxSize:1,onExpire:void 0,profileName:void 0,serializer:void 0,updateCacheForKey:void 0,transformArgs:void 0,updateExpire:!1};function u(){for(var l=arguments.length,y=new Array(l),I=0;I<l;I++)y[I]=arguments[I];return y.reduce(function(M,k){if(typeof M=="function")return typeof k=="function"?function(){M.apply(this,arguments),k.apply(this,arguments)}:M;if(typeof k=="function")return k})}function s(){for(var l=arguments.length,y=new Array(l),I=0;I<l;I++)y[I]=arguments[I];return y.reduce(function(M,k){if(typeof M=="function")return typeof k=="function"?function(){return M(k.apply(this,arguments))}:M;if(typeof k=="function")return k})}function f(l,y){for(var I=0;I<l.length;I++)if(l[I].key===y)return I;return-1}function g(l,y){var I=typeof y=="function"?y:function(M,k){for(var B=0;B<k.length;B++)if(!l(M[B],k[B]))return!1;return!0};return function(M,k){for(var B=0;B<M.length;B++)if(M[B].length===k.length&&I(M[B],k))return B;return-1}}function c(l,y){return!y||y===a?l:i({},l,y,{onCacheAdd:u(l.onCacheAdd,y.onCacheAdd),onCacheChange:u(l.onCacheChange,y.onCacheChange),onCacheHit:u(l.onCacheHit,y.onCacheHit),transformArgs:s(l.transformArgs,y.transformArgs)})}function p(l){return typeof l=="function"&&l.isMoized}function _(l,y,I){try{var M=I||y||"anonymous";Object.defineProperty(l,"name",{configurable:!0,enumerable:!1,value:"moized("+M+")",writable:!0})}catch{}}function h(l,y,I){var M=f(l,y);M!==-1&&(clearTimeout(l[M].timeoutId),I&&l.splice(M,1))}function x(l,y){var I=setTimeout(l,y);return typeof I.unref=="function"&&I.unref(),I}function w(l,y,I,M){var k=y.maxAge;return function B(O,W,ne){var X=O.keys[0];if(f(l,X)===-1){var ie=function(){var ge=g(I,M),pe=ge(O.keys,X),Se=O.values[pe];~pe&&(O.keys.splice(pe,1),O.values.splice(pe,1),typeof y.onCacheChange=="function"&&y.onCacheChange(O,W,ne)),h(l,X,!0),typeof y.onExpire=="function"&&y.onExpire(X)===!1&&(O.keys.unshift(X),O.values.unshift(Se),B(O,W,ne),typeof y.onCacheChange=="function"&&y.onCacheChange(O,W,ne))};l.push({expirationMethod:ie,key:X,timeoutId:x(ie,k)})}}}function d(l,y){return function(M){var k=M.keys[0],B=f(l,k);~B&&(h(l,k,!1),l[B].timeoutId=x(l[B].expirationMethod,y.maxAge))}}function E(l,y,I,M){var k=typeof y.maxAge=="number"&&isFinite(y.maxAge)?w(l,y,I,M):void 0;return{onCacheAdd:k,onCacheHit:k&&y.updateExpire?d(l,y):void 0}}var b={anonymousProfileNameCounter:1,isCollectingStats:!1,profiles:{}},N=!1;function C(l){l?delete b.profiles[l]:b.profiles={}}function S(l){l===void 0&&(l=!0),b.isCollectingStats=l}function j(l){var y=l.profileName;return function(){y&&!b.profiles[y]&&(b.profiles[y]={calls:0,hits:0}),b.profiles[y].calls++}}function T(l){return function(){var y=b.profiles,I=l.profileName;y[I]||(y[I]={calls:0,hits:0}),y[I].calls++,y[I].hits++}}function U(l){return l.displayName||l.name||"Anonymous "+b.anonymousProfileNameCounter++}function Q(l,y){return l?(y/l*100).toFixed(4)+"%":"0.0000%"}function $(l){!b.isCollectingStats&&!N&&(console.warn('Stats are not currently being collected, please run "collectStats" to enable them.'),N=!0);var y=b.profiles;if(l){if(!y[l])return{calls:0,hits:0,usage:"0.0000%"};var I=y[l];return i({},I,{usage:Q(I.calls,I.hits)})}var M=Object.keys(b.profiles).reduce(function(k,B){return k.calls+=y[B].calls,k.hits+=y[B].hits,k},{calls:0,hits:0});return i({},M,{profiles:Object.keys(y).reduce(function(k,B){return k[B]=$(B),k},{}),usage:Q(M.calls,M.hits)})}function q(l){return b.isCollectingStats?{onCacheAdd:j(l),onCacheHit:T(l)}:{}}var K={arguments:!0,callee:!0,caller:!0,constructor:!0,length:!0,name:!0,prototype:!0};function m(l,y,I){I===void 0&&(I=[]),Object.getOwnPropertyNames(l).forEach(function(M){if(!K[M]&&I.indexOf(M)===-1){var k=Object.getOwnPropertyDescriptor(l,M);k.get||k.set?Object.defineProperty(y,M,k):y[M]=l[M]}})}function v(l,y){var I=y.expirations,M=l.options,k=g(M.isEqual,M.isMatchingKey),B=l;B.clear=function(){var O=B._microMemoizeOptions.onCacheChange,W=B.cache;return W.keys.length=0,W.values.length=0,O&&O(W,B.options,B),!0},B.clearStats=function(){C(B.options.profileName)},B.get=function(O){var W=B._microMemoizeOptions.transformKey,ne=B.cache,X=W?W(O):O,ie=k(ne.keys,X);return ie!==-1?B.apply(this,O):void 0},B.getStats=function(){return $(B.options.profileName)},B.has=function(O){var W=B._microMemoizeOptions.transformKey,ne=W?W(O):O;return k(B.cache.keys,ne)!==-1},B.keys=function(){return B.cacheSnapshot.keys},B.remove=function(O){var W=B._microMemoizeOptions,ne=W.onCacheChange,X=W.transformKey,ie=B.cache,he=k(ie.keys,X?X(O):O);if(he===-1)return!1;var ge=ie.keys[he];return ie.keys.splice(he,1),ie.values.splice(he,1),ne&&ne(ie,B.options,B),h(I,ge,!0),!0},B.set=function(O,W){var ne=B._microMemoizeOptions,X=B.cache,ie=B.options,he=ne.onCacheAdd,ge=ne.onCacheChange,pe=ne.transformKey,Se=pe?pe(O):O,xe=k(X.keys,Se);if(xe===-1){var $e=ie.maxSize-1;X.size>$e&&(X.keys.length=$e,X.values.length=$e),X.keys.unshift(Se),X.values.unshift(W),ie.isPromise&&X.updateAsyncCache(B),he&&he(X,ie,B),ge&&ge(X,ie,B)}else{var ot=X.keys[xe];X.values[xe]=W,xe>0&&X.orderByLru(ot,W,xe),ie.isPromise&&X.updateAsyncCache(B),typeof ge=="function"&&ge(X,ie,B)}},B.values=function(){return B.cacheSnapshot.values}}function A(l,y){var I=y.expirations,M=y.options,k=y.originalFunction,B=l.options;Object.defineProperties(l,{_microMemoizeOptions:{configurable:!0,get:function(){return B}},cacheSnapshot:{configurable:!0,get:function(){var ne=l.cache;return{keys:ne.keys.slice(0),size:ne.size,values:ne.values.slice(0)}}},expirations:{configurable:!0,get:function(){return I}},expirationsSnapshot:{configurable:!0,get:function(){return I.slice(0)}},isMoized:{configurable:!0,get:function(){return!0}},options:{configurable:!0,get:function(){return M}},originalFunction:{configurable:!0,get:function(){return k}}});var O=l;m(k,O)}function F(l,y){return v(l,y),A(l,y),l}var V=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Y(l,y,I){var M=l(i({maxArgs:2,isShallowEqual:!0},I,{isReact:!1}));y.displayName||(y.displayName=y.name||"Component");function k(B,O,W){this.props=B,this.context=O,this.updater=W,this.MoizedComponent=M(y)}return k.prototype.isReactComponent={},k.prototype.render=function(){return{$$typeof:V,type:this.MoizedComponent,props:this.props,ref:null,key:null,_owner:null}},m(y,k,["contextType","contextTypes"]),k.displayName="Moized("+(y.displayName||y.name||"Component")+")",_(k,y.name,I.profileName),k}function z(l){return function(y){if(l>=y.length)return y;if(l===0)return[];if(l===1)return[y[0]];if(l===2)return[y[0],y[1]];if(l===3)return[y[0],y[1],y[2]];for(var I=[],M=0;M<l;M++)I[M]=y[M];return I}}function L(l,y){for(var I=l.length,M=0;M<I;++M)if(l[M]===y)return M+1;return 0}function R(){var l=[],y=[];return function(M,k){var B=typeof k;if(B==="function"||B==="symbol")return k.toString();if(typeof k=="object"){if(l.length){var O=L(l,this);O===0?l[l.length]=this:(l.splice(O),y.splice(O)),y[y.length]=M;var W=L(l,k);if(W!==0)return"[ref="+(y.slice(0,W).join(".")||".")+"]"}else l[0]=k,y[0]=M;return k}return""+k}}function J(l){var y=typeof l;return l&&(y==="object"||y==="function")?JSON.stringify(l,R()):l}function re(l){for(var y="|",I=0;I<l.length;I++)y+=J(l[I])+"|";return[y]}function te(l){return typeof l.serializer=="function"?l.serializer:re}function fe(l,y){return l[0]===y[0]}function Te(l){if(typeof l=="function")return function(y,I,M){return l(M.cache,M.options,M)}}function Gn(l){return l.matchesArg||l.isDeepEqual&&r.deepEqual||l.isShallowEqual&&r.shallowEqual||r.sameValueZeroEqual}function Yn(l){return l.matchesKey||l.isSerialized&&fe||void 0}function Jn(l){return s(l.isSerialized&&te(l),typeof l.transformArgs=="function"&&l.transformArgs,typeof l.maxArgs=="number"&&z(l.maxArgs))}function Xn(l){var y=l.options.updateCacheForKey,I=function(){for(var k=arguments.length,B=new Array(k),O=0;O<k;O++)B[O]=arguments[O];if(!y(B))return l.apply(this,B);var W=l.fn.apply(this,B);return l.set(B,W),W};return m(l,I),I}var Zn=["matchesArg","isDeepEqual","isPromise","isReact","isSerialized","isShallowEqual","matchesKey","maxAge","maxArgs","maxSize","onCacheAdd","onCacheChange","onCacheHit","onExpire","profileName","serializer","updateCacheForKey","transformArgs","updateExpire"],H=function l(y,I){var M=I||a;if(p(y)){var k=y.originalFunction,B=c(y.options,M);return l(k,B)}if(typeof y=="object")return function(Et,ir){if(typeof Et=="function"){var or=c(y,ir);return l(Et,or)}var ar=c(y,Et);return l(ar)};if(M.isReact)return Y(l,y,M);var O=i({},a,M,{maxAge:typeof M.maxAge=="number"&&M.maxAge>=0?M.maxAge:a.maxAge,maxArgs:typeof M.maxArgs=="number"&&M.maxArgs>=0?M.maxArgs:a.maxArgs,maxSize:typeof M.maxSize=="number"&&M.maxSize>=0?M.maxSize:a.maxSize,profileName:M.profileName||U(y)}),W=[];O.matchesArg,O.isDeepEqual;var ne=O.isPromise;O.isReact,O.isSerialized,O.isShallowEqual,O.matchesKey,O.maxAge,O.maxArgs;var X=O.maxSize,ie=O.onCacheAdd,he=O.onCacheChange,ge=O.onCacheHit;O.onExpire,O.profileName,O.serializer;var pe=O.updateCacheForKey;O.transformArgs,O.updateExpire;var Se=o(O,Zn),xe=Gn(O),$e=Yn(O),ot=E(W,O,xe,$e),Qt=q(O),tr=Jn(O),nr=i({},Se,{isEqual:xe,isMatchingKey:$e,isPromise:ne,maxSize:X,onCacheAdd:Te(u(ie,ot.onCacheAdd,Qt.onCacheAdd)),onCacheChange:Te(he),onCacheHit:Te(u(ge,ot.onCacheHit,Qt.onCacheHit)),transformKey:tr}),rr=n(y,nr),at=F(rr,{expirations:W,options:O,originalFunction:y});return pe&&(at=Xn(at)),_(at,y.name,M.profileName),at};H.clearStats=C,H.collectStats=S,H.compose=function(){return s.apply(void 0,arguments)||H},H.deep=H({isDeepEqual:!0}),H.getStats=$,H.infinite=H({maxSize:1/0}),H.isCollectingStats=function(){return b.isCollectingStats},H.isMoized=function(y){return typeof y=="function"&&!!y.isMoized},H.matchesArg=function(l){return H({matchesArg:l})},H.matchesKey=function(l){return H({matchesKey:l})};function er(l,y){if(y===!0)return H({maxAge:l,updateExpire:y});if(typeof y=="object"){var I=y.onExpire,M=y.updateExpire;return H({maxAge:l,onExpire:I,updateExpire:M})}return H(typeof y=="function"?{maxAge:l,onExpire:y,updateExpire:!0}:{maxAge:l})}return H.maxAge=er,H.maxArgs=function(l){return H({maxArgs:l})},H.maxSize=function(l){return H({maxSize:l})},H.profile=function(l){return H({profileName:l})},H.promise=H({isPromise:!0,updateExpire:!0}),H.react=H({isReact:!0}),H.serialize=H({isSerialized:!0}),H.serializeWith=function(l){return H({isSerialized:!0,serializer:l})},H.shallow=H({isShallowEqual:!0}),H.transformArgs=function(l){return H({transformArgs:l})},H.updateCacheForKey=function(l){return H({updateCacheForKey:l})},Object.defineProperty(H,"default",{configurable:!1,enumerable:!1,value:H,writable:!1}),H})})(zr);var Kt=Pt;function Pr(t,e,n){var r,i=1;t==null&&(t=0),e==null&&(e=0),n==null&&(n=0);function o(){var a,u=r.length,s,f=0,g=0,c=0;for(a=0;a<u;++a)s=r[a],f+=s.x||0,g+=s.y||0,c+=s.z||0;for(f=(f/u-t)*i,g=(g/u-e)*i,c=(c/u-n)*i,a=0;a<u;++a)s=r[a],f&&(s.x-=f),g&&(s.y-=g),c&&(s.z-=c)}return o.initialize=function(a){r=a},o.x=function(a){return arguments.length?(t=+a,o):t},o.y=function(a){return arguments.length?(e=+a,o):e},o.z=function(a){return arguments.length?(n=+a,o):n},o.strength=function(a){return arguments.length?(i=+a,o):i},o}function kr(t){const e=+this._x.call(null,t);return xn(this.cover(e),e,t)}function xn(t,e,n){if(isNaN(e))return t;var r,i=t._root,o={data:n},a=t._x0,u=t._x1,s,f,g,c,p;if(!i)return t._root=o,t;for(;i.length;)if((g=e>=(s=(a+u)/2))?a=s:u=s,r=i,!(i=i[c=+g]))return r[c]=o,t;if(f=+t._x.call(null,i.data),e===f)return o.next=i,r?r[c]=o:t._root=o,t;do r=r?r[c]=new Array(2):t._root=new Array(2),(g=e>=(s=(a+u)/2))?a=s:u=s;while((c=+g)==(p=+(f>=s)));return r[p]=i,r[c]=o,t}function Or(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e);let r=1/0,i=-1/0;for(let o=0,a;o<e;++o)isNaN(a=+this._x.call(null,t[o]))||(n[o]=a,a<r&&(r=a),a>i&&(i=a));if(r>i)return this;this.cover(r).cover(i);for(let o=0;o<e;++o)xn(this,n[o],t[o]);return this}function Lr(t){if(isNaN(t=+t))return this;var e=this._x0,n=this._x1;if(isNaN(e))n=(e=Math.floor(t))+1;else{for(var r=n-e||1,i=this._root,o,a;e>t||t>=n;)switch(a=+(t<e),o=new Array(2),o[a]=i,i=o,r*=2,a){case 0:n=e+r;break;case 1:e=n-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=n,this}function jr(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function Tr(t){return arguments.length?this.cover(+t[0][0]).cover(+t[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function me(t,e,n){this.node=t,this.x0=e,this.x1=n}function Kr(t,e){var n,r=this._x0,i,o,a=this._x1,u=[],s=this._root,f,g;for(s&&u.push(new me(s,r,a)),e==null?e=1/0:(r=t-e,a=t+e);f=u.pop();)if(!(!(s=f.node)||(i=f.x0)>a||(o=f.x1)<r))if(s.length){var c=(i+o)/2;u.push(new me(s[1],c,o),new me(s[0],i,c)),(g=+(t>=c))&&(f=u[u.length-1],u[u.length-1]=u[u.length-1-g],u[u.length-1-g]=f)}else{var p=Math.abs(t-+this._x.call(null,s.data));p<e&&(e=p,r=t-p,a=t+p,n=s.data)}return n}function Rr(t){if(isNaN(s=+this._x.call(null,t)))return this;var e,n=this._root,r,i,o,a=this._x0,u=this._x1,s,f,g,c,p;if(!n)return this;if(n.length)for(;;){if((g=s>=(f=(a+u)/2))?a=f:u=f,e=n,!(n=n[c=+g]))return this;if(!n.length)break;e[c+1&1]&&(r=e,p=c)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[c]=o:delete e[c],(n=e[0]||e[1])&&n===(e[1]||e[0])&&!n.length&&(r?r[p]=n:this._root=n),this):(this._root=o,this)}function Dr(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function Ur(){return this._root}function Hr(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function Vr(t){var e=[],n,r=this._root,i,o,a;for(r&&e.push(new me(r,this._x0,this._x1));n=e.pop();)if(!t(r=n.node,o=n.x0,a=n.x1)&&r.length){var u=(o+a)/2;(i=r[1])&&e.push(new me(i,u,a)),(i=r[0])&&e.push(new me(i,o,u))}return this}function Wr(t){var e=[],n=[],r;for(this._root&&e.push(new me(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var o,a=r.x0,u=r.x1,s=(a+u)/2;(o=i[0])&&e.push(new me(o,a,s)),(o=i[1])&&e.push(new me(o,s,u))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.x1);return this}function Qr(t){return t[0]}function Gr(t){return arguments.length?(this._x=t,this):this._x}function Cn(t,e){var n=new Rt(e??Qr,NaN,NaN);return t==null?n:n.addAll(t)}function Rt(t,e,n){this._x=t,this._x0=e,this._x1=n,this._root=void 0}function Zt(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var le=Cn.prototype=Rt.prototype;le.copy=function(){var t=new Rt(this._x,this._x0,this._x1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=Zt(e),t;for(n=[{source:e,target:t._root=new Array(2)}];e=n.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=Zt(r));return t};le.add=kr;le.addAll=Or;le.cover=Lr;le.data=jr;le.extent=Tr;le.find=Kr;le.remove=Rr;le.removeAll=Dr;le.root=Ur;le.size=Hr;le.visit=Vr;le.visitAfter=Wr;le.x=Gr;function Yr(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return An(this.cover(e,n),e,n,t)}function An(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var i,o=t._root,a={data:r},u=t._x0,s=t._y0,f=t._x1,g=t._y1,c,p,_,h,x,w,d,E;if(!o)return t._root=a,t;for(;o.length;)if((x=e>=(c=(u+f)/2))?u=c:f=c,(w=n>=(p=(s+g)/2))?s=p:g=p,i=o,!(o=o[d=w<<1|x]))return i[d]=a,t;if(_=+t._x.call(null,o.data),h=+t._y.call(null,o.data),e===_&&n===h)return a.next=o,i?i[d]=a:t._root=a,t;do i=i?i[d]=new Array(4):t._root=new Array(4),(x=e>=(c=(u+f)/2))?u=c:f=c,(w=n>=(p=(s+g)/2))?s=p:g=p;while((d=w<<1|x)===(E=(h>=p)<<1|_>=c));return i[E]=o,i[d]=a,t}function Jr(t){var e,n,r=t.length,i,o,a=new Array(r),u=new Array(r),s=1/0,f=1/0,g=-1/0,c=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,e=t[n]))||isNaN(o=+this._y.call(null,e))||(a[n]=i,u[n]=o,i<s&&(s=i),i>g&&(g=i),o<f&&(f=o),o>c&&(c=o));if(s>g||f>c)return this;for(this.cover(s,f).cover(g,c),n=0;n<r;++n)An(this,a[n],u[n],t[n]);return this}function Xr(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,o=(r=Math.floor(e))+1;else{for(var a=i-n||1,u=this._root,s,f;n>t||t>=i||r>e||e>=o;)switch(f=(e<r)<<1|t<n,s=new Array(4),s[f]=u,u=s,a*=2,f){case 0:i=n+a,o=r+a;break;case 1:n=i-a,o=r+a;break;case 2:i=n+a,r=o-a;break;case 3:n=i-a,r=o-a;break}this._root&&this._root.length&&(this._root=u)}return this._x0=n,this._y0=r,this._x1=i,this._y1=o,this}function Zr(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function ei(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function se(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i}function ti(t,e,n){var r,i=this._x0,o=this._y0,a,u,s,f,g=this._x1,c=this._y1,p=[],_=this._root,h,x;for(_&&p.push(new se(_,i,o,g,c)),n==null?n=1/0:(i=t-n,o=e-n,g=t+n,c=e+n,n*=n);h=p.pop();)if(!(!(_=h.node)||(a=h.x0)>g||(u=h.y0)>c||(s=h.x1)<i||(f=h.y1)<o))if(_.length){var w=(a+s)/2,d=(u+f)/2;p.push(new se(_[3],w,d,s,f),new se(_[2],a,d,w,f),new se(_[1],w,u,s,d),new se(_[0],a,u,w,d)),(x=(e>=d)<<1|t>=w)&&(h=p[p.length-1],p[p.length-1]=p[p.length-1-x],p[p.length-1-x]=h)}else{var E=t-+this._x.call(null,_.data),b=e-+this._y.call(null,_.data),N=E*E+b*b;if(N<n){var C=Math.sqrt(n=N);i=t-C,o=e-C,g=t+C,c=e+C,r=_.data}}return r}function ni(t){if(isNaN(g=+this._x.call(null,t))||isNaN(c=+this._y.call(null,t)))return this;var e,n=this._root,r,i,o,a=this._x0,u=this._y0,s=this._x1,f=this._y1,g,c,p,_,h,x,w,d;if(!n)return this;if(n.length)for(;;){if((h=g>=(p=(a+s)/2))?a=p:s=p,(x=c>=(_=(u+f)/2))?u=_:f=_,e=n,!(n=n[w=x<<1|h]))return this;if(!n.length)break;(e[w+1&3]||e[w+2&3]||e[w+3&3])&&(r=e,d=w)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[w]=o:delete e[w],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[d]=n:this._root=n),this):(this._root=o,this)}function ri(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function ii(){return this._root}function oi(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function ai(t){var e=[],n,r=this._root,i,o,a,u,s;for(r&&e.push(new se(r,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(r=n.node,o=n.x0,a=n.y0,u=n.x1,s=n.y1)&&r.length){var f=(o+u)/2,g=(a+s)/2;(i=r[3])&&e.push(new se(i,f,g,u,s)),(i=r[2])&&e.push(new se(i,o,g,f,s)),(i=r[1])&&e.push(new se(i,f,a,u,g)),(i=r[0])&&e.push(new se(i,o,a,f,g))}return this}function si(t){var e=[],n=[],r;for(this._root&&e.push(new se(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var o,a=r.x0,u=r.y0,s=r.x1,f=r.y1,g=(a+s)/2,c=(u+f)/2;(o=i[0])&&e.push(new se(o,a,u,g,c)),(o=i[1])&&e.push(new se(o,g,u,s,c)),(o=i[2])&&e.push(new se(o,a,c,g,f)),(o=i[3])&&e.push(new se(o,g,c,s,f))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.x1,r.y1);return this}function ui(t){return t[0]}function fi(t){return arguments.length?(this._x=t,this):this._x}function ci(t){return t[1]}function li(t){return arguments.length?(this._y=t,this):this._y}function En(t,e,n){var r=new Dt(e??ui,n??ci,NaN,NaN,NaN,NaN);return t==null?r:r.addAll(t)}function Dt(t,e,n,r,i,o){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function en(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var ue=En.prototype=Dt.prototype;ue.copy=function(){var t=new Dt(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=en(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=en(r));return t};ue.add=Yr;ue.addAll=Jr;ue.cover=Xr;ue.data=Zr;ue.extent=ei;ue.find=ti;ue.remove=ni;ue.removeAll=ri;ue.root=ii;ue.size=oi;ue.visit=ai;ue.visitAfter=si;ue.x=fi;ue.y=li;function di(t){const e=+this._x.call(null,t),n=+this._y.call(null,t),r=+this._z.call(null,t);return Nn(this.cover(e,n,r),e,n,r,t)}function Nn(t,e,n,r,i){if(isNaN(e)||isNaN(n)||isNaN(r))return t;var o,a=t._root,u={data:i},s=t._x0,f=t._y0,g=t._z0,c=t._x1,p=t._y1,_=t._z1,h,x,w,d,E,b,N,C,S,j,T;if(!a)return t._root=u,t;for(;a.length;)if((N=e>=(h=(s+c)/2))?s=h:c=h,(C=n>=(x=(f+p)/2))?f=x:p=x,(S=r>=(w=(g+_)/2))?g=w:_=w,o=a,!(a=a[j=S<<2|C<<1|N]))return o[j]=u,t;if(d=+t._x.call(null,a.data),E=+t._y.call(null,a.data),b=+t._z.call(null,a.data),e===d&&n===E&&r===b)return u.next=a,o?o[j]=u:t._root=u,t;do o=o?o[j]=new Array(8):t._root=new Array(8),(N=e>=(h=(s+c)/2))?s=h:c=h,(C=n>=(x=(f+p)/2))?f=x:p=x,(S=r>=(w=(g+_)/2))?g=w:_=w;while((j=S<<2|C<<1|N)===(T=(b>=w)<<2|(E>=x)<<1|d>=h));return o[T]=a,o[j]=u,t}function hi(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let o=1/0,a=1/0,u=1/0,s=-1/0,f=-1/0,g=-1/0;for(let c=0,p,_,h,x;c<e;++c)isNaN(_=+this._x.call(null,p=t[c]))||isNaN(h=+this._y.call(null,p))||isNaN(x=+this._z.call(null,p))||(n[c]=_,r[c]=h,i[c]=x,_<o&&(o=_),_>s&&(s=_),h<a&&(a=h),h>f&&(f=h),x<u&&(u=x),x>g&&(g=x));if(o>s||a>f||u>g)return this;this.cover(o,a,u).cover(s,f,g);for(let c=0;c<e;++c)Nn(this,n[c],r[c],i[c],t[c]);return this}function gi(t,e,n){if(isNaN(t=+t)||isNaN(e=+e)||isNaN(n=+n))return this;var r=this._x0,i=this._y0,o=this._z0,a=this._x1,u=this._y1,s=this._z1;if(isNaN(r))a=(r=Math.floor(t))+1,u=(i=Math.floor(e))+1,s=(o=Math.floor(n))+1;else{for(var f=a-r||1,g=this._root,c,p;r>t||t>=a||i>e||e>=u||o>n||n>=s;)switch(p=(n<o)<<2|(e<i)<<1|t<r,c=new Array(8),c[p]=g,g=c,f*=2,p){case 0:a=r+f,u=i+f,s=o+f;break;case 1:r=a-f,u=i+f,s=o+f;break;case 2:a=r+f,i=u-f,s=o+f;break;case 3:r=a-f,i=u-f,s=o+f;break;case 4:a=r+f,u=i+f,o=s-f;break;case 5:r=a-f,u=i+f,o=s-f;break;case 6:a=r+f,i=u-f,o=s-f;break;case 7:r=a-f,i=u-f,o=s-f;break}this._root&&this._root.length&&(this._root=g)}return this._x0=r,this._y0=i,this._z0=o,this._x1=a,this._y1=u,this._z1=s,this}function pi(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function vi(t){return arguments.length?this.cover(+t[0][0],+t[0][1],+t[0][2]).cover(+t[1][0],+t[1][1],+t[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function ee(t,e,n,r,i,o,a){this.node=t,this.x0=e,this.y0=n,this.z0=r,this.x1=i,this.y1=o,this.z1=a}function yi(t,e,n,r){var i,o=this._x0,a=this._y0,u=this._z0,s,f,g,c,p,_,h=this._x1,x=this._y1,w=this._z1,d=[],E=this._root,b,N;for(E&&d.push(new ee(E,o,a,u,h,x,w)),r==null?r=1/0:(o=t-r,a=e-r,u=n-r,h=t+r,x=e+r,w=n+r,r*=r);b=d.pop();)if(!(!(E=b.node)||(s=b.x0)>h||(f=b.y0)>x||(g=b.z0)>w||(c=b.x1)<o||(p=b.y1)<a||(_=b.z1)<u))if(E.length){var C=(s+c)/2,S=(f+p)/2,j=(g+_)/2;d.push(new ee(E[7],C,S,j,c,p,_),new ee(E[6],s,S,j,C,p,_),new ee(E[5],C,f,j,c,S,_),new ee(E[4],s,f,j,C,S,_),new ee(E[3],C,S,g,c,p,j),new ee(E[2],s,S,g,C,p,j),new ee(E[1],C,f,g,c,S,j),new ee(E[0],s,f,g,C,S,j)),(N=(n>=j)<<2|(e>=S)<<1|t>=C)&&(b=d[d.length-1],d[d.length-1]=d[d.length-1-N],d[d.length-1-N]=b)}else{var T=t-+this._x.call(null,E.data),U=e-+this._y.call(null,E.data),Q=n-+this._z.call(null,E.data),$=T*T+U*U+Q*Q;if($<r){var q=Math.sqrt(r=$);o=t-q,a=e-q,u=n-q,h=t+q,x=e+q,w=n+q,i=E.data}}return i}function _i(t){if(isNaN(p=+this._x.call(null,t))||isNaN(_=+this._y.call(null,t))||isNaN(h=+this._z.call(null,t)))return this;var e,n=this._root,r,i,o,a=this._x0,u=this._y0,s=this._z0,f=this._x1,g=this._y1,c=this._z1,p,_,h,x,w,d,E,b,N,C,S;if(!n)return this;if(n.length)for(;;){if((E=p>=(x=(a+f)/2))?a=x:f=x,(b=_>=(w=(u+g)/2))?u=w:g=w,(N=h>=(d=(s+c)/2))?s=d:c=d,e=n,!(n=n[C=N<<2|b<<1|E]))return this;if(!n.length)break;(e[C+1&7]||e[C+2&7]||e[C+3&7]||e[C+4&7]||e[C+5&7]||e[C+6&7]||e[C+7&7])&&(r=e,S=C)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[C]=o:delete e[C],(n=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&n===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[S]=n:this._root=n),this):(this._root=o,this)}function mi(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function wi(){return this._root}function bi(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function xi(t){var e=[],n,r=this._root,i,o,a,u,s,f,g;for(r&&e.push(new ee(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();)if(!t(r=n.node,o=n.x0,a=n.y0,u=n.z0,s=n.x1,f=n.y1,g=n.z1)&&r.length){var c=(o+s)/2,p=(a+f)/2,_=(u+g)/2;(i=r[7])&&e.push(new ee(i,c,p,_,s,f,g)),(i=r[6])&&e.push(new ee(i,o,p,_,c,f,g)),(i=r[5])&&e.push(new ee(i,c,a,_,s,p,g)),(i=r[4])&&e.push(new ee(i,o,a,_,c,p,g)),(i=r[3])&&e.push(new ee(i,c,p,u,s,f,_)),(i=r[2])&&e.push(new ee(i,o,p,u,c,f,_)),(i=r[1])&&e.push(new ee(i,c,a,u,s,p,_)),(i=r[0])&&e.push(new ee(i,o,a,u,c,p,_))}return this}function Ci(t){var e=[],n=[],r;for(this._root&&e.push(new ee(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var o,a=r.x0,u=r.y0,s=r.z0,f=r.x1,g=r.y1,c=r.z1,p=(a+f)/2,_=(u+g)/2,h=(s+c)/2;(o=i[0])&&e.push(new ee(o,a,u,s,p,_,h)),(o=i[1])&&e.push(new ee(o,p,u,s,f,_,h)),(o=i[2])&&e.push(new ee(o,a,_,s,p,g,h)),(o=i[3])&&e.push(new ee(o,p,_,s,f,g,h)),(o=i[4])&&e.push(new ee(o,a,u,h,p,_,c)),(o=i[5])&&e.push(new ee(o,p,u,h,f,_,c)),(o=i[6])&&e.push(new ee(o,a,_,h,p,g,c)),(o=i[7])&&e.push(new ee(o,p,_,h,f,g,c))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function Ai(t){return t[0]}function Ei(t){return arguments.length?(this._x=t,this):this._x}function Ni(t){return t[1]}function Mi(t){return arguments.length?(this._y=t,this):this._y}function Si(t){return t[2]}function $i(t){return arguments.length?(this._z=t,this):this._z}function Mn(t,e,n,r){var i=new Ut(e??Ai,n??Ni,r??Si,NaN,NaN,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Ut(t,e,n,r,i,o,a,u,s){this._x=t,this._y=e,this._z=n,this._x0=r,this._y0=i,this._z0=o,this._x1=a,this._y1=u,this._z1=s,this._root=void 0}function tn(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var ae=Mn.prototype=Ut.prototype;ae.copy=function(){var t=new Ut(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=tn(e),t;for(n=[{source:e,target:t._root=new Array(8)}];e=n.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=tn(r));return t};ae.add=di;ae.addAll=hi;ae.cover=gi;ae.data=pi;ae.extent=vi;ae.find=yi;ae.remove=_i;ae.removeAll=mi;ae.root=wi;ae.size=bi;ae.visit=xi;ae.visitAfter=Ci;ae.x=Ei;ae.y=Mi;ae.z=$i;function et(t){return function(){return t}}function ve(t){return(t()-.5)*1e-6}function zi(t){return t.index}function nn(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function qi(t){var e=zi,n=p,r,i=et(30),o,a,u,s,f,g,c=1;t==null&&(t=[]);function p(d){return 1/Math.min(s[d.source.index],s[d.target.index])}function _(d){for(var E=0,b=t.length;E<c;++E)for(var N=0,C,S,j,T=0,U=0,Q=0,$,q;N<b;++N)C=t[N],S=C.source,j=C.target,T=j.x+j.vx-S.x-S.vx||ve(g),u>1&&(U=j.y+j.vy-S.y-S.vy||ve(g)),u>2&&(Q=j.z+j.vz-S.z-S.vz||ve(g)),$=Math.sqrt(T*T+U*U+Q*Q),$=($-o[N])/$*d*r[N],T*=$,U*=$,Q*=$,j.vx-=T*(q=f[N]),u>1&&(j.vy-=U*q),u>2&&(j.vz-=Q*q),S.vx+=T*(q=1-q),u>1&&(S.vy+=U*q),u>2&&(S.vz+=Q*q)}function h(){if(a){var d,E=a.length,b=t.length,N=new Map(a.map((S,j)=>[e(S,j,a),S])),C;for(d=0,s=new Array(E);d<b;++d)C=t[d],C.index=d,typeof C.source!="object"&&(C.source=nn(N,C.source)),typeof C.target!="object"&&(C.target=nn(N,C.target)),s[C.source.index]=(s[C.source.index]||0)+1,s[C.target.index]=(s[C.target.index]||0)+1;for(d=0,f=new Array(b);d<b;++d)C=t[d],f[d]=s[C.source.index]/(s[C.source.index]+s[C.target.index]);r=new Array(b),x(),o=new Array(b),w()}}function x(){if(a)for(var d=0,E=t.length;d<E;++d)r[d]=+n(t[d],d,t)}function w(){if(a)for(var d=0,E=t.length;d<E;++d)o[d]=+i(t[d],d,t)}return _.initialize=function(d,...E){a=d,g=E.find(b=>typeof b=="function")||Math.random,u=E.find(b=>[1,2,3].includes(b))||2,h()},_.links=function(d){return arguments.length?(t=d,h(),_):t},_.id=function(d){return arguments.length?(e=d,_):e},_.iterations=function(d){return arguments.length?(c=+d,_):c},_.strength=function(d){return arguments.length?(n=typeof d=="function"?d:et(+d),x(),_):n},_.distance=function(d){return arguments.length?(i=typeof d=="function"?d:et(+d),w(),_):i},_}var Bi={value:()=>{}};function Sn(){for(var t=0,e=arguments.length,n={},r;t<e;++t){if(!(r=arguments[t]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new ht(n)}function ht(t){this._=t}function Ii(t,e){return t.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}ht.prototype=Sn.prototype={constructor:ht,on:function(t,e){var n=this._,r=Ii(t+"",n),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(t=r[o]).type)&&(i=Fi(n[i],t.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<a;)if(i=(t=r[o]).type)n[i]=rn(n[i],t.name,e);else if(e==null)for(i in n)n[i]=rn(n[i],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new ht(t)},call:function(t,e){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(e,n)}};function Fi(t,e){for(var n=0,r=t.length,i;n<r;++n)if((i=t[n]).name===e)return i.value}function rn(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=Bi,t=t.slice(0,r).concat(t.slice(r+1));break}return n!=null&&t.push({name:e,value:n}),t}var ke=0,Ye=0,De=0,$n=1e3,vt,Je,yt=0,Me=0,At=0,rt=typeof performance=="object"&&performance.now?performance:Date,zn=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function qn(){return Me||(zn(Pi),Me=rt.now()+At)}function Pi(){Me=0}function kt(){this._call=this._time=this._next=null}kt.prototype=Bn.prototype={constructor:kt,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?qn():+n)+(e==null?0:+e),!this._next&&Je!==this&&(Je?Je._next=this:vt=this,Je=this),this._call=t,this._time=n,Ot()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ot())}};function Bn(t,e,n){var r=new kt;return r.restart(t,e,n),r}function ki(){qn(),++ke;for(var t=vt,e;t;)(e=Me-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ke}function on(){Me=(yt=rt.now())+At,ke=Ye=0;try{ki()}finally{ke=0,Li(),Me=0}}function Oi(){var t=rt.now(),e=t-yt;e>$n&&(At-=e,yt=t)}function Li(){for(var t,e=vt,n,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:vt=n);Je=t,Ot(r)}function Ot(t){if(!ke){Ye&&(Ye=clearTimeout(Ye));var e=t-Me;e>24?(t<1/0&&(Ye=setTimeout(on,t-rt.now()-At)),De&&(De=clearInterval(De))):(De||(yt=rt.now(),De=setInterval(Oi,$n)),ke=1,zn(on))}}const ji=1664525,Ti=1013904223,an=4294967296;function Ki(){let t=1;return()=>(t=(ji*t+Ti)%an)/an}var sn=3;function St(t){return t.x}function un(t){return t.y}function Ri(t){return t.z}var Di=10,Ui=Math.PI*(3-Math.sqrt(5)),Hi=Math.PI*20/(9+Math.sqrt(221));function Vi(t,e){e=e||2;var n=Math.min(sn,Math.max(1,Math.round(e))),r,i=1,o=.001,a=1-Math.pow(o,1/300),u=0,s=.6,f=new Map,g=Bn(_),c=Sn("tick","end"),p=Ki();t==null&&(t=[]);function _(){h(),c.call("tick",r),i<o&&(g.stop(),c.call("end",r))}function h(d){var E,b=t.length,N;d===void 0&&(d=1);for(var C=0;C<d;++C)for(i+=(u-i)*a,f.forEach(function(S){S(i)}),E=0;E<b;++E)N=t[E],N.fx==null?N.x+=N.vx*=s:(N.x=N.fx,N.vx=0),n>1&&(N.fy==null?N.y+=N.vy*=s:(N.y=N.fy,N.vy=0)),n>2&&(N.fz==null?N.z+=N.vz*=s:(N.z=N.fz,N.vz=0));return r}function x(){for(var d=0,E=t.length,b;d<E;++d){if(b=t[d],b.index=d,b.fx!=null&&(b.x=b.fx),b.fy!=null&&(b.y=b.fy),b.fz!=null&&(b.z=b.fz),isNaN(b.x)||n>1&&isNaN(b.y)||n>2&&isNaN(b.z)){var N=Di*(n>2?Math.cbrt(.5+d):n>1?Math.sqrt(.5+d):d),C=d*Ui,S=d*Hi;n===1?b.x=N:n===2?(b.x=N*Math.cos(C),b.y=N*Math.sin(C)):(b.x=N*Math.sin(C)*Math.cos(S),b.y=N*Math.cos(C),b.z=N*Math.sin(C)*Math.sin(S))}(isNaN(b.vx)||n>1&&isNaN(b.vy)||n>2&&isNaN(b.vz))&&(b.vx=0,n>1&&(b.vy=0),n>2&&(b.vz=0))}}function w(d){return d.initialize&&d.initialize(t,p,n),d}return x(),r={tick:h,restart:function(){return g.restart(_),r},stop:function(){return g.stop(),r},numDimensions:function(d){return arguments.length?(n=Math.min(sn,Math.max(1,Math.round(d))),f.forEach(w),r):n},nodes:function(d){return arguments.length?(t=d,x(),f.forEach(w),r):t},alpha:function(d){return arguments.length?(i=+d,r):i},alphaMin:function(d){return arguments.length?(o=+d,r):o},alphaDecay:function(d){return arguments.length?(a=+d,r):+a},alphaTarget:function(d){return arguments.length?(u=+d,r):u},velocityDecay:function(d){return arguments.length?(s=1-d,r):1-s},randomSource:function(d){return arguments.length?(p=d,f.forEach(w),r):p},force:function(d,E){return arguments.length>1?(E==null?f.delete(d):f.set(d,w(E)),r):f.get(d)},find:function(){var d=Array.prototype.slice.call(arguments),E=d.shift()||0,b=(n>1?d.shift():null)||0,N=(n>2?d.shift():null)||0,C=d.shift()||1/0,S=0,j=t.length,T,U,Q,$,q,K;for(C*=C,S=0;S<j;++S)q=t[S],T=E-q.x,U=b-(q.y||0),Q=N-(q.z||0),$=T*T+U*U+Q*Q,$<C&&(K=q,C=$);return K},on:function(d,E){return arguments.length>1?(c.on(d,E),r):c.on(d)}}}function Wi(){var t,e,n,r,i,o=et(-30),a,u=1,s=1/0,f=.81;function g(h){var x,w=t.length,d=(e===1?Cn(t,St):e===2?En(t,St,un):e===3?Mn(t,St,un,Ri):null).visitAfter(p);for(i=h,x=0;x<w;++x)n=t[x],d.visit(_)}function c(){if(t){var h,x=t.length,w;for(a=new Array(x),h=0;h<x;++h)w=t[h],a[w.index]=+o(w,h,t)}}function p(h){var x=0,w,d,E=0,b,N,C,S,j=h.length;if(j){for(b=N=C=S=0;S<j;++S)(w=h[S])&&(d=Math.abs(w.value))&&(x+=w.value,E+=d,b+=d*(w.x||0),N+=d*(w.y||0),C+=d*(w.z||0));x*=Math.sqrt(4/j),h.x=b/E,e>1&&(h.y=N/E),e>2&&(h.z=C/E)}else{w=h,w.x=w.data.x,e>1&&(w.y=w.data.y),e>2&&(w.z=w.data.z);do x+=a[w.data.index];while(w=w.next)}h.value=x}function _(h,x,w,d,E){if(!h.value)return!0;var b=[w,d,E][e-1],N=h.x-n.x,C=e>1?h.y-n.y:0,S=e>2?h.z-n.z:0,j=b-x,T=N*N+C*C+S*S;if(j*j/f<T)return T<s&&(N===0&&(N=ve(r),T+=N*N),e>1&&C===0&&(C=ve(r),T+=C*C),e>2&&S===0&&(S=ve(r),T+=S*S),T<u&&(T=Math.sqrt(u*T)),n.vx+=N*h.value*i/T,e>1&&(n.vy+=C*h.value*i/T),e>2&&(n.vz+=S*h.value*i/T)),!0;if(h.length||T>=s)return;(h.data!==n||h.next)&&(N===0&&(N=ve(r),T+=N*N),e>1&&C===0&&(C=ve(r),T+=C*C),e>2&&S===0&&(S=ve(r),T+=S*S),T<u&&(T=Math.sqrt(u*T)));do h.data!==n&&(j=a[h.data.index]*i/T,n.vx+=N*j,e>1&&(n.vy+=C*j),e>2&&(n.vz+=S*j));while(h=h.next)}return g.initialize=function(h,...x){t=h,r=x.find(w=>typeof w=="function")||Math.random,e=x.find(w=>[1,2,3].includes(w))||2,c()},g.strength=function(h){return arguments.length?(o=typeof h=="function"?h:et(+h),c(),g):o},g.distanceMin=function(h){return arguments.length?(u=h*h,g):Math.sqrt(u)},g.distanceMax=function(h){return arguments.length?(s=h*h,g):Math.sqrt(s)},g.theta=function(h){return arguments.length?(f=h*h,g):Math.sqrt(f)},g}var _t={},Qi={get exports(){return _t},set exports(t){_t=t}},Oe={},Gi={get exports(){return Oe},set exports(t){Oe=t}},In=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const Yi=In;var je=function(e){return n;function n(r,i){let o=i&&i.indent||0,a=i&&i.join!==void 0?i.join:`
`,u=Array(o+1).join(" "),s=[];for(let f=0;f<e;++f){let g=Yi(f),c=f===0?"":u;s.push(c+r.replace(/{var}/g,g))}return s.join(a)}};const Fn=je;Gi.exports=Ji;Oe.generateCreateBodyFunctionBody=Pn;Oe.getVectorCode=On;Oe.getBodyCode=kn;function Ji(t,e){let n=Pn(t,e),{Body:r}=new Function(n)();return r}function Pn(t,e){return`
${On(t,e)}
${kn(t)}
return {Body: Body, Vector: Vector};
`}function kn(t){let e=Fn(t),n=e("{var}",{join:", "});return`
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
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function On(t,e){let n=Fn(t),r="";return e&&(r=`${n(`
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
  };`}var we={},Xi={get exports(){return we},set exports(t){we=t}};const Ht=je,Ce=In;Xi.exports=Zi;we.generateQuadTreeFunctionBody=Ln;we.getInsertStackCode=Dn;we.getQuadNodeCode=Rn;we.isSamePosition=jn;we.getChildBodyCode=Kn;we.setChildBodyCode=Tn;function Zi(t){let e=Ln(t);return new Function(e)()}function Ln(t){let e=Ht(t),n=Math.pow(2,t);return`
${Dn()}
${Rn(t)}
${jn(t)}
${Kn(t)}
${Tn(t)}

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
${a("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
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
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
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
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${Ce(0)} - node.min_${Ce(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

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
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${i(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
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
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
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

`;function i(u){let s=[],f=Array(u+1).join(" ");for(let g=0;g<t;++g)s.push(f+`if (${Ce(g)} > max_${Ce(g)}) {`),s.push(f+`  quadIdx = quadIdx + ${Math.pow(2,g)};`),s.push(f+`  min_${Ce(g)} = max_${Ce(g)};`),s.push(f+`  max_${Ce(g)} = node.max_${Ce(g)};`),s.push(f+"}");return s.join(`
`)}function o(){let u=Array(11).join(" "),s=[];for(let f=0;f<n;++f)s.push(u+`if (node.quad${f}) {`),s.push(u+`  queue[pushIdx] = node.quad${f};`),s.push(u+"  queueLength += 1;"),s.push(u+"  pushIdx += 1;"),s.push(u+"}");return s.join(`
`)}function a(u){let s=[];for(let f=0;f<n;++f)s.push(`${u}quad${f} = null;`);return s.join(`
`)}}function jn(t){let e=Ht(t);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Tn(t){var e=Math.pow(2,t);return`
function setChild(node, idx, child) {
  ${n()}
}`;function n(){let r=[];for(let i=0;i<e;++i){let o=i===0?"  ":"  else ";r.push(`${o}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function Kn(t){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let n=[],r=Math.pow(2,t);for(let i=0;i<r;++i)n.push(`  if (idx === ${i}) return node.quad${i};`);return n.join(`
`)}}function Rn(t){let e=Ht(t),n=Math.pow(2,t);var r=`
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
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return r;function i(o){let a=[];for(let u=0;u<n;++u)a.push(`${o}quad${u} = null;`);return a.join(`
`)}}function Dn(){return`
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
`}var mt={},eo={get exports(){return mt},set exports(t){mt=t}};eo.exports=no;mt.generateFunctionBody=Un;const to=je;function no(t){let e=Un(t);return new Function("bodies","settings","random",e)}function Un(t){let e=to(t);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var wt={},ro={get exports(){return wt},set exports(t){wt=t}};const io=je;ro.exports=oo;wt.generateCreateDragForceFunctionBody=Hn;function oo(t){let e=Hn(t);return new Function("options",e)}function Hn(t){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${io(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var bt={},ao={get exports(){return bt},set exports(t){bt=t}};const so=je;ao.exports=uo;bt.generateCreateSpringForceFunctionBody=Vn;function uo(t){let e=Vn(t);return new Function("options","random",e)}function Vn(t){let e=so(t);return`
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
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var xt={},fo={get exports(){return xt},set exports(t){xt=t}};const co=je;fo.exports=lo;xt.generateIntegratorFunctionBody=Wn;function lo(t){let e=Wn(t);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Wn(t){let e=co(t);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var $t,fn;function ho(){if(fn)return $t;fn=1,$t=t;function t(e,n,r,i){this.from=e,this.to=n,this.length=r,this.coefficient=i}return $t}var zt,cn;function go(){if(cn)return zt;cn=1,zt=t;function t(e,n){var r;if(e||(e={}),n){for(r in n)if(n.hasOwnProperty(r)){var i=e.hasOwnProperty(r),o=typeof n[r],a=!i||typeof e[r]!==o;a?e[r]=n[r]:o==="object"&&(e[r]=t(e[r],n[r]))}}return e}return zt}var Vt=function(e){vo(e);var n=po(e);return e.on=n.on,e.off=n.off,e.fire=n.fire,e};function po(t){var e=Object.create(null);return{on:function(n,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var o=e[n];return o||(o=e[n]=[]),o.push({callback:r,ctx:i}),t},off:function(n,r){var i=typeof n>"u";if(i)return e=Object.create(null),t;if(e[n]){var o=typeof r!="function";if(o)delete e[n];else for(var a=e[n],u=0;u<a.length;++u)a[u].callback===r&&a.splice(u,1)}return t},fire:function(n){var r=e[n];if(!r)return t;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var o=0;o<r.length;++o){var a=r[o];a.callback.apply(a.ctx,i)}return t}}}function vo(t){if(!t)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],n=0;n<e.length;++n)if(t.hasOwnProperty(e[n]))throw new Error("Subject cannot be eventified, since it already has property '"+e[n]+"'")}var Be={},yo={get exports(){return Be},set exports(t){Be=t}},ln;function _o(){if(ln)return Be;ln=1,yo.exports=t,Be.random=t,Be.randomIterator=u;function t(s){var f=typeof s=="number"?s:+new Date;return new e(f)}function e(s){this.seed=s}e.prototype.next=a,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=n;function n(){var s,f,g;do f=this.nextDouble()*2-1,g=this.nextDouble()*2-1,s=f*f+g*g;while(s>=1||s===0);return f*Math.sqrt(-2*Math.log(s)/s)}e.prototype.levy=r;function r(){var s=1.5,f=Math.pow(i(1+s)*Math.sin(Math.PI*s/2)/(i((1+s)/2)*s*Math.pow(2,(s-1)/2)),1/s);return this.gaussian()*f/Math.pow(Math.abs(this.gaussian()),1/s)}function i(s){return Math.sqrt(2*Math.PI/s)*Math.pow(1/Math.E*(s+1/(12*s-1/(10*s))),s)}function o(){var s=this.seed;return s=s+2127912214+(s<<12)&4294967295,s=(s^3345072700^s>>>19)&4294967295,s=s+374761393+(s<<5)&4294967295,s=(s+3550635116^s<<9)&4294967295,s=s+4251993797+(s<<3)&4294967295,s=(s^3042594569^s>>>16)&4294967295,this.seed=s,(s&268435455)/268435456}function a(s){return Math.floor(this.nextDouble()*s)}function u(s,f){var g=f||t();if(typeof g.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:p,shuffle:c};function c(){var _,h,x;for(_=s.length-1;_>0;--_)h=g.next(_+1),x=s[h],s[h]=s[_],s[_]=x;return s}function p(_){var h,x,w;for(h=s.length-1;h>0;--h)x=g.next(h+1),w=s[x],s[x]=s[h],s[h]=w,_(w);s.length&&_(s[0])}}return Be}var Qn=Eo,mo=Oe,wo=we,bo=mt,xo=wt,Co=bt,Ao=xt,dn={};function Eo(t){var e=ho(),n=go(),r=Vt;if(t){if(t.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(t.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}t=n(t,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=dn[t.dimensions];if(!i){var o=t.dimensions;i={Body:mo(o,t.debug),createQuadTree:wo(o),createBounds:bo(o),createDragForce:xo(o),createSpringForce:Co(o),integrate:Ao(o)},dn[o]=i}var a=i.Body,u=i.createQuadTree,s=i.createBounds,f=i.createDragForce,g=i.createSpringForce,c=i.integrate,p=v=>new a(v),_=_o().random(42),h=[],x=[],w=u(t,_),d=s(h,t,_),E=g(t,_),b=f(t),N=0,C=[],S=new Map,j=0;Q("nbody",K),Q("spring",m);var T={bodies:h,quadTree:w,springs:x,settings:t,addForce:Q,removeForce:$,getForces:q,step:function(){for(var v=0;v<C.length;++v)C[v](j);var A=c(h,t.timeStep,t.adaptiveTimeStepWeight);return j+=1,A},addBody:function(v){if(!v)throw new Error("Body is required");return h.push(v),v},addBodyAt:function(v){if(!v)throw new Error("Body position is required");var A=p(v);return h.push(A),A},removeBody:function(v){if(v){var A=h.indexOf(v);if(!(A<0))return h.splice(A,1),h.length===0&&d.reset(),!0}},addSpring:function(v,A,F,V){if(!v||!A)throw new Error("Cannot add null spring to force simulator");typeof F!="number"&&(F=-1);var Y=new e(v,A,F,V>=0?V:-1);return x.push(Y),Y},getTotalMovement:function(){return N},removeSpring:function(v){if(v){var A=x.indexOf(v);if(A>-1)return x.splice(A,1),!0}},getBestNewBodyPosition:function(v){return d.getBestNewPosition(v)},getBBox:U,getBoundingBox:U,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(v){return v!==void 0?(t.gravity=v,w.options({gravity:v}),this):t.gravity},theta:function(v){return v!==void 0?(t.theta=v,w.options({theta:v}),this):t.theta},random:_};return No(t,T),r(T),T;function U(){return d.update(),d.box}function Q(v,A){if(S.has(v))throw new Error("Force "+v+" is already added");S.set(v,A),C.push(A)}function $(v){var A=C.indexOf(S.get(v));A<0||(C.splice(A,1),S.delete(v))}function q(){return S}function K(){if(h.length!==0){w.insertBodies(h);for(var v=h.length;v--;){var A=h[v];A.isPinned||(A.reset(),w.updateBodyForce(A),b.update(A))}}}function m(){for(var v=x.length;v--;)E.update(x[v])}}function No(t,e){for(var n in t)Mo(t,e,n)}function Mo(t,e,n){if(t.hasOwnProperty(n)&&typeof e[n]!="function"){var r=Number.isFinite(t[n]);r?e[n]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+n+" should be a valid number.");return t[n]=i,e}return t[n]}:e[n]=function(i){return i!==void 0?(t[n]=i,e):t[n]}}}Qi.exports=$o;_t.simulator=Qn;var So=Vt;function $o(t,e){if(!t)throw new Error("Graph structure cannot be undefined");var n=e&&e.createSimulator||Qn,r=n(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=t.version>19?K:q;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var o=new Map,a={},u=0,s=r.settings.springTransform||zo;b(),w();var f=!1,g={step:function(){if(u===0)return c(!0),!0;var m=r.step();g.lastMove=m,g.fire("step");var v=m/u,A=v<=.01;return c(A),A},getNodePosition:function(m){return $(m).pos},setNodePosition:function(m){var v=$(m);v.setPosition.apply(v,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(m){var v=a[m];if(v)return{from:v.from.pos,to:v.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:p,pinNode:function(m,v){var A=$(m.id);A.isPinned=!!v},isNodePinned:function(m){return $(m.id).isPinned},dispose:function(){t.off("changed",E),g.fire("disposed")},getBody:x,getSpring:h,getForceVectorLength:_,simulator:r,graph:t,lastMove:0};return So(g),g;function c(m){f!==m&&(f=m,d(m))}function p(m){o.forEach(m)}function _(){var m=0,v=0;return p(function(A){m+=Math.abs(A.force.x),v+=Math.abs(A.force.y)}),Math.sqrt(m*m+v*v)}function h(m,v){var A;if(v===void 0)typeof m!="object"?A=m:A=m.id;else{var F=t.hasLink(m,v);if(!F)return;A=F.id}return a[A]}function x(m){return o.get(m)}function w(){t.on("changed",E)}function d(m){g.fire("stable",m)}function E(m){for(var v=0;v<m.length;++v){var A=m[v];A.changeType==="add"?(A.node&&N(A.node.id),A.link&&S(A.link)):A.changeType==="remove"&&(A.node&&C(A.node),A.link&&j(A.link))}u=t.getNodesCount()}function b(){u=0,t.forEachNode(function(m){N(m.id),u+=1}),t.forEachLink(S)}function N(m){var v=o.get(m);if(!v){var A=t.getNode(m);if(!A)throw new Error("initBody() was called with unknown node id");var F=A.position;if(!F){var V=T(A);F=r.getBestNewBodyPosition(V)}v=r.addBodyAt(F),v.id=m,o.set(m,v),U(m),Q(A)&&(v.isPinned=!0)}}function C(m){var v=m.id,A=o.get(v);A&&(o.delete(v),r.removeBody(A))}function S(m){U(m.fromId),U(m.toId);var v=o.get(m.fromId),A=o.get(m.toId),F=r.addSpring(v,A,m.length);s(m,F),a[m.id]=F}function j(m){var v=a[m.id];if(v){var A=t.getNode(m.fromId),F=t.getNode(m.toId);A&&U(A.id),F&&U(F.id),delete a[m.id],r.removeSpring(v)}}function T(m){var v=[];if(!m.links)return v;for(var A=Math.min(m.links.length,2),F=0;F<A;++F){var V=m.links[F],Y=V.fromId!==m.id?o.get(V.fromId):o.get(V.toId);Y&&Y.pos&&v.push(Y)}return v}function U(m){var v=o.get(m);if(v.mass=i(m),Number.isNaN(v.mass))throw new Error("Node mass should be a number")}function Q(m){return m&&(m.isPinned||m.data&&m.data.isPinned)}function $(m){var v=o.get(m);return v||(N(m),v=o.get(m)),v}function q(m){var v=t.getLinks(m);return v?1+v.length/3:1}function K(m){var v=t.getLinks(m);return v?1+v.size/3:1}}function zo(){}var qo=Io,Bo=Vt;function Io(t){if(t=t||{},"uniqueLinkId"in t&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),t.multigraph=t.uniqueLinkId),t.multigraph===void 0&&(t.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,n=new Map,r={},i=0,o=t.multigraph?N:b,a=[],u=A,s=A,f=A,g=A,c={version:20,addNode:x,addLink:E,removeLink:T,removeNode:d,getNode:w,getNodeCount:C,getLinkCount:S,getEdgeCount:S,getLinksCount:S,getNodesCount:C,getLinks:j,forEachNode:Y,forEachLinkedNode:K,forEachLink:q,beginUpdate:f,endUpdate:g,clear:$,hasLink:Q,hasNode:w,getLink:Q};return Bo(c),p(),c;function p(){var z=c.on;c.on=L;function L(){return c.beginUpdate=f=F,c.endUpdate=g=V,u=_,s=h,c.on=z,z.apply(c,arguments)}}function _(z,L){a.push({link:z,changeType:L})}function h(z,L){a.push({node:z,changeType:L})}function x(z,L){if(z===void 0)throw new Error("Invalid node identifier");f();var R=w(z);return R?(R.data=L,s(R,"update")):(R=new Fo(z,L),s(R,"add")),e.set(z,R),g(),R}function w(z){return e.get(z)}function d(z){var L=w(z);if(!L)return!1;f();var R=L.links;return R&&(R.forEach(U),L.links=null),e.delete(z),s(L,"remove"),g(),!0}function E(z,L,R){f();var J=w(z)||x(z),re=w(L)||x(L),te=o(z,L,R),fe=n.has(te.id);return n.set(te.id,te),hn(J,te),z!==L&&hn(re,te),u(te,fe?"update":"add"),g(),te}function b(z,L,R){var J=ct(z,L),re=n.get(J);return re?(re.data=R,re):new gn(z,L,R,J)}function N(z,L,R){var J=ct(z,L),re=r.hasOwnProperty(J);if(re||Q(z,L)){re||(r[J]=0);var te="@"+ ++r[J];J=ct(z+te,L+te)}return new gn(z,L,R,J)}function C(){return e.size}function S(){return n.size}function j(z){var L=w(z);return L?L.links:null}function T(z,L){return L!==void 0&&(z=Q(z,L)),U(z)}function U(z){if(!z||!n.get(z.id))return!1;f(),n.delete(z.id);var L=w(z.fromId),R=w(z.toId);return L&&L.links.delete(z),R&&R.links.delete(z),u(z,"remove"),g(),!0}function Q(z,L){if(!(z===void 0||L===void 0))return n.get(ct(z,L))}function $(){f(),Y(function(z){d(z.id)}),g()}function q(z){if(typeof z=="function")for(var L=n.values(),R=L.next();!R.done;){if(z(R.value))return!0;R=L.next()}}function K(z,L,R){var J=w(z);if(J&&J.links&&typeof L=="function")return R?v(J.links,z,L):m(J.links,z,L)}function m(z,L,R){for(var J,re=z.values(),te=re.next();!te.done;){var fe=te.value,Te=fe.fromId===L?fe.toId:fe.fromId;if(J=R(e.get(Te),fe),J)return!0;te=re.next()}}function v(z,L,R){for(var J,re=z.values(),te=re.next();!te.done;){var fe=te.value;if(fe.fromId===L&&(J=R(e.get(fe.toId),fe),J))return!0;te=re.next()}}function A(){}function F(){i+=1}function V(){i-=1,i===0&&a.length>0&&(c.fire("changed",a),a.length=0)}function Y(z){if(typeof z!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+z);for(var L=e.values(),R=L.next();!R.done;){if(z(R.value))return!0;R=L.next()}}}function Fo(t,e){this.id=t,this.links=null,this.data=e}function hn(t,e){t.links?t.links.add(e):t.links=new Set([e])}function gn(t,e,n,r){this.fromId=t,this.toId=e,this.data=n,this.id=r}function ct(t,e){return t.toString()+"👉 "+e.toString()}let ce,be,Le;const Po=(t,e)=>{if(t.nodes.length===e.nodes.length&&t.links.length===e.links.length)return!0;console.log(t,e,"fdg-wasm layout not cached")},Wt={matchesArg:Po,onCacheMiss:()=>console.log("using cached fdg-wasm layout")},ko=Kt.infinite(async t=>{console.log("setting up fdg-wasm layout again"),await bn();const e=new gt;e.setDimensions(3);const n=1;t.nodes.forEach((i,o)=>{const a=String(i.index);e.addNode(a,1e3),e.setNodeLocation(a,i.x*n,i.y*n,i.z*n)}),t.links.forEach(i=>{const o=String(i.sourceIndex),a=String(i.targetIndex);e.addEdge(o,a,i.strength||.01)}),ce=new Float32Array(t.nodes.length*3),e.resetNodePlacement();const r=()=>{e&&(e.update(.05),ce=new Float32Array(e.nodes.length*3),ce?.set(e.nodes.flatMap(i=>i.location.map(o=>o))),be&&ce&&be(Ct(ce,[ce.buffer]))),Le===e&&Fe(r)};return r(),()=>{Le=e,r()}},Wt),Oo=async(t,e)=>{console.log("using fdg-wasm layout"),be=e,(await ko(t))()},Lo=Kt.infinite(async t=>{const e=Vi(t.nodes,3).force("charge",Wi()).force("link",qi(t.links).id(n=>n.id)).force("center",Pr());return e.on("tick",()=>{const n=t.nodes.flatMap(({x:r,y:i,z:o})=>[r,i,o].map(a=>a));ce=new Float32Array(n),be&&ce&&be(Ct(ce,[ce.buffer])),Le!==e&&e.stop()}),()=>{Le=e,e.restart()}},Wt),jo=async(t,e)=>{console.log("using d3-force layout"),be=e,(await Lo(t))()},To=Kt.infinite(async t=>{console.log("setting up ngraph layout again");const e=qo();t.nodes.forEach(i=>{e.addNode(i.id,i)}),t.links.forEach(i=>{e.addLink(i.source,i.target)});const n=_t(e,{dimensions:3});for(let i of t.nodes)n.setNodePosition(i.id,i.x,i.y,i.z);n.on("step",()=>{const i=t.nodes.flatMap(({id:o})=>{const{x:a,y:u,z:s}=n.getNodePosition(o);return[a,u,s].map(f=>f)});ce=new Float32Array(i),be&&ce&&be(Ct(ce,[ce.buffer]))});const r=()=>{n.step(),Le===n&&Fe(r)};return r(),()=>{Le=n,r()}},Wt),Ko=async(t,e)=>{console.log("using ngraph layout"),be=e,(await To(t))()};Lt({useFDGSimulator:Oo,useD3ForceSimulator:jo,useNgraphForceSimulator:Ko});
