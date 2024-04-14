sap.ui.define([
	"sap/ui/core/Element",
	"sap/ui/unified/SplitContainer",
	"sap/ui/commons/Button",
	"sap/ui/commons/TextField"
], function(Element, SplitContainer, Button, TextField) {
	"use strict";
	try{
		sap.ui.getCore().loadLibrary("sap.ui.commons");
	}catch(e){
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw(e);
	}
	
	
	var oContainer = new SplitContainer({
		content: [new Button({
			text: "Content",
			width: "100%",
			height: "100%",
			lite: true
		})],
		secondaryContent: [new Button({
			text: "Content",
			width: "100%",
			height: "100%",
			lite: true
		})]
	});
	oContainer.placeAt("content");
	
	var oButton = new Button({
		text: "Toggle Side Pane",
		press: function(){
			oContainer.setSecondaryContentSize(Element.getElementById("tfSidePaneWidth").getValue());
			oContainer.setShowSecondaryContent(!oContainer.getShowSecondaryContent());
		}
	});
	oButton.placeAt("content");
	var oButton2 = new Button({
		text: "Switch Orientation",
		press: function(){
			oContainer.setOrientation(
				oContainer.getOrientation() == sap.ui.unified.Orientation.Vertical
				? sap.ui.unified.Orientation.Horizontal
				: sap.ui.unified.Orientation.Vertical
			);
		}
	});
	oButton2.placeAt("content");
	var oTF = new TextField("tfSidePaneWidth", {
		value: "250px",
	});
	oTF.placeAt("content");
});
