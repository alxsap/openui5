sap.ui.define([
	"sap/m/ObjectNumber",
	"sap/m/Button",
	"sap/ui/core/library",
	"sap/m/App",
	"sap/m/Page"
], function(ObjectNumber, Button, coreLibrary, App, Page) {
	"use strict";

	// shortcut for sap.ui.core.ValueState
	const ValueState = coreLibrary.ValueState;

	var on1 = new ObjectNumber("on1", {
		number: "300,000,000",
		unit: "Euro"
	});

	var on2 = new ObjectNumber("on2", {
		number: "300,000,000",
		unit: "Euro"
	}).addStyleClass("sapMObjectNumberLarge");

	var oButtonEmphasized =new Button("emphasized", {
		text:"Toggle emphasized",
		press: function(){
			on1.setEmphasized(!on1.getEmphasized());
			on2.setEmphasized(!on2.getEmphasized());
		}
	});

	var oButtonNum =new Button("num", {
		text:"Set number",
		press: function(){
			on1.setNumber("100");
			on2.setNumber("100");
		}
	});

	var oButtonUnit =new Button("unit", {
		text:"Set unit",
		press: function(){
			on1.setUnit("Dollars");
			on2.setUnit("Dollars");
		}
	});

	var oButtonStateS =new Button("change_stateS", {
		text:"Success state",
		press: function(){
			on1.setState(ValueState.Success);
			on2.setState(ValueState.Success);
		}
	});

	var oButtonStateE =new Button("change_stateE", {
		text:"Error state",
		press: function(){
			on1.setState(ValueState.Error);
			on2.setState(ValueState.Error);
		}
	});

	var oButtonStateW =new Button("change_stateW", {
		text:"Warning state",
		press: function(){
			on1.setState(ValueState.Warning);
			on2.setState(ValueState.Warning);
		}
	});

	var oButtonStateI =new Button("change_stateI", {
		text:"Information state",
		press: function(){
			on1.setState(ValueState.Information);
			on2.setState(ValueState.Information);
		}
	});

	var app = new App();
	var page = new Page({
		showHeader : false,
		enableScrolling : true,
		content: [
			on1,
			on2,
			oButtonEmphasized,
			oButtonNum,
			oButtonUnit,
			oButtonStateS,
			oButtonStateE,
			oButtonStateW,
			oButtonStateI
		]
	});
	app.setInitialPage(page.getId());
	app.addPage(page);

	app.placeAt('body');
});
