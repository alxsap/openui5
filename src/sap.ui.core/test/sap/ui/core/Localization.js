sap.ui.define([
		"sap/ui/core/Supportability",
		"sap/base/i18n/Localization",
		"sap/ui/commons/layout/MatrixLayout",
		"sap/ui/commons/TextView",
		"sap/ui/commons/Label",
		"sap/ui/commons/TextField",
		"sap/ui/model/resource/ResourceModel"
], function(Supportability, Localization, MatrixLayout, TextView, Label, TextField, ResourceModel) {
		"use strict";
		try{
			sap.ui.getCore().loadLibrary("sap.ui.commons");
		}catch(e){
			alert("This test page requires the library 'sap.ui.commons' which is not available.");
			throw(e);
		}

		function showInfo() {
			var mInfo = this.getOriginInfo("text"),
				sText = "Info:\n";

			if (mInfo) {
				undefined/*jQuery*/.each(mInfo, function(key, value) {
					sText += key + ": " + value + "\n";
				});
			} else {
				sText += "Not available!";
			}
			alert(sText);
		}

		/* TODO: Consider replacing this
				* with a local var (let x=...) or 
				* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "sLocale", {
				configurable: "false",
				writable: "true",
				value: Localization.getLanguage()
		});

		/* TODO: Consider replacing this
				* with a local var (let x=...) or 
				* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oBundle", {
				configurable: "false",
				writable: "true",
				value: undefined/*jQuery*/.sap.resources({url : "resources/i18n.properties", locale: sLocale, includeInfo: Supportability.collectOriginInfo()})
		});

		/* TODO: Consider replacing this
				* with a local var (let x=...) or 
				* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oMatrixLayout", {
				configurable: "false",
				writable: "true",
				value: new MatrixLayout()
		});

		oMatrixLayout.setLayoutFixed(false);
		oMatrixLayout.createRow(
				new TextView({text: oBundle.getText("welcome", ["Administrator"])}).attachBrowserEvent("click", showInfo)
		);
		oMatrixLayout.getRows()[0].getCells()[0].setColSpan(2);
		oMatrixLayout.createRow(
				new Label({text: oBundle.getText("lastname"), tooltip: oBundle.getText("lastname")}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.createRow(
				new Label({text: oBundle.getText("firstname")}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.createRow(
				new Label({text: oBundle.getText("street")}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.createRow(
				new Label({text: oBundle.getText("zip")}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.createRow(
				new Label({text: oBundle.getText("city")}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.placeAt("resourcebundle");

		/* TODO: Consider replacing this
				* with a local var (let x=...) or 
				* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oResourceModel", {
				configurable: "false",
				writable: "true",
				value: new ResourceModel({bundleUrl:"resources/i18n.properties"})
		});

		/* TODO: Consider replacing this
				* with a local var (let x=...) or 
				* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oMatrixLayout", {
				configurable: "false",
				writable: "true",
				value: new MatrixLayout()
		});

		oMatrixLayout.setModel(oResourceModel, "i18n");
		oMatrixLayout.setLayoutFixed(false);
		oMatrixLayout.createRow(
				new TextView({text: oResourceModel.getResourceBundle().getText("welcome", ["Administrator"])}).attachBrowserEvent("click", showInfo)
		);
		oMatrixLayout.getRows()[0].getCells()[0].setColSpan(2);
		oMatrixLayout.createRow(
				new Label({text: "{i18n>lastname}", tooltip: "{i18n>lastname}"}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.createRow(
				new Label({text: "{i18n>firstname}"}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.createRow(
				new Label({text: "{i18n>street}"}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.createRow(
				new Label({text: "{i18n>zip}"}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.createRow(
				new Label({text: "{i18n>city}"}).attachBrowserEvent("click", showInfo) ,
				new TextField()
		);
		oMatrixLayout.placeAt("resourcemodel");

		undefined/*jQuery*/(function(){
			var url = undefined/*jQuery*/.sap.getModulePath("sap.ui.commons", '/') + "messagebundle.properties";
			var oBundle = undefined/*jQuery*/.sap.resources({url:url});
			undefined/*jQuery*/("#locale").html(oBundle ? oBundle.sLocale : "--");
		});
});