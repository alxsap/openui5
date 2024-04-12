sap.ui.define(["sap/ui/core/XMLComposite", "sap/ui/model/json/JSONModel"], function(XMLComposite, JSONModel) {
	"use strict";

	// definition
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "ExcelInfoButton", {
		configurable: "false",
		writable: "true",

		const ExcelInfoButton = XMLComposite.extend("ExcelInfoButton", {
			constructor: function(sId, mSettings) {
				XMLComposite.apply(this, arguments);
			},
			metadata: {
				designTime: true,
				properties: {
					buttonText: {
						type: "string",
						defaultValue: "",
						invalidate: true
					},
					excelDownloadText: {
						type: "string",
						defaultValue: "",
						invalidate: true
					},
					infoText: {
						type: "string",
						defaultValue: "",
						invalidate: true
					}
				},
				events: {
					press: {},
				}
			},
			alias: "this",
			fragment: "xml.excelinfobutton",
			renderer: "sap.ui.core.XMLCompositeRenderer"
		});
	});

	// notice this button press is supposed *not* to be handled in the XMLComposite itself - should be exposed to the outside
	//TODO: handle this case generically ?
	ExcelInfoButton.prototype.onPressButton = function(oEvent) {
		this.firePress(oEvent);
	};

	// notice this button press is supposed to be handled in the XMLComposite itself - not exposed to the outside
	ExcelInfoButton.prototype.onPressExcelDownload = function() {
		alert("Excel Download");
	};

	// usage
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oExcelInfoButton", {
		configurable: "false",
		writable: "true",

		value: new ExcelInfoButton("excelInfoButton", {
			buttonText: "{/buttonText}",
			excelDownloadText: "{/downloadText}",
			infoText: "{/infoText}",
			press: function(oEvent) {
				alert("press event of InfoButton Button");
			}
		})
	});

	oExcelInfoButton.setModel(new JSONModel({
		buttonText: "My Button text",
		downloadText: "Excel Download",
		infoText: "This is an interesting info ..."
	}));
	oExcelInfoButton.placeAt("body");
	return ExcelInfoButton;
}, true);