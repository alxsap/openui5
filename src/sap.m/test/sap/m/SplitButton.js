sap.ui.require(["sap/m/SplitButton", "sap/m/App", "sap/m/Page"], function(SplitButton, App, Page) {
	new App().addPage(new Page({
		title: "sap.m.SplitButton",
		content: [
			new SplitButton({
				text: "abc",
				arrowPress: function(oEvent) {
					alert("arrow down: " + oEvent.getParameter('down'));
				},
				press: function() {
					alert("press");
				}
			})
		]
	})).placeAt("body");
});