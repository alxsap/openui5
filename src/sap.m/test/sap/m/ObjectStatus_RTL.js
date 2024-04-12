sap.ui.define([
	"sap/m/ObjectAttribute",
	"sap/ui/core/IconPool",
	"sap/m/ObjectStatus",
	"sap/ui/core/library",
	"sap/m/App",
	"sap/m/Page",
	"sap/m/Label",
	"sap/m/library"
], function(ObjectAttribute, IconPool, ObjectStatus, coreLibrary, App, Page, Label, mobileLibrary) {
	"use strict";

	// shortcut for sap.m.LabelDesign
	const LabelDesign = mobileLibrary.LabelDesign;

	// shortcut for sap.ui.core.TextDirection
	const TextDirection = coreLibrary.TextDirection;

	//array - [{key: k, values: [v1,v2,v3]}, {key: k2, values: [v4,v5,v6]}]
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "genCombinator", {
		configurable: "false",
		writable: "true",

		value: function() {
			function clone(obj) {
				var temp;

				if (obj == null || typeof(obj) != 'object')
					return obj;

				temp = obj.constructor();

				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						temp[key] = clone(obj[key]);
					}
				}
				return temp;
			}

			var aResult = [{}];
			var mergeWithValues = function(key, aValues) {
				var mergeResult = [];
				var newObj;

				for  (j = 0; j < aResult.length; j++) {
					for (k = 0; k < aValues.length; k++) {
						newObj = clone(aResult[j]);
						newObj[key] = aValues[k];
						mergeResult.push(newObj);
					}
				}

				for (l = 0; l < mergeResult.length; l++) {
					aResult.push(mergeResult[l]);
				}
			};

			for (i = 0; i < arguments.length; i++) {
				mergeWithValues(arguments[i].key, arguments[i].values);
			}

			return aResult;
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "getStatuses", {
		configurable: "false",
		writable: "true",

		value: function() {
			var aJSONStatuses = genCombinator({key: "title", values: ["english", "עברית"]},
					{key: "text", values: ["three words english", "עברית", "0881 234 567"]},
					{key: "textDirection", values: [TextDirection.LTR,
						TextDirection.RTL,
						TextDirection.Inherit
					]});

			var result = [];
			for (i = 0; i < aJSONStatuses.length; i++) {
				if (aJSONStatuses[i].text && aJSONStatuses[i].textDirection) {
					aJSONStatuses[i].icon = IconPool.getIconURI("inbox");
					result.push(new ObjectStatus(aJSONStatuses[i]));
				}
			}

			return result;
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",
		value: new App()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "page", {
		configurable: "false",
		writable: "true",
		value: new Page({title: "ObjectStatus Test"})
	});

	app.setInitialPage(page.getId());
	page.setEnableScrolling(true);
	app.addPage(page);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "importantCases", {
		configurable: "false",
		writable: "true",
		value: [6, 24]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "txt1", {
		configurable: "false",
		writable: "true"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aStatuses", {
		configurable: "false",
		writable: "true",
		value: getStatuses()
	});

	for (p = 0; p < aStatuses.length; p++) {
		if (importantCases.indexOf(p) === -1) {
			txt1 = new Label({text: p + " - textDirection: " + aStatuses[p].getTextDirection()});
		} else {
			txt1 = new Label({text:p + " - textDirection: " + aStatuses[p].getTextDirection(), design: LabelDesign.Bold});
		}
		page.addContent(txt1);
		page.addContent(aStatuses[p]);
	}

	app.placeAt('body');
});