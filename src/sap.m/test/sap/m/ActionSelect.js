sap.ui.define([
	"sap/m/MessageToast",
	"sap/m/App",
	"sap/m/ActionSelect",
	"sap/ui/core/Item",
	"sap/m/Button",
	"sap/m/Label",
	"sap/m/library",
	"sap/ui/core/IconPool",
	"sap/m/Page",
	"sap/m/Bar",
	"sap/ui/layout/Grid",
	"sap/m/VBox",
	"sap/base/Log"
], function(MessageToast, App, ActionSelect, Item, Button, Label, mobileLibrary, IconPool, Page, Bar, Grid, VBox, Log) {
	"use strict";

	// shortcut for sap.m.SelectType
	const SelectType = mobileLibrary.SelectType;

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oApp", {
		configurable: "false",
		writable: "true",

		value: new App("myApp", {
					initialPage:"page1"
				})
	}), // select controls
	Object.defineProperty(globalThis, "oActionSelect0", {
		configurable: "false",
		writable: "true",

		value: new ActionSelect("content_left",{	// the selected item is not specified, the first one will be selected
			width: "33%",
			items: [
				oItem0 = new Item("first_content_left",{
					key: "0",
					text: "item 0"
				}),

				oItem1 = new Item({
					key: "1",
					text: "item 1"
				}),

				oItem2 = new Item({
					key: "2",
					text: "item 2"
				}),

				oItem3 = new Item({
					key: "3",
					text: "item 3"
				}),

				oItem4 = new Item({
					key: "4",
					text: "item 4"
				}),

				oItem5 = new Item({
					key: "5",
					text: "item 5"
				})
			],

			buttons: [
				oButton0 = new Button({
					text: "Action 1",
					enabled: false,
					press: function() {
						//sap.m.MessageToast.show("Action 1 pressed");
					}
				}),

				oButton1 = new Button({
					text: "Action 2",
					press: function() {
						//sap.m.MessageToast.show("Action 2 pressed");
					}
				})
			],

			change: function(oControlEvent) {
				Log.info("Event fired: 'change' value property to " + oControlEvent.getParameter("selectedItem") + " on " + this);
			}
		})
	}), Object.defineProperty(globalThis, "oLabel0", {
		configurable: "false",
		writable: "true",

		value: new Label({
			text: "Action Select in Custom Header Left:",
			labelFor: oActionSelect0
		})
	}), // select controls
	Object.defineProperty(globalThis, "oActionSelect4", {
		configurable: "false",
		writable: "true",

		value: new ActionSelect("content_right",{	// the selected item is not specified, the first one will be selected
			width: "33%",
			items: [
				oItem0 = new Item("first_content_right",{
					key: "0",
					text: "item 0"
				}),

				oItem1 = new Item({
					key: "1",
					text: "item 1"
				}),

				oItem2 = new Item({
					key: "2",
					text: "item 2"
				}),

				oItem3 = new Item({
					key: "3",
					text: "item 3"
				}),

				oItem4 = new Item({
					key: "4",
					text: "item 4"
				}),

				oItem5 = new Item({
					key: "5",
					text: "item 5"
				})
			],

			change: function(oControlEvent) {
				Log.info("Event fired: 'change' value property to " + oControlEvent.getParameter("selectedItem") + " on " + this);
			}
		})
	}), Object.defineProperty(globalThis, "oLabel4", {
		configurable: "false",
		writable: "true",

		value: new Label({
			text: "Action Select in Custom Header Right:",
			labelFor: oActionSelect4
		})
	}), Object.defineProperty(globalThis, "oActionSelect1", {
		configurable: "false",
		writable: "true",

		value: new ActionSelect("header_left",{	// the selected item is not specified, the first one will be selected
			items: [
				oItem6 = new Item("first_header_left",{
					key: "0",
					text: "item 0"
				}),

				oItem7 = new Item({
					key: "1",
					text: "item 1"
				}),

				oItem8 = new Item({
					key: "2",
					text: "item 2"
				}),

				oItem9 = new Item({
					key: "3",
					text: "item 3"
				}),

				oItem10 = new Item({
					key: "4",
					text: "item 4"
				}),

				oItem11 = new Item({
					key: "5",
					text: "item 5"
				}),
				oItem101 = new Item({
					key: "105",
					text: "item 105"
				}),
				oItem102 = new Item({
					key: "106",
					text: "item 106"
				}),
				oItem103 = new Item({
					key: "107",
					text: "item 107"
				}),
				oItem104 = new Item({
					key: "108",
					text: "item 108"
				}),
				oItem105 = new Item({
					key: "109",
					text: "item 109"
				}),
				oItem106 = new Item({
					key: "110",
					text: "item 110"
				}),
				oItem107 = new Item({
					key: "111",
					text: "item 111"
				}),
				oItem108 = new Item({
					key: "112",
					text: "item 112"
				}),
				oItem109 = new Item({
					key: "113",
					text: "item 113"
				})
			],

			buttons: [
				oButton2 = new Button({
					text: "Action 1"
				}),

				oButton3 = new Button({
					text: "Action 2"
				})
			],

			change: function(oControlEvent) {
				Log.info("Event fired: 'change' value property to " + oControlEvent.getParameter("selectedItem") + " on " + this);
			}
		})
	}), Object.defineProperty(globalThis, "oLabel1", {
		configurable: "false",
		writable: "true",

		value: new Label({
			text: "Action Select in Header:",
			labelFor: oActionSelect1
		})
	}), Object.defineProperty(globalThis, "oActionSelect2", {
		configurable: "false",
		writable: "true",

		value: new ActionSelect("footer_right",{	// the selected item is not specified, the first one will be selected
			width: "10rem",
			items: [
				oItem12 = new Item("first_footer_right",{
					key: "0",
					text: "item 0"
				}),

				oItem13 = new Item({
					key: "1",
					text: "item 1"
				}),

				oItem14 = new Item({
					key: "2",
					text: "item 2"
				}),

				oItem15 = new Item({
					key: "3",
					text: "item 3"
				}),

				oItem16 = new Item({
					key: "4",
					text: "item 4"
				}),

				oItem17 = new Item({
					key: "5",
					text: "item 5"
				})
			],

			buttons: [
				oButton4 = new Button({
					text: "Action 1"
				}),

				oButton5 = new Button({
					text: "Action 2"
				})
			],

			change: function(oControlEvent) {
				Log.info("Event fired: 'change' value property to " + oControlEvent.getParameter("selectedItem") + " on " + this);
			}
		})
	}), Object.defineProperty(globalThis, "oLabel2", {
		configurable: "false",
		writable: "true",

		value: new Label({
			text: "Action Select in Footer Right:",
			labelFor: oActionSelect2
		})
	}), Object.defineProperty(globalThis, "oActionSelect3", {
		configurable: "false",
		writable: "true",

		value: new ActionSelect("footer_left",{	// the selected item is not specified, the first one will be selected
			type: SelectType.IconOnly,
			icon: IconPool.getIconURI("filter"),
			autoAdjustWidth: true,
			width: "10rem",
			items: [
				oItem18 = new Item("first_footer_left",{
					key: "0",
					text: "item 0"
				}),

				oItem19 = new Item({
					key: "1",
					text: "item 1"
				}),

				oItem20 = new Item({
					key: "2",
					text: "item 2"
				}),

				oItem21 = new Item({
					key: "3",
					text: "item 3"
				}),

				oItem22 = new Item({
					key: "4",
					text: "item 4"
				}),

				oItem23 = new Item({
					key: "5",
					text: "item 5"
				})
			],

			buttons: [
				oButton5 = new Button({
					text: "Action 1"
				}),

				oButton6 = new Button({
					text: "Action 2"
				})
			],

			change: function(oControlEvent) {
				Log.info("Event fired: 'change' value property to " + oControlEvent.getParameter("selectedItem") + " on " + this);
			}
		})
	}), Object.defineProperty(globalThis, "oLabel3", {
		configurable: "false",
		writable: "true",

		value: new Label({
			text: "Action Select in Footer Left:",
			labelFor: oActionSelect3
		})
	}), // page
	Object.defineProperty(globalThis, "oPage1", {
		configurable: "false",
		writable: "true",

		value: new Page("page1", {
			customHeader: oBar0 = new Bar({

				contentLeft: [oLabel1, oActionSelect1],

				contentMiddle: new Label({
					text: "Action Select Control demo page"
				})
			}),

			content: [
				new Grid({
					content: [
						new VBox({items: [oLabel0, oActionSelect0]}),
						new VBox({items: [oLabel4, oActionSelect4]})
					]
				})
			],

			footer: oBar1 = new Bar({
				contentLeft: [oLabel3, oActionSelect3],
				contentRight: [oLabel2, oActionSelect2]
			})
		})
	});

	oApp.addPage(oPage1);
	oApp.placeAt("body");
});