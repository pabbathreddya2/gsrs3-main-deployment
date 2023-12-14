"use strict";(self.webpackChunkgsrs_client=self.webpackChunkgsrs_client||[]).push([[6620],{46620:function(G,f,n){n.r(f),n.d(f,{SsgParentSubstanceFormModule:function(){return Z}});var d=n(1884),g=n(39117),p=n(36362),m=n(98002),S=n(46751),b=n(56101),v=n(40104),h=(n(27299),n(33567)),C=n(18291),y=n(92507),x=n(79223),s=n(86613),F=n(24459),P=function(){var a=function(l){(0,S.Z)(i,l);var r=(0,b.Z)(i);function i(u,e,c,o){var t;return(0,g.Z)(this,i),(t=r.call(this)).gaService=u,t.substanceFormService=e,t.cvService=c,t.configService=o,t.configSettingsDisplay={},t.parentSubstanceHeader="Parent Substance",t.subscriptions=[],t.analyticsEventCategory="substance form ssg 3 and 4 parent substance",t}return(0,d.Z)(i,[{key:"ngOnInit",value:function(){var e=this;this.configSsg4Form=this.configService.configData&&this.configService.configData.ssg4Form||null;var c="Search or Register a New Substance";this.configSsg4Form&&(this.configSsg4Form.titles.parentSubstance&&(c=this.configSsg4Form.titles.parentSubstance),this.configSsg4Form.parentSubstanceHeader&&(this.parentSubstanceHeader=this.configSsg4Form.parentSubstanceHeader)),this.menuLabelUpdate.emit(c);var o=this.substanceFormService.substance.subscribe(function(t){e.substance=t,e.substanceClass=t.substanceClass,e.substanceClass&&"specifiedSubstanceG4m"===e.substanceClass&&e.substance.specifiedSubstanceG4m&&(e.specifiedSubstanceG4m=e.substance.specifiedSubstanceG4m,e.substance.specifiedSubstanceG4m.parentSubstance&&e.substance.specifiedSubstanceG4m.parentSubstance.refuuid&&(e.relatedSubstanceUuid=e.substance.specifiedSubstanceG4m.parentSubstance.refuuid)),e.substanceFormService.resetState()});this.subscriptions.push(o)}},{key:"ngAfterViewInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach(function(e){e.unsubscribe()})}},{key:"getConfigSettings",value:function(){var e=this,o=(this.configService.configData&&this.configService.configData.ssg4Form||null).settingsDisplay.startingMaterial;Object.keys(o).forEach(function(t){null!=o[t]&&("simple"===o[t]?e.configSettingsDisplay[t]=!0:"advanced"===o[t]?e.configSettingsDisplay[t]=!0===e.privateShowAdvancedSettings:"removed"===o[t]&&(e.configSettingsDisplay[t]=!1))})}},{key:"relatedSubstanceUpdated",value:function(e){null!==e?this.substanceClass&&"specifiedSubstanceG4m"===this.substanceClass&&(this.substance.specifiedSubstanceG4m.parentSubstance={refPname:e._name,name:e._name,refuuid:e.uuid,substanceClass:"reference",approvalID:e.approvalID}):this.substanceClass&&"specifiedSubstanceG4m"===this.substanceClass&&(this.substance.specifiedSubstanceG4m.parentSubstance={})}},{key:"updateManufactureIdType",value:function(e){this.specifiedSubstanceG4m.manufactureIdType=e}}]),i}(x.o);return a.\u0275fac=function(r){return new(r||a)(s.Y36(v.$),s.Y36(h.B),s.Y36(C.I),s.Y36(y.E))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-ssg-parent-substance-form"]],features:[s.qOj],decls:4,vars:3,consts:[[1,"name-form-container"],[1,"form-row"],[1,"related-substance"],["eventCategory","substanceRelationshipRelatedSub","placeholder","Search by Name/CAS RN/UNII/BDNUM",3,"header","subuuid","showMorelinks","selectionUpdated"]],template:function(r,i){1&r&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"app-substance-selector",3),s.NdJ("selectionUpdated",function(e){return i.relatedSubstanceUpdated(e)}),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&r&&(s.xp6(3),s.Q6J("header",i.parentSubstanceHeader)("subuuid",i.relatedSubstanceUuid)("showMorelinks",!0))},directives:[F.Q],styles:[".form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 10px;-ms-flex-align:end;align-items:flex-end}.row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.row[_ngcontent-%COMP%]   .col-1-1[_ngcontent-%COMP%]{width:calc(100% - 20px);margin-right:20px}.related-substance[_ngcontent-%COMP%]{width:350px;max-width:350px}  .selected-substance{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:left!important;position:relative}  .selected-substance img{width:100%;height:auto;display:block;max-width:220px}.marginleft50px[_ngcontent-%COMP%]{margin-left:50px}.font11px[_ngcontent-%COMP%]{font-size:11px}"]}),a}(),M=n(7168),O=n(64061),D=n(63200),Z=function(){var a=(0,d.Z)(function l(){(0,g.Z)(this,l)});return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[[p.ez,m.Bz,O.o.forChild(P),M.O,D.U]]}),a}()}}]);
//# sourceMappingURL=6620.f9b2c7ffa1d5f326.js.map