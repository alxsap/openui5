sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/m/StandardTreeItem",
	"sap/m/Tree",
	"sap/ui/core/dnd/DragDropInfo",
	"sap/m/App",
	"sap/m/Label",
	"sap/m/Button",
	"sap/m/Page"
], function(MockServer, ODataModel, StandardTreeItem, Tree, DragDropInfo, App, Label, Button, Page) {
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
	oMockServer.simulate("../ui/core/qunit/model/metadata_orgHierarchy.xml", "../ui/core/qunit/model/orgHierarchy/");
	oMockServer.start();

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTemplate", {
		configurable: "false",
		writable: "true",

		value: new StandardTreeItem({
			title: "{odata>HIERARCHY_NODE}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTree", {
		configurable: "false",
		writable: "true",

		value: new Tree({
			headerText: "OData with hierarchy annotation in Tree Structure",
			dragDropConfig: new DragDropInfo({
				sourceAggregation: "items",
				targetAggregation: "items",
				dragStart:onDragStart,
				drop:onDrop
			})
		})
	});

	oTree.setMode("MultiSelect");

	this.oODataModel = new ODataModel(sServiceURI, {
		json: true,
		defaultUpdateMethod: "PUT",
		disableHeadRequestForToken: true,
		tokenHandling: true
	});

	oTree.setModel(this.oODataModel, "odata");
	this.oODataModel.setSizeLimit(20);

	oTree.bindItems({
		path: "odata>/orgHierarchy",
		template: oTemplate,
		parameters: {
			countMode: 'Inline',
			numberOfExpandedLevels: 2,
			treeAnnotationProperties: {
				hierarchyLevelFor: "LEVEL",
				hierarchyParentNodeFor: "PARENT_NODE",
				hierarchyNodeFor: "HIERARCHY_NODE",
				hierarchyDrillStateFor: "DRILLDOWN_STATE",
				hierarchyNodeDescendantCountFor: ""
			}
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oBinding", {
		configurable: "false",
		writable: "true",
		value: oTree.getBinding("items")
	});

	function onChange (oEvent) {
		oBinding.detachChange(onChange);
		oTree.expand([2,3,4]);
	}
	oBinding.attachChange(onChange);

	//oTree.expand([2,3,4]);

	function onDragStart(oEvent) {
		var oDragSession = oEvent.getParameter("dragSession");
		var oDraggedItem = oEvent.getParameter("target");
		var iDraggedItemIndex = oTree.indexOfItem(oDraggedItem);

		var aSelectedIndices = oTree.getBinding("items").getSelectedIndices();
		var aSelectedItems = oTree.getSelectedItems();
		var aDraggedItemContexts = [];

		if (aSelectedItems.length >0) {
			if (aSelectedIndices.indexOf(iDraggedItemIndex) === -1) {
					oEvent.preventDefault();
				} else {
					for (var i = 0; i < aSelectedItems.length; i++) {
						aDraggedItemContexts.push(oBinding.getContextByIndex(aSelectedIndices[i]));
					}
				}
		} else {
			aDraggedItemContexts.push(oBinding.getContextByIndex(iDraggedItemIndex));
		}

		oDragSession.setComplexData("hierarchymaintenance", {
			draggedItemContexts: aDraggedItemContexts
		});
	}

	function onDrop(oEvent) {
		var oDragSession = oEvent.getParameter("dragSession");
		var oDroppedItem = oEvent.getParameter("droppedControl");
		var aDraggedItemContexts = oDragSession.getComplexData("hierarchymaintenance").draggedItemContexts;
		var iDroppedIndex = oTree.indexOfItem(oDroppedItem);
		var oBinding = oTree.getBinding("items");
		var oNewParentContext = oBinding.getContextByIndex(iDroppedIndex);

		if (aDraggedItemContexts.length > 0) {

			if (oNewParentContext != null) {
				for (var i = 0; i < aDraggedItemContexts.length; i++) {
					oBinding.removeContext(aDraggedItemContexts[i]);
				}
				oBinding.addContexts(oNewParentContext, aDraggedItemContexts);
			}
		}
	}

	function onCreate(oEvent) {
		var oBinding = oTree.getBinding();
		oTree.getModel("odata");
		var oContext = oBinding.createEntry();

		// add new entry to the binding
		oBinding.addContexts(oBinding.getContextByIndex(5), [oContext]);
	}

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
	Object.defineProperty(globalThis, "oButton", {
		configurable: "false",
		writable: "true",
		value: new Button({text:"create node", press: onCreate})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page("TreeTest", {
			title : "Test Page for m.Tree hierarchy",
			content : [oButton, oTree]
		})
	});

	oApp.addPage(oPage).placeAt("body");
});