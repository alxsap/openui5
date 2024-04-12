sap.ui.define([
	"sap/m/PagingButton",
	"sap/m/App",
	"sap/m/MessageToast",
	"sap/m/Button",
	"sap/ui/core/IconPool",
	"sap/m/Input",
	"sap/m/Label",
	"sap/m/Page"
], function(PagingButton, App, MessageToast, Button, IconPool, Input, Label, Page) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",
		value: new App("myApp", {initialPage: "page1"})
	}), Object.defineProperty(globalThis, "oPagingButton", {
		configurable: "false",
		writable: "true",

		value: new PagingButton({
			count: 10, positionChange: function (oEvent) {
				var msg = 'Position was ' + oEvent.getParameter("oldPosition")
						+ ", now is " + oEvent.getParameter("newPosition");
				MessageToast.show(msg);
			}
		})
	}), Object.defineProperty(globalThis, "getButtons", {
		configurable: "false",
		writable: "true",

		value: function () {
			return [
				new Button({
					icon: IconPool.getIconURI("add"),
					text: "one",
					enabled: true
				}),
				new Button({
					icon: IconPool.getIconURI("attachment"),
					text: "two",
					enabled: true
				}),
				new Button({
					icon: IconPool.getIconURI("paper-plane"),
					text: "three",
					enabled: false
				}),
				new Button({
					icon: IconPool.getIconURI("synchronize"),
					text: "four",
					enabled: true
				})];
		}
	}), Object.defineProperty(globalThis, "oChangePositionInput", {
		configurable: "false",
		writable: "true",

		value: new Input("changePosition", {
			liveChange: function (oEvent) {
				oPagingButton.setPosition(+oEvent.getParameter("value"))
			}
		})
	}), Object.defineProperty(globalThis, "oChangePositionLabel", {
		configurable: "false",
		writable: "true",

		value: new Label({
			text: "Change position value",
			labelFor: "changePosition"
		})
	}), Object.defineProperty(globalThis, "oChangeCountInput", {
		configurable: "false",
		writable: "true",

		value: new Input("changeCount", {
			liveChange: function (oEvent) {
				oPagingButton.setCount(+oEvent.getParameter("value"))
			}
		})
	}), Object.defineProperty(globalThis, "oChangeCountLabel", {
		configurable: "false",
		writable: "true",

		value: new Label({
			text: "Change count value",
			labelFor: "changeCount"
		})
	}), Object.defineProperty(globalThis, "page1", {
		configurable: "false",
		writable: "true",

		value: new Page("page1", {
			title: "PagingButton",
			titleLevel: "H1",
			headerContent: [
				getButtons(),
				oPagingButton,
				getButtons()
			],
			content: [
				oChangePositionLabel,
				oChangePositionInput,
				oChangeCountLabel,
				oChangeCountInput,
				getButtons(),
				new PagingButton({
					count: 10, positionChange: function (oEvent) {
						var msg = 'Position was ' + oEvent.getParameter("oldPosition")
								+ ", now is " + oEvent.getParameter("newPosition");
						MessageToast.show(msg);
					}
				}),
				getButtons()
			]
		})
	});

	app.addPage(page1);

	app.placeAt("body");
});