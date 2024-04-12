sap.ui.define([
	"composites/ForwardText",
	"composites/ForwardForwardText",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/ForwardText",
	"sap/m/Text",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/ForwardForwardText"
], function(ForwardText, ForwardForwardText, CompositesForwardText, Text, CompositesForwardForwardText) {
	"use strict";

	//add a ForwardText with single aggregation
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oForwardText1", {
		configurable: "false",
		writable: "true",

		value: new CompositesForwardText({
			text: new Text({
				text: "Text added to text aggregation"
			})
		})
	});

	oForwardText1.placeAt("forwardText1");

	//add another ForwardText with single aggregation set after timeout and change it
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oForwardText2", {
		configurable: "false",
		writable: "true",
		value: new CompositesForwardText()
	});

	setTimeout(function () {
		oForwardText2.setText(new Text({
			text: "Text added to text aggregation after timeout"
		}));
	}, 2000);
	setTimeout(function () {
		oForwardText2.getText().setText("Text of text aggregation changed via timeout");
	}, 4000);
	oForwardText2.placeAt("forwardText1");


	//add a ForwardText with list of texts
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oForwardText10", {
		configurable: "false",
		writable: "true",

		value: new CompositesForwardText({
			textItems: [
				new Text({
					text: "Text added to textItems aggregation 1"
				}),
				new Text({
					text: "Text added to textItems aggregation 2"
				})
			]
		})
	});

	oForwardText10.placeAt("forwardText10");

	//add another ForwardText with list of texts adding and removing items with timeouts
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oForwardText11", {
		configurable: "false",
		writable: "true",

		value: new CompositesForwardText({
			textItems: [
				new Text({
					text: "Text added to textItems aggregation 1"
				}),
				new Text({
					text: "Text added to textItems aggregation 2"
				})
			]
		})
	});

	setTimeout(function () {
		oForwardText11.setText(new Text({
			text: "Text added to text aggregation after timeout 1"
		}));
		oForwardText11.addTextItem(new Text({
			text: "Text added to textItems aggregation after timeout 1"
		}));
	}, 1000);
	setTimeout(function () {
		oForwardText11.addTextItem(new Text({
			text: "Text added to textItems aggregation after timeout 2"
		}));
	}, 2000);
	setTimeout(function () {
		oForwardText11.getText().setText("Text of text aggregation changed after timeout 3");
		oForwardText11.addTextItem(new Text({
			text: "Text added to textItems aggregation after timeout 3"
		}));
		oForwardText11.addTextItem(new Text({
			text: "Text added to textItems aggregation after timeout 3"
		}));
		oForwardText11.addTextItem(new Text({
			text: "Text added to textItems aggregation after timeout 3"
		}));
	}, 3000);
	setTimeout(function () {
		oForwardText11.getText().setText("Text of text aggregation changed after timeout 4");
		oForwardText11.addTextItem(new Text({
			text: "Text added to textItems aggregation after timeout 4"
		}));
		oForwardText11.addTextItem(new Text({
			text: "Text added to textItems aggregation after timeout 4"
		}));
		oForwardText11.addTextItem(new Text({
			text: "Text added to textItems aggregation after timeout 4"
		}));
	}, 4000);
	oForwardText11.placeAt("forwardText10");

	//add another ForwardText with list of texts adding and removing items with timeouts
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oForwardForwardText20", {
		configurable: "false",
		writable: "true",

		value: new CompositesForwardForwardText({
			items: [
				new CompositesForwardText({
					textItems: [
						new Text({
							text: "Double Forwarding 1 Text added to textItems aggregation 1"
						}),
						new Text({
							text: "Double Forwarding 1 Text added to textItems aggregation 2"
						})
					]
				}),
				new CompositesForwardText({
					textItems: [
						new Text("test", {
							text: "Double Forwarding 2 Text added to textItems aggregation 1"
						}),
						new Text({
							text: "Double Forwarding 2 Text added to textItems aggregation 2"
						})
					]
				})
			],
			items2: [
				new CompositesForwardText({
					textItems: [
						new Text({
							text: "Forwarding internally1"
						}),
						new Text({
							text: "Forwarding internally2"
						})
					]
				}),
				new CompositesForwardText({
					textItems: [
						new Text({
							text: "Forwarding internally1"
						})
					]
				})
			]
		})
	});

	oForwardForwardText20.placeAt("forwardText20");
});