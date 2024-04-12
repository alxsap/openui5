var app = new sap.m.App("myApp", {initialPage: "page1"});

//create the list
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
	}, {
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

function bindListData (data, itemTemplate, list) {
	var oModel = new sap.ui.model.json.JSONModel();
	// set the data for the model
	oModel.setData(data);
	// set the model to the list
	list.setModel(oModel);

	// bind Aggregation
	list.bindAggregation("items", "/navigation", itemTemplate);
}

bindListData(data, oItemTemplate1, oList2);
//end of the list creation

var oBeginButton = new sap.m.Button({
	text: "Modal",
	type: sap.m.ButtonType.Reject,
	press: function () {
		oPopover.setModal(!oPopover.getModal());
	}
});


var oEndButton = new sap.m.Button({
	text: "Close",
	type: sap.m.ButtonType.Accept,
	press: function () {
		oPopover.close();
	}
});

var footer = new sap.m.Bar({
	contentLeft: [new sap.m.Button({icon: "sap-icon://inspection", text: "short"})],
	contentRight: [new sap.m.Button({icon: "sap-icon://home", text: "loooooong text"})]
});

var oPopover = new sap.m.Popover("pop1", {
	placement: sap.m.PlacementType.Bottom,
	title: "Popover",
	showHeader: true,
	beginButton: oBeginButton,
	endButton: oEndButton,
	beforeOpen: function (oEvent) {
		jQuery.sap.log.info("before popover opens!!!");
	},
	afterOpen: function (oEvent) {
		jQuery.sap.log.info("popover is opened finally!!!");
	},
	beforeClose: function (oEvent) {
		jQuery.sap.log.info("before popover closes!!!");
	},
	afterClose: function (oEvent) {
		jQuery.sap.log.info("popover is closed properly!!!");
	},
	footer: footer,
	content: [
		new sap.m.Input("focusInput", {placeholder: "Search"}), oList2
	],
	initialFocus: "focusInput"
});

oPopover.setTitle("New Popover with long title");

var oPopover2 = new sap.m.Popover("pop2", {
	placement: sap.m.PlacementType.Horizontal,
	title: "Popover2",
	showHeader: true,
	subHeader: new sap.m.Bar({
		contentMiddle: [
			new sap.m.SearchField({
				placeholder: "Search ...",
				width: "100%"
			})
		]
	}),
	verticalScrolling: true,
	horizontalScrolling: false,
	content: [
		oList2.clone()
	]
});

var oPopover3 = new sap.m.Popover("pop3", {
	placement: sap.m.PlacementType.Horizontal,
	title: "Popover3",
	showHeader: true,
	verticalScrolling: false,
	horizontalScrolling: true,
	content: [
		oList2.clone()
	]
});


var oButton = new sap.m.Button("btn0", {
	text: "Popover Bottom",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Bottom);
		oPopover.openBy(this);
	}
});

oButton.addStyleClass("positioned");
var oButton1 = new sap.m.Button("btn1", {
	text: "Popover Preferred Right or Flip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredRightOrFlip);
		oPopover.openBy(this);
	}
});

oButton1.addStyleClass("positioned1");
var oButton2 = new sap.m.Button("btn2", {
	text: "Popover Left",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Left);
		oPopover.openBy(this);
	}
});

oButton2.addStyleClass("positioned2");

var oButton3 = new sap.m.Button("btn3", {
	text: "Popover Top",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Top);
		oPopover.openBy(this);
	}
});
oButton3.addStyleClass("positioned3");

var oButton4 = new sap.m.Button("btn4", {
	text: "Popover Vertical",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Vertical);
		oPopover.openBy(this);
	}
});
oButton4.addStyleClass("positioned4");

var oButton5 = new sap.m.Button("btn5", {
	text: "Popover Vertical",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Vertical);
		oPopover.openBy(this);
	}
});
oButton5.addStyleClass("positioned5");

var oButton6 = new sap.m.Button("btn6", {
	text: "Popover Horizontal",
	press: function () {
		oPopover3.openBy(this);
	}
});
oButton6.addStyleClass("positioned6");

var oButton7 = new sap.m.Button("btn7", {
	text: "Popover Horizontal",
	press: function () {
		oPopover2.openBy(this);
	}
});
oButton7.addStyleClass("positioned7");

var oButton8 = new sap.m.Button("btn8", {
	text: "Popover Auto",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Auto);
		oPopover.openBy(this);
	}
});
oButton8.addStyleClass("positioned8");

var oButton9 = new sap.m.Button("btn9", {
	text: "Popover Auto",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Auto);
		oPopover.openBy(this);
	}
});
oButton9.addStyleClass("positioned9");

var oButton10 = new sap.m.Button("btn10", {
	text: "Popover with dangers",
	press: function () {
		oPopoverSelect.openBy(this);
	}
});

var oList3 = new sap.m.List({
	inset: true,
})

bindListData(data, oItemTemplate1, oList3);

var oPopover12 = new sap.m.Popover("popover12", {
	placement: sap.m.PlacementType.Left,
	showHeader: false,
	content: [
		new sap.m.CheckBox("popover12CheckBox1",{text:"test1"}),
		new sap.m.CheckBox("popover12CheckBox2",{text:"test2"}),
		new sap.m.CheckBox("popover12CheckBox3",{text:"test3"})
	]
});

var oButton15 = new sap.m.Button("btn15", {
	text: "Popover with checkboxes",
	press: function () {
		oPopover12.openBy(this);
	}
});
oButton15.addStyleClass("positioned15");

var oSearchProvider = new sap.ui.core.search.OpenSearchProvider({
	suggestUrl: "../../../proxy/http/en.wikipedia.org/w/api.php?action=opensearch&namespace=0&search={searchTerms}",
	suggestType: "json"
});

var oPopoverSelect = new sap.m.Popover("popSelect", {
	content: [
		new sap.m.Select("selectInPopover", {
			items: [
				new sap.ui.core.Item({
					key: "0",
					text: "item 0"
				}),
				new sap.ui.core.Item({
					key: "1",
					text: "item 1"
				}),
				new sap.ui.core.Item({
					key: "2",
					text: "item 2"
				}),
				new sap.ui.core.Item({
					key: "3",
					text: "item 3"
				}),
			]
		}),
		new sap.m.Input({
			showSuggestion: true,
			placeholder: "Type here ...",
			suggest: function (oEvent) {
				var that = this;
				oSearchProvider.suggest(oEvent.getParameter("suggestValue"), function (sValue, aSuggestions) {
					if (sValue === that.getValue()) {
						that.destroySuggestionItems();
						for (var i = 0; i < aSuggestions.length; i++) {
							that.addSuggestionItem(new sap.ui.core.Item({text: aSuggestions[i]}));
						}
					}
				});
			}
		})
	],
	contentWidth: "20em",
	contentHeight: "50%"
});

var oButton16 = new sap.m.Button("btn16", {
	text: "Nested Popovers",
	press: function () {
		oPopoverNested.openBy(this);
	}
});
oButton16.addStyleClass("positioned16");

var oPopoverNested = new sap.m.Popover("popNested", {
	title: "Nested Popovers",
	placement: sap.m.PlacementType.Auto,
	content: [
		new sap.m.HBox({
			items: [
				new sap.m.Button("nestedBtn", {
					text: "Open Nested Popover",
					press: function () {
						var oPopover = new sap.m.Popover({
							title: "Description",
							placement: sap.m.PlacementType.Bottom
						});

						oPopover.addStyleClass("sapUiContentPadding");
						oPopover.addContent(new sap.m.Text({ text: "Further Descripton" }));
						oPopover.openBy(this);
					}
				}),
				new sap.m.Link("defocus", { text: "Close" })
			],
			justifyContent: sap.m.FlexJustifyContent.SpaceAround,
			alignItems: sap.m.FlexAlignItems.Center
		})
	],
	contentWidth: "20em",
	contentHeight: "20em"
});
oPopoverNested.addStyleClass("sapUiContentPadding");

var oVBox = new sap.m.VBox({
	items: [
		new sap.m.Button("with-h-with-f", {
			text: "WithH WithF",
			press: function () {
				oPopover.setShowHeader(true);
				oPopover.setFooter(footer);
				oPopover.setPlacement(sap.m.PlacementType.Right);
				oPopover.openBy(this);
			}
		}),
		new sap.m.Button("no-h-with-f", {
			text: "NoH WithF",
			press: function () {
				oPopover.setShowHeader(false);
				oPopover.setFooter(footer);
				oPopover.setPlacement(sap.m.PlacementType.Right);
				oPopover.openBy(this);
			}
		}),
		new sap.m.Button("with-h-no-f", {
			text: "WithH NoF",
			press: function () {
				oPopover.setShowHeader(true);
				oPopover.setFooter(null);
				oPopover.setPlacement(sap.m.PlacementType.Right);
				oPopover.openBy(this);
			}
		}),
		new sap.m.Button("no-h-no-f", {
			text: "NoH NoF",
			press: function () {
				oPopover.setShowHeader(false);
				oPopover.setFooter(null);
				oPopover.setPlacement(sap.m.PlacementType.Right);
				oPopover.openBy(this);
			}
		}),
		oButton10
	]
});

oVBox.addStyleClass("vbox");

var i,
	aPopoverContent = [new sap.ui.core.Item({text: "UTC - (UTC+00:00) Burkina Faso, Bouvet Islands, Cote d'Ivoire, West Sahara, Ghana, Greenland, Gambia, Guinea, Guinea-Bissau, Heard/McDon.Isl, Brit.Ind.Oc.Ter, Iceland"})];
for (i = 0; i < 40; i++) {
	aPopoverContent.push(new sap.ui.core.Item({text: "test"}));
}
var oOverflowingPopover = new sap.m.ComboBox({
	id: "overflowing-popover",
	items: aPopoverContent
});
oOverflowingPopover.addStyleClass("positioned11");

// Add a css class to the body HTML element, in order to be used for caret stylization in visual tests run.
var oCustomCssButton = new sap.m.Button ("customCssButton",{
	text: "Toggle custom CSS for visual test",
	press: function() {
		var $body = jQuery("body");

		$body.toggleClass("customClassForVisualTests");
	}
});
var page1 = new sap.m.Page("page1", {
	headerContent: [
		new sap.m.CheckBox("customWithin", {
			text: "Custom Within",
			selected : false,
			select : function(event) {
				var oWithin = document.getElementById("within");

				if (event.getParameter("selected")) {
					oWithin.style.display = "block";
					sap.ui.core.Popup.setWithinArea(oWithin);
				} else {
					oWithin.style.display = "none";
					sap.ui.core.Popup.setWithinArea(null);
				}
			}
		}).addStyleClass("sapUiSmallMarginEnd"),
		new sap.m.Title({
			text: "sap.m.Popover"
		}),
		new sap.m.ToolbarSpacer({
			width: "600px"
		}),
		oCustomCssButton,
	],
	content: [
		oButton, oButton1, oButton2, oButton3, oButton4, oButton5, oButton6, oOverflowingPopover, oButton7, oButton8, oButton9, oVBox, oButton15, oButton16
	]
});

app.addPage(page1);
app.placeAt("div");