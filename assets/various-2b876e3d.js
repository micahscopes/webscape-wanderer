import{s as r,r as d,a as s,b as c,d as i}from"./main-986662a8.js";import"./worker-cb3871c2.js";window.addEventListener("DOMContentLoaded",()=>{r()});window.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#small-random"),e=d(7,9);t.graphData=e});window.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#dynamic-shape"),e=d(15,20);t.graphData=e,t.onTap(function(o){this.setAttribute("selected",o.detail?.info?.navId)});const n=["sphere","cone","box","icosahedron"];let a=0;setInterval(()=>{a=(a+1)%n.length,t.setAttribute("node-shape",n[a])},3e3)});window.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#large-dynamic");let e=d(50,100);t.graphData=e,setInterval(()=>{s(5,e),c(10,e),t.graphData={...e},console.log("Updated graph data:",e.nodes.length,"nodes,",e.links.length,"edges")},8e3)});window.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#focus-selection-decoupled"),e=i({nodes:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}],links:[{source:1,target:2},{source:1,target:3},{source:1,target:4},{source:5,target:1},{source:6,target:1},{source:2,target:6},{source:3,target:6}]});t.graphData=e;const n=[2,3,4,5,6];let a=0;setInterval(()=>{const o=n[a];t.focus=`node-${o}`,a=(a+1)%n.length},2e3)});window.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#heart-shaped"),e=d(20,30);t.graphData=e});
//# sourceMappingURL=various-2b876e3d.js.map
