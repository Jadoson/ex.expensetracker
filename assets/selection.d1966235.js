import{i as l}from"./QBtn.55eb2030.js";import{Z as m,o as s,g as r,_ as u}from"./index.78451add.js";function f(){let e=null;const o=r();function t(){e!==null&&(clearTimeout(e),e=null)}return m(t),s(t),{removeTimeout:t,registerTimeout(n,i){t(),l(o)===!1&&(e=setTimeout(()=>{e=null,n()},i))}}}function d(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),u.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{d as c,f as u};
