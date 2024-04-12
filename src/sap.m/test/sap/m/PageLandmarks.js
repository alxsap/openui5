var oApp = new sap.m.App();
oApp.placeAt("body");

var oDefaultLandmarkInfo = new sap.m.PageAccessibleLandmarkInfo();
var oCustomLandmarkInfo = new sap.m.PageAccessibleLandmarkInfo({
	headerRole: sap.ui.core.AccessibleLandmarkRole.Banner,
	headerLabel: "Header label from LandmarkInfo",
	subHeaderRole: sap.ui.core.AccessibleLandmarkRole.Banner,
	subHeaderLabel: "SubHeader label from LandmarkInfo",
	rootRole: sap.ui.core.AccessibleLandmarkRole.Region,
	rootLabel: "Root label from LandmarkInfo",
	contentRole: sap.ui.core.AccessibleLandmarkRole.Main,
	contentLabel: "Content label from LandmarkInfo",
	footerRole: sap.ui.core.AccessibleLandmarkRole.Banner,
	footerLabel: "Footer label from LandmarkInfo"
});

var oPage = new sap.m.Page({
	title: "A Page",
	subHeader: new sap.m.Bar({
		contentMiddle: [
			new sap.m.Title({ text: "SubHeader title" })
		]
	}),
	content: [
		new sap.m.Button({
			text: "Clear Landmarks",
			press: function(){
				oPage.setLandmarkInfo(null);
			}
		}),
		new sap.m.Button({
			text: "Add Default Landmarks",
			press: function(){
				oPage.setLandmarkInfo(oDefaultLandmarkInfo);
			}
		}),
		new sap.m.Button({
			text: "Add Custom Landmarks",
			press: function(){
				oPage.setLandmarkInfo(oCustomLandmarkInfo);
			}
		})
	],
	footer: new sap.m.Bar({
		contentMiddle: [
			new sap.m.Title({ text: "Footer title" })
		]
	})
});
oApp.addPage(oPage);