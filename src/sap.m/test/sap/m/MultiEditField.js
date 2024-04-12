sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/m/MultiEditField",
	"sap/ui/core/Item",
	"sap/m/Toolbar",
	"sap/m/Label",
	"sap/m/Switch",
	"sap/m/Page",
	"sap/m/App"
], function(MessageToast, JSONModel, MultiEditField, Item, Toolbar, Label, Switch, Page, App) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",

		value: new JSONModel({
			"selectedItem": null,
			"showValueHelp": true,
			"nullable": false,
			"items": [
				{
					key: "key1",
					text: "sample text 1"
				},
				{
					key: "key2",
					text: "sample text 2"
				}
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnChange", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			MessageToast.show("Change event triggered on item "+ oEvent.getParameter("selectedItem").getText());
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMultiEditField", {
		configurable: "false",
		writable: "true",

		value: new MultiEditField({
			selectedItem: "{/selectedItem}",
			showValueHelp: "{/showValueHelp}",
			nullable: "{/nullable}",
			items: {
				path: "/items",
				template: new Item({
					key: "{key}",
					text: "{text}"
				})
			},
			change: fnChange
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToolbar", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			content: [
				new Label({
					text : "Value Help",
					labelFor : "showValueHelpSwitch"
				}),
				new Switch({
					id : "showValueHelpSwitch",
					state : "{/showValueHelp}"
				}),
				new Label({
					text : "Nullable",
					labelFor : "nullableSwitch"
				}),
				new Switch({
					id : "nullableSwitch",
					state : "{/nullable}"
				}),
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page({
			title: "sap.m.MultiEditField",
			content: [
				oToolbar,
				oMultiEditField
			]
		})
	});

	oPage.setModel(oModel);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oApp", {
		configurable: "false",
		writable: "true",
		value: new App()
	});

	oApp.addPage(oPage).placeAt("content");
});