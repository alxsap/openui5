(new sap.m.Button({
	text: "Just a Button before"
})).placeAt("content");

var oTable = new sap.ui.table.AnalyticalTable({
	title: "Title of the Table",
	footer: "Footer of the Table",
	selectionMode: sap.ui.table.SelectionMode.MultiToggle
});
oTable.placeAt("content");
(new sap.m.Button({text: "Just a Button after"})).placeAt("content");

TABLESETTINGS.addServiceSettings(oTable, "AnalyticalTableServiceSettings", updateModel)

// create columns
var aColumns = ["CostCenter", "CostCenterText", "CostElement", "CostElementText", "ActualCosts", "Currency", "PlannedCosts", "ValueType", "CurrencyType"];

for (var i = 0; i < aColumns.length; i++) {
	oTable.addColumn(new sap.ui.table.AnalyticalColumn({
		label: aColumns[i],
		template: getTemplate(aColumns[i]),
		sortProperty: aColumns[i],
		filterProperty: aColumns[i],
		leadingProperty: aColumns[i],
		width: "200px",
		summed: aColumns[i] === "PlannedCosts"
	}));
}

function getTemplate(sField) {
	switch (sField) {
		case "PlannedCosts":
			return new sap.ui.unified.Currency({value: {path: sField, type: new sap.ui.model.type.String()}});
		case "Currency":
			//return new sap.m.Text({text: "{" + sField + "}", wrapping: false});
			//return new sap.m.Link({text: "{" + sField + "}"});
			return new sap.m.Label({text: "{" + sField + "}"});
		default:
			return new sap.m.Text({text: "{" + sField + "}", wrapping: false});
	}
}

// set Model and bind Table

var oStorage, oModel;
var bProvideGrandTotals = true;
var bSumOnTop = false;

function updateModel(mServiceSettings) {
	oModel = new sap.ui.model.odata.v2.ODataModel(mServiceSettings.defaultProxyUrl, true);
	oModel.setDefaultCountMode("Inline");
	oTable.setModel(oModel);
	oTable.bindRows({
		path: "/" + mServiceSettings.collection,
		parameters: {
			provideGrandTotals: bProvideGrandTotals,
			sumOnTop: bSumOnTop
		}
	});
}

TABLESETTINGS.init(oTable, function(oButton) {
	oTable.getExtension()[0].addContent(oButton);
}, {
	GROUPING: {
		hidden: true
	},
	ANALYTICSETTINGS: {
		text: "Analytical Settings",
		group: {
			GRANDTOTALS: {
				text: "Grand Totals",
				value: function() {
					return !!bProvideGrandTotals;
				},
				input: "boolean",
				action: function(oTable, bValue) {
					bProvideGrandTotals = bValue;
					updateModel();
				}
			},
			SUMONTOP: {
				text: "Sum On Top",
				value: function() {
					return !!bSumOnTop;
				},
				input: "boolean",
				action: function(oTable, bValue) {
					bSumOnTop = bValue;
					updateModel();
				}
			}
		}
	},
	AREAS: {
		group: {
			FIXEDROWS: {
				disabled: true
			},
			FIXEDBOTTOMROWS: {
				disabled: true
			},
			NODATA: {
				setData: function(oTable, bClear) {
					if (bClear) {
						oTable.unbindRows();
					} else {
						updateModel();
					}
				}
			}
		}
	},
	ROWSETTINGS: {
		group: {
			HIGHLIGHTS: {
				action: function(oTable, bValue) {
					if (bValue) {
						oTable.setRowSettingsTemplate(new sap.ui.table.RowSettings({
							highlight: sap.ui.core.MessageType.Success
						}));
					} else {
						oTable.setRowSettingsTemplate(new sap.ui.table.RowSettings({
							highlight: sap.ui.core.MessageType.None
						}));
					}
				}
			}
		}
	},
	CONTEXTMENU: {
		disabled: true
	}
});