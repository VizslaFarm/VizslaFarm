(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[19],{1401:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var c,i,r=n(6),s=n(7),o=n(1),j=n(10),a=n(2),l=n(4),d=n(13),b=n(81),x=n(22),O=n(113),u=n(428),h=n(15),p=n(496),f=n(159),m=n(19),g=n(116),v=n(117),y=n(840),w=n(200),T=n(157),k=n(935),S=n(292),I=n(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}));var C=Object(l.e)(a.r)(c||(c=Object(s.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function E(){var e,t=Object(m.a)().account,n=Object(d.b)().t,c=Object(o.useState)(i.TOKEN1),s=Object(r.a)(c,2),l=s[0],E=s[1],D=Object(o.useState)(j.d),N=Object(r.a)(D,2),A=N[0],K=N[1],q=Object(o.useState)(null),B=Object(r.a)(q,2),W=B[0],z=B[1],M=Object(f.b)(null!==A&&void 0!==A?A:void 0,null!==W&&void 0!==W?W:void 0),R=Object(r.a)(M,2),L=R[0],F=R[1],G=Object(g.f)();Object(o.useEffect)((function(){F&&G(F)}),[F,G]);var P=L===f.a.NOT_EXISTS||Boolean(L===f.a.EXISTS&&F&&j.e.equal(F.reserve0.raw,j.e.BigInt(0))&&j.e.equal(F.reserve1.raw,j.e.BigInt(0))),X=Object(v.d)(null!==t&&void 0!==t?t:void 0,null===F||void 0===F?void 0:F.liquidityToken),H=Boolean(X&&j.e.greaterThan(X.raw,j.e.BigInt(0))),J=Object(o.useCallback)((function(e){l===i.TOKEN0?K(e):z(e)}),[l]),Y=Object(I.jsx)(b.b,{padding:"45px 10px",children:Object(I.jsx)(a.fc,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),U=Object(a.Dc)(Object(I.jsx)(p.a,{onCurrencySelect:J,selectedCurrency:null!==(e=l===i.TOKEN0?W:A)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),V=Object(r.a)(U,1)[0];return Object(I.jsx)(S.a,{children:Object(I.jsxs)(k.a,{children:[Object(I.jsx)(k.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool2"}),Object(I.jsxs)(x.a,{style:{padding:"1rem"},gap:"md",children:[Object(I.jsx)(C,{endIcon:Object(I.jsx)(a.G,{}),onClick:function(){V(),E(i.TOKEN0)},children:A?Object(I.jsxs)(h.d,{children:[Object(I.jsx)(O.a,{currency:A}),Object(I.jsx)(a.fc,{ml:"8px",children:A.symbol})]}):Object(I.jsx)(a.fc,{ml:"8px",children:n("Select a Token")})}),Object(I.jsx)(x.b,{children:Object(I.jsx)(a.a,{})}),Object(I.jsx)(C,{endIcon:Object(I.jsx)(a.G,{}),onClick:function(){V(),E(i.TOKEN1)},children:W?Object(I.jsxs)(h.d,{children:[Object(I.jsx)(O.a,{currency:W}),Object(I.jsx)(a.fc,{ml:"8px",children:W.symbol})]}):Object(I.jsx)(a.fc,{as:h.d,children:n("Select a Token")})}),H&&Object(I.jsxs)(x.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(I.jsx)(a.fc,{textAlign:"center",children:n("Pool Found!")}),Object(I.jsx)(y.a,{to:"/pool2",children:Object(I.jsx)(a.fc,{textAlign:"center",children:n("Manage this pool.")})})]}),A&&W?L===f.a.EXISTS?H&&F?Object(I.jsx)(u.a,{pair:F}):Object(I.jsx)(b.b,{padding:"45px 10px",children:Object(I.jsxs)(x.a,{gap:"sm",justify:"center",children:[Object(I.jsx)(a.fc,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(I.jsx)(y.a,{to:"/addapeliquidity/".concat(Object(w.a)(A),"/").concat(Object(w.a)(W)),children:Object(I.jsx)(a.fc,{textAlign:"center",children:n("Add Liquidity")})})]})}):P?Object(I.jsx)(b.b,{padding:"45px 10px",children:Object(I.jsxs)(x.a,{gap:"sm",justify:"center",children:[Object(I.jsx)(a.fc,{textAlign:"center",children:n("No pool found.")}),Object(I.jsx)(y.a,{to:"/addapeliquidity/".concat(Object(w.a)(A),"/").concat(Object(w.a)(W)),children:n("Create pool.")})]})}):L===f.a.INVALID?Object(I.jsx)(b.b,{padding:"45px 10px",children:Object(I.jsx)(x.a,{gap:"sm",justify:"center",children:Object(I.jsx)(a.fc,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):L===f.a.LOADING?Object(I.jsx)(b.b,{padding:"45px 10px",children:Object(I.jsx)(x.a,{gap:"sm",justify:"center",children:Object(I.jsxs)(a.fc,{textAlign:"center",children:[n("Loading"),Object(I.jsx)(T.a,{})]})})}):null:Y]})]})})}},840:function(e,t,n){"use strict";var c,i=n(7),r=n(56),s=n(4),o=Object(s.e)(r.a)(c||(c=Object(i.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o},935:function(e,t,n){"use strict";n.d(t,"b",(function(){return W})),n.d(t,"a",(function(){return z.a}));var c=n(7),i=n(1),r=n(4),s=n(2),o=n(56),j=n(6),a=n(116),l=n(13),d=n(161),b=n(22),x=n(73),O=n(15),u=n(440),h=n(0),p=function(e){var t=e.onDismiss,n=Object(i.useState)(!1),c=Object(j.a)(n,2),r=c[0],o=c[1],p=Object(a.j)(),f=Object(j.a)(p,2),m=f[0],g=f[1],v=Object(a.k)(),y=Object(j.a)(v,2),w=y[0],T=y[1],k=Object(a.d)(),S=Object(j.a)(k,2),I=S[0],C=S[1],E=Object(a.i)(),D=Object(j.a)(E,2),N=D[0],A=D[1],K=Object(a.c)(),q=Object(j.a)(K,2),B=(q[0],q[1],Object(d.d)().onChangeRecipient),W=Object(l.b)().t;return r?Object(h.jsx)(s.vb,{title:W("Are you sure?"),onBack:function(){return o(!1)},onDismiss:t,style:{maxWidth:"420px"},children:Object(h.jsxs)(s.xb,{children:[Object(h.jsx)(s.sb,{variant:"warning",mb:"24px",children:Object(h.jsx)(s.fc,{children:W("Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.")})}),Object(h.jsx)(s.fc,{mb:"24px",children:W("Only use this mode if you know what you\u2019re doing.")}),Object(h.jsx)(s.r,{variant:"danger",id:"confirm-expert-mode",onClick:function(){"confirm"===window.prompt('Please type the word "confirm" to enable expert mode.')&&(C(),o(!1))},children:W("Turn On Expert Mode")})]})}):Object(h.jsx)(s.vb,{title:W("Settings"),onDismiss:t,children:Object(h.jsx)(s.xb,{children:Object(h.jsxs)(b.a,{gap:"md",style:{padding:"1rem"},children:[Object(h.jsx)(s.fc,{bold:!0,fontSize:"20px",children:W("Transaction Settings")}),Object(h.jsx)(u.a,{rawSlippage:m,setRawSlippage:g,deadline:w,setDeadline:T}),Object(h.jsx)(s.fc,{bold:!0,fontSize:"20px",mt:"32px",children:W("Interface Settings")}),Object(h.jsxs)(O.b,{children:[Object(h.jsxs)(O.c,{children:[Object(h.jsx)(s.fc,{fontSize:"14px",children:W("Toggle Expert Mode")}),Object(h.jsx)(x.a,{text:W("Bypasses confirmation modals and allows high slippage trades. Use at your own risk."),ml:"4px"})]}),Object(h.jsx)(s.Hb,{id:"toggle-expert-mode-button",checked:I,onChange:I?function(){B(null),C()}:function(){return o(!0)}})]}),Object(h.jsxs)(O.b,{children:[Object(h.jsxs)(O.c,{children:[Object(h.jsx)(s.fc,{fontSize:"14px",children:W("Disable Multihops")}),Object(h.jsx)(x.a,{text:W("Restricts swaps to direct pairs only."),ml:"4px"})]}),Object(h.jsx)(s.Hb,{id:"toggle-disable-multihop-button",checked:N,onChange:function(){A(!N)}})]})]})})})};function f(){var e=Object(s.Dc)(Object(h.jsx)(p,{})),t=Object(j.a)(e,1)[0],n=Object(a.d)(),c=Object(j.a)(n,1)[0];return Object(h.jsx)(s.Eb,{show:c,children:Object(h.jsx)(s.r,{variant:"text",p:0,onClick:t,id:"open-settings-dialog-button",children:Object(h.jsx)(s.oc,{color:"primary",width:"24px"})})})}var m,g,v=n(19),y=n(29),w=n(174),T=n(441),k=n(48),S=n(158),I=r.e.div(m||(m=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),C=r.e.div(g||(g=Object(c.a)(["\n  color: ",";\n"])),(function(e){var t=e.pending,n=e.success,c=e.theme;return t?c.colors.primary:n?c.colors.success:c.colors.failure}));function E(e){var t,n,c=e.tx,i=Object(v.a)().chainId,r=null===c||void 0===c?void 0:c.summary,o=!(null===c||void 0===c?void 0:c.receipt),j=!o&&c&&(1===(null===(t=c.receipt)||void 0===t?void 0:t.status)||"undefined"===typeof(null===(n=c.receipt)||void 0===n?void 0:n.status));return i?Object(h.jsxs)(I,{pending:o,success:j,children:[Object(h.jsx)(s.ib,{href:Object(k.e)(c.hash,"transaction",i),children:null!==r&&void 0!==r?r:c.hash}),Object(h.jsx)(C,{pending:o,success:j,children:o?Object(h.jsx)(S.a,{}):j?Object(h.jsx)(s.F,{color:"success"}):Object(h.jsx)(s.L,{color:"failure"})})]}):null}function D(e,t){return t.addedTime-e.addedTime}function N(e){return Object(h.jsx)(s.W,{flexDirection:"column",children:e.map((function(e){return Object(h.jsx)(E,{tx:e},e.hash+e.addedTime)}))})}var A,K=function(e){var t=e.onDismiss,n=Object(v.a)(),c=n.account,r=n.chainId,o=Object(y.b)(),j=Object(w.b)(),a=Object(l.b)().t,d=Object(i.useMemo)((function(){return Object.values(j).filter(w.a).sort(D)}),[j]),b=d.filter((function(e){return!e.receipt})),x=d.filter((function(e){return e.receipt})),u=Object(i.useCallback)((function(){r&&o(Object(T.b)({chainId:r}))}),[o,r]);return Object(h.jsx)(s.vb,{title:a("Recent Transactions"),onDismiss:t,children:c&&Object(h.jsx)(s.xb,{children:b.length||x.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(O.a,{mb:"1rem",style:{justifyContent:"space-between"},children:[Object(h.jsx)(s.fc,{children:a("Recent Transactions")}),Object(h.jsx)(s.r,{variant:"tertiary",scale:"xs",onClick:u,children:a("clear all")})]}),N(b),N(x)]}):Object(h.jsx)(s.fc,{children:a("No recent transactions")})})})},q=function(){var e=Object(s.Dc)(Object(h.jsx)(K,{})),t=Object(j.a)(e,1)[0];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(s.r,{variant:"text",p:0,onClick:t,ml:"16px",children:Object(h.jsx)(s.ab,{color:"primary",width:"24px"})})})},B=Object(r.e)(s.W)(A||(A=Object(c.a)(["\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),W=function(e){var t=e.title,n=e.subtitle,c=e.helper,i=e.backTo,r=e.noConfig,j=void 0!==r&&r;return Object(h.jsxs)(B,{children:[Object(h.jsxs)(s.W,{alignItems:"center",mr:j?0:"16px",children:[i&&Object(h.jsx)(s.bb,{as:o.a,to:i,children:Object(h.jsx)(s.b,{width:"32px"})}),Object(h.jsxs)(s.W,{flexDirection:"column",children:[Object(h.jsx)(s.Y,{as:"h2",mb:"8px",children:t}),Object(h.jsxs)(s.W,{alignItems:"center",children:[c&&Object(h.jsx)(x.a,{text:c,mr:"4px"}),Object(h.jsx)(s.fc,{color:"textSubtle",fontSize:"14px",children:n})]})]})]}),!j&&Object(h.jsxs)(s.W,{children:[Object(h.jsx)(f,{}),Object(h.jsx)(q,{})]})]})},z=n(423)}}]);
//# sourceMappingURL=19.46276df7.chunk.js.map