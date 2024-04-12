(function (jQuery, App, Page) {

	sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function () {
		var oApp = new App(),
			myView = sap.ui.xmlview({viewContent: jQuery('#view1').html()});

		oApp.addPage(new Page({
			title: "New Header",
			content: [myView]
		})).placeAt("content");
	}));

}(jQuery, sap.m.App, sap.m.Page));