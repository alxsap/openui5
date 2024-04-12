var fnCreateLine = function(id, context) {
	return new sap.m.SelectionDetailsItemLine(id, {
		label: "{label}",
		value: "{value}",
		displayValue: "{displayValue}",
		unit: "{unit}"
	});
};

var fnCreateAction = function(id, context) {
	return new sap.ui.core.Item({
		text: "{text}"
	});
};

var aItems = [
	new sap.m.SelectionDetailsItem({
		lines: {
			path: "/lines/0",
			factory: fnCreateLine
		},
		actions: {
			path: "/actions/0",
			factory: fnCreateAction
		},
		enableNav: true
	}),
	new sap.m.SelectionDetailsItem({
		lines: {
			path: "/lines/1",
			factory: fnCreateLine
		},
		actions: {
			path: "/actions/1",
			factory: fnCreateAction
		},
		enableNav: false
	})
];

var oModel = new sap.ui.model.json.JSONModel({
	lines: [
		[
			{
				label: "Company Name",
				value: "Cabbage Corp"
			}, {
				label: "Product Category",
				value: "Cabbages"
			}, {
				label: "Date",
				displayValue: new Date().toLocaleString()
			}
		], [
			{
				label: "Company Name",
				value: "Future Industries"
			}, {
				label: "Product Category",
				value: "Satomobiles"
			}, {
				label: "Price",
				value: "10,000.00",
				unit: "Yuons"
			}
		]
	],
	actions: [[{
		text: "Item action 1"
	}, {
		text: "Item action 2"
	}],
	[{
		text: "Item action 1"
	}, {
		text: "Item action 2"
	}, {
		text: "Item action 3"
	}]]
});

var oNavContainer;

var fnNavigateToDetails = function() {
	oNavContainer.to("detailsPage");
};
var fnNavigateBack = function() {
	oNavContainer.back();
};
var fnActionPress = function(oEvent) {
	sap.m.MessageToast.show(oEvent.getParameter("action").getText() + "\n is pressed on " + oEvent.getParameter("items")[0].getId());
};

var oList = new sap.m.List(),
	oListItem;
for (var i = 0; i < aItems.length; i++) {
	oListItem = aItems[i].setModel(oModel)._getListItem();

	oListItem.attachPress(fnNavigateToDetails);
	oListItem._getParentElement().attachEvent("_actionPress", fnActionPress, this);

	oList.addItem(oListItem);
}

var oPage = new sap.m.Page({
	showHeader: false,
	content: [
		oList
	]
});

var oPageDetails = new sap.m.Page("detailsPage", {
	showHeader: false,
	content: []
});

oNavContainer = new sap.m.NavContainer({
	pages: [ oPage, oPageDetails ]
});

var oApp = new sap.m.App({
	pages: new sap.m.Page({
		title: "Selection Details Items",
		content: [ oNavContainer ],
		showNavButton: true,
		navButtonPress: fnNavigateBack
	})
});
oApp.placeAt("content");

//set the contrast class for belize plus
if (null.getTheme()/*Not inside AMD call*/ === "sap_belize_plus") {
	oApp.addStyleClass("sapContrastPlus");
}