sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function () {
	sap.ui.require([
		"sap/ui/core/ComponentContainer"
	], function (ComponentContainer) {
		new ComponentContainer({
			name: "sap.ui.layout.cssgrid.gridplayground",
			settings: {
				id: "gridplayground"
			}
		}).placeAt("content");
	});
}));