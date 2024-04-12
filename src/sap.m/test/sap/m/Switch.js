var oSwitch = new sap.m.Switch({
	id: "switch_regular",
	change: function(oControlEvent) {
		jQuery.sap.log.info("Event fired: 'change' state property " + this.getState() + " on", this);
	}
});

var oLabel = new sap.m.Label({
	text: "Airplane Mode",
	labelFor: oSwitch
}).addStyleClass("customLabel");

var oSwitchDisabled = new sap.m.Switch({
	id: "switch_disabled",
	enabled: false
});

var oSwitchNoText = new sap.m.Switch({
	id: "switch_notext",
	customTextOn: " ",
	customTextOff: " ",
});

var oSwitchAcceptReject = new sap.m.Switch({
	id: "switch_semantic",
	state: true,
	type: sap.m.SwitchType.AcceptReject
});

var oSwitchAcceptRejectLabelled = new sap.m.Switch({
	state: false,
	type: sap.m.SwitchType.AcceptReject
});

var oLabelAcceptReject = new sap.m.Label({
	text: "You agree, that we may use cookies",
	labelFor: oSwitchAcceptRejectLabelled
}).addStyleClass("customLabel");

var oVLayout = new sap.ui.layout.VerticalLayout("switch_page", {
	content: [
		new sap.ui.core.HTML({ content: "<h3>Default</h3>" }),
		oLabel,
		oSwitch,
		new sap.ui.core.HTML({ content: "<hr>" }),

		new sap.ui.core.HTML({ content: "<h3>Disabled</h3>" }),
		oSwitchDisabled,
		new sap.ui.core.HTML({ content: "<hr>" }),

		new sap.ui.core.HTML({ content: "<h3>No text</h3>" }),
		oSwitchNoText,
		new sap.ui.core.HTML({ content: "<hr>" }),

		new sap.ui.core.HTML({ content: "<h3>Semantic</h3>" }),
		oSwitchAcceptReject,
		new sap.ui.core.HTML({ content: "<hr>" }),

		new sap.ui.core.HTML({ content: "<h3>Semantic with label</h3>" }),
		oLabelAcceptReject,
		oSwitchAcceptRejectLabelled,
		new sap.ui.core.HTML({ content: "<hr>" })
	]
});

var oVLayout2 = new sap.m.VBox("switch_page2", {
	renderType: "Bare",
	items:[
		new sap.ui.core.HTML({ content: "<h3>In VBox with renderType Bare </h3>" }),
		new sap.m.Switch({
			id: "switch_vbox",
			change: function(oControlEvent) {
				jQuery.sap.log.info("Event fired: 'change' state property " + this.getState() + " on", this);
			}
		}),
		new sap.ui.core.HTML({ content: "<hr>" })
	]
});

new sap.m.App().addPage(new sap.m.Page({
	title: "sap.m.Switch",
	content: [
		oVLayout,
		oVLayout2
	]
}).addStyleClass("sapUiContentPadding")).placeAt("body");