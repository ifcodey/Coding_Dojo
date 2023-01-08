(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(50)},23:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=(a(23),a(4)),s=a.n(o),u=a(1),i=a(2),m=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(u.a)(r,2),m=o[0],p=o[1],E=Object(n.useState)(""),d=Object(u.a)(E,2),b=d[0],f=d[1],g=Object(n.useState)(""),h=Object(u.a)(g,2),v=h[0],N=h[1],j=Object(n.useState)(""),O=Object(u.a)(j,2),k=O[0],y=O[1],S=Object(n.useState)(""),x=Object(u.a)(S,2),C=x[0],w=x[1],_=Object(n.useState)({}),P=Object(u.a)(_,2),D=P[0],A=P[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement("h3",null,"Know of a pet needing a home?"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s.a.post("http://localhost:8000/api/pet",{name:a,type:m,description:b,skill1:v,skill2:k,skill3:C}).then((function(e){e.data.errors?A(e.data.errors):Object(i.c)("/"),console.log(e)})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Name"),l.a.createElement("input",{type:"text",onChange:function(e){return c(e.target.value)},className:"form-control"}),l.a.createElement("span",{className:"text-danger"},D.name?D.name.message:"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Type"),l.a.createElement("input",{type:"text",onChange:function(e){return p(e.target.value)},className:"form-control"}),l.a.createElement("span",{className:"text-danger"},D.type?D.type.message:"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",onChange:function(e){return f(e.target.value)},className:"form-control"}),l.a.createElement("span",{className:"text-danger"},D.description?D.description.message:"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 1"),l.a.createElement("input",{type:"text",onChange:function(e){return N(e.target.value)},className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 2"),l.a.createElement("input",{type:"text",onChange:function(e){return y(e.target.value)},className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 3"),l.a.createElement("input",{type:"text",onChange:function(e){return w(e.target.value)},className:"form-control"})),l.a.createElement("input",{type:"submit",value:"Add Pet",className:"btn btn-primary"}),l.a.createElement("button",{onClick:function(e){Object(i.c)("/")},className:"btn btn-danger"},"Cancel")))},p=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets").then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement("h3",null,"These pets are looking for a home"),l.a.createElement("table",{className:"table table-hover table-striped"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions")),c.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,l.a.createElement(i.a,{to:"/pet/".concat(e._id)},e.name)),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(i.a,{to:"/edit/".concat(e._id),className:"btn-link"},"Edit")))})))))},E=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(0),m=Object(u.a)(o,2),p=m[0],E=(m[1],function(){s.a.get("http://localhost:8000/api/pet/"+e._id).then((function(e){r(e.data),console.log(e)})).catch((function(e){return console.log("Error:",e)}))});Object(n.useEffect)((function(){E()}),[e._id]);return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Details about ",c.name),l.a.createElement("p",null,"Pet type: ",c.type),l.a.createElement("p",null,"Description: ",c.description),l.a.createElement("p",null,"Skills:",l.a.createElement("ul",null,c.skill1?l.a.createElement("li",null,c.skill1):"",c.skill2?l.a.createElement("li",null,c.skill2):"",c.skill3?l.a.createElement("li",null,c.skill3):"")),l.a.createElement("p",null,"Likes: ",c.likes),l.a.createElement("button",{onClick:function(e){var t;t=c._id,s.a.put("http://localhost:8000/api/like/"+t,{likes:p}).then((function(e){console.log(e),E()})).catch((function(e){return console.log(e)})),document.getElementById("button").setAttribute("disabled","disabled")},id:"button"},"Like this pet"),l.a.createElement("button",{onClick:function(e){var t;t=c._id,s.a.delete("http://localhost:8000/api/pet/".concat(t)).then((function(e){console.log(e),Object(i.c)("/")})).catch((function(e){return console.log(e)}))},className:"btn btn-link align-baseline"},"Adopt this pet!"))},d=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),p=m[0],E=m[1],d=Object(n.useState)(""),b=Object(u.a)(d,2),f=b[0],g=b[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),N=v[0],j=v[1],O=Object(n.useState)(""),k=Object(u.a)(O,2),y=k[0],S=k[1],x=Object(n.useState)(""),C=Object(u.a)(x,2),w=C[0],_=C[1],P=Object(n.useState)({}),D=Object(u.a)(P,2),A=D[0],T=D[1];Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pet/".concat(e._id)).then((function(e){r(e.data.name),E(e.data.type),g(e.data.description),j(e.data.skill1),S(e.data.skill2),_(e.data.skill3),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[e._id]);return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement("h3",null,"Know of a pet needing a home?"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),s.a.put("http://localhost:8000/api/pet/".concat(e._id),{name:c,type:p,description:f,skill1:N,skill2:y,skill3:w}).then((function(e){e.data.errors?T(e.data.errors):Object(i.c)("/"),console.log(e)})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Name"),l.a.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)},className:"form-control",value:c}),l.a.createElement("span",{className:"text-danger"},A.name?A.name.message:"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Type"),l.a.createElement("input",{type:"text",onChange:function(e){return E(e.target.value)},className:"form-control",value:p}),l.a.createElement("span",{className:"text-danger"},A.type?A.type.message:"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",onChange:function(e){return g(e.target.value)},className:"form-control",value:f}),l.a.createElement("span",{className:"text-danger"},A.description?A.description.message:"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 1"),l.a.createElement("input",{type:"text",onChange:function(e){return j(e.target.value)},className:"form-control",value:N})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 2"),l.a.createElement("input",{type:"text",onChange:function(e){return S(e.target.value)},className:"form-control",value:y})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 3"),l.a.createElement("input",{type:"text",onChange:function(e){return _(e.target.value)},className:"form-control",value:w})),l.a.createElement("input",{type:"submit",value:"Edit Pet",className:"btn btn-success"})))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(i.a,{to:"/"},"Home")," |",l.a.createElement(i.a,{to:"/new"}," Add a pet to the shelter")),l.a.createElement(i.b,null,l.a.createElement(p,{path:"/"}),l.a.createElement(m,{path:"/new"}),l.a.createElement(E,{path:"/pet/:_id"}),l.a.createElement(d,{path:"/edit/:_id"})))};var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d1ba2743.chunk.js.map