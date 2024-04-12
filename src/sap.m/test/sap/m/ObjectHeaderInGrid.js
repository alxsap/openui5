sap.ui.define([
	"sap/ui/core/IconPool",
	"sap/m/ObjectAttribute",
	"sap/m/ObjectHeader",
	"sap/ui/core/library",
	"sap/m/ObjectStatus",
	"sap/m/ScrollContainer",
	"sap/ui/Device",
	"sap/m/Label",
	"sap/ui/layout/Grid",
	"sap/m/Page",
	"sap/m/App"
], function(IconPool, ObjectAttribute, ObjectHeader, coreLibrary, ObjectStatus, ScrollContainer, Device, Label, Grid, Page, App) {
	"use strict";

	// shortcut for sap.ui.core.ValueState
	const ValueState = coreLibrary.ValueState;

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "marginStyle", {
		configurable: "false",
		writable: "true",
		value: Device.system.phone ? "sapUiSmallMargin" : "sapUiMediumMargin"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "attrs", {
		configurable: "false",
		writable: "true",

		value: [ new ObjectAttribute({
			text : "Ñagçyfox Contract #D1234567890"
		}), new ObjectAttribute({
			text : "Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John DoeÑagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe"
		}), new ObjectAttribute({
			text : "Ñagçyfox Created at: April 9, 2013"
		}) ]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "attrs2", {
		configurable: "false",
		writable: "true",

		value: [ new ObjectAttribute({
			text : "Contract #D1234567890 Ñagçyfox",
			active : true,
			press : function() {

				attrs2[0].setText("Ñagçyfox #D1234567890 Contract");
			}
		}), new ObjectAttribute({
			text : "Created by: John Doe Ñagçyfox",
			active : true,
			press : function() {

				attrs2[0].setText("Ñagçyfox Contract #D1234567890");
			}
		}) ]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh1", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader(
				"oh1", {
					intro : "On behalf of John Smith Ñagçyfox",
					title : "123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421",
					number : "3.624,00",
					numberUnit : "Euro",
					numberState : ValueState.Success,
					statuses : [ new ObjectStatus({
						text : "Lorem ipsum dolor sit amet",
						icon : IconPool.getIconURI("inbox"),
						state : ValueState.Success
					}), new ObjectStatus({
						icon : IconPool.getIconURI("inbox"),
						state : ValueState.Error
					}) ]
				})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh1Icon", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader("oh1-with-icon",{
					icon : IconPool.getIconURI("attachment"),
					intro : "On behalf of John Smith Ñagçyfox",
					title : "123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421",
					number : "3.624,00",
					numberUnit : "Euro",
					numberState : ValueState.Success,
					statuses : [ new ObjectStatus({
						text : "Lorem ipsum dolor sit amet",
						icon : IconPool.getIconURI("inbox"),
						state : ValueState.Success
					}) ]
				})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh1IconNoNumber", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader(
				"oh1-with-icon-no-number",	{
					icon : IconPool.getIconURI("attachment"),
					intro : "On behalf of John Smith Ñagçyfox",
					title : "123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421123213213213214211232132132132142112321321321321421",
					statuses : [ new ObjectStatus({
						text : "Lorem ipsum dolor sit amet",
						icon : IconPool.getIconURI("inbox"),
						state : ValueState.Success
					})]
				})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh2", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader(
				"oh2",
				{
					title : "Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",

					statuses : [ new ObjectStatus({
						text : ""
					}), new ObjectStatus({}) ],
					attributes : [ new ObjectAttribute({}), new ObjectAttribute({}), new ObjectAttribute({}), new ObjectAttribute({}), ]
				})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh3", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader(
				"oh3",
				{
					title : "Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",
					number : "3.624.000.000,00",
					numberUnit : "Euro",
					statuses : [ new ObjectStatus({
						text : "Ñgçy Positive Text Ñgçy",
						state : ValueState.Success
					}), new ObjectStatus({
						text : "Negative Text Ñgçy",
						state : ValueState.Error
					}) ]
				})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh3_1", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader(
				"oh3_1",
				{
					title : "Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",
					number : "6,00",
					numberUnit : "Euro",
					numberState : ValueState.Error,
					statuses : [ new ObjectStatus({
						text : "Negative Text Ñgçy",
						state : ValueState.Error
					}) ]
				})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh3_2", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader(
				"oh3_2",
				{
					title : "Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",
					number : "3.624",
					numberUnit : "EUR",
					numberState : ValueState.Warning,
					statuses : [ new ObjectStatus({
						text : "Ñgçy Positive Text Ñgçy",
						state : ValueState.Success
					}), new ObjectStatus({
						text : "Negative Text Ñgçy",
						state : ValueState.Error
					}) ],
					attributes : [ new ObjectAttribute({
						text : "This one is invisible",
						visible : false
					}),
						new ObjectAttribute({
						text : "Ñagçyfox Contract #D1234567890"
					}) ],
					markFavorite : true
				})
	});

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

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oh4", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader("oh4", {
			intro : "On behalf of John Smith Ñagçyfox",
			title : "Title is Active Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			titleActive : true,
			titlePress : oh4PressHandler,
			number : "3.628.000",
			numberUnit : "EUR",
			numberState : ValueState.None,
			attributes : attrs,
			statuses : [ new ObjectStatus({
				text : "Ñgçy Positive Text Ñgçy",
				state : ValueState.Success
			}), new ObjectStatus({
				text : "Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy",
				state : ValueState.Error
			}) ],
			icon : IconPool.getIconURI("attachment"),
			iconActive : true,
			iconPress : oh4PressHandler
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "scrollContainer", {
		configurable: "false",
		writable: "true",

		value: new ScrollContainer({
			width : "100%",
			horizontal : Device.system.phone,
			content: [new Label({text: "This label is displayed on the Object Header's right hand side"})]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "facetGrid", {
		configurable: "false",
		writable: "true",

		value: new Grid({
			defaultSpan: "L6 M12 S12",
			hSpacing: 1,
			vSpacing: 1,
			width: "auto",
			content: [oh1, oh2, oh3, oh4]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "gridOHeader", {
		configurable: "false",
		writable: "true",

		value: new ObjectHeader ({
			title: "Create fictitious vendor and initiate payment to the vendor [Vendor Management]",
			condensed: true })
	});

	gridOHeader.addAttribute(new ObjectAttribute({ text: "P001" }));

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "headerGrid", {
		configurable: "false",
		writable: "true",

		value: new Grid({
			hSpacing: 0,
			vSpacing: 0,
			content: [
				gridOHeader,
				scrollContainer
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "masterPage", {
		configurable: "false",
		writable: "true",

		value: new Page({
			content: [headerGrid, facetGrid],
			showNavButton: true,
		})
	});

	// put all the testing object header objects on the testing page
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",
		value: new App()
	});


	app.setInitialPage(masterPage.getId());
	app.addPage(masterPage);

	app.placeAt('body');
});