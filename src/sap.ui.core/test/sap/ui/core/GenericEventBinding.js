// Note: the HTML page 'GenericEventBinding.html' loads this module via data-sap-ui-on-init

sap.ui.define([
	"sap/ui/core/Core",
	"sap/ui/core/Rendering",
	"sap/ui/commons/TextField",
	"sap/ui/commons/layout/MatrixLayout",
	"sap/ui/commons/Button"
], function(
	Core,
	Rendering,
	TextField,
	MatrixLayout,
	Button
) {
	"use strict";
	Core.ready().then(function() {
		function scream() {
			alert("Help! I'm blurred!");
		}
		function scream2() {
			alert("HEEEEEEELP! I'M BLURRED!");
		}

		var oTf1 = new TextField("tf1").attachBrowserEvent("blur", function(){alert("Help! I'm blurred!");});
		oTf1.placeAt("uiArea1");

		var oLayout = new MatrixLayout().setWidth("auto");
		var oBtn = new Button("btn1", {text : "Bind blur event to TextField"});
		oBtn.attachPress(function(){
			oTf2.attachBrowserEvent("blur", scream);
		});

		var oBtn2 = new Button("btn2", {text : "Bind another, more INTENSE, blur event to TextField"});
		oBtn2.attachPress(function(){
			oTf2.attachBrowserEvent("blur", scream2);
		});

		var oBtn3 = new Button("btn3", {text : "Unbind blur event from TextField"});
		oBtn3.attachPress(function(){
			oTf2.detachBrowserEvent("blur", scream);
		});

		var oBtn4 = new Button("btn4", {text : "Unbind INTENSE blur event from TextField"});
		oBtn4.attachPress(function(){
			oTf2.detachBrowserEvent("blur", scream2);
		});

		oLayout.createRow(oBtn, oBtn2);
		oLayout.createRow(oBtn3, oBtn4);
		oLayout.placeAt("uiArea2");

		var oTf2 = new TextField("tf2");
		oTf2.placeAt("uiArea3");

		var oBtnR = new Button("btnR", {text : "Re-Render the TextFields", press : function(){
			oTf1.invalidate();
			oTf2.invalidate();
		}});
		oBtnR.placeAt("uiArea4")
	});
});