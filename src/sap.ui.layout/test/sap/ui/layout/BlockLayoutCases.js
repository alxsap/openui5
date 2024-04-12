sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function() {
	sap.ui.require([
		"sap/ui/core/mvc/XMLView",
	], function(XMLView) {
		XMLView.create({
			definition: document.getElementById('myXml').textContent,
		}).then(function(oXMLView) {
			oXMLView.placeAt("content");
		});
	})
}));