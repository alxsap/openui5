sap.ui.define(["sap/ui/core/XMLComposite", "sap/ui/model/json/JSONModel"], function(XMLComposite, JSONModel) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "InfoButton", {
		configurable: "false",
		writable: "true",

		const InfoButton = XMLComposite.extend("InfoButton", {
			constructor: function(sId, mSettings) {
				XMLComposite.apply(this, arguments);
			},
			metadata: {
				properties: {
					buttonText: {
						type: "string",
						defaultValue: "",
						invalidate: true
					},
					infoText: {
						type: "string",
						defaultValue: "",
						invalidate: true
					}
				}
			},
			alias: "this",
			fragment: "xml.infobutton",
			renderer: "sap.ui.core.XMLCompositeRenderer"
		});
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oInfoButton", {
		configurable: "false",
		writable: "true",

		value: new InfoButton("infoButton", {
			buttonText: "{/buttonText}",
			infoText: "{/infoText}"
		})
	});

	oInfoButton.setModel(new JSONModel({
		buttonText: "My Button text",
		infoText: "This is an interesting info ..."
	}));
	oInfoButton.placeAt("body");
	return InfoButton;
}, true);