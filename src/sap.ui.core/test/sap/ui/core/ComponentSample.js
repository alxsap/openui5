sap.ui.define([
], function() {
	"use strict";
	sap.ui.localResources("samples");
	
	var oComponent = sap.ui.component({
		manifestUrl: "samples/components/sample/manifest.json"
	});
	
	var oContainer = new sap.ui.core.ComponentContainer({
		component : oComponent
	});
	oContainer.placeAt("target");
});
