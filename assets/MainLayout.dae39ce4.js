import{h as X,a as Ae,b as be,c as Re,Q as Ee,d as Ie}from"./QBtn.9a8f75d0.js";import{c as W,a as i,h as k,i as fe,e as O,l as Y,r as q,w as h,o as ve,g as I,d as xe,n as we,f as Ne,p as qe,j as je,k as Ue,m as Ke,q as Ge,t as U,u as Je,v as Te,x as G,y as ue,z as C,A as p,B as Xe,C as J,D as se,E as Ye,F as Ze,G as et,H as tt,I as at,J as lt}from"./index.68ae41e8.js";import{Q as ce}from"./touch.30139ba5.js";import{Q as de}from"./QItemLabel.2532fbf3.js";import{Q as nt}from"./QSeparator.445704a7.js";import{u as ot,a as it,b as rt,c as ut,d as K,e as st,s as ct,g as dt,f as ft,h as vt,i as ie,Q as _e,j as pe,k as mt}from"./QItemSection.a82bebc0.js";import{u as ht}from"./selection.913076d6.js";import{u as gt,a as yt}from"./use-dark.7f250f5f.js";import{T as re}from"./TouchPan.c97ff413.js";import{_ as bt}from"./ButtonSignOut.f769a430.js";var wt=W({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:m}){const n=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:n.value},X(m.default))}}),pt=W({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const n=i(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:n.value,role:"toolbar"},X(m.default))}}),kt=W({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:n}){const{proxy:{$q:r}}=I(),l=fe(Y,O);if(l===O)return console.error("QHeader needs to be child of QLayout"),O;const c=q(parseInt(e.heightHint,10)),g=q(!0),w=i(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||r.platform.is.ios&&l.isContainer.value===!0),$=i(()=>{if(e.modelValue!==!0)return 0;if(w.value===!0)return g.value===!0?c.value:0;const o=c.value-l.scroll.value.position;return o>0?o:0}),y=i(()=>e.modelValue!==!0||w.value===!0&&g.value!==!0),a=i(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),L=i(()=>"q-header q-layout__section--marginal "+(w.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=i(()=>{const o=l.rows.value.top,T={};return o[0]==="l"&&l.left.space===!0&&(T[r.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(T[r.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),T});function d(o,T){l.update("header",o,T)}function f(o,T){o.value!==T&&(o.value=T)}function Q({height:o}){f(c,o),d("size",o)}function x(o){a.value===!0&&f(g,!0),n("focusin",o)}h(()=>e.modelValue,o=>{d("space",o),f(g,!0),l.animate()}),h($,o=>{d("offset",o)}),h(()=>e.reveal,o=>{o===!1&&f(g,e.modelValue)}),h(g,o=>{l.animate(),n("reveal",o)}),h(l.scroll,o=>{e.reveal===!0&&f(g,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const v={};return l.instances.header=v,e.modelValue===!0&&d("size",c.value),d("space",e.modelValue),d("offset",$.value),ve(()=>{l.instances.header===v&&(l.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const o=Ae(m.default,[]);return e.elevated===!0&&o.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(k(ce,{debounce:0,onResize:Q})),k("header",{class:L.value,style:S.value,onFocusin:x},o)}}});const ke=150;var St=W({name:"QDrawer",inheritAttrs:!1,props:{...ot,...gt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...it,"onLayout","miniState"],setup(e,{slots:m,emit:n,attrs:r}){const l=I(),{proxy:{$q:c}}=l,g=yt(e,c),{preventBodyScroll:w}=st(),{registerTimeout:$,removeTimeout:y}=ht(),a=fe(Y,O);if(a===O)return console.error("QDrawer needs to be child of QLayout"),O;let L,S=null,d;const f=q(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),Q=i(()=>e.mini===!0&&f.value!==!0),x=i(()=>Q.value===!0?e.miniWidth:e.width),v=q(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),o=i(()=>e.persistent!==!0&&(f.value===!0||Ce.value===!0));function T(t,u){if(H(),t!==!1&&a.animate(),z(0),f.value===!0){const _=a.instances[N.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),M(1),a.isContainer.value!==!0&&w(!0)}else M(0),t!==!1&&le(!1);$(()=>{t!==!1&&le(!0),u!==!0&&n("show",t)},ke)}function s(t,u){R(),t!==!1&&a.animate(),M(0),z(F.value*x.value),ne(),u!==!0?$(()=>{n("hide",t)},ke):y()}const{show:b,hide:B}=rt({showing:v,hideOnRouteChange:o,handleShow:T,handleHide:s}),{addToHistory:H,removeFromHistory:R}=ut(v,B,o),D={belowBreakpoint:f,hide:B},P=i(()=>e.side==="right"),F=i(()=>(c.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),me=q(0),A=q(!1),Z=q(!1),he=q(x.value*F.value),N=i(()=>P.value===!0?"left":"right"),ee=i(()=>v.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),te=i(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(P.value?"R":"L")!==-1||c.platform.is.ios===!0&&a.isContainer.value===!0),E=i(()=>e.overlay===!1&&v.value===!0&&f.value===!1),Ce=i(()=>e.overlay===!0&&v.value===!0&&f.value===!1),$e=i(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&A.value===!1?" hidden":"")),Be=i(()=>({backgroundColor:`rgba(0,0,0,${me.value*.4})`})),ge=i(()=>P.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Le=i(()=>P.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ze=i(()=>{const t={};return a.header.space===!0&&ge.value===!1&&(te.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Le.value===!1&&(te.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Qe=i(()=>{const t={width:`${x.value}px`,transform:`translateX(${he.value}px)`};return f.value===!0?t:Object.assign(t,ze.value)}),Pe=i(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Oe=i(()=>`q-drawer q-drawer--${e.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(g.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${Q.value===!0?"mini":"standard"}`+(te.value===!0||E.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ge.value===!0?" q-drawer--top-padding":""))),Me=i(()=>{const t=c.lang.rtl===!0?e.side:N.value;return[[re,We,void 0,{[t]:!0,mouse:!0}]]}),Ve=i(()=>{const t=c.lang.rtl===!0?N.value:e.side;return[[re,ye,void 0,{[t]:!0,mouse:!0}]]}),He=i(()=>{const t=c.lang.rtl===!0?N.value:e.side;return[[re,ye,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){Fe(f,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}h(f,t=>{t===!0?(L=v.value,v.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&L!==!1&&(v.value===!0?(z(0),M(0),ne()):b(!1))}),h(()=>e.side,(t,u)=>{a.instances[u]===D&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[t]=D,a[t].size=x.value,a[t].space=E.value,a[t].offset=ee.value}),h(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),h(()=>e.behavior+e.breakpoint,ae),h(a.isContainer,t=>{v.value===!0&&w(t!==!0),t===!0&&ae()}),h(a.scrollbarWidth,()=>{z(v.value===!0?0:void 0)}),h(ee,t=>{V("offset",t)}),h(E,t=>{n("onLayout",t),V("space",t)}),h(P,()=>{z()}),h(x,t=>{z(),oe(e.miniToOverlay,t)}),h(()=>e.miniToOverlay,t=>{oe(t,x.value)}),h(()=>c.lang.rtl,()=>{z()}),h(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(De(),a.animate())}),h(Q,t=>{n("miniState",t)});function z(t){t===void 0?we(()=>{t=v.value===!0?0:x.value,z(F.value*t)}):(a.isContainer.value===!0&&P.value===!0&&(f.value===!0||Math.abs(t)===x.value)&&(t+=F.value*a.scrollbarWidth.value),he.value=t)}function M(t){me.value=t}function le(t){const u=t===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function De(){S!==null&&clearTimeout(S),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,S=setTimeout(()=>{S=null,Z.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function We(t){if(v.value!==!1)return;const u=x.value,_=K(t.distance.x,0,u);if(t.isFinal===!0){_>=Math.min(75,u)===!0?b():(a.animate(),M(0),z(F.value*u)),A.value=!1;return}z((c.lang.rtl===!0?P.value!==!0:P.value)?Math.max(u-_,0):Math.min(0,_-u)),M(K(_/u,0,1)),t.isFirst===!0&&(A.value=!0)}function ye(t){if(v.value!==!0)return;const u=x.value,_=t.direction===e.side,j=(c.lang.rtl===!0?_!==!0:_)?K(t.distance.x,0,u):0;if(t.isFinal===!0){Math.abs(j)<Math.min(75,u)===!0?(a.animate(),M(1),z(0)):B(),A.value=!1;return}z(F.value*j),M(K(1-j/u,0,1)),t.isFirst===!0&&(A.value=!0)}function ne(){w(!1),le(!0)}function V(t,u){a.update(e.side,t,u)}function Fe(t,u){t.value!==u&&(t.value=u)}function oe(t,u){V("size",t===!0?e.miniWidth:u)}return a.instances[e.side]=D,oe(e.miniToOverlay,x.value),V("space",E.value),V("offset",ee.value),e.showIfAbove===!0&&e.modelValue!==!0&&v.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),xe(()=>{n("onLayout",E.value),n("miniState",Q.value),L=e.showIfAbove===!0;const t=()=>{(v.value===!0?T:s)(!1,!0)};if(a.totalWidth.value!==0){we(t);return}d=h(a.totalWidth,()=>{d(),d=void 0,v.value===!1&&e.showIfAbove===!0&&f.value===!1?b(!1):t()})}),ve(()=>{d!==void 0&&d(),S!==null&&(clearTimeout(S),S=null),v.value===!0&&ne(),a.instances[e.side]===D&&(a.instances[e.side]=void 0,V("size",0),V("offset",0),V("space",!1))}),()=>{const t=[];f.value===!0&&(e.noSwipeOpen===!1&&t.push(Ne(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Me.value)),t.push(be("div",{ref:"backdrop",class:$e.value,style:Be.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&v.value===!0,()=>He.value)));const u=Q.value===!0&&m.mini!==void 0,_=[k("div",{...r,key:""+u,class:[Pe.value,r.class]},u===!0?m.mini():X(m.default))];return e.elevated===!0&&v.value===!0&&_.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(be("aside",{ref:"content",class:Oe.value,style:Qe.value},_,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>Ve.value)),k("div",{class:"q-drawer-container"},t)}}}),xt=W({name:"QPageContainer",setup(e,{slots:m}){const{proxy:{$q:n}}=I(),r=fe(Y,O);if(r===O)return console.error("QPageContainer needs to be child of QLayout"),O;qe(je,!0);const l=i(()=>{const c={};return r.header.space===!0&&(c.paddingTop=`${r.header.size}px`),r.right.space===!0&&(c[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(c.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(c[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),c});return()=>k("div",{class:"q-page-container",style:l.value},X(m.default))}});const{passive:Se}=Ke,qt=["both","horizontal","vertical"];var Tt=W({name:"QScrollObserver",props:{axis:{type:String,validator:e=>qt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ct},emits:["scroll"],setup(e,{emit:m}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,l,c;h(()=>e.scrollTarget,()=>{$(),w()});function g(){r!==null&&r();const L=Math.max(0,ft(l)),S=vt(l),d={top:L-n.position.top,left:S-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const f=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:L,left:S},n.directionChanged=n.direction!==f,n.delta=d,n.directionChanged===!0&&(n.direction=f,n.inflectionPoint=n.position),m("scroll",{...n})}function w(){l=dt(c,e.scrollTarget),l.addEventListener("scroll",y,Se),y(!0)}function $(){l!==void 0&&(l.removeEventListener("scroll",y,Se),l=void 0)}function y(L){if(L===!0||e.debounce===0||e.debounce==="0")g();else if(r===null){const[S,d]=e.debounce?[setTimeout(g,e.debounce),clearTimeout]:[requestAnimationFrame(g),cancelAnimationFrame];r=()=>{d(S),r=null}}}const{proxy:a}=I();return h(()=>a.$q.lang.rtl,g),xe(()=>{c=a.$el.parentNode,w()}),ve(()=>{r!==null&&r(),$()}),Object.assign(a,{trigger:y,getPosition:()=>n}),Ue}}),_t=W({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:m,emit:n}){const{proxy:{$q:r}}=I(),l=q(null),c=q(r.screen.height),g=q(e.container===!0?0:r.screen.width),w=q({position:0,direction:"down",inflectionPoint:0}),$=q(0),y=q(Ge.value===!0?0:ie()),a=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),L=i(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),S=i(()=>y.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${y.value}px`}:null),d=i(()=>y.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${y.value}px`,width:`calc(100% + ${y.value}px)`}:null);function f(s){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};w.value=b,e.onScroll!==void 0&&n("scroll",b)}}function Q(s){const{height:b,width:B}=s;let H=!1;c.value!==b&&(H=!0,c.value=b,e.onScrollHeight!==void 0&&n("scrollHeight",b),v()),g.value!==B&&(H=!0,g.value=B),H===!0&&e.onResize!==void 0&&n("resize",s)}function x({height:s}){$.value!==s&&($.value=s,v())}function v(){if(e.container===!0){const s=c.value>$.value?ie():0;y.value!==s&&(y.value=s)}}let o=null;const T={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:l,height:c,containerHeight:$,scrollbarWidth:y,totalWidth:i(()=>g.value+y.value),rows:i(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:U({size:0,offset:0,space:!1}),right:U({size:300,offset:0,space:!1}),footer:U({size:0,offset:0,space:!1}),left:U({size:300,offset:0,space:!1}),scroll:w,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,b,B){T[s][b]=B}};if(qe(Y,T),ie()>0){let B=function(){s=null,b.classList.remove("hide-scrollbar")},H=function(){if(s===null){if(b.scrollHeight>r.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(s);s=setTimeout(B,300)},R=function(D){s!==null&&D==="remove"&&(clearTimeout(s),B()),window[`${D}EventListener`]("resize",H)},s=null;const b=document.body;h(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),Je(()=>{R("remove")})}return()=>{const s=Re(m.default,[k(Tt,{onScroll:f}),k(ce,{onResize:Q})]),b=k("div",{class:a.value,style:L.value,ref:e.container===!0?void 0:l,tabindex:-1},s);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:l},[k(ce,{onResize:x}),k("div",{class:"absolute-full",style:S.value},[k("div",{class:"scroll",style:d.value},[b])])]):b}}});const Ct=Te({__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup(e){return(m,n)=>(G(),ue(_e,{clickable:"",to:m.link},{default:C(()=>[m.icon?(G(),ue(pe,{key:0,avatar:""},{default:C(()=>[p(Ee,{name:m.icon},null,8,["name"])]),_:1})):Xe("",!0),p(pe,null,{default:C(()=>[p(de,null,{default:C(()=>[J(se(m.title),1)]),_:1}),p(de,{caption:""},{default:C(()=>[J(se(m.caption),1)]),_:1})]),_:1})]),_:1},8,["to"]))}}),Wt=Te({__name:"MainLayout",setup(e){const m=[{title:"Account",caption:"Manage my account settings",icon:"face",link:"/"},{title:"Expenses",caption:"Track my expenses",icon:"toll",link:"/expenses"},{title:"Categories",caption:"Manage my expense categories",icon:"settings",link:"/categories"}],n=q(!1);function r(){n.value=!n.value}return(l,c)=>{const g=Ye("router-view");return G(),ue(_t,{view:"lHh Lpr lFf"},{default:C(()=>[p(kt,{elevated:""},{default:C(()=>[p(pt,null,{default:C(()=>[p(Ie,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:r}),p(wt,null,{default:C(()=>[J("Expense Tracker App \u{1F4B8} ")]),_:1}),Ze("div",null,"Built with Quasar v"+se(l.$q.version),1)]),_:1})]),_:1}),p(St,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=w=>n.value=w),"show-if-above":"",bordered:""},{default:C(()=>[p(mt,null,{default:C(()=>[p(de,{header:""},{default:C(()=>[J(" Essential Links ")]),_:1}),(G(),et(lt,null,tt(m,w=>p(Ct,at({key:w.title,ref_for:!0},w),null,16)),64)),p(nt),p(_e,{class:"justify-center q-py-lg"},{default:C(()=>[p(bt)]),_:1})]),_:1})]),_:1},8,["modelValue"]),p(xt,null,{default:C(()=>[p(g)]),_:1})]),_:1})}}});export{Wt as default};