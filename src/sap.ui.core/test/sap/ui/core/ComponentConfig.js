sap.ui.define([
], function() {
	"use strict";
	sap.ui.localResources("samples");
	
	var oComp = sap.ui.component({
		name: "samples.components.config"
	});
	var oCompCont = new sap.ui.core.ComponentContainer({
		component: oComp
	});
	oCompCont.placeAt("content");
});
