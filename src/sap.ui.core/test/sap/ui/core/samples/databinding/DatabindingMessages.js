sap.ui.loader.config({
	paths: {
		"message": "./message"
	}
});

sap.ui.require([
	"sap/ui/core/Messaging",
	"sap/ui/model/json/JSONModel",
	"sap/m/Button",
	"sap/ui/core/message/Message",
	"sap/ui/core/library",
	"sap/m/MessagePopover",
	"sap/m/MessageItem",
	"sap/ui/core/ComponentContainer",
	"sap/m/Page",
	"sap/m/Toolbar",
	"sap/m/ToolbarSpacer",
	"sap/m/CheckBox",
	"sap/m/App",
	"sap/ui/thirdparty/jquery"
], function(Messaging, JSONModel, Button, Message, coreLibrary, MessagePopover, MessageItem, ComponentContainer, Page, Toolbar, ToolbarSpacer, CheckBox, App, jQuery) {
	// shortcut for sap.ui.core.MessageType
	const MessageType = coreLibrary.MessageType;


	// Model
	globalThis.oModel = new JSONModel({
		form: {
			name: "Max",
			surname: "Mustermann",
			street: "Musterstr.",
			streetnr: 1,
			birthdate: new Date(),
			zip: "12345",
			city: "Musterstadt",
			country: "DE"
		}
	});

	var oButton1 = new Button({
		text: "add Warning",
		press: function() {
			Messaging.addMessages(
				new Message({
					message: "Invalid order of characters in this name!",
					type: MessageType.Warning,
					target: "/form/name",
					processor: oModel
				})
			)
		}
	});
	var oButton2 = new Button({
		text: "add Info",
		press: function() {
			Messaging.addMessages(
				new Message({
					message: "Nice last name!",
					type: MessageType.Information,
					processor: oModel
				})
			)
		}
	});
	var oButton3 = new Button({
		text: "add Success",
		press: function() {
			Messaging.addMessages(
				new Message({
					message: "City sucessfully updated",
					type: MessageType.Success,
					target: "/form/city",
					processor: oModel
				})
			)
		}
	});
	var oButton5 = new Button({
		text: "add Success for ZIP",
		press: function() {
			Messaging.addMessages(
				new Message({
					message: "de Zip is gut!",
					type: MessageType.Success,
					target: "/form/zip",
					processor: oModel
				})
			)
		}
	});

	var oButton4 = new Button({
		text: "clear Messages",
		press: function() {
			Messaging.removeAllMessages();
		}
	});


	var oMessagePopoverButton = new Button({
		text: 'Show MessagePopover',
		type: 'Accept',
		press: function() {
			oMP.openBy(this);
		}
	});

	var oMP = new MessagePopover({
		items: {
			path: "message>/",
			template: new MessageItem({
				description: "{message>description}",
				type: "{message>type}",
				title: "{message>message}",
				subtitle: {
					path: 'message>additionalText'
				}
			})
		}
	});

	oMP.setModel(Messaging.getMessageModel(), "message");

	var oCompCont = new ComponentContainer("CompCont", {
		name: "message",
		id: "myMessageTest1"
	});
	var oCompCont2 = new ComponentContainer("CompCont2", {
		name: "message",
		id: "myMessageTest2",
		handleValidation: true
	});
	var oCompCont3 = new ComponentContainer("CompCont3", {
		name: "message.disabled",
		id: "myMessageTest3",
		handleValidation: true
	});
	var oCompCont4 = new ComponentContainer("CompCont4", {
		name: "message.enabled",
		id: "myMessageTest4",
		handleValidation: true
	});

	var oPage = new Page({
		title: 'DataBinding Messages',
		content: [oCompCont, oCompCont2, oCompCont3, oCompCont4, oButton1, oButton2, oButton3, oButton4, oButton5],
		footer: new Toolbar({
			content: [
				new ToolbarSpacer(),
				oMessagePopoverButton,
				new CheckBox({
					selected: false,
					text: "Compact mode",
					select: function() {
						jQuery("body").toggleClass("sapUiSizeCompact");
					}
				}),
				new ToolbarSpacer()
			]
		})
	});

	var app = new App("myApp", {
		initialPage: oPage
	});

	app.addPage(oPage).placeAt('content');

	sap.ui.getCore();
	sap.ui.getCore();
	sap.ui.getCore();
	sap.ui.getCore();
});