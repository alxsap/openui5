sap.ui.define(["sap/ui/core/XMLComposite", "sap/ui/model/json/JSONModel"], function(XMLComposite, JSONModel) {
	"use strict";

	//TODO: move to another file !
	// InfoButton
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "InfoButton", {
		configurable: "false",
		writable: "true",

		const InfoButton = XMLComposite.extend("sap.mdc.InfoButton", {
			constructor: function(sId, mSettings) {
				XMLComposite.apply(this, arguments);
			},
			metadata: {
				designTime: true,
				properties: {
					buttonText: {
						type: "string",
						defaultValue: "x"
					},
					infoText: {
						type: "string",
						defaultValue: "y",
						invalidate: true
					}
				}
			},
			fragment: "xml.infobutton"
		});
	});

	//TODO: move to another file !
	//toolbar
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "MyToolbar", {
		configurable: "false",
		writable: "true",

		const InfoButton = XMLComposite.extend("MyToolbar", {
			constructor: function(sId, mSettings) {
				XMLComposite.apply(this, arguments);
			},
			metadata: {
				properties: {
					title: {
						type: "string"
					},
					buttonText: {
						type: "string"
					},
					buttonInfo: {
						type: "string"
					},
					count: {
						type: "int",
						defaultValue: -1
					}
				}
			},
			alias: "this",
			fragment: "xml.toolbar",
			renderer: "sap.ui.core.XMLCompositeRenderer"
		});
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToolbar", {
		configurable: "false",
		writable: "true",

		value: new MyToolbar("toolbar", {
			title: "{/title}",
			buttonText: "{/buttonText}",
			buttonInfo: "{/buttonInfo}",
			count: "{/count}"
		})
	});

	oToolbar.setModel(new JSONModel({
		title: "Title",
		buttonText: "Button Text",
		buttonInfo: "Button Info",
		count: 1000
	}));
	oToolbar.placeAt("body");
	return InfoButton;
}, true);