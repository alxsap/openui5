var oh1 = new sap.m.ObjectHeader("oh1", {
	responsive: true,
	intro: "Type XS",
	introActive: true,
	introPress: function() {},
	title: "Responsive Object Header fullScreenOptimized with two states",
	titleActive: true,
	titlePress: function() {},
	icon: "../../sap/m/images/Woman_04.png",
	imageShape: sap.m.ObjectHeaderPictureShape.Square,
	number: "624,00",
	numberUnit: "Euro",
	numberTextDirection: sap.ui.core.TextDirection.LTR,
	fullScreenOptimized: true,
	showMarkers: true,
	markFlagged: true,
	markFavorite: true,
	numberState: sap.ui.core.ValueState.Success,
	attributes: [
		new sap.m.ObjectAttribute({
			title: "Manufacturer",
			text: "ACME Corp",
			active: true
		}),
		new sap.m.ObjectAttribute({
			title: "Contact",
			text: "Denis Smith"
		})
	],
	statuses: [
		new sap.m.ObjectStatus({
			title: "Approval",
			text: "Pending",
			state: sap.ui.core.ValueState.Success
		})
	]
});

var oa1 = new sap.m.ObjectAttribute({
	title: "Owner",
	text: "ACME Corp"
});

var os1 = new sap.m.ObjectStatus({
	title: "Delivered",
	text: "Pending",
	state: sap.ui.core.ValueState.Error
});

oh1.placeAt("body");

var fullScreenBtn = new sap.m.Button("change_fullscreen", {
	text: "Toggle fullscreen mode",
	press: function() {
			oh1.setFullScreenOptimized(!oh1.getFullScreenOptimized());
		}
});

var statesBtn = new sap.m.Button("add_states", {
	text: "Add states",
	press: function() {
			oh1.addAttribute(oa1);
			oh1.addStatus(os1);
		}
});

var emptyAttribute = new sap.m.ObjectAttribute({
	title: "",
	text: ""
});

var oneStateButton = new sap.m.Button("one_state_empty_attribute", {
	text: "Add one state and one empty attribute",
	press: function() {
		oh1.removeAllAttributes();
		oh1.removeAllStatuses();
			oh1.addAttribute(emptyAttribute);
			oh1.addStatus(os1);
		}
});

var typeBtn = new sap.m.Button("change_OH_type", {
	text: "Toggle responsive",
	press: function() {
			oh1.setResponsive(!oh1.getResponsive());
		}
});

var shapeBtn = new sap.m.Button("change_image_shape", {
	text: "Set circle shape image",
	press: function() {
			oh1.setImageShape(sap.m.ObjectHeaderPictureShape.Circle);
		}
});

var condBtn = new sap.m.Button("change_to_condensed", {
	text: "Set to condensed mode",
	press: function() {
			oh1.setCondensed(true);
		}
});

fullScreenBtn.placeAt("body");
statesBtn.placeAt("body");
oneStateButton.placeAt("body");
typeBtn.placeAt("body");
shapeBtn.placeAt("body");
condBtn.placeAt("body");

var oInput = new sap.m.Input("typeSpace", {value: "test"}),
	oOH = new sap.m.ObjectHeader("ohSpace", {
		title : "Test pressing space key inside input",
		responsive : true,
		headerContainer: [
			new sap.m.HeaderContainer({
				content: [
					oInput
				]
			})
		]
	});

oOH.placeAt("body");