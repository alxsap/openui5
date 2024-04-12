sap.ui.define([
	"composites/ForwardText",
	"composites/FfText",
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/FfText",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/ForwardText",
	"sap/m/Panel"
], function(ForwardText, FfText, Text, JSONModel, CompositesFfText, CompositesForwardText, Panel) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "data", {
		configurable: "false",
		writable: "true",

		value: {
			names: [
				{ firstName: "Christian", lastName: "Mueller" },
				{ firstName: "Petra", lastName: "Maier" },
				{ firstName: "Thomas", lastName: "Smith" },
				{ firstName: "John", lastName: "Williams" },
				{ firstName: "Maria", lastName: "Jones" }
			]
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "model", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	model.setData(data);
	sap.ui.getCore();

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oForwardForwardText", {
		configurable: "false",
		writable: "true",

		value: new CompositesFfText({
			items: [
				new CompositesForwardText({
					textItems: {
						path: "/names",
						template: new Text({
							text: "{lastName}"
						})
					}
				})
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPanelForwardForwardText", {
		configurable: "false",
		writable: "true",
		value: new Panel({ expandable: true, expanded: false, content: oForwardForwardText, headerText: "Ex A." })
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oForwardForwardText2", {
		configurable: "false",
		writable: "true",

		value: new CompositesFfText({
			items: {
				path: "/names",
				template: new Text({
					text: "{lastName}"
				})
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPanelForwardForwardText2", {
		configurable: "false",
		writable: "true",
		value: new Panel({ expandable: true, expanded: false, content: oForwardForwardText2, headerText: "Ex B." })
	});

	oPanelForwardForwardText.placeAt("forwardText");
	oPanelForwardForwardText2.placeAt("forwardText");
});