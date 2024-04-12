sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/m/App",
	"sap/m/PDFViewer",
	"sap/m/Button",
	"sap/m/FlexItemData",
	"sap/m/Select",
	"sap/ui/core/Item",
	"sap/m/Input",
	"sap/m/CheckBox",
	"sap/m/List",
	"sap/m/InputListItem",
	"sap/m/Page",
	"sap/m/Bar",
	"sap/m/Label",
	"sap/m/FlexBox"
], function(
	MessageToast,
	JSONModel,
	App,
	PDFViewer,
	Button,
	FlexItemData,
	Select,
	Item,
	Input,
	CheckBox,
	List,
	InputListItem,
	Page,
	Bar,
	Label,
	FlexBox
) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aDisplayTypesCollection", {
		configurable: "false",
		writable: "true",

		value: [
			{
				key: 'Auto',
				text: 'Auto'
			},
			{
				key: 'Embedded',
				text: 'Embedded'
			},
			{
				key: 'Link',
				text: 'Link'
			}
		]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aModesCollection", {
		configurable: "false",
		writable: "true",

		value: [
			{
				key: 'embedded',
				text: 'Embedded'
			},
			{
				key: 'popup',
				text: 'Popup'
			}
		]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aSourcesCollection", {
		configurable: "false",
		writable: "true",

		value: [
			{
				source: "./qunit/pdfviewer/sample-file.pdf",
				label: "PDF File (same domain)"
			},
			{
				source: "https://assets.cdn.sap.com/sapcom/docs/2015/07/c06ac591-5b7c-0010-82c7-eda71af511fa.pdf",
				label: "PDF File (different domain)"
			},
			{
				source: "./qunit/pdfviewer/404",
				label: "404"
			}
		]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aEventReactionsCollection", {
		configurable: "false",
		writable: "true",

		value: [
			{
				type: 'supresss',
				label: 'Suppress'
			},
			{
				type: 'alert',
				label: 'Alert'
			}
		]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",

		value: new JSONModel({
			DisplayTypesCollection: aDisplayTypesCollection,
			ModesCollection: aModesCollection,
			SourcesCollection: aSourcesCollection,
			EventReactionsCollection: aEventReactionsCollection
		})
	});

	function setupPDFViewer() {
		oPDFViewer.setDisplayType(oDisplayTypeSelect.getSelectedKey());
		oPDFViewer.setSource(oSourceSelect.getSelectedKey());
		oPDFViewer.setTitle(oTitleTextInput.getValue());
		oPDFViewer.setHeight(oHeightInput.getValue());
		oPDFViewer.setWidth(oWidthInput.getValue());
		oPDFViewer.setErrorPlaceholderMessage(oErrorMessageInput.getValue());
		oPDFViewer.setShowDownloadButton(oShowDownloadButtonCheckBox.getSelected());
	}

	function handleEvent(sKey, sEventType) {
		var sMessage = sEventType + " fired!";
		switch (sKey) {
			case "suppress":
				console.log(sMessage);
				break;
			case "alert":
				alert(sMessage);
				break;
			default:
				console.log("Unknown key: " + sKey);
		}
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oApp", {
		configurable: "false",
		writable: "true",

		value: new App("myApp", {
				initialPage: "page1"
			})
	}), Object.defineProperty(globalThis, "oPDFViewer", {
		configurable: "false",
		writable: "true",

		value: new PDFViewer("pdfViewer", {
			loaded: function () {
				var sKey = oLoadedEventSelect.getSelectedKey();
				handleEvent(sKey, "LOADED");
			},
			error: function () {
				var sKey = oErrorEventSelect.getSelectedKey();
				handleEvent(sKey, "ERROR");
			},
			sourceValidationFailed: function (oEvent) {
				if (oSourceValidationFailedPreventDefaultCheckbox.getSelected()) {
					oEvent.preventDefault();
				}

				var sKey = oSourceValidationFailedEventSelect.getSelectedKey();
				handleEvent(sKey, "SOURCE VALIDATION FAILED");
			}
		})
	}), Object.defineProperty(globalThis, "oRenderButton", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Render",
			press: function () {
				var sKey = oModeSelect.getSelectedKey();
				setupPDFViewer();
				if (sKey === "embedded") {
					oMainContainer.addItem(oPDFViewer);
					oPDFViewer.setLayoutData(new FlexItemData({
						growFactor: 1,
						baseSize: "100%"
					}));
				} else {
					oMainContainer.removeItem(oPDFViewer);
					oPDFViewer.open();
				}
			}
		})
	}), Object.defineProperty(globalThis, "oDisplayTypeSelect", {
		configurable: "false",
		writable: "true",

		value: new Select({
			items: {
				path: "settingsData>/DisplayTypesCollection",
				template: new Item({
					key: "{settingsData>key}",
					text: "{settingsData>text}"
				})
			}
		})
	}), Object.defineProperty(globalThis, "oModeSelect", {
		configurable: "false",
		writable: "true",

		value: new Select({
			items: {
				path: "settingsData>/ModesCollection",
				template: new Item({
					key: "{settingsData>key}",
					text: "{settingsData>text}"
				})
			}
		})
	}), Object.defineProperty(globalThis, "oSourceSelect", {
		configurable: "false",
		writable: "true",

		value: new Select({
			items: {
				path: "settingsData>/SourcesCollection",
				template: new Item({
					key: "{settingsData>source}",
					text: "{settingsData>label}"
				})
			}
		})
	}), Object.defineProperty(globalThis, "oTitleTextInput", {
		configurable: "false",
		writable: "true",

		value: new Input({
			value: "My title",
			placeholder: "Title"
		})
	}), Object.defineProperty(globalThis, "oWidthInput", {
		configurable: "false",
		writable: "true",

		value: new Input({
			placeholder: "Width",
			value: '100%',
			change: function () {
				oPDFViewer.setWidth(oWidthInput.getValue());
			}
		})
	}), Object.defineProperty(globalThis, "oHeightInput", {
		configurable: "false",
		writable: "true",

		value: new Input({
			placeholder: "Height",
			value: '400px',
			change: function () {
				oPDFViewer.setHeight(oHeightInput.getValue());
			}
		})
	}), Object.defineProperty(globalThis, "oErrorMessageInput", {
		configurable: "false",
		writable: "true",

		value: new Input({
			placeholder: "Custom Error Message"
		})
	}), Object.defineProperty(globalThis, "oShowDownloadButtonCheckBox", {
		configurable: "false",
		writable: "true",

		value: new CheckBox({
			selected: true
		})
	}), Object.defineProperty(globalThis, "oLoadedEventSelect", {
		configurable: "false",
		writable: "true",

		value: new Select({
			items: {
				path: "settingsData>/EventReactionsCollection",
				template: new Item({
					key: "{settingsData>type}",
					text: "{settingsData>label}"
				})
			}
		})
	}), Object.defineProperty(globalThis, "oErrorEventSelect", {
		configurable: "false",
		writable: "true",

		value: new Select({
			items: {
				path: "settingsData>/EventReactionsCollection",
				template: new Item({
					key: "{settingsData>type}",
					text: "{settingsData>label}"
				})
			}
		})
	}), Object.defineProperty(globalThis, "oSourceValidationFailedEventSelect", {
		configurable: "false",
		writable: "true",

		value: new Select({
			items: {
				path: "settingsData>/EventReactionsCollection",
				template: new Item({
					key: "{settingsData>type}",
					text: "{settingsData>label}"
				})
			}
		})
	}), Object.defineProperty(globalThis, "oSourceValidationFailedPreventDefaultCheckbox", {
		configurable: "false",
		writable: "true",
		value: new CheckBox()
	}), Object.defineProperty(globalThis, "oSettingsList", {
		configurable: "false",
		writable: "true",

		value: new List({
			items: [
				// input list items
				new InputListItem({
					label: "Display Type",
					content: oDisplayTypeSelect
				}),
				new InputListItem({
					label: "Mode",
					content: oModeSelect
				}),
				new InputListItem({
					label: "Source",
					content: oSourceSelect
				}),
				new InputListItem({
					label: "Title",
					content: oTitleTextInput
				}),
				new InputListItem({
					label: "Height",
					content: oHeightInput
				}),
				new InputListItem({
					label: "Width",
					content: oWidthInput
				}),
				new InputListItem({
					label: "Custom error Message",
					content: oErrorMessageInput
				}),
				new InputListItem({
					label: "Show download button",
					content: oShowDownloadButtonCheckBox
				}),
				new InputListItem({
					label: "Events"
				}),
				new InputListItem({
					label: "Loaded",
					content: oLoadedEventSelect
				}),
				new InputListItem({
					label: "Error",
					content: oErrorEventSelect
				}),
				new InputListItem({
					label: "Source Validation Failed",
					content: oSourceValidationFailedEventSelect
				}),
				new InputListItem({
					label: "- Prevent default",
					content: oSourceValidationFailedPreventDefaultCheckbox
				}),
				new InputListItem({
					content: oRenderButton
				})
			]
		})
	});


	// page
	oPage1 = new Page("page1", {
		customHeader: oBar0 = new Bar({
			contentMiddle: oLabel0 = new Label({
				text: "PDFViewer demo page"
			})
		}),

		content: oMainContainer = new FlexBox({
			direction: "Row",
			fitContainer: true,
			renderType: "Div",
			items: [oSettingsList]
		})
	});
	oPage1.setModel(oModel, "settingsData")
	oSettingsList.setLayoutData(new FlexItemData({
		baseSize: "40%"
	}));

	oApp.addPage(oPage1);
	oApp.placeAt("body");
});