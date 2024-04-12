var data = {
	tableData: [
		{column1: "column 1 value", column2: "column 2 with very long link that should truncate"},
		{column1: "column 1 value 2", column2: "column 2 with very long link that should truncate2"}
	]
};

// create a Model with this data
var model = new sap.ui.model.json.JSONModel();
	model.setData(data);
var table = new sap.m.Table({
	columns: [
		new sap.m.Column({header: new sap.m.Text({text: "sap.m.Text"})}),
		new sap.m.Column({header: new sap.m.Text({text: "sap.m.Link"})})
	]
}).setWidth("300px");

// bind the Table items to the data collection
table.bindItems({
	path : "/tableData",
	template : new sap.m.ColumnListItem({
		cells: [
			new sap.m.Text({text: "{column1}"}),
			new sap.m.Link({text: "{column2}"})
		]
	})
});
table.setModel(model);

var app = new sap.m.App("myApp", {initialPage:"page1"});

var page1 = new sap.m.Page("page1", {
	title:"Page 1",
	content : [
		new sap.m.Link({
			id: "link_focusable",
			text : "To Page 2"
		}).addStyleClass("sapUiSmallMargin"),

		new sap.m.Link({
			id: "link_disabled",
			text : "Disabled Link",
			enabled : false
		}).addStyleClass("sapUiSmallMargin"),

		new sap.m.Link({
			id: "link_subtle",
			text : "Subtle Link",
			subtle : true,
			press : function() {
				app.to("page2");
			}
		}).addStyleClass("sapUiSmallMargin"),

		new sap.m.Link({
			id: "link_emphasized",
			text : "Emphasized Link",
			emphasized : true,
			press : function() {
				app.to("page2");
			}
		}).addStyleClass("sapUiSmallMargin"),

		new sap.m.Link({
			id: "link_disabled_subtle",
			text : "Disabled & Subtle Link",
			subtle : true,
			enabled : false,
			press : function() {
				app.to("page2");
			}
		}).addStyleClass("sapUiSmallMargin"),

		new sap.m.Link({
			id: "link_disabled_emphasized",
			text : "Disabled & Emphasized Link",
			emphasized : true,
			enabled : false,
			press : function() {
				app.to("page2");
			}
		}).addStyleClass("sapUiSmallMargin"),

		new sap.m.Link({
			id: "link_empty_content",
			text : "",
			emptyIndicatorMode: "On"
		}).addStyleClass("sapUiSmallMargin"),

		table
	]

});

var page2 = new sap.m.Page("page2", {
	title:"Page 2",
	showNavButton: true,
	navButtonText: "Page 1",
	navButtonPress: function(){ app.back(); },
	content : [ new sap.m.Button({
		text : "Nothing to see, back to Page 1",
		press : function() {
			app.back();
		}
	})]
});
app.addPage(page1).addPage(page2);

app.placeAt("body");