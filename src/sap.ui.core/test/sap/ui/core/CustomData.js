sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/ui/commons/Button",
	"sap/ui/commons/Link",
	"sap/ui/model/json/JSONModel",
	"sap/ui/commons/ListBox",
	"sap/ui/core/ListItem",
	"sap/ui/core/CustomData",
	"sap/ui/core/mvc/Controller"
], async function(XMLView, Button, Link, JSONModel, ListBox, ListItem, CustomData) {
	"use strict";
	try{
		sap.ui.getCore().loadLibrary("sap.ui.commons");
	}catch(e){
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw(e);
	}
	
	function readDataOnPress(evt) {
		var control = evt.getSource();
		alert("The clicked control wants to say:\n\n" + control.data("myData"));
	}
	
	var ctrl = new Button({text:"Click me!",press:readDataOnPress});
	ctrl.data("myData", "Hello, I was born at " + new Date());
	ctrl.placeAt("content");
	
	ctrl = new Button({text:"No, click me!",press:readDataOnPress});
	ctrl.data("myData", "Hello, I love you all!");
	ctrl.placeAt("content");
	
	ctrl = new Link({text:"Please click me!",press:readDataOnPress});
	ctrl.data("myData", "I am different.");
	ctrl.placeAt("content");
	
	
	
	
	/* list binding */
	
	function giveAnswer(evt) {
		alert("The answer is:\n\n" + evt.getParameter("selectedItem").data("answer"));
	}
	
	// create some local data
	var aData = {questions:[
							{ question : "In which year was SAP founded?", answer : "1972" },
							{ question : "What was the former project name of SAPUI5?", answer : "Phoenix" },
							{ question : "What is the official name of SAPUI5?", answer : "SAP development toolkit for HTML5" },
							{ question : "How many snippix examples have been created and saved as of January 30th 2012?", answer : "1794" },
							{ question : "What is the name of the main character in 'Die Hard'?", answer : "John McClane" },
							{ question : "What is the answer?", answer : "42" }
							]};
	
	// create a JSONModel, fill in the data and bind the ListBox to this model
	var oModel = new JSONModel();
	oModel.setData(aData);
	ctrl = new ListBox({select:giveAnswer,height:"100px"});
	ctrl.setModel(oModel);
	
	var oItemTemplate = new ListItem();
	oItemTemplate.bindProperty("text", "question");
	
	var oDataTemplate = new CustomData({key:"answer"});
	oDataTemplate.bindProperty("value", "answer");
	
	oItemTemplate.addCustomData(oDataTemplate);
	
	ctrl.bindAggregation("items", "/questions", oItemTemplate);
	ctrl.placeAt("content2");
	
	
	
	
	/* XML View */
	
	
	// define a new (simple) Controller type
	sap.ui.controller("my.own.controller", {
	
		// implement an event handler in the Controller
		alertCoordinates: function(evt) {
			var control = evt.getSource();
			var dataObject = control.data("coords");
			alert("The coordinates stored along with the Button are:\n\nx: " + dataObject.x + "\ny: " + dataObject.y + "\nz: " + dataObject.z);
		}
	});
	
	var xml = '<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.ui.commons" controllerName="my.own.controller" '
		+ 'xmlns:app="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1">Button inside the View: '
		+ '<Button id="myBtn" text="Click to show stored coordinates data" app:coords="{/data}" press="alertCoordinates"></Button></mvc:View>';
	// create some dummy JSON data
	var data = {
			data : {
				x : 100,
				y : 250,
				z : 455
			}
	};
	// instantiate the View
	var myView = await XMLView.create({
		definition : xml
	});
	// create a Model and assign it to the View
	oModel = new JSONModel();
	oModel.setData(data);
	myView.setModel(oModel);
	myView.placeAt("content3");
});
