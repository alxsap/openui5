sap.ui.define([
	"composites/ButtonList",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/eventing/composites/ButtonList",
	"sap/ui/core/Item"
], function(ButtonList, CompositesButtonList, Item) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFragment1", {
		configurable: "false",
		writable: "true",

		value: new CompositesButtonList("Frag1", {
			items: [ new Item("I1", {key: "K1", text: "Text 1"}),
					 new Item("I2", {key: "K2", text: "Text 2"}),
					 new Item("I3", {key: "K3", text: "Text 3"})
					],
			press: function(oEvent) {
				alert("Item " + oEvent.getParameter("index") + " with key " + oEvent.getParameter("key") + " pressed");
			}
		}).placeAt("sample1")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFragment2", {
		configurable: "false",
		writable: "true",
		value: oFragment1.clone("MyClone")
	});

	oFragment2.placeAt("clone1");
});