var b=Object.defineProperty,w=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var c=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))E.call(e,o)&&c(t,o,e[o]);if(d)for(var o of d(e))V.call(e,o)&&c(t,o,e[o]);return t},m=(t,e)=>w(t,B(e));import{s as p}from"./index.1dac168e.js";import{d as C,q as k,r as f,aO as I,o as a,l as s,a as i,w as J,ao as h,v}from"./vendor.1f8f89c2.js";const U=v("\u53EA\u6709admin\u53EF\u770B"),j=[U],A=v("\u53EA\u6709test\u53EF\u770B"),D=[A],F={name:"permissionButton"},q=C(m(_({},F),{setup(t){const e=k(p.getItem("info").username||"admin");function o(n){p.setItem("info",{username:n,accessToken:`eyJhbGciOiJIUzUxMiJ9.${n}`}),window.location.reload()}return(n,l)=>{const r=f("el-radio-button"),g=f("el-radio-group"),u=I("auth");return a(),s("div",null,[i(g,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=x=>e.value=x),onChange:o},{default:J(()=>[i(r,{label:"admin"}),i(r,{label:"test"})]),_:1},8,["modelValue"]),h((a(),s("p",null,j)),[[u,"v-admin"]]),h((a(),s("p",null,D)),[[u,"v-test"]])])}}}));export{q as default};
