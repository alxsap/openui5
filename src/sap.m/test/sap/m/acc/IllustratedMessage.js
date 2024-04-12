new sap.ui.core.InvisibleText("illustatedMessage_label", {text: "No activities Illustration"}).toStatic();

var oApp = new sap.m.App("myApp"),
	oPage = new sap.m.Page("myPage", {
			title: "sap.m.IllustratedMessage Test Page",
			titleLevel: "H1",
			content: [
				new sap.m.IllustratedMessage({
					illustrationType: "sapIllus-NoActivities",
					illustrationAriaLabelledBy: "illustatedMessage_label",
					additionalContent: [
						new sap.m.Button({
							text: "Add activity"
				})]
			})]
	});

oApp.addPage(oPage);
oApp.placeAt('content');