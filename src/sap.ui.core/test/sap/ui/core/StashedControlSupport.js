sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/m/Label",
	"sap/base/Log",
	"sap/ui/performance/Measurement",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/mvc/Controller"
], function(JSONModel, Label, Log, Measurement) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "myController", {
		configurable: "false",
		writable: "true",

		value: sap.ui.controller("mycontroller", {
			onInit: function() {
				Log.debug("in controller onInit");
			},
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",

		value: new JSONModel({
			stashed3: false,
			stashed4: false
		})
	});


	Measurement.setActive(true);
	Measurement.start("view_loading");
	sap.ui.xmlview("view1", {
		controller: myController,
		viewContent: document.getElementById("myview").innerHTML
	}).setModel(oModel).placeAt("content");
	Measurement.end("view_loading");
	new Label({
		text: "loading time: " + Measurement.getMeasurement("view_loading").duration + " ms"
	}).placeAt("result");
});