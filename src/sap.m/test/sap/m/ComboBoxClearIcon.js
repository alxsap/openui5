var app = new sap.m.App("myApp");

var fnChange = function (event) {
	console.log("change: ", event.getParameter("value"));
};

// Add a css class to the body HTML element, in order to be used for caret stylization in visual tests run.
var oCustomCssButton = new sap.m.Button ("customCssButton",{
	text: "Toggle custom CSS for visual test",
	press: function() {
		var $body = jQuery("body");

		$body.toggleClass("customClassForVisualTests");
	}
});

var page1 = new sap.m.Page("page1", {
	title: "Mobile ComboBoxes Control",
	content: [
		new sap.ui.layout.VerticalLayout("oVL", {
			width: "100%",
			content: [
				oCustomCssButton,

				new sap.m.Text({ text: "---------- ComboBox --------------" }),

				new sap.m.ComboBox({
					placeholder: "No initial value, no items",
					value: "",
					showClearIcon: true,
					change: fnChange,
					width: "100%",
				}),

				new sap.m.ComboBox({
					placeholder: "Specified width",
					value: "",
					showClearIcon: true,
					change: fnChange,
					width: "300px",
				}),

				new sap.m.ComboBox({
					placeholder: "No specified width",
					value: "",
					showClearIcon: true,
					change: fnChange,
				}),

				new sap.m.ComboBox({
					placeholder: "No initial value, with items",
					showClearIcon: true,
					width: "100%",
					items: [
						new sap.ui.core.Item({
							text: "Albania",
							key: "AL"
						}),
						new sap.ui.core.Item({
							text: "Bulgaria",
							key: "BG"
						}),
						new sap.ui.core.Item({
							text: "Germany",
							key: "DE"
						}),
						new sap.ui.core.Item({
							text: "Dryanovo",
							key: "DR"
						}),
						new sap.ui.core.Item({
							text: "Gabrovo",
							key: "GB"
						})
					],
					change: fnChange
				}),

				new sap.m.ComboBox({
					value: "Not editable with value",
					showClearIcon: true,
					editable: false,
					width: "100%",
					items: [
						new sap.ui.core.Item({
							text: "Albania",
							key: "AL"
						}),
						new sap.ui.core.Item({
							text: "Bulgaria",
							key: "BG"
						}),
						new sap.ui.core.Item({
							text: "Germany",
							key: "DE"
						}),
						new sap.ui.core.Item({
							text: "Dryanovo",
							key: "DR"
						}),
						new sap.ui.core.Item({
							text: "Gabrovo",
							key: "GB"
						})
					],
					change: fnChange
				}),

				new sap.m.ComboBox({
					placeholder: "Initial value, with items",
					value: "Bulgaria",
					selectedKey: "BG",
					showClearIcon: true,
					width: "100%",
					items: [
						new sap.ui.core.Item({
							text: "Albania",
							key: "AL"
						}),
						new sap.ui.core.Item({
							text: "Bulgaria",
							key: "BG"
						}),
						new sap.ui.core.Item({
							text: "Germany",
							key: "DE"
						}),
						new sap.ui.core.Item({
							text: "Dryanovo",
							key: "DR"
						}),
						new sap.ui.core.Item({
							text: "Gabrovo",
							key: "GB"
						})
					],
					change: fnChange
				}),

				new sap.m.Text({ text: "---------- MultiComboBox --------------" }),

				new sap.m.MultiComboBox({
					placeholder: "No items no clear Icon",
					showClearIcon: false,
				}),

				new sap.m.MultiComboBox({
					placeholder: "No items with clear Icon",
					showClearIcon: true,
				}),

				new sap.m.MultiComboBox({
					placeholder: "Not editable with clear Icon",
					showClearIcon: true,
					editable: false
				}),

				new sap.m.MultiComboBox({
					placeholder: "Items with clear icon",
					showClearIcon: true,
					items: [
						new sap.ui.core.Item({
							text: "Albania",
							key: "AL"
						}),
						new sap.ui.core.Item({
							text: "Bulgaria",
							key: "BG"
						}),
						new sap.ui.core.Item({
							text: "Germany",
							key: "DE"
						}),
						new sap.ui.core.Item({
							text: "Dryanovo",
							key: "DR"
						}),
						new sap.ui.core.Item({
							text: "Gabrovo",
							key: "GB"
						})
					],
					change: fnChange
				}),
				new sap.m.MultiComboBox({
					placeholder: "Preselected item and clear icon",
					showClearIcon: true,
					selectedKeys: ["BG"],
					items: [
						new sap.ui.core.Item({
							text: "Albania",
							key: "AL"
						}),
						new sap.ui.core.Item({
							text: "Bulgaria",
							key: "BG"
						}),
						new sap.ui.core.Item({
							text: "Germany",
							key: "DE"
						}),
						new sap.ui.core.Item({
							text: "Dryanovo",
							key: "DR"
						}),
						new sap.ui.core.Item({
							text: "Gabrovo",
							key: "GB"
						})
					],
					change: fnChange
				}),
				new sap.m.MultiComboBox({
					placeholder: "Item, value and clear icon",
					showClearIcon: true,
					selectedKeys: ["BG"],
					value: "Dryanovo",
					items: [
						new sap.ui.core.Item({
							text: "Albania",
							key: "AL"
						}),
						new sap.ui.core.Item({
							text: "Bulgaria",
							key: "BG"
						}),
						new sap.ui.core.Item({
							text: "Germany",
							key: "DE"
						}),
						new sap.ui.core.Item({
							text: "Dryanovo",
							key: "DR"
						}),
						new sap.ui.core.Item({
							text: "Gabrovo",
							key: "GB"
						})
					],
					change: fnChange
				}),
				new sap.m.MultiComboBox({
					placeholder: "Item, value, clear icon and selectAll item",
					showClearIcon: true,
					showSelectAll: true,
					selectedKeys: ["BG"],
					value: "Dryanovo",
					items: [
						new sap.ui.core.Item({
							text: "Albania",
							key: "AL"
						}),
						new sap.ui.core.Item({
							text: "Bulgaria",
							key: "BG"
						}),
						new sap.ui.core.Item({
							text: "Germany",
							key: "DE"
						}),
						new sap.ui.core.Item({
							text: "Dryanovo",
							key: "DR"
						}),
						new sap.ui.core.Item({
							text: "Gabrovo",
							key: "GB"
						})
					],
					change: fnChange
				}),
			]
		}).addStyleClass("sapUiContentPadding")
	],
});

app.addPage(page1);
app.placeAt("body");