var mockMarkupDescription = "<h2>Heading h2</h2><script>alert('this JS will be sanitized')<\/script>" +
		"<p>Paragraph. At vero eos et accusamus et iusto odio dignissimos ducimus qui ...</p>" +
		"<ul>" +
		"	<li>Unordered list item 1 <a href=\"http://sap.com/some/url\">Absolute URL</a></li>" +
		"	<li>Unordered list item 2</li>" +
		"</ul>" +
		"<ol>" +
		"	<li>Ordered list item 1 <a href=\"/testsuite/test-resources/sap/m/MessageView.html?this_should_be_opened_in_new_page\">Relative URL</a></li>" +
		"	<li>Ordered list item 2</li>" +
		"</ol>";

var aMockMessages = {
	count: 6,
	messages: [{
		type: "Error",
		title: "Error message",
		description: "First Error message description",
		active: true
	}, {
		type: "Warning",
		title: "Warning without description",
		description: ""
	}, {
		type: "Success",
		title: "Success message",
		description: "First Success message description"
	}, {
		type: "Error",
		title: "Error",
		description: "Second Error message description"
	}, {
		type: "Information",
		title: "Information message (Long)",
		description: mockMarkupDescription,
		markupDescription: true
	}, {
		type: "Information",
		title: "Information message (Long) 2",
		description: "Just some text description",
		longtextUrl: "./SampleHTML.html",
		active: true
	}, {
		type: "Information",
		title: "Information message (Long Title) - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.",
		description: "Just some text description",
		longtextUrl: "./SampleHTML.html",
		active: true
	}],
	reducedSet: [{
		type: "Error",
		title: "Error message",
		description: "First Error message description"
	}],
	singleTypeSet: [{
		type: "Error",
		title: "Error Message 1",
		description: "First Error message description"

	}, {
		type: "Error",
		title: "Error Message 2",
		description: "Second Error message description"
	}, {
		type: "Error",
		title: "Error Message 3",
		description: "Third Error message description"
	}],
	messages2: [
		{
			type: 'Error',
			title: 'Product SZ_FT01 already assigned to distribution center 1015',
			description: '',
			subtitle: 'Example of subtitle',
			counter: 1
		}, {
			type: 'Error',
			title: 'Product AG_CZ_1 already assigned to distribution center 1015',
			description: '',
			subtitle: 'Example of subtitle',
			counter: 1
		}
	]
};

var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(aMockMessages);

var oMessageTemplate = new sap.m.MessageItem({
	type: "{type}",
	title: "{title}",
	description: "{description}",
	longtextUrl: "{longtextUrl}",
	markupDescription: "{markupDescription}",
	activeTitle: "{active}"
});

var oMessageViewDialog = new sap.m.MessageView("mMView1", {
	items: {
		path: "/messages",
		template: oMessageTemplate
	},
	asyncURLHandler: function (config) {
		// put async validation here
		setTimeout(function () {
			console.log('validate this url', config.url);

			// simulated answer from URL validator service: relative URLs are fine
			var allowed = config.url.lastIndexOf("http", 0) < 0;

			config.promise.resolve({
				allowed: allowed,
				id: config.id
			});

		}, 1000 + 4000 * Math.random());
	}
});

var oMessageViewDialog2 = new sap.m.MessageView("mMViewDialog", {
	items: {
		path: "/messages2",
		template: oMessageTemplate
	}
});

var oMessageViewPage = new sap.m.MessageView("mMView2", {
	activeTitlePress: function () {
		alert('navigate');
	},
	items: {
		path: "/messages",
		template: oMessageTemplate
	},
	asyncURLHandler: function (config) {
		// put async validation here
		setTimeout(function () {
			console.log('validate this url', config.url);

			// simulated answer from URL validator service: relative URLs are fine
			var allowed = config.url.lastIndexOf("http", 0) < 0;

			config.promise.resolve({
				allowed: allowed,
				id: config.id
			});

		}, 1000 + 4000 * Math.random());
	}
});

var oMessageViewPopover = new sap.m.MessageView("mMView3", {
	items: {
		path: "/messages",
		template: oMessageTemplate
	},
	asyncURLHandler: function (config) {
		// put async validation here
		setTimeout(function () {
			console.log('validate this url', config.url);

			// simulated answer from URL validator service: relative URLs are fine
			var allowed = config.url.lastIndexOf("http", 0) < 0;

			config.promise.resolve({
				allowed: allowed,
				id: config.id
			});

		}, 1000 + 4000 * Math.random());
	}
});

var oMessageViewPopoverWithOneItem = new sap.m.MessageView("mMView4", {
	items: {
		path: "/reducedSet",
		template: oMessageTemplate
	}
});

var oMessageViewDialogWithOneHeader = new sap.m.MessageView("mMView5", {
	showDetailsPageHeader: false,
	itemSelect: function () {
		_oBackButton.setVisible(true);
	},
	items: [
		new sap.m.MessageItem("mv-item1", {
			type: "Error",
			title: "Error message",
			description: "First Error message description"
		})]
});

var oMessageViewPopoverWithOneItemType = new sap.m.MessageView("mMView6", {
	items: {
		path: "/singleTypeSet",
		template: oMessageTemplate
	}
});

var _oBackButton = new sap.m.Button("mMView5-back", {
	icon: sap.ui.core.IconPool.getIconURI("nav-back"),
	visible: false,
	press: function () {
		oMessageViewDialogWithOneHeader.navigateBack();
		this.setVisible(false);
	}
});

var oMessageViewWithHeader = new sap.m.MessageView("mMView7", {
	items: {
		path: "/singleTypeSet",
		template: oMessageTemplate
	},
	headerButton: new sap.m.Button("CloseButton2", {

		text: "Close"
	}),
});

// Dialog will have no padding because of compatVersion setting on main script
var oDialog1 = new sap.m.Dialog({
	content: oMessageViewDialog,
	showHeader: false,
	beginButton: new sap.m.Button("dialogCloseButton", {
		press: function () {
			oDialog1.close();
		},
		text: "Close"
	}),
	contentHeight: "440px",
	contentWidth: "640px",
	verticalScrolling: false
});

var oDialog2 = new sap.m.Dialog({
	type: "Message",
	content: oMessageViewDialog2,
	showHeader: true,
	beginButton: new sap.m.Button("dialogCloseButton2", {
		press: function () {
			oDialog2.close();
		},
		text: "Close"
	}),
	horizontalScrolling: false,
	contentHeight: "440px",
	contentWidth: "440px",
	verticalScrolling: false
}).addStyleClass("sapUiNoContentPadding");

var page1 = new sap.m.Page("page1", {
	content: [
		new sap.m.Button('mView-in-dialog-btn', {
			text: "MessageView in Dialog",
			press: function () {
				oDialog1.open();
			}
		}),
		new sap.m.Button('mView-in-dialog-btn-2', {
			text: "MV in Dialog with hidden details header",
			press: function () {
				oDialogWithOneHeader.open();
			}
		}),

		new sap.m.Button("mViewButton4", {
			icon: sap.ui.core.IconPool.getIconURI("add"),
			text: "Add Warning",
			type: sap.m.ButtonType.Emphasized,
			press: function () {
				var oWarn = new sap.m.MessageItem("mi-item1", {
					type: "Warning",
					title: "Warning message",
					description: "Added Warning message description"
				});
				oMessageViewPopoverWithOneItemType.addItem(oWarn);
			}
		}),

		new sap.m.Button("mViewButton5", {
			icon: sap.ui.core.IconPool.getIconURI("delete"),
			text: " Remove Close button",
			type: sap.m.ButtonType.Emphasized,
			press: function () {
				oMessageViewWithHeader.destroyHeaderButton();
			}
		}),

		new sap.m.Button('mView-in-dialog-btn-3', {
			text: "MV in Dialog with truncatable items",
			press: function () {
				oDialog2.open();
			}
		}),
	]
});

page1.addDependent(oDialog1);
page1.addDependent(oDialog2);
page1.addDependent(oDialogWithOneHeader);
page1.addDependent(oMessageViewWithHeader);
page1.addDependent(oMessageViewPopoverWithOneItemType);

var headerButton = new sap.m.Button({text: "Clear"});

//list.bindAggregation("items", "/", oMessageTemplate);
var oMessagePopover = new sap.m.MessagePopover("mPopover", {
	items: {
		path: "/messages",
		template: oMessageTemplate
	},
	headerButton: headerButton,
	asyncURLHandler: function (config) {
		// put async validation here
		setTimeout(function () {
			console.log('validate this url', config.url);

			// simulated answer from URL validator service: relative URLs are fine
			var allowed = config.url.lastIndexOf("http", 0) < 0;

			config.promise.resolve({
				allowed: allowed,
				id: config.id
			});

		}, 1000 + 4000 * Math.random());
	}
});

var oPopover = new sap.m.Popover("pop1", {
	placement: sap.m.PlacementType.Top,
	title: "Popover with MessageView",
	showHeader: true,
	contentWidth: "440px",
	contentHeight: "440px",
	verticalScrolling: false,
	content: [
		oMessageViewPopover
	]
});

var oPopoverWithOneItem = new sap.m.Popover("pop2", {
	placement: sap.m.PlacementType.Top,
	title: "Popover with MessageView",
	showHeader: true,
	endButton: new sap.m.Button("closeBtn", {
		text: "Close",
		press: function () {
			oPopoverWithOneItem.close();
		}
	}),
	modal: true,
	contentWidth: "440px",
	contentHeight: "440px",
	verticalScrolling: false,
	content: [
		oMessageViewPopoverWithOneItem
	]
});

var oPopoverWithOneItemType = new sap.m.Popover("pop3", {
	placement: sap.m.PlacementType.Top,
	title: "Popover with MessageView",
	showHeader: true,
	endButton: new sap.m.Button("customClose", {
		text: "Close",
		press: function () {
			oPopoverWithOneItemType.close();
		}
	}),
	modal: false,
	contentWidth: "440px",
	contentHeight: "440px",
	verticalScrolling: false,
	content: [
		oMessageViewPopoverWithOneItemType
	]
});

var oPopoverWithHeader = new sap.m.Popover("pop4", {
	placement: sap.m.PlacementType.Top,
	title: "Popover with MessageView",
	showHeader: true,
	modal: false,
	contentWidth: "440px",
	contentHeight: "440px",
	verticalScrolling: false,
	content: [
		oMessageViewWithHeader
	]
});

var oCollapsedPopover = new sap.m.MessagePopover("mPop", {
	initiallyExpanded: false,
	items: [new sap.m.MessageItem({
		type: "Error",
		title: "Error Message 1",
		description: "First Error message description"

	}), new sap.m.MessageItem({
		type: "Error",
		title: "Error Message 2",
		description: "Second Error message description"
	}), new sap.m.MessageItem({
		type: "Error",
		title: "Error Message 3",
		description: "Third Error message description"
	})]
});

var oDialogWithOneHeader = new sap.m.Dialog("dialog2", {
	title: "Dialog with MessageView",
	content: oMessageViewDialogWithOneHeader,
	resizable: true,
	state: 'Error',
	beginButton: new sap.m.Button("dialogWOneHeader-close-btn", {
		press: function () {
			oDialogWithOneHeader.close();
		},
		text: "Close"
	}),
	customHeader: new sap.m.Bar({
		contentMiddle: [
			new sap.m.Text({text: "Error"})
		],
		contentLeft: [_oBackButton]
	}),
	contentHeight: "300px",
	contentWidth: "500px",
	verticalScrolling: false
});

var oMessagePopoverButton = new sap.m.Button("mPopoverButton", {
	icon: sap.ui.core.IconPool.getIconURI("message-popup"),
	text: "MessagePopover",
	layoutData: [new sap.m.OverflowToolbarLayoutData({
		closeOverflowOnInteraction: false,
	})],
	type: sap.m.ButtonType.Emphasized,
	press: function () {
		oMessagePopover.toggle(this);
	}
});

var oMessageViewPopoverButton = new sap.m.Button("mViewButton", {
	icon: sap.ui.core.IconPool.getIconURI("message-popup"),
	text: "MV in Popover",
	layoutData: [new sap.m.OverflowToolbarLayoutData({
		closeOverflowOnInteraction: false,
	})],
	type: sap.m.ButtonType.Emphasized,
	press: function () {
		oPopover.openBy(this);
	}
});

var oMessageViewPopoverButton2 = new sap.m.Button("mViewButton2", {
	icon: sap.ui.core.IconPool.getIconURI("message-popup"),
	text: "MV - one item",
	layoutData: [new sap.m.OverflowToolbarLayoutData({
		closeOverflowOnInteraction: false,
	})],
	type: sap.m.ButtonType.Emphasized,
	press: function () {
		oPopoverWithOneItem.openBy(this);
	}
});

var oMessageViewPopoverButton3 = new sap.m.Button("mViewButton3", {
	icon: sap.ui.core.IconPool.getIconURI("message-popup"),
	text: "MV - one type",
	layoutData: [new sap.m.OverflowToolbarLayoutData({
		closeOverflowOnInteraction: false,
	})],
	type: sap.m.ButtonType.Emphasized,
	press: function () {
		oPopoverWithOneItemType.openBy(this);
	}
});

var oMessageViewPopoverButton4 = new sap.m.Button("mViewButton6", {
	icon: sap.ui.core.IconPool.getIconURI("message-popup"),
	text: "Custom button MV",
	type: sap.m.ButtonType.Emphasized,
	layoutData: [new sap.m.OverflowToolbarLayoutData({
		closeOverflowOnInteraction: false,
	})],
	press: function () {
		oPopoverWithHeader.openBy(this);
	}
});

var oMessageViewPopoverButton5 = new sap.m.Button("mViewButton7", {
	icon: sap.ui.core.IconPool.getIconURI("message-popup"),
	text: "Collapsed MP",
	type: sap.m.ButtonType.Emphasized,
	layoutData: [new sap.m.OverflowToolbarLayoutData({
		closeOverflowOnInteraction: false,
	})],
	press: function () {
		oCollapsedPopover.openBy(this);
	}
});

oMessagePopoverButton.addDependent(oMessagePopover);
oMessageViewPopoverButton.addDependent(oPopover);
oMessageViewPopoverButton2.addDependent(oPopoverWithOneItem);
oMessageViewPopoverButton3.addDependent(oPopoverWithOneItemType);
oMessageViewPopoverButton4.addDependent(oPopoverWithHeader);
oMessageViewPopoverButton4.addDependent(oCollapsedPopover);


var page2 = new sap.m.Page("page2", {
	headerContent: new sap.m.Toolbar({
		content: [
			new sap.m.ToolbarSpacer(),
			new sap.m.CheckBox("compactMode", {
				selected: false,
				text: "Compact mode",
				select: function () {
					jQuery("body").toggleClass("sapUiSizeCompact");
				}
			})]
	}),
	content: [
		oMessageViewPage
	],
	footer: new sap.m.OverflowToolbar({
		id: "overflow-tb",
		content: [
			new sap.m.ToolbarSpacer(),
			oMessagePopoverButton,
			oMessageViewPopoverButton,
			oMessageViewPopoverButton2,
			oMessageViewPopoverButton3,
			oMessageViewPopoverButton4,
			oMessageViewPopoverButton5,
			new sap.m.ToolbarSpacer()
		]
	})
});

var oSplitApp = new sap.m.SplitApp({
	id: "split-app",
	masterPages: [page1],
	initialMaster: "page1",

	detailPages: [page2],
	initialDetail: "page2"
});

oSplitApp.setModel(oModel);
oSplitApp.placeAt("content");