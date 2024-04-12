try{
	sap.ui.getCore().loadLibrary("sap.ui.commons");
}catch(e){
	alert("This test page requires the library 'sap.ui.commons' which is not available.");
	throw(e);
}


var oContainer = new sap.ui.unified.SplitContainer({
	content: [new sap.ui.commons.Button({
		text: "Content",
		width: "100%",
		height: "100%",
		lite: true
	})],
	secondaryContent: [new sap.ui.commons.Button({
		text: "Content",
		width: "100%",
		height: "100%",
		lite: true
	})]
});
oContainer.placeAt("content");

var oButton = new sap.ui.commons.Button({
	text: "Toggle Side Pane",
	press: function(){
		oContainer.setSecondaryContentSize(sap.ui.getCore().byId("tfSidePaneWidth")/*Not inside AMD call*/.getValue());
		oContainer.setShowSecondaryContent(!oContainer.getShowSecondaryContent());
	}
});
oButton.placeAt("content");
var oButton2 = new sap.ui.commons.Button({
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
var oTF = new sap.ui.commons.TextField("tfSidePaneWidth", {
	value: "250px",
});
oTF.placeAt("content");