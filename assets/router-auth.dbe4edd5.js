import{b as s,s as u}from"./index.68ae41e8.js";var f=s(({router:a})=>{a.beforeEach(e=>{if(e.matched.some(t=>{var r;return(r=t.meta.requiresAuth)!=null?r:!1})&&!u.value)return{name:"auth",query:{redirect:e.fullPath}}})});export{f as default};