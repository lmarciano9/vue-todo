(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1857:function(t,e,a){"use strict";a("8c1c")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.$store.getters.authenticated?a("b-navbar",{attrs:{type:"is-primary","fixed-top":""}},[a("template",{slot:"brand"},[a("div",{staticClass:"nav-brand"},[a("b-icon",{staticClass:"mr-2",attrs:{icon:"notebook-edit"}}),t._v(" "+t._s(t.$ml.get("brand-name"))+" ")],1)]),a("template",{slot:"start"},t._l(t.$store.getters.langs,(function(e){return a("b-navbar-item",{key:e.key,on:{click:function(a){return t.$ml.change(e.key)}}},[t._v(" "+t._s(e.name)+" ")])})),1),a("template",{slot:"end"},[a("b-navbar-item",{attrs:{tag:"router-link",to:{name:"TarefaCreate"}}},[a("b-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v(" "+t._s(t.$ml.get("novo"))+" ")],1),a("b-navbar-item",{attrs:{tag:"router-link",to:"/tasks"}},[a("b-icon",{staticClass:"mr-2",attrs:{icon:"format-list-bulleted"}}),t._v(" "+t._s(t.$ml.get("lista"))+" ")],1),a("b-navbar-item",{on:{click:t.logout}},[a("b-icon",{staticClass:"mr-2",attrs:{icon:"logout"}}),t._v(" "+t._s(t.$ml.get("logout"))+" ")],1)],1)],2):t._e(),a("router-view",{key:t.$route.fullPath})],1)},n=[],i={methods:{logout:function(){this.$store.dispatch("logout")}}},o=i,l=a("2877"),c=Object(l["a"])(o,r,n,!1,null,null,null),u=c.exports,d=(a("b0c0"),a("8c4f")),m=a("2f62"),f="tasks_auth",p={auth_key:null},h={GET_STORED_AUTH:function(t){t.auth_key=localStorage.getItem(f)},PERFORM_LOGIN:function(t,e){t.auth_key=btoa(JSON.stringify(e)),localStorage.setItem(f,t.auth_key)},PERFORM_LOGOUT:function(t){t.auth_key=null,localStorage.removeItem(f)}},b={getAuth:function(t){var e=t.commit;e("GET_STORED_AUTH")},login:function(t,e){var a=t.commit,s=t.getters;!1===s.authenticated&&(a("PERFORM_LOGIN",e),st.push({name:"TarefaList"}))},logout:function(t){var e=t.commit,a=t.getters;!0===a.authenticated&&(e("PERFORM_LOGOUT"),st.push({name:"Login"}))}},g={authenticated:function(t){return!!t.auth_key}},v={state:p,mutations:h,actions:b,getters:g},k=(a("4de4"),a("7db0"),a("c740"),a("caad"),a("a434"),a("d3b7"),a("2532"),a("53ca"));function y(t,e){var a="";a="object"===Object(k["a"])(e)?JSON.stringify(e):String(e),localStorage.setItem(t,a)}function _(t){var e=localStorage.getItem(t);try{return JSON.parse(e)}catch(a){return null}}a("ac1f"),a("25f0"),a("5319");function x(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"==t?e:3&e|8;return a.toString(16)}))}var T="tasklist",$=!1,C={tasks:[],filteredTasks:[],taskForm:{title:"",date:new Date,description:""}},S={FETCH_TASKS:function(t){var e=_(T);t.tasks=e||[]},FILTER_TASKS:function(t,e){var a,s=e.title,r=e.date,n=s.toLocaleLowerCase();r&&(a=r.setHours(0,0,0,0)),t.filteredTasks=t.tasks.filter((function(t){if(a){var e=new Date(t.date).setHours(0,0,0,0);return t.title.toLocaleLowerCase().includes(n||"")&&e==a}return t.title.toLocaleLowerCase().includes(n)}))},PERSIST_TASKS:function(t){y(T,t.tasks)},CREATE_NEW_TASK:function(t){t.taskForm={title:"",date:new Date,description:""}},LOAD_TASK:function(t,e){var a=t.tasks.find((function(t){return t.id===e}));a?(t.taskForm=a,t.taskForm.date=new Date(t.taskForm.date)):$=!0},UPDATE_TASK_FIELD:function(t,e){var a=e.field,s=e.value;t.taskForm[a]=s},SAVE_TASK:function(t){if(t.taskForm.id){var e=t.taskForm.id,a=t.tasks.findIndex((function(t){return t.id==e}));a>=0&&(t.tasks[a]=t.taskForm)}else t.taskForm.id=x(),t.tasks.push(t.taskForm)},REMOVE_TASK:function(t,e){var a=t.tasks.findIndex((function(t){return t.id==e}));a>=0&&t.tasks.splice(a,1)}},w={newTask:function(t){var e=t.commit;e("CREATE_NEW_TASK")},updateTaskField:function(t,e){var a=t.commit,s=e.field,r=e.value;a("UPDATE_TASK_FIELD",{field:s,value:r})},loadTask:function(t,e){var a=t.commit;return new Promise((function(t,s){a("LOAD_TASK",e),$?s():t()}))},saveTask:function(t){var e=t.commit;return new Promise((function(t){e("SAVE_TASK"),e("PERSIST_TASKS"),t()}))},deleteTask:function(t,e){var a=t.commit;a("REMOVE_TASK",e),a("PERSIST_TASKS")},filterTasks:function(t,e){var a=t.commit,s=e.title,r=e.date;a("FETCH_TASKS"),a("FILTER_TASKS",{title:s,date:r})}},E={taskForm:function(t){return t.taskForm},tasks:function(t){return t.filteredTasks}},O={state:C,mutations:S,actions:w,getters:E};s["default"].use(m["a"]);var A=new m["a"].Store({state:{langs:[{key:"pt-BR",name:"Português"},{key:"en-US",name:"English"}]},modules:{auth:v,tarefa:O},getters:{langs:function(t){return t.langs}}}),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v(t._s(t.id?t.$ml.get("tarefa-create-editar"):t.$ml.get("tarefa-create-novo")))]),a("h2",{staticClass:"subtitle"},[t._v(t._s(t.$ml.get("tarefa-create-subtitle")))]),a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-8"},[a("b-field",{attrs:{label:t.$ml.get("titulo-label")}},[a("b-input",{attrs:{value:t.task.title,placeholder:t.$ml.get("titulo-placeholder"),maxlength:"100","has-counter":""},on:{input:function(e){return t.updateField("title",e)}}})],1)],1),a("div",{staticClass:"column is-4"},[a("b-field",{attrs:{label:t.$ml.get("data-prevista-label")}},[a("b-datepicker",{attrs:{value:t.task.date,placeholder:t.$ml.get("data-prevista-placeholder"),locale:t.$ml.current,icon:"calendar-today","trap-focus":""},on:{input:function(e){return t.updateField("date",e)}}})],1)],1),a("div",{staticClass:"column is-full"},[a("b-field",{attrs:{label:t.$ml.get("descricao-label")}},[a("b-input",{attrs:{value:t.task.description,placeholder:t.$ml.get("descricao-placeholder"),type:"textarea",maxlength:"500","has-counter":""},on:{input:function(e){return t.updateField("description",e)}}})],1)],1)]),a("nav",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("b-button",{attrs:{type:"is-light"},on:{click:t.cancel}},[t._v(t._s(t.$ml.get("cancelar-btn")))])],1),a("div",{staticClass:"level-right"},[a("b-button",{attrs:{type:"is-primary"},on:{click:t.saveTask}},[t._v(t._s(t.$ml.get("salvar-btn")))])],1)])])])},L=[],D=(a("99af"),a("a15b"),a("d81d"),{data:function(){return{id:this.$route.params.id,errors:[]}},created:function(){var t=this;this.id?this.$store.dispatch("loadTask",this.id).catch((function(){t.$router.push({name:"TarefaCreate"})})):this.$store.dispatch("newTask")},computed:{task:function(){return this.$store.getters.taskForm}},methods:{updateField:function(t,e){this.$store.dispatch("updateTaskField",{field:t,value:e})},validate:function(){this.errors=[],(!this.task.title||this.task.title.length<3)&&this.errors.push("titulo-tamanho-minimo")},saveTask:function(){var t=this;if(this.validate(),this.errors.length>0){var e=this.errors.map((function(e){return"<li>".concat(t.$ml.get(e),"</li>")})).join(""),a="<p>".concat(this.$ml.get("erros-cadastro-msg"),'</p><br><ul class="pl-5" style="list-style:disc">').concat(e,"</ul>");this.$buefy.dialog.alert({message:a,confirmText:"OK",type:"is-danger"})}else this.$store.dispatch("saveTask").then((function(){t.$router.push({name:"TarefaList"})}))},cancel:function(){this.$router.push({name:"TarefaList"})}}}),R=D,P=Object(l["a"])(R,F,L,!1,null,null,null),j=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v(t._s(t.$ml.get("tarefa-list-title")))]),a("h2",{staticClass:"subtitle"},[t._v(t._s(t.$ml.get("tarefa-list-subtitle")))]),a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-8"},[a("b-input",{attrs:{placeholder:t.$ml.get("filtro-pesquisa-placeholder"),type:"search",icon:"magnify"},on:{input:t.applyFilter},model:{value:t.filter.title,callback:function(e){t.$set(t.filter,"title",e)},expression:"filter.title"}})],1),a("div",{staticClass:"column is-4"},[a("b-datepicker",{attrs:{locale:t.$ml.current,placeholder:t.$ml.get("filtro-data-placeholder"),icon:"calendar-today","trap-focus":""},on:{input:t.applyFilter},model:{value:t.filter.date,callback:function(e){t.$set(t.filter,"date",e)},expression:"filter.date"}},[a("b-field",{attrs:{addons:"",position:"is-centered"}},[a("p",{staticClass:"control"},[a("b-button",{attrs:{type:"is-light","icon-left":"calendar-today"},on:{click:t.setToday}},[t._v(" "+t._s(t.$ml.get("hoje-btn"))+" ")])],1),a("p",{staticClass:"control"},[a("b-button",{attrs:{"icon-left":"close",type:"is-danger"},on:{click:t.setNoDate}},[t._v(" "+t._s(t.$ml.get("remover-btn"))+" ")])],1)])],1)],1),a("div",{staticClass:"column is-full"},[a("b-table",{staticClass:"v-centered",attrs:{data:t.tasks}},[a("b-table-column",{attrs:{label:t.$ml.get("titulo-label")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}])}),a("b-table-column",{attrs:{label:t.$ml.get("data-prevista-label"),width:"150",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.date?new Date(e.row.date).toLocaleDateString(t.$ml.current):"—")+" ")]}}])}),a("b-table-column",{attrs:{label:t.$ml.get("actions-column-label"),centered:"",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-field",{attrs:{addons:"",position:"is-centered"}},[a("p",{staticClass:"control"},[a("b-button",{attrs:{"icon-left":"pencil",type:"is-light",tag:"router-link",to:{name:"TarefaEdit",params:{id:e.row.id}}}},[t._v(" "+t._s(t.$ml.get("editar-btn"))+" ")])],1),a("p",{staticClass:"control"},[a("b-button",{attrs:{"icon-left":"delete",type:"is-danger"},on:{click:function(a){return t.confirmDelete(e.row)}}},[t._v(" "+t._s(t.$ml.get("excluir-btn"))+" ")])],1)])]}}])}),a("template",{slot:"empty"},[a("section",{staticClass:"section"},[a("div",{staticClass:"container has-text-centered"},[a("p",[t._v(t._s(t.$ml.get("empty-table-msg")))]),a("br"),a("b-button",{attrs:{type:"is-primary",tag:"router-link",to:{name:"TarefaCreate"}}},[t._v(" "+t._s(t.$ml.get("adicionar-tarefa-btn"))+" ")])],1)])])],2)],1)])])])},K=[],M={data:function(){return{filter:{title:"",date:null}}},created:function(){this.applyFilter()},computed:{tasks:function(){return this.$store.getters.tasks}},methods:{applyFilter:function(){this.$store.dispatch("filterTasks",this.filter)},setToday:function(){this.filter.date=new Date,this.applyFilter()},setNoDate:function(){this.filter.date=null,this.applyFilter()},confirmDelete:function(t){var e=this;this.$buefy.dialog.confirm({title:this.$ml.get("excluir-tarefa-dialog-title"),message:this.$ml.with(t.title).get("excluir-tarefa-dialog-msg"),confirmText:this.$ml.get("confirmar-btn"),cancelText:this.$ml.get("cancelar-btn"),type:"is-danger",hasIcon:!0,onConfirm:function(){return e.performDelete(t.id)}})},performDelete:function(t){this.$store.dispatch("deleteTask",t),this.applyFilter()}}},N=M,q=Object(l["a"])(N,I,K,!1,null,null,null),U=q.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section backdrop"},[a("div",{staticClass:"container is-flex is-align-items-center"},[a("div",{staticClass:"container backdrop-form"},[a("div",{staticClass:"p-4 has-text-primary is-size-7"},t._l(t.$store.getters.langs,(function(e){return a("span",{key:e.key,staticClass:"lang-selector",on:{click:function(a){return t.$ml.change(e.key)}}},[t._v(" "+t._s(e.name)+" ")])})),0),a("div",{staticClass:"backdrop-form-logo has-text-primary p-4"},[a("b-icon",{staticClass:"mr-2",attrs:{icon:"notebook-edit",size:"is-large"}}),a("span",{staticClass:"is-hidden-mobile"},[t._v(t._s(t.$ml.get("brand-name")))])],1),a("div",{staticClass:"p-4"},[a("b-field",{attrs:{label:t.$ml.get("login-label"),"custom-class":"has-text-primary"}},[a("b-input",{attrs:{"custom-class":"has-text-primary",maxlength:"100","has-counter":!1},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.authenticate(e)}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("b-field",{attrs:{label:t.$ml.get("senha-label"),"custom-class":"has-text-primary"}},[a("b-input",{attrs:{"custom-class":"has-text-primary",type:"password",maxlength:"100","has-counter":!1},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.authenticate(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("div",{staticClass:"has-text-centered p-4"},[a("b-button",{attrs:{type:"is-primary"},on:{click:t.authenticate}},[t._v(t._s(t.$ml.get("entrar-btn")))]),a("br"),a("p",{staticClass:"pt-4"},[a("router-link",{attrs:{to:{name:"Signup"}}},[t._v(t._s(t.$ml.get("cadastro-link")))])],1)],1)])])])},H=[],V={data:function(){return{username:"",password:""}},methods:{authenticate:function(){if("admin"==this.username&&"admin"==this.password){var t={username:this.username,password:this.password};this.$store.dispatch("login",t)}else this.$buefy.dialog.alert({message:this.$ml.get("incorrect-credentials-msg"),confirmText:"OK",type:"is-danger"})}}},G=V,J=(a("8a22"),Object(l["a"])(G,z,H,!1,null,"3d73f1b4",null)),B=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section backdrop"},[a("div",{staticClass:"container is-flex is-align-items-center"},[a("div",{staticClass:"container backdrop-form"},[a("div",{staticClass:"p-4 has-text-primary is-size-7"},t._l(t.$store.getters.langs,(function(e){return a("span",{key:e.key,staticClass:"lang-selector",on:{click:function(a){return t.$ml.change(e.key)}}},[t._v(" "+t._s(e.name)+" ")])})),0),a("div",{staticClass:"backdrop-title p-4"},[t._v(t._s(t.$ml.get("cadastro-title")))]),a("div",{staticClass:"p-4"},[a("b-field",{attrs:{label:t.$ml.get("nome-label"),"custom-class":"has-text-primary"}},[a("b-input",{attrs:{"custom-class":"has-text-primary"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.finishSignup(e)}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-field",{attrs:{label:t.$ml.get("login-label"),"custom-class":"has-text-primary"}},[a("b-input",{attrs:{"custom-class":"has-text-primary"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.finishSignup(e)}},model:{value:t.form.login,callback:function(e){t.$set(t.form,"login",e)},expression:"form.login"}})],1),a("b-field",{attrs:{label:t.$ml.get("senha-label"),"custom-class":"has-text-primary"}},[a("b-input",{attrs:{type:"password","custom-class":"has-text-primary"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.finishSignup(e)}},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),a("b-field",{attrs:{label:t.$ml.get("confirmar-senha-label"),"custom-class":"has-text-primary"}},[a("b-input",{attrs:{type:"password","custom-class":"has-text-primary"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.finishSignup(e)}},model:{value:t.form.confirmpass,callback:function(e){t.$set(t.form,"confirmpass",e)},expression:"form.confirmpass"}})],1)],1),a("div",{staticClass:"has-text-centered p-4"},[a("b-button",{attrs:{type:"is-primary"},on:{click:t.finishSignup}},[t._v(t._s(t.$ml.get("concluir-btn")))]),a("b-button",{staticClass:"ml-3",attrs:{type:"is-info",tag:"router-link",to:{name:"Login"}}},[t._v(t._s(t.$ml.get("voltar-btn")))])],1)])])])},Y=[],Q={data:function(){return{form:{name:"",login:"",pass:"",confirmpass:""},errors:[]}},methods:{validate:function(){this.errors=[],this.form.name||this.errors.push("preencher-nome"),this.form.login||this.errors.push("preencher-login"),(!this.form.pass||this.form.pass.length<3)&&this.errors.push("preencher-senha-caracteres"),this.form.confirmpass||this.errors.push("preencher-confirmar-senha"),this.form.pass!==this.form.confirmpass&&this.errors.push("senhas-nao-iguais")},finishSignup:function(){var t=this;if(this.validate(),this.errors.length>0){var e=this.errors.map((function(e){return"<li>".concat(t.$ml.get(e),"</li>")})).join(""),a="<p>".concat(this.$ml.get("erros-cadastro-msg"),'</p><br><ul class="pl-5" style="list-style:disc">').concat(e,"</ul>");this.$buefy.dialog.alert({message:a,confirmText:"OK",type:"is-danger"})}else this.$buefy.dialog.alert({message:this.$ml.get("cadastro-finalizado-msg"),confirmText:"OK",type:"is-success"})}}},X=Q,Z=(a("1857"),Object(l["a"])(X,W,Y,!1,null,"7971a786",null)),tt=Z.exports;s["default"].use(d["a"]);var et=[{path:"/task",name:"TarefaCreate",meta:{requiresAuth:!0},component:j},{path:"/task/:id",name:"TarefaEdit",meta:{requiresAuth:!0},component:j},{path:"/tasks",name:"TarefaList",meta:{requiresAuth:!0},component:U},{path:"/login",name:"Login",meta:{requiresAuth:!1},component:B},{path:"/signup",name:"Signup",meta:{requiresAuth:!1},component:tt},{path:"*",name:"Any"}],at=new d["a"]({mode:"history",base:"/vue-todo/",routes:et});at.beforeEach((function(t,e,a){var s=A.getters.authenticated;s?t.meta.requiresAuth&&"Any"!==t.name?a():a({name:"TarefaList"}):!0===t.meta.requiresAuth||"Any"===t.name?a({name:"Login"}):a()}));var st=at,rt=a("353c"),nt={"entrar-btn":"Entrar","concluir-btn":"Concluir","voltar-btn":"Voltar","confirmar-btn":"Confirmar","cancelar-btn":"Cancelar","salvar-btn":"Salvar","editar-btn":"Editar","excluir-btn":"Excluir","hoje-btn":"Hoje","remover-btn":"Remover","lang-name":"Português (BR)","brand-name":"Minhas Tarefas",novo:"Novo",lista:"Lista",logout:"Sair","cadastro-title":"Cadastro","nome-label":"Nome","login-label":"Login","senha-label":"Senha","confirmar-senha-label":"Confirme a senha","cadastro-link":"Cadastre-se","incorrect-credentials-msg":"Credenciais incorretas. Verifique e tente novamente.","erros-cadastro-msg":"Não foi possível concluir o cadastro pelos seguintes motivos:","preencher-nome":"Obrigatório preencher o nome","preencher-login":"Obrigatório preencher o login","preencher-senha-caracteres":"A senha deve conter ao menos 3 caracteres","preencher-confirmar-senha":"Você deve confirmar sua senha","senhas-nao-iguais":"As senhas não são iguais","cadastro-finalizado-msg":"Cadastro correto, porém não disponível. Utilize admin/admin para logar.","tarefa-create-editar":"Editar Tarefa","tarefa-create-novo":"Nova Tarefa","tarefa-create-subtitle":"Preencha os dados da tarefa","titulo-label":"Título","titulo-placeholder":"Título da Tarefa","data-prevista-label":"Data Prevista","data-prevista-placeholder":"Selecione uma data","descricao-label":"Descrição","descricao-placeholder":"Preencha uma descrição mais detalhada da tarefa","titulo-tamanho-minimo":"O título deve possuir ao menos 3 caracteres","tarefa-list-title":"Tarefas","tarefa-list-subtitle":"Aqui se encontram as tarefas disponíveis","filtro-pesquisa-placeholder":"Pesquisar tarefas...","filtro-data-placeholder":"Selecione uma data","actions-column-label":"Ações","excluir-tarefa-dialog-title":"Excluir Tarefa","excluir-tarefa-dialog-msg":'Tem certeza que deseja excluir a tarefa <b>"{0}"</b>?',"empty-table-msg":"Não existem tarefas registradas com estes critérios","adicionar-tarefa-btn":"Adicionar Tarefa"},it={"entrar-btn":"Sign In","concluir-btn":"Finish","voltar-btn":"Return","confirmar-btn":"Confirm","cancelar-btn":"Cancel","salvar-btn":"Save","editar-btn":"Edit","excluir-btn":"Delete","hoje-btn":"Today","remover-btn":"Remove","lang-name":"English","brand-name":"My Tasks",novo:"New",lista:"List",logout:"Logout","cadastro-title":"Sign Up","nome-label":"Name","login-label":"Login","senha-label":"Password","confirmar-senha-label":"Confirm Password","cadastro-link":"Register","incorrect-credentials-msg":"Incorrect credentials. Verify them and try again.","erros-cadastro-msg":"It wasn't possible to finish the registration for the following reasons:","preencher-nome":"The name field needs to be filled","preencher-login":"The login field needs to be filled","preencher-senha-caracteres":"The password must contain at least 3 characters","preencher-confirmar-senha":"You must confirm your password","senhas-nao-iguais":"The passwords do not match","cadastro-finalizado-msg":"Registration correct, but unavailable. Use admin/admin to login.","tarefa-create-editar":"Edit Task","tarefa-create-novo":"New Task","tarefa-create-subtitle":"Fill out the task information","titulo-label":"Title","titulo-placeholder":"Task Title","data-prevista-label":"Due Date","data-prevista-placeholder":"Select a date","descricao-label":"Description","descricao-placeholder":"Enter a detailed description of the task","titulo-tamanho-minimo":"The title must contain at least 3 characters","tarefa-list-title":"Tasks","tarefa-list-subtitle":"Here are the available tasks","filtro-pesquisa-placeholder":"Search tasks...","filtro-data-placeholder":"Select a date","actions-column-label":"Actions","excluir-tarefa-dialog-title":"Delete Task","excluir-tarefa-dialog-msg":'Are you sure you would like to remove the <b>"{0}"</b> task?',"empty-table-msg":"There are no tasks with this criteria","adicionar-tarefa-btn":"Add Task"};s["default"].use(rt["MLInstaller"]);new rt["MLCreate"]({initial:"pt-BR",save:!0,languages:[new rt["MLanguage"]("en-US").create(it),new rt["MLanguage"]("pt-BR").create(nt)]}),a("5363"),a("b7e3");var ot=a("289d");s["default"].use(ot["a"]),s["default"].config.productionTip=!1,A.dispatch("getAuth"),new s["default"]({router:st,store:A,render:function(t){return t(u)}}).$mount("#app")},"8a22":function(t,e,a){"use strict";a("ad5c")},"8c1c":function(t,e,a){},ad5c:function(t,e,a){},b7e3:function(t,e,a){}});
//# sourceMappingURL=app.034f4496.js.map