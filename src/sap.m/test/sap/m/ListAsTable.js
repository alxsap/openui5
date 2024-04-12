// create a mobile App
var app = new sap.m.App("myApp");

var oJSON = { Accounts: [{ Id: "400000", Text: "Material Consumption"},
						 { Id: "400100", Text: "Travel Expense"},
						 { Id: "400200", Text: "Marketing Expense"} ]
			};

var oJSONModel = new sap.ui.model.json.JSONModel();
oJSONModel.setData(oJSON);


var oInput = new sap.m.Input({
	value: "{Id}",
});

var oList = new sap.m.List({
	growing: true,
	mode: "SingleSelect",
	headerText: "The List",
})

var oListItem1 = new sap.m.StandardListItem({
		title: "Title1",
		selected: true,
	}),
	oListItem2 = new sap.m.StandardListItem({
		title: "Title2",
		selected: true
	})

oList.addItem(oListItem1).addItem(oListItem2);


var page = new sap.m.Page({
	title: "The Page",
	content : oList
});

app.addPage(page).placeAt("content");