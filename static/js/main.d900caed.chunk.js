(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),m=a(6),i=a(1),s=(a(21),function(e){var t=e.title,a=e.index;return l.a.createElement("button",{key:a,type:"button",className:"tab"},t)}),u=function(e){var t,a=e.tabs,n=e.match.params.tab;return l.a.createElement("div",{className:"info-wrapper"},l.a.createElement("p",{className:"info"},null===(t=a.find((function(e){return e.id===n})))||void 0===t?void 0:t.content))},o=(a(22),function(e){var t=e.tabs;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Tabs"),l.a.createElement("div",{className:"tabs-wrapper"},l.a.createElement(m.a,null,l.a.createElement("ul",{className:"tabs-list"},t.map((function(e,t){return l.a.createElement("li",{key:e.title},l.a.createElement(m.b,{activeClassName:"",to:"/tabs/".concat(e.id)},l.a.createElement(s,{title:e.title,index:t})))}))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/tabs/:tab?",render:function(e){var a=e.match;return l.a.createElement(u,{tabs:t,match:a})}})))))}),b=(a(28),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),E=function(){return l.a.createElement("h2",null,"Home")},p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement("nav",null,l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,l.a.createElement(m.b,{activeClassName:"nav__item active",className:"nav__item",to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(m.b,{activeClassName:"nav__item active",className:"nav__item",to:"/tabs"},"Tabs")))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:E}),l.a.createElement(i.a,{path:"/tabs",render:function(){return l.a.createElement(o,{tabs:b})}}))))};r.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d900caed.chunk.js.map