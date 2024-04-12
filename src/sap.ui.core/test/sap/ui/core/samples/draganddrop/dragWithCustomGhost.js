sap.ui.loader.config({paths: {"my": "./"}});

sap.ui.require(["my/DraggableText", "sap/ui/core/dnd/DragDropInfo"], function(DraggableText, DragDropInfo) {
	"use strict";

	var oControl = new DraggableText({
		text: "Drag Me! My ghost will surprise you.",
		dragDropConfig: new DragDropInfo() // just make it draggable, no specific target
	});

	oControl.placeAt("content");
});