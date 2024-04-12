sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/m/CustomListItem",
	"sap/m/HBox",
	"sap/m/RatingIndicator",
	"sap/m/List",
	"sap/m/library",
	"sap/m/Page",
	"sap/m/Bar",
	"sap/ui/model/json/JSONModel",
	"sap/m/Toolbar",
	"sap/m/Label",
	"sap/m/Input",
	"sap/m/ToolbarSeparator",
	"sap/m/CheckBox",
	"sap/m/ToggleButton",
	"sap/m/ToolbarSpacer",
	"sap/m/Button",
	"sap/ui/model/Sorter",
	"sap/m/App"
], function(
	MockServer,
	ODataModel,
	CustomListItem,
	HBox,
	RatingIndicator,
	List,
	mobileLibrary,
	Page,
	Bar,
	JSONModel,
	Toolbar,
	Label,
	Input,
	ToolbarSeparator,
	CheckBox,
	ToggleButton,
	ToolbarSpacer,
	Button,
	Sorter,
	App
) {
	"use strict";

	// shortcut for sap.m.ListMode
	const ListMode = mobileLibrary.ListMode;

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sServiceURI", {
		configurable: "false",
		writable: "true",
		value: "/ProductSet/"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sMetaDataURI", {
		configurable: "false",
		writable: "true",
		value: "mockdata/"
	});

	// configure respond to requests delay
	MockServer.config({
		autoRespond : true,
		autoRespondAfter : 2000
	});

	// create mockserver
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMockServer", {
		configurable: "false",
		writable: "true",

		value: new MockServer({
			rootUri : sServiceURI
		})
	});

	// start mockserver
	oMockServer.simulate(sMetaDataURI + "metadata.xml", sMetaDataURI);
	oMockServer.start();

	// controls
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTemplate", {
		configurable: "false",
		writable: "true",

		value: new CustomListItem({
			title : "{product>Name} {product>SalesOrderID}",
			description : "{product>Description}",
			type : "Navigation",
			content : new HBox({
				items: Array.from({ length: 50 }, function() {
					return new RatingIndicator({
						value: "{product>TaxTarifCode}"
					});
				})
			}),
			counter: {
				path : "product>Price",
				formatter : function(value) {
					return Math.ceil(Math.random() * 100);
				}
			},
			selected : {
				path : "product>Price",
				formatter : function(value) {
					return value > 1300 ? true : false;
				}
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oList", {
		configurable: "false",
		writable: "true",

		value: new List({
			growing : true,
			busyIndicatorDelay : 400,
			growingThreshold: {
				path : "growing>/threshold",
				formatter : function(value) {
					return +value;
				}
			},
			growingScrollToLoad : "{growing>/scrollToLoad}",
			mode: ListMode.MultiSelect,
			showNoData: true
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page({
			title : "Growing List Testpage",
			footer : new Bar({})
		})
	});

	// list properties
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oGrowingModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	oGrowingModel.setData({ threshold : 25, scrollToLoad : false });
	oList.setModel(oGrowingModel, "growing");
	oPage.setModel(oGrowingModel, "growing");

	// odata model
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new ODataModel(sServiceURI, true)
	});

	oList.setModel(oModel, "product");

	// bind Aggregation
	oList.bindItems({
		path : "product>/ProductSet",
		template : oTemplate
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToolbar", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			design: "Solid",
			content : [
				new Label({
					text: "Growing Threshold:"
				}),
				new Input({
					value: "{growing>/threshold}",
					width: "4rem",
					type: "Number"
				}),
				new ToolbarSeparator(),
				new CheckBox({
					text : "ScrollToLoad More",
					selected: "{growing>/scrollToLoad}"
				}),
				new ToolbarSeparator(),
				new ToggleButton({
					text: "Upwards Direction",
					press: function(oEvent) {
						var sDir = oEvent.getSource().getPressed() ? "Upwards" : "Downwards";
						oList.setGrowingDirection(sDir).bindItems({
							path : "product>/ProductSet",
							template : oTemplate
						});
					}
				}),
				new ToolbarSpacer(),
				new Button({
					text : "Group",
					press : function () {
						var oBinding = oList.getBinding("items");
						oBinding.sort([
							new Sorter("Category", false, true)
						]);
					}
				}),
				new ToolbarSeparator(),
				new Button({
					text : "Ungroup",
					press : function () {
						oList.getBinding("items").sort([]);
					}
				})
			]
		})
	});

	oPage.setFooter(oToolbar);
	oPage.addContent(oList);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oApp", {
		configurable: "false",
		writable: "true",

		value: new App({
			pages : [oPage]
		}).placeAt("body")
	});
});