	var oApp = new sap.m.App({  initialPage: "page" });

	var aData = [
		{ lastName: "Dente", name: "Al", type: "Locked", addInfo: "someVeryLongTextToSeeIfItWillWrap" },
		{ lastName: "Friese", name: "Andy", type: "Draft", addInfo: "someVeryLongTextToSeeIfItWillWrap" },
		{ lastName: "Mann", name: "Anita", type: "Unsaved", addInfo: "someVeryLongTextToSeeIfItWillWrap" },
		{ lastName: "Schutt", name: "Doris", type: "Favorite", addInfo: "someVeryLongTextToSeeIfItWillWrap" },
		{ lastName: "Open", name: "Doris", type: "Flagged", addInfo: "someVeryLongTextToSeeIfItWillWrap" }
	];

	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({ modelData: aData });

	var oTable = new sap.m.Table({
		columns : [
			new sap.m.Column({
				header : new sap.m.Label({
					text : "LastName"
				})
			}),
			new sap.m.Column({
				header : new sap.m.Label({
					text : "FirstName"
				})
			}),
			new sap.m.Column({
				header : new sap.m.Label({
					text : "Object Marker"
				})
			}),
			new sap.m.Column({
				header : new sap.m.Label({
					text : "Object Marker (active)"
				})
			}),
			new sap.m.Column({
				header : new sap.m.Label({
					text : "Object Marker with long text"
				})
			}),
			new sap.m.Column({
				header : new sap.m.Label({
					text : "Object Marker (active) with long text"
				})
			})
		]
	});

	oTable.setModel(oModel);
	oTable.bindItems("/modelData", new sap.m.ColumnListItem({
		vAlign: "Middle",
		cells : [
			new sap.m.Text({
				text : "{lastName}",
				wrapping : false
			}),
			new sap.m.Text({
				text : "{name}",
				wrapping : false
			}),
			new sap.m.ObjectMarker({
				type: "{type}"
			}),
			new sap.m.ObjectMarker({
				type: "{type}",
				press: function(oEvent) {
					sap.m.MessageToast.show(oEvent.getParameter("type") + " marker pressed!");
				}
			}),
			new sap.m.ObjectMarker({
				type: "{type}",
				additionalInfo: "{addInfo}",
			}),
			new sap.m.ObjectMarker({
				type: "{type}",
				additionalInfo: "{addInfo}",
				press: function(oEvent) {
					sap.m.MessageToast.show(oEvent.getParameter("type") + " marker pressed!");
				}
			})
		]
	}));

	var oTablePanel = new sap.m.Panel({
		headerText: "In a table usecase",
		content: oTable
	});

	var oStandalonePanel = new sap.m.Panel("standalone-panel", {
		headerText: "Standalone usecase",
		content: [
			new sap.m.ObjectMarker({
			}).setType(sap.m.ObjectMarkerType.Locked),
			new sap.m.ObjectMarker({
				type: "Flagged"
			}),
			new sap.m.ObjectMarker({
				type: sap.m.ObjectMarkerType.Favorite
			}),
			new sap.m.ObjectMarker({
				type: "Locked"
			}),
			new sap.m.ObjectMarker({
				type: "Draft",
				press: function(oEvent) {
					sap.m.MessageToast.show(oEvent.getParameter("type") + " marker pressed!");
				}
			}),
			new sap.m.ObjectMarker({
				type: sap.m.ObjectMarkerType.Unsaved
			})
		]
	});

	var oUITable = new sap.ui.table.Table({
	columns : [
		new sap.ui.table.Column({
			name : "ID2",
			label : new sap.m.Label({
				text : "Object Marker with press event"
			}),
			template : new sap.m.ObjectMarker({
				type : "{type}",
				press: function(oEvent) {
					sap.m.MessageToast.show(oEvent.getParameter("type") + " marker pressed!");
				}
			})
		}),
		new sap.ui.table.Column({
			name : "ID3",
			label : new sap.m.Label({
				text : "Object Marker"
			}),
			hAlign:"End",
			template : new sap.m.ObjectMarker({
				type : "{type}"
			})
		}),
		new sap.ui.table.Column({
			name : "ID4",
			label : new sap.m.Label({
				text : "Object Marker"
			}),
			template : new sap.m.ObjectMarker({
				type : "{type}"
			})
		})
	]
});

var aTData = [
	{type : "Flagged"},
	{type : "Draft"},
	{type : "Unsaved"},
	{type : "Favorite"}
];

oUITable.setModel(new sap.ui.model.json.JSONModel(aTData));

oUITable.bindAggregation("rows", {
	path : "/"
});

var oUITablePanel = new sap.m.Panel({
		headerText: "In a sap.ui.table.Table usecase",
		content: oUITable
	});

	var oPage = new sap.m.Page("page", {
		title:"Object Marker",
		content: [
			oStandalonePanel,
			oTablePanel,
			oUITablePanel
		]
	});

	oApp.addPage(oPage).placeAt("body");