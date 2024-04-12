sap.ui.define(["sap/ui/core/ComponentContainer", "sap/ui/core/Component"], function(ComponentContainer) {
	"use strict";
	sap.ui.localResources("samples");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oComponent", {
		configurable: "false",
		writable: "true",

		value: sap.ui.component({
			manifestUrl: "samples/components/commands/manifest.json"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oContainer", {
		configurable: "false",
		writable: "true",

		value: new ComponentContainer({
			component: oComponent
		})
	});

	oContainer.placeAt("content");
});