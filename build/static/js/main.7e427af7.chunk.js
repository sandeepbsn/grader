(this["webpackJsonpmarks-recorder"]=this["webpackJsonpmarks-recorder"]||[]).push([[0],{225:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(37),l=a.n(r),m=a(85),s=a(86),o=a(95),i=a(94),u=a(19);function d(){return c.a.createElement("div",{className:"container-fluid p-0"},c.a.createElement("div",{className:"d-flex border w-100 shadow-sm align-items-center py-3"},c.a.createElement("div",{className:"ml-2"},c.a.createElement("h4",null,"Hogwarts School")),c.a.createElement("div",{className:"ml-auto mr-3"},c.a.createElement(u.b,{to:"/"},"Home")),c.a.createElement("div",{className:"mr-3 text-center"},c.a.createElement(u.b,{to:"/addscores"},"Add Scores")),c.a.createElement("div",{className:"text-center"},c.a.createElement(u.b,{to:"/addadmits"},"Add Admits"))))}var E=a(3);function v(){return c.a.createElement("div",{className:"d-flex flex-column text-center mx-auto mt-5 justify-content-center align-items-center border shadow-sm"},c.a.createElement("div",null,c.a.createElement("h1",null,"Welcome to Hogwarts School")),c.a.createElement("div",{className:"w-50 text-center"},c.a.createElement("p",null,"Teachers please use the links on the top right corner to add scores or to add details of new student admit")))}var f=a(6),b=a.n(f),p=a(21),g=a(24),h=a(9),x=a(15),N=a(23),j=a(22),O=a.n(j),y=a(91),k=a.n(y),w=a(87),I=a.n(w),S=a(51),_=a.n(S);function C(){var e=Object(n.useState)({grade:"",section:"",exam:""}),t=Object(x.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),m=Object(x.a)(l,2),s=m[0],o=m[1],i=Object(E.g)(),u=Object(E.f)(),d=new URLSearchParams(i.search),v=d.get("grade"),f=d.get("section"),j=d.get("exam"),y=function(e){r(Object(h.a)(Object(h.a)({},a),{},Object(g.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){""===v&&""===f&&""===j||(""!==v&&""!==f&&""!==j?function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("https://grader-data.herokuapp.com","/addscores?grade=").concat(v,"&&section=").concat(f,"&&exam=").concat(j));case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():alert("Please fill in all the details"))}),[v,f,j]);var w=function(){var e=Object(p.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("".concat("https://grader-data.herokuapp.com","/addscores/").concat(t,"?grade=").concat(v,"&&section=").concat(f,"&&exam=").concat(j));case 2:a=e.sent,n=a.data.message,alert(n),window.location.reload(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),u.push("/addscores?grade=".concat(a.grade,"&&section=").concat(a.section,"&&exam=").concat(a.exam))}(e)}},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center mt-5"},c.a.createElement("div",{className:"mx-2"},c.a.createElement("select",{name:"grade",value:a.grade,className:"form-control",onChange:function(e){return y(e)}},c.a.createElement("option",{value:""},"Grade"),["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].map((function(e){return c.a.createElement("option",{key:Object(N.v4)(),value:e},e)})))),c.a.createElement("div",{className:"mx-2"},c.a.createElement("select",{name:"section",value:a.section,className:"form-control",onChange:function(e){return y(e)}},c.a.createElement("option",{value:""},"Section"),["A","B","C","D"].map((function(e){return c.a.createElement("option",{key:Object(N.v4)(),value:e},e)})))),c.a.createElement("div",{className:"mx-2"},c.a.createElement("select",{name:"exam",value:a.exam,className:"form-control",onChange:function(e){return y(e)}},c.a.createElement("option",{value:""},"Exam Category"),["Quarterly","Half-yearly","Annual"].map((function(e){return c.a.createElement("option",{key:Object(N.v4)(),value:e},e)})))),c.a.createElement("div",{className:"mx-2"},c.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success px-2"},"Submit")))),c.a.createElement("div",{className:"d-flex justify-content-center mt-5"},s.length?c.a.createElement("table",{className:"".concat(_.a.middle," table table-sm table-bordered text-center")},c.a.createElement("thead",null,c.a.createElement("tr",null,["ID","Name","Gender","Grade","Section"].map((function(e){return c.a.createElement("th",{key:Object(N.v4)()},e)})),c.a.createElement("th",null,"Marks"))),c.a.createElement("tbody",null,s.map((function(e){return c.a.createElement("tr",{key:Object(N.v4)()},c.a.createElement("td",null,e.ID),c.a.createElement("td",null,e.Name),c.a.createElement("td",null,e.Gender),c.a.createElement("td",null,e.Grade),c.a.createElement("td",null,e.Section),c.a.createElement("td",null,c.a.createElement("div",{className:"".concat(_.a.action," justify-content-center")},c.a.createElement("div",{className:"m-2"},c.a.createElement("button",{className:"btn btn-sm btn-outline-success",onClick:function(){return t=e.ID,void u.push("/addscores/".concat(t,"?grade=").concat(v,"&&section=").concat(f,"&&exam=").concat(j));var t}},c.a.createElement(I.a,null))),c.a.createElement("div",{className:"m-2"},c.a.createElement("button",{className:"btn btn-sm btn-outline-danger",onClick:function(){return w(e.ID)}},c.a.createElement(k.a,null))))))})))):c.a.createElement("div",{className:"w-75 mt-5 text-center border shadow-sm py-5 px-5"},c.a.createElement("h3",null,"Please fill in the above details to get the students lists"))))}function A(){var e=Object(n.useState)({id:"",name:"",gender:"",grade:"",section:""}),t=Object(x.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("https://grader-data.herokuapp.com","/addadmits"));case 2:t=e.sent,console.log(t),r(Object(h.a)(Object(h.a)({},a),{},{id:t.data}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var l=function(e){r(Object(h.a)(Object(h.a)({},a),{},Object(g.a)({},e.target.name,e.target.value)))},m=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O.a.post("".concat("https://grader-data.herokuapp.com","/addadmits"),Object(h.a)({},a));case 3:"success"===e.sent.data.status&&(alert("Student details have been successfully added"),window.location.reload(!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){return m(e)}},c.a.createElement("div",{className:"d-flex flex-column w-50 text-center mx-auto mt-5"},c.a.createElement("div",{className:"my-2"},c.a.createElement("input",{name:"id",value:a.id,className:"form-control",readOnly:!0})),c.a.createElement("div",{className:"my-2"},c.a.createElement("input",{name:"name",placeholder:"Name",value:a.name,onChange:function(e){return l(e)},className:"form-control"})),c.a.createElement("div",{className:"my-2"},c.a.createElement("select",{name:"gender",placeholder:"Gender",value:a.gender,onChange:function(e){return l(e)},className:"form-control"},c.a.createElement("option",null,"Gender"),c.a.createElement("option",{value:"Male"},"Male"),c.a.createElement("option",{value:"Female"},"Female"))),c.a.createElement("div",{className:"my-2"},c.a.createElement("select",{name:"grade",value:a.grade,className:"form-control",onChange:function(e){return l(e)}},c.a.createElement("option",null,"Grade"),["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"].map((function(e){return c.a.createElement("option",{key:Object(N.v4)(),value:e},e)})))),c.a.createElement("div",{className:"my-2"},c.a.createElement("select",{name:"section",value:a.section,className:"form-control",onChange:function(e){return l(e)}},c.a.createElement("option",null,"Section"),["A","B","C","D"].map((function(e){return c.a.createElement("option",{key:Object(N.v4)(),value:e},e)})))),c.a.createElement("div",{className:"my-2"},c.a.createElement("button",{type:"submit",className:"btn btn-sm btn-success px-5 py-2"},"Submit")))))}var D=a(25),G=a.n(D),V=a(92),X=a(242),L=a(240),P=a(241),M=a(93),R=a.n(M);function H(){var e,t,a=Object(E.h)(),r=Object(E.g)(),l=new URLSearchParams(r.search),m=l.get("grade"),s=l.get("section"),o=l.get("exam"),i=a.id,u=Object(n.useState)(),d=Object(x.a)(u,2),v=d[0],f=d[1],N=Object(n.useState)(),j=Object(x.a)(N,2),y=j[0],k=j[1],w=Object(n.useState)(),I=Object(x.a)(w,2),S=I[0],_=I[1],C=Object(n.useState)(!1),A=Object(x.a)(C,2),D=A[0],M=A[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat("https://grader-data.herokuapp.com","/addscores/").concat(i,"?grade=").concat(m,"&&section=").concat(s,"&&exam=").concat(o));case 2:t=e.sent,f(t.data[1]),k(t.data[0]),_(t.data[2]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,m,i,s]);var H=function(){var e=Object(p.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.patch("".concat("https://grader-data.herokuapp.com","/addscores/").concat(i,"?grade=").concat(m,"&&section=").concat(s,"&&exam=").concat(o),Object(h.a)({},v));case 2:t=e.sent,M(!D),a=t.data.message,alert(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(null===v||void 0===v?void 0:v.ID)&&S&&(t=(e=(Object.values(v).map(Number).reduce((function(e,t){return e+t}),0)-Number(v.ID)).toString())/Number(S.full_total)*100),(null===v||void 0===v?void 0:v.ID)&&S?c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex flex-column align-items-center mt-5"},Object.keys(v).map((function(e,t){if("ID"!==e)return c.a.createElement("div",{key:t,className:"".concat(G.a.marklist," ").concat((a=v[e],(a=Number(a))>=50&&a<80?G.a.average:a>=80?G.a.good:a<50?G.a.bad:void 0)," d-flex align-items-center py-2 px-3 shadow-sm")},c.a.createElement("div",{className:""},c.a.createElement("h5",null,"Eng"===e?"English":"RL"===e?"Language":e)),c.a.createElement("div",{className:"ml-auto"},D?c.a.createElement("input",{name:e,key:t,value:v[e],onChange:function(e){return function(e){f(Object(h.a)(Object(h.a)({},v),{},Object(g.a)({},e.target.name,e.target.value)))}(e)},className:"form-control"}):c.a.createElement("h5",null,v[e])));var a})),c.a.createElement("div",{className:"".concat(G.a.marklist," d-flex border align-items-center py-3 px-3 shadow-sm")},c.a.createElement("div",{className:""},c.a.createElement("h4",null,"Total Marks")),c.a.createElement("div",{className:"ml-auto"},c.a.createElement("h4",null,c.a.createElement(R.a,{start:0,end:Number(e),duration:5})))),c.a.createElement("div",{className:"".concat(G.a.marklist," d-flex border align-items-center py-3 px-3 shadow-sm")},c.a.createElement("div",{className:"w-100"},D?c.a.createElement("button",{className:"btn btn-lg btn-outline-success btn-block",onClick:function(){return H()}},"Update"):c.a.createElement("button",{className:"btn btn-lg btn-outline-primary btn-block",onClick:function(){M(!D)}},"Edit")))),y&&S?c.a.createElement("div",{className:"d-flex flex-column p-4 justify-content-center align-items-center"},c.a.createElement("div",{className:"w-100"},c.a.createElement(V.Bar,{data:{labels:Object.keys(v).filter((function(e){return"ID"!==e})),datasets:[{label:S.name,backgroundColor:"rgba(0,0,255,0.3)",data:Object.values(v).filter((function(e,t){return 0!==t}))},{label:m+" Grade",backgroundColor:"rgba(0,255,0,0.3)",data:Object.values(y)}]},options:{legends:{display:!1},title:{display:!0,text:"Comparison Chart"},responsive:!0,maintainAspectRatio:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})),c.a.createElement("div",{className:"".concat(G.a.reportcard," mt-5")},c.a.createElement(X.a,null,c.a.createElement(L.a,null,c.a.createElement(P.a,{variant:"subtitle1"},c.a.createElement("div",{className:"d-flex w-75 mx-auto align-items-center"},c.a.createElement("div",{className:"lead"},"Name"),c.a.createElement("div",{className:"ml-auto lead w-50 text-center"},S.name))),c.a.createElement(P.a,{variant:"subtitle1"},c.a.createElement("div",{className:"d-flex m-2 w-75 mx-auto align-items-center"},c.a.createElement("div",null,"Grade"),c.a.createElement("div",{className:"ml-auto w-50 text-center"},m))),c.a.createElement(P.a,{variant:"subtitle1"},c.a.createElement("div",{className:"d-flex m-2 w-75 mx-auto align-items-center"},c.a.createElement("div",null,"Total"),c.a.createElement("div",{className:"ml-auto w-50 text-center"},e))),c.a.createElement(P.a,{variant:"subtitle1"},c.a.createElement("div",{className:"d-flex m-2 w-75 mx-auto align-items-center"},c.a.createElement("div",null,"Percentage"),c.a.createElement("div",{className:"ml-auto w-50 text-center"},Math.round(t)))),c.a.createElement(P.a,{variant:"subtitle1"},c.a.createElement("div",{className:"d-flex m-2 w-75 mx-auto align-items-center"},c.a.createElement("div",null,"Rank"),c.a.createElement("div",{className:"ml-auto w-50 text-center"},S.rank))),c.a.createElement(P.a,{variant:"subtitle1"},c.a.createElement("div",{className:"d-flex m-2 w-75 mx-auto align-items-center"},c.a.createElement("div",null,"Remarks"),c.a.createElement("div",{className:"ml-auto w-50 text-center"},t>=80?"Good":t>=50&&t<80?"Average":"Need to improve"))))))):"Loading...."):c.a.createElement("div",{className:"d-flex justify-content-center mt-5"},c.a.createElement("h4",null,"Page is loading..."))}function B(){return c.a.createElement("div",null,c.a.createElement(E.c,null,c.a.createElement(E.a,{path:"/",exact:!0,render:function(e){return c.a.createElement(v,null)}}),c.a.createElement(E.a,{path:"/addscores/:id",render:function(e){return c.a.createElement(H,null)}}),c.a.createElement(E.a,{path:"/addscores",render:function(e){return c.a.createElement(C,null)}}),c.a.createElement(E.a,{path:"/addadmits",render:function(e){return c.a.createElement(A,null)}})))}var T=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement(B,null))}}]),a}(c.a.Component);a(223);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,null,c.a.createElement(T,null))),document.getElementById("root"))},25:function(e,t,a){e.exports={marklist:"EnterScores_marklist__143P8",reportcard:"EnterScores_reportcard__3dAEe",bad:"EnterScores_bad__2IxK1",average:"EnterScores_average__4vhvt",good:"EnterScores_good__3WcHY"}},51:function(e,t,a){e.exports={action:"AddScores_action__1bLzL",middle:"AddScores_middle__29z3h"}},97:function(e,t,a){e.exports=a(225)}},[[97,1,2]]]);
//# sourceMappingURL=main.7e427af7.chunk.js.map