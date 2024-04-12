sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/m/StandardTreeItem",
	"sap/m/Tree",
	"sap/m/App",
	"sap/m/Label",
	"sap/m/Page"
], function(MockServer, ODataModel, StandardTreeItem, Tree, App, Label, Page) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sServiceURI", {
		configurable: "false",
		writable: "true",
		value: "/odataFake/"
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
		autoRespondAfter : 1000
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
	oMockServer.simulate(sMetaDataURI + "treemetadata.xml", sMetaDataURI);
	oMockServer.start();

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTemplate", {
		configurable: "false",
		writable: "true",

		value: new StandardTreeItem({
			title: "{odata>Description}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTree", {
		configurable: "false",
		writable: "true",

		value: new Tree({
			headerText: "OData in Tree Structure"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new ODataModel(sServiceURI)
	});

	oTree.setModel(oModel, "odata");

	oTree.bindItems({
		path: "odata>/Nodes",
		template: oTemplate,
		parameters: {
			countMode: 'Inline'
		}
	});


	function onChange (oEvent) {
		oBinding.detachChange(onChange);
		oTree.expand([0,1]);
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oBinding", {
		configurable: "false",
		writable: "true",
		value: oTree.getBinding("items")
	});

	oBinding.attachChange(onChange);

	//oTree.expand([0,1]);


	//***************
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oApp", {
		configurable: "false",
		writable: "true",
		value: new App()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oLabel3", {
		configurable: "false",
		writable: "true",
		value: new Label({text:"*********************Tree*********************"})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page("TreeTest", {
			title : "Test Page for sap.m.Tree - odata",
			content : [oTree]
		})
	});

	oApp.addPage(oPage).placeAt("body");
});