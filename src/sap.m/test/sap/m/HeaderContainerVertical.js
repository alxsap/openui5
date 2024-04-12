sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/type/Integer",
	"sap/m/library",
	"sap/ui/core/library",
	"sap/m/VBox",
	"sap/m/NumericContent",
	"sap/m/Label",
	"sap/m/TileContent",
	"sap/m/GenericTile",
	"sap/m/MessageToast",
	"sap/m/HeaderContainer",
	"sap/m/Button",
	"sap/m/Select",
	"sap/ui/core/Item",
	"sap/m/HBox",
	"sap/m/Switch",
	"sap/m/Input",
	"sap/ui/model/type/String",
	"sap/ui/layout/form/SimpleForm",
	"sap/m/Page",
	"sap/m/App",
	"sap/ui/util/Mobile"
], function(
	JSONModel,
	Integer,
	mobileLibrary,
	coreLibrary,
	VBox,
	NumericContent,
	Label,
	TileContent,
	GenericTile,
	MessageToast,
	HeaderContainer,
	Button,
	Select,
	Item,
	HBox,
	Switch,
	Input,
	TypeString,
	SimpleForm,
	Page,
	App,
	Mobile
) {
	"use strict";

	// shortcut for sap.m.FlexAlignItems
	const FlexAlignItems = mobileLibrary.FlexAlignItems;

	// shortcut for sap.ui.core.Orientation
	const Orientation = coreLibrary.Orientation;

	// shortcut for sap.m.BackgroundDesign
	const BackgroundDesign = mobileLibrary.BackgroundDesign;

	Mobile.init();

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oData", {
		configurable: "false",
		writable: "true",

		value: {
			"scrollStep": 200,
			"scrollTime": 500,
			"height": "100%",
			"width": "auto",
			"backgroundDesign": BackgroundDesign.Transparent,
			"orientation": Orientation.Vertical,
			"header": "Comparative Annual Totals",
			"subheader": "Expenses By Region",
			"footer": "Actual and Target",
			"items": [{
				"content": [{
					"type": "numeric",
					"value": 125,
					"scale": "M",
					"unit": "EUR",
					"size": "M",
					"valueColor": "Error",
					"indicator": "Up",
					"isFormatterValue": false,
					"truncateValueTo": 4
				}, {
					"value": "USD, Current"
				}]
			}, {
				"content": [{
					"type": "numeric",
					"value": 15,
					"scale": "M",
					"unit": "EUR",
					"size": "M",
					"valueColor": "Good",
					"indicator": "Up",
					"isFormatterValue": false,
					"truncateValueTo": 4
				}, {
					"value": "USD, Current"
				}]
			}, {
				"content": [{
					"type": "numeric",
					"value": 165,
					"scale": "M",
					"unit": "EUR",
					"size": "M",
					"valueColor": "Error",
					"indicator": "Up",
					"isFormatterValue": false,
					"truncateValueTo": 4
				}, {
					"value": "USD, Current"
				}]
			}, {
				"content": [{
					"type": "numeric",
					"value": 11,
					"scale": "M",
					"unit": "USD",
					"size": "M",
					"valueColor": "Critical",
					"indicator": "Up",
					"isFormatterValue": false,
					"truncateValueTo": 4
				}, {
					"value": "USD, Current"
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
			var oLayout = new VBox();
			var oNumericContent;
			var oLabel;
			for (var i = 0; i < aContent.length; i++) {
				if (aContent[i].type === "numeric") {
					oNumericContent = new NumericContent({
						value : "{" + oContext.sPath + "/content/" + i + "/value}",
						scale : "{" + oContext.sPath + "/content/" + i + "/scale}",
						indicator : "{" + oContext.sPath + "/content/" + i + "/indicator}",
						size : "{" + oContext.sPath + "/content/" + i + "/size}",
						formatterValue : "{" + oContext.sPath + "/content/" + i + "/isFormatterValue}",
						truncateValueTo : "{" + oContext.sPath + "/content/" + i + "/truncateValueTo}",
						state : "Loaded",
						valueColor : "{" + oContext.sPath + "/content/" + i + "/valueColor}",
						press : function() {}
					});
					oLayout.addItem(oNumericContent);
				} else if (!aContent[i].type) {
					oLabel = new Label({
						text : "{" + oContext.sPath + "/content/" + i + "/value}"
					});
					oLayout.addItem(oLabel, 0);
				}
			}
			return oLayout;
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnGenericTileContentFactory", {
		configurable: "false",
		writable: "true",

		value: function(sId, oContext) {
			var oTileContent = new TileContent({
				footer: "{/footer}"
			});
			var oGenericTile = new GenericTile({
				header: "{/header}",
				subheader: "{/subheader}",
				tileContent: [oTileContent],
				press : function(oEvent) {
					MessageToast.show("GenericTile is pressed.");
				}
			});
			var oNumericContent = new NumericContent({
				value : "{" + oContext.sPath + "/content/0/value}",
				scale : "{" + oContext.sPath + "/content/0/scale}",
				indicator : "{" + oContext.sPath + "/content/0/indicator}",
				size : "{" + oContext.sPath + "/content/0/size}",
				formatterValue : "{" + oContext.sPath + "/content/0/isFormatterValue}",
				truncateValueTo : "{" + oContext.sPath + "/content/0/truncateValueTo}",
				state : "Loaded",
				valueColor : "{" + oContext.sPath + "/content/0/valueColor}"
			});
			oTileContent.setContent(oNumericContent);
			return oGenericTile;
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oHeaderContainer", {
		configurable: "false",
		writable: "true",

		value: new HeaderContainer("headerContainer", {
			scrollStep : "{/scrollStep}",
			scrollTime : "{/scrollTime}",
			orientation : "{/orientation}",
			backgroundDesign : "{/backgroundDesign}",
			height : "{/height}",
			width : "{/width}",
			content : {
				path : "/items",
				factory : fnContentFactory
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oHeaderContainer2", {
		configurable: "false",
		writable: "true",

		value: new HeaderContainer("headerContainer2", {
			scrollStep : "{/scrollStep}",
			scrollTime : "{/scrollTime}",
			orientation : "{/orientation}",
			backgroundDesign : "{/backgroundDesign}",
			height : "{/height}",
			width : "{/width}",
			content : {
				path : "/items",
				factory : fnGenericTileContentFactory
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
	Object.defineProperty(globalThis, "oBackgroundSelect", {
		configurable: "false",
		writable: "true",

		value: new Select({
			change: function(oEvent) {
				var oSelectedItem = oEvent.getParameter("selectedItem");
				oData.backgroundDesign = oSelectedItem.getKey();
				oModel.checkUpdate();
			},
			items: [
				new Item("background-item-1", {
					key : BackgroundDesign.Transparent,
					text : "Transparent"
				}), new Item("background-item-2", {
					key : BackgroundDesign.Solid,
					text : "Solid"
				}), new Item("background-item-3", {
					key : BackgroundDesign.Translucent,
					text : "Translucent"
				})
			],
			selectedItem : "background-item-1"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oOrientationSelect", {
		configurable: "false",
		writable: "true",

		value: new Select({
			change: function(oEvent) {
				var sInitialHeight = oData.height;
				var oSelectedItem = oEvent.getParameter("selectedItem");
				oData.orientation = oSelectedItem.getKey();
				oData.height = oData.width;
				oData.width = sInitialHeight;
				oModel.checkUpdate();
			},
			items: [
				new Item("orientation-item-1", {
					key : Orientation.Horizontal,
					text : "Horizontal"
				}), new Item("orientation-item-2", {
					key : Orientation.Vertical,
					text : "Vertical"
				})
			],
			selectedItem : (oData.orientation === Orientation.Horizontal) ? "orientation-item-1" : "orientation-item-2"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oDividersSwitch", {
		configurable: "false",
		writable: "true",

		value: new HBox({
			alignItems : FlexAlignItems.Center,
			items : [
				new Label({
					text : "Show dividers",
					labelFor : "show-dividers-switch"
				}), new Switch("show-dividers-switch", {
					type : "AcceptReject",
					state : true,
					change : function(oEvt) {
						oHeaderContainer.setShowDividers(oEvt.getParameter("state"));
						oHeaderContainer2.setShowDividers(oEvt.getParameter("state"));
					}
				})
			]
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
							oData.scrollStep = undefined;
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
							oData.scrollTime = undefined;
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
	Object.defineProperty(globalThis, "oWidthInput", {
		configurable: "false",
		writable: "true",

		value: new HBox({
			alignItems : FlexAlignItems.Center,
			items : [
				new Label({
					text : "Width",
					labelFor : "width-input"
				}), new Input("width-input", {
					placeholder : "Enter value ...",
					value : {
						path : "/width",
						type : new TypeString()
					},
					liveChange : function(oEvt) {
						if (oEvt.getParameter("newValue") === "") {
							oData.width = undefined;
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
	Object.defineProperty(globalThis, "oHeightInput", {
		configurable: "false",
		writable: "true",

		value: new HBox({
			alignItems : FlexAlignItems.Center,
			items : [
				new Label({
					text : "Height",
					labelFor : "height-input"
				}), new Input("height-input", {
					placeholder : "Enter value ...",
					value : {
						path : "/height",
						type : new TypeString()
					},
					liveChange : function(oEvt) {
						if (oEvt.getParameter("newValue") === "") {
							oData.height = undefined;
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
	Object.defineProperty(globalThis, "oAdjustForm", {
		configurable: "false",
		writable: "true",

		value: new SimpleForm({
			maxContainerCols : 2,
			editable : true,
			content : [
				oAddButton,
				oRemoveButton,
				oBackgroundSelect,
				oOrientationSelect,
				oScrollStepInput,
				oScrollTimeInput,
				oWidthInput,
				oHeightInput,
				oDividersSwitch
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page("page", {
			title : "Test Page for sap.m.HeaderContainer",
			content : [oHeaderContainer, oHeaderContainer2, oAdjustForm]
		})
	});

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