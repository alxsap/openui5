sap.ui.define(
	["sap/ui/core/mvc/XMLView", "sap/ui/table/Table", "sap/ui/performance/Measurement"],
	async function(XMLView, Table, Measurement) {
		"use strict";
		Measurement.setActive(true);

		(await XMLView.create({
			viewName: "sap.ui.table.mvc.Performance"
		})).placeAt("content");
	}
);