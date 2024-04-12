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

// Create a vertical flexbox with items
var oVBox1 = new sap.m.VBox("vbox1", {
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

// Create a vertical flexbox with items
var oVBox2 = new sap.m.VBox("vbox2", {
	items:[
		oItem4,
		oItem5,
		oItem6
	]
});
oVBox2.setDirection('ColumnReverse');


var page1 = new sap.m.Page("page1", {
	title:"Mobile VBox Control",
	content:[
		new sap.ui.core.HTML({content:"<h2>Vertical layout</h2>"}),
		oVBox1,
		new sap.ui.core.HTML({content:"<h2>Reverse vertical layout</h2>"}),
		oVBox2
	]
});

app.addPage(page1).placeAt("body");