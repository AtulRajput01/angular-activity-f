"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[110],{8110:(k,v,a)=>{a.r(v),a.d(v,{EventsModule:()=>U});var d=a(6814),m=a(1430),e=a(9212),r=a(95),p=a(7460),g=a(653),_=a(3955),o=a(5020),h=a(1272);function A(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.submit())})("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.toggleLiveDemo())}),e._uU(1,"Save Changes"),e.qZA()}}function C(s,u){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td",31),e._UZ(2,"c-avatar",32),e.qZA(),e.TgZ(3,"td")(4,"div"),e._uU(5),e.qZA(),e.TgZ(6,"div")(7,"span"),e._uU(8),e.qZA()()(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"button",33),e.NdJ("click",function(){const c=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.viewEventById(c._id))})("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.toggleLiveDemo())}),e.O4$(),e.TgZ(17,"svg",34),e._UZ(18,"path",35)(19,"path",36),e.qZA()(),e.kcU(),e.TgZ(20,"button",37),e.NdJ("click",function(){const c=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.getEventById(c._id))})("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.toggleLiveDemo())})("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.clickAddMember())}),e.O4$(),e.TgZ(21,"svg",38),e._UZ(22,"path",39)(23,"path",40),e.qZA()(),e.kcU(),e.TgZ(24,"button",33),e.NdJ("click",function(){const c=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.deleteEvent(c._id))}),e.O4$(),e.TgZ(25,"svg",41),e._UZ(26,"path",42),e.qZA()()()()}if(2&s){const t=u.$implicit;e.xp6(2),e.Q6J("src",t.images[0].url),e.xp6(3),e.hij(" ",t.name," "),e.xp6(3),e.hij(" New | Registered: ",t.formattedCreatedAt," "),e.xp6(2),e.hij(" ",t.place," "),e.xp6(2),e.hij(" ",t.formattedCreatedAt," "),e.xp6(2),e.hij(" $ ",t.price,".00 ")}}const f=[{path:"",component:(()=>{class s{constructor(){this.userId=null,this.eventsfb=(0,e.f3M)(r.qu),this.ActivitiesService=(0,e.f3M)(p.B),this.router=(0,e.f3M)(m.F0),this.visible=!1,this.isEditMode=!1,this.isViewClicked=!1,this.selectedImages=[],this.showSaveChanges=!0}toggleLiveDemo(){this.visible=!this.visible}handleLiveDemoChange(t){this.visible=t}ngOnInit(){this.eventsForm=this.eventsfb.group({name:["",r.kI.required],place:["",r.kI.required],price:["",r.kI.required],images:["",r.kI.required],termComdtion:["",r.kI.required],description:["",r.kI.required],type:["event",r.kI.required]}),this.userId&&this.getEventById(this.userId),this.getAllEvents()}onFileChanged(t){this.selectedImages=Array.from(t.target.files),this.eventsForm.patchValue({images:this.selectedImages.length>0?this.selectedImages:""})}submit(){console.log(this.eventsForm.value);const t=new FormData;t.append("name",this.eventsForm.get("name")?.value),t.append("place",this.eventsForm.get("place")?.value),t.append("price",this.eventsForm.get("price")?.value),t.append("termComdtion",this.eventsForm.get("termComdtion")?.value),t.append("description",this.eventsForm.get("description")?.value),t.append("type","event"),this.selectedImages.forEach(i=>{t.append("images",i,i.name)}),this.userId?this.ActivitiesService.updateActivityService(this.userId,t).subscribe({next:i=>{alert("Upcoming Event Updated"),this.selectedImages=[],this.resetForm(),this.getAllEvents()},error:i=>{console.log(i)}}):this.ActivitiesService.createActivitiesService(t).subscribe({next:i=>{alert("New Upcoming Event Created"),this.selectedImages=[],this.resetForm(),this.getAllEvents()},error:i=>{console.log(i)}})}clickAddMember2(){this.resetForm()}resetForm(){this.eventsForm.reset(),this.selectedImages=[],this.userId=null,this.showSaveChanges=!0}clickAddMember(){this.eventsForm.reset(),this.isEditMode=!1,this.isViewClicked=!1,this.showSaveChanges=!0}getAllEvents(){this.ActivitiesService.getAllActivitiesService().subscribe(t=>{t&&t.hasOwnProperty("data")?this.eventsArray=t.data.filter(n=>"event"===n.type).map(n=>({...n,formattedCreatedAt:(0,g.J)(new Date(n.createdAt))?(0,_.WU)(new Date(n.createdAt),"yyyy-MM-dd"):"Invalid Date"})):console.error("Response does not contain any Upcoming Events.")})}deleteEvent(t){confirm("Are you sure you want to delete this Event?")&&this.ActivitiesService.deleteActivitiesService(t).subscribe({next:i=>{alert("Your Event Deleted"),this.getAllEvents()},error:i=>{console.error(i),alert("Failed to delete Your Event")}})}getEventById(t){this.ActivitiesService.getActivitiesService(t).subscribe(i=>{this.editData=i,console.log(this.editData.data),this.userId=this.editData.data._id,this.eventsForm.patchValue({name:this.editData.data.name,place:this.editData.data.place,price:this.editData.data.price,images:this.editData.data.images,termComdtion:this.editData.data.termComdtion,description:this.editData.data.description,type:this.editData.data.type}),this.isEditMode=!0,this.isViewClicked=!1,this.showSaveChanges=!0})}viewEventById(t){this.ActivitiesService.getActivitiesService(t).subscribe(i=>{this.editData=i,console.log(this.editData.data),this.eventsForm.patchValue({name:this.editData.data.name,place:this.editData.data.place,price:this.editData.data.price,images:this.editData.data.images,termComdtion:this.editData.data.termComdtion,description:this.editData.data.description}),this.isEditMode=!1,this.isViewClicked=!0,this.showSaveChanges=!1})}static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-events"]],inputs:{userId:"userId"},decls:73,vars:8,consts:[["xs",""],[1,"mb-4"],[1,"d-flex","align-items-center","justify-content-between"],["cButton","",1,"ms-md-2",3,"click"],["size","lg","id","liveDemoModal",3,"visible","visibleChange"],["cModalTitle",""],["cButtonClose","",3,"click"],["cForm","",3,"formGroup"],[3,"md"],["cLabel","","for","name"],[2,"color","red"],["formControlName","name","id","name","type","text","cFormControl","","placeholder","Add Event Name"],["cLabel","","for","place"],["formControlName","place","id","place","type","text","cFormControl","","placeholder","Add Place"],["cLabel","","for","file"],["multiple","","cFormControl","","id","file","type","file","value","Enter Event Image",3,"change"],[1,"my-2"],["cLabel","","for","price"],["formControlName","price","id","price","type","text","cFormControl","","placeholder","Add Price"],["cLabel","","for","termComdtion"],["formControlName","termComdtion","id","termComdtion","type","text","cFormControl","","placeholder","Add Terms And Comdtions"],["cLabel","","for","description"],["formControlName","description","id","description","type","text","cFormControl","","placeholder","Add Description"],["cButton","","color","secondary",3,"click"],["cButton","","color","success",3,"click",4,"ngIf"],["align","middle","cTable","",1,"mb-0","border",3,"hover","responsive","striped"],["cTableColor","light"],[1,"text-center","ps-0"],["cIcon","","name","cilPeople"],[4,"ngFor","ngForOf"],["cButton","","color","success",3,"click"],[1,"text-center"],["shape","rounded-1","size","md","status","Info",2,"width","3rem","height","2rem",3,"src"],[1,"border-0",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","22","height","22","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-eye"],["d","M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"],["d","M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"],[1,"border-0","mx-2",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","22","height","22","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-pencil-square"],["d","M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"],["fill-rule","evenodd","d","M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"],["xmlns","http://www.w3.org/2000/svg","width","22","height","22","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash3"],["d","M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"]],template:function(i,n){1&i&&(e.TgZ(0,"c-row")(1,"c-col",0)(2,"c-card",1)(3,"c-card-header")(4,"div",2),e._uU(5," Manage Upcoming Events "),e.TgZ(6,"button",3),e.NdJ("click",function(){return n.toggleLiveDemo()})("click",function(){return n.clickAddMember()}),e._uU(7," Add New Upcoming Event "),e.qZA()()(),e.TgZ(8,"c-modal",4),e.NdJ("visibleChange",function(l){return n.handleLiveDemoChange(l)}),e.TgZ(9,"c-modal-header")(10,"h5",5),e._uU(11),e.qZA(),e.TgZ(12,"button",6),e.NdJ("click",function(){return n.toggleLiveDemo()}),e.qZA()(),e.TgZ(13,"c-modal-body")(14,"form",7)(15,"c-row")(16,"c-col",8)(17,"div")(18,"label",9),e._uU(19,"Add Event Name "),e.TgZ(20,"span",10),e._uU(21,"*"),e.qZA()(),e._UZ(22,"input",11),e.qZA()(),e.TgZ(23,"c-col",8)(24,"div")(25,"label",12),e._uU(26,"Add Place"),e.qZA(),e._UZ(27,"input",13),e.qZA()(),e.TgZ(28,"c-col",8)(29,"div")(30,"label",14),e._uU(31,"Upload Pictures "),e.TgZ(32,"span",10),e._uU(33,"*"),e.qZA()(),e.TgZ(34,"input",15),e.NdJ("change",function(l){return n.onFileChanged(l)}),e.qZA()()()(),e.TgZ(35,"c-row",16)(36,"c-col",8)(37,"div")(38,"label",17),e._uU(39,"Add Price"),e.qZA(),e._UZ(40,"input",18),e.qZA()(),e.TgZ(41,"c-col",8)(42,"div")(43,"label",19),e._uU(44,"Add Terms And Comdtions"),e.qZA(),e._UZ(45,"input",20),e.qZA()(),e.TgZ(46,"c-col",8)(47,"div")(48,"label",21),e._uU(49,"Add Description"),e.qZA(),e._UZ(50,"input",22),e.qZA()()()()(),e.TgZ(51,"c-modal-footer")(52,"button",23),e.NdJ("click",function(){return n.toggleLiveDemo()}),e._uU(53,"Close"),e.qZA(),e.YNc(54,A,2,0,"button",24),e.qZA()(),e.TgZ(55,"c-card-body")(56,"table",25)(57,"thead",26)(58,"tr")(59,"th",27),e.O4$(),e._UZ(60,"svg",28),e.qZA(),e.kcU(),e.TgZ(61,"th"),e._uU(62,"Event Name"),e.qZA(),e.TgZ(63,"th"),e._uU(64,"Place"),e.qZA(),e.TgZ(65,"th"),e._uU(66,"Date"),e.qZA(),e.TgZ(67,"th"),e._uU(68,"Price"),e.qZA(),e.TgZ(69,"th"),e._uU(70,"Action"),e.qZA()()(),e.TgZ(71,"tbody"),e.YNc(72,C,27,6,"tr",29),e.qZA()()()()()()),2&i&&(e.xp6(8),e.Q6J("visible",n.visible),e.xp6(3),e.hij(" ",n.isEditMode?"Edit Upcoming Event Details":n.isViewClicked?"View Upcoming Event Details":"Add New Upcoming Event"," "),e.xp6(3),e.Q6J("formGroup",n.eventsForm),e.xp6(40),e.Q6J("ngIf",n.showSaveChanges),e.xp6(2),e.Q6J("hover",!0)("responsive",!0)("striped",!0),e.xp6(16),e.Q6J("ngForOf",n.eventsArray))},dependencies:[d.sg,d.O5,o.KF4,o.zS7,o.YI7,o.Rbl,o.vPP,o.AkF,o.yue,o.nkx,h.ar,o.Yp0,o.iok,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,o.Hq3,o.PFQ,o.$_X,o.oHf,o.eFW,o.Ao0,o.auY,o.io7]})}return s})(),data:{title:"UpcomingEvents"}}];let Z=(()=>{class s{static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(f),m.Bz]})}return s})();var b=a(9862),E=a(1303),T=a(3966);let U=(()=>{class s{static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[d.ez,Z,o.zkK,o.dTQ,o.dGk,h.QX,o.P4_,d.ez,o.zE6,o.qek,r.UX,o.hJ1,o.ejP,o.hJ1,o.ga2,E.N,o.FxY,o.U$I,T.WidgetsModule,b.JF]})}return s})()}}]);