import{a as o,i as t,F as c,S as i,t as n}from"./index.d61504ba.js";const u=n('<ul class="error-messages"></ul>'),m=n("<li> </li>");var d=r=>o(i,{get when(){return r.errors},get children(){const s=u.cloneNode(!0);return t(s,o(c,{get each(){return Object.keys(r.errors)},children:l=>(()=>{const e=m.cloneNode(!0),a=e.firstChild;return t(e,l,a),t(e,()=>r.errors[l],null),e})()})),s}});export{d as L};
