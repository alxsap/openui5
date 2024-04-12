var app = new sap.m.App("myApp", {initialPage: "page1"});

var oList2 = new sap.m.List({
	inset: true
});

var data = {
	navigation: [{
		title: "Travel Expend",
		description: "Access the travel expend workflow",
		icon: "images/travel_expend.png",
		iconInset: false,
		type: "Navigation",
		press: 'detailPage'
	}, {
		title: "Travel and expense report",
		description: "Access travel and expense reports",
		icon: "images/travel_expense_report.png",
		iconInset: false,
		type: "Navigation",
		press: 'detailPage'
	}, {
		title: "Travel Request",
		description: "Access the travel request workflow",
		icon: "images/travel_request.png",
		iconInset: false,
		type: "Navigation",
		press: 'detailPage'
	}, {
		title: "Work Accidents",
		description: "Report your work accidents",
		icon: "images/wounds_doc.png",
		iconInset: false,
		type: "Navigation",
		press: 'detailPage'
	}, {
		title: "Travel Settings",
		description: "Change your travel worflow settings",
		icon: "images/settings.png",
		iconInset: false,
		type: "Navigation",
		press: 'detailPage'
	}]
};

var oItemTemplate1 = new sap.m.StandardListItem({
	title: "{title}",
	description: "{description}",
	icon: "{icon}",
	iconInset: "{iconInset}",
	type: "{type}"
});

function bindListData(data, itemTemplate, list) {
	var oModel = new sap.ui.model.json.JSONModel();
	// set the data for the model
	oModel.setData(data);
	// set the model to the list
	list.setModel(oModel);

	// bind Aggregation
	list.bindAggregation("items", "/navigation", itemTemplate);
}

bindListData(data, oItemTemplate1, oList2)

var oActionSheet = new sap.m.ActionSheet("actionSheet1", {
	showCancelButton: false,
	buttons: [
		new sap.m.Button('actionSheetButton',{
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		})
	],
	placement: sap.m.PlacementType.Bottom,
	cancelButtonPress: function () {
		jQuery.sap.log.info("sap.m.ActionSheet: cancelButton is pressed");
	}
});

var oActionSheetWithManyButtons = new sap.m.ActionSheet("actionSheet2", {
	showCancelButton: false,
	buttons: [
		new sap.m.Button('actionSheetWithManyButtonsButton',{
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),

		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),

		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://accept",
			text: "Accept Action"
		}),
		new sap.m.Button({
			icon: "sap-icon://decline",
			text: "Reject Action"
		}),
		new sap.m.Button({
			text: "Default Action"
		})
	
	],
	placement: sap.m.PlacementType.Bottom,
	cancelButtonPress: function () {
		jQuery.sap.log.info("sap.m.ActionSheet: cancelButton is pressed");
	}
});

var oActionSheetWithoutIcons = new sap.m.ActionSheet('actionSheet3',{
	buttons: [
		new sap.m.Button("specialButton",{
			icon: "sap-icon://decline",
			visible: false,
			text: "First button"
		}),
		new sap.m.Button("actionSheetWithoutIconsButton",{
			text: "Second button"
		}),
		new sap.m.Button({
			text: "Third Button"
		}),
		new sap.m.Button({
			text: "Fourth button"
		})
	]
});

var page1 = new sap.m.Page("page1", {
	title: "Mobile ActionSheet Control",
	content: [
		new sap.m.Button('noTitleNoCancel',{
			text: "No Title, No Cancel",
			press: function () {
				oActionSheet.setTitle(null);
				oActionSheet.setShowCancelButton(false);
				oActionSheet.openBy(this);
			}
		}).addStyleClass("newButton"),
		new sap.m.Button('noTitleWithCancel',{
			text: "No Title, With Cancel",
			press: function () {
				oActionSheet.setTitle(null);
				oActionSheet.setShowCancelButton(true);
				oActionSheet.openBy(this);
			}
		}).addStyleClass("newButton"),
		new sap.m.Button('withTitleAndCancel',{
			text: "With Title and Cancel",
			press: function () {
				oActionSheet.setTitle("Please choose one action");
				oActionSheet.setShowCancelButton(true);
				oActionSheet.openBy(this);
			}
		}).addStyleClass("newButton"),
		new sap.m.Button('withManyButtons',{
			text: "With Many Buttons",
			press: function () {
				oActionSheetWithManyButtons.setTitle("Please choose one action");
				oActionSheetWithManyButtons.setShowCancelButton(true);
				oActionSheetWithManyButtons.openBy(this);
			}
		}).addStyleClass("newButton"),
		new sap.m.Button('withoutIcons',{
			text: "Without icons",
			press: function () {
				oActionSheetWithoutIcons.openBy(this);
			}
		}),
		oList2
	],
	footer: new sap.m.Bar({
		contentRight: new sap.m.Button({
			icon: "sap-icon://manager",
			press: function () {
				oActionSheet.setPlacement(sap.m.PlacementType.Vertical);
				oActionSheet.setShowCancelButton(true);
				oActionSheet.openBy(this);
			}
		})
	})
});

app.addPage(page1).placeAt("content");