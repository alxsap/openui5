sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function() {
	sap.ui.xmlview({
		viewName: "sap.ui.table.mvc.DragAndDrop"
	}).placeAt("content");
}));