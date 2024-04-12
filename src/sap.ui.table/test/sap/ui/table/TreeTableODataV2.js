sap.ui.define([
	"sap/ui/core/Core",
	"sap/ui/table/TreeTable",
	"sap/ui/table/Table",
	"sap/ui/performance/Measurement",
	"sap/ui/core/mvc/XMLView"
], function(Core, TreeTable, Table, Measurement) {
	"use strict";
	Measurement.setActive(true);

	Core.ready(function() {
		Measurement.registerMethod("Table._createRows", Table.prototype, "_createRows", ["JS"]);
		Measurement.registerMethod("TreeTable._updateTableContent", TreeTable.prototype, "_updateTableContent", ["JS"]);
		Measurement.registerMethod("Table._syncColumnHeaders", Table.prototype, "_syncColumnHeaders", ["JS"]);
		Measurement.registerMethod("Table._updateRowHeader", Table.prototype, "_updateRowHeader", ["JS"]);

		sap.ui.xmlview({
			viewName: "sap.ui.table.mvc.TreeTableODataV2"
		}).placeAt("content");
	});
});