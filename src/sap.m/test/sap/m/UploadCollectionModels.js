sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/ViewType",
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/mvc/View",
	"sap/ui/core/mvc/Controller"
], function(JSONModel, ViewType, jQuery) {
	"use strict";
	sap.ui.controller("myController", {
		onInit : function() {
			var model = new JSONModel();
			model.setData({
				itemCol : [{
					lastName : "{Dente}",
					name : "{Al}",
					checked : true,
					linkText : "www.sap.com",
					href : "http://www.sap.com",
					rating : "{4}"
				}, {
					lastName : "{Doe}",
					name : "{John}",
					checked : true,
					linkText : "www.sap.com",
					href : "http://www.sap.com",
					rating : "{5}"
				}, {
					lastName : "{Carlin}",
					name : "{George}",
					checked : true,
					linkText : "www.sap.com",
					href : "http://www.sap.com",
					rating : "{4}"
				}, {
					lastName : "Dente",
					name : "Al",
					checked : true,
					linkText : "www.sap.com",
					href : "http://www.sap.com",
					rating : "4"
				}],
				textExp : "{someBindingSyntax}",
				textVal : "Proper text binding"
			});
			this.getView().setModel(model);
		}
	});
	sap.ui.view({
		viewContent : jQuery('#myXml').html(),
		type : ViewType.XML
	}).placeAt("content")
});