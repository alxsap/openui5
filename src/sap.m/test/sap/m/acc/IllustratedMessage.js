sap.ui.define([
	"sap/ui/core/InvisibleText",
	"sap/m/App",
	"sap/m/Page",
	"sap/m/IllustratedMessage",
	"sap/m/Button"
], function(InvisibleText, App, Page, IllustratedMessage, Button) {
	"use strict";
	new InvisibleText("illustatedMessage_label", {text: "No activities Illustration"}).toStatic();
	
	var oApp = new App("myApp"),
		oPage = new Page("myPage", {
				title: "sap.m.IllustratedMessage Test Page",
				titleLevel: "H1",
				content: [
					new IllustratedMessage({
						illustrationType: "sapIllus-NoActivities",
						illustrationAriaLabelledBy: "illustatedMessage_label",
						additionalContent: [
							new Button({
								text: "Add activity"
					})]
				})]
		});
	
	oApp.addPage(oPage);
	oApp.placeAt('content');
});
