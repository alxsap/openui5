// create table with supported sap.m controls
var oTable = new sap.ui.table.Table({
	firstVisibleRow: 770000
});
oTable.setTitle("Title of the Table");
oTable.setFooter("Footer of the Table");
oTable.setSelectionMode(sap.ui.table.SelectionMode.MultiToggle);

var iScrollAutomationIntervalId = null;
var iReverseScrollAutomationIntervalId = null;
var iScrollDelta = 1;
var iScrollInterval = 50;

function configureRowHeights(iHeight) {
	var aData = oRowModel.getProperty("/custom");
	var bAlternatingRowHeights = oConfigModel.getProperty("/alternatingRowHeights");

	if (iHeight == null) {
		var sHeight = oConfigModel.getProperty("/rowHeight");
		iHeight = sHeight === "auto" ? 0 : parseInt(sHeight);
	}

	aData.forEach(function(oData) {
		oData.height = (bAlternatingRowHeights ? iHeight : iHeight * Math.random()) + "px";
	});

	oConfigModel.setProperty("/rowHeight", iHeight === 0 ? "auto" : iHeight + "px");
	oRowModel.setProperty("/custom/", aData);
	oTable.getBinding().refresh(true);
}

// Variable row heights test control
var VariableRowHeightControl = sap.ui.core.Control.extend("sap.ui.table.test.VariableRowHeightControl", {
	metadata: {
		properties: {
			height: {type: "string", defaultValue: "auto"},
			text: {type: "string", defaultValue: ""}
		}
	},
	renderer: {
		apiVersion: 2,
		render: function(oRm, oControl) {
			var sText = oControl.getText();

			oRm.openStart("div", oControl);
			oRm.style("height", oControl.getHeight());
			oRm.style("position", "relative");
			oRm.style("display", "flex");
			oRm.style("align-items", "center");
			oRm.openEnd();

			oRm.openStart("span");
			oRm.style("position", "absolute");
			oRm.style("top", "0");
			oRm.openEnd();
			oRm.text(sText);
			oRm.close("span");

			oRm.openStart("span");
			oRm.style("z-index", "1");
			oRm.style("background-color", "white");
			oRm.openEnd();
			oRm.text(sText);
			oRm.close("span");

			oRm.openStart("span");
			oRm.style("position", "absolute");
			oRm.style("bottom", "0");
			oRm.openEnd();
			oRm.text(sText);
			oRm.close("span");

			oRm.close("div");
		}
	}
});

// Create the columns.

// VariableRowHeightControl
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "VariableRowHeightControl"}),
	template: new VariableRowHeightControl({
		height: "{height}",
		text: {
			path: "config>/firstRowIndex",
			formatter: function(iFirstRowIndex) {
				var oRow = this.getParent();

				if (oRow == null) {
					return "";
				}

				var oTable = oRow.getParent();
				var iRowAggregationIndex = oTable.indexOfRow(oRow);
				var iRowIndex = iFirstRowIndex + iRowAggregationIndex;
				return "Row #" + (iRowIndex + 1);
			}
		}
	}),
	width: "150px"
}));

// sap.m.Text
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.Text"}),
	template: new sap.m.Text({text: "Einstein"}),
	width: "120px"
}));

// sap.m.Label
oTable.addColumn(oColumn = new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.Label"}),
	template: new sap.m.Label({text: "Albert"}),
	width: "6em"
}));

// sap.m.ObjectStatus
oTable.addColumn(oColumn = new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.ObjectStatus"}),
	template: new sap.m.ObjectStatus({text: "Success", state: "Success"}),
	width: "200px"
}));

// sap.ui.core.Icon
oTable.addColumn(oColumn = new sap.ui.table.Column({
	resizable: false,
	label: new sap.m.Label({text: "core.Icon"}),
	template: new sap.ui.core.Icon({src: "sap-icon://account", decorative: false}),
	width: "80px",
	hAlign: sap.ui.core.HorizontalAlign.Center
}));

// sap.m.Button
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.Button"}),
	template: new sap.m.Button({text: "Button"}),
	width: "100px"
}));

// sap.m.Input
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.Input"}),
	template: new sap.m.Input({value: "Theory of relativity"}),
	width: "200px"
}));

// sap.m.DatePicker
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.DatePicker"}),
	template: new sap.m.DatePicker({dateValue: new Date("1879-03-14")}),
	width: "200px"
}));

// sap.m.Select
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.Select"}),
	template: new sap.m.Select({
		items: [
			new sap.ui.core.Item({key: "v1", text: "Value 1"}),
			new sap.ui.core.Item({key: "v2", text: "Value 2"}),
			new sap.ui.core.Item({key: "v3", text: "Value 3"}),
			new sap.ui.core.Item({key: "v4", text: "Value 4"})
		]
	}),
	width: "150px"
}));

// sap.m.Select
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.ComboBox"}),
	template: new sap.m.ComboBox({
		items: [
			new sap.ui.core.Item({key: "v1", text: "Value 1"}),
			new sap.ui.core.Item({key: "v2", text: "Value 2"}),
			new sap.ui.core.Item({key: "v3", text: "Value 3"}),
			new sap.ui.core.Item({key: "v4", text: "Value 4"})
		]
	}),
	width: "150px"
}));

// sap.m.Select
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.MultiComboBox"}),
	template: new sap.m.MultiComboBox({
		items: [
			new sap.ui.core.Item({key: "v1", text: "Value 1"}),
			new sap.ui.core.Item({key: "v2", text: "Value 2"}),
			new sap.ui.core.Item({key: "v3", text: "Value 3"}),
			new sap.ui.core.Item({key: "v4", text: "Value 4"})
		]
	}),
	width: "250px"
}));

// sap.m.Checkbox
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.Checkbox"}),
	template: new sap.m.CheckBox({selected: true, text: "Genius"}),
	width: "50px"
}));

// sap.m.Link
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "m.Link"}),
	template: new sap.m.Link({href: "http://www.sap.com", text: "www.sap.com"}),
	width: "150px"
}));

// sap.ui.unified.Currency
oTable.addColumn(new sap.ui.table.Column({
	label: new sap.m.Label({text: "unified.Currency"}),
	template: new sap.ui.unified.Currency({value: 123.45, currency: "EUR"}),
	width: "200px"
}));

// set Model and bind Table
var oRowModel = new sap.ui.model.json.JSONModel({
	default: {
		height: undefined
	},
	custom: [
		{height: "auto"},
		{height: "auto"},
		{height: "auto"},
		{height: "auto"},
		{height: "auto"},
		{height: "auto"},
		{height: "auto"},
		{height: "auto"},
		{height: "auto"},
		{height: "auto"}
	]
});
var oConfigModel = new sap.ui.model.json.JSONModel({
	rowWiseScrolling: false,
	alternatingRowHeights: false,
	rowCount: 1000000000,
	firstRowIndex: 0,
	rowHeight: "auto"
});
oTable.setModel(oRowModel);
oTable.setModel(oConfigModel, "config");
oTable.bindRows("/");
oTable.getBinding().getLength = function() {
	return oConfigModel.getProperty("/rowCount");
};
oTable.getBinding().getContexts = function(iStartIndex, iLength) {
	var aContexts = [];
	var iBindingLength = this.getLength();
	var iCount = iStartIndex + iLength > iBindingLength ? iBindingLength - iStartIndex : iLength;
	var bAlternatingRowHeights = oConfigModel.getProperty("/alternatingRowHeights");

	for (var i = 0; i < iCount; i++) {
		var iIndex = iStartIndex + i;
		var sPath = "/default";

		if (bAlternatingRowHeights) {
			if (iIndex % 2 > 0) {
				sPath = "/custom/0";
			}
		} else {
			if (iIndex % 10 > 0) {
				sPath = "/custom/" + (iIndex % 10);
			}
		}

		aContexts.push(new sap.ui.model.Context(oRowModel, sPath));
	}

	var iOldFirstRowIndex = oConfigModel.getProperty("/firstRowIndex");
	var iNewFirstRowIndex = iStartIndex;

	if (iOldFirstRowIndex !== iNewFirstRowIndex) {
		oConfigModel.setProperty("/firstRowIndex", iNewFirstRowIndex, null, true);
	}

	return aContexts;
};
oTable._bVariableRowHeightEnabled = true;
oTable.setRowMode("Auto");
oTable.placeAt("table");

TABLESETTINGS.init(oTable, function(oButton) {
	oTable.getToolbar().addContent(oButton);
});