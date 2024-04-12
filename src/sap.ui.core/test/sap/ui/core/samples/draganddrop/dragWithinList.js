sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/m/List",
	"sap/ui/core/dnd/DragDropInfo",
	"sap/m/StandardListItem",
	"sap/m/Page",
	"sap/m/App"
], function(JSONModel, List, DragDropInfo, StandardListItem, Page, App) {
	"use strict";
	sap.ui.loader.config({paths: {"my": "./"}});

	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "data", {
		configurable: "false",
		writable: "true",

		value: {
			names: [
				{firstName: "Peter", lastName: "Mueller"},
				{firstName: "Petra", lastName: "Maier"},
				{firstName: "Thomas", lastName: "Smith"},
				{firstName: "John", lastName: "Williams"},
				{firstName: "Maria", lastName: "Jones"}
			]
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	oModel.setData(data);

	// create the UI
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oList", {
		configurable: "false",
		writable: "true",

		value: new List({
			headerText:"Names - re-sort by dragging between",
			dragDropConfig: new DragDropInfo({
				sourceAggregation: "items",
				targetAggregation: "items",
				drop: function(oEvent) {
					var iSourceIndex = oList.indexOfItem(oEvent.getParameter("draggedControl"));
					var iTargetIndex = oList.indexOfItem(oEvent.getParameter("droppedControl"));
					var aData = oModel.getObject("/names");
					var oMovedData = aData.splice(iSourceIndex, 1)[0];
					aData.splice(iTargetIndex, 0, oMovedData);
					oModel.refresh();
				}
			})
		}).bindItems({
			path : "/names",
			template : new StandardListItem({
				title: "{lastName}",
				description: "{firstName}"
			})
		}).setModel(oModel)
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "page", {
		configurable: "false",
		writable: "true",

		value: new Page({
			title: "Drag And Drop Within List (between items)",
			content : oList
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",

		value: new App({
			pages: [page]
		}).placeAt("content")
	});
});