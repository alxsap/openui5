sap.ui.define([
  "sap/ui/core/mvc/XMLView",
  "sap/ui/table/Table",
  "sap/ui/performance/Measurement"
], async function(XMLView, Table, Measurement) {
  "use strict";
  // Note: the HTML page 'Performance.html' loads this module via data-sap-ui-on-init

  Measurement.setActive(true);

  (await XMLView.create({
	  viewName: "sap.ui.table.mvc.Performance"
  })).placeAt("content");
});