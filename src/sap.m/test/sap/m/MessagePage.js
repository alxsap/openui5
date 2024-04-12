/**
 * @deprecated since version 1.112
 */
(function () {
	var fnBackToMaster = function () {
		sap.ui.getCore().byId("splitApp")/*Not inside AMD call*/.toMaster("master"); // the menu is the master part
	};
	// Simple MessagePage
	var oMessagePage = new sap.m.MessagePage("messagePage", {
		title: "Opportunity",
		text: "No Items are present",
		description: "Description",
		customDescription: new sap.m.Link({text: "Custom Description", href: "http://go.sap.com/index.html"}),
		showNavButton: true,
		navButtonPress: fnBackToMaster
	});

	var oPageWithMessagePage = new sap.m.Page("pageWithMessagePage", {
		title: "Detail",
		content: new sap.m.MessagePage({title: "Opportunity", showNavButton: true, navButtonPress: fnBackToMaster})
	});

	var oMessagePageWithButtons = new sap.m.MessagePage("pageWithButtons", {
		title: "Warning",
		showNavButton: true,
		text: "Warning",
		enableFormattedText: true,
		description: "This page might not behave as expected because Windows Internet Explorer " +
			"isn't <em><u>configured to load unsigned</u></em> <a href='#' target='_self'>ActiveX</a> controls.Allow this page to install an unsigned " +
			"ActiveX Control? <em><strong>Doing so from untrusted sources</strong> may harm your computer.</em> " +
			"<a href='#' target='_self'>Learn more</a><ul><li>Your current security settings prohibit running ActiveX controls on this page, or</li>" +
			"<li>You have blocked a publisher of one of the controls.</li><li>Learn about ActiveX <a href='#' target='_self'>here</a>.</li></ul>",
		icon: "sap-icon://warning",
		buttons: [
			new sap.m.Button({text: "Change security settings"}),
			new sap.m.Button({text: "Reload page"}),
			new sap.m.Button({icon: "sap-icon://sap-ui5", tooltip: "Icon only"}),
			new sap.m.Button({icon: "sap-icon://sap-ui5", text: "Text with Icon"})
		],
		navButtonPress: fnBackToMaster
	});

	var oNavContainer = new sap.m.NavContainer("navContainer", {
		pages: [
			new sap.m.MessagePage({
				title: "Opportunity1",
				showNavButton: true,
				navButtonPress: fnBackToMaster,
				customText: new sap.m.Link({
					text: "MessagePage inside NavContainer",
					href: "http://go.sap.com/index.html"
				})
			})]
	});

	var oMasterPage = new sap.m.Page("master", {
		title: "Master",
		icon: "images/SAPUI5.jpg",
		content: [
			new sap.m.List({
				items: [
					new sap.m.StandardListItem("SLItem1", {
						title: "Just the message page",
						type: "Navigation",
						press: function () {
							oSplitApp.toDetail("messagePage");
						}
					}),
					new sap.m.StandardListItem("SLItem2", {
						title: "Page with message page",
						type: "Navigation",
						press: function () {
							oSplitApp.toDetail("pageWithMessagePage");
						}
					}),
					new sap.m.StandardListItem("SLItem3", {
						title: "Nav container with message page",
						type: "Navigation",
						press: function () {
							oSplitApp.toDetail("navContainer");
						}
					}),
					new sap.m.StandardListItem("SLItem4", {
						title: "Page with buttons and formatted text",
						type: "Navigation",
						press: function () {
							oSplitApp.toDetail("pageWithButtons");
						}
					}),
					new sap.m.StandardListItem("SLItem5", {
						title: "Toggle Compact Mode",
						type: "Navigation",
						press: function () {
							oSplitApp.toDetail("messagePage");
							jQuery('body').toggleClass('sapUiSizeCompact');
						}
					})
				]
			})]
	});

	var oSplitApp = new sap.m.SplitApp("splitApp", {
		detailPages: [oMessagePage, oPageWithMessagePage, oNavContainer, oMessagePageWithButtons],
		masterPages: [oMasterPage],
		initialDetail: "messagePage",
		initialMaster: "master"
	});

	oSplitApp.placeAt('content');
}());