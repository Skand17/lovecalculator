(this.webpackJsonplovecalc=this.webpackJsonplovecalc||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(5),s=c.n(a),i=(c(29),c(7)),o=(c.p,c(30),c(6)),u=c(19),l=c.n(u),j=c(20),b=c.n(j),d=c(3);var h=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(""),s=Object(i.a)(a,2),u=s[0],j=s[1],h=Object(r.useState)(0),p=Object(i.a)(h,2),O=p[0],m=p[1],f=Object(r.useState)(""),x=Object(i.a)(f,2),g=x[0],v=x[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h2",{children:"Calculate compatibility with your partner"}),Object(d.jsxs)(o.b,{onSubmit:function(e){return function(e){e.preventDefault();var t={method:"GET",url:"https://love-calculator.p.rapidapi.com/getPercentage",params:{sname:c,fname:u},headers:{"x-rapidapi-host":"love-calculator.p.rapidapi.com","x-rapidapi-key":"c9eb34b110mshd5e61f6199e0749p13043fjsn7e508a5482db"}};l.a.request(t).then((function(e){v(e.data.result),m(e.data.percentage)})).catch((function(e){console.error(e)}))}(e)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Enter your name"}),Object(d.jsx)(o.c,{type:"text",required:!0,onChange:function(e){return n(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Enter your partner name"}),Object(d.jsx)(o.c,{type:"text",required:!0,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsx)(o.a,{color:"primary",children:"Check Compatibiity"})]}),Object(d.jsxs)("div",{className:"your-score",children:[Object(d.jsx)("h4",{children:g||""}),Object(d.jsx)(b.a,{currentProgress:O,showPercent:!0,show:!0,color:"red",width:"80%"})]})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),p()}},[[53,1,2]]]);
//# sourceMappingURL=main.8fb5e00a.chunk.js.map