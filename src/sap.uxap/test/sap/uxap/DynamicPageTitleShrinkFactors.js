(function (jQuery, App, Page) {
	sap.ui.controller("myController", {
		onInit: function() {
			this.view = this.getView();
			this.titleSlider = this.view.byId('titleSlider');
			this.contentSlider = this.view.byId('contentSlider');
			this.actionsSlider = this.view.byId('actionsSlider');
		},

		// implement an event handler in the Controller
		changeShrinkRatio: function(oEvent) {
			var oView = this.getView(),
				sAreaShrinkRatio = this.titleSlider.getValue() + ":"
									+ this.contentSlider.getValue() + ":"
									+ this.actionsSlider.getValue();

			oView.byId('dynamicPageTitle').setAreaShrinkRatio(sAreaShrinkRatio);
		}
	});

	sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function () {
		var oApp = new App(),
			myView = sap.ui.xmlview({viewContent: jQuery('#view1').html()});

		oApp.addPage(new Page({
			title: "New Header",
			content: [myView]
		})).placeAt("content");
	}));

}(jQuery, sap.m.App, sap.m.Page));