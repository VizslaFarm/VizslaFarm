(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[26],{1015:function(e,t,n){"use strict";n.d(t,"b",(function(){return B})),n.d(t,"a",(function(){return L.a}));var c=n(6),i=n(2),r=n(4),s=n(1),o=n(49),a=n(5),j=n(163),l=n(7),b=n(226),d=n(19),u=n(65),x=n(12),O=n(498),h=n(0),p=function(e){var t=e.onDismiss,n=Object(i.useState)(!1),c=Object(a.a)(n,2),r=c[0],o=c[1],p=Object(j.j)(),m=Object(a.a)(p,2),f=m[0],g=m[1],v=Object(j.k)(),w=Object(a.a)(v,2),y=w[0],k=w[1],S=Object(j.d)(),D=Object(a.a)(S,2),T=D[0],q=D[1],C=Object(j.i)(),I=Object(a.a)(C,2),W=I[0],A=I[1],M=Object(j.c)(),R=Object(a.a)(M,2),z=(R[0],R[1],Object(b.d)().onChangeRecipient),B=Object(l.b)().t;return r?Object(h.jsx)(s.vb,{title:B("Are you sure?"),onBack:function(){return o(!1)},onDismiss:t,style:{maxWidth:"420px"},children:Object(h.jsxs)(s.xb,{children:[Object(h.jsx)(s.sb,{variant:"warning",mb:"24px",children:Object(h.jsx)(s.fc,{children:B("Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.")})}),Object(h.jsx)(s.fc,{mb:"24px",children:B("Only use this mode if you know what you\u2019re doing.")}),Object(h.jsx)(s.r,{variant:"danger",id:"confirm-expert-mode",onClick:function(){"confirm"===window.prompt('Please type the word "confirm" to enable expert mode.')&&(q(),o(!1))},children:B("Turn On Expert Mode")})]})}):Object(h.jsx)(s.vb,{title:B("Settings"),onDismiss:t,children:Object(h.jsx)(s.xb,{children:Object(h.jsxs)(d.a,{gap:"md",style:{padding:"1rem"},children:[Object(h.jsx)(s.fc,{bold:!0,fontSize:"20px",children:B("Transaction Settings")}),Object(h.jsx)(O.a,{rawSlippage:f,setRawSlippage:g,deadline:y,setDeadline:k}),Object(h.jsx)(s.fc,{bold:!0,fontSize:"20px",mt:"32px",children:B("Interface Settings")}),Object(h.jsxs)(x.b,{children:[Object(h.jsxs)(x.c,{children:[Object(h.jsx)(s.fc,{fontSize:"14px",children:B("Toggle Expert Mode")}),Object(h.jsx)(u.a,{text:B("Bypasses confirmation modals and allows high slippage trades. Use at your own risk."),ml:"4px"})]}),Object(h.jsx)(s.Hb,{id:"toggle-expert-mode-button",checked:T,onChange:T?function(){z(null),q()}:function(){return o(!0)}})]}),Object(h.jsxs)(x.b,{children:[Object(h.jsxs)(x.c,{children:[Object(h.jsx)(s.fc,{fontSize:"14px",children:B("Disable Multihops")}),Object(h.jsx)(u.a,{text:B("Restricts swaps to direct pairs only."),ml:"4px"})]}),Object(h.jsx)(s.Hb,{id:"toggle-disable-multihop-button",checked:W,onChange:function(){A(!W)}})]})]})})})};function m(){var e=Object(s.Dc)(Object(h.jsx)(p,{})),t=Object(a.a)(e,1)[0],n=Object(j.d)(),c=Object(a.a)(n,1)[0];return Object(h.jsx)(s.Eb,{show:c,children:Object(h.jsx)(s.r,{variant:"text",p:0,onClick:t,id:"open-settings-dialog-button",children:Object(h.jsx)(s.oc,{color:"primary",width:"24px"})})})}var f,g,v=n(15),w=n(27),y=n(245),k=n(520),S=n(72),D=n(150),T=r.e.div(f||(f=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),q=r.e.div(g||(g=Object(c.a)(["\n  color: ",";\n"])),(function(e){var t=e.pending,n=e.success,c=e.theme;return t?c.colors.primary:n?c.colors.success:c.colors.failure}));function C(e){var t,n,c=e.tx,i=Object(v.a)().chainId,r=null===c||void 0===c?void 0:c.summary,o=!(null===c||void 0===c?void 0:c.receipt),a=!o&&c&&(1===(null===(t=c.receipt)||void 0===t?void 0:t.status)||"undefined"===typeof(null===(n=c.receipt)||void 0===n?void 0:n.status));return i?Object(h.jsxs)(T,{pending:o,success:a,children:[Object(h.jsx)(s.ib,{href:Object(S.e)(c.hash,"transaction",i),children:null!==r&&void 0!==r?r:c.hash}),Object(h.jsx)(q,{pending:o,success:a,children:o?Object(h.jsx)(D.a,{}):a?Object(h.jsx)(s.F,{color:"success"}):Object(h.jsx)(s.L,{color:"failure"})})]}):null}function I(e,t){return t.addedTime-e.addedTime}function W(e){return Object(h.jsx)(s.W,{flexDirection:"column",children:e.map((function(e){return Object(h.jsx)(C,{tx:e},e.hash+e.addedTime)}))})}var A,M=function(e){var t=e.onDismiss,n=Object(v.a)(),c=n.account,r=n.chainId,o=Object(w.b)(),a=Object(y.b)(),j=Object(l.b)().t,b=Object(i.useMemo)((function(){return Object.values(a).filter(y.a).sort(I)}),[a]),d=b.filter((function(e){return!e.receipt})),u=b.filter((function(e){return e.receipt})),O=Object(i.useCallback)((function(){r&&o(Object(k.b)({chainId:r}))}),[o,r]);return Object(h.jsx)(s.vb,{title:j("Recent Transactions"),onDismiss:t,children:c&&Object(h.jsx)(s.xb,{children:d.length||u.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(x.a,{mb:"1rem",style:{justifyContent:"space-between"},children:[Object(h.jsx)(s.fc,{children:j("Recent Transactions")}),Object(h.jsx)(s.r,{variant:"tertiary",scale:"xs",onClick:O,children:j("clear all")})]}),W(d),W(u)]}):Object(h.jsx)(s.fc,{children:j("No recent transactions")})})})},R=function(){var e=Object(s.Dc)(Object(h.jsx)(M,{})),t=Object(a.a)(e,1)[0];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(s.r,{variant:"text",p:0,onClick:t,ml:"16px",children:Object(h.jsx)(s.ab,{color:"primary",width:"24px"})})})},z=Object(r.e)(s.W)(A||(A=Object(c.a)(["\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),B=function(e){var t=e.title,n=e.subtitle,c=e.helper,i=e.backTo,r=e.noConfig,a=void 0!==r&&r;return Object(h.jsxs)(z,{children:[Object(h.jsxs)(s.W,{alignItems:"center",mr:a?0:"16px",children:[i&&Object(h.jsx)(s.bb,{as:o.a,to:i,children:Object(h.jsx)(s.b,{width:"32px"})}),Object(h.jsxs)(s.W,{flexDirection:"column",children:[Object(h.jsx)(s.Y,{as:"h2",mb:"8px",children:t}),Object(h.jsxs)(s.W,{alignItems:"center",children:[c&&Object(h.jsx)(u.a,{text:c,mr:"4px"}),Object(h.jsx)(s.fc,{color:"textSubtle",fontSize:"14px",children:n})]})]})]}),!a&&Object(h.jsxs)(s.W,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(R,{})]})]})},L=n(494)},1479:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var c,i,r=n(5),s=n(6),o=n(2),a=n(4),j=n(1),l=n(94),b=n(49),d=n(7),u=n(15),x=n(506),O=n(165),h=n(224),p=n(163),m=n(142),f=n(1015),g=n(382),v=n(0),w=Object(a.e)(j.v)(c||(c=Object(s.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.dropdownDeep}));a.e.nav(i||(i=Object(s.a)(["\n  margin-top: 40px;\n"])));function y(){var e=Object(u.a)().account,t=Object(d.b)().t,n=(Object(l.h)(),Object(p.h)()),c=Object(o.useMemo)((function(){return n.map((function(e){return{liquidityToken:Object(p.a)(e),tokens:e}}))}),[n]),i=Object(o.useMemo)((function(){return c.map((function(e){return e.liquidityToken}))}),[c]),s=Object(O.f)(null!==e&&void 0!==e?e:void 0,i),a=Object(r.a)(s,2),y=a[0],k=a[1],S=Object(o.useMemo)((function(){return c.filter((function(e){var t,n=e.liquidityToken;return null===(t=y[n.address])||void 0===t?void 0:t.greaterThan("0")}))}),[c,y]),D=Object(h.c)(S.map((function(e){return e.tokens}))),T=k||(null===D||void 0===D?void 0:D.length)<S.length||(null===D||void 0===D?void 0:D.some((function(e){return!e}))),q=D.map((function(e){return Object(r.a)(e,2)[1]})).filter((function(e){return Boolean(e)}));return Object(v.jsxs)(g.a,{children:[Object(v.jsxs)(j.Xb,{component:Object(v.jsxs)(j.r,{mb:"15px",variant:"tertiary",endIcon:Object(v.jsx)(j.G,{}),children:[Object(v.jsx)("img",{src:"/images/routers/2.png",alt:"router",height:"24px",width:"24px"}),Object(v.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),"ApeSwap"]}),children:[Object(v.jsxs)(j.Yb,{to:"/biswapliquidity",as:b.a,color:"text",children:[Object(v.jsx)("img",{src:"/images/routers/5.png",alt:"router",height:"24px",width:"24px"}),Object(v.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),t("Biswap")]}),Object(v.jsxs)(j.Yb,{to:"/liquidity",as:b.a,color:"text",children:[Object(v.jsx)("img",{src:"/images/routers/1.png",alt:"router",height:"24px",width:"24px"}),Object(v.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),t("PancakeSwap")]}),Object(v.jsxs)(j.Yb,{to:"/radioliquidity",as:b.a,color:"text",children:[Object(v.jsx)("img",{src:"/images/routers/4.png",alt:"router",height:"24px",width:"24px"}),Object(v.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),t("RadioShack")]})]}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(f.b,{title:t("Your Liquidity"),subtitle:t("Remove liquidity to receive tokens back")}),Object(v.jsxs)(w,{children:[e?T?Object(v.jsx)(j.fc,{color:"textSubtle",textAlign:"center",children:Object(v.jsx)(m.a,{children:t("Loading")})}):(null===q||void 0===q?void 0:q.length)>0?q.map((function(e,t){return Object(v.jsx)(x.b,{pair:e,mb:t<q.length-1?"16px":0},e.liquidityToken.address)})):Object(v.jsx)(j.fc,{color:"textSubtle",textAlign:"center",children:t("No liquidity found.")}):Object(v.jsx)(j.fc,{color:"textSubtle",textAlign:"center",children:t("Connect to a wallet to view your liquidity.")}),e&&!T&&Object(v.jsxs)(j.W,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(v.jsx)(j.fc,{color:"textSubtle",mb:"8px",children:t("Don't see a pool you joined?")}),Object(v.jsx)(j.r,{id:"import-pool-link",variant:"secondary",scale:"sm",as:b.a,to:"/apefind",children:t("Find other LP tokens")})]})]}),Object(v.jsx)(j.w,{style:{textAlign:"center"},children:Object(v.jsx)(j.r,{id:"join-pool-button",as:b.a,to:"/addapeliquidity",width:"100%",startIcon:Object(v.jsx)(j.a,{color:"white"}),children:t("Add Liquidity")})})]})]})}}}]);
//# sourceMappingURL=26.4c900a32.chunk.js.map