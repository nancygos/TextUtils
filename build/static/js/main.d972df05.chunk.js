(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(14),i=n.n(s),l=(n(23),n(7)),a=n(0);var r=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"wrapper",children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h3",{className:"logo",children:"TextUtils"}),Object(a.jsx)("div",{className:"lists",id:"lists",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/",id:"link",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/about",id:"link",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/contact",id:"link",children:"Contact"})})]})})]}),Object(a.jsx)("hr",{})]}),Object(a.jsxs)("div",{className:"burger",onClick:function(){var e=document.getElementById("lists");"hidden"===e.style.visibility?(e.style.visibility="visible",e.style.display="inline-block",e.style.padding="5px",e.style.backgroundColor="transparent",e.style.textAlign="right",e.style.position="relative",e.style.left="13%"):e.style.visibility="hidden"},children:["               ",Object(a.jsx)("div",{className:"line1 line"}),Object(a.jsx)("div",{className:"line2 line"}),Object(a.jsx)("div",{className:"line3 line"})]})]})},o=n(2),j=n(17),d=n.n(j);var b=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"aboutME",children:Object(a.jsx)("h1",{className:"heading",children:Object(a.jsx)(d.a,{onInit:function(e){e.typeString("Hi...").pauseFor(500).deleteAll().typeString("My name is Nancy Goswami").pauseFor(500).deleteAll().typeString("I am a web developer").start()}})})})})};var u=function(){var e=document.getElementById("nameInput"),t=document.getElementById("emailInput"),n=document.getElementById("txt");e&&t&&n?alert("Succesfully submited"):alert("Please fill the respective feilds correctly"),e.value="",t.value="",n.value=""},x=function(){return Object(a.jsxs)("div",{className:"contactPage",children:[Object(a.jsx)("h1",{children:"Contact Us!"}),Object(a.jsxs)("form",{action:"",children:[Object(a.jsx)("input",{type:"text",id:"nameInput",placeholder:"Your Name"}),Object(a.jsx)("input",{type:"email",id:"emailInput",placeholder:"Your Email Id"}),Object(a.jsx)("textarea",{name:"txt",id:"txt",rows:"15",placeholder:"Your Message"}),Object(a.jsx)("button",{type:"button",className:"btn",onClick:u,children:"Submit"})]})]})},h=n(18);var m=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("div",{className:"data",children:[Object(a.jsx)("h1",{className:"head",children:"Convert your text easily and precisely"}),Object(a.jsx)("textarea",{name:"text",id:"text",cols:"150",rows:"20",placeholder:"Enter text here",value:n,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("div",{id:"show_number"}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",onClick:function(){var e=n.toUpperCase();s(e)},children:"Upper Case"}),Object(a.jsx)("button",{type:"button",onClick:function(){var e=n.toLowerCase();s(e)},children:"Lower Case"}),Object(a.jsx)("button",{type:"button",onClick:function(){var e=0;document.getElementById("text").value&&(e=n.trim().split(/\s+/).length);var t=document.getElementById("show_number"),c=JSON.parse(e);t.innerHTML=c+" Word(s)",t.classList.toggle("action")},children:"Words"}),Object(a.jsx)("button",{type:"button",onClick:function(){for(var e=0,t=0;t<n.length;t++)" "!==n[t]&&e++;var c=document.getElementById("show_number"),s=JSON.parse(e);c.innerHTML=s+" Letter(s)",c.classList.toggle("action")},children:"Letters"}),Object(a.jsx)("button",{type:"button",onClick:function(){s("")},children:"Clear"})]})]})};var O=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r,{}),Object(a.jsx)(o.b,{children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/",component:m}),Object(a.jsx)(o.b,{path:"/about",component:b}),Object(a.jsx)(o.b,{path:"/contact",component:x}),Object(a.jsx)(o.a,{to:"/"})]})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),i(e),l(e)}))};i.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),p()}},[[31,1,2]]]);
//# sourceMappingURL=main.d972df05.chunk.js.map