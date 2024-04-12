var app = new sap.m.App("myApp", {initialPage:"page1"});

// Create items
var oItem1 = new sap.m.Image({
	src: "images/mark1.png",
	alt: "test image",
	decorative: false,
	densityAware: false,
	layoutData: new sap.m.FlexItemData({growFactor: 1})
});

var oItem2 = new sap.m.Image({
	src: "images/mark2.png",
	alt: "test image",
	decorative: false,
	densityAware: false,
	layoutData: new sap.m.FlexItemData({growFactor: 2})
});

var oItem3 = new sap.m.Image({
	src: "images/mark3.png",
	alt: "test image",
	decorative: false,
	densityAware: false,
	layoutData: new sap.m.FlexItemData({growFactor: 3})
});

// Create a horizontal flexbox with items
var oHBox1 = new sap.m.HBox("hbox1", {
	items:[
		oItem1,
		oItem2,
		oItem3
	]
});


// Create items
var oItem4 = new sap.m.Image({
	src: "images/mark1.png",
	alt: "test image",
	decorative: false,
	densityAware: false,
	layoutData: new sap.m.FlexItemData({growFactor: 1})
});

var oItem5 =new sap.m.Image({
	src: "images/mark2.png",
	alt: "test image",
	decorative: false,
	densityAware: false,
	layoutData: new sap.m.FlexItemData({growFactor: 2})
});

var oItem6 = new sap.m.Image({
	src: "images/mark3.png",
	alt: "test image",
	decorative: false,
	densityAware: false,
	layoutData: new sap.m.FlexItemData({growFactor: 3})
});

// Create a horizontal flexbox with items
var oHBox2 = new sap.m.HBox("hbox2", {
	items:[
		oItem4,
		oItem5,
		oItem6
	]
});
oHBox2.setDirection('RowReverse');


var page1 = new sap.m.Page("page1", {
	title:"Mobile HBox Control",
	content:[
		new sap.ui.core.HTML({content:"<h2>Horizontal layout</h2>"}),
		oHBox1,
		new sap.ui.core.HTML({content:"<h2>Reverse horizontal layout</h2>"}),
		oHBox2
	]
});

app.addPage(page1).placeAt("body");