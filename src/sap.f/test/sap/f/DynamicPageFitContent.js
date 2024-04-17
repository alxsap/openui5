sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/m/Button",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/SplitApp",
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/mvc/Controller"
], async function(XMLView, Button, List, StandardListItem, SplitApp, jQuery) {
	"use strict";

	// INFO VIEW

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "infoPage", {
		configurable: "false",
		writable: "true",

		value: await XMLView.create({
			id: 'info',
			definition:jQuery('#info').html()
		})
	});

	sap.ui.controller("vboxController", {
		onInit: function() {
			var byId = function (id) {
				return this.getView().byId(id);
			}.bind(this);

			this.vBoxContent = byId('vbox-content');
			this.dp = byId('DPNormalContent');

			byId("toggleBtn-dp-fitContent").setPressed(this.dp.getFitContent());
			byId("toggleBtn-vBox-fitContainer").setPressed(this.vBoxContent.getFitContainer());
			byId("toggleBtn-showFooter").setPressed(this.dp.getShowFooter());
		},
		onAddContent: function () {
			this.vBoxContent.addItem(new Button({ text: "Simple Button" }));
		},
		onRemoveContent: function () {
			var itemsCount = this.vBoxContent.getItems().length;

			this.vBoxContent.removeItem(itemsCount - 1);
		},
		onClearContent: function () {
			this.vBoxContent.removeAllItems();
		},
		onFitContentChange: function (event) {
			this.dp.setFitContent(event.getSource().getPressed());
		},
		onVBoxFitContainerPress: function (event) {
			this.vBoxContent.setFitContainer(event.getSource().getPressed());
		},
		onToggleFooterPress: function (event) {
			this.dp.setShowFooter(event.getSource().getPressed());
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vbox", {
		configurable: "false",
		writable: "true",

		value: await XMLView.create({
			id: 'vbox',
			definition:jQuery('#vbox').html()
		})
	});

	sap.ui.controller("analyticalTableController", {
		onInit: function() {
			var byId = function (id) {
				return this.getView().byId(id);
			}.bind(this);

			this.dp = byId('dp');

			byId("toggleBtn-dp-fitContent").setPressed(this.dp.getFitContent());
			byId("toggleBtn-showFooter").setPressed(this.dp.getShowFooter());
		},
		onFitContentChange: function (event) {
			this.dp.setFitContent(event.getSource().getPressed());
		},
		onToggleFooterPress: function (event) {
			this.dp.setShowFooter(event.getSource().getPressed());
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "analyticalTable", {
		configurable: "false",
		writable: "true",

		value: await XMLView.create({
			id: 'analyticalTable',
			definition:jQuery('#analyticalTable').html()
		})
	});

	sap.ui.controller("iconTabBarAnalyticalTableController", {
		onInit: function() {
			var byId = function (id) {
				return this.getView().byId(id);
			}.bind(this);

			this.dp = byId('dp');

			byId("toggleBtn-dp-fitContent").setPressed(this.dp.getFitContent());
			byId("toggleBtn-showFooter").setPressed(this.dp.getShowFooter());
		},
		onFitContentChange: function (event) {
			this.dp.setFitContent(event.getSource().getPressed());
		},
		onToggleFooterPress: function (event) {
			this.dp.setShowFooter(event.getSource().getPressed());
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "iconTabBarAnalyticalTable", {
		configurable: "false",
		writable: "true",

		value: await XMLView.create({
			id: 'iconTabBarAnalyticalTable',
			definition:jQuery('#iconTabBarAnalyticalTable').html()
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "masterPage", {
		configurable: "false",
		writable: "true",

		value: new List({
				itemPress: function(oEvent) {
					var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

					splitApp.toDetail(sToPageId);
				},
				items: [
					new StandardListItem({
						title: "Info",
						type: "Active",
						customData: {
							Type:"sap.ui.core.CustomData",
							key:"to",
							value:"info"
						}
					}),
					new StandardListItem({
						title: "VBox",
						type: "Active",
						customData: {
							Type:"sap.ui.core.CustomData",
							key:"to",
							value:"vbox"
						}
					}),
					new StandardListItem({
						title: "Analytical Table",
						type: "Active",
						customData: {
							Type:"sap.ui.core.CustomData",
							key:"to",
							value:"analyticalTable"
						}
					}),
					new StandardListItem({
						title: "IconTabBar > Analytical Table",
						type: "Active",
						customData: {
							Type:"sap.ui.core.CustomData",
							key:"to",
							value:"iconTabBarAnalyticalTable"
						}
					})
				]
			})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "splitApp", {
		configurable: "false",
		writable: "true",

		value: new SplitApp({
			detailPages: [infoPage, vbox, analyticalTable, iconTabBarAnalyticalTable],
			masterPages: masterPage
		})
	});

	splitApp.placeAt('content');
});