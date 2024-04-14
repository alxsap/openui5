sap.ui.define([
], function() {
	"use strict";
	sap.ui.core.URI.setNormalizer(function(sUri) {
	
		if (sUri === "sap-icon://sys-cancel") {
			sUri = "sap-icon://sys-enter";
		}
	
		return sUri;
	});
	
	var oIcon = new sap.ui.core.Icon({
		src: "sap-icon://sys-cancel",
		size: "10rem"
	});
	
	oIcon.placeAt("normalized");
});
