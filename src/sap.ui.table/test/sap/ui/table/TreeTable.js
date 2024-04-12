(new sap.m.Button({
	text: "Just a Button before"
})).placeAt("content");

var oTable = new sap.ui.table.TreeTable({
	expandFirstLevel: true,
	title: "Title of the TreeTable",
	footer: "Footer of the Table",
	groupHeaderProperty: "name",
	selectionMode: sap.ui.table.SelectionMode.MultiToggle,
	columns: [
		new sap.ui.table.Column(
				{label: "Name", template: new sap.m.Text({text: "{name}", wrapping: false}), filterProperty: "name", sortProperty: "name"}),
		new sap.ui.table.Column({label: "Description", template: "description", sortProperty: "description"}),
		new sap.ui.table.Column({label: "Available", template: new sap.m.CheckBox({selected: "{checked}"})}),
		new sap.ui.table.Column({label: "ProgressIndicator", template: new sap.m.ProgressIndicator({
			displayValue: "50",
			percentValue: "10",
			showaValue: true,
			width: "100%"
		})})
	]
});

oTable.attachToggleOpenState(function(oEvent) {
	jQuery.sap.log.info("ToggleOpenState: rowIndex: " + oEvent.getParameter("rowIndex") +
						" - rowContext: " + oEvent.getParameter("rowContext") +
						" - expanded? " + oEvent.getParameter("expanded"));
});

oTable.attachRowSelectionChange(function(oEvent) {
	jQuery.sap.log.info("RowSelectionChange: rowIndex: " + oEvent.getParameter("rowIndex") +
						" - rowContext: " + oEvent.getParameter("rowContext"));
});

// set Model and bind Table
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(TABLESETTINGS.treeTestData);
oTable.setModel(oModel);
oTable.bindRows("/root");
oTable.placeAt("content");
(new sap.m.Button({text: "Just a Button after"})).placeAt("content");

TABLESETTINGS.init(oTable, function(oButton) {
	oTable.getToolbar().addContent(oButton);
}, {
	FLATMODE: {
		text: "Flat Mode (protected)",
		value: function(oTable) {
			return sap.ui.table.utils.TableUtils.Grouping.isInFlatMode(oTable);
		},
		input: "boolean",
		action: function(oTable, bValue) {
			oTable.setUseFlatMode(!!bValue);
		}
	}
});