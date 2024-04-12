sap.ui.require(["sap/ui/core/Core", "sap/ui/core/mvc/XMLView"], function(Core) {
	Core.ready().then(function() {
		var oView = sap.ui.xmlview({viewName:"mvctest.views.ExtendedXMLViewEventHandlerSyntax"});
		oView.placeAt("content");
	});
});