sap.ui.define([
	"composites/ForwardText",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/ForwardText",
	"sap/m/Text"
], function(ForwardText, CompositesForwardText, Text) {
	"use strict";

	//add a ForwardText with single aggregation
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oForwardText", {
		configurable: "false",
		writable: "true",

		value: new CompositesForwardText({
			text: new Text({
				text: "Text added to text aggregation",
			}),
			textItems: [
				new Text({
					text: "Text 1 added to textItems aggregation"
				}),
				new Text({
					text: "Text 2 added to textItems aggregation"
				})
			]
		})
	});

	oForwardText.placeAt("body");
});