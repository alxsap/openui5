sap.ui.require(["sap/ui/core/Component", "sap/ui/core/ComponentContainer"], function(Component, ComponentContainer) {
	return Component.create({
		name: "sap.ui.mdc.filterbar.sample",
		url: "./",
		id: "Comp1"
	}).then(function(oComponent){
		var oCompCont = new ComponentContainer("CompCont1", {
			component: oComponent
		});
		oCompCont.placeAt("target1");
	})
})