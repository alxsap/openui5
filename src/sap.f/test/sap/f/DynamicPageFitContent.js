sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function () {
	// INFO VIEW

	var infoPage = sap.ui.xmlview('info' ,{viewContent:jQuery('#info').html()});

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
			this.vBoxContent.addItem(new sap.m.Button({ text: "Simple Button" }));
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
	var vbox = sap.ui.xmlview('vbox', {viewContent:jQuery('#vbox').html()});

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
	var analyticalTable = sap.ui.xmlview('analyticalTable', {viewContent:jQuery('#analyticalTable').html()});

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
	var iconTabBarAnalyticalTable = sap.ui.xmlview('iconTabBarAnalyticalTable', {viewContent:jQuery('#iconTabBarAnalyticalTable').html()});

	var masterPage = new sap.m.List({
			itemPress: function(oEvent) {
				var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();

				splitApp.toDetail(sToPageId);
			},
			items: [
				new sap.m.StandardListItem({
					title: "Info",
					type: "Active",
					customData: {
						Type:"sap.ui.core.CustomData",
						key:"to",
						value:"info"
					}
				}),
				new sap.m.StandardListItem({
					title: "VBox",
					type: "Active",
					customData: {
						Type:"sap.ui.core.CustomData",
						key:"to",
						value:"vbox"
					}
				}),
				new sap.m.StandardListItem({
					title: "Analytical Table",
					type: "Active",
					customData: {
						Type:"sap.ui.core.CustomData",
						key:"to",
						value:"analyticalTable"
					}
				}),
				new sap.m.StandardListItem({
					title: "IconTabBar > Analytical Table",
					type: "Active",
					customData: {
						Type:"sap.ui.core.CustomData",
						key:"to",
						value:"iconTabBarAnalyticalTable"
					}
				})
			]
		});

	var splitApp = new sap.m.SplitApp({
		detailPages: [infoPage, vbox, analyticalTable, iconTabBarAnalyticalTable],
		masterPages: masterPage
	});
	splitApp.placeAt('content');
}));