// app
var oApp = new sap.m.App("myApp", {
	initialPage: "page1"
}),

// duration
oInput0 = new sap.m.Input({
	value: 10000,
	type: "Number",
	placeholder: "Duration"
}),

// width
oInput1 = new sap.m.Input({
	value: "15em",
	type: "Text",
	placeholder: "Width"
}),

// offset
oInput2 = new sap.m.Input({
	value: "0 0",
	type: "Text",
	placeholder: "Offset"
}),

// auto close
oCheckBox0 = new sap.m.CheckBox({
	selected: true
}),

// message
oTextArea0 = new sap.m.TextArea({
	value: "The message to be displayed",
	width: "100%"
}),

// button to show the message toast notification
oButton0 = new sap.m.Button("show-button", {
	text: "Show",
	press: function() {
		var sKey;

		// message toast
		sap.m.MessageToast.show(oTextArea0.getValue(), {
			duration: Number(oInput0.getValue()),
			width: oInput1.getValue(),
			my: sKey = oSelect0.getSelectedItem().getKey(),
			at: sKey,
			offset: oInput2.getValue(),
			autoClose: oCheckBox0.getSelected(),
			onClose: function() {
				sap.m.MessageToast.show("The onClose callback function was called", {
					width: "100%",
					my: "center bottom",
					at: "center bottom"
				});
			}
		});
	}
}),

oButton1 = new sap.m.Button("show-button-2", {
	text: "Open MessageToast",
	press: function() {
		var sKey;

		// message toast
		sap.m.MessageToast.show(oTextArea0.getValue(), {
			duration: Number(oInput0.getValue()),
			width: oInput1.getValue(),
			my: sKey = oSelect0.getSelectedItem().getKey(),
			at: sKey,
			offset: oInput2.getValue(),
			autoClose: oCheckBox0.getSelected(),

		});
	}
}),

// select
oSelect0 = new sap.m.Select("select-list", {
	items: [
		oItem0 = new sap.ui.core.Item("begin-bottom" ,{
			key: "begin bottom",
			text: "begin bottom"
		}),

		oItem1 = new sap.ui.core.Item("begin-center" ,{
			key: "begin center",
			text: "begin center"
		}),

		oItem2 = new sap.ui.core.Item("begin-top" ,{
			key: "begin top",
			text: "begin top"
		}),

		oItem3 = new sap.ui.core.Item("center-bottom" ,{
			key: "center bottom",
			text: "center bottom",
		}),

		oItem4 = new sap.ui.core.Item("center-center" ,{
			key: "center center",
			text: "center center"
		}),

		oItem5 = new sap.ui.core.Item("center-top" ,{
			key: "center top",
			text: "center top"
		}),

		oItem6 = new sap.ui.core.Item("end-bottom" ,{
			key: "end bottom",
			text: "end bottom"
		}),

		oItem7 = new sap.ui.core.Item("end-center" ,{
			key: "end center",
			text: "end center"
		}),

		oItem8 = new sap.ui.core.Item("end-top" ,{
			key: "end top",
			text: "end top",
		}),

		oItem9 = new sap.ui.core.Item("left-bottom" ,{
			key: "left bottom",
			text: "left bottom"
		}),

		oItem10 = new sap.ui.core.Item("left-center" ,{
			key: "left center",
			text: "left center"
		}),

		oItem11 = new sap.ui.core.Item("left-top" ,{
			key: "left top",
			text: "left top"
		}),

		oItem12 = new sap.ui.core.Item("right-bottom" ,{
			key: "right bottom",
			text: "right bottom"
		}),

		oItem13 = new sap.ui.core.Item("right-center" ,{
			key: "right center",
			text: "right center"
		}),

		oItem14 = new sap.ui.core.Item("right-top" ,{
			key: "right top",
			text: "right top"
		})
	],

	selectedItemId: "center-center"
}),

// list
oList = new sap.m.List({
	inset : false,
	width : "100%",
	items : [
				new sap.m.InputListItem({
					label : "Position",
					content : oSelect0
				}),

				new sap.m.InputListItem({
					label : "Duration",
					content : oInput0
				}),

				new sap.m.InputListItem({
					label : "Width",
					content : oInput1
				}),

				new sap.m.InputListItem({
					label : "Offset",
					content : oInput2
				}),

				new sap.m.InputListItem({
					label : "Auto close",
					content : oCheckBox0
				}),
	]
}),

// page
oPage1 = new sap.m.Page("page1", {
	title: "Mobile MessageToast control",
	enableScrolling : true,
	content : [ oList, oTextArea0, oButton0, oButton1 ]
});

oApp.addPage(oPage1);
oApp.placeAt("body");