sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView"
], function(JSONModel) {
	"use strict";
	sap.ui.loader.config({paths: {"mvc": "./mvc"}});
	
	var oData = {
		names: [
			{firstName: "Peter", lastName: "Mueller"},
			{firstName: "Petra", lastName: "Maier"},
			{firstName: "Thomas", lastName: "Smith"},
			{firstName: "John", lastName: "Williams"},
			{firstName: "Maria", lastName: "Jones"}
		],
		selectedNames: []
	};
	
	// create a Model with this data
	var oModel = new JSONModel();
	oModel.setData(oData);
	sap.ui.getCore();
	
	// create the UI
	sap.ui.xmlview({viewName:"mvc.betweenLists"}).placeAt("content");
});
