sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function () {
	sap.ui.require([
		"sap/m/table/columnmenu/Menu",
		"sap/m/table/columnmenu/Item",
		"sap/m/table/columnmenu/QuickAction",
		"sap/m/table/columnmenu/QuickSort",
		"sap/m/table/columnmenu/QuickSortItem",
		"sap/m/table/columnmenu/QuickGroup",
		"sap/m/table/columnmenu/QuickGroupItem",
		"sap/m/table/columnmenu/QuickTotal",
		"sap/m/table/columnmenu/QuickTotalItem",
		"sap/m/table/columnmenu/ActionItem",
		"sap/m/Table",
	], function (
		ColumnMenu,
		Item,
		QuickAction,
		QuickSort,
		QuickSortItem,
		QuickGroup,
		QuickGroupItem,
		QuickTotal,
		QuickTotalItem,
		ActionItem,
		Table
	) {
		var oData = {"items": []};
		for (var i = 0; i < 25; i++) {
			oData["items"].push({
				name: "Name " + i,
				street: "Street " + i,
				city: "City " + i
			});
		}

		var oQuickSort = new QuickSort({
			items : [
				new QuickSortItem ({
					key: "propertyA",
					label: "A",
					sortOrder: "Ascending"
				})
			]
		});

		var oQuickFilter = new QuickAction({
			label: "Quick Filter",
			content: new sap.m.ComboBox()
		});

		var oQuickGroup = new QuickGroup({
			items: [
				new QuickGroupItem({
					key: "PropertyA",
					label: "Criterion A",
					grouped: true
				}),
				new QuickGroupItem({
					key: "PropertyB",
					label: "Criterion B",
					grouped: false
				}),
				new QuickGroupItem({
					key: "PropertyC",
					label: "Criterion C",
					grouped: false
				})
			]
		});

		var oQuickTotal = new QuickTotal({
			items: [
				new QuickTotalItem({
					key: "PropertyA",
					label: "Property A",
					totaled: false
				}),
				new QuickTotalItem({
					key: "PropertyB",
					label: "Property B",
					totaled: true
				})
			]
		});

		var oQuickCustomAction = new QuickAction({
			label: "Quick Custom",
			content: new sap.m.Button({ text: "Execute Custom Action" })
		});

		var oQuickCustomLayoutNormal = new QuickAction({
			label: "Quick Custom Layout Long",
			content: [
				new sap.m.Button({ text: "Button 1", layoutData: new sap.ui.layout.GridData({spanS: 4, spanM: 3}) }),
				new sap.m.Button({ text: "Button 2", layoutData: new sap.ui.layout.GridData({spanS: 4, spanM: 3}) }),
				new sap.m.Button({ text: "Button 3", layoutData: new sap.ui.layout.GridData({spanS: 4, spanM: 2}) })
			]
		});

		var oQuickCustomActionLong = new QuickAction({
			label: "Quick Custom Long",
			content: new sap.m.FlexBox({
				items: [
					new sap.m.Button({ text: "Execute Custom Action 1" }),
					new sap.m.Button({ text: "Execute Custom Action 2" }),
					new sap.m.Button({ text: "Execute Custom Action 3" })
				],
				wrap: sap.m.FlexWrap.Wrap
			}),
		});

		var oQuickMultiCustomActionLong = new QuickAction({
			label: "Quick Custom Long with HBox and just items",
			content: [
				new sap.m.Button({ text: "Standalone Button 1"}),
				new sap.m.FlexBox({
					items: [new sap.m.Button({ text: "Execute Custom Action 1" }), new sap.m.Button({ text: "Execute Custom Action 2" }), new sap.m.Button({ text: "Execute Custom Action 3" })],
					wrap: sap.m.FlexWrap.Wrap
				}),
			],
		});

		var oBtnReset = new sap.m.Button({
			text: "Switch Reset State"
		});
		var oReset = new Item({
			label: "Reset",
			icon: "sap-icon://sort",
			content: oBtnReset,
			visible: false
		});
		oBtnReset.attachPress(function (oEvent) {
			oReset.changeButtonSettings({
				reset: {enabled: !oReset.getButtonSettings()["reset"]["enabled"]}
			});
		});

		var oItemFilter = new Item({
			label: "Filter",
			icon: "sap-icon://filter",
			content: new sap.m.Button({
				text: "Sample Filter"
			})
		});

		var oItemGroup = new Item({
			label: "Group",
			icon: "sap-icon://group-2",
			content: new sap.m.Button({
				text: "Sample Group"
			})
		});

		var oTable = new Table({
			sticky: [sap.m.Sticky.ColumnHeaders, sap.m.Sticky.HeaderToolbar],
			headerToolbar: new sap.m.Toolbar({
				content: [
					new sap.m.Text({text: "Example Table"}),
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({text: "Example Button"})
				]
			}),
			columns: [
				new sap.m.Column({
					header: new sap.m.Text({text: "Column A"})
				}),
				new sap.m.Column({
					header: new sap.m.Text({text: "Column B"})
				}),
				new sap.m.Column({
					header: new sap.m.Text({text: "Column C"})
				}),
			],
		});

		var oTemplate = new sap.m.ColumnListItem({
			cells : [
				new sap.m.Text({text : "{name}"}),
				new sap.m.Text({text : "{street}"}),
				new sap.m.Text({text : "{city}"})
			]
		});
		oTable.setModel(new sap.ui.model.json.JSONModel(oData))
		oTable.bindItems({
			path: "/items",
			template : oTemplate,
			key: "name"
		});

		var oItemTable = new Item({
			label: "Table",
			icon: "sap-icon://table-column",
			content: oTable,
			resetButtonEnabled: false
		});

		var oActionItem = new ActionItem({
			label: "Action Item",
			icon: "sap-icon://table-column"
		});

		var aItems = [];

		for (var i = 0; i < 5; i++) {
			aItems.push(new Item({
				label: "Custom Action " + i,
				icon: "sap-icon://action-settings",
				content: new sap.m.Button({ text: "Sample Action" }),
				showResetButton: i % 2 == 0,
				showConfirmButton: i % 3 == 0,
				showCancelButton: i % 5 == 0
			}))
		}

		// Test Menu
		var oMenu = new ColumnMenu({
			_quickActions: [oQuickSort, oQuickFilter, oQuickGroup, oQuickTotal],
			quickActions: [oQuickCustomAction, oQuickCustomLayoutNormal, oQuickCustomActionLong, oQuickMultiCustomActionLong],
			_items: [oReset, oItemFilter, oItemGroup, oItemTable, oActionItem],
			items: aItems
		});

		var oButton = new sap.m.Button({
			text: "Open ColumnMenu",
			width: "200px",
			press: function () {
				oMenu.openBy(this);
			}
		});
		oButton.addDependent(oMenu);
		oButton.placeAt("body");

		var oButton2 = new sap.m.Button({
			text: "Toggle Reset Visibility",
			width: "200px",
			press: function () {
				oReset.setVisible(!oReset.getVisible());
			}
		});
		oButton2.placeAt("body");

		// Visual Design Example
		var oSort = new Item({
			label: "Sort",
			icon: "sap-icon://sort",
			content: oBtnReset
		});
		var oColumn = new Item({
			label: "Column",
			icon: "sap-icon://table-column",
			content: new sap.m.Button({text: "Column Button"}),
			resetButtonEnabled: false
		});
		var oVDMenu = new ColumnMenu({
			_quickActions: [oQuickSort.clone(), oQuickFilter.clone(), oQuickGroup.clone(), oQuickTotal.clone()],
			quickActions: [new QuickAction({
				label: "App-specific quick action",
				content: [
					new sap.m.Button({
						text: "Action A",
						press: function() {
							oVDMenu.close();
						}
					}),
					new sap.m.Button({
						text: "Action B",
						press: function() {
							oVDMenu.close();
						}
					})
				]
			})],
			_items: [oSort, oItemFilter.clone(), oItemGroup.clone(), oColumn],
			items: [
				new Item({
					label: "App-specific menu entry 1",
					icon: "sap-icon://pipeline-analysis",
					content: new sap.m.Button({
						text: "Sample Button"
					})
				}),
				new Item({
					label: "App-specific menu entry 2",
					icon: "sap-icon://lab",
					content: new sap.m.Button({
						text: "Sample Button"
					})
				})
			]
		});

		var oButton3 = new sap.m.Button({
			text: "Open VisualDesign ColumnMenu",
			press: function () {
				oVDMenu.openBy(this);
			}
		});
		oButton3.addDependent(oVDMenu);
		oButton3.placeAt("body");
	});
}));