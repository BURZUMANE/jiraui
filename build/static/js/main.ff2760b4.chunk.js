(this.webpackJsonpjira=this.webpackJsonpjira||[]).push([[0],{25:function(e,t,a){e.exports=a(51)},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),s=a(2),u=a.n(s),i=a(7),m=a(5),o=a(52),E=function(e){var t=e.setModal,a=e.data;return console.log(a),l.a.createElement("div",{className:"modaLcontainer"},l.a.createElement("div",{className:"modalContent"},l.a.createElement("div",{className:"titleWrapper"},l.a.createElement("h1",null,"SPECIFIED ISSUES"),l.a.createElement("button",{onClick:function(){t(!1)}},"X")),l.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"key"),l.a.createElement("td",null,"summary"),l.a.createElement("td",null,"P"),l.a.createElement("td",null,"resolution"),l.a.createElement("td",null,"Created"))),l.a.createElement("tbody",null,a&&a.map((function(e,t){var a=e.summary,n=e.key,r=e.created,c=e.resolution,s=e.priority,u=new Date(r).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}).replace(/ /g,"/");return console.log(u),l.a.createElement("tr",{key:t},l.a.createElement("td",null,n),l.a.createElement("td",null,a),l.a.createElement("td",null,l.a.createElement("img",{src:s,className:"icon"})),l.a.createElement("td",null,!c&&"unresolved"),l.a.createElement("td",null,u))}))))))},d=a(8),p=a.n(d),h=a(24),v=(a(48),function(){return l.a.createElement(o.a,null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:"https://test-fast.atlassian.net/images/icons/priorities/highest.svg",className:"icon"})),l.a.createElement("td",null,l.a.createElement("img",{src:"https://test-fast.atlassian.net/images/icons/priorities/high.svg",className:"icon"})),l.a.createElement("td",null,l.a.createElement("img",{src:"https://test-fast.atlassian.net/images/icons/priorities/medium.svg",className:"icon"})),l.a.createElement("td",null,l.a.createElement("img",{src:"https://test-fast.atlassian.net/images/icons/priorities/low.svg",className:"icon"}))))});var f=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(m.a)(c,2),d=s[0],f=s[1],g=Object(n.useState)([]),y=Object(m.a)(g,2),b=y[0],O=y[1],j=Object(n.useState)([{value:"issuetype+in+standardIssueTypes()+ORDER+BY+created+DESC",label:"All"},{value:"status+=+Done+order+by+created+DESC",label:"Done"},{value:'status%20%3D%20"In%20Progress"%20order%20by%20created%20DESC',label:"In Progress"}]),w=Object(m.a)(j,2),S=w[0],D=(w[1],Object(n.useState)({selectedOption:null})),N=Object(m.a)(D,2),k=N[0],I=N[1],x=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I({selectedOption:T}),n=function(){var e=Object(i.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:5002/api/sepcified/".concat(t));case 2:a=e.sent,O(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=4,n();case 4:return e.next=6,r(!a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"issuetype+in+standardIssueTypes()+ORDER+BY+created+DESC",e.next=3,p.a.get("http://localhost:5002/api/issues/".concat("issuetype+in+standardIssueTypes()+ORDER+BY+created+DESC"));case 3:t=e.sent,f(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=Object.entries(d).map((function(e){return{name:e[0],content:e[1]}})),T=k.selectedOption;return l.a.createElement("div",{className:"App"},a&&l.a.createElement(E,{setModal:r,data:b}),l.a.createElement(h.a,{value:T,onChange:function(e){I({selectedOption:e}),function(){var t=Object(i.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("http://localhost:5002/api/issues/".concat(e.value));case 2:a=t.sent,console.log(a),f(a.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()},options:S}),l.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"status 1"),l.a.createElement("th",null,"status 2"),l.a.createElement("th",null,"status 3"),l.a.createElement("th",null,"status 4")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.a,null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"80%"}}," assigne"),l.a.createElement("td",null,"type")))),l.a.createElement("th",null,l.a.createElement(v,null)),l.a.createElement("th",null,l.a.createElement(v,null)),l.a.createElement("th",null,l.a.createElement(v,null)),l.a.createElement("th",null,l.a.createElement(v,null)))),l.a.createElement("tbody",null,C.length&&C.map((function(e,t){return function(e,t){var a=Object.entries(e.content);return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement(o.a,{style:{}},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(o.a,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{width:"80%"}},e.name),l.a.createElement("td",{style:{paddingTop:"0px"}},l.a.createElement(o.a,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{className:"icon",src:"https://test-fast.atlassian.net/secure/viewavatar?size=medium&avatarId=10303&avatarType=issuetype"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{className:"icon",src:"https://test-fast.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{className:"icon",src:"https://test-fast.atlassian.net/images/icons/issuetypes/epic.svg"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{className:"icon",src:"https://test-fast.atlassian.net/secure/viewavatar?size=medium&avatarId=10315&avatarType=issuetype"}))))))))))))),a.length&&a.map((function(e,t){var a=e[1],n=Object.entries(a);return l.a.createElement("td",null,l.a.createElement(o.a,null,l.a.createElement("tbody",null,n.map((function(e){var t=Object.entries(e[1]);return l.a.createElement("tr",null,t.map((function(e,t){var a=e[1].jql;return l.a.createElement("td",{key:t},e[1].content.length&&l.a.createElement("p",{className:"bingo",onClick:function(){return x(a)}},e[1].content.length))})))})))))})))}(e,t)})))))};c.a.render(l.a.createElement(f,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ff2760b4.chunk.js.map