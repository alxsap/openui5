sap.ui.define([
	"sap/ui/unified/Shell",
	"sap/m/Text",
	"sap/ui/unified/ShellHeadItem",
	"sap/ui/core/IconPool",
	"sap/ui/unified/ShellHeadUserItem",
	"sap/ui/Device",
	"sap/m/Page",
	"sap/m/Button",
	"sap/ui/unified/ShellOverlay",
	"sap/ui/core/InvisibleText",
	"sap/base/Log"
], function(Shell, Text, ShellHeadItem, IconPool, ShellHeadUserItem, Device, Page, Button, ShellOverlay, InvisibleText, Log) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oShell", {
		configurable: "false",
		writable: "true",

		value: new Shell({
			icon: sLogo,
			headerHiding: false,
			search: createTestSearchField("sf", function(oEvent){
				oSearchField.setValue(oEvent.getParameter("query"));
				oOverlay.open();
			}),
			content: [new Text({text: window.sLorem})],
			headItems: [new ShellHeadItem({
				tooltip: "Home",
				icon: IconPool.getIconURI("home")
			})],
			headEndItems: [new ShellHeadItem({
				tooltip: "Search",
				icon: IconPool.getIconURI("search"),
				press: function(){
					oOverlay.open();
				}
			}), new ShellHeadItem({
				tooltip: "Logoff",
				toggleEnabled: false,
				icon: IconPool.getIconURI("log")
			})]
		})
	});

	oShell.placeAt("content");

	oShell.setUser(new ShellHeadUserItem({
		image: "images/person.jpg",
		username: "Karl Mustermann",
		press: function(){alert("User Item pressed");}
	}));

	function sizeChanged(mParams){
		var bSmallSize = mParams.name === "Phone";
		oShell.getHeadEndItems()[0].setVisible(bSmallSize);
		oShell.setSearchVisible(!bSmallSize);
	}
	Device.media.attachHandler(sizeChanged, null, Device.media.RANGESETS.SAP_STANDARD);
	sizeChanged(Device.media.getCurrentRange(Device.media.RANGESETS.SAP_STANDARD));

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oSearchField", {
		configurable: "false",
		writable: "true",
		value: createTestSearchField("sf2")
	});

	oSearchField.addAriaLabelledBy("OverlySearch");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oOverlayContent", {
		configurable: "false",
		writable: "true",

		value: new Page({
			showHeader: false,
			content: [new Button({text: "Some Button"}), new Text({text: window.sLorem})]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oOverlay", {
		configurable: "false",
		writable: "true",

		value: new ShellOverlay({
			search: oSearchField,
			content: [oOverlayContent],
			closed: function(){
				oShell.getSearch().setValue(oSearchField.getValue());
				Log.warning("ShellOverlay was closed - some cleanup can be done ...");
			},
			shell: oShell,
			ariaLabelledBy: ["OverlyTitle"]
		})
	});

	for (var i = 0; i < oOverlayContent.getContent().length; i++) {
		oOverlayContent.getContent()[i].addStyleClass("sapUiSmallMargin");
	}

	(new InvisibleText("OverlyTitle", {text: "Search Dialog"})).toStatic();
	(new InvisibleText("OverlySearch", {text: "Search"})).toStatic();
});