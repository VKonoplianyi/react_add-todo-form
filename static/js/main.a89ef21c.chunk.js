(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),s=a(2),c=a(6),o=a(1),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=void 0===i||i,s=t.user;return Object(m.jsxs)("article",{"data-id":a,className:u()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),s&&Object(m.jsx)(j,{user:s})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},O=function(e,t){return t.find((function(t){return t.id===e}))},f=function(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(t))+1},p=function(e){var t=e.users,a=e.onSubmit,n=e.todosArr,i=Object(o.useState)(""),r=Object(s.a)(i,2),c=r[0],l=r[1],d=Object(o.useState)(!1),u=Object(s.a)(d,2),j=u[0],b=u[1],h=Object(o.useState)(0),p=Object(s.a)(h,2),x=p[0],v=p[1],S=Object(o.useState)(!1),y=Object(s.a)(S,2),N=y[0],I=y[1];return Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),b(!c.trim()),I(!x),c.trim()&&x&&(a({title:c,userId:x,completed:!1,user:O(x,t),id:f(n)}),l(""),v(0))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"",children:["Title:\xa0",Object(m.jsx)("input",{type:"text","data-cy":"titleInput",value:c,placeholder:"Enter a title",onChange:function(e){var t=e.target.value;t=t.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]/g,""),l(t),b(!1)}})]}),j&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"",children:["User:\xa0",Object(m.jsxs)("select",{"data-cy":"userSelect",required:!0,value:x,onChange:function(e){v(+e.target.value),I(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),t.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),N&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},x=(a(15),[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId,l)})}))),v=function(){var e=Object(o.useState)(x),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsx)(p,{users:l,onSubmit:function(e){n((function(t){return[].concat(Object(r.a)(t),[Object(c.a)({},e)])}))},todosArr:a}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a89ef21c.chunk.js.map