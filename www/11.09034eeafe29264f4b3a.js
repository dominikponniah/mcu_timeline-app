(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{TUkU:function(e,t,n){"use strict";n.r(t),n.d(t,"Tab2PageModule",function(){return h});var a=n("TEn/"),i=n("ofXK"),c=n("3Pt+"),l=n("qtYk"),r=n("tyNb"),o=n("mrSG"),s=n("fXoL"),b=n("eHuo"),u=n("sYmb");const g=[{path:"",component:(()=>{class e{constructor(e,t,n){this.languageService=e,this.actionSheetController=t,this.translateService=n}ngAfterViewInit(){this.currentLanguage=this.languageService.getCurrentLanguage()}changeLanguage(){return Object(o.a)(this,void 0,void 0,function*(){var e=[];this.languageService.getLanguages().forEach(t=>{e.push({text:t.text,handler:()=>{this.languageService.changeLanguage(t.value),this.currentLanguage=t.value}})}),e.push({text:this.translateService.instant("EXTRAS.PICKER.cancel"),icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}});const t=yield this.actionSheetController.create({header:this.translateService.instant("EXTRAS.PICKER.title"),cssClass:"my-custom-class",buttons:e});yield t.present();const{role:n}=yield t.onDidDismiss();console.log("onDidDismiss resolved with role",n)})}openURL(e){window.open(e)}clearStorage(){localStorage.clear(),window.location.reload()}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(b.a),s.Jb(a.a),s.Jb(u.d))},e.\u0275cmp=s.Db({type:e,selectors:[["app-tab2"]],decls:33,vars:21,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"click"],["slot","end","id","flag","alt","",3,"src"]],template:function(e,t){1&e&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.kc(3),s.Xb(4,"translate"),s.Lb(),s.Lb(),s.Lb(),s.Mb(5,"ion-content",1),s.Mb(6,"ion-header",2),s.Mb(7,"ion-toolbar"),s.Mb(8,"ion-title",3),s.kc(9),s.Xb(10,"translate"),s.Lb(),s.Lb(),s.Lb(),s.Kb(11,"br"),s.Mb(12,"ion-item",4),s.Ub("click",function(){return t.changeLanguage()}),s.Kb(13,"img",5),s.Mb(14,"ion-label"),s.kc(15),s.Xb(16,"translate"),s.Lb(),s.Lb(),s.Kb(17,"br"),s.Mb(18,"ion-list"),s.Mb(19,"ion-item",4),s.Ub("click",function(){return t.openURL("https://www.disneyplus.com/de-de/brand/marvel")}),s.Mb(20,"ion-label"),s.kc(21),s.Xb(22,"translate"),s.Lb(),s.Lb(),s.Mb(23,"ion-item",4),s.Ub("click",function(){return t.openURL("https://www.instagram.com/marvel/")}),s.Mb(24,"ion-label"),s.kc(25),s.Xb(26,"translate"),s.Lb(),s.Lb(),s.Lb(),s.Kb(27,"br"),s.Mb(28,"ion-list"),s.Mb(29,"ion-item",4),s.Ub("click",function(){return t.clearStorage()}),s.Mb(30,"ion-label"),s.kc(31),s.Xb(32,"translate"),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.bc("translucent",!0),s.zb(3),s.mc(" ",s.Yb(4,9,"EXTRAS.title")," "),s.zb(2),s.bc("fullscreen",!0),s.zb(4),s.mc(" ",s.Yb(10,11,"EXTRAS.title")," "),s.zb(4),s.bc("src","assets/img/flags/"+t.currentLanguage+".png",s.gc),s.zb(2),s.lc(s.Yb(16,13,"EXTRAS.language")),s.zb(6),s.lc(s.Yb(22,15,"EXTRAS.LINKS.disneyplus")),s.zb(4),s.lc(s.Yb(26,17,"EXTRAS.LINKS.instagram")),s.zb(6),s.lc(s.Yb(32,19,"EXTRAS.ACTION.delete")))},directives:[a.i,a.s,a.r,a.h,a.k,a.l,a.m],pipes:[u.c],styles:["#flag[_ngcontent-%COMP%]{height:20px}"]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[r.i.forChild(g)],r.i]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[a.t,i.b,c.a,l.a,d,u.b]]}),e})()}}]);