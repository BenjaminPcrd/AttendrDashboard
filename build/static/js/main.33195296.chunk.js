(this["webpackJsonpattendr-dashboard"]=this["webpackJsonpattendr-dashboard"]||[]).push([[0],{44:function(e,t,a){e.exports=a(74)},71:function(e,t,a){e.exports=a.p+"static/media/rguAccelerator.6e03a1a3.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/attendr-logo-primary.51a2cc64.png"},74:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=a(43),i=a(15),u=a(12),s=a(16),m=a(81),d=a(82),f=a(83),E=a(84),p=a(87),b=a(85),h=a(78),v=a(19),g=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){r(JSON.parse(localStorage.getItem("sessions")))}),[]);var o={columns:[{label:"ID",field:"event_id"},{label:"Date",field:"event_date"},{label:"Room",field:"room"},{label:"Module",field:"module"},{label:"Action",field:"action"},{label:"Summary",field:"summary"}],rows:null!=a?a.map((function(e){return{event_id:e.event_id,event_date:e.event_date,room:e.room.uniqueName,module:l.a.createElement("span",null,l.a.createElement(h.a,{variant:"primary"},e.module.uniqueName)," / ",e.module.name),action:l.a.createElement(u.b,{to:"/attendance/"+e.id},"View Attendance"),summary:l.a.createElement("span",null,e.attendance.items.map((function(e){return e.mark_id})).reduce((function(e,t){return e+t}))," / ",e.attendance.items.length)}})):[]};return l.a.createElement("div",null,l.a.createElement("h1",null,"Sessions"),null!=a?l.a.createElement(v.c,{striped:!0,bordered:!0,hover:!0,data:o,noBottomColumns:!0,order:["event_date","asc"]}):null)},S=a(79),k=a(80),y=a(86),O=a(42),j=a.n(O),N=a(41),w=a.n(N),x=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(i.a)(o,2),m=c[0],d=c[1],f=Object(n.useState)({present:0,absent:0,perPresent:0,perAbsent:0}),E=Object(i.a)(f,2),p=E[0],b=E[1],g=Object(s.g)().id;Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("sessions")).filter((function(e){return e.id===g}))[0];r(e);var t=e.attendance.items;d(t);var a=t.map((function(e){return e.mark_id})).reduce((function(e,t){return e+t})),n=t.length;b({present:a,absent:n-a})}),[g]);var O={columns:[{label:"Student ID",field:"studentUniqueName"},{label:"Student name",field:"studentName"},{label:"Mark",field:"mark"},{label:"Marked at",field:"markedAt"}],rows:null!=m?m.map((function(e){return{studentUniqueName:e.studentUniqueName,studentName:e.studentName,mark:0===e.mark_id?l.a.createElement(h.a,{variant:"danger"},e.mark):l.a.createElement(h.a,{variant:"success"},e.mark),markedAt:0===e.mark_id?null:new Date(e.markedAt).toLocaleString()}})):[]};return l.a.createElement("div",null,l.a.createElement(u.b,{to:"/sessions/"},"Go back"),l.a.createElement("h1",null,"Attendance"),l.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Room"),l.a.createElement("th",null,"Module"))),l.a.createElement("tbody",null,null!=a?l.a.createElement("tr",null,l.a.createElement("td",null,a.event_id),l.a.createElement("td",null,a.event_date),l.a.createElement("td",null,a.room.uniqueName),l.a.createElement("td",null,l.a.createElement(h.a,{variant:"primary"},a.module.uniqueName)," / ",a.module.name)):null)),l.a.createElement(k.a,null,l.a.createElement(y.a,null,l.a.createElement(y.a.Header,null,"Absenteeism rate"),l.a.createElement(y.a.Body,null,l.a.createElement(j.a,{animate:!0,animationDuration:500,animationEasing:"ease-out",data:[{title:"present",value:p.present,color:"green"},{title:"absent",value:p.absent,color:"red"}],label:function(e){var t=e.data,a=e.dataIndex;if("present"===t[a].title){if(t[a].percentage>0)return Math.round(t[a].percentage)+"%"}else if(t[a].percentage>0)return Math.round(t[a].percentage)+"%"},labelPosition:50,labelStyle:{fill:"white",fontSize:"10px"},style:{height:"200px"}})),l.a.createElement(y.a.Footer,{className:"d-flex justify-content-around"},l.a.createElement(h.a,{style:{fontSize:"20px"},variant:"success"},p.present," present"),l.a.createElement(h.a,{style:{fontSize:"20px"},variant:"danger"},p.absent," absent"),l.a.createElement(h.a,{style:{fontSize:"20px"},variant:"primary"},p.absent+p.present," total")))),null!=m?l.a.createElement("div",null,l.a.createElement(w.a,{data:m,style:{backgroundColor:"#007aff",borderRadius:"6px",border:"1px solid",color:"white",fontSize:18,fontWeight:"bold",padding:10,margin:10}}),l.a.createElement(v.c,{striped:!0,bordered:!0,hover:!0,data:O,noBottomColumns:!0,entries:100,order:["studentName","asc"]})):null)},_=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),r=t[0],o=t[1];Object(n.useEffect)((function(){null==localStorage.getItem("sessions")?h():o(!0)}),[]);var h=function(){console.log("getData");fetch("https://xhg56111bk.execute-api.eu-west-2.amazonaws.com/prod/attendance/accelerator").then((function(e){return e.json()})).then((function(e){var t=e.items;t=t.map((function(e){return Object(c.a)({},e,{module:JSON.parse(e.module),room:JSON.parse(e.room)})})),localStorage.setItem("sessions",JSON.stringify(t)),o(!1),o(!0)})).catch((function(e){return console.log(e)}))};return l.a.createElement(m.a,null,l.a.createElement(d.a,{className:"align-items-center"},l.a.createElement(f.a,null,l.a.createElement(E.a,{src:a(71),width:"150"})),l.a.createElement(f.a,null,l.a.createElement(E.a,{src:a(72),width:"150"}))),l.a.createElement(d.a,{className:"justify-content-end"},l.a.createElement(p.a,{onClick:function(){return h()}},"Refresh")),r?l.a.createElement(u.a,null,l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/sessions",children:l.a.createElement(g,null)}),l.a.createElement(s.b,{path:"/attendance/:id",children:l.a.createElement(x,null)}),l.a.createElement(s.a,{from:"/",to:"/sessions"}))):l.a.createElement(b.a,{animation:"border"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73);o.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.33195296.chunk.js.map