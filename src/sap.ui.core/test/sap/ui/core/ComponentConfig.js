sap.ui.define([
	"sap/ui/core/ComponentContainer",
	"sap/ui/core/Component"
], function(ComponentContainer) {
	"use strict";
	sap.ui.localResources("samples");
	
	var oComp = sap.ui.component({
		name: "samples.components.config"
	});
	var oCompCont = new ComponentContainer({
		component: oComp
	});
	oCompCont.placeAt("content");
});
