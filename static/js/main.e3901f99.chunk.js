(this["webpackJsonpreact-app-dashboard"]=this["webpackJsonpreact-app-dashboard"]||[]).push([[0],{24:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),o=t(15),i=t.n(o),s=(t(24),t(17)),r=t(48),p=t(53),d=t(52),j=t(51),l=t(54),u=t(3),b=Object(r.a)((function(e){return{card:{maxWidth:300,margin:"auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)"}},media:{paddingTop:"70.25%"},content:{textAlign:"left",padding:2*e.spacing.unit}}}));var h=function(e){var n=e.name,t=(e.href,e.linkText,e.image),a=e.alt,c=e.profession,o=e.about,i=b();return Object(u.jsxs)(p.a,{className:i.card,children:[Object(u.jsx)(j.a,{className:i.media,image:t,alt:a}),Object(u.jsx)(d.a,{className:i.content,children:Object(u.jsxs)(l.a,{align:"center",children:[Object(u.jsx)("h3",{children:n}),Object(u.jsx)("h5",{children:c}),Object(u.jsx)("p",{children:o})]})})]})};t(30);var x=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),c(e)}))}),[]),Object(u.jsx)("div",{className:"App",children:t&&t.length>0&&t.map((function(e){return Object(u.jsx)(h,{image:e.image,name:e.name,profession:e.profession,about:e.about,alt:e.name})}))})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.e3901f99.chunk.js.map