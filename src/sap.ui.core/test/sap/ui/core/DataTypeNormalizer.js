sap.ui.define([], function() {
	"use strict";
	sap.ui.core.URI.setNormalizer(function(sUri) {

		if (sUri === "sap-icon://sys-cancel") {
			sUri = "sap-icon://sys-enter";
		}

		return sUri;
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oIcon", {
		configurable: "false",
		writable: "true",

		value: new sap.ui.core.Icon({
			src: "sap-icon://sys-cancel",
			size: "10rem"
		})
	});

	oIcon.placeAt("normalized");
});