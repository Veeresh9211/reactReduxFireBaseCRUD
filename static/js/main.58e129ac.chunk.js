(this.webpackJsonpreduxcompletetodo=this.webpackJsonpreduxcompletetodo||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(28),r=t.n(o),c=(t(55),t(56),t(57),t(19)),s=t(5),m=t(14),i=t(15),d=t(17),u=t(16),p=t(18),h=function(e){return l.a.createElement("div",{className:" row postDataList"},l.a.createElement("div",{className:"col-md-2"},e.song.id),l.a.createElement("div",{className:"col-md-2"},e.song.name),l.a.createElement("div",{className:"col-md-3"},e.song.filmName),l.a.createElement("div",{className:"col-md-2"},e.song.singer),l.a.createElement("div",{className:"col-md-2"},e.song.year),l.a.createElement("div",{className:"col-md-1"},l.a.createElement("button",null,"Delete"),l.a.createElement(c.b,{to:{pathname:"/updateSong/".concat(e.song.id),state:e.song},className:"nav-link"},"Update Song")),l.a.createElement("hr",null))},g=t(12),E=t(47),b=t.n(E),v=t(34),f=t.n(v);f.a.initializeApp({apiKey:"AIzaSyDkcXPXkws0txAZvaP6FMfHYlPhesKKhTY",authDomain:"reactreduxtodoexample.firebaseapp.com",databaseURL:"https://reactreduxtodoexample.firebaseio.com",projectId:"reactreduxtodoexample",storageBucket:"reactreduxtodoexample.appspot.com",messagingSenderId:"155968295519",appId:"1:155968295519:web:fb54ab97fe78f5844101ea"});var N=f.a.firestore(),S=t(48),y=t.n(S),O=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(y.a,{type:"Bars",color:"#00BFFF",height:50,width:50,secondaryColor:"grey",style:{left:"50%",position:"absolute",top:"30%"}})}}]),t}(l.a.Component),C=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.GetSongData()}},{key:"render",value:function(){var e=this.props.loaderVal?l.a.createElement(O,null):"",a=this.props.songs,t=a.length>0&&a.map((function(e){return l.a.createElement(h,{song:e,key:e.id})}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row postHeader"},l.a.createElement("div",{className:"col-md-2"},"Id"),l.a.createElement("div",{className:"col-md-2"},"Song Name"),l.a.createElement("div",{className:"col-md-3"},"Film Name"),l.a.createElement("div",{className:"col-md-2"},"Singer"),l.a.createElement("div",{className:"col-md-2"},"Year"),l.a.createElement("div",{className:"col-md-1"},"Actions")),e,t)}}]),t}(n.Component),j=Object(p.b)((function(e){return{songs:e.songR.songs,loaderVal:e.songR.loader}}),{GetSongData:function(){return function(e){e({type:"BEGIN_API"}),N.collection("songs").get().then((function(a){var t=a.docs.map((function(e){return Object(g.a)(Object(g.a)({},e.data()),{},{id:e.id})}));e({type:"GET_SONG_DATA",payload:t})}))}}})(C),x=t(25),A=t(24),w=t.n(A),R=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(x.a)({},e.currentTarget.id,e.currentTarget.value))},n.state={},n}return Object(i.a)(t,[{key:"saveSong",value:function(e){e.preventDefault(),this.props.saveDataRef(this.state)}},{key:"render",value:function(){var e=this.props.loaderVal?l.a.createElement(O,null):"";return"SUCCESS"==this.props.newStatusRef&&w()("#newSuccessModal").modal(),l.a.createElement("div",{className:"container formAlignment"},l.a.createElement("h3",null,"New Song"),l.a.createElement("form",{onSubmit:this.saveSong.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Song Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",onChange:this.handleChange,placeholder:"Enter Song Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Film Name"),l.a.createElement("textarea",{className:"form-control",id:"filmName",onChange:this.handleChange,placeholder:"Enter Film Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Singer"),l.a.createElement("input",{type:"text",className:"form-control",id:"singer",onChange:this.handleChange,placeholder:"Enter Singer"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Year"),l.a.createElement("input",{type:"number",className:"form-control",id:"year",onChange:this.handleChange,placeholder:"Enter Year"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save Record")),e,l.a.createElement("div",{className:"modal fade",id:"newSuccessModal",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Notification"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},"Record Successfully Created."),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))}}]),t}(l.a.Component),D=Object(p.b)((function(e){return{newStatusRef:e.songR.newStatus,loaderVal:e.songR.loader}}),(function(e){return{saveDataRef:function(a){return e(function(e){var a={name:e.name,filmName:e.filmName,singer:e.singer,year:e.year};return function(e){e({type:"BEGIN_API"}),N.collection("songs").doc().set(a).then((function(){e({type:"SAVE_SONG_DATA",payload:"SUCCESS"})})).catch((function(e){console.error("Error writing document: ",e)}))}}(a))}}}))(R),T=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(x.a)({},e.currentTarget.id,e.currentTarget.value))},n.state={id:n.props.location.state.id,name:n.props.location.state.employee_name,content:n.props.location.state.employee_salary,author:n.props.location.state.employee_age},n}return Object(i.a)(t,[{key:"updateSong",value:function(e){e.preventDefault(),this.props.updateSongRef(this.state)}},{key:"render",value:function(){var e=this.props.loaderVal?l.a.createElement(O,null):"";return 200==this.props.updateStatusRef&&w()("#updateSuccessModal").modal(),l.a.createElement("div",{className:"container formAlignment"},l.a.createElement("h3",null,"Update Record"),this.props.updateStatusRef,l.a.createElement("form",{onSubmit:this.updateSong.bind(this)},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Id"),l.a.createElement("input",{type:"text",value:this.state.id,className:"form-control",id:"id",onChange:this.handleChange,readOnly:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",value:this.state.name,className:"form-control",id:"name",onChange:this.handleChange,placeholder:"Enter Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Content"),l.a.createElement("textarea",{value:this.state.content,className:"form-control",id:"content",onChange:this.handleChange,placeholder:"Enter Content"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Author"),l.a.createElement("input",{value:this.state.author,type:"text",className:"form-control",id:"author",onChange:this.handleChange,placeholder:"Enter Author"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Update Record")),e,l.a.createElement("div",{className:"modal fade",id:"updateSuccessModal",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Notification"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},"Record Successfully Update."),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))}}]),t}(l.a.Component),k=Object(p.b)((function(e){return{updateStatusRef:e.songR.updateStatus,loaderVal:e.songR.loader}}),(function(e){return{updateSongRef:function(a){return e(function(e){var a={name:e.name,salary:e.content,age:e.author};return function(t){t({type:"BEGIN_API"}),b.a.put("http://dummy.restapiexample.com/api/v1/update/".concat(e.id),a).then((function(e){t({type:"UPDATE_SONG_DATA",payload:e.status})}))}}(a))}}}))(T),_=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){return Object(m.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Dashboard")}}]),t}(n.Component),I=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("h3",{className:"nav-item active"},l.a.createElement(c.b,{to:"/",className:"nav-link"},"Redux TODO")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(c.b,{to:"/listSong",className:"nav-link"},"List Song")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(c.b,{to:"/addSong",className:"nav-link"},"Add Song")))))};var G=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(I,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:_}),l.a.createElement(s.a,{path:"/listSong",component:j}),l.a.createElement(s.a,{path:"/addSong",component:D}),l.a.createElement(s.a,{path:"/updateSong/:id",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(108),t(109),t(110);var M=t(22),B={songs:[],newStatus:"",loader:!1,updateStatus:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_SONG_DATA":return Object(g.a)(Object(g.a)({},e),{},{songs:a.payload,loader:!1});case"SAVE_SONG_DATA":return Object(g.a)(Object(g.a)({},e),{},{newStatus:a.payload,loader:!1});case"UPDATE_SONG_DATA":return Object(g.a)(Object(g.a)({},e),{},{updateStatus:a.payload,loader:!1});case"BEGIN_API":return Object(g.a)(Object(g.a)({},e),{},{loader:!0});default:return e}},U=Object(M.c)({songR:P}),V=t(49),F=Object(M.d)(U,Object(M.a)(V.a));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p.a,{store:F},l.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,a,t){e.exports=t(111)},55:function(e,a,t){},56:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},57:function(e,a,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.58e129ac.chunk.js.map