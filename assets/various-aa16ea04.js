import{s as r,r as d,a as s,b as c,d as g}from"./main-186d6ddb.js";import"./worker-9ad80e94.js";window.addEventListener("DOMContentLoaded",()=>{r()});window.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("small-random"),e=d(7,9);t.graphData=e});window.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("large-dynamic");let e=d(50,100);t.graphData=e,setInterval(()=>{s(5,e),c(10,e),t.graphData={...e},console.log("Updated graph data:",e.nodes.length,"nodes,",e.links.length,"edges")},8e3)});window.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("focus-selection-decoupled"),e=g({nodes:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}],links:[{source:1,target:2},{source:1,target:3},{source:1,target:4},{source:5,target:1},{source:6,target:1},{source:2,target:6},{source:3,target:6}]});t.graphData=e;const n=[2,3,4,5,6];let a=0;setInterval(()=>{const o=n[a];t.focus=`node-${o}`,a=(a+1)%n.length},2e3)});window.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("heart-shaped"),e=d(20,30);t.graphData=e});
//# sourceMappingURL=various-aa16ea04.js.map
