sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/type/Integer",
	"sap/ui/layout/VerticalLayout",
	"sap/m/NumericContent",
	"sap/m/Label",
	"sap/m/HeaderContainer",
	"sap/m/Button",
	"sap/m/HBox",
	"sap/m/library",
	"sap/m/Input",
	"sap/m/ObjectHeader",
	"sap/m/ObjectAttribute",
	"sap/m/ObjectStatus",
	"sap/ui/layout/form/SimpleForm",
	"sap/m/Page",
	"sap/m/App",
	"sap/ui/util/Mobile"
], function(
	JSONModel,
	Integer,
	VerticalLayout,
	NumericContent,
	Label,
	HeaderContainer,
	Button,
	HBox,
	mobileLibrary,
	Input,
	ObjectHeader,
	ObjectAttribute,
	ObjectStatus,
	SimpleForm,
	Page,
	App,
	Mobile
) {
	"use strict";

	// shortcut for sap.m.FlexAlignItems
	const FlexAlignItems = mobileLibrary.FlexAlignItems;

	Mobile.init();

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oData", {
		configurable: "false",
		writable: "true",

		value: {
			"scrollStep" : 200,
			"scrollTime" : 500,
			"items" : [{
				"content" : [{
					"type" : "numeric",
					"value" : 125,
					"scale" : "M",
					"unit" : "EUR",
					"size" : "M",
					"valueColor" : "Error",
					"indicator" : "Up",
					"isFormatterValue" : false,
					"truncateValueTo" : 4
				}, {
					"value" : "USD, Current"
				}]
			}, {
				"content" : [{
					"type" : "numeric",
					"value" : 1115,
					"scale" : "M",
					"unit" : "USD",
					"size" : "M",
					"valueColor" : "Critical",
					"indicator" : "Up",
					"isFormatterValue" : false,
					"truncateValueTo" : 4
				}, {
					"value" : "USD, Current"
				}]
			}]
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel(oData)
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnContentFactory", {
		configurable: "false",
		writable: "true",

		value: function(sId, oContext) {
			var aContent = oContext.getProperty("content");
			var oLayout = new VerticalLayout();
			for (var i = 0; i < aContent.length; i++) {
				if (aContent[i].type === "numeric") {
					var oNumericContent = new NumericContent({
						value : "{" + oContext.sPath + "/content/" + i + "/value}",
						scale : "{" + oContext.sPath + "/content/" + i + "/scale}",
						indicator : "{" + oContext.sPath + "/content/" + i + "/indicator}",
						size : "{" + oContext.sPath + "/content/" + i + "/size}",
						formatterValue : "{" + oContext.sPath + "/content/" + i + "/isFormatterValue}",
						truncateValueTo : "{" + oContext.sPath + "/content/" + i + "/truncateValueTo}",
						state : "Loaded",
						valueColor : "{" + oContext.sPath + "/content/" + i + "/valueColor}"
					});
					oLayout.addContent(oNumericContent);
				} else if (!aContent[i].type) {
					var oLabel = new Label({
						text : "{" + oContext.sPath + "/content/" + i + "/value}"
					});
					oLayout.insertContent(oLabel, 0);
				}
			}
			return oLayout;
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oHeaderContainer", {
		configurable: "false",
		writable: "true",

		value: new HeaderContainer("headerContainer", {
			scrollStep: "{/scrollStep}",
			scrollTime: "{/scrollTime}",
			content: {
				path: "/items",
				factory: fnContentFactory
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oAddButton", {
		configurable: "false",
		writable: "true",

		value: new Button("add-button", {
			width : "10rem",
			enabled : true,
			text : "Add content",
			press : function(oEvent) {
				oData.items.push({
					content : [{
						type : "numeric",
						value : 125,
						scale : "M",
						unit : "EUR",
						size : "M",
						valueColor : "Good",
						indicator : "Up",
						isFormatterValue : false,
						truncateValueTo : 4
					}, {
						value : "USD, Current"
					}]
				});
				oRemoveButton.setEnabled(true);
				oModel.checkUpdate();
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oRemoveButton", {
		configurable: "false",
		writable: "true",

		value: new Button("remove-button", {
			width : "10rem",
			text : "Remove last content",
			press : function(oEvent) {
				oData.items.pop();
				if (oData.items.length === 0) {
					oRemoveButton.setEnabled(false);
				}
				oModel.checkUpdate();
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oScrollStepInput", {
		configurable: "false",
		writable: "true",

		value: new HBox({
			alignItems : FlexAlignItems.Center,
			items : [
				new Label({
					text : "Scroll Step",
					labelFor : "scroll-step-input"
				}), new Input("scroll-step-input", {
					width : "4rem",
					placeholder : "Enter value ...",
					value : {
						path : "/scrollStep",
						type : new Integer()
					},
					liveChange : function(oEvt) {
						if (oEvt.getParameter("newValue") === "") {
							oData[scrollStep] = undefined;
							oModel.checkUpdate();
						}
					}
				})
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oScrollTimeInput", {
		configurable: "false",
		writable: "true",

		value: new HBox({
			alignItems : FlexAlignItems.Center,
			items : [
				new Label({
					text : "Scroll Time",
					labelFor : "scroll-time-input"
				}), new Input("scroll-time-input", {
					width : "4rem",
					placeholder : "Enter value ...",
					value : {
						path : "/scrollTime",
						type : new Integer()
					},
					liveChange : function(oEvt) {
						if (oEvt.getParameter("newValue") === "") {
							oData[scrollTime] = undefined;
							oModel.checkUpdate();
						}
					}
				})
			]
		})
	});

	/*use case 10 object header + header container as XML fragment */
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh10", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader("oh10", {
			responsive: true,
			intro: "On behalf of John Smith Ñagçyfox",
			title: "HeaderContainer inside sap.m.ObjectHeader",
			icon: "sap-icon://nutrition-activity",
			number: "1.684,00",
			numberUnit: "Euro",
			showMarkers: true,
			markFlagged: true,
			markFavorite: true,
			numberState: "Success",
			attributes: [
				new ObjectAttribute({
					title: "Manufacturer",
					text: "ACME Corp"
				})
			],
			statuses: [
				new ObjectStatus({
					title: "Approval",
					text: "Pending",
					icon: "sap-icon://inbox",
					state: "Warning"
				})
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oAdjustForm", {
		configurable: "false",
		writable: "true",

		value: new SimpleForm({
			maxContainerCols: 2,
			editable: true,
			content: [
				oAddButton,
				oRemoveButton,
				oScrollStepInput,
				oScrollTimeInput
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page("initial-page", {
			showHeader: false,
			content: [oh10, oAdjustForm]
		})
	});

	oh10.setHeaderContainer(oHeaderContainer);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",

		value: new App("myApp", {
			pages : [oPage]
		}).placeAt("content").setModel(oModel)
	});
});