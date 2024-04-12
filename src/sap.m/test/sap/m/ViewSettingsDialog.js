/******************************
 * Table setup and formatting *
 ******************************/

/* custom formatters (taken from cart app to test custom formatters) */

sap.ui.define([
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/ui/core/Element",
	"sap/ui/core/format/NumberFormat",
	"sap/base/util/ObjectPath",
	"sap/m/App",
	"sap/m/TextArea",
	"sap/ui/model/json/JSONModel",
	"sap/m/Table",
	"sap/m/Toolbar",
	"sap/m/Label",
	"sap/m/ToolbarSpacer",
	"sap/ui/core/Icon",
	"sap/m/Column",
	"sap/m/ColumnListItem",
	"sap/m/VBox",
	"sap/m/library",
	"sap/m/Slider",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/ViewSettingsDialog",
	"sap/m/ViewSettingsItem",
	"sap/ui/core/CustomData",
	"sap/ui/model/Sorter",
	"sap/m/ViewSettingsFilterItem",
	"sap/m/ViewSettingsCustomItem",
	"sap/m/Button",
	"sap/m/Panel",
	"sap/m/Page"
], function(
	MessageBox,
	MessageToast,
	Element,
	NumberFormat,
	ObjectPath,
	App,
	TextArea,
	JSONModel,
	Table,
	Toolbar,
	Label,
	ToolbarSpacer,
	Icon,
	Column,
	ColumnListItem,
	VBox,
	mobileLibrary,
	Slider,
	Filter,
	FilterOperator,
	ViewSettingsDialog,
	ViewSettingsItem,
	CustomData,
	Sorter,
	ViewSettingsFilterItem,
	ViewSettingsCustomItem,
	Button,
	Panel,
	Page
) {
	"use strict";

	// shortcut for sap.m.StringFilterOperator
	const StringFilterOperator = mobileLibrary.StringFilterOperator;

	// shortcut for sap.m.LabelDesign
	const LabelDesign = mobileLibrary.LabelDesign;

	// create namespace
	ObjectPath.create("util");

	// create namespace
	ObjectPath.create("util");

	// initialize application first
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",
		value: new App()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "debug", {
		configurable: "false",
		writable: "true",

		value: new TextArea({
			editable : true,
			width : "100%",
			rows : 10
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "debugSelectedFilterItems", {
		configurable: "false",
		writable: "true",

		value: function (aItems) {
			var sFilterString = "",
				i = 0;

			if (!aItems) {
				return;
			}
			for (; i < aItems.length; i++) {
				sFilterString += aItems[i].getText() + ", ";
			}
			return sFilterString.substring(0, sFilterString.length - 2);
		}
	});

	const Formatter = {
		price:  function (value) {
			var numberFormat = NumberFormat.getFloatInstance({
				maxFractionDigits: 2,
				groupingEnabled: true,
				groupingSeparator: ".",
				decimalSeparator: ","
			});
			return numberFormat.format(value);
		},
		_statusTextMap: {
			"A": "Approved",
			"O": "Open",
			"D": "Denied"
		},
		statusText: function (status) {
			return (Formatter._statusTextMap[status]) ? Formatter._statusTextMap[status]: status;
		},
		_statusStateMap: {
			"A": "Success",
			"O": "Warning",
			"D": "Error"
		},
		statusState: function (status) {
			return (Formatter._statusStateMap[status]) ? Formatter._statusStateMap[status]: "None";
		}
	};

	/* column data and model */
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "model", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	model.setData({
		Name: "Name",
		Status: "Status",
		Value: "Value",
		Price: "Price"
	});
	sap.ui.getCore();

	/* table definition */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "table", {
		configurable: "false",
		writable: "true",

		value: new Table("items", {
			threshold: 2,
			inset: false,
			mode: "MultiSelect",
			showUnread: true,
			scrollToLoad: true,
			infoToolbar:
				new Toolbar({
				visible: false,
				active: true,
				press: function (evt) {
					MessageToast.show("InfoBar Pressed!");
				},
				content: [
					new Label({
						text: "Filter text goes here"
					}),
					new ToolbarSpacer(),
					new Icon({
						src : "sap-icon://add-filter"
					})
				]
			}),
			columns: [new Column({
				styleClass: "name",
				hAlign: "Left",
				header: new Label({
					text: "{i18n>/Name}"
				})
			}), new Column({
				hAlign: "Center",
				styleClass: "qty",
				width: "20%",
				popinDisplay: "Inline",
				header: new Label({
					text: "{i18n>/Status}"
				}),
				minScreenWidth: "Tablet",
				demandPopin: true
			}), new Column({
				hAlign: "Right",
				styleClass: "limit",
				width: "20%",
				header: new Label({
					text: "{i18n>/Value}"
				}),
				minScreenWidth: "XXSmall",
				demandPopin: true
			}), new Column({
				hAlign: "Right",
				styleClass: "price",
				width: "20%",
				popinDisplay: "Inline",
				header: new Label({
					text: "{i18n>/Price}"
				}),
				footer: new Label({
					text: "130.00 EUR"
				}),
				minScreenWidth: "400px",
				demandPopin: true
			})]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "template", {
		configurable: "false",
		writable: "true",

		value: new ColumnListItem({
			type: "Navigation",
			unread: false,
			cells: [
				new Label({
					text: "{name}"
				}),
				new Label({
					text: "{path: 'status', formatter: 'util.Formatter.statusState'}"
				}), new Label({
					text: "{path: 'limit', formatter: 'util.Formatter.price'} EUR"
				}), new Label({
					text: "{path: 'price', formatter: 'util.Formatter.price'} EUR"
				})
			]
		})
	});

	/* table data & model */
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "data", {
		configurable: "false",
		writable: "true",

		value: {
			navigation: [{
				name: "Headphone",
				status: "A",
				limit: 19.99,
				price: 12.99
			}, {
				name: "Mouse Pad",
				status: "A",
				limit: 5.99,
				price: 3.99
			}, {
				name: "Monitor",
				status: "O",
				limit: 59.99,
				price: 45.99
			}, {
				name: "Backpack",
				status: "A",
				limit: 119.99,
				price: 79.99
			}, {
				name: "Printer",
				status: "D",
				limit: 89.99,
				price: 49.99
			}, {
				name: "Optic Mouse",
				status: "D",
				limit: 39.99,
				price: 15.99
			}, {
				name: "Dock Station",
				status: "D",
				limit: 89.99,
				price: 55.99
			}]
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	oModel.setData(data);
	table.setModel(oModel);
	table.bindAggregation("items", "/navigation", template);

	/* sort item text model (CSN issue)*/
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "dataI18n", {
		configurable: "false",
		writable: "true",

		value: {
			I18N_NAME: "Name Sorter",
			I18N_STATUS: "Status Sorter",
			I18N_VALUE: "Value Sorter",
			I18N_PRICE: "Price Sorter"
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel18n", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	oModel18n.setData(dataI18n);

	util.Grouper = {
		name: function (oContext) { // take first 3 letters of name
			return oContext.getProperty("name").toString().substring(0, 3);
		},
		value: function (oContext) { // default grouping function using path string values
			return oContext.getProperty("limit").toString();
		},
		price: function (oContext) { // use price to sort in categories (cheap / medium / expensive)
			var price = parseInt(oContext.getProperty("price"), 10),
				key,
				text;

			if (price < 20) {
				key = "cheap";
				text = "Really cheap (<20)";
			} else if (price < 40) {
				key = "medium";
				text = "Normal (<40)";
			} else {
				key = "expensive";
				text = "Totally overpriced (other)";
			}

			return {
				key: key,
				text: text
			};
		}
	};

	/* definition of a custom control and a callback that returns filters for the control */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "customPriceFilter", {
		configurable: "false",
		writable: "true",

		value: new VBox({
			items: [
				new Label("minLabel", {
					design: LabelDesign.Bold,
					text: "Minimum price:",
					labelFor: "minSlider"
				}),
				new Slider("minSlider", {
					value: 0,
					min: 0,
					max: 100,
					step: 10,
					progress: true,
					liveChange: function (oEvent) {
						// update labels and filter item (is cloned in several dialogs)
						// we use some internal logic to get the dialog instance and the filter instance from within the control
						// if the control is not cloned, access the dialog and the filter by id directly
						var source = oEvent.getSource(),
							vsd = Element.getElementById(source.getParent().getParent().getId().substr(0,4)),
							filters = vsd.getFilterItems(),
							customFilter,
							i = 0;

						// update label
						source.getParent().getItems()[0].setText("Minimum price >= " + oEvent.getParameter("value"));

						// update filter
						// this functionality only needed because custom control is cloned for this test page
						// if you don't have cloned controls you can directly access them by id and set/reset the values
						for(; i < filters.length; i++) {
							if(filters[i] instanceof ViewSettingsCustomItem && filters[i].getKey() === "myPriceFilter") {
								customFilter = filters[i];
								break;
							}
						}

						if(customFilter) {
							if(oEvent.getParameter("value") !== 0 || source.getParent().getItems()[3].getValue() !== 100) {
								customFilter.setSelected(true);
								customFilter.setFilterCount(1);
							} else {
								customFilter.setSelected(false);
								customFilter.setFilterCount(0);
							}
						}
					}
				}),
				new Label("maxLabel", {
					design: LabelDesign.Bold,
					text: "Maximum price:",
					labelFor: "maxSlider"
				}),
				new Slider("maxSlider", {
					value: 100,
					min: 0,
					max: 100,
					step: 10,
					progress: true,
					liveChange: function (oEvent) {
						// update labels and filter item (is cloned in several dialogs)
						// we use some internal logic to get the dialog instance and the filter instance from within the control
						// if the control is not cloned, access the dialog and the filter by id directly
						var source = oEvent.getSource(),
							vsd = Element.getElementById(source.getParent().getParent().getId().substr(0,4)),
							filters = vsd.getFilterItems(),
							customFilter,
							i = 0;

						// update label
						source.getParent().getItems()[2].setText("Maximum price <= " + oEvent.getParameter("value"));

						// update filter
						// this functionality only needed because custom control is cloned for this test page
						// if you don't have cloned controls you can directly access them by id and set/reset the values
						for(; i < filters.length; i++) {
							if(filters[i] instanceof ViewSettingsCustomItem && filters[i].getKey() === "myPriceFilter") {
								customFilter = filters[i];
								break;
							}
						}

						if(customFilter) {
							if(oEvent.getParameter("value") !== 100 || source.getParent().getItems()[1].getValue() !== 0) {
								customFilter.setSelected(true);
								customFilter.setFilterCount(1);
								} else {
									customFilter.setSelected(false);
								customFilter.setFilterCount(0);
								}
						}
					}
				})
			]
		}).addStyleClass("customPriceFilter")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "customPriceCallback", {
		configurable: "false",
		writable: "true",

		value: function (oControl) {
			var aFilters = [],
				aItems = oControl.getItems();

			aFilters.push(new Filter('price', FilterOperator.BT, aItems[1].getValue(), aItems[3].getValue()));
			return aFilters;
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "customPriceReset", {
		configurable: "false",
		writable: "true",

		value: function (oEvent) {
			var source = oEvent.getSource(),
				filters = source.getFilterItems(),
				customControl,
				customFilter,
				i = 0;

			// this functionality only needed because custom control is cloned for this test page
			// if you don't have cloned controls you can directly access them by id and set/reset the values
			for(; i < filters.length; i++) {
				if(filters[i] instanceof ViewSettingsCustomItem && filters[i].getKey() === "myPriceFilter") {
					customFilter = filters[i];
					customControl = customFilter.getCustomControl();
					break;
				}
			}
			if(customFilter) {
				customFilter.setSelected(false);
				customFilter.setFilterCount(0);
			}
			if(customControl) {
				customControl.getItems()[0].setText("Minimum price:");
				customControl.getItems()[1].setValue(0);
				customControl.getItems()[2].setText("Maximum price:");
				customControl.getItems()[3].setValue(100);
			}
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "customPriceCancel", {
		configurable: "false",
		writable: "true",
		value: customPriceReset
	});

	/* definition of preset filters */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "presetFilters1", {
		configurable: "false",
		writable: "true",

		value: [
			new Filter("limit", FilterOperator.BT, 10, 100),
			new Filter("name", FilterOperator.Contains, "o"),
			new Filter("status", FilterOperator.EQ, "D")
		]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "presetFilters2", {
		configurable: "false",
		writable: "true",

		value: [
			new Filter("name", FilterOperator.Contains, "e"),
			new Filter("status", FilterOperator.EQ, "A")
		]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "presetFilters3", {
		configurable: "false",
		writable: "true",
		value: new Filter("price", FilterOperator.GT, 50)
	});

	/********************************
	 * ViewSettingsDialog scenarios *
	 ********************************/

	/* Example 1) Full-blown view settings dialog with all 3 tabs
		- Sort / Group / Filter data is  not interpreted
		- Data is set by the selected flag on the ViewSettingsFilterItem

		Note: We strongly recommend to use the custom data method to define
		all sorters and filters with the ViewSettingsItem */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vsd1", {
		configurable: "false",
		writable: "true",

		value: new ViewSettingsDialog("vsd1", {
			confirm: function (oEvent) {
				var p = oEvent.getParameters(),
					oSorter,
					oGrouper,
					aFilters,
					oCallback,
					aTableSorters = [],
					aTableFilters = [],
					i = 0;

				// 1) fetch and adjust grouper (set group order)
				if (p.groupItem) {
					oGrouper = p.groupItem.getCustomData()[0].getValue();
					if (oGrouper) {
						oGrouper.bDescending = p.groupDescending;
						aTableSorters.push(oGrouper);
					}
				}

				// 2) fetch and adjust sorter (set sort order)
				if (p.sortItem) {
					oSorter = p.sortItem.getCustomData()[0].getValue();
					if (oSorter) {
						oSorter.bDescending = p.sortDescending;
						aTableSorters.push(oSorter);
					}
				}

				// 3) filtering (either preset filters or standard/custom filters)
				if (p.presetFilterItem) {
					aFilters = p.presetFilterItem.getCustomData()[0].getValue();
					if (aFilters) {
						// the filter could be an array of filters or a single filter so we transform it to an array
						if (!Array.isArray(aFilters)) {
							aFilters = [aFilters];
						}
						aTableFilters = aTableFilters.concat(aFilters);
					}
				} else { // standard/custom filters
					for (; i < p.filterItems.length; i++) {
						if (p.filterItems[i] instanceof ViewSettingsCustomItem) { // custom control filter
							oCallback = p.filterItems[i].getCustomData()[0].getValue();
							aFilters = oCallback.apply(this, [p.filterItems[i].getCustomControl()]);
							if (aFilters) {
								// the filter could be an array of filters or a single filter so we transform it to an array
								if (!Array.isArray(aFilters)) {
									aFilters = [aFilters];
								}
								aTableFilters = aTableFilters.concat(aFilters);
							}
						} else if (p.filterItems[i] instanceof ViewSettingsItem) { // standard filter
							aFilters = p.filterItems[i].getCustomData()[0].getValue();
							if (aFilters) {
								// the filter could be an array of filters or a single filter so we transform it to an array
								if (!Array.isArray(aFilters)) {
									aFilters = [aFilters];
								}
								aTableFilters = aTableFilters.concat(aFilters);
							}
						}
					}
				}

				// apply sorters & filters to the table binding
				table.getBinding("items").sort(aTableSorters);
				table.getBinding("items").filter(aTableFilters);

				// update table info bar text (show only if we have a text & set text to label)
				table.getInfoToolbar().setVisible(!!p.filterString);
				table.getInfoToolbar().getContent()[0].setText(p.filterString);

				// show event parameters in debug output
				debug.setValue("Selected options for view settings dialog \"" + this.getId() + "\":\n" +
					"sortItem: " + (p.sortItem ? p.sortItem.getText() : "null") + "\n" +
					"sortOrder: " + (p.sortDescending ? "Descending" : "Ascending") + "\n" +
					"groupItem: " + (p.groupItem ? p.groupItem.getText() : "null") + "\n" +
					"groupOrder: " + (p.groupDescending ? "Descending" : "Ascending") + "\n" +
					"presetFilterItem: " + (p.presetFilterItem ? p.presetFilterItem.getText() : "null") + "\n" +
					"filterItems: " + debugSelectedFilterItems(p.filterItems) + "\n" +
					"filterKeys: " + JSON.stringify(p.filterKeys) + "\n" +
					"filterString: " + p.filterString + "\n" +
					"composed sorters: " + JSON.stringify(aTableSorters) + "\n" +
					"composed filters: " + JSON.stringify(aTableFilters)
				);
			}
		}).addStyleClass("sapUiNoContentPadding")
	});

	vsd1.setSortDescending(false);
	vsd1.setGroupDescending(true);
	vsd1.setModel(oModel18n, "i18n");

	// init sorting (with simple sorters as custom data for all fields)
	vsd1.addSortItem(new ViewSettingsItem({
		key: "myNameSorter",
		text: "{i18n>/I18N_NAME}",
		selected: true,
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("name", false)
		})
	}));
	vsd1.addSortItem(new ViewSettingsItem({
		key: "myStatusSorter",
		text: "{i18n>/I18N_STATUS}",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("status", false)
		})
	}));
	vsd1.addSortItem(new ViewSettingsItem({
		key: "myValueSorter",
		text: "{i18n>/I18N_VALUE}",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("limit", false)
		})
	}));
	vsd1.addSortItem(new ViewSettingsItem({
		key: "myPriceSorter",
		text: "{i18n>/I18N_PRICE}",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("price", false)
		})
	}));

	// init grouping (some simple sorters with default grouping and some with a custom grouping)
	vsd1.addGroupItem(new ViewSettingsItem({
		key: "myNameGrouper",
		text: "Name",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("name", false, util.Grouper.name)
		})
	}));
	vsd1.addGroupItem(new ViewSettingsItem({
		key: "myStatusGrouper",
		text: "Status",
		selected: true,
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("status", false, true)
		})
	}));
	vsd1.addGroupItem(new ViewSettingsItem({
		key: "myValueGrouper",
		text: "Value",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("limit", false, util.Grouper.value)
		})
	}));
	vsd1.addGroupItem(new ViewSettingsItem({
		key: "myPriceGrouper",
		text: "Price",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("price", false, util.Grouper.price)
		})
	}));

	vsd1.attachResetFilters(customPriceReset); // reset function to reset control when the reset button was pressed
	vsd1.attachCancel(customPriceCancel); // reset function to reset control when the cancel button was pressed

	// preset filters
	vsd1.addPresetFilterItem(new ViewSettingsItem({
		key: "myPresetFilter1",
		text: "A very complex filter",
		customData: new CustomData({
			key: "filter",
			value: presetFilters1
		})
	}));
	vsd1.addPresetFilterItem(new ViewSettingsItem({
		key: "myPresetFilter2",
		text: "Ridiculously complex filter",
		customData: new CustomData({
			key: "filter",
			value: presetFilters2
		})
	}));
	vsd1.addPresetFilterItem(new ViewSettingsItem({
		key: "myPresetFilter3",
		text: "Expensive stuff",
		customData: new CustomData({
			key: "filter",
			value: presetFilters2
		})
	}));

	/* Example 2) Full-blown view settings dialog with all 3 tabs
	- Sort / Group / Filter data is compiled in the event based on the item keys
	- Dialog state is set by API after filling the aggregations

	Note: We strongly recommend to use the custom data method from example 1)
	However if you prefer working with keys and setting the filters in the
	event method here is an example how to do so */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vsd2", {
		configurable: "false",
		writable: "true",

		value: new ViewSettingsDialog("vsd2", {
			confirm: function (oEvent) {
				var p = oEvent.getParameters(),
					sSortPath = null,
					oSorter,
					sGroupPath = null,
					oGroupFunction = null,
					oGrouper,
					aFilters = null,
					oCallback = null,
					aTableSorters = [],
					aTableFilters = [],
					i = 0;

				// 1) create grouper based on key
				if (p.groupItem) {
					// decide based on id
					switch (p.groupItem.getKey()) {
					case "myNameGrouper": sGroupPath = "name"; oGroupFunction = util.Grouper.name; break;
					case "myStatusGrouper": sGroupPath = "status"; break;
					case "myValueGrouper": sGroupPath = "limit"; oGroupFunction = util.Grouper.value; break;
					case "myPriceGrouper": sGroupPath = "price"; oGroupFunction = util.Grouper.price; break;
					}
					// create grouper
					if (sGroupPath) {
						oGrouper = new Sorter(sGroupPath, p.groupDescending, (oGroupFunction ? oGroupFunction : true)); // true is default sorter
						aTableSorters.push(oGrouper);
					}
				}

				// 2) create sorter based on key
				if (p.sortItem) {
					// decide based on id
					switch (p.sortItem.getKey()) {
						case "myNameSorter": sSortPath = "name"; break;
						case "myStatusSorter": sSortPath = "status"; break;
						case "myValueSorter": sSortPath = "limit"; break;
						case "myPriceSorter": sSortPath = "price"; break;
					}
					// create sorter
					if (sSortPath) {
						oSorter = new Sorter(sSortPath, p.sortDescending);
						aTableSorters.push(oSorter);
					}
				}

				// 3) filtering (either preset filters or standard/custom filters)
				if (p.presetFilterItem) {
					// decide based on id
					switch (p.presetFilterItem.getKey()) {
						case "myPresetFilter1": aFilters = presetFilters1; break;
						case "myPresetFilter2": aFilters = presetFilters2; break;
						case "myPresetFilter3": aFilters = presetFilters3; break;
					}
					// add filters
					if (aFilters) {
						// the filter could be an array of filters or a single filter so we transform it to an array
						if (!Array.isArray(aFilters)) {
							aFilters = [aFilters];
						}
						aTableFilters = aTableFilters.concat(aFilters);
					}
				} else { // standard/custom filters
					for (; i < p.filterItems.length; i++) {
						if (p.filterItems[i] instanceof ViewSettingsCustomItem) { // custom control filter
							// decide based on id
							switch (p.filterItems[i].getKey()) {
								case "myPriceFilter": oCallback = customPriceCallback; break;
							}
							// call callback and add filters
							if (oCallback) {
								aFilters = oCallback.apply(this, [p.filterItems[i].getCustomControl()]);
								if (aFilters) {
									// the filter could be an array of filters or a single filter so we transform it to an array
									if (!Array.isArray(aFilters)) {
										aFilters = [aFilters];
									}
									aTableFilters = aTableFilters.concat(aFilters);
								}
							}
						} else if (p.filterItems[i] instanceof ViewSettingsItem) { // standard filter
							// decide based on id
							switch (p.filterItems[i].getKey()) {
								case "name1": aFilters = new Filter("name", FilterOperator.EQ, "Headphone"); break;
								case "name2": aFilters = new Filter("name", FilterOperator.EQ, "Mouse Pad"); break;
								case "name3": aFilters = new Filter("name", FilterOperator.EQ, "Monitor"); break;
								case "name4": aFilters = new Filter("name", FilterOperator.EQ, "Backpack"); break;
								case "name5": aFilters = new Filter("name", FilterOperator.EQ, "Printer"); break;
								case "name6": aFilters = new Filter("name", FilterOperator.EQ, "Optic Mouse"); break;
								case "name7": aFilters = new Filter("name", FilterOperator.EQ, "Dock Station"); break;
								case "status1": aFilters = new Filter("status", FilterOperator.EQ, "A"); break;
								case "status2": aFilters = new Filter("status", FilterOperator.EQ, "O"); break;
								case "status3": aFilters = new Filter("status", FilterOperator.EQ, "D"); break;
								case "value1": aFilters = new Filter("limit", FilterOperator.LT, 10); break;
								case "value2": aFilters = new Filter("limit", FilterOperator.BT, 10, 30); break;
								case "value3": aFilters = new Filter("limit", FilterOperator.BT, 30, 50); break;
								case "value4": aFilters = new Filter("limit", FilterOperator.BT, 50, 70); break;
								case "value5": aFilters = new Filter("limit", FilterOperator.GT, 70); break;
							}

							// add filters
							if (aFilters) {
								// the filter could be an array of filters or a single filter so we transform it to an array
								if (!Array.isArray(aFilters)) {
									aFilters = [aFilters];
								}
								aTableFilters = aTableFilters.concat(aFilters);
							}
						}
					}
				}

				// apply sorters & filters to the table binding
				table.getBinding("items").sort(aTableSorters);
				table.getBinding("items").filter(aTableFilters);

				// update table info bar text (show only if we have a text & set text to label)
				table.getInfoToolbar().setVisible(!!p.filterString);
				table.getInfoToolbar().getContent()[0].setText(p.filterString);

				// show event parameters in debug output
				debug.setValue("Selected options for view settings dialog \"" + this.getId() + "\":\n" +
					"sortItem: " + (p.sortItem ? p.sortItem.getText() : "null") + "\n" +
					"sortOrder: " + (p.sortDescending ? "Descending" : "Ascending") + "\n" +
					"groupItem: " + (p.groupItem ? p.groupItem.getText() : "null") + "\n" +
					"groupOrder: " + (p.groupDescending ? "Descending" : "Ascending") + "\n" +
					"presetFilterItem: " + (p.presetFilterItem ? p.presetFilterItem.getText() : "null") + "\n" +
					"filterItems: " + debugSelectedFilterItems(p.filterItems) + "\n" +
					"filterKeys: " + JSON.stringify(p.filterKeys) + "\n" +
					"filterString: " + p.filterString + "\n" +
					"composed sorters: " + JSON.stringify(aTableSorters) + "\n" +
					"composed filters: " + JSON.stringify(aTableFilters)
				);
			},
			filterSearchOperator: StringFilterOperator.Contains
		})
	});

	// init sorting (with simple sorters as custom data for all fields)
	vsd2.addSortItem(new ViewSettingsItem({
		key: "myNameSorter",
		text: "Please fill in your name, middle name and Last name",
		wrapping: true
	}));
	vsd2.addSortItem(new ViewSettingsItem({
		key: "myStatusSorter",
		text: "Status"
	}));
	vsd2.addSortItem(new ViewSettingsItem({
		key: "myValueSorter",
		text: "Value"
	}));
	vsd2.addSortItem(new ViewSettingsItem({
		key: "myPriceSorter",
		text: "Price"
	}));

	// init grouping (some simple sorters with default grouping and some with a custom grouping)
	vsd2.addGroupItem(new ViewSettingsItem({
		key: "myNameGrouper",
		text: "Name"
	}));
	vsd2.addGroupItem(new ViewSettingsItem({
		key: "myStatusGrouper",
		text: "Status"
	}));
	vsd2.addGroupItem(new ViewSettingsItem({
		key: "myValueGrouper",
		text: "Value"
	}));
	vsd2.addGroupItem(new ViewSettingsItem({
		key: "myPriceGrouper",
		text: "Price"
	}));

	vsd2.addFilterItem(new ViewSettingsFilterItem({
		key: "myNameFilter",
		text: "Name",
		items: [
			new ViewSettingsItem({
				key: "name1",
				text: "Headphone"
			}),
			new ViewSettingsItem({
				key: "name2",
				text: "Mousepad"
			}),
			new ViewSettingsItem({
				key: "name3",
				text: "Monitor"
			}),
			new ViewSettingsItem({
				key: "name4",
				text: "Backpack"
			}),
			new ViewSettingsItem({
				key: "name5",
				text: "Printer"
			}),
			new ViewSettingsItem({
				key: "name6",
				text: "Optic Mouse"
			}),
			new ViewSettingsItem({
				key: "name7",
				text: "Dock Station"
			})
		]
	}));

	vsd2.addFilterItem(new ViewSettingsFilterItem({
		key: "myStatusFilter",
		text: "Status",
		items: [
			new ViewSettingsItem({
				key: "status1",
				text: "Approved"
			}),
			new ViewSettingsItem({
				key: "status2",
				text: "Open"
			}),
			new ViewSettingsItem({
				key: "status3",
				text: "Denied"
			})
		]
	}));

	vsd2.addFilterItem(new ViewSettingsFilterItem({
		key: "myValueFilter",
		text: "Value",
		items: [
			new ViewSettingsItem({
				key: "value1",
				text: "< 10 EUR"
			}),
			new ViewSettingsItem({
				key: "value2",
				text: "10 - 30 EUR"
			}),
			new ViewSettingsItem({
				key: "value3",
				text: "30 - 50 EUR"
			}),
			new ViewSettingsItem({
				key: "value4",
				text: "50 - 70 EUR"
			}),
			new ViewSettingsItem({
				key: "value5",
				text: "> 70 EUR"
			})
		]
	}));

	// custom price control filter
	vsd2.addFilterItem(new ViewSettingsCustomItem({
		key: "myPriceFilter",
		text: "Price",
		customControl: customPriceFilter.clone()
	}));
	vsd2.attachResetFilters(customPriceReset); // reset function to reset control when the reset button was pressed
	vsd2.attachCancel(customPriceCancel); // reset function to reset control when the cancel button was pressed

	/* set dialog state (solely by API instead of selected flag) */

	vsd2.setSelectedSortItem(vsd2.getSortItems()[0]);
	vsd2.setSortDescending(true);
	vsd2.setSelectedGroupItem(vsd2.getGroupItems()[1]);
	vsd2.setGroupDescending(true);

	/* Example 3) Full-blown view settings dialog with all 3 tabs
	- Sort / Group / Filter data is  not interpreted
	- Data is set by the selected flag on the ViewSettingsFilterItem */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vsd3", {
		configurable: "false",
		writable: "true",

		value: new ViewSettingsDialog("vsd3", {
			confirm: function (oEvent) {
				var p = oEvent.getParameters();

				MessageBox.alert("You could now do something with the result!");

				// update table info bar text (show only if we have a text & set text to label)
				table.getInfoToolbar().setVisible(!!p.filterString);
				table.getInfoToolbar().getContent()[0].setText(p.filterString);

				// show event parameters in debug output
				debug.setValue("Selected options for view settings dialog \"" + this.getId() + "\":\n" +
					"sortItem: " + (p.sortItem ? p.sortItem.getText() : "null") + "\n" +
					"sortOrder: " + (p.sortDescending ? "Descending" : "Ascending") + "\n" +
					"groupItem: " + (p.groupItem ? p.groupItem.getText() : "null") + "\n" +
					"groupOrder: " + (p.groupDescending ? "Descending" : "Ascending") + "\n" +
					"presetFilterItem: " + (p.presetFilterItem ? p.presetFilterItem.getText() : "null") + "\n" +
					"filterItems: " + debugSelectedFilterItems(p.filterItems) + "\n" +
					"filterKeys: " + JSON.stringify(p.filterKeys) + "\n" +
					"filterString: " + p.filterString
				);
			}
		})
	});

	// init sorting (with simple sorters as custom data for all fields)
	vsd3.addSortItem(new ViewSettingsItem({
		key: "myNameSorter",
		text: "Name",
		selected: true
	}));
	vsd3.addSortItem(new ViewSettingsItem({
		key: "myStatusSorter",
		text: "Status"
	}));
	vsd3.addSortItem(new ViewSettingsItem({
		key: "myValueSorter",
		text: "Value"
	}));
	vsd3.addSortItem(new ViewSettingsItem({
		key: "myPriceSorter",
		text: "Price"
	}));

	// init grouping (some simple sorters with default grouping and some with a custom grouping)
	vsd3.addGroupItem(new ViewSettingsItem({
		key: "myNameGrouper",
		text: "Name"
	}));
	vsd3.addGroupItem(new ViewSettingsItem({
		key: "myStatusGrouper",
		text: "Status",
		selected: true
	}));
	vsd3.addGroupItem(new ViewSettingsItem({
		key: "myValueGrouper",
		text: "Value"
	}));
	vsd3.addGroupItem(new ViewSettingsItem({
		key: "myPriceGrouper",
		text: "Price"
	}));

	vsd3.addFilterItem(new ViewSettingsFilterItem({
		key: "myNameFilter",
		text: "Name",
		items: [
			new ViewSettingsItem({
				key: "name1",
				text: "Headphone",
				selected: true
			}),
			new ViewSettingsItem({
				key: "name2",
				text: "Mousepad",
				selected: true
			}),
			new ViewSettingsItem({
				key: "name3",
				text: "Monitor"
			}),
			new ViewSettingsItem({
				key: "name4",
				text: "Backpack"
			}),
			new ViewSettingsItem({
				key: "name5",
				text: "Printer",
				selected: true
			}),
			new ViewSettingsItem({
				key: "name6",
				text: "Optic Mouse",
				selected: true
			}),
			new ViewSettingsItem({
				key: "name7",
				text: "Dock Station"
			})
		]
	}));

	vsd3.addFilterItem(new ViewSettingsFilterItem({
		key: "myStatusFilter",
		text: "Status",
		items: [
			new ViewSettingsItem({
				key: "status1",
				text: "Approved",
				selected: true
			}),
			new ViewSettingsItem({
				key: "status2",
				text: "Open",
				selected: true
			}),
			new ViewSettingsItem({
				key: "status3",
				text: "Denied",
				selected: true
			})
		]
	}));

	vsd3.addFilterItem(new ViewSettingsFilterItem({
		key: "myValueFilter",
		text: "Value",
		items: [
			new ViewSettingsItem({
				key: "value1",
				text: "< 10 EUR"
			}),
			new ViewSettingsItem({
				key: "value2",
				text: "10 - 30 EUR",
				selected: true
			}),
			new ViewSettingsItem({
				key: "value3",
				text: "30 - 50 EUR",
				selected: true
			}),
			new ViewSettingsItem({
				key: "value4",
				text: "50 - 70 EUR",
				selected: true
			}),
			new ViewSettingsItem({
				key: "value5",
				text: "> 70 EUR"
			})
		]
	}));

	// custom price control filter
	vsd3.addFilterItem(new ViewSettingsCustomItem({
		key: "myPriceFilter",
		text: "Price",
		customControl: customPriceFilter.clone()
	}));
	vsd3.attachResetFilters(customPriceReset); // reset function to reset control when the reset button was pressed
	vsd3.attachCancel(customPriceCancel); // reset function to reset control when the cancel button was pressed

	/* Example 4) only sort tab & data, other tabs are automatically hidden
	- Sort data is attached as customData items */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vsd4", {
		configurable: "false",
		writable: "true",

		value: new ViewSettingsDialog("vsd4", {
			confirm: function (oEvent) {
				var p = oEvent.getParameters(),
					oSorter = null;

				// fetch and adjust sorter (set sort order)
				if (p.sortItem) {
					oSorter = p.sortItem.getCustomData()[0].getValue();
					if (oSorter) {
						oSorter.bDescending = p.sortDescending;
						// apply sorter to the table binding
						table.getBinding("items").sort(oSorter);
					}
				}

				// show event parameters in debug output
				debug.setValue("Selected options for view settings dialog \"" + this.getId() + "\":\n" +
					"sortItem: " + (p.sortItem ? p.sortItem.getText() : "null") + "\n" +
					"sortOrder: " + (p.sortDescending ? "Descending" : "Ascending") + "\n" +
					"composed sorters: " + JSON.stringify(oSorter)
				);
			}
		})
	});

	// init sorting (with simple sorters as custom data for all fields)
	vsd4.addSortItem(new ViewSettingsItem({
		key: "myNameSorter",
		text: "Name",
		selected: true,
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("name", false)
		})
	}));
	vsd4.addSortItem(new ViewSettingsItem({
		key: "myStatusSorter",
		text: "Status",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("status", false)
		})
	}));
	vsd4.addSortItem(new ViewSettingsItem({
		key: "myValueSorter",
		text: "Value",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("limit", false)
		})
	}));
	vsd4.addSortItem(new ViewSettingsItem({
		key: "myPriceSorter",
		text: "Price",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("price", false)
		})
	}));

	/* Example 5) only group tab & data, other tabs are automatically hidden
	- Group data is attached as customData items
	- Data is set by the selected flag on the ViewSettingsFilterItem */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vsd5", {
		configurable: "false",
		writable: "true",

		value: new ViewSettingsDialog("vsd5", {
			groupDescending: true,
			confirm: function (oEvent) {
				var p = oEvent.getParameters(),
					oGrouper = null;

				// fetch and adjust grouper (set group order)
				if (p.groupItem) {
					oGrouper = p.groupItem.getCustomData()[0].getValue();
					if (oGrouper) {
						oGrouper.bDescending = p.groupDescending;
						// apply grouper to the table binding
						table.getBinding("items").sort(oGrouper);
					}
				}

				// show event parameters in debug output
				debug.setValue("Selected options for view settings dialog \"" + this.getId() + "\":\n" +
					"groupItem: " + (p.groupItem ? p.groupItem.getText() : "null") + "\n" +
					"groupOrder: " + (p.groupDescending ? "Descending" : "Ascending") + "\n" +
					"composed sorters: " + JSON.stringify(oGrouper)
				);
			}
		})
	});

	// init grouping (some simple sorters with default grouping and some with a custom grouping)
	vsd5.addGroupItem(new ViewSettingsItem({
		key: "myNameGrouper",
		text: "Name",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("name", false, util.Grouper.name)
		})
	}));
	vsd5.addGroupItem(new ViewSettingsItem({
		key: "myStatusGrouper",
		text: "Status",
		selected: true,
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("status", false, true)
		})
	}));
	vsd5.addGroupItem(new ViewSettingsItem({
		key: "myValueGrouper",
		text: "Value",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("limit", false, util.Grouper.value)
		})
	}));
	vsd5.addGroupItem(new ViewSettingsItem({
		key: "myPriceGrouper",
		text: "Price",
		customData: new CustomData({
			key: "sorter",
			value: new Sorter("price", false, util.Grouper.price)
		})
	}));

	/* Example 6) only preset filters on filter tab & data, other tabs are automatically hidden
	- Filter data is attached as customData items
	- Data is set by the selected flag on the ViewSettingsFilterItem */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vsd6", {
		configurable: "false",
		writable: "true",

		value: new ViewSettingsDialog("vsd6", {
			confirm: function (oEvent) {
				var p = oEvent.getParameters(),
					aFilters,
					aTableFilters = [];

				// fetch preset filters
				if (p.presetFilterItem) {
					aFilters = p.presetFilterItem.getCustomData()[0].getValue();
					if (aFilters) {
						// the filter could be an array of filters or a single filter so we transform it to an array
						if (!Array.isArray(aFilters)) {
							aFilters = [aFilters];
						}
						aTableFilters = aTableFilters.concat(aFilters);
					}
				}

				// apply filters to the table binding
				table.getBinding("items").filter(aTableFilters);

				// update table info bar text (show only if we have a text & set text to label)
				table.getInfoToolbar().setVisible(!!p.filterString);
				table.getInfoToolbar().getContent()[0].setText(p.filterString);

				// show event parameters in debug output
				debug.setValue("Selected options for view settings dialog \"" + this.getId() + "\":\n" +
					"presetFilterItem: " + (p.presetFilterItem ? p.presetFilterItem.getText() : "null") + "\n" +
					"filterString: " + p.filterString + "\n" +
					"composed filters: " + JSON.stringify(aTableFilters)
				);
			}
		})
	});

	// preset filters
	vsd6.addPresetFilterItem(new ViewSettingsItem({
		key: "myPresetFilter1",
		text: "A very complex filter",
		customData: new CustomData({
			key: "filter",
			value: presetFilters1
		})
	}));
	vsd6.addPresetFilterItem(new ViewSettingsItem({
		key: "myPresetFilter2",
		text: "Ridiculously complex filter",
		selected: true,
		customData: new CustomData({
			key: "filter",
			value: presetFilters2
		})
	}));
	vsd6.addPresetFilterItem(new ViewSettingsItem({
		key: "myPresetFilter3",
		text: "Expensive stuff",
		customData: new CustomData({
			key: "filter",
			value: presetFilters2
		})
	}));

	/* Example 7) only filters on filter tab & data, other tabs are automatically hidden
	- Filter data is attached as customData items
	- Data is set by the selected flag on the ViewSettingsFilterItem */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vsd7", {
		configurable: "false",
		writable: "true",

		value: new ViewSettingsDialog("vsd7", {
			confirm: function (oEvent) {
				var p = oEvent.getParameters(),
					aFilters,
					oCallback,
					aTableFilters = [],
					i = 0;

				for (; i < p.filterItems.length; i++) {
					if (p.filterItems[i] instanceof ViewSettingsCustomItem) { // custom control filter
						oCallback = p.filterItems[i].getCustomData()[0].getValue();
						aFilters = oCallback.apply(this, [p.filterItems[i].getCustomControl()]);
						if (aFilters) {
							// the filter could be an array of filters or a single filter so we transform it to an array
							if (!Array.isArray(aFilters)) {
								aFilters = [aFilters];
							}
							aTableFilters = aTableFilters.concat(aFilters);
						}
					} else if (p.filterItems[i] instanceof ViewSettingsItem) { // standard filter
						aFilters = p.filterItems[i].getCustomData()[0].getValue();
						if (aFilters) {
							// the filter could be an array of filters or a single filter so we transform it to an array
							if (!Array.isArray(aFilters)) {
								aFilters = [aFilters];
							}
							aTableFilters = aTableFilters.concat(aFilters);
						}
					}
				}

				// apply filters to the table binding
				table.getBinding("items").filter(aTableFilters);

				// update table info bar text (show only if we have a text & set text to label)
				table.getInfoToolbar().setVisible(!!p.filterString);
				table.getInfoToolbar().getContent()[0].setText(p.filterString);

				// show event parameters in debug output
				debug.setValue("Selected options for view settings dialog \"" + this.getId() + "\":\n" +
					"filterItems: " + debugSelectedFilterItems(p.filterItems) + "\n" +
					"filterKeys: " + JSON.stringify(p.filterKeys) + "\n" +
					"filterString: " + p.filterString + "\n" +
					"composed filters: " + JSON.stringify(aTableFilters)
				);
			}
		})
	});

	// init filters
	vsd7.addFilterItem(new ViewSettingsFilterItem({
		key: "myNameFilter",
		text: "Name",
		items: [
			new ViewSettingsItem({
				key: "name1",
				text: "Headphone",
				selected: true,
				customData: new CustomData({
					key: "filter",
					value: new Filter("name", FilterOperator.EQ, "Headphone")
				})
			}),
			new ViewSettingsItem({
				key: "name2",
				text: "Mousepad",
				selected: true,
				customData: new CustomData({
					key: "filter",
					value: new Filter("name", FilterOperator.EQ, "Mouse Pad")
				})
			}),
			new ViewSettingsItem({
				key: "name3",
				text: "Monitor",
				customData: new CustomData({
					key: "filter",
					value: new Filter("name", FilterOperator.EQ, "Monitor")
				})
			}),
			new ViewSettingsItem({
				key: "name4",
				text: "Backpack",
				customData: new CustomData({
					key: "filter",
					value: new Filter("name", FilterOperator.EQ, "Backpack")
				})
			}),
			new ViewSettingsItem({
				key: "name5",
				text: "Printer",
				selected: true,
				customData: new CustomData({
					key: "filter",
					value: new Filter("name", FilterOperator.EQ, "Printer")
				})
			}),
			new ViewSettingsItem({
				key: "name6",
				text: "Optic Mouse",
				selected: true,
				customData: new CustomData({
					key: "filter",
					value: new Filter("name", FilterOperator.EQ, "Optic Mouse")
				})
			}),
			new ViewSettingsItem({
				key: "name7",
				text: "Dock Station",
				customData: new CustomData({
					key: "filter",
					value: new Filter("name", FilterOperator.EQ, "Dock Station")
				})
			})
		]
	}));

	vsd7.addFilterItem(new ViewSettingsFilterItem({
		key: "myStatusFilter",
		text: "Status",
		items: [
			new ViewSettingsItem({
				key: "status1",
				text: "Approved",
				selected: true,
				customData: new CustomData({
					key: "filter",
					value: new Filter("status", FilterOperator.EQ, "A")
				})
			}),
			new ViewSettingsItem({
				key: "status2",
				text: "Open",
				selected: true,
				customData: new CustomData({
					key: "filter",
					value: new Filter("status", FilterOperator.EQ, "O")
				})
			}),
			new ViewSettingsItem({
				key: "status3",
				text: "Denied",
				selected: true,
				customData: new CustomData({
					key: "filter",
					value: new Filter("status", FilterOperator.EQ, "D")
				})
			})
		]
	}));

	vsd7.addFilterItem(new ViewSettingsFilterItem({
		key: "myValueFilter",
		text: "Value",
		multiSelect: false,
		items: [
			new ViewSettingsItem({
				key: "value1",
				text: "< 10 EUR",
				customData: new CustomData({
					key: "filter",
					value: new Filter("limit", FilterOperator.LT, 10)
				})
			}),
			new ViewSettingsItem({
				key: "value2",
				text: "10 - 30 EUR",
				customData: new CustomData({
					key: "filter",
					value: new Filter("limit", FilterOperator.BT, 10, 30)
				})
			}),
			new ViewSettingsItem({
				key: "value3",
				text: "30 - 50 EUR",
				selected: true,
				customData: new CustomData({
					key: "filter",
					value: new Filter("limit", FilterOperator.BT, 30, 50)
				})
			}),
			new ViewSettingsItem({
				key: "value4",
				text: "50 - 70 EUR",
				customData: new CustomData({
					key: "filter",
					value: new Filter("limit", FilterOperator.BT, 50, 70)
				})
			}),
			new ViewSettingsItem({
				key: "value5",
				text: "> 70 EUR",
				customData: new CustomData({
					key: "filter",
					value: new Filter("limit", FilterOperator.GT, 70)
				})
			})
		]
	}));

	// custom price control filter
	vsd7.addFilterItem(new ViewSettingsCustomItem({
		key: "myPriceFilter",
		text: "Price",
		customControl: customPriceFilter.clone(),
		customData: new CustomData({
			key: "callback",
			value: customPriceCallback // callback to add filters based on the control
		})
	}));
	vsd7.attachResetFilters(customPriceReset); // reset function to reset control when the reset button was pressed
	vsd7.attachCancel(customPriceCancel); // reset function to reset control when the cancel button was pressed

	/****************************************
	 * Connecting the table to the dialog   *
	 ****************************************/
	table.setHeaderToolbar(new Toolbar({
	   content: [
		   new Label({
			   text : "Items (5)"
		   }),
		   new ToolbarSpacer(),
		   new Button({
			   icon: "sap-icon://drop-down-list",
			   tooltip: "Drop down list",
			   press : function () {
				   MessageToast.show("Example 1: sort/group/filter with custom data meta");
				   vsd1.open();
			   }
		   }),
		   new Button({
			   icon: "sap-icon://action-settings",
			   press : function () {
				   MessageToast.show("Example 2: sort/group/filter by evaluating the item keys manually");
				   vsd2.open();
			   }
		   }),
		   new Button({
			   icon: "sap-icon://electrocardiogram",
			   tooltip: "Sort group filter without applying settings to the table",
			   press : function () {
				   MessageToast.show("Example 3: sort/group/filter without applying settings to the table");
				   vsd3.open();
			   }
		   }),
		   new Button({
			   icon: "sap-icon://sort",
			   press : function () {
				   MessageToast.show("Example 4: sort with custom data meta");
				   vsd4.open();
			   }
		   }),
		   new Button({
			   icon: "sap-icon://group-2",
			   press : function () {
				   MessageToast.show("Example 5: group with custom data meta");
				   vsd5.open();
			   }
		   }),
		   new Button({
			   icon: "sap-icon://filter",
			   press : function () {
				   MessageToast.show("Example 6: preset filters with custom data meta");
				   vsd6.open();
			   }
		   }),
		   new Button({
			   icon: "sap-icon://add-filter",
			   press : function () {
				   MessageToast.show("Example 7: standard & custom filters with custom data meta");
				   vsd7.open();
			   }
		   })
	   ]
   }));

	/****************************************
	 * page setup & debug panel             *
	 ****************************************/

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "panel", {
		configurable: "false",
		writable: "true",

		value: new Panel({
			headerText: "Debug Area",
			headerLevel: "H4",
			content: debug
		}).addStyleClass("debugPanel")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "page", {
		configurable: "false",
		writable: "true",

		value: new Page({
			title: "Table",
			enableScrolling: true,
			content: [table, panel]
		})
	});

	app.addPage(page).placeAt("body");
	return Formatter;
}, true);