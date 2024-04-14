sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
	"use strict";
	new ComponentContainer({
		name : "sap.ui.core.internal.samples.composite.xmlcomposite.exTableWrapperOuterBinding",
		height : "100%",
		settings : {
			id : "composite"
		}
	}).placeAt("content")
});
