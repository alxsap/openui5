'use strict';
var oPage = new sap.m.Page({
	title: "sap.f.Card",
	content: [
		new sap.m.Text({
			width: "100%",
			text: "Use a browser where web security is turned of to see data"
		}),
		new sap.f.Card("card6x6withlistcard", {
			rows: 6,
			cols: 6,
			manifest: "test.cardcontent.listcardmail"
		}),
		new sap.f.Card("card4x4withlistcard", {
			rows: 4,
			cols: 4,
			manifest: "test.cardcontent.listcardmail"
		})
	]
});

var oApp = new sap.m.App();
oApp.addPage(oPage).placeAt("body");