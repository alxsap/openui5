sap.ui.define([
	"sap/ui/core/ComponentContainer",
	"sap/ui/core/Component"
], function(ComponentContainer) {
	"use strict";
	sap.ui.localResources("samples");
	
	var oComp = sap.ui.component({
		name: "samples.components.styledbutton",
		id: "Comp1",
		settings: {
			text: "Hello World 1"
		}
	});
	
	var oCompCont = new ComponentContainer("CompCont1", {
		component: oComp
	});
	oCompCont.placeAt("target1");
	
	var oComp2 = sap.ui.component({
		name: "samples.components.styledbutton",
		url: "samples/components/styledbutton",
		id: "Comp2",
		settings: {
			text: "Hello World 2"
		}
	});
	var oCompCont2 = new ComponentContainer("CompCont2", {
		component: oComp2
	});
	oCompCont2.placeAt("target2");
	
	var oCompCont3 = new ComponentContainer("CompCont3", {
		name: "samples.components.styledbutton",
		settings: {
			text: "Hello World 3"
		}
	});
	oCompCont3.placeAt("target3");
	
	var oCompCont4 = new ComponentContainer("CompCont4", {
		name: "samples.components.styledbutton",
		url: "samples/components/styledbutton",
		settings: {
			text: "Hello World 4"
		}
	});
	oCompCont4.placeAt("target4");
});
