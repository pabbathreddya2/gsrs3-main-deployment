"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[5353],{91770:function(J,S,t){t.d(S,{n:function(){return D}});var b=t(78069),F=t(48047),v=t(95758),T=t(12570),y=t(44250),n=t(76442),x=t(36362),E=t(53349),Z=t(95465),e=t(87317);function O(m,p){if(1&m){var s=n.EpF();n.TgZ(0,"app-previous-references",4),n.NdJ("selectedReference",function(_){return n.CHM(s),n.oxw().fillReference(_)}),n.qZA()}}function M(m,p){if(1&m){var s=n.EpF();n.TgZ(0,"div"),n._UZ(1,"app-reference-form",5,6),n.TgZ(3,"div",7),n._UZ(4,"span",8),n.TgZ(5,"button",9),n.NdJ("click",function(){return n.CHM(s),n.oxw().cancel()}),n._uU(6,"Cancel"),n.qZA(),n.TgZ(7,"button",10),n.NdJ("click",function(){return n.CHM(s),n.oxw().save()}),n._uU(8," Save "),n.qZA(),n.qZA(),n.qZA()}if(2&m){var r=n.MAs(2),_=n.oxw();n.xp6(1),n.Q6J("reference",_.reference),n.xp6(6),n.Q6J("disabled",!r||!r.isValid)}}var D=function(){var m=function(){function p(s,r,_){var h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(0,b.Z)(this,p),this.dialogRef=s,this.substanceService=r,this.authService=_,this.reference=h,this.showPrev=!1}return(0,F.Z)(p,[{key:"ngOnInit",value:function(){var r=this;this.dialogRef.beforeClosed().subscribe(function(){return r.dialogRef.close(r.reference.docType&&""!==r.reference.docType&&r.reference.citation&&""!==r.reference.citation?r.reference:null)})}},{key:"save",value:function(){this.dialogRef.close(this.reference)}},{key:"cancel",value:function(){this.dialogRef.close()}},{key:"fillReference",value:function(r){delete r.uuid,delete r.lastEdited,delete r.lastEditedBy,delete r.created,delete r.createdBy,delete r._self,r.docType&&""!==r.docType&&r.citation&&""!==r.citation&&(this.reference=r),this.showPrev=!1}}]),p}();return m.\u0275fac=function(s){return new(s||m)(n.Y36(v.so),n.Y36(T.d),n.Y36(y.e),n.Y36(v.WI))},m.\u0275cmp=n.Xpm({type:m,selectors:[["app-refernce-form-dialog"]],decls:5,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content","","name","reference-dialog-container","id","reference-dialog-container"],[3,"selectedReference",4,"ngIf"],[4,"ngIf"],[3,"selectedReference"],["hideDelete","true","id","reference-dialog-form","name","reference-dialog-form",3,"reference"],["referenceForm",""],[1,"actions"],[1,"middle-fill"],["mat-button","",3,"click"],["mat-button","",3,"disabled","click"]],template:function(s,r){1&s&&(n.TgZ(0,"h1",0),n._uU(1),n.qZA(),n.TgZ(2,"div",1),n.YNc(3,O,1,0,"app-previous-references",2),n.YNc(4,M,9,2,"div",3),n.qZA()),2&s&&(n.xp6(1),n.hij("",r.reference.uuid?"Edit":"Add"," Reference"),n.xp6(2),n.Q6J("ngIf",r.showPrev),n.xp6(1),n.Q6J("ngIf",r.reference))},directives:[v.uh,v.xY,x.O5,E.s,Z.b,e.lW],styles:[".actions[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex}.form-row[_ngcontent-%COMP%]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}"]}),m}()},55353:function(J,S,t){t.r(S),t.d(S,{SubstanceFormReferencesModule:function(){return j}});var b=t(48047),F=t(78069),v=t(36362),T=t(24582),y=t(7318),n=t(79550),x=t(91770),E=t(24874),Z=t(24936),e=t(76442),O=t(95758),M=t(78444),D=t(66088),m=t(44770),p=t(43365),s=t(90587),r=t(26439),_=t(51279),h=t(95465),C=t(19975),I=t(87317),P=t(65590);function U(o,d){if(1&o&&(e.TgZ(0,"mat-form-field",6),e._UZ(1,"input",7),e.qZA()),2&o){var c=e.oxw();e.Q6J("floatLabel","never"),e.xp6(1),e.Q6J("formControl",c.searchControl)}}var A=function(){return[5,10,25,100]};function N(o,d){if(1&o){var c=e.EpF();e.TgZ(0,"mat-paginator",8),e.NdJ("page",function(i){e.CHM(c);var f=e.oxw();return f.pageChange(i,f.analyticsEventCategory)}),e.qZA()}if(2&o){var a=e.oxw();e.Q6J("length",a.filtered&&a.filtered.length||0)("pageIndex",a.page)("pageSize",5)("pageSizeOptions",e.DdM(4,A))}}function Y(o,d){1&o&&e._UZ(0,"mat-divider",12),2&o&&e.Q6J("inset",!0)}function L(o,d){if(1&o){var c=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"app-reference-form",10),e.NdJ("referenceDeleted",function(f){return e.CHM(c),e.oxw().deleteReference(f)}),e.qZA(),e.YNc(2,Y,1,1,"mat-divider",11),e.qZA()}if(2&o){var a=d.$implicit,u=d.last;e.Q6J("id",a.uuid),e.xp6(1),e.Q6J("reference",a),e.xp6(1),e.Q6J("ngIf",!u)}}function Q(o,d){if(1&o){var c=e.EpF();e.TgZ(0,"mat-paginator",8),e.NdJ("page",function(i){e.CHM(c);var f=e.oxw();return f.pageChange(i,f.analyticsEventCategory)}),e.qZA()}if(2&o){var a=e.oxw();e.Q6J("length",a.filtered&&a.filtered.length||0)("pageIndex",a.page)("pageSize",5)("pageSizeOptions",e.DdM(4,A))}}function B(o,d){if(1&o){var c=e.EpF();e.TgZ(0,"div",13),e._UZ(1,"span",2),e.TgZ(2,"button",14),e.NdJ("click",function(){return e.CHM(c),e.oxw().addSubstanceReference()}),e._uU(3," Add reference "),e._UZ(4,"mat-icon",15),e.qZA(),e.qZA()}}var W=function(){var o=function(d){(0,T.Z)(a,d);var c=(0,y.Z)(a);function a(u,i,f,g,R){var l;return(0,F.Z)(this,a),(l=c.call(this,g)).substanceFormReferencesService=u,l.dialog=i,l.scrollToService=f,l.gaService=g,l.overlayContainerService=R,l.subscriptions=[],l.analyticsEventCategory="substance form references",l}return(0,b.Z)(a,[{key:"ngOnInit",value:function(){this.canAddItemUpdate.emit(!0),this.menuLabelUpdate.emit("References"),this.overlayContainer=this.overlayContainerService.getContainerElement()}},{key:"ngAfterViewInit",value:function(){var i=this,f=this.substanceFormReferencesService.substanceReferences.subscribe(function(g){i.references=g,i.filtered=g;var R=i.searchControl.valueChanges.subscribe(function(l){i.filterList(l,i.references,i.analyticsEventCategory)},function(l){console.log(l)});i.subscriptions.push(R),i.page=0,i.pageChange()});this.subscriptions.push(f)}},{key:"ngOnDestroy",value:function(){this.componentDestroyed.emit(),this.subscriptions.forEach(function(i){i.unsubscribe()})}},{key:"openReferenceFormDialog",value:function(){var i=this,f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{access:[]},g=this.dialog.open(x.n,{data:f,width:"900px"});this.overlayContainer.style.zIndex="1002";var R=g.afterClosed().subscribe(function(l){i.overlayContainer.style.zIndex=null,null!=l&&l.doctype&&l.citation&&i.substanceFormReferencesService.addSubstanceReference(l)});this.subscriptions.push(R)}},{key:"addItem",value:function(){this.addSubstanceReference()}},{key:"addSubstanceReference",value:function(){var i=this,f=this.substanceFormReferencesService.addSubstanceReference({});setTimeout(function(){i.scrollToService.scrollToElement(f.uuid,"center")},10)}},{key:"deleteReference",value:function(i){this.substanceFormReferencesService.deleteSubstanceReference(i)}}]),a}(n.u);return o.\u0275fac=function(c){return new(c||o)(e.Y36(Z.v),e.Y36(O.uw),e.Y36(M.i),e.Y36(E.$),e.Y36(D.Xj))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-substance-form-references-card"]],features:[e.qOj],decls:7,vars:5,consts:[[1,"flex-row"],["class","search",3,"floatLabel",4,"ngIf"],[1,"middle-fill"],["showFirstLastButtons","true",3,"length","pageIndex","pageSize","pageSizeOptions","page",4,"ngIf"],["class","reference","appScrollToTarget","",3,"id",4,"ngFor","ngForOf"],["style","display: flex;",4,"ngIf"],[1,"search",3,"floatLabel"],["matInput","","placeholder","Search",3,"formControl"],["showFirstLastButtons","true",3,"length","pageIndex","pageSize","pageSizeOptions","page"],["appScrollToTarget","",1,"reference",3,"id"],[3,"reference","referenceDeleted"],["class","form-divider",3,"inset",4,"ngIf"],[1,"form-divider",3,"inset"],[2,"display","flex"],["mat-button","",3,"click"],["svgIcon","add_circle_outline"]],template:function(c,a){1&c&&(e.TgZ(0,"div",0),e.YNc(1,U,2,2,"mat-form-field",1),e._UZ(2,"span",2),e.qZA(),e.YNc(3,N,1,5,"mat-paginator",3),e.YNc(4,L,3,3,"div",4),e.YNc(5,Q,1,5,"mat-paginator",3),e.YNc(6,B,5,0,"div",5)),2&c&&(e.xp6(1),e.Q6J("ngIf",a.references&&a.references.length>a.pageSize),e.xp6(2),e.Q6J("ngIf",a.references&&a.references.length>5),e.xp6(1),e.Q6J("ngForOf",a.paged),e.xp6(1),e.Q6J("ngIf",a.references&&a.references.length>5),e.xp6(1),e.Q6J("ngIf",a.references&&a.references.length>0))},directives:[v.O5,m.KE,p.Nt,s.Fj,s.JJ,s.oH,r.NW,v.sg,_.P,h.b,C.d,I.lW,P.Hw],styles:[".mat-divider.mat-divider-inset[_ngcontent-%COMP%]{margin-left:0}.mat-divider[_ngcontent-%COMP%]{border-top-color:#00000080}.reference[_ngcontent-%COMP%]:nth-child(odd){background-color:#448aff12}.reference[_ngcontent-%COMP%]:nth-child(odd)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:#448aff26}.reference[_ngcontent-%COMP%]:nth-child(even)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:#80808026}.search[_ngcontent-%COMP%]{width:400px;max-width:100%}"]}),o}(),z=t(64061),K=t(7168),H=t(94673),j=function(){var o=(0,b.Z)(function d(){(0,F.Z)(this,d)});return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[v.ez,z.o.forChild(W),K.O,C.t,H.w,P.Ps,I.ot,m.lN,s.UX,s.u5,r.TU,p.c]]}),o}()}}]);
//# sourceMappingURL=5353.e5b8a074ea6e2a34.js.map