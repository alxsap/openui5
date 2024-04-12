jQuery.sap.initMobile();

var fnPress = function(oEvent) {
	sap.m.MessageToast.show("The image content is pressed.");
};

var oImageContent = new sap.m.ImageContent({
	src: "images/headerImg1.png",
	description: "image description",
	press : fnPress
});
oImageContent.addStyleClass("sapUiSmallMargin");

var oFlexBox = new sap.m.FlexBox("flexbox", {
	items : [oImageContent],
	alignItems: "Start",
	justifyContent: "SpaceAround"
});
var oPictureLbl = new sap.m.Label({
	text : "Header Image",
	labelFor : "picture-change"
});

var oPictureSlct = new sap.m.Select("picture-value", {
	change : function(oE) {
		var selectedItem = oE.getParameter("selectedItem");
		oImageContent.setSrc(selectedItem.getKey());
	},
	items : [new sap.ui.core.Item("picture-item-1", {
		key : "",
		text : "No picture"
	}),  new sap.ui.core.Item("picture-item-2", {
		key : "images/headerImg1.png",
		text : "Image1"
	}), new sap.ui.core.Item("picture-item-3", {
		key : "images/headerImg2.jpg",
		text : "Image2"
	}), new sap.ui.core.Item("picture-item-5", {
		key : "sap-icon://travel-expense",
		text : "Icon1"
	}), new sap.ui.core.Item("picture-item-4", {
		key : "images/SAPLogo.jpg",
		text : "SAPLogo"
	})],
	selectedItem : "picture-item-2"
});

var oPressLbl = new sap.m.Label({
	text : "Press Action",
	labelFor : "press-action"
});

var oPressSwtch = new sap.m.Switch({
	id : "press-action",
	state : true,
	change : function(oE) {
		var bState = oE.getParameter("state");

		if (bState) {
			oImageContent.attachPress(fnPress);
		} else {
			oImageContent.detachPress(fnPress);
		}
	}
});

var editableSimpleForm = new sap.ui.layout.form.SimpleForm("controls", {
	maxContainerCols : 2,
	editable : true,
	content : [
		new sap.ui.core.Title ({
			text : "Modify Image Content"
		}),
		oPictureLbl,
		oPictureSlct,
		oPressLbl,
		oPressSwtch
	]
});

var oPage = new sap.m.Page({
	content : [oFlexBox, editableSimpleForm]
});

//Create a mobile app embedding the page and include the app into the HTML document.
var app = new sap.m.App("myApp", {
	pages : [oPage]
}).placeAt("content");