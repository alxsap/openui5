sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/thirdparty/jquery", "sap/ui/core/mvc/XMLView", "sap/ui/core/mvc/Controller"],
  function(JSONModel, jQuery) {
	"use strict";
	sap.ui.controller("myController", {
	  onInit: function () {
		var Categories = [{ Name: "Laptops" },
		{ Name: "Accessories" },
		{ Name: "Flat Screen Monitors" },
		{ Name: "Printers" },
		{ Name: "Multifunction Printers" },
		{ Name: "Mice" },
		{ Name: "Keyboards" },
		{ Name: "Mousepads" },
		{ Name: "Computer System Accessories" },
		{ Name: "Graphic Cards" },
		{ Name: "Scanners" },
		{ Name: "Speakers" },
		{ Name: "Software" },
		{ Name: "Telecommunications" },
		{ Name: "PCs" },
		{ Name: "Servers" },
		{ Name: "Flat Screen TVs" },
		{ Name: "Desktop Computers" },
		{ Name: "Tablets" },
		{ Name: "Smartphones and Tablets" },
		{ Name: "Flat Screens" }]

		const SelectList = [];
		for (let i of Categories) {
		  i.Category = i.Name
		  if (i.Name.startsWith("S")) {
			SelectList.push(i)
		  }
		}

		// @ts-ignore
		const oData = {
		  Categories: undefined,
		  SelectList: undefined
		};

		oData.Categories = Categories;
		oData.SelectList = SelectList;
		var oModel = new JSONModel();
		oModel.setData(oData);
		this.getView().setModel(oModel);


	  }
	});
	sap.ui.xmlview({ viewContent: jQuery('#myXml').html() }).placeAt("content");
  }
);