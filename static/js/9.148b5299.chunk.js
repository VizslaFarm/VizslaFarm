(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1124:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return it}));var c=n(15),a=n(0),r=n(7),i=n(2),s=n(18),o=n(182),u=n(3),b=n.n(u),l=n(205);function j(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(l.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var c=0,a=function(){};return{s:a,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw r}}}}var d,p,f,h,x,O,m,g,v,S,w,k,y,A,F,E,z,H,B,D,C,U,L,P,V,M,T,I,R=n(12),W=n(16),Z=n(63),K=n(32),N=n(9),G=n(11),Q=n.n(G),X=n(56),Y=n(19),J=n(108),$=n(159),_=n(137),q=function(){var e=Object(a.useState)([]),t=Object(W.a)(e,2),n=t[0],c=t[1],r=Object(K.c)().account,i=Object(_.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(R.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=$.a.map((function(e){return{address:Object(Y.m)(),name:"pendingCake",params:[e.pid,r]}})),e.next=3,Object(X.a)(J,t);case 3:n=e.sent,a=$.a.map((function(e,t){return Object(N.a)(Object(N.a)({},e),{},{balance:new Q.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},ee=n(44),te=n(111),ne=function(){var e=Object(a.useState)([]),t=Object(W.a)(e,2),n=t[0],c=t[1],r=Object(K.c)().account,i=Object(_.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=$.a.map((function(e){return{address:Object(Y.m)(),name:"pendingCake",params:[e.pid,r]}})),e.next=3,Object(X.a)(J,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},ce=n(28),ae=n(30),re=n(867),ie=n(289),se=n(1),oe=function(e){var t=e.value,n=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,s=e.lineHeight,o=void 0===s?"1":s,u=e.prefix,b=void 0===u?"":u,l=e.bold,j=void 0===l||l,d=e.color,p=void 0===d?"text":d,f=Object(ie.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),h=f.countUp,x=f.update,O=Object(a.useRef)(x);return Object(a.useEffect)((function(){O.current(t)}),[t,O]),Object(se.jsxs)(i.Mb,{bold:j,fontSize:r,style:{lineHeight:o},color:p,children:[h,b]})},ue=function(e){return Object(se.jsx)(oe,Object(N.a)({fontSize:"14px",lineHeight:"1.1",color:"textDisabled",prefix:"HUF",bold:!1,decimals:0},e))},be=n(874),le=r.e.div(d||(d=Object(c.a)(["\n  margin-bottom: 24px;\n"]))),je=function(){var e=Object(s.b)().t,t=Object(K.c)().account,n=ne().reduce((function(e,t){var n=new Q.a(t);return n.eq(0)?e:e+n.div(ae.j).toNumber()}),0),c=Object(ce.G)(),a=new Q.a(n).multipliedBy(c).toNumber();return t?Object(se.jsxs)(le,{children:[Object(se.jsx)(re.a,{value:n,lineHeight:"1.5"}),c.gt(0)&&Object(se.jsx)(be.a,{value:a}),c.gt(0)&&Object(se.jsx)(ue,{value:357.95*a})]}):Object(se.jsx)(i.Mb,{color:"textDisabled",style:{lineHeight:"76px"},children:e("Locked")})},de=n(864),pe=n(21),fe=function(){var e=Object(s.b)().t,t=Object(de.a)(Object(Y.d)()).balance,n=Object(ce.G)(),c=new G.BigNumber(Object(pe.c)(t)).multipliedBy(n).toNumber();return Object(K.c)().account?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(re.a,{value:Object(pe.c)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.gt(0)?Object(se.jsx)(be.a,{value:c}):Object(se.jsx)("br",{}),Object(se.jsx)(ue,{value:363.48*c})]}):Object(se.jsx)(i.Mb,{color:"textDisabled",style:{lineHeight:"54px"},children:e("Locked")})},he=Object(r.e)(i.r)(p||(p=Object(c.a)(["\n background-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n  min-height: 376px;\n   opacity: 0.92;\n\n    ) ;\n\n "]))),xe=r.e.div(f||(f=Object(c.a)(["\n  margin-bottom: 16px;\n"]))),Oe=r.e.img(h||(h=Object(c.a)(["\n  margin-bottom: 10px;\n"]))),me=r.e.div(x||(x=Object(c.a)(["\n  color: ",";\n  font-size: 17px;\n"])),(function(e){return e.theme.colors.textSubtle})),ge=r.e.div(O||(O=Object(c.a)(["\n  margin-top: 24px;\n"]))),ve=function(){var e=Object(a.useState)(!1),t=Object(W.a)(e,2),n=t[0],c=t[1],r=Object(K.c)().account,o=Object(s.b)().t,u=q(),l=Object(ee.n)(),d=u.filter((function(e){return e.balance.toNumber()>0})),p=Object(a.useCallback)(Object(R.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),t=j(d),e.prev=2,t.s();case 4:if((n=t.n()).done){e.next=15;break}return a=n.value,e.prev=6,e.next=9,Object(Z.b)(l,a.pid,r);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(6);case 13:e.next=4;break;case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(2),t.e(e.t1);case 20:return e.prev=20,t.f(),e.finish(20);case 23:c(!1);case 24:case"end":return e.stop()}}),e,null,[[2,17,20,23],[6,11]])}))),[r,d,l]);return Object(se.jsx)(he,{children:Object(se.jsxs)(i.s,{children:[Object(se.jsx)(i.P,{scale:"xl",mb:"15px",color:"secondary",children:o("Mining & Staking")}),Object(se.jsx)(Oe,{src:"/images/tokens/VIZSLASWAP.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(se.jsxs)(xe,{children:[Object(se.jsxs)(me,{children:[o("VIZSLASWAP to Harvest"),":"]}),Object(se.jsx)(je,{})]}),Object(se.jsxs)(xe,{children:[Object(se.jsxs)(me,{children:[o("VIZSLASWAP in Wallet"),":"]}),Object(se.jsx)(fe,{})]}),Object(se.jsx)(ge,{children:r?Object(se.jsx)(i.o,{id:"harvest-all",disabled:d.length<=0||n,onClick:p,width:"100%",children:n?o("Collecting VIZSLASWAP"):o("Harvest all (%count%)",{count:d.length})}):Object(se.jsx)(te.a,{width:"100%"})})]})})},Se=n(193),we=Object(r.e)(i.r)(m||(m=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.92;\n  max-height: 100%;\n"]))),ke=r.e.img(g||(g=Object(c.a)(["\n  margin-bottom: 10px;\n"]))),ye=r.e.div(v||(v=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Ae=r.e.div(S||(S=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n color: ",";\n font-weight: 900;\n  "])),(function(e){return e.theme.colors.textSubtle})),Fe=function(){var e=Object(s.b)().t,t=Object(de.d)(),n=Object(de.b)(Object(Y.d)()),c=Object(ce.G)(),a=t?t.minus(n):new Se.a(0),r=(Object(pe.c)(a),c.times(a),t?t.minus(0):new Se.a(0)),o=c.times(r),u=c.times(1e18),b=r.minus(n);return Object(se.jsx)(we,{children:Object(se.jsxs)(i.s,{children:[Object(se.jsx)(Ae,{children:e("VIZSLASWAP Stats")}),Object(se.jsx)(ke,{src:"/images/tokens/VIZSLASWAP.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(se.jsxs)(ye,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("Price")}),Object(se.jsx)(re.a,{fontSize:"17px",value:Object(pe.c)(u),decimals:8,prefix:"$"})]}),Object(se.jsxs)(ye,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("Market Cap")}),Object(se.jsx)(re.a,{fontSize:"17px",value:Object(pe.c)(o),decimals:0,prefix:"$"})]}),Object(se.jsxs)(ye,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("Total Supply")}),t&&Object(se.jsx)(re.a,{fontSize:"17px",value:Object(pe.c)(t),decimals:0})]}),Object(se.jsxs)(ye,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("Circulating Supply")}),t&&Object(se.jsx)(re.a,{fontSize:"17px",value:Object(pe.c)(b),decimals:0})]}),Object(se.jsxs)(ye,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("VIZSLASWAP/block")}),Object(se.jsx)(re.a,{fontSize:"17px",decimals:2,value:.47})]}),Object(se.jsxs)(ye,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("Active Pools")}),Object(se.jsx)(re.a,{fontSize:"17px",decimals:0,value:19})]})]})})},Ee=Object(r.e)(i.r)(w||(w=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.92;\n  max-height: 100%;\n"]))),ze=r.e.img(k||(k=Object(c.a)(["\nmargin-bottom: 10px;\n\n"]))),He=r.e.div(y||(y=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Be=r.e.div(A||(A=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n color: ",";\n font-weight: 900;\n  "])),(function(e){return e.theme.colors.textSubtle})),De=function(){var e=Object(s.b)().t,t=Object(de.d)(),n=Object(de.b)(Object(Y.i)()).times(1e9),c=Object(ce.G)(),a=t?t.minus(n):new Se.a(0),r=(Object(pe.c)(a),t?t.minus(0):new Se.a(0)),o=c.times(r),u=(c.times(o),Object(ce.H)().times(1e18)),b=u.times(1e19);return Object(se.jsx)(Ee,{children:Object(se.jsxs)(i.s,{children:[Object(se.jsx)(Be,{children:e("HVI Stats")}),Object(se.jsx)(ze,{src:"/images/tokens/HVI.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(se.jsxs)(He,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("HVI price")}),Object(se.jsx)(re.a,{fontSize:"17px",value:Object(pe.c)(u),decimals:17,prefix:"$"})]}),Object(se.jsxs)(He,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("Market Cap")}),Object(se.jsx)(re.a,{fontSize:"17px",value:Object(pe.c)(b),decimals:0,prefix:"$"})]}),Object(se.jsxs)(He,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("Total Supply")}),t&&Object(se.jsx)(re.a,{fontSize:"17px",value:1e19,decimals:0})]}),Object(se.jsxs)(He,{children:[Object(se.jsx)(i.Mb,{fontSize:"17px",color:"secondary",children:e("Total Burned")}),Object(se.jsx)(re.a,{fontSize:"17px",value:Object(pe.c)(n),decimals:0})]})]})})},Ce=Object(r.e)(i.r)(F||(F=Object(c.a)(["\n  opacity: 0.92;\n  font-size: 40px;\n  max-width: 100%;\n height: 100%;\n color: ",";\n font-weight: 900;\n background-color: rgb(0,0,0);\n  margin-bottom: 8px;\n"])),(function(e){return e.theme.colors.textSubtle})),Ue=r.e.div(E||(E=Object(c.a)(["\n  align-items: center;\n  font-size: 38px;\n  overflow: scroll;\n  max-width: 100%;\n height: 330px;\n color: ",";\n font-weight: 900;\n bottom: 10px;\n margin-top: 10px;\n"])),(function(e){return e.theme.colors.textSubtle})),Le=(r.e.div(z||(z=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(e){return e.theme.colors.contrast})),r.e.div(H||(H=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n max-width: 100%;\n height: 100%;\n overflow: scroll;\n color: ",";\n font-weight: 900;\n  "])),(function(e){return e.theme.colors.textSubtle})),function(){var e=Object(s.b)().t,t=Object(de.d)(),n=Object(de.b)(Object(Y.d)()),c=Object(ce.G)(),a=t?t.minus(n):new Se.a(0);Object(pe.c)(a),c.times(a);return Object(se.jsx)(Ce,{children:Object(se.jsxs)(i.s,{children:[e("Announcements"),Object(se.jsxs)(Ue,{children:[Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1527966906669580290",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner22.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1527939001360973824",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner21.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1527752914353242117",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner20.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1527554135540879361",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner19.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1527212830063304706",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner18.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1526845919043506181",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner17.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1526649490844827650",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner16.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1525959020162469896",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner15.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1525850216519311366",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner14.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1525840864467210240",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner13.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1525552858661363713",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner12.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1525447385484300288",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner11.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1525422887536058370",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner10.png",alt:"hvi",height:"auto",width:"100%"})]})]})]})})}),Pe=Object(r.e)(i.r)(B||(B=Object(c.a)(["\n  align-items: center;\n  flex: 1; \n  opacity: 0.85;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  height: 170px;\n      "]))),Ve=function(){var e=Object(s.b)().t,t=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://openapi.debank.com/v1/user/token?id=0x3FF00B58e432B0895e3fd69634Ec50e3931110c1&chain_id=bsc&token_id=0x8F71caaB0e4A0eB8615aBfA6A12996cC3d37e988");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),n=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://openapi.debank.com/v1/user/token?id=0x3FF00B58e432B0895e3fd69634Ec50e3931110c1&chain_id=bsc&token_id=0x8F71caaB0e4A0eB8615aBfA6A12996cC3d37e988");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),c=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x8d3cF6F026f1c8021BD3B0F74263D4D51208917F&address=0x3FF00B58e432B0895e3fd69634Ec50e3931110c1&tag=latest&apikey=Z6XDXK78A5RHSDYXFAR34RFWBBDNKRIDFH");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),r=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xaDAaE082237cB1772c9e079dB95c117E6Dd0C5aF&address=0x738156eAE2715776CBF92eD5751F7b8fc99951b7&tag=latest&apikey=7K36W5M328YT6KSTY4EGMJBHYGH51R7ZUQ");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),o=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x738156eAE2715776CBF92eD5751F7b8fc99951b7&address=0x3FF00B58e432B0895e3fd69634Ec50e3931110c1&tag=latest&apikey=Z6XDXK78A5RHSDYXFAR34RFWBBDNKRIDFH");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data1:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),u=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDE619A9E0eEeAA9F8CD39522Ed788234837F3B26&address=0x0388cc967e382A1c85161453bc6cEaA70E59E33e&tag=latest&apikey=7K36W5M328YT6KSTY4EGMJBHYGH51R7ZUQ");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),l=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x0388cc967e382A1c85161453bc6cEaA70E59E33e&address=0x3FF00B58e432B0895e3fd69634Ec50e3931110c1&tag=latest&apikey=Z6XDXK78A5RHSDYXFAR34RFWBBDNKRIDFH");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),j=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xDE619A9E0eEeAA9F8CD39522Ed788234837F3B26&address=0x8F71caaB0e4A0eB8615aBfA6A12996cC3d37e988&tag=latest&apikey=CJUH69FWTMZMHW79IWQPUH2Y2IKYANZT21");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),d=function(){var e=Object(a.useState)(null),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e=Object(R.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x8F71caaB0e4A0eB8615aBfA6A12996cC3d37e988&address=0x3FF00B58e432B0895e3fd69634Ec50e3931110c1&tag=latest&apikey=A2IJKDT9V2VTFP9CT11XUWHVGNNGK5M6KH");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),p=(c&&c.result.toLocaleString("en-US",{maximumFractionDigits:0}),n?n.price.toLocaleString("en-US",{maximumFractionDigits:0}):null),f=(Object(ce.G)(),Object(ce.F)()),h=t?t.amount.toLocaleString("en-US",{maximumFractionDigits:0}):null,x=(r&&r.result.toLocaleString("en-US",{maximumFractionDigits:0}),o&&o.result.toLocaleString("en-US",{maximumFractionDigits:0}),u&&u.result.toLocaleString("en-US",{maximumFractionDigits:0}),l&&l.result.toLocaleString("en-US",{maximumFractionDigits:0}),j&&j.result.toLocaleString("en-US",{maximumFractionDigits:0}),d&&d.result.toLocaleString("en-US",{maximumFractionDigits:0}),f.times(h).div(f).times(p).decimalPlaces(2));return Object(se.jsx)(Pe,{children:Object(se.jsxs)(i.s,{children:[Object(se.jsx)(i.P,{scale:"lg",mb:"0px",color:"secondary",children:e("Total Value Locked (TVL)")}),t?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(i.P,{scale:"xl",children:["$".concat(x)," "]}),Object(se.jsx)(i.Mb,{color:"textSubtle",children:e("Across all LPs and VIZSLASWAP Pool")})]}):Object(se.jsx)(i.Cb,{height:66})]})})},Me=n(943),Te=n.n(Me),Ie=n(104),Re=n(49),We=n(112),Ze=n(303),Ke=Object(r.f)(D||(D=Object(c.a)(["\n\t0% {\n\t\tbackground-position: 0% 100%;\n\t}\n\t50% {\n\t\tbackground-position: 0% 0%;\n\t}\n\t100% {\n\t\tbackground-position: 100% 0%;\n\t}\n"]))),Ne=Object(r.e)(i.r)(C||(C=Object(c.a)(["\nbackground: linear-gradient(\n  240deg,\n  rgb(0,0,0) 0%,\n    rgb(0,0,0) 10%,\n    rgb(0, 0, 0)20%,\n    rgb(13, 36, 34) 30%,\n    rgb(18, 48, 46) 40%,\n    rgb(34,89,84) 50%,\n    rgb(18, 48, 46)60%,\n    rgb(13, 36, 34) 70%,\n    rgb(0, 0, 0) 80%,\n    rgb(0,0,0) 90%,\n    rgb(0,0,0) 100%);\n  );\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 500% 500%;\n  animation: "," 2.5s linear infinite;\n  border-radius: 25px;\n  opacity: 0.88;\n  \n  "," {\n    margin: 0;\n    max-width: none;\n    \n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),Ke,(function(e){return e.theme.mediaQueries.lg})),Ge=Object(r.e)(i.P).attrs({scale:"xl"})(U||(U=Object(c.a)(["\n  line-height: 44px;\n"]))),Qe=function(){var e=Object(a.useState)(!0),t=Object(W.a)(e,2),n=t[0],c=t[1],r=Object(s.b)().t,o=Object(ce.f)().data,u=Object(ce.G)(),l=Object(Re.b)();Object(a.useEffect)((function(){(function(){var e=Object(R.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(Object(We.c)(We.d.map((function(e){return e.pid}))));case 3:return e.prev=3,c(!1),e.finish(3);case 6:case"end":return e.stop()}}),e,null,[[0,,3,6]])})));return function(){return e.apply(this,arguments)}})()()}),[l,c]);var j=Object(a.useMemo)((function(){if(u.gt(0)){var e=o.map((function(e){if(0!==e.pid&&"0X"!==e.multiplier&&e.lpTotalInQuoteToken&&e.quoteToken.busdPrice){var t=new Q.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice);return Object(Ze.a)(new Q.a(e.poolWeight),u,t)}return null})),t=Te()(e);return null===t||void 0===t?void 0:t.toLocaleString("en-US",{maximumFractionDigits:2})}return null}),[u,o]),d=j||"-",p=r("Earn up to %highestApr% APR in Mining",{highestApr:d}).split(d),f=Object(W.a)(p,2),h=f[0],x=f[1];return Object(se.jsx)(Ne,{children:Object(se.jsx)(Ie.b,{exact:!0,activeClassName:"active",to:"/liquiditymining",id:"farm-apr-cta",children:Object(se.jsxs)(i.s,{children:[Object(se.jsx)(i.P,{color:"secondary",scale:"lg",children:h}),Object(se.jsx)(Ge,{color:"text",children:j&&!n?"".concat(j,"%"):Object(se.jsx)(i.Cb,{animation:"pulse",variant:"rect",height:"44px"})}),Object(se.jsxs)(i.O,{justifyContent:"space-between",children:[Object(se.jsx)(i.P,{color:"secondary",scale:"lg",children:x}),Object(se.jsx)(i.e,{mt:30,color:"secondary"})]})]})})})},Xe=n(203),Ye=n.n(Xe),Je=n(69),$e=Object(r.f)(L||(L=Object(c.a)(["\n\t0% {\n\t\tbackground-position: 0% 100%;\n\t}\n\t50% {\n\t\tbackground-position: 0% 0%;\n\t}\n\t100% {\n\t\tbackground-position: 100% 0%;\n\t}\n"]))),_e=Object(r.e)(i.r)(P||(P=Object(c.a)(["\nbackground: linear-gradient(\n  240deg,\n  rgb(0,0,0) 0%,\n    rgb(0,0,0) 10%,\n    rgb(0, 0, 0)20%,\n    rgb(13, 36, 34) 30%,\n    rgb(18, 48, 46) 40%,\n    rgb(34,89,84) 50%,\n    rgb(18, 48, 46)60%,\n    rgb(13, 36, 34) 70%,\n    rgb(0, 0, 0) 80%,\n    rgb(0,0,0) 90%,\n    rgb(0,0,0) 100%);\n  );\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 500% 500%;\n  animation: "," 2.5s linear infinite;\n  border-radius: 25px;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),$e,(function(e){return e.theme.mediaQueries.lg})),qe=Object(r.e)(i.P).attrs({scale:"xl"})(V||(V=Object(c.a)(["\n  line-height: 44px;\n"]))),et=Je.a.filter((function(e){return!e.isFinished&&!e.earningToken.symbol.includes("CAKE")})),tt=[Ye()(et,["sortOrder","pid"],["desc","desc"]).slice(0,2).map((function(e){return e.earningToken.symbol}))].join(", "),nt=function(){var e=(0,Object(s.b)().t)("Earn %assets% in Pools",{assets:tt}).split(tt),t=Object(W.a)(e,2),n=t[0],c=t[1];return Object(se.jsx)(_e,{children:Object(se.jsx)(Ie.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(se.jsxs)(i.s,{children:[Object(se.jsx)(i.P,{color:"secondary",scale:"lg",children:n}),Object(se.jsx)(qe,{color:"text",children:tt}),Object(se.jsxs)(i.O,{justifyContent:"space-between",children:[Object(se.jsx)(i.P,{color:"secondary",scale:"lg",children:c}),Object(se.jsx)(i.e,{mt:30,color:"primary"})]})]})})})},ct=r.e.div(M||(M=Object(c.a)(["\nalign-items: center;\nbackground-repeat: no-repeat;\nbackground-position: top center;\nbackground-image: url('images/banner1.jpg');\nbackground-size: 100% 100%;\nopacity: 0.92;\nborder-radius: 25px;\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nmargin: auto;\nmargin-bottom: 24px;\nmargin-top: 0px;\npadding-top: 115px;\ntext-align: center;\n  "," {\n    height: 360px;\n    padding-top: 0;\n        background-position: left center, right center;\n }\n"])),(function(e){return e.theme.mediaQueries.lg})),at=Object(r.e)(i.i)(T||(T=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),rt=Object(r.e)(i.i)(I||(I=Object(c.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),it=function(){var e=Object(s.b)().t;return Object(se.jsxs)(o.a,{children:[Object(se.jsxs)(ct,{children:[Object(se.jsx)(i.P,{as:"h1",scale:"xl",mb:"24px",color:"secondary",children:e("")}),Object(se.jsx)(i.Mb,{children:e("")})]}),Object(se.jsxs)("div",{children:[Object(se.jsxs)(at,{children:[Object(se.jsx)(ve,{}),Object(se.jsx)(Le,{}),Object(se.jsx)(Fe,{}),Object(se.jsx)(De,{})]}),Object(se.jsxs)(rt,{children:[Object(se.jsx)(Ve,{}),Object(se.jsx)(Qe,{}),Object(se.jsx)(nt,{})]})]})]})}},864:function(e,t,n){"use strict";n.d(t,"d",(function(){return O})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return g}));var c,a=n(3),r=n.n(a),i=n(9),s=n(12),o=n(16),u=n(0),b=n(11),l=n.n(b),j=n(32),d=n(33),p=n(23),f=n(55),h=n(137),x=n(290);!function(e){e.NOT_FETCHED="not-fetched",e.SUCCESS="success",e.FAILED="failed"}(c||(c={}));var O=function(){var e=Object(h.a)().slowRefresh,t=Object(u.useState)(),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(u.useEffect)((function(){function e(){return(e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new l.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},m=function(e){var t=Object(u.useState)(p.d),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(h.a)().slowRefresh,b=Object(f.a)();return Object(u.useEffect)((function(){(function(){var t=Object(s.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(d.a)(e,b),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:c=t.sent,a(new l.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[b,e,i]),c},g=function(){var e=Object(u.useState)(p.d),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(j.c)().account,i=Object(x.a)(),b=i.lastUpdated,d=i.setLastUpdated,h=Object(f.a)();return Object(u.useEffect)((function(){a&&function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.eth.getBalance(a);case 2:t=e.sent,c(new l.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,h,b,c]),{balance:n,refresh:d}};t.a=function(e){var t=c.NOT_FETCHED,n=c.SUCCESS,a=c.FAILED,b=Object(u.useState)({balance:p.d,fetchStatus:t}),x=Object(o.a)(b,2),O=x[0],m=x[1],g=Object(f.a)(),v=Object(j.c)().account,S=Object(h.a)().fastRefresh;return Object(u.useEffect)((function(){v&&function(){var t=Object(s.a)(r.a.mark((function t(){var c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(d.a)(e,g),t.prev=1,t.next=4,c.methods.balanceOf(v).call();case 4:s=t.sent,m({balance:new l.a(s),fetchStatus:n}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0),m((function(e){return Object(i.a)(Object(i.a)({},e),{},{fetchStatus:a})}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()()}),[v,e,g,S,n,a]),O}},867:function(e,t,n){"use strict";var c=n(0),a=n(289),r=n(2),i=n(1);t.a=function(e){var t=e.value,n=e.decimals,s=e.fontSize,o=void 0===s?"40px":s,u=e.lineHeight,b=void 0===u?"1":u,l=e.prefix,j=void 0===l?"":l,d=e.bold,p=void 0===d||d,f=e.color,h=void 0===f?"text":f,x=Object(a.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),O=x.countUp,m=x.update,g=Object(c.useRef)(m);return Object(c.useEffect)((function(){g.current(t)}),[t,g]),Object(i.jsxs)(r.Mb,{bold:p,fontSize:o,style:{lineHeight:b},color:h,children:[j,O]})}},874:function(e,t,n){"use strict";var c=n(9),a=(n(0),n(867)),r=n(1);t.a=function(e){return Object(r.jsx)(a.a,Object(c.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}},943:function(e,t,n){var c=n(468),a=n(469),r=n(131);e.exports=function(e){return e&&e.length?c(e,r,a):void 0}}}]);
//# sourceMappingURL=9.148b5299.chunk.js.map