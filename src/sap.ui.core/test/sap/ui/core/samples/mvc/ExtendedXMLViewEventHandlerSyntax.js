sap.ui.define(["sap/ui/core/Core", "sap/ui/core/mvc/XMLView"], function(Core, XMLView) {
	"use strict";
	Core.ready().then(async function() {
		var oView = await XMLView.create({viewName:"mvctest.views.ExtendedXMLViewEventHandlerSyntax"});
		oView.placeAt("content");
	});
});