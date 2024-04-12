var app = new sap.m.App("myApp", {initialPage:"page1"});

// Create dialogs
var oFlexBox = new sap.m.FlexBox();
oFlexBox.addItem(new sap.m.Button({
	text: "My Button",
	layoutData: new sap.m.FlexItemData({
		alignSelf: "End",
		growFactor: 20
	})
}));

var page1 = new sap.m.Page("page1", {
	title:"Mobile FlexItemData Control",
	content:[
		oFlexBox
	]
});

app.addPage(page1).placeAt("content");