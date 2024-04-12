var oData = {
	items: [
		{key: "key1", value: "test1"},
		{key: "key2", value: "test2"},
		{key: "key3", value: "test3"},
		{key: "key4", value: "test4"},
		{key: "key5", value: "test5"},
		{key: "key6", value: "test6"},
		{key: "key7", value: "test7"},
		{key: "key8", value: "test8"},
		{key: "key9", value: "item1"}
	]
};

var oModelList = new sap.ui.model.json.JSONModel();
var oModelTabular = new sap.ui.model.json.JSONModel();

// ---------- Input List Suggestions ----------

var oInputWithSuggestions = new sap.m.Input({
	width: "10rem",
	showValueHelp: true,
	showSuggestion: true,
	suggestionItems: {
		path: "/items",
		template: new sap.ui.core.Item({key: "{key}", text: "{value}"})
	},
	suggest: function (oEvent) {
		var aItems = oData.items.filter(oItem => oItem.value.includes(oEvent.getParameter("suggestValue"))).slice(0, 5);

		// simulate network request
		setTimeout(function () {
			oModelList.setData({
				items: aItems
			});
		}, 0);
	}
});

// ---------- Input Tabular Suggestions ----------
var oInputWithTabularSuggestions = new sap.m.Input({
	width: "10rem",
	showSuggestion: true,
	suggestionRows: {
		path: "/items",
		template: new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({text:"{value}"})
			]
		})
	},
	suggestionColumns: [
		new sap.m.Column({
			header: new sap.m.Label({text: "Text"})
		})
	],
	suggest: function (oEvent) {
		var aItems = oData.items.filter(oItem => oItem.value.includes(oEvent.getParameter("suggestValue"))).slice(0, 5);

		// simulate network request
		setTimeout(function () {
			oModelTabular.setData({
				items: aItems
			});
		}, 0);
	}
});


// --------- Layout ---------

var oVBoxList = new sap.m.VBox({
	items: [
		new sap.m.Text({text: "Input with suggestions:"}),
		oInputWithSuggestions,
		new sap.m.Button({
			text: "Get selectedItem",
			press: function () {
				console.error(oInputWithSuggestions.getSelectedItem())
			}
		})
	]
});
oVBoxList.setModel(oModelList);
oVBoxList.addStyleClass("sapUiMediumMargin");

var oVBoxTabular = new sap.m.VBox({
	items: [
		new sap.m.Text({ text: "Input with tabular suggestions:" }),
		oInputWithTabularSuggestions,
		new sap.m.Button({
			text: "Get selectedRow",
			press: function () {
				console.error(oInputWithTabularSuggestions.getSelectedRow())
			}
		})
	]
});
oVBoxTabular.setModel(oModelTabular);
oVBoxTabular.addStyleClass("sapUiMediumMargin");

var oLayout = new sap.m.HBox({
	items: [
		oVBoxList, oVBoxTabular
	]
})
oLayout.addStyleClass("sapUiMediumMargin");
oLayout.placeAt('content');