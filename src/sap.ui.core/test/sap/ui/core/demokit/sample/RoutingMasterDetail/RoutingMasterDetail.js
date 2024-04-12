sap.ui.require(["sap/ui/core/Core", "sap/ui/core/ComponentContainer"], function(Core, ComponentContainer) {
	"use strict";
	Core.ready().then(function() {
		new ComponentContainer({
			height : "100%",
			name : "sap.ui.core.sample.RoutingMasterDetail.routingApp",
			settings : {
				id : "routingApp"
			}
		}).placeAt("content");
	});
});