var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: TABLESETTINGS.listTestData});

function createColumns(oTable) {

	// 1st column with multilabels
	oTable.addColumn(new sap.ui.table.Column({
		multiLabels: [
			new sap.m.Text({text: "Row:1, Column header with a long description", wrapping: true, textAlign: "Center", width: "100%"}),
			new sap.m.Label({text: "Row:2, Column:1", wrapping: true, required: true})
		],
		headerSpan: "3, 1",
		template: new sap.m.Text({text: "{lastName}"}),
		sortProperty: "lastName",
		filterProperty: "lastName",
		width: "100px",
		flexible: false,
		autoResizable: true,
		resizable: true
	}));

	// 2nd column with multilabels
	oTable.addColumn(new sap.ui.table.Column({
		multiLabels: [
			new sap.m.Text({text: "Row:1, Column:2 invisible", wrapping: false}),
			new sap.m.Text({text: "Row:2, Column:2", wrapping: false, textAlign: "Center", width: "100%"}),
			new sap.m.Text({text: "Row:3, Column:2", wrapping: false})
		],
		headerSpan: [0, 2],
		template: new sap.m.Label({text: "{name}"}),
		sortProperty: "name",
		filterProperty: "name",
		width: "100px",
		flexible: false,
		autoResizable: true,
		resizable: true
	}));

	// 3rd column with multilabels
	oTable.addColumn(new sap.ui.table.Column({
		multiLabels: [
			new sap.m.Text({text: "Row:1, Column:3 - long text", wrapping: false}),
			new sap.m.Text({text: "Row:2, Column:3", wrapping: false}),
			new sap.m.Text({text: "Row:3, Column:3", wrapping: false})
		],
		template: new sap.m.ObjectStatus({text: "{objStatusText}", state: "{objStatusState}"}),
		sortProperty: "objStatusState",
		filterProperty: "objStatusState",
		width: "100px",
		flexible: true,
		autoResizable: true,
		resizable: true
	}));

	// Other columns
	oTable.addColumn(new sap.ui.table.Column({
		multiLabels: [
			new sap.m.Label({text: "Person"}),
			new sap.m.Label({text: "Icon"})
		],
		headerSpan: "2",
		template: new sap.ui.core.Icon({src: "sap-icon://account", decorative: false}),
		hAlign: sap.ui.core.HorizontalAlign.Center,
		width: "100px",
		flexible: true,
		autoResizable: true,
		resizable: true
	}));

	oTable.addColumn(new sap.ui.table.Column({
		multiLabels: [
			new sap.m.Label({text: "Person"}),
			new sap.m.Label({text: "Gender"})
		],
		template: new sap.m.Label({text: "{gender}"}),
		width: "100px",
		flexible: false,
		autoResizable: true,
		resizable: true
	}));

	oTable.addColumn(new sap.ui.table.Column({
		label: new sap.m.Label({text: "Checked"}),
		template: new sap.m.CheckBox({selected: "{checked}", text: "{checked}"}),
		width: "100px",
		flexible: false,
		autoResizable: true,
		resizable: true
	}));
}

var oTable1 = new sap.ui.table.Table({
	rowMode: new sap.ui.table.rowmodes.Fixed({
		fixedTopRowCount: 1,
		fixedBottomRowCount: 1
	})
});
oTable1.setTitle("Table 1");
oTable1.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
oTable1.setFixedColumnCount(0);
oTable1.setEnableColumnFreeze(true);
createColumns(oTable1);
oTable1.setModel(oModel);
oTable1.bindRows("/modelData");

var oTable2 = new sap.ui.table.Table();
oTable2.setTitle("Table 2");
oTable2.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);
oTable2.setFixedColumnCount(0);
oTable2.setEnableColumnFreeze(true);
createColumns(oTable2);
oTable2.setModel(oModel);
oTable2.bindRows("/modelData");

var app = new sap.m.App("tableApp", {initialPage: "page1"});

var page1 = new sap.m.Page("page1", {
	enableScrolling: false,
	title: "Page 1",
	headerContent: [
		new sap.m.Button({
			text: "Go to Table 2",
			press: function() { app.to("page2", "slide"); }
		})
	],
	content: [oTable1]
});

var page2 = new sap.m.Page("page2", {
	title: "Page 2",
	enableScrolling: true,
	headerContent: [
		new sap.m.Button({
			text: "Go to Table 1",
			press: function() { app.to("page1", "slide"); }
		})
	],
	content: [new sap.ui.layout.Splitter({contentAreas: [oTable2]})]
});

app.addPage(page1).addPage(page2).placeAt("body");