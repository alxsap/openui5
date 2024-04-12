sap.ui.define(
	["sap/ui/core/Core", "sap/ui/table/Table", "sap/ui/performance/Measurement", "sap/ui/core/mvc/XMLView"],
	function(Core, Table, Measurement) {
		"use strict";
		Measurement.setActive(true);

		Core.ready(function() {
			sap.ui.xmlview({
				viewName: "sap.ui.table.mvc.Performance"
			}).placeAt("content");
		});
	}
);