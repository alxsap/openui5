var oModel = new sap.ui.model.json.JSONModel({
	srcWithModificationsRelative: "images/Woman_avatar_01.png",
	srcWithModificationsAbsolute: "https://sapui5.hana.ondemand.com/test-resources/sap/m/images/Woman_avatar_02.png",
	srcWithoutModifications: "https://sapui5.hana.ondemand.com/test-resources/sap/m/images/Woman_04.png",
});

sap.ui.getCore();
sap.ui.xmlview({ viewContent: $('#myView').html() }).placeAt("content");