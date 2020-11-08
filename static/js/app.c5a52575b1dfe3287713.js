webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("yGkR"),s={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){i.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=i.a.auth().currentUser.email)},methods:{logout:function(){var t=this;i.a.auth().signOut().then(function(){t.$router.go({path:t.$router.path})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav-wrapper green"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("Manage Notes")]),t._v(" "),a("ul",{staticClass:"right"},[t.isLoggedIn?a("li",[a("span",{staticClass:"email black-text"},[t._v(t._s(t.currentUser))])]):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Dashboard")])],1):t._e(),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),t.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:t.logout}},[t._v("logout")])]):t._e()])],1)])])},staticRenderFns:[]};var r={name:"app",components:{Navbar:a("VU/8")(s,o,!1,function(t){a("Zzr8")},"data-v-db24830a",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},c=a("VU/8")(r,l,!1,null,null,null).exports,u=a("/ocq"),d=(a("881v"),i.a.initializeApp({apiKey:"AIzaSyDdY8jCNfocrLoCL0jWVUOc0qZNl5ovhak",authDomain:"note-app-62b0d.firebaseapp.com",databaseURL:"https://note-app-62b0d.firebaseio.com",projectId:"note-app-62b0d",storageBucket:"note-app-62b0d.appspot.com",messagingSenderId:"285410024588",appId:"1:285410024588:web:7ff1ff603b9322126d6fa9"}).firestore()),v={name:"dashboard",data:function(){return{selectedCategory:"All",notes:[]}},created:function(){var t=this;d.collection("notes").orderBy("title").get().then(function(e){e.forEach(function(e){var a={id:e.id,note_id:e.data().note_id,title:e.data().title,status:e.data().status};t.notes.push(a)})})},computed:{filteredNotes:function(){var t=this.selectedCategory;return"All"==t?this.notes:"false"==t?this.notes.filter(function(t){return!1===t.status}):"true"==t?this.notes.filter(function(t){return!0===t.status}):void 0}},methods:{isCompleted:function(t,e){var a=this,n=e.target.checked;d.collection("notes").where("note_id","==",t).get().then(function(t){t.forEach(function(t){t.ref.update({status:n}).then(function(){a.$router.go({path:a.$router.path})})})})},fetchData:function(){var t=this;d.collection("notes").orderBy("title").get().then(function(e){e.forEach(function(e){var a={id:e.id,note_id:e.data().note_id,title:e.data().title,status:e.data().status};t.notes.push(a)})})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v("Notes")]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCategory,expression:"selectedCategory"}],attrs:{name:"group1",type:"radio",value:"All",checked:""},domProps:{checked:t._q(t.selectedCategory,"All")},on:{change:function(e){t.selectedCategory="All"}}}),t._v(" "),a("span",{staticClass:"black-text"},[t._v("All")])]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCategory,expression:"selectedCategory"}],attrs:{name:"group1",type:"radio",value:"false"},domProps:{checked:t._q(t.selectedCategory,"false")},on:{change:function(e){t.selectedCategory="false"}}}),t._v(" "),a("span",{staticClass:"black-text"},[t._v("Pending")])]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCategory,expression:"selectedCategory"}],attrs:{name:"group1",type:"radio",value:"true"},domProps:{checked:t._q(t.selectedCategory,"true")},on:{change:function(e){t.selectedCategory="true"}}}),t._v(" "),a("span",{staticClass:"black-text"},[t._v("Finished")])])]),t._v(" "),t._l(t.filteredNotes,function(e){return a("li",{key:e.id,staticClass:"collection-item"},[a("label",[a("input",{staticClass:"filled-in",attrs:{type:"checkbox"},domProps:{checked:e.status},on:{change:function(a){return t.isCompleted(e.note_id,a)}}}),t._v(" "),a("span",{staticClass:"black-text"},[t._v(t._s(e.title))])]),t._v(" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-note",params:{note_id:e.note_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[]},m=a("VU/8")(v,p,!1,null,null,null).exports,f={name:"new-note",data:function(){return{title:null,content:null,status:null}},methods:{saveNote:function(){var t=this;d.collection("notes").add({note_id:this._uid,title:this.title,content:this.content,status:!1}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-note"}},[a("h3",[t._v("New Note")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveNote(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:""}},[t._v("Title")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",required:""},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:""}},[t._v("Content")])])]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")])],1)])])},staticRenderFns:[]},_=a("VU/8")(f,h,!1,null,null,null).exports,g={name:"view-note",data:function(){return{note_id:null,title:null,content:null}},beforeRouteEnter:function(t,e,a){d.collection("notes").where("note_id","==",t.params.note_id).get().then(function(t){t.forEach(function(t){a(function(e){e.note_id=t.data().note_id,e.title=t.data().title,e.content=t.data().content,e.status=t.data().status})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("notes").where("note_id","==",this.$route.params.note_id).get().then(function(e){e.forEach(function(e){t.note_id=e.data().note_id,t.title=e.data().title,t.content=e.data().content,t.status=e.data().status})})},deleteNote:function(){var t=this;confirm("Are you sure?1")&&d.collection("notes").where("note_id","==",this.$route.params.note_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-note"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.title))])]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v(t._s(t.content))])]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),a("button",{staticClass:"btn red",on:{click:t.deleteNote}},[t._v("Delete")]),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-note",params:{note_id:t.note_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},b=a("VU/8")(g,C,!1,null,null,null).exports,w={name:"view-note",data:function(){return{note_id:null,title:null,content:null}},beforeRouteEnter:function(t,e,a){d.collection("notes").where("note_id","==",t.params.note_id).get().then(function(t){t.forEach(function(t){a(function(e){e.note_id=t.data().note_id,e.title=t.data().title,e.content=t.data().content,e.status=t.data().status})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("notes").where("note_id","==",this.$route.params.note_id).get().then(function(e){e.forEach(function(e){t.note_id=e.data().note_id,t.title=e.data().title,t.content=e.data().content,t.status=e.data().status})})},updateNote:function(){var t=this;d.collection("notes").where("note_id","==",this.$route.params.note_id).get().then(function(e){e.forEach(function(e){e.ref.update({title:t.title,content:t.content}).then(function(){t.$router.push({name:"view-note",params:{note_id:t.note_id}})})})})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-note"}},[a("h3",[t._v("Edit Note")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateNote(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",required:""},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")])],1)])])},staticRenderFns:[]},x=a("VU/8")(w,y,!1,null,null,null).exports,k={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("You are logged in as "+t.user.email),e.$router.go({path:e.$router.path})},function(t){alert(t.message)}),t.preventDefault()}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel green white-text center"},[a("h3",[t._v("Login")]),t._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[t._v("Email Address")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("lock")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.login}},[t._v("\n              Login\n            ")])])])])])])])},staticRenderFns:[]},E=a("VU/8")(k,N,!1,null,null,null).exports,$={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;i.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){alert("Account created for "+t.user.email),e.$router.go({path:e.$router.path})},function(t){alert(t.message)}),t.preventDefault()}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[t._v("Register")]),t._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email Address")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("lock")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.register}},[t._v("\n              Register\n            ")])])])])])])])},staticRenderFns:[]},P=a("VU/8")($,A,!1,null,null,null).exports;n.a.use(u.a);var q=new u.a({routes:[{path:"/",name:"Home",component:m,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:E,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:P,meta:{requiresGuest:!0}},{path:"/new",name:"new-note",component:_,meta:{requiresAuth:!0}},{path:"/edit/:note_id",name:"edit-note",component:x,meta:{requiresAuth:!0}},{path:"/:note_id",name:"view-note",component:b,meta:{requiresAuth:!0}}]});q.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?i.a.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&i.a.auth().currentUser?a({path:"/",query:{redirect:t.fullPath}}):a()});var U=q;n.a.config.productionTip=!1;var R=void 0;i.a.auth().onAuthStateChanged(function(t){R||(R=new n.a({el:"#app",router:U,components:{App:c},template:"<App/>"}))})},Zzr8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c5a52575b1dfe3287713.js.map