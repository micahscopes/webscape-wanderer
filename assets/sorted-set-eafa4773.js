import{g as B,ar as D}from"./worker-9ad80e94.js";function L(h,m){for(var f=0;f<m.length;f++){const o=m[f];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in h)){const d=Object.getOwnPropertyDescriptor(o,u);d&&Object.defineProperty(h,u,d.get?d:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var T={exports:{}};(function(h,m){(function(f,o){h.exports=o()})(D,function(){class f{constructor(e){if(e?.strategy==null)throw"Must pass options.strategy, a strategy";if(e?.comparator==null)throw"Must pass options.comparator, a comparator";if(e?.onInsertConflict==null)throw"Must pass options.onInsertConflict, a function";this.priv=new e.strategy(e),this.length=0}insert(e){return this.priv.insert(e),this.length+=1,this}remove(e){return this.priv.remove(e),this.length-=1,this}clear(){return this.priv.clear(),this.length=0,this}contains(e){return this.priv.contains(e)}toArray(){return this.priv.toArray()}forEach(e,r){return this.priv.forEachImpl(e,this,r),this}map(e,r){const i=[];return this.forEach(function(l,s,n){return i.push(e.call(r,l,s,n))}),i}filter(e,r){const i=[];return this.forEach(function(l,s,n){if(e.call(r,l,s,n))return i.push(l)}),i}every(e,r){let i=!0;return this.forEach(function(l,s,n){i&&!e.call(r,l,s,n)&&(i=!1)}),i}some(e,r){let i=!1;return this.forEach(function(l,s,n){!i&&e.call(r,l,s,n)&&(i=!0)}),i}findIterator(e){return this.priv.findIterator(e)}beginIterator(){return this.priv.beginIterator()}endIterator(){return this.priv.endIterator()}}class o{constructor(e,r){this.priv=e,this.index=r,this.data=this.priv.data}hasNext(){return this.index<this.data.length}hasPrevious(){return this.index>0}value(){return this.index<this.data.length?this.data[this.index]:null}setValue(e){if(!this.priv.options.allowSetValue)throw"Must set options.allowSetValue";if(!this.hasNext())throw"Cannot set value at end of set";return this.data[this.index]=e}next(){return this.index>=this.data.length?null:new o(this.priv,this.index+1)}previous(){return this.index<=0?null:new o(this.priv,this.index-1)}}const u=(t,e,r)=>{let i=0,l=t.length;for(;i<l;){const s=i+l>>>1;r(t[s],e)<0?i=s+1:l=s}return i};class d{constructor(e){this.options=e,this.onInsertConflict=this.options.onInsertConflict,this.comparator=this.options.comparator,this.data=[]}toArray(){return this.data}insert(e){const r=u(this.data,e,this.comparator);return this.data[r]!==void 0&&this.comparator(this.data[r],e)===0?this.data.splice(r,1,this.onInsertConflict(this.data[r],e)):this.data.splice(r,0,e)}remove(e){const r=u(this.data,e,this.comparator);if(this.comparator(this.data[r],e)!==0)throw"Value not in set";return this.data.splice(r,1)}clear(){return this.data.length=0}contains(e){const r=u(this.data,e,this.comparator);return this.index!==this.data.length&&this.comparator(this.data[r],e)===0}forEachImpl(e,r,i){const l=this.data,s=l.length;for(let n=0;n<s;n++)e.call(i,l[n],n,r)}findIterator(e){const r=u(this.data,e,this.comparator);return new o(this,r)}beginIterator(){return new o(this,0)}endIterator(){return new o(this,this.data.length)}}const R=(t,e)=>{for(;e[t]!==null;){const r=e;e=e[t],e._iteratorParentNode=r}return e},b=(t,e)=>{let r,i;if(e[t]!==null)r=e,e=e[t],e._iteratorParentNode=r,i=t==="left"?"right":"left",e=R(i,e);else{for(;(r=e._iteratorParentNode)!==null&&r[t]===e;)e=r;e=r}return e};class a{constructor(e,r){this.tree=e,this.node=r}next(){if(this.node===null)return null;{const e=b("right",this.node);return new a(this.tree,e)}}previous(){if(this.node===null){if(this.tree.root===null)return null;{this.tree.root._iteratorParentNode=null;const e=R("right",this.tree.root);return new a(this.tree,e)}}else{const e=b("left",this.node);return e===null?null:new a(this.tree,e)}}hasNext(){return this.node!==null}hasPrevious(){return this.previous()!==null}value(){return this.node===null?null:this.node.value}setValue(e){if(!this.tree.options.allowSetValue)throw"Must set options.allowSetValue";if(!this.hasNext())throw"Cannot set value at end of set";return this.node.value=e}}a.find=function(t,e,r){const i=t.root;i!=null&&(i._iteratorParentNode=null);let l=i,s=null;for(;l!==null;){const n=r(e,l.value);if(n===0)break;if(n<0){if(l.left===null)break;s=l,l.left._iteratorParentNode=l,l=l.left}else if(l.right!==null)l.right._iteratorParentNode=l,l=l.right;else{l=s;break}}return new a(t,l)},a.left=t=>{if(t.root===null)return new a(t,null);{t.root._iteratorParentNode=null;const e=R("left",t.root);return new a(t,e)}},a.right=t=>new a(t,null);const v=(t,e)=>{t!==null&&(v(t.left,e),e(t.value),v(t.right,e))};class N{toArray(){const e=[];return v(this.root,function(r){return e.push(r)}),e}clear(){return this.root=null}forEachImpl(e,r,i){let l=0;v(this.root,function(s){e.call(i,s,l,r),l+=1})}contains(e){const r=this.comparator;let i=this.root;for(;i!==null;){const l=r(e,i.value);if(l===0)break;l<0?i=i.left:i=i.right}return i!==null&&r(i.value,e)===0}findIterator(e){return a.find(this,e,this.comparator)}beginIterator(){return a.left(this)}endIterator(){return a.right(this)}}class S{constructor(e){this.value=e,this.left=null,this.right=null}}const _=(t,e)=>{for(;t[e]!==null;)t=t[e];return t},w=(t,e,r)=>{if(t===null)throw"Value not in set";const i=r(e,t.value);if(i<0)t.left=w(t.left,e,r);else if(i>0)t.right=w(t.right,e,r);else if(t.left===null&&t.right===null)t=null;else if(t.right===null)t=t.left;else if(t.left===null)t=t.right;else{const l=_(t.right,"left");t.value=l.value,t.right=w(t.right,l.value,r)}return t};class j extends N{constructor(e){super(),this.options=e,this.comparator=this.options.comparator,this.onInsertConflict=this.options.onInsertConflict,this.root=null}insert(e){const r=this.comparator;if(this.root!==null){let i=this.root,l=null;for(;;){const s=r(e,i.value);if(s===0){i.value=this.onInsertConflict(i.value,e);return}else{if(l=s<0?"left":"right",i[l]===null)break;i=i[l]}}return i[l]=new S(e)}else return this.root=new S(e)}remove(e){return this.root=w(this.root,e,this.comparator)}}class O{constructor(e){this.value=e,this.left=null,this.right=null,this.isRed=!0}}const x=t=>{const e=t.right;return t.right=e.left,e.left=t,e.isRed=t.isRed,t.isRed=!0,e},g=t=>{const e=t.left;return t.left=e.right,e.right=t,e.isRed=t.isRed,t.isRed=!0,e},c=t=>{t.isRed=!t.isRed,t.left.isRed=!t.left.isRed,t.right.isRed=!t.right.isRed},C=t=>(c(t),t.right!==null&&t.right.left!==null&&t.right.left.isRed&&(t.right=g(t.right),t=x(t),c(t)),t),k=t=>(c(t),t.left!==null&&t.left.left!==null&&t.left.left.isRed&&(t=g(t),c(t)),t),y=(t,e,r,i)=>{if(t===null)return new O(e);const l=r(e,t.value);return l===0?t.value=i(t.value,e):l<0?t.left=y(t.left,e,r,i):t.right=y(t.right,e,r,i),t.right!==null&&t.right.isRed&&!(t.left!==null&&t.left.isRed)&&(t=x(t)),t.left!==null&&t.left.isRed&&t.left.left!==null&&t.left.left.isRed&&(t=g(t)),t.left!==null&&t.left.isRed&&t.right!==null&&t.right.isRed&&c(t),t},F=t=>{for(;t.left!==null;)t=t.left;return t},V=t=>(t.right!==null&&t.right.isRed&&(t=x(t)),t.left!==null&&t.left.isRed&&t.left.left!==null&&t.left.left.isRed&&(t=g(t)),t.left!==null&&t.left.isRed&&t.right!==null&&t.right.isRed&&c(t),t),P=t=>t.left===null?null:(!t.left.isRed&&!(t.left.left!==null&&t.left.left.isRed)&&(t=C(t)),t.left=P(t.left),V(t)),I=(t,e,r)=>{if(t===null)throw"Value not in set";if(r(e,t.value)<0){if(t.left===null)throw"Value not in set";!t.left.isRed&&!(t.left.left!==null&&t.left.left.isRed)&&(t=C(t)),t.left=I(t.left,e,r)}else{if(t.left!==null&&t.left.isRed&&(t=g(t)),t.right===null){if(r(e,t.value)===0)return null;throw"Value not in set"}!t.right.isRed&&!(t.right.left!==null&&t.right.left.isRed)&&(t=k(t)),r(e,t.value)===0?(t.value=F(t.right).value,t.right=P(t.right)):t.right=I(t.right,e,r)}return t!==null&&(t=V(t)),t};class A extends N{constructor(e){super(),this.options=e,this.comparator=this.options.comparator,this.onInsertConflict=this.options.onInsertConflict,this.root=null}insert(e){this.root=y(this.root,e,this.comparator,this.onInsertConflict),this.root.isRed=!1}remove(e){this.root=I(this.root,e,this.comparator),this.root!==null&&(this.root.isRed=!1)}}const E={OnInsertConflictThrow:(t,e)=>{throw new Error("Value already in set")},OnInsertConflictReplace:(t,e)=>e,OnInsertConflictIgnore:(t,e)=>t};class p extends f{constructor(e){e||(e={}),e.strategy||(e.strategy=A),e.comparator||(e.comparator=function(r,i){return(r||0)-(i||0)}),e.onInsertConflict||(e.onInsertConflict=E.OnInsertConflictThrow),super(e)}}return p.ArrayStrategy=d,p.BinaryTreeStrategy=j,p.RedBlackTreeStrategy=A,Object.assign(p,E),p})})(T);var M=T.exports;const $=B(M),z=L({__proto__:null,default:$},[M]);export{z as s};
//# sourceMappingURL=sorted-set-eafa4773.js.map
