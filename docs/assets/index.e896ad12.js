var b=Object.defineProperty;var E=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var d=(o,t,e)=>(E(o,typeof t!="symbol"?t+"":t,e),e);const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}};q();function v(o,t=0,e=1){return Array.from({length:o}).map(()=>{const s=Math.floor(Math.random()*e);return Math.max(t,Math.min(s,e))})}function L(o,t){return Math.floor(t*(o/100))}function C(o){return new Promise(t=>setTimeout(t,o))}class D{constructor(t){d(this,"canvas");d(this,"ctx");this.canvas=t,this.canvas.width=750,this.canvas.height=500,this.ctx=t.getContext("2d")}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}drawData(t){var n;this.clear(),this.ctx.fillStyle=(n=window.getComputedStyle(this.canvas).color)!=null?n:"red";const e=this.canvas.width/t.length;let s=0;for(const r of t){const c=L(r,this.canvas.height),x=this.canvas.height-c;this.ctx.fillRect(s,x,e,c),s+=e}}}class M{constructor(t=[]){this.queue=t}[Symbol.iterator](){return this}next(){const t=this.queue.shift(),e=!this.queue.length;return{value:t,done:e}}append(t){this.queue.push(t)}}class y extends CustomEvent{constructor(t){super("sort",{detail:[...t]})}}class w extends EventTarget{emitSort(t){this.dispatchEvent(new y(t))}}class A extends w{sort(t){let e=!1;for(let s=0;s<t.length;s++){e=!1;for(let n=0;n<t.length-1;n++)if(t[n]>t[n+1]){let r=t[n+1];t[n+1]=t[n],t[n]=r,e=!0,this.emitSort(t)}if(!e)return t}return t}}class O extends w{sort(t){for(let e=1;e<t.length;e++){let s=e;for(;t[s]<t[s-1];){let n=t[s];t[s]=t[s-1],t[s-1]=n,this.emitSort(t),s--}}return t}}const N=document.querySelector("#canvas"),P=document.querySelector("#reset-button"),h=document.querySelector("#sort-button"),l=document.querySelector("#algorithm-select"),a=new D(N),S=new M,j=10,u=new Map;u.set("bubble",new A);u.set("insertion",new O);let m=u.get("bubble");u.forEach((o,t)=>{const e=document.createElement("option");e.value=t,e.textContent=`${t} sort`,l==null||l.append(e)});l.addEventListener("change",o=>{m=u.get(l.value)});let i=v(100,0,100),p=0;a.drawData(i);g();async function z(){for(const o of S)console.debug("drawing"),a.drawData(o),p++,g(),await C(j);console.log("done"),a.drawData(i)}function g(){const o=document.querySelector("#size"),t=document.querySelector("#ops");o.textContent=String(i.length),t.textContent=String(p)}let f=!1;h==null||h.addEventListener("click",o=>{if(f)return;m.addEventListener("sort",e=>{const s=e.detail;S.append(s)}),f=!0;const t=m.sort(i);console.log(t),z().then(()=>{f=!1})});P.addEventListener("click",o=>{p=0,g(),i=v(100,0,100),a.drawData(i)});
