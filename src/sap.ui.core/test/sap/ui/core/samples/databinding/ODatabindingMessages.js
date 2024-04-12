sap.ui.require([
	"sap/ui/core/Messaging",
	"sap/ui/core/message/Message",
	"sap/ui/model/odata/ODataMessageParser",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/type/Date",
	"sap/ui/model/type/String",
	"sap/ui/model/type/Integer",
	"sap/ui/layout/form/ResponsiveGridLayout",
	"sap/ui/layout/form/Form",
	"sap/ui/core/Title",
	"sap/ui/layout/form/FormContainer",
	"sap/ui/layout/form/FormElement",
	"sap/m/Input",
	"sap/m/DateTimeInput",
	"sap/m/RadioButton",
	"sap/m/Text",
	"sap/m/Label",
	"sap/ui/layout/GridData",
	"sap/m/Select",
	"sap/ui/core/Item",
	"sap/m/Button",
	"sap/ui/core/library",
	"sap/m/ColumnListItem",
	"sap/m/Table",
	"sap/m/Column"
],
function(Messaging, Message, ODataMessageParser, ODataModel, TypeDate, TypeString, Integer, ResponsiveGridLayout, Form, Title, FormContainer, FormElement, Input, DateTimeInput, RadioButton, Text, Label, GridData, Select, Item, Button, coreLibrary, ColumnListItem, Table, Column) {
	// shortcut for sap.ui.core.MessageType
	const MessageType = coreLibrary.MessageType;

	var oMM = Messaging;

	var sServiceURI = "fakeService://testdata/odata/northwind/";
	var mModelOptions = {
		json: true,
		async: true,
		useBatch: false
	};
	var oModel = new ODataModel(sServiceURI, mModelOptions);
	var oParser = new ODataMessageParser(sServiceURI);
	oModel.setMessageParser(oParser);
	// sap.ui.getCore().setModel(oModel);

	oDate = new TypeDate();
	oZip = new TypeString(null, {
		maxLength: 5
	});
	oStreet = new Integer();
	// UI
	var oLayout = new ResponsiveGridLayout("L4");
	var oForm = new Form("F1", {
		models: {
			undefined: oModel
		},
		objectBindings: {
			undefined: {
				path: "/Products(1)"
			}
		},
		title: new Title({
			text: "Form Title",
			tooltip: "Title tooltip"
		}),
		tooltip: "Form tooltip",
		editable: true,
		layout: oLayout,
		formContainers: [
			new FormContainer("C1", {
				title: "Contact Data",
				formElements: [
					new FormElement({
						label: "Name",
						fields: [
							new Input({
								value: "{ProductName}"
							})
						]
					}),
					new FormElement({
						label: "First name",
						fields: [
							new Input({
								value: "{name}"
							})
						]
					}),
					new FormElement({
						label: "Date of birth",
						fields: [
							new DateTimeInput({
								value: {
									path: "birthdate",
									type: oDate
								}
							})
						]
					}),
					new FormElement({
						label: "Gender",
						fields: [
							new RadioButton({
								text: "male",
								selected: true,
								groupName: "MyTest"
							}),
							new RadioButton({
								text: "female",
								selected: false,
								groupName: "MyTest"
							})
						]
					}),
					new FormElement({
						label: "Info",
						fields: [
							new Text({
								text: "{info}"
							})
						]
					})
				]
			}),
			new FormContainer("C2", {
				title: new Title({
					text: "Address",
					tooltip: "Title tooltip"
				}),
				formElements: [
					new FormElement({
						label: new Label({
							text: "Street"
						}),
						fields: [
							new Input({
								value: "{street}"
							}),
							new Input({
								value: {
									path: "streetnr",
									type: oStreet
								},
								width: "5em",
								layoutData: new GridData({
									span: "L2 M2 S2"
								})
							})
						]
					}),
					new FormElement({
						label: "City",
						fields: [
							new Input({
								value: "{city}"
							})
						]
					}),
					new FormElement({
						label: new Label({
							text: "Post code"
						}),
						fields: [
							new Input({
								value: {
									path: "zip",
									type: oZip
								},
								layoutData: new GridData({
									span: "L2 M2 S2"
								})
							})
						]
					}),
					new FormElement({
						label: "Country",
						fields: [
							new Select({
								selectedKey: "{country}",
								items: [
									new Item({
										key: "DE",
										text: "Germany"
									}),
									new Item({
										key: "US",
										text: "USA"
									}),
									new Item({
										key: "UK",
										text: "England"
									})
								]
							})
						]
					})
				]
			})
		]
	});
	oForm.placeAt("content");

	new Button({
		text: "Set messages",
		press: function() {
			oModel.setMessages({
				"/form/name": {
					state: "Error",
					text: "Invalid order of characters in this name!"
				}
			});
		}
	});

	new Button({
		text: "Set other messages",
		press: function() {
			oModel.setMessages({
				"/form/zip": {
					state: "Error",
					text: "ZIP and City do not match!"
				},
				"/form/city": {
					state: "Warning",
					text: "ZIP and City do not match!"
				}
			});
		}
	});

	new Button({
		text: "Clear messages",
		press: function() {
			oModel.setMessages({});
		}
	});

	//oButton3.placeAt("buttons");

	var oButton4 = new Button({
		text: "Set message to MM",
		press: function() {
			oMM.addMessages(
				new Message({
					message: "Invalid order of characters in this name!",
					severity: MessageType.Error,
					target: "/form/name",
					processor: oModel
				})
			)
		}
	});
	oButton4.placeAt("buttons");

	var oButton5 = new Button({
		text: "clear messages of MM",
		press: function() {
			oMM.removeAllMessages();
		}
	});
	oButton5.placeAt("buttons");

	var oLItem = new ColumnListItem({
		cells: [
			new Text({
				text: "{message>severity}"
			}),
			new Text({
				text: "{message>message}"
			}),
			new Text({
				text: "{message>target}"
			})
		]
	});

	var oMList = new Table({
		headerText: "Messages",
		columns: [
			new Column({
				header: new Text({
					text: "Severity"
				})
			}),
			new Column({
				header: new Text({
					text: "Message"
				})
			}),
			new Column({
				header: new Text({
					text: "Target"
				})
			})
		]
	});
	oMList.bindItems({
		path: "message>/",
		template: oLItem
	});

	oMList.placeAt("messages");
});