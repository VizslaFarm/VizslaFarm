(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[27],{1546:function(e,t,c){"use strict";var n,i=c(9),r=c(52),s=c(7),o=Object(s.e)(r.a)(n||(n=Object(i.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o},1636:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return A}));var n,i,r=c(8),s=c(9),o=c(2),a=c(52),j=c(24),d=c(1),l=c(7),x=c(13),b=c(19),p=c(87),O=c(22),h=c(90),u=c(802),g=c(16),m=c(944),f=c(372),y=c(104),v=c(279),w=c(1546),T=c(447),I=c(187),k=c(155),S=c(602),E=c(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}));var N=Object(l.e)(d.r)(n||(n=Object(s.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(b.a)().account,c=Object(x.b)().t,n=Object(o.useState)(i.TOKEN1),s=Object(r.a)(n,2),l=s[0],A=s[1],C=Object(o.useState)(j.d),K=Object(r.a)(C,2),B=K[0],q=K[1],W=Object(o.useState)(null),G=Object(r.a)(W,2),L=G[0],D=G[1],P=Object(f.b)(null!==B&&void 0!==B?B:void 0,null!==L&&void 0!==L?L:void 0),V=Object(r.a)(P,2),X=V[0],J=V[1],M=Object(y.f)();Object(o.useEffect)((function(){J&&M(J)}),[J,M]);var R=X===f.a.NOT_EXISTS||Boolean(X===f.a.EXISTS&&J&&j.e.equal(J.reserve0.raw,j.e.BigInt(0))&&j.e.equal(J.reserve1.raw,j.e.BigInt(0))),F=Object(v.d)(null!==t&&void 0!==t?t:void 0,null===J||void 0===J?void 0:J.liquidityToken),Y=Boolean(F&&j.e.greaterThan(F.raw,j.e.BigInt(0))),_=Object(o.useCallback)((function(e){l===i.TOKEN0?q(e):D(e)}),[l]),z=Object(E.jsx)(p.b,{padding:"45px 10px",children:Object(E.jsx)(d.dc,{textAlign:"center",children:c(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),H=Object(d.Bc)(Object(E.jsx)(m.a,{onCurrencySelect:_,selectedCurrency:null!==(e=l===i.TOKEN0?L:B)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),Q=Object(r.a)(H,1)[0];return Object(E.jsx)(S.a,{children:Object(E.jsxs)(k.a,{children:[Object(E.jsx)(k.b,{title:c("Import Pool"),subtitle:c("Import an existing pool"),backTo:"/pool"}),Object(E.jsx)(d.V,{alignItems:"center",justifyContent:"right",children:Object(E.jsxs)(d.Vb,{component:Object(E.jsxs)(d.r,{mb:"10px",mt:"10px",variant:"tertiary",endIcon:Object(E.jsx)(d.G,{}),children:[Object(E.jsx)("img",{src:"/images/routers/1.png",alt:"router",height:"24px",width:"24px"}),Object(E.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),"PancakeSwap"]}),children:[Object(E.jsxs)(d.Wb,{to:"/apefind",as:a.a,color:"text",children:[Object(E.jsx)("img",{src:"/images/routers/2.png",alt:"router",height:"24px",width:"24px"}),Object(E.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),c("ApeSwap")]}),Object(E.jsxs)(d.Wb,{to:"/babydogefind",as:a.a,color:"text",children:[Object(E.jsx)("img",{src:"/images/routers/6.png",alt:"router",height:"24px",width:"24px"}),Object(E.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),c("BabyDoge")]}),Object(E.jsxs)(d.Wb,{to:"/biswapfind",as:a.a,color:"text",children:[Object(E.jsx)("img",{src:"/images/routers/5.png",alt:"router",height:"24px",width:"24px"}),Object(E.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),c("Biswap")]}),Object(E.jsxs)(d.Wb,{to:"/radiofind",as:a.a,color:"text",children:[Object(E.jsx)("img",{src:"/images/routers/4.png",alt:"router",height:"24px",width:"24px"}),Object(E.jsx)("img",{src:"/images/routers/999.png",alt:"space",height:"5px",width:"5px"}),c("RadioShack")]})]})}),Object(E.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(E.jsx)(N,{endIcon:Object(E.jsx)(d.G,{}),onClick:function(){Q(),A(i.TOKEN0)},children:B?Object(E.jsxs)(g.d,{children:[Object(E.jsx)(h.a,{currency:B}),Object(E.jsx)(d.dc,{ml:"8px",children:B.symbol})]}):Object(E.jsx)(d.dc,{ml:"8px",children:c("Select a Token")})}),Object(E.jsx)(O.b,{children:Object(E.jsx)(d.a,{})}),Object(E.jsx)(N,{endIcon:Object(E.jsx)(d.G,{}),onClick:function(){Q(),A(i.TOKEN1)},children:L?Object(E.jsxs)(g.d,{children:[Object(E.jsx)(h.a,{currency:L}),Object(E.jsx)(d.dc,{ml:"8px",children:L.symbol})]}):Object(E.jsx)(d.dc,{as:g.d,children:c("Select a Token")})}),Y&&Object(E.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(E.jsx)(d.dc,{textAlign:"center",children:c("Pool Found!")}),Object(E.jsx)(w.a,{to:"/pool",children:Object(E.jsx)(d.dc,{textAlign:"center",children:c("Manage this pool.")})})]}),B&&L?X===f.a.EXISTS?Y&&J?Object(E.jsx)(u.a,{pair:J}):Object(E.jsx)(p.b,{padding:"45px 10px",children:Object(E.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(E.jsx)(d.dc,{textAlign:"center",children:c("You don\u2019t have liquidity in this pool yet.")}),Object(E.jsx)(w.a,{to:"/add/".concat(Object(T.a)(B),"/").concat(Object(T.a)(L)),children:Object(E.jsx)(d.dc,{textAlign:"center",children:c("Add Liquidity")})})]})}):R?Object(E.jsx)(p.b,{padding:"45px 10px",children:Object(E.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(E.jsx)(d.dc,{textAlign:"center",children:c("No pool found.")}),Object(E.jsx)(w.a,{to:"/add/".concat(Object(T.a)(B),"/").concat(Object(T.a)(L)),children:c("Create pool.")})]})}):X===f.a.INVALID?Object(E.jsx)(p.b,{padding:"45px 10px",children:Object(E.jsx)(O.a,{gap:"sm",justify:"center",children:Object(E.jsx)(d.dc,{textAlign:"center",fontWeight:500,children:c("Invalid pair.")})})}):X===f.a.LOADING?Object(E.jsx)(p.b,{padding:"45px 10px",children:Object(E.jsx)(O.a,{gap:"sm",justify:"center",children:Object(E.jsxs)(d.dc,{textAlign:"center",children:[c("Loading"),Object(E.jsx)(I.a,{})]})})}):null:z]})]})})}}}]);
//# sourceMappingURL=27.c0e4fc8e.chunk.js.map