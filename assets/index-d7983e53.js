(async()=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();const ja="146",Vt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Od=0,rl=1,Dd=2,nl=1,Rd=2,Wn=3,Qr=0,xt=1,vr=2,yr=0,en=1,il=2,al=3,ol=4,Id=5,tn=100,kd=101,Nd=102,sl=103,ll=104,zd=200,Bd=201,Fd=202,Ud=203,cl=204,ul=205,jd=206,Gd=207,Hd=208,Wd=209,Vd=210,qd=0,Xd=1,Yd=2,Ga=3,$d=4,Kd=5,Jd=6,Zd=7,Ei=0,Qd=1,ef=2,Zt=0,tf=1,rf=2,nf=3,af=4,of=5,hl=300,rn=301,nn=302,Ha=303,Wa=304,Ai=306,Va=1e3,kt=1001,qa=1002,yt=1003,dl=1004,fl=1005,Tt=1006,sf=1007,Ti=1008,Or=1009,lf=1010,cf=1011,pl=1012,uf=1013,Dr=1014,Rr=1015,Vn=1016,hf=1017,df=1018,an=1020,ff=1021,pf=1022,Nt=1023,mf=1024,gf=1025,Ir=1026,on=1027,vf=1028,yf=1029,_f=1030,bf=1031,xf=1033,Xa=33776,Ya=33777,$a=33778,Ka=33779,ml=35840,gl=35841,vl=35842,yl=35843,wf=36196,_l=37492,bl=37496,xl=37808,wl=37809,Ml=37810,Sl=37811,El=37812,Al=37813,Tl=37814,Cl=37815,Ll=37816,Pl=37817,Ol=37818,Dl=37819,Rl=37820,Il=37821,kl=36492,kr=3e3,Ke=3001,Mf=3200,Sf=3201,Ja=0,Ef=1,Qt="srgb",Nr="srgb-linear",Za=7680,Af=519,Nl=35044,zl="300 es",Qa=1035;class zt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eo=Math.PI/180,Bl=180/Math.PI;function qn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[r&255]+ut[r>>8&255]+ut[r>>16&255]+ut[r>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function Tf(r,e){return(r%e+e)%e}function to(r,e,t){return(1-t)*r+t*e}function Fl(r){return(r&r-1)===0&&r!==0}function ro(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],g=n[5],v=n[8],p=i[0],m=i[3],y=i[6],E=i[1],S=i[4],x=i[7],w=i[2],C=i[5],F=i[8];return a[0]=s*p+o*E+l*w,a[3]=s*m+o*S+l*C,a[6]=s*y+o*x+l*F,a[1]=c*p+u*E+h*w,a[4]=c*m+u*S+h*C,a[7]=c*y+u*x+h*F,a[2]=f*p+g*E+v*w,a[5]=f*m+g*S+v*C,a[8]=f*y+g*x+v*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+i*a*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*a,g=c*a-s*l,v=t*h+n*f+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*s)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*a-o*t)*p,e[6]=g*p,e[7]=(n*l-c*t)*p,e[8]=(s*t-n*a)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,a=i[0],s=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*a+n*l,i[3]=t*s+n*c,i[6]=t*o+n*u,i[1]=-n*a+t*l,i[4]=-n*s+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Ul(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Li(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const no={[Qt]:{[Nr]:zr},[Nr]:{[Qt]:Li}},Bt={legacyMode:!0,get workingColorSpace(){return Nr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(no[e]&&no[e][t]!==void 0){const n=no[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Ft={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function io(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Oi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nr){return this.r=e,this.g=t,this.b=n,Bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nr){if(e=Tf(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=io(s,a,e+1/3),this.g=io(s,a,e),this.b=io(s,a,e-1/3)}return Bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Qt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Bt.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Bt.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(a[1])/360,c=parseFloat(a[2])/100,u=parseFloat(a[3])/100;return n(a[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Bt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Qt){const n=jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Bt.fromWorkingColorSpace(Oi(this,tt),e),ht(tt.r*255,0,255)<<16^ht(tt.g*255,0,255)<<8^ht(tt.b*255,0,255)<<0}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nr){Bt.fromWorkingColorSpace(Oi(this,tt),t);const n=tt.r,i=tt.g,a=tt.b,s=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-n)/h+2;break;case a:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Nr){return Bt.fromWorkingColorSpace(Oi(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=Qt){return Bt.fromWorkingColorSpace(Oi(this,tt),e),e!==Qt?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ft),Ft.h+=e,Ft.s+=t,Ft.l+=n,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ft),e.getHSL(Pi);const n=to(Ft.h,Pi.h,t),i=to(Ft.s,Pi.s,t),a=to(Ft.l,Pi.l,t);return this.setHSL(n,i,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}je.NAMES=jl;let sn;class Gl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sn===void 0&&(sn=Xn("canvas")),sn.width=e.width,sn.height=e.height;const n=sn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xn("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=zr(a[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Hl{constructor(e=null){this.isSource=!0,this.uuid=qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(ao(i[s].image)):a.push(ao(i[s]))}else a=ao(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function ao(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;class Lt extends zt{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=kt,i=kt,a=Tt,s=Ti,o=Nt,l=Or,c=1,u=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=qn(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Lt.DEFAULT_IMAGE=null,Lt.DEFAULT_MAPPING=hl;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const s=e.elements,o=s[0],l=s[4],c=s[8],u=s[1],h=s[5],f=s[9],g=s[2],v=s[6],p=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-g)<.01&&Math.abs(f-v)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+g)<.1&&Math.abs(f+v)<.1&&Math.abs(o+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(o+1)/2,E=(h+1)/2,S=(p+1)/2,x=(l+u)/4,w=(c+g)/4,C=(f+v)/4;return y>E&&y>S?y<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(y),i=x/n,a=w/n):E>S?E<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(E),n=x/i,a=C/i):S<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(S),n=w/a,i=C/a),this.set(n,i,a,t),this}let m=Math.sqrt((v-f)*(v-f)+(c-g)*(c-g)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(v-f)/m,this.y=(c-g)/m,this.z=(u-l)/m,this.w=Math.acos((o+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _r extends zt{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wl extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lf extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ut{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=a[s+0],g=a[s+1],v=a[s+2],p=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=v,e[t+3]=p;return}if(h!==p||l!==f||c!==g||u!==v){let m=1-o;const y=l*f+c*g+u*v+h*p,E=y>=0?1:-1,S=1-y*y;if(S>Number.EPSILON){const w=Math.sqrt(S),C=Math.atan2(w,y*E);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}const x=o*E;if(l=l*m+f*x,c=c*m+g*x,u=u*m+v*x,h=h*m+p*x,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=a[s],f=a[s+1],g=a[s+2],v=a[s+3];return e[t]=o*v+u*h+l*g-c*f,e[t+1]=l*v+u*f+c*h-o*g,e[t+2]=c*v+u*g+o*f-l*h,e[t+3]=u*v-o*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(a/2),f=l(n/2),g=l(i/2),v=l(a/2);switch(s){case"XYZ":this._x=f*u*h+c*g*v,this._y=c*g*h-f*u*v,this._z=c*u*v+f*g*h,this._w=c*u*h-f*g*v;break;case"YXZ":this._x=f*u*h+c*g*v,this._y=c*g*h-f*u*v,this._z=c*u*v-f*g*h,this._w=c*u*h+f*g*v;break;case"ZXY":this._x=f*u*h-c*g*v,this._y=c*g*h+f*u*v,this._z=c*u*v+f*g*h,this._w=c*u*h-f*g*v;break;case"ZYX":this._x=f*u*h-c*g*v,this._y=c*g*h+f*u*v,this._z=c*u*v-f*g*h,this._w=c*u*h+f*g*v;break;case"YZX":this._x=f*u*h+c*g*v,this._y=c*g*h+f*u*v,this._z=c*u*v-f*g*h,this._w=c*u*h-f*g*v;break;case"XZY":this._x=f*u*h-c*g*v,this._y=c*g*h-f*u*v,this._z=c*u*v+f*g*h,this._w=c*u*h+f*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(a-c)*g,this._z=(s-i)*g}else if(n>o&&n>h){const g=2*Math.sqrt(1+n-o-h);this._w=(u-l)/g,this._x=.25*g,this._y=(i+s)/g,this._z=(a+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-n-h);this._w=(a-c)/g,this._x=(i+s)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-n-o);this._w=(s-i)/g,this._x=(a+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-a*l,this._y=i*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-a*i,h=l*i+a*n-s*t,f=-a*t-s*n-o*i;return this.x=c*l+f*-a+u*-o-h*-s,this.y=u*l+f*-s+h*-a-c*-o,this.z=h*l+f*-o+c*-s-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new Y,Vl=new Ut;class Br{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,a=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>a&&(a=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(a,s,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,a=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>a&&(a=u),h>s&&(s=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(a,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let s=0,o=a.count;s<o;s++)Fr.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Fr)}else n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox),so.applyMatrix4(e.matrixWorld),this.union(so);const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fr),Fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yn),Di.subVectors(this.max,Yn),ln.subVectors(e.a,Yn),cn.subVectors(e.b,Yn),un.subVectors(e.c,Yn),br.subVectors(cn,ln),xr.subVectors(un,cn),Ur.subVectors(ln,un);let t=[0,-br.z,br.y,0,-xr.z,xr.y,0,-Ur.z,Ur.y,br.z,0,-br.x,xr.z,0,-xr.x,Ur.z,0,-Ur.x,-br.y,br.x,0,-xr.y,xr.x,0,-Ur.y,Ur.x,0];return!lo(t,ln,cn,un,Di)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,ln,cn,un,Di))?!1:(Ri.crossVectors(br,xr),t=[Ri.x,Ri.y,Ri.z],lo(t,ln,cn,un,Di))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Fr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const er=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Fr=new Y,so=new Br,ln=new Y,cn=new Y,un=new Y,br=new Y,xr=new Y,Ur=new Y,Yn=new Y,Di=new Y,Ri=new Y,jr=new Y;function lo(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){jr.fromArray(r,a);const o=i.x*Math.abs(jr.x)+i.y*Math.abs(jr.y)+i.z*Math.abs(jr.z),l=e.dot(jr),c=t.dot(jr),u=n.dot(jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pf=new Br,$n=new Y,co=new Y;class Ii{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pf.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$n.subVectors(e,this.center);const t=$n.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($n,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($n.copy(e.center).add(co)),this.expandByPoint($n.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tr=new Y,uo=new Y,ki=new Y,wr=new Y,ho=new Y,Ni=new Y,fo=new Y;class po{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.direction).multiplyScalar(t).add(this.origin),tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uo.copy(e).add(t).multiplyScalar(.5),ki.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(uo);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ki),o=wr.dot(this.direction),l=-wr.dot(ki),c=wr.lengthSq(),u=Math.abs(1-s*s);let h,f,g,v;if(u>0)if(h=s*l-o,f=s*o-l,v=a*u,h>=0)if(f>=-v)if(f<=v){const p=1/u;h*=p,f*=p,g=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=a,h=Math.max(0,-(s*f+o)),g=-h*h+f*(f+2*l)+c;else f=-a,h=Math.max(0,-(s*f+o)),g=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-s*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),g=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-a,-l),a),g=f*(f+2*l)+c):(h=Math.max(0,-(s*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),g=-h*h+f*(f+2*l)+c);else f=s>0?-a:a,h=Math.max(0,-(s*f+o)),g=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ki).multiplyScalar(f).add(uo),g}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const n=tr.dot(this.direction),i=tr.dot(tr)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(a=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||a>i||((a>n||isNaN(n))&&(n=a),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,n,i,a){ho.subVectors(t,e),Ni.subVectors(n,e),fo.crossVectors(ho,Ni);let s=this.direction.dot(fo),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;wr.subVectors(this.origin,e);const l=o*this.direction.dot(Ni.crossVectors(wr,Ni));if(l<0)return null;const c=o*this.direction.dot(ho.cross(wr));if(c<0||l+c>s)return null;const u=-o*wr.dot(fo);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,a,s,o,l,c,u,h,f,g,v,p,m){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=a,y[5]=s,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=h,y[14]=f,y[3]=g,y[7]=v,y[11]=p,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hn.setFromMatrixColumn(e,0).length(),a=1/hn.setFromMatrixColumn(e,1).length(),s=1/hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=s*u,g=s*h,v=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=g+v*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=v+g*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,g=l*h,v=c*u,p=c*h;t[0]=f+p*o,t[4]=v*o-g,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=g*o-v,t[6]=p+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,g=l*h,v=c*u,p=c*h;t[0]=f-p*o,t[4]=-s*h,t[8]=v+g*o,t[1]=g+v*o,t[5]=s*u,t[9]=p-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,g=s*h,v=o*u,p=o*h;t[0]=l*u,t[4]=v*c-g,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=g*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,g=s*c,v=o*l,p=o*c;t[0]=l*u,t[4]=p-f*h,t[8]=v*h+g,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=g*h+v,t[10]=f-p*h}else if(e.order==="XZY"){const f=s*l,g=s*c,v=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=s*u,t[9]=g*h-v,t[2]=v*h-g,t[6]=o*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,Df)}lookAt(e,t,n){const i=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),Mr.crossVectors(n,Mt),Mr.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),Mr.crossVectors(n,Mt)),Mr.normalize(),zi.crossVectors(Mt,Mr),i[0]=Mr.x,i[4]=zi.x,i[8]=Mt.x,i[1]=Mr.y,i[5]=zi.y,i[9]=Mt.y,i[2]=Mr.z,i[6]=zi.z,i[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],g=n[13],v=n[2],p=n[6],m=n[10],y=n[14],E=n[3],S=n[7],x=n[11],w=n[15],C=i[0],F=i[4],A=i[8],D=i[12],G=i[1],N=i[5],Q=i[9],$=i[13],O=i[2],I=i[6],K=i[10],oe=i[14],ae=i[3],ee=i[7],U=i[11],q=i[15];return a[0]=s*C+o*G+l*O+c*ae,a[4]=s*F+o*N+l*I+c*ee,a[8]=s*A+o*Q+l*K+c*U,a[12]=s*D+o*$+l*oe+c*q,a[1]=u*C+h*G+f*O+g*ae,a[5]=u*F+h*N+f*I+g*ee,a[9]=u*A+h*Q+f*K+g*U,a[13]=u*D+h*$+f*oe+g*q,a[2]=v*C+p*G+m*O+y*ae,a[6]=v*F+p*N+m*I+y*ee,a[10]=v*A+p*Q+m*K+y*U,a[14]=v*D+p*$+m*oe+y*q,a[3]=E*C+S*G+x*O+w*ae,a[7]=E*F+S*N+x*I+w*ee,a[11]=E*A+S*Q+x*K+w*U,a[15]=E*D+S*$+x*oe+w*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],g=e[14],v=e[3],p=e[7],m=e[11],y=e[15];return v*(+a*l*h-i*c*h-a*o*f+n*c*f+i*o*g-n*l*g)+p*(+t*l*g-t*c*f+a*s*f-i*s*g+i*c*u-a*l*u)+m*(+t*c*h-t*o*g-a*s*h+n*s*g+a*o*u-n*c*u)+y*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],g=e[11],v=e[12],p=e[13],m=e[14],y=e[15],E=h*m*c-p*f*c+p*l*g-o*m*g-h*l*y+o*f*y,S=v*f*c-u*m*c-v*l*g+s*m*g+u*l*y-s*f*y,x=u*p*c-v*h*c+v*o*g-s*p*g-u*o*y+s*h*y,w=v*h*l-u*p*l-v*o*f+s*p*f+u*o*m-s*h*m,C=t*E+n*S+i*x+a*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=E*F,e[1]=(p*f*a-h*m*a-p*i*g+n*m*g+h*i*y-n*f*y)*F,e[2]=(o*m*a-p*l*a+p*i*c-n*m*c-o*i*y+n*l*y)*F,e[3]=(h*l*a-o*f*a-h*i*c+n*f*c+o*i*g-n*l*g)*F,e[4]=S*F,e[5]=(u*m*a-v*f*a+v*i*g-t*m*g-u*i*y+t*f*y)*F,e[6]=(v*l*a-s*m*a-v*i*c+t*m*c+s*i*y-t*l*y)*F,e[7]=(s*f*a-u*l*a+u*i*c-t*f*c-s*i*g+t*l*g)*F,e[8]=x*F,e[9]=(v*h*a-u*p*a-v*n*g+t*p*g+u*n*y-t*h*y)*F,e[10]=(s*p*a-v*o*a+v*n*c-t*p*c-s*n*y+t*o*y)*F,e[11]=(u*o*a-s*h*a-u*n*c+t*h*c+s*n*g-t*o*g)*F,e[12]=w*F,e[13]=(u*p*i-v*h*i+v*n*f-t*p*f-u*n*m+t*h*m)*F,e[14]=(v*o*i-s*p*i-v*n*l+t*p*l+s*n*m-t*o*m)*F,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,h=o+o,f=a*c,g=a*u,v=a*h,p=s*u,m=s*h,y=o*h,E=l*c,S=l*u,x=l*h,w=n.x,C=n.y,F=n.z;return i[0]=(1-(p+y))*w,i[1]=(g+x)*w,i[2]=(v-S)*w,i[3]=0,i[4]=(g-x)*C,i[5]=(1-(f+y))*C,i[6]=(m+E)*C,i[7]=0,i[8]=(v+S)*F,i[9]=(m-E)*F,i[10]=(1-(f+p))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=hn.set(i[0],i[1],i[2]).length();const s=hn.set(i[4],i[5],i[6]).length(),o=hn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],jt.copy(this);const l=1/a,c=1/s,u=1/o;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=c,jt.elements[5]*=c,jt.elements[6]*=c,jt.elements[8]*=u,jt.elements[9]*=u,jt.elements[10]*=u,t.setFromRotationMatrix(jt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,i,a,s){const o=this.elements,l=2*a/(t-e),c=2*a/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+a)/(s-a),g=-2*s*a/(s-a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,a,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-a),h=(t+e)*l,f=(n+i)*c,g=(s+a)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hn=new Y,jt=new Ye,Of=new Y(0,0,0),Df=new Y(1,1,1),Mr=new Y,zi=new Y,Mt=new Y,ql=new Ye,Xl=new Ut;class Kn{constructor(e=0,t=0,n=0,i=Kn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Kn.DefaultOrder="XYZ",Kn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rf=0;const Yl=new Y,dn=new Ut,rr=new Ye,Bi=new Y,Jn=new Y,If=new Y,kf=new Ut,$l=new Y(1,0,0),Kl=new Y(0,1,0),Jl=new Y(0,0,1),Nf={type:"added"},Zl={type:"removed"};class ct extends zt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DefaultUp.clone();const e=new Y,t=new Kn,n=new Ut,i=new Y(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ct}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=ct.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DefaultMatrixWorldAutoUpdate,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bi.copy(e):Bi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Jn,Bi,this.up):rr.lookAt(Bi,Jn,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),dn.setFromRotationMatrix(rr),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),g=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DefaultUp=new Y(0,1,0),ct.DefaultMatrixAutoUpdate=!0,ct.DefaultMatrixWorldAutoUpdate=!0;const Gt=new Y,nr=new Y,go=new Y,ir=new Y,fn=new Y,pn=new Y,Ql=new Y,vo=new Y,yo=new Y,_o=new Y;class ar{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Gt.subVectors(i,t),nr.subVectors(n,t),go.subVectors(e,t);const s=Gt.dot(Gt),o=Gt.dot(nr),l=Gt.dot(go),c=nr.dot(nr),u=nr.dot(go),h=s*c-o*o;if(h===0)return a.set(-2,-1,-1);const f=1/h,g=(c*l-o*u)*f,v=(s*u-o*l)*f;return a.set(1-g-v,v,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ir),ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getUV(e,t,n,i,a,s,o,l){return this.getBarycoord(e,t,n,i,ir),l.set(0,0),l.addScaledVector(a,ir.x),l.addScaledVector(s,ir.y),l.addScaledVector(o,ir.z),l}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),nr.subVectors(e,t),Gt.cross(nr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Gt.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return ar.getUV(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let s,o;fn.subVectors(i,n),pn.subVectors(a,n),vo.subVectors(e,n);const l=fn.dot(vo),c=pn.dot(vo);if(l<=0&&c<=0)return t.copy(n);yo.subVectors(e,i);const u=fn.dot(yo),h=pn.dot(yo);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(fn,s);_o.subVectors(e,a);const g=fn.dot(_o),v=pn.dot(_o);if(v>=0&&g<=v)return t.copy(a);const p=g*c-l*v;if(p<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(pn,o);const m=u*v-g*h;if(m<=0&&h-u>=0&&g-v>=0)return Ql.subVectors(a,i),o=(h-u)/(h-u+(g-v)),t.copy(i).addScaledVector(Ql,o);const y=1/(m+p+f);return s=p*y,o=f*y,t.copy(n).addScaledVector(fn,s).addScaledVector(pn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zf=0;class Gr extends zt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=en,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=cl,this.blendDst=ul,this.blendEquation=tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==en&&(n.blending=this.blending),this.side!==Qr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fi extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ei,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new Y,Ui=new we;class Ht{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Nl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix3(e),this.setXY(t,Ui.x,Ui.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ec extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tc extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bf=0;const Pt=new Ye,bo=new ct,mn=new Y,St=new Br,Zn=new Br,ot=new Y;class _t extends zt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ul(e)?tc:ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ct().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];St.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Zn.setFromBufferAttribute(o),this.morphTargetsRelative?(ot.addVectors(St.min,Zn.min),St.expandByPoint(ot),ot.addVectors(St.max,Zn.max),St.expandByPoint(ot)):(St.expandByPoint(Zn.min),St.expandByPoint(Zn.max))}St.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)ot.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ot.fromBufferAttribute(o,c),l&&(mn.fromBufferAttribute(e,c),ot.add(mn)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let G=0;G<o;G++)c[G]=new Y,u[G]=new Y;const h=new Y,f=new Y,g=new Y,v=new we,p=new we,m=new we,y=new Y,E=new Y;function S(G,N,Q){h.fromArray(i,G*3),f.fromArray(i,N*3),g.fromArray(i,Q*3),v.fromArray(s,G*2),p.fromArray(s,N*2),m.fromArray(s,Q*2),f.sub(h),g.sub(h),p.sub(v),m.sub(v);const $=1/(p.x*m.y-m.x*p.y);isFinite($)&&(y.copy(f).multiplyScalar(m.y).addScaledVector(g,-p.y).multiplyScalar($),E.copy(g).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar($),c[G].add(y),c[N].add(y),c[Q].add(y),u[G].add(E),u[N].add(E),u[Q].add(E))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let G=0,N=x.length;G<N;++G){const Q=x[G],$=Q.start,O=Q.count;for(let I=$,K=$+O;I<K;I+=3)S(n[I+0],n[I+1],n[I+2])}const w=new Y,C=new Y,F=new Y,A=new Y;function D(G){F.fromArray(a,G*3),A.copy(F);const N=c[G];w.copy(N),w.sub(F.multiplyScalar(F.dot(N))).normalize(),C.crossVectors(A,N);const Q=C.dot(u[G])<0?-1:1;l[G*4]=w.x,l[G*4+1]=w.y,l[G*4+2]=w.z,l[G*4+3]=Q}for(let G=0,N=x.length;G<N;++G){const Q=x[G],$=Q.start,O=Q.count;for(let I=$,K=$+O;I<K;I+=3)D(n[I+0]),D(n[I+1]),D(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const i=new Y,a=new Y,s=new Y,o=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,g=e.count;f<g;f+=3){const v=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),u.subVectors(s,a),h.subVectors(i,a),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)i.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,a),h.subVectors(i,a),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let g=0,v=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?g=l[p]*o.data.stride+o.offset:g=l[p]*u;for(let y=0;y<u;y++)f[v++]=c[g++]}return new Ht(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],g=e(f,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(i[l]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let f=0,g=h.length;f<g;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new Ye,gn=new po,xo=new Ii,Sr=new Y,Er=new Y,Ar=new Y,wo=new Y,Mo=new Y,So=new Y,ji=new Y,Gi=new Y,Hi=new Y,Wi=new we,Vi=new we,qi=new we,Eo=new Y,Xi=new Y;class Et extends ct{constructor(e=new _t,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(a),e.ray.intersectsSphere(xo)===!1)||(rc.copy(a).invert(),gn.copy(e.ray).applyMatrix4(rc),n.boundingBox!==null&&gn.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,g=n.groups,v=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,m=g.length;p<m;p++){const y=g[p],E=i[y.materialIndex],S=Math.max(y.start,v.start),x=Math.min(o.count,Math.min(y.start+y.count,v.start+v.count));for(let w=S,C=x;w<C;w+=3){const F=o.getX(w),A=o.getX(w+1),D=o.getX(w+2);s=Yi(this,E,e,gn,l,c,u,h,f,F,A,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const p=Math.max(0,v.start),m=Math.min(o.count,v.start+v.count);for(let y=p,E=m;y<E;y+=3){const S=o.getX(y),x=o.getX(y+1),w=o.getX(y+2);s=Yi(this,i,e,gn,l,c,u,h,f,S,x,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,m=g.length;p<m;p++){const y=g[p],E=i[y.materialIndex],S=Math.max(y.start,v.start),x=Math.min(l.count,Math.min(y.start+y.count,v.start+v.count));for(let w=S,C=x;w<C;w+=3){const F=w,A=w+1,D=w+2;s=Yi(this,E,e,gn,l,c,u,h,f,F,A,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const p=Math.max(0,v.start),m=Math.min(l.count,v.start+v.count);for(let y=p,E=m;y<E;y+=3){const S=y,x=y+1,w=y+2;s=Yi(this,i,e,gn,l,c,u,h,f,S,x,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function Ff(r,e,t,n,i,a,s,o){let l;if(e.side===xt?l=n.intersectTriangle(s,a,i,!0,o):l=n.intersectTriangle(i,a,s,e.side!==vr,o),l===null)return null;Xi.copy(o),Xi.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Xi);return c<t.near||c>t.far?null:{distance:c,point:Xi.clone(),object:r}}function Yi(r,e,t,n,i,a,s,o,l,c,u,h){Sr.fromBufferAttribute(i,c),Er.fromBufferAttribute(i,u),Ar.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(a&&f){ji.set(0,0,0),Gi.set(0,0,0),Hi.set(0,0,0);for(let v=0,p=a.length;v<p;v++){const m=f[v],y=a[v];m!==0&&(wo.fromBufferAttribute(y,c),Mo.fromBufferAttribute(y,u),So.fromBufferAttribute(y,h),s?(ji.addScaledVector(wo,m),Gi.addScaledVector(Mo,m),Hi.addScaledVector(So,m)):(ji.addScaledVector(wo.sub(Sr),m),Gi.addScaledVector(Mo.sub(Er),m),Hi.addScaledVector(So.sub(Ar),m)))}Sr.add(ji),Er.add(Gi),Ar.add(Hi)}r.isSkinnedMesh&&(r.boneTransform(c,Sr),r.boneTransform(u,Er),r.boneTransform(h,Ar));const g=Ff(r,e,t,n,Sr,Er,Ar,Eo);if(g){o&&(Wi.fromBufferAttribute(o,c),Vi.fromBufferAttribute(o,u),qi.fromBufferAttribute(o,h),g.uv=ar.getUV(Eo,Sr,Er,Ar,Wi,Vi,qi,new we)),l&&(Wi.fromBufferAttribute(l,c),Vi.fromBufferAttribute(l,u),qi.fromBufferAttribute(l,h),g.uv2=ar.getUV(Eo,Sr,Er,Ar,Wi,Vi,qi,new we));const v={a:c,b:u,c:h,normal:new Y,materialIndex:0};ar.getNormal(Sr,Er,Ar,v.normal),g.face=v}return g}class vn extends _t{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,g=0;v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,i,s,2),v("x","z","y",1,-1,e,n,-t,i,s,3),v("x","y","z",1,-1,e,t,n,i,a,4),v("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function v(p,m,y,E,S,x,w,C,F,A,D){const G=x/F,N=w/A,Q=x/2,$=w/2,O=C/2,I=F+1,K=A+1;let oe=0,ae=0;const ee=new Y;for(let U=0;U<K;U++){const q=U*N-$;for(let z=0;z<I;z++){const k=z*G-Q;ee[p]=k*E,ee[m]=q*S,ee[y]=O,c.push(ee.x,ee.y,ee.z),ee[p]=0,ee[m]=0,ee[y]=C>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(z/F),h.push(1-U/A),oe+=1}}for(let U=0;U<A;U++)for(let q=0;q<F;q++){const z=f+q+I*U,k=f+q+I*(U+1),Z=f+(q+1)+I*(U+1),se=f+(q+1)+I*U;l.push(z,k,se),l.push(k,Z,se),ae+=6}o.addGroup(g,ae,D),g+=ae,f+=oe}}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pt(r){const e={};for(let t=0;t<r.length;t++){const n=yn(r[t]);for(const i in n)e[i]=n[i]}return e}function Uf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const nc={clone:yn,merge:pt};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yn(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ic extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends ic{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _n=90,bn=1;class Hf extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ot(_n,bn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new Y(1,0,0)),this.add(i);const a=new Ot(_n,bn,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Y(-1,0,0)),this.add(a);const s=new Ot(_n,bn,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new Y(0,1,0)),this.add(s);const o=new Ot(_n,bn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new Y(0,-1,0)),this.add(o);const l=new Ot(_n,bn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new Y(0,0,1)),this.add(l);const c=new Ot(_n,bn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new Y(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,a,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Zt,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class ac extends Lt{constructor(e,t,n,i,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:rn,super(e,t,n,i,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wf extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ac(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vn(5,5,5),a=new or({name:"CubemapFromEquirect",uniforms:yn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:yr});a.uniforms.tEquirect.value=t;const s=new Et(i,a),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Tt),new Hf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}}const Ao=new Y,Vf=new Y,qf=new Ct;class Tr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ao.subVectors(n,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qf.getNormalMatrix(e),i=this.coplanarPoint(Ao).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xn=new Ii,$i=new Y;class To{constructor(e=new Tr,t=new Tr,n=new Tr,i=new Tr,a=new Tr,s=new Tr){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],a=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],g=n[9],v=n[10],p=n[11],m=n[12],y=n[13],E=n[14],S=n[15];return t[0].setComponents(o-i,h-l,p-f,S-m).normalize(),t[1].setComponents(o+i,h+l,p+f,S+m).normalize(),t[2].setComponents(o+a,h+c,p+g,S+y).normalize(),t[3].setComponents(o-a,h-c,p-g,S-y).normalize(),t[4].setComponents(o-s,h-u,p-v,S-E).normalize(),t[5].setComponents(o+s,h+u,p+v,S+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(xn)}intersectsSprite(e){return xn.center.set(0,0,0),xn.radius=.7071067811865476,xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($i.x=i.normal.x>0?e.max.x:e.min.x,$i.y=i.normal.y>0?e.max.y:e.min.y,$i.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let r=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Xf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(h instanceof Int16Array)v=5122;else if(h instanceof Uint32Array)v=5125;else if(h instanceof Int32Array)v=5124;else if(h instanceof Int8Array)v=5120;else if(h instanceof Uint8Array)v=5121;else if(h instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,h){const f=u.array,g=u.updateRange;r.bindBuffer(h,c),g.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):r.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(a(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class Co extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,g=[],v=[],p=[],m=[];for(let y=0;y<u;y++){const E=y*f-s;for(let S=0;S<c;S++){const x=S*h-a;v.push(x,-E,0),p.push(0,0,1),m.push(S/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let E=0;E<o;E++){const S=E+c*y,x=E+c*(y+1),w=E+1+c*(y+1),C=E+1+c*y;g.push(S,x,C),g.push(x,w,C)}this.setIndex(g),this.setAttribute("position",new Ze(v,3)),this.setAttribute("normal",new Ze(p,3)),this.setAttribute("uv",new Ze(m,2))}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep="vec3 transformed = vec3( position );",tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
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
}`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
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
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Np=`uniform bool receiveShadow;
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Gp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
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
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,lm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
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
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Um=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,eg=`#define DISTANCE
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
}`,tg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ig=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define LAMBERT
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
}`,ug=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,fg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,yg=`#define TOON
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
}`,_g=`#define TOON
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
}`,bg=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Sg=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:Yf,alphamap_pars_fragment:$f,alphatest_fragment:Kf,alphatest_pars_fragment:Jf,aomap_fragment:Zf,aomap_pars_fragment:Qf,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:rp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:sp,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:up,color_pars_vertex:hp,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:vp,emissivemap_fragment:yp,emissivemap_pars_fragment:_p,encodings_fragment:bp,encodings_pars_fragment:xp,envmap_fragment:wp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:zp,envmap_vertex:Ap,fog_vertex:Tp,fog_pars_vertex:Cp,fog_fragment:Lp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Op,lightmap_fragment:Dp,lightmap_pars_fragment:Rp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:kp,lights_pars_begin:Np,lights_toon_fragment:Bp,lights_toon_pars_fragment:Fp,lights_phong_fragment:Up,lights_phong_pars_fragment:jp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Wp,lights_fragment_maps:Vp,lights_fragment_end:qp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Kp,map_fragment:Jp,map_pars_fragment:Zp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:rm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:sm,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:um,normal_vertex:hm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,output_fragment:vm,packing:ym,premultiplied_alpha_fragment:_m,project_vertex:bm,dithering_fragment:xm,dithering_pars_fragment:wm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Am,shadowmap_vertex:Tm,shadowmask_pars_fragment:Cm,skinbase_vertex:Lm,skinning_pars_vertex:Pm,skinning_vertex:Om,skinnormal_vertex:Dm,specularmap_fragment:Rm,specularmap_pars_fragment:Im,tonemapping_fragment:km,tonemapping_pars_fragment:Nm,transmission_fragment:zm,transmission_pars_fragment:Bm,uv_pars_fragment:Fm,uv_pars_vertex:Um,uv_vertex:jm,uv2_pars_fragment:Gm,uv2_pars_vertex:Hm,uv2_vertex:Wm,worldpos_vertex:Vm,background_vert:qm,background_frag:Xm,backgroundCube_vert:Ym,backgroundCube_frag:$m,cube_vert:Km,cube_frag:Jm,depth_vert:Zm,depth_frag:Qm,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:rg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:sg,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:ug,meshmatcap_frag:hg,meshnormal_vert:dg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:vg,meshtoon_vert:yg,meshtoon_frag:_g,points_vert:bg,points_frag:xg,shadow_vert:wg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:Eg},be={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},qt={basic:{uniforms:pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:pt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:pt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:pt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:pt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:pt([be.points,be.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:pt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:pt([be.common,be.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:pt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:pt([be.sprite,be.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:pt([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:pt([be.lights,be.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};qt.physical={uniforms:pt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function Ag(r,e,t,n,i,a,s){const o=new je(0);let l=a===!0?0:1,c,u,h=null,f=0,g=null;function v(m,y){let E=!1,S=y.isScene===!0?y.background:null;S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S));const x=r.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?p(o,l):S&&S.isColor&&(p(S,1),E=!0),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ai)?(u===void 0&&(u=new Et(new vn(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:yn(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,F,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,(h!==S||f!==S.version||g!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,g=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Et(new Co(2,2),new or({name:"BackgroundMaterial",uniforms:yn(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||g!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,g=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,y){n.buffers.color.setClear(m.r,m.g,m.b,y,s)}return{getClearColor:function(){return o},setClearColor:function(m,y=1){o.set(m),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:v}}function Tg(r,e,t,n){const i=r.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,o={},l=m(null);let c=l,u=!1;function h(O,I,K,oe,ae){let ee=!1;if(s){const U=p(oe,K,I);c!==U&&(c=U,g(c.object)),ee=y(O,oe,K,ae),ee&&E(O,oe,K,ae)}else{const U=I.wireframe===!0;(c.geometry!==oe.id||c.program!==K.id||c.wireframe!==U)&&(c.geometry=oe.id,c.program=K.id,c.wireframe=U,ee=!0)}ae!==null&&t.update(ae,34963),(ee||u)&&(u=!1,A(O,I,K,oe),ae!==null&&r.bindBuffer(34963,t.get(ae).buffer))}function f(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function g(O){return n.isWebGL2?r.bindVertexArray(O):a.bindVertexArrayOES(O)}function v(O){return n.isWebGL2?r.deleteVertexArray(O):a.deleteVertexArrayOES(O)}function p(O,I,K){const oe=K.wireframe===!0;let ae=o[O.id];ae===void 0&&(ae={},o[O.id]=ae);let ee=ae[I.id];ee===void 0&&(ee={},ae[I.id]=ee);let U=ee[oe];return U===void 0&&(U=m(f()),ee[oe]=U),U}function m(O){const I=[],K=[],oe=[];for(let ae=0;ae<i;ae++)I[ae]=0,K[ae]=0,oe[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:K,attributeDivisors:oe,object:O,attributes:{},index:null}}function y(O,I,K,oe){const ae=c.attributes,ee=I.attributes;let U=0;const q=K.getAttributes();for(const z in q)if(q[z].location>=0){const k=ae[z];let Z=ee[z];if(Z===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;U++}return c.attributesNum!==U||c.index!==oe}function E(O,I,K,oe){const ae={},ee=I.attributes;let U=0;const q=K.getAttributes();for(const z in q)if(q[z].location>=0){let k=ee[z];k===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));const Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),ae[z]=Z,U++}c.attributes=ae,c.attributesNum=U,c.index=oe}function S(){const O=c.newAttributes;for(let I=0,K=O.length;I<K;I++)O[I]=0}function x(O){w(O,0)}function w(O,I){const K=c.newAttributes,oe=c.enabledAttributes,ae=c.attributeDivisors;K[O]=1,oe[O]===0&&(r.enableVertexAttribArray(O),oe[O]=1),ae[O]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,I),ae[O]=I)}function C(){const O=c.newAttributes,I=c.enabledAttributes;for(let K=0,oe=I.length;K<oe;K++)I[K]!==O[K]&&(r.disableVertexAttribArray(K),I[K]=0)}function F(O,I,K,oe,ae,ee){n.isWebGL2===!0&&(K===5124||K===5125)?r.vertexAttribIPointer(O,I,K,ae,ee):r.vertexAttribPointer(O,I,K,oe,ae,ee)}function A(O,I,K,oe){if(n.isWebGL2===!1&&(O.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const ae=oe.attributes,ee=K.getAttributes(),U=I.defaultAttributeValues;for(const q in ee){const z=ee[q];if(z.location>=0){let k=ae[q];if(k===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),k!==void 0){const Z=k.normalized,se=k.itemSize,B=t.get(k);if(B===void 0)continue;const V=B.buffer,ne=B.type,ue=B.bytesPerElement;if(k.isInterleavedBufferAttribute){const he=k.data,Me=he.stride,_e=k.offset;if(he.isInstancedInterleavedBuffer){for(let T=0;T<z.locationSize;T++)w(z.location+T,he.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let T=0;T<z.locationSize;T++)x(z.location+T);r.bindBuffer(34962,V);for(let T=0;T<z.locationSize;T++)F(z.location+T,se/z.locationSize,ne,Z,Me*ue,(_e+se/z.locationSize*T)*ue)}else{if(k.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)w(z.location+he,k.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let he=0;he<z.locationSize;he++)x(z.location+he);r.bindBuffer(34962,V);for(let he=0;he<z.locationSize;he++)F(z.location+he,se/z.locationSize,ne,Z,se*ue,se/z.locationSize*he*ue)}}else if(U!==void 0){const Z=U[q];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(z.location,Z);break;case 3:r.vertexAttrib3fv(z.location,Z);break;case 4:r.vertexAttrib4fv(z.location,Z);break;default:r.vertexAttrib1fv(z.location,Z)}}}}C()}function D(){Q();for(const O in o){const I=o[O];for(const K in I){const oe=I[K];for(const ae in oe)v(oe[ae].object),delete oe[ae];delete I[K]}delete o[O]}}function G(O){if(o[O.id]===void 0)return;const I=o[O.id];for(const K in I){const oe=I[K];for(const ae in oe)v(oe[ae].object),delete oe[ae];delete I[K]}delete o[O.id]}function N(O){for(const I in o){const K=o[I];if(K[O.id]===void 0)continue;const oe=K[O.id];for(const ae in oe)v(oe[ae].object),delete oe[ae];delete K[O.id]}}function Q(){$(),u=!0,c!==l&&(c=l,g(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:$,dispose:D,releaseStatesOfGeometry:G,releaseStatesOfProgram:N,initAttributes:S,enableAttribute:x,disableUnusedAttributes:C}}function Cg(r,e,t,n){const i=n.isWebGL2;let a;function s(c){a=c}function o(c,u){r.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,h){if(h===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](a,c,u,h),t.update(u,a,h)}this.setMode=s,this.render=o,this.renderInstances=l}function Lg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),g=r.getParameter(3379),v=r.getParameter(34076),p=r.getParameter(34921),m=r.getParameter(36347),y=r.getParameter(36348),E=r.getParameter(36349),S=f>0,x=s||e.has("OES_texture_float"),w=S&&x,C=s?r.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:C}}function Pg(r){const e=this;let t=null,n=0,i=!1,a=!1;const s=new Tr,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,g){const v=h.length!==0||f||n!==0||i;return i=f,t=u(h,g,0),n=h.length,v},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,c()},this.setState=function(h,f,g){const v=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,y=r.get(h);if(!i||v===null||v.length===0||a&&!m)a?u(null):c();else{const E=a?0:n,S=E*4;let x=y.clippingState||null;l.value=x,x=u(v,f,S,g);for(let w=0;w!==S;++w)x[w]=t[w];y.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,g,v){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,v!==!0||m===null){const y=g+p*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<y)&&(m=new Float32Array(y));for(let S=0,x=g;S!==p;++S,x+=4)s.copy(h[S]).applyMatrix4(E,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Og(r){let e=new WeakMap;function t(s,o){return o===Ha?s.mapping=rn:o===Wa&&(s.mapping=nn),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Ha||o===Wa)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Wf(l.height/2);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Ki extends ic{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wn=4,sc=[.125,.215,.35,.446,.526,.582],Hr=20,Lo=new Ki,lc=new je;let Po=null;const Wr=(1+Math.sqrt(5))/2,Mn=1/Wr,cc=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Wr,Mn),new Y(0,Wr,-Mn),new Y(Mn,0,Wr),new Y(-Mn,0,Wr),new Y(Wr,Mn,0),new Y(-Wr,Mn,0)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Po=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po),e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rn||e.mapping===nn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Vn,format:Nt,encoding:kr,depthBuffer:!1},i=hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(a)),this._blurMaterial=Rg(a,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(lc),l.toneMapping=Zt,l.autoClear=!1;const h=new Fi({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),f=new Et(new vn,h);let g=!1;const v=e.background;v?v.isColor&&(h.color.copy(v),e.background=null,g=!0):(h.color.copy(lc),g=!0);for(let p=0;p<6;p++){const m=p%3;m===0?(a.up.set(0,s[p],0),a.lookAt(o[p],0,0)):m===1?(a.up.set(0,0,s[p]),a.lookAt(0,o[p],0)):(a.up.set(0,s[p],0),a.lookAt(0,0,o[p]));const y=this._cubeSize;Ji(i,m*y,p>2?y:0,y,y),l.setRenderTarget(i),g&&l.render(f,a),l.render(e,a)}f.geometry.dispose(),f.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rn||e.mapping===nn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new Et(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ji(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=cc[(i-1)%cc.length];this._blur(e,i-1,i,a,s)}t.autoClear=n}_blur(e,t,n,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",a),this._halfBlur(s,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Et(this._lodPlanes[i],c),f=c.uniforms,g=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Hr-1),p=a/v,m=isFinite(a)?1+Math.floor(u*p):Hr;m>Hr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);const y=[];let E=0;for(let F=0;F<Hr;++F){const A=F/p,D=Math.exp(-A*A/2);y.push(D),F===0?E+=D:F<m&&(E+=2*D)}for(let F=0;F<y.length;F++)y[F]=y[F]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=y,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-n;const x=this._sizeLods[i],w=3*x*(i>S-wn?i-S+wn:0),C=4*(this._cubeSize-x);Ji(t,w,C,3*x,2*x),l.setRenderTarget(t),l.render(h,Lo)}}function Dg(r){const e=[],t=[],n=[];let i=r;const a=r-wn+1+sc.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>r-wn?l=sc[s-r+wn-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,p=3,m=2,y=1,E=new Float32Array(p*v*g),S=new Float32Array(m*v*g),x=new Float32Array(y*v*g);for(let C=0;C<g;C++){const F=C%3*2/3-1,A=C>2?0:-1,D=[F,A,0,F+2/3,A,0,F+2/3,A+1,0,F,A,0,F+2/3,A+1,0,F,A+1,0];E.set(D,p*v*C),S.set(f,m*v*C);const G=[C,C,C,C,C,C];x.set(G,y*v*C)}const w=new _t;w.setAttribute("position",new Ht(E,p)),w.setAttribute("uv",new Ht(S,m)),w.setAttribute("faceIndex",new Ht(x,y)),e.push(w),i>wn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hc(r,e,t){const n=new _r(r,e,t);return n.texture.mapping=Ai,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rg(r,e,t){const n=new Float32Array(Hr),i=new Y(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function dc(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function fc(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function Ig(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ha||l===Wa,u=l===rn||l===nn;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new uc(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new uc(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function kg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ng(r,e,t,n){const i={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",s),delete i[f.id];const g=a.get(f);g&&(e.remove(g),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],34962);const g=h.morphAttributes;for(const v in g){const p=g[v];for(let m=0,y=p.length;m<y;m++)e.update(p[m],34962)}}function c(h){const f=[],g=h.index,v=h.attributes.position;let p=0;if(g!==null){const E=g.array;p=g.version;for(let S=0,x=E.length;S<x;S+=3){const w=E[S+0],C=E[S+1],F=E[S+2];f.push(w,C,C,F,F,w)}}else{const E=v.array;p=v.version;for(let S=0,x=E.length/3-1;S<x;S+=3){const w=S+0,C=S+1,F=S+2;f.push(w,C,C,F,F,w)}}const m=new(Ul(f)?tc:ec)(f,1);m.version=p;const y=a.get(h);y&&e.remove(y),a.set(h,m)}function u(h){const f=a.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function zg(r,e,t,n){const i=n.isWebGL2;let a;function s(f){a=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,g){r.drawElements(a,g,o,f*l),t.update(g,a,1)}function h(f,g,v){if(v===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](a,g,o,f*l,v),t.update(g,a,v)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Bg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(a/3);break;case 1:t.lines+=o*(a/2);break;case 3:t.lines+=o*(a-1);break;case 2:t.lines+=o*a;break;case 0:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fg(r,e){return r[0]-e[0]}function Ug(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jg(r,e,t){const n={},i=new Float32Array(8),a=new WeakMap,s=new at,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const g=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=v!==void 0?v.length:0;let m=a.get(u);if(m===void 0||m.count!==p){let S=function(){O.dispose(),a.delete(u),u.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let G=0;x===!0&&(G=1),w===!0&&(G=2),C===!0&&(G=3);let N=u.attributes.position.count*G,Q=1;N>e.maxTextureSize&&(Q=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const $=new Float32Array(N*Q*4*p),O=new Wl($,N,Q,p);O.type=Rr,O.needsUpdate=!0;const I=G*4;for(let K=0;K<p;K++){const oe=F[K],ae=A[K],ee=D[K],U=N*Q*4*K;for(let q=0;q<oe.count;q++){const z=q*I;x===!0&&(s.fromBufferAttribute(oe,q),$[U+z+0]=s.x,$[U+z+1]=s.y,$[U+z+2]=s.z,$[U+z+3]=0),w===!0&&(s.fromBufferAttribute(ae,q),$[U+z+4]=s.x,$[U+z+5]=s.y,$[U+z+6]=s.z,$[U+z+7]=0),C===!0&&(s.fromBufferAttribute(ee,q),$[U+z+8]=s.x,$[U+z+9]=s.y,$[U+z+10]=s.z,$[U+z+11]=ee.itemSize===4?s.w:1)}}m={count:p,texture:O,size:new we(N,Q)},a.set(u,m),u.addEventListener("dispose",S)}let y=0;for(let S=0;S<g.length;S++)y+=g[S];const E=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",g),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const v=g===void 0?0:g.length;let p=n[u.id];if(p===void 0||p.length!==v){p=[];for(let x=0;x<v;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<v;x++){const w=p[x];w[0]=x,w[1]=g[x]}p.sort(Ug);for(let x=0;x<8;x++)x<v&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Fg);const m=u.morphAttributes.position,y=u.morphAttributes.normal;let E=0;for(let x=0;x<8;x++){const w=o[x],C=w[0],F=w[1];C!==Number.MAX_SAFE_INTEGER&&F?(m&&u.getAttribute("morphTarget"+x)!==m[C]&&u.setAttribute("morphTarget"+x,m[C]),y&&u.getAttribute("morphNormal"+x)!==y[C]&&u.setAttribute("morphNormal"+x,y[C]),i[x]=F,E+=F):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),y&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const S=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Gg(r,e,t,n){let i=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const pc=new Lt,mc=new Wl,gc=new Lf,vc=new ac,yc=[],_c=[],bc=new Float32Array(16),xc=new Float32Array(9),wc=new Float32Array(4);function Sn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let a=yc[i];if(a===void 0&&(a=new Float32Array(i),yc[i]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zi(r,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Hg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Wg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2fv(this.addr,e),nt(t,e)}}function Vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;r.uniform3fv(this.addr,e),nt(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4fv(this.addr,e),nt(t,e)}}function Xg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(rt(t,n))return;wc.set(n),r.uniformMatrix2fv(this.addr,!1,wc),nt(t,n)}}function Yg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(rt(t,n))return;xc.set(n),r.uniformMatrix3fv(this.addr,!1,xc),nt(t,n)}}function $g(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(rt(t,n))return;bc.set(n),r.uniformMatrix4fv(this.addr,!1,bc),nt(t,n)}}function Kg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2iv(this.addr,e),nt(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;r.uniform3iv(this.addr,e),nt(t,e)}}function Qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4iv(this.addr,e),nt(t,e)}}function e0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2uiv(this.addr,e),nt(t,e)}}function r0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;r.uniform3uiv(this.addr,e),nt(t,e)}}function n0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4uiv(this.addr,e),nt(t,e)}}function i0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||pc,i)}function a0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gc,i)}function o0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vc,i)}function s0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mc,i)}function l0(r){switch(r){case 5126:return Hg;case 35664:return Wg;case 35665:return Vg;case 35666:return qg;case 35674:return Xg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Jg;case 35668:case 35672:return Zg;case 35669:case 35673:return Qg;case 5125:return e0;case 36294:return t0;case 36295:return r0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return s0}}function c0(r,e){r.uniform1fv(this.addr,e)}function u0(r,e){const t=Sn(e,this.size,2);r.uniform2fv(this.addr,t)}function h0(r,e){const t=Sn(e,this.size,3);r.uniform3fv(this.addr,t)}function d0(r,e){const t=Sn(e,this.size,4);r.uniform4fv(this.addr,t)}function f0(r,e){const t=Sn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function p0(r,e){const t=Sn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function m0(r,e){const t=Sn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function g0(r,e){r.uniform1iv(this.addr,e)}function v0(r,e){r.uniform2iv(this.addr,e)}function y0(r,e){r.uniform3iv(this.addr,e)}function _0(r,e){r.uniform4iv(this.addr,e)}function b0(r,e){r.uniform1uiv(this.addr,e)}function x0(r,e){r.uniform2uiv(this.addr,e)}function w0(r,e){r.uniform3uiv(this.addr,e)}function M0(r,e){r.uniform4uiv(this.addr,e)}function S0(r,e,t){const n=this.cache,i=e.length,a=Zi(t,i);rt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||pc,a[s])}function E0(r,e,t){const n=this.cache,i=e.length,a=Zi(t,i);rt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||gc,a[s])}function A0(r,e,t){const n=this.cache,i=e.length,a=Zi(t,i);rt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||vc,a[s])}function T0(r,e,t){const n=this.cache,i=e.length,a=Zi(t,i);rt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||mc,a[s])}function C0(r){switch(r){case 5126:return c0;case 35664:return u0;case 35665:return h0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return _0;case 5125:return b0;case 36294:return x0;case 36295:return w0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return T0}}class L0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=l0(t.type)}}class P0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=C0(t.type)}}class O0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Do=/(\w+)(\])?(\[|\.)?/g;function Mc(r,e){r.seq.push(e),r.map[e.id]=e}function D0(r,e,t){const n=r.name,i=n.length;for(Do.lastIndex=0;;){const a=Do.exec(n),s=Do.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Mc(t,c===void 0?new L0(o,r,e):new P0(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new O0(o),Mc(t,u)),t=u}}}class Qi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),s=e.getUniformLocation(t,a.name);D0(a,s,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Sc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let R0=0;function I0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function k0(r){switch(r){case kr:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ec(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+I0(r.getShaderSource(e),s)}else return i}function N0(r,e){const t=k0(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function z0(r,e){let t;switch(e){case tf:t="Linear";break;case rf:t="Reinhard";break;case nf:t="OptimizedCineon";break;case af:t="ACESFilmic";break;case of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function B0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qn).join(`
`)}function F0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=r.getActiveAttrib(e,i),s=a.name;let o=1;a.type===35674&&(o=2),a.type===35675&&(o=3),a.type===35676&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Qn(r){return r!==""}function Ac(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(r){return r.replace(j0,G0)}function G0(r,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ro(t)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(r){return r.replace(H0,W0)}function W0(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Lc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rn:case nn:e="ENVMAP_TYPE_CUBE";break;case Ai:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case nn:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ei:e="ENVMAP_BLENDING_MULTIPLY";break;case Qd:e="ENVMAP_BLENDING_MIX";break;case ef:e="ENVMAP_BLENDING_ADD";break}return e}function $0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function K0(r,e,t,n){const i=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=V0(t),c=q0(t),u=X0(t),h=Y0(t),f=$0(t),g=t.isWebGL2?"":B0(t),v=F0(a),p=i.createProgram();let m,y,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[v].filter(Qn).join(`
`),m.length>0&&(m+=`
`),y=[g,v].filter(Qn).join(`
`),y.length>0&&(y+=`
`)):(m=[Lc(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qn).join(`
`),y=[g,Lc(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?ke.tonemapping_pars_fragment:"",t.toneMapping!==Zt?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,N0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qn).join(`
`)),s=Ro(s),s=Ac(s,t),s=Tc(s,t),o=Ro(o),o=Ac(o,t),o=Tc(o,t),s=Cc(s),o=Cc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=E+m+s,x=E+y+o,w=Sc(i,35633,S),C=Sc(i,35632,x);if(i.attachShader(p,w),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const D=i.getProgramInfoLog(p).trim(),G=i.getShaderInfoLog(w).trim(),N=i.getShaderInfoLog(C).trim();let Q=!0,$=!0;if(i.getProgramParameter(p,35714)===!1){Q=!1;const O=Ec(i,w,"vertex"),I=Ec(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+D+`
`+O+`
`+I)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(G===""||N==="")&&($=!1);$&&(this.diagnostics={runnable:Q,programLog:D,vertexShader:{log:G,prefix:m},fragmentShader:{log:N,prefix:y}})}i.deleteShader(w),i.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new Qi(i,p)),F};let A;return this.getAttributes=function(){return A===void 0&&(A=U0(i,p)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=C,this}let J0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q0(e),t.set(e,n)),n}}class Q0{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}}function ev(r,e,t,n,i,a,s){const o=new mo,l=new Z0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(A,D,G,N,Q){const $=N.fog,O=Q.geometry,I=A.isMeshStandardMaterial?N.environment:null,K=(A.isMeshStandardMaterial?t:e).get(A.envMap||I),oe=K&&K.mapping===Ai?K.image.height:null,ae=v[A.type];A.precision!==null&&(g=i.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,U=ee!==void 0?ee.length:0;let q=0;O.morphAttributes.position!==void 0&&(q=1),O.morphAttributes.normal!==void 0&&(q=2),O.morphAttributes.color!==void 0&&(q=3);let z,k,Z,se;if(ae){const he=qt[ae];z=he.vertexShader,k=he.fragmentShader}else z=A.vertexShader,k=A.fragmentShader,l.update(A),Z=l.getVertexShaderID(A),se=l.getFragmentShaderID(A);const B=r.getRenderTarget(),V=A.alphaTest>0,ne=A.clearcoat>0,ue=A.iridescence>0;return{isWebGL2:u,shaderID:ae,shaderName:A.type,vertexShader:z,fragmentShader:k,defines:A.defines,customVertexShaderID:Z,customFragmentShaderID:se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?r.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:kr,map:!!A.map,matcap:!!A.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:oe,lightMap:!!A.lightMap,aoMap:!!A.aoMap,emissiveMap:!!A.emissiveMap,bumpMap:!!A.bumpMap,normalMap:!!A.normalMap,objectSpaceNormalMap:A.normalMapType===Ef,tangentSpaceNormalMap:A.normalMapType===Ja,decodeVideoTexture:!!A.map&&A.map.isVideoTexture===!0&&A.map.encoding===Ke,clearcoat:ne,clearcoatMap:ne&&!!A.clearcoatMap,clearcoatRoughnessMap:ne&&!!A.clearcoatRoughnessMap,clearcoatNormalMap:ne&&!!A.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!A.iridescenceMap,iridescenceThicknessMap:ue&&!!A.iridescenceThicknessMap,displacementMap:!!A.displacementMap,roughnessMap:!!A.roughnessMap,metalnessMap:!!A.metalnessMap,specularMap:!!A.specularMap,specularIntensityMap:!!A.specularIntensityMap,specularColorMap:!!A.specularColorMap,opaque:A.transparent===!1&&A.blending===en,alphaMap:!!A.alphaMap,alphaTest:V,gradientMap:!!A.gradientMap,sheen:A.sheen>0,sheenColorMap:!!A.sheenColorMap,sheenRoughnessMap:!!A.sheenRoughnessMap,transmission:A.transmission>0,transmissionMap:!!A.transmissionMap,thicknessMap:!!A.thicknessMap,combine:A.combine,vertexTangents:!!A.normalMap&&!!O.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!A.map||!!A.bumpMap||!!A.normalMap||!!A.specularMap||!!A.alphaMap||!!A.emissiveMap||!!A.roughnessMap||!!A.metalnessMap||!!A.clearcoatMap||!!A.clearcoatRoughnessMap||!!A.clearcoatNormalMap||!!A.iridescenceMap||!!A.iridescenceThicknessMap||!!A.displacementMap||!!A.transmissionMap||!!A.thicknessMap||!!A.specularIntensityMap||!!A.specularColorMap||!!A.sheenColorMap||!!A.sheenRoughnessMap,uvsVertexOnly:!(A.map||A.bumpMap||A.normalMap||A.specularMap||A.alphaMap||A.emissiveMap||A.roughnessMap||A.metalnessMap||A.clearcoatNormalMap||A.iridescenceMap||A.iridescenceThicknessMap||A.transmission>0||A.transmissionMap||A.thicknessMap||A.specularIntensityMap||A.specularColorMap||A.sheen>0||A.sheenColorMap||A.sheenRoughnessMap)&&!!A.displacementMap,fog:!!$,useFog:A.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:!!A.flatShading,sizeAttenuation:A.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:A.toneMapped?r.toneMapping:Zt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===vr,flipSided:A.side===xt,useDepthPacking:!!A.depthPacking,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:A.extensions&&A.extensions.derivatives,extensionFragDepth:A.extensions&&A.extensions.fragDepth,extensionDrawBuffers:A.extensions&&A.extensions.drawBuffers,extensionShaderTextureLOD:A.extensions&&A.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function m(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)D.push(G),D.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(y(D,A),E(D,A),D.push(r.outputEncoding)),D.push(A.customProgramCacheKey),D.join()}function y(A,D){A.push(D.precision),A.push(D.outputEncoding),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.combine),A.push(D.vertexUvs),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function E(A,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.map&&o.enable(4),D.matcap&&o.enable(5),D.envMap&&o.enable(6),D.lightMap&&o.enable(7),D.aoMap&&o.enable(8),D.emissiveMap&&o.enable(9),D.bumpMap&&o.enable(10),D.normalMap&&o.enable(11),D.objectSpaceNormalMap&&o.enable(12),D.tangentSpaceNormalMap&&o.enable(13),D.clearcoat&&o.enable(14),D.clearcoatMap&&o.enable(15),D.clearcoatRoughnessMap&&o.enable(16),D.clearcoatNormalMap&&o.enable(17),D.iridescence&&o.enable(18),D.iridescenceMap&&o.enable(19),D.iridescenceThicknessMap&&o.enable(20),D.displacementMap&&o.enable(21),D.specularMap&&o.enable(22),D.roughnessMap&&o.enable(23),D.metalnessMap&&o.enable(24),D.gradientMap&&o.enable(25),D.alphaMap&&o.enable(26),D.alphaTest&&o.enable(27),D.vertexColors&&o.enable(28),D.vertexAlphas&&o.enable(29),D.vertexUvs&&o.enable(30),D.vertexTangents&&o.enable(31),D.uvsVertexOnly&&o.enable(32),A.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.physicallyCorrectLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.specularIntensityMap&&o.enable(15),D.specularColorMap&&o.enable(16),D.transmission&&o.enable(17),D.transmissionMap&&o.enable(18),D.thicknessMap&&o.enable(19),D.sheen&&o.enable(20),D.sheenColorMap&&o.enable(21),D.sheenRoughnessMap&&o.enable(22),D.decodeVideoTexture&&o.enable(23),D.opaque&&o.enable(24),A.push(o.mask)}function S(A){const D=v[A.type];let G;if(D){const N=qt[D];G=nc.clone(N.uniforms)}else G=A.uniforms;return G}function x(A,D){let G;for(let N=0,Q=c.length;N<Q;N++){const $=c[N];if($.cacheKey===D){G=$,++G.usedTimes;break}}return G===void 0&&(G=new K0(r,D,A,a),c.push(G)),G}function w(A){if(--A.usedTimes===0){const D=c.indexOf(A);c[D]=c[c.length-1],c.pop(),A.destroy()}}function C(A){l.remove(A)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:F}}function tv(){let r=new WeakMap;function e(a){let s=r.get(a);return s===void 0&&(s={},r.set(a,s)),s}function t(a){r.delete(a)}function n(a,s,o){r.get(a)[s]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function rv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Pc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Oc(){const r=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,g,v,p,m){let y=r[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},r[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=p,y.group=m),e++,y}function o(h,f,g,v,p,m){const y=s(h,f,g,v,p,m);g.transmission>0?n.push(y):g.transparent===!0?i.push(y):t.push(y)}function l(h,f,g,v,p,m){const y=s(h,f,g,v,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?i.unshift(y):t.unshift(y)}function c(h,f){t.length>1&&t.sort(h||rv),n.length>1&&n.sort(f||Pc),i.length>1&&i.sort(f||Pc)}function u(){for(let h=e,f=r.length;h<f;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:u,sort:c}}function nv(){let r=new WeakMap;function e(n,i){const a=r.get(n);let s;return a===void 0?(s=new Oc,r.set(n,[s])):i>=a.length?(s=new Oc,a.push(s)):s=a[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function iv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new je};break;case"SpotLight":t={position:new Y,direction:new Y,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function av(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ov=0;function sv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lv(r,e){const t=new iv,n=av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new Y);const a=new Y,s=new Ye,o=new Ye;function l(u,h){let f=0,g=0,v=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,m=0,y=0,E=0,S=0,x=0,w=0,C=0,F=0,A=0;u.sort(sv);const D=h!==!0?Math.PI:1;for(let N=0,Q=u.length;N<Q;N++){const $=u[N],O=$.color,I=$.intensity,K=$.distance,oe=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)f+=O.r*I*D,g+=O.g*I*D,v+=O.b*I*D;else if($.isLightProbe)for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector($.sh.coefficients[ae],I);else if($.isDirectionalLight){const ae=t.get($);if(ae.color.copy($.color).multiplyScalar($.intensity*D),$.castShadow){const ee=$.shadow,U=n.get($);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=$.shadow.matrix,x++}i.directional[p]=ae,p++}else if($.isSpotLight){const ae=t.get($);ae.position.setFromMatrixPosition($.matrixWorld),ae.color.copy(O).multiplyScalar(I*D),ae.distance=K,ae.coneCos=Math.cos($.angle),ae.penumbraCos=Math.cos($.angle*(1-$.penumbra)),ae.decay=$.decay,i.spot[y]=ae;const ee=$.shadow;if($.map&&(i.spotLightMap[F]=$.map,F++,ee.updateMatrices($),$.castShadow&&A++),i.spotLightMatrix[y]=ee.matrix,$.castShadow){const U=n.get($);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=oe,C++}y++}else if($.isRectAreaLight){const ae=t.get($);ae.color.copy(O).multiplyScalar(I),ae.halfWidth.set($.width*.5,0,0),ae.halfHeight.set(0,$.height*.5,0),i.rectArea[E]=ae,E++}else if($.isPointLight){const ae=t.get($);if(ae.color.copy($.color).multiplyScalar($.intensity*D),ae.distance=$.distance,ae.decay=$.decay,$.castShadow){const ee=$.shadow,U=n.get($);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,U.shadowCameraNear=ee.camera.near,U.shadowCameraFar=ee.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=oe,i.pointShadowMatrix[m]=$.shadow.matrix,w++}i.point[m]=ae,m++}else if($.isHemisphereLight){const ae=t.get($);ae.skyColor.copy($.color).multiplyScalar(I*D),ae.groundColor.copy($.groundColor).multiplyScalar(I*D),i.hemi[S]=ae,S++}}E>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=g,i.ambient[2]=v;const G=i.hash;(G.directionalLength!==p||G.pointLength!==m||G.spotLength!==y||G.rectAreaLength!==E||G.hemiLength!==S||G.numDirectionalShadows!==x||G.numPointShadows!==w||G.numSpotShadows!==C||G.numSpotMaps!==F)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=E,i.point.length=m,i.hemi.length=S,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+F-A,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=A,G.directionalLength=p,G.pointLength=m,G.spotLength=y,G.rectAreaLength=E,G.hemiLength=S,G.numDirectionalShadows=x,G.numPointShadows=w,G.numSpotShadows=C,G.numSpotMaps=F,i.version=ov++)}function c(u,h){let f=0,g=0,v=0,p=0,m=0;const y=h.matrixWorldInverse;for(let E=0,S=u.length;E<S;E++){const x=u[E];if(x.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(y),f++}else if(x.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(y),v++}else if(x.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(y),o.identity(),s.copy(x.matrixWorld),s.premultiply(y),o.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(y),g++}else if(x.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(y),m++}}}return{setup:l,setupView:c,state:i}}function Dc(r,e){const t=new lv(r,e),n=[],i=[];function a(){n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function cv(r,e){let t=new WeakMap;function n(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new Dc(r,e),t.set(a,[l])):s>=o.length?(l=new Dc(r,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class uv extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hv extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Y,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
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
}`;function pv(r,e,t){let n=new To;const i=new we,a=new we,s=new at,o=new uv({depthPacking:Sf}),l=new hv,c={},u=t.maxTextureSize,h={0:xt,1:Qr,2:vr},f=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:dv,fragmentShader:fv}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const v=new _t;v.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Et(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl,this.render=function(x,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const F=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),G=r.state;G.setBlending(yr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let N=0,Q=x.length;N<Q;N++){const $=x[N],O=$.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const I=O.getFrameExtents();if(i.multiply(I),a.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/I.x),i.x=a.x*I.x,O.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/I.y),i.y=a.y*I.y,O.mapSize.y=a.y)),O.map===null){const oe=this.type!==Wn?{minFilter:yt,magFilter:yt}:{};O.map=new _r(i.x,i.y,oe),O.map.texture.name=$.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const K=O.getViewportCount();for(let oe=0;oe<K;oe++){const ae=O.getViewport(oe);s.set(a.x*ae.x,a.y*ae.y,a.x*ae.z,a.y*ae.w),G.viewport(s),O.updateMatrices($,oe),n=O.getFrustum(),S(w,C,O.camera,$,this.type)}O.isPointLightShadow!==!0&&this.type===Wn&&y(O,C),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(F,A,D)};function y(x,w){const C=e.update(p);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,g.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new _r(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(w,null,C,f,p,null),g.uniforms.shadow_pass.value=x.mapPass.texture,g.uniforms.resolution.value=x.mapSize,g.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(w,null,C,g,p,null)}function E(x,w,C,F,A,D){let G=null;const N=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(N!==void 0?G=N:G=C.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const Q=G.uuid,$=w.uuid;let O=c[Q];O===void 0&&(O={},c[Q]=O);let I=O[$];I===void 0&&(I=G.clone(),O[$]=I),G=I}return G.visible=w.visible,G.wireframe=w.wireframe,D===Wn?G.side=w.shadowSide!==null?w.shadowSide:w.side:G.side=w.shadowSide!==null?w.shadowSide:h[w.side],G.alphaMap=w.alphaMap,G.alphaTest=w.alphaTest,G.clipShadows=w.clipShadows,G.clippingPlanes=w.clippingPlanes,G.clipIntersection=w.clipIntersection,G.displacementMap=w.displacementMap,G.displacementScale=w.displacementScale,G.displacementBias=w.displacementBias,G.wireframeLinewidth=w.wireframeLinewidth,G.linewidth=w.linewidth,C.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(C.matrixWorld),G.nearDistance=F,G.farDistance=A),G}function S(x,w,C,F,A){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===Wn)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const G=e.update(x),N=x.material;if(Array.isArray(N)){const Q=G.groups;for(let $=0,O=Q.length;$<O;$++){const I=Q[$],K=N[I.materialIndex];if(K&&K.visible){const oe=E(x,K,F,C.near,C.far,A);r.renderBufferDirect(C,null,G,oe,x,I)}}}else if(N.visible){const Q=E(x,N,F,C.near,C.far,A);r.renderBufferDirect(C,null,G,Q,x,null)}}const D=x.children;for(let G=0,N=D.length;G<N;G++)S(D[G],w,C,F,A)}}function mv(r,e,t){const n=t.isWebGL2;function i(){let re=!1;const fe=new at;let ye=null;const Ee=new at(0,0,0,0);return{setMask:function(De){ye!==De&&!re&&(r.colorMask(De,De,De,De),ye=De)},setLocked:function(De){re=De},setClear:function(De,He,st,ft,$r){$r===!0&&(De*=ft,He*=ft,st*=ft),fe.set(De,He,st,ft),Ee.equals(fe)===!1&&(r.clearColor(De,He,st,ft),Ee.copy(fe))},reset:function(){re=!1,ye=null,Ee.set(-1,0,0,0)}}}function a(){let re=!1,fe=null,ye=null,Ee=null;return{setTest:function(De){De?V(2929):ne(2929)},setMask:function(De){fe!==De&&!re&&(r.depthMask(De),fe=De)},setFunc:function(De){if(ye!==De){switch(De){case qd:r.depthFunc(512);break;case Xd:r.depthFunc(519);break;case Yd:r.depthFunc(513);break;case Ga:r.depthFunc(515);break;case $d:r.depthFunc(514);break;case Kd:r.depthFunc(518);break;case Jd:r.depthFunc(516);break;case Zd:r.depthFunc(517);break;default:r.depthFunc(515)}ye=De}},setLocked:function(De){re=De},setClear:function(De){Ee!==De&&(r.clearDepth(De),Ee=De)},reset:function(){re=!1,fe=null,ye=null,Ee=null}}}function s(){let re=!1,fe=null,ye=null,Ee=null,De=null,He=null,st=null,ft=null,$r=null;return{setTest:function(Xe){re||(Xe?V(2960):ne(2960))},setMask:function(Xe){fe!==Xe&&!re&&(r.stencilMask(Xe),fe=Xe)},setFunc:function(Xe,gr,Rt){(ye!==Xe||Ee!==gr||De!==Rt)&&(r.stencilFunc(Xe,gr,Rt),ye=Xe,Ee=gr,De=Rt)},setOp:function(Xe,gr,Rt){(He!==Xe||st!==gr||ft!==Rt)&&(r.stencilOp(Xe,gr,Rt),He=Xe,st=gr,ft=Rt)},setLocked:function(Xe){re=Xe},setClear:function(Xe){$r!==Xe&&(r.clearStencil(Xe),$r=Xe)},reset:function(){re=!1,fe=null,ye=null,Ee=null,De=null,He=null,st=null,ft=null,$r=null}}}const o=new i,l=new a,c=new s,u=new WeakMap,h=new WeakMap;let f={},g={},v=new WeakMap,p=[],m=null,y=!1,E=null,S=null,x=null,w=null,C=null,F=null,A=null,D=!1,G=null,N=null,Q=null,$=null,O=null;const I=r.getParameter(35661);let K=!1,oe=0;const ae=r.getParameter(7938);ae.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ae)[1]),K=oe>=1):ae.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),K=oe>=2);let ee=null,U={};const q=r.getParameter(3088),z=r.getParameter(2978),k=new at().fromArray(q),Z=new at().fromArray(z);function se(re,fe,ye){const Ee=new Uint8Array(4),De=r.createTexture();r.bindTexture(re,De),r.texParameteri(re,10241,9728),r.texParameteri(re,10240,9728);for(let He=0;He<ye;He++)r.texImage2D(fe+He,0,6408,1,1,0,6408,5121,Ee);return De}const B={};B[3553]=se(3553,3553,1),B[34067]=se(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),V(2929),l.setFunc(Ga),d(!1),_(rl),V(2884),W(yr);function V(re){f[re]!==!0&&(r.enable(re),f[re]=!0)}function ne(re){f[re]!==!1&&(r.disable(re),f[re]=!1)}function ue(re,fe){return g[re]!==fe?(r.bindFramebuffer(re,fe),g[re]=fe,n&&(re===36009&&(g[36160]=fe),re===36160&&(g[36009]=fe)),!0):!1}function he(re,fe){let ye=p,Ee=!1;if(re)if(ye=v.get(fe),ye===void 0&&(ye=[],v.set(fe,ye)),re.isWebGLMultipleRenderTargets){const De=re.texture;if(ye.length!==De.length||ye[0]!==36064){for(let He=0,st=De.length;He<st;He++)ye[He]=36064+He;ye.length=De.length,Ee=!0}}else ye[0]!==36064&&(ye[0]=36064,Ee=!0);else ye[0]!==1029&&(ye[0]=1029,Ee=!0);Ee&&(t.isWebGL2?r.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Me(re){return m!==re?(r.useProgram(re),m=re,!0):!1}const _e={[tn]:32774,[kd]:32778,[Nd]:32779};if(n)_e[sl]=32775,_e[ll]=32776;else{const re=e.get("EXT_blend_minmax");re!==null&&(_e[sl]=re.MIN_EXT,_e[ll]=re.MAX_EXT)}const T={[zd]:0,[Bd]:1,[Fd]:768,[cl]:770,[Vd]:776,[Hd]:774,[jd]:772,[Ud]:769,[ul]:771,[Wd]:775,[Gd]:773};function W(re,fe,ye,Ee,De,He,st,ft){if(re===yr){y===!0&&(ne(3042),y=!1);return}if(y===!1&&(V(3042),y=!0),re!==Id){if(re!==E||ft!==D){if((S!==tn||C!==tn)&&(r.blendEquation(32774),S=tn,C=tn),ft)switch(re){case en:r.blendFuncSeparate(1,771,1,771);break;case il:r.blendFunc(1,1);break;case al:r.blendFuncSeparate(0,769,0,1);break;case ol:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",re);break}else switch(re){case en:r.blendFuncSeparate(770,771,1,771);break;case il:r.blendFunc(770,1);break;case al:r.blendFuncSeparate(0,769,0,1);break;case ol:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",re);break}x=null,w=null,F=null,A=null,E=re,D=ft}return}De=De||fe,He=He||ye,st=st||Ee,(fe!==S||De!==C)&&(r.blendEquationSeparate(_e[fe],_e[De]),S=fe,C=De),(ye!==x||Ee!==w||He!==F||st!==A)&&(r.blendFuncSeparate(T[ye],T[Ee],T[He],T[st]),x=ye,w=Ee,F=He,A=st),E=re,D=null}function M(re,fe){re.side===vr?ne(2884):V(2884);let ye=re.side===xt;fe&&(ye=!ye),d(ye),re.blending===en&&re.transparent===!1?W(yr):W(re.blending,re.blendEquation,re.blendSrc,re.blendDst,re.blendEquationAlpha,re.blendSrcAlpha,re.blendDstAlpha,re.premultipliedAlpha),l.setFunc(re.depthFunc),l.setTest(re.depthTest),l.setMask(re.depthWrite),o.setMask(re.colorWrite);const Ee=re.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(re.stencilWriteMask),c.setFunc(re.stencilFunc,re.stencilRef,re.stencilFuncMask),c.setOp(re.stencilFail,re.stencilZFail,re.stencilZPass)),R(re.polygonOffset,re.polygonOffsetFactor,re.polygonOffsetUnits),re.alphaToCoverage===!0?V(32926):ne(32926)}function d(re){G!==re&&(re?r.frontFace(2304):r.frontFace(2305),G=re)}function _(re){re!==Od?(V(2884),re!==N&&(re===rl?r.cullFace(1029):re===Dd?r.cullFace(1028):r.cullFace(1032))):ne(2884),N=re}function b(re){re!==Q&&(K&&r.lineWidth(re),Q=re)}function R(re,fe,ye){re?(V(32823),($!==fe||O!==ye)&&(r.polygonOffset(fe,ye),$=fe,O=ye)):ne(32823)}function H(re){re?V(3089):ne(3089)}function J(re){re===void 0&&(re=33984+I-1),ee!==re&&(r.activeTexture(re),ee=re)}function L(re,fe,ye){ye===void 0&&(ee===null?ye=33984+I-1:ye=ee);let Ee=U[ye];Ee===void 0&&(Ee={type:void 0,texture:void 0},U[ye]=Ee),(Ee.type!==re||Ee.texture!==fe)&&(ee!==ye&&(r.activeTexture(ye),ee=ye),r.bindTexture(re,fe||B[re]),Ee.type=re,Ee.texture=fe)}function P(){const re=U[ee];re!==void 0&&re.type!==void 0&&(r.bindTexture(re.type,null),re.type=void 0,re.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function ge(){try{r.texSubImage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function ve(){try{r.texSubImage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function X(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function ie(){try{r.texStorage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Ae(){try{r.texImage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Se(){try{r.texImage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Te(re){k.equals(re)===!1&&(r.scissor(re.x,re.y,re.z,re.w),k.copy(re))}function Pe(re){Z.equals(re)===!1&&(r.viewport(re.x,re.y,re.z,re.w),Z.copy(re))}function Re(re,fe){let ye=h.get(fe);ye===void 0&&(ye=new WeakMap,h.set(fe,ye));let Ee=ye.get(re);Ee===void 0&&(Ee=r.getUniformBlockIndex(fe,re.name),ye.set(re,Ee))}function Ne(re,fe){const ye=h.get(fe).get(re);u.get(re)!==ye&&(r.uniformBlockBinding(fe,ye,re.__bindingPointIndex),u.set(re,ye))}function Je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ee=null,U={},g={},v=new WeakMap,p=[],m=null,y=!1,E=null,S=null,x=null,w=null,C=null,F=null,A=null,D=!1,G=null,N=null,Q=null,$=null,O=null,k.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:V,disable:ne,bindFramebuffer:ue,drawBuffers:he,useProgram:Me,setBlending:W,setMaterial:M,setFlipSided:d,setCullFace:_,setLineWidth:b,setPolygonOffset:R,setScissorTest:H,activeTexture:J,bindTexture:L,unbindTexture:P,compressedTexImage2D:te,compressedTexImage3D:de,texImage2D:Ae,texImage3D:Se,updateUBOMapping:Re,uniformBlockBinding:Ne,texStorage2D:ie,texStorage3D:xe,texSubImage2D:ge,texSubImage3D:ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:X,scissor:Te,viewport:Pe,reset:Je}}function gv(r,e,t,n,i,a,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),v=new WeakMap;let p;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,P){return y?new OffscreenCanvas(L,P):Xn("canvas")}function S(L,P,te,de){let ge=1;if((L.width>de||L.height>de)&&(ge=de/Math.max(L.width,L.height)),ge<1||P===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ve=P?ro:Math.floor,Ce=ve(ge*L.width),X=ve(ge*L.height);p===void 0&&(p=E(Ce,X));const ie=te?E(Ce,X):p;return ie.width=Ce,ie.height=X,ie.getContext("2d").drawImage(L,0,0,Ce,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ce+"x"+X+")."),ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return Fl(L.width)&&Fl(L.height)}function w(L){return o?!1:L.wrapS!==kt||L.wrapT!==kt||L.minFilter!==yt&&L.minFilter!==Tt}function C(L,P){return L.generateMipmaps&&P&&L.minFilter!==yt&&L.minFilter!==Tt}function F(L){r.generateMipmap(L)}function A(L,P,te,de,ge=!1){if(o===!1)return P;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ve=P;return P===6403&&(te===5126&&(ve=33326),te===5131&&(ve=33325),te===5121&&(ve=33321)),P===33319&&(te===5126&&(ve=33328),te===5131&&(ve=33327),te===5121&&(ve=33323)),P===6408&&(te===5126&&(ve=34836),te===5131&&(ve=34842),te===5121&&(ve=de===Ke&&ge===!1?35907:32856),te===32819&&(ve=32854),te===32820&&(ve=32855)),(ve===33325||ve===33326||ve===33327||ve===33328||ve===34842||ve===34836)&&e.get("EXT_color_buffer_float"),ve}function D(L,P,te){return C(L,te)===!0||L.isFramebufferTexture&&L.minFilter!==yt&&L.minFilter!==Tt?Math.log2(Math.max(P.width,P.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?P.mipmaps.length:1}function G(L){return L===yt||L===dl||L===fl?9728:9729}function N(L){const P=L.target;P.removeEventListener("dispose",N),$(P),P.isVideoTexture&&v.delete(P)}function Q(L){const P=L.target;P.removeEventListener("dispose",Q),I(P)}function $(L){const P=n.get(L);if(P.__webglInit===void 0)return;const te=L.source,de=m.get(te);if(de){const ge=de[P.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&O(L),Object.keys(de).length===0&&m.delete(te)}n.remove(L)}function O(L){const P=n.get(L);r.deleteTexture(P.__webglTexture);const te=L.source,de=m.get(te);delete de[P.__cacheKey],s.memory.textures--}function I(L){const P=L.texture,te=n.get(L),de=n.get(P);if(de.__webglTexture!==void 0&&(r.deleteTexture(de.__webglTexture),s.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++)r.deleteFramebuffer(te.__webglFramebuffer[ge]),te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer[ge]);else{if(r.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&r.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&r.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let ge=0;ge<te.__webglColorRenderbuffer.length;ge++)te.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(te.__webglColorRenderbuffer[ge]);te.__webglDepthRenderbuffer&&r.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ge=0,ve=P.length;ge<ve;ge++){const Ce=n.get(P[ge]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),s.memory.textures--),n.remove(P[ge])}n.remove(P),n.remove(L)}let K=0;function oe(){K=0}function ae(){const L=K;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),K+=1,L}function ee(L){const P=[];return P.push(L.wrapS),P.push(L.wrapT),P.push(L.wrapR||0),P.push(L.magFilter),P.push(L.minFilter),P.push(L.anisotropy),P.push(L.internalFormat),P.push(L.format),P.push(L.type),P.push(L.generateMipmaps),P.push(L.premultiplyAlpha),P.push(L.flipY),P.push(L.unpackAlignment),P.push(L.encoding),P.join()}function U(L,P){const te=n.get(L);if(L.isVideoTexture&&H(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(te,L,P);return}}t.bindTexture(3553,te.__webglTexture,33984+P)}function q(L,P){const te=n.get(L);if(L.version>0&&te.__version!==L.version){ne(te,L,P);return}t.bindTexture(35866,te.__webglTexture,33984+P)}function z(L,P){const te=n.get(L);if(L.version>0&&te.__version!==L.version){ne(te,L,P);return}t.bindTexture(32879,te.__webglTexture,33984+P)}function k(L,P){const te=n.get(L);if(L.version>0&&te.__version!==L.version){ue(te,L,P);return}t.bindTexture(34067,te.__webglTexture,33984+P)}const Z={[Va]:10497,[kt]:33071,[qa]:33648},se={[yt]:9728,[dl]:9984,[fl]:9986,[Tt]:9729,[sf]:9985,[Ti]:9987};function B(L,P,te){if(te?(r.texParameteri(L,10242,Z[P.wrapS]),r.texParameteri(L,10243,Z[P.wrapT]),(L===32879||L===35866)&&r.texParameteri(L,32882,Z[P.wrapR]),r.texParameteri(L,10240,se[P.magFilter]),r.texParameteri(L,10241,se[P.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),(L===32879||L===35866)&&r.texParameteri(L,32882,33071),(P.wrapS!==kt||P.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,G(P.magFilter)),r.texParameteri(L,10241,G(P.minFilter)),P.minFilter!==yt&&P.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(P.type===Rr&&e.has("OES_texture_float_linear")===!1||o===!1&&P.type===Vn&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(r.texParameterf(L,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function V(L,P){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,P.addEventListener("dispose",N));const de=P.source;let ge=m.get(de);ge===void 0&&(ge={},m.set(de,ge));const ve=ee(P);if(ve!==L.__cacheKey){ge[ve]===void 0&&(ge[ve]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,te=!0),ge[ve].usedTimes++;const Ce=ge[L.__cacheKey];Ce!==void 0&&(ge[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&O(P)),L.__cacheKey=ve,L.__webglTexture=ge[ve].texture}return te}function ne(L,P,te){let de=3553;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(de=35866),P.isData3DTexture&&(de=32879);const ge=V(L,P),ve=P.source;t.bindTexture(de,L.__webglTexture,33984+te);const Ce=n.get(ve);if(ve.version!==Ce.__version||ge===!0){t.activeTexture(33984+te),r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);const X=w(P)&&x(P.image)===!1;let ie=S(P.image,X,!1,u);ie=J(P,ie);const xe=x(ie)||o,Ae=a.convert(P.format,P.encoding);let Se=a.convert(P.type),Te=A(P.internalFormat,Ae,Se,P.encoding,P.isVideoTexture);B(de,P,xe);let Pe;const Re=P.mipmaps,Ne=o&&P.isVideoTexture!==!0,Je=Ce.__version===void 0||ge===!0,re=D(P,ie,xe);if(P.isDepthTexture)Te=6402,o?P.type===Rr?Te=36012:P.type===Dr?Te=33190:P.type===an?Te=35056:Te=33189:P.type===Rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Ir&&Te===6402&&P.type!==pl&&P.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Dr,Se=a.convert(P.type)),P.format===on&&Te===6402&&(Te=34041,P.type!==an&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=an,Se=a.convert(P.type))),Je&&(Ne?t.texStorage2D(3553,1,Te,ie.width,ie.height):t.texImage2D(3553,0,Te,ie.width,ie.height,0,Ae,Se,null));else if(P.isDataTexture)if(Re.length>0&&xe){Ne&&Je&&t.texStorage2D(3553,re,Te,Re[0].width,Re[0].height);for(let fe=0,ye=Re.length;fe<ye;fe++)Pe=Re[fe],Ne?t.texSubImage2D(3553,fe,0,0,Pe.width,Pe.height,Ae,Se,Pe.data):t.texImage2D(3553,fe,Te,Pe.width,Pe.height,0,Ae,Se,Pe.data);P.generateMipmaps=!1}else Ne?(Je&&t.texStorage2D(3553,re,Te,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,ie.width,ie.height,Ae,Se,ie.data)):t.texImage2D(3553,0,Te,ie.width,ie.height,0,Ae,Se,ie.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ne&&Je&&t.texStorage3D(35866,re,Te,Re[0].width,Re[0].height,ie.depth);for(let fe=0,ye=Re.length;fe<ye;fe++)Pe=Re[fe],P.format!==Nt?Ae!==null?Ne?t.compressedTexSubImage3D(35866,fe,0,0,0,Pe.width,Pe.height,ie.depth,Ae,Pe.data,0,0):t.compressedTexImage3D(35866,fe,Te,Pe.width,Pe.height,ie.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,fe,0,0,0,Pe.width,Pe.height,ie.depth,Ae,Se,Pe.data):t.texImage3D(35866,fe,Te,Pe.width,Pe.height,ie.depth,0,Ae,Se,Pe.data)}else{Ne&&Je&&t.texStorage2D(3553,re,Te,Re[0].width,Re[0].height);for(let fe=0,ye=Re.length;fe<ye;fe++)Pe=Re[fe],P.format!==Nt?Ae!==null?Ne?t.compressedTexSubImage2D(3553,fe,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(3553,fe,Te,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,fe,0,0,Pe.width,Pe.height,Ae,Se,Pe.data):t.texImage2D(3553,fe,Te,Pe.width,Pe.height,0,Ae,Se,Pe.data)}else if(P.isDataArrayTexture)Ne?(Je&&t.texStorage3D(35866,re,Te,ie.width,ie.height,ie.depth),t.texSubImage3D(35866,0,0,0,0,ie.width,ie.height,ie.depth,Ae,Se,ie.data)):t.texImage3D(35866,0,Te,ie.width,ie.height,ie.depth,0,Ae,Se,ie.data);else if(P.isData3DTexture)Ne?(Je&&t.texStorage3D(32879,re,Te,ie.width,ie.height,ie.depth),t.texSubImage3D(32879,0,0,0,0,ie.width,ie.height,ie.depth,Ae,Se,ie.data)):t.texImage3D(32879,0,Te,ie.width,ie.height,ie.depth,0,Ae,Se,ie.data);else if(P.isFramebufferTexture){if(Je)if(Ne)t.texStorage2D(3553,re,Te,ie.width,ie.height);else{let fe=ie.width,ye=ie.height;for(let Ee=0;Ee<re;Ee++)t.texImage2D(3553,Ee,Te,fe,ye,0,Ae,Se,null),fe>>=1,ye>>=1}}else if(Re.length>0&&xe){Ne&&Je&&t.texStorage2D(3553,re,Te,Re[0].width,Re[0].height);for(let fe=0,ye=Re.length;fe<ye;fe++)Pe=Re[fe],Ne?t.texSubImage2D(3553,fe,0,0,Ae,Se,Pe):t.texImage2D(3553,fe,Te,Ae,Se,Pe);P.generateMipmaps=!1}else Ne?(Je&&t.texStorage2D(3553,re,Te,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,Ae,Se,ie)):t.texImage2D(3553,0,Te,Ae,Se,ie);C(P,xe)&&F(de),Ce.__version=ve.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function ue(L,P,te){if(P.image.length!==6)return;const de=V(L,P),ge=P.source;t.bindTexture(34067,L.__webglTexture,33984+te);const ve=n.get(ge);if(ge.version!==ve.__version||de===!0){t.activeTexture(33984+te),r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);const Ce=P.isCompressedTexture||P.image[0].isCompressedTexture,X=P.image[0]&&P.image[0].isDataTexture,ie=[];for(let fe=0;fe<6;fe++)!Ce&&!X?ie[fe]=S(P.image[fe],!1,!0,c):ie[fe]=X?P.image[fe].image:P.image[fe],ie[fe]=J(P,ie[fe]);const xe=ie[0],Ae=x(xe)||o,Se=a.convert(P.format,P.encoding),Te=a.convert(P.type),Pe=A(P.internalFormat,Se,Te,P.encoding),Re=o&&P.isVideoTexture!==!0,Ne=ve.__version===void 0||de===!0;let Je=D(P,xe,Ae);B(34067,P,Ae);let re;if(Ce){Re&&Ne&&t.texStorage2D(34067,Je,Pe,xe.width,xe.height);for(let fe=0;fe<6;fe++){re=ie[fe].mipmaps;for(let ye=0;ye<re.length;ye++){const Ee=re[ye];P.format!==Nt?Se!==null?Re?t.compressedTexSubImage2D(34069+fe,ye,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(34069+fe,ye,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+fe,ye,0,0,Ee.width,Ee.height,Se,Te,Ee.data):t.texImage2D(34069+fe,ye,Pe,Ee.width,Ee.height,0,Se,Te,Ee.data)}}}else{re=P.mipmaps,Re&&Ne&&(re.length>0&&Je++,t.texStorage2D(34067,Je,Pe,ie[0].width,ie[0].height));for(let fe=0;fe<6;fe++)if(X){Re?t.texSubImage2D(34069+fe,0,0,0,ie[fe].width,ie[fe].height,Se,Te,ie[fe].data):t.texImage2D(34069+fe,0,Pe,ie[fe].width,ie[fe].height,0,Se,Te,ie[fe].data);for(let ye=0;ye<re.length;ye++){const Ee=re[ye].image[fe].image;Re?t.texSubImage2D(34069+fe,ye+1,0,0,Ee.width,Ee.height,Se,Te,Ee.data):t.texImage2D(34069+fe,ye+1,Pe,Ee.width,Ee.height,0,Se,Te,Ee.data)}}else{Re?t.texSubImage2D(34069+fe,0,0,0,Se,Te,ie[fe]):t.texImage2D(34069+fe,0,Pe,Se,Te,ie[fe]);for(let ye=0;ye<re.length;ye++){const Ee=re[ye];Re?t.texSubImage2D(34069+fe,ye+1,0,0,Se,Te,Ee.image[fe]):t.texImage2D(34069+fe,ye+1,Pe,Se,Te,Ee.image[fe])}}}C(P,Ae)&&F(34067),ve.__version=ge.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function he(L,P,te,de,ge){const ve=a.convert(te.format,te.encoding),Ce=a.convert(te.type),X=A(te.internalFormat,ve,Ce,te.encoding);n.get(P).__hasExternalTextures||(ge===32879||ge===35866?t.texImage3D(ge,0,X,P.width,P.height,P.depth,0,ve,Ce,null):t.texImage2D(ge,0,X,P.width,P.height,0,ve,Ce,null)),t.bindFramebuffer(36160,L),R(P)?f.framebufferTexture2DMultisampleEXT(36160,de,ge,n.get(te).__webglTexture,0,b(P)):(ge===3553||ge>=34069&&ge<=34074)&&r.framebufferTexture2D(36160,de,ge,n.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(L,P,te){if(r.bindRenderbuffer(36161,L),P.depthBuffer&&!P.stencilBuffer){let de=33189;if(te||R(P)){const ge=P.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Rr?de=36012:ge.type===Dr&&(de=33190));const ve=b(P);R(P)?f.renderbufferStorageMultisampleEXT(36161,ve,de,P.width,P.height):r.renderbufferStorageMultisample(36161,ve,de,P.width,P.height)}else r.renderbufferStorage(36161,de,P.width,P.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(P.depthBuffer&&P.stencilBuffer){const de=b(P);te&&R(P)===!1?r.renderbufferStorageMultisample(36161,de,35056,P.width,P.height):R(P)?f.renderbufferStorageMultisampleEXT(36161,de,35056,P.width,P.height):r.renderbufferStorage(36161,34041,P.width,P.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{const de=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ge=0;ge<de.length;ge++){const ve=de[ge],Ce=a.convert(ve.format,ve.encoding),X=a.convert(ve.type),ie=A(ve.internalFormat,Ce,X,ve.encoding),xe=b(P);te&&R(P)===!1?r.renderbufferStorageMultisample(36161,xe,ie,P.width,P.height):R(P)?f.renderbufferStorageMultisampleEXT(36161,xe,ie,P.width,P.height):r.renderbufferStorage(36161,ie,P.width,P.height)}}r.bindRenderbuffer(36161,null)}function _e(L,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),U(P.depthTexture,0);const te=n.get(P.depthTexture).__webglTexture,de=b(P);if(P.depthTexture.format===Ir)R(P)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,de):r.framebufferTexture2D(36160,36096,3553,te,0);else if(P.depthTexture.format===on)R(P)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,de):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function T(L){const P=n.get(L),te=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!P.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");_e(P.__webglFramebuffer,L)}else if(te){P.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(36160,P.__webglFramebuffer[de]),P.__webglDepthbuffer[de]=r.createRenderbuffer(),Me(P.__webglDepthbuffer[de],L,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),Me(P.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function W(L,P,te){const de=n.get(L);P!==void 0&&he(de.__webglFramebuffer,L,L.texture,36064,3553),te!==void 0&&T(L)}function M(L){const P=L.texture,te=n.get(L),de=n.get(P);L.addEventListener("dispose",Q),L.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=P.version,s.memory.textures++);const ge=L.isWebGLCubeRenderTarget===!0,ve=L.isWebGLMultipleRenderTargets===!0,Ce=x(L)||o;if(ge){te.__webglFramebuffer=[];for(let X=0;X<6;X++)te.__webglFramebuffer[X]=r.createFramebuffer()}else{if(te.__webglFramebuffer=r.createFramebuffer(),ve)if(i.drawBuffers){const X=L.texture;for(let ie=0,xe=X.length;ie<xe;ie++){const Ae=n.get(X[ie]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&R(L)===!1){const X=ve?P:[P];te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer);for(let ie=0;ie<X.length;ie++){const xe=X[ie];te.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(36161,te.__webglColorRenderbuffer[ie]);const Ae=a.convert(xe.format,xe.encoding),Se=a.convert(xe.type),Te=A(xe.internalFormat,Ae,Se,xe.encoding,L.isXRRenderTarget===!0),Pe=b(L);r.renderbufferStorageMultisample(36161,Pe,Te,L.width,L.height),r.framebufferRenderbuffer(36160,36064+ie,36161,te.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(36161,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(te.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(ge){t.bindTexture(34067,de.__webglTexture),B(34067,P,Ce);for(let X=0;X<6;X++)he(te.__webglFramebuffer[X],L,P,36064,34069+X);C(P,Ce)&&F(34067),t.unbindTexture()}else if(ve){const X=L.texture;for(let ie=0,xe=X.length;ie<xe;ie++){const Ae=X[ie],Se=n.get(Ae);t.bindTexture(3553,Se.__webglTexture),B(3553,Ae,Ce),he(te.__webglFramebuffer,L,Ae,36064+ie,3553),C(Ae,Ce)&&F(3553)}t.unbindTexture()}else{let X=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?X=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(X,de.__webglTexture),B(X,P,Ce),he(te.__webglFramebuffer,L,P,36064,X),C(P,Ce)&&F(X),t.unbindTexture()}L.depthBuffer&&T(L)}function d(L){const P=x(L)||o,te=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let de=0,ge=te.length;de<ge;de++){const ve=te[de];if(C(ve,P)){const Ce=L.isWebGLCubeRenderTarget?34067:3553,X=n.get(ve).__webglTexture;t.bindTexture(Ce,X),F(Ce),t.unbindTexture()}}}function _(L){if(o&&L.samples>0&&R(L)===!1){const P=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],te=L.width,de=L.height;let ge=16384;const ve=[],Ce=L.stencilBuffer?33306:36096,X=n.get(L),ie=L.isWebGLMultipleRenderTargets===!0;if(ie)for(let xe=0;xe<P.length;xe++)t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,X.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,X.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,X.__webglFramebuffer);for(let xe=0;xe<P.length;xe++){ve.push(36064+xe),L.depthBuffer&&ve.push(Ce);const Ae=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(Ae===!1&&(L.depthBuffer&&(ge|=256),L.stencilBuffer&&(ge|=1024)),ie&&r.framebufferRenderbuffer(36008,36064,36161,X.__webglColorRenderbuffer[xe]),Ae===!0&&(r.invalidateFramebuffer(36008,[Ce]),r.invalidateFramebuffer(36009,[Ce])),ie){const Se=n.get(P[xe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Se,0)}r.blitFramebuffer(0,0,te,de,0,0,te,de,ge,9728),g&&r.invalidateFramebuffer(36008,ve)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ie)for(let xe=0;xe<P.length;xe++){t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,X.__webglColorRenderbuffer[xe]);const Ae=n.get(P[xe]).__webglTexture;t.bindFramebuffer(36160,X.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,Ae,0)}t.bindFramebuffer(36009,X.__webglMultisampledFramebuffer)}}function b(L){return Math.min(h,L.samples)}function R(L){const P=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function H(L){const P=s.render.frame;v.get(L)!==P&&(v.set(L,P),L.update())}function J(L,P){const te=L.encoding,de=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Qa||te!==kr&&(te===Ke?o===!1?e.has("EXT_sRGB")===!0&&de===Nt?(L.format=Qa,L.minFilter=Tt,L.generateMipmaps=!1):P=Gl.sRGBToLinear(P):(de!==Nt||ge!==Or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",te)),P}this.allocateTextureUnit=ae,this.resetTextureUnits=oe,this.setTexture2D=U,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=k,this.rebindTextures=W,this.setupRenderTarget=M,this.updateRenderTargetMipmap=d,this.updateMultisampleRenderTarget=_,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=he,this.useMultisampledRTT=R}function vv(r,e,t){const n=t.isWebGL2;function i(a,s=null){let o;if(a===Or)return 5121;if(a===hf)return 32819;if(a===df)return 32820;if(a===lf)return 5120;if(a===cf)return 5122;if(a===pl)return 5123;if(a===uf)return 5124;if(a===Dr)return 5125;if(a===Rr)return 5126;if(a===Vn)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===ff)return 6406;if(a===Nt)return 6408;if(a===mf)return 6409;if(a===gf)return 6410;if(a===Ir)return 6402;if(a===on)return 34041;if(a===vf)return 6403;if(a===pf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===Qa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===yf)return 36244;if(a===_f)return 33319;if(a===bf)return 33320;if(a===xf)return 36249;if(a===Xa||a===Ya||a===$a||a===Ka)if(s===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Xa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===$a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Xa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ya)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===$a)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ka)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ml||a===gl||a===vl||a===yl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===yl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===wf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===_l||a===bl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===_l)return s===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===bl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===xl||a===wl||a===Ml||a===Sl||a===El||a===Al||a===Tl||a===Cl||a===Ll||a===Pl||a===Ol||a===Dl||a===Rl||a===Il)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===xl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===wl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ml)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Sl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===El)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Al)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Tl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Cl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ll)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ol)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Rl)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Il)return s===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===kl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===kl)return s===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===an?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:i}}class yv extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let En=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}};const _v={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const E=new En;E.matrixAutoUpdate=!1,E.visible=!1,c.joints[p.jointName]=E,c.add(E)}const y=c.joints[p.jointName];m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=m.radius),y.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),g=.02,v=.005;c.inputState.pinching&&f>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}}class bv extends Lt{constructor(e,t,n,i,a,s,o,l,c,u){if(u=u!==void 0?u:Ir,u!==Ir&&u!==on)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ir&&(n=Dr),n===void 0&&u===on&&(n=an),super(null,i,a,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class xv extends zt{constructor(e,t){super();const n=this;let i=null,a=1,s=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,g=null;const v=t.getContextAttributes();let p=null,m=null;const y=[],E=[],S=new Ot;S.layers.enable(1),S.viewport=new at;const x=new Ot;x.layers.enable(2),x.viewport=new at;const w=[S,x],C=new yv;C.layers.enable(1),C.layers.enable(2);let F=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let U=y[ee];return U===void 0&&(U=new Io,y[ee]=U),U.getTargetRaySpace()},this.getControllerGrip=function(ee){let U=y[ee];return U===void 0&&(U=new Io,y[ee]=U),U.getGripSpace()},this.getHand=function(ee){let U=y[ee];return U===void 0&&(U=new Io,y[ee]=U),U.getHandSpace()};function D(ee){const U=E.indexOf(ee.inputSource);if(U===-1)return;const q=y[U];q!==void 0&&q.dispatchEvent({type:ee.type,data:ee.inputSource})}function G(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",N);for(let ee=0;ee<y.length;ee++){const U=E[ee];U!==null&&(E[ee]=null,y[ee].disconnect(U))}F=null,A=null,e.setRenderTarget(p),f=null,h=null,u=null,i=null,m=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",G),i.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,t,U),i.updateRenderState({baseLayer:f}),m=new _r(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:Or,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let U=null,q=null,z=null;v.depth&&(z=v.stencil?35056:33190,U=v.stencil?on:Ir,q=v.stencil?an:Dr);const k={colorFormat:32856,depthFormat:z,scaleFactor:a};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(k),i.updateRenderState({layers:[h]}),m=new _r(h.textureWidth,h.textureHeight,{format:Nt,type:Or,depthTexture:new bv(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Z=e.properties.get(m);Z.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(ee){for(let U=0;U<ee.removed.length;U++){const q=ee.removed[U],z=E.indexOf(q);z>=0&&(E[z]=null,y[z].dispatchEvent({type:"disconnected",data:q}))}for(let U=0;U<ee.added.length;U++){const q=ee.added[U];let z=E.indexOf(q);if(z===-1){for(let Z=0;Z<y.length;Z++)if(Z>=E.length){E.push(q),z=Z;break}else if(E[Z]===null){E[Z]=q,z=Z;break}if(z===-1)break}const k=y[z];k&&k.dispatchEvent({type:"connected",data:q})}}const Q=new Y,$=new Y;function O(ee,U,q){Q.setFromMatrixPosition(U.matrixWorld),$.setFromMatrixPosition(q.matrixWorld);const z=Q.distanceTo($),k=U.projectionMatrix.elements,Z=q.projectionMatrix.elements,se=k[14]/(k[10]-1),B=k[14]/(k[10]+1),V=(k[9]+1)/k[5],ne=(k[9]-1)/k[5],ue=(k[8]-1)/k[0],he=(Z[8]+1)/Z[0],Me=se*ue,_e=se*he,T=z/(-ue+he),W=T*-ue;U.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(W),ee.translateZ(T),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const M=se+T,d=B+T,_=Me-W,b=_e+(z-W),R=V*B/d*M,H=ne*B/d*M;ee.projectionMatrix.makePerspective(_,b,R,H,M,d)}function I(ee,U){U===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(U.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;C.near=x.near=S.near=ee.near,C.far=x.far=S.far=ee.far,(F!==C.near||A!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,A=C.far);const U=ee.parent,q=C.cameras;I(C,U);for(let k=0;k<q.length;k++)I(q[k],U);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),ee.matrix.copy(C.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale);const z=ee.children;for(let k=0,Z=z.length;k<Z;k++)z[k].updateMatrixWorld(!0);q.length===2?O(C,S,x):C.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(ee){h!==null&&(h.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)};let K=null;function oe(ee,U){if(c=U.getViewerPose(l||s),g=U,c!==null){const q=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let z=!1;q.length!==C.cameras.length&&(C.cameras.length=0,z=!0);for(let k=0;k<q.length;k++){const Z=q[k];let se=null;if(f!==null)se=f.getViewport(Z);else{const V=u.getViewSubImage(h,Z);se=V.viewport,k===0&&(e.setRenderTargetTextures(m,V.colorTexture,h.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(m))}let B=w[k];B===void 0&&(B=new Ot,B.layers.enable(k),B.viewport=new at,w[k]=B),B.matrix.fromArray(Z.transform.matrix),B.projectionMatrix.fromArray(Z.projectionMatrix),B.viewport.set(se.x,se.y,se.width,se.height),k===0&&C.matrix.copy(B.matrix),z===!0&&C.cameras.push(B)}}for(let q=0;q<y.length;q++){const z=E[q],k=y[q];z!==null&&k!==void 0&&k.update(z,U,l||s)}K&&K(ee,U),g=null}const ae=new oc;ae.setAnimationLoop(oe),this.setAnimationLoop=function(ee){K=ee},this.dispose=function(){}}}function wv(r,e){function t(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,E,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(i(p,m),g(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),v(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,y,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===xt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===xt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let E;m.map?E=m.map:m.specularMap?E=m.specularMap:m.displacementMap?E=m.displacementMap:m.normalMap?E=m.normalMap:m.bumpMap?E=m.bumpMap:m.roughnessMap?E=m.roughnessMap:m.metalnessMap?E=m.metalnessMap:m.alphaMap?E=m.alphaMap:m.emissiveMap?E=m.emissiveMap:m.clearcoatMap?E=m.clearcoatMap:m.clearcoatNormalMap?E=m.clearcoatNormalMap:m.clearcoatRoughnessMap?E=m.clearcoatRoughnessMap:m.iridescenceMap?E=m.iridescenceMap:m.iridescenceThicknessMap?E=m.iridescenceThicknessMap:m.specularIntensityMap?E=m.specularIntensityMap:m.specularColorMap?E=m.specularColorMap:m.transmissionMap?E=m.transmissionMap:m.thicknessMap?E=m.thicknessMap:m.sheenColorMap?E=m.sheenColorMap:m.sheenRoughnessMap&&(E=m.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let S;m.aoMap?S=m.aoMap:m.lightMap&&(S=m.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,y,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=E*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===xt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Mv(r,e,t,n){let i={},a={},s=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(E,S){const x=S.program;n.uniformBlockBinding(E,x)}function c(E,S){let x=i[E.id];x===void 0&&(v(E),x=u(E),i[E.id]=x,E.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(E,w);const C=e.render.frame;a[E.id]!==C&&(f(E),a[E.id]=C)}function u(E){const S=h();E.__bindingPointIndex=S;const x=r.createBuffer(),w=E.__size,C=E.usage;return r.bindBuffer(35345,x),r.bufferData(35345,w,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,x),x}function h(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=i[E.id],x=E.uniforms,w=E.__cache;r.bindBuffer(35345,S);for(let C=0,F=x.length;C<F;C++){const A=x[C];if(g(A,C,w)===!0){const D=A.value,G=A.__offset;typeof D=="number"?(A.__data[0]=D,r.bufferSubData(35345,G,A.__data)):(A.value.isMatrix3?(A.__data[0]=A.value.elements[0],A.__data[1]=A.value.elements[1],A.__data[2]=A.value.elements[2],A.__data[3]=A.value.elements[0],A.__data[4]=A.value.elements[3],A.__data[5]=A.value.elements[4],A.__data[6]=A.value.elements[5],A.__data[7]=A.value.elements[0],A.__data[8]=A.value.elements[6],A.__data[9]=A.value.elements[7],A.__data[10]=A.value.elements[8],A.__data[11]=A.value.elements[0]):D.toArray(A.__data),r.bufferSubData(35345,G,A.__data))}}r.bindBuffer(35345,null)}function g(E,S,x){const w=E.value;if(x[S]===void 0)return typeof w=="number"?x[S]=w:x[S]=w.clone(),!0;if(typeof w=="number"){if(x[S]!==w)return x[S]=w,!0}else{const C=x[S];if(C.equals(w)===!1)return C.copy(w),!0}return!1}function v(E){const S=E.uniforms;let x=0;const w=16;let C=0;for(let F=0,A=S.length;F<A;F++){const D=S[F],G=p(D);if(D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,F>0){C=x%w;const N=w-C;C!==0&&N-G.boundary<0&&(x+=w-C,D.__offset=x)}x+=G.storage}return C=x%w,C>0&&(x+=w-C),E.__size=x,E.__cache={},this}function p(E){const S=E.value,x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(E){const S=E.target;S.removeEventListener("dispose",m);const x=s.indexOf(S.__bindingPointIndex);s.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete a[S.id]}function y(){for(const E in i)r.deleteBuffer(i[E]);s=[],i={},a={}}return{bind:l,update:c,dispose:y}}function Sv(){const r=Xn("canvas");return r.style.display="block",r}function Rc(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Sv(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,s=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const g=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=kr,this.physicallyCorrectLights=!1,this.toneMapping=Zt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let m=!1,y=0,E=0,S=null,x=-1,w=null;const C=new at,F=new at;let A=null,D=e.width,G=e.height,N=1,Q=null,$=null;const O=new at(0,0,D,G),I=new at(0,0,D,G);let K=!1;const oe=new To;let ae=!1,ee=!1,U=null;const q=new Ye,z=new we,k=new Y,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return S===null?N:1}let B=t;function V(j,ce){for(let pe=0;pe<j.length;pe++){const le=j[pe],me=e.getContext(le,ce);if(me!==null)return me}return null}try{const j={alpha:!0,depth:n,stencil:i,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ja}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",Re,!1),B===null){const ce=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ce.shift(),B=V(ce,j),B===null)throw V(ce)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(j){throw console.error("THREE.WebGLRenderer: "+j.message),j}let ne,ue,he,Me,_e,T,W,M,d,_,b,R,H,J,L,P,te,de,ge,ve,Ce,X,ie,xe;function Ae(){ne=new kg(B),ue=new Lg(B,ne,r),ne.init(ue),X=new vv(B,ne,ue),he=new mv(B,ne,ue),Me=new Bg,_e=new tv,T=new gv(B,ne,he,_e,ue,X,Me),W=new Og(p),M=new Ig(p),d=new Xf(B,ue),ie=new Tg(B,ne,d,ue),_=new Ng(B,d,Me,ie),b=new Gg(B,_,d,Me),ge=new jg(B,ue,T),P=new Pg(_e),R=new ev(p,W,M,ne,ue,ie,P),H=new wv(p,_e),J=new nv,L=new cv(ne,ue),de=new Ag(p,W,M,he,b,u,s),te=new pv(p,b,ue),xe=new Mv(B,Me,ue,he),ve=new Cg(B,ne,Me,ue),Ce=new zg(B,ne,Me,ue),Me.programs=R.programs,p.capabilities=ue,p.extensions=ne,p.properties=_e,p.renderLists=J,p.shadowMap=te,p.state=he,p.info=Me}Ae();const Se=new xv(p,B);this.xr=Se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const j=ne.get("WEBGL_lose_context");j&&j.loseContext()},this.forceContextRestore=function(){const j=ne.get("WEBGL_lose_context");j&&j.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(j){j!==void 0&&(N=j,this.setSize(D,G,!1))},this.getSize=function(j){return j.set(D,G)},this.setSize=function(j,ce,pe){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=j,G=ce,e.width=Math.floor(j*N),e.height=Math.floor(ce*N),pe!==!1&&(e.style.width=j+"px",e.style.height=ce+"px"),this.setViewport(0,0,j,ce)},this.getDrawingBufferSize=function(j){return j.set(D*N,G*N).floor()},this.setDrawingBufferSize=function(j,ce,pe){D=j,G=ce,N=pe,e.width=Math.floor(j*pe),e.height=Math.floor(ce*pe),this.setViewport(0,0,j,ce)},this.getCurrentViewport=function(j){return j.copy(C)},this.getViewport=function(j){return j.copy(O)},this.setViewport=function(j,ce,pe,le){j.isVector4?O.set(j.x,j.y,j.z,j.w):O.set(j,ce,pe,le),he.viewport(C.copy(O).multiplyScalar(N).floor())},this.getScissor=function(j){return j.copy(I)},this.setScissor=function(j,ce,pe,le){j.isVector4?I.set(j.x,j.y,j.z,j.w):I.set(j,ce,pe,le),he.scissor(F.copy(I).multiplyScalar(N).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(j){he.setScissorTest(K=j)},this.setOpaqueSort=function(j){Q=j},this.setTransparentSort=function(j){$=j},this.getClearColor=function(j){return j.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(j=!0,ce=!0,pe=!0){let le=0;j&&(le|=16384),ce&&(le|=256),pe&&(le|=1024),B.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),J.dispose(),L.dispose(),_e.dispose(),W.dispose(),M.dispose(),b.dispose(),ie.dispose(),xe.dispose(),R.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ee),Se.removeEventListener("sessionend",De),U&&(U.dispose(),U=null),He.stop()};function Te(j){j.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const j=Me.autoReset,ce=te.enabled,pe=te.autoUpdate,le=te.needsUpdate,me=te.type;Ae(),Me.autoReset=j,te.enabled=ce,te.autoUpdate=pe,te.needsUpdate=le,te.type=me}function Re(j){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",j.statusMessage)}function Ne(j){const ce=j.target;ce.removeEventListener("dispose",Ne),Je(ce)}function Je(j){re(j),_e.remove(j)}function re(j){const ce=_e.get(j).programs;ce!==void 0&&(ce.forEach(function(pe){R.releaseProgram(pe)}),j.isShaderMaterial&&R.releaseShaderCache(j))}this.renderBufferDirect=function(j,ce,pe,le,me,Le){ce===null&&(ce=Z);const Ie=me.isMesh&&me.matrixWorld.determinant()<0,ze=eM(j,ce,pe,le,me);he.setMaterial(le,Ie);let Be=pe.index;const qe=pe.attributes.position;if(Be===null){if(qe===void 0||qe.count===0)return}else if(Be.count===0)return;let Fe=1;le.wireframe===!0&&(Be=_.getWireframeAttribute(pe),Fe=2),ie.setup(me,le,ze,pe,Be);let Ue,lt=ve;Be!==null&&(Ue=d.get(Be),lt=Ce,lt.setIndex(Ue));const Kr=Be!==null?Be.count:qe.count,jn=pe.drawRange.start*Fe,Gn=pe.drawRange.count*Fe,Jt=Le!==null?Le.start*Fe:0,We=Le!==null?Le.count*Fe:1/0,Hn=Math.max(jn,Jt),Mi=Math.min(Kr,jn+Gn,Jt+We)-1,It=Math.max(0,Mi-Hn+1);if(It!==0){if(me.isMesh)le.wireframe===!0?(he.setLineWidth(le.wireframeLinewidth*se()),lt.setMode(1)):lt.setMode(4);else if(me.isLine){let Pr=le.linewidth;Pr===void 0&&(Pr=1),he.setLineWidth(Pr*se()),me.isLineSegments?lt.setMode(1):me.isLineLoop?lt.setMode(2):lt.setMode(3)}else me.isPoints?lt.setMode(0):me.isSprite&&lt.setMode(4);if(me.isInstancedMesh)lt.renderInstances(Hn,It,me.count);else if(pe.isInstancedBufferGeometry){const Pr=Math.min(pe.instanceCount,pe._maxInstanceCount);lt.renderInstances(Hn,It,Pr)}else lt.render(Hn,It)}},this.compile=function(j,ce){function pe(le,me,Le){le.transparent===!0&&le.side===vr?(le.side=xt,le.needsUpdate=!0,Rt(le,me,Le),le.side=Qr,le.needsUpdate=!0,Rt(le,me,Le),le.side=vr):Rt(le,me,Le)}f=L.get(j),f.init(),v.push(f),j.traverseVisible(function(le){le.isLight&&le.layers.test(ce.layers)&&(f.pushLight(le),le.castShadow&&f.pushShadow(le))}),f.setupLights(p.physicallyCorrectLights),j.traverse(function(le){const me=le.material;if(me)if(Array.isArray(me))for(let Le=0;Le<me.length;Le++){const Ie=me[Le];pe(Ie,j,le)}else pe(me,j,le)}),v.pop(),f=null};let fe=null;function ye(j){fe&&fe(j)}function Ee(){He.stop()}function De(){He.start()}const He=new oc;He.setAnimationLoop(ye),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(j){fe=j,Se.setAnimationLoop(j),j===null?He.stop():He.start()},Se.addEventListener("sessionstart",Ee),Se.addEventListener("sessionend",De),this.render=function(j,ce){if(ce!==void 0&&ce.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ce.parent===null&&ce.matrixWorldAutoUpdate===!0&&ce.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(ce),ce=Se.getCamera()),j.isScene===!0&&j.onBeforeRender(p,j,ce,S),f=L.get(j,v.length),f.init(),v.push(f),q.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),oe.setFromProjectionMatrix(q),ee=this.localClippingEnabled,ae=P.init(this.clippingPlanes,ee,ce),h=J.get(j,g.length),h.init(),g.push(h),st(j,ce,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Q,$),ae===!0&&P.beginShadows();const pe=f.state.shadowsArray;if(te.render(pe,j,ce),ae===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(h,j),f.setupLights(p.physicallyCorrectLights),ce.isArrayCamera){const le=ce.cameras;for(let me=0,Le=le.length;me<Le;me++){const Ie=le[me];ft(h,j,Ie,Ie.viewport)}}else ft(h,j,ce);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),j.isScene===!0&&j.onAfterRender(p,j,ce),ie.resetDefaultState(),x=-1,w=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,g.pop(),g.length>0?h=g[g.length-1]:h=null};function st(j,ce,pe,le){if(j.visible===!1)return;if(j.layers.test(ce.layers)){if(j.isGroup)pe=j.renderOrder;else if(j.isLOD)j.autoUpdate===!0&&j.update(ce);else if(j.isLight)f.pushLight(j),j.castShadow&&f.pushShadow(j);else if(j.isSprite){if(!j.frustumCulled||oe.intersectsSprite(j)){le&&k.setFromMatrixPosition(j.matrixWorld).applyMatrix4(q);const Le=b.update(j),Ie=j.material;Ie.visible&&h.push(j,Le,Ie,pe,k.z,null)}}else if((j.isMesh||j.isLine||j.isPoints)&&(j.isSkinnedMesh&&j.skeleton.frame!==Me.render.frame&&(j.skeleton.update(),j.skeleton.frame=Me.render.frame),!j.frustumCulled||oe.intersectsObject(j))){le&&k.setFromMatrixPosition(j.matrixWorld).applyMatrix4(q);const Le=b.update(j),Ie=j.material;if(Array.isArray(Ie)){const ze=Le.groups;for(let Be=0,qe=ze.length;Be<qe;Be++){const Fe=ze[Be],Ue=Ie[Fe.materialIndex];Ue&&Ue.visible&&h.push(j,Le,Ue,pe,k.z,Fe)}}else Ie.visible&&h.push(j,Le,Ie,pe,k.z,null)}}const me=j.children;for(let Le=0,Ie=me.length;Le<Ie;Le++)st(me[Le],ce,pe,le)}function ft(j,ce,pe,le){const me=j.opaque,Le=j.transmissive,Ie=j.transparent;f.setupLightsView(pe),Le.length>0&&$r(me,ce,pe),le&&he.viewport(C.copy(le)),me.length>0&&Xe(me,ce,pe),Le.length>0&&Xe(Le,ce,pe),Ie.length>0&&Xe(Ie,ce,pe),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function $r(j,ce,pe){const le=ue.isWebGL2;U===null&&(U=new _r(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Vn:Or,minFilter:Ti,samples:le&&a===!0?4:0})),p.getDrawingBufferSize(z),le?U.setSize(z.x,z.y):U.setSize(ro(z.x),ro(z.y));const me=p.getRenderTarget();p.setRenderTarget(U),p.clear();const Le=p.toneMapping;p.toneMapping=Zt,Xe(j,ce,pe),p.toneMapping=Le,T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U),p.setRenderTarget(me)}function Xe(j,ce,pe){const le=ce.isScene===!0?ce.overrideMaterial:null;for(let me=0,Le=j.length;me<Le;me++){const Ie=j[me],ze=Ie.object,Be=Ie.geometry,qe=le===null?Ie.material:le,Fe=Ie.group;ze.layers.test(pe.layers)&&gr(ze,ce,pe,Be,qe,Fe)}}function gr(j,ce,pe,le,me,Le){j.onBeforeRender(p,ce,pe,le,me,Le),j.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,j.matrixWorld),j.normalMatrix.getNormalMatrix(j.modelViewMatrix),me.onBeforeRender(p,ce,pe,le,j,Le),me.transparent===!0&&me.side===vr?(me.side=xt,me.needsUpdate=!0,p.renderBufferDirect(pe,ce,le,me,j,Le),me.side=Qr,me.needsUpdate=!0,p.renderBufferDirect(pe,ce,le,me,j,Le),me.side=vr):p.renderBufferDirect(pe,ce,le,me,j,Le),j.onAfterRender(p,ce,pe,le,me,Le)}function Rt(j,ce,pe){ce.isScene!==!0&&(ce=Z);const le=_e.get(j),me=f.state.lights,Le=f.state.shadowsArray,Ie=me.state.version,ze=R.getParameters(j,me.state,Le,ce,pe),Be=R.getProgramCacheKey(ze);let qe=le.programs;le.environment=j.isMeshStandardMaterial?ce.environment:null,le.fog=ce.fog,le.envMap=(j.isMeshStandardMaterial?M:W).get(j.envMap||le.environment),qe===void 0&&(j.addEventListener("dispose",Ne),qe=new Map,le.programs=qe);let Fe=qe.get(Be);if(Fe!==void 0){if(le.currentProgram===Fe&&le.lightsStateVersion===Ie)return Ld(j,ze),Fe}else ze.uniforms=R.getUniforms(j),j.onBuild(pe,ze,p),j.onBeforeCompile(ze,p),Fe=R.acquireProgram(ze,Be),qe.set(Be,Fe),le.uniforms=ze.uniforms;const Ue=le.uniforms;(!j.isShaderMaterial&&!j.isRawShaderMaterial||j.clipping===!0)&&(Ue.clippingPlanes=P.uniform),Ld(j,ze),le.needsLights=rM(j),le.lightsStateVersion=Ie,le.needsLights&&(Ue.ambientLightColor.value=me.state.ambient,Ue.lightProbe.value=me.state.probe,Ue.directionalLights.value=me.state.directional,Ue.directionalLightShadows.value=me.state.directionalShadow,Ue.spotLights.value=me.state.spot,Ue.spotLightShadows.value=me.state.spotShadow,Ue.rectAreaLights.value=me.state.rectArea,Ue.ltc_1.value=me.state.rectAreaLTC1,Ue.ltc_2.value=me.state.rectAreaLTC2,Ue.pointLights.value=me.state.point,Ue.pointLightShadows.value=me.state.pointShadow,Ue.hemisphereLights.value=me.state.hemi,Ue.directionalShadowMap.value=me.state.directionalShadowMap,Ue.directionalShadowMatrix.value=me.state.directionalShadowMatrix,Ue.spotShadowMap.value=me.state.spotShadowMap,Ue.spotLightMatrix.value=me.state.spotLightMatrix,Ue.spotLightMap.value=me.state.spotLightMap,Ue.pointShadowMap.value=me.state.pointShadowMap,Ue.pointShadowMatrix.value=me.state.pointShadowMatrix);const lt=Fe.getUniforms(),Kr=Qi.seqWithValue(lt.seq,Ue);return le.currentProgram=Fe,le.uniformsList=Kr,Fe}function Ld(j,ce){const pe=_e.get(j);pe.outputEncoding=ce.outputEncoding,pe.instancing=ce.instancing,pe.skinning=ce.skinning,pe.morphTargets=ce.morphTargets,pe.morphNormals=ce.morphNormals,pe.morphColors=ce.morphColors,pe.morphTargetsCount=ce.morphTargetsCount,pe.numClippingPlanes=ce.numClippingPlanes,pe.numIntersection=ce.numClipIntersection,pe.vertexAlphas=ce.vertexAlphas,pe.vertexTangents=ce.vertexTangents,pe.toneMapping=ce.toneMapping}function eM(j,ce,pe,le,me){ce.isScene!==!0&&(ce=Z),T.resetTextureUnits();const Le=ce.fog,Ie=le.isMeshStandardMaterial?ce.environment:null,ze=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:kr,Be=(le.isMeshStandardMaterial?M:W).get(le.envMap||Ie),qe=le.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Fe=!!le.normalMap&&!!pe.attributes.tangent,Ue=!!pe.morphAttributes.position,lt=!!pe.morphAttributes.normal,Kr=!!pe.morphAttributes.color,jn=le.toneMapped?p.toneMapping:Zt,Gn=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Jt=Gn!==void 0?Gn.length:0,We=_e.get(le),Hn=f.state.lights;if(ae===!0&&(ee===!0||j!==w)){const At=j===w&&le.id===x;P.setState(le,j,At)}let Mi=!1;le.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Hn.state.version||We.outputEncoding!==ze||me.isInstancedMesh&&We.instancing===!1||!me.isInstancedMesh&&We.instancing===!0||me.isSkinnedMesh&&We.skinning===!1||!me.isSkinnedMesh&&We.skinning===!0||We.envMap!==Be||le.fog===!0&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==P.numPlanes||We.numIntersection!==P.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Fe||We.morphTargets!==Ue||We.morphNormals!==lt||We.morphColors!==Kr||We.toneMapping!==jn||ue.isWebGL2===!0&&We.morphTargetsCount!==Jt)&&(Mi=!0):(Mi=!0,We.__version=le.version);let It=We.currentProgram;Mi===!0&&(It=Rt(le,ce,me));let Pr=!1,Si=!1,Qs=!1;const vt=It.getUniforms(),Jr=We.uniforms;if(he.useProgram(It.program)&&(Pr=!0,Si=!0,Qs=!0),le.id!==x&&(x=le.id,Si=!0),Pr||w!==j){if(vt.setValue(B,"projectionMatrix",j.projectionMatrix),ue.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(j.far+1)/Math.LN2)),w!==j&&(w=j,Si=!0,Qs=!0),le.isShaderMaterial||le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshStandardMaterial||le.envMap){const At=vt.map.cameraPosition;At!==void 0&&At.setValue(B,k.setFromMatrixPosition(j.matrixWorld))}(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&vt.setValue(B,"isOrthographic",j.isOrthographicCamera===!0),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial||le.isShadowMaterial||me.isSkinnedMesh)&&vt.setValue(B,"viewMatrix",j.matrixWorldInverse)}if(me.isSkinnedMesh){vt.setOptional(B,me,"bindMatrix"),vt.setOptional(B,me,"bindMatrixInverse");const At=me.skeleton;At&&(ue.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),vt.setValue(B,"boneTexture",At.boneTexture,T),vt.setValue(B,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const el=pe.morphAttributes;if((el.position!==void 0||el.normal!==void 0||el.color!==void 0&&ue.isWebGL2===!0)&&ge.update(me,pe,le,It),(Si||We.receiveShadow!==me.receiveShadow)&&(We.receiveShadow=me.receiveShadow,vt.setValue(B,"receiveShadow",me.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Jr.envMap.value=Be,Jr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Si&&(vt.setValue(B,"toneMappingExposure",p.toneMappingExposure),We.needsLights&&tM(Jr,Qs),Le&&le.fog===!0&&H.refreshFogUniforms(Jr,Le),H.refreshMaterialUniforms(Jr,le,N,G,U),Qi.upload(B,We.uniformsList,Jr,T)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Qi.upload(B,We.uniformsList,Jr,T),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&vt.setValue(B,"center",me.center),vt.setValue(B,"modelViewMatrix",me.modelViewMatrix),vt.setValue(B,"normalMatrix",me.normalMatrix),vt.setValue(B,"modelMatrix",me.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const At=le.uniformsGroups;for(let tl=0,nM=At.length;tl<nM;tl++)if(ue.isWebGL2){const Pd=At[tl];xe.update(Pd,It),xe.bind(Pd,It)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return It}function tM(j,ce){j.ambientLightColor.needsUpdate=ce,j.lightProbe.needsUpdate=ce,j.directionalLights.needsUpdate=ce,j.directionalLightShadows.needsUpdate=ce,j.pointLights.needsUpdate=ce,j.pointLightShadows.needsUpdate=ce,j.spotLights.needsUpdate=ce,j.spotLightShadows.needsUpdate=ce,j.rectAreaLights.needsUpdate=ce,j.hemisphereLights.needsUpdate=ce}function rM(j){return j.isMeshLambertMaterial||j.isMeshToonMaterial||j.isMeshPhongMaterial||j.isMeshStandardMaterial||j.isShadowMaterial||j.isShaderMaterial&&j.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(j,ce,pe){_e.get(j.texture).__webglTexture=ce,_e.get(j.depthTexture).__webglTexture=pe;const le=_e.get(j);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=pe===void 0,le.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(j,ce){const pe=_e.get(j);pe.__webglFramebuffer=ce,pe.__useDefaultFramebuffer=ce===void 0},this.setRenderTarget=function(j,ce=0,pe=0){S=j,y=ce,E=pe;let le=!0,me=null,Le=!1,Ie=!1;if(j){const ze=_e.get(j);ze.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),le=!1):ze.__webglFramebuffer===void 0?T.setupRenderTarget(j):ze.__hasExternalTextures&&T.rebindTextures(j,_e.get(j.texture).__webglTexture,_e.get(j.depthTexture).__webglTexture);const Be=j.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ie=!0);const qe=_e.get(j).__webglFramebuffer;j.isWebGLCubeRenderTarget?(me=qe[ce],Le=!0):ue.isWebGL2&&j.samples>0&&T.useMultisampledRTT(j)===!1?me=_e.get(j).__webglMultisampledFramebuffer:me=qe,C.copy(j.viewport),F.copy(j.scissor),A=j.scissorTest}else C.copy(O).multiplyScalar(N).floor(),F.copy(I).multiplyScalar(N).floor(),A=K;if(he.bindFramebuffer(36160,me)&&ue.drawBuffers&&le&&he.drawBuffers(j,me),he.viewport(C),he.scissor(F),he.setScissorTest(A),Le){const ze=_e.get(j.texture);B.framebufferTexture2D(36160,36064,34069+ce,ze.__webglTexture,pe)}else if(Ie){const ze=_e.get(j.texture),Be=ce||0;B.framebufferTextureLayer(36160,36064,ze.__webglTexture,pe||0,Be)}x=-1},this.readRenderTargetPixels=function(j,ce,pe,le,me,Le,Ie){if(!(j&&j.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=_e.get(j).__webglFramebuffer;if(j.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){he.bindFramebuffer(36160,ze);try{const Be=j.texture,qe=Be.format,Fe=Be.type;if(qe!==Nt&&X.convert(qe)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Fe===Vn&&(ne.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Fe!==Or&&X.convert(Fe)!==B.getParameter(35738)&&!(Fe===Rr&&(ue.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ce>=0&&ce<=j.width-le&&pe>=0&&pe<=j.height-me&&B.readPixels(ce,pe,le,me,X.convert(qe),X.convert(Fe),Le)}finally{const Be=S!==null?_e.get(S).__webglFramebuffer:null;he.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(j,ce,pe=0){const le=Math.pow(2,-pe),me=Math.floor(ce.image.width*le),Le=Math.floor(ce.image.height*le);T.setTexture2D(ce,0),B.copyTexSubImage2D(3553,pe,0,0,j.x,j.y,me,Le),he.unbindTexture()},this.copyTextureToTexture=function(j,ce,pe,le=0){const me=ce.image.width,Le=ce.image.height,Ie=X.convert(pe.format),ze=X.convert(pe.type);T.setTexture2D(pe,0),B.pixelStorei(37440,pe.flipY),B.pixelStorei(37441,pe.premultiplyAlpha),B.pixelStorei(3317,pe.unpackAlignment),ce.isDataTexture?B.texSubImage2D(3553,le,j.x,j.y,me,Le,Ie,ze,ce.image.data):ce.isCompressedTexture?B.compressedTexSubImage2D(3553,le,j.x,j.y,ce.mipmaps[0].width,ce.mipmaps[0].height,Ie,ce.mipmaps[0].data):B.texSubImage2D(3553,le,j.x,j.y,Ie,ze,ce.image),le===0&&pe.generateMipmaps&&B.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(j,ce,pe,le,me=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=j.max.x-j.min.x+1,Ie=j.max.y-j.min.y+1,ze=j.max.z-j.min.z+1,Be=X.convert(le.format),qe=X.convert(le.type);let Fe;if(le.isData3DTexture)T.setTexture3D(le,0),Fe=32879;else if(le.isDataArrayTexture)T.setTexture2DArray(le,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,le.flipY),B.pixelStorei(37441,le.premultiplyAlpha),B.pixelStorei(3317,le.unpackAlignment);const Ue=B.getParameter(3314),lt=B.getParameter(32878),Kr=B.getParameter(3316),jn=B.getParameter(3315),Gn=B.getParameter(32877),Jt=pe.isCompressedTexture?pe.mipmaps[0]:pe.image;B.pixelStorei(3314,Jt.width),B.pixelStorei(32878,Jt.height),B.pixelStorei(3316,j.min.x),B.pixelStorei(3315,j.min.y),B.pixelStorei(32877,j.min.z),pe.isDataTexture||pe.isData3DTexture?B.texSubImage3D(Fe,me,ce.x,ce.y,ce.z,Le,Ie,ze,Be,qe,Jt.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Fe,me,ce.x,ce.y,ce.z,Le,Ie,ze,Be,Jt.data)):B.texSubImage3D(Fe,me,ce.x,ce.y,ce.z,Le,Ie,ze,Be,qe,Jt),B.pixelStorei(3314,Ue),B.pixelStorei(32878,lt),B.pixelStorei(3316,Kr),B.pixelStorei(3315,jn),B.pixelStorei(32877,Gn),me===0&&le.generateMipmaps&&B.generateMipmap(Fe),he.unbindTexture()},this.initTexture=function(j){j.isCubeTexture?T.setTextureCube(j,0):j.isData3DTexture?T.setTexture3D(j,0):j.isDataArrayTexture||j.isCompressedArrayTexture?T.setTexture2DArray(j,0):T.setTexture2D(j,0),he.unbindTexture()},this.resetState=function(){y=0,E=0,S=null,he.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ev extends Rc{}Ev.prototype.isWebGL1Renderer=!0;class Av extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ic extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new Y,Nc=new Y,zc=new Ye,ko=new po,ea=new Ii;class Tv extends ct{constructor(e=new _t,t=new Ic){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)kc.fromBufferAttribute(t,i-1),Nc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kc.distanceTo(Nc);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=a,e.ray.intersectsSphere(ea)===!1)return;zc.copy(i).invert(),ko.copy(e.ray).applyMatrix4(zc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new Y,u=new Y,h=new Y,f=new Y,g=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const m=Math.max(0,s.start),y=Math.min(v.count,s.start+s.count);for(let E=m,S=y-1;E<S;E+=g){const x=v.getX(E),w=v.getX(E+1);if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,w),ko.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,s.start),y=Math.min(p.count,s.start+s.count);for(let E=m,S=y-1;E<S;E+=g){if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,E+1),ko.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}class sr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const a=n.length;let s;t?s=t:s=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(a-1);const u=n[i],h=n[i+1]-u,f=(s-u)/h;return(i+f)/(a-1)}getTangent(e,t){let n=e-1e-4,i=e+1e-4;n<0&&(n=0),i>1&&(i=1);const a=this.getPoint(n),s=this.getPoint(i),o=t||(a.isVector2?new we:new Y);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Y,i=[],a=[],s=[],o=new Y,l=new Ye;for(let g=0;g<=e;g++){const v=g/e;i[g]=this.getTangentAt(v,new Y)}a[0]=new Y,s[0]=new Y;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),s[0].crossVectors(i[0],a[0]);for(let g=1;g<=e;g++){if(a[g]=a[g-1].clone(),s[g]=s[g-1].clone(),o.crossVectors(i[g-1],i[g]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(ht(i[g-1].dot(i[g]),-1,1));a[g].applyMatrix4(l.makeRotationAxis(o,v))}s[g].crossVectors(i[g],a[g])}if(t===!0){let g=Math.acos(ht(a[0].dot(a[e]),-1,1));g/=e,i[0].dot(o.crossVectors(a[0],a[e]))>0&&(g=-g);for(let v=1;v<=e;v++)a[v].applyMatrix4(l.makeRotationAxis(i[v],g*v)),s[v].crossVectors(i[v],a[v])}return{tangents:i,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bc extends sr{constructor(e=0,t=0,n=1,i=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new we,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(s?a=0:a=i),this.aClockwise===!0&&!s&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*u-g*h+this.aX,c=f*h+g*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Cv extends Bc{constructor(e,t,n,i,a,s){super(e,t,n,n,i,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function No(){let r=0,e=0,t=0,n=0;function i(a,s,o,l){r=a,e=o,t=-3*a+3*s-2*o-l,n=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){i(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,u,h){let f=(s-a)/c-(o-a)/(c+u)+(o-s)/u,g=(o-s)/u-(l-s)/(u+h)+(l-o)/h;f*=u,g*=u,i(s,o,f,g)},calc:function(a){const s=a*a,o=s*a;return r+e*a+t*s+n*o}}}const ta=new Y,zo=new No,Bo=new No,Fo=new No;class Lv extends sr{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Y){const n=t,i=this.points,a=i.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%a]:(ta.subVectors(i[0],i[1]).add(i[0]),c=ta);const h=i[o%a],f=i[(o+1)%a];if(this.closed||o+2<a?u=i[(o+2)%a]:(ta.subVectors(i[a-1],i[a-2]).add(i[a-1]),u=ta),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),g),p=Math.pow(h.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(u),g);p<1e-4&&(p=1),v<1e-4&&(v=p),m<1e-4&&(m=p),zo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,v,p,m),Bo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,v,p,m),Fo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,v,p,m)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Bo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Fo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(zo.calc(l),Bo.calc(l),Fo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fc(r,e,t,n,i){const a=(n-e)*.5,s=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+a+s)*l+(-3*t+3*n-2*a-s)*o+a*r+t}function Pv(r,e){const t=1-r;return t*t*e}function Ov(r,e){return 2*(1-r)*r*e}function Dv(r,e){return r*r*e}function ei(r,e,t,n){return Pv(r,e)+Ov(r,t)+Dv(r,n)}function Rv(r,e){const t=1-r;return t*t*t*e}function Iv(r,e){const t=1-r;return 3*t*t*r*e}function kv(r,e){return 3*(1-r)*r*r*e}function Nv(r,e){return r*r*r*e}function ti(r,e,t,n,i){return Rv(r,e)+Iv(r,t)+kv(r,n)+Nv(r,i)}class zv extends sr{constructor(e=new we,t=new we,n=new we,i=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new we){const n=t,i=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(ti(e,i.x,a.x,s.x,o.x),ti(e,i.y,a.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uc extends sr{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(ti(e,i.x,a.x,s.x,o.x),ti(e,i.y,a.y,s.y,o.y),ti(e,i.z,a.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bv extends sr{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new we;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fv extends sr{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uv extends sr{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,i=this.v0,a=this.v1,s=this.v2;return n.set(ei(e,i.x,a.x,s.x),ei(e,i.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uo extends sr{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,a=this.v1,s=this.v2;return n.set(ei(e,i.x,a.x,s.x),ei(e,i.y,a.y,s.y),ei(e,i.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jv extends sr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,i=this.points,a=(i.length-1)*e,s=Math.floor(a),o=a-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(Fc(o,l.x,c.x,u.x,h.x),Fc(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new we().fromArray(i))}return this}}var Gv=Object.freeze({__proto__:null,ArcCurve:Cv,CatmullRomCurve3:Lv,CubicBezierCurve:zv,CubicBezierCurve3:Uc,EllipseCurve:Bc,LineCurve:Bv,LineCurve3:Fv,QuadraticBezierCurve:Uv,QuadraticBezierCurve3:Uo,SplineCurve:jv});class ra extends _t{constructor(e=1,t=1,n=1,i=8,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const u=[],h=[],f=[],g=[];let v=0;const p=[],m=n/2;let y=0;E(),s===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(g,2));function E(){const x=new Y,w=new Y;let C=0;const F=(t-e)/n;for(let A=0;A<=a;A++){const D=[],G=A/a,N=G*(t-e)+e;for(let Q=0;Q<=i;Q++){const $=Q/i,O=$*l+o,I=Math.sin(O),K=Math.cos(O);w.x=N*I,w.y=-G*n+m,w.z=N*K,h.push(w.x,w.y,w.z),x.set(I,F,K).normalize(),f.push(x.x,x.y,x.z),g.push($,1-G),D.push(v++)}p.push(D)}for(let A=0;A<i;A++)for(let D=0;D<a;D++){const G=p[D][A],N=p[D+1][A],Q=p[D+1][A+1],$=p[D][A+1];u.push(G,N,$),u.push(N,Q,$),C+=6}c.addGroup(y,C,0),y+=C}function S(x){const w=v,C=new we,F=new Y;let A=0;const D=x===!0?e:t,G=x===!0?1:-1;for(let Q=1;Q<=i;Q++)h.push(0,m*G,0),f.push(0,G,0),g.push(.5,.5),v++;const N=v;for(let Q=0;Q<=i;Q++){const $=Q/i*l+o,O=Math.cos($),I=Math.sin($);F.x=D*I,F.y=m*G,F.z=D*O,h.push(F.x,F.y,F.z),f.push(0,G,0),C.x=O*.5+.5,C.y=I*.5*G+.5,g.push(C.x,C.y),v++}for(let Q=0;Q<i;Q++){const $=w+Q,O=N+Q;x===!0?u.push(O,O+1,$):u.push(O+1,O,$),A+=3}c.addGroup(y,A,x===!0?1:2),y+=A}}static fromJSON(e){return new ra(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jo extends ra{constructor(e=1,t=1,n=8,i=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,i,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new jo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ri extends _t{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const u=[],h=new Y,f=new Y,g=[],v=[],p=[],m=[];for(let y=0;y<=n;y++){const E=[],S=y/n;let x=0;y==0&&s==0?x=.5/t:y==n&&l==Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const C=w/t;h.x=-e*Math.cos(i+C*a)*Math.sin(s+S*o),h.y=e*Math.cos(s+S*o),h.z=e*Math.sin(i+C*a)*Math.sin(s+S*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),m.push(C+x,1-S),E.push(c++)}u.push(E)}for(let y=0;y<n;y++)for(let E=0;E<t;E++){const S=u[y][E+1],x=u[y][E],w=u[y+1][E],C=u[y+1][E+1];(y!==0||s>0)&&g.push(S,x,C),(y!==n-1||l<Math.PI)&&g.push(x,w,C)}this.setIndex(g),this.setAttribute("position",new Ze(v,3)),this.setAttribute("normal",new Ze(p,3)),this.setAttribute("uv",new Ze(m,2))}static fromJSON(e){return new ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Go extends _t{constructor(e=new Uo(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new Y,l=new Y,c=new we;let u=new Y;const h=[],f=[],g=[],v=[];p(),this.setIndex(v),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(g,2));function p(){for(let S=0;S<t;S++)m(S);m(a===!1?t:0),E(),y()}function m(S){u=e.getPointAt(S/t,u);const x=s.normals[S],w=s.binormals[S];for(let C=0;C<=i;C++){const F=C/i*Math.PI*2,A=Math.sin(F),D=-Math.cos(F);l.x=D*x.x+A*w.x,l.y=D*x.y+A*w.y,l.z=D*x.z+A*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function y(){for(let S=1;S<=t;S++)for(let x=1;x<=i;x++){const w=(i+1)*(S-1)+(x-1),C=(i+1)*S+(x-1),F=(i+1)*S+x,A=(i+1)*(S-1)+x;v.push(w,C,A),v.push(C,F,A)}}function E(){for(let S=0;S<=t;S++)for(let x=0;x<=i;x++)c.x=S/t,c.y=x/i,g.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Go(new Gv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Hv extends Gr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ei,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wv extends Gr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ei,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const jc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Vv{constructor(e,t,n){const i=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,a===!1&&i.onStart!==void 0&&i.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const g=c[h],v=c[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return v}return null}}}const qv=new Vv;class Gc{constructor(e){this.manager=e!==void 0?e:qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Xv extends Gc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=jc.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=Xn("img");function l(){u(),jc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(h){u(),i&&i(h),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Yv extends Gc{constructor(e){super(e)}load(e,t,n,i){const a=new Lt,s=new Xv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class Hc extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ho=new Ye,Wc=new Y,Vc=new Y;class $v{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kv extends $v{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jv extends Hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DefaultUp),this.updateMatrix(),this.target=new ct,this.shadow=new Kv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zv extends Hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xc(){return(typeof performance>"u"?Date:performance).now()}class Yc{constructor(e,t,n=0,i=1/0){this.ray=new po(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Wo(e,this,n,t),n.sort($c),n}intersectObjects(e,t=!0,n=[]){for(let i=0,a=e.length;i<a;i++)Wo(e[i],this,n,t);return n.sort($c),n}}function $c(r,e){return r.distance-e.distance}function Wo(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let a=0,s=i.length;a<s;a++)Wo(i[a],e,t,!0)}}class Vo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);const An=new Tr,Cr=new Yc,ni=new we,Kc=new Y,na=new Y,qo=new Y,Jc=new Ye;class Qv extends zt{constructor(e,t,n){super(),n.style.touchAction="none";let i=null,a=null;const s=[],o=this;function l(){n.addEventListener("pointermove",g),n.addEventListener("pointerdown",v),n.addEventListener("pointerup",p),n.addEventListener("pointerleave",p)}function c(){n.removeEventListener("pointermove",g),n.removeEventListener("pointerdown",v),n.removeEventListener("pointerup",p),n.removeEventListener("pointerleave",p),n.style.cursor=""}function u(){c()}function h(){return e}function f(){return Cr}function g(y){if(o.enabled!==!1){if(m(y),Cr.setFromCamera(ni,t),i){Cr.ray.intersectPlane(An,na)&&i.position.copy(na.sub(Kc).applyMatrix4(Jc)),o.dispatchEvent({type:"drag",object:i});return}if(y.pointerType==="mouse"||y.pointerType==="pen")if(s.length=0,Cr.setFromCamera(ni,t),Cr.intersectObjects(e,!0,s),s.length>0){const E=s[0].object;An.setFromNormalAndCoplanarPoint(t.getWorldDirection(An.normal),qo.setFromMatrixPosition(E.matrixWorld)),a!==E&&a!==null&&(o.dispatchEvent({type:"hoveroff",object:a}),n.style.cursor="auto",a=null),a!==E&&(o.dispatchEvent({type:"hoveron",object:E}),n.style.cursor="pointer",a=E)}else a!==null&&(o.dispatchEvent({type:"hoveroff",object:a}),n.style.cursor="auto",a=null)}}function v(y){o.enabled!==!1&&(m(y),s.length=0,Cr.setFromCamera(ni,t),Cr.intersectObjects(e,!0,s),s.length>0&&(i=o.transformGroup===!0?e[0]:s[0].object,An.setFromNormalAndCoplanarPoint(t.getWorldDirection(An.normal),qo.setFromMatrixPosition(i.matrixWorld)),Cr.ray.intersectPlane(An,na)&&(Jc.copy(i.parent.matrixWorld).invert(),Kc.copy(na).sub(qo.setFromMatrixPosition(i.matrixWorld))),n.style.cursor="move",o.dispatchEvent({type:"dragstart",object:i})))}function p(){o.enabled!==!1&&(i&&(o.dispatchEvent({type:"dragend",object:i}),i=null),n.style.cursor=a?"pointer":"auto")}function m(y){const E=n.getBoundingClientRect();ni.x=(y.clientX-E.left)/E.width*2-1,ni.y=-(y.clientY-E.top)/E.height*2+1}l(),this.enabled=!0,this.transformGroup=!1,this.activate=l,this.deactivate=c,this.dispose=u,this.getObjects=h,this.getRaycaster=f}}function ey(r,e,t){var n,i=1;r==null&&(r=0),e==null&&(e=0),t==null&&(t=0);function a(){var s,o=n.length,l,c=0,u=0,h=0;for(s=0;s<o;++s)l=n[s],c+=l.x||0,u+=l.y||0,h+=l.z||0;for(c=(c/o-r)*i,u=(u/o-e)*i,h=(h/o-t)*i,s=0;s<o;++s)l=n[s],c&&(l.x-=c),u&&(l.y-=u),h&&(l.z-=h)}return a.initialize=function(s){n=s},a.x=function(s){return arguments.length?(r=+s,a):r},a.y=function(s){return arguments.length?(e=+s,a):e},a.z=function(s){return arguments.length?(t=+s,a):t},a.strength=function(s){return arguments.length?(i=+s,a):i},a}function ty(r){var e=+this._x.call(null,r);return Zc(this.cover(e),e,r)}function Zc(r,e,t){if(isNaN(e))return r;var n,i=r._root,a={data:t},s=r._x0,o=r._x1,l,c,u,h,f;if(!i)return r._root=a,r;for(;i.length;)if((u=e>=(l=(s+o)/2))?s=l:o=l,n=i,!(i=i[h=+u]))return n[h]=a,r;if(c=+r._x.call(null,i.data),e===c)return a.next=i,n?n[h]=a:r._root=a,r;do n=n?n[h]=new Array(2):r._root=new Array(2),(u=e>=(l=(s+o)/2))?s=l:o=l;while((h=+u)==(f=+(c>=l)));return n[f]=i,n[h]=a,r}function ry(r){var e,t=r.length,n,i=new Array(t),a=1/0,s=-1/0;for(e=0;e<t;++e)isNaN(n=+this._x.call(null,r[e]))||(i[e]=n,n<a&&(a=n),n>s&&(s=n));if(a>s)return this;for(this.cover(a).cover(s),e=0;e<t;++e)Zc(this,i[e],r[e]);return this}function ny(r){if(isNaN(r=+r))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(r))+1;else{for(var n=t-e||1,i=this._root,a,s;e>r||r>=t;)switch(s=+(r<e),a=new Array(2),a[s]=i,i=a,n*=2,s){case 0:t=e+n;break;case 1:e=t-n;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=t,this}function iy(){var r=[];return this.visit(function(e){if(!e.length)do r.push(e.data);while(e=e.next)}),r}function ay(r){return arguments.length?this.cover(+r[0][0]).cover(+r[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function lr(r,e,t){this.node=r,this.x0=e,this.x1=t}function oy(r,e){var t,n=this._x0,i,a,s=this._x1,o=[],l=this._root,c,u;for(l&&o.push(new lr(l,n,s)),e==null?e=1/0:(n=r-e,s=r+e);c=o.pop();)if(!(!(l=c.node)||(i=c.x0)>s||(a=c.x1)<n))if(l.length){var h=(i+a)/2;o.push(new lr(l[1],h,a),new lr(l[0],i,h)),(u=+(r>=h))&&(c=o[o.length-1],o[o.length-1]=o[o.length-1-u],o[o.length-1-u]=c)}else{var f=Math.abs(r-+this._x.call(null,l.data));f<e&&(e=f,n=r-f,s=r+f,t=l.data)}return t}function sy(r){if(isNaN(l=+this._x.call(null,r)))return this;var e,t=this._root,n,i,a,s=this._x0,o=this._x1,l,c,u,h,f;if(!t)return this;if(t.length)for(;;){if((u=l>=(c=(s+o)/2))?s=c:o=c,e=t,!(t=t[h=+u]))return this;if(!t.length)break;e[h+1&1]&&(n=e,f=h)}for(;t.data!==r;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[h]=a:delete e[h],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(n?n[f]=t:this._root=t),this):(this._root=a,this)}function ly(r){for(var e=0,t=r.length;e<t;++e)this.remove(r[e]);return this}function cy(){return this._root}function uy(){var r=0;return this.visit(function(e){if(!e.length)do++r;while(e=e.next)}),r}function hy(r){var e=[],t,n=this._root,i,a,s;for(n&&e.push(new lr(n,this._x0,this._x1));t=e.pop();)if(!r(n=t.node,a=t.x0,s=t.x1)&&n.length){var o=(a+s)/2;(i=n[1])&&e.push(new lr(i,o,s)),(i=n[0])&&e.push(new lr(i,a,o))}return this}function dy(r){var e=[],t=[],n;for(this._root&&e.push(new lr(this._root,this._x0,this._x1));n=e.pop();){var i=n.node;if(i.length){var a,s=n.x0,o=n.x1,l=(s+o)/2;(a=i[0])&&e.push(new lr(a,s,l)),(a=i[1])&&e.push(new lr(a,l,o))}t.push(n)}for(;n=t.pop();)r(n.node,n.x0,n.x1);return this}function fy(r){return r[0]}function py(r){return arguments.length?(this._x=r,this):this._x}function Qc(r,e){var t=new Xo(e??fy,NaN,NaN);return r==null?t:t.addAll(r)}function Xo(r,e,t){this._x=r,this._x0=e,this._x1=t,this._root=void 0}function eu(r){for(var e={data:r.data},t=e;r=r.next;)t=t.next={data:r.data};return e}var bt=Qc.prototype=Xo.prototype;bt.copy=function(){var r=new Xo(this._x,this._x0,this._x1),e=this._root,t,n;if(!e)return r;if(!e.length)return r._root=eu(e),r;for(t=[{source:e,target:r._root=new Array(2)}];e=t.pop();)for(var i=0;i<2;++i)(n=e.source[i])&&(n.length?t.push({source:n,target:e.target[i]=new Array(2)}):e.target[i]=eu(n));return r},bt.add=ty,bt.addAll=ry,bt.cover=ny,bt.data=iy,bt.extent=ay,bt.find=oy,bt.remove=sy,bt.removeAll=ly,bt.root=cy,bt.size=uy,bt.visit=hy,bt.visitAfter=dy,bt.x=py;function my(r){const e=+this._x.call(null,r),t=+this._y.call(null,r);return tu(this.cover(e,t),e,t,r)}function tu(r,e,t,n){if(isNaN(e)||isNaN(t))return r;var i,a=r._root,s={data:n},o=r._x0,l=r._y0,c=r._x1,u=r._y1,h,f,g,v,p,m,y,E;if(!a)return r._root=s,r;for(;a.length;)if((p=e>=(h=(o+c)/2))?o=h:c=h,(m=t>=(f=(l+u)/2))?l=f:u=f,i=a,!(a=a[y=m<<1|p]))return i[y]=s,r;if(g=+r._x.call(null,a.data),v=+r._y.call(null,a.data),e===g&&t===v)return s.next=a,i?i[y]=s:r._root=s,r;do i=i?i[y]=new Array(4):r._root=new Array(4),(p=e>=(h=(o+c)/2))?o=h:c=h,(m=t>=(f=(l+u)/2))?l=f:u=f;while((y=m<<1|p)===(E=(v>=f)<<1|g>=h));return i[E]=a,i[y]=s,r}function gy(r){var e,t,n=r.length,i,a,s=new Array(n),o=new Array(n),l=1/0,c=1/0,u=-1/0,h=-1/0;for(t=0;t<n;++t)isNaN(i=+this._x.call(null,e=r[t]))||isNaN(a=+this._y.call(null,e))||(s[t]=i,o[t]=a,i<l&&(l=i),i>u&&(u=i),a<c&&(c=a),a>h&&(h=a));if(l>u||c>h)return this;for(this.cover(l,c).cover(u,h),t=0;t<n;++t)tu(this,s[t],o[t],r[t]);return this}function vy(r,e){if(isNaN(r=+r)||isNaN(e=+e))return this;var t=this._x0,n=this._y0,i=this._x1,a=this._y1;if(isNaN(t))i=(t=Math.floor(r))+1,a=(n=Math.floor(e))+1;else{for(var s=i-t||1,o=this._root,l,c;t>r||r>=i||n>e||e>=a;)switch(c=(e<n)<<1|r<t,l=new Array(4),l[c]=o,o=l,s*=2,c){case 0:i=t+s,a=n+s;break;case 1:t=i-s,a=n+s;break;case 2:i=t+s,n=a-s;break;case 3:t=i-s,n=a-s;break}this._root&&this._root.length&&(this._root=o)}return this._x0=t,this._y0=n,this._x1=i,this._y1=a,this}function yy(){var r=[];return this.visit(function(e){if(!e.length)do r.push(e.data);while(e=e.next)}),r}function _y(r){return arguments.length?this.cover(+r[0][0],+r[0][1]).cover(+r[1][0],+r[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function mt(r,e,t,n,i){this.node=r,this.x0=e,this.y0=t,this.x1=n,this.y1=i}function by(r,e,t){var n,i=this._x0,a=this._y0,s,o,l,c,u=this._x1,h=this._y1,f=[],g=this._root,v,p;for(g&&f.push(new mt(g,i,a,u,h)),t==null?t=1/0:(i=r-t,a=e-t,u=r+t,h=e+t,t*=t);v=f.pop();)if(!(!(g=v.node)||(s=v.x0)>u||(o=v.y0)>h||(l=v.x1)<i||(c=v.y1)<a))if(g.length){var m=(s+l)/2,y=(o+c)/2;f.push(new mt(g[3],m,y,l,c),new mt(g[2],s,y,m,c),new mt(g[1],m,o,l,y),new mt(g[0],s,o,m,y)),(p=(e>=y)<<1|r>=m)&&(v=f[f.length-1],f[f.length-1]=f[f.length-1-p],f[f.length-1-p]=v)}else{var E=r-+this._x.call(null,g.data),S=e-+this._y.call(null,g.data),x=E*E+S*S;if(x<t){var w=Math.sqrt(t=x);i=r-w,a=e-w,u=r+w,h=e+w,n=g.data}}return n}function xy(r){if(isNaN(u=+this._x.call(null,r))||isNaN(h=+this._y.call(null,r)))return this;var e,t=this._root,n,i,a,s=this._x0,o=this._y0,l=this._x1,c=this._y1,u,h,f,g,v,p,m,y;if(!t)return this;if(t.length)for(;;){if((v=u>=(f=(s+l)/2))?s=f:l=f,(p=h>=(g=(o+c)/2))?o=g:c=g,e=t,!(t=t[m=p<<1|v]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(n=e,y=m)}for(;t.data!==r;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[m]=a:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(n?n[y]=t:this._root=t),this):(this._root=a,this)}function wy(r){for(var e=0,t=r.length;e<t;++e)this.remove(r[e]);return this}function My(){return this._root}function Sy(){var r=0;return this.visit(function(e){if(!e.length)do++r;while(e=e.next)}),r}function Ey(r){var e=[],t,n=this._root,i,a,s,o,l;for(n&&e.push(new mt(n,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!r(n=t.node,a=t.x0,s=t.y0,o=t.x1,l=t.y1)&&n.length){var c=(a+o)/2,u=(s+l)/2;(i=n[3])&&e.push(new mt(i,c,u,o,l)),(i=n[2])&&e.push(new mt(i,a,u,c,l)),(i=n[1])&&e.push(new mt(i,c,s,o,u)),(i=n[0])&&e.push(new mt(i,a,s,c,u))}return this}function Ay(r){var e=[],t=[],n;for(this._root&&e.push(new mt(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var a,s=n.x0,o=n.y0,l=n.x1,c=n.y1,u=(s+l)/2,h=(o+c)/2;(a=i[0])&&e.push(new mt(a,s,o,u,h)),(a=i[1])&&e.push(new mt(a,u,o,l,h)),(a=i[2])&&e.push(new mt(a,s,h,u,c)),(a=i[3])&&e.push(new mt(a,u,h,l,c))}t.push(n)}for(;n=t.pop();)r(n.node,n.x0,n.y0,n.x1,n.y1);return this}function Ty(r){return r[0]}function Cy(r){return arguments.length?(this._x=r,this):this._x}function Ly(r){return r[1]}function Py(r){return arguments.length?(this._y=r,this):this._y}function ru(r,e,t){var n=new Yo(e??Ty,t??Ly,NaN,NaN,NaN,NaN);return r==null?n:n.addAll(r)}function Yo(r,e,t,n,i,a){this._x=r,this._y=e,this._x0=t,this._y0=n,this._x1=i,this._y1=a,this._root=void 0}function nu(r){for(var e={data:r.data},t=e;r=r.next;)t=t.next={data:r.data};return e}var gt=ru.prototype=Yo.prototype;gt.copy=function(){var r=new Yo(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,n;if(!e)return r;if(!e.length)return r._root=nu(e),r;for(t=[{source:e,target:r._root=new Array(4)}];e=t.pop();)for(var i=0;i<4;++i)(n=e.source[i])&&(n.length?t.push({source:n,target:e.target[i]=new Array(4)}):e.target[i]=nu(n));return r},gt.add=my,gt.addAll=gy,gt.cover=vy,gt.data=yy,gt.extent=_y,gt.find=by,gt.remove=xy,gt.removeAll=wy,gt.root=My,gt.size=Sy,gt.visit=Ey,gt.visitAfter=Ay,gt.x=Cy,gt.y=Py;function Oy(r){var e=+this._x.call(null,r),t=+this._y.call(null,r),n=+this._z.call(null,r);return iu(this.cover(e,t,n),e,t,n,r)}function iu(r,e,t,n,i){if(isNaN(e)||isNaN(t)||isNaN(n))return r;var a,s=r._root,o={data:i},l=r._x0,c=r._y0,u=r._z0,h=r._x1,f=r._y1,g=r._z1,v,p,m,y,E,S,x,w,C,F,A;if(!s)return r._root=o,r;for(;s.length;)if((x=e>=(v=(l+h)/2))?l=v:h=v,(w=t>=(p=(c+f)/2))?c=p:f=p,(C=n>=(m=(u+g)/2))?u=m:g=m,a=s,!(s=s[F=C<<2|w<<1|x]))return a[F]=o,r;if(y=+r._x.call(null,s.data),E=+r._y.call(null,s.data),S=+r._z.call(null,s.data),e===y&&t===E&&n===S)return o.next=s,a?a[F]=o:r._root=o,r;do a=a?a[F]=new Array(8):r._root=new Array(8),(x=e>=(v=(l+h)/2))?l=v:h=v,(w=t>=(p=(c+f)/2))?c=p:f=p,(C=n>=(m=(u+g)/2))?u=m:g=m;while((F=C<<2|w<<1|x)===(A=(S>=m)<<2|(E>=p)<<1|y>=v));return a[A]=s,a[F]=o,r}function Dy(r){var e,t,n=r.length,i,a,s,o=new Array(n),l=new Array(n),c=new Array(n),u=1/0,h=1/0,f=1/0,g=-1/0,v=-1/0,p=-1/0;for(t=0;t<n;++t)isNaN(i=+this._x.call(null,e=r[t]))||isNaN(a=+this._y.call(null,e))||isNaN(s=+this._z.call(null,e))||(o[t]=i,l[t]=a,c[t]=s,i<u&&(u=i),i>g&&(g=i),a<h&&(h=a),a>v&&(v=a),s<f&&(f=s),s>p&&(p=s));if(u>g||h>v||f>p)return this;for(this.cover(u,h,f).cover(g,v,p),t=0;t<n;++t)iu(this,o[t],l[t],c[t],r[t]);return this}function Ry(r,e,t){if(isNaN(r=+r)||isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,i=this._y0,a=this._z0,s=this._x1,o=this._y1,l=this._z1;if(isNaN(n))s=(n=Math.floor(r))+1,o=(i=Math.floor(e))+1,l=(a=Math.floor(t))+1;else{for(var c=s-n||1,u=this._root,h,f;n>r||r>=s||i>e||e>=o||a>t||t>=l;)switch(f=(t<a)<<2|(e<i)<<1|r<n,h=new Array(8),h[f]=u,u=h,c*=2,f){case 0:s=n+c,o=i+c,l=a+c;break;case 1:n=s-c,o=i+c,l=a+c;break;case 2:s=n+c,i=o-c,l=a+c;break;case 3:n=s-c,i=o-c,l=a+c;break;case 4:s=n+c,o=i+c,a=l-c;break;case 5:n=s-c,o=i+c,a=l-c;break;case 6:s=n+c,i=o-c,a=l-c;break;case 7:n=s-c,i=o-c,a=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=n,this._y0=i,this._z0=a,this._x1=s,this._y1=o,this._z1=l,this}function Iy(){var r=[];return this.visit(function(e){if(!e.length)do r.push(e.data);while(e=e.next)}),r}function ky(r){return arguments.length?this.cover(+r[0][0],+r[0][1],+r[0][2]).cover(+r[1][0],+r[1][1],+r[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Ve(r,e,t,n,i,a,s){this.node=r,this.x0=e,this.y0=t,this.z0=n,this.x1=i,this.y1=a,this.z1=s}function Ny(r,e,t,n){var i,a=this._x0,s=this._y0,o=this._z0,l,c,u,h,f,g,v=this._x1,p=this._y1,m=this._z1,y=[],E=this._root,S,x;for(E&&y.push(new Ve(E,a,s,o,v,p,m)),n==null?n=1/0:(a=r-n,s=e-n,o=t-n,v=r+n,p=e+n,m=t+n,n*=n);S=y.pop();)if(!(!(E=S.node)||(l=S.x0)>v||(c=S.y0)>p||(u=S.z0)>m||(h=S.x1)<a||(f=S.y1)<s||(g=S.z1)<o))if(E.length){var w=(l+h)/2,C=(c+f)/2,F=(u+g)/2;y.push(new Ve(E[7],w,C,F,h,f,g),new Ve(E[6],l,C,F,w,f,g),new Ve(E[5],w,c,F,h,C,g),new Ve(E[4],l,c,F,w,C,g),new Ve(E[3],w,C,u,h,f,F),new Ve(E[2],l,C,u,w,f,F),new Ve(E[1],w,c,u,h,C,F),new Ve(E[0],l,c,u,w,C,F)),(x=(t>=F)<<2|(e>=C)<<1|r>=w)&&(S=y[y.length-1],y[y.length-1]=y[y.length-1-x],y[y.length-1-x]=S)}else{var A=r-+this._x.call(null,E.data),D=e-+this._y.call(null,E.data),G=t-+this._z.call(null,E.data),N=A*A+D*D+G*G;if(N<n){var Q=Math.sqrt(n=N);a=r-Q,s=e-Q,o=t-Q,v=r+Q,p=e+Q,m=t+Q,i=E.data}}return i}function zy(r){if(isNaN(f=+this._x.call(null,r))||isNaN(g=+this._y.call(null,r))||isNaN(v=+this._z.call(null,r)))return this;var e,t=this._root,n,i,a,s=this._x0,o=this._y0,l=this._z0,c=this._x1,u=this._y1,h=this._z1,f,g,v,p,m,y,E,S,x,w,C;if(!t)return this;if(t.length)for(;;){if((E=f>=(p=(s+c)/2))?s=p:c=p,(S=g>=(m=(o+u)/2))?o=m:u=m,(x=v>=(y=(l+h)/2))?l=y:h=y,e=t,!(t=t[w=x<<2|S<<1|E]))return this;if(!t.length)break;(e[w+1&7]||e[w+2&7]||e[w+3&7]||e[w+4&7]||e[w+5&7]||e[w+6&7]||e[w+7&7])&&(n=e,C=w)}for(;t.data!==r;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[w]=a:delete e[w],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(n?n[C]=t:this._root=t),this):(this._root=a,this)}function By(r){for(var e=0,t=r.length;e<t;++e)this.remove(r[e]);return this}function Fy(){return this._root}function Uy(){var r=0;return this.visit(function(e){if(!e.length)do++r;while(e=e.next)}),r}function jy(r){var e=[],t,n=this._root,i,a,s,o,l,c,u;for(n&&e.push(new Ve(n,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!r(n=t.node,a=t.x0,s=t.y0,o=t.z0,l=t.x1,c=t.y1,u=t.z1)&&n.length){var h=(a+l)/2,f=(s+c)/2,g=(o+u)/2;(i=n[7])&&e.push(new Ve(i,h,f,g,l,c,u)),(i=n[6])&&e.push(new Ve(i,a,f,g,h,c,u)),(i=n[5])&&e.push(new Ve(i,h,s,g,l,f,u)),(i=n[4])&&e.push(new Ve(i,a,s,g,h,f,u)),(i=n[3])&&e.push(new Ve(i,h,f,o,l,c,g)),(i=n[2])&&e.push(new Ve(i,a,f,o,h,c,g)),(i=n[1])&&e.push(new Ve(i,h,s,o,l,f,g)),(i=n[0])&&e.push(new Ve(i,a,s,o,h,f,g))}return this}function Gy(r){var e=[],t=[],n;for(this._root&&e.push(new Ve(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();){var i=n.node;if(i.length){var a,s=n.x0,o=n.y0,l=n.z0,c=n.x1,u=n.y1,h=n.z1,f=(s+c)/2,g=(o+u)/2,v=(l+h)/2;(a=i[0])&&e.push(new Ve(a,s,o,l,f,g,v)),(a=i[1])&&e.push(new Ve(a,f,o,l,c,g,v)),(a=i[2])&&e.push(new Ve(a,s,g,l,f,u,v)),(a=i[3])&&e.push(new Ve(a,f,g,l,c,u,v)),(a=i[4])&&e.push(new Ve(a,s,o,v,f,g,h)),(a=i[5])&&e.push(new Ve(a,f,o,v,c,g,h)),(a=i[6])&&e.push(new Ve(a,s,g,v,f,u,h)),(a=i[7])&&e.push(new Ve(a,f,g,v,c,u,h))}t.push(n)}for(;n=t.pop();)r(n.node,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1);return this}function Hy(r){return r[0]}function Wy(r){return arguments.length?(this._x=r,this):this._x}function Vy(r){return r[1]}function qy(r){return arguments.length?(this._y=r,this):this._y}function Xy(r){return r[2]}function Yy(r){return arguments.length?(this._z=r,this):this._z}function au(r,e,t,n){var i=new $o(e??Hy,t??Vy,n??Xy,NaN,NaN,NaN,NaN,NaN,NaN);return r==null?i:i.addAll(r)}function $o(r,e,t,n,i,a,s,o,l){this._x=r,this._y=e,this._z=t,this._x0=n,this._y0=i,this._z0=a,this._x1=s,this._y1=o,this._z1=l,this._root=void 0}function ou(r){for(var e={data:r.data},t=e;r=r.next;)t=t.next={data:r.data};return e}var dt=au.prototype=$o.prototype;dt.copy=function(){var r=new $o(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,n;if(!e)return r;if(!e.length)return r._root=ou(e),r;for(t=[{source:e,target:r._root=new Array(8)}];e=t.pop();)for(var i=0;i<8;++i)(n=e.source[i])&&(n.length?t.push({source:n,target:e.target[i]=new Array(8)}):e.target[i]=ou(n));return r},dt.add=Oy,dt.addAll=Dy,dt.cover=Ry,dt.data=Iy,dt.extent=ky,dt.find=Ny,dt.remove=zy,dt.removeAll=By,dt.root=Fy,dt.size=Uy,dt.visit=jy,dt.visitAfter=Gy,dt.x=Wy,dt.y=qy,dt.z=Yy;function cr(r){return function(){return r}}function ur(r){return(r()-.5)*1e-6}function $y(r){return r.index}function su(r,e){var t=r.get(e);if(!t)throw new Error("node not found: "+e);return t}function Ky(r){var e=$y,t=f,n,i=cr(30),a,s,o,l,c,u,h=1;r==null&&(r=[]);function f(y){return 1/Math.min(l[y.source.index],l[y.target.index])}function g(y){for(var E=0,S=r.length;E<h;++E)for(var x=0,w,C,F,A=0,D=0,G=0,N,Q;x<S;++x)w=r[x],C=w.source,F=w.target,A=F.x+F.vx-C.x-C.vx||ur(u),o>1&&(D=F.y+F.vy-C.y-C.vy||ur(u)),o>2&&(G=F.z+F.vz-C.z-C.vz||ur(u)),N=Math.sqrt(A*A+D*D+G*G),N=(N-a[x])/N*y*n[x],A*=N,D*=N,G*=N,F.vx-=A*(Q=c[x]),o>1&&(F.vy-=D*Q),o>2&&(F.vz-=G*Q),C.vx+=A*(Q=1-Q),o>1&&(C.vy+=D*Q),o>2&&(C.vz+=G*Q)}function v(){if(s){var y,E=s.length,S=r.length,x=new Map(s.map((C,F)=>[e(C,F,s),C])),w;for(y=0,l=new Array(E);y<S;++y)w=r[y],w.index=y,typeof w.source!="object"&&(w.source=su(x,w.source)),typeof w.target!="object"&&(w.target=su(x,w.target)),l[w.source.index]=(l[w.source.index]||0)+1,l[w.target.index]=(l[w.target.index]||0)+1;for(y=0,c=new Array(S);y<S;++y)w=r[y],c[y]=l[w.source.index]/(l[w.source.index]+l[w.target.index]);n=new Array(S),p(),a=new Array(S),m()}}function p(){if(s)for(var y=0,E=r.length;y<E;++y)n[y]=+t(r[y],y,r)}function m(){if(s)for(var y=0,E=r.length;y<E;++y)a[y]=+i(r[y],y,r)}return g.initialize=function(y,...E){s=y,u=E.find(S=>typeof S=="function")||Math.random,o=E.find(S=>[1,2,3].includes(S))||2,v()},g.links=function(y){return arguments.length?(r=y,v(),g):r},g.id=function(y){return arguments.length?(e=y,g):e},g.iterations=function(y){return arguments.length?(h=+y,g):h},g.strength=function(y){return arguments.length?(t=typeof y=="function"?y:cr(+y),p(),g):t},g.distance=function(y){return arguments.length?(i=typeof y=="function"?y:cr(+y),m(),g):i},g}var Jy={value:()=>{}};function lu(){for(var r=0,e=arguments.length,t={},n;r<e;++r){if(!(n=arguments[r]+"")||n in t||/[\s.]/.test(n))throw new Error("illegal type: "+n);t[n]=[]}return new ia(t)}function ia(r){this._=r}function Zy(r,e){return r.trim().split(/^|\s+/).map(function(t){var n="",i=t.indexOf(".");if(i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}ia.prototype=lu.prototype={constructor:ia,on:function(r,e){var t=this._,n=Zy(r+"",t),i,a=-1,s=n.length;if(arguments.length<2){for(;++a<s;)if((i=(r=n[a]).type)&&(i=Qy(t[i],r.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<s;)if(i=(r=n[a]).type)t[i]=cu(t[i],r.name,e);else if(e==null)for(i in t)t[i]=cu(t[i],r.name,null);return this},copy:function(){var r={},e=this._;for(var t in e)r[t]=e[t].slice();return new ia(r)},call:function(r,e){if((i=arguments.length-2)>0)for(var t=new Array(i),n=0,i,a;n<i;++n)t[n]=arguments[n+2];if(!this._.hasOwnProperty(r))throw new Error("unknown type: "+r);for(a=this._[r],n=0,i=a.length;n<i;++n)a[n].value.apply(e,t)},apply:function(r,e,t){if(!this._.hasOwnProperty(r))throw new Error("unknown type: "+r);for(var n=this._[r],i=0,a=n.length;i<a;++i)n[i].value.apply(e,t)}};function Qy(r,e){for(var t=0,n=r.length,i;t<n;++t)if((i=r[t]).name===e)return i.value}function cu(r,e,t){for(var n=0,i=r.length;n<i;++n)if(r[n].name===e){r[n]=Jy,r=r.slice(0,n).concat(r.slice(n+1));break}return t!=null&&r.push({name:e,value:t}),r}var Tn=0,ii=0,ai=0,uu=1e3,aa,oi,oa=0,Vr=0,sa=0,si=typeof performance=="object"&&performance.now?performance:Date,hu=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(r){setTimeout(r,17)};function du(){return Vr||(hu(e1),Vr=si.now()+sa)}function e1(){Vr=0}function Ko(){this._call=this._time=this._next=null}Ko.prototype=fu.prototype={constructor:Ko,restart:function(r,e,t){if(typeof r!="function")throw new TypeError("callback is not a function");t=(t==null?du():+t)+(e==null?0:+e),!this._next&&oi!==this&&(oi?oi._next=this:aa=this,oi=this),this._call=r,this._time=t,Jo()},stop:function(){this._call&&(this._call=null,this._time=1/0,Jo())}};function fu(r,e,t){var n=new Ko;return n.restart(r,e,t),n}function t1(){du(),++Tn;for(var r=aa,e;r;)(e=Vr-r._time)>=0&&r._call.call(void 0,e),r=r._next;--Tn}function pu(){Vr=(oa=si.now())+sa,Tn=ii=0;try{t1()}finally{Tn=0,n1(),Vr=0}}function r1(){var r=si.now(),e=r-oa;e>uu&&(sa-=e,oa=r)}function n1(){for(var r,e=aa,t,n=1/0;e;)e._call?(n>e._time&&(n=e._time),r=e,e=e._next):(t=e._next,e._next=null,e=r?r._next=t:aa=t);oi=r,Jo(n)}function Jo(r){if(!Tn){ii&&(ii=clearTimeout(ii));var e=r-Vr;e>24?(r<1/0&&(ii=setTimeout(pu,r-si.now()-sa)),ai&&(ai=clearInterval(ai))):(ai||(oa=si.now(),ai=setInterval(r1,uu)),Tn=1,hu(pu))}}const i1=1664525,a1=1013904223,mu=4294967296;function o1(){let r=1;return()=>(r=(i1*r+a1)%mu)/mu}var gu=3;function Zo(r){return r.x}function vu(r){return r.y}function s1(r){return r.z}var l1=10,c1=Math.PI*(3-Math.sqrt(5)),u1=Math.PI*20/(9+Math.sqrt(221));function h1(r,e){e=e||2;var t=Math.min(gu,Math.max(1,Math.round(e))),n,i=1,a=.001,s=1-Math.pow(a,1/300),o=0,l=.6,c=new Map,u=fu(g),h=lu("tick","end"),f=o1();r==null&&(r=[]);function g(){v(),h.call("tick",n),i<a&&(u.stop(),h.call("end",n))}function v(y){var E,S=r.length,x;y===void 0&&(y=1);for(var w=0;w<y;++w)for(i+=(o-i)*s,c.forEach(function(C){C(i)}),E=0;E<S;++E)x=r[E],x.fx==null?x.x+=x.vx*=l:(x.x=x.fx,x.vx=0),t>1&&(x.fy==null?x.y+=x.vy*=l:(x.y=x.fy,x.vy=0)),t>2&&(x.fz==null?x.z+=x.vz*=l:(x.z=x.fz,x.vz=0));return n}function p(){for(var y=0,E=r.length,S;y<E;++y){if(S=r[y],S.index=y,S.fx!=null&&(S.x=S.fx),S.fy!=null&&(S.y=S.fy),S.fz!=null&&(S.z=S.fz),isNaN(S.x)||t>1&&isNaN(S.y)||t>2&&isNaN(S.z)){var x=l1*(t>2?Math.cbrt(.5+y):t>1?Math.sqrt(.5+y):y),w=y*c1,C=y*u1;t===1?S.x=x:t===2?(S.x=x*Math.cos(w),S.y=x*Math.sin(w)):(S.x=x*Math.sin(w)*Math.cos(C),S.y=x*Math.cos(w),S.z=x*Math.sin(w)*Math.sin(C))}(isNaN(S.vx)||t>1&&isNaN(S.vy)||t>2&&isNaN(S.vz))&&(S.vx=0,t>1&&(S.vy=0),t>2&&(S.vz=0))}}function m(y){return y.initialize&&y.initialize(r,f,t),y}return p(),n={tick:v,restart:function(){return u.restart(g),n},stop:function(){return u.stop(),n},numDimensions:function(y){return arguments.length?(t=Math.min(gu,Math.max(1,Math.round(y))),c.forEach(m),n):t},nodes:function(y){return arguments.length?(r=y,p(),c.forEach(m),n):r},alpha:function(y){return arguments.length?(i=+y,n):i},alphaMin:function(y){return arguments.length?(a=+y,n):a},alphaDecay:function(y){return arguments.length?(s=+y,n):+s},alphaTarget:function(y){return arguments.length?(o=+y,n):o},velocityDecay:function(y){return arguments.length?(l=1-y,n):1-l},randomSource:function(y){return arguments.length?(f=y,c.forEach(m),n):f},force:function(y,E){return arguments.length>1?(E==null?c.delete(y):c.set(y,m(E)),n):c.get(y)},find:function(){var y=Array.prototype.slice.call(arguments),E=y.shift()||0,S=(t>1?y.shift():null)||0,x=(t>2?y.shift():null)||0,w=y.shift()||1/0,C=0,F=r.length,A,D,G,N,Q,$;for(w*=w,C=0;C<F;++C)Q=r[C],A=E-Q.x,D=S-(Q.y||0),G=x-(Q.z||0),N=A*A+D*D+G*G,N<w&&($=Q,w=N);return $},on:function(y,E){return arguments.length>1?(h.on(y,E),n):h.on(y)}}}function d1(){var r,e,t,n,i,a=cr(-30),s,o=1,l=1/0,c=.81;function u(v){var p,m=r.length,y=(e===1?Qc(r,Zo):e===2?ru(r,Zo,vu):e===3?au(r,Zo,vu,s1):null).visitAfter(f);for(i=v,p=0;p<m;++p)t=r[p],y.visit(g)}function h(){if(r){var v,p=r.length,m;for(s=new Array(p),v=0;v<p;++v)m=r[v],s[m.index]=+a(m,v,r)}}function f(v){var p=0,m,y,E=0,S,x,w,C,F=v.length;if(F){for(S=x=w=C=0;C<F;++C)(m=v[C])&&(y=Math.abs(m.value))&&(p+=m.value,E+=y,S+=y*(m.x||0),x+=y*(m.y||0),w+=y*(m.z||0));p*=Math.sqrt(4/F),v.x=S/E,e>1&&(v.y=x/E),e>2&&(v.z=w/E)}else{m=v,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do p+=s[m.data.index];while(m=m.next)}v.value=p}function g(v,p,m,y,E){if(!v.value)return!0;var S=[m,y,E][e-1],x=v.x-t.x,w=e>1?v.y-t.y:0,C=e>2?v.z-t.z:0,F=S-p,A=x*x+w*w+C*C;if(F*F/c<A)return A<l&&(x===0&&(x=ur(n),A+=x*x),e>1&&w===0&&(w=ur(n),A+=w*w),e>2&&C===0&&(C=ur(n),A+=C*C),A<o&&(A=Math.sqrt(o*A)),t.vx+=x*v.value*i/A,e>1&&(t.vy+=w*v.value*i/A),e>2&&(t.vz+=C*v.value*i/A)),!0;if(!(v.length||A>=l)){(v.data!==t||v.next)&&(x===0&&(x=ur(n),A+=x*x),e>1&&w===0&&(w=ur(n),A+=w*w),e>2&&C===0&&(C=ur(n),A+=C*C),A<o&&(A=Math.sqrt(o*A)));do v.data!==t&&(F=s[v.data.index]*i/A,t.vx+=x*F,e>1&&(t.vy+=w*F),e>2&&(t.vz+=C*F));while(v=v.next)}}return u.initialize=function(v,...p){r=v,n=p.find(m=>typeof m=="function")||Math.random,e=p.find(m=>[1,2,3].includes(m))||2,h()},u.strength=function(v){return arguments.length?(a=typeof v=="function"?v:cr(+v),h(),u):a},u.distanceMin=function(v){return arguments.length?(o=v*v,u):Math.sqrt(o)},u.distanceMax=function(v){return arguments.length?(l=v*v,u):Math.sqrt(l)},u.theta=function(v){return arguments.length?(c=v*v,u):Math.sqrt(c)},u}function f1(r,e,t,n){var i,a,s=cr(.1),o,l;typeof r!="function"&&(r=cr(+r)),e==null&&(e=0),t==null&&(t=0),n==null&&(n=0);function c(h){for(var f=0,g=i.length;f<g;++f){var v=i[f],p=v.x-e||1e-6,m=(v.y||0)-t||1e-6,y=(v.z||0)-n||1e-6,E=Math.sqrt(p*p+m*m+y*y),S=(l[f]-E)*o[f]*h/E;v.vx+=p*S,a>1&&(v.vy+=m*S),a>2&&(v.vz+=y*S)}}function u(){if(i){var h,f=i.length;for(o=new Array(f),l=new Array(f),h=0;h<f;++h)l[h]=+r(i[h],h,i),o[h]=isNaN(l[h])?0:+s(i[h],h,i)}}return c.initialize=function(h,...f){i=h,a=f.find(g=>[1,2,3].includes(g))||2,u()},c.strength=function(h){return arguments.length?(s=typeof h=="function"?h:cr(+h),u(),c):s},c.radius=function(h){return arguments.length?(r=typeof h=="function"?h:cr(+h),u(),c):r},c.x=function(h){return arguments.length?(e=+h,c):e},c.y=function(h){return arguments.length?(t=+h,c):t},c.z=function(h){return arguments.length?(n=+h,c):n},c}var hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function p1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qo=function(r){g1(r);var e=m1(r);return r.on=e.on,r.off=e.off,r.fire=e.fire,r};function m1(r){var e=Object.create(null);return{on:function(t,n,i){if(typeof n!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:n,ctx:i}),r},off:function(t,n){var i=typeof t>"u";if(i)return e=Object.create(null),r;if(e[t]){var a=typeof n!="function";if(a)delete e[t];else for(var s=e[t],o=0;o<s.length;++o)s[o].callback===n&&s.splice(o,1)}return r},fire:function(t){var n=e[t];if(!n)return r;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var a=0;a<n.length;++a){var s=n[a];s.callback.apply(s.ctx,i)}return r}}}function g1(r){if(!r)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(r.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var v1=_1,y1=Qo;function _1(r){if(r=r||{},"uniqueLinkId"in r&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),r.multigraph=r.uniqueLinkId),r.multigraph===void 0&&(r.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,n={},i=0,a=r.multigraph?x:S,s=[],o=K,l=K,c=K,u=K,h={version:20,addNode:p,addLink:E,removeLink:A,removeNode:y,getNode:m,getNodeCount:w,getLinkCount:C,getEdgeCount:C,getLinksCount:C,getNodesCount:w,getLinks:F,forEachNode:ee,forEachLinkedNode:$,forEachLink:Q,beginUpdate:c,endUpdate:u,clear:N,hasLink:G,hasNode:m,getLink:G};return y1(h),f(),h;function f(){var U=h.on;h.on=q;function q(){return h.beginUpdate=c=oe,h.endUpdate=u=ae,o=g,l=v,h.on=U,U.apply(h,arguments)}}function g(U,q){s.push({link:U,changeType:q})}function v(U,q){s.push({node:U,changeType:q})}function p(U,q){if(U===void 0)throw new Error("Invalid node identifier");c();var z=m(U);return z?(z.data=q,l(z,"update")):(z=new b1(U,q),l(z,"add")),e.set(U,z),u(),z}function m(U){return e.get(U)}function y(U){var q=m(U);if(!q)return!1;c();var z=q.links;return z&&(z.forEach(D),q.links=null),e.delete(U),l(q,"remove"),u(),!0}function E(U,q,z){c();var k=m(U)||p(U),Z=m(q)||p(q),se=a(U,q,z),B=t.has(se.id);return t.set(se.id,se),yu(k,se),U!==q&&yu(Z,se),o(se,B?"update":"add"),u(),se}function S(U,q,z){var k=la(U,q),Z=t.get(k);return Z?(Z.data=z,Z):new _u(U,q,z,k)}function x(U,q,z){var k=la(U,q),Z=n.hasOwnProperty(k);if(Z||G(U,q)){Z||(n[k]=0);var se="@"+ ++n[k];k=la(U+se,q+se)}return new _u(U,q,z,k)}function w(){return e.size}function C(){return t.size}function F(U){var q=m(U);return q?q.links:null}function A(U,q){return q!==void 0&&(U=G(U,q)),D(U)}function D(U){if(!U||!t.get(U.id))return!1;c(),t.delete(U.id);var q=m(U.fromId),z=m(U.toId);return q&&q.links.delete(U),z&&z.links.delete(U),o(U,"remove"),u(),!0}function G(U,q){if(!(U===void 0||q===void 0))return t.get(la(U,q))}function N(){c(),ee(function(U){y(U.id)}),u()}function Q(U){if(typeof U=="function")for(var q=t.values(),z=q.next();!z.done;){if(U(z.value))return!0;z=q.next()}}function $(U,q,z){var k=m(U);if(k&&k.links&&typeof q=="function")return z?I(k.links,U,q):O(k.links,U,q)}function O(U,q,z){for(var k,Z=U.values(),se=Z.next();!se.done;){var B=se.value,V=B.fromId===q?B.toId:B.fromId;if(k=z(e.get(V),B),k)return!0;se=Z.next()}}function I(U,q,z){for(var k,Z=U.values(),se=Z.next();!se.done;){var B=se.value;if(B.fromId===q&&(k=z(e.get(B.toId),B),k))return!0;se=Z.next()}}function K(){}function oe(){i+=1}function ae(){i-=1,i===0&&s.length>0&&(h.fire("changed",s),s.length=0)}function ee(U){if(typeof U!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+U);for(var q=e.values(),z=q.next();!z.done;){if(U(z.value))return!0;z=q.next()}}}function b1(r,e){this.id=r,this.links=null,this.data=e}function yu(r,e){r.links?r.links.add(e):r.links=new Set([e])}function _u(r,e,t,n){this.fromId=r,this.toId=e,this.data=t,this.id=n}function la(r,e){return r.toString()+"\u{1F449} "+e.toString()}var ca={},x1={get exports(){return ca},set exports(r){ca=r}},Cn={},w1={get exports(){return Cn},set exports(r){Cn=r}},bu=function(r){return r===0?"x":r===1?"y":r===2?"z":"c"+(r+1)};const M1=bu;var Ln=function(r){return e;function e(t,n){let i=n&&n.indent||0,a=n&&n.join!==void 0?n.join:`
`,s=Array(i+1).join(" "),o=[];for(let l=0;l<r;++l){let c=M1(l),u=l===0?"":s;o.push(u+t.replace(/{var}/g,c))}return o.join(a)}};const xu=Ln;w1.exports=S1,Cn.generateCreateBodyFunctionBody=wu,Cn.getVectorCode=Su,Cn.getBodyCode=Mu;function S1(r,e){let t=wu(r,e),{Body:n}=new Function(t)();return n}function wu(r,e){return`
${Su(r,e)}
${Mu(r)}
return {Body: Body, Vector: Vector};
`}function Mu(r){let e=xu(r),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
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

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Su(r,e){let t=xu(r),n="";return e&&(n=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${n}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var dr={},E1={get exports(){return dr},set exports(r){dr=r}};const es=Ln,Lr=bu;E1.exports=A1,dr.generateQuadTreeFunctionBody=Eu,dr.getInsertStackCode=Pu,dr.getQuadNodeCode=Lu,dr.isSamePosition=Au,dr.getChildBodyCode=Cu,dr.setChildBodyCode=Tu;function A1(r){let e=Eu(r);return new Function(e)()}function Eu(r){let e=es(r),t=Math.pow(2,r);return`
${Pu()}
${Lu(r)}
${Au(r)}
${Cu(r)}
${Tu(r)}

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
        // If s / r < \u03B8, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${Lr(0)} - node.min_${Lr(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${i()}
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

${n(8)}

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

`;function n(s){let o=[],l=Array(s+1).join(" ");for(let c=0;c<r;++c)o.push(l+`if (${Lr(c)} > max_${Lr(c)}) {`),o.push(l+`  quadIdx = quadIdx + ${Math.pow(2,c)};`),o.push(l+`  min_${Lr(c)} = max_${Lr(c)};`),o.push(l+`  max_${Lr(c)} = node.max_${Lr(c)};`),o.push(l+"}");return o.join(`
`)}function i(){let s=Array(11).join(" "),o=[];for(let l=0;l<t;++l)o.push(s+`if (node.quad${l}) {`),o.push(s+`  queue[pushIdx] = node.quad${l};`),o.push(s+"  queueLength += 1;"),o.push(s+"  pushIdx += 1;"),o.push(s+"}");return o.join(`
`)}function a(s){let o=[];for(let l=0;l<t;++l)o.push(`${s}quad${l} = null;`);return o.join(`
`)}}function Au(r){let e=es(r);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Tu(r){var e=Math.pow(2,r);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let n=[];for(let i=0;i<e;++i){let a=i===0?"  ":"  else ";n.push(`${a}if (idx === ${i}) node.quad${i} = child;`)}return n.join(`
`)}}function Cu(r){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],n=Math.pow(2,r);for(let i=0;i<n;++i)t.push(`  if (idx === ${i}) return node.quad${i};`);return t.join(`
`)}}function Lu(r){let e=es(r),t=Math.pow(2,r);var n=`
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
`;return n;function i(a){let s=[];for(let o=0;o<t;++o)s.push(`${a}quad${o} = null;`);return s.join(`
`)}}function Pu(){return`
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
`}var ua={},T1={get exports(){return ua},set exports(r){ua=r}};T1.exports=L1,ua.generateFunctionBody=Ou;const C1=Ln;function L1(r){let e=Ou(r);return new Function("bodies","settings","random",e)}function Ou(r){let e=C1(r);return`
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
`}var ha={},P1={get exports(){return ha},set exports(r){ha=r}};const O1=Ln;P1.exports=D1,ha.generateCreateDragForceFunctionBody=Du;function D1(r){let e=Du(r);return new Function("options",e)}function Du(r){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${O1(r)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var da={},R1={get exports(){return da},set exports(r){da=r}};const I1=Ln;R1.exports=k1,da.generateCreateSpringForceFunctionBody=Ru;function k1(r){let e=Ru(r);return new Function("options","random",e)}function Ru(r){let e=I1(r);return`
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
`}var fa={},N1={get exports(){return fa},set exports(r){fa=r}};const z1=Ln;N1.exports=B1,fa.generateIntegratorFunctionBody=Iu;function B1(r){let e=Iu(r);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Iu(r){let e=z1(r);return`
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
`}var ts,ku;function F1(){if(ku)return ts;ku=1,ts=r;function r(e,t,n,i){this.from=e,this.to=t,this.length=n,this.coefficient=i}return ts}var rs,Nu;function U1(){if(Nu)return rs;Nu=1,rs=r;function r(e,t){var n;if(e||(e={}),t){for(n in t)if(t.hasOwnProperty(n)){var i=e.hasOwnProperty(n),a=typeof t[n],s=!i||typeof e[n]!==a;s?e[n]=t[n]:a==="object"&&(e[n]=r(e[n],t[n]))}}return e}return rs}var Pn={},j1={get exports(){return Pn},set exports(r){Pn=r}},zu;function G1(){if(zu)return Pn;zu=1,j1.exports=r,Pn.random=r,Pn.randomIterator=o;function r(l){var c=typeof l=="number"?l:+new Date;return new e(c)}function e(l){this.seed=l}e.prototype.next=s,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var l,c,u;do c=this.nextDouble()*2-1,u=this.nextDouble()*2-1,l=c*c+u*u;while(l>=1||l===0);return c*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=n;function n(){var l=1.5,c=Math.pow(i(1+l)*Math.sin(Math.PI*l/2)/(i((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*c/Math.pow(Math.abs(this.gaussian()),1/l)}function i(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function a(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function s(l){return Math.floor(this.nextDouble()*l)}function o(l,c){var u=c||r();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:f,shuffle:h};function h(){var g,v,p;for(g=l.length-1;g>0;--g)v=u.next(g+1),p=l[v],l[v]=l[g],l[g]=p;return l}function f(g){var v,p,m;for(v=l.length-1;v>0;--v)p=u.next(v+1),m=l[p],l[p]=l[v],l[v]=m,g(m);l.length&&g(l[0])}}return Pn}var Bu=$1,H1=Cn,W1=dr,V1=ua,q1=ha,X1=da,Y1=fa,Fu={};function $1(r){var e=F1(),t=U1(),n=Qo;if(r){if(r.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(r.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}r=t(r,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=Fu[r.dimensions];if(!i){var a=r.dimensions;i={Body:H1(a,r.debug),createQuadTree:W1(a),createBounds:V1(a),createDragForce:q1(a),createSpringForce:X1(a),integrate:Y1(a)},Fu[a]=i}var s=i.Body,o=i.createQuadTree,l=i.createBounds,c=i.createDragForce,u=i.createSpringForce,h=i.integrate,f=I=>new s(I),g=G1().random(42),v=[],p=[],m=o(r,g),y=l(v,r,g),E=u(r,g),S=c(r),x=0,w=[],C=new Map,F=0;G("nbody",$),G("spring",O);var A={bodies:v,quadTree:m,springs:p,settings:r,addForce:G,removeForce:N,getForces:Q,step:function(){for(var I=0;I<w.length;++I)w[I](F);var K=h(v,r.timeStep,r.adaptiveTimeStepWeight);return F+=1,K},addBody:function(I){if(!I)throw new Error("Body is required");return v.push(I),I},addBodyAt:function(I){if(!I)throw new Error("Body position is required");var K=f(I);return v.push(K),K},removeBody:function(I){if(I){var K=v.indexOf(I);if(!(K<0))return v.splice(K,1),v.length===0&&y.reset(),!0}},addSpring:function(I,K,oe,ae){if(!I||!K)throw new Error("Cannot add null spring to force simulator");typeof oe!="number"&&(oe=-1);var ee=new e(I,K,oe,ae>=0?ae:-1);return p.push(ee),ee},getTotalMovement:function(){return x},removeSpring:function(I){if(I){var K=p.indexOf(I);if(K>-1)return p.splice(K,1),!0}},getBestNewBodyPosition:function(I){return y.getBestNewPosition(I)},getBBox:D,getBoundingBox:D,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(I){return I!==void 0?(r.gravity=I,m.options({gravity:I}),this):r.gravity},theta:function(I){return I!==void 0?(r.theta=I,m.options({theta:I}),this):r.theta},random:g};return K1(r,A),n(A),A;function D(){return y.update(),y.box}function G(I,K){if(C.has(I))throw new Error("Force "+I+" is already added");C.set(I,K),w.push(K)}function N(I){var K=w.indexOf(C.get(I));K<0||(w.splice(K,1),C.delete(I))}function Q(){return C}function $(){if(v.length!==0){m.insertBodies(v);for(var I=v.length;I--;){var K=v[I];K.isPinned||(K.reset(),m.updateBodyForce(K),S.update(K))}}}function O(){for(var I=p.length;I--;)E.update(p[I])}}function K1(r,e){for(var t in r)J1(r,e,t)}function J1(r,e,t){if(r.hasOwnProperty(t)&&typeof e[t]!="function"){var n=Number.isFinite(r[t]);n?e[t]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+t+" should be a valid number.");return r[t]=i,e}return r[t]}:e[t]=function(i){return i!==void 0?(r[t]=i,e):r[t]}}}x1.exports=Q1,ca.simulator=Bu;var Z1=Qo;function Q1(r,e){if(!r)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Bu,n=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=r.version>19?$:Q;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var a=new Map,s={},o=0,l=n.settings.springTransform||e_;S(),m();var c=!1,u={step:function(){if(o===0)return h(!0),!0;var O=n.step();u.lastMove=O,u.fire("step");var I=O/o,K=I<=.01;return h(K),K},getNodePosition:function(O){return N(O).pos},setNodePosition:function(O){var I=N(O);I.setPosition.apply(I,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(O){var I=s[O];if(I)return{from:I.from.pos,to:I.to.pos}},getGraphRect:function(){return n.getBBox()},forEachBody:f,pinNode:function(O,I){var K=N(O.id);K.isPinned=!!I},isNodePinned:function(O){return N(O.id).isPinned},dispose:function(){r.off("changed",E),u.fire("disposed")},getBody:p,getSpring:v,getForceVectorLength:g,simulator:n,graph:r,lastMove:0};return Z1(u),u;function h(O){c!==O&&(c=O,y(O))}function f(O){a.forEach(O)}function g(){var O=0,I=0;return f(function(K){O+=Math.abs(K.force.x),I+=Math.abs(K.force.y)}),Math.sqrt(O*O+I*I)}function v(O,I){var K;if(I===void 0)typeof O!="object"?K=O:K=O.id;else{var oe=r.hasLink(O,I);if(!oe)return;K=oe.id}return s[K]}function p(O){return a.get(O)}function m(){r.on("changed",E)}function y(O){u.fire("stable",O)}function E(O){for(var I=0;I<O.length;++I){var K=O[I];K.changeType==="add"?(K.node&&x(K.node.id),K.link&&C(K.link)):K.changeType==="remove"&&(K.node&&w(K.node),K.link&&F(K.link))}o=r.getNodesCount()}function S(){o=0,r.forEachNode(function(O){x(O.id),o+=1}),r.forEachLink(C)}function x(O){var I=a.get(O);if(!I){var K=r.getNode(O);if(!K)throw new Error("initBody() was called with unknown node id");var oe=K.position;if(!oe){var ae=A(K);oe=n.getBestNewBodyPosition(ae)}I=n.addBodyAt(oe),I.id=O,a.set(O,I),D(O),G(K)&&(I.isPinned=!0)}}function w(O){var I=O.id,K=a.get(I);K&&(a.delete(I),n.removeBody(K))}function C(O){D(O.fromId),D(O.toId);var I=a.get(O.fromId),K=a.get(O.toId),oe=n.addSpring(I,K,O.length);l(O,oe),s[O.id]=oe}function F(O){var I=s[O.id];if(I){var K=r.getNode(O.fromId),oe=r.getNode(O.toId);K&&D(K.id),oe&&D(oe.id),delete s[O.id],n.removeSpring(I)}}function A(O){var I=[];if(!O.links)return I;for(var K=Math.min(O.links.length,2),oe=0;oe<K;++oe){var ae=O.links[oe],ee=ae.fromId!==O.id?a.get(ae.fromId):a.get(ae.toId);ee&&ee.pos&&I.push(ee)}return I}function D(O){var I=a.get(O);if(I.mass=i(O),Number.isNaN(I.mass))throw new Error("Node mass should be a number")}function G(O){return O&&(O.isPinned||O.data&&O.data.isPinned)}function N(O){var I=a.get(O);return I||(x(O),I=a.get(O)),I}function Q(O){var I=r.getLinks(O);return I?1+I.length/3:1}function $(O){var I=r.getLinks(O);return I?1+I.size/3:1}}function e_(){}function ns(r,e,t){var n,i,a,s,o;e==null&&(e=100);function l(){var u=Date.now()-s;u<e&&u>=0?n=setTimeout(l,e-u):(n=null,t||(o=r.apply(a,i),a=i=null))}var c=function(){a=this,i=arguments,s=Date.now();var u=t&&!n;return n||(n=setTimeout(l,e)),u&&(o=r.apply(a,i),a=i=null),o};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(o=r.apply(a,i),a=i=null,clearTimeout(n),n=null)},c}ns.debounce=ns;var t_=ns;function r_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Uu(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function n_(r,e,t){return e&&Uu(r.prototype,e),t&&Uu(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function i_(r,e){return a_(r)||o_(r,e)||s_(r,e)||l_()}function a_(r){if(Array.isArray(r))return r}function o_(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,s,o;try{for(t=t.call(r);!(i=(s=t.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw o}}return n}}function s_(r,e){if(r){if(typeof r=="string")return ju(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ju(r,e)}}function ju(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function l_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c_=n_(function r(e,t){var n=t.default,i=n===void 0?null:n,a=t.triggerUpdate,s=a===void 0?!0:a,o=t.onChange,l=o===void 0?function(c,u){}:o;r_(this,r),this.name=e,this.defaultVal=i,this.triggerUpdate=s,this.onChange=l});function is(r){var e=r.stateInit,t=e===void 0?function(){return{}}:e,n=r.props,i=n===void 0?{}:n,a=r.methods,s=a===void 0?{}:a,o=r.aliases,l=o===void 0?{}:o,c=r.init,u=c===void 0?function(){}:c,h=r.update,f=h===void 0?function(){}:h,g=Object.keys(i).map(function(v){return new c_(v,i[v])});return function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=Object.assign({},t instanceof Function?t(v):t,{initialised:!1}),m={};function y(x){return E(x,v),S(),y}var E=function(x,w){u.call(y,x,p,w),p.initialised=!0},S=t_(function(){p.initialised&&(f.call(y,p,m),m={})},1);return g.forEach(function(x){y[x.name]=w(x);function w(C){var F=C.name,A=C.triggerUpdate,D=A===void 0?!1:A,G=C.onChange,N=G===void 0?function(O,I){}:G,Q=C.defaultVal,$=Q===void 0?null:Q;return function(O){var I=p[F];if(!arguments.length)return I;var K=O===void 0?$:O;return p[F]=K,N.call(y,K,p,I),!m.hasOwnProperty(F)&&(m[F]=I),D&&S(),y}}}),Object.keys(s).forEach(function(x){y[x]=function(){for(var w,C=arguments.length,F=new Array(C),A=0;A<C;A++)F[A]=arguments[A];return(w=s[x]).call.apply(w,[y,p].concat(F))}}),Object.entries(l).forEach(function(x){var w=i_(x,2),C=w[0],F=w[1];return y[C]=y[F]}),y.resetProps=function(){return g.forEach(function(x){y[x.name](x.defaultVal)}),y},y.resetProps(),p._rerender=S,y}}var Ge=function(r){return r instanceof Function?r:typeof r=="string"?function(e){return e[r]}:function(e){return r}};class Gu extends Map{constructor(e,t=d_){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[n,i]of e)this.set(n,i)}get(e){return super.get(Hu(this,e))}has(e){return super.has(Hu(this,e))}set(e,t){return super.set(u_(this,e),t)}delete(e){return super.delete(h_(this,e))}}function Hu({_intern:r,_key:e},t){const n=e(t);return r.has(n)?r.get(n):t}function u_({_intern:r,_key:e},t){const n=e(t);return r.has(n)?r.get(n):(r.set(n,t),t)}function h_({_intern:r,_key:e},t){const n=e(t);return r.has(n)&&(t=r.get(n),r.delete(n)),t}function d_(r){return r!==null&&typeof r=="object"?r.valueOf():r}function f_(r,e){let t;if(e===void 0)for(const n of r)n!=null&&(t<n||t===void 0&&n>=n)&&(t=n);else{let n=-1;for(let i of r)(i=e(i,++n,r))!=null&&(t<i||t===void 0&&i>=i)&&(t=i)}return t}function p_(r,e){let t;if(e===void 0)for(const n of r)n!=null&&(t>n||t===void 0&&n>=n)&&(t=n);else{let n=-1;for(let i of r)(i=e(i,++n,r))!=null&&(t>i||t===void 0&&i>=i)&&(t=i)}return t}function m_(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}function g_(r,e){if(r==null)return{};var t=m_(r,e),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function v_(r,e){return b_(r)||w_(r,e)||Wu(r,e)||S_()}function y_(r){return __(r)||x_(r)||Wu(r)||M_()}function __(r){if(Array.isArray(r))return as(r)}function b_(r){if(Array.isArray(r))return r}function x_(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function w_(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,s,o;try{for(t=t.call(r);!(i=(s=t.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw o}}return n}}function Wu(r,e){if(r){if(typeof r=="string")return as(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return as(r,e)}}function as(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function M_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E_(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function A_(r){var e=E_(r,"string");return typeof e=="symbol"?e:String(e)}var Vu=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,i=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(o){return{keyAccessor:o,isProp:!(o instanceof Function)}}),a=r.reduce(function(o,l){var c=o,u=l;return i.forEach(function(h,f){var g=h.keyAccessor,v=h.isProp,p;if(v){var m=u,y=m[g],E=g_(m,[g].map(A_));p=y,u=E}else p=g(u,f);f+1<i.length?(c.hasOwnProperty(p)||(c[p]={}),c=c[p]):t?(c.hasOwnProperty(p)||(c[p]=[]),c[p].push(u)):c[p]=u}),o},{});t instanceof Function&&function o(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c===i.length?Object.keys(l).forEach(function(u){return l[u]=t(l[u])}):Object.values(l).forEach(function(u){return o(u,c+1)})}(a);var s=a;return n&&(s=[],function o(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];c.length===i.length?s.push({keys:c,vals:l}):Object.entries(l).forEach(function(u){var h=v_(u,2),f=h[0],g=h[1];return o(g,[].concat(y_(c),[f]))})}(a),e instanceof Array&&e.length===0&&s.length===1&&(s[0].keys=[])),s};function qu(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function T_(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?qu(Object(t),!0).forEach(function(n){Xu(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):qu(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Xu(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function C_(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}function L_(r,e){if(r==null)return{};var t=C_(r,e),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function Yu(r,e){return O_(r)||R_(r,e)||$u(r,e)||k_()}function pa(r){return P_(r)||D_(r)||$u(r)||I_()}function P_(r){if(Array.isArray(r))return os(r)}function O_(r){if(Array.isArray(r))return r}function D_(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function R_(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,s,o;try{for(t=t.call(r);!(i=(s=t.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw o}}return n}}function $u(r,e){if(r){if(typeof r=="string")return os(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return os(r,e)}}function os(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function I_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var N_=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function z_(r,e,t){var n={enter:[],update:[],exit:[]};if(t){var i=Vu(r,t,!1),a=Vu(e,t,!1),s=Object.assign({},i,a);Object.entries(s).forEach(function(c){var u=Yu(c,2),h=u[0],f=u[1],g=i.hasOwnProperty(h)?a.hasOwnProperty(h)?"update":"exit":"enter";n[g].push(g==="update"?[i[h],a[h]]:f)})}else{var o=new Set(r),l=new Set(e);new Set([].concat(pa(o),pa(l))).forEach(function(c){var u=o.has(c)?l.has(c)?"update":"exit":"enter";n[u].push(u==="update"?[c,c]:c)})}return n}function B_(r,e,t){var n=t.objBindAttr,i=n===void 0?"__obj":n,a=t.dataBindAttr,s=a===void 0?"__data":a,o=t.idAccessor,l=t.purge,c=l===void 0?!1:l,u=function(p){return p.hasOwnProperty(s)},h=e.filter(function(p){return!u(p)}),f=e.filter(u).map(function(p){return p[s]}),g=r,v=c?{enter:g,exit:f,update:[]}:z_(f,g,o);return v.update=v.update.map(function(p){var m=Yu(p,2),y=m[0],E=m[1];return y!==E&&(E[i]=y[i],E[i][s]=E),E}),v.exit=v.exit.concat(h.map(function(p){return Xu({},i,p)})),v}function F_(r,e,t,n,i){var a=i.createObj,s=a===void 0?function(A){return{}}:a,o=i.updateObj,l=o===void 0?function(A,D){}:o,c=i.exitObj,u=c===void 0?function(A){}:c,h=i.objBindAttr,f=h===void 0?"__obj":h,g=i.dataBindAttr,v=g===void 0?"__data":g,p=L_(i,N_),m=B_(r,e,T_({objBindAttr:f,dataBindAttr:v},p)),y=m.enter,E=m.update,S=m.exit;S.forEach(function(A){var D=A[f];delete A[f],u(D),n(D)});var x=C(y),w=[].concat(pa(y),pa(E));F(w),x.forEach(t);function C(A){var D=[];return A.forEach(function(G){var N=s(G);N&&(N[v]=G,G[f]=N,D.push(N))}),D}function F(A){A.forEach(function(D){var G=D[f];G&&(G[v]=D,l(G,D))})}}function U_(r,e){switch(arguments.length){case 0:break;case 1:this.range(r);break;default:this.range(e).domain(r);break}return this}const Ku=Symbol("implicit");function Ju(){var r=new Gu,e=[],t=[],n=Ku;function i(a){let s=r.get(a);if(s===void 0){if(n!==Ku)return n;r.set(a,s=e.push(a)-1)}return t[s%t.length]}return i.domain=function(a){if(!arguments.length)return e.slice();e=[],r=new Gu;for(const s of a)r.has(s)||r.set(s,e.push(s)-1);return i},i.range=function(a){return arguments.length?(t=Array.from(a),i):t.slice()},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return Ju(e,t).unknown(n)},U_.apply(i,arguments),i}function j_(r){for(var e=r.length/6|0,t=new Array(e),n=0;n<e;)t[n]="#"+r.slice(n*6,++n*6);return t}const G_=j_("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");var ss={},H_={get exports(){return ss},set exports(r){ss=r}};(function(r){(function(e){var t=/^\s+/,n=/\s+$/,i=0,a=e.round,s=e.min,o=e.max,l=e.random;function c(T,W){if(T=T||"",W=W||{},T instanceof c)return T;if(!(this instanceof c))return new c(T,W);var M=u(T);this._originalInput=T,this._r=M.r,this._g=M.g,this._b=M.b,this._a=M.a,this._roundA=a(100*this._a)/100,this._format=W.format||M.format,this._gradientType=W.gradientType,this._r<1&&(this._r=a(this._r)),this._g<1&&(this._g=a(this._g)),this._b<1&&(this._b=a(this._b)),this._ok=M.ok,this._tc_id=i++}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var T=this.toRgb();return(T.r*299+T.g*587+T.b*114)/1e3},getLuminance:function(){var T=this.toRgb(),W,M,d,_,b,R;return W=T.r/255,M=T.g/255,d=T.b/255,W<=.03928?_=W/12.92:_=e.pow((W+.055)/1.055,2.4),M<=.03928?b=M/12.92:b=e.pow((M+.055)/1.055,2.4),d<=.03928?R=d/12.92:R=e.pow((d+.055)/1.055,2.4),.2126*_+.7152*b+.0722*R},setAlpha:function(T){return this._a=ee(T),this._roundA=a(100*this._a)/100,this},toHsv:function(){var T=v(this._r,this._g,this._b);return{h:T.h*360,s:T.s,v:T.v,a:this._a}},toHsvString:function(){var T=v(this._r,this._g,this._b),W=a(T.h*360),M=a(T.s*100),d=a(T.v*100);return this._a==1?"hsv("+W+", "+M+"%, "+d+"%)":"hsva("+W+", "+M+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var T=f(this._r,this._g,this._b);return{h:T.h*360,s:T.s,l:T.l,a:this._a}},toHslString:function(){var T=f(this._r,this._g,this._b),W=a(T.h*360),M=a(T.s*100),d=a(T.l*100);return this._a==1?"hsl("+W+", "+M+"%, "+d+"%)":"hsla("+W+", "+M+"%, "+d+"%, "+this._roundA+")"},toHex:function(T){return m(this._r,this._g,this._b,T)},toHexString:function(T){return"#"+this.toHex(T)},toHex8:function(T){return y(this._r,this._g,this._b,this._a,T)},toHex8String:function(T){return"#"+this.toHex8(T)},toRgb:function(){return{r:a(this._r),g:a(this._g),b:a(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+a(this._r)+", "+a(this._g)+", "+a(this._b)+")":"rgba("+a(this._r)+", "+a(this._g)+", "+a(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:a(U(this._r,255)*100)+"%",g:a(U(this._g,255)*100)+"%",b:a(U(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+a(U(this._r,255)*100)+"%, "+a(U(this._g,255)*100)+"%, "+a(U(this._b,255)*100)+"%)":"rgba("+a(U(this._r,255)*100)+"%, "+a(U(this._g,255)*100)+"%, "+a(U(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:oe[m(this._r,this._g,this._b,!0)]||!1},toFilter:function(T){var W="#"+E(this._r,this._g,this._b,this._a),M=W,d=this._gradientType?"GradientType = 1, ":"";if(T){var _=c(T);M="#"+E(_._r,_._g,_._b,_._a)}return"progid:DXImageTransform.Microsoft.gradient("+d+"startColorstr="+W+",endColorstr="+M+")"},toString:function(T){var W=!!T;T=T||this._format;var M=!1,d=this._a<1&&this._a>=0,_=!W&&d&&(T==="hex"||T==="hex6"||T==="hex3"||T==="hex4"||T==="hex8"||T==="name");return _?T==="name"&&this._a===0?this.toName():this.toRgbString():(T==="rgb"&&(M=this.toRgbString()),T==="prgb"&&(M=this.toPercentageRgbString()),(T==="hex"||T==="hex6")&&(M=this.toHexString()),T==="hex3"&&(M=this.toHexString(!0)),T==="hex4"&&(M=this.toHex8String(!0)),T==="hex8"&&(M=this.toHex8String()),T==="name"&&(M=this.toName()),T==="hsl"&&(M=this.toHslString()),T==="hsv"&&(M=this.toHsvString()),M||this.toHexString())},clone:function(){return c(this.toString())},_applyModification:function(T,W){var M=T.apply(null,[this].concat([].slice.call(W)));return this._r=M._r,this._g=M._g,this._b=M._b,this.setAlpha(M._a),this},lighten:function(){return this._applyModification(C,arguments)},brighten:function(){return this._applyModification(F,arguments)},darken:function(){return this._applyModification(A,arguments)},desaturate:function(){return this._applyModification(S,arguments)},saturate:function(){return this._applyModification(x,arguments)},greyscale:function(){return this._applyModification(w,arguments)},spin:function(){return this._applyModification(D,arguments)},_applyCombination:function(T,W){return T.apply(null,[this].concat([].slice.call(W)))},analogous:function(){return this._applyCombination(O,arguments)},complement:function(){return this._applyCombination(G,arguments)},monochromatic:function(){return this._applyCombination(I,arguments)},splitcomplement:function(){return this._applyCombination($,arguments)},triad:function(){return this._applyCombination(N,arguments)},tetrad:function(){return this._applyCombination(Q,arguments)}},c.fromRatio=function(T,W){if(typeof T=="object"){var M={};for(var d in T)T.hasOwnProperty(d)&&(d==="a"?M[d]=T[d]:M[d]=B(T[d]));T=M}return c(T,W)};function u(T){var W={r:0,g:0,b:0},M=1,d=null,_=null,b=null,R=!1,H=!1;return typeof T=="string"&&(T=Me(T)),typeof T=="object"&&(he(T.r)&&he(T.g)&&he(T.b)?(W=h(T.r,T.g,T.b),R=!0,H=String(T.r).substr(-1)==="%"?"prgb":"rgb"):he(T.h)&&he(T.s)&&he(T.v)?(d=B(T.s),_=B(T.v),W=p(T.h,d,_),R=!0,H="hsv"):he(T.h)&&he(T.s)&&he(T.l)&&(d=B(T.s),b=B(T.l),W=g(T.h,d,b),R=!0,H="hsl"),T.hasOwnProperty("a")&&(M=T.a)),M=ee(M),{ok:R,format:T.format||H,r:s(255,o(W.r,0)),g:s(255,o(W.g,0)),b:s(255,o(W.b,0)),a:M}}function h(T,W,M){return{r:U(T,255)*255,g:U(W,255)*255,b:U(M,255)*255}}function f(T,W,M){T=U(T,255),W=U(W,255),M=U(M,255);var d=o(T,W,M),_=s(T,W,M),b,R,H=(d+_)/2;if(d==_)b=R=0;else{var J=d-_;switch(R=H>.5?J/(2-d-_):J/(d+_),d){case T:b=(W-M)/J+(W<M?6:0);break;case W:b=(M-T)/J+2;break;case M:b=(T-W)/J+4;break}b/=6}return{h:b,s:R,l:H}}function g(T,W,M){var d,_,b;T=U(T,360),W=U(W,100),M=U(M,100);function R(L,P,te){return te<0&&(te+=1),te>1&&(te-=1),te<1/6?L+(P-L)*6*te:te<1/2?P:te<2/3?L+(P-L)*(2/3-te)*6:L}if(W===0)d=_=b=M;else{var H=M<.5?M*(1+W):M+W-M*W,J=2*M-H;d=R(J,H,T+1/3),_=R(J,H,T),b=R(J,H,T-1/3)}return{r:d*255,g:_*255,b:b*255}}function v(T,W,M){T=U(T,255),W=U(W,255),M=U(M,255);var d=o(T,W,M),_=s(T,W,M),b,R,H=d,J=d-_;if(R=d===0?0:J/d,d==_)b=0;else{switch(d){case T:b=(W-M)/J+(W<M?6:0);break;case W:b=(M-T)/J+2;break;case M:b=(T-W)/J+4;break}b/=6}return{h:b,s:R,v:H}}function p(T,W,M){T=U(T,360)*6,W=U(W,100),M=U(M,100);var d=e.floor(T),_=T-d,b=M*(1-W),R=M*(1-_*W),H=M*(1-(1-_)*W),J=d%6,L=[M,R,b,b,H,M][J],P=[H,M,M,R,b,b][J],te=[b,b,H,M,M,R][J];return{r:L*255,g:P*255,b:te*255}}function m(T,W,M,d){var _=[se(a(T).toString(16)),se(a(W).toString(16)),se(a(M).toString(16))];return d&&_[0].charAt(0)==_[0].charAt(1)&&_[1].charAt(0)==_[1].charAt(1)&&_[2].charAt(0)==_[2].charAt(1)?_[0].charAt(0)+_[1].charAt(0)+_[2].charAt(0):_.join("")}function y(T,W,M,d,_){var b=[se(a(T).toString(16)),se(a(W).toString(16)),se(a(M).toString(16)),se(V(d))];return _&&b[0].charAt(0)==b[0].charAt(1)&&b[1].charAt(0)==b[1].charAt(1)&&b[2].charAt(0)==b[2].charAt(1)&&b[3].charAt(0)==b[3].charAt(1)?b[0].charAt(0)+b[1].charAt(0)+b[2].charAt(0)+b[3].charAt(0):b.join("")}function E(T,W,M,d){var _=[se(V(d)),se(a(T).toString(16)),se(a(W).toString(16)),se(a(M).toString(16))];return _.join("")}c.equals=function(T,W){return!T||!W?!1:c(T).toRgbString()==c(W).toRgbString()},c.random=function(){return c.fromRatio({r:l(),g:l(),b:l()})};function S(T,W){W=W===0?0:W||10;var M=c(T).toHsl();return M.s-=W/100,M.s=q(M.s),c(M)}function x(T,W){W=W===0?0:W||10;var M=c(T).toHsl();return M.s+=W/100,M.s=q(M.s),c(M)}function w(T){return c(T).desaturate(100)}function C(T,W){W=W===0?0:W||10;var M=c(T).toHsl();return M.l+=W/100,M.l=q(M.l),c(M)}function F(T,W){W=W===0?0:W||10;var M=c(T).toRgb();return M.r=o(0,s(255,M.r-a(255*-(W/100)))),M.g=o(0,s(255,M.g-a(255*-(W/100)))),M.b=o(0,s(255,M.b-a(255*-(W/100)))),c(M)}function A(T,W){W=W===0?0:W||10;var M=c(T).toHsl();return M.l-=W/100,M.l=q(M.l),c(M)}function D(T,W){var M=c(T).toHsl(),d=(M.h+W)%360;return M.h=d<0?360+d:d,c(M)}function G(T){var W=c(T).toHsl();return W.h=(W.h+180)%360,c(W)}function N(T){var W=c(T).toHsl(),M=W.h;return[c(T),c({h:(M+120)%360,s:W.s,l:W.l}),c({h:(M+240)%360,s:W.s,l:W.l})]}function Q(T){var W=c(T).toHsl(),M=W.h;return[c(T),c({h:(M+90)%360,s:W.s,l:W.l}),c({h:(M+180)%360,s:W.s,l:W.l}),c({h:(M+270)%360,s:W.s,l:W.l})]}function $(T){var W=c(T).toHsl(),M=W.h;return[c(T),c({h:(M+72)%360,s:W.s,l:W.l}),c({h:(M+216)%360,s:W.s,l:W.l})]}function O(T,W,M){W=W||6,M=M||30;var d=c(T).toHsl(),_=360/M,b=[c(T)];for(d.h=(d.h-(_*W>>1)+720)%360;--W;)d.h=(d.h+_)%360,b.push(c(d));return b}function I(T,W){W=W||6;for(var M=c(T).toHsv(),d=M.h,_=M.s,b=M.v,R=[],H=1/W;W--;)R.push(c({h:d,s:_,v:b})),b=(b+H)%1;return R}c.mix=function(T,W,M){M=M===0?0:M||50;var d=c(T).toRgb(),_=c(W).toRgb(),b=M/100,R={r:(_.r-d.r)*b+d.r,g:(_.g-d.g)*b+d.g,b:(_.b-d.b)*b+d.b,a:(_.a-d.a)*b+d.a};return c(R)},c.readability=function(T,W){var M=c(T),d=c(W);return(e.max(M.getLuminance(),d.getLuminance())+.05)/(e.min(M.getLuminance(),d.getLuminance())+.05)},c.isReadable=function(T,W,M){var d=c.readability(T,W),_,b;switch(b=!1,_=_e(M),_.level+_.size){case"AAsmall":case"AAAlarge":b=d>=4.5;break;case"AAlarge":b=d>=3;break;case"AAAsmall":b=d>=7;break}return b},c.mostReadable=function(T,W,M){var d=null,_=0,b,R,H,J;M=M||{},R=M.includeFallbackColors,H=M.level,J=M.size;for(var L=0;L<W.length;L++)b=c.readability(T,W[L]),b>_&&(_=b,d=c(W[L]));return c.isReadable(T,d,{level:H,size:J})||!R?d:(M.includeFallbackColors=!1,c.mostReadable(T,["#fff","#000"],M))};var K=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},oe=c.hexNames=ae(K);function ae(T){var W={};for(var M in T)T.hasOwnProperty(M)&&(W[T[M]]=M);return W}function ee(T){return T=parseFloat(T),(isNaN(T)||T<0||T>1)&&(T=1),T}function U(T,W){k(T)&&(T="100%");var M=Z(T);return T=s(W,o(0,parseFloat(T))),M&&(T=parseInt(T*W,10)/100),e.abs(T-W)<1e-6?1:T%W/parseFloat(W)}function q(T){return s(1,o(0,T))}function z(T){return parseInt(T,16)}function k(T){return typeof T=="string"&&T.indexOf(".")!=-1&&parseFloat(T)===1}function Z(T){return typeof T=="string"&&T.indexOf("%")!=-1}function se(T){return T.length==1?"0"+T:""+T}function B(T){return T<=1&&(T=T*100+"%"),T}function V(T){return e.round(parseFloat(T)*255).toString(16)}function ne(T){return z(T)/255}var ue=function(){var T="[-\\+]?\\d+%?",W="[-\\+]?\\d*\\.\\d+%?",M="(?:"+W+")|(?:"+T+")",d="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",_="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?";return{CSS_UNIT:new RegExp(M),rgb:new RegExp("rgb"+d),rgba:new RegExp("rgba"+_),hsl:new RegExp("hsl"+d),hsla:new RegExp("hsla"+_),hsv:new RegExp("hsv"+d),hsva:new RegExp("hsva"+_),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function he(T){return!!ue.CSS_UNIT.exec(T)}function Me(T){T=T.replace(t,"").replace(n,"").toLowerCase();var W=!1;if(K[T])T=K[T],W=!0;else if(T=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var M;return(M=ue.rgb.exec(T))?{r:M[1],g:M[2],b:M[3]}:(M=ue.rgba.exec(T))?{r:M[1],g:M[2],b:M[3],a:M[4]}:(M=ue.hsl.exec(T))?{h:M[1],s:M[2],l:M[3]}:(M=ue.hsla.exec(T))?{h:M[1],s:M[2],l:M[3],a:M[4]}:(M=ue.hsv.exec(T))?{h:M[1],s:M[2],v:M[3]}:(M=ue.hsva.exec(T))?{h:M[1],s:M[2],v:M[3],a:M[4]}:(M=ue.hex8.exec(T))?{r:z(M[1]),g:z(M[2]),b:z(M[3]),a:ne(M[4]),format:W?"name":"hex8"}:(M=ue.hex6.exec(T))?{r:z(M[1]),g:z(M[2]),b:z(M[3]),format:W?"name":"hex"}:(M=ue.hex4.exec(T))?{r:z(M[1]+""+M[1]),g:z(M[2]+""+M[2]),b:z(M[3]+""+M[3]),a:ne(M[4]+""+M[4]),format:W?"name":"hex8"}:(M=ue.hex3.exec(T))?{r:z(M[1]+""+M[1]),g:z(M[2]+""+M[2]),b:z(M[3]+""+M[3]),format:W?"name":"hex"}:!1}function _e(T){var W,M;return T=T||{level:"AA",size:"small"},W=(T.level||"AA").toUpperCase(),M=(T.size||"small").toLowerCase(),W!=="AA"&&W!=="AAA"&&(W="AA"),M!=="small"&&M!=="large"&&(M="small"),{level:W,size:M}}r.exports?r.exports=c:window.tinycolor=c})(Math)})(H_);const Zu=ss;function Qu(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function eh(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Qu(Object(t),!0).forEach(function(n){cs(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Qu(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function ls(r){return ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ls(r)}function W_(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function th(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function V_(r,e,t){return e&&th(r.prototype,e),t&&th(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function cs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function q_(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&ga(r,e)}function ma(r){return ma=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ma(r)}function ga(r,e){return ga=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},ga(r,e)}function rh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function va(r,e,t){return rh()?va=Reflect.construct.bind():va=function(n,i,a){var s=[null];s.push.apply(s,i);var o=Function.bind.apply(n,s),l=new o;return a&&ga(l,a.prototype),l},va.apply(null,arguments)}function X_(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}function Y_(r,e){if(r==null)return{};var t=X_(r,e),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function nh(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $_(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nh(r)}function K_(r){var e=rh();return function(){var t=ma(r),n;if(e){var i=ma(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return $_(this,n)}}function ih(r,e){return Z_(r)||eb(r,e)||ah(r,e)||rb()}function Wt(r){return J_(r)||Q_(r)||ah(r)||tb()}function J_(r){if(Array.isArray(r))return us(r)}function Z_(r){if(Array.isArray(r))return r}function Q_(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function eb(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,s,o;try{for(t=t.call(r);!(i=(s=t.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw o}}return n}}function ah(r,e){if(r){if(typeof r=="string")return us(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return us(r,e)}}function us(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function tb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nb=function r(e){e instanceof Array?e.forEach(r):(e.map&&e.map.dispose(),e.dispose())},ib=function r(e){e.geometry&&e.geometry.dispose(),e.material&&nb(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(r)},hs=function(r){for(;r.children.length;){var e=r.children[0];r.remove(e),ib(e)}},ab=["objFilter"];function li(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.objFilter,i=n===void 0?function(){return!0}:n,a=Y_(t,ab);return F_(r,e.children.filter(i),function(s){return e.add(s)},function(s){e.remove(s),hs(s)},eh({objBindAttr:"__threeObj"},a))}var ya=function(r){return isNaN(r)?parseInt(Zu(r).toHex(),16):r},oh=function(r){return isNaN(r)?Zu(r).getAlpha():1},ob=Ju(G_);function sh(r,e,t){!e||typeof t!="string"||r.filter(function(n){return!n[t]}).forEach(function(n){n[t]=ob(e(n))})}function sb(r,e){var t=r.nodes,n=r.links,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.nodeFilter,s=a===void 0?function(){return!0}:a,o=i.onLoopError,l=o===void 0?function(g){throw"Invalid DAG structure! Found cycle in node path: ".concat(g.join(" -> "),".")}:o,c={};t.forEach(function(g){return c[e(g)]={data:g,out:[],depth:-1,skip:!s(g)}}),n.forEach(function(g){var v=g.source,p=g.target,m=x(v),y=x(p);if(!c.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!c.hasOwnProperty(y))throw"Missing target node with id: ".concat(y);var E=c[m],S=c[y];E.out.push(S);function x(w){return ls(w)==="object"?e(w):w}});var u=[];f(Object.values(c));var h=Object.assign.apply(Object,[{}].concat(Wt(Object.entries(c).filter(function(g){var v=ih(g,2),p=v[1];return!p.skip}).map(function(g){var v=ih(g,2),p=v[0],m=v[1];return cs({},p,m.depth)}))));return h;function f(g){for(var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=0,y=g.length;m<y;m++){var E=g[m];if(v.indexOf(E)!==-1){var S=function(){var x=[].concat(Wt(v.slice(v.indexOf(E))),[E]).map(function(w){return e(w.data)});return u.some(function(w){return w.length===x.length&&w.every(function(C,F){return C===x[F]})})||(u.push(x),l(x)),"continue"}();if(S==="continue")continue}p>E.depth&&(E.depth=p,f(E.out,[].concat(Wt(v),[E]),p+(E.skip?0:1)))}}}var Oe=window.THREE?window.THREE:{Group:En,Mesh:Et,MeshLambertMaterial:Wv,Color:je,BufferGeometry:_t,BufferAttribute:Ht,Matrix4:Ye,Vector3:Y,SphereGeometry:ri,CylinderGeometry:ra,TubeGeometry:Go,ConeGeometry:jo,Line:Tv,LineBasicMaterial:Ic,QuadraticBezierCurve3:Uo,CubicBezierCurve3:Uc,Box3:Br},lh={graph:v1,forcelayout:ca},lb=2,ch=new Oe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",_a=new Oe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",cb=is({props:{jsonUrl:{onChange:function(r,e){var t=this;r&&!e.fetchingJson&&(e.fetchingJson=!0,e.onLoading(),fetch(r).then(function(n){return n.json()}).then(function(n){e.fetchingJson=!1,e.onFinishLoading(n),t.graphData(n)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(r,e){e.engineRunning=!1}},numDimensions:{default:3,onChange:function(r,e){var t=e.d3ForceLayout.force("charge");t&&t.strength(r>2?-60:-30),r<3&&n(e.graphData.nodes,"z"),r<2&&n(e.graphData.nodes,"y");function n(i,a){i.forEach(function(s){delete s[a],delete s["v".concat(a)]})}}},dagMode:{onChange:function(r,e){!r&&e.forceEngine==="d3"&&(e.graphData.nodes||[]).forEach(function(t){return t.fx=t.fy=t.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(r){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(r,e){e.d3ForceLayout.alphaDecay(r)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(r,e){e.d3ForceLayout.alphaTarget(r)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(r,e){e.d3ForceLayout.velocityDecay(r)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(r){return r._flushObjects=!0,r._rerender(),this},d3Force:function(r,e,t){return t===void 0?r.d3ForceLayout.force(e):(r.d3ForceLayout.force(e,t),this)},d3ReheatSimulation:function(r){return r.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(r){return r.cntTicks=0,r.startTickTime=new Date,r.engineRunning=!0,this},tickFrame:function(r){var e=r.forceEngine!=="ngraph";return r.engineRunning&&t(),n(),i(),this;function t(){++r.cntTicks>r.cooldownTicks||new Date-r.startTickTime>r.cooldownTime||e&&r.d3AlphaMin>0&&r.d3ForceLayout.alpha()<r.d3AlphaMin?(r.engineRunning=!1,r.onEngineStop()):(r.layout[e?"tick":"step"](),r.onEngineTick()),r.graphData.nodes.forEach(function(u){var h=u.__threeObj;if(h){var f=e?u:r.layout.getNodePosition(u[r.nodeId]);h.position.x=f.x,h.position.y=f.y||0,h.position.z=f.z||0}});var a=Ge(r.linkWidth),s=Ge(r.linkCurvature),o=Ge(r.linkCurveRotation),l=Ge(r.linkThreeObjectExtend);r.graphData.links.forEach(function(u){var h=u.__lineObj;if(h){var f=e?u:r.layout.getLinkPosition(r.layout.graph.getLink(u.source,u.target).id),g=f[e?"source":"from"],v=f[e?"target":"to"];if(!(!g||!v||!g.hasOwnProperty("x")||!v.hasOwnProperty("x"))){c(u);var p=l(u);if(!(r.linkPositionUpdate&&r.linkPositionUpdate(p?h.children[1]:h,{start:{x:g.x,y:g.y,z:g.z},end:{x:v.x,y:v.y,z:v.z}},u)&&!p)){var m=30,y=u.__curve,E=h.children.length?h.children[0]:h;if(E.type==="Line"){if(y)E.geometry.setFromPoints(y.getPoints(m));else{var S=E.geometry.getAttribute("position");(!S||!S.array||S.array.length!==6)&&E.geometry[ch]("position",S=new Oe.BufferAttribute(new Float32Array(2*3),3)),S.array[0]=g.x,S.array[1]=g.y||0,S.array[2]=g.z||0,S.array[3]=v.x,S.array[4]=v.y||0,S.array[5]=v.z||0,S.needsUpdate=!0}E.geometry.computeBoundingSphere()}else if(E.type==="Mesh")if(y){E.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(E.position.set(0,0,0),E.rotation.set(0,0,0),E.scale.set(1,1,1));var x=Math.ceil(a(u)*10)/10,w=x/2,C=new Oe.TubeGeometry(y,m,w,r.linkResolution,!1);E.geometry.dispose(),E.geometry=C}else{if(!E.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var F=Math.ceil(a(u)*10)/10,A=F/2,D=new Oe.CylinderGeometry(A,A,1,r.linkResolution,1,!1);D[_a](new Oe.Matrix4().makeTranslation(0,1/2,0)),D[_a](new Oe.Matrix4().makeRotationX(Math.PI/2)),E.geometry.dispose(),E.geometry=D}var G=new Oe.Vector3(g.x,g.y||0,g.z||0),N=new Oe.Vector3(v.x,v.y||0,v.z||0),Q=G.distanceTo(N);E.position.x=G.x,E.position.y=G.y,E.position.z=G.z,E.scale.z=Q,E.parent.localToWorld(N),E.lookAt(N)}}}}});function c(u){var h=e?u:r.layout.getLinkPosition(r.layout.graph.getLink(u.source,u.target).id),f=h[e?"source":"from"],g=h[e?"target":"to"];if(!(!f||!g||!f.hasOwnProperty("x")||!g.hasOwnProperty("x"))){var v=s(u);if(!v)u.__curve=null;else{var p=new Oe.Vector3(f.x,f.y||0,f.z||0),m=new Oe.Vector3(g.x,g.y||0,g.z||0),y=p.distanceTo(m),E,S=o(u);if(y>0){var x=g.x-f.x,w=g.y-f.y||0,C=new Oe.Vector3().subVectors(m,p),F=C.clone().multiplyScalar(v).cross(x!==0||w!==0?new Oe.Vector3(0,0,1):new Oe.Vector3(0,1,0)).applyAxisAngle(C.normalize(),S).add(new Oe.Vector3().addVectors(p,m).divideScalar(2));E=new Oe.QuadraticBezierCurve3(p,F,m)}else{var A=v*70,D=-S,G=D+Math.PI/2;E=new Oe.CubicBezierCurve3(p,new Oe.Vector3(A*Math.cos(G),A*Math.sin(G),0).add(p),new Oe.Vector3(A*Math.cos(D),A*Math.sin(D),0).add(p),m)}u.__curve=E}}}}function n(){var a=Ge(r.linkDirectionalArrowRelPos),s=Ge(r.linkDirectionalArrowLength),o=Ge(r.nodeVal);r.graphData.links.forEach(function(l){var c=l.__arrowObj;if(c){var u=e?l:r.layout.getLinkPosition(r.layout.graph.getLink(l.source,l.target).id),h=u[e?"source":"from"],f=u[e?"target":"to"];if(!(!h||!f||!h.hasOwnProperty("x")||!f.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,o(h)||1))*r.nodeRelSize,v=Math.cbrt(Math.max(0,o(f)||1))*r.nodeRelSize,p=s(l),m=a(l),y=l.__curve?function(F){return l.__curve.getPoint(F)}:function(F){var A=function(D,G,N,Q){return G[D]+(N[D]-G[D])*Q||0};return{x:A("x",h,f,F),y:A("y",h,f,F),z:A("z",h,f,F)}},E=l.__curve?l.__curve.getLength():Math.sqrt(["x","y","z"].map(function(F){return Math.pow((f[F]||0)-(h[F]||0),2)}).reduce(function(F,A){return F+A},0)),S=g+p+(E-g-v-p)*m,x=y(S/E),w=y((S-p)/E);["x","y","z"].forEach(function(F){return c.position[F]=w[F]});var C=va(Oe.Vector3,Wt(["x","y","z"].map(function(F){return x[F]})));c.parent.localToWorld(C),c.lookAt(C)}}})}function i(){var a=Ge(r.linkDirectionalParticleSpeed);r.graphData.links.forEach(function(s){var o=s.__photonsObj&&s.__photonsObj.children,l=s.__singleHopPhotonsObj&&s.__singleHopPhotonsObj.children;if(!((!l||!l.length)&&(!o||!o.length))){var c=e?s:r.layout.getLinkPosition(r.layout.graph.getLink(s.source,s.target).id),u=c[e?"source":"from"],h=c[e?"target":"to"];if(!(!u||!h||!u.hasOwnProperty("x")||!h.hasOwnProperty("x"))){var f=a(s),g=s.__curve?function(p){return s.__curve.getPoint(p)}:function(p){var m=function(y,E,S,x){return E[y]+(S[y]-E[y])*x||0};return{x:m("x",u,h,p),y:m("y",u,h,p),z:m("z",u,h,p)}},v=[].concat(Wt(o||[]),Wt(l||[]));v.forEach(function(p,m){var y=p.parent.__linkThreeObjType==="singleHopPhotons";if(p.hasOwnProperty("__progressRatio")||(p.__progressRatio=y?0:m/o.length),p.__progressRatio+=f,p.__progressRatio>=1)if(!y)p.__progressRatio=p.__progressRatio%1;else{p.parent.remove(p),hs(p);return}var E=p.__progressRatio,S=g(E);["x","y","z"].forEach(function(x){return p.position[x]=S[x]})})}}})}},emitParticle:function(r,e){if(e&&r.graphData.links.includes(e)){if(!e.__singleHopPhotonsObj){var t=new Oe.Group;t.__linkThreeObjType="singleHopPhotons",e.__singleHopPhotonsObj=t,r.graphScene.add(t)}var n=Ge(r.linkDirectionalParticleWidth),i=Math.ceil(n(e)*10)/10/2,a=r.linkDirectionalParticleResolution,s=new Oe.SphereGeometry(i,a,a),o=Ge(r.linkColor),l=Ge(r.linkDirectionalParticleColor),c=l(e)||o(e)||"#f0f0f0",u=new Oe.Color(ya(c)),h=r.linkOpacity*3,f=new Oe.MeshLambertMaterial({color:u,transparent:!0,opacity:h});e.__singleHopPhotonsObj.add(new Oe.Mesh(s,f))}return this},getGraphBbox:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!r.initialised)return null;var t=function n(i){var a=[];if(i.geometry){i.geometry.computeBoundingBox();var s=new Oe.Box3;s.copy(i.geometry.boundingBox).applyMatrix4(i.matrixWorld),a.push(s)}return a.concat.apply(a,Wt((i.children||[]).filter(function(o){return!o.hasOwnProperty("__graphObjType")||o.__graphObjType==="node"&&e(o.__data)}).map(n)))}(r.graphScene);return t.length?Object.assign.apply(Object,Wt(["x","y","z"].map(function(n){return cs({},n,[p_(t,function(i){return i.min[n]}),f_(t,function(i){return i.max[n]})])}))):null}},stateInit:function(){return{d3ForceLayout:h1().force("link",Ky()).force("charge",d1()).force("center",ey()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(r,e){e.graphScene=r},update:function(r,e){var t=function(k){return k.some(function(Z){return e.hasOwnProperty(Z)})};if(r.engineRunning=!1,r.onUpdate(),r.nodeAutoColorBy!==null&&t(["nodeAutoColorBy","graphData","nodeColor"])&&sh(r.graphData.nodes,Ge(r.nodeAutoColorBy),r.nodeColor),r.linkAutoColorBy!==null&&t(["linkAutoColorBy","graphData","linkColor"])&&sh(r.graphData.links,Ge(r.linkAutoColorBy),r.linkColor),r._flushObjects||t(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var n=Ge(r.nodeThreeObject),i=Ge(r.nodeThreeObjectExtend),a=Ge(r.nodeVal),s=Ge(r.nodeColor),o=Ge(r.nodeVisibility),l={},c={};li(r.graphData.nodes.filter(o),r.graphScene,{purge:r._flushObjects||t(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(k){return k.__graphObjType==="node"},createObj:function(k){var Z=n(k),se=i(k);Z&&r.nodeThreeObject===Z&&(Z=Z.clone());var B;return Z&&!se?B=Z:(B=new Oe.Mesh,B.__graphDefaultObj=!0,Z&&se&&B.add(Z)),B.__graphObjType="node",B},updateObj:function(k,Z){if(k.__graphDefaultObj){var se=a(Z)||1,B=Math.cbrt(se)*r.nodeRelSize,V=r.nodeResolution;(!k.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||k.geometry.parameters.radius!==B||k.geometry.parameters.widthSegments!==V)&&(l.hasOwnProperty(se)||(l[se]=new Oe.SphereGeometry(B,V,V)),k.geometry.dispose(),k.geometry=l[se]);var ne=s(Z),ue=new Oe.Color(ya(ne||"#ffffaa")),he=r.nodeOpacity*oh(ne);(k.material.type!=="MeshLambertMaterial"||!k.material.color.equals(ue)||k.material.opacity!==he)&&(c.hasOwnProperty(ne)||(c[ne]=new Oe.MeshLambertMaterial({color:ue,transparent:!0,opacity:he})),k.material.dispose(),k.material=c[ne])}}})}if(r._flushObjects||t(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var u=Ge(r.linkThreeObject),h=Ge(r.linkThreeObjectExtend),f=Ge(r.linkMaterial),g=Ge(r.linkVisibility),v=Ge(r.linkColor),p=Ge(r.linkWidth),m={},y={},E={},S=r.graphData.links.filter(g);if(li(S,r.graphScene,{objBindAttr:"__lineObj",purge:r._flushObjects||t(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(k){return k.__graphObjType==="link"},exitObj:function(k){var Z=k.__data&&k.__data.__singleHopPhotonsObj;Z&&(Z.parent.remove(Z),hs(Z),delete k.__data.__singleHopPhotonsObj)},createObj:function(k){var Z=u(k),se=h(k);Z&&r.linkThreeObject===Z&&(Z=Z.clone());var B;if(!Z||se){var V=!!p(k);if(V)B=new Oe.Mesh;else{var ne=new Oe.BufferGeometry;ne[ch]("position",new Oe.BufferAttribute(new Float32Array(2*3),3)),B=new Oe.Line(ne)}}var ue;return Z?se?(ue=new Oe.Group,ue.__graphDefaultObj=!0,ue.add(B),ue.add(Z)):ue=Z:(ue=B,ue.__graphDefaultObj=!0),ue.renderOrder=10,ue.__graphObjType="link",ue},updateObj:function(k,Z){if(k.__graphDefaultObj){var se=k.children.length?k.children[0]:k,B=Math.ceil(p(Z)*10)/10,V=!!B;if(V){var ne=B/2,ue=r.linkResolution;if(!se.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||se.geometry.parameters.radiusTop!==ne||se.geometry.parameters.radialSegments!==ue){if(!m.hasOwnProperty(B)){var he=new Oe.CylinderGeometry(ne,ne,1,ue,1,!1);he[_a](new Oe.Matrix4().makeTranslation(0,1/2,0)),he[_a](new Oe.Matrix4().makeRotationX(Math.PI/2)),m[B]=he}se.geometry.dispose(),se.geometry=m[B]}}var Me=f(Z);if(Me)se.material=Me;else{var _e=v(Z),T=new Oe.Color(ya(_e||"#f0f0f0")),W=r.linkOpacity*oh(_e),M=V?"MeshLambertMaterial":"LineBasicMaterial";if(se.material.type!==M||!se.material.color.equals(T)||se.material.opacity!==W){var d=V?y:E;d.hasOwnProperty(_e)||(d[_e]=new Oe[M]({color:T,transparent:W<1,opacity:W,depthWrite:W>=1})),se.material.dispose(),se.material=d[_e]}}}}}),r.linkDirectionalArrowLength||e.hasOwnProperty("linkDirectionalArrowLength")){var x=Ge(r.linkDirectionalArrowLength),w=Ge(r.linkDirectionalArrowColor);li(S.filter(x),r.graphScene,{objBindAttr:"__arrowObj",objFilter:function(k){return k.__linkThreeObjType==="arrow"},createObj:function(){var k=new Oe.Mesh(void 0,new Oe.MeshLambertMaterial({transparent:!0}));return k.__linkThreeObjType="arrow",k},updateObj:function(k,Z){var se=x(Z),B=r.linkDirectionalArrowResolution;if(!k.geometry.type.match(/^Cone(Buffer)?Geometry$/)||k.geometry.parameters.height!==se||k.geometry.parameters.radialSegments!==B){var V=new Oe.ConeGeometry(se*.25,se,B);V.translate(0,se/2,0),V.rotateX(Math.PI/2),k.geometry.dispose(),k.geometry=V}k.material.color=new Oe.Color(w(Z)||v(Z)||"#f0f0f0"),k.material.opacity=r.linkOpacity*3}})}if(r.linkDirectionalParticles||e.hasOwnProperty("linkDirectionalParticles")){var C=Ge(r.linkDirectionalParticles),F=Ge(r.linkDirectionalParticleWidth),A=Ge(r.linkDirectionalParticleColor),D={},G={};li(S.filter(C),r.graphScene,{objBindAttr:"__photonsObj",objFilter:function(k){return k.__linkThreeObjType==="photons"},createObj:function(){var k=new Oe.Group;return k.__linkThreeObjType="photons",k},updateObj:function(k,Z){var se=Math.round(Math.abs(C(Z))),B=!!k.children.length&&k.children[0],V=Math.ceil(F(Z)*10)/10/2,ne=r.linkDirectionalParticleResolution,ue;B&&B.geometry.parameters.radius===V&&B.geometry.parameters.widthSegments===ne?ue=B.geometry:(G.hasOwnProperty(V)||(G[V]=new Oe.SphereGeometry(V,ne,ne)),ue=G[V],B&&B.geometry.dispose());var he=A(Z)||v(Z)||"#f0f0f0",Me=new Oe.Color(ya(he)),_e=r.linkOpacity*3,T;B&&B.material.color.equals(Me)&&B.material.opacity===_e?T=B.material:(D.hasOwnProperty(he)||(D[he]=new Oe.MeshLambertMaterial({color:Me,transparent:!0,opacity:_e})),T=D[he],B&&B.material.dispose()),li(Wt(new Array(se)).map(function(W,M){return{idx:M}}),k,{idAccessor:function(W){return W.idx},createObj:function(){return new Oe.Mesh(ue,T)},updateObj:function(W){W.geometry=ue,W.material=T}})}})}}if(r._flushObjects=!1,t(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){r.engineRunning=!1,r.graphData.links.forEach(function(k){k.source=k[r.linkSource],k.target=k[r.linkTarget]});var N=r.forceEngine!=="ngraph",Q;if(N){(Q=r.d3ForceLayout).stop().alpha(1).numDimensions(r.numDimensions).nodes(r.graphData.nodes);var $=r.d3ForceLayout.force("link");$&&$.id(function(k){return k[r.nodeId]}).links(r.graphData.links);var O=r.dagMode&&sb(r.graphData,function(k){return k[r.nodeId]},{nodeFilter:r.dagNodeFilter,onLoopError:r.onDagError||void 0}),I=Math.max.apply(Math,Wt(Object.values(O||[]))),K=r.dagLevelDistance||r.graphData.nodes.length/(I||1)*lb*(["radialin","radialout"].indexOf(r.dagMode)!==-1?.7:1);if(r.dagMode){var oe=function(k,Z){return function(se){return k?(O[se[r.nodeId]]-I/2)*K*(Z?-1:1):void 0}},ae=oe(["lr","rl"].indexOf(r.dagMode)!==-1,r.dagMode==="rl"),ee=oe(["td","bu"].indexOf(r.dagMode)!==-1,r.dagMode==="td"),U=oe(["zin","zout"].indexOf(r.dagMode)!==-1,r.dagMode==="zout");r.graphData.nodes.filter(r.dagNodeFilter).forEach(function(k){k.fx=ae(k),k.fy=ee(k),k.fz=U(k)})}r.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(r.dagMode)!==-1?f1(function(k){var Z=O[k[r.nodeId]]||-1;return(r.dagMode==="radialin"?I-Z:Z)*K}).strength(function(k){return r.dagNodeFilter(k)?1:0}):null)}else{var q=lh.graph();r.graphData.nodes.forEach(function(k){q.addNode(k[r.nodeId])}),r.graphData.links.forEach(function(k){q.addLink(k.source,k.target)}),Q=lh.forcelayout(q,eh({dimensions:r.numDimensions},r.ngraphPhysics)),Q.graph=q}for(var z=0;z<r.warmupTicks&&!(N&&r.d3AlphaMin>0&&r.d3ForceLayout.alpha()<r.d3AlphaMin);z++)Q[N?"tick":"step"]();r.layout=Q,this.resetCountdown()}r.engineRunning=!0,r.onFinishUpdate()}});function ub(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=function(i){q_(s,i);var a=K_(s);function s(){var o;W_(this,s);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return o=a.call.apply(a,[this].concat(c)),o.__kapsuleInstance=r().apply(void 0,[].concat(Wt(t?[nh(o)]:[]),c)),o}return V_(s)}(e);return Object.keys(r()).forEach(function(i){return n.prototype[i]=function(){var a,s=(a=this.__kapsuleInstance)[i].apply(a,arguments);return s===this.__kapsuleInstance?this:s}}),n}var hb=window.THREE?window.THREE:{Group:En},uh=ub(cb,hb.Group,!0);const ds={type:"change"},fs={type:"start"},ps={type:"end"};class db extends zt{constructor(e,t){super();const n=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Vt.ROTATE,MIDDLE:Vt.DOLLY,RIGHT:Vt.PAN},this.target=new Y;const a=1e-6,s=new Y;let o=1,l=i.NONE,c=i.NONE,u=0,h=0,f=0;const g=new Y,v=new we,p=new we,m=new Y,y=new we,E=new we,S=new we,x=new we,w=[],C={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const V=n.domElement.getBoundingClientRect(),ne=n.domElement.ownerDocument.documentElement;n.screen.left=V.left+window.pageXOffset-ne.clientLeft,n.screen.top=V.top+window.pageYOffset-ne.clientTop,n.screen.width=V.width,n.screen.height=V.height};const F=function(){const V=new we;return function(ne,ue){return V.set((ne-n.screen.left)/n.screen.width,(ue-n.screen.top)/n.screen.height),V}}(),A=function(){const V=new we;return function(ne,ue){return V.set((ne-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-ue))/n.screen.width),V}}();this.rotateCamera=function(){const V=new Y,ne=new Ut,ue=new Y,he=new Y,Me=new Y,_e=new Y;return function(){_e.set(p.x-v.x,p.y-v.y,0);let T=_e.length();T?(g.copy(n.object.position).sub(n.target),ue.copy(g).normalize(),he.copy(n.object.up).normalize(),Me.crossVectors(he,ue).normalize(),he.setLength(p.y-v.y),Me.setLength(p.x-v.x),_e.copy(he.add(Me)),V.crossVectors(_e,g).normalize(),T*=n.rotateSpeed,ne.setFromAxisAngle(V,T),g.applyQuaternion(ne),n.object.up.applyQuaternion(ne),m.copy(V),f=T):!n.staticMoving&&f&&(f*=Math.sqrt(1-n.dynamicDampingFactor),g.copy(n.object.position).sub(n.target),ne.setFromAxisAngle(m,f),g.applyQuaternion(ne),n.object.up.applyQuaternion(ne)),v.copy(p)}}(),this.zoomCamera=function(){let V;l===i.TOUCH_ZOOM_PAN?(V=u/h,u=h,n.object.isPerspectiveCamera?g.multiplyScalar(V):n.object.isOrthographicCamera?(n.object.zoom/=V,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(V=1+(E.y-y.y)*n.zoomSpeed,V!==1&&V>0&&(n.object.isPerspectiveCamera?g.multiplyScalar(V):n.object.isOrthographicCamera?(n.object.zoom/=V,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?y.copy(E):y.y+=(E.y-y.y)*this.dynamicDampingFactor)},this.panCamera=function(){const V=new we,ne=new Y,ue=new Y;return function(){if(V.copy(x).sub(S),V.lengthSq()){if(n.object.isOrthographicCamera){const he=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Me=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;V.x*=he,V.y*=Me}V.multiplyScalar(g.length()*n.panSpeed),ue.copy(g).cross(n.object.up).setLength(V.x),ue.add(ne.copy(n.object.up).setLength(V.y)),n.object.position.add(ue),n.target.add(ue),n.staticMoving?S.copy(x):S.add(V.subVectors(x,S).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(g.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,g.setLength(n.maxDistance)),y.copy(E)),g.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,g.setLength(n.minDistance)),y.copy(E)))},this.update=function(){g.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,g),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),s.distanceToSquared(n.object.position)>a&&(n.dispatchEvent(ds),s.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(s.distanceToSquared(n.object.position)>a||o!==n.object.zoom)&&(n.dispatchEvent(ds),s.copy(n.object.position),o=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=i.NONE,c=i.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),g.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(ds),s.copy(n.object.position),o=n.object.zoom};function D(V){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(V.pointerId),n.domElement.addEventListener("pointermove",G),n.domElement.addEventListener("pointerup",N)),k(V),V.pointerType==="touch"?ee(V):I(V))}function G(V){n.enabled!==!1&&(V.pointerType==="touch"?U(V):K(V))}function N(V){n.enabled!==!1&&(V.pointerType==="touch"?q(V):oe(),Z(V),w.length===0&&(n.domElement.releasePointerCapture(V.pointerId),n.domElement.removeEventListener("pointermove",G),n.domElement.removeEventListener("pointerup",N)))}function Q(V){Z(V)}function $(V){n.enabled!==!1&&(window.removeEventListener("keydown",$),c===i.NONE&&(V.code===n.keys[i.ROTATE]&&!n.noRotate?c=i.ROTATE:V.code===n.keys[i.ZOOM]&&!n.noZoom?c=i.ZOOM:V.code===n.keys[i.PAN]&&!n.noPan&&(c=i.PAN)))}function O(){n.enabled!==!1&&(c=i.NONE,window.addEventListener("keydown",$))}function I(V){if(l===i.NONE)switch(V.button){case n.mouseButtons.LEFT:l=i.ROTATE;break;case n.mouseButtons.MIDDLE:l=i.ZOOM;break;case n.mouseButtons.RIGHT:l=i.PAN;break}const ne=c!==i.NONE?c:l;ne===i.ROTATE&&!n.noRotate?(p.copy(A(V.pageX,V.pageY)),v.copy(p)):ne===i.ZOOM&&!n.noZoom?(y.copy(F(V.pageX,V.pageY)),E.copy(y)):ne===i.PAN&&!n.noPan&&(S.copy(F(V.pageX,V.pageY)),x.copy(S)),n.dispatchEvent(fs)}function K(V){const ne=c!==i.NONE?c:l;ne===i.ROTATE&&!n.noRotate?(v.copy(p),p.copy(A(V.pageX,V.pageY))):ne===i.ZOOM&&!n.noZoom?E.copy(F(V.pageX,V.pageY)):ne===i.PAN&&!n.noPan&&x.copy(F(V.pageX,V.pageY))}function oe(){l=i.NONE,n.dispatchEvent(ps)}function ae(V){if(n.enabled!==!1&&n.noZoom!==!0){switch(V.preventDefault(),V.deltaMode){case 2:y.y-=V.deltaY*.025;break;case 1:y.y-=V.deltaY*.01;break;default:y.y-=V.deltaY*25e-5;break}n.dispatchEvent(fs),n.dispatchEvent(ps)}}function ee(V){switch(se(V),w.length){case 1:l=i.TOUCH_ROTATE,p.copy(A(w[0].pageX,w[0].pageY)),v.copy(p);break;default:l=i.TOUCH_ZOOM_PAN;const ne=w[0].pageX-w[1].pageX,ue=w[0].pageY-w[1].pageY;h=u=Math.sqrt(ne*ne+ue*ue);const he=(w[0].pageX+w[1].pageX)/2,Me=(w[0].pageY+w[1].pageY)/2;S.copy(F(he,Me)),x.copy(S);break}n.dispatchEvent(fs)}function U(V){switch(se(V),w.length){case 1:v.copy(p),p.copy(A(V.pageX,V.pageY));break;default:const ne=B(V),ue=V.pageX-ne.x,he=V.pageY-ne.y;h=Math.sqrt(ue*ue+he*he);const Me=(V.pageX+ne.x)/2,_e=(V.pageY+ne.y)/2;x.copy(F(Me,_e));break}}function q(V){switch(w.length){case 0:l=i.NONE;break;case 1:l=i.TOUCH_ROTATE,p.copy(A(V.pageX,V.pageY)),v.copy(p);break;case 2:l=i.TOUCH_ZOOM_PAN;for(let ne=0;ne<w.length;ne++)if(w[ne].pointerId!==V.pointerId){const ue=C[w[ne].pointerId];p.copy(A(ue.x,ue.y)),v.copy(p);break}break}n.dispatchEvent(ps)}function z(V){n.enabled!==!1&&V.preventDefault()}function k(V){w.push(V)}function Z(V){delete C[V.pointerId];for(let ne=0;ne<w.length;ne++)if(w[ne].pointerId==V.pointerId){w.splice(ne,1);return}}function se(V){let ne=C[V.pointerId];ne===void 0&&(ne=new we,C[V.pointerId]=ne),ne.set(V.pageX,V.pageY)}function B(V){const ne=V.pointerId===w[0].pointerId?w[1]:w[0];return C[ne.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",z),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",Q),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",G),n.domElement.removeEventListener("pointerup",N),window.removeEventListener("keydown",$),window.removeEventListener("keyup",O)},this.domElement.addEventListener("contextmenu",z),this.domElement.addEventListener("pointerdown",D),this.domElement.addEventListener("pointercancel",Q),this.domElement.addEventListener("wheel",ae,{passive:!1}),window.addEventListener("keydown",$),window.addEventListener("keyup",O),this.handleResize(),this.update()}}const hh={type:"change"},ms={type:"start"},dh={type:"end"};class fb extends zt{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vt.ROTATE,MIDDLE:Vt.DOLLY,RIGHT:Vt.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(X){X.addEventListener("keydown",J),this._domElementKeyEvents=X},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hh),n.update(),a=i.NONE},this.update=function(){const X=new Y,ie=new Ut().setFromUnitVectors(e.up,new Y(0,1,0)),xe=ie.clone().invert(),Ae=new Y,Se=new Ut,Te=2*Math.PI;return function(){const Pe=n.object.position;X.copy(Pe).sub(n.target),X.applyQuaternion(ie),o.setFromVector3(X),n.autoRotate&&a===i.NONE&&D(F()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Re=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;return isFinite(Re)&&isFinite(Ne)&&(Re<-Math.PI?Re+=Te:Re>Math.PI&&(Re-=Te),Ne<-Math.PI?Ne+=Te:Ne>Math.PI&&(Ne-=Te),Re<=Ne?o.theta=Math.max(Re,Math.min(Ne,o.theta)):o.theta=o.theta>(Re+Ne)/2?Math.max(Re,o.theta):Math.min(Ne,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),X.setFromSpherical(o),X.applyQuaternion(xe),Pe.copy(n.target).add(X),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Ae.distanceToSquared(n.object.position)>s||8*(1-Se.dot(n.object.quaternion))>s?(n.dispatchEvent(hh),Ae.copy(n.object.position),Se.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",te),n.domElement.removeEventListener("pointerdown",W),n.domElement.removeEventListener("pointercancel",_),n.domElement.removeEventListener("wheel",H),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",d),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",J)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,o=new Vo,l=new Vo;let c=1;const u=new Y;let h=!1;const f=new we,g=new we,v=new we,p=new we,m=new we,y=new we,E=new we,S=new we,x=new we,w=[],C={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function A(){return Math.pow(.95,n.zoomSpeed)}function D(X){l.theta-=X}function G(X){l.phi-=X}const N=function(){const X=new Y;return function(ie,xe){X.setFromMatrixColumn(xe,0),X.multiplyScalar(-ie),u.add(X)}}(),Q=function(){const X=new Y;return function(ie,xe){n.screenSpacePanning===!0?X.setFromMatrixColumn(xe,1):(X.setFromMatrixColumn(xe,0),X.crossVectors(n.object.up,X)),X.multiplyScalar(ie),u.add(X)}}(),$=function(){const X=new Y;return function(ie,xe){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const Se=n.object.position;X.copy(Se).sub(n.target);let Te=X.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),N(2*ie*Te/Ae.clientHeight,n.object.matrix),Q(2*xe*Te/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(ie*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),Q(xe*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(X){n.object.isPerspectiveCamera?c/=X:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*X)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(X){n.object.isPerspectiveCamera?c*=X:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/X)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(X){f.set(X.clientX,X.clientY)}function oe(X){E.set(X.clientX,X.clientY)}function ae(X){p.set(X.clientX,X.clientY)}function ee(X){g.set(X.clientX,X.clientY),v.subVectors(g,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;D(2*Math.PI*v.x/ie.clientHeight),G(2*Math.PI*v.y/ie.clientHeight),f.copy(g),n.update()}function U(X){S.set(X.clientX,X.clientY),x.subVectors(S,E),x.y>0?O(A()):x.y<0&&I(A()),E.copy(S),n.update()}function q(X){m.set(X.clientX,X.clientY),y.subVectors(m,p).multiplyScalar(n.panSpeed),$(y.x,y.y),p.copy(m),n.update()}function z(X){X.deltaY<0?I(A()):X.deltaY>0&&O(A()),n.update()}function k(X){let ie=!1;switch(X.code){case n.keys.UP:$(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:$(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:$(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:$(-n.keyPanSpeed,0),ie=!0;break}ie&&(X.preventDefault(),n.update())}function Z(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const X=.5*(w[0].pageX+w[1].pageX),ie=.5*(w[0].pageY+w[1].pageY);f.set(X,ie)}}function se(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const X=.5*(w[0].pageX+w[1].pageX),ie=.5*(w[0].pageY+w[1].pageY);p.set(X,ie)}}function B(){const X=w[0].pageX-w[1].pageX,ie=w[0].pageY-w[1].pageY,xe=Math.sqrt(X*X+ie*ie);E.set(0,xe)}function V(){n.enableZoom&&B(),n.enablePan&&se()}function ne(){n.enableZoom&&B(),n.enableRotate&&Z()}function ue(X){if(w.length==1)g.set(X.pageX,X.pageY);else{const xe=Ce(X),Ae=.5*(X.pageX+xe.x),Se=.5*(X.pageY+xe.y);g.set(Ae,Se)}v.subVectors(g,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;D(2*Math.PI*v.x/ie.clientHeight),G(2*Math.PI*v.y/ie.clientHeight),f.copy(g)}function he(X){if(w.length===1)m.set(X.pageX,X.pageY);else{const ie=Ce(X),xe=.5*(X.pageX+ie.x),Ae=.5*(X.pageY+ie.y);m.set(xe,Ae)}y.subVectors(m,p).multiplyScalar(n.panSpeed),$(y.x,y.y),p.copy(m)}function Me(X){const ie=Ce(X),xe=X.pageX-ie.x,Ae=X.pageY-ie.y,Se=Math.sqrt(xe*xe+Ae*Ae);S.set(0,Se),x.set(0,Math.pow(S.y/E.y,n.zoomSpeed)),O(x.y),E.copy(S)}function _e(X){n.enableZoom&&Me(X),n.enablePan&&he(X)}function T(X){n.enableZoom&&Me(X),n.enableRotate&&ue(X)}function W(X){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(X.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",d)),de(X),X.pointerType==="touch"?L(X):b(X))}function M(X){n.enabled!==!1&&(X.pointerType==="touch"?P(X):R(X))}function d(X){ge(X),w.length===0&&(n.domElement.releasePointerCapture(X.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",d)),n.dispatchEvent(dh),a=i.NONE}function _(X){ge(X)}function b(X){let ie;switch(X.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Vt.DOLLY:if(n.enableZoom===!1)return;oe(X),a=i.DOLLY;break;case Vt.ROTATE:if(X.ctrlKey||X.metaKey||X.shiftKey){if(n.enablePan===!1)return;ae(X),a=i.PAN}else{if(n.enableRotate===!1)return;K(X),a=i.ROTATE}break;case Vt.PAN:if(X.ctrlKey||X.metaKey||X.shiftKey){if(n.enableRotate===!1)return;K(X),a=i.ROTATE}else{if(n.enablePan===!1)return;ae(X),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(ms)}function R(X){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;ee(X);break;case i.DOLLY:if(n.enableZoom===!1)return;U(X);break;case i.PAN:if(n.enablePan===!1)return;q(X);break}}function H(X){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(X.preventDefault(),n.dispatchEvent(ms),z(X),n.dispatchEvent(dh))}function J(X){n.enabled===!1||n.enablePan===!1||k(X)}function L(X){switch(ve(X),w.length){case 1:switch(n.touches.ONE){case Zr.ROTATE:if(n.enableRotate===!1)return;Z(),a=i.TOUCH_ROTATE;break;case Zr.PAN:if(n.enablePan===!1)return;se(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case Zr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(),a=i.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ne(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(ms)}function P(X){switch(ve(X),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ue(X),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(X),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(X),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;T(X),n.update();break;default:a=i.NONE}}function te(X){n.enabled!==!1&&X.preventDefault()}function de(X){w.push(X)}function ge(X){delete C[X.pointerId];for(let ie=0;ie<w.length;ie++)if(w[ie].pointerId==X.pointerId){w.splice(ie,1);return}}function ve(X){let ie=C[X.pointerId];ie===void 0&&(ie=new we,C[X.pointerId]=ie),ie.set(X.pageX,X.pageY)}function Ce(X){const ie=X.pointerId===w[0].pointerId?w[1]:w[0];return C[ie.pointerId]}n.domElement.addEventListener("contextmenu",te),n.domElement.addEventListener("pointerdown",W),n.domElement.addEventListener("pointercancel",_),n.domElement.addEventListener("wheel",H,{passive:!1}),this.update()}}const pb={type:"change"};class mb extends zt{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const n=this,i=1e-6,a=new Ut,s=new Y;this.tmpQuaternion=new Ut,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new Y(0,0,0),this.rotationVector=new Y(0,0,0),this.keydown=function(f){if(!f.altKey){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(f){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(f){if(this.dragToLook)this.status++;else{switch(f.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(f){if(!this.dragToLook||this.status>0){const g=this.getContainerDimensions(),v=g.size[0]/2,p=g.size[1]/2;this.moveState.yawLeft=-(f.pageX-g.offset[0]-v)/v,this.moveState.pitchDown=(f.pageY-g.offset[1]-p)/p,this.updateRotationVector()}},this.pointerup=function(f){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(f.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(f){const g=f*n.movementSpeed,v=f*n.rollSpeed;n.object.translateX(n.moveVector.x*g),n.object.translateY(n.moveVector.y*g),n.object.translateZ(n.moveVector.z*g),n.tmpQuaternion.set(n.rotationVector.x*v,n.rotationVector.y*v,n.rotationVector.z*v,1).normalize(),n.object.quaternion.multiply(n.tmpQuaternion),(s.distanceToSquared(n.object.position)>i||8*(1-a.dot(n.object.quaternion))>i)&&(n.dispatchEvent(pb),a.copy(n.object.quaternion),s.copy(n.object.position))},this.updateMovementVector=function(){const f=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-f+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",fh),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",o),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",u),window.removeEventListener("keyup",h)};const o=this.pointermove.bind(this),l=this.pointerdown.bind(this),c=this.pointerup.bind(this),u=this.keydown.bind(this),h=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",fh),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",o),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",u),window.addEventListener("keyup",h),this.updateMovementVector(),this.updateRotationVector()}}function fh(r){r.preventDefault()}const ph={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ba{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gb=new Ki(-1,1,1,-1,0,1),gs=new _t;gs.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),gs.setAttribute("uv",new Ze([0,2,0,0,2,0],2));class vb{constructor(e){this._mesh=new Et(gs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mh extends ba{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof or?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nc.clone(e.uniforms),this.material=new or({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vb(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gh extends ba{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class yb extends ba{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _b{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new we);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new _r(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ph===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),mh===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new mh(ph),this.clock=new qc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,a=this.passes.length;i<a;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gh!==void 0&&(s instanceof gh?n=!0:s instanceof yb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Ki(-1,1,1,-1,0,1);const vh=new _t;vh.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),vh.setAttribute("uv",new Ze([0,2,0,0,2,0],2));class bb extends ba{constructor(e,t,n,i,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=i}}function vs(){return vs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},vs.apply(this,arguments)}function xb(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ci(r,e){return ci=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},ci(r,e)}function wb(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,ci(r,e)}function ys(r){return ys=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ys(r)}function Mb(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function Sb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xa(r,e,t){return Sb()?xa=Reflect.construct.bind():xa=function(n,i,a){var s=[null];s.push.apply(s,i);var o=Function.bind.apply(n,s),l=new o;return a&&ci(l,a.prototype),l},xa.apply(null,arguments)}function _s(r){var e=typeof Map=="function"?new Map:void 0;return _s=function(t){if(t===null||!Mb(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return xa(t,arguments,ys(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ci(n,t)},_s(r)}var On=function(r){wb(e,r);function e(t){var n;return n=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,xb(n)}return e}(_s(Error));function bs(r){return Math.round(r*255)}function Eb(r,e,t){return bs(r)+","+bs(e)+","+bs(t)}function yh(r,e,t,n){if(n===void 0&&(n=Eb),e===0)return n(t,t,t);var i=(r%360+360)%360/60,a=(1-Math.abs(2*t-1))*e,s=a*(1-Math.abs(i%2-1)),o=0,l=0,c=0;i>=0&&i<1?(o=a,l=s):i>=1&&i<2?(o=s,l=a):i>=2&&i<3?(l=a,c=s):i>=3&&i<4?(l=s,c=a):i>=4&&i<5?(o=s,c=a):i>=5&&i<6&&(o=a,c=s);var u=t-a/2,h=o+u,f=l+u,g=c+u;return n(h,f,g)}var _h={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Ab(r){if(typeof r!="string")return r;var e=r.toLowerCase();return _h[e]?"#"+_h[e]:r}var Tb=/^#[a-fA-F0-9]{6}$/,Cb=/^#[a-fA-F0-9]{8}$/,Lb=/^#[a-fA-F0-9]{3}$/,Pb=/^#[a-fA-F0-9]{4}$/,xs=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Ob=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Db=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Rb=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function ws(r){if(typeof r!="string")throw new On(3);var e=Ab(r);if(e.match(Tb))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(Cb)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(Lb))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(Pb)){var n=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:n}}var i=xs.exec(e);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var a=Ob.exec(e.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var s=Db.exec(e);if(s){var o=parseInt(""+s[1],10),l=parseInt(""+s[2],10)/100,c=parseInt(""+s[3],10)/100,u="rgb("+yh(o,l,c)+")",h=xs.exec(u);if(!h)throw new On(4,e,u);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var f=Rb.exec(e.substring(0,50));if(f){var g=parseInt(""+f[1],10),v=parseInt(""+f[2],10)/100,p=parseInt(""+f[3],10)/100,m="rgb("+yh(g,v,p)+")",y=xs.exec(m);if(!y)throw new On(4,e,m);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new On(5)}var Ib=function(r){return r.length===7&&r[1]===r[2]&&r[3]===r[4]&&r[5]===r[6]?"#"+r[1]+r[3]+r[5]:r},bh=Ib;function Dn(r){var e=r.toString(16);return e.length===1?"0"+e:e}function xh(r,e,t){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number")return bh("#"+Dn(r)+Dn(e)+Dn(t));if(typeof r=="object"&&e===void 0&&t===void 0)return bh("#"+Dn(r.red)+Dn(r.green)+Dn(r.blue));throw new On(6)}function kb(r,e,t,n){if(typeof r=="string"&&typeof e=="number"){var i=ws(r);return"rgba("+i.red+","+i.green+","+i.blue+","+e+")"}else{if(typeof r=="number"&&typeof e=="number"&&typeof t=="number"&&typeof n=="number")return n>=1?xh(r,e,t):"rgba("+r+","+e+","+t+","+n+")";if(typeof r=="object"&&e===void 0&&t===void 0&&n===void 0)return r.alpha>=1?xh(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")"}throw new On(7)}function wh(r,e,t){return function(){var n=t.concat(Array.prototype.slice.call(arguments));return n.length>=e?r.apply(this,n):wh(r,e,n)}}function Nb(r){return wh(r,r.length,[])}function zb(r,e,t){return Math.max(r,Math.min(e,t))}function Bb(r,e){if(e==="transparent")return e;var t=ws(e),n=typeof t.alpha=="number"?t.alpha:1,i=vs({},t,{alpha:zb(0,1,(n*100+parseFloat(r)*100)/100)});return kb(i)}var Fb=Nb(Bb),Ub=Fb,jb={},wa={};wa.byteLength=Wb,wa.toByteArray=qb,wa.fromByteArray=$b;for(var Xt=[],Dt=[],Gb=typeof Uint8Array<"u"?Uint8Array:Array,Ms="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Rn=0,Hb=Ms.length;Rn<Hb;++Rn)Xt[Rn]=Ms[Rn],Dt[Ms.charCodeAt(Rn)]=Rn;Dt["-".charCodeAt(0)]=62,Dt["_".charCodeAt(0)]=63;function Mh(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}function Wb(r){var e=Mh(r),t=e[0],n=e[1];return(t+n)*3/4-n}function Vb(r,e,t){return(e+t)*3/4-t}function qb(r){var e,t=Mh(r),n=t[0],i=t[1],a=new Gb(Vb(r,n,i)),s=0,o=i>0?n-4:n,l;for(l=0;l<o;l+=4)e=Dt[r.charCodeAt(l)]<<18|Dt[r.charCodeAt(l+1)]<<12|Dt[r.charCodeAt(l+2)]<<6|Dt[r.charCodeAt(l+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return i===2&&(e=Dt[r.charCodeAt(l)]<<2|Dt[r.charCodeAt(l+1)]>>4,a[s++]=e&255),i===1&&(e=Dt[r.charCodeAt(l)]<<10|Dt[r.charCodeAt(l+1)]<<4|Dt[r.charCodeAt(l+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function Xb(r){return Xt[r>>18&63]+Xt[r>>12&63]+Xt[r>>6&63]+Xt[r&63]}function Yb(r,e,t){for(var n,i=[],a=e;a<t;a+=3)n=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),i.push(Xb(n));return i.join("")}function $b(r){for(var e,t=r.length,n=t%3,i=[],a=16383,s=0,o=t-n;s<o;s+=a)i.push(Yb(r,s,s+a>o?o:s+a));return n===1?(e=r[t-1],i.push(Xt[e>>2]+Xt[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(Xt[e>>10]+Xt[e>>4&63]+Xt[e<<2&63]+"=")),i.join("")}var Ss={};Ss.read=function(r,e,t,n,i){var a,s,o=i*8-n-1,l=(1<<o)-1,c=l>>1,u=-7,h=t?i-1:0,f=t?-1:1,g=r[e+h];for(h+=f,a=g&(1<<-u)-1,g>>=-u,u+=o;u>0;a=a*256+r[e+h],h+=f,u-=8);for(s=a&(1<<-u)-1,a>>=-u,u+=n;u>0;s=s*256+r[e+h],h+=f,u-=8);if(a===0)a=1-c;else{if(a===l)return s?NaN:(g?-1:1)*(1/0);s=s+Math.pow(2,n),a=a-c}return(g?-1:1)*s*Math.pow(2,a-n)},Ss.write=function(r,e,t,n,i,a){var s,o,l,c=a*8-i-1,u=(1<<c)-1,h=u>>1,f=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:a-1,v=n?1:-1,p=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+h>=1?e+=f/l:e+=f*Math.pow(2,1-h),e*l>=2&&(s++,l/=2),s+h>=u?(o=0,s=u):s+h>=1?(o=(e*l-1)*Math.pow(2,i),s=s+h):(o=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;r[t+g]=o&255,g+=v,o/=256,i-=8);for(s=s<<i|o,c+=i;c>0;r[t+g]=s&255,g+=v,s/=256,c-=8);r[t+g-v]|=p*128},function(r){var e=wa,t=Ss,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;r.Buffer=o,r.SlowBuffer=E,r.INSPECT_MAX_BYTES=50;var i=2147483647;r.kMaxLength=i,o.TYPED_ARRAY_SUPPORT=a(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{var d=new Uint8Array(1),_={foo:function(){return 42}};return Object.setPrototypeOf(_,Uint8Array.prototype),Object.setPrototypeOf(d,_),d.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function s(d){if(d>i)throw new RangeError('The value "'+d+'" is invalid for option "size"');var _=new Uint8Array(d);return Object.setPrototypeOf(_,o.prototype),_}function o(d,_,b){if(typeof d=="number"){if(typeof _=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return h(d)}return l(d,_,b)}o.poolSize=8192;function l(d,_,b){if(typeof d=="string")return f(d,_);if(ArrayBuffer.isView(d))return v(d);if(d==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof d);if(T(d,ArrayBuffer)||d&&T(d.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(T(d,SharedArrayBuffer)||d&&T(d.buffer,SharedArrayBuffer)))return p(d,_,b);if(typeof d=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var R=d.valueOf&&d.valueOf();if(R!=null&&R!==d)return o.from(R,_,b);var H=m(d);if(H)return H;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof d[Symbol.toPrimitive]=="function")return o.from(d[Symbol.toPrimitive]("string"),_,b);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof d)}o.from=function(d,_,b){return l(d,_,b)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function c(d){if(typeof d!="number")throw new TypeError('"size" argument must be of type number');if(d<0)throw new RangeError('The value "'+d+'" is invalid for option "size"')}function u(d,_,b){return c(d),d<=0?s(d):_!==void 0?typeof b=="string"?s(d).fill(_,b):s(d).fill(_):s(d)}o.alloc=function(d,_,b){return u(d,_,b)};function h(d){return c(d),s(d<0?0:y(d)|0)}o.allocUnsafe=function(d){return h(d)},o.allocUnsafeSlow=function(d){return h(d)};function f(d,_){if((typeof _!="string"||_==="")&&(_="utf8"),!o.isEncoding(_))throw new TypeError("Unknown encoding: "+_);var b=S(d,_)|0,R=s(b),H=R.write(d,_);return H!==b&&(R=R.slice(0,H)),R}function g(d){for(var _=d.length<0?0:y(d.length)|0,b=s(_),R=0;R<_;R+=1)b[R]=d[R]&255;return b}function v(d){if(T(d,Uint8Array)){var _=new Uint8Array(d);return p(_.buffer,_.byteOffset,_.byteLength)}return g(d)}function p(d,_,b){if(_<0||d.byteLength<_)throw new RangeError('"offset" is outside of buffer bounds');if(d.byteLength<_+(b||0))throw new RangeError('"length" is outside of buffer bounds');var R;return _===void 0&&b===void 0?R=new Uint8Array(d):b===void 0?R=new Uint8Array(d,_):R=new Uint8Array(d,_,b),Object.setPrototypeOf(R,o.prototype),R}function m(d){if(o.isBuffer(d)){var _=y(d.length)|0,b=s(_);return b.length===0||d.copy(b,0,0,_),b}if(d.length!==void 0)return typeof d.length!="number"||W(d.length)?s(0):g(d);if(d.type==="Buffer"&&Array.isArray(d.data))return g(d.data)}function y(d){if(d>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return d|0}function E(d){return+d!=d&&(d=0),o.alloc(+d)}o.isBuffer=function(d){return d!=null&&d._isBuffer===!0&&d!==o.prototype},o.compare=function(d,_){if(T(d,Uint8Array)&&(d=o.from(d,d.offset,d.byteLength)),T(_,Uint8Array)&&(_=o.from(_,_.offset,_.byteLength)),!o.isBuffer(d)||!o.isBuffer(_))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(d===_)return 0;for(var b=d.length,R=_.length,H=0,J=Math.min(b,R);H<J;++H)if(d[H]!==_[H]){b=d[H],R=_[H];break}return b<R?-1:R<b?1:0},o.isEncoding=function(d){switch(String(d).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(d,_){if(!Array.isArray(d))throw new TypeError('"list" argument must be an Array of Buffers');if(d.length===0)return o.alloc(0);var b;if(_===void 0)for(_=0,b=0;b<d.length;++b)_+=d[b].length;var R=o.allocUnsafe(_),H=0;for(b=0;b<d.length;++b){var J=d[b];if(T(J,Uint8Array))H+J.length>R.length?o.from(J).copy(R,H):Uint8Array.prototype.set.call(R,J,H);else if(o.isBuffer(J))J.copy(R,H);else throw new TypeError('"list" argument must be an Array of Buffers');H+=J.length}return R};function S(d,_){if(o.isBuffer(d))return d.length;if(ArrayBuffer.isView(d)||T(d,ArrayBuffer))return d.byteLength;if(typeof d!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof d);var b=d.length,R=arguments.length>2&&arguments[2]===!0;if(!R&&b===0)return 0;for(var H=!1;;)switch(_){case"ascii":case"latin1":case"binary":return b;case"utf8":case"utf-8":return ne(d).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b*2;case"hex":return b>>>1;case"base64":return Me(d).length;default:if(H)return R?-1:ne(d).length;_=(""+_).toLowerCase(),H=!0}}o.byteLength=S;function x(d,_,b){var R=!1;if((_===void 0||_<0)&&(_=0),_>this.length||((b===void 0||b>this.length)&&(b=this.length),b<=0)||(b>>>=0,_>>>=0,b<=_))return"";for(d||(d="utf8");;)switch(d){case"hex":return ee(this,_,b);case"utf8":case"utf-8":return O(this,_,b);case"ascii":return oe(this,_,b);case"latin1":case"binary":return ae(this,_,b);case"base64":return $(this,_,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,_,b);default:if(R)throw new TypeError("Unknown encoding: "+d);d=(d+"").toLowerCase(),R=!0}}o.prototype._isBuffer=!0;function w(d,_,b){var R=d[_];d[_]=d[b],d[b]=R}o.prototype.swap16=function(){var d=this.length;if(d%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var _=0;_<d;_+=2)w(this,_,_+1);return this},o.prototype.swap32=function(){var d=this.length;if(d%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var _=0;_<d;_+=4)w(this,_,_+3),w(this,_+1,_+2);return this},o.prototype.swap64=function(){var d=this.length;if(d%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var _=0;_<d;_+=8)w(this,_,_+7),w(this,_+1,_+6),w(this,_+2,_+5),w(this,_+3,_+4);return this},o.prototype.toString=function(){var d=this.length;return d===0?"":arguments.length===0?O(this,0,d):x.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(d){if(!o.isBuffer(d))throw new TypeError("Argument must be a Buffer");return this===d?!0:o.compare(this,d)===0},o.prototype.inspect=function(){var d="",_=r.INSPECT_MAX_BYTES;return d=this.toString("hex",0,_).replace(/(.{2})/g,"$1 ").trim(),this.length>_&&(d+=" ... "),"<Buffer "+d+">"},n&&(o.prototype[n]=o.prototype.inspect),o.prototype.compare=function(d,_,b,R,H){if(T(d,Uint8Array)&&(d=o.from(d,d.offset,d.byteLength)),!o.isBuffer(d))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof d);if(_===void 0&&(_=0),b===void 0&&(b=d?d.length:0),R===void 0&&(R=0),H===void 0&&(H=this.length),_<0||b>d.length||R<0||H>this.length)throw new RangeError("out of range index");if(R>=H&&_>=b)return 0;if(R>=H)return-1;if(_>=b)return 1;if(_>>>=0,b>>>=0,R>>>=0,H>>>=0,this===d)return 0;for(var J=H-R,L=b-_,P=Math.min(J,L),te=this.slice(R,H),de=d.slice(_,b),ge=0;ge<P;++ge)if(te[ge]!==de[ge]){J=te[ge],L=de[ge];break}return J<L?-1:L<J?1:0};function C(d,_,b,R,H){if(d.length===0)return-1;if(typeof b=="string"?(R=b,b=0):b>2147483647?b=2147483647:b<-2147483648&&(b=-2147483648),b=+b,W(b)&&(b=H?0:d.length-1),b<0&&(b=d.length+b),b>=d.length){if(H)return-1;b=d.length-1}else if(b<0)if(H)b=0;else return-1;if(typeof _=="string"&&(_=o.from(_,R)),o.isBuffer(_))return _.length===0?-1:F(d,_,b,R,H);if(typeof _=="number")return _=_&255,typeof Uint8Array.prototype.indexOf=="function"?H?Uint8Array.prototype.indexOf.call(d,_,b):Uint8Array.prototype.lastIndexOf.call(d,_,b):F(d,[_],b,R,H);throw new TypeError("val must be string, number or Buffer")}function F(d,_,b,R,H){var J=1,L=d.length,P=_.length;if(R!==void 0&&(R=String(R).toLowerCase(),R==="ucs2"||R==="ucs-2"||R==="utf16le"||R==="utf-16le")){if(d.length<2||_.length<2)return-1;J=2,L/=2,P/=2,b/=2}function te(X,ie){return J===1?X[ie]:X.readUInt16BE(ie*J)}var de;if(H){var ge=-1;for(de=b;de<L;de++)if(te(d,de)===te(_,ge===-1?0:de-ge)){if(ge===-1&&(ge=de),de-ge+1===P)return ge*J}else ge!==-1&&(de-=de-ge),ge=-1}else for(b+P>L&&(b=L-P),de=b;de>=0;de--){for(var ve=!0,Ce=0;Ce<P;Ce++)if(te(d,de+Ce)!==te(_,Ce)){ve=!1;break}if(ve)return de}return-1}o.prototype.includes=function(d,_,b){return this.indexOf(d,_,b)!==-1},o.prototype.indexOf=function(d,_,b){return C(this,d,_,b,!0)},o.prototype.lastIndexOf=function(d,_,b){return C(this,d,_,b,!1)};function A(d,_,b,R){b=Number(b)||0;var H=d.length-b;R?(R=Number(R),R>H&&(R=H)):R=H;var J=_.length;R>J/2&&(R=J/2);for(var L=0;L<R;++L){var P=parseInt(_.substr(L*2,2),16);if(W(P))return L;d[b+L]=P}return L}function D(d,_,b,R){return _e(ne(_,d.length-b),d,b,R)}function G(d,_,b,R){return _e(ue(_),d,b,R)}function N(d,_,b,R){return _e(Me(_),d,b,R)}function Q(d,_,b,R){return _e(he(_,d.length-b),d,b,R)}o.prototype.write=function(d,_,b,R){if(_===void 0)R="utf8",b=this.length,_=0;else if(b===void 0&&typeof _=="string")R=_,b=this.length,_=0;else if(isFinite(_))_=_>>>0,isFinite(b)?(b=b>>>0,R===void 0&&(R="utf8")):(R=b,b=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var H=this.length-_;if((b===void 0||b>H)&&(b=H),d.length>0&&(b<0||_<0)||_>this.length)throw new RangeError("Attempt to write outside buffer bounds");R||(R="utf8");for(var J=!1;;)switch(R){case"hex":return A(this,d,_,b);case"utf8":case"utf-8":return D(this,d,_,b);case"ascii":case"latin1":case"binary":return G(this,d,_,b);case"base64":return N(this,d,_,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Q(this,d,_,b);default:if(J)throw new TypeError("Unknown encoding: "+R);R=(""+R).toLowerCase(),J=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $(d,_,b){return _===0&&b===d.length?e.fromByteArray(d):e.fromByteArray(d.slice(_,b))}function O(d,_,b){b=Math.min(d.length,b);for(var R=[],H=_;H<b;){var J=d[H],L=null,P=J>239?4:J>223?3:J>191?2:1;if(H+P<=b){var te,de,ge,ve;switch(P){case 1:J<128&&(L=J);break;case 2:te=d[H+1],(te&192)===128&&(ve=(J&31)<<6|te&63,ve>127&&(L=ve));break;case 3:te=d[H+1],de=d[H+2],(te&192)===128&&(de&192)===128&&(ve=(J&15)<<12|(te&63)<<6|de&63,ve>2047&&(ve<55296||ve>57343)&&(L=ve));break;case 4:te=d[H+1],de=d[H+2],ge=d[H+3],(te&192)===128&&(de&192)===128&&(ge&192)===128&&(ve=(J&15)<<18|(te&63)<<12|(de&63)<<6|ge&63,ve>65535&&ve<1114112&&(L=ve))}}L===null?(L=65533,P=1):L>65535&&(L-=65536,R.push(L>>>10&1023|55296),L=56320|L&1023),R.push(L),H+=P}return K(R)}var I=4096;function K(d){var _=d.length;if(_<=I)return String.fromCharCode.apply(String,d);for(var b="",R=0;R<_;)b+=String.fromCharCode.apply(String,d.slice(R,R+=I));return b}function oe(d,_,b){var R="";b=Math.min(d.length,b);for(var H=_;H<b;++H)R+=String.fromCharCode(d[H]&127);return R}function ae(d,_,b){var R="";b=Math.min(d.length,b);for(var H=_;H<b;++H)R+=String.fromCharCode(d[H]);return R}function ee(d,_,b){var R=d.length;(!_||_<0)&&(_=0),(!b||b<0||b>R)&&(b=R);for(var H="",J=_;J<b;++J)H+=M[d[J]];return H}function U(d,_,b){for(var R=d.slice(_,b),H="",J=0;J<R.length-1;J+=2)H+=String.fromCharCode(R[J]+R[J+1]*256);return H}o.prototype.slice=function(d,_){var b=this.length;d=~~d,_=_===void 0?b:~~_,d<0?(d+=b,d<0&&(d=0)):d>b&&(d=b),_<0?(_+=b,_<0&&(_=0)):_>b&&(_=b),_<d&&(_=d);var R=this.subarray(d,_);return Object.setPrototypeOf(R,o.prototype),R};function q(d,_,b){if(d%1!==0||d<0)throw new RangeError("offset is not uint");if(d+_>b)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(d,_,b){d=d>>>0,_=_>>>0,b||q(d,_,this.length);for(var R=this[d],H=1,J=0;++J<_&&(H*=256);)R+=this[d+J]*H;return R},o.prototype.readUintBE=o.prototype.readUIntBE=function(d,_,b){d=d>>>0,_=_>>>0,b||q(d,_,this.length);for(var R=this[d+--_],H=1;_>0&&(H*=256);)R+=this[d+--_]*H;return R},o.prototype.readUint8=o.prototype.readUInt8=function(d,_){return d=d>>>0,_||q(d,1,this.length),this[d]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(d,_){return d=d>>>0,_||q(d,2,this.length),this[d]|this[d+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(d,_){return d=d>>>0,_||q(d,2,this.length),this[d]<<8|this[d+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(d,_){return d=d>>>0,_||q(d,4,this.length),(this[d]|this[d+1]<<8|this[d+2]<<16)+this[d+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(d,_){return d=d>>>0,_||q(d,4,this.length),this[d]*16777216+(this[d+1]<<16|this[d+2]<<8|this[d+3])},o.prototype.readIntLE=function(d,_,b){d=d>>>0,_=_>>>0,b||q(d,_,this.length);for(var R=this[d],H=1,J=0;++J<_&&(H*=256);)R+=this[d+J]*H;return H*=128,R>=H&&(R-=Math.pow(2,8*_)),R},o.prototype.readIntBE=function(d,_,b){d=d>>>0,_=_>>>0,b||q(d,_,this.length);for(var R=_,H=1,J=this[d+--R];R>0&&(H*=256);)J+=this[d+--R]*H;return H*=128,J>=H&&(J-=Math.pow(2,8*_)),J},o.prototype.readInt8=function(d,_){return d=d>>>0,_||q(d,1,this.length),this[d]&128?(255-this[d]+1)*-1:this[d]},o.prototype.readInt16LE=function(d,_){d=d>>>0,_||q(d,2,this.length);var b=this[d]|this[d+1]<<8;return b&32768?b|4294901760:b},o.prototype.readInt16BE=function(d,_){d=d>>>0,_||q(d,2,this.length);var b=this[d+1]|this[d]<<8;return b&32768?b|4294901760:b},o.prototype.readInt32LE=function(d,_){return d=d>>>0,_||q(d,4,this.length),this[d]|this[d+1]<<8|this[d+2]<<16|this[d+3]<<24},o.prototype.readInt32BE=function(d,_){return d=d>>>0,_||q(d,4,this.length),this[d]<<24|this[d+1]<<16|this[d+2]<<8|this[d+3]},o.prototype.readFloatLE=function(d,_){return d=d>>>0,_||q(d,4,this.length),t.read(this,d,!0,23,4)},o.prototype.readFloatBE=function(d,_){return d=d>>>0,_||q(d,4,this.length),t.read(this,d,!1,23,4)},o.prototype.readDoubleLE=function(d,_){return d=d>>>0,_||q(d,8,this.length),t.read(this,d,!0,52,8)},o.prototype.readDoubleBE=function(d,_){return d=d>>>0,_||q(d,8,this.length),t.read(this,d,!1,52,8)};function z(d,_,b,R,H,J){if(!o.isBuffer(d))throw new TypeError('"buffer" argument must be a Buffer instance');if(_>H||_<J)throw new RangeError('"value" argument is out of bounds');if(b+R>d.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(d,_,b,R){if(d=+d,_=_>>>0,b=b>>>0,!R){var H=Math.pow(2,8*b)-1;z(this,d,_,b,H,0)}var J=1,L=0;for(this[_]=d&255;++L<b&&(J*=256);)this[_+L]=d/J&255;return _+b},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(d,_,b,R){if(d=+d,_=_>>>0,b=b>>>0,!R){var H=Math.pow(2,8*b)-1;z(this,d,_,b,H,0)}var J=b-1,L=1;for(this[_+J]=d&255;--J>=0&&(L*=256);)this[_+J]=d/L&255;return _+b},o.prototype.writeUint8=o.prototype.writeUInt8=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,1,255,0),this[_]=d&255,_+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,2,65535,0),this[_]=d&255,this[_+1]=d>>>8,_+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,2,65535,0),this[_]=d>>>8,this[_+1]=d&255,_+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,4,4294967295,0),this[_+3]=d>>>24,this[_+2]=d>>>16,this[_+1]=d>>>8,this[_]=d&255,_+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,4,4294967295,0),this[_]=d>>>24,this[_+1]=d>>>16,this[_+2]=d>>>8,this[_+3]=d&255,_+4},o.prototype.writeIntLE=function(d,_,b,R){if(d=+d,_=_>>>0,!R){var H=Math.pow(2,8*b-1);z(this,d,_,b,H-1,-H)}var J=0,L=1,P=0;for(this[_]=d&255;++J<b&&(L*=256);)d<0&&P===0&&this[_+J-1]!==0&&(P=1),this[_+J]=(d/L>>0)-P&255;return _+b},o.prototype.writeIntBE=function(d,_,b,R){if(d=+d,_=_>>>0,!R){var H=Math.pow(2,8*b-1);z(this,d,_,b,H-1,-H)}var J=b-1,L=1,P=0;for(this[_+J]=d&255;--J>=0&&(L*=256);)d<0&&P===0&&this[_+J+1]!==0&&(P=1),this[_+J]=(d/L>>0)-P&255;return _+b},o.prototype.writeInt8=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,1,127,-128),d<0&&(d=255+d+1),this[_]=d&255,_+1},o.prototype.writeInt16LE=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,2,32767,-32768),this[_]=d&255,this[_+1]=d>>>8,_+2},o.prototype.writeInt16BE=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,2,32767,-32768),this[_]=d>>>8,this[_+1]=d&255,_+2},o.prototype.writeInt32LE=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,4,2147483647,-2147483648),this[_]=d&255,this[_+1]=d>>>8,this[_+2]=d>>>16,this[_+3]=d>>>24,_+4},o.prototype.writeInt32BE=function(d,_,b){return d=+d,_=_>>>0,b||z(this,d,_,4,2147483647,-2147483648),d<0&&(d=4294967295+d+1),this[_]=d>>>24,this[_+1]=d>>>16,this[_+2]=d>>>8,this[_+3]=d&255,_+4};function k(d,_,b,R,H,J){if(b+R>d.length)throw new RangeError("Index out of range");if(b<0)throw new RangeError("Index out of range")}function Z(d,_,b,R,H){return _=+_,b=b>>>0,H||k(d,_,b,4),t.write(d,_,b,R,23,4),b+4}o.prototype.writeFloatLE=function(d,_,b){return Z(this,d,_,!0,b)},o.prototype.writeFloatBE=function(d,_,b){return Z(this,d,_,!1,b)};function se(d,_,b,R,H){return _=+_,b=b>>>0,H||k(d,_,b,8),t.write(d,_,b,R,52,8),b+8}o.prototype.writeDoubleLE=function(d,_,b){return se(this,d,_,!0,b)},o.prototype.writeDoubleBE=function(d,_,b){return se(this,d,_,!1,b)},o.prototype.copy=function(d,_,b,R){if(!o.isBuffer(d))throw new TypeError("argument should be a Buffer");if(b||(b=0),!R&&R!==0&&(R=this.length),_>=d.length&&(_=d.length),_||(_=0),R>0&&R<b&&(R=b),R===b||d.length===0||this.length===0)return 0;if(_<0)throw new RangeError("targetStart out of bounds");if(b<0||b>=this.length)throw new RangeError("Index out of range");if(R<0)throw new RangeError("sourceEnd out of bounds");R>this.length&&(R=this.length),d.length-_<R-b&&(R=d.length-_+b);var H=R-b;return this===d&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(_,b,R):Uint8Array.prototype.set.call(d,this.subarray(b,R),_),H},o.prototype.fill=function(d,_,b,R){if(typeof d=="string"){if(typeof _=="string"?(R=_,_=0,b=this.length):typeof b=="string"&&(R=b,b=this.length),R!==void 0&&typeof R!="string")throw new TypeError("encoding must be a string");if(typeof R=="string"&&!o.isEncoding(R))throw new TypeError("Unknown encoding: "+R);if(d.length===1){var H=d.charCodeAt(0);(R==="utf8"&&H<128||R==="latin1")&&(d=H)}}else typeof d=="number"?d=d&255:typeof d=="boolean"&&(d=Number(d));if(_<0||this.length<_||this.length<b)throw new RangeError("Out of range index");if(b<=_)return this;_=_>>>0,b=b===void 0?this.length:b>>>0,d||(d=0);var J;if(typeof d=="number")for(J=_;J<b;++J)this[J]=d;else{var L=o.isBuffer(d)?d:o.from(d,R),P=L.length;if(P===0)throw new TypeError('The value "'+d+'" is invalid for argument "value"');for(J=0;J<b-_;++J)this[J+_]=L[J%P]}return this};var B=/[^+/0-9A-Za-z-_]/g;function V(d){if(d=d.split("=")[0],d=d.trim().replace(B,""),d.length<2)return"";for(;d.length%4!==0;)d=d+"=";return d}function ne(d,_){_=_||1/0;for(var b,R=d.length,H=null,J=[],L=0;L<R;++L){if(b=d.charCodeAt(L),b>55295&&b<57344){if(!H){if(b>56319){(_-=3)>-1&&J.push(239,191,189);continue}else if(L+1===R){(_-=3)>-1&&J.push(239,191,189);continue}H=b;continue}if(b<56320){(_-=3)>-1&&J.push(239,191,189),H=b;continue}b=(H-55296<<10|b-56320)+65536}else H&&(_-=3)>-1&&J.push(239,191,189);if(H=null,b<128){if((_-=1)<0)break;J.push(b)}else if(b<2048){if((_-=2)<0)break;J.push(b>>6|192,b&63|128)}else if(b<65536){if((_-=3)<0)break;J.push(b>>12|224,b>>6&63|128,b&63|128)}else if(b<1114112){if((_-=4)<0)break;J.push(b>>18|240,b>>12&63|128,b>>6&63|128,b&63|128)}else throw new Error("Invalid code point")}return J}function ue(d){for(var _=[],b=0;b<d.length;++b)_.push(d.charCodeAt(b)&255);return _}function he(d,_){for(var b,R,H,J=[],L=0;L<d.length&&!((_-=2)<0);++L)b=d.charCodeAt(L),R=b>>8,H=b%256,J.push(H),J.push(R);return J}function Me(d){return e.toByteArray(V(d))}function _e(d,_,b,R){for(var H=0;H<R&&!(H+b>=_.length||H>=d.length);++H)_[H+b]=d[H];return H}function T(d,_){return d instanceof _||d!=null&&d.constructor!=null&&d.constructor.name!=null&&d.constructor.name===_.name}function W(d){return d!==d}var M=function(){for(var d="0123456789abcdef",_=new Array(256),b=0;b<16;++b)for(var R=b*16,H=0;H<16;++H)_[R+H]=d[b]+d[H];return _}()}(jb);var ui={},Kb={get exports(){return ui},set exports(r){ui=r}},Qe=Kb.exports={},Yt,$t;function Es(){throw new Error("setTimeout has not been defined")}function As(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Yt=setTimeout:Yt=Es}catch{Yt=Es}try{typeof clearTimeout=="function"?$t=clearTimeout:$t=As}catch{$t=As}})();function Sh(r){if(Yt===setTimeout)return setTimeout(r,0);if((Yt===Es||!Yt)&&setTimeout)return Yt=setTimeout,setTimeout(r,0);try{return Yt(r,0)}catch{try{return Yt.call(null,r,0)}catch{return Yt.call(this,r,0)}}}function Jb(r){if($t===clearTimeout)return clearTimeout(r);if(($t===As||!$t)&&clearTimeout)return $t=clearTimeout,clearTimeout(r);try{return $t(r)}catch{try{return $t.call(null,r)}catch{return $t.call(this,r)}}}var fr=[],In=!1,qr,Ma=-1;function Zb(){!In||!qr||(In=!1,qr.length?fr=qr.concat(fr):Ma=-1,fr.length&&Eh())}function Eh(){if(!In){var r=Sh(Zb);In=!0;for(var e=fr.length;e;){for(qr=fr,fr=[];++Ma<e;)qr&&qr[Ma].run();Ma=-1,e=fr.length}qr=null,In=!1,Jb(r)}}Qe.nextTick=function(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];fr.push(new Ah(r,e)),fr.length===1&&!In&&Sh(Eh)};function Ah(r,e){this.fun=r,this.array=e}Ah.prototype.run=function(){this.fun.apply(null,this.array)},Qe.title="browser",Qe.browser=!0,Qe.env={},Qe.argv=[],Qe.version="",Qe.versions={};function pr(){}Qe.on=pr,Qe.addListener=pr,Qe.once=pr,Qe.off=pr,Qe.removeListener=pr,Qe.removeAllListeners=pr,Qe.emit=pr,Qe.prependListener=pr,Qe.prependOnceListener=pr,Qe.listeners=function(r){return[]},Qe.binding=function(r){throw new Error("process.binding is not supported")},Qe.cwd=function(){return"/"},Qe.chdir=function(r){throw new Error("process.chdir is not supported")},Qe.umask=function(){return 0},function(r){function e(){var n=this||self;return delete r.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object);var hi={Linear:{None:function(r){return r}},Quadratic:{In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}},Cubic:{In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}},Quartic:{In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}},Quintic:{In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}},Sinusoidal:{In:function(r){return 1-Math.cos(r*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.cos(Math.PI*r))}},Exponential:{In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}},Circular:{In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}},Elastic:{In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}},Back:{In:function(r){var e=1.70158;return r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}},Bounce:{In:function(r){return 1-hi.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?hi.Bounce.In(r*2)*.5:hi.Bounce.Out(r*2-1)*.5+.5}}},di;typeof self>"u"&&typeof ui<"u"&&ui.hrtime?di=function(){var r=ui.hrtime();return r[0]*1e3+r[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?di=self.performance.now.bind(self.performance):Date.now!==void 0?di=Date.now:di=function(){return new Date().getTime()};var Xr=di,Th=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},r.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},r.prototype.update=function(e,t){e===void 0&&(e=Xr()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var a=this._tweens[n[i]],s=!t;a&&a.update(e,s)===!1&&!t&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),kn={Linear:function(r,e){var t=r.length-1,n=t*e,i=Math.floor(n),a=kn.Utils.Linear;return e<0?a(r[0],r[1],n):e>1?a(r[t],r[t-1],t-n):a(r[i],r[i+1>t?t:i+1],n-i)},Bezier:function(r,e){for(var t=0,n=r.length-1,i=Math.pow,a=kn.Utils.Bernstein,s=0;s<=n;s++)t+=i(1-e,n-s)*i(e,s)*r[s]*a(n,s);return t},CatmullRom:function(r,e){var t=r.length-1,n=t*e,i=Math.floor(n),a=kn.Utils.CatmullRom;return r[0]===r[t]?(e<0&&(i=Math.floor(n=t*(1+e))),a(r[(i-1+t)%t],r[i],r[(i+1)%t],r[(i+2)%t],n-i)):e<0?r[0]-(a(r[0],r[0],r[1],r[1],-n)-r[0]):e>1?r[t]-(a(r[t],r[t],r[t-1],r[t-1],n-t)-r[t]):a(r[i?i-1:0],r[i],r[t<i+1?t:i+1],r[t<i+2?t:i+2],n-i)},Utils:{Linear:function(r,e,t){return(e-r)*t+r},Bernstein:function(r,e){var t=kn.Utils.Factorial;return t(r)/t(e)/t(r-e)},Factorial:function(){var r=[1];return function(e){var t=1;if(r[e])return r[e];for(var n=e;n>1;n--)t*=n;return r[e]=t,t}}(),CatmullRom:function(r,e,t,n,i){var a=(t-r)*.5,s=(n-e)*.5,o=i*i,l=i*o;return(2*e-2*t+a+s)*l+(-3*e+3*t-2*a-s)*o+a*i+e}}},Ts=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),Ch=new Th,Qb=function(){function r(e,t){t===void 0&&(t=Ch),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=hi.Linear.None,this._interpolationFunction=kn.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Ts.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},r.prototype.duration=function(e){return this._duration=e,this},r.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Xr()+parseFloat(e):e:Xr(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},r.prototype._setupProperties=function(e,t,n,i){for(var a in n){var s=e[a],o=Array.isArray(s),l=o?"array":typeof s,c=!o&&Array.isArray(n[a]);if(!(l==="undefined"||l==="function")){if(c){var u=n[a];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,s)),n[a]=[s].concat(u)}if((l==="object"||o)&&s&&!c){t[a]=o?[]:{};for(var h in s)t[a][h]=s[h];i[a]=o?[]:{},this._setupProperties(s,t[a],n[a],i[a])}else typeof t[a]>"u"&&(t[a]=s),o||(t[a]*=1),c?i[a]=n[a].slice().reverse():i[a]=t[a]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(e){return e===void 0&&(e=Xr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},r.prototype.resume=function(e){return e===void 0&&(e=Xr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return this._group=e,this},r.prototype.delay=function(e){return this._delayTime=e,this},r.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return this._yoyo=e,this},r.prototype.easing=function(e){return this._easingFunction=e,this},r.prototype.interpolation=function(e){return this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){if(e===void 0&&(e=Xr()),t===void 0&&(t=!0),this._isPaused)return!0;var n,i,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(e-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var s=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,n,i){for(var a in n)if(t[a]!==void 0){var s=t[a]||0,o=n[a],l=Array.isArray(e[a]),c=Array.isArray(o),u=!l&&c;u?e[a]=this._interpolationFunction(o,i):typeof o=="object"&&o?this._updateProperties(e[a],s,o,i):(o=this._handleRelativeValue(s,o),typeof o=="number"&&(e[a]=s+(o-s)*i))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r}(),ex="18.6.4",tx=Ts.nextId,Kt=Ch,rx=Kt.getAll.bind(Kt),nx=Kt.removeAll.bind(Kt),ix=Kt.add.bind(Kt),ax=Kt.remove.bind(Kt),ox=Kt.update.bind(Kt),fi={Easing:hi,Group:Th,Interpolation:kn,now:Xr,Sequence:Ts,nextId:tx,Tween:Qb,VERSION:ex,getAll:rx,removeAll:nx,add:ix,remove:ax,update:ox};function sx(r,e){e===void 0&&(e={});var t=e.insertAt;if(!(!r||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r))}}var lx=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
}

.scene-container canvas:focus {
  outline: none;
}`;sx(lx);function cx(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ux(r,e){return dx(r)||px(r,e)||Lh(r,e)||gx()}function pi(r){return hx(r)||fx(r)||Lh(r)||mx()}function hx(r){if(Array.isArray(r))return Cs(r)}function dx(r){if(Array.isArray(r))return r}function fx(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function px(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,a=!1,s,o;try{for(t=t.call(r);!(i=(s=t.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(a)throw o}}return n}}function Lh(r,e){if(r){if(typeof r=="string")return Cs(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Cs(r,e)}}function Cs(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function mx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $e=window.THREE?window.THREE:{WebGLRenderer:Rc,Scene:Av,PerspectiveCamera:Ot,Raycaster:Yc,TextureLoader:Yv,Vector2:we,Vector3:Y,Box3:Br,Color:je,Mesh:Et,SphereGeometry:ri,MeshBasicMaterial:Fi,BackSide:xt,EventDispatcher:zt,MOUSE:Vt,Quaternion:Ut,Spherical:Vo,Clock:qc},Ph=is({props:{width:{default:window.innerWidth,onChange:function(r,e,t){isNaN(r)&&(e.width=t)}},height:{default:window.innerHeight,onChange:function(r,e,t){isNaN(r)&&(e.height=t)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(r,e){e.hoverObj=null,e.toolTipElem&&(e.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(r){if(r.initialised){if(r.controls.update&&r.controls.update(r.clock.getDelta()),r.postProcessingComposer?r.postProcessingComposer.render():r.renderer.render(r.scene,r.camera),r.extraRenderers.forEach(function(i){return i.render(r.scene,r.camera)}),r.enablePointerInteraction){var e=null;if(r.hoverDuringDrag||!r.isPointerDragging){var t=this.intersectingObjects(r.pointerPos.x,r.pointerPos.y).filter(function(i){return r.hoverFilter(i.object)}).sort(function(i,a){return r.hoverOrderComparator(i.object,a.object)}),n=t.length?t[0]:null;e=n?n.object:null,r.intersectionPoint=n?n.point:null}e!==r.hoverObj&&(r.onHover(e,r.hoverObj),r.toolTipElem.innerHTML=e&&Ge(r.tooltipContent)(e)||"",r.hoverObj=e)}fi.update()}return this},getPointerPos:function(r){var e=r.pointerPos,t=e.x,n=e.y;return{x:t,y:n}},cameraPosition:function(r,e,t,n){var i=r.camera;if(e&&r.initialised){var a=e,s=t||{x:0,y:0,z:0};if(!n)c(a),u(s);else{var o=Object.assign({},i.position),l=h();new fi.Tween(o).to(a,n).easing(fi.Easing.Quadratic.Out).onUpdate(c).start(),new fi.Tween(l).to(s,n/3).easing(fi.Easing.Quadratic.Out).onUpdate(u).start()}return this}return Object.assign({},i.position,{lookAt:h()});function c(f){var g=f.x,v=f.y,p=f.z;g!==void 0&&(i.position.x=g),v!==void 0&&(i.position.y=v),p!==void 0&&(i.position.z=p)}function u(f){var g=new $e.Vector3(f.x,f.y,f.z);r.controls.target?r.controls.target=g:i.lookAt(g)}function h(){return Object.assign(new $e.Vector3(0,0,-1e3).applyQuaternion(i.quaternion).add(i.position))}},zoomToFit:function(r){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,n=arguments.length,i=new Array(n>3?n-3:0),a=3;a<n;a++)i[a-3]=arguments[a];return this.fitToBbox(this.getBbox.apply(this,i),e,t)},fitToBbox:function(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,i=r.camera;if(e){var a=new $e.Vector3(0,0,0),s=Math.max.apply(Math,pi(Object.entries(e).map(function(f){var g=ux(f,2),v=g[0],p=g[1];return Math.max.apply(Math,pi(p.map(function(m){return Math.abs(a[v]-m)})))})))*2,o=(1-n*2/r.height)*i.fov,l=s/Math.atan(o*Math.PI/180),c=l/i.aspect,u=Math.max(l,c);if(u>0){var h=a.clone().sub(i.position).normalize().multiplyScalar(-u);this.cameraPosition(h,a,t)}}return this},getBbox:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},t=new $e.Box3(new $e.Vector3(0,0,0),new $e.Vector3(0,0,0)),n=r.objects.filter(e);return n.length?(n.forEach(function(i){return t.expandByObject(i)}),Object.assign.apply(Object,pi(["x","y","z"].map(function(i){return cx({},i,[t.min[i],t.max[i]])})))):null},getScreenCoords:function(r,e,t,n){var i=new $e.Vector3(e,t,n);return i.project(this.camera()),{x:(i.x+1)*r.width/2,y:-(i.y-1)*r.height/2}},getSceneCoords:function(r,e,t){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=new $e.Vector2(e/r.width*2-1,-(t/r.height)*2+1),a=new $e.Raycaster;return a.setFromCamera(i,r.camera),Object.assign({},a.ray.at(n,new $e.Vector3))},intersectingObjects:function(r,e,t){var n=new $e.Vector2(e/r.width*2-1,-(t/r.height)*2+1),i=new $e.Raycaster;return i.params.Line.threshold=r.lineHoverPrecision,i.setFromCamera(n,r.camera),i.intersectObjects(r.objects,!0)},renderer:function(r){return r.renderer},scene:function(r){return r.scene},camera:function(r){return r.camera},postProcessingComposer:function(r){return r.postProcessingComposer},controls:function(r){return r.controls},tbControls:function(r){return r.controls}},stateInit:function(){return{scene:new $e.Scene,camera:new $e.PerspectiveCamera,clock:new $e.Clock}},init:function(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.controlType,i=n===void 0?"trackball":n,a=t.rendererConfig,s=a===void 0?{}:a,o=t.extraRenderers,l=o===void 0?[]:o,c=t.waitForLoadComplete,u=c===void 0?!0:c;r.innerHTML="",r.appendChild(e.container=document.createElement("div")),e.container.className="scene-container",e.container.style.position="relative",e.container.appendChild(e.navInfo=document.createElement("div")),e.navInfo.className="scene-nav-info",e.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[i]||"",e.navInfo.style.display=e.showNavInfo?null:"none",e.toolTipElem=document.createElement("div"),e.toolTipElem.classList.add("scene-tooltip"),e.container.appendChild(e.toolTipElem),e.pointerPos=new $e.Vector2,e.pointerPos.x=-2,e.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(h){return e.container.addEventListener(h,function(f){if(h==="pointerdown"&&(e.isPointerPressed=!0),!e.isPointerDragging&&f.type==="pointermove"&&(f.pressure>0||e.isPointerPressed)&&(f.pointerType!=="touch"||f.movementX===void 0||[f.movementX,f.movementY].some(function(p){return Math.abs(p)>1}))&&(e.isPointerDragging=!0),e.enablePointerInteraction){var g=v(e.container);e.pointerPos.x=f.pageX-g.left,e.pointerPos.y=f.pageY-g.top,e.toolTipElem.style.top="".concat(e.pointerPos.y,"px"),e.toolTipElem.style.left="".concat(e.pointerPos.x,"px"),e.toolTipElem.style.transform="translate(-".concat(e.pointerPos.x/e.width*100,"%, ").concat(e.height-e.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(p){var m=p.getBoundingClientRect(),y=window.pageXOffset||document.documentElement.scrollLeft,E=window.pageYOffset||document.documentElement.scrollTop;return{top:m.top+E,left:m.left+y}}},{passive:!0})}),e.container.addEventListener("pointerup",function(h){e.isPointerPressed=!1,!(e.isPointerDragging&&(e.isPointerDragging=!1,!e.clickAfterDrag))&&requestAnimationFrame(function(){h.button===0&&e.onClick(e.hoverObj||null,h,e.intersectionPoint),h.button===2&&e.onRightClick&&e.onRightClick(e.hoverObj||null,h,e.intersectionPoint)})},{passive:!0,capture:!0}),e.container.addEventListener("contextmenu",function(h){e.onRightClick&&h.preventDefault()}),e.renderer=new $e.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},s)),e.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),e.container.appendChild(e.renderer.domElement),e.extraRenderers=l,e.extraRenderers.forEach(function(h){h.domElement.style.position="absolute",h.domElement.style.top="0px",h.domElement.style.pointerEvents="none",e.container.appendChild(h.domElement)}),e.postProcessingComposer=new _b(e.renderer),e.postProcessingComposer.addPass(new bb(e.scene,e.camera)),e.controls=new{trackball:db,orbit:fb,fly:mb}[i](e.camera,e.renderer.domElement),i==="fly"&&(e.controls.movementSpeed=300,e.controls.rollSpeed=Math.PI/6,e.controls.dragToLook=!0),(i==="trackball"||i==="orbit")&&(e.controls.minDistance=.1,e.controls.maxDistance=e.skyRadius,e.controls.addEventListener("start",function(){e.controlsEngaged=!0}),e.controls.addEventListener("change",function(){e.controlsEngaged&&(e.controlsDragging=!0)}),e.controls.addEventListener("end",function(){e.controlsEngaged=!1,e.controlsDragging=!1})),[e.renderer,e.postProcessingComposer].concat(pi(e.extraRenderers)).forEach(function(h){return h.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix(),e.camera.position.z=1e3,e.scene.add(e.skysphere=new $e.Mesh),e.skysphere.visible=!1,e.loadComplete=e.scene.visible=!u,window.scene=e.scene},update:function(r,e){if(r.width&&r.height&&(e.hasOwnProperty("width")||e.hasOwnProperty("height"))&&(r.container.style.width="".concat(r.width,"px"),r.container.style.height="".concat(r.height,"px"),[r.renderer,r.postProcessingComposer].concat(pi(r.extraRenderers)).forEach(function(i){return i.setSize(r.width,r.height)}),r.camera.aspect=r.width/r.height,r.camera.updateProjectionMatrix()),e.hasOwnProperty("skyRadius")&&r.skyRadius&&(r.controls.hasOwnProperty("maxDistance")&&e.skyRadius&&(r.controls.maxDistance=Math.min(r.controls.maxDistance,r.skyRadius)),r.camera.far=r.skyRadius*2.5,r.camera.updateProjectionMatrix(),r.skysphere.geometry=new $e.SphereGeometry(r.skyRadius)),e.hasOwnProperty("backgroundColor")){var t=ws(r.backgroundColor).alpha;t===void 0&&(t=1),r.renderer.setClearColor(new $e.Color(Ub(1,r.backgroundColor)),t)}e.hasOwnProperty("backgroundImageUrl")&&(r.backgroundImageUrl?new $e.TextureLoader().load(r.backgroundImageUrl,function(i){r.skysphere.material=new $e.MeshBasicMaterial({map:i,side:$e.BackSide}),r.skysphere.visible=!0,r.onBackgroundImageLoaded&&setTimeout(r.onBackgroundImageLoaded),!r.loadComplete&&n()}):(r.skysphere.visible=!1,r.skysphere.material.map=null,!r.loadComplete&&n())),e.hasOwnProperty("showNavInfo")&&(r.navInfo.style.display=r.showNavInfo?null:"none"),e.hasOwnProperty("objects")&&((e.objects||[]).forEach(function(i){return r.scene.remove(i)}),r.objects.forEach(function(i){return r.scene.add(i)}));function n(){r.loadComplete=r.scene.visible=!0}}});function vx(r,e){e===void 0&&(e={});var t=e.insertAt;if(!(!r||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r))}}var yx=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;vx(yx);function Oh(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function Sa(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Oh(Object(t),!0).forEach(function(n){mi(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Oh(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function mi(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Ea(r){return _x(r)||bx(r)||xx(r)||wx()}function _x(r){if(Array.isArray(r))return Ls(r)}function bx(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function xx(r,e){if(r){if(typeof r=="string")return Ls(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ls(r,e)}}function Ls(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function wx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dh(r,e){var t=new e;return{linkProp:function(n){return{default:t[n](),onChange:function(i,a){a[r][n](i)},triggerUpdate:!1}},linkMethod:function(n){return function(i){for(var a=i[r],s=arguments.length,o=new Array(s>1?s-1:0),l=1;l<s;l++)o[l-1]=arguments[l];var c=a[n].apply(a,o);return c===a?this:c}}}}var Rh=window.THREE?window.THREE:{AmbientLight:Zv,DirectionalLight:Jv,Vector3:Y},Mx=170,Ih=Dh("forceGraph",uh),Sx=Object.assign.apply(Object,Ea(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(r){return mi({},r,Ih.linkProp(r))}))),Ex=Object.assign.apply(Object,Ea(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(r){return mi({},r,Ih.linkMethod(r))}))),Aa=Dh("renderObjs",Ph),Ax=Object.assign.apply(Object,Ea(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(r){return mi({},r,Aa.linkProp(r))}))),Tx=Object.assign.apply(Object,Ea(["cameraPosition","postProcessingComposer"].map(function(r){return mi({},r,Aa.linkMethod(r))})).concat([{graph2ScreenCoords:Aa.linkMethod("getScreenCoords"),screen2GraphCoords:Aa.linkMethod("getSceneCoords")}])),Cx=is({props:Sa(Sa({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(r,e){return e.renderObjs.lineHoverPrecision(r)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(r,e){var t=e.renderObjs.controls();t&&(t.enabled=r)},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},Sx),Ax),methods:Sa(Sa({zoomToFit:function(r,e,t){for(var n,i=arguments.length,a=new Array(i>3?i-3:0),s=3;s<i;s++)a[s-3]=arguments[s];return r.renderObjs.fitToBbox((n=r.forceGraph).getGraphBbox.apply(n,a),e,t),this},pauseAnimation:function(r){return r.animationFrameRequestId!==null&&(cancelAnimationFrame(r.animationFrameRequestId),r.animationFrameRequestId=null),this},resumeAnimation:function(r){return r.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(r){r.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),r.forceGraph.tickFrame(),r.renderObjs.tick(),r.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(r){return r.renderObjs.scene()},camera:function(r){return r.renderObjs.camera()},renderer:function(r){return r.renderObjs.renderer()},controls:function(r){return r.renderObjs.controls()},tbControls:function(r){return r.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},Ex),Tx),stateInit:function(r){var e=r.controlType,t=r.rendererConfig,n=r.extraRenderers;return{forceGraph:new uh,renderObjs:Ph({controlType:e,rendererConfig:t,extraRenderers:n})}},init:function(r,e){r.innerHTML="",r.appendChild(e.container=document.createElement("div")),e.container.style.position="relative";var t=document.createElement("div");e.container.appendChild(t),e.renderObjs(t);var n=e.renderObjs.camera(),i=e.renderObjs.renderer(),a=e.renderObjs.controls();a.enabled=!!e.enableNavigationControls,e.lastSetCameraZ=n.position.z;var s;e.container.appendChild(s=document.createElement("div")),s.className="graph-info-msg",s.textContent="",e.forceGraph.onLoading(function(){s.textContent="Loading..."}).onFinishLoading(function(){s.textContent=""}).onUpdate(function(){e.graphData=e.forceGraph.graphData(),n.position.x===0&&n.position.y===0&&n.position.z===e.lastSetCameraZ&&e.graphData.nodes.length&&(n.lookAt(e.forceGraph.position),e.lastSetCameraZ=n.position.z=Math.cbrt(e.graphData.nodes.length)*Mx)}).onFinishUpdate(function(){if(e._dragControls){var o=e.graphData.nodes.find(function(c){return c.__initialFixedPos&&!c.__disposeControlsAfterDrag});o?o.__disposeControlsAfterDrag=!0:e._dragControls.dispose(),e._dragControls=void 0}if(e.enableNodeDrag&&e.enablePointerInteraction&&e.forceEngine==="d3"){var l=e._dragControls=new Qv(e.graphData.nodes.map(function(c){return c.__threeObj}).filter(function(c){return c}),n,i.domElement);l.addEventListener("dragstart",function(c){a.enabled=!1,c.object.__initialPos=c.object.position.clone(),c.object.__prevPos=c.object.position.clone();var u=mr(c.object).__data;!u.__initialFixedPos&&(u.__initialFixedPos={fx:u.fx,fy:u.fy,fz:u.fz}),!u.__initialPos&&(u.__initialPos={x:u.x,y:u.y,z:u.z}),["x","y","z"].forEach(function(h){return u["f".concat(h)]=u[h]}),i.domElement.classList.add("grabbable")}),l.addEventListener("drag",function(c){var u=mr(c.object);if(!c.object.hasOwnProperty("__graphObjType")){var h=c.object.__initialPos,f=c.object.__prevPos,g=c.object.position;u.position.add(g.clone().sub(f)),f.copy(g),g.copy(h)}var v=u.__data,p=u.position,m={x:p.x-v.x,y:p.y-v.y,z:p.z-v.z};["x","y","z"].forEach(function(y){return v["f".concat(y)]=v[y]=p[y]}),e.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,e.onNodeDrag(v,m)}),l.addEventListener("dragend",function(c){delete c.object.__initialPos,delete c.object.__prevPos;var u=mr(c.object).__data;u.__disposeControlsAfterDrag&&(l.dispose(),delete u.__disposeControlsAfterDrag);var h=u.__initialFixedPos,f=u.__initialPos,g={x:f.x-u.x,y:f.y-u.y,z:f.z-u.z};h&&(["x","y","z"].forEach(function(v){var p="f".concat(v);h[p]===void 0&&delete u[p]}),delete u.__initialFixedPos,delete u.__initialPos,u.__dragged&&(delete u.__dragged,e.onNodeDragEnd(u,g))),e.forceGraph.d3AlphaTarget(0).resetCountdown(),e.enableNavigationControls&&(a.enabled=!0,a.domElement&&a.domElement.ownerDocument&&a.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),i.domElement.classList.remove("grabbable")})}}),e.renderObjs.objects([new Rh.AmbientLight(12303291),new Rh.DirectionalLight(16777215,.6),e.forceGraph]).hoverOrderComparator(function(o,l){var c=mr(o);if(!c)return 1;var u=mr(l);if(!u)return-1;var h=function(f){return f.__graphObjType==="node"};return h(u)-h(c)}).tooltipContent(function(o){var l=mr(o);return l&&Ge(e["".concat(l.__graphObjType,"Label")])(l.__data)||""}).hoverDuringDrag(!1).onHover(function(o){var l=mr(o);if(l!==e.hoverObj){var c=e.hoverObj?e.hoverObj.__graphObjType:null,u=e.hoverObj?e.hoverObj.__data:null,h=l?l.__graphObjType:null,f=l?l.__data:null;if(c&&c!==h){var g=e["on".concat(c==="node"?"Node":"Link","Hover")];g&&g(null,u)}if(h){var v=e["on".concat(h==="node"?"Node":"Link","Hover")];v&&v(f,c===h?u:null)}i.domElement.classList[l&&e["on".concat(h==="node"?"Node":"Link","Click")]||!l&&e.onBackgroundClick?"add":"remove"]("clickable"),e.hoverObj=l}}).clickAfterDrag(!1).onClick(function(o,l){var c=mr(o);if(c){var u=e["on".concat(c.__graphObjType==="node"?"Node":"Link","Click")];u&&u(c.__data,l)}else e.onBackgroundClick&&e.onBackgroundClick(l)}).onRightClick(function(o,l){var c=mr(o);if(c){var u=e["on".concat(c.__graphObjType==="node"?"Node":"Link","RightClick")];u&&u(c.__data,l)}else e.onBackgroundRightClick&&e.onBackgroundRightClick(l)}),this._animationCycle()}});function mr(r){for(var e=r;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}function Nn(r,e,t){this.k=r,this.x=e,this.y=t}Nn.prototype={constructor:Nn,scale:function(r){return r===1?this:new Nn(this.k*r,this.x,this.y)},translate:function(r,e){return r===0&e===0?this:new Nn(this.k,this.x+this.k*r,this.y+this.k*e)},apply:function(r){return[r[0]*this.k+this.x,r[1]*this.k+this.y]},applyX:function(r){return r*this.k+this.x},applyY:function(r){return r*this.k+this.y},invert:function(r){return[(r[0]-this.x)/this.k,(r[1]-this.y)/this.k]},invertX:function(r){return(r-this.x)/this.k},invertY:function(r){return(r-this.y)/this.k},rescaleX:function(r){return r.copy().domain(r.range().map(this.invertX,this).map(r.invert,r))},rescaleY:function(r){return r.copy().domain(r.range().map(this.invertY,this).map(r.invert,r))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},new Nn(1,0,0),Nn.prototype;var kh={};(function(r){var e=hr&&hr.__extends||function(){var q=function(z,k){return q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(Z,se){Z.__proto__=se}||function(Z,se){for(var B in se)Object.prototype.hasOwnProperty.call(se,B)&&(Z[B]=se[B])},q(z,k)};return function(z,k){if(typeof k!="function"&&k!==null)throw new TypeError("Class extends value "+String(k)+" is not a constructor or null");q(z,k);function Z(){this.constructor=z}z.prototype=k===null?Object.create(k):(Z.prototype=k.prototype,new Z)}}(),t=hr&&hr.__classPrivateFieldSet||function(q,z,k){if(!z.has(q))throw new TypeError("attempted to set private field on non-instance");return z.set(q,k),k},n=hr&&hr.__classPrivateFieldGet||function(q,z){if(!z.has(q))throw new TypeError("attempted to get private field on non-instance");return z.get(q)},i,a,s,o,l,c,u,h,f,g,v,p,m,y,E,S,x,w,C,F,A,D;r.__esModule=!0,r.default=void 0;var G=function(q){var z=131,k=137,Z=0;q+="x";for(var se=Math.floor(9007199254740991/k),B=0;B<q.length;B++)Z>se&&(Z=Math.floor(Z/k)),Z=Z*z+q.charCodeAt(B);return Z},N="0123456789abcdef".split(""),Q=[-2147483648,8388608,32768,128],$=[24,16,8,0],O=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],I=[],K=function(){function q(z,k){z===void 0&&(z=!1),k===void 0&&(k=!1),i.set(this,void 0),a.set(this,void 0),s.set(this,void 0),o.set(this,void 0),l.set(this,void 0),c.set(this,void 0),u.set(this,void 0),h.set(this,void 0),f.set(this,void 0),g.set(this,void 0),v.set(this,void 0),p.set(this,void 0),m.set(this,void 0),y.set(this,void 0),E.set(this,void 0),S.set(this,void 0),x.set(this,0),w.set(this,void 0),this.init(z,k)}return q.prototype.init=function(z,k){k?(I[0]=I[16]=I[1]=I[2]=I[3]=I[4]=I[5]=I[6]=I[7]=I[8]=I[9]=I[10]=I[11]=I[12]=I[13]=I[14]=I[15]=0,t(this,a,I)):t(this,a,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),z?(t(this,c,3238371032),t(this,u,914150663),t(this,h,812702999),t(this,f,4144912697),t(this,g,4290775857),t(this,v,1750603025),t(this,p,1694076839),t(this,m,3204075428)):(t(this,c,1779033703),t(this,u,3144134277),t(this,h,1013904242),t(this,f,2773480762),t(this,g,1359893119),t(this,v,2600822924),t(this,p,528734635),t(this,m,1541459225)),t(this,i,t(this,w,t(this,s,t(this,E,0)))),t(this,o,t(this,y,!1)),t(this,l,!0),t(this,S,z)},q.prototype.update=function(z){if(n(this,o))return this;var k;z instanceof ArrayBuffer?k=new Uint8Array(z):k=z;for(var Z=0,se=k.length,B=n(this,a);Z<se;){var V=void 0;if(n(this,y)&&(t(this,y,!1),B[0]=n(this,i),B[16]=B[1]=B[2]=B[3]=B[4]=B[5]=B[6]=B[7]=B[8]=B[9]=B[10]=B[11]=B[12]=B[13]=B[14]=B[15]=0),typeof k!="string")for(V=n(this,w);Z<se&&V<64;++Z)B[V>>2]|=k[Z]<<$[V++&3];else for(V=n(this,w);Z<se&&V<64;++Z){var ne=k.charCodeAt(Z);ne<128?B[V>>2]|=ne<<$[V++&3]:ne<2048?(B[V>>2]|=(192|ne>>6)<<$[V++&3],B[V>>2]|=(128|ne&63)<<$[V++&3]):ne<55296||ne>=57344?(B[V>>2]|=(224|ne>>12)<<$[V++&3],B[V>>2]|=(128|ne>>6&63)<<$[V++&3],B[V>>2]|=(128|ne&63)<<$[V++&3]):(ne=65536+((ne&1023)<<10|k.charCodeAt(++Z)&1023),B[V>>2]|=(240|ne>>18)<<$[V++&3],B[V>>2]|=(128|ne>>12&63)<<$[V++&3],B[V>>2]|=(128|ne>>6&63)<<$[V++&3],B[V>>2]|=(128|ne&63)<<$[V++&3])}t(this,x,V),t(this,s,n(this,s)+(V-n(this,w))),V>=64?(t(this,i,B[16]),t(this,w,V-64),this.hash(),t(this,y,!0)):t(this,w,V)}return n(this,s)>4294967295&&(t(this,E,n(this,E)+(n(this,s)/4294967296<<0)),t(this,s,n(this,s)%4294967296)),this},q.prototype.finalize=function(){if(!n(this,o)){t(this,o,!0);var z=n(this,a),k=n(this,x);z[16]=n(this,i),z[k>>2]|=Q[k&3],t(this,i,z[16]),k>=56&&(n(this,y)||this.hash(),z[0]=n(this,i),z[16]=z[1]=z[2]=z[3]=z[4]=z[5]=z[6]=z[7]=z[8]=z[9]=z[10]=z[11]=z[12]=z[13]=z[14]=z[15]=0),z[14]=n(this,E)<<3|n(this,s)>>>29,z[15]=n(this,s)<<3,this.hash()}},q.prototype.hash=function(){for(var z=n(this,c),k=n(this,u),Z=n(this,h),se=n(this,f),B=n(this,g),V=n(this,v),ne=n(this,p),ue=n(this,m),he=n(this,a),Me,_e,T,W,M,d,_,b,R,H,J=16;J<64;++J)W=he[J-15],Me=(W>>>7|W<<25)^(W>>>18|W<<14)^W>>>3,W=he[J-2],_e=(W>>>17|W<<15)^(W>>>19|W<<13)^W>>>10,he[J]=he[J-16]+Me+he[J-7]+_e<<0;H=k&Z;for(var L=0;L<64;L+=4)n(this,l)?(n(this,S)?(_=300032,W=he[0]-1413257819,ue=W-150054599<<0,se=W+24177077<<0):(_=704751109,W=he[0]-210244248,ue=W-1521486534<<0,se=W+143694565<<0),t(this,l,!1)):(Me=(z>>>2|z<<30)^(z>>>13|z<<19)^(z>>>22|z<<10),_e=(B>>>6|B<<26)^(B>>>11|B<<21)^(B>>>25|B<<7),_=z&k,T=_^z&Z^H,d=B&V^~B&ne,W=ue+_e+d+O[L]+he[L],M=Me+T,ue=se+W<<0,se=W+M<<0),Me=(se>>>2|se<<30)^(se>>>13|se<<19)^(se>>>22|se<<10),_e=(ue>>>6|ue<<26)^(ue>>>11|ue<<21)^(ue>>>25|ue<<7),b=se&z,T=b^se&k^_,d=ue&B^~ue&V,W=ne+_e+d+O[L+1]+he[L+1],M=Me+T,ne=Z+W<<0,Z=W+M<<0,Me=(Z>>>2|Z<<30)^(Z>>>13|Z<<19)^(Z>>>22|Z<<10),_e=(ne>>>6|ne<<26)^(ne>>>11|ne<<21)^(ne>>>25|ne<<7),R=Z&se,T=R^Z&z^b,d=ne&ue^~ne&B,W=V+_e+d+O[L+2]+he[L+2],M=Me+T,V=k+W<<0,k=W+M<<0,Me=(k>>>2|k<<30)^(k>>>13|k<<19)^(k>>>22|k<<10),_e=(V>>>6|V<<26)^(V>>>11|V<<21)^(V>>>25|V<<7),H=k&Z,T=H^k&se^R,d=V&ne^~V&ue,W=B+_e+d+O[L+3]+he[L+3],M=Me+T,B=z+W<<0,z=W+M<<0;t(this,c,n(this,c)+z<<0),t(this,u,n(this,u)+k<<0),t(this,h,n(this,h)+Z<<0),t(this,f,n(this,f)+se<<0),t(this,g,n(this,g)+B<<0),t(this,v,n(this,v)+V<<0),t(this,p,n(this,p)+ne<<0),t(this,m,n(this,m)+ue<<0)},q.prototype.hex=function(){this.finalize();var z=n(this,c),k=n(this,u),Z=n(this,h),se=n(this,f),B=n(this,g),V=n(this,v),ne=n(this,p),ue=n(this,m),he=N[z>>28&15]+N[z>>24&15]+N[z>>20&15]+N[z>>16&15]+N[z>>12&15]+N[z>>8&15]+N[z>>4&15]+N[z&15]+N[k>>28&15]+N[k>>24&15]+N[k>>20&15]+N[k>>16&15]+N[k>>12&15]+N[k>>8&15]+N[k>>4&15]+N[k&15]+N[Z>>28&15]+N[Z>>24&15]+N[Z>>20&15]+N[Z>>16&15]+N[Z>>12&15]+N[Z>>8&15]+N[Z>>4&15]+N[Z&15]+N[se>>28&15]+N[se>>24&15]+N[se>>20&15]+N[se>>16&15]+N[se>>12&15]+N[se>>8&15]+N[se>>4&15]+N[se&15]+N[B>>28&15]+N[B>>24&15]+N[B>>20&15]+N[B>>16&15]+N[B>>12&15]+N[B>>8&15]+N[B>>4&15]+N[B&15]+N[V>>28&15]+N[V>>24&15]+N[V>>20&15]+N[V>>16&15]+N[V>>12&15]+N[V>>8&15]+N[V>>4&15]+N[V&15]+N[ne>>28&15]+N[ne>>24&15]+N[ne>>20&15]+N[ne>>16&15]+N[ne>>12&15]+N[ne>>8&15]+N[ne>>4&15]+N[ne&15];return n(this,S)||(he+=N[ue>>28&15]+N[ue>>24&15]+N[ue>>20&15]+N[ue>>16&15]+N[ue>>12&15]+N[ue>>8&15]+N[ue>>4&15]+N[ue&15]),he},q.prototype.toString=function(){return this.hex()},q.prototype.digest=function(){this.finalize();var z=n(this,c),k=n(this,u),Z=n(this,h),se=n(this,f),B=n(this,g),V=n(this,v),ne=n(this,p),ue=n(this,m),he=[z>>24&255,z>>16&255,z>>8&255,z&255,k>>24&255,k>>16&255,k>>8&255,k&255,Z>>24&255,Z>>16&255,Z>>8&255,Z&255,se>>24&255,se>>16&255,se>>8&255,se&255,B>>24&255,B>>16&255,B>>8&255,B&255,V>>24&255,V>>16&255,V>>8&255,V&255,ne>>24&255,ne>>16&255,ne>>8&255,ne&255];return n(this,S)||he.push(ue>>24&255,ue>>16&255,ue>>8&255,ue&255),he},q.prototype.array=function(){return this.digest()},q.prototype.arrayBuffer=function(){this.finalize();var z=new ArrayBuffer(n(this,S)?28:32),k=new DataView(z);return k.setUint32(0,n(this,c)),k.setUint32(4,n(this,u)),k.setUint32(8,n(this,h)),k.setUint32(12,n(this,f)),k.setUint32(16,n(this,g)),k.setUint32(20,n(this,v)),k.setUint32(24,n(this,p)),n(this,S)||k.setUint32(28,n(this,m)),z},q}();i=new WeakMap,a=new WeakMap,s=new WeakMap,o=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,f=new WeakMap,g=new WeakMap,v=new WeakMap,p=new WeakMap,m=new WeakMap,y=new WeakMap,E=new WeakMap,S=new WeakMap,x=new WeakMap,w=new WeakMap,function(q){e(z,q);function z(k,Z,se){Z===void 0&&(Z=!1),se===void 0&&(se=!1);var B=q.call(this,Z,se)||this;C.set(B,void 0),F.set(B,void 0),A.set(B,void 0),D.set(B,void 0);var V;if(typeof k=="string"){for(var ne=[],ue=k.length,he=0,Me=0;Me<ue;++Me){var _e=k.charCodeAt(Me);_e<128?ne[he++]=_e:_e<2048?(ne[he++]=192|_e>>6,ne[he++]=128|_e&63):_e<55296||_e>=57344?(ne[he++]=224|_e>>12,ne[he++]=128|_e>>6&63,ne[he++]=128|_e&63):(_e=65536+((_e&1023)<<10|k.charCodeAt(++Me)&1023),ne[he++]=240|_e>>18,ne[he++]=128|_e>>12&63,ne[he++]=128|_e>>6&63,ne[he++]=128|_e&63)}V=ne}else k instanceof ArrayBuffer?V=new Uint8Array(k):V=k;V.length>64&&(V=new K(Z,!0).update(V).array());for(var T=[],W=[],Me=0;Me<64;++Me){var M=V[Me]||0;T[Me]=92^M,W[Me]=54^M}return B.update(W),t(B,A,T),t(B,C,!0),t(B,F,Z),t(B,D,se),B}return z.prototype.finalize=function(){if(q.prototype.finalize.call(this),n(this,C)){t(this,C,!1);var k=this.array();q.prototype.init.call(this,n(this,F),n(this,D)),this.update(n(this,A)),this.update(k),q.prototype.finalize.call(this)}},z}(K),C=new WeakMap,F=new WeakMap,A=new WeakMap,D=new WeakMap;function oe(q){var z=new K;return z.update(q),parseInt(z.hex().substring(0,8),16)}var ae=function(q){var z="#";return q.forEach(function(k){k<16&&(z+=0),z+=k.toString(16)}),z},ee=function(q,z,k){q/=360;var Z=k<.5?k*(1+z):k+z-k*z,se=2*k-Z;return[q+1/3,q,q-1/3].map(function(B){return B<0&&B++,B>1&&B--,B<1/6?B=se+(Z-se)*6*B:B<.5?B=Z:B<2/3?B=se+(Z-se)*6*(2/3-B):B=se,Math.round(B*255)})},U=function(){function q(z){z===void 0&&(z={});var k=[z.lightness,z.saturation].map(function(B){return B=B!==void 0?B:[.35,.5,.65],Array.isArray(B)?B.concat():[B]}),Z=k[0],se=k[1];this.L=Z,this.S=se,typeof z.hue=="number"&&(z.hue={min:z.hue,max:z.hue}),typeof z.hue=="object"&&!Array.isArray(z.hue)&&(z.hue=[z.hue]),typeof z.hue>"u"&&(z.hue=[]),this.hueRanges=z.hue.map(function(B){return{min:typeof B.min>"u"?0:B.min,max:typeof B.max>"u"?360:B.max}}),this.hash=oe,typeof z.hash=="function"&&(this.hash=z.hash),z.hash==="bkdr"&&(this.hash=G)}return q.prototype.hsl=function(z){var k,Z,se,B=this.hash(z),V=727;if(this.hueRanges.length){var ne=this.hueRanges[B%this.hueRanges.length];k=B/this.hueRanges.length%V*(ne.max-ne.min)/V+ne.min}else k=B%359;return B=Math.ceil(B/360),Z=this.S[B%this.S.length],B=Math.ceil(B/this.S.length),se=this.L[B%this.L.length],[k,Z,se]},q.prototype.rgb=function(z){var k=this.hsl(z);return ee.apply(this,k)},q.prototype.hex=function(z){var k=this.rgb(z);return ae(k)},q}();r.default=U})(kh);const Lx=p1(kh);var it=function(){return it=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},it.apply(this,arguments)};function Nh(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Px(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,a;n<i;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return r.concat(a||Array.prototype.slice.call(e))}var Ps=function(){},Os=function(r,e,t){return Math.min(Math.max(t,r),e)},Ds=.001,Ox=.01,Dx=10,Rx=.05,Ix=1;function kx(r){var e=r.duration,t=e===void 0?800:e,n=r.bounce,i=n===void 0?.25:n,a=r.velocity,s=a===void 0?0:a,o=r.mass,l=o===void 0?1:o,c,u,h=1-i;h=Os(Rx,Ix,h),t=Os(Ox,Dx,t/1e3),h<1?(c=function(p){var m=p*h,y=m*t,E=m-s,S=Rs(p,h),x=Math.exp(-y);return Ds-E/S*x},u=function(p){var m=p*h,y=m*t,E=y*s+s,S=Math.pow(h,2)*Math.pow(p,2)*t,x=Math.exp(-y),w=Rs(Math.pow(p,2),h),C=-c(p)+Ds>0?-1:1;return C*((E-S)*x)/w}):(c=function(p){var m=Math.exp(-p*t),y=(p-s)*t+1;return-Ds+m*y},u=function(p){var m=Math.exp(-p*t),y=(s-p)*(t*t);return m*y});var f=5/t,g=zx(c,u,f);if(t=t*1e3,isNaN(g))return{stiffness:100,damping:10,duration:t};var v=Math.pow(g,2)*l;return{stiffness:v,damping:h*2*Math.sqrt(l*v),duration:t}}var Nx=12;function zx(r,e,t){for(var n=t,i=1;i<Nx;i++)n=n-r(n)/e(n);return n}function Rs(r,e){return r*Math.sqrt(1-e*e)}var Bx=["duration","bounce"],Fx=["stiffness","damping","mass"];function zh(r,e){return e.some(function(t){return r[t]!==void 0})}function Ux(r){var e=it({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},r);if(!zh(r,Fx)&&zh(r,Bx)){var t=kx(r);e=it(it(it({},e),t),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Is(r){var e=r.from,t=e===void 0?0:e,n=r.to,i=n===void 0?1:n,a=r.restSpeed,s=a===void 0?2:a,o=r.restDelta,l=Nh(r,["from","to","restSpeed","restDelta"]),c={done:!1,value:t},u=Ux(l),h=u.stiffness,f=u.damping,g=u.mass,v=u.velocity,p=u.duration,m=u.isResolvedFromDuration,y=Bh,E=Bh;function S(){var x=v?-(v/1e3):0,w=i-t,C=f/(2*Math.sqrt(h*g)),F=Math.sqrt(h/g)/1e3;if(o??(o=Math.abs(i-t)<=1?.01:.4),C<1){var A=Rs(F,C);y=function(G){var N=Math.exp(-C*F*G);return i-N*((x+C*F*w)/A*Math.sin(A*G)+w*Math.cos(A*G))},E=function(G){var N=Math.exp(-C*F*G);return C*F*N*(Math.sin(A*G)*(x+C*F*w)/A+w*Math.cos(A*G))-N*(Math.cos(A*G)*(x+C*F*w)-A*w*Math.sin(A*G))}}else if(C===1)y=function(G){return i-Math.exp(-F*G)*(w+(x+F*w)*G)};else{var D=F*Math.sqrt(C*C-1);y=function(G){var N=Math.exp(-C*F*G),Q=Math.min(D*G,300);return i-N*((x+C*F*w)*Math.sinh(Q)+D*w*Math.cosh(Q))/D}}}return S(),{next:function(x){var w=y(x);if(m)c.done=x>=p;else{var C=E(x)*1e3,F=Math.abs(C)<=s,A=Math.abs(i-w)<=o;c.done=F&&A}return c.value=c.done?i:w,c},flipTarget:function(){var x;v=-v,x=[i,t],t=x[0],i=x[1],S()}}}Is.needsInterpolation=function(r,e){return typeof r=="string"||typeof e=="string"};var Bh=function(r){return 0},Fh=function(r,e,t){var n=e-r;return n===0?1:(t-r)/n},Ta=function(r,e,t){return-t*r+t*e+r},Uh=function(r,e){return function(t){return Math.max(Math.min(t,e),r)}},gi=function(r){return r%1?Number(r.toFixed(5)):r},Ca=/(-)?([\d]*\.?[\d])+/g,ks=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,jx=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function vi(r){return typeof r=="string"}var La={test:function(r){return typeof r=="number"},parse:parseFloat,transform:function(r){return r}},jh=it(it({},La),{transform:Uh(0,1)});it(it({},La),{default:1});var Gx=function(r){return{test:function(e){return vi(e)&&e.endsWith(r)&&e.split(" ").length===1},parse:parseFloat,transform:function(e){return""+e+r}}},yi=Gx("%");it(it({},yi),{parse:function(r){return yi.parse(r)/100},transform:function(r){return yi.transform(r*100)}});var Ns=function(r,e){return function(t){return Boolean(vi(t)&&jx.test(t)&&t.startsWith(r)||e&&Object.prototype.hasOwnProperty.call(t,e))}},Gh=function(r,e,t){return function(n){var i;if(!vi(n))return n;var a=n.match(Ca),s=a[0],o=a[1],l=a[2],c=a[3];return i={},i[r]=parseFloat(s),i[e]=parseFloat(o),i[t]=parseFloat(l),i.alpha=c!==void 0?parseFloat(c):1,i}},zn={test:Ns("hsl","hue"),parse:Gh("hue","saturation","lightness"),transform:function(r){var e=r.hue,t=r.saturation,n=r.lightness,i=r.alpha,a=i===void 0?1:i;return"hsla("+Math.round(e)+", "+yi.transform(gi(t))+", "+yi.transform(gi(n))+", "+gi(jh.transform(a))+")"}},Hx=Uh(0,255),zs=it(it({},La),{transform:function(r){return Math.round(Hx(r))}}),Bn={test:Ns("rgb","red"),parse:Gh("red","green","blue"),transform:function(r){var e=r.red,t=r.green,n=r.blue,i=r.alpha,a=i===void 0?1:i;return"rgba("+zs.transform(e)+", "+zs.transform(t)+", "+zs.transform(n)+", "+gi(jh.transform(a))+")"}};function Wx(r){var e="",t="",n="",i="";return r.length>5?(e=r.substr(1,2),t=r.substr(3,2),n=r.substr(5,2),i=r.substr(7,2)):(e=r.substr(1,1),t=r.substr(2,1),n=r.substr(3,1),i=r.substr(4,1),e+=e,t+=t,n+=n,i+=i),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}}var Bs={test:Ns("#"),parse:Wx,transform:Bn.transform},Pa={test:function(r){return Bn.test(r)||Bs.test(r)||zn.test(r)},parse:function(r){return Bn.test(r)?Bn.parse(r):zn.test(r)?zn.parse(r):Bs.parse(r)},transform:function(r){return vi(r)?r:r.hasOwnProperty("red")?Bn.transform(r):zn.transform(r)}},Hh="${c}",Wh="${n}";function Vx(r){var e,t,n,i;return isNaN(r)&&vi(r)&&((t=(e=r.match(Ca))===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0)+((i=(n=r.match(ks))===null||n===void 0?void 0:n.length)!==null&&i!==void 0?i:0)>0}function Vh(r){typeof r=="number"&&(r=""+r);var e=[],t=0,n=r.match(ks);n&&(t=n.length,r=r.replace(ks,Hh),e.push.apply(e,n.map(Pa.parse)));var i=r.match(Ca);return i&&(r=r.replace(Ca,Wh),e.push.apply(e,i.map(La.parse))),{values:e,numColors:t,tokenised:r}}function qh(r){return Vh(r).values}function Xh(r){var e=Vh(r),t=e.values,n=e.numColors,i=e.tokenised,a=t.length;return function(s){for(var o=i,l=0;l<a;l++)o=o.replace(l<n?Hh:Wh,l<n?Pa.transform(s[l]):gi(s[l]));return o}}var qx=function(r){return typeof r=="number"?0:r};function Xx(r){var e=qh(r),t=Xh(r);return t(e.map(qx))}var Yh={test:Vx,parse:qh,createTransformer:Xh,getAnimatableNone:Xx},Yx=function(r,e,t){var n=r*r,i=e*e;return Math.sqrt(Math.max(0,t*(i-n)+n))},$x=[Bs,Bn,zn],$h=function(r){return $x.find(function(e){return e.test(r)})},Kh=function(r,e){var t=$h(r),n=$h(e);if(Ps(t.transform===n.transform),!t||!n||t.transform!==n.transform)return function(l){return""+(l>0?e:r)};var i=t.parse(r),a=n.parse(e),s=it({},i),o=t===zn?Ta:Yx;return function(l){for(var c in s)c!=="alpha"&&(s[c]=o(i[c],a[c],l));return s.alpha=Ta(i.alpha,a.alpha,l),t.transform(s)}},Kx=function(r){return typeof r=="number"},Jx=function(r,e){return function(t){return e(r(t))}},Jh=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return r.reduce(Jx)};function Zh(r,e){return Kx(r)?function(t){return Ta(r,e,t)}:Pa.test(r)?Kh(r,e):td(r,e)}var Qh=function(r,e){var t=Px([],r),n=t.length,i=r.map(function(a,s){return Zh(a,e[s])});return function(a){for(var s=0;s<n;s++)t[s]=i[s](a);return t}},Zx=function(r,e){var t=it(it({},r),e),n={};for(var i in t)r[i]!==void 0&&e[i]!==void 0&&(n[i]=Zh(r[i],e[i]));return function(a){for(var s in n)t[s]=n[s](a);return t}};function ed(r){for(var e=Yh.parse(r),t=e.length,n=0,i=0,a=0,s=0;s<t;s++)n||typeof e[s]=="number"?n++:e[s].hue!==void 0?a++:i++;return{parsed:e,numNumbers:n,numRGB:i,numHSL:a}}var td=function(r,e){var t=Yh.createTransformer(e),n=ed(r),i=ed(e),a=n.numHSL===i.numHSL&&n.numRGB===i.numRGB&&n.numNumbers>=i.numNumbers;return a?Jh(Qh(n.parsed,i.parsed),t):function(s){return""+(s>0?e:r)}},Qx=function(r,e){return function(t){return Ta(r,e,t)}};function ew(r){if(typeof r=="number")return Qx;if(typeof r=="string")return Pa.test(r)?Kh:td;if(Array.isArray(r))return Qh;if(typeof r=="object")return Zx}function tw(r,e,t){for(var n=[],i=t||ew(r[0]),a=r.length-1,s=0;s<a;s++){var o=i(r[s],r[s+1]);if(e){var l=Array.isArray(e)?e[s]:e;o=Jh(l,o)}n.push(o)}return n}function rw(r,e){var t=r[0],n=r[1],i=e[0];return function(a){return i(Fh(t,n,a))}}function nw(r,e){var t=r.length,n=t-1;return function(i){var a=0,s=!1;if(i<=r[0]?s=!0:i>=r[n]&&(a=n-1,s=!0),!s){for(var o=1;o<t&&!(r[o]>i||o===n);o++);a=o-1}var l=Fh(r[a],r[a+1],i);return e[a](l)}}function rd(r,e,t){var n=t===void 0?{}:t,i=n.clamp,a=i===void 0?!0:i,s=n.ease,o=n.mixer,l=r.length;Ps(l===e.length),Ps(!s||!Array.isArray(s)||s.length===l-1),r[0]>r[l-1]&&(r=[].concat(r),e=[].concat(e),r.reverse(),e.reverse());var c=tw(e,s,o),u=l===2?rw(r,c):nw(r,c);return a?function(h){return u(Os(r[0],r[l-1],h))}:u}var Oa=function(r){return function(e){return 1-r(1-e)}},Fs=function(r){return function(e){return e<=.5?r(2*e)/2:(2-r(2*(1-e)))/2}},iw=function(r){return function(e){return Math.pow(e,r)}},nd=function(r){return function(e){return e*e*((r+1)*e-r)}},aw=function(r){var e=nd(r);return function(t){return(t*=2)<1?.5*e(t):.5*(2-Math.pow(2,-10*(t-1)))}},id=1.525,ow=4/11,sw=8/11,lw=9/10,ad=iw(2);Oa(ad);var cw=Fs(ad),uw=function(r){return 1-Math.sin(Math.acos(r))},hw=Oa(uw);Fs(hw);var od=nd(id);Oa(od),Fs(od),aw(id);var dw=4356/361,fw=35442/1805,pw=16061/1805,mw=function(r){if(r===1||r===0)return r;var e=r*r;return r<ow?7.5625*e:r<sw?9.075*e-9.9*r+3.4:r<lw?dw*e-fw*r+pw:10.8*r*r-20.52*r+10.72};Oa(mw);function gw(r,e){return r.map(function(){return e||cw}).splice(0,r.length-1)}function vw(r){var e=r.length;return r.map(function(t,n){return n!==0?n/(e-1):0})}function yw(r,e){return r.map(function(t){return t*e})}function Da(r){var e=r.from,t=e===void 0?0:e,n=r.to,i=n===void 0?1:n,a=r.ease,s=r.offset,o=r.duration,l=o===void 0?300:o,c={done:!1,value:t},u=Array.isArray(i)?i:[t,i],h=yw(s&&s.length===u.length?s:vw(u),l);function f(){return rd(h,u,{ease:Array.isArray(a)?a:gw(u,a)})}var g=f();return{next:function(v){return c.value=g(v),c.done=v>=l,c},flipTarget:function(){u.reverse(),g=f()}}}function _w(r){var e=r.velocity,t=e===void 0?0:e,n=r.from,i=n===void 0?0:n,a=r.power,s=a===void 0?.8:a,o=r.timeConstant,l=o===void 0?350:o,c=r.restDelta,u=c===void 0?.5:c,h=r.modifyTarget,f={done:!1,value:i},g=s*t,v=i+g,p=h===void 0?v:h(v);return p!==v&&(g=p-i),{next:function(m){var y=-g*Math.exp(-m/l);return f.done=!(y>u||y<-u),f.value=f.done?p:p+y,f},flipTarget:function(){}}}var sd={keyframes:Da,spring:Is,decay:_w};function bw(r){if(Array.isArray(r.to))return Da;if(sd[r.type])return sd[r.type];var e=new Set(Object.keys(r));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Da:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Is:Da}var ld=1/60*1e3,xw=typeof performance<"u"?function(){return performance.now()}:function(){return Date.now()},cd=typeof window<"u"?function(r){return window.requestAnimationFrame(r)}:function(r){return setTimeout(function(){return r(xw())},ld)};function ww(r){var e=[],t=[],n=0,i=!1,a=new WeakSet,s={schedule:function(o,l,c){l===void 0&&(l=!1),c===void 0&&(c=!1);var u=c&&i,h=u?e:t;return l&&a.add(o),h.indexOf(o)===-1&&(h.push(o),u&&i&&(n=e.length)),o},cancel:function(o){var l=t.indexOf(o);l!==-1&&t.splice(l,1),a.delete(o)},process:function(o){var l;if(i=!0,l=[t,e],e=l[0],t=l[1],t.length=0,n=e.length,n)for(var c=0;c<n;c++){var u=e[c];u(o),a.has(u)&&(s.schedule(u),r())}i=!1}};return s}var Mw=40,Us=!0,_i=!1,js=!1,Ra={delta:0,timestamp:0},Ia=["read","update","preRender","render","postRender"],Gs=Ia.reduce(function(r,e){return r[e]=ww(function(){return _i=!0}),r},{}),Sw=Ia.reduce(function(r,e){var t=Gs[e];return r[e]=function(n,i,a){return i===void 0&&(i=!1),a===void 0&&(a=!1),_i||Tw(),t.schedule(n,i,a)},r},{}),Ew=Ia.reduce(function(r,e){return r[e]=Gs[e].cancel,r},{}),Aw=function(r){return Gs[r].process(Ra)},ud=function(r){_i=!1,Ra.delta=Us?ld:Math.max(Math.min(r-Ra.timestamp,Mw),1),Ra.timestamp=r,js=!0,Ia.forEach(Aw),js=!1,_i&&(Us=!1,cd(ud))},Tw=function(){_i=!0,Us=!0,js||cd(ud)};function hd(r,e,t){return t===void 0&&(t=0),r-e-t}function Cw(r,e,t,n){return t===void 0&&(t=0),n===void 0&&(n=!0),n?hd(e+-r,e,t):e-(r-e)+t}function Lw(r,e,t,n){return n?r>=e+t:r<=-t}var Pw=function(r){var e=function(t){var n=t.delta;return r(n)};return{start:function(){return Sw.update(e,!0)},stop:function(){return Ew.update(e)}}};function dd(r){var e,t,n=r.from,i=r.autoplay,a=i===void 0?!0:i,s=r.driver,o=s===void 0?Pw:s,l=r.elapsed,c=l===void 0?0:l,u=r.repeat,h=u===void 0?0:u,f=r.repeatType,g=f===void 0?"loop":f,v=r.repeatDelay,p=v===void 0?0:v,m=r.onPlay,y=r.onStop,E=r.onComplete,S=r.onRepeat,x=r.onUpdate,w=Nh(r,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),C=w.to,F,A=0,D=w.duration,G,N=!1,Q=!0,$,O=bw(w);!((t=(e=O).needsInterpolation)===null||t===void 0)&&t.call(e,n,C)&&($=rd([0,100],[n,C],{clamp:!1}),n=0,C=100);var I=O(it(it({},w),{from:n,to:C}));function K(){A++,g==="reverse"?(Q=A%2===0,c=Cw(c,D,p,Q)):(c=hd(c,D,p),g==="mirror"&&I.flipTarget()),N=!1,S&&S()}function oe(){F.stop(),E&&E()}function ae(U){if(Q||(U=-U),c+=U,!N){var q=I.next(Math.max(0,c));G=q.value,$&&(G=$(G)),N=Q?q.done:c<=0}x==null||x(G),N&&(A===0&&(D??(D=c)),A<h?Lw(c,D,p,Q)&&K():oe())}function ee(){m==null||m(),F=o(ae),F.start()}return a&&ee(),{stop:function(){y==null||y(),F.stop()}}}var Hs={},Ow={get exports(){return Hs},set exports(r){Hs=r}},Ws={},Dw={get exports(){return Ws},set exports(r){Ws=r}},fd;function Rw(){return fd||(fd=1,function(r,e){(function(t,n){r.exports=n()})(hr,function(){var t={isEqual:!0,isMatchingKey:!0,isPromise:!0,maxSize:!0,onCacheAdd:!0,onCacheChange:!0,onCacheHit:!0,transformKey:!0},n=Array.prototype.slice;function i(h){var f=h.length;return f?f===1?[h[0]]:f===2?[h[0],h[1]]:f===3?[h[0],h[1],h[2]]:n.call(h,0):[]}function a(h){var f={};for(var g in h)t[g]||(f[g]=h[g]);return f}function s(h){return typeof h=="function"&&h.isMemoized}function o(h,f){return h===f||h!==h&&f!==f}function l(h,f){var g={};for(var v in h)g[v]=h[v];for(var v in f)g[v]=f[v];return g}var c=function(){function h(f){this.keys=[],this.values=[],this.options=f;var g=typeof f.isMatchingKey=="function";g?this.getKeyIndex=this._getKeyIndexFromMatchingKey:f.maxSize>1?this.getKeyIndex=this._getKeyIndexForMany:this.getKeyIndex=this._getKeyIndexForSingle,this.canTransformKey=typeof f.transformKey=="function",this.shouldCloneArguments=this.canTransformKey||g,this.shouldUpdateOnAdd=typeof f.onCacheAdd=="function",this.shouldUpdateOnChange=typeof f.onCacheChange=="function",this.shouldUpdateOnHit=typeof f.onCacheHit=="function"}return Object.defineProperty(h.prototype,"size",{get:function(){return this.keys.length},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"snapshot",{get:function(){return{keys:i(this.keys),size:this.size,values:i(this.values)}},enumerable:!1,configurable:!0}),h.prototype._getKeyIndexFromMatchingKey=function(f){var g=this.options,v=g.isMatchingKey,p=g.maxSize,m=this.keys,y=m.length;if(!y)return-1;if(v(m[0],f))return 0;if(p>1){for(var E=1;E<y;E++)if(v(m[E],f))return E}return-1},h.prototype._getKeyIndexForMany=function(f){var g=this.options.isEqual,v=this.keys,p=v.length;if(!p)return-1;if(p===1)return this._getKeyIndexForSingle(f);var m=f.length,y,E;if(m>1){for(var S=0;S<p;S++)if(y=v[S],y.length===m){for(E=0;E<m&&g(y[E],f[E]);E++);if(E===m)return S}}else for(var S=0;S<p;S++)if(y=v[S],y.length===m&&g(y[0],f[0]))return S;return-1},h.prototype._getKeyIndexForSingle=function(f){var g=this.keys;if(!g.length)return-1;var v=g[0],p=v.length;if(f.length!==p)return-1;var m=this.options.isEqual;if(p>1){for(var y=0;y<p;y++)if(!m(v[y],f[y]))return-1;return 0}return m(v[0],f[0])?0:-1},h.prototype.orderByLru=function(f,g,v){for(var p=this.keys,m=this.values,y=p.length,E=v;E--;)p[E+1]=p[E],m[E+1]=m[E];p[0]=f,m[0]=g;var S=this.options.maxSize;y===S&&v===y?(p.pop(),m.pop()):v>=S&&(p.length=m.length=S)},h.prototype.updateAsyncCache=function(f){var g=this,v=this.options,p=v.onCacheChange,m=v.onCacheHit,y=this.keys[0],E=this.values[0];this.values[0]=E.then(function(S){return g.shouldUpdateOnHit&&m(g,g.options,f),g.shouldUpdateOnChange&&p(g,g.options,f),S},function(S){var x=g.getKeyIndex(y);throw x!==-1&&(g.keys.splice(x,1),g.values.splice(x,1)),S})},h}();function u(h,f){if(f===void 0&&(f={}),s(h))return u(h.fn,l(h.options,f));if(typeof h!="function")throw new TypeError("You must pass a function to `memoize`.");var g=f.isEqual,v=g===void 0?o:g,p=f.isMatchingKey,m=f.isPromise,y=m===void 0?!1:m,E=f.maxSize,S=E===void 0?1:E,x=f.onCacheAdd,w=f.onCacheChange,C=f.onCacheHit,F=f.transformKey,A=l({isEqual:v,isMatchingKey:p,isPromise:y,maxSize:S,onCacheAdd:x,onCacheChange:w,onCacheHit:C,transformKey:F},a(f)),D=new c(A),G=D.keys,N=D.values,Q=D.canTransformKey,$=D.shouldCloneArguments,O=D.shouldUpdateOnAdd,I=D.shouldUpdateOnChange,K=D.shouldUpdateOnHit,oe=function(){var ae=$?i(arguments):arguments;Q&&(ae=F(ae));var ee=G.length?D.getKeyIndex(ae):-1;if(ee!==-1)K&&C(D,A,oe),ee&&(D.orderByLru(G[ee],N[ee],ee),I&&w(D,A,oe));else{var U=h.apply(this,arguments),q=$?ae:i(arguments);D.orderByLru(q,U,G.length),y&&D.updateAsyncCache(oe),O&&x(D,A,oe),I&&w(D,A,oe)}return N[0]};return oe.cache=D,oe.fn=h,oe.isMemoized=!0,oe.options=A,oe}return u})}(Dw)),Ws}var ka={},Iw={get exports(){return ka},set exports(r){ka=r}},pd;function kw(){return pd||(pd=1,function(r,e){(function(t,n){n(e)})(hr,function(t){var n=typeof WeakMap=="function",i=Object.keys;function a(N,Q){return N===Q||N!==N&&Q!==Q}function s(N){return N.constructor===Object||N.constructor==null}function o(N){return!!N&&typeof N.then=="function"}function l(N){return!!(N&&N.$$typeof)}function c(){var N=[];return{delete:function(Q){for(var $=0;$<N.length;++$)if(N[$][0]===Q){N.splice($,1);return}},get:function(Q){for(var $=0;$<N.length;++$)if(N[$][0]===Q)return N[$][1]},set:function(Q,$){for(var O=0;O<N.length;++O)if(N[O][0]===Q){N[O][1]=$;return}N.push([Q,$])}}}var u=function(N){return N?function(){return new WeakMap}:c}(n);function h(N){return function(Q){var $=N||Q;return function(O,I,K,oe,ae,ee,U){U===void 0&&(U=u());var q=!!O&&typeof O=="object",z=!!I&&typeof I=="object";if(q!==z)return!1;if(!q&&!z)return $(O,I,U);var k=U.get(O);if(k&&U.get(I))return k===I;U.set(O,I),U.set(I,O);var Z=$(O,I,U);return U.delete(O),U.delete(I),Z}}}function f(N,Q,$,O){var I=N.length;if(Q.length!==I)return!1;for(;I-- >0;)if(!$(N[I],Q[I],I,I,N,Q,O))return!1;return!0}function g(N,Q,$,O){var I=N.size===Q.size;if(I&&N.size){var K={},oe=0;N.forEach(function(ae,ee){if(I){var U=!1,q=0;Q.forEach(function(z,k){!U&&!K[q]&&(U=$(ee,k,oe,q,N,Q,O)&&$(ae,z,ee,k,N,Q,O),U&&(K[q]=!0)),q++}),oe++,I=U}})}return I}var v="_owner",p=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function m(N,Q,$,O){var I=i(N),K=I.length;if(i(Q).length!==K)return!1;if(K)for(var oe=void 0;K-- >0;){if(oe=I[K],oe===v){var ae=l(N),ee=l(Q);if((ae||ee)&&ae!==ee)return!1}if(!p(Q,oe)||!$(N[oe],Q[oe],oe,oe,N,Q,O))return!1}return!0}var y=function(){return/foo/g.flags==="g"?function(N,Q){return N.source===Q.source&&N.flags===Q.flags}:function(N,Q){return N.source===Q.source&&N.global===Q.global&&N.ignoreCase===Q.ignoreCase&&N.multiline===Q.multiline&&N.unicode===Q.unicode&&N.sticky===Q.sticky&&N.lastIndex===Q.lastIndex}}();function E(N,Q,$,O){var I=N.size===Q.size;if(I&&N.size){var K={};N.forEach(function(oe,ae){if(I){var ee=!1,U=0;Q.forEach(function(q,z){!ee&&!K[U]&&(ee=$(oe,q,ae,z,N,Q,O),ee&&(K[U]=!0)),U++}),I=ee}})}return I}var S=typeof Map=="function",x=typeof Set=="function",w=Object.prototype.valueOf;function C(N){var Q=typeof N=="function"?N($):function(O,I,K,oe,ae,ee,U){return $(O,I,U)};function $(O,I,K){if(O===I)return!0;if(O&&I&&typeof O=="object"&&typeof I=="object"){if(s(O)&&s(I))return m(O,I,Q,K);var oe=Array.isArray(O),ae=Array.isArray(I);return oe||ae?oe===ae&&f(O,I,Q,K):(oe=O instanceof Date,ae=I instanceof Date,oe||ae?oe===ae&&a(O.getTime(),I.getTime()):(oe=O instanceof RegExp,ae=I instanceof RegExp,oe||ae?oe===ae&&y(O,I):o(O)||o(I)?O===I:S&&(oe=O instanceof Map,ae=I instanceof Map,oe||ae)?oe===ae&&g(O,I,Q,K):x&&(oe=O instanceof Set,ae=I instanceof Set,oe||ae)?oe===ae&&E(O,I,Q,K):O.valueOf!==w||I.valueOf!==w?a(O.valueOf(),I.valueOf()):m(O,I,Q,K)))}return O!==O&&I!==I}return $}var F=C(),A=C(function(){return a}),D=C(h()),G=C(h(a));t.circularDeepEqual=D,t.circularShallowEqual=G,t.createCustomEqual=C,t.deepEqual=F,t.sameValueZeroEqual=a,t.shallowEqual=A,Object.defineProperty(t,"__esModule",{value:!0})})}(Iw,ka)),ka}(function(r,e){(function(t,n){r.exports=n(Rw(),kw())})(hr,function(t,n){function i(){return i=Object.assign?Object.assign.bind():function(M){for(var d=1;d<arguments.length;d++){var _=arguments[d];for(var b in _)Object.prototype.hasOwnProperty.call(_,b)&&(M[b]=_[b])}return M},i.apply(this,arguments)}function a(M,d){if(M==null)return{};var _={},b=Object.keys(M),R,H;for(H=0;H<b.length;H++)R=b[H],!(d.indexOf(R)>=0)&&(_[R]=M[R]);return _}var s={isDeepEqual:!1,isPromise:!1,isReact:!1,isSerialized:!1,isShallowEqual:!1,matchesArg:void 0,matchesKey:void 0,maxAge:void 0,maxArgs:void 0,maxSize:1,onExpire:void 0,profileName:void 0,serializer:void 0,updateCacheForKey:void 0,transformArgs:void 0,updateExpire:!1};function o(){for(var M=arguments.length,d=new Array(M),_=0;_<M;_++)d[_]=arguments[_];return d.reduce(function(b,R){if(typeof b=="function")return typeof R=="function"?function(){b.apply(this,arguments),R.apply(this,arguments)}:b;if(typeof R=="function")return R})}function l(){for(var M=arguments.length,d=new Array(M),_=0;_<M;_++)d[_]=arguments[_];return d.reduce(function(b,R){if(typeof b=="function")return typeof R=="function"?function(){return b(R.apply(this,arguments))}:b;if(typeof R=="function")return R})}function c(M,d){for(var _=0;_<M.length;_++)if(M[_].key===d)return _;return-1}function u(M,d){var _=typeof d=="function"?d:function(b,R){for(var H=0;H<R.length;H++)if(!M(b[H],R[H]))return!1;return!0};return function(b,R){for(var H=0;H<b.length;H++)if(b[H].length===R.length&&_(b[H],R))return H;return-1}}function h(M,d){return!d||d===s?M:i({},M,d,{onCacheAdd:o(M.onCacheAdd,d.onCacheAdd),onCacheChange:o(M.onCacheChange,d.onCacheChange),onCacheHit:o(M.onCacheHit,d.onCacheHit),transformArgs:l(M.transformArgs,d.transformArgs)})}function f(M){return typeof M=="function"&&M.isMoized}function g(M,d,_){try{var b=_||d||"anonymous";Object.defineProperty(M,"name",{configurable:!0,enumerable:!1,value:"moized("+b+")",writable:!0})}catch{}}function v(M,d,_){var b=c(M,d);b!==-1&&(clearTimeout(M[b].timeoutId),_&&M.splice(b,1))}function p(M,d){var _=setTimeout(M,d);return typeof _.unref=="function"&&_.unref(),_}function m(M,d,_,b){var R=d.maxAge;return function H(J,L,P){var te=J.keys[0];if(c(M,te)===-1){var de=function(){var ge=u(_,b),ve=ge(J.keys,te),Ce=J.values[ve];~ve&&(J.keys.splice(ve,1),J.values.splice(ve,1),typeof d.onCacheChange=="function"&&d.onCacheChange(J,L,P)),v(M,te,!0),typeof d.onExpire=="function"&&d.onExpire(te)===!1&&(J.keys.unshift(te),J.values.unshift(Ce),H(J,L,P),typeof d.onCacheChange=="function"&&d.onCacheChange(J,L,P))};M.push({expirationMethod:de,key:te,timeoutId:p(de,R)})}}}function y(M,d){return function(_){var b=_.keys[0],R=c(M,b);~R&&(v(M,b,!1),M[R].timeoutId=p(M[R].expirationMethod,d.maxAge))}}function E(M,d,_,b){var R=typeof d.maxAge=="number"&&isFinite(d.maxAge)?m(M,d,_,b):void 0;return{onCacheAdd:R,onCacheHit:R&&d.updateExpire?y(M,d):void 0}}var S={anonymousProfileNameCounter:1,isCollectingStats:!1,profiles:{}},x=!1;function w(M){M?delete S.profiles[M]:S.profiles={}}function C(M){M===void 0&&(M=!0),S.isCollectingStats=M}function F(M){var d=M.profileName;return function(){d&&!S.profiles[d]&&(S.profiles[d]={calls:0,hits:0}),S.profiles[d].calls++}}function A(M){return function(){var d=S.profiles,_=M.profileName;d[_]||(d[_]={calls:0,hits:0}),d[_].calls++,d[_].hits++}}function D(M){return M.displayName||M.name||"Anonymous "+S.anonymousProfileNameCounter++}function G(M,d){return M?(d/M*100).toFixed(4)+"%":"0.0000%"}function N(M){!S.isCollectingStats&&!x&&(console.warn('Stats are not currently being collected, please run "collectStats" to enable them.'),x=!0);var d=S.profiles;if(M){if(!d[M])return{calls:0,hits:0,usage:"0.0000%"};var _=d[M];return i({},_,{usage:G(_.calls,_.hits)})}var b=Object.keys(S.profiles).reduce(function(R,H){return R.calls+=d[H].calls,R.hits+=d[H].hits,R},{calls:0,hits:0});return i({},b,{profiles:Object.keys(d).reduce(function(R,H){return R[H]=N(H),R},{}),usage:G(b.calls,b.hits)})}function Q(M){return S.isCollectingStats?{onCacheAdd:F(M),onCacheHit:A(M)}:{}}var $={arguments:!0,callee:!0,caller:!0,constructor:!0,length:!0,name:!0,prototype:!0};function O(M,d,_){_===void 0&&(_=[]),Object.getOwnPropertyNames(M).forEach(function(b){if(!$[b]&&_.indexOf(b)===-1){var R=Object.getOwnPropertyDescriptor(M,b);R.get||R.set?Object.defineProperty(d,b,R):d[b]=M[b]}})}function I(M,d){var _=d.expirations,b=M.options,R=u(b.isEqual,b.isMatchingKey),H=M;H.clear=function(){var J=H._microMemoizeOptions.onCacheChange,L=H.cache;return L.keys.length=0,L.values.length=0,J&&J(L,H.options,H),!0},H.clearStats=function(){w(H.options.profileName)},H.get=function(J){var L=H._microMemoizeOptions.transformKey,P=H.cache,te=L?L(J):J,de=R(P.keys,te);return de!==-1?H.apply(this,J):void 0},H.getStats=function(){return N(H.options.profileName)},H.has=function(J){var L=H._microMemoizeOptions.transformKey,P=L?L(J):J;return R(H.cache.keys,P)!==-1},H.keys=function(){return H.cacheSnapshot.keys},H.remove=function(J){var L=H._microMemoizeOptions,P=L.onCacheChange,te=L.transformKey,de=H.cache,ge=R(de.keys,te?te(J):J);if(ge===-1)return!1;var ve=de.keys[ge];return de.keys.splice(ge,1),de.values.splice(ge,1),P&&P(de,H.options,H),v(_,ve,!0),!0},H.set=function(J,L){var P=H._microMemoizeOptions,te=H.cache,de=H.options,ge=P.onCacheAdd,ve=P.onCacheChange,Ce=P.transformKey,X=Ce?Ce(J):J,ie=R(te.keys,X);if(ie===-1){var xe=de.maxSize-1;te.size>xe&&(te.keys.length=xe,te.values.length=xe),te.keys.unshift(X),te.values.unshift(L),de.isPromise&&te.updateAsyncCache(H),ge&&ge(te,de,H),ve&&ve(te,de,H)}else{var Ae=te.keys[ie];te.values[ie]=L,ie>0&&te.orderByLru(Ae,L,ie),de.isPromise&&te.updateAsyncCache(H),typeof ve=="function"&&ve(te,de,H)}},H.values=function(){return H.cacheSnapshot.values}}function K(M,d){var _=d.expirations,b=d.options,R=d.originalFunction,H=M.options;Object.defineProperties(M,{_microMemoizeOptions:{configurable:!0,get:function(){return H}},cacheSnapshot:{configurable:!0,get:function(){var L=M.cache;return{keys:L.keys.slice(0),size:L.size,values:L.values.slice(0)}}},expirations:{configurable:!0,get:function(){return _}},expirationsSnapshot:{configurable:!0,get:function(){return _.slice(0)}},isMoized:{configurable:!0,get:function(){return!0}},options:{configurable:!0,get:function(){return b}},originalFunction:{configurable:!0,get:function(){return R}}});var J=M;O(R,J)}function oe(M,d){return I(M,d),K(M,d),M}var ae=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function ee(M,d,_){var b=M(i({maxArgs:2,isShallowEqual:!0},_,{isReact:!1}));d.displayName||(d.displayName=d.name||"Component");function R(H,J,L){this.props=H,this.context=J,this.updater=L,this.MoizedComponent=b(d)}return R.prototype.isReactComponent={},R.prototype.render=function(){return{$$typeof:ae,type:this.MoizedComponent,props:this.props,ref:null,key:null,_owner:null}},O(d,R,["contextType","contextTypes"]),R.displayName="Moized("+(d.displayName||d.name||"Component")+")",g(R,d.name,_.profileName),R}function U(M){return function(d){if(M>=d.length)return d;if(M===0)return[];if(M===1)return[d[0]];if(M===2)return[d[0],d[1]];if(M===3)return[d[0],d[1],d[2]];for(var _=[],b=0;b<M;b++)_[b]=d[b];return _}}function q(M,d){for(var _=M.length,b=0;b<_;++b)if(M[b]===d)return b+1;return 0}function z(){var M=[],d=[];return function(_,b){var R=typeof b;if(R==="function"||R==="symbol")return b.toString();if(typeof b=="object"){if(M.length){var H=q(M,this);H===0?M[M.length]=this:(M.splice(H),d.splice(H)),d[d.length]=_;var J=q(M,b);if(J!==0)return"[ref="+(d.slice(0,J).join(".")||".")+"]"}else M[0]=b,d[0]=_;return b}return""+b}}function k(M){var d=typeof M;return M&&(d==="object"||d==="function")?JSON.stringify(M,z()):M}function Z(M){for(var d="|",_=0;_<M.length;_++)d+=k(M[_])+"|";return[d]}function se(M){return typeof M.serializer=="function"?M.serializer:Z}function B(M,d){return M[0]===d[0]}function V(M){if(typeof M=="function")return function(d,_,b){return M(b.cache,b.options,b)}}function ne(M){return M.matchesArg||M.isDeepEqual&&n.deepEqual||M.isShallowEqual&&n.shallowEqual||n.sameValueZeroEqual}function ue(M){return M.matchesKey||M.isSerialized&&B||void 0}function he(M){return l(M.isSerialized&&se(M),typeof M.transformArgs=="function"&&M.transformArgs,typeof M.maxArgs=="number"&&U(M.maxArgs))}function Me(M){var d=M.options.updateCacheForKey,_=function(){for(var b=arguments.length,R=new Array(b),H=0;H<b;H++)R[H]=arguments[H];if(!d(R))return M.apply(this,R);var J=M.fn.apply(this,R);return M.set(R,J),J};return O(M,_),_}var _e=["matchesArg","isDeepEqual","isPromise","isReact","isSerialized","isShallowEqual","matchesKey","maxAge","maxArgs","maxSize","onCacheAdd","onCacheChange","onCacheHit","onExpire","profileName","serializer","updateCacheForKey","transformArgs","updateExpire"],T=function M(d,_){var b=_||s;if(f(d)){var R=d.originalFunction,H=h(d.options,b);return M(R,H)}if(typeof d=="object")return function(Je,re){if(typeof Je=="function"){var fe=h(d,re);return M(Je,fe)}var ye=h(d,Je);return M(ye)};if(b.isReact)return ee(M,d,b);var J=i({},s,b,{maxAge:typeof b.maxAge=="number"&&b.maxAge>=0?b.maxAge:s.maxAge,maxArgs:typeof b.maxArgs=="number"&&b.maxArgs>=0?b.maxArgs:s.maxArgs,maxSize:typeof b.maxSize=="number"&&b.maxSize>=0?b.maxSize:s.maxSize,profileName:b.profileName||D(d)}),L=[];J.matchesArg,J.isDeepEqual;var P=J.isPromise;J.isReact,J.isSerialized,J.isShallowEqual,J.matchesKey,J.maxAge,J.maxArgs;var te=J.maxSize,de=J.onCacheAdd,ge=J.onCacheChange,ve=J.onCacheHit;J.onExpire,J.profileName,J.serializer;var Ce=J.updateCacheForKey;J.transformArgs,J.updateExpire;var X=a(J,_e),ie=ne(J),xe=ue(J),Ae=E(L,J,ie,xe),Se=Q(J),Te=he(J),Pe=i({},X,{isEqual:ie,isMatchingKey:xe,isPromise:P,maxSize:te,onCacheAdd:V(o(de,Ae.onCacheAdd,Se.onCacheAdd)),onCacheChange:V(ge),onCacheHit:V(o(ve,Ae.onCacheHit,Se.onCacheHit)),transformKey:Te}),Re=t(d,Pe),Ne=oe(Re,{expirations:L,options:J,originalFunction:d});return Ce&&(Ne=Me(Ne)),g(Ne,d.name,b.profileName),Ne};T.clearStats=w,T.collectStats=C,T.compose=function(){return l.apply(void 0,arguments)||T},T.deep=T({isDeepEqual:!0}),T.getStats=N,T.infinite=T({maxSize:1/0}),T.isCollectingStats=function(){return S.isCollectingStats},T.isMoized=function(M){return typeof M=="function"&&!!M.isMoized},T.matchesArg=function(M){return T({matchesArg:M})},T.matchesKey=function(M){return T({matchesKey:M})};function W(M,d){if(d===!0)return T({maxAge:M,updateExpire:d});if(typeof d=="object"){var _=d.onExpire,b=d.updateExpire;return T({maxAge:M,onExpire:_,updateExpire:b})}return T(typeof d=="function"?{maxAge:M,onExpire:d,updateExpire:!0}:{maxAge:M})}return T.maxAge=W,T.maxArgs=function(M){return T({maxArgs:M})},T.maxSize=function(M){return T({maxSize:M})},T.profile=function(M){return T({profileName:M})},T.promise=T({isPromise:!0,updateExpire:!0}),T.react=T({isReact:!0}),T.serialize=T({isSerialized:!0}),T.serializeWith=function(M){return T({isSerialized:!0,serializer:M})},T.shallow=T({isShallowEqual:!0}),T.transformArgs=function(M){return T({transformArgs:M})},T.updateCacheForKey=function(M){return T({updateCacheForKey:M})},Object.defineProperty(T,"default",{configurable:!1,enumerable:!1,value:T,writable:!1}),T})})(Ow);const Nw=Hs;function zw(){return new Worker("/dat-garden-visualization/assets/graph-db-worker-8b7476cf.js",{type:"module"})}const md=Symbol("Comlink.proxy"),Bw=Symbol("Comlink.endpoint"),Fw=Symbol("Comlink.releaseProxy"),Vs=Symbol("Comlink.thrown"),gd=r=>typeof r=="object"&&r!==null||typeof r=="function",Uw={canHandle:r=>gd(r)&&r[md],serialize(r){const{port1:e,port2:t}=new MessageChannel;return yd(r,e),[t,[t]]},deserialize(r){return r.start(),bd(r)}},jw={canHandle:r=>gd(r)&&Vs in r,serialize({value:r}){let e;return r instanceof Error?e={isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:e={isError:!1,value:r},[e,[]]},deserialize(r){throw r.isError?Object.assign(new Error(r.value.message),r.value):r.value}},vd=new Map([["proxy",Uw],["throw",jw]]);function yd(r,e=self){e.addEventListener("message",function t(n){if(!n||!n.data)return;const{id:i,type:a,path:s}=Object.assign({path:[]},n.data),o=(n.data.argumentList||[]).map(Yr);let l;try{const c=s.slice(0,-1).reduce((h,f)=>h[f],r),u=s.reduce((h,f)=>h[f],r);switch(a){case"GET":l=u;break;case"SET":c[s.slice(-1)[0]]=Yr(n.data.value),l=!0;break;case"APPLY":l=u.apply(c,o);break;case"CONSTRUCT":{const h=new u(...o);l=Xs(h)}break;case"ENDPOINT":{const{port1:h,port2:f}=new MessageChannel;yd(r,f),l=Ww(h,[h])}break;case"RELEASE":l=void 0;break;default:return}}catch(c){l={value:c,[Vs]:0}}Promise.resolve(l).catch(c=>({value:c,[Vs]:0})).then(c=>{const[u,h]=Ys(c);e.postMessage(Object.assign(Object.assign({},u),{id:i}),h),a==="RELEASE"&&(e.removeEventListener("message",t),_d(e))})}),e.start&&e.start()}function Gw(r){return r.constructor.name==="MessagePort"}function _d(r){Gw(r)&&r.close()}function bd(r,e){return qs(r,[],e)}function Na(r){if(r)throw new Error("Proxy has been released and is not useable")}function qs(r,e=[],t=function(){}){let n=!1;const i=new Proxy(t,{get(a,s){if(Na(n),s===Fw)return()=>Fn(r,{type:"RELEASE",path:e.map(o=>o.toString())}).then(()=>{_d(r),n=!0});if(s==="then"){if(e.length===0)return{then:()=>i};const o=Fn(r,{type:"GET",path:e.map(l=>l.toString())}).then(Yr);return o.then.bind(o)}return qs(r,[...e,s])},set(a,s,o){Na(n);const[l,c]=Ys(o);return Fn(r,{type:"SET",path:[...e,s].map(u=>u.toString()),value:l},c).then(Yr)},apply(a,s,o){Na(n);const l=e[e.length-1];if(l===Bw)return Fn(r,{type:"ENDPOINT"}).then(Yr);if(l==="bind")return qs(r,e.slice(0,-1));const[c,u]=xd(o);return Fn(r,{type:"APPLY",path:e.map(h=>h.toString()),argumentList:c},u).then(Yr)},construct(a,s){Na(n);const[o,l]=xd(s);return Fn(r,{type:"CONSTRUCT",path:e.map(c=>c.toString()),argumentList:o},l).then(Yr)}});return i}function Hw(r){return Array.prototype.concat.apply([],r)}function xd(r){const e=r.map(Ys);return[e.map(t=>t[0]),Hw(e.map(t=>t[1]))]}const wd=new WeakMap;function Ww(r,e){return wd.set(r,e),r}function Xs(r){return Object.assign(r,{[md]:!0})}function Ys(r){for(const[e,t]of vd)if(t.canHandle(r)){const[n,i]=t.serialize(r);return[{type:"HANDLER",name:e,value:n},i]}return[{type:"RAW",value:r},wd.get(r)||[]]}function Yr(r){switch(r.type){case"HANDLER":return vd.get(r.name).deserialize(r.value);case"RAW":return r.value}}function Fn(r,e,t){return new Promise(n=>{const i=Vw();r.addEventListener("message",function a(s){!s.data||!s.data.id||s.data.id!==i||(r.removeEventListener("message",a),n(s.data))}),r.start&&r.start(),r.postMessage(Object.assign({id:i},e),t)})}function Vw(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const qw=async()=>{const r="https://dat-ecosystem.org/dat-garden-rake/",e=await fetch(`${r}index.json`).then(s=>s.json()),t=`${r}${e.latest}`,[n,i,a]=await Promise.all([fetch(t+"/../valuenetwork.json").then(s=>s.json()),fetch(t+"/../projects.json").then(s=>s.json()),fetch(t+"/../organizations.json").then(s=>s.json())]);return{valueNetworkData:n,projectsData:i,organizationsData:a}},Md=Nw.promise(qw),Sd=bd(new zw),Xw=r=>Math.max(4*Math.log(2*(r==null?void 0:r.length)**1.2),2),Yw=async()=>{const{valueNetworkData:r}=await Md(),e=Object.entries(r).map(([n,{dependents:i,owner:a,dependencies:s}])=>({project:n,owner:a,size:Xw(i)})),t=Object.entries(r).flatMap(([n,{dependents:i}])=>i==null?void 0:i.map(a=>({source:a,target:n}))).filter(n=>n);return{nodes:e,links:t}},$w=async()=>{const r=await Md();return await Sd.buildGraph(r)},{doQuery:Kw,buildGraph:iM}=Sd,Jw=r=>`
  PREFIX dependson: <http://dat-ecosystem.org#dependson>
  SELECT DISTINCT ?dependent ?dependency WHERE {
    ?dependency dependson:* <${r}> .
    ?dependent dependson: ?dependency .
  }
`,Ed=(r,e,t)=>r+(e-r)*t;document.querySelector("#app").innerHTML=`
  <div id='graph-viz'></div>
`;const Zw=new Lx({lightness:[.35,.5,.65]}),Ad=({source:r,target:e})=>`${r.project||r}--${e.project||e}`,bi={},za={},xi={},$s={};window.nodeAnimations=za;const Ks=(r,{selected:e,highlighted:t})=>{if(!bi[r])return;const n=za[r],i=(n==null?void 0:n.state)||{};za[r]=dd({from:i.latest||0,to:e||t?1:0,duration:500,onUpdate:a=>{const s=bi[r];i.latest=a;const o=1+(Js-1)*a;s==null||s.scale.set(o,o,o),s==null||s.material.color.set(e?Ba:t?Fa:Ua({owner:r}))},onStart:()=>{var a;n&&n.stop(),(a=bi[r])==null||a.material.color.set(e?Ba:t?Fa:Ua({owner:r}))}}),za[r].state=i},Td=(r,{highlighted:e})=>{if(!xi[r])return;const t=$s[r],n=(t==null?void 0:t.state)||{};$s[r]=dd({from:n.latest||0,to:e?1:0,duration:500,onUpdate:i=>{const a=xi[r];n.latest=i;const s=Ed(1,Js,i);a==null||a.scale.set(s,s,1),a.material.opacity=Ed(.1,1,i)},onStart:()=>{t&&t.stop(),xi[r]}}),$s[r].state=n},Qw=1,Js=2,Un=new Set,Zs=new Set;let Ba=null,Fa=null,wi=null;const Cd=Cx().backgroundColor("#101020").nodeRelSize(Qw).nodeId("project").nodeVal(r=>Un.has(r.project)||r===wi?r.size*Js:r.size).nodeColor(r=>Un.has(r.project)?r===wi?Ba:Fa:Ua(r)).nodeLabel("project").nodeOpacity(.9).nodeThreeObject(r=>{const e=new ri(r.size,32,32),t=new Et(e,new Hv({color:Ua(r)}));return bi[r.project]=t,t.tSelected=0,t.node=r,t}).linkThreeObject(r=>{const e=new vn(1,1,1),t=new Fi({color:"rgb(255,255,255)",opacity:.1,transparent:!0}),n=new Et(e,t);return xi[Ad(r)]=n,n}).linkColor(()=>"rgba(255,255,255,0.2)").linkWidth(r=>Zs.has(r)?4:1).d3VelocityDecay(.3);function Ua(r){return Zw.hex(r.owner||"")}Cd.onNodeClick(r=>{if(!(!r&&!Un.size||r&&wi===r)){if(Un.clear(),Zs.clear(),Ba="deeppink",Fa="teal",r){Un.add(r);const e=Jw(r.project);Object.entries(bi).forEach(([t,n])=>{Ks(t,{selected:t===r.project,highlighted:!1})}),Object.entries(xi).forEach(([t,n])=>{Td(t,{highlighted:!1})}),Kw(e,Xs((t,n)=>{r===wi&&n(["dependent","dependency"]).then(({dependent:i,dependency:a})=>{const s=Ad({source:i.value,target:a.value});Un.add(a.value),Zs.add(s),Ks(i.value,{selected:i.value===r.project,highlighted:!0}),Ks(a.value,{selected:a.value===r.project,highlighted:!0}),Td(s,{highlighted:!0})})}),Xs(()=>{console.log("query ended:",e)}))}wi=r||null}}),$w(),Cd(document.getElementById("graph-viz")).graphData(await Yw())})();
