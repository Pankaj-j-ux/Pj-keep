(this["webpackJsonpgoogle-keep"]=this["webpackJsonpgoogle-keep"]||[]).push([[0],{30:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(11),s=n.n(a),i=(n(30),n(36)),o=n(20),r=(n(45),n(12)),l=n(31),j=n.n(l),d=n(2);var b=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"py-4 bg-info shadow-lg mb-4",children:Object(d.jsxs)("div",{className:"ms-3 d-flex flex-row",children:[Object(d.jsx)(j.a,{style:{fontSize:50,color:"white"}}),Object(d.jsx)("h2",{style:Object(r.a)({fontFamily:"'Bebas Neue', cursive"},"fontFamily","'Zen Tokyo Zoo', cursive"),className:"text-white ps-2 py-2 mb-0",children:"PJ KEEP"})]})})})})},u=n(29),x=n(33),h=n.n(x),O=n(68);var f=function(e){var t=e.addNote,n=Object(c.useState)({title:"",content:""}),a=Object(o.a)(n,2),s=a[0],i=a[1],l=Object(c.useState)({vis:!1,height:"10vh"}),j=Object(o.a)(l,2),b=j[0],x=j[1],f=function(e){var t=e.target,n=t.name,c=t.value;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(r.a)({},n,c))}))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{children:Object(d.jsxs)("div",{className:"my-5 mx-auto w-50 px-2 py-4 text-center shadow position-relative",style:{borderRadius:"10px"},children:[b.vis&&Object(d.jsx)("input",{type:"text",name:"title",value:s.title,onChange:f,autoComplete:"off",className:"w-100 px-3 py-2 text- fs-3 fw-bold text-capitalize",placeholder:"Title",style:{border:"none",outline:"none",borderRadius:"10px",height:"10vh"}}),Object(d.jsx)("textarea",{onClick:function(){x({vis:!0,height:"20vh"})},name:"content",value:s.content,onChange:f,className:"py-2 px-3 w-100 ",placeholder:"Write a note ...",style:{border:"none",outline:"none",borderRadius:"10px",height:b.height}}),b.vis&&Object(d.jsx)(O.a,{onClick:function(){t(s)},className:"position-absolute  top-100 start-50 translate-middle","aria-label":"delete",children:Object(d.jsx)(h.a,{className:"text-info",style:{fontSize:60}})})]})})})},m=n(34),p=n.n(m);var v=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{className:"text-center bg-secondary footer text-white mb-0",children:["Copyright ",Object(d.jsx)(p.a,{})," pj.pvt"]})})},g=n(35),y=n.n(g),w=n(69);var N=function(e){var t=e.title,n=e.content,c=e.id,a=e.deleteFun;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"d-flex flex-column my-4 mx-4 py-3 px-3 border shadow rounded",style:{width:"29%"},children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)("p",{children:n}),Object(d.jsx)(w.a,{onClick:function(){a(c)},className:"bg-info text-white w-50 ms-auto shadow custom_btn",variant:"contained",startIcon:Object(d.jsx)(y.a,{}),children:"Delete"})]})})};var F=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=function(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(f,{addNote:function(e){a((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(d.jsx)("section",{className:"d-flex flex-rows flex-wrap",children:n.map((function(e,t){return Object(d.jsx)(N,{id:t,title:e.title,content:e.content,deleteFun:s},t)}))}),Object(d.jsx)(v,{})]})};s.a.render(Object(d.jsx)(F,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.018ddbd7.chunk.js.map