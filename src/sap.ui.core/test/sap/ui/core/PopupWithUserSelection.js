/* Non-modal popup --> sap.m.Popover*/
var fnOpenPopover = function(){
	oPopoverStandalone.openBy(oOpenPopoverButton);
};

var fnClosePopover = function(){
	oPopoverStandalone.close();
};

var fnOpenDialogInnerPopover = function(){
	oDialogInnerPopover.open();
};

var fnCloseDialogInnerPopover = function(){
	oDialogInnerPopover.close();
};

var fnOpenPopoverInner = function(){
	oPopoverInner.openBy(oOpenPopoverInnerButton);
};

var fnClosePopoverInner = function(){
	oPopoverInner.close();
};

var oOpenPopoverButton = new sap.m.Button({
	text: 'Open Popover',
	press: fnOpenPopover
});

var oClosePopoverButton = new sap.m.Button({
	text: 'Close Popover',
	press: fnClosePopover
});

var oOpenPopoverInnerButton = new sap.m.Button({
	text: 'Open Inner Popover',
	press: fnOpenPopoverInner
});

var oClosePopoverInnerButton = new sap.m.Button({
	text: 'Close Inner Popover',
	press: fnClosePopoverInner
});

var oOpenDialogInnerPopoverButton = new sap.m.Button({
	text: 'Open Inner Dialog of Popover',
	press: fnOpenDialogInnerPopover
});

var oCloseDialogInnerPopoverButton = new sap.m.Button({
	text: 'Close Inner Dialog of Popover',
	press: fnCloseDialogInnerPopover
});

var oDialogInnerPopover = new sap.m.Dialog({
	title: "Inner Dialog of Popover",
	content: [new sap.m.Text({ text: "Inner Dialog of Popover Lorem ipsum" })],
	leftButton: oCloseDialogInnerPopoverButton
});

var oPopoverStandalone = new sap.m.Popover({
	title: "Popover",
	modal: false,
	content: [new sap.m.Text({ text: "Popover Lorem ipsum" }), oOpenDialogInnerPopoverButton, oClosePopoverButton]
});

var oPopoverInner = new sap.m.Popover({
	title: "Inner Popover",
	content: [new sap.m.Text({ text: "Inner Popover Lorem ipsum" }), oClosePopoverInnerButton]
});

/* Modal Popup --> sap.m.Dialog*/
var fnOpenDialog = function () {
	oDialog.open();
};

var fnCloseDialog = function () {
	oDialog.close();
};

var fnOpenDialogInner = function () {
	oDialogInner.open();
};

var fnCloseDialogInner = function () {
	oDialogInner.close();
};

var oText = new sap.m.Text({ text: "Lorem ipsum dolor st amet, consetetu" });

var oCloseBtn = new sap.m.Button({
	text: 'Close',
	press: fnCloseDialog
});

var oOpenBtn = new sap.m.Button({
	text: 'Open Dialog',
	press: fnOpenDialog
});

var oOpenBtnInner = new sap.m.Button({
	text: 'Open Inner Dialog',
	press: fnOpenDialogInner
});

var oCloseBtnInner = new sap.m.Button({
	text: 'Close Inner Dialog',
	press: fnCloseDialogInner
});

var oDialogInner = new sap.m.Dialog({
	title: "Inner Dialog Title",
	content: new sap.m.Text({ text:"Inner Dialog Lorem ipsum"}),
	rightButton: oCloseBtnInner
});

var oDialog = new sap.m.Dialog({
	title: "Dialog Title",
	leftButton: oCloseBtn
});

var oBusyButton = new sap.m.Button({
	text: "Set Busy",
	press: function () {
		new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, 3000);
		}).then(
			function () {
				oVBox.setBusy(false);
			}
		);

		oVBox.setBusy(true);
	}
});

oDialog.addContent(new sap.m.Text({ text: "Dialog Lorem ipsum" }));
oDialog.addContent(oOpenBtnInner);
oDialog.addContent(oOpenPopoverInnerButton);

var oVBox = new sap.m.VBox("vbox", { items: [oOpenBtn, oBusyButton, oOpenPopoverButton, oText, new sap.m.Input({ value: "My Input"})] });
oVBox.placeAt("content");