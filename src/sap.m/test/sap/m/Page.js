var oApp = new sap.m.App("myApp", {
	initialPage: "page"
});

var aBackgrounds = ["List", "Solid", "Transparent", "Standard"];
var iCurrentBackground = 0;

var oSetBusyButton = new sap.m.Button({
	id: "setbusy-button", text: "Set busy",
	tooltip: "Set the page to busy", press: function () {
		oPage.setBusy(true);
	}
});

var fnCycleBackgrounds = function () {
	oPage.setBackgroundDesign(aBackgrounds[iCurrentBackground]);

	if (iCurrentBackground < aBackgrounds.length) {
		iCurrentBackground++;
	} else {
		iCurrentBackground = 0;
	}
};

var oChangeBackground = new sap.m.Button({
	id: "background-change-button", text: "Cycle background",
	tooltip: "Cycles the backgrounds", press: fnCycleBackgrounds
});

var oPage = new sap.m.Page("page", {
	landmarkInfo: new sap.m.PageAccessibleLandmarkInfo(),
	title: "Page Control",
	showNavButton: true,
	contentOnlyBusy: true,
	content: [
		new sap.m.Button('hide-show-header', {
			 text: "Hide/show header",
			 press: function () {
				 oPage.setShowHeader(!oPage.getShowHeader());
			 }
		}),
		new sap.m.Button('hide-show-footer', {
			 text: "Hide/show footer",
			 press: function () {
				 oPage.setShowFooter(!oPage.getShowFooter());
			 }
		}),
		new sap.m.Button('toggle-floating-footer', {
			text: "Toggle FloatingFooter",
			press: function () {
				oPage.setFloatingFooter(!oPage.getFloatingFooter());
			}
		})
	],
	footer: new sap.m.Bar({
		contentLeft: oSetBusyButton,
		contentRight: oChangeBackground
	})
});

oApp.addPage(oPage).placeAt("content");