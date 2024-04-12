sap.ui.define([
	"sap/ui/core/IconPool",
	"sap/ui/core/library",
	"sap/m/ObjectAttribute",
	"sap/m/App",
	"sap/m/Page",
	"sap/m/List",
	"sap/m/ObjectListItem",
	"sap/m/ObjectStatus",
	"sap/m/ObjectHeader"
], function(IconPool, coreLibrary, ObjectAttribute, App, Page, List, ObjectListItem, ObjectStatus, ObjectHeader) {
	"use strict";

	// shortcut for sap.ui.core.ValueState
	const ValueState = coreLibrary.ValueState;

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
				if(obj == null || typeof(obj) != 'object')
					return obj;

				var temp = obj.constructor(); // changed

				for(var key in obj) {
					if(obj.hasOwnProperty(key)) {
						temp[key] = clone(obj[key]);
					}
				}
				return temp;
			}

			var aResult = [{}];
			var mergeWithValues = function(key, aValues) {
				var mergeResult = [];

				for( j = 0; j < aResult.length; j++) {
					for( k = 0; k < aValues.length; k++) {
						var newObj = clone(aResult[j]);
						newObj[key] = aValues[k];
						mergeResult.push(newObj);
					}
				};

				for(l = 0; l < mergeResult.length; l++) {
					aResult.push(mergeResult[l]);
				}
			};

			for( i = 0; i < arguments.length; i++) {
				mergeWithValues(arguments[i].key, arguments[i].values);
			};

			return aResult;
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "getAttributes", {
		configurable: "false",
		writable: "true",

		value: function() {
			var aAttributes = genCombinator({key: "title", values: ["english", "עברית"]},
					{key: "text", values: ["three words english", "עברית", "0881 234 567"]},
					{key: "textDirection", values: [TextDirection.LTR,
						TextDirection.RTL
					]});

			var result = [];
			for(i = 0; i < aAttributes.length; i++) {
				if(aAttributes[i].text) {
					result.push(new ObjectAttribute(aAttributes[i]));
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
		value: new Page({title: "ObjectAttribute Test"})
	});

	app.setInitialPage(page.getId());
	page.setEnableScrolling(true);
	app.addPage(page);

	//attributes in a page
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aAttrs", {
		configurable: "false",
		writable: "true",
		value: getAttributes()
	});

	for(i = 0; i < aAttrs.length; i++) {
		page.addContent(aAttrs[i]);
	}

	//attributes in oli
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aAttrs1", {
		configurable: "false",
		writable: "true",
		value: getAttributes()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "list", {
		configurable: "false",
		writable: "true",

		value: new List("test_list", {
			headerText: "Object List Items"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "listItemId", {
		configurable: "false",
		writable: "true",
		value: "worst_case"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "worstCase", {
		configurable: "false",
		writable: "true",

		value: new ObjectListItem({
			type: "Active",
			intro: "On behalf of John Smith, Ñagçyfox",
			icon: IconPool.getIconURI("inbox"),
			title: "Ñorst case item with all fields, large number, Ñagçyfox",
			number: "Ñ999999999",
			numberUnit: "Euro",
			numberState : ValueState.Success,
			attributes: aAttrs1,
			firstStatus: new ObjectStatus({text: "Positive Ñagçyfox", state: "Success", tooltip: "Status tip"}),
			secondStatus: new ObjectStatus({text: "Negative Ñagçyfox", state: "Error"}),
			showMarkers: true,
			markFlagged: true,
			markFavorite: true
		})
	});

	list.addItem(worstCase);
	page.addContent(list);


	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh4PressHandler", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {

			if (oh4.getIcon()) {
				oh4.setIcon(null);
			} else {
				oh4.setIcon(IconPool.getIconURI("attachment"));
			}
		}
	});

	//attributes in oh
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aAttrs2", {
		configurable: "false",
		writable: "true",
		value: getAttributes()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh4", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader("oh4", {
			intro : "On behalf of John Smith Ñagçyfox",
			title : "OBJECT HEADER",
			titleActive : true,
			titlePress : oh4PressHandler,
			number : "3.628.000",
			numberUnit : "EUR",
			numberState : ValueState.None,
			attributes : aAttrs2,
			statuses : [ new ObjectStatus({
				text : "Ñgçy Positive Text Ñgçy",
				state : ValueState.Success
			}), new ObjectStatus({
				text : "Negative Text",
				state : ValueState.Error
			}) ],
			icon : IconPool.getIconURI("attachment"),
			iconActive : true,
			iconPress : oh4PressHandler
		})
	});

	page.addContent(oh4);

	//attributes in oh responsive
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aAttrs3", {
		configurable: "false",
		writable: "true",
		value: getAttributes()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh1Small", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader("oh1Small", {
			responsive: true,
			backgroundDesign: "Translucent",
			intro: "Type XS",
			title: "RESPONSIVE OBJECT HEADER",
			number: "624,00",
			numberUnit: "Euro",
		//    numberDirection: "LTR",
		//    numberTextAlign: "???",
			fullScreenOptimized: false,
			showMarkers: false,
			markFlagged: true,
			markFavorite: true,
			numberState: ValueState.Success,
			attributes: aAttrs3,
			statuses: [
				new ObjectStatus({
					title: "Approval",
					text: "Pending",
					state: ValueState.Warning

				})
			]
		})
	});

	page.addContent(oh1Small);

	app.placeAt('body');
});