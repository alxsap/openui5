sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/ListItem",
	"sap/m/Select",
	"sap/m/CheckBox",
	"sap/ui/core/Item",
	"sap/m/MultiComboBox",
	"sap/ui/core/library",
	"sap/m/UploadCollectionParameter",
	"sap/m/ObjectAttribute",
	"sap/m/ObjectStatus",
	"sap/m/ObjectMarker",
	"sap/m/UploadCollectionItem",
	"sap/m/UploadCollection",
	"sap/m/Page",
	"sap/m/Toolbar",
	"sap/m/Button",
	"sap/m/Label",
	"sap/m/App",
	"sap/ui/util/Mobile",
	"sap/ui/thirdparty/jquery"
], function(
	JSONModel,
	MessageToast,
	ListItem,
	Select,
	CheckBox,
	Item,
	MultiComboBox,
	coreLibrary,
	UploadCollectionParameter,
	ObjectAttribute,
	ObjectStatus,
	ObjectMarker,
	UploadCollectionItem,
	UploadCollection,
	Page,
	Toolbar,
	Button,
	Label,
	App,
	Mobile,
	jQuery
) {
	"use strict";

	// shortcut for sap.ui.core.ValueState
	const ValueState = coreLibrary.ValueState;

	Mobile.init();

	/* =========================================================== */
	/* ComboBox for simulation of uploading status                 */
	/* =========================================================== */
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModelCBSR", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "bSimulateUploadingStatusSR", {
		configurable: "false",
		writable: "true",
		value: "false"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oUploadCompleteStub", {
		configurable: "false",
		writable: "true"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "mDataCBSR", {
		configurable: "false",
		writable: "true",

		value: {
			"items": [
				{
					"key": "false",
					"text": "false"
				},
				{
					"key": "true",
					"text": "true"
				}
			],
			"selected": "false"
		}
	});

	oModelCBSR.setData(mDataCBSR);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oListItemTemplate", {
		configurable: "false",
		writable: "true",

		value: new ListItem({
			key: "{key}",
			text: "{text}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oComboBoxSR", {
		configurable: "false",
		writable: "true",

		value: new Select({
			items: {
				path : "/items",
				template : oListItemTemplate,
				templateShareable : false
			},
			selectedKey: {
				path: "/selected"
			},
			change : function(oControlEvent) {
				bSimulateUploadingStatusSR = oControlEvent.mParameters.selectedItem.getKey();
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oBackendErrorCheckBox", {
		configurable: "false",
		writable: "true",
		value: new CheckBox()
	});

	oComboBoxSR.setModel(oModelCBSR);

	/* =========================================================== */
	/* ComboBox for Selection of Separator Style                   */
	/* =========================================================== */
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModelCB", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "mDataCB", {
		configurable: "false",
		writable: "true",

		value: {
			"items": [
				{
					"key": "All",
					"text": "sap.m.ListSeparators.All"
				},
				{
					"key": "None",
					"text": "sap.m.ListSeparators.None"
				}
			],

			"selected": "All"
		}
	});

	oModelCB.setData(mDataCB);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oComboBox", {
		configurable: "false",
		writable: "true",

		value: new Select({
			items: {
				path : "/items",
				template : oListItemTemplate,
				templateShareable : false
			},

			selectedKey: {
				path: "/selected"
			},

			change : function(oControlEvent) {
					var sSelected = oControlEvent.mParameters.selectedItem.getKey();
					oUploadCollection.setShowSeparators(sSelected);
			}
		})
	});

	oComboBox.setModel(oModelCB);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFileTypesModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "mFileTypesData", {
		configurable: "false",
		writable: "true",

		value: {
			"items": [
				{
					"key": "jpg",
					"text": "jpg"
				},
				{
					"key": "txt",
					"text": "txt"
				},
				{
					"key": "ppt",
					"text": "ppt"
				},
				{
					"key": "doc",
					"text": "doc"
				},
				{
					"key": "xls",
					"text": "xls"
				},
				{
					"key": "pdf",
					"text": "pdf"
				},
				{
					"key": "png",
					"text": "png"
				}
			],
			"selected" : ["jpg", "txt", "ppt", "doc", "xls", "pdf", "png"]
		}
	});

	oFileTypesModel.setData(mFileTypesData);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFileTypesListItemTemplate", {
		configurable: "false",
		writable: "true",

		value: new Item({
			key: "{key}",
			text: "{text}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFileTypesMultiComboBox", {
		configurable: "false",
		writable: "true",

		value: new MultiComboBox({
			items: {
				path : "/items",
				template : oFileTypesListItemTemplate,
				templateShareable : false
			},
			selectedKeys: {
				path: "/selected"
			},
			placeholder : "Choose the valid file types",
			selectionChange : function(oControlEvent) {
				oUploadCollection.setFileType(oFileTypesMultiComboBox.getSelectedKeys());
			},
			width : "250px"
		})
	});

	oFileTypesMultiComboBox.setModel(oFileTypesModel);

	/* =========================================================== */
	/* UploadCollection                                            */
	/* =========================================================== */
	// create JSON sample data
	// prefixes 'Dr.' & 'Date' stand for a deprecated property
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oData", {
		configurable: "false",
		writable: "true",

		value: {
			"items" : [
				{
					// item contains deprecated properties and aggregations (attributes & statuses)
					"contributor" : "Dr. David Silver",
					"documentId" : "64469d2f-b3c4-a517-20d6-f91ebf85b9da",
					"enableEdit" : true,
					"enableDelete" : true,
					"visibleEdit" : false,
					"visibleDelete" : false,
					"fileName" : "Screenshot.jpg",
					"fileSize" : 20,
					"mimeType" : "image/jpg",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-07-30",
					"attributes" : [{
						"title" : "Co-author",
						"text" : "Martin Silver",
						"active" : true
					}],
					"statuses" : [{
						"title" : "First status' title",
						"text" : "First status' text"
					}],
					"markers" : [{
						"type" : "Locked"
					}]
				}, {
					// item w/o aggregation statuses
					"contributor" : "Dr. John Smith",
					"documentId" : "5082cc4d-da9f-2835-2c0a-8100ed47bcde",
					"enableEdit" : true,
					"enableDelete" : false,
					"fileName" : "Notes.jpg",
					"fileSize" : 10,
					"mimeType" : "image/jpg",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-08-01",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Screenshot.jpg",
					"attributes" : [{
						"title" : "First attribute",
						"text" : "First attribute's text"
					}, {
						"title" : "Second attribute",
						"text" : "Second attribute's text"
					}],
					"markers" : [{
						"type" : "Locked"
					}]
				}, {
					// item w/o aggregation attributes
					"contributor" : "Dr. J Edgar Hoover",
					"documentId" : "5082cc4d-da9f-2835-2c0a-8100ed47bcdf",
					"enableEdit" : true,
					"enableDelete" : true,
					"visibleDelete" : false,
					"fileName" : "Document.txt",
					"fileSize" : 15,
					"mimeType" : "text/plain",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-09-01",
					"statuses" : [{
						"title" : "First status' title",
						"text" : "First status' text"
					}, {
						"title" : "Second status' title",
						"text" : "Second status' text"
					}],
					"markers" : [{
						"type" : "Favorite"
					}, {
						"type" : "Locked"
					}, {
						"type" : "Draft"
					}]
				}, {
					// item w/o deprecated properties
					"documentId" : "1700ead2-3dfb-5a94-6f5c-cf1da409e028",
					"enableEdit" : false,
					"enableDelete" : true,
					"visibleEdit" : false,
					"fileName" : "Third Quarter Results.ppt",
					"mimeType" : "application/vnd.ms-powerpoint",
					"thumbnailUrl" : "",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Third Quarter Results.ppt",
					"attributes" : [{
						"title" : "Uploaded",
						"text" : "2014-07-29",
						"active" : true
					}, {
						"title" : "Contributor",
						"text" : "Sean O'Connel"
					}, {
						"title" : "File size",
						"text" : "30kB"
					}],
					"markers" : [{
						"type" : "Locked"
					}]
				}, {
					// item with a long attribute's text
					"documentId" : "34e484e4-a523-6c50-685b-e5ae66069250",
					"enableEdit" : false,
					"enableDelete" : true,
					"fileName" : "Business Plan Agenda.doc",
					"mimeType" : "application/msword",
					"thumbnailUrl" : "",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Business Plan Agenda.doc",
					"attributes" : [{
						"title" : "Uploaded",
						"text" : "2014-07-28"
					}, {
						"title" : "Contributor",
						"text" : "Jane Burns"
					}, {
						"title" : "Third attribute with a very long text",
						"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
					}],
					"markers" : [{
						"type" : "Favorite"
					}, {
						"type" : "Locked"
					}, {
						"type" : "Draft"
					}]
				}, {
					// item with a long attribute's title and aggregation statuses
					"documentId" : "bcc27c4d-a8ce-3ab6-e807-ec05119685a5",
					"enableEdit" : true,
					"enableDelete" : true,
					"fileName" : "Business Plan Topics Plan Topics of 2015 Business Plan Topics of 2015 Business Plan Topics of 2015 Business Plan Topics of 2015 Business Plan Topics of 2015 Business Plan Topics of 2015 Business Plan Topics of 2015",
					"mimeType" : "application/msexcel",
					"thumbnailUrl" : "",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Business Plan Topics.xls",
					"attributes" : [{
						"title" : "Uploaded",
						"text" : "2014-07-27",
						"active" : true
					}, {
						"title" : "Contributor",
						"text" : "John Blacksmith Henderson"
					}, {
						"title" : "This attribute's title is as long as the story about The Wind and the Sun",
						"text" : "no value"
					}],
					"statuses" : [{
						"title" : "Status",
						"text" : "Success",
						"state" : ValueState.Success
					}],
					"markers" : [{
						"type" : "Locked"
					}, {
						"type" : "Draft"
					}, {
						"type" : "Favorite"
					}, {
						"type" : "Unsaved"
					}]
				}, {
					// item with aggregation statuses
					"contributor" : "Dr. David Keane",
					"documentId" : "6b6ccd2f-e5c2-15b7-3b67-191564850063",
					"enableEdit" : true,
					"enableDelete" : true,
					"fileName" : "Instructions.pdf",
					"fileSize" : 60,
					"mimeType" : "application/pdf",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-07-26",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Instructions.pdf",
					"statuses" : [{
						"title" : "Status",
						"text" : "Warning",
						"state" : ValueState.Warning
					}]
				}, {
					// item with aggregation statuses
					"contributor" : "Dr. Kate Brown",
					"documentId" : "b68a7065-cc2a-2140-922d-e7528cd32172",
					"enableEdit" : true,
					"enableDelete" : true,
					"fileName" : "Picture of a woman.png",
					"fileSize" : 70,
					"mimeType" : "image/png",
					"thumbnailUrl" : "images/Woman_04.png",
					"uploadedDate" : "Date: 2014-07-25",
					"url" : "images/Woman_04.png",
					"statuses" : [{
						"title" : "Status",
						"text" : "Error",
						"state" : ValueState.Error
					}]
				}, {
					// item with aggregation statuses
					"contributor" : "Dr. Susan Baker",
					"documentId" : "64469d2f-b3c4-a517-20d6-f91ebf85b9d1",
					"enableEdit" : true,
					"enableDelete" : true,
					"fileName" : "Screenshot2.JPEG",
					"fileSize" : 20,
					"mimeType" : "image/jpg",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-07-30",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Screenshot.jpg",
					"statuses" : [{
						"title" : "Status",
						"text" : "None",
						"state" : ValueState.None
					}]
				}, {
					// item with aggregation containing many attributes
					"contributor" : "Dr. John Smith",
					"documentId" : "5082cc4d-da9f-2835-2c0a-8100ed47bcd2",
					"enableEdit" : true,
					"enableDelete" : false,
					"fileName" : "Notes2.txt",
					"fileSize" : 10,
					"mimeType" : "text/plain",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-08-01",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Notes.txt",
					"attributes" : [{
						"title" : "Attribute 01",
						"text" : "Value 01"
					}, {
						"title" : "Attribute 02",
						"text" : "Value 02"
					}, {
						"title" : "Attribute 03",
						"text" : "Value 03"
					}, {
						"title" : "Attribute 04",
						"text" : "Value 04"
					}, {
						"title" : "Attribute 05",
						"text" : "Value 05"
					}, {
						"title" : "Attribute 06",
						"text" : "Value 06"
					}, {
						"title" : "Attribute 07",
						"text" : "Value 07"
					}, {
						"title" : "Attribute 08",
						"text" : "Value 08"
					}, {
						"title" : "Attribute 09",
						"text" : "Value 09"
					}, {
						"title" : "Attribute 10",
						"text" : "Value 10"
					}, {
						"title" : "Attribute 11",
						"text" : "Value 11"
					}, {
						"title" : "Attribute 12",
						"text" : "Value 12"
					}, {
						"title" : "Attribute 13",
						"text" : "Value 13"
					}, {
						"title" : "Attribute 14",
						"text" : "Value 14"
					}, {
						"title" : "Attribute 15",
						"text" : "Value 15"
					}, {
						"title" : "Attribute 16",
						"text" : "Value 16"
					}, {
						"title" : "Attribute 17",
						"text" : "Value 17"
					}, {
						"title" : "Attribute 18",
						"text" : "Value 18"
					}, {
						"title" : "Attribute 19",
						"text" : "Value 19"
					}, {
						"title" : "Attribute 20",
						"text" : "Value 20"
					}]
				}, {
					// item w/o aggregations
					"contributor" : "Dr. J Edgar Hoover",
					"documentId" : "5082cc4d-da9f-2835-2c0a-8100ed47bcd1",
					"enableEdit" : true,
					"enableDelete" : true,
					"fileName" : "Document2.txt",
					"fileSize" : 15,
					"mimeType" : "text/plain",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-09-01",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Document.txt",
				}, {
					"contributor" : "Dr. Sean O'Connel",
					"documentId" : "1700ead2-3dfb-5a94-6f5c-cf1da409e02a",
					"enableEdit" : false,
					"enableDelete" : true,
					"fileName" : "Third Quarter Results2.ppt",
					"fileSize" : 30,
					"mimeType" : "application/vnd.ms-powerpoint",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-07-29",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Third Quarter Results.ppt",
				}, {
					"contributor" : "Dr. Jane Burns",
					"documentId" : "34e484e4-a523-6c50-685b-e5ae6606925a",
					"enableEdit" : false,
					"enableDelete" : true,
					"fileName" : "Business Plan Agenda2.doc",
					"fileSize" : 40,
					"mimeType" : "application/msword",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-07-28",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Business Plan Agenda.doc",
				}, {
					"contributor" : "Dr. John Black",
					"documentId" : "bcc27c4d-a8ce-3ab6-e807-ec05119685aa",
					"enableEdit" : true,
					"enableDelete" : true,
					"fileName" : "Business Plan Topics2.xls",
					"fileSize" : 50,
					"mimeType" : "application/msexcel",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-07-27",
					"url" : "demokit/sample/UploadCollection/LinkedDocuments/Business Plan Topics.xls",
				}, {
					"contributor" : "Dr. David Keane",
					"documentId" : "6b6ccd2f-e5c2-15b7-3b67-19156485006a",
					"enableEdit" : true,
					"enableDelete" : true,
					"fileName" : "Instructions2.pdf",
					"fileSize" : 60,
					"mimeType" : "application/pdf",
					"thumbnailUrl" : "",
					"uploadedDate" : "Date: 2014-07-26",
					"url" : ""
				}, {
					"contributor" : "Dr. Kate Brown",
					"documentId" : "b68a7065-cc2a-2140-922d-e7528cd3217a",
					"enableEdit" : true,
					"enableDelete" : true,
					"fileName" : "Picture of a woman and Picture of a woman2 Hurra!?!?!?!.png",
					"fileSize" : 70,
					"mimeType" : "image/png",
					"thumbnailUrl" : "images/Woman_04.png",
					"uploadedDate" : "Date: 2014-07-25",
					"url" : "images/Woman_04.png"
				}
			]
		}
	});

	// create JSON model instance
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	// set the data for the model
	oModel.setData(oData);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aFileTypes", {
		configurable: "false",
		writable: "true",
		value: ["jPg", "tXT", "ppt", "doc", "xls", "pdf", "PNG"]
	});

	/* =========================================================== */
	/* Handle UploadCollection events                              */
	/* =========================================================== */
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnChange", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			MessageToast.show("Change event triggered.");
			// simulate status uploading for screen reader support
			if(bSimulateUploadingStatusSR === "true") {
				if (oUploadCompleteStub === undefined) {
					oUploadCompleteStub = oUploadCollection._onUploadComplete;
					oUploadCollection._onUploadComplete = function () {
						return;
					};
				}
				oUploadCollection.invalidate();
			} else if (oUploadCompleteStub) {
				oUploadCollection._onUploadComplete = oUploadCompleteStub;
			}
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnFileDeleted", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			var oData = oUploadCollection.getModel().getData();
			var aItems = jQuery.extend(true, {}, oData).items;
			var sDocumentId = oEvent.getParameter("documentId");
			jQuery.each(aItems, function(index) {
				if (aItems[index] && aItems[index].documentId === sDocumentId) {
					aItems.splice(index, 1);
				}
			});
			oModel.setData({
				"items" : aItems
			});
			MessageToast.show("FileDeleted event triggered.");
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnfilenameLengthExceed", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			MessageToast.show("FilenameLengthExceed event triggered.");
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnFileRenamed", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			var oData = oUploadCollection.getModel().getData();
			var aItems = jQuery.extend(true, {}, oData).items;
			var sDocumentId = oEvent.getParameter("documentId");
			jQuery.each(aItems, function(index) {
				if (aItems[index] && aItems[index].documentId === sDocumentId) {
					aItems[index].fileName = oEvent.getParameter("item").getFileName();
				}
			});
			oModel.setData({
				"items" : aItems
			});
			MessageToast.show("FileRenamed event triggered.");
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnFileSizeExceed", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			MessageToast.show("FileSizeExceed event triggered.");
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnTypeMissmatch", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			MessageToast.show("TypeMissmatch event triggered.");
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "onAttributePress", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			MessageToast.show("Attribute press event - " + oEvent.getSource().getTitle() + ": " + oEvent.getSource().getText());
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "onMarkerPress", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			MessageToast.show("Marker press event - " + oEvent.getSource().getType());
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnUploadComplete", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			if (oBackendErrorCheckBox.getSelected() === false) {
				var oData = oUploadCollection.getModel().getData();
				var aItems = jQuery.extend(true, {}, oData).items;
				var oItem = {};
				var sUploadedFile = oEvent.getParameter("files")[0].fileName;
				oItem = {
					"contributor" : "You",
					"documentId" : jQuery.now().toString(), // generate Id
					"fileName" : sUploadedFile,
					"fileSize" : 10, // TODO get file size
					"mimeType" : "",
					"thumbnailUrl" : "",
					"uploadedDate" : new Date(jQuery.now()).toLocaleDateString(),
					"url" : ""
				};
				aItems.unshift(oItem);
				oModel.setData({
					"items" : aItems
				});
			} else {
				oUploadCollection.getBinding("items").refresh(true);
			}
			setTimeout(function () {
				MessageToast.show("UploadComplete event triggered.");
			}, 3000);
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnBeforeUploadStarts", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			var sHeaderParameterName = "timestamp";
			if (!oEvent.getParameters().getHeaderParameter(sHeaderParameterName) ) {
				var oHeaderParameter = new UploadCollectionParameter({
					name: sHeaderParameterName,
					value: jQuery.now()
				});
				oEvent.getParameters().addHeaderParameter(oHeaderParameter);
			}
			setTimeout(function () {
				MessageToast.show("BeforeUploadStarts event triggered.");
			}, 2000);
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "fnUploadTerminated", {
		configurable: "false",
		writable: "true",

		value: function(oEvent) {
			oEvent.getParameter("fileName");
			oEvent.getParameters().getHeaderParameter();
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oAttributeTemplate", {
		configurable: "false",
		writable: "true",

		value: new ObjectAttribute({
			title : "{data>title}",
			text : "{data>text}",
			textDirection : "{data>textDirection}",
			active : "{data>active}",
			press: onAttributePress
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oStatusTemplate", {
		configurable: "false",
		writable: "true",

		value: new ObjectStatus({
			title : "{data>title}",
			text : "{data>text}",
			state : "{dara>state}",
			icon : "{data>icon}",
			iconDensityAware : "{data>iconDensityAware}",
			textDirection : "{data>textDirection}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMarkerTemplate", {
		configurable: "false",
		writable: "true",

		value: new ObjectMarker({
			type : "{data>type}",
			visibility : "{data>visibility}",
			press : onMarkerPress
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oItemTemplate", {
		configurable: "false",
		writable: "true",

		value: new UploadCollectionItem({
			contributor : "{data>contributor}",
			documentId : "{data>documentId}",
			enableEdit : "{data>enableEdit}",
			enableDelete : "{data>enableDelete}",
			visibleEdit : "{data>visibleEdit}",
			visibleDelete : "{data>visibleDelete}",
			fileName : "{data>fileName}",
			fileSize : "{data>fileSize}",
			mimeType : "{data>mimeType}",
			thumbnailUrl : "{data>thumbnailUrl}",
			uploadedDate : "{data>uploadedDate}",
			url : "{data>url}",
			ariaLabelForPicture : "{data>ariaLabelForPicture}",
			attributes : {
				path : "data>attributes",
				template : oAttributeTemplate,
				templateShareable : false
			},
			statuses : {
				path : "data>statuses",
				template : oStatusTemplate,
				templateShareable : false
			},
			markers : {
				path : "data>markers",
				template : oMarkerTemplate,
				templateShareable : false
			}
		})
	});

	// create instance of UploadCollection and set model
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oUploadCollection", {
		configurable: "false",
		writable: "true",

		value: new UploadCollection({
			maximumFilenameLength : 55,
			multiple : true,
			fileType : oFileTypesMultiComboBox.getSelectedKeys(),
			items : {
				path : "data>/items/",
				template : oItemTemplate,
				templateShareable : false
			},
			sameFilenameAllowed : false,
			// events
			change : fnChange,
			fileDeleted : fnFileDeleted,
			filenameLengthExceed : fnfilenameLengthExceed,
			fileRenamed : fnFileRenamed,
			fileSizeExceed : fnFileSizeExceed,
			typeMissmatch : fnTypeMissmatch,
			uploadComplete : fnUploadComplete,
			beforeUploadStarts : fnBeforeUploadStarts,
			uploadTerminated : fnUploadTerminated
		})
	});

	oUploadCollection.setShowSeparators(oComboBox.getSelectedKey());

	/* =========================================================== */
	/* Create Page                   */
	/* =========================================================== */
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage", {
		configurable: "false",
		writable: "true",

		value: new Page("page", {
			title : "Test Page for sap.m.UploadCollection",
			headerContent : new Toolbar({
				content: [
					new Button({
						text: "Rerender UC",
						press: function (oEvent) {
							oUploadCollection.invalidate();
						}
					}),
					new Label({
						text: "Simulates a backend error:"
					}),
					oBackendErrorCheckBox,
					new Label({
						text: "Simulates the uploading status for screen reader:"
					}),
					oFileTypesMultiComboBox,
					oComboBoxSR,
					new Label({
						text: "Layout:"
					}),
					oComboBox
				]
			}),
			content : oUploadCollection
		})
	});

	oPage.setModel(oModel, "data");

	// create a mobile App embedding the page and place the App into the HTML document
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",

		value: new App("myApp", {
			pages : [oPage]
		}).placeAt("content")
	});
});