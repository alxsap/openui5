var oData = {
	names: [
		{firstName: "Peter", lastName: "Mueller"},
		{firstName: "Petra", lastName: "Maier"},
		{firstName: "Thomas", lastName: "Smith"},
		{firstName: "John", lastName: "Williams"},
		{firstName: "Maria", lastName: "Jones"}
	],
	selectedNames: []
};

// create a Model with this data
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(oData);

// create the UI
const XMLView = sap.ui.requireSync("sap/ui/core/mvc/XMLView");
XMLView.create({
	viewName:"mvc.betweenLists"
}).then((oView) => {
	oView.setModel(oModel).placeAt("content");
});