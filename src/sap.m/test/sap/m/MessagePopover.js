sap.ui.define([
	"sap/m/MessagePopover",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageItem",
	"sap/m/Button",
	"sap/ui/core/IconPool",
	"sap/m/library",
	"sap/ui/core/Item",
	"sap/ui/layout/form/SimpleForm",
	"sap/ui/layout/library",
	"sap/ui/core/Title",
	"sap/m/Label",
	"sap/m/Input",
	"sap/m/TextArea",
	"sap/m/Select",
	"sap/ui/core/LayoutData",
	"sap/ui/core/Element",
	"sap/m/Page",
	"sap/m/Title",
	"sap/m/ToolbarSpacer",
	"sap/m/Toolbar",
	"sap/m/CheckBox",
	"sap/m/App",
	"sap/base/Log",
	"sap/ui/thirdparty/jquery"
], function(
	MessagePopover,
	JSONModel,
	MessageItem,
	Button,
	IconPool,
	mobileLibrary,
	Item,
	SimpleForm,
	layoutLibrary,
	Title,
	Label,
	Input,
	TextArea,
	Select,
	LayoutData,
	Element,
	Page,
	MTitle,
	ToolbarSpacer,
	Toolbar,
	CheckBox,
	App,
	Log,
	jQuery
) {
	"use strict";

	// shortcut for sap.m.InputType
	const InputType = mobileLibrary.InputType;

	// shortcut for sap.ui.layout.form.SimpleFormLayout
	const SimpleFormLayout = layoutLibrary.form.SimpleFormLayout;

	// shortcut for sap.m.ButtonType
	const ButtonType = mobileLibrary.ButtonType;

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "range", {
		configurable: "false",
		writable: "true",

		value: function (from, to) {

			function generate(arr, next) {
				if (next > to) {
					return arr;
				}

				return generate(arr.concat(next), next + 1);
			}

			return generate([], from);
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "mockMarkupDescription", {
		configurable: "false",
		writable: "true",

		value: "<h2>Heading h2</h2><script>alert('this JS will be sanitized')<\/script>" +
				"<p>Paragraph. At vero eos et accusamus et iusto odio dignissimos ducimus qui ...</p>" +
				"<ul>" +
				"	<li>Unordered list item 1 <a href=\"http://sap.com/some/url\">Absolute URL</a></li>" +
				"	<li>Unordered list item 2</li>" +
				"</ul>" +
				"<ol>" +
				"	<li>Ordered list item 1 <a href=\"/testsuite/test-resources/sap/m/MessagePopover.html?this_should_be_opened_in_new_page\">Relative URL</a></li>" +
				"	<li>Ordered list item 2</li>" +
				"</ol>"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aMockMessages", {
		configurable: "false",
		writable: "true",

		value: {
			count: 5,
			messages: [{
				type: "Error",
				title: "Error message",
				groupName: "Error group name",
				description: "First Error message description",
				subtitle: "Example subtitle",
				active: true
			}, {
				type: "Warning",
				title: "Warning without description",
				groupName: "Warning group name",
				description: ""
			}, {
				type: "Success",
				title: "Success message",
				groupName: "Success group name",
				description: "First Success message description"
			}, {
				type: "Error",
				title: "Error",
				groupName: "Error group name",
				description: "Second Error message description"
			}, {
				type: "Information",
				title: "Information message (Long)",
				groupName: "Information group name",
				description: "Just some text description",
				longtextUrl: "./SampleHTML.html"
			}, {
				type: "Information",
				title: "Information message (Long) 2",
				groupName: "Information group name",
				description: "Just some text description",
				longtextUrl: "./SampleHTML.html",
				subtitle: "Just simple subtitle",
				active: true
			}]
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	oModel.setData(aMockMessages);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMessageTemplate", {
		configurable: "false",
		writable: "true",

		value: new MessageItem({
			type: "{type}",
			title: "{title}",
			groupName: "{groupName}",
			description: "{description}",
			longtextUrl: "{longtextUrl}",
			subtitle: "{subtitle}",
			activeTitle: "{active}"
		})
	});

	MessagePopover.setDefaultHandlers({

		// to have all links in the longtextdescription validated by default
		// use this commented out version of asyncURLHandler instead

		/*
		 asyncURLHandler: function(config) {
		 config.promise.resolve({
		 allowed: true,
		 id: config.id
		 });
		 }
		 */

		asyncURLHandler: function(config) {
			// put async validation here
			setTimeout(function() {
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

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "headerButton", {
		configurable: "false",
		writable: "true",
		value: new Button({text: "Clear"})
	});

	//list.bindAggregation("items", "/", oMessageTemplate);
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMessagePopover", {
		configurable: "false",
		writable: "true",

		value: new MessagePopover("mPopover", {
			activeTitlePress: function () {
				alert('test');
			},
			items: {
				path: "/messages",
				template: oMessageTemplate
			},
			headerButton: headerButton,
			beforeOpen: function (oEvt) {
				console.log("beforeOpen", oEvt.getParameters());
			},
			beforeClose: function (oEvt) {
				console.log("beforeClose", oEvt.getParameters());
			},
			afterOpen: function (oEvt) {
				console.log("afterOpen", oEvt.getParameters());
			},
			afterClose: function (oEvt) {
				console.log("afterClose", oEvt.getParameters());
			},
			itemSelect: function (oEvt) {
				console.log("itemSelected", oEvt.getParameters());
			},
			listSelect: function (oEvt) {
				console.log("listSelected", oEvt.getParameters());
			},
			initiallyExpanded: true
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMessagePopoverWithGrouping", {
		configurable: "false",
		writable: "true",

		value: new MessagePopover("mPopoverWithGrouping", {
			activeTitlePress: function () {
				alert('test');
			},
			items: {
				path: "/messages",
				template: oMessageTemplate
			},
			groupItems: true,
			headerButton: headerButton,
			beforeOpen: function (oEvt) {
				console.log("beforeOpen", oEvt.getParameters());
			},
			beforeClose: function (oEvt) {
				console.log("beforeClose", oEvt.getParameters());
			},
			afterOpen: function (oEvt) {
				console.log("afterOpen", oEvt.getParameters());
			},
			afterClose: function (oEvt) {
				console.log("afterClose", oEvt.getParameters());
			},
			itemSelect: function (oEvt) {
				console.log("itemSelected", oEvt.getParameters());
			},
			listSelect: function (oEvt) {
				console.log("listSelected", oEvt.getParameters());
			},
			initiallyExpanded: true
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMessagePopoverCollapsed", {
		configurable: "false",
		writable: "true",

		value: new MessagePopover("mPopoverCollapsed", {
			items: {
				path: "/messages",
				template: oMessageTemplate
			},
			headerButton: headerButton,
			beforeOpen: function (oEvt) {
				console.log("beforeOpen", oEvt.getParameters());
			},
			beforeClose: function (oEvt) {
				console.log("beforeClose", oEvt.getParameters());
			},
			afterOpen: function (oEvt) {
				console.log("afterOpen", oEvt.getParameters());
			},
			afterClose: function (oEvt) {
				console.log("afterClose", oEvt.getParameters());
			},
			itemSelect: function (oEvt) {
				console.log("itemSelected", oEvt.getParameters());
			},
			listSelect: function (oEvt) {
				console.log("listSelected", oEvt.getParameters());
			},
			initiallyExpanded: false
		})
	});

	oMessagePopover.setModel(oModel);
	oMessagePopoverWithGrouping.setModel(oModel);
	oMessagePopoverCollapsed.setModel(oModel);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMessagePopoverButton", {
		configurable: "false",
		writable: "true",

		value: new Button("mPopoverButton", {
			icon: IconPool.getIconURI("message-popup"),
			text: "{/count}",
			type: ButtonType.Emphasized,
			press: function () {
				oMessagePopover.toggle(this);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMessagePopoverWithGroupingButton", {
		configurable: "false",
		writable: "true",

		value: new Button("mPopoverWithGroupingButton", {
			icon: IconPool.getIconURI("message-popup"),
			text: "{/count}",
			type: ButtonType.Emphasized,
			press: function () {
				oMessagePopoverWithGrouping.toggle(this);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMessagePopoverCButton", {
		configurable: "false",
		writable: "true",

		value: new Button("mPopoverCButton", {
			icon: IconPool.getIconURI("message-popup"),
			text: "{/count}",
			type: ButtonType.Emphasized,
			press: function () {
				oMessagePopoverCollapsed.toggle(this);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "getPositions", {
		configurable: "false",
		writable: "true",

		value: function () {
			return [{key: "Default", text: "Default"}]
					.concat(range(0, oMessagePopover.getItems().length)
							.map(function (item) {
								return {key: item, text: item};
							}));
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "updateSelect", {
		configurable: "false",
		writable: "true",

		value: function (control) {
			var oSelectedItem = control.getSelectedKey();
			control.removeAllItems();
			var oItems = getPositions();
			for (var i = 0; i < oItems.length; i++) {
				var oItem = new Item({
					key: oItems[i].key,
					text: oItems[i].text
				});
				control.insertItem(oItem, i);
				if (oItems[i].key == oSelectedItem) {
					control.setSelectedItem(oItem);
				}
			}
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oSimpleForm", {
		configurable: "false",
		writable: "true",

		value: new SimpleForm({
			layout: SimpleFormLayout.ResponsiveGridLayout,
			editable: true,
			content: [
				new Title({text: "Add/Remove message"}),
				new Label({text: "Title"}),
				new Input("msg-title-input", {
					type: InputType.Text,
					placeholder: "Enter Message Title"
				}),
				new Label({text: "Description"}),
				new TextArea("msg-description-input", {
					placeholder: "Enter Message Description"
				}),
				new Label({text: "Type"}),
				new Select("msg-type-select", {
					items: ["Error", "Warning", "Information", "Success"].map(function (item) {
						return {key: item, text: item};
					}),
					change: function () {
						Log.info("Event fired: \"change\" value property to " +
						this.getSelectedKey() + " on " + this);
					}
				}),
				new Label({text: "Position"}),
				new Select("msg-position-select", {
					items: getPositions()
				}),
				new Label(),
				new Button({
					text: "Add",
					type: "Accept",
					width: "230px",
					layoutData: new LayoutData({span: "S2 M2 L2"}),
					press: function () {
						var message = new MessageItem({
							type: Element.getElementById("msg-type-select").getSelectedKey(),
							title: Element.getElementById("msg-title-input").getValue(),
							description: Element.getElementById("msg-description-input").getValue()
						});

						var position = Element.getElementById("msg-position-select").getSelectedKey();
						var oModelTemp = oMessagePopover.getModel().getData();
						var oObjectMessage = {
							type: message.getType(),
							title: message.getTitle() || 'Empty',
							description: message.getDescription()
						};

						if (position === "Default") {
							oMessagePopover.addAggregation("items", message, true);
							oModelTemp.messages.splice(oModelTemp.length, 0, oObjectMessage);
						} else {
							oMessagePopover.insertAggregation("items", message, position, true);
							oModelTemp.messages.splice(position, 0, oObjectMessage);
						}

						oModelTemp.count += 1;

						oModel.setData(oModelTemp);
						Element.getElementById("msg-model-input").setValue(JSON.stringify(oMessagePopover.getModel().getData(), null, 4));

						updateSelect(Element.getElementById("msg-position-select"));
						updateSelect(Element.getElementById("msg-position-remove-select"));
					}
				}),
				new Label(),
				new Label({text: "Position"}),
				new Select("msg-position-remove-select", {
					items: getPositions()
				}),
				new Label(),
				new Button({
					text: "Remove",
					type: "Reject",
					width: "230px",
					press: function () {
						var position = Element.getElementById("msg-position-remove-select").getSelectedKey();
						//oMessagePopover.removeAggregation("items", +position);
						var oModelTemp = oMessagePopover.getModel().getData();
						oModelTemp.messages.splice(position, 1);
						oModelTemp.count -= 1;

						oModel.setData(oModelTemp);

						Element.getElementById("msg-model-input").setValue(JSON.stringify(oMessagePopover.getModel().getData(), null, 4));
						updateSelect(Element.getElementById("msg-position-select"));
						updateSelect(Element.getElementById("msg-position-remove-select"));
					}
				}),
				new Button({
					text: "Remove all",
					type: "Reject",
					width: "230px",
					press: function () {
						//oMessagePopover.destroyAggregation("items",function(){});
						oModel.setData({count: 0, messages: []});

						Element.getElementById("msg-model-input").setValue("");
						updateSelect(Element.getElementById("msg-position-select"));
						updateSelect(Element.getElementById("msg-position-remove-select"));
					}
				})
			]
		})
	});

	// Add a CSS class to the body HTML element, in order to be used for caret stylization in visual tests run.
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oCustomCssButton", {
		configurable: "false",
		writable: "true",

		value: new Button ("customCssButton",{
			text: "Toggle custom CSS for visual test",
			press: function() {
				var $body = jQuery("body");

				$body.toggleClass("customClassForVisualTests");
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page({
			headerContent: [
				new MTitle({text: "sap.m.MessagePopover Playground"}),
				new ToolbarSpacer({width: "400px"}),
				oCustomCssButton,
			],
			content: [oSimpleForm],
			footer: new Toolbar({
				content: [
					oMessagePopoverButton,
					new ToolbarSpacer(),
					oMessagePopoverWithGroupingButton,
					new ToolbarSpacer(),
					oMessagePopoverCButton,
					new CheckBox("compactMode", {
						selected: false,
						text: "Compact mode",
						select: function () {
							jQuery("body").toggleClass("sapUiSizeCompact");
						}
					}),
					new ToolbarSpacer()
				]
			})
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",
		value: new App("myApp", {initialPage: oPage})
	});

	app.setModel(oModel);

	app.addPage(oPage).placeAt("content");
});