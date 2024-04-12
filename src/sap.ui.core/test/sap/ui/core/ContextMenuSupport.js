sap.ui.define([
	"sap/ui/core/IconPool",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/Menu",
	"sap/m/MenuItem",
	"sap/ui/unified/Menu",
	"sap/ui/unified/MenuItem",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/App",
	"sap/m/Page"
], function(IconPool, Button, mobileLibrary, Menu, MenuItem, UnifiedMenu, UnifiedMenuItem, List, StandardListItem, App, Page) {
	"use strict";

	// shortcut for sap.m.ButtonType
	const ButtonType = mobileLibrary.ButtonType;

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonSample", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonSample", {
			type: ButtonType.Default,
			text: "Open Button ContextMenu",
			enabled: true,
			tooltip: "tooltip"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonContextMenu", {
		configurable: "false",
		writable: "true",

		value: new Menu({
			items: [
				new MenuItem({ text: "Open", icon: "sap-icon://add"}),
				new MenuItem({ text: "Move to trash", icon: "sap-icon://delete"}),
				new MenuItem({ text: "Get info", icon: "sap-icon://hint"}),
				new MenuItem({ text: "More", icon: "sap-icon://overflow"})
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oListMenu", {
		configurable: "false",
		writable: "true",

		value: new Menu({
			items: [
				new MenuItem({ text: "Copy", icon: "sap-icon://copy" }),
				new MenuItem({ text: "Edit", icon: "sap-icon://edit" }),
				new MenuItem({ text: "Open in new tab", icon: "sap-icon://action" }),
				new MenuItem({ text: "Save as tile", icon: "sap-icon://save", startsSection: true }),
				new MenuItem({ text: "Action one" }),
				new MenuItem({ text: "Second action", enabled: false }),
				new MenuItem({ text: "Action three more ..."}),
				new MenuItem({ text: "Fourth option" }),
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPageContextMenu", {
		configurable: "false",
		writable: "true",

		value: new UnifiedMenu({
			items: [
				new UnifiedMenuItem( { text: "Example with Unified Menu" } ),
				new UnifiedMenuItem( { text: "Example" } ),
				new UnifiedMenuItem( { text: "Example" } ),

			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oList", {
		configurable: "false",
		writable: "true",

		value: new List({
			items: [
				new StandardListItem({
					id: "firstItem",
					title: "Monitor Locking Cable",
					description: "P1239123",
					icon: "sap-icon://laptop",
				}),
				new StandardListItem({
					title: "Laptop Case",
					description: "123-3123-111",
					icon: "sap-icon://it-host",
				}),
				new StandardListItem({
					title: "USB Stick 16Gbyte",
					description: "XKT-2342432432",
					icon: "sap-icon://it-system",
				}),
				new StandardListItem({
					title: "Deskjet Super Highspeed",
					description: "KTZ-23432423",
					icon: "sap-icon://e-learning",
				}),
				new StandardListItem({
					id: "lastItem",
					title: "Laser Allround Pro",
					description: "554325-423",
					icon: "sap-icon://it-instance",
				})
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oBasicButton", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Buton without a ContextMenu"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oLeftDownButton", {
		configurable: "false",
		writable: "true",

		value: new Button({
			id: "leftDownBtn",
			text: "Down Left"
		}).addStyleClass("down-left")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oRightDownButton", {
		configurable: "false",
		writable: "true",

		value: new Button({
			id: "rightDownBtn",
			text: "Down Right"
		}).addStyleClass("down-right")
	});

	/* ---------------------------------------- */

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
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page({
			id: "testPage",
			content: [
				oButtonSample,
				oBasicButton,
				oList,
				oLeftDownButton,
				oRightDownButton
			]
		})
	});

	oApp.addPage(oPage);

	oPage.setContextMenu(oPageContextMenu);
	oButtonSample.setContextMenu(oButtonContextMenu);
	oLeftDownButton.setContextMenu(oButtonContextMenu);
	oRightDownButton.setContextMenu(oButtonContextMenu);


	oList.getItems().forEach(function(oListItem) {
		// mad hacks
		sap.ui.core.ContextMenuSupport.apply(oListItem);
		oListItem.setContextMenu(oListMenu);
	});

	oApp.addPage(oPage);
	oApp.placeAt("body");
});