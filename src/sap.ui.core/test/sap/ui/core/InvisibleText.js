sap.ui.define(
	["sap/ui/core/Control", "sap/ui/core/InvisibleText", "sap/ui/core/mvc/XMLView", "sap/ui/core/mvc/Controller"],
	function(Control, InvisibleText) {
		"use strict";

		const TestControl = Control.extend("sap.ui.core.TestControl", {
			metadata: {
				library : "sap.ui.core",
				aggregations : {
					_texts: {name: "_texts", type: "sap.ui.core.InvisibleText", multiple : true, visibility: "hidden"}
				},
				associations : {
					ariaDescribedBy : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"},
					ariaLabelledBy : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
				}
			},

			init: function() {
				if (!TestControl._STATIC_LABEL_TEXT) {
					TestControl._STATIC_LABEL_TEXT = new InvisibleText({text: "Some static label by control"});
					TestControl._STATIC_LABEL_TEXT.toStatic(); //Put to Static UiArea
				}

				this.addAggregation("_texts", new InvisibleText({text: "Some dynamic label by control"}), true);
			},

			renderer: {
				apiVersion: 2,
				render: function(rm, ctrl) {
					rm.openStart("div", ctrl).openEnd();
						var sLabelled = TestControl._STATIC_LABEL_TEXT.getId();
						var aTexts = ctrl.getAggregation("_texts");
						for(var i = 0; i < aTexts.length; i++){
							sLabelled += " " + aTexts[i].getId();
							rm.renderControl(aTexts[i]);
						}
						rm.voidStart("input");
						rm.accessibilityState(ctrl, {
							labelledby : {value: sLabelled, append: true}
						})
						rm.voidEnd();
					rm.close("div");
				}
			}
		});


		(new InvisibleText("myText", {text: "Some static label by application"})).toStatic();

		(new TestControl({ariaLabelledBy: "myText"})).placeAt("content");



		sap.ui.controller("my.own.controller", {});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "xml", {
			configurable: "false",
			writable: "true",

			value: '<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"'
				+ '              controllerName="my.own.controller" xmlns:html="http://www.w3.org/1999/xhtml">'
				+ '       <core:TestControl ariaLabelledBy="myViewText"/>'
				+ '       <core:InvisibleText id="myViewText" text="Some text"/>'
				+ '    </mvc:View>'
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "myView", {
			configurable: "false",
			writable: "true",
			value: sap.ui.xmlview({viewContent:xml})
		});

		myView.placeAt('content');
		return TestControl;
	},
	true
);